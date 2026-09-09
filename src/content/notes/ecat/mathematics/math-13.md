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
> Rapid summary for last-minute revision before your exam.

Probability measures how likely an event is, using **P(A) = n(A)/n(S)** where n(A) is the number of favorable outcomes and n(S) is the total sample space of equally likely outcomes. The value always satisfies **0 ≤ P(A) ≤ 1**, and the **complement rule P(A') = 1 − P(A)** lets you flip an event by subtraction.

A permutation counts **ordered** arrangements of r objects chosen from n distinct objects, given by **P(n,r) = n!/(n−r)!**. Order matters here, so selecting A then B is different from B then A.

ECAT focus points:
- Distinguish "arrange" (permutation) from "select" (combination).
- Apply the multiplication principle when two tasks combine (m ways × n ways).
- Use **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)** for non-mutually-exclusive events.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definitions

The sample space S is the set of every possible outcome of a random experiment. For a fair six-sided die, n(S) = 6. An event A is a subset of S, and its probability is the ratio of favorable outcomes to total outcomes when each outcome is equally likely.

Permutations extend the multiplication principle. Choosing and ordering 3 letters from 26 gives P(26,3) = 26 × 25 × 24 = 15,600 arrangements. The factorial n! = n × (n−1) × ⋯ × 1 captures this cascade of choices, with the convention 0! = 1.

#### Counting vs. Probability Rules

| Rule | Formula | When to use |
| --- | --- | --- |
| Classical probability | P(A) = n(A)/n(S) | Equally likely outcomes |
| Addition rule | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | A or B occurs |
| Multiplication rule | P(A ∩ B) = P(A)·P(B) | Independent events only |
| Conditional probability | P(A\|B) = P(A ∩ B)/P(B), P(B)>0 | Two-stage experiments |
| Permutation | P(n,r) = n!/(n−r)! | Ordered selection |
| Complement | P(A') = 1 − P(A) | "At least one" style problems |

For **mutually exclusive** events, P(A ∩ B) = 0, so the addition rule collapses to P(A) + P(B). Two events are **independent** when one does not influence the other, letting you multiply their probabilities directly. Conditional probability adjusts an event's likelihood given that another has already occurred.

#### Typical ECAT Question Types

- "In how many ways can 5 students sit on 3 chairs?" → permutation P(5,3) = 60.
- "A card is drawn, replaced, and another drawn. Find P(both kings)" → (4/52)² = 1/169.
- "What is the probability of getting at least one head in 3 tosses?" → 1 − (1/2)³ = 7/8 via complement.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Adjacent Topics

Permutations with repetition allow P(n,n) = n! when all n objects are used, while arrangements of words with repeated letters divide by the factorial of each repeated block. **Circular permutations** arrange n distinct objects around a circle in (n−1)! ways because rotations are equivalent. Bayes' theorem, P(A|B) = P(B|A)·P(A)/P(B), inverts a conditional probability and frequently appears in ECAT two-stage problems involving drawn-and-not-replaced cards.

#### Common Mistakes

| Trap | Correction |
| --- | --- |
| Treating "select a committee" as a permutation | Use a combination C(n,r); order is irrelevant |
| Adding probabilities for non-mutually-exclusive events directly | Subtract the overlap term P(A ∩ B) |
| Multiplying probabilities of dependent events | Check independence first; otherwise use conditional probability |
| Computing P(A\|B) as P(B\|A) | Apply the correct ratio with the given event in the denominator |
| Dropping the (n−r)! in the denominator | Remember n! grows until the (n−r) term, not until 0 |

#### Worked Micro-Example

A bag holds 4 red and 6 blue marbles. Two are drawn without replacement. Find the probability both are red. The first draw gives P(R₁) = 4/10. Given the first was red, P(R₂\|R₁) = 3/9 = 1/3. Multiplying for dependent events: P(both red) = (4/10)(3/9) = 12/90 = 2/15.

#### Practice Prompts

1. How many 4-digit PINs can be formed from the digits 0–9 if no digit repeats? (Answer: P(10,4) = 5040)
2. Two dice are rolled. Find P(sum = 7 or sum = 11). (Answer: 6/36 + 2/36 = 8/36 = 2/9, since the events are mutually exclusive.)

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
