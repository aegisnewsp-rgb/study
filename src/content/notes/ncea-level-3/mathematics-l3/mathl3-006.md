---
exam: ncea-level-3
examName: NCEA Level 3 (Mathematics / Calculus)
subject: mathematics-l3
subjectName: Mathematics (Calculus)
topic: mathl3-006
topicName: "Apply differentiation methods in solving problems (91578)"
weight: 5
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Apply differentiation methods in solving problems (91578) — NCEA Level 3 Calculus Notes

Achievement Standard 91578 is one of the two largest external NCEA Level 3 Calculus standards, carrying 6 credits. It tests differentiation of polynomial, exponential, logarithmic, and trigonometric functions, including product, quotient, and chain rules; curve sketching; optimisation; related rates; and kinematics. This is the cornerstone standard for university STEM entry and is a prerequisite for first-year university calculus.

> Verify the live assessment specification on https://www.nzqa.govt.nz/nqfdocs/ncea-resource/specifications/2026/91578-spc-2026.pdf before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **6 credits**, external NZQA examination at the end of Year 13. One of the two largest credit values in Level 3 Mathematics.
- Topics: differentiation rules (power, sum, product, quotient, chain); derivatives of standard functions (sin, cos, tan, e^x, ln x, a^x, log_a x); curve sketching (stationary points, inflection points, asymptotes); optimisation; related rates; kinematics (s, v, a).
- **Merit** requires relational thinking — selecting the right differentiation rule for the function.
- **Excellence** requires extended abstract thinking — proving results, connecting kinematics to calculus, generalising.

#### Examiner traps

- Forgetting the chain rule on composite functions.
- Sign errors on derivatives of trig functions (especially d/dx(cos x) = −sin x).
- Confusing max, min, and inflection points (use the second derivative test).
- Misinterpreting the units of related rates (e.g., dV/dt has units of volume per time, not just volume).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Differentiation rules

**Power rule:** d/dx (x^n) = nx^(n−1).

**Constant multiple:** d/dx (kf(x)) = k f'(x).

**Sum/difference:** d/dx (f ± g) = f' ± g'.

**Product:** d/dx (f · g) = f'g + fg'.

**Quotient:** d/dx (f / g) = (f'g − fg') / g².

**Chain:** d/dx f(g(x)) = f'(g(x)) · g'(x).

#### Derivatives of standard functions

- d/dx (sin x) = cos x
- d/dx (cos x) = −sin x
- d/dx (tan x) = sec² x = 1/cos²x
- d/dx (e^x) = e^x
- d/dx (ln x) = 1/x
- d/dx (a^x) = a^x ln a
- d/dx (log_a x) = 1/(x ln a)

#### Curve sketching

For y = f(x):

1. Find dy/dx.
2. Find critical points (dy/dx = 0 or undefined).
3. Classify each critical point using the second derivative test: d²y/dx² > 0 means local min; < 0 means local max; = 0 means inconclusive.
4. Find inflection points (d²y/dx² = 0 and changes sign).
5. Find asymptotes (if any).
6. Plot the key features.

#### Optimisation

For optimisation problems:

1. Identify the quantity to optimise (often length, area, volume, cost).
2. Express as a function of one variable using the constraint.
3. Differentiate and set the derivative to zero.
4. Solve for the critical value.
5. Verify it is a max or min (second derivative test or context).

#### Related rates

For related rates problems:

1. Identify the variables and how they are related.
2. Differentiate the relationship with respect to time.
3. Substitute known values.
4. Solve for the unknown rate.

Example: A ladder 5 m long leans against a wall. The bottom slides away at 0.5 m/s. How fast is the top sliding down when the bottom is 3 m from the wall?

x² + y² = 25 (Pythagoras)

Differentiate: 2x dx/dt + 2y dy/dt = 0

At x = 3, y = √(25 − 9) = 4.

2(3)(0.5) + 2(4) dy/dt = 0

3 + 8 dy/dt = 0

dy/dt = −3/8 = −0.375 m/s (negative because y is decreasing).

#### Kinematics

If s(t) is position, then:

- v(t) = ds/dt (velocity)
- a(t) = dv/dt = d²s/dt² (acceleration)

For motion under constant acceleration g (e.g., gravity, neglecting air resistance):

s(t) = s₀ + v₀t + (1/2)at²
v(t) = v₀ + at
v² = v₀² + 2a(s − s₀)

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Implicit differentiation

When y is defined implicitly by F(x, y) = 0 (not solved for y), differentiate both sides with respect to x, treating y as a function of x:

d/dx (F(x, y(x))) = F_x + F_y · dy/dx = 0

Solve for dy/dx.

Example: Find dy/dx if x² + y² = 25.

2x + 2y dy/dx = 0

dy/dx = −x/y

This is the gradient of the circle x² + y² = 25 at any point (x, y).

#### The chain rule and related rates

The chain rule is the engine of related rates. Any relationship F(x, y) = 0 implicitly defines dy/dx. Differentiating with respect to time t gives:

∂F/∂x · dx/dt + ∂F/∂y · dy/dt = 0

This is the rate-of-change version of implicit differentiation.

#### Logarithmic differentiation

For y = f(x)^g(x) (a variable raised to a variable power), use logarithmic differentiation:

ln y = g(x) ln f(x)

Differentiate:

(1/y) dy/dx = g'(x) ln f(x) + g(x) f'(x) / f(x)

So:

dy/dx = y · [g'(x) ln f(x) + g(x) f'(x) / f(x)]

This is the foundation for differentiating x^x, e^x^x, and similar.

#### Common misconceptions (and the correction)

- "Product rule is just multiplication." No — d/dx (fg) = f'g + fg', not f'g'.
- "Quotient rule gives f'g'/g²." No — it gives (f'g − fg') / g².
- "Critical points are maxima." They can be minima, maxima, or inflection points; check with the second derivative test.
- "dy/dx = 0 means y = 0." No — dy/dx = 0 means the gradient is zero at that point, but y can be anything.

#### Specification reference

This achievement standard is externally assessed by NZQA at the end of the academic year. The current assessment specification (2026) is published on nzqa.govt.nz. Re-check the live assessment specification before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 3 Mathematics 91578 assessment specification 2026, https://www.nzqa.govt.nz/nqfdocs/ncea-resource/specifications/2026/91578-spc-2026.pdf. Awarding body: NZQA.*
