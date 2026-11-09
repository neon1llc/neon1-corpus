---
id: examples-release-and-handover
title: "Release and handover record, filled in"
summary: "The handover record that closed a fictional physical therapy practice's intake project."
type: example
status: adopted
updated: 2026-11-09
created: 2026-11-09
edition: "0.9"
consumers: [knowledge, ai]
pdf: true
example_of: forms-release-and-handover
fictional: true
related: [forms-release-and-handover]
---

# Release and handover record, filled in

> [!example] A fictional example
> Fernwood Physical Therapy, its staff, and every detail below are invented to show what a finished document looks like. Any resemblance to a real practice is a coincidence. Prices are left out of public examples. A real proposal states them.

**Project:** FPT-01, new patient intake **Release version:** 1.0 **Date:** April 5

**Approver:** Dana Reyes

## Acceptance checks

| Check | Expected | Observed, with date | Accepted by |
|---|---|---|---|
| Main task | Form request appears once in the practice system | Passed with 5 test patients, April 2 | Dana Reyes |
| Common exception | Missing phone number is asked for on the form | Passed, April 2 | Dana Reyes |
| Duplicate or retry | Second submission is flagged, not duplicated | Passed, April 2 | Dana Reyes |
| Permissions | Front desk sees requests, not clinical notes | Passed, April 3 | Dana Reyes |
| Recovery or manual fallback | If the form is down, the phone script still works | Walked through, April 3 | Sam Ortiz |
| You do the task without help | Sam processes a morning's requests alone | Passed, April 4, 11 real requests | Sam Ortiz |

**Known limits, open items, and who owns each:** Voicemail requests are still entered by hand (Sam). The second location's front desk is trained on April 12 (Dana).

- [x] Accepted
- [ ] Correction requested:

## Running it

- [x] Account ownership and billing confirmed in your name
- [x] Recurring costs and renewal dates explained
- [x] Recovery and export steps provided and tested
- [x] You completed a normal task and fixed a harmless mistake on your own
- [x] Support arrangement, included work, and next review confirmed
- [x] Temporary access removed and checked

**Delivered files, configuration, and version:** Patient form settings, inbox rule, daily summary rule, version 1.0, exported to the shared drive.

**Where the instructions live:** "Front desk intake guide" in the practice's shared drive.

**Temporary data deleted by (date and owner):** April 5, Pradeep. The made-up test patients were removed from the practice system.

## Closing

**Final invoice or milestone:** Balance invoiced April 5.

**Follow-up review date:** May 5, to compare missed and duplicate requests with the old process.

**Permission to publish:**

- [ ] Not requested
- [x] Requested, see the publication permission record

**Signed for the client:** Dana Reyes **Date:** April 5

**Signed for neon1:** Pradeep Tathineni **Date:** April 5
