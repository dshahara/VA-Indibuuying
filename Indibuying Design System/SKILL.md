---
name: indibuying-design
description: Use this skill to generate well-branded interfaces and assets for Indibuying, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts **or** production code, depending on the need.

## Quick map

- `README.md` — full brand fundamentals: voice, visual foundations, iconography, do's and don'ts.
- `colors_and_type.css` — all design tokens (CSS custom properties): colors, type, spacing, radii, shadows, motion. Import this; don't hand-roll values.
- `assets/` — logo lockup, bag-only mark, wordmark.
- `preview/` — small HTML cards demonstrating each token in isolation. Useful reference when you need to remember what a color or radius looks like in context.
- `ui_kits/website/` — a working marketing-site interpretation. Read `index.html` and the JSX components for component-level patterns (nav, hero, cards, forms, footer).

## Non-negotiables for this brand

1. **One green, used as accent only.** `#1EAF12` is the brand. Never use it as a full-page background. Buttons, key highlights, success states.
2. **Paper-first surfaces.** Backgrounds are `#FFFFFF` / `#FBFBF7` (warm off-white). No gradients on body backgrounds.
3. **Sentence case everywhere.** Headlines, buttons, nav. Never ALL CAPS body. ALL CAPS only for `eyebrow` labels (12px, 0.12em tracking).
4. **No emoji** in product or marketing copy.
5. **No bluish-purple gradients, no left-border-only accent cards, no springy animations.** See "Don'ts" card.
6. **Nunito** is the substitution font (Google Fonts) until the real brand font is confirmed.
7. **Lucide** is the substitution icon set until a custom set is commissioned.
8. **Operational tone.** Concrete numbers, direct verbs. "Source from 600+ verified factories" not "Unlock India's manufacturing ecosystem."
