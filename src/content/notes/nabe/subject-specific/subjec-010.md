---
exam: nabe
examName: NABE (Pakistan)
subject: quant
subjectName: Subject Specific
topic: subjec-010
topicName: Topic 10
weight: 3
country: nabe
generated: "2026-03-25T17:00:00"
---

# HCF and LCM

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**HCF and LCM** — Key Facts for NABE (Pakistan)
- **HCF (GCD)**: Greatest Common Divisor — largest number dividing both
- **LCM**: Least Common Multiple — smallest number divisible by both
- **Key Identity**: HCF(a,b) × LCM(a,b) = a × b (for two numbers only)
- **HCF divides LCM** and HCF divides any common divisor
- ⚡ **Exam tip**: For 3+ numbers, find HCF/LCM pairwise; LCM of fractions = LCM of numerators / HCF of denominators

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## HCF and LCM — NABE (Pakistan) Study Guide

### Definitions

**HCF (Highest Common Factor)** also called GCD (Greatest Common Divisor):
- The largest number that divides two or more numbers exactly
- Example: HCF(12, 18) = 6 (because 6 is the largest number dividing both 12 and 18)

**LCM (Least Common Multiple)**:
- The smallest number that is exactly divisible by two or more numbers
- Example: LCM(12, 18) = 36 (because 36 is the smallest number divisible by both 12 and 18)

### Methods to Find HCF and LCM

**Method 1: Prime Factorization**

For HCF: Take the **minimum** power of each common prime factor
For LCM: Take the **maximum** power of each prime factor

**Example**: Find HCF and LCM of 48 and 72
- 48 = 2⁴ × 3¹
- 72 = 2³ × 3²
- HCF = 2³ × 3¹ = 8 × 3 = 24
- LCM = 2⁴ × 3² = 16 × 9 = 144

**Verification**: HCF × LCM = 24 × 144 = 3456 = 48 × 72 ✓

**Method 2: Division Method (Long Division)**

For HCF:
1. Divide larger by smaller
2. Divide divisor by remainder
3. Continue until remainder = 0
4. Last divisor = HCF

### HCF and LCM of Fractions

**Formula**:
```
HCF of fractions = HCF of numerators / LCM of denominators
LCM of fractions = LCM of numerators / HCF of denominators
```

**Example**: Find HCF and LCM of 2/3 and 4/5
- HCF = HCF(2,4) / LCM(3,5) = 2/15
- LCM = LCM(2,4) / HCF(3,5) = 4/1 = 4

### NABE Exam Pattern

Common question types:
1. Find HCF and LCM of two or more numbers
2. Word problems involving HCF (sharing, grouping)
3. Word problems involving LCM (timing, events)
4. HCF and LCM of fractions
5. Application problems (gears, lamps flashing, etc.)

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## HCF and LCM — Comprehensive NABE (Pakistan) Notes

### Detailed Theory

#### 1. Understanding HCF Deeply

**Mathematical Definition**:
If d divides both a and b, then d is a common divisor.
HCF is the greatest such d.

**Properties**:
1. HCF(a, b) divides any linear combination of a and b
   - HCF(12, 18) = 6 divides (12×3 - 18×1 = 18)
2. HCF(a, b) = HCF(b, a) [commutative]
3. HCF(a, b) = HCF(a, b - ka) for any integer k [Euclidean algorithm basis]
4. HCF(a, 0) = |a| [by convention]
5. HCF(a, b) = HCF(a, b mod a)

**Bézout's Identity**:
There exist integers x and y such that:
```
ax + by = HCF(a, b)
```

Example: For 12 and 18, HCF = 6
- 12 × (-1) + 18 × 1 = 6
- x = -1, y = 1

#### 2. Understanding LCM Deeply

**Mathematical Definition**:
LCM is the smallest positive integer divisible by both a and b.

**Properties**:
1. LCM(a, b) is divisible by both a and b
2. LCM(a, b) = HCF(a, b) if one divides the other
   - LCM(6, 12) = 12, HCF(6, 12) = 6
3. LCM(a, b) × HCF(a, b) = |a × b| [always for two numbers]
4. a | c and b | c ⟹ LCM(a, b) | c [LCM divides any common multiple]

**Important**: This identity (HCF × LCM = Product) ONLY works for exactly two numbers!

#### 3. Euclidean Algorithm for HCF

**Principle**: HCF(a, b) = HCF(b, a mod b)

**Step-by-Step**:
```
HCF(48, 18):
48 ÷ 18 = 2 remainder 12  → HCF(48, 18) = HCF(18, 12)
18 ÷ 12 = 1 remainder 6   → HCF(18, 12) = HCF(12, 6)
12 ÷ 6 = 2 remainder 0   → HCF(12, 6) = 6
Therefore HCF(48, 18) = 6
```

**Efficiency**: This is much faster than prime factorization for large numbers.

#### 4. HCF and LCM of Multiple Numbers

**For HCF of 3+ numbers**:
```
HCF(a, b, c) = HCF(HCF(a, b), c)
```

**Example**: HCF(12, 18, 24)
- HCF(12, 18) = 6
- HCF(6, 24) = 6

**For LCM of 3+ numbers**:
```
LCM(a, b, c) = LCM(LCM(a, b), c)
```

**Important**: This is NOT simply the LCM of all at once due to intermediate values.

#### 5. Word Problems — HCF Applications

**"Dividing into equal groups"**:
- Find HCF to determine maximum size of equal groups

**Example**: 48 red marbles and 60 blue marbles to be divided equally into packets with no remainder. What is maximum marbles per packet?
- Each packet contains: 48/HCF and 60/HCF marbles
- HCF(48, 60) = 12
- Maximum 12 packets, each with 4 red + 5 blue marbles

**"Maximum measurement" problems**:
- Finding largest equal measurements from different quantities

**Example**: Three pieces of cloth 36m, 48m, and 72m. What is maximum length of cloth from each piece?
- Answer: HCF(36, 48, 72) = 12m

#### 6. Word Problems — LCM Applications

**"Events occurring together"**:
- Find LCM to determine when events coincide

**Example**: Two bells ring every 6 and 8 seconds. After how many seconds will they ring together?
- LCM(6, 8) = 24 seconds

**"Problems with remainders"**:
**Example**: A man puts oranges in baskets. If he puts 8 per basket, 5 remain. If 9 per basket, 4 remain. Find number of oranges.
- Number ≡ 5 (mod 8) and ≡ 4 (mod 9)
- Solve using Chinese Remainder Theorem approach
- LCM(8, 9) = 72
- Numbers of form 72k + ? to be determined

#### 7. HCF and LCM of Decimal Numbers

**Method**: Count maximum decimal places
**Example**: HCF and LCM of 0.6, 0.48, 0.24
- Convert to integers: 60, 48, 24 (divided by 100)
- HCF(60, 48, 24) = 12
- LCM(60, 48, 24) = 240
- Answer: HCF = 0.12, LCM = 2.40

#### 8. Special Cases

**When one number is a factor of another**:
- HCF = smaller number
- LCM = larger number
- Example: HCF(7, 14) = 7, LCM(7, 14) = 14

**Co-prime numbers**:
- HCF = 1
- LCM = product of the numbers
- Example: HCF(8, 15) = 1, LCM(8, 15) = 120 = 8×15

#### 9. Verification Method

Always verify: HCF × LCM = Product of numbers

**For more than 2 numbers**, verify partially:
- HCF(12, 18) × LCM(12, 18) = 6 × 36 = 216 = 12 × 18 ✓

#### 10. Common Mistakes to Avoid

1. **Product Formula**: Only for exactly two numbers, not three+
2. **Mixed Fractions**: Convert to improper fractions first
3. **Not Simplifying**: Always reduce numbers to simplest form first
4. **HCF of Decimals**: Convert to same number of decimal places first
5. **Confusing HCF with LCM**: HCF is smaller, LCM is larger

### Practice Questions for NABE

1. Find HCF and LCM of 72, 126, and 270.
2. Two numbers are in ratio 3:4 with HCF 6. Find the numbers and their LCM.
3. The LCM of two numbers is 240 and their HCF is 12. If one number is 48, find the other.
4. Three bells ring at intervals of 15, 20, and 30 seconds. If they ring together at 9:00 AM, when will they ring together again?
5. A school has 72 boys and 90 girls to be divided into equal teams with no remainder. What is the maximum number of teams possible if each team has equal number of boys and girls?

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
