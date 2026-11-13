---
id: 1neon-guide-pages
title: "1NEON guide: every page, what it shows, and who can do what"
summary: "Each signed-in 1NEON page: what it's for, what's on it, its states, and the actions on it with the access each one needs."
type: guide
status: adopted
updated: 2026-11-13
created: 2026-11-10
edition: "1.4"
consumers: [portal, ai]
audience: "People signed in to 1NEON, and Neo inside it"
pdf: false
order: 3
origin: "neon1-1NEON apps/web/src/pages and components/Help.tsx"
---

# 1NEON guide: every page, what it shows, and who can do what

Access levels build on each other. **Viewers** read, comment, add requests, and approve when they're a project's decision maker. **Editors** also add and change work. **Admins** also invite people, change access and settings, and delete projects, files, and others' comments, after a recent "confirm it's you". neon1 acts as an admin everywhere but never approves for a client.

## Home

`/1NEON/o/{org}/workspace`. The starting point: what needs you, and what changed lately.

- **Needs you** lists what's waiting on you, most pressing first, each with its action: **See and pay** (an invoice due, overdue, or whose bank payment failed, but not one clearing), **Compare options**, **Review and accept** (a finished handover), **Upload file**, or **Open**. neon1 sees invoice drafts with **Check it**. Empty, it says "You're all caught up".
- **Coming up** shows three weeks as a strip of days marked with due dates, milestones, and targets, then the next six weeks listed by Overdue, This week, Next week, and Later.
- **Get started** is a setup checklist that disappears once done: the tour, a first project (editors), inviting the team, and a second step for admin actions (admins).
- **Recent activity**: what people did lately, newest first.

## Board

`/1NEON/o/{org}/workflow`. Every project as a card in its stage. Editors and admins drag cards, or use **Move to** on a phone; passing Decide without an approval asks for a reason. Columns show "Done when", the count, and any limit.

## Projects

`/1NEON/o/{org}/projects`. All projects, as a **List** (stage, health, target date; filter by layer; sort by stage, target date, or recent changes) or a **Timeline** (each project drawn from its start to its target date, colored by layer; the dashed line is today, the diamond the target, red stripes time past the target, and each row says its stage and days left). **New project** starts one (editors and admins).

## New project

`/1NEON/o/{org}/projects/new`. Editors and admins pick a template, name and describe it, give its outcome and one real example, and optionally a target date, sensitive-data flags, and measures.

## One project

`/1NEON/o/{org}/projects/{KEY}`, with tabs Overview, Needs, Execute, Observe, and Normalize (`/needs`, `/execute`, `/observe`, `/normalize`). The header shows the key, stage and time in it, name, health, and the onion, under **Next step**. Details are in the projects guide. Actions:

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

Files asked for show under Needs with **Upload**, and measures take dated readings. Someone else editing shows as a small avatar beside the name.

## The proposal

`/1NEON/o/{org}/projects/{KEY}/proposal`. The proposal on neon1's letterhead, for everyone in the organization: the latest revision (such as 0039-r2), or the draft before the first, with earlier ones marked as replaced and any signed approval shown. **Print or save as PDF** and **Download Word** keep a copy.

## An invoice

`/1NEON/o/{org}/projects/{KEY}/invoices/{id}`. One invoice on neon1's letterhead, ready to print or save as a PDF: its number, dates, bill to, lines, tax, total, credits, payments, the balance due, the terms, and how to pay. **Back to invoices** returns to the project's Invoices. A draft says "Draft, only neon1 sees it. Issuing numbers it and shows it to the client."

## The service agreement

`/1NEON/o/{org}/agreement` (signed in) and `/1NEON/agreement` (public). The agreement, its edition, and **Signatures**: who signed which edition and when. A client admin signs it once with a typed name and the consent box.

## One layer across projects

`/1NEON/o/{org}/layer/{needs|execute|observe|normalize}`. One layer's items across every project. Open a project to change them.

## People

`/1NEON/o/{org}/people`. Who's in the organization, their title, access, and status.

- **Invite people** (admins): up to 50 emails at once, with an access level and optional names and titles. Each gets an email link and signs in with a code.
- Each invitation shows whether its email went out: queued, sent, or failed. **Resend** sends it again (rate limited).
- Admins change access or titles, or **deactivate** someone, ending their access until reactivated.
- Member statuses: **Invited** (hasn't signed in yet), **Joined**, **Deactivated**.
- neon1's own access shows without a way to change it.

## Files

`/1NEON/o/{org}/documents`. Every file in the organization. Anyone, viewers too, can **Upload** up to 100 MB, to a project or none. Files move through **Receiving**, **Checking** (virus and size), **Ready**, **Rejected** (a threat found), or **Failed** (missing, wrong size, or the scan didn't finish). PDFs, pictures, and text open in a tab; others download. Uploaders and admins can delete. No passwords, keys, or regulated data without an agreement that covers it.

## Insights

`/1NEON/o/{org}/insights`. Charts from the organization's own data: open and overdue work, the on-time rate, days to a decision, measures at target, items finished per week for the last eight weeks, projects by layer, and health. Work counts as finished on the day it was marked done. The page explains how each number is counted.

## Settings

`/1NEON/o/{org}/settings`. The service agreement's signer and edition, or "not signed yet", with **Read and sign**. Then the board's stages, each with name, layer, "Done when", optional limit, **Show** or **Hide**, and order. **Save workflow** saves all (admins, after confirming it's them). A stage holding projects can't be removed.

## Your profile

`/1NEON/me`. Name, title, phone (only you see it), theme (Awake, Matrix, or Device), menu (Default or Mini), and **Notifications**: for each group (files; people and access; decisions and options; agreements, invoices, and payments; workflow and stages; comments; updates and items; sign-ins) whether it reaches you by email, by text, or neither. Then **Save**. Also here: texts (add a mobile number, agree to texts, confirm the code), **Two-step verification** at `#security` (passkey, authenticator app, text-message codes), **Replay the tutorial**, and **Sign out**. Two-step changes and signing out take effect at once.

## All clients

`/1NEON/all/workflow`, neon1 only. Every client's projects on one read-only board, **By organization** (each organization with its client ID, such as N1-0001, and how many projects are active) or **One board**. To change anything, open the client.

## Public pages

The sign-in screen (`/1NEON/`), FAQs, the service agreement, the sample project, the guided walkthrough, the interactive demo, and the policies need no account. Neo on the sign-in screen is the public Neo, which only knows neon1's public pages.
