---
exam: gate
examName: "GATE"
subject: mathematics
subjectName: "Engineering Maths"
topic: engine-003
topicName: "Differential Equations"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Differential Equations

### 🟢 Lite — Quick Review (1h–1d)

**Core Types & Formulas**

| Type | Equation | Solution Form |
|------|----------|--------------|
| Variable separable | dy/dx = f(x)g(y) | ∫dy/g(y) = ∫f(x)dx |
| Linear (1st order) | dy/dx + Py = Q | IF = e^(∫Pdx), solution: y·IF = ∫Q·IF dx |
| Bernoulli | dy/dx + Py = Qyⁿ | Substitute z = y^(1-n) |
| Clairaut's | y = px + f(p) | General: y = cx + f(c), Singular via dp/dx = 0 |
| Homogeneous | dy/dx = f(y/x) | Substitute v = y/x |

**Integrating Factor (IF):** μ(x) = e^(∫P dx) for linear DE dy/dx + P(x)y = Q(x)

**Orthogonal Trajectories:** For family F(x,y,c)=0, replace dy/dx → −dx/dy, then solve.

**⚡ GATE Quick-Check:** Know when to use separation of variables vs linear — it's the most common mistake.

---

### 🟡 Standard — Regular Study (2d–2mo)

## First-Order Differential Equations

### Variable Separable
Rewrite as f(y)dy = g(x)dx, integrate both sides.

**Example:** dy/dx = xy → (1/y)dy = x dx → ln|y| = x²/2 + C

### Linear Differential Equations
**Standard form:** dy/dx + P(x)y = Q(x)

**Integrating Factor:** μ(x) = exp(∫P dx)

**Solution:**
$$y \cdot \mu(x) = \int Q(x) \cdot \mu(x)  dx + C$$

**Example (GATE 2020):** dy/dx + y/x = x² → IF = e^(∫1/x dx) = x → d/dx(yx) = x³ → yx = x⁴/4 + C → y = x³/4 + C/x

### Bernoulli Equation
**Form:** dy/dx + P(x)y = Q(x)yⁿ, where n ≠ 0, 1

**Reduction:** Let z = y^(1-n), then dz/dx + (1-n)P(x)z = (1-n)Q(x)

**Example:** dy/dx + y/x = y² → here n=2 → z = y^(−1) → dz/dx − z/x = −1 → solve with IF = 1/x → ...

### Clairaut's Equation
**Form:** y = px + f(p), where p = dy/dx

**General solution:** Replace p with arbitrary constant c: y = cx + f(c) — a family of straight lines

**Singular solution:** Eliminate p from (i) y = px + f(p) and (ii) x + f'(p) = 0 → gives envelope curve

### Orthogonal Trajectories (OT)

For family F(x,y,c)=0:
1. Differentiate to get dy/dx
2. Replace dy/dx with −dx/dy (perpendicular slope)
3. Solve the resulting DE

**Example:** Family y = cx² → dy/dx = 2cx → OT: replace with −dx/dy = 1/(2cx) → leads to solving via separation...

**⚡ Common Trap:** Don't forget constant of integration C — GATE often tests whether you track it correctly.

---

### 🔴 Extended — Deep Study

## Integrating Factor — Detailed Derivation

For dy/dx + Py = Q:
- Multiply both sides by IF = e^(∫Pdx):
$$e^{\int P dx}\frac{dy}{dx} + P e^{\int P dx}y = Q e^{\int P dx}$$
- Left side = d/dx[y·e^(∫Pdx)], so:
$$\frac{d}{dx}[y \cdot e^{\int P dx}] = Q \cdot e^{\int P dx}$$
- Integrate: y·e^(∫Pdx) = ∫Q·e^(∫Pdx) dx + C

**GATE Pattern:** Questions often give P(x) as a rational function — practice integrating rational functions quickly.

## Exact Equations

**Test:** M(x,y)dx + N(x,y)dy = 0 is exact if ∂M/∂y = ∂N/∂x

**Solution:** Find ψ(x,y) such that ∂ψ/∂x = M and ∂ψ/∂y = N → ψ(x,y) = C

**IF for non-exact:** If (∂M/∂y − ∂N/∂x)/N depends only on x → IF = exp(∫(∂M/∂y − ∂N/∂x)/N dx)

## Bernoulli — Complete Treatment

**Problem:** dy/dx + (1/x)y = y²/x³

**Solution:**
- Here n=2, so z = y^(−1)
- dz/dx − (1/x)z = −1/x³
- IF = exp(∫−1/x dx) = exp(−ln|x|) = 1/x
- d/dx(z/x) = −1/x⁴ → z/x = ∫−1/x⁴ dx = 1/(3x³) + C
- z = x²/3 + Cx → 1/y = x²/3 + Cx

## Orthogonal Trajectories — Worked Example

**Family:** x² + y² = c (circles centred at origin)

1. Differentiate: 2x + 2yy' = 0 → y' = −x/y
2. OT condition: y'_(OT) = +y/x (perpendicular slope = reciprocal positive)
3. dy/dx = y/x → separate: dy/y = dx/x → ln|y| = ln|x| + C → y = kx

**Result:** OT of circles x² + y² = c is the family of straight lines y = kx through origin. ✓ Makes sense: radial lines are perpendicular to circles.

## GATE Previous-Year Highlights

| Year | Problem | Key Concept |
|------|---------|-------------|
| 2019 | Solve dy/dx + 2y = e^(−2x) | Linear with IF = e^(2x) |
| 2020 | Bernoulli: dy/dx + y/x = y² | Substitution z = 1/y |
| 2021 | Orthogonal trajectories of y = ce^x | OT: dy/dx = −e^x/y → separable |
| 2022 | Clairaut's: y = px + p² | General: y = cx + c², Singular: from x + 2p = 0 |
| 2023 | Exact DE: (e^x sin y + 2x) dx + (e^x cos y + 2y) dy = 0 | Check ∂M/∂y = ∂N/∂x |

**⚡ GATE Warning:** Bernoulli's equation is frequently tested with n=2 (y²). If you see y² or 1/y in the equation, immediately try Bernoulli's substitution.

---

*Content adapted based on your selected roadmap duration and GATE exam preparation timeline.*
