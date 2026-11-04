# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: partners and collaborators.** Protocols, founders, and investors deciding whether to
work with UnitLabs. They usually arrive from a UnitLabs product (Mercury) or a referral, want to
know who is behind it and what the lab builds, and the successful outcome is a contact email.
Confirmed by the user on 24 September 2026.

Crypto end-users and hiring candidates are not confirmed audiences. Do not design for them.

## Product Purpose

The UnitLabs landing page is the lab's public front door: a one-page statement of what UnitLabs
is and what it builds, plus a way to reach the team.

Success is a visitor understanding that UnitLabs builds and owns its own onchain products, and
reaching out.

## Positioning

An independent product lab that **builds and owns its own** crypto-native products, protocols,
and financial infrastructure. Not an agency and not a venture studio: no client work, no
co-building for equity. Confirmed by the user.

The line: "We build products for the onchain world."

## Operating Context

- A small team ships several products in parallel from sibling repositories under
  `Desktop/unit` (`mercury`, `mercury-app`, `mercury-landing`, `amplifi`).
- The page is a static Next.js 16 site (App Router) served at `https://unitlabs.xyz`. No CMS,
  no backend; content is edited in code, links in `lib/links.ts`.
- Dev server: `npm run dev -- -p 3200` inside `unit-landing`.
- Vercel Web Analytics and Speed Insights are mounted in the root layout (added 24 September
  2026). Both are cookieless; no consent banner is needed.

## Capabilities and Constraints

- **One screen, no scroll.** Since 4 November 2026 (user decision) the whole site is a single
  viewport: header (brand only), hero (headline and description; no wordmark and no "What we build" list, both
  removed on 24 September 2026) and a contact band along the bottom (closing line with X, GitHub
  and email-address buttons). No footer and no copyright line. It replaced the two-screen layout
  of 24 September; no product showcase or portfolio.
- **Static.** No entrance or scroll animation. Hover effects only. User decision. (Lenis eased
  scrolling was added and then removed the same day, 4 November 2026, once the page stopped
  scrolling.)
- **What we build** (Financial products; Protocols; Developer infrastructure; Consumer crypto;
  Onchain applications) was in the original brief but the user removed the list from the page on
  24 September 2026. It remains true of the lab; do not reintroduce it unasked.
- **Copy, confirmed:** headline "We build products for the onchain world."; description
  "UnitLabs is an independent product lab building crypto-native products, protocols, and
  financial infrastructure."; closing "Want to work with us? Say hello." (changed from "We're
  building the next generation of onchain products." on 24 September 2026 to avoid repeating
  "build" and "products" and to invite contact).
- **Outbound links.** GitHub is `https://github.com/unitlabs-xyz`, X is
  `https://x.com/unitlabs_xyz`, and contact is `hello@unitlabs.xyz` (all supplied 24 September
  2026). The Mercury URL exists but is still a `#` placeholder in `lib/links.ts`.
- Individual products are not named on the page beyond the links. User choice.

## Brand Commitments

- **Name:** UnitLabs, one word in copy. The wordmark reads UNIT LABS on two lines.
- **Binding visual constraints the user volunteered:** background `#EDEBD6`, ink `#E02329`, no
  other colours; Cabinet Grotesk from Fontshare (weights 500 and 800, self-hosted in
  `app/fonts/`). On 4 November 2026 the user replaced the original Array (dot-matrix) typeface
  with "a simple font" (General Sans), then asked for a better one and picked Cabinet Grotesk
  from six candidates; the dot texture now lives only in the mark. The
  reference for simplicity is web3labs.studio.
- **Assets:** dot-matrix wordmark and "U" monogram, exported from Figma at
  `Desktop/unit/Frame 2.png`, `Frame 4.png`, `Frame 5.png`; extracted as circle coordinates in
  `lib/dots.ts` and as `public/wordmark.svg`, `public/mark.svg`; app icons `app/icon.png`
  and `app/apple-icon.png` from Frame 5; social preview `public/og.png`.
- **Voice:** plain, declarative, short. No hype. "Onchain" is the one term of art.

## Evidence on Hand

- Products in progress in sibling repos, not cited on the page by user choice: **Mercury**, a
  wallet that sends USDC to a name over Circle Gateway with ENS names, plus an investment-account
  variant built for Colosseum's Crypto World's Fair closing 12 October 2026; **Amplify**
  (ampli.fi), BTCfi on Starknet, at scaffolding stage.
- Mercury product screenshots at `Desktop/unit/mercury-landing/public/shots/` if a showcase is
  ever wanted.
- **Absences future work must not fabricate:** no testimonials, press, customer logos, metrics,
  funding, team bios, or track-record claims. Public: the GitHub organisation, the X account and
  the contact email above; no other URLs yet.

## Product Principles

1. **Say less.** One screen. Every addition must justify itself against the user's
   "as simple as possible".
2. **Own it.** Copy speaks as a builder of its own products, never as a vendor or a service.
3. **The wordmark is the brand.** Two colours, one plain typeface, the dot-grid mark. Nothing decorative
   beyond that.
4. **Truthful links only.** A placeholder never becomes a live claim until the real destination
   exists.
5. **Reach the team in one click.** Contact is the conversion. The site is one screen, so the
   contact band is always in view: one click on the email button, which shows the address
   itself so it works without a mail app. (The nav "Contact" link was dropped on 4 November 2026
   as a duplicate.)

## Accessibility & Inclusion

The brand red on cream measures 3.93:1 contrast, which passes WCAG AA for large text only. The
user kept the palette and, on 4 November 2026, chose to pass by size: all readable text is set at
WCAG large size (24px+ regular, 19px+ bold), so every text role on the page meets AA. Reduced-motion preferences are respected, since
only hover transitions exist.
