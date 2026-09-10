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
lastUpdated: "2026-09-10"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT Mathematics paper.

Probability measures how likely an event is, written **P(A) = n(A)/n(S)**, where **n(A)** is the number of favorable outcomes and **n(S)** is the size of the sample space. The value always sits between **0** (impossible) and **1** (certain). A permutation counts **ordered** arrangements of **r** objects drawn from **n** distinct objects using **P(n, r) = n! / (n − r)!**, where **!** denotes factorial (e.g. 5! = 5 × 4 × 3 × 2 × 1 = 120).

| Concept | Quick formula |
| --- | --- |
| Classical probability | P(A) = n(A) / n(S) |
| Permutation | P(n, r) = n! / (n − r)! |
| Complement | P(A′) = 1 − P(A) |
| Independent events | P(A ∩ B) = P(A) · P(B) |

- For ECAT, expect **1–2 MCQs** out of the 4% Mathematics quota — usually a counting problem and one probability identity.
- Read the wording: "arrange" or "rank" implies permutation; "select" or "form a group" implies combination.
- Always check whether two events are **mutually exclusive** before adding their probabilities.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before ECAT.

#### Core Definitions

The **sample space S** is the set of every possible outcome of a random experiment, and each outcome is assumed **equally likely** in classical (a priori) probability. When outcomes are not equally likely, probabilities come from frequency data instead. A **permutation** is an ordered selection, so picking {A, B} and {B, A} counts as two different arrangements.

#### Counting Principle and Factorials

If task 1 can be done in **m** ways and task 2 in **n** ways, both can be done in **m × n** ways. Factorials grow fast: 7! = 5040 and 10! = 3 628 800. The permutation formula **P(n, r) = n! / (n − r)!** already embeds this multiplication, since the numerator's first **r** factors collapse onto the ordered positions.

#### The Three Probability Rules

| Rule | Statement | When it applies |
| --- | --- | --- |
| Addition (general) | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | Any two events A, B |
| Addition (mutually exclusive) | P(A ∪ B) = P(A) + P(B) | A ∩ B = ∅ |
| Multiplication (independent) | P(A ∩ B) = P(A) · P(B) | Events do not affect each other |

#### Conditional Probability

The symbol **P(A | B)** reads "probability of A given B" and is computed as **P(A ∩ B) / P(B)**, provided P(B) > 0. ECAT questions often hide a two-stage draw (with or without replacement) inside this idea — without replacement means dependent; with replacement means independent.

- Always draw a small tree diagram for two-stage experiments to avoid double-counting branches.
- Remember the **complement rule** P(A′) = 1 − P(A): it is faster to compute "at least one" by subtracting "none" from 1.
- Watch the wording "and" versus "or" — they map onto intersection (∩) and union (∪) respectively.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline before ECAT.

#### Bayes' Theorem and Reversing the Condition

Bayes' theorem, **P(A | B) = P(B | A) · P(A) / P(B)**, lets you invert a conditional probability. ECAT rarely asks a full Bayes derivation, but it does test the intuition: **P(A | B)** is **not** the same as **P(B | A)**. A classic trap presents a medical-test style scenario where the student must compute the probability of having a condition *given* a positive test, not the probability of a positive test *given* the condition.

#### Permutation Edge Cases

| Variant | Formula | Example |
| --- | --- | --- |
| All n objects, no repetition | n! | Arrange 5 books on a shelf = 120 |
| r from n, no repetition | n! / (n − r)! | Top 3 finishers from 10 runners = 720 |
| With repeated objects | n! / (a! b! c!) | Letters of "MATHEMATICS" = 11! / (2! 3! 2!) |
| Circular arrangement | (n − 1)! | Seating 8 around a round table = 5040 |

For the repeated-objects case, divide by the factorial of each block of identical items to avoid counting indistinguishable swaps.

#### Worked Micro-Example

A bag holds 4 red and 6 blue balls. Two balls are drawn **without** replacement. Find the probability that both are red.
- Total ordered pairs = 10 × 9 = 90. Favorable = 4 × 3 = 12. So **P = 12 / 90 = 2 / 15 ≈ 0.1333**.
- Cross-check via combination: P = C(4,2)/C(10,2) = 6/45 = 2/15. ✓

#### Common Mistakes and Traps

- Treating "arrange" as a combination, giving an answer that is **r!** times too small.
- Adding probabilities for non-mutually-exclusive events and forgetting to subtract P(A ∩ B).
- Using **n!** in place of **(n − r)!** in the permutation denominator, inflating the result by a factor of r!.
- Computing the joint probability of two conditional events by multiplying instead of using the chain rule.

#### Practice Prompts

1. Five engineers sit in a row. In how many ways can they be arranged if the youngest must sit in the middle? (Answer: 4! = 24.)
2. A die is rolled twice. What is the probability that the sum is 7 **or** both rolls show an even number? (Answer: P(sum 7) = 6/36; P(both even) = 9/36; P(both even and sum 7) = 0; total = 15/36 = 5/12.)

#### Exam Strategy for ECAT

- Budget about **45 seconds** per MCQ; probability and permutations items are short so they are good targets for quick points.
- Memorize the four formulas in the Standard tier table; the distractors in MCQs usually hinge on one wrong sign or wrong factorial term.
- If a counting answer runs into the millions, re-read the question — you likely missed a restriction (e.g. "letters must not repeat" or "the two specific people must sit together").

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
