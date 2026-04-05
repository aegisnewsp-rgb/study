---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-11
topicName: Vectors in 2D and 3D
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.069493"
diagramPrompt: "Mathematical diagram showing Vectors in 2D and 3D concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"

---

# Vectors in 2D and 3D

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT exam.

A **vector** has both magnitude (length) and direction. A **scalar** has only magnitude. Vectors are essential in physics and engineering — force, velocity, acceleration, and electric fields are all vectors.

**Vector Representation:**
- In 2D: $\vec{A} = a\hat{i} + b\hat{j}$, magnitude $|\vec{A}| = \sqrt{a^2 + b^2}$
- In 3D: $\vec{A} = a\hat{i} + b\hat{j} + c\hat{k}$, magnitude $|\vec{A}| = \sqrt{a^2 + b^2 + c^2}$
- Unit vector in direction of $\vec{A}$: $\hat{A} = \frac{\vec{A}}{|\vec{A}|}$

**Basic Operations:**
- Addition: $\vec{A} + \vec{B} = (a_1+a_2)\hat{i} + (b_1+b_2)\hat{j}$
- Subtraction: $\vec{A} - \vec{B} = (a_1-a_2)\hat{i} + (b_1-b_2)\hat{j}$
- Scalar multiplication: $k\vec{A} = ka\hat{i} + kb\hat{j}$ (scales magnitude by $|k|$, reverses if $k < 0$)

**Dot (Scalar) Product:**
$$\vec{A} \cdot \vec{B} = |\vec{A}||\vec{B}|\cos\theta = a_1a_2 + b_1b_2 + c_1c_2$$
- $\vec{A} \cdot \vec{B} = 0$ → perpendicular (orthogonal)
- $\vec{A} \cdot \vec{A} = |\vec{A}|^2$

**Cross (Vector) Product:**
$$|\vec{A} \times \vec{B}| = |\vec{A}||\vec{B}|\sin\theta$$
Direction by right-hand rule. In Cartesian:
$$\vec{A} \times \vec{B} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \end{vmatrix}$$

**⚡ ECAT exam tips:**
- The cross product is NOT commutative: $\vec{A} \times \vec{B} = -\vec{B} \times \vec{A}$
- The dot product IS commutative: $\vec{A} \cdot \vec{B} = \vec{B} \cdot \vec{A}$
- $\vec{A} \cdot \vec{B} = 0$ means perpendicular (cos 90° = 0)
- $|\vec{A} \times \vec{B}| = 0$ means parallel (sin 0° = 0)

---

### 🟡 Standard — Regular Study (2d–2mo)
> For ECAT students who want genuine understanding of vectors.

**Scalar Triple Product:**

$$\vec{A} \cdot (\vec{B} \times \vec{C}) = \begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix}$$

Properties:
- Cyclic permutation doesn't change value: $\vec{A} \cdot (\vec{B} \times \vec{C}) = \vec{B} \cdot (\vec{C} \times \vec{A}) = \vec{C} \cdot (\vec{A} \times \vec{B})$
- If $\vec{A} \cdot (\vec{B} \times \vec{C}) = 0$, the three vectors are coplanar

**Vector Triple Product:**
$$\vec{A} \times (\vec{B} \times \vec{C}) = \vec{B}(\vec{A} \cdot \vec{C}) - \vec{C}(\vec{A} \cdot \vec{B})$$

This is an important identity. Note that it's NOT associative: $\vec{A} \times (\vec{B} \times \vec{C}) \neq (\vec{A} \times \vec{B}) \times \vec{C}$.

**Angle Between Two Vectors:**
$$\cos\theta = \frac{\vec{A} \cdot \vec{B}}{|\vec{A}||\vec{B}|} = \frac{a_1a_2 + b_1b_2 + c_1c_2}{\sqrt{a_1^2+b_1^2+c_1^2}\sqrt{a_2^2+b_2^2+c_2^2}}$$

**Projection of One Vector onto Another:**

The scalar projection (component) of $\vec{A}$ onto $\vec{B}$:
$$\text{comp}_{\vec{B}} \vec{A} = \frac{\vec{A} \cdot \vec{B}}{|\vec{B}|}$$

The vector projection of $\vec{A}$ onto $\vec{B}$:
$$\text{proj}_{\vec{B}} \vec{A} = \left(\frac{\vec{A} \cdot \vec{B}}{|\vec{B}|^2}\right) \vec{B}$$

**⚡ Common student mistakes:**
1. Confusing dot product and cross product — dot product gives a scalar, cross product gives a vector
2. Forgetting the right-hand rule for cross product direction
3. Using the wrong sign when calculating cross product determinants
4. For scalar triple product: not recognizing that it gives the volume of the parallelepiped formed by three vectors

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for ECAT mastery of vector algebra.

**Vector Addition — Triangle and Parallelogram Laws:**

**Triangle law**: To add $\vec{A}$ and $\vec{B}$, place the tail of $\vec{B}$ at the head of $\vec{A}$. The resultant $\vec{R} = \vec{A} + \vec{B}$ is the vector from the tail of $\vec{A}$ to the head of $\vec{B}$.

**Parallelogram law**: Place $\vec{A}$ and $\vec{B}$ with common tail. Complete the parallelogram. The resultant is the diagonal from the common tail.

**Magnitude of sum and difference:**
$$|\vec{A} + \vec{B}|^2 = |\vec{A}|^2 + |\vec{B}|^2 + 2\vec{A}\cdot\vec{B}$$
$$|\vec{A} - \vec{B}|^2 = |\vec{A}|^2 + |\vec{B}|^2 - 2\vec{A}\cdot\vec{B}$$

**Direction Cosines:**

For a vector $\vec{A} = a\hat{i} + b\hat{j} + c\hat{k}$:
Direction cosines: $l = \cos\alpha = \frac{a}{|\vec{A}|}$, $m = \cos\beta = \frac{b}{|\vec{A}|}$, $n = \cos\gamma = \frac{c}{|\vec{A}|}$
Note: $l^2 + m^2 + n^2 = 1$.

**Line and Plane in Vector Form:**

**Equation of a line** passing through point with position vector $\vec{a}$ with direction $\vec{b}$:
$$\vec{r} = \vec{a} + t\vec{b}$$
or parametric: $x = a_1 + tb_1$, $y = a_2 + tb_2$, $z = a_3 + tb_3$.

**Equation of a plane** passing through point $\vec{a}$ with normal $\vec{n}$:
$$\vec{n} \cdot (\vec{r} - \vec{a}) = 0$$

**Distance from a point to a line (3D):**
For point $P$ to line through $A$ with direction $\vec{b}$:
$$d = \frac{|\vec{b} \times (\vec{A} - \vec{P})|}{|\vec{b}|}$$

**Distance from a point to a plane:**
For point $(x_1,y_1,z_1)$ to plane $ax + by + cz + d = 0$:
$$d = \frac{|ax_1 + by_1 + cz_1 + d|}{\sqrt{a^2 + b^2 + c^2}}$$

**Coplanarity of Four Points:**

Four points $A, B, C, D$ (with position vectors $\vec{a}, \vec{b}, \vec{c}, \vec{d}$) are coplanar if:
$$(\vec{b} - \vec{a}) \cdot [(\vec{c} - \vec{a}) \times (\vec{d} - \vec{a})] = 0$$

**Work Done by a Force:**

Work done by force $\vec{F}$ moving an object from position $\vec{r_1}$ to $\vec{r_2}$:
$$W = \vec{F} \cdot (\vec{r_2} - \vec{r_1})$$

**Angular Velocity:**

A particle rotating with angular velocity $\vec{\omega}$ has linear velocity:
$$\vec{v} = \vec{\omega} \times \vec{r}$$
This is a key result in rotational mechanics.

**ECAT Previous Year Patterns:**
- Dot product and cross product: very common
- Angle between vectors: common
- Magnitude calculations: common
- Scalar and vector projections: periodic
- 3D vector geometry: occasionally tested

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
