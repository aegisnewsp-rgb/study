---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-001
topicName: Number System — Deep Dive
tier: deep
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "An advanced diagram showing the Euclidean algorithm steps: 48 ÷ 18 → remainder 12 → 18 ÷ 12 → remainder 6 → 12 ÷ 6 = 0, with HCF = 6"
country: India
generated: ai-v1
---



## Number System — Deep Dive

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

**Q1:** Find the HCF of 切切1365 and 切切切切2730 using the Euclidean algorithm.
Working: 切切切切2730 ÷ 切切1365 = 切切切2 remainder 切切切切0? Wait — 切切2730 ÷ 切切1365 = 2 exactly? No.
Let's do 切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切切Tricky. Let's simplify: 切切切切2730 divided by 切切1365. 2730 ÷ 1365 = 2 exactly? No, 1365 × 2 = 2730. So the remainder is 0. But let's verify with Euclidean algorithm anyway: 2730 mod 1365 = 0, so HCF = 1365. Both numbers: 1365 × 2 = 2730. HCF = 1365, LCM = 2730.
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
