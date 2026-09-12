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
lastUpdated: "2026-09-12"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Probability quantifies how likely an event is, with **P(A) = favourable outcomes / total equally likely outcomes**, bounded between 0 and 1. A **permutation** counts ordered arrangements of r distinct objects chosen from n, computed as **P(n,r) = n! / (n−r)!**. In ECAT, this cluster contributes about 4% of the Mathematics paper, usually appearing as 1–2 standalone MCQs rather than a sub-part of a longer question.

- **Sample space** n(S) lists every possible outcome of the experiment.
- **Mutually exclusive events** share no outcome, so P(A ∩ B) = 0.
- **Complement rule**: P(A′) = 1 − P(A), useful for "at least one" problems.

| Concept | Quick formula |
| --- | --- |
| Classical probability | P(A) = n(A) / n(S) |
| Permutation (ordered) | P(n,r) = n! / (n−r)! |
| Independent events | P(A ∩ B) = P(A) · P(B) |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definitions

A **random experiment** produces outcomes that cannot be predicted individually but follow a known long-run pattern. The set of all possible outcomes is the **sample space** S, and any subset of S is an **event**. When every outcome in S is equally likely, the classical probability formula P(A) = n(A)/n(S) applies directly. A **permutation** is an ordered selection; a **combination** is an unordered selection. The factorial n! = n × (n−1) × … × 1 grows fast, which is why ECAT questions often test small values of n and r.

#### The Three Counting Rules You Must Memorise

The **multiplication principle** says that if task 1 has m outcomes and task 2 has n outcomes, the combined task has m·n outcomes. The **addition principle** is invoked when disjoint alternatives exist. For permutations, nPr = n! / (n−r)! counts arrangements where order matters — for example, the first, second, and third finishers in a race of 10 runners is P(10,3) = 720.

#### Worked Relationship: Addition Rule

For two events that can occur together, **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**. The subtracted term prevents double-counting the overlap. When A and B are mutually exclusive, P(A ∩ B) = 0 and the rule simplifies to a plain sum.

- **Conditional probability** P(A|B) = P(A ∩ B) / P(B) requires P(B) > 0.
- **Independent events** satisfy P(A ∩ B) = P(A) · P(B); equivalently, P(A|B) = P(A).
- **Complement trick**: "at least one" problems collapse to 1 − P(none).

| Rule | When to apply | Formula |
| --- | --- | --- |
| Multiplication | Sequential independent choices | Total = m × n |
| Addition (general) | Overlapping events allowed | P(A) + P(B) − P(A ∩ B) |
| Addition (disjoint) | Mutually exclusive events | P(A) + P(B) |
| Permutation | Order matters | n! / (n−r)! |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Bayes' Theorem and Two-Stage Experiments

When an event B partitions the sample space into stages, **Bayes' theorem** updates the probability of a cause A given that B has occurred:

**P(A|B) = [P(B|A) · P(A)] / P(B)**, where P(B) = P(B|A)P(A) + P(B|A′)P(A′).

ECAT rarely asks the full formula, but a 2-stage tree problem (drawing a card then a ball) is fair game. Build a tree diagram, fill in branch probabilities, and multiply along the path you want.

#### Edge Cases and Counting Traps

The expression "arrangements of the word KARACHI" hides repeated letters; using P(7,7) = 5040 overcounts because the two A's are interchangeable, giving 5040/2! = 2520 distinct arrangements. Another common trap is treating "select a team of 3 from 11" as P(11,3) = 990 instead of the combination C(11,3) = 165 — order does not matter in a team.

#### Common Mistakes (ECAT-Specific)

- Substituting P(B|A) for P(A|B) in conditional questions.
- Multiplying probabilities when events are mutually exclusive instead of adding.
- Forgetting to subtract r! when arranging objects with identical elements.
- Writing n! in the denominator of P(n,r) instead of (n−r)!.

| Scenario | Use this | Not this |
| --- | --- | --- |
| Top 3 ranks from 20 | P(20,3) | C(20,3) |
| Committee of 4 from 12 | C(12,4) | P(12,4) |
| Letters of "LEVEL" | 5! / 2!2! | 5! |
| "At least one" success | 1 − P(none) | Direct enumeration |

#### Practice Prompts

1. A bag holds 4 red and 6 blue balls. Two balls are drawn without replacement. Find P(both red) and P(at least one red).
2. How many 4-digit PINs from digits 0–9 contain no repeated digit? Answer using P(10,4) = 5040, then subtract cases starting with 0.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
