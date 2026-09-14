---
name: Rosto Leve
description: Warm-monochrome editorial house for aesthetics — cinematic espresso grounds, ivory reading grounds, one oxblood accent for the live element.
colors:
  ink: "#131110"
  ink-2: "#1c1917"
  graphite: "#2a2724"
  device-black: "#0a0908"
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
  subhead:
    fontFamily: "Bodoni Moda, Didot, Times New Roman, serif"
    fontSize: "clamp(1.1rem, 1.7vw, 1.5rem)"
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
  numeral-lg:
    fontFamily: "Bodoni Moda, Didot, Times New Roman, serif"
    fontSize: "clamp(2.4rem, 5vw, 4.2rem)"
    fontWeight: 500
    lineHeight: 0.8
    letterSpacing: "-0.02em"
  numeral-md:
    fontFamily: "Bodoni Moda, Didot, Times New Roman, serif"
    fontSize: "clamp(2rem, 3.2vw, 2.8rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  price:
    fontFamily: "Bodoni Moda, Didot, Times New Roman, serif"
    fontSize: "clamp(3.2rem, 7vw, 5rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  plan-price:
    fontFamily: "Bodoni Moda, Didot, Times New Roman, serif"
    fontSize: "clamp(2.6rem, 5vw, 3.6rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.02em"
rounded:
  none: "0"
  device: "40px"
  device-screen: "30px"
  full: "50%"
spacing:
  gutter: "clamp(20px, 5vw, 72px)"
  section-y: "clamp(64px, 10vw, 150px)"
  btn-pad: "1.05em 1.8em"
  btn-pad-lg: "1.2em 2.2em"
  card-pad: "clamp(22px, 2.8vw, 34px)"
  plan-pad: "clamp(24px, 3vw, 38px)"
  modal-pad: "clamp(28px, 4vw, 44px)"
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
  device:
    backgroundColor: "{colors.device-black}"
    rounded: "{rounded.device}"
    padding: "11px"
  device-screen:
    backgroundColor: "{colors.graphite}"
    rounded: "{rounded.device-screen}"
  step:
    backgroundColor: "transparent"
    textColor: "{colors.on-light}"
    rounded: "{rounded.none}"
    padding: "clamp(22px, 2.6vw, 32px) clamp(18px, 2.4vw, 32px)"
  preview-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.on-light}"
    rounded: "{rounded.none}"
  testimonial:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "clamp(20px, 2.4vw, 28px)"
  plan:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "{spacing.plan-pad}"
  plan-featured:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "{spacing.plan-pad}"
  plan-name:
    textColor: "{colors.on-dark}"
    typography: "{typography.subhead}"
  plan-price:
    textColor: "{colors.on-dark}"
    typography: "{typography.plan-price}"
  plan-flag:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-on}"
    rounded: "{rounded.none}"
    padding: "0.4em 0.8em"
  modal:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "{spacing.modal-pad}"
---

# Design System: Rosto Leve

## Overview

**Creative North Star: "The Aesthetics House Cover Story"**

Rosto Leve reads like an editorial house's cover feature, not a niche depuffing landing page. It refuses the category default — soft light background, emoji, identical cards, a shouting guarantee seal — and replaces it with cinematic proof and editorial typography. The whole surface is warm monochrome: espresso-near-black grounds carry full-bleed grayscaled media, ivory grounds carry the reading, and photogravure grays sit between. A single restrained oxblood is the only chromatic voice, and it is spent only on the "live element."

The world is recognizable with the content stripped out: the alternation of dark-cinema and ivory-editorial grounds, 1px hairlines as the only divider, high-contrast Didot display (Bodoni Moda) set against clean grotesque body (Archivo), and uppercase tracked micro-labels used as photo folios and captions. Tone follows the brand voice: mature, elegant, confident, unhurried — persuasion without hype. A deliberate night→day→night tonal progression runs down the scroll (dark hero → ivory sections → dark close).

The sales page (`vendas.html`) is built as a direct-response scroll on top of this same world: hero → product/mockup → how-it-works steps → mechanism → before/after proof → content preview → testimonials → bonuses → two-plan pricing → FAQ → close, with a mobile sticky CTA and an upgrade modal. Every direct-response device inherits the incumbent materials — square surfaces, hairlines, grayscaled media, oxblood as the single live/featured signal — so the DR layer never reads as a different site. Density is generous and unhurried: large section padding, long measures, and text allowed to breathe. Motion is quiet — content rests visible and reveals gently on scroll, degrading to fully visible without JS and honoring reduced-motion.

**Key Characteristics:**
- Warm monochrome: espresso grounds + ivory grounds + photogravure grays.
- One accent (oxblood) reserved for the live/featured element; never decorative.
- Bodoni Moda display against Archivo body; uppercase tracked folios.
- 1px hairlines as the sole divider; flat surfaces, square corners.
- Full-bleed grayscaled media; editorial spreads across the gutter.
- Square by default, with two deliberate rounded exceptions: the comparator knob and the phone-frame product mockup.

## Colors

A warm monochrome built from espresso and ivory, with a single oxblood accent held in reserve.

### Primary
- **Oxblood** (#7c2b2b): The only chromatic voice — the "live element." Reserved for the primary button fill, the before/after slider handle and knob, the FAQ toggle glyph, active quiz options, numbered-module/step folios, accent labels on light grounds, the featured-plan border and its flag chip, and the upgrade modal's border. Its rarity is the message.
- **Oxblood Warm** (#9a3b34): The lighter oxblood for hover states, and the accent substitute on dark grounds (progress fills, checklist and plan-list icons, step numerals on dark, testimonial stars, the scroll-cue fade, focus ring) where full oxblood loses contrast.
- **Oxblood Tint** (#f7efe9): The near-white ink used on top of oxblood fills (button labels, plan-flag text, knob glyph, selection text).

### Neutral
- **Espresso** (#131110): The near-black cinematic ground — page default background and dark sections.
- **Espresso Secondary** (#1c1917): Secondary dark ground and elevated dark surfaces (the offer card, plan cards, testimonial cards, the upgrade modal box, the "night" closing section).
- **Graphite** (#2a2724): Elevated dark surface / media placeholder fill behind figures, the comparator, and the device screen.
- **Device Black** (#0a0908): The chassis black — deeper than espresso — used only for the phone-mockup body, its notch, and the caption-gradient/modal-scrim base (`rgba(10,9,8,…)`). It is the "hardware" black, distinct from the espresso ground.
- **Ivory** (#f4f0ea): The editorial reading ground and the text color on dark.
- **Paper** (#fbf9f5): The lifted light surface (paper sections, bonus tiles, preview cards).
- **Paper Deep** (#efe9e0): A deeper ivory block for tonal layering on light (preview media wells).
- **Ink-on-Dark Soft** (#c0b8ae) / **Faint** (#9a9289): Secondary and tertiary text on dark grounds, tuned to hold AA.
- **Ink-on-Light Soft** (#544d46) / **Faint** (#6b635a): Secondary and tertiary text on light grounds.
- **Hairlines**: Ivory at 16%/28% on dark (`line-dark`, `line-dark-2`); espresso at 14%/26% on light (`line-light`, `line-light-2`). These are the dividers of the whole system.

### Named Rules
**The Live Element Rule.** Oxblood marks exactly one class of thing per surface — the element that is alive under the reader's hand or eye, or the one option the page wants chosen: primary action, slider handle/knob, active quiz choice, live folio, the *featured* plan (its oxblood border and flag), and the upgrade modal (its oxblood border, since it is the live decision on screen). If a surface has oxblood in two unrelated decorative places, one of them is wrong.

**The Dark-Ground Fallback Rule.** On espresso grounds, full oxblood (#7c2b2b) fails AA for small text, so small accents fall back to Oxblood Warm (#9a3b34) or neutral soft ink (step numerals on dark, plan-list check icons, testimonial stars). Oxblood folios (the `.idx`) only render in oxblood on light grounds, where they pass.

## Typography

**Display Font:** Bodoni Moda (with Didot, Times New Roman, serif) — loaded from Google Fonts with optical sizing.
**Body Font:** Archivo (with Helvetica Neue, Arial, sans-serif) — loaded from Google Fonts.

**Character:** A high-contrast Didot-style serif carries every headline and numeral with editorial authority and tight tracking; a clean, quiet grotesque carries all reading and UI. The pairing is a magazine masthead over a clean caption grid.

### Hierarchy
- **Display** (500, `clamp(2.6rem, 7.2vw, 6rem)`, line-height 1.0, tracking -0.02em): The cover headline — hero only. Set with balanced wrapping; the second line often italic.
- **Headline** (500, `clamp(2.1rem, 5vw, 4rem)`, line-height 1.04): Section openers (`.d-1`).
- **Title** (500, `clamp(1.7rem, 3.4vw, 2.7rem)`, and `clamp(1.35rem, 2.2vw, 1.85rem)` for `.d-3`): Sub-section titles and statements.
- **Subhead** (500, `clamp(1.1rem, 1.7vw, 1.5rem)`): The Bodoni component-heading family — plan name (1.5rem), step / preview-card / FAQ / moment / module headings, the testimonial quote (1.12rem), the device caption title (1.05rem), and the modal heading (`clamp(1.5rem, 3vw, 2rem)` at the top of this range). Small serif headings that name a card rather than open a section.
- **Numeral (Large)** (500, `clamp(2.4rem, 5vw, 4.2rem)`, line-height 0.8): The large Bodoni sequence numeral on phase rows.
- **Numeral (Medium)** (500, `clamp(2rem, 3.2vw, 2.8rem)`, line-height 0.9): The step-row sequence numeral in the "how it works" band. (Module folios stay small at 1.4rem, inline with their row.)
- **Price** (500, `clamp(3.2rem, 7vw, 5rem)`, line-height 0.9): The big offer figure. **Plan Price** (500, `clamp(2.6rem, 5vw, 3.6rem)`) is its smaller sibling inside the two-plan cards.
- **Lede** (400, `clamp(1.12rem, 1.7vw, 1.4rem)`, line-height 1.5, max 60ch): Supporting paragraph under a headline, in soft ink.
- **Body** (400, `clamp(16px, 1.05vw, 17.5px)`, line-height 1.62, measure ~66ch): Reading text; paragraph spacing 1.1em.
- **Label / Folio** (600, 0.76rem, tracking 0.2em, uppercase): The `.credit` micro-label and the plan flag / plan-list micro-copy — photo credits, figure numbers, ranked captions, question counters, bonus folios ("Bônus 01"), "Mais escolhido."

### Named Rules
**The Folio, Not Eyebrow Rule.** Uppercase tracked micro-labels are photo folios and captions (`Fig. 01`, `Pergunta 01`, `Prévia`, `Bônus 01`) — never a kicker/eyebrow stacked above a headline as a decorative label. The plan flag ("Mais escolhido") is a badge attached to its plan card, not an eyebrow over a title. Caption descriptions drop to normal case for legibility (`.cap`).

**The Serif Numeral Rule.** Sequence numbers that are real sequence (phase 1–4, step 1–3, module 01–n, the price figure, the plan price) are set in the Bodoni display at large size; they are the system's ornament instead of any invented badge.

## Layout

A centered editorial column on a warm ground. The content width is `min(100% - gutter*2, 1280px)` (`.wrap`) or a 760px narrow measure (`.narrow`); the gutter is fluid `clamp(20px, 5vw, 72px)`. Section rhythm is `clamp(64px, 10vw, 150px)` of vertical padding, giving the unhurried editorial density.

The signature layout is the **spread**: a two-column grid (`1fr 1fr`, gap `clamp(28px, 5vw, 80px)`) that runs a grayscaled figure (or the phone mockup) against a headline/text block across the gutter, with order-swap variants for text-left and mobile-flip. Numbered lists (phases, modules) are `auto 1fr auto` / `auto 1fr` grids separated by hairlines. The direct-response bands add three multi-cell grids divided by hairlines or thin gaps: **steps** (three cells, `repeat(3,1fr)`, hairline-separated), **preview** (three cells, 16px gap), **testimonials** (three cells, 16px gap), and **plans** (two cells, 18px gap, stretch-aligned). The moments and bonus grids remain two-up cells divided only by hairlines.

Grounds alternate to build the night→day→night progression: dark hero → light product → paper how-it-works → dark mechanism → paper proof → light preview → dark testimonials → paper bonus → dark offer → light FAQ → dark close.

Breakpoints: 820px (spread and testimonials collapse to one column), 760px (preview and plans collapse to one column), 720px (two-columns collapse; hero credit hides; sticky CTA appears), 680px (steps go single-column), 640px (numbered lists and card grids go single-column).

## Elevation & Depth

Essentially flat. Depth comes from tonal layering (espresso vs. ink-2 vs. graphite vs. device-black on dark; ivory vs. paper vs. paper-deep on light) and from hairlines, not from shadows. There is exactly one shadow token, spent on lifted objects that are meant to read as physical: the comparator knob and the phone-mockup chassis.

### Shadow Vocabulary
- **Soft Lift** (`box-shadow: 0 24px 60px -28px rgba(19,17,16,.45)`): Used under the comparator knob — the one round, grabbable object — and under the device mockup, so the phone reads as a held object. Not a general card shadow.

### Named Rules
**The Flat-Ground Rule.** Surfaces are flat. Separation is a 1px hairline or a tonal shift, never a drop shadow. The single Soft Lift belongs only to physical objects (the draggable knob, the phone mockup); do not extend it to cards, plans, buttons, or sections.

## Shapes

Square by default: buttons, cards, plans, offer blocks, quiz options, tags, the plan flag, the modal box, and the synthetic badge all have `border-radius: 0`. There are exactly two rounded exceptions, both representing physical objects: the comparator knob (`50%`, 52px) and the **phone-frame product mockup** — a `40px` chassis with a `30px` screen well and a rounded notch. These are sanctioned because they depict real hardware and are legible as such; they are not a license to round UI chrome. Borders are 1px hairlines in the ground-appropriate ink; the featured plan and the modal swap their hairline for a 1px oxblood border as the live/featured signal. The recurring silhouette is the hairline-ruled row and the hard-edged rectangular figure frame (aspect 4/5 for portraits, 3/4 for the comparator, 9/19 for the device, 4/3 for preview media).

## Components

For each component, lead with a short character line, then specify shape, color assignment, states, and any distinctive behavior.

### Buttons
- **Shape:** Hard rectangle (`border-radius: 0`), 1px border matching fill, inline-flex with a trailing single-stroke arrow icon that slides 5px on hover.
- **Primary (live element):** Oxblood fill (#7c2b2b) with tint label (#f7efe9); padding `1.05em 1.8em` (`--lg`: `1.2em 2.2em`). Hover shifts to Oxblood Warm (#9a3b34); active nudges down 1px.
- **Light:** Ivory fill on dark grounds; hover to pure white. For the secondary action beside a primary on the hero.
- **Ghost:** Transparent with a hairline border; on hover it inverts to a solid ink/ivory fill. Ground-aware (ivory border on dark, ink border on light). Used for the *Essencial* plan's lower-commitment action.
- **Block (`--block`):** Full-width variant used inside plan cards and the modal.
- **Transitions:** background/color 0.4s and transform 0.3s on the shared ease `cubic-bezier(.22,1,.36,1)`.

### Quiz Options
- **Style:** Full-width hard rectangle with a 1px `line-dark-2` border, ivory text, a hollow circle marker at the trailing edge.
- **Hover:** Fills graphite, border brightens to ivory, and text nudges 0.3em to the right (`padding-left`).
- **Selected** (`aria-pressed="true"`): Oxblood fill with tint text and a filled tint marker — the live element again.

### Cards / Containers
- **Corner Style:** Square (0).
- **Background:** Paper (#fbf9f5) tiles for bonus and preview cards; ink-2 (#1c1917) for the offer card, plans, testimonials, and the modal.
- **Shadow Strategy:** None — see Elevation. Separation is a 1px hairline grid (bonus tiles are cells in a hairline lattice; offer rows are hairline-ruled; steps are hairline-separated cells).
- **Border:** 1px ground-appropriate hairline; oxblood for the featured plan and the modal.
- **Internal Padding:** `clamp(22px, 2.8vw, 34px)` for tiles; `clamp(28px, 4vw, 56px)` for the offer; `clamp(24px, 3vw, 38px)` for plans; `clamp(28px, 4vw, 44px)` for the modal.

### Navigation
- **Style:** Transparent bar floating over the hero (absolute), or a sticky blurred espresso bar (`rgba(19,17,16,.82)` + backdrop blur) with a bottom hairline.
- **Wordmark:** Archivo 700, uppercase, tracking 0.34em, ivory, with an oxblood-warm period (`.dot`).
- **Mobile:** A fixed bottom sticky CTA bar appears under 720px with the price and primary action.

### Before/After Comparator (signature)
The interaction that defines the world. A 3/4 rectangle over graphite; before/after images clipped by `clip-path` at `--pos`. A 2px oxblood-warm handle spans full height; a 52px oxblood circular knob (a rounded exception, the shared Soft Lift) carries a single-stroke move icon. A visually-hidden range input provides keyboard/pointer control and `:focus-within` draws an ivory focus ring on the knob. Corner tags (`Antes` / `Depois`) sit in translucent espresso chips.

### Product Mockup / Device (signature)
A phone-frame that plays the ritual video. Device-black chassis (#0a0908) with a `40px` radius and `11px` padding, carrying the shared Soft Lift so it reads as held hardware. Inside, a `30px`-radius screen well over graphite holds a grayscaled looping video (`object-fit: cover`), a rounded top notch (`device__notch`), and a bottom caption cap (`device__cap`) whose gradient rises from device-black to carry a Bodoni title (1.05rem) over a soft-ink subline. The only rounded surface besides the knob; sanctioned because it depicts real hardware.

### How-It-Works Steps
Three hairline-separated cells (`repeat(3,1fr)`, hairlines between cells and above). Each cell leads with a large Bodoni step numeral (`clamp(2rem, 3.2vw, 2.8rem)`) in oxblood — Oxblood Warm on dark grounds — over a Bodoni subhead and soft-ink body. Real sequence, so the numeral is legitimate ornament.

### Content Preview Cards
Three paper cards (`repeat(3,1fr)`, 16px gap) with a hairline border. Each has a `4/3` media well (`pv__media`) over paper-deep holding either a grayscaled video or a **CSS-drawn document mock** (`pv__doc`: a white sheet with a solid ink header bar `kh` and hairline text lines `kl`, one shortened) — a placeholder standing in for the PDF deliverables — then a Bodoni subhead and soft-ink caption in the body.

### Testimonials
Three ink-2 cards (`repeat(3,1fr)`, 16px gap) with a hairline border, stacked as star row → quote → attribution. Stars (`tst__stars`) render in Oxblood Warm; the quote (`tst__q`) is a 1.12rem Bodoni subhead; attribution (`tst__by`) pairs a graphite avatar circle with soft-ink text. Content is currently placeholder ("Depoimento de exemplo") flagged with a `.synthetic` note.

### Two-Plan Pricing (signature)
Two stretch-aligned ink-2 cards (`1fr 1fr`, 18px gap). **Essencial** (R$27) carries a hairline border and a ghost button. **Completo** (R$37, `.plan--feat`) swaps the hairline for a 1px oxblood border and leads with an oxblood **plan flag** ("Mais escolhido") and a primary button — the featured card is the live choice. Each card stacks: flag (featured only) → Bodoni plan name (1.5rem) → soft-ink description → plan price (Bodoni `clamp(2.6rem, 5vw, 3.6rem)` figure with serif currency and soft-ink per-unit) → strikethrough old-price line → a check/x feature list (`plan__list`; included rows in Oxblood-Warm check icons, excluded `.off` rows in faint ink with an x) → a bottom-pinned block button.

### Upgrade Modal
A fixed centered dialog (`rgba(10,9,8,.74)` scrim + 6px backdrop blur) shown by toggling `.on`. The box is ink-2 with a 1px **oxblood** border (the live decision), max 470px, with a `pop` entrance (`translateY(14px)`→0, 0.4s ease) that is disabled under `prefers-reduced-motion`. Holds a Bodoni heading (`clamp(1.5rem, 3vw, 2rem)`) with an oxblood-warm inline emphasis, a soft-ink paragraph, a stacked actions block (`modal__actions`: a primary block button plus a low-emphasis underlined `modal__decline`), and a top-right close glyph (`modal__close`).

### Numbered Phase / Module Lists (signature)
Hairline-ruled rows with a large Bodoni numeral. Phases use a plain serif number (`clamp(2.4rem, 5vw, 4.2rem)`) and an oxblood duration tag; modules use `counter(mod, decimal-leading-zero)` in oxblood at 1.4rem inline. Numbering is legitimate here because it is real sequence.

### FAQ Accordion
Native `<details>` with the marker suppressed. Hairline top/bottom per item; a Bodoni question; an oxblood plus/minus glyph (`.pm`) whose vertical stroke collapses on open.

## Do's and Don'ts

### Do:
- **Do** spend oxblood only on the live/featured element (primary action, slider handle/knob, active choice, live folio, featured plan, upgrade modal), keeping it rare.
- **Do** alternate espresso and ivory grounds to carry the night→day→night scroll progression, including across the direct-response bands.
- **Do** divide with 1px hairlines and tonal shifts; keep surfaces flat and corners square (`border-radius: 0`).
- **Do** set every headline and real sequence numeral (phase, step, module, price, plan price) in Bodoni Moda display, and all reading/UI in Archivo.
- **Do** use uppercase tracked micro-labels as photo folios/captions and card badges, and grayscale all photographic and video media (including the device and preview videos).
- **Do** treat the phone mockup and comparator knob as the only rounded, Soft-Lifted objects, because they depict physical things.
- **Do** let content rest visible and reveal gently on scroll; honor `prefers-reduced-motion` (including the modal `pop`) and keep AA contrast (fall back to Oxblood Warm / soft ink for small accents on dark).

### Don't:
- **Don't** stack an uppercase micro-label as a kicker/eyebrow above a headline — folios are captions and card badges, not eyebrows.
- **Don't** add drop shadows to cards, plans, buttons, or sections; the single Soft Lift belongs to the knob and the phone mockup alone.
- **Don't** introduce a second accent hue or use oxblood decoratively — one voice, spent on the live/featured element only.
- **Don't** use gradients as decorative surface fills; gradients are permitted only as functional media scrims for legibility, the device caption cap, and the single scroll-cue hairline fade.
- **Don't** round corners except the comparator knob and the device frame/notch/screen — no rounded buttons, cards, plans, or modal.
- **Don't** ship the placeholder testimonials, example before/after, or illustrative bonus values as if real — they carry `.synthetic` notes and must be replaced before running ads.
