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

### 🟢 Lite — Quick Review

The number system forms the bedrock of all quantitative reasoning in the MAT examination. Every arithmetic operation, every word problem, every data interpretation question ultimately resolves to manipulations of integers, fractions, and their properties. The syllabus draws heavily from school-level mathematics, but the speed required means you must know divisibility rules, HCF/LCM relationships, and remainder patterns inside the gate. The MAT paper contains approximately 100 questions across all sections, with the Quantitative section typically offering 25–30 questions where number system variants — divisibility, factors, units digit, remainders — appear reliably in every test.

The essential toolkit begins with divisibility. A number is divisible by 2 if its last digit is even; by 3 if the sum of its digits divides by 3; by 4 if the number formed by its last two digits divides by 4; by 5 if it ends in 0 or 5; by 9 if digit sum divides by 9; and by 10 if it ends in 0. The rule for 11 deserves special note: subtract the sum of digits in odd positions from the sum of digits in even positions — if the result is a multiple of 11 (including 0), the original number divides by 11. For 12, since $12 = 3 \times 4$, you can apply the combined test directly without long division.

The HCF–LCM relationship sits at the heart of many MAT problems. For any two positive integers $a$ and $b$:

$$\text{HCF}(a,b) \times \text{LCM}(a,b) = a \times b$$

This identity is extraordinarily useful when you know one value but not the other. The Euclidean algorithm — repeatedly dividing the larger by the smaller and taking remainders — finds HCFs efficiently: $\text{HCF}(48, 18) = \text{HCF}(18, 12) = \text{HCF}(12, 6) = 6$.

Units digit patterns operate on cycles of length 1, 2, or 4. Bases 2, 3, 7, 8 cycle every 4; bases 4, 9 cycle every 2; bases 0, 1, 5, 6 are fixed. To find the units digit of $7^{23}$, compute $23 \mod 4 = 3$, then pick the 3rd position in $\{7, 9, 3, 1\}$, which is 3.

⚡ **MAT exam tip:** Negative marking applies — $\frac{1}{4}$ mark is deducted for every wrong answer. If you cannot narrow options below two choices, an educated guess against your instinct often backfires. For divisibility questions, always verify the largest relevant divisor first. When HCF and LCM are both given for two numbers, use $a \times b = \text{HCF} \times \text{LCM}$ before attempting prime factorisation.

---

### 🟡 Standard — Regular Study

#### Classification of Numbers

The real number line encompasses every number you will encounter. Natural numbers ($\mathbb{N}$) are the counting numbers $1, 2, 3, \ldots$. Whole numbers add 0 to this set. Integers ($\mathbb{Z}$) extend in both directions: $\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots$. Rational numbers ($\mathbb{Q}$) are those expressible as $\frac{p}{q}$ where $q \neq 0$ — this includes all integers, finite decimals (e.g., $0.375 = \frac{3}{8}$), and repeating decimals (e.g., $0.\overline{3} = \frac{1}{3}$). Irrational numbers cannot be written as $\frac{p}{q}$; their decimal expansions neither terminate nor repeat. The famous examples are $\sqrt{2} \approx 1.41421356\ldots$, $\pi \approx 3.14159265\ldots$, and $e \approx 2.71828182\ldots$.

The even–odd arithmetic rules govern many simplification problems:

| Operation | Result |
|-----------|--------|
| even + even | even |
| odd + odd | even |
| even + odd | odd |
| even × even | even |
| odd × odd | odd |
| even × any | even |

Prime numbers are integers greater than 1 with exactly two distinct positive divisors: 1 and themselves. The first twenty primes are $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71$. Note that 2 is the sole even prime — all others are odd. Composite numbers have more than two factors.

#### Divisibility Rules — Full Table

| Divisor | Test |
|---------|------|
| 2 | Last digit ∈ {0, 2, 4, 6, 8} |
| 3 | Digit sum divisible by 3 |
| 4 | Last two digits divisible by 4 |
| 5 | Last digit ∈ {0, 5} |
| 6 | Divisible by 2 AND by 3 |
| 7 | Double the last digit, subtract from the truncated prefix; result divisible by 7 |
| 8 | Last three digits divisible by 8 |
| 9 | Digit sum divisible by 9 |
| 10 | Ends in 0 |
| 11 | $(S_{\text{odd}} - S_{\text{even}})$ divisible by 11 |
| 12 | Divisible by 3 AND by 4 |
| 15 | Divisible by 3 AND by 5 |

**Worked examples:**
- Is 1,236 divisible by 4? Last two digits = 36, and $36 \div 4 = 9$ exactly → Yes.
- Is 112,233 divisible by 11? $(3+2+1) - (3+2+1) = 0$, and $0$ is a multiple of 11 → Yes.
- Is 203 divisible by 7? $20 - 2(3) = 20 - 6 = 14$, and $14 \div 7 = 2$ → Yes.

#### HCF and LCM — Methods

**Prime factorisation method:**
Express each number as a product of prime powers. For HCF, take the minimum power of each common prime. For LCM, take the maximum power of all primes appearing.

Example: Find HCF and LCM of 144 and 180.
$$144 = 2^4 \times 3^2, \quad 180 = 2^2 \times 3^2 \times 5$$
$$\text{HCF} = 2^{\min(4,2)} \times 3^{\min(2,2)} = 2^2 \times 3^2 = 4 \times 9 = 36$$
$$\text{LCM} = 2^{\max(4,2)} \times 3^{\max(2,2)} \times 5^1 = 2^4 \times 3^2 \times 5 = 720$$

**Euclidean algorithm (for HCF only):**
$$48 \div 18 = 2 \text{ remainder } 12$$
$$18 \div 12 = 1 \text{ remainder } 6$$
$$12 \div 6 = 2 \text{ remainder } 0 \implies \text{HCF} = 6$$

When numbers are coprime ($\text{HCF} = 1$), the LCM equals the product $a \times b$.

#### Remainder Theorems

When an integer $N$ is divided by $d$, the division algorithm gives:
$$N = q \times d + r, \quad \text{where } 0 \leq r < d$$

A powerful shortcut: for any integer $N$, $N \bmod 9$ equals the digital root (repeated digit sum) mod 9. This works because $10 \equiv 1 \pmod{9}$, so each place value contributes only its digit.

**Fermat's Little Theorem (MAT level):** If $p$ is prime and $a$ is not divisible by $p$, then $a^{p-1} \equiv 1 \pmod{p}$. This is invaluable for large exponent remainders.

Example: Find $2^{10} \bmod 3$. Since $3$ is prime and $2 \not\equiv 0 \pmod{3}$, we have $2^2 \equiv 1 \pmod{3}$. Hence $2^{10} = (2^2)^5 \equiv 1^5 = 1 \pmod{3}$. The remainder is 1.

Example: Find $17^3 \bmod 7$. $17 \equiv 3 \pmod{7}$, so $17^3 \equiv 3^3 = 27 \equiv 27 - 21 = 6 \pmod{7}$. Remainder is 6.

#### Units Digit and Last Two Digits

The units digit cycles for powers:

| Base | Cycle | Position mapping |
|------|-------|-----------------|
| 0 | {0} | always 0 |
| 1 | {1} | always 1 |
| 2 | {2, 4, 8, 6} | exponent mod 4 |
| 3 | {3, 9, 7, 1} | exponent mod 4 |
| 4 | {4, 6} | exponent mod 2 |
| 5 | {5} | always 5 |
| 6 | {6} | always 6 |
| 7 | {7, 9, 3, 1} | exponent mod 4 |
| 8 | {8, 4, 2, 6} | exponent mod 4 |
| 9 | {9, 1} | exponent mod 2 |

**Last two digits** require cycles of length 20 for most bases. The 2-power cycle repeats every 20: $2^{20} \equiv 76 \pmod{100}$. Bases 5 and 6 have fixed last-two-digit behaviour ($25 \rightarrow 25$ and $76 \rightarrow 76$ regardless of exponent). MAT rarely tests beyond units digit; last-two-digit questions appear only in higher-difficulty slots.

**Common mistakes:** Confusing HCF with LCM (use the identity $a \times b = \text{HCF} \times \text{LCM}$ as a check). Applying the digit-sum test for 11 incorrectly (the alternating sum must be a multiple of 11, including 0). Forgetting that 1 is not prime.

---

### 🔴 Extended — Deep Study

#### Chinese Remainder Theorem

When a number yields different remainders upon division by coprime moduli, those remainders uniquely determine the number modulo their product. Let us find the smallest $N$ such that:
$$N \equiv 3 \pmod{5}, \quad N \equiv 5 \pmod{7}$$

From the first congruence, $N = 3 + 5k$. Substituting into the second:
$$3 + 5k \equiv 5 \pmod{7} \implies 5k \equiv 2 \pmod{7}$$
Since $5 \times 3 = 15 \equiv 1 \pmod{7}$, multiply both sides by 3:
$$k \equiv 6 \pmod{7} \implies k = 6$$
Thus $N = 3 + 5(6) = 33$. Verify: $33 \div 5 = 6$ remainder 3; $33 \div 7 = 4$ remainder 5. ✓

#### Highest Power of a Prime in $n!$

The exponent of prime $p$ in $n!$ is given by:
$$v_p(n!) = \left\lfloor \frac{n}{p} \right\rfloor + \left\lfloor \frac{n}{p^2} \right\rfloor + \left\lfloor \frac{n}{p^3} \right\rfloor + \cdots$$

Example: Highest power of 3 dividing $50!$:
$$\left\lfloor \frac{50}{3} \right\rfloor = 16, \quad \left\lfloor \frac{50}{9} \right\rfloor = 5, \quad \left\lfloor \frac{50}{27} \right\rfloor = 1, \quad \left\lfloor \frac{50}{81} \right\rfloor = 0$$
$$v_3(50!) = 16 + 5 + 1 = 22$$

So $3^{22}$ exactly divides $50!$ but $3^{23}$ does not.

**Trailing zeros in $n!$:** Each trailing zero requires a factor of $10 = 2 \times 5$. Since factors of 2 are far more abundant, the number of trailing zeros equals the highest power of 5 in $n!$.

Example: Trailing zeros in $100!$:
$$\left\lfloor \frac{100}{5} \right\rfloor = 20, \quad \left\lfloor \frac{100}{25} \right\rfloor = 4, \quad \left\lfloor \frac{100}{125} \right\rfloor = 0$$
$$v_5(100!) = 20 + 4 = 24 \implies 100! \text{ ends in 24 zeros}$$

#### Factorial-Based Divisibility

Testing primality: to check whether $n$ is prime, test divisibility by all primes $\leq \sqrt{n}$. For $n = 97$, $\sqrt{97} \approx 9.8$. Test primes 2, 3, 5, 7 — none divide 97 → it is prime. For $n = 91$, $\sqrt{91} \approx 9.5$. Tests: 7 divides $91 = 7 \times 13$ → not prime.

**Wilson's Theorem:** $(n-1)! \equiv -1 \pmod{n}$ if and only if $n$ is prime. While theoretically elegant, it is impractical for large $n$ in an exam setting.

#### Square and Cube Shortcuts for MAT

**Square of any two-digit number $ab$ where the last digit is 5:**
$$(10a + 5)^2 = 100a^2 + 100a + 25 = 100a(a+1) + 25$$
The result is the product $a(a+1)$ followed by 25.

$$75^2 = 7 \times 8 = 56 \rightarrow 5625$$
$$95^2 = 9 \times 10 = 90 \rightarrow 9025$$
$$135^2 = 13 \times 14 = 182 \rightarrow 18225$$

**Cube of two-digit numbers using binomial expansion:**
$(10a + b)^3 = 1000a^3 + 300a^2b + 30ab^2 + b^3$

$$13^3 = 1000 + 3(100)(3) + 3(10)(9) + 27 = 1000 + 900 + 270 + 27 = 2197$$
$$17^3 = 4913, \quad 18^3 = 5832, \quad 22^3 = 10648$$

#### Summation Formulas

These appear frequently in number system and progression problems:

- Sum of first $n$ natural numbers: $S_n = \frac{n(n+1)}{2}$
- Sum of squares: $S_n = \frac{n(n+1)(2n+1)}{6}$
- Sum of cubes: $S_n = \left[\frac{n(n+1)}{2}\right]^2$

Example: Sum of squares of first 15 natural numbers:
$$S = \frac{15 \times 16 \times 31}{6} = \frac{7440}{6} = 1240$$

#### Advanced Practice with Solutions

**Q1:** Find the HCF of $144$, $180$, and $108$.
$$144 = 2^4 \times 3^2, \quad 180 = 2^2 \times 3^2 \times 5, \quad 108 = 2^2 \times 3^3$$
$$\text{HCF} = 2^{\min(4,2,2)} \times 3^{\min(2,2,3)} = 2^2 \times 3^2 = 4 \times 9 = 36$$

**Q2:** LCM of two numbers is 180 and HCF is 6. One number is 30. Find the other.
$$a \times b = \text{HCF} \times \text{LCM} = 6 \times 180 = 1080$$
$$b = \frac{1080}{30} = 36$$

**Q3:** What is the remainder when $7^{100}$ is divided by 8?
Since $7 \equiv -1 \pmod{8}$, we have $7^{100} \equiv (-1)^{100} = 1 \pmod{8}$. Remainder = 1.

**Q4:** How many trailing zeros are in $50!$?
$$v_5(50!) = \left\lfloor \frac{50}{5} \right\rfloor + \left\lfloor \frac{50}{25} \right\rfloor = 10 + 2 = 12$$
Answer: 12 trailing zeros.

**Q5:** Find the units digit of $3^{23} \times 7^{45}$.
$$3^{23}: \quad 23 \mod 4 = 3 \implies \text{3rd position in } \{3,9,7,1\} = 7$$
$$7^{45}: \quad 45 \mod 4 = 1 \implies \text{1st position in } \{7,9,3,1\} = 7$$
$$7 \times 7 = 49 \implies \text{units digit} = 9$$

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
