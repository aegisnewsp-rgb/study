---



exam: buet-adm
examName: BUET Admission
subject: mathematics
subjectName: Mathematics
topic: math-004
topicName: Calculus
weight: 5
country: bd
generated: "2026-04-17T23:23:00.000000"
diagramPrompt: "Clean educational diagram showing Calculus derivative and integral with clear labels, white background, exam-style illustration"





---
# Calculus

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Calculus** — Key Facts for BUET
Derivative: dy/dx = lim(h→0) [f(x+h)−f(x)]/h; represents rate of change and slope of tangent
d/dx(x^n) = nx^{n−1}; d/dx(sin x) = cos x; d/dx(e^x) = e^x; d/dx(ln x) = 1/x
Integration: reverse of differentiation; ∫ x^n dx = x^{n+1}/(n+1) + C
Fundamental theorem: ∫_a^b f(x) dx = F(b) − F(a) where F' = f
⚡ Exam tip: BUET calculus is the highest-weight section — practice integration by parts and area problems extensively!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Calculus** — BUET Study Guide

**Derivative formulas:**
- d/dx(x^n) = nx^{n−1}
- d/dx(e^x) = e^x
- d/dx(a^x) = a^x ln a
- d/dx(ln x) = 1/x
- d/dx(sin x) = cos x
- d/dx(cos x) = −sin x
- d/dx(tan x) = sec²x

**Chain rule:**
d/dx[f(g(x))] = f'(g(x)) · g'(x)
Example: d/dx(sin(x²)) = cos(x²) · 2x

**Product rule:**
d/dx(f·g) = f'g + fg'

**Quotient rule:**
d/dx(f/g) = (f'g − fg')/g²

**Derivative of inverse function:**
If y = f(x), then dx/dy = 1/f'(x)

**Implicit differentiation:**
Differentiate both sides with respect to x, treating y as function of x
For d/dx(y²): use 2y · dy/dx

**Parametric differentiation:**
If x = f(t), y = g(t): dy/dx = (dy/dt)/(dx/dt)

**Second derivative:**
d²y/dx² = d/dx(dy/dx)

**Integration formulas:**
- ∫ x^n dx = x^{n+1}/(n+1) + C, n ≠ −1
- ∫ 1/x dx = ln|x| + C
- ∫ e^x dx = e^x + C
- ∫ sin x dx = −cos x + C
- ∫ cos x dx = sin x + C

**Integration by substitution:**
Let u = g(x), then du = g'(x)dx; transform integral to simpler form

**Integration by parts:**
∫ u dv = uv − ∫ v du
Choose u using LIATE: Log, Inverse trig, Algebraic, Trigonometric, Exponential

**Partial fractions:**
Decompose rational function into simpler fractions, then integrate term by term

**Definite integral:**
∫_a^b f(x) dx = F(b) − F(a)
Properties: ∫_a^b f(x) dx = −∫_b^a f(x) dx; ∫_a^b f(x) dx + ∫_b^c f(x) dx = ∫_a^c f(x) dx

**Area under curve:**
A = ∫_a^b f(x) dx (above x-axis)
For below x-axis: take absolute value

**Area between two curves:**
A = ∫_a^b |f(x) − g(x)| dx

- **Key formula:** d/dx(x^n) = nx^{n−1}; ∫ x^n dx = x^{n+1}/(n+1) + C; ∫_a^b f(x) dx = F(b) − F(a)
- **Common trap:** Chain rule: d/dx(sin(x²)) = cos(x²) · 2x, not just cos(x²); always multiply by derivative of inner function
- **Exam weight:** 5–8 questions per exam (20–32 marks); the highest weight section in BUET

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Calculus** — Comprehensive BUET Notes

**nth derivative:**
- d^n/dx^n (x^m) = m(m−1)...(m−n+1) x^{m−n}
- d^n/dx^n (e^{ax}) = a^n e^{ax}
- d^n/dx^n (sin(ax+b)) = a^n sin(ax+b + nπ/2)

**Leibniz theorem for nth derivative of product:**
d^n/dx^n (uv) = Σ C(n,k) · u^{(n−k)} · v^{(k)}

**L'Hôpital's rule:**
For 0/0 or ∞/∞ forms: lim f(x)/g(x) = lim f'(x)/g'(x) if limit exists

**Mean Value Theorem:**
If f is continuous on [a,b] and differentiable on (a,b), then ∃ c ∈ (a,b) where f'(c) = [f(b)−f(a)]/(b−a)

**Taylor series:**
f(x) = f(a) + f'(a)(x−a)/1! + f''(a)(x−a)²/2! + ...

**Maclaurin series:**
f(x) = f(0) + f'(0)x + f''(0)x²/2! + ...
- e^x = 1 + x + x²/2! + x³/3! + ...
- sin x = x − x³/3! + x⁵/5! − ...
- cos x = 1 − x²/2! + x⁴/4! − ...

**Standard limits:**
- lim(x→0) sin x/x = 1
- lim(x→0) (e^x − 1)/x = 1
- lim(x→0) (1+x)^(1/x) = e

**Reduction formulas for integration:**
For ∫ sin^n x dx: use I_n = −(sin^{n−1}x cos x)/n + (n−1)/n · I_{n−2}

**Wallis formula:**
∫_0^{π/2} sin^m x cos^n x dx = (Γ((m+1)/2)·Γ((n+1)/2)) / (2·Γ((m+n+2)/2))

**Beta and Gamma:**
B(m,n) = 2∫_0^{π/2} sin^{2m−1}x cos^{2n−1}x dx = Γ(m)Γ(n)/Γ(m+n)
Γ(n+1) = n! for positive integer n

**Area in polar coordinates:**
A = ½∫ r² dθ

**Volume of revolution:**
About x-axis: V = π∫ y² dx
Using shell method: V = 2π∫ x·f(x) dx (about y-axis with vertical strips)

**Arc length:**
s = ∫ √(1 + (dy/dx)²) dx

**Differential equations:**
First order linear: dy/dx + P(x)y = Q(x); IF = e^{∫P dx}; solution: y·IF = ∫ Q·IF dx + C
Variable separable: dy/dx = f(x)g(y) → dy/g(y) = f(x)dx

**Exact differential equation:**
M dx + N dy = 0 is exact if ∂M/∂y = ∂N/∂x

**Second order linear with constant coefficients:**
ay'' + by' + cy = 0 → characteristic equation ar² + br + c = 0

**Application problems:**
- Rate: dy/dt = (dy/dx) · (dx/dt)
- Maxima/minima: f'(x) = 0; check f''(x)
- Optimization: express quantity in one variable, find max/min

**Using substitution in definite integrals:**
When changing variable, also change limits!

**Leibniz rule for differentiation under integral:**
d/dx [∫_{a(x)}^{b(x)} f(t) dt] = f(b(x))b'(x) − f(a(x))a'(x)

- **Remember:** Chain rule for derivatives; for integration by parts use LIATE to choose u; definite integral = F(b) − F(a); L'Hôpital for 0/0 and ∞/∞
- **Previous years:** "Find derivative of x²e^x" [2023 BUET]; "Evaluate ∫ x sin x dx" [2024 BUET]; "Find area under y = x² from x = 0 to x = 2" [2024 BUET]

---

## 📊 BUET Admission Exam Essentials

| Detail | Value |
|---|---|
| Questions | Varies by year (~40-50 MCQ) |
| Time | Usually 2–3 hours |
| Marks | Varies by section |
| Subjects | Mathematics (highest weight), Physics, Chemistry |
| Negative | Usually no negative marking in BUET |
| Mode | Written + MCQ depending on year |

### 🎯 High-Yield Topics for BUET Mathematics
- Calculus (Differentiation + Integration) — highest weight (20–30 marks)
- Algebra (Quadratics, AP/GP/HP) — very high weight
- Coordinate Geometry (Circle, Conics) — high weight
- Trigonometry — medium-high weight
- Complex Numbers — medium weight

### 📝 Previous Year Question Patterns
- Calculus: 5–8 questions per exam, 20–32 marks
- Common patterns: differentiation, integration by parts, area under curve, differential equations
- Weight: very high — must master for BUET admission

### 💡 Pro Tips
- In differentiation, always apply chain rule — missing the inner derivative is the most common error
- For integration by parts: choose u using LIATE rule (Log, Inverse, Algebraic, Trigonometric, Exponential)
- When integrating rational functions, use partial fractions first
- For area problems, always sketch the curves to identify which is above/below
- Always check domain and range restrictions in calculus problems
- For maximum/minimum, find critical points (f'(x) = 0 or undefined) and evaluate endpoints

### 🔗 Official Resources
- [BUET Official](https://www.buet.ac.bd)
- [BUET Admission Portal](https://admission.buet.ac.bd)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*