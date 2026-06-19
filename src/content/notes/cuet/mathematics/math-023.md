---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-023
topicName: 3D Geometry
weight: 3
country: india
generated: "2026-03-29T05:06:31"
lastUpdated: "2026-06-19"
---

# 3D Geometry

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- **Direction cosines** of a line through $(x_1, y_1, z_1)$ with direction ratios $a, b, c$ are $l = a/\sqrt{a^2+b^2+c^2}$, $m = b/\sqrt{a^2+b^2+c^2}$, $n = c/\sqrt{a^2+b^2+c^2}$, satisfying the identity $l^2 + m^2 + n^2 = 1$.
- **Symmetric form of a line:** $\dfrac{x-x_1}{a} = \dfrac{y-y_1}{b} = \dfrac{z-z_1}{c}$, derived from the vector form $\vec{r} = \vec{a} + \lambda \vec{b}$.
- **Angle between two lines** with direction cosines $(l_1, m_1, n_1)$ and $(l_2, m_2, n_2)$: $\cos\theta = l_1 l_2 + m_1 m_2 + n_1 n_2$.
- **Plane in intercept form:** $\dfrac{x}{a} + \dfrac{y}{b} + \dfrac{z}{c} = 1$, where $a, b, c$ are intercepts on the axes.
- **Point-to-plane distance:** $d = \dfrac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$.
- **Skew-line distance:** $d = \dfrac{|(\vec{b_1}\times\vec{b_2})\cdot(\vec{a_2}-\vec{a_1})|}{|\vec{b_1}\times\vec{b_2}|}$.
- CUET traps: use direction **cosines** (not ratios) for the angle formula, and never confuse *parallel* lines (denominator zero) with *intersecting* lines.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Direction Cosines and Direction Ratios

For a directed line in space, the **direction ratios** $(a, b, c)$ are any three numbers proportional to the components of the line's direction vector. The **direction cosines** $(l, m, n)$ are these ratios normalised so that they represent cosines of the angles the line makes with the positive x, y and z axes respectively. Hence $l^2 + m^2 + n^2 = 1$ always, while $a, b, c$ need not satisfy this. If $(a, b, c)$ are direction ratios, then $(\pm a, \pm b, \pm c)$ are also direction ratios, but the corresponding direction cosines change sign consistently.

#### Equation of a Straight Line

A line through point $A(x_1, y_1, z_1)$ with direction ratios $a, b, c$ is written in **symmetric (Cartesian) form** as

$$\frac{x-x_1}{a} = \frac{y-y_1}{b} = \frac{z-z_1}{c} = \lambda.$$

The same line in vector form is $\vec{r} = \vec{a} + \lambda \vec{b}$, where $\vec{a} = x_1\hat{i} + y_1\hat{j} + z_1\hat{k}$ and $\vec{b} = a\hat{i} + b\hat{j} + c\hat{k}$. Two lines are **parallel** when their direction ratios are proportional and **perpendicular** when $a_1 a_2 + b_1 b_2 + c_1 c_2 = 0$.

#### Equation of a Plane

| Form | Equation | Parameters |
|---|---|---|
| Normal | $lx + my + nz = d$ | $(l, m, n)$ = unit normal |
| Cartesian | $Ax + By + Cz + D = 0$ | Normal = $(A, B, C)$ |
| Intercept | $\dfrac{x}{a}+\dfrac{y}{b}+\dfrac{z}{c}=1$ | Intercepts on axes |
| Through three points | $\begin{vmatrix} x-x_1 & y-y_1 & z-z_1 \\ x_2-x_1 & y_2-y_1 & z_2-z_1 \\ x_3-x_1 & y_3-y_1 & z_3-z_1 \end{vmatrix} = 0$ | Uses coplanarity |

#### Angles in 3D

- Between two **lines**: $\cos\theta = l_1l_2 + m_1m_2 + n_1n_2$.
- Between a **line and a plane**: $\sin\theta = \dfrac{|aA+bB+cC|}{\sqrt{a^2+b^2+c^2}\sqrt{A^2+B^2+C^2}}$.
- Between two **planes** with normals $(A_1,B_1,C_1)$ and $(A_2,B_2,C_2)$: $\cos\theta = \dfrac{|A_1A_2+B_1B_2+C_1C_2|}{\sqrt{A_1^2+B_1^2+C_1^2}\sqrt{A_2^2+B_2^2+C_2^2}}$.

#### Skew Lines and Shortest Distance

Two lines are **skew** when they are neither parallel nor intersecting (non-coplanar). The shortest distance formula uses the scalar triple product in the numerator and the cross-product magnitude in the denominator. CUET-style MCQs typically give the two lines in symmetric form and ask for this distance directly.

#### Distance Formulas

- Point to plane: $d = \dfrac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$.
- Two parallel planes $Ax+By+Cz+D_1=0$ and $Ax+By+Cz+D_2=0$: $d = \dfrac{|D_1-D_2|}{\sqrt{A^2+B^2+C^2}}$.

#### Typical CUET Question Patterns

- Convert direction ratios into direction cosines and verify $l^2+m^2+n^2=1$.
- Find the angle between two given lines using the dot product of their direction cosines.
- Write the equation of a plane through three points using the determinant form.
- Compute the shortest distance between two skew lines using the triple-product formula.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Projection and Projection Lengths

The **projection of a line segment** joining $P(x_1, y_1, z_1)$ and $Q(x_2, y_2, z_2)$ onto a line with direction cosines $(l, m, n)$ is

$$\text{length} = l(x_2-x_1) + m(y_2-y_1) + n(z_2-z_1).$$

This is the dot product $\vec{PQ}\cdot(l,m,n)$ and is signed; the absolute value gives the magnitude. CUET occasionally frames this as "length of projection of a vector onto another vector."

#### Coplanarity of Four Points

Four points $A, B, C, D$ are coplanar iff the scalar triple product

$$(\vec{AB}\times\vec{AC})\cdot\vec{AD} = 0,$$

equivalently the determinant $\begin{vmatrix} x_2-x_1 & y_2-y_1 & z_2-z_1 \\ x_3-x_1 & y_3-y_1 & z_3-z_1 \\ x_4-x_1 & y_4-y_1 & z_4-z_1 \end{vmatrix} = 0$. This same determinant, set equal to zero, gives the equation of the plane through the first three points when $(x_4, y_4, z_4) = (x, y, z)$.

#### Edge Cases and Traps

- When a direction ratio is zero, the symmetric form $\frac{x-x_1}{a}=\frac{y-y_1}{b}=\frac{z-z_1}{c}$ is **not valid** because division by zero is undefined. Use the vector form or write the line in two symmetric equations involving only the non-zero denominators.
- A line parallel to a plane satisfies $aA + bB + cC = 0$; a line lying *in* the plane additionally passes through a point of the plane.
- The shortest-distance formula degenerates (denominator = 0) when the lines are **parallel**, not when they intersect. Many students wrongly assume intersection makes the denominator vanish.
- Sign of $d$ in the plane equation $Ax+By+Cz+D=0$ matters when judging which side of the plane a point lies on — keep the absolute value for distance calculations.

#### Connection to Adjacent Topics

3D Geometry is the natural extension of 2D coordinate geometry and shares machinery with **vector algebra** (dot, cross, triple product), **matrices and determinants** (plane through three points), and **analytic geometry of conics** in 3D-projections context. Mastery of cross-product signs and triple-product expansion is essential before tackling skew-line and plane problems.

#### Worked Micro-Example

Find the shortest distance between the skew lines

$$\frac{x-1}{2}=\frac{y-2}{3}=\frac{z-3}{4} \quad \text{and} \quad \frac{x-2}{3}=\frac{y-3}{4}=\frac{z-4}{5}.$$

Here $\vec{a_1}-\vec{a_2} = (-1,-1,-1)$, $\vec{b_1}=(2,3,4)$, $\vec{b_2}=(3,4,5)$. Compute $\vec{b_1}\times\vec{b_2} = (-1, 2, -1)$, whose magnitude is $\sqrt{6}$. The scalar triple product $(\vec{b_1}\times\vec{b_2})\cdot(\vec{a_1}-\vec{a_2}) = (-1)(-1)+(2)(-1)+(-1)(-1) = 0$. So the shortest distance is $0$ — the lines actually intersect, despite appearances.

#### Common Mistakes

- Using direction ratios where the formula requires direction cosines.
- Dropping the absolute value in the point-to-plane distance.
- Forgetting to check parallelism before applying the skew-line formula.

#### Practice Prompts

1. A line makes angles $\alpha, \beta, \gamma$ with the coordinate axes such that $\sin^2\alpha + \sin^2\beta + \sin^2\gamma = 2$. Find the value of $\cos^2\alpha + \cos^2\beta + \cos^2\gamma$ using $l^2+m^2+n^2=1$.
2. Find the equation of the plane passing through $(1,1,1)$, $(2,3,4)$ and parallel to the z-axis, then compute the perpendicular distance of the origin from this plane.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
