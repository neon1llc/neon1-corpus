---
id: company-how-it-works
title: How neon1.tech works
summary: "A plain walk through every part of neon1.tech: the page and its sections, the rain, the white rabbit, the Knowledge Center, the blog, the contact form, Neo, the 1NEON portal and its demo, sample, and guided walkthroughs, and how a change goes live."
type: page
status: adopted
updated: 2026-11-23
created: 2026-11-11
edition: "1.14"
consumers: [ai]
pdf: true
audience: "Anyone curious how the site is put together, from clients to engineers"
origin: "neon1-site, neon1-1NEON, neon1-chat, neon1-aws-infrastructure, and neon1-corpus source code and READMEs"
related: [company-architecture]
---

# How neon1.tech works

The code is public in neon1's [GitHub repositories](https://github.com/neon1llc). For diagrams, see [How neon1 is built](architecture.md).

## The short version

- **The website** is plain HTML, CSS, and JavaScript. There's no framework, no tracking, and no ads.
- **Its words** come from neon1-corpus, a set of Markdown documents. The page, the Knowledge Center, the blog, and Neo all read from it, and a new release reaches the site within about 15 minutes.
- **1NEON** is the client portal at neon1.tech/1NEON. It's a React app with its own API, and it has three public ways to look around without an account.
- **Neo** is the chat in the corner. It answers about neon1 from neon1's public documents, and answers general technology questions as general information.
- **It all runs on AWS**, defined in Terraform. Every repository deploys itself when a change reaches main.

## The home page

One long page of views, each about one screen:

1. **Landing.** The default Sentinel look is a plain page: what I do, the four services, "Discuss a project" and "See the work," and email and booking links. The optional Matrix look is the neon1 wordmark over the rain, with "1 is glad to be of service." A switch on the landing and in the footer changes the look.
2. **Services.** Four kinds of help, and a note that the first 30-minute call is free.
3. **Process.** The five steps: listen, propose, decide, build, and hand over.
4. **Client work.** Case study cards with my role, the problem, the work, and the results.
5. **Code and resources.** neon1's public repositories and tools, each with its status, version, and license. Only the MIT, Apache-2.0, and CC BY-SA ones are open source. The rest are source-available under FSL-1.1, with text under CC BY-ND.
6. **About.** Who I am and how I work, with a link to the [mission and promise](mission.md).
7. **Questions.** Common questions, with a link to the full set.
8. **Contact.** Where and when I work, a booking link, email, phone, and the contact form.

The footer links to the Knowledge Center, the blog, GitHub, the state registration, the policies, and the site's version number.

With motion on, the page moves one view at a time. With reduced motion on, or if the animation library doesn't load, it scrolls like any page. A link like `#case-home` opens that case study.
### The menu and the trip to 1NEON

Links to 1NEON fade through black rain so the two feel like one place.

### Security rules on the page

CloudFront serves every page with a strict content security policy. Scripts, styles, fonts, and network calls may only come from neon1.tech, and inline scripts and styles are blocked, so nothing can call an outside service or load a tracker.

## The rain and the white rabbit

In the Matrix look, the falling green characters are drawn by one shared file, `shared/rain.js`, which also draws the rain behind 1NEON's sign-in and the not-found page. Three buttons on the landing (grid, text, pause) change how it falls. Your choices are saved in your browser. With reduced motion on, the rain is a still frame.

Now and then a white rabbit drops into the rain. Catching it by click or tap stops the rain and loads a 3D scene, which scrolling plays forward and back. The scene and its 3D library download only then, so nobody else pays for them. Keyboard users get a "follow the white rabbit" link. With reduced motion, no WebGL, or a failed load, you get a silent still card, and Esc leaves any time. The room's models and textures are credited in the site's asset manifest.

## The Knowledge Center

[neon1.tech/knowledge](https://neon1.tech/knowledge/) holds every public neon1 document, on shelves that match the corpus folders.

- **Pages.** The build reads the newest corpus release and writes each document as plain HTML at `/knowledge/<shelf>/<name>/`, so search engines, link previews, and readers without JavaScript get the whole page. `/knowledge/corpus.json` names the release that's live.
- **Search** runs in your browser. Nothing you type leaves it.
- **PDFs.** Marked documents get a branded PDF, printed by headless Chromium at each deploy.
- **Diagrams** are Mermaid text in the documents, drawn to SVG ahead of time, with their source shown beneath.

## The blog

[neon1.tech/blog](https://neon1.tech/blog/) holds short posts, about one a week, written in the corpus. There's an RSS feed at `/blog/feed.xml`.

## The contact form

The form sits under "send me your use case" in Contact.

1. The page checks the fields.
2. It sends the message to one public route on 1NEON's API.
3. That route emails hello@neon1.tech with your address as Reply-To. It only ever mails neon1's inbox.
4. A hidden field catches simple bots. Each sender gets five messages an hour, and the form takes 50 a day.

Nothing is saved in your browser. If no answer comes back in time, the page says it can't tell whether the message went, keeps your draft, and never resends by itself. Without JavaScript, the email and phone links do the job.

## Neo, the chat

Neo is the button at the bottom right of neon1.tech and 1NEON's public pages. When you ask something:

1. The chat window sends your question and the conversation so far to `neon1.tech/chat/api/chat`.
2. CloudFront forwards it with a secret header, so the API can't be reached around neon1.tech's limits.
3. The function checks your limits in DynamoDB first.
4. It sends the model every document published for the chat (about 32,000 tokens at release 0.39), with Neo's rules and your conversation. There's no search index. The model is Qwen3 Next 80B on Amazon Bedrock, chosen by testing several models on the same questions.
5. The reply is checked before you see it. Links stay only if the corpus has them, and the length is capped.

- **Limits.** Six questions a minute and 60 an hour per visitor, and 500 a day for the whole site. Going over earns a cooldown that grows with each strike in a day: 2 minutes, 10, an hour, then a day. Repeating a question three times in ten minutes, or pushing Neo off topic, also counts. Visitors are counted by a salted hash of their network address, and entries expire by themselves.
- **Privacy.** The conversation lives only in the open page, and the function never logs it. Amazon says Bedrock doesn't train on it, and that some models may keep it for abuse detection.
- **Staying current.** Every Monday, Neo's repository rebuilds its copy of the corpus and opens a pull request if anything changed. Neo can trail a release by up to a week.
- **Inside 1NEON.** Signed-in people get a separate Neo that knows the portal's guide and their own data, through the same permission checks as the page. It acts only after "Yes, do it."

## The 1NEON portal

[neon1.tech/1NEON](https://neon1.tech/1NEON/) is where a client and I run a project. Every project moves through Needs, Execute, Observe, and Normalize, which spell N E O N.

- **Signing in.** There are no passwords. An eight-digit code arrives by email from notify.neon1.tech. You can then add a passkey, an authenticator app, or text codes, which admin actions ask for. People join by invitation or make a free account of their own. Sign-in runs on Amazon Cognito, with the session in cookies page scripts can't read.
- **Projects.** Each has an overview and a tab per layer. Needs holds the request and my options, each with cost, quality, and effort. The client's decision maker approves one, kept as a record that can't be edited.
- **Files** upload straight to a private bucket and can't be downloaded until a malware scan passes.
- **Notifications.** A bell, plus email or text for the events you choose.

## Trying 1NEON without an account

Three public pages show the real portal with made-up people and companies. Nothing runs against real data, and nothing leaves your browser.

### The sample project at /1NEON/example

A finished project for each of three fictional clients, for reading: Harborline Outfitters (business systems integration), Quillwork Software (cloud modernization), and Fenwick & Marsh Architects (networks and security readiness). Each shows what went wrong along the way.

### The interactive demo at /1NEON/demo

The whole portal, with 1NEON's API running in your browser. You pick who to be. Changes stay on your device in IndexedDB, and "Start over" wipes them. Neo is left out.

### The guided walkthrough at /1NEON/live

A cursor plays through the real portal as one of the same three clients. `?scenario=harborline`, `quillwork`, or `fenwick` picks one, and Harborline plays when none is named. It saves nothing and has pause, speed, Back, and Next.

The bare `/1NEON/live` address plays a three-minute preview. `?play=full` plays the whole engagement in about 17 minutes, from sign-in to ongoing care. `?play=free` follows Noor Haddad, who runs Calder Building Supply, from a free account to client. Short demos cover joining from an invitation, adding a passkey, adding an authenticator app, text codes, and the calendar. Passkey requests go to a pretend prompt, so nothing on your device is touched.

## How it runs

Work starts on its own branch, with checks on every push, and I review each batch, and nothing reaches neon1.tech until it passes. Each repository then deploys itself when the change merges to main, and every deploy stops if a check fails. A deploy never mixes old and new files: everything goes up together as one release, and rollback is one write back to an earlier release in seconds. A release of the site, the corpus, or Neo takes about 12 to 18 minutes, and 1NEON about 26.

It all runs in one AWS account in us-east-1, sized to cost a few dollars a month while it's quiet. Mail runs on Google Workspace. [How neon1 is built](architecture.md) has the diagrams, the AWS services, and what data each part keeps.

## One source for the words

neon1-corpus holds neon1's public words as Markdown, checked by a linter for headers, links, and anything that looks private. Each tagged release exports a bundle per reader: **site**, **blog**, **knowledge**, **chat** (for Neo), and **portal** (for Neo inside 1NEON). The site rebuilds within about 15 minutes of a new release, and Neo's refresh runs every Monday.
