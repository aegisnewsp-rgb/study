---
exam: uii
examName: UI Entrance (Indonesia)
subject: quant
subjectName: Academic Potential
topic: academ-001
topicName: Number Sequences and Patterns
weight: 3
country: uii
generated: "2026-03-25T17:00:00"
---

# Number Sequences and Patterns

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A number sequence is an ordered list of numbers following a specific rule. Your task is to identify the pattern and predict the next term(s). In the UI entrance test, sequence questions assess your ability to recognise numerical relationships — a core component of academic potential testing.

**Common Sequence Types:**

1. **Arithmetic sequence:** constant difference d between consecutive terms.
   - Formula: nth term = a + (n−1)d, where a = first term
   - Example: 3, 7, 11, 15, ... → d = 4 → a₁ = 3 → a₁₀ = 3 + 9(4) = 39

2. **Geometric sequence:** constant ratio r between consecutive terms.
   - Formula: nth term = a × r^(n−1)
   - Example: 2, 6, 18, 54, ... → r = 3 → a = 2 → a₆ = 2 × 3^5 = 486

3. **Square numbers:** 1, 4, 9, 16, 25, ... → n²
4. **Cube numbers:** 1, 8, 27, 64, 125, ... → n³
5. **Fibonacci-like:** each term is sum of two previous terms. 1, 1, 2, 3, 5, 8, 13, 21, ...

**Key Patterns to Watch:**
- Alternating addition/subtraction: 10, 16, 11, 17, 12, 18, ... (alternately add 6, subtract 5)
- Geometric with sign changes: 3, −6, 12, −24, ... (multiply by −2)
- Triangular numbers: 1, 3, 6, 10, 15, 21, ... (add 2, 3, 4, 5, ...)
- Square rooted: √1, √4, √9, √16, ... = 1, 2, 3, 4, ...

⚡ **Exam Tip:** When a sequence doesn't look arithmetic (constant difference) or geometric (constant ratio), look for:
- Differences of differences (second-order sequences)
- A pattern involving two interleaved sequences
- Powers, roots, or factorials
- Combination of operations (e.g., square, then subtract 1)
Always verify your rule by checking it against at least 3 terms.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Arithmetic Sequences**

An arithmetic sequence has the form: a, a+d, a+2d, a+3d, ...
The nth term: Tₙ = a + (n−1)d.
The sum of the first n terms: Sₙ = n/2 × (a + l) where l = last term = a + (n−1)d.
Alternatively: Sₙ = n/2 × (2a + (n−1)d).

Example: Find the 20th term and sum of first 20 terms of 5, 9, 13, 17, ...
a = 5, d = 4. T₂₀ = 5 + 19(4) = 5 + 76 = 81.
S₂₀ = 20/2 × (2(5) + 19(4)) = 10 × (10 + 76) = 10 × 86 = 860.

**Geometric Sequences**

A geometric sequence has the form: a, ar, ar², ar³, ...
The nth term: Tₙ = a × r^(n−1).
The sum of first n terms: Sₙ = a(1 − r^n) / (1 − r) for r ≠ 1.
If |r| < 1, the infinite sum exists: S∞ = a / (1 − r).

Example: 3, 9, 27, 81, ... a = 3, r = 3. T₁₀ = 3 × 3^9 = 3^10 = 59,049. (Note: 3 × 3^9 = 3^10 ✓)
S₅ = 3(1 − 3^5)/(1 − 3) = 3(1 − 243)/(−2) = 3(−242)/(−2) = 3 × 121 = 363.
Or adding: 3 + 9 + 27 + 81 + 243 = 363 ✓.

**Quadratic Sequences (Second-Order)**

When the first differences are not constant but the second differences are constant, the sequence is quadratic.

Example: 2, 6, 12, 20, 30, ...
First differences: 4, 6, 8, 10 (not constant).
Second differences: 2, 2, 2 (constant = 2).
The nth term is of the form an² + bn + c. Since second difference = 2a, we have 2a = 2 → a = 1.
Tₙ = n² + bn + c.
n=1: T₁ = 1 + b + c = 2 → b + c = 1.
n=2: T₂ = 4 + 2b + c = 6 → 2b + c = 2.
Subtract: (2b+c) − (b+c) = 2 − 1 → b = 1.
Then c = 0. So Tₙ = n² + n = n(n+1). Check: n=4: 16+4=20 ✓.

**Interleaved Sequences**

Two patterns are mixed together.

Example: 2, 5, 4, 10, 8, 15, 16, 20, ...
Odd positions (1st, 3rd, 5th, ...): 2, 4, 8, 16, ... → multiply by 2 each time (geometric, r=2).
Even positions (2nd, 4th, 6th, ...): 5, 10, 15, 20, ... → add 5 each time (arithmetic, d=5).
Next term (9th, odd): 16 × 2 = 32.

**Pattern Recognition — Non-Numeric**

Some UI questions involve visual patterns that translate to numbers.
Example: Each shape has a number of sides, vertices, or line segments. Count and find the next value.

Example: Triangle (3 sides), square (4), pentagon (5), hexagon (6) → next is heptagon (7 sides).

**Special Sequences**

*Factorials:* 1, 2, 6, 24, 120, 720, ... (n! = 1×2×...×n)
*Hailstone (Collatz):* start with n. If even, halve; if odd, triple and add 1. Produces unpredictable peaks.
*Prime numbers:* 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...
*Triangular numbers:* 1, 3, 6, 10, 15, 21, ... = n(n+1)/2
*Fibonacci:* 1, 1, 2, 3, 5, 8, 13, 21, ... = sum of two previous terms

**Problem-Solving Strategies:**
- Calculate first differences — if constant, it's arithmetic
- Calculate second differences — if constant, it's quadratic
- Check ratios — if constant ratio, it's geometric
- For mixed sequences, separate odd and even positions into their own sequences
- If none of these work, look for: adding consecutive integers, differences of squares, alternating signs

**Common Mistakes:**
- Assuming a sequence is arithmetic when it's actually geometric or quadratic
- In geometric sequences, forgetting that the ratio applies to consecutive terms, not to the formula directly for Tₙ
- Confusing the formula for nth term (Tₙ = a + (n−1)d) with the sum formula
- Forgetting that geometric sequences can have fractional or negative ratios

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**General Polynomial Sequences**

Sequences where the nth term is a polynomial in n. The order of the polynomial equals the order of constant differences.
- Constant first differences → linear (order 1): Tₙ = an + b
- Constant second differences → quadratic (order 2): Tₙ = an² + bn + c
- Constant third differences → cubic (order 3): Tₙ = an³ + bn² + cn + d

**Sum of Arithmetic Sequence — Derivation**

Sₙ = a + (a+d) + (a+2d) + ... + (a+(n−1)d)
Writing backwards: Sₙ = (a+(n−1)d) + (a+(n−2)d) + ... + a
Adding: 2Sₙ = (2a+(n−1)d) + (2a+(n−1)d) + ... n times
2Sₙ = n(2a + (n−1)d)
Sₙ = n/2 × (2a + (n−1)d) ✓

**Sum of Geometric Sequence — Derivation**

Sₙ = a + ar + ar² + ... + ar^(n−1)
rSₙ = ar + ar² + ... + ar^(n)
Sₙ − rSₙ = a − ar^n
Sₙ(1−r) = a(1−r^n)
Sₙ = a(1−r^n)/(1−r) ✓

For |r| < 1, as n → ∞, r^n → 0, so S∞ = a/(1−r).

**Recurrence Relations**

A recurrence defines each term based on previous terms. Fibonacci: Fₙ = Fₙ₋₁ + Fₙ₋₂ with F₁ = 1, F₂ = 1.
Arithmetic: Tₙ = Tₙ₋₁ + d, with T₁ = a.
Geometric: Tₙ = r × Tₙ₋₁, with T₁ = a.

**Finding the nth Term of a Quadratic Sequence**

Given three consecutive terms of a quadratic sequence, find a, b, c in Tₙ = an² + bn + c.
From T₁ = a + b + c, T₂ = 4a + 2b + c, T₃ = 9a + 3b + c.
Subtract: T₂ − T₁ = 3a + b. T₃ − T₂ = 5a + b.
Subtract again: (T₃ − T₂) − (T₂ − T₁) = 2a.
So a = [(T₃ − T₂) − (T₂ − T₁)] / 2.

Example: Sequence 3, 10, 21, 36.
T₂ − T₁ = 7, T₃ − T₂ = 11. Difference = 4. a = 4/2 = 2.
3a + b = 7 → 6 + b = 7 → b = 1.
a + b + c = 3 → 2 + 1 + c = 3 → c = 0.
Tₙ = 2n² + n = n(2n+1). Check: n=4: 2(16)+4=36 ✓.

**UI Entrance Exam Patterns**

Sequence questions appear as:
1. Find the next term in a simple pattern (arithmetic, geometric, square/cube numbers)
2. Find a specific term given the pattern
3. Complete a partially filled sequence
4. Identify the rule from multiple sequences
5. Sequence word problems: "A细菌 culture has 500 bacteria, doubling every hour. How many after 10 hours?" → geometric: 500 × 2^10 = 512,000.

⚡ **Exam Strategy:** For tricky sequences, try computing first 3–4 differences systematically. If first differences aren't constant, compute second differences. If those are constant, it's a quadratic. For interleaved sequences, check whether odd positions form one pattern and even positions another.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
