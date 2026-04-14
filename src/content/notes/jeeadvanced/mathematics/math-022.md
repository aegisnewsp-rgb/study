---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-022
topicName: Ellipse
weight: 5
country: india
generated: "2026-03-24T08:32:07.944493"
diagramPrompt: "Mathematical diagram showing Ellipse concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Ellipse

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Definition:**
An ellipse is the set of all points in a plane where the sum of distances from two fixed points (foci) is constant.

**Standard Equation:**
For ellipse centred at origin with major axis along x-axis:
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \quad \text{where } a > b > 0$$
- **Vertices:** $(\pm a, 0)$ and $(0, \pm b)$
- **Foci:** $(\pm c, 0)$ where $c^2 = a^2 - b^2$
- **Eccentricity:** $e = \frac{c}{a} < 1$

**Key Lengths:**
- **Major axis:** $2a$
- **Minor axis:** $2b$
- **Latus rectum:** Length $= \frac{2b^2}{a}$, endpoints at $(c, \pm \frac{b^2}{a})$

**Parametric Form:**
$(a\cos\theta, b\sin\theta)$ for parameter $\theta \in [0, 2\pi)$.

⚡ **JEE Tip:** For any point $P$ on ellipse, $PF_1 + PF_2 = 2a$ (constant). This is the geometric definition and often used in problems involving distances to foci.

⚡ **Common Mistake:** Don't confuse $a$ and $b$. In $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, if $a > b$, major axis is along x-axis. Always identify which is the semi-major axis.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Tangent and Normal Equations:**

For ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$:

**At point** $P(x_1, y_1)$ on ellipse:

- **Tangent:** $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$
- **Normal:** $\frac{a^2 x}{x_1} - \frac{b^2 y}{y_1} = a^2 - b^2$ (or in slope form)

**Parametric form** at $(a\cos\theta, b\sin\theta)$:

- **Tangent:** $\frac{x\cos\theta}{a} + \frac{y\sin\theta}{b} = 1$
- **Normal slope:** $\frac{a\sin\theta}{b\cos\theta}$

**Director Circle:**
Locus of intersection of perpendicular tangents. For ellipse, this is the circle $x^2 + y^2 = a^2 + b^2$ (centre at origin, radius $\sqrt{a^2+b^2}$).

**Chord Properties:**

- **Chord of contact** from external point $(x_1, y_1)$: $T = 0$: $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$
- **Chord bisected at** $(x_1, y_1)$: $T = S_1$: $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$

**Special Positions of Axes:**

If $b > a$ (major axis along y-axis), swap roles:
$$\frac{x^2}{b^2} + \frac{y^2}{a^2} = 1, \quad a > b \text{ not required}$$

**Worked Examples:**

*Example 1:* Find eccentricity, foci, and latus rectum of $9x^2 + 16y^2 = 144$.

Divide by 144: $\frac{x^2}{16} + \frac{y^2}{9} = 1$.
So $a^2 = 16, b^2 = 9, a = 4, b = 3$.
$c^2 = a^2 - b^2 = 16 - 9 = 7$, so $c = \sqrt{7}$.
$e = c/a = \sqrt{7}/4$.
Foci: $(\pm\sqrt{7}, 0)$.
Latus rectum: $\frac{2b^2}{a} = \frac{2 \times 9}{4} = \frac{9}{2}$.

*Example 2 (JEE 2021):* Find equation of tangent to $\frac{x^2}{25} + \frac{y^2}{16} = 1$ at point where $x = 3$.

When $x = 3$: $\frac{9}{25} + \frac{y^2}{16} = 1$ → $\frac{y^2}{16} = \frac{16}{25}$ → $y^2 = \frac{256}{25}$ → $y = \pm \frac{16}{5}$.
For point $(3, 16/5)$: tangent is $\frac{x \cdot 3}{25} + \frac{y \cdot 16/5}{16} = 1$.
Simplify: $\frac{3x}{25} + \frac{y}{5} = 1$ → multiply by 25: $3x + 5y = 25$.

*Example 3:* Show that the product of slopes of perpendicular tangents to an ellipse is constant.

For ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, slope of tangent at $(a\cos\theta, b\sin\theta)$ is $-\frac{b\cos\theta}{a\sin\theta}$.
For perpendicular tangents at $\theta_1$ and $\theta_2$: slopes $m_1$ and $m_2$ with $m_1 m_2 = -1$.
Slope at $\theta$: $m = -\frac{b\cos\theta}{a\sin\theta} = -\frac{b}{a}\cot\theta$.
Product $m_1 m_2 = \frac{b^2}{a^2}\cot\theta_1 \cot\theta_2 = -1$.
So $\cot\theta_1 \cot\theta_2 = -\frac{a^2}{b^2}$, which is constant. ✓

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Pole and Polar:**
For any point $(x_1, y_1)$, the polar (chord of contact) is $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$.
The pole of chord $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ is the point $(x_1, y_1)$ satisfying this equation — i.e., any point on the director circle $x_1^2 + y_1^2 = a^2 + b^2$.

**Normals at Endpoint of Latus Rectum:**

For endpoint of latus rectum $(c, b^2/a)$ where $c = \sqrt{a^2-b^2}$:
Normal equation can be derived using the formula $\frac{a^2 x}{x_1} - \frac{b^2 y}{y_1} = a^2 - b^2$.
At $(c, b^2/a)$: $\frac{a^2 x}{c} - \frac{b^2 y}{b^2/a} = a^2 - b^2$ → $\frac{a^2 x}{c} - ay = c^2$.

**Auxiliary Circle and Eccentric Angle:**

The circle $x^2 + y^2 = a^2$ is the auxiliary circle. For any point $P$ on ellipse with eccentric angle $\theta$, $P = (a\cos\theta, b\sin\theta)$. The corresponding point on auxiliary circle is $(a\cos\theta, a\sin\theta)$.

**Reflection Property:**
If a ray emanates from one focus, it reflects off the ellipse to the other focus. This is why elliptical rooms work as "whispering galleries" — sound from one focus travels to the other.

**Advanced Problems:**

*Problem 1 (JEE Advanced 2020):* From a point $(h, k)$, tangents are drawn to ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$. Find the condition for the chord of contact to subtend a right angle at the centre.

The chord of contact is $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ where $(x_1, y_1)$ is the pole.
For it to subtend a right angle at centre, the tangents drawn from centre to this chord must be perpendicular. Actually, we need the points where the chord meets the ellipse to have normals perpendicular at their intersection... No, that's not it.

For chord $T = 0$ from point $(h,k)$: $\frac{xh}{a^2} + \frac{yk}{b^2} = 1$.
We want the two tangents from origin to this chord to be perpendicular. But origin is the centre. The chord of contact is itself a chord of the ellipse. We're asking when the tangents at the endpoints of this chord are perpendicular.

Let endpoints be $P$ and $Q$. We want slope of tangent at $P$ × slope of tangent at $Q = -1$.
Using parametric form for $P(a\cos\theta_1, b\sin\theta_1)$ and $Q(a\cos\theta_2, b\sin\theta_2)$:
Slope at $P$ is $-\frac{b\cos\theta_1}{a\sin\theta_1}$.
For perpendicular: $\frac{b^2\cos\theta_1\cos\theta_2}{a^2\sin\theta_1\sin\theta_2} = -1$.

But also $P$ and $Q$ lie on chord $\frac{xh}{a^2} + \frac{yk}{b^2} = 1$.
Substituting: $\frac{a\cos\theta_1 \cdot h}{a^2} + \frac{b\sin\theta_1 \cdot k}{b^2} = 1$ → $\frac{h\cos\theta_1}{a} + \frac{k\sin\theta_1}{b} = 1$.
Similarly for $\theta_2$.

The condition works out to be $h^2 + k^2 = a^2 + b^2$, meaning $(h,k)$ lies on the director circle. This makes sense — the pole of a chord that subtends a right angle at the centre lies on the director circle.

*Problem 2:* Find the locus of midpoint of chords of ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ that are normal to the ellipse at their endpoints.

Using parametric endpoints $(a\cos\theta, b\sin\theta)$ and $(a\cos\phi, b\sin\phi)$ where normals pass through midpoint $(h,k)$:
Normal at $\theta$: $\frac{a^2 x}{a\cos\theta} - \frac{b^2 y}{b\sin\theta} = a^2 - b^2$ → $\frac{a x}{\cos\theta} - \frac{b y}{\sin\theta} = a^2 - b^2$.
This passes through $(h,k)$: $\frac{ah}{\cos\theta} - \frac{bk}{\sin\theta} = a^2 - b^2$.

Similarly for $\phi$. The locus requires eliminating $\theta$ and $\phi$.
One can show the locus is a circle (or ellipse) related to the original.

**JEE Advanced Patterns (2018–2024):**
- Combined conic sections (ellipse + line, circle + ellipse) are very common
- Director circle and auxiliary circle questions appear frequently
- Parametric point problems are common — always try parametric form first
- Reflection property questions appeared in 2019, 2023
- Locus problems involving chords normal to ellipse are advanced but appear in tough sets

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
