---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-13
topicName: Probability and Permutations
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.070666"
lastUpdated: "2026-09-14"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Probability** quantifies how likely an event is, calculated as P(A) = n(A)/n(S), where n(A) counts favorable outcomes and n(S) counts all equally likely outcomes in the sample space. Values sit between 0 (impossible) and 1 (certain). A **permutation** counts ordered arrangements of r objects chosen from n distinct items, given by P(n,r) = n!/(n−r)!. The key distinction: permutations care about order, combinations do not.

- **Counting principle**: if task 1 has m ways and task 2 has n ways, both together have m·n ways.
- **Complement rule**: P(A′) = 1 − P(A) — fastest path to "at least one" problems.
- **Independence**: P(A ∩ B) = P(A)·P(B) only when A and B do not influence each other.

ECAT tests 1–2 MCQs here; expect a single-stage counting question plus one probability axiom application.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Probability Rules

Probability rests on three axioms due to Kolmogorov: P(A) ≥ 0, P(S) = 1, and additivity over disjoint events. From these flow the formulas you will use in ECAT. The **addition rule** handles "or" questions: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). When A and B are mutually exclusive, P(A ∩ B) = 0 and the formula simplifies to a sum.

The **multiplication rule** handles "and" questions. For independent events, P(A ∩ B) = P(A)·P(B). For dependent events, P(A ∩ B) = P(A)·P(B|A). The conditional probability P(A|B) = P(A ∩ B)/P(B) tells you the chance of A once B has occurred.

#### Permutation Mechanics

A permutation of r objects from n distinct objects is P(n,r) = n!/(n−r)!. The factorial n! = n × (n−1) × … × 1 grows fast: 5! = 120, 7! = 5040. Watch the denominator: it is (n−r)!, not r! — that swap signals a confusion with combinations C(n,r) = n!/[r!(n−r)!].

#### Typical Exam Patterns

| Pattern | Approach | Trap to avoid |
| --- | --- | --- |
| "In how many ways can…" | Identify if order matters → use P(n,r) | Mixing up r and n−r in factorial |
| "Probability of A or B" | Apply addition rule | Forgetting to subtract P(A ∩ B) |
| "At least one" success | Use complement: 1 − P(none) | Computing P(success) directly, which overcounts |
| "Given that B occurred" | Switch to P(A\|B) | Using P(B\|A) by mistake |

- Treat each compound experiment with a tree diagram; branch probabilities multiply, leaf probabilities sum.
- Convert "without replacement" wording into sequential dependent events.
- ECAT MCQs usually sit at the FSc/Pre-Engineering level — three significant figures is enough precision.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Bayes' Theorem and Conditional Probability

When you must reverse a conditional probability, apply **Bayes' theorem**: P(A|B) = [P(B|A)·P(A)] / P(B). ECAT rarely asks Bayes directly, but the same machinery underwrites conditional-probability MCQs. Two-stage experiments (draw two cards, toss two coins, inspect two components) almost always want either the joint probability or the conditional probability at the second stage, where the sample space has shrunk because of the first outcome.

#### Edge Cases and Counting Principles

Permutations over repeated objects use n!/(n₁!·n₂!·…), which arises in arranging letters of words like "MISSISSIPPI". Circular permutations, where rotations count as identical, use (n−1)!. When a problem says "arrangements of n people in a row", use n!; when it says "around a round table", use (n−1)!.

#### Worked Micro-Example

A bag holds 5 red and 3 blue balls. Two balls are drawn without replacement. Find P(both red).

- Total ways to draw 2 from 8: C(8,2) = 28.
- Favorable ways: C(5,2) = 10.
- P(both red) = 10/28 = 5/14 ≈ 0.357.

Alternatively, sequential: P(1st red)·P(2nd red | 1st red) = (5/8)·(4/7) = 20/56 = 5/14. Same answer — confirming the multiplication rule for dependent events.

#### Common Mistakes and Exam Strategy

1. Treating "arrange" as a combination when order actually distinguishes seats, ranks, or positions.
2. Writing P(A|B) when the question demands P(B|A) — the denominator changes.
3. Assuming independence in without-replacement draws; the first draw shrinks the population.

| Mistake | Correct approach |
| --- | --- |
| Using n! for permutations of r from n | Use n!/(n−r)! |
| Adding probabilities without subtracting overlap | Subtract P(A ∩ B) unless events are mutually exclusive |
| Computing (n−r)! in the numerator | Numerator stays n!; only denominator changes |

**Practice prompts**: (1) How many 4-digit codes from digits 0–9 with no repetition? (Answer uses P(10,4) = 5040.) (2) P(at least one head in 3 fair tosses) = 1 − (1/2)³ = 7/8.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
