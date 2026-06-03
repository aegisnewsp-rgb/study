---
exam: ssc-cgl
examName: SSC CGL Tier 2
subject: quantitative-abilities
subjectName: Quantitative Abilities
topic: ssc2-qa-001
topicName: "Number System & Simplification"
tier: unified
weight: 2
weight_unit: "% of Tier 2 paper"
diagramPrompt: "A decision tree flowchart: Is the question about HCF/LCM? → Go to prime factor/successive division. Remainder problem? → Check if divisors are co-prime → Use LCM or CRT. Unit digit/cyclicity? → Find exponent mod cycle length. Simplification? → Apply BODMAS with fraction handling."
country: india
generated: 2026-03-25
lastUpdated: 2026-03-25
---

# Number System & Simplification

### 🟢 Lite

### Key Rule / Formula
**LCM × HCF = Product of two numbers** (for any two positive integers). Simplification follows BODMAS — Brackets → Orders → Division → Multiplication → Addition → Subtraction.

### Memory Trick
**BODMAS** = "Big Owls Don\'t Mind Adding Subtracting" — brackets first, then left to right for operations of equal rank. For HCF/LCM, use the **prime factorisation method**: write each number as a product of primes, take the minimum powers of common primes for HCF, maximum powers for LCM.

### 1-Sentence Summary
SSC tests your ability to work with HCF/LCM, divisibility rules, remainders, simplify complex expressions, and apply BODMAS — all rooted in a solid understanding of the number system's building blocks.

### Quick Example
**Q:** Find the HCF and LCM of 48 and 180.
A: **HCF = 12, LCM = 720**
- 48 = 2⁴ × 3¹
- 180 = 2² × 3² × 5¹
- HCF = 2² × 3¹ = **12**
- LCM = 2⁴ × 3² × 5¹ = **720**
- Check: 12 × 720 = 8,640 = 48 × 180 ✓

**Q:** Simplify: 2³ + 4 ÷ 2 × 5
A: 8 + 2 × 5 = 8 + 10 = **18**

### Must Remember
- **Divisibility Rules:**
  - 2: last digit even | 3: sum of digits divisible by 3
  - 5: last digit 0 or 5 | 7: subtract twice last digit, divisible by 7
  - 9: sum of digits divisible by 9 | 11: difference of alternating sums divisible by 11
- **Remainder theorem:** When N is divided by d, remainder r means N = kd + r, where 0 ≤ r < d.
- **Even numbers** divisible by 2. **Odd numbers** not divisible by 2.
- **Co-prime numbers:** HCF = 1. For co-prime a and b: LCM = a × b.
- **Square root** of n: the number that when multiplied by itself gives n. √n for perfect squares is an integer.

### Exam Tips for SSC CGL Tier 2
- **Always factorise completely** before finding HCF/LCM — don't guess, list primes.
- For **divisibility by 7**, the test: subtract twice the last digit from the rest. Example: 84 → 8 − 2×4 = 0 → divisible by 7.
- When an expression has **nested roots** like √(48 + √36), solve innermost first: √36 = 6, then 48 + 6 = 54, then √54.
- **BODMAS in SSC questions:** Often the trap is doing M before D or A before S because students think alphabetically. Remember: left to right for same-rank operations.

### Common Pitfalls
- **Assuming LCM > HCF always:** For co-prime numbers, LCM = product and HCF = 1 — that's the relationship LCM × HCF = a × b.
- **Not applying BODMAS in correct order:** 8 ÷ 4 × 2 = (8 ÷ 4) × 2 = 4, NOT 8 ÷ (4 × 2) = 1. Left to right for D and M.
- **Forgetting to bracket when substituting values** into expressions like a − b − c: 5 − 2 − 1 = (5 − 2) − 1 = 2, NOT 5 − (2 − 1) = 4.

### 🟡 Standard

### Concept
The number system is the backbone of SSC CGL Quant. It covers natural numbers, whole numbers, integers, rational and irrational numbers. Simplification means evaluating expressions correctly using BODMAS, while the number system portion tests your skills in divisibility, HCF/LCM, remainders, and finding missing digits in sums or products. In Tier 2, expect higher difficulty — questions often combine two concepts (e.g., LCM + remainder theorem).

Key sub-topics: divisibility rules (2, 3, 4, 5, 6, 8, 9, 11), unit digit cycles, cyclicity of remainders, and Euclidean algorithm for HCF.

### Key Points
- Divisibility by 11: Difference between sum of digits in odd and even positions is a multiple of 11.
- Unit digit of 7^power cycles in 7, 9, 3, 1 (cycle length 4). Find power mod 4.
- For any two numbers a and b: a × b = HCF(a,b) × LCM(a,b) — one of the most used identities.
- Remainder theorem: When dividing by (a×b) where a and b are co-prime, remainders can be combined using the Chinese Remainder Theorem concept.
- Always reduce fractions to lowest terms before comparing.

### Worked Example
**Q:** When a number is divided by 6, 8, and 12, it leaves the same remainder 3. If the number is between 300 and 350, find it.
**Approach:** The number − 3 is divisible by LCM(6, 8, 12). LCM = 24. So number = 24k + 3. Between 300–350: 24 × 13 = 312, so 312 + 3 = 315.
**Answer:** 315

### SSC Pattern / Tips
- Most questions ask for the HCF/LCM of 3+ numbers — use the prime factor method or successive division.
- Remainder problems often give remainders 1 or 2 when dividing by small numbers — look for the LCM approach.
- For unit digit problems, always find exponent mod 4 (or mod 20 for larger bases).
- Always check if the numbers are co-prime before applying the HCF × LCM = product rule.

### 🔴 Extended

### Full Concept
The number system in SSC CGL Tier 2 goes well beyond textbook definitions. It demands fluency with properties of real numbers, modular arithmetic, and the ability to spot patterns in cycles. Simplification requires mastery of BODMAS, fraction operations, surds, and powers. The most advanced Tier 2 questions often combine number system properties with algebra or apply the Chinese Remainder Theorem (CRT) in disguised form.

**Number Classification:** Natural (1,2,3...), Whole (includes 0), Integers (pos + neg), Rational (p/q form), Irrational (non-repeating decimals). SSC often tests whether students confuse rational/irrational — remember √2, π, and most roots of non-perfect squares are irrational.

**HCF/LCM Methods:** Prime factor method gives exact factors. Successive division (divide larger by smaller, then remainder becomes divisor) is faster for two numbers. For 3+ numbers, find HCF of first two, then HCF of result with third. LCM method: same for LCM.

**Cyclicity:** The last digit of powers follows a cycle. Key cycles: 2→{2,4,8,6}, 3→{3,9,7,1}, 7→{7,9,3,1}, 8→{8,4,2,6}. For any base^n, find n mod cycle length (when cycle is 4). For 0, 1, 5, 6 — the unit digit always equals the base unit digit regardless of power.

**Remainder Theorem (Fermat/Euler flavour for SSC):** If N = a × b × c + r and all a, b, c are co-prime pairwise, then remainders can be combined. In Tier 2, the most common form is: N gives remainder r1 when divided by a, remainder r2 when divided by b, find N. Solution: find the LCM, find the base number, add r.

### SSC CGL Deep Analysis
- **Frequency:** 1–2 questions per paper (Tier 2, 2022–2024 pattern). LCM/HCF combined with remainders is the most common question type.
- **Difficulty:** Easy to medium. A well-prepared candidate should solve these in under 90 seconds each.
- **Recent trend:** Questions now frequently combine concepts — e.g., a cyclicity question with HCF, or a simplification involving both powers and fractions.
- **Newer patterns:** Finding the smallest number with specific remainders when divided by non-coprime divisors (requires adjustment).
- **Total weight in Tier 2:** Roughly 2–3% of the quant paper.

### High-Scoring Strategy
1. Memorise divisibility rules for 2, 3, 4, 5, 6, 8, 9, 11, 12, 15, 25 — these save 30–60 seconds per question.
2. For HCF/LCM of fractions: HCF = HCF of numerators / LCM of denominators; LCM = LCM of numerators / HCF of denominators.
3. In remainder problems, always check if the divisors are co-prime. If not, reduce the problem.
4. For simplification, convert mixed numbers to improper fractions early — avoid decimal approximations.
5. Practice the Euler theorem shortcut for large exponent remainders when dividing by 10, 100, etc.

### SSC-Level Practice
**Q1:** A number gives remainder 3 when divided by 5, 7, and 11. If the sum of these divisors is 23, find the smallest such number.
Answer: 388 — Working: LCM(5,7,11) = 385. Smallest number = 385 + 3 = 388. (Sum 5+7+11=23 matches the condition.)

**Q2:** Find the unit digit of 7^43 + 3^28.
Answer: 4 — Working: 7^43 → 43 mod 4 = 3 → 7^3 unit digit = 343 → 3. 3^28 → 28 mod 4 = 0 → 3^4 unit digit = 1 → so 3^28 = (3^4)^7 → unit digit = 1. Sum = 3 + 1 = 4.

### Common Traps
- **Trap 1:** Using HCF × LCM = product rule when numbers are NOT co-prime. Always verify co-primality first.
- **Trap 2:** Applying BODMAS incorrectly with nested brackets — especially when division and multiplication are mixed. Always left to right within same precedence.
- **Trap 3:** Assuming a number is divisible by 6 when it passes divisibility by 2 and 3 separately — this only works because 2 and 3 are co-prime. For 4 and 6, this fails (e.g., 12 is divisible by both but 12/4=3, 12/6=2 — actually it works here, but the real trap is assuming divisibility by all factors gives divisibility by their LCM without checking co-primality).

*Content adapted based on your selected roadmap duration.*
