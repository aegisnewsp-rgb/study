---



exam: nda
examName: NDA
subject: mathematics
subjectName: Mathematics
topic: math-002
topicName: Matrices
weight: 4
country: india
generated: "2026-03-24T08:32:07.805685"
diagramPrompt: "Mathematical diagram showing Matrices concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Matrices

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Matrices — Quick Facts**

A matrix is a rectangular array of numbers arranged in $m$ rows and $n$ columns, written as $A_{m \times n}$. The element $a_{ij}$ lies in the $i$th row and $j$th column.

**Essential Types:**
- **Row matrix:** $[3, -1, 4]$ — single row, $1 \times n$
- **Column matrix:** $\begin{pmatrix} 2 \\ -5 \\ 1 \end{pmatrix}$ — single column, $m \times 1$
- **Square matrix:** $n \times n$ (same rows and columns), e.g. $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$
- **Null matrix:** Every element is zero, $O = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$
- **Identity matrix:** $I_n = \begin{pmatrix} 1 & 0 & \cdots \\ 0 & 1 & \cdots \\ \vdots & \vdots & \ddots \end{pmatrix}$, diagonal elements = 1
- **Diagonal matrix:** Non-zero only on principal diagonal; e.g. $\text{diag}(2, -1, 5)$
- **Scalar matrix:** $\text{diag}(k, k, k)$ — diagonal with equal entries $k$
- **Symmetric matrix:** $A = A^T$, i.e. $a_{ij} = a_{ji}$ for all $i, j$; e.g. $\begin{pmatrix} 2 & 3 \\ 3 & 1 \end{pmatrix}$
- **Skew-symmetric matrix:** $A^T = -A$, so diagonal elements must be zero; e.g. $\begin{pmatrix} 0 & 2 \\ -2 & 0 \end{pmatrix}$

⚡ **NDA Exam Tip:** Questions on matrix types and properties appear frequently. If asked to identify whether a matrix is symmetric or skew-symmetric, always check both the shape (must be square) and the element-wise equality $a_{ij} = \pm a_{ji}$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding and problem-solving fluency.

**Matrix Operations**

**1. Addition and Subtraction**
Two matrices $A$ and $B$ can be added only if they have the same order ($m \times n$). Addition is element-wise:
$$A + B = \begin{pmatrix} a_{11}+b_{11} & a_{12}+b_{12} \\ a_{21}+b_{21} & a_{22}+b_{22} \end{pmatrix}$$
Matrix addition is **commutative**: $A + B = B + A$.
It is also **associative**: $(A + B) + C = A + (B + C)$.

**2. Scalar Multiplication**
Multiply every element by the scalar $k$:
$$kA = \begin{pmatrix} ka_{11} & ka_{12} \\ ka_{21} & ka_{22} \end{pmatrix}$$

**3. Matrix Multiplication (Row × Column)**
The product $AB$ is defined only when the **number of columns of $A$ equals the number of rows of $B$**. If $A_{m \times p}$ and $B_{p \times n}$, then $AB$ is $m \times n$.
The $(i,j)$ entry of $AB$ is the dot product of the $i$th row of $A$ with the $j$th column of $B$:
$$(AB)_{ij} = \sum_{k=1}^{p} a_{ik} b_{kj}$$

**Critical property:** Matrix multiplication is **NOT commutative** in general. That is, $AB \neq BA$.
- $AB$ may be defined while $BA$ is not (dimension mismatch).
- Even when both exist, $AB \neq BA$ typically.

Example: Let $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.
$$AB = \begin{pmatrix} 1(0)+2(1) & 1(1)+2(0) \\ 0(0)+1(1) & 0(1)+1(0) \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix}$$
$$BA = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 2 \end{pmatrix} \neq AB$$

**Associative law:** $(AB)C = A(BC)$
**Distributive law:** $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$

**4. Transpose**
The transpose $A^T$ swaps rows and columns: $(A^T)_{ij} = a_{ji}$.
$$(A + B)^T = A^T + B^T$$
$$(AB)^T = B^T A^T \quad \text{(note the reversal!)}$$

**Key Identity Properties:**
$$(A^T)^T = A, \quad (kA)^T = kA^T, \quad (AB)^T = B^T A^T$$

**Determinant of a 2×2 Matrix:**
For $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the determinant is:
$$|A| = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$$

**NDA Worked Example (2019):**
Find the determinant of $A = \begin{pmatrix} 3 & -1 \\ 2 & 4 \end{pmatrix}$.
$$|A| = (3)(4) - (-1)(2) = 12 + 2 = 14$$

**Determinant of a 3×3 Matrix** (expansion along first row):
$$|A| = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31})$$

Example: Find $|B|$ where $B = \begin{pmatrix} 1 & 2 & -1 \\ 3 & 0 & 1 \\ -2 & 1 & 4 \end{pmatrix}$
$$|B| = 1(0 \cdot 4 - 1 \cdot 1) - 2(3 \cdot 4 - 1 \cdot (-2)) + (-1)(3 \cdot 1 - 0 \cdot (-2))$$
$$= 1(-1) - 2(12 + 2) + (-1)(3) = -1 - 28 - 3 = -32$$

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory, derivations, and advanced problem types for thorough NDA preparation.

**Singular and Non-Singular Matrices**

A matrix $A$ is **singular** if $|A| = 0$. It is **non-singular** (or invertible) if $|A| \neq 0$.
Only non-singular matrices possess a multiplicative inverse.

**Adjoint and Inverse**

The **cofactor** $C_{ij}$ of element $a_{ij}$ is:
$$C_{ij} = (-1)^{i+j} M_{ij}$$
where $M_{ij}$ is the **minor** (determinant of the submatrix obtained by deleting row $i$ and column $j$).

The **cofactor matrix** is $[C_{ij}]$. Its transpose is the **adjoint**:
$$\text{adj}(A) = [C_{ij}]^T$$

The **inverse** of $A$ is:
$$A^{-1} = \frac{\text{adj}(A)}{|A|}, \quad |A| \neq 0$$

Verification: $A \cdot A^{-1} = I_n = A^{-1} \cdot A$

Example: Find $A^{-1}$ for $A = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}$.
$$|A| = (2)(2) - (1)(3) = 4 - 3 = 1 \neq 0 \quad \Rightarrow \text{ non-singular}$$
$C_{11} = 2,\ C_{12} = -3,\ C_{21} = -1,\ C_{32} = 2$
Cofactor matrix: $\begin{pmatrix} 2 & -3 \\ -1 & 2 \end{pmatrix}$
$\text{adj}(A) = \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix}$
$$A^{-1} = \frac{1}{1}\begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix}$$

**Solving Simultaneous Equations via Matrix Inversion**

For the system:
$$a_1 x + b_1 y = c_1$$
$$a_2 x + b_2 y = c_2$$

Write in matrix form: $AX = B$, where $A = \begin{pmatrix} a_1 & b_1 \\ a_2 & b_2 \end{pmatrix}$, $X = \begin{pmatrix} x \\ y \end{pmatrix}$, $B = \begin{pmatrix} c_1 \\ c_2 \end{pmatrix}$.
Since $|A| \neq 0$, $X = A^{-1} B$.

**Cramer's Rule** (special case of matrix inversion):

$$x = \frac{|A_x|}{|A|}, \quad y = \frac{|A_y|}{|A|}$$
where $A_x$ replaces the first column of $A$ with $B$, and $A_y$ replaces the second column.

**NDA Worked Example (Cramer's Rule):**
Solve: $2x + 3y = 8$ and $x - 2y = -3$.
$$|A| = \begin{vmatrix} 2 & 3 \\ 1 & -2 \end{vmatrix} = 2(-2) - 3(1) = -4 - 3 = -7$$
$$|A_x| = \begin{vmatrix} 8 & 3 \\ -3 & -2 \end{vmatrix} = 8(-2) - 3(-3) = -16 + 9 = -7$$
$$|A_y| = \begin{vmatrix} 2 & 8 \\ 1 & -3 \end{vmatrix} = 2(-3) - 8(1) = -6 - 8 = -14$$
$$x = \frac{-7}{-7} = 1, \quad y = \frac{-14}{-7} = 2$$

**Rank of a Matrix**

The **rank** $r(A)$ is the maximum number of linearly independent rows (or columns). It equals the order of the largest non-zero minor.

Key results:
- $r(A) \leq \min(m, n)$ for an $m \times n$ matrix
- $r(A^T) = r(A)$
- $r(AB) \geq r(A) + r(B) - n$ (Sylvester's inequality)
- If $r(A) = n$ (full column rank), $A$ has a left-inverse
- If $r(A) = m$ (full row rank), $A$ has a right-inverse

**Finding rank by elementary operations:**
Use row reduction (Gaussian elimination) to get an upper triangular form. The number of non-zero rows = rank.

**NDA Previous Year Pattern:**
Questions on rank typically ask: "Find the rank of $\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{pmatrix}$."
Here row 2 = 2(row 1) and row 3 = 3(row 1), so rank = 1.

| Topic | NDA Weight (1–5) | Frequency |
|---|---|---|
| Matrix types & transpose | ★★★★ | Every year |
| Matrix multiplication | ★★★★ | Every year |
| Determinant calculation | ★★★★★ | Every year |
| Adjoint & inverse | ★★★★ | Alternating |
| Cramer's rule | ★★★★ | Alternating |
| Rank of matrix | ★★★ | Occasional |

**Extended formula sheet:**
$$|kA_{n \times n}| = k^n |A|$$
$$|AB| = |A||B|$$
$$|A^{-1}| = \frac{1}{|A|}$$
$$(A^{-1})^{-1} = A$$
$$(AB)^{-1} = B^{-1}A^{-1}$$

The NDA Mathematics paper typically has 120 questions total; matrices and determinants together contribute approximately 8–12 questions, making them high-priority topics for any preparation strategy.