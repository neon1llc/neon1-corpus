---
id: 1neon-guide-overview
title: "1NEON guide: overview, names, and addresses"
summary: "What 1NEON is, how its frame works, every kind of ID and name it shows, and the address of every page."
type: guide
status: adopted
updated: 2026-11-14
created: 2026-11-10
edition: "1.3"
consumers: [portal, ai]
audience: "People signed in to 1NEON, and Neo inside it"
pdf: false
order: 1
origin: "neon1-1NEON apps/web/src (routes, Shell, Help, Palette) and packages/domain"
---

# 1NEON guide: overview, names, and addresses

1NEON is neon1's client portal at neon1.tech/1NEON. Each client organization runs its projects there with neon1. Every project moves through four layers, N E O N: **Needs** (what's wanted, and the options to get there), **Execute** (the work), **Observe** (the results checked against the goals), and **Normalize** (handover, training, and care, so the change lasts). This guide describes every page, state, and action, so Neo can explain any of them, link to them, show them in a tour, and plan any action with a signed-in person.

## Who's who

- **neon1** is Pradeep's one-person business. In 1NEON, neon1 is the *operator*: it proposes options, does the work, and can enter every client organization. The operator role comes from sign-in configuration, never from data in the portal.
- **A client organization** (also called an organization, a client, or a tenant) is one business or household neon1 works with. Its people are invited by its admins or by neon1.
- **neon1's own organization** has the slug `neon1` and the client ID **N1-0001**. There neon1 is also the client, so neon1's people may approve options and name decision makers, which they can't do in any other organization.
- **A member** is a person in an organization, with one access level there: viewer, editor, or admin. One person can belong to several organizations with a different level in each.

## IDs and names people see

| Looks like | What it is | Where it shows |
|---|---|---|
| `N1-0001`, `N1-0002` | An organization's **client ID**, numbered in the order clients joined. N1-0001 is neon1 itself. Used in the organization chooser, on All clients, and on invoices. | Chooser, All clients, organization header |
| `acme-dental` | An organization's **slug**, its handle in addresses | `/1NEON/o/acme-dental/...` |
| `FLOW-1`, `MIG-2`, `HOME-1`, `PRJ-3` | A **project key**: a prefix from the project's template plus a number counted per organization and prefix | Cards, lists, the project page, search |
| `0039`, `0039-r2` | A **proposal number** and one of its **revisions**. Each project has one proposal; the first 1NEON issued is 0039, and each change is issued as the next revision | The proposal strip under Options, the proposal page, its PDF and Word copies |
| `0039-r2-B` | An **option ID**: the revision and the option's letter. A decision names the ID it approved | Options, decisions, purchases bought for an option |
| `INV-0039-01` | An **invoice number**: the proposal's number (or the project key when there's no proposal) and the invoice's place in the project. Set when neon1 issues it | Invoices, the invoice page, card statements (`NEON1* INV003901`) |
| Item titles | Items (requests, tasks, options, measures, and so on) are shown by title; their IDs only appear in links (`#item-…`) | Inside a project |

Project key prefixes come from the template chosen in New project: Blank is `PRJ`, Cloud migration is `MIG`, Workflow automation is `FLOW`, AI assistant is `AI`, Security readiness is `SEC`, and Personal or home tech is `HOME`. The number after the dash counts up per prefix within one organization, so `MIG-1` in two organizations are two different projects.

## The frame around every signed-in page

- **Menu** (top left; **Menu** at the bottom on phones) opens every page: Home, Board, Projects, Files, Insights, People, Settings, the four layers, and your profile. Choosing **Mini** on the profile also keeps a slim column of icons on the left.
- **Organization chooser** at the top of the menu switches between organizations a person belongs to. neon1 also sees **All clients** there.
- **Search** (the search button, Ctrl K or ⌘K, or `/`) jumps to any page or project and starts common actions: Start a new project and Upload a file for editors and admins, Invite people for admins.
- **?** (top right) opens help for the page in view: what it's for, a few how-tos, **Show me on this page** (a spotlight tour of that page), and **Full tour**.
- **The bell** glows when something new happened in the organization: a file upload, a decision, a stage move, a new comment, and similar. Opening it lists what changed and who did it.
- **Neo** sits at the bottom right: the assistant that answers questions, links to pages, runs tours, and, with the person's go-ahead, does things for them.
- **A read-only banner** shows on All clients: "read only. Open a client to make changes."

## Themes

A person picks a look on their profile: **Awake** (light, the default), **Matrix** (dark, green on black, like the landing page's rain), or **Device** (follows the device's light or dark setting). Neo's window follows the same look as the page around it.

## Addresses

Every signed-in page lives under `https://neon1.tech/1NEON/`. In the table, `{org}` is the organization's slug and `{KEY}` a project key.

| Page | Address |
|---|---|
| Sign-in | `/1NEON/` |
| Home (the organization's starting page) | `/1NEON/o/{org}/workspace` |
| Board | `/1NEON/o/{org}/workflow` |
| Projects (list and timeline) | `/1NEON/o/{org}/projects` |
| New project | `/1NEON/o/{org}/projects/new` |
| One project, Overview | `/1NEON/o/{org}/projects/{KEY}` |
| One project, a layer | `/1NEON/o/{org}/projects/{KEY}/needs`, `/execute`, `/observe`, or `/normalize` |
| Options on a project | `/1NEON/o/{org}/projects/{KEY}/needs#options` |
| The project's proposal | `/1NEON/o/{org}/projects/{KEY}/proposal` |
| A project's invoices | `/1NEON/o/{org}/projects/{KEY}/execute#billing` |
| One invoice | `/1NEON/o/{org}/projects/{KEY}/invoices/{invoiceId}` |
| The service agreement, to sign | `/1NEON/o/{org}/agreement` |
| Files asked for on a project | `/1NEON/o/{org}/projects/{KEY}/needs#files` |
| One item on a project | `/1NEON/o/{org}/projects/{KEY}/{layer}#item-{itemId}` |
| One layer across all projects | `/1NEON/o/{org}/layer/needs` (also `execute`, `observe`, `normalize`) |
| People | `/1NEON/o/{org}/people` |
| Files | `/1NEON/o/{org}/documents` |
| Insights | `/1NEON/o/{org}/insights` |
| Settings | `/1NEON/o/{org}/settings` |
| Your profile | `/1NEON/me` (two-step verification at `/1NEON/me#security`) |
| All clients (neon1 only) | `/1NEON/all/workflow` |
| FAQs, public | `/1NEON/faqs` |
| Guided walkthrough, public, the way in | `/1NEON/live` (short ones: `?play=invite`, `passkey`, `authenticator`, `texts`, `start`, `needs`, `listen`, `propose`, `decide`, `build`, `observe`, `handover`, `care`, `team`, `profile`, `signin`) |
| Sample project, public | `/1NEON/example` |
| Interactive demo, public | `/1NEON/demo/` |
| Privacy, terms, cookies, service agreement | `/1NEON/privacy`, `/1NEON/terms`, `/1NEON/cookies`, `/1NEON/agreement` |

The address word for Execute is `execute` and for Normalize is `normalize`. Older links that say `execution` or `next` still work.

## Spotlight anchors

Tours point at named spots on a page. Each name below exists only on the page listed, and only while that part is on screen.

| Anchor | Page | What it is |
|---|---|---|
| `nav-home`, `nav-board`, `nav-projects`, `nav-layers`, `nav-files`, `nav-me` | Every page | Menu entries (the menu must be open, or Mini on) |
| `menu` | Every page | The menu button |
| `search` | Every page | The search button |
| `help` | Every page | The ? button |
| `notifications` | Organization pages | The bell |
| `needs-you`, `coming-up`, `get-started`, `activity` | Home | Needs you, Coming up, Get started, Recent activity |
| `board-column`, `board-card` | Board, All clients | A stage column, a project card |
| `new-project`, `project-list` | Projects | New project button, the list |
| `next-step`, `stage`, `layers` | One project | Next step box, the stage line, the layer tabs |
| `proposal` | One project, Needs | The proposal strip under Options: the revision, its price check, and Issue or Read the proposal |
| `wizard` | New project | The questions |
| `layer-list` | One layer across projects | The list |
| `invite`, `people-list` | People | Invite people, the list of people |
| `upload` | Files | The upload area |
| `kpis`, `weekly`, `by-layer` | Insights | The numbers on top, Finished per week, Projects by layer |
| `stages` | Settings | The stage rows |
| `passkey` | Profile | Two-step verification |
