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
> Rapid summary for last-minute revision before your ECAT Mathematics attempt.

Probability quantifies how likely an event is, computed as **P(A) = n(A) / n(S)**, where n(A) is the count of favourable outcomes and n(S) is the total count of equally likely outcomes in the sample space. The value always satisfies **0 ≤ P(A) ≤ 1**, and the complement rule gives **P(A′) = 1 − P(A)**.

A permutation counts **ordered** selections of r distinct objects from n, given by **P(n, r) = n! / (n − r)!**. A combination, by contrast, ignores order and is C(n, r) = n! / [r!(n − r)!].

- ECAT tests 1–2 MCQs from this 4%-weighted topic, usually a counting problem or a single-stage probability.
- Memorise P(A ∪ B) = P(A) + P(B) − P(A ∩ B); drop the intersection term only when events are mutually exclusive.
- Conditional probability P(A | B) = P(A ∩ B) / P(B) is the formula most often twisted by ECAT distractors.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before the test.

#### Core formulas and when to use them

Each formula maps to a specific ECAT-style scenario. The classical definition handles single experiments like drawing one ball from a bag. The addition rule handles "either-or" wording. The multiplication rule for independent events handles "both-and" wording without overlap.

| Concept | Formula | When ECAT uses it |
| --- | --- | --- |
| Classical probability | P(A) = n(A) / n(S) | Coin, die, card-draw problems |
| Complement rule | P(A′) = 1 − P(A) | "At least one" type questions |
| Addition rule | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | Overlapping or mutually exclusive events |
| Independent events | P(A ∩ B) = P(A) · P(B) | Drawing with replacement, separate coins |
| Conditional probability | P(A \| B) = P(A ∩ B) / P(B) | "Given that B has occurred" |
| Permutation | P(n, r) = n! / (n − r)! | Arrangements, rankings, seating orders |

#### Counting strategy you can apply

- **Multiplication principle**: if task 1 has m ways and task 2 has n ways, both together have m × n ways; extend to three or more tasks the same way.
- **Permutation** is the right choice when the question says "arrange", "rank", "seat in a row", or "form a password in order".
- **Combination** fits "select", "choose", or "form a committee" — order does not change the group.
- **Tree diagrams** are the safest tool when the sample space is small (≤ 36 outcomes), such as two coin tosses plus a die roll.

#### Typical ECAT traps

- Distractors swap P(A | B) with P(B | A); only the denominator P(B) is fixed, never assume symmetry.
- "At least one" is faster solved via the complement: P(at least one) = 1 − P(none).
- A permutation denominator is (n − r)!, not just r!; many students drop the factorial argument incorrectly.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline who want full command of the topic.

#### Mechanism behind conditional probability and Bayes' theorem

Conditional probability **P(A | B) = P(A ∩ B) / P(B)** restricts the sample space to outcomes where B has already happened. Rewriting the joint probability as P(B) · P(A | B) and summing over partitions of the sample space produces **Bayes' theorem: P(A | B) = P(B | A) · P(A) / P(B)**. ECAT occasionally tests this in a two-stage experiment, such as drawing a ball then drawing another without replacement.

#### Worked micro-example with numbers

A bag holds 4 red and 6 blue balls. Two balls are drawn without replacement. Find the probability both are red.

Step 1 — first draw red: P(R₁) = 4 / 10 = 2 / 5.
Step 2 — second draw red given first was red: P(R₂ | R₁) = 3 / 9 = 1 / 3.
Step 3 — multiply because dependent: P(both red) = (2 / 5) × (1 / 3) = 2 / 15 ≈ 0.1333.

#### Edge cases that trip up high scorers

- Sampling **with** replacement keeps draws independent; **without** replacement forces conditional probability.
- P(n, r) requires r ≤ n and r, n non-negative integers; 0! = 1 by definition.
- Two events can be mutually exclusive yet not exhaustive; ECAT may phrase a question that conflates the two.

| Mistake | Correct approach |
| --- | --- |
| Using C(n,r) where the question asks for order | Switch to P(n,r) = n!/(n−r)! |
| Writing P(A\|B) = P(B\|A) | Always divide joint P(A∩B) by P(B), not P(A) |
| Treating dependent draws as independent | Update the denominator after each draw when sampling without replacement |
| Forgetting the (n−r)! in P(n,r) | The factorial argument is (n − r), not r |

#### Practice prompts

1. How many 4-digit PINs can be formed using the digits 1–9 if no digit repeats? *(Answer uses P(9,4) = 3024.)*
2. A die is rolled twice. What is the probability that the sum is at least 10? *(Use the complement: 1 − P(sum ≤ 9) over 36 equally likely ordered pairs.)*

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
