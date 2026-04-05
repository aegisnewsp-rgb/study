---
exam: waec
examName: WAEC WASSCE
subject: mathematics
subjectName: Mathematics
topic: math-12
topicName: Coordinate Geometry
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.622978"
diagramPrompt: Mathematical diagram showing Coordinate Geometry concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style
---

# Coordinate Geometry

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Coordinate geometry** uses algebraic equations to describe geometric shapes on the Cartesian plane. The plane is divided by two perpendicular axes: the **x-axis** (horizontal) and **y-axis** (vertical).

**Key Formulas:**

**Distance between two points** $A(x_1, y_1)$ and $B(x_2, y_2)$:
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**Midpoint of AB**:
$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$

**Gradient (slope) of line AB**:
$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\text{rise}}{\text{run}}$$

**Equation of a straight line:**
$$y - y_1 = m(x - x_1)$$
Or: $y = mx + c$ where $m$ = gradient, $c$ = y-intercept

**Parallel lines**: $m_1 = m_2$
**Perpendicular lines**: $m_1 \times m_2 = -1$

⚡ **WAEC Tip:** When the gradient is positive, the line slopes upward from left to right. When negative, it slopes downward. A horizontal line has gradient 0; a vertical line has undefined gradient.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Finding Equations of Lines:**

*Problem 1*: Find the equation of the line through (2, 5) with gradient 3.
$$y - 5 = 3(x - 2)$$
$$y - 5 = 3x - 6$$
$$y = 3x - 1$$

*Problem 2*: Find the equation of the line through (1, 3) and (4, 11).
$$m = \frac{11 - 3}{4 - 1} = \frac{8}{3}$$
$$y - 3 = \frac{8}{3}(x - 1)$$
$$3y - 9 = 8x - 8$$
$$8x - 3y + 1 = 0$$

*Problem 3*: Find the equation of the line with gradient -2 that passes through (-1, 4).
$$y - 4 = -2(x + 1)$$
$$y - 4 = -2x - 2$$
$$y = -2x + 2$$

**Distance from a Point to a Line:**

The perpendicular distance $d$ from point $P(x_0, y_0)$ to line $ax + by + c = 0$:
$$d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$$

*Problem*: Find the distance from (3, 2) to line $4x - 3y + 5 = 0$.
$$d = \frac{|4(3) - 3(2) + 5|}{\sqrt{16 + 9}} = \frac{|12 - 6 + 5|}{\sqrt{25}} = \frac{|11|}{5} = \frac{11}{5} = 2.2$$

**Angle Between Two Lines:**

If $m_1$ and $m_2$ are gradients:
$$\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|$$

*Problem*: Find the acute angle between $y = 2x + 1$ and $y = -3x + 4$.
$$m_1 = 2, m_2 = -3$$
$$\tan\theta = \left|\frac{2 - (-3)}{1 + 2(-3)}\right| = \left|\frac{5}{1 - 6}\right| = \left|\frac{5}{-5}\right| = 1$$
$$\theta = 45°$$

**Intersection of Two Lines:**

Solve the simultaneous equations.

*Problem*: Find where $y = 2x + 3$ and $y = -x + 5$ intersect.
$$2x + 3 = -x + 5$$
$$3x = 2$$
$$x = \frac{2}{3}$$
$$y = 2\left(\frac{2}{3}\right) + 3 = \frac{4}{3} + 3 = \frac{13}{3}$$

Intersection point: $\left(\frac{2}{3}, \frac{13}{3}\right)$

⚡ **Common Student Mistakes:** Forgetting the absolute value signs when calculating distance (the formula always gives positive distance). Using the wrong sign when substituting into $y - y_1 = m(x - x_1)$. Confusing the formulas for midpoint and gradient.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough preparation.

**Coordinate Geometry of Circles:**

**Equation of a circle with centre $(h, k)$ and radius $r$:
$$(x - h)^2 + (y - k)^2 = r^2$$

*Problem*: Find the equation of a circle with centre (3, -2) and radius 5.
$$(x - 3)^2 + (y + 2)^2 = 25$$
$$x^2 - 6x + 9 + y^2 + 4y + 4 = 25$$
$$x^2 + y^2 - 6x + 4y - 12 = 0$$

**General equation of a circle:**
$$x^2 + y^2 + 2gx + 2fy + c = 0$$
Centre = $(-g, -f)$
Radius = $\sqrt{g^2 + f^2 - c}$

*Problem*: Find centre and radius of $x^2 + y^2 - 4x + 6y - 3 = 0$.
$$g = -2, f = 3, c = -3$$
Centre = $(2, -3)$
Radius = $\sqrt{(-2)^2 + (3)^2 - (-3)} = \sqrt{4 + 9 + 3} = \sqrt{16} = 4$

**Intersection of Line and Circle:**

*Problem*: Find where the line $y = x + 2$ intersects the circle $(x-1)^2 + (y-1)^2 = 9$.

Substitute: $(x-1)^2 + (x+2-1)^2 = 9$
$$(x-1)^2 + (x+1)^2 = 9$$
$$x^2 - 2x + 1 + x^2 + 2x + 1 = 9$$
$$2x^2 + 2 = 9$$
$$2x^2 = 7$$
$$x = \pm\sqrt{\frac{7}{2}}$$

Points: $(\sqrt{7/2}, \sqrt{7/2} + 2)$ and $(-\sqrt{7/2}, -\sqrt{7/2} + 2)$

**Equation of a Tangent to a Circle:**

For circle $(x-h)^2 + (y-k)^2 = r^2$, the tangent at point $(x_1, y_1)$ on the circle:
$$(x_1 - h)(x - h) + (y_1 - k)(y - k) = r^2$$

*Problem*: Find the tangent to $(x-2)^2 + (y-1)^2 = 10$ at point (5, 2).
$$(5-2)(x-2) + (2-1)(y-1) = 10$$
$$3(x-2) + 1(y-1) = 10$$
$$3x - 6 + y - 1 = 10$$
$$3x + y - 17 = 0$$

**Area of a Triangle from Coordinates:**

For vertices $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$:
$$A = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$

*Problem*: Find area of triangle with vertices (1, 2), (4, 5), (6, 3).
$$A = \frac{1}{2}|1(5-3) + 4(3-2) + 6(2-5)|$$
$$A = \frac{1}{2}|2 + 4 - 18| = \frac{1}{2}|-12| = 6 \text{ square units}$$

**Locus Problems:**

The locus of a point is the set of all positions it can occupy.

*Problem*: Find the locus of points equidistant from (2, 3) and (6, 7).
By section formula, the midpoint of these points is the locus of equidistant points.
$$\left(\frac{2+6}{2}, \frac{3+7}{2}\right) = (4, 5)$$
The locus is the perpendicular bisector of the segment joining the two points.

**Ratio Formula (Section Formula):**

For point $P$ dividing $AB$ in ratio $m:n$:
$$P = \left(\frac{n x_1 + m x_2}{m+n}, \frac{n y_1 + m y_2}{m+n}\right)$$

For internal division: $m:n$
For external division: $m:-n$

*Problem*: Find point dividing (2, 3) and (10, 11) in ratio 3:1.
$$P = \left(\frac{1 \times 2 + 3 \times 10}{4}, \frac{1 \times 3 + 3 \times 11}{4}\right) = \left(\frac{32}{4}, \frac{36}{4}\right) = (8, 9)$$

**Transformation Geometry:**

**Translation**: $(x, y) \rightarrow (x+a, y+b)$
**Reflection**: 
- In x-axis: $(x, y) \rightarrow (x, -y)$
- In y-axis: $(x, y) \rightarrow (-x, y)$
- In line $y = x$: $(x, y) \rightarrow (y, x)$

**Rotation by 90° counterclockwise**:
$$(x, y) \rightarrow (-y, x)$$

**Stretch**:
- Parallel to x-axis by factor $k$: $(x, y) \rightarrow (kx, y)$
- Parallel to y-axis by factor $k$: $(x, y) \rightarrow (x, ky)$

**Simple Harmonic Motion:**

$x = a \sin(\omega t + \alpha)$ or $x = a \cos(\omega t + \alpha)$
Where:
- $a$ = amplitude
- $\omega$ = angular frequency
- $\alpha$ = phase angle

*Problem*: A particle moves so that its displacement $x$ cm is given by $x = 3 \sin(2t)$. Find amplitude and period.
- Amplitude = 3 cm
- Period = $\frac{2\pi}{\omega} = \frac{2\pi}{2} = \pi$ seconds

**Parabola:**

Standard form: $y^2 = 4ax$
- Vertex: (0, 0)
- Focus: $(a, 0)$
- Directrix: $x = -a$

*Problem*: Find focus and directrix of $y^2 = 12x$.
$4a = 12 \Rightarrow a = 3$
Focus: $(3, 0)$
Directrix: $x = -3$

**Ellipse:**

Standard form: $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ (horizontal major axis if $a > b$)

*Problem*: Find eccentricity of ellipse $\frac{x^2}{25} + \frac{y^2}{16} = 1$.
$a^2 = 25, b^2 = 16$
$c^2 = a^2 - b^2 = 25 - 16 = 9$
$c = 3$
$e = \frac{c}{a} = \frac{3}{5} = 0.6$

⚡ **WAEC Examination Patterns:** Find distance, midpoint, and gradient. Write equations of lines in various forms. Find where lines intersect. Calculate distance from point to line. Find area of triangles and quadrilaterals using coordinates. Work with circles (centre, radius, tangents). Use section formula.
