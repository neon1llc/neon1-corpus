---
id: case-two-offices-off-local-servers
title: Two-site server migration
summary: "The app, database, and files lived on two local servers both offices used."
type: case-study
status: adopted
client: automotive business
area: migration
kind: neon1
role: "As neon1"
when: "2025"
updated: 2026-11-27
created: 2025-09-22
edition: "2.0"
consumers: [site, chat, knowledge, ai]
pdf: true
key: migration
order: 4
stat_key: "2 servers · 2 offices"
stat: "· no app rewrite"
short_problem: "The app, database, and files lived on two local servers both offices used."
short_work: "Moved them to AWS with their technical lead, linked over a VPN."
short_results: "Both offices moved without an application rewrite."
short_after: "Their technical lead runs it."
origin: "neon1-site src/app/public/index.html#case-migration"
---

# Two-site server migration

## The problem

An automotive business ran its application, database, and files on two local servers shared by both offices, and both had to keep working through the move. Their technical lead knew the servers best.

## The work

He led the inventory and dependency discovery. I owned the AWS design, sizing, and migration plan.

- A private AWS network built with Terraform, with the application, database, and files each on a service that suits them.
- A site-to-site VPN connects both offices.
- Sizing came from measured use, not the old hardware.
- Data was moved ahead of the cutover, with a way back until both offices signed off.

## The results

Both offices moved to AWS without an application rewrite.

## After handover

The technical lead runs it, with the architecture and operating steps written down. Bigger changes come only if reliability, capacity, or cost makes the case.
