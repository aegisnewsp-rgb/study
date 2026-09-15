---
exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-16
topicName: Vectors in Two Dimensions
weight: 3
country: nigeria
generated: "2026-03-24T08:32:07.739451"
lastUpdated: "2026-09-15"
diagramPrompt: "Vector diagram in 2D showing vector components, magnitude and direction, angle with horizontal axis, head-to-tail addition method, clean black and white style"
---

# Vectors in Two Dimensions

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **vector** in two dimensions is a directed line segment in the xy-plane described by a **magnitude** (length) and a **direction** (angle θ from the positive x-axis). It is written in **component form** as **v = ai + bj**, where **a** and **b** are the horizontal and vertical components (in metres or any length unit), and **i**, **j** are orthonormal unit vectors along the x- and y-axes.

- **Magnitude:** |v| = √(a² + b²), SI unit: m
- **Direction:** θ = arctan(b/a), quadrant-adjusted, SI unit: rad (or °)
- **Unit vector:** û = v / |v|, dimensionless, points along v
- **Dot product:** v · w = a₁a₂ + b₁b₂ = |v||w| cos θ, result in m²
- **Parallel test:** v ∥ w ⟺ v = k w for some scalar k
- **Perpendicular test:** v · w = 0

> 💡 **High-Yield Memory Hook:** **"MDC-PU"** — **M**agnitude (√(a²+b²)), **D**irection (arctan(b/a) with quadrant check), **C**omponents (a, b), **P**arallel (one is k times the other), **U**nit (divide by magnitude). For perpendicular vectors, remember **"Dot = 0 means 90°"**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Concept and Representation

A 2-D vector is a quantity with both **magnitude** (how long) and **direction** (which way), unlike a **scalar** which carries only magnitude. In the xy-plane, every vector v can be written as **v = ai + bj**, where **a** is the horizontal component (positive right, negative left) and **b** is the vertical component (positive up, negative down). Two vectors are **equal** if and only if they have the same magnitude *and* the same direction — being drawn on parallel lines is not enough.

#### Magnitude, Direction, and Unit Vectors

The **magnitude** |v| is the Euclidean length: |v| = √(a² + b²). The **direction** is the angle θ measured anticlockwise from the positive x-axis: θ = arctan(b/a), with the result placed in the correct quadrant using the signs of a and b. A **unit vector** û is a dimensionless vector of length 1 pointing along v, obtained by **û = v / |v|**.

#### Addition, Subtraction, and Scalar Multiplication

Vectors add **head-to-tail** (triangle rule) or by the **parallelogram rule**; algebraically, add components: (a₁ + a₂)i + (b₁ + b₂)j. Subtraction **v − w** is the vector from the tip of w to the tip of v, equal to (a₁ − a₂)i + (b₁ − b₂)j. Multiplying by a scalar **k** scales the magnitude by |k| and flips direction if k < 0.

#### Dot Product and Angle Between Vectors

For v = a₁i + b₁j and w = a₂i + b₂j:
**v · w = a₁a₂ + b₁b₂ = |v||w| cos θ**, where θ is the angle between them. The angle is recovered from cos θ = (v · w) / (|v| |w|). When **v · w = 0**, the vectors are **perpendicular**.

#### Concept Comparison Matrix

| Feature | Vector | Scalar |
|---|---|---|
| Has magnitude | Yes | Yes |
| Has direction | Yes | No |
| Adds by | Component-wise (or head-to-tail) | Ordinary arithmetic |
| Example | Force 5 N east | Mass 5 kg |
| Dot product of two | Gives scalar (cos θ) | N/A |
| Negative sign | Reverses direction | Sign only |

| Test | Formula | Result |
|---|---|---|
| Parallel vectors | v = k w, k ∈ ℝ | k > 0 same direction; k < 0 opposite |
| Perpendicular vectors | v · w = 0 | Angle = 90° |
| Equal vectors | Same magnitude **and** direction | Position may differ |
| Magnitude bound for resultant | |a − b| ≤ |v + w| ≤ a + b | Equality when parallel |

#### 🎯 Exam-Level Worked Problem

**Question:** Two forces act on a particle: **F₁ = 3i + 4j** N and **F₂ = 5i − 2j** N. Find (i) the magnitude and direction of the resultant **R = F₁ + F₂**, and (ii) the angle between F₁ and F₂ to the nearest degree.

#### Solution:

(i) Component-wise addition:
R = (3 + 5)i + (4 − 2)j = **8i + 2j** N.

Magnitude: |R| = √(8² + 2²) = √(64 + 4) = √68 ≈ **8.246 N**.

Direction: θ = arctan(2 / 8) = arctan(0.25) ≈ **14.04°** above the positive x-axis (first quadrant, since both components are positive).

(ii) Components: F₁ = (3, 4), F₂ = (5, −2).

|F₁| = √(9 + 16) = √25 = 5, |F₂| = √(25 + 4) = √29 ≈ 5.385.

Dot product: F₁ · F₂ = (3)(5) + (4)(−2) = 15 − 8 = **7 N²**.

cos θ = (F₁ · F₂) / (|F₁||F₂|) = 7 / (5 × 5.385) = 7 / 26.925 ≈ 0.2600.

θ = arccos(0.2600) ≈ **74.93° ≈ 75°**.

> ⚠️ **Examiner Trap:** Students frequently compute arctan(2/8) and stop at 14° without checking the quadrant. Since both components of R are positive, R lies in the **first quadrant** — the answer is correct here, but if 8i − 2j had been given, the angle would be **−14°** (or 346°), not 14°. Always inspect the signs before reporting θ.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

1. **Zero vector:** 0 = 0i + 0j has magnitude 0 and undefined direction; it is parallel to every vector by convention.
2. **Resultant magnitude bound:** For any two vectors of magnitudes a and b, |a − b| ≤ |v + w| ≤ a + b. Equality on the right holds when vectors are **parallel and same-sense**; equality on the left holds when they are **anti-parallel**.
3. **Position vectors:** The position vector of point P(x, y) from origin O is OP = xi + yj. The **midpoint** M of AB is (OA + OB)/2, and the section formula extends to internal/external division in ratio m:n.
4. **Linear dependence in 2-D:** Two non-zero vectors are **linearly dependent** iff they are parallel (one is a scalar multiple of the other); otherwise they are **independent** and span the plane.

#### Advanced Traps and Exceptions

1. Drawing |v| from Pythagoras while assuming it equals a + b or a² + b² — the standard form is **√(a² + b²)**, not the sum or the sum of squares.
2. Reporting θ = arctan(b/a) without **quadrant correction** when a < 0; add 180° for second/third quadrants.
3. Treating **parallel lines** as proof of equal vectors — direction and magnitude must both match.
4. Forgetting the **negative sign** when subtracting vectors: v − w ≠ w − v.
5. Computing the angle between vectors with sin instead of cos, confusing **dot** (cos) with **cross** (sin) products.

#### Connection to Adjacent Topics

Vectors underpin **mechanics** (forces, velocity, displacement), **coordinate geometry** (slope, parallel/perpendicular lines), and **complex numbers** (z = x + iy behaves like a 2-D vector). The perpendicular condition v · w = 0 mirrors the slope rule m₁m₂ = −1 for lines.

#### Quick Self-Test (advanced)

1. If u = 2i − 3j and v = ki + 4j are perpendicular, find k.
   *Answer:* u · v = 2k − 12 = 0 ⟹ k = 6.
2. A particle moves from A(1, 2) to B(7, 10). Find the displacement vector and the unit vector in that direction.
   *Answer:* AB = 6i + 8j; |AB| = 10; û = 0.6i + 0.8j.

---

## Continue your study

- **[View this topic in your JAMB UTME roadmap](/roadmap/?exam=jamb&duration=1mo)** — see where "Vectors in Two Dimensions" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jamb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JAMB UTME exam overview](/exams/jamb/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jamb/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
