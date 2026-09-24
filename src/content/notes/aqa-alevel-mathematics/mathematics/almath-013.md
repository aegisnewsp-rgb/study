---
exam: aqa-alevel-mathematics
examName: A-Level Mathematics (AQA 7357)
subject: mathematics
subjectName: Mathematics
topic: almath-013
topicName: Statistical Distributions and Hypothesis Testing
weight: 4
country: uk
generated: "2026-09-22T10:00:00"
lastUpdated: "2026-09-22"
---

# Statistical Distributions and Hypothesis Testing — A-Level Mathematics (AQA 7357) Notes

Statistical Distributions and Hypothesis Testing is sections N and O of the AQA 7357 specification, covering the binomial and normal distributions, the normal approximation to the binomial, and setting up, carrying out and interpreting a hypothesis test against a stated significance level. These two sections sit together because they share the same logical structure: model a random variable with a named distribution, compute a probability, and compare to an observation. Hypothesis testing is the formal version of this comparison. The section also feeds forward to A-level Further Mathematics (where continuous distributions beyond the normal appear) and is the most-examined content on Paper 3.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Binomial distribution

X ~ B(n, p) if X is the number of successes in n independent trials, each with success probability p. Mean np, variance np(1 − p), standard deviation √(np(1 − p)).

P(X = k) = C(n, k) · p^k · (1 − p)^(n−k).

Use the binomial when: fixed number of trials, two outcomes per trial, constant probability, independent trials.

#### Normal distribution

X ~ N(μ, σ²) is a continuous distribution with mean μ, variance σ², standard deviation σ. The distribution is symmetric, bell-shaped, with about 68% within 1σ, 95% within 2σ, 99.7% within 3σ.

Standardise with Z = (X − μ)/σ. Z ~ N(0, 1). Use the standard normal table for probabilities.

#### Hypothesis test structure

1. State H₀ (null hypothesis) and H₁ (alternative).
2. State the significance level (typically 5%).
3. Calculate the test statistic from the data.
4. Compare to the critical value (or compute the p-value).
5. Make a decision: reject H₀ if the test statistic is in the critical region; otherwise do not reject.
6. Interpret in context.

#### Significance level

A 5% significance level means: if H₀ is true, there is a 5% chance of rejecting H₀ by random chance alone. Choosing the level is a balance between Type I (false positive) and Type II (false negative) errors.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### The binomial distribution in detail

X ~ B(n, p) has probability mass function:

P(X = k) = C(n, k) · p^k · (1 − p)^(n−k) for k = 0, 1, …, n.

C(n, k) is the number of ways to choose k items from n:

C(n, k) = n! / (k! (n − k)!).

**Worked example.** A biased coin lands heads with probability 0.4. It is flipped 5 times. Find P(exactly 2 heads).

P(X = 2) = C(5, 2) · 0.4² · 0.6³ = 10 · 0.16 · 0.216 = 0.3456.

**Worked example — cumulative probability.** P(X ≤ 2) = P(X = 0) + P(X = 1) + P(X = 2).

P(X = 0) = 0.6⁵ = 0.07776.
P(X = 1) = 5 · 0.4 · 0.6⁴ = 5 · 0.4 · 0.1296 = 0.2592.
P(X = 2) = 10 · 0.4² · 0.6³ = 10 · 0.16 · 0.216 = 0.3456.
P(X ≤ 2) = 0.07776 + 0.2592 + 0.3456 = 0.68256.

Mean = np = 5 · 0.4 = 2. Variance = np(1 − p) = 5 · 0.4 · 0.6 = 1.2.

#### The normal distribution in detail

X ~ N(μ, σ²) has probability density function:

f(x) = (1 / (σ√(2π))) · exp(−(x − μ)² / (2σ²)).

The total area under the curve is 1, and the area between any two x-values gives the probability of X being in that interval.

To find P(a < X < b):

1. Standardise: Z = (X − μ)/σ.
2. Find P((a − μ)/σ < Z < (b − μ)/σ) using the standard normal table.
3. The standard normal table gives Φ(z) = P(Z ≤ z). Use Φ(b) − Φ(a).

**Worked example.** X ~ N(100, 225). Find P(X > 130).

σ = 15. Standardise: Z = (130 − 100)/15 = 30/15 = 2. P(Z > 2) = 1 − Φ(2) = 1 − 0.9772 = 0.0228.

**Worked example — finding a percentile.** X ~ N(50, 16). Find the value of x such that P(X < x) = 0.95.

From tables, Φ(1.645) = 0.95. So (x − 50)/4 = 1.645 → x = 50 + 4 · 1.645 = 56.58.

#### The normal approximation to the binomial

When n is large and p is not too close to 0 or 1, X ~ B(n, p) is approximately N(np, np(1 − p)). The rule of thumb: np ≥ 5 and n(1 − p) ≥ 5.

Use a continuity correction when approximating: P(X = k) ≈ P(k − 0.5 < Y < k + 0.5) for Y ~ N(np, np(1 − p)).

**Worked example.** X ~ B(50, 0.4). Approximate P(X = 20).

np = 20, np(1 − p) = 12, σ = √12 ≈ 3.464. Standardise: P(X = 20) ≈ P(19.5 < Y < 20.5) = P((19.5 − 20)/3.464 < Z < (20.5 − 20)/3.464) = P(−0.144 < Z < 0.144) ≈ 0.115.

#### Hypothesis testing framework

A hypothesis test compares data to a model. Steps:

1. **State hypotheses.** H₀: the parameter equals the hypothesised value. H₁: the parameter is greater than, less than, or not equal to it.
2. **State significance level.** Usually 5%.
3. **Calculate test statistic.** The appropriate statistic depends on the model: sample mean (normal), sample proportion (binomial approximation), or count of successes (binomial exact).
4. **Find critical region.** For a one-tailed test at 5%, the critical region is the 5% most extreme values of the test statistic in the direction of H₁.
5. **Compare.** If the test statistic is in the critical region, reject H₀.
6. **Interpret.** "There is sufficient evidence at the 5% level to reject H₀ in favour of H₁", or "There is insufficient evidence".

**Worked example — one-tailed test.** A coin is claimed to be fair (p = 0.5). It is flipped 20 times and lands heads 15 times. Test at the 5% level whether the coin is biased towards heads.

H₀: p = 0.5. H₁: p > 0.5.

Under H₀, X ~ B(20, 0.5). Critical region (5% level, one-tailed): values of X with P(X ≥ k) ≤ 0.05.

For X ~ B(20, 0.5), P(X ≥ 14) = 0.0577. P(X ≥ 15) = 0.0207. So critical region is X ≥ 15.

Observed X = 15 is in the critical region. Reject H₀. Conclude there is sufficient evidence at the 5% level that the coin is biased towards heads.

**Worked example — two-tailed test.** A machine fills bags with mean weight 500 g. The standard deviation is known to be 5 g. A sample of 10 bags has mean 497 g. Test at the 5% level whether the mean has changed.

H₀: μ = 500. H₁: μ ≠ 500.

Test statistic: X̄ ~ N(500, 25/10) = N(500, 2.5), σ_X̄ = √2.5 ≈ 1.581.

Critical values for a two-tailed test at 5%: z = ±1.96. So critical region is X̄ < 500 − 1.96 · 1.581 or X̄ > 500 + 1.96 · 1.581, i.e. X̄ < 496.9 or X̄ > 503.1.

Observed X̄ = 497 is in (496.9, 503.1). Do not reject H₀. Conclude there is insufficient evidence at the 5% level that the mean weight has changed.

#### Errors in hypothesis testing

- **Type I error**: rejecting H₀ when H₀ is true. Probability = significance level α.
- **Type II error**: failing to reject H₀ when H₀ is false. Probability = β.

Lowering α (the significance level) reduces Type I but increases Type II. The only way to reduce both is to increase the sample size.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why hypothesis testing is the formal version of modelling

Every hypothesis test answers one question: "Is the data consistent with the model H₀, or is the deviation large enough to be unlikely under H₀?" The threshold for "unlikely" is the significance level; the choice between one-tailed and two-tailed tests depends on whether H₁ is directional.

The habit to develop:

1. Identify the parameter (mean, proportion, count) and the appropriate distribution.
2. State H₀ and H₁ precisely.
3. Choose a significance level.
4. Calculate the test statistic and the critical region under H₀.
5. Compare and decide.
6. Always phrase the conclusion in context, not just "reject H₀".

#### Worked pattern — binomial hypothesis test with critical region

A factory claims 10% of products are defective. A quality inspector tests 30 products and finds 6 defective. Test at the 5% level whether the proportion defective is greater than 10%.

H₀: p = 0.1. H₁: p > 0.1.

Under H₀, X ~ B(30, 0.1). Critical region (one-tailed, 5%): find the smallest k such that P(X ≥ k) ≤ 0.05.

P(X = 0) = 0.9³⁰ ≈ 0.0424.
P(X = 1) = 30 · 0.1 · 0.9²⁹ ≈ 0.1413.
P(X = 2) ≈ 0.2277.
P(X = 3) ≈ 0.2361.
P(X ≥ 5) ≈ 0.1386.
P(X ≥ 6) ≈ 0.0801.
P(X ≥ 7) ≈ 0.0394.

So the critical region is X ≥ 7 (P(X ≥ 7) = 0.0394 ≤ 0.05).

Observed X = 6. Not in the critical region. Do not reject H₀. There is insufficient evidence at the 5% level that the proportion defective is greater than 10%.

#### Worked pattern — normal approximation hypothesis test

A treatment is claimed to reduce blood pressure by 10 mmHg on average, with standard deviation 5 mmHg. A sample of 40 patients shows a mean reduction of 8 mmHg. Test at the 1% level whether the claim is correct.

H₀: μ = 10. H₁: μ < 10.

Under H₀, X̄ ~ N(10, 25/40) = N(10, 0.625), σ_X̄ = √0.625 ≈ 0.791.

Critical value for a one-tailed test at 1%: z = −2.326. Critical region: X̄ < 10 − 2.326 · 0.791 ≈ 8.16.

Observed X̄ = 8. Not in the critical region. Do not reject H₀. There is insufficient evidence at the 1% level that the mean reduction is less than 10 mmHg.

#### Common misconceptions (and the correction)

- "Rejecting H₀ means H₁ is true." It means the data is inconsistent with H₀, not that H₁ is correct. The test is about evidence, not proof.
- "Failing to reject H₀ means H₀ is true." It means the data is consistent with H₀, not that H₀ has been proved. With insufficient data, the test can fail to detect a true difference.
- "Lowering the significance level is always safer." It depends on the cost of Type I vs Type II errors. In medical testing, a false negative (missing a disease) may be worse than a false positive (unnecessary follow-up).
- "The p-value is the probability H₀ is true." No — the p-value is the probability of observing data at least as extreme as the observed data, given that H₀ is true.

#### Specification reference

Sections N and O of the AQA A-level Mathematics 7357 specification appear on Paper 3 and form the bulk of the statistics content. Confirm the live paper structure, formula booklet and any in-year specification changes on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-22. Source: AQA A-level Mathematics specification 7357, https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357. Paper structure, assessment weighting and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*