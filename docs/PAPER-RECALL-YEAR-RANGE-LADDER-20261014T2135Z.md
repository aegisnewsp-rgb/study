# Year-Range Ladder — the rung sr-2105Z's census was missing

**Pulse:** sr-2135Z · **Measured at:** HEAD `2112546d` · **Branch:** `feature/openclaw-content-machine`
**Instrument:** `queue/pending/_vqzo-2135Z-year-range-ladder.py` — deterministic regex, no network, zero LLM calls, zero M3 quota
**Output:** `queue/pending/census-vqzo-2135Z-year-range.json`

---

## 1. What was missing

sr-2105Z (commit `2112546d`) published a four-rung ladder for parenthesised years:

| rung | predicate | needs a closing `)`? |
|---|---|---|
| IMMEDIATE | `Board (YYYY)` adjacent | yes |
| STRICT | `Board … (YYYY)` within 40 chars | yes |
| NOCLOSE | `Board … (YYYY` | no |
| ANYPAREN | `(YYYY)` | yes |

Every one of the four requires **exactly one year** and then, except NOCLOSE, a **closing paren**. A year *range* satisfies none of them:

- `**SSC CGL PYQ Pattern** (2019-2023):` — STRICT and ANYPAREN fail (no `)` after `2019`); NOCLOSE *does* fire, but only as the prefix `…PYQ Pattern** (2019`, so the row is filed as an opaque single-year match and the range is never tested.

So ranges are not rare — they are **invisible**. The census measured its own family with a net that has a hole in it.

## 2. Measured

| bucket | value | what it is |
|---|---|---|
| `RANGE_any_parenthesised` | 375 | raw year-range strings corpus-wide — **NOT a defect count**, see §4 |
| `BRANGE_board_attributed` | 45 | an exam board + a parenthesised year range: the real candidate family |
| `…of which carry a frequency/count assertion` | 15 | the strongest recall-claim shape (a table headed Frequency, or per-year "N questions" bullets) |

**Delta against sr-2105Z's 48-file family:** 11 files are new to the ladder — invisible to all four of its predicates, 6 of them carrying recall claims:

```
jeeadvanced/chemistry/chem-018.md      jeeadvanced/mathematics/math-017.md
jeeadvanced/mathematics/math-002.md    jeeadvanced/mathematics/math-021.md
jeeadvanced/mathematics/math-006.md    jeeadvanced/mathematics/math-022.md
jeeadvanced/mathematics/math-008.md    jeeadvanced/mathematics/math-023.md
jeeadvanced/mathematics/math-013.md    jeeadvanced/mathematics/math-024.md
                                         jeeadvanced/mathematics/math-026.md
```

The 6 recall-claim files in that set are all `**JEE Advanced Patterns (2018–2024):**` headers followed by bullets like *"L'Hôpital's rule and derivative in limit problems appeared in 2020, 2022"* — the same unsourced-recall shape as the sr-1540Z class.

**sr-2105Z's family members that are NOT range-shaped (14):** these carry a genuinely closed single year and are correctly filed by its rungs. The two families overlap but are not equal; neither supersedes the other.

## 3. Regression anchor

`gate/logical-reasoning/gate-lr-002.md` — cleaned by a *different* pulse at `34b5c23e` — returns **0 / 0 / 0** under `RANGE`, `BRANGE` and `SINGLE_PAREN`. The instrument exits 2 if it does not. Not self-derived ground truth; that is what made sr-1920Z circular.

## 4. `375` is not a defect population — do not promote it

Spot-sampling the 375 shows heavy legitimate use: `Benazir Bhutto (1984–2007)`, `NITI Aayog (2014–2020)`, `Constitutional Evolution (1947–1971)`, a Pakistani cricketer's span `(1974–1996)`, and queueing-theory history `(1952–1966)`. These are correct historical facts. `375` is a **vocabulary count**, recorded so the number is not rediscovered later and mistaken for work. Only `BRANGE = 45` is a candidate family, and only the 15 recall-claim files are candidates for editing.

## 5. The one proof-instance landed this pulse

`tufi`'s standing instruction from sr-2105Z is *"land at most one proof-instance per class to prove the class is real before widening."* Class B did not need to be widened — it needed one instance proven, and one file turned out to be provable **from the file alone**:

**`ssc-cgl/quant/qa-002.md`** (frontmatter `exam: ssc-cgl`, `examName: SSC CGL`, subject `quant`, topic *Profit Loss*) carried:

```
**NEET Previous Year Patterns (2019-2024):**
Similar concepts are tested in NEET Physics (energy efficiency) and Economics portions. For SSC CGL specifically:
```

Three defects, each provable without consulting any external source:

1. **Wrong-exam header.** An NEET pattern header sits in an SSC CGL note whose own body pivots with *"For SSC CGL specifically"*. The frontmatter settles it.
2. **False exam fact.** NEET has no Economics paper. Naming "Economics portions" as part of NEET is wrong on its face. Corpus-wide this co-occurrence occurs **exactly once** — in this file.
3. **Unsourced per-year counts** (`2023 Tier I: 2-3 questions …`) — the sr-1540Z recall-claim shape. SSC publishes the notification, syllabus and papers, but no topic-wise tally by year and Tier.

Cross-exam contamination is therefore a **single-file defect, not a family**: of the 8 notes carrying a `NEET Previous Year Patterns` header, 7 have `exam: neet` and only this one does not. No sweep is authorised on that basis.

The replacement follows the treatment already established at `34b5c23e`: teaching value kept and increased, no replacement recollection invented, and an explicit statement of what the official record does and does not publish.

## 6. Not authorised by this document

- No batch edit of the 45, or of the 11 newly-visible files, or of the 6 JEE Advanced recall-claim files. One proof-instance per class, then re-measure.
- The 14 sr-2105Z-only files are untouched — they are correctly filed by the existing rungs.
- `375` must not be cited as a backlog number.