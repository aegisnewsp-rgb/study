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

Probability quantifies how likely an event is, where **P(A) = favourable outcomes ÷ total equally likely outcomes**, always sitting between 0 and 1. A permutation counts **ordered** arrangements of r objects drawn from n distinct items: **P(n, r) = n! / (n − r)!**.

- **Classic probability** uses the sample space S: P(A) = n(A)/n(S).
- **Permutation vs combination**: order matters for arrangements, not for groups.
- **Independent events**: P(A ∩ B) = P(A) · P(B); use addition rule P(A ∪ B) = P(A) + P(B) − P(A ∩ B) for general cases.
- **ECAT tip**: expect 1–2 MCQs testing factorial manipulation and the complement rule P(A′) = 1 − P(A).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before ECAT.

#### Core definitions

Probability assigns a numerical value between 0 (impossible) and 1 (certain) to an event in a sample space S. When outcomes are equally likely, P(A) = n(A)/n(S). A permutation is an **ordered** selection, while a combination is an unordered selection — the difference is whether rearranging the chosen items produces a new outcome.

#### Key formulas

| Formula | Meaning | When to use |
| --- | --- | --- |
| P(A) = n(A)/n(S) | Classical probability | Equally likely outcomes |
| P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | Addition rule | Two events, possibly overlapping |
| P(A ∩ B) = P(A)·P(B) | Multiplication rule | Independent events only |
| P(A\|B) = P(A ∩ B)/P(B) | Conditional probability | Event B has already occurred |
| P(n, r) = n!/(n − r)! | Permutation of r from n | Ordered arrangements |

#### Counting principle

If task 1 can be done in m ways and task 2 in n ways, both together can be done in m · n ways. This underpins permutation derivations and tree-diagram enumeration of compound experiments.

- Treat "arrange", "queue", "rank" or "first–second–third" as permutation cues.
- Treat "select", "choose", "form a committee" as combination cues.
- When in doubt, count small cases (e.g. choosing 2 from {A, B, C}) to test whether order changes the answer.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge cases and traps

The most common ECAT error is swapping P(A|B) with P(B|A). They are equal only when P(A) = P(B); otherwise Bayes' theorem P(A|B) = P(B|A)·P(A)/P(B) is required. A second trap appears when students apply the independent-events multiplication rule to conditional problems — check independence before using P(A ∩ B) = P(A)·P(B).

#### Worked micro-example

How many 3-letter "words" (real words not required) can be formed from the 5 distinct letters {A, B, C, D, E} if no letter repeats?

- Apply P(5, 3) = 5!/(5 − 3)! = 120/2 = **60 arrangements**.

A bag contains 4 red and 6 blue marbles. One marble is drawn, replaced, then another is drawn. Find P(both red).

- Events are independent due to replacement, so P = (4/10)·(4/10) = **0.16**.

#### Common mistakes table

| Mistake | Correction |
| --- | --- |
| Using n! instead of (n − r)! in denominator | Permutation formula has (n − r)!; double factorial carefully |
| Treating "arrange" as combination | Order matters in arrangements |
| Forgetting overlap term P(A ∩ B) in addition rule | Subtract the joint probability when events overlap |
| Confusing conditional directions | P(A\|B) ≠ P(B\|A) in general |

#### Practice prompts

1. Compute P(8, 4) and interpret it as ordered arrangements.
2. Two dice are rolled. Find P(sum = 7 or sum = 11) using the addition rule.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
