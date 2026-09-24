---
exam: wace-mathematics-methods
examName: WACE Mathematics Methods & Mathematics Specialist (SCSA)
subject: wace-mathematics-methods
subjectName: Mathematics Methods
topic: wacemeth-008
topicName: Continuous Random Variables and the Normal Distribution
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 4 Topic 3: Continuous Random Variables and the Normal Distribution — WACE Mathematics Methods (SCSA) Notes

Unit 4 Topic 3 of WACE Mathematics Methods covers continuous random variables, the normal distribution and its parameters, the standard normal distribution and confidence intervals for proportions. Third Topic of Unit 4 and assessed in the ATAR Year 12 examination.

> Re-check the live specification details on https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Continuous random variable.** Density f(x). P(a ≤ X ≤ b) = ∫_a^b f(x) dx.
- **Normal distribution.** Mean μ, SD σ. Z = (X − μ)/σ.
- **Confidence interval for p.** p̂ ± 1.96 × √(p̂(1 − p̂)/n).

#### Examiner traps

- Treating P(X = k) as non-zero for normal distribution (it is 0).
- Mixing up σ and σ/√n.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Continuous random variables

Density f(x) satisfies f(x) ≥ 0 and ∫f(x) dx = 1. P(a ≤ X ≤ b) = ∫_a^b f(x) dx. E(X) = ∫ x f(x) dx.

#### Normal distribution

Density f(x) = (1/(σ√(2π))) e^(−(x−μ)²/(2σ²)). Standard normal Z = (X − μ)/σ has mean 0 and SD 1.

#### Confidence interval for proportions

For sample proportion p̂ with sample size n: 95% CI for p is p̂ ± 1.96 × √(p̂(1 − p̂)/n).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 3 of Unit 4 is heavily tested

- Normal distribution calculations appear in every statistical inference problem.

#### Year 12 planning pattern

- Term 1: Continuous random variables.
- Term 2: Normal distribution.
- Term 3: Confidence intervals.

#### Common misconceptions (and the correction)

- "P(X = k) for normal distribution is non-zero." P(X = k) = 0.
- "Sample SD = population SD." The sample mean has SD σ/√n.

#### Specification reference

This Topic is the third Topic of Unit 4 in the WACE Mathematics Methods ATAR Year 12 syllabus. Confirm the live examination design brief on senior-secondary.scsa.wa.edu.au.

#### Worked example — continuous probability density function and median

A continuous random variable X represents the lifetime in thousands of hours of an industrial cutting tool, with probability density function:

```
  f(x) = (3 / 8) x²,  for 0 ≤ x ≤ 2
  f(x) = 0,           otherwise
```

1. Verify that f(x) is a valid probability density function.
2. Find the expected value E(X) and variance Var(X).
3. Determine the cumulative distribution function F(x).
4. Find the median lifetime m of the cutting tool.

Part 1: Verification
Check total area over [0, 2]:

```
  ∫₀² (3 / 8) x² dx = (3 / 8) [ x³ / 3 ]₀²
                    = (1 / 8) [ x³ ]₀²
                    = (1 / 8) [ 8 − 0 ]
                    = 1
```

Since f(x) ≥ 0 for all x and the total integral equals 1, f(x) is a valid PDF.

Part 2: E(X) and Var(X)

```
  E(X) = ∫₀² x f(x) dx
       = (3 / 8) ∫₀² x³ dx
       = (3 / 8) [ x⁴ / 4 ]₀²
       = (3 / 32) [ 16 − 0 ]
       = 48 / 32
       = 1.5 thousand hours
```

Calculate E(X²):

```
  E(X²) = (3 / 8) ∫₀² x⁴ dx
        = (3 / 8) [ x⁵ / 5 ]₀²
        = (3 / 40) [ 32 ]
        = 96 / 40
        = 2.4
```

Calculate variance:

```
  Var(X) = E(X²) − [E(X)]²
         = 2.4 − (1.5)²
         = 2.4 − 2.25
         = 0.15
  σ = √0.15 ≈ 0.3873 thousand hours
```

Part 3: Cumulative distribution function F(x) for 0 ≤ x ≤ 2

```
  F(x) = ∫₀^x (3 / 8) t² dt = (1 / 8) x³
```

Part 4: Median m
Set F(m) = 0.5:

```
  (1 / 8) m³ = 0.5
  m³ = 4
  m = 4^(1/3) ≈ 1.5874 thousand hours (1,587 hours)
```

#### Worked example — sample proportion confidence interval

A polling organization surveys n = 600 eligible Western Australian voters and finds that 372 support a proposed environmental conservation initiative.
1. Calculate the sample proportion p̂.
2. Calculate the 95% confidence interval for the true population proportion p.
3. Determine the margin of error of the estimate.
4. How many voters must be surveyed to reduce the margin of error to 2.0% at the 95% confidence level?

Part 1: Sample proportion

```
  p̂ = 372 / 600 = 0.62
```

Part 2 & 3: Standard error and 95% confidence interval
For 95% confidence, z* = 1.96.
Calculate standard error SE:

```
  SE = √[ p̂(1 − p̂) / n ]
     = √[ (0.62)(0.38) / 600 ]
     = √[ 0.2356 / 600 ]
     = √[ 0.00039267 ]
     ≈ 0.019816
```

Margin of error E:

```
  E = z* × SE = 1.96 × 0.019816 ≈ 0.03884 (or 3.88%)
```

Confidence interval:

```
  Lower bound = 0.62 − 0.03884 = 0.5812 (or 58.12%)
  Upper bound = 0.62 + 0.03884 = 0.6588 (or 65.88%)
```

The 95% confidence interval is [0.5812, 0.6588].

Part 4: Sample size determination for E ≤ 0.02

```
  E = z* √[ p̂(1 − p̂) / n ]
  0.02 = 1.96 √[ 0.2356 / n ]
  (0.02 / 1.96)² = 0.2356 / n
  0.00010412 = 0.2356 / n
  n = 0.2356 / 0.00010412
  n ≈ 2262.8
```

Round up to the nearest integer: n = 2,263 voters.

#### Common marking-scheme mistakes

- Rounding down sample size calculations; any decimal requirement must be rounded up to guarantee the required precision.
- Stating the median condition as f(m) = 0.5 instead of F(m) = 0.5.
- Evaluating P(X = c) as non-zero for continuous distributions.
- Misinterpreting the confidence interval as "there is a 95% probability that the true proportion lies in this specific interval".
- Dividing by n instead of √n when calculating standard error.

#### 20-minute recap before you walk in

- PDF properties: f(x) ≥ 0, ∫ f(x) dx = 1.
- CDF definition: F(x) = ∫_{-∞}^x f(t) dt. P(a ≤ X ≤ b) = F(b) − F(a).
- Expected value: E(X) = ∫ x f(x) dx. Variance: Var(X) = ∫ x² f(x) dx − μ².
- Normal distribution: Z = (X − μ) / σ.
- 95% confidence interval for proportion: p̂ ± 1.96 √[ p̂(1 − p̂) / n ].

#### Sub-topics the syllabus lists that this note does not cover in detail

The SCSA Mathematics Methods Year 12 Unit 4 syllabus also lists:

- Normal approximation to the distribution of sample proportions when np ≥ 5 and n(1 − p) ≥ 5.
- The effect of sample size n on standard error and confidence interval width.
- Mode and percentiles of asymmetric continuous probability distributions.
- Simulation of random sampling to demonstrate empirical confidence interval coverage.
- Linear combinations of independent normal variables.

Confirm the live syllabus on the SCSA website before planning revision around these.

---

*Last updated 2026-09-24. Source: WACE Mathematics Methods ATAR Year 12 syllabus, https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods. Awarding body: School Curriculum and Standards Authority (SCSA).*