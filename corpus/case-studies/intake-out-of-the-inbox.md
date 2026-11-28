---
id: case-intake-out-of-the-inbox
title: "Patient intake portal"
summary: "Patient intake ran through a shared inbox and a slow EHR, with staff chasing documents by email."
type: case-study
status: adopted
client: dermatology practice
area: workflows
kind: partner
role: "As neon1, as a subcontractor"
when: "2026"
updated: 2026-11-27
created: 2026-11-06
edition: "2.0"
consumers: [site, chat, knowledge, ai]
pdf: true
key: dermatology
order: 2
stat_key: "one queue"
stat: "· complete and missing"
short_problem: "Intake ran through a shared inbox, with staff chasing documents by email."
short_work: "An AWS portal where patients upload once and staff see what's complete."
short_results: "Staff see what's missing without searching email."
short_after: "Maintained with the partner."
origin: "neon1-site src/app/public/index.html#case-dermatology"
---

# Patient intake portal

## The problem

A dermatology practice with two locations ran intake through one shared inbox. Staff downloaded, tracked, and re-uploaded each document, and anything missing started another round of emails.

## The work

I mapped the process with staff, then built a Terraform-managed serverless portal on AWS. I was the lead engineer, subcontracted to the firm that held the contract.

- Patients upload once, and each intake has one status.
- Staff see one queue of what's complete and what's missing.
- The practice's health record system stays the clinical record, and the portal doesn't depend on its vendor's interface.

## The results

Documents arrive in one place, and staff can see what's missing without searching email.

## After handover

The partner and I maintain the portal. Next is a direct interface to the record system, once its vendor enables one.
