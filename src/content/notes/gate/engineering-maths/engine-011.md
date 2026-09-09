---
exam: gate
examName: "GATE"
subject: engineering-maths
subjectName: "Engineering-Maths"
topic: engine-011
topicName: "Numerical Methods — Linear Systems and ODEs"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-09"
---

# Numerical Methods — Linear Systems and ODEs

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Numerical Methods for Linear Systems and ODEs gives you two toolkits: solvers for **Ax = b** and integrators for **y' = f(t, y)**. Pick **direct** solvers (Gaussian elimination, LU, Thomas) when the matrix is small or dense, and **iterative** solvers (Jacobi, Gauss-Seidel, SOR) when the matrix is large and sparse. For ODEs, **Euler explicit** is the order-1 baseline, **Heun/modified Euler** is order 2, and **RK4** is the workhorse at order 4 with global error O(h⁴).

- **Ax = b, direct:** factor A = LU, solve Ly = b, then Ux = y (forward/back substitution).
- **Spectral radius:** iteration converges iff ρ(T) < 1.
- **RK4 update:** y_{n+1} = y_n + (h/6)(k₁ + 2k₂ + 2k₃ + k₄).
- **BVP tip:** y'' = f(x,y) on a uniform grid becomes a tridiagonal system solved by **Thomas algorithm**.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Direct vs Iterative Solvers
Direct methods (LU, Cholesky, Thomas) deliver an answer in a fixed number of arithmetic steps and scale poorly with size. Iterative methods build successive approximations x^{(k+1)} = T x^{(k)} + c until the residual is small. The **iteration matrix T** encodes the scheme: T_J = D⁻¹(L+U) for Jacobi, T_GS = (D−L)⁻¹U for Gauss-Seidel, and T_SOR combines both with the relaxation factor ω.

#### Convergence Conditions
A **sufficient** condition for Jacobi and Gauss-Seidel convergence is **strict diagonal dominance**: |a_ii| > Σ_{j≠i} |a_ij|. The sharper criterion is **spectral radius** ρ(T) < 1, which also controls the convergence rate — the error shrinks by a factor ≈ ρ(T) per sweep.

#### SOR and Acceleration
**SOR** writes x_i^{(k+1)} = x_i^{(k)} + (ω/a_ii)(b_i − Σ_{j<i} a_ij x_j^{(k+1)} − Σ_{j>i} a_ij x_j^{(k)}). Convergence requires only **0 < ω < 2**; the optimal ω is problem-dependent and must be tuned.

| Scheme | Update form | Convergence test | Best for |
| --- | --- | --- | --- |
| Jacobi | Uses only x^{(k)} | ρ(D⁻¹(L+U)) < 1 | Parallel-friendly, diagonally dominant A |
| Gauss-Seidel | Uses updated x^{(k+1)} in-sweep | ρ((D−L)⁻¹U) < 1 | Sparser systems, faster per sweep |
| SOR | Adds ω-multiplied correction | 0 < ω < 2 | Tuned accelerator for GS |
| Thomas | Direct tridiagonal solve | Always (no pivoting needed if diagonal dominant) | BVP finite-difference grids |

#### One-Step ODE Methods
A method of **order p** has global error O(h^p). Explicit Euler is order 1, Heun (modified Euler/trapezoidal) is order 2, and **RK4** is order 4 with local truncation error O(h⁵). Halving h quarters the global error for order 2 but only halves it for order 1 — so RK4 is the natural choice when high accuracy per step matters.

- Compute k₁, k₂, k₃, k₄ at staged points inside each step.
- Add weighted sum to y_n using coefficients 1, 2, 2, 1 divided by 6.
- Bound the step h by the **stability region**: explicit Euler tolerates Re(λh) in a disc of radius 1 about −1; stiff problems (large |λ|) demand implicit schemes or tiny h.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Error Anatomy and Conditioning
**Local truncation error** is the error introduced in a single step assuming the previous value is exact; **global error** is the accumulated error after many steps. For an order-p one-step method, local error is O(h^{p+1}) and global error is O(h^p) — a one-order drop because you stack O(1/h) steps. The **condition number** κ(A) sets a floor: even an exact solver returns Δx ≈ κ(A) · Δb / ‖b‖, so ill-conditioned systems amplify round-off no matter which algorithm you pick.

#### Worked Micro-Example (RK4, first step)
Take y' = t·y, y(0) = 1, h = 0.1. At t_0 = 0, y_0 = 1, f = 0.
- k₁ = f(0, 1) = 0
- k₂ = f(0.05, 1 + 0.05·0) = 0.05
- k₃ = f(0.05, 1 + 0.05·0.05) ≈ 0.05 + 0.00025 = 0.05025
- k₄ = f(0.1, 1 + 0.1·0.05025) ≈ 0.1 + 0.005025 = 0.105025

y₁ ≈ 1 + (0.1/6)(0 + 0.1 + 0.1005 + 0.105025) ≈ 1.01005. The exact value is e^{0.005} ≈ 1.0050125, so a smaller h or a higher-order method closes the gap.

#### Common Traps
- **Gauss-Seidel vs Jacobi:** Gauss-Seidel reuses freshly updated components inside the same sweep — Jacobi never does.
- **SOR mis-tuning:** ω ≥ 1 or ω < 1 can both diverge; only 0 < ω < 2 guarantees convergence.
- **Stiff ODEs:** explicit Euler with too-large h explodes — switch to implicit Euler or RK4 with adaptive step control.
- **BVP boundary conditions:** always fix y_0 = α and y_N = β *before* forming the tridiagonal RHS vector.
- **Truncation vs global error:** for an order-p method, LTE is O(h^{p+1}) and global is O(h^p) — not the same.

| Topic | High-yield fact | Exam weight cue |
| --- | --- | --- |
| LU / Thomas | A = LU, forward then back substitution | 1-mark direct-solver MCQ |
| Spectral radius | ρ(T) < 1 is necessary & sufficient | 1-mark NAT |
| SOR | ω ∈ (0, 2) for convergence, optimal ω tuned | Often combined with Gauss-Seidel |
| RK4 | Coefficients 1, 2, 2, 1; global error O(h⁴) | Frequent NAT on update formula |
| Finite-diff BVP | Tridiagonal (y_{i-1} − 2y_i + y_{i+1})/h² | Derivation of 2-mark scheme |

#### Practice Prompts
1. State the SOR iteration and prove that convergence requires 0 < ω < 2.
2. Derive the tridiagonal system for y'' + λy = 0 on N+1 nodes with y(0) = y(1) = 0, and identify the eigen-equation that the discrete λ satisfies.

---

## Continue your study

- **[View this topic in your GATE roadmap](/roadmap/?exam=gate&duration=1mo)** — see where "Numerical Methods — Linear Systems and ODEs" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=gate&duration=1d)** — 1-day sprint covering highest-weight topics
- **[GATE exam overview](/exams/gate/)** — pattern, eligibility, and syllabus
- **[All Engineering-Maths notes](/notes/gate/engineering-maths/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
