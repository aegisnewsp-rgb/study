# Paper-Recall Year-Claim Ladder — 2026-10-14 22:20Z (vqzo, sr-2220Z)

Extends sr-2150Z and sr-2205Z. Supersedes one count in sr-2205Z.
Deterministic instrument, zero LLM calls, zero network calls.

## The gap this pulse found

sr-2205Z landed one proof instance (`math-006`, commit `f9859754`) and swept **5** files.
That note was treated, but not finished: `math-006.md` itself still carried two lines of a
claim shape the prior census had never measured.

Two distinct shapes of year claim exist:

| shape | example | strength | measured before? |
|---|---|---|---|
| **P1** Patterns-block bullet | `Curvature questions appeared in 2021` | topic ↔ year | yes (sr-2150Z/2205Z) |
| **P2** problem-level attribution | `*Example 2 (JEE 2021):* <specific question>` | **question ↔ paper ↔ year** | **no** |

P2 is the stronger claim. It asserts that this exact question came from that exact paper, and
the free archive makes it student-checkable in about a minute. A student who trusts
`Example 2 (JEE 2021)`, downloads the 2021 Paper 1, and finds a different question has been
told something false by us, in the one place on the page they had grounds to trust.

## Second correction: sr-2205Z undercounted P1 too

sr-2205Z reported `residual_population: 5`. Its predicate matched bullets containing
`appeared`. It did not match:

- `Trigonometric equations with multiple angles tested in 2021, 2023` (math-002)
- `Location of roots … tested in 2020 and 2023.` (math-026)

Correct P1 figure for jeeadvanced: **7 files / 9 year-bearing bullets**, not 5 files.

This is the same failure mode sr-2135Z caught in sr-2105Z's census — a predicate that matches
one phrasing of a class and silently misses the others — recurring one level up.

## Measured population (jeeadvanced)

- P2: **12 files / 20 claims**
- P1: **7 files / 9 bullets** (2 blocks already year-free: math-006, math-021)
- Union: **12 files**

Sitewide scan (142 exam dirs, 108 files carrying any year claim) for context only:

- P2: 13 files / 22 claims — 12 jeeadvanced + **1 jeemain**
- P1: 104 files / 159 claims — spread across 30+ boards, **none measured for verifiability**

## Treatment applied

The one already shipped on `math-006` in `f9859754`, applied to all 12 files:

- drop the uncitable year, keep the problem and its full solution
- nine P1 bullets rewritten to say what to actually practise instead of asserting a year
- one archive pointer per note → `jeeadv.ac.in/archive.html`

Pointer wording is byte-identical to the shipped instance, so the site stays consistent.

Verified after apply (correct predicate — bullets only, bold headers excluded):

```
P2 label claims left:      0
bold-inline claims left:   0
Patterns year-bullets:     0   (mathematics)
files with archive pointer: 12
```

Two year-bearing bullets remain in `jeeadvanced/chemistry/chem-028.md`
(Montreal Protocol 1987; CPCB AQI 2019). Those are **verifiable historical facts, not
paper-recall claims** — different class, correctly untouched.

## Held back, deliberately

`jeemain/mathematics/math-006.md` carries the same P2 shape (`Example 2 (JEE 2022)`).
**Not touched.** JEE Main is a different board from JEE Advanced, and this pulse did not verify
a JEE Main archive. Planting a `jeeadv.ac.in` pointer there would point students at the wrong
board's papers — the cross-exam contamination failure. It needs its own archive check first.

## Instrument bug I made this pulse, recorded so it is not repeated

My first post-apply verification reported **9 residual year bullets**. All 9 were false
positives: the bullet predicate was `^\s*[-*]\s`, which matches the leading `*` of the
`**Check the record yourself:**` paragraph I had just inserted, and that paragraph contains
"2007". **The census was matching its own inserted text.**

Had I trusted that count I would have reported a failed sweep that had in fact fully landed.
Same class as sr-2205Z's `differentiat` stem bug: the instrument, not the claims, was wrong.
A re-check that cannot distinguish text the treatment inserted from text it was meant to find
is not a re-check.

## Unresolved blocker for the next pulse

Step 1.5 of the queue-consumer contract requires `/data/revenue-priorities.md`, regenerable
with `python3 /data/sr-revenue-priorities.py --top 30`.

**Neither file exists on this host.** So no dispatch row can carry `top_query=` or `imp=`,
which is why `no_measured_reason_streak` has now passed 200. Until the generator is restored,
every pulse is working corpus-measured and unmeasured-revenue work, and says so.

Restoring it needs: GSC export access (the source of impressions/clicks) and the script.
No claw can reconstruct impressions data locally — it is not on this host.
