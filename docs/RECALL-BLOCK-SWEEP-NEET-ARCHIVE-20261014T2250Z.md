# Verbatim recall-block sweep + NEET archive correction — 2026-10-14T2250Z

Worker: vqzo. Commit `3ceb872a`. Dispatch: `queue/pending/sr-2250Z.json`.

## What was found

A contiguous `- Q: "..." [YYYY Subject — N marks]` block was pasted
**byte-identical** into 66 of 3466 note files across 5 boards:

| hash | files | boards | directories |
|---|---|---|---|
| `f56550cd376a` | 28 | jamb | chemistry 10, english 4, mathematics 5, physics 9 |
| `11e8cf9e6e85` | 20 | neet | botany 7, physical-chemistry 2, physics 8, zoology 3 |
| `bf6bba8575b2` | 9 | cat | dilr 3, qa 5, varc 1 |
| `f8168bd5f063` | 5 | jeemain | chemistry 1, physics 4 |
| `5ba03d6caf47` | 4 | upsc | gs1 2, gs2 1, optional 1 |

The bad part is not the repetition, it is the **subject mismatch**:

- `neet/botany/bot-007.md` listed a circular-motion **physics** question and a
  Friedel-Crafts acylation **chemistry** question under *Previous Year Question
  Patterns*.
- Four **JAMB English** notes listed a **photosynthesis** question.

Each line also asserted a mark allocation (`[2024 Physics — 2 marks]`) that no
archive can check. Removed as UNCITABLE — same argument as `889c335c` (JEE Main)
and `d76a585c` (JEE Advanced).

## Why removal, not a rewrite

The same three questions in twenty-eight files are not specific to *any* of
them. A per-topic recall section whose content is identical everywhere is
filler by construction, which is exactly what `adsense-compliance.md` calls out
("never reuse a phrase of >8 words across answers — reviewers flag
templated/spun text"). No replacement prose was added: templated filler across
67 notes would recreate the defect one level up.

## Instrument bug (4th of its family)

The census filtered on *group size ≥ 2*, so a near-variant of the block that
appeared in exactly **one** file was invisible by construction. A post-sweep
residual grep found it: `neet/botany/bot-007.md`. It was caught by probing
**six question strings by content**, not by re-running the same hash census.

> A census that groups by equality can never find the ungrouped. Re-check with a
> different instrument, or the check is just the census again.

## NEET archive — correction to sr-2150Z

sr-2150Z asserted "NEET/JAMB: marks verifiable via NTA archive". Verified from
primary source (`curl` raw HTML + anchor-text extraction, **not** the readability
pass that misled sr-2200Z):

- `https://neet.nta.nic.in/archive/` — 75 question-paper PDFs, **all 2020**.
- Labelled per language and per set: `English Set E1 NEET QP 2020`,
  `Assamese Set E3 NEET QP 2020`, … 13 languages.
- Also present: `Final Answer Keys of NEET (UG) – 2022`.

**NEET is not a "checkable archive" class like JEE Advanced (2007–2025).** A
pointer would not let a student verify the `[2024 …]` claims the notes make. And
as with JEE Main, papers are per language *and* per set, so a bare "NEET 2020"
names no single paper.

The generalisable lesson: **an archive page existing is not an archive of
question papers.** That held for JEE Main (verified negative, `sr-2235Z`) and it
holds for NEET in the opposite direction — NEET *has* papers, just not for the
cited year.

## Verification

- byte-identical blocks remaining anywhere in `src/content/notes`: **0**
- residual content-probe hits across 6 offending strings: **0**
- empty sections created: **0**
- notes below the 3500-char floor: **0**
- on-topic chemistry `Friedel-Crafts` content deliberately left alone:
  `cuet/chemistry/chem-023`, `ecat-eng/chemistry/chemis-010`,
  `jeeadvanced/chemistry/chem-023`

Gates: `check-scope.sh` exit 0 · `check-astro-syntax.mjs` exit 0 (52 `.astro`).
No `npm run build` per the 2026-10-13 operator directive. No deploy, no push,
no sudo. Four pre-existing dirty files left uncommitted — not mine.

## Still open

The contamination is **wider than the block**. `bot-007.md`'s `### Pro Tips` is
still exam-wide boilerplate ("In Physics, master Electrostatics + Current
Electricity + Magnetism") inside a single-topic botany note, and the same shape
almost certainly survives in the other 66 files. Rewriting those is content
authoring, not mechanical deletion — a shared replacement would recreate the
templating this pulse removed. That is the next census target.

`sr-2235Z`'s per-shape year-attribution treatment is **deferred, not cancelled** —
this defect was strictly worse.