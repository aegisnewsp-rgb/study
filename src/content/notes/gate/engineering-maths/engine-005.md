---
exam: gate
examName: "GATE"
subject: mathematics
subjectName: "Engineering Maths"
topic: engine-005
topicName: "Partial Differential Equations"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Partial Differential Equations

### 🟢 Lite — Quick Review (1h–1d)

**Key Concepts**

| Topic | Core Idea | Method |
|-------|-----------|--------|
| First-order linear PDE | uₓ + a·u_y = 0 (Lagrange's) | Solve via auxiliary equations: dx/P = dy/Q = dz/R |
| Second-order classification | Discriminant B² − 4AC | Elliptic (B² < 4AC), Parabolic (B² = 4AC), Hyperbolic (B² > 4AC) |
| Heat equation | ∂u/∂t = k ∂²u/∂x² | Separate variables → series solution |
| Wave equation | ∂²u/∂t² = c² ∂²u/∂x² | d'Alembert's formula or series |
| Laplace equation | uₓₓ + u_yy = 0 | Harmonic functions |

**⚡ Quick记住:** Heat → parabolic (diffusion), Wave → hyperbolic (oscillation), Laplace → elliptic (steady-state)

---

### 🟡 Standard — Regular Study (2d–2mo)

## First-Order Linear PDEs

### Standard Form
$$P(x,y,z)p + Q(x,y,z)q = R(x,y,z)$$
where p = ∂z/∂x, q = ∂z/∂y

### Lagrange's Method (Charpit's Method)

**Auxiliary equations:**
$$\frac{dx}{P} = \frac{dy}{Q} = \frac{dz}{R}$$

Solve two independent equations from these ratios:

1. **First integral φ(x,y,z) = c₁** — from solving the auxiliary system
2. **Second integral ψ(x,y,z) = c₂** — another independent solution

**General solution:** Φ(c₁, c₂) = 0 or equivalently φ(x,y,z) = f(ψ(x,y,z))

**Example:** xp + yq = z → P=x, Q=y, R=z
- Aux: dx/x = dy/y = dz/z
- From dx/x = dy/y → ln x = ln y + const → x/y = c₁
- From dx/x = dz/z → x/z = c₂
- General: φ(x/y, x/z) = 0 → or x/z = f(x/y)

**⚡ GATE Trick:** When two of P, Q, R are zero or proportional, the method simplifies dramatically.

### Special Cases

**Linear homogeneous:** z = f(ax + by) works for first-order linear with constant coefficients

**Quasi-linear:** Use method of characteristics — parametric solution along curves.

## Classification of Second-Order PDEs

### General Form
$$A \frac{\partial^2 u}{\partial x^2} + B \frac{\partial^2 u}{\partial x \partial y} + C \frac{\partial^2 u}{\partial y^2} + \cdots = 0$$

**Classification by discriminant:** Δ = B² − 4AC

| Δ | Type | Canonical Form | Physical Analogy |
|---|------|---------------|-----------------|
| Δ < 0 | **Elliptic** | Laplace/Poisson | Steady-state, no time |
| Δ = 0 | **Parabolic** | Heat equation | Diffusion, dissipation |
| Δ > 0 | **Hyperbolic** | Wave equation | Oscillation, propagation |

**⚡ GATE remembers:** Heat conducts (parabolic — one time derivative), Waves oscillate (hyperbolic — second time derivative), Laplace is static (elliptic).

## Standard PDEs — Solutions

### Heat Equation: ∂u/∂t = k ∂²u/∂x²

**Boundary conditions (common):**
- u(0,t) = 0, u(L,t) = 0 (insulated ends)
- Initial: u(x,0) = f(x)

**Solution method:** Separation of variables
1. Assume u(x,t) = X(x)T(t)
2. X''/X = T'/(kT) = −λ (separation constant, must be negative)
3. X(x) = sin(nπx/L), T(t) = e^(−k(nπ/L)²t)
4. Fourier series: u(x,t) = ΣAₙ sin(nπx/L) e^(−kλₙt)

### Wave Equation: ∂²u/∂t² = c² ∂²u/∂x²

**d'Alembert's Solution** (infinite string, no boundaries):
$$u(x,t) = \frac{1}{2}[f(x+ct) + f(x-ct)]$$

**For finite string (0,x,L):** Series solution with sin terms, frequency ωₙ = nπc/L

### Laplace Equation: uₓₓ + u_yy = 0

**Rectangular domain:** Fourier series solution
**Circular domain:** Use polar coordinates, separation gives Bessel functions

**Key property:** Maximum principle — maximum/minimum of u occurs on the boundary.

---

### 🔴 Extended — Deep Study

## Lagrange's Method — Detailed Derivation

For PDE: P p + Q q = R

The auxiliary equations dx/P = dy/Q = dz/R yield:
- Two first integrals: φ₁(x,y,z) = c₁, φ₂(x,y,z) = c₂
- These give curves (characteristics) along which z is constant
- General solution: F(φ₁, φ₂) = 0 where F is arbitrary

**Solved Example (GATE 2022 pattern):**
PDE: (y²) p + (x) q = z

Auxiliary: dx/y² = dy/x = dz/z

From dx/y² = dy/x → x dx = y dy → x² − y² = c₁

From dy/x = dz/z → (1/x)dy = dz/z → integrate: ln y = ln z + const → y/z = c₂

General solution: F(x² − y², y/z) = 0 or z = y·f(x² − y²) ✓

## Canonical Forms — Transformation Approach

For hyperbolic: Use coordinates ξ = y − x√Δ, η = y + x√Δ to reduce to u_ξη = 0

For parabolic: Reduce to heat equation canonical form u_ξξ = u_η

For elliptic: Rotate axes to eliminate mixed derivative term (B → 0)

**GATE rarely asks canonical transformation directly**, but understanding WHY the classification matters helps:

- Elliptic → boundary value problems (solved with Fourier series in rectangular domains)
- Hyperbolic → initial value problems (d'Alembert or series)
- Parabolic → initial-boundary value problems (series solution with exponential decay)

## Heat Equation — Series Solution Detail

**Example:** u(x,0) = sin(πx/L), ends at 0°C

1. u(x,t) = ΣBₙ sin(nπx/L) e^(−k(nπ/L)²t)
2. Bₙ from Fourier sine series of initial condition
3. For sin(πx/L): B₁ = 1, all others = 0
4. Solution: u(x,t) = sin(πx/L) e^(−k(π/L)²t)

**⚡ Key insight:** All modes decay exponentially. Higher modes (large n) decay faster. As t→∞, u→0 (heat dissipates).

## d'Alembert's Solution — Wave Equation

For wave equation on infinite domain with initial displacement f(x):

u(x,t) = ½[f(x+ct) + f(x-ct)] — this is the forward traveling wave form

For a half-line or string with fixed end, use method of images (reflect the initial condition).

**Physical meaning:** Disturbance splits into two waves traveling left and right at speed c.

## GATE Previous-Year Highlights

| Year | Problem | Key Concept |
|------|---------|-------------|
| 2018 | Classify: uₓₓ + 5uₓᵧ + uᵧᵧ = 0 | Δ = 25−4 = 21 > 0 → Hyperbolic |
| 2019 | Solve p + q = 1 (Lagrange) | Aux: dx/1 = dy/1 = dz/1 → x−y=c₁, z−x=c₂ |
| 2020 | Heat eqn: uₜ = uₓₓ, u(0,t)=u(π,t)=0 | Eigenfunctions sin(nx), λₙ = n² |
| 2021 | Laplace in rectangle 0<x<a, 0<y<b | Double Fourier series |
| 2022 | d'Alembert: uₜₜ = c²uₓₓ, f(x)=sin x | u = ½[sin(x+ct) + sin(x-ct)] |
| 2023 | Classify: 4uₓₓ + 6uₓᵧ + 9uᵧᵧ = 0 | Δ = 36 − 144 = −108 < 0 → Elliptic |

**⚡ GATE Warning:** The classification question (Δ < 0, = 0, > 0) is a recurring 1-2 mark question. Memorize the table above.

---

*Content adapted based on your selected roadmap duration and GATE exam preparation timeline.*
