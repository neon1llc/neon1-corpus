# neon1-corpus

neon1's public information, written once in Markdown. The website, Neo (the chat on neon1.tech), the knowledge area and its PDF downloads all read from here, so a change made here reaches every one of them and nothing gets copied by hand.

From [neon1](https://neon1.tech). *1 is glad to be of service.*

## What's here

| Folder | What it holds |
|---|---|
| [`corpus/company/`](corpus/company) | Who neon1 is, the names, how a project runs, how to get in touch |
| [`corpus/services/`](corpus/services) | The four kinds of help and where to start |
| [`corpus/faq/`](corpus/faq) | Working with neon1, and help for the 1NEON portal |
| [`corpus/case-studies/`](corpus/case-studies) | Past projects, each told as Needs, Execute, Observe, Normalize |
| [`corpus/products/`](corpus/products) | 1NEON, AWS CLIP, DeployOps, Ready, Secure, Go |
| [`corpus/standards/`](corpus/standards) | How I work: operating principles, discovery and delivery, security, AI quality, technology decisions, reliability, measurement, writing and client trust |
| [`corpus/landscape/`](corpus/landscape) | Where else to get help, and when another provider would serve you better |
| [`corpus/templates/`](corpus/templates) | Blank proposal, decision review, partner responsibilities, business associate agreement and its request questionnaire |
| [`corpus/forms/`](corpus/forms) | Blank intake, discovery, change request, handover, service profile, tool decision, incident, metric and publication records |
| [`corpus/examples/`](corpus/examples) | Templates and forms filled in for a fictional client |
| [`corpus/policies/`](corpus/policies) | Privacy policy, terms of use, cookie notice |
| [`corpus/neo/`](corpus/neo) | Neo, the chat: its character and directives (`chat.md`) and the lines from the Matrix films it may quote (`motifs.md`) |

Everything here is public. Nothing private belongs in this repository, even as a draft.

## How a document looks

Each file is Markdown with front matter that tells tools what it is and who reads it:

```yaml
---
id: services
title: Services
summary: Four kinds of help, from automating a small business to SOC 2 readiness.
type: page            # page, standard, guide, policy, template, form, example, faq, case-study, comparison or directive
status: adopted       # draft, adopted or retired. Only adopted documents are exported
updated: 2026-11-09   # when it last changed in substance
created: 2025-09-07   # when the content was first written, from its real source
edition: "1.0"       # X.Y, no v: minor for corrections, major when a promise or rule changes
consumers: [site, chat, knowledge, ai]
pdf: true             # offered as a PDF download in the knowledge area
origin: "neon1-site src/app/public/index.html#services"
---
```

The full rules are in [`schema/doc.schema.json`](schema/doc.schema.json). Its `x-types` part adds rules per type. A case study, for example, keeps its card facts in front matter (`key`, `order`, `stat_key`, `stat` and one `short_` line for each stage) and must have the sections Needs, Execute, Observe and Normalize, in that order. The body stays free Markdown inside those sections. Templates and forms mark lines to write on with four or more underscores (`____`) and choices with task items (`- [ ] Option`). An `example` names the blank it fills in (`example_of`) and says whether it's `fictional`. A quote that starts with `[!note]`, `[!tip]`, `[!warning]` or `[!example]` becomes a callout box. Each folder is a shelf in the Knowledge Center, labeled in `tools/corpus.mjs`. A `directive` says how a consumer behaves rather than what it says about neon1, such as Neo's voice and rules, so consumers keep it apart from the facts they answer from.

## Tools

Node 22, no dependencies.

```
node tools/lint.mjs                     # front matter, per-type rules, links, and checks for anything that looks private
node tools/export.mjs --target site     # writes dist/site/. Also chat, knowledge or ai
```

## Reading the corpus from another repo

Consumers never parse Markdown. The export does it once, the same way for every document, and writes each one twice, flat and named by `id`:

| File | What's in it | Who it suits |
|---|---|---|
| `<id>.md` | The whole document as Markdown, with its card facts written out | Reading whole, such as Neo's prompt or AI context |
| `<id>.json` | `id`, `type`, `title`, `summary`, `source`, all front matter as `data`, the body as `html`, and `sections`: one entry per H2 with `key`, `heading`, `headingHtml` and `html` (text before the first H2 has the key `lead`) | Pages that place parts of a document, such as a case study card |
| `manifest.json` | Every document in export order with its `type`, both file names, sha256 and length, and a `digest` of the whole bundle | Picking documents, and telling when anything changed |
| `bundle.json` | The manifest with every document's Markdown inline, one file for the whole set. Each tagged release attaches it as `<target>.bundle.json` | Taking everything in one download, such as Neo's weekly refresh |

To use it, pin a tag and export at build time:

```
git clone --quiet --depth 1 --branch v0.2.0 https://github.com/neon1llc/neon1-corpus .corpus
node .corpus/tools/export.mjs --target site
```

Then read only what you need. One document is one small JSON file, and a set such as the case studies is a filter on `manifest.json` by `type`. The export runs in well under a second and needs nothing installed, and nothing is fetched while a page is being viewed.

## As context for AI tools

The corpus is, with some levity, neon1's context window: everything neon1 has written down about itself, in one place, in a form people and AI tools read equally well. The `ai` bundle holds every adopted document. For development work, the standards alone are enough:

```
node tools/export.mjs --target ai --sections standards
```

That's about 80,000 characters, roughly 20,000 tokens. The export already drops front matter. Stripping Markdown further would save only about 5%, mostly link addresses and table padding, and would cost the structure that helps a model read it, so the bundles stay as Markdown. Narrowing by shelf is the better way to save context. Each release also attaches `standards.bundle.json`.

## Contributing

Branch and commit rules follow neon1's [version control standard](corpus/standards/version-control.md), with this repository's additions in [VCS-ETIQUETTE.md](VCS-ETIQUETTE.md). Versions follow the [versioning standard](corpus/standards/versioning.md).

## License

| What | License | What it means |
|---|---|---|
| Documents (everything in `corpus/`) | [CC BY-ND 4.0](LICENSE) | Copy and share them word for word, even commercially, with the credit *"© neon1 LLC (neon1.tech)"*. Don't share altered versions. |
| Blank templates and forms ([`corpus/templates/`](corpus/templates) and [`corpus/forms/`](corpus/forms)) | [CC BY-ND 4.0](LICENSE), plus this permission | *"You may fill in, adapt, and share completed copies of this template for your own work, with or without credit. Please don't republish the blank template as your own."* Templates that look like legal documents remain examples, not legal advice. |
| Tools (`tools/`, `schema/`) | [FSL-1.1-ALv2](LICENSE-CODE) | Read, run and change them for anything except a competing product or service. Each release becomes Apache-2.0 two years after it's published. |
| The neon1, 1NEON, N1 Supply and Ready, Secure, Go names, the logo and brand marks | Reserved | See [TRADEMARK.md](TRADEMARK.md). |

neon1-corpus is © 2026 neon1 LLC. Keep the [NOTICE](NOTICE) file with every copy.
