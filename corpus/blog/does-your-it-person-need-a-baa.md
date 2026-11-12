---
id: blog-does-your-it-person-need-a-baa
title: "Does your dental office's IT person need to sign a BAA?"
summary: "When HIPAA requires a business associate agreement with the person who fixes your computers, what a vendor breach taught last year, and what to ask before anyone logs in."
type: post
topic: questions
status: draft
updated: 2027-01-21
created: 2027-01-21
edition: "0.1"
consumers: [blog, ai]
pdf: false
audience: "Owners and office managers of small medical and dental practices"
related: [guides-do-you-need-a-baa, templates-baa-request, templates-business-associate-agreement]
---

# Does your dental office's IT person need to sign a BAA?

A two-dentist practice has the same IT person it has had for years, a friend of the family who comes by when the imaging computer acts up and connects from home when the backup fails. He's careful, he's cheap, and he has never signed anything. One morning a patient calls to ask why their name, birthday, and next cleaning appointment are on a list someone found online. The practice has no idea where the list came from, and no agreement that says who was supposed to tell them.

Last March, HHS's Office for Civil Rights [settled with MMG Fusion](https://www.hhs.gov/press-room/ocr-mmg-fusion-hipaa-agreement.html), a software company whose system talked directly with its clients' patients. An intruder got into its system in December 2020 and reached the names, phone numbers, addresses, birth dates, and appointment times of about 15 million people. OCR says the company never told the practices it worked for, and opened its investigation only after a complaint about patient information posted on the dark web. The practices are the ones their patients trusted, and they found out last.

That's the job a business associate agreement, or BAA, does. It puts in writing what a vendor may do with patient information, how they'll protect it, and how fast they'll tell you when something goes wrong. If the person who fixes your computers can see patient records while they work, HIPAA almost certainly requires one before they log in.

## The short test

You need a BAA with a vendor when both of these are true:

- Your practice is a [covered entity](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-160/subpart-A/section-160.103). A dentist or doctor who bills insurance electronically is one.
- The vendor creates, receives, keeps, or sends patient information on your behalf.

An IT person who fixes the server holding your practice management system, sets up the computer that runs your imaging software, or restores your backups can reach patient records while doing the job. Under [HHS guidance](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html), that makes them a business associate, even if they never open a chart on purpose.

## When you usually don't need one

- Someone who works only on equipment with no patient data, like a printer that doesn't store documents, and never has access to records.
- Your internet provider, which only carries data and doesn't store it.
- Another provider you share records with for treatment, who has HIPAA duties of their own.

If you're not sure, assume you need one. Asking is free, and a vendor who refuses to sign is telling you something.

## What to ask before they log in

- **Will you sign a BAA?** A reputable IT provider who works with practices will have one ready, or will sign yours. HHS publishes [sample provisions](https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html) if you need a starting point.
- **What will you need to see?** Often the work can be done without opening patient data at all.
- **How will you connect?** Remote access should use multi-factor authentication and be turned off when the work is done.
- **Who else will see it?** Their subcontractors need to agree to the same terms.
- **How fast will you tell us about a problem?** Look for a specific number of days, not "promptly."
- **What happens when we stop working together?** Accounts removed, and any copies returned or destroyed.

Remember the tools behind the vendor too. If they store your backups in a [cloud service](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html), or paste screenshots into an AI tool, that service needs a BAA as well.

## Where the rule is heading

A signature may not be enough for much longer. The [update to the HIPAA Security Rule](https://www.federalregister.gov/documents/2025/01/06/2024-30983/hipaa-security-rule-to-strengthen-the-cybersecurity-of-electronic-protected-health-information) that HHS proposed two years ago would have business associates [verify in writing](https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/factsheet), at least once every 12 months and backed by an expert's written analysis, that they actually have the required safeguards in place. It isn't final, and HHS's [regulatory agenda](https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202504&RIN=0945-AA22) lists it as a long-term action, so nothing changes yet. But asking your vendors the questions above now is the same habit the proposal describes, and it costs nothing to start.

## Going further

My [guide to BAAs](../guides/do-you-need-a-baa.md) goes into a little more detail, and you're welcome to use the short [BAA request](../templates/baa-request.md) and [neon1's example agreement](../templates/business-associate-agreement.md) with any vendor. Many of my projects never need to touch patient information, and I design them that way when I can. When one does, the agreement is signed before any access.

This post explains the idea in general terms. It isn't legal advice, and your privacy officer or attorney makes the call for your practice.

## Sources

- [HHS' Office for Civil Rights settles HIPAA investigation of MMG Fusion](https://www.hhs.gov/press-room/ocr-mmg-fusion-hipaa-agreement.html), US Department of Health and Human Services (March 5, 2026): the breach affecting about 15 million people and the business associate's failure to notify the covered entities.
- [Business associates](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html), HHS: who counts as a business associate.
- [Sample business associate agreement provisions](https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html), HHS: what a BAA must contain.
- [45 CFR 160.103](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-160/subpart-A/section-160.103), eCFR: the legal definitions of covered entity and business associate.
- [Guidance on HIPAA and cloud computing](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html), HHS: why a cloud service holding patient data is a business associate.
- [HIPAA Security Rule to strengthen the cybersecurity of electronic protected health information](https://www.federalregister.gov/documents/2025/01/06/2024-30983/hipaa-security-rule-to-strengthen-the-cybersecurity-of-electronic-protected-health-information), Federal Register (January 6, 2025): the proposed rule's full text.
- [RIN 0945-AA22](https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202504&RIN=0945-AA22), Office of Information and Regulatory Affairs: the proposed rule's place on HHS's regulatory agenda.
- [HIPAA Security Rule notice of proposed rulemaking fact sheet](https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/factsheet), HHS: the proposed yearly verification by business associates.
