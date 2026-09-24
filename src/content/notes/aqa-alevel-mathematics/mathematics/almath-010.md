---
exam: aqa-alevel-mathematics
examName: A-Level Mathematics (AQA 7357)
subject: mathematics
subjectName: Mathematics
topic: almath-010
topicName: Vectors
weight: 3
country: uk
generated: "2026-09-22T10:00:00"
lastUpdated: "2026-09-22"
---

# Vectors — A-Level Mathematics (AQA 7357) Notes

Vectors is section J of the AQA 7357 specification. The section covers vectors in two and three dimensions, magnitude and direction, position vectors, and using vectors to solve geometric problems including proof of collinearity. Vectors are the language of mechanics (sections P to S) — kinematics, forces, moments all use vector notation — and are also assessed as a stand-alone topic on Paper 2. The skill is the same in 2D and 3D: write each vector in component form, then the operations (addition, scalar multiplication, magnitude, dot product) are mechanical.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Vectors in component form

A vector in 2D: a = (b₁, b₂), where b₁ is the x-component and b₂ is the y-component.

A vector in 3D: a = (a₁, a₂, a₃).

The vector from P to Q is Q − P: if P = (1, 2) and Q = (4, 6), then PQ = (3, 4).

#### Magnitude

|a| = √(a₁² + a₂² + a₃²) for the 3D case (omit the a₃² term in 2D).

#### Operations

- **Addition**: a + b = (a₁ + b₁, a₂ + b₂, a₃ + b₃). Component-wise.
- **Scalar multiplication**: λa = (λa₁, λa₂, λa₃).
- **Dot product**: a · b = a₁b₁ + a₂b₂ + a₃b₃ (3D). Also equal to |a||b| cos θ, where θ is the angle between them.

#### Collinearity

Three points A, B, C are collinear iff AB and AC are parallel vectors (i.e., AB = λ AC for some scalar λ). Equivalently, the position vectors satisfy OB = OA + λ OC for some λ.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Position vectors and displacement vectors

A position vector is the vector from the origin O to a point P. Notation: a = OP.

A displacement vector is the vector from one point to another. AB = b − a, where a = OA and b = OB.

**Worked example.** A = (1, 2, 3), B = (4, 6, 8). AB = (4 − 1, 6 − 2, 8 − 3) = (3, 4, 5).

The magnitude of AB is √(9 + 16 + 25) = √50 = 5√2.

#### Magnitude and direction

The magnitude (or modulus) of vector a = (a₁, a₂, a₃) is:

|a| = √(a₁² + a₂² + a₃²).

A unit vector in the direction of a is â = a / |a|.

**Worked example.** a = (3, 4, 0). |a| = √(9 + 16 + 0) = 5. Unit vector â = (3/5, 4/5, 0).

#### The dot product

For two vectors a = (a₁, a₂, a₃) and b = (b₁, b₂, b₃), the dot product is:

a · b = a₁b₁ + a₂b₂ + a₃b₃.

Two equivalent formulas:

- a · b = |a||b| cos θ (where θ is the angle between a and b).
- a · b = 0 iff a and b are perpendicular (provided neither is the zero vector).

**Worked example — finding the angle.** a = (1, 2, 3), b = (4, −1, 2). Find the angle between them.

a · b = 1·4 + 2·(−1) + 3·2 = 4 − 2 + 6 = 8.
|a| = √(1 + 4 + 9) = √14. |b| = √(16 + 1 + 4) = √21.
cos θ = 8 / (√14 · √21) = 8 / √294 ≈ 8 / 17.15 ≈ 0.467.
θ ≈ 62.2° (about 1.086 rad).

**Worked example — proving perpendicularity.** Show (1, 2, −1) and (2, −1, 0) are perpendicular.

Dot product: 1·2 + 2·(−1) + (−1)·0 = 2 − 2 + 0 = 0. The dot product is zero, so the vectors are perpendicular.

#### Collinearity

Three points A, B, C are collinear iff AB and AC are parallel, i.e., AB = λ AC for some scalar λ.

**Worked example.** A = (1, 0, 2), B = (3, 2, 5), C = (−1, −2, −1). Show A, B, C are collinear.

AB = (2, 2, 3). AC = (−2, −2, −3).

Note that AC = −AB. So AB = −AC (or equivalently AB = (−1) · AC). AB and AC are parallel, hence A, B, C are collinear.

Equivalently, the midpoints of consecutive segments coincide: midpoint of AB = midpoint of BC. Compute midpoints and verify they are equal.

#### Proving geometric properties with vectors

**Worked example — parallelogram.** Show that the quadrilateral ABCD with A = (1, 1), B = (4, 1), C = (5, 3), D = (2, 3) is a parallelogram.

AB = (3, 0). DC = (5 − 2, 3 − 3) = (3, 0). So AB = DC. Since one pair of opposite sides is equal and parallel, ABCD is a parallelogram.

**Worked example — point on a line.** Given A = (1, 2, 3) and B = (5, 6, 9), find the point P on AB such that AP : PB = 1 : 2.

P divides AB in ratio 1 : 2 from A, so OP = OA + (1/3) AB = (1, 2, 3) + (1/3)(4, 4, 6) = (1 + 4/3, 2 + 4/3, 3 + 2) = (7/3, 10/3, 5).

#### Unit vectors and direction ratios

A vector (a₁, a₂, a₃) gives a direction in 3D space. The unit vector in that direction is â = (a₁, a₂, a₃)/√(a₁² + a₂² + a₃²). Two vectors with proportional components have the same direction (or opposite, depending on the sign).

**Worked example — direction cosines.** For a = (1, 2, 3), the direction cosines are:

l = a₁/|a| = 1/√14, m = a₂/|a| = 2/√14, n = a₃/|a| = 3/√14.

These are the cosines of the angles the vector makes with the x, y and z axes.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why vectors unlock mechanics

Every mechanics question on Paper 2 uses vectors: velocity is the derivative of position, acceleration is the derivative of velocity, force is mass times acceleration, momentum is mass times velocity. The vector operations (addition, dot product, magnitude) become the operations you perform on every kinematics and dynamics quantity. Mastering 3D vector arithmetic once saves hours of separate work in mechanics.

The mechanics section also asks for unit vectors along a line ("find the velocity of a particle moving in the direction of (3, 4) with speed 10 m/s"). The answer is 10 · (3/5, 4/5) = (6, 8) — the speed times the unit direction vector. Recognising this pattern gets full marks on the question.

#### Worked pattern — angle between two lines in 3D

Given two lines with direction vectors a and b, the angle between them is:

θ = arccos((a · b)/(|a| |b|)).

**Worked example.** Line 1: direction (1, 2, 3). Line 2: direction (4, −1, 2). Find the angle.

Computed above: cos θ = 8 / (√14 · √21) ≈ 0.467, so θ ≈ 62.2°.

Note: the angle between two lines is the acute one, so if the dot product gives an obtuse θ (cos θ < 0), take θ' = 180° − θ or use |cos θ| in the arccos.

#### Worked pattern — proof of collinearity

To show that A, B, C are collinear:

1. Compute AB = OB − OA and AC = OC − OA.
2. Show that AB = k AC for some scalar k (the ratio).
3. Conclude that A, B, C lie on the same straight line.

This is the AQA standard form for collinearity questions. The proof is one direction only (collinear means parallel in the same line); if you also need to show order (e.g., B is between A and C), the sign of k matters: k ∈ (0, 1) puts B between A and C.

#### Common misconceptions (and the correction)

- "The vector (3, 4) and (4, 3) are the same." No — (3, 4) has x-component 3 and y-component 4; (4, 3) swaps them. The order matters.
- "The dot product is |a||b|." Only when the vectors are parallel (θ = 0). For arbitrary angles, a · b = |a||b| cos θ.
- "Collinear means parallel." For three points, yes: collinear means they lie on the same line, so the vectors between any two are parallel. But two parallel vectors don't guarantee three specific points are collinear — they would only if all three share the same line.
- "Unit vectors are unique." Each direction has exactly two unit vectors (opposite). The "unit vector in the direction of a" is a/|a|, but −a/|a| is also a unit vector (pointing the opposite way).

#### Specification reference

Section J of the AQA A-level Mathematics 7357 specification appears on Paper 2 (alongside mechanics) and feeds into the kinematics content (sections P and Q). Confirm the live paper structure, formula booklet and any in-year specification changes on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-22. Source: AQA A-level Mathematics specification 7357, https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357. Paper structure, assessment weighting and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*