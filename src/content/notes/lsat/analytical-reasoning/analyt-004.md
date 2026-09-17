---
exam: lsat
examName: LSAT India
subject: analytical-reasoning
subjectName: "Analytical-Reasoning"
topic: analyt-004
topicName: Arrangement Games and Hybrid Games
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-17"
---

# Arrangement Games and Hybrid Games

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

An **Arrangement Game** asks you to slot entities into ordered positions (linear row, circular ring, or two-/three-dimensional grid) under position-based rules. A **Hybrid Game** layers grouping (in/out, paired) or matching constraints on top of the same ordering skeleton, so you must track two dimensions at once.

- **Entity**: the people, objects, or variables named in the setup (e.g., seven presenters, eight jurors).
- **Position/Group slot**: the chairs, seats, or in/out bins where entities land.
- **Constraint**: any rule tying an entity to a position, group, or another entity (if-then, before/after, immediately, exactly).
- **Question stem**: Must Be True, Could Be True, Cannot Be True, or a fully determined board.

> 💡 **High-Yield Memory Hook:** **DOTS — Diagram, Order, Track, Split.** Diagram the skeleton first, Order entities with operators, Track every conditional contrapositive, Split only when two sub-cases are mutually exclusive and exhaustive.

| Operator | What it forbids | What it allows |
|---|---|---|
| Immediately before | Anything sitting between the two | Any non-adjacent gap elsewhere |
| Somewhere before | A later slot for the predecessor | Gaps of any width between them |
| Not immediately next to | Adjacency in either direction | Same track, non-adjacent slot |
| At least one / At most one | Bidirectional only-if / exactly-one symmetry | Treat as one rule, two ways |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### 🎯 Exam-Level Worked Problem
**Question:** Seven rock samples — P, Q, R, S, T, U, V — sit in seven consecutive lockers numbered 1–7. Locker 1 is leftmost. The rules are:
1. P is in an odd-numbered locker.
2. Q is immediately before R.
3. S is somewhere after T but not immediately after T.
4. U is not in locker 1.
5. V is in locker 7 if and only if R is in locker 3.
6. Exactly two samples sit between T and U.

Which of the following must be true?
(A) R is in locker 3. (B) S is in locker 5. (C) Q is in locker 2. (D) T is somewhere before U. (E) P is in locker 5.

#### Solution:

- *Step 1 — Anchor Q→R as a block of size 2 occupying consecutive slots. Q immediately before R means slot(Q)+1 = slot(R). Possible block starts: 1-2, 2-3, 3-4, 4-5, 5-6.
- *Step 2 — Apply rule 6. T and U must be separated by exactly two lockers, so their distance is 3. Pairs with gap = 3: (1,5), (2,6), (3,7), (5,1), (6,2), (7,3). Combine with rule 4 (U ≠ 1) → drop (1,5) for U. Remaining valid T/U placements: T=1, U=5; T=2, U=6; T=3, U=7; T=5, U=1 ✗; T=6, U=2; T=7, U=3.
- *Step 3 — Layer rule 1 (P in odd locker: 1, 3, 5, 7) and rule 5 (V=7 ↔ R=3). R can only be 3 when Q is 2, because Q immediately precedes R.
- *Step 4 — Test R=3, Q=2 branch. If V=7 (rule 5, forward), then U cannot be 7, eliminating T=3, U=7. U must then be 5 (with T=2) or 2 (with T=6). But Q already occupies 2, so U=2 is out → U=5, T=2. P then occupies locker 1 or 3; locker 3 is taken by R, so P=1. That leaves S=4 or S=6, and V=7. S=4 means S is immediately after T (forbidden by rule 3), so S=6. Lockers filled: 1-P, 2-Q, 3-R, 4-?, 5-U, 6-S, 7-V → leftover S goes to 4? Re-check: with P=1, Q=2, R=3, T=2 ✗ — Q and T collide. Restart branch.
- *Step 5 — Repartition with T=6, U=2 (rule 4 allows U=2). Then Q→R block sits in slots 3-4 or 4-5. R=3 forces Q=2 ✗ (Q must be 2 only if R=3; rule 5 says V=7 ↔ R=3, so R=3 is allowed but Q=2 clashes with T=6? No clash — T=6, Q=2 is fine). Re-fill: T=6, U=2; Q-R block at 4-5 (Q=4, R=5) keeps R≠3, so V≠7 and V sits elsewhere. P must be odd: 1, 3, 7. V must avoid clashing with T or U, try V=7, P=1 or 3. S must be somewhere after T(=6) but not immediately → S=7 conflict with V=7, so S can only be after 6 with a gap; only 7 exists after 6, so this branch collapses.
- *Step 6 — The only consistent global board uses T=2, U=5, Q-R block at 4-5, V=7, P=1 or 3, and S forced into the remaining slot. Since S must be somewhere after T(=2) and not immediately, S=4 or S=6. Reading the board: T=2, Q=4, R=5, U=5 ✗ — U and R collide. Block at 5-6 instead: Q=5, R=6, U=5 ✗. Block at 3-4: Q=3, R=4, U=5, T=2, V=7, P=1, S=6 → S is after T (2) but not immediately, valid; P=1 (odd) ✓.
- *Final board:* 1-P, 2-T, 3-Q, 4-R, 5-U, 6-S, 7-V. The only statement that must be true across every valid scenario is **(D) T is somewhere before U** (T=2, U=5 is forced in the only surviving scenario, and any alternative scenario keeps T before U by rule 6's gap structure once rule 4 drops the (U=1) case).

> ⚠️ **Examiner Trap:** Students lock onto R=3 because rule 5 mentions it, then pick (A). Rule 5 is a biconditional (iff), not a one-way conditional — V in locker 7 forces R=3, but R=3 does not by itself force V=7 unless you assume the forward direction. Several valid boards have R≠3 with V≠7, ruling out (A).

#### Concept Comparison Matrix

| Feature | Pure Arrangement | Hybrid Game |
|---|---|---|
| Primary dimension | Linear / circular / grid position | Two tracked dimensions simultaneously |
| Secondary dimension | Usually none | Group (in/out, paired) or matching (X-to-Y pairing) |
| Typical rule types | Position operators + adjacency | Position operators **plus** group-membership operators |
| Sketch method | Single track, circle, or NxN grid | Track **plus** group bins or pairing arrows |
| Common student error | Forgetting cyclic symmetry | Tracking one dimension while losing the other |
| Branch trigger | A position leaves two equally valid slots | A membership decision forces two incompatible group splits |

#### Sequencing Operators — What They Actually Mean

| Operator | Translation | Symmetric? |
|---|---|---|
| Immediately before | Next slot to the left (linear) or one step counter-clockwise (circular) | No — pair with "immediately after" |
| Somewhere before | Any earlier slot, any gap | No |
| Between X and Y | Strictly inside the X…Y interval, bounded by both endpoints | No — requires both anchors |
| At least k between | Gap ≥ k; converse: gap ≤ 7−k if total slots fixed | Bidirectional with "at most" |
| Not adjacent | Slot difference ≥ 2 | Symmetric |

#### Core Steps for Any LSAT India Game

1. Read the setup once for entities, once for slots, once for rules.
2. List fixed entities first (those with one possible slot).
3. Group linked entities into blocks; treat each block as a single unit.
4. Translate every conditional into its contrapositive and write it next to the original.
5. Branch only when a single placement produces two mutually exclusive, exhaustive cases.
6. Before answering, restate the question type: Must / Could / Cannot.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Traps and Edge Cases

1. **Circular symmetry collapse**: in an N-person circle without a named anchor, every rotation of a valid arrangement is the same arrangement. Anchor one named entity at 12 o'clock (or 6 o'clock for odd N) before you start — failure to do so produces "different" boards that are actually identical, inflating your scenario count and exhausting time.
2. **Grid-game "between" trap**: "W is between X and Y" in an NxN grid means W sits on a path connecting X and Y, **not** that W touches X or Y. Only name the endpoints when the rule specifies adjacency or distance.
3. **Biconditional overload**: rules phrased as "A if and only if B" appear in roughly 1 of every 3 LSAT India arrangement/hybrid games. Students reliably handle the forward direction and forget the converse, then answer "Could Be True" questions with a violation of the unstated half.
4. **Floating vs. fixed variables**: a variable is *fixed* when every scenario places it in the same slot or group; *floating* when it has two or more legitimate homes. List floating variables explicitly — the question stem often targets a floating entity, and your answer key depends on which slots are still open.
5. **Equivalence classes (blocks)**: when A and B always travel together (e.g., "A is two seats before B" combined with "A is immediately before C"), collapse them into a block before counting slots, or your gap arithmetic will be off by the block size.
6. **Hybrid dual-track failure**: in an arrangement-plus-grouping game, a conditional rule that fires only inside one group (e.g., "If X is in the Red group, then Y is in the Blue group") must be evaluated separately in every scenario for that group's membership. Track group bins and position slots on the same sketch.
7. **The "Not immediately next to" loophole**: "A is not immediately next to B" forbids slot difference = 1 only. A and B can still share the same track elsewhere — including the *same* slot in a circular game if a rule elsewhere forces one of them out.
8. **Time pressure signal**: arrangement/hybrid games in LSAT India typically run 6–8 minutes. If a single game exceeds 9 minutes, abandon the exhaustive board and switch to local deductions on the question at hand — the exam rewards partial credit on individual questions.

#### Worked Micro-Example (Hybrid Edge Case)

Setup: Five delegates — K, L, M, N, O — sit in chairs 1–5. Exactly two are assigned to the Press group; the other three to the Floor group. Rules:
- K and L are in the same group.
- M is in the Press group.
- N is somewhere after M.
- The Press delegates occupy the two lowest-numbered chairs.

Forced deductions: M = Press. K and L together, with exactly two Press seats, means K and L are the Press pair (since M plus one other = Press). So K, L, M = Press; N, O = Floor. The two lowest chairs (1, 2) hold Press; chairs 3–5 hold Floor. M in chair 1 or 2; N after M, so M ≠ 5 (already impossible) — M = 1 forces N = 2, 3, 4, or 5; M = 2 forces N = 3, 4, or 5. The fixed fact across **both** sub-cases is that chairs 3, 4, 5 contain N and O in some order — a Must-Be-True question targeting that pair will succeed.

#### Connections to Adjacent Topics

Arrangement rules underpin **Linear Sequencing**, **Circular Arrangement**, and **Grid (Matrix) games** in the standard LSAT taxonomy; they are the substrate beneath **Hybrid Games**, which combine arrangement with grouping (in/out), matching (bipartite), or pattern (selection) rules. Mastery of operators and contrapositives here transfers directly to **Pattern games**, where the entities follow a sequence pattern (e.g., alternating roles) rather than fixed slots.

#### Two Advanced Practice Prompts

1. Build a circular arrangement of 8 doctors with two named anchors (Dr. A fixed at seat 1, Dr. H fixed opposite Dr. A). Add a hybrid layer: exactly 3 of the 8 are on the Day shift, the rest on Night. Write one Must-Be-True and one Could-Be-True question for the board and solve both.
2. Construct a 4×4 grid of 16 paintings. Impose a diagonal constraint (one painting per row on the main diagonal), a column constraint (column 2 holds only blue paintings), and a hybrid grouping (3 paintings are pre-1940). Identify the floating variables and the fixed variables, then list which question stems would be efficiently answerable without a full board.

---

## Continue your study

- **[View this topic in your LSAT India roadmap](/roadmap/?exam=lsat&duration=1mo)** — see where "Arrangement Games and Hybrid Games" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=lsat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[LSAT India exam overview](/exams/lsat/)** — pattern, eligibility, and syllabus
- **[All Analytical-Reasoning notes](/notes/lsat/analytical-reasoning/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
