---
id: 1neon-guide-account
title: "1NEON guide: sign-in, confirming it's you, notifications, and texts"
summary: "How people get into 1NEON, why admin actions ask to confirm it's you, the three second steps, notifications, texts, and what to do when something is lost."
type: guide
status: adopted
updated: 2026-11-20
created: 2026-11-10
edition: "1.17"
consumers: [portal, ai]
audience: "People signed in to 1NEON, and Neo inside it"
pdf: false
order: 4
origin: "neon1-1NEON apps/api/src (auth, factors, me, notifications) and apps/web/src/pages/Me.tsx"
---

# 1NEON guide: sign-in, confirming it's you, notifications, and texts

## Getting in

People join by invitation or by making their own free account. An admin of the organization, or neon1, invites a person by email, and they open the link and enter their email. When sign-up is open, someone new chooses **Create an account** on the sign-in screen and gives:

- An email, their name (one name is fine), which describes them best, and their organization's name (not asked of an individual, optional for **Something else**).
- Optionally, a website or public page, a city and state (a state alone, or a place outside the US), and how they found neon1.

Each field is checked as it's filled in. The email's domain must take mail and can't be a temporary mailbox, a website must look like a web address (it's never visited), and a US city is spelled properly when it's on the public places list and kept as typed when it isn't.

Either way, people sign in with an 8-digit code sent to their email (valid a few minutes, in the browser that asked), or with a passkey once added. There are no passwords. The first sign-in offers a one-minute welcome tour.

A free account holds up to 3 projects, 50 items in a project, and 10 files (10 MB each, 50 MB in all), with no inviting, approvals, proposals, billing, or Neo until neon1 converts it to a client account. A client account takes any file up to 100 MB. How a free account works, including the assessment, the call, the outline tips, and its 30-day deletion with check-ins at 7 and 14 days and a final notice at 21, is in [free 1NEON accounts](../guides/free-accounts.md). **Keep it 30 more days** (once) and **Download a copy** are on Home's **Your account**.

An email address can't be changed on the profile. An admin invites the new address and deactivates the old one.

## Confirming it's you

Admin actions need a recent second-step confirmation, so a stolen email account isn't enough: inviting people, changing access or deactivating someone, changing settings (stages), naming a decision maker, deleting a project, and deleting someone else's comment or file. 1NEON asks "Confirm it's you" and offers the person's second steps. Once confirmed, it doesn't ask again for 12 hours in that sign-in.

The second steps are added on the profile under **Two-step verification** (`/1NEON/me#security`):

- **Passkey:** face, fingerprint, or device PIN. Phishing-resistant, and offered first at sign-in once added.
- **Authenticator app:** **Set up**, scan the code with Google Authenticator, Microsoft Authenticator, 1Password, Authy, or similar, and type its 6-digit code.
- **Text-message codes,** once a mobile number is verified for texts.

A second one is a backup. If one is lost, confirm with another, remove the lost one, and add a new one. If all are lost, email hello@neon1.tech from the account's address. There's no self-service reset, and email alone isn't enough, since a stolen mailbox is what the second step guards against. neon1 confirms who it is by calling a number already on record (never one from the email), plus another admin's written OK if the organization has one. Then the lost methods are removed and dated, and the person is emailed to add a new one. Email codes still sign you in meanwhile. Only admin actions wait.

## Notifications and texts

The bell glows when something new happens. Each person chooses per group on the profile whether it also reaches them by email, text, or neither:

| Group | What counts | Email by default |
|---|---|---|
| Files, People and access, Decisions and options, Agreements, invoices, and payments, Workflow and stages | Uploads and removals, invites and access changes, options proposed or approved, agreements, invoices, and payments, projects created or moved or trashed | Yes |
| Comments, Updates and items, Sign-ins | Comments, status updates and other items, someone signing in | No |

To turn on texts, add a mobile number on the profile, agree to texts, save, and type the 6-digit code 1NEON texts you. Texts say only that something new is waiting, with a link, and never name the organization, projects, or files. Reply STOP to turn them off, and agree again to turn them back on. Changing the number turns texts and text codes off until the new one is confirmed.

## Your data and urgent problems

Invoices and payments are in each project's Execute layer. An admin can **Download everything** from Settings, under Your data. What the zip holds, and when it ends in -partial.zip, is in the [1NEON help](../faq/1neon-help.md). Data is kept as the record of the work unless the organization asks for deletion.

neon1 is one person working planned hours, with no 24/7 response. For an emergency, contact the provider responsible first. Report a security problem in the portal to security@neon1.tech.
