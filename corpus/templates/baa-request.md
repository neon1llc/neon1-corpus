---
id: templates-baa-request
title: Business associate agreement request
summary: "The short questionnaire that tells us whether a project involves health information, and if so, what the business associate agreement needs to cover."
type: template
status: adopted
updated: 2026-11-09
created: 2026-11-09
consumers: [knowledge, ai]
pdf: true
edition: "1.0"
origin: "Written for neon1-corpus, based on 45 CFR 160.103 and the HHS guidance on business associates"
related: [templates-business-associate-agreement, examples-baa-request, forms-intake]
---

# Business associate agreement request

> [!note] Why this exists
> Under HIPAA, a vendor that creates, receives, keeps, or sends protected health information (PHI) for a covered entity is a business associate, and needs a signed agreement first. Many projects never touch health information at all. This questionnaire tells us which kind of project yours is, before any access is granted. It isn't legal advice. Your privacy officer or counsel makes the final call.

**Organization:** ____

**Contact and title:** ____ **Date:** ____

**Privacy or compliance officer:** ____

## Part 1: Are you a covered entity?

- [ ] Health care provider that bills electronically (practice, clinic, therapist, pharmacy, lab)
- [ ] Health plan
- [ ] Health care clearinghouse
- [ ] A business associate of one of the above, looking for a subcontractor
- [ ] None of these (a business associate agreement probably isn't needed)
- [ ] Not sure

## Part 2: The project and the data

**What the project is about:** ____

____

**Systems neon1 would work in:** ____

**Would neon1 see, store, or move any of these?**

- [ ] Patient names with appointment, treatment, or billing details
- [ ] Medical records, notes, or images
- [ ] Insurance or claims information
- [ ] Intake forms or messages from patients
- [ ] Backups or exports that contain any of the above
- [ ] None of these

**Could the work be done with synthetic or de-identified data instead?**

- [ ] Yes, entirely
- [ ] Partly: ____
- [ ] No, because ____

**Smallest amount of health information the work needs:** ____

## Part 3: Systems and vendors

| System or vendor | What it holds | Has its own BAA with you? |
|---|---|---|
| ____ | ____ | ☐ Yes ☐ No ☐ Unsure |
| ____ | ____ | ☐ Yes ☐ No ☐ Unsure |
| ____ | ____ | ☐ Yes ☐ No ☐ Unsure |

**Any AI tools involved, and are they covered by a BAA?** ____

## Part 4: What you need in the agreement

**Breach and incident reporting window:** ____ days

**Days to provide records for access, amendment, or accounting requests:** ____

**Subcontractors you'd approve:** ____

**State laws or contract terms that add requirements:** ____

**Your template, or neon1's example as a starting point:**

- [ ] We'll send ours
- [ ] Start from [neon1's example](business-associate-agreement.md)

## Part 5: Result

*Completed together after review.*

- [ ] No PHI involved. No business associate agreement needed. Safeguards noted in the proposal.
- [ ] PHI involved. Agreement to be signed before any access.
- [ ] PHI can be avoided by redesigning the work: ____

**Reviewed by (client):** ____ **Date:** ____

**Reviewed by (neon1):** ____ **Date:** ____
