---
name: digital-axios-design
description: Use this skill to generate well-branded interfaces and assets for Digital Axios (DAX), either for production or throwaway prototypes/mocks/decks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill first, then explore the other available files:

- `colors_and_type.css` — tokens for color, type, spacing, radii, shadows, and motion. **Always link this stylesheet at the top of any HTML you generate.**
- `assets/` — wordmarks for light, dark, and brand-blue backgrounds.
- `preview/` — reference cards showing each foundation in isolation.
- `ui_kits/marketing-site/` — full marketing-site composition. JSX components + an `index.html` you can clone and modify.

## Operating principles

- **Light surfaces by default.** White (`--bg`) and the lightest blue tint (`--bg-tint`) are the canvas. Reserve navy (`--bg-inverse`) for hero affirmation moments, CTA bands, and footers — at most two navy bands per page.
- **Compact density.** 4-px base spacing. Reach for `--space-4` (16) inside cards, `--space-12` (48) between sections.
- **Rounded but not soft.** Buttons + inputs at `--radius-md` (10). Cards at `--radius-lg`/`xl` (14–20). Pills only on chips and avatars.
- **No emoji, no purple, no gradients-as-decoration.** The only acceptable decorative pattern is the radial dotted blue motif used in the hero (`background-image: radial-gradient(rgba(58,190,249,0.18) 1px, transparent 1px); background-size: 28px 28px;` with a soft mask).
- **Numbers in mono.** Any metric, latency, dollar figure, or count renders in `var(--font-mono)` (JetBrains Mono).
- **Voice: dry, numerate, business-credible.** Engineering specificity over generic transformation language. Write "Cut deploy time from 38 min to under 4," never "Unlock your potential."

## Iconography

Use **Lucide** from CDN at 1.5-px stroke. 24 px default; 20 px in dense rows. Stroke color follows `currentColor`; switch to `var(--dax-blue)` only when the icon signals activity or brand affirmation.

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="database"></i>
<script>lucide.createIcons();</script>
```

## When invoked without guidance

If the user invokes this skill without specifics, ask:

1. What surface? (marketing page, slide deck, case-study PDF, app screen, email)
2. Audience tier? (CTO/VPE, board, peer engineers)
3. Constraints — length, must-have sections, attached materials?
4. Dark navy band or all-light?

Then act as an expert DAX designer: output an HTML artifact for review, OR production-ready code if the user is working in their codebase. Always copy assets from `assets/` rather than hot-linking, and import `colors_and_type.css` first in every file.

## Substitution flags

Real font files were not provided. The system uses Google Fonts (Sora / Geist / JetBrains Mono) as the closest open-source approximations. If Digital Axios licenses a different brand face, replace the `@import` line in `colors_and_type.css` and swap the `--font-display` / `--font-sans` stacks.
