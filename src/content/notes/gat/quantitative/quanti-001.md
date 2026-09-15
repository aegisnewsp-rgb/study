---
exam: gat
examName: GAT Pakistan
subject: quantitative
subjectName: "Quantitative Techniques"
topic: quanti-001
topicName: "Number System"
weight: 3
country: pakistan
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-15"
---

# Number System

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

The **Number System** is the GAT Quantitative Techniques backbone: classification of numbers, divisibility rules, prime factorisation, and the HCF/LCM toolkit. In GAT Pakistan this topic carries about **3% weight**, usually as 1–2 MCQs on HCF/LCM word problems, BODMAS simplification, or counting divisors. Master two identities and you clear most of the tested surface.

| Term | Meaning | Example |
|---|---|---|
| Natural (ℕ) | Positive counting integers | 1, 2, 3, … |
| Whole (W) | Naturals + 0 | 0, 1, 2, 3, … |
| Integer (ℤ) | Whole + negatives | …, −2, −1, 0, 1, 2, … |
| Rational (ℚ) | p/q with q ≠ 0, p,q ∈ ℤ | 3/7, −5/2 |
| Irrational | Non-terminating, non-repeating decimals | √2, π |
| Real (ℝ) | Rational ∪ Irrational | All decimal numbers |

#### Two identities to memorise:
- HCF(a, b) × LCM(a, b) = a × b
- Sum of first n naturals: S = n(n+1)/2

> 💡 **High-Yield Memory Hook:** **"HCF picks LOWest, LCM picks HIGHest"** when prime factorising — take the *smaller* exponent for HCF, the *larger* exponent for LCM. For BODMAS recall: **Brackets → Orders → Division → Multiplication → Addition → Subtraction**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Number Classification & Density

Numbers extend in nested sets: ℕ ⊂ W ⊂ ℤ ⊂ ℚ ⊂ ℝ. Every rational number has a decimal form that either **terminates** (like 0.75) or **recurs** (like 1/3 = 0.333…); every irrational number neither terminates nor recurs (√2 = 1.4142135…). A surd such as √8 simplifies to 2√2 — a canonical form used in GAT simplification questions.

#### Divisibility Shortcuts

These single-line tests avoid manual long division during the MCQ:

| Divisor | Test | Quick Example |
|---|---|---|
| 2 | Last digit is even | 4318 ✓ |
| 3 | Sum of digits divisible by 3 | 531 → 5+3+1=9 ✓ |
| 4 | Last two digits divisible by 4 | 124 ✓, 134 ✗ |
| 5 | Ends in 0 or 5 | 765 ✓ |
| 8 | Last three digits divisible by 8 | 4,136 ✓ |
| 9 | Sum of digits divisible by 9 | 2,178 ✓ |
| 11 | Alternating digit sum divisible by 11 | 121 → 1−2+1 = 0 ✓ |

#### HCF and LCM via Prime Factorisation

For N = pᵃ · qᵇ · rᶜ (distinct primes p, q, r):
- **HCF** uses the **lowest** power of every prime shared by both numbers.
- **LCM** uses the **highest** power of every prime appearing in either number.
- Identity: **HCF(a, b) × LCM(a, b) = a × b** (dimensionless ratio; a, b positive integers).

#### Divisor Counting

If N = pᵃ · qᵇ · rᶜ, then τ(N) = (a+1)(b+1)(c+1) gives the **number of divisors**, and σ(N) = [(pᵃ⁺¹−1)/(p−1)]·[(qᵇ⁺¹−1)/(q−1)]·[(rᶜ⁺¹−1)/(r−1)] gives the **sum of divisors**. Both return integers.

#### 🎯 Exam-Level Worked Problem

**Question:** Two bells ring every 12 seconds and 18 seconds respectively. If they ring together at 8:00 AM, after how many seconds will they next ring together, and what is the maximum interval at which they can be scheduled to ring **without ever ringing together**?

#### Solution:

*Step 1 — LCM for "ring together":* LCM(12, 18). Prime factorise: 12 = 2² · 3, 18 = 2 · 3². Take the highest powers: LCM = 2² · 3² = **36 seconds**.

*Step 2 — HCF for "never ring together":* Take the lowest common powers: HCF(12, 18) = 2 · 3 = **6 seconds**. Any interval that is a multiple of 6 keeps the pattern on the same grid lines, so they continue to coincide — meaning HCF does **not** solve the "never together" question by itself; the smallest interval that avoids coincidence is the LCM (36 s), or any coprime multiple of each. The HCF = 6 s is the largest interval at which they will repeatedly coincide, not avoid each other.

> ⚠️ **Examiner Trap:** Students swap HCF and LCM in "next ring together" questions. Remember: **together repeatedly = LCM**, **largest common tile = HCF**, **smallest common container = LCM**. The wording "never ring together" requires the LCM-based interval, not HCF.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases in Prime Concepts

| Edge Case | Correct Treatment | Common Misconception |
|---|---|---|
| 0 | Neither prime nor composite | Treating 0 as divisible by every number |
| 1 | Neither prime nor composite | Including 1 in prime lists |
| 2 | The only **even** prime | Calling every even number composite |
| Negative primes | Defined as −2, −3, … in extended number theory | Ignoring sign when factoring |
| √(perfect square) | Integer, hence rational | Leaving 16 as √16 and calling it irrational |
| 0/0 | Undefined, not 0 or 1 | Evaluating as 1 under BODMAS carelessness |

#### Mathematical Limits & Boundary Behaviour

As n → ∞, both Σn² = n(n+1)(2n+1)/6 and Σn³ = [n(n+1)/2]² grow, but cubes overtake squares — their ratio behaves like n². The divisor function τ(N) for N ≤ x grows roughly like ln x, and σ(N) ≥ N + 1 with equality only for prime N.

#### Connection to Adjacent Topics

- **Modular arithmetic** extends divisibility: a ≡ b (mod m) ⇔ m | (a − b). Used in GAT remainder problems.
- **Euclidean algorithm** for HCF: repeatedly replace (a, b) with (b, a mod b) until remainder = 0; the last non-zero remainder is the HCF. Faster than prime factorisation for large numbers.
- **BODMAS vs PEMDAS**: identical precedence, different regional labels. GAT prefers BODMAS notation.

#### Advanced Practice Prompts

1. Find the largest 4-digit number that leaves remainder 3 when divided by 5 and remainder 4 when divided by 7. *(Hint: apply CRT with moduli 5 and 7, then constrain to [1000, 9999].)*
2. If N = 2⁵ · 3² · 5, compute τ(N), σ(N), and verify HCF · LCM identity using a paired M = 2² · 3⁴ · 7.

## Continue your study

- **[View this topic in your GAT Pakistan roadmap](/roadmap/?exam=gat&duration=1mo)** — see where "Number System" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=gat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[GAT Pakistan exam overview](/exams/gat/)** — pattern, eligibility, and syllabus
- **[All Quantitative Techniques notes](/notes/gat/quantitative/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
