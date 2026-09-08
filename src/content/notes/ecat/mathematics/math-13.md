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
lastUpdated: "2026-09-08"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Probability quantifies how likely an event is, calculated as **P(A) = n(A)/n(S)**, where n(A) is the number of favorable outcomes and n(S) is the total number of equally likely outcomes in the sample space. The value always sits between 0 and 1, where 0 means impossible and 1 means certain.

A **permutation** counts ordered arrangements of *r* distinct objects chosen from *n*, given by **P(n, r) = n!/(n − r)!**. Order matters in permutations, unlike combinations where it does not. ECAT tests 1–2 MCQs from this 4%-weighted area, so mastering the two formulas above plus the complement rule **P(A′) = 1 − P(A)** covers most marks.

- **Multiplication principle:** if task 1 can be done in *m* ways and task 2 in *n* ways, both together can be done in *m · n* ways.
- **Complement trick:** for "at least one" problems, compute P(none) and subtract from 1.
- **Order test:** if the wording says "arrange" or "rank", use permutation; if it says "select" or "choose", suspect combination.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definitions and Sample Spaces

The **sample space S** is the set of every possible outcome of a random experiment. An **event A** is any subset of S. When every outcome in S is equally likely, classical probability applies: P(A) = n(A)/n(S). For example, rolling a fair die gives S = {1,2,3,4,5,6} with n(S) = 6, so P(rolling an even number) = 3/6 = 0.5.

#### Permutation Formula and Counting Principle

A **permutation** P(n, r) counts the number of ways to arrange *r* objects selected from *n* distinct objects, where the sequence matters. The formula P(n, r) = n!/(n − r)! comes from filling *r* slots with *n* choices for the first, *n − 1* for the second, and so on. The **multiplication principle** generalises this: if independent choices yield *n₁, n₂, …, nₖ* options, the total arrangements equal their product.

#### Addition, Multiplication, and Conditional Rules

| Rule | When to apply | Formula |
| --- | --- | --- |
| Complement | "Not A" or "at least one" problems | P(A′) = 1 − P(A) |
| Addition | A or B occurring | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) |
| Multiplication | Independent A and B | P(A ∩ B) = P(A) · P(B) |
| Conditional | Probability of A given B has happened | P(A \| B) = P(A ∩ B)/P(B) |

#### Worked Example

A bag holds 5 red and 3 blue balls. Two balls are drawn without replacement. Find the probability both are red. P(1st red) = 5/8, P(2nd red \| 1st red) = 4/7, so P(both red) = (5/8)(4/7) = 20/56 = **5/14**.

- **Permutation vs combination:** "In how many ways can 3 students sit on 3 chairs from a class of 10?" → P(10,3) = 720.
- **Factorial growth:** 5! = 120, 6! = 720 — watch the denominator n − r when r is small.
- **ECAT trap:** the question stem often hides "without replacement" — violating independence drops marks immediately.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Bayes' Theorem and Two-Stage Experiments

Bayes' theorem reverses conditional probability: **P(A|B) = P(B|A) · P(A)/P(B)**. ECAT occasionally frames a two-stage draw (e.g., defective bulbs from two machines) where the prior probability P(A) feeds into the posterior P(A|B). Compute the total P(B) using the **law of total probability**: P(B) = P(B|A)·P(A) + P(B|A′)·P(A′).

#### Mutually Exclusive vs Independent Events

These terms are not synonyms. **Mutually exclusive** events cannot occur together, so P(A ∩ B) = 0. **Independent** events satisfy P(A ∩ B) = P(A)·P(B). Two mutually exclusive events with non-zero probability are *never* independent. ECAT tests this distinction directly through negation traps.

#### Practice Prompts

1. A 4-digit PIN is formed using digits 0–9 with no repetition. How many PINs are even and greater than 5000? *(Hint: fix the thousands digit first, then count using P(9,3) with parity constraint.)*
2. Two cards are drawn from a standard 52-card deck without replacement. What is the probability the second card is a king given the first was a king? *(Answer: 3/51.)*

#### Common Mistakes

| Mistake | Correction |
| --- | --- |
| Using C(n,r) where P(n,r) is required | Check whether order matters in the wording |
| Dropping the n! term | P(n,r) needs numerator n!, not just (n−r)! |
| Forgetting the overlap term in addition rule | Always subtract P(A ∩ B) unless events are mutually exclusive |
| Computing P(A\|B) as P(B\|A) | Bayes' theorem converts the direction explicitly |

- **Strategic note:** probability + permutations is a 4% slice, so budget 4–5 minutes per MCQ; skip and return if stuck.
- **Formula sheet habit:** write P(n,r) = n!/(n−r)! at the top of your rough work before reading the question.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
