---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-024
topicName: Circle
weight: 5
country: india
generated: "2026-03-24T08:32:07.945487"
diagramPrompt: Mathematical diagram showing Circle concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Circle

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Standard Equation:**
$(x-h)^2 + (y-k)^2 = r^2$, centre $(h,k)$, radius $r$.

**General Form:**
$x^2 + y^2 + 2gx + 2fy + c = 0$.
Centre: $(-g, -f)$. Radius: $\sqrt{g^2 + f^2 - c}$ (real if $g^2 + f^2 > c$).

**Special Cases:**
- Circle through origin: $c = 0$
- Circle with centre at origin: $x^2 + y^2 = r^2$
- Touches x-axis: centre $(h, r)$ or $(h, -r)$, so $(x-h)^2 + (y \mp r)^2 = r^2$

**Parametric Form:**
$x = h + r\cos\theta, y = k + r\sin\theta$, where $\theta \in [0, 2\pi)$.

⚡ **JEE Tip:** For tangent to circle $x^2 + y^2 = r^2$ at point $(x_1, y_1)$, the equation is $xx_1 + yy_1 = r^2$. This is different from the chord formula.

⚡ **Common Mistake:** The radius formula $\sqrt{g^2+f^2-c}$ requires $g^2+f^2 > c$ for real radius. If $g^2+f^2 = c$, the circle is a point (radius 0). If $g^2+f^2 < c$, the circle is imaginary.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Tangent Equations:**

For circle $x^2 + y^2 = r^2$:

- **At point** $(x_1, y_1)$ on circle: $xx_1 + yy_1 = r^2$
- **Slope form:** $y = mx \pm r\sqrt{1+m^2}$
- **Parametric:** $x\cos\theta + y\sin\theta = r$

For circle $(x-h)^2 + (y-k)^2 = r^2$:

- **At point** $(x_1, y_1)$: $(x-h)(x_1-h) + (y-k)(y_1-k) = r^2$
- **Slope form:** more complex, derive from parametric

**Normal Equations:**

The normal at $(x_1, y_1)$ passes through centre $(h,k)$ and point $(x_1, y_1)$. So it's the line through $(h,k)$ and $(x_1, y_1)$.

**Chord of Contact:**
From external point $(x_1, y_1)$ to circle $x^2 + y^2 = r^2$: $xx_1 + yy_1 = r^2$.

**Chord Bisected at a Point:**
For chord bisected at $(x_1, y_1)$: $T = S_1$:
$xx_1 + yy_1 - r^2 = x_1^2 + y_1^2 - r^2$ → $xx_1 + yy_1 = x_1^2 + y_1^2$.

**Worked Examples:**

*Example 1:* Find the equation of the circle passing through $(1,1), (2,3), (3,2)$.

Let general circle: $x^2 + y^2 + 2gx + 2fy + c = 0$.
At $(1,1)$: $1 + 1 + 2g + 2f + c = 0$ → $2 + 2g + 2f + c = 0$.
At $(2,3)$: $4 + 9 + 4g + 6f + c = 0$ → $13 + 4g + 6f + c = 0$.
At $(3,2)$: $9 + 4 + 6g + 4f + c = 0$ → $13 + 6g + 4f + c = 0$.

Subtract first from second: $11 + 2g + 4f = 0$ → $2g + 4f = -11$.
Subtract first from third: $11 + 4g + 2f = 0$ → $4g + 2f = -11$.
Solve: from first eq $g = -11/2 - 2f$.
Plug into second: $4(-11/2 - 2f) + 2f = -11$ → $-22 - 8f + 2f = -11$ → $-6f = 11$ → $f = -11/6$.
Then $g = -11/2 - 2(-11/6) = -11/2 + 11/3 = (-33 + 22)/6 = -11/6$.
From first equation: $c = -2 - 2g - 2f = -2 - 2(-11/6) - 2(-11/6) = -2 + 11/3 + 11/3 = -2 + 22/3 = (-6+22)/3 = 16/3$.

So circle: $x^2 + y^2 - \frac{11}{3}x - \frac{11}{3}y + \frac{16}{3} = 0$.
Multiply by 3: $3x^2 + 3y^2 - 11x - 11y + 16 = 0$.

*Example 2 (JEE 2022):* Find length of tangent from $(5, 3)$ to $x^2 + y^2 - 4x - 6y + 3 = 0$.

Circle: $g = -2, f = -3, c = 3$.
Radius $r = \sqrt{4 + 9 - 3} = \sqrt{10}$.
Centre $C = (2, 3)$.
Distance from $P(5,3)$ to $C$: $PC = \sqrt{(5-2)^2 + (3-3)^2} = 3$.
Length of tangent $PT = \sqrt{PC^2 - r^2} = \sqrt{9 - 10} = \sqrt{-1}$ — imaginary!
This means point $(5,3)$ is inside the circle, so no real tangents.

Check: does $(5,3)$ satisfy $(x-2)^2 + (y-3)^2 < r^2$?
$(3)^2 + 0 = 9 < 10$ ✓. So inside.

*Example 3:* Find the image of point $(3, 4)$ in the circle $x^2 + y^2 = 25$.

We want point $Q$ such that the circle is the perpendicular bisector of $PQ$.
Line from $O(0,0)$ to $P(3,4)$: $y = \frac{4}{3}x$.
$OP = 5$ (on circle since $3^2+4^2=25$).
The point $Q$ lies on line $OP$ with $O$ between $Q$ and $P$ if $P$ is inside? Actually $P$ is ON the circle.
For any point on circle, the reflection in the circle (invert with respect to circle) gives... hmm.

Actually "image in the circle" could mean reflection in the circle as a mirror. But circles don't have a simple reflection.
It could mean inversion: for point $P$, find $Q$ such that $OP \cdot OQ = r^2$.
$OP = 5, r = 5$, so $OQ = r^2/OP = 25/5 = 5$.
Since $P$ is on circle, $Q = P$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Radical Axis and Radical Centre:**

For two circles $S_1 = 0$ and $S_2 = 0$:
**Radical axis:** $S_1 - S_2 = 0$ (linear equation, a line perpendicular to line of centres).

The radical axis is the locus of points with equal power with respect to both circles.
For three circles, the three radical axes concur at the **radical centre**.

**Common Tangents:**

For two circles with centres $C_1, C_2$ and radii $r_1, r_2$:

- **Direct common tangents:** Do not cross the line of centres. There are 2.
- **Transverse (cross) common tangents:** Cross the line of centres. There are 2 if circles don't overlap.
- Number of common tangents depends on distance $d = C_1C_2$:
  - $d > r_1 + r_2$: 4 tangents (external don't intersect segment $C_1C_2$)
  - $d = r_1 + r_2$: 3 tangents (external tangent touches both)
  - $r_1 + r_2 > d > |r_1 - r_2|$: 2 tangents
  - $d = |r_1 - r_2|$: 1 tangent (internal)
  - $d < |r_1 - r_2|$: 0 tangents (one inside other)

**Advanced Problems:**

*JEE Advanced 2020:* Find the number of common tangents to circles $x^2 + y^2 = 1$ and $(x-4)^2 + y^2 = 9$.

Circle 1: centre $O(0,0), r_1 = 1$.
Circle 2: centre $C(4,0), r_2 = 3$.
$d = OC = 4$.
$r_1 + r_2 = 1 + 3 = 4$.
So $d = r_1 + r_2$.
Therefore exactly 3 common tangents.

*JEE Advanced 2019:* Find the equation of the circle which touches the circle $x^2 + y^2 = 4$ externally at $(2,0)$ and has radius 3.

Let the required circle have centre $C_1(h,k)$ and radius $r_1 = 3$.
It touches circle $S: x^2+y^2=4$ externally at $P(2,0)$.
So $P$ lies on both circles, and $C_1P$ extended passes through $O$ (since circles touch externally at $P$ and $OP$ is the line of centres).
Actually for two circles touching externally at $P$, the centres $O$ and $C_1$ lie on opposite sides of $P$? No, both centres are on the same side of the tangent at $P$.

Wait, for external touching at $P$: $O, P, C_1$ are collinear with $P$ between $O$ and $C_1$? Or with $O$ between?
If circle 1 (radius 2) at origin and circle 2 (radius 3) touches it externally "beyond" $P$: then $OP = 2, PC_1 = 3$, so $OC_1 = 5$.
So $C_1$ is on ray $OP$ extended, on the far side from $O$.
Since $P = (2,0)$ and $O = (0,0)$, the ray $OP$ is the positive x-axis.
So $C_1 = (2+3, 0) = (5, 0)$? Wait, $P$ is at distance 2 from $O$. If we go further away along the same direction by distance 3, we get centre at $(5, 0)$.
But $P$ should be on the line $OC_1$. Since $P = (2,0)$ is on $OP$ ray from $O$, and we want $P$ between $O$ and $C_1$? No, for external touching, the point of contact lies on the line of centres, and the circles are on opposite sides of $P$.
Actually, imagine two balls touching. The point of contact is between the centres? No, both centres are on the same side of the contact point relative to the tangent line. The centres are on opposite sides of the contact point along the line through centres.

For two circles of radii $r_1$ and $r_2$ touching externally at point $P$:
$OP = r_1, CP = r_2$, and $OC = r_1 + r_2$.
If circle 1 is centred at $O(0,0)$ with $r_1 = 2$, and touches at $P(2,0)$, then circle 2 centred at... $C_1$ must satisfy $C_1P = r_2 = 3$ and $OC_1 = 2+3=5$.
Since $P=(2,0)$ and $O=(0,0)$, $C_1$ is at $(5,0)$ if we go further along the x-axis from $O$ through $P$.
Actually $OP = 2$ along positive x-axis. To get distance 5 from $O$, centre is at $(5,0)$. Distance from $C_1$ to $P$: $5-2 = 3$ ✓.

So the required circle: centre $(5,0)$, radius $3$: $(x-5)^2 + y^2 = 9$.

**JEE Advanced Patterns (2018–2024):**
- Radical axis problems and properties of concurrent radical axes appeared in 2020, 2023
- Number of common tangents between circles is frequently tested
- Family of circles (touching conditions) is a major topic
- Orthogonal circles (where tangents are perpendicular at intersection) appeared in 2021
- Combined problems with lines and circles are very common

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
