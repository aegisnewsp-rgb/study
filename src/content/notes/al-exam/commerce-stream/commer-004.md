---
exam: al-exam
examName: A/L Examination (Sri Lanka)
subject: commerce-stream
subjectName: "Commerce-Stream"
topic: commer-004
topicName: Business Statistics and Data Analysis
weight: 3
country: srilanka
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-18"
---

# Business Statistics and Data Analysis

### 🟢 Lite — Quick Review (1h–1d)
> One fact, one formula, one trap — everything a Commerce student needs when revising this chapter the night before the paper.

Business Statistics turns raw accounting and commercial numbers into decisions. Three families dominate the A/L paper: **central tendency, dispersion, and index numbers**. Memorise the grouped median formula — the median class is the one whose cumulative frequency first exceeds N/2, and L is the **lower class boundary**, not the lower limit.

| Quantity | Formula (key variables) | Unit |
|---|---|---|
| Arithmetic mean (grouped) | Σfᵢxᵢ / Σfᵢ, fᵢ = frequency, xᵢ = midpoint | same as x |
| Median (grouped) | L + [(N/2 − F)/f] × h | same as x |
| Standard deviation | s = √[Σfᵢ(xᵢ − x̄)²/(n−1)] | same as x |
| Laspeyres index | (Σp₁q₀ / Σp₀q₀) × 100 | unitless % |

- **Memory Hook:** "**L**aspeyres uses **L**ast (base) quantities" — Laspeyres locks the q₀ basket, Paasche uses the current q₁ basket.
- **Memory Hook:** "Mode = 3 Median − 2 Mean" works for moderate skew only; it fails badly when the distribution is bimodal.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Built for the two-week revision window — mechanisms, worked numbers, and the comparison matrix that catches 80% of careless mistakes.

#### Central tendency and when to use each

The arithmetic mean is the workhorse but it is **pulled by outliers**. Median is robust; geometric mean handles ratios and percentage changes (CAGR-style growth rates); harmonic mean suits averaging speeds or rates where the denominator carries the meaning. Use median or geometric mean for skewed commercial data such as salaries, sales growth or interest rates.

| Measure | Best for | Weakness |
|---|---|---|
| Arithmetic mean | Symmetric data, additive quantities | Distorted by extremes |
| Median | Skewed data, ordinal data | Ignores magnitude of values |
| Mode | Categorical data, "most popular" | May not exist or be unique |
| Geometric mean | Ratios, growth rates, index relatives | Zero or negative inputs break it |
| Harmonic mean | Rates with equal time/distance | Same fragility as geometric |

#### Dispersion and relative comparison

Range is quick but crude; mean deviation uses absolute deviations; standard deviation is squared deviations averaged — it has the same unit as x, so variance (s²) does not. The **coefficient of variation CV = (s/x̄)×100%** is dimensionless and lets a manager compare variability of, say, monthly revenue (rupees) against variability of unit sales (pieces).

> 📌 **Formula Check:** Pearson's coefficient of skewness = 3(Mean − Median)/s. A positive value means a right tail (mean > median > mode).

#### Index numbers — choose the right base

| Index | Weights used | Bias | Best use |
|---|---|---|---|
| Laspeyres | Base-year quantities q₀ | Tends to overstate inflation | Long retail price series |
| Paasche | Current-year quantities q₁ | Tends to understate inflation | GDP-style deflators |
| Fisher's Ideal | Geometric mean of L and P | No known bias | Most balanced academic choice |

Fisher's index satisfies the time-reversal and factor-reversal tests; Laspeyres fails the factor-reversal test because price × quantity does not equal value index.

#### A complete problem — solved end-to-end

A small shop records weekly sales (Rs. '000): 12, 15, 14, 18, 16, 20, 22 for seven consecutive weeks.

**Step 1 — mean.** Σx = 117, n = 7, so x̄ = 117/7 = **16.714** (Rs. '000).

**Step 2 — sample standard deviation.** Deviations: −4.714, −1.714, −2.714, 1.286, −0.714, 3.286, 5.286. Squared: 22.222, 2.939, 7.367, 1.653, 0.510, 10.796, 27.939. Σ(xᵢ − x̄)² = 73.426. s = √(73.426/6) = √12.238 = **3.498**.

**Step 3 — coefficient of variation.** CV = 3.498/16.714 × 100 = **20.93%**.

**Step 4 — Pearson's skewness.** Median of seven sorted values is the 4th item = 16. Sk = 3(16.714 − 16)/3.498 = 3(0.714)/3.498 = **0.612** — mild positive skew, consistent with the right tail driven by the Rs. 22 000 week.

> ⚠️ **Examiner Trap:** Students regularly divide by n = 7 instead of (n−1) = 6 when computing the sample standard deviation. With n = 7 the answer becomes √10.489 = 3.239, which is **wrong** for an A/L question that asks for the *sample* s. Read the verb — "estimate", "sample", "from the data" ⇒ (n−1); "population", "given σ" ⇒ n.

#### Correlation and regression in one breath

Pearson's r is **dimensionless** and bounded in [−1, 1]; regression slope b carries the units of y divided by the units of x. They share Σx, Σy, Σxy but r uses Σx² and Σy² symmetrically while b uses only x's sums in the denominator.

| Statistic | Range | Units | Tests |
|---|---|---|---|
| r | −1 ≤ r ≤ 1 | none | Linear association strength |
| b | any real | y per x | Expected change in y per unit x |
| ρ (Spearman) | −1 ≤ ρ ≤ 1 | none | Monotonic association on ranks |

#### Probability essentials

P(A∪B) = P(A) + P(B) − P(A∩B); P(A∩B) = P(A)·P(B|A). Bayes' theorem flips a conditional: P(Aᵢ|B) = P(B|Aᵢ)P(Aᵢ) / Σⱼ P(B|Aⱼ)P(Aⱼ). For a fair coin tossed thrice, P(exactly two heads) = C(3,2)(0.5)²(0.5)¹ = **0.375** — a routine A/L numerical.

> 💡 **High-Yield Revision Hook:** "**S**ample uses **n−1**; **P**opulation uses **n**." Two letters, one decision, four marks saved.

---

### 🔴 Extended — Deep Study (3mo+)
> Edge cases, derivations the textbook glosses over, and the boundary behaviour that distinguishes a confident A/B from a C.

#### Why (n−1) and not n — Bessel's correction in plain words

The sample mean x̄ sits closer to the data than the population mean μ does, so (xᵢ − x̄)² systematically understates (xᵢ − μ)². Dividing by (n−1) instead of n compensates; with n ≥ 30 the difference is negligible, but A/L questions on small samples (n ≤ 15) will mark you down for choosing n. The same logic applies to sample variance in the t-test: s = √[Σ(xᵢ − x̄)²/(n−1)] feeds the standard error s/√n.

#### Empirical rule only works for bell-shaped data

The 68-95-99.7 rule assumes an approximately normal distribution. Apply it to skewed revenue data and the answers look plausible but are wrong; always pair the rule with a histogram or a check on skewness. For non-normal data use Chebyshev's inequality — at least 1 − 1/k² of observations lie within k standard deviations of the mean, for **any** distribution.

#### Time series — when the moving average fails

A **centred** moving average of order m removes the trend-cycle component cleanly only when m equals the period of the seasonal swing. Sri Lankan quarterly retail data has period 4, so a 4-term centred MA works; monthly data with period 12 needs a 12-term two-stage MA (average of two 12-term moving averages) to land the average on a month. Skipping the two-stage step gives a misaligned seasonal index.

| Method | Requires | Output | A/L use |
|---|---|---|---|
| Simple moving average | Stationary data, no seasonality | Smoothed level | Short-term forecast |
| Least squares y = a + bx | Numerical x, numeric y | Linear trend | Trend extrapolation |
| Ratio-to-MA | Strong seasonality | Seasonal index | Quarterly/monthly indices |
| Multiplicative model | All four components | Y = T·S·C·I | Decomposition essays |

#### Hypothesis testing — picking the right tail

A two-tailed test of H₀: μ = μ₀ uses critical values ±z_{α/2}; a one-tailed test of H₀: μ ≤ μ₀ uses +z_α only. Mixing them inflates Type I error. Also, use **z when σ is known or n ≥ 30**; switch to the **t-distribution** with (n−1) degrees of freedom whenever σ is unknown and the sample is small.

#### Common advanced traps

1. Computing CV for data measured in the same units and claiming it "removes" units — CV is unitless but still depends on the mean, so two negative-mean series give counter-intuitive signs.
2. Applying Fisher's index to a quantity index and expecting it to satisfy the factor-reversal test — it only does so when both price and quantity indices are computed as Fisher's and multiplied.
3. Confusing σ/√n (standard error of the mean) with σ (standard deviation of individual observations).
4. Ranking tied observations with the average-rank rule in Spearman's ρ — failing to do so biases ρ toward zero.
5. Splicing two index series without reweighting at the link period, producing a discontinuity the examiner will mark.
6. Fitting y = a + bx by least squares but reporting the regression of x on y when the question asks for the regression line of y on x — the slopes are not reciprocals unless r = ±1.

#### Two advanced practice prompts

- A retailer records weekly sales for 26 weeks. Compute a 4-week centred moving average, extract the seasonal index for each quarter using the ratio-to-MA method, and forecast week 27.
- A factory claims mean bulb life = 1 000 hours. A sample of 16 bulbs gives x̄ = 980, s = 40 hours. Test H₀: μ = 1 000 against H₁: μ < 1 000 at α = 0.05 using the t-distribution. State the p-value interpretation in one sentence.

> 🔬 **Boundary Note:** The arithmetic mean of percentage changes is not the geometric mean. If quarterly growth rates are 5%, −3%, 8%, −2%, their arithmetic mean (2%) overstates the true compound rate (1.93%) — a subtle mis-statement that costs marks in trend and index essays.

## Continue your study

- **[View this topic in your A/L Examination (Sri Lanka) roadmap](/roadmap/?exam=al-exam&duration=1mo)** — see where "Business Statistics and Data Analysis" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=al-exam&duration=1d)** — 1-day sprint covering highest-weight topics
- **[A/L Examination (Sri Lanka) exam overview](/exams/al-exam/)** — pattern, eligibility, and syllabus
- **[All Commerce-Stream notes](/notes/al-exam/commerce-stream/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
