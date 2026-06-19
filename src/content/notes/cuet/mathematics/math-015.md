---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-015
topicName: Determinants
weight: 3
country: india
generated: "2026-03-29T05:05:38"
lastUpdated: "2026-06-19"
---

# Determinants

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **determinant** is a scalar value assigned to every square matrix. For a 2×2 matrix $\begin{pmatrix}a & b\\c & d\end{pmatrix}$, the value is $\mathbf{ad - bc}$; for a 3×3 matrix it is computed by **cofactor expansion** along any row or column. The determinant of matrix $A$ (written $|A|$ or $\det A$) tells you whether $A$ is **invertible**: $\det A \neq 0 \Rightarrow A$ is non-singular. The geometric reading: $|\det A|$ equals the area of the parallelogram spanned by the column vectors of a 2×2 matrix, and the volume of the parallelepiped for 3×3. Must-remember identities: $\det(AB)=\det A \cdot \det B$, $\det(A^T)=\det A$, $\det(kA)=k^n\det A$, and $A^{-1}=\dfrac{1}{\det A}\operatorname{adj}(A)$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definition and Notation
For a square matrix $A$ of **order $n$**, the determinant is a number obtained by a specific recursive recipe. It is denoted $|A|$ or $\det A$ and exists **only for square** matrices. Determinant and matrix are different objects: $A$ is a table of numbers, $|A|$ is one number.

#### Computing 2×2 and 3×3 Determinants
- 2×2: $\det\begin{pmatrix}a & b\\ c & d\end{pmatrix}=ad-bc$.
- 3×3 (expansion along row 1): $\det A = a_{11}(a_{22}a_{33}-a_{23}a_{32}) - a_{12}(a_{21}a_{33}-a_{23}a_{31}) + a_{13}(a_{21}a_{32}-a_{22}a_{31})$.

#### Cofactor and Minor
The **minor** $M_{ij}$ is the determinant of the $(n-1)\times(n-1)$ submatrix obtained by deleting row $i$ and column $j$. The **cofactor** is $C_{ij}=(-1)^{i+j}M_{ij}$, with the sign following the checkerboard pattern $\begin{pmatrix}+&-\\ -&+\end{pmatrix}$. Expansion: $\det A = \sum_j a_{ij}C_{ij}$ along any chosen row $i$.

#### Elementary Operation Properties
| Operation | Effect on $\|A\|$ |
|---|---|
| $R_i \leftrightarrow R_j$ (row swap) | sign flips: $\|A\|\to -\|A\|$ |
| $R_i \to kR_i$ (row scaling) | $\|A\|\to k\|A\|$ |
| $R_i \to R_i + kR_j$ (add multiple) | **no change** |
| Identical/proportional rows or columns | $\|A\|=0$ |

#### Inverse via Adjoint
When $\det A\neq 0$, $A^{-1}=\dfrac{1}{\det A}\operatorname{adj}(A)$, where $\operatorname{adj}(A)$ is the **transpose of the cofactor matrix**. If $\det A=0$, the matrix is **singular** and no inverse exists.

#### Geometric Meaning
For a 2×2 matrix whose columns are vectors $\vec{u},\vec{v}$, $|\det A|$ equals the area of the parallelogram with sides $\vec{u},\vec{v}$. For 3×3, $|\det A|$ equals the volume of the parallelepiped formed by the three column vectors.

#### CUET-Style Question Patterns
Expect (i) direct 2×2/3×3 evaluation, (ii) MCQs on "$\det A=0 \iff$ rows linearly dependent", (iii) using $A^{-1}=\frac{1}{\det A}\operatorname{adj}(A)$ to find the inverse of a 2×2 matrix, and (iv) area/volume questions phrased in vectors.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Product, Transpose and Scalar Rules — Why They Matter
The identity $\det(AB)=\det A \cdot \det B$ is the workhorse behind **Cramer's rule**: solving $AX=B$ gives $x_i = \det(A_i)/\det A$. From it follow $\det(A^{-1})=1/\det A$ and $\det(A^n)=(\det A)^n$. The rule $\det(kA)=k^n\det A$ (not $k\det A$) trips up students who forget the dimension: scaling an $n\times n$ matrix by $k$ scales its $n$ rows, so the factor compounds to $k^n$.

#### Triangular and Block Tricks
For an **upper or lower triangular** matrix, $\det A$ is simply the product of the diagonal entries. Row-reducing a matrix to triangular form while tracking each swap and row-scaling lets you compute large determinants without cofactor expansion — a standard CUET time-saver.

#### Common Traps in CUET
- Writing $\det(A+B)=\det A+\det B$ — **false in general**. Only row/column splits inside one row work.
- Confusing $|A|$ (determinant) with $A$ (matrix) in statements.
- Sign slip in cofactors: $(-1)^{i+j}$ is mandatory; an omitted sign yields a wrong value with a correct-looking expansion.
- Dividing by $\det A$ when computing $A^{-1}$ without verifying $\det A\neq 0$.

#### Connection to Other CUET Topics
Determinants feed directly into **Matrices** (inverse, rank), **Linear Equations** (Cramer's rule, consistency via $\det A\neq 0$), and **Vector Algebra** (area of triangle = $\tfrac12|\det(\vec{b}-\vec{a},\vec{c}-\vec{a})|$, scalar triple product = determinant of the $3\times 3$ vector matrix). Mastering the 3×3 expansion here removes friction from JEE-level 3D geometry later.

#### Worked Micro-Example
For $A=\begin{pmatrix}2 & 1 & 0\\ 1 & 3 & 2\\ 0 & 1 & 4\end{pmatrix}$, expand along column 3 (two zeros): $\det A = -2\cdot C_{23}+4\cdot C_{33}$. We get $C_{23}=-\det\begin{pmatrix}2&1\\0&1\end{pmatrix}=-2$ and $C_{33}=\det\begin{pmatrix}2&1\\1&3\end{pmatrix}=5$. So $\det A = -2(-2)+4(5)=4+20=24$. Area of the parallelogram of its first two columns is $24$ square units, and $A$ is invertible with $A^{-1}=\tfrac{1}{24}\operatorname{adj}(A)$.

#### Practice Prompts
1. Compute $\det\begin{pmatrix}1 & 2 & 3\\ 0 & 4 & 5\\ 0 & 0 & 6\end{pmatrix}$ without expansion, then verify the diagonal-product rule.
2. If $\det A=5$ for a $3\times 3$ matrix, state $\det(2A)$, $\det(A^2)$, and $\det(A^{-1})$ with reasoning.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
