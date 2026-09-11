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
lastUpdated: "2026-09-11"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT Mathematics paper.

Probability quantifies how likely an event is, on a scale from 0 (impossible) to 1 (certain). For equally likely outcomes, **P(A) = favourable outcomes ÷ total outcomes in the sample space**. A permutation counts ordered arrangements of *r* objects chosen from *n* distinct objects using **P(n,r) = n! / (n−r)!**.

- Classical probability range: **0 ≤ P(A) ≤ 1**, with P(A) + P(A′) = 1
- Permutation formula: **P(n,r) = n! / (n−r)!**, where order matters
- For mutually exclusive events: **P(A ∪ B) = P(A) + P(B)**
- For independent events: **P(A ∩ B) = P(A) · P(B)**
- ECAT tip: expect 1–2 MCQs, in most keys a counting question plus one probability computation

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before ECAT.

#### Definitions and the Sample Space

The sample space **S** is the set of every possible outcome of a random experiment. An event **A** is any subset of **S**. Classical probability applies only when each elementary outcome is equally likely — a common ECAT trap is a question worded as if outcomes were equally likely when they are not (e.g. biased coins, loaded dice).

#### The Permutation Formula

A permutation is an ordered selection. The number of ways to arrange *r* distinct objects from a set of *n* is given by **P(n,r) = n! / (n−r)!**, where **n!** denotes n factorial = n × (n−1) × … × 1, and **0! = 1** by definition.

> **Mnemonic:** "Permutation = Position matters". If the question says "in how many orders" or "first, second, third", reach for P(n,r), not C(n,r).

#### Probability Rules to Memorise

| Rule | Formula | When to use |
| --- | --- | --- |
| Complement | P(A′) = 1 − P(A) | "at least one" problems |
| Addition (general) | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | Events not mutually exclusive |
| Addition (mutually exclusive) | P(A ∪ B) = P(A) + P(B) | Events cannot occur together |
| Multiplication (independent) | P(A ∩ B) = P(A) · P(B) | One outcome does not affect the other |
| Conditional | P(A\|B) = P(A ∩ B) / P(B), with P(B) > 0 | Given that B has occurred |

#### Typical ECAT Patterns

- Counting principle: if task 1 has *m* ways and task 2 has *n* ways, both can be done in **m · n** ways. Extend to *k* tasks as a product.
- "How many ways to arrange/distribute/line up" → permutation.
- Drawing cards with or without replacement changes whether events are independent.
- Two-stage problems (e.g. drawing a ball then another) in many papers need conditional probability or a tree diagram.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Subtle Distinctions

Conditional probability is the most heavily tested and most in many papers misapplied idea. **P(A|B) ≠ P(B|A)** in general — confusing the two is the classic ECAT trap. Bayes' theorem reverses the conditioning: **P(A|B) = P(B|A) · P(A) / P(B)**.

Permutations on objects with repetition behave differently. The number of arrangements of *n* objects where some are identical equals **n! / (n₁! · n₂! · … · nₖ!)** — useful for word-arrangement problems.

#### Common Mistakes

| Mistake | Correction |
| --- | --- |
| Using n! instead of n!/(n−r)! | Subtract r from n before dividing |
| Treating "selection" as "arrangement" | Permutations order, combinations do not |
| Adding probabilities without subtracting P(A ∩ B) | Use general addition rule for overlapping events |
| Calling events independent when they share a sample | Check P(A ∩ B) = P(A)·P(B) explicitly |

#### Worked Micro-Example

How many 4-digit PINs can be formed using digits 0–9 if no digit repeats?
Answer uses permutations: **P(10,4) = 10! / 6! = 10 × 9 × 8 × 7 = 5040**.

If a bag contains 3 red and 2 blue balls, the probability of drawing 2 red balls without replacement is **P = (3/5) × (2/4) = 3/10**.

#### Practice Prompts

1. A box has 5 white and 4 black balls. Two balls are drawn without replacement. Find P(both white) and P(at least one black).
2. In how many ways can the letters of the word "KARACHI" be arranged so that vowels occupy the even positions?

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
