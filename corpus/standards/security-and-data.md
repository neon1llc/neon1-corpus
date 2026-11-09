---
id: standards-security-and-data
title: Security and data
summary: How neon1 handles your accounts, access, and information, and the baseline every project starts from.
type: standard
status: adopted
updated: 2026-11-09
consumers: [chat, knowledge, ai]
pdf: true
edition: "1.0"
origin: "Documents/BUSINESS/neon1/Organization/Core/05-security-and-data.md"
related: [standards-ai-quality, standards-reliability-and-recovery, policy-privacy, templates-business-associate-agreement]
---

# Security and data

Security work protects your actual task, your information, and your way back when something goes wrong. It starts with who owns what and who can get in, then adds controls to match the data and what's at stake. Installing a tool or running a scan doesn't make a system secure, so I never describe it that way.

## Frameworks, used for what they're for

| Framework | What I use it for |
|---|---|
| [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) | Spotting missing responsibilities across Govern, Identify, Protect, Detect, Respond, and Recover |
| [CIS Controls, Implementation Group 1](https://www.cisecurity.org/controls/implementation-groups/ig1) | A prioritized starting point for basic hygiene |
| [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) | Testable requirements for applications, cited by version and number |
| [NIST Secure Software Development Framework](https://csrc.nist.gov/pubs/sp/800/218/final) | How software gets built and released safely |

Informed by a framework isn't the same as certified against it. I won't call work "NIST certified," "compliant," or "enterprise grade" because these sources shaped it.

## Know the data first

Before connecting anything, we list the information involved, why it's needed, where it lives, who can see it, which vendors receive it, and when it should be deleted. We label it in plain words: public, internal, confidential, or restricted.

I don't collect what the work doesn't need. Development uses sample or redacted records. Before your data goes to a vendor, I explain where it's processed, how long it's kept, and who else touches it. Free consumer accounts and business accounts often have different terms, and that matters.

Information also lingers in places people forget: email notifications, automation history, logs, AI prompts, search indexes, and backups. I won't promise complete deletion until I know how each of those behaves.

## Access and ownership

- Named accounts, the least access the job needs, and separate admin roles.
- Multi-factor sign-in on business and admin accounts, phishing-resistant where the service supports it.
- No shared admin passwords, and no credentials in proposals, chat, code, or bookmarks.
- Every grant of access records who approved it, why, and when it ends. After handover I remove what I no longer need and check that it's gone.
- No remote-control software left installed without a support agreement and your informed consent.

For apps with more than one user, I test permissions on the server. Hiding a button doesn't stop a direct request, so I check that one customer can't reach another's records by changing an ID, including through exports and search.

## Thinking through threats, briefly

For each project I sketch what's being built, where information crosses from one party to another, what could go wrong, what reduces the risk, and how we'll check. For a simple intake form that might mean a forged submission, a stolen account, a malicious attachment, a duplicate, an email sent to the wrong person, a failed integration, and lost recovery access. The output that matters is a decision and a test, not a diagram.

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

This is neon1's starting point, not a full copy of any standard and not a guarantee against compromise. When the stakes call for it, I bring in a specialist.

## Software and automation

I use maintained dependencies, keep build credentials narrow, and never give untested outside code access to production secrets. Third-party CI actions are pinned to exact versions. Secret scanning, dependency scanning, and static analysis each catch different things and miss different things. A scan against a live system can change data, so its scope is agreed first.

When a secret leaks, I revoke or rotate it and confirm the old one no longer works. Deleting the visible copy isn't enough.

## Fixing vulnerabilities

I ask whether the affected part is actually present, whether the weakness can be reached, whether it's being exploited, and what it would expose. A severity score helps sort the list but doesn't describe your risk. If something urgent needs a faster response than I can give, we arrange someone who can before I take on the service.

## Privacy and agreements

What neon1 promises and what a vendor promises are kept apart. The right agreements for your data and location are in place before work starts, such as a [business associate agreement](../templates/business-associate-agreement.md) when health information is involved. A vendor's compliance badge doesn't cover a custom setup or how I handle the data.

Real customer information never appears in a public demo, forum post, or code issue. Screenshots, file names, and logs are scrubbed, and so are document comments and revision history.

## Before you rely on it

Access is right, normal and failure paths behave as agreed, security findings are fixed or knowingly accepted, recovery is believable, recurring charges are understood, and you can run it. We write down who decided and on what evidence. If something important is unknown, we name it and either resolve it or limit the release.
