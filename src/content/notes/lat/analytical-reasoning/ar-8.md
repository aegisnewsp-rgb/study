---
exam: lat
examName: LAT (Law Admission Test)
subject: analytical-reasoning
subjectName: Analytical Reasoning
topic: ar-8
topicName: Seating Arrangements
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.023509"
lastUpdated: "2026-09-08"
diagramPrompt: "Educational diagram illustrating Seating Arrangements with clear labels, white background, exam-style illustration"

---

# Seating Arrangements

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Seating Arrangements tests your ability to reconstruct a configuration of people (or objects) from verbal clues about positions, neighbours, and relative order. LAT examiners use three formats: a **linear row** (single line, facing North or South), a **circular table** (facing centre or facing outside), and a **rectangular table** (two opposite rows of seats).

The two core counts you must memorise:

- Linear arrangements of *n* distinct people: **n!**
- Circular arrangements of *n* distinct people: **(n−1)!**, because rotating the whole circle produces the same seating

Always fix one person as a reference before placing anyone else on a circular table. "Between" means two simultaneous neighbour constraints, so treat the three people as a block. In LAT, 1–3 MCQs of this type usually carry 4% of the Analytical Reasoning score and reward systematic clue-decoding.

| Format | Count formula | Working rule |
| --- | --- | --- |
| Linear row | n! | First seat extreme, then fill inward |
| Circular table | (n−1)! | Fix one reference person, then arrange the rest |
| Rectangular table | (2n)! | Treat each side as a separate linear row |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Clue Types You Will Meet

Each verbal clue collapses into one of three positional statements: an absolute fix ("A sits at the extreme left"), a relative order ("B is to the right of C"), or a neighbour relation ("D sits next to E"). Negative clues ("F is not adjacent to G") eliminate, never place, so use them last to avoid contradictions. Conditional clues ("If H is at an end, then I sits beside H") only activate under one branch, so do not treat them as fixed placements across all cases.

#### Linear Row Mechanics

For a single row of *n* seats facing North, the conventional reading order places seat 1 at the left extreme. When the row faces South, every left/right clue inverts because the sitter's perspective flips. A common LAT trap hides this inversion in the second or third clue, after you have already built the diagram facing North.

#### Circular Table Mechanics

> Fix one person at the top of the circle before placing anyone else — this single step removes rotational ambiguity and converts the problem into a linear arrangement.

For *n* people around a circle, there are (n−1)! arrangements when rotations are identical but reflections are distinct, and (n−1)!/2 when reflections are also identical. Facing-centre circles reverse left/right relative to facing-outside circles, because the sitter's left hand points clockwise when facing the centre.

#### Standard Problem Pattern

LAT papers typically present 5–8 people with 4–6 mixed clues, then ask 2–3 sub-questions about who sits where, who is adjacent to whom, or how many valid arrangements exist.

#### Common Mistakes

- Placing the first named person at the extreme left by reflex, then discovering a later clue contradicts that assumption.
- Ignoring "between" as a double neighbour relation and treating it as a single constraint.
- Counting clockwise and anticlockwise circular arrangements as distinct when the problem treats rotations as the same configuration.

| Clue | What it really means |
| --- | --- |
| "A is between B and C" | A's two neighbours are B and C; place A as a block centre |
| "D sits second to the left of E" | Count two seats counter-clockwise from E on a facing-centre circle |
| "F is not at either end" | F occupies one of the middle (n−2) seats |
| "Either G or H sits at the extreme right" | Two-case branch; solve each separately |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases That Decide Top Ranks

Rectangular tables combine two linear rows, so the total count before clue filtering is (2n)! where *n* is seats per side. Opposite-side seating problems hide a directional trap: clues about "across from" ignore the facing direction of each row, while clues about "to the left of" do not. Double-row arrangements (such as a cinema with a front row and back row) usually require you to track two parallel linear orders plus cross-row constraints like "the person in row 1, seat 3 sits directly in front of the person in row 2, seat 3".

When the question asks "how many valid arrangements satisfy all clues," build a case tree rather than trusting a single closed-form count. Start with the most constraining absolute fix, branch on each conditional clue, and prune any branch where a negative clue is violated. The final answer is the sum of valid leaf branches.

#### Worked Micro-Example

Six people A, B, C, D, E, F sit around a circular table facing the centre. Clues: (1) B sits immediately to the left of A; (2) D is opposite A; (3) C does not sit next to F; (4) E sits second to the right of B.

Fix A at the top of the circle to remove rotation. B is immediately to A's left, so B occupies the seat one step clockwise from A (because facing-centre reverses left/right from the observer's view). D sits opposite A, so D takes the bottom seat. E is two steps counter-clockwise from B (second to B's right on a facing-centre circle). That leaves C and F for the two remaining seats; clue (3) forces C opposite E and F opposite B. Exactly one valid configuration exists.

#### Adjacent Topics

Seating Arrangements shares decoding logic with **Blood Relations** (chain mapping) and **Coding-Decoding** (positional symbols). Strong clue-decoding transfers directly to **Scheduling and Sequencing** problems where time slots replace seats.

#### Practice Prompts

1. Eight people sit in a row facing North. P is fourth from the left, Q sits at an extreme end, R is immediately to Q's right, and S is not adjacent to P. How many valid arrangements satisfy these clues?
2. Seven diplomats sit around a circular table facing the centre. The Russian delegate sits opposite the Chinese delegate, and the American delegate is two seats to the left of the French delegate. If rotations are treated as the same arrangement, how many seatings satisfy all stated clues?

| Strategy | Why it helps on LAT |
| --- | --- |
| Fix one reference person first | Removes the ambiguity that wastes the most time |
| Write every clue as a diagram symbol before placing | Prevents mid-diagram contradictions |
| Solve conditional clues last, in branches | Avoids over-committing to one case |
| Re-read the question stem for "facing" direction | Catches the highest-frequency inversion trap |

---

## Continue your study

- **[View this topic in your LAT (Law Admission Test) roadmap](/roadmap/?exam=lat&duration=1mo)** — see where "Seating Arrangements" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=lat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[LAT (Law Admission Test) exam overview](/exams/lat/)** — pattern, eligibility, and syllabus
- **[All Analytical Reasoning notes](/notes/lat/analytical-reasoning/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
