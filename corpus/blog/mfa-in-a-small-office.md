---
id: blog-mfa-in-a-small-office
title: "Turning on multi-factor authentication in a small office"
summary: "Which accounts to cover first, which kind of second factor to pick, and how to roll it out before tax season without locking anyone out."
type: post
topic: questions
status: draft
updated: 2026-12-03
created: 2026-12-03
edition: "0.1"
consumers: [blog, ai]
pdf: false
audience: "Owners and office managers of small offices"
related: [blog-tax-preparers-are-financial-institutions, guides-backups-you-can-trust, product-ready-secure-go]
---

# Turning on multi-factor authentication in a small office

An office manager's phone buzzes at 6:40 in the morning with a sign-in request. She didn't ask for it, so she ignores it. It buzzes again, and again, a dozen times before she's out the door. On the train she taps Approve just to make it stop. By lunch, a client has received an email from the office's own address with new wiring instructions for a payment, and it looks exactly like every other email the office sends.

That last part has a name: business email compromise. In the [FBI's 2025 Internet Crime Report](https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf), released in April, it accounts for 24,768 complaints and more than $3 billion in reported losses in a single year. Many of those start the same way, with a stranger signing in to a real mailbox.

Multi-factor authentication, or MFA, asks for a second proof at sign-in on top of the password. It's the single change that stops the most common break-in at small offices. With tax season about seven weeks out, it's also the first item on the list for tax and accounting offices, because the [FTC Safeguards Rule requires it](https://www.ecfr.gov/current/title-16/section-314.4) for anyone who signs in to a system with client information. I covered the rest of that rule in [an earlier post](tax-preparers-are-financial-institutions.md).

Turning MFA on is easy. Turning it on without a week of lockouts and grumbling takes a little planning. Here's the order I use.

## Start with the accounts that unlock everything

Not every account matters equally. Cover these first, in this order:

1. **Email.** Whoever controls your email can reset the password on almost everything else.
2. **The admin accounts** for Microsoft 365 or Google Workspace, your domain registrar, and your website host.
3. **Systems that hold client data**, such as tax or practice software, the client portal, and cloud storage.
4. **Remote access**, such as a VPN or remote desktop tool.
5. **Money**: banking, payroll, and payment processors.

## Pick the right kind of second factor

The options are not equally strong. From strongest to weakest, following [CISA's ranking](https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf):

- **Security keys or passkeys.** A small USB or NFC key, or a passkey stored on a phone or computer. These resist phishing, because they won't answer a fake sign-in page. CISA calls this phishing-resistant MFA and recommends it wherever you can use it.
- **An authenticator app**, either a push prompt with number matching, where you type the number shown on the screen, or a six-digit code. Good for most staff, though a convincing fake sign-in page can still collect a code. A push prompt without number matching is a step weaker, because, as the office manager found, people can be worn down into tapping Approve.
- **Text message codes.** Better than nothing, and the weakest option, since phone numbers can be hijacked. CISA says to use them only as a last resort, and [NIST's authenticator standard](https://pages.nist.gov/800-63-4/sp800-63b.html) restricts them for the same reason.

For a small office, I usually suggest security keys or passkeys for the owner and admin accounts, and an authenticator app with number matching for everyone else.

## Roll it out without lockouts

- [ ] Tell staff a week ahead what's changing and why, in two sentences.
- [ ] Turn it on for yourself and the admin accounts first, and live with it for a few days.
- [ ] Set up a second way in for every admin account, such as a spare security key kept in a safe place, and store the recovery codes somewhere offline.
- [ ] Sit with each person for ten minutes to set it up on their phone. Doing it together prevents most of the support calls later.
- [ ] Turn on the setting that requires MFA, so it isn't optional.
- [ ] Write down who to call and what to do when someone gets a new phone or loses theirs.

In Microsoft 365, [security defaults](https://learn.microsoft.com/en-us/entra/fundamentals/security-defaults) turn on MFA for everyone with one switch, and they're a reasonable start for a small office. In Google Workspace, the admin console can [require 2-Step Verification](https://support.google.com/a/answer/9176657) for the whole organization after an enrollment period.

## Teach one habit

The morning that started this post is the trick to teach against. An attacker who already has a password sends sign-in requests over and over, hoping someone taps Approve to make them stop. The habit is simple: never approve a sign-in you didn't start, and tell someone when it happens. That prompt means the password is already known, so change it the same day.

## Going further

[Ready, Secure, Go](../products/ready-secure-go.md) covers the security basics for a small office if you'd like to do it yourself, and it's free. If you'd rather have a hand, an MFA rollout is one of the smallest projects I take on, and the [first 15-minute call](https://calendly.com/1isgladtobeofservice/neon1-consultation) is free.

## Sources

- [2025 Internet Crime Report](https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf), FBI Internet Crime Complaint Center: 24,768 business email compromise complaints and $3,046,598,558 in reported losses in 2025, and the recommendation to use MFA for webmail and remote access.
- [Implementing phishing-resistant MFA](https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf), Cybersecurity and Infrastructure Security Agency: the kinds of MFA ranked, and why security keys resist phishing.
- [More than a password](https://www.cisa.gov/MFA), CISA: why MFA matters and where to turn it on first.
- [Digital Identity Guidelines, Authentication and Lifecycle Management, SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html), NIST: the federal standard for authenticators, including why text messages are restricted.
- [16 CFR 314.4](https://www.ecfr.gov/current/title-16/section-314.4), eCFR: the Safeguards Rule's MFA requirement for financial institutions, including tax preparers.
- [Security defaults in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/security-defaults), Microsoft: turning on MFA for a whole Microsoft 365 tenant.
- [Deploy 2-Step Verification](https://support.google.com/a/answer/9176657), Google Workspace Admin Help: enforcing 2-Step Verification for an organization.
