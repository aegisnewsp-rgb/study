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

Probability quantifies how likely an event is: **P(A) = n(A)/n(S)**, where n(A) counts favourable outcomes and n(S) counts all equally likely outcomes in the sample space. The value always lies in [0, 1]. A **permutation** counts ordered arrangements of r distinct items chosen from n: **P(n,r) = n!/(n−r)!**. ECAT usually tests one or two MCQs from this 4%-weightage block, almost always as a counting-versus-ordering trap.

- **Order matters** → use the permutation formula; **order irrelevant** → use combinations C(n,r) = n!/[r!(n−r)!].
- Independent events multiply: **P(A ∩ B) = P(A) · P(B)**.
- Complement shortcut: **P(A′) = 1 − P(A)**.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Probability Rules
The classical definition assumes every outcome in the sample space S is equally likely. From it follow the addition rule **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**, which collapses to **P(A) + P(B)** when A and B are mutually exclusive (no overlap), and the conditional rule **P(A|B) = P(A ∩ B)/P(B)**, valid only when P(B) > 0. Bayes' theorem — **P(A|B) = P(B|A)·P(A)/P(B)** — reverses a conditional probability and appears in two-stage experiments such as drawing without replacement.

#### Permutation Mechanics
For distinct objects, **P(n,r) = n·(n−1)·(n−2)·…·(n−r+1)**. A circular permutation of n distinct objects around a fixed table equals **(n−1)!**, because rotations are treated as identical. When objects repeat, the formula becomes **n!/(n₁!·n₂!·…)**, used for arranging the letters of words like "MISSISSIPPI".

#### Counting Principle
If task 1 has m ways and task 2 has n ways, both together have **m·n** ways. This underpins tree diagrams for coin‑dice products (e.g. two coins → 4 branches, three coins → 8 branches).

| Concept | Formula | When to use |
| --- | --- | --- |
| Classical probability | P(A) = n(A)/n(S) | Equally likely outcomes |
| Permutation | P(n,r) = n!/(n−r)! | Order matters |
| Combination | C(n,r) = n!/[r!(n−r)!] | Order irrelevant |
| Addition rule | P(A ∪ B) = P(A)+P(B)−P(A∩B) | Any two events |
| Complement | P(A′) = 1 − P(A) | "At least one" questions |

- Mutually exclusive ⇒ P(A ∩ B) = 0; rule simplifies to sum.
- Independent ⇒ P(A ∩ B) = P(A)·P(B); check wording for "with replacement".
- Conditional problems: write the joint, then divide by the given.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Example
A bag holds 5 red and 3 blue balls. Two balls are drawn **without** replacement. Find P(both red).

Method: P(R₁) = 5/8. After removal, P(R₂ | R₁) = 4/7. Joint probability = (5/8)(4/7) = **20/56 = 5/14 ≈ 0.357**. If replacement were allowed, P = (5/8)² = 25/64 — a classic ECAT trap where the wording "without replacement" changes everything.

#### Edge Cases and Connections
- **P(A|B) ≠ P(B|A).** Medical-test questions often swap these; only Bayes' theorem converts one to the other.
- **Inclusion–exclusion** for three events: P(A ∪ B ∪ C) = ΣP(A) − ΣP(A∩B) + P(A∩B∩C).
- **Permutation with repetition** of the word "LEVEL" uses 5!/(2!·2!) = 30.
- This topic bridges **Sets and Functions** (sample-space notation), **Sequences and Series** (factorial growth), and **Statistics** (empirical probability limits).

#### Common Mistakes
1. Dividing by 7 instead of 8 in without-replacement draws.
2. Forgetting that circular permutations divide by n to remove rotational duplicates.
3. Treating "at least one" as a single event rather than computing 1 − P(none).
4. Using n!/(n−r)! when the question actually asks for a selection, not an arrangement.

#### Practice Prompts
1. From 7 men and 4 women, a committee of 5 with exactly 3 men is formed. Find the number of committees and the probability that the chair is a woman.
2. Two dice are rolled. Compute P(sum = 7 OR both dice even) using the addition rule directly.

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Probability and Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
