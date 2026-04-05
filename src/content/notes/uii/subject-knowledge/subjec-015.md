---
exam: uii
examName: UI Entrance (Indonesia)
subject: quant
subjectName: Subject Knowledge
topic: subjec-015
topicName: Progressions — Arithmetic & Geometric
weight: 3
country: uii
generated: "2026-03-25T17:00:00"
diagramPrompt: Two number lines side by side: left showing arithmetic sequence 3, 7, 11, 15, 19 with constant difference d=4 between terms; right showing geometric sequence 2, 6, 18, 54, 162 with constant ratio r=3
---

# Progressions — Arithmetic & Geometric

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Arithmetic Progression (AP):**
- Terms: a, a+d, a+2d, a+3d, ...
- General term: Tₙ = a + (n−1)d, where a = first term, d = common difference
- Sum of first n terms: Sₙ = n/2 × (2a + (n−1)d) = n/2 × (first + last)

**Geometric Progression (GP):**
- Terms: a, ar, ar², ar³, ...
- General term: Tₙ = arⁿ⁻¹, where a = first term, r = common ratio
- Sum of first n terms: Sₙ = a(rⁿ − 1)/(r − 1) for r ≠ 1, or Sₙ = na for r = 1
- Sum to infinity: S∞ = a/(1 − r) only when |r| < 1

⚡ **Exam tip:** If asked "find the sum of all multiples of 7 between 100 and 500," first identify the first (105) and last (497) multiples, count terms using (497−105)/7 + 1 = 57, then S₅₇ = 57/2 × (105+497) = 17,157.

⚡ **Exam tip:** For a geometric series with |r| < 1, as n → ∞, rⁿ → 0. This makes the infinite sum converge. If |r| ≥ 1, the infinite sum diverges (doesn't exist as a finite number).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Arithmetic Progressions — Worked Examples**

Find the 25th term of an AP where the first term is 7 and the 10th term is 34.
- T₁₀ = a + 9d = 34, and a = 7, so 7 + 9d = 34 → 9d = 27 → d = 3
- T₂₅ = a + 24d = 7 + 72 = 79

Find the sum of the first 20 odd numbers: 1 + 3 + 5 + ... + 39.
- First term a = 1, common difference d = 2, n = 20
- Last term = a + (n−1)d = 1 + 19(2) = 39
- S₂₀ = 20/2 × (1 + 39) = 10 × 40 = 400

**Geometric Progressions — Worked Examples**

Find the 8th term of a GP with first term 5 and common ratio 3.
- T₈ = a × r⁷ = 5 × 3⁷ = 5 × 2187 = 10,935

Find the sum to infinity of the GP: 1 + 1/3 + 1/9 + ...
- a = 1, r = 1/3
- S∞ = 1 / (1 − 1/3) = 1 / (2/3) = 3/2 = 1.5

**Converting Recurring Decimals to Fractions using GP**

0.777... = 7/10 + 7/100 + 7/1000 + ... = (7/10) / (1 − 1/10) = (7/10) / (9/10) = 7/9.

0.363636... = 36/100 + 36/10000 + ... = (36/100) / (1 − 1/100) = (36/100) / (99/100) = 36/99 = 4/11.

**Mixed Problems**

The arithmetic mean between two numbers a and b is (a + b)/2. The geometric mean is √(ab).

Insert 3 arithmetic means between 5 and 9: we need 5, A₁, A₂, A₃, 9. Here n+2 = 5 terms, so n = 3. d = (9 − 5)/(3+1) = 1. The means are 6, 7, 8.

Insert 2 geometric means between 4 and 25: we need 4, G₁, G₂, 25. Here n+2 = 4 terms, so n = 2. r³ = 25/4, so r = ³√(25/4) = ³√6.25 ≈ 1.84. G₁ = 4r, G₂ = 4r².

**Common Mistakes to Avoid:**

| Mistake | Correct approach |
|---------|-----------------|
| Using n instead of (n−1) in the general term formula | Tₙ = a + (n−1)d for AP; Tₙ = arⁿ⁻¹ for GP |
| Forgetting that r can be negative or fractional | r = −2 means alternating signs; r = ½ means terms shrink |
| Applying infinite sum formula when \|r\| ≥ 1 | S∞ only exists when \|r\| < 1 |
| Mixing up arithmetic and geometric formulas | AP: constant difference; GP: constant ratio |
| Forgetting to check whether r = 1 in GP sum formula | When r = 1, Sₙ = na (all terms equal to a) |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**AP and GP in Real-World Contexts**

AP applications: regular savings deposits (each month adds a fixed amount), constant rate of increase in rent, equal monthly instalments on a simple interest loan.

GP applications: compound interest (principal grows by fixed percentage each period), population growth at a constant percentage rate, depreciation (value decreases by a fixed percentage), bouncing ball height (each bounce reaches a fixed fraction of the previous height).

Compound interest example: Rp 1,000,000 invested at 12% per annum, compounded monthly. After 5 years: A = P(1 + r/n)^(nt) = 1,000,000 × (1 + 0.12/12)^(12×5) = 1,000,000 × (1.01)^60 ≈ Rp 1,816,697.

**Harmonic Progression (HP)**

A sequence is in HP if the reciprocals form an AP. The harmonic mean of a and b is 2ab/(a + b).

For three numbers in HP: a, h, b with h as harmonic mean: h = 2ab/(a+b). If a = 4 and b = 6, h = 2×4×6/(4+6) = 48/10 = 4.8.

**Connection Between AM, GM, and HM**

For any two positive numbers a and b: AM ≥ GM ≥ HM. The arithmetic mean (a+b)/2 is always ≥ the geometric mean √(ab), which is always ≥ the harmonic mean 2ab/(a+b), with equality only when a = b.

For a = 4, b = 9: AM = 6.5, GM = 6, HM = 5.53. Indeed 6.5 > 6 > 5.53.

**AP + GP Mixed Problems**

If a, b, c are in AP: 2b = a + c. If a, b, c are in GP: b² = ac. Problems often ask to find unknown parameters satisfying both conditions simultaneously.

Example: Find a and b such that a, 6, b are in both AP and GP.
- From AP: 2(6) = a + b → a + b = 12
- From GP: 6² = a × b → ab = 36
- Solve: a and b are roots of x² − 12x + 36 = 0 → (x−6)² = 0 → a = b = 6

**Summation of Series**

Sum of squares: Σk² = 1² + 2² + ... + n² = n(n+1)(2n+1)/6.
Sum of cubes: Σk³ = [n(n+1)/2]².

1² + 2² + ... + 10² = 10×11×21/6 = 2310/6 = 385.
1³ + 2³ + ... + 10³ = (10×11/2)² = 55² = 3025.

**Solving Equations with Progressions**

Find the number of terms in the AP: 5 + 9 + 13 + ... + 77.
- a = 5, d = 4, last = 77
- 77 = 5 + (n−1)4 → 72 = 4(n−1) → n−1 = 18 → n = 19 terms

Find the smallest n such that the GP: 3, 6, 12, ... exceeds 100,000.
- Tₙ = 3 × 2ⁿ⁻¹ > 100,000
- 2ⁿ⁻¹ > 33,333
- n−1 > log₂(33,333) ≈ 15.03
- n > 16.03, so n = 17 terms. Check: T₁₇ = 3 × 2¹⁶ = 3 × 65,536 = 196,608 > 100,000. T₁₆ = 98,304 < 100,000. Correct.

**Historical Context**

Sequences have fascinated mathematicians since antiquity. The Rhind Papyrus (c. 1650 BCE) contains problems equivalent to arithmetic progressions. Euclid's Elements (Book IX) contains propositions on geometric progressions. The Fibonacci sequence (1, 1, 2, 3, 5, 8, ...) was introduced by Leonardo of Pisa in 1202 to model rabbit breeding. Fibonacci is a special recursive sequence, not arithmetic or geometric, but appears frequently in nature (pinecone spirals, sunflower seed arrangements).

**Exam Pattern Analysis**

UI progression questions commonly:
1. Find a specific term or sum in a given AP or GP
2. Determine whether a sequence is AP, GP, or neither
3. Solve for unknowns given that three numbers are in AP or GP
4. Use progression formulas in word problems (population growth, depreciation, instalments)
5. Convert recurring decimals to fractions using geometric series
6. Find the sum of special series (consecutive integers, squares, cubes)

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
