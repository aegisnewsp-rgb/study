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

Number System is a foundational topic in MAT Quant — questions appear every year across various formats: HCF/LCM, divisibility rules, remainders, units digit, and face value/place value. Strong basics here help with speed in arithmetic and data interpretation too.

**Must-know:**
- Divisibility: 2 (even), 3 (sum divisible), 5 (ends 0/5), 9 (sum divisible), 10 (ends 0)
- HCF × LCM = Product of two numbers
- Prime numbers: First 20 primes; 2 is the only even prime
- Units digit patterns: Cycle of 4 for most bases

**Exam tip:** If a number is divisible by both 3 and 4, it's divisible by 12. Use this to quickly eliminate options.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Types of Numbers

**Natural Numbers:** 1, 2, 3, 4... (counting numbers)
**Whole Numbers:** 0, 1, 2, 3... (natural numbers + 0)
**Integers:** ...-3, -2, -1, 0, 1, 2, 3... (positive, negative, zero)
**Rational Numbers:** Can be expressed as p/q where q ≠ 0; includes all integers, fractions, terminating and repeating decimals
**Irrational Numbers:** Cannot be expressed as p/q; includes √2, π, e; decimal expansion never terminates or repeats
**Real Numbers:** Rational + Irrational combined

**Key properties:**
- Sum of two even numbers = even
- Sum of two odd numbers = even
- Sum of even + odd = odd
- Product of two even numbers = even
- Product of two odd numbers = odd
- Product of even × any = even

#### Divisibility Rules

| Divisor | Rule |
|---------|------|
| 2 | Last digit is even (0, 2, 4, 6, 8) |
| 3 | Sum of digits divisible by 3 |
| 4 | Last two digits divisible by 4 |
| 5 | Last digit is 0 or 5 |
| 6 | Divisible by both 2 and 3 |
| 7 | Double last digit and subtract from remaining number; result divisible by 7 |
| 8 | Last three digits divisible by 8 |
| 9 | Sum of digits divisible by 9 |
| 10 | Ends in 0 |
| 11 | (Sum of digits in odd places) - (Sum of digits in even places) is multiple of 11 |
| 12 | Divisible by both 3 and 4 |
| 15 | Divisible by both 3 and 5 |

**Examples:**
- 144: Sum of digits = 9, divisible by 3 and 9
- 1236: Last two digits = 36, divisible by 4
- 112233: (3+2+1) - (3+2+1) = 0, divisible by 11

#### HCF and LCM

**HCF (GCD):** Highest Common Factor — largest number that divides both

**LCM:** Least Common Multiple — smallest number divisible by both

**Key relationship:** For two numbers a and b:
HCF(a,b) × LCM(a,b) = a × b

**Methods to find HCF:**
1. **Prime factorisation:** Take minimum powers of common primes
   - 12 = 2² × 3; 18 = 2 × 3²; HCF = 2¹ × 3¹ = 6

2. **Division method (Euclidean algorithm):**
   - 48 ÷ 18 = 2 remainder 12
   - 18 ÷ 12 = 1 remainder 6
   - 12 ÷ 6 = 2 remainder 0; HCF = 6

**Methods to find LCM:**
1. **Prime factorisation:** Take maximum powers of all primes
   - 12 = 2² × 3; 18 = 2 × 3²; LCM = 2² × 3² = 36

2. **Using HCF:** LCM = (a × b) / HCF

**When numbers are coprime (HCF = 1):** LCM = a × b

#### Remainder Theorems

**Basic Remainder:**
When dividing N by d, N = q×d + r where 0 ≤ r < d

**Finding remainders quickly:**
- N mod 9 = digit sum mod 9 (since 10 ≡ 1 mod 9)
- N mod 11 = alternating digit sum mod 11

**Fermat's Little Theorem (for competitive exams):**
If p is prime and doesn't divide a, then a^(p-1) ≡ 1 mod p

**Examples:**
- 17³ ÷ 7: 17 mod 7 = 3; 3³ = 27; 27 mod 7 = 6
- 2¹⁰ ÷ 3: 2 mod 3 = 2; 2² mod 3 = 4 mod 3 = 1; so 2¹⁰ = (2²)^5 ≡ 1^5 = 1 mod 3

#### Units Digit and Last Two Digits

**Cycles for units digit:**

| Base | Cycle |
|------|-------|
| 0 | 0 |
| 1 | 1 |
| 2 | 2, 4, 8, 6 (cycle of 4) |
| 3 | 3, 9, 7, 1 (cycle of 4) |
| 4 | 4, 6 (cycle of 2) |
| 5 | 5 |
| 6 | 6 |
| 7 | 7, 9, 3, 1 (cycle of 4) |
| 8 | 8, 4, 2, 6 (cycle of 4) |
| 9 | 9, 1 (cycle of 2) |

**To find units digit of a^n:** Find n mod cycle length, then use that position

Example: 7²³ → 23 mod 4 = 3 → 3rd position in cycle → 7

**Last two digits:** Use mod 100; cycles are longer (20 for 2, 4 for 5 and 6, etc.)

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Divisibility and Number Theory

**Chinese Remainder Theorem:**
If you know remainders when divided by co-prime numbers, you can find the remainder when divided by their product.

Example: N ÷ 5 leaves remainder 3; N ÷ 7 leaves remainder 5. Find smallest N.

N = 3 mod 5 → N = 5k + 3
Substituting: 5k + 3 ≡ 5 mod 7 → 5k ≡ 2 mod 7 → k ≡ 6 mod 7 (since 5×6 = 30 ≡ 2)
Smallest k = 6 → N = 5(6) + 3 = 33

Verify: 33 ÷ 7 = 4 remainder 5 ✓

**Testing primality:**
- To check if n is prime: Test divisibility by all primes ≤ √n
- For n = 91: √91 ≈ 9.5; test 2, 3, 5, 7 → 91 = 7 × 13, not prime
- For n = 97: √97 ≈ 9.8; test 2, 3, 5, 7 → none divide; 97 is prime

**Wilson's Theorem:**
(n-1)! ≡ -1 mod n if and only if n is prime
- Useful for theoretical problems but impractical for large n in exams

#### Factorials and Divisibility

**n! = 1 × 2 × 3 × ... × n**

**Finding highest power of prime p in n!:**
Sum of floor(n/p^k) for k = 1, 2, 3... until p^k > n

Example: Highest power of 3 in 50!
- 50/3 = 16; 50/9 = 5; 50/27 = 1; 50/81 = 0
- Sum = 16 + 5 + 1 = 22
- So 3²² divides 50! but 3²³ does not

**Trailing zeros in n!:**
Trailing zeros = highest power of 5 in n! (since 2s are abundant)
- 100! → 100/5 = 20; 100/25 = 4; 100/125 = 0 → 24 trailing zeros

#### Number System — MAT Shortcuts

**Quick tricks:**

1. **Square of numbers ending in 5:**
   - 65² = 6×7 = 42 followed by 25 → 4225
   - 85² = 8×9 = 72 followed by 25 → 7225

2. **Cube of two-digit numbers:**
   - 13³ = (13² × 13) = 169 × 13 = 2197 (or use binomial: 13³ = 10³ + 3×10²×3 + 3×10×3² + 3³ = 1000+900+270+27)

3. **Sum of first n natural numbers:** n(n+1)/2
4. **Sum of first n squares:** n(n+1)(2n+1)/6
5. **Sum of first n cubes:** [n(n+1)/2]²

**Divisibility by 7 (alternative method):**
割 number: Take last digit, double it, subtract from remaining leading part.
Example: 203 → 20 - 2×3 = 20 - 6 = 14; 14 ÷ 7 = 2 ✓ → 203 divisible by 7

#### Practice Problems

Q1: Find HCF of 144, 180, and 108.
Solution: 144 = 2⁴×3²; 180 = 2²×3²×5; 108 = 2²×3³
HCF = 2²×3² = 4×9 = 36

Q2: LCM of two numbers is 180 and HCF is 6. If one number is 30, find the other.
Solution: a×b = HCF × LCM = 6 × 180 = 1080
Other number = 1080/30 = 36

Q3: What is the remainder when 7¹⁰⁰ is divided by 8?
Solution: 7 mod 8 = 7 ≡ -1
7¹⁰⁰ ≡ (-1)¹⁰⁰ = 1 mod 8 → Remainder = 1

Q4: How many trailing zeros in 50! ?
Solution: Power of 5 = 50/5 + 50/25 = 10 + 2 = 12 → 12 trailing zeros

Q5: Find the units digit of 3²³ × 7⁴⁵.
Solution: 3²³ → 23 mod 4 = 3 → units digit = 7 (3,9,7,1 cycle)
7⁴⁵ → 45 mod 4 = 1 → units digit = 7 (7,9,3,1 cycle)
7 × 7 = 49 → units digit = 9

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
