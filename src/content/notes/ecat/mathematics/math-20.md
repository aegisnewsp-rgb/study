---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-20
topicName: Mathematical Induction
weight: 2
country: pakistan
generated: "2026-03-24T08:32:08.074684"
lastUpdated: "2026-06-28"
diagramPrompt: "Mathematical diagram showing Mathematical Induction concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Mathematical Induction

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Mathematical Induction is a **proof technique** that establishes a statement **P(n)** holds for every positive integer *n*. It rests on two mandatory steps:

1. **Base Case:** Verify P(1) is true.
2. **Inductive Step:** Assume P(k) is true for an arbitrary k ∈ ℕ (the **inductive hypothesis**), then prove P(k+1) follows.

Once both hold, P(n) is true ∀ n ≥ 1. The three identities you'll meet most often are:
- **Sum of first n naturals:** 1+2+…+n = n(n+1)/2
- **Sum of squares:** 1²+2²+…+n² = n(n+1)(2n+1)/6
- **Sum of cubes:** 1³+2³+…+n³ = [n(n+1)/2]²

ECAT trap to memorise: an argument that proves only P(1), P(2), P(3) by direct check is **not** induction — the inductive hypothesis must be applied to an *arbitrary* k.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definition and Two-Step Structure
The **Principle of Mathematical Induction (PMI)** rests on the well-ordering of natural numbers. A proposition P(n) declared over n ∈ ℕ is declared proved when:

- **Base step:** P(n₀) is true for the smallest relevant n₀ (usually 1, sometimes 0).
- **Inductive step:** For an *arbitrary but fixed* k ≥ n₀, P(k) ⇒ P(k+1).

The mechanism is domino-like: P(1) true, and P(k) ⇒ P(k+1) for every k, forces the truth to cascade forward.

#### Strong Induction
When proving P(k+1) requires P(k), P(k−1), …, P(1), use **Strong Induction**: assume P(1), P(2), …, P(k) all hold, then derive P(k+1). ECAT MCQs sometimes offer a "Strong Induction" option even when ordinary induction suffices — pick ordinary unless multiple prior cases are genuinely needed.

#### Standard Problem Types in ECAT

| Type | Classic Example |
|------|-----------------|
| Summation identity | Prove Σ i = n(n+1)/2 |
| Divisibility | n³ − n is divisible by 6 |
| Inequality | 2ⁿ > n² for n ≥ 5 |
| Closed form | n² + n is even for all n |

#### Derivation Snapshot (Sum of naturals)
Base: n=1 → 1 = 1·2/2 ✓
Assume: 1+2+…+k = k(k+1)/2.
Then 1+2+…+k+(k+1) = k(k+1)/2 + (k+1) = (k+1)(k+2)/2, which is the formula at n=k+1. ∎

#### Common Examiner Traps
- Proving P(k+1) ⇒ P(k) (reverse direction) — invalid.
- Verifying only the base case and skipping the inductive step.
- Using "for some k" instead of "for all k" in the universal quantifier.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Logical Equivalence with Well-Ordering
PMI is logically equivalent to the **Well-Ordering Principle**: every non-empty subset of ℕ has a least element. A proof by induction can be reframed as contradiction — assume P(n) fails for some smallest n, derive a contradiction with P(n−1). Recognising this equivalence helps when ECAT asks "which principle justifies induction?"

#### Edge Cases and Subtle Failures
- **Empty base case:** If P(1) is false, the entire proof collapses even if the inductive step is flawless.
- **Circular reasoning:** Writing P(k+1) in terms of P(k+1) instead of P(k) invalidates the argument silently.
- **Off-by-one errors:** For sums starting at n=0, the base case must be n=0, not n=1.
- **Variable confusion:** Using *n* inside the inductive hypothesis where *k* is required breaks the quantifier chain.

#### Worked Example — Divisibility
**Claim:** n³ − n is divisible by 6 for all n ∈ ℕ.
**Base:** n=1 → 1−1 = 0, divisible by 6. ✓
**Inductive hypothesis:** Suppose k³ − k = 6m for some integer m.
**Inductive step:** (k+1)³ − (k+1) = k³+3k²+3k+1 − k − 1 = (k³−k) + 3k(k+1).
The first bracket is 6m; the second, 3k(k+1), is divisible by 6 because k(k+1) is even. Sum is divisible by 6. ∎

#### Connections to Adjacent Topics
Mathematical Induction underpins proofs of the **Binomial Theorem** for integer exponents, the **divisibility lemmas** used in number theory, and **inequalities** (AM-GM, Bernoulli's inequality) that recur throughout ECAT algebra.

#### Two Practice Prompts
1. Prove by induction that 7ⁿ − 1 is divisible by 6 for all n ∈ ℕ.
2. Show that 1·2 + 2·3 + … + n(n+1) = n(n+1)(n+2)/3.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
