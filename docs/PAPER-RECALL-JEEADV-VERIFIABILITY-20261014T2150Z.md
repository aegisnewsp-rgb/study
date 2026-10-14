# Paper-Recall Verifiability — JEE Advanced vs GATE (sr-2150Z)

**Date:** 2026-10-14T21:50Z
**Worker:** vqzo
**Extends:** sr-2135Z (year-range ladder), sr-2105Z (bracketed-year ladder), sr-1540Z (verifiability differs by board)
**M3 text calls:** 0 · **Network calls:** 1 search + 1 fetch (free of M3 text quota)

## The finding

sr-2135Z closed with a population of **6 recall-claim files that no prior census could see** —
JEE Advanced mathematics notes carrying per-year attributions. This pulse adjudicated that population.

**The population is not the same defect as the GATE one, and must not be swept with the GATE rule.**

## Verifiability differs by board — now with a third board measured

| Board | Official per-question archive? | Consequence for year-claims |
|---|---|---|
| GATE | No browsable archive; `gate.nptel.ac.in` PYQ coverage stops at 2022 | Year-claims **unverifiable** → strip them, say so |
| NEET/JAMB | NTA booklets carry a per-question marks column (`neet.nta.nic.in/archive/`) | MARK claims verifiable; topic/difficulty still not |
| **JEE Advanced** | **Yes — `jeeadv.ac.in/archive.html`, free, Paper 1 + Paper 2, 2007 onward** | **Claims are CHECKABLE — do not strip them, point at the source** |

Verified this pulse against the primary source, not a secondary blog: `jeeadv.ac.in/archive.html`
returns HTTP 200 and lists past papers from 2007 with both Paper 1 and Paper 2 downloadable.

## Why the treatments differ

The 34b5c23e treatment on `gate-lr-002.md` was correct **for GATE**: with no archive exists,
the honest move is to remove the year-attribution and state that no official record backs it.

Applying that same treatment to JEE Advanced would have been a **silent regression of teaching value** —
removing a checkable, student-verifiable claim and telling a reader it was unverifiable, when the
primary source is one click away and free. The archive pointer is strictly more useful and more honest.

## Proof-instance landed — `jeeadvanced/mathematics/math-006.md` (commit f9859754)

**Before** (Differentiability note, correct `exam: jeeadvanced`, correct topic):
- "Differentiability of piecewise functions with parameters is very common"
- "L'Hôpital's rule and derivative in limit problems appeared in 2020, 2022"

**After:**
- Header → "What to Practise in This Topic" (year-range removed from the assertion)
- Frequency adjectives ("very common", "frequently", "are tested") replaced with what to actually do
- Added: explicit pointer to `https://jeeadv.ac.in/archive.html`, 2007→, Paper 1 + Paper 2
- Added: "A year-specific claim is worth trusting only when you have the paper in front of you"

Teaching value **increased**, not decreased: the worked example above the block (the
$x^2\sin(1/x)$ differentiability-but-not-$C^1$ case) is untouched and is now explicitly tied to the
practise list. Tiers, roadmap links and footer untouched. 10 insertions, 6 deletions.

## Remaining 5 — same shape, NOT swept

`math-008` (Application of Derivatives), `math-013` (3D Geometry), `math-017` (Sequences),
`math-022` (Ellipse), `math-024` (Circle).

All 5 carry the identical "JEE Advanced Patterns (2018–2024)" structure with per-year attributions
and are provably correct on exam attribution and topic. They are a clean, uniform, single-board
population of 5 — but **this pulse landed one proof-instance, not a batch**, for the reason
sr-2035Z/sr-2050Z established twice already: an unpinned batch edit is how a wrong instrument
becomes 5 wrong files. The treatment is now written down and proven once; the sweep is mechanical
and safe for whoever executes it next.

## Negative result — recorded so it is not re-derived

Cross-exam contamination is **still a single file** (`ssc-cgl/quant/qa-002.md`, cleaned at 357b7f60,
verified still clean this pulse). None of the 6 JEE Advanced files shows it. No sweep authorised
on that basis either.

## Anchor

`gate/logical-reasoning/gate-lr-002.md` returns 0/0/0 under RANGE, BRANGE and SINGLE_PAREN
(cleaned by a different pulse at 34b5c23e). The instrument exits 2 otherwise. External anchor,
not self-derived.

## NO-MEASURED-REASON

This work is corpus-measured but carries no `top_query=` / `imp=` evidence. `/data/revenue-priorities.md`
and `/data/sr-revenue-priorities.py` remain absent — 200th detection. **Unchanged owner decision
required: build the GSC connector, or delete Step 1.5 from the contract.** Not re-litigated here.