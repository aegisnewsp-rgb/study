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

Probability measures how likely an event is, on a scale from 0 to 1, using **P(A) = n(A)/n(S)** where n(A) counts favourable outcomes and n(S) counts all equally likely outcomes. A permutation counts **ordered** arrangements: **P(n,r) = n!/(n−r)!**, where r items are picked from n distinct objects. ECAT typically asks 1–2 MCQs on this topic, almost always a single-formula application.

- **Order matters** in permutations; it does **not** matter in combinations.
- Complement rule: **P(A') = 1 − P(A)**, handy when "at least one" wording appears.
- Independent events multiply: **P(A ∩ B) = P(A)·P(B)**; check independence before multiplying.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Counting Principle
If task 1 can be done in *m* ways and task 2 in *n* ways, both together can be done in *m·n* ways. This principle underlies both permutation counting and probability computations over compound experiments. A tree diagram makes the sample space n(S) visible by multiplying branch choices at each stage.

#### Permutations vs. Combinations
**P(n,r) = n!/(n−r)!** counts ordered arrangements of r objects chosen from n distinct objects, with no repetition. Combinations use **C(n,r) = n!/[r!(n−r)!]**, dividing out the r! ways to reorder each selection. The decisive question: does the problem ask for *arrangements* (use P) or *groups/teams/subsets* (use C)?

#### Probability Axioms in Practice
Use the addition rule **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)** when events can overlap, and simplify to P(A)+P(B) only when they are **mutually exclusive** so P(A ∩ B) = 0. For dependent two-stage experiments, apply conditional probability **P(A|B) = P(A ∩ B)/P(B)** with P(B) > 0.

| Concept | Key point |
| --- | --- |
| Sample space n(S) | All equally likely outcomes of the random experiment |
| Permutation P(n,r) | Ordered selection; n!/(n−r)!; reduces to n! when r = n |
| Mutually exclusive | P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B) |
| Independent events | P(A ∩ B) = P(A)·P(B); verify independence before multiplying |
| Complement rule | P(A') = 1 − P(A); efficient for "at least one" problems |

#### Typical ECAT Pattern
Questions usually test one formula directly: a 3-digit code from 5 digits without repetition (P(5,3) = 60), or "at least one head in three coin tosses" solved via the complement 1 − (1/2)³. Numerical distractors test careless factorial handling.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Traps
Watch for **repetition allowed** wording — if digits may repeat, P(n,r) becomes n^r, not n!/(n−r)!. A common trap: arranging the letters of MONDAY where two letters are identical, which requires dividing by repeated-letter factorials. Conditional probability questions hide the order — read carefully whether P(A|B) or P(B|A) is requested; Bayes' theorem P(A|B) = P(B|A)·P(A)/P(B) reverses the conditioning.

#### Connection to Sequences and Series
Permutation coefficients **P(n,r)** relate directly to falling factorials n(n−1)(n−2)…(n−r+1), which appear in Taylor expansion coefficients and finite-difference formulas. Binomial coefficients C(n,r) = P(n,r)/r! feed the binomial theorem, so mastering this unit strengthens later combinatorics.

#### Worked Micro-Example
A 4-digit PIN is formed from digits 0–9 with no repetition. How many PINs are possible if the first digit cannot be 0?

- First digit: 9 choices (1–9); second: 9 (0 plus the eight unused); third: 8; fourth: 7.
- Total = 9 × 9 × 8 × 7 = 4536.
- Equivalent via P(10,4) − P(9,3) = 5040 − 504 = 4536 ✓.

> **Tip:** When "first position restricted" appears, either branch the cases (leading-zero vs no-zero) or subtract the forbidden count from the unrestricted count.

#### Common Mistakes
1. Using n! instead of n!/(n−r)! when r < n, inflating the answer by r!.
2. Multiplying probabilities without checking independence.
3. Treating "arrange in a row" as a combination problem.

#### Practice Prompts
1. Five cards are drawn at random from a 52-card deck. Find the probability that exactly two are aces using combinations.
2. In how many ways can the letters of LEVEL be arranged? (Account for repeated L's and E's.)

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
