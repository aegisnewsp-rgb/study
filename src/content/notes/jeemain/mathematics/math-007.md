---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-007
topicName: Matrices and Determinants
weight: 4
country: india
generated: "2026-04-17T22:39:00.000000"
diagramPrompt: "Clean educational diagram showing Matrix operations and Determinant calculation with clear labels, white background, color-coded elements, exam-style illustration"





---
# Matrices and Determinants

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Matrices and Determinants** — Key Facts for JEE Main
Matrix: rectangular array of numbers in rows and columns
Square matrix: same number of rows and columns (n × n)
Determinant: scalar value computed from square matrix
For 2×2 matrix A = [[a, b], [c, d]], det(A) = ad − bc
Singular matrix: det(A) = 0; Non-singular: det(A) ≠ 0
Inverse: A⁻¹ = adj(A)/det(A) (only for non-singular matrices)
⚡ Exam tip: JEE Main tests matrix operations and determinant properties frequently — especially adjoint, inverse, and solving linear equations!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Matrices and Determinants** — JEE Main Study Guide

**Matrix operations:**
- Addition: A + B works only when dimensions match
- Scalar multiplication: k·A multiplies each element by k
- Multiplication: A_{m×n} × B_{n×p} = C_{m×p}; number of columns in A must equal rows in B
- Transpose: A^T switches rows and columns

**Determinant properties:**
- det(A^T) = det(A)
- det(AB) = det(A)·det(B)
- det(kA) = k^n · det(A) for n×n matrix
- Swapping two rows changes sign of determinant
- Adding multiple of one row to another leaves det unchanged
- If two rows are identical, det = 0

**Adjoint:**
adj(A) = Cofactor matrix transpose
For 3×3: adj(A) is the transpose of the matrix of cofactors

**Inverse via adjoint:**
A⁻¹ = adj(A)/det(A) — verify that A·A⁻¹ = I

**Solving linear equations using matrices:**
AX = B → X = A⁻¹B (when A is non-singular)
Cramer's rule: for 2 equations, x = D_x/D, y = D_y/D where D is determinant of coefficients

**Types of matrices:**
- Symmetric: A^T = A; a_ij = a_ji
- Skew-symmetric: A^T = −A; a_ii = 0
- Orthogonal: A·A^T = I; det = ±1
- Idempotent: A² = A
- Nilpotent: A^k = 0 for some k

**Rank of matrix:**
- Row rank = column rank
- Non-zero rows after row reduction give rank
- det(A) ≠ 0 → full rank = n for n×n matrix

- **Key formula:** det(A) = ad − bc for 2×2; A⁻¹ = adj(A)/det(A)
- **Common trap:** AB = 0 does not imply A = 0 or B = 0 (zero divisors exist in matrices)
- **Exam weight:** 1 question per year (4 marks); often combined with solving linear equations or Eigenvalues

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Matrices and Determinants** — Comprehensive JEE Main Notes

**Determinant expansion (Laplacian):**
For 3×3 matrix, expand along first row:
det(A) = a₁·C₁₁ − b₁·C₁₂ + c₁·C₁₃
Where C_ij is the cofactor = (−1)^{i+j} · M_ij (M_ij = minor, determinant of matrix after removing i-th row and j-th column)

**Eigenvalues and Eigenvectors:**
For matrix A, λ is eigenvalue if det(A − λI) = 0
Characteristic equation: |A − λI| = 0
For 2×2: λ² − (trace)λ + det = 0
Eigenvector v satisfies: A·v = λ·v

**Properties:**
- Sum of eigenvalues = trace(A) = a₁₁ + a₂₂ + ...
- Product of eigenvalues = det(A)
- Similar matrices (A and PAP⁻¹) have same eigenvalues

**System of linear equations:**
For n equations in n variables:
- Unique solution: rank(A) = rank([A|B]) = n
- Infinite solutions: rank(A) = rank([A|B]) < n
- No solution: rank(A) ≠ rank([A|B])

**Using row reduction for determinants:**
Use elementary row operations (which don't change determinant or multiply by factor) to simplify
If you multiply a row by k, determinant multiplies by k (not preserve)
If you add multiple of one row to another, determinant unchanged ✓

**Matrix equations:**
Solve AX = B: multiply both sides by A⁻¹ (if it exists): X = A⁻¹B
Solve XA = B: multiply both sides by A⁻¹: X = BA⁻¹
Note: AX = B and XA = B give different results in general!

**Special matrices:**
- For symmetric matrix A, A^T = A
- For skew-symmetric A, A^T = −A and diagonal elements are 0
- Every square matrix can be expressed as sum of symmetric and skew-symmetric parts: A = (A + A^T)/2 + (A − A^T)/2
- Hermitian: A^dagger = A (conjugate transpose)

**Properties of orthogonal matrices:**
A·A^T = I; therefore A⁻¹ = A^T
det(A) = ±1
If det = +1: proper rotation
If det = −1: improper rotation/reflection

**Inverse property for 2×2:**
For A = [[a, b], [c, d]], A⁻¹ = (1/(ad−bc))·[[d, −b], [−c, a]]

**Cayley-Hamilton theorem:**
Every matrix satisfies its own characteristic equation:
For 2×2 with characteristic equation λ² − T·λ + D = 0, we have A² − T·A + D·I = 0
This allows computing A⁻¹: multiply by A⁻¹ to get A − T·I + D·A⁻¹ = 0 → A⁻¹ = (T·I − A)/D

**Trace properties:**
tr(A + B) = tr(A) + tr(B)
tr(kA) = k·tr(A)
tr(AB) = tr(BA) — cyclic property

**Rotation matrix:**
R(θ) = [[cos θ, −sin θ], [sin θ, cos θ]] — orthogonal, det = +1

- **Remember:** det(AB) = det(A)·det(B); det(A⁻¹) = 1/det(A); det(A^T) = det(A); eigenvalues satisfy |A − λI| = 0; trace = sum of eigenvalues; Cayley-Hamilton lets you find powers of matrix via its characteristic equation
- **Previous years:** "Find inverse of [[2,1],[3,2]] using adjoint method" [2023]; "For matrix A, A² = I. Find possible eigenvalues of A" [2024]; "Solve using Cramer's rule: 2x + y = 5, x + 3y = 6" [2024]

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
- Matrices & Determinants: 1 question per year, 4 marks
- Common patterns: inverse of 2×2, solving linear equations, determinant of 3×3, adjoint, eigenvalues
- Weight: medium frequency, medium difficulty

### 💡 Pro Tips
- For 2×2 inverse: swap diagonal elements, negate off-diagonal, divide by determinant
- Never swap rows during determinant calculation without adjusting sign
- For system of equations with parameter, use rank method — checking consistency is important
- Cayley-Hamilton is powerful for computing A⁻¹ and A^n without division
- A·adj(A) = adj(A)·A = det(A)·I (this is always true)
- For adjoint method: find cofactors, transpose, divide by det
- Characteristic equation |A − λI| = 0 gives eigenvalues — then use these to find eigenvectors

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*