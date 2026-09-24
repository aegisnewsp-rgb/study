---
exam: qce-mathematical-methods
examName: QCE Mathematical Methods & Specialist Mathematics (QCAA 2025)
subject: qce-mathematical-methods
subjectName: Mathematical Methods
topic: qcemeth-002
topicName: Calculus
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 2: Calculus — QCE Mathematical Methods (QCAA 2025) Notes

Unit 2 of QCE Mathematical Methods covers introduction to differential calculus (limit, derivative, gradient of tangent); differentiation rules (power, sum, product, quotient, chain); introduction to integral calculus (anti-derivative, definite integral as area under a curve). Second Unit of the four-Unit Mathematical Methods sequence.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Differentiation.** Power rule d/dx (x^n) = n x^(n−1). Sum, product, quotient, chain rules.
- **Derivatives of standard functions.** d/dx (e^x) = e^x. d/dx (sin x) = cos x. d/dx (cos x) = −sin x. d/dx (ln x) = 1/x.
- **Integration.** ∫ x^n dx = x^(n+1)/(n+1) + C. ∫ e^x dx = e^x + C. ∫ 1/x dx = ln|x| + C.
- **Fundamental theorem of calculus.** ∫_a^b f'(x) dx = f(b) − f(a).

#### Examiner traps

- Forgetting the + C on indefinite integrals.
- Forgetting the chain rule factor.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Differentiation

Power rule: d/dx (x^n) = n x^(n−1). Sum rule: d/dx (f + g) = f' + g'. Constant multiple: d/dx (c f) = c f'. Product rule: d/dx (uv) = u'v + uv'. Quotient rule: d/dx (u/v) = (u'v − uv')/v². Chain rule: d/dx f(g(x)) = f'(g(x))g'(x).

#### Standard derivatives

d/dx (e^x) = e^x. d/dx (e^(kx)) = k e^(kx). d/dx (ln x) = 1/x. d/dx (sin x) = cos x. d/dx (cos x) = −sin x.

#### Anti-differentiation

∫ x^n dx = x^(n+1)/(n+1) + C for n ≠ −1. ∫ e^x dx = e^x + C. ∫ 1/x dx = ln|x| + C. ∫ sin x dx = −cos x + C. ∫ cos x dx = sin x + C.

#### Fundamental theorem of calculus

∫_a^b f'(x) dx = f(b) − f(a) where F is any antiderivative of f.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Unit 2 is the foundation for Units 3-4

- **Differentiation rules** are used in every calculus problem.
- **Chain rule** is needed for trigonometric, exponential and logarithmic functions.
- **Fundamental theorem** is needed for definite integrals in Units 3-4.

#### Year 11 planning pattern

- Term 1: Power rule, product rule, quotient rule.
- Term 2: Chain rule, derivatives of standard functions.
- Term 3: Anti-differentiation.
- Term 4: Fundamental theorem, definite integrals.

#### Common misconceptions (and the correction)

- "Differentiation and integration always commute." No.
- "∫ 1/x dx = ln x." It is ln|x| + C.

#### Specification reference

This Unit is the second of four Units of QCE Mathematical Methods. Confirm the live syllabus on qcaa.qld.edu.au.

#### Worked example — product and chain rule composite differentiation

Find the derivative of f(x) = x³ e^(2x) and evaluate the gradient of the tangent at x = 1.

Step 1: Identify functions for product rule
Let u(x) = x³ and v(x) = e^(2x).
The derivatives are:
- u'(x) = 3x² (power rule)
- v'(x) = 2 e^(2x) (chain rule applied to e^(kx))

Step 2: Apply the product rule formula d/dx(uv) = u'v + uv'

```
  f'(x) = (3x²)(e^(2x)) + (x³)(2 e^(2x))
        = 3x² e^(2x) + 2x³ e^(2x)
        = x² e^(2x) (3 + 2x)
```

Step 3: Evaluate the gradient at x = 1

```
  f'(1) = (1)² e^(2(1)) (3 + 2(1))
        = 1 × e² × (3 + 2)
        = 5e²
```

The exact gradient of the tangent at x = 1 is 5e² ≈ 36.945.

#### Worked example — definite integral and area bounded by a curve

Calculate the exact area bounded by the curve y = 6x − x², the x-axis, and the lines x = 1 and x = 4.

Step 1: Determine the x-intercepts to confirm the curve does not cross the x-axis on [1, 4]
Set 6x − x² = 0:

```
  x(6 − x) = 0
  x = 0 or x = 6
```

On the interval [1, 4], the function is strictly positive (for instance, at x = 2, y = 12 − 4 = 8 > 0). Therefore, the definite integral equals the geometric area.

Step 2: Set up and evaluate the definite integral

```
  Area = ∫₁⁴ (6x − x²) dx
       = [ 3x² − (x³ / 3) ]₁⁴
```

Step 3: Substitute the limits

```
  Upper limit (x = 4):
    3(4)² − (4³ / 3) = 3(16) − (64 / 3) = 48 − 21.333 = 80 / 3

  Lower limit (x = 1):
    3(1)² − (1³ / 3) = 3(1) − (1 / 3) = 3 − 1/3 = 8 / 3

  Area = (80 / 3) − (8 / 3)
       = 72 / 3
       = 24
```

The exact area is 24 square units.

#### Worked example — finding the equation of a normal line

Determine the Cartesian equation of the normal to the curve y = ln(2x − 1) at the point where x = 1.

Step 1: Find the y-coordinate at x = 1

```
  y = ln(2(1) − 1) = ln(1) = 0
```

The point of contact is (1, 0).

Step 2: Differentiate y = ln(2x − 1) using the chain rule

```
  dy/dx = 2 / (2x − 1)
```

Step 3: Calculate the tangent gradient m_T at x = 1

```
  m_T = 2 / (2(1) − 1) = 2 / 1 = 2
```

Step 4: Find the normal gradient m_N
Since the normal is perpendicular to the tangent, m_N × m_T = −1:

```
  m_N = −1 / 2
```

Step 5: Write the line equation using point-gradient form y − y₁ = m(x − x₁)

```
  y − 0 = −(1/2)(x − 1)
  2y = −x + 1
  x + 2y − 1 = 0
```

#### Common marking-scheme mistakes

- Omitting the constant of integration C on indefinite integrals.
- Confusing tangent gradient with normal gradient; markers require m_N = −1/m_T.
- Forgetting the internal derivative factor in chain rule questions (differentiating e^(2x) as e^(2x) instead of 2e^(2x)).
- Evaluating area across x-intercepts without splitting into separate intervals, causing positive and negative regions to cancel out.
- Applying the power rule to ∫ (1/x) dx instead of using the standard natural logarithm form ln|x| + C.
- Dropping parentheses when applying the quotient rule, leading to sign errors in the numerator (u'v − uv').
- Providing rounded decimal approximations when the question specifies exact values.

#### 20-minute recap before you walk in

- Product rule: (uv)' = u'v + uv'. Quotient rule: (u/v)' = (u'v − uv') / v².
- Standard derivatives: d/dx(e^(kx)) = k e^(kx); d/dx(ln(kx)) = 1/x; d/dx(sin(kx)) = k cos(kx); d/dx(cos(kx)) = −k sin(kx).
- Tangent equation uses m = f'(a); normal equation uses m = −1 / f'(a).
- Definite integral ∫_a^b f(x) dx represents signed net area; geometric area requires splitting at every x-intercept.
- Always check that the argument inside logarithmic derivatives is strictly positive on the stated domain.

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA Mathematical Methods syllabus for Unit 2 also lists the following sub-topics, which require dedicated revision:

- Second derivatives and classifying concavity and inflection points.
- Instantaneous and average rates of change in kinematic and biological growth models.
- The connection between anti-derivatives and families of curves with varying constants C.
- Numerical integration using the trapezoidal rule and estimating percentage error relative to exact integrals.
- Proof of standard differentiation rules from first principles limits.

Confirm the live sub-topic list on the QCAA Mathematical Methods syllabus page before planning revision around these.

---

*Last updated 2026-09-24. Source: QCE Mathematical Methods General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods. Awarding body: Queensland Curriculum and Assessment Authority (QCAA).*