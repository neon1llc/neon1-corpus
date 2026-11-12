# Changelog

neon1-corpus releases use `v0.MINOR.PATCH`: a new document is a minor release, and a correction or clarification is a patch (see the [versioning standard](corpus/standards/versioning.md)). Releases up to v0.23.1 are listed with their bundles on GitHub's releases page. From v0.24.1, the release workflow tags each version in this file once it's on main and publishes its bundles.

## Unreleased

Release together with 1NEON's proposals and billing, so the guide never describes features that aren't live yet.

### Added
- Service agreement (edition 1.0): the agreement a client organization signs once in 1NEON, word for word as the portal shows it, with its short version.
- How neon1 is built (edition 1.1) has a "Paying an invoice" diagram, and its 1NEON diagram adds the records bucket under S3 Object Lock, the Stripe keys in Parameter Store, and Stripe Checkout with its signed webhook.
- Working with neon1 (edition 1.4) answers "How do I pay?".

### Changed
- 1NEON guide, projects (edition 2.0): proposals issued in numbered revisions (0039-r1) with option IDs (0039-r1-B), price checks, changes of scope, signed approvals and what approving needs, the service agreement, purchases and paying back at cost, signed handover acceptance, invoices and paying, and the new Next step order.
- 1NEON guide, pages (edition 1.2), overview (edition 1.2), and account (edition 1.3): the proposal, invoice, and agreement pages, who may do what with each, the proposal, option, and invoice IDs, the new notification group, and where invoices live.
- 1NEON (edition 1.2) no longer says invoices and payment happen outside the portal.
- Services agreement template (edition 1.1) points 1NEON clients to the service agreement they sign there.

## v0.36.0 - 2026-11-12

### Added
- Services (edition 1.2) lists a typical first project for each service, with how long it usually takes.
- The short version on the Terms of use (edition 1.2) and the Security disclosure (edition 1.3), matching the Privacy policy. Both are dated corrections that change nothing else.
- "Answers in seconds, with sources" (edition 1.2) closes its results with the client's words, from Boris M. of Boris M Tax, quoted with permission.

### Changed
- About neon1 (edition 1.4) sums neon1 up as a technology practice, without "one-person" or the location.

## v0.35.1 - 2026-11-12

### Changed
- 1NEON help (edition 1.6) and the 1NEON account guide (edition 1.2) say how someone who has lost every second step gets back in: an email from the account's address, then a call to a phone number already on record and, where there is one, another admin's written OK, before anything is removed.

## v0.35.0 - 2026-11-12

### Added
- The short version: an optional `short` front matter list of one to three sentences, 60 words at most, on what the reader should do or know. neon1.tech shows it in a box between a page's facts and its text, and the Markdown export puts it under the summary. Front matter now reads block lists (`key:` then `  - item` lines) for items that hold commas, and `tools/lint.mjs` checks the length and that any `#` link names one of the document's own sections.
- The Safeguards post (edition 1.3) and "A password manager for your family" (edition 1.3) have their short versions.

## v0.34.3 - 2026-11-12

### Changed
- Writing standard (edition 1.5) reads as my own guide: first person throughout, and "Patterns to avoid" becomes "Habits I edit out," a shorter list grounded in the GOV.UK style guide's words to avoid.
- Code style (edition 2.2) and version control (edition 2.3) drop two lines aimed at tools rather than people.
- Every document's `origin` names neon1's internal handbook, engineering notes, planning notes, or research notes in words instead of private folder paths, and `tools/lint.mjs` now fails an origin that names a private folder, handbook chapter number, or private guide.

## v0.34.2 - 2026-11-12

### Changed
- The Safeguards post (edition 1.2) tells its opening story directly, without "picture."

## v0.34.1 - 2026-11-12

### Changed
- The Safeguards post (edition 1.1) opens with a short story and this week's news: the IRS's online Identity Protection PIN tool goes offline on November 16 until mid-January. It adds what preparers can tell clients this week, and links each fact inline to its source.

## v0.34.0 - 2026-11-12

### Added
- The blog: a `blog/` folder for posts shown on neon1.tech/blog/, a `post` type (with its `topic` and `audience`, ending in Sources), and a `blog` export target, attached to each release as `blog.bundle.json`. Posts go to the `blog` and `ai` bundles.
- First post: "Tax preparers are financial institutions, as far as the FTC is concerned" (`blog/tax-preparers-are-financial-institutions.md`), what the FTC Safeguards Rule asks of a small tax or accounting office and what to get done before tax season.

## v0.33.0 - 2026-11-12

### Added
- Product page for There Are No Incidents (`products/there-are-no-incidents.md`), incident response training for small businesses with a runbook, playbooks, tabletop exercises, templates, and notification rules.

### Changed
- The charter lists the incident response training with the other education repositories.

## v0.32.1 - 2026-11-12

### Fixed
- Sources that moved or were retired now link their current pages: the federal plain language guidelines (now on Digital.gov), GOV.UK's writing standards and A to Z style guide, the NCSC small organisations guide, OWASP's ASVS and threat modeling pages, Prettier's rationale, and Apple's recovery contact article.
- The measurement standard describes DORA's current five software delivery metrics instead of the original four keys, and links DORA's current guide.
- Product pages show the current releases of SOC It 2 Me, Phish Out of Water, and Home Is Where the Smart Is (v0.1.2) and You Have 20 Seconds To Comply (v0.1.1).

## v0.32.0 - 2026-11-12

### Added
- Product page for You Have 20 Seconds To Comply (`products/you-have-20-seconds-to-comply.md`), open compliance guides and training by domain, from HIPAA and GxP to PCI DSS, privacy, and accessibility.

### Changed
- The charter lists the compliance guides with the other education repositories.

## v0.31.0 - 2026-11-12

### Added
- Product pages for three open education repositories: SOC It 2 Me (`products/soc-it-2-me.md`), SOC 2 readiness training; Phish Out of Water (`products/phish-out-of-water.md`), the security awareness session kit; and Home Is Where the Smart Is (`products/home-is-where-the-smart-is.md`), a household tech handbook.

### Changed
- The charter lists the education repositories beside neon1's tools, and the security awareness use case links the session kit.

## v0.30.0 - 2026-11-11

### Added
- Mission and promise (`company/mission.md`): neon1's mission in one sentence, the five things every client can count on, what neon1 does, how a project runs, and the signature lines. It reconciles the original mission statement drafts with the charter, neon1.tech, GitHub, and LinkedIn.
- Capability statement (`company/capabilities.md`): neon1 on one page for buyers and procurement offices, with core capabilities, what sets it apart, delivered work, company data, and NAICS codes.
- Care plan template (`templates/care-plan.md`): the monthly agreement for ongoing care after a project, with what's covered, what's included, response targets, price, and ending.

### Changed
- The charter's mission matches the new page, and About, the charter, and the services agreement link to the new documents.

## v0.29.1 - 2026-11-11

### Changed
- Links say what they point to, and point to the exact page a sentence relies on. WCAG 2.2 is named in full and "level AA" links to W3C's explanation of its conformance levels, in measurement, design and accessibility, and the accessibility policy (a link only; its wording is unchanged). Measurement links DORA's four key measures and Core Web Vitals, and names the NIST handbook section it uses. Reliability, security, technology decisions, outreach, and where else to get help spell out the guides they cite (NIST's contingency planning guide, the OWASP Application Security Verification Standard, the FinOps Framework, the FTC's guidance on reviews and testimonials, SCORE's free mentoring, and the New York Public Library).

## v0.29.0 - 2026-11-11

### Added
- Services agreement (`templates/services-agreement.md`): the short agreement a client and neon1 sign once before any paid work. It says how a proposal becomes agreed work (signing it, or approving an option in 1NEON), and covers what each side will do, payment, changes, acceptance, ownership, confidentiality, limits, and ending. It cites the federal and New York electronic signature laws.
- Proposal with options, filled in (`examples/proposal-options.md`): the walkthrough bakery's proposal, with three options, what each includes and leaves out, hours estimated task by task (about 3, 10, and 17), what each side will do, acceptance checks, and the agreement.

### Changed
- The proposal template (edition 1.2) has an Options section, a "What each of us will do" table in place of "Your part", and a Comments and agreement section, and it names the services agreement as the governing agreement. The filled-in physical therapy proposal (edition 1.2) follows it.
- 1NEON's guide and FAQ describe the full proposal page, the hours and outside costs on options, and that approving an option counts the same as signing the proposal. Working with neon1 explains the one-time agreement and the proposal that follows.

## v0.28.1 - 2026-11-11

### Fixed
- Architecture diagrams now render when opened on their own, including in mobile browsers that apply the site's content security policy to an SVG. Every colour and font is written onto each shape instead of a style sheet, text is plain SVG text, and `diagrams.mjs check` refuses a drawing with styles or embedded HTML.

### Changed
- Architecture diagrams read better on a phone. The overview shows only the request path, and a new Inside 1NEON drawing covers the portal. Sequence messages wrap between lifelines, so the visit, sign-in, and Neo drawings are about a third narrower, with shorter labels. The corpus flowchart names each bundle on its arrow.

## v0.28.0 - 2026-11-11

### Added
- State registration (`company/registration.md`): neon1 LLC's public record with the New York Department of State, including its DOS ID, status, filings, registered agent, assumed name, the next biennial statement, how to search the live record, and how to get official proof. It carries a facts-checked date.

### Changed
- neon1 is the name used everywhere. The legal name, neon1 LLC, is kept to the copyright line and legal text, as writing (edition 1.4) and design and accessibility now say. The proposal template and example are headed and prepared by neon1. About and the names link to the state registration.
- The lint allows the state's public file numbers on the registration page.

## v0.27.1 - 2026-11-11

### Changed
- Wording that undersold neon1 now says the same facts plainly: Where I learn from, writing, and documentation say neon1's practice builds on published standards; version control and testing describe one maintainer; customers, where else to get help, and the 1NEON help FAQ describe fit and hours without downplaying the work.
- Security policy: the bug bounty note is reworded, dated November 11, 2026.

## v0.27.0 - 2026-11-11

### Added
- Where I learn from (`company/sources.md`): the standards bodies, government guides, and practitioners behind neon1's practice, grouped by topic, with what each one is for.
- Writing (edition 1.2): how to structure a line, a group, a section, and a whole document, with a table for choosing a list, numbered steps, a table, or a paragraph, plus rules for attribution.
- Documentation (edition 1.1): what every Knowledge Center document carries, the kinds of document, sharing and reuse, and crediting sources.
- A Sources section, naming the primary standard or guide and what it covers, on every standard and on the backup and password manager guides.

### Changed
- Sources sections now share one form: the linked name, its publisher, and what it's used for.
- 1NEON guides and the 1NEON help FAQ: sentences joined by semicolons are split, and the handoff checklist is a list.
- Security for non-security people: plainer wording about keeping the material current.

## v0.26.0 - 2026-11-11

### Added
- How neon1.tech works (`company/how-it-works.md`): a plain walk through every part of the site, from the rain and the white rabbit to the Knowledge Center, the contact form, Neo, 1NEON's demo, sample, and guided walkthroughs, and how a change goes live.

### Changed
- A document's `created` date is now called its published date, everywhere it's described. Versioning (edition 1.3) says so.

## v0.25.0 - 2026-11-11

### Added
- How neon1 is built (`company/architecture.md`): an AWS-style architecture diagram, sequence diagrams for visiting neon1.tech, asking Neo, and signing in to 1NEON, plus the deploy pipeline, the corpus's flow to every reader, and a 1NEON project's four layers.
- Diagrams: a ```` ```mermaid ```` block with a `%% alt:` line is drawn by `tools/diagrams.mjs` into `diagrams/<key>.svg`, checked in CI, rendered as an image with its source, and copied into each bundle that uses it.

## v0.24.6 - 2026-11-11

### Changed
- About: about 15 years of curiosity and passion for technology and automation, matching the site.

## v0.24.5 - 2026-11-11

### Changed
- DeployOps and Ready, Secure, Go are public on GitHub as previews still in development. Their product pages, the charter, and the glossary say so and link to the code.

## v0.24.4 - 2026-11-11

### Changed
- Privacy policy (edition 2.1) says plainly that Amazon Bedrock doesn't keep Neo's questions or answers, or use them to train models. The portal's copy now matches it word for word.
- 1NEON help (edition 1.3): the guided walkthrough takes about two minutes, now that it starts with Maria signing in.

## v0.24.3 - 2026-11-11

### Changed
- Contact (edition 1.2) and Working with neon1 (edition 1.3) say where the on-site radius is measured from: within about 30 miles of Queens, NY.

## v0.24.2 - 2026-11-10

### Changed
- Versioning and releases (edition 1.2) says how a project that shipped before it was tagged marks its earlier milestones: pre-releases of its first tagged version, on main's commits as they are, with a changelog entry for each.

## v0.24.1 - 2026-11-10

This release also carries v0.24.0, which was tagged only on a local machine and never published.

### Added
- The 1NEON guide (overview, projects, pages, people and account) and a portal bundle for Neo inside the portal.

### Changed
- Versioning and releases (edition 1.1) says how each neon1 repository releases: the pipeline tags each version once it's live, and a change people will notice ships with a changelog entry.
