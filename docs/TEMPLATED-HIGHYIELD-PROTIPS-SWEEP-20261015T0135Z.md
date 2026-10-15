# Templated High-Yield marks table + Pro Tips — family sweep (2026-10-15 01:35Z, vqzo)

Closes the sweep `sr-2305Z` authorised and dispatched but did not run.
Proof instance `8aed3d09` (1 file) + this sweep (66 files) = the whole family.

## What was removed

Two markdown sections, present in 67 notes, byte-identical within each of 5 families:

- `### 🎯 High-Yield Topics for <EXAM>` — a per-topic **mark allocation**
- `### 💡 Pro Tips` — exam-wide strategy, identical per board

| family | files | boards | example assertion |
|---|---|---|---|
| `2c1dcc3be750` | 28 | jamb | "Biology for Science students — 40 marks" inside a **mathematics** note |
| `8ff847fdf276` | 20 | neet | "Electrodynamics (Physics) — 18 marks" inside a **botany** note |
| `ef1e88328751` | 9 | cat | "Reading Comprehension — 16-20 marks in VARC" repeated in every VARC note |
| `2bc4803e0859` | 5 | jeemain | "Integration (Definite + Indefinite) — 15 marks" inside a **chemistry** note |
| `705e211e90a5` | 4 | upsc | "Indian Polity — 30-35 marks (Prelims)" inside an **optional** paper |

Commit `ddec9f6d` — 66 files, **896 deletions, 0 insertions**.

## Why removal, not repair

1. **Uncitable.** NEET's archive holds 2020 papers only, and no board publishes a
   per-topic mark split. "Human Physiology — 18 marks" cannot be checked by a
   student from any official source, so it is decoration presented as data.
2. **Off-subject, measured.** The block names subjects other than the note's own
   frontmatter `subject:`. A botany note told students to master Electrostatics and
   Friedel-Crafts.
3. **Identical text is specific to nothing.** 66 copies of one table help exactly
   zero of the 66 notes it sits in.
4. **Replacement prose would recreate the defect one level up** and trip the
   adsense-compliance >8-word phrase-reuse rule.

Preserved in all 66: exam-pattern tables, `Official Resources`, roadmap links,
frontmatter. Smallest surviving file 4,389 chars.

## Measured and deliberately NOT swept

Full corpus: 3,466 notes scanned. After the sweep, zero multi-file families remain
(before: 5; after: 0). What survives is **not** the same defect class:

- **39 files, both blocks, unique per file, on-subject** — jeemain 23, buet-adm 5,
  cao-points 5, hpat 4, upcat 1, kenyatta-ku 1. These state *weights*
  ("Calculus — highest weight", "Trigonometry — medium weight") rather than marks,
  and match the note's own subject. Per-shape judgement, not a batch edit.
- **98 files, Pro Tips but no marks table** — every block textually unique. Sampled
  `cuet/english/eng-004.md`: real passage-reading technique (turn-word underlining,
  synonym search), the kind of content we want. Wrong class; leave alone.

## Instrument defect in this pulse's own sweep

The first sweep run aborted **all 66 files** with `signature drift`. Cause was in
the apply script, not the corpus:

```python
next((l for s, e, k in sp if k == "hy" for l in lines[s:e]), "")
```

This yields the **heading line only**, so the guard compared `hash(heading)`
against `hash(block)`. The tell was that every file inside a family produced the
*same* wrong hash — a constant wrong value, not drift. Fixed to join the span:
`"\n".join(lines[s:e])`.

This is the fifth recurrence of this failure family, after `sr-2105Z`,
`sr-2135Z`, `sr-2220Z` and `sr-2305Z`'s own `\s*$`-anchored heading predicate.
**A predicate that cannot match its own corpus returns a clean, believable zero.**
Every census in this queue should carry a positive control that must match known
text before its counts are believed.

## Reusable guard set applied per file

1. both blocks present, else abort
2. block signature must hash to its family signature, else abort
3. every family assertion marker must be gone from the result
4. no `High-Yield Topics` / `Pro Tips` heading may survive
5. frontmatter byte-identical; `---` count unchanged
6. the set of surviving headings, in order, must equal the original minus the two
7. ≥8 lines removed, else abort
8. all-or-nothing: one failure reverts the run

## Gates

`./scripts/check-scope.sh` exit 0 · `node scripts/check-astro-syntax.mjs` exit 0
(52 `.astro`) · no `npm run build` per the 2026-10-13 operator directive · no deploy,
no push.