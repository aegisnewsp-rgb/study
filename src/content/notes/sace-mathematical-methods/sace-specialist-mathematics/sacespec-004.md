---
exam: sace-mathematical-methods
examName: SACE Stage 2 Mathematical Methods & Specialist Mathematics
subject: sace-specialist-mathematics
subjectName: Specialist Mathematics
topic: sacespec-004
topicName: Vectors in Three Dimensions
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Topic 4: Vectors in Three Dimensions — SACE Stage 2 Specialist Mathematics Notes

Topic 4 of SACE Stage 2 Specialist Mathematics covers vectors in three dimensions; vector operations; the dot product, the cross product, parametric equations and applications to three-dimensional geometry.

> Re-check the live Subject Outline on https://www.sace.sa.edu.au/web/specialist-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **3D vectors.** Components, magnitude, dot product, cross product.
- **Parametric equations.** x(t), y(t), z(t).

#### Examiner traps

- Mixing up 2D and 3D operations.
- Confusing dot and cross products.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Vector operations in 3D

Vector v = (a, b, c). Magnitude |v| = √(a² + b² + c²). Dot product v · w = a·c + b·d + e·f. Cross product v × w in 3D using determinant formula.

#### Parametric equations

r(t) = x(t) i + y(t) j + z(t) k. Velocity v(t) = r'(t). Acceleration a(t) = r''(t).

#### Geometry

Lines in 3D: r = r₀ + t d. Planes in 3D: r · n = d. Intersection of line and plane: substitute and solve.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 4 is foundational

- 3D vectors underpin mechanics and engineering mathematics.

#### Year 12 planning pattern

- Term 1: Vector operations.
- Term 2: Parametric equations.

#### Common misconceptions (and the correction)

- "Cross product is commutative." No — a × b = −b × a.

---

### Specification reference

This Topic is the fourth Topic of the SACE Stage 2 Specialist Mathematics Subject Outline. Confirm the live Subject Outline on sace.sa.edu.au.

#### Worked example — vector line equation and shortest distance from a point to a line

Consider the line L passing through point A(2, −1, 3) in the direction of vector d = 1i + 2j − 2k.
Point P has coordinates (4, 1, −1).
1. Write the vector and parametric equations of line L.
2. Find the coordinates of the foot of the perpendicular from point P to line L.
3. Calculate the shortest distance from point P to line L.

Part 1: Line equations
Vector equation:

```
  r(t) = a + t d = (2i − j + 3k) + t (i + 2j − 2k)
```

Parametric form:

```
  x = 2 + t
  y = −1 + 2t
  z = 3 − 2t
```

Part 2: Foot of the perpendicular F
Let F be a point on line L corresponding to parameter t:
F(2 + t, −1 + 2t, 3 − 2t).
The displacement vector from P(4, 1, −1) to F is:

```
  PF = F − P
     = (2 + t − 4)i + (−1 + 2t − 1)j + (3 − 2t − (−1))k
     = (t − 2)i + (2t − 2)j + (4 − 2t)k
```

Since PF is perpendicular to line L, its dot product with the direction vector d must equal 0:

```
  PF · d = 0
  (t − 2)(1) + (2t − 2)(2) + (4 − 2t)(−2) = 0
  (t − 2) + (4t − 4) + (−8 + 4t) = 0
  9t − 14 = 0
  9t = 14
  t = 14 / 9
```

Substitute t = 14/9 into F:

```
  x = 2 + 14/9 = 32 / 9
  y = −1 + 28/9 = 19 / 9
  z = 3 − 28/9 = −1 / 9
```

The foot of the perpendicular is F(32/9, 19/9, −1/9).

Part 3: Shortest distance |PF|
Substitute t = 14/9 into vector PF:

```
  PF = (14/9 − 18/9)i + (28/9 − 18/9)j + (36/9 − 28/9)k
     = (−4/9)i + (10/9)j + (8/9)k
```

Magnitude |PF|:

```
  |PF| = √[ (−4/9)² + (10/9)² + (8/9)² ]
       = √[ (16 + 100 + 64) / 81 ]
       = √[ 180 / 81 ]
       = √(20 / 9)
       = (2√5) / 3
       ≈ 1.491
```

The shortest distance from point P to line L is (2√5)/3 ≈ 1.49 units.

#### Worked example — line of intersection of two non-parallel planes

Find the vector equation of the line of intersection of the two planes:

```
  Π₁: 2x − y + z = 4
  Π₂: x + 2y − z = 1
```

Step 1: Find the direction vector of the line of intersection
The normal vectors of the two planes are:
n₁ = 2i − 1j + 1k
n₂ = 1i + 2j − 1k

The line of intersection lies in both planes, so its direction vector d is perpendicular to both normal vectors. Compute the cross product n₁ × n₂:

```
  d = det | i   j   k |
          | 2  −1   1 |
          | 1   2  −1 |

  d = i [ (−1)(−1) − (1)(2) ] − j [ (2)(−1) − (1)(1) ] + k [ (2)(2) − (−1)(1) ]
    = i [ 1 − 2 ] − j [ −2 − 1 ] + k [ 4 + 1 ]
    = −1i + 3j + 5k
```

Step 2: Find a common point on both planes
Set z = 0:

```
  2x − y = 4     (1)
  x + 2y = 1     (2)
```

From (2), x = 1 − 2y. Substitute into (1):

```
  2(1 − 2y) − y = 4
  2 − 4y − y = 4
  −5y = 2  ⇒  y = −2/5
```

Then x = 1 − 2(−2/5) = 1 + 4/5 = 9/5.
A common point is P₀(9/5, −2/5, 0).

Step 3: State the vector equation of the line

```
  r(t) = ((9/5)i − (2/5)j) + t (−i + 3j + 5k)
```

#### Common marking-scheme mistakes

- Confusing the direction vector of a line with the position vector of a point on the line.
- Forgetting that the dot product of perpendicular vectors equals zero (PF · d = 0).
- Calculating the distance between two skew lines using 2D formulas instead of 3D projection methods.
- Dropping negative signs in 3×3 determinant calculations for the cross product.
- Stating the intersection of two planes as a single point rather than a line.

#### 20-minute recap before you walk in

- Vector line in 3D: r = r₀ + t d. Direction vector d has components (x₂ − x₁, y₂ − y₁, z₂ − z₁).
- Vector plane in 3D: n · (r − r₀) = 0  ⇒  a x + b y + c z = d.
- Angle between two planes: cos θ = |n₁ · n₂| / (|n₁| |n₂|).
- Angle between a line and a plane: sin θ = |d · n| / (|d| |n|).
- Shortest distance from point P to line with direction d: |AP × d| / |d|.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SACE Stage 2 Specialist Mathematics Subject Outline also lists:

- Shortest distance between two skew lines using the formula |(r₂ − r₁) · (d₁ × d₂)| / |d₁ × d₂|.
- Geometric proofs of sphere properties using vector equations |r − c| = R.
- Reflecting a point across a plane using normal projection.
- Linear dependence of three vectors in 3D using the scalar triple product a · (b × c) = 0.
- Vector descriptions of circles in 3D space as the intersection of a sphere and a plane.

Confirm the live Subject Outline on the SACE website before planning revision around these.

---

*Last updated 2026-09-24. Source: SACE Stage 2 Specialist Mathematics Subject Outline, https://www.sace.sa.edu.au/web/specialist-mathematics. Awarding body: SACE Board of South Australia.*