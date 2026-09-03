---
version: alpha
name: Indibuying-design-analysis
description: Indibuying is the operations layer between a global buyer and India's manufacturing base, and the system reads that way — a paper-white canvas, ink-black pill CTAs, and its signature vibrant green ({colors.brand-green}) held back for the bag mark, status tags and success states rather than spent on buttons. Five pastel category tints (jewellery, handicrafts, furniture, home furnishings, apparel) carry the sourcing catalogue the way sticky notes carry a whiteboard. Nunito runs every surface; italic 900 is reserved for the hero display and stat callouts. The system supports marketing home, services, work-unit pricing, operations support, and quote-flow surfaces.

colors:
  primary: "#0E1410"
  on-primary: "#ffffff"
  brand-green: "#1eaf12"
  brand-green-600: "#1a9c10"
  brand-green-700: "#15860d"
  brand-green-500: "#2bc11e"
  brand-green-100: "#d7f4d3"
  brand-green-50: "#ecfbea"
  action: "#0e1410"
  action-pressed: "#2a332d"
  action-disabled: "#e2e7e4"
  accent-saffron: "#f2913b"
  accent-clay: "#b96a4b"
  accent-indigo: "#1f3a5f"
  accent-moss: "#1c5a4c"
  accent-rose: "#a8484f"
  cat-jewellery: "#fdebd6"
  cat-jewellery-ink: "#7a4410"
  cat-handicrafts: "#f5e3db"
  cat-handicrafts-ink: "#74392a"
  cat-furniture: "#e3e9f2"
  cat-furniture-ink: "#1f3a5f"
  cat-furnishings: "#dcefe9"
  cat-furnishings-ink: "#1c5a4c"
  cat-apparel: "#f7e2e4"
  cat-apparel-ink: "#7a2f36"
  canvas: "#ffffff"
  surface: "#ffffff"
  surface-warm: "#fbfbf7"
  surface-sunken: "#f6f8f6"
  hairline: "#e2e7e4"
  hairline-soft: "#eef1ef"
  hairline-strong: "#c4ccc6"
  ink: "#0e1410"
  ink-800: "#1a211c"
  charcoal: "#2a332d"
  slate: "#44504a"
  steel: "#6b7770"
  stone: "#95a09a"
  muted: "#c4ccc6"
  on-dark: "#ffffff"
  on-dark-muted: "rgba(255,255,255,0.66)"
  success: "#1eaf12"
  warning: "#e8a317"
  danger: "#d8443c"
  info: "#1f7ad8"
  footer-bg: "#0e1410"

typography:
  hero-display:
    fontFamily: Nunito
    fontSize: 80px
    fontWeight: 900
    fontStyle: italic
    lineHeight: 1.02
    letterSpacing: -0.03em
  stat-display:
    fontFamily: Nunito
    fontSize: 64px
    fontWeight: 900
    fontStyle: italic
    lineHeight: 1.05
    letterSpacing: -0.02em
  heading-1:
    fontFamily: Nunito
    fontSize: 48px
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: -0.025em
  heading-2:
    fontFamily: Nunito
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.02em
  heading-3:
    fontFamily: Nunito
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: -0.01em
  heading-4:
    fontFamily: Nunito
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.30
  heading-5:
    fontFamily: Nunito
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.40
  subtitle:
    fontFamily: Nunito
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.50
  body-md:
    fontFamily: Nunito
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.60
  body-md-medium:
    fontFamily: Nunito
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.60
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
  body-sm-medium:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.45
  caption:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.40
  caption-bold:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.40
  micro:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.40
  eyebrow:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: 0.12em
    textTransform: uppercase
  button-md:
    fontFamily: Nunito
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.30
  mono-id:
    fontFamily: ui-monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.40

rounded:
  xs: 4px
  sm: 6px
  md: 10px
  lg: 14px
  card: 16px
  xl: 20px
  feature: 28px
  banner: 32px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 40px
  section-sm: 48px
  section: 64px
  section-lg: 96px
  hero: 120px

components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    height: 44px
  button-primary-pressed:
    backgroundColor: "{colors.action-pressed}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.action-disabled}"
    textColor: "{colors.muted}"
  button-green:
    backgroundColor: "{colors.brand-green}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    height: 44px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    border: "1px solid {colors.hairline-strong}"
  button-on-dark:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.action}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.brand-green-700}"
    typography: "{typography.body-sm-medium}"
    padding: "0"
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 40px
    border: "1px solid {colors.hairline}"
  card-base:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline-soft}"
  card-feature-jewellery:
    backgroundColor: "{colors.cat-jewellery}"
    textColor: "{colors.cat-jewellery-ink}"
    rounded: "{rounded.feature}"
    padding: "{spacing.xxl}"
  card-feature-handicrafts:
    backgroundColor: "{colors.cat-handicrafts}"
    textColor: "{colors.cat-handicrafts-ink}"
    rounded: "{rounded.feature}"
    padding: "{spacing.xxl}"
  card-feature-furniture:
    backgroundColor: "{colors.cat-furniture}"
    textColor: "{colors.cat-furniture-ink}"
    rounded: "{rounded.feature}"
    padding: "{spacing.xxl}"
  card-feature-furnishings:
    backgroundColor: "{colors.cat-furnishings}"
    textColor: "{colors.cat-furnishings-ink}"
    rounded: "{rounded.feature}"
    padding: "{spacing.xxl}"
  card-feature-apparel:
    backgroundColor: "{colors.cat-apparel}"
    textColor: "{colors.cat-apparel-ink}"
    rounded: "{rounded.feature}"
    padding: "{spacing.xxl}"
  card-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.card}"
    padding: "{spacing.xl}"
  card-stat:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.stat-display}"
    padding: "{spacing.lg}"
  pricing-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.card}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"
  pricing-card-featured:
    backgroundColor: "{colors.brand-green-50}"
    rounded: "{rounded.card}"
    padding: "{spacing.xxl}"
    border: "2px solid {colors.brand-green}"
  pricing-card-enterprise:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.card}"
    padding: "{spacing.xxl}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "0 {spacing.md}"
    border: "1px solid {colors.hairline-strong}"
    height: 44px
  text-input-focused:
    border: "2px solid {colors.action}"
  text-input-error:
    border: "2px solid {colors.danger}"
  textarea:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    border: "1px solid {colors.hairline-strong}"
    height: 88px
  field-label:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
  field-help:
    textColor: "{colors.steel}"
    typography: "{typography.caption}"
  select-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline-strong}"
  select-tile-selected:
    backgroundColor: "{colors.brand-green-50}"
    border: "2px solid {colors.brand-green}"
  filter-dropdown:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
    border: "1px solid {colors.hairline-strong}"
    height: 40px
  pill-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm-medium}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.md}"
    border: "1px solid {colors.hairline}"
  pill-tab-active:
    backgroundColor: "{colors.action}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    border: "1px solid {colors.action}"
  stepper-dot:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.full}"
    height: 4px
  stepper-dot-active:
    backgroundColor: "{colors.brand-green}"
  badge-status-shipped:
    backgroundColor: "{colors.brand-green}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-status-green:
    backgroundColor: "{colors.brand-green-100}"
    textColor: "{colors.brand-green-700}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-status-neutral:
    backgroundColor: "{colors.hairline-soft}"
    textColor: "{colors.slate}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-status-warning:
    backgroundColor: "#fdf0d6"
    textColor: "#8a6410"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-status-danger:
    backgroundColor: "#fbe4e2"
    textColor: "#9c2c25"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-category:
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  promo-banner:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.sm} {spacing.md}"
  top-nav:
    backgroundColor: "rgba(255,255,255,0.85)"
    textColor: "{colors.slate}"
    typography: "{typography.body-sm-medium}"
    padding: "{spacing.sm} {spacing.xxl}"
    border: "0 0 1px {colors.hairline} solid"
    height: 64px
  spec-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.card}"
    border: "1px solid {colors.hairline}"
  spec-table-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    padding: "{spacing.md} {spacing.lg}"
    border: "0 0 1px {colors.hairline-soft} solid"
  spec-table-divider:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.steel}"
    typography: "{typography.eyebrow}"
    padding: "{spacing.sm} {spacing.lg}"
  metric-strip:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    padding: "{spacing.xxl}"
    border: "1px 0 1px 0 {colors.hairline} solid"
  photo-frame:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.feature}"
    padding: "0"
    shadow: "0 12px 32px -4px rgba(14,20,16,0.10)"
  faq-accordion-item:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-5}"
    padding: "{spacing.xl} 0"
    border: "0 0 1px {colors.hairline} solid"
  logo-wall-item:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    typography: "{typography.body-md-medium}"
    padding: "{spacing.lg}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.hero-display}"
    rounded: "0"
    padding: "{spacing.hero} {spacing.xxl}"
  cta-banner-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.banner}"
    padding: "{spacing.section}"
  footer-region:
    backgroundColor: "{colors.footer-bg}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section} {spacing.xxl}"
  footer-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.body-sm}"
    padding: "{spacing.xxs} 0"
---

## Overview

Indibuying is the operations layer between a global buyer and India's manufacturing base: find the factory, negotiate, sample, inspect, ship, clear. The brand promise is *fewer surprises, more shipments*, and the system is built to sound like a senior operations partner rather than a marketplace.

The canvas is paper white. A page opens with a small green bag mark in the top-left, an italic 900 hero headline, and an ink-black pill CTA. Depth stays flat — cards are 1px hairlines on white, and elevation is spent only on photography frames and modals. Where a surface needs to break open, it does so with a **pastel category tint** (jewellery, handicrafts, furniture, home furnishings, apparel) or with the **ink CTA banner** at 32px corners, not with gradients.

The single most important discipline: **brand green is not the button colour.** Green ({colors.brand-green}) belongs to the bag mark, status tags, success states, eyebrows, and the one highest-intent CTA on a page ("Get a quote"). Every other action is an ink pill. This is what keeps green readable as *go* instead of decoration.

Nunito runs every surface, from the 80px hero down to 11px eyebrows. Italic 900 — the wordmark's own character — appears in exactly two places: `{typography.hero-display}` and `{typography.stat-display}`. Everything else is upright, with tracking tightening as size grows. Inter handles dense UI: table cells, labels, captions.

**Key Characteristics:**
- Paper-white canvas, ink-black pill CTAs ({colors.action} + `{rounded.full}`)
- Brand green reserved for the mark, status tags, success, and one CTA per page
- Five pastel category tints at `{rounded.feature}` (28px), echoing the sourcing catalogue
- Nunito everywhere; italic 900 only on hero and stat display
- Flat by default — 1px hairlines, elevation reserved for photo frames and modals
- Warm documentary photography: hands, materials, factory texture, shipping detail
- Ink CTA banner at `{rounded.banner}` (32px) closing every page, into a dark multi-column footer

## Colors

### Brand & Action
- **Brand Green** ({colors.brand-green}): The bag mark, status tags, success, eyebrow labels, and the one highest-intent CTA per page
- **Green 600 / 700** ({colors.brand-green-600} / {colors.brand-green-700}): Pressed green pill; link and eyebrow text
- **Green 500** ({colors.brand-green-500}): Hot accent on dark surfaces only
- **Green 100 / 50** ({colors.brand-green-100} / {colors.brand-green-50}): Tag fill and featured-tier surface tint
- **Action** ({colors.action}): Primary pill CTA — the dominant interactive element
- **Action Pressed** ({colors.action-pressed}): Pressed state; no scale transform, ever
- **Action Disabled** ({colors.action-disabled}): Disabled pill fill, paired with {colors.muted} text

### Category Tints
Each of the five sourcing categories owns a pastel fill and a matching deep ink. Tag and card always agree.

| Category | Fill | Ink |
|---|---|---|
| Jewellery | {colors.cat-jewellery} | {colors.cat-jewellery-ink} |
| Handicrafts | {colors.cat-handicrafts} | {colors.cat-handicrafts-ink} |
| Furniture | {colors.cat-furniture} | {colors.cat-furniture-ink} |
| Home furnishings | {colors.cat-furnishings} | {colors.cat-furnishings-ink} |
| Apparel | {colors.cat-apparel} | {colors.cat-apparel-ink} |

Saturated parents ({colors.accent-saffron}, {colors.accent-clay}, {colors.accent-indigo}, {colors.accent-moss}, {colors.accent-rose}) exist for illustration and chart use, not for large fills.

### Surface
- **Canvas** ({colors.canvas}): Page background and primary card surface
- **Surface Warm** ({colors.surface-warm}): Alternating section band, metric strip
- **Surface Sunken** ({colors.surface-sunken}): Table section dividers, code fills
- **Hairline** ({colors.hairline}): 1px borders and primary dividers
- **Hairline Soft** ({colors.hairline-soft}): Card borders, table-row dividers
- **Hairline Strong** ({colors.hairline-strong}): Input borders, secondary pill outline

Maximum two background colours per page.

### Text
- **Ink** ({colors.ink}): Headlines and primary body. Never pure `#000`.
- **Charcoal** ({colors.charcoal}): Emphasis text
- **Slate** ({colors.slate}): Secondary body
- **Steel** ({colors.steel}): Tertiary text, metadata, footer links
- **Stone** ({colors.stone}): Captions, muted labels
- **Muted** ({colors.muted}): Placeholders, disabled labels
- **On Dark** ({colors.on-dark}) / **On Dark Muted** ({colors.on-dark-muted}): Text on the ink banner and footer

### Semantic
- **Success** ({colors.success}): Same value as brand green — reinforces "go"
- **Warning** ({colors.warning}): Amber
- **Danger** ({colors.danger}): Error borders and messages
- **Info** ({colors.info}): Informational only; it is *not* the focus colour

## Typography

### Font Family
**Nunito** (primary): rounded humanist sans; its bold italic closely matches the wordmark's character. **Inter** (secondary): dense UI, tables, labels, captions. Mono is system (`ui-monospace`) for SKUs and order numbers.

> **Substitution flagged.** The wordmark's original font is unknown. Nunito is the closest free match — replace if the real brand font becomes available.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 80px | 900 *italic* | 1.02 | -0.03em | Marketing hero only |
| `{typography.stat-display}` | 64px | 900 *italic* | 1.05 | -0.02em | Proof-strip numbers |
| `{typography.heading-1}` | 48px | 800 | 1.08 | -0.025em | Page headlines |
| `{typography.heading-2}` | 36px | 700 | 1.15 | -0.02em | Section headlines |
| `{typography.heading-3}` | 28px | 700 | 1.20 | -0.01em | Card and panel titles |
| `{typography.heading-4}` | 22px | 700 | 1.30 | 0 | Feature card titles |
| `{typography.heading-5}` | 18px | 700 | 1.40 | 0 | FAQ questions, compact cards |
| `{typography.subtitle}` | 18px | 400 | 1.50 | 0 | Hero subtitle |
| `{typography.body-md}` | 16px | 400 | 1.60 | 0 | Primary body |
| `{typography.body-sm}` | 14px | 400 | 1.45 | 0 | Table cells, secondary body |
| `{typography.body-sm-medium}` | 14px | 500 | 1.45 | 0 | Field labels, nav items |
| `{typography.caption}` | 13px | 400 | 1.40 | 0 | Help text |
| `{typography.caption-bold}` | 13px | 600 | 1.40 | 0 | Badges, tags |
| `{typography.micro}` | 12px | 500 | 1.40 | 0 | Footer microcopy |
| `{typography.eyebrow}` | 11px | 600 | 1.40 | 0.12em, uppercase | Section labels |
| `{typography.button-md}` | 14px | 600 | 1.30 | 0 | Pill button labels |

### Principles
- **Italic is a signature, not a default.** Two tokens carry it. Anywhere else it reads as emphasis noise.
- **Negative tracking progression** — -0.03em at 80px relaxing to 0 by 22px.
- **Sentence case everywhere** — headlines, buttons, nav, labels. The wordmark keeps its capital I: **Indibuying**.
- **Uppercase is for eyebrows only**, at 0.12em. Never body copy, never buttons.
- **Numerals for any quantity ≥ 2**, always with a unit and a range where possible ("4–6 weeks", "$2–$8 per unit").

## Layout

### Spacing System
- **Base unit**: 4px (8px primary increment)
- **Tokens**: `{spacing.xxs}` 4 · `{spacing.xs}` 8 · `{spacing.sm}` 12 · `{spacing.md}` 16 · `{spacing.lg}` 20 · `{spacing.xl}` 24 · `{spacing.xxl}` 32 · `{spacing.xxxl}` 40 · `{spacing.section-sm}` 48 · `{spacing.section}` 64 · `{spacing.section-lg}` 96 · `{spacing.hero}` 120
- **Section rhythm**: marketing at `{spacing.section-lg}` (96px); pricing and tables tighten to `{spacing.section}` (64px)
- **Card padding**: `{spacing.xl}` (24px) standard, `{spacing.xxl}` (32px) feature panels

### Grid & Container
- 1280px max-width with 32px gutters; a single reading column rarely exceeds 1120px
- 12-column grid, 24px desktop gutters; forms and tables sit on a stricter 8-column working grid
- Category grid renders 5-up at desktop, matching the five tints
- Pricing renders the three work units (vendor search / QC / logistics) as a 3-up card row, with operations support as a fourth dark tier

### Whitespace Philosophy
`{spacing.hero}` (120px) hero padding gives the small bag mark room to read. An empty-feeling section is a layout problem, not a content gap — cut it rather than pad it.

## Elevation & Depth

The system runs flat. Cards separate by hairline, not shadow.

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow; 1px {colors.hairline-soft} | Default cards, table rows, inputs, pastel panels |
| 1 (subtle) | `0 1px 0 rgba(14,20,16,.04), 0 1px 2px rgba(14,20,16,.06)` | Resting sticky bar |
| 2 (hover) | `0 1px 0 rgba(14,20,16,.04), 0 4px 12px rgba(14,20,16,.06)` | Interactive card hover, floating CTA |
| 3 (photo) | `0 12px 32px -4px rgba(14,20,16,.10)` | Photo frames, product mockups |
| 4 (modal) | `0 16px 48px -8px rgba(14,20,16,.14)` | Modals, dropdowns, popovers |

**Focus** is a state, not an elevation: ink ring `0 0 0 3px rgba(14,20,16,.18)` on actions, and a **2px border thickening** on inputs. Never a glow.

**Transparency & blur**: the only routine blur is the sticky nav (12px, 85% paper). Modal scrims are a flat 40% ink, no blur.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Inline code, micro chips |
| `{rounded.sm}` | 6px | Small inline controls |
| `{rounded.md}` | 10px | Inputs, textareas, select tiles |
| `{rounded.lg}` | 14px | Interior panels |
| `{rounded.card}` | 16px | Standard cards, tables, pricing tiers |
| `{rounded.xl}` | 20px | Large panels |
| `{rounded.feature}` | 28px | Pastel category cards, photo frames |
| `{rounded.banner}` | 32px | Dark CTA banner |
| `{rounded.full}` | 9999px | Every button, pill tab, badge, avatar |

The pill is the brand signature. Do not soften it, do not square it, do not mix radii inside one component.

### Photography Geometry
- Photo frames render at `{rounded.feature}` (28px) with the level-3 shadow
- Hero photography sits in a 4:5 portrait frame; proof photography at 16:9
- Warm, well-lit documentary work — hands, materials, factory texture, shipping detail. Slightly warm white balance, low saturation in everything except the brand green. Black and white acceptable for portraits.

## Components

> Default and pressed/active states are documented. Hover is a 200ms `cubic-bezier(.2,.7,.2,1)` transition on background and shadow only.

### Buttons

**`button-primary`** — Ink pill, the dominant CTA on every surface.
- Background `{colors.action}`, text `{colors.on-primary}`, `{typography.button-md}`, padding `12px 24px`, rounded `{rounded.full}`, height 44px.
- Pressed `button-primary-pressed` lifts to `{colors.action-pressed}`. Disabled uses `{colors.action-disabled}` on `{colors.muted}`.

**`button-green`** — Brand-green pill for the single highest-intent CTA on a page ("Get a quote").
- Background `{colors.brand-green}`, text `{colors.on-primary}`, otherwise identical to `button-primary`. Pressed → `{colors.brand-green-700}`.

**`button-secondary`** — Outlined pill for the alternate action ("Book a call").
- Transparent, text `{colors.ink}`, border `1px solid {colors.hairline-strong}`, rounded `{rounded.full}`.

**`button-on-dark`** — White pill inside the ink CTA banner.
- Background `{colors.on-dark}`, text `{colors.action}`, rounded `{rounded.full}`.

**`button-ghost`** — Chromeless pill for nav-adjacent actions. Transparent, text `{colors.ink}`.

**`button-link`** — Inline text link. Text `{colors.brand-green-700}`, `{typography.body-sm-medium}`, underline at 4px offset.

**`button-icon-circular`** — 40×40px circular utility button; `{colors.canvas}` on 1px `{colors.hairline}`.

### Cards & Containers

**`card-base`** — Standard content card. `{colors.canvas}`, `{rounded.card}`, padding `{spacing.xl}`, 1px `{colors.hairline-soft}`. Flat at rest; interactive variants add level-2 shadow and `translateY(-2px)` — never scale, never a coloured left border.

**`card-feature-*`** — Pastel category panel, one per category. Tint fill, matching ink text, `{rounded.feature}`, padding `{spacing.xxl}`, no border, no shadow.

**`card-dark`** — Ink panel for the premium or enterprise tier. `{colors.ink}`, `{colors.on-dark}`, `{rounded.card}`.

**`card-stat`** — Proof-strip cell. Transparent, `{typography.stat-display}` over a `{typography.body-sm-medium}` label in `{colors.steel}`.

**`pricing-card`** / **`pricing-card-featured`** / **`pricing-card-enterprise`** — Work-unit tiers. Featured uses `{colors.brand-green-50}` on a 2px `{colors.brand-green}` border; enterprise is the ink card.

### Inputs & Forms

**`text-input`** — 44px control. `{colors.canvas}`, 1px `{colors.hairline-strong}`, `{rounded.md}`, padding `0 {spacing.md}`.
- **`text-input-focused`** thickens to `2px solid {colors.action}`. **`text-input-error`** thickens to `2px solid {colors.danger}`.

**`textarea`** — Same treatment at 88px min height, padding `{spacing.sm} {spacing.md}`.

**`field-label`** / **`field-help`** — `{typography.body-sm-medium}` in `{colors.ink}`; help in `{typography.caption}` `{colors.steel}`. Mark optional fields; never asterisk the required ones.

**`select-tile`** / **`select-tile-selected`** — Tile picker for category and volume. Selected state fills `{colors.brand-green-50}` behind a 2px `{colors.brand-green}` border.

**`filter-dropdown`** — 40px pill dropdown, 1px `{colors.hairline-strong}`.

### Tabs & Progress

**`pill-tab`** / **`pill-tab-active`** — Inactive: `{colors.canvas}` on 1px `{colors.hairline}`, text `{colors.steel}`. Active: `{colors.action}` fill, `{colors.on-primary}` text.

**`stepper-dot`** / **`stepper-dot-active`** — 4px progress bars in the quote flow; active fills `{colors.brand-green}`.

### Badges & Status

All badges are `{rounded.full}`, `{typography.caption-bold}`, padding `4px 10px`.

| Component | Fill | Text |
|---|---|---|
| `badge-status-shipped` | {colors.brand-green} | {colors.on-primary} |
| `badge-status-green` | {colors.brand-green-100} | {colors.brand-green-700} |
| `badge-status-neutral` | {colors.hairline-soft} | {colors.slate} |
| `badge-status-warning` | `#fdf0d6` | `#8a6410` |
| `badge-status-danger` | `#fbe4e2` | `#9c2c25` |
| `badge-category` | category tint | category ink |
| `badge-ink` | {colors.ink} | {colors.on-dark} |

**`promo-banner`** — Ink strip above the nav for a dated announcement, `{typography.body-sm-medium}`, `{colors.on-dark}`.

### Tables

**`spec-table`** — Service and pricing comparison. `{colors.canvas}`, `{rounded.card}`, 1px `{colors.hairline}`, `{typography.body-sm}`.
**`spec-table-row`** — Padding `{spacing.md} {spacing.lg}`, bottom 1px `{colors.hairline-soft}`.
**`spec-table-divider`** — Section header row on `{colors.surface-sunken}` in `{typography.eyebrow}`.

### Navigation

**`top-nav`** — Sticky bar, ~64px, `rgba(255,255,255,.85)` with `backdrop-filter: blur(12px)`, bottom 1px `{colors.hairline}`.
- Left: bag mark + wordmark in display 900 italic, `{colors.brand-green}`.
- Centre: `{typography.body-sm-medium}` links in `{colors.slate}`; hover and active → `{colors.brand-green-700}`.
- Right: ghost pill links + one ink `button-primary`.

**`footer-region`** — Ink footer, padding `{spacing.section} {spacing.xxl}`, 4-column link grid (Services / Categories / Company / Legal), headings in `{typography.body-md-medium}` `{colors.on-dark}`.
**`footer-link`** — `{colors.on-dark-muted}`, `{typography.body-sm}`, hover → `{colors.brand-green-500}`.

### Signature Components

**`hero-band`** — `{colors.canvas}`, padding `{spacing.hero} {spacing.xxl}`. Left column: eyebrow, `{typography.hero-display}` headline with one clause in `{colors.brand-green}`, `{typography.subtitle}` sub, then a `button-green` + `button-secondary` pair. Right column: 4:5 photo frame at `{rounded.feature}`.

**`metric-strip`** — Full-width proof band on `{colors.surface-warm}`, 1px hairline top and bottom, four `card-stat` cells.

**`cta-banner-dark`** — Page-closing banner. `{colors.ink}`, `{rounded.banner}` (32px), padding `{spacing.section}`. Centred `{typography.heading-2}` headline, `{colors.on-dark-muted}` sub, one `button-on-dark`.

**`photo-frame`** — `{rounded.feature}` with the level-3 shadow. The only place elevation is spent on content.

## Do's and Don'ts

### Do
- Keep `{colors.brand-green}` on the mark, status tags, success, eyebrows, and one CTA per page
- Make every other action an ink pill at `{rounded.full}`
- Pair a pastel category panel with white cards in the same viewport
- Apply `{rounded.full}` to every button, pill tab and badge
- Apply `{rounded.feature}` (28px) to pastel panels and photo frames
- Keep italic 900 to the hero and stat display
- Separate cards with a 1px hairline and let the page stay flat
- Write concrete, numeral-first, sentence-case copy: "Source from 600+ verified Indian factories."
- Show real documentary photography of factories, materials and shipping

### Don't
- Don't put brand green on standard CTAs, and never on a large background surface
- Don't introduce accent colours beyond the five category tints and their saturated parents
- Don't soften or square the pill — it is the signature
- Don't set italic below the stat display
- Don't apply shadows to flat cards; elevation belongs to photo frames and modals
- Don't use bluish-purple gradients, glassmorphism, or drop shadows on text
- Don't use a coloured left-border stripe on a card
- Don't use pure black text, ALL CAPS body copy, or emoji in any product or marketing surface
- Don't scale on press
- Don't use stock "handshake" or "globe-with-circuit" imagery

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile (small) | < 480px | Single column. Hero 36px. Nav collapses to hamburger. Pricing stacks 1-up. Footer becomes an accordion. |
| Mobile (large) | 480 – 767px | Category tiles 2-up. Hero 48px. |
| Tablet | 768 – 1023px | 2-column feature grids. Metric strip 2×2. |
| Desktop | 1024 – 1279px | 3-up pricing row, category grid 3-up. Hero 60px. |
| Wide | ≥ 1280px | Full hero at 80px, 5-up category grid, 4-cell metric strip. |

### Touch Targets
- Pill buttons render at 44px (`md`, `lg`); the 36px `sm` pill is desktop-only
- Inputs render at 44px at every breakpoint
- Filter dropdowns and circular icon buttons render 40px desktop → 44px mobile

### Collapsing Strategy
- **Promo banner** stays full-width, truncates below 480px
- **Top nav** collapses to hamburger below 1024px; mark and one ink CTA stay visible; sticky blur is retained
- **Hero band**: 2-column → stacked below 1024px, photo frame first on mobile
- **Section padding**: 96px → 64px below 960px → 48px below 640px
- **Spec table**: becomes horizontal-scroll below 768px; never reflows to cards
- **CTA banner**: `{rounded.banner}` relaxes to `{rounded.feature}` below 640px

### Image Behavior
- Photo frames hold aspect ratio and lazy-load below the fold
- Hero photography 4:5 portrait desktop → 3:2 landscape mobile
- Logo wall renders wordmarks at a consistent 32px height

## Motion

| Token | Value | Use |
|---|---|---|
| `ease-out` | `cubic-bezier(.2,.7,.2,1)` | Default |
| `ease-in-out` | `cubic-bezier(.5,0,.3,1)` | Reversible transitions |
| `dur-fast` | 120ms | Input border, focus |
| `dur-med` | 200ms | Any hover or state change |
| `dur-slow` | 340ms | Drawer, modal, layout shift |

Workhorse entrance: fade plus a 4–8px translate-Y. Loaders are a thin brand-green top progress bar, not spinners over content. No spring bounces, no scale-from-0, no parallax on body content.

## Iconography

**Lucide** — line, 1.75px stroke, rounded joins — at 14 / 16 / 20 / 24 / 32px. 16 in nav and dense UI, 20 in buttons, 24 in feature cards. Icons inherit text colour; brand green only when the icon itself is the affordance. Inline SVG, never icon fonts, never emoji, never Unicode-as-icon outside inline hints like `⌘K`.

> **Substitution flagged.** Lucide is a placeholder until a custom set is commissioned. Preserve the visual contract (line, 1.75px, rounded joins) if swapped.

**Owned glyphs** in `assets/`: `logo-mark-wordmark.png`, `logo-mark.png`, `logo-wordmark.png`. The bag mark can act as a section marker at 24–32px — once per page, max.

## Agent Prompt Guide

### Quick reference

```
CTA / action     #0E1410  ink pill, rounded 9999px, 44px tall
CTA pressed      #2A332D
Brand green      #1EAF12  mark, tags, success, ONE cta per page
Green tint       #ECFBEA / #D7F4D3
Foreground       #0E1410  (never #000)
Body text        #44504A
Meta text        #6B7770
Hairline         #EEF1EF  (border: #E2E7E4, input: #C4CCC6)
Canvas           #FFFFFF  (warm band: #FBFBF7, sunken: #F6F8F6)
Ink band         #0E1410
Category tints   #FDEBD6 jewellery · #F5E3DB handicrafts · #E3E9F2 furniture
                 #DCEFE9 furnishings · #F7E2E4 apparel
Semantic         #E8A317 warn · #D8443C danger · #1F7AD8 info
```

### Ready-to-use prompts

**Marketing hero**
> Build a hero on white. Left column: 11px uppercase eyebrow at 0.12em tracking in `#15860D`; headline in Nunito **900 italic**, `clamp(2.75rem, 5.2vw + .5rem, 5rem)`, line-height 1.02, tracking -0.03em, colour `#0E1410`, with one clause in `#1EAF12`; 18px/1.5 subtitle in `#44504A`; then a green pill "Get a quote" (`#1EAF12`, white 600/14px, 12px 24px, radius 9999px, 44px tall) beside an outlined pill "Book a call" (transparent, 1px `#C4CCC6`). Right column: a 4:5 photo frame at 28px radius with shadow `0 12px 32px -4px rgba(14,20,16,.10)`. 120px vertical padding, 1280px container, 32px gutters. Sentence case throughout.

**Category grid**
> Five pastel panels in a 5-up grid, 16px gap. Each: 28px radius, 32px padding, no border, no shadow. Fills and text in pairs — `#FDEBD6`/`#7A4410` jewellery, `#F5E3DB`/`#74392A` handicrafts, `#E3E9F2`/`#1F3A5F` furniture, `#DCEFE9`/`#1C5A4C` furnishings, `#F7E2E4`/`#7A2F36` apparel. Title in Nunito 700/22px, body 15px/1.5 at 82% opacity. A pill tag in the same tint sits above the title.

**Proof strip**
> Full-width band on `#FBFBF7` with 1px `#E2E7E4` top and bottom, 32px padding, four cells. Each cell: number in Nunito **900 italic** 64px, line-height 1.05, tracking -0.02em, colour `#0E1410`; label below in Inter 500/14px `#6B7770`. Numerals with units only — "600+", "4–6 wks", "40+", "100%".

**Form**
> Stacked fields, 16px gap. Label Inter 500/14px `#0E1410`. Control 44px tall, Nunito 500/16px, 0 16px padding, 10px radius, 1px `#C4CCC6`, white; focus thickens to 2px `#0E1410`; error thickens to 2px `#D8443C` with the message in 13px `#D8443C`. Help text Inter 400/13px `#6B7770`. Submit is an ink pill. Mark optional fields rather than starring required ones.

**Closing CTA**
> Ink banner: `#0E1410`, 32px radius, 64px padding, centred. Headline Nunito 700/36px white, tracking -0.02em; sub in `rgba(255,255,255,.66)`; one white pill CTA (`#FFFFFF` fill, `#0E1410` text, radius 9999px). Below it, an ink footer with a 4-column link grid, links in `rgba(255,255,255,.66)` hovering to `#2BC11E`.

### Copy voice, in one line
> "We've already handled it." Confident not loud, concrete over abstract, operational verbs, numerals for any quantity ≥ 2, no exclamation marks, no emoji.
