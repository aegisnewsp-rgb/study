---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-022
topicName: Vector Algebra
weight: 3
country: india
generated: "2026-03-29T05:06:31"
lastUpdated: "2026-07-09"
---

# Vector Algebra

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **vector** is a directed quantity defined by both magnitude and direction, written as $\vec{a} = a_1\hat{i} + a_2\hat{j} + a_3\hat{k}$, while a **scalar** has only magnitude. The **magnitude** of $\vec{a} = (x, y, z)$ is $|\vec{a}| = \sqrt{x^2 + y^2 + z^2}$ and the corresponding **unit vector** is $\hat{a} = \vec{a}/|\vec{a}|$. The **dot product** $\vec{a}\cdot\vec{b} = a_1b_1 + a_2b_2 + a_3b_3 = |\vec{a}||\vec{b}|\cos\theta$ returns a scalar, and the **cross product** $\vec{a}\times\vec{b}$ returns a vector perpendicular to both, with magnitude $|\vec{a}||\vec{b}|\sin\theta$.

- **Perpendicularity check:** $\vec{a}\cdot\vec{b} = 0$ for non-zero vectors.
- **Coplanarity of three vectors:** scalar triple product $\vec{a}\cdot(\vec{b}\times\vec{c}) = 0$.
- **CUET focus:** MCQs on unit vectors, section formula, area of triangle $=\tfrac{1}{2}|\vec{a}\times\vec{b}|$, and volume of parallelepiped.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Types of vectors and representation

Vectors in 3D space are written as ordered triples $(x, y, z)$ or as linear combinations of orthonormal basis vectors $\hat{i}, \hat{j}, \hat{k}$. A **zero vector** has all components zero, a **unit vector** has magnitude 1, and two vectors are **equal** when their corresponding components match. Vectors are **parallel** when one is a scalar multiple of the other, and three vectors are **coplanar** when they lie in the same plane.

#### Operations and key properties

Vector addition follows the **triangle law** (head-to-tail) or the **parallelogram law** (diagonal of the parallelogram formed by the two vectors). For $\vec{a} = (a_1, a_2, a_3)$ and $\vec{b} = (b_1, b_2, b_3)$:

| Operation | Formula | Result type |
|---|---|---|
| Addition | $\vec{a}+\vec{b} = (a_1+b_1, a_2+b_2, a_3+b_3)$ | Vector |
| Scalar multiplication | $k\vec{a} = (ka_1, ka_2, ka_3)$ | Vector |
| Dot product | $\vec{a}\cdot\vec{b} = a_1b_1+a_2b_2+a_3b_3$ | Scalar |
| Cross product | $\vec{a}\times\vec{b}$ (determinant form) | Vector |

Addition and scalar multiplication satisfy commutativity, associativity, and distributivity.

#### Section formula and applications

For points with position vectors $\vec{r_1}$ and $\vec{r_2}$, a point dividing the segment in ratio $m:n$ internally has position vector $\vec{r} = \dfrac{n\vec{r_1} + m\vec{r_2}}{m+n}$; for external division the same form applies with a minus sign. The **scalar triple product** $\vec{a}\cdot(\vec{b}\times\vec{c})$ equals the signed volume of the parallelepiped whose edges are $\vec{a}, \vec{b}, \vec{c}$, and equals zero precisely when the three vectors are coplanar.

> **Exam trap:** $\vec{a}\cdot\vec{b} = 0$ signals perpendicularity, not parallelism. Many CUET MCQs flip this sign convention to test whether you read carefully.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Cross product mechanics and direction

The cross product $\vec{a}\times\vec{b}$ is computed as the determinant
$$\vec{a}\times\vec{b} = \begin{vmatrix}\hat{i} & \hat{j} & \hat{k}\\ a_1 & a_2 & a_3\\ b_1 & b_2 & b_3\end{vmatrix}$$
and points along the direction given by the **right-hand rule**. It is **anti-commutative** ($\vec{a}\times\vec{b} = -(\vec{b}\times\vec{a})$), so swapping the order flips the sign. Geometrically, $|\vec{a}\times\vec{b}|$ equals the area of the parallelogram spanned by $\vec{a}$ and $\vec{b}$, so the area of a triangle with adjacent sides $\vec{a}$ and $\vec{b}$ is $\tfrac{1}{2}|\vec{a}\times\vec{b}|$.

#### Direction cosines and projection

For a vector $\vec{a}$, the **direction cosines** $(\ell, m, n)$ satisfy $\ell = \cos\alpha = a_1/|\vec{a}|$, $m = \cos\beta = a_2/|\vec{a}|$, $n = \cos\gamma = a_3/|\vec{a}|$, with the constraint $\ell^2 + m^2 + n^2 = 1$. The **scalar projection** of $\vec{b}$ on $\vec{a}$ is $\vec{b}\cdot\hat{a} = |\vec{b}|\cos\theta$, while the **vector projection** is $(\vec{b}\cdot\hat{a})\hat{a}$.

#### Common mistakes and edge cases

- Treating the scalar triple product as a vector (it is a scalar; its sign indicates orientation).
- Using $\cos\theta$ instead of $\sin\theta$ in $|\vec{a}\times\vec{b}|$.
- Forgetting the negative sign in the external section formula, yielding a point on the wrong side.
- Assuming zero dot product always means perpendicular — true only for non-zero vectors.

#### Worked micro-example

Let $\vec{a} = (1, 2, 3)$ and $\vec{b} = (4, -1, 2)$. Then $\vec{a}\cdot\vec{b} = 4 - 2 + 6 = 8$, $\vec{a}\times\vec{b} = (7, 10, -9)$, and $|\vec{a}\times\vec{b}| = \sqrt{49+100+81} = \sqrt{230}$. Area of the triangle formed by adjacent sides $\vec{a}$ and $\vec{b}$ is $\tfrac{1}{2}\sqrt{230}$.

#### Practice prompts

1. Find a unit vector perpendicular to both $(2, -1, 3)$ and $(1, 0, -2)$ using the cross product and verify its magnitude.
2. Determine whether the vectors $(1, 2, 3)$, $(2, 1, 4)$, $(3, 0, 5)$ are coplanar by evaluating the scalar triple product.

> **CUET strategy:** this 3% topic delivers 1–2 free marks if you memorise the dot/cross formulas and the coplanarity condition. Solve them last in your Mathematics section when time is short.

---

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Vector Algebra" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
