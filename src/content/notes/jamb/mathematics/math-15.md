---
exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-15
topicName: Matrices and Determinants
weight: 3
country: ng
generated: "2026-03-24T08:32:07.738865"
diagramPrompt: "Matrix diagram showing 2x2 and 3x3 matrix structures with labeled rows and columns, determinant calculation illustration, clean black and white style"
---

# Matrices and Determinants

**Matrices and Determinants** is a core topic in JAMB UTME Mathematics that appears almost every year, carrying significant weight in the exam. It tests your understanding of how to organize numbers into rectangular arrays, perform operations on them, and extract a special scalar value called the determinant. Many candidates lose marks here not because the topic is hard, but because they confuse matrix operations with ordinary number arithmetic. This guide clears that up completely.

---

## Quick Reference

- **Determinant of 2×2:** For $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, $|A| = ad - bc$
- **Inverse of 2×2:** $A^{-1} = \frac{1}{ad-bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$ (when $|A| \neq 0$)
- **Matrix multiplication:** Row of first × Column of second (element-by-element, then sum)
- **Key condition:** A matrix has an inverse iff its determinant ≠ 0

---

## 1. What is a Matrix?

A **matrix** is a rectangular array of numbers arranged in **rows** (horizontal lines) and **columns** (vertical lines). We describe a matrix by its **order** or **dimension**, written as **m × n**, where m = number of rows and n = number of columns.

**Example:**

$$A = \begin{bmatrix} 3 & 1 & 4 \\ 1 & 5 & 9 \end{bmatrix}$$

This is a **2 × 3 matrix** — 2 rows, 3 columns. The individual numbers inside are called **elements** or **entries**.

We denote matrix elements by lowercase letters with two subscripts: $a_{ij}$ means the entry in row *i*, column *j*. For example, $a_{23}$ is the element in row 2, column 3.

In JAMB, matrices are used to represent systems of linear equations and to perform transformations. Understanding the structure is foundational — everything else builds on this.

---

## 2. Types of Matrices

JAMB frequently tests your ability to identify matrix types. Here are all the ones you need to know:

| Type | Description | Example |
|---|---|---|
| **Row matrix** | 1 row, any number of columns (1 × n) | $[2,\; 7,\; -1]$ |
| **Column matrix** | Any number of rows, 1 column (m × 1) | $\begin{bmatrix} 3 \\ -4 \\ 2 \end{bmatrix}$ |
| **Square matrix** | Same number of rows and columns (n × n) | $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ |
| **Zero matrix** | All elements are 0 | $\begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$ |
| **Identity matrix (I)** | Square matrix with 1s on main diagonal, 0s elsewhere | $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$ |
| **Diagonal matrix** | Square matrix with non-zero entries only on the main diagonal | $\begin{bmatrix} 2 & 0 \\ 0 & 5 \end{bmatrix}$ |
| **Scalar matrix** | Diagonal matrix where all diagonal entries are equal | $\begin{bmatrix} 3 & 0 \\ 0 & 3 \end{bmatrix}$ |
| **Symmetric matrix** | Matrix equal to its own transpose ($A = A^T$) | $\begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}$ |
| **Upper triangular matrix** | Square matrix with zeros below the main diagonal | $\begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{bmatrix}$ |
| **Lower triangular matrix** | Square matrix with zeros above the main diagonal | $\begin{bmatrix} 1 & 0 & 0 \\ 2 & 3 & 0 \\ 4 & 5 & 6 \end{bmatrix}$ |

> **JAMB Tip:** The identity matrix $I_n$ acts like "1" in ordinary multiplication — $AI = IA = A$ for any compatible matrix $A$. This is a frequent concept in matrix algebra questions.

---

## 3. Matrix Operations

### 3.1 Equality of Matrices

Two matrices are **equal** if and only if they have the same dimension AND every corresponding element is equal. JAMB sometimes tries to trick you with matrices that look similar but have different dimensions — always check dimensions first.

### 3.2 Addition and Subtraction

You can only **add or subtract** two matrices of the **same dimension**. You simply add or subtract corresponding elements:

$$\begin{bmatrix} 1 & 3 \\ 2 & 4 \end{bmatrix} + \begin{bmatrix} 5 & 2 \\ 1 & 7 \end{bmatrix} = \begin{bmatrix} 6 & 5 \\ 3 & 11 \end{bmatrix}$$

This is straightforward. Just remember: dimension must match.

### 3.3 Scalar Multiplication

A **scalar** is just an ordinary number. To multiply a matrix by a scalar, you multiply **every element** of the matrix by that scalar:

$$3 \begin{bmatrix} 2 & 5 \\ 1 & 4 \end{bmatrix} = \begin{bmatrix} 6 & 15 \\ 3 & 12 \end{bmatrix}$$

Simple, but very important for later topics like finding eigenvalues.

### 3.4 Matrix Multiplication (The Row-by-Column Rule)

This is where most candidates make mistakes. **Matrix multiplication is NOT element-by-element.** The rule is:

> To find the element in row *i*, column *j* of the product $AB$, take **row i of A** and multiply it **element-by-element** with **column j of B**, then **sum all the products**.

**When can you multiply?** If A is m × n and B is p × q, you can multiply A × B only if **n = p** (the number of columns of A equals the number of rows of B). The resulting matrix has dimension **m × q**.

**The Row Vector × Column Vector step:**

This is the atomic operation in matrix multiplication. A row vector $[a_1,\; a_2,\; ...,\; a_n]$ multiplied by a column vector $\begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{bmatrix}$ gives:

$$a_1b_1 + a_2b_2 + ... + a_nb_n = \sum_{k=1}^{n} a_k b_k$$

**Worked example — full 2×2 multiplication:**

$$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \quad B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}$$

$$AB = \begin{bmatrix} (1)(5)+(2)(7) & (1)(6)+(2)(8) \\ (3)(5)+(4)(7) & (3)(6)+(4)(8) \end{bmatrix} = \begin{bmatrix} 5+14 & 6+16 \\ 15+28 & 18+32 \end{bmatrix} = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}$$

Notice that $AB \neq BA$ in general — matrix multiplication is **not commutative**.

**JAMB Warning:** Always verify dimensions before multiplying. Many candidates blindly multiply element-by-element like $(1)(5) = 5$, which is completely wrong. Study the row × column rule until it's automatic.

---

## 4. Determinants

The **determinant** is a scalar (single number) computed from a square matrix. It tells us important properties — whether a matrix is invertible, whether a system of equations has a unique solution, and more.

### 4.1 Determinant of a 2×2 Matrix

For $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$:

$$|A| = \det(A) = ad - bc$$

**Memory tip:** "**a** cross **d** minus **b** cross **c**" — think **ad - bc**.

**Worked example:**

Find $|A|$ if $A = \begin{bmatrix} 3 & 2 \\ 1 & 5 \end{bmatrix}$

$$|A| = (3)(5) - (2)(1) = 15 - 2 = 13$$

---

### 4.2 Determinant of a 3×3 Matrix (Expansion by First Row)

This uses the **method of cofactor expansion** along the first row. The determinant of a 3×3 matrix:

$$\begin{bmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{bmatrix}$$

is:

$$|A| = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31})$$

**Memory device:** Use the pattern: **+, -, +** signs in front of each cofactor. The minus sign applies to the second element of the first row.

**Alternatively — Sarrus' Rule (quick trick for 3×3):**

1. Copy the first two columns to the right of the matrix
2. Sum products of diagonals going **down-right** (3 diagonals)
3. Sum products of diagonals going **up-right** (3 diagonals)
4. Subtract step 3 from step 2

**Worked example (cofactor expansion):**

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix}$$

$$|A| = 1(5 \cdot 9 - 6 \cdot 8) - 2(4 \cdot 9 - 6 \cdot 7) + 3(4 \cdot 8 - 5 \cdot 7)$$

$$= 1(45 - 48) - 2(36 - 42) + 3(32 - 35)$$

$$= 1(-3) - 2(-6) + 3(-3) = -3 + 12 - 9 = 0$$

**Key observation:** A determinant of **0** means the matrix is **singular** (non-invertible) and any system of equations involving it has **no unique solution**.

---

## 5. Properties of Determinants

These properties save you time and appear directly in JAMB questions:

1. **Determinant of identity:** $\det(I) = 1$
2. **Effect of row operations:**
   - Swapping two rows → multiplies determinant by −1
   - Multiplying a row by scalar k → multiplies determinant by k
   - Adding a multiple of one row to another → **does not change** the determinant
3. **Multiplicative property:** $\det(AB) = \det(A) \cdot \det(B)$
4. **Determinant of transpose:** $\det(A^T) = \det(A)$
5. **Determinant of scalar matrix kI:** $\det(kI) = k^n$ (for an n×n matrix)
6. **Zero determinant:** If any row or column is entirely zeros, or if two rows/columns are identical, $\det(A) = 0$
7. **Triangular matrix:** The determinant of a triangular matrix is simply the **product of the diagonal entries**

---

## 6. Inverse of a 2×2 Matrix

The **inverse** of a matrix $A$, denoted $A^{-1}$, is the matrix such that:

$$AA^{-1} = A^{-1}A = I$$

For a **2×2 matrix**, the formula is:

$$A^{-1} = \frac{1}{|A|} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix} = \frac{1}{ad-bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$

**Critical condition:** This formula only works if $|A| \neq 0$. If $|A| = 0$, the matrix has **no inverse** (it is singular).

**Steps to find $A^{-1}$:**
1. Compute $|A|$. If it's 0 → no inverse exists.
2. Swap the diagonal elements (a ↔ d).
3. Change the sign of the off-diagonal elements (b → −b, c → −c).
4. Divide the whole matrix by $|A|$.

**Worked example:**

Find $A^{-1}$ if $A = \begin{bmatrix} 4 & 7 \\ 2 & 6 \end{bmatrix}$

**Step 1:** $|A| = (4)(6) - (7)(2) = 24 - 14 = 10$

Since $|A| = 10 \neq 0$, the inverse exists.

**Step 2-4:**
$$A^{-1} = \frac{1}{10} \begin{bmatrix} 6 & -7 \\ -2 & 4 \end{bmatrix} = \begin{bmatrix} 0.6 & -0.7 \\ -0.2 & 0.4 \end{bmatrix}$$

**Verification:** $AA^{-1}$ should give the identity matrix.

$$AA^{-1} = \begin{bmatrix} 4 & 7 \\ 2 & 6 \end{bmatrix} \begin{bmatrix} 0.6 & -0.7 \\ -0.2 & 0.4 \end{bmatrix} = \begin{bmatrix} 4(0.6)+7(-0.2) & 4(-0.7)+7(0.4) \\ 2(0.6)+6(-0.2) & 2(-0.7)+6(0.4) \end{bmatrix} = \begin{bmatrix} 2.4-1.4 & -2.8+2.8 \\ 1.2-1.2 & -1.4+2.4 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = I \checkmark$$

---

## 7. Solving Simultaneous Equations Using the Matrix Inverse

This is one of the most important applications. Given a system of two linear equations:

$$a_1x + b_1y = c_1$$
$$a_2x + b_2y = c_2$$

We can write this in matrix form:

$$\begin{bmatrix} a_1 & b_1 \\ a_2 & b_2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} c_1 \\ c_2 \end{bmatrix}$$

Which is: $AX = B$, so the solution is $X = A^{-1}B$.

Since $A^{-1} = \frac{1}{|A|} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$ for a 2×2 matrix, we get:

$$\begin{bmatrix} x \\ y \end{bmatrix} = \frac{1}{a_1b_2 - a_2b_1} \begin{bmatrix} b_2 & -b_1 \\ -a_2 & a_1 \end{bmatrix} \begin{bmatrix} c_1 \\ c_2 \end{bmatrix}$$

**Worked JAMB-style example:**

Solve:
$$2x + 3y = 8$$
$$4x + 5y = 14$$

**Step 1:** Write in matrix form:
$$A = \begin{bmatrix} 2 & 3 \\ 4 & 5 \end{bmatrix}, \quad X = \begin{bmatrix} x \\ y \end{bmatrix}, \quad B = \begin{bmatrix} 8 \\ 14 \end{bmatrix}$$

**Step 2:** Compute $|A| = (2)(5) - (3)(4) = 10 - 12 = -2$

**Step 3:** Find $A^{-1}$:
$$A^{-1} = \frac{1}{-2} \begin{bmatrix} 5 & -3 \\ -4 & 2 \end{bmatrix} = \begin{bmatrix} -2.5 & 1.5 \\ 2 & -1 \end{bmatrix}$$

**Step 4:** Compute $X = A^{-1}B$:
$$X = \begin{bmatrix} -2.5 & 1.5 \\ 2 & -1 \end{bmatrix} \begin{bmatrix} 8 \\ 14 \end{bmatrix} = \begin{bmatrix} -2.5(8) + 1.5(14) \\ 2(8) + (-1)(14) \end{bmatrix} = \begin{bmatrix} -20 + 21 \\ 16 - 14 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$$

**Answer:** $x = 1,\; y = 2$

**Quick check** (substituting back):
- $2(1) + 3(2) = 2 + 6 = 8$ ✓
- $4(1) + 5(2) = 4 + 10 = 14$ ✓

---

## 8. JAMB Past Questions — Worked Examples

### Question 1 (Determinant)
**JAMB 2023 Style:** Find the determinant of $\begin{bmatrix} 6 & 2 \\ 8 & 3 \end{bmatrix}$

**Solution:**
$|A| = (6)(3) - (2)(8) = 18 - 16 = 2$

**Answer: 2**

---

### Question 2 (Matrix Multiplication)
**JAMB 2022 Style:** If $P = \begin{bmatrix} 1 & 3 \\ 2 & 4 \end{bmatrix}$ and $Q = \begin{bmatrix} 5 & 7 \\ 6 & 8 \end{bmatrix}$, find $PQ$.

**Solution:**
$$PQ = \begin{bmatrix} 1(5)+3(6) & 1(7)+3(8) \\ 2(5)+4(6) & 2(7)+4(8) \end{bmatrix} = \begin{bmatrix} 5+18 & 7+24 \\ 10+24 & 14+32 \end{bmatrix} = \begin{bmatrix} 23 & 31 \\ 34 & 46 \end{bmatrix}$$

**Answer:** $\begin{bmatrix} 23 & 31 \\ 34 & 46 \end{bmatrix}$

---

### Question 3 (Inverse and System)
**JAMB 2021 Style:** Using the matrix method, solve:
$$3x + 4y = 5$$
$$2x + 5y = 6$$

**Solution:**
$$A = \begin{bmatrix} 3 & 4 \\ 2 & 5 \end{bmatrix}, \quad |A| = (3)(5) - (4)(2) = 15 - 8 = 7$$
$$A^{-1} = \frac{1}{7} \begin{bmatrix} 5 & -4 \\ -2 & 3 \end{bmatrix}$$
$$X = A^{-1}B = \frac{1}{7} \begin{bmatrix} 5 & -4 \\ -2 & 3 \end{bmatrix} \begin{bmatrix} 5 \\ 6 \end{bmatrix} = \frac{1}{7} \begin{bmatrix} 5(5)-4(6) \\ -2(5)+3(6) \end{bmatrix} = \frac{1}{7} \begin{bmatrix} 25-24 \\ -10+18 \end{bmatrix} = \frac{1}{7} \begin{bmatrix} 1 \\ 8 \end{bmatrix}$$

**Answer:** $x = \frac{1}{7},\; y = \frac{8}{7}$

---

## 9. Exam Tips and Common Mistakes

| ❌ Common Mistake | ✅ What to Do Instead |
|---|---|
| Multiplying matrices element-by-element (e.g., [1][5] = 5) | Use the row-by-column rule: sum products of row i × column j |
| Forgetting to check if $|A\| \neq 0$ before finding $A^{-1}$ | Always compute the determinant first |
| Getting the transpose confused with the inverse | $A^T$: swap rows and columns; $A^{-1}$: more complex formula |
| Messing up signs in the cofactor expansion of a 3×3 | Remember the **+, −, +** pattern for the first row |
| Swapping $a$ and $d$ in the 2×2 inverse formula | "Swap the diagonal, change signs of off-diagonal" |
| Forgetting that matrix multiplication is NOT commutative | $AB \neq BA$ — order matters in every calculation |
| Confusing row and column dimensions | Always write dimensions: (rows × columns) for both matrices before multiplying |
| Thinking $|AB\| = \|A\| + \|B\|$ | It's $\det(AB) = \det(A) \cdot \det(B)$ — products, not sums |

### Memory Tricks
- **ad − bc** for 2×2 determinant: "a cross d minus b cross c"
- **Swap diagonal, negate off-diagonal, divide by determinant** for 2×2 inverse
- **+, −, +** pattern for cofactor expansion across first row
- **Singular = No inverse = Zero determinant** — all connected

---

## 10. Study Priority and Order

Build your understanding in this order — don't skip steps:

1. **Foundation:** What is a matrix? What are rows, columns, elements, dimensions?
2. **Types of matrices** — learn to identify each type on sight (JAMB tests this)
3. **Scalar multiplication** — easy, but essential
4. **Matrix addition/subtraction** — straightforward once dimensions match
5. **Matrix multiplication** — the row × column rule; practice with 2×2, then 2×3, then 3×2
6. **Determinants of 2×2** — memorize ad − bc, practice 10 questions
7. **Determinants of 3×3** — master cofactor expansion, then try Sarrus' rule as backup
8. **Properties of determinants** — use them to speed up questions and check answers
9. **Inverse of 2×2** — apply the formula, always verify with $AA^{-1} = I$
10. **Solving simultaneous equations** — $AX = B \Rightarrow X = A^{-1}B$; this is the end goal

Allocate the most practice time to **matrix multiplication** and **determinants** — these are the highest-yield skills on JAMB day.

---

## 11. Related Topics

- **math-04: Algebraic Expressions** — manipulating polynomial expressions and fractions that appear in determinant calculations
- **math-07: Statistics** — matrices appear in covariance matrices and data organization
- **math-16: Statistics and Probability** — data handling connections
- **math-14: Trigonometry** — matrix transformations in 2D coordinate geometry

---

## Summary

Matrices and Determinants is a topic where once you master the **row-by-column rule** and the **2×2 determinant formula**, everything else flows naturally. The key relationships to remember are:

- $|A| = ad - bc$ for 2×2
- $A^{-1} = \frac{1}{|A|} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$ (when $|A| \neq 0$)
- $X = A^{-1}B$ for solving simultaneous linear equations
- $\det(AB) = \det(A) \cdot \det(B)$ for combined matrices

With focused practice on past JAMB questions, this topic can become one of your strongest areas. Practice at least 20 matrix multiplication problems and 20 determinant problems before exam day, and you'll be well-prepared.
