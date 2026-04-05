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
diagramPrompt: "Mathematical diagram showing Straight Line and Coordinate Geometry concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"

---

# Straight Line and Coordinate Geometry

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT exam.

The straight line is the simplest curve in analytical geometry. Every straight line in the plane can be represented by a linear equation.

**All Forms of the Straight Line:**

1. **Slope-intercept form**: $y = mx + c$
   - $m$ = slope (gradient) = $\tan\theta$ where $\theta$ is the angle with positive $x$-axis
   - $c$ = $y$-intercept (where the line crosses the $y$-axis, i.e., when $x = 0$)

2. **Point-slope form**: $y - y_1 = m(x - x_1)$
   - Line with slope $m$ passing through $(x_1, y_1)$

3. **Two-point form**: $\frac{y - y_1}{y_2 - y_1} = \frac{x - x_1}{x_2 - x_1}$
   - Line passing through $(x_1, y_1)$ and $(x_2, y_2)$

4. **Intercept form**: $\frac{x}{a} + \frac{y}{b} = 1$
   - Line with $x$-intercept $a$ and $y$-intercept $b$

5. **Normal (perpendicular) form**: $x \cos\alpha + y \sin\alpha = p$
   - Perpendicular distance from origin to line = $p$, and the perpendicular makes angle $\alpha$ with positive $x$-axis

6. **General form**: $Ax + By + C = 0$ where $A, B, C$ are constants

**Slope from any two points $(x_1,y_1)$ and $(x_2,y_2)$:**
$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

**Equation of axes:**
- $x$-axis: $y = 0$
- $y$-axis: $x = 0$

**⚡ ECAT exam tips:**
- $m = 0$: horizontal line (parallel to $x$-axis): $y = c$
- $m$ undefined: vertical line (parallel to $y$-axis): $x = c$
- Parallel lines have equal slopes: $m_1 = m_2$
- Perpendicular lines: $m_1 \cdot m_2 = -1$
- For angle between two lines: $\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|$

---

### 🟡 Standard — Regular Study (2d–2mo)
> For ECAT students who want genuine understanding of coordinate geometry.

**Distance Formula:**

Distance between $(x_1,y_1)$ and $(x_2,y_2)$:
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**Section Formula:**

A point dividing the line segment joining $(x_1,y_1)$ and $(x_2,y_2)$:
- Internally in ratio $m:n$: $\left(\frac{mx_2 + nx_1}{m+n}, \frac{my_2 + ny_1}{m+n}\right)$
- Externally in ratio $m:n$: $\left(\frac{mx_2 - nx_1}{m-n}, \frac{my_2 - ny_1}{m-n}\right)$
- Midpoint (when $m = n$): $\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$

**Example:** Point $(10, 15)$ divides the line joining $(2, 3)$ and $(6, 9)$ in what ratio?
Let the ratio be $m:n$. $\frac{m \cdot 6 + n \cdot 2}{m+n} = 10$. $6m + 2n = 10m + 10n$. $4m + 8n = 0$. So $m:n = 2:(-1)$ — meaning the point divides externally in ratio 2:1.

**Area of Triangle:**

For vertices $(x_1,y_1), (x_2,y_2), (x_3,y_3)$:
$$\Delta = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$

**Angle Bisectors:**

The angle bisector of the angle between lines $a_1x + b_1y + c_1 = 0$ and $a_2x + b_2y + c_2 = 0$:
$$\frac{a_1x + b_1y + c_1}{\sqrt{a_1^2 + b_1^2}} = \pm \frac{a_2x + b_2y + c_2}{\sqrt{a_2^2 + b_2^2}}$$
- The $+$ sign gives the internal bisector
- The $-$ sign gives the external bisector

**Foot of Perpendicular from a Point to a Line:**

For point $(x_1,y_1)$ and line $ax + by + c = 0$:
The foot $(x_0, y_0)$ satisfies:
$$x_0 = x_1 - a \cdot \frac{ax_1 + by_1 + c}{a^2 + b^2}$$
$$y_0 = y_1 - b \cdot \frac{ax_1 + by_1 + c}{a^2 + b^2}$$

**⚡ Common student mistakes:**
1. Forgetting absolute value in area formula — area is always non-negative
2. Getting the internal/external section formula mixed up
3. Using wrong sign in perpendicular slope condition: $m_1 m_2 = -1$, not $+1$
4. Confusion between the two angle bisector equations — test with a known point

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for ECAT mastery of straight line geometry.

**Collinearity Condition:**

Three points $(x_1,y_1), (x_2,y_2), (x_3,y_3)$ are collinear if the area of the triangle formed is zero:
$$x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) = 0$$
Equivalently: $\frac{y_2 - y_1}{x_2 - x_1} = \frac{y_3 - y_1}{x_3 - x_1}$ (slopes equal)

**Concurrence of Lines:**

Three lines $a_1x + b_1y + c_1 = 0$, $a_2x + b_2y + c_2 = 0$, $a_3x + b_3y + c_3 = 0$ are concurrent if:
$$\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = 0$$

This determinant condition means there exists a single point common to all three lines.

**Reflection of a Point across a Line:**

The reflection of point $P(x_1,y_1)$ across the line $ax + by + c = 0$ is $P'(x', y')$ where:
$$x' = x_1 - 2a \cdot \frac{ax_1 + by_1 + c}{a^2 + b^2}$$
$$y' = y_1 - 2b \cdot \frac{ax_1 + by_1 + c}{a^2 + b^2}$$

**Straight Line as a Locus:**

A locus is a set of points satisfying a geometric condition. For example, the locus of points equidistant from $(1,2)$ and $(3,4)$:
$$\sqrt{(x-1)^2 + (y-2)^2} = \sqrt{(x-3)^2 + (y-4)^2}$$
Squaring: $x^2 - 2x + 1 + y^2 - 4y + 4 = x^2 - 6x + 9 + y^2 - 8y + 16$
Simplifying: $-2x - 4y + 5 = -6x - 8y + 25$
$4x + 4y = 20$ → $x + y = 5$ — a straight line (the perpendicular bisector of the segment joining the two points).

**Transformation of General to Normal Form:**

From $Ax + By + C = 0$, divide by $\sqrt{A^2 + B^2}$:
$$\frac{A}{\sqrt{A^2+B^2}}x + \frac{B}{\sqrt{A^2+B^2}}y = -\frac{C}{\sqrt{A^2+B^2}}$$

Comparing with $x\cos\alpha + y\sin\alpha = p$:
$$\cos\alpha = \frac{A}{\sqrt{A^2+B^2}}, \quad \sin\alpha = \frac{B}{\sqrt{A^2+B^2}}, \quad p = -\frac{C}{\sqrt{A^2+B^2}}$$

**Worked Example — Finding the Circumcentre:**

Find the circumcentre of the triangle with vertices $(2,1)$, $(4,3)$, $(6,1)$.

The circumcentre is the intersection of perpendicular bisectors of any two sides.

Side $AB$ (from $(2,1)$ to $(4,3)$): midpoint = $(3,2)$. Slope of $AB = (3-1)/(4-2) = 1$. Perpendicular slope = $-1$.
Equation: $y - 2 = -1(x - 3)$ → $x + y = 5$.

Side $BC$ (from $(4,3)$ to $(6,1)$): midpoint = $(5,2)$. Slope of $BC = (1-3)/(6-4) = -1$. Perpendicular slope = $1$.
Equation: $y - 2 = 1(x - 5)$ → $x - y = 3$.

Solving $x + y = 5$ and $x - y = 3$: adding gives $2x = 8$, so $x = 4$. Then $y = 1$.
Circumcentre = $(4, 1)$.

**ECAT Previous Year Patterns:**
- Distance formula: very common
- Section formula: very common
- Equation of line: common
- Angle between lines: common
- Area of triangle: common
- Collinearity: periodic

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
