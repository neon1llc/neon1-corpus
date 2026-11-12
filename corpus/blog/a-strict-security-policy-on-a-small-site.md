---
id: blog-a-strict-security-policy-on-a-small-site
title: "A strict security policy on a small site, and the bug it caused"
summary: "Why neon1.tech runs no scripts but its own after this fall's newsletter-widget attack, and why its diagrams once showed up as black shapes on phones."
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

A florist's website has a newsletter sign-up box at the bottom, the kind you paste in from an email marketing service with one line of code. One Monday in September, customers who visit the site to order flowers see a "verify you are human" check instead. It tells them to press a few keys and paste a command into their computer. Some of them do. The florist never touched the site.

Something very like that happened on September 14. Attackers who had stolen a key at Brevo, a large email marketing service, [changed the scripts Brevo serves](https://www.bleepingcomputer.com/news/security/brevo-supply-chain-attack-injected-clickfix-scripts-on-customer-sites/) for its sign-up forms and chat widget for about five and a half hours. Every site that loaded those scripts showed visitors a fake verification page with instructions to run a command, and one security firm estimated up to 100,000 websites could have been affected. The businesses running those sites had done nothing wrong. They had trusted one outside script, which is what almost every small business site does.

neon1.tech doesn't load anyone else's scripts at all, and a browser setting enforces that. It's one of the strictest choices a site can make. It's worth it, and it also caused a strange bug that took me a while to see.

## What the policy does

A [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) is a response header that tells the browser where a page may load things from. neon1.tech's says, in short:

```
default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:;
font-src 'self'; connect-src 'self'; object-src 'none'; frame-ancestors 'none'
```

Scripts, styles, and fonts come only from neon1.tech itself, and nothing written inline in the page runs. If someone ever slipped a script into a page, through a form field or a compromised dependency, the browser would refuse to run it. And there's no outside widget for anyone to swap, because the policy doesn't allow one. It's a second lock behind careful coding, and [OWASP describes](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) the same approach as one of the stronger defenses against injected scripts.

## What it costs

The price is discipline. No `<script>` blocks in the HTML, no `style="..."` attributes, no `onclick` handlers, and no third-party widgets that inject their own code. Every script and stylesheet is a separate file. Analytics, chat widgets, newsletter boxes, and embedded maps that depend on someone else's code are out, or get built differently. For a small site, that turned out to be a fair trade: the pages are simpler and faster, and there's less to audit.

The policy is set at CloudFront, in Terraform, so it applies to every page, including ones I add later and forget about.

## The black shapes

The Knowledge Center has diagrams of how neon1 is built. They're drawn from [Mermaid](https://mermaid.js.org/) text into SVG images. On a laptop they look right. Then I open one on its own, on a phone, in DuckDuckGo and Safari, and every box is solid black.

The cause is the policy. Mermaid's SVG output carries its colors in a `<style>` block inside the file. When an SVG is shown with an `<img>` tag inside a page, the browser treats it as an image and draws its internal styles. When the SVG is opened directly as its own document, it gets the site's security headers like any other page, and `style-src 'self'` blocks its inline styles. With no styles, every shape falls back to a black fill.

## The fix

Loosening the policy for SVGs would have worked, and would have weakened it for every file. Instead, the corpus's diagram tool now bakes every style into plain attributes, like `fill` and `stroke`, on each shape. The drawings contain no `<style>` block, no `style=` attributes, and no embedded HTML. A check in CI fails if a drawing ever contains one again, so the bug can't come back quietly.

## What it taught me

A strict policy finds the places where a file does more than it appears to. The diagram looked like an image, but it carried its own styling instructions, and the policy treated it accordingly. The newsletter box looks like a form, but it's someone else's code running on your page with your visitors' trust. Testing on more than one browser, and opening a file the way a visitor might, caught what testing inside the page didn't.

If your site loads widgets from outside services, you don't need to go as far as I did. Make a list of every outside script your site loads, remove the ones nobody uses, and ask each remaining vendor how they protect the code they serve you.

The policy is in [neon1-aws-infrastructure](https://github.com/neon1llc/neon1-aws-infrastructure), and the diagram tool is in [neon1-corpus](https://github.com/neon1llc/neon1-corpus).

## Sources

- [Brevo supply-chain attack injected ClickFix scripts on customer sites](https://www.bleepingcomputer.com/news/security/brevo-supply-chain-attack-injected-clickfix-scripts-on-customer-sites/), BleepingComputer (September 17, 2026): the stolen key, the five and a half hours on September 14, and the estimate of up to 100,000 affected websites.
- [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP), MDN Web Docs: what each directive does.
- [Content Security Policy Level 3](https://www.w3.org/TR/CSP3/), W3C: the specification.
- [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html), OWASP: how a strict policy limits cross-site scripting.
- [Mermaid](https://mermaid.js.org/), the Mermaid project: the diagram language behind the drawings.
