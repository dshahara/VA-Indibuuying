import { copyFile, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const DESIGN_DIR = "Indibuying Design System";
const WEBSITE_DIR = join(DESIGN_DIR, "ui_kits", "website");
const OUT_DIR = "va-site";

const SOURCE_HTML = join(WEBSITE_DIR, "inventory-procurement-va.html");
const SOURCE_CSS = join(WEBSITE_DIR, "va.css");
const SOURCE_TOKENS = join(DESIGN_DIR, "colors_and_type.css");
const SOURCE_LOGO = join(DESIGN_DIR, "assets", "logo-mark.png");
const OUT_TEAM_DIR = join(OUT_DIR, "assets", "team");
const TEAM_MEMBERS = [
  ["deepanshu", "Deepanshu"],
  ["amrish", "Amrish"],
  ["shibu", "Shibu"],
  ["garima", "Garima"],
  ["aditi", "Aditi"],
  ["anjali", "Anjali"],
  ["anuj", "Anuj"],
  ["kriti", "Kriti"],
  ["deeksha", "Deeksha"],
];
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

const GENERATED_NOTE = [
  "<!--",
  "  Generated from the Indibuying design system by scripts/build-va-site.mjs.",
  "  Edit the design-system source or this script, then rerun npm run build:va.",
  "-->",
].join("\n");

async function main() {
  await mkdir(join(OUT_DIR, "assets"), { recursive: true });

  const [sourceHtml, sourceCss, tokenCss] = await Promise.all([
    readFile(SOURCE_HTML, "utf8"),
    readFile(SOURCE_CSS, "utf8"),
    readFile(SOURCE_TOKENS, "utf8"),
  ]);
  const teamPhotos = await copyTeamPhotos();

  const html = buildHtml(sourceHtml, teamPhotos);
  const css = buildCss(tokenCss, sourceCss);

  await writeText(join(OUT_DIR, "inventory-procurement-va.html"), html);
  await writeText(join(OUT_DIR, "index.html"), html);
  await writeText(join(OUT_DIR, "va.css"), css);
  await copyFile(SOURCE_LOGO, join(OUT_DIR, "assets", "logo-mark.png"));

  console.log(`Built standalone VA landing page in ${OUT_DIR}/`);
}

async function copyTeamPhotos() {
  const files = await readdir(OUT_TEAM_DIR).catch(() => []);
  const fileByLowerName = new Map(files.map((file) => [file.toLowerCase(), file]));
  const photos = new Map();

  await mkdir(OUT_TEAM_DIR, { recursive: true });

  for (const [slug] of TEAM_MEMBERS) {
    const file = IMAGE_EXTENSIONS
      .map((ext) => `${slug}${ext}`)
      .map((name) => fileByLowerName.get(name))
      .find(Boolean);

    if (!file) continue;

    photos.set(slug, file);
  }

  return photos;
}

function buildHtml(html, teamPhotos) {
  let out = html
    .replace("<!doctype html>\n", `<!doctype html>\n${GENERATED_NOTE}\n`)
    .replace(
      "<title>Indibuying — Inventory &amp; Procurement VA</title>",
      [
        "<title>Inventory &amp; Procurement VA | Indibuying</title>",
        '<meta name="description" content="Dedicated inventory and procurement operations support for import-led businesses: PO tracking, inventory reconciliation, billing audits, ERP updates, supplier follow-up, and inbound coordination.">',
        '<link rel="canonical" href="https://va.indibuying.com/">',
        '<meta property="og:title" content="Inventory &amp; Procurement VA | Indibuying">',
        '<meta property="og:description" content="Start with a $99 workflow trial for recurring inventory and procurement work.">',
        '<meta property="og:type" content="website">',
        '<meta property="og:url" content="https://va.indibuying.com/">',
      ].join("\n")
    )
    .replaceAll("../../assets/logo-mark.png", "assets/logo-mark.png")
    .replace('href="home.html"', 'href="https://indibuying.com/"')
    .replaceAll('href="#pricing">Start the $99 trial', 'href="#call">Start the $99 trial')
    .replaceAll('href="#pricing">Start the $99 trial', 'href="#call">Start the $99 trial')
    .replaceAll('href="#call">Book a 20-minute call', 'href="#call">Book a 20-minute call')
    .replace(/<template id="__bundler_thumbnail">[\s\S]*?<\/template>\n?/, "");

  for (const [slug, name] of TEAM_MEMBERS) {
    const file = teamPhotos.get(slug);
    if (!file) continue;
    const avatarPattern = new RegExp(`<div class="avatar" data-team="${slug}">[A-Z]</div>`);
    out = out.replace(avatarPattern, `<img src="assets/team/${file}" alt="${name}">`);
  }

  out = out.replace(
    /<!-- ── 11\. Testimonials[\s\S]*?<!-- ── 12\. Team/s,
    "<!-- ── 11. Team"
  );

  out = out
    .replaceAll(
      "[X years relevant experience] · [systems used] · [supplier markets]",
      "Inventory, procurement, documentation, supplier follow-up, and recurring operations support."
    )
    .replace(
      "Photographs and credential lines are placeholders until verified details are supplied.",
      "Team photographs can be added when final portraits are ready."
    );

  out = out.replace(
    /<section class="sec tight" id="call"[\s\S]*?<\/section>\n\n<footer class="site">/s,
    `${finalCtaSection()}\n\n<footer class="site">`
  );

  return out;
}

function finalCtaSection() {
  return `<section class="sec tight" id="call" data-screen-label="Final CTA">
<div class="wrap"><div class="banner lead-banner">
<div class="stack g16">
<h2 class="h2">Give us one recurring inventory or procurement workflow.</h2>
<p class="sub">We will run it once, document the output, and show you whether an Indibuying assistant can take it off your team's plate every week.</p>
<p class="tiny">Use the form to start the $99 workflow trial or request a 20-minute fit call.</p>
</div>
<form class="lead-form" name="inventory-procurement-va" method="POST" data-netlify="true" netlify-honeypot="bot-field">
<input type="hidden" name="form-name" value="inventory-procurement-va">
<p class="netlify-hidden"><label>Do not fill this out: <input name="bot-field"></label></p>
<label><span>Name</span><input name="name" type="text" autocomplete="name" required></label>
<label><span>Work email</span><input name="email" type="email" autocomplete="email" required></label>
<label><span>Company</span><input name="company" type="text" autocomplete="organization"></label>
<label><span>Phone or WhatsApp</span><input name="phone" type="tel" autocomplete="tel"></label>
<label class="full"><span>Workflow to test</span><textarea name="workflow" rows="4" placeholder="Example: Audit 20 recent POs against invoices and receivers" required></textarea></label>
<button class="pill green" type="submit">Send trial request</button>
</form>
</div></div>
</section>`;
}

function buildCss(tokens, css) {
  const normalizedTokens = tokens
    .replace(/--tr-hero:\s*[^;]+;/g, "--tr-hero: 0;")
    .replace(/--tr-display:\s*[^;]+;/g, "--tr-display: 0;")
    .replace(/--tr-tight:\s*[^;]+;/g, "--tr-tight: 0;")
    .replace(/font-size:\s*clamp\(2\.75rem,\s*5\.2vw \+ \.5rem,\s*var\(--fs-80\)\);/g, "font-size: var(--fs-80);")
    .replace(/font-size:\s*clamp\(2rem,\s*3vw \+ \.6rem,\s*var\(--fs-48\)\);/g, "font-size: var(--fs-48);")
    .replace(/letter-spacing:\s*-[^;]+;/g, "letter-spacing: 0;");

  const pageCss = css
    .replace(/@import url\("\.\.\/\.\.\/colors_and_type\.css"\);\n?/, "")
    .replace(/font-size:clamp\(2\.5rem,4\.4vw \+ \.5rem,4\.5rem\)/g, "font-size:4.5rem")
    .replace(/font-size:clamp\(1\.75rem,2vw \+ \.7rem,2\.25rem\)/g, "font-size:2.25rem")
    .replace(/letter-spacing:-[^;}]+/g, "letter-spacing:0");

  return [
    "/* Generated standalone stylesheet for va.indibuying.com. */",
    normalizedTokens,
    pageCss,
    leadFormCss(),
  ].join("\n\n");
}

function leadFormCss() {
  return `.lead-banner{display:grid;grid-template-columns:minmax(0,1fr) minmax(320px,440px);gap:36px;align-items:start}
.lead-form{width:100%;display:grid;grid-template-columns:1fr 1fr;gap:14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:var(--r-feature);padding:22px}
.lead-form label{display:flex;flex-direction:column;gap:6px;font-family:var(--font-ui);font-weight:600;font-size:13px;color:var(--fg-ondark)}
.lead-form label.full{grid-column:1 / -1}
.lead-form input,.lead-form textarea{width:100%;border:1px solid rgba(255,255,255,.22);border-radius:var(--r-md);background:rgba(255,255,255,.08);color:var(--fg-ondark);font:500 15px/1.4 var(--font-sans);padding:11px 12px;outline:none}
.lead-form textarea{resize:vertical;min-height:112px}
.lead-form input:focus,.lead-form textarea:focus{border-color:var(--brand-green-500)}
.lead-form input::placeholder,.lead-form textarea::placeholder{color:rgba(255,255,255,.48)}
.lead-form button{grid-column:1 / -1;justify-self:start;margin-top:2px}
.netlify-hidden{display:none}
.team{grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}
.person{display:grid;grid-template-columns:150px minmax(0,1fr);align-items:start;gap:24px;padding:24px;min-height:234px}
.person .pic{width:150px;height:180px;border-radius:24px;overflow:hidden;flex:0 0 auto;border:1px solid var(--hairline-soft);background:var(--paper-warm);position:relative}
.avatar,.person .pic img{width:100%;height:100%;border-radius:inherit;object-fit:cover;object-position:center;display:block}
.avatar{display:grid;place-items:center;background:var(--ink-100);border:1px dashed var(--border-strong);font-family:var(--font-display);font-weight:800;font-size:42px;color:var(--fg-3)}
.person .nm{font-size:21px;margin-bottom:8px;letter-spacing:0}
.person .cred{display:block;font-family:var(--font-sans);font-size:15px;line-height:1.58;color:var(--fg-2);margin-top:0;overflow-wrap:normal;word-break:normal;hyphens:auto}
.faq,.faq details,.faq summary{overflow:hidden}
.hero-h{letter-spacing:0}
@media (max-width:1023px){.hero-h{font-size:3.5rem}.h2{font-size:2rem}.lead-banner{grid-template-columns:1fr}.person{grid-template-columns:128px minmax(0,1fr);gap:20px}.person .pic{width:128px;height:156px;border-radius:22px}.person .cred{font-size:14.5px}}
@media (max-width:760px){.team{grid-template-columns:1fr}}
@media (max-width:639px){.hero-h{font-size:2.5rem}.h2{font-size:1.75rem}.nav{padding:10px 16px;gap:12px}.nav .lockup span{font-size:20px}.nav .pill.outline{display:none}.nav .pill.sm{font-size:13px;min-height:38px;padding:9px 14px}.lead-form{grid-template-columns:1fr;padding:18px}.lead-form button{width:100%}.person{grid-template-columns:96px minmax(0,1fr);gap:16px;padding:18px;min-height:0}.person .pic{width:96px;height:118px;border-radius:18px}.person .nm{font-size:19px;margin-bottom:6px}.person .cred{font-size:14px;line-height:1.52}}`;
}

async function writeText(path, content) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content, "utf8");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
