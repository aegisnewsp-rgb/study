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
lastUpdated: "2026-09-06"
---

# Linear Algebra

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Linear Algebra forms the computational core of GATE Engineering Mathematics across all engineering streams. The syllabus evaluates matrix algebra, systems of linear equations, rank-nullity relationships, eigenvalues, eigenvectors, Cayley-Hamilton theorem, and matrix diagonalizability. Every linear transformation between finite-dimensional vector spaces corresponds to a unique matrix operator once coordinate bases are fixed.

| Linear Algebra Dimension | Mathematical Invariant | Operational Rule | High-Frequency GATE Trap |
|---|---|---|---|
| **Matrix Rank $\rho(A)$** | Number of linearly independent rows or columns | Count non-zero rows in Row Echelon Form (REF) | Assuming $\rho(A) = \text{min}(m, n)$ without row reduction |
| **Rank-Nullity Theorem** | $\rho(A) + \text{nullity}(A) = n$ | Dimension of Column Space $+$ Dimension of Null Space $= n$ | Using row count $m$ instead of column count $n$ |
| **Trace-Eigenvalue Invariant** | $\text{tr}(A) = \sum_{i=1}^n \lambda_i$ | Sum of main diagonal elements equals sum of all eigenvalues | Missing repeated eigenvalues in the summation |
| **Determinant Invariant** | $\det(A) = \prod_{i=1}^n \lambda_i$ | Product of all eigenvalues equals matrix determinant | Forgetting that $\det(A) = 0 \iff \lambda = 0$ is an eigenvalue |
| **Cayley-Hamilton Identity** | $P_A(A) = \mathbf{0}$ | Every square matrix satisfies its own characteristic polynomial | Miscalculating sign of $(-1)^n$ in characteristic determinant |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### 1. Systems of Linear Equations: Consistency and Solution Spaces

Consider a general non-homogeneous system of $m$ equations in $n$ unknowns represented as $A x = B$, where $A \in \mathbb{R}^{m \times n}$ is the coefficient matrix, $x \in \mathbb{R}^n$ is the solution vector, and $[A \mid B] \in \mathbb{R}^{m \times (n+1)}$ is the augmented matrix.

| Condition on Ranks | System Consistency | Solution Space Dimensionality | Physical / Geometric Meaning |
|---|---|---|---|
| $\rho(A) \neq \rho([A \mid B])$ | **Inconsistent** | $\emptyset$ (Zero solutions) | Hyperplanes do not intersect at any common point |
| $\rho(A) = \rho([A \mid B]) = n$ | **Consistent** | Unique solution ($0$ free parameters) | Hyperplanes intersect at a single discrete point in $\mathbb{R}^n$ |
| $\rho(A) = \rho([A \mid B]) = r < n$ | **Consistent** | Infinitely many solutions ($n - r$ free parameters) | Hyperplanes intersect along a line, plane, or affine subspace |

For homogeneous systems ($A x = \mathbf{0}$), the system is unconditionally consistent because the trivial solution $x = \mathbf{0}$ always satisfies the equation.
- If $\rho(A) = n$, only the trivial zero solution exists ($\det(A) \neq 0$ for square systems).
- If $\rho(A) < n$, non-trivial (non-zero) solutions exist ($\det(A) = 0$ for square systems), and the null space has dimension $k = n - \rho(A)$.

#### 2. Special Matrix Classes and Spectral Properties

Eigenvalues ($\lambda$) satisfy the characteristic equation $\det(A - \lambda I) = 0$. The geometric nature of eigenvalues depends directly on the structural symmetry of the matrix.

| Matrix Class | Formal Defining Condition | Eigenvalue Spectrum Characteristics | Determinant & Invertibility |
|---|---|---|---|
| **Symmetric** | $A^T = A$ | All eigenvalues are strictly real numbers | $\det(A) \in \mathbb{R}$; orthogonal eigenvectors |
| **Skew-Symmetric** | $A^T = -A$ | Purely imaginary or zero ($0, \pm i\beta$) | If $n$ is odd, $\det(A) = 0$ (always singular) |
| **Orthogonal** | $A^T A = I \iff A^{-1} = A^T$ | Modulus is unity ($|\lambda| = 1$, i.e., $\pm 1, e^{i\theta}$) | $\det(A) = \pm 1$ (Preserves Euclidean vector norms) |
| **Hermitian** | $A^H = (\bar{A})^T = A$ | All eigenvalues are strictly real numbers | Unitary similarity to a diagonal real matrix |
| **Skew-Hermitian** | $A^H = -A$ | Purely imaginary or zero | Diagonal elements are purely imaginary or zero |
| **Unitary** | $A^H A = I$ | Modulus is unity ($|\lambda| = 1$) | Absolute determinant $|\det(A)| = 1$ |
| **Idempotent** | $A^2 = A$ | Eigenvalues are strictly $0$ or $1$ | $\det(A) = 0$ (if singular) or $\det(A) = 1$ (if $I$) |
| **Involutory** | $A^2 = I \iff A^{-1} = A$ | Eigenvalues are strictly $+1$ or $-1$ | $\det(A) = \pm 1$ |
| **Nilpotent** | $A^k = \mathbf{0}$ for some $k \ge 1$ | All eigenvalues are strictly zero ($\lambda = 0$) | $\det(A) = 0$ (Never invertible); $\text{tr}(A) = 0$ |

#### 3. Algebraic Multiplicity, Geometric Multiplicity, and Diagonalization

For each distinct eigenvalue $\lambda_k$ of an $n \times n$ matrix $A$:
- **Algebraic Multiplicity ($AM_k$)**: The multiplicity of $\lambda_k$ as a root of the characteristic polynomial $\det(A - \lambda I) = 0$.
- **Geometric Multiplicity ($GM_k$)**: The dimension of the eigenspace corresponding to $\lambda_k$, given by $\text{nullity}(A - \lambda_k I) = n - \rho(A - \lambda_k I)$.
- **Fundamental Inequality**: For every eigenvalue, $1 \le GM_k \le AM_k$.

**Diagonalization Criterion:**  
A matrix $A$ is diagonalizable if and only if $GM_k = AM_k$ for every eigenvalue $\lambda_k$. When this holds, an invertible modal matrix $P$ formed by the $n$ linearly independent eigenvectors satisfies:
$$P^{-1} A P = D = \text{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$$

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Cayley-Hamilton Theorem: Powers and Matrix Inverses

The Cayley-Hamilton theorem asserts that every square matrix $A \in \mathbb{R}^{n \times n}$ satisfies its own characteristic equation:
$$\Delta(\lambda) = \det(A - \lambda I) = (-1)^n \left( \lambda^n + c_{n-1} \lambda^{n-1} + \dots + c_1 \lambda + c_0 \right) = 0$$
Substituting $A$ for $\lambda$:
$$A^n + c_{n-1} A^{n-1} + \dots + c_1 A + c_0 I = \mathbf{0}$$

When $\det(A) \neq 0$ (so $c_0 \neq 0$ because $c_0 = (-1)^n \det(A)$), multiply by $A^{-1}$:
$$A^{n-1} + c_{n-1} A^{n-2} + \dots + c_1 I + c_0 A^{-1} = \mathbf{0}$$
$$A^{-1} = -\frac{1}{c_0} \left( A^{n-1} + c_{n-1} A^{n-2} + \dots + c_1 I \right)$$

This provides an efficient method for computing matrix inverses and powers ($A^k$) without direct cofactor expansion.

#### Worked GATE Numerical Problems

**Problem 1: Diagonalization and High Matrix Powers**  
*Problem:* Let $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. Compute the matrix $A^{10}$.

*Step-by-Step Solution:*
1. Form the characteristic equation:
   $$\det(A - \lambda I) = \det\begin{pmatrix} 2 - \lambda & 1 \\ 1 & 2 - \lambda \end{pmatrix} = (2 - \lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = 0$$
2. Factor to find eigenvalues:
   $$(\lambda - 3)(\lambda - 1) = 0 \implies \lambda_1 = 3, \quad \lambda_2 = 1$$
3. Find eigenvectors:
   - For $\lambda_1 = 3$:
     $$(A - 3I)v_1 = \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies -x_1 + x_2 = 0 \implies v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$$
   - For $\lambda_2 = 1$:
     $$(A - 1I)v_2 = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies x_1 + x_2 = 0 \implies v_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$$
4. Construct modal matrix $P$ and its inverse $P^{-1}$:
   $$P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, \quad \det(P) = -1 - 1 = -2$$
   $$P^{-1} = -\frac{1}{2} \begin{pmatrix} -1 & -1 \\ -1 & 1 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$$
5. Apply matrix power identity $A^{10} = P D^{10} P^{-1}$:
   $$D^{10} = \begin{pmatrix} 3^{10} & 0 \\ 0 & 1^{10} \end{pmatrix} = \begin{pmatrix} 59049 & 0 \\ 0 & 1 \end{pmatrix}$$
   $$P D^{10} = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} 59049 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 59049 & 1 \\ 59049 & -1 \end{pmatrix}$$
   $$A^{10} = \frac{1}{2} \begin{pmatrix} 59049 & 1 \\ 59049 & -1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} 59050 & 59048 \\ 59048 & 59050 \end{pmatrix} = \begin{pmatrix} 29525 & 29524 \\ 29524 & 29525 \end{pmatrix}$$
*Final Answer:* $A^{10} = \begin{pmatrix} 29525 & 29524 \\ 29524 & 29525 \end{pmatrix}$.

**Problem 2: Parameter-Dependent Rank Consistency**  
*Problem:* Determine the values of $k$ and $\mu$ for which the following system has (a) a unique solution, (b) infinitely many solutions, and (c) no solution:
$$\begin{aligned}
x + y + z &= 6 \\
x + 2y + 3z &= 10 \\
x + 2y + kz &= \mu
\end{aligned}$$

*Step-by-Step Solution:*
1. Write the augmented matrix $[A \mid B]$:
   $$[A \mid B] = \begin{pmatrix} 1 & 1 & 1 & \mid & 6 \\ 1 & 2 & 3 & \mid & 10 \\ 1 & 2 & k & \mid & \mu \end{pmatrix}$$
2. Perform elementary row operations:
   - $R_2 \leftarrow R_2 - R_1$:
     $$\begin{pmatrix} 1 & 1 & 1 & \mid & 6 \\ 0 & 1 & 2 & \mid & 4 \\ 1 & 2 & k & \mid & \mu \end{pmatrix}$$
   - $R_3 \leftarrow R_3 - R_1$:
     $$\begin{pmatrix} 1 & 1 & 1 & \mid & 6 \\ 0 & 1 & 2 & \mid & 4 \\ 0 & 1 & k-1 & \mid & \mu - 6 \end{pmatrix}$$
   - $R_3 \leftarrow R_3 - R_2$:
     $$\begin{pmatrix} 1 & 1 & 1 & \mid & 6 \\ 0 & 1 & 2 & \mid & 4 \\ 0 & 0 & k-3 & \mid & \mu - 10 \end{pmatrix}$$
3. Analyze rank conditions:
   - **Case 1: Unique Solution**: Requires $\rho(A) = \rho([A \mid B]) = 3$. This occurs when $k - 3 \neq 0 \implies k \neq 3$, for any real value of $\mu$.
   - **Case 2: Infinitely Many Solutions**: Requires $\rho(A) = \rho([A \mid B]) < 3$. This requires the entire third row to vanish: $k - 3 = 0$ and $\mu - 10 = 0 \implies k = 3$ and $\mu = 10$.
   - **Case 3: No Solution (Inconsistent)**: Requires $\rho(A) < \rho([A \mid B])$. This occurs when $k - 3 = 0$ but $\mu - 10 \neq 0 \implies k = 3$ and $\mu \neq 10$.

#### Common Traps and Exam Pitfalls

- **Trace and Determinant Verification**: When calculating eigenvalues for $3 \times 3$ matrices, always verify two invariants before proceeding: $\sum \lambda_i = \text{tr}(A)$ and $\prod \lambda_i = \det(A)$.
- **Singular Matrix Eigenvalues**: A matrix is singular ($\det(A) = 0$) if and only if at least one eigenvalue equals zero ($\lambda = 0$). The number of zero eigenvalues equals the nullity of the matrix when geometric multiplicity conditions are satisfied.
- **Orthogonal Matrix Transpose**: If $A$ is orthogonal, never spend time computing cofactors for $A^{-1}$; immediately write $A^{-1} = A^T$.

---

### Practice Prompts

1. For a $3 \times 3$ matrix $M$, two eigenvalues are $1$ and $-2$, and $\det(M) = -6$. Find the third eigenvalue, the trace of $M$, and the determinant of $M^3 - 2I$.
2. Prove that if an $n \times n$ matrix $A$ satisfies $A^2 = A$ (idempotent), all its eigenvalues are either $0$ or $1$, and its rank equals its trace ($\rho(A) = \text{tr}(A)$).

---

## Continue your study

- **[GATE Exam Hub](/exams/gate/)** — paper format, scoring structure, cutoff trends, and discipline syllabi
- **[All GATE Engineering Mathematics Notes](/notes/gate/engineering-maths/)** — calculus, differential equations, complex variables, and probability
- **[GATE Complete Preparation Roadmap](/exams/gate/#roadmap)** — high-yield topic distribution and revision calendar
