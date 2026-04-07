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
---
# Combinations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision.

**Combinations** — Key Facts for CUET
• **Core formula:** C(n, r) = n! / (r! (n−r)!) — the number of ways to choose r items from n distinct items without regard to order.
• **Most tested concept:** Applying C(n, r) when "selection" or "committee" or "group" is mentioned — remember C(n, r) = C(n, n−r) (symmetry identity).
• **Common mistake:** Confusing combinations with permutations — use C(n, r) when order does NOT matter, use P(n, r) = n!/(n−r)! when order matters.
• **Key technique:** Use the **complement principle**: count total selections, subtract those that violate the condition. For "at least one" problems, compute 2ⁿ − 1.
• **Important exception:** Selecting all items C(n, n) = 1; selecting none C(n, 0) = 1. These look trivial but are frequent sources of off-by-one errors.
• **Most frequent question type:** "In how many ways can a committee of 3 be formed from 8 people?" → C(8, 3) = 56.
⚡ **Exam tip:** When the problem includes constraints like "two particular persons must be together," treat them as a single unit or subtract the forbidden selections — always verify whether order matters.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Combinations** — CUET Study Guide

**Combinations** count the ways to select items when order is irrelevant. The **binomial coefficient** C(n, r) is central to combinatorics and appears in the **binomial theorem**: (a + b)ⁿ = Σ C(n, r) aⁿ⁻ʳ bʳ. The symmetry identity **C(n, r) = C(n, n−r)** is the fastest shortcut for many problems — always look for the complementary pair.

**Key identities to master:**
- **Pascal's Rule:** C(n, r) = C(n−1, r) + C(n−1, r−1) — useful for building Pascal's triangle and proving recursive relations.
- **Sum Identity:** Σ_{r=0}^{n} C(n, r) = 2ⁿ — the total number of subsets of an n-element set.
- **Subset sum:** Σ_{r=0}^{k} C(n, r) has no simple closed form; use complement for "at most k" problems: total − Σ_{r=k+1}^{n} C(n, r).

**Typical CUET patterns:**
- Problems often combine selection with **distribution** (identical vs distinct objects). When distributing identical objects into distinct boxes, use stars-and-bars: number of solutions to x₁ + x₂ + … + x_k = n is C(n + k − 1, k − 1).
- **Committee with restrictions**: treat mandatory members as already chosen, reduce the pool, then apply C(n, r).

**Common traps:**
- Treating selections as ordered (applying P instead of C).
- Overlooking the condition "at least one" — answer is C(n, k) − C(n, 0) for selecting at least k, not C(n, k) alone.
- Ignoring whether objects are distinct or identical.

**Solved Example 1:** In how many ways can a team of 4 be selected from 7 boys and 5 girls, if the team must contain at least 2 girls?
- Count total teams of 4 from 12: C(12, 4) = 495.
- Subtract teams with 0 or 1 girl: C(7, 4) + C(7, 3)C(5, 1) = 35 + 35×5 = 210.
- Valid teams = 495 − 210 = 285.

**Solved Example 2:** A committee of 5 is to be formed from 10 teachers and 8 students, with exactly 2 teachers. Find the number of ways.
- Choose 2 teachers from 10: C(10, 2) = 45.
- Choose 3 students from 8: C(8, 3) = 56.
- Total ways = 45 × 56 = 2,520.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer timeline.

**Combinations** — Comprehensive CUET Notes

**Deeper theory and proof:**

*The combinatorial proof of C(n, r) = n!/(r!(n−r)!):* Consider n distinct objects laid out in a row. To choose r of them, arrange all n objects in any order (n! ways) and then draw the first r as the selected group. Within the selected group, the r! possible orders are irrelevant; within the remaining n−r objects, (n−r)! orders are also irrelevant. Hence each distinct selection corresponds to r!(n−r)! arrangements, giving C(n, r) = n!/(r!(n−r)!).

*The inclusion–exclusion principle for combinations:* For selecting from multiple categories with overlaps, |A ∪ B| = |A| + |B| − |A ∩ B|. When selecting objects that belong to at least one of two categories, subtract the overlap. Example: selecting at least one from either of two sets of sizes m and n with k common elements: total = 2ⁿ + 2ᵐ − 2ᵏ − 1 (exclude empty set counted twice).

*Derangements and combinatorial restrictions:* The number of ways to select r objects from n with no two adjacent is C(n−r+1, r) (combinatorial "no-adjacent" theorem). For circular arrangements with no adjacency, the formula is (n−r)/n × C(n−r, r). These arise in CUET problems about seating arrangements or placing objects with separation constraints.

*Pascal's triangle and generating functions:* The entries of Pascal's triangle are the binomial coefficients C(n, r). The generating function (1 + x)ⁿ = Σ C(n, r) xʳ encodes all binomial coefficients as the coefficients of powers of x. Differentiating and evaluating at x = 1 yields sum of squares Σ C(n, r)² = C(2n, n). This result appears in advanced CUET problems.

*Cross-topic connection — probability:* The **hypergeometric distribution** counts the probability of k successes in n draws without replacement from a population with K successes and N−K failures: P(X = k) = [C(K, k) C(N−K, n−k)] / C(N, n). This connects combinations directly to probability, a frequent crossover topic.

*Challenging solved example:* A basket contains 5 red, 4 blue, and 3 green balls. In how many ways can 4 balls be drawn such that at least one of each colour is drawn?
- Count selections with at least one red, one blue, one green. Use inclusion–exclusion.
- Total ways to choose 4 balls from 12: C(12, 4) = 495.
- Subtract selections missing at least one colour:
  - Missing red: C(7, 4) = 35.
  - Missing blue: C(8, 4) = 70.
  - Missing green: C(9, 4) = 126.
- Add back selections missing two colours:
  - Missing red & blue: C(3, 4) = 0 (impossible).
  - Missing red & green: C(4, 4) = 1.
  - Missing blue & green: C(5, 4) = 5.
- Missing all three colours: impossible.
- Valid selections = 495 − (35 + 70 + 126) + (0 + 1 + 5) − 0 = 270.
