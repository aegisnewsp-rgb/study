---
exam: wace-mathematics-methods
examName: WACE Mathematics Methods & Mathematics Specialist (SCSA)
subject: wace-mathematics-specialist
subjectName: Mathematics Specialist
topic: wacespec-002
topicName: Complex Numbers, Trigonometry and Matrices (Year 11)
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 2: Complex Numbers, Trigonometry and Matrices — WACE Mathematics Specialist (SCSA) Notes

Unit 2 of WACE Mathematics Specialist covers complex numbers in rectangular form, Argand diagrams and modulus/argument; further trigonometry and the inverse trigonometric functions; matrices and matrix algebra. Second Unit of the Year 11-12 sequence.

> Re-check the live specification details on https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-specialist before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Complex numbers.** z = a + bi. |z| = √(a² + b²).
- **Trigonometry.** sin, cos, tan; inverse functions arcsin, arccos, arctan.
- **Matrices.** Addition, scalar multiplication, multiplication, determinant, inverse.

#### Examiner traps

- Confusing inverse trigonometric functions with reciprocal trig functions.
- Multiplying matrices with wrong dimensions.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Complex numbers

z = a + bi. |z| = √(a² + b²). arg(z) = arctan(b/a). Conjugate z̄ = a − bi.

#### Trigonometry

sin x, cos x, tan x with period 2π, π. Inverse: arcsin, arccos, arctan. Range of arcsin: [−π/2, π/2]. Range of arccos: [0, π]. Range of arctan: (−π/2, π/2).

#### Matrices

A matrix is m × n. Addition: element-wise. Scalar multiplication: each element. Matrix multiplication: AB defined when columns of A = rows of B. (AB)_ij = Σ_k A_ik B_kj.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Unit 2 prepares for Units 3-4

- Complex numbers, trig and matrices underpin Specialist topics.

#### Year 11 planning pattern

- Term 1: Complex numbers.
- Term 2: Trigonometry.
- Term 3: Matrices.

#### Common misconceptions (and the correction)

- "arcsin(x) = 1/sin(x)." No — arcsin is the inverse function.
- "AB = BA." No — matrix multiplication is not commutative.

---

### Specification reference

This Unit is the second of four Units of WACE Mathematics Specialist. Confirm the live syllabus on senior-secondary.scsa.wa.edu.au.

#### Worked example — complex number operations and Argand diagram transformations

Given complex numbers z₁ = 3 − 4i and z₂ = −1 + 2i:
1. Express z₁ / z₂ in standard Cartesian form a + bi.
2. Find the modulus |z₁| and principal argument arg(z₁) in radians to three decimal places.
3. Show that |z₁ z₂| = |z₁| |z₂|.

Part 1: Division z₁ / z₂
Multiply numerator and denominator by the complex conjugate of the denominator z̄₂ = −1 − 2i:

```
  z₁ / z₂ = (3 − 4i) / (−1 + 2i)
          = [ (3 − 4i)(−1 − 2i) ] / [ (−1 + 2i)(−1 − 2i) ]
```

Expand denominator: (−1)² − (2i)² = 1 − 4(−1) = 1 + 4 = 5.
Expand numerator:

```
  (3)(−1) + (3)(−2i) + (−4i)(−1) + (−4i)(−2i)
  = −3 − 6i + 4i + 8i²
  = −3 − 2i + 8(−1)
  = −11 − 2i
```

Combine:

```
  z₁ / z₂ = (−11 − 2i) / 5 = −11/5 − (2/5)i = −2.2 − 0.4i
```

Part 2: Modulus and argument of z₁
- Modulus: |z₁| = √(3² + (−4)²) = √(9 + 16) = √25 = 5.
- Argument: Point (3, −4) lies in Quadrant IV (x > 0, y < 0).

```
  arg(z₁) = arctan(−4 / 3) = −arctan(4/3) ≈ −0.927 radians
```

Part 3: Modulus property verification
- |z₁| = 5
- |z₂| = √( (−1)² + 2² ) = √(1 + 4) = √5

Multiply z₁ and z₂:

```
  z₁ z₂ = (3 − 4i)(−1 + 2i)
        = −3 + 6i + 4i − 8i²
        = −3 + 10i + 8
        = 5 + 10i
```

Evaluate |z₁ z₂|:

```
  |z₁ z₂| = √(5² + 10²) = √(25 + 100) = √125 = 5√5
```

Compare with product of individual moduli:

```
  |z₁| |z₂| = 5 × √5 = 5√5
```

Since both equal 5√5, |z₁ z₂| = |z₁| |z₂| is verified.

#### Worked example — 2×2 matrix transformations in the plane

A linear transformation in ℝ² is represented by the matrix:

```
  M = [  0  −2 ]
      [  2   0 ]
```

1. Describe the geometric transformation represented by matrix M as a combination of a rotation and a dilation.
2. Find the image of the point P(3, 4) under this transformation.
3. Calculate the determinant det(M) and explain its relationship to the area scale factor of transformed figures.

Part 1: Geometric interpretation
The standard rotation matrix by angle θ is:

```
  R_θ = [  cos θ  −sin θ ]
        [  sin θ   cos θ ]
```

Notice that M can be written as:

```
  M = 2 × [  0  −1 ]
          [  1   0 ]
```

For the bracketed matrix, cos θ = 0 and sin θ = 1  ⇒  θ = π/2 (90° counterclockwise).
Therefore, M represents an anticlockwise rotation through 90° followed by a uniform dilation by a scale factor of 2 centered at the origin.

Part 2: Image of P(3, 4)

```
  P' = M P = [  0  −2 ] [ 3 ] = [ 0(3) + (−2)(4) ] = [ −8 ]
             [  2   0 ] [ 4 ]   [ 2(3) + 0(4)    ]   [  6 ]
```

The coordinates of the image point are P'(−8, 6).

Part 3: Determinant and area scale factor

```
  det(M) = (0)(0) − (−2)(2) = 0 − (−4) = 4
```

The determinant of a 2×2 transformation matrix equals the signed area scale factor. Any 2D geometric figure transformed by matrix M has its area magnified by a factor of |det(M)| = 4.

#### Common marking-scheme mistakes

- Failing to change signs in complex division conjugates (multiplying by −1 + 2i instead of −1 − 2i).
- Forgetting that the area scale factor is |det(M)|, which is positive even when det(M) is negative (a negative determinant indicates a reflection).
- Computing matrix products in reverse order (linear transformations are applied right-to-left: M P, not P M).
- Measuring arguments in degrees when radians are specified in calculus/polar contexts.
- Stating the argument in the wrong quadrant (e.g. reporting −0.927 + π instead of −0.927).

#### 20-minute recap before you walk in

- Conjugate of z = a + bi is z̄ = a − bi. Note that z z̄ = a² + b² = |z|².
- Division rule: (z₁ / z₂) = (z₁ z̄₂) / |z₂|².
- Rotation matrix: R_θ = [cos θ, −sin θ; sin θ, cos θ].
- Reflection across x-axis: [1, 0; 0, −1]; reflection across y = x: [0, 1; 1, 0].
- Determinant of [a, b; c, d] is ad − bc. Area scale factor is |ad − bc|.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SCSA Mathematics Specialist Year 11 Unit 2 syllabus also lists:

- Inverse of 2×2 matrices: M⁻¹ = (1 / det M) [d, −b; −c, a] when det M ≠ 0.
- Solving simultaneous 2×2 linear systems using matrix inverse methods.
- Matrix representations of shears and projections in the Cartesian plane.
- The reciprocal trigonometric ratios: secant, cosecant, and cotangent and their identities.
- Compound angle formulas: sin(A ± B) and cos(A ± B).

Confirm the live syllabus on the SCSA website before planning revision around these.

---

*Last updated 2026-09-24. Source: WACE Mathematics Specialist ATAR syllabus, https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-specialist. Awarding body: School Curriculum and Standards Authority (SCSA).*