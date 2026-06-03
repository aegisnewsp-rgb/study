---
exam: gate
examName: "GATE"
subject: engineering-maths
subjectName: "Engineering-Maths"
topic: engine-001
topicName: "Linear Algebra"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-05-29"
---

# Linear Algebra

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Matrix & Rank:** A matrix of order m×n has rank ρ(A) = number of non-zero rows in its Row Echelon Form (REF). **Rank-Nullity theorem**: ρ(A) + nullity(A) = n, where nullity = dimension of null space.

**Eigenvalues:** For matrix A, solve the **characteristic equation**: |A − λI| = 0. For a 2×2 matrix: λ² − tr(A)λ + det(A) = 0, where tr(A) = a₁₁ + a₂₂. The **sum of eigenvalues** = tr(A), and **product of eigenvalues** = det(A).

**Key Formulas:**
- det(AB) = det(A)·det(B)
- (AB)ᵀ = BᵀAᵀ
- A⁻¹ = adj(A)/det(A) when det(A) ≠ 0
- **Cayley-Hamilton**: A satisfies its own characteristic equation

**Consistency:** System Ax = B has solutions iff ρ(A) = ρ([A|B]).

**GATE Tips:** Rank questions appear annually (1–2 marks). Always verify ρ(A) = ρ([A|B]) for consistency. For eigenvalue problems, check trace-sum as a quick verification. Cayley-Hamilton enables inverse and power calculations without long division.

---

### 🟡 Standard — Regular Study (2d–2mo)

**Matrix Operations and Rank**

A matrix A of order m×n transforms ℝⁿ → ℝᵐ. The **rank** ρ(A) equals the maximum number of linearly independent row or column vectors. Row reduction to REF is the standard tool: transform [A|B] using elementary row operations (swap rows, multiply by a nonzero scalar, add a multiple of one row to another).

**Solving Linear Systems Ax = B**

Compute both ρ(A) and ρ([A|B]):
- If ρ(A) ≠ ρ([A|B]): inconsistent — no solution
- If ρ(A) = ρ([A|B]) = n: unique solution
- If ρ(A) = ρ([A|B]) < n: infinite solutions, with n − ρ free parameters

Gaussian elimination (forward elimination + back substitution) is the GATE-preferred method; computing A⁻¹ and multiplying is rarely efficient.

**Eigenvalues and Eigenvectors**

For eigenvalue λ, solve (A − λI)v = 0. The **characteristic polynomial** p(λ) = det(A − λI) has degree n with n roots counted with multiplicity. A symmetric n×n matrix always has n real eigenvalues.

**Cayley-Hamilton Theorem**

Every n×n matrix A satisfies its own characteristic equation: p(A) = 0. This provides a direct path to computing A⁻¹ and Aᵏ without repeated matrix multiplication.

**Diagonalization**

A is diagonalizable iff A possesses n linearly independent eigenvectors. When true, P⁻¹AP = D where D = diag(λ₁, λ₂, …, λₙ) and P is the eigenvector matrix (eigenvectors as columns). A symmetric matrix is guaranteed diagonalizable via an orthogonal matrix (P⁻¹ = Pᵀ).

**Linear Independence and Vector Spaces**

A set {v₁, v₂, …, vₖ} is **linearly independent** if c₁v₁ + c₂v₂ + ⋯ + cₖvₖ = 0 implies all cᵢ = 0. The **dimension** of a vector space equals the cardinality of any basis. For subspace W ⊂ V, dim(W) ≤ dim(V) with equality only when W = V.

---

### 🔴 Extended — Deep Study (3mo+)

**Edge Cases and Common Traps**

The characteristic equation is |A − λI| = 0 — subtract λ only from diagonal entries. A nilpotent matrix (Aᵏ = 0 for some k) has all eigenvalues equal to zero and cannot be diagonalized unless it is the zero matrix. The **geometric multiplicity** (dimension of eigenspace) is always ≤ the **algebraic multiplicity** (root multiplicity in characteristic polynomial); equality for every eigenvalue is both necessary and sufficient for diagonalizability.

**Mechanism: Inverse via Cayley-Hamilton**

Given A, find p(λ) = det(A − λI) = (−1)ⁿ(λⁿ + cₙ₋₁λⁿ⁻¹ + ⋯ + c₁λ + c₀). The Cayley-Hamilton equation p(A) = 0 gives Aⁿ + cₙ₋₁Aⁿ⁻¹ + ⋯ + c₁A + c₀I = 0. Multiplying by A⁻¹ (valid when det(A) ≠ 0) isolates A⁻¹ = −(1/c₀)(Aⁿ⁻¹ + cₙ₋₁Aⁿ⁻² + ⋯ + c₁I), bypassing direct adjugate computation.

**Connections to Adjacent Topics**

In differential equations, solving x′ = Ax relies on eigenvalues of A; repeated eigenvalues demand generalized eigenvectors. The **minimal polynomial** m(λ) (smallest degree monic divisor of p(λ) with m(A) = 0) determines whether diagonalization is possible and appears in canonical forms. In numerical analysis, the power method locates the dominant eigenvalue through repeated matrix-vector multiplication. Linear transformations T:V → W satisfy T(c₁v₁ + c₂v₂) = c₁T(v₁) + c₂T(v₂); the matrix representation depends on the basis chosen for domain and codomain.

**Common Mistakes**

Subtracting λ from all entries instead of only the diagonal leads to wrong characteristic polynomials. Applying Cayley-Hamilton without first verifying that p(A) = 0 holds for the given matrix yields incorrect results. Inconsistent systems are sometimes incorrectly treated as having infinite solutions when ρ(A) ≠ ρ([A|B]). When computing eigenvectors, the matrix (A − λI) is singular — Gaussian elimination still applies but back-substitution terminates early because at least one row becomes all zeros.

**Practice Prompts**

1. For A = [[2, 1], [1, 2]], compute eigenvalues using |A − λI| = 0, find eigenvectors for each λ, verify trace-sum and determinant-product, construct P and confirm P⁻¹AP = diag(λ₁, λ₂), then find A¹⁰ using diagonalization without direct multiplication.

2. Classify the system x₁ + 2x₂ = 3, 2x₁ + 4x₂ = 6, 3x₁ + 6x₂ = k for k = 7, k = 9, and k = 10. Determine ρ(A), ρ([A|B]), solution count for each case, and express the general solution as a parametric vector when infinite solutions exist.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
