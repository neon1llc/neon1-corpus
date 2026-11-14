---
id: company-how-it-works
title: How neon1.tech works
summary: "A plain walk through every part of neon1.tech: the page and its sections, the rain, the white rabbit, the Knowledge Center, the blog, the contact form, Neo, the 1NEON portal and its demo, sample, and guided walkthroughs, and how a change goes live."
type: page
status: adopted
updated: 2026-11-14
created: 2026-11-11
edition: "1.5"
consumers: [ai]
pdf: true
audience: "Anyone curious how the site is put together, from clients to engineers"
origin: "neon1-site, neon1-1NEON, neon1-chat, neon1-aws-infrastructure, and neon1-corpus source code and READMEs"
related: [company-architecture]
---

# How neon1.tech works

A tour of everything on neon1.tech and what happens behind it, with no code reading needed. Details such as scroll distances and pauses come from the code itself, all public in neon1's [GitHub repositories](https://github.com/neon1llc). For the diagrams of the same system, see [How neon1 is built](architecture.md).

## The short version

- **The website** is plain HTML, CSS, and JavaScript files. There's no framework, no tracking, and no ads. It loads only its own files.
- **Its words** come from one place, neon1-corpus, a set of Markdown documents. The page, the Knowledge Center, the blog, and Neo all read from it, and a new corpus release reaches the site within about 15 minutes, as plain HTML.
- **1NEON** is the client portal at neon1.tech/1NEON. It's a React app with its own API, and it has three public ways to look around without an account.
- **Neo** is the chat in the corner. It takes what it says about neon1 from neon1's public documents, and answers general technology questions as general information.
- **It all runs on AWS**, defined in Terraform, and every repository deploys itself when a change reaches its main branch.

## The home page

The home page is one long page of sections, called views, each about one screen.

### The sections

1. **The landing.** The neon1 wordmark over the rain, with "1 is glad to be of service." under it. Its letters scramble and lock in one at a time, left to right.
2. **Services.** Four kinds of help, each with who it's for, and a note that the first call is free and takes 15 minutes.
3. **Process.** The five steps of a project: listen, propose, decide, build, and hand over. It links to the sample project and the demo in 1NEON.
4. **Client work.** A sideways row of case study cards. Each shows the project's four stages, Needs, Execute, Observe, and Normalize, in a line each, plus the result in numbers.
5. **p.r.o.s.e.** Purposeful, repeatable, open-source engineering: neon1's own repositories and the tools I build for others, each with its status and version.
6. **About.** My photo, who I am, and how I work, with a link to the [mission and promise](mission.md).
7. **Questions.** The common questions, folded until opened, with a link to the full set.
8. **Contact.** Where and when I work, a booking link for a free 15-minute call, email, phone, and the contact form.

A footer closes the page with contact links, the Knowledge Center, the blog, GitHub, the state registration, the policies, and the site's version number.

### Moving between views

With motion on, the page moves one view at a time:

- At a view's edge, the page resists a little, like a rubber band. A view you've seen before fades in as you pull.
- Pull past a set point and it settles into the next view, slowing as it arrives. Stop short and it springs back.
- A view taller than the screen scrolls normally until you reach its edge.
- On a first visit, a view's heading fades in and each piece rises into place. Later visits just fade it in.
- Leftover momentum is absorbed, so one swipe never skips two views. A finger that keeps pushing carries on.
- The arrow keys, Page Up, Page Down, Home, and End work the same way. Tabbing into a section shows it at once, so focus never lands on something hidden.
- A link to a section, from the menu for example, glides there and leaves keyboard focus at the start of it.

With reduced motion on, or if the animation library doesn't load, the page scrolls like any page, with everything visible, and switching it on mid-visit takes effect at once.

### Case studies

The arrow button on a card grows the card into a full panel. Closing it shrinks back into the card, and the page hasn't moved underneath. While it's open, everything behind is off for the mouse, keyboard, and screen readers, and Neo steps aside.

A link to one card, such as `#case-home`, scrolls to the Client work view, slides the row to that card, marks it, and puts keyboard focus on its button. The browser's Back button returns to where the link was.

### The menu and the trip to 1NEON

Links sit in the top bar on a wide screen and behind a menu button on a phone. Following a link to 1NEON fades the site to black rain and leaves a one-time note, so the portal stays black as it loads and then fades in its sign-in. The two feel like one place.

### Security rules on the page

CloudFront serves every page with a strict content security policy: scripts, styles, fonts, and network calls may only come from neon1.tech, and inline scripts and styles are blocked. So every script and stylesheet is its own file, and nothing can call an outside service or load a tracker.

## The rain

The falling green characters are drawn on a canvas by one shared file, `shared/rain.js`, which also draws the rain behind 1NEON's sign-in and the not-found page.

- **Columns.** Each column drops a bright character and leaves a fading trail, about 15 steps a second.
- **Words.** Now and then a column spells a word and holds it for about two seconds. Values like "listen," "ownership," and "recovery" come in gold. neon1's own names, such as "neon1," "1NEON," and "1isgladtobeofservice," come in neon1's green.
- **The glass.** The landing's text panel, top bar links, and rain buttons act like thick glass, magnifying the rain behind with a rim that bends it inward.
- **Waking up.** Scrolling past the landing fades the rain out and turns the page light. Then the rain stops drawing, so it costs nothing while you read.

Three buttons at the bottom of the landing control it:

| Button | What it does |
|---|---|
| **grid** | Switches between columns falling in step and columns falling at their own speeds |
| **text** | Cycles the characters: a mix of writing systems, katakana, numbers, symbols, emoji, faces, or all of them |
| **pause** | Stops and starts the rain |

Your choices are saved in your browser and shared with 1NEON. With reduced motion on, the rain is a still frame.

## The white rabbit

Now and then a white rabbit drops into the rain as a single character, never under the text or buttons. Click or tap it to catch it. Keyboard users get a "follow the white rabbit" link after the top bar's links, hidden until focused, like a skip link.

What happens after a catch:

1. **The rain stops** with a two-second glitch: freezes, skipped frames, sliding bands, a flash, then stillness.
2. **The 3D scene loads.** The scene and its 3D library download only now, so nobody else pays for them.
3. **Scrolling down plays the scene.** The landing turns out to be the picture on an old tube TV. The view pulls back out of the set into a sunlit room with two leather wingback chairs, turns to the window, gets up, walks over with the bob of each step, glances at a model car on the sill, and goes out through the opening to a view of a back yard, a road, a park around a pond, and hills. It ends on "go touch grass."
4. **Scrolling up plays it backward**, back into the TV, and the rain starts again.

Only scrolling moves the scene; it never plays on its own. A full walk takes about ten quick swipes on a phone, nine screens on a touchpad, 45 mouse wheel clicks, or 25 arrow key presses, spread evenly over how much the view changes, so a quick turn doesn't rush by.

Some details inside the scene:

- **Sound** is made live with the Web Audio API: the TV's hum and static, the room's air, wind in the leaves, and birds. It starts quietly as you leave the TV and stops back at the landing.
- **The car** on the sill starts when clicked: the headlights flash twice, the starter cranks, and the engine idles. The sound is a real V8 recording, downloaded on the first click and blended so the idle never audibly repeats.
- **The sky** has drifting clouds, and the room dims when one covers the sun.
- **The plaque** over the window reads "Temet Nosce," drawn with a pen stroke in code, so no font file is needed.

With reduced motion, no WebGL, or a failed load, you get a silent still card instead. Esc leaves any time and returns focus where it was, and a line for screen readers explains how to move and leave.

The room's models and textures are credited in the site's asset manifest. The car is based on a Creative Commons model, unbranded and recolored, and the trees and photographed textures come from Poly Haven.

## The Knowledge Center

The Knowledge Center at [neon1.tech/knowledge](https://neon1.tech/knowledge/) holds every public neon1 document, from services and the FAQ to standards, templates, and policies, on shelves that match the corpus folders.

- **Where pages come from.** Each tagged release of neon1-corpus can export a "knowledge" bundle. The site's build reads the newest release and turns every document in it into its own page at `/knowledge/<shelf>/<name>/`, with the same top bar and footer as the home page. Every page is written ahead of time as plain HTML, so search engines, link previews, and readers without JavaScript get the whole page. `/knowledge/corpus.json` names the corpus release that's live.
- **Search** runs in your browser. Your first keystroke fetches one index file, then your words match titles, headings, summaries, and text, in that order, with some synonyms, so "Wi-Fi" finds "wireless." Nothing you type leaves the browser.
- **PDFs.** Marked documents get a branded PDF, printed by headless Chromium at each deploy, with links back to neon1.tech.
- **Diagrams** are written as Mermaid text inside the documents, drawn to SVG images ahead of time, and shown with their source beneath them.

## The blog

The blog at [neon1.tech/blog](https://neon1.tech/blog/) holds short posts written in the corpus like everything else, about one a week. Each post gets its own page with its date, topic, and who it's for, the index lists them newest first, and an RSS feed sits at `/blog/feed.xml`. Posts end with plain share links, Copy link, and your device's share sheet, with no outside scripts. They're built from the same corpus release as the Knowledge Center and share its top bar and menu.

## The contact form

The form folds under "send me your use case" in Contact. Pick any services or none, add "something else," say what's going on, and give your name, email, and organization if you like.

When you press send:

1. The page checks the fields and puts the cursor in the first one that needs attention.
2. It sends the message to one public route on 1NEON's API.
3. It emails hello@neon1.tech with your address as Reply-To, so I reply straight to you. It only ever mails neon1's inbox, so it can't be used to mail anyone else.
4. A hidden field catches simple bots. Each sender gets five messages an hour, and the form takes 50 a day.

Nothing is saved in your browser or the address. If no answer comes back in time, the page says it can't tell whether the message went and keeps your draft; it never resends by itself. Without JavaScript, the email and phone links do the job.

## Neo, the chat

Neo is the button at the bottom right of neon1.tech and 1NEON's public pages. It answers questions about neon1 from its public documents in a calm, plain voice of its own. The name is a nod to the Matrix films; the words are original.

**What happens when you ask something:**

1. The chat window sends your question, with the conversation so far, to `neon1.tech/chat/api/chat`. Same address as the site, so the security policy needs no exception.
2. CloudFront forwards it with a secret header, so the API can't be reached around neon1.tech's limits.
3. The function checks your limits in a DynamoDB table before anything else.
4. It sends the model every document published for the chat (about 32,000 tokens at release 0.39), with Neo's rules and your conversation. There's no search index. The model, Qwen3 Next 80B on Amazon Bedrock, won a test of several models on the same questions. A question costs under a fifth of a cent.
5. The reply is checked before you see it: links are kept only if the corpus has them, and the length is capped.

**Limits.** Each visitor can ask six questions a minute and 60 an hour, and the whole site gets 500 a day. Going over earns a cooldown that grows with each strike in a day: 2 minutes, 10, an hour, then a day. Repeating a question three times in ten minutes, or pushing Neo off topic, also counts. Visitors are counted by a salted hash of their network address, and every entry expires by itself.

**Privacy.** The conversation lives only in the open page. The function never logs it, and Bedrock doesn't keep or train on it.

**Staying current.** Every Monday, the chat's repository rebuilds its copy of the corpus from the latest corpus release and opens a pull request if anything changed. Merging it deploys the new text, so Neo can trail a corpus release by up to a week.

**Neo inside 1NEON.** Signed-in people in 1NEON get a separate Neo that knows the portal's guide and their own data, through the same permission checks as the page. It can offer a tour or a plan, which runs in their browser one normal step at a time, only after "Yes, do it."

## The 1NEON portal

1NEON at [neon1.tech/1NEON](https://neon1.tech/1NEON/) is where a client and I run a project. Every project moves through Needs, Execute, Observe, and Normalize, which spell N E O N.

### Signing in

There are no passwords: an eight-digit code arrives by email from notify.neon1.tech. Then you can add a passkey, an authenticator app, or text codes, which admin actions like inviting someone ask for first. Only invited addresses can make an account. Sign-in runs on Amazon Cognito, with the session in cookies page scripts can't read.

### Inside

- **Home** shows what needs you, what's coming up, and recent activity.
- **Board** and **Projects** show every project by stage, as a list or a timeline.
- **A project** has an overview and a tab for each layer. Needs holds the request, the files asked for, and my options, each with cost, quality, and effort; the client's decision maker approves one, kept as a record that can't be edited. Execute holds the plan and work, Observe the measures against the goals, and Normalize the handover, such as a runbook and recorded walkthrough.
- **Files** upload straight to a private bucket and can't be downloaded until a malware scan passes.
- **The bell** glows when someone else did something, and your profile sets which events also arrive by email or text.
- **Search** (Ctrl K or ⌘K) jumps to any page or project.
- **?** at the top right explains the page in view and can spotlight its parts.
- **Themes.** Awake is light and the default. Matrix is green on black. Device follows your device.

Every change writes an audit record, and its messages go into an outbox in the same transaction. A worker sends the outbox every minute and retries failures, so a saved change can't lose its email.

## Trying 1NEON without an account

Three public pages show the real portal without signing in, with made-up people and a made-up bakery.

### The sample project at /1NEON/example

One page telling a finished project start to end, a card per layer, in the portal's frame. It's for reading and links to the other two.

### The interactive demo at /1NEON/demo

The whole working portal, with 1NEON's API running in your browser: same routes, permission rules, and starting data.

- You sign in by picking who to be, such as Pradeep as neon1 or someone at a client.
- Changes are saved on your device in IndexedDB and survive a reload. If your browser won't allow that, the demo says it lasts only as long as the tab.
- Nothing leaves your browser. The demo makes no network calls for data, and Neo is left out.
- "Start over" on the sign-in screen wipes your changes and reloads the starting data.

### The guided walkthrough at /1NEON/live

A walkthrough plays itself on the real portal. A cursor moves, clicks, types, and drags as Maria, who owns Maple Street Bakery, with her thoughts beside it and a line under the controls that says what's happening. Like the demo, it runs in your browser on made-up data, starts fresh, and saves nothing.

Each walkthrough opens on a card saying who Maria is, what you'll see, and how long it takes, and waits for **Start**. It ends on a card with what happened, **Watch again**, the full story or demo, the other walkthroughs, and help. **Exit** returns you where you came from. The lengths are measured: before a release, a check plays each one in a real browser and fails if it runs much longer or shorter.

There are a few kinds:

- **The preview.** The bare `/1NEON/live` address plays a short version first: one request becoming a handover in about three minutes, with request, compare, approve, progress, and handover. Comparing opens the hours behind a price, and progress shows the hours logged.
- **The whole story.** `?play=full` plays 14 chapters in about 17 minutes: sign in, profile and alerts, invite the team, start a project, tell neon1 what's needed, neon1 listens, options arrive, choose an option, pay the deposit, the work, measure it, hand over, pay the final invoice, and ongoing care.
- **Short demos.** One thing each, start to finish: joining from an invitation, adding a passkey, adding an authenticator app, and text codes. Links from the FAQ can also start partway into the whole story.

Every walkthrough starts at sign-in, with Maria thinking about why she's there. She signs in with an emailed code and walks to the page click by click, as a person would.

#### How the cursor moves

The cursor is drawn over the page, an arrow that becomes an I-beam over fields.

- **Moving.** It scrolls a hidden target into view, then glides to it, a little off center as a hand would, easing in and out over a quarter second to a second. If the target moves mid-glide, it aims again, up to three times.
- **Hovering.** Buttons and rows light up as it passes.
- **Clicking.** It rests a moment, presses with a small ring, and clicks the element.
- **Typing.** It types one character at a time, about 60 to 75 milliseconds a letter, pausing at spaces and punctuation, and sets values the way React expects, so the page reacts as it would to you.
- **Dragging.** To upload, it carries a file from a pretend desktop to the drop area, sending the same events a real drag does.
- **Menus.** If a link isn't on screen, it opens the menu first.
- **Thoughts.** Maria's thought bubble follows the cursor and stays on screen, each one up long enough to read. Screen readers hear each new thought.
- **The other side.** When Pradeep shares options or the like, it goes through the same API as his own browser would, and a note by the bell says who did it.
- **Mail, phone, and passkeys.** The short demos draw Maria's mail, phone, and passkey prompt as windows over the portal, with 1NEON's real email templates and a real authenticator code. Passkey requests go to the pretend prompt, so nothing on your device is touched.

With reduced motion on, the cursor jumps instead of gliding, and still shows each click.

#### Pausing, resuming, speed, and Back

The top bar has a segment per chapter, previous and next buttons, play, speed, and the chapter's name, which opens a list of every chapter and short demo.

- **Pause and play.** The pause button or Space holds the story between any two actions, and the walkthrough's own clock stops while paused.
- **Exploring while paused.** While playing, the portal is locked. Paused, it's live to click and type in, and resuming afterward replays the section from its start.
- **Leaving the tab.** Switching apps or tabs, or locking the phone, pauses it. Coming back resumes after about a second, unless you paused it or clicked in the portal.
- **Speed.** A slider from 0.5x to 2x, saved in your browser.
- **Back and Next.** The arrow keys or buttons. Each section starts by saving a snapshot of the data, the page, and who's signed in, and Back restores it, so the screen matches the story. A chapter not reached yet is set up behind a loading screen, then plays at normal speed.
- **Browser Back.** The walkthrough replaces the address as it moves rather than adding entries, so the browser's Back button returns to the page that linked to it.
- **Refreshing.** After a refresh, the opening card offers **Continue** or **Start from the beginning**.
- **Your screen.** A phone's screen stays lit while it plays, where the browser allows.
- **When something goes wrong.** If a step can't find its target in time, the bar says "One moment…" and the chapter restarts from its snapshot, then from the very beginning. A third failure stops on a card offering to replay, start over, or try the demo. It never loops.


## How a change goes live

Each repository deploys itself when a change merges to main. GitHub Actions signs in to AWS with short-lived OpenID Connect credentials, so no repository holds AWS keys, and every deploy stops if a check fails.

- **The site** checks its HTML, links, assets, sizes, and secrets, drives the page and chat in a headless browser with faked APIs, builds the PDFs, and deploys.
- **1NEON** runs its type checks, tests, and build, applies its Terraform, and ships, uploading versioned files first and its page last.
- **Neo** runs its tests, and its Terraform ships the code.
- **Infrastructure** is applied by Terraform, except the deploy permissions, which I apply by hand so a deploy can never widen its own access.

After a deploy, each pipeline confirms the live version and tags the release from the changelog's top entry.

### The release switch

A deploy never mixes old and new files. Pages, scripts, and styles go up together into `releases/<id>/`, named by a fingerprint of their contents. Only then does the deploy write that id to a small CloudFront key value store, which a CloudFront Function reads on every request.

Every visitor moves to the new release at once, and new folders mean new cache addresses, so nothing needs clearing. The last 5 releases are kept, and a rollback is one write back to an earlier id, done in seconds.

Fonts and media are shared and never change at the same address, so browsers keep them for a year.

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

Mail runs on Google Workspace. One CloudFront distribution routes `/` to the site, `/1NEON` to the portal, `/1NEON/api` to its API, and `/chat/api` to Neo. Unknown addresses get a 404 with the rain.

## One source for the words

neon1-corpus holds neon1's public words as Markdown, each document with a header for what it is, who reads it, and its edition. A linter checks headers, links, and anything that looks private. Each tagged release exports a bundle per reader:

- **site**, for the case studies and questions on the home page
- **blog**, for the blog and its feed
- **knowledge**, for the Knowledge Center and its PDFs
- **chat**, for Neo
- **portal**, for Neo inside 1NEON

The site always builds from the newest release: every 15 minutes its deploy workflow compares that release with `/knowledge/corpus.json` on the live site and, when they differ, rebuilds and switches to a new release, without changing the site's own version. Neo refreshes its copy every Monday. Each reader's checks fail if its copy drifts from the release it built from. This document lives there too.
