---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-002
topicName: "Number System (HCF/LCM, Divisibility)"
tier: unified
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A prime factorization tree diagram showing how 360 breaks down into 2³ × 3² × 5, with visual branches showing the division process"
country: India
generated: ai-v1
---

# Number System (HCF/LCM, Divisibility)

### 🟢 Lite

### Key Formula/Rule
HCF × LCM = Product of two numbers (for any two positive integers a and b: HCF(a,b) × LCM(a,b) = a × b)

### Quick Memory Trick
**HCF** = **H**ow **C**ommon **F**rom the top (find the highest common factor) | **LCM** = **L**east **C**ommon **M**ultiple (find the smallest number both divide into). HCF finds what they SHARE, LCM finds what they COVER.

### 1-Sentence Summary
HCF is the biggest number that divides both numbers evenly; LCM is the smallest number that both numbers divide into evenly.

### Quick Example
Q: Find HCF and LCM of 12 and 18.
A: HCF = 6 (6×2=12, 6×3=18, no bigger number works). LCM = 36 (12×3=36, 18×2=36, smallest common).

### Must Remember
- 1 is a divisor of every integer
- A number is divisible by 2 if its last digit is even (0,2,4,6,8)
- A number is divisible by 3 if the sum of its digits is divisible by 3
- A number is divisible by 5 if it ends in 0 or 5
- A number is divisible by 9 if the sum of its digits is divisible by 9
- 2 is the only even prime number; all other primes are odd
- Co-prime numbers have HCF = 1

### 🟡 Standard

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

### 🔴 Extended

### Concept Deep Dive
Every integer greater than 1 is either prime or can be built by multiplying primes together. This is the Fundamental Theorem of Arithmetic — the idea that prime factorization is unique. No matter how you factorize 360, you'll always end up with 2³ × 3² × 5 in some order. This theorem is the reason HCF and LCM can be calculated systematically using prime powers, and it's the backbone of everything from cryptanalysis to finding the smallest angle between clock hands.

When we talk about divisibility, we're really talking about factors and multiples. If a divides b (written a | b), then b is a multiple of a and a is a factor of b. The transitive property is important here: if a divides b and b divides c, then a divides c. So if 3 divides 12 and 12 divides 36, then 3 divides 36. This logic underpins many proof-based questions in competitive exams.

HCF (also called GCD — Greatest Common Divisor) is fundamentally about what the two numbers have in common. Imagine you have two ropes of length 24m and 36m, and you want to cut them into equal pieces with no waste — what's the largest possible length of each piece? That's the HCF. You want the largest number that fits perfectly into both. LCM is the reverse problem: if two events repeat every 24 days and every 36 days, when will they coincide? You need the smallest number that is a multiple of both — the LCM.

The relationship HCF(a,b) × LCM(a,b) = a × b is always true for any two positive integers. More generally, if HCF(a,b) = h, we can write a = h × a₁ and b = h × b₁ where a₁ and b₁ are co-prime. Then LCM(a,b) = h × a₁ × b₁. This generalization is especially useful when dealing with three or more numbers, where the simple product formula doesn't directly apply. For three numbers, LCM(a,b,c) × HCF(a,b,c) ≠ a × b × c in general.

### Advanced Formula Derivation
**Deriving the HCF × LCM relationship:**

For two numbers a and b, let h = HCF(a,b). Then a = h × m and b = h × n where m and n are co-prime (by definition of HCF — we've factored out the highest common divisor).

The LCM must contain all prime factors of a and all prime factors of b, raised to their highest powers. Since a and b share only the factors in h, and m and n are co-prime:
- LCM(a,b) = h × m × n

Now compute: HCF × LCM = h × (h × m × n) = h² × m × n

And: a × b = (h × m) × (h × n) = h² × m × n

Therefore: HCF × LCM = a × b. QED.

**Generalized for three numbers:**
For three numbers a, b, c:
- HCF(a,b,c) = HCF(HCF(a,b), c)
- LCM(a,b,c) is more complex — there's no simple formula like the two-number case. You compute LCM(a,b,c) = LCM(LCM(a,b), c) but beware: LCM(LCM(a,b), c) × HCF(LCM(a,b), c) ≠ LCM(a,b) × c.

### GATE-Level Numerical Problems

**Q1 (GATE 2020):** The LCM of two numbers is 280 and their HCF is 7. If one number is 35, find the other number.
- Working:
  - Product of two numbers = HCF × LCM = 7 × 280 = 1960
  - Other number = 1960 ÷ 35 = 56
  - Verify: HCF(35, 56) = 7 ✓, LCM(35, 56) = 280 ✓
- Answer: 56
- Common error: Trying to use LCM/HCE ratio directly without the product relationship.

**Q2 (GATE 2019):** A number N when divided by 17 leaves a remainder of 5. What is the remainder when 3N + 7 is divided by 17?
- Working:
  - N ≡ 5 (mod 17)
  - 3N + 7 ≡ 3(5) + 7 = 15 + 7 = 22 (mod 17)
  - 22 ≡ 5 (mod 17)
- Answer: 5
- Common error: Forgetting that congruences work multiplicatively and additively. Some students try to just add 5 + 7 = 12 — wrong because N is multiplied by 3.

**Q3:** Three bells ring at intervals of 12, 18, and 24 minutes. If they ring together at 8:00 AM, when will they ring together again?
- Working:
  - Find LCM(12, 18, 24)
  - 12 = 2² × 3
  - 18 = 2 × 3²
  - 24 = 2³ × 3
  - LCM = 2³ × 3² = 8 × 9 = 72 minutes
  - 72 minutes after 8:00 AM = 9:12 AM
- Answer: 9:12 AM
- Common error: Trying to average the intervals (18 minutes) or multiply them all (5184 minutes). LCM is the correct approach.

### Multiple Approaches

**Method A: Prime Factorization (systematic, always works)**
Break each number into its prime factors. For HCF, take the minimum power of each common prime. For LCM, take the maximum power of each prime appearing in any number. Best when numbers are moderate in size and you need exact values.

**Method B: Division Method (efficient for large numbers)**
For HCF: Divide the larger by the smaller, then divide the divisor by the remainder, and continue until remainder is 0. The last non-zero remainder is the HCF. For LCM, use the relationship LCM = (a × b) ÷ HCF. This is faster when numbers are large and prime factorization would be tedious.

**When to use:** Method A for conceptual clarity and when you need to show your work. Method B for speed, especially in exam conditions with large numbers.

### Tricky Cases
- **LCM of fractions:** LCM of fractions a/b and c/d = LCM(a,c) / HCF(b,d). Don't apply the standard LCM formula to the denominators directly.
- **HCF and LCM of decimal numbers:** First convert to integers by multiplying by powers of 10, find HCF/LCM of the integers, then divide by the same power of 10. Example: HCF of 0.6 and 0.9: convert to 6 and 9, HCF = 3, answer = 0.3.
- **Co-prime detection:** Two numbers are co-prime if their HCF is 1. Note: being co-prime does NOT mean both numbers are prime — 8 and 9 are co-prime but neither is prime. Also, 1 is co-prime with every number.
- **Large numbers with unknown factors:** When a and b are very large, finding HCF by division method (Euclidean algorithm) is the only practical approach — keep dividing the previous divisor by the remainder until you reach 0.

*Content adapted based on your selected roadmap duration.*
