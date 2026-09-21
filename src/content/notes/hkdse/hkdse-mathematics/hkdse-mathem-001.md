---
exam: hkdse
examName: Hong Kong Diploma of Secondary Education (HKDSE)
subject: hkdse-mathematics
subjectName: Mathematics (Compulsory Part)
topic: hkdse-mathem-001
topicName: "Number and Algebra — Quadratic Equations and Functions"
weight: 5
country: hongkong
generated: "2026-09-20T14:00:00"
lastUpdated: "2026-09-20"
---

# Number and Algebra — Quadratic Equations and Functions — HKDSE Mathematics Notes

This topic covers the four published Number and Algebra learning units that together carry the largest share of marks in the HKDSE Mathematics Compulsory Part: quadratic equations in one unknown; functions and graphs; exponential and logarithmic functions; and the foundation algebra work that recurs across the rest of the strand. These units are tested on both Paper 1 (Section A and Section B) and Paper 2 (multiple-choice). The cross-cutting skill is the ability to move between algebraic, graphical and numerical representations of the same relationship.

> Verify the live Compulsory Part unit list and the assessment framework on https://www.hkeaa.edu.hk/ before planning revision around the structure below. The Compulsory Part was revised for progressive implementation from Secondary 4 in the 2023/24 school year.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Quadratic equation in one unknown** ax² + bx + c = 0 with a ≠ 0. Solve by factorisation, completing the square, or the quadratic formula x = (-b ± √(b² - 4ac)) / 2a.
- **Discriminant** Δ = b² - 4ac. Δ > 0 two distinct real roots, Δ = 0 one repeated root, Δ < 0 no real roots.
- **Sum and product of roots** for ax² + bx + c = 0: sum = -b/a, product = c/a (use these to set up quadratic equations from given roots).
- **Functions and graphs**: domain (input), range (output), composite function f(g(x)), inverse function f⁻¹(x) (and the relationship between the graph of f and f⁻¹ as reflections in y = x).
- **Exponential functions**: y = a^x with a > 0, a ≠ 1. y = e^x is the natural exponential; the gradient at any point equals the y-value.
- **Logarithmic functions**: y = log_a(x) is the inverse of y = a^x. Laws: log(xy) = log x + log y, log(x/y) = log x - log y, log(x^k) = k log x. Change of base: log_a(x) = ln(x) / ln(a).

#### Examiner traps

- Dividing by x when solving 2x² + 3x - 2 = 0 and losing the root x = 0 — always move everything to one side before dividing.
- Forgetting that log(xy) requires x > 0 and y > 0 — domain errors in logarithmic equations.
- Treating the discriminant as part of the answer rather than a tool — state Δ, give the conclusion, then state the roots.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Quadratic equations

A quadratic equation ax² + bx + c = 0 has at most two real roots. Three methods are tested:

1. **Factorisation.** Find two numbers whose product is ac and whose sum is b. Example: 2x² + 7x + 3 = 0 → 2x² + 6x + x + 3 = 0 → 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3) = 0 → x = -1/2 or x = -3.
2. **Completing the square.** Rewrite as a(x + h)² + k = 0. Example: x² - 6x + 5 = (x - 3)² - 4 = 0 → (x - 3)² = 4 → x - 3 = ±2 → x = 5 or x = 1.
3. **Quadratic formula.** x = (-b ± √(b² - 4ac)) / 2a. Use this when factorisation is not obvious or the discriminant is required.

For an equation with parameters (a, b, c in terms of k), work with the discriminant first to find the values of k for which real roots exist, then solve for the roots.

#### Functions and graphs

A **function** f: A → B is a rule that assigns each element x ∈ A to exactly one element f(x) ∈ B. The **domain** is the set of all permissible inputs; the **range** is the set of all outputs.

- **Composite function** fg(x) means f(g(x)) — apply g first, then f.
- **Inverse function** f⁻¹(x) reverses the mapping; it exists only if f is one-to-one. The graph of f⁻¹ is the reflection of the graph of f in the line y = x.

For functions with restricted domains (e.g. f(x) = x² with x ≥ 0), the inverse is well-defined on the restricted domain.

#### Exponential and logarithmic functions

An exponential function y = a^x grows by a constant multiplicative factor over equal intervals of x. With a > 1, it is increasing; with 0 < a < 1, it is decreasing. The base e ≈ 2.71828 is used throughout science and finance.

Logarithms are the inverse of exponentials:

- log_a(a^x) = x
- a^(log_a(x)) = x for x > 0
- ln(x) is log_e(x)

**Laws** (x, y > 0):

- log_a(xy) = log_a(x) + log_a(y)
- log_a(x/y) = log_a(x) - log_a(y)
- log_a(x^k) = k log_a(x)
- log_a(x) = log_b(x) / log_b(a) (change of base)

**Modelling.** Use y = a·b^x when growth or decay is by a constant percentage each period (b = 1 + r for growth rate r; b = 1 - r for decay rate r). Use y = a + b·log(x) for logarithmic relationships.

#### Worked example

Solve 2^(2x+1) = 5·2^x.

Let u = 2^x. Then 2^(2x+1) = 2·2^(2x) = 2·u². Equation: 2u² = 5u → 2u² - 5u = 0 → u(2u - 5) = 0. Since u = 2^x > 0, take u = 5/2 → 2^x = 5/2 → x = log_2(5/2).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why this topic underpins every other Number and Algebra unit

- **Polynomials** extend the factor theorem and remainder theorem from quadratics to higher degree. A quadratic with a known factor can be reduced to a linear factor.
- **Equations and inequalities** use the quadratic as a boundary case — solve f(x) = 0 first, then sign-test f(x) at the boundary points to find solution regions for f(x) ≥ 0 or f(x) < 0.
- **Sequences and variation** reduce to quadratic or exponential models — geometric sequences with ratio r are equivalent to exponential functions of n.
- **Coordinate geometry** uses the quadratic graph to find the axis of symmetry, vertex, and intersection points between a parabola and a line.

#### Exam technique

- Show every step of factorisation. Partial credit on a 5-mark question depends on visible working.
- For discriminant problems, write Δ = b² - 4ac explicitly and state the condition (e.g. "Δ > 0 for two distinct real roots") before solving.
- For logarithmic equations, always state the domain (x > 0) in the answer; some HKDSE questions give a mark just for the domain.
- Use graph sketching for inverse and composite function problems — visualise the transformation, then derive the algebraic form.

#### Common misconceptions (and the correction)

- "If a quadratic has no real roots, it has no graph." It has a graph (a parabola), but the parabola lies entirely above (or below) the x-axis.
- "log(x) + log(y) = log(x + y)." It is log(xy), not log(x + y).
- "The discriminant tells you the roots." The discriminant tells you the *number* and *nature* of the roots; solving still requires the quadratic formula or factorisation.
- "Every function has an inverse." Only one-to-one functions have inverses over the whole domain.

#### Specification reference

Topic covers the Compulsory Part Units 1-3 of the CDC/HKEAA Mathematics Curriculum and Assessment Guide (Secondary 4 - 6): "Quadratic equations in one unknown", "Functions and graphs", and "Exponential and logarithmic functions". These three units carry significant weight on both Paper 1 and Paper 2. Higher-tier Extended Part Module 2 (Algebra and Calculus) extends into surds, binomial expansion, and additional algebraic structures. Confirm the live assessment framework on hkeaa.edu.hk before final revision.

---

*Last updated 2026-09-20. Source: HKDSE Mathematics Assessment Framework, https://www.hkeaa.edu.hk/DocLibrary/HKDSE/Subject_Information/math/2026hkdse-e-math.pdf; CDC/HKEAA Mathematics Curriculum and Assessment Guide (Secondary 4 - 6), https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/Math_CAGuide_e_2015.pdf. Compulsory Part unit boundaries, Extended Part module choices, and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*