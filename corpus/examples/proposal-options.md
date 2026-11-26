---
id: examples-proposal-options
title: "Proposal with options, filled in"
summary: "A complete neon1 proposal with three options for a fictional retailer whose stock counts disagree: discovery, goals, what's in and out, the hours behind each price, when the client pays, what each side will do, and the agreement."
type: example
status: adopted
updated: 2026-11-25
created: 2026-11-11
edition: "4.0"
consumers: [knowledge, ai]
pdf: true
featured: true
example_of: templates-proposal
fictional: true
kind: fictional
related: [templates-proposal, templates-services-agreement, examples-proposal, forms-change-request]
---

# Proposal with options, filled in

> [!example] A fictional example
> Harborline Outfitters, its people, and every detail below are invented. It's the retailer from the [1NEON walkthrough](https://neon1.tech/1NEON/live?play=decide&scenario=harborline). Hours are real estimates for the work described. The hourly rate and dollar amounts are left out of public examples, and a real proposal states them.

**neon1 proposal for:** Harborline Outfitters, "Stock reconciliation and exception monitoring"

**Proposal number:** 0039 **Revision:** r1 **Date:** October 1

**Valid until:** October 31

**Prepared by:** Pradeep Tathineni, neon1 **Prepared for:** Priya Raman, operations director

## Discovery

**How it works today**

- Harborline is an outdoor-gear retailer with three stores, a web store, and about thirty people.
- Stock is counted in five places: the POS in each store, the web store, and the warehouse partner's portal, with the accounting system holding value. Each names an item differently: 7-digit POS numbers, web variant IDs, and UPCs at the warehouse. About 1,900 items are active, and roughly 140 have no UPC on file.
- Tomas, the inventory lead, reconciles the counts by hand every Monday. It takes about three hours.
- About 38 items disagree in a typical week, from returns taken at a counter that never reach the web store, transfers between stores, and stock the warehouse received late. About 11 web orders a month are for stock that isn't there.

**What "better" means, in Priya's words**

"A short list by 7am of what to check instead of a spreadsheet to build, and a chance to fix a count before a customer meets it."

**What can't change**

- The stores keep their POS, which is under contract for two more years. The warehouse partner stays.
- Nobody on the floor learns a new tool for daily work.
- Nothing touches the web store's checkout during the holiday weeks.

**Limits found before any option was written**

- **The POS can be read every night, but writing to it is limited.** Its API accepts 60 updates a minute, which a busy Saturday would exceed. A live two-way sync would have to queue its writes and could lag by minutes.
- **The warehouse has no API.** It publishes one stock file each morning, ready by 6:30am, reporting what is available to sell.

## Objectives

**The result:** every morning by 7am, one short list shows which counts disagree and why, without replacing a system.

**How we'll know it worked,** measured the same way before and after:

- Items whose counts disagree for no known reason, each week: from 38 to 5 or fewer
- Oversold web orders each month: from 11 to 1 or fewer

**Requirements**

- Staff can use it after a short walkthrough (must have)
- Every account stays in Harborline's name (must have)
- Running before the holiday weeks (should have)

## Options

### A. Exception report first (recommended)

Match every item across the POS, the web store, and the warehouse once. Each morning, compare their counts and email a short exception list by 7am, each with its likely reason. Read-only: nothing is written back to any system.

**Includes**

- One item ID map across the POS number, the web variant, and the UPC, with the roughly 140 items that have no UPC listed for Tomas to fill in
- A nightly comparison of the three stores' POS counts, the web store, and the warehouse file
- A reason beside each difference: transfer in transit, return not posted, or no item match
- A 7am email to Priya and Tomas, and an exceptions sheet with what changed since yesterday
- An alert when any feed doesn't arrive
- A dry run on a week of real exports, then two weeks beside Tomas's Monday count
- A runbook, training for Tomas and the store leads, and every account in Harborline's name

**Not included:** writing counts back to any system, and any change to checkout.

**Depends on:** read access to the POS back offices, the web store, and the warehouse portal, and the warehouse's file arriving by 6:30am.

**Target result:** counts are compared every morning, and unexplained differences fall from about 38 a week to 5 or fewer.

**neon1's time:** 26 to 34 hours **Timeline:** 4 weeks, the last two beside Monday's count **Paid directly by you:** a small monthly AWS bill, in an account in Harborline's name.

**Why I recommend it:** it shows how much of the drift is process and how much is sync before anything writes into a POS that limits writes. Option B can follow, and nothing in A is redone.

### B. Two-way sync with queued writes

Everything in A, plus counts written back to the web store and the POS as sales and returns happen, through a queue that stays inside the POS's write limit, with a rule for which system wins and a log of every change.

**Includes**

- Everything in A
- A queue that retries writes to the POS at no more than 60 a minute
- Write-back to the web store, held while a cart is open
- Conflict rules, and a log of every change with who or what made it
- A load test at holiday volume, and a switch that stops all writing at once

**Not included:** changes to checkout, and replacing the POS or the warehouse partner.

**Depends on:** the POS's write limit. At holiday volume the queue could lag by minutes, which is the cost of this option.

**Target result:** counts correct themselves within minutes, at normal volume.

**neon1's time:** 58 to 74 hours **Timeline:** 10 weeks, after the holiday weeks **Paid directly by you:** a small monthly AWS bill for the queue and its runtime, in Harborline's account.

**When to pick it:** once A shows how many differences are real and the holiday weeks are over. It writes to a POS that limits writes, so it's the riskier of the two to build first.

### C. Move the stores to the web store's own POS

Replace the three stores' POS with the web store's, so one system holds one count.

**Includes**

- A store-by-store cutover plan
- Catalog and customer import
- Card-reader and hardware testing
- Staff training at each store
- A parallel run and cutover support

**Not included:** new hardware, and the cost of leaving the current POS contract, which Harborline pays.

**Depends on:** the current POS contract, which runs two more years.

**Target result:** one system holds one count in every store and online.

**neon1's time:** 80 to 100 hours **Timeline:** 14 weeks, and not before the contract ends **Paid directly by you:** new hardware, and the cost of leaving the POS contract early.

**When to pick it:** only if the POS contract is ending anyway. It removes the problem by removing a system, at the largest cost and the most disruption.

## How the hours add up

Estimated task by task, for one experienced person. The range allows for what can't be known until the work starts, such as how each system formats its exports.

| Work | A | B | C |
|---|---|---|---|
| Read access in all five systems, and the follow-up questions from discovery | 2 | 2 | |
| Item matching across the POS, the web store, and the warehouse's UPCs, with the gaps listed | 6 | 6 | |
| Nightly comparison of counts across the POS, the web store, and the warehouse file | 6 | 6 | |
| A reason for each difference: transfers, returns not posted, unknown items | 4 | 4 | |
| The 7am exception email and the exceptions sheet | 3 | 3 | |
| An alert when a feed doesn't arrive | 2 | 2 | |
| Dry run on a week of real exports, then two weeks beside Tomas's Monday count | 4 | 4 | |
| Runbook, training for Tomas and the store leads, and handover | 3 | 3 | |
| A queue that retries POS writes within its limit | | 12 | |
| Write-back to the web store, held while a cart is open | | 9 | |
| Conflict rules and a log of every change | | 8 | |
| Load test at holiday volume, and the stop-all switch | | 5 | |
| Extra training and go-live support | | 2 | |
| Store-by-store cutover plan | | | 14 |
| Catalog and customer import | | | 22 |
| Card-reader and hardware testing | | | 12 |
| Staff training at the three stores | | | 18 |
| Parallel run and cutover support | | | 24 |
| **Expected** | **30** | **66** | **90** |
| **Range** | **26 to 34** | **58 to 74** | **80 to 100** |

## Price and payment

Each option's price is an estimate: the hours above at my hourly rate. You pay for the hours I work, each one listed in 1NEON with its date and what it was for, and the total never passes the high end of the range unless you approve a change first. If the work takes fewer hours, you pay for fewer.

| Item | A | B | C |
|---|---|---|---|
| Hourly rate | *Stated in the real proposal* | *Stated in the real proposal* | *Stated in the real proposal* |
| Estimate | 26 to 34 hours at that rate | 58 to 74 hours at that rate | 80 to 100 hours at that rate |
| Deposit when you approve | 30% of the low end | 30% of the low end | 30% of the low end |
| Invoices after that | The hours worked, every two weeks | The hours worked, every two weeks | The hours worked, every two weeks |
| Final invoice, at handover | The hours worked, less earlier invoices | The hours worked, less earlier invoices | The hours worked, less earlier invoices |
| Paid directly by you | A small monthly AWS bill | A small monthly AWS bill for the queue and runtime | New hardware, and the cost of leaving the POS contract |

**Changes:** no extra work or spending without a written, approved [change request](../forms/change-request.md).

## What each of us will do

| You will | I will |
|---|---|
| Decide, as operations director, and answer questions within two business days | Say when I'm working and what I'll do, and answer in my working hours (Monday to Thursday 6pm to 9pm, Friday 6pm to 8pm, and weekends 8am to 8pm, Eastern time), usually within a day |
| Give read-only access to the POS back offices, the web store, and the warehouse portal | Use only that access, and remove it at handover |
| Send a week of stock exports from each system, item names only, for the dry run | Keep them in this project only, and use them only for this work |
| Have Tomas and the store leads join a 30-minute walkthrough | Test against the measures above, show you the result, and train you all |
| Open the AWS account in Harborline's name and pay it directly | Leave a runbook and every login in Harborline's name, and fix defects found in the first 30 days at no charge |

If something outside either of our control holds the work up, such as a vendor or a late file, I'll pause the timeline, tell you the same day, and give you a new date.

## Acceptance

The work is accepted when these checks pass in front of you and you record your acceptance:

- [ ] Every active item has one ID across the POS, the web store, and the warehouse, and items with no UPC are listed
- [ ] The 7am email arrives with each difference and its reason
- [ ] A missing feed raises an alert that names the system
- [ ] Two weeks beside Tomas's Monday count agree on every item the report flags
- [ ] Tomas works a morning's exceptions without help

## Comments and agreement

- It works under our [service agreement](../engagement/service-agreement.md), signed once before any paid work.
- Choosing an option, by signing below or approving it in 1NEON, means we both agree to that option's work, price, and timeline, and to what each of us will do.
- For questions or adjustments, reply in 1NEON, write to hello@neon1.tech, or call +1 424-326-3661.

**Option chosen:** A **For the client:** Priya Raman **Title:** Operations director **Date:** October 3

**Approved in 1NEON** with the condition "Nothing changes at checkout until after the holiday weeks." Option C was declined.

**For neon1 LLC:** Pradeep Tathineni **Date:** October 3

## How it turned out

The first dry run flagged 118 items, and 61 weren't real. I had assumed the warehouse's file showed stock on hand, but it counts only stock available to sell, so anything allocated to an order or still being received looked missing. Reading the warehouse's second daily file was outside what Priya approved, so I sent revised terms, 0039-r2-A: 10 more hours, a range of 34 to 44, and nothing else changed. She approved them.

With the second file, the same week flagged 57 items, 53 with a reason and 4 for Tomas to check, which meets the target. Two weeks beside the Monday count agreed on every flagged item. The work took 39.5 hours, inside the revised range, and the final invoice listed each one. Option B stays on hold until the POS's write limit changes.

*1 is glad to be of service.*
