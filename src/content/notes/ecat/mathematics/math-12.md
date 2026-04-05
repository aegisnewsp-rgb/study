---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-12
topicName: Matrices and Determinants
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.070073"
diagramPrompt: "Mathematical diagram showing Matrices and Determinants concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"

---

# Matrices and Determinants

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT exam.

A **matrix** is a rectangular array of numbers. A **determinant** is a scalar value computed from a square matrix that encodes important properties of the matrix.

**Matrix Types:**
- Square matrix: $n \times n$ (same rows and columns)
- Row matrix: $1 \times n$ (single row)
- Column matrix: $n \times 1$ (single column)
- Zero matrix: all elements are 0
- Identity matrix $I$: diagonal elements = 1, off-diagonal = 0
- Diagonal matrix: off-diagonal elements = 0
- Transpose $A^T$: rows become columns

**Determinant of a $2 \times 2$ Matrix:**
$$A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}, \quad |A| = \det(A) = ad - bc$$

**Determinant of a $3 \times 3$ Matrix (Sarrus' Rule):**

$$\det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)$$

Or by expansion:
$$\det(A) = a\begin{vmatrix} e & f \\ h & i \end{vmatrix} - b\begin{vmatrix} d & f \\ g & i \end{vmatrix} + c\begin{vmatrix} d & e \\ g & h \end{vmatrix}$$

**⚡ ECAT exam tips:**
- If $|A| = 0$: the matrix is **singular** — no inverse exists
- If $|A| \neq 0$: the matrix is **non-singular** — inverse exists
- For a $2 \times 2$ matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$: inverse = $\frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$
- For triangular matrices (upper or lower), determinant = product of diagonal elements

---

### 🟡 Standard — Regular Study (2d–2mo)
> For ECAT students who want genuine understanding.

**Properties of Determinants:**

1. $\det(AB) = \det(A) \cdot \det(B)$
2. $\det(A^T) = \det(A)$
3. $\det(kA) = k^n \det(A)$ for $n \times n$ matrix
4. Swapping two rows changes sign of determinant
5. Adding a multiple of one row to another leaves determinant unchanged
6. If a row is all zeros: $\det = 0$
7. If two rows are identical: $\det = 0$

**Matrix Operations:**

**Addition:** $A + B$ — element-wise (matrices must have same dimensions)
**Multiplication:** $(AB)_{ij} = \sum_k A_{ik} B_{kj}$
  - Note: $AB \neq BA$ in general
  - $AI = IA = A$ for identity matrix
**Inverse:** $A^{-1} = \frac{1}{|A|} \text{adj}(A)$ where adj$(A)$ is the adjugate (transpose of cofactor matrix)

**Cofactor Expansion:**

For a $3 \times 3$ matrix $A = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}$:

Cofactor $C_{ij} = (-1)^{i+j} M_{ij}$ where $M_{ij}$ is the minor (determinant of matrix with row $i$ and column $j$ removed).

Example: Expand along first row:
$\det(A) = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}$.

**Solving Linear Equations — Cramer's Rule:**

For $Ax = b$ where $A$ is an $n \times n$ matrix:
$$x_i = \frac{\det(A_i)}{\det(A)}$$
where $A_i$ is $A$ with column $i$ replaced by $b$.

**Example:** Solve $2x + y = 5$ and $3x - y = 1$.
$D = \begin{vmatrix} 2 & 1 \\ 3 & -1 \end{vmatrix} = -2 - 3 = -5$.
$D_x = \begin{vmatrix} 5 & 1 \\ 1 & -1 \end{vmatrix} = -5 - 1 = -6$.
$D_y = \begin{vmatrix} 2 & 5 \\ 3 & 1 \end{vmatrix} = 2 - 15 = -13$.
$x = D_x/D = (-6)/(-5) = 6/5$. $y = D_y/D = (-13)/(-5) = 13/5$.

**⚡ Common student mistakes:**
1. Confusing matrix multiplication with element-wise multiplication — they are different
2. Forgetting that $AB \neq BA$ — matrix multiplication is not commutative
3. Not computing the sign $(-1)^{i+j}$ in cofactor expansion
4. Computing the adjugate wrong — it's the transpose of the cofactor matrix

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for ECAT mastery of matrices and determinants.

**Adjugate and Inverse:**

The adjugate (or classical adjoint) of $A$: adj$(A) = C^T$ where $C_{ij}$ are cofactors.
Then: $A^{-1} = \frac{1}{|A|} \text{adj}(A)$.

Also: $A \cdot \text{adj}(A) = \text{adj}(A) \cdot A = |A| I$.

This gives a formula for the inverse without row operations.

**Eigenvalues and Eigenvectors:**

For $A\vec{v} = \lambda \vec{v}$ where $\vec{v} \neq \vec{0}$:
- $\lambda$ is an eigenvalue
- $\vec{v}$ is the corresponding eigenvector

The eigenvalues satisfy the **characteristic equation**:
$$\det(A - \lambda I) = 0$$

For a $2 \times 2$ matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$:
$\det\begin{pmatrix} a-\lambda & b \\ c & d-\lambda \end{pmatrix} = (a-\lambda)(d-\lambda) - bc = \lambda^2 - (a+d)\lambda + (ad-bc) = 0$.

Sum of eigenvalues (trace): $\lambda_1 + \lambda_2 = a + d = \text{tr}(A)$.
Product of eigenvalues: $\lambda_1 \lambda_2 = ad - bc = \det(A)$.

**Matrix of Linear Transformation:**

Every linear transformation $T: \mathbb{R}^n \to \mathbb{R}^n$ can be represented by a matrix $A$ such that $T(\vec{x}) = A\vec{x}$.

Rotation by angle $\theta$:
$$R_\theta = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$

Reflection across x-axis:
$$M_x = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

Scaling by factor $k$:
$$S_k = \begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix} = kI$$

**Rank of a Matrix:**

The rank $r(A)$ is the maximum number of linearly independent rows (or columns).
- $r(A) = n$ (full rank) if $|A| \neq 0$ for $n \times n$.
- $r(A) < n$ if $|A| = 0$.

**Consistency of Linear Equations:**

For $Ax = b$:
- If $r(A) = r([A|b])$: system is consistent. If $r(A) = n$: unique solution. If $r(A) < n$: infinitely many solutions.
- If $r(A) \neq r([A|b])$: system is inconsistent (no solution).

**Inverse Using Row Operations (Gauss-Jordan):**

$[A|I] \xrightarrow{\text{row ops}} [I|A^{-1}]$

This is often faster than the adjugate formula for large matrices.

**Cayley-Hamilton Theorem:**

Every square matrix satisfies its own characteristic equation:
If $\det(A - \lambda I) = \lambda^n + c_{n-1}\lambda^{n-1} + ... + c_1\lambda + c_0 = 0$, then:
$$A^n + c_{n-1}A^{n-1} + ... + c_1A + c_0 I = O$$

For $2 \times 2$: $A^2 - \text{tr}(A)A + \det(A)I = O$.

**ECAT Previous Year Patterns:**
- Determinant calculation: very common
- Matrix multiplication: common
- Inverse of matrix: common
- Solving linear equations: common
- Properties of determinants: periodic

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
