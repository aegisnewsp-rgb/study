---



exam: nda
examName: NDA
subject: mathematics
subjectName: Mathematics
topic: math-008
topicName: Vector Algebra
weight: 4
country: india
generated: "2026-03-24T08:32:07.808715"
diagramPrompt: "Mathematical diagram showing Vector Algebra concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Vector Algebra

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Vector Algebra — Quick Facts**

**Scalars vs Vectors:**
- **Scalar:** quantity with only magnitude (e.g. mass, temperature, speed)
- **Vector:** quantity with both magnitude and direction (e.g. velocity, force, displacement)

A vector $\vec{a}$ has magnitude $|\vec{a}|$ and direction. Graphically, it is represented by a directed line segment with an arrowhead indicating direction.

**Position Vector:**
For a point $P(x, y, z)$ with respect to the origin $O$, the **position vector** is:
$$\vec{OP} = x\hat{i} + y\hat{j} + z\hat{k}$$
where $\hat{i}$, $\hat{j}$, $\hat{k}$ are unit vectors along the $x$, $y$, and $z$ axes respectively.

**Unit Vector:**
A unit vector along $\vec{a}$ is $\hat{a} = \frac{\vec{a}}{|\vec{a}|}$, so that $|\hat{a}| = 1$.
The magnitude of $\vec{r} = x\hat{i} + y\hat{j} + z\hat{k}$ is:
$$|\vec{r}| = \sqrt{x^2 + y^2 + z^2}$$

⚡ **NDA Exam Tip:** Many NDA questions ask you to find the magnitude of a vector or verify that two vectors are equal. Always check both the magnitude and direction. A common mistake is forgetting the square root when computing magnitude.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding and problem-solving fluency.

**Vector Addition**

**Triangle Law:** Placing the tail of vector $\vec{b}$ at the head of vector $\vec{a}$ gives the resultant $\vec{R} = \vec{a} + \vec{b}$.

**Parallelogram Law:** If $\vec{a}$ and $\vec{b}$ share a common tail, completing the parallelogram, the diagonal from the common tail gives $\vec{R} = \vec{a} + \vec{b}$.

**Laws of Vector Addition:**
- **Commutative:** $\vec{a} + \vec{b} = \vec{b} + \vec{a}$
- **Associative:** $(\vec{a} + \vec{b}) + \vec{c} = \vec{a} + (\vec{b} + \vec{c})$
- **Identity:** $\vec{a} + \vec{0} = \vec{a}$
- **Inverse:** $\vec{a} + (-\vec{a}) = \vec{0}$

Subtraction: $\vec{a} - \vec{b} = \vec{a} + (-\vec{b})$.

**Scalar (Dot) Product**

The dot product of two vectors $\vec{a}$ and $\vec{b}$ is:
$$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta$$
where $\theta$ is the angle between them ($0 \leq \theta \leq \pi$).

In component form, if $\vec{a} = a_1\hat{i} + a_2\hat{j} + a_3\hat{k}$ and $\vec{b} = b_1\hat{i} + b_2\hat{j} + b_3\hat{k}$:
$$\vec{a} \cdot \vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$$

**Properties of Dot Product:**
- $\vec{a} \cdot \vec{a} = |\vec{a}|^2$
- $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}$ (commutative)
- $\vec{a} \cdot (\vec{b} + \vec{c}) = \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c}$
- $\hat{i} \cdot \hat{i} = \hat{j} \cdot \hat{j} = \hat{k} \cdot \hat{k} = 1$
- $\hat{i} \cdot \hat{j} = \hat{j} \cdot \hat{k} = \hat{k} \cdot \hat{i} = 0$ (orthogonal unit vectors)

**NDA Worked Example:**
Find $\vec{a} \cdot \vec{b}$ when $\vec{a} = 3\hat{i} - 2\hat{j} + \hat{k}$ and $\vec{b} = \hat{i} + 4\hat{j} - 2\hat{k}$.
$$\vec{a} \cdot \vec{b} = 3(1) + (-2)(4) + (1)(-2) = 3 - 8 - 2 = -7$$

**Vector (Cross) Product**

The cross product $\vec{a} \times \vec{b}$ produces a vector perpendicular to both $\vec{a}$ and $\vec{b}$:
$$\vec{a} \times \vec{b} = |\vec{a}||\vec{b}|\sin\theta \ \hat{n}$$
where $\hat{n}$ is the unit normal vector given by the right-hand rule.

In determinant form:
$$\vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix} = (a_2 b_3 - a_3 b_2)\hat{i} - (a_1 b_3 - a_3 b_1)\hat{j} + (a_1 b_2 - a_2 b_1)\hat{k}$$

**Properties of Cross Product:**
- $\vec{a} \times \vec{b} = -\vec{b} \times \vec{a}$ (anti-commutative)
- $\vec{a} \times (\vec{b} + \vec{c}) = \vec{a} \times \vec{b} + \vec{a} \times \vec{c}$
- $|\vec{a} \times \vec{b}| = |\vec{a}||\vec{b}|\sin\theta$ equals the area of the parallelogram formed by $\vec{a}$ and $\vec{b}$
- $\vec{a} \times \vec{a} = \vec{0}$
- $\hat{i} \times \hat{j} = \hat{k},\ \hat{j} \times \hat{k} = \hat{i},\ \hat{k} \times \hat{i} = \hat{j}$

**NDA Worked Example:**
Find the area of the parallelogram with adjacent sides $\vec{a} = \hat{i} + 2\hat{j} - \hat{k}$ and $\vec{b} = 3\hat{i} - \hat{j} + 2\hat{k}$.
$$\vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 1 & 2 & -1 \\ 3 & -1 & 2 \end{vmatrix} = (2(2)-(-1)(-1))\hat{i} - (1(2)-(-1)(3))\hat{j} + (1(-1)-2(3))\hat{k}$$
$$= (4-1)\hat{i} - (2+3)\hat{j} + (-1-6)\hat{k} = 3\hat{i} - 5\hat{j} - 7\hat{k}$$
$$|\vec{a} \times \vec{b}| = \sqrt{9 + 25 + 49} = \sqrt{83} \text{ square units}$$

**Angle Between Two Vectors:**
$$\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|} = \frac{a_1 b_1 + a_2 b_2 + a_3 b_3}{\sqrt{a_1^2 + a_2^2 + a_3^2}\sqrt{b_1^2 + b_2^2 + b_3^2}}$$

**Projection of $\vec{a}$ on $\vec{b}$:**
$$\text{proj}_{\vec{b}} \vec{a} = \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|}$$

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory, derivations, and advanced problem types for thorough NDA preparation.

**Scalar Triple Product**

The scalar triple product of $\vec{a}$, $\vec{b}$, $\vec{c}$ is:
$$[\vec{a} \ \vec{b} \ \vec{c}] = \vec{a} \cdot (\vec{b} \times \vec{c})$$

It equals the volume of the parallelepiped having $\vec{a}$, $\vec{b}$, $\vec{c}$ as adjacent edges.

In determinant form:
$$\vec{a} \cdot (\vec{b} \times \vec{c}) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}$$

**Properties:**
- $[\vec{a} \ \vec{b} \ \vec{c}] = [\vec{b} \ \vec{c} \ \vec{a}] = [\vec{c} \ \vec{a} \ \vec{b}]$ (cyclic permutation leaves value unchanged)
- $[\vec{a} \ \vec{b} \ \vec{c}] = -[\vec{b} \ \vec{a} \ \vec{c}]$ (swapping two vectors changes sign)
- $[\vec{a} \ \vec{b} \ \vec{c}] = 0$ if any two vectors are parallel or if the three vectors are coplanar

**NDA Worked Example:**
Find the volume of the parallelepiped with edges $\vec{a} = \hat{i} - \hat{j}$, $\vec{b} = 2\hat{i} + \hat{j} - \hat{k}$, $\vec{c} = 3\hat{i} - 2\hat{k}$.
$$[\vec{a} \ \vec{b} \ \vec{c}] = \begin{vmatrix} 1 & -1 & 0 \\ 2 & 1 & -1 \\ 3 & 0 & -2 \end{vmatrix} = 1[1(-2)-(-1)(0)] - (-1)[2(-2)-(-1)(3)] + 0$$
$$= 1[-2 - 0] + 1[-4 + 3] = -2 - 1 = -3$$
Volume $= |[\vec{a} \ \vec{b} \ \vec{c}]| = 3$ cubic units.

**Vector Triple Product**

The vector triple product formula:
$$\vec{a} \times (\vec{b} \times \vec{c}) = \vec{b}(\vec{a} \cdot \vec{c}) - \vec{c}(\vec{a} \cdot \vec{b})$$

This result appears in physics problems involving magnetic fields and rotational dynamics.

**Application: Coplanarity of Four Points**

Points $A$, $B$, $C$, $D$ are coplanar if and only if $(\vec{AB} \times \vec{AC}) \cdot \vec{AD} = 0$, i.e. the scalar triple product of $\vec{AB}$, $\vec{AC}$, $\vec{AD}$ equals zero.

**Straight Line and Plane Problems in NDA**

Given two vectors $\vec{a}$ and $\vec{b}$ representing sides of a parallelogram:
- Diagonal 1: $\vec{a} + \vec{b}$
- Diagonal 2: $\vec{a} - \vec{b}$

The area of the parallelogram is $|\vec{a} \times \vec{b}|$.
The area of the triangle with the same edges is $\frac{1}{2}|\vec{a} \times \vec{b}|$.

**NDA Worked Example (2020):**
Given $\vec{a} = 2\hat{i} + \hat{j} - \hat{k}$ and $\vec{b} = \hat{i} - \hat{j} + 2\hat{k}$, find the angle between them.
$$\vec{a} \cdot \vec{b} = 2(1) + 1(-1) + (-1)(2) = 2 - 1 - 2 = -1$$
$$|\vec{a}| = \sqrt{4+1+1} = \sqrt{6}, \quad |\vec{b}| = \sqrt{1+1+4} = \sqrt{6}$$
$$\cos\theta = \frac{-1}{\sqrt{6} \cdot \sqrt{6}} = \frac{-1}{6} \Rightarrow \theta = \cos^{-1}\left(-\frac{1}{6}\right) \approx 99.59°$$

**Previous Year NDA Question Patterns:**

| Year | Topic Asked |
|---|---|
| 2022 | Find magnitude of a vector; dot product of two vectors |
| 2021 | Cross product; area of parallelogram |
| 2020 | Angle between vectors using dot product; projection |
| 2019 | Scalar triple product; volume of parallelepiped |
| 2018 | Verify coplanarity of four points; unit vector perpendicular to two given vectors |

Vector Algebra typically yields 4–6 questions per NDA paper, particularly from dot product, cross product, and magnitude calculations. Always represent vectors in component form first — this makes all subsequent operations straightforward. The scalar triple product determinant method is a reliable technique that avoids errors in computing cross products of cross products.