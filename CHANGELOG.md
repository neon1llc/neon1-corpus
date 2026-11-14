# Changelog

neon1-corpus releases use `v0.MINOR.PATCH`: a new document is a minor release, and a correction or clarification is a patch (see the [versioning standard](corpus/standards/versioning.md)). Releases up to v0.23.1 are listed with their bundles on GitHub's releases page. From v0.24.1, the release workflow tags each version in this file once it's on main and publishes its bundles.

## Unreleased

### Changed
- Links to the five companion guides use their new GitHub names (soc-2-readiness, incident-response-for-small-teams, compliance-basics, phishing-awareness-kit, household-tech-handbook); the old addresses still redirect.
- The five companion guide pages carry their new names as titles: SOC 2 readiness, step by step; Incident response for small teams; Compliance basics for small businesses; Phishing awareness session kit; and Household tech handbook. Their ids and file names stay. The charter, the security awareness guide, and the tax preparers post use the new names too.
- Case studies have `role` and `when` fields: in what capacity I did the work, and the years. Cards and pages show them once confirmed. A `TBD` value is flagged by `tools/lint.mjs` as a warning and left out of every bundle. Four cases still have role TBD, and all six have when TBD.
- The case study one-line fields are renamed `short_problem`, `short_work`, `short_results`, and `short_after`, matching the sections. Needs, Execute, Observe, Normalize stays only in 1NEON's own pages; the glossary, the writing and documentation standards, and How neon1.tech works no longer use it for case studies.
- "Open source" is used only for what is: the capability statement and How neon1.tech works name each license (MIT, Apache-2.0, CC BY-SA 4.0, FSL-1.1, CC BY-ND 4.0), AWS CLIP and Ready, Secure, Go state theirs, and the blog's lessons come from neon1's public repositories.
- Less about neon1: the capability statement drops its "what sets neon1 apart" list for how engagements work, and the mission drops lines that praised rather than informed. The mission stays the one place that promises your accounts and data stay yours.
- How a project runs: Build says each change is checked against the agreed measures, and the page links one example project in 1NEON.
- Working with neon1: the security baseline every option starts from is named, the on-site connection is described without an unexplained "secure", and the links to 1NEON's walkthrough leave the home page questions.
- Proposal with options: Instagram messages stay manual for now, because official messaging access costs more to set up and keep than it saves at about six orders a night, not because it can't be done.
- 1NEON help: paying opens Stripe's hosted payment page.
- The guided walkthrough is the way into 1NEON: 1NEON help's "Can I try it first?" matches the portal word for word, and the 1NEON page, the 1NEON overview, How a project runs, and How neon1.tech works lead with it, with the sample project and demo second. The preview is about three minutes and the full story about 17 everywhere.
- DeployOps (edition 1.5): a local developer preview, not production-supported. The page lists what has run live on AWS and Azure, what hasn't, that Google Cloud hasn't been deployed live, and how to run the demo without a cloud account. The glossary no longer says "any major cloud".
- Ready, Secure, Go and its five companion guides show their retagged releases (v0.1.2; SOC 2 readiness, the phishing kit, and the household handbook v0.1.3; incident response v0.1.1; compliance basics v0.1.2), and Ready, Secure, Go says their scope is stable: accuracy and source updates only, with no new modules for now.
- Compliance basics: the plans are 20-day learning plans, a pace and not a deadline; finishing one doesn't make a business compliant, and it's training, not legal advice or a compliance determination. SOC 2 readiness helps a team prepare, and the audit opinion belongs to the auditor. Incident response gives deadlines as examples from named rules, and says notification requirements vary by jurisdiction, sector, and contract, with a lawyer deciding.
- Data export. 1NEON help (edition 2.3) gives the portal's full answer to "Can we get a copy of our data?" (comments, activity history, projects in Trash, manifest.json, and -complete or -partial in the zip's name) and adds "Is there a simpler way for a small job?"; the cookie notice lists the new `1neon-export` storage row; the 1NEON page (1.4) and the people and account guide (1.5) describe the same export.
- Claim corrections. The privacy policy (edition 2.4) describes the signed-in Neo, which sends your question and what it reads in 1NEON as you to an Anthropic model on Amazon Bedrock when it's enabled; says Amazon states it doesn't train on prompts and that some models may keep them for abuse detection, in place of "Bedrock doesn't keep it" (also in How neon1.tech works, edition 1.5, and the architecture, edition 1.3); says projects and uploaded files are never deleted on a schedule while system records have stated periods; and lists sign-in as an emailed code or a passkey, with an authenticator app as an optional second step and no Google sign-in or password; and calls the records bucket write-protected for seven years (S3 Object Lock) in place of "locked" (also in the architecture and 1NEON projects, edition 2.4). The services agreement template (edition 1.4), proposal template (1.3), and both example proposals (1.3 and 2.3) say I answer questions in my working hours, usually within a day, in place of "within one business day". Working with neon1 (edition 1.8) says appropriate insurance is in place before regulated-data work starts, in place of "the insurance to back them".
- Legal and policy consistency pass. Working with neon1 (edition 1.7) and Contact (edition 1.3) give weekday hours as 6pm to 9pm, matching every other page. The services agreement template (edition 1.3) says that anything a business can't run without for a day is taken only when someone on the client's side runs it day to day, names that person in the service and recovery profile, and points to care plans for response times, in the same words as Working with neon1. The business associate agreement example (edition 1.1) writes the notice address as "Ste R", as the state registration does. The cookie notice (edition 1.3) says exactly what the demo and walkthrough send: their pages and files load from neon1.tech, and after that nothing you do in them leaves your browser. The terms (edition 1.3) say an admin can download everything from Settings any time, and both the terms and the privacy policy (edition 2.3) give the Albany business address instead of "New York, NY".

### Fixed
- Capability statement (edition 1.1): the HHS sample capability statement link points to its new address on hhs.gov.

## v0.40.0 - 2026-11-13

### Changed
- Less about neon1 itself. The 18 standards, the charter, and How neon1.tech works stay in this repository but leave the Knowledge Center and Neo; links to them now open on GitHub. The mission keeps its promise and the landing line, without repeating the services and process; About says who does the work (about 10 years of building and running systems), what's been shipped, and how the practice is set up; Services leads with owner-run businesses, with cloud, networks, and security training as shorter second lines.
- Products: SOC It 2 Me, There Are No Incidents, You Have 20 Seconds To Comply, Phish Out of Water, and Home Is Where the Smart Is leave the Knowledge Center and Neo, and Ready, Secure, Go lists them as companion guides under plain titles. The two family and school case studies stay in the Knowledge Center but leave the home page.
- Case studies are told as The problem, The work, The results, and After handover. Needs, Execute, Observe, Normalize stays the four layers inside 1NEON.
- Working with neon1: anything a business can't run without for a day needs someone on the client's side who runs it day to day; care plans set response times within working hours; personal or health data needs the right agreement and the insurance to back it.
- Neo gives the published price ranges and links How I price my work, never a rate or a specific quote. Its voice is its own: Neo's lines, the catalog of film quotes, is removed, and Neo doesn't quote the films.
- 1NEON: an admin can download all of an organization's data from Settings (Download everything), and 1NEON help, the 1NEON page, and the people and account guide say so in place of "no export button".
- Proposal with options: the bakery re-estimated with go-live support, account setup, training, and a contingency for vendor behavior: A 4 to 6 hours, B 22 to 28, C 32 to 39, and the finished work at 24.5 hours. How I price my work shows the same example at $400 to $600, $2,200 to $2,800, and $3,200 to $3,900.
- Privacy policy (edition 2.2): which records a deletion request can't remove (signatures, issued invoices, and payments, locked seven years) and what the 3-year audit log holds.
- How I price my work: paying for fewer hours applies to estimates, not fixed prices.
- 1NEON help: the full walkthrough is about 17 minutes, as the portal says.
- How neon1.tech works: Neo's prompt is about 32,000 tokens as measured, and Neo can trail a corpus release by up to a week.
- Proposal with options also says which bakery orders arrive on their own, which a person checks, and which are still entered by hand once in a staff form.
- The tax preparers post says its opening couple is an invented example. SOC It 2 Me says it prepares a company for an audit, not that it guarantees a clean one.
- How neon1 is built (edition 1.2): **Trying a change on dev first**, with diagrams of the dev-to-production workflow and of signing in to dev.neon1.tech, what dev copies and what it doesn't, and 1NEON on a copy of production's data, open to neon1 only.
- Versioning and releases (edition 1.5): look at a batch on dev before releasing, and dev builds are never releases.
- Version control (edition 2.4): the two long-lived branches, `main` and `dev`, and why each work branch goes to main on its own.

### Fixed
- The renderer and the linter refuse links with unsafe schemes (javascript:, data:, and others), with tests in CI.

## v0.39.0 - 2026-11-13

### Added
- How I price my work: the two ways a project is priced, the ranges most work falls into (small fixes $150 to $750, workflow projects $1,000 to $3,000, larger builds from $3,000 in phases), the bakery's three options as a worked example, what a price includes and what's paid separately, when a price can change, paying, room to adjust, why the site shows ranges while proposals show hours, and how the ranges compare with published 2026 figures for the United States and New York.

### Changed
- 1NEON help (edition 2.1): "Can I change my mind after approving an option?" replaces "Can an approval be changed?", word for word as the portal says it.
- 1NEON guide, projects (edition 2.3): **Changing the decision**, covering the reason, what carries over, deposits and credits, going back to a replaced option, and when a decision stays.
- Proposal with options, filled in (edition 2.1): the bakery's hours re-estimated (A 3 to 4, B 12 to 15, C 18 to 23), and the finished work at 13.75 hours.
- How neon1.tech works (edition 1.3): the walkthrough's narration is a line under the controls, and its lengths are restated (the preview about three minutes, the whole story about 17).
- 1NEON help: the guided walkthrough's preview takes about three minutes.

## v0.38.1 - 2026-11-13

### Changed
- Tighter wording across the Knowledge Center and blog, about 13% less prose overall: the FAQ, case studies, 1NEON guide, company pages, all 18 standards, guides, landscape, and the tax preparers post. Legal pages, forms, and Neo's instructions are unchanged.
- Services, process, About, Contact, and the mission's "What I do" table match the home page's wording.
- How neon1.tech works (edition 1.2) covers the blog, the About photo, the footer, and how the site builds the newest corpus release as static HTML, keeping the last 5 releases; its architecture diagram is redrawn to match.
- Ready, Secure, Go (v0.1.1) and AWS CLIP (v0.1.0) show as first releases and DeployOps as a v0.14 preview, matching their repositories; the glossary and charter follow.

## v0.38.0 - 2026-11-13

### Changed
- Service agreement (edition 2.0), word for word as 1NEON shows it: a price is fixed or an estimate, an estimate is billed for the hours worked and never passes its high end unless you approve a change first, and a deposit counts toward the final invoice, with any difference refunded.
- Proposal with options, filled in (edition 2.0): Maple Street Bakery's proposal rebuilt as the 1NEON walkthrough now tells it. A team of eight, orders by email, voicemail, and Instagram, limits found before any option was written, three options with why to pick each, the hours behind each price task by task, when the client pays, and how the work turned out.
- 1NEON help (edition 2.0) matches the portal's FAQ word for word, with seven new answers: whether a price is fixed or an estimate, where the hours worked are listed, what happens if the work needs more or fewer hours than estimated, what happens if a bank payment doesn't go through, whether you get a receipt, whether paying by card or paying late costs more, and what to do if an invoice looks wrong. It also describes accepting a whole handover with one signature and how a bank payment shows while it clears.
- 1NEON guide, projects: the two kinds of price, **How this adds up**, the Hours section, and how deposits, progress invoices, and final invoices are worked out for each kind, and accepting a whole handover with one signature. It also covers a bank payment from the day it's started: clearing, paid, or refused, and what each shows and Next step telling a client who has the work (edition 2.2). Pages (edition 1.4): what Home's Needs you now lists, with invoices to pay first.
- Operating principles (edition 2.0), the services agreement template (edition 1.2), and Working with neon1 (edition 1.5) describe pricing the same way: fixed when the work is well understood, otherwise an estimate with a ceiling.
- How neon1.tech works (edition 1.1) describes the walkthroughs as they are now: a Start card, a closing card, narration at the bottom, a loading screen when jumping ahead, a screen that stays lit, and the full story's 14 chapters.

## v0.37.2 - 2026-11-13

### Changed
- Cookie and browser storage notice (edition 1.2) matches the portal's notice word for word again. It adds the one item the guided walkthrough saves in your tab so its Exit returns you to the answer you opened it from, and lists the project sort order beside the list-or-timeline choice.
- 1NEON help (edition 1.9) says how long the full walkthrough takes as measured, about 11 minutes.

## v0.37.1 - 2026-11-12

### Changed
- 1NEON help (edition 1.8) matches the portal's FAQ again: the proposal opens from **Read the proposal** and downloads as Word as well as PDF, the approval lists its terms again (including anything to buy) before signing, and three new answers cover suggesting changes with a marked-up copy, who buys equipment or software (with receipts and paying back at cost), and asking for something new after approving.

## v0.37.0 - 2026-11-12

### Added
- Service agreement (edition 1.0): the agreement a client organization signs once in 1NEON, word for word as the portal shows it, with its short version.
- How neon1 is built (edition 1.1) has a "Paying an invoice" diagram, and its 1NEON diagram adds the records bucket under S3 Object Lock, the Stripe keys in Parameter Store, and Stripe Checkout with its signed webhook.
- Working with neon1 (edition 1.4) answers "How do I pay?".

### Changed
- 1NEON guide, projects (edition 2.0): proposals issued in numbered revisions (0039-r1) with option IDs (0039-r1-B), price checks, changes of scope, signed approvals and what approving needs, the service agreement, purchases and paying back at cost, signed handover acceptance, invoices and paying, and the new Next step order.
- 1NEON guide, pages (edition 1.2), overview (edition 1.2), and account (edition 1.3): the proposal, invoice, and agreement pages, who may do what with each, the proposal, option, and invoice IDs, the new notification group, and where invoices live.
- 1NEON (edition 1.2) no longer says invoices and payment happen outside the portal.
- Services agreement template (edition 1.1) points 1NEON clients to the service agreement they sign there.
- 1NEON help (edition 1.7) matches the portal's FAQ word for word: "Proposals, decisions, and signing" (with proposal revisions and accepting a handover step), a new "Invoices and paying" section, and walkthrough links that include the new paying chapter.

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
