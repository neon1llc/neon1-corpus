---
id: company-how-it-works
title: How neon1.tech works
summary: "A plain walk through every part of neon1.tech: the page and its sections, the rain, the white rabbit, the Knowledge Center, the blog, the contact form, Neo, the 1NEON portal and its demo, sample, and guided walkthroughs, and how a change goes live."
type: page
status: adopted
updated: 2026-11-13
created: 2026-11-11
edition: "1.2"
consumers: [knowledge, ai]
pdf: true
audience: "Anyone curious how the site is put together, from clients to engineers"
origin: "neon1-site, neon1-1NEON, neon1-chat, neon1-aws-infrastructure, and neon1-corpus source code and READMEs"
related: [company-architecture]
---

# How neon1.tech works

This is a tour of everything on neon1.tech and what happens behind each part, written so you don't need to read code to follow it. Where a detail matters, such as how far you scroll or how long a pause lasts, it comes from the code itself. All of it is public in neon1's [GitHub repositories](https://github.com/neon1llc). For the diagrams of the same system, see [How neon1 is built](architecture.md).

## The short version

- **The website** is plain HTML, CSS, and JavaScript files. There's no framework, no tracking, and no ads. It loads only its own files.
- **Its words** come from one place, neon1-corpus, a set of Markdown documents. The page, the Knowledge Center, the blog, and Neo all read from it, and a new corpus release reaches the site within about 15 minutes, as plain HTML.
- **1NEON** is the client portal at neon1.tech/1NEON. It's a React app with its own API, and it has three public ways to look around without an account.
- **Neo** is the chat in the corner. It answers from neon1's public documents and nothing else.
- **It all runs on AWS**, defined in Terraform, and every repository deploys itself when a change reaches its main branch.

## The home page

The home page is one long page split into sections, which I call views. Each view fills about one screen.

### The sections

1. **The landing.** The neon1 wordmark over the rain, with "1 is glad to be of service." under it. The letters of the wordmark scramble through random characters and lock in one at a time, left to right.
2. **Services.** Four kinds of help, each with who it's for, and a note that the first call is free and takes 15 minutes.
3. **Process.** The five steps of a project: listen, propose, decide, build, and hand over. It links to the sample project and the demo in 1NEON.
4. **Client work.** Case study cards in a row you can slide sideways, with arrow buttons. Each card shows the four stages of the project, Needs, Execute, Observe, and Normalize, in one line each, plus the result in numbers.
5. **p.r.o.s.e.** Short for purposeful, repeatable, open-source engineering. It lists neon1's own repositories and the tools I build for others, each with whether it's public and its current version.
6. **About.** My photo, who I am, and how I work, with a link to the [mission and promise](mission.md).
7. **Questions.** The most common questions, each folded until you open it, with a link to the full set in the Knowledge Center.
8. **Contact.** Where and when I work, a booking link for a free 15-minute call, email, phone, and the contact form.

A footer closes the page with contact links, the Knowledge Center, the blog, GitHub, the state registration, the policies, and the site's version number.

### Moving between views

On a computer or phone with motion turned on, the page moves one view at a time:

- When you scroll and reach the edge of a view, the page resists a little, like a rubber band. If you've been to the next view before, it starts to fade in as you pull.
- Pull past a set point and the page settles into the next view on its own, fast at first and slowing as it arrives. Stop short and it springs back.
- A view taller than the screen scrolls normally until you reach its edge.
- The first time you reach a view, its heading fades in and then each piece rises into place in order. Later visits only fade the whole view in.
- Momentum left over from a flick is absorbed after a view settles, so one swipe never skips two views. A finger that keeps pushing carries on.
- The arrow keys, Page Up, Page Down, Home, and End work the same way. Tabbing into a section shows it at once, so keyboard focus never lands on something hidden.
- A link to a section, from the menu for example, glides there and leaves keyboard focus at the start of it.

If your device asks for reduced motion, or the animation library doesn't load, none of this happens. The page scrolls the way any page does and everything is visible. Turning on reduced motion while the page is open hands scrolling back to the browser immediately.

### Case studies

The arrow button on a card grows the card into a full panel over the page. Closing it shrinks the panel back into the card, and the page hasn't moved underneath, so you're where you were. While a case study is open, everything behind it is switched off for the mouse, the keyboard, and screen readers, and Neo steps aside.

A link to one card, such as `#case-home`, scrolls to the Client work view, slides the row to that card, marks it, and puts keyboard focus on its button. The browser's Back button returns to where the link was.

### The menu and the trip to 1NEON

On a wide screen the links sit in the top bar. On a phone they're behind a menu button. When you follow a link to 1NEON, the site fades to black rain first and leaves a one-time note for the portal, which keeps the screen black as it loads and then fades its own sign-in in. The two feel like one place.

### Security rules on the page

CloudFront serves every page with a strict content security policy. Scripts, styles, fonts, and network calls may only come from neon1.tech itself, and inline scripts and styles are blocked. That's why every script and stylesheet is its own file. It also means nothing on the page can call an outside service or load a tracker.

## The rain

The green characters falling behind the landing are drawn on an HTML canvas by one shared file, `shared/rain.js`. The same file draws the rain behind 1NEON's sign-in and the not-found page.

- **Columns.** Each column drops a bright character at its head and leaves a trail that fades. About 15 steps happen each second.
- **Words.** Now and then a column spells a word one letter at a time and holds it for about two seconds. Values like "listen," "ownership," and "recovery" come in gold. neon1's own names, such as "neon1," "1NEON," and "1isgladtobeofservice," come in neon1's green.
- **The glass.** The landing's text panel, the top bar's links, and the rain buttons act like thick glass. Each one shows the rain behind it slightly magnified, with a rim that bends it inward.
- **Waking up.** As you scroll past the landing, the rain and its controls fade out and the page turns light. Once it's fully faded, the rain stops drawing, so it costs nothing while you read.

Three buttons at the bottom of the landing control it:

| Button | What it does |
|---|---|
| **grid** | Switches between columns falling in step and columns falling at their own speeds |
| **text** | Cycles the characters: a mix of writing systems, katakana, numbers, symbols, emoji, faces, or all of them |
| **pause** | Stops and starts the rain |

Your choices are saved in your browser, so neon1.tech and 1NEON show the same rain. With reduced motion on, the rain is a still frame.

## The white rabbit

Now and then a white rabbit drops into the rain as a single character. It never lands under the text or the buttons. Click or tap it and you've caught it. Keyboard users have the same way in: a "follow the white rabbit" link sits after the top bar's links, hidden until it gets focus, like a skip link.

What happens after a catch:

1. **The rain stops** with a glitch that lasts about two seconds: freezes, skipped frames, bands of the screen sliding sideways, and a flash, then stillness.
2. **The 3D scene loads.** The scene and its 3D library are only downloaded now, so nobody pays for them who doesn't catch the rabbit.
3. **Scrolling down plays the scene.** The landing turns out to be the picture on an old tube TV. The view pulls back out of the set into a sunlit room with two leather wingback chairs, turns to the window, gets up, walks over with the bob of each step, glances at a model car on the sill, and goes out through the opening to a view of a back yard, a road, a park around a pond, and hills. It ends on "go touch grass."
4. **Scrolling up plays it backward**, back into the TV, and the rain starts again.

Scrolling only moves the scene forward or back. It never plays on its own. On a phone a full walk takes about seven screen heights of dragging, about ten quick swipes. A touchpad takes about nine screens, a notched mouse wheel about 45 clicks, and the arrow keys about 25 presses. The scene spends that input evenly on how much the view changes, so a quick turn doesn't rush by.

Some details inside the scene:

- **Sound** is made live in the browser with the Web Audio API: the TV's hum and whine, static, the room's quiet air, wind in the leaves, and birds. It starts quietly once the scroll out of the TV begins and stops when you're back at the landing.
- **The car** on the sill starts when you click it. The headlights flash twice, the starter cranks, and the engine catches and idles. Its sound is a real V8 recording, downloaded only after the first click, slowed and blended so the idle never audibly repeats.
- **The sky** has drifting clouds. When a cloud covers the sun, the light in the room dims and the beams through the window fade.
- **The plaque** over the window reads "Temet Nosce," drawn with a pen stroke in code, so no font file is needed.

If your device asks for reduced motion, can't run WebGL, or the scene fails to load, you get a still card instead, and it's silent. Esc leaves at any time, and keyboard focus goes back to where it was. While the scene is up, a line only screen readers hear explains how to move and how to leave.

The room's models and textures are credited in the site's asset manifest. The car is based on a Creative Commons model, unbranded and recolored, and the trees and photographed textures come from Poly Haven.

## The Knowledge Center

The Knowledge Center at [neon1.tech/knowledge](https://neon1.tech/knowledge/) holds every public document neon1 has: services, the FAQ, case studies, products, standards, guides, templates, forms, examples, and policies. It's grouped into shelves, one per folder of the corpus.

- **Where pages come from.** Each tagged release of neon1-corpus can export a "knowledge" bundle. The site's build reads the newest release and turns every document in it into its own page at `/knowledge/<shelf>/<name>/`, with the same top bar and footer as the home page. Every page is written ahead of time as plain HTML, so search engines, link previews, and readers without JavaScript get the whole page. `/knowledge/corpus.json` names the corpus release that's live.
- **Search** runs in your browser. On your first keystroke it fetches one index file, and then matches your words against titles first, then headings, then summaries, then the text. It knows some words that mean the same thing, so "Wi-Fi" and "wireless" find each other. Nothing you type leaves the browser.
- **PDFs.** Documents marked for it get a branded PDF, printed by a headless Chromium during each deploy. Links in a PDF point back to neon1.tech, since a PDF travels on its own.
- **Diagrams** are written as Mermaid text inside the documents, drawn to SVG images ahead of time, and shown with their source beneath them.

## The blog

The blog at [neon1.tech/blog](https://neon1.tech/blog/) holds short posts written in the corpus like everything else, about one a week. Each post gets its own page with its date, topic, and who it's for, the index lists them newest first, and an RSS feed sits at `/blog/feed.xml`. Posts end with plain share links, Copy link, and your device's share sheet, with no outside scripts. They're built from the same corpus release as the Knowledge Center and share its top bar and menu.

## The contact form

The form sits folded under "send me your use case" in the Contact view. You can pick any of the four services or none, add your own words under "something else," say what's going on, and give your name, email, and organization if you like.

When you press send:

1. The page checks the fields and puts the cursor in the first one that needs attention.
2. It sends the message to one public route on 1NEON's API.
3. That route emails the message to hello@neon1.tech, with your address as Reply-To, so my reply goes straight to you. It only ever mails neon1's own inbox, never the address someone types, so it can't be used to send mail to anyone else.
4. A hidden field that people never see catches simple bots. Each sender can send five messages an hour, and the whole form takes 50 a day.

Nothing is saved in your browser or put in the address. If an answer doesn't come back in time, the page says it can't tell whether the message went through and keeps your draft, so you can check before sending again. It never resends by itself. Without JavaScript, the form stays hidden and the email and phone links do the job.

## Neo, the chat

Neo is the button at the bottom right of neon1.tech and 1NEON's public pages. It answers questions about neon1 from neon1's public documents, in the voice of Neo from the Matrix films, with the odd line from them.

**What happens when you ask something:**

1. The chat window sends your question, with the conversation so far, to `neon1.tech/chat/api/chat`. Since that's the same address as the site, the strict security policy needs no exception.
2. CloudFront forwards it to the chat's API and adds a secret header that only CloudFront knows, so the API can't be reached around neon1.tech's limits.
3. The function checks your limits in a DynamoDB table before anything else.
4. It sends the model the whole public corpus, about 12,000 tokens, with Neo's rules and your conversation. There's no search index. The model is Qwen3 Next 80B on Amazon Bedrock, picked by running the same test questions against several models. A question costs under a fifth of a cent.
5. The reply is checked before you see it: links are kept only if the corpus has them, and the length is capped.

**Limits.** Each visitor can ask six questions a minute and 60 an hour, and the whole site gets 500 a day. Going over earns a cooldown that grows with each strike in a day: 2 minutes, then 10, then an hour, then a day. Asking the same question three times in ten minutes, or repeatedly trying to get Neo off topic, counts as a strike too. A visitor is counted by a salted hash of their network address, so the table never holds an address. Everything in it expires by itself.

**Privacy.** The conversation lives only in the open page and is gone when you reload. The chat function never logs what you wrote, and Amazon Bedrock doesn't keep the questions or answers or train on them.

**Staying current.** Every Monday, the chat's repository rebuilds its copy of the corpus from the latest corpus release and opens a pull request if anything changed. Merging it deploys the new text.

**Neo inside 1NEON.** Signed-in people in 1NEON have a second, separate Neo that knows the portal's guide and the person's own data. It reads through the same permission checks as the page, and it can offer a tour or a plan. A plan runs in the person's own browser, one normal step at a time, and only after they press "Yes, do it."

## The 1NEON portal

1NEON at [neon1.tech/1NEON](https://neon1.tech/1NEON/) is where a client and I run a project together. Every project moves through four layers, Needs, Execute, Observe, and Normalize, which spell N E O N.

### Signing in

There are no passwords. You type your email, and an eight-digit code arrives from notify.neon1.tech. Once you're in, you can add a passkey (Touch ID, Face ID, or Windows Hello), an authenticator app, or text-message codes. Admin actions such as inviting someone ask you to confirm it's you with one of those first. Only invited email addresses can make an account. Sign-in runs through Amazon Cognito, and the session is held in cookies the page's own JavaScript can't read.

### Inside

- **Home** shows what needs you, what's coming up, and recent activity.
- **Board** and **Projects** show every project by stage, as a list or a timeline.
- **A project** has an overview and a tab for each layer. Needs holds the request, the files asked for, and the options I propose, each with cost, quality, and effort. The client's decision maker approves one, and the approval is kept as a record that can't be edited. Execute holds the plan and the work. Observe holds the measures against the goals. Normalize holds the handover, such as a runbook and a recorded walkthrough.
- **Files** upload straight from your browser to a private bucket and can't be downloaded until a malware scan passes.
- **The bell** in the top bar glows when someone else did something. You choose on your profile which events also reach you by email or text.
- **Search** (Ctrl K or ⌘K) jumps to any page or project.
- **?** at the top right explains the page in view and can spotlight its parts.
- **Themes.** Awake is light and the default. Matrix is green on black. Device follows your device.

Every change writes an audit record, and any message it should send goes into an outbox in the same database transaction. A worker sends the outbox every minute and retries what fails, so a saved change can't lose its email.

## Trying 1NEON without an account

Three public pages show the portal without signing in. Each one uses the real app and the real screens, with made-up people and a made-up bakery.

### The sample project at /1NEON/example

A single page that tells one finished project from start to end, one card per layer, in the portal's own frame. It's for reading, and it links to the other two.

### The interactive demo at /1NEON/demo

The whole portal, working, with 1NEON's own API running inside your browser instead of on a server. It has the same routes, the same permission rules, and the same starting data as the real thing.

- You sign in by picking who to be, such as Pradeep as neon1 or someone at a client.
- Everything you change is saved on your device in IndexedDB, so it's still there after a reload. If your browser won't allow that, the demo still works and tells you it lasts only as long as the tab.
- Nothing leaves your browser. The demo makes no network calls for data, and Neo is left out.
- "Start over" on the sign-in screen wipes your changes and reloads the starting data.

### The guided walkthrough at /1NEON/live

A walkthrough plays itself on the real portal while you watch. A cursor moves, clicks, types, and drags as Maria, who owns Maple Street Bakery. Her thoughts appear beside the cursor, and a line at the bottom of the screen says what's happening, like subtitles. Like the demo, it runs on the in-browser API, and everything is made up and stays in your browser. It starts fresh each time and saves nothing.

Every walkthrough opens on a card that says who Maria is, what you'll see, and how long it takes, and nothing moves until you press **Start**. Each ends on a closing card that says what happened, with **Watch again**, the full story or the interactive demo, the other walkthroughs, and help. **Exit** returns to the page and the question you came from. The lengths on those cards are measured: a check plays every walkthrough in a real browser before a release and fails if one takes much longer or shorter than it says.

There are a few kinds:

- **The preview.** The bare `/1NEON/live` address plays a short version first: one request becoming a handover in about two minutes, with request, compare, approve, progress, and handover. Comparing opens the hours behind a price, and progress shows the hours logged.
- **The whole story.** `?play=full` plays 14 chapters in about 13 minutes: sign in, profile and alerts, invite the team, start a project, tell neon1 what's needed, neon1 listens, options arrive, choose an option, pay the deposit, the work, measure it, hand over, pay the final invoice, and ongoing care.
- **Short demos.** One thing each, start to finish: joining from an invitation, adding a passkey, adding an authenticator app, and text codes. Links from the FAQ can also start partway into the whole story.

Every walkthrough starts at the sign-in screen with Maria thinking about why she's there. She signs in with an emailed code, then walks to the page click by click: the menu, then the project's row, then its tab, the way a person would. It never starts already signed in.

#### How the cursor moves

The cursor is drawn on top of the page. It's the normal arrow, and it turns into a text I-beam over fields, as a real browser's would.

- **Moving.** To reach something, the cursor first scrolls it into view if it's hidden, then glides to it. It aims a little off center, as a hand would. The glide eases in and out, and its length depends on the distance: between about a quarter of a second and one second at the base pace. If the target moves during the glide, because the screen rotated or a menu slid in, it aims again, up to three times.
- **Hovering.** Whatever is under the cursor gets the portal's own hover look, so buttons and rows light up as it passes.
- **Clicking.** It rests a moment, presses with a small ring, and clicks the element.
- **Typing.** It clicks into the field and types one character at a time, about 60 to 75 thousandths of a second a letter, a little longer at spaces, and a breath after punctuation. It sets each value the way React expects, so the page reacts exactly as it would to your own typing.
- **Dragging.** To upload a file, it picks up a file from a pretend desktop at the bottom left and carries a ghost of it to the drop area, tilting a little in the air. The page receives the same drag events a real drag sends.
- **Menus.** If a link isn't on screen, it opens the menu first, from the tab bar on a phone or the top bar's button elsewhere, and then picks the link.
- **Thoughts.** Maria's thought bubble rides below and to the right of the cursor, slides left near the edge of the screen, and moves above it near the bottom. A new thought waits until the last one has been up long enough to read. Screen readers hear each new thought.
- **The other side.** When Pradeep does something, such as sharing options, it happens through the same API as if from his own browser. The screen refreshes, and a small note by the bell says who did it.
- **Mail, phone, and passkeys.** The short demos draw Maria's mail app, her phone, and the browser's passkey prompt as plain windows over the portal. The emails are the real templates 1NEON sends, and the phone shows a real authenticator code. Passkey requests go to the pretend prompt, so nothing on your device is touched.

With reduced motion on, the cursor jumps between places instead of gliding, and pages scroll instantly. It still shows where each click happens.

#### Pausing, resuming, speed, and Back

The bar at the top has one segment for each chapter, the previous chapter on the left, the next on the right, and play, speed, and the current chapter's name between them. The name opens a list of every chapter and the short demos.

- **Pause and play.** The pause button, or Space, holds the story between any two small actions. The walkthrough keeps its own clock that stops while paused, so a pause in the middle of a step never runs out the time a step is allowed.
- **Exploring while paused.** While it plays, the portal underneath is locked, so neither clicks nor the keyboard reach it. Paused, the portal is live, and you can click around or use the keyboard. If you did, resuming replays the current section from its start, so the story doesn't continue from a page it didn't expect.
- **Leaving the tab.** Switching apps or tabs pauses it, so nothing plays unseen. Coming back resumes by itself after about a second, unless you paused it yourself or clicked in the portal meanwhile. Time while the phone was locked counts as paused too.
- **Speed.** A slider from 0.5x to 2x in quarter steps. It applies from the next movement and is saved in your browser.
- **Back and Next.** The left and right arrow keys or buttons. At the start of each section, the walkthrough saves a snapshot of all the data, the page, and who's signed in. Back restores that snapshot and plays the section again, so the screen matches the story exactly. A chapter not reached yet is set up first behind a loading screen that names the chapter and fills a line, and then plays at normal speed.
- **Browser Back.** The walkthrough changes the address as it moves, but it replaces the entry rather than adding new ones. So the browser's Back button leaves the walkthrough for the page that linked to it.
- **Refreshing.** After a refresh partway through, the opening card offers **Continue** at the chapter you were on, or **Start from the beginning**.
- **Your screen.** A phone's screen stays lit while a walkthrough plays, and dims as usual once it's paused or over. Browsers without that ability behave as before.
- **When something goes wrong.** If a step can't find what it's looking for in time, the bar says "One moment…" and the chapter starts again from its snapshot. If that fails too, it rebuilds from the very beginning. After a third failure it stops on a card that says so and offers to play the chapter again, start over, or try the demo. It never loops.


## How a change goes live

Each repository deploys itself when a change is merged to its main branch. GitHub Actions signs in to AWS with short-lived credentials through OpenID Connect, so no repository holds AWS keys. Every deploy runs its checks first and stops if any fail.

- **The site** checks its HTML, links, assets, file sizes, and secrets, then drives the page and the chat window in a headless browser with every API faked. Then it builds the Knowledge Center's PDFs and deploys.
- **1NEON** runs its type checks, tests, and build, applies its Terraform, and ships its functions and app. It uploads its versioned files first and its page last.
- **Neo** runs its tests, and its Terraform ships the code.
- **Infrastructure** is planned and applied by Terraform. The permissions that let deploys reach AWS are the exception: I apply those by hand, so a deploy can never widen its own access.

After a successful deploy, each pipeline confirms the live version and tags the release on GitHub, from the top entry of the repository's changelog.

### The release switch

A deploy never mixes old and new files. The site's pages, scripts, and styles go up together into a new folder, `releases/<id>/`, where the id is a fingerprint of their contents. Only once the whole folder is up does the deploy write that id to a small key value store in CloudFront. A CloudFront Function reads that key on every request and serves the file from the live folder.

So every visitor moves to the new release at the same moment, and no one gets a new page with an old script. A new folder also means new cache addresses, so nothing needs clearing from the cache. The last 5 releases are kept, and a rollback is one write back to an earlier id, done in seconds.

Fonts and media are shared across releases and never change at the same address. A changed image gets a new file name. That lets browsers keep them for a year.

## Where it runs

Everything runs in one AWS account in the us-east-1 region, sized to cost a few dollars a month while it's quiet.

| Part | AWS service |
|---|---|
| The neon1.tech address | Route 53, with DNSSEC |
| Serving every page and routing every address | CloudFront, with a certificate from ACM and two small CloudFront Functions |
| The site's files and 1NEON's app | Private S3 buckets that only CloudFront can read |
| 1NEON's API and Neo's API | API Gateway and Lambda |
| 1NEON's data and the chat limits | DynamoDB |
| 1NEON's sign-in | Cognito |
| 1NEON's email and texts | SES and End User Messaging |
| Neo's model | Amazon Bedrock |
| Alarms and budgets | CloudWatch and SNS, which email me |

neon1.tech mail runs on Google Workspace. One CloudFront distribution sends each address to its owner: `/` and its files to the site, `/1NEON` to the portal's app, `/1NEON/api` to its API, and `/chat/api` to Neo. Unknown addresses get a 404 page with the rain behind it.

## One source for the words

neon1-corpus holds neon1's public words as Markdown documents, each with a short header saying what it is, who reads it, and its edition. A linter checks every document for its header, its links, and anything that looks private. Each tagged release exports a bundle for each reader:

- **site**, for the case studies and questions on the home page
- **blog**, for the blog and its feed
- **knowledge**, for the Knowledge Center and its PDFs
- **chat**, for Neo
- **portal**, for Neo inside 1NEON

The site always builds from the newest release: every 15 minutes its deploy workflow compares that release with `/knowledge/corpus.json` on the live site and, when they differ, rebuilds and switches to a new release, without changing the site's own version. Neo refreshes its copy every Monday. Each reader's checks fail if its copy drifts from the release it built from. This document lives there too.
