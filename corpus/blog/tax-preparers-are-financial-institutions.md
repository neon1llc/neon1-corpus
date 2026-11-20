---
id: blog-tax-preparers-are-financial-institutions
title: "Tax preparers are financial institutions, as far as the FTC is concerned"
summary: "What the FTC Safeguards Rule asks of a small tax or accounting office, and what to get done before tax season."
short:
  - "If you prepare taxes, even alone at a kitchen table, the FTC counts you as a financial institution that needs a written security plan."
  - "The plan comes down to one person in charge, multi-factor sign-in, encryption, and reporting large breaches within 30 days."
  - "The IRS IP PIN tool is offline until mid-January. Finish other protections now. [See the checklist](#what-to-get-done-before-january)."
type: post
topic: questions
status: adopted
updated: 2026-11-20
created: 2026-11-12
edition: "1.12"
consumers: [blog, ai]
pdf: false
audience: "Owners of small tax, bookkeeping, and accounting offices"
related: [product-you-have-20-seconds-to-comply, product-phish-out-of-water, guides-backups-you-can-trust]
---

# Tax preparers are financial institutions, as far as the FTC is concerned

A couple, invented for this example, has had their taxes done at the same small office for years. In February they e-file as always, and a day later it bounces. Someone already filed under their Social Security number, with their names, their income, and a refund sent to an account they've never seen. In its [2025 report to Congress](https://www.irs.gov/newsroom/national-taxpayer-advocate-delivers-annual-report-to-congress-finds-taxpayer-service-was-strong-in-2025-but-foresees-challenges-for-taxpayers-who-encounter-problems-in-2026), the National Taxpayer Advocate found identity theft victims waiting nearly two years for the IRS to resolve cases like this.

Everything that return took sits in a preparer's client folder: Social Security numbers, income, prior returns, and the refund account.

The Federal Trade Commission [names tax preparation services](https://www.ecfr.gov/current/title-16/section-314.2) as a "financial institution" under its [Safeguards Rule](https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know), whether you work alone at a kitchen table or run a ten-person firm. The Gramm-Leach-Bliley Act requires financial institutions to protect customers' personal information, and for most businesses outside banking the FTC enforces it through [16 CFR Part 314](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314). The FTC [rewrote the rule in 2021](https://www.federalregister.gov/documents/2021/12/09/2021-25736/standards-for-safeguarding-customer-information), mostly effective June 9, 2023, and a [later amendment](https://www.federalregister.gov/documents/2023/11/13/2023-24412/standards-for-safeguarding-customer-information) added a duty to report certain breaches, starting May 13, 2024.

## What the rule asks for

A [written information security program](https://www.ecfr.gov/current/title-16/section-314.4) that fits your size and what you hold, called a WISP in the tax world. For a small office:

- **One person in charge,** called the Qualified Individual: you, someone on staff, or an outside provider. With a provider, you still own the result and name someone senior to oversee them.
- **Multi-factor authentication** on every system holding client information: email, tax software, the client portal, cloud storage, and remote access.
- **Encryption** of client information in transit outside your network and at rest, including laptops and backup drives.
- **Access limited to what each job needs,** and a list of the systems, devices, and people touching client data.
- **Security training for everyone,** kept current.
- **Contracts that require service providers to protect the data,** and a periodic check that they do. That includes your IT person, software vendors, and any outside bookkeeper.
- **Secure disposal** of a former client's information no later than two years after you last used it, unless you have a legal or business reason to keep it.
- **A written plan for when something goes wrong:** who decides, who gets told, and in what order.

If you keep information on [fewer than 5,000 consumers](https://www.ecfr.gov/current/title-16/section-314.6), you can skip four formal pieces: the written risk assessment, penetration testing and scans, the written incident response plan, and the annual report to leadership. Everything else still applies. Former clients count, and an established office usually holds more people's information than its client list suggests.

## The 30-day clock

Since May 13, 2024, if unencrypted information on 500 or more people is taken, you must tell the FTC through its online form within 30 days of finding out. Encrypted data counts as unencrypted if the key was taken too, and the FTC can publish these reports. New York's [breach notification law](https://ag.ny.gov/resources/organizations/data-breach-reporting) applies on top, with notices to the people affected and to the state. A stolen laptop with an encrypted disk means a police report. Without encryption, it can mean a federal filing and letters to every client on it.

## What the IRS asks

Each time you apply for or renew your PTIN, [Form W-12](https://www.irs.gov/pub/irs-pdf/fw12.pdf) asks you to confirm that you know paid preparers must create and maintain a written information security plan. Start with [Publication 5708](https://www.irs.gov/pub/irs-pdf/p5708.pdf), a sample WISP written for small practices, and [Publication 4557](https://www.irs.gov/pub/irs-pdf/p4557.pdf), the IRS guide to safeguarding taxpayer data.

## The IP PIN gap

The IRS's online tool for an [Identity Protection PIN](https://www.irs.gov/identity-theft-fraud-scams/get-an-identity-protection-pin), a six-digit number that helps stop someone else filing under a Social Security number, is offline from November 16, 2026, until mid-January 2027. Clients with a 2026 PIN should keep it with their tax records, since the IRS issues a new number each calendar year. Anyone seeking a 2027 PIN can request one through their IRS online account when the system returns. The IRS never calls, emails, or texts asking for an IP PIN, and clients share it with their preparer only when ready to file.

## What to get done before January

It takes a few evenings. In your office, I'd go in this order:

- [ ] Name your Qualified Individual, and write it down.
- [ ] Fill in Publication 5708 with how your office works today, not how you wish it worked.
- [ ] Turn on MFA for email, tax software, the client portal, cloud storage, and remote access.
- [ ] Turn on disk encryption on every computer (BitLocker on Windows, FileVault on a Mac).
- [ ] Stop taking tax documents by plain email, and point clients to a portal or another encrypted option.
- [ ] List everyone with access to client data, including outside help, and remove unused accounts.
- [ ] Ask your IT provider and software vendors what they do to protect your data, in writing.
- [ ] Run one short staff session on phishing and fake sign-in prompts before the season starts.
- [ ] Do a test restore from your backup.
- [ ] Write down who to call, and in what order, if a laptop goes missing or an account gets taken over.

## Going further

[Compliance basics for small businesses](../products/you-have-20-seconds-to-comply.md) and the [Phishing awareness session kit](../products/phish-out-of-water.md) are on GitHub, and you can use them without talking to me. I do this work for small offices around Queens: MFA, encryption and backups, the plan from Publication 5708, and the staff session. The first [30-minute call](https://calendly.com/1isgladtobeofservice/neon1-consultation) is free.

## Sources

- [16 CFR Part 314, Standards for Safeguarding Customer Information](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-314), eCFR: the rule's text. Tax preparation as a financial institution is in [§ 314.2](https://www.ecfr.gov/current/title-16/section-314.2), the elements of the program in [§ 314.4](https://www.ecfr.gov/current/title-16/section-314.4), and the under-5,000 exemption in [§ 314.6](https://www.ecfr.gov/current/title-16/section-314.6).
- [FTC Safeguards Rule: What Your Business Needs to Know](https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know), Federal Trade Commission: the FTC's plain-language guide to the rule.
- [Standards for Safeguarding Customer Information, notification amendment](https://www.federalregister.gov/documents/2023/11/13/2023-24412/standards-for-safeguarding-customer-information), Federal Register: the 30-day FTC notice, effective May 13, 2024.
- [IRS reminder: Take steps now to protect tax information](https://www.irs.gov/newsroom/irs-reminder-take-steps-now-to-protect-tax-information), IRS (IR-2026-127, October 22, 2026): the IP PIN and the online tool's mid-November to mid-January maintenance window.
- [Get an Identity Protection PIN](https://www.irs.gov/identity-theft-fraud-scams/get-an-identity-protection-pin), IRS: who can get one, the yearly new number, and the system being offline from November 16, 2026, until mid-January 2027.
- [National Taxpayer Advocate delivers annual report to Congress](https://www.irs.gov/newsroom/national-taxpayer-advocate-delivers-annual-report-to-congress-finds-taxpayer-service-was-strong-in-2025-but-foresees-challenges-for-taxpayers-who-encounter-problems-in-2026), IRS (IR-2026-15): identity theft victims waiting an average of more than 21 months.
- [Form W-12, PTIN Application and Renewal](https://www.irs.gov/pub/irs-pdf/fw12.pdf), IRS: the line where preparers confirm they know a written information security plan is required.
- [Publication 5708, Creating a Written Information Security Plan for your Tax and Accounting Practice](https://www.irs.gov/pub/irs-pdf/p5708.pdf), IRS and the Security Summit: the sample WISP for small practices.
- [Publication 4557, Safeguarding Taxpayer Data](https://www.irs.gov/pub/irs-pdf/p4557.pdf), IRS: the security guide and checklists for tax professionals.
- [Security Summit releases new data security plan to help tax professionals](https://www.irs.gov/newsroom/security-summit-releases-new-data-security-plan-to-help-tax-professionals-new-wisp-simplifies-complex-area), IRS: why the sample WISP was written for smaller practices.
- [New York information security breach and notification law](https://ag.ny.gov/resources/organizations/data-breach-reporting), New York State Attorney General: the state's breach notice duties.
