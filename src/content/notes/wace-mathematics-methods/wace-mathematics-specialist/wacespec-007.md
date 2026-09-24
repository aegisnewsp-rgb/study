---
exam: wace-mathematics-methods
examName: WACE Mathematics Methods & Mathematics Specialist (SCSA)
subject: wace-mathematics-specialist
subjectName: Mathematics Specialist
topic: wacespec-007
topicName: Statistical Inference and Hypothesis Testing
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 4 Topic 3: Statistical Inference and Hypothesis Testing — WACE Mathematics Specialist (SCSA) Notes

Unit 4 Topic 3 of WACE Mathematics Specialist covers sampling distributions, the central limit theorem, confidence intervals for means and proportions, hypothesis testing for means and proportions and the chi-squared test. Third Topic of Unit 4 and assessed in the ATAR Year 12 examination.

> Re-check the live specification details on https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-specialist before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Sampling distributions.** x̄ has mean μ and SD σ/√n.
- **Confidence intervals.** 95% CI: x̄ ± 1.96 × σ/√n.
- **Hypothesis testing.** State H₀, choose α, compute z, decide.
- **Chi-squared.** χ² = Σ (O − E)² / E.

#### Examiner traps

- Mixing up σ and σ/√n.
- Forgetting to state H₀ in context.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Sampling distributions

For simple random sample of size n, sample mean x̄ has mean μ and SD σ/√n. By CLT, x̄ is approximately normal for large n.

#### Confidence intervals

95% CI for μ: x̄ ± 1.96 × σ/√n. For proportion: p̂ ± 1.96 × √(p̂(1 − p̂)/n).

#### Hypothesis testing

State H₀ and H₁. Choose α (typically 0.05). Compute z = (x̄ − μ₀)/(σ/√n). For two-tailed, reject H₀ if |z| > 1.96.

#### Chi-squared test

χ² = Σ (O − E)² / E. Degrees of freedom df = (rows − 1)(cols − 1).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 3 of Unit 4 is heavily tested

- Statistical inference is a major Specialist topic.

#### Year 12 planning pattern

- Term 1: Confidence intervals.
- Term 2: Hypothesis testing.
- Term 3: Chi-squared.

#### Common misconceptions (and the correction)

- "Failing to reject H₀ proves H₀." No — it just means insufficient evidence.
- "Higher confidence = narrower interval." Higher = wider.

---

### Specification reference

This Topic is the third Topic of Unit 4 in the WACE Mathematics Specialist ATAR Year 12 syllabus. Confirm the live examination design brief on senior-secondary.scsa.wa.edu.au.

#### Worked example — hypothesis test for a population mean (two-tailed test)

A mining company in the Goldfields claims that its automated sampling drill operates with a mean cycle time of μ = 45.0 seconds.
An independent auditor samples n = 49 drilling cycles and finds a sample mean of x̄ = 46.4 seconds with a sample standard deviation of s = 3.5 seconds.
Perform a two-tailed hypothesis test at the α = 0.05 level of significance to test whether the mean cycle time differs from 45.0 seconds.

Step 1: State hypotheses

```
  H₀: μ = 45.0 seconds (drill operates at claimed mean)
  H₁: μ ≠ 45.0 seconds (mean cycle time differs from claim)
```

Step 2: Determine distribution and test statistic
Since sample size n = 49 ≥ 30, by the Central Limit Theorem the sample mean is approximately normally distributed.
Standard error:

```
  SE = s / √n = 3.5 / √49 = 3.5 / 7 = 0.50 seconds
```

Calculate test statistic z:

```
  z = (x̄ − μ₀) / SE
    = (46.4 − 45.0) / 0.50
    = 1.4 / 0.50
    = 2.80
```

Step 3: Establish critical values and rejection rule
For a two-tailed test at α = 0.05, the critical values are z_crit = ±1.96.
Rejection rule: Reject H₀ if |z| > 1.96.

Step 4: Decision and p-value calculation
Since z = 2.80 > 1.96, the test statistic falls in the critical rejection region.
Compute p-value:

```
  p-value = 2 × P(Z > 2.80)
          = 2 × (1 − P(Z < 2.80))
          = 2 × (1 − 0.9974)
          = 2 × 0.0026
          = 0.0052
```

Since p-value = 0.0052 < 0.05:
- Decision: Reject the null hypothesis H₀ at the 5% significance level.
- Conclusion: There is statistically significant evidence that the true mean drill cycle time differs from 45.0 seconds (specifically, it is significantly slower).

#### Worked example — small sample hypothesis test using Student's t-distribution

A laboratory measures the tensile strength of n = 16 composite polymer specimens.
The sample yields x̄ = 128.5 MPa and s = 4.0 MPa.
Test the hypothesis that the population mean tensile strength exceeds 125.0 MPa at the α = 0.01 level of significance, assuming the population is normally distributed.

Step 1: State hypotheses

```
  H₀: μ = 125.0 MPa
  H₁: μ > 125.0 MPa  (one-tailed test)
```

Step 2: Calculate test statistic t
Degrees of freedom df = n − 1 = 16 − 1 = 15.
Standard error:

```
  SE = s / √n = 4.0 / √16 = 4.0 / 4 = 1.0 MPa
```

Calculate t-statistic:

```
  t = (x̄ − μ₀) / SE
    = (128.5 − 125.0) / 1.0
    = 3.50
```

Step 3: Determine critical value
For a one-tailed test with df = 15 at α = 0.01:
From the Student's t-distribution table, t_crit = 2.602.
Rejection rule: Reject H₀ if t > 2.602.

Step 4: Decision and conclusion
Since t = 3.50 > 2.602, the test statistic exceeds the critical value.
- Decision: Reject H₀ at the 1% significance level.
- Conclusion: There is strong evidence that the true mean tensile strength exceeds 125.0 MPa.

#### Common marking-scheme mistakes

- Using the normal distribution instead of Student's t-distribution for small samples (n < 30) with unknown population variance.
- Confusing one-tailed and two-tailed critical values (e.g. using z = 1.96 for a one-tailed test with α = 0.05).
- Writing hypotheses in terms of the sample mean (writing H₀: x̄ = 45 instead of H₀: μ = 45). Hypotheses are always statements about population parameters.
- Failing to state degrees of freedom df = n − 1 when conducting a t-test.
- Confusing Type I error (rejecting true H₀) with Type II error (failing to reject false H₀).

#### 20-minute recap before you walk in

- Hypotheses refer to population parameters: H₀: μ = μ₀; H₁: μ ≠ μ₀ (two-tailed) or μ > μ₀ / μ < μ₀ (one-tailed).
- Large sample (n ≥ 30): use z = (x̄ − μ) / (s / √n). Critical z for α = 0.05: two-tailed is ±1.96; one-tailed is 1.645.
- Small sample (n < 30) from normal population: use t = (x̄ − μ) / (s / √n) with df = n − 1.
- Reject H₀ if |test statistic| > critical value or p-value < α.
- Type I error probability = significance level α; Type II error probability = β. Power = 1 − β.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SCSA Mathematics Specialist Year 12 Unit 4 syllabus also lists:

- Two-sample independent t-tests for comparing two population means.
- Paired t-tests for matched pairs and before-and-after experimental designs.
- Effect of sample size on statistical power and Type II error probability.
- Confidence intervals for the difference between two population means (μ₁ − μ₂).
- Chi-square goodness-of-fit test for categorical probability distributions.

Confirm the live syllabus on the SCSA website before planning revision around these.

---

*Last updated 2026-09-24. Source: WACE Mathematics Specialist ATAR Year 12 syllabus, https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-specialist. Awarding body: School Curriculum and Standards Authority (SCSA).*