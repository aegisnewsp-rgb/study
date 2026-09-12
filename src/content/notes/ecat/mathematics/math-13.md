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
> Rapid summary for last-minute revision before your ECAT.

**Probability** measures how likely an event is, calculated as P(A) = n(A)/n(S), where n(A) is the count of favourable outcomes and n(S) is the total count of equally likely outcomes in the sample space. The result always lies between 0 (impossible) and 1 (certain). A **permutation** counts arrangements of r objects chosen from n distinct objects where order matters, using P(n,r) = n!/(n−r)!.

- **Addition rule:** P(A ∪ B) = P(A) + P(B) − P(A ∩ B); drops the overlap term when events are mutually exclusive.
- **Multiplication rule:** P(A ∩ B) = P(A)·P(B) applies only to **independent events**.
- **Complement rule:** P(A′) = 1 − P(A); the fastest path when "at least one" wording appears.
- **Conditional probability:** P(A|B) = P(A ∩ B)/P(B), provided P(B) > 0.

ECAT tests 1–2 MCQs on this cluster. Memorise the factorial form of P(n,r) and recognise when a problem says "arrange" (permutation) versus "select" (combination).

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Probability Framework

Every probability problem begins with identifying the **sample space** S — the set of all equally likely outcomes. For a fair die, n(S) = 6; for two coins, n(S) = 4 (HH, HT, TH, TT). Once n(S) is fixed, P(A) = n(A)/n(S). The axioms require 0 ≤ P(A) ≤ 1 and the probabilities of all elementary outcomes summing to 1.

#### Counting Principle and Permutations

The **multiplication principle** states: if task 1 can be done in m ways and task 2 in n ways, both together can be done in m·n ways. Permutations extend this to ordered selections. For r distinct positions chosen from n distinct objects, P(n,r) = n!/(n−r)!. The formula falls out of the multiplication principle because the first slot has n choices, the second has n−1, and so on for r slots.

#### Worked Relationships

| Concept | Formula | When to use |
| --- | --- | --- |
| Addition rule | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | "A or B" with possible overlap |
| Independent events | P(A ∩ B) = P(A)·P(B) | No influence between A and B |
| Conditional | P(A\|B) = P(A ∩ B)/P(B) | "Given that B occurred" wording |
| Complement | P(A′) = 1 − P(A) | "At least one" problems |

- **Independent vs mutually exclusive:** independence concerns the multiplication rule; mutual exclusivity concerns the addition rule. Two events cannot be both independent and mutually exclusive unless one has zero probability.
- **Factorial growth:** 5! = 120, 6! = 720, 7! = 5040 — useful for sanity-checking permutation answers.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Conditional Probability and Bayes' Theorem

Conditional probability rewrites the sample space: once you are told B has occurred, only the outcomes inside B remain possible, so P(A|B) = n(A ∩ B)/n(B). **Bayes' theorem** inverts a conditional: P(A|B) = [P(B|A)·P(A)] / P(B). ECAT occasionally asks the two-stage form — drawing without replacement from a bag is the classic setup.

#### Edge Cases and Traps

ECAT problems disguise the counting question inside a probability question. "How many ways can 4 students sit in 6 seats?" is a permutation with P(6,4) = 6!/2! = 360, not a combination. Another trap: "at least one head in 3 coin tosses" is faster as 1 − P(no heads) = 1 − (1/2)³ = 7/8, rather than enumerating all favourable cases.

| Mistake | Why it loses marks | Correct move |
| --- | --- | --- |
| Using n! instead of (n−r)! | Counts arrangements of all n, not r | Apply P(n,r) = n!/(n−r)! |
| Skipping P(A ∩ B) term | Double-counts overlap in union | Subtract joint probability |
| Swapping P(A\|B) with P(B\|A) | Numerator/denominator reversed | Use Bayes' theorem if needed |

#### Practice Prompts

1. Five cards numbered 1–5 are shuffled; what is the probability that card 3 ends up in the second position? (Answer: 1/5, since each position is equally likely.)
2. From a class of 8 boys and 6 girls, in how many ways can a monitor and a co-monitor be chosen if they must be of different gender? (Answer: 8·6 + 6·8 = 96 ordered arrangements.)

Allocate under 90 seconds per MCQ — this 4% cluster rewards formula recall over lengthy derivation.

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
