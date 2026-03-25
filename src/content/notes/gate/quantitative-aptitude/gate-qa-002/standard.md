---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-002
topicName: "Number System (HCF/LCM, Divisibility)"
tier: standard
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A number line from 0 to 30 showing HCF and LCM visually: showing common factors of 12 and 18 marked, and the first few common multiples highlighted"
country: India
generated: ai-v1
---



## Number System (HCF/LCM, Divisibility)

### Concept Explanation
The number system is the bedrock of all quantitative aptitude. Every integer has a fingerprint — its prime factorization — and understanding how numbers relate to each other through divisibility is the key to cracking HCF, LCM, and a hundred other problem types. When you hear "divisibility," think of it as clean division with no remainder. If 12 divides into 36 exactly three times with nothing left over, then 12 is a divisor of 36 and 36 is a multiple of 12.

HCF stands for Highest Common Factor — the biggest number that can divide two or more numbers without leaving a remainder. Think of it as the largest shared ingredient between numbers. For 12 and 18, the common factors are 1, 2, 3, and 6 — so the HCF is 6. LCM stands for Least Common Multiple — the smallest number that both original numbers can divide into perfectly. For 12 and 18, common multiples include 36, 72, 108... and the smallest is 36, so the LCM is 36. Notice how 6 × 36 = 216 and 12 × 18 = 216 — that's the beautiful relationship that HCF × LCM always equals the product of the two numbers.

Divisibility rules are shortcuts that let you test whether a number is divisible by another without actually doing long division. They're based on patterns in the structure of numbers. For instance, a number is divisible by 3 if its digits sum to a multiple of 3 — because of how 10 ≡ 1 (mod 3), making each digit's place value contribution reduce to just the digit itself modulo 3. These rules become incredibly useful in competitive exams where speed matters. A number like 7,452 — sum of digits is 7+4+5+2 = 18, which is divisible by 3, so 7,452 is divisible by 3. No division needed.

### Key Formulas
| Symbol | Meaning |
|--------|---------|
| HCF(a, b) | Highest Common Factor of a and b — largest number dividing both |
| LCM(a, b) | Least Common Multiple of a and b — smallest number both divide into |
| a ÷ b = remainder r | When a divided by b leaves remainder r |
| Co-prime | Two numbers with HCF = 1 |
| Prime number | Divisible only by 1 and itself |

### Step-by-Step Example
**Q:** Find HCF and LCM of 24 and 36 using prime factorization.

**Step 1:** Prime factorization of each number.
24 = 2³ × 3
36 = 2² × 3²

**Step 2 — HCF:** Take the lowest power of each common prime.
Common primes: 2 (lowest: 2²) and 3 (lowest: 3¹)
HCF = 2² × 3¹ = 4 × 3 = 12

**Step 3 — LCM:** Take the highest power of each prime.
Primes: 2 (highest: 2³) and 3 (highest: 3²)
LCM = 2³ × 3² = 8 × 9 = 72

**Answer:** HCF = 12, LCM = 72. Check: 12 × 72 = 864 = 24 × 36 ✓

### Common Mistakes
- Confusing HCF with LCM (which is bigger?) → Correction: HCF is always smaller than or equal to the smaller number; LCM is always greater than or equal to the larger number. HCF fits INTO both; LCM fits BOTH INTO it.
- Forgetting to use the lowest common prime powers for HCF → Correction: For HCF, pick the minimum (lowest) power of each common prime, not the maximum.
- Trying to apply divisibility rules backwards (e.g., if a number is divisible by 6 it must be divisible by 3 and 2 — true — but students sometimes think the reverse is also true, which is wrong)

### Quick Test (2 Qs)
1. Q: Which of these is the HCF of 48 and 72?
   Options: A) 12  B) 18  C) 24  D) 36
   Ans: C) 24 (48 = 2⁴ × 3, 72 = 2³ × 3², common primes: 2³ × 3¹ = 24)

2. Q: If two co-prime numbers have LCM = 85, and one number is 5, what is the other?
   Options: A) 5  B) 17  C) 85  D) 1
   Ans: B) 17 (co-prime means HCF = 1, so product = HCF × LCM = 85, so other = 85 ÷ 5 = 17. Also 5 and 17 share no common factors.)
