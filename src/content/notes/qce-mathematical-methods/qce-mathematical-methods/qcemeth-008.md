---
exam: qce-mathematical-methods
examName: QCE Mathematical Methods & Specialist Mathematics (QCAA 2025)
subject: qce-mathematical-methods
subjectName: Mathematical Methods
topic: qcemeth-008
topicName: "Major Topic: Probability and Statistics"
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Major Topic: Probability and Statistics — QCE Mathematical Methods (QCAA 2025) Notes

Probability and Statistics is one of the four major topics in QCE Mathematical Methods. It covers univariate and bivariate data, summary statistics; probability distributions (binomial, normal); sampling, confidence intervals and hypothesis testing.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Univariate data.** Mean, median, mode, range, IQR, SD.
- **Bivariate data.** Correlation r. Regression y = a + bx.
- **Binomial distribution.** X ~ B(n, p). E(X) = np.
- **Normal distribution.** Mean μ, SD σ. Standardise Z = (X − μ)/σ.
- **Confidence intervals.** 95% CI: x̄ ± 1.96 × σ/√n.

#### Examiner traps

- Mixing up sample mean SD σ/√n with σ.
- Confusing correlation with causation.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Summary statistics

Mean x̄ = Σx/n. SD s = √(Σ(x − x̄)²/n). Median: middle value.

#### Probability distributions

Binomial: X ~ B(n, p). E(X) = np, Var(X) = np(1 − p). P(X = k) = C(n, k) p^k (1 − p)^(n − k).
Normal: f(x) = (1/(σ√(2π))) e^(−(x−μ)²/(2σ²)). Standardise: Z = (X − μ)/σ.

#### Statistical inference

95% CI for μ: x̄ ± 1.96 × σ/√n. Hypothesis test: state H₀, choose α, compute z, make decision.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Statistics is heavily weighted in Unit 4

- **Unit 4** includes the summative external assessment.

#### Year 11-12 planning pattern

- Build intuition through real datasets.
- Practice hypothesis testing problems.

#### Common misconceptions (and the correction)

- "Higher r means stronger causation." No.
- "P(X = k) for normal distribution is non-zero." P(X = k) = 0.

#### Specification reference

This major topic is one of four cross-cutting topics in QCE Mathematical Methods. Confirm the live syllabus on qcaa.qld.edu.au.

#### Worked example — conditional probability and tree diagram analysis

A medical diagnostic test for a condition is administered to a population where the prevalence of the condition is 5% (P(C) = 0.05).
The test has:
- Sensitivity (true positive rate): P(T⁺ | C) = 0.94
- Specificity (true negative rate): P(T⁻ | C') = 0.96

1. Construct a probability tree diagram representation and calculate the probability that a randomly chosen person tests positive P(T⁺).
2. Calculate the positive predictive value: the probability that a person who tests positive actually has the condition P(C | T⁺).

Part 1: Total probability of testing positive
Using the law of total probability:

```
  P(T⁺) = P(C) × P(T⁺ | C) + P(C') × P(T⁺ | C')
```

Given:
- P(C) = 0.05  ⇒  P(C') = 1 − 0.05 = 0.95
- P(T⁺ | C) = 0.94
- P(T⁻ | C') = 0.96  ⇒  P(T⁺ | C') = 1 − 0.96 = 0.04 (false positive rate)

Calculate each branch:
- Branch 1: Person has condition and tests positive:
  P(C ∩ T⁺) = 0.05 × 0.94 = 0.047
- Branch 2: Person does not have condition and tests positive:
  P(C' ∩ T⁺) = 0.95 × 0.04 = 0.038

Total probability:

```
  P(T⁺) = 0.047 + 0.038 = 0.085
```

The probability that a randomly chosen person tests positive is 0.085 (or 8.5%).

Part 2: Positive predictive value P(C | T⁺)
Apply Bayes' theorem:

```
  P(C | T⁺) = P(C ∩ T⁺) / P(T⁺)
            = 0.047 / 0.085
            = 47 / 85
            ≈ 0.5529
```

Even with 94% sensitivity and 96% specificity, a person who tests positive has only a 55.3% chance of actually having the condition, because the condition is relatively rare in the population.

#### Worked example — binomial distribution probability and expected value

A biased die has a probability of landing on a six equal to p = 0.25. The die is rolled n = 8 times.
Let X be the number of sixes rolled.
1. State the distribution of X with its parameters.
2. Find the probability of rolling exactly three sixes P(X = 3).
3. Find the probability of rolling at least two sixes P(X ≥ 2).
4. Calculate the expected value E(X) and standard deviation σ of the distribution.

Part 1: Distribution specification
X follows a binomial distribution: X ~ B(n = 8, p = 0.25).

Part 2: P(X = 3)

```
  P(X = 3) = (8 choose 3) × (0.25)³ × (0.75)⁵
```

Calculate combinations and powers:
- (8 choose 3) = 8! / (3! 5!) = (8 × 7 × 6) / (3 × 2 × 1) = 56
- (0.25)³ = 1 / 64 = 0.015625
- (0.75)⁵ = 243 / 1024 ≈ 0.237305

```
  P(X = 3) = 56 × (1/64) × (243/1024)
           = (7/8) × (243/1024)
           = 1701 / 8192
           ≈ 0.2076
```

Part 3: P(X ≥ 2) using complement rule

```
  P(X ≥ 2) = 1 − P(X = 0) − P(X = 1)
```

- P(X = 0) = (0.75)⁸ = 6561 / 65536 ≈ 0.10011
- P(X = 1) = 8 × (0.25)¹ × (0.75)⁷ = 2 × (2187 / 16384) = 2187 / 8192 ≈ 0.26697

```
  P(X ≤ 1) = 0.10011 + 0.26697 = 0.36708
  P(X ≥ 2) = 1 − 0.36708 = 0.63292
```

The probability of rolling at least two sixes is approximately 0.6329 (or 63.3%).

Part 4: Expected value and standard deviation

```
  E(X) = np = 8 × 0.25 = 2
  Var(X) = np(1 − p) = 8 × 0.25 × 0.75 = 1.5
  σ = √1.5 ≈ 1.2247
```

#### Common marking-scheme mistakes

- Confusing conditional probability P(A | B) with the intersection probability P(A ∩ B).
- Assuming events are independent without verifying the condition P(A ∩ B) = P(A)P(B).
- Evaluating "at least two" P(X ≥ 2) by summing P(X = 2) through P(X = 8) manually instead of using the complement rule 1 − P(X ≤ 1).
- Forgetting to include the binomial coefficient (n choose k) in probability calculations.
- Using sample standard deviation formulas on a known probability distribution instead of σ = √[np(1 − p)].
- Mixing up false positive rate (1 − specificity) with false negative rate (1 − sensitivity).

#### 20-minute recap before you walk in

- Conditional probability definition: P(A | B) = P(A ∩ B) / P(B).
- Independence check: events A and B are independent if and only if P(A ∩ B) = P(A) × P(B).
- Mutually exclusive events have P(A ∩ B) = 0 and cannot be independent if both have non-zero probabilities.
- Binomial probability formula: P(X = k) = (n choose k) p^k (1 − p)^(n−k).
- Mean and variance of binomial distribution: μ = np, σ² = np(1 − p).

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA Mathematical Methods syllabus for probability and statistics also lists the following sub-topics:

- Permutations and combinations formulas and solving constrained seating and selection problems.
- Continuous random variables defined on unbounded intervals involving exponential decay.
- Normal approximation to the binomial distribution when np ≥ 5 and n(1 − p) ≥ 5.
- Simulation of random sampling and constructing empirical sampling distributions.
- Calculating margin of error for varying confidence levels in opinion polling datasets.

Confirm the live sub-topic list on the QCAA Mathematical Methods syllabus page before planning revision around these.

---

*Last updated 2026-09-24. Source: QCE Mathematical Methods General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods. Awarding body: Queensland Curriculum and Assessment Authority (QCAA).*