---
id: 1neon-guide-projects
title: "1NEON guide: projects, stages, layers, and items"
summary: "How a project moves through stages and the four layers, every kind of item and its states, Next step, health, the proposal and its revisions, signed approvals, fixed prices and estimates, hours, purchases, handover acceptance, invoices, and payments."
type: guide
status: adopted
updated: 2026-11-13
created: 2026-11-10
edition: "2.2"
consumers: [portal, ai]
audience: "People signed in to 1NEON, and Neo inside it"
pdf: false
order: 2
origin: "neon1-1NEON packages/domain (model, defaults, access, proposal, billing, agreement) and apps/api/src/routes (projects, items, billing)"
---

# 1NEON guide: projects, stages, layers, and items

## A project

A project is one piece of work for one organization. It has a key (such as `FLOW-1`), a name, a one or two sentence summary, an outcome ("what will be true when it's done"), a target date, a stage, a health, the people on it with their roles, sensitive-data flags (PII, PHI, or payment data), and items in four layers. Every change records who made it and when, and every edit carries the version last seen, so two people can't silently overwrite each other: the later save is shown what changed and asked to choose.

A project can be **archived** (kept, read only, off the main lists; **Restore from archive** brings it back) or moved to **Trash** by an admin, who types the project's key to confirm. A trashed project leaves every view but is kept, and is erased only if the client asks.

## Stages and the board

An organization's workflow is a row of stages, each tied to one layer. The default stages, in order:

| Stage | Layer | Done when |
|---|---|---|
| Intake | Needs | Fit call held |
| Listen | Needs | Discovery complete, baseline metrics recorded |
| Propose | Needs | Options published to the client |
| Decide | Needs | An option approved |
| Build | Execute | All milestone tasks done (limit: 3 projects at once) |
| Verify | Observe | Checks pass, after metrics recorded |
| Hand over | Normalize | Handover accepted |
| Care | Normalize | Ongoing care, or closed |
| Closed | Normalize | (the end) |

The **Board** shows each project as a card in its stage's column, under the column's "Done when" line and count. A card shows the key, name, health, and time in the stage. Editors and admins drag cards, or use **Move to** on a phone. In **Settings**, admins rename, reorder, limit, and hide stages and edit "Done when", confirming it's them to save. A hidden stage still shows while a project is in it.

Two stages keep their roles under any name or position: **Decide** is the gate (moving past it without an approved option asks for a reason, which is recorded), and **Closed** ends a project. **Reopen**, or dragging it back, moves a closed project to the stage before. Moving backward never asks for a reason, and moving never changes health.

**All clients** (neon1 only) is the same board across every organization, read only, grouped by organization or as one board.

## The four layers and their items

A project page has tabs for **Overview** and each layer, which groups its items by kind. The onion beside the name has a ring per layer, Needs in the center, each filling as its work gets done.

| Kind | Layer | What it is | Statuses |
|---|---|---|---|
| Request | Needs | Something the client wants, built as a sentence of taps: what, what for, what happens today, how often, and when | To do, In progress, Blocked, Done |
| Discovery question | Needs | A question for the people who do the work, answered in their words | same |
| System or account (asset) | Needs | A system, account, vendor, or data source the work touches. Never passwords | same |
| Requirement | Needs | Something the result must do, with a priority: must, should, or could | same |
| Option | Needs | One way to solve it, from neon1: cost, timeline, and scores for cost, quality, and effort (1 to 5, more is better), and whether neon1 recommends it | Draft, Proposed (shared for approval), Declined, Approved |
| Decision | Needs | The permanent record of an approved option, with the approver's signature | Approved (a record, can't change) |
| Constraint or assumption | Needs | Something the work depends on or is limited by, printed in the proposal | To do, In progress, Blocked, Done |
| Proposal revision | Needs | One issued, frozen revision of the project's proposal, such as 0039-r1. Made only by **Issue the proposal** | a record |
| File needed | Needs | A file neon1 asked the client for | Done once the file is sent |
| Task | Execute | One piece of work someone can finish | To do, In progress, Blocked, Done |
| Milestone | Execute | A point everyone can see, such as a launch | same |
| Change request | Execute | A change to what was agreed, with its effect on cost and dates | same |
| Hours | Execute | Time neon1 worked on one day, in quarter hours, with what it went to. Only neon1 adds entries; the client reads them | a record, kept as logged once an invoice bills it |
| Purchase | Execute | Something to buy for the approved option: estimate, actual cost, where it was bought, who buys it (the client or neon1), and its receipt | Open, Bought, Installed (done), Returned |
| Invoice | Execute | A bill for the work or for purchases, numbered when issued (such as INV-0039-01) | Draft, Issued, Paid, Void. Partly paid, bank payment clearing, and overdue are worked out from payments and the due date |
| Payment | Execute | Money received against one invoice, from Stripe or recorded by neon1 | a record |
| Status update | Execute | One line on how it's going, with a health; posting it sets the project's health | a record |
| Measure (metric) | Observe | A number that shows it worked: unit, baseline, target, which way is better, and dated readings | Done when it reaches its target |
| Check | Observe | Something to test before calling it done | To do, In progress, Blocked, Done |
| Incident | Observe | Something that broke: what people saw, when, and what fixed it | same |
| Handover step | Normalize | A step before it's fully the client's, such as admin access transferred | same |
| Runbook | Normalize | Written steps for a job that comes up again | same |
| Training | Normalize | Who learns what, and how | same |
| Care | Normalize | Ongoing care after launch | same |
| Retro | Normalize | What went well, or what to do differently | same |

Tapping an item's title opens its panel: status, owner, due date, details, and comments. Its box ticks it done. Counts show done out of total; a choice between options counts as one, done once one is approved, and records such as updates, decisions, revisions, invoices, payments, and files aren't counted.

Who may do what with items:

- Anyone who can read the project (viewers too) may add a **request** and comment.
- Editors and admins add, edit, tick off, and delete other items.
- **Options** come only from neon1, which writes, shares (Proposed), and withdraws them. A client who wants another comments or adds a request.
- **Proposal revisions**, **invoices**, and **payments** come only from neon1, and once issued can't be edited or deleted.
- An **approved option** and its **decision** can't be edited or deleted. To change course, neon1 proposes a new option for approval, and the earlier decision stays on record, marked as replaced.

## Options and the proposal

Options are compared on the Needs tab (`#options`), each with its cost (one-time and recurring apart, with a first-year total), timeline, three scores, and any Recommended mark. An option can also carry neon1's hours, costs paid directly to vendors, expected purchases (what, why, an example, an estimate, and who buys it), and the result the client can check.

An option's price is one of two kinds, and the option says which:

- **Fixed** ("$6,500 fixed"): the whole price for the work described, changed only by an approved change.
- **Estimate** ("$3,500 to $4,200 estimate"): a range of hours at an hourly rate. The client pays for hours worked, each listed under Hours, never past the high end without an approved change. Fewer hours cost less.

Either way, **How this adds up** lists the work line by line with its hours, the expected total, and **When you pay**: the deposit at approval and the rest at handover. Each option says why neon1 recommends it, or when to pick it, and the proposal prints the same breakdown.

A project has one proposal, issued in numbered revisions. While neon1 shapes the options it's a **draft** the client can read but not approve. **Issue the proposal** freezes and numbers a copy: the first 1NEON issued is 0039, so its first revision is **0039-r1**. Each option gets the revision plus a letter, such as **0039-r1-B**, and the decision names that ID.

A later change of option, estimate, or scope is issued as the next revision, 0039-r2. Earlier ones stay readable, marked "Replaced by a later revision", and none can be edited or deleted.

**Read the proposal**, under the options, opens `/1NEON/o/{org}/projects/{KEY}/proposal`: discovery, goals, constraints and assumptions, every shared option with what's in and out, a cost table, what each side will do, and the agreement, in neon1's letterhead look. It shows the latest revision, with earlier ones a choice away. **Print or save as PDF** prints only the proposal, with its ID and page number on every page. **Download Word** saves `neon1-{org}-proposal-0039-r1.docx`, with the ID in the name, properties, and every header, so a marked-up copy uploaded to Files prompts "Is this a revision of Proposal 0039-r1?" and is filed with the revision it answers.

### Price checks

Estimates are checked when a revision is issued and again after 30 days. Past that, approval waits until the decision maker chooses **Ask neon1 to refresh** and neon1 issues a revision with checked prices. Revisions don't otherwise expire.

### Changes of scope

A request added after approval asks "Does this change what was approved?" (**Yes, it changes it**, **No**, or **Not sure**). One marked as a change is flagged for, and answered in, the next revision.

## Approving and signing

**Approve this option** is offered only to the person allowed to approve on that project:

- the project's named **decision maker**, or several, any of whom may approve;
- if nobody is named, an **admin of the client organization**;
- never neon1, which proposed the options, except in neon1's own organization (N1-0001), where neon1 is the client.

Neo never approves for anyone. Asked to, it points to **Approve this option**.

Approving needs all of these, and 1NEON says which is missing:

1. neon1 has issued the proposal, and the option is in the latest revision.
2. The option hasn't changed since that revision was issued.
3. The revision is within its price check.
4. An admin of the client organization has signed neon1's [service agreement](../policies/service-agreement.md) at its current edition. (Not needed in N1-0001.)

Approving restates exactly what's accepted: the option and its ID, its proposal, estimate, timeline, neon1's hours, vendor costs, purchases, and the result to check. The approver may add conditions ("only after 6pm"), then types their full name and ticks the consent box: "I agree to sign electronically. My typed name is my signature, and I can ask neon1 for a paper copy at any time."

The decision records the option ID, the approver's name and email, the time, the option's version, its terms exactly as shown, and the signature: typed name, consent, a SHA-256 fingerprint of the signed terms, and the address and browser. If the option changed after it was opened, the approval is refused for review. A signed approval records that the organization agreed to that option's scope, cost, and timeline, the same as signing on paper, and the printed and Word proposals show it.

Approving also:

- The option's expected purchases join Execute, marked with its ID.
- Drafts a deposit invoice for neon1 to check and issue, when the price is in numbers: half a fixed price, or half an estimate's low end. Nothing reaches the client until it's issued.

Only a client admin, after confirming it's them, can name or change the decision maker, under People on the Overview; editors change everyone else. neon1 can't be decision maker outside its own organization.

## The service agreement

neon1's service agreement covers every project with an organization: how work is agreed, purchases, paying, what the client provides, ownership, confidentiality, regulated data, records, quality, limits, ending, and signing. Anyone can read it at `/1NEON/agreement`. A client admin signs it once at `/1NEON/o/{org}/agreement`, from **Settings** or the notice under the options, with a typed name and the consent box, before the first approval. The signature records the edition (now 2.0, which added how estimates are billed and that a deposit counts toward the final invoice), a SHA-256 fingerprint of its text, the time, and where it came from. A new edition is signed again before the next approval, and an earlier signature keeps the text it was given. The agreement's full text is in the [service agreement](../policies/service-agreement.md).

## Purchases

**Purchases**, in Execute, start from the approved option's expected purchases. Each shows its estimate, the actual cost and where, who buys it, and its receipt; a bought item without one is flagged. Statuses are **Open**, **Bought**, **Installed** (done), and **Returned**.

- **The client buys it** ("You buy it."): in the organization's name, keeping the receipt with the project (**Attach the receipt**).
- **neon1 buys it**: only after the decision maker initials that neon1 buys it and is paid back at cost, in the signed approval or later on the purchase. Until then it says "Waiting on the decision maker's initials before neon1 buys it." neon1 attaches the receipt and bills exactly that amount, with no markup.

## Handover acceptance

Handover steps in Normalize are ticked as they're done, by either side. Until all are, the steps say how many are left; then the decision maker sees "Every step is done" and chooses **Accept the handover**, with an optional note ("What you checked") and **Sign and accept the handover**, signed like an approval. One signature accepts every remaining step, each keeping its own record with "Accepted by", name, and date. **Check it and accept** accepts a single unticked step and marks it done. An accepted step can't be unticked. Acceptance drafts a final invoice for neon1: what's left on a fixed price, or the hours worked less earlier invoices on an estimate. Home's **Needs you** and the project's **Next step** prompt the decision maker when it's time.

## Hours

Hours are in Execute under **Hours** (`#hours`). neon1 logs each entry's date, quarter hours, and what it went to; the client reads them only. On an estimate, the section shows hours against the range, their cost at the rate, and a bar to the high end with a mark at the low end. Hours past the high end are listed, not billed. On a fixed price, hours are a record, not a bill.

Issuing a progress or final invoice on an estimate marks unbilled hours with its number ("billed on INV-0039-02"). Those entries then stay as logged, and a mistake is corrected with a credit.

## Invoices and paying

Invoices are in Execute (`#billing`). neon1 makes them, and the client sees them only once issued.

| Type | When it comes up |
|---|---|
| Deposit | Drafted when an option with a price in numbers is approved: half of a fixed price, or half of an estimate's low end |
| Progress | Added by neon1 for a stage of the work. On an estimate: the hours worked so far, less earlier invoices |
| Final | Drafted when the last handover step is accepted: what's left on a fixed price, or the hours worked (never past the high end) less earlier invoices |
| Purchases at cost | Reimbursement for what neon1 bought, from the receipts |
| Care plan | The monthly fee for ongoing care |
| Credit | Reduces an issued invoice it names |

**New invoice** (neon1) picks a type, and empty lines fill from the approved option or receipts. **Save draft** keeps it private. **Issue** numbers it (**INV-0039-01**: the proposal's number, or the project key, and its place in the project), sets a due date (15 days by default), addresses it to the decision maker or a client admin, fixes its contents with a SHA-256 fingerprint, and tells the client by bell and email.

Each invoice has its own page, `/1NEON/o/{org}/projects/{KEY}/invoices/{id}`, on neon1's letterhead: from, bill to, lines, sales tax, total, credits, payments, balance due, terms, and how to pay, ready to print or save as a PDF. An invoice for hours lists the entries it covers and names the earlier invoices it subtracts. If the work comes to less than a deposit paid, neon1 refunds the difference as a credit. An invoice reads as **Draft**, **Open**, **Partly paid**, **Overdue** (past its due date with a balance), **Paid in full**, **Void**, or **Credit**.

Paying:

- **Online:** **See and pay**, then **Pay**, opens Stripe Checkout for the balance, bank transfer (ACH) first and card too. 1NEON never sees card or bank details. A card payment shows as paid at once. A bank payment shows as **bank payment clearing**, with its amount and date, until the bank clears it in a few business days; meanwhile **Pay** is gone and nothing counts it overdue or asks for it, so nobody pays twice. If the bank refuses it, no money moved: the invoice reopens with the failed payment listed and **Pay again**, and Next step and Needs you say so. Billing contacts are told when a bank payment starts, clears, or fails.
- **By check, Zelle, or wire:** neon1 records it with **Record a payment** when it arrives: the amount, how it arrived, the date, and a check number or confirmation.
- No surcharge is added for any way of paying.

Issued invoices and payments are permanent. A mistake is fixed with a **credit** or by voiding with a reason (**Void invoice**), both kept on record. An invoice with payments, or one clearing, is credited rather than voided; one whose only payment failed can be voided. Every signature, issued invoice, and payment is also kept locked for seven years.

The **Agreements, invoices, and payments** notification group (email on by default) covers the agreement signed, invoices issued or voided, and payments started, arrived, or failed. Drafts never reach the client.

## Next step

**Next step**, at the top of every project, shows the one thing to do now and who it waits on, the first of these that applies:

1. For client members, an invoice with something to pay: "Invoice INV-0039-01 is ready" (or **overdue**, or "The bank payment on invoice INV-0039-01 didn't go through"), the amount, and the due date, with **See and pay**. An invoice covered by a bank payment that's clearing isn't listed.
2. For neon1, invoice drafts: "A deposit invoice is drafted. Check it, then issue.", with **Check invoices**.
3. For neon1, shared options not yet in an issued revision: "Issue the proposal so the client can approve an option" (or its next revision, such as r2), with **Issue the proposal** or **Issue r2**.
4. Options are shared and you may approve: "Choose an option: {n} ready for your approval in Proposal 0039-r1", or that the estimates are due a price check, or that neon1 is preparing the proposal, with **Compare options**.
5. Options are shared and someone else approves: "Waiting on {decision maker} to choose an option", with **See options**.
6. Files are asked for (for client members): "Send {n} files", with **Upload**.
7. Every handover step is done and you may accept: "Every handover step is done. Check them, then accept the handover with one signature.", with **Review and accept**.
8. You have open items assigned to you: "You have {n} open items here", with **Open**.
9. An option is approved and the project is at or before Decide: "{option} is approved. Next, move the project to {next stage}", with **Move to** for neon1. A client reads "Next, neon1 moves the project to {next stage}".
10. For neon1: "Add options" when none exist yet near Decide, or "Share an option" when options exist but none is shared.
11. Otherwise the stage's goal. neon1 reads "To finish {stage}: {done when}", with **Move to {next stage}** (not past Decide without an approval). A client reads who has the work: "{stage} is with neon1. It's done when: {done when}. Then neon1 moves the project to {next stage}. Nothing needs you right now." In neon1's own organization, editors get the move as neon1 does.
12. "Nothing needs doing right now."

## Health

Health is the team's assessment: **Not assessed** (the start), **On track**, **At risk**, or **Off track**. Only people change it, on the Overview or by posting a status update ("How is it going?"), which records who and when.

## Starting a project

**New project** (editors and admins) asks for a template, a name, what it is, what will be true when it's done, one real example of today's work, a target date, any sensitive data (PII, PHI, or payment), and optional measures with baseline and target. Templates start it with fitting items:

| Template | Key | Starts with |
|---|---|---|
| Blank | PRJ | Nothing |
| Cloud migration | MIG | Discovery questions, servers and files assets, a must-have requirement, cost and downtime measures, a backup restore check, and the handover checklist |
| Workflow automation | FLOW | Discovery questions, tools and inboxes asset, "nothing is retyped twice", turnaround and staff-time measures, and the handover checklist |
| AI assistant | AI | Discovery questions, document sources asset, "answers cite their source", time-to-answer and correctness measures, and the handover checklist |
| Security readiness | SEC | Discovery questions, systems in scope, "MFA on every admin account", an open-findings measure, an access review check, and the handover checklist |
| Personal or home tech | HOME | "What's not working, in your own words", devices and accounts involved, and "Written steps left behind" |

Every template except Blank and Personal or home tech starts with this handover checklist:

- Accounts are in the client's name.
- Admin access is transferred to the client.
- Docs are delivered and walked through.
- The people who use it are trained on it.
- Older tools are retired or merged.
- neon1's access is reduced or removed.

## The Overview tab

Overview shows any decision, the summary and outcome, measures with progress, a side column (health and who set it, stage and dates, the latest update, sensitive-data flags, people, and **Archive this project**), **How is it going?**, and **People on this project** with roles: lead engineer, sponsor, decision maker, tech contact, stakeholder, and observer. Roles describe work and never grant access, except that a decision maker may approve.
