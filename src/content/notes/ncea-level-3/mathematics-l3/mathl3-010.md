---
exam: ncea-level-3
examName: NCEA Level 3 (Mathematics / Calculus)
subject: mathematics-l3
subjectName: Mathematics (Calculus)
topic: mathl3-010
topicName: "Use statistical methods to make a formal inference (91582)"
weight: 4
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Use statistical methods to make a formal inference (91582) — NCEA Level 3 Calculus Notes

Achievement Standard 91582 carries 4 credits and tests formal statistical inference: confidence intervals and hypothesis tests for population means and proportions; one-sample and two-sample tests; interpreting p-values. This is the Level 3 progression from the Level 2 informal inference in 91264.

> Verify the live achievement standard document on https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **4 credits**, internally assessed by the school, NZQA moderated.
- Topics: confidence intervals for means and proportions; one-sample t-test for mean; one-sample z-test for proportion; two-sample t-test for means; paired t-test; interpreting p-values and significance levels; Type I and Type II errors.
- **Merit** requires relational thinking — selecting the right test, interpreting the p-value in context.
- **Excellence** requires extended abstract thinking — justifying test choice, connecting test result to the original research question.

#### Examiner traps

- Using a t-test when the population is known (use a z-test).
- Confusing one-tailed and two-tailed tests.
- Misinterpreting p-values (p is the probability of the data given the null, not the probability that the null is true).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Hypothesis testing framework

1. **Null hypothesis H₀:** the default claim (e.g., the population mean is equal to some value).
2. **Alternative hypothesis H₁:** what we want to test for (e.g., the population mean is different from, greater than, or less than the null value).
3. **Test statistic:** a number calculated from the sample data.
4. **P-value:** the probability of observing a test statistic as extreme as ours, assuming H₀ is true.
5. **Decision:** if p < significance level α (typically 0.05), reject H₀; otherwise, fail to reject H₀.
6. **Conclusion in context:** state the conclusion in terms of the original research question.

#### One-sample t-test for a mean

Test H₀: μ = μ₀ vs H₁: μ ≠ μ₀ (or < or >).

Test statistic: t = (x̄ − μ₀) / (s / √n)

where x̄ is the sample mean, s is the sample standard deviation, n is the sample size, and μ₀ is the hypothesised population mean.

Under H₀, t follows a t-distribution with n − 1 degrees of freedom. Use a t-table or calculator to find the p-value.

Conditions:

- The data is approximately normally distributed (or n is large, by the Central Limit Theorem).
- The observations are independent.

#### Two-sample t-test for means

Test H₀: μ₁ = μ₂ vs H₁: μ₁ ≠ μ₂ (or < or >).

Test statistic:

t = (x̄₁ − x̄₂) / √(s₁²/n₁ + s₂²/n₂)

(assuming unequal variances, Welch's t-test).

Degrees of freedom: complex formula; calculators compute it.

Conditions:

- Both samples are approximately normally distributed.
- The observations within each sample are independent.
- The two samples are independent of each other.

#### Paired t-test

Use when the data is paired (e.g., before-and-after measurements on the same individuals).

Calculate the differences d_i for each pair. Test H₀: μ_d = 0 using a one-sample t-test on the differences.

#### Confidence intervals

A confidence interval gives a range of plausible values for the population parameter.

For a population mean (with unknown σ):

x̄ ± t* × (s / √n)

where t* is the critical value from the t-distribution at the desired confidence level (e.g., t* = 2.045 for 95% confidence with n − 1 = 20 df).

Interpretation: "We are 95% confident that the population mean is between LL and UL." (Note: this is the frequentist interpretation; the interval is one of many that could have been calculated from random samples, and 95% of them contain the true parameter.)

#### P-value interpretation

The p-value is the probability, assuming H₀ is true, of observing a test statistic as extreme as the one observed (or more extreme).

- p < 0.01: very strong evidence against H₀.
- 0.01 ≤ p < 0.05: strong evidence against H₀.
- 0.05 ≤ p < 0.10: weak evidence against H₀.
- p ≥ 0.10: no strong evidence against H₀.

The p-value is NOT the probability that H₀ is true. To get that, you need a Bayesian approach.

#### Type I and Type II errors

- **Type I error:** rejecting H₀ when it is true. Probability = α (the significance level).
- **Type II error:** failing to reject H₀ when it is false. Probability = β.
- **Power:** 1 − β = the probability of correctly rejecting H₀ when it is false.

Increasing the sample size increases the power.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Choosing between one-sample, two-sample, and paired

- **One sample:** compare the sample mean to a hypothesised value.
- **Two independent samples:** compare two separate groups (e.g., treatment vs control).
- **Paired samples:** compare two measurements on the same individual (e.g., before and after).

The choice affects the calculation and the conditions.

#### One-tailed vs two-tailed tests

- **Two-tailed test** (H₁: μ ≠ μ₀): more conservative; used when the direction of the effect is not specified.
- **One-tailed test** (H₁: μ > μ₀ or μ < μ₀): more powerful for detecting an effect in a specific direction; used when the direction is specified in advance.

For Excellence, justify the choice of one-tailed vs two-tailed based on the research question.

#### Sample size and power

For a given effect size and significance level, the required sample size depends on the desired power. Common targets: 80% power (β = 0.20) and 95% confidence (α = 0.05).

For Excellence, briefly discuss whether the sample size was adequate to detect a meaningful effect.

#### Common misconceptions (and the correction)

- "Fail to reject H₀ means H₀ is true." No — it means there is not enough evidence to reject H₀.
- "p-value is the probability that H₀ is true." No — it is the probability of the data given H₀.
- "Statistical significance means practical significance." No — a small effect can be statistically significant with a large sample.
- "We can prove H₀ is true." No — we can only fail to reject it.

#### Specification reference

This achievement standard is internally assessed by the school. NZQA publishes the achievement standard document, clarifications, and exemplars on ncea.education.govt.nz. Re-check the live version of 91582 before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 3 Mathematics achievement standards, https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics. Awarding body: NZQA.*
