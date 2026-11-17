# Deployment timing baseline

### Deployment time, measured November 17, 2026

These samples come from successful GitHub Actions runs on November 16 and 17. They measure the pipeline, including checks and the dev rebuild where present. They are observations, not a deployment promise. A rerun of only failed jobs and a scheduled check that finds no change are excluded from full-release estimates.

| Component | Production path | Dev path | What takes the time |
|---|---|---|---|
| Website | 3 minutes 31 seconds to 4 minutes 16 seconds in three full push runs | 46 to 77 seconds in three standalone runs | Parallel browser checks, PDF printing, then upload and release-store switching. Dev builds HTML with quick checks and reuses production PDFs |
| 1NEON | 19 minutes 46 seconds to 20 minutes 12 seconds in three runs | 54 to 73 seconds in three runs | Guided browser walkthroughs take about 17 minutes 53 seconds. The production release job itself takes 46 to 64 seconds after the gates |
| Public Neo | 74 to 100 seconds in three runs | No separate runtime: dev routes to production Neo | Package and Terraform checks, plan/apply, then live identity verification |
| Corpus | 14 to 29 seconds to publish bundles in three runs | A branch can be selected by the site's dev build | Markdown lint/export is fast. Publishing the website is a separate downstream build; Neo refresh opens a reviewed PR |
| Infrastructure | 1 minute 53 seconds to 1 minute 57 seconds in three runs | Dev stack changes are applied separately | Validation and scans, then parallel stack plans/applies. These samples do not measure a new distribution rollout or a dev-stack apply |

A corpus release requests a site build. If that request does not start a build, the site's scheduled check runs every 15 minutes, subject to runner delays. Neo's refresh is weekly or manual and opens a pull request. A corpus release alone does not immediately update Neo. Dev uses production Neo, so testing that endpoint consumes the production service's limits.

For combined work, order by dependency. Publish the corpus before building consumers that need it. Apply required infrastructure before applications that rely on it. Independent site, portal, and Neo pipelines can run together: total elapsed time is the longest dependency path, not the sum of all jobs. Their deployment is not atomic.

| Combination | Planning estimate from these samples | Limit |
|---|---|---|
| Site and portal on dev | About one to two minutes if started together | Both must finish and be checked; branch push alone is not evidence |
| Corpus then site production | About four to five minutes after an immediate dispatch | Add scheduler/queue delay if the dispatch is absent |
| Site, portal, and Neo production | About 20 to 21 minutes if independent and started together | Portal walkthroughs dominate; dependencies can require serial steps |
| Corpus and infrastructure, then all consumers | About 22 to 24 minutes if the prerequisite runs resemble these samples | An estimate, not a measured coordinated release; cloud propagation and review wait are unbounded here |

Production attempts the site and portal dev rebuild alongside the production release, after their gates. A dev merge or build failure can leave it behind even when production succeeds. Completion requires checking both environments and their selected commits.

Record the workflow URL, commit, corpus/release pins, start and completion times, outcome, and any retry in each future release receipt. Keep this central table as a dated baseline and replace it only with comparable measurements.

Sources: website runs [first push](https://github.com/neon1llc/neon1-site/actions/runs/44011505764), [second push](https://github.com/neon1llc/neon1-site/actions/runs/43976446346), and [third push](https://github.com/neon1llc/neon1-site/actions/runs/43873000191); [portal](https://github.com/neon1llc/neon1-1NEON/actions/runs/44040427165), [Neo](https://github.com/neon1llc/neon1-chat/actions/runs/44005410637), [corpus](https://github.com/neon1llc/neon1-corpus/actions/runs/44005092641), and [infrastructure](https://github.com/neon1llc/neon1-aws-infrastructure/actions/runs/44004793701). The corresponding workflows define the dependencies.

## Measurement

The full site push samples measure first job start through final non-skipped job completion. Other samples measure workflow start through final job completion. Parallel job durations are not summed. The repeated site run ending in a 27-second retry and the nine-second scheduled no-change run are excluded. Queue delays, review waits, and regional CDN propagation are not measured. Combined durations are estimates from dependencies, not measured coordinated releases.
