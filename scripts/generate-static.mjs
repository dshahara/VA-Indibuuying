import * as cheerio from "cheerio";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, extname, join, posix } from "node:path";

const SOURCE_ORIGIN = "https://indibuying.com";
const DIST_DIR = "dist";
const ASSET_PREFIX = "/assets/remote";
const FETCH_CONCURRENCY = 6;

const extraUrls = [
  `${SOURCE_ORIGIN}/category/general/`,
];

const staticRedirects = [
  "/contact/ /contact-us/ 301",
  "/home/ / 301",
  "https://www.indibuying.com/* https://indibuying.com/:splat 301!",
];

const assetMap = new Map();
const assetQueue = [];
const seenPages = new Set();

async function main() {
  await rm(DIST_DIR, { recursive: true, force: true });
  await mkdir(DIST_DIR, { recursive: true });

  const [pages, posts, categories] = await Promise.all([
    wpAll("pages"),
    wpAll("posts"),
    wpAll("categories"),
  ]);

  const pageUrls = unique([
    ...pages.map((page) => page.link),
    ...posts.map((post) => post.link),
    ...extraUrls,
  ]).filter(Boolean);

  const postCards = posts.map((post) => ({
    title: decodeEntities(post.title?.rendered || "Untitled"),
    href: localHref(post.link),
    excerpt: stripHtml(post.excerpt?.rendered || "").replace(/\s+\[&hellip;\]$/, ""),
    date: formatDate(post.date),
    category: categoryLabel(post.categories?.[0], categories),
  }));

  for (const url of pageUrls) {
    await writePage(url, { postCards });
  }

  await drainAssets();
  await writeSupportFiles(pageUrls);

  console.log(`Generated ${pageUrls.length} pages and ${assetMap.size} local assets in ${DIST_DIR}/`);
}

async function writePage(url, context) {
  if (seenPages.has(url)) return;
  seenPages.add(url);

  const html = await fetchText(url);
  const $ = cheerio.load(html, { decodeEntities: false });

  sanitizeHead($);
  sanitizeBody($);
  replaceContactForms($);
  enhanceBlogIndex($, context.postCards);
  rewriteLinksAndAssets($);
  injectStaticStyles($);

  const outPath = filePathForUrl(url);
  const output = rewriteRawAssetUrls($.html());
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, "<!doctype html>\n" + output, "utf8");
}

async function wpAll(type) {
  const out = [];
  let page = 1;

  while (true) {
    const url = new URL(`${SOURCE_ORIGIN}/wp-json/wp/v2/${type}`);
    url.searchParams.set("per_page", "100");
    url.searchParams.set("page", String(page));
    if (type === "pages" || type === "posts") {
      url.searchParams.set("_fields", "id,slug,link,title,excerpt,date,categories,modified");
    }

    const response = await fetchWithRetry(url);
    if (response.status === 400 && page > 1) break;
    if (!response.ok) throw new Error(`WordPress API failed for ${type}: ${response.status}`);

    const items = await response.json();
    out.push(...items);
    const totalPages = Number(response.headers.get("x-wp-totalpages") || "1");
    if (page >= totalPages || items.length === 0) break;
    page += 1;
  }

  return out;
}

function sanitizeHead($) {
  $("meta[name='generator']").remove();
  $("link[rel='https://api.w.org/'], link[rel='EditURI'], link[rel='alternate'][type*='rss'], link[rel='alternate'][type*='oembed'], link[rel='shortlink'], link[rel='pingback'], link[href*='wp-json']").remove();
  $("link[href*='sureforms']").remove();
  $("script").each((_, el) => {
    const src = $(el).attr("src") || "";
    const body = $(el).html() || "";
    const type = $(el).attr("type") || "";
    if (
      type === "speculationrules" ||
      src.includes("wp-admin") ||
      src.includes("sureforms") ||
      src.includes("admin-ajax") ||
      body.includes("admin-ajax") ||
      body.includes("_googlesitekit")
    ) {
      $(el).remove();
    }
  });
}

function sanitizeBody($) {
  $("#wpadminbar, .skip-link").remove();
  $("a[href*='wp-admin'], a[href*='wp-login.php']").removeAttr("href");
  $("script").each((_, el) => {
    const src = $(el).attr("src") || "";
    const body = $(el).html() || "";
    if (src.includes("sureforms") || body.includes("srfm-form")) $(el).remove();
  });
}

function replaceContactForms($) {
  $(".srfm-form-container").each((_, el) => {
    $(el).replaceWith(`
      <form class="static-contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you/">
        <input type="hidden" name="form-name" value="contact">
        <p class="netlify-hidden"><label>Do not fill this out: <input name="bot-field"></label></p>
        <label><span>Name *</span><input name="name" type="text" placeholder="Name *" required></label>
        <label><span>Email *</span><input name="email" type="email" placeholder="Email *" required></label>
        <label><span>Company Name</span><input name="company" type="text" placeholder="Company Name"></label>
        <label><span>Country</span><input name="country" type="text" placeholder="Country"></label>
        <label><span>Phone / WhatsApp Number *</span><input name="phone" type="tel" placeholder="Phone / WhatsApp Number *" required></label>
        <label><span>Message</span><textarea name="message" rows="4" placeholder="Enter your message"></textarea></label>
        <button type="submit">Send A Message</button>
      </form>
    `);
  });
}

function enhanceBlogIndex($, postCards) {
  const canonical = $("link[rel='canonical']").attr("href") || "";
  if (!canonical.endsWith("/blogs/")) return;

  const cards = postCards.map((post) => `
    <article class="static-post-card">
      <div class="static-post-meta">${escapeHtml(post.category)} · ${escapeHtml(post.date)}</div>
      <h2><a href="${post.href}">${escapeHtml(post.title)}</a></h2>
      <p>${escapeHtml(post.excerpt)}</p>
      <a class="static-read-more" href="${post.href}">Read More</a>
    </article>
  `).join("");

  const content = $("#content .entry-content, main .entry-content, .entry-content").first();
  if (content.length) {
    content.append(`<section class="static-blog-grid" aria-label="All blog posts">${cards}</section>`);
  }
}

function rewriteLinksAndAssets($) {
  $("[href]").each((_, el) => {
    const value = $(el).attr("href");
    const rewritten = rewriteUrl(value);
    if (rewritten) $(el).attr("href", rewritten);
  });

  $("[src]").each((_, el) => {
    const value = $(el).attr("src");
    const rewritten = rewriteUrl(value, true);
    if (rewritten) $(el).attr("src", rewritten);
  });

  $("[srcset]").each((_, el) => {
    const value = $(el).attr("srcset");
    if (!value) return;
    const rewritten = value.split(",").map((part) => {
      const trimmed = part.trim();
      const [url, descriptor] = trimmed.split(/\s+/, 2);
      const nextUrl = rewriteUrl(url, true) || url;
      return descriptor ? `${nextUrl} ${descriptor}` : nextUrl;
    }).join(", ");
    $(el).attr("srcset", rewritten);
  });

  $("form[ajaxurl], form[data-submit-token]").removeAttr("ajaxurl data-submit-token form-id after-submission message-type success-url");

  $("[content]").each((_, el) => {
    const value = $(el).attr("content");
    if (!/^https?:\/\/(?:www\.)?indibuying\.com\/wp-content\//.test(value || "")) return;
    const rewritten = rewriteUrl(value, true);
    if (rewritten) $(el).attr("content", rewritten);
  });
}

function rewriteUrl(value, isAsset = false) {
  if (!value || value.startsWith("#") || value.startsWith("mailto:") || value.startsWith("tel:") || value.startsWith("data:")) {
    return value;
  }

  let parsed;
  try {
    parsed = new URL(value, SOURCE_ORIGIN);
  } catch {
    return value;
  }

  const host = parsed.hostname.replace(/^www\./, "");
  if (host === "indibuying.com") {
    const assetLike = isAsset || parsed.pathname.startsWith("/wp-content/") || hasAssetExtension(parsed.pathname);
    if (assetLike) return queueAsset(parsed);
    return localHref(parsed.href);
  }

  return value;
}

function queueAsset(url) {
  url.hash = "";
  const source = url.href;
  if (assetMap.has(source)) return assetMap.get(source);

  const localPath = `${ASSET_PREFIX}${url.pathname}`;
  assetMap.set(source, localPath);
  assetQueue.push({ source, localPath });
  return localPath;
}

async function drainAssets() {
  let index = 0;
  const workers = Array.from({ length: FETCH_CONCURRENCY }, async () => {
    while (index < assetQueue.length) {
      const item = assetQueue[index++];
      await downloadAsset(item);
    }
  });
  await Promise.all(workers);
}

async function downloadAsset({ source, localPath }) {
  const response = await fetchWithRetry(source);
  if (!response.ok) {
    if (isImagePath(localPath)) {
      const outPath = join(DIST_DIR, localPath);
      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, transparentPng());
      console.warn(`Replaced missing image ${source}: ${response.status}`);
      return;
    }
    console.warn(`Skipping missing asset ${source}: ${response.status}`);
    return;
  }

  const outPath = join(DIST_DIR, localPath);
  await mkdir(dirname(outPath), { recursive: true });

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("text/css") || localPath.endsWith(".css")) {
    let css = await response.text();
    css = rewriteCssUrls(css, source);
    await writeFile(outPath, css, "utf8");
    return;
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(outPath, buffer);
}

function rewriteRawAssetUrls(html) {
  return html.replace(/https?:\\?\/\\?\/(?:www\.)?indibuying\.com\\?\/wp-content\\?\/[^"'\s<>)]+/g, (raw) => {
    const normalized = raw.replaceAll("\\/", "/");
    try {
      return queueAsset(new URL(normalized));
    } catch {
      return raw;
    }
  });
}

function rewriteCssUrls(css, baseUrl) {
  return css.replace(/url\((['"]?)(.*?)\1\)/g, (match, quote, rawUrl) => {
    if (!rawUrl || rawUrl.startsWith("data:") || rawUrl.startsWith("#")) return match;
    try {
      const absolute = new URL(rawUrl, baseUrl);
      if (absolute.hostname.replace(/^www\./, "") !== "indibuying.com") return match;
      const local = queueAsset(absolute);
      return `url(${quote}${local}${quote})`;
    } catch {
      return match;
    }
  });
}

async function writeSupportFiles(pageUrls) {
  await writeFile(join(DIST_DIR, "_redirects"), staticRedirects.join("\n") + "\n", "utf8");

  await writeFile(join(DIST_DIR, "robots.txt"), [
    "User-agent: *",
    "Allow: /",
    "Sitemap: https://indibuying.com/sitemap.xml",
    "",
  ].join("\n"), "utf8");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pageUrls.map((url) => `  <url><loc>${SOURCE_ORIGIN}${new URL(url).pathname}</loc></url>`).join("\n")}\n</urlset>\n`;
  await writeFile(join(DIST_DIR, "sitemap.xml"), sitemap, "utf8");

  await writeFile(join(DIST_DIR, "thank-you", "index.html"), thankYouPage(), "utf8").catch(async () => {
    await mkdir(join(DIST_DIR, "thank-you"), { recursive: true });
    await writeFile(join(DIST_DIR, "thank-you", "index.html"), thankYouPage(), "utf8");
  });
}

function injectStaticStyles($) {
  $("head").append(`
    <style id="indibuying-static-overrides">
      :root { --indibuying-green: #1eaf12; --indibuying-ink: #18221b; --indibuying-soft: #f6f8f4; }
      html { scroll-behavior: smooth; }
      body { overflow-x: hidden; }
      img { max-width: 100%; height: auto; }
      .entry-content, .site-content { word-break: normal; overflow-wrap: anywhere; }
      .wp-block-table { overflow-x: auto; }
      .wp-block-table table { min-width: 720px; border-collapse: collapse; }
      .wp-block-table td, .wp-block-table th { border: 1px solid rgba(24,34,27,.14); padding: 12px; vertical-align: top; }
      .static-contact-form { display: grid; gap: 14px; padding: 24px; border-radius: 12px; background: #19231c; color: white; max-width: 680px; }
      .static-contact-form label { display: grid; gap: 6px; color: white; font-weight: 700; }
      .static-contact-form label span { font-size: 14px; }
      .static-contact-form input, .static-contact-form textarea { width: 100%; border: 1px solid rgba(255,255,255,.22); background: rgba(255,255,255,.06); color: white; border-radius: 8px; padding: 12px 14px; min-height: 44px; }
      .static-contact-form input::placeholder, .static-contact-form textarea::placeholder { color: rgba(255,255,255,.68); }
      .static-contact-form button { justify-self: start; border: 0; border-radius: 999px; background: var(--indibuying-green); color: white; padding: 12px 22px; font-weight: 800; cursor: pointer; }
      .netlify-hidden { display: none; }
      .static-blog-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 22px; max-width: 1180px; margin: 48px auto; padding: 0 20px; }
      .static-post-card { border: 1px solid rgba(24,34,27,.12); border-radius: 8px; padding: 22px; background: white; box-shadow: 0 10px 28px rgba(24,34,27,.07); }
      .static-post-card h2 { font-size: clamp(22px, 2vw, 28px); line-height: 1.2; margin: 8px 0 10px; }
      .static-post-meta { color: var(--indibuying-green); font-weight: 800; font-size: 13px; text-transform: uppercase; }
      .static-read-more { display: inline-flex; margin-top: 8px; font-weight: 800; }
      @media (max-width: 720px) {
        h1, .entry-content h1 { font-size: 38px !important; line-height: 1.12 !important; }
        h2, .entry-content h2 { font-size: 30px !important; line-height: 1.2 !important; }
        .static-contact-form { padding: 18px; }
      }
    </style>
  `);
}

function filePathForUrl(url) {
  const parsed = new URL(url);
  const clean = parsed.pathname === "/" ? "/index.html" : `${parsed.pathname.replace(/\/$/, "")}/index.html`;
  return join(DIST_DIR, clean);
}

function localHref(url) {
  const parsed = new URL(url, SOURCE_ORIGIN);
  if (parsed.hostname.replace(/^www\./, "") !== "indibuying.com") return url;
  return parsed.pathname + parsed.search + parsed.hash;
}

function hasAssetExtension(pathname) {
  return [".css", ".js", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".ico", ".woff", ".woff2", ".ttf", ".eot", ".pdf", ".mp4", ".webm"].includes(extname(pathname).toLowerCase());
}

function isImagePath(pathname) {
  return [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".ico"].includes(extname(pathname).toLowerCase());
}

function transparentPng() {
  return Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p9sAAAAASUVORK5CYII=", "base64");
}

function unique(items) {
  return [...new Set(items)];
}

function decodeEntities(value) {
  return cheerio.load(`<p>${value}</p>`).text();
}

function stripHtml(value) {
  return decodeEntities(value).replace(/\s+/g, " ").trim();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(value));
}

function categoryLabel(id, categories) {
  const category = categories.find((item) => item.id === id);
  return decodeEntities(category?.name || "Blog");
}

async function fetchText(url) {
  const response = await fetchWithRetry(url);
  if (!response.ok) throw new Error(`Fetch failed ${url}: ${response.status}`);
  return response.text();
}

async function fetchWithRetry(url, attempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, { headers: { "User-Agent": "Indibuying static export" } });
      if (response.ok || response.status === 404 || attempt === attempts) return response;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
      if (attempt === attempts) throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, attempt * 700));
  }
  throw lastError;
}

function thankYouPage() {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Thank you | Indibuying</title>
  <style>
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; font-family: Nunito, Arial, sans-serif; background: #f6f8f4; color: #18221b; }
    main { max-width: 680px; padding: 32px; text-align: center; }
    h1 { font-size: clamp(36px, 6vw, 58px); line-height: 1.05; }
    a { display: inline-flex; margin-top: 18px; color: white; background: #1eaf12; border-radius: 999px; padding: 12px 20px; text-decoration: none; font-weight: 800; }
  </style>
</head>
<body>
  <main>
    <h1>Thank you.</h1>
    <p>Your message has been sent to Indibuying. The team will get back to you shortly.</p>
    <a href="/">Back to home</a>
  </main>
</body>
</html>`;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
