---



exam: ncee
examName: NCEE (National Common Entrance Examination)
subject: quant-reasoning
subjectName: Quantitative Reasoning
topic: qr-8
topicName: Ranking and Ordering Problems
weight: 3
country: nigeria
generated: "2026-03-24T08:32:07.593624"
lastUpdated: "2026-07-24"
diagramPrompt: "Educational diagram illustrating Ranking and Ordering Problems with clear labels, white background, exam-style illustration"




---

# Ranking and Ordering Problems

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Ranking and ordering problems ask you to arrange people or objects by a measurable attribute — heights, ages, marks, or weights — using comparative clues such as *taller than*, *older than*, or *ranked above*. The two directions to master are **ascending order** (smallest to largest) and **descending order** (largest to smallest). Position 1 is always the topmost (or largest) value, while the last position is the bottommost.

In a class of N, the link between the two ends is: **rank from the bottom = N − rank from the top + 1**. So 5th from top in a class of 40 equals 36th from bottom. Three skills dominate the NCEE: translating English clues into inequality symbols (>, <, =), using the transitive property (if A > B and B > C, then A > C), and counting positions from either end as the question specifies.

- **Direction matters:** always check whether the question asks rank *from the top* or *from the bottom*.
- **Transitive chaining** is the single most-tested idea; missing one link breaks the whole sequence.
- **Diagram the line:** drawing a top-to-bottom strip turns a wordy puzzle into a glanceable ordering.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Idea

Every ranking puzzle is a comparison graph. Each clue is an edge connecting two items with >, <, or =. The full ranking exists only after every edge has been chained into a single ordered list. NCEE Quantitative Reasoning items in most keys give 4–5 clues for 4–5 people and ask either "who is 2nd from the top?" or "what is X's rank from the bottom?".

#### Translating Clues into Symbols

| Verbal clue | Symbol form |
| --- | --- |
| A is taller than B | A > B |
| C is the shortest | C < all others |
| D is between E and F (with E > F) | E > D > F |
| G ranks third from the top | G = position 3 |
| H and I tie for 1st | H = I at position 1 |

#### Worked Micro-Example

Suppose a class of 6 has these clues: P > Q, Q > R, R > S, T > U, and P > T. Chain them: P > Q > R > S, and P > T > U. Merge by noting P > T but we do not know whether T beats Q — the merged order is **P > T > Q > R > S**, with **U** placed where the chain allows (here, U only beats nothing stated, so U falls below S unless proved otherwise). So the final top-to-bottom order is P, T, Q, R, S, U; S is 5th from the top and therefore 2nd from the bottom (6 − 5 + 1 = 2).

- **Always count from the end the question names** — never assume "top" by default.
- **Mark unknowns explicitly** when a clue does not connect to the main chain.
- **Ties change the count of distinct positions**, so track shared ranks carefully.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Position Conversions

The most expensive trap on NCEE papers is the silent flip between top and bottom rankings. A student who answers "5th" without checking the direction loses the mark even when the chain is correct. Memorise the conversion: **rank-from-bottom = N − rank-from-top + 1**. For N = 40, the table below shows the symmetric pairs.

| Rank from top | Rank from bottom | Sum |
| --- | --- | --- |
| 1 | 40 | 41 |
| 5 | 36 | 41 |
| 10 | 31 | 41 |
| 20 | 21 | 41 |

The sum is always **N + 1**, a useful cross-check during the exam.

#### Ties and "Between" Clues

When two people tie, the wording "A is between B and C" does **not** by itself fix a direction; you still need a separate clue such as B > C to decide which side B occupies. If equality is permitted, the answer set can include two valid orderings, and the question in most keys asks for the option consistent with **all** clues simultaneously — eliminate any choice that contradicts even one clue.

#### Connections and Strategy

Ranking logic feeds directly into seating-arrangement and age-ranking items that share the NCEE Quantitative Reasoning section. A 1–2 question allocation is typical, in most keys as a single MCQ of 2–3 marks, solvable in under 90 seconds once the chain is drawn.

- **Common mistake:** assuming "between" already orders the outer pair.
- **Common mistake:** ignoring the case where two clues force a tie rather than a strict order.
- **Practice prompts:** (1) In a class of 50, a student is 14th from the top — what is her rank from the bottom? (2) Given A > B, C < A, B > C, D < B, place A, B, C, D in descending order.

---

## Continue your study

- **[View this topic in your NCEE (National Common Entrance Examination) roadmap](/roadmap/?exam=ncee&duration=1mo)** — see where "Ranking and Ordering Problems" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ncee&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NCEE (National Common Entrance Examination) exam overview](/exams/ncee/)** — pattern, eligibility, and syllabus
- **[All Quantitative Reasoning notes](/notes/ncee/quant-reasoning/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
