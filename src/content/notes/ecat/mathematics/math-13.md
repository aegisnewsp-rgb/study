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

Probability measures how likely an event is, on a scale from 0 to 1. The classical formula counts favourable outcomes over the size of the sample space. A permutation counts **ordered** arrangements of *r* objects drawn from *n* distinct objects.

- **Core formula:** P(A) = n(A) / n(S), where n(A) = favourable outcomes, n(S) = total equally likely outcomes.
- **Permutation:** P(n, r) = n! / (n − r)!, always an integer ≥ 1.
- **Complement rule:** P(A′) = 1 − P(A); use this when "at least one" problems feel messy.
- **Independence:** P(A ∩ B) = P(A) · P(B) only when A and B do not affect each other.
- ECAT Mathematics dedicates **4%** of marks to this topic, usually **1–2 MCQs** testing counting principles or a single conditional-probability calculation.

| Term | One-line definition |
| --- | --- |
| Sample space | Set of every possible outcome of the experiment, denoted S. |
| Permutation | Ordered selection: P(n,r) = n! / (n−r)!. |
| Complement | P(A′) = 1 − P(A), the chance that A does not occur. |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before ECAT.

#### Classical Probability and the Sample Space
An experiment's **sample space** S lists every equally likely outcome. For a single die, S = {1, 2, 3, 4, 5, 6} so n(S) = 6. The event "rolling a 4" has n(A) = 1, giving P(A) = 1/6. Every probability must satisfy 0 ≤ P(A) ≤ 1; outside this range, the calculation is wrong somewhere upstream.

#### Permutation Formula and Counting Principle
P(n, r) = n! / (n − r)! counts arrangements where **order matters**. Drawing 3 winners from 12 in 1st, 2nd, 3rd place yields P(12, 3) = 12 · 11 · 10 = 1320. The **multiplication principle** says: if task 1 has *m* ways and task 2 has *n* ways, together they have m · n ways — this is the engine behind factorial growth.

#### Addition, Multiplication and Conditional Rules
- Addition rule: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).
- Multiplication rule (independent): P(A ∩ B) = P(A) · P(B).
- Conditional: P(A | B) = P(A ∩ B) / P(B), defined only when P(B) > 0.

#### How ECAT Frames These Questions
UET Lahore's ECAT typically gives short MCQs (often 1 mark each) requiring a numeric answer with no calculator trickery. Watch the wording: "arrange" means permutation, "select" or "choose" means combination.

| Scenario | Rule to apply |
| --- | --- |
| "At least one head in 3 tosses" | Complement: 1 − P(no heads). |
| Two dice, find sum = 7 | Count pairs: favourable = 6, n(S) = 36. |
| Arrange 5 books on a shelf | P(5, 5) = 5! = 120. |
| Pick a team from 11 players | Combination, not permutation. |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline before ECAT.

#### Bayes' Theorem and Two-Stage Experiments
When P(A | B) is known but you need P(B | A), swap using Bayes' theorem: P(B | A) = P(A | B) · P(B) / P(A). ECAT occasionally tests this through a two-stage draw or a defective-item scenario. Compute P(A) via the law of total probability first: P(A) = P(A | B₁) · P(B₁) + P(A | B₂) · P(B₂).

#### Edge Cases That Trip Up Students
- **"At least one" problems** collapse into clean complements: P(at least one) = 1 − P(none).
- **Permutations with repetition** use n! / (n₁! · n₂! · …) — e.g., arranging the letters of KARACHI where A repeats.
- **Conditional ≠ independent.** Drawing without replacement makes events dependent: P(B | A) ≠ P(B).

#### Common Mistakes
- Dividing by n! instead of (n − r)! when computing P(n, r) — gives a fraction, not an integer.
- Forgetting the overlap term in the addition rule for non-mutually-exclusive events.
- Treating "select a committee" as a permutation — committees are unordered.
- Confusing P(A | B) with P(B | A); the conditioning event sits in the denominator.

#### Worked Micro-Example
A bag holds 4 red and 6 blue marbles. Two marbles are drawn **without** replacement. Find P(both red).
P(1st red) = 4/10, P(2nd red | 1st red) = 3/9, so P(both red) = (4/10) · (3/9) = 12/90 = 2/15.

#### Practice Prompts
1. From 8 men and 5 women, form a 5-person committee with exactly 2 women. Find the number of ways.
2. Two cards are drawn from a standard 52-card deck without replacement. Find P(both aces).

| Concept | Exam trap |
| --- | --- |
| P(A ∩ B) = P(A)·P(B) | Only valid when A, B are independent. |
| P(A ∪ B) formula | Subtract P(A ∩ B) unless events are mutually exclusive. |
| P(n, r) vs C(n, r) | "Arrange/order" → permutation; "choose/group" → combination. |
| Conditional probability | Denominator must be P(B), not P(A). |

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
