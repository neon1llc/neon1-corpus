---
id: 1neon-guide-overview
title: "1NEON guide: overview, names, and addresses"
summary: "What 1NEON is, how its frame works, every kind of ID and name it shows, and the address of every page."
type: guide
status: adopted
updated: 2026-11-23
created: 2026-11-10
edition: "1.9"
consumers: [portal, ai]
audience: "People signed in to 1NEON, and Neo inside it"
pdf: false
order: 1
origin: "neon1-1NEON apps/web/src (routes, Shell, Help, Palette) and packages/domain"
---

# 1NEON guide: overview, names, and addresses

1NEON is neon1's client portal at neon1.tech/1NEON, where each client organization runs its projects with neon1. Every project moves through four layers, N E O N: **Needs** (what's wanted, and the options), **Execute** (the work), **Observe** (results checked against the goals), and **Normalize** (handover, training, and care).

## Who's who

- **neon1** is the *operator*. It proposes options, does the work, and can enter every client organization. The role comes from sign-in configuration, never from portal data.
- **A client organization** is one business or household neon1 works with. Its admins or neon1 invite its people.
- **neon1's own organization** has the slug `neon1` and the client ID **N1-0001**. There neon1 is also the client, so its people may approve options and name decision makers, which they can't do anywhere else.
- **A member** is a person in an organization with one access level there: viewer, editor, or admin. One person can belong to several organizations at different levels.

## IDs people see

| Looks like | What it is |
|---|---|
| `N1-0001`, `N1-0002` | A **client ID**, numbered in the order clients joined |
| `acme-dental` | An organization's **slug**, its handle in addresses (`/1NEON/o/acme-dental/...`) |
| `FLOW-1`, `MIG-2`, `HOME-1`, `PRJ-3` | A **project key**: a prefix from the project's template (`PRJ` Blank, `MIG` Cloud migration, `FLOW` Workflow automation, `NET` Networks, `AI` AI assistant, `SEC` Security readiness, `HOME` Personal or home tech) and a number counted per organization and prefix, so `MIG-1` in two organizations are two projects |
| `0039`, `0039-r2` | A **proposal number** and one of its **revisions**. Each project has one proposal, and each change is issued as the next revision |
| `0039-r2-B` | An **option ID**: the revision and the option's letter. A decision names the ID it approved |
| `INV-0039-01` | An **invoice number**: the proposal's number (or the project key) and the invoice's place in the project. Card statements show `NEON1* INV003901` |

Items are shown by title. Their IDs only appear in links (`#item-…`).

## The frame around every signed-in page

- **Menu** (top left, **Menu** at the bottom on phones) opens every page. Choosing **Mini** on the profile also keeps a slim column of icons.
- **Organization chooser** at the top of the menu switches organizations. neon1 also sees **All clients**, read only ("Open a client to make changes").
- **Search** (the button, Ctrl K or ⌘K, or `/`) jumps to any page or project and starts common actions.
- **?** (top right) opens help for the page in view, with **Show me on this page** (a spotlight tour) and **Full tour**.
- **The bell** glows when something new happened in the organization and lists what changed and who did it.
- **Neo** sits at the bottom right. It answers questions, links to pages, runs tours, and with the person's go-ahead does things for them.

Themes: Sentinel (**Providence** light, the default, and **Desert of the real** dark) and Matrix (**Awake** light and **Plugged** dark). **Match my device** follows the device setting.

## Addresses

Signed-in pages live under `https://neon1.tech/1NEON/`. `{org}` is the organization's slug and `{KEY}` a project key.

| Page | Address |
|---|---|
| Sign-in | `/1NEON/` |
| Home | `/1NEON/o/{org}/workspace` |
| Board | `/1NEON/o/{org}/workflow` |
| Projects (list and timeline), New project | `/1NEON/o/{org}/projects`, `/1NEON/o/{org}/projects/new` |
| A project, Overview | `/1NEON/o/{org}/projects/{KEY}` |
| A project's layer | `/1NEON/o/{org}/projects/{KEY}/needs`, `/execute`, `/observe`, or `/normalize` |
| Options, files asked for, invoices, one item | `.../{KEY}/needs#options`, `.../needs#files`, `.../execute#billing`, `.../{layer}#item-{itemId}` |
| Proposal, one invoice | `.../{KEY}/proposal`, `.../{KEY}/invoices/{invoiceId}` |
| The service agreement, to sign | `/1NEON/o/{org}/agreement` |
| One layer across all projects | `/1NEON/o/{org}/layer/needs` (also `execute`, `observe`, `normalize`) |
| People, Files, Insights, Settings | `/1NEON/o/{org}/people`, `/documents`, `/insights`, `/settings` |
| Your profile | `/1NEON/me` (two-step verification at `/1NEON/me#security`) |
| All clients (neon1 only) | `/1NEON/all/workflow` |
| FAQs, public | `/1NEON/faqs` |
| Guided walkthrough, public | `/1NEON/live` (whole story: `?play=full`. Short ones: `?play=free`, `invite`, `passkey`, `authenticator`, `texts`, `calendar`. One chapter: `?play=signin`, `profile`, `team`, `start`, `needs`, `listen`, `propose`, `decide`, `pay`, `build`, `change`, `observe`, `handover`, `final`, `care`, client: `&scenario=harborline`, `quillwork`, or `fenwick`) |
| Sample project, public | `/1NEON/example` (`?scenario=harborline`, `quillwork`, or `fenwick`) |
| Interactive demo, public | `/1NEON/demo/` |
| Privacy, terms, cookies, service agreement | `/1NEON/privacy`, `/1NEON/terms`, `/1NEON/cookies`, `/1NEON/agreement` |

Older links that say `execution` or `next` still work.

## Spotlight anchors

Tours point at named spots, which exist only on the page listed and only while on screen.

- **Every page:** `nav-home`, `nav-board`, `nav-projects`, `nav-layers`, `nav-files`, `nav-me` (menu entries, with the menu open or Mini on), `menu`, `search`, `help`.
- **Organization pages:** `notifications` (the bell).
- **Home:** `needs-you`, `coming-up`, `get-started`, `activity`.
- **Board, All clients:** `board-column`, `board-card`.
- **Projects:** `new-project`, `project-list`.
- **One project:** `next-step`, `stage`, `layers`, and on Needs `proposal` (the proposal strip under Options).
- **New project:** `wizard`. **One layer across projects:** `layer-list`.
- **People:** `invite`, `people-list`. **Files:** `upload`.
- **Insights:** `kpis`, `weekly`, `by-layer`. **Settings:** `stages`. **Profile:** `passkey`.
