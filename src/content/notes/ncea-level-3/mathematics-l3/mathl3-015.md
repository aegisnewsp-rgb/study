---
exam: ncea-level-3
examName: NCEA Level 3 (Mathematics / Calculus)
subject: mathematics-l3
subjectName: Mathematics (Calculus)
topic: mathl3-015
topicName: "Apply systems of simultaneous equations in solving problems (91587)"
weight: 3
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Apply systems of simultaneous equations in solving problems (91587) — NCEA Level 3 Calculus Notes

Achievement Standard 91587 carries 3 credits and tests systems of three linear equations in three variables, plus non-linear systems involving quadratics. It is the Level 3 progression from the Level 2 standard 91269. The content is essential for first-year university engineering, computer graphics, and operations research.

> Verify the live achievement standard document on https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **3 credits**, internally assessed by the school, NZQA moderated.
- Topics: systems of three linear equations in three variables; non-linear systems (one quadratic and one linear); applications with three or more unknowns; geometric interpretation in 3D.
- **Merit** requires relational thinking — choosing the right method for the system.
- **Excellence** requires extended abstract thinking — connecting algebraic and geometric representations.

#### Examiner traps

- Arithmetic errors in elimination (sign mistakes are common).
- Stopping after finding two variables (need all three).
- Confusing inconsistent (no solution) and dependent (infinitely many) systems in 3D.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Systems of three linear equations in three variables

General form:

a₁x + b₁y + c₁z = d₁
a₂x + b₂y + c₂z = d₂
a₃x + b₃y + c₃z = d₃

Three cases:

- **Unique solution:** the three planes intersect at exactly one point.
- **No solution:** the three planes are inconsistent (e.g., two are parallel and distinct, or three form a triangular prism with no common point).
- **Infinitely many solutions:** the three equations are dependent (e.g., two are scalar multiples of the third, or the three planes share a common line).

#### Solving by reduction

To solve a 3x3 system by elimination:

1. Use two of the three equations to eliminate one variable (say, z). Get one equation in x and y.
2. Use a different pair of equations to eliminate z again. Get a second equation in x and y.
3. Solve the 2x2 system for x and y.
4. Substitute back into one of the original equations to find z.

#### Solving by substitution

1. Solve one equation for one variable (say, z = (d − ax − by) / c).
2. Substitute into the other two equations.
3. Solve the resulting 2x2 system for x and y.
4. Substitute back to find z.

#### Non-linear systems (one quadratic, one linear)

General form:

ax² + by² = c (or other quadratic)
dx + ey = f (linear)

Method: solve the linear equation for one variable (say, y = (f − dx) / e), substitute into the quadratic, and solve for x. Substitute back to find y.

#### Geometric interpretation

In 3D:

- Each linear equation in x, y, z represents a plane.
- Two planes intersect in a line (if not parallel).
- Three planes intersect in a point (if the planes are not parallel or coincident).

The geometric interpretation makes it clear:
- Unique solution: three planes meeting at a point.
- No solution: three planes with no common intersection (e.g., parallel planes, prism).
- Infinitely many: three planes sharing a line.

#### Worked example: 3x3 system

Solve:

x + y + z = 6
2x − y + z = 3
x + 2y − z = 4

Subtract equation 1 from equation 2: x − 2y = −3 ... (A)

Subtract equation 1 from equation 3: y − 2z = −2 ... (B)

From (A): x = 2y − 3.

Substitute into equation 1: 2y − 3 + y + z = 6 → 3y + z = 9 → z = 9 − 3y.

Substitute into (B): y − 2(9 − 3y) = −2 → y − 18 + 6y = −2 → 7y = 16 → y = 16/7.

Then z = 9 − 3(16/7) = 9 − 48/7 = (63 − 48)/7 = 15/7.

And x = 2(16/7) − 3 = 32/7 − 21/7 = 11/7.

Check: 11/7 + 16/7 + 15/7 = 42/7 = 6 ✓.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Matrix method

For larger systems, matrix methods (Gaussian elimination, LU decomposition, matrix inversion) are more efficient. The 3x3 case can be solved by Cramer's rule using determinants.

The matrix form: Ax = b, where A is the coefficient matrix, x is the variable vector, b is the constant vector. Solution: x = A⁻¹ b (if A is invertible).

For Excellence, recognise that the matrix method scales to any size, while substitution and elimination become unwieldy.

#### Geometric interpretation

The geometric interpretation of a 3x3 system is that three planes intersect. The cases:

- Unique solution: three planes meeting at a single point (general position).
- No solution: three planes with no common point (e.g., two are parallel and distinct).
- Infinitely many: three planes sharing a line (two are coincident and the third intersects them).

#### Applications

Systems of equations model:

- **Economics:** input-output analysis, market equilibrium.
- **Engineering:** circuit analysis (Kirchhoff's laws), structural analysis.
- **Computer graphics:** 3D transformations, camera calibration.
- **Operations research:** network flow, transportation problems.

#### Common misconceptions (and the correction)

- "Three equations always have a unique solution." No — they might have no solution, one solution, or infinitely many.
- "Elimination and substitution give different answers." They shouldn't — both are valid methods.
- "Geometric interpretation is just for visual learners." It is essential for understanding when solutions exist and how many.
- "Matrix method is only for engineers." No — it is a general mathematical tool.

#### Specification reference

This achievement standard is internally assessed by the school. NZQA publishes the achievement standard document, clarifications, and exemplars on ncea.education.govt.nz. Re-check the live version of 91587 before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 3 Mathematics achievement standards, https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics. Awarding body: NZQA.*
