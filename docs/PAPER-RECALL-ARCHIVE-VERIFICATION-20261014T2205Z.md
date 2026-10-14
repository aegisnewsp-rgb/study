# The archive is real — and I still could not check the claims in it

**vqzo · 2026-10-14T22:05Z · extends sr-2150Z · supersedes nothing**

## What this pulse set out to do

sr-2150Z found that JEE (Advanced) publishes every past paper free, so the
"Patterns (2018–2024)" blocks in six mathematics notes are *checkable* rather
than merely uncitable. It landed one proof-instance (`math-006.md`, commit
`f9859754`) and held back five files, writing this row for the next executor.

Holding back five files when the treatment is already proven once is a rule, not
a virtue. The rule earns its keep only when the thing being held back is
genuinely uniform. So the first job was to verify the premise and the uniformity
rather than take both on trust.

## The premise holds, and it is more precise than stated

`web_fetch` on `jeeadv.ac.in/archive.html` returned 969 characters: the
organising-institute banner, zero year links. Taken at face value that says the
archive does not enumerate years, which would contradict sr-2150Z.

It does enumerate years. The readability extractor simply did not render the
list. Fetched raw:

```
unique past_qps PDFs : 62
span                 : 2007–2025 inclusive (19 years), Paper 1 + Paper 2 each
naming 2007–2018     : <year>_<paper>.pdf
naming 2019–2025     : <year>_<paper>_<Language>.pdf   (English, Hindi)
also present         : AAT-<year>.pdf, 2016–2025
```

sr-2150Z said "2007 onward". It ends at 2025. That is a correction of precision,
not of substance — but it is the kind of thing that should be written down once
instead of rediscovered later.

**Tool-artefact warning, permanent:** for verifying what a page *contains*,
fetch raw HTML and grep it. Readability extraction is for prose. Here it produced
a confident, complete-looking, wrong answer.

## Then I tried to check the claims, and my instrument failed three times

The notes make specific checkable claims — Stolz-Cesàro in 2021 and 2023, Riemann
sums in 2020, radical axis in 2020 and 2023, orthogonal circles in 2021,
reflection property in 2019 and 2023. So I downloaded all seven year-pairs
(2019–2025, Paper 1 and 2) and keyword-tested each claim.

Nearly everything came back zero. Read naively: the claims are false, delete
them, five files cleaned on measured evidence. That would have been a very
convincing wrong answer. It was wrong three times over:

**1. My search stem was broken.** I searched `differentiat` for
"differentiability". That is not a prefix of `differentiable` — the stem is
`differentia`. The control term for core JEE calculus appeared to be absent from
six years of papers. The same string searched two different ways on one file
returned 0 and then 5. A broken grep and a broken corpus look identical, and the
only thing that separates them is checking a term you can see in the sample text.

**2. Section headings are images.** `SECTION` renders as `S E C T I O N` with
the subject name as a graphic. No regex recovers it. I cannot confirm which
questions are even mathematics before analysing them.

**3. JEE questions are frequently stated in symbols.** "Let f be a differentiable
function such that…" contains no topic noun. The absence of `stolz` from a paper
is not the absence of Stolz-Cesàro.

After fixing the stem the controls pass — matrix 22, probability 34, triangle 38,
tangent 20, complex 30, differentia 25 across six years. Extraction works. The
remaining zeros are genuine ambiguity, not tool failure.

**So: I can neither verify nor refute these claims from PDF text.** Not one of the
five files can be justified or condemned on this evidence.

## The rule, written down so the next pulse does not rediscover it

> **PDF-keyword absence never justifies deleting a claim.** To refute a year
> claim, cite the paper and the question number — or do not claim it.

This is the same failure the pipeline has already paid for twice. sr-2035Z
produced a population that later instruments returned as 95, then 190, then 4.
sr-2050Z's census caught its own family with a net that had a hole in it. The
common cause is always a measurement that looks rigorous, runs clean, and is
scoped to a surface rather than to the thing being measured.

## The sweep is still authorised — for a reason this pulse sharpened

The treatment does not depend on the claims being false. It depends on them being
**uncited**. "Very common" and "frequently tested" cannot be checked against a
paper by anyone. "This question is in 2024 Paper 2" can be, by the student, in
one click, free. Pointing at the source is the right edit whether or not the
underlying claim happens to be true.

That also keeps the trap closed from the other side. The GATE treatment (strip
the claim, assert no official record backs it) is correct for GATE, where no
browsable archive exists. Applied here it would state something false and delete
a checkable claim.

Five files, all re-read on HEAD `493ea836`, all `exam: jeeadvanced`, all carrying
the identical `JEE Advanced Patterns (2018–2024)` block. No drift since
sr-2150Z. Uniformity confirmed rather than assumed — which is what the hold-back
rule was asking for.

One detail for whoever executes: the block header says 2018–2024, but the archive
runs 2007–2025. Do not copy the notes' implied range into the replacement text.

## Negative results, recorded so they are not re-derived

- **Cross-exam contamination is still one file.** `ssc-cgl/quant/qa-002.md`,
  cleaned at `357b7f60`. None of the six JEE Advanced notes show it.
- **2019 is not machine-checkable at all.** Those PDFs are scans: 10MB each,
  27 characters of text. Do not attempt.
- **Live patch collisions: 0.** 2439 target-sharing pairs across 408 files, every
  pair receipted on both sides. The count rose from sr-2150Z's 258/236 only
  because this scan read `.diff` *and* `.mdx` and parsed `+++`/`---` headers
  instead of assuming a convention. It is a historical figure, not a queue hazard.

## Gates

`check-scope.sh` exit 0 · `check-astro-syntax.mjs` exit 0 (52 `.astro`) ·
no `npm run build` per the 2026-10-13 operator directive · no deploy, no push,
no sudo. Pre-existing dirty files (`public/revision.json`,
`src/data/site-revision.json`, two `.bak`) left untouched — not mine.

Zero M3 text calls. Fourteen network calls, none of which bill text quota.