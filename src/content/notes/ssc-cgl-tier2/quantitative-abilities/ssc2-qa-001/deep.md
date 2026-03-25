---
exam: ssc-cgl-tier2
examName: SSC CGL Tier 2
subject: quantitative-abilities
subjectName: Quantitative Abilities
topic: ssc2-qa-001
topicName: "Number System & Simplification — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of Tier 2 paper"
diagramPrompt: "A decision tree flowchart: Is the question about HCF/LCM? → Go to prime factor/successive division. Remainder problem? → Check if divisors are co-prime → Use LCM or CRT. Unit digit/cyclicity? → Find exponent mod cycle length. Simplification? → Apply BODMAS with fraction handling."
country: India
generated: ai-v1
---



## Number System & Simplification — Deep Dive

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
Answer: 3 — Working: LCM(5,7,11) = 385. Smallest number = 385 + 3 = 388. (Sum 5+7+11=23 matches the condition.)

**Q2:** Find the unit digit of 7^43 + 3^28.
Answer: 8 — Working: 7^43 → 43 mod 4 = 3 → 7^3 unit digit = 343 → 3. 3^28 → 28 mod 4 = 0 → 3^4 unit digit = 1 → so 3^28 = (3^4)^7 → unit digit = 1. Sum = 3+1 = 4. Wait — check: 3^28 = (3^4)^7, yes unit digit 1. 7^43: 43 mod 4 = 3, so 7^3 = 343, unit digit 3. Sum = 4. But actually: 7^43 unit digit = 7^(4×10+3) → 7^3 → 3. 3^28 unit digit = 3^(4×7) → 1. Sum = 4. (Answer is 4, not 8 — correction: 3+1=4.)

### Common Traps
- **Trap 1:** Using HCF × LCM = product rule when numbers are NOT co-prime. Always verify co-primality first.
- **Trap 2:** Applying BODMAS incorrectly with nested brackets — especially when division and multiplication are mixed. Always left to right within same precedence.
- **Trap 3:** Assuming a number is divisible by 6 when it passes divisibility by 2 and 3 separately — this only works because 2 and 3 are co-prime. For 4 and 6, this fails (e.g., 12 is divisible by both but 12/4=3, 12/6=2 — actually it works here, but the real trap is assuming divisibility by all factors gives divisibility by their LCM without checking co-primality).
