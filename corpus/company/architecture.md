---
id: company-architecture
title: How neon1 is built
summary: "Diagrams of the website, the Knowledge Center, the 1NEON portal, Neo, and the infrastructure: how each runs in production and on the private dev copy, what data each keeps and why, and how a change reaches them."
type: page
consumers: [knowledge, ai]
pdf: false
origin: "neon1-aws-infrastructure, neon1-site, neon1-1NEON, neon1-chat, and neon1-corpus"
status: adopted
updated: 2026-11-15
created: 2026-11-11
edition: "1.4"
---

# How neon1 is built

neon1 runs on a small set of AWS services, sized to cost a few dollars a month while it's quiet. Everything below is defined in code in public repositories on [GitHub](https://github.com/neon1llc), so each box here matches something you can read. It covers how a visit, a question, a sign-in, and a payment flow through the system, how each part runs in production and on the private dev copy, what data each part keeps and for how long, and how a change gets from a branch to neon1.tech. The diagrams are drawn from Mermaid text, and each one has its source underneath it.

## The whole picture

One CloudFront distribution serves neon1.tech. It sends each address to the part of the system that owns it: the website, the 1NEON portal and its API, or Neo's API. Storage stays private, and only CloudFront can read the buckets. Every visit uses HTTPS, with strict security headers.

```mermaid
%% alt: Overview diagram of AWS us-east-1. A visitor's browser looks up neon1.tech in Route 53 and reaches one CloudFront distribution, secured by an ACM certificate. CloudFront Functions route each request, reading the live site release from a key value store. CloudFront sends each address to its owner: the website's private S3 bucket, the 1NEON portal, or Neo, the chat.
flowchart TB
  visitor(["Visitor's browser"]):::person --> dns["Route 53<br/>neon1.tech DNS"]:::network
  kvs["Key value store<br/>live site release"]:::storage -.->|read by| fn
  dns --> cf["CloudFront<br/>neon1.tech"]:::network
  acm["ACM certificate<br/>HTTPS"]:::security -.- cf
  fn["CloudFront Functions<br/>routers"]:::compute -.- cf
  cf -->|"/ and files"| site[("Website<br/>S3 site bucket")]:::storage
  cf -->|"/1NEON"| portal["1NEON portal<br/>app, API, sign-in"]:::compute
  cf -->|"/chat/api"| neo["Neo, the chat<br/>API, Lambda, Bedrock"]:::ai

  classDef person fill:#ffffff,stroke:#16201a,stroke-width:1.5px,color:#16201a
  classDef network fill:#efe9fb,stroke:#7a4fd0,color:#2b1a52
  classDef compute fill:#fff1e3,stroke:#e07b14,color:#4a2700
  classDef storage fill:#e8f5ea,stroke:#3b8f4a,color:#123d1b
  classDef security fill:#fdecec,stroke:#c83b3b,color:#4d1010
  classDef comms fill:#fde9f3,stroke:#c2408a,color:#4a1030
  classDef ai fill:#e6f4f7,stroke:#1f8a9e,color:#0c3a43
  classDef ops fill:#fdf0e6,stroke:#b4561c,color:#45200a
  classDef external fill:#f1f3f5,stroke:#7b8794,color:#1f2933
```

The colours follow AWS's own groups: purple for networking, orange for compute, green for storage, red for security, pink for messaging, and teal for machine learning.

- **Website.** Plain HTML, CSS, and JavaScript, with no framework and no tracking. The page loads only its own files, and its security policy blocks everything else.
- **1NEON.** A single-page app with its own API. Sign-in uses an emailed code or a passkey through Cognito, with an authenticator app as an optional second step, and there are no passwords. Data is kept per organization, and files go straight from the browser to a private documents bucket, where every upload is scanned for malware. Invoices are paid on Stripe's own checkout page, so card and bank details never reach neon1.
- **Neo.** A small function that answers questions from neon1's public documents, using a language model on Amazon Bedrock. Amazon says Bedrock doesn't train on them, and that some models may keep them for abuse detection. Per-visitor limits keep it fair and cheap.
- **Watching it.** Alarms and monthly budgets email Pradeep when something fails or costs more than expected.

### Inside 1NEON

The portal's own pieces, from the browser's direct paths (sign-in, file uploads, and paying on Stripe) to the API's storage, records, and messages.

```mermaid
%% alt: Diagram of 1NEON. CloudFront serves the 1NEON app from a private S3 bucket and sends /1NEON/api to API Gateway and the 1NEON API Lambda function. The API reads and writes DynamoDB and the S3 documents bucket, writes write-protected copies of signatures, invoices, and payments to an S3 records bucket under Object Lock, reads Stripe keys from SSM Parameter Store, sends email through SES, and sends texts through End User Messaging. The browser signs in with Cognito directly, uploads files straight to the documents bucket with a presigned link, where each one is scanned for malware, and pays invoices on Stripe Checkout, which calls the API's webhook at /1NEON/api/billing/stripe.
flowchart TB
  browser(["Browser"]):::person --> cf["CloudFront"]:::network
  cf -->|"/1NEON"| app[("S3 app bucket<br/>the 1NEON app")]:::storage
  cf -->|"/1NEON/api"| gw["API Gateway"]:::network --> api["1NEON API, Lambda<br/>and its outbox"]:::compute
  browser -.->|sign in| cognito["Cognito<br/>auth.neon1.tech"]:::security
  browser -.->|"uploads, presigned"| docs[("S3 documents<br/>malware-scanned")]:::storage
  api --> ddb[("DynamoDB<br/>projects, people")]:::storage
  api --> docs
  api --> records[("S3 records<br/>Object Lock, 7 years")]:::storage
  api -.->|keys| ssm["SSM Parameter Store<br/>Stripe keys"]:::security
  browser -.->|pay| stripe["Stripe Checkout"]:::external
  stripe -.->|"webhook, signed"| cf
  api -->|"open checkout"| stripe
  api --> ses["SES<br/>email"]:::comms
  api --> sms["End User Messaging<br/>texts"]:::comms

  classDef person fill:#ffffff,stroke:#16201a,stroke-width:1.5px,color:#16201a
  classDef network fill:#efe9fb,stroke:#7a4fd0,color:#2b1a52
  classDef compute fill:#fff1e3,stroke:#e07b14,color:#4a2700
  classDef storage fill:#e8f5ea,stroke:#3b8f4a,color:#123d1b
  classDef security fill:#fdecec,stroke:#c83b3b,color:#4d1010
  classDef comms fill:#fde9f3,stroke:#c2408a,color:#4a1030
  classDef external fill:#f1f3f5,stroke:#7b8794,color:#1f2933
```

Signed approvals, handover acceptances, the service agreement's signatures, issued invoices, and payments live in DynamoDB like everything else, and a copy of each is also written to a records bucket under S3 Object Lock in governance mode, which write-protects every copy for seven years. Governance mode can be overridden by an administrator with a special permission. Stripe's restricted key and its webhook signing secret are SecureString parameters under `/1neon/prod/stripe/`. Terraform creates them with placeholder values and never sees the real ones, and until they're set, online payment stays off.

## Paying an invoice

What happens between **Pay** in 1NEON and the invoice showing as paid. Card and bank details go only to Stripe. 1NEON learns about a payment only from Stripe's signed webhook, and it records each payment once, however many times Stripe sends the event.

```mermaid
%% alt: Sequence diagram of paying an invoice. The client chooses Pay on an issued invoice in the 1NEON app. The app asks the 1NEON API for a checkout. The API reads the restricted Stripe key from SSM Parameter Store, works out what is still owed from DynamoDB, and asks Stripe for a Checkout session for that amount, offering bank transfer first and card. The browser goes to Stripe Checkout, where the client pays. Stripe sends a signed webhook to /1NEON/api/billing/stripe. The API checks the signature with the webhook secret, refuses anything older than five minutes, and records the payment once in DynamoDB, marking the invoice paid when nothing is left. It writes a locked copy to the records bucket and notifies the organization. A bank payment completes days later as its own event, handled the same way.
sequenceDiagram
  autonumber
  participant C as Client's browser
  participant X as 1NEON API
  participant P as SSM Parameter Store
  participant D as DynamoDB
  participant S as Stripe
  participant R as S3 records
  C->>X: Pay invoice INV-0039-01
  X->>P: read the restricted key
  X->>D: what's still owed
  X->>S: open a Checkout session (bank, then card)
  S-->>C: Stripe's payment page
  C->>S: pays
  S->>X: signed webhook, /1NEON/api/billing/stripe
  X->>X: check signature and age
  X->>D: record payment once, mark paid if nothing is left
  X->>R: write-protected copy
  X-->>C: bell and email to the organization
  Note over S,X: A bank (ACH) payment clears days later and arrives as its own signed event
```

## Visiting neon1.tech

What happens between typing the address and seeing the page. Each deploy uploads the whole site into a new folder, and one small switch, the release store, tells CloudFront which folder is live. So every file in a visit comes from the same release, even while a deploy is running.

```mermaid
%% alt: Sequence diagram of a visit. The browser opens neon1.tech. It asks Route 53 for the address and gets CloudFront's address. It requests the page from CloudFront. The site router function reads the live release from the release store and rewrites the address into that release's folder. CloudFront returns a cached copy or fetches it from the private S3 bucket, adding security headers. The browser then loads the page's scripts, styles, fonts, and media the same way, all from the same release, and draws the page.
sequenceDiagram
  autonumber
  actor B as Browser
  participant R as Route 53
  participant C as CloudFront
  participant F as Site router
  participant K as Release store
  participant S as S3 site bucket
  B->>R: where is neon1.tech?
  R-->>B: CloudFront's address
  B->>C: GET / over HTTPS
  C->>F: route the request
  F->>K: which release is live?
  K-->>F: release id
  F-->>C: that release's page
  alt cached at the edge
    C-->>B: page, with security headers
  else not cached yet
    C->>S: fetch, signed by CloudFront
    S-->>C: page
    C-->>B: page, with security headers
  end
  B->>C: scripts, styles, fonts, media
  Note over C,S: every file comes from the same release, so a page and its scripts always match
  C-->>B: files
  Note over B: the page draws
```

## Asking Neo

Neo takes every fact about neon1 from neon1's public documents, and answers general technology questions only as general information. Each question goes through CloudFront, which adds a secret header so the API answers only through neon1.tech, and through a check of the visitor's limits before the model sees it.

```mermaid
%% alt: Sequence diagram of a Neo question. The browser sends the question to CloudFront at /chat/api. CloudFront adds a secret header and forwards it to API Gateway and the Neo Lambda function. The function checks the header and the visitor's rate limit in DynamoDB. If the visitor is over the limit, it answers with a short cooldown message. Otherwise it sends neon1's public documents and the question to Amazon Bedrock, gets an answer, and returns it to the browser.
sequenceDiagram
  autonumber
  actor V as Visitor
  participant C as CloudFront
  participant N as Neo Lambda
  participant D as DynamoDB limits
  participant M as Amazon Bedrock
  V->>C: POST a question
  C->>N: forward, with CloudFront's secret header
  N->>N: check header
  N->>D: count recent questions
  alt over the limit
    D-->>N: too many
    N-->>V: a short cooldown, then try again
  else within the limit
    D-->>N: ok
    N->>M: neon1's public documents and the question
    M-->>N: answer
    N-->>V: Neo's reply
  end
```

## Signing in to 1NEON

The portal has no passwords. Here is the email-code sign-in, the one the guided walkthrough shows. A passkey replaces the code with the device's own check, and an authenticator app, for anyone who sets one up, adds a 6-digit code as a second step.

```mermaid
%% alt: Sequence diagram of 1NEON sign-in. The person enters their email in the 1NEON app. The app asks Cognito to start a sign-in. Cognito emails a branded message with an 8-digit code through SES. The person reads the code and enters it. Cognito checks the code and returns tokens. The app calls the 1NEON API through CloudFront with the token, and the API verifies it and returns the person's Home page data from DynamoDB.
sequenceDiagram
  autonumber
  actor P as Person
  participant A as 1NEON app
  participant G as Cognito
  participant E as SES
  participant X as 1NEON API
  participant D as DynamoDB
  P->>A: email, then Continue
  A->>G: start sign-in
  G->>E: email the code
  E-->>P: "Your 1NEON sign-in code", 8 digits
  P->>A: paste the code, Enter
  A->>G: answer with the code
  G-->>A: tokens
  A->>X: GET Home, with the token
  X->>X: verify token
  X->>D: read Home records
  D-->>X: records
  X-->>A: Home
  A-->>P: signed in
```

## Production and dev, part by part

Every part of neon1 has a production side, which is what clients and visitors use, and most have a private dev side for trying a change first. Nothing on dev can reach production or client data, because dev has its own buckets, CloudFront distribution, release store, 1NEON backend, sign-in pool, and permissions. Production changes only when Pradeep says deploy and the change merges to main. Dev changes whenever a branch is pushed, and it's never released.

```mermaid
%% alt: Diagram of production and dev side by side. Production, at neon1.tech, is open to everyone: CloudFront serves the website's releases, 1NEON with its own API, table, buckets, and sign-in pool holding real client data, and Neo. Dev, at dev.neon1.tech, sits behind a sign-in gate that needs a secret link and then a passkey or email code from a neon1 admin. Its own CloudFront serves branch previews and the dev release of the website, and a separate 1NEON with its own API, table, buckets, and sign-in pool holding generated test data only. Dev sends chat questions to the live Neo. Production's client data is never copied to dev.
flowchart TB
  subgraph prod["Production: neon1.tech, open to everyone"]
    direction TB
    pcf["CloudFront<br/>neon1.tech"]:::network
    pcf --> psite[("Website releases<br/>and Knowledge Center")]:::storage
    pcf --> pportal["1NEON<br/>API, table, buckets,<br/>sign-in pool"]:::compute
    pportal --> pdata[("Real client data")]:::storage
    pcf --> neo["Neo, the chat"]:::ai
  end
  subgraph dev["Dev: dev.neon1.tech, neon1 admins only"]
    direction TB
    gate["Sign-in gate<br/>secret link, then<br/>passkey or email code"]:::security --> dcf["CloudFront<br/>dev.neon1.tech"]:::network
    dcf --> dsite[("Branch previews<br/>and the dev release")]:::storage
    dcf --> dportal["1NEON dev<br/>its own API, table,<br/>buckets, sign-in pool"]:::compute
    dportal --> ddata[("Generated test data")]:::storage
  end
  dcf -->|"chat questions"| neo
  pdata -.-x|"never copied"| ddata

  classDef network fill:#efe9fb,stroke:#7a4fd0,color:#2b1a52
  classDef compute fill:#fff1e3,stroke:#e07b14,color:#4a2700
  classDef storage fill:#e8f5ea,stroke:#3b8f4a,color:#123d1b
  classDef security fill:#fdecec,stroke:#c83b3b,color:#4d1010
  classDef ai fill:#e6f4f7,stroke:#1f8a9e,color:#0c3a43
```

| Part | Production | Dev |
|---|---|---|
| **Website** | neon1.tech, served from whole releases in the site bucket. Changes only when main deploys. | dev.neon1.tech, with its own bucket, distribution, and release store. Every branch push builds a preview, and the `dev` branch is the dev release. |
| **Knowledge Center and blog** | Built from the newest corpus release with every site deploy, and republished on their own within about 15 minutes of a new corpus release. PDFs are printed during the deploy. | Built from the newest corpus release, or from a corpus branch so drafts can be read in place. PDFs are copied from neon1.tech rather than printed. |
| **1NEON** | neon1.tech/1NEON, with its own API, table, documents and records buckets, and sign-in pool. Malware scanning and seven-year record protection are on. | dev.neon1.tech/1NEON, a separate API, table, buckets, and sign-in pool holding generated test data only. Only neon1's own accounts can sign in, mail goes only to neon1, texts and the malware scan are off, and test records are write-protected for a day. |
| **Neo** | neon1.tech/chat/api, answering from the corpus copy it was last released with. | No dev copy. Dev sends questions to the live Neo, since Neo only answers from public pages and keeps no question text. |
| **Infrastructure** | The neon1.tech distribution and the shared DNS records are applied by the pipeline from main. Deploy permissions are applied by Pradeep by hand. | dev.neon1.tech's distribution, gate, and permissions are applied by hand only, never by a pipeline. |
| **Corpus** | A merge to main tags a release and publishes its bundles to every reader. | No environment of its own. A corpus branch is previewed through the website's dev build. |

## What data each part keeps

Everything runs in one AWS account in us-east-1 (US East, N. Virginia), encrypted in transit and at rest. Each part keeps only what it needs to do its job, and the public parts keep almost nothing. Production holds real client data. Dev holds generated test data only, made up for testing, and never a copy of production, so no real client's name, project, or file is ever on dev.

```mermaid
%% alt: Diagram of where data lives. The website keeps no visitor data and emails contact form messages to neon1's inbox. Neo keeps no question text, only one-way fingerprints and visitor counts in DynamoDB for minutes, and two weeks of logs without message text. 1NEON keeps accounts, projects, and activity in DynamoDB with 35 days of backups, files in the documents bucket with 90 days of earlier versions, and write-protected copies of signatures, invoices, and payments in the records bucket for seven years. Card and bank details go only to Stripe. Dev 1NEON keeps generated test data only, with test records protected for one day. The corpus holds public documents only.
flowchart LR
  site["Website"]:::compute -->|"contact form"| inbox["neon1's inbox<br/>hello@neon1.tech"]:::comms
  neo["Neo"]:::ai --> limits[("DynamoDB<br/>fingerprints and counts,<br/>minutes, no question text")]:::storage
  portal["1NEON"]:::compute --> table[("DynamoDB<br/>accounts, projects, activity<br/>35 days of backups")]:::storage
  portal --> docs[("Documents bucket<br/>files, 90 days of<br/>earlier versions")]:::storage
  portal --> records[("Records bucket<br/>signatures, invoices,<br/>payments: 7 years")]:::storage
  portal -.->|"card and bank details<br/>go only to Stripe"| stripe["Stripe"]:::external
  devportal["1NEON dev"]:::compute --> devdata[("Generated test data<br/>records: 1 day")]:::storage
  corpus["neon1-corpus"]:::compute --> public[("Public documents only")]:::storage

  classDef compute fill:#fff1e3,stroke:#e07b14,color:#4a2700
  classDef storage fill:#e8f5ea,stroke:#3b8f4a,color:#123d1b
  classDef comms fill:#fde9f3,stroke:#c2408a,color:#4a1030
  classDef ai fill:#e6f4f7,stroke:#1f8a9e,color:#0c3a43
  classDef external fill:#f1f3f5,stroke:#7b8794,color:#1f2933
```

| Part | What it keeps | Why | How long |
|---|---|---|---|
| **Website** | No accounts, cookies, analytics, or trackers. Contact form messages are emailed to hello@neon1.tech and not stored by the site. The form's limits count each sender per hour by a one-way code of their address, in 1NEON's table, so no address is stored. | A visitor shouldn't be tracked to read a page. | CloudFront handles each request's IP address and browser details to deliver the page, and AWS may keep them briefly for security and operations. The contact form's counters expire a day after their first count. |
| **Neo** | No question or answer text. A one-way fingerprint of each question, to notice repeats, and visitor counts by a one-way code, for the question limits. Logs hold timing, length, and errors. Bedrock's own logging is off. | Enough to keep Neo fair and cheap, and to debug it, without keeping what people ask. | Fingerprints ten minutes. Logs two weeks. |
| **1NEON projects** | Accounts, projects, items, decisions, comments, and activity in DynamoDB, and uploaded files in the documents bucket, each organization's kept separate. | They're the record of the work, for both sides, during and after an engagement. | Never deleted on a schedule, and deleted when an organization asks. Database backups roll off after 35 days, and earlier copies of replaced or deleted files after 90. |
| **1NEON records** | A copy of every signature, issued invoice, and payment, under S3 Object Lock in governance mode. | Tax and contract law expect these kept. | Write-protected for seven years. |
| **1NEON system records** | The audit log of sign-ins and changes, and delivery records for emails and texts. | Security, and finding delivery problems. | Audit log up to three years, delivery records 30 days, API logs 90 days. |
| **Payments** | Stripe's restricted key and webhook secret, as encrypted parameters in SSM Parameter Store. | So 1NEON can open a checkout and trust Stripe's events. | Card and bank details go only to Stripe and never reach neon1. |
| **Dev** | Generated test data in dev's own table and buckets, and dev's sign-in pool, which holds only neon1's own accounts. | To try every screen and state without any client's data in reach. | Test records are write-protected for a day. |
| **Infrastructure** | Terraform state, in a versioned S3 bucket. No client data. | So each stack knows what it manages. | Earlier versions are kept for recovery. |
| **Corpus** | Public documents only. Its linter fails on anything that looks private. | Everything in it is published. | Kept in Git history. |

The [privacy and data policy](../policies/privacy.md) is the full statement of what's collected and how long it's kept, and it wins if anything here differs.

## How a change ships

neon1's public repositories fall into three groups: the ones that run neon1.tech, the documents, and the tools and guides. Every repository follows the same path, though only the first group deploys anything. A change starts on its own branch, where checks run on every push. Changes to the website and 1NEON can be seen on dev. A batch goes to production only when Pradeep says deploy: then it merges to main, the main pipeline runs every check again, deploys, confirms the live version, and tags the release from the changelog's top entry. GitHub Actions signs in to AWS with short-lived credentials through OpenID Connect, and each role trusts only its own repository, so no repository holds AWS keys.

```mermaid
%% alt: Flowchart of how any change ships. A change is pushed to a work branch, and checks run on every push. The website and 1NEON can show the branch on dev.neon1.tech. If it isn't right yet, the work continues on the branch. When Pradeep says deploy, the branch merges to main. Main runs every check again: secret scans, tests, browser and walkthrough checks, and Terraform checks. If any fail, nothing deploys. If they pass, the pipeline gets a short-lived AWS role through OpenID Connect, deploys, and confirms the live version. Once it's confirmed, the release is tagged vX.Y.Z from the changelog. After that, main is merged back into dev.
flowchart TD
  push["Push a work branch"]:::step --> ci["Checks on every push"]:::check
  ci --> devsee["Seen on dev.neon1.tech<br/>website and 1NEON"]:::dev
  devsee --> ready{"Right yet?"}:::decision
  ready -->|not yet| push
  ready -->|"Pradeep says deploy"| main["Merge to main"]:::step
  main --> gates{"Every check again:<br/>secrets, tests, browser,<br/>walkthroughs, Terraform"}:::decision
  gates -->|any fail| stop["Nothing deploys"]:::stop
  gates -->|all pass| oidc["Short-lived AWS role<br/>through OpenID Connect"]:::security
  oidc --> deploy["Deploy"]:::prod
  deploy --> verify{"Live version<br/>confirmed?"}:::decision
  verify -->|yes| tag["Tag vX.Y.Z<br/>from the changelog"]:::step
  verify -->|no| back["Roll back"]:::stop
  tag --> sync["Main merged back into dev"]:::dev

  classDef step fill:#e8f5ea,stroke:#3b8f4a,color:#123d1b
  classDef check fill:#fff8e6,stroke:#d9b44a,color:#3d2f05
  classDef decision fill:#fff8e6,stroke:#d9b44a,color:#3d2f05
  classDef stop fill:#fdecec,stroke:#c83b3b,color:#4d1010
  classDef security fill:#fdecec,stroke:#c83b3b,color:#4d1010
  classDef dev fill:#efe9fb,stroke:#7a4fd0,color:#2b1a52
  classDef prod fill:#fff1e3,stroke:#e07b14,color:#4a2700
```

| Repository | Checks on every push | Where a branch can be seen | What main does | About how long |
|---|---|---|---|---|
| **neon1-site** | HTML, scripts, links, the asset manifest, sizes, secret scan, and the built corpus pages; browser checks of the contact form, case studies, white rabbit, and chat with every API faked | A private preview on dev.neon1.tech, in about 30 seconds | Prints the Knowledge Center PDFs, uploads a whole new release, switches the release store, confirms the live version, and tags | Together with the corpus and Neo, about 12 to 18 minutes |
| **neon1-1NEON** | Types, unit and contract tests, the production build, secret scan, Terraform checks, and every guided walkthrough played to its end card in a real browser, on a desktop and a phone screen | The `dev` branch ships to dev.neon1.tech/1NEON; any other branch on request | Applies its production Terraform first, ships the API, then the app with its page last, confirms the live version, and tags | About 26 minutes, most of it the walkthroughs |
| **neon1-chat** (Neo) | Tests with AWS faked, Terraform checks, and a secret scan | No dev copy | Applies its Terraform, which ships the function, checks the live endpoint through neon1.tech, and tags | Part of the 12 to 18 minutes above |
| **neon1-corpus** | Front matter, links, anything that looks private, the Markdown renderer, and every diagram drawn with alt text | A branch can be built into a dev preview of the website | Tags the release, publishes a bundle for each reader, and asks neon1.tech to publish it | Part of the 12 to 18 minutes above |
| **neon1-aws-infrastructure** | Formatting, validation, lint, misconfiguration scan, and secret scan | Dev's stack is applied by hand | Plans every stack and applies the neon1.tech distribution and the shared DNS records; deploy permissions only plan, and Pradeep applies them by hand | A few minutes |
| **Tools**: [DeployOps](https://github.com/neon1llc/deploy-ops), [AWS CLIP](https://github.com/neon1llc/aws-clip), and [refmark](https://github.com/neon1llc/refmark) | Their own checks and tests | No dev copy | Nothing deploys; each changelog version is tagged only if the checks pass, and refmark also checks the sources neon1 cites every Monday | A few minutes |
| **Education**: Ready, Secure, Go and its five companion guides | Front matter, links, and each guide's own rules | No dev copy | Nothing deploys; each changelog version is tagged | A few minutes |

A few details hold across all of them:

- **One release at a time.** Each pipeline runs in a lock and never cancels a release halfway. 1NEON and Neo also stop a queued release if main has already moved on, so an older commit can't overwrite a newer one.
- **Tags follow the changelog.** Each change adds an entry under `## Unreleased`. On deploy, that entry becomes the new version, and the tag is made by the pipeline once the live version is confirmed, never by hand. Dev builds are never tagged.
- **Permissions stay outside the pipeline.** Each pipeline's role can't change its own access, so a deploy can never widen it.
- **Corpus words reach readers on their own.** A corpus release asks the website to rebuild, and the website also checks every 15 minutes whether it shows the newest release. Every Monday, Neo's refresh job opens a pull request with any change from the newest release, which ships like any other change.

### Deploying the website

The website's deploy, step by step. The release switch means every visitor moves from one complete release to the next at once.

```mermaid
%% alt: Flowchart of a site deploy. A change is merged to main on GitHub. GitHub Actions runs the checks: HTML, links, the asset manifest, and browser tests. If any fail, nothing is deployed. If they pass, the job gets short-lived AWS credentials through OpenID Connect, uploads shared fonts and media, uploads the whole release into its own folder, and then switches the release store to it, so every visitor moves at once. It confirms the live site serves the new version, tags the release, and keeps the last five releases for a one-step rollback.
flowchart TD
  merge["Merge to main"]:::step --> checks{"Checks pass?<br/>HTML, links, assets,<br/>browser tests"}:::decision
  checks -->|no| stop["Nothing deploys"]:::stop
  checks -->|yes| oidc["Short-lived AWS role<br/>through OpenID Connect"]:::security
  oidc --> shared["Upload shared fonts and media"]:::step
  shared --> release["Upload the whole release<br/>to releases/&lt;id&gt;/"]:::step
  release --> switch["Switch the release store,<br/>so every visitor moves at once"]:::network
  switch --> verify{"Live site serves<br/>the new version?"}:::decision
  verify -->|yes| tag["Tag vX.Y.Z on GitHub"]:::step
  verify -->|no| rollback["make rollback:<br/>back in seconds"]:::stop
  tag --> keep["Keep the last 5 releases"]:::step

  classDef step fill:#e8f5ea,stroke:#3b8f4a,color:#123d1b
  classDef decision fill:#fff8e6,stroke:#d9b44a,color:#3d2f05
  classDef stop fill:#fdecec,stroke:#c83b3b,color:#4d1010
  classDef security fill:#fdecec,stroke:#c83b3b,color:#4d1010
  classDef network fill:#efe9fb,stroke:#7a4fd0,color:#2b1a52
```

### How far a change has been proven

A version number says what changed. A release level says how far it has been proven, and descriptions of the work never get ahead of its level.

| Level | Means | Evidence |
|---|---|---|
| **Implemented** | The code exists | Merged with its checks passing, and a changelog entry |
| **Verified** | Named acceptance tests passed | The scenarios it affects pass in CI, plus a check on dev or in the demo for anything people see |
| **Released** | The right version is live | Pradeep said deploy, the pipeline deployed it, the live version matches, and the tag exists |
| **Qualified** | Real use and recovery are established | Representative real use, a safe check in production, and its recovery path, such as a rollback or a restore, tested at least once |

A tag means Released, never Qualified on its own. The [versioning standard](../standards/versioning.md) has the full rules.

## Trying a change on dev first

Before a change reaches neon1.tech, it can be seen on dev.neon1.tech, a private copy of the whole site and of 1NEON. Pushing any branch puts it on dev in about 30 seconds, because dev runs only the quick checks and is never tagged. A production release takes longer because it runs every check.

```mermaid
%% alt: Flowchart of the dev to production workflow. A push to any feature branch builds a private preview of that branch on dev.neon1.tech in about 30 seconds. The dev branch, which follows main, is the dev release at dev.neon1.tech. When a batch looks right, Pradeep says deploy, and the work is merged to main. Main runs the full checks, deploys to neon1.tech, and tags vX.Y.Z. After every push to main, main is merged back into the dev branch, so dev always starts from what is live.
flowchart TD
  branch["Push a feature branch"]:::step --> preview["Private preview<br/>dev.neon1.tech, about 30 seconds"]:::dev
  dev["dev branch<br/>follows main"]:::step --> devrel["Dev release<br/>dev.neon1.tech"]:::dev
  preview --> look{"Looks right?"}:::decision
  devrel --> look
  look -->|not yet| branch
  look -->|"Pradeep says deploy"| main["Merge to main"]:::step
  main --> prod["Full checks, deploy to neon1.tech,<br/>tag vX.Y.Z"]:::prod
  prod -->|"main merged back into dev"| dev

  classDef step fill:#e8f5ea,stroke:#3b8f4a,color:#123d1b
  classDef dev fill:#efe9fb,stroke:#7a4fd0,color:#2b1a52
  classDef decision fill:#fff8e6,stroke:#d9b44a,color:#3d2f05
  classDef prod fill:#fff1e3,stroke:#e07b14,color:#4a2700
```

- **Branches and the dev release.** Each branch other than main gets its own preview, chosen with `dev.neon1.tech/__preview?b=<branch>`. The `dev` branch is the dev release. After every push to main, a workflow merges main into `dev` and rebuilds it, and a merge that conflicts stops and says so rather than forcing anything.
- **Drafts in place.** A run of the dev workflow can build from a corpus branch, drafts included, so a post or a page can be read where it will appear before it's adopted.
- **Releases come only from main.** Dev builds are never tagged, announced, or counted as releases. Each work branch goes to main on its own, never the `dev` branch as a whole, and main rebuilds from the same commits and runs the full checks, including the browser tests and PDF printing that dev skips.
- **1NEON on dev.** The dev portal runs on generated test data, never a copy of production, so every screen and state can be tried without a real client's data in reach. Even so, dev admits only neon1's own accounts, sends mail only to neon1, and never creates an account for anyone else.
- **Cost.** Dev costs a few dollars a month, with a $5 budget alert on everything tagged as dev.

### Who can open dev

Nobody can see dev without signing in, and anyone who isn't signed in gets the same bare "Not found" on every address, so nothing shows that a site is there. Signing in takes two things: a secret link, which only starts a sign-in, and a passkey or email code for an account in dev's access group. A leaked link alone lets nobody in.

```mermaid
%% alt: Sequence diagram of signing in to dev.neon1.tech. The browser opens the secret sign-in link. A small edge function checks the link and, if it's right, sends the browser to the dev sign-in page, bound to that browser. The person signs in with a passkey or an email code. The sign-in page sends the browser back with a one-time code. The edge function exchanges it, checks the person is in the dev access group, and sets a signed cookie for 30 days. From then on, CloudFront checks that cookie on every request and serves dev; without it, every address answers Not found.
sequenceDiagram
  autonumber
  participant B as Browser
  participant E as Edge sign-in function
  participant C as Dev sign-in (Cognito)
  participant F as CloudFront check
  B->>E: Open the secret link
  E-->>B: Wrong link: Not found. Right link: go to dev sign-in
  B->>C: Passkey or email code
  C-->>B: Back to dev with a one-time code
  B->>E: One-time code
  E->>C: Exchange it, check the dev access group
  E-->>B: Signed cookie, 30 days
  B->>F: Any dev page, with the cookie
  F-->>B: The page (without the cookie: Not found)
```

The link and the cookie use separate keys. A new link doesn't sign anyone out, and signing every device out doesn't change the link. Taking someone out of the access group stops their next sign-in.

## One source for every word

The website, the Knowledge Center, 1NEON's guide, and Neo all read from neon1-corpus, a repository of Markdown documents. Each tagged release of the corpus publishes a bundle for each reader, so a correction made once reaches all of them.

```mermaid
%% alt: Flowchart of the corpus. Markdown documents in neon1-corpus are checked by a linter for front matter, links, and anything private. A tagged release exports a bundle for each reader. The site bundle feeds the case studies and questions on neon1.tech. The knowledge bundle feeds the Knowledge Center and its PDFs. The chat bundle feeds Neo, refreshed weekly. The portal bundle feeds the 1NEON guide used by Neo inside 1NEON.
flowchart TB
  md["neon1-corpus<br/>Markdown documents"]:::source --> lint["Lint checks<br/>front matter, links,<br/>nothing private"]:::check
  lint --> tag["Tagged release<br/>vX.Y.Z"]:::step
  tag -->|site bundle| site["neon1.tech<br/>case studies,<br/>questions"]:::reader
  tag -->|knowledge bundle| kc["Knowledge Center<br/>pages and PDFs"]:::reader
  tag -->|chat bundle| neo["Neo<br/>refreshed weekly"]:::reader
  tag -->|portal bundle| guide["1NEON guide<br/>for Neo<br/>in the portal"]:::reader

  classDef source fill:#e8f5ea,stroke:#3b8f4a,color:#123d1b
  classDef check fill:#fff8e6,stroke:#d9b44a,color:#3d2f05
  classDef step fill:#efe9fb,stroke:#7a4fd0,color:#2b1a52
  classDef reader fill:#fff1e3,stroke:#e07b14,color:#4a2700
```

## A project in 1NEON

Every project moves through the same four layers, and the work in each one follows the way a project runs: listen, propose, decide, build, and hand over.

```mermaid
%% alt: State diagram of a 1NEON project. It starts in Needs, where Pradeep listens, proposes options, and the client's decision maker decides. An approved option moves the project to Execute, where the work is built and shown as it lands. Then Observe, where results are measured against what was agreed. Then Normalize, where the work is handed over and becomes part of normal operations. From Normalize, a new need starts the cycle again.
stateDiagram-v2
  direction TB
  [*] --> Needs
  state Needs {
    direction LR
    Listen --> Propose
    Propose --> Decide
  }
  Needs --> Execute: an option is approved
  state Execute {
    Build
  }
  Execute --> Observe: work lands
  state Observe {
    Measure
  }
  Observe --> Normalize: results hold
  state Normalize {
    HandOver: Hand over
  }
  Normalize --> Needs: a new need
  Normalize --> [*]
```

## Where to read more

- [neon1-aws-infrastructure](https://github.com/neon1llc/neon1-aws-infrastructure): the DNS, the CloudFront distribution, its routers and release store, the deploy permissions, and dev.neon1.tech (`site-dev/`).
- [neon1-site](https://github.com/neon1llc/neon1-site): the website and the Knowledge Center.
- [neon1-1NEON](https://github.com/neon1llc/neon1-1NEON): the portal, its API, and its infrastructure.
- [neon1-chat](https://github.com/neon1llc/neon1-chat): Neo.
- [neon1-corpus](https://github.com/neon1llc/neon1-corpus): every document, and these diagrams.
