---
id: case-answers-in-seconds
title: "Permission-aware document assistant"
summary: "Staff spent minutes searching Microsoft 365, or asked a senior colleague."
type: case-study
status: adopted
client: accounting firm
area: "cloud & AI"
kind: partner
role: "As neon1, as a subcontractor"
when: "2026"
updated: 2026-11-27
created: 2026-11-06
edition: "2.1"
consumers: [site, chat, knowledge, ai]
pdf: true
key: accounting
order: 1
stat_key: "~5 min → 14 s"
stat: "lookup · recall ~70% → 90%+"
short_problem: "Staff spent minutes searching Microsoft 365, or asked a senior colleague."
short_work: "An AWS Bedrock assistant that answers from approved documents each person may see."
short_results: "Timed lookups before and after, and scored 80 test questions."
short_after: "Next, an MCP server so agents search with the same permissions."
origin: "neon1-site src/app/public/index.html#case-accounting"
---

# Permission-aware document assistant

## The problem

The firm's knowledge sat across Microsoft 365: policies, manuals, Word files, and PDFs. A routine lookup often meant asking a senior colleague. Drafts, old versions, and restricted files sat beside the right answer, so a plain chatbot would have been risky.

The ask: staff ask a normal question and get the approved answer with its source document.

## The work

I was the lead engineer, subcontracted to the firm that held the contract. We designed it together, the partner maintains it, and I built ingestion, embeddings, retrieval, and answer quality.

- Only approved Microsoft 365 libraries sync into versioned, encrypted storage, with source, version, and access details.
- Bedrock Knowledge Bases, Titan embeddings, and OpenSearch Serverless run hybrid search, so exact form numbers match as well as reworded questions.
- Each question is checked against what that person may see before retrieval. The assistant answers from the passages, with citations, or says it doesn't know.
- Terraform and GitHub Actions deploy it.

## The results

| Measure | Before | After |
|---|---|---|
| Median lookup, answer and source checked | ~5 min | ~14 s |
| Right passage found (recall at 8) | ~70% | 90%+ |
| Answers fully supported by their source | under 80% | 90%+ |
| Interruptions of senior staff per week | ~18 | ~7 |

Measured on 80 representative questions, including ones it should refuse. A fast answer from the wrong document counted as a failure. Interruptions come from a staff survey. These results describe that test set, so each answer carries citations to check.

## After handover

Microsoft 365 stays the source of truth, and the index can be rebuilt from it. The firm decides which documents are approved and who sees them. Next is an MCP server over the same retrieval, so agents work under the same permissions.
