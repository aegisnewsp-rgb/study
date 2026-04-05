---
exam: hat-ug
examName: HAT-UG (HEC Aptitude Test - Undergraduate)
subject: quantitative-reasoning
subjectName: Quantitative Reasoning
topic: qr-1
topicName: Number System
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.005071"
diagramPrompt: Educational diagram illustrating Number System with clear labels, white background, exam-style illustration
---

# Number System

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

The **Number System** is the foundation of all quantitative reasoning. HAT-UG tests your ability to work fluently with different types of numbers, perform operations, and apply divisibility rules.

**Types of Numbers You Must Know:**

| Category | Definition | Examples |
|---|---|---|
| Natural numbers ($\mathbb{N}$) | Counting numbers starting from 1 | 1, 2, 3, 4, ... |
| Whole numbers | Natural numbers + 0 | 0, 1, 2, 3, ... |
| Integers ($\mathbb{Z}$) | Positive, negative, and zero | ..., −3, −2, −1, 0, 1, 2, 3, ... |
| Rational numbers ($\mathbb{Q}$) | Ratio of two integers (denominator ≠ 0) | $\frac{3}{4}$, $-\frac{5}{2}$, 0.75, 0.333... |
| Irrational numbers | Cannot be expressed as a ratio of integers | $\sqrt{2}$, $\pi$, $e$ |
| Real numbers ($\mathbb{R}$) | All rational + irrational numbers | Every number on the number line |

**Key facts:**
- Every integer is a rational number (e.g., $5 = \frac{5}{1}$)
- $\sqrt{n}$ is irrational for any non-perfect square $n$
- Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...
- 1 is **not** a prime number — it is neither prime nor composite
- 2 is the only even prime number

**Divisibility Rules — Essential for HAT-UG:**

| Divisor | Rule |
|---|---|
| 2 | Last digit is even (0, 2, 4, 6, 8) |
| 3 | Sum of digits is divisible by 3 |
| 4 | Last two digits form a number divisible by 4 |
| 5 | Last digit is 0 or 5 |
| 6 | Divisible by both 2 and 3 |
| 7 | Double the last digit, subtract from the rest — result must be divisible by 7 |
| 8 | Last three digits form a number divisible by 8 |
| 9 | Sum of digits is divisible by 9 |
| 10 | Ends in 0 |
| 11 | (Sum of digits in odd positions) − (Sum of digits in even positions) is divisible by 11 |

**⚡ HAT-UG Exam Tip:** For the 7 rule: Take the last digit, double it (multiply by 2), subtract from the truncated number. Example: 203 → 20 − (3×2) = 20 − 6 = 14 → 14 is divisible by 7, so 203 is divisible by 7. Check: 203 ÷ 7 = 29 ✓.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding and consistent scores.

**HCF and LCM — The Two Operations That Appear in Nearly Every HAT-UG Paper:**

**Prime Factorisation Method:**
- HCF = product of the **lowest** powers of common prime factors
- LCM = product of the **highest** powers of all prime factors

**Example:** Find HCF and LCM of 48 and 72.
- $48 = 2^4 \times 3^1$
- $72 = 2^3 \times 3^2$
- HCF = $2^3 \times 3^1 = 8 \times 3 = 24$
- LCM = $2^4 \times 3^2 = 16 \times 9 = 144$

**The HCF × LCM Relationship:**
For any two positive integers $a$ and $b$:
$$\text{HCF}(a, b) \times \text{LCM}(a, b) = a \times b$$
This is extremely useful when you know HCF and LCM and need to find the numbers.

**Fraction Operations — Common Pitfalls:**
- Adding fractions: find LCD (Least Common Denominator) first
  - $\frac{1}{6} + \frac{3}{8} = \frac{4}{24} + \frac{9}{24} = \frac{13}{24}$
- Multiplying fractions: multiply numerators, multiply denominators, simplify
  - $\frac{3}{4} \times \frac{5}{7} = \frac{15}{28}$
- Dividing fractions: multiply by the reciprocal of the divisor
  - $\frac{3}{4} \div \frac{5}{7} = \frac{3}{4} \times \frac{7}{5} = \frac{21}{20} = 1\frac{1}{20}$

**Decimal to Fraction Conversion:**
- Terminating decimals: count decimal places → put over 10ⁿ → simplify
  - $0.375 = \frac{375}{1000} = \frac{3}{8}$
- Recurring decimals: use algebra
  - Let $x = 0.\overline{3}$ → $10x = 3.\overline{3}$ → $10x - x = 3$ → $9x = 3$ → $x = \frac{1}{3}$

**⚡ Standard Study Tip:** Practise the recurring decimal-to-fraction conversion — it appears almost every year in HAT-UG quantitative sections. The shortcut: write $x = 0.\overline{ab}$ → $100x = ab.\overline{ab}$ → $100x - x = ab$ → $99x = ab$ → $x = \frac{ab}{99}$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory with derivations, historical context, and exam patterns.

**Number Theory — The Architecture Underneath the Number System**

**The Euclidean Algorithm for Finding HCF:**
The Euclidean algorithm is a systematic method (attributed to Euclid of Alexandria, ~300 BCE) for finding the HCF of two numbers without prime factorisation, which becomes essential for very large numbers.

**Steps:**
1. Divide the larger number by the smaller number and note the remainder
2. Divide the smaller number by this remainder
3. Repeat until the remainder is 0
4. The last non-zero remainder is the HCF

**Example:** Find HCF of 252 and 105.
- $252 \div 105 = 2$ remainder $42$ → $252 = 105 \times 2 + 42$
- $105 \div 42 = 2$ remainder $21$ → $105 = 42 \times 2 + 21$
- $42 \div 21 = 2$ remainder $0$ → HCF = 21

**Proof that HCF × LCM = a × b:**
If $d = \text{HCF}(a, b)$, write $a = dm$ and $b = dn$ where $\text{HCF}(m, n) = 1$.
Then $\text{LCM}(a, b) = dmn$.
Therefore: $d \times \text{LCM} = d \times dmn = dm \times dn = a \times b$. ✓

**Base-n Number Systems:**
HAT-UG sometimes tests conversion between bases. The key formula:
$$N = a_k b^k + a_{k-1} b^{k-1} + \dots + a_1 b + a_0$$
where $b$ is the base and $a_i$ are the digits.

**Example:** Convert $1101_2$ to base 10.
$$1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 = 8 + 4 + 0 + 1 = 13_{10}$$

**Modular Arithmetic — The Foundation of Cryptography:**
When we say $a \equiv b \pmod{n}$, we mean that $a$ and $b$ leave the same remainder when divided by $n$.
- $17 \equiv 2 \pmod{5}$ because $17 \div 5 = 3$ remainder $2$
- Useful property: $(a + b) \mod n = [(a \mod n) + (b \mod n)] \mod n$

**HAT-UG Number System — Past Year Patterns (2019–2024):**
- 2–3 questions per paper on divisibility rules
- 1–2 questions on HCF/LCM with word problems
- 1 question on decimal-fraction conversion
- 1 question on number system classification (rational/irrational)
- Base conversion appears in approximately 1 in 3 papers

**⚡ HAT-UG Advanced Strategy:** The fastest way to find LCM of fractions is:
$$\text{LCM}\left(\frac{a}{b}, \frac{c}{d}\right) = \frac{\text{LCM}(a, c)}{\text{HCF}(b, d)}$$
And for HCF of fractions:
$$\text{HCF}\left(\frac{a}{b}, \frac{c}{d}\right) = \frac{\text{HCF}(a, c)}{\text{LCM}(b, d)}$$
Commit these to memory — they save enormous time.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
