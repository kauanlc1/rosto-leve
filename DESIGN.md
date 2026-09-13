---
name: Rosto Leve
description: Warm-monochrome editorial house for aesthetics — cinematic espresso grounds, ivory reading grounds, one oxblood accent for the live element.
colors:
  ink: "#131110"
  ink-2: "#1c1917"
  graphite: "#2a2724"
  bone: "#f4f0ea"
  paper: "#fbf9f5"
  paper-2: "#efe9e0"
  on-dark: "#f4f0ea"
  on-dark-soft: "#c0b8ae"
  on-dark-faint: "#9a9289"
  on-light: "#131110"
  on-light-soft: "#544d46"
  on-light-faint: "#6b635a"
  accent: "#7c2b2b"
  accent-warm: "#9a3b34"
  accent-on: "#f7efe9"
  line-dark: "rgba(244,240,234,.16)"
  line-dark-2: "rgba(244,240,234,.28)"
  line-light: "rgba(19,17,16,.14)"
  line-light-2: "rgba(19,17,16,.26)"
typography:
  display:
    fontFamily: "Bodoni Moda, Didot, Times New Roman, serif"
    fontSize: "clamp(2.6rem, 7.2vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bodoni Moda, Didot, Times New Roman, serif"
    fontSize: "clamp(2.1rem, 5vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Bodoni Moda, Didot, Times New Roman, serif"
    fontSize: "clamp(1.7rem, 3.4vw, 2.7rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(16px, 1.05vw, 17.5px)"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  lede:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.12rem, 1.7vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  none: "0"
  full: "50%"
spacing:
  gutter: "clamp(20px, 5vw, 72px)"
  section-y: "clamp(64px, 10vw, 150px)"
  btn-pad: "1.05em 1.8em"
  btn-pad-lg: "1.2em 2.2em"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-on}"
    rounded: "{rounded.none}"
    padding: "{spacing.btn-pad}"
  button-primary-hover:
    backgroundColor: "{colors.accent-warm}"
    textColor: "{colors.accent-on}"
  button-light:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.btn-pad}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "{spacing.btn-pad}"
  quiz-option:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "1.15em 1.4em"
  quiz-option-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-on}"
---

# Design System: Rosto Leve

## Overview

**Creative North Star: "The Aesthetics House Cover Story"**

Rosto Leve reads like an editorial house's cover feature, not a niche depuffing landing page. It refuses the category default — soft light background, emoji, identical cards, a shouting guarantee seal — and replaces it with cinematic proof and editorial typography. The whole surface is warm monochrome: espresso-near-black grounds carry full-bleed grayscaled media, ivory grounds carry the reading, and photogravure grays sit between. A single restrained oxblood is the only chromatic voice, and it is spent only on the "live element."

The world is recognizable with the content stripped out: the alternation of dark-cinema and ivory-editorial grounds, 1px hairlines as the only divider, high-contrast Didot display (Bodoni Moda) set against clean grotesque body (Archivo), and uppercase tracked micro-labels used as photo folios and captions. Tone follows the brand voice: mature, elegant, confident, unhurried — persuasion without hype. A deliberate night→day→night tonal progression runs down the scroll (dark hero → ivory sections → dark close).

Density is generous and unhurried: large section padding, long measures, and text that is allowed to breathe. Motion is quiet — content rests visible and reveals gently on scroll, degrading to fully visible without JS and honoring reduced-motion.

**Key Characteristics:**
- Warm monochrome: espresso grounds + ivory grounds + photogravure grays.
- One accent (oxblood) reserved for the live element; never decorative.
- Bodoni Moda display against Archivo body; uppercase tracked folios.
- 1px hairlines as the sole divider; flat surfaces, square corners.
- Full-bleed grayscaled media; editorial spreads across the gutter.

## Colors

A warm monochrome built from espresso and ivory, with a single oxblood accent held in reserve.

### Primary
- **Oxblood** (#7c2b2b): The only chromatic voice — the "live element." Reserved for the primary button fill, the before/after slider handle and knob, the FAQ toggle glyph, active quiz options, numbered-module folios, and accent labels on light grounds. Its rarity is the message.
- **Oxblood Warm** (#9a3b34): The lighter oxblood for hover states, and the accent substitute on dark grounds (progress fills, checklist icons, the scroll-cue fade, focus ring) where full oxblood loses contrast.
- **Oxblood Tint** (#f7efe9): The near-white ink used on top of oxblood fills (button labels, knob glyph, selection text).

### Neutral
- **Espresso** (#131110): The near-black cinematic ground — page default background and dark sections.
- **Espresso Secondary** (#1c1917): Secondary dark ground and elevated dark surfaces (the offer card, the "night" closing section).
- **Graphite** (#2a2724): Elevated dark surface / media placeholder fill behind figures and the comparator.
- **Ivory** (#f4f0ea): The editorial reading ground and the text color on dark.
- **Paper** (#fbf9f5): The lifted light surface (paper sections, bonus tiles).
- **Paper Deep** (#efe9e0): A deeper ivory block for tonal layering on light.
- **Ink-on-Dark Soft** (#c0b8ae) / **Faint** (#9a9289): Secondary and tertiary text on dark grounds, tuned to hold AA.
- **Ink-on-Light Soft** (#544d46) / **Faint** (#6b635a): Secondary and tertiary text on light grounds.
- **Hairlines**: Ivory at 16%/28% on dark (`line-dark`, `line-dark-2`); espresso at 14%/26% on light (`line-light`, `line-light-2`). These are the dividers of the whole system.

### Named Rules
**The Live Element Rule.** Oxblood marks exactly one thing — the element that is alive under the reader's hand or eye (primary action, slider, active choice, live folio). If a surface has oxblood in two unrelated decorative places, one of them is wrong.

**The Dark-Ground Fallback Rule.** On espresso grounds, full oxblood (#7c2b2b) fails AA for small text, so small accents fall back to Oxblood Warm (#9a3b34) or neutral soft ink. Oxblood folios (the `.idx`) only render in oxblood on light grounds, where they pass.

## Typography

**Display Font:** Bodoni Moda (with Didot, Times New Roman, serif) — loaded from Google Fonts with optical sizing.
**Body Font:** Archivo (with Helvetica Neue, Arial, sans-serif) — loaded from Google Fonts.

**Character:** A high-contrast Didot-style serif carries every headline and numeral with editorial authority and tight tracking; a clean, quiet grotesque carries all reading and UI. The pairing is a magazine masthead over a clean caption grid.

### Hierarchy
- **Display** (500, `clamp(2.6rem, 7.2vw, 6rem)`, line-height 1.0, tracking -0.02em): The cover headline — hero only. Set with balanced wrapping; the second line often italic.
- **Headline** (500, `clamp(2.1rem, 5vw, 4rem)`, line-height 1.04): Section openers.
- **Title** (500, `clamp(1.7rem, 3.4vw, 2.7rem)` and `clamp(1.35rem, 2.2vw, 1.85rem)` for the smaller step): Sub-section titles and statements.
- **Lede** (400, `clamp(1.12rem, 1.7vw, 1.4rem)`, line-height 1.5, max 60ch): Supporting paragraph under a headline, in soft ink.
- **Body** (400, `clamp(16px, 1.05vw, 17.5px)`, line-height 1.62, measure ~66ch): Reading text; paragraph spacing 1.1em.
- **Label / Folio** (600, 0.76rem, tracking 0.2em, uppercase): The `.credit` micro-label — photo credits, figure numbers, ranked captions, question counters.

### Named Rules
**The Folio, Not Eyebrow Rule.** Uppercase tracked micro-labels are photo folios and captions (`Fig. 01`, `Pergunta 01`, `Seu resultado`) — never a kicker/eyebrow stacked above a headline as a decorative label. Caption descriptions drop to normal case for legibility (`.cap`).

**The Serif Numeral Rule.** Sequence numbers that are real sequence (phase 1–4, module 01–n, the price figure) are set in the Bodoni display at large size; they are the system's ornament instead of any invented badge.

## Layout

A centered editorial column on a warm ground. The content width is `min(100% - gutter*2, 1280px)` (`.wrap`) or a 760px narrow measure (`.narrow`); the gutter is fluid `clamp(20px, 5vw, 72px)`. Section rhythm is `clamp(64px, 10vw, 150px)` of vertical padding, giving the unhurried editorial density.

The signature layout is the **spread**: a two-column grid (`1fr 1fr`, gap `clamp(28px, 5vw, 80px)`) that runs a grayscaled figure against a headline/text block across the gutter, with order-swap variants for text-left and mobile-flip. Numbered lists (phases, modules) are `auto 1fr auto` / `auto 1fr` grids separated by hairlines. The moments and bonus grids are two-up cells divided only by hairlines.

Grounds alternate to build the night→day→night progression: dark hero → light reframe → dark proof → paper method → dark moments → light honesty → dark close.

Breakpoints: 820px (spread collapses to one column), 720px (two-columns collapse; hero credit hides; sticky CTA appears), 640px (numbered lists and card grids go single-column).

## Elevation & Depth

Essentially flat. Depth comes from tonal layering (espresso vs. ink-2 vs. graphite on dark; ivory vs. paper vs. paper-deep on light) and from hairlines, not from shadows. There is exactly one shadow token, and it is spent on the live element.

### Shadow Vocabulary
- **Soft Lift** (`box-shadow: 0 24px 60px -28px rgba(19,17,16,.45)`): Used only under the comparator knob — the one round, grabbable object in the system. Not a general card shadow.

### Named Rules
**The Flat-Ground Rule.** Surfaces are flat. Separation is a 1px hairline or a tonal shift, never a drop shadow. The single Soft Lift exists to make the draggable knob feel liftable; do not extend it to cards, buttons, or sections.

## Shapes

Square by default: buttons, cards, offer blocks, quiz options, tags, and the synthetic badge all have `border-radius: 0`. The only round form is the comparator knob (`50%`, 52px) — deliberately the sole circle so the interactive handle reads as the exception. Borders are 1px hairlines in the ground-appropriate ink. The recurring silhouette is the hairline-ruled row and the hard-edged rectangular figure frame (aspect 4/5 for portraits, 3/4 for the comparator).

## Components

### Buttons
- **Shape:** Hard rectangle (`border-radius: 0`), 1px border matching fill, inline-flex with a trailing single-stroke arrow icon that slides 5px on hover.
- **Primary (live element):** Oxblood fill (#7c2b2b) with tint label (#f7efe9); padding `1.05em 1.8em` (`--lg`: `1.2em 2.2em`). Hover shifts to Oxblood Warm (#9a3b34); active nudges down 1px.
- **Light:** Ivory fill on dark grounds; hover to pure white. For the secondary action beside a primary on the hero.
- **Ghost:** Transparent with a hairline border; on hover it inverts to a solid ink/ivory fill. Ground-aware (ivory border on dark, ink border on light).
- **Transitions:** background/color 0.4s and transform 0.3s on the shared ease `cubic-bezier(.22,1,.36,1)`.

### Quiz Options
- **Style:** Full-width hard rectangle with a 1px `line-dark-2` border, ivory text, a hollow circle marker at the trailing edge.
- **Hover:** Fills graphite, border brightens to ivory, and text nudges 0.3em to the right (`padding-left`).
- **Selected** (`aria-pressed="true"`): Oxblood fill with tint text and a filled tint marker — the live element again.

### Cards / Containers
- **Corner Style:** Square (0).
- **Background:** Paper (#fbf9f5) tiles for bonus; ink-2 (#1c1917) for the offer card.
- **Shadow Strategy:** None — see Elevation. Separation is a 1px hairline grid (bonus tiles are cells in a hairline lattice; offer rows are hairline-ruled).
- **Border:** 1px ground-appropriate hairline.
- **Internal Padding:** `clamp(22px, 2.8vw, 34px)` for tiles; `clamp(28px, 4vw, 56px)` for the offer.

### Navigation
- **Style:** Transparent bar floating over the hero (absolute), or a sticky blurred espresso bar (`rgba(19,17,16,.82)` + backdrop blur) with a bottom hairline.
- **Wordmark:** Archivo 700, uppercase, tracking 0.34em, ivory, with an oxblood-warm period (`.dot`).
- **Mobile:** A fixed bottom sticky CTA bar appears under 720px with the price and primary action.

### Before/After Comparator (signature)
The interaction that defines the world. A 3/4 rectangle over graphite; before/after images clipped by `clip-path` at `--pos`. A 2px oxblood-warm handle spans full height; a 52px oxblood circular knob (the only circle, the only shadow) carries a single-stroke move icon. A visually-hidden range input provides keyboard/pointer control and `:focus-within` draws an ivory focus ring on the knob. Corner tags (`Antes` / `Depois`) sit in translucent espresso chips.

### Numbered Phase / Module Lists (signature)
Hairline-ruled rows with a large Bodoni numeral. Phases use a plain serif number and an oxblood duration tag; modules use `counter(mod, decimal-leading-zero)` in oxblood. Numbering is legitimate here because it is real sequence.

### FAQ Accordion
Native `<details>` with the marker suppressed. Hairline top/bottom per item; a Bodoni question; an oxblood plus/minus glyph (`.pm`) whose vertical stroke collapses on open.

## Do's and Don'ts

### Do:
- **Do** spend oxblood only on the live element (primary action, slider handle/knob, active choice, live folio), keeping it rare.
- **Do** alternate espresso and ivory grounds to carry the night→day→night scroll progression.
- **Do** divide with 1px hairlines and tonal shifts; keep surfaces flat and corners square (`border-radius: 0`).
- **Do** set every headline and real sequence numeral in Bodoni Moda display, and all reading/UI in Archivo.
- **Do** use uppercase tracked micro-labels as photo folios/captions, and grayscale all photographic and video media.
- **Do** let content rest visible and reveal gently on scroll; honor `prefers-reduced-motion` and keep AA contrast (fall back to Oxblood Warm / soft ink for small accents on dark).

### Don't:
- **Don't** stack an uppercase micro-label as a kicker/eyebrow above a headline — folios are captions, not eyebrows.
- **Don't** add drop shadows to cards, buttons, or sections; the single Soft Lift belongs to the comparator knob alone.
- **Don't** introduce a second accent hue or use oxblood decoratively — one voice only.
- **Don't** use gradients as decorative surface fills; gradients are permitted only as functional media scrims for legibility and the single scroll-cue hairline fade.
- **Don't** round corners (except the comparator knob) or reach for generic same-size card grids.
