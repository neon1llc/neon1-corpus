---
id: standards-design-and-accessibility
title: Design and accessibility
summary: "How neon1 designs interfaces and documents for any device and for people using assistive technology."
type: standard
status: adopted
updated: 2026-11-20
created: 2026-11-01
consumers: [ai]
pdf: true
edition: "2.1"
order: 11
origin: "neon1's internal handbook, brand and client trust (website behavior), extended"
related: [standards-development, policy-accessibility]
---

# Design and accessibility

## Start from the task

Every screen and document says what it is, what you can do here, and what happens next. Put the main task first. Keep related controls and facts together, with the same names, order, and layout wherever they recur. No metaphor or animation stands between a person and the task. Follow the [writing standard](writing.md) for the words.

## Navigation and controls

- Links go somewhere, and buttons do something. A link that opens another tab has a different mark from one that stays in this tab. Keep that distinction on a phone, with a keyboard, and in either light or dark mode.
- Navigation has its own presentation: a compact desktop bar, a menu that fits or scrolls on a phone, and named destinations in an application. Keep the current place clear and the controls reachable.
- Back and Forward return to the place you left, even if you visited the same page more than once. A new link to a section goes to that section.
- Choices in a field open toward available space, and expanding sections open in place. The indicator and content move together, reverse together, and settle together. Native controls remain usable when the browser can't draw the same motion.
- Keep focus visible and return it to the control that opened a dismissed menu when appropriate. Don't hide errors or move a person's place while they read or type.

## Accessible by default

I aim for the [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) at [level AA](https://www.w3.org/WAI/WCAG22/Understanding/conformance#levels). I design and check for:

- Semantic headings and landmarks, so screen readers can jump around.
- Every control is reachable and usable with a keyboard, with a visible focus ring.
- Labels on every form field, and errors that say what went wrong and how to fix it.
- Text contrast that meets AA on every background, including over animation.
- Targets large enough to tap, at least 44 by 44 pixels for primary controls.
- Motion that can be paused, and a calm version for people who set their device to reduce motion.
- Pages that work when zoomed to 200% and on a 320-pixel-wide phone without sideways scrolling.

An automated score is a starting point. I also check with a keyboard, a screen reader, and a phone.

## Fast and light

Pages load only what they need, with no trackers, ad scripts, or outside fonts. Images are sized for the screen, and pages work on a slow connection.

## Forms people can finish

Short forms with only the questions the task needs, one per field, and the right phone keyboard. A submitted form says it was received and what's next, and a wrong field loses nothing.

## Documents

Documents use one column, real headings, and tables only for real comparisons. PDFs from the [Knowledge Center](https://neon1.tech/knowledge/) are tagged for screen readers and carry their title and edition.

## The neon1 look, used with restraint

- Matrix and Sentinel are separate looks, each with a light and dark mode. Changing one choice keeps the other. Use shared brand colors, spacing, type, controls, and motion rather than a new pattern on each page.
- Figtree for web text, JetBrains Mono for labels and code, Aptos in Office documents. Each face has its own available weights.
- The rain animation is decoration. It pauses on request, stops when the tab is hidden, and becomes a still image for reduced motion.
- Easter eggs, like the white rabbit, are optional and never stand between you and the content.
- The logo isn't redrawn, stretched, or recolored. neon1 is always lowercase. The legal name, neon1 LLC, is kept to the copyright line and legal text.

## For your projects

The same standard applies to what I build for you. If something in scope can't meet it, such as a vendor's checkout page, I say so and note it in the handover.

## Sources

- [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/), W3C: the accessibility standard neon1 designs to, at level AA.
- [Introduction to web accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/), W3C Web Accessibility Initiative: who accessibility serves, in plain terms.
- [Ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/), Nielsen Norman Group: broad rules for judging an interface.
- [GOV.UK Design System](https://design-system.service.gov.uk/), UK Government Digital Service: tested patterns for forms, errors, and navigation.
- [Web Vitals](https://web.dev/articles/vitals), Google: measures of how fast and stable a page feels.
