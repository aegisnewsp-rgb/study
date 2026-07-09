---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-014
topicName: Matrices
weight: 3
country: india
generated: "2026-03-29T05:05:39"
lastUpdated: "2026-07-09"
---

# Matrices

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **matrix** is a rectangular array of numbers written in **m rows** and **n columns**, with order **m × n**. The entry in row i and column j is denoted **a_ij**. Two matrices can be added only when their orders match, and multiplication **A · B** is defined only when the number of columns of A equals the number of rows of B.

For a square matrix A of order n, the **inverse** is A⁻¹ = (1/det A) · adj A, which exists only when det A ≠ 0. A linear system **AX = B** is solved by **X = A⁻¹B** when A is non-singular. For a 2 × 2 matrix A = [[a, b], [c, d]], det A = ad − bc and A⁻¹ = (1/(ad − bc)) [[d, −b], [−c, a]].

#### High-yield pointers for CUET UG:
- Matrices carry roughly 2–3 questions per attempt and contribute about 3% of the Mathematics paper.
- Watch the property **(AB)⁻¹ = B⁻¹A⁻¹** — the order reverses, a classic MCQ trap.
- Cramer's rule applies only to non-singular systems; do not use it when det A = 0.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definitions and Types

A matrix A = [a_ij] of order m × n has m · n entries. Special types include the **square matrix** (m = n), **diagonal matrix** (a_ij = 0 for i ≠ j), **identity matrix I_n** (diagonal entries 1, all others 0), **null matrix** (every entry 0), and **symmetric / skew-symmetric** matrices where Aᵀ = A or Aᵀ = −A respectively.

#### Operations and Transpose

Addition is entry-wise: (A + B)_ij = a_ij + b_ij, requiring equal orders. Scalar multiplication scales every entry. For product **AB**, the inner dimensions must match: if A is m × n and B is n × p, the result is m × p with (AB)_ij = Σ a_ik · b_kj. Transposition swaps rows and columns, and obeys **(A + B)ᵀ = Aᵀ + Bᵀ** along with **(AB)ᵀ = BᵀAᵀ** — again, the order reverses.

#### Inverse and Solving AX = B

For a square matrix A, the inverse satisfies **AA⁻¹ = A⁻¹A = I** and exists only when det A ≠ 0. A non-singular system AX = B has the unique solution **X = A⁻¹B**, computed efficiently for 2 × 2 by swapping diagonal entries, negating off-diagonals, and dividing by det A.

#### Cramer's Rule

For AX = B with det A ≠ 0, each unknown is **x_i = det(A_i) / det(A)**, where A_i is A with its i-th column replaced by B. The rule is fast for n = 2 or 3 but breaks down for singular systems.

| Operation | Requirement | Key Property |
|---|---|---|
| A + B | Same order m × n | Commutative, associative |
| cA | Any order | (cA)ᵀ = cAᵀ |
| AB | Cols of A = Rows of B | (AB)ᵀ = BᵀAᵀ |
| A⁻¹ | Square, det A ≠ 0 | (AB)⁻¹ = B⁻¹A⁻¹ |

> **Tip:** In CUET MCQs, you can often eliminate a wrong option by checking the **order** of the claimed product or inverse — students lose marks by not verifying dimensions first.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Determinant Expansion and Minors vs Cofactors

For order 3, det A expands along any row or column: det A = a_11(a_22a_33 − a_23a_32) − a_12(a_21a_33 − a_23a_31) + a_13(a_21a_32 − a_22a_31). The **minor M_ij** is the determinant of the (n − 1) × (n − 1) submatrix obtained by deleting row i and column j, while the **cofactor C_ij = (−1)^{i+j} · M_ij** carries the sign. Confusing these signs is one of the most frequent calculation errors in CUET numericals.

#### Rank and Consistency of Linear Systems

The **rank** of A is the number of non-zero rows in its row-echelon form after elementary operations. For the augmented matrix [A | B]:

- If **rank(A) = rank([A | B]) = n**, the system has a **unique solution**.
- If **rank(A) = rank([A | B]) < n**, the system has **infinitely many solutions**.
- If **rank(A) < rank([A | B])**, the system is **inconsistent** with **no solution**.

#### Geometric Applications

The **area of a triangle** with vertices (x₁, y₁), (x₂, y₂), (x₃, y₃) equals **(1/2)|det M|** where M has rows (x₁, y₁, 1), (x₂, y₂, 1), (x₃, y₃, 1). Matrices also encode **rotations and reflections** as linear transformations, useful in coordinate geometry questions.

#### Special Matrix Classes

An **idempotent** matrix satisfies A² = A, an **involutory** matrix satisfies A² = I, and a **nilpotent** matrix satisfies Aᵏ = 0 for some k. An **orthogonal** matrix satisfies AᵀA = I, equivalently A⁻¹ = Aᵀ.

> **Trap alert:** Never assume a skew-symmetric matrix has zero determinant — the result holds only for odd orders; for even order, det A can be a perfect square (non-negative). Always verify on the given order.

#### Practice Prompts

1. If A = [[2, 1], [7, 4]] and B = [[1, 0], [2, 1]], compute AB and verify (AB)⁻¹ = B⁻¹A⁻¹ numerically.
2. Solve the system 2x + 3y = 8, 4x + 5y = 14 using both the inverse method and Cramer's rule; confirm the result.

---

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Matrices" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
