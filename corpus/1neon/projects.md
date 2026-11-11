---
id: 1neon-guide-projects
title: "1NEON guide: projects, stages, layers, and items"
summary: "How a project moves through stages and the four layers, every kind of item and its states, Next step, health, options, approvals, and decisions."
type: guide
status: adopted
updated: 2026-11-11
created: 2026-11-10
edition: "1.1"
consumers: [portal, ai]
audience: "People signed in to 1NEON, and Neo inside it"
pdf: false
order: 2
origin: "neon1-1NEON packages/domain (model, defaults, access) and apps/api/src/routes (projects, items)"
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
| Decision | Needs | The permanent record of an approved option | Approved (a record, can't change) |
| File needed | Needs | A file neon1 asked the client for | Done once the file is sent |
| Task | Execute | One piece of work someone can finish | To do, In progress, Blocked, Done |
| Milestone | Execute | A point everyone can see, such as a launch | same |
| Change request | Execute | A change to what was agreed, with its effect on cost and dates | same |
| Status update | Execute | One line on how it's going, with a health; posting it sets the project's health | a record |
| Measure (metric) | Observe | A number that shows it worked: unit, baseline, target, which way is better, and dated readings | Done when it reaches its target |
| Check | Observe | Something to test before calling it done | To do, In progress, Blocked, Done |
| Incident | Observe | Something that broke: what people saw, when, and what fixed it | same |
| Handoff | Normalize | A step before it's fully the client's, such as admin access transferred | same |
| Runbook | Normalize | Written steps for a job that comes up again | same |
| Training | Normalize | Who learns what, and how | same |
| Care | Normalize | Ongoing care after launch | same |
| Retro | Normalize | What went well, or what to do differently | same |

Any item opens in a panel by tapping its title: status, owner (assignee), due date, details, and comments. The box beside an item ticks it done. Tab and section counts show done out of total. A choice between options counts as one, done once an option is approved. Status updates, decisions, and uploaded files aren't counted.

Who may do what with items:

- Anyone who can read the project (viewers too) may add a **request** and comment.
- Editors and admins add, edit, tick off, and delete other items.
- **Options** come only from neon1: neon1 writes, shares (Proposed), and withdraws them. A client who wants a different option comments on it or adds a request.
- An **approved option** and its **decision** can't be edited or deleted. To change course, neon1 proposes a new option and it's approved on its own. The earlier decision stays on record, marked as replaced.

## Options, approval, and decisions

Options are compared on the Needs tab under Options (`#options`). Each shows its cost (one-time and recurring charges apart, with a first-year total when there are both), timeline, the three scores, and a Recommended mark.

**Approve this option** is offered only to the person allowed to approve on that project:

- the project's named **decision maker**, or several, any of whom may approve;
- if nobody is named, an **admin of the client organization**;
- never neon1, which proposed the options, except in neon1's own organization (N1-0001), where neon1 is the client.

Approving asks for optional conditions ("only after 6pm") and records a decision with the approver's name and email, the time, the option's version, and a copy of its terms exactly as shown. If the option changed after the person opened it, the approval is refused and they review it again. An approval records that the organization agreed to that option's scope, cost, and timeline, and it counts the same as signing the proposal. It works under the [services agreement](../templates/services-agreement.md) signed with neon1 before any paid work.

Each option can carry neon1's estimated hours, the costs paid directly to vendors, and the result the client can check, and all three are copied into the decision. **Read the full proposal**, under the options, opens `/1NEON/o/{org}/projects/{KEY}/proposal`: discovery, goals, every shared option with what's in and out, a cost table, what each side will do, and the agreement, in neon1's letterhead look. **Print or save as PDF** prints only the proposal. Once an option is approved, the proposal shows who approved which version and when; before that, it has signature lines.

Only an admin of the client, after confirming it's them, can name or change a project's decision maker, under People on the project's Overview. Editors can change everyone else on the project. neon1 can't be named decision maker, except in its own organization.

## Next step

The top of every project shows **Next step**: the one thing to do now and who it's waiting on. It picks the most pressing of these, in order:

1. Options are proposed and you may approve: "Choose an option", with **Compare options**.
2. Options are proposed and someone else approves: "Waiting on {decision maker} to choose an option."
3. Files are asked for (for client members): "Send {n} files", with **Upload**.
4. You have open items assigned to you: "You have {n} open items here", with **Open**.
5. An option is approved and the project is at or before Decide: "{option} is approved. Next, move the project to {next stage}", with **Move to** for editors.
6. For neon1: "Add options" when none exist yet near Decide, or "Share an option" when options exist but none is proposed.
7. Otherwise the stage's goal: "To finish {stage}: {done when}", with **Move to {next stage}** for editors (not past Decide without an approval).
8. "Nothing needs doing right now."

A closed project shows "This project is closed" and, for editors, **Reopen**.

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
