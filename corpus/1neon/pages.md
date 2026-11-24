---
id: 1neon-guide-pages
title: "1NEON guide: every page, what it shows, and who can do what"
summary: "Each signed-in 1NEON page: what it's for, what's on it, its states, and the actions on it with the access each one needs."
type: guide
status: adopted
updated: 2026-11-24
created: 2026-11-10
edition: "1.19"
consumers: [portal, ai]
audience: "People signed in to 1NEON, and Neo inside it"
pdf: false
order: 3
origin: "neon1-1NEON apps/web/src/pages and components/Help.tsx"
---

# 1NEON guide: every page, what it shows, and who can do what

Access levels build up. **Viewers** read, comment, add requests, and approve when they're a project's decision maker. **Editors** also add and change work. **Admins** also invite people, change access and settings, and delete projects, files, and others' comments, after a recent "confirm it's you". neon1 acts as an admin everywhere but never approves for a client.

## Home

`/1NEON/o/{org}/workspace`.

- **Needs you** lists what's waiting on you, most pressing first, each with its action: **See and pay** (an invoice due, overdue, or whose bank payment failed, but not one clearing), **Compare options**, **Review and accept**, **Upload file**, or **Open**. neon1 sees invoice drafts with **Check it**. Empty, it says "You're all caught up".
- **Coming up** shows three weeks of due dates, milestones, and targets, then the next six weeks by Overdue, This week, Next week, and Later.
- **Get started** is a setup checklist that disappears once done: the tour, a first project (editors), inviting the team, and a second step for admin actions (admins).
- **Your account**, in a free account only, shows the date it's deleted if nothing changes, with **Keep it 30 more days** (once) and **Download a copy**.
- **Get to know 1NEON**, in the side column for everyone but neon1's own people, links to **A sample project**, **From sign-up to client** (**The guided walkthrough** for neon1's own clients), **Try the demo**, **FAQs**, and, in a free account, **How accounts work**. **Hide** puts it away, and the profile's Tutorial setting brings it back.
- **Next step**, above Needs you for editors and admins (not neon1's own people), is where a project goes from outlined to assessed. A free account always sees it. A client organization sees it only while a project is waiting for an assessment: no options yet, and in the first stage.
  - With no projects, it says to outline one (up to three) with **Start a project**.
  - A free account lists each project with a six-segment meter of outline parts written, a tip for what's missing, and **Continue**. A fully outlined project says "Fully outlined" with **Review**. A client organization sees only what was sent and when.
  - Under the list, a required note of at least 20 characters and a checkbox for each project, up to three. **Request assessment** opens a last look at the projects, the note, and what each could still say. **Submit request** (or **Submit request anyway**) locks the box. **Keep editing** goes back.
  - A saved request goes to neon1 30 minutes after its last change, and never within an hour of the previous email. Until then **Edit** unlocks it and **Withdraw** stops it. After it goes, the card says "Sent" with the date, and an edit sends neon1 "Assessment request updated". The reply comes by email.
  - In a free account, **Book a 30-minute call** opens the booking page, or **ask me to email you** sends a call request with an optional note, once a week. A client organization sees **Contact neon1**. Neither the call nor the assessment needs the other first.

How the assessment and outline work is in [how 1NEON accounts work](../guides/free-accounts.md#what-to-write).

## Board, projects, and layers

| Page | Address | What it shows |
|---|---|---|
| Board | `/1NEON/o/{org}/workflow` | Every project as a card in its stage, with "Done when", the count, and any limit |
| Projects | `/1NEON/o/{org}/projects` | A **List** (stage, health, target date, filtered by layer, sorted by stage, target date, or recent changes) or a **Timeline** (each project from start to target, colored by layer). **New project** (editors and admins) |
| New project | `/1NEON/o/{org}/projects/new` | A template, name, description, outcome, one real example, and optionally a target date, sensitive-data flags, and measures |
| One layer | `/1NEON/o/{org}/layer/{needs\|execute\|observe\|normalize}` | One layer's items across every project. Open a project to change them |
| All clients | `/1NEON/all/workflow` | neon1 only. Every client's projects on one read-only board, **By organization** or **One board** |

## One project

`/1NEON/o/{org}/projects/{KEY}`, with tabs Overview, Needs, Execute, Observe, and Normalize (`/needs`, `/execute`, `/observe`, `/normalize`). The header shows the key, stage and time in it, name, health, and the onion, under **Next step**. Until a decision is made, the Overview shows **Ready for Execute** (see the projects guide). Files asked for show under Needs with **Upload**, and measures take dated readings.

| Action | Who |
|---|---|
| Read, comment on items, add a request | Everyone in the organization |
| Add, edit, tick off, or delete other items. Edit name, summary, outcome, target date. Set health, post a status update, move stage, archive. Change people (not the decision maker) | Editors and admins |
| Name or change the decision maker | Client admins, after confirming it's them (in N1-0001 also neon1) |
| Approve an option, with a typed signature, ask neon1 to refresh a revision past its price check, initial a purchase neon1 buys, check and accept a handover step | The named decision maker, or with none named, a client admin. Approving only from an issued revision, within its price check, once the service agreement is signed |
| Add, share, or withdraw options, issue the proposal or its next revision. Draft, issue, void, or credit an invoice, record a check, Zelle, or wire payment | neon1 only |
| Add a purchase, attach a receipt, mark it bought, installed, or returned | Editors and admins (neon1 marks its own purchases bought only after the decision maker's initials) |
| Read issued invoices, pay one online | Everyone in the client organization |
| Move to Trash | Admins, after confirming it's them, typing the project's key |

## The proposal, an invoice, and the agreement

- **The proposal** (`/1NEON/o/{org}/projects/{KEY}/proposal`) is on neon1's letterhead for everyone in the organization: the latest revision (or the draft before the first), earlier ones marked replaced, and any signed approval. **Print or save as PDF** and **Download Word** keep a copy.
- **An invoice** (`/1NEON/o/{org}/projects/{KEY}/invoices/{id}`) is on neon1's letterhead, ready to print or save as a PDF. **Back to invoices** returns to the project.
- **The service agreement** (`/1NEON/o/{org}/agreement` signed in, `/1NEON/agreement` public) shows its edition and **Signatures**: who signed which edition and when. A client admin signs it once.

## People, files, insights, and settings

- **People** (`/1NEON/o/{org}/people`) shows who's in the organization, with title, access, and status (**Invited**, **Joined**, **Deactivated**). Admins **Invite people** (up to 50 emails at once, with an access level and optional names and titles), see whether each invitation went out (queued, sent, or failed), **Resend** (rate limited), change access or titles, or **deactivate** someone until reactivated. neon1's own access shows without a way to change it.
- **Files** (`/1NEON/o/{org}/documents`) lists every file. Anyone, viewers too, can **Upload** to a project or none, up to 100 MB. Files move through **Receiving**, **Checking** (virus and size), **Ready**, **Rejected** (a threat found), or **Failed**. PDFs, pictures, and text open in a tab, and others download. Uploaders and admins can delete.
- **Insights** (`/1NEON/o/{org}/insights`) charts open and overdue work, the on-time rate, days to a decision, measures at target, items finished per week for eight weeks, projects by layer, and health.
- **Settings** (`/1NEON/o/{org}/settings`) has **Where**: the organization's website and where it's based, checked as on sign-up. Any admin can **Change** it without confirming. It's optional. It also shows the agreement's signer and edition (or "not signed yet") with **Read and sign**, and the board's stages: name, layer, "Done when", optional limit, **Show** or **Hide**, and order. **Save workflow** saves all (admins, after confirming it's them). A stage holding projects can't be removed.
- **Your profile** (`/1NEON/me`) has name, title, phone (only you see it), theme, menu (Default or Mini), and **Notifications** by group (email, text, or neither). Most changes save by themselves. Also here: texts, **Two-step verification** at `#security`, **Replay the tutorial**, and **Sign out**. Two-step changes and signing out take effect at once.
- **Contact** (`/1NEON/contact`), in the menu for every account, has email hello@neon1.tech, call or text (424) 32-neon1, and a booked call, with the hours I answer. Anything about a project is best written in that project.

## Public pages

The sign-in screen (`/1NEON/`), FAQs, service agreement, sample project, guided walkthrough, interactive demo, and policies are open without signing in. Neo on the sign-in screen is the public Neo, which only knows neon1's public pages.
