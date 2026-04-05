---



exam: nda
examName: NDA
subject: mathematics
subjectName: Mathematics
topic: math-005
topicName: Analytical Geometry
weight: 5
country: india
generated: "2026-03-24T08:32:07.807229"
diagramPrompt: Mathematical diagram showing Analytical Geometry concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Analytical Geometry

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Analytical Geometry, also known as Coordinate Geometry or Cartesian Geometry, establishes a fundamental connection between algebraic equations and geometric shapes by placing them on the Cartesian plane. The Cartesian plane consists of two perpendicular axes — the x-axis (horizontal) and the y-axis (vertical) — that intersect at the origin (0, 0). Every point in the plane is represented as an ordered pair (x, y), where x is the abscissa (horizontal distance from origin) and y is the ordinate (vertical distance from origin).

**Essential Formulas for NDA:**

The distance between two points $(x_1, y_1)$ and $(x_2, y_2)$ is given by:
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

The section formula for internal division of a line joining $(x_1, y_1)$ and $(x_2, y_2)$ in the ratio $m:n$:
$$\left( \frac{mx_2 + nx_1}{m+n}, \frac{my_2 + ny_1}{m+n} \right)$$

For external division, the ratio becomes $(m-n)$ in the denominator with sign change for the second point.

The slope of a line joining $(x_1, y_1)$ and $(x_2, y_2)$:
$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

**Key Facts:**
- Slope of x-axis = 0; slope of y-axis = undefined (infinite)
- Equation of x-axis: $y = 0$; equation of y-axis: $x = 0$
- Distance from origin to point $(x, y)$: $d = \sqrt{x^2 + y^2}$
- Midpoint formula: $\left( \frac{x_1+x_2}{2}, \frac{y_1+y_2}{2} \right)$

⚡ **Exam Tip:** In NDA Paper II (Mathematics), expect 2-3 questions from Analytical Geometry. Remember that the area of a triangle with vertices $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$ is:
$$\text{Area} = \frac{1}{2}|x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)|$$
Use this formula when coordinates of vertices are given — it saves time compared to Heron's formula approach. Also, the centroid divides the median in 2:1 ratio, measured from the vertex.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding and problem-solving practice.

**Equation of a Straight Line:**

The general form of a straight line is $ax + by + c = 0$, where $a$, $b$, $c$ are constants.

Forms you must know:
1. **Slope-intercept form:** $y = mx + c$ (m = slope, c = y-intercept)
2. **Point-slope form:** $y - y_1 = m(x - x_1)$
3. **Two-point form:** $y - y_1 = \frac{y_2-y_1}{x_2-x_1}(x - x_1)$
4. **Intercept form:** $\frac{x}{a} + \frac{y}{b} = 1$ (a = x-intercept, b = y-intercept)
5. **Normal form:** $x \cos \alpha + y \sin \alpha = p$

**Angle Between Two Lines:**
If slopes are $m_1$ and $m_2$:
$$\tan \theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|$$

Parallel lines: $m_1 = m_2$; Perpendicular lines: $m_1 m_2 = -1$

**Distance of a Point from a Line:**
For line $ax + by + c = 0$ and point $(x_1, y_1)$:
$$d = \left|\frac{ax_1 + by_1 + c}{\sqrt{a^2 + b^2}}\right|$$

**Pair of Straight Lines:**
The combined equation $ax^2 + 2hxy + by^2 = 0$ represents two lines through the origin. The angle $\theta$ between them satisfies:
$$\tan \theta = \frac{2\sqrt{h^2-ab}}{a+b}$$

**Common Student Mistakes:**
- Forgetting the absolute value signs when calculating area or distance
- Applying wrong sign convention for intercepts
- Confusing internal and external section formulas

⚡ **NDA-Specific Tip:** Paper II often tests your understanding of locus problems. Remember: a locus is the set of all points satisfying a given condition. For example, "locus of points equidistant from (2, 0) and (-2, 0)" is the y-axis ($x = 0$). Convert locus conditions into algebraic equations.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory with derivations and exam pattern analysis.

**Circle:**

Standard equation of a circle with centre $(h, k)$ and radius $r$:
$$(x - h)^2 + (y - k)^2 = r^2$$

With centre at origin: $x^2 + y^2 = r^2$

General equation: $x^2 + y^2 + 2gx + 2fy + c = 0$ with centre $(-g, -f)$ and radius $\sqrt{g^2 + f^2 - c}$

**Equation of a Circle through Three Points:**
For points $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$, use the determinant form or solve the system of equations from the general circle form.

**Conic Sections:**

Parabola: $y^2 = 4ax$ (vertex at origin, focus at $(a, 0)$)
Ellipse: $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ (eccentricity $e < 1$)
Hyperbola: $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ (eccentricity $e > 1$)

**Standard Results for NCERT and NDA Preparation:**
- Directrix of parabola $y^2 = 4ax$: $x = -a$
- Latus rectum length for all conics = $4a$ (for parabola), $2b^2/a$ (ellipse), $2b^2/a$ (hyperbola)
- For ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$: focus at $(\pm ae, 0)$ where $e = \sqrt{1 - b^2/a^2}$
- For hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$: focus at $(\pm ae, 0)$ where $e = \sqrt{1 + b^2/a^2}$

**Previous Year NDA Patterns (2018-2024):**
- 2019: Distance formula combined with area of triangle (4 marks)
- 2020: Equation of circle through origin with diameter endpoints (4 marks)
- 2022: Angle between pair of lines using perpendicular form (3 marks)
- 2023: Locus problem with condition of equal distances (4 marks)

**Problem-Solving Strategies:**
1. Draw the figure first — even a rough sketch helps identify relationships
2. Use symmetry wherever possible
3. For locus problems, express the condition algebraically and simplify
4. When finding angle between lines, ensure slopes are correctly calculated

⚡ **Advanced Tip:** For combined problems involving reflections, remember that the image of point $(x_1, y_1)$ in line $ax + by + c = 0$ is given by the formula. But for exam efficiency, use the method: find perpendicular from point to line, double the foot's coordinates. This saves formula memorisation and reduces errors.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
