---
exam: sace-mathematical-methods
examName: SACE Stage 2 Mathematical Methods & Specialist Mathematics
subject: sace-specialist-mathematics
subjectName: Specialist Mathematics
topic: sacespec-003
topicName: Functions and Sketching Graphs
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Topic 3: Functions and Sketching Graphs — SACE Stage 2 Specialist Mathematics Notes

Topic 3 of SACE Stage 2 Specialist Mathematics covers rational functions and asymptotes, the modulus function, composite and inverse functions, and detailed curve sketching using calculus.

> Re-check the live Subject Outline on https://www.sace.sa.edu.au/web/specialist-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Rational functions.** f(x) = p(x)/q(x) where p, q are polynomials.
- **Asymptotes.** Vertical, horizontal, oblique.
- **Modulus function.** f(x) = |x|.

#### Examiner traps

- Missing oblique asymptotes.
- Confusing |x| with √(x²).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Rational functions

f(x) = p(x)/q(x). Vertical asymptotes at roots of q(x) = 0. Horizontal asymptote if deg p < deg q. Oblique asymptote if deg p = deg q + 1.

#### Modulus function

|x| = x for x ≥ 0; |x| = −x for x < 0.

#### Curve sketching

Identify domain, range, intercepts, asymptotes, stationary points (f'(x) = 0), inflection points (f''(x) = 0).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 3 prepares for integration

- Curve sketching uses calculus to identify features.

#### Year 12 planning pattern

- Term 1: Rational functions.
- Term 2: Curve sketching.

#### Common misconceptions (and the correction)

- "|x|² = x² for all x." True, but |x| ≠ √(x²) always (e.g. x = −1).

---

### Specification reference

This Topic is the third Topic of the SACE Stage 2 Specialist Mathematics Subject Outline. Confirm the live Subject Outline on sace.sa.edu.au.

#### Worked example — sketching rational functions with oblique asymptotes

Consider the rational function:

```
  f(x) = (x² − x − 2) / (x − 3)
```

1. Determine all axis intercepts.
2. Determine equations of all vertical and non-vertical asymptotes.
3. Locate stationary points and determine their coordinates.
4. Sketch the graph of f(x).

Part 1: Intercepts
- y-intercept: f(0) = (0 − 0 − 2) / (0 − 3) = −2 / −3 = 2/3. Point is (0, 2/3).
- x-intercepts: set numerator x² − x − 2 = 0:

```
  (x − 2)(x + 1) = 0  ⇒  x = 2 or x = −1
```

The x-intercepts are (2, 0) and (−1, 0).

Part 2: Asymptotes
- Vertical asymptote: denominator equals zero with non-zero numerator:
  x − 3 = 0  ⇒  x = 3.
- Oblique asymptote: divide numerator by denominator:

```
  x² − x − 2 = (x − 3)(x + 2) + 4
  f(x) = x + 2 + [ 4 / (x − 3) ]
```

As x → ±∞, the fractional term 4 / (x − 3) → 0.
Therefore, the oblique asymptote is the line y = x + 2.

Part 3: Stationary points
Differentiate f(x) = x + 2 + 4(x − 3)⁻¹:

```
  f'(x) = 1 − 4(x − 3)⁻²
```

Set f'(x) = 0:

```
  1 = 4 / (x − 3)²
  (x − 3)² = 4
  x − 3 = ±2
  x = 3 + 2 = 5  or  x = 3 − 2 = 1
```

Evaluate y-coordinates:
- At x = 1: f(1) = (1² − 1 − 2) / (1 − 3) = −2 / −2 = 1. Local maximum at (1, 1).
- At x = 5: f(5) = (5² − 5 − 2) / (5 − 3) = (25 − 7) / 2 = 18 / 2 = 9. Local minimum at (5, 9).

Part 4: Graph sketch verification
Notice that the local maximum (1, 1) sits below the local minimum (5, 9). This is the characteristic geometry of rational functions with an oblique asymptote and two disjoint branches separated by a vertical asymptote at x = 3.

#### Worked example — sketching reciprocal functions y = 1 / f(x)

Given the quadratic function f(x) = x² − 4x + 3:
1. Find intercepts and vertex of f(x).
2. Use properties of f(x) to sketch y = 1 / f(x), identifying all asymptotes and turning points.

Part 1: f(x) properties
- Factored form: f(x) = (x − 1)(x − 3).
- x-intercepts of f(x) are at x = 1 and x = 3.
- y-intercept: f(0) = 3.
- Vertex: x = 2, f(2) = 2² − 8 + 3 = −1. Local minimum at (2, −1).

Part 2: Reciprocal function y = 1 / (x² − 4x + 3)
- Vertical asymptotes: occur where f(x) = 0.
  Vertical asymptotes at x = 1 and x = 3.
- Horizontal asymptote: as x → ±∞, f(x) → ∞, so y → 0.
  Horizontal asymptote is the x-axis y = 0.
- Stationary points: a local minimum of f(x) at (2, −1) transforms into a local maximum of 1/f(x) at (2, 1/(−1)) = (2, −1).
- y-intercept: at x = 0, y = 1 / f(0) = 1/3.
- Signs:
  - For x < 1: f(x) > 0  ⇒  y > 0 (above x-axis).
  - For 1 < x < 3: f(x) < 0  ⇒  y < 0 (below x-axis).
  - For x > 3: f(x) > 0  ⇒  y > 0 (above x-axis).

#### Common marking-scheme mistakes

- Missing the oblique asymptote when the numerator degree is exactly one higher than the denominator degree.
- Drawing curves crossing vertical asymptotes (a function is undefined at its vertical asymptotes).
- Omitting the arrows and asymptote equations on graph sketches.
- Assuming 1/f(x) has turning points where f'(x) is undefined rather than where f'(x) = 0.
- Forgetting to invert y-coordinates when sketching reciprocal functions.

#### 20-minute recap before you walk in

- Vertical asymptote at x = a where denominator is zero and numerator is non-zero.
- Horizontal asymptote y = L if degree(num) ≤ degree(den); y = 0 if degree(num) < degree(den).
- Oblique asymptote y = mx + c found by polynomial division when degree(num) = degree(den) + 1.
- Reciprocal transformations: zeros of f(x) become vertical asymptotes of 1/f(x); local max of f becomes local min of 1/f.
- Absolute value transformations: y = |f(x)| reflects parts below the x-axis upward; y = f(|x|) discards x < 0 and reflects x > 0 across the y-axis.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SACE Stage 2 Specialist Mathematics Subject Outline also lists:

- Graphing functions of the form y² = f(x) and y = ±√f(x).
- Rational function behavior near removable discontinuities (holes where common factors cancel).
- Parametric curve sketching and converting between parametric and Cartesian forms.
- Piecewise defined functions with jump discontinuities and cusps.
- Sign diagrams for first and second derivatives to justify turning points and inflection points.

Confirm the live Subject Outline on the SACE website before planning revision around these.

---

*Last updated 2026-09-24. Source: SACE Stage 2 Specialist Mathematics Subject Outline, https://www.sace.sa.edu.au/web/specialist-mathematics. Awarding body: SACE Board of South Australia.*