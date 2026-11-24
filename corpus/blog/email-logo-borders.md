---
id: blog-email-logo-borders
title: "Why the email logo is made of borders"
summary: "Gmail on iOS inverts colors but leaves images alone, so the logo in neon1's emails is drawn with HTML borders that recolor with the text."
type: post
topic: lessons
status: draft
updated: 2026-11-24
created: 2026-11-24
edition: "1.0"
consumers: [blog, ai]
pdf: false
audience: "Engineers and technical teams who run small systems"
related: [company-decisions]
---

# Why the email logo is made of borders

Summary: the logo in 1NEON's emails is nested bordered boxes, not an image, because Gmail's iOS app inverts colors in dark mode and doesn't touch images.

## What happened

I wanted the logo to switch in dark mode the way the text does. An image of the mark stayed dark green on a dark background. Swapping in a lighter image, or filtering it, didn't help, since the app leaves images alone.

## What I chose

The mark is drawn with nested `div` borders, so the app recolors the borders and the text together. The header lockup matches the site: a 26 pixel mark, "neon" at 1.3 times size and weight 450, and "1" at weight 700.

## What it costs

Outlook for Windows ignores `border-radius`, so it gets the image (`neon1-mark-mid.png` on neon1.tech) instead. Test messages must not attach inline images, because Gmail shows them below the message.

I confirmed it on a phone on the dev copy on November 20. Only this one template sends HTML mail.

## What I would do differently

> [!note] Pradeep writes this: what you got wrong and what you changed, in your words.

## Sources

- [neon1-1NEON](https://github.com/neon1llc/neon1-1NEON): the shared email template, `markHtml` and `wordmark`.
