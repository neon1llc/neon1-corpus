---
id: guides-password-manager-for-family
title: "A password manager for your family"
summary: "How to move a household onto a password manager, step by step, without locking anyone out."
short:
  - "One person sets up a family account, and everyone gets their own vault plus a shared one."
  - "Set up recovery first and keep it on paper at home, since most products can't let you back in without it."
  - "Move email, banking, and the phone carrier first, and the rest over the following weeks. [Recovery by product](#recovery-by-product)."
type: guide
status: adopted
updated: 2026-11-20
created: 2026-11-09
edition: "1.8"
consumers: [knowledge, ai]
pdf: true
audience: "Families and households"
related: [case-cameras-to-grandmas-email, standards-security-and-data]
---

# A password manager for your family

A password manager remembers a different strong password for every account, so nobody reuses one, a common way accounts get taken over.

## Before you start

Choose a well-known manager with family sharing and apps for all your devices, including the ones built into Apple and Google. Recovery differs in each, and in most it only works if set up beforehand, so read [recovery by product](#recovery-by-product) for yours first.

- [ ] Decide who the family organizer is
- [ ] Pick a time when everyone has their phone and computer nearby
- [ ] Have pen and paper ready for the recovery details
- [ ] Make sure each person can get into the email address and phone number their account uses for recovery

## Set it up

1. **The organizer creates the family account** and sets a long master password. Four or five random words are easy to remember and hard to guess.
2. **Turn on two-step sign-in** for the manager itself.
3. **Set up recovery now,** the way your product does it, and write anything it gives you on paper, kept at home with other important papers. Protect this most.
4. **Invite each family member.** Each person gets their own vault and master password. Streaming and Wi-Fi go in a shared vault.
5. **Install it on every device,** then turn on autofill in the phone's settings.

## Move the important accounts first

Start with email, banking, and the phone carrier, the accounts that can reset everything else. For each, sign in with the old password, let the manager generate and save a new one, and turn on two-step sign-in. Do the rest over the following weeks as each account comes up.

For older relatives, start with one device, show it, let them do it, and leave a one-page printed guide: open the manager, find a password, fill it in. Set up a trusted contact or family recovery feature if your product has one.

## Recovery by product

*Reviewed 2026-11-10.* Products change their options, so follow each one's linked instructions over this summary. Recovery may be impossible if nothing was set up beforehand. Don't test by recovering, since some steps reset passwords or keys or can't be undone. Check that your setup is still in place instead.

- **Apple Passwords and iCloud Keychain.** Recovering your passwords means recovering your Apple Account. Apple offers a [recovery contact](https://support.apple.com/102641), a trusted person who can help you get a code, and an optional [recovery key](https://support.apple.com/109345). If you turn on a recovery key and later can't provide it, Apple says you can be locked out permanently, and Apple can't give it back. Don't store the key in the Passwords app itself.
- **Google Password Manager.** Your passwords are tied to your Google Account. By default you get them back on a new device by signing in with your Google password, so keep your recovery phone and email current. With [on-device encryption](https://support.google.com/accounts/answer/11350823), Google says losing every recovery option (your Google password, an eligible device's screen lock, and every signed-in device) can mean losing the saved passwords.
- **Bitwarden.** It [can't reset or recover a forgotten master password](https://bitwarden.com/help/forgot-master-password/). Recovery works only through something set up in advance, such as a password hint, a device that's still signed in, a login passkey, or [emergency access](https://bitwarden.com/help/emergency-access/). Without one, the vault can't be recovered. Granting emergency access needs a paid plan, and the trusted contact can use a free account.
- **1Password.** Signing in on a new device needs your account password and the Secret Key printed on your Emergency Kit. The Secret Key isn't a recovery method. Individual and family accounts can create a [recovery code](https://support.1password.com/recovery-codes/) to recover your own account with access to your email, and it doesn't exist until you create it. In a family account, the [family organizer can also recover](https://support.1password.com/recovery/) a member's account. After either, you get a new Secret Key, so save the new Emergency Kit.

If you lose a phone, sign in on another device and remove it from the account.

## Sources

- [Digital identity guidelines, SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html), NIST: current advice on passwords and second steps.
- [Passkeys](https://fidoalliance.org/passkeys/), FIDO Alliance: sign-in without passwords, and why it resists phishing.
- [Small organisations guide to cyber security](https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security), UK National Cyber Security Centre: passwords and two-step sign-in, in plain terms.
