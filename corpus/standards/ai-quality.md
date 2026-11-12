---
id: standards-ai-quality
title: AI quality and oversight
summary: When neon1 uses AI, how it's tested before anyone relies on it, and where a person stays in charge.
type: standard
status: adopted
updated: 2026-11-11
created: 2026-11-01
consumers: [knowledge, ai]
pdf: true
edition: "1.1"
order: 14
origin: "neon1's internal handbook, AI quality and oversight"
related: [standards-security-and-data, standards-technology-decisions, policy-ai-use]
---

# AI quality and oversight

I use AI when it makes a defined task better after counting the errors, the review time, privacy, cost, and upkeep. A smooth demo is useful for exploring. It doesn't show that something is dependable. So I start with AI that a person can check and correct, and earn more autonomy with evidence.

## Whether AI belongs in the solution

I compare the current process, a simple rule or search, an existing product, and a narrow AI approach. Ordinary software wins when the rules are clear and mistakes are costly. AI tends to help with drafting, sorting messy text, summarizing documents you're allowed to share, and finding the right passage. You still need to know when to double-check.

I use the [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) and its [generative AI profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) as prompts for who's responsible, what the task is, how it's tested, and what risk is left. They don't certify anything.

## One page on intended use

Before choosing a model we write down the user, the task, the approved data, the output, the actions it may take, the decisions it may not make, who reviews, and the fallback. We also decide whether the output is a draft, a search aid, a recommendation, or an action, since each needs different checks.

A document-search assistant can find an invoice or a policy passage. That doesn't make it fit to give accounting or legal conclusions, and the interface should make that plain. We also set a spending limit, a response time, and how much review effort is acceptable.

## A test set that looks like the real work

We collect permitted examples and write the expected answer before tuning anything. The set includes ordinary requests, vague ones, missing information, out-of-date documents, conflicting sources, odd formats, and cases that should be refused or sent to a person. Examples used for building stay separate from examples used for the final check.

Twenty or thirty cases are enough to find early problems, but not enough to support a broad reliability claim.

## Testing the whole task

Correctness, evidence, access boundaries, refusals, actions, speed, cost, and human effort are checked separately, and the same cases run against the old way. For search-based assistants I look at what was retrieved and what was claimed, because a plausible citation isn't proof. For data extraction I check fields, units, dates, amounts, and IDs against rules. For classification I look at results per category, since an overall score can hide failure on the rare ones that matter.

Evaluation tools that use another model as the judge get checked against a small set graded by a person.

## Permissions live outside the model

Access is enforced by the application and the search layer, never by a prompt asking the model to behave. Retrieved documents, emails, web pages, and tool output are treated as untrusted input, since [prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) is a real risk even with retrieval.

Tools start read-only. Sending messages, spending money, changing permissions, or deleting anything needs a person to review the actual recipient, content, or change first. An approve button doesn't protect much if you can't see what it approves. Run time, retries, output size, and spend all have limits.

## Releasing in stages

1. **Offline.** Tested on permitted examples, away from live data.
2. **Shadow.** Runs alongside the normal process without changing anything, so we can compare.
3. **Assisted pilot.** Named people use the output on a limited task, with a fallback and a way to report problems.
4. **Controlled use.** Expanded only when you accept the evidence, the remaining risks, and the running cost.

Some services are best left at the assisted stage permanently. A pilot doesn't have to become autonomous.

## When to stop

Release is blocked by a serious unauthorized disclosure or action in testing, unresolved serious errors, no working recovery, or costs and review effort that cancel the benefit. There's always a way to switch the AI part off and keep doing the essential task by hand or with something simpler.

## After launch

We track task success, corrections, review minutes, cost per successful task, and speed, and look for groups the change might be failing. Any change to the model, prompt, documents, or tool permissions means rerunning the test set. A provider's benchmark doesn't tell us how it does on your documents.

## What I'll say publicly

Only scoped statements with their conditions: "In a twenty-case test using made-up records, it completed eighteen without correction," if that's what happened. Never "reliable AI for every business."

Neo, the chat on this site, answers only from neon1's public documents, is run against a set of test questions before each change, and has its directives published in [the corpus](../neo/chat.md).

## Sources

- [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), NIST: mapping, measuring, and managing the risks of an AI system.
- [Generative AI profile, NIST AI 600-1](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), NIST: risks particular to language models, with suggested actions.
- [Top 10 for LLM applications](https://genai.owasp.org/llm-top-10/), OWASP: the common ways AI features are misused, starting with prompt injection.
