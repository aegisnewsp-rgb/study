---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-008
topicName: Permutations
weight: 3
country: india
generated: "2026-03-29T05:05:08"
lastUpdated: "2026-07-24"
---

# Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Permutation** is the ordered arrangement of objects selected from a set. For *n* distinct objects taken *r* at a time, the count is **nPr = n! / (n − r)!**, with **0! = 1** and **P(n, n) = n!**.

- When *r* positions each allow any of *n* objects (repetition allowed), total arrangements = **n^r**.
- Circular arrangements of *n* distinct objects = **(n − 1)!**, since rotations collapse.
- Permutations of *n* objects with repeats *p₁, p₂, …, pₖ* = **n! / (p₁! · p₂! · … · pₖ!)**.
- Always define variables: *n* = total pool, *r* = positions to fill, *r ≤ n*, unitless.
- CUET trap: swapping nPr with nCr loses the **r!** factor and produces wrong answers in word-formation MCQs.

| Term | Meaning |
| --- | --- |
| nPr | Ordered selection of r from n |
| n! | Product 1·2·…·n |
| Circular | (n−1)! arrangements |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definition and Formula

A **permutation** of *r* objects chosen from *n* distinct objects is an ordered arrangement where every sequence is distinguishable. The notation **nPr** (also written **P(n, r)**) counts such arrangements:

> nPr = n! / (n − r)!, where *n* ≥ *r* ≥ 0 are integers.

Special cases: **P(n, n) = n!** (arrange all), and **P(n, 0) = 1** (empty arrangement, defined for the Fundamental Principle of Counting). The factorial grows explosively — 10! = 3,628,800 — so CUET problems in most keys cap *n* at 8 or below.

#### Worked Relationships

The Fundamental Principle of Counting underpins the formula: filling position 1 has *n* choices, position 2 has *n − 1*, and so on down to position *r*, giving the product n · (n−1) · … · (n−r+1) = n!/(n−r)!.

Key linkage: **nPr = nCr × r!**, which lets you convert between ordered and unordered selections. For example, choosing a President, Vice-President, and Secretary from 12 students gives P(12, 3) = 12 · 11 · 10 = 1320 ordered outcomes.

| Concept | Formula / Value | When to use |
| --- | --- | --- |
| Linear, all distinct | n! | Arrange every object |
| Linear, r of n | n! / (n−r)! | Pick subset, order matters |
| Circular, distinct | (n−1)! | Seating around a table |
| With repetition (r slots, n choices) | n^r | Digits, codes with repeats |
| With identical objects | n! / (p₁!·…·pₖ!) | Words like MISSISSIPPI |

#### Typical CUET Pattern

Expect 1–2 MCQs of 1 mark each, in most keys a numeric computation (e.g., "How many 4-digit codes can be formed using digits 0–9 with no repetition?"). The trap answer is 9 × 9 × 8 × 7 (forgetting the leading-zero restriction), while the correct path uses 9 · P(9, 3) = 9 · 504 = 4536.

- Restriction strategy: place the most constrained object first, then arrange the rest freely.
- Always check whether clockwise and counterclockwise rotations are counted as distinct — most CUET seating problems treat them as identical.
- Verify the *r ≤ n* condition before applying nPr; otherwise the problem is actually about repetition.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Derangements

When **no object can occupy its original position**, the count is a **derangement** D(n):

> D(n) = n! · (1 − 1/1! + 1/2! − 1/3! + … + (−1)ⁿ / n!).

For n = 4, D(4) = 24 · (1 − 1 + 0.5 − 0.1667 + 0.0417) = 24 · 0.375 = 9. CUET rarely tests this formula directly but it appears disguised as "in how many ways can 5 letters be placed in 5 envelopes so that none goes to the right address?"

#### Adjacency and Gap Methods

Two flavours of restricted arrangement dominate exams:

1. **Bundle method**: treat adjacent objects as a single block (e.g., "A and B must sit together" → arrange (n−1)! · 2! blocks).
2. **Gap method**: arrange the unconstrained objects first, then slot the constrained ones into the gaps between them — useful when specific objects must *not* be adjacent.

For 8 people around a circular table where two particular people must sit together, the count is 2 · 6! = 1440 (bundle of 2 × internal arrangements × circular permutations of 7).

#### Common Mistakes

| Mistake | Correction |
| --- | --- |
| Using nCr where order matters | Multiply nCr by r! |
| Counting n! for a circle | Subtract factor n → (n−1)! |
| Ignoring identical letters in words | Divide by pᵢ! for each repeat |
| Sign error in derangement sum | Alternate +/− strictly from term 2 |

#### Practice Prompts

1. How many distinct arrangements of the letters of BANANA exist? (Answer: 6! / (3! · 2! · 1!) = 60.)
2. In how many ways can 6 boys and 4 girls be seated in a row if the girls sit together? (Answer: 7! · 4! = 120960.)

#### Exam Strategy for CUET UG

Permutations carries roughly 3% weight in the Mathematics domain and overlaps heavily with probability, binomial expansion (nCr identities), and determinant properties (cofactor expansion). Allocate 60–90 seconds per MCQ; skip and flag if *n* > 12 because factorial overflow is a sign of a misread question. The **NTA official syllabus** lists permutations under "Algebra — Counting Principles," and NCERT Class 11 textbook (Chapter 7) is the most reliable source for derivation drills.

---

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Permutations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
