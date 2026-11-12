---
id: blog-why-i-publish-how-neon1-works
title: "Why I publish how neon1 works"
summary: "After a year of fake business listings and paid-for reviews, why neon1's standards, templates, policies, and most of its code are public."
type: post
topic: whats-and-whys
status: draft
updated: 2027-01-07
created: 2027-01-07
edition: "0.1"
consumers: [blog, ai]
pdf: false
audience: "Prospective clients and anyone curious about running a business in the open"
related: [company-charter, company-sources, standards-operating-principles]
---

# Why I publish how neon1 works

Last May, the Federal Trade Commission and the State of Illinois [sued a company](https://www.ftc.gov/news-events/news/press-releases/2026/05/ftc-illinois-take-action-stop-deceptive-conduct-company-created-thousands-business-listings-fake) they say created thousands of online listings for home-repair businesses that didn't exist. According to the complaint, the listings had invented addresses and local phone numbers, and fabricated five-star reviews to bury the real one-star ones. Calls went to representatives overseas who promised technicians, and in many cases nobody came.

The case relies in part on the FTC's newer [rule against fake reviews](https://www.ftc.gov/business-guidance/blog/2025/12/warning-letter-or-ten-businesses-comply-ftcs-consumer-review-rule), the same rule behind a round of warning letters in December 2025 to companies using fake reviews or paying for five-star ones. Violations can cost up to $53,088 each.

## What it means for anyone hiring help

A rating used to be a decent shortcut. When stars and listings can be bought in bulk, it isn't anymore, and the people hurt most are the ones who can least afford a wasted service call: a homeowner with no heat, or a small office with a server down on a Monday.

Technical help has always had this problem in a quieter form. You're asked to trust claims you can't check: that your data is backed up, that the vendor uses strong passwords, that the work was done the way the invoice says.

## So I publish the work instead

Almost everything about how neon1 runs is public. The standards I hold myself to, the proposal and agreement templates, the intake and handover forms, the privacy policy, and the case studies all live in one open repository, [neon1-corpus](https://github.com/neon1llc/neon1-corpus), and appear in the [Knowledge Center](https://neon1.tech/knowledge/). So does the code for this website, the 1NEON client portal, and the infrastructure under both.

That does a few things a rating can't:

- **You can check before you call.** Read how I run discovery, how I handle security and backups, what the agreement says, and what a finished proposal looks like. If something doesn't sit right, you find out early and for free.
- **It keeps me honest.** If my security standard says I test restores, a client can ask to see the last one. When a policy changes, the change is dated and visible.
- **It's hard to fake.** A body of work that has been public, dated, and changing in the open for months can't be bought overnight.
- **It helps people who never hire me.** A small office can copy the proposal template or teach a staff session from one of the training kits without paying anyone.

Every document lives once, in Markdown, and the website, the Knowledge Center, its PDFs, this blog, and Neo, the chat on neon1.tech, all read from that one copy. A change made there reaches every place, so the site never says one thing while a PDF says another.

## What stays private

Publishing how I work is different from publishing who I work with. Client names, client data, and anything covered by a confidentiality agreement or a BAA never go into a public repository. A case study is published only with permission, and the tooling refuses to export anything that looks like private data, such as an account number or a personal email address.

The documents are shared under [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/), and the code under the [MIT License](https://opensource.org/license/mit). The neon1 name and brand are covered by neither.

Whoever you hire, for anything, it's fair to ask to see how they work before you trust the stars next to their name.

## Sources

- [FTC and Illinois take action against a company that created thousands of fake business listings](https://www.ftc.gov/news-events/news/press-releases/2026/05/ftc-illinois-take-action-stop-deceptive-conduct-company-created-thousands-business-listings-fake), Federal Trade Commission (May 11, 2026): the fake home-repair listings and reviews, as alleged in the complaint.
- [A warning letter (or ten) for businesses: comply with the FTC's Consumer Review Rule](https://www.ftc.gov/business-guidance/blog/2025/12/warning-letter-or-ten-businesses-comply-ftcs-consumer-review-rule), FTC Business Blog (December 22, 2025): the warning letters about fake and paid-for reviews, and the penalty of up to $53,088 per violation.
- [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/), Creative Commons: the license on neon1's documents.
- [The MIT License](https://opensource.org/license/mit), Open Source Initiative: the license on neon1's code.
- [Where I learn from](../company/sources.md), neon1: the reading list behind neon1's standards.
