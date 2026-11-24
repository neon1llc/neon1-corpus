---
id: company-architecture-decisions
title: "Architecture decisions"
summary: "Architecture decision records for neon1's systems: what I chose, why, what would change my mind, and what I missed."
type: page
consumers: [ai]
pdf: false
origin: "neon1-chat, neon1-aws-infrastructure, neon1-1NEON, neon1-corpus, git history, and AWS Cost Explorer and CloudTrail for neon1's account"
status: adopted
updated: 2026-11-24
created: 2026-11-24
edition: "1.0"
related: [company-architecture, standards-technology-decisions]
---

# Architecture decisions

Each record is one choice that shapes how neon1's systems work, numbered in the order made. [How neon1 is built](architecture.md) shows the parts.

## ADR-001: Neo reads the whole corpus

*Accepted 2026-11-08.*

Every question carries the public text Neo answers from, about 157,000 characters. There's no search index to run, and an answer can't be lost to a bad search. A question costs about 0.6 cent at most, computed from the prompt size and November's token prices.

I'd add search when the text nears the 170,000-character limit. What I missed: my README said under a fifth of a cent long after the text had grown.

## ADR-002: Spending has more than one stop

*Accepted 2026-11-08, limits changed 2026-11-24.*

Neo takes 6 questions a minute and 15 an hour from one visitor, and 60 a day in total. At the daily cap that's about $11 a month. Separate limits cover me: a $1 daily Bedrock alert, and a $10 monthly block on my own admin access and my evaluation role. A bug, a stranger, and my own testing fail in different ways, so one limit isn't enough.

What I missed: on the night of November 15, my admin user ran Neo's question set about 29 times unattended, and the day cost $29.90. I didn't save those runs, so my records didn't explain the bill. CloudTrail did. November reached $60.32 against a $15 budget, mostly from testing. I also set the cap at 200 from the old cost figure. At the measured cost, that was about $37 a month, so I lowered it.

## ADR-003: Neo counts networks, not people

*Accepted 2026-11-08.*

Neo keeps a salted hash of the visitor's network, never the address, and each record expires. That's enough to limit abuse without building a list of visitors. If a counter can't be written, Neo refuses the question. People who share a network share a limit, so every refusal offers my email and a free call. I'd add a firewall with bot checks once there's traffic worth protecting.

## ADR-004: A question set picks Neo's model

*Accepted 2026-11-09.*

Neo runs Qwen3 Next 80B on Amazon Bedrock. I asked seven models the same questions about neon1, with traps such as a price I don't publish, because a leaderboard can't tell me how a model handles my facts. Qwen passed every case across repeated runs, at about the price of the model that once repeated a planted price.

I'd switch for a model that passes the same questions for less. One run varies by about two questions, so I read a result as a range.

## ADR-005: Every public fact is written once

*Accepted 2026-11-09.*

The website, Neo, the Knowledge Center, and the PDFs read from this repository, so I fix a fact in one place. The cost is that each of them picks up a change on its own schedule, so I check each after a release. I'd revisit this if keeping them in step took more work than keeping copies.

## ADR-006: A release skips only what already passed

*Accepted 2026-11-23.*

The portal's browser tests are skipped when the files and live site styles they depend on match a run that passed. Any difference, or any error in the check, runs them all. Replaying identical inputs cost time without telling me anything new. With the tests split into parts too, the portal deploy went from about 26 minutes to about 2.5.

I'd drop the skip if a release passed this way and failed live. What I missed: the first time it skipped, GitHub skipped the release steps after it too. The run was green and nothing shipped. The release job now checks each result itself.

## Sources

- [neon1-chat](https://github.com/neon1llc/neon1-chat#readme): Neo's model, limits, and checks.
- [neon1-aws-infrastructure](https://github.com/neon1llc/neon1-aws-infrastructure#readme): budgets, blocks, and releases.
- [neon1-1NEON deploy workflow](https://github.com/neon1llc/neon1-1NEON/blob/main/.github/workflows/deploy.yml): the skip and the release condition.
- Git history in these repositories: the dates.
- AWS Cost Explorer and CloudTrail for neon1's account, November 1 to 24, 2026: costs, token prices, and who made the calls.
