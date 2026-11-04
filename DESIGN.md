---
name: UnitLabs
description: One red ink on cream paper, with a dot-matrix mark. A plain-spoken landing page for an independent onchain product lab.
colors:
  signal-red: "#E02329"
  cream-paper: "#EDEBD6"
typography:
  display:
    fontFamily: "Cabinet Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(40px, min(7vw, 11svh), 96px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cabinet Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(36px, 5.5vw, 80px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  body-large:
    fontFamily: "Cabinet Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(24px, 2vw, 28px)"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Cabinet Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.45
  closing:
    fontFamily: "Cabinet Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(28px, 2.6vw, 40px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  brand:
    fontFamily: "Cabinet Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
  label-ui:
    fontFamily: "Cabinet Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 800
    lineHeight: 1.45
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  dot: "50%"
spacing:
  gap-sm: "12px"
  bar: "22px"
  gutter: "clamp(20px, 4vw, 56px)"
  hero-block: "clamp(24px, 5svh, 72px)"
  band-block: "clamp(20px, 3.5svh, 36px)"
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
---

# Design System: UnitLabs

## Overview

**Creative North Star: "The Dot-Matrix Manifesto"**

One ink, one typeface, one grid. The page reads like a statement printed in red on cream
paper. The dot grid lives in the mark alone: the wordmark and monogram are grids of circles, and
the type around them is a narrow editorial grotesk (Cabinet Grotesk), so the mark is the one textured thing on
the page. Nothing on
the page is decorative. Depth, hierarchy and emphasis all come from size, weight, case and 1px
rules, never from a second colour.

The voice is plain-spoken. Sentences are short and declarative, set large, with generous
vertical space between them. The system says as little as possible and lets the ink do the
work. Interaction follows the same logic: things look printed, then flip like a switch on
hover: an outline becomes solid. Nothing fades in, and nothing scrolls: the whole site is one
screen.

The user has rejected the crypto-site defaults outright: no glassmorphism or gradients, no dark
mode, no stock imagery or 3D, and no colour beyond the two inks.

**Key Characteristics:**
- Two colours only: Signal Red on Cream Paper. No greys, tints or opacity tricks.
- One typeface (Cabinet Grotesk) carrying every role from 19px labels to 96px display.
- Structure drawn with 1px Signal Red rules that span the full viewport.
- Square corners everywhere except the dots themselves, which are perfect circles.
- One fixed screen with no scrolling; hover transitions are the only motion.

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

**The Large Print Rule.** The pair measures 3.93:1, which passes WCAG AA only for large text.
So the palette stays and the type does the work: anything meant to be read is set at WCAG
"large" size, 24px or more at a regular weight, or 19px or more in bold (18.66px is the
threshold; with Cabinet, bold means 800). No readable text goes below that, at any width.

## Typography

**Display Font:** Cabinet Grotesk (Fontshare), self-hosted from `app/fonts/` through
`next/font/local` in weights 500 and 800, with a metric-adjusted fallback and ui-sans-serif,
system-ui behind it
**Body Font:** Cabinet Grotesk (same family)
**Label Font:** Cabinet Grotesk 800, uppercase, tracked

**Character:** Cabinet Grotesk is a narrow editorial grotesk, chosen by the user on 4 November
2026 from a side-by-side sheet (it replaced General Sans, which had replaced the dot-matrix
Array earlier that day). It runs light: its 400 is too thin for red on cream and its 700 reads
as medium, so the page uses 500 for running text and 800 as the true bold. Because it is narrow,
the display size goes up to 96px and headlines wrap to four lines on desktop. Leave font
smoothing at the browser default: `antialiased` thins the strokes on macOS and makes the red
read light.

### Hierarchy
- **Display** (800, clamp(40px, min(7vw, 11svh), 96px), line-height 0.95, tracking -0.02em): the hero
  headline only.
- **Headline** (800, clamp(36px, 5.5vw, 80px), line-height 0.98, tracking -0.02em): the 404
  statement only.
- **Closing** (800, clamp(28px, 2.6vw, 40px), line-height 1.05, tracking -0.015em): the contact
  line in the bottom band. Deliberately a second voice, far below the display size, so the
  screen has one headline.
- **Body large** (500, clamp(24px, 2vw, 28px), line-height 1.3): the hero description,
  capped at 32ch.
- **Body** (500, 17px, line-height 1.45): the inherited default; no visible copy uses it.
- **Brand** (800, 24px, line-height 1, tracking -0.01em): the name in the nav lockup only.
- **Label UI** (800, 19px, tracking 0.04em, uppercase): the bracket buttons. One shared rule in `globals.css`.

All sizes are authored in rem (px equivalents above), so a reader's browser font-size setting
scales the page.

### Named Rules
**The One Face Rule.** Cabinet Grotesk only, in two weights (500, 800). Hierarchy is carried by size, weight,
case and tracking, never by colour and never by a second family, including monospace for
numbers.

**The Short Line Rule.** Display and headline copy is one sentence. Measures are capped
(headline 16ch, body large 34ch) so lines stay short enough to read as printed statements.

## Layout

A single centred column, 1240px maximum, with a fluid side gutter (clamp(20px, 4vw, 56px)).
The site is one screen with no scrolling, built from real landmarks: `header` (brand) and `main`
(hero, then the contact band). There is no footer. `.site` is a grid (`auto 1fr`) with a minimum height of 100svh; `main` is
`1fr auto`, so the hero takes the middle and centres its content, and the contact band sits on
the bottom edge under a full-width 1px Signal Red rule, where the footer used to be. svh is the viewport with the mobile toolbar showing, so nothing
lands under it. The display size is capped by height (11svh) as well as width, so the headline
always fits.

The hero is a single column: the display headline sets in two lines on desktop and tablet ("We
build products for / the onchain world.") and three on a 375px phone, and the description sits
directly under it on the same left edge, 32ch max, so it runs three even lines. The headline,
description and contact line all share one left edge. clamp(24px, 5svh, 72px) above and below. The
contact band is a wrapping flex row: closing line left, buttons right, clamp(20px, 3.5svh, 36px)
of padding. The nav bar carries 22px.

**Never clip:** the height is a minimum, not a fixed value, and nothing hides overflow. At every
common size (375×667 up to 1920×1080) the page is exactly one screen; when it can't be (a
landscape phone, or a reader's large text setting) it grows and scrolls instead of cutting off
the contact buttons.

There is one width breakpoint at 760px: the hero grid collapses to a single column and the
contact band stacks the closing line above the buttons. Everything else
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
- **Text:** Label UI (800, 19px, tracking 0.04em, uppercase), wrapped in literal brackets
  rendered by CSS: `[ X ]`, `[ GitHub ]`, `[ hello@unitlabs.xyz ]`. The brackets carry empty
  alt text (`content: "[ " / ""`) so screen readers skip them.
- **Email button:** shows the address itself in its real lowercase (tracking 0.01em), so a
  visitor with no mail app can still read and copy it.
- **Accessible names:** X and GitHub keep their short visible labels; visually hidden text
  makes them "UnitLabs on X (opens in a new tab)" and the same for GitHub.
- **Hover:** background becomes Signal Red, text becomes Cream Paper, and the button rises
  2px; 0.2s transitions. No underline.
- **Active:** rise returns to 0.
- **Focus:** 2px Signal Red outline offset 4px (global link focus).
- **Layout:** buttons sit in a flex row with 12px gaps and wrap on narrow screens.

### Header
- **Style:** a 22px-padded bar holding only the brand lockup: the U monogram (26px wide) and the
  name "UnitLabs" in Cabinet Grotesk 800 at 24px with line-height 1, 12px apart. It is a
  `header`, not a `nav`: with one link home there is nothing to navigate. The nav "Contact" link
  was removed on 4 November 2026 because the email button sits on the same screen. No border on
  the bar itself; the hero below starts without a rule and leads with the headline.
- **Optical alignment:** the U's tail hangs one dot row below its bowl, so the name is lifted
  1.5px above the box centre to sit on the bowl's centre. Re-measure if either size or the face changes.
- **Brand hover:** none. The lockup is a home link but does not underline.
- **Mobile:** unchanged; the bar is already minimal.

### Wordmark and monogram (signature)
- **Source:** circle coordinates in `lib/dots.ts` (318 dots for UNIT LABS, 48 for the U),
  extracted from the Figma PNG exports; also flattened to `public/wordmark.svg` and
  `public/mark.svg`.
- **Rendering:** the monogram ships as `public/mark.svg`, drawn from the same dot centres but
  with r 15 instead of 13.6 so the dots overlap and the mark reads solid at nav size; the
  wordmark data keeps the kissing-dot radius. The full wordmark is not on the page today and
  lives only in the social preview image and the data file.
- **Sizes:** nav monogram 26px; app icon is the lowercase rounded-square
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
- **Do** carry hierarchy with Cabinet Grotesk's size, weight, case and tracking; two weights (500,
  800) are enough.
- **Do** keep copy plain-spoken: one sentence per headline, capped measures, no adjectives for
  their own sake.
- **Do** keep motion to hover: a 0.2s inversion on buttons and an underline on links. Hover
  styles sit inside `@media (hover: hover)` so a tap never sticks.

### Don't:
- **Don't** use glassmorphism, gradients, glows, blur panels or gradient text.
- **Don't** add a dark mode; Cream Paper is the only background.
- **Don't** use stock imagery, photography, illustrations or 3D shapes.
- **Don't** introduce a third colour, a grey, a tint of red, or opacity used as a tone.
- **Don't** add entrance, scroll or loading animation, or make the page scroll; it is one
  static screen by decision.
- **Don't** round corners, add cards or background panels, or reach for a second typeface.
