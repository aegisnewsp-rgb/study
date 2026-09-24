---
exam: aqa-alevel-mathematics
examName: A-Level Mathematics (AQA 7357)
subject: mathematics
subjectName: Mathematics
topic: almath-003
topicName: Coordinate Geometry
weight: 4
country: uk
generated: "2026-09-22T10:00:00"
lastUpdated: "2026-09-22"
---

# Coordinate Geometry — A-Level Mathematics (AQA 7357) Notes

Coordinate Geometry is section C of the AQA 7357 specification. The section covers equations of straight lines (with the parallel/perpendicular condition), the equation of a circle, and parametric equations of curves in the (x, y) plane. Most of the marks in this section sit on the line equations and the circle equation; parametric equations come up as a smaller, more concentrated sub-topic and form the bridge to the kinematics work in mechanics. The section is short enough to revise in a few focused sessions and returns reliable marks because the question types repeat year on year.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Equations of straight lines

- **Gradient form**: y = mx + c, where m is the gradient and c is the y-intercept.
- **Point–gradient form**: y − y₁ = m(x − x₁), the line through (x₁, y₁) with gradient m.
- **Two-point form**: (y − y₁)/(y₂ − y₁) = (x − x₁)/(x₂ − x₁).
- **General form**: ax + by + c = 0, gradient = −a/b, y-intercept = −c/b.

#### Parallel and perpendicular

- Two lines are parallel if they have the same gradient: m₁ = m₂.
- Two lines are perpendicular if the product of gradients is −1: m₁ · m₂ = −1. (Equivalently, m₂ = −1/m₁.)

#### Equation of a circle

The circle with centre (a, b) and radius r has equation (x − a)² + (y − b)² = r². The expanded form x² + y² − 2ax − 2by + (a² + b² − r²) = 0 exposes the centre and radius by completing the square, or by inspection.

#### Parametric equations

A parametric curve has x and y both expressed in terms of a third variable t (the parameter). For the circle x² + y² = r² centred at the origin, one common parametrisation is x = r cos t, y = r sin t, with t in radians. The Cartesian form is recovered by eliminating t using cos²t + sin²t = 1.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Straight lines in detail

**Finding the equation of a line** from two points: subtract the y-coordinates to get Δy, subtract the x-coordinates to get Δx, gradient m = Δy/Δx. Then substitute a point into y − y₁ = m(x − x₁).

**Worked example.** Find the equation of the line through (1, 4) and (5, 12).

m = (12 − 4)/(5 − 1) = 8/4 = 2. Using (1, 4): y − 4 = 2(x − 1), so y = 2x + 2.

**Midpoint of a segment**: M = ((x₁ + x₂)/2, (y₁ + y₂)/2).

**Distance between two points**: d = √((x₂ − x₁)² + (y₂ − y₁)²).

**Parallel condition**: two lines with gradients m₁ and m₂ are parallel iff m₁ = m₂. Note: vertical lines (undefined gradient) are parallel to each other; "parallel" must include the vertical-line case explicitly.

**Perpendicular condition**: m₁ · m₂ = −1. If one line is horizontal (m = 0), the perpendicular is vertical (undefined gradient).

#### The equation of a circle

Standard form: (x − a)² + (y − b)² = r².

Expanded form: x² + y² − 2ax − 2by + (a² + b² − r²) = 0.

**Finding centre and radius from expanded form.** Match coefficients: x² + y² + Dx + Ey + F = 0 has centre (−D/2, −E/2) and radius √((D/2)² + (E/2)² − F). For the equation to represent a real circle, the radius must be positive, so (D/2)² + (E/2)² − F > 0; if the expression is 0 the equation is a single point, if negative it has no real locus.

**Tangent to a circle.** A tangent at point P(x₁, y₁) on the circle (x − a)² + (y − b)² = r² is perpendicular to the radius OP. Use the perpendicular gradient and the point–gradient form.

**Worked example.** Find the tangent to x² + y² = 25 at (3, 4).

The gradient of the radius to (3, 4) is 4/3. The tangent is perpendicular, so its gradient is −3/4. Equation: y − 4 = −(3/4)(x − 3), so y = −(3/4)x + 9/4 + 4 = −(3/4)x + 25/4.

#### Parametric equations

Parametric equations express x and y both as functions of a third variable t. The parameter is usually a length, an angle, or simply a free variable. To convert back to a Cartesian equation in x and y only, eliminate t using algebra.

**Worked example.** A curve is given by x = 2t, y = t² − 1. Find the Cartesian equation.

From x = 2t, t = x/2. Substitute: y = (x/2)² − 1 = x²/4 − 1. So y = x²/4 − 1.

**Worked example — parametric circle.** A particle moves on x = 3 cos t, y = 3 sin t for t in [0, 2π]. Sketch the locus.

x² + y² = 9 cos²t + 9 sin²t = 9 (cos²t + sin²t) = 9. So x² + y² = 9 — a circle of radius 3 centred at the origin. As t increases from 0, the particle starts at (3, 0) and moves counter-clockwise (since sin t > 0 for t ∈ (0, π)).

**Parametric differentiation** — useful at A-level Further Mathematics but also in core A-level calculus questions involving differentiation of trigonometric expressions — comes from d/dx f(t) = (dy/dt)/(dx/dt). At A-level, the most common use is finding the gradient of a parametric curve at a given t.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Worked pattern — intersection of a line and a circle

A common 6-mark question asks for the intersection of a line and a circle and the chord length. The method:

1. Write the circle in expanded form and the line as y = mx + c (or solve for x first).
2. Substitute the line into the circle to get a quadratic in x.
3. Solve the quadratic; the roots are the x-coordinates of the intersection points.
4. Substitute each x into the line to get the corresponding y.
5. The chord length is √((x₂ − x₁)² + (y₂ − y₁)²).

**Worked example.** Find the chord where y = x + 1 meets x² + y² = 25.

Substitute y = x + 1: x² + (x + 1)² = 25, so x² + x² + 2x + 1 = 25, 2x² + 2x − 24 = 0, x² + x − 12 = 0, (x + 4)(x − 3) = 0. So x = −4 or x = 3.

When x = −4, y = −3. When x = 3, y = 4. Points: (−4, −3) and (3, 4). Chord length = √((3 − (−4))² + (4 − (−3))²) = √(49 + 49) = 7√2.

#### Worked pattern — circle through three points

To find the circle through three non-collinear points, solve for a, b, r² in (x − a)² + (y − b)² = r². Substitute each point to get three equations in three unknowns. Solve the linear system (the centre coordinates appear linearly; r² can be found afterwards).

#### Common misconceptions (and the correction)

- "Parallel lines have perpendicular gradients." No — parallel lines have equal gradients. Perpendicular lines have gradients whose product is −1.
- "A circle equation x² + y² = 9 is the same as x + y = 3." The first is a circle of radius 3; the second is a straight line.
- "The radius of x² + y² + 6x − 4y + 9 = 0 is √(9 + 4 − 9) = √4 = 2." The correct radius is √((6/2)² + (4/2)² − 9) = √(9 + 4 − 9) = √4 = 2. The arithmetic was right but the formula was applied in the wrong sign — write the centre as (−D/2, −E/2), not (D/2, E/2).
- "Parametric equations are a different curve." They are the same curve; the parameter is just a way to describe position. Eliminating t recovers the Cartesian form.

#### Exam technique

- For tangent-to-circle questions, draw the radius to the point of tangency, write its gradient, then take the negative reciprocal. This avoids the algebra-of-differentiation route and gets full marks.
- For chord-length questions, find both intersection points before computing the distance; calculating the distance from a partial solution loses the second point's marks.
- For parametric-to-Cartesian questions, always state the domain of t in your final sketch — the parameter often restricts which part of the Cartesian curve is traced.

#### Specification reference

Section C of the AQA A-level Mathematics 7357 specification feeds into the parametric equations used in kinematics (sections P and Q) and the circle geometry that shows up on Paper 1. Confirm the live paper structure, formula booklet and any in-year specification changes on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-22. Source: AQA A-level Mathematics specification 7357, https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357. Paper structure, assessment weighting and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*