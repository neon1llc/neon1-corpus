---
id: 1neon-guide-pages
title: "1NEON guide: every page, what it shows, and who can do what"
summary: "Each signed-in 1NEON page: what it's for, what's on it, its states, and the actions on it with the access each one needs."
type: guide
status: adopted
updated: 2026-11-13
created: 2026-11-10
edition: "1.3"
consumers: [portal, ai]
audience: "People signed in to 1NEON, and Neo inside it"
pdf: false
order: 3
origin: "neon1-1NEON apps/web/src/pages and components/Help.tsx"
---

# 1NEON guide: every page, what it shows, and who can do what

Access levels are cumulative. **Viewers** read, comment, add requests, and approve when they're a project's decision maker. **Editors** also add and change work. **Admins** also invite people, change access, change settings, and delete projects, files, and others' comments. Admin actions also need a recent "confirm it's you" (see the people and account guide). neon1, the operator, acts as an admin in every organization but never approves for a client.

## Home

`/1NEON/o/{org}/workspace`. The starting point: what needs you, and what changed lately.

- **Needs you** lists things waiting on you, most pressing first, each with the one action it asks for: **See and pay** (an invoice with a balance, with the amount and due date, or marked overdue), **Compare options** (an approval), **Review and accept** (a handover with every step done), **Upload file** (a file asked for), or **Open** (your task or item). For neon1, an invoice draft waits with **Check it**. "You're all caught up" when empty.
- **Coming up** shows this week and the next two as a strip of days, each mark a due date, milestone, or project target, then everything dated in the next six weeks listed by Overdue, This week, Next week, and Later.
- **Get started** is a setup checklist that disappears once done: take the tour; start your first project (editors); invite your team (admins); add a second step for admin actions (admins).
- **Recent activity**: what people did lately, newest first.

## Board

`/1NEON/o/{org}/workflow`. Every project as a card in its stage. Drag a card to move it (editors and admins), or use **Move to** on a phone. Moving forward past Decide without an approved option asks for a reason. Each column shows "Done when" and its project count, and a limit if one is set.

## Projects

`/1NEON/o/{org}/projects`. All projects, as a **List** (stage, health, target date; filter by layer; sort by stage, target date, or recent changes) or a **Timeline** (each project drawn from its start to its target date, colored by layer; the dashed line is today, the diamond the target, red stripes time past the target, and each row says its stage and days left). **New project** starts one (editors and admins).

## New project

`/1NEON/o/{org}/projects/new`. A few short steps: pick a template, name it, describe it and its outcome, give one real example, an optional target date, sensitive-data flags, and optional measures. Editors and admins only.

## One project

`/1NEON/o/{org}/projects/{KEY}`, with tabs Overview, Needs, Execute, Observe, and Normalize (`/needs`, `/execute`, `/observe`, `/normalize`). The header shows the key, the stage and how long it has been there, the name with its health, and the onion. **Next step** sits on top. Details are in the projects guide. Actions:

| Action | Who |
|---|---|
| Read, comment on items | Everyone in the organization |
| Add a request | Everyone, viewers too |
| Add, edit, tick off, or delete tasks, questions, measures, checks, and other items | Editors and admins |
| Edit name, summary, outcome, target date; set health; post a status update; move stage; archive | Editors and admins |
| Change people on the project (not the decision maker) | Editors and admins |
| Name or change the decision maker | Admins of the client, after confirming it's them (in N1-0001 also neon1) |
| Approve an option, with a typed signature | The named decision maker; with none named, a client admin. Only from an issued revision, within its price check, once the service agreement is signed |
| Ask neon1 to refresh a revision past its price check | Whoever may approve |
| Initial a purchase neon1 buys; check and accept a handover step | Whoever may approve |
| Add, share, or withdraw options; issue the proposal or its next revision | neon1 only |
| Add a purchase, attach a receipt, mark it bought, installed, or returned | Editors and admins (neon1 marks its own purchases bought only after the decision maker's initials) |
| Read issued invoices; pay one online | Everyone in the client organization |
| Draft, issue, void, or credit an invoice; record a check, Zelle, or wire payment | neon1 only |
| Move to Trash | Admins, after confirming it's them, typing the project's key |

Files asked for show under Needs with **Upload**. The proposal, purchases, invoices, and paying are described in the projects guide. Measures take dated readings. Someone else editing the same item shows as a small avatar beside the project's name.

## The proposal

`/1NEON/o/{org}/projects/{KEY}/proposal`. The project's proposal on neon1's letterhead: the latest issued revision (such as 0039-r2), or the draft before the first is issued, with earlier revisions marked as replaced. **Print or save as PDF** and **Download Word** keep a copy. Once an option is approved, it shows the signed approval recorded against that revision. Everyone in the organization can read it.

## An invoice

`/1NEON/o/{org}/projects/{KEY}/invoices/{id}`. One invoice on neon1's letterhead, ready to print or save as a PDF: its number, dates, bill to, lines, tax, total, credits, payments, the balance due, the terms, and how to pay. **Back to invoices** returns to the project's Invoices. A draft says "Draft, only neon1 sees it. Issuing numbers it and shows it to the client."

## The service agreement

`/1NEON/o/{org}/agreement` (signed in) and `/1NEON/agreement` (public). neon1's service agreement, its edition, and its **Signatures**: who signed which edition and when. An admin of the client organization reads it and signs it once, with a typed name and the consent box. On success: "Signed. Thank you; a copy is kept with your organization's records."

## One layer across projects

`/1NEON/o/{org}/layer/{needs|execute|observe|normalize}`. Every project's items for one layer in one list. Open a project to add or change its items.

## People

`/1NEON/o/{org}/people`. Who's in the organization, their title, access, and status.

- **Invite people** (admins): one or more emails, an access level (viewer, editor, or admin), and optional names and titles. Each person gets an email with a link and signs in with a code. Up to 50 at once.
- Each invitation shows whether its email went out: queued, sent, or failed. **Resend** sends it again (rate limited).
- Admins change someone's access or title, or **deactivate** them, which signs them out and ends their access. Reactivating brings them back.
- Member statuses: **Invited** (hasn't signed in yet), **Joined**, **Deactivated**.
- neon1's own access shows without a way to change it.

## Files

`/1NEON/o/{org}/documents`. Every file shared in the organization. **Upload** (everyone in the organization, viewers too) a file up to 100 MB, and pick its project, or none for a general file. Each file goes through states: **Receiving** (uploading), **Checking** (virus scan and size check), **Ready** (clean, opens or downloads), **Rejected** (the scan found a threat), or **Failed** (missing, the wrong size, or a scan that couldn't finish). PDFs, pictures, and text open in a new tab; anything else downloads. The uploader and admins can delete a file. No passwords, keys, or regulated data without an agreement that covers it.

## Insights

`/1NEON/o/{org}/insights`. Charts from the organization's own data: open and overdue work, the on-time rate, days to a decision, measures at target, items finished per week for the last eight weeks, projects by layer, and health. Work counts as finished on the day it was marked done. The page explains how each number is counted.

## Settings

`/1NEON/o/{org}/settings`. Who signed the service agreement and which edition, or "not signed yet", with **Read and sign** (or **Read it** once signed). Then the stages on the board. Each row: name, layer, "Done when", and an optional limit; **Show** or **Hide**; reorder. **Save workflow** saves all at once (admins, after confirming it's them). A stage that holds projects can't be removed.

## Your profile

`/1NEON/me`. Name, title, phone (only you see it), theme (Awake, Matrix, or Device), menu (Default or Mini), and **Notifications**: for each group (files; people and access; decisions and options; agreements, invoices, and payments; workflow and stages; comments; updates and items; sign-ins) whether it reaches you by email, by text, or neither. Then **Save**. Also here: texts (add a mobile number, agree to texts, confirm the code), **Two-step verification** at `#security` (passkey, authenticator app, text-message codes), **Replay the tutorial**, and **Sign out**. Two-step changes and signing out take effect at once.

## All clients

`/1NEON/all/workflow`, neon1 only. Every client's projects on one read-only board, **By organization** (each organization with its client ID, such as N1-0001, and how many projects are active) or **One board**. To change anything, open the client.

## Public pages

The sign-in screen (`/1NEON/`), FAQs, the service agreement, the sample project, the guided walkthrough, the interactive demo, and the policies need no account. Neo on the sign-in screen is the public Neo, which only knows neon1's public pages.
