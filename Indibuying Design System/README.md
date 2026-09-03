# Indibuying Design System

A working design system for **Indibuying.com** — a product sourcing agency that helps global buyers source from India. Indibuying is an operations-services company, so the brand should feel **trusted, capable, and quietly confident** — like a senior operations partner, not a flashy marketplace.

> **Source materials**
>
> - Logo file uploaded by the user (`uploads/2.png`, copied to `assets/logo-mark-wordmark.png`).
> - No codebase, Figma, or website was attached — the system below is **inferred from the logo + brand brief**. Flag anything that should be tied to existing collateral.

---

## What Indibuying does (in our own words)

Indibuying is the **operations layer** between a global buyer (a brand, a retailer, a wholesaler) and India's manufacturing base. They:

- Find the right factory for a product
- Negotiate, sample, QC, and ship
- Handle compliance, paperwork, and follow-through

The buyer never has to fly to India, learn the supply chain, or chase a vendor at 2am. Indibuying just delivers.

That mental model drives the brand: **fewer surprises, more shipments**. Calm, methodical, green-for-go.

---

## Index — what's in this folder

| File / folder | What it is |
|---|---|
| `README.md` | This file — brand fundamentals, content + visual rules |
| `DESIGN.md` | Agent-readable design spec in the [Stitch DESIGN.md](https://github.com/VoltAgent/awesome-design-md) format — drop into a project root and point an AI agent at it |
| `SKILL.md` | Agent skill front-matter for Claude Code / portable use |
| `styles.css` | Single stylesheet entry point — link this one file |
| `components/` | Built React components (see Components below) |
| `colors_and_type.css` | All CSS variables: color tokens, type scale, spacing, radii, shadows, motion |
| `assets/` | Logo, wordmark, brand mark, sample imagery placeholders |
| `fonts/` | Webfont fallbacks (currently loads Nunito from Google Fonts — see Type below) |
| `preview/` | Design-system cards used to populate the Design System tab (one card per concept) |
| `ui_kits/website/` | Marketing-site UI kit — components + an interactive `index.html` |

---

## Components

Built React primitives in `components/`, each with a `.d.ts` and a live preview card:

| Component | What it is |
|---|---|
| `Button` | Ink pill default, green reserved, plus secondary / on-dark / ghost / link |
| `Card` | Flat 16px card, 28px pastel feature panel, ink panel |
| `Field` | 44px labelled input / textarea / select, 2px focus border |
| `Stat` | Italic display number over a quiet label, for proof strips |
| `Tag` | Pill badge — status tones plus the five category tones |

Page-level compositions (`Hero`, `TopNav`, `Footer`, `QuoteForm`, and the rest) live in `ui_kits/website/` as a from-scratch proposal, not a shipped library.

---

## CONTENT FUNDAMENTALS

Indibuying's voice should sound like a **fluent operations partner** — measured, direct, and quietly proud of getting things right.

### Tone, in one line
> "We've already handled it."

### Specifics

**Voice**
- **Confident, not loud.** "We source from 600+ verified factories." — not "We're India's #1 sourcing platform!"
- **Concrete over abstract.** Numbers, regions, lead times, defect rates. Avoid "world-class," "synergy," "ecosystem."
- **Operational verbs.** *Source, sample, audit, inspect, ship, clear, deliver.* Not *empower, enable, leverage.*
- **B2B-grown-up, not corporate-stiff.** A buyer reading the site should feel like they're emailing a competent partner, not a chatbot.

**Person & address**
- "**You**" for the buyer. "**We**" for Indibuying.
- Never "the customer" / "the user." Always "you."
- "Our team in [city]" beats "our personnel."

**Casing**
- **Sentence case** for everything: headlines, buttons, navigation, form labels. ("Get a sourcing quote", not "Get A Sourcing Quote".)
- Exception: the brand wordmark stays as **Indibuying** with the capital I.
- ALL CAPS is reserved for **eyebrows** (small section labels) and never for body copy or buttons.

**Numbers & specifics**
- Numerals over words for any quantity ≥ 2 ("3 weeks", "12 categories", "$40 MOQ").
- Always include the unit and, where possible, a range ("4–6 weeks", "$2–$8 per unit").
- Currency: USD by default, INR in parens when relevant (`$1,200 (₹1,00,000)`).

**Punctuation**
- Em dashes for asides, no spaces — like this. Oxford commas. One space after periods.
- Avoid exclamation marks. The brand earns trust through evidence, not enthusiasm.

**Emoji**
- **Not used** in product surfaces or marketing copy. Operations is a no-emoji business.
- Acceptable in informal internal contexts only (chat tools, ops dashboards' status pills if they read as functional icons, e.g. ✅ shipped).

**Vibe**
- Picture a senior sourcing manager in a clean polo, on WhatsApp at 7am, sending you a photo of the pre-shipment sample with a one-line note: *"Looks good. Final QC tomorrow, we'll ship Friday."* That energy.

### Tiny copywriting examples

| Don't | Do |
|---|---|
| "Unlock the power of India's vibrant manufacturing ecosystem!" | "Source from 600+ verified Indian factories." |
| "Submit Inquiry" | "Get a quote" |
| "Our team is happy to assist." | "Reply with your spec — we'll come back within a day." |
| "World-class quality assurance" | "100% pre-shipment inspection, photos sent before dispatch." |
| "Trusted by leading brands" | "Currently shipping for 40+ buyers across the US, EU, and AU." |

---

## VISUAL FOUNDATIONS

The logo is the north star: a tilted shopping-bag mark in vibrant green plus a **bold italic** wordmark. Forward-leaning, decisive, optimistic. The full system extends that one beat — green, momentum, paper-clean — into a complete language.

### Color

- **Brand green `#1EAF12`** is the only "loud" color in the system — and it is **not the button color**. It belongs to the bag mark, status tags, success states, eyebrows, and the single highest-intent CTA on a page ("Get a quote"). Every other action is an **ink pill** (`#0E1410`). That discipline is what keeps green readable as *go* rather than decoration. **Never** background entire pages in it.
- **Warm paper neutrals.** Backgrounds are `#FFFFFF` and `#FBFBF7` (warm off-white). Borders are quiet `#E2E7E4`. The page should feel like a clean invoice, not a SaaS dashboard.
- **Ink** runs `#0E1410 → #6B7770` for headings → body → meta. Never use pure black.
- **Category tints.** Each of the five sourcing categories owns a pastel fill and a matching deep ink: jewellery `#FDEBD6`/`#7A4410`, handicrafts `#F5E3DB`/`#74392A`, furniture `#E3E9F2`/`#1F3A5F`, home furnishings `#DCEFE9`/`#1C5A4C`, apparel `#F7E2E4`/`#7A2F36`. A tag and its card always use the same pair.
- **Saturated accents** (illustration and chart use only, never large fills): saffron `#F2913B`, clay `#B96A4B`, deep indigo `#1F3A5F`, moss `#1C5A4C`, rose `#A8484F`. These reference India without leaning into cliché.
- **Semantic:** success = brand green (reinforces "go"), warning amber `#E8A317`, danger `#D8443C`, info blue `#1F7AD8`.

### Type

- **Family:** [Nunito](https://fonts.google.com/specimen/Nunito) — a rounded humanist sans. The bold italic weights closely match the wordmark's character. **Substitution flagged** — the original logo font is unknown; replace with the real brand font if/when provided.
- **Italic is a signature, not a default.** Italic 900 appears in exactly two places: the hero display (`.h-display`) and stat callouts (`.h-stat`). Everything else is upright — `.h1` 800, `.h2`–`.h4` 700, with tracking tightening as size grows (-0.03em at 80px relaxing to 0 by 22px).
- **Body:** Nunito 400/500 at 16px, line-height 1.6. Generous, comfortable.
- **UI / dense:** Inter 14–13px for tables, form labels, meta — pairs cleanly with Nunito.
- **Mono:** system mono for SKUs, order numbers, code samples.
- Tracking: tight (`-0.02em`) at display sizes, normal at body, **0.12em uppercase** for eyebrows only.

### Spacing & layout

- **4px base unit.** All spacing is a multiple of 4: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96.
- **Generous outer padding.** Marketing sections breathe at 80–96px vertical. Cards have 24–32px internal padding.
- **Container max-widths:** 640 / 860 / 1120 / 1280 — a single content column rarely exceeds 1120.
- **Grid:** 12-col with 24px gutters on desktop. Forms and tables sit on a stricter 8-col working grid.
- **Fixed elements:** sticky top nav (white, thin bottom border), optional sticky CTA on long pages. No floating chat bubbles.

### Backgrounds

- **Paper-first.** Default surfaces are `--paper` or `--paper-warm`. No gradients on body backgrounds.
- **Hero accents** may use a **soft green tint** (`--brand-green-50` / `--brand-green-100`) or a single full-bleed warm photo (factory floor, hands-on-fabric, port crate) with a 12–20% paper overlay for legibility. **No bluish-purple gradients ever.**
- **Repeating patterns** are reserved for empty states only — subtle dot grid or a single line motif of the bag handle.
- **Imagery direction:** warm, well-lit documentary-style photography. Hands, materials, factory texture, shipping detail. Slightly warm white balance, low saturation in everything *except* the brand green. Black & white acceptable for portraits.

### Animation

- **Restrained.** Animation reinforces structure; it never performs.
- **Default:** 200ms `cubic-bezier(.2,.7,.2,1)` for any hover/state change.
- **Slow:** 340ms for layout shifts (drawer, modal).
- **Fade + 4–8px translate-y** is the workhorse entrance. No spring bounces, no scale-from-0, no parallax on body content.
- Loaders are a thin top progress bar in brand green, not spinners over content.

### Hover & press states

- **Hover (links / text):** color shifts to `--brand-green-700` (deeper, not brighter). Underline appears with `text-underline-offset: 4px`.
- **Hover (buttons):** background shifts one shade darker (`--brand-green-600`); subtle 1–2px lift via `--shadow-2`.
- **Press:** background → `--brand-green-700`, shadow drops, no shrink. **Avoid scale transforms on press** — they read consumer, not operational.
- **Cards on hover:** border darkens to `--ink-300`, optional `translate-y(-2px)`, never scale.
- **Disabled:** opacity 0.45, no pointer events. Use color, never just opacity, to indicate state.

### Borders, shadows, elevation

- **1px borders, low-contrast.** `--border` (`#E2E7E4`) is the default. Stronger contexts (form focus rings, dividers under sticky headers) use `--border-strong`.
- **The system runs flat.** Cards separate by hairline, not shadow.
  - `--shadow-1`: resting sticky bar
  - `--shadow-2`: interactive card hover, floating CTA
  - `--shadow-mockup`: photo frames — the only place elevation is spent on content
  - `--shadow-modal`: modals, dropdowns, popovers
- Shadows are **soft, low, paper-y** — never a chunky drop shadow.
- **Focus:** `--ring-action` (3px ink at 18%) on actions; `--ring-brand` on the green CTA. **Inputs thicken their border to 2px** rather than taking a ring. Never a glow.

### Capsules vs. protection gradients

- **Capsules** (rounded-pill containers with a tint background) are the brand's main legibility tool over imagery — never a gradient overlay on text. A green tint pill (`--brand-green-100` bg, `--brand-green-700` text) reads as a "tag," not a button.
- Reserve **protection gradients** for full-bleed photo heroes only, and keep them subtle (12–20% paper-to-transparent).

### Transparency & blur

- Used sparingly. The only routine blur is the **sticky nav** on scroll (`backdrop-filter: blur(12px)` with 70% paper bg). Modal scrims are a flat 40% ink, **no blur**.

### Corner radii

- **`--r-pill` for every button, pill tab, badge and avatar.** The pill is the brand signature — never soften it, never square it.
- **`--r-md` (10px)** for inputs, textareas and select tiles.
- **`--r-card` (16px)** for standard cards, tables and pricing tiers.
- **`--r-feature` (28px)** for pastel category panels and photo frames.
- **`--r-banner` (32px)** for the dark closing CTA banner.
- `--r-sm` (6px) for small inline controls; `--r-lg`/`--r-xl` for interior panels.
- No mixing radii within one component. No 4px-on-one-corner-only treatments.

### Cards

- **Flat by default.** White surface, 1px `--hairline-soft`, `--r-card` (16px), 24px internal padding, **no shadow at rest**. Interactive cards add `--shadow-2` and `translateY(-2px)` on hover — never scale.
- **Pastel category panels** use `--r-feature` (28px), 32px padding, tint fill with its matching ink, no border and no shadow. They carry their weight through colour.
- *Never* a colored left-border-only treatment.
- A card always has a clear primary affordance (heading + one button or chevron). Decorative cards without a CTA are avoided.

### Things to avoid

- Bluish-purple gradients (any direction)
- Emoji as icon language
- Glassmorphism / heavy frosted glass
- Drop shadows on text
- Cards with rounded corners + colored left-border-only stripes
- Pure black (`#000`) text
- ALL CAPS body copy
- Stock-y "handshake" or "globe-with-circuit" imagery

---

## ICONOGRAPHY

Indibuying does **not** ship a custom icon set yet. The system uses a single sourced icon library to stay consistent:

- **Primary icon set:** [**Lucide**](https://lucide.dev) — open-source, line-based, 1.75px stroke. Calm, neutral, pairs cleanly with Nunito's rounded humanist forms. CDN-loadable, freely licensed.
  - **Flagged substitution.** Lucide is a placeholder until the brand commissions a custom set. The visual contract (line, 1.75px stroke, rounded joins) should be preserved if the set is later swapped.
- **Stroke weight:** 1.75px everywhere. Never mix 1px and 2px in one screen.
- **Size scale:** 14 / 16 / 20 / 24 / 32 px. Use 16 in nav and dense UI, 20 in buttons, 24 in feature cards.
- **Color:** inherits text color by default. Brand green only when the icon *itself is the affordance* (e.g. a primary action button's leading icon).
- **No emoji** in product or marketing surfaces (see Content Fundamentals).
- **No Unicode-as-icons** (✓ →) outside of inline content like keyboard hints (`⌘K`).
- **SVGs > icon fonts.** Always inline SVG or use Lucide's React/Web components — avoids alignment bugs and lets us color via `currentColor`.

### Brand-specific glyphs we *do* own

Live in `assets/`:

- `logo-mark-wordmark.png` — full lockup
- `logo-mark.png` — bag mark only
- `logo-wordmark.png` — wordmark only

The **bag mark** can be used as a small bullet or section marker (24–32px) where a category needs to feel "Indibuying-flavoured." Don't overuse — once per page, max.

---

## Caveats & open questions

- The **font in the wordmark** isn't specified — Nunito is a close, free match, but the real font should be confirmed.
- The **icon library** is a placeholder (Lucide). A custom set would lift the brand.
- No **product screenshots, marketing site, or codebase** were shared, so the UI kit in `ui_kits/website/` is **a from-scratch interpretation** of how an Indibuying marketing site might look — not a recreation. Treat it as a strong proposal, not a faithful copy.
- **Imagery** is placeholder color blocks — drop real photography in to evaluate.
