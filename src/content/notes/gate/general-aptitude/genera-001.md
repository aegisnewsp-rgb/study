---
exam: gate
examName: "GATE"
subject: quant
subjectName: "General Aptitude"
topic: genera-001
topicName: "Topic 1"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Number Systems and Divisibility

Number systems and divisibility form the bedrock of quantitative aptitude in GATE. These concepts appear almost every year — often as a 1-mark question, occasionally as a 2-mark problem embedded in a larger logical chain. Mastering them pays off reliably.

---

### 🟢 Lite — Quick Review (1h–1d)

> **Core formulas to memorize right now:**
> - **HCF × LCM = product of two numbers** (for any two positive integers a and b)
> - Divisibility shortcuts: sum of digits (9-test), last digit (2/5-test), last two digits (4-test), alternating sum (11-test)
> - **Remainder Theorem:** When N is divided by d, N = qd + r. The remainder r satisfies 0 ≤ r < d.
> - **Base-n conversions:** Repeatedly divide by n for decimal → base-n; multiply fractional part by n for the other direction.
> - A number is divisible by 3 iff the sum of its digits is divisible by 3.
> - A number is divisible by 11 iff (sum of digits in odd positions) − (sum of digits in even positions) is divisible by 11.

**⚡ Quick trick:** For any integer N, N^p mod m can be simplified using cyclicity of remainders. If 7^1 mod 8 = 7, 7^2 mod 8 = 1, then 7^3 mod 8 = 7 again — cycle of 2. This saves precious seconds.

**⚡ GATE exam tip:** GATE often tests the **concept that (a^n − b^n) is always divisible by (a − b)**. Remember: a² − b² = (a − b)(a + b). This extends to any power: aⁿ − bⁿ is divisible by (a − b) for all positive integers n.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### LCM and HCF

**HCF (GCD)** of two numbers is the largest number that divides both. **LCM** is the smallest number divisible by both.

**Key relationships:**
- **HCF × LCM = product of the two numbers** (only for exactly two numbers — NOT for three)
- If d = HCF(a, b), then a = d × a', b = d × b' where HCF(a', b') = 1

**Finding HCF:** Use the Euclidean algorithm — keep replacing (larger, smaller) with (smaller, remainder) until remainder is 0.

**GATE Example (2021, 1 mark):** Find the HCF of 1365 and 1560.
> Solution: 1560 mod 1365 = 195; 1365 mod 195 = 90 (since 195×7=1365); 195 mod 90 = 15; 90 mod 15 = 0 → HCF = **15**.

**Finding LCM:** For two numbers, LCM = (a × b) / HCF. For more than two, find LCM of first two, then LCM of that result with the third.

#### Divisibility Rules

| Divisor | Rule |
|---------|------|
| 2 | Last digit is even |
| 3 | Sum of digits divisible by 3 |
| 4 | Last two digits divisible by 4 |
| 5 | Last digit is 0 or 5 |
| 6 | Divisible by both 2 and 3 |
| 7 | Double the last digit, subtract from rest; repeat if needed |
| 8 | Last three digits divisible by 8 |
| 9 | Sum of digits divisible by 9 |
| 10 | Last digit is 0 |
| 11 | (Sum odd-position digits) − (Sum even-position digits) divisible by 11 |

#### Remainder Theorem and The Base Identity

When N is divided by divisor d: **N = q×d + r**, where 0 ≤ r < d.

**Key shortcut:** To find N mod d quickly, express N in a base that relates to d. For example, to find 47 mod 12: 47 = 48 − 1 = (4×12) − 1 → remainder = **11**.

**Fermat's Little Theorem (for GATE):** If p is prime and a is not divisible by p, then a^(p−1) ≡ 1 (mod p). Useful for large exponent remainder problems.

**Common GATE trap:** Students forget that remainders can be negative. If N ≡ −1 (mod 7), the remainder is actually 6, not −1.

#### Base-n Number Systems

**Decimal to base-n:** Divide the decimal number by n repeatedly; read remainders bottom-to-top.

**Base-n to decimal:** Multiply each digit by n^position (from right, 0-indexed) and sum.

**Hexadecimal (base-16)** is occasionally tested in GATE — digits 0–9, then A(10) through F(15).

**GATE Example:** Convert 11011 (base 2) to decimal.
> Solution: 1×2⁴ + 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 16 + 8 + 0 + 2 + 1 = **27**.

---

### 🔴 Extended — Deep Study (3mo+)

#### The Chinese Remainder Theorem (CRT)

CRT solves systems of simultaneous congruences when moduli are **pairwise coprime**:

Find N such that:
- N ≡ r₁ (mod m₁)
- N ≡ r₂ (mod m₂)
- ...
- N ≡ rₖ (mod mₖ)

Where m₁, m₂, ..., mₖ are pairwise coprime. The solution is unique modulo M = m₁ × m₂ × ... × mₖ.

**GATE Example:** Find the smallest N such that N ≡ 2 (mod 3) and N ≡ 3 (mod 5).
> Solution: M = 15. N = 2×5×2 + 3×3×2 mod 15 = 20 + 18 = 38 ≡ **8 (mod 15)**. Check: 8 mod 3 = 2 ✓, 8 mod 5 = 3 ✓.

#### The Floor and Ceiling Functions

For any real x:
- **⌊x⌋** = greatest integer ≤ x (floor)
- **⌈x⌉** = smallest integer ≥ x (ceiling)

**Useful identity:** ⌊n/d⌋ counts the number of multiples of d up to n.

#### Counting Divisors

If N = p₁^a × p₂^b × p₃^c × ..., the **number of divisors** is (a+1)(b+1)(c+1)...

**GATE Example:** How many divisors does 360 have?
> 360 = 2³ × 3² × 5¹. Number of divisors = (3+1)(2+1)(1+1) = 4×3×2 = **24**.

#### Euler's Totient Function φ(n)

φ(n) = count of integers from 1 to n that are coprime to n.
- If n = p^a × q^b, then φ(n) = n × (1−1/p) × (1−1/q)
- φ(p) = p−1 for prime p
- φ(mn) = φ(m) × φ(n) if m and n are coprime

#### Euler's Theorem (Generalized FLT)

If gcd(a, m) = 1, then a^φ(m) ≡ 1 (mod m).

#### Advanced Divisibility: The (a^n − b^n) Family

| Expression | Divisible by | Always? |
|-----------|-------------|---------|
| a² − b² | (a − b)(a + b) | Yes |
| a³ − b³ | (a − b)(a² + ab + b²) | Yes |
| aⁿ − bⁿ | (a − b) | Yes, all n |
| aⁿ + bⁿ | (a + b) | Only when n is odd |

**GATE trap:** aⁿ + bⁿ is NOT divisible by (a + b) when n is even. For example, 3² + 4² = 25 is NOT divisible by 7.

#### Perfect Squares and Cubes

- A number is a **perfect square** iff in its prime factorization, all exponents are even.
- A number is a **perfect cube** iff all exponents in its prime factorization are multiples of 3.
- Between consecutive square roots n and n+1, there are exactly 2n integers that are NOT perfect squares.

#### Successive Divisibility

If a number N leaves remainders r₁, r₂, r₃ when divided by d₁, d₂, d₃, a systematic approach: start from the largest modulus and work backward, or use CRT when moduli are coprime.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
