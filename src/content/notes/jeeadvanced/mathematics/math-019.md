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
lastUpdated: "2026-07-15"
diagramPrompt: "Mathematical diagram showing Determinants concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Determinants

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- **Definition:** For a square matrix $A$ of order $n$, the **determinant** $\det(A)$ is a scalar computed by the **Laplace (cofactor) expansion** along any chosen row $i$ using $\det(A)=\sum_{j=1}^{n}a_{ij}\cdot C_{ij}$, where each cofactor $C_{ij}=(-1)^{i+j}M_{ij}$ and $M_{ij}$ is the **minor** obtained by deleting row $i$ and column $j$.
- **2×2 and 3×3 must-knows:** $\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc$; for $3\times 3$ use Sarrus' rule or cofactor expansion.
- **Invertibility test:** $A^{-1}=\dfrac{1}{\det(A)}\,\text{adj}(A)$ exists **iff** $\det(A)\neq 0$.
- **High-yield JEE pointers:** $\det(AB)=\det(A)\det(B)$, $\det(A^{T})=\det(A)$, $\det(kA)=k^{n}\det(A)$; Cramer's rule gives $x_k=\dfrac{\det(A_k)}{\det(A)}$; area of triangle with vertices $(x_i,y_i)$ is $\dfrac{1}{2}\left|\det\begin{pmatrix}1&x_1&y_1\\1&x_2&y_2\\1&x_3&y_3\end{pmatrix}\right|$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Evaluation and Cofactor Expansion
A determinant is **multilinear** in rows (and columns), **alternating** (swapping two rows multiplies it by $-1$), and unchanged when a multiple of one row is added to another. These three properties are what every JEE Advanced proof-of-identity question ultimately relies on, because they let you *reduce* a messy determinant to a triangular one whose value is just the product of the diagonal entries.

For a $3\times 3$ matrix $\begin{pmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{pmatrix}$, Sarrus' rule gives $a_1(b_2c_3-b_3c_2)-b_1(a_2c_3-a_3c_2)+c_1(a_2b_3-a_3b_2)$. **Sarrus fails for $n\ge 4$** — use cofactor expansion or row-reduction there.

#### Key Algebraic Properties

| Property | Statement | Typical JEE Use |
|---|---|---|
| Product rule | $\det(AB)=\det(A)\det(B)$ | Showing $\det(A^{-1})=1/\det(A)$ |
| Transpose | $\det(A^{T})=\det(A)$ | Switching a row/column question to the easier orientation |
| Scalar pull-out | $\det(kA)=k^{n}\det(A)$ | MCQ trap: answer is $k^{n}$, not $k$ |
| Sum | $\det(A+B)\neq\det(A)+\det(B)$ | Assertion–reason false statement |
| Singularity | $\det(A)=0\iff$ rows linearly dependent | Consistency of linear systems |

#### Cramer's Rule and Adjoint Inverse
For $AX=B$ with $\det(A)\neq 0$, **Cramer's rule** yields $x_k=\dfrac{\det(A_k)}{\det(A)}$ where $A_k$ is $A$ with its $k$-th column replaced by $B$. This is exam-efficient for $2\times 2$ and $3\times 3$ systems but impractical for larger ones. The adjoint identity $A\cdot\text{adj}(A)=\det(A)\,I_n$ is the bridge to the **inverse matrix formula** above.

#### Typical Question Patterns
- **Type 1 — Pure evaluation:** Compute $\det(A)$ for a $3\times 3$ or $4\times 4$ matrix with parameter(s); the answer is usually a polynomial whose roots give singular values.
- **Type 2 — Proof of identity:** Show $\det(\text{expression})=0$ using row/column operations without fully expanding.
- **Type 3 — Cramer's rule application:** Solve a $3\times 3$ linear system, often embedded inside a coordinate-geometry problem.
- **Type 4 — Area/collinearity:** Three points are collinear iff the $3\times 3$ determinant with a row of $1$'s equals zero.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Traps
- **Scalar multiplication trap:** $\det(kA)=k^{n}\det(A)$ for an $n\times n$ matrix. Students routinely write $k\det(A)$ and lose marks in integer-answer questions.
- **Triangular shortcut:** For an upper or lower triangular matrix, $\det(A)=\prod a_{ii}$. Gaussian elimination preserves the determinant up to row-swap sign changes and row-scaling factors — a faster $4\times 4$ evaluation than cofactor expansion.
- **Block matrices:** $\det\begin{pmatrix}P&Q\\R&S\end{pmatrix}=\det(P)\det(S-RP^{-1}Q)$ when $P$ is invertible (Schur complement); symmetric form when blocks commute.
- **System consistency (homogeneous):** $AX=0$ has a non-trivial solution iff $\det(A)=0$ — this is the workhorse behind rank-based questions in Matrices.
- **Characteristc equation:** $\det(A-\lambda I)=0$ gives eigenvalues, directly linking determinants to the **Eigenvalues & Eigenvectors** chapter.

#### Worked Micro-Example
Evaluate $\det\begin{pmatrix}1&2&3\\4&5&6\\7&8&10\end{pmatrix}$ using row operations (faster than Sarrus here).

$R_2 \leftarrow R_2-4R_1,\; R_3\leftarrow R_3-7R_1$ gives $\begin{pmatrix}1&2&3\\0&-3&-6\\0&-6&-11\end{pmatrix}$; determinant unchanged.

Now $R_3\leftarrow R_3-2R_2$ gives $\begin{pmatrix}1&2&3\\0&-3&-6\\0&0&1\end{pmatrix}$, an upper triangular form, so $\det = 1\cdot(-3)\cdot 1=-3$. The matrix is nonsingular, and any Cramer-system built from it is solvable.

#### Common Mistakes (compile-this list)
1. Forgetting the $(-1)^{i+j}$ sign in cofactor expansion, especially on the $(1,2),(1,3),(2,1)$ positions.
2. Using Sarrus' diagonal-copy trick on a $4\times 4$ matrix and trusting the answer.
3. Dividing by $\det(A)$ in Cramer's rule without first checking $\det(A)\neq 0$.
4. Omitting the absolute value in the triangle-area formula, getting a negative area.
5. Assuming $\det(A+B)=\det(A)+\det(B)$ (it does **not** distribute over addition).
6. Treating proportionality of *one* row to another as automatic singularity — for $n\ge 4$, linear dependence can be more subtle.

#### Cross-Chapter Links
- **Vector Algebra:** $\vec{a}\cdot(\vec{b}\times\vec{c})$ equals the determinant of the $3\times 3$ matrix whose rows (or columns) are the components — scalar triple product = determinant.
- **Coordinate Geometry:** Area, collinearity, and the equation of a line through two points all reduce to determinant conditions.
- **Differential Equations:** The **Wronskian** $W(y_1,y_2)=\det\begin{pmatrix}y_1&y_2\\y_1'&y_2'\end{pmatrix}$ uses the same cofactor machinery.
- **Matrices:** The inverse formula and rank-nullity arguments both flow from the determinant being zero/non-zero.

#### Practice Prompts
1. Without expanding fully, prove that $\begin{vmatrix}1&a&a^2\\1&b&b^2\\1&c&c^2\end{vmatrix}=(a-b)(b-c)(c-a)$ using only elementary row operations.
2. For what values of $\lambda$ does the system $x+2y+3z=\lambda x$, $4x+5y+6z=\lambda y$, $7x+8y+10z=\lambda z$ have a non-trivial solution? (Hint: rewrite as $(A-\lambda I)x=0$.)

> **Exam strategy:** JEE Advanced typically awards 1 mark per MCQ and 3 marks per numerical here. Budget ~2 minutes for a $3\times 3$ evaluation and ~4 minutes for a $4\times 4$ property-based proof. If $\det(A)$ is messy, switch to row-reduction **before** expanding — it almost always beats Sarrus on time.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Determinants" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeeadvanced/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
