---
exam: hkdse
examName: Hong Kong Diploma of Secondary Education (HKDSE)
subject: hkdse-mathematics
subjectName: Mathematics (Compulsory Part)
topic: hkdse-mathem-007
topicName: "Extended Part — Module 2: Algebra and Calculus"
weight: 3
country: hongkong
generated: "2026-09-20T14:00:00"
lastUpdated: "2026-09-20"
---

# Extended Part — Module 2: Algebra and Calculus — HKDSE Mathematics Notes

The Extended Part Module 2 (M2) of the HKDSE Mathematics examination is an optional single 2.5-hour paper (100% of the module mark) covering Algebra and Calculus beyond the Compulsory Part and Module 1. The published learning units span surds, mathematical induction, the binomial theorem, more about trigonometric functions, the number e, limits and differentiation, integration, determinants and matrices, systems of linear equations, and vectors including the scalar and vector products. M2 is taken by HKDSE candidates who plan to apply to JUPAS programmes in the mathematics-heavy sciences, engineering, computer science or actuarial fields.

> Verify the live Module 2 learning units and assessment framework on https://www.hkeaa.edu.hk/ before planning revision.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Surds** √a + √b ≠ √(a+b). Rationalise the denominator by multiplying top and bottom by the conjugate.
- **Mathematical induction**: to prove P(n) for all n ≥ 1, show P(1) is true, then show P(k) ⇒ P(k+1).
- **Binomial theorem** for n a positive integer: (a + b)ⁿ = Σ(nCr·aⁿ⁻ʳ·bʳ).
- **Trigonometric identities**: sin²x + cos²x = 1; tan x = sin x / cos x; double-angle formulas sin 2x = 2 sin x cos x, cos 2x = cos²x - sin²x; inverse trig functions arcsin, arccos, arctan.
- **Number e**: lim (1 + 1/n)ⁿ as n → ∞ ≈ 2.71828. The exponential function y = eˣ has derivative eˣ.
- **Limits**: lim (sin x)/x = 1 as x → 0.
- **Vectors**: 2D and 3D vectors as ordered tuples; magnitude |**a**| = √(a₁² + a₂² + ...); scalar (dot) product **a · b** = a₁b₁ + a₂b₂ + ...; vector (cross) product in 3D.

#### Examiner traps

- Forgetting to check the base case in mathematical induction.
- Confusing scalar product (a number) with vector product (a vector).
- Mixing up the domain of inverse trigonometric functions — arcsin has range [-π/2, π/2].

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Mathematical induction

The structure of a proof by mathematical induction:

1. **Base case**: show P(1) is true.
2. **Inductive step**: assume P(k) is true. Show P(k+1) follows.
3. **Conclusion**: P(n) is true for all n ≥ 1.

For sums like Σᵢ₌₁ⁿ i² = n(n+1)(2n+1)/6: base case n = 1 gives 1 = 1·2·3/6 = 1 ✓. Inductive step: assume Σᵢ₌₁ᵏ i² = k(k+1)(2k+1)/6. Then Σᵢ₌₁^(k+1) i² = k(k+1)(2k+1)/6 + (k+1)² = (k+1)(k(2k+1) + 6(k+1))/6 = (k+1)(2k² + 7k + 6)/6 = (k+1)(k+2)(2k+3)/6. This is the formula for n = k+1, so P(k+1) holds.

#### Binomial theorem and limits

For (a + b)ⁿ with n a positive integer, the binomial expansion gives the coefficients via Pascal's triangle. The general term T_(r+1) = nCr·aⁿ⁻ʳ·bʳ.

For (1 + x)ⁿ with x small, (1 + x)ⁿ ≈ 1 + nx (first order). This approximation is the foundation of percentage-change reasoning: a 5% increase is approximately (1 + 0.05)ⁿ ≈ 1 + 0.05n for large n.

The number e = lim (1 + 1/n)ⁿ as n → ∞ = lim (1 + x/n)ⁿ as n → ∞ for fixed x. The exponential function y = eˣ is its own derivative.

#### Limits and differentiation

The definition of the derivative: f'(x) = lim (f(x + h) - f(x))/h as h → 0.

For differentiation at M2, the standard rules from Module 1 are extended to inverse trigonometric and inverse hyperbolic functions, plus parametric and implicit differentiation. The chain rule is the workhorse.

For maxima and minima problems:

1. Find f'(x) = 0.
2. Determine the critical points.
3. Check f''(x) > 0 (minimum) or f''(x) < 0 (maximum) at each critical point, or use a sign chart on f'(x).

#### Integration

M2 integration extends M1 to include integration by parts, partial fractions, and trigonometric integrals. Integration by parts: ∫u dv = uv - ∫v du. Choose u so that du is simpler than u, and dv so that v is simple.

For rational functions, partial fraction decomposition expresses the integrand as a sum of simpler fractions. For example, 1/(x² - 1) = 1/(2(x-1)) - 1/(2(x+1)), which integrates to (1/2) ln |(x-1)/(x+1)| + C.

#### Matrices, determinants and linear systems

A matrix is a rectangular array of numbers. Matrix addition, scalar multiplication and multiplication (row-by-column) are the basic operations.

The determinant of a 2x2 matrix [[a, b], [c, d]] is ad - bc. The determinant of a 3x3 matrix can be computed by cofactor expansion along a row or column.

A system of n linear equations in n unknowns can be written as A**x** = **b**. The system has a unique solution iff det A ≠ 0; the solution is **x** = A⁻¹**b**, where A⁻¹ is the inverse matrix. Cramer's rule gives xᵢ = det Aᵢ / det A, where Aᵢ is A with the i-th column replaced by **b**.

#### Vectors

A 2D vector is an ordered pair (x, y); a 3D vector is (x, y, z). The magnitude of **a** = (a₁, a₂, a₃) is |**a**| = √(a₁² + a₂² + a₃²). A unit vector has magnitude 1.

The **scalar product** **a · b** = a₁b₁ + a₂b₂ + a₃b₃. It is a scalar. Key formula: **a · b** = |**a**||**b**| cos θ, where θ is the angle between the vectors.

The **vector product** **a × b** is a vector perpendicular to both **a** and **b**, with magnitude |**a**||**b**| sin θ. In 3D: **a × b** = (a₂b₃ - a₃b₂, a₃b₁ - a₁b₃, a₁b₂ - a₂b₁).

Applications of vectors include finding the angle between two lines, finding the shortest distance between two skew lines, and solving 3D geometry problems.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Cross-topic links

- **Matrices to linear systems**: many engineering and physics problems reduce to a linear system. Matrix methods scale better than substitution for large systems.
- **Vectors to geometry**: the vector product gives the area of a parallelogram and the volume of a parallelepiped. 3D geometry problems often use both scalar and vector products.
- **Integration to areas and volumes**: definite integration gives the area under a curve (2D) and the volume of a solid of revolution (3D).
- **Mathematical induction to sequences**: many sequence formulas (sum of first n terms, sum of squares, sum of cubes) are proved by induction.

#### Exam technique

- For induction proofs, label the inductive hypothesis P(k) explicitly and the conclusion P(k+1) explicitly. Show the algebra step-by-step.
- For matrix problems, state the order of multiplication and check that the dimensions match before computing.
- For vector problems, draw a diagram with labelled vectors, then convert the diagram into equations.
- For integration by parts, choose u and dv to make ∫v du easier than ∫u dv. The LIATE rule (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) is a guide.

#### Common misconceptions (and the correction)

- "Mathematical induction proves a statement by example." It proves a statement for all n ≥ base by a logical argument — example-checking is not a proof.
- "Vector multiplication is commutative." The scalar product is commutative; the vector product is anti-commutative: **a × b** = -**b × a**.
- "The determinant of a matrix with all-zero rows is undefined." It is 0. The determinant of a zero matrix is 0 (not undefined).

#### Specification reference

Module 2 covers the published learning units "Surds" through "Inquiry and investigation" of the CDC/HKEAA Mathematics Curriculum and Assessment Guide (Secondary 4 - 6), Module 2 (Algebra and Calculus). Single 2.5-hour paper. Confirm the live assessment framework on hkeaa.edu.hk.

---

*Last updated 2026-09-20. Source: HKDSE Mathematics Assessment Framework, https://www.hkeaa.edu.hk/DocLibrary/HKDSE/Subject_Information/math/2026hkdse-e-math.pdf; CDC/HKEAA Mathematics Curriculum and Assessment Guide (Secondary 4 - 6), https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/Math_CAGuide_e_2015.pdf. Live Module 2 unit boundaries and any in-year specification changes must be re-checked on hkeaa.edu.hk before committing a revision plan to a student.*