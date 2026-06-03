---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-023
topicName: Hyperbola
weight: 5
country: india
generated: "2026-03-24T08:32:07.945032"
lastUpdated: 2026-03-24
diagramPrompt: "Mathematical diagram showing Hyperbola concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Hyperbola

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Definition:**
A hyperbola is the set of all points in a plane where the absolute difference of distances from two fixed points (foci) is constant.

**Standard Equation:**
For hyperbola centred at origin with transverse axis along x-axis:
$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \quad (a, b > 0)$$
- **Vertices:** $(\pm a, 0)$
- **Foci:** $(\pm c, 0)$ where $c^2 = a^2 + b^2$
- **Eccentricity:** $e = \frac{c}{a} > 1$

**Key Lengths:**
- **Transverse axis:** $2a$
- **Conjugate axis:** $2b$
- **Latus rectum:** Length $= \frac{2b^2}{a}$, endpoints at $(c, \pm \frac{b^2}{a})$

**Rectangular Hyperbola:**
When $a = b$, we get $x^2 - y^2 = a^2$, also written as $xy = c^2$ after rotation.

⚡ **JEE Tip:** For hyperbola, $c^2 = a^2 + b^2$ (not the difference like in ellipse). Also $e > 1$ for hyperbola (unlike ellipse where $e < 1$).

⚡ **Common Mistake:** Remember that for hyperbola $x^2/a^2 - y^2/b^2 = 1$, we have $x^2/a^2 \geq 1$, so $|x| \geq a$. Points with $|x| < a$ don't lie on the hyperbola.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Tangent and Normal:**

For hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$:

**At point** $P(x_1, y_1)$ on hyperbola:

- **Tangent:** $\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1$
- **Normal:** $\frac{a^2 x}{x_1} + \frac{b^2 y}{y_1} = c^2$ (with $c^2 = a^2 + b^2$)

**Parametric form** at $(a\sec\theta, b\tan\theta)$:

- **Tangent:** $\frac{x\sec\theta}{a} - \frac{y\tan\theta}{b} = 1$
- **Slope:** $\frac{b\sec\theta}{a\tan\theta}$

**Asymptotes:**
For $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, asymptotes are $y = \pm \frac{b}{a}x$.
For rectangular hyperbola $xy = c^2$, asymptotes are the coordinate axes $x = 0$ and $y = 0$.

**Director Circle:**
The director circle is the locus of the point of intersection of two perpendicular tangents. For the hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, this locus is the circle
$$x^2 + y^2 = a^2 - b^2.$$
This is a real circle only when $a > b$. When $a = b$ the locus degenerates to the single point at the centre, and when $a < b$ the radius is imaginary, so no real point is the intersection of perpendicular tangents — in that case no two perpendicular tangents to the hyperbola exist.

**Worked Examples:**

*Example 1:* Find eccentricity, foci, and asymptotes of $16x^2 - 9y^2 = 144$.

Divide by 144: $\frac{x^2}{9} - \frac{y^2}{16} = 1$.
So $a^2 = 9, b^2 = 16, a = 3, b = 4$.
$c^2 = a^2 + b^2 = 9 + 16 = 25$, so $c = 5$.
$e = c/a = 5/3 \approx 1.667$.
Foci: $(\pm 5, 0)$.
Asymptotes: $y = \pm \frac{b}{a}x = \pm \frac{4}{3}x$.

*Example 2 (JEE 2021):* Find equation of tangent to $\frac{x^2}{16} - \frac{y^2}{9} = 1$ at point where $x = 5$.

When $x = 5$: $\frac{25}{16} - \frac{y^2}{9} = 1$ → $\frac{y^2}{9} = \frac{25}{16} - 1 = \frac{9}{16}$ → $y^2 = \frac{81}{16}$ → $y = \pm \frac{9}{4}$.
For point $(5, 9/4)$: tangent is $\frac{x \cdot 5}{16} - \frac{y \cdot 9/4}{9} = 1$.
Simplify: $\frac{5x}{16} - \frac{y}{4} = 1$ → multiply by 16: $5x - 4y = 16$.

*Example 3:* Find the equation of the normal to $xy = 32$ at point $(4, 8)$.

Differentiate implicitly: $y + x\frac{dy}{dx} = 0$ → $\frac{dy}{dx} = -\frac{y}{x}$.
At $(4,8)$: slope of tangent $m = -8/4 = -2$.
Slope of normal $= -1/m = 1/2$.
Equation: $y - 8 = \frac{1}{2}(x - 4)$ → $2y - 16 = x - 4$ → $x - 2y + 12 = 0$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Conjugate Hyperbola:**
For $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, the conjugate hyperbola is $-\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, equivalently $\frac{y^2}{b^2} - \frac{x^2}{a^2} = 1$.

A hyperbola and its conjugate share the same pair of asymptotes $y = \pm \frac{b}{a}x$.

**Rectangular Hyperbola:**
When transverse axis = conjugate axis ($a = b$), we get the rectangular hyperbola $x^2 - y^2 = a^2$.
In rotated form (axes turned through 45°): $xy = \frac{a^2}{2}$.

**Director Circle for Rectangular Hyperbola:**
For $xy = c^2$, the director circle (locus of intersection of perpendicular tangents) is $x^2 + y^2 = 2c^2$.

**Pole and Polar:**
For hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, the polar of a point $(x_1, y_1)$ is
$$\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1.$$
When $(x_1, y_1)$ lies on the hyperbola, the polar coincides with the tangent at that point. When the point is external, its polar is the chord of contact of the two tangents drawn from it.

**Reflection Property:**
A ray directed toward one focus reflects off the hyperbola as if it came from the other focus. Equivalently, the tangent at any point $P$ makes equal angles with the focal radii $PF_1$ and $PF_2$.

**Advanced Problems:**

*Problem 1 (JEE Advanced 2019):* From a point $(h, k)$, tangents are drawn to the hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$. Find the locus of $(h, k)$ for which the chord of contact is a genuine chord (meeting the hyperbola in two real points).

The chord of contact from $(h,k)$ is $T = 0$, i.e. $\frac{xh}{a^2} - \frac{yk}{b^2} = 1$.
Two real tangents can be drawn from an external point, and the chord of contact then joins the two real points of tangency. Hence the chord of contact is a real chord precisely when $(h, k)$ lies outside the hyperbola, i.e. when
$$\frac{h^2}{a^2} - \frac{k^2}{b^2} < 1.$$
This inequality (together with $(h,k)$ not lying inside a branch) describes the required locus of points from which two real tangents — and therefore a real chord of contact — exist.

*Problem 2:* Find the asymptotes of $2x^2 + 5xy + 2y^2 + 4x + 5y + 2 = 0$.

The asymptotes of a second-degree curve have the same second-degree (homogeneous) part as the curve and differ only in the linear and constant terms; they also pass through the centre of the conic. Two facts drive the solution.

**Directions of the asymptotes** come from the homogeneous part $2x^2 + 5xy + 2y^2 = 0$. Factoring,
$$2x^2 + 5xy + 2y^2 = (2x + y)(x + 2y),$$
so the asymptotes are parallel to the lines $2x + y = 0$ and $x + 2y = 0$.

**Centre of the conic** is found from the partial derivatives:
$$4x + 5y + 4 = 0, \qquad 5x + 4y + 5 = 0.$$
Solving gives $x = -1,\ y = 0$, so the centre is $(-1, 0)$.

Each asymptote passes through the centre $(-1, 0)$ with one of the two directions:
- $2(x + 1) + (y - 0) = 0 \Rightarrow 2x + y + 2 = 0$
- $(x + 1) + 2(y - 0) = 0 \Rightarrow x + 2y + 1 = 0$

Check that the centre satisfies both: $2(-1) + 0 + 2 = 0$ ✓ and $(-1) + 2(0) + 1 = 0$ ✓. As a final check, $(2x + y + 2)(x + 2y + 1)$ expands to exactly $2x^2 + 5xy + 2y^2 + 4x + 5y + 2$, confirming the conic is this degenerate pair of lines.

**Asymptotes:** $2x + y + 2 = 0$ and $x + 2y + 1 = 0$.

**JEE Advanced Patterns (2018–2024):**
- Parametric form $(a\sec\theta, b\tan\theta)$ is essential for hyperbola problems
- Rectangular hyperbola $xy = c^2$ and its properties are frequently tested
- Asymptotes appear in combined conic problems
- Equation transformation (rotation to get rectangular form) is an advanced topic that appears
- Director circle and conjugate hyperbola are less common but appear in tough sets

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
