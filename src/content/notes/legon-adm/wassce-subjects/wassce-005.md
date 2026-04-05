---
exam: legon-adm
examName: Legon Admissions (Ghana)
subject: quant
subjectName: Wassce Subjects
topic: wassce-005
topicName: Indices and Logarithms
weight: 3
country: legon
generated: "2026-03-25T17:00:00"
---

# Indices and Logarithms

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Indices (exponents) and logarithms are closely linked topics that frequently appear together in WASSCE Paper 2. Indices deal with powers — for example, 2³ = 8 means 2 raised to the power 3 equals 8. Logarithms are the inverse operation: log₂ 8 = 3 because 2³ = 8. In general, if a^x = N, then log_a N = x.

**Essential Formulas:**
- a^m × a^n = a^(m+n)
- a^m ÷ a^n = a^(m−n)
- (a^m)^n = a^(mn)
- a^0 = 1 (for any a ≠ 0)
- a^(−n) = 1/a^n
- a^(m/n) = (ⁿ√a)^m = ⁿ√(a^m)
- log_a (MN) = log_a M + log_a N
- log_a (M/N) = log_a M − log_a N
- log_a (M^n) = n log_a M
- Change of base: log_a M = log_b M / log_b a

**Key Facts:**
- log_a 1 = 0 for any base a (since a^0 = 1)
- log_a a = 1 (since a^1 = a)
- If log_a x = log_a y, then x = y (one-to-one property)
- When solving exponential equations, try to express both sides with the same base if possible
- Common logarithm base is 10: log x means log₁₀ x. Natural logarithm base is e ≈ 2.71828: ln x means log_e x

⚡ **Exam Tip:** WASSCE often asks you to solve equations like 2^(x+1) = 32. Write 32 as 2^5, then equate exponents: x + 1 = 5, so x = 4. When solving log equations, always check that the argument is positive — a log equation like log₂(x − 3) = 4 requires x − 3 > 0, giving x > 3. Substitute x = 11 into the original: log₂(8) = 3 ≠ 4. Wait, let me recalculate: x − 3 = 2^4 = 16, so x = 19. Always verify your solution in the original equation.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Laws of Indices**

The laws of indices apply to all real exponents (integers, fractions, negatives). They are fundamental to simplifying expressions and solving equations involving powers.

*Product law:* a^m × a^n = a^(m+n). Example: 3² × 3⁴ = 3^(2+4) = 3⁶ = 729.
*Quotient law:* a^m ÷ a^n = a^(m−n). Example: 5⁶ ÷ 5² = 5^(6−2) = 5⁴ = 625.
*Power law:* (a^m)^n = a^(mn). Example: (2³)⁴ = 2^(3×4) = 2¹² = 4096.

Negative indices indicate reciprocals: 2^(−3) = 1/2³ = 1/8. Fractional indices indicate roots: 8^(2/3) = (³√8)² = 2² = 4.

**Solving Exponential Equations**

An exponential equation has the unknown in the exponent. Two approaches:

*Same base method:* If both sides can be written with the same base, equate the exponents. Example: 3^(2x+1) = 27 = 3³ → 2x + 1 = 3 → x = 1.

*Logarithm method:* If same base is not possible, take logarithms of both sides. Example: 2^x = 15 → x log 2 = log 15 → x = log 15 / log 2 ≈ 3.907.

**Understanding Logarithms**

The logarithm of a number is the exponent to which the base must be raised to produce that number. Formally: if a^x = N (a > 0, a ≠ 1), then log_a N = x.

*Common logarithm (base 10):* log₁₀ x is usually written as log x. log 100 = 2 because 10² = 100.
*Natural logarithm (base e):* log_e x is written as ln x. e ≈ 2.71828.
*Any base:* log₂ 8 = 3 because 2³ = 8.

**Logarithmic Laws**

These mirror the index laws since logarithms and indices are inverse operations:
- log(MN) = log M + log N
- log(M/N) = log M − log N
- log(M^n) = n log M
- log_a a = 1; log_a 1 = 0

**Solving Logarithmic Equations**

Example: log₂(x + 3) + log₂(x − 1) = 3
Combine logs: log₂[(x + 3)(x − 1)] = 3
Convert to exponential: (x + 3)(x − 1) = 2³ = 8
Expand: x² + 3x − x − 3 = 8 → x² + 2x − 11 = 0
Solve: x = (−2 ± √(4 + 44)) / 2 = (−2 ± √48) / 2 = (−2 ± 4√3) / 2 = −1 ± 2√3
Check domain: x + 3 > 0 and x − 1 > 0 → x > 1. Both solutions are > 1? −1 − 2√3 < 0, reject. x = −1 + 2√3 ≈ 2.46, valid.

**Change of Base Formula**

log_a M = log_b M / log_b a. This allows you to compute logs of any base using a calculator that only has common or natural log functions.

Example: Calculate log₂ 7 using a calculator. log₂ 7 = log₁₀ 7 / log₁₀ 2 ≈ 0.8451 / 0.3010 ≈ 2.807.

**Problem-Solving Strategies:**
- When given an equation like 4^(x+1) = 8^(2x), rewrite both sides with base 2: (2²)^(x+1) = (2³)^(2x) → 2^(2x+2) = 2^(6x) → 2x + 2 = 6x → x = 0.5
- For equations combining indices and logarithms, isolate the logarithmic or exponential term first
- Graphs of y = a^x and y = log_a x are inverses — symmetric about y = x

**Common Mistakes:**
- Confusing a^(mn) with a^m × a^n: (2³)² = 2^6 = 64, but 2³ × 2² = 8 × 4 = 32 — different results!
- Forgetting that log(M + N) ≠ log M + log N — only products factor, not sums
- Applying log to negative numbers — arguments of logarithms must always be positive
- Mixing up log laws when expanding: log(x²/9) = log x² − log 9 = 2 log x − log 9, not 2 log x − 3

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Derivation of Logarithmic Laws**

*Product law:* Let log_a M = x and log_a N = y, so M = a^x and N = a^y. Then MN = a^x × a^y = a^(x+y). Taking log base a: log_a (MN) = x + y = log_a M + log_a N. ✓

*Quotient law:* MN = a^x / a^y = a^(x−y). So log_a (M/N) = x − y = log_a M − log_a N. ✓

*Power law:* M = a^x, so M^n = (a^x)^n = a^(nx). Therefore log_a (M^n) = nx = n log_a M. ✓

**The Number e and Natural Logarithms**

The constant e = 2.71828... is defined as the limit of (1 + 1/n)^n as n → ∞. It arises naturally in compound interest, population growth, and radioactive decay. The function e^x has the unique property that its derivative equals itself: d/dx(e^x) = e^x.

The natural logarithm ln x = log_e x has the derivative: d/dx(ln x) = 1/x. This makes it indispensable in calculus.

**Exponential and Logarithmic Graphs**

y = a^x: passes through (0, 1), always positive, increases for a > 1, decreases for 0 < a < 1, has a horizontal asymptote at y = 0.

y = log_a x: passes through (1, 0), domain x > 0, range all real numbers, increases for a > 1, has a vertical asymptote at x = 0.

These two graphs are reflections of each other across the line y = x.

**Solving Systems Involving Logarithms**

Example: Given that log₂(x + y) = 5 and log₂(x − y) = 3, find x and y.
From log₂(x + y) = 5: x + y = 2⁵ = 32
From log₂(x − y) = 3: x − y = 2³ = 8
Adding: 2x = 40 → x = 20. Then y = 12.

**Application: pH and Decibel Calculations**

pH = −log₁₀[H⁺]. A solution with [H⁺] = 1.5 × 10⁻⁵ mol/L has pH = −log(1.5 × 10⁻⁵) = −(log 1.5 + log 10⁻⁵) = −(0.176 + (−5)) = 4.824.

Sound level in decibels: L = 10 log₁₀(I/I₀), where I₀ = 10⁻¹² W/m².

**Simultaneous Logarithmic and Exponential Equations**

Example: Given y = 2^x and log₂ y + log₂ x = 3
Substitute: y = 2^x gives log₂(2^x) + log₂ x = 3 → x + log₂ x = 3
This requires numerical solution or inspection: try x = 2: 2 + 1 = 3 ✓. So x = 2, y = 4.

**WASSCE Exam Patterns**

Paper 1: Index questions often appear as simplification problems, evaluating expressions like (8/27)^(2/3) or solving 4^x = 0.125. Logarithm questions frequently test the laws directly: "Express log₃ 54 − log₃ 2 as a single logarithm."

Paper 2: Solving exponential equations leading to quadratic equations. Example: 4^x − 3(2^x) + 2 = 0 can be written as (2^x)² − 3(2^x) + 2 = 0. Let u = 2^x, then u² − 3u + 2 = 0 → (u − 1)(u − 2) = 0 → u = 1 or u = 2. So 2^x = 1 → x = 0, or 2^x = 2 → x = 1.

⚡ **Advanced Tip:** When solving 3^(2x+1) − 8(3^x) = 3, treat it as a quadratic in 3^x. Let u = 3^x, then 3(u²) − 8u − 3 = 0 (since 3^(2x+1) = 3 × (3^x)² = 3u²). Solve: 3u² − 8u − 3 = 0 → (3u + 1)(u − 3) = 0 → u = 3 or u = −1/3. Since u = 3^x > 0, u = 3. So 3^x = 3 → x = 1.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
