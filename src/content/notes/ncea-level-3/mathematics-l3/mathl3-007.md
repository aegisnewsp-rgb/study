---
exam: ncea-level-3
examName: NCEA Level 3 (Mathematics / Calculus)
subject: mathematics-l3
subjectName: Mathematics (Calculus)
topic: mathl3-007
topicName: "Apply integration methods in solving problems (91579)"
weight: 5
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Apply integration methods in solving problems (91579) — NCEA Level 3 Calculus Notes

Achievement Standard 91579 is the second of the two largest external NCEA Level 3 Calculus standards, carrying 6 credits. It tests integration techniques including substitution and integration by parts; definite integrals; area under and between curves; volumes of revolution; and differential equations. Together with 91578 (differentiation), this standard is the prerequisite for first-year university calculus.

> Verify the live assessment specification on https://www.nzqa.govt.nz/nqfdocs/ncea-resource/specifications/2026/91579-spc-2026.pdf before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **6 credits**, external NZQA examination at the end of Year 13. The other half of the calculus core at Level 3.
- Topics: integration as the reverse of differentiation; standard integrals; integration by substitution; integration by parts; definite integrals; area under and between curves; volumes of revolution; differential equations.
- **Merit** requires relational thinking — selecting the right integration technique for the function.
- **Excellence** requires extended abstract thinking — solving differential equations, justifying technique choice, generalising.

#### Examiner traps

- Forgetting the constant of integration for indefinite integrals.
- Sign errors when integrating negative functions.
- Forgetting to evaluate the bounds for definite integrals.
- Misapplying the integration by parts formula (u, v selection matters).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Standard integrals

- ∫ x^n dx = x^(n+1)/(n+1) + C (for n ≠ −1)
- ∫ e^x dx = e^x + C
- ∫ 1/x dx = ln|x| + C
- ∫ sin x dx = −cos x + C
- ∫ cos x dx = sin x + C
- ∫ sec²x dx = tan x + C
- ∫ a^x dx = a^x / ln a + C

#### Integration by substitution

When the integrand contains a function and its derivative (e.g., x and dx inside, multiplied by 2x outside), use substitution:

1. Let u = g(x), so du = g'(x) dx.
2. Substitute: ∫ f(g(x)) g'(x) dx = ∫ f(u) du.
3. Integrate with respect to u.
4. Substitute back.

Example: ∫ 2x cos(x²) dx.

Let u = x², du = 2x dx.

∫ 2x cos(x²) dx = ∫ cos u du = sin u + C = sin(x²) + C.

#### Integration by parts

When the integrand is a product of two functions of different types (e.g., polynomial × trig, polynomial × exponential), use integration by parts:

∫ u dv = uv − ∫ v du

Choose u and dv to make ∫ v du easier than the original.

For polynomial × trig or polynomial × exponential, choose u as the polynomial (so du has lower degree).

Example: ∫ x e^x dx.

Let u = x, dv = e^x dx. Then du = dx, v = e^x.

∫ x e^x dx = x e^x − ∫ e^x dx = x e^x − e^x + C = e^x (x − 1) + C.

#### Definite integrals

For ∫_a^b f(x) dx:

1. Find an antiderivative F(x).
2. Evaluate: F(b) − F(a).

The result is the signed area under the curve from a to b.

#### Area under and between curves

**Area under y = f(x) from x = a to x = b:**

A = ∫_a^b f(x) dx (if f ≥ 0 on [a, b])

If f crosses zero, integrate piecewise and take absolute values.

**Area between y = f(x) and y = g(x) from x = a to x = b:**

A = ∫_a^b |f(x) − g(x)| dx

If f ≥ g on [a, b], this simplifies to ∫_a^b (f(x) − g(x)) dx.

#### Volumes of revolution

**Disc method (rotation about x-axis):**

V = π ∫_a^b [f(x)]² dx

**Shell method (rotation about y-axis):**

V = 2π ∫_a^b x · f(x) dx

#### Differential equations

A differential equation is an equation involving a function and its derivatives. The simplest type is separable:

dy/dx = g(x) h(y)

Separate: dy / h(y) = g(x) dx.

Integrate both sides.

Example: dy/dx = 2x · y, with y(0) = 1.

dy / y = 2x dx

ln|y| = x² + C

y = A e^(x²) where A = e^C

Using y(0) = 1: 1 = A · 1, so A = 1.

y = e^(x²).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Method selection heuristic

For an integral ∫ f(x) dx, choose the method based on the form:

- **Standard form (power, e^x, sin x, cos x, 1/x)?** Direct integration.
- **Composite function with inner derivative present?** Substitution.
- **Product of polynomial and another function (trig, exp, log)?** Integration by parts.
- **Rational function?** Partial fractions (introduced at first-year university; beyond Level 3).
- **None of the above?** Numerical methods (e.g., Simpson's rule) or a computer algebra system.

#### Integration by parts selection

For ∫ u dv, the rule of thumb (LIATE) for choosing u:

- **L**ogs
- **I**nverse trig
- **A**lgebraic (polynomials)
- **T**rig
- **E**xponential

Choose u in this order. The function that appears first in the list is typically u.

#### Volumes of revolution in context

A common Excellence problem: "Find the volume of the solid generated by rotating the region bounded by y = x², y = 0, x = 2 about the x-axis."

V = π ∫_0^2 (x²)² dx = π ∫_0^2 x^4 dx = π [x^5/5]_0^2 = π (32/5) = 32π/5.

#### Common misconceptions (and the correction)

- "∫ 1/x dx = 1/x² + C." No — ∫ 1/x dx = ln|x| + C.
- "Integration by parts always works." It works for products of different function types; for some products (e.g., ∫ e^x sin x dx), it produces a cyclic equation that can be solved algebraically.
- "Volumes of revolution are in units of area." No — they are in cubic units (volume).
- "Differential equations have unique solutions." They have unique solutions if initial conditions are specified; otherwise there is a family of solutions (parametrised by the constant of integration).

#### Specification reference

This achievement standard is externally assessed by NZQA at the end of the academic year. The current assessment specification (2026) is published on nzqa.govt.nz. Re-check the live assessment specification before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 3 Mathematics 91579 assessment specification 2026, https://www.nzqa.govt.nz/nqfdocs/ncea-resource/specifications/2026/91579-spc-2026.pdf. Awarding body: NZQA.*
