---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-013
topicName: 3D Geometry
weight: 5
country: india
generated: "2026-03-24T08:32:07.939803"
diagramPrompt: Mathematical diagram showing 3D Geometry concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# 3D Geometry

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Coordinate System Basics:**
In 3D Cartesian system, a point is represented as $P(x, y, z)$. The distance between two points $P(x_1, y_1, z_1)$ and $Q(x_2, y_2, z_2)$ is:
$$d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$$

**Section Formula:**
For internal division in ratio $m:n$:
$$(x, y, z) = \left(\frac{m x_2 + n x_1}{m+n}, \frac{m y_2 + n y_1}{m+n}, \frac{m z_2 + n z_1}{m+n}\right)$$

**Direction Ratios and Cosines:**
For line joining $(x_1,y_1,z_1)$ to $(x_2,y_2,z_2)$: direction ratios are $(a,b,c) = (x_2-x_1, y_2-y_1, z_2-z_1)$. Direction cosines are:
$$l = \frac{a}{\sqrt{a^2+b^2+c^2}},\ m = \frac{b}{\sqrt{a^2+b^2+c^2}},\ n = \frac{c}{\sqrt{a^2+b^2+c^2}}$$
with $l^2 + m^2 + n^2 = 1$.

⚡ **JEE Tip:** For a line with direction ratios $(a,b,c)$, any scalar multiple $(ka, kb, kc)$ represents the same direction. Direction cosines are unique (up to sign).

⚡ **Common Mistake:** Remember that lines in 3D can be skew (neither parallel nor intersecting). Always check if lines actually intersect before solving intersection problems.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Line Equations:**

- **Vector form:** $\vec{r} = \vec{a} + \lambda \vec{b}$ where $\vec{a}$ is position vector of a point on line and $\vec{b}$ is direction vector
- **Cartesian form:** $\frac{x-x_1}{a} = \frac{y-y_1}{b} = \frac{z-z_1}{c}$ where $(a,b,c)$ are direction ratios
- **Symmetric form:** Same as Cartesian, written as single equation with parameter $t$

**Plane Equations:**

- **General form:** $ax + by + cz + d = 0$ where $\vec{n} = (a,b,c)$ is the normal vector
- **Point-normal form:** $a(x-x_1) + b(y-y_1) + c(z-z_1) = 0$
- **Vector form:** $(\vec{r} - \vec{a}) \cdot \vec{n} = 0$

**Angle Formulas:**

- **Angle between two lines** (with direction vectors $\vec{b}_1, \vec{b}_2$):
$$\cos\theta = \frac{|\vec{b}_1 \cdot \vec{b}_2|}{|\vec{b}_1||\vec{b}_2|}$$

- **Angle between two planes** (with normals $\vec{n}_1, \vec{n}_2$):
$$\cos\theta = \frac{|\vec{n}_1 \cdot \vec{n}_2|}{|\vec{n}_1||\vec{n}_2|}$$

- **Angle between line and plane** (line direction $\vec{b}$, plane normal $\vec{n}$):
$$\sin\theta = \frac{|\vec{b} \cdot \vec{n}|}{|\vec{b}||\vec{n}|}$$

**Distance Formulas:**

- **Distance from point** $(x_1,y_1,z_1)$ **to plane** $ax + by + cz + d = 0$:
$$D = \frac{|ax_1 + by_1 + cz_1 + d|}{\sqrt{a^2+b^2+c^2}}$$

- **Distance from point** $\vec{p}$ **to line** $\vec{r} = \vec{a} + \lambda\vec{b}$:
$$D = \frac{|\vec{b} \times (\vec{p} - \vec{a})|}{|\vec{b}|}$$

**Worked Examples:**

*Example 1:* Find the angle between lines $\frac{x-1}{2} = \frac{y+1}{3} = \frac{z}{1}$ and $\frac{x+1}{1} = \frac{y}{2} = \frac{z-2}{3}$.

Direction vectors: $\vec{b}_1 = (2,3,1)$ and $\vec{b}_2 = (1,2,3)$.
$\vec{b}_1 \cdot \vec{b}_2 = 2(1) + 3(2) + 1(3) = 2 + 6 + 3 = 11$.
$|\vec{b}_1| = \sqrt{4+9+1} = \sqrt{14}$.
$|\vec{b}_2| = \sqrt{1+4+9} = \sqrt{14}$.
$\cos\theta = \frac{11}{14}$, so $\theta = \cos^{-1}\left(\frac{11}{14}\right) \approx 38.2°$.

*Example 2:* Find the distance from point $(1, 2, 3)$ to plane $2x + y - 2z + 5 = 0$.

$D = \frac{|2(1) + 1(2) - 2(3) + 5|}{\sqrt{4+1+4}} = \frac{|2 + 2 - 6 + 5|}{\sqrt{9}} = \frac{|3|}{3} = 1$.

*Example 3 (JEE 2022):* Find the equation of plane passing through $(1, 2, 3)$ and perpendicular to line joining $(3, 4, 5)$ and $(5, 6, 7)$.

Direction of line: $\vec{b} = (2, 2, 2)$ or $(1, 1, 1)$. This is the normal to our required plane.
Plane: $1(x-1) + 1(y-2) + 1(z-3) = 0$ → $x + y + z - 6 = 0$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Skew Lines and Shortest Distance:**

For two skew lines $\vec{r}_1 = \vec{a}_1 + \lambda\vec{b}_1$ and $\vec{r}_2 = \vec{a}_2 + \mu\vec{b}_2$, the shortest distance is:
$$D = \frac{|(\vec{a}_2 - \vec{a}_1) \cdot (\vec{b}_1 \times \vec{b}_2)|}{|\vec{b}_1 \times \vec{b}_2|}$$

**Coplanarity Condition:**

Lines $\vec{r} = \vec{a}_1 + \lambda\vec{b}_1$ and $\vec{r} = \vec{a}_2 + \mu\vec{b}_2$ are coplanar iff:
$$(\vec{a}_2 - \vec{a}_1) \cdot (\vec{b}_1 \times \vec{b}_2) = 0$$

**Sphere:**

General equation: $x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0$.
Centre: $(-u, -v, -w)$, Radius: $\sqrt{u^2+v^2+w^2-d}$ (real if $u^2+v^2+w^2 > d$).

**Intersection of Line and Sphere:**

For line $\vec{r} = \vec{a} + \lambda\vec{b}$ and sphere $|\vec{r} - \vec{c}| = R$:
Substitute: $|\vec{a} + \lambda\vec{b} - \vec{c}|^2 = R^2$.
This gives $\lambda^2|\vec{b}|^2 + 2\lambda\vec{b} \cdot (\vec{a} - \vec{c}) + |\vec{a} - \vec{c}|^2 - R^2 = 0$.
Solve quadratic in $\lambda$. If discriminant $< 0$, line misses sphere.

**Advanced Problems:**

*Problem (JEE Advanced 2020):* Find the locus of a point $P$ such that the sum of squares of its distances from planes $x + y + z = 3$ and $x + 2y + 2z = 4$ equals $10$.

*Solution:* Let $P(x,y,z)$. Distance to first plane: $d_1 = \frac{|x+y+z-3|}{\sqrt{3}}$.
Distance to second: $d_2 = \frac{|x+2y+2z-4|}{\sqrt{9} = 3}$.
Condition: $d_1^2 + d_2^2 = 10$.
So $\frac{(x+y+z-3)^2}{3} + \frac{(x+2y+2z-4)^2}{9} = 10$.
Multiplying by 9: $3(x+y+z-3)^2 + (x+2y+2z-4)^2 = 90$.
Expand and simplify to get locus equation.

*Problem:* Find the equation of sphere passing through circle $x^2+y^2+z^2=9$ in plane $z=2$ and point $(0,0,0)$.

Plane $z=2$ gives circle of intersection: $x^2+y^2+4=9$ → $x^2+y^2=5$.
Sphere general form: $x^2+y^2+z^2+2ux+2vy+2wz+d=0$.
Passing through $(0,0,0)$: $d = 0$.
Passing through circle means passing through three points on circle, e.g., $(\sqrt{5},0,2), (-\sqrt{5},0,2), (0,\sqrt{5},2)$.
From $(\sqrt{5},0,2)$: $5+4+2u\sqrt{5}+2w(2) = 0$ → $2u\sqrt{5}+2w(2) = -9$.
Similar equations give system to solve for $u, v, w$.

**JEE Advanced Patterns (2018–2024):**
- Shortest distance between skew lines is a recurring topic
- Sphere intersection with planes/lines tested nearly every year
- Combined problems with conics and 3D are common in Paper 2
- Conditions for perpendicularity/coplanarity appear frequently
- Projection-related questions have appeared in 2021, 2023

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
