---
exam: qce-general-mathematics
examName: QCE General Mathematics & Specialist Mathematics (QCAA 2025)
subject: qce-general-mathematics
subjectName: General Mathematics
topic: qcegen-004
topicName: Interest and Depreciation, Statistics and Inference
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-20
---

# Unit 4: Interest and Depreciation, Statistics and Inference — QCE General Mathematics (QCAA 2025) Notes

Unit 4 of QCE General Mathematics covers compound interest, depreciation and amortisation; statistical inference, confidence intervals and hypothesis testing; the chi-squared test; time series and forecasting. Unit 4 is the summative Unit and is externally assessed.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/general-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Compound interest.** A = P(1 + r)^n. Effective annual rate = (1 + r/n)^n − 1.
- **Depreciation.** Straight-line: A_n = P − nd. Reducing balance: A_n = P(1 − r)^n.
- **Statistical inference.** Sample mean, confidence interval x̄ ± z × σ/√n.
- **Hypothesis testing.** State H₀ and H₁, choose α, compute test statistic, make decision.
- **Chi-squared test.** Test for independence of categorical variables.

#### Examiner traps

- Confusing simple and compound interest.
- Mixing up sample mean SD σ/√n with population SD σ.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Compound interest

A = P(1 + r)^n where P = principal, r = rate per period, n = number of periods.

Compounding m times per year: A = P(1 + r/m)^(mt). Effective annual rate EAR = (1 + r/m)^m − 1.

#### Depreciation

Straight-line: A_n = P − nd. Reducing balance: A_n = P(1 − r)^n.

#### Statistical inference

For a simple random sample of size n from a population with mean μ and SD σ, the sample mean x̄ is normally distributed with mean μ and SD σ/√n (Central Limit Theorem).

95% confidence interval: x̄ ± 1.96 × σ/√n. 99% CI: x̄ ± 2.576 × σ/√n.

#### Hypothesis testing

Steps:
1. State H₀ and H₁.
2. Choose α (typically 0.05).
3. Compute test statistic z = (x̄ − μ₀)/(σ/√n).
4. For two-tailed, reject H₀ if |z| > 1.96.

#### Chi-squared test

For independence: χ² = Σ (O − E)² / E. Compare with critical value at α and df = (rows − 1)(cols − 1).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Unit 4 is the summative Unit

- **Unit 4 is externally assessed** by the QCAA. The summative examination tests the entire four-Unit course but Unit 4 content is the most heavily weighted.

#### Exam technique

- For compound interest, identify the formula and substitute.
- For depreciation, identify whether straight-line or reducing balance is required.
- For confidence intervals, identify the multiplier.

#### Common misconceptions (and the correction)

- "EAR equals the nominal rate." Only when compounding is annual.
- "Sample mean SD equals population SD." The sample mean has SD σ/√n, not σ.

#### Specification reference

This Unit is the summative Unit of QCE General Mathematics and is externally assessed. Confirm the live syllabus and any in-year updates on qcaa.qld.edu.au.

#### Worked example — compound interest with monthly compounding

$10,000 is invested at 6% per year, compounded monthly, for 5 years.

```
  P = 10000,  r = 0.06,  m = 12,  t = 5

  A = P × (1 + r/m)^(m t)
    = 10000 × (1 + 0.06 / 12)^(12 × 5)
    = 10000 × (1.005)^60
    = 10000 × 1.34885
    ≈ $13,488.50
```

Effective annual rate:

```
  EAR = (1 + r/m)^m − 1
      = (1.005)^12 − 1
      = 1.06168 − 1
      = 0.06168
      ≈ 6.168%
```

So 6% compounded monthly yields slightly more than 6% simple interest.

#### Worked example — reducing-balance depreciation

A $50,000 car is depreciated at 18% per year on a reducing-balance basis.

```
  A_n = P × (1 − r)^n

  After 1 year: A_1 = 50000 × 0.82     = $41,000
  After 2 years: A_2 = 50000 × 0.82²    = $33,620
  After 3 years: A_3 = 50000 × 0.82³    = $27,568.40
  After 5 years: A_5 = 50000 × 0.82⁵    = $18,559.86
```

Contrast with straight-line at 18%:

```
  A_n = P − n d,   d = 0.18 × 50000 = 9000

  After 5 years: A_5 = 50000 − 5 × 9000 = $5,000
```

Reducing balance keeps the asset at a non-zero book value longer; straight-line hits zero sooner.

#### Worked example — confidence interval for a mean

A sample of n = 64 measurements has x̄ = 23.4 and population σ = 4. A 95% confidence interval for the population mean is

```
  Margin of error = z × σ / √n
                  = 1.96 × 4 / √64
                  = 1.96 × 4 / 8
                  = 0.98

  CI₉₅ = 23.4 ± 0.98
       = (22.42, 24.38)
```

Interpretation: if the sampling procedure were repeated many times, about 95% of the resulting intervals would contain the true population mean. This does not mean there is a 95% probability that the specific interval (22.42, 24.38) contains the mean — the mean is fixed.

#### Worked example — one-sample z-test

A machine fills bottles labelled 500 mL. A sample of n = 40 bottles has x̄ = 498.7 mL and σ = 2.5 mL. Test, at α = 0.05, whether the machine is underfilling.

```
  H₀: μ = 500
  H₁: μ < 500

  Test statistic:
    z = (x̄ − μ₀) / (σ / √n)
      = (498.7 − 500) / (2.5 / √40)
      = −1.3 / 0.3953
      ≈ −3.289

  Critical value for a left-tailed test at α = 0.05: z = −1.645.

Since −3.289 < −1.645, reject H₀. There is sufficient evidence at the 5% level to conclude that the machine is underfilling.
```

#### Worked example — chi-squared test for independence

A survey of 200 customers records whether they bought product A or B, and whether they saw an advertisement. The observed counts are:

```
                  Saw ad   Did not see   Total
  Bought A            50        30          80
  Bought B            70        50         120
  Total              120        80         200
```

Expected counts (row total × column total / grand total):

```
  E(A, saw)     = 80 × 120 / 200 = 48
  E(A, no)      = 80 ×  80 / 200 = 32
  E(B, saw)     = 120 × 120 / 200 = 72
  E(B, no)      = 120 ×  80 / 200 = 48
```

Chi-squared statistic:

```
  χ² = Σ (O − E)² / E

      = (50 − 48)² / 48 + (30 − 32)² / 32
      + (70 − 72)² / 72 + (50 − 48)² / 48

      = 4 / 48 + 4 / 32 + 4 / 72 + 4 / 48

      = 0.0833 + 0.1250 + 0.0556 + 0.0833

      ≈ 0.347
```

Degrees of freedom: df = (2 − 1) × (2 − 1) = 1. Critical value at α = 0.05 is 3.841. Since 0.347 < 3.841, do not reject H₀ of independence. Buying choice and ad exposure appear independent in this sample.

#### Common marking-scheme mistakes

- Using the wrong multiplier for a 99% confidence interval (1.96 is for 95%, not 99%).
- Reporting a confidence interval in probability language ("there is a 95% chance the mean is in this interval") — the mean is fixed; the procedure is what has 95% coverage.
- Confusing straight-line depreciation formula (A_n = P − nd) with reducing-balance formula (A_n = P(1 − r)^n) and using the wrong one for the data given.
- Forgetting to convert the rate to a decimal (6% is 0.06, not 6) before substituting into compound interest.
- Using σ in place of σ/√n in a confidence-interval margin of error.
- Computing (O − E) instead of (O − E)² / E in the chi-squared statistic. The square is required.
- Treating a one-tailed hypothesis test as two-tailed. The critical value changes from 1.96 to 1.645.

#### 20-minute recap before you walk in

- Three finance formulas on one line each: A = P(1 + r)^n, straight-line A_n = P − nd, reducing-balance A_n = P(1 − r)^n.
- Confidence interval: x̄ ± z × σ/√n. The right z is 1.96 for 95%, 2.576 for 99%.
- Hypothesis test: H₀ then H₁, then α, then z, then decision. Never skip a step.
- Chi-squared: Σ (O − E)² / E with df = (rows − 1)(cols − 1).
- Distinguish sample SD (divides by n − 1) from sample-mean SD (σ/√n).

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA General Mathematics syllabus for Unit 4 also lists the following sub-topics, which are touched on above but deserve separate revision:

- Annuities and amortisation, including monthly repayments on a loan.
- Future value of an annuity versus present value of an annuity.
- Time-series components: trend, seasonal, cyclical and random.
- Moving-average smoothing for time-series forecasting.
- Type I and Type II errors in hypothesis testing, and the power of a test.

Confirm the live sub-topic list on the QCAA General Mathematics syllabus page before planning revision around these.

---

*Last updated 2026-09-20. Source: QCE General Mathematics General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/general-mathematics. Awarding body: Queensland Curriculum and Assessment Authority (QCAA). Live syllabus and any in-year updates must be re-checked on the official page before committing a revision plan to a student.*