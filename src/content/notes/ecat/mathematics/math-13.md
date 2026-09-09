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
lastUpdated: "2026-09-09"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT Mathematics paper.

Probability measures how likely an event is, from 0 (impossible) to 1 (certain). Permutations count **ordered** arrangements of objects drawn from a larger set, and the two ideas combine whenever you must count favourable outcomes before dividing by total outcomes.

- **Core formula 1:** P(A) = n(A) / n(S), where n(A) is the count of favourable outcomes and n(S) is the size of the sample space.
- **Core formula 2:** P(n, r) = n! / (n − r)!, the number of ways to arrange r distinct objects chosen from n.
- **Core formula 3:** P(A ∪ B) = P(A) + P(B) − P(A ∩ B); for mutually exclusive events P(A ∩ B) = 0.

ECAT tests 1–2 MCQs on this area, almost always a short counting-then-dividing problem. Watch for the **order** in the wording: "arrange" means permutation, "select" or "choose" means combination. Memorise n! up to n = 6 (1, 2, 6, 24, 120, 720) so you avoid arithmetic slips.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students working through the ECAT Mathematics syllabus.

#### Defining Probability on a Finite Sample Space

An **experiment** is any repeatable procedure with a defined set of outcomes. The **sample space** S is the collection of every possible outcome, and an **event** A is any subset of S. The classical definition applies when each outcome is equally likely:

> P(A) = n(A) / n(S),  with 0 ≤ P(A) ≤ 1.

Because S is finite and outcomes are equally likely, every probability problem reduces to a counting problem. If the outcomes are not equally likely (e.g. a loaded die), the classical rule does not apply and you must use frequency or subjective definitions instead.

#### Addition, Complement, and Independence

Three rules handle most two-event MCQs:

| Rule | Formula | When to use |
| --- | --- | --- |
| Complement | P(A′) = 1 − P(A) | Easier to count "not A" than A |
| Addition | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | At least one of A, B occurs |
| Multiplication | P(A ∩ B) = P(A) · P(B) | A and B are independent |

A and B are **mutually exclusive** when they cannot occur together, so P(A ∩ B) = 0 and the addition rule simplifies to P(A) + P(B). Independence, by contrast, means one event's outcome does not shift the other's probability.

#### Conditional Probability and Counting

Conditional probability updates the sample space once you know B has occurred:

> P(A | B) = P(A ∩ B) / P(B),  with P(B) > 0.

A common ECAT trap presents P(A | B) and P(B | A) as interchangeable; they are not. Bayes' theorem, P(A | B) = P(B | A) · P(A) / P(B), is the tool for reversing the conditioning direction.

#### Permutations vs. Combinations

A **permutation** is an ordered arrangement; a **combination** is an unordered selection. The formulas are:

| Concept | Formula | Example |
| --- | --- | --- |
| Permutation of r from n | P(n, r) = n! / (n − r)! | Top 3 finishers from 10 runners |
| Combination of r from n | C(n, r) = n! / [r! (n − r)!] | A committee of 3 from 10 people |

Read the verb in the question: "rank", "schedule", "line up" point to P(n,r), while "choose", "team", "group" point to C(n,r). Use the **multiplication principle** for multi-stage tasks — if stage 1 has m ways and stage 2 has n ways, total ways = m · n.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students targeting a high ECAT Mathematics score.

#### Worked Example — Conditional Probability with Cards

Draw two cards from a standard 52-card deck **without** replacement. Find the probability that both are aces.

- After the first ace, the deck has 51 cards with 3 aces left, so P(second ace | first ace) = 3 / 51 = 1 / 17.
- P(both aces) = P(first ace) · P(second ace | first ace) = (4 / 52) · (3 / 51) = 12 / 2652 = 1 / 221.

Notice the dependency: without replacement, the events are **not** independent, so the multiplication rule P(A ∩ B) = P(A) · P(B) would over-count. With replacement, the same problem gives (4 / 52)² = 1 / 169. Always check whether the sample space changes between draws.

#### Permutation Edge Cases

| Situation | Adjustment | Reason |
| --- | --- | --- |
| Repetition allowed (e.g. codes) | n^r | Each slot independently takes n values |
| Circular arrangements | (n − 1)! | Rotations are equivalent |
| Arrangements with repeated items | n! / (a! b! …) | Swapping identical items produces the same arrangement |
| "At least one" probability | 1 − P(none) | Complement avoids summing multiple cases |

For circular permutations, dividing n! by n is essential; forgetting it inflates the count by a factor of n. For digit-locked codes such as a 4-digit PIN, n = 10 with repetition, so the answer is 10⁴ = 10,000, not P(10, 4) = 5040.

#### Common Mistakes and ECAT Strategy

- Forgetting to subtract P(A ∩ B) when events overlap is the most frequent error in addition-rule questions.
- Computing P(n, r) as n! / r! instead of n! / (n − r)! flips the answer's order of magnitude.
- Treating "at least one" by direct addition leads to lengthy casework; the complement is always shorter.
- ECAT weightage is 4%, so allocate roughly 4 minutes of your 100-minute paper here. Skip if stuck and return — the marks-per-minute return is lower than for calculus-heavy topics.
- **Practice prompts:** (1) Five boys and four girls stand in a row such that no two girls are adjacent — count arrangements. (2) A bag contains 4 red and 6 blue balls; three are drawn without replacement. Find the probability that exactly two are blue.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
