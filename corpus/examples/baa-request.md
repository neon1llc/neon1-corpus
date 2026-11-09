---
id: examples-baa-request
title: "Business associate agreement request, filled in"
summary: "The BAA questionnaire completed for a fictional physical therapy practice, showing how the decision gets made."
type: example
status: adopted
updated: 2026-11-09
consumers: [knowledge, ai]
pdf: true
example_of: templates-baa-request
fictional: true
related: [templates-baa-request]
---

# Business associate agreement request, filled in

> [!example] A fictional example
> Fernwood Physical Therapy, its staff, and every detail below are invented to show what a finished document looks like. Any resemblance to a real practice is a coincidence. Prices are left out of public examples. A real proposal states them.

**Organization:** Fernwood Physical Therapy

**Contact and title:** Dana Reyes, owner **Date:** March 10

**Privacy or compliance officer:** Dana Reyes

## Part 1: Are you a covered entity?

- [x] Health care provider that bills electronically (practice, clinic, therapist, pharmacy, lab)
- [ ] Health plan
- [ ] Health care clearinghouse
- [ ] A business associate of one of the above, looking for a subcontractor
- [ ] None of these (a business associate agreement probably isn't needed)
- [ ] Not sure

## Part 2: The project and the data

**What the project is about:** Route new patient requests from the website form and the shared inbox into one queue, then into the practice management system, without retyping.

**Systems neon1 would work in:** The website form, the practice's business email, and the practice management system's intake import.

**Would neon1 see, store, or move any of these?**

- [x] Patient names with appointment, treatment, or billing details
- [ ] Medical records, notes, or images
- [x] Insurance or claims information
- [x] Intake forms or messages from patients
- [ ] Backups or exports that contain any of the above
- [ ] None of these

**Could the work be done with synthetic or de-identified data instead?**

- [ ] Yes, entirely
- [x] Partly: building and testing use made-up patients. Go-live checks need to see a few real requests.
- [ ] No, because

**Smallest amount of health information the work needs:** Name, contact details, referring provider, insurance carrier, and reason for visit, during go-live checks only.

## Part 3: Systems and vendors

| System or vendor | What it holds | Has its own BAA with you? |
|---|---|---|
| Business email provider | Intake emails | ☒ Yes ☐ No ☐ Unsure |
| Practice management system | Patient records and scheduling | ☒ Yes ☐ No ☐ Unsure |
| Website form service | Form submissions | ☐ Yes ☐ No ☒ Unsure |

**Any AI tools involved, and are they covered by a BAA?** None. No patient information goes to an AI service.

## Part 4: What you need in the agreement

**Breach and incident reporting window:** 5 days

**Days to provide records for access, amendment, or accounting requests:** 10

**Subcontractors you'd approve:** None

**State laws or contract terms that add requirements:** New York's SHIELD Act, which counsel will confirm.

**Your template, or neon1's example as a starting point:**

- [ ] We'll send ours
- [x] Start from neon1's example

## Part 5: Result

- [ ] No PHI involved. No business associate agreement needed. Safeguards noted in the proposal.
- [x] PHI involved. Agreement to be signed before any access.
- [ ] PHI can be avoided by redesigning the work:

**Also found:** the website form service may not offer a BAA. The proposal includes moving the form to a service that does, or to the practice management system's own patient form.

**Reviewed by (client):** Dana Reyes **Date:** March 10

**Reviewed by (neon1):** Pradeep Tathineni **Date:** March 10
