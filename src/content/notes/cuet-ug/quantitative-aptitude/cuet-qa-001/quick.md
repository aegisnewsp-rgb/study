---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-001
topicName: Number System
tier: quick
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "A simple diagram showing two numbers being factorised into a Venn diagram — the overlap is the HCF, the union is the LCM"
country: India
generated: ai-v1
---



## Number System — Quick Reference

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