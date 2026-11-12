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
updated: 2026-11-12
created: 2026-11-09
edition: "1.3"
consumers: [knowledge, ai]
pdf: true
audience: "Families and households"
related: [case-cameras-to-grandmas-email, standards-security-and-data]
---

# A password manager for your family

A password manager remembers a different strong password for every account, so nobody has to reuse one. Reused passwords are one of the most common ways accounts get taken over. Here's how to set one up for a household without anyone getting locked out.

## Pick one together

Choose a well-known manager with family sharing and apps for every device you use. Many good ones exist, including the ones built into Apple and Google devices. Pick the one everyone in the household will use.

Recovery works differently in each one, and in most of them it only works if it was set up before anything went wrong. Before you move important accounts, read the [recovery section](#recovery-by-product) for the one you picked.

## Before you start

- [ ] Decide who will be the family organizer
- [ ] Pick a time when everyone has their phone and computer nearby
- [ ] Have a pen and paper ready for the recovery details
- [ ] Know which product and plan you're using, and which recovery options it offers on that plan
- [ ] Make sure each person can get into the email address and phone number their account uses for recovery, on their own

## Set it up

1. **The organizer creates the family account** and sets a long master password: four or five random words are easy to remember and hard to guess.
2. **Turn on two-step sign-in** for the password manager itself.
3. **Set up recovery now, the way your product does it** (see [recovery by product](#recovery-by-product)), and write down anything it gives you on paper. Keep it somewhere safe at home, such as with other important papers. This is the one thing to protect most.
4. **Invite each family member.** Each person gets their own vault and master password. Shared things, like streaming and Wi-Fi, go in a shared vault.
5. **Install it on every device**, then turn on autofill in the phone's settings.

## Move the important accounts first

Start with email, banking, and the phone carrier. These are the accounts that can reset everything else. For each one:

1. Sign in with the old password.
2. Let the manager generate a new one and save it.
3. Turn on two-step sign-in while you're there.

Do the rest over the following weeks, whenever each account comes up. There's no need to change everything in one evening.

## For older relatives

- Keep it to one device at first.
- Show it, then let them do it, then let them fix a mistake on purpose.
- Leave a one-page printed guide with the three things they'll do most: open the manager, find a password, and fill it in.
- If your product has a trusted contact or family recovery feature, set it up now so a family member can help if they get stuck.

## Recovery by product

*Reviewed 2026-11-10.* Each product changes its options over time, so follow its own instructions, linked below, rather than this summary. In every case, recovery may be impossible if nothing was set up beforehand. Don't try a recovery just to test it: some steps reset your password or keys, or can't be undone. Instead, check that what you set up is still in place.

### Apple Passwords and iCloud Keychain

Your passwords are tied to your Apple Account, so recovering them means recovering that account. Apple offers a [recovery contact](https://support.apple.com/102641), a trusted person who can help you get a code, and an optional [recovery key](https://support.apple.com/109345). If you turn on a recovery key and later can't provide it, Apple says you can be locked out permanently, and Apple can't give it back to you. Don't store the key in the Passwords app itself.

### Google Password Manager

Your passwords are tied to your Google Account. By default you get them back on a new device by signing in with your Google password, so keep your Google recovery phone and email current. If you turned on [on-device encryption](https://support.google.com/accounts/answer/11350823), Google says losing every recovery option (your Google password, an eligible device's screen lock, and every signed-in device) can mean losing the saved passwords.

### Bitwarden

Bitwarden [can't reset or recover a forgotten master password](https://bitwarden.com/help/forgot-master-password/). Recovery only works through something set up in advance, such as a password hint, a device that's still signed in, a login passkey, or emergency access. If none of those work, the vault can't be recovered. [Emergency access](https://bitwarden.com/help/emergency-access/) has to be set up before it's needed, and the person granting it needs a paid plan (Premium, or a paid organization such as Families). The trusted contact can use a free account.

### 1Password

Sign-in uses your account password together with a Secret Key, which is printed on your Emergency Kit. The Secret Key isn't a recovery method: you need it to sign in on a new device. Separately, you can generate a [recovery code](https://support.1password.com/recovery-codes/) on individual and family accounts and keep it safe; it lets you recover your own account with access to your email, and it doesn't exist until you create it. In a family account, the [family organizer can also recover](https://support.1password.com/recovery/) a member's account. After either kind of recovery you get a new Secret Key, so save the new Emergency Kit.

## If something goes wrong

- **Forgot the master password:** follow your product's own recovery steps from [recovery by product](#recovery-by-product), using what you set up in step 3.
- **Lost a phone:** sign in on another device and remove the lost one from the account.
- **A site says the password is wrong:** check that you're on the real site, not a look-alike from a link in an email.

## Sources

- [Digital identity guidelines, SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html), NIST: current advice on passwords and second steps.
- [Passkeys](https://fidoalliance.org/passkeys/), FIDO Alliance: sign-in without passwords, and why it resists phishing.
- [Small organisations guide to cyber security](https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security), UK National Cyber Security Centre: passwords and two-step sign-in, in plain terms.
