---
exam: qce-mathematical-methods
examName: QCE Mathematical Methods & Specialist Mathematics (QCAA 2025)
subject: qce-specialist-mathematics
subjectName: Specialist Mathematics
topic: qcespec-004
topicName: Further Calculus, Trigonometry and Statistics
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 4: Further Calculus, Trigonometry and Statistics — QCE Specialist Mathematics (QCAA 2025) Notes

Unit 4 of QCE Specialist Mathematics covers further calculus (differential equations, related rates, optimisation); trigonometric identities, equations and graphs; continuous random variables, the normal distribution, sampling and confidence intervals. Fourth Unit and summative external assessment.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/specialist-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Differential equations.** Separable: dy/dx = f(x)g(y).
- **Trigonometric identities.** sin² x + cos² x = 1. Compound angle formulas.
- **Normal distribution.** Mean μ, SD σ. Standardise Z = (X − μ)/σ.
- **Confidence intervals.** 95% CI: x̄ ± 1.96 × σ/√n.

#### Examiner traps

- Mixing up sine and cosine identities.
- Forgetting the + C on indefinite integration.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Differential equations

dy/dx = f(x)g(y). Separate: dy/g(y) = f(x) dx. Integrate both sides. Apply initial condition.

#### Trigonometric identities

sin² x + cos² x = 1. tan x = sin x / cos x. sin(A + B) = sin A cos B + cos A sin B. cos(A + B) = cos A cos B − sin A sin B. sin 2A = 2 sin A cos A. cos 2A = cos² A − sin² A.

#### Normal distribution

Density f(x) = (1/(σ√(2π))) e^(−(x−μ)²/(2σ²)). Standardise: Z = (X − μ)/σ.

#### Confidence intervals

95% CI for μ: x̄ ± 1.96 × σ/√n. 99% CI: x̄ ± 2.576 × σ/√n.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Unit 4 is the summative Unit

- External assessment by QCAA.

#### Year 12 planning pattern

- Term 1: Differential equations.
- Term 2: Trigonometric identities and equations.
- Term 3: Normal distribution, confidence intervals.
- Term 4: Revision.

#### Common misconceptions (and the correction)

- "Sample mean SD = σ." No — sample mean SD = σ/√n.
- "P(X = k) for normal distribution is non-zero." P(X = k) = 0.

#### Specification reference

This Unit is the summative Unit of QCE Specialist Mathematics and is externally assessed. Confirm the live syllabus on qcaa.qld.edu.au.

#### Worked example — solving a first-order separable differential equation

Solve the differential equation with the given initial condition:

```
  dy/dx = 2x (y² + 1),  given y(0) = 1
```

Step 1: Separate the variables
Move all terms involving y to the left-hand side and all terms involving x to the right-hand side:

```
  [ 1 / (y² + 1) ] dy = 2x dx
```

Step 2: Integrate both sides

```
  ∫ [ 1 / (y² + 1) ] dy = ∫ 2x dx
  arctan(y) = x² + C
```

Step 3: Apply the initial condition y(0) = 1 to find the particular constant C

```
  arctan(1) = 0² + C
  π / 4 = C
```

Step 4: Write the particular solution expressing y explicitly in terms of x

```
  arctan(y) = x² + (π / 4)
  y = tan(x² + π/4)
```

The particular solution is y = tan(x² + π/4).

#### Worked example — continuous probability distribution with exponential form

A random variable T represents the waiting time in minutes and has probability density function:

```
  f(t) = 0.2 e^(−0.2 t),  for t ≥ 0
  f(t) = 0,               otherwise
```

1. Verify that f(t) is a valid probability density function.
2. Find the cumulative distribution function F(t).
3. Find the probability that the waiting time exceeds 5 minutes P(T > 5).
4. Find the median waiting time m.

Part 1: Verification
Check total integral over [0, ∞):

```
  ∫₀^∞ 0.2 e^(−0.2 t) dt = lim_{b → ∞} [ −e^(−0.2 t) ]₀^b
                         = lim_{b → ∞} [ −e^(−0.2 b) − (−e⁰) ]
                         = 0 − (−1)
                         = 1
```

Since f(t) ≥ 0 for all t ≥ 0 and the total integral equals 1, f(t) is a valid PDF.

Part 2: Cumulative distribution function F(t) for t ≥ 0

```
  F(t) = ∫₀^t 0.2 e^(−0.2 u) du
       = [ −e^(−0.2 u) ]₀^t
       = −e^(−0.2 t) − (−1)
       = 1 − e^(−0.2 t)
```

Part 3: P(T > 5)

```
  P(T > 5) = 1 − F(5)
           = 1 − (1 − e^(−0.2(5)))
           = e^(−1)
           ≈ 0.3679
```

Part 4: Median m
Set F(m) = 0.5:

```
  1 − e^(−0.2 m) = 0.5
  e^(−0.2 m) = 0.5
  −0.2 m = ln(0.5) = −ln(2)
  m = ln(2) / 0.2 = 5 ln(2) ≈ 3.466 minutes
```

#### Common marking-scheme mistakes

- Forgetting to separate variables before integrating, attempting to integrate dy/dx directly while y is on the right side.
- Forgetting the constant of integration C when integrating, or adding C only after rearranging for y.
- Evaluating improper integrals without writing the limit notation lim_{b → ∞}.
- Confusing the cumulative distribution function F(t) with the probability density function f(t).
- Stating median condition as f(m) = 0.5 instead of F(m) = 0.5.

#### 20-minute recap before you walk in

- Separable ODE method: rewrite g(y) dy = h(x) dx, integrate both sides, solve for C using initial values.
- Growth/decay model dy/dt = ky integrates to y(t) = y₀ e^(kt).
- Continuous PDF requirements: f(x) ≥ 0, ∫ f(x) dx = 1.
- Cumulative distribution function: F(x) = ∫_{-∞}^x f(t) dt; P(a ≤ X ≤ b) = F(b) − F(a).
- Median m satisfies F(m) = 0.5; mode is the value of x where f(x) attains its global maximum.

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA Specialist Mathematics syllabus for differential equations and statistics also lists:

- Logistic growth differential equations dy/dt = ky(1 − y/M) and partial fraction integration.
- Euler's numerical method for first-order initial value problems: y_{n+1} = y_n + h f(x_n, y_n).
- Second-order linear homogeneous differential equations with constant coefficients a y'' + b y' + c y = 0.
- Slope fields (direction fields) sketching and trajectory tracing through given points.
- Expected value and variance calculations for continuous random variables using integration by parts.

Confirm the live sub-topic list on the QCAA Specialist Mathematics syllabus page before planning revision around these.

---

*Last updated 2026-09-24. Source: QCE Specialist Mathematics General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/specialist-mathematics. Awarding body: Queensland Curriculum and Assessment Authority (QCAA).*