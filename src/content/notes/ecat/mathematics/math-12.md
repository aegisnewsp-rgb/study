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
lastUpdated: "2026-09-08"
diagramPrompt: "Mathematical diagram showing Matrices and Determinants concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Matrices and Determinants

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **matrix** is a rectangular array of real numbers written in rows and columns, with order $m \times n$ meaning $m$ rows and $n$ columns. A **determinant** is a single scalar $|A|$ computed only from a *square* matrix; it tells you whether the matrix is invertible (nonzero determinant) and how it scales area or volume under linear transformation.

- **2×2 determinant:** $|A| = ad - bc$ for $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$.
- **3×3 determinant (Sarrus' rule):** sum of three forward diagonals minus three backward diagonals.
- **Inverse formula:** $A^{-1} = \dfrac{1}{|A|}\text{adj}(A)$, valid only when $|A| \neq 0$.
- **Cramer's rule:** for $AX = B$, each unknown $x_i = \dfrac{|A_i|}{|A|}$.
- **Common trap:** $AB \neq BA$ in general, and $\det(A+B) \neq \det A + \det B$.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Matrix Basics and Classification

A matrix $A$ of order $m \times n$ has $m$ rows and $n$ columns; two matrices are *equal* only when orders match and every entry matches. A matrix is **square** when $m = n$, **symmetric** when $A^T = A$, and **skew-symmetric** when $A^T = -A$ (diagonal entries must then be zero). The **identity matrix** $I_n$ has 1s on the main diagonal and 0s elsewhere; it satisfies $AI = IA = A$.

#### Determinants and Cofactor Expansion

For a 3×3 matrix $A = \begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix}$, applying Sarrus' rule gives:
$$|A| = a(ei - fh) - b(di - fg) + c(dh - eg).$$

Cofactor expansion generalises this: $|A| = \sum_j a_{ij} C_{ij}$, where $C_{ij} = (-1)^{i+j} M_{ij}$ and $M_{ij}$ is the minor from deleting row $i$, column $j$. Pick the row or column with the most zeros to save arithmetic.

#### Key Properties and Operations

| Property | Statement |
| --- | --- |
| Multiplicative | $\det(AB) = \det(A)\det(B)$ |
| Transpose | $\det(A^T) = \det(A)$ |
| Scalar pull-out | $\det(kA) = k^n \det(A)$ for an $n \times n$ matrix |
| Inverse | $\det(A^{-1}) = 1/\det(A)$ when $|A| \neq 0$ |

Matrix multiplication is defined only when the inner dimensions match: $(m \times n)(n \times p) \to (m \times p)$. It is associative and distributive, but **not commutative**.

#### Solving Systems and Cramer's Rule

For $AX = B$ with $|A| \neq 0$, the unique solution is $X = A^{-1}B$. Cramer's rule gives each component as $x_i = |A_i|/|A|$, where $A_i$ replaces column $i$ of $A$ with $B$.

- Practice computing minors before attempting a full 3×3 expansion.
- Always check $|A| \neq 0$ *before* dividing to find $A^{-1}$.
- Use the property $\det(AB) = \det(A)\det(B)$ to factor tough determinants into easier blocks.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Common Mistakes

ECAT items on this topic often hinge on sign discipline and the non-additivity of determinants. A 3×3 matrix multiplied by a scalar $k$ does *not* triple its determinant; the factor becomes $k^3$. Likewise, $\det(A+B)$ is rarely equal to $\det A + \det B$, because the determinant is a multilinear function of rows or columns, not a linear one over the whole matrix. Students also confuse $A^T A$ with $AA^T$ — both are square but generally different unless $A$ is itself symmetric.

For $2 \times 2$ matrices, $A^{-1} = \dfrac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$, but if $ad - bc = 0$ the matrix is **singular** and no inverse exists; in that case Cramer's rule also fails because every $|A_i|$ must equal 0 for consistency of the system.

#### Worked Example: Triangle Area

Find the area of the triangle with vertices $(1, 2)$, $(4, 5)$, $(7, 2)$:
$$A = \frac{1}{2}\left| 1(5-2) + 4(2-2) + 7(2-5) \right| = \frac{1}{2}|9 + 0 - 21| = 6 \text{ square units.}$$

| Step | Computation |
| --- | --- |
| Substitute coordinates | $x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)$ |
| Evaluate | $1(3) + 4(0) + 7(-3) = 9 - 21 = -12$ |
| Take half-absolute | $\frac{1}{2}\lvert -12 \rvert = 6$ |

#### Practice Prompts

1. If $A$ is $3 \times 3$ with $\det A = 4$, find $\det(3A^{-1})$ and $\det(A^T B)$ when $\det B = 5$.
2. For the system $2x + y = 7$, $x - 3y = -8$, solve using Cramer's rule and verify with $X = A^{-1}B$.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Matrices and Determinants" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
