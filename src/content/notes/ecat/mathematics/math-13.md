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
lastUpdated: "2026-09-13"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Probability measures how likely an event is, on a scale from 0 (impossible) to 1 (certain). For an experiment with equally likely outcomes, P(A) = favorable outcomes ÷ total outcomes. A **permutation** counts ordered arrangements of r objects chosen from n distinct objects using P(n,r) = n!/(n−r)!, while a **combination** counts selections where order does not matter.

- ECAT tests this topic through 1–2 MCQs worth 4% of the Mathematics section, usually a counting question plus a basic probability axiom.
- Order matters in permutations: arranging 3 books from 10 gives 10·9·8 = 720, not C(10,3).
- Memorise the complement rule P(A′) = 1 − P(A); it turns "at least one" questions into single subtraction.
- Conditional probability uses P(A|B) = P(A∩B)/P(B); never swap the numerator and denominator.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definitions

The **sample space** S is the set of every possible outcome of a random experiment. An **event** A is any subset of S. When each outcome in S is equally likely, classical probability applies:

$$P(A) = \frac{n(A)}{n(S)}$$

where n(A) counts favorable outcomes and n(S) counts the total sample space. Probability is bounded: 0 ≤ P(A) ≤ 1, and the sum of probabilities of all elementary outcomes equals 1.

#### Counting Principles

The **multiplication principle** states that if task 1 can be done in m ways and task 2 in n ways, both together can be done in m·n ways. A **permutation** counts ordered arrangements: P(n,r) = n!/(n−r)!. A **combination** counts unordered selections: C(n,r) = n!/[r!(n−r)!].

| Concept | Formula | When to Use |
| --- | --- | --- |
| Classical probability | P(A) = n(A)/n(S) | Equally likely outcomes, finite sample space |
| Addition rule | P(A∪B) = P(A) + P(B) − P(A∩B) | "A or B" with possible overlap |
| Independent events | P(A∩B) = P(A)·P(B) | Outcomes of one do not affect the other |
| Conditional probability | P(A\|B) = P(A∩B)/P(B) | "A given B", with P(B) > 0 |
| Complement rule | P(A′) = 1 − P(A) | "At least one" or "not A" problems |

#### ECAT-Specific Patterns

- **MCQ format:** Each item has four options; numerical answers are usually small integers between 0 and 1 for probability, or whole numbers for counting.
- **Word traps:** "How many ways can a committee of 4 be formed?" → combination. "How many ways can 4 people sit in a row?" → permutation.
- **Two-stage experiments** appear as coin-then-die or card-with-replacement questions; apply the multiplication principle directly.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Example

A bag holds 5 red and 3 blue balls. Two balls are drawn without replacement. Find P(both red).

Total outcomes = C(8,2) = 28. Favorable outcomes = C(5,2) = 10. So P(both red) = 10/28 = 5/14 ≈ 0.357.

Notice how "without replacement" forces conditional reasoning: the second draw's probability changes after the first ball is removed. The same problem "with replacement" gives P = (5/8)(5/8) = 25/64, since each draw becomes independent.

#### Common Mistakes and Traps

- **Permutation/combination swap:** Choosing a captain and vice-captain from 11 players is P(11,2) = 110, not C(11,2) = 55, because the two roles are distinguishable.
- **Addition rule omission:** For non-mutually-exclusive events, forgetting to subtract P(A∩B) inflates the answer. Drawing a king or a heart from a deck gives 4/52 + 13/52 − 1/52 = 16/52.
- **Conditional direction:** P(A|B) ≠ P(B|A). A diagnostic test that is 99% accurate on diseased patients gives P(disease|positive) far below 99% when disease prevalence is low — Bayes' theorem recalibrates this.
- **Factorial mishandling:** When computing P(10,4), students sometimes write 10!·4! instead of 10!/6! = 5040. Always expand the numerator until the denominator cancels.

#### Practice Prompts

1. Five cards numbered 1 to 5 are shuffled. Find the probability that card 3 is in the second position.
2. From 6 men and 4 women, in how many ways can a 4-member committee with exactly 2 women be formed?

| Prompt | Answer | Key Step |
| --- | --- | --- |
| 1 | 1/5 | By symmetry, any position holds card 3 with equal chance |
| 2 | 90 | C(4,2)·C(6,2) = 6·15 |

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
