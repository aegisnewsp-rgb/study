---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-019
topicName: Vector Algebra
weight: 4
country: india
generated: "2026-04-17T22:58:00.000000"
diagramPrompt: "Clean educational diagram showing Vector Algebra magnitude and direction with clear labels, white background, labeled arrows, coordinate axes, exam-style illustration"





---
# Vector Algebra

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Vector Algebra** — Key Facts for JEE Main
Vector: has magnitude and direction; written as →a or a
Unit vector: vector with magnitude 1; ā = →a/|→a|
Dot product: →a · →b = |→a||→b| cos θ; also = a₁b₁ + a₂b₂ + a₃b₃ in components
Cross product: →a × →b = |→a||→b| sin θ n̂ where n̂ is perpendicular to both (right-hand rule)
⚡ Exam tip: JEE Main tests dot and cross product properties, projection, and vector equations — projection formula is a favourite!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Vector Algebra** — JEE Main Study Guide

**Vector representation:**
In 3D: →a = a₁î + a₂ĵ + a₃k̂; magnitude |→a| = √(a₁² + a₂² + a₃²)
If →a makes angles α, β, γ with x, y, z axes: a₁ = |→a| cos α, a₂ = |→a| cos β, a₃ = |→a| cos γ
Direction cosines: cos²α + cos²β + cos²γ = 1

**Equality:** Two vectors are equal if they have same magnitude and direction (parallel and same length)

**Addition:** →a + →b = (a₁+b₁)î + (a₂+b₂)ĵ + (a₃+b₃)k̂
Triangle law: →a and →b placed head-to-tail; parallelogram law same result

**Scalar (dot) product:**
→a · →b = |→a||→b| cos θ = a₁b₁ + a₂b₂ + a₃b₃
Properties: →a · →a = |→a|²; →a · →b = →b · →a (commutative); →a · (→b + →c) = →a · →b + →a · →c
Perpendicular: →a · →b = 0 iff →a ⊥ →b
Parallel: →a · →b = |→a||→b| when same direction; = −|→a||→b| when opposite

**Vector (cross) product:**
→a × →b = |→a||→b| sin θ n̂ (right-hand rule)
→a × →b = (a₂b₃ − a₃b₂)î − (a₁b₃ − a₃b₁)ĵ + (a₁b₂ − a₂b₁)k̂ (determinant form)
Properties: →a × →b = −(→b × →a) (anti-commutative); →a × →a = →0; →a × (→b + →c) = →a × →b + →a × →c
Parallel: →a × →b = →0 iff →a ∥ →b

**Projection:**
Projection of →a on →b = (→a · →b̂) = (→a · →b)/|→b|
Scalar projection = (→a · →b)/|→b|; Vector projection = [(→a · →b)/|→b|²] →b

**Section formula:**
Point dividing AB in ratio m:n (internal): →r = (m→b + n→a)/(m+n)
External division: →r = (m→b − n→a)/(m−n)

**Collinearity:** Three points A, B, C are collinear if →AB × →AC = →0

**Coplanarity:** Four points are coplanar if (→B−→A) · [(→C−→A) × (→D−→A)] = 0

- **Key formula:** →a · →b = |→a||→b| cos θ; →a × →b = |→a||→b| sin θ n̂; projection = (→a · →b)/|→b|
- **Common trap:** →a × →b = −(→b × →a) — cross product is not commutative! Also, →a · →b = 0 doesn't mean one vector is zero (unless magnitude is zero)
- **Exam weight:** 1–2 questions per year (4–8 marks); frequently combined with 3D geometry

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Vector Algebra** — Comprehensive JEE Main Notes

**Triple products:**
- Scalar triple product: [→a →b →c] = →a · (→b × →c) = determinant of components
- Volume of parallelepiped = |→a · (→b × →c)| = |[→a →b →c]|
- Vector triple product: →a × (→b × →c) = →b(→a · →c) − →c(→a · →b) (BAC-CAB rule)

**Work done:** W = →F · →d = |→F||→d| cos θ

**Moment of force:** Moment about point O = →r × →F (where →r is position vector of point of application)

**Application in physics:**
- Angular momentum: →L = →r × →p = →r × m→v
- Torque: →τ = →r × →F
- Area of parallelogram: |→a × →b|
- Area of triangle: ½|→a × →b|

**Lagrange's identity:**
|→a × →b|² = |→a|²|→b|² − (→a · →b)²

**Coplanar vectors:**
Three vectors are coplanar if scalar triple product is zero: →a · (→b × →c) = 0

**Linear combination:**
If →r = α→a + β→b + γ→c and vectors are non-coplanar, then α, β, γ are unique

**Reciprocal system:**
For three non-coplanar vectors →a, →b, →c:
→a' = (→b × →c)/(→a · (→b × →c)); similarly for →b', →c'
Property: →a · →a' = 1; →a · →b' = 0 for b' ≠ a'

**Vector equation of line:**
Through point →a with direction →b: →r = →a + t→b (parametric)
Two-point form: →r = →a + t(→b − →a)

**Vector equation of plane:**
Through point →a with normal →n: →n · (→r − →a) = 0
Through three points: using cross product to find normal

**Perpendicular distance from point to line:**
d = |(→b − →a) × (→c − →a)| / |→b − →a| where line passes through →a, →b and point is →c

**Perpendicular distance from point to plane:**
d = |→n · (→r₀ − →a)| / |→n| where plane is →n · (→r − →a) = 0 and point is →r₀

**Transformation between coordinate systems:**
If vectors are expressed in terms of unit vectors: →a = a₁î + a₂ĵ + a₃k̂, these are the components

**Using vector methods for geometry:**
- Perpendicular bisector of AB: set of points P where →PA · →AB = 0
- Angle bisector: points where projection on two direction vectors are equal

**Important identities:**
- (→a + →b)² = →a² + →b² + 2→a · →b (note: →a² means →a · →a)
- (→a − →b)² = →a² + →b² − 2→a · →b
- (→a + →b) × (→a − →b) = 2(→b × →a)

- **Remember:** →a · →b = a₁b₁ + a₂b₂ + a₃b₃; →a × →b = determinant; scalar triple product gives volume; projection formula: (→a · →b̂) = (→a · →b)/|→b|
- **Previous years:** "Find angle between vectors →a = î + ĵ and →b = ĵ + k̂" [2023]; "Find projection of →a on →b if →a = 2î + 4ĵ − k̂ and →b = 3î + 2ĵ + 2k̂" [2024]; "Find unit vector perpendicular to both →a = î + ĵ and →b = ĵ + k̂" [2024]

---

## 📊 JEE Main Exam Essentials

| Detail | Value |
|---|---|
| Questions | 90 (30 per subject) |
| Time | 3 hours |
| Marks | 300 (90 per subject) |
| Section | Physics (30), Chemistry (30), Mathematics (30) |
| Negative | −1 for wrong answer |
| Mode | Computer-based |

### 🎯 High-Yield Topics for JEE Main Mathematics
- Calculus (Differentiation + Integration) — ~35 marks combined
- Coordinate Geometry (straight lines, circles, conics) — ~20 marks
- Algebra (Complex Numbers, Quadratics, P&C, Probability) — ~25 marks
- Trigonometry + Inverse Trigonometry — ~15 marks
- Vector + 3D — ~15 marks

### 📝 Previous Year Question Patterns
- Vector Algebra: 1–2 questions per year, 4–8 marks
- Common patterns: dot and cross product calculations, projection, unit vectors, angle between vectors
- Weight: medium frequency, high scoring if formulas are known

### 💡 Pro Tips
- Always use the determinant formula for cross product — it's the safest approach in 3D
- For angle between vectors, use cos θ = (→a · →b)/(|→a||→b|) — but first check they aren't zero vectors
- Projection of →a on →b is scalar = (→a · →b)/|→b|; vector projection = [(→a · →b)/|→b|²] →b
- Remember: →a × →b is perpendicular to both →a and →b (right-hand rule for direction)
- For coplanarity of 4 points, compute scalar triple product of three vectors from one point
- When finding unit vector in direction of →a, it's →a/|→a| — but only if →a is not zero

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*