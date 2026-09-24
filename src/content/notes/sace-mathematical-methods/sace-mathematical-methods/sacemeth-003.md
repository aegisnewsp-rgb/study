---
exam: sace-mathematical-methods
examName: SACE Stage 2 Mathematical Methods & Specialist Mathematics
subject: sace-mathematical-methods
subjectName: Mathematical Methods
topic: sacemeth-003
topicName: Integral Calculus
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Topic 3: Integral Calculus — SACE Stage 2 Mathematical Methods Notes

Topic 3 of SACE Stage 2 Mathematical Methods covers the definite integral as a limit of sums, the fundamental theorem of calculus, anti-differentiation, integration by substitution and applications to areas between curves. Third Topic and the second Topic of the calculus strand.

> Re-check the live Subject Outline on https://www.sace.sa.edu.au/en_US/web/mathematical-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Anti-differentiation.** ∫ x^n dx = x^(n+1)/(n+1) + C.
- **Fundamental theorem.** ∫_a^b f'(x) dx = f(b) − f(a).
- **Substitution.** Let u = g(x), du = g'(x) dx.

#### Examiner traps

- Forgetting + C on indefinite integrals.
- Mixing up area and signed area.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Anti-differentiation

∫ x^n dx = x^(n+1)/(n+1) + C for n ≠ −1. ∫ e^x dx = e^x + C. ∫ 1/x dx = ln|x| + C. ∫ sin x dx = −cos x + C. ∫ cos x dx = sin x + C.

#### Fundamental theorem of calculus

∫_a^b f'(x) dx = F(b) − F(a).

#### Substitution

Let u = g(x), du = g'(x) dx. ∫ f(g(x))g'(x) dx = ∫ f(u) du.

#### Areas between curves

Area = ∫_a^b |f(x) − g(x)| dx.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 3 is foundational

- Integration is the inverse of differentiation; it is required for definite integrals.

#### Year 12 planning pattern

- Term 1: Anti-differentiation, definite integrals.
- Term 2: Substitution, areas.

#### Common misconceptions (and the correction)

- "∫ 1/x dx = ln x." It is ln|x| + C.

---

### Specification reference

This Topic is the third Topic of the SACE Stage 2 Mathematical Methods Subject Outline. Confirm the live Subject Outline on sace.sa.edu.au.

#### Worked example — definite integration and total geometric area

Find the total area of the region bounded by the cubic curve y = x³ − 3x² + 2x and the x-axis.

Step 1: Find the x-intercepts of the curve
Set x³ − 3x² + 2x = 0:

```
  x(x² − 3x + 2) = 0
  x(x − 1)(x − 2) = 0
  x = 0, x = 1, x = 2
```

The curve intercepts the x-axis at x = 0, x = 1, and x = 2.

Step 2: Determine where the curve is above and below the x-axis
- On interval [0, 1] (test x = 0.5): y = (0.5)³ − 3(0.5)² + 2(0.5) = 0.125 − 0.75 + 1.0 = 0.375 > 0 (above x-axis).
- On interval [1, 2] (test x = 1.5): y = (1.5)³ − 3(1.5)² + 2(1.5) = 3.375 − 6.75 + 3.0 = −0.375 < 0 (below x-axis).

Step 3: Evaluate each region separately
Region 1 (above x-axis):

```
  A₁ = ∫₀¹ (x³ − 3x² + 2x) dx
     = [ (x⁴ / 4) − x³ + x² ]₀¹
     = (1/4 − 1 + 1) − 0
     = 1/4
```

Region 2 (below x-axis):

```
  A₂ = | ∫₁² (x³ − 3x² + 2x) dx |
```

Evaluate the integral:

```
  [ (x⁴ / 4) − x³ + x² ]₁²
  = [ (16/4 − 8 + 4) ] − [ (1/4 − 1 + 1) ]
  = [ 4 − 8 + 4 ] − [ 1/4 ]
  = 0 − 1/4
  = −1/4
```

Taking absolute value: A₂ = |−1/4| = 1/4.

Step 4: Total geometric area

```
  Total Area = A₁ + A₂ = (1/4) + (1/4) = 1/2 = 0.5 square units
```

Notice that evaluating ∫₀² (x³ − 3x² + 2x) dx directly gives (1/4) + (−1/4) = 0 (signed net area), which is incorrect for geometric area.

#### Worked example — finding the particular anti-derivative with boundary conditions

A particle moves along a horizontal line with acceleration a(t) = 6t − 4 m/s² for t ≥ 0.
At time t = 0, the particle has initial velocity v(0) = 5 m/s and initial displacement s(0) = 2 m.
1. Find the velocity function v(t).
2. Find the displacement function s(t).
3. Find the displacement of the particle at t = 3 seconds.

Part 1: Velocity function
Velocity is the anti-derivative of acceleration:

```
  v(t) = ∫ a(t) dt = ∫ (6t − 4) dt = 3t² − 4t + C₁
```

Apply initial condition v(0) = 5:

```
  v(0) = 3(0)² − 4(0) + C₁ = 5  ⇒  C₁ = 5
  v(t) = 3t² − 4t + 5
```

Part 2: Displacement function
Displacement is the anti-derivative of velocity:

```
  s(t) = ∫ v(t) dt = ∫ (3t² − 4t + 5) dt = t³ − 2t² + 5t + C₂
```

Apply initial condition s(0) = 2:

```
  s(0) = 0³ − 2(0)² + 5(0) + C₂ = 2  ⇒  C₂ = 2
  s(t) = t³ − 2t² + 5t + 2
```

Part 3: Displacement at t = 3

```
  s(3) = 3³ − 2(3)² + 5(3) + 2
       = 27 − 18 + 15 + 2
       = 26 m
```

#### Common marking-scheme mistakes

- Evaluating net signed area instead of total area by integrating across x-intercepts without splitting intervals.
- Forgetting the constant of integration C when finding indefinite anti-derivatives.
- Writing area as a negative number when evaluating regions below the x-axis.
- Mixing up displacement s(t) with total distance travelled in kinematics problems.
- Confusing anti-derivatives of exponential functions (integrating e^(kx) as k e^(kx) instead of (1/k) e^(kx)).

#### 20-minute recap before you walk in

- Fundamental Theorem of Calculus: ∫_a^b f'(x) dx = f(b) − f(a).
- Area bounded by curve and x-axis: split integral at each x-intercept and take absolute value of negative regions.
- Area between two curves: Area = ∫_a^b (y_top − y_bottom) dx.
- Kinematics links: s(t) = ∫ v(t) dt and v(t) = ∫ a(t) dt.
- Standard integrals: ∫ x^n dx = x^(n+1)/(n+1) + C; ∫ e^(kx) dx = (1/k) e^(kx) + C; ∫ (1/x) dx = ln|x| + C.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SACE Stage 2 Mathematical Methods Subject Outline also lists:

- Integration of trigonometric functions sin(kx) and cos(kx).
- Trapezoidal rule for numerical approximation of definite integrals.
- Consumer and producer surplus applications using supply and demand curves.
- Average value of a continuous function on an interval: f_avg = (1 / (b − a)) ∫_a^b f(x) dx.
- Initial value problems in cooling and dilution tank models.

Confirm the live Subject Outline on the SACE website before planning revision around these.

---

*Last updated 2026-09-24. Source: SACE Stage 2 Mathematical Methods Subject Outline, https://www.sace.sa.edu.au/en_US/web/mathematical-methods. Awarding body: SACE Board of South Australia.*