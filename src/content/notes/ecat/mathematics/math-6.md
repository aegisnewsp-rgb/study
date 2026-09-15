---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-6
topicName: Straight Line and Coordinate Geometry
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.066715"
lastUpdated: "2026-09-15"
diagramPrompt: "Mathematical diagram showing Straight Line and Coordinate Geometry concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Straight Line and Coordinate Geometry

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **straight line** is the locus of every point (x, y) satisfying a first-degree equation ax + by + c = 0, with a and b not both zero. Its **slope m** is the constant ratio (y₂ − y₁)/(x₂ − x₁), and every form of the line — point-slope, slope-intercept, two-point, intercept — is just a rearrangement of the same linear relation. ECAT Pakistan tests this topic for roughly 4% of the Mathematics paper, mostly as MCQs on slope, parallel/perpendicular conditions, angle between lines, and point-to-line distance.

| Form | Equation | Variables (SI units) |
|---|---|---|
| Slope-intercept | y = mx + c | m = slope (dimensionless), c = y-intercept (coordinate units) |
| Point-slope | y − y₁ = m(x − x₁) | m = slope, (x₁, y₁) = given point on line |
| Two-point | (y − y₁)/(y₂ − y₁) = (x − x₁)/(x₂ − x₁) | (x₁, y₁), (x₂, y₂) = two distinct points |
| Intercept | x/a + y/b = 1 | a = x-intercept, b = y-intercept |
| Distance formula | d = \|ax₁ + by₁ + c\| / √(a² + b²) | d in coordinate units, a,b,c from line equation |

> 💡 **High-Yield Memory Hook:** **"MP³"** — *Match-slope Parallel product-minus-one Perpendicular*. If slopes match, lines are parallel; if the product of slopes is −1, lines are perpendicular. For the angle: **"M-minus-M over One-plus-MM"** — tan θ = |(m₁ − m₂)/(1 + m₁m₂)|.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definitions and Slope

The **slope (gradient)** m = (y₂ − y₁)/(x₂ − x₁) measures the rate at which y changes when x increases by one unit. For a vertical line x = k, the denominator vanishes and the slope is undefined; for a horizontal line y = k, m = 0. The **angle of inclination** θ is measured anticlockwise from the positive x-axis to the line, with θ ∈ [0, π) and the identity m = tan θ (provided θ ≠ π/2).

Key principles to internalise:

1. Every straight line maps one-to-one to an equation ax + by + c = 0 where (a, b) ≠ (0, 0).
2. Parallel lines share equal slopes; perpendicular lines satisfy m₁ · m₂ = −1.
3. The y-intercept c is read directly from y = mx + c; the x-intercept is found by setting y = 0.
4. Collinearity of three points reduces to checking whether the triangle area formula equals zero.

#### Concept Comparison Matrix

| Property | Slope-intercept y = mx + c | Intercept form x/a + y/b = 1 | General form ax + by + c = 0 |
|---|---|---|---|
| What is read directly | m and y-intercept c | x-intercept a, y-intercept b | Coefficients a, b, c for distance/angle work |
| When useful | Graphing, parallel/perpendicular checks | Quick x- and y-intercepts | Point-to-line distance, angle bisectors |
| Sign pitfall | c is on y-axis, not x-axis | a or b negative → intercept on negative axis | Sign of c decides which side of origin the line passes |
| Vertical-line behaviour | Breaks down (m undefined) | Breaks down (b = 0 invalid) | Works if a ≠ 0 |

#### 🎯 Exam-Level Worked Problem

**Question:** Find the equation of the line passing through the point (2, −3) and perpendicular to the line joining (4, 1) and (−2, 5). Also compute the distance from the origin (0, 0) to this new line.

#### Solution:

*Step 1 — Slope of the given line through (4, 1) and (−2, 5):*
m₁ = (5 − 1)/(−2 − 4) = 4/(−6) = −2/3 (dimensionless)

*Step 2 — Slope of the perpendicular line:*
m₁ · m₂ = −1  ⇒  m₂ = −1/m₁ = −1/(−2/3) = 3/2

*Step 3 — Equation using point-slope form with (2, −3):*
y − (−3) = (3/2)(x − 2)
y + 3 = (3/2)x − 3
Multiply through by 2: 2y + 6 = 3x − 6
Rearrange to general form: **3x − 2y − 12 = 0**

*Step 4 — Distance from (0, 0) to 3x − 2y − 12 = 0:*
d = |3(0) − 2(0) − 12| / √(3² + (−2)²) = |−12| / √13 = **12/√13 coordinate units** ≈ 3.33 units.

> ⚠️ **Examiner Trap:** Students often flip the perpendicular slope by writing m₂ = −m₁ instead of m₂ = −1/m₁. For the example above, the wrong answer would be m₂ = 2/3, producing a line parallel to a different reference rather than perpendicular. Always divide, never negate the original slope.

#### Distance Formula and Collinearity

The perpendicular distance from (x₁, y₁) to ax + by + c = 0 equals |ax₁ + by₁ + c| / √(a² + b²). Three points (x₁, y₁), (x₂, y₂), (x₃, y₃) are collinear iff

½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)| = 0.

This identity is a frequent ECAT shortcut when the question asks whether a fourth point lies on the line defined by two others.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

Several situations break the standard formulas and appear as "twist" questions in ECAT and other PEC/HEC-affiliated entry tests:

1. **Vertical lines** x = k have undefined slope; treating them in y = mx + c yields a meaningless "infinite m" expression. Use x = k directly.
2. **Coincident lines** share both slope and intercept; the angle θ between them is 0, so tan θ = 0. The angle formula tan θ = |(m₁ − m₂)/(1 + m₁m₂)| still works because both numerator and the (1 + m₁m₂) denominator remain finite.
3. **Perpendicular vertical/horizontal pair** — a vertical line (slope undefined) is perpendicular to every horizontal line (m = 0). The product rule m₁m₂ = −1 fails here because m₁ is not a real number; recognise the geometric fact instead.
4. **Angle of inclination wrapping** — when the computed tan θ is negative, θ lies in (π/2, π), not in (−π/2, 0). ECAT options usually list θ ∈ [0, π).
5. **Distance formula sign** — the absolute value in the numerator means the distance is always non-negative; flipping signs of a, b, c throughout does not change the line, so check that the equation is in a consistent standard form before substituting.

#### Advanced Practice Prompts

1. **Bisector of the angle between two intersecting lines** — Derive the equations of the two bisectors of lines 3x − 4y + 5 = 0 and 5x + 12y − 7 = 0, and show that the bisectors are themselves perpendicular to each other. Hint: use (a₁x + b₁y + c₁)/√(a₁² + b₁²) = ±(a₂x + b₂y + c₂)/√(a₂² + b₂²).
2. **Family of lines through a fixed point with a given slope band** — Find the range of slopes m such that a line of slope m through (3, −2) intersects the positive x- and y-axes to form a triangle of area at most 6 square units. Use intercept form x/a + y/b = 1 with a = 3 − 2/m and b = −2 − 3m, then impose ½|ab| ≤ 6.

#### Connections to Adjacent Topics

Straight-line geometry feeds directly into **Conic Sections** (the general second-degree equation ax² + 2hxy + by² + 2gx + 2fy + c = 0 collapses to a line pair when the discriminant Δ = abc + 2fgh − af² − bg² − ch² = 0). It also underpins **Vectors and 3D Geometry** via the direction-ratio concept and the line equation in symmetric form (x − x₁)/a = (y − y₁)/b = (z − z₁)/c. In **Calculus**, the slope of the tangent to a curve y = f(x) at a point is precisely f′(x₀), so coordinate geometry problems frequently pair with differentiation to give tangent and normal lines.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Straight Line and Coordinate Geometry" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
