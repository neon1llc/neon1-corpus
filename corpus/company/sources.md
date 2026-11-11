---
id: company-sources
title: Where I learn from
summary: "The standards bodies, government guides, and practitioners whose published work shapes how neon1 works, grouped by topic, with what each one is for."
type: page
status: adopted
updated: 2026-11-11
created: 2026-11-11
edition: "1.1"
consumers: [knowledge, ai]
pdf: true
audience: "Anyone who wants to go past neon1's documents to where the practice comes from"
origin: "The Sources sections of every neon1-corpus document, gathered and checked"
related: [standards-writing, standards-documentation, standards-operating-principles]
---

# Where I learn from

neon1's methods build on the published work of standards bodies, government agencies, and practitioners who wrote down what they learned so others could use it. This page lists the ones I rely on most, so you can go straight to the source and read further. Each document in this Knowledge Center also names the sources it uses, where it uses them.

Almost all of these are free to read. Where I use only part of one, or do something differently, the document that cites it says so.

## Writing and documentation

How documents are worded, organized, and kept true.

- **[Federal plain language guidelines](https://www.plainlanguage.gov/guidelines/)**, Plain Language Action and Information Network. Writing for the reader: audience first, plain words, short sections.
- **[Writing for GOV.UK](https://www.gov.uk/guidance/content-design/writing-for-gov-uk)**, UK Government Digital Service. Front-loading the important words, and writing the way people search.
- **[How users read on the web](https://www.nngroup.com/articles/how-users-read-on-the-web/)**, Nielsen Norman Group. The research on scanning that shapes headings, lists, and first lines.
- **[Google developer documentation style guide](https://developers.google.com/style)**, Google. Conventions for procedures, lists, tables, and code in technical writing.
- **[The Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html)**, University of Chicago Press. Mechanics, including the serial comma.
- **[Diátaxis](https://diataxis.fr/)**, Daniele Procida. Four kinds of documentation, each with its own job.
- **[Write the Docs guide](https://www.writethedocs.org/guide/)**, the Write the Docs community. Keeping documentation next to what it describes, and changing both together.

## Security and privacy

What a sensible baseline looks like for a household, a small office, and a software team.

- **[NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)**, US National Institute of Standards and Technology. A shared outline of what security covers: govern, identify, protect, detect, respond, and recover.
- **[Small business cybersecurity](https://www.nist.gov/itl/smallbusinesscyber)**, NIST. Plain guides sized for a small organization.
- **[Small business guide](https://www.ncsc.gov.uk/collection/small-business-guide)**, UK National Cyber Security Centre. Five practical areas, from backups to phishing, in a few pages.
- **[CIS Controls](https://www.cisecurity.org/controls)**, Center for Internet Security. A prioritized list of safeguards, with a first group sized for small teams.
- **[Digital identity guidelines, SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html)**, NIST. Current guidance on passwords, multi-factor sign-in, and recovery.
- **[Passkeys](https://fidoalliance.org/passkeys/)**, FIDO Alliance. How sign-in without passwords works, and why it resists phishing.
- **[Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)** and the **[cheat sheet series](https://cheatsheetseries.owasp.org/)**, OWASP. What to check in a web application, and how to fix common problems.
- **[Threat modeling](https://owasp.org/www-community/Threat_Modeling)**, OWASP, and the **[Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org/)**. Asking what could go wrong before building.
- **[NIST Privacy Framework](https://www.nist.gov/privacy-framework)**, NIST. Thinking about personal data as a risk to people, not only to the business.
- **[Business associates](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html)**, US Department of Health and Human Services. When a vendor working with health information needs an agreement.

## Reliability and recovery

Keeping things running, and getting them back when they stop.

- **[Site Reliability Engineering](https://sre.google/sre-book/table-of-contents/)** and **[The Site Reliability Workbook](https://sre.google/workbook/table-of-contents/)**, Google. Service levels, error budgets, incident response, and blameless reviews.
- **[Reliability pillar](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html)** of the **[AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)**, Amazon Web Services. Designing cloud systems to recover from failure.
- **[Contingency planning guide, SP 800-34](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final)**, NIST. Recovery objectives and plans that get tested.
- **[Ransomware guide](https://www.cisa.gov/stopransomware/ransomware-guide)**, US Cybersecurity and Infrastructure Security Agency. Offline backups and what to do first when files are encrypted.
- **[Incident management handbook](https://www.atlassian.com/incident-management/handbook)**, Atlassian. A clear, practical incident process for small teams.

## Building and shipping software

How code is written, checked, released, and kept.

- **[The Twelve-Factor App](https://12factor.net/)**, Adam Wiggins and contributors at Heroku. Settings outside code, and builds that can be repeated.
- **[Secure Software Development Framework, SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final)**, NIST. Security practices across the whole development cycle.
- **[Code review guidelines](https://google.github.io/eng-practices/review/)**, Google. What a reviewer looks for, and how to keep reviews quick and kind.
- **[The practical test pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)**, Ham Vocke on Martin Fowler's site. Many small fast tests, fewer slow ones.
- **[DORA research](https://dora.dev/)**, DevOps Research and Assessment. Four measures of how well a team delivers software.
- **[Semantic Versioning](https://semver.org/)**, **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)**, and **[Keep a Changelog](https://keepachangelog.com/en/1.1.0/)**. Version numbers, commit messages, and changelogs that mean something.
- **[Pro Git](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)**, Scott Chacon and Ben Straub. Git itself, explained.
- **[Documenting architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)**, Michael Nygard. A one-page record of why a big choice was made.

## AI

Using language models where they help, and testing them like anything else.

- **[AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)** and its **[generative AI profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)**, NIST. Mapping, measuring, and managing the risks of an AI system.
- **[Top 10 for LLM applications](https://genai.owasp.org/llm-top-10/)**, OWASP. The common ways an AI feature gets misused, starting with prompt injection.

## Design and accessibility

Interfaces and documents that work for everyone, on any device.

- **[Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)** and the **[introduction to accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)**, W3C Web Accessibility Initiative. The accessibility standard, and a plain start on why it matters.
- **[Ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)** and **[usability testing 101](https://www.nngroup.com/articles/usability-testing-101/)**, Nielsen Norman Group. Judging an interface, and testing it with real people.
- **[GOV.UK Service Manual](https://www.gov.uk/service-manual)** and **[Design System](https://design-system.service.gov.uk/)**, UK Government Digital Service. Services designed around what people need to get done.
- **[Web Vitals](https://web.dev/articles/vitals)**, Google. Measures of how fast and stable a page feels.

## Improving how work gets done

Methods for finding what slows a task down and changing one thing at a time.

- **[Lean lexicon](https://www.lean.org/lexicon-terms/muda-mura-muri/)**, Lean Enterprise Institute. Waste, flow, and asking [why five times](https://www.lean.org/lexicon-terms/5-whys/).
- **[The Kanban guide](https://kanban.university/kanban-guide/)**, Kanban University. Making work visible and limiting what's in progress.
- **[e-Handbook of Statistical Methods](https://www.itl.nist.gov/div898/handbook/)**, NIST and SEMATECH. Honest measurement, including what small samples can and can't show.
- **[FinOps Framework](https://www.finops.org/framework/)**, FinOps Foundation. Understanding and managing what the cloud costs.

## Licenses and reuse

- **[Choose a License](https://choosealicense.com/)**, GitHub, and the **[SPDX license list](https://spdx.org/licenses/)**, Linux Foundation. Reading and comparing software licenses.
- **[CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/)**, Creative Commons. The license on neon1's documents: share word for word, with credit.

## When a link breaks

These pages move now and then. If one here doesn't open, tell me at [hello@neon1.tech](mailto:hello@neon1.tech) and I'll find where it went.
