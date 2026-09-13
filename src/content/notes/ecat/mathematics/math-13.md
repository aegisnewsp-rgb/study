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
lastUpdated: "2026-09-13"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Probability** measures how likely an event is: P(A) = n(A)/n(S), where n(A) counts favorable outcomes and n(S) counts total equally likely outcomes in the sample space. The result always sits in 0 ≤ P(A) ≤ 1. A **permutation** counts ordered arrangements of r objects chosen from n distinct objects using P(n,r) = n!/(n−r)!. ECAT asks 1–2 MCQs on this cluster, so the difference between order-matters (permutation) and order-doesn't (combination) is the highest-yield distinction.

- **Classic P(n,r) trap:** computing arrangements of a word's letters without subtracting repetitions from repeated letters.
- **Independent events rule:** P(A ∩ B) = P(A) · P(B) only when A and B don't influence each other.
- **Complement shortcut:** "at least one" questions collapse to 1 − P(none).

| Symbol | Meaning |
| --- | --- |
| P(A) | Probability event A occurs |
| P(n,r) | Permutations of r from n |
| P(A\|B) | Probability of A given B |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Counting vs. Arranging

A **combination** selects r items from n without caring about sequence; a **permutation** does care. The numerical gap is exactly the factor of r! between them: C(n,r) = n!/[(n−r)! · r!] and P(n,r) = n!/(n−r)!. UET Lahore ECAT questions phrase this as "how many ways to form a committee" (combination) versus "how many ways to seat the committee" (permutation).

#### The Three Core Probability Rules

The **addition rule** for two events A and B is P(A ∪ B) = P(A) + P(B) − P(A ∩ B); the subtraction term vanishes when the events are **mutually exclusive** (cannot occur together), making P(A ∩ B) = 0. The **multiplication rule** gives P(A ∩ B) = P(A) · P(B) for **independent events**, and P(A ∩ B) = P(A) · P(B|A) when they are dependent. **Conditional probability** formalises the latter: P(A|B) = P(A ∩ B)/P(B), provided P(B) > 0.

#### Worked Mechanism: Bayes' Setup

For a two-stage draw without replacement from a bag, the probability the second draw is white depends on the first outcome. Sample space size drops from n to n−1, and the joint probability equals the product of conditional probabilities along each tree branch.

| Concept | Key point |
| --- | --- |
| Sample space | Set of all equally likely outcomes |
| Mutually exclusive | P(A ∩ B) = 0, drop subtraction |
| Independent | P(A ∩ B) = P(A)·P(B) |
| Conditional | P(A\|B) = P(A ∩ B)/P(B) |

- Worded "at least one" → use complement 1 − P(none).
- "With replacement" → stays independent; "without" → update counts.
- Distinct objects assumption matters for P(n,r).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Examiner Traps

ECAT problems often hide the permutation–combination switch inside wording. "A code uses 4 distinct digits from {0,...,9}" means order matters, so use P(10,4). "A committee of 4 is picked from 10" means use C(10,4). When items repeat (e.g., arranging the letters of MISSISSIPPI), divide the raw permutation by the product of factorials of each repeated letter's count.

For probability, the trickiest item is conditional-versus-independent. Drawing cards without replacement makes successive draws dependent, so P(B|A) ≠ P(B). UET often tests this by giving P(A), P(B), and P(A ∩ B) and asking you to identify whether independence holds: check whether P(A ∩ B) equals P(A) · P(B).

#### Connections to Adjacent Topics

Probability and permutations underpin **binomial probability** P(X = k) = C(n,k) p^k (1−p)^(n−k), which in turn feeds into expected-value and variance formulas in Statistics. Combinatorial reasoning also reappears in **linear arrangements** and **circular permutations** (divide n! by n to remove rotational equivalence).

#### Practice Prompts

1. In how many ways can the letters of "STATISTICS" be arranged?
2. A bag holds 4 red and 6 blue balls. Two are drawn without replacement. Find P(both red).

| Mistake | Correction |
| --- | --- |
| Using n! instead of (n−r)! | P(n,r) = n!/(n−r)! |
| Treating draws without replacement as independent | Reduce denominator by 1 each draw |
| Computing P(B\|A) when asked P(A\|B) | Swap roles; recompute joint probability |
| Dropping repeat-letter division | Divide n! by product of repeated factorials |

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
