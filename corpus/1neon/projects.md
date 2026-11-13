---
id: 1neon-guide-projects
title: "1NEON guide: projects, stages, layers, and items"
summary: "How a project moves through stages and the four layers, every kind of item and its states, Next step, health, the proposal and its revisions, signed approvals, fixed prices and estimates, hours, purchases, handover acceptance, invoices, and payments."
type: guide
status: adopted
updated: 2026-11-13
created: 2026-11-10
edition: "2.1"
consumers: [portal, ai]
audience: "People signed in to 1NEON, and Neo inside it"
pdf: false
order: 2
origin: "neon1-1NEON packages/domain (model, defaults, access, proposal, billing, agreement) and apps/api/src/routes (projects, items, billing)"
---

# 1NEON guide: projects, stages, layers, and items

## A project

A project is one piece of work for one organization. It has a key (such as `FLOW-1`), a name, a one or two sentence summary, an outcome ("what will be true when it's done"), a target date, a stage, a health, the people on it with their roles, sensitive-data flags (PII, PHI, or payment data), and items in four layers. Every change is recorded with who made it and when, and every edit carries the version the person last saw, so two people can't silently overwrite each other: the later save is told what changed and asked to choose.

A project can be **archived** (kept, read only, off the main lists; **Restore from archive** brings it back) or moved to **Trash** by an admin, who types the project's key to confirm. A trashed project disappears from every view but is kept, and it's erased only if the client asks.

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
| Hand over | Normalize | Handoff checklist signed off |
| Care | Normalize | Ongoing care, or closed |
| Closed | Normalize | (the end) |

The **Board** shows every project as a card in its stage's column, with the column's "Done when" line and how many projects it holds. A card shows the key, name, health, and how long it has been in the stage. Editors and admins drag a card to another column, or use its **Move to** menu on a phone. Admins can rename stages, change "Done when", set a limit, reorder, and hide stages in **Settings** (saving asks them to confirm it's them). A hidden stage still shows while a project is in it.

Two stages keep their roles under any name or position: **Decide** is the gate (moving forward past it without an approved option is allowed but asks for a reason, which is recorded), and **Closed** ends a project. A closed project is finished. **Reopen** on its page, or dragging it back, moves it to the stage before. Moving backward never asks for a reason. Moving a stage never changes health.

**All clients** (neon1 only) is the same board across every organization, read only, grouped by organization or as one board.

## The four layers and their items

A project page has tabs: **Overview**, **Needs**, **Execute**, **Observe**, and **Normalize**. Each layer tab groups its items by kind. The onion beside the project's name has one ring per layer, Needs in the center, and each ring fills as that layer's work gets done.

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
| Invoice | Execute | A bill for the work or for purchases, numbered when issued (such as INV-0039-01) | Draft, Issued, Paid, Void. Partly paid and overdue are worked out from payments and the due date |
| Payment | Execute | Money received against one invoice, from Stripe or recorded by neon1 | a record |
| Status update | Execute | One line on how it's going, with a health; posting it sets the project's health | a record |
| Measure (metric) | Observe | A number that shows it worked: unit, baseline, target, which way is better, and dated readings | Done when it reaches its target |
| Check | Observe | Something to test before calling it done | To do, In progress, Blocked, Done |
| Incident | Observe | Something that broke: what people saw, when, and what fixed it | same |
| Handoff | Normalize | A step before it's fully the client's, such as admin access transferred | same |
| Runbook | Normalize | Written steps for a job that comes up again | same |
| Training | Normalize | Who learns what, and how | same |
| Care | Normalize | Ongoing care after launch | same |
| Retro | Normalize | What went well, or what to do differently | same |

Any item opens in a panel by tapping its title: status, owner (assignee), due date, details, and comments. The box beside an item ticks it done. Tab and section counts show done out of total. A choice between options counts as one, done once an option is approved. Status updates, decisions, proposal revisions, invoices, payments, and uploaded files aren't counted.

Who may do what with items:

- Anyone who can read the project (viewers too) may add a **request** and comment.
- Editors and admins add, edit, tick off, and delete other items.
- **Options** come only from neon1: neon1 writes, shares (Proposed), and withdraws them. A client who wants a different option comments on it or adds a request.
- **Proposal revisions**, **invoices**, and **payments** come only from neon1, through their own buttons, and an issued one can't be edited or deleted.
- An **approved option** and its **decision** can't be edited or deleted. To change course, neon1 proposes a new option and it's approved on its own. The earlier decision stays on record, marked as replaced.

## Options and the proposal

Options are compared on the Needs tab under Options (`#options`). Each shows its cost (one-time and recurring charges apart, with a first-year total when there are both), timeline, the three scores, and a Recommended mark. Each option can also carry neon1's hours, the costs paid directly to vendors, the purchases it expects (what, why, an example, an estimated price, and whether the client or neon1 buys it), and the result the client can check.

An option's price is one of two kinds, and the option says which:

- **Fixed** ("$6,500 fixed"): the whole price for the work described. It changes only if the client approves a change to the work.
- **Estimate** ("$3,500 to $4,200 estimate"): a range of hours at an hourly rate. The client pays for the hours worked, each one listed under Hours, and the total never passes the high end unless they approve a change first. Fewer hours cost less.

Under either price, **How this adds up** opens the work behind it line by line with the hours each piece should take, the expected total, and **When you pay**: the deposit at approval and the rest at handover. Each option also says why neon1 recommends it, or when it's the right one to pick. The proposal prints the same breakdown.

A project has one proposal, issued in numbered revisions. While neon1 is still shaping the options, the proposal is a **draft**: the client can read it and the options, but can't approve yet. When the options are ready, neon1 chooses **Issue the proposal**, which freezes a copy of everything the proposal shows and numbers it. The first proposal 1NEON issued is 0039, and its first revision is **0039-r1**. Every option in a revision gets an ID made of the revision and a letter, such as **0039-r1-B**, and the decision names that ID.

A later change (an edited option, a new one, a refreshed estimate, or a change of scope) is issued as the next revision, 0039-r2. Earlier revisions stay readable, marked "Replaced by a later revision", and no revision can be edited or deleted.

**Read the proposal**, under the options, opens `/1NEON/o/{org}/projects/{KEY}/proposal`: discovery, goals, constraints and assumptions, every shared option with what's in and out, a cost table, what each side will do, and the agreement, in neon1's letterhead look. It shows the latest revision, with earlier ones a choice away. **Print or save as PDF** prints only the proposal, with its ID and page number on every page. **Download Word** saves the revision as a Word file named like `neon1-{org}-proposal-0039-r1.docx`. The ID is in the file name, the document's properties, and the header on every page, so when a marked-up copy is uploaded to Files, 1NEON asks "Is this a revision of Proposal 0039-r1?" and files it under Files, Proposals, with the revision it answers.

### Price checks

Estimates are checked when a revision is issued and rechecked after 30 days. Past that date, approval waits: the decision maker chooses **Ask neon1 to refresh**, and neon1 issues the next revision with checked prices. A revision doesn't expire in any other way.

### Changes of scope

A request added after an option is approved asks "Does this change what was approved?" with **Yes, it changes it**, **No**, or **Not sure**. A request marked as a change is flagged for the next revision, and neon1 answers it there.

## Approving and signing

**Approve this option** is offered only to the person allowed to approve on that project:

- the project's named **decision maker**, or several, any of whom may approve;
- if nobody is named, an **admin of the client organization**;
- never neon1, which proposed the options, except in neon1's own organization (N1-0001), where neon1 is the client.

Neo never approves for anyone. Asked to, it points to **Approve this option**.

Approving is possible only when all of these hold, and 1NEON says which one is missing:

1. neon1 has issued the proposal, and the option is in the latest revision.
2. The option hasn't changed since that revision was issued. Otherwise it waits for the next one.
3. The revision is within its price check.
4. An admin of the client organization has signed neon1's [service agreement](../policies/service-agreement.md) at its current edition. (Not needed in N1-0001.)

Approving restates exactly what's being accepted: the option and its ID, the proposal it's from, the estimate, the timeline, neon1's hours, what's paid directly to vendors, what's to buy, and the result to check. The approver may add conditions ("only after 6pm"). Then they type their full name and tick the consent box: "I agree to sign electronically. My typed name is my signature, and I can ask neon1 for a paper copy at any time."

The decision records the option ID, the approver's name and email, the time, the option's version, a copy of its terms exactly as shown, and the signature: the typed name, the consent, a SHA-256 fingerprint of the terms that were signed, and the address and browser it came from. If the option changed after the person opened it, the approval is refused and they review it again. A signed approval records that the organization agreed to that option's scope, cost, and timeline, and it counts the same as signing the proposal on paper. The printed proposal and its Word copy show the signature.

Approving also does two things on its own:

- The option's expected purchases join Execute, marked with its ID.
- If the option's price is in numbers, neon1 gets a draft deposit invoice to check and issue: half of a fixed price, or half of an estimate's low end. Nothing is sent to the client until neon1 issues it.

Only an admin of the client, after confirming it's them, can name or change a project's decision maker, under People on the project's Overview. Editors can change everyone else on the project. neon1 can't be named decision maker, except in its own organization.

## The service agreement

neon1's service agreement covers every project with an organization: how work is agreed, purchases, paying, what the client provides, ownership, confidentiality, regulated data, records, quality, limits, ending, and signing. Anyone can read it at `/1NEON/agreement`. An admin of the client organization signs it once on `/1NEON/o/{org}/agreement`, reached from **Settings** or from the notice under the options ("Before approving, sign neon1's service agreement"), with a typed name and the consent box, before the first option can be approved. The signature records the edition (now 2.0, which added how estimates are billed and that a deposit counts toward the final invoice), a SHA-256 fingerprint of its exact text, the time, and where it came from. A new edition is signed again before the next approval, and an earlier signature always keeps the text it was given. The agreement's full text is in the [service agreement](../policies/service-agreement.md).

## Purchases

Purchases sit in Execute under **Purchases**, filled in from the approved option's expected purchases. Each shows its estimate, what was actually paid and where, who buys it, and its receipt. A bought item without a receipt is flagged. Statuses are **Open**, **Bought**, **Installed** (done), and **Returned**.

- **The client buys it** ("You buy it."): in the organization's name, keeping the receipt with the project (**Attach the receipt**).
- **neon1 buys it**: only after the decision maker agrees, with their initials, that neon1 buys it and is paid back at cost. The initials come from the signed approval, or the decision maker adds them later on the purchase. Until then the purchase says "Waiting on the decision maker's initials before neon1 buys it." neon1 attaches the receipt, and the cost is billed on a reimbursement invoice at exactly what the receipt shows, with no markup.

## Handover acceptance

Handoff steps in Normalize can be checked and accepted by the decision maker with **Check it and accept**: an optional note on what they checked ("What you checked"), then **Sign and accept** with a typed name and the consent box, the same way as an approval. The step is marked done with the signature, and the acceptance shows on the project's handover. When the last handoff step is accepted, neon1 gets a draft final invoice: what's left on a fixed price, or the hours worked less earlier invoices on an estimate.

## Hours

Hours are in Execute under **Hours** (`#hours`). neon1 logs each entry with its date, the hours in quarter hours, and what the time went to. The client reads them and can't add or change any. With an estimate approved, the section shows the hours logged against the range, what they come to at the rate, and a bar that runs to the high end with a mark at the low end. Hours past the high end are listed and not billed. With a fixed price, hours are a record of the work, not a bill.

Issuing a progress or final invoice on an estimate marks every hour not yet billed with that invoice's number ("billed on INV-0039-02"). From then on those entries stay as logged, and a mistake is corrected with a credit.

## Invoices and paying

Invoices are under the project's **Execute** layer, in **Invoices** (`#billing`). neon1 makes them; the client sees them once they're issued, never as drafts.

| Type | When it comes up |
|---|---|
| Deposit | Drafted when an option with a price in numbers is approved: half of a fixed price, or half of an estimate's low end |
| Progress | Added by neon1 for a stage of the work. On an estimate: the hours worked so far, less earlier invoices |
| Final | Drafted when the last handover step is accepted: what's left on a fixed price, or the hours worked (never past the high end) less earlier invoices |
| Purchases at cost | Reimbursement for what neon1 bought, from the receipts |
| Care plan | The monthly fee for ongoing care |
| Credit | Reduces an issued invoice it names |

**New invoice** (neon1) picks a type. Leaving its lines empty lets 1NEON fill them from the approved option or the receipts. **Save draft** keeps it private. **Issue** numbers it (such as **INV-0039-01**: the proposal's number, or the project key when there's no proposal, and its place in the project), sets its due date (15 days by default), addresses it to the decision maker, or else a client admin, and fixes its contents with a SHA-256 fingerprint. The client is told through the bell and email.

Each invoice opens on its own page, `/1NEON/o/{org}/projects/{KEY}/invoices/{id}`, on neon1's letterhead: from, bill to, the lines, sales tax, the total, credits, payments, the balance due, the terms, and how to pay. An invoice for hours lists each entry it covers under the lines, so its quantity can be checked, and its subtraction names the earlier invoices by number. If the work comes to less than a deposit already paid, neon1 refunds the difference and records it as a credit against that invoice. It's ready to print or save as a PDF. An invoice reads as **Draft**, **Open**, **Partly paid**, **Overdue** (past its due date with a balance), **Paid in full**, **Void**, or **Credit**.

Paying:

- **Online:** **See and pay**, then **Pay**, opens Stripe Checkout, Stripe's own secure page, for what's left on the invoice. Bank transfer (ACH) comes first, and card is offered too. 1NEON never sees card or bank details. A card payment shows as paid in a moment; a bank payment takes a few business days to clear, and shows once it does. If a bank payment fails, the people who get billing notices are told.
- **By check, Zelle, or wire:** neon1 records it with **Record a payment** when it arrives: the amount, how it arrived, the date, and a check number or confirmation.
- No surcharge is added for any way of paying.

An issued invoice and every payment are permanent. A mistake is fixed with a **credit** that reduces the invoice, or by **voiding** it with a reason (**Void invoice**), and both stay on record. An invoice that has payments can't be voided, so it's credited instead. A copy of every signature, issued invoice, and payment is also kept locked for seven years.

The **Agreements, invoices, and payments** notification group (email on by default) covers the service agreement being signed, invoices issued or voided, and payments that arrive or fail. neon1's drafts never reach the client's bell or email.

## Next step

The top of every project shows **Next step**: the one thing to do now and who it's waiting on. It picks the most pressing of these, in order:

1. For client members, an invoice with a balance: "Invoice INV-0039-01 is ready" (or **overdue**), the amount, and the due date, with **See and pay**.
2. For neon1, invoice drafts: "A deposit invoice is drafted. Check it, then issue.", with **Check invoices**.
3. For neon1, shared options not yet in an issued revision: "Issue the proposal so the client can approve an option" (or its next revision, such as r2), with **Issue the proposal** or **Issue r2**.
4. Options are shared and you may approve: "Choose an option: {n} ready for your approval in Proposal 0039-r1", or that the estimates are due a price check, or that neon1 is preparing the proposal, with **Compare options**.
5. Options are shared and someone else approves: "Waiting on {decision maker} to choose an option", with **See options**.
6. Files are asked for (for client members): "Send {n} files", with **Upload**.
7. You have open items assigned to you: "You have {n} open items here", with **Open**.
8. An option is approved and the project is at or before Decide: "{option} is approved. Next, move the project to {next stage}", with **Move to** for editors.
9. For neon1: "Add options" when none exist yet near Decide, or "Share an option" when options exist but none is shared.
10. Otherwise the stage's goal: "To finish {stage}: {done when}", with **Move to {next stage}** for editors (not past Decide without an approval).
11. "Nothing needs doing right now."

## Health

Health is the team's assessment of how a project is going: **Not assessed**, **On track**, **At risk**, or **Off track**. A new project is Not assessed, and starting work or moving stages never changes it. Editors set it on the Overview, or by posting a status update ("How is it going?"), which also records who assessed it and when.

## Starting a project

**New project** (editors and admins) asks a few short questions: the kind of project (a template), its name, what it is, what will be true when it's done, one real example of how the work happens today, a target date, any sensitive data (PII, PHI, or payment), and optional measures with a baseline and target. Templates start the project with fitting items:

| Template | Key | Starts with |
|---|---|---|
| Blank | PRJ | Nothing |
| Cloud migration | MIG | Discovery questions, servers and files assets, a must-have requirement, cost and downtime measures, a backup restore check, and the handoff checklist |
| Workflow automation | FLOW | Discovery questions, tools and inboxes asset, "nothing is retyped twice", turnaround and staff-time measures, and the handoff checklist |
| AI assistant | AI | Discovery questions, document sources asset, "answers cite their source", time-to-answer and correctness measures, and the handoff checklist |
| Security readiness | SEC | Discovery questions, systems in scope, "MFA on every admin account", an open-findings measure, an access review check, and the handoff checklist |
| Personal or home tech | HOME | "What's not working, in your own words", devices and accounts involved, and "Written steps left behind" |

Every template except Blank and Personal or home tech starts with this handoff checklist:

- Accounts are in the client's name.
- Admin access is transferred to the client.
- Docs are delivered and walked through.
- The people who use it are trained on it.
- Older tools are retired or merged.
- neon1's access is reduced or removed.

## The Overview tab

Overview shows the decision (if any), summary and outcome, measures with progress, the side column (health with who set it and when, stage and dates, the latest update, sensitive-data flags, people, and **Archive this project**), **How is it going?** for posting a status update, and **People on this project** with their roles: lead engineer, sponsor, decision maker, tech contact, stakeholder, and observer. Roles describe what someone does. They never grant access, except that a decision maker may approve.
