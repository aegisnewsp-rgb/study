---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-18
topicName: "Analytical Geometry: Lines and Conics"
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.073521"
diagramPrompt: "Mathematical diagram showing Analytical Geometry: Lines and Conics concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"

---

# "Analytical Geometry: Lines and Conics"

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT exam.

Analytical geometry (coordinate geometry) combines algebra and geometry — equations represent geometric shapes, and geometric concepts solve algebraic problems.

**Equation of a Straight Line:**

| Form | Equation | Use |
|---|---|---|
| Slope-intercept | $y = mx + c$ | $m$ = slope, $c$ = y-intercept |
| Point-slope | $y - y_1 = m(x - x_1)$ | Through $(x_1, y_1)$ with slope $m$ |
| Two-point | $y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1)$ | Through $(x_1,y_1)$ and $(x_2,y_2)$ |
| Intercept form | $\frac{x}{a} + \frac{y}{b} = 1$ | x-intercept $a$, y-intercept $b$ |
| General form | $Ax + By + C = 0$ | General form, $A^2 + B^2 \neq 0$ |

**Key Relationships:**
- Slope $m = \tan \theta = \frac{y_2 - y_1}{x_2 - x_1}$
- Angle between two lines: $\tan \theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|$
- Perpendicular: $m_1 m_2 = -1$
- Parallel: $m_1 = m_2$
- Distance from point $(x_1,y_1)$ to line $Ax + By + C = 0$: $d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}$

**⚡ ECAT exam tips:**
- For a line making equal intercepts on axes: $x + y = a$ (not $x + y = c$ with different coefficients)
- For a line passing through origin: $C = 0$
- For a line parallel to $x$-axis: $y = c$ (slope = 0)
- For a line parallel to $y$-axis: $x = c$ (slope undefined)

---

### 🟡 Standard — Regular Study (2d–2mo)
> For ECAT students who want genuine understanding of coordinate geometry.

**Conic Sections — The Four Curves:**

Conic sections are curves obtained by intersecting a plane with a double cone. The four standard conics:

**1. Parabola:** $y^2 = 4ax$ (opens right), $x^2 = 4ay$ (opens up)
- Focus: $(a, 0)$, Directrix: $x = -a$
- Focal parameter (latus rectum): $4a$
- Any point $(at^2, 2at)$; parametric form

**2. Circle:** $(x-h)^2 + (y-k)^2 = r^2$
- Centre $(h,k)$, radius $r$
- General form: $x^2 + y^2 + 2gx + 2fy + c = 0$ → centre $(-g,-f)$, radius $\sqrt{g^2 + f^2 - c}$

**3. Ellipse:** $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ (major axis horizontal if $a > b$)
- Foci: $(\pm c, 0)$ where $c^2 = a^2 - b^2$
- Eccentricity: $e = c/a$ (always $e < 1$)
- Latus rectum: $2b^2/a$

**4. Hyperbola:** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ (opens left-right)
- Foci: $(\pm c, 0)$ where $c^2 = a^2 + b^2$
- Eccentricity: $e = c/a$ (always $e > 1$)
- Asymptotes: $y = \pm \frac{b}{a}x$

**Standard Results for Circles:**

- Equation of tangent to circle $x^2 + y^2 = a^2$ at $(x_1, y_1)$: $xx_1 + yy_1 = a^2$
- Length of tangent from external point $(x_1,y_1)$ to $x^2 + y^2 = a^2$: $\sqrt{x_1^2 + y_1^2 - a^2}$
- Condition for $y = mx + c$ to be tangent to $x^2 + y^2 = a^2$: $c^2 = a^2(1 + m^2)$

**Standard Results for Parabola $y^2 = 4ax$:**
- Tangent at $(at_1^2, 2at_1)$: $ty_1 = x + at_1^2$ → $ty = x + at^2$
- Condition for $y = mx + c$ to be tangent: $c = a/m$
- Point of intersection of tangents at $t_1$ and $t_2$: $(at_1 t_2, a(t_1 + t_2))$

**⚡ Common student mistakes:**
1. Forgetting that the general form of a circle $x^2 + y^2 + 2gx + 2fy + c = 0$ has centre $(-g, -f)$, not $(g, f)$
2. Confusing $a^2 - b^2$ (ellipse: $c^2 = a^2 - b^2$) with $a^2 + b^2$ (hyperbola: $c^2 = a^2 + b^2$)
3. For parabola $y^2 = 4ax$: the focus is at $(a, 0)$ — not at $(0, a)$
4. Using the wrong formula for distance from point to line — must be absolute value

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for ECAT mastery of analytical geometry.

**Transformation of Axes:**

- Shift of origin (without rotation): $x = X + h$, $y = Y + k$
- Rotation of axes by angle $\theta$: $x = X \cos\theta - Y \sin\theta$, $y = X \sin\theta + Y \cos\theta$

When axes are rotated by $\theta$ to eliminate the $xy$ term in $Ax^2 + Bxy + Cy^2 + ... = 0$:
$$\tan 2\theta = \frac{B}{A - C}$$

**Pair of Straight Lines:**

The homogeneous equation $ax^2 + 2hxy + by^2 = 0$ represents two straight lines through the origin. The lines are real and distinct if $h^2 > ab$, coincident if $h^2 = ab$, and imaginary if $h^2 < ab$.

The angle between them: $\tan \theta = \frac{2\sqrt{h^2 - ab}}{a + b}$.

For non-homogeneous pair $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$, the lines pass through the point of intersection of $ax^2 + 2hxy + by^2 = 0$ and $gx + fy + c = 0$.

**Joint Equation of Two Lines:**

The pair of lines joining the origin to the intersection points of two curves $S = 0$ and $S' = 0$ is given by $S + \lambda S' = 0$ (homogeneous case) or more generally by the eliminant.

**Important Formulae for Lines:**
- Perpendicular distance between two parallel lines $y = mx + c_1$ and $y = mx + c_2$: $d = \frac{|c_2 - c_1|}{\sqrt{1+m^2}}$
- Area of triangle with vertices $(x_1,y_1), (x_2,y_2), (x_3,y_3)$: $\Delta = \frac{1}{2}|x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)|$
- Coordinates of centroid: $\left(\frac{x_1+x_2+x_3}{3}, \frac{y_1+y_2+y_3}{3}\right)$
- Coordinates of midpoint of $(x_1,y_1)$ and $(x_2,y_2)$: $\left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$

**Ellipse — Detailed Properties:**

Parametric form: $x = a \cos\theta$, $y = b \sin\theta$.
Equation of tangent at $(x_1,y_1)$ on $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$: $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$.
The sum of distances from any point on the ellipse to the two foci is constant = $2a$.

**Hyperbola — Detailed Properties:**

Rectangular hyperbola: $xy = c^2$ or equivalently $x^2 - y^2 = a^2$ rotated by $45°$.
Asymptotes of standard hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$: $y = \pm \frac{b}{a}x$.
The difference of distances from any point on the hyperbola to the two foci is constant = $2a$.

**Locus Problems:**

A locus is the set of all points satisfying a given condition.

**Example:** Find the locus of a point $P$ such that its distances from $(1,2)$ and $(-1,3)$ are equal.
$\sqrt{(x-1)^2 + (y-2)^2} = \sqrt{(x+1)^2 + (y-3)^2}$
Squaring and simplifying: $x^2 - 2x + 1 + y^2 - 4y + 4 = x^2 + 2x + 1 + y^2 - 6y + 9$
Cancelling $x^2 + y^2 + 1$: $-2x - 4y + 4 = 2x - 6y + 9$
$-4x + 2y - 5 = 0$ or $4x - 2y + 5 = 0$ — a straight line.

**ECAT Previous Year Patterns:**
- Equation of line and conditions: very common
- Distance from point to line: calculation-based, common
- Circle equations and tangents: very common
- Parabola tangents: common
- Locus problems: periodically tested
- Angle between lines: occasional

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
