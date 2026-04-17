---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-015
topicName: Differential Equations
weight: 4
country: india
generated: "2026-04-17T22:54:00.000000"
diagramPrompt: "Clean educational diagram showing Differential Equation slope field with clear labels, white background, color-coded solution curves, exam-style illustration"





---
# Differential Equations

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Differential Equations** — Key Facts for JEE Main
Differential equation: equation involving derivative of unknown function
Order: highest derivative present; Degree: highest power of highest order derivative (when expressed as polynomial)
General solution: family of curves; Particular solution: specific curve satisfying given condition
First order linear: dy/dx + Py = Q; solution uses integrating factor IF = e^{∫P dx}
⚡ Exam tip: JEE Main tests solving differential equations and word problems — always find the particular solution using initial condition!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Differential Equations** — JEE Main Study Guide

**Variable separable:**
dy/dx = f(x)·g(y) → separate variables: dy/g(y) = f(x)dx → integrate both sides
General solution: ∫ dy/g(y) = ∫ f(x) dx + C

**Homogeneous differential equation:**
dy/dx = f(y/x); substitute y = vx, dy/dx = v + x·dv/dx
Result: v + x·dv/dx = f(v) → separate v and x

**Linear first order:**
dy/dx + P(x)·y = Q(x)
Integrating Factor (IF) = e^{∫P dx}
Solution: y·IF = ∫ Q·IF dx + C

**Exact differential equation:**
M(x,y)dx + N(x,y)dy = 0 is exact if ∂M/∂y = ∂N/∂x
Solution: ∫ M dx + ∫ (terms with y only from N) dy = C

**Non-exact → make exact:**
Multiply by integrating factor (function of x or y)
For IF(x): IF(x) = e^{∫(∂M/∂y − ∂N/∂x)/N dx} when this is function of x only

**Order and degree:**
Order = highest order derivative
Degree = highest power of highest order derivative (after removing fractions and radicals, polynomial in derivatives)
Not defined if: non-integer powers, fractional powers of derivative, derivatives inside log/trig functions

**Formation of DE:**
From family of curves y = f(x, c): eliminate constant(s) c by differentiating and using original equation

**Word problems:**
Common patterns: population growth/decay (dP/dt = kP), Newton's law of cooling (dT/dt = k(T−T₀)), mixing problems

- **Key formula:** Linear: y·IF = ∫ Q·IF dx + C where IF = e^{∫P dx}; Variable separable: ∫ dy/g(y) = ∫ f(x) dx + C
- **Common trap:** Don't forget the constant of integration C — it's what makes it the general solution
- **Exam weight:** 1–2 questions per year (4–8 marks); word problems are very common

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Differential Equations** — Comprehensive JEE Main Notes

**Clairaut's equation:**
y = xp + f(p) where p = dy/dx
Solution: y = cx + f(c) (general solution) plus singular solution from envelope

**Orthogonal trajectories:**
For family F(x, y, c) = 0, find differential equation by eliminating c: dy/dx = f(x, y, c)
For orthogonal trajectories, replace dy/dx by −dx/dy: orthogonal DE: dy/dx = 1/f(x, y, c)
Solve to get family of curves orthogonal to original

**Second order linear with constant coefficients:**
ay'' + by' + cy = 0 → Characteristic equation: ar² + br + c = 0
- Real distinct roots r₁, r₂: y = C₁e^{r₁x} + C₂e^{r₂x}
- Real equal roots r: y = (C₁ + C₂x)e^{rx}
- Complex roots α ± iβ: y = e^{αx}[C₁ cos βx + C₂ sin βx]

**Non-homogeneous second order:**
ay'' + by' + cy = f(x) where f(x) is particular solution form:
- f(x) = polynomial of degree n: try polynomial of same degree
- f(x) = e^{mx}: try Ae^{mx} (if m is root, multiply by x; if double root, multiply by x²)
- f(x) = sin/cos mx: try A sin mx + B cos mx

**Method of variation of parameters:**
For y'' + Py' + Qy = R(x), find two solutions y₁, y₂ of homogeneous equation, then particular solution using integrals

**Solving using substitution:**
- Bernoulli: dy/dx + P(x)y = Q(x)y^n → divide by y^n, set z = y^{1−n} → linear in z
- Cauchy-Euler: x²y'' + axy' + by = 0 → try y = x^m → get m equation

**Differential equation of family of curves:**
For n-parameter family, eliminate n constants by differentiating n times

**Physical applications:**
- Radioactive decay: dN/dt = −λN → N = N₀e^{−λt}
- Population growth: dP/dt = kP → P = P₀e^{kt}
- Newton's cooling: dT/dt = −k(T − T₀) → T = T₀ + (T₁−T₀)e^{−kt}
- Simple harmonic: d²x/dt² + ω²x = 0 → x = A sin(ωt + φ)
- Damped oscillation: d²x/dt² + 2k·dx/dt + ω²x = 0

**Differential operators:**
D = d/dx; operator P(D) = a₀D^n + a₁D^{n−1} + ... + a_n
P(D)(e^{mx}) = P(m)e^{mx}
P(D)(e^{mx}·V) = e^{mx}·P(D+m)V

**Particular solution for repeated roots:**
If m is root of multiplicity s: try x^s · (A₀ + A₁x + ... + A_{s−1}x^{s−1})e^{mx}

**Reduction of order:**
If y₁ is known solution of second order linear homogeneous, second solution y₂ = y₁∫ e^{−∫P dx}/y₁² dx

**Boundary value problems:**
Given conditions at two different points (not just one initial condition)
For second order: need two conditions to determine both constants

- **Remember:** Variable separable: dy/dx = f(x)g(y) → dy/g(y) = f(x)dx; Linear: IF = e^{∫P dx}; Exact: ∂M/∂y = ∂N/∂x; Second order homogeneous: solve characteristic equation, roots determine form
- **Previous years:** "Solve dy/dx + 2y = e^{3x}" [2023]; "Find general solution of (1+x²)dy/dx + 2xy = 1" [2024]; "Solve d²y/dx² + 4dy/dx + 4y = 0" [2024]

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
- Differential Equations: 1–2 questions per year, 4–8 marks
- Common patterns: solve first order DE, word problems, find particular solution, orthogonal trajectories
- Weight: medium frequency, high scoring

### 💡 Pro Tips
- Identify the type first: separable, homogeneous, linear, or exact
- For linear first order dy/dx + Py = Q: IF = e^{∫P dx} is the key step
- For exact equations, always verify ∂M/∂y = ∂N/∂x before proceeding
- In word problems, translate the rate condition directly into DE
- Don't forget the constant of integration — the problem may ask for general or particular solution
- For initial value problems, substitute and solve for C before writing final answer

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*