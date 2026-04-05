---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-011
topicName: DE
weight: 5
country: india
generated: "2026-03-24T08:32:07.938769"
diagramPrompt: Mathematical diagram showing DE concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# DE

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**DE** — Quick Facts
First order linear: dy/dx + P(x)y = Q(x); IF = e^(∫P dx); solution: y(IF) = ∫Q(IF)dx + C
Separable: dy/dx = f(x)g(y) → ∫dy/g(y) = ∫f(x)dx + C
Homogeneous: dy/dx = f(y/x); substitute y = vx, dy/dx = v + x(dv/dx)
Exact equation: ∂M/∂x = ∂N/∂y for Mdx + Ndy = 0; IF if not exact (often μ = x^m y^n)
⚡ Exam tip: Always check if equation is separable before trying other methods

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**DE** — Study Guide

#### First Order Differential Equations

**Separable form**: dy/dx = f(x)/g(y) can be rearranged as g(y)dy = f(x)dx. Integrate both sides:
$$\int g(y) dy = \int f(x) dx + C$$

Example: dy/dx = xy. Separating: dy/y = x dx. Integrating: ln|y| = x²/2 + C → y = Ae^(x²/2)

**Homogeneous equation**: dy/dx = f(y/x). Substitute y = vx, dy/dx = v + x(dv/dx):
$$v + x\frac{dv}{dx} = f(v) \implies x\frac{dv}{dx} = f(v) - v$$

Example: dy/dx = (x² + y²)/xy = x/y + y/x. Setting y = vx: v + x(dv/dx) = 1/v + v → x(dv/dx) = 1/v → v dv = dx/x → v² = 2 ln|x| + C → (y/x)² = 2 ln|x| + C

**Linear equation** (first order): dy/dx + P(x)y = Q(x)

Integrating Factor (IF) = e^(∫P dx). Solution:
$$y \cdot e^{\int P dx} = \int Q(x) \cdot e^{\int P dx} dx + C$$

Example: dy/dx + 2y = e³ˣ. Here P = 2, Q = e³ˣ. IF = e^(∫2 dx) = e²ˣ.
Solution: y·e²ˣ = ∫e³ˣ·e²ˣ dx + C = ∫e⁵ˣ dx + C = e⁵ˣ/5 + C
y = e⁻²ˣ(e⁵ˣ/5 + C) = e³ˣ/5 + Ce⁻²ˣ

#### Exact Differential Equations

Equation M(x,y)dx + N(x,y)dy = 0 is exact if ∂M/∂y = ∂N/∂x.

If exact: ∂ψ/∂x = M and ∂ψ/∂y = N → solution is ψ(x,y) = C.

Example: (2xy² + 3x³)dx + (2x²y + 4y³)dy = 0
M = 2xy² + 3x³, N = 2x²y + 4y³
∂M/∂y = 4xy, ∂N/∂x = 4xy → exact ✓
ψ: ∂ψ/∂x = M → ψ = ∫(2xy² + 3x³)dx = x²y² + (3/4)x⁴ + h(y)
∂ψ/∂y = 2x²y + h'(y) = N = 2x²y + 4y³ → h'(y) = 4y³ → h(y) = y⁴ + C
Solution: x²y² + (3/4)x⁴ + y⁴ = C'

**Non-exact equations**: Find integrating factor μ(x,y). Common cases:
- If (∂M/∂y - ∂N/∂x)/N depends only on x: μ(x) = exp(∫[(∂M/∂y - ∂N/∂x)/N]dx)
- If (∂N/∂x - ∂M/∂y)/M depends only on y: μ(y) = exp(∫[(∂N/∂x - ∂M/∂y)/M]dy)

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**DE** — Comprehensive Notes

#### Linear Differential Equations of Higher Order

**Second order linear**: d²y/dx² + P(x)dy/dx + Q(x)y = R(x)

**Homogeneous** (R = 0): Form characteristic equation r² + Pr + Q = 0.

Case 1: Two real distinct roots r₁, r₂ → y = Ae^(r₁x) + Be^(r₂x)
Case 2: Two equal roots r → y = (A + Bx)e^(rx)
Case 3: Complex roots α ± iβ → y = e^(αx)[A cos(βx) + B sin(βx)]

**Non-homogeneous** (R ≠ 0): General solution = Complementary Function (CF) + Particular Integral (PI)

Methods for PI:
- **Method of undetermined coefficients**: For forms like e^(ax), xⁿ, sin(bx), cos(bx)
- **Variation of parameters**: More general, uses determinant formula
- **Operator method**: D = d/dx, treat DE as operator equation

**Annihilator method** (useful for JEE): If R(x) = e^(ax)·polynomial in x of degree n, try PI of form x^s · e^(ax) · polynomial in x of degree n, where s is smallest integer making PI linearly independent from CF.

#### Clairaut's and Lagrange's Equations

**Clairaut's DE**: y = xp + f(p) where p = dy/dx
Solution: y = Cx + f(C) (general solution) + envelope given by eliminating C between y = Cx + f(C) and 0 = x + f'(C)

**Lagrange's DE**: y = xp + f(p)
Solution: express as x = f₁(p) + f₂(p)/x or use parameter substitution with t = p

#### Differential Equations of Second Order Reducible to First Order

**Type 1**: d²y/dx² = f(x) → integrate twice: dy/dx = ∫f(x)dx + C₁, y = ∫[∫f(x)dx]dx + C₁x + C₂

**Type 2**: d²y/dx² = f(y) → multiply both sides by 2dy/dx and integrate:
$$2\frac{d^2y}{dx^2}\frac{dy}{dx} = \frac{d}{dx}\left(\frac{dy}{dx}\right)^2$$
$$\left(\frac{dy}{dx}\right)^2 = 2\int f(y) dy + C_1 \implies \frac{dy}{dx} = \pm\sqrt{g(y) + C_1}$$

**Type 3**: d²y/dx² = f(dy/dx) → substitute p = dy/dx, then d²y/dx² = dp/dx = (dp/dy)(dy/dx) = p(dp/dy). Equation becomes p(dp/dy) = f(p), separable in p and y.

#### Orthogonal Trajectories

Two families of curves are orthogonal if their differential equations satisfy:
$$left(frac{dy}{dx}right)_{Family_1} \cdot left(frac{dy}{dx}right)_{Family_2} = -1$$

**Procedure**: Given family F(x,y,C) = 0, eliminate C to get DE: dy/dx = f(x,y). Replace dy/dx with -1/(dy/dx) for orthogonal trajectories, then solve.

Example: Family y = Cx² (parabolas through origin). dy/dx = 2Cx = 2(y/x²)x = 2y/x. OT: dy/dx = -x/(2y). Separating: 2y dy = -x dx → y² = -x²/2 + k → x² + 2y² = constant. OT is family of ellipses.

#### Series Solutions (Frobenius Method)

For DE with singular points, solution may be power series:
$$y = \sum_{n=0}^{\infty} a_n (x - x_0)^n$$

Substitute into DE and equate coefficients. Important for Legendre and Bessel equations:
- Legendre: (1-x²)y'' - 2xy' + n(n+1)y = 0 → Pₙ(x) polynomials
- Bessel: x²y'' + xy' + (x² - ν²)y = 0 → Jₙ(x) Bessel functions of first kind

**JEE relevance**: Not directly asked but Legendre polynomials appear in physics (multipole expansions).

#### Electrical Circuit DE (RC, RL, RLC)

**RC circuit**: E = q/C + Ri = E = q/C + R(dq/dt)
Solution: q(t) = CE(1 - e^(-t/RC)) for charging; q(t) = q₀e^(-t/RC) for discharging

**RL circuit**: E = L(di/dt) + Ri
Solution: i(t) = (E/R)(1 - e^(-Rt/L)) for turn-on

**LC circuit** (no R): d²q/dt² + q/(LC) = 0 → q = q₀ cos(ωt + φ) where ω = 1/√(LC)
Simple harmonic motion analog.

**RLC series**: L(d²q/dt²) + R(dq/dt) + q/C = E(t)
Natural frequency ω₀ = 1/√(LC). Damped frequency ω' = √(ω₀² - (R/2L)²)

⚡ **Exam tips for JEE Advanced**:
1. Linear DE with constant coefficients: always find characteristic equation first
2. For repeated roots in characteristic equation, solution includes x, x² etc multiplied by e^(rx)
3. Forcing function e^(ax)·sin(bx) or e^(ax)·cos(bx) → trial PI as e^(ax)[A cos(bx) + B sin(bx)]
4. Method of variation of parameters: Wronskian W = y₁y₂' - y₂y₁' appears in formula
5. Clairaut's equation: envelope gives singular solution (usually a curve not in general solution)
6. Before solving, check if separable → homogeneous → linear → exact flow
7. For orthogonal trajectories, always replace dy/dx with -dx/dy (reciprocal negative) in the DE
8. If initial condition given, use it to find constants — constants often cancel in useful ways
9. Growth-Decay problems: dN/dt = kN → N = N₀e^(kt); Newton's law of cooling: dT/dt = -k(T - T₀)

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
