# Indibuying — Website UI kit

A from-scratch marketing site for **Indibuying.com**, built against the brand fundamentals in `../../README.md` and tokens in `../../colors_and_type.css`.

> **Important caveat.** No live website, design files, or codebase was provided. Every screen here is **a proposal**, not a recreation. Confirm with stakeholders before treating any layout as canonical.

## Files

| File | What it is |
|---|---|
| `index.html` | Single-page marketing site. Hero → How it works → Categories → Proof → Quote form → Footer. Click-thru on the quote form is functional (multi-step). |
| `TopNav.jsx` | Sticky top navigation with logo + primary CTA. |
| `Hero.jsx` | Hero with headline, sub, primary CTA, supporting metric strip. |
| `HowItWorks.jsx` | Four-step "Source → Sample → Inspect → Ship" process. |
| `Categories.jsx` | Grid of sourcing categories. |
| `Proof.jsx` | Stats band + a single case-study quote. |
| `QuoteForm.jsx` | Multi-step "Get a quote" form (category → volume → contact → confirm). |
| `Footer.jsx` | Compact footer with secondary nav and contact. |

## Running it

Just open `index.html`. Uses React 18.3.1 + Babel standalone (pinned, CDN), and Nunito + Inter from Google Fonts. All assets are imported from `../../assets/`.

## What this kit deliberately does NOT do

- No real database, no real submissions — the quote form's "submit" just advances the step.
- No router, no multi-page nav — all sections sit on one scrollable page so reviewers can see the full system at once.
- No images — placeholder color blocks marked `[photo]` indicate where real photography lives.
