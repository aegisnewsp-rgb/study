---
exam: cuet
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-001
topicName: "Number System"
tier: unified
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "An advanced diagram showing the Euclidean algorithm steps: 48 ÷ 18 → remainder 12 → 18 ÷ 12 → remainder 6 → 12 ÷ 6 = 0, with HCF = 6"
country: india
generated: 2026-03-25
lastUpdated: "2026-09-15"
---

# Number System

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

The **Number System** classifies real numbers and supplies the divisibility toolkit — HCF, LCM, prime factorisation, unit-digit cyclicity, and modular arithmetic — used across CUET UG Quantitative Aptitude. The single most-tested identity is **HCF(a, b) × LCM(a, b) = a × b**, valid only for two positive integers. Every concept below reduces to choosing between common factors (HCF) and combined factors (LCM).

- **Classification chain (proper subset):** N ⊂ W ⊂ Z ⊂ Q ⊂ R, with irrationals = R \ Q.
- **Euclid's Division Lemma:** a = bq + r, where 0 ≤ r < |b|; a = dividend, b = divisor, q = quotient, r = remainder (all integers).
- **Fundamental Theorem of Arithmetic:** every integer > 1 has a unique prime factorisation; HCF takes minimum powers, LCM takes maximum powers of common primes.
- **HCF of fractions** = HCF(numerators) / LCM(denominators); **LCM of fractions** = LCM(numerators) / HCF(denominators).
- **Unit-digit cycles:** 2,3,7,8 repeat every 4 powers; 4,9 every 2; 0,1,5,6 are constant.

> 💡 **High-Yield Memory Hook:** **"N-W-I-Q-R"** — Natural, Whole, Integer, Rational, Real (each nested inside the next). For HCF vs LCM remember **"HCF = Highest Common, take MIN; LCM = Least Common Multiple, take MAX"** of prime powers. For unit digits: **"2-3-7-8 have 4-bike cycles, 4-9 have 2-bike, rest are scooters (0,1,5,6 don't move)"**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Classification of Numbers

Numbers form a strict hierarchy: **N** = {1, 2, 3, …}, **W** = {0, 1, 2, …}, **Z** = {…, −2, −1, 0, 1, 2, …}, **Q** = {p/q : q ≠ 0, gcd(p,q)=1}, and **R** = Q ∪ {irrationals like √2, π}. The number 1 is **neither prime nor composite**; 0 is neither positive nor negative. Rational numbers whose denominator has only 2 and 5 as prime factors produce terminating decimals; all others repeat.

#### HCF, LCM and Prime Factorisation

By the **Fundamental Theorem of Arithmetic**, N = p₁^a₁ × p₂^a₂ × … × pₖ^aₖ. For two numbers, **HCF uses the minimum exponent** of each shared prime, and **LCM uses the maximum exponent**. The product identity HCF × LCM = a × b is a quick check; for three or more numbers it fails as a single product and must be computed pairwise.

#### Comparison Matrix — HCF vs LCM vs. Euclid's Lemma

| Concept | When used | Operation on prime powers | Domain |
|---|---|---|---|
| **HCF (GCD)** | "Largest that divides both" | Take minimum exponent of each common prime | Two or more positive integers |
| **LCM** | "Smallest divisible by both" | Take maximum exponent across primes | Two or more positive integers |
| **Euclid's Lemma a = bq + r** | Finding HCF by long division | Iterative: replace (a,b) with (b,r) until r = 0 | Integers with b ≠ 0, 0 ≤ r < \|b\| |
| **HCF of fractions** | "Largest fraction dividing both" | HCF(num) / LCM(den) | Fractions in lowest form |

#### Divisibility Shortcuts

| Divisor | Test |
|---|---|
| 2 | Last digit even |
| 3 / 9 | Sum of digits divisible by 3 / 9 |
| 4 / 8 | Last 2 / 3 digits divisible by 4 / 8 |
| 5 | Last digit 0 or 5 |
| 11 | Alternating sum of digits divisible by 11 |

#### Modular Arithmetic and Unit Digits

For large powers, reduce base mod 10: unit digit of 7^103 = unit digit of 7^(103 mod 4) = 7^3 = 343 → **3**. The cycles 2,3,7,8 (length 4) and 4,9 (length 2) collapse huge exponents into a single digit.

#### 🎯 Exam-Level Worked Problem

**Question:** Find the largest number that divides 201 and 162 leaving remainders 7 and 5 respectively.

#### Solution:
The required number n divides (201 − 7) = 194 and (162 − 5) = 157 exactly. So n = HCF(194, 157).

Apply Euclid's Division Lemma:
- 194 = 157 × 1 + 37
- 157 = 37 × 4 + 9
- 37 = 9 × 4 + 1
- 9 = 1 × 9 + 0

HCF = **1**. Therefore no number > 1 satisfies the condition simultaneously.

> ⚠️ **Examiner Trap:** Students often forget to **subtract the remainders first**, then compute HCF of the differences. Computing HCF(201, 162) directly gives a wrong, larger answer. Always reduce to the "exact division" form before applying Euclid's lemma.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Limit Behaviour

- **HCF × LCM = product fails for three numbers.** For a = 12, b = 18, c = 30: HCF = 6, LCM = 180, but 6 × 180 = 1080 ≠ 12 × 18 × 30 = 6480. Use the correct identity: HCF(a,b,c) × LCM pairwise product / GCD of pairwise LCMs — but in exams, **compute pairwise**.
- **Cyclicity breaks at exponent 0.** 2^0 = 1 (unit digit 1), 5^0 = 1; don't divide a power by zero when reducing the exponent mod cycle length.
- **Negative numbers in Euclid's lemma:** always work with absolute values; the remainder constraint is 0 ≤ r < |b|.
- **Co-prime vs HCF = 1:** two numbers are co-prime iff HCF = 1; this is independent of whether either is prime.

#### Number of Divisors and Sum of Divisors

If N = p₁^a₁ × p₂^a₂ × … × pₖ^aₖ, then:
- **Number of divisors:** τ(N) = (a₁+1)(a₂+1)…(aₖ+1)
- **Sum of divisors:** σ(N) = Π [(pᵢ^(aᵢ+1) − 1) / (pᵢ − 1)]

For 360 = 2³ × 3² × 5¹, τ(360) = 4 × 3 × 2 = **24** divisors.

#### Base Conversion Recap

Decimal → Binary: divide by 2 repeatedly, read remainders bottom-up. Binary → Decimal: positional sum of 2^k. CUET rarely tests base conversion beyond binary–decimal, but the same algorithm extends to any base n.

#### Advanced Practice Prompts

1. If 2^x × 3^y = 648 and x, y are non-negative integers with x > y, find the number of divisors of the smallest number divisible by both 2^x and 3^y.
2. The unit digit of 3^(3^(3^3)) — use Euler's theorem mod 10: φ(10) = 4, so 3^k mod 10 depends on k mod 4; reduce the tower step by step.

> 💡 **High-Yield Revision Hook:** Before submitting any HCF/LCM answer, ask: (1) Did I subtract the remainders? (2) Is the question about numbers or fractions? (3) Am I using max or min prime powers? One of these three decides the answer.

---

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Number System" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Quantitative Aptitude notes](/notes/cuet/quantitative-aptitude/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
