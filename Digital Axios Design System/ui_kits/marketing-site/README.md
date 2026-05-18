# Marketing site — DAX UI kit

A pixel-target marketing surface for Digital Axios. Compose components from the JSX files; theme via `/colors_and_type.css`.

## Files

| File | Role |
| --- | --- |
| `index.html` | Full single-page composition — load this for the live demo |
| `styles.css` | Component CSS; depends on the root `colors_and_type.css` |
| `Nav.jsx` | Sticky navigation with blurred backdrop |
| `Hero.jsx` | Light hero with code-panel "deliverable" proof |
| `ProofRow.jsx` | Client logo strip (placeholder wordmarks) |
| `Capabilities.jsx` | 3-up capability grid |
| `CaseStudy.jsx` | Featured engagement + metrics |
| `CTA.jsx` | Navy book-a-session band with email form |
| `Footer.jsx` | Navy footer, column nav, legal |

## Composition rules

- One **navy band** per page max (here: the CTA + Footer count together).
- Hero is always white. The dotted-blue background pattern is the only decorative motif we use.
- The hero "deliverable panel" shows real engineering — code, metrics, latencies — never a smiling-team photo.
- All metric numbers render in JetBrains Mono. Never display a metric in a serif or display face.

## What this kit deliberately omits

- Blog index, doc pages, careers detail — those exist as separate kits when briefed.
- Light/dark theme switch — DAX is light-default. Dark surfaces are reserved for hero affirmation, CTA, footer.
- Authenticated app shell — see future `ui_kits/app/`.
