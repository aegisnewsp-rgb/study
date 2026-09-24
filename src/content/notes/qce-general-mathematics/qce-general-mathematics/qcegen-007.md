---
exam: qce-general-mathematics
examName: QCE General Mathematics & Specialist Mathematics (QCAA 2025)
subject: qce-general-mathematics
subjectName: General Mathematics
topic: qcegen-007
topicName: "Major Domain: Statistics and Probability"
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-20
---

# Major Domain: Statistics and Probability — QCE General Mathematics (QCAA 2025) Notes

Statistics and Probability is one of the three major domains in QCE General Mathematics. It covers univariate and bivariate data, summary statistics, correlation, regression, the normal distribution, time series analysis and statistical inference.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/general-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Univariate data.** Mean, median, mode, range, IQR, standard deviation.
- **Bivariate data.** Correlation coefficient r. Regression line y = a + bx.
- **Normal distribution.** Mean μ, SD σ. Standardise Z = (X − μ)/σ.
- **Time series.** Trend, seasonal variation, cyclic variation, random variation.
- **Inference.** Confidence intervals, hypothesis testing.

#### Examiner traps

- Confusing correlation with causation.
- Mixing up sample mean SD σ/√n with population SD σ.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Display and summary

Univariate data: histogram, box plot, stem-and-leaf. Five-number summary: min, Q1, median, Q3, max. Mean x̄ = Σx/n. SD s = √(Σ(x − x̄)²/n).

#### Correlation and regression

Correlation r ∈ [−1, 1]. Regression line y = a + bx where b = r × (s_y/s_x).

#### Normal distribution

Continuous distribution with density f(x) = (1/(σ√(2π))) e^(−(x−μ)²/(2σ²)). Standard normal Z = (X − μ)/σ.

#### Time series

Components of a time series: trend (long-term direction), seasonal variation (regular patterns within a year), cyclic variation (longer-term oscillations), random variation (unexplained residuals).

#### Inference

95% CI for μ: x̄ ± 1.96 × σ/√n. Hypothesis testing: state H₀, choose α, compute z, decide.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Statistics is heavily weighted in Unit 4

- **Unit 4 is the summative Unit and includes statistical inference, hypothesis testing, the chi-squared test and time series.**

#### Year 11 planning pattern

- Build intuition through real datasets (sports, weather, financial).
- Practice normal distribution calculations.
- Drill hypothesis testing problems.

#### Common misconceptions (and the correction)

- "Higher r means stronger causation." No — r measures linear association, not causation.
- "P(X = k) for normal distribution is non-zero." P(X = k) = 0 for continuous distributions.

#### Specification reference

This major domain is one of three cross-cutting domains in QCE General Mathematics. Confirm the live syllabus on qcaa.qld.edu.au.

#### Worked example — finding a z-score and a percentile

Heights of adult males in a population are normally distributed with mean μ = 175 cm and σ = 8 cm. Find the z-score for a height of 187 cm and the proportion of the population taller than 187 cm.

```
  z = (X − μ) / σ
    = (187 − 175) / 8
    = 12 / 8
    = 1.5
```

From a standard normal table, P(Z ≤ 1.5) ≈ 0.9332, so P(Z > 1.5) ≈ 1 − 0.9332 = 0.0668, or about 6.7%. A height of 187 cm is at roughly the 93rd percentile.

#### Worked example — back-solving a normal-distribution problem

The same population has mean 175 cm. The shortest 10% of adult males are below what height?

```
  P(Z < z*) = 0.10   →   z* ≈ −1.2816

  X* = μ + z* × σ
     = 175 + (−1.2816) × 8
     = 175 − 10.25
     = 164.75 cm
```

So 10% of adult males in this population are shorter than about 164.75 cm.

#### Worked example — time-series moving average smoothing

Quarterly sales for a small retailer over four quarters are:

```
  Q1: 120,  Q2: 150,  Q3: 100,  Q4: 180
```

A centred 4-quarter moving average equals the average of the four quarters. A 3-quarter moving average for Q2 is (120 + 150 + 100) / 3 = 370 / 3 ≈ 123.3. The seasonal index for Q2 is then the actual Q2 value divided by the moving average: 150 / 123.3 ≈ 1.217. A seasonal index above 1 indicates a peak relative to the trend; below 1 indicates a trough.

The decomposition model is

```
  Y_t = T_t + S_t + C_t + R_t
```

where T is trend, S is seasonal, C is cyclic and R is random. For short school-level questions, the cyclic component is usually treated as part of the random component.

#### Worked example — interpreting r²

A regression of exam score on study hours produces r = 0.7. Then r² = 0.49, meaning about 49% of the variance in exam score is explained by the linear relationship with study hours. The remaining 51% is due to other factors or random variation.

A common mistake is to claim that r = 0.7 means "70% of the data is explained" — it does not. The percentage explained is r², not r.

#### Common marking-scheme mistakes

- Reporting a probability of exactly 0 for a normal random variable taking a specific value. For continuous distributions, P(X = k) = 0; only intervals have non-zero probability.
- Treating r as the percentage of variance explained. It is r² that does that work.
- Confusing the sample mean SD σ/√n with the population SD σ. The confidence-interval margin of error uses σ/√n.
- Reporting a p-value as the probability that H₀ is true. The p-value is the probability of the data (or more extreme) given H₀.
- Mixing up one-tailed and two-tailed tests. The critical value changes from 1.645 (one-tailed, α = 0.05) to 1.96 (two-tailed, α = 0.05).
- Computing moving-average smoothing without enough data points on each side of the centre, which biases the average.
- Calling any trend in a sample "significant" without performing an inference test.

#### 20-minute recap before you walk in

- Standardise to z = (X − μ) / σ before reading a normal table. Memorise the symmetry property P(Z > 0) = 0.5.
- Memorise 1.96 for 95% confidence and 2.576 for 99%. These two numbers cover most CI questions.
- r² is the proportion of variance explained. r is not.
- Time-series decomposition: trend, seasonal, cyclic, random. Cyclic is often lumped in with random at school level.
- Always state H₀ and H₁ before computing a test statistic, and use the test's critical value from a table.

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA General Mathematics syllabus in the Statistics and Probability domain also lists the following sub-topics, which are touched on above but deserve separate revision:

- Backward calculation from a probability or percentile to a raw score using the inverse normal.
- Seasonal indices by the ratio-to-moving-average method, including deseasonalising a series.
- Type I and Type II errors and the concept of statistical power.
- The chi-squared goodness-of-fit test as well as the test for independence.
- Sampling methods: simple random, systematic, stratified and cluster.

Confirm the live sub-topic list on the QCAA General Mathematics syllabus page before planning revision around these.

---

*Last updated 2026-09-20. Source: QCE General Mathematics General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/general-mathematics. Awarding body: Queensland Curriculum and Assessment Authority (QCAA).*