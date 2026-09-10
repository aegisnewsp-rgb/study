---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-018
topicName: Matrices
weight: 5
country: india
generated: "2026-03-24T08:32:07.942402"
lastUpdated: "2026-09-10"
diagramPrompt: "Mathematical diagram showing Matrices concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Matrices

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **matrix** is a rectangular array of numbers arranged in *m* rows and *n* columns, written $A = [a_{ij}]_{m \times n}$ where $a_{ij}$ is the entry in row *i*, column *j*. Two matrices are equal only when their orders match and corresponding entries are identical; **square** matrices (m = n) admit determinant, inverse, transpose, adjoint, and trace operations.

Key formulas every JEE Advanced candidate must recall:

- **Inverse:** $A^{-1} = \dfrac{1}{\det A}\,\text{adj}\,A$, valid only when $\det A \neq 0$.
- **2×2 determinant:** for $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, $\det A = ad - bc$.
- **Cramer's rule:** $x_k = \Delta_k / \Delta$, applicable when $\Delta = \det[\text{coefficient matrix}] \neq 0$.

Exam pointers:

- Matrices carry **≈ 5% weightage** in JEE Advanced Mathematics — usually 4–8 marks per paper.
- Watch for questions on **rank**, **Cayley–Hamilton**, and **system consistency** (AX = B solvable iff ρ(A) = ρ([A|B])).
- The **trace** satisfies $\sum \lambda_i = \text{tr}\,A$ and $\prod \lambda_i = \det A$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Matrix algebra and special types

Matrix addition requires matching orders; scalar multiplication scales every entry. Multiplication **AB** is defined only when *columns of A = rows of B*, and is generally **non-commutative**. The **identity matrix** $I_n$ acts as the multiplicative identity, while the **zero (null) matrix** is the additive identity.

A matrix is **symmetric** when $a_{ij} = a_{ji}$ (so $A^T = A$) and **skew-symmetric** when $a_{ij} = -a_{ji}$, which forces every diagonal entry to be zero. Any square matrix $A$ can be written as $A = \tfrac{1}{2}(A + A^T) + \tfrac{1}{2}(A - A^T)$, separating its symmetric and skew-symmetric parts.

#### Determinant, adjoint, and inverse

For an n×n matrix, the **determinant** $\det A$ is a scalar that encodes volume-scaling. The **adjoint** $\text{adj}\,A$ is the transpose of the cofactor matrix. A matrix is **singular** when $\det A = 0$ (no inverse exists) and **non-singular** when $\det A \neq 0$. The defining identity $A \cdot \text{adj}\,A = \text{adj}\,A \cdot A = (\det A)\,I$ yields the inverse formula given above.

| Operation | Formula | Condition |
| --- | --- | --- |
| Transpose | $(A^T)_{ij} = a_{ji}$ | Any matrix |
| Trace | $\text{tr}\,A = \sum_i a_{ii}$ | Square |
| Inverse | $A^{-1} = \text{adj}\,A / \det A$ | $\det A \neq 0$ |
| Reversal | $(AB)^{-1} = B^{-1}A^{-1}$ | Both invertible |

#### Rank and systems of linear equations

The **rank** $\rho(A)$ is the maximum number of linearly independent rows (equivalently columns). Elementary row/column operations preserve rank. For the system $AX = B$ with *m* equations and *n* unknowns, $\rho(A) = \rho([A|B]) = r$ gives consistency with $n - r$ free variables; $AX = 0$ has non-trivial solutions iff $\rho(A) < n$.

- A **homogeneous** system always has the zero solution; non-zero solutions require $\det A = 0$ for square *A*.
- **Cramer's rule** solves n×n systems directly but breaks down the moment $\Delta = 0$.

#### Eigenvalues and Cayley–Hamilton

Eigenvalues $\lambda$ satisfy $\det(A - \lambda I) = 0$. Real symmetric matrices have real eigenvalues; skew-symmetric real matrices have purely imaginary (or zero) eigenvalues. **Cayley–Hamilton** states that every n×n matrix satisfies its own characteristic polynomial $p(A) = 0$, letting you compute $A^{-1}$ by replacing $\lambda^0 = 1$ with $-A^{-1}\det A$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge cases and traps examiners exploit

Three traps appear repeatedly. First, students write $(A+B)^2 = A^2 + 2AB + B^2$; the correct expansion is $A^2 + AB + BA + B^2$, with the cross term $AB + BA$ collapsing to $2AB$ only when $A$ and $B$ commute. Second, the inverse of a product reverses order — $(AB)^{-1} = B^{-1}A^{-1}$ — a fact that costs marks in chain-matrix problems. Third, **Cramer's rule** silently fails when $\Delta = 0$; the rule gives no answer and the system must instead be analysed by rank.

| Trap | Wrong assumption | Correct statement |
| --- | --- | --- |
| Commutativity | $AB = BA$ | Generally false |
| Inverse of product | $(AB)^{-1} = A^{-1}B^{-1}$ | $(AB)^{-1} = B^{-1}A^{-1}$ |
| Skew-symmetric eigenvalues | All zero | Purely imaginary (or zero) |
| Diagonalisability over ℝ | Always possible | Requires real eigenvalues |

#### Diagonalisability criterion

An n×n matrix *A* is **diagonalisable** over a field iff it possesses *n* linearly independent eigenvectors. A sufficient (not necessary) condition: *n* distinct eigenvalues. Real matrices with complex conjugate eigenvalue pairs cannot be diagonalised over ℝ but can be brought to real block-diagonal (Jordan) form. **Cayley–Hamilton** powers this result by giving a polynomial identity $a_0 I + a_1 A + \cdots + a_n A^n = 0$ that lets you reduce $A^k$ for large *k* into a linear combination of $I, A, \dots, A^{n-1}$, a technique JEE Advanced tests in integer-type questions.

#### Worked micro-example

Let $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$. Then $\det A = 1\cdot4 - 2\cdot3 = -2 \neq 0$, so $A$ is invertible. Compute $\text{adj}\,A = \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}$ (cofactors transposed). Therefore $A^{-1} = \tfrac{1}{-2}\begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix}$. The characteristic polynomial is $\lambda^2 - 5\lambda - 2 = 0$ (trace 5, determinant -2), confirming Cayley–Hamilton: $A^2 - 5A - 2I = 0$.

#### Practice prompts

1. If $A$ is a 3×3 skew-symmetric real matrix, prove that $\det A = 0$ and find one non-trivial eigenvector form.
2. For $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, compute eigenvalues, verify Cayley–Hamilton, and use it to find $A^{10}$ as a linear combination of *I* and *A*.

#### Exam strategy

Expect one **single-correct MCQ** on rank/inverse and one **integer-type** or **multi-correct** question on eigenvalues, Cayley–Hamilton, or system consistency. Allocate ~2 minutes per matrix problem after you have revised 2×2 and 3×3 determinant expansions, the adjoint formula, and the rank inequalities $\rho(AB) \leq \min(\rho A, \rho B)$.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Matrices" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeeadvanced/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
