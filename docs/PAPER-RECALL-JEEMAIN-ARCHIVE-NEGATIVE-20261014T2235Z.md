# JEE Main paper-recall: the archive is a verified NEGATIVE

`2026-10-14T22:35Z` · vqzo pulse sr-2235Z · extends sr-2150Z → sr-2205Z → sr-2220Z
Shipped in this pulse: `889c335c` (proof instance), closes the sr-2220Z hold-back.

## The question this pulse had to answer

sr-2220Z refused to plant an archive pointer on `jeemain/mathematics/math-006.md`,
because JEE Advanced's archive exists and JEE Main's had not been verified. It left
the file as a deliberate open item rather than guessing.

It is now verified, and the answer is **no**.

## Primary-source census

Method: `curl` the raw HTML and extract anchor text. **Not** a readability pass —
sr-2205Z already established that the readability extractor returns page chrome and
would have produced a confident, complete-looking, wrong answer.

`https://jeemain.nta.nic.in/` — 127 anchors, 49 of them PDFs:

| Category | Count | What it is |
|---|---|---|
| Question papers | **9** | all shift-labelled, all Session-2 **April 2026** |
| Final/provisional answer keys | 8 | 2026 Session 1 + Session 2 |
| Notices (advisories, admit card, results, press) | 29 | — |
| Syllabus / Information Bulletin / FAQ | 3 | — |

The nine papers are `B Tech 2nd Apr 2026 Shift 1` … `8th Apr 2026 Shift 2`.

Archive navigation is `Archive > 2025 > Public Notices`, and it resolves to exactly
one category page: `/document-category/2025-public-notices/`. Fetched it — 51 PDF
anchors, all answer keys, result declarations and advisories. **Zero question papers.**
There is no other document-category on the site; the list is complete, not sampled.

## Two independent reasons this is not like JEE Advanced

1. **No previous-year archive exists.** JEE Advanced publishes 62 PDFs, 2007–2025,
   Paper 1 + Paper 2, behind one browsable page. JEE Main publishes current-session
   papers only. A pointer to the archive would not fail to resolve the claim; it
   would send a student to a page that has never contained the 2022 paper.

2. **Papers are per shift.** Session 2 alone spans 5 days × 2 shifts; Session 1 adds
   more. So "this appeared in JEE Main 2022" names no paper *even if 2022 existed*.
   This is a property of the exam, not of the archive, and it would survive any future
   archive being published.

Therefore the GATE treatment applies (drop the claim), not the JEE Advanced
archive-pointer treatment. In this case the GATE treatment's justification — "no
official record backs it" — is **true**, where for JEE Advanced it would have been false.

## What is NOT claimed

That the Bayes question is not from JEE Main 2022. Unverifiable, and untouched.
The attribution is removed as **uncitable**, exactly as sr-2205Z reasoned for JEE
Advanced. Same argument, opposite treatment, because the archive facts differ.

Treatment applied — drop the parenthetical, keep the problem, add **no** replacement
prose. Inserting "no official archive exists" into 29 notes would be templated text
and would trip the adsense-compliance >8-word phrase-reuse rule.

```diff
-**Question (JEE Main 2022 Shift-2 pattern):** Three machines M1, M2, M3 ...
+**Question:** Three machines M1, M2, M3 ...
```

## Measured population — NOT swept, treatment undecided per shape

Corpus `src/content/notes/jeemain/**`, 81 files. **29 files, 47 claims.**

| Shape | Claims | Example | Notes |
|---|---|---|---|
| A `A_prevyear_q` | 20 | `Previous years: "Find inverse of [[2,1],[3,2]]…" [2023]` | problem-level |
| B `B_recall_q` | 24 | `- Q: "Half-life …" [2025 Physics — 3 marks]` | problem-level + marks |
| C `C_weightage` | 2 | `Topic Weightage \| ~7% (based on 2023–2025 paper analysis)` | year-range |
| E `E_shift` | 1 | `Question (JEE Main 2022 Shift-2 pattern)` | **swpt, 889c335c** |
| D `D_historical` | 8 | Einstein 1905, Bohr 1913, Montreal 1987 | **facts — never a defect** |

Two false positives, explained rather than counted: `2062` inside `1/206265` rad
(arcsec per radian) and `2000` inside `√12000`.

**Shapes A and B are not uniform and must not be batch-edited as one.** Stripping only
the year from B leaves `- Q: "…" [Physics — 3 marks]`, which still asserts a mark
allocation that is equally checkable only against the paper. Stripping the year from A
leaves `Previous years:` with nothing after it. Each needs a decision about whether the
marks survive, and that is a content judgement, not a regex.

## Two instrument bugs from this pulse, both mine

**The predicate could not match its own corpus.** v1 used `\bprevious year\b` and
reported **0 files / 0 claims** — a clean, believable zero. The corpus spells it
`Previous years:` (plural) and a trailing `\b` cannot match `years`. A predicate that
cannot match the string it is hunting returns a clean zero that is indistinguishable
from health. Third time this pipeline has been burned by it (sr-2105Z, sr-2135Z,
sr-2220Z). v2 derives its shapes by reading the corpus, not by guessing at it.

**Body-relative line numbers.** The census records line numbers into the body *after*
frontmatter, so the two false positives first resolved against the wrong lines and I
was about to mis-explain them. Re-resolved against real file lines before reporting.

## Verification

- Control `gate/logical-reasoning/gate-lr-002.md`: 0 hits.
- **External anchor:** all 12 `jeeadvanced` files cleaned at `d76a585c` return 0 under
  the same v2 predicates. The predicate demonstrably finds these shapes *and*
  demonstrably reports their absence — the property sr-2035Z's census lacked.
- Post-apply `E_shift` residual across all 81 jeemain files: 0.
- `check-scope.sh` exit 0 · `check-astro-syntax.mjs` exit 0 (52 .astro).

No `npm run build` (2026-10-13 operator directive). No deploy, no push, no sudo.