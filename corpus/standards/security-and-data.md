---
id: standards-security-and-data
title: Security and data
summary: How neon1 handles your accounts, access, and information, and the baseline every project starts from.
type: standard
status: adopted
updated: 2026-11-13
created: 2026-11-01
consumers: [ai]
pdf: true
edition: "1.2"
order: 10
origin: "neon1's internal handbook, security and data"
related: [standards-ai-quality, standards-reliability-and-recovery, policy-privacy, templates-business-associate-agreement]
---

# Security and data

Security work protects your task, your information, and your way back when something goes wrong. It starts with who owns what and who can get in, then adds controls to match the data and stakes. A tool or a scan doesn't make a system secure, so I never say it does.

## Frameworks, used for what they're for

| Framework | What I use it for |
|---|---|
| [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) | Spotting missing responsibilities across Govern, Identify, Protect, Detect, Respond, and Recover |
| [CIS Controls, Implementation Group 1](https://www.cisecurity.org/controls/implementation-groups/ig1) | A prioritized starting point for basic hygiene |
| [OWASP Application Security Verification Standard (ASVS)](https://asvs.owasp.org/) | Testable requirements for applications, cited by version and number |
| [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final) | How software gets built and released safely |

Informed by a framework isn't certified against it. I won't call work "NIST certified," "compliant," or "enterprise grade" because these sources shaped it.

## Know the data first

Before connecting anything, we list the information, why it's needed, where it lives, who sees it, which vendors get it, and when it's deleted, labeled public, internal, confidential, or restricted.

I don't collect what the work doesn't need, and development uses sample or redacted records. Before data goes to a vendor, I explain where it's processed, how long it's kept, and who else touches it, checking whether consumer or business terms apply.

Information lingers in forgotten places: notifications, automation history, logs, AI prompts, search indexes, and backups. I won't promise complete deletion until I know how each behaves.

## Access and ownership

- Named accounts, the least access the job needs, and separate admin roles.
- Multi-factor sign-in on business and admin accounts, phishing-resistant where the service supports it.
- No shared admin passwords, and no credentials in proposals, chat, code, or bookmarks.
- Every access grant records who approved it, why, and when it ends. After handover I remove what I no longer need and check it's gone.
- No remote-control software left installed without a support agreement and your informed consent.

For multi-user apps, I test permissions on the server, since hiding a button doesn't stop a direct request, and check that no customer can reach another's records by changing an ID, including through exports and search.

## Thinking through threats, briefly

For each project I sketch what's built, where information changes hands, what could go wrong, and how we'll check. For an intake form: a forged submission, a stolen account, a malicious attachment, or a misdirected email. Each risk ends with a decision and a test.

## The baseline

| Area | Practice | Evidence kept |
|---|---|---|
| Inventory | Systems, accounts, vendors, data, and owners are named | A dated inventory, unknowns included |
| Sign-in | Multi-factor sign-in and protected recovery | Configuration evidence, never the codes |
| Permissions | Least access, with tests that someone can't get in | Role table and test results |
| Devices | Supported software, updates, disk encryption | A device baseline and update record |
| Storage and transfer | Encryption, retention, and access that fit the data | A data-flow record |
| Secrets | Kept out of code, rotated when exposed | An inventory by name, never the values |
| Backup | Recovery that doesn't share the original's weak points | A restore test |
| Logging | Important actions logged without sensitive content | Sample redacted events |
| Vulnerabilities | Findings triaged and fixes rechecked | Finding, decision, fix, recheck |
| Changes | Big changes reviewed, with a way back | Version, approval, and release record |
| Incidents | Contacts, authority, and a fallback are written down | A current incident procedure |

This is neon1's starting point, not a full standard or a guarantee against compromise. When the stakes call for it, I bring in a specialist.

## Software and secrets

Code follows the [development](development.md) standard. A leaked secret is revoked or rotated and the old one confirmed dead; deleting the visible copy isn't enough. A scan of a live system can change data, so its scope is agreed first.

## Fixing vulnerabilities

I ask whether the affected part is present, reachable, being exploited, and what it would expose. A severity score sorts the list but doesn't describe your risk. If something urgent needs a faster response than I can give, we arrange someone who can first.

## Privacy and agreements

neon1's promises and a vendor's are kept apart. The right agreements for your data and location come before work starts, such as a [business associate agreement](../templates/business-associate-agreement.md) when health information is involved. A vendor's compliance badge doesn't cover a custom setup or how I handle the data.

Real customer information never appears in a public demo, forum post, or code issue, and screenshots, file names, logs, comments, and revision history are scrubbed.

## Before you rely on it

Access is right, normal and failure paths behave as agreed, findings are fixed or knowingly accepted, recovery is believable, recurring charges are understood, and you can run it. We record who decided, on what evidence, and name anything important that's unknown, then resolve it or limit the release.

## Sources

- [Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework), NIST: a shared outline of what security covers.
- [CIS Controls, implementation group 1](https://www.cisecurity.org/controls/implementation-groups/ig1), Center for Internet Security: the safeguards sized for small teams.
- [Digital identity guidelines, SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html), NIST: passwords, multi-factor sign-in, and recovery.
- [Application Security Verification Standard](https://asvs.owasp.org/), OWASP: what to check in a web application.
- [Secure Software Development Framework, SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final), NIST: security practices across development.
- [Threat modeling](https://community.owasp.org/Threat_Modeling), OWASP: asking what could go wrong before building.
- [Privacy Framework](https://www.nist.gov/privacy-framework), NIST: treating personal data as a risk to people.
