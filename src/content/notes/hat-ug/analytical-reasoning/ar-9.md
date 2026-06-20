---



exam: hat-ug
examName: HAT-UG (HEC Aptitude Test - Undergraduate)
subject: analytical-reasoning
subjectName: Analytical Reasoning
topic: ar-9
topicName: Seating Arrangements
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.002406"
lastUpdated: "2026-06-20"
diagramPrompt: "Educational diagram illustrating Seating Arrangements with clear labels, white background, exam-style illustration"




---

# Seating Arrangements

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Seating Arrangement** problems ask you to place people (sometimes with vacant seats) on a line, circle, or rectangle using direct and indirect clues. The three geometry types you'll meet are **linear**, **circular**, and **rectangular/polygonal**, with persons either **facing the centre** or **facing outside**. The most-tested tricks are the **"second to the left"** phrasing (count two jumps, not one), the **left/right reversal** when people face inward, and the **circular shortcut** that moving *k* places left equals *(n − k)* places right. Always **anchor one person** using the strongest definite clue (e.g., "A sits at the extreme end" or "B sits in the middle"), then build outward. HAT-UG almost always pairs seating with a **blood-relation** sub-clue, so expect chain statements like "the mother of A sits to the left of the father of B."

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Geometry Types

- **Linear row** — *n* persons in a line, all facing the same direction (usually north). "Immediate left" = the seat directly beside; "second to the left" = two seats away.
- **Circular table** — *n* persons around a round table. There is no fixed starting point, so answers are typically given relative to a named anchor. The shortcut **k left = (n − k) right** lets you convert direction without redrawing.
- **Rectangular / polygonal** — persons on the four (or more) sides; vacant seats between people are counted like a circle, and the side of the table determines who faces whom.

#### Facing the Centre vs Facing Outside

This single rule causes more errors than any other: when a person **faces the centre**, their **left is your right** as you read the diagram. Draw a small arrow on top of each person during practice, or rotate the page 180° mentally to convert to the "facing outside" orientation. The same person at the same seat has **opposite left/right** depending on facing direction.

#### Worked Pattern: Six-Person Circular Set

> A, B, C, D, E, F sit around a circle facing the centre. B is second to the left of A. D sits immediately to the right of B. C is opposite A.

1. Fix A anywhere; B goes two jumps counter-clockwise (left) from A.
2. D sits one jump clockwise (right) of B.
3. With six persons, "opposite A" = three jumps either way, so C lands directly across from A.
4. The two remaining seats are filled by E and F; any negative clue (e.g., "E is not adjacent to D") then breaks the tie.

#### Negative and Coded Clues

A **negative clue** ("A is not next to C") **eliminates positions** just as decisively as a positive one — never skip it. **Coded clues** swap names for variables or roles (e.g., "the doctor sits between the engineer and the lawyer") and require a two-pass solve: first fix the people, then map the professions.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Transitive Closure and Sub-Case Branching

**Transitive closure** is the engine of multi-statement problems: if A is to the left of B and B is to the left of C, then A is to the left of C — even when no single clue mentions A and C together. Build a directed graph on scratch paper and check it for chains before committing to a seating chart. When a clue permits two placements (say, an end seat in a linear row), **branch into sub-cases** and propagate each against the remaining clues; one branch will usually violate a negative statement, collapsing the case.

#### Vacant Seats and Counting

Problems that say *"A, B, C, D, E sit in a row of seven seats"* — or *"six persons around a circular table of eight chairs"* — require you to count **gaps**, not persons. Treat each empty chair as a position; the phrase *"three seats to the left of B"* means three chair-shifts, not three person-shifts. A classic HAT-UG trap asks for the seat number of a person; the answer is the *position index*, which depends entirely on whether numbering starts at 1 or 0 and from which end.

#### Edge Cases Worth Memorising

- **Odd-numbered circles have no exact opposite.** With 5 or 7 persons, "opposite A" is impossible — the clue will instead say "second to the left" or specify a relative position.
- **Rectangular tables** have two distinct "opposites": the person directly across (same number on the long side) and the diagonal. Read whether the clue says "facing" or "sitting opposite."
- **Blood-relation fusion** appears in roughly one of every three HAT-UG seating sets; sketch a family tree *first*, assign roles to names, *then* place them.

#### Common Traps

1. Reversing left/right because facing direction was misread.
2. Using *k* jumps when the clue says *immediate*.
3. Forgetting the *(n − k)* circular equivalence.
4. Concluding after the first arrangement without checking that a second valid arrangement exists.

#### Practice Prompts

1. **Eight persons** sit around a circular table facing the centre. P is third to the right of R. Q is second to the left of P. S is opposite R. T sits between Q and U. V is not adjacent to R. W and X occupy the remaining seats. *Who sits exactly opposite T?*
2. **Linear row of seven seats**, A at seat 1, G at seat 7. B sits two seats to the right of C. D is immediately to the left of E. F sits in seat 4. *In how many valid arrangements can the row be completed, and which seat is empty?*

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
