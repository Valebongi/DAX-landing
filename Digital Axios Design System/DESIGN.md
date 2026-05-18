# Digital Axios — DESIGN.md

> **One-file reference** for the Digital Axios design system. Everything you need to design or build a DAX surface, without opening any other file. For agent-skill integration see `SKILL.md`; for live previews see `preview/`; for working code see `ui_kits/marketing-site/`.

---

## 0. Table of contents

1. [Brand snapshot](#1-brand-snapshot)
2. [Voice & content fundamentals](#2-voice--content-fundamentals)
3. [Logo & wordmark](#3-logo--wordmark)
4. [Color system](#4-color-system)
5. [Typography](#5-typography)
6. [Spacing & layout](#6-spacing--layout)
7. [Corner radii](#7-corner-radii)
8. [Shadow & elevation](#8-shadow--elevation)
9. [Motion](#9-motion)
10. [Iconography](#10-iconography)
11. [Imagery & backgrounds](#11-imagery--backgrounds)
12. [Components](#12-components)
13. [Page composition rules](#13-page-composition-rules)
14. [State patterns](#14-state-patterns)
15. [Accessibility](#15-accessibility)
16. [Token reference](#16-token-reference-quick-card)
17. [Do / Don't](#17-do--dont)
18. [Open questions & substitutions](#18-open-questions--substitutions)

---

## 1. Brand snapshot

| | |
| --- | --- |
| **Company** | Digital Axios (wordmark: **DAX**) |
| **Category** | Strategic technology & engineering consultancy |
| **Audience** | CTOs, VPs of Engineering, COOs at mid-market and enterprise scale |
| **Promise** | "Scale the engineering, not the org chart." |
| **Differentiator** | Real engineering deliverables — microservices, vector databases, AI pipelines — merged into production trees, not slideware |
| **Tone** | Confident, dry, numerate. Demonstrate, don't pitch. |

**Brand polarity:** bright **Axios blue** as energy + signal, against **deep navy ink** as authority. White is the canvas. There is no third color in the brand palette.

---

## 2. Voice & content fundamentals

### Voice

Plainspoken business English with engineering specificity. We speak in margins, latencies, p99s, headcount. We don't say *transform* — we say *ship*. We don't say *synergy* — we say *throughput*.

### Person

- **We** design, build, and implement. (First-person plural.)
- Address the reader as **you / your team / your stack**.
- Avoid third-person corporate framing ("the client", "the partner").

### Casing

- **Sentence case** in UI and prose.
- **Title Case** is permitted on hero headlines only.
- The wordmark is **DAX** (uppercase). The company is **Digital Axios** (Title Case, no abbreviation in body copy).

### Punctuation

- Em-dashes — yes.
- Oxford commas — yes.
- Exclamation marks — almost never.
- Numbers as digits: `3×`, `40 ms`, `$8.2M`. Spell out only when starting a sentence.

### Emoji

**No.** The brand is too senior for emoji. Use icons or color to signal status.

### Headline patterns

| Pattern | Example |
| --- | --- |
| **Statement of capability** | "We build what your roadmap is missing." |
| **Number-led** | "12 weeks. 4 engineers. One production system." |
| **Antithesis** | "Scale the engineering, not the org chart." |
| **Constraint-led** | "Vector search at p99 < 80 ms across 12M documents." |

### Copy examples

| ✅ Do | ❌ Don't |
| --- | --- |
| "Cut deploy time from 38 min to under 4." | "Let's transform your digital journey! ✨" |
| "We embed two senior engineers per pod. Six-week cycles. Real merged PRs." | "Unlock synergies across your data ecosystem." |
| "Vector search at p99 < 80 ms across 12M documents." | "Empowering teams to thrive 🚀" |

---

## 3. Logo & wordmark

The DAX wordmark is the only identity element. It is a **rounded geometric letterform** with two distinctive cutouts: the D contains a circular aperture, and the A contains a play-button triangle.

### Variants (in `assets/`)

| File | Use |
| --- | --- |
| `dax-logo-whitebg.png` | Default — blue mark on white or near-white surface |
| `dax-logo-lightbluebg.png` | Inverse navy mark on Axios-blue field (e.g. brand panels) |
| `dax-logo-darkbg.png` | Blue mark on `--bg-inverse` (navy hero, CTA band, footer) |
| `dax-logo-transparent.png` | Transparent — composite onto custom backgrounds with care |

### Rules

- **Clear space:** minimum padding around the wordmark equals the height of the D's circular cutout.
- **Minimum size:** 24 px tall in UI; 12 mm tall in print.
- **Never:** stretch, rotate, gradient-fill, drop-shadow, or apply effects to the mark.
- **Never:** crop the wordmark to use the "D" as a standalone icon, **except** for square favicon/app-icon use.
- **Never:** use the wordmark inline as an icon inside a paragraph.

---

## 4. Color system

Two-pole palette: **Axios blue** + **navy ink**. White is the canvas. **No purples. No magenta. No third hue.**

### Brand — Axios blue ramp

| Token | Hex | Use |
| --- | --- | --- |
| `--dax-blue-050` | `#F0F8FE` | Lightest tint — section bg, hover rows |
| `--dax-blue-100` | `#DBF1FE` | Surface tint — cards, badges, callouts |
| `--dax-blue` | `#3ABEF9` | Primary brand color, accents, CTAs |
| `--dax-blue-600` | `#14A5E8` | Hover / pressed for primary actions |

### Brand — Navy ink ramp

| Token | Hex | Use |
| --- | --- | --- |
| `--dax-navy-600` | `#1B3F76` | Elevated dark surface, dividers on navy |
| `--dax-navy-700` | `#0F2D5C` | Secondary dark, borders on dark |
| `--dax-navy-800` | `#0A2240` | Primary dark surface (for pairing) |
| `--dax-navy-900` | `#071529` | Deepest ink — primary text + dark hero bg |

### Neutrals (light-first)

| Token | Hex | Use |
| --- | --- | --- |
| `--neutral-000` | `#FFFFFF` | Default page surface |
| `--neutral-050` | `#FAFBFC` | Subtle alternate sections |
| `--neutral-100` | `#F2F4F7` | Code blocks, disabled tracks |
| `--neutral-200` | `#E6EAF0` | Default border (hairline) |
| `--neutral-300` | `#CBD2DD` | Stronger border, divider |
| `--neutral-400` | `#97A1B2` | Placeholder, disabled text |
| `--neutral-500` | `#5E6A7E` | Tertiary text, supporting |
| `--neutral-600` | `#3D485B` | Secondary text, body lead |
| `--neutral-700` | `#232C3D` | Reserved — rarely needed; prefer navy-900 |

### Semantic roles

```css
--bg              /* white               — default surface */
--bg-subtle       /* neutral-050         — alternating sections */
--bg-muted        /* neutral-100         — code, disabled */
--bg-tint         /* dax-blue-050        — brand-tinted surface */
--bg-inverse      /* navy-900            — hero, footer, CTA */
--bg-inverse-2    /* navy-800            — elevated dark surface */

--fg-1            /* navy-900            — primary text */
--fg-2            /* neutral-600         — body, lead */
--fg-3            /* neutral-500         — tertiary */
--fg-4            /* neutral-400         — placeholder */
--fg-inverse-1    /* #FFFFFF             — text on dark */
--fg-inverse-2    /* #BFD0E8             — secondary text on dark */

--accent          /* dax-blue */
--accent-fg       /* navy-900            — text on solid blue */

--border          /* neutral-200 */
--border-strong   /* neutral-300 */
--border-inverse  /* navy-700            — borders on dark */

--success         /* #16A34A */
--warning         /* #D97706 */
--danger          /* #DC2626 */
```

### Color rules

- **Light-first.** Default any new surface to white. Earn dark by being a hero, CTA, or footer.
- **One navy band per page max** (CTA + footer count as one cohesive footer block).
- **Axios blue is for action and brand affirmation.** Don't fill large hero areas with it; use it as a tint, an accent, a button.
- **No gradient backgrounds** except the optional subtle navy-to-navy elevation on dark hero sections.
- **Text-on-blue:** always navy-900, never white. The contrast is more confident.
- **Text-on-navy:** white for primary, `#BFD0E8` for secondary.

---

## 5. Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display | **Sora** | 600 / 700 | Geometric, rounded — echoes the DAX wordmark |
| UI / body | **Geist** | 400 / 500 / 600 | Modern, technical, high legibility |
| Code, metrics | **JetBrains Mono** | 500 / 600 | Engineering credibility |

> ⚠️ All three are **Google Fonts substitutions**. If DAX licenses a different brand face, swap the `@import` line in `colors_and_type.css`.

### Stacks (defined in `colors_and_type.css`)

```css
--font-display: 'Sora', ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-sans:    'Geist', ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-mono:    'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace;
```

### Scale

| Role | Class | Size / line-height | Tracking | Family / weight |
| --- | --- | --- | --- | --- |
| Display 1 | `.dax-display-1` | 72 / 1.02 | −0.025em | Sora 700 |
| Display 2 | `.dax-display-2` | 56 / 1.04 | −0.022em | Sora 700 |
| H1 | `.dax-h1` | 40 / 1.10 | −0.020em | Sora 700 |
| H2 | `.dax-h2` | 32 / 1.15 | −0.015em | Sora 600 |
| H3 | `.dax-h3` | 24 / 1.25 | −0.010em | Sora 600 |
| H4 | `.dax-h4` | 20 / 1.30 | −0.005em | Geist 600 |
| Lead | `.dax-lead` | 18 / 1.55 | 0 | Geist 400 |
| Body | `.dax-body` | 16 / 1.55 | 0 | Geist 400 |
| Small | `.dax-small` | 14 / 1.50 | 0 | Geist 400 |
| XS | `.dax-xs` | 12 / 1.45 | +0.010em | Geist 400 |
| Eyebrow | `.dax-eyebrow` | 12 / 1.20 | +0.160em, **UPPERCASE** | Geist 600 |
| Code | `.dax-code` | 14 / 1.60 | 0 | JetBrains Mono 500 |

### Typography rules

- **Display + H1–H3** are always Sora. Always.
- **Metrics, latencies, dollar figures, counts** render in mono. Never in display.
- **Eyebrows are uppercase + tracked.** They are always Axios blue or fg-3.
- **Body minimum:** 14 px. Never set body smaller in UI.
- **Line-length:** body copy capped at ~56 ch (`max-width: 56ch` or ~620 px).
- **Inline emphasis** is Geist 500 (in body) or 600 (in UI titles). Never italicize.

---

## 6. Spacing & layout

**Base unit:** 4 px. The system favors **compact density** — we're a brand that values throughput over breathing room.

### Scale

| Token | px | Typical use |
| --- | --- | --- |
| `--space-1` | 4 | Icon-to-text micro-gap |
| `--space-2` | 8 | Chip padding, tight stack |
| `--space-3` | 12 | Form row gap, button content gap |
| `--space-4` | 16 | Default rhythm inside cards |
| `--space-5` | 20 | Card padding |
| `--space-6` | 24 | Component-to-component vertical |
| `--space-8` | 32 | Sub-section gap |
| `--space-10` | 40 | Section internal padding |
| `--space-12` | 48 | Inter-section vertical |
| `--space-16` | 64 | Hero internal |
| `--space-20` | 80 | Hero vertical |
| `--space-24` | 96 | Page top-padding |

### Layout

- **Container max-width:** `1240 px` on desktop with `24 px` gutters (use `--space-6`).
- **Marketing-site default:** `1280 px` outer with `56 px` side padding.
- **Section vertical rhythm:** `96 px` (top + bottom) on desktop. Reduce to `64 px` on dense pages (case-study indexes, blog).
- **Hero vertical:** `96 px` top, `80 px` bottom — slightly asymmetric, weight toward the top.

---

## 7. Corner radii

Rounded but not soft-pretzeled. The wordmark's letterform sets the upper bound — never round so aggressively that a card mimics the logo.

| Token | px | Use |
| --- | --- | --- |
| `--radius-xs` | 4 | Inline code, tiny tags |
| `--radius-sm` | 6 | Form chips, small buttons |
| `--radius-md` | **10** | **Default for buttons, inputs, selects** |
| `--radius-lg` | 14 | Cards |
| `--radius-xl` | 20 | Hero panels, feature cards, modals |
| `--radius-2xl` | 28 | Decorative blocks only |
| `--radius-pill` | 999 | Status chips, badges, avatars |

**Rule:** never combine more than 2 radius scales in a single component (e.g. a card at `lg` may contain buttons at `md`, but never `pill` + `xl` + `md` together).

---

## 8. Shadow & elevation

Soft and shallow. **All shadows are navy-tinted** (`rgba(7, 21, 41, x)`). Never use a black shadow.

| Token | Use |
| --- | --- |
| `--shadow-xs` | Hairline lift — sticky chrome |
| `--shadow-sm` | Default card rest state |
| `--shadow-md` | Hovered card, dropdown menu |
| `--shadow-lg` | Modal, hero panel, popover |
| `--shadow-glow` | 4-px blue ring — selected state |
| `--shadow-focus` | 3-px blue ring (45 % alpha) — keyboard focus |

```css
--shadow-xs:    0 1px 2px rgba(7, 21, 41, 0.04);
--shadow-sm:    0 1px 3px rgba(7, 21, 41, 0.06), 0 1px 2px rgba(7, 21, 41, 0.04);
--shadow-md:    0 6px 16px -4px rgba(7, 21, 41, 0.08), 0 2px 6px rgba(7, 21, 41, 0.04);
--shadow-lg:    0 18px 40px -12px rgba(7, 21, 41, 0.14), 0 4px 12px rgba(7, 21, 41, 0.05);
--shadow-glow:  0 0 0 4px rgba(58, 190, 249, 0.20);
--shadow-focus: 0 0 0 3px rgba(58, 190, 249, 0.45);
```

---

## 9. Motion

Quiet, short, no bounces.

| Token | ms | Use |
| --- | --- | --- |
| `--dur-fast` | 120 | Hover, focus, state changes |
| `--dur-base` | 200 | Default UI transition |
| `--dur-slow` | 320 | Emphasized reveals (hero only) |

| Easing | Curve | Use |
| --- | --- | --- |
| `--ease-standard` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Default for all UI |
| `--ease-emphasized` | `cubic-bezier(0.16, 1, 0.3, 1)` | Hero reveals, modal open |

### Rules

- **No bounce.** No `cubic-bezier(...overshoot...)`. Never.
- **No slide-in carousels.** Crossfades only.
- **Cards may translate** by 2–4 px on hover. Never scale.
- **Buttons:** color transition only on hover. `translateY(1px)` on `:active`.
- **No parallax.** Background and foreground move together.
- **Respect `prefers-reduced-motion`** — reduce all durations to 0 ms.

---

## 10. Iconography

DAX is wordmark-only. For UI icons, standardize on **[Lucide](https://lucide.dev)** loaded from CDN.

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="database"></i>
<script>lucide.createIcons();</script>
```

### Rules

| | |
| --- | --- |
| Stroke | **1.5 px** — never mix stroke widths in one composition |
| Default size | **24 px** |
| Dense tables | 20 px (rarely 16) |
| Color | `currentColor` for neutral chrome; `var(--dax-blue)` for active / brand-affirming |
| Fills | Never. Lucide outline only. |
| Gradients | Never on an icon. |
| Emoji | Never as iconography. |
| Status | Use semantic color on the icon's stroke, not a halo behind it. |

> ⚠️ If DAX has a proprietary icon library, supply the SVG set and we will swap Lucide for it.

---

## 11. Imagery & backgrounds

### Backgrounds

- **White is the default.** Always.
- Alternate sections with `--bg-subtle` and `--bg-tint` to create rhythm.
- **Navy bands:** hero, CTA, footer. Never more than two per page.
- The only permitted decorative pattern: a subtle radial-dot motif in Axios blue.

```css
/* DAX dotted blue background — use ONLY in hero and CTA */
background-image: radial-gradient(rgba(58,190,249,0.18) 1px, transparent 1px);
background-size: 28px 28px;
mask-image: radial-gradient(ellipse 80% 70% at 70% 40%, #000 30%, transparent 75%);
```

### No-no list

- No mesh gradients.
- No noise / grain.
- No background images behind text.
- No full-bleed photography unless explicitly briefed.

### Imagery (when photography is briefed)

- **Cool-toned, sharp-focus, technical.** Datacenter, whiteboard, code-on-monitor, schematic.
- **Never** stock smiling-team-with-laptops.
- Apply a slight navy duotone (`#071529 → #3ABEF9`) on hero placements.
- Treat product UI screenshots like diagrams: navy chrome, blue accents, no faux-3D.

### Transparency & blur

Used sparingly.

- **Sticky nav:** `backdrop-filter: blur(14px)` on `rgba(255,255,255,0.78)`.
- **Glass panels:** hero overlay only.
- **Never** inside a card body.

---

## 12. Components

> All component implementations live in `ui_kits/marketing-site/`. Preview cards live in `preview/`.

### Buttons (`.dax-btn`)

| Variant | Class | Use |
| --- | --- | --- |
| Primary | `.dax-btn--primary` | One per surface — the main action |
| Secondary | `.dax-btn--secondary` | Companion to primary; outlined |
| Ghost | `.dax-btn--ghost` | Tertiary, low-emphasis |
| Dark | `.dax-btn--dark` | Inverted — for use on light section bg when primary is too loud |

| Size | Modifier | Padding |
| --- | --- | --- |
| Small | `.dax-btn--sm` | 9 × 13 |
| Default | — | 13 × 18 |
| Large | `.dax-btn--lg` | 16 × 24 |

**Rules.** One primary CTA per viewport. Always include an arrow icon (`→`) on the primary action. Disabled state = 40 % opacity, no hover.

### Inputs

- Default: 10-px radius, 1-px `--border-strong` border, 10 × 12 padding.
- **Focus:** border → `--dax-blue`, `--shadow-focus` ring (3-px blue at 45 % alpha).
- **Error:** border → `--danger`, focus ring shifts to red at 25 % alpha.
- Disabled: 40 % opacity, `cursor: not-allowed`.
- Placeholder color: `--fg-4`.

### Cards

| Variant | Background | Border | Shadow |
| --- | --- | --- | --- |
| Default | `--bg` | `--border` | `--shadow-sm` |
| Tinted | `--bg-tint` | `rgba(58,190,249,0.25)` | none |
| Dark | `--bg-inverse` | `--border-inverse` | none |

**Padding:** `--space-5` (20 px). **Radius:** `--radius-lg` (14 px). **Hover:** lift to `--shadow-md` + `border-color: --dax-blue` + `translateY(-2px)`.

### Badges & chips

- **Status pill:** `--radius-pill`, 4 × 10 padding, 11 / 600. Always includes a 6-px colored dot.
- **Tag** (mono): `--radius-sm`, 3 × 8 padding, JetBrains Mono 11 px. Used for technical labels (`microservices`, `vector-db`).
- **Semantic pills** use light-tint surface + matching dark text (success: `#DCFCE7` / `#166534`; warning: `#FEF3C7` / `#92400E`; danger: `#FEE2E2` / `#991B1B`).

### Nav

Sticky, blurred backdrop, hairline bottom border. Three-column grid: brand | links (centered) | CTA cluster (right). Height ~58 px. Logo: 28 px tall.

### Hero panel ("deliverable" pattern)

The signature pattern. A dark code panel sits alongside the light hero copy:

- Navy-900 background, `--radius-xl`, three dot bar (mac chrome).
- Code in JetBrains Mono 13 px.
- Footer: 3-column stat grid in mono, blue numbers + fg-inverse-2 labels.

**Always** show real engineering — code, metrics, latencies. Never a smiling-team photo.

### Metric card

- White surface, `--radius-lg`, 22 × 20 padding.
- Value: JetBrains Mono 30 px, navy-900.
- Label: Geist 12 px, `--fg-3`, +0.02em tracking.

---

## 13. Page composition rules

A canonical DAX marketing page composes in this order:

1. **Nav** (sticky, blurred)
2. **Hero** (light, with deliverable code panel)
3. **Proof row** (client logos — placeholder wordmarks if assets are missing)
4. **Capabilities** (3-up card grid)
5. **Case study** (tinted band — `--bg-tint`)
6. **Secondary content** (writing, team, etc — optional)
7. **CTA band** (navy)
8. **Footer** (navy, attached to CTA)

### Section padding

- Default section: `96 px` top & bottom.
- Hero: `96 px` top, `80 px` bottom.
- Proof row: `32 px` top, `40 px` bottom (compact).
- CTA band: `80 px` top & bottom.
- Footer: `64 px` top, `28 px` bottom.

### Color rhythm

```
nav (white) → hero (white, dotted) → proof (white) →
capabilities (white) → case study (tint) → CTA (navy) → footer (navy)
```

One tint section per page. One navy block per page (CTA + footer count together).

---

## 14. State patterns

| Element | Hover | Pressed | Focus | Disabled |
| --- | --- | --- | --- | --- |
| **Primary button** | bg → `--dax-blue-600`, text → white | `translateY(1px)` | `--shadow-focus` | 40 % opacity, no hover |
| **Secondary button** | border → navy-700, bg → `--bg-subtle` | `translateY(1px)` | `--shadow-focus` | 40 % opacity |
| **Ghost button** | bg → `--bg-muted` | `translateY(1px)` | `--shadow-focus` | 40 % opacity |
| **Card** | `--shadow-md`, `translateY(-2px)`, border → `--dax-blue` | — | `--shadow-focus` | — |
| **Link** | underline appears, color → `--dax-blue-600` | — | `--shadow-focus` | — |
| **Input** | border → `--border-strong` | — | border → `--dax-blue`, `--shadow-focus` | 40 % opacity, no hover |
| **Nav link** | color → `--fg-1` | — | `--shadow-focus` rounded | — |

### Rules

- **Never scale on hover.** Translate up to 2 px max.
- **No animated background-position.** No shimmer. No skeleton-pulse for actual UI elements (only for genuine loading states).
- **Focus is always visible.** Never `outline: none` without a replacement `box-shadow`.

---

## 15. Accessibility

- **Contrast minimums:** WCAG AA. Navy-900 on white: 18.1:1 ✓. Axios blue on white: 2.9:1 (use only as accent, never body text). Axios blue on navy-900: 7.4:1 ✓.
- **Focus order** follows visual order. Never `tabindex` higher than 0.
- **Keyboard navigation:** all interactive elements reachable. Focus ring (`--shadow-focus`) always visible.
- **Reduced motion:** wrap all non-essential animations in `@media (prefers-reduced-motion: reduce) { ... duration: 0ms; }`.
- **Forms:** every input has a `<label>`. Errors are described in text, not color alone.
- **Heading hierarchy:** never skip levels. One `<h1>` per page.

---

## 16. Token reference (quick card)

```css
/* Colors */
--dax-blue: #3ABEF9;          --dax-blue-600: #14A5E8;
--dax-blue-100: #DBF1FE;      --dax-blue-050: #F0F8FE;
--dax-navy-900: #071529;      --dax-navy-800: #0A2240;
--dax-navy-700: #0F2D5C;      --dax-navy-600: #1B3F76;

/* Semantic */
--bg: #FFFFFF;                --bg-inverse: #071529;
--bg-subtle: #FAFBFC;         --bg-tint: #F0F8FE;
--fg-1: #071529;              --fg-2: #3D485B;
--fg-3: #5E6A7E;              --fg-4: #97A1B2;
--accent: #3ABEF9;            --accent-fg: #071529;
--border: #E6EAF0;            --border-strong: #CBD2DD;

/* Status */
--success: #16A34A;           --warning: #D97706;           --danger: #DC2626;

/* Type */
--font-display: 'Sora';       --font-sans: 'Geist';         --font-mono: 'JetBrains Mono';

/* Spacing */
4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96

/* Radii */
xs 4 · sm 6 · md 10 · lg 14 · xl 20 · 2xl 28 · pill 999

/* Motion */
fast 120ms · base 200ms · slow 320ms
ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1)
ease-emphasized: cubic-bezier(0.16, 1, 0.3, 1)
```

---

## 17. Do / Don't

### Do

- Use **white as the default canvas**.
- Render **all numbers in JetBrains Mono**.
- Lead with **engineering specificity** ("p99 < 80 ms across 12M docs") over generic benefits.
- Limit a page to **one navy band** (CTA + footer counts as one).
- Pair every primary button with a **rightward arrow icon**.
- Use **Lucide icons at 1.5-px stroke**, 24 px default.
- Set hairlines (`--border`) on every card.
- Use **em-dashes and the Oxford comma**.

### Don't

- Don't use **emoji**. Anywhere.
- Don't use **purples, magentas, or any third hue**.
- Don't use **gradient backgrounds** as decoration.
- Don't use **drop-shadows that aren't navy-tinted**.
- Don't **bounce** in animations.
- Don't **scale on hover** — translate only.
- Don't **stretch or rotate the wordmark**.
- Don't use **transformational/empowerment copy** ("unlock", "synergy", "journey").
- Don't crowd the wordmark with effects, gradients, or decoration.
- Don't put **body text below 14 px**.

---

## 18. Open questions & substitutions

| Item | Current | Confidence | Asked from user |
| --- | --- | --- | --- |
| **Fonts** | Sora / Geist / JetBrains Mono (Google Fonts) | Substitution | Real brand font files (if any) |
| **Icon system** | Lucide (CDN) | Substitution | Proprietary icon SVGs (if any) |
| **Copy voice** | Reasoned from brief | Inferred | Sample of real DAX prose for calibration |
| **App / docs / deck kit** | Not built | Awaiting brief | Which surfaces should ship next? |
| **Imagery** | Placeholder logos only | Awaiting | Real client logos + photography direction |
| **Pixel reference** | Brief + wordmark only | Awaiting | Figma link or live URL to match against |

> All substitutions are isolated to `colors_and_type.css` (fonts) and the Lucide CDN tag (icons). Swap in real assets at those two points and the entire system updates.
