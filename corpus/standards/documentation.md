---
id: standards-documentation
title: Documentation
summary: "The documents every neon1 project keeps and how they stay true, and how the documents in this Knowledge Center are built, dated, shared, and credited."
type: standard
status: adopted
updated: 2026-11-11
created: 2026-11-09
edition: "1.2"
audience: "Developers"
order: 9
consumers: [knowledge, ai]
pdf: true
origin: "Core 09 (knowledge and governance) and neon1's repository conventions"
related: [standards-writing, standards-development, standards-versioning]
---

# Documentation

Documentation lets someone use, run, or change a project without asking its author. It's written once, in one place, kept next to the code it describes, and updated in the same change as the code.

## Every project has

| File | For | Contains |
|---|---|---|
| `README.md` | Anyone arriving at the project | What it is, who it's for, its status, how to run, test, and deploy it, and its license |
| `CHANGELOG.md` | People using it | What changed in each release, newest first. See [versioning](versioning.md) |
| `LICENSE` | Anyone reusing it | The license text, plus `NOTICE` when required |
| `SECURITY.md` | Anyone who finds a problem | How to report it privately. See the [security disclosure policy](../policies/security.md) |

Larger projects add:

| File | For | Contains |
|---|---|---|
| `VCS-ETIQUETTE.md` or `CONTRIBUTING.md` | Contributors | Any rules stricter than the [version control standard](version-control.md) |
| Decision records | Future maintainers | Why a significant choice was made, the options considered, and what would change it |
| Runbooks | Whoever operates it | Step-by-step tasks such as deploy, roll back, restore, and rotate a secret |

## Write by purpose

Following [Diátaxis](https://diataxis.fr/), each document does one of four jobs, and doesn't mix them:

- **Tutorial:** learning by doing, for a newcomer.
- **How-to:** steps to finish a specific task.
- **Reference:** exact facts to look up, such as commands, settings, and fields.
- **Explanation:** why things are the way they are.

A README usually holds a short version of each and links out when one grows.

## Decision records

Write one when a choice is costly to reverse: a database, a framework, a hosting model, a license. Keep it to a page: the context, the decision, the options rejected and why, and what would make us revisit it. Number them and never delete one. A changed decision gets a new record that replaces the old one. The [tool and architecture decision form](../forms/tool-decision.md) is a template.

## Runbooks

Prerequisites come first, then commands in the order they're run, each with what you should see and what to do if you don't. Commands are copied exactly and tested. A runbook nobody has followed is a draft.

## Keeping docs true

- Docs change in the same commit as the behavior they describe.
- A checked fact beats a remembered one. Commands in a README should be run before a release.
- One source for each fact. Link to it instead of copying it, so it can't drift. That's why neon1's public words live once, in [neon1-corpus](https://github.com/neon1llc/neon1-corpus).

## Documents in this Knowledge Center

Everything here is written once in [neon1-corpus](https://github.com/neon1llc/neon1-corpus), as Markdown, and read from there by the website, the Knowledge Center and its PDFs, and Neo. Each document is built the same way, so a reader always knows where to look.

### What every document carries

| Part | What it says | Where readers see it |
|---|---|---|
| Title | What the document is, in plain words | The page heading and the PDF's title |
| Summary | One sentence on what it covers and who it helps | Under the title, on its card, and in search results |
| Type | Which kind of document it is (below) | The facts under the title |
| Edition | `X.Y`, raised as described in [versioning](versioning.md) | The facts, and the PDF's footer |
| Published | When the content first appeared, from its real history | The facts |
| Updated | When it last changed in substance, shown once it differs from Published | The facts, and the date at the top of the PDF |
| For | Who it's written for, when that isn't everyone | The facts |

Dates are never moved to look newer or older than they are. A typo fix doesn't change Updated or the edition.

### Kinds of document

| Type | Its job | Shape |
|---|---|---|
| Page | Say what neon1 is or offers | Short sections, in the order a newcomer asks |
| Standard | Say how neon1 works and why | What I do, then the reason, then Sources |
| Guide | Help someone finish a task | Who it's for, steps, what to do when it goes wrong, Sources |
| Case study | Show real work honestly | Needs, Execute, Observe, Normalize, with limits stated |
| FAQ | Answer the questions people ask | One question per heading, the answer in its first sentence |
| Policy | Say what's done with information, and rights | Short version first, then sections by question |
| Template and form | Be filled in | Labeled blanks and checkboxes, no advice mixed in |
| Example | Show a template or form filled in | Marked fictional, linked to its blank |
| Comparison | Point to other good options | Who each fits, and when another provider is better |

### Sharing and reuse

- **Link to the page.** Every document has a fixed address under `neon1.tech/knowledge/`, and each section has its own anchor, so a link can point at the exact part.
- **Hand over the PDF.** Documents marked for it print to a PDF with the same text, dated, with its edition in the footer and a link back to the live version, since a PDF travels on its own.
- **Copy word for word.** Documents are shared under CC BY-ND 4.0, credited "© neon1 LLC (neon1.tech)". Blank templates and forms may also be filled in and adapted for your own work.

### Credit where it's due

The practice described here builds on standards bodies, government guides, and practitioners who published what they learned. Documents name them where they're used and list them under Sources, following the [writing standard](writing.md). [Where I learn from](../company/sources.md) gathers them in one place.

## Sources

- [Diátaxis](https://diataxis.fr/), by Daniele Procida: four kinds of documentation, each with its own job.
- [Write the Docs guide](https://www.writethedocs.org/guide/), from the Write the Docs community: docs as code, and keeping documentation next to what it describes.
- [Documenting architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), by Michael Nygard: the short decision record this standard uses.
- [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/): changelogs written for people, newest first.
- [Google SRE workbook](https://sre.google/workbook/table-of-contents/), from Google: runbooks and on-call practice for services that must keep running.
