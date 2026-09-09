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
> Rapid summary for last-minute revision before your ECAT Mathematics slot.

Probability measures how likely an event is, written **P(A) = n(A) / n(S)**, where n(A) counts favourable outcomes and n(S) counts every equally likely outcome in the sample space. The value always sits between 0 and 1.

A **permutation** counts ordered arrangements of r objects chosen from n distinct objects, using **P(n, r) = n! / (n − r)!**. A combination counts unordered selections and uses the binomial form.

- **Order matters** → use permutations; **order irrelevant** → use combinations.
- For two events A and B: **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**.
- If A and B are independent, **P(A ∩ B) = P(A) · P(B)**.
- Complement rule: **P(A′) = 1 − P(A)**.

ECAT weight is roughly 4%, so expect 1–2 MCQs. Practise translating worded questions into counting problems.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before the ECAT.

#### Core Definitions

The **sample space** S is the set of every possible outcome of a random experiment. An **event** A is any subset of S. Probabilities follow the classical definition P(A) = n(A) / n(S), valid only when each outcome in S is equally likely. The range 0 ≤ P(A) ≤ 1 follows from the axioms Kolmogorov formalised, and P(S) = 1 always holds.

#### Permutation Formula

For r distinct objects chosen from n in a definite order, P(n, r) = n! / (n − r)!. When r = n, this collapses to n!, the number of arrangements of all objects. Factorials grow fast: 5! = 120, 7! = 5040.

#### The Two Key Probability Rules

| Concept | Formula | When to apply |
| --- | --- | --- |
| Addition rule | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | A or B can occur; subtract overlap if not mutually exclusive |
| Multiplication rule | P(A ∩ B) = P(A) · P(B) | A and B are independent events |
| Conditional | P(A \| B) = P(A ∩ B) / P(B), P(B) > 0 | Probability of A given B has occurred |
| Complement | P(A′) = 1 − P(A) | Easier to count what does NOT happen |

- Mutually exclusive events force P(A ∩ B) = 0, simplifying the addition rule to P(A) + P(B).
- The multiplication principle: m ways for task 1 and n ways for task 2 give m · n total ways.
- Tree diagrams enumerate compound sample spaces cleanly for two-stage experiments.

#### Exam Pattern

ECAT poses 1–2 MCQs at FSc/Pre-Engineering level. Common formats: "In how many ways can a word be rearranged?", "What is the probability that at least one event occurs?" and "Given P(A) and P(A ∩ B), find P(B | A)."

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Counting Principle and Factorials

Every counting problem starts with the **fundamental counting principle**: if a first choice has m options and a second has n, there are m · n joint options. Permutations extend this by restricting selections without replacement. P(n, r) = n · (n − 1) · (n − 2) · … · (n − r + 1) is the expanded form, useful when (n − r)! stays in the denominator and avoids overflow.

#### Conditional Probability and Bayes

P(A|B) = P(A ∩ B) / P(B) updates the probability of A once B is known. Bayes' theorem, P(A|B) = P(B|A)·P(A) / P(B), reverses conditioning. ECAT rarely asks Bayes directly, but conditional probability appears in card, dice, and bag-without-replacement MCQs.

#### Common Mistakes

- Counting arrangements as combinations, losing the order factor r!.
- Treating dependent events as independent, misapplying P(A ∩ B) = P(A)·P(B).
- Confusing P(A|B) with P(B|A); the conditioning event changes the sample space.
- Forgetting the complement trick: "at least one" problems become 1 − P(none).
- Dividing by n! instead of (n − r)! in P(n, r).

#### Worked Micro-Example

How many 3-digit codes can be formed from digits 1–6 without repetition? P(6, 3) = 6!/(6−3)! = 6·5·4 = 120. If a random code is chosen, the probability it starts with 6 is 5·4 / 120 = 20/120 = 1/6.

#### Practice Prompts

1. A bag holds 4 red and 6 blue balls. Two are drawn without replacement. Find P(both red) and P(at least one red).
2. The word "CAMP" is rearranged. How many arrangements exist, and in how many do the vowels stay together?

| Strategy | Payoff |
| --- | --- |
| Spot "order matters" cues | Avoids permutation–combination mix-ups |
| Use the complement on "at least one" | Cuts multi-branch calculation in half |
| Write the sample space explicitly | Catches hidden dependence between events |

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
