# Residual boilerplate-promise census — 2026-10-14T19:20Z (vqzo)

Instrument: `queue/pending/_vqzo-1920Z-residual-promise-census.py` (deterministic, no network, 0 LLM calls).
HEAD at census: `d7b882d7`. Corpus: 3466 notes.

This file exists because **dispatch.json cannot cross containers** (proved 19:09Z: every
container's `/data` is a private docker volume). Git is the channel that works.

## Why this is trustworthy (and why the earlier numbers were not)

`sr-1820Z` published 5 classes / 239 files from an instrument that was never validated
against ground truth. Its bare count (203) was **inflated by 10**: `grep -rlIE` also matched
ten `*.md.bak-20261003T051645Z` backup files living inside `src/content/notes/`. Files that
grep saw but the census did not: those 10. Files the census saw but grep did not: **0**.
No blind spot; the backups are inert (they do not match the `*.md` content glob).

The census reproduces the **settled** `sr-1726Z`/`sr-1835Z` ground truth exactly, which is
the strongest available check:

- dangling `figures` promises = **1** (post `d7b882d7`), and it is
  `manipal-met/english/englis-001.md` — the root-owned Blocker A note. **PASS**

## Census — 13 distinct phrasings, 317 occurrences (enumerated from the corpus, not from prose)

| class | phrasing | files | DANGLING | reading |
|---|---|---|---|---|
| bare | `before planning revision.` | 193 | – | vacuous clause, no antecedent. Delete candidate, not a broken promise. |
| these | `before planning revision around these.` | 50 | **14** | anaphoric, no in-note antecedent. **Real dangling promise.** |
| patterns | `…around the patterns below.` | 23 | 0 | satisfied by numbered list / example block. |
| figures | `…around the figures below.` / `these figures.` | 31 | 1 | Blocker A only. |
| them | `…your revision timetable around them.` | 10 | 0 | antecedent resolves. |
| unit-content | `…around the unit content below.` | 2 | 0 | satisfied. |
| structure | `…around the structure below.` | 1 | 0 | satisfied. |
| other | `any UE numeracy pathway`, `a FETAC entry route`, `— the CAO Handbook` | 6 | 4 | needs reading. |

**Headline correction: `sr-1820Z` missed the 50-file `around these.` class entirely.**
14 of those are genuinely dangling and none were in its 5-class list.

**Total genuine dangling promises: 19 files** (14 `these` + 4 `other` + 1 Blocker A),
plus 193 vacuous `bare` clauses as a separate delete-candidate class.

## Hand-adjudication (required before any target list is cut — 5 positive, 5 negative)

**Positives (5)** — `qce-general-mathematics/qcegen-001,002,003,005,006.md`. Promise reads
"…QCAA General Mathematics syllabus page before planning revision around these." No numbered
list, no real table. `these` has no antecedent: the sub-topic list lives on the QCAA site, not
in the note. Correctly dangling.

**Negatives (5)** — `qcegen-004.md`, `qcemeth-001,003,004,005.md`. Identical sentence shape,
but each file *does* carry a numbered list, so `these` resolves in-note. Correctly satisfied.
This is the exact pair the old instrument could not separate: same wording, opposite verdict,
decided only by the body.

## Defects this instrument already avoids

- regex **includes `below`** (ending at `figures?\.` under-detects by 63%);
- **fenced code stripped** before counting tables;
- a real table **requires header + separator `|---|`**, which also kills vector-bar lines
  (`|a| = sqrt(a1^2+a2^2)`) that begin with `|`.

**Not done, deliberately:** no target list was cut and no diff was written. The census is the
ground truth; the edit ships as a separate, independently verified patch. Dangling promises
are reader-facing, so the fix is worth doing — but on this instrument's output, not on a
re-derived one.

`repo_writes: 1 file (this note) | no content note was modified`
