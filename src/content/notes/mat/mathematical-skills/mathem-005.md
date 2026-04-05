---
exam: mat
examName: MAT
subject: quant
subjectName: Mathematical Skills
topic: mathem-005
topicName: Number Systems and Decimals
weight: 3
country: mat
generated: "2026-03-25T17:00:00"
---

# Number Systems and Decimals

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Number Systems and Decimals** — Quick Facts

The number system hierarchy: **Natural numbers** (1, 2, 3...) → **Whole numbers** (0, 1, 2...) → **Integers** (...-2, -1, 0, 1, 2...) → **Rational numbers** (p/q where q≠0) → **Irrational numbers** (like √2, π) → **Real numbers** (rational + irrational).

Key Decimal Types:
- **Terminating decimals**: 1/4 = 0.25 (finite digits after decimal)
- **Recurring decimals**: 1/3 = 0.333... (repeating pattern)
- **Non-terminating, non-recurring**: Irrational numbers cannot be expressed as a fraction

⚡ **Exam tip for MAT**: Always check if a fraction terminates — denominator in simplest form must have only 2 and/or 5 as prime factors. For example, 3/8 = 0.375 (8=2³) terminates, but 1/7 = 0.142857... recurs.

**Conversions to remember**:
- 1/8 = 0.125 | 3/8 = 0.375 | 5/8 = 0.625 | 7/8 = 0.875
- 1/16 = 0.0625 | 3/16 = 0.1875 | 9/16 = 0.5625

**HCF and LCM relationship**: For any two numbers a and b: `a × b = HCF(a,b) × LCM(a,b)`

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Number Systems and Decimals** — Deep Dive

#### The Real Number Line
Every real number corresponds to exactly one point on the number line, and vice versa. This is fundamental to understanding inequalities and absolute value.

**Types of Numbers with Examples**:
| Type | Definition | Example | Non-Example |
|------|-----------|---------|-------------|
| Prime | Exactly 2 factors | 2, 3, 5, 7 | 9 (3 factors) |
| Composite | More than 2 factors | 4, 6, 8 | 5 (prime) |
| Even | Divisible by 2 | 0, 2, 4, 6 | 3, 5 |
| Odd | Not divisible by 2 | 1, 3, 5, 7 | 2, 4 |
| Rational | p/q, q≠0 | 3/7, 0.25, 0.333 | √2, π |

#### Decimal to Fraction Conversion

**Terminating → Fraction method**:
1. Count digits after decimal (n)
2. Remove decimal point → numerator
3. Denominator = 10ⁿ
4. Simplify

Example: 0.375 = 375/1000 = 3/8 ✓

**Recurring → Fraction method**:
1. Let x = 0.1666...
2. 10x = 1.666...
3. 10x - x = 1.5 → 9x = 1.5 → x = 1.5/9 = 1/6

**Rational Number Properties**:
- Sum/difference of two rationals = rational
- Product/dividing two rationals = rational ( divisor ≠ 0)
- √2 is irrational — proof by contradiction: assume √2 = p/q in lowest terms, then 2q² = p², so p is even, let p=2k, then 2q²=4k² → q²=2k², so q is even, but p/q not in lowest terms. Contradiction!

⚡ **MAT Shortcut**: When comparing fractions, cross-multiply. For 5/7 vs 6/8 → compare 5×8=40 vs 6×7=42, so 5/7 < 6/8.

#### Unit Digit Patterns (Key for MAT)
- Powers of 2 cycle: 2, 4, 8, 6 (period 4)
- Powers of 3 cycle: 3, 9, 7, 1 (period 4)
- Powers of 7 cycle: 7, 9, 3, 1 (period 4)
- Powers of 8 cycle: 8, 4, 2, 6 (period 4)

Example: Find unit digit of 7²³ → 23 mod 4 = 3 → unit digit = 7

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Number Systems and Decimals** — Complete Theory

#### Euclid's Division Lemma
For any integers a and b (b > 0), there exist unique integers q and r such that:
**a = bq + r**, where **0 ≤ r < b**

This lemma is the foundation for finding HCF using the Euclidean algorithm.

**Euclidean Algorithm for HCF**:
```
HCF(48, 18):
48 = 18×2 + 12
18 = 12×1 + 6
12 = 6×2 + 0
∴ HCF = 6
```

**LCM × HCF = Product** holds for any two positive integers.

#### Fundamental Theorem of Arithmetic
Every composite number can be expressed as a product of prime factors, and this factorisation is unique (up to the order of factors).

Example: 120 = 2³ × 3 × 5

This theorem helps in:
- Finding HCF/LGM
- Proving irrationality of numbers like √12 = 2√3
- Simplifying radicals

#### Surds and Indices
**Laws of Indices**:
- aᵐ × aⁿ = aᵐ⁺ⁿ
- aᵐ ÷ aⁿ = aᵐ⁻ⁿ
- (aᵐ)ⁿ = aᵐⁿ
- a⁰ = 1 (a ≠ 0)

**Rationalising Denominators**:
- For √a: multiply by √a/√a
- For a + √b: multiply by a - √b (conjugate pair)
- For √a + √b: multiply by √a - √b

Example: Rationalise 1/(3+√2) = (3-√2)/(9-2) = (3-√2)/7

**Comparison of Surds**:
To compare √2 and √3: square both → 2 < 3, so √2 < √3.

⚡ **MAT PYQ Pattern**: Questions on number systems appear every year. Focus on: divisibility rules, unit digit cycles, HCF-LCM applications, and conversion between fractions and decimals. A typical MAT question: "If 2ⁿ leaves remainder 1 when divided by 3, find the smallest n" → Answer: 1 (2¹=2≡2, 2²=4≡1 mod 3)

#### Practice Problem Types for MAT
1. **Divisibility**: Find the largest 4-digit number divisible by 12, 15, and 20 → HCF(12,15,20)=60 → largest 4-digit = 9999, 9999 ÷ 60 = 166.65 → answer = 166×60 = 9960
2. **Decimal sequences**: Find the 50th digit after decimal in 1/7 → 1/7 = 0.142857 repeating (period 6) → 50 mod 6 = 2 → 2nd digit in cycle = 4
3. **Unit digit**: Find unit digit of 7⁴⁵ × 3²⁸ → 7⁴⁵ unit digit cycles (7,9,3,1), 45 mod 4 = 1 → 7; 3²⁸ cycles (3,9,7,1), 28 mod 4 = 0 → 1; product unit digit = 7×1 = 7
4. **Digit displacement**: If 2³⁷ is written, what digit is at the 20th place from right? (Use patterns)

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
