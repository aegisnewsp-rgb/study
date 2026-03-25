---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-002
topicName: "Number System (HCF/LCM, Divisibility) — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A prime factorization tree diagram showing how 360 breaks down into 2³ × 3² × 5, with visual branches showing the division process"
country: India
generated: ai-v1
---



## Number System (HCF/LCM, Divisibility) — Deep Dive

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
