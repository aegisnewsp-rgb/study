# Templated High-Yield Marks Table + Pro Tips — census and proof instance (2026-10-14T23:05Z)

Worker: vqzo · Queue row: `sr-2305Z.json` · Extends: `sr-2250Z` (which named this as its `recommended_next`)

## What sr-2250Z left open, and what this pulse found

sr-2250Z removed a byte-identical off-topic recall block from 67 notes and recorded that the
contamination is *wider than the block*: bot-007's `### Pro Tips` was still exam-wide boilerplate
inside a single-topic botany note. It recommended a census, not a sweep, because rewriting tips is
content authoring.

That census is this document. It also found the block's **immediate neighbour**, which is worse.

## Finding 1 — the same 67 files carry a second templated block, and it is the worse of the two

| Block | Files | Asserts |
|---|---|---|
| `### 🎯 High-Yield Topics for <BOARD>` | 67 | per-topic mark allocations (`Human Physiology — 18 marks`) |
| `### 💡 Pro Tips` | 67 | exam-wide strategy, byte-identical per board |

Both are byte-identical within each of five board families:

| Family | Files | Board |
|---|---|---|
| `9a523d19e9ec` | 21 | neet |
| `5b7fec7bf3a8` | 28 | jamb |
| `8e9c0a825cac` | 9 | cat |
| `09901fee75d3` | 5 | jeemain |
| `9a564c936435` | 4 | upsc |

The High-Yield table is the more serious of the two. It states a precise mark allocation for every
topic — and NEET's NTA archive holds **2020 papers only** (`sr-2250Z`, verified), so a 2024-scoped
mark split is not checkable by a student. This is the same defect class sr-2250Z removed as
UNCITABLE (`'[2024 Physics - 2 marks]' — a mark allocation no archive can check`).

The cross-subject contamination is now measured rather than anecdotal: **67 of 67** files contain a
Pro Tips block naming subjects other than the note's own `subject:` frontmatter. In
`neet/botany/bot-007.md` (Kingdom Protista) the table listed `Electrodynamics (Physics) — 18 marks`
and the tips said *"In Physics, master Electrostatics + Current Electricity"*.

**Not claimed:** that any mark figure is *wrong*. Per sr-2205Z's permanent rule, absence of evidence is
not refutation. The claim removed is *uncited precision plus off-subject placement*, nothing more.

## Finding 2 — it is a PARTIAL injection, which is why it is also an inconsistency defect

This is the part a coverage census gives that a duplication census cannot:

| Board | Affected | Total notes | Coverage |
|---|---|---|---|
| jamb | 28 | 75 | 37.3% |
| cat | 9 | 31 | 29.0% |
| upsc | 4 | 16 | 25.0% |
| neet | 21 | 108 | 19.4% |
| jeemain | 5 | 81 | 6.2% |

Only **5 of 142 boards** and **67 of 3466 notes (1.9%)** are affected. Within NEET, botany notes carry
it 34.8% of the time and physical-chemistry notes 13.3%; within JEE Main, physics 14.3% and chemistry
3.6%. So the same exam returns different advice on different pages. A student who lands on
`neet/botany/bot-007.md` is told to study Physics; one on `neet/chemistry/chem-020.md` is not told
anything. That inconsistency, not duplication alone, is the E-E-A-T problem.

## Finding 3 — the content exists nowhere else, so removal is a real loss

`src/data/exams/india/neet.ts` carries `examPattern`, `prepOverview`, `commonMistakes` — **none of the
templated prose**. The tips and mark table exist only inside these 67 topic notes. Removing them
without relocating them deletes the guidance outright. This is why the sweep is dispatched rather
than executed inline.

## Uniformity IS proven here (unlike sr-2235Z)

sr-2235Z refused to batch-edit because its shapes A and B were *not* uniform. These families are
uniform, and that was measured two ways:

- exact normalised block equality → 5 groups, 67 files
- near-variant detection (Jaccard ≥ 0.60 of line-token sets, **no size filter**, so singletons are
  included) → **0 near-variants**

So a family sweep is mechanically safe. It is still *dispatched*, not run, for the content reason in
Finding 3.

## Two instrument bugs — both mine, both caught before reporting

1. **Heading predicate could not match its own corpus string.** `^###\s*(?:[^\w\s]+\s*)*(...)\s*$`
   returned a clean removal of only *Pro Tips* and silently skipped `### 🎯 High-Yield Topics for NEET UG`,
   because every real High-Yield heading carries a trailing board name. The post-apply guard
   (`assert 'Electrodynamics' not in new`) fired and aborted the write. **Same family as sr-2105Z
   (`\bprevious year\b` vs corpus `Previous years:`) — a predicate that cannot match returns a
   believable zero. Fifth recurrence of this family.** The guard, not the census, is what caught it.

2. **Sentence-level fingerprint cannot separate site chrome from authored advice.** It reported
   **92** affected files against the grouping census's **67**. The 25-file delta is dominated by
   `*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*`
   — which sits inside a Pro Tips block but is **page chrome explaining the tier selector**, not
   filler. Removing it would break the selector's explanation. Had instrument B been trusted alone
   this pulse would have reported 92 and destroyed working UI text. The delta was resolved file by
   file before use.

Also recorded: `grep -rl '^#\+.*pro tips'` returns **235**, against **226** for a predicate that
scopes to real notes. All 31 of the difference are `.bak-*` files — a grep-vs-walk artifact, not a
content finding. Separately, **2 notes carry an empty tips section** (heading, no body):
`ppsc/gk/gk-006.md`, `jamb/mathematics/math-19.md`.

## Proof instance shipped — `8aed3d09`

`src/content/notes/neet/botany/bot-007.md` — the exact file sr-2250Z named. Removed both sections,
17 lines, no replacement prose.

Kept: the NEET exam-pattern table (Questions / Time / Marks / Section / Negative / Qualifying — factual),
`### 🔗 Official Resources`, both roadmap links, all three tiers.

Verified with two instruments *different from the one that found the defect* (heading regex found it;
content-string probes and a structural parse checked it):

- 6 content-string probes → 0 residuals
- structural parse → 0 empty sections introduced, 3 tiers intact, 2 roadmap links intact
- 8993 → 8370 chars, floor 3500, headroom 4870

GATES: `check-scope.sh` exit 0 · `check-astro-syntax.mjs` exit 0 (52 .astro) · no `npm run build`
per 2026-10-13 operator directive · no deploy, no push.

## Open for the next pulse

- **Family sweep (66 remaining files)** dispatched to uc5t. The open question is *relocate vs remove*:
  the prose exists nowhere else, so removal is a net loss unless it lands on the exam hub first.
- **`neet/botany/bot-007.md`'s Pro Tips was not the only contamination**, but the other 66 are
  unmeasured for *how* off-subject they are. Do not assume this file was worst.
- **The 25-file sentence-fingerprint delta is not all chrome.** `ielts-qatar` (8), `hpat` (4) and
  `ucat-anz-nz` (2) carry genuinely shared skill-level advice. Measured, found mostly legitimate
  (exam-level advice in a board whose whole note set *is* the exam), and **not swept**.
- **Empty tips sections**: 2 files, trivially removable, not swept.
- **sr-2235Z per-shape year attribution**: deferred, not cancelled.
- **NO-MEASURED-REASON, 205th**: `/data/revenue-priorities.md` and `/data/sr-revenue-priorities.py`
  still absent. Owner decision unchanged, not re-litigated.