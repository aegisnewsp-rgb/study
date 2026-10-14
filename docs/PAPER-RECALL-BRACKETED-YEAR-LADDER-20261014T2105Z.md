# Bracketed-year family: the "43 files" does not reproduce

**sr-2105Z** · 2026-10-14T21:05Z · vqzo cron `sr-orchestrate`
Instrument: `queue/pending/_vqzo-2105Z-bracketed-year-ladder.py`
Output: `queue/pending/census-vqzo-2105Z-bracketed-year.json`
Deterministic regex. No network, zero LLM calls, zero M3 quota.

---

## 1. What is being retracted

`docs/PAPER-RECALL-CENSUS-PIN-20261014T2050Z.md` (line 76) tabulates a
**bracketed / intervening year** bucket at **43 files**, and the sr-2050Z
dispatch promotes it to the headline open defect:

> "bracketed-year family never swept by anyone ... **43 files sit in that
> bucket alone**" — "This is R1 firing a THIRD time ... and the first that
> **under-reports**."

The same doc calls parenthesised years "the dominant way notes actually cite
a paper year".

**Both statements fail measurement.** A dispatch is sitting in
`/data/queue/tufi/dispatch.json` at score 1600 instructing tufi to sweep this
family, so the number had to be checked before it was acted on rather than
after.

## 2. The definition ladder

Four published predicates over the same corpus, same board-token list as
sr-2035Z slice B, with ``` fences folded and Sources/References tails dropped
(sr-2035Z's R3 hygiene):

| predicate | regex | files |
|---|---|---|
| `IMMEDIATE` | `\b(BOARDS)\s*\(\s*Y20\s*\)` | **0** |
| `STRICT` | `\b(BOARDS)\b[^.\n]{0,40}?\(\s*Y20\s*\)` | **6** |
| `NOCLOSE` | `\b(BOARDS)\b[^.\n]{0,40}?\(\s*Y20\b` | **48** |
| `ANYPAREN` | `\(\s*Y20\s*\)` | **554** |

**43 is none of these.** The nearest neighbour is `NOCLOSE` = 48, and the
sr-2050Z examples explain the gap exactly:

```
neco/english/eng-13.md    NECO Past Question Analysis (2018
clat/quantitative-techniques/qt-003.md   CLAT PYQ Pattern** (2019
mdcat/chemistry/chemis-13.md   MDCAT Chemistry 2026
```

All three are **truncated spans** — no closing paren survives — and the third
is not parenthesised at all. This is the same presentation defect sr-2035Z
admitted and fixed in itself ("I printed sentence prefixes instead of matched
spans, which made genuine hits look like noise"). It has now reappeared one
pulse later in the doc written to replace it.

## 3. The bigger claim also fails

"Parenthesised years are the dominant way notes cite a paper year" is false.
`IMMEDIATE` = **0 files**: no note in 3,466 cites a board as `Board (YYYY)`.
The dominant family is `Board YYYY` — flat, no parens — and **that is exactly
what sr-1540Z already swept and sr-2050Z pinned at 94 files / 130 claims**.

So the bracketed-year family is not a large under-reported third instance of
R1. It is a small tail (48 files, of which 6 genuinely close their paren) that
sits beside an already-pinned family. The framing "first instance that
under-reports" was wrong in the direction that matters: it made a 48-file tail
look like an unmeasured 43-file gap in a 94-file class.

## 4. What the 48 actually are

Per-file fix classes (published in the dispatch, as sr-2050Z
`required_of_tufi[0]` demands):

| class | files | shape | verdict |
|---|---|---|---|
| **B** year-attributed paper label | 23 | `MDCAT PYQ (2018): "…"` | candidate unsourced recall — same shape as the 94 |
| **D** section-header year | 24 | `NEET Previous Year Patterns (2019)` | weak recurrence claim, *not* the recall class |
| **C** closed paren, not a paper claim | 1 | `CLAT stem cites *Navtej Singh Johar* (2018)` | **leave untouched** |

Class C is the false-positive exemplar. *Navtej Singh Johar v. Union of India*
is a real 2018 Supreme Court judgment, cited inside a practice prompt. Any
predicate that "fixes" it commits a factual regression. It is also the file
sr-1540Z explicitly carved out as DO NOT TOUCH, and it still appears in the
174-file union that sr-2050Z already ruled unsafe.

The class B/D split is the load-bearing finding. `WAEC Physics papers (2020)`
and `NDA Worked Example (2019)` name a paper and a year and are unsourced
claims. `NEET Previous Year Patterns (2019)` asserts only recurrence and needs
sourcing, not deletion. Sweeping "the bracketed-year family" as one class
would have deleted section headers and case citations alongside real defects.

## 5. Standing constraints — unchanged

- **No batch edit is authorised by this document.**
- Published exam-structure facts stay untouched.
- Population remains **bounded, not pinned**: 94 (pinned) and 48 (bracketed
  tail) are different classes and must not be summed into one target count.

## 6. Method

External regression anchor, deliberately not self-derived — that is what made
sr-1920Z's self-test circular and forced its retraction.
`gate/logical-reasoning/gate-lr-002.md` was cleaned by a **different** pulse
at `34b5c23e`, and every one of the four predicates above must return **0** for
it. It does. The instrument exits 2 otherwise.

Two defects in my own first draft were caught before commit and are worth
recording: a wrong anchor path (`gate/general-aptitude/` — the file is in
`gate/logical-reasoning/`), and an anchor check placed *after* a zero-match
`continue`, which meant the anchor file could never be captured because it
legitimately has zero matches. Both were fixed; the instrument now exits 0.

`NO-MEASURED-REASON` for revenue: this dispatch is corpus-measured (counts,
predicates, commits) and carries no `top_query=`/`imp=` evidence. The GSC
connector that Step 1.5 depends on still does not exist; that remains one owner
decision, not a per-pulse detection.