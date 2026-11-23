---
id: 1neon-guide-projects
title: "1NEON guide: projects, stages, layers, and items"
summary: "How a project moves through stages and the four layers, every kind of item and its states, Next step, health, the proposal and its revisions, signed approvals, fixed prices and estimates, hours, purchases, handover acceptance, invoices, and payments."
type: guide
status: adopted
updated: 2026-11-23
created: 2026-11-10
edition: "2.10"
consumers: [portal, ai]
audience: "People signed in to 1NEON, and Neo inside it"
pdf: false
order: 2
origin: "neon1-1NEON packages/domain (model, defaults, access, proposal, billing, agreement) and apps/api/src/routes (projects, items, billing)"
---

# 1NEON guide: projects, stages, layers, and items

## A project

A project is one piece of work for one organization. It has a key (such as `FLOW-1`), a name, a summary, an outcome ("what will be true when it's done"), a target date, a stage, a health, the people on it, sensitive-data flags (PII, PHI, or payment data), and items in four layers. Every change records who and when. Every edit carries the version last seen, so two people can't silently overwrite each other. The later save is shown what changed and asked to choose.

An admin can **archive** a project (kept, read only, off the main lists, and **Restore from archive** brings it back) or move it to **Trash** by typing its key. A trashed project leaves every view but is kept, and erased only if the client asks.

## Stages and the board

An organization's workflow is a row of stages, each tied to one layer. The defaults:

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

The **Board** shows each project as a card (key, name, health, time in stage) in its stage's column. Editors and admins drag cards, or use **Move to** on a phone. In **Settings**, admins rename, reorder, limit, and hide stages and edit "Done when", confirming it's them to save. A hidden stage still shows while a project is in it.

Two stages keep their roles under any name or position. **Decide** is the gate: moving past it without an approved option asks for a recorded reason. **Closed** ends a project, and **Reopen** (or dragging it back) moves it to the stage before. Moving backward never asks for a reason, and moving never changes health.

**All clients** (neon1 only) is the same board across every organization, read only.

## The four layers and their items

A project page has tabs for **Overview** and each layer. The onion beside the name has a ring per layer, Needs in the center, each filling as work gets done.

| Kind | Layer | What it is | Statuses |
|---|---|---|---|
| Request | Needs | What the client wants, built as a sentence of taps: what, what for, what happens today, how often, when | To do, In progress, Blocked, Done |
| Discovery question | Needs | A question for the people who do the work, answered in their words | same |
| System or account | Needs | A system, account, vendor, or data source the work touches. Never passwords | same |
| Requirement | Needs | What the result must do: must, should, or could | same |
| Option | Needs | One way to solve it, from neon1: cost, timeline, scores for cost, quality, and effort (1 to 5, more is better), and whether neon1 recommends it | Draft, Proposed, Declined, Approved |
| Decision | Needs | The permanent record of an approved option, with the approver's signature | a record |
| Constraint or assumption | Needs | What the work depends on or is limited by, printed in the proposal | same as requests |
| Proposal revision | Needs | One issued, frozen revision, such as 0039-r1, made only by **Issue the proposal** | a record |
| File needed | Needs | A file neon1 asked the client for | Done once sent |
| Task, Milestone | Execute | A piece of work someone can finish, or a point everyone can see, such as a launch | same as requests |
| Change request | Execute | A change to what was agreed, with its effect on cost and dates | same |
| Hours | Execute | Time neon1 worked on one day, in quarter hours, and what it went to. Only neon1 adds entries | a record |
| Purchase | Execute | Something to buy for the approved option, with who buys it and its receipt | Open, Bought, Installed (done), Returned |
| Invoice | Execute | A bill for work or purchases, numbered when issued | Draft, Issued, Paid, Void |
| Payment | Execute | Money received against one invoice | a record |
| Status update | Execute | One line on how it's going, with a health. Posting it sets the project's health | a record |
| Measure | Observe | A number that shows it worked: unit, baseline, target, which way is better, dated readings | Done at its target |
| Check, Incident | Observe | Something to test before calling it done, or something that broke and what fixed it | same as requests |
| Handover step, Runbook, Training, Care, Retro | Normalize | A step before it's the client's, written steps for a repeated job, who learns what, ongoing care, and what to do differently | same as requests |

An item's title opens its panel: status, owner, due date, details, and comments. Its box ticks it done. A choice between options counts as one, done once one is approved. Updates, decisions, revisions, invoices, payments, and files aren't counted.

Who may do what:

- Anyone who can read the project, viewers too, may add a **request** and comment. Editors and admins add, edit, tick off, and delete other items. Only neon1 writes, shares, and withdraws **options** and makes **proposal revisions**, **invoices**, and **payments**, and issued ones can't be edited or deleted. A client who wants another option comments or adds a request. An **approved option** and its **decision** can't be edited or deleted. To change course, the decision maker approves a different option.

## Options and the proposal

Options are compared on the Needs tab (`#options`), each with its cost (one-time and recurring apart, with a first-year total), timeline, three scores, and any Recommended mark. An option can also carry neon1's hours, vendor costs, expected purchases, and the result the client can check.

An option's price is usually an **estimate** ("$3,500 to $4,200 estimate"), a range of hours at an hourly rate that discovery sets. The client pays for hours worked, each listed under Hours, never past the high end without an approved change, and fewer hours cost less. Unforeseen work or purchases are agreed before they're added. A small, well-defined job may carry a **fixed** price instead ("$1,800 fixed"), the whole price for the work described, changed only by an approved change. **How this adds up** lists the work line by line with hours, the expected total, and **When you pay**: the deposit at approval and the rest at handover.

A project has one proposal, issued in numbered revisions. While neon1 shapes the options it's a **draft** the client can read but not approve. **Issue the proposal** freezes and numbers a copy. The first 1NEON issued is 0039, so its first revision is **0039-r1**, and each option gets the revision plus a letter, such as **0039-r1-B**. A later change of option, estimate, or scope is issued as the next revision, 0039-r2. Earlier ones stay readable, marked "Replaced by a later revision".

**Read the proposal**, under the options (`/1NEON/o/{org}/projects/{KEY}/proposal`), shows discovery, goals, constraints and assumptions, every shared option with what's in and out, a cost table, and what each side will do. **Print or save as PDF** puts its ID and page number on every page. **Download Word** saves `neon1-{org}-proposal-0039-r1.docx`, and a marked-up copy uploaded to Files prompts "Is this a revision of Proposal 0039-r1?"

**Price checks.** Estimates are checked when a revision is issued and again after 30 days. Past that, approval waits until the decision maker chooses **Ask neon1 to refresh** and neon1 issues a revision with checked prices.

**Changes of scope.** A request added after approval asks "Does this change what was approved?" (**Yes, it changes it**, **No**, or **Not sure**). One marked as a change is flagged for, and answered in, the next revision.

## Approving and signing

**Approve this option** is offered only to the project's named **decision maker** (or several, any of whom may approve), or if nobody is named, an **admin of the client organization**. It's never offered to neon1, except in neon1's own organization (N1-0001), where neon1 is the client. Neo never approves for anyone. It points to **Approve this option**.

Approving needs all of these, and 1NEON says which is missing:

1. neon1 has issued the proposal, and the option is in the latest revision and unchanged since.
2. The revision is within its price check.
3. An admin of the client organization has signed neon1's [service agreement](../engagement/service-agreement.md) at its current edition. (Not needed in N1-0001.)

The approval screen restates what's accepted. The approver may add conditions ("only after 6pm"), then types their full name and ticks the consent box: "I agree to sign electronically. My typed name is my signature, and I can ask neon1 for a paper copy at any time."

The decision records the option ID, the approver's name and email, the time, its terms exactly as shown, and the signature (typed name, consent, a SHA-256 fingerprint of the signed terms, and the address and browser). If the option changed after it was opened, the approval is refused for review. It records that the organization agreed to that option's scope, cost, and timeline, as on paper.

Approving also adds the option's expected purchases to Execute, and drafts a deposit invoice for neon1 to check and issue when the price is in numbers: half a fixed price, or half an estimate's low end. Nothing reaches the client until it's issued.

Only a client admin, after confirming it's them, can name or change the decision maker, under People on the Overview.

### Changing the decision

Until the handover is accepted, the decision maker can choose a different option with **Choose this instead**. The screen says **Change to 0039-r1-C?** and shows what it replaces, what was already invoiced, the hours already logged, and the deposit asked now. A reason is required, and the change is signed like an approval.

- Nothing is billed twice. Money invoiced for the replaced decision counts toward the new one, so its deposit asks only for the difference, or nothing. An unissued deposit draft for the replaced decision is removed.
- Hours already logged count toward the new option's hours, and its high end still caps the total.
- If what was invoiced comes to more than the new option can cost, accepting the handover drafts a credit for the difference.
- The replaced decision stays in Needs, marked "replaced by a later decision", and the new one shows **Why it changed**. Everyone following Decisions and options is told.
- Going back to a replaced option waits until neon1 confirms it in the next revision with checked prices, then it shows **Go back to this option**.
- Once the handover is accepted, the decision stays.

## The service agreement

neon1's [service agreement](../engagement/service-agreement.md) covers every project with an organization, and anyone can read it at `/1NEON/agreement`. A client admin signs it once at `/1NEON/o/{org}/agreement` (from **Settings** or the notice under the options) with a typed name and the consent box, before the first approval. The signature records the edition (now 2.0), a SHA-256 fingerprint of its text, the time, and where it came from. A new edition is signed again before the next approval, and an earlier signature keeps the text it was given.

## Purchases, hours, and handover

**Purchases**, in Execute, start from the approved option's expected purchases. Each shows its estimate, the actual cost and where, who buys it, and its receipt. A bought item without a receipt is flagged.

- **The client buys it,** in the organization's name, and attaches the receipt (**Attach the receipt**).
- **neon1 buys it** only after the decision maker initials that neon1 buys it and is paid back at cost, in the signed approval or later on the purchase. Until then it says "Waiting on the decision maker's initials before neon1 buys it." neon1 attaches the receipt and bills exactly that amount, with no markup.

**Hours** (Execute, `#hours`) are logged by neon1 with date, quarter hours, and what they went to, and the client reads them only. On an estimate, the section shows hours against the range and a bar to the high end. Hours past the high end are listed, not billed. On a fixed price, hours are a record, not a bill. Issuing an invoice marks the hours it bills ("billed on INV-0039-02"), and a mistake is corrected with a credit.

**Handover acceptance.** Handover steps in Normalize are ticked as they're done, by either side. When all are, the decision maker sees "Every step is done" and chooses **Accept the handover**, with an optional note ("What you checked") and **Sign and accept the handover**, signed like an approval. One signature accepts every remaining step, each keeping its own record. **Check it and accept** accepts a single step early. An accepted step can't be unticked. Acceptance drafts a final invoice for neon1.

## Invoices and paying

Invoices are in Execute (`#billing`). neon1 makes them, and the client sees them only once issued.

| Type | When |
|---|---|
| Deposit | Drafted at approval: half of a fixed price, or half of an estimate's low end |
| Progress | Added by neon1 for a stage. On an estimate: the hours worked so far, less earlier invoices |
| Final | Drafted at handover acceptance: what's left on a fixed price, or the hours worked (never past the high end) less earlier invoices |
| Purchases at cost | Reimbursement for what neon1 bought, from the receipts |
| Care plan | The monthly fee for ongoing care |
| Credit | Reduces an issued invoice it names |

**Issue** numbers an invoice (**INV-0039-01**: the proposal's number, or the project key, and its place in the project), sets a due date (15 days by default), addresses it to the decision maker or a client admin, fixes its contents with a SHA-256 fingerprint, and tells the client by bell and email. Each invoice has its own page (`/1NEON/o/{org}/projects/{KEY}/invoices/{id}`) with lines, sales tax, total, credits, payments, balance due, terms, and how to pay, ready to print or save as a PDF. If the work comes to less than a deposit paid, neon1 refunds the difference as a credit.

An invoice reads as **Draft**, **Open**, **Partly paid**, **Overdue** (past due with a balance), **Paid in full**, **Void**, or **Credit**.

- **Online:** **See and pay**, then **Pay**, opens Stripe Checkout, bank transfer (ACH) first and card too. 1NEON never sees card or bank details. A card payment shows as paid at once. A bank payment shows as **bank payment clearing** until the bank clears it in a few business days. Meanwhile **Pay** is gone and nothing counts it overdue, so nobody pays twice. If the bank refuses it, no money moved, and the invoice reopens with the failed payment listed and **Pay again**. Billing contacts are told when a bank payment starts, clears, or fails.
- **By check, Zelle, or wire:** neon1 records it with **Record a payment** on arrival: amount, how it arrived, date, and a check number or confirmation.
- No surcharge for any way of paying.

Issued invoices and payments are permanent. A mistake is fixed with a **credit** or by voiding with a reason (**Void invoice**), both kept on record. An invoice with payments, or one clearing, is credited rather than voided. One whose only payment failed can be voided. Every signature, issued invoice, and payment is also kept write-protected for seven years.

## Next step

**Next step**, at the top of every project, shows the one thing to do now and who it waits on. The first that applies wins:

1. Client members: an invoice to pay ("Invoice INV-0039-01 is ready", **overdue**, or "didn't go through"), with **See and pay**. An invoice covered by a clearing bank payment isn't listed.
2. neon1: invoice drafts to check (**Check invoices**), then shared options not yet in an issued revision (**Issue the proposal** or **Issue r2**).
3. Options are shared: the approver sees "Choose an option" with **Compare options** (or that estimates are due a price check, or neon1 is preparing the proposal). Everyone else sees "Waiting on {decision maker} to choose an option", with **See options**.
4. Client members: "Send {n} files", with **Upload**.
5. The approver, once every handover step is done: **Review and accept**.
6. Anyone with open items assigned: "You have {n} open items here".
7. After an option is approved at or before Decide: "Next, move the project to {next stage}" (**Move to** for neon1, and clients read that neon1 moves it).
8. neon1 near Decide: "Add options" when none exist, "Share an option" when none is shared.
9. Otherwise the stage's goal. neon1 reads "To finish {stage}: {done when}" with **Move to {next stage}** (not past Decide without an approval). A client reads who has the work, what it's done when, and that nothing needs them now.

If nothing applies, it says "Nothing needs doing right now." In neon1's own organization, editors get the move as neon1 does.

## Health

Health is **Not assessed** (the start), **On track**, **At risk**, or **Off track**. Only people change it, on the Overview or by posting a status update ("How is it going?").

## Starting a project

**New project** (editors and admins) asks for a template, a name, what it is, what will be true when it's done, one real example of today's work, a target date, any sensitive data, and optional measures with baseline and target.

Templates start a project with fitting items: Blank (`PRJ`), Cloud migration (`MIG`), Workflow automation (`FLOW`), Networks and connected systems (`NET`), AI assistant (`AI`), Security readiness (`SEC`), and Personal or home tech (`HOME`). Each starts with discovery questions, the systems involved, one requirement, one or two measures, and a check. Every template except Blank and Personal or home tech also starts with a handover checklist: accounts in the client's name, admin access transferred, docs delivered and walked through, users trained, older tools retired or merged, and neon1's access reduced or removed.

## The Overview tab

Overview shows any decision, the summary and outcome, measures with progress, a side column (health, stage and dates, the latest update, sensitive-data flags, people, **Archive this project**), and **How is it going?**. **People on this project** have roles: lead engineer, sponsor, decision maker, tech contact, stakeholder, and observer. Roles describe work and never grant access, except that a decision maker may approve.

### Ready for Execute

Until a decision exists, Overview shows **Ready for Execute**: a percent, a bar, and four steps. Everything in it is optional.

| Step | Counts for |
|---|---|
| **Outline** | 10 for each of six parts, up to 60 |
| **Assessment** | 10, once the project was sent for assessment from Home's Next step, or an option has been proposed |
| **Options** | 10, once an option is proposed or approved |
| **Decision** | 20, once an option is approved or a decision exists |

It reaches 100% only with a decision (at most 99% before), and then the card goes away. The six outline parts are what it is (the summary), how it works today (the real-example question), what done looks like (the outcome), who and what it touches (another answered discovery question, or a named system), how we'll know it worked (a measure with a baseline), and timing and limits (a target date, a constraint, or a requirement). [Outlining a project](../guides/outline-a-project.md) has what counts, a tip for each, and where each goes once work starts.

A part counts with about a dozen characters or more of real words. A starter question with no answer, or a starter item from a template, never counts alone. A project is **outlined** with the first three parts and **fully outlined** with all six. Each missing part links to where to write it, except for viewers. The same percent and parts show on Home's Next step and are what neon1 reads when it assesses a project.
