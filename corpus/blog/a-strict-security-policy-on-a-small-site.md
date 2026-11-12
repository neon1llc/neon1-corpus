---
id: blog-a-strict-security-policy-on-a-small-site
title: "A strict security policy on a small site, and the bug it caused"
summary: "Two near-identical websites on the day a newsletter widget was hijacked, the one setting that separates them, and the odd bug that setting caused on neon1.tech."
type: post
topic: lessons
status: draft
updated: 2027-01-14
created: 2027-01-14
edition: "0.1"
consumers: [blog, ai]
pdf: false
audience: "Developers and anyone who runs a small website"
related: [standards-security-and-data, company-architecture]
---

# A strict security policy on a small site, and the bug it caused

Take two florists with nearly identical websites on Monday, September 14: same template, same photos, and a newsletter sign-up box at the bottom of every page.

The first florist added the box the usual way, by pasting one line from their email marketing service into the site. That afternoon, customers who come to order flowers get a "verify you are human" page instead, telling them to press a few keys and paste a command into their computer. Some of them do.

The second florist's site loads no code from anyone else. Its sign-up box is a plain form that posts to the florist's own address. That afternoon, nothing happens at all.

The first florist's afternoon is what [BleepingComputer reported](https://www.bleepingcomputer.com/news/security/brevo-supply-chain-attack-injected-clickfix-scripts-on-customer-sites/) after attackers used a stolen key at Brevo, a large email marketing service, to change the scripts it serves for its sign-up forms and chat widget. For about five and a half hours, sites that loaded those scripts showed visitors a fake verification page, and one security firm estimated up to 100,000 websites could have been affected. Neither florist did anything wrong. One of them simply trusted an outside script, which is what most small business sites do.

## The setting that separates them

The difference is a [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP), a response header that tells the browser where a page may load code from. neon1.tech runs one of the strictest:

```
default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:;
font-src 'self'; connect-src 'self'; object-src 'none'; frame-ancestors 'none'
```

Scripts, styles, and fonts come only from neon1.tech, and nothing written inline in a page runs. There's no outside widget for anyone to swap, because the policy doesn't allow one, and if a script were ever slipped into a page, the browser would refuse to run it. [OWASP describes](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) this as one of the stronger defenses against injected scripts.

The cost is discipline: no `<script>` blocks, no `style="..."` attributes, no `onclick` handlers, and no third-party widgets. Analytics, chat bubbles, embedded maps, and newsletter boxes either go or get built in-house. On a small site, that trade has been worth it. The pages are simpler and faster, and there's less to audit. The policy is set at CloudFront in Terraform, so it covers every page, including ones I add later and forget about.

## The bug it caused

A strict policy also finds things you didn't know a file was doing. The Knowledge Center's diagrams are drawn from [Mermaid](https://mermaid.js.org/) text into SVG images. They looked right inside their pages. Opened on their own on a phone, in DuckDuckGo and Safari, every box was solid black.

Mermaid's SVGs carry their colors in a `<style>` block inside the file. Shown with an `<img>` tag, an SVG is treated as an image and its styles apply. Opened directly, it's a document like any other page, it gets the site's headers, and `style-src 'self'` blocks those inline styles. With no styles, every shape falls back to a black fill.

I could have loosened the policy for SVGs, and weakened it for every file. Instead, the corpus's diagram tool now writes every style as a plain attribute, like `fill` and `stroke`, on each shape, and a CI check fails if a drawing ever carries a `<style>` block again. The diagram looked like an image, but it carried its own instructions, just as the newsletter box looks like a form and is really someone else's code.

## If your site loads outside scripts

You don't have to go as far as I did. List every outside script your site loads, remove the ones nobody uses, and ask each remaining vendor how they protect the code they serve you. The policy is in [neon1-aws-infrastructure](https://github.com/neon1llc/neon1-aws-infrastructure), and the diagram tool is in [neon1-corpus](https://github.com/neon1llc/neon1-corpus), if you'd like to borrow either.

## Sources

- [Brevo supply-chain attack injected ClickFix scripts on customer sites](https://www.bleepingcomputer.com/news/security/brevo-supply-chain-attack-injected-clickfix-scripts-on-customer-sites/), BleepingComputer (September 17, 2026): the stolen key, the five and a half hours on September 14, and the estimate of up to 100,000 affected websites.
- [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP), MDN Web Docs: what each directive does.
- [Content Security Policy Level 3](https://www.w3.org/TR/CSP3/), W3C: the specification.
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html), OWASP: how a strict policy limits cross-site scripting.
- [Mermaid](https://mermaid.js.org/), the Mermaid project: the diagram language behind the drawings.
