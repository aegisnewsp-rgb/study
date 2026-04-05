---
exam: mat
examName: MAT
subject: quant
subjectName: Mathematical Skills
topic: mathem-001
topicName: Number System & Basics
weight: 3
country: mat
generated: "2026-03-25T17:00:00"
---

# Number System & Basics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Number System** — Key Concepts for MAT
Core concepts: Integers, fractions, decimals, BODMAS rules, divisibility tests, HCF & LCM, remainders
High-yield points: Remainder theorem, unit digit calculations, divisibility by 3/9/11, surds simplification
⚡ Exam tip: MAT loves digit-sum shortcuts — use them to eliminate options fast

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Number System** — MAT Study Guide

**Types of Numbers:**
- **Natural numbers:** 1, 2, 3, 4... (counting numbers)
- **Whole numbers:** 0, 1, 2, 3... (natural numbers + 0)
- **Integers:** ...-3, -2, -1, 0, 1, 2, 3... (positives, negatives, zero)
- **Rational numbers:** Numbers expressible as p/q where q ≠ 0 (includes all fractions and terminating/repeating decimals)
- **Irrational numbers:** Cannot be expressed as p/q (e.g., √2, π, √3)
- **Real numbers:** Rational + irrational numbers combined

**BODMAS Rule (Order of Operations):**
Brackets → Orders (powers/roots) → Division → Multiplication → Addition → Subtraction
Example: 12 ÷ 3 × 2 + (5 - 3)²
= 12 ÷ 3 × 2 + 2²
= 12 ÷ 3 × 2 + 4
= 4 × 2 + 4
= 8 + 4 = **12**

**Divisibility Rules (High-Yield for MAT):**
- **2:** Last digit even (0, 2, 4, 6, 8)
- **3:** Sum of digits divisible by 3
- **4:** Last two digits divisible by 4
- **5:** Last digit 0 or 5
- **6:** Divisible by both 2 AND 3
- **8:** Last three digits divisible by 8
- **9:** Sum of digits divisible by 9
- **11:** (Sum of odd-position digits) - (Sum of even-position digits) = 0 or multiple of 11

**Unit Digit Shortcut (Massive Time-Saver):**
For powers, look at the unit digit only:
- 2ⁿ: 2, 4, 8, 6, 2... (cycle of 4)
- 3ⁿ: 3, 9, 7, 1, 3... (cycle of 4)
- 7ⁿ: 7, 9, 3, 1, 7... (cycle of 4)
- 8ⁿ: 8, 4, 2, 6, 8... (cycle of 4)
- 9ⁿ: 9, 1, 9, 1, 9... (cycle of 2)

**HCF × LCM = Product of Two Numbers** (for any two positive integers)
If a and b are two numbers: **a × b = HCF(a,b) × LCM(a,b)**

**Remainder Theorem:**
When dividing f(x) by (x - a), remainder = f(a)
When f(x) is divided by a constant divisor, use the concept cyclically.

**MAT Shortcut — Digit Sum Method:**
- If a number is divisible by 3/9, the digit sum must be divisible by 3/9
- Example: 47,523 → digit sum = 4+7+5+2+3 = 21 → divisible by 3 ✓
- Use this to quickly eliminate wrong answers in MAT's multiple choice

**Common Mistakes to Avoid:**
1. Forgetting BODMAS order — always solve brackets first
2. Confusing HCF with LCM — HCF is the BIGGEST number dividing both
3. Forgetting that 1 is a factor of every number
4. Assuming √(a+b) = √a + √b — THIS IS WRONG

**Example Question:**
Find the unit digit of 7²³ × 3⁵
Solution: 7 has cycle [7,9,3,1], 23 mod 4 = 3 → unit digit of 7²³ = 3
3 has cycle [3,9,7,1], 5 mod 4 = 1 → unit digit of 3⁵ = 3
Unit digit = 3 × 3 = 9 ✓

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Number System** — Comprehensive MAT Notes

**Section 1: Classification of Real Numbers**

The real number system forms a hierarchy:
```
Complex Numbers (a + bi)
    ↓
Real Numbers
    ├── Rational Numbers (p/q form)
    │   ├── Integers
    │   │   ├── Negative Integers (-1, -2, -3...)
    │   │   ├── Zero (0)
    │   │   └── Positive Integers (1, 2, 3...)
    │   └── Fractions (proper/improper)
    └── Irrational Numbers (π, √2, e, etc.)
```

**Key Properties:**
- **Closure:** Natural numbers are closed under addition and multiplication (not subtraction or division)
- **Commutative:** a + b = b + a; a × b = b × a
- **Associative:** (a+b)+c = a+(b+c); (a×b)×c = a×(b×c)
- **Distributive:** a×(b+c) = a×b + a×c
- **Identity:** 0 is additive identity, 1 is multiplicative identity
- **Inverse:** Every number has an additive inverse (negative); every non-zero number has a multiplicative inverse (reciprocal)

**Section 2: Factors and Multiples**

**Factor (Divisor):** A number that divides another exactly.
**Multiple:** A number that is divisible by another.

**Prime Numbers:**
- A prime has exactly two distinct factors: 1 and itself
- First 20 primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71
- 2 is the only even prime; all others are odd
- **Co-primes:** Two numbers with HCF = 1 (e.g., 8 and 15)
- **Twin primes:** Pairs differing by 2 (e.g., 3 and 5, 11 and 13)

**Prime Factorization:**
Express any number as product of primes:
- 360 = 2³ × 3² × 5
- 48 = 2⁴ × 3

**Finding HCF (GCD) — Methods:**
1. **Prime factorization:** Take the MINIMUM power of common primes
   - HCF of 72 (2³×3²) and 48 (2⁴×3) = 2³ × 3 = 8 × 3 = **24**
2. **Euclidean Algorithm:** 
   - gcd(a,b) = gcd(b, a mod b)
   - Example: gcd(48, 18) → 48 mod 18 = 12 → gcd(18,12) → 18 mod 12 = 6 → gcd(12,6) = **6**

**Finding LCM — Methods:**
1. **Prime factorization:** Take the MAXIMUM power of all primes
   - LCM of 72 (2³×3²) and 48 (2⁴×3) = 2⁴ × 3² = 16 × 9 = **144**
2. **Formula:** LCM(a,b) = |a×b| / HCF(a,b)

**Section 3: Fractions and Decimals**

**Types of Decimals:**
- **Terminating:** 1/4 = 0.25, 1/8 = 0.125
- **Repeating (Recurring):** 1/3 = 0.333..., 1/6 = 0.1666...

**Converting Recurring Decimal to Fraction:**
- 0.333... = 3/9 = 1/3
- 0.1666... = (16-1)/90 = 15/90 = 1/6
- 0.12343434... = (1234-12)/9900 = 1222/9900

**BODMAS with Fractions:**
- Convert mixed numbers to improper fractions for easier calculation
- Cross-cancel before multiplying to simplify
- Keep denominator same when adding/subtracting

**Section 4: Surds and Indices**

**Laws of Indices:**
- aᵐ × aⁿ = aᵐ⁺ⁿ
- aᵐ ÷ aⁿ = aᵐ⁻ⁿ
- (aᵐ)ⁿ = aᵐⁿ
- a⁰ = 1 (where a ≠ 0)
- a⁻ᵐ = 1/aᵐ

**Laws of Surds:**
- √(ab) = √a × √b
- √(a/b) = √a/√b
- (√a + √b)(√a - √b) = a - b (Rationalizing)
- To rationalize 1/(√a + √b): multiply by (√a - √b)/(√a - √b)

**Section 5: Remainder Theorems**

**Basic Remainder:**
When N is divided by d, N = dq + r where 0 ≤ r < d

**Euler's Theorem:**
- If a and n are co-prime: aᵠ⁽ⁿ⁾ ≡ 1 (mod n)
- Where φ(n) = count of numbers < n that are co-prime to n
- For prime p: φ(p) = p - 1

**Fermat's Little Theorem (Special Case of Euler):**
- If p is prime and doesn't divide a: aᵖ⁻¹ ≡ 1 (mod p)
- This is useful for large exponent remainder problems

**Section 6: Modern Math Applications in MAT**

**Applications in Data Sufficiency:**
- Knowing number properties helps eliminate impossible statements
- Example: "x is a prime number greater than 2" → x must be odd

**Problem-Solving Strategy:**
1. Identify the question type (divisibility, fraction, remainder, etc.)
2. Use digit-sum/divisibility tests to eliminate options
3. Apply appropriate formula or theorem
4. Verify answer makes sense

**Previous Year MAT Question Pattern:**
- 2-3 questions from number system per paper
- Often combined with arithmetic in case lets
- Unit digit and divisibility are most frequent

**Exam Tips:**
1. Use digit-sum method to check divisibility quickly
2. Remember: 1 is neither prime nor composite
3. For LCM/HCF word problems, identify the relationship first
4. In remainder questions, try to express in terms of the divisor

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
