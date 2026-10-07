# Wave 2 — new note pages (worker w8)

Branch `pi/w8-new-pages` (isolated worktree). No commit, no push, no deploy, no Monetag/GSC write calls.

## How the gaps were chosen

Impression data from `python3 /data/sr-gsc.py` (90-day window `2026-07-08..2026-10-05`, read-only).
A gap = a GSC query with impressions whose ranking page is an exam/spoke page, **not** a
`/notes/...` page, in a monetisable geo (IN / NG / PK / GH).

| command | what it gave |
| --- | --- |
| `python3 /data/sr-gsc.py queries 90 3` | top queries by impressions |
| `python3 /data/sr-gsc.py qpage 90 200` | query × page, sorted by wasted impressions |
| `python3 /data/sr-gsc.py cpage 90 500` | country × page — used to confirm the geo is IN/NG/PK/GH |
| `python3 /data/sr-gsc.py countries 90` | geo split: ind 106,052 imp / pak 39,358 / nga 12,307 / gha 4,623 |
| `node scripts/ghost-topic-scan.cjs` | confirmed the declared-topic-vs-existing-note hole |

Note coverage was counted against the exam **data file's** `examId`, not the filename
(this matters — see the correction below).

## Gaps found

| # | Gap | Geo | Evidence | Existing notes | Action |
| --- | --- | --- | --- | --- | --- |
| 1 | `spsc` — the `english` subject is declared but has **no note pages at all** | PK | `cpage`: `pak 19,653 imp / 27 clicks (0.14%) / pos 7.1` on `/exams/sppsc/`; queries `spsc` 18,631 imp pos 7.0, `spsc syllabus 2026` 149, `spsc exam` 43, `spsc exam 2026` 19 | `gk` 10/10 topics, `sindh-studies` 8/8 topics — **complete**. `english` 0/10 topics = 10 ghost topics | note written |
| 2 | `kpkpse` — `english` declared (Précis & Composition 100 + English Essay 100 compulsory) with **no notes** | PK | `cpage`: `pak 417 imp / 4 clicks / pos 8.6` on `/exams/kpkpse/`; queries `pms kpk` 148 imp pos 8.0, `pms kpk 2026` 14, `kp pms syllabus 2026` 15, `kpkpms` 48 | `gk` 10, `islamic-studies` 8, `pakistan-affairs` 8 — **`english` 0/10 topics** | note written |
| 3 | `sbi-clerk` — `quant` has **no notes** | IN | `opportunity`: `/exams/sbi-clerk/` 8,360 imp, 19 clicks (0.23%), pos 9.6, 131.5 recoverable clicks, IN (I); queries `sbi clerk exam pattern 2026` 673 imp pos 8.8, `sbi clerk pattern` 244 | 8 notes, **all `general-awareness`**. `quant` 0, `english` 0, `reasoning` 0 | note written |
| 4 | `sbi-clerk` — `reasoning` has **no notes**, and mains paper is "Reasoning Ability & **Computer Aptitude**" (50 Q / 60 marks / 45 min) | IN | same page + the official advertisement's paper table | as above, `reasoning` 0/10 topics | note written |
| 5 | `nce-cours` — `english` + `mathematics` declared, **no notes** (only `education` has 10) | NG | `cpage`: `nga 342 imp / 0 clicks (0.00%) / pos 7.9` on `/exams/nce-cours/`; `nga 118 imp / 0 clicks / pos 10.3` on `/exams/nce-cours/eligibility/` | `education` 10 only | **gap logged, note NOT written — see blocker** |

**Not monetisable, deliberately excluded:** `gaokao` (CN, 2,409 imp), `al-exam` (LK, 884 imp),
`acsee` (UK, 257 imp), `ncee` (NP exam, 609 imp but Nepal).

### Correction made mid-task (worth reading)

My first pass counted `find src/content/notes/spsc` and got **0 notes**, and drafted two notes
against a "SPSC has zero notes" premise. That was wrong: the exam `examId` is **`sppsc`**, the
filename is `sppsc.ts`, and `src/content/notes/sppsc/` already held **18 notes**. Both drafts were
deleted. The real, smaller gap is the one in row 1 above — the `english` subject only. Reported
rather than quietly fixed.

## Notes written

| file | query it targets | official sources |
| --- | --- | --- |
| `src/content/notes/sppsc/english/englis-003.md` | `spsc` / `spsc syllabus 2026` (18,631 + 149 imp) | https://spsc.gos.pk/ · https://spsc.gos.pk/about_the_commission.php · https://spsc.gos.pk/Syllabus.php · https://spsc.gos.pk/objectives.php |
| `src/content/notes/kpkpse/english/englis-008.md` | `pms kpk` / `kp pms syllabus 2026` (148 + 15 imp) | https://www.kppsc.gov.pk/public/assets/syllabus/PMS_Syllabus_2025.pdf (official PMS Syllabus 2025, pp. 1–3) · https://www.kppsc.gov.pk/ · https://www.kppsc.gov.pk/syllabus |
| `src/content/notes/sbi-clerk/quant/quant-009.md` | `sbi clerk exam pattern 2026` (673 imp) | https://sbi.bank.in/documents/77530/52947104/JA+2025+-Detailed+Advt.pdf (SBI Junior Associate detailed advertisement, Phase-I/II tables, negative marking, probation, pay scale) |
| `src/content/notes/sbi-clerk/reasoning/reason-005.md` | `sbi clerk exam pattern 2026` (same page, second test) | same official SBI advertisement (Reasoning Ability & Computer Aptitude 50 Q / 60 marks / 45 min) |

Every factual claim in all four notes is traceable to one of those documents. Where the source
does **not** state something, the note says so explicitly instead of guessing — e.g. both SBI notes
state that the advertisement fixes the *paper* but publishes no topic-wise syllabus, and the SPSC
note states that the English component is post-specific and lives in the dated syllabus PDF.

## Blockers (gaps left open, with the reason)

1. **`nce-cours` (NG, gap 5).** `nce.edu.ng` does not resolve from this host (`getent hosts` returns
   nothing; `curl` → `000`). There is no single national authority site for the NCE course — NUC,
   JAMB and TRCN sites do not publish the English course content. Per the brief (omit rather than
   guess) no note was written. Next step: pull the course outline from a specific Federal College of
   Education's own site and cite that college.
2. **`wassce` (GH).** Confirmed real gap: `/exams/wassce/` `gha 158 imp / 2 clicks / pos 9.0`,
   query `how many subjects are written` 43 imp pos 7.2. `wassce.ts` declares `mathematics`,
   `english`, `economics`, `accounting`; notes exist **only** for `economics` (10) and `accounting`
   (10) — `mathematics` and `english` are 0/10 each. **Not written:** `waec.org.gh` fails DNS
   resolution from this host (`getent hosts waec.org.gh` → nothing, curl → `000`); `nacca.gov.gh`
   and `waecghana.com` also failed. Unblock by fetching WAEC content from a network where it
   resolves, or by citing a Ghanaian university's official admissions page as a secondary official
   source.
3. **`nabteb` (NG).** `/exams/nabteb/` `nga 238 imp / 0 clicks / pos 8.4`, query `nabteb syllabus`
   26 imp pos 11.0. Covered (74 notes across 5 subjects), so not a content gap — it is a title/SERP
   gap on the existing notes, not a new-page gap.

## Gates run on the new files

| gate | result |
| --- | --- |
| `node scripts/subject-name-scan.cjs` | 0 placeholders, 0 noteMissing, 0 topicNamePlaceholder |
| `node scripts/title-body-scan.mjs` | 2 candidates, **both pre-existing** (`ini-cet/anatomy/anatom-003.md`, `sgpat/family-medicine/family-005.md`); none of the new files |
| `node scripts/placeholder-heading-scan.mjs` | 0 files with placeholder headings |
| `node scripts/ghost-topic-scan.cjs` | ghost counts **fell**: sppsc 13→12, kpkpse 14→13, sbi-clerk 39→37 (all 4 new notes register as non-ghost) |
| `node scripts/check-note-links.cjs` | `unreachable notes: 1568 (baseline 1568)` — "OK — no new orphaned notes" |
| `./scripts/check-scope.sh` | **Scope OK**, 4 files listed |
| frontmatter ↔ `src/content.config.ts` schema + exam-data cross-check (ad-hoc python) | 4/4 OK — `subject` equals a subject id the exam's data file declares, `topic` exists in that subject, `topicName` and `weight` match the declared topic exactly |

`astro sync` / `astro build` could not be run to validate the zod content schema: `node_modules` is
not installed in this worktree. The ad-hoc validator above checks the same fields (all 9 required
frontmatter keys present and correctly typed).