---
id: company-four-depths
title: "Neo and releases at four depths"
summary: "How Neo answers a question and how a change ships, each explained in one sentence, one paragraph, the mechanism, and the tradeoffs."
type: page
consumers: [knowledge]
pdf: false
origin: "neon1-chat, neon1-aws-infrastructure, and the repositories' release workflows"
status: draft
updated: 2026-11-24
created: 2026-11-24
edition: "1.0"
related: [company-architecture, company-decisions, company-operating-record]
---

# Neo and releases at four depths

Stop reading at the depth you need. Each part goes one level deeper.

## How Neo answers

### In one sentence

Neo answers questions about neon1 from neon1's public pages, within limits that keep it from overspending or making promises.

### In a paragraph

Neo is the chat on neon1.tech and in the portal. It reads the same public documents you can, answers from them, and says so when they don't cover something. It never quotes a price the pricing page doesn't publish, and it offers Pradeep by email or a free call when your next step is a person. Each visitor has a question limit, and the whole site has a daily one.

### The mechanism

The chat window calls `neon1.tech/chat/api/chat`, which CloudFront forwards to an HTTP API and a Node 22 Lambda function. CloudFront adds a secret header that the function checks, so the API can't be called around the limits.

The function checks the conversation against a fixed contract: at most 11 turns, 1,200 characters a turn, and 6,000 in all. It counts the question in DynamoDB, keyed by a salted hash of the visitor's network, before any model call. Then it makes one Converse call to Qwen3 Next on Bedrock. The system prompt holds the fixed rules, Neo's directive, and the whole public corpus. Code then checks the reply: it keeps only links the corpus contains, drops sentences with a price the pricing page doesn't publish, drops claims of certification, and cuts the length. It stores no message text, and the logs hold event names and error classes only.

### The tradeoffs

- **No search index.** Putting the whole corpus in the prompt removes retrieval misses and an index to run, at about 0.6 cent a question and a ceiling of 170,000 characters. See [the decision](decision-neo-prompt.md).
- **Fixed rules, not a second model.** Rewrites and output checks are code, so they're predictable and cost nothing per call, and they can't catch what I didn't think to write down.
- **It fails closed.** If a counter can't be written, the question is refused. A DynamoDB outage takes Neo down, which is better than an open spend.
- **Not yet.** A web application firewall with bot challenges waits for traffic worth protecting.

> [!note] Pradeep writes this: the tradeoff you'd defend hardest to a skeptical engineer, in your words.

## How a change ships

### In one sentence

A change is checked automatically, proven on a private copy, and released only when I say so.

### In a paragraph

Every change lands first on a private dev copy that only I can open. Automated checks run on every change, and the private copy lets me look at it before the live site changes. Releasing is a separate step I take on purpose. If a release goes wrong, I revert it.

### The mechanism

A push to a repository's dev branch builds the private copy at dev.neon1.tech, behind a gate. Pushing to main runs the checks, then plans and applies the infrastructure stacks for the site and DNS in CI. The IAM and account stacks are applied by hand. The corpus is released by tag, and its bundles are what the site, Neo, and the portal read. The site's watch picks up a release within 15 minutes, and Neo refreshes weekly.

Each change is described at one of four release levels: Implemented, Verified, Released, and Qualified. Qualified needs a tested recovery. I read any plan that replaces or destroys a resource before applying it, and Terraform state is versioned in S3.

### The tradeoffs

- **Skipping proven checks.** The portal skips its browser walkthroughs when the same files already passed, which saves about 23 minutes and depends on the fingerprint covering every input. See [the decision](decision-release-proof.md).
- **Different schedules.** The site, Neo, and the portal's guide update separately after a corpus release, so I check each one.
- **Hand-applied stacks.** The account and IAM stacks are applied by hand. CI's role can't change IAM, so those changes stay a manual step.
- **Rollback.** Reverting on main and letting CI apply is simple, and I haven't timed it. It's on the [drill list](operating-record.md).

> [!note] Pradeep writes this: what you'd change first about the release path, in your words.

## Sources

- [neon1-chat](https://github.com/neon1llc/neon1-chat#readme): Neo's limits, contract, and checks.
- [neon1-aws-infrastructure](https://github.com/neon1llc/neon1-aws-infrastructure#readme): stacks, release levels, and rollback.
- [How neon1 is built](architecture.md): the diagrams.
