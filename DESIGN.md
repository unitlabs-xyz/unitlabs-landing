---
name: UnitLabs
description: One red ink on cream paper, printed in dots. A plain-spoken landing page for an independent onchain product lab.
colors:
  signal-red: "#E02329"
  cream-paper: "#EDEBD6"
typography:
  display:
    fontFamily: "Array, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(40px, 6vw, 84px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Array, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(34px, 5vw, 72px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  body-large:
    fontFamily: "Array, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.6vw, 22px)"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Array, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.45
  label-ui:
    fontFamily: "Array, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: "0.06em"
rounded:
  none: "0px"
  dot: "50%"
spacing:
  gap-sm: "12px"
  bar: "22px"
  gutter: "clamp(20px, 4vw, 56px)"
  section: "clamp(56px, 9vw, 120px)"
components:
  button-bracket:
    backgroundColor: "transparent"
    textColor: "{colors.signal-red}"
    typography: "{typography.label-ui}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  button-bracket-hover:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.cream-paper}"
    typography: "{typography.label-ui}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  nav-link:
    textColor: "{colors.signal-red}"
    typography: "{typography.label-ui}"
---

# Design System: UnitLabs

## Overview

**Creative North Star: "The Dot-Matrix Manifesto"**

One ink, one typeface, one grid. The page reads like a statement printed in red dots on
cream paper: the wordmark is literally a grid of circles, and the Array typeface renders every
headline in the same dotted texture, so the type and the logo are the same material. Nothing on
the page is decorative. Depth, hierarchy and emphasis all come from size, weight, case and 1px
rules, never from a second colour.

The voice is plain-spoken. Sentences are short and declarative, set large, with generous
vertical space between them. The system says as little as possible and lets the ink do the
work. Interaction follows the same logic: things look printed, then flip like a switch on
hover: an outline becomes solid. Nothing fades in, nothing scrolls into view.

The user has rejected the crypto-site defaults outright: no glassmorphism or gradients, no dark
mode, no stock imagery or 3D, and no colour beyond the two inks.

**Key Characteristics:**
- Two colours only: Signal Red on Cream Paper. No greys, tints or opacity tricks.
- One typeface (Array) carrying every role from 14px labels to 84px display.
- Structure drawn with 1px Signal Red rules that span the full viewport.
- Square corners everywhere except the dots themselves, which are perfect circles.
- Static page: hover transitions are the only motion.

## Colors

A single red voice on warm paper.

### Primary
- **Signal Red** (#E02329): the only ink. Every character, rule, border, dot and button outline
  is this colour. On hover it becomes a fill and the paper colour becomes the text.

### Neutral
- **Cream Paper** (#EDEBD6): the only background. It is also the text colour inside an
  inverted (hovered) button. It is never tinted, darkened or replaced by a panel.

### Named Rules
**The One Ink Rule.** Everything is Signal Red on Cream Paper. No third colour, no grey, no
tint of red, and no opacity used to fake a secondary tone. Hierarchy is the type's job.

**The Inversion Rule.** The only permitted colour change is a full swap: red on cream becomes
cream on red for a hovered control. Partial fills and mixed states do not exist.

Contrast note: the pair measures about 3.9:1, which passes WCAG AA for large text and fails it
for body-size text. The user kept the palette knowingly (see PRODUCT.md); keep body copy short
and at 17px or larger.

## Typography

**Display Font:** Array (Fontshare; weights 400, 600, 700) with ui-sans-serif, system-ui
fallback
**Body Font:** Array (same family)
**Label Font:** Array 600, uppercase, tracked

**Character:** Array is a geometric display face built from a dot grid, so at large sizes it
reads as the same material as the wordmark. It is wide and loud; headlines wrap to three or four
lines on desktop and that is expected. At body size the dots close up into a plain,
slightly technical sans. Leave font smoothing at the browser default: `antialiased` thins the
dots on macOS and makes the red read light.

### Hierarchy
- **Display** (700, clamp(40px, 6vw, 84px), line-height 1, tracking -0.02em): the hero
  headline only.
- **Headline** (700, clamp(34px, 5vw, 72px), line-height 1, tracking -0.02em): the closing
  statement above the buttons; capped at 16ch measure.
- **Body large** (400, clamp(18px, 1.6vw, 22px), line-height 1.4): the hero description,
  capped at 34ch.
- **Body** (400, 17px, line-height 1.45): everything else.
- **Label UI** (600, 14px, tracking 0.06em, uppercase): nav link, bracket buttons, footer
  text.

### Named Rules
**The One Face Rule.** Array only, in three weights. Hierarchy is carried by size, weight,
case and tracking, never by colour and never by a second family, including monospace for
numbers.

**The Short Line Rule.** Display and headline copy is one sentence. Measures are capped
(headline 16ch, body large 34ch) so lines stay short enough to read as printed statements.

## Layout

A single centred column, 1240px maximum, with a fluid side gutter (clamp(20px, 4vw, 56px)).
The site is exactly two viewport-tall pages. Page one holds the nav bar at the top and the hero
centred in the remaining height; page two holds the contact section centred in the remaining
height with the footer bar pinned to its bottom edge. A 1px Signal Red rule runs edge to edge
between the pages and above the footer, while the content stays within the column. Scrolling
snaps to each page with proximity snapping, so a normal scroll settles on the next page.

Vertical rhythm is generous: sections carry clamp(56px, 9vw, 120px) of padding top and bottom;
the nav and footer bars carry 22px. The hero is a two-column grid (1.5fr / 1fr) that places
the display headline left and the description right, aligned to the bottom edge. That grid is
the whole hero.

There is one breakpoint at 760px: the hero grid collapses to a single column. Everything else
is fluid through clamp().

### Named Rules
**The Ruled Sheet Rule.** Structure is drawn, not implied. Bands are separated by 1px Signal
Red rules; there are no background panels, cards or containers to group content.

## Elevation & Depth

The page is flat today. There are no shadows, gradients, blurs or tinted surfaces; depth is
conveyed by rules and by type scale alone. The user has left this open rather than making it a
rule: future work may introduce depth if it earns its place, but it must do so within the One
Ink Rule, which excludes tinted panels and coloured shadows.

## Shapes

Square print. Every box, button and rule has 0px radius and a 1px Signal Red border where it
has a border at all. The only curves are the dots: the wordmark and monogram are perfect
circles (r 13.6 on a 22px grid pitch, so adjacent dots just kiss). Nothing is clipped, masked
or rotated.

### Named Rules
**The Square Print Rule.** Corners are square. Circles are reserved for the dot grid; no pill
buttons, rounded cards or soft edges.

## Components

### Buttons
- **Character:** printed brackets that flip to solid on hover.
- **Shape:** square (0px), 1px Signal Red border, 12px 20px padding.
- **Text:** Label UI (600, 14px, tracking 0.06em, uppercase), wrapped in literal brackets
  rendered by CSS: `[ X ]`, `[ GitHub ]`, `[ Contact ]`.
- **Hover:** background becomes Signal Red, text becomes Cream Paper, and the button rises
  2px; 0.2s transitions. No underline.
- **Active:** rise returns to 0.
- **Focus:** 2px Signal Red outline offset 4px (global link focus).
- **Layout:** buttons sit in a flex row with 12px gaps and wrap on narrow screens.

### Navigation
- **Style:** a 22px-padded bar. At left, the brand lockup: the U monogram (26px wide) and the
  name "UnitLabs" in Array 700 at 22px with line-height 1, 12px apart. At right, a single
  uppercase Label UI link. No border on the bar itself; the hero below starts without a rule and
  leads with the headline.
- **Optical alignment:** the U's tail hangs one dot row below its bowl, so the name is lifted
  1.5px above the box centre to sit on the bowl's centre. Re-measure if either size changes.
- **Brand hover:** none. The lockup is a home link but does not underline.
- **Hover:** underline with 0.18em offset (global link hover). No colour change.
- **Mobile:** unchanged; the bar is already minimal.

### Footer bar
- **Style:** 22px bar above a full-width rule; copyright in Label UI on the left,
  20px monogram on the right.

### Wordmark and monogram (signature)
- **Source:** circle coordinates in `lib/dots.ts` (318 dots for UNIT LABS, 48 for the U),
  extracted from the Figma PNG exports; also flattened to `public/wordmark.svg` and
  `public/mark.svg`.
- **Rendering:** the monogram ships as `public/mark.svg`, drawn from the same dot centres but
  with r 15 instead of 13.6 so the dots overlap and the mark reads solid at nav size; the
  wordmark data keeps the kissing-dot radius. The full wordmark is not on the page today and
  lives only in the social preview image and the data file.
- **Sizes:** nav monogram 26px; footer monogram 22px; app icon is the lowercase rounded-square
  variant from Frame 5.

### Named Rules
**The Switch Rule.** Hover is a state flip, not a fade. Outline becomes solid. Durations stay at or under 0.45s with the standard ease
(cubic-bezier(0.22, 1, 0.36, 1)); nothing scales up, bounces or glows.

## Do's and Don'ts

### Do:
- **Do** set every colour from the two tokens: Signal Red (#E02329) on Cream Paper (#EDEBD6),
  inverted only for a hovered control.
- **Do** draw structure with 1px Signal Red rules that span the full viewport; they are the
  only structural lines.
- **Do** render the wordmark and monogram from the circle data in `lib/dots.ts` as SVG so
  they stay crisp; never rasterise or re-trace them.
- **Do** carry hierarchy with Array's size, weight, case and tracking; three weights (400,
  600, 700) are enough.
- **Do** keep copy plain-spoken: one sentence per headline, capped measures, no adjectives for
  their own sake.
- **Do** keep hover as the only motion: a 0.2s inversion on buttons and an underline on links.

### Don't:
- **Don't** use glassmorphism, gradients, glows, blur panels or gradient text.
- **Don't** add a dark mode; Cream Paper is the only background.
- **Don't** use stock imagery, photography, illustrations or 3D shapes.
- **Don't** introduce a third colour, a grey, a tint of red, or opacity used as a tone.
- **Don't** add entrance, scroll or loading animation; the page is static by decision.
- **Don't** round corners, add cards or background panels, or reach for a second typeface.
