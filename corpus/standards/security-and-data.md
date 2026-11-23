---
id: standards-security-and-data
title: Security and data
summary: How neon1 handles your accounts, access, and information, and the baseline every project starts from.
type: standard
status: adopted
updated: 2026-11-20
created: 2025-08-26
consumers: [ai]
pdf: true
edition: "1.7"
order: 10
origin: "neon1's internal handbook, security and data"
related: [standards-ai-quality, standards-reliability-and-recovery, policy-privacy, templates-business-associate-agreement]
---

# Security and data

Security starts with who owns what and who can get in, then adds controls to match the data and stakes. A tool or scan doesn't make a system secure, so I never say it does.

## Frameworks

I use the [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) to spot missing responsibilities, [CIS Controls IG1](https://www.cisecurity.org/controls/implementation-groups/ig1) as a starting point for basic hygiene, the [OWASP ASVS](https://asvs.owasp.org/) for testable application requirements, and the [NIST SSDF](https://csrc.nist.gov/pubs/sp/800/218/final) for building and releasing software safely. Informed by a framework isn't certified against it. I won't call work "NIST certified," "compliant," or "enterprise grade" because these sources shaped it.

## Data first

Before connecting anything, we list the information, why it's needed, where it lives, who sees it, which vendors get it, and when it's deleted, labeled public, internal, confidential, or restricted. I don't collect what the work doesn't need, and development uses sample or redacted records. Before data goes to a vendor, I explain where it's processed, how long it's kept, and who else touches it, and check whether consumer or business terms apply.

Information lingers in notifications, automation history, logs, AI prompts, search indexes, and backups. I won't promise complete deletion until I know how each behaves.

## Access and ownership

- Named accounts, the least access the job needs, and separate admin roles.
- Multi-factor sign-in on business and admin accounts, phishing-resistant where the service supports it.
- No shared admin passwords, and no credentials in proposals, chat, code, or bookmarks.
- Every grant records who approved it, why, and when it ends. After handover I remove what I no longer need and check it's gone.
- No remote-control software left installed without a support agreement and your informed consent.

For multi-user apps, I test permissions on the server, since hiding a button doesn't stop a direct request, and check that no customer can reach another's records by changing an ID, including through exports and search.

## The baseline

Every project keeps a named inventory of systems, accounts, vendors, data, and owners, with unknowns included. Sign-in uses multi-factor authentication and protected recovery. Permissions are least access, with tests that someone can't get in. Devices run supported software with updates and disk encryption. Storage and transfer use encryption, retention, and access that fit the data. Secrets stay out of code and are rotated when exposed. Backups don't share the original's weak points and have a restore test. Important actions are logged without sensitive content. Findings are triaged and fixes rechecked, big changes are reviewed with a way back, and incident contacts, authority, and a fallback are written down. Evidence is kept for each, never codes or secret values. When the stakes call for it, I bring in a specialist.

## Software, threats, vulnerabilities, and privacy

For each project I sketch what's built, where information changes hands, and what could go wrong, such as a forged submission, a stolen account, a malicious attachment, or a misdirected email. Each risk ends in a decision and a test.

Code follows the [development](development.md) standard. A leaked secret is revoked or rotated and the old one confirmed dead, because deleting the visible copy isn't enough. A scan of a live system can change data, so its scope is agreed first.

For a vulnerability I ask whether the affected part is present, reachable, being exploited, and what it would expose. A severity score sorts the list but doesn't describe your risk. If something urgent needs a faster response than I can give, we arrange someone who can first.

neon1's promises and a vendor's are kept apart. The right agreements for your data and location come before work starts, such as a [business associate agreement](../templates/business-associate-agreement.md) for health information. A vendor's compliance badge doesn't cover a custom setup or how I handle the data. Real customer information never appears in a public demo, forum post, or code issue, and screenshots, file names, logs, comments, and revision history are scrubbed.

## Before you rely on it

Access is right, normal and failure paths behave as agreed, findings are fixed or knowingly accepted, recovery is believable, recurring charges are understood, and you can run it. Anything important that's unknown is resolved or limits the release.

## Sources

- [Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework), NIST: a shared outline of what security covers.
- [CIS Controls, implementation group 1](https://www.cisecurity.org/controls/implementation-groups/ig1), Center for Internet Security: the safeguards sized for small teams.
- [Digital identity guidelines, SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html), NIST: passwords, multi-factor sign-in, and recovery.
- [Application Security Verification Standard](https://asvs.owasp.org/), OWASP: what to check in a web application.
- [Secure Software Development Framework, SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final), NIST: security practices across development.
- [Threat modeling](https://community.owasp.org/Threat_Modeling), OWASP: asking what could go wrong before building.
- [Privacy Framework](https://www.nist.gov/privacy-framework), NIST: treating personal data as a risk to people.
