---
exam: qce-mathematical-methods
examName: QCE Mathematical Methods & Specialist Mathematics (QCAA 2025)
subject: qce-mathematical-methods
subjectName: Mathematical Methods
topic: qcemeth-004
topicName: Further Calculus, Trigonometry and Statistics
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 4: Further Calculus, Trigonometry and Statistics — QCE Mathematical Methods (QCAA 2025) Notes

Unit 4 of QCE Mathematical Methods covers trigonometric identities, equations and graphs; further calculus (differential equations, motion); continuous random variables, the normal distribution, sampling and confidence intervals. Fourth Unit and the summative external assessment Unit.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Trigonometric identities.** sin² x + cos² x = 1. tan x = sin x / cos x. Double angle formulas.
- **Differential equations.** Separable: dy/dx = f(x)g(y), separate and integrate.
- **Continuous random variables.** Normal distribution, mean μ, SD σ.
- **Confidence intervals.** 95% CI: x̄ ± 1.96 × σ/√n.

#### Examiner traps

- Mixing up sine and cosine identities.
- Forgetting the + C in indefinite integration.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Trigonometric identities

sin² x + cos² x = 1. tan x = sin x / cos x. sin(A + B) = sin A cos B + cos A sin B. cos(A + B) = cos A cos B − sin A sin B. sin 2A = 2 sin A cos A. cos 2A = cos² A − sin² A.

#### Differential equations

dy/dx = f(x)g(y). Separate: dy/g(y) = f(x) dx. Integrate both sides. Apply initial condition to find constant.

#### Continuous random variables

Density f(x) satisfies f(x) ≥ 0 and ∫f(x) dx = 1. P(a ≤ X ≤ b) = ∫_a^b f(x) dx.

#### Normal distribution and confidence intervals

Density f(x) = (1/(σ√(2π))) e^(−(x−μ)²/(2σ²)). Standardise Z = (X − μ)/σ.

95% CI for μ: x̄ ± 1.96 × σ/√n. 99% CI: x̄ ± 2.576 × σ/√n.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Unit 4 is the summative Unit

- **External assessment** by the QCAA. The summative examination tests the entire four-Unit course but Unit 4 content is the most heavily weighted.

#### Year 12 planning pattern

- Term 1: Trigonometric identities, further calculus.
- Term 2: Differential equations.
- Term 3: Normal distribution, confidence intervals.
- Term 4: Revision and mocks.

#### Common misconceptions (and the correction)

- "Sample mean SD = σ." No — sample mean SD = σ/√n.
- "P(X = k) for normal distribution is non-zero." P(X = k) = 0.

#### Specification reference

This Unit is the summative Unit of QCE Mathematical Methods and is externally assessed. Confirm the live syllabus on qcaa.qld.edu.au.

#### Worked example — integration by linear substitution

Evaluate the indefinite integral:

```
  ∫ x √(2x + 1) dx
```

Step 1: Choose substitution variable
Let u = 2x + 1.
Then:
- du/dx = 2  ⇒  dx = du / 2
- Rearrange for x: x = (u − 1) / 2

Step 2: Express the entire integrand in terms of u

```
  ∫ x √(2x + 1) dx = ∫ ((u − 1) / 2) (u^(1/2)) (du / 2)
                   = (1 / 4) ∫ (u − 1) u^(1/2) du
                   = (1 / 4) ∫ (u^(3/2) − u^(1/2)) du
```

Step 3: Integrate using the power rule

```
  = (1 / 4) [ (u^(5/2) / (5/2)) − (u^(3/2) / (3/2)) ] + C
  = (1 / 4) [ (2/5) u^(5/2) − (2/3) u^(3/2) ] + C
  = (1 / 10) u^(5/2) − (1 / 6) u^(3/2) + C
```

Step 4: Factorise and substitute back u = 2x + 1

```
  = (1 / 30) u^(3/2) [ 3u − 5 ] + C
  = (1 / 30) (2x + 1)^(3/2) [ 3(2x + 1) − 5 ] + C
  = (1 / 30) (2x + 1)^(3/2) [ 6x + 3 − 5 ] + C
  = (1 / 30) (2x + 1)^(3/2) (6x − 2) + C
  = (1 / 15) (2x + 1)^(3/2) (3x − 1) + C
```

#### Worked example — confidence interval for a population proportion

In a random sample of 400 senior secondary students in Queensland, 260 state that they use digital study roadmaps.
1. Determine the sample proportion p̂.
2. Calculate the 95% confidence interval for the true population proportion p.
3. Interpret the calculated confidence interval in context.

Part 1: Sample proportion
The sample size is n = 400 and the number of successes is x = 260:

```
  p̂ = x / n = 260 / 400 = 0.65
```

Part 2: Confidence interval calculation
For a 95% confidence interval, the critical value from the standard normal distribution is z* = 1.96.
Calculate the standard error SE:

```
  SE = √[ p̂(1 − p̂) / n ]
     = √[ 0.65 × 0.35 / 400 ]
     = √[ 0.2275 / 400 ]
     = √[ 0.00056875 ]
     ≈ 0.023848
```

Calculate the margin of error E:

```
  E = z* × SE
    = 1.96 × 0.023848
    ≈ 0.04674
```

Form the confidence interval [p̂ − E, p̂ + E]:

```
  Lower bound = 0.65 − 0.04674 = 0.6033 (or 60.33%)
  Upper bound = 0.65 + 0.04674 = 0.6967 (or 69.67%)
```

The 95% confidence interval is [0.6033, 0.6967].

Part 3: Contextual interpretation
With 95% confidence, the true proportion of all Queensland senior secondary students who use digital study roadmaps lies between 60.3% and 69.7%.

#### Common marking-scheme mistakes

- Forgetting to change the limits of integration when applying substitution to a definite integral.
- Inverting the order of subtraction when calculating area between two curves (subtracting top curve from bottom curve).
- Using sample size n inside the square root denominator without squaring or miscalculating the standard error.
- Interpreting a 95% confidence interval as "there is a 95% probability that the true proportion lies in this specific interval". The true parameter is fixed; 95% refers to the long-run capture rate of intervals produced by this method.
- Omitting the factor du / k when making the substitution u = ax + b, leaving extra constants.
- Stating trigonometric general solutions without specifying that k ∈ ℤ (the set of integers).
- Rounding confidence interval limits to one significant figure, which destroys precision.

#### 20-minute recap before you walk in

- Substitution rule: ∫ f(g(x)) g'(x) dx = ∫ f(u) du where u = g(x).
- Area between curves: Area = ∫_a^b (y_top − y_bottom) dx, splitting at all intersection points.
- Sample proportion mean is p; standard deviation (standard error) is √[p(1 − p) / n].
- 95% confidence interval formula: p̂ ± 1.96 √[ p̂(1 − p̂) / n ].
- For trigonometric equations: solve on base domain [0, 2π) first, then apply periodicity if general solution is requested.

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA Mathematical Methods syllabus for Unit 4 also lists the following sub-topics, which require dedicated revision:

- Sample size determination: calculating the minimum n required to achieve a specified margin of error at a given confidence level.
- Integration of trigonometric products and powers such as sin²(x) and cos²(x) using double angle identities.
- Hypothesis testing and p-value concepts as applied to sample proportions in large populations.
- Continuous probability models combined with conditional probability statements P(X > a | X > b).
- Logarithmic transformation of bivariate data to linearise exponential relationships before regression.

Confirm the live sub-topic list on the QCAA Mathematical Methods syllabus page before planning revision around these.

---

*Last updated 2026-09-24. Source: QCE Mathematical Methods General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods. Awarding body: Queensland Curriculum and Assessment Authority (QCAA).*