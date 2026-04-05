---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-019
topicName: Determinants
weight: 5
country: india
generated: "2026-03-24T08:32:07.942924"
diagramPrompt: Mathematical diagram showing Determinants concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Determinants

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Determinants** — Quick Facts
Determinant of 2×2: |a b; c d| = ad - bc
Minor Mᵢⱼ: determinant obtained by deleting ith row and jth column; Cofactor Cᵢⱼ = (-1)^(i+j) Mᵢⱼ
Laplace expansion: det A = Σ Cᵢⱼ aᵢⱼ = Σ Cᵢⱼ aᵢⱼ (along any row/column)
Product: det(AB) = det(A)·det(B); det(A⁻¹) = 1/det(A); det(Aᵀ) = det(A)
⚡ Exam tip: Use row/column operations to simplify before expanding — zero rows/columns are gold

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Determinants** — Study Guide

#### Definition and Basic Properties

A determinant is a scalar value computed from a square matrix. For 2×2:
$$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$$

For 3×3, use Sarrus rule or cofactor expansion:
$$\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg)$$

**Key Properties**:
1. det(Aᵀ) = det(A) — rows and columns interchangeable
2. Swapping two rows/columns changes sign of determinant
3. Multiplying a row by scalar k multiplies det by k
4. Adding multiple of one row to another does NOT change det
5. If two rows are identical or proportional, det = 0
6. det(I) = 1, det(0) = 0

#### Cofactor and Adjoint

**Minor** Mᵢⱼ: determinant after deleting i-th row, j-th column
**Cofactor** Cᵢⱼ = (-1)^(i+j) Mᵢⱼ

Adjoint of A: adj(A) is matrix of cofactors transposed
$$A \cdot adj(A) = adj(A) \cdot A = det(A) \cdot I$$

This gives formula for inverse:
$$A^{-1} = \frac{adj(A)}{det(A)} \quad \text{provided } det(A) \neq 0$$

#### System of Linear Equations (Cramer's Rule)

For Ax = b where A is n×n with det(A) ≠ 0:
$$x_i = \frac{det(A_i)}{det(A)}$$

where Aᵢ is matrix A with i-th column replaced by b.

For 2 equations:
$$x = \frac{\begin{vmatrix} c_1 & b_1 \\ c_2 & b_2 \end{vmatrix}}{\begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix}}, \quad y = \frac{\begin{vmatrix} a_1 & c_1 \\ a_2 & c_2 \end{vmatrix}}{\begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix}}$$

Cramer's rule is theoretically elegant but computationally inefficient for large systems.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Determinants** — Comprehensive Notes

#### Matrix Representation and Determinant via Permutations

For n×n matrix A = [aᵢⱼ], determinant can be written as:
$$det(A) = \sum_{\sigma \in S_n} \text{sgn}(\sigma) \prod_{i=1}^{n} a_{i,\sigma(i)}$$

where Sₙ is set of all permutations of {1,2,...,n} and sgn(σ) is parity (+1 for even, -1 for odd permutation). This definition is rarely used computationally but essential for proving determinant properties.

For 3×3, the 6 permutations give the expansion formula shown earlier. For 4×4, there are 24 terms — impractical to expand directly, hence the cofactor method is preferred.

#### Elementary Row/Column Operations and Rank

**Elementary matrices** (from row operations):
- Type I: swap rows i and j → det changes sign
- Type II: multiply row i by scalar k → det multiplied by k
- Type III: add k× row j to row i → det unchanged

Using operations to simplify matrix to triangular form makes determinant trivial (product of diagonal entries).

** Echelon form**: Using only Type III operations (which preserve det), any non-singular matrix can be reduced to upper triangular. det = product of diagonal after reduction.

**Rank via determinants**: Rank of A = size of largest non-zero minor. If all p×p minors are zero but some (p-1)×(p-1) minor is non-zero, rank = p-1.

#### Vandermonde Determinant

$$V = \begin{vmatrix} 1 & 1 & 1 & ... & 1 \\ x_1 & x_2 & x_3 & ... & x_n \\ x_1^2 & x_2^2 & x_3^2 & ... & x_n^2 \\ \vdots & \vdots & \vdots & & \vdots \\ x_1^{n-1} & x_2^{n-1} & x_3^{n-1} & ... & x_n^{n-1} \end{vmatrix} = \prod_{1 \leq i < j \leq n} (x_j - x_i)$$

This product form is zero when any xᵢ = xⱼ (two equal x-values → rows become identical). This determinant appears in interpolation problems.

#### Circulant Determinants

A circulant matrix has each row a cyclic shift of the previous:
$$C = \begin{vmatrix} a_0 & a_1 & a_2 & ... & a_{n-1} \\ a_{n-1} & a_0 & a_1 & ... & a_{n-2} \\ \vdots & & & & \vdots \\ a_1 & a_2 & a_3 & ... & a_0 \end{vmatrix}$$

det(C) = ∏ rₖ where rₖ = a₀ + a₁ωₖ + a₂ωₖ² + ... + aₙ₋₁ωₖⁿ⁻¹ and ωₖ = e^(2πik/n) are nth roots of unity.

For n = 3: eigenvalues are evaluated at cube roots of unity.

#### Laplace Expansion (Cofactor Expansion)

Expanding along i-th row:
$$det(A) = \sum_{j=1}^{n} (-1)^{i+j} a_{ij} M_{ij}$$

**Shortcut**: Multiply row by cofactor of another row and sum = 0:
$$\sum_{j} a_{ij} C_{kj} = 0 \text{ for } i \neq k$$

This is because adding a multiple of one row to another doesn't change determinant (but the expansion gives the determinant of a matrix with row k replaced by row i, which has two identical rows → determinant = 0).

Similarly: $\sum_{i} a_{ij} C_{ik} = 0$ for j ≠ k.

This property is useful for evaluating determinants by strategic zero-creation.

#### Block Matrices

For block matrix $\begin{pmatrix} A & B \\ C & D \end{pmatrix}$ where A and D are square:
- If A is invertible: det = det(A)·det(D - CA⁻¹B)
- If D is invertible: det = det(D)·det(A - BD⁻¹C)
- If AC = CA (commute): det = det(AD - BC)

Special case (upper triangular blocks): det = det(A)·det(D)

#### Jacobians as Determinants

When transforming variables from (x,y) to (u,v) via x = f(u,v), y = g(u,v):
$$J = \frac{\partial(x,y)}{\partial(u,v)} = \begin{vmatrix} \partial x/\partial u & \partial x/\partial v \\ \partial y/\partial u & \partial y/\partial v \end{vmatrix}$$

Jacobian determinant appears in change of variables for double integrals:
$$\iint_R f(x,y) dx dy = \iint_S f(x(u,v), y(u,v)) |J| du dv$$

**JEE Application**: Coordinate transformations (Cartesian ↔ polar, spherical, etc.)

#### Differentiation of Determinants

If each element of A(x) is differentiable w.r.t. x:
$$\frac{d}{dx} det(A) = det(A) \cdot tr(A^{-1} \cdot \frac{dA}{dx})$$

where tr is trace (sum of diagonal elements).

For matrix with functions on diagonal only: d/dx det(diag(f₁, f₂, ..., fₙ)) = det(A)·Σ(fᵢ'/fᵢ)

This is useful in differential equations involving determinants.

#### Product Rule via Determinants

**Cauchy-Binet formula**: For A (m×n) and B (n×m) with m ≤ n:
$$det(AB) = \sum_{1 \leq j_1 < j_2 < ... < j_m \leq n} det(A[:, j_1...j_m]) \cdot det(B[j_1...j_m, :])$$

When m = n, this reduces to det(AB) = det(A)·det(B). When m < n, det(AB) is sum over all m×m minors.

⚡ **Exam tips for JEE Advanced**:
1. Create zeros before expanding — a row of all zeros means determinant = 0
2. For symmetric problems, try to show det > 0 or < 0 based on eigenvalues
3. In eigenvalue problems, det(A - λI) = 0 gives characteristic equation
4. Common pattern: det of matrix with variables can often be factored — try substitution of simple values (x=0, x=1, etc.) to find factors
5. For 3×3 with variables, determinant is at most degree 3 in any variable
6. Adjoint property: A·adj(A) = det(A)I → if det(A)=1, then A⁻¹ = adj(A)
7. In geometry problems, triangle area = (1/2)|det(v₁-v₀, v₂-v₀)| where vertices are vectors from origin
8. When determinant appears in limits/integrals, try to identify it as product of differences (Vandermonde pattern)
9. For functional determinants in change of variables, J appears as |J| — don't forget absolute value

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
