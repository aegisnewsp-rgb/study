---
exam: gate
examName: "GATE"
subject: mathematics
subjectName: "Engineering Maths"
topic: engine-001
topicName: "Linear Algebra"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Linear Algebra

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Linear Algebra** — Key Facts for GATE Engineering Mathematics

**Core Topics**:
| Topic | Key Concepts |
|-------|-------------|
| Matrix Operations | Addition, multiplication, transpose, trace |
| Determinants | Properties, evaluation, adjoint, inverse |
| Rank of Matrix | Row rank = Column rank, rank-nullity theorem |
| System of Equations | Consistent, inconsistent, unique/infinite solutions |
| Eigenvalues & Eigenvectors | Characteristic equation, diagonalization |
| Vector Spaces | Basis, dimension, linear independence |

**Quick Formulas**:
- det(AB) = det(A) × det(B)
- rank(A) + nullity(A) = n (for n×n matrix)
- Eigenvalues of A⁻¹ = 1/eigenvalues of A
- Cayley-Hamilton Theorem: A satisfies its own characteristic equation

⚡ **GATE Tip**: In GATE, Linear Algebra questions are worth **8-12 marks** out of 100. Focus on **eigenvalues, rank, and solving linear systems**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Linear Algebra** — Detailed Study Guide

## Matrices — Types and Properties

### Types of Matrices

| Type | Definition | Example |
|------|-----------|---------|
| Row Matrix | 1×n | [1 2 3] |
| Column Matrix | m×1 | [1; 2; 3] |
| Square Matrix | m×m | [1 2; 3 4] |
| Zero Matrix | All elements 0 | [0 0; 0 0] |
| Identity Matrix | 1's on diagonal, 0 elsewhere | Iₙ |
| Diagonal Matrix | Non-diagonal = 0 | diag(1,2,3) |
| Symmetric Matrix | A = Aᵀ | [1 2; 2 3] |
| Skew-Symmetric | A = -Aᵀ | [0 2; -2 0] |
| Orthogonal Matrix | AᵀA = I | Rotations |
| Singular Matrix | det(A) = 0 | — |
| Non-singular | det(A) ≠ 0 | — |
| Hermitian | A = Āᵀ (conjugate transpose) | — |
| Unitary | ĀᵀA = I | — |

### Matrix Operations

**Addition**: A + B (same dimensions)
**Scalar Multiplication**: kA
**Multiplication**: (i,j) element = row i of A · column j of B
**Transpose**: Aᵀ (rows become columns)
**Trace**: Tr(A) = sum of diagonal elements
**Conjugate**: Ā (each element conjugated)

**Key Properties**:
| Property | Formula |
|----------|---------|
| (Aᵀ)ᵀ = A | Transpose twice |
| (A + B)ᵀ = Aᵀ + Bᵀ | Additivity |
| (AB)ᵀ = BᵀAᵀ | Reversal rule |
| Tr(AB) = Tr(BA) | Cyclic property |

⚡ **GATE Memory**: (AB)ᵀ = BᵀAᵀ — the order reverses!

## Determinants

### Definition
For 2×2: det(A) = |a b; c d| = ad - bc

For 3×3 (Sarrus' Rule):
```
det = a(ei - fh) - b(di - fg) + c(dh - eg)
     = aei + bfg + cdh - ceg - bdi - afh
```

### Properties of Determinants

| Property | Effect |
|----------|--------|
| Row/column swap | Changes sign |
| Two equal rows | det = 0 |
| Row of zeros | det = 0 |
| Multiply row by k | det multiplied by k |
| Add multiple of row to another | det unchanged |
| det(Aᵀ) = det(A) | Invariant under transpose |
| det(AB) = det(A)·det(B) | Multiplicative |
| det(A⁻¹) = 1/det(A) | If A is invertible |

### Adjoint and Inverse

**Adjugate Matrix**: transpose of cofactor matrix
- **adj(A)** = Cof(A)ᵀ

**Inverse**:
$$A^{-1} = \frac{1}{\det(A)} \cdot adj(A)$$

A matrix is **invertible** ⟺ det(A) ≠ 0 ⟺ rank(A) = n

⚡ **GATE PYQ**: "If A is a 3×3 matrix with det(A) = 5, find det(2A)."
**Answer**: det(2A) = 2³ × det(A) = 8 × 5 = 40

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Linear Algebra** — Complete Notes for GATE

## Rank of a Matrix

### Definition
The rank of a matrix is the maximum number of linearly independent rows (or columns).

### Methods to Find Rank

**Method 1: Echelon Form**
- Perform elementary row operations to get row echelon form
- Count non-zero rows = rank

**Method 2: Minor Method**
- Find largest square submatrix with non-zero determinant
- Size of that submatrix = rank

### Elementary Row Operations (don't change rank):
1. Swap two rows
2. Multiply a row by non-zero scalar
3. Add multiple of one row to another

### Rank-Nullity Theorem

For an m×n matrix A:
$$\text{rank}(A) + \text{nullity}(A) = n$$

where nullity = dimension of null space (kernel)

### System of Linear Equations

**Matrix Form**: Ax = b

**Solutions**:
| Condition | Type of Solution |
|-----------|-----------------|
| rank(A) = rank([A\|b]) = n | Unique solution |
| rank(A) = rank([A\|b]) < n | Infinite solutions |
| rank(A) ≠ rank([A\|b]) | No solution (inconsistent) |

**Augmented Matrix**: [A\|b] — add b as last column

⚡ **GATE Worked Example**: Solve:
x + y + z = 6
2x + 3y + z = 10
x + 2y + 3z = 14

Matrix form: A = [1 1 1; 2 3 1; 1 2 3], b = [6; 10; 14]
det(A) = 1(9-2) - 1(6-1) + 1(4-3) = 7 - 5 + 1 = 3 ≠ 0
Unique solution exists.

Using Cramer's rule or Gaussian elimination:
x = 1, y = 2, z = 3

## Eigenvalues and Eigenvectors

### Definition
For a square matrix A (n×n), a scalar λ is an eigenvalue if:
$$A\mathbf{x} = \lambda \mathbf{x}$$

where **x ≠ 0** is the eigenvector corresponding to λ.

### Characteristic Equation
$$\det(A - \lambda I) = 0$$

This gives a polynomial of degree n — the **characteristic polynomial**.
Roots = eigenvalues.

### Properties

| Property | Formula/Rule |
|----------|-------------|
| Sum of eigenvalues | tr(A) |
| Product of eigenvalues | det(A) |
| Eigenvalues of A⁻¹ | 1/λ₁, 1/λ₂, ... (if A invertible) |
| Eigenvalues of Aᵀ | Same as eigenvalues of A |
| Eigenvalues of A² | λ₁², λ₂², ... |
| Cayley-Hamilton | A satisfies det(A - λI) = 0 |

### Cayley-Hamilton Theorem
Every square matrix satisfies its own characteristic equation.

**Example**: If char poly is λ³ - 5λ² + 2λ + 7 = 0
Then A³ - 5A² + 2A + 7I = 0

### Diagonalization

A matrix A is **diagonalizable** if A = PDP⁻¹ where D is diagonal.

**Condition**: A has n linearly independent eigenvectors.

**P**: Matrix whose columns are eigenvectors.
**D**: Diagonal matrix with eigenvalues.

⚡ **GATE PYQ**: For A = [4 1; 2 3], find eigenvalues.
**Solution**: det(A - λI) = (4-λ)(3-λ) - 2 = λ² - 7λ + 10 = (λ-5)(λ-2) = 0
Eigenvalues: λ₁ = 5, λ₂ = 2

## Vector Spaces

### Definitions

**Vector Space V over F**:
- V is closed under addition and scalar multiplication
- 8 axioms satisfied (associativity, commutativity, identity, inverse, etc.)

**Subspace**: Subset of V that is itself a vector space.

**Span**: All linear combinations of a set of vectors.

**Linear Independence**:
Vectors v₁, v₂, ..., vₙ are **linearly independent** if:
c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 implies c₁ = c₂ = ... = cₙ = 0

### Basis and Dimension

**Basis**: A set of linearly independent vectors that span V.
**Dimension**: Number of vectors in any basis (same for all bases).

**Standard Bases**:
- Rⁿ: Standard basis e₁, e₂, ..., eₙ
- Pₙ: {1, x, x², ..., xⁿ} has dimension n+1

### Inner Product Spaces

**Inner Product** on V:
- ⟨u, v⟩: V × V → F
- Properties: Positive definite, linearity, conjugate symmetry

**Norm**: ‖v‖ = √⟨v, v⟩
**Orthogonality**: ⟨u, v⟩ = 0

**Gram-Schmidt Orthogonalization**:
Given {v₁, v₂, ..., vₙ}, orthogonalize:
- u₁ = v₁
- u₂ = v₂ - proj_{u₁}(v₂)
- u₃ = v₃ - proj_{u₁}(v₃) - proj_{u₂}(v₃)
- etc.

Then normalize to get orthonormal basis.

---

## GATE-Style Practice Questions

```
1. The rank of matrix [1 2 3; 2 4 6; 3 6 9] is:
   (a) 0 (b) 1 (c) 2 (d) 3
   
   Answer: (b) 1
   Solution: Row 2 = 2×Row 1, Row 3 = 3×Row 1 → only 1 linearly independent row

2. If eigenvalues of A are 1, 2, 3, then eigenvalues of A² are:
   (a) 1, 2, 3 (b) 1, 4, 9 (c) 1, 1, 1 (d) 2, 3, 4
   
   Answer: (b) 1, 4, 9
   Solution: If λ is eigenvalue of A, then λ² is eigenvalue of A²

3. For which value of k does the system have infinite solutions?
   x + y + z = 1
   2x + 2y + 2z = k
   (a) k = 1 (b) k = 2 (c) k = 3 (d) k = 0
   
   Answer: (b) k = 2
   Solution: Second equation = 2×(first equation) only if k = 2

4. The trace of matrix [3 1; -1 2] is:
   (a) 3 (b) 2 (c) 5 (d) 1
   
   Answer: (c) 5
   Solution: Trace = sum of diagonal = 3 + 2 = 5

5. If A is singular, then:
   (a) det(A) > 0 (b) det(A) < 0 (c) det(A) = 0 (d) det(A) ≠ 0
   
   Answer: (c) det(A) = 0
   Solution: Singular means not invertible → determinant = 0
```

⚡ **GATE Strategy**: For Linear Algebra in GATE, expect **2-3 questions** from eigenvalues, rank, and systems of equations. Always check if matrix is singular/non-singular first.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
