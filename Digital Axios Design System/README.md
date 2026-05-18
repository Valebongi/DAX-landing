# Digital Axios — Design System

> **Digital Axios** is a strategic technology partner that designs, builds, and implements production engineering — microservices, vector databases, AI pipelines — for companies that need to scale without multiplying bureaucracy.
> The brand voice is **business-first, engineering-credible**: margins, efficiency, technical authority delivered in every artifact.

---

## Sources

Materials provided for this build:

| File | Notes |
| --- | --- |
| `uploads/DAX.png` | Primary wordmark — Axios blue on transparent |
| `uploads/dax-logo-darkbg.png` | Wordmark for dark-navy surfaces (1080×1080) |
| `uploads/dax-logo-lightbluebg.png` | Inverse wordmark on Axios blue field |
| `uploads/dax-logo-whitebg.png` | Wordmark for white / light surfaces |

No codebase, Figma file, or live website was provided. The system is built from the wordmark + brand brief; copy and component conventions follow conventions standard to enterprise consultancies (McKinsey Digital, Thoughtworks, BCG X) tuned for DAX's blue-on-navy palette and rounded geometric mark.

> ⚠️ **Flagged substitutions** — see "Fonts" below. Real font files were not provided, so the system uses Google Fonts approximations.

---

## Brand snapshot

- **Category:** strategic tech & engineering consultancy
- **Audience:** CTOs, VPs of Engineering, COOs at mid-market and enterprise scale
- **Promise:** "Scale your engineering, not your bureaucracy."
- **Differentiator:** real engineering deliverables (services, vector DBs, AI pipelines) — not slideware
- **Tone:** confident, dry, numerate. Demonstrate, don't pitch.

---

## Content fundamentals

**Voice.** Plainspoken business English with engineering specificity. We speak in margins, latencies, p99s, headcount. We don't say "transform" — we say "ship". We don't say "synergy" — we say "throughput".

**Person.** Mostly first-person plural ("**we** design, build, and implement"). Address the reader as "**you / your team / your stack**" when speaking directly. Avoid corporate "the client" framing.

**Casing.** Sentence case in UI and prose. Headlines may use Title Case for hero moments only. The wordmark is rendered as **DAX** (uppercase) and the company is **Digital Axios** (Title Case, no abbreviation in body copy).

**Punctuation.** Em-dashes — yes. Oxford comma — yes. Exclamation marks — almost never. Numbers are written as digits (`3×`, `40 ms`, `$8.2M`), not words.

**Emoji.** No. The brand is too senior. Use icons or color instead.

**Examples.**

- ✅ "Cut deploy time from 38 min to under 4."
- ✅ "We embed two senior engineers per pod. Six-week cycles. Real merged PRs."
- ✅ "Vector search at p99 < 80 ms across 12M documents."
- ❌ "Let's transform your digital journey! ✨"
- ❌ "Unlock synergies across your data ecosystem."
- ❌ "Empowering teams to thrive 🚀"

**Headline patterns.**

- Statement of capability — "We build what your roadmap is missing."
- Number-led — "12 weeks. 4 engineers. One production system."
- Antithesis — "Scale the engineering, not the org chart."

---

## Visual foundations

### Palette

A two-pole system: bright **Axios blue** (`#3ABEF9`) against deep **navy ink** (`#071529 → #0F2D5C`). White is the canvas; navy is the authority surface; blue is the accent that signals interactivity, brand, and energy. No purples, no gradients-as-decoration. The only gradient permitted is a subtle navy-to-navy elevation on dark hero sections.

### Type

Geometric and confident. **Sora** is the display face — its rounded terminals and tall x-height pair directly with the rounded DAX wordmark. **Geist** carries body and UI text — high legibility, neutral, technical. **JetBrains Mono** appears wherever code, metrics, or system identifiers do.

| Use | Family | Weight |
| --- | --- | --- |
| Display / H1–H3 | Sora | 600–700 |
| H4 / UI titles | Geist | 600 |
| Body / lead | Geist | 400 |
| Eyebrow / caps | Geist | 600, +letter-spacing |
| Code, metrics | JetBrains Mono | 500 |

### Spacing & layout

4-px base unit. Compact density — we are a system that values throughput, not whitespace as a flex. Use `--space-4` (16 px) as the default rhythm inside cards; `--space-12` between sections; `--space-20`+ for hero verticals. Container max-width: **1240 px** at desktop with **24 px** gutters.

### Corners

Rounded but not soft-pretzeled. Buttons and inputs sit at **10 px** (`--radius-md`); cards at **14–20 px**; pills only on tags, status chips, and avatars. The wordmark's letterform radii anchor the upper bound — never round so aggressively that a card mimics a logo.

### Backgrounds

Light-first: **white** is the default surface; `--bg-subtle` and `--bg-tint` alternate sections to create rhythm. The navy `--bg-inverse` is reserved for the hero, the footer, and one "proof" section per page. No background images, no full-bleed photography unless explicitly briefed. No grain. No noise. No mesh gradients.

### Shadows

Soft and shallow. Cards rest with `--shadow-sm`; elevated menus and modals use `--shadow-md`/`lg`. Never use a black-shadow; always blue-tinted ink (`rgba(7, 21, 41, x)`). Focus rings are Axios blue at 45% alpha.

### Borders

Hairlines: **1 px** `--border` (`#E6EAF0`) on cards and inputs. On the navy surface, borders are `--border-inverse` (`#0F2D5C`).

### States

| State | Treatment |
| --- | --- |
| Hover (button) | Darken background one step (e.g. `--dax-blue` → `--dax-blue-600`); no scale |
| Hover (card) | Lift via `--shadow-md`; border stays |
| Hover (link) | Underline appears, color shifts to `--dax-blue-600` |
| Pressed | Background shifts one step darker; 1 px translateY |
| Focus | `--shadow-focus` (blue ring), no outline |
| Disabled | 40 % opacity, `cursor: not-allowed`, no hover |

### Motion

Quiet and short. Default duration **200 ms**; emphasized reveals **320 ms**. Default ease `cubic-bezier(0.2, 0.8, 0.2, 1)`. Never bounce. Crossfades and 4–8 px translates only — no slide-in carousels, no parallax.

### Transparency & blur

Used sparingly. Sticky nav uses `backdrop-filter: blur(12px)` on a 70 %-opaque white. Glass panels appear only on the hero overlay. Never inside a card body.

### Imagery (when needed)

Cool-toned, sharp-focus, technical. Datacenter, whiteboard, code-on-monitor, schematic diagrams. No stock smiling-team-with-laptops. Treated with a slight navy duotone (`#071529 → #3ABEF9`) on hero placements.

---

## Iconography

DAX is a **wordmark-only** identity — no separate icon system was provided. For UI iconography we standardize on **[Lucide](https://lucide.dev)** loaded from CDN: clean 1.5-px stroke, square caps, geometric — visually consistent with the rounded-geometric wordmark.

```html
<!-- recommended -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

**Rules.**

- 1.5-px stroke; never mix stroke widths in one composition.
- 20 px and 24 px are the default sizes; 16 px only inside dense table rows.
- Color follows context: `currentColor` on neutral chrome; `--dax-blue` for active / brand-affirming icons.
- Never decorate an icon with a gradient.
- Never use emoji as iconography.
- Status uses the semantic colors (`--success`, `--warning`, `--danger`) on the icon's stroke, not on a halo behind it.

The DAX wordmark itself is used as a logo, **not** as a favicon-style mark. For favicons / app icons, the "D" letterform (with its circular cutout) is cropped square — see `assets/dax-logo-darkbg.png` for the squared composition.

> ⚠️ **Flagged**: if Digital Axios has a proprietary icon library, supply the SVG set and we will swap Lucide for it.

---

## File index

```
.
├── README.md                  ← you are here
├── SKILL.md                   ← agent-skill manifest (downloadable as Claude Code skill)
├── colors_and_type.css        ← tokens: color, type, spacing, radii, shadows, motion
├── assets/
│   ├── dax-logo-transparent.png
│   ├── dax-logo-darkbg.png
│   ├── dax-logo-lightbluebg.png
│   └── dax-logo-whitebg.png
├── preview/                   ← Design System tab cards (one HTML file each)
│   ├── _card.css              ← shared base styles for cards
│   ├── logo.html
│   ├── colors-brand.html
│   ├── colors-neutral.html
│   ├── colors-semantic.html
│   ├── type-display.html
│   ├── type-body.html
│   ├── type-mono.html
│   ├── type-scale.html
│   ├── spacing.html
│   ├── radii.html
│   ├── shadows.html
│   ├── iconography.html
│   ├── buttons.html
│   ├── inputs.html
│   ├── cards.html
│   ├── badges.html
│   └── motion.html
└── ui_kits/
    └── marketing-site/
        ├── README.md
        ├── index.html        ← full single-page composition
        ├── styles.css        ← component CSS (depends on root tokens)
        ├── Nav.jsx
        ├── Hero.jsx
        ├── ProofRow.jsx
        ├── Capabilities.jsx
        ├── CaseStudy.jsx
        ├── CTA.jsx
        └── Footer.jsx
```

---

## Fonts — substitution notice

**No font files were provided.** The system loads the closest Google Fonts equivalents:

| Role | Used | Likely intended | Action |
| --- | --- | --- | --- |
| Display | **Sora** | A custom or licensed geometric (e.g. *Söhne*, *GT America Rounded*) | Provide the brand display face and we swap globally in `colors_and_type.css` |
| Body / UI | **Geist** | An open-source modern sans matches well; swap if you license something else | Confirm or supply |
| Mono | **JetBrains Mono** | — | Confirm |

---

## How to use

1. Link `colors_and_type.css` at the top of any HTML file you generate.
2. Use semantic CSS variables (`--fg-1`, `--bg-tint`, `--accent`) — never raw hex.
3. Compose UI from `ui_kits/marketing-site/` components when a marketing surface is needed.
4. For Claude Code: download this folder and the `SKILL.md` is auto-registered.
