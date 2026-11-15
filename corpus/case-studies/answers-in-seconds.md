---
id: case-answers-in-seconds
title: "Answers in seconds, with sources"
summary: "Staff spent minutes searching Microsoft 365, or asked a senior colleague."
type: case-study
status: adopted
client: accounting firm
area: "cloud & AI"
kind: partner
role: "As neon1, designed with Xenoss and handed over to them"
when: "2026"
updated: 2026-11-15
created: 2026-11-06
edition: "1.5"
consumers: [site, chat, knowledge, ai]
pdf: true
key: accounting
order: 1
stat_key: "2–10 min → under 30 s"
stat: "· a routine lookup"
short_problem: "Staff spent minutes searching Microsoft 365, or asked a senior colleague."
short_work: "An AWS Bedrock assistant that answers from approved documents each person may see."
short_results: "Routine lookups went from minutes to under 30 seconds."
short_after: "Next, an MCP server so agents search with the same permissions."
origin: "neon1-site src/app/public/index.html#case-accounting"
---

# Answers in seconds, with sources

## The problem

The firm's knowledge was spread across Microsoft 365: policies, manuals, Word files, PDFs, and client documents. A routine lookup took 2 to 10 minutes, often by asking a senior colleague. Drafts, old versions, and restricted files sat next to the right answer, so a simple chatbot would have been risky.

The ask: let staff ask normal questions, return the approved answer with its document, and never make the AI more authoritative than the source.

## The work

This was my first project with an AWS partner, [Xenoss](https://xenoss.io), who helped with design and maintenance. I handled ingestion, embeddings, retrieval, and answer quality.

- Only approved Microsoft 365 libraries sync into versioned, encrypted S3, with source, version, and access details.
- Bedrock Knowledge Bases, Titan embeddings, and OpenSearch Serverless run hybrid search, so exact form numbers match as well as reworded questions.
- Each question is checked against what that person may see before retrieval, and the assistant answers from the passages, with citations, or says it doesn't know.
- Terraform and GitHub Actions deploy it, and CloudWatch tracks ingestion, retrieval, and answer time.

## The results

A routine lookup that took 2 to 10 minutes, often by asking a senior colleague, came back in under 30 seconds with its source document.

I'm keeping this page to that one result until the detailed measurements behind it are confirmed and the firm has approved publishing them. An assistant can still be wrong, so each answer carries citations to check.

In the client's words:

> "The work helped quicken the direction that we were moving on for some time, working toward a completely centralized single cloud for our org, assets and products used. And using AI safely and intentionally. The knowledge base project was a push forward for us on both fronts. Thanks Pradeep!"
>
> Boris M., Boris M Tax

## After handover

Microsoft 365 stays the source of truth, and the index can be rebuilt from it anytime. The firm decides which documents are approved and who sees them. Next is an MCP server over the same retrieval, so agents use the firm's knowledge with the same permissions, then narrow, reviewable agent actions where they save real time.
