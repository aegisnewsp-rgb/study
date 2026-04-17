---



exam: kenyatta-ku
examName: Kenyatta University (Kenya)
subject: mathematics
subjectName: Mathematics
topic: math-004
topicName: Probability and Statistics
weight: 4
country: kenyatta
generated: "2026-04-17T23:38:00.000000"
diagramPrompt: "Clean educational diagram showing Probability Statistics with clear labels, white background, exam-style illustration"





---
# Probability and Statistics

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Probability and Statistics** — Key Facts for Kenyatta University
Probability: P(E) = favourable outcomes / total outcomes; always 0 ≤ P ≤ 1
Conditional: P(A|B) = P(A ∩ B)/P(B)
Independent events: P(A ∩ B) = P(A)·P(B)
Mean: x̄ = Σx_i/n or Σf_ix_i/Σf_i for grouped
Standard deviation: σ = √[Σ(x_i − x̄)²/n]
⚡ Exam tip: For probability, always check whether events are independent or mutually exclusive — different formulas!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Probability and Statistics** — Kenyatta University Study Guide

**Probability rules:**
- P(A or B) = P(A) + P(B) − P(A and B)
- P(A and B) = P(A)·P(B) for independent events
- P(not A) = 1 − P(A)
- P(A or B) = P(A) + P(B) for mutually exclusive events

**Bayes' theorem:**
P(A|B) = P(B|A)·P(A) / P(B)

**Permutations:**
nP_r = n!/(n−r)! — order matters

**Combinations:**
nC_r = n!/[r!(n−r)!] — order doesn't matter

**Probability distributions:**
- Binomial: P(X=r) = nC_r p^r q^{n−r}
- Mean of binomial = np
- Variance of binomial = npq

**Statistics:**
- Mean: x̄ = Σx_i/n
- For grouped: x̄ = Σf_ix_i/Σf_i
- Median: middle value when sorted
- Mode: most frequent value

**Standard deviation:**
σ = √[Σ(x_i − x̄)²/n] (population)
s = √[Σ(x_i − x̄)²/(n−1)] (sample)

**Variance shortcut:**
σ² = (Σx_i²)/n − x̄²

**Quartiles:**
Q1 = value at (n+1)/4; Q3 = value at 3(n+1)/4

**Correlation:**
r = Σ(x−x̄)(y−ȳ) / √[Σ(x−x̄)²·Σ(y−ȳ)²]
Ranges from −1 to +1

- **Key formula:** P(A|B) = P(A ∩ B)/P(B); nP_r = n!/(n−r)!; nC_r = n!/[r!(n−r)!]
- **Common trap:** Mutually exclusive events: P(A and B) = 0; independent: P(A|B) = P(A)
- **Exam weight:** 2–3 questions per exam

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Probability and Statistics** — Comprehensive Kenyatta Notes

**Counting principles:**
- Multiplication: if task A has m ways and B has n ways, A followed by B has m×n ways
- Addition: if tasks are exclusive (either A or B), total = m + n

**Complement rule:**
P(at least one) = 1 − P(none)

**Conditional probability:**
P(A|B) = P(A ∩ B)/P(B)
When drawing without replacement, probabilities change after each draw

**Total probability:**
P(A) = Σ P(E_i)·P(A|E_i) for partition {E_i}

**Random variable:**
Discrete: takes specific values with probabilities
Continuous: described by probability density function

**Expected value:**
E(X) = Σ p_i x_i
E(X²) = Σ p_i x_i²
Var(X) = E(X²) − [E(X)]²

**Binomial distribution conditions:**
1. Fixed number of trials n
2. Each trial has two outcomes (success/failure)
3. Probability p is constant
4. Trials are independent

**Poisson approximation to binomial:**
For large n, small p: λ = np; P(X=r) ≈ e^{−λ} λ^r/r!

**Normal distribution:**
Bell-shaped curve, symmetric about mean
68% within 1σ, 95% within 2σ, 99.7% within 3σ

**Z-score:**
z = (x − x̄)/σ
Standardises any normal distribution to N(0,1)

**Hypothesis testing:**
Null hypothesis H₀: assumed true until evidence suggests otherwise
Significance level α: probability of rejecting H₀ when true
p-value: probability of observing data given H₀ is true

**Regression line:**
y on x: y − ȳ = r(σ_y/σ_x)(x − x̄)
x on y: x − x̄ = r(σ_x/σ_y)(y − ȳ)

**Chi-square test:**
Σ(O−E)²/E for goodness of fit

**Permutation with repetition:**
n!/(n₁!n₂!... ) for n objects with groups of identical objects

**Derangements:**
Number of ways n objects can be arranged with no object in original position:
D_n = n![1 − 1/1! + 1/2! − ... + (−1)^n/n!]

**Probability with dice/cards:**
- P(sum of two dice = 7) = 6/36 = 1/6
- P(drawing ace from pack) = 4/52 = 1/13

**Odds:**
- Odds in favour of E: P(E)/P(E') = a:b → P(E) = a/(a+b)

- **Remember:** P(A|B) = P(A ∩ B)/P(B); independent: P(A∩B) = P(A)·P(B); mutually exclusive: P(A∪B) = P(A)+P(B); complement: P(at least one) = 1 − P(none)
- **Previous years:** "Find probability of drawing 2 aces from pack without replacement" [2023 KU]; "Find mean and variance of binomial with n=10, p=0.5" [2024 KU]; "Calculate standard deviation of data: 2, 4, 6, 8, 10" [2024 KU]

---

## 📊 Kenyatta University Exam Essentials

| Detail | Value |
|---|---|
| Questions | 50 (depending on course) |
| Time | 2–3 hours |
| Marks | 100 |
| Format | Mix of short answer and problem solving |

### 💡 Pro Tips
- For "at least one" problems, use complement: 1 − P(none)
- When drawing without replacement, multiply sequentially with updated counts
- For independent events, P(A∩B) = P(A)·P(B); for mutually exclusive, P(A∪B) = P(A)+P(B)
- Always check whether order matters — permutations vs combinations
- Variance shortcut: σ² = (Σx²)/n − x̄² saves computation time

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*