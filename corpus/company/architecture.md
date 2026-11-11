---
id: company-architecture
title: How neon1 is built
summary: "Diagrams of the website, the 1NEON portal, Neo, and how a change reaches them."
type: page
consumers: [knowledge, ai]
pdf: false
origin: "neon1-aws-infrastructure, neon1-site, neon1-1NEON, neon1-chat, and neon1-corpus"
status: adopted
updated: 2026-11-11
created: 2026-11-11
edition: "1.0"
---

# How neon1 is built

neon1 runs on a small set of AWS services, sized to cost a few dollars a month while it's quiet. Everything below is defined in code in public repositories on [GitHub](https://github.com/neon1llc), so each box here matches something you can read. The diagrams are drawn from Mermaid text, and each one has its source underneath it.

## The whole picture

One CloudFront distribution serves neon1.tech. It sends each address to the part of the system that owns it: the website, the 1NEON portal and its API, or Neo's API. Storage stays private, and only CloudFront can read the buckets. Every visit uses HTTPS, with strict security headers.

```mermaid
%% alt: Architecture diagram. Visitors reach Route 53 DNS and then one CloudFront distribution in AWS us-east-1, with an ACM certificate, edge functions, and a release store. CloudFront sends the website to a private S3 bucket, the 1NEON app to a second private bucket, the 1NEON API to API Gateway and Lambda, which use DynamoDB, an S3 documents bucket, Cognito, SES, and SMS, and Neo's API to API Gateway and Lambda, which use Amazon Bedrock and DynamoDB. CloudWatch alarms reach Pradeep by email through SNS. Google Workspace handles neon1.tech mail.
flowchart LR
  visitor(["Visitor's browser"]):::person
  subgraph aws["AWS · us-east-1"]
    direction LR
    dns["Route 53<br/>neon1.tech DNS, DNSSEC"]:::network
    subgraph edge["Edge"]
      cf["CloudFront<br/>neon1.tech · www · mta-sts"]:::network
      acm["ACM certificate<br/>neon1.tech, *.neon1.tech"]:::security
      fn["CloudFront Functions<br/>site router · portal router"]:::compute
      kvs["Key value store<br/>live site release"]:::storage
    end
    subgraph site["Website"]
      s3site[("S3 · site bucket<br/>releases, fonts, media")]:::storage
    end
    subgraph portal["1NEON portal"]
      s3app[("S3 · app bucket")]:::storage
      apigw["API Gateway<br/>/1NEON/api"]:::network
      api["Lambda · 1NEON API<br/>and its outbox, every minute"]:::compute
      ddb[("DynamoDB<br/>projects, people, records")]:::storage
      docs[("S3 · documents<br/>malware-scanned uploads")]:::storage
      cognito["Cognito<br/>auth.neon1.tech sign-in"]:::security
      ses["SES<br/>notify.neon1.tech mail"]:::comms
      sms["End User Messaging<br/>toll-free texts"]:::comms
    end
    subgraph chat["Neo, the chat"]
      chatgw["API Gateway<br/>/chat/api"]:::network
      chatfn["Lambda · Neo"]:::compute
      bedrock["Amazon Bedrock<br/>language model"]:::ai
      limits[("DynamoDB<br/>rate limits")]:::storage
    end
    alarms["CloudWatch alarms<br/>and budgets"]:::ops
    sns["SNS"]:::ops
  end
  gws["Google Workspace<br/>neon1.tech mail"]:::external
  pradeep(["Pradeep"]):::person

  visitor --> dns --> cf
  acm -.- cf
  cf --- fn
  fn -.->|reads| kvs
  cf -->|"/ and files"| s3site
  cf -->|"/1NEON"| s3app
  cf -->|"/1NEON/api"| apigw --> api
  api --> ddb
  api --> docs
  api --> ses
  api --> sms
  visitor -.->|sign in| cognito
  visitor -.->|"uploads, presigned"| docs
  cf -->|"/chat/api"| chatgw --> chatfn
  chatfn --> bedrock
  chatfn --> limits
  alarms --> sns -->|email| pradeep
  gws -.->|mail| pradeep

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
- **1NEON.** A single-page app with its own API. Sign-in uses email codes, passkeys, authenticator apps, or Google, through Cognito. Data is kept per organization, and files go straight from the browser to a private documents bucket, where every upload is scanned for malware.
- **Neo.** A small function that answers questions from neon1's public documents, using a language model on Amazon Bedrock. Amazon doesn't keep the questions or answers, or train on them. Per-visitor limits keep it fair and cheap.
- **Watching it.** Alarms and monthly budgets email Pradeep when something fails or costs more than expected.

## Visiting neon1.tech

What happens between typing the address and seeing the page. Each deploy uploads the whole site into a new folder, and one small switch, the release store, tells CloudFront which folder is live. So every file in a visit comes from the same release, even while a deploy is running.

```mermaid
%% alt: Sequence diagram of a visit. The browser asks Route 53 for neon1.tech and gets CloudFront's address. It requests the page from CloudFront. The site router function reads the live release from the release store and rewrites the address into that release's folder. CloudFront returns a cached copy or fetches it from the private S3 bucket, adding security headers. The browser then loads the page's scripts, styles, fonts, and media the same way, all from the same release, and starts the matrix rain.
sequenceDiagram
  autonumber
  actor V as Visitor
  participant B as Browser
  participant R as Route 53
  participant C as CloudFront
  participant F as Site router
  participant K as Release store
  participant S as S3 site bucket
  V->>B: open neon1.tech
  B->>R: where is neon1.tech?
  R-->>B: CloudFront's address
  B->>C: GET / over HTTPS
  C->>F: route the request
  F->>K: which release is live?
  K-->>F: release id
  F-->>C: /releases/<id>/index.html
  alt cached at the edge
    C-->>B: page, with security headers
  else not cached yet
    C->>S: fetch, signed by CloudFront
    S-->>C: page
    C-->>B: page, with security headers
  end
  B->>C: scripts, styles, fonts, media
  Note over C,S: the same release for every file, so a page and its scripts always match
  C-->>B: files
  B-->>V: the page, and the matrix rain starts
```

## Asking Neo

Neo only knows what's in neon1's public documents. Each question goes through CloudFront, which adds a secret header so the API answers only through neon1.tech, and through a check of the visitor's limits before the model sees it.

```mermaid
%% alt: Sequence diagram of a Neo question. The browser sends the question to CloudFront at /chat/api. CloudFront adds a secret header and forwards it to API Gateway and the Neo Lambda function. The function checks the header and the visitor's rate limit in DynamoDB. If the visitor is over the limit, it answers with a short cooldown message. Otherwise it sends neon1's public documents and the question to Amazon Bedrock, gets an answer, and returns it to the browser.
sequenceDiagram
  autonumber
  actor V as Visitor
  participant C as CloudFront
  participant N as Neo · Lambda
  participant D as DynamoDB limits
  participant M as Amazon Bedrock
  V->>C: POST /chat/api with a question
  C->>N: forward, with a secret header only CloudFront adds
  N->>N: check the header
  N->>D: count this visitor's recent questions
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
%% alt: Sequence diagram of 1NEON sign-in. The person enters their email in the 1NEON app. The app asks Cognito to start a sign-in. Cognito runs 1NEON's trigger, which writes the branded message, and emails an 8-digit code through SES. The person reads the code in their inbox and enters it. Cognito checks the code and returns tokens. The app calls the 1NEON API through CloudFront with the token, and the API verifies it and returns the person's Home page data from DynamoDB.
sequenceDiagram
  autonumber
  actor P as Person
  participant A as 1NEON app
  participant G as Cognito
  participant T as Trigger · Lambda
  participant E as SES
  participant I as Inbox
  participant X as 1NEON API
  participant D as DynamoDB
  P->>A: email, then Continue
  A->>G: start sign-in
  G->>T: write the code email
  T-->>G: the branded message
  G->>E: send the code
  E->>I: "Your 1NEON sign-in code"
  P->>I: read the 8-digit code
  P->>A: paste the code, Enter
  A->>G: answer with the code
  G-->>A: tokens
  A->>X: GET Home, with the token
  X->>X: verify the token and the organization
  X->>D: what needs them, what's coming up, what's new
  D-->>X: records
  X-->>A: Home
  A-->>P: signed in
```

## How a change ships

Every repository deploys itself from its main branch. GitHub Actions signs in to AWS with short-lived credentials (OpenID Connect), so no repository holds AWS keys. Each deploy runs its checks first, confirms the live version afterwards, and tags the release.

```mermaid
%% alt: Flowchart of a site deploy. A change is merged to main on GitHub. GitHub Actions runs the checks: HTML, links, the asset manifest, and browser tests. If any fail, nothing is deployed. If they pass, the job gets short-lived AWS credentials through OpenID Connect, uploads shared fonts and media, uploads the whole release into its own folder, and then switches the release store to it, so every visitor moves at once. It confirms the live site serves the new version, tags the release, and keeps the last ten releases for a one-step rollback.
flowchart TD
  merge["Merge to main"]:::step --> checks{"Checks pass?<br/>HTML, links, assets,<br/>browser tests"}:::decision
  checks -->|no| stop["Nothing deploys"]:::stop
  checks -->|yes| oidc["Short-lived AWS role<br/>through OpenID Connect"]:::security
  oidc --> shared["Upload shared fonts and media"]:::step
  shared --> release["Upload the whole release<br/>to releases/&lt;id&gt;/"]:::step
  release --> switch["Switch the release store<br/>every visitor moves at once"]:::network
  switch --> verify{"Live site serves<br/>the new version?"}:::decision
  verify -->|yes| tag["Tag vX.Y.Z on GitHub"]:::step
  verify -->|no| rollback["make rollback:<br/>back in seconds"]:::stop
  tag --> keep["Keep the last 10 releases"]:::step

  classDef step fill:#e8f5ea,stroke:#3b8f4a,color:#123d1b
  classDef decision fill:#fff8e6,stroke:#d9b44a,color:#3d2f05
  classDef stop fill:#fdecec,stroke:#c83b3b,color:#4d1010
  classDef security fill:#fdecec,stroke:#c83b3b,color:#4d1010
  classDef network fill:#efe9fb,stroke:#7a4fd0,color:#2b1a52
```

The other repositories follow the same pattern. 1NEON uploads its versioned files first and its page last. Infrastructure changes are planned and applied by Terraform, except permissions, which Pradeep applies by hand, so a deploy can never widen its own access.

## One source for every word

The website, the Knowledge Center, 1NEON's guide, and Neo all read from neon1-corpus, a repository of Markdown documents. Each tagged release of the corpus publishes a bundle for each reader, so a correction made once reaches all of them.

```mermaid
%% alt: Flowchart of the corpus. Markdown documents in neon1-corpus are checked by a linter for front matter, links, and anything private. A tagged release exports a bundle for each reader. The site bundle feeds the case studies and questions on neon1.tech. The knowledge bundle feeds the Knowledge Center and its PDFs. The chat bundle feeds Neo, refreshed weekly. The portal bundle feeds the 1NEON guide used by Neo inside 1NEON.
flowchart LR
  md["neon1-corpus<br/>Markdown documents"]:::source --> lint{"Lint: front matter,<br/>links, nothing private"}:::decision
  lint --> tag["Tagged release<br/>vX.Y.Z"]:::step
  tag --> b1["site bundle"]:::bundle --> site["neon1.tech<br/>case studies, questions"]:::reader
  tag --> b2["knowledge bundle"]:::bundle --> kc["Knowledge Center<br/>pages and PDFs"]:::reader
  tag --> b3["chat bundle"]:::bundle --> neo["Neo<br/>refreshed weekly"]:::reader
  tag --> b4["portal bundle"]:::bundle --> guide["1NEON guide<br/>for Neo in the portal"]:::reader

  classDef source fill:#e8f5ea,stroke:#3b8f4a,color:#123d1b
  classDef decision fill:#fff8e6,stroke:#d9b44a,color:#3d2f05
  classDef step fill:#efe9fb,stroke:#7a4fd0,color:#2b1a52
  classDef bundle fill:#f1f3f5,stroke:#7b8794,color:#1f2933
  classDef reader fill:#fff1e3,stroke:#e07b14,color:#4a2700
```

## A project in 1NEON

Every project moves through the same four layers, and the work in each one follows the way a project runs: listen, propose, decide, build, and hand over.

```mermaid
%% alt: State diagram of a 1NEON project. It starts in Needs, where Pradeep listens, proposes options, and the client's decision maker decides. An approved option moves the project to Execute, where the work is built and shown as it lands. Then Observe, where results are measured against what was agreed. Then Normalize, where the work is handed over and becomes part of normal operations. From Normalize, a new need starts the cycle again.
stateDiagram-v2
  direction LR
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

- [neon1-aws-infrastructure](https://github.com/neon1llc/neon1-aws-infrastructure): the DNS, the CloudFront distribution, its routers and release store, and the deploy permissions.
- [neon1-site](https://github.com/neon1llc/neon1-site): the website and the Knowledge Center.
- [neon1-1NEON](https://github.com/neon1llc/neon1-1NEON): the portal, its API, and its infrastructure.
- [neon1-chat](https://github.com/neon1llc/neon1-chat): Neo.
- [neon1-corpus](https://github.com/neon1llc/neon1-corpus): every document, and these diagrams.
