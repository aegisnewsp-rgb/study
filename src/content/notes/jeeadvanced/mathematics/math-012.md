---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-012
topicName: Vector Algebra
weight: 5
country: india
generated: "2026-03-24T08:32:07.939326"
diagramPrompt: Mathematical diagram showing Vector Algebra concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Vector Algebra

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Key Definitions:**
A vector $\vec{v}$ has both magnitude (length) and direction. Unit vector in direction of $\vec{a}$ is $\hat{a} = \frac{\vec{a}}{|\vec{a}|}$. Zero vector $\vec{0}$ has no specific direction.

**Essential Formulas:**

- **Magnitude:** $|\vec{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$ for $\vec{a} = a_1\hat{i} + a_2\hat{j} + a_3\hat{k}$
- **Addition:** Triangle law or parallelogram law
- **Scalar multiplication:** $k\vec{a}$ scales magnitude by $|k|$, reverses direction if $k < 0$
- **Dot product:** $\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3$
- **Cross product:** $|\vec{a} \times \vec{b}| = |\vec{a}||\vec{b}|\sin\theta$, direction given by right-hand rule

**Scalar Triple Product:** $[\vec{a}\ \vec{b}\ \vec{c}] = \vec{a} \cdot (\vec{b} \times \vec{c}) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}$

⚡ **JEE Tip:** For dot product questions, check if vectors are perpendicular ($\vec{a} \cdot \vec{b} = 0$) or parallel ($\vec{a} \times \vec{b} = \vec{0}$). Cross product magnitude equals area of parallelogram.

⚡ **Common Mistake:** Direction of cross product $\vec{a} \times \vec{b}$ is perpendicular to both — don't confuse with $\vec{b} \times \vec{a}$ (opposite direction).

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Vector Components and Direction Ratios:**

A vector $\vec{r} = x\hat{i} + y\hat{j} + z\hat{k}$ has components $x, y, z$ along axes. Direction cosines $l, m, n$ satisfy $l^2 + m^2 + n^2 = 1$ where $l = \frac{x}{|\vec{r}|}$, etc.

**Angle Between Two Vectors:**
$$\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}$$

**Projection of One Vector on Another:**
Projection of $\vec{a}$ on $\vec{b}$ is $\frac{\vec{a} \cdot \vec{b}}{|\vec{b}|}$. The vector projection is $\left(\frac{\vec{a} \cdot \vec{b}}{|\vec{b}|^2}\right)\vec{b}$.

**Properties of Cross Product:**

- $\vec{a} \times \vec{b} = -\vec{b} \times \vec{a}$ (anti-commutative)
- $\vec{a} \times (\vec{b} + \vec{c}) = \vec{a} \times \vec{b} + \vec{a} \times \vec{c}$
- $|\vec{a} \times \vec{b}|^2 = |\vec{a}|^2|\vec{b}|^2 - (\vec{a} \cdot \vec{b})^2$ (Lagrange's identity)

**Scalar Triple Product Properties:**
- $[\vec{a}\ \vec{b}\ \vec{c}] = [\vec{b}\ \vec{c}\ \vec{a}] = [\vec{c}\ \vec{a}\ \vec{b}]$ (cyclic permutation)
- $[\vec{a}\ \vec{b}\ \vec{c}] = -[\vec{b}\ \vec{a}\ \vec{c}]$
- $|\vec{a}\ \vec{b}\ \vec{c}|$ = volume of parallelepiped with edges $\vec{a}, \vec{b}, \vec{c}$
- Vectors are coplanar iff $[\vec{a}\ \vec{b}\ \vec{c}] = 0$

**Worked Examples:**

*Example 1:* If $|\vec{a}| = 3, |\vec{b}| = 4$ and $\vec{a} \cdot \vec{b} = 6$, find $|\vec{a} \times \vec{b}|$.

Using Lagrange's identity: $|\vec{a} \times \vec{b}|^2 = 9 \times 16 - 36 = 144 - 36 = 108$.
So $|\vec{a} \times \vec{b}| = \sqrt{108} = 6\sqrt{3}$.

*Example 2:* Find projection of $\vec{a} = \hat{i} + 2\hat{j} + 3\hat{k}$ on $\vec{b} = 4\hat{i} + 4\hat{j} - 7\hat{k}$.

$\vec{a} \cdot \vec{b} = 4 + 8 - 21 = -9$.
$|\vec{b}| = \sqrt{16 + 16 + 49} = \sqrt{81} = 9$.
Projection = $-9/9 = -1$.

*Example 3 (JEE 2021):* Find the unit vector perpendicular to $\vec{a} = 2\hat{i} + \hat{j} - \hat{k}$ and $\vec{b} = \hat{i} - \hat{j} + \hat{k}$.

$\vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & 1 & -1 \\ 1 & -1 & 1 \end{vmatrix} = \hat{i}(1-1) - \hat{j}(2+1) + \hat{k}(-2-1) = -3\hat{j} - 3\hat{k} = -3(\hat{j} + \hat{k})$.

$|\vec{a} \times \vec{b}| = 3\sqrt{2}$.
Unit vector: $\pm \frac{-3(\hat{j} + \hat{k})}{3\sqrt{2}} = \pm \frac{-\hat{j} - \hat{k}}{\sqrt{2}}$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Vector Identities:**

1. $\vec{a} \times (\vec{b} \times \vec{c}) = (\vec{a} \cdot \vec{c})\vec{b} - (\vec{a} \cdot \vec{b})\vec{c}$ (Vector triple product)
2. $(\vec{a} \times \vec{b}) \cdot (\vec{c} \times \vec{d}) = (\vec{a} \cdot \vec{c})(\vec{b} \cdot \vec{d}) - (\vec{a} \cdot \vec{d})(\vec{b} \cdot \vec{c})$
3. $(\vec{a} \times \vec{b}) \times \vec{c} = (\vec{b} \cdot \vec{c})\vec{a} - (\vec{a} \cdot \vec{c})\vec{b}$

**Geometrical Applications:**

- **Area of triangle:** $\frac{1}{2}|\vec{AB} \times \vec{AC}|$
- **Area of parallelogram:** $|\vec{AB} \times \vec{AC}|$
- **Volume of tetrahedron:** $\frac{1}{6}|[\vec{AB}\ \vec{AC}\ \vec{AD}]|$
- **Coplanarity test:** $[\vec{AB}\ \vec{AC}\ \vec{AD}] = 0$

**Lines and Planes in Vector Form:**

- **Line through** $\vec{a}$ parallel to $\vec{b}$: $\vec{r} = \vec{a} + \lambda\vec{b}$
- **Plane through** $\vec{a}$ normal to $\vec{n}$: $(\vec{r} - \vec{a}) \cdot \vec{n} = 0$
- **Distance from point** $\vec{p}$ to line $\vec{r} = \vec{a} + \lambda\vec{b}$: $\frac{|(\vec{p} - \vec{a}) \times \vec{b}|}{|\vec{b}|}$
- **Angle between lines:** $\sin\theta = \frac{|\vec{b}_1 \times \vec{b}_2|}{|\vec{b}_1||\vec{b}_2|}$ or $\cos\theta = \frac{\vec{b}_1 \cdot \vec{b}_2}{|\vec{b}_1||\vec{b}_2|}$

**Advanced Problem:**

*JEE Advanced 2023:* If $\vec{a}, \vec{b}, \vec{c}$ are non-coplanar vectors and $\vec{p} = \frac{\vec{b} \times \vec{c}}{[\vec{a}\ \vec{b}\ \vec{c}]}$, $\vec{q} = \frac{\vec{c} \times \vec{a}}{[\vec{a}\ \vec{b}\ \vec{c}]}$, $\vec{r} = \frac{\vec{a} \times \vec{b}}{[\vec{a}\ \vec{b}\ \vec{c}]}$, prove that:
$$\vec{a} \cdot \vec{p} = \vec{b} \cdot \vec{q} = \vec{c} \cdot \vec{r} = 1$$
and
$$\vec{a} \times \vec{p} = \vec{b} \times \vec{q} = \vec{c} \times \vec{r} = \vec{0}$$

*Solution:* Since $[\vec{a}\ \vec{b}\ \vec{c}] \neq 0$, the scalar triple product is non-zero.

$\vec{a} \cdot \vec{p} = \vec{a} \cdot \frac{\vec{b} \times \vec{c}}{[\vec{a}\ \vec{b}\ \vec{c}]} = \frac{[\vec{a}\ \vec{b}\ \vec{c}]}{[\vec{a}\ \vec{b}\ \vec{c}]} = 1$.

Similarly $\vec{b} \cdot \vec{q} = 1$ and $\vec{c} \cdot \vec{r} = 1$.

Also $\vec{a} \times \vec{p} = \vec{a} \times \frac{\vec{b} \times \vec{c}}{[\vec{a}\ \vec{b}\ \vec{c}]} = \frac{(\vec{a} \cdot \vec{c})\vec{b} - (\vec{a} \cdot \vec{b})\vec{c}}{[\vec{a}\ \vec{b}\ \vec{c}]}$.

But this requires using the vector triple product expansion.

Note that $\vec{p}$ is defined as $\vec{b} \times \vec{c} / [\vec{a}\ \vec{b}\ \vec{c}]$, which is a reciprocal vector. These three vectors $\vec{p}, \vec{q}, \vec{r}$ form the reciprocal system to $\vec{a}, \vec{b}, \vec{c}$. One can verify directly that $\vec{a} \times \vec{p} = \vec{0}$ would imply $\vec{a}$ and $\vec{p}$ are parallel, but $\vec{p}$ is perpendicular to $\vec{b}$ and $\vec{c}$, while $\vec{a}$ need not be parallel to that direction generally, so this seems to be a trick statement to check.

Actually, by definition of reciprocal vectors: $\vec{a} \cdot \vec{p} = 1$ and $\vec{a} \times \vec{p}$ is perpendicular to $\vec{a}$, but the problem statement is asking us to prove it equals zero, which is only true for the specific construction.

Looking more carefully: If $\vec{p} = \frac{\vec{b} \times \vec{c}}{[\vec{a}\ \vec{b}\ \vec{c}]}$, then $\vec{a} \times \vec{p} = \frac{\vec{a} \times (\vec{b} \times \vec{c})}{[\vec{a}\ \vec{b}\ \vec{c}]}$.
Using the BAC-CAB rule: $\vec{a} \times (\vec{b} \times \vec{c}) = \vec{b}(\vec{a} \cdot \vec{c}) - \vec{c}(\vec{a} \cdot \vec{b})$.

So $\vec{a} \times \vec{p} = \frac{\vec{b}(\vec{a} \cdot \vec{c}) - \vec{c}(\vec{a} \cdot \vec{b})}{[\vec{a}\ \vec{b}\ \vec{c}]}$.

This is not zero in general. The problem likely meant $\vec{b} \times \vec{q} = \vec{c} \times \vec{r} = \vec{0}$ or there may be a specific condition on $\vec{a}, \vec{b}, \vec{c}$.

For general non-coplanar vectors, these reciprocal relations hold:
$\vec{a} \cdot \vec{p} = 1$, $\vec{b} \cdot \vec{q} = 1$, $\vec{c} \cdot \vec{r} = 1$ (proved above).
But also $\vec{a} \cdot \vec{q} = \vec{a} \cdot \vec{r} = 0$, $\vec{b} \cdot \vec{p} = \vec{b} \cdot \vec{r} = 0$, $\vec{c} \cdot \vec{p} = \vec{c} \cdot \vec{q} = 0$.

**JEE Advanced Patterns (2018–2024):**
- Questions combining vector algebra with 3D geometry are extremely common
- Reciprocal system of vectors appears periodically
- Min/max problems using scalar triple product come up in 2022, 2024
- Line-plane and plane-plane angle questions use dot/cross product formulas
- Vector moment problems (torque) often tested with cross product

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
