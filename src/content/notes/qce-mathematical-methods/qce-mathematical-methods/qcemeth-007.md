---
exam: qce-mathematical-methods
examName: QCE Mathematical Methods & Specialist Mathematics (QCAA 2025)
subject: qce-mathematical-methods
subjectName: Mathematical Methods
topic: qcemeth-007
topicName: "Major Topic: Calculus (Differentiation and Integration)"
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Major Topic: Calculus — QCE Mathematical Methods (QCAA 2025) Notes

Calculus (Differentiation and Integration) is one of the four major topics in QCE Mathematical Methods. It covers differentiation rules and applications; integration techniques and applications.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Differentiation.** Power rule. Product, quotient, chain rules.
- **Standard derivatives.** d/dx (e^x) = e^x; d/dx (sin x) = cos x; d/dx (cos x) = −sin x; d/dx (ln x) = 1/x.
- **Integration.** ∫ x^n dx = x^(n+1)/(n+1) + C.
- **Applications.** Rates of change, optimisation, areas under curves.

#### Examiner traps

- Forgetting the chain rule factor.
- Missing + C on indefinite integrals.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Differentiation rules

Power rule: d/dx (x^n) = n x^(n−1). Product: d/dx (uv) = u'v + uv'. Quotient: d/dx (u/v) = (u'v − uv')/v². Chain: d/dx f(g(x)) = f'(g(x))g'(x).

#### Integration

∫ x^n dx = x^(n+1)/(n+1) + C for n ≠ −1. ∫ e^x dx = e^x + C. ∫ 1/x dx = ln|x| + C. ∫ sin x dx = −cos x + C. ∫ cos x dx = sin x + C.

#### Applications

Rates of change: dy/dt is the rate of change of y with respect to t. Optimisation: set f'(x) = 0, verify with second derivative test. Areas: ∫_a^b f(x) dx gives the signed area under the curve.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Calculus is the largest Methods topic

- **Calculus** is the language of rates and accumulation.

#### Year 11-12 planning pattern

- Drill differentiation and integration rules daily.
- Practice timed calculus problems weekly.

#### Common misconceptions (and the correction)

- "∫ 1/x dx = ln x." It is ln|x| + C.
- "f'(x) = 0 means f is constant." No — f is locally stationary.

#### Specification reference

This major topic is one of four cross-cutting topics in QCE Mathematical Methods. Confirm the live syllabus on qcaa.qld.edu.au.

#### Worked example — derivative from first principles

Use the definition of the derivative from first principles to differentiate f(x) = 3x² − 5x with respect to x.

Step 1: State the first principles limit definition

```
  f'(x) = lim_{h → 0} [ (f(x + h) − f(x)) / h ]
```

Step 2: Expand f(x + h)

```
  f(x + h) = 3(x + h)² − 5(x + h)
           = 3(x² + 2xh + h²) − 5x − 5h
           = 3x² + 6xh + 3h² − 5x − 5h
```

Step 3: Form the difference quotient

```
  f(x + h) − f(x) = (3x² + 6xh + 3h² − 5x − 5h) − (3x² − 5x)
                  = 6xh + 3h² − 5h
```

Step 4: Divide by h (for h ≠ 0)

```
  (f(x + h) − f(x)) / h = (6xh + 3h² − 5h) / h
                        = 6x + 3h − 5
```

Step 5: Evaluate the limit as h → 0

```
  f'(x) = lim_{h → 0} (6x + 3h − 5)
        = 6x − 5
```

The derivative of f(x) = 3x² − 5x from first principles is f'(x) = 6x − 5.

#### Worked example — curve sketching with stationary and inflection points

Analyze and sketch the function f(x) = x³ − 6x² + 9x + 2:
1. Find axis intercepts.
2. Determine stationary points and classify their nature.
3. Determine points of inflection and state intervals of concavity.

Part 1: Axis intercepts
- y-intercept: f(0) = 0 − 0 + 0 + 2 = 2. The point is (0, 2).

Part 2: Stationary points
Differentiate f(x):

```
  f'(x) = 3x² − 12x + 9
```

Set f'(x) = 0:

```
  3(x² − 4x + 3) = 0
  3(x − 1)(x − 3) = 0
  x = 1  or  x = 3
```

Evaluate y-values:
- At x = 1: f(1) = 1 − 6 + 9 + 2 = 6. Point is (1, 6).
- At x = 3: f(3) = 27 − 54 + 27 + 2 = 2. Point is (3, 2).

Classify using second derivative:

```
  f''(x) = 6x − 12
```

- At x = 1: f''(1) = 6(1) − 12 = −6 < 0  ⇒  local maximum at (1, 6).
- At x = 3: f''(3) = 6(3) − 12 = 6 > 0   ⇒  local minimum at (3, 2).

Part 3: Point of inflection
Set f''(x) = 0:

```
  6x − 12 = 0  ⇒  x = 2
```

Evaluate y-value: f(2) = 8 − 24 + 18 + 2 = 4. Point is (2, 4).
Check concavity change:
- For x < 2: f''(x) < 0 (concave down)
- For x > 2: f''(x) > 0 (concave up)
Since concavity strictly changes sign across x = 2, (2, 4) is a non-stationary point of inflection.

#### Common marking-scheme mistakes

- Omitting the limit notation lim_{h → 0} during intermediate steps in first-principles derivations.
- Claiming that f''(x) = 0 proves a point of inflection without demonstrating a change in the sign of f''(x).
- Calculating net signed area instead of total geometric area when a curve crosses below the x-axis.
- Forgetting to find the y-coordinate of stationary points, providing only the x-coordinate.
- Concluding a stationary point is an inflection point without verifying that f'(x) does not change sign.
- Drawing curves with sharp corners instead of smooth turning points.

#### 20-minute recap before you walk in

- First principles formula: f'(x) = lim_{h → 0} [f(x+h) − f(x)] / h. Always carry the limit symbol until evaluating h = 0.
- Stationary point occurs where f'(x) = 0; local maximum has f''(x) < 0; local minimum has f''(x) > 0.
- Point of inflection requires f''(x) = 0 AND a change in sign of f''(x) across the point.
- Tangent is horizontal when f'(x) = 0; tangent is vertical when f'(x) is undefined.
- Area under curve between a and b: if f(x) < 0 on an interval, the integral is negative and must be negated for geometric area.

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA Mathematical Methods syllabus for calculus also lists the following sub-topics:

- Differentiating trigonometric functions sin(kx) and cos(kx) from first principles using geometric limits.
- Marginal cost, marginal revenue, and profit optimisation models in business applications.
- Rates of change in fluid dynamics and filling containers of irregular geometry.
- The Mean Value Theorem and Rolle's Theorem applications to polynomial graphs.
- Rectangular approximations (left and right Riemann sums) and establishing bounding inequalities for integrals.

Confirm the live sub-topic list on the QCAA Mathematical Methods syllabus page before planning revision around these.

---

*Last updated 2026-09-24. Source: QCE Mathematical Methods General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods. Awarding body: Queensland Curriculum and Assessment Authority (QCAA).*