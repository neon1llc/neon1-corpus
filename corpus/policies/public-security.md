---
id: policy-public-security
title: Security policy
summary: How neon1 protects its services and your information, and what happens when something goes wrong.
type: policy
status: draft
updated: 2026-11-18
created: 2026-11-18
edition: "0.1"
consumers: [site, chat, knowledge, ai]
pdf: true
published: "https://neon1.tech/knowledge/policies/public-security/"
origin: neon1 public services security policy
related: [policy-security, policy-privacy, policy-cookies, standards-security-and-data]
---

# Security policy

*Last updated November 18, 2026.*

This policy sets the rules I hold neon1 to when running neon1.tech, Neo, and 1NEON. It also covers the systems I use to operate them.

## The short version

- Public services must be kept apart from private systems and client records.
- I limit access to what's needed and check that those limits work.
- Security monitoring and optional audience measurement serve different purposes.
- If something goes wrong, I investigate it, limit further harm, and notify affected people when required.

## What I protect

Your information, your access to it, and the services you rely on. I keep a record of what each system holds, where it goes, who can access it, and when it can be removed.

I review what I publish so private information stays private. In 1NEON, the server must check access to an organization's work, including searches, files, and exports. Private systems must not be directly accessible from the public internet.

I require multi-factor sign-in for administrative access, limit permissions to what's needed, and keep credentials out of code and logs. Information must be protected in transit and at rest according to its sensitivity.

## What I monitor

Security monitoring helps me spot abuse, unexpected access, and service failures. I limit what goes into logs, who can read them, and how long they're kept.

Optional audience measurement has a different purpose: learning which pages help people and where they get stuck. I won't turn it on before describing it in the privacy and cookie notices and providing a choice. Declining it must not prevent you from using the website.

Client records, credentials, payment details, messages, and form contents must not be collected for audience measurement. Security records must not be used to build marketing profiles.

## How I manage changes

Before a change goes live, I consider who can reach it, what information it handles, and what could go wrong. I check permissions, dependencies, and software integrity, and keep a way back to a working release.

I review vulnerabilities and unsupported components, arrange fixes according to risk, and check that the fixes work. Development and production must remain separate. Tests use made-up data.

I assess the risks of new uses of personal information before introducing them.

## If something goes wrong

I investigate reports, limit further harm, preserve evidence where needed, and restore affected services. If your information is affected, I assess what happened and what notices are required by law or our agreement.

I keep a record of the incident and use what I learn to correct the cause. I don't promise that every incident can be prevented or that I can respond around the clock.

## Reporting a concern

Write to [security@neon1.tech](mailto:security@neon1.tech) if you believe you've found a vulnerability. The [security disclosure policy](https://neon1.tech/knowledge/policies/security/) describes what's in scope and what happens next.

For privacy concerns, corrections, or deletion requests, see the [privacy and data policy](https://neon1.tech/1NEON/privacy).

## How I check the policy

I review this policy at least annually and when a material change affects security or privacy. I keep records of checks, findings, decisions, and corrective work. Where a rule cannot yet be met, I record the gap and limit or defer the affected release.

## Sources

- [NIST SP 800-53, Revision 5](https://doi.org/10.6028/NIST.SP.800-53r5), Security and Privacy Controls for Information Systems and Organizations. Selected controls guide access, boundary protection, monitoring, incident response, information handling, and privacy. This policy is not a claim of NIST certification or full conformity.
