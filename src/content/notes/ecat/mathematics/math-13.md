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
> Rapid summary for last-minute revision before your ECAT Mathematics section.

Probability measures how likely an event is, calculated as **P(A) = n(A)/n(S)**, where n(A) counts favourable outcomes and n(S) counts every equally likely outcome in the sample space. The result always lies between 0 and 1, with 0 meaning impossible and 1 meaning certain. A permutation counts **ordered** arrangements and uses **P(n, r) = n!/(n−r)!**, which collapses to n! when r = n.

ECAT tests this topic in roughly 1–2 MCQs from the 4% Mathematics weight, so precision with one formula is worth more than breadth. Remember that combinations ignore order while permutations lock it in.

- **Classic formulas:** P(A) = favourable / total; P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
- **Conditional / independent:** P(A|B) = P(A ∩ B)/P(B); for independent events, P(A ∩ B) = P(A)·P(B)
- **Complement shortcut:** P(A′) = 1 − P(A), useful when counting "at least one" or "none"

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before the test.

#### Definitions and the Counting Foundation

A **sample space S** is the set of all possible outcomes of an experiment. If every outcome in S is equally likely, the classical probability formula **P(A) = n(A)/n(S)** applies directly. The **multiplication principle** states that if task 1 has m methods and task 2 has n methods, both together can be done in m·n ways — this is the engine behind permutation counting.

A **permutation P(n, r)** arranges r distinct objects chosen from n distinct objects, with order fixed. The formula is:

> **P(n, r) = n! / (n − r)!**, where 0 ≤ r ≤ n and n! = n × (n−1) × … × 1.

#### Core Rules at a Glance

| Rule | Formula | When to use |
| --- | --- | --- |
| Complement | P(A′) = 1 − P(A) | Easier to count failures than successes |
| Addition | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | Events that can occur together |
| Multiplication | P(A ∩ B) = P(A)·P(B) | Only for independent events |
| Conditional | P(A\|B) = P(A ∩ B)/P(B), P(B) > 0 | "Given that B has happened" |

#### Order Matters: Permutation vs Combination

- "How many ways can 3 students sit on 3 chairs?" → **P(3, 3) = 3! = 6**
- "How many ways can we pick a team of 3 from 10?" → **C(10, 3) = 10!/(7!·3!) = 120**
- Trap: swapping "arrange" and "select" flips the answer by a factor of up to r!.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students building mastery across the syllabus.

#### Worked Example: Two Dice and Conditional Probability

Two fair dice are rolled. Find P(sum = 7) and P(sum = 7 \| first die is 4).

Sample space size: n(S) = 6 × 6 = 36. Favourable pairs for sum 7: {(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)} = 6. So **P(sum = 7) = 6/36 = 1/6**.

Given the first die is 4, the second die must be 3, giving exactly 1 outcome out of 6 possibilities for die 2. **P(sum = 7 \| die 1 = 4) = 1/6**. Note that these events are independent — the conditional equals the marginal because each die's value does not influence the other.

#### Edge Cases and ECAT Traps

| Scenario | Correct move | Why students slip |
| --- | --- | --- |
| "At least one head in 3 tosses" | Use 1 − P(no heads) = 1 − (1/2)³ | Counting overlaps in addition rule |
| P(A ∪ B) with overlapping events | Subtract P(A ∩ B) | Treating events as mutually exclusive |
| Bayes' two-stage problem | Apply P(A\|B) = P(A ∩ B)/P(B) | Confusing numerator and denominator |
| Restricted permutation with repetition | Divide by repeated-factorial terms | Ignoring identical objects |

#### Connections and Practice Prompts

Permutations feed directly into **binomial probability**: P(X = k) = C(n, k) p^k (1−p)^(n−k). Conditional probability connects to **Bayes' theorem**, useful when UET Lahore frames reverse-conditioning MCQs.

1. A bag has 5 red and 3 blue balls. Two are drawn without replacement. Compute P(both red).
2. How many 4-digit PINs from digits 0–9 contain no repeated digit? (Answer uses P(10, 4) = 5040.)

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
