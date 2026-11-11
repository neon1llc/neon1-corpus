---
id: templates-care-plan
title: Care plan
summary: "The monthly agreement for ongoing care after a project: what's looked after, what's included each month, how fast I respond, what it costs, and how it ends."
type: template
status: adopted
updated: 2026-11-11
created: 2026-11-11
consumers: [knowledge, ai]
pdf: true
edition: "1.0"
related: [templates-services-agreement, templates-proposal, forms-service-and-recovery-profile, forms-incident-and-restore, standards-reliability-and-recovery]
---

# Care plan

> [!warning] An example, not legal advice
> This shows the terms ongoing care runs under. Your own counsel should review it before you sign, and the signed copy is the one that counts.

Care is optional. After a project is handed over, you can run it yourself with its documentation, or I can keep looking after it for a monthly fee. This plan works under our [services agreement](services-agreement.md), and where the two disagree, the services agreement wins.

**Client:** ____ **Plan starts:** ____

**Your contact for care:** ____ **Backup contact:** ____

## 1. What's looked after

Each system below has a [service and recovery profile](../forms/service-and-recovery-profile.md) that says what it must do and how it comes back after a failure.

| System | Profile | Accounts it runs in, owned by you |
|---|---|---|
| ____ | ____ | ____ |
| ____ | ____ | ____ |

Anything not listed here isn't covered, though I'll still tell you if I notice a problem with it.

## 2. What's included each month

- [ ] **Health check.** Alerts, logs, and costs reviewed, and anything unusual followed up
- [ ] **Updates.** Security updates and supported version upgrades applied, tested, and recorded
- [ ] **Backups.** Backups confirmed, and a test restore at least every ____ months
- [ ] **Access review.** Accounts and permissions checked against who still needs them
- [ ] **Small changes.** Up to ____ hours of small changes and questions
- [ ] **Monthly note.** A short report: what was checked, what changed, what it cost, and what I'd do next

Unused hours don't carry over. Work beyond them is quoted first, as a change or a new proposal.

## 3. Hours and response

I work in planned hours, weekday evenings and weekends, Eastern time. Care doesn't include round-the-clock or emergency response.

| Kind of request | What it means | First response |
|---|---|---|
| **Down** | The system has stopped, and work can't go on without it | Within ____ hours, during working hours |
| **Degraded** | It works, but slowly or with a workaround | Within ____ business day(s) |
| **Request** | A question or a small change | Within ____ business days |

A first response means I've read it, started, and told you what happens next. If something urgent needs help outside these hours, such as a security incident in progress, the plan names who to call instead: ____.

## 4. When something fails

I follow the system's recovery profile, keep you informed until it's back, and write an [incident and restore record](../forms/incident-and-restore.md) afterward, with what happened, what was lost if anything, and what changes so it doesn't happen again.

## 5. Price and billing

**Monthly fee:** ____, invoiced on the ____ of each month, due within ____ days.

Third-party services, such as cloud hosting, licenses, and hardware, are billed straight to you by their providers wherever possible, so you keep the accounts.

## 6. Changes and ending

1. Either of us can change the plan with ____ days' written notice. A change in the fee takes effect at the next month.
2. Either of us can end the plan with ____ days' written notice, for any reason.
3. When it ends, I give you the current documentation and the last monthly note, then remove all my access, and you confirm it's gone.

## Signatures

| | Client | neon1 LLC |
|---|---|---|
| Name | ____ | Pradeep Tathineni |
| Title | ____ | Owner |
| Signature | ____ | ____ |
| Date | ____ | ____ |

*1 is glad to be of service.*

## Sources

- [Service Level Objectives](https://sre.google/sre-book/service-level-objectives/), Google, *Site Reliability Engineering*: describing a service's targets in terms its users notice.
- [Postmortem culture: learning from failure](https://sre.google/sre-book/postmortem-culture/), Google, *Site Reliability Engineering*: writing up a failure to prevent the next one, without blame.
