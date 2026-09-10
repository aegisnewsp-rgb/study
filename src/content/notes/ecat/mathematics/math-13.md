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
> Rapid summary for last-minute revision before your exam.

Probability measures how likely an event is, computed as **P(A) = n(A)/n(S)**, where n(A) is the count of favorable outcomes and n(S) is the total number of equally likely outcomes in the sample space. The value always sits in **0 ≤ P(A) ≤ 1**, and the complement rule gives **P(A') = 1 − P(A)**. For ordered arrangements of r distinct objects chosen from n distinct objects, use the permutation formula **P(n, r) = n! / (n − r)!**.

- ECAT tests this topic as 1–2 MCQs (4% weightage) — every mark is a free mark.
- Use the **multiplication principle**: if step 1 has m ways and step 2 has n ways, the combined count is m · n.
- For "arrangements" use permutations; for "groups" or "selections" switch to combinations C(n, r) = n! / [r! (n − r)!].

| Symbol | Meaning |
| --- | --- |
| n! | n × (n−1) × … × 1 |
| n(S) | size of sample space |
| P(A ∩ B) | joint occurrence of A and B |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Counting Principle and Permutations

The **multiplication principle** underpins every counting formula. If task 1 can be performed in m ways and task 2 in n ways (independent choices), the pair can be performed in **m · n** ways. A permutation **P(n, r)** is the ordered selection of r items from n distinct items without repetition, computed as **n! / (n − r)!**. Worked mini-example: arranging 3 books chosen from 7 on a shelf gives P(7, 3) = 7 · 6 · 5 = 210 arrangements.

#### Probability Axioms and the Addition Rule

For any event A, **P(A) = n(A) / n(S)**. Two events are **mutually exclusive** when they cannot happen together, so P(A ∩ B) = 0 and P(A ∪ B) = P(A) + P(B). For general events, the addition rule is **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**, subtracting the overlap once. The complement rule **P(A') = 1 − P(A)** is the fastest path on ECAT when the question asks "probability of NOT happening."

#### Conditional Probability and Independence

The conditional probability **P(A | B) = P(A ∩ B) / P(B)**, defined only when P(B) > 0. Events A and B are **independent** exactly when **P(A ∩ B) = P(A) · P(B)**; failing to check independence is the most common ECAT trap.

| Concept | Formula | When to use |
| --- | --- | --- |
| Classical probability | P(A) = n(A)/n(S) | finite, equally likely outcomes |
| Addition rule | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | either A or B (or both) |
| Complement rule | P(A') = 1 − P(A) | easier to count "failures" |
| Permutation | P(n, r) = n! / (n − r)! | ordered selection, no repeats |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Conditional Probability and Bayes' Theorem

Conditional probability becomes a two-stage problem when an outcome of stage 1 changes the sample space of stage 2 (drawing without replacement, then drawing again). Bayes' theorem rewrites a conditional probability in its "reverse" direction: **P(A | B) = P(B | A) · P(A) / P(B)**. ECAT rarely demands Bayes' derivation, but expects fluency with P(A | B) and recognising when **P(A | B) ≠ P(B | A)** — a classic examiner trap.

#### Permutations vs Combinations

The single sharpest distinction: **order matters in permutations, order does not matter in combinations**. A 4-letter "code" formed from 6 distinct letters with no repeats is P(6, 4) = 360, but a 4-person committee from 6 people is C(6, 4) = 15. Factorials grow fast: 10! = 3,628,800, so keep expressions symbolic and cancel early to avoid arithmetic slips.

#### Common Mistakes on ECAT

1. Treating "group" problems as permutations — order is irrelevant inside a committee or a hand of cards.
2. Forgetting the −P(A ∩ B) term when events overlap, inflating P(A ∪ B) above 1.
3. Multiplying probabilities of dependent stages using the independence formula.
4. Computing P(n, r) with n! in the denominator instead of (n − r)! — yields the wrong (larger) integer.

> **Scoring tip:** on ECAT MCQs, eliminate options outside [0, 1] first; a probability answer >1 means you double-counted or misapplied the addition rule.

#### Worked Micro-Example

A bag holds 5 red and 3 blue marbles. Two marbles are drawn without replacement. Find P(both red).

P(R₁ ∩ R₂) = (5/8) · (4/7) = 20/56 = **5/14 ≈ 0.3571**.

Since the second draw depends on the first, the multiplication P(A) · P(B) is wrong here — use P(R₁) · P(R₂ | R₁) instead.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
