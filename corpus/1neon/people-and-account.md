---
id: 1neon-guide-account
title: "1NEON guide: sign-in, confirming it's you, notifications, and texts"
summary: "How people get into 1NEON, why admin actions ask to confirm it's you, the three second steps, notifications, texts, and what to do when something is lost."
type: guide
status: adopted
updated: 2026-11-16
created: 2026-11-10
edition: "1.10"
consumers: [portal, ai]
audience: "People signed in to 1NEON, and Neo inside it"
pdf: false
order: 4
origin: "neon1-1NEON apps/api/src (auth, factors, me, notifications) and apps/web/src/pages/Me.tsx"
---

# 1NEON guide: sign-in, confirming it's you, notifications, and texts

## Getting in

You join 1NEON by invitation, or by making your own free account. An admin of the organization, or neon1, invites a person by email; they open the link and enter their email. Someone new chooses **New here? Start for free** on the sign-in screen (or **start a free 1NEON account** on neon1.tech) and gives an email, their name (one name is fine), which describes them best, their organization's name (not asked of an individual, and optional for **Something else**), and, optionally, a website or public page, a city and state (a state alone, or a place outside the US), and how they found neon1. Each field is checked as it's filled in: the email's domain must take mail and can't be a temporary mailbox, a website must look like a web address (it's never visited), and a US city is spelled properly when it's on the public places list and kept as typed when it isn't. A problem shows under its field. Either way, they sign in with an 8-digit code sent there (valid a few minutes, in the browser that asked), or with a passkey once added. There are no passwords. If a code doesn't arrive, check spam or promotions, wait a minute, then **Send a new code**. The first sign-in offers a one-minute welcome tour, with **Remind me next time** and **Skip**. Replay it from **?** or the profile.

A free account is limited: up to 3 projects, 50 items in a project, and 10 documents or pictures (10 MB each), with no inviting, approvals, proposals, billing, or Neo until neon1 converts it to a client account. Home's **Next step** sends neon1 a request for an assessment (an approach and the first questions to settle, based on the needs written there) or a free 15-minute call, with an optional note; the reply comes by email, and Home shows when each was last asked for. If nothing in it changes for 30 days, it's deleted, after check-ins at 7 and 14 days and a final notice at 21. Home's **Your free account** shows the date, with **Keep it 30 more days** (once) and **Download a copy**.

Your email address can't be changed on the profile. A new address means an admin invites the new one and deactivates the old one.

## Confirming it's you

Admin actions need a recent second-step confirmation, so a stolen email account isn't enough. They are: inviting people, changing access or deactivating someone, changing settings (stages), naming a decision maker, deleting a project, and deleting someone else's comment or file. 1NEON asks "Confirm it's you" and offers the person's second steps. Once confirmed, it doesn't ask again for 12 hours in that sign-in.

The three second steps, added on the profile under **Two-step verification** (`/1NEON/me#security`):

- **Passkey**: face, fingerprint, or device PIN. Fastest and phishing-resistant. Once added, sign-in offers it first.
- **Authenticator app**: **Set up**, scan the code with Google Authenticator, Microsoft Authenticator, 1Password, Authy, or similar, and type its 6-digit code.
- **Text-message codes**: once a mobile number is verified for texts.

A second one is a backup. Lost one: confirm with another, remove the lost one, and add a new one. Lost all of them: email hello@neon1.tech from the account's address. There's no self-service reset, and email alone isn't enough, since a stolen mailbox is what the second step guards against. neon1 first confirms who it is by calling a phone number already on record for the person or their organization (never one given in the email), plus the written OK of another admin when the organization has one. Then the lost methods are removed, the removal is dated, and the person is emailed to add a new one. Email codes still sign you in meanwhile. The second step is only for admin actions.

## Notifications

The bell glows when something new happens. Opening it lists what changed. Important changes also email you. Each person chooses per group on the profile:

| Group | What counts | Email by default |
|---|---|---|
| Files | A file is uploaded or removed | Yes |
| People and access | Someone is invited, joins, or changes access | Yes |
| Decisions and options | An option is proposed or approved | Yes |
| Workflow and stages | A project is created, moves stage, or goes to Trash, or the stages change | Yes |
| Comments | Someone comments on an item | No |
| Updates and items | Status updates, requests, tasks, measures, and other items | No |
| Sign-ins | Someone in the organization signs in | No |

## Texts

Add a mobile number on the profile, agree to texts, save, then type the 6-digit code 1NEON texts you. Texts only say something new is waiting, with a link, and never name the organization, projects, or files. Reply STOP to turn them off. Agreeing again turns them back on. Changing the number turns texts and text codes off until the new one is confirmed.

## Your data, billing, and urgent problems

Invoices and payments are in each project's Execute layer, under Invoices. An admin can download all the organization's data any time from Settings, under Your data, with **Download everything**: one zip of JSON and CSV records plus every uploaded file, comment, the activity history, and projects in Trash, with a README and a manifest.json listing every file. Its name ends in -complete.zip, or -partial.zip if anything couldn't be included. Data is kept as the record of the work unless the organization asks for deletion. neon1 is one person working planned hours, with no 24/7 response. For an emergency, contact the provider responsible first. Report a security problem in the portal to security@neon1.tech.
