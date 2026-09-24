---
exam: sace-mathematical-methods
examName: SACE Stage 2 Mathematical Methods & Specialist Mathematics
subject: sace-mathematical-methods
subjectName: Mathematical Methods
topic: sacemeth-005
topicName: Continuous Random Variables and the Normal Distribution
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Topic 5: Continuous Random Variables and the Normal Distribution — SACE Stage 2 Mathematical Methods Notes

Topic 5 of SACE Stage 2 Mathematical Methods covers continuous random variables, the normal distribution and its parameters, the standard normal distribution and calculations of probability. Fifth Topic and the second Topic of the statistics strand.

> Re-check the live Subject Outline on https://www.sace.sa.edu.au/en_US/web/mathematical-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Continuous random variable.** Density f(x). P(a ≤ X ≤ b) = ∫_a^b f(x) dx.
- **Normal distribution.** Mean μ, SD σ. Standardise Z = (X − μ)/σ.

#### Examiner traps

- Treating P(X = k) as non-zero for normal distribution (it is 0).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Continuous random variables

Density f(x) satisfies f(x) ≥ 0 and ∫f(x) dx = 1. P(a ≤ X ≤ b) = ∫_a^b f(x) dx.

#### Normal distribution

f(x) = (1/(σ√(2π))) e^(−(x−μ)²/(2σ²)). Standardise Z = (X − μ)/σ. P(Z ≤ z) from tables or calculator.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 5 prepares for Topic 6

- Continuous distributions lead to confidence intervals and hypothesis testing.

#### Year 12 planning pattern

- Term 1: Continuous random variables.
- Term 2: Normal distribution.

#### Common misconceptions (and the correction)

- "P(X = k) is non-zero for normal distribution." P(X = k) = 0.

---

### Specification reference

This Topic is the fifth Topic of the SACE Stage 2 Mathematical Methods Subject Outline. Confirm the live Subject Outline on sace.sa.edu.au.

#### Worked example — continuous probability density function calculations

A continuous random variable X has probability density function:

```
  f(x) = c (4 − x²),  for 0 ≤ x ≤ 2
  f(x) = 0,           otherwise
```

1. Determine the exact value of the constant c.
2. Find the expected value E(X).
3. Find the probability P(X ≥ 1).
4. Find the cumulative distribution function F(x) for 0 ≤ x ≤ 2.

Part 1: Find c
For f(x) to be a valid PDF, the total area under f(x) over [0, 2] must equal 1:

```
  ∫₀² c (4 − x²) dx = 1
  c [ 4x − (x³ / 3) ]₀² = 1
  c [ 4(2) − (8 / 3) ] = 1
  c [ 8 − 8/3 ] = 1
  c [ 16 / 3 ] = 1
  c = 3 / 16
```

Part 2: Expected value E(X)

```
  E(X) = ∫₀² x f(x) dx
       = (3 / 16) ∫₀² x(4 − x²) dx
       = (3 / 16) ∫₀² (4x − x³) dx
       = (3 / 16) [ 2x² − (x⁴ / 4) ]₀²
       = (3 / 16) [ 2(4) − (16 / 4) ]
       = (3 / 16) [ 8 − 4 ]
       = (3 / 16) [ 4 ]
       = 3 / 4
       = 0.75
```

Part 3: Probability P(X ≥ 1)

```
  P(X ≥ 1) = (3 / 16) ∫₁² (4 − x²) dx
           = (3 / 16) [ 4x − (x³ / 3) ]₁²
           = (3 / 16) [ (8 − 8/3) − (4 − 1/3) ]
           = (3 / 16) [ (16/3) − (11/3) ]
           = (3 / 16) [ 5/3 ]
           = 5 / 16
           = 0.3125
```

Part 4: Cumulative distribution function F(x) for 0 ≤ x ≤ 2

```
  F(x) = ∫₀^x (3 / 16)(4 − t²) dt
       = (3 / 16) [ 4t − (t³ / 3) ]₀^x
       = (3 / 16) (4x − x³ / 3)
       = (3/4)x − (1/16)x³
```

Check: F(0) = 0 and F(2) = (3/4)(2) − (1/16)(8) = 1.5 − 0.5 = 1 ✓.

#### Worked example — normal distribution probability and percentile threshold

The weights of packages shipped from an Adelaide fulfillment centre are normally distributed with mean μ = 450 grams and standard deviation σ = 25 grams.
1. Find the probability that a randomly chosen package weighs between 420 grams and 490 grams.
2. Packages in the heaviest 5% require a special handling sticker. Find the minimum weight threshold for a package to receive this sticker.

Part 1: P(420 ≤ X ≤ 490)
Standardise both endpoints using Z = (X − μ) / σ:

```
  z₁ = (420 − 450) / 25 = −30 / 25 = −1.20
  z₂ = (490 − 450) / 25 = 40 / 25 = 1.60
```

Using standard normal cumulative probabilities:
- P(Z < 1.60) = 0.9452
- P(Z < −1.20) = 0.1151

```
  P(−1.20 ≤ Z ≤ 1.60) = 0.9452 − 0.1151 = 0.8301
```

The probability is approximately 0.8301 (or 83.0%).

Part 2: Heaviest 5% threshold
The heaviest 5% corresponds to the 95th percentile (upper tail area = 0.05).
On the standard normal distribution, the z-value satisfying P(Z < z*) = 0.95 is z* = 1.645.

Convert back to package weight X:

```
  X = μ + z* σ
    = 450 + 1.645(25)
    = 450 + 41.125
    = 491.125 grams
```

Packages weighing 491.1 grams or more require the special handling sticker.

#### Common marking-scheme mistakes

- Evaluating P(X = c) as a non-zero probability for a continuous random variable (for any continuous variable, P(X = c) = 0).
- Confusing standard deviation σ with variance σ² when standardising normal scores.
- Using upper-tail probabilities instead of cumulative probabilities when reading z-tables.
- Forgetting to integrate x² f(x) when computing variance Var(X) = E(X²) − [E(X)]².
- Stating the median m as the value where f(m) = 0.5 instead of F(m) = 0.5.

#### 20-minute recap before you walk in

- PDF requirements: f(x) ≥ 0 everywhere, and total area ∫ f(x) dx = 1.
- Probability as area: P(a ≤ X ≤ b) = ∫_a^b f(x) dx = F(b) − F(a).
- Expected value: E(X) = ∫ x f(x) dx. Variance: Var(X) = ∫ x² f(x) dx − μ².
- Normal distribution transformation: Z = (X − μ) / σ.
- Empirical 68-95-99.7 rule: ~68% within 1 SD, ~95% within 2 SD, ~99.7% within 3 SD.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SACE Stage 2 Mathematical Methods Subject Outline also lists:

- Solving for unknown mean μ or standard deviation σ given two normal distribution percentiles.
- Median and mode determination for asymmetric continuous distributions.
- Linear combinations of independent normal random variables: E(aX + bY) and Var(aX + bY).
- Normal probability plot inspection to assess whether data conforms to a normal model.
- Properties of uniform and exponential continuous probability distributions.

Confirm the live Subject Outline on the SACE website before planning revision around these.

---

*Last updated 2026-09-24. Source: SACE Stage 2 Mathematical Methods Subject Outline, https://www.sace.sa.edu.au/en_US/web/mathematical-methods. Awarding body: SACE Board of South Australia.*