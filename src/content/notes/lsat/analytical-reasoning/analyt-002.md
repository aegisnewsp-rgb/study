---
exam: lsat
examName: LSAT India
subject: analytical-reasoning
subjectName: "Analytical-Reasoning"
topic: analyt-002
topicName: Sequencing Games
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-17"
---

# Sequencing Games

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **Sequencing Game** asks you to arrange a finite set of entities along an ordered dimension (time slots, race lanes, finish ranks, line positions) while obeying conditional rules. The fixed dimension is the **Master Rule**; every other constraint is read against it.

- **Master Rule**: the unchanging frame (e.g., "7 singers perform in slots 1–7"). Lock the endpoints and direction before adding any conditional.
- **Conditional Rule**: an *if–then* or *unless* clause. Translate "P only if Q" as **Q → P**, never as P → Q.
- **Block**: two or more entities locked in fixed relative order; move them as a unit.
- **Limited Option**: a slot with one or two viable candidates — your pivot for fast deduction.
- **Could/Must/Cannot Be True**: possibility requires one consistent world; must-be-true requires the inference to survive every valid arrangement.

> 💡 **High-Yield Memory Hook:** **"MP3-DCL"** — Master rule → Place fixed entities → map 3 conditional shapes (**if**, **only if**, **unless**); then **D**educt from **C**onfirmed **L**imited slots. Run MP3-DCL on every game and you will not miss the obvious deduction.

| Term | One-line meaning |
|---|---|
| Master Rule | The fixed sequence frame all other rules reference |
| Conditional | If/only-if/unless constraint, translated to formal logic |
| Block | Sub-chain treated as a single movable unit |
| Limited Option | Slot with ≤ 2 candidates; high-yield pivot |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Game Types

Sequencing Games split into four structural families. Identifying the family early dictates your diagram.

- **Linear order**: one row, n positions, fixed left-to-right (or earliest-to-latest) direction.
- **Distributive (split) order**: entities partitioned into ordered groups or rows, each group internally ranked.
- **Circular / loop order**: entities around a table; rotational symmetry makes "absolute position" meaningless without an anchor.
- **Mixed / hybrid**: sequencing plus an assignment layer (each entity also carries a colour or task).

#### Translating Conditionals Correctly

LSAC exploits English ambiguity. Memorise the formal equivalents before attempting any game.

| English Phrase | Formal Form | Trap |
|---|---|---|
| "P if Q" | Q → P | Direction matches the word "if" |
| "P only if Q" | P → Q | Reverses your intuition — natural reading is wrong |
| "P unless Q" | ¬Q → P | "Unless" injects the negation on the *other* term |
| "P if and only if Q" | P ↔ Q | Biconditional — both directions bind |
| "P or Q, but not both" | (P ∨ Q) ∧ ¬(P ∧ Q) | Exclusive disjunction, not inclusive "or" |

#### Deduction vs Possibility Strategy

A **Must Be True** answer must hold in every world consistent with all rules. Test it by trying to construct an arrangement where it fails; if you cannot, it is forced. A **Could Be True** answer needs only one valid arrangement supporting it; build that world quickly and move on.

#### Comparison Matrix: Confused Question Stems

| Stem | Logical Demand | Wrong-Answer Temptation |
|---|---|---|
| "Which one of the following **could be true**?" | Find one consistent world | Choosing an option that is forced (must be true) — examiners include "too strong" answers as decoys |
| "Which one of the following **must be true**?" | Survives all valid worlds | Choosing a tempting local rule that fails in just one scenario |
| "Which one **cannot be true**?" | Logically excluded everywhere | Conflating with "must be false under some condition" — the condition is unstated, so the exclusion is unconditional |
| "If [new condition], which must be true?" | Re-deduce under the added rule | Forgetting the new condition and answering from the base game only |

#### 🎯 Exam-Level Worked Problem

**Question:** A film festival screens six short films — **F, G, H, J, K, L** — in six consecutive time slots from 1 (earliest) to 6 (latest). The festival director imposes these rules:
- F is screened no earlier than slot 4.
- G is screened exactly two slots after K.
- L is screened immediately before or immediately after H, but L is earlier than H.
- J is screened in an even-numbered slot.
- K is screened no later than slot 3.

If exactly one film is screened in slot 5, which one **must** be screened in slot 6?

(A) F (B) G (C) H (D) J (E) L

#### Solution:

Step 1 — Lock the **Master Rule**: slots 1–6, ascending. F ≥ 4 and K ≤ 3, so F occupies {4, 5, 6} and K occupies {1, 2, 3}.

Step 2 — Place K first. K ∈ {1, 2, 3} and G = K + 2, so valid (K, G) pairs are (1, 3), (2, 4), (3, 5). But F ≥ 4 forces F ∈ {4, 5, 6}, so (K, G) = (1, 3) is out because slot 3 would be taken by G, conflicting with later deductions; test the survivors.

Step 3 — Apply "L immediately before H, L earlier." The only legal adjacent block reading **LH** (L, then H) consumes two consecutive slots. Possible LH placements given F ≥ 4 and K ≤ 3: slots (1,2), (2,3), (3,4), (4,5), (5,6).

Step 4 — J must occupy an even slot: {2, 4, 6}.

Step 5 — Add the new condition: exactly one film in slot 5. With F ≥ 4 and J ∈ even, slot 5 is **not** J. If slot 5 is not J, then J ∈ {2, 6}.

Test J = 6: F must take slot 4 or 5. If F = 4, then slot 5 is forced to be the unique occupant. The remaining entities {G, H, K, L} fill slots 1, 2, 3, 5 with K ≤ 3, G = K + 2, and LH consecutive. The only placement satisfying all three is K = 1, G = 3, L = 2, H = (invalid — H must follow L immediately, so H = 3, but G = 3). Contradiction → J ≠ 6 under this branch.

Test J = 2: J takes slot 2. F still ∈ {4, 5, 6}. To leave exactly one entity in slot 5, place F = 6 (which forces slot 5 to be the singleton). Remaining slots 1, 3, 4, 5 hold {G, H, K, L}. K ≤ 3 and G = K + 2 gives (K, G) = (1, 3). LH consecutive in {4, 5} → L = 4, H = 5. All conditions satisfied; slot 5 = H (singleton), slot 6 = F.

Cross-check: F = 6 ≥ 4 ✓; K = 1 ≤ 3 ✓; G = 3 = K + 2 ✓; L = 4 immediately before H = 5 ✓; J = 2 even ✓; slot 5 contains only H ✓. Answer: **(C) H**.

> ⚠️ **Examiner Trap:** The most common error is reading "F is screened no earlier than slot 4" as "F is in slot 4 or later" but then forgetting the *upper* bound created by other rules. Students who fix F = 4 early close off arrangements where F must shift to 6.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Traps and Edge Cases

1. **Converse fallacy**: "If A then B" does **not** license "If not A then not B." LSAC seeds conditionals that look reversible but are not; always test the contrapositive only.
2. **Mirror symmetry**: For circular games, an arrangement and its 180° rotation are equivalent unless an external anchor (a window, a marked seat) breaks the symmetry. Failure to anchor costs a full question cluster.
3. **Block dismemberment under negation**: A "not adjacent" rule introduced between two members of a fixed block forces the block to split, but the original *relative* ordering must still be preserved inside each new sub-block.
4. **Duplicate spacing**: "Each of the two copies of X must have at least one Y between them" is a spacing, not ordering, constraint — track Y-counts in slots, not slot ownership.
5. **Conditional chains that loop**: "A → B, B → C, C → A" forces all three into a closed equivalence class; misreading any single arrow collapses the entire game.

#### Mathematical Limits

With n entities and n slots, the base permutation count is n!. Each "fixed-position" rule divides by (n−k)!; each "adjacent" rule roughly halves the count. Games where the rules reduce valid worlds to fewer than 6 are **fully solvable by enumeration** — skip deduction and brute-force the diagram in under 90 seconds. Games retaining more than ~50 worlds require **template notation** (variable slots) rather than full enumeration.

#### Adjacent Topics and Cross-Game Connections

- **Grouping/Assignment Games** share the *if/only-if/unless* translation table — mastering sequencing transfers directly.
- **Matching Games** layer a second attribute; treat each matching pair as a tagged slot, then apply sequencing rules to the tags.
- **Logic Reasoning conditional arguments** use the identical Q → P reading of "only if"; sequencing practice reinforces LR accuracy.

#### Common Mistakes Catalogue

| Mistake | Why It Fails | Fix |
|---|---|---|
| Reading "only if" as "if" | Inverts the arrow; the contrapositive fails | Memorise: "only if" introduces the **sufficient** condition |
| Locking the first viable entity without testing alternatives | Misses conditional chains that require the *second* candidate | Sketch at least two worlds before committing |
| Treating "cannot both" as "neither" | One of the two is still legal alone | Apply exclusive-or: (P ∨ Q) ∧ ¬(P ∧ Q) |
| Forgetting a new question's *if*-clause | The diagram re-deduces under the new rule | Re-scan every original rule after each new condition |

#### Advanced Practice Prompts

1. Build a 7-entity circular sequencing game with one equivalence-class chain (A ↔ B ↔ C) and one asymmetric anchor. Solve two **must be true** stems and one **could be true** stem without writing a full diagram — use template slots only.
2. Construct a duplicate-spacing rule ("each of two Ps separated by exactly two Qs") on an 8-slot linear frame and determine the maximum number of full arrangements. Compare your count against a brute-force script to calibrate your enumeration estimates.

> 📌 **Formula Check:** Validity of a candidate arrangement requires satisfaction of **every** rule simultaneously; a single violated rule disqualifies the world. Time budget for sequencing games: 8–9 minutes total, or roughly 90 seconds per question.

---

## Continue your study

- **[View this topic in your LSAT India roadmap](/roadmap/?exam=lsat&duration=1mo)** — see where "Sequencing Games" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=lsat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[LSAT India exam overview](/exams/lsat/)** — pattern, eligibility, and syllabus
- **[All Analytical-Reasoning notes](/notes/lsat/analytical-reasoning/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
