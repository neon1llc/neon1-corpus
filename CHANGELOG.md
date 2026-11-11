# Changelog

neon1-corpus releases use `v0.MINOR.PATCH`: a new document is a minor release, and a correction or clarification is a patch (see the [versioning standard](corpus/standards/versioning.md)). Releases up to v0.23.1 are listed with their bundles on GitHub's releases page. From v0.24.1, the release workflow tags each version in this file once it's on main and publishes its bundles.

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
