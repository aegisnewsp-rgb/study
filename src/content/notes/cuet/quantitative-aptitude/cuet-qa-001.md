---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-001
topicName: "Number System"
tier: unified
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "An advanced diagram showing the Euclidean algorithm steps: 48 ÷ 18 → remainder 12 → 18 ÷ 12 → remainder 6 → 12 ÷ 6 = 0, with HCF = 6"
country: India
generated: ai-v1
---

# Number System

### 🟢 Lite

### Key Formula/Rule
**HCF × LCM = Product of the two numbers** (for any pair of integers)
**Division Algorithm:** For any integer a divided by d, a = q × d + r, where 0 ≤ r < d

### Memory Trick
Think of HCF as the **biggest common factor** (what overlaps in a factor Venn diagram) and LCM as the **smallest common multiple** (the shared finish line when counting in each number's multiples). Their product always equals the original pair's product.

### 1-Sentence Summary
This topic tests your ability to find common factors and multiples quickly, plus spot divisibility patterns without doing long division.

### Divisibility Rules — Must Memorise

| Divisor | Rule | Example |
|---------|------|---------|
| 2 | Last digit even | 128 → 128/2 = 64 |
| 3 | Sum of digits divisible by 3 | 126 → 1+2+6=9 ✓ |
| 4 | Last 2 digits divisible by 4 | 124 → 24/4=6 ✓ |
| 5 | Last digit 0 or 5 | 135 ✓ |
| 6 | Divisible by 2 AND 3 | 126 ✓ (even + sum=9) |
| 7 | Subtract 2×last digit: 126 → 12−12=0 ✓ | 126/7=18 |
| 8 | Last 3 digits divisible by 8 | 1128 → 128/8=16 ✓ |
| 9 | Sum of digits divisible by 9 | 126 → 1+2+6=9 ✓ |
| 10 | Last digit 0 | 130 ✓ |
| 11 | (Sum of odd positions) − (Sum of even positions) = 0 or multiple of 11 | 121 → (1+1)−2=0 ✓ |
| 12 | Divisible by 3 AND 4 | 144 ✓ |

⚡ **CUET Tip:** The 7 rule (subtract 2×last digit) is less commonly used but appears. Master 2, 3, 4, 5, 6, 8, 9, 11 first — they're tested far more often.

### HCF and LCM

**HCF (GCD):** Greatest number that divides both numbers.
**LCM:** Smallest number that is a multiple of both numbers.

**Method 1 — Prime factorisation:**
- 12 = 2² × 3
- 18 = 2 × 3²
- HCF = 2¹ × 3¹ = **6** (minimum powers)
- LCM = 2² × 3² = **36** (maximum powers)

**Method 2 — Division method (Euclidean):**
For HCF(48, 18):
- 48 ÷ 18 = 2 remainder **12**
- 18 ÷ 12 = 1 remainder **6**
- 12 ÷ 6 = 2 remainder **0**
- HCF = **6**

**Key relationship:**
If HCF(a, b) = h, then:
- LCM(a, b) = (a × b) / h
- a = h × m, b = h × n, where m and n are co-prime
- Then LCM = h × m × n

### Remainder Theorem

When a is divided by d, the remainder is the part left over.
- 47 ÷ 5 → quotient = 9, remainder = **2** (since 47 = 5×9 + 2)
- 100 ÷ 7 → 100 = 7×14 + 2 → remainder = **2**

**Important:** Remainder is always less than the divisor (0 ≤ r < d)

**Chain remainder:** To find remainder when a product is divided by d:
- Find remainder of each factor separately, then multiply
- Example: Find remainder of 23 × 17 when divided by 5
- 23 ÷ 5 → remainder 3; 17 ÷ 5 → remainder 2
- 3 × 2 = 6; 6 ÷ 5 → remainder **1**

### Types of Numbers

| Type | Definition | Example |
|------|-----------|---------|
| Natural numbers | Counting numbers: 1, 2, 3... | 1, 2, 3 |
| Whole numbers | Natural numbers + 0 | 0, 1, 2 |
| Integers | Positive + negative whole numbers | −3, 0, 5 |
| Even numbers | Divisible by 2 | 0, 2, 4, 6 |
| Odd numbers | Not divisible by 2 | 1, 3, 5, 7 |
| Prime numbers | Divisible only by 1 and itself | 2, 3, 5, 7, 11 |
| Composite | Has other factors besides 1 and itself | 4, 6, 8, 9 |
| Co-prime | HCF = 1 (not necessarily prime) | 8 and 15 |

⚡ **Exam Tip:** 2 is the only even prime. 1 is neither prime nor composite. For two numbers to be co-prime, they just need HCF = 1 — they don't each need to be prime individually (e.g., 8 and 15 share no common factors, so HCF=1 even though neither is prime).

### Quick Examples

**Q: Find HCF of 12 and 18.**
A: Factors of 12 = {1, 2, 3, 4, 6, 12}; Factors of 18 = {1, 2, 3, 6, 9, 18}. HCF = **6**

**Q: Find LCM of 4 and 6.**
A: Multiples of 4 = {4, 8, 12, 16...}; Multiples of 6 = {6, 12, 18...}. LCM = **12**

**Q: What is the remainder when 47 is divided by 5?**
A: 47 = 5 × 9 + 2 → remainder = **2**

**Q: If HCF(a, b) = 6 and a = 30, b = ?**
A: HCF × LCM = a × b → 6 × LCM = 30 × b. If b = 42, 6×210=1260, 30×42=1260. HCF(30,42) = 6 ✓

### 🟡 Standard

### Concept

The Number System is the backbone of all quantitative reasoning in CUET. At its heart are two ideas: **HCF (Highest Common Factor)** and **LCM (Lowest Common Multiple)**. Think of HCF as the biggest number that divides *both* numbers evenly — like the largest tile that would fit perfectly on a floor of dimensions a × b. The LCM is the smallest number that *both* numbers divide into — like the earliest time two traffic lights with different cycle times will flash green together.

**Divisibility rules** are shortcuts that let you check if a number is divisible by 2, 3, 4, 5, and so on without actually dividing. These save precious seconds in the exam. For instance, 1,38,600 is divisible by 8? Check the last three digits — 600 ÷ 8 = 75 with no remainder. Done. No long division needed.

**Remainders** appear when division isn't clean. If 73 ÷ 4 gives remainder 1, it means 73 = 4 × 18 + 1. Remainders have fascinating properties — adding or multiplying numbers and then finding a remainder often gives the same answer as finding remainders first.

### Key Formulas
| Formula | Use |
|---------|-----|
| HCF × LCM = a × b | Relates HCF and LCM of two numbers a and b |
| HCF = product of common prime factors (lowest powers) | Prime factorisation method |
| LCM = product of highest powers of all prime factors | Prime factorisation method |
| Dividend = Divisor × Quotient + Remainder | Basic remainder formula |
| (a + b) mod n = [(a mod n) + (b mod n)] mod n | Remainder addition property |

### Worked Example
**Q:** Find the HCF and LCM of 18 and 30 using prime factorisation.

**Step 1:** Prime factorise both numbers.
- 18 = 2 × 3²
- 30 = 2 × 3 × 5

**Step 2:** HCF = product of common primes with lowest powers = 2¹ × 3¹ = **6**

**Step 3:** LCM = product of highest powers of all primes = 2¹ × 3² × 5¹ = **90**

**Step 4:** Verify: HCF × LCM = 6 × 90 = 540 = 18 × 30 ✓

**Answer:** HCF = 6, LCM = 90

### Common Errors
- Confusing HCF with LCM (HCF is the *smaller* number, LCM is *larger*) → Draw a factor Venn diagram to visualise
- Forgetting to take the **lowest power** of common primes when finding HCF → always write primes in exponent form first
- Applying remainder addition incorrectly — (a × b) mod n ≠ (a mod n) × (b mod n) in general → use: (a × b) mod n = [(a mod n) × (b mod n)] mod n

### 🔴 Extended

### Full Concept

**HCF and the Euclidean Algorithm**

The standard prime factorisation method works well, but for large numbers the **Euclidean Algorithm** is far more efficient. It exploits a beautiful truth: the HCF of two numbers never changes if you replace the larger number with the difference (or remainder) of the two. Formally: HCF(a, b) = HCF(b, r) where r = a mod b.

Take 48 and 18: HCF(48, 18) = HCF(18, 12) because 48 mod 18 = 12. Then HCF(18, 12) = HCF(12, 6) because 18 mod 12 = 6. Keep going until the remainder is 0 — the last non-zero remainder is your HCF. In this case, HCF = 6. This method works even for astronomically large numbers that would make prime factorisation a nightmare.

**Why HCF × LCM = Product always works**

For two numbers a and b, write them in terms of their HCF (h):
- a = h × m, b = h × n, where m and n are coprime (share no common factor)
- Since m and n are coprime, their LCM is simply m × n
- So LCM = h × m × n
- Therefore: HCF × LCM = h × (h × m × n) = (h × m) × (h × n) = a × b ✓

This only holds perfectly for **two numbers**. For three numbers, HCF × LCM ≠ product in general.

**Divisibility by 7 — The Advanced Rule**

The standard test for 7 is: take the last digit, double it, subtract from the rest. If the result is divisible by 7, so is the original number. For 343: 34 − (2 × 3) = 34 − 6 = 28, which is 7 × 4. So 343 is divisible by 7. This works because 10 ≡ 3 (mod 7) and 20 ≡ 6 (mod 7), so 21 ≡ 0 — the rule is really just applying modulo arithmetic cleverly.

**Divisibility by 11** uses alternating digit sums: (sum of digits in odd positions) − (sum of digits in even positions). For 2728: (2+7) − (7+8) = 9 − 15 = −6, not a multiple of 11, so 2728 isn't divisible by 11. For 352: (3+2) − 5 = 0, so 352 is divisible by 11.

**Chinese Remainder Theorem (Basic)**

This theorem handles problems like: "I have some eggs. When counted in groups of 3, remainder 2. In groups of 4, remainder 3. In groups of 5, remainder 4. What is the minimum number?" The answer always exists under certain conditions. Here it would be 59 — notice that adding 1 to the number makes it divisible by all three (60 = 3×4×5). This pattern — "one less than a multiple of each divisor" — gives the answer as LCM(3,4,5) − 1 = 60 − 1 = 59.

**Last Digit Patterns**

Last digits of powers cycle predictably. 2^n cycles: 2, 4, 8, 6 (every 4). 3^n cycles: 3, 9, 7, 1 (every 4). 7^n cycles: 7, 9, 3, 1. To find 7^23's last digit: 23 mod 4 = 3, so it's the 3rd in the cycle: **3**.

### Multiple Approaches

**Finding HCF:**
- *Standard:* Prime factorisation — write each number as product of primes, take common primes with lowest exponents
- *Shortcut:* Division method — repeatedly divide the larger by the smaller, replace larger with remainder, stop when remainder is 0

**Checking divisibility by 7:**
- *Standard:* Actual long division
- *Shortcut:* Double the last digit, subtract from truncated number — works for 7, and extends to 7, 11, 13 together

### CUET-Level Problems

**Q1:** Find the HCF of 1365 and 2730 using the Euclidean algorithm.
Working: 2730 ÷ 1365 = 2 remainder 0 → HCF = 1365
Answer: **1365**

**Q2:** What is the last digit of 2^47?
Working: 47 mod 4 = 3 → 3rd digit in cycle (2,4,8,6) = **8**
Answer: **8**

### Tricky Cases
- **Numbers are coprime** (HCF = 1): Then LCM = a × b directly — no extra work needed
- **One number is a multiple of the other**: HCF is the smaller number, LCM is the larger number's multiple
- **Divisibility by 0**: Division by zero is undefined — never included in CUET questions but a common trap answer
- **LCM of very large numbers**: If numbers are huge, find HCF first, then LCM = a × b ÷ HCF (avoids factorising huge numbers)
- **Remainder overflow**: If remainder ≥ divisor, reduce it again. E.g., remainder 14 when dividing by 8 means remainder is actually 14 mod 8 = 6

*Content adapted based on your selected roadmap duration.*
