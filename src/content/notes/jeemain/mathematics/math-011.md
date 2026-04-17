---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-011
topicName: Differentiation
weight: 5
country: india
generated: "2026-04-17T22:50:00.000000"
diagramPrompt: "Clean educational diagram showing Differentiation derivative as slope of tangent with clear labels, white background, color-coded curves, exam-style illustration"





---
# Differentiation

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Differentiation** — Key Facts for JEE Main
Derivative: rate of change of function with respect to variable; f'(x) = dy/dx = lim(h→0) [f(x+h) − f(x)]/h
dy/dx represents slope of tangent to curve at point (x, y)
Second derivative: d²y/dx² = derivative of dy/dx
Standard derivatives: d/dx(x^n) = nx^{n−1}; d/dx(sin x) = cos x; d/dx(e^x) = e^x; d/dx(ln x) = 1/x
Chain rule: d/dx[f(g(x))] = f'(g(x)) · g'(x)
⚡ Exam tip: JEE Main tests chain rule heavily — always identify the outer and inner functions before differentiating!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Differentiation** — JEE Main Study Guide

**Basic differentiation formulas:**
- d/dx(x^n) = nx^{n−1} (power rule)
- d/dx(constant) = 0
- d/dx(e^x) = e^x
- d/dx(a^x) = a^x · ln a
- d/dx(ln x) = 1/x
- d/dx(log_a x) = 1/(x · ln a)

**Trigonometric derivatives:**
- d/dx(sin x) = cos x
- d/dx(cos x) = −sin x
- d/dx(tan x) = sec²x
- d/dx(cot x) = −cosec²x
- d/dx(sec x) = sec x tan x
- d/dx(cosec x) = −cosec x cot x

**Inverse trig derivatives:**
- d/dx(sin⁻¹x) = 1/√(1−x²)
- d/dx(cos⁻¹x) = −1/√(1−x²)
- d/dx(tan⁻¹x) = 1/(1+x²)
- d/dx(cot⁻¹x) = −1/(1+x²)

**Product rule:** d/dx(f·g) = f'·g + f·g'
**Quotient rule:** d/dx(f/g) = (f'·g − f·g')/g²
**Chain rule:** d/dx[f(g(x))] = f'(g(x)) · g'(x)

**Parametric differentiation:**
If x = f(t), y = g(t), then dy/dx = (dy/dt)/(dx/dt) = g'(t)/f'(t)

**Second order derivative:**
d²y/dx² = d/dx(dy/dx); for parametric: d²y/dx² = d/dx(dy/dx)/(dx/dt)

**Implicit differentiation:**
Differentiate both sides with respect to x, treating y as function of x
For terms with y, use chain rule: d/dx(y²) = 2y · dy/dx

**Logarithmic differentiation:**
Take ln of both sides for products/quotients with powers
Example: y = x^x → ln y = x ln x → dy/dx = y(ln x + 1)

**Inverse function derivative:**
If y = f(x), then dx/dy = 1/(dy/dx) = 1/f'(x)

- **Key formula:** d/dx(x^n) = nx^{n−1}; chain rule: d/dx[f(g(x))] = f'(g(x))·g'(x)
- **Common trap:** When differentiating sin(x²), the inner function x² must also be differentiated: d/dx[sin(x²)] = cos(x²) · 2x
- **Exam weight:** 2–3 questions per year (8–12 marks); foundational for integration and applications

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Differentiation** — Comprehensive JEE Main Notes

**Successive differentiation (nth derivative):**
- d^n/dx^n (x^m) = m(m−1)...(m−n+1) · x^{m−n}
- d^n/dx^n (sin(ax+b)) = a^n sin(ax+b + nπ/2)
- d^n/dx^n (e^{ax}) = a^n e^{ax}
- d^n/dx^n (ln(ax+b)) = (−1)^{n−1} · (n−1)! · a^n/(ax+b)^n

**Leibniz theorem for nth derivative of product:**
If y = u·v, then d^n/dx^n (uv) = Σ_{k=0}^{n} C(n,k) · u^{(n−k)} · v^{(k)}
Used for products where both functions have simple nth derivatives

**Mean Value Theorem:**
If f is continuous on [a, b] and differentiable on (a, b), then there exists c ∈ (a, b) such that:
f'(c) = [f(b) − f(a)]/(b − a)
Geometrically: tangent at c is parallel to chord AB

**Rolle's Theorem:**
If f(a) = f(b), then there exists c ∈ (a, b) where f'(c) = 0
Special case of MVT

**Taylor and Maclaurin series:**
f(x) = f(a) + f'(a)(x−a)/1! + f''(a)(x−a)²/2! + ... + f^{(n)}(a)(x−a)^n/n! + R_n
At a = 0: Maclaurin series for e^x, sin x, cos x, ln(1+x)

**L'Hôpital's rule for differentiation:**
For indeterminate 0/0 or ∞/∞: lim f(x)/g(x) = lim f'(x)/g'(x) if RHS limit exists
Can be applied repeatedly

**Differentiation under integral (Leibniz rule):**
d/dx [∫_{a(x)}^{b(x)} f(x,t) dt] = f(x, b(x))·b'(x) − f(x, a(x))·a'(x) + ∫_{a(x)}^{b(x)} ∂f/∂x · dt

**Maxima and minima:**
First derivative test: f'(x) = 0 → check f''(x):
- f''(x) > 0: local minimum
- f''(x) < 0: local maximum
Second derivative test fails when f''(x) = 0 → use first derivative sign change test

**Function increasing/decreasing:**
- f'(x) > 0 on interval → f is increasing
- f'(x) < 0 on interval → f is decreasing
- Strictly monotonic: f'(x) ≥ 0 (or ≤ 0) and f'(x) = 0 only at isolated points

**Envelope and orthogonal trajectories:**
For family of curves y = f(x, c), eliminate c between y = f(x,c) and f_x(x,c) = 0 to get envelope

**Derivative of determinant:**
If D(x) = |a(x) b(x); c(x) d(x)|, then D'(x) = |a'(x) b(x); c'(x) d(x)| + |a(x) b'(x); c(x) d'(x)|

**Differential of arc length:**
ds = √[(dx)² + (dy)²]; for parametric: ds = √[(dx/dt)² + (dy/dt)²] dt

- **Remember:** Chain rule is the most important — always identify outer and inner function; d/dx[f(g(x))] = f'(g(x))·g'(x); for implicit differentiation, treat y as function of x and use chain rule on y terms
- **Previous years:** "Find derivative of e^{x²}·sin x using chain and product rule" [2023]; "If y = x^{x}, find dy/dx" [2024]; "Find d²y/dx² if x = a cos θ, y = b sin θ" [2024]

---

## 📊 JEE Main Exam Essentials

| Detail | Value |
|---|---|
| Questions | 90 (30 per subject) |
| Time | 3 hours |
| Marks | 300 (90 per subject) |
| Section | Physics (30), Chemistry (30), Mathematics (30) |
| Negative | −1 for wrong answer |
| Mode | Computer-based |

### 🎯 High-Yield Topics for JEE Main Mathematics
- Calculus (Differentiation + Integration) — ~35 marks combined
- Coordinate Geometry (straight lines, circles, conics) — ~20 marks
- Algebra (Complex Numbers, Quadratics, P&C, Probability) — ~25 marks
- Trigonometry + Inverse Trigonometry — ~15 marks
- Vector + 3D — ~15 marks

### 📝 Previous Year Question Patterns
- Differentiation: 2–3 questions per year, 8–12 marks
- Common patterns: chain rule application, differentiation of inverse functions, parametric differentiation, logarithmic differentiation, nth derivative
- Weight: very high frequency, foundational for entire calculus

### 💡 Pro Tips
- Always identify outer and inner function before applying chain rule
- For implicit differentiation, differentiate each term treating y as function of x
- For y = f(x)^g(x), use logarithmic differentiation: ln y = g(x) · ln f(x)
- Remember the derivative of e^x is e^x, and d/dx(ln x) = 1/x
- For inverse trig derivatives, memorize the domain restrictions
- Practice nth derivative problems — they appear occasionally and are scoring if you know the pattern
- For maximum/minimum, always check second derivative or first derivative sign change

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*