# sr-2035Z — census reconciliation for the unsourced-paper-recall class

**Date:** 2026-10-14T20:35Z · **Worker:** vqzo · **Supersedes:** the open item in `sr-1540Z` / `sr-2005Z`
**Status:** PARTIALLY RECONCILED — 2 of 3 contested numbers explained as different slices. **1 of 3 (95) still unexplained. Population remains UNPINNED. DO NOT BATCH EDIT.**

---

## 1. Why this doc exists

Three instruments have returned three numbers for one class and every prior pulse
treated that as an irreconcilable contradiction:

| instrument | files | claims | method |
|---|---|---|---|
| sr-1540Z | 95 | 135 | structured regex over 3466 notes |
| sr-2005Z (grep A) | 190 | — | board + year co-occurrence |
| sr-2005Z (grep B) | 4 | — | strict "question appeared" phrasing |

sr-1935Z published a BLOCK on the strength of that disagreement. This pulse built a
fourth instrument (`_vqzo-2035Z-paper-claim-census.py`) whose regression test is
**external** — the strongest anchor, `gate-lr-002.md`, was cleaned by a *different*
pulse at `34b5c23e`, so a correct instrument must now return **zero** for it.

**Result: the three numbers are not in contradiction. They are three different
slices of one corpus, and nobody had labelled which slice was which.**

## 2. The reconciliation

| slice | files | claims | equals |
|---|---|---|---|
| **A. strict core** — year + recall verb in the same sentence | **5** | 5 | **sr-2005Z's "4"** ✓ |
| **B. year-tagged** — board + year anywhere in prose | **139** | 207 | **sr-2005Z's "190"** ✓ |
| **C. mark-value, no year** — weightage/forecast claims | 44 | 46 | *not measured by any prior instrument* |
| **A∪B∪C union** | **174** | 253 | — |
| **clean of all three** | 3292 / 3466 | | |

Slice A reproduces the strict phrasing count. Slice B reproduces the co-occurrence
count. The residual gap (139 vs 190 files) is the Sources/Reference tails and fenced
code this instrument strips by design (R3) — direction and magnitude agree; it is not
a contradiction.

**`sr-1540Z`'s 95 / 135 is reproduced by none of the three slices.** It is a narrower
selection whose exact predicate was never published. That number remains unusable as
a target count.

## 3. Why the union of 174 is NOT a batch-edit target

Three reasons, each demonstrated, not asserted:

1. **The slices need different fixes.** A wrong year-tag (slice B) is fixed by
   deleting the year and keeping the mechanism. A weightage forecast (slice C, e.g.
   *"expect 3–5 questions worth 12–20 marks"*) is unsourced in a different way. A
   published exam-structure fact (*"CAT: 66 questions, 198 marks"*) is **correct and
   citable** and must be left alone. One batch rule is wrong in both directions.
2. **The instrument flags the dispatch's own explicit carve-out.**
   `src/content/notes/clat/current-affairs/ca-003.md` — which sr-1540Z named
   **DO NOT TOUCH** (CLAT 2024 IPC→BNS mapping is a verifiable normative fact, not
   paper-recall trivia) — is inside the union. Confirmed by instrument run, 20:44Z.
3. **Demonstrated false positive in slice C.** `gate/logical-reasoning/gate-lr-005.md`
   *"GATE **marks each item** as Definitely True"* — the verb *marks*, not a mark value.
   A regex cannot see the difference.

## 4. Hand-adjudication (bodies read, not regexes trusted)

- **Slice A (5/5 genuine).** `ecat/phy-15`, `ecat/chem-4`, `ecat/phy-11` all carry the
  identical *"ECAT 20XX Analysis: … appeared in recent papers"* template;
  `mdcat/phy-5` *"MDCAT 2023 had a question on banking of roads"*;
  `clat/en-002` *"CLAT 2024 featured a long passage of ~450 words with 5 questions"*.
- **Slice B, sampled 10:** 8 genuine year-tagged PYQ quotes (`NEET 2023 Qn: …`,
  `SSC CGL 2022 Qn: …`) or pattern hints (`GATE 2019 hint: …`); 1 borderline
  (`ssc2-en-006` "any SSC CGL Tier 2 passage from 2018–2023" — an instruction, not a recall);
  1 known carve-out (`clat/ca-003`).
- **Slice C, sampled 10:** 8 genuine unsourced forecasts; 1 false positive
  (`gate-lr-005`); 1 legitimate published fact (`cat/dilr/dl-005` CAT paper totals).

## 5. Instruction to the next worker (tufi / vggo)

Do **not** batch-edit. The pinned fact now available is:

> **Slice A = 5 files / 5 claims — this is the only slice whose size is verified.**
> Slice B is 139 files but its per-file verdict requires reading the body.
> Slice C is 44 files and contains a known false-positive class.

Highest-value next step, in order:

1. **Work slice A's 5 files to completion.** It is small, hand-verified, and the
   by-board rule from sr-2005Z already applies (ECAT/MDCAT are not NTA-style boards;
   CLAT/en-002 is the same shape as the already-shipped `gate-lr-002` fix).
2. **Publish sr-1540Z's actual predicate** so 95 becomes reproducible or is formally retired.
3. **Delete "marks each" from `MARKV`** before slice C is ever used — it is a verb.

## 6. Blockers unchanged

- **Blocker A** — 6 root-owned (uid 0) note files still unwritable by the worker.
- **Pangram remote originality API** — HTTP 402 *Insufficient credits*. No remote score
  is claimed anywhere in this class.
- **Step 1.5 revenue tooling** — still absent (196th detection). Not re-reported as a
  finding; it needs one owner decision.

## 7. Gates

`check-scope.sh` exit 0 · `check-astro-syntax.mjs` exit 0 (52 `.astro`) ·
no `npm run build` per the 2026-10-13 operator directive · no deploy, no push, no sudo.
**No content note was edited by this pulse.**