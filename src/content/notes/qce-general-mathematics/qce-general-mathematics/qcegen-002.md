---
exam: qce-general-mathematics
examName: QCE General Mathematics & Specialist Mathematics (QCAA 2025)
subject: qce-general-mathematics
subjectName: General Mathematics
topic: qcegen-002
topicName: Applications of Linear Equations and Trigonometry, Matrices and Univariate Data Analysis
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-20
---

# Unit 2: Applications of Linear Equations and Trigonometry, Matrices and Univariate Data Analysis — QCE General Mathematics (QCAA 2025) Notes

Unit 2 of QCE General Mathematics covers linear equations in two variables; trigonometry in right-angled triangles and the sine and cosine rules; matrix arithmetic and applications; univariate data, summary statistics and the standard normal distribution.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/general-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Linear equations in two variables.** y = mx + c. Solve simultaneous equations. Graph linear inequalities.
- **Trigonometry.** SOH CAH TOA: sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj. Sine rule: a/sin A = b/sin B. Cosine rule: c² = a² + b² − 2ab cos C.
- **Matrices.** Rectangular array of numbers. Add element-wise. Multiply by scalar. Multiply matrices where compatible.
- **Univariate data.** Mean, median, mode, range, IQR, standard deviation. Five-number summary, box plot.

#### Examiner traps

- Confusing the sine rule (any triangle) with cosine rule (when given SAS or SSS).
- Mixing up mean and median for skewed data.
- Multiplying matrices with wrong dimensions.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Linear equations in two variables

Graph y = mx + c. Intersection of two lines is the solution to their simultaneous equations. Solve by substitution or elimination. Linear inequalities y > mx + c shade the appropriate half-plane.

#### Trigonometry

Right-angled triangles: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent. Pythagoras: a² + b² = c².

Non-right-angled triangles: sine rule a/sin A = b/sin B = c/sin C (use when given AAS or SSA); cosine rule c² = a² + b² − 2ab cos C (use when given SAS or SSS). Area = (1/2) ab sin C.

#### Matrices

A matrix is m × n (m rows, n columns). Addition: same dimensions, add element-wise. Scalar multiplication: multiply each element. Matrix multiplication AB: defined when columns of A = rows of B; (AB)_ij = Σ_k A_ik B_kj.

Determinant of 2×2 matrix [[a, b], [c, d]] is ad − bc. Inverse exists iff det ≠ 0.

#### Univariate data

Display by stem-and-leaf, box plot, histogram. Five-number summary: min, Q1, median, Q3, max. Mean x̄ = Σx/n. Standard deviation s = √(Σ(x − x̄)²/n).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Unit 2 underpins later Units

- **Linear equations** are needed for break-even analysis, supply-demand, and Unit 4 financial mathematics.
- **Trigonometry** is needed for vectors, navigation, and Unit 3 Earth geometry.
- **Matrices** appear in Unit 3 (transition matrices) and Unit 4 (matrix applications).
- **Statistics** continues into Unit 3 (bivariate) and Unit 4 (inference).

#### Year 11 planning pattern

- **Term 1.** Linear equations and inequalities.
- **Term 2.** Trigonometry and the sine/cosine rules.
- **Term 3.** Matrices.
- **Term 4.** Univariate statistics.

#### Common misconceptions (and the correction)

- "Sine rule works for all triangles." Yes — but it's most useful when given AAS or SSA.
- "Mean is always the best measure of centre." No — for skewed data, the median is more representative.
- "Matrix multiplication is commutative." No — AB ≠ BA in general.

#### Specification reference

This Unit is one of four Units of QCE General Mathematics. Confirm the live syllabus and any in-year updates on qcaa.qld.edu.au.

#### Worked example — cosine rule for a side

A triangle has sides a = 7, b = 9, and the included angle C = 60° between them.

```
  c² = a² + b² − 2ab cos C
     = 7² + 9² − 2(7)(9) cos 60°
     = 49 + 81 − 126 × 0.5
     = 130 − 63
     = 67

  c  = √67 ≈ 8.185
```

Check the angle choice: cosine rule requires two sides and the included angle (SAS). If you are given all three sides and asked for an angle, the rearrangement is

```
  cos C = (a² + b² − c²) / (2ab)
```

#### Worked example — sine rule for an angle

A triangle has A = 35°, B = 70°, and side a = 12 (opposite A).

```
  a / sin A = b / sin B
  b = a × sin B / sin A
    = 12 × sin 70° / sin 35°
    = 12 × 0.9397 / 0.5736
    ≈ 19.66
```

Then C = 180° − 35° − 70° = 75°, and

```
  c = a × sin C / sin A
    = 12 × sin 75° / sin 35°
    ≈ 20.49
```

#### Worked example — matrix multiplication and inverse

Let

```
  A = [ 2   3 ]
      [ 1   4 ]

  B = [ 5   1 ]
      [ 2   3 ]
```

Then AB:

```
  AB₁₁ = 2×5 + 3×2 = 10 + 6  = 16
  AB₁₂ = 2×1 + 3×3 = 2 + 9   = 11
  AB₂₁ = 1×5 + 4×2 = 5 + 8   = 13
  AB₂₂ = 1×1 + 4×3 = 1 + 12  = 13

  AB = [ 16  11 ]
       [ 13  13 ]
```

Determinant of A: det(A) = 2×4 − 3×1 = 5. Since det ≠ 0, A is invertible.

```
  A⁻¹ = (1/det) × [ d  −b ]
                  [ −c  a ]
      = (1/5) × [ 4  −3 ]
                [ −1  2 ]
      = [ 0.8  −0.6 ]
        [ −0.2   0.4 ]
```

Quick check: AA⁻¹ should be the 2×2 identity. The first row, first column: 2×0.8 + 3×(−0.2) = 1.6 − 0.6 = 1.0 ✓.

#### Worked example — standard deviation and z-score

Five test scores: 72, 78, 81, 85, 94.

```
  Mean x̄ = (72 + 78 + 81 + 85 + 94) / 5
         = 410 / 5
         = 82

  Deviations from mean:
    72 − 82 = −10,  squared = 100
    78 − 82 =  −4,  squared =  16
    81 − 82 =  −1,  squared =   1
    85 − 82 =   3,  squared =   9
    94 − 82 =  12,  squared = 144

  Σ(x − x̄)² = 100 + 16 + 1 + 9 + 144 = 270

  Variance (population form) = 270 / 5 = 54
  Standard deviation s = √54 ≈ 7.348
```

The z-score for 94 is

```
  z = (x − x̄) / s
    = (94 − 82) / 7.348
    ≈ 1.633
```

On a standard normal table, z = 1.633 corresponds to a cumulative probability of about 0.949, so a score of 94 sits at roughly the 95th percentile of this small sample.

#### Common marking-scheme mistakes

- Using the sine rule when the data is SAS or SSS. The cosine rule is faster and avoids the ambiguous SSA case.
- Computing det(A) as ad + bc instead of ad − bc. The sign error flips the inverse.
- Mixing up the row × column convention in matrix multiplication and producing (BA) instead of (AB).
- Dividing by n in standard deviation when the question asks for the sample form (divide by n − 1). Read the stem.
- Computing the IQR as Q3 − Q1 in the wrong order. Q3 − Q1 is correct; Q1 − Q3 is negative and is not the IQR.
- Treating x = 0 as a measurement that pulls the mean toward zero without checking whether zero is a real data value or just a placeholder.
- Labelling a histogram's horizontal axis with frequency counts instead of the variable being measured.

#### 20-minute recap before you walk in

- SOH CAH TOA on one line. Sine rule on another. Cosine rule on a third.
- Memorise the 2×2 determinant and inverse formulas. They appear in nearly every matrices question.
- Distinguish sample vs population standard deviation by reading the question stem.
- A z-score tells you how many standard deviations a value sits from the mean. Memorise the formula, not the table.
- Recheck that the columns of the left matrix equal the rows of the right matrix before attempting a matrix multiplication.

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA General Mathematics syllabus for Unit 2 also lists the following sub-topics, which are touched on above but deserve separate revision:

- Solving linear programming problems in two variables, including the graphical method of locating the feasible region.
- Sketching sine and cosine graphs, including amplitude, period and vertical shift.
- Matrices as transformations in the plane: representing reflections, rotations, dilations and translations.
- Identifying outliers using the 1.5 × IQR rule on a box plot.
- Using the empirical rule (68-95-99.7) for normal distributions to make quick estimates without a z-table.

Confirm the live sub-topic list on the QCAA General Mathematics syllabus page before planning revision around these.

---

*Last updated 2026-09-20. Source: QCE General Mathematics General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/general-mathematics. Awarding body: Queensland Curriculum and Assessment Authority (QCAA). Live syllabus and any in-year updates must be re-checked on the official page before committing a revision plan to a student.*