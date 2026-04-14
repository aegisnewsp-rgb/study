---
exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-025
topicName: Straight Lines
weight: 4
country: india
generated: "2026-03-24T08:32:07.946046"
diagramPrompt: "Mathematical diagram showing Straight Lines concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"

---

# Straight Lines

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Forms of a Straight Line:**

| Form | Equation | Use |
|---|---|---|
| Slope-intercept | $y = mx + c$ | $m$ = slope, $c$ = y-intercept |
| Point-slope | $y - y_1 = m(x - x_1)$ | Line with slope $m$ through $(x_1, y_1)$ |
| Two-point | $y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1)$ | Line through $(x_1,y_1)$ and $(x_2,y_2)$ |
| Intercept form | $\frac{x}{a} + \frac{y}{b} = 1$ | $a$-intercept and $b$-intercept |
| Normal form | $x\cos\alpha + y\sin\alpha = p$ | $\alpha$ = angle with x-axis, $p$ = perpendicular distance from origin |
| General form | $Ax + By + C = 0$ | Most general; slope $= -A/B$ when $B \neq 0$ |

**Slope formula:** For points $P(x_1, y_1)$ and $Q(x_2, y_2)$, slope $m = \frac{y_2 - y_1}{x_2 - x_1}$.

**Angle between two lines:** $\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|$.

**Parallel:** $m_1 = m_2$. **Perpendicular:** $m_1 m_2 = -1$.

**Distance from point $(x_1, y_1)$ to line $Ax + By + C = 0$:**
$$d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}$$

**Distance between parallel lines $Ax + By + C_1 = 0$ and $Ax + By + C_2 = 0$:**
$$d = \frac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}$$

⚡ **Exam tip:** For locus problems, reduce the geometric condition to an algebraic equation by writing the coordinates of a variable point $(h, k)$ and substituting the condition.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding and problem-solving strategies.

**Understanding Slope Deeply**

The slope $m = \tan\theta$ where $\theta$ is the angle the line makes with the positive x-axis (measured anticlockwise). If $\theta = \frac{\pi}{2}$ (vertical line), slope is undefined.

Slope is positive for lines trending upward (left to right), negative for downward trending. Horizontal lines have slope 0.

**Conversion Between Forms:**

Convert $y = 2x + 3$ to normal form:
$p = \frac{|C|}{\sqrt{A^2+B^2}} = \frac{3}{\sqrt{5}}$ (with sign conventions for $\cos\alpha, \sin\alpha$).
Rewriting: $2x - y + 3 = 0$. For normal form $x\cos\alpha + y\sin\alpha = p$, we need $\cos\alpha = \frac{A}{\sqrt{A^2+B^2}} = \frac{2}{\sqrt{5}}$, $\sin\alpha = \frac{-1}{\sqrt{5}}$. This gives $\alpha$ in the fourth quadrant: $\alpha = -\cos^{-1}\frac{2}{\sqrt{5}}$ or $\alpha = 2\pi - \cos^{-1}\frac{2}{\sqrt{5}}$.

**Point of Division:**

For point $P(x, y)$ dividing $A(x_1, y_1)$ and $B(x_2, y_2)$ in ratio $m:n$ (internally):
$$x = \frac{mx_2 + nx_1}{m+n}, \quad y = \frac{my_2 + ny_1}{m+n}$$

For external division ($P$ outside segment $AB$, dividing externally in ratio $m:n$):
$$x = \frac{mx_2 - nx_1}{m-n}, \quad y = \frac{my_2 - ny_1}{m-n}$$

**Midpoint formula** (ratio $1:1$ internally): $(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2})$.

**Centroid of triangle** with vertices $(x_1, y_1), (x_2, y_2), (x_3, y_3)$:
$$G = \left(\frac{x_1+x_2+x_3}{3}, \frac{y_1+y_2+y_3}{3}\right)$$

**Incenter** (intersection of angle bisectors): $\left(\frac{ax_1+bx_2+cx_3}{a+b+c}, \frac{ay_1+by_2+cy_3}{a+b+c}\right)$ where $a, b, c$ are the side lengths opposite vertices $A, B, C$.

**Circumcenter** (intersection of perpendicular bisectors): Solve the perpendicular bisector equations of any two sides.

**Area of Triangle:**

For vertices $(x_1, y_1), (x_2, y_2), (x_3, y_3)$:
$$\text{Area} = \frac{1}{2}\left|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\right|$$

Collinearity condition: $x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) = 0$.

**Concurrency of Lines:**

Three lines $L_1 = 0$, $L_2 = 0$, $L_3 = 0$ are concurrent if $L_1 + \lambda L_2 = 0$ passes through the intersection point of $L_1 = 0$ and $L_2 = 0$ for some $\lambda$.

Equivalently, the determinant condition:
$$\begin{vmatrix} A_1 & B_1 & C_1 \\ A_2 & B_2 & C_2 \\ A_3 & B_3 & C_3 \end{vmatrix} = 0$$

**Family of Lines:**

- Through a fixed point $(x_1, y_1)$: $y - y_1 = m(x - x_1)$ (all lines through $(x_1, y_1)$ with varying slope $m$, plus the vertical line $x = x_1$).
- Through intersection of $L_1 = 0$ and $L_2 = 0$: $L_1 + \lambda L_2 = 0$.

**Shifting of Origin:**

If origin is shifted to $(h, k)$ (new axes are parallel to old), a point that was $(x, y)$ in old coordinates becomes $(X, Y) = (x-h, y-k)$ in new coordinates. All line equations transform by replacing $x = X + h$, $y = Y + k$.

**Locus Problems:**

**Example:** Find the locus of a point $P$ such that its distance from the line $3x + 4y - 12 = 0$ equals its distance from the point $(1, 2)$.

Let $P(h, k)$. Distance to line: $\frac{|3h+4k-12|}{\sqrt{9+16}} = \frac{|3h+4k-12|}{5}$. Distance to $(1,2)$: $\sqrt{(h-1)^2 + (k-2)^2}$.

Equating:
$$\frac{|3h+4k-12|}{5} = \sqrt{(h-1)^2 + (k-2)^2}$$

Squaring: $(3h+4k-12)^2 = 25[(h-1)^2 + (k-2)^2]$.

Expanding: $9h^2 + 24hk + 16k^2 - 72h - 96k + 144 = 25[h^2 - 2h + 1 + k^2 - 4k + 4]$.

$9h^2 + 24hk + 16k^2 - 72h - 96k + 144 = 25h^2 - 50h + 25 + 25k^2 - 100k + 100$.

$0 = 16h^2 - 24hk + 9k^2 + 22h - 4k - 19$.

This is a pair of straight lines through the origin (after shifting). Actually, completing the square, this is $16x^2 - 24xy + 9y^2 + 22x - 4y - 19 = 0$.

**JEE Advanced Worked Example:**

Find the equation of the line through $(2, 3)$ that cuts equal intercepts on the axes and passes through $(2, 3)$.

Let the line make intercepts $a$ and $a$ on x and y axes (equal intercepts). Equation: $\frac{x}{a} + \frac{y}{a} = 1$, or $x + y = a$. Since $(2,3)$ lies on it: $2 + 3 = a = 5$. Equation: $x + y = 5$.

**Angle bisector problem:** Find the equation of the angle bisectors of the lines $3x + 4y - 12 = 0$ and $12x + 5y - 3 = 0$.

The angle bisectors are given by:
$$\frac{3x+4y-12}{\sqrt{9+16}} = \pm \frac{12x+5y-3}{\sqrt{144+25}}$$

$$\frac{3x+4y-12}{5} = \pm \frac{12x+5y-3}{13}$$

Taking $+$: $39x + 52y - 156 = 60x + 25y - 15 \Rightarrow 21x - 27y + 141 = 0 \Rightarrow 7x - 9y + 47 = 0$.
Taking $-$: $39x + 52y - 156 = -60x - 25y + 15 \Rightarrow 99x + 77y - 171 = 0$.

The bisector of the acute angle and obtuse angle are distinguished by testing a point. At origin $(0,0)$: LHS of $L_1 = -12$, LHS of $L_2 = -3$. So the signs are $(-,-)$. The product $(-12)(-3) = 36 > 0$, so both have same sign at origin, meaning the origin is on the bisector of the angle containing the origin.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory, derivations, advanced problem types, and previous year patterns.

**Pair of Straight Lines Through Origin**

The homogeneous equation $ax^2 + 2hxy + by^2 = 0$ represents two straight lines through the origin. Their slopes $m_1, m_2$ satisfy:
$$am^2 + 2hm + b = 0 \quad \text{and} \quad m_1 + m_2 = -\frac{2h}{a}, \quad m_1 m_2 = \frac{b}{a}$$

The angle $\theta$ between them: $\tan\theta = \left|\frac{2\sqrt{h^2-ab}}{a+b}\right|$.

**Condition for perpendicular lines:** $a + b = 0$ (since $m_1 m_2 = -1 \Rightarrow \frac{b}{a} = -1 \Rightarrow b = -a$).

**Condition for coincident lines:** $h^2 = ab$.

**General Second-Degree Equation:** $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$.

This represents: (i) a pair of lines (if $\Delta = abc + 2fgh - af^2 - bg^2 - ch^2 = 0$ and the lines are real), (ii) a single line (degenerate case), (iii) a point (if it factors into two complex conjugate lines), or (iv) nothing (if imaginary).

The point of intersection of the pair of lines is found by solving $\frac{\partial f}{\partial x} = 0$ and $\frac{\partial f}{\partial y} = 0$:
$$ax + hy + g = 0, \quad hx + by + f = 0$$
$$x = \frac{hf - bg}{ab - h^2}, \quad y = \frac{gh - af}{ab - h^2}$$

**Rotation of Axes:**

When axes are rotated by angle $\theta$ (origin fixed), the transformation is:
$$x = X\cos\theta - Y\sin\theta, \quad y = X\sin\theta + Y\cos\theta$$

The general second-degree equation simplifies when $\cot 2\theta = \frac{a-b}{2h}$.

**Joint Equation of Angle Bisectors:**

For $L_1 = a_1x + b_1y + c_1 = 0$ and $L_2 = a_2x + b_2y + c_2 = 0$, the joint equation of angle bisectors is:
$$\frac{a_1x + b_1y + c_1}{\sqrt{a_1^2+b_1^2}} = \pm \frac{a_2x + b_2y + c_2}{\sqrt{a_2^2+b_2^2}}$$

**Orthocenter of a Triangle:**

For triangle with vertices $A(x_1, y_1), B(x_2, y_2), C(x_3, y_3)$:
- Equation of altitude from $A$: $y - y_1 = -\frac{x_2-x_3}{y_2-y_3}(x - x_1)$ (perpendicular to $BC$).
- Solve any two altitudes to find orthocenter $H$.

For specific triangles: In a right triangle, the orthocenter is the vertex of the right angle. In an equilateral triangle, orthocenter coincides with centroid and circumcenter.

**Reflection of a Point Across a Line:**

The reflection of $P(x_1, y_1)$ across the line $Ax + By + C = 0$ is $P'(x_2, y_2)$ where:
$$x_2 = x_1 - \frac{2A(Ax_1+By_1+C)}{A^2+B^2}, \quad y_2 = y_1 - \frac{2B(Ax_1+By_1+C)}{A^2+B^2}$$

**Example:** Reflection of $(3, 4)$ across $x + y - 1 = 0$.

$Ax_1+By_1+C = 3+4-1 = 6$. $A^2+B^2 = 1+1 = 2$.
$x_2 = 3 - \frac{2(1)(6)}{2} = 3 - 6 = -3$. $y_2 = 4 - \frac{2(1)(6)}{2} = 4 - 6 = -2$.
Reflection is $(-3, -2)$. Check: midpoint $(0, 1)$ lies on $x+y-1=0$. And line joining $(3,4)$ and $(-3,-2)$ has slope $\frac{6}{6} = 1$, which is perpendicular to line $x+y-1=0$ (slope $-1$). ✓

**Distance from a Point to a Line — Vector Proof:**

The perpendicular distance from $P(x_1, y_1)$ to line $Ax + By + C = 0$ can be derived using the projection formula. The unit normal vector is $\hat{n} = \frac{A\hat{i} + B\hat{j}}{\sqrt{A^2+B^2}}$. The signed distance is $(Ax_1+By_1+C)/\sqrt{A^2+B^2}$, and the absolute distance is as given.

**Advanced Locus Problem:**

**Problem:** A point $P$ moves such that the sum of squares of its distances from the lines $x = 0$, $y = 0$, and $x + y = 2$ equals 6. Find the locus.

Let $P(h, k)$. Distance to $x=0$: $|h|$. To $y=0$: $|k|$. To $x+y=2$: $\frac{|h+k-2|}{\sqrt{2}}$.

Sum of squares: $h^2 + k^2 + \frac{(h+k-2)^2}{2} = 6$.

$2h^2 + 2k^2 + (h+k-2)^2 = 12$.
$2h^2 + 2k^2 + h^2 + k^2 + 2hk - 4h - 4k + 4 = 12$.
$3h^2 + 3k^2 + 2hk - 4h - 4k - 8 = 0$.

This is an ellipse (or circle depending on coefficients). Dividing by common factors where applicable.

**JEE Advanced Previous Year Patterns:**

| Topic | Frequency (2015–2024) |
|---|---|
| Locus problems | 1–2 questions per paper |
| Angle between lines | 1 question per 2 years |
| Family of lines through intersection | 1 question per 2 years |
| Area of triangle from coordinates | 1 question per 3 years |
| Distance from point to line | 1 question per 2 years |
| Pair of straight lines | 1 question every 3 years |
| Centroid/orthocenter/circumcenter | 1 question per 3 years |

**JEE 2018 Worked Example:** Find the equation of the line that is parallel to $3x - 4y + 5 = 0$ and at a distance of 2 units from it.

The parallel line has the form $3x - 4y + C = 0$. Distance between them:
$$2 = \frac{|C - 5|}{\sqrt{9+16}} = \frac{|C-5|}{5}$$

$|C-5| = 10 \Rightarrow C - 5 = \pm 10 \Rightarrow C = 15$ or $C = -5$.

So lines: $3x - 4y + 15 = 0$ and $3x - 4y - 5 = 0$ (which is the original line).

**Shift of Origin for Simplifying Equations:**

The equation $x^2 + 2y^2 + 4xy + 2x + 4y + 1 = 0$ can be simplified by completing squares after shifting origin to the center (point of intersection of asymptotes/conjugate diameters). Find the center by solving $\frac{\partial f}{\partial x} = 0, \frac{\partial f}{\partial y} = 0$:
$2x + 4y + 2 = 0 \Rightarrow x + 2y + 1 = 0$.
$4y + 4x + 4 = 0 \Rightarrow y + x + 1 = 0$.
Solving: $x = -1, y = 0$. Shift origin to $(-1, 0)$: $X = x+1, Y = y$. Then $X^2 + 2Y^2 + 4XY + 1 - 1 = X^2 + 2Y^2 + 4XY = 0 \Rightarrow (X+2Y)^2 = 0 \Rightarrow X + 2Y = 0$. This represents two coincident lines through $(-1, 0)$.

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
