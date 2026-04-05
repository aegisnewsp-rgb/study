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
diagramPrompt: Mathematical diagram showing Matrices concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Matrices

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Types of Matrices:**

- **Row/Column:** $1 \times n$ or $n \times 1$ matrix
- **Square:** $n \times n$ (same rows and columns)
- **Zero matrix:** All entries are 0
- **Identity:** Diagonal entries 1, others 0; denoted $I_n$
- **Diagonal:** Non-diagonal entries are 0
- **Symmetric:** $A^T = A$
- **Skew-symmetric:** $A^T = -A$

**Operations:**

- **Addition:** Same-size matrices, element-wise
- **Scalar multiplication:** Multiply each element by scalar
- **Multiplication:** $C_{ij} = \sum_k A_{ik} B_{kj}$; number of columns of $A$ must equal number of rows of $B$
- **Transpose:** Swap rows and columns

**Determinant (for $2 \times 2$):**
$$|A| = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$$

⚡ **JEE Tip:** Matrix multiplication is NOT commutative: $AB \neq BA$ in general. Always check order when multiplying matrices.

⚡ **Common Mistake:** $|A+B| \neq |A| + |B|$. Determinant is multiplicative: $|AB| = |A||B|$, but not additive.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Properties of Determinants:**

1. $|A^T| = |A|$
2. $|AB| = |A||B|$
3. $|A^{-1}| = 1/|A|$ (if $A$ is invertible)
4. Swapping two rows changes sign
5. Multiplying a row by scalar $k$: $|kA| = k^n|A|$ for $n \times n$
6. Adding multiple of one row to another: determinant unchanged

**Adjoint and Inverse:**

For a square matrix $A$:
- **Adjoint:** $\text{adj}(A) = C^T$ where $C_{ij} = (-1)^{i+j}M_{ij}$ (cofactor matrix, transposed)
- **Inverse:** $A^{-1} = \frac{\text{adj}(A)}{|A|}$ (provided $|A| \neq 0$)

$A$ is **invertible** (non-singular) iff $|A| \neq 0$.

**Rank of Matrix:**

The rank $r(A)$ is the number of non-zero rows in its row echelon form.
- Maximum rank is $\min(m,n)$ for $m \times n$ matrix
- $r(A) = r$ means there exists at least one $r \times r$ minor with non-zero determinant, and all $(r+1) \times (r+1)$ minors are zero

**Worked Examples:**

*Example 1:* If $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, find $A^{-1}$.

$|A| = 1 \cdot 4 - 2 \cdot 3 = 4 - 6 = -2$.
$\text{adj}(A) = \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}^T = \begin{pmatrix} 4 & -3 \\ -2 & 1 \end{pmatrix}$? Wait, cofactor matrix:
$C_{11} = 4, C_{12} = -3, C_{21} = -2, C_{22} = 1$.
So cofactor matrix $= \begin{pmatrix} 4 & -3 \\ -2 & 1 \end{pmatrix}$.
$\text{adj}(A) = \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}$... wait the off-diagonal need negation.

Actually: $C_{11} = 4, C_{12} = -3$ (since $(-1)^{1+2} \cdot 3$), $C_{21} = -2$ (since $(-1)^{2+1} \cdot 2$), $C_{22} = 1$.
So $C = \begin{pmatrix} 4 & -3 \\ -2 & 1 \end{pmatrix}$.
$\text{adj}(A) = C^T = \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}$.

$A^{-1} = \frac{1}{-2} \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix}$.

*Example 2 (JEE 2021):* Find rank of $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{pmatrix}$.

Note that row 2 = 2(row 1) and row 3 = 3(row 1). So rank is at most 1.
Check: is there a non-zero element? Yes, $A_{11} = 1 \neq 0$.
So rank = 1.

*Example 3:* Solve system using matrix method:
$2x + y = 5$
$x + 2y = 4$

Matrix form: $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ 4 \end{pmatrix}$.
$|A| = 4 - 1 = 3 \neq 0$.
$A^{-1} = \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$.
$\begin{pmatrix} x \\ y \end{pmatrix} = A^{-1} \begin{pmatrix} 5 \\ 4 \end{pmatrix} = \frac{1}{3}\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}\begin{pmatrix} 5 \\ 4 \end{pmatrix} = \frac{1}{3}\begin{pmatrix} 10 - 4 \\ -5 + 8 \end{pmatrix} = \frac{1}{3}\begin{pmatrix} 6 \\ 3 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Eigenvalues and Eigenvectors:**

For square matrix $A$, if $A\mathbf{v} = \lambda \mathbf{v}$ for non-zero vector $\mathbf{v}$, then $\lambda$ is an eigenvalue and $\mathbf{v}$ is an eigenvector.

**Characteristic Equation:**
$$|A - \lambda I| = 0$$

This gives a polynomial of degree $n$ in $\lambda$. Sum of eigenvalues (trace) $= \text{tr}(A) = \sum A_{ii}$. Product of eigenvalues $= |A|$.

**Properties:**
- Sum of eigenvalues = trace
- Product of eigenvalues = determinant
- For symmetric matrix, all eigenvalues are real
- For skew-symmetric matrix, eigenvalues are purely imaginary or zero

**Cayley-Hamilton Theorem:**
Every square matrix satisfies its own characteristic equation:
$p(\lambda) = |\lambda I - A| = \lambda^n + c_1\lambda^{n-1} + \cdots + c_n$.
Then $p(A) = A^n + c_1 A^{n-1} + \cdots + c_n I = 0$.

This allows computing powers of matrices efficiently.

**Diagonalisation:**

$A = PDP^{-1}$ where $D$ is diagonal with eigenvalues.
$A^n = PD^nP^{-1}$.

**Worked Example:**

*JEE Advanced 2019:* If $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, find $A^n$.

Find eigenvalues: $|A - \lambda I| = \begin{vmatrix} 2-\lambda & 1 \\ 1 & 2-\lambda \end{vmatrix} = (2-\lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = (\lambda-1)(\lambda-3) = 0$.
So $\lambda_1 = 1, \lambda_2 = 3$.

For $\lambda_1 = 1$: $(A-I)\mathbf{v} = 0$ → $\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}\mathbf{v} = 0$ → $v_1 + v_2 = 0$.
Eigenvector $\mathbf{v}_1 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

For $\lambda_2 = 3$: $(A-3I)\mathbf{v} = 0$ → $\begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix}\mathbf{v} = 0$ → $-v_1 + v_2 = 0$.
Eigenvector $\mathbf{v}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

$P = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$, $D = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$.
$P^{-1} = \frac{1}{2}\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$.

$A^n = P D^n P^{-1} = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 3^n \end{pmatrix}\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$.
$= \frac{1}{2}\begin{pmatrix} 1 & 3^n \\ -1 & 3^n \end{pmatrix}\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 1+3^n & -1+3^n \\ -1+3^n & 1+3^n \end{pmatrix}$.

So $A^n = \frac{1}{2}\begin{pmatrix} 3^n+1 & 3^n-1 \\ 3^n-1 & 3^n+1 \end{pmatrix}$.

**JEE Advanced Patterns (2018–2024):**
- Solving systems using matrices and Cramer's rule is common
- Eigenvalue problems appeared in 2019, 2021, 2023
- Cayley-Hamilton theorem is frequently tested (to compute $A^n$)
- Rank and consistency of linear equations are common
- Orthogonal and unitary matrices appear in advanced sets

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
