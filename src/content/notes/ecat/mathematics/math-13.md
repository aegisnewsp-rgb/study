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
> Rapid summary for last-minute revision before your ECAT Mathematics paper.

Probability measures how likely an event is, on a scale from 0 to 1. For equally likely outcomes, divide the count of favorable outcomes by the count of outcomes in the sample space. A permutation counts **ordered** arrangements of r objects drawn from n distinct objects.

- **Classical probability:** P(A) = n(A) / n(S), where n(A) is favorable outcomes and n(S) is the sample-space size.
- **Permutation formula:** P(n,r) = n! / (n − r)!, where r is the number of positions filled from n distinct objects.
- **ECAT pointer:** the topic contributes 4% to the Mathematics section, usually 1–2 MCQs drawn from counting or simple conditional probability.

| Concept | Quick formula |
| --- | --- |
| Probability of A | n(A) / n(S) |
| Permutation of r from n | n! / (n − r)! |
| Complement | P(A′) = 1 − P(A) |
| Independent events | P(A ∩ B) = P(A) · P(B) |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before ECAT.

#### Counting and the sample space

The **sample space** S lists every possible outcome of a random experiment. When each outcome is equally likely, probability reduces to counting. A die roll gives n(S) = 6, while two dice give n(S) = 36 because each pair (i, j) is a distinct ordered outcome. The **multiplication principle** states that if task 1 can be done in m ways and task 2 in n ways, both together can be done in m · n ways, which is the engine behind every permutation formula.

#### Permutations versus arrangements

A permutation is an ordered selection, so (A, B, C) and (B, A, C) count as different. The number of ways to arrange r distinct objects chosen from n distinct objects is:

> **P(n, r) = n! / (n − r)!**

For r = n the denominator collapses to 0! = 1, giving n! total orderings of n objects. For r = 0 the value is 1, the empty arrangement.

#### Addition, multiplication, and conditional rules

Two events A and B can be combined by union or intersection:

| Rule | Formula | When to use |
| --- | --- | --- |
| Addition | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | Either event may occur |
| Mutually exclusive | P(A ∩ B) = 0 | Events cannot happen together |
| Independent | P(A ∩ B) = P(A) · P(B) | One event does not affect the other |
| Conditional | P(A \| B) = P(A ∩ B) / P(B) | Probability of A given that B has occurred |
| Complement | P(A′) = 1 − P(A) | Easier to count the opposite event |

- A die roll and a coin toss are independent because the die cannot influence the coin.
- Drawing two cards **without replacement** makes the second draw conditional on the first.
- For "at least one" problems, computing P(none) and subtracting from 1 is faster than direct counting.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge cases and trap questions

The hardest ECAT-style items hide subtlety inside ordinary-looking wording. "Arrangements of the letters of the word COMMITTEE" requires dividing by 2! · 2! · 2! because of repeated letters, or the answer is inflated. Likewise, "in how many ways can 5 boys and 3 girls sit in a row if no two girls sit together" needs a gap method: arrange the boys in 5! ways, then choose 6 gaps for the girls in P(6, 3) ways, giving 5! · P(6, 3) = 120 · 120 = 14,400.

#### Bayes and conditional reasoning

For two-stage experiments, Bayes' theorem updates a prior probability after observing evidence:

> **P(A | B) = P(B | A) · P(A) / P(B)**

A classic ECAT trap swaps P(A | B) with P(B | A). Always read the conditioning event carefully — it is the information you already know. UET Lahore tests the conditional rule at the Pre-Engineering level, so multi-step word problems with replacement, without replacement, and bag-of-balls scenarios are fair game.

#### Practice prompts

1. A bag contains 4 red and 6 blue balls. Two balls are drawn without replacement. Find P(first red **and** second blue).
2. How many 4-digit numbers greater than 4000 can be formed using the digits 1, 2, 3, 4, 5 without repetition?

#### Common mistakes to avoid

- Forgetting to subtract P(A ∩ B) when A and B are not mutually exclusive.
- Using n! instead of (n − r)! and overcounting arrangements.
- Treating draws without replacement as independent, which breaks P(A ∩ B) = P(A) · P(B).
- Confusing "arrangements" (permutation) with "selections" (combination), where order matters for the former but not the latter.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
