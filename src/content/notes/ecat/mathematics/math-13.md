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
lastUpdated: "2026-09-15"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Probability quantifies how likely an event is, measured on a scale from 0 (impossible) to 1 (certain). Permutations count the ordered arrangements of objects chosen from a larger set, distinguished from combinations where order is irrelevant.

- **Sample space (S):** the set of all equally likely outcomes of a random experiment; total count = n(S).
- **Event (A):** a subset of S; favourable count = n(A).
- **Probability of A:** P(A) = n(A) / n(S), dimensionless, range [0, 1].
- **Complement rule:** P(A′) = 1 − P(A).
- **Permutation of r from n:** P(n, r) = n! / (n − r)!.
- **Combination of r from n:** C(n, r) = n! / [r!(n − r)!].

| Quantity | Formula | Variables & Units |
|---|---|---|
| Classical probability | P(A) = n(A) / n(S) | n(A), n(S) are dimensionless counts |
| Permutation | P(n, r) = n! / (n − r)! | n = total distinct objects, r = positions filled, both dimensionless integers |
| Combination | C(n, r) = n! / [r!(n − r)!] | n, r dimensionless; factorials grow factorially |
| Complement | P(A′) = 1 − P(A) | P(A) dimensionless |

> 💡 **High-Yield Memory Hook:** **"ORDER = PERMUTATION, NO-ORDER = COMBINATION"** — if the problem says "arrange", "seat", "rank", or "first–second–third", use P(n,r); if it says "select", "choose", or "form a committee", divide by r! and use C(n,r). For two events, remember **"P(A∪B) = P(A) + P(B) − P(A∩B)"** — the subtraction step catches students who forget the overlap.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Probability Axioms and Rules

Probability rests on three Kolmogorov axioms: P(A) ≥ 0, P(S) = 1, and additivity over mutually exclusive events. From these, every working rule is derived. The addition rule for two events is **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**; for mutually exclusive events, the intersection P(A ∩ B) = 0 collapses the rule to P(A ∪ B) = P(A) + P(B). The multiplication rule states **P(A ∩ B) = P(A) · P(B)** only when A and B are independent; otherwise it becomes P(A ∩ B) = P(A) · P(B | A). Conditional probability is **P(A | B) = P(A ∩ B) / P(B)**, valid only when P(B) > 0.

ECAT typically tests these rules in single-step MCQs: compute a complement, recognise mutually exclusive flags, or apply conditional probability from a two-stage tree diagram (e.g., drawing one ball then another without replacement).

#### Counting Principle and Permutations

The fundamental counting principle says: if task 1 can be done in m ways and task 2 in n ways, both together have m · n ways. This extends to k tasks. An ordered selection of r objects from n distinct objects without repetition gives P(n, r) = n! / (n − r)!. When repetition is allowed, each of the r positions has n choices, yielding n^r arrangements.

#### Permutation vs Combination Matrix

| Feature | Permutation P(n, r) | Combination C(n, r) |
|---|---|---|
| Order matters? | Yes (arrangements, rankings) | No (selections, groups) |
| Formula | n! / (n − r)! | n! / [r! (n − r)!] |
| Typical wording | "How many ways to arrange / rank / seat" | "How many ways to select / choose / form a committee" |
| Reduces to | n! when r = n | 1 when r = 0 or r = n |
| Repeats allowed? | Often no; if yes, use n^r | Repetition meaningless for sets |

#### 🎯 Exam-Level Worked Problem

**Question:** A bag contains 5 red and 3 blue balls. Two balls are drawn at random **without replacement**. What is the probability that both balls are red?

#### Solution:
- Total balls: n(S) = 8. P(R₁) = 5/8.
- After one red removed: 4 red remain out of 7. P(R₂ | R₁) = 4/7.
- Joint probability (dependent events): P(R₁ ∩ R₂) = P(R₁) · P(R₂ | R₁) = (5/8) × (4/7) = 20/56 = **5/14**.

Alternative combinatorial route: P(both red) = C(5,2) / C(8,2) = 10 / 28 = 5/14. Both routes agree.

> ⚠️ **Examiner Trap:** Many students write (5/8) × (5/8) = 25/64, treating the draws as independent. The draw is **without replacement**, so the events are dependent — the denominator shrinks from 8 to 7 after the first draw. Always check the wording: "with replacement" → independent; "without replacement" → conditional.

#### Independent vs Mutually Exclusive

These two terms confuse most candidates.

| Property | Independent | Mutually Exclusive |
|---|---|---|
| Definition | P(A ∩ B) = P(A) · P(B) | P(A ∩ B) = 0 |
| Implies the other? | No — if P(A), P(B) > 0, independent events cannot be mutually exclusive | No — disjoint events with P(A)+P(B)<1 are not independent |
| Effect on addition rule | No simplification | P(A ∪ B) = P(A) + P(B) |
| Common phrasing | "drawn with replacement", "spins of a fair die" | "either A or B occurs, never both" |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

The factorial n! is undefined for n < 0, so P(n, r) requires n ≥ r ≥ 0. ECAT questions rarely use negative inputs, but the boundary r = 0 yielding 1 (the empty arrangement) and r = n yielding n! (full permutations) appear in assertion-reason stems. Another boundary: P(A | B) is undefined when P(B) = 0 — a frequent distractor when an event has zero probability (e.g., rolling a 7 on a standard die).

When r = n, P(n, n) = n! and C(n, n) = 1. When repetition is allowed in permutations of length r from n symbols, the count rises to n^r, an exponential growth pattern rather than factorial. The identity P(n, r) = r! · C(n, r) holds always, which lets a student switch between ordered and unordered counts by multiplying or dividing by r!.

#### Common Mistakes and Misapplications

1. **Forgetting the overlap term** in P(A ∪ B) = P(A) + P(B) − P(A ∩ B). If "at least one" appears, the complement P(A′ ∩ B′) = 1 − P(A ∪ B) is often faster.
2. **Misreading "and" as independent.** In a deck-of-cards draw without replacement, "ace and king" means joint probability with conditional logic, not a product of marginals.
3. **Confusing C(n, r) with C(r, n).** Always place the larger set as n; C(5, 3) ≠ C(3, 5) numerically but both equal 10 — symmetry C(n, r) = C(n, n − r) catches students off guard.
4. **Dropping r in the denominator.** Writing n! / (n − r)! when the problem clearly requires a group, not an arrangement.
5. **Assuming Bayes without prior.** Bayes' theorem P(A | B) = P(B | A) · P(A) / P(B) requires known priors; ECAT questions sometimes supply a 2 × 2 table from which the prior is read directly.

#### Advanced Practice Prompts

1. **Conditional chain:** From a standard deck, two cards are drawn without replacement. Compute P(2nd card is an ace | 1st card is an ace), then P(both aces). Verify that P(both) = P(1st ace) · P(2nd ace | 1st ace) = (4/52) × (3/51) = 1/221.
2. **Permutation word problem:** How many 4-letter "words" (allowing nonsense) can be formed from the letters of "KARACHI" if letters must be distinct? Total distinct letters = 6 (K, A, R, C, H, I), so answer is P(6, 4) = 6! / 2! = 360.

#### Exam Strategy Specific to ECAT

ECAT's Mathematics paper carries about 4% weightage on this cluster — usually 1 to 2 MCQs out of 100. The UET Lahore pattern limits each question to roughly 90 seconds, so a student should recognise the counting type within 5 seconds of reading the stem. Memorise P(n, r), C(n, r), complement rule, addition rule, and conditional probability; conditional and Bayes-type items reward students who draw a 2 × 2 contingency table before computing.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
