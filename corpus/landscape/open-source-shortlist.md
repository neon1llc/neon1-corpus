---
id: landscape-open-source-shortlist
title: Open-source tools on my shortlist
summary: "The open-source projects I'd look at first for common small-business needs, what each is for, and what to check before relying on one."
type: comparison
status: adopted
updated: 2026-11-09
created: 2026-11-01
edition: "1.0"
reviewed: 2026-11-01
consumers: [knowledge, ai]
pdf: true
featured: true
origin: "neon1's November 2026 research notes, GitHub tooling catalog (96 repositories, public facts only)"
related: [standards-technology-decisions, forms-tool-decision, guides-before-you-buy]
---

# Open-source tools on my shortlist

> [!warning] A shortlist, not a recommendation
> Projects I'd look at first when a need is real, with repositories, purpose, and licenses reviewed in November 2026. That's discovery, not a production test, a security review, or a promise of fit. "Free" software still costs time to host, update, and back up. The [technology decisions](../standards/technology-decisions.md) standard explains how a tool earns its place.

## How to read this

- **Worth a small trial** means a sensible first look when the need exists, often as a paid hosted version.
- **Needs an owner** means it can be excellent but needs real technical or domain ownership.
- **In use here** means neon1's own public repositories use it today.

Projects that cost more to run than they save at small-business scale, or had an unresolved concern at review, were left off.

## Automation

| Project | What it's for | Fit |
|---|---|---|
| [n8n](https://github.com/n8n-io/n8n) | Visual workflows that connect business tools | Worth a small trial. Source-available license, so read its terms before hosting it for others |
| [Activepieces](https://github.com/activepieces/activepieces) | Visual automation, similar in spirit to Zapier | Worth a small trial |
| [Kestra](https://github.com/kestra-io/kestra), [Windmill](https://github.com/windmill-labs/windmill), [Node-RED](https://github.com/node-red/node-red) | Orchestration and event-driven flows | Needs an owner |

## Business applications

| Project | What it's for | Fit |
|---|---|---|
| [Twenty](https://github.com/twentyhq/twenty) | A modern customer relationship manager | Worth a small trial |
| [Invoice Ninja](https://github.com/invoiceninja/invoiceninja) | Quotes, invoices, and payments | Worth a small trial |
| [Akaunting](https://github.com/akaunting/akaunting), [Dolibarr](https://github.com/Dolibarr/dolibarr) | Accounting and small business management | Needs an owner, and your accountant's agreement |

## Internal tools and databases

| Project | What it's for | Fit |
|---|---|---|
| [NocoDB](https://github.com/nocodb/nocodb), [Baserow](https://github.com/baserow/baserow) | Spreadsheet-style databases with forms and views | Worth a small trial |
| [Appsmith](https://github.com/appsmithorg/appsmith), [ToolJet](https://github.com/ToolJet/ToolJet), [Budibase](https://github.com/Budibase/budibase) | Simple internal apps on top of existing data | Worth a small trial |

## Documents and collaboration

| Project | What it's for | Fit |
|---|---|---|
| [Paperless-ngx](https://github.com/paperless-ngx/paperless-ngx) | Scanning, reading, and filing paper documents | Worth a small trial |
| [Outline](https://github.com/outline/outline), [BookStack](https://github.com/BookStackApp/BookStack), [Docmost](https://github.com/docmost/docmost) | A team wiki for procedures and how-tos | Worth a small trial |
| [Formbricks](https://github.com/formbricks/formbricks) | Surveys and feedback forms | Worth a small trial |
| [Documenso](https://github.com/documenso/documenso) | Electronic signatures | Needs an owner. Check that its signatures meet your legal needs |

## Data and reporting

| Project | What it's for | Fit |
|---|---|---|
| [Metabase](https://github.com/metabase/metabase), [Evidence](https://github.com/evidence-dev/evidence) | Dashboards and reports from your data | Worth a small trial |
| [DuckDB](https://github.com/duckdb/duckdb), [dlt](https://github.com/dlt-hub/dlt) | Fast local analysis, and loading data between systems | Worth a small trial |
| [Supabase](https://github.com/supabase/supabase), [Airbyte](https://github.com/airbytehq/airbyte), [pgvector](https://github.com/pgvector/pgvector) | App backends, data pipelines, and vector search | Needs an owner |

## Monitoring

| Project | What it's for | Fit |
|---|---|---|
| [Uptime Kuma](https://github.com/louislam/uptime-kuma) | Simple uptime checks and alerts | Worth a small trial. Don't host it on the server it watches |
| [Sentry](https://github.com/getsentry/sentry) | Error tracking for apps | Worth a small trial, often as the hosted service |
| [Grafana](https://github.com/grafana/grafana), [Prometheus](https://github.com/prometheus/prometheus), [OpenTelemetry Collector](https://github.com/open-telemetry/opentelemetry-collector) | Metrics, dashboards, and tracing | Needs an owner |

## Backup

| Project | What it's for | Fit |
|---|---|---|
| [restic](https://github.com/restic/restic), [Kopia](https://github.com/kopia/kopia) | Encrypted backups with versions | Worth a small trial, with a test restore |
| [rclone](https://github.com/rclone/rclone) | Copying files to and between cloud storage | Worth a small trial |

## Security checks

| Project | What it's for | Fit |
|---|---|---|
| [gitleaks](https://github.com/gitleaks/gitleaks) | Finding secrets committed to code | In use here |
| [Trivy](https://github.com/aquasecurity/trivy), [Grype](https://github.com/anchore/grype), [Syft](https://github.com/anchore/syft) | Finding known vulnerabilities, and listing software components | Worth a small trial |
| [Semgrep](https://github.com/semgrep/semgrep), [Checkov](https://github.com/bridgecrewio/checkov) | Code and infrastructure scanning | Worth a small trial |
| [ZAP](https://github.com/zaproxy/zaproxy), [Prowler](https://github.com/prowler-cloud/prowler) | Web app testing and cloud account review | Needs an owner, and agreed scope before any scan |

## Infrastructure and testing

| Project | What it's for | Fit |
|---|---|---|
| [Terraform](https://github.com/hashicorp/terraform) | Cloud infrastructure as code | In use here |
| [OpenTofu](https://github.com/opentofu/opentofu) | An open-source fork of Terraform | Worth a small trial |
| [Playwright](https://github.com/microsoft/playwright) | Browser testing, and printing these PDFs | In use here |
| [Lighthouse](https://github.com/GoogleChrome/lighthouse), [axe-core](https://github.com/dequelabs/axe-core) | Performance and accessibility checks | Worth a small trial |
| [Tailscale](https://github.com/tailscale/tailscale) | Private network access without opening ports | Worth a small trial, usually as the hosted service |

## AI

| Project | What it's for | Fit |
|---|---|---|
| [Ollama](https://github.com/ollama/ollama) | Running AI models on your own machine | Worth a small trial. Local doesn't automatically mean private |
| [Langflow](https://github.com/langflow-ai/langflow) | Building AI workflows visually | Worth a small trial |
| [promptfoo](https://github.com/promptfoo/promptfoo), [DeepEval](https://github.com/confident-ai/deepeval), [Ragas](https://github.com/vibrantlabsai/ragas), [Langfuse](https://github.com/langfuse/langfuse), [Phoenix](https://github.com/Arize-ai/phoenix) | Testing and monitoring AI systems | Worth a small trial, checked against a human-graded set |
| [Dify](https://github.com/langgenius/dify), [Open WebUI](https://github.com/open-webui/open-webui), [LlamaIndex](https://github.com/run-llama/llama_index), [Haystack](https://github.com/deepset-ai/haystack) | AI apps and document search | Needs an owner. Some carry branding or multi-tenant conditions in their licenses |

## Design and planning

| Project | What it's for | Fit |
|---|---|---|
| [Excalidraw](https://github.com/excalidraw/excalidraw), [Mermaid](https://github.com/mermaid-js/mermaid) | Sketches and diagrams | Worth a small trial |
| [Penpot](https://github.com/penpot/penpot) | Interface design | Worth a small trial |
| [Kanboard](https://github.com/kanboard/kanboard), [Vikunja](https://github.com/go-vikunja/vikunja) | Simple task boards | Worth a small trial |

## Before you rely on any of these

1. Read the license at the version you'd use, and check the terms of any hosted version separately.
2. Confirm it's maintained and how security problems are reported.
3. Try one real task with made-up data, then a failure, an export, and a restore.
4. Count the hours to run it, not only the price.
5. Write down who owns it and how you'd leave.

The [tool decision form](../forms/tool-decision.md) is the record I keep for each one.

## Sources

- Each project's GitHub repository, linked above, reviewed November 1, 2026
- neon1's own repositories for the tools marked in use: <https://github.com/neon1llc>
- Stars and activity were used only to find candidates, never as evidence of quality
