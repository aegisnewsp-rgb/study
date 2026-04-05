---
exam: legon-adm
examName: Legon Admissions (Ghana)
subject: quant
subjectName: Wassce Subjects
topic: wassce-010
topicName: Topic 10
weight: 3
country: legon
generated: "2026-03-25T17:00:00"
---

# Topic 10: Sequences and Series

### 🟢 Lite — Quick Review (1h–1d)

A sequence is an ordered list of numbers following a particular pattern or rule. Each number in the sequence is called a term, denoted by symbols such as a₁ (first term), a₂ (second term), and so on, with aₙ representing the nth term. A series is the sum of the terms of a sequence. In the WASSCE quantitative reasoning paper, arithmetic sequences (where a constant value is added to each term to get the next) and arithmetic series are particularly important, alongside geometric sequences and their series.

The arithmetic sequence has a first term, a, and a common difference, d, which is the amount added to each term to obtain the next. The nth term formula is aₙ = a + (n - 1)d. The geometric sequence instead has a common ratio, r, between consecutive terms, so each term is obtained by multiplying the previous term by r. Its nth term is aₙ = arⁿ⁻¹. Understanding these patterns allows you to determine any term without listing the entire sequence.

**Key Facts:**
- Arithmetic sequence: a, a+d, a+2d, a+3d, ... where d is the common difference
- nth term of arithmetic sequence: aₙ = a + (n - 1)d
- Arithmetic series sum: Sₙ = n/2(a + l) = n/2[2a + (n-1)d], where l is the last term
- Geometric sequence: a, ar, ar², ar³, ... where r is the common ratio
- nth term of geometric sequence: aₙ = arⁿ⁻¹
- Geometric series sum: Sₙ = a(rⁿ - 1)/(r - 1) for r ≠ 1

⚡ **Exam Tip:** When asked for the "sum to infinity" of a geometric series, first verify that |r| < 1. If |r| ≥ 1, the series does not converge to a finite sum.

---

### 🟡 Standard — Regular Study (2d–2mo)

**Arithmetic Sequences**

Find the 15th term of the sequence: 7, 11, 15, 19, ...

Here a = 7 and d = 11 - 7 = 4
a₁₅ = 7 + (15 - 1) × 4 = 7 + 56 = **63**

Alternatively: 7 + 14 × 4 = 7 + 56 = **63**

**Arithmetic Series**

Find the sum of the first 20 positive even integers: 2 + 4 + 6 + ... + 40

Method 1: Using Sₙ = n/2(a + l)
a = 2, l = 40 (since 20th even = 2 × 20 = 40), n = 20
S₂₀ = 20/2 × (2 + 40) = 10 × 42 = **420**

Method 2: Using Sₙ = n/2[2a + (n-1)d]
a = 2, d = 2, n = 20
S₂₀ = 20/2 × [2(2) + 19(2)] = 10 × (4 + 38) = 10 × 42 = **420**

**Geometric Sequences**

Find the 8th term of 3, 6, 12, 24, ...

Here a = 3, r = 6/3 = 2
a₈ = 3 × 2⁽⁸⁻¹⁾ = 3 × 2⁷ = 3 × 128 = **384**

**Geometric Series**

Find the sum of the first 7 terms of 2, 6, 18, 54, ...

a = 2, r = 3, n = 7
S₇ = 2(3⁷ - 1)/(3 - 1) = 2(2187 - 1)/2 = 2(2186)/2 = **2186**

**Comparison Table: Arithmetic vs Geometric**

| Property | Arithmetic Sequence | Geometric Sequence |
|----------|--------------------|--------------------|
| Pattern | Add constant d | Multiply by constant r |
| Terms | a, a+d, a+2d, a+3d, ... | a, ar, ar², ar³, ... |
| nth term formula | aₙ = a + (n-1)d | aₙ = arⁿ⁻¹ |
| Sum formula | Sₙ = n/2(a + l) | Sₙ = a(rⁿ - 1)/(r - 1) |
| Type of variation | Linear/direct | Exponential |

**Finding Missing Terms in Sequences**

Insert three arithmetic means between 5 and 25.
We need to find a₂, a₃, a₄ such that: 5, a₂, a₃, a₄, 25 forms an arithmetic sequence.
Total parts = 5 (including endpoints)
d = (25 - 5)/(5 - 1) = 20/4 = 5
Means: 5 + 5 = **10**, 10 + 5 = **15**, 15 + 5 = **20**
Sequence: 5, 10, 15, 20, 25

**Common Mistakes to Avoid:**
1. Using the wrong value of n in the formula (n is the term number, not the value of the term)
2. Confusing the common difference d with the common ratio r
3. Forgetting that arithmetic sequences grow linearly while geometric sequences grow exponentially
4. Applying the geometric sum formula incorrectly when r is negative
5. Mixing up the nth term formula with the sum formula

**Problem-Solving Strategy:**
1. Identify whether the sequence is arithmetic (constant addition) or geometric (constant multiplication)
2. Determine the first term a and the common element (d or r)
3. Decide which formula you need (nth term or sum)
4. Substitute the known values
5. Solve for the unknown (which may be n, a, d, r, or the sum)
6. Check your answer by verification where possible

---

### 🔴 Extended — Deep Study (3mo+)

**Historical Context: The Harmonic Sequence and Zeno's Paradox**

The ancient Greek philosopher Zeno of Elea (c. 450 BCE) proposed several paradoxes, one of which involved the sum of an infinite geometric series. His Dichotomy paradox states that to reach a destination, one must first cover half the distance, then half the remaining distance, and so on infinitely. The sum ½ + ¼ + ⅛ + ... converges to 1, proving that infinite processes can have finite results—a revolutionary concept that influenced the development of calculus over two millennia later.

**Sum to Infinity of Geometric Series**

For a geometric series with |r| < 1, as n → ∞, rⁿ → 0, so:
S∞ = a/(1 - r) for |r| < 1

Example: Find the sum to infinity of 1 + 1/3 + 1/9 + 1/27 + ...
a = 1, r = 1/3 (|r| < 1 ✓)
S∞ = 1/(1 - 1/3) = 1/(2/3) = **3/2 = 1.5**

If |r| ≥ 1, the series diverges (has no finite sum).

**Arithmetic-Geometric Sequences**

Some sequences combine arithmetic and geometric patterns:
1, 3, 7, 15, 31, ... where each term = 2ⁿ - 1

Or: 2, 5, 11, 23, 47, ... where each term = 3 × 2ⁿ⁻¹ - 1

**Recursive Formulas**

Sequences can be defined by recurrence relations:
- Arithmetic: aₙ = aₙ₋₁ + d (with a₁ given)
- Geometric: aₙ = aₙ₋₁ × r (with a₁ given)

The Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, ...
Defined recursively: F₁ = 1, F₂ = 1, Fₙ = Fₙ₋₁ + Fₙ₋₂

**Quadratic Sequences**

When the second differences are constant, the sequence follows a quadratic pattern:

Sequence: 3, 10, 21, 36, 55, ...
First differences: 7, 11, 15, 19
Second differences: 4, 4, 4 (constant!)

For quadratic sequences, nth term takes the form an² + bn + c.
Using the first three terms:
n=1: a + b + c = 3
n=2: 4a + 2b + c = 10
n=3: 9a + 3b + c = 21

Solving: a = 2, b = 1, c = 0
**aₙ = 2n² + n** (Verify: n=4: 2(16)+4=36 ✓)

**WASSCE Examination Patterns:**

The WASSCE quantitative reasoning paper commonly features:
1. Finding the nth term of arithmetic/geometric sequences (Objective)
2. Finding the sum of arithmetic/geometric series (Objective and Theory)
3. Identifying sequence type from given terms (Objective)
4. Word problems leading to sequences (Theory)
5. Quadratic sequence nth term (usually Theory only)

**Special Formulas to Memorise:**
- Sum of first n natural numbers: n(n+1)/2
- Sum of first n squares: n(n+1)(2n+1)/6
- Sum of first n cubes: [n(n+1)/2]²

⚡ **Pro Exam Tip:** In the WASSCE, always verify that a sequence is arithmetic by checking that consecutive differences are equal, and geometric by checking that consecutive ratios are equal. For quadratic sequences, calculate second differences—they will be constant.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
