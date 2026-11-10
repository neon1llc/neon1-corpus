---
id: 1neon-guide-account
title: "1NEON guide: sign-in, confirming it's you, notifications, and texts"
summary: "How people get into 1NEON, why admin actions ask to confirm it's you, the three second steps, notifications, texts, and what to do when something is lost."
type: guide
status: adopted
updated: 2026-11-10
created: 2026-11-10
edition: "1.0"
consumers: [portal, ai]
audience: "People signed in to 1NEON, and Neo inside it"
pdf: false
order: 4
origin: "neon1-1NEON apps/api/src (auth, factors, me, notifications) and apps/web/src/pages/Me.tsx"
---

# 1NEON guide: sign-in, confirming it's you, notifications, and texts

## Getting in

1NEON is invitation only. An admin of the organization, or neon1, invites a person by email. The person opens the link, enters their email, and signs in with a code sent to that email (8 digits, valid for a few minutes, in the browser that asked for it), or with a passkey once they've added one. There are no passwords. Didn't get a code: check spam or promotions, wait a minute, then **Send a new code**. The first sign-in offers a one-minute welcome tour, with **Remind me next time** and **Skip**; it can be replayed from **?** or the profile.

Your email address is how 1NEON knows you, and it can't be changed on the profile. A new address means an admin invites the new one and deactivates the old one.

## Confirming it's you

Admin actions need a recent confirmation with a second step, so a stolen email account isn't enough to make changes. They are: inviting people, changing access or deactivating someone, changing settings (stages), naming a decision maker, deleting a project, and deleting someone else's comment or file. When needed, 1NEON asks "Confirm it's you" and offers the person's second steps. Once confirmed, it isn't asked again for 12 hours in that sign-in.

The three second steps, added on the profile under **Two-step verification** (`/1NEON/me#security`):

- **Passkey**: face, fingerprint, or device PIN. Fastest and phishing-resistant. Once added, sign-in offers it first.
- **Authenticator app**: **Set up**, scan the code with Google Authenticator, Microsoft Authenticator, 1Password, Authy, or similar, and type its 6-digit code.
- **Text-message codes**: once a mobile number is verified for texts.

A second one is a backup. Lost one: confirm with another, remove the lost one, and add a new one. Lost all of them: email hello@neon1.tech from the account's address; there's no self-service reset. Email codes still sign you in; the second step is only for admin actions.

## Notifications

The bell glows when something new happens; opening it lists what changed and marks it seen. Important changes also email you. Each person chooses per group on the profile:

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

Once texts are switched on for the portal, a person adds a mobile number on the profile, agrees to texts, saves, then types the 6-digit code 1NEON texts them. Texts only say something new is waiting, with a link; they never name the organization, projects, or files. Reply STOP to any text to turn them off; agreeing again turns them back on. Changing the number turns texts and text codes off until the new number is confirmed.

## Your data, billing, and urgent problems

Invoices and payments happen outside 1NEON. There's no export button; ask hello@neon1.tech for a copy of the organization's data. Data is kept as the record of the work unless the organization asks for deletion. neon1 is one person working planned hours, with no 24/7 response: for an emergency, contact the provider responsible first; report a security problem in the portal to security@neon1.tech.
