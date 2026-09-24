---
exam: sace-mathematical-methods
examName: SACE Stage 2 Mathematical Methods & Specialist Mathematics
subject: sace-mathematical-methods
subjectName: Mathematical Methods
topic: sacemeth-004
topicName: Logarithmic Functions
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Topic 4: Logarithmic Functions — SACE Stage 2 Mathematical Methods Notes

Topic 4 of SACE Stage 2 Mathematical Methods covers logarithmic functions and their graphs, the natural logarithm, change of base and applications to growth and decay models. Fourth Topic and the third Topic of the calculus strand.

> Re-check the live Subject Outline on https://www.sace.sa.edu.au/en_US/web/mathematical-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Logarithmic function.** y = log_a(x). Domain (0, ∞).
- **Natural logarithm.** ln x = log_e x.
- **Laws.** log(xy) = log x + log y; log(x^n) = n log x.

#### Examiner traps

- Mixing up log(xy) and log(x + y).
- Treating log(−x) as defined.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Logarithmic functions

y = log_a(x) is the inverse of y = a^x. Domain (0, ∞), range all reals. Passes through (1, 0).

#### Laws

log_a(xy) = log_a(x) + log_a(y). log_a(x/y) = log_a(x) − log_a(y). log_a(x^n) = n log_a(x).

#### Growth and decay

A(t) = A₀ e^(kt). Half-life: t = (ln 2)/k. Time to N times: t = (ln N)/k.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 4 prepares for Topic 6

- Logarithmic functions underpin statistical inference.

#### Year 12 planning pattern

- Term 1: Logarithmic functions.
- Term 2: Growth and decay models.

#### Common misconceptions (and the correction)

- "log(xy) = log x + log y always." Yes, when x, y > 0.

---

### Specification reference

This Topic is the fourth Topic of the SACE Stage 2 Mathematical Methods Subject Outline. Confirm the live Subject Outline on sace.sa.edu.au.

#### Worked example — calculus of natural logarithmic functions

Consider the function f(x) = x² ln(x) for x > 0.
1. Find f'(x) and state the coordinates of any stationary points.
2. Determine the nature of the stationary points using the second derivative test.
3. Find the equation of the tangent line at the point where x = 1.

Part 1: Find f'(x) and stationary points
Apply the product rule to f(x) = (x²)(ln x):
- u = x²  ⇒  u' = 2x
- v = ln x  ⇒  v' = 1/x

```
  f'(x) = u'v + uv'
        = (2x)(ln x) + (x²)(1/x)
        = 2x ln(x) + x
        = x (2 ln(x) + 1)
```

Set f'(x) = 0 for stationary points:

```
  x (2 ln(x) + 1) = 0
```

Since the domain is x > 0, x ≠ 0:

```
  2 ln(x) + 1 = 0
  2 ln(x) = −1
  ln(x) = −1 / 2
  x = e^(−1/2) = 1 / √e ≈ 0.6065
```

Find the y-coordinate:

```
  f(e^(−1/2)) = (e^(−1/2))² ln(e^(−1/2))
              = e^(−1) × (−1/2)
              = −1 / (2e)
              ≈ −0.1839
```

The stationary point is (e^(−1/2), −1/(2e)).

Part 2: Nature test via second derivative

```
  f''(x) = d/dx [ 2x ln(x) + x ]
         = 2 ln(x) + 2x(1/x) + 1
         = 2 ln(x) + 2 + 1
         = 2 ln(x) + 3
```

Evaluate at x = e^(−1/2):

```
  f''(e^(−1/2)) = 2(−1/2) + 3 = −1 + 3 = 2 > 0
```

Since f''(e^(−1/2)) > 0, the stationary point is a local minimum.

Part 3: Tangent line at x = 1
- y-coordinate: f(1) = 1² ln(1) = 0. Point is (1, 0).
- Gradient: f'(1) = 1(2 ln(1) + 1) = 1(0 + 1) = 1.

Line equation:

```
  y − 0 = 1(x − 1)  ⇒  y = x − 1
```

#### Worked example — integration leading to natural logarithms

Evaluate the definite integral:

```
  ∫₁³ [ (2x + 3) / (x² + 3x + 1) ] dx
```

Step 1: Recognise standard form ∫ [f'(x) / f(x)] dx = ln|f(x)| + C
Notice the denominator is g(x) = x² + 3x + 1.
Its derivative is:

```
  g'(x) = 2x + 3
```

The numerator is exactly equal to the derivative of the denominator.

Step 2: Integrate directly

```
  ∫ [ (2x + 3) / (x² + 3x + 1) ] dx = ln|x² + 3x + 1|
```

Step 3: Evaluate limits from x = 1 to x = 3

```
  Upper limit (x = 3):
    ln|3² + 3(3) + 1| = ln|9 + 9 + 1| = ln(19)

  Lower limit (x = 1):
    ln|1² + 3(1) + 1| = ln|1 + 3 + 1| = ln(5)

  Integral = ln(19) − ln(5) = ln(19 / 5) = ln(3.8) ≈ 1.335
```

The exact value of the integral is ln(19/5).

#### Common marking-scheme mistakes

- Applying power rule to 1/x instead of ln|x|.
- Omitting absolute value bars inside ln|x| when evaluating integrals with negative arguments.
- Forgetting the chain rule when differentiating composite logarithmic functions d/dx[ln(f(x))] = f'(x)/f(x).
- Assuming ln(a + b) = ln(a) + ln(b), which is mathematically false.
- Attempting to take logarithms of zero or negative numbers without checking domain validity.

#### 20-minute recap before you walk in

- Logarithm identities: ln(xy) = ln x + ln y; ln(x/y) = ln x − ln y; ln(x^k) = k ln x; ln(1) = 0; ln(e) = 1.
- Log derivative: d/dx(ln x) = 1/x. Chain rule: d/dx(ln(f(x))) = f'(x) / f(x).
- Log integral: ∫ (1/x) dx = ln|x| + C. Composite: ∫ [f'(x) / f(x)] dx = ln|f(x)| + C.
- Exponential to log conversion: y = e^(kx)  ⇔  ln y = kx.
- Domain of ln(x) is x > 0. Vertical asymptote of y = ln(x) occurs at x = 0.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SACE Stage 2 Mathematical Methods Subject Outline also lists:

- Exponential growth and decay models solved via logarithmic transformation.
- Carbon dating and half-life decay applications.
- Newton's law of cooling differential equations dy/dt = −k(y − T_env).
- Linear regression of exponential data after logarithmic transformation of the response variable.
- Graphing y = a ln(b(x − c)) showing transformations and asymptotes.

Confirm the live Subject Outline on the SACE website before planning revision around these.

---

*Last updated 2026-09-24. Source: SACE Stage 2 Mathematical Methods Subject Outline, https://www.sace.sa.edu.au/en_US/web/mathematical-methods. Awarding body: SACE Board of South Australia.*