---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-021
topicName: Differential Equations
weight: 3
country: india
generated: "2026-03-29T05:06:34"
---
# Differential Equations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision.

**Differential Equations** — Key Facts for CUET
• **Core definition:** A **differential equation** relates a function and its derivatives. The **order** is the highest derivative present; the **degree** is the highest power of the highest-order derivative (after removing fractions and radicals).
• **Most tested concept:** Solving **first-order linear ODEs** using an **integrating factor** µ = e^{∫P dx}, giving general solution y·µ = ∫Q·µ dx + C.
• **Common mistake:** Forgetting the constant of integration C — every indefinite solution must include it. Also misidentifying the order when the equation is given implicitly.
• **Key technique:** For **separable equations**, rewrite as f(y) dy = g(x) dx, then integrate both sides: ∫f(y) dy = ∫g(x) dx + C.
• **Important exception:** The trivial solution y = 0 is always a solution to a homogeneous linear ODE, but many problems ask for non-trivial solutions — check the problem statement before discarding y = 0.
• **Most frequent question type:** Find the **general solution** of a given differential equation, or find a **particular solution** using an initial condition (e.g., y(0) = 2).
⚡ **Exam tip:** Always check whether the equation is **exact** before searching for an integrating factor. If Mdx + Ndy = 0 and ∂M/∂y = ∂N/∂x, the solution is simply ∫M dx + ∫(N − ∂/∂y ∫M dx) dy = C.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Differential Equations** — CUET Study Guide

A **differential equation** (DE) contains derivatives of an unknown function. The **order** is the highest derivative; the **degree** is the highest power of the highest-order term after the equation is cleared of fractions and radicals. The **general solution** contains arbitrary constants equal to the order; a **particular solution** is obtained by applying initial conditions.

**Types and solution methods:**

*First-order, first-degree separable DEs:* dy/dx = g(x) h(y). Rewrite as dy/h(y) = g(x) dx, then integrate: ∫ dy/h(y) = ∫ g(x) dx + C.

*First-order linear DEs:* dy/dx + P(x) y = Q(x). Compute integrating factor µ = exp(∫ P dx). Multiply the entire equation by µ: d/dx (y·µ) = Q·µ. Integrate: y·µ = ∫ Q·µ dx + C.

*Homogeneous linear DEs with constant coefficients:* For a₂ y'' + a₁ y' + a₀ y = 0, solve the **characteristic equation** a₂ r² + a₁ r + a₀ = 0. If r₁ ≠ r₂ are real: y = C₁ e^{r₁x} + C₂ e^{r₂x}. If r₁ = r₂ = r: y = (C₁ + C₂ x) e^{rx}. If complex r = α ± iβ: y = e^{αx}[C₁ cos βx + C₂ sin βx].

*Bernoulli equation:* dy/dx + P y = Q yⁿ. Substitute u = y^{1−n} to reduce to a linear DE.

**Common patterns:**
- Forming a DE from a given general solution: differentiate until the number of constants equals the order, then eliminate the constants.
- Verifying a solution by substituting back into the DE.

**Practice Numerical 1:** Solve dy/dx = (2x y)/ (x² + 1).
- This is separable: dy/y = 2x dx/(x² + 1). Integrate: ∫ dy/y = ∫ 2x/(x² + 1) dx → ln|y| = ln|x² + 1| + C → y = C (x² + 1).

**Practice Numerical 2:** Solve dy/dx + y/(x + 1) = 3x/(x + 1), given y(0) = 2.
- Here P = 1/(x+1), Q = 3x/(x+1). Integrating factor µ = e^{∫1/(x+1) dx} = e^{ln|x+1|} = x + 1.
- Multiply: (x+1) dy/dx + y = 3x → d/dx[y(x+1)] = 3x → y(x+1) = ∫ 3x dx + C = 3x²/2 + C.
- Apply y(0) = 2: 2(1) = 0 + C → C = 2 → Particular solution: y(x+1) = 3x²/2 + 2 → y = [3x²/2 + 2]/(x+1).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer timeline.

**Differential Equations** — Comprehensive CUET Notes

**Deeper theory and proof:**

*Derivation of the integrating factor for a linear ODE:* Starting with dy/dx + P y = Q, multiply both sides by µ = e^{∫ P dx}. The left side becomes µ dy/dx + P µ y = µ dy/dx + (dµ/dx) y = d/dx (y µ). This is the key property: the left-hand side becomes the derivative of the product, making integration straightforward. The condition for this to work is that µ satisfies dµ/dx = P µ, which yields µ = e^{∫ P dx} (up to a multiplicative constant, which cancels).

*Exact differential equations and integrating factor strategy:* For M(x, y) dx + N(x, y) dy = 0, if ∂M/∂y = ∂N/∂x, the DE is exact and a potential function ψ(x, y) satisfies ∂ψ/∂x = M and ∂ψ/∂y = N. The solution is ψ(x, y) = C. If not exact, an integrating factor µ(x) or µ(y) may make it exact. For µ depending only on x: µ(x) = exp(∫ (∂M/∂y − ∂N/∂x)/N dx). For µ depending only on y: µ(y) = exp(∫ (∂N/∂x − ∂M/∂y)/M dy).

*Method of undetermined coefficients — a systematic approach:* For a non-homogeneous linear ODE with constant coefficients, guess a particular solution based on the form of the forcing term (right-hand side). If the forcing term is a polynomial of degree m, try a polynomial of the same degree. If it is e^{kx}, try Ae^{kx}. If it is a trigonometric polynomial sin/cos, try A sin bx + B cos bx. If the guess overlaps with a solution of the homogeneous equation, multiply by x (or x² if needed).

*Cauchy–Euler (equidimensional) equations:* These have the form aₙ xⁿ y⁽ⁿ⁾ + aₙ₋₁ xⁿ⁻¹ y⁽ⁿ⁻¹⁾ + … + a₀ y = 0. For a second-order Cauchy–Euler equation x² y'' + a x y' + b y = 0, try a solution of the form y = xʳ. Substituting gives the **indicial equation** r(r−1) + a r + b = 0. Solve for r: if r₁ ≠ r₂ are distinct, y = C₁ x^{r₁} + C₂ x^{r₂}; if repeated, y = (C₁ + C₂ ln x) x^{r}.

*Partial differential equations (PDEs) — a glimpse:* The heat equation u_t = α² u_{xx} and wave equation u_{tt} = c² u_{xx} are classic PDEs. In CUET context, only ODEs are tested, but recognition of PDE form is useful for cross-topic awareness: a PDE has partial derivatives with respect to more than one variable.

*Cross-topic connection — growth and decay:* Many real-world processes follow dy/dt = k y, whose solution is y(t) = y₀ e^{kt}. For a substance with half-life T½, k = −ln 2/T½. For Newton's law of cooling: dT/dt = −k(T − Tₘ), solution T(t) = Tₘ + (T₀ − Tₘ) e^{−kt}. These are standard applications in CUET.

*Challenging solved example:* Solve y'' − 4y' + 4y = e^{2x}.
- Homogeneous solution: characteristic r² − 4r + 4 = 0 → (r − 2)² = 0 → r = 2 (repeated). So y_h = (C₁ + C₂ x) e^{2x}.
- For the particular solution, the RHS is e^{2x}, which is a solution of the homogeneous equation (since e^{2x} is in y_h). Multiply the trial guess by x²: try y_p = A x² e^{2x}.
- Compute y'_p and y''_p: y_p = A x² e^{2x} → y'_p = 2A x e^{2x} + 2A x² e^{2x} = 2A x(1 + x) e^{2x} → y''_p = 2A (1 + 2x) e^{2x} + 2A x(1 + x)·2 e^{2x} = [2A + 4A x + 4A x²] e^{2x}.
- Substitute into LHS: y''_p − 4 y'_p + 4 y_p = [2A + 4A x + 4A x²] e^{2x} − 4[2A x(1 + x) e^{2x}] + 4[A x² e^{2x}] = [2A + 4A x + 4A x² − 8A x − 8A x² + 4A x²] e^{2x} = 2A e^{2x}.
- Set equal to RHS e^{2x}: 2A e^{2x} = e^{2x} → A = 1/2.
- General solution: y = (C₁ + C₂ x) e^{2x} + (1/2) x² e^{2x}.
