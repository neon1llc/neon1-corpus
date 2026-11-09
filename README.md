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
| [`corpus/policies/`](corpus/policies) | Privacy policy, terms of use, cookie notice |
| `corpus/templates/`, `corpus/forms/` | Coming next: proposal and agreement examples, intake forms |

Everything here is public. Nothing private belongs in this repository, even as a draft.

## How a document looks

Each file is Markdown with front matter that tells tools what it is and who reads it:

```yaml
---
id: services
title: Services
summary: Four kinds of help, from automating a small business to SOC 2 readiness.
type: page            # page, policy, template, form, faq or case-study
status: adopted       # draft, adopted or retired. Only adopted documents are exported
updated: 2026-11-09
consumers: [site, chat, knowledge, ai]
pdf: true             # offered as a PDF download in the knowledge area
origin: "neon1-site src/app/public/index.html#services"
---
```

The full rules are in [`schema/doc.schema.json`](schema/doc.schema.json).

## Tools

Node 22, no dependencies.

```
node tools/lint.mjs                     # front matter, links, and checks for anything that looks private
node tools/export.mjs --target chat     # writes dist/chat/ with a manifest. Also site, knowledge or ai
```

Exported files are flat and named by `id`, with a `manifest.json` that lists their order, sha256 and length, plus a digest of the whole bundle. Consumers pin a tag of this repo and read its export.

## Contributing

Branch and commit rules are in [VCS-ETIQUETTE.md](VCS-ETIQUETTE.md).

## License

The tools (`tools/`, `schema/`) are under the [MIT License](LICENSE). The documents in `corpus/`, along with the neon1 name, brand marks, copy and case studies, are © neon1 LLC and aren't licensed for reuse. Quoting with a link back is welcome.
