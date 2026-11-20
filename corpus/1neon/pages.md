---
id: 1neon-guide-pages
title: "1NEON guide: every page, what it shows, and who can do what"
summary: "Each signed-in 1NEON page: what it's for, what's on it, its states, and the actions on it with the access each one needs."
type: guide
status: adopted
updated: 2026-11-20
created: 2026-11-10
edition: "1.13"
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

- **Needs you** lists what's waiting on you, most pressing first, each with its action: **See and pay** (an invoice due, overdue, or whose bank payment failed, but not one clearing), **Compare options**, **Review and accept** (a finished handover), **Upload file**, or **Open**. neon1 sees invoice drafts with **Check it**. Empty, it says "You're all caught up".
- **Coming up** shows three weeks as a strip of days marked with due dates, milestones, and targets, then the next six weeks listed by Overdue, This week, Next week, and Later.
- **Get started** is a setup checklist that disappears once done: the tour, a first project (editors), inviting the team, and a second step for admin actions (admins).
- **Recent activity**: what people did lately, newest first.
- **Your free account**, in a free account only: the date it's deleted if nothing changes, **Keep it 30 more days** (once), and **Download a copy** (Settings, Your data).
- **Next step**, at the top of the main column above Needs you, for editors and admins (not neon1's own people), is where a project goes from outlined to assessed. A free account always sees it. A client organization sees it only while a project is still waiting for an assessment, meaning it has no options yet and is in the first stage. Tips about a project's outline show here and on its Overview, never in Needs you, which holds only what someone is waiting on.
  - With no projects yet, it says to outline a project (up to three, in a free account), with **Start a project**.
  - A free account lists each project with a six-segment meter of how many outline parts are written, and a tip for what's missing, such as "add what done looks like and a measure with where it is now", with **Continue** to that project. A fully outlined project says "Fully outlined" with **Review**. A client organization sees only what was sent and when.
  - Under the list, a required note ("Add some final thoughts, concerns, or requirements you'd like me to keep in mind as I take a look"), at least 20 characters, and a checkbox for each project, up to three. **Request assessment** opens a last look with the projects, the note, and what each project could still say. **Submit request** (or **Submit request anyway**, when a project could say more) saves the request and locks the box. **Keep editing** goes back.
  - A saved request goes to neon1 30 minutes after its last change, and never within an hour of the previous email. Until then **Edit** unlocks it and restarts the 30 minutes, and **Withdraw** stops it. After it goes, the card says "Sent" with the date, and an edit sends neon1 an update ("Assessment request updated"). It can be edited and sent again as often as needed. The reply comes by email.
  - In a free account, **Book a 30-minute call** opens neon1's booking page, or **ask me to reach out** sends a call request with an optional note. That request goes at once and can be made once a week. In a client organization the card offers **Contact neon1** instead. A call doesn't need an assessment first, and an assessment doesn't need a call.
  - The assessment is free: neon1's written read of the projects as written, with a likely approach and the first questions to settle. neon1 reads it before the call, which is about needs.
- **Get to know 1NEON**, in the side column for everyone but neon1's own people, links to **A sample project**, **From free account to client** (a six-minute walkthrough; neon1's own clients see **The guided walkthrough**), **Try the demo**, **FAQs**, and, in a free account, **How free accounts work**. **Hide** puts it away, and **Show Get to know 1NEON on Home** in the profile, under Tutorial, brings it back.

## Board

`/1NEON/o/{org}/workflow`. Every project as a card in its stage. Editors and admins drag cards, or use **Move to** on a phone; passing Decide without an approval asks for a reason. Columns show "Done when", the count, and any limit.

## Projects

`/1NEON/o/{org}/projects`. All projects, as a **List** (stage, health, target date; filter by layer; sort by stage, target date, or recent changes) or a **Timeline** (each project drawn from its start to its target date, colored by layer; the dashed line is today, the diamond the target, red stripes time past the target, and each row says its stage and days left). **New project** starts one (editors and admins).

## New project

`/1NEON/o/{org}/projects/new`. Editors and admins pick a template, name and describe it, give its outcome and one real example, and optionally a target date, sensitive-data flags, and measures.

## One project

`/1NEON/o/{org}/projects/{KEY}`, with tabs Overview, Needs, Execute, Observe, and Normalize (`/needs`, `/execute`, `/observe`, `/normalize`). The header shows the key, stage and time in it, name, health, and the onion, under **Next step**. On the Overview, everyone also sees **Ready for Execute** until a decision is made (only editors and admins get the links to write each part): the percent, the four steps, and the six outline parts, each with a tip, where to write it, and where it goes. Details are in the projects guide and [outlining a project](../guides/outline-a-project.md). Actions:

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

`/1NEON/o/{org}/insights`. Charts from the organization's data: open and overdue work, the on-time rate, days to a decision, measures at target, items finished per week for eight weeks, projects by layer, and health. Work counts as finished the day it was marked done.

## Settings

`/1NEON/o/{org}/settings`. **Where**: the organization's website or public page and where it's based (a city and state, a state alone, or a place outside the US), checked the same way as on sign-up; any admin can **Change** it without confirming it's them, and Home asks the organization's admins for it until one is added or they choose **Not now**. Both are optional. The service agreement's signer and edition, or "not signed yet", with **Read and sign**. Then the board's stages, each with name, layer, "Done when", optional limit, **Show** or **Hide**, and order. **Save workflow** saves all (admins, after confirming it's them). A stage holding projects can't be removed.

## Your profile

`/1NEON/me`. Name, title, phone (only you see it), theme (Matrix: Awake or Plugged; Sentinel: Providence or Desert of the real; or Match my device), menu (Default or Mini), and **Notifications**: for each group (files; people and access; decisions and options; agreements, invoices, and payments; workflow and stages; comments; updates and items; sign-ins) whether it reaches you by email, by text, or neither. Then **Save**. Also here: texts (add a mobile number, agree to texts, confirm the code), **Two-step verification** at `#security` (passkey, authenticator app, text-message codes), **Replay the tutorial**, and **Sign out**. Two-step changes and signing out take effect at once.

## Contact

`/1NEON/contact`. **Contact neon1**, in the menu for every account, free accounts included: email hello@neon1.tech, call or text (424) 32-neon1, or book a call, with the hours I answer. Anything about a project is best written in that project.

## All clients

`/1NEON/all/workflow`, neon1 only. Every client's projects on one read-only board, **By organization** (each organization with its client ID, such as N1-0001, and how many projects are active) or **One board**. To change anything, open the client.

## Public pages

The sign-in screen (`/1NEON/`), FAQs, service agreement, sample project, guided walkthrough, interactive demo, and policies are open without signing in. Neo on the sign-in screen is the public Neo, which only knows neon1's public pages.
