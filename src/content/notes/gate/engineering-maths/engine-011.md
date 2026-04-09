---
exam: gate
examName: "GATE"
subject: mathematics
subjectName: "Engineering Maths"
topic: engine-011
topicName: "Topic 11"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Numerical Methods — Linear Systems and ODEs

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Gauss Elimination** is your forward-elimination + back-substitution trick for `Ax = b`. Spot pivoting strategy in GATE questions — it's almost always asked alongside "write the augmented matrix after partial pivoting."

**LU Decomposition** decomposes `A = LU`. Once you have L and U, solving `Ax = b` for multiple b-vectors is cheap. GATE loves this when 2–3 RHS vectors follow.

**Gauss-Jacobi and Gauss-Seidel** are iterative methods. Memorize the iteration matrices:
- **Jacobi:** `x_i^{(k+1)} = (1/a_ii)[b_i - Σ_{j≠i} a_ij x_j^{(k)}]`
- **Seidel:** update immediately within the same iteration (faster convergence)

> ⚡ **GATE trap:** Convergence in Seidel ≠ faster always — it depends on the matrix being diagonally dominant or positive definite. A question may ask "which method converges for this matrix?"

**Euler's Method:** `y_{n+1} = y_n + h f(t_n, y_n)` — first-order accurate. GATE often asks numerical stability / error order.
**RK4:** Classic fourth-order Runge-Kutta. Memorize the four k's formula:
```
k1 = h f(t_n, y_n)
k2 = h f(t_n + h/2, y_n + k1/2)
k3 = h f(t_n + h/2, y_n + k2/2)
k4 = h f(t_n + h, y_n + k3)
y_{n+1} = y_n + (k1 + 2k2 + 2k3 + k4)/6
```
> ⚡ RK4 is asked almost every other year. Step size *h* is key — halving *h* reduces error by factor ~16.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Direct Methods for Linear Systems

### Gauss Elimination
Write the augmented matrix `[A|b]`. Perform forward elimination row-by-row to get an **upper triangular matrix** `U`. Then back-substitute.

**Partial Pivoting:** Before eliminating in column *i*, swap the current row with the row below having the largest absolute pivot. This prevents division by near-zero and improves numerical stability.

> 📌 **GATE Example (2019):** "Write the pivoted augmented matrix after first pivot step for the system: 2x + y = 3; x + 3y = 4"
> Answer: Swap R2 ↔ R1 first (pivot = 2), then eliminate.

### LU Decomposition
Factor `A = LU` where L is lower triangular (with 1s on diagonal) and U is upper triangular. Steps:
1. Perform Gauss elimination to produce U
2. Record multipliers (negative of the ratio used during elimination) in L

**Doolittle's method** puts 1s on L's diagonal. **Crout's** puts 1s on U's diagonal.

Once decomposed:
- Solve `Ly = b` (forward substitution)
- Solve `Ux = y` (back substitution)

> 📌 **Why it matters in GATE:** If you have `Ax = b1` and `Ax = b2`, you only decompose A once. Saves work. 1–2 marks question.

## Iterative Methods

### Gauss-Jacobi
For system `Ax = b`, rewrite as:
```
x_i = (1/a_ii)[b_i - Σ_{j≠i} a_ij x_j]
```
Start with an initial guess (often zeros) and iterate. **Converges if** the matrix is **strictly diagonally dominant** (|a_ii| > Σ|a_ij| for all i).

### Gauss-Seidel
Same idea but **immediately substitute** updated values within the iteration:
```
x_i^{(k+1)} = (1/a_ii)[b_i - Σ_{j<i} a_ij x_j^{(k+1)} - Σ_{j>i} a_ij x_j^{(k)}]
```
This makes Seidel typically converge **faster** than Jacobi (or converge when Jacobi doesn't). Still requires diagonal dominance or positive definiteness.

| Method | Convergence Criterion | Speed |
|---|---|---|
| Gauss-Jacobi | Strictly diagonally dominant or SPD | Slower |
| Gauss-Seidel | Diagonally dominant or SPD | ~2× faster |

> ⚡ **Common trap:** Students confuse when Seidel is guaranteed to converge. Answer: diagonal dominance (strong form) or symmetric positive definite. GATE has asked this exact condition.

## Numerical Solution of ODEs

### Euler's Method
First-order explicit method:
```
y_{n+1} = y_n + h f(t_n, y_n)
```
**Local truncation error:** O(h²) per step, **global error:** O(h). Very inaccurate for practical use, but the concept is foundational.

**Backward Euler** (implicit): `y_{n+1} = y_n + h f(t_{n+1}, y_{n+1})` — unconditionally stable but requires solving a nonlinear equation at each step.

### Runge-Kutta Methods
GATE focuses on **RK4** (fourth-order). The error order is O(h⁴) global — far superior to Euler.

**Standard RK4 formula (already listed above)**.

> 📌 **GATE Question Pattern:** "Using RK4 with step size h=0.1, find y(0.2) for dy/dt = t+y, y(0)=1" — Apply the 4-k formula twice (for n=0 and n=1).

**Error comparison table:**

| Method | Local Error | Global Error |
|---|---|---|
| Euler | O(h²) | O(h) |
| RK2 (Midpoint) | O(h³) | O(h²) |
| RK4 | O(h⁵) | O(h⁴) |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Direct Methods — Detailed Analysis

### Gauss Elimination with Partial Pivoting
The process:
1. For column k (1 ≤ k ≤ n), find row r ≥ k with max |a_rk|
2. Swap rows k and r
3. Eliminate: for rows i = k+1 to n, do `R_i → R_i - (a_ik/a_kk)·R_k`
4. Continue to column k+1

**Complexity:** O(n³) flops. LU decomposition costs the same but enables O(n²) solve per RHS.

### LU Decomposition — Derivation
Given `A = LU`, where:
- L = [l_ij] (lower triangular, l_ii = 1)
- U = [u_ij] (upper triangular)

From `A·x = b` → `L·(U·x) = b`:
- Forward substitution: solve `L·y = b` for y
- Back substitution: solve `U·x = y` for x

**Special matrices:**
- **Tridiagonal systems:** Thomas algorithm (specialized LU for tridiagonal) — O(n) complexity, tested in GATE
- **Cholesky decomposition:** For SPD matrices, `A = LL^T`. GATE may ask "when does Cholesky fail?" (answer: matrix must be SPD)

### Ill-conditioning
A matrix is **ill-conditioned** if small changes in `b` or `A` cause huge changes in `x`. Condition number `κ(A) = ||A||·||A⁻¹||`. GATE won't ask you to compute this, but may ask "which of these matrices is ill-conditioned?" (answer: near-singular, nearly linearly dependent rows).

## Iterative Methods — Convergence Theory

### Spectral Radius Criterion
More general than diagonal dominance: an iterative method converges **iff** the spectral radius of its iteration matrix is < 1.

- **Jacobi iteration matrix:** `J = I - D⁻¹A`
- **Seidel iteration matrix:** `G = (D-L)⁻¹U` (for A = D - L - U)

**GATE rarely asks spectral radius** but it's the rigorous reason Seidel often converges faster — its iteration matrix typically has smaller spectral radius.

### Diagonal Dominance Check
For `Ax = b`, row-wise diagonal dominance: `|a_ii| > Σ_{j≠i} |a_ij|` for all i.

> 📌 **Key insight:** Strict diagonal dominance → **both** Jacobi and Seidel converge. Positive definite → Seidel converges (Jacobi may or may not). GATE loves this equivalence.

## ODE Solvers — Error and Stability

### Deriving the Euler Error
Using Taylor expansion: `y(t+h) = y(t) + hy'(t) + h²y''(ξ)/2`. Euler truncates after the linear term → local error O(h²), global accumulated error O(h).

### Runge-Kutta Family
General idea: compute weighted slopes at multiple points within the interval to achieve higher-order accuracy.

**RK2 (Heun's method):**
```
k1 = h f(t_n, y_n)
k2 = h f(t_n + h, y_n + k1)
y_{n+1} = y_n + (k1 + k2)/2
```
**RK4** achieves O(h⁴) global by using slope estimates at t, t+h/2, t+h/2, t+h.

### Stability of Euler Methods
For the test equation `y' = λy` (λ complex), the **amplification factor** for explicit Euler is `|1 + hλ|`. This must be ≤ 1 for stability → requires `hλ` to lie in a disk of radius 1 centered at (-1, 0). This means **explicit Euler is conditionally stable** — h must be small relative to |λ|.

**Implicit (Backward) Euler** has amplification factor `|1/(1 - hλ)|` → always ≤ 1 for any h → **unconditionally stable**.

> ⚡ **GATE trap:** Students often confuse "stable" with "accurate." A method can be stable but highly inaccurate if h is chosen poorly.

### Predictor-Corrector Methods
**Euler's method** can be viewed as predictor; trapezoidal rule as corrector:
- **Predictor:** `y*_{n+1} = y_n + h f(t_n, y_n)`
- **Corrector:** `y_{n+1} = y_n + (h/2)[f(t_n,y_n) + f(t_{n+1}, y*_{n+1})]`

This is the **Euler-Trapezoidal (PC2)** method with improved error order O(h²).

## Previous Year GATE Patterns

| Year | Topic Tested | Format |
|---|---|---|
| 2022 | RK4 | Numerical integration — find y(0.2) |
| 2021 | Gauss-Seidel convergence | Find if method converges for given matrix |
| 2020 | LU Decomposition | Solve using given L, U factors |
| 2019 | Gauss Elimination with pivoting | Augmented matrix after pivot step |
| 2018 | Euler's method | Error order identification |

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
