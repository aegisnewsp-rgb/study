---
exam: sace-mathematical-methods
examName: SACE Stage 2 Mathematical Methods & Specialist Mathematics
subject: sace-mathematical-methods
subjectName: Mathematical Methods
topic: sacemeth-006
topicName: Sampling and Confidence Intervals
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Topic 6: Sampling and Confidence Intervals — SACE Stage 2 Mathematical Methods Notes

Topic 6 of SACE Stage 2 Mathematical Methods covers sampling distributions, the central limit theorem, confidence intervals for means and proportions, and the language of statistical inference. Sixth Topic and the third Topic of the statistics strand.

> Re-check the live Subject Outline on https://www.sace.sa.edu.au/en_US/web/mathematical-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Sampling distributions.** x̄ has mean μ and SD σ/√n.
- **Confidence intervals.** 95% CI: x̄ ± 1.96 × σ/√n.
- **Central limit theorem.** x̄ is approximately normal for large n.

#### Examiner traps

- Mixing up σ and σ/√n.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Sampling distributions

For simple random sample of size n, sample mean x̄ has mean μ and SD σ/√n.

#### Confidence intervals

95% CI for μ: x̄ ± 1.96 × σ/√n. 99% CI: x̄ ± 2.576 × σ/√n.

For proportion: p̂ ± 1.96 × √(p̂(1 − p̂)/n).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 6 is the summative statistics topic

- Statistical inference is heavily tested in the external assessment.

#### Year 12 planning pattern

- Term 1: Sampling distributions.
- Term 2: Confidence intervals.

#### Common misconceptions (and the correction)

- "Sample SD = population SD." The sample mean has SD σ/√n.

---

### Specification reference

This Topic is the sixth Topic of the SACE Stage 2 Mathematical Methods Subject Outline. Confirm the live Subject Outline on sace.sa.edu.au.

#### Worked example — confidence interval for a population proportion

In a survey of n = 500 South Australian secondary students, 340 report that they study for competitive examinations using digital planners.
1. Calculate the point estimate for the population proportion p̂.
2. Calculate the 95% confidence interval for the true population proportion p.
3. Interpret the calculated confidence interval in the context of the study.
4. Calculate the sample size needed to reduce the margin of error to at most 0.02 (2.0%) at the 95% confidence level.

Part 1: Point estimate p̂

```
  p̂ = 340 / 500 = 0.68
```

Part 2: 95% confidence interval
For 95% confidence, z* = 1.96.
Calculate the standard error SE:

```
  SE = √[ p̂(1 − p̂) / n ]
     = √[ (0.68)(0.32) / 500 ]
     = √[ 0.2176 / 500 ]
     = √[ 0.0004352 ]
     ≈ 0.020861
```

Calculate margin of error E:

```
  E = z* × SE
    = 1.96 × 0.020861
    ≈ 0.04089
```

Form confidence interval:

```
  Lower bound = 0.68 − 0.04089 = 0.6391 (or 63.91%)
  Upper bound = 0.68 + 0.04089 = 0.7209 (or 72.09%)
```

The 95% confidence interval is [0.6391, 0.7209].

Part 3: Contextual interpretation
We are 95% confident that the true proportion of all South Australian secondary students who use digital planners lies between 63.9% and 72.1%.

Part 4: Sample size determination for E ≤ 0.02
Using the estimated proportion p̂ = 0.68:

```
  E = z* √[ p̂(1 − p̂) / n ]
  0.02 = 1.96 √[ (0.68)(0.32) / n ]
  (0.02 / 1.96)² = 0.2176 / n
  (0.010204)² = 0.2176 / n
  0.00010412 = 0.2176 / n
  n = 0.2176 / 0.00010412
  n ≈ 2089.8
```

Always round up to the next whole integer: n = 2,090 students.

#### Worked example — sampling distribution of the sample mean

A large university knows that the scores of students on a common mathematics placement test have mean μ = 68.0 marks and standard deviation σ = 12.0 marks.
A random sample of n = 36 students is selected.
1. State the distribution of the sample mean x̄.
2. Find the probability that the sample mean exceeds 71.0 marks.

Part 1: Distribution of x̄
By the Central Limit Theorem:
- Mean of sampling distribution: μ_{x̄} = μ = 68.0
- Standard error of sampling distribution: σ_{x̄} = σ / √n = 12.0 / √36 = 12.0 / 6 = 2.0 marks.

Therefore, x̄ ~ N(68.0, 2.0²).

Part 2: P(x̄ > 71.0)
Standardise:

```
  z = (x̄ − μ_{x̄}) / σ_{x̄}
    = (71.0 − 68.0) / 2.0
    = 3.0 / 2.0
    = 1.50
```

From standard normal distribution:
P(Z > 1.50) = 1 − P(Z < 1.50) = 1 − 0.9332 = 0.0668.
The probability that the sample mean score exceeds 71.0 marks is 0.0668 (or 6.68%).

#### Common marking-scheme mistakes

- Rounding down sample size calculations; any fractional requirement must round UP to ensure the margin of error target is met.
- Confusing standard error of the mean σ/√n with standard error of the proportion √[p(1-p)/n].
- Misinterpreting confidence level as "95% of students in the population fall in this interval".
- Dividing by n instead of √n in standard error calculations.
- Using z* = 1.96 for a 90% confidence level (which requires z* = 1.645).

#### 20-minute recap before you walk in

- Point estimate for population proportion: p̂ = x / n.
- Confidence interval for proportion: p̂ ± z* √[ p̂(1 − p̂) / n ].
- Standard critical z-values: 90% is 1.645; 95% is 1.96; 99% is 2.576.
- Sample size formula for proportion: n = (z* / E)² p̂(1 − p̂).
- Central Limit Theorem: Sampling distribution of the mean x̄ approaches normal with mean μ and SE = σ/√n as n increases.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SACE Stage 2 Mathematical Methods Subject Outline also lists:

- Worst-case conservative sample size determination using p = 0.5 when no prior estimate of p̂ exists.
- The effect of confidence level and sample size on interval width.
- Random sampling methods and potential sources of bias (selection bias, non-response bias).
- Simulations of repeated sampling to demonstrate coverage rates.
- Bootstrapping methods for estimating confidence intervals from non-parametric samples.

Confirm the live Subject Outline on the SACE website before planning revision around these.

---

*Last updated 2026-09-24. Source: SACE Stage 2 Mathematical Methods Subject Outline, https://www.sace.sa.edu.au/en_US/web/mathematical-methods. Awarding body: SACE Board of South Australia.*