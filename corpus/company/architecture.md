---
id: company-architecture
title: How neon1 is built
summary: "Diagrams of the website, the 1NEON portal, Neo, the private dev copy, and how a change reaches them."
type: page
consumers: [knowledge, ai]
pdf: false
origin: "neon1-aws-infrastructure, neon1-site, neon1-1NEON, neon1-chat, and neon1-corpus"
status: adopted
updated: 2026-11-13
created: 2026-11-11
edition: "1.2"
---

# How neon1 is built

neon1 runs on a small set of AWS services, sized to cost a few dollars a month while it's quiet. Everything below is defined in code in public repositories on [GitHub](https://github.com/neon1llc), so each box here matches something you can read. The diagrams are drawn from Mermaid text, and each one has its source underneath it.

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
- **1NEON.** A single-page app with its own API. Sign-in uses email codes, passkeys, authenticator apps, or Google, through Cognito. Data is kept per organization, and files go straight from the browser to a private documents bucket, where every upload is scanned for malware. Invoices are paid on Stripe's own checkout page, so card and bank details never reach neon1.
- **Neo.** A small function that answers questions from neon1's public documents, using a language model on Amazon Bedrock. Amazon doesn't keep the questions or answers, or train on them. Per-visitor limits keep it fair and cheap.
- **Watching it.** Alarms and monthly budgets email Pradeep when something fails or costs more than expected.

### Inside 1NEON

The portal's own pieces, from the browser's direct paths (sign-in, file uploads, and paying on Stripe) to the API's storage, records, and messages.

```mermaid
%% alt: Diagram of 1NEON. CloudFront serves the 1NEON app from a private S3 bucket and sends /1NEON/api to API Gateway and the 1NEON API Lambda function. The API reads and writes DynamoDB and the S3 documents bucket, writes locked copies of signatures, invoices, and payments to an S3 records bucket under Object Lock, reads Stripe keys from SSM Parameter Store, sends email through SES, and sends texts through End User Messaging. The browser signs in with Cognito directly, uploads files straight to the documents bucket with a presigned link, where each one is scanned for malware, and pays invoices on Stripe Checkout, which calls the API's webhook at /1NEON/api/billing/stripe.
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

Signed approvals, handover acceptances, the service agreement's signatures, issued invoices, and payments live in DynamoDB like everything else, and a copy of each is also written to a records bucket under S3 Object Lock in governance mode, which keeps every copy unchanged for seven years. Nothing in that bucket expires on a schedule. Stripe's restricted key and its webhook signing secret are SecureString parameters under `/1neon/prod/stripe/`. Terraform creates them with placeholder values and never sees the real ones, and until they're set, online payment stays off.

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
  X->>R: locked copy
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

Neo only knows what's in neon1's public documents. Each question goes through CloudFront, which adds a secret header so the API answers only through neon1.tech, and through a check of the visitor's limits before the model sees it.

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

The portal has no passwords. Here is the email-code sign-in, the one the guided walkthrough shows. Passkeys and authenticator apps work the same way, with the code coming from the device.

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

## How a change ships

Every repository deploys itself from its main branch. GitHub Actions signs in to AWS with short-lived credentials (OpenID Connect), so no repository holds AWS keys. Each deploy runs its checks first, confirms the live version afterwards, and tags the release. Work is usually seen on dev first, as the next section shows.

```mermaid
%% alt: Flowchart of a site deploy. A change is merged to main on GitHub. GitHub Actions runs the checks: HTML, links, the asset manifest, and browser tests. If any fail, nothing is deployed. If they pass, the job gets short-lived AWS credentials through OpenID Connect, uploads shared fonts and media, uploads the whole release into its own folder, and then switches the release store to it, so every visitor moves at once. It confirms the live site serves the new version, tags the release, and keeps the last ten releases for a one-step rollback.
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

The other repositories follow the same pattern. 1NEON uploads its versioned files first and its page last. Infrastructure changes are planned and applied by Terraform, except permissions, which Pradeep applies by hand, so a deploy can never widen its own access.

## Trying a change on dev first

Before a change reaches neon1.tech, it can be seen on dev.neon1.tech, a private copy of the whole site and of 1NEON. Dev has its own bucket, CloudFront distribution, release store, 1NEON backend, sign-in pool, and permissions, so nothing done there can reach neon1.tech or production 1NEON. Pushing any branch puts it on dev in about 30 seconds, against about 6 minutes for a production deploy, because dev runs only the quick checks and is never tagged.

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

- **Branches and the dev release.** Each branch other than main gets its own preview, chosen with `dev.neon1.tech/__preview?b=<branch>`. The `dev` branch is the dev release. After every push to main, a workflow merges main into `dev` and rebuilds it.
- **Drafts in place.** A run of the dev workflow can build from a corpus branch, drafts included, so a post or a page can be read where it will appear before it's adopted.
- **Releases come only from main.** Dev builds are never tagged, announced, or counted as releases. Main rebuilds from the same commits and runs the full checks, including the browser tests and PDF printing that dev skips.
- **1NEON on dev.** The dev portal has its own API, table, documents bucket, and sign-in pool. Its data is a copy of production's, refreshed on request, with queued messages and sessions left out. Because that copy names real clients, dev admits only neon1's own accounts, sends mail only to neon1, and never creates an account for anyone else. Texts and the malware scan are off on dev, and its locked records are kept for a day instead of seven years.
- **What dev doesn't copy.** Dev uses the live Neo, since Neo only answers questions, and copies Knowledge Center PDFs from neon1.tech rather than printing them. Dev's infrastructure is applied by hand and never by a pipeline.
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
