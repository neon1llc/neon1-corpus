---
id: blog-mfa-in-a-small-office
title: "Turning on multi-factor authentication in a small office"
summary: "What the FBI's newest numbers on email compromise mean for a small office, which accounts to protect first, and how to roll out MFA without locking anyone out."
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

24,768. That's how many business email compromise complaints the FBI received last year, according to its [2025 Internet Crime Report](https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf). Reported losses came to $3,046,598,558.

Divided out, that's about 68 complaints a day, every day, averaging roughly $123,000 each. And those are only the ones that were reported.

A common pattern is simple. Someone gets a password, through a fake sign-in page or a reused password from an old breach, and signs in to a real mailbox. They read for a while. Then a client gets an email from the office's own address with new wiring instructions, and it looks exactly like every other email the office sends.

The change that stops most of it is multi-factor authentication, or MFA: a second proof at sign-in, on top of the password. The FBI lists it among its recommendations, especially for webmail and remote access. For tax and accounting offices, the [FTC Safeguards Rule requires it](https://www.ecfr.gov/current/title-16/section-314.4) for anyone who signs in to a system with client information, and with filing season about seven weeks away, now is the time.

## Which accounts first

1. **Email.** Whoever controls your email can reset the password on almost everything else.
2. **Admin accounts** for Microsoft 365 or Google Workspace, your domain registrar, and your website host.
3. **Client data:** tax or practice software, the client portal, and cloud storage.
4. **Remote access:** a VPN or remote desktop tool.
5. **Money:** banking, payroll, and payment processors.

## Which kind of second factor

[CISA ranks the options](https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf), and the order matters:

- **Security keys or passkeys** are strongest. They won't answer a fake sign-in page, which is why CISA calls them phishing-resistant.
- **An authenticator app** is good for most staff, especially with number matching, where you type the number shown on the screen. A plain push prompt is a step weaker, because people can be worn down into tapping Approve.
- **Text message codes** are the last resort. Phone numbers can be hijacked, and [NIST's standard](https://pages.nist.gov/800-63-4/sp800-63b.html) restricts them for that reason.

In a small office, I usually put security keys or passkeys on the owner and admin accounts and an authenticator app with number matching on everyone else.

## Rolling it out

- [ ] Tell staff a week ahead what's changing and why, in two sentences.
- [ ] Turn it on for yourself and the admin accounts first, and live with it for a few days.
- [ ] Give every admin account a second way in, like a spare key in a safe, and keep recovery codes offline.
- [ ] Sit with each person for ten minutes while they set it up. It prevents most of the support calls later.
- [ ] Turn on the setting that makes MFA required, not optional. In Microsoft 365 that's [security defaults](https://learn.microsoft.com/en-us/entra/fundamentals/security-defaults); in Google Workspace, [enforced 2-Step Verification](https://support.google.com/a/answer/9176657).
- [ ] Write down what to do when someone gets a new phone or loses theirs.

One habit to teach with it: never approve a sign-in you didn't start. A stream of prompts you didn't ask for means someone already has the password. Change it that day, and tell whoever looks after your accounts.

Sixty-eight a day is a big number. Keeping your office out of it takes mostly an afternoon of setup and a week of getting used to it.

## Sources

- [2025 Internet Crime Report](https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf), FBI Internet Crime Complaint Center: 24,768 business email compromise complaints and $3,046,598,558 in reported losses in 2025, and the recommendation to use MFA for webmail and remote access.
- [Implementing phishing-resistant MFA](https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf), Cybersecurity and Infrastructure Security Agency: the kinds of MFA ranked.
- [Digital Identity Guidelines, SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html), NIST: the federal standard for authenticators, including the limits on text messages.
- [16 CFR 314.4](https://www.ecfr.gov/current/title-16/section-314.4), eCFR: the Safeguards Rule's MFA requirement for financial institutions, including tax preparers.
- [Security defaults in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/security-defaults), Microsoft: requiring MFA across a Microsoft 365 tenant.
- [Deploy 2-Step Verification](https://support.google.com/a/answer/9176657), Google Workspace Admin Help: enforcing 2-Step Verification for an organization.
