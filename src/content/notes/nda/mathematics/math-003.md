---



exam: nda
examName: NDA
subject: mathematics
subjectName: Mathematics
topic: math-003
topicName: Determinants
weight: 4
country: india
generated: "2026-03-24T08:32:07.806213"
diagramPrompt: Mathematical diagram showing Determinants concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Determinants

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Determinants — Quick Facts**

A determinant is a scalar value computed from a square matrix. It encodes important properties of the matrix and appears throughout algebra and calculus.

**Order 2 Determinant:**
For a $2 \times 2$ matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:
$$\Delta = |A| = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$$

**Order 3 Determinant (Sarrus' Rule):**
For $A = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}$:

Copy the first two columns to the right of the determinant. The determinant equals the sum of products along the three forward diagonals minus the sum of products along the three backward diagonals:

$$\Delta = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33}$$

Alternatively, use expansion along the first row:
$$\Delta = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31})$$

⚡ **NDA Exam Tip:** Sarrus' rule works only for $3 \times 3$ determinants. For larger determinants, always use cofactor expansion. In a time-pressured exam, write out the nine elements clearly before applying the formula to avoid sign errors.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding and problem-solving fluency.

**Key Properties of Determinants**

| Property | Formula | Notes |
|---|---|---|
| Transpose | $\|A^T\| = \|A\|$ | Determinant unchanged on transpose |
| Multiplicative | $\|AB\| = \|A\|\|B\|$ | Product rule |
| Scalar multiple | $\|kA_{n \times n}\| = k^n \|A\|$ | $k$ raised to the matrix order |
| Interchanging rows | Swapping two rows changes sign | $\|A\| \to -\|A\|$ |
| Identical rows | $\|A\| = 0$ if any two rows are equal | |
| Row of zeros | $\|A\| = 0$ if any row is all zeros | |
| Triangular matrix | $\|A\| = a_{11}a_{22}\cdots a_{nn}$ | Product of diagonal entries only |

These properties are frequently exploited in NDA questions to simplify determinant evaluation without expanding fully.

**Minors and Cofactors**

For element $a_{ij}$ in a $3 \times 3$ matrix:

- **Minor** $M_{ij}$ = determinant of the $2 \times 2$ submatrix obtained by deleting row $i$ and column $j$
- **Cofactor** $C_{ij} = (-1)^{i+j} M_{ij}$

Example: For $A = \begin{pmatrix} 3 & 1 & -2 \\ 4 & -1 & 2 \\ 1 & 2 & 5 \end{pmatrix}$, find $C_{23}$:
$$M_{23} = \begin{vmatrix} 3 & 1 \\ 1 & 2 \end{vmatrix} = 3(2) - 1(1) = 6 - 1 = 5$$
$$C_{23} = (-1)^{2+3} \cdot 5 = -5$$

**Adjoint of a Matrix**

The adjoint of $A$ (denoted $\text{adj}(A)$) is the transpose of the cofactor matrix:
$$\text{adj}(A) = [C_{ij}]^T$$

For a $2 \times 2$ matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:
$$\text{adj}(A) = \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

This gives a quick formula: $A^{-1} = \frac{\text{adj}(A)}{|A|}$ (when $|A| \neq 0$).

**NDA Worked Example:**
Let $A = \begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix}$. Find $\text{adj}(A)$ and hence $A^{-1}$.

$$|A| = 2(4) - 3(1) = 8 - 3 = 5 \neq 0 \text{ (non-singular)}$$
Cofactor matrix: $\begin{pmatrix} 4 & -3 \\ -1 & 2 \end{pmatrix}$
$$\text{adj}(A) = \begin{pmatrix} 4 & -1 \\ -3 & 2 \end{pmatrix}$$
$$A^{-1} = \frac{1}{5}\begin{pmatrix} 4 & -1 \\ -3 & 2 \end{pmatrix}$$

**Singular and Non-Singular Matrices**

- **Singular matrix:** $|A| = 0$ — does not have an inverse
- **Non-singular matrix:** $|A| \neq 0$ — has an inverse given by $A^{-1} = \frac{\text{adj}(A)}{|A|}$

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory, derivations, and advanced problem types for thorough NDA preparation.

**Cramer's Rule for Solving Linear Equations**

**Two Variables:**
For the system:
$$a_1 x + b_1 y = c_1$$
$$a_2 x + b_2 y = c_2$$

Let $D = \begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix}$, $D_x = \begin{vmatrix} c_1 & b_1 \\ c_2 & b_2 \end{vmatrix}$, $D_y = \begin{vmatrix} a_1 & c_1 \\ a_2 & c_2 \end{vmatrix}$.

If $D \neq 0$:
$$x = \frac{D_x}{D}, \quad y = \frac{D_y}{D}$$

**NDA Worked Example (2020):**
Solve: $3x + 4y = 11$ and $2x + y = 4$.
$$D = \begin{vmatrix} 3 & 4 \\ 2 & 1 \end{vmatrix} = 3(1) - 4(2) = 3 - 8 = -5$$
$$D_x = \begin{vmatrix} 11 & 4 \\ 4 & 1 \end{vmatrix} = 11(1) - 4(4) = 11 - 16 = -5$$
$$D_y = \begin{vmatrix} 3 & 11 \\ 2 & 4 \end{vmatrix} = 3(4) - 11(2) = 12 - 22 = -10$$
$$x = \frac{-5}{-5} = 1, \quad y = \frac{-10}{-5} = 2$$

**Three Variables:**
For the system:
$$a_1 x + b_1 y + c_1 z = d_1$$
$$a_2 x + b_2 y + c_2 z = d_2$$
$$a_3 x + b_3 y + c_3 z = d_3$$

$$x = \frac{D_x}{D},\quad y = \frac{D_y}{D},\quad z = \frac{D_z}{D}$$

where $D_x$, $D_y$, $D_z$ are obtained by replacing the respective column of $D$ with the constants column.

**NDA Worked Example:**
Solve: $x + y + z = 6$, $2x - y + z = 3$, $x + 2y - z = 2$.

$$D = \begin{vmatrix} 1 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 2 & -1 \end{vmatrix}$$
Expanding along row 1:
$$= 1[(-1)(-1) - (1)(2)] - 1[(2)(-1) - (1)(1)] + 1[(2)(2) - (-1)(1)]$$
$$= 1[1 - 2] - 1[-2 - 1] + 1[4 + 1] = -1 + 3 + 5 = 7$$

$$D_x = \begin{vmatrix} 6 & 1 & 1 \\ 3 & -1 & 1 \\ 2 & 2 & -1 \end{vmatrix} = 6[(-1)(-1)-(1)(2)] - 1[(3)(-1)-(1)(2)] + 1[(3)(2)-(-1)(2)]$$
$$= 6[1-2] - 1[-3-2] + 1[6+2] = -6 + 5 + 8 = 7 \Rightarrow x = 1$$

$$D_y = \begin{vmatrix} 1 & 6 & 1 \\ 2 & 3 & 1 \\ 1 & 2 & -1 \end{vmatrix} = 1[(3)(-1)-(1)(2)] - 6[(2)(-1)-(1)(1)] + 1[(2)(2)-(3)(1)]$$
$$= -5 + 30 - 1 = 24 \Rightarrow y = \frac{24}{7} \approx 3.43$$

(NDA exam answers may be left as fractions.)

**Homogeneous Equations**

A system $Ax + By + Cz = 0$ (all constants zero) always has the trivial solution $x = y = z = 0$.
For non-trivial solutions to exist, the determinant of the coefficient matrix must be zero:
$$\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = 0$$

**Area of a Triangle Using Determinants**

Given vertices $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$, the area is:
$$\text{Area} = \frac{1}{2}\begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix}$$

**NDA Worked Example:**
Find the area of the triangle with vertices $(1, 2)$, $(3, 5)$, and $(4, 1)$.
$$\text{Area} = \frac{1}{2}\begin{vmatrix} 1 & 2 & 1 \\ 3 & 5 & 1 \\ 4 & 1 & 1 \end{vmatrix} = \frac{1}{2}|1(5-1) - 2(3-4) + 1(3-20)| = \frac{1}{2}|4 + 2 - 17| = \frac{11}{2}$$

The area will always be non-negative; take the absolute value of the determinant.

**Product of Determinants**

If $A$ and $B$ are both $n \times n$ matrices:
$$\|AB\| = \|A\|\|B\| = \|BA\|$$

This property can simplify complex determinant calculations by factorising matrices.

**Previous Year NDA Question Patterns:**

| Year | Topic Asked |
|---|---|
| 2021 | Evaluate 3×3 determinant; find area of triangle |
| 2020 | Cramer's rule (2 variables); adjoint |
| 2019 | Verify $\|AB\| = \|A\|\|B\|$; singular/non-singular classification |
| 2018 | Minor and cofactor expansion; homogeneous equations |
| 2017 | Find $A^{-1}$ via adjoint; verify $AA^{-1} = I$ |

The determinant chapter typically yields 3–5 questions per NDA paper. Master the expansion techniques, property-based shortcuts, and Cramer's rule applications for maximum efficiency in the exam.