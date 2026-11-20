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
updated: 2026-11-20
created: 2026-11-06
edition: "1.10"
consumers: [site, chat, knowledge, ai]
pdf: true
key: accounting
order: 1
stat_key: "~5 min → 14 s"
stat: "lookup · recall 72% → 94%"
short_problem: "Staff spent minutes searching Microsoft 365, or asked a senior colleague."
short_work: "An AWS Bedrock assistant that answers from approved documents each person may see."
short_results: "Timed real lookups before and after, and scored 80 test questions."
short_after: "Next, an MCP server so agents search with the same permissions."
origin: "neon1-site src/app/public/index.html#case-accounting"
---

# Permission-aware document assistant

## The problem

The firm's knowledge was spread across Microsoft 365: policies, manuals, Word files, PDFs, and client documents. A routine lookup took 2 to 10 minutes, often by asking a senior colleague. Drafts, old versions, and restricted files sat next to the right answer, so a simple chatbot would have been risky.

The ask: staff ask normal questions and get the approved answer with its document.

## The work

[Xenoss](https://xenoss.io), an AWS partner, held the contract and brought me in as a subcontractor. This was my first project with a partner. We designed it together and Xenoss maintains it. I handled ingestion, embeddings, retrieval, and answer quality.

- Only approved Microsoft 365 libraries sync into versioned, encrypted S3, with source, version, and access details.
- Bedrock Knowledge Bases, Titan embeddings, and OpenSearch Serverless run hybrid search, so exact form numbers match as well as reworded questions.
- Each question is checked against what that person may see before retrieval. The assistant answers from the passages, with citations, or says it doesn't know.
- Terraform and GitHub Actions deploy it, and CloudWatch tracks ingestion, retrieval, and answer time.

## The results

| Measure                                  | Before       | After  |
|------------------------------------------|--------------|--------|
| Median lookup, answer and source checked | ~4.8 min     | 13.6 s |
| Slowest 5% of lookups                    | up to 10 min | ~24 s  |
| Right passage found (recall at 8)        | 72%          | 94%    |
| Answers fully supported by their source  | 78%          | 92%    |
| Interruptions of senior staff per week   | ~18          | ~7     |

Measured on 80 representative questions, including ones it should refuse, judged by two reviewers. A fast answer from the wrong document counted as a failure. Lookup times before launch were timed automatically and checked against the staff's own estimates in a short survey. After launch, the system records the start and end of each lookup, as metrics only, with no question or answer text. Interruptions of senior staff left no record, so that figure comes from the survey.

These results describe that test set, not a guarantee, so each answer carries citations to check.

Boris M., who owns Boris M Tax, said the firm had been moving its files, client documents, and software onto one cloud, and wanted to start using AI carefully and on its own terms. In his view, the knowledge base moved the firm forward on both. This is my summary of our conversation, published with his agreement.

## After handover

Microsoft 365 stays the source of truth, and the index can be rebuilt from it anytime. The firm decides which documents are approved and who sees them. Next is an MCP server over the same retrieval, so agents use the firm's knowledge with the same permissions, then narrow, reviewable agent actions where they save real time.
