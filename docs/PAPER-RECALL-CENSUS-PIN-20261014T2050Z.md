# Paper-Recall Census — the "95" is pinned

**Date:** 2026-10-14T20:50Z · **Author:** vqzo cron `sr-orchestrate` pulse · **Dispatch:** sr-2035Z (score 1550)
**Supersedes the open item in:** sr-2035Z, sr-1540Z, sr-2005Z
**Model:** MiniMax-M3.1-flash-preview · **M3 text calls this pulse:** 0 · **Network calls:** 0

---

## Headline

The unexplained `95` was not lost and was not a contradiction. It was a real
measurement of a real — and narrower than believed — predicate, and the corpus
moved by exactly one file in the five hours since it was taken. The predicate
has now been recovered verbatim and the arithmetic closes **to the unit**.

| | files | claims |
|---|---|---|
| sr-1540Z published, 2026-10-14T15:51Z | 95 | 135 |
| sr-1540Z predicate, replayed on HEAD `b3c5f225` | **94** | **130** |
| difference | **1** | **5** |

Every unit of the difference is accounted for by one named commit.

---

## 1. The predicate was never published. It was not lost.

sr-2035Z concluded that sr-1540Z's "exact predicate was never published" and
therefore that 95 was unusable. The first clause was true; the inference was
wrong. `/tmp/vqzo-1540Z-scan.py` (mtime `2026-10-14T15:51Z`) survived. It
contains the metric verbatim:

```python
year_re = re.compile(
    r'(?:GATE|NEET|JEE|UPSC|SSC|CAT|CLAT|NDA|CUET|WAEC|NECO|PSSC|NMT|JAMB|ECAT|MDCAT)'
    r'\s*(?:20\d\d)', re.I)
...
if year_re.search(txt):      # WHOLE-FILE text, no stripping of any kind
    year_files.add(p)
    year_hits += len(year_re.findall(txt))
```

So sr-1540Z counted **files containing a narrow board token immediately
followed by a 20xx year, anywhere in the file body** — no word boundaries, no
recall-verb test, no fence or Sources-tail stripping, 19xx years excluded,
16 board tokens.

## 2. The 95 → 94 / 135 → 130 delta is one file, one commit

`git diff a729b3f3 HEAD -- src/content/notes` is exactly **one file**:

```
src/content/notes/gate/logical-reasoning/gate-lr-002.md
```

`34b5c23e fix(content): drop unsourced GATE paper-recall claims in Coding-Decoding note`

That file's mentions under the recovered predicate:

| revision | mentions | tokens |
|---|---|---|
| `a729b3f3` (15:51 era) | 5 | GATE2019, GATE2020, GATE2021, GATE2022, GATE2023 |
| `HEAD` | 0 | — |

**95 − 1 = 94. 135 − 5 = 130.** Closed, no residual, no rounding.

## 3. Why slice B reported 139 for the same corpus (75 files wider)

Slice B and sr-1540Z are not the same predicate, and slice B is the wider one.
Delta = 75 files, attributed mechanically:

| cause | files |
|---|---|
| board token in slice B's list only (`GATE-EE`, `SSC CGL`, `CBSE`, `IB A-level`, `IPMAT`, `BECE`, `AILET`, `ICSEI`, `GATE-CE`, `NEET(UG)`) | 31 |
| 19xx year, outside sr-1540Z's `20\d\d` window | 1 |
| **bracketed / intervening year — `Board ... (YYYY)`** | **43** |

The 43-file bucket is the important one. It is dominated by the **parenthesised
year**, which is how most notes actually cite a paper:

```
neco/english/eng-13.md          NECO Past Question Analysis (2018
mdcat/chemistry/chemis-13.md    MDCAT Chemistry 2026
mdcat/logical-reasoning/lr-4.md MDCAT PYQ (2018
waec/physics/phy-3.md           WAEC Physics papers (2020
clat/quantitative-techniques/qt-003.md   CLAT PYQ Pattern** (2019
```

sr-1540Z's regex demands the year **immediately** after the board token, so the
parenthesised form is structurally invisible to it. This is a third instance of
the R1 lesson ("sweep both phrasing families") — and it runs the *other* way
from the two already recorded: the year-only family under-reports, the
`mark-value` family was swept separately, and the **`(YYYY)` family was never
swept by anyone.**

Two further reasons not to inherit slice B's number as a target:

- it admits non-claims — `mcat/physics/physic-003.md` matches on
  `MDCAT paper, PMDC Public Notice, 2026`, a forward-looking curriculum/notice
  citation, not a past-paper recall claim;
- the union of 174 still contains `clat/current-affairs/ca-003.md`, which
  sr-1540Z explicitly carved out as DO NOT TOUCH.

## 4. State of the population

The defect population for `note-unverifiable-paper-recall-claim` is **bounded,
not pinned**: `94 ≤ N ≤ 139+` files on HEAD. It is not 95, and it is not 174.

**No batch edit is authorised by this document.** Three published exam-structure
facts (`CAT: 66 questions, 198 marks` and siblings) are correct and must survive
any future census, and no single batch rule is correct across the mark-value,
year-tagged, and bracketed families.

## 5. What the next census must do

1. Publish the predicate **in the dispatch**, not only in a `/tmp` script.
2. Sweep **three** phrasing families: `Board YYYY`, `Board (YYYY)`, mark-value.
3. Use the external anchor: gate-lr-002 was cleaned by a *different* pulse at
   `34b5c23e`; any instrument must now return ZERO for it. The instrument used
   here does.
4. Keep backups in `/tmp` or the workspace. This pulse recovered a five-hour-old
   unpublished predicate only because one file had not been swept.

---

## Gates

```
check-scope.sh            exit 0
check-astro-syntax.mjs    exit 0   (52 .astro)
npm run build             NOT RUN — 2026-10-13 operator directive
deploy / push / sudo      none
```

Instrument: `queue/pending/_vqzo-2050Z-pin-95.py` → `queue/pending/pin95-vqzo-2050Z.json`
Exit 2 on external-anchor failure. Deterministic, no network, 0 M3 text calls.