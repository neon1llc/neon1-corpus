---
id: company-architecture
title: How neon1 is built
summary: "Diagrams of the website, the Knowledge Center, the 1NEON portal, Neo, and the infrastructure: how each runs in production and on the private dev copy, what data each keeps and why, and how a change reaches them."
type: page
consumers: [knowledge, ai]
pdf: false
origin: "neon1-aws-infrastructure, neon1-site, neon1-1NEON, neon1-chat, and neon1-corpus"
status: adopted
updated: 2026-11-23
created: 2026-11-11
edition: "1.8"
---

# How neon1 is built

neon1 runs on a few AWS services, sized to cost a few dollars a month while it's quiet. Everything is defined in code in public [GitHub](https://github.com/neon1llc) repositories.

## The whole picture

One CloudFront distribution serves neon1.tech and routes each address to the website, the 1NEON portal and its API, or Neo's API. Buckets are private, and every visit uses HTTPS with strict security headers.

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

- **Website.** Plain HTML, CSS, and JavaScript, with no framework and no tracking. Its security policy blocks every outside file.
- **1NEON.** A single-page app with its own API. Sign-in is an emailed code or a passkey through Cognito, with no passwords. Files go from the browser to a private bucket and are scanned for malware. Invoices are paid on Stripe's checkout page, so card and bank details never reach neon1.
- **Neo.** A function that answers from neon1's public documents with a model on Amazon Bedrock. Per-visitor limits keep it fair and cheap.
- **Watching it.** Alarms and monthly budgets email Pradeep when something fails or costs more than expected.

### Inside 1NEON

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

Signed approvals, handover acceptances, agreement signatures, issued invoices, and payments are also copied to a records bucket under S3 Object Lock in governance mode, which write-protects each copy for seven years. Stripe's restricted key and webhook secret are SecureString parameters under `/1neon/prod/stripe/`. Terraform creates them with placeholders and never sees the real values. Until they're set, online payment stays off.

## Paying an invoice

Card and bank details go only to Stripe. 1NEON learns of a payment only from Stripe's signed webhook and records each payment once.

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

Each deploy uploads a whole new site folder, and one release store tells CloudFront which folder is live. Every file in a visit comes from the same release.

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

Each question goes through CloudFront, which adds a secret header so the API answers only through neon1.tech, and through a limits check before the model sees it.

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

The email-code sign-in. A passkey replaces the code with the device's own check, and an authenticator app adds a 6-digit second step.

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

Production serves clients and visitors. Dev is a private copy for trying changes, with its own buckets, distribution, release store, backend, sign-in pool, and permissions, so it can't reach production or client data.

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
| **Website** | neon1.tech, from whole releases in the site bucket. | dev.neon1.tech, with its own bucket, distribution, and release store. Every branch push builds a preview. |
| **Knowledge Center and blog** | Built with every site deploy, and republished within about 15 minutes of a new corpus release. | Built from the newest corpus release or a corpus branch. PDFs are copied, not printed. |
| **1NEON** | neon1.tech/1NEON, with its own API, table, buckets, and sign-in pool. Malware scanning and seven-year record protection are on. | dev.neon1.tech/1NEON, with generated test data only. Only neon1's accounts can sign in, mail goes only to neon1, and texts and malware scan are off. |
| **Neo** | neon1.tech/chat/api, from the corpus copy it was last released with. | No dev copy. Dev uses the live Neo. |

## What data each part keeps

One AWS account in us-east-1, encrypted in transit and at rest. Production holds real client data.

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

| Part | What it keeps | How long |
|---|---|---|
| **Website** | No accounts, cookies, analytics, or trackers. Contact form messages are emailed to hello@neon1.tech, not stored. Form limits count senders by a one-way code of their address. | CloudFront handles IP addresses and browser details to deliver pages, and AWS may keep them briefly. Form counters expire a day after the first count. |
| **Neo** | No question or answer text. A one-way fingerprint of each question to spot repeats, and visitor counts by one-way code. Logs hold timing, length, and errors. Bedrock logging is off. | Fingerprints ten minutes. Logs two weeks. |
| **1NEON projects** | Accounts, projects, decisions, comments, and activity in DynamoDB, and files in the documents bucket, each organization kept separate. | Deleted when an organization asks. Database backups roll off after 35 days, earlier file copies after 90. |
| **1NEON records** | A copy of every signature, issued invoice, and payment under S3 Object Lock, because tax and contract law expect them kept. | Write-protected for seven years. |
| **1NEON system records** | The audit log of sign-ins and changes, and email and text delivery records. | Audit log up to three years, delivery records 30 days, API logs 90 days. |

The [privacy and data policy](../policies/privacy.md) is the full statement and wins if anything here differs.

## How a change ships

A change starts on its own branch, where checks run on every push. Website and 1NEON changes can be seen on dev. I review each batch, and it goes to production once it passes. It merges to main and the pipeline runs every check again, deploys, confirms the live version, and tags the release. GitHub Actions signs in to AWS with short-lived OpenID Connect credentials, and each role trusts only its own repository, so no repository holds AWS keys.

```mermaid
%% alt: Flowchart of how any change ships. A change is pushed to a work branch, and checks run on every push. The website and 1NEON can show the branch on dev.neon1.tech. If it isn't ready yet, the work continues on the branch. Once I've reviewed the batch, the branch merges to main. Main runs every check again: secret scans, tests, browser and walkthrough checks, and Terraform checks. If any fail, nothing deploys. If they pass, the pipeline gets a short-lived AWS role through OpenID Connect, deploys, and confirms the live version. Once it's confirmed, the release is tagged vX.Y.Z from the changelog. After that, main is merged back into dev.
flowchart TD
  push["Push a work branch"]:::step --> ci["Checks on every push"]:::check
  ci --> devsee["Seen on dev.neon1.tech<br/>website and 1NEON"]:::dev
  devsee --> ready{"Ready to release?"}:::decision
  ready -->|not yet| push
  ready -->|"reviewed"| main["Merge to main"]:::step
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

| Repository | Checks on every push | What main does | About how long |
|---|---|---|---|
| **neon1-site** | HTML, scripts, links, assets, sizes, secret scan, built corpus pages, and browser checks with every API faked | Prints PDFs, uploads a new release, switches the release store, confirms the live version, and tags | With the corpus and Neo, about 12 to 18 minutes |
| **neon1-1NEON** | Types, tests, build, secret scan, Terraform checks, and every guided walkthrough played to its end in a real browser | Applies Terraform, ships the API, then the app with its page last, confirms, and tags | About 26 minutes, mostly the walkthroughs |
| **neon1-chat** (Neo) | Tests with AWS faked, Terraform checks, and a secret scan | Applies Terraform, which ships the function, checks the live endpoint, and tags | Within the 12 to 18 minutes above |
| **neon1-corpus** | Front matter, links, anything that looks private, the renderer, and every diagram with alt text | Tags the release, publishes a bundle for each reader, and asks neon1.tech to publish it | Within the 12 to 18 minutes above |

- **Tags follow the changelog.** Each change adds an entry under `## Unreleased`. On deploy it becomes the new version, and the pipeline tags it once the live version is confirmed. Dev builds are never tagged.

### Deploying the website

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

A version number says what changed. A release level says how far it has been proven: **Implemented** (merged with checks passing), **Verified** (named acceptance tests passed), **Released** (the right version is live and tagged), or **Qualified** (real use and recovery are established). A tag means Released, never Qualified on its own. The [versioning standard](../standards/versioning.md) has the rules.

## Trying a change on dev first

Pushing any branch puts it on dev.neon1.tech, a private copy of the site and 1NEON, in about 30 seconds, because dev runs only the quick checks.

```mermaid
%% alt: Flowchart of the dev to production workflow. A push to any feature branch builds a private preview of that branch on dev.neon1.tech in about 30 seconds. The dev branch, which follows main, is the dev release at dev.neon1.tech. When a batch looks right and has been reviewed, the work is merged to main. Main runs the full checks, deploys to neon1.tech, and tags vX.Y.Z. After every push to main, main is merged back into the dev branch, so dev always starts from what is live.
flowchart TD
  branch["Push a feature branch"]:::step --> preview["Private preview<br/>dev.neon1.tech, about 30 seconds"]:::dev
  dev["dev branch<br/>follows main"]:::step --> devrel["Dev release<br/>dev.neon1.tech"]:::dev
  preview --> look{"Looks right?"}:::decision
  devrel --> look
  look -->|not yet| branch
  look -->|"reviewed"| main["Merge to main"]:::step
  main --> prod["Full checks, deploy to neon1.tech,<br/>tag vX.Y.Z"]:::prod
  prod -->|"main merged back into dev"| dev

  classDef step fill:#e8f5ea,stroke:#3b8f4a,color:#123d1b
  classDef dev fill:#efe9fb,stroke:#7a4fd0,color:#2b1a52
  classDef decision fill:#fff8e6,stroke:#d9b44a,color:#3d2f05
  classDef prod fill:#fff1e3,stroke:#e07b14,color:#4a2700
```

- **Branches and the dev release.** Each branch has its own preview at `dev.neon1.tech/__preview?b=<branch>`. The `dev` branch is the dev release. After every push to main, a workflow merges main into `dev`, and a conflict stops it rather than forcing anything.
- **Releases come only from main.** Main rebuilds with the full checks, including the browser tests and PDF printing dev skips.

### Who can open dev

Anyone not signed in gets the same bare "Not found" on every address. Signing in takes a secret link, which only starts a sign-in, and a passkey or email code for an account in dev's access group. A leaked link alone lets nobody in.

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

## One source for every word

The website, the Knowledge Center, 1NEON's guide, and Neo all read from neon1-corpus, a repository of Markdown documents. Each tagged release publishes a bundle for each reader, so one correction reaches all of them.

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

Every project moves through the same four layers.

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
