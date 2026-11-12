---
id: blog-does-your-it-person-need-a-baa
title: "Does your dental office's IT person need to sign a BAA?"
summary: "Almost certainly, if they can see patient records. How to tell, the few exceptions, what to ask before anyone logs in, and where the rule is heading."
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

Almost certainly, yes. If the person who keeps your computers running can see patient records while they work, HIPAA treats them as a business associate, and you need a business associate agreement, or BAA, signed before they log in. That holds whether they're a local IT shop, a support line for your practice software, or a family friend who comes by when the imaging computer acts up.

## How can you tell?

You need a BAA with a vendor when both of these are true:

- Your practice is a [covered entity](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-160/subpart-A/section-160.103). A dentist or doctor who bills insurance electronically is one.
- The vendor creates, receives, keeps, or sends patient information on your behalf.

Fixing the server that holds your practice management system, setting up the computer that runs imaging, or restoring your backups all put patient records within reach. Under [HHS guidance](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html), that's enough, even if they never open a chart on purpose.

## When don't you need one?

- They only touch equipment with no patient data, like a printer that doesn't store documents, and never have access to records.
- It's your internet provider, which carries data but doesn't store it.
- It's another provider you share records with for treatment, who has HIPAA duties of their own.

If you're not sure, assume you need one. Asking costs nothing, and a vendor who won't sign is telling you something.

## Why does the paper matter?

Because the agreement decides who tells you when something goes wrong, and how fast. Last March, HHS's Office for Civil Rights [settled with MMG Fusion](https://www.hhs.gov/press-room/ocr-mmg-fusion-hipaa-agreement.html), a software company whose system talked directly with its clients' patients. An intruder had reached the names, phone numbers, addresses, birth dates, and appointment times of about 15 million people back in December 2020. OCR says the company never told the practices it worked for, and only opened its investigation after a complaint about patient information posted on the dark web. The practices' patients trusted the practices, and the practices found out last.

## What should you ask before they log in?

- **Will you sign a BAA?** A provider who works with practices will have one ready or will sign yours. HHS publishes [sample provisions](https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html).
- **What will you need to see?** Often the work can be done without opening patient data at all.
- **How will you connect?** Remote access should use multi-factor authentication and be turned off when the work is done.
- **Who else will see it?** Their subcontractors must agree to the same terms.
- **How fast will you tell us about a problem?** Look for a number of days, not "promptly."
- **What happens when we part ways?** Accounts removed, and copies returned or destroyed.

Remember the tools behind the vendor, too. If they keep your backups in a [cloud service](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html) or paste screenshots into an AI tool, that service needs a BAA as well.

## Is the rule changing?

Possibly, and in the direction of more proof. The [HIPAA Security Rule update](https://www.federalregister.gov/documents/2025/01/06/2024-30983/hipaa-security-rule-to-strengthen-the-cybersecurity-of-electronic-protected-health-information) that HHS proposed two years ago would have business associates [verify in writing](https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/factsheet), at least once every 12 months and backed by an expert's written analysis, that their safeguards are actually in place. It isn't final, and HHS's [regulatory agenda](https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202504&RIN=0945-AA22) lists it as a long-term action. Asking the questions above is the same habit, and you can start now.

My [guide to BAAs](../guides/do-you-need-a-baa.md) goes a little deeper, and the short [BAA request](../templates/baa-request.md) and [example agreement](../templates/business-associate-agreement.md) are free to use with any vendor.

This post explains the idea in general terms. It isn't legal advice, and your privacy officer or attorney makes the call for your practice.

## Sources

- [Business associates](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html), US Department of Health and Human Services: who counts as a business associate.
- [45 CFR 160.103](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-160/subpart-A/section-160.103), eCFR: the legal definitions of covered entity and business associate.
- [HHS' Office for Civil Rights settles HIPAA investigation of MMG Fusion](https://www.hhs.gov/press-room/ocr-mmg-fusion-hipaa-agreement.html), HHS (March 5, 2026): the breach affecting about 15 million people and the failure to notify the covered entities.
- [Sample business associate agreement provisions](https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html), HHS: what a BAA must contain.
- [Guidance on HIPAA and cloud computing](https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html), HHS: why a cloud service holding patient data is a business associate.
- [HIPAA Security Rule to strengthen the cybersecurity of electronic protected health information](https://www.federalregister.gov/documents/2025/01/06/2024-30983/hipaa-security-rule-to-strengthen-the-cybersecurity-of-electronic-protected-health-information), Federal Register (January 6, 2025): the proposed rule's full text.
- [HIPAA Security Rule notice of proposed rulemaking fact sheet](https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/factsheet), HHS: the proposed yearly verification by business associates.
- [RIN 0945-AA22](https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202504&RIN=0945-AA22), Office of Information and Regulatory Affairs: the proposed rule's place on HHS's regulatory agenda.
