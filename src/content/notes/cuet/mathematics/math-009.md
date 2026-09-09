---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-009
topicName: Combinations
weight: 3
country: india
generated: "2026-03-29T05:05:11"
lastUpdated: "2026-09-09"
---

# Combinations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Combinations** count how many ways you can pick r objects out of n distinct objects when **order does not matter**. It is denoted nCr or C(n,r), read as "n choose r," and forms the bedrock of probability, the Binomial Theorem, and most selection problems in CUET UG Mathematics.

- **Core formula:** nCr = n! / [r! · (n−r)!], where n, r are non-negative integers with 0 ≤ r ≤ n.
- **Boundary values:** C(n,0) = C(n,n) = 1, and C(n,1) = C(n,n−1) = n.
- **Symmetry shortcut:** nCr = nC(n−r) — use this when r > n/2 to save time.
- **Conversion from permutations:** C(n,r) = P(n,r) / r!.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definition and Formula
A combination counts the unordered selections of r objects from a set of n distinct objects. Because order is irrelevant, every group of r items is counted once. The standard closed form is nCr = n! / [r! (n−r)!], and the result is always a dimensionless integer. The convention 0! = 1 makes the formula consistent for r = 0.

#### Why Division by r! Removes Order
P(n,r) = n! / (n−r)! counts arrangements. Each combination of r items can be rearranged in r! ways, so dividing P(n,r) by r! collapses those ordered arrangements back into a single unordered selection. This gives C(n,r) = P(n,r) / r!.

#### Symmetry and Pascal's Identity
Two identities are tested repeatedly in CUET UG MCQs. Symmetry says nCr = nC(n−r), which flips a hard computation like 100C97 into 100C3. Pascal's identity, C(n,r) = C(n−1,r−1) + C(n−1,r), is the rule that builds Pascal's triangle row by row and lets you split a selection into cases.

#### Selection with Restrictions
- "Always include p specific items": choose r−p more from the remaining n−p items → C(n−p, r−p).
- "Always exclude q specific items": choose r from the remaining n−q items → C(n−q, r).

| Identity / Rule | Statement | Typical Use |
| --- | --- | --- |
| Boundary | C(n,0) = C(n,n) = 1; C(n,1) = n | Edge values, sanity check |
| Symmetry | nCr = nC(n−r) | r > n/2 simplification |
| Pascal | C(n,r) = C(n−1,r−1) + C(n−1,r) | Triangle construction, case-split |
| Power sum | Σ C(n,r) = 2ⁿ | Total subsets, Binomial Theorem |

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Identities That Link to the Binomial Theorem
The Binomial Theorem writes (a+b)ⁿ = Σ C(n,r) aⁿ⁻ʳ bʳ for integer n ≥ 0. Two summation identities follow directly and are tested as standalone MCQs: Σᵣ₌₀ⁿ C(n,r) = 2ⁿ (sum of all binomial coefficients in row n of Pascal's triangle) and Σᵣ₌₀ⁿ r·C(n,r) = n·2ⁿ⁻¹ (each element of an n-element set appears in exactly half of its 2ⁿ subsets).

#### Grouping and Division of Objects
When n distinct objects are split into k **labelled** groups of sizes n₁, n₂, …, nₖ (with n₁+n₂+…+nₖ = n, each nᵢ ≥ 1), the number of ways is n! / (n₁! n₂! … nₖ!). If the groups are **unlabelled** (identical boxes), further divide by k! when sizes are equal.

#### Common Mistakes and Traps
- Applying P(n,r) when the question asks for selection without order — always check wording like "team," "committee," or "group."
- Ignoring the r! factor when converting a stated permutation into a combination.
- Computing C(n,r) directly for r > n/2 instead of using the symmetry identity nCr = nC(n−r).
- Double-counting "at least one of A or B" cases — split into "exactly one" and "both" rather than adding C(includes A) + C(includes B).

#### Worked Micro-Example
A class of 10 students forms a 4-member committee where two particular students, Anu and Bala, must **not** both be selected. Count the valid committees.
- Total committees without restriction: C(10,4) = 210.
- Committees containing both Anu and Bala: pick 2 more from the remaining 8 → C(8,2) = 28.
- Valid committees: 210 − 28 = 182.

> Exam tip: in CUET UG Section II, expect 1–2 MCQs on combinations per paper; when an option looks huge, check whether the symmetry identity nCr = nC(n−r) shrinks it instantly.

Practice prompts:
1. Find the number of ways to form a 5-letter "word" (real or nonsense) using the letters of MISSISSIPPI without repeating any letter's frequency count.
2. If C(15, r) = C(15, r−1), find r. (Answer: r = 8, since symmetry forces r = n−r+1.)

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Combinations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
