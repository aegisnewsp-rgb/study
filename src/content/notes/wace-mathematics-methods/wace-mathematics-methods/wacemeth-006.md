---
exam: wace-mathematics-methods
examName: WACE Mathematics Methods & Mathematics Specialist (SCSA)
subject: wace-mathematics-methods
subjectName: Mathematics Methods
topic: wacemeth-006
topicName: Logarithmic Functions
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 4 Topic 1: Logarithmic Functions — WACE Mathematics Methods (SCSA) Notes

Unit 4 Topic 1 of WACE Mathematics Methods covers logarithmic functions and their graphs, the natural logarithm, change of base and applications to growth and decay models. First Topic of Unit 4 and assessed in the ATAR Year 12 examination.

> Re-check the live specification details on https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Logarithmic function.** y = log_a(x). Domain (0, ∞).
- **Natural logarithm.** ln x = log_e x.
- **Laws of logs.** log(xy) = log x + log y.
- **Change of base.** log_a(b) = log_c(b)/log_c(a).

#### Examiner traps

- Mixing up log(xy) and log(x + y).
- Treating log(−x) as defined (it isn't).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Logarithmic functions

y = log_a(x) is the inverse of y = a^x. Domain (0, ∞), range all reals. Passes through (1, 0) and (a, 1).

#### Natural logarithm

ln x is the natural log. ln e = 1, ln 1 = 0, ln(1/e) = −1. d/dx (ln x) = 1/x.

#### Laws

log_a(xy) = log_a(x) + log_a(y). log_a(x/y) = log_a(x) − log_a(y). log_a(x^n) = n log_a(x). Change of base: log_a(b) = ln b / ln a.

#### Growth and decay

Continuous: A = A₀ e^(kt). Half-life: t = (ln 2)/k. Time to N times: t = (ln N)/k.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 1 of Unit 4 prepares for further calculus

- Logarithmic functions are needed for integration techniques and differential equations.

#### Year 12 planning pattern

- Term 1: Logarithmic functions.
- Term 2: Growth and decay models.

#### Common misconceptions (and the correction)

- "log(xy) = log x + log y always." Yes, when x, y > 0.
- "log(−x) = log x." No — log is defined only for positive arguments.

#### Specification reference

This Topic is the first Topic of Unit 4 in the WACE Mathematics Methods ATAR Year 12 syllabus. Confirm the live examination design brief on senior-secondary.scsa.wa.edu.au.

#### Worked example — logarithmic differentiation and stationary points

Consider the function f(x) = (ln x) / x for x > 0.
1. Determine the coordinates of the stationary point and state its nature.
2. Find the equation of the tangent line at the point where x = 1.
3. State the non-vertical and vertical asymptotes of f(x).

Part 1: Stationary point
Differentiate f(x) using the quotient rule d/dx(u/v) = (u'v − uv') / v²:
- u = ln x  ⇒  u' = 1/x
- v = x  ⇒  v' = 1

```
  f'(x) = [ (1/x)(x) − (ln x)(1) ] / x²
        = [ 1 − ln x ] / x²
```

Set f'(x) = 0:

```
  1 − ln x = 0
  ln x = 1
  x = e¹ = e ≈ 2.718
```

Find the y-coordinate:

```
  f(e) = (ln e) / e = 1 / e ≈ 0.3679
```

Test nature using first derivative test:
- For x < e (e.g. x = 2): f'(2) = (1 − ln 2) / 4 = (1 − 0.693) / 4 > 0 (increasing)
- For x > e (e.g. x = 3): f'(3) = (1 − ln 3) / 9 = (1 − 1.099) / 9 < 0 (decreasing)
Since f'(x) changes from positive to negative across x = e, the point (e, 1/e) is a local maximum.

Part 2: Tangent line at x = 1
- y-coordinate: f(1) = (ln 1) / 1 = 0 / 1 = 0. Point is (1, 0).
- Gradient: f'(1) = (1 − ln 1) / 1² = (1 − 0) / 1 = 1.

Line equation:

```
  y − 0 = 1(x − 1)  ⇒  y = x − 1
```

Part 3: Asymptotes
- Vertical asymptote: as x → 0⁺, ln x → −∞ and x → 0, so f(x) → −∞.
  Vertical asymptote is x = 0.
- Horizontal asymptote: as x → ∞, by standard limits (ln x) / x → 0.
  Horizontal asymptote is the x-axis y = 0.

#### Worked example — integration involving natural logarithms

Evaluate the exact value of the definite integral:

```
  ∫₁^e [ (ln x)² / x ] dx
```

Step 1: Use substitution
Let u = ln x.
Then du/dx = 1/x  ⇒  du = (1/x) dx.

Step 2: Transform the integration limits
- When x = 1: u = ln(1) = 0
- When x = e: u = ln(e) = 1

Step 3: Integrate with respect to u

```
  ∫₁^e [ (ln x)² / x ] dx = ∫₀¹ u² du
                          = [ u³ / 3 ]₀¹
                          = (1³ / 3) − 0
                          = 1 / 3
```

The exact value is 1/3.

#### Common marking-scheme mistakes

- Differentiating ln(x) as 1/(x ln 10) instead of 1/x (confusing natural logarithm with base-10 logarithm).
- Omitting the domain x > 0 when stating properties of logarithmic functions.
- Expanding ln(x + y) as ln x + ln y (which is mathematically invalid).
- Forgetting to change integration limits when applying substitution to logarithmic definite integrals.
- Assuming ln x = 0 has solution x = 0 instead of x = 1.

#### 20-minute recap before you walk in

- Natural log definition: y = ln x  ⇔  e^y = x.
- Domain of ln x is (0, ∞); range is (−∞, ∞).
- Derivative: d/dx(ln x) = 1/x; Chain rule: d/dx(ln(g(x))) = g'(x) / g(x).
- Integral: ∫ (1/x) dx = ln|x| + C; Composite: ∫ [g'(x) / g(x)] dx = ln|g(x)| + C.
- Log laws: ln(ab) = ln a + ln b; ln(a/b) = ln a − ln b; ln(a^k) = k ln a.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SCSA Mathematics Methods Year 12 Unit 4 syllabus also lists:

- Solving exponential equations of the form a^x = b using natural logarithms.
- Graphing transformations of logarithmic functions y = a ln(b(x − c)) + d.
- Logarithmic differentiation for complex products and powers: taking ln of both sides.
- Half-life and radioactive decay models expressed in natural exponential and logarithmic form.
- Newton's Law of Cooling differential equations dy/dt = −k(y − T_0).

Confirm the live syllabus on the SCSA website before planning revision around these.

---

*Last updated 2026-09-24. Source: WACE Mathematics Methods ATAR Year 12 syllabus, https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods. Awarding body: School Curriculum and Standards Authority (SCSA).*