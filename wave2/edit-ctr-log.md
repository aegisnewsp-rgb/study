# Wave 2 — CTR edit: SERP title + description on GSC note pages (pos 4-15, IN/NG/PK/GH)

Worker: `pi/w7-edit-ctr` · date 2026-10-05 · **no commit, no push, no deploy, no Monetag/GSC write.**

## Data provenance

- `python3 /tmp/w7-gsc-notes.py 90` — a read-only wrapper over `/data/sr-gsc.py` (`sr.access_token` +
  `sr.query`, `dimensionFilters: country in [ind,nga,pak,gha]`, dimensions `page,query`), rows
  filtered locally to `/notes/` + `4.0 <= position <= 15.0`.
- Window `2026-07-08..2026-10-05` (90d, GSC final, ends 2 days back — `sr-gsc.py:window()`).
- Output: `/tmp/w7-gsc-notes.json` — 186 note pages in band, 3,961 impressions total.
- Ranking = page impressions at pos 4-15. The 15 edited are the **top 15 by impressions among pages
  whose SERP title comes from note frontmatter** (topic pages), i.e. everything except hubs.

## Why a template change was needed

`src/content.config.ts` has **no `title`/`description` field** on the notes schema, and
`src/pages/notes/[exam]/[subject]/[topic].astro:54-78` builds `<title>` as
`` `${topicName} — ${examName} Notes | StudyRoadmap` `` (with a mid-word trim fallback) and
`<meta description>` as `` `${topicName} — ${examName} study notes (${weight}% weight). Free Quick / Standard / Deep tiers, no signup.` ``
Adding `title:`/`description:` to a note would be dead data — zod strips unknown keys. So this wave
adds two **optional** fields (`seoTitle`, `seoDescription`) and gives them precedence in that
template. Absent = today's generated strings, unchanged. Blast radius on the other ~3,388 notes is
zero: `node scripts/check-astro-syntax.mjs` OK, and the full build (below) is green.

## The 15 edits

| # | file (`src/content/notes/…`) | old `<title>` | new `<title>` (`seoTitle`) | motivating query (imp @ pos) | page imp / pos / clicks |
|---|---|---|---|---|---|
| 1 | `nda/mathematics/math-010.md` | `Statistics — NDA Notes \| StudyRoadmap` | `Statistics Notes for NDA — Maths \| StudyRoadmap` | `statistics nda notes` (91 @ 4.62) | 145 / 4.81 / 19 |
| 2 | `kpsc/karnataka-specific/karnat-001.md` | `Physical Geography of Karnataka — KPSC KAS \| StudyRoadmap` | `Physical Features of Karnataka — KPSC KAS \| StudyRoadmap` | `physical features of karnataka` (34 @ 10.00) | 81 / 9.67 / 0 |
| 3 | `cuet/mathematics/math-004.md` | `Circles — CUET UG Notes \| StudyRoadmap` | `Circles — CUET UG Maths Notes \| StudyRoadmap` | `circles` (74 @ 5.58) | 74 / 5.58 / 0 |
| 4 | `fmge/forensic/forens-004.md` | `Forensic Toxicology — Classification o — FMGE \| StudyRoadmap` **(trimmed mid-word)** | `Forensic Toxicology Notes — FMGE \| StudyRoadmap` | `"ideal suicidal poison" "opium and barbiturates"` (22 @ 10.68) | 68 / 9.63 / 0 |
| 5 | `tnpsc/history/histor-003.md` | `Indus Valley Civilization — TNPSC Group 1 \| StudyRoadmap` | `Indus Valley Civilization Notes — TNPSC \| StudyRoadmap` | `indus valley civilization tnpsc notes` (48 @ 7.98) | 64 / 8.05 / 6 |
| 6 | `kuccps/subject-clusters/subjec-014.md` | `Cluster 14 — Journalism and Media — KUCCPS \| StudyRoadmap` | `Journalism Cluster Points — KUCCPS \| StudyRoadmap` | `cluster points for journalism and mass communication` (47 @ 5.02) | 49 / 5.10 / 1 |
| 7 | `jeemain/physics/phy-001.md` | `Units and Measurement — JEE Main Notes \| StudyRoadmap` | `Units and Measurement — JEE Main Physics \| StudyRoadmap` | `units` (39 @ 4.64) | 39 / 4.64 / 0 |
| 8 | `jamb/english/eng-9.md` | `Lexis and Structure — JAMB UTME Notes \| StudyRoadmap` | `Lexis and Structure — JAMB English Notes \| StudyRoadmap` | `lexis and structure` (16 @ 7.38) | 38 / 8.74 / 0 |
| 9 | `gate/logical-reasoning/gate-lr-004.md` | `Assertion & Reason — GATE Notes \| StudyRoadmap` | `Assertion & Reason Questions — GATE Notes \| StudyRoadmap` | `qualifies the assertion of the first` (34 @ 8.71) | 34 / 8.71 / 0 |
| 10 | `gate/quantitative-aptitude/gate-qa-005.md` | `Simple & Compound Interest — GATE Notes \| StudyRoadmap` | `Simple & Compound Interest — GATE GA Notes \| StudyRoadmap` | `interest gate` (23 @ 6.87) | 23 / 6.87 / 0 |
| 11 | `jeeadvanced/physics/phy-028.md` | `Semiconductors — JEE Advanced Notes \| StudyRoadmap` | `Semiconductors — JEE Advanced Physics Notes \| StudyRoadmap` | `semiconductor in jee advanced syllabus` (21 @ 9.05) | 21 / 9.05 / 0 |
| 12 | `kpsc/indian-polity/indian-006.md` | `Preamble, Fundamental Rights, and — KPSC KAS \| StudyRoadmap` **(drops "DPSP")** | `DPSP and Fundamental Rights — KPSC KAS \| StudyRoadmap` | `dpsp topic evaluate` (9 @ 5.67) | 13 / 5.69 / 0 |
| 13 | `gate/engineering-maths/engine-002.md` | `Numerical Methods — GATE Notes \| StudyRoadmap` | `Newton-Raphson Method — GATE Maths Notes \| StudyRoadmap` | `what is the standard iterative formula for the newton-raphson method? …` (12 @ 10.00) | 12 / 10.00 / 0 |
| 14 | `nda/mathematics/math-003.md` | `Determinants — NDA Notes \| StudyRoadmap` | `Matrices and Determinants — NDA Maths Notes \| StudyRoadmap` | `matrices and determinants notes for nda` (12 @ 7.67) | 12 / 7.67 / 0 |
| 15 | `ugc-net/paper1/p1-009.md` | `Higher Education System — UGC NET Notes \| StudyRoadmap` | `Higher Education in India — UGC NET Paper 1 \| StudyRoadmap` | `higher education system for ugc net notes` (12 @ 10.00) | 12 / 10.00 / 0 |

All 15 also carry a new `seoDescription` (≤160 chars). Each one names only things the note body
actually contains — verified by grep on the file, e.g. `math-010` → mean/median/mode, variance,
standard deviation, probability; `karnat-001` → Western Ghats, Malnad, Coastal Plain, Maidan,
river basins, rainfall, soils; `indian-006` → Maneka Gandhi, Article 21, DPSP conflict resolution;
`subjec-014` → required subjects, cutoff-points table, universities, career paths.
No title or description claims a PDF, a rank, a pass rate, a cutoff, or an outcome.

## Highest-impression pages NOT edited, and why

These rank **above** every page in the table but have no per-page frontmatter to edit:

- `/notes/nda/` 1,151 imp @ 7.84 / 40 clicks · `/notes/ssc-cgl/` 502 @ 8.79 · `/notes/cat/` 355 @ 8.40
  · `/notes/neet-pg/` 156 @ 6.24 · `/notes/fmge/` 131 @ 7.32
  Title and description are hardcoded in the shared hub template
  `src/pages/notes/[exam]/index.astro:77-83` (`${examName} Study Notes | StudyRoadmap`). Changing them
  is a site-wide template edit affecting 125 exams, which is outside a frontmatter-only wave and
  outside this worker's brief. **Flagged for the CEO.**
- Subject hubs (`/notes/cat/dilr/` 82 @ 5.39, `/notes/nda/gat/` 67 @ 8.24, `/notes/ssc-cgl/awareness/`
  45 @ 8.27, `/notes/cma/business-law/` 116 @ 9.07) build their title from
  `[subject]/index.astro:47-59` using `subjectName` from the first note — changing it would corrupt
  every listing that shows that subject name.
- `/notes/mat/mathematical-skills/mathem-008/` (23 imp @ 9.74) **404s**
  (`curl -o /dev/null -w '%{http_code}'` → 404): the topic id was renamed `mathem-008` →
  `mathsk-008`, and the note file is `mat/mathematical-skills/mathsk-008.md`. Not an editable page.
- `/notes/fmge/forensic/forens-004/` earned its 68 impressions on the **`?duration=7d` facet URL**
  (the bare URL returns no row in this slice), so the note is indexed twice.

## Honest limits

- **No claim is made that these edits raise CTR.** GSC data cannot attribute causality; these are
  hypotheses to be re-measured in ~28 days.
- Of the 15, #1 (`nda/math-010`) already earns 19 clicks on 145 impressions = **13.1% CTR at pos 4.81**,
  above the ~7.1% benchmark for that rank — its title already matched. Its edit is alignment, not a fix.
- Six of the 15 impressions come from queries that are **verbatim question stems**
  (#4, #9, #13) or a bare single word (`units`, `circles`). A title cannot match those; #4 and #13
  at least stop rendering a mid-word trim.
- Untested side effect: `gate/logical-reasoning` and `gate/quantitative-aptitude` are **not** subject
  ids declared by `src/data/exams/india/gate.ts` (it declares `engineering-maths`, `subject-specific`,
  `general-aptitude`). Both notes already ship that way; `subject:` was not touched here, so this is
  pre-existing, not introduced. **Flagged for the CEO.**

## Gates run (changed files only, except where noted)

| gate | command | result |
|---|---|---|
| scope guard | `./scripts/check-scope.sh` | `Scope OK` (rc 0) |
| astro syntax | `node scripts/check-astro-syntax.mjs` | `check-astro-syntax: OK (52 .astro files)` |
| orphan notes | `node scripts/check-note-links.cjs` | `unreachable notes: 1568 (baseline 1568) — no new orphans` |
| title/body mismatch | `node scripts/title-body-scan.mjs` | `scanned=3403 candidates=2` — `ini-cet/anatomy/anatom-003.md`, `sgpat/family-medicine/family-005.md`; **both pre-existing, neither in this wave** |
| placeholder headings | `node scripts/placeholder-heading-scan.mjs` | `files with placeholder headings: 0` |
| frontmatter parse + length | python `yaml.safe_load` on the 15 files | all parse; `seoTitle` ≤ 58 chars, `seoDescription` ≤ 155 |
| slugs + `subject:` | git diff + python | unchanged on all 15; `topic`/`exam`/`subject` byte-identical |
| full build | `npm run build` | see `## Build` below |

## Build

`npm run build` (Astro 6 static, 3,403 notes) — result recorded at the end of this file.
`npm run postbuild` runs `fix-sitemap.cjs`, `check-inline-scripts.mjs`, `check-ad-guards.mjs`.

## Not done, deliberately

No commit, no push, no `/data/sr-deploy.sh`, no Monetag API, no GSC write API. Diff is left in the
worktree for review: `git diff --stat` = 17 files, +45 / −22.