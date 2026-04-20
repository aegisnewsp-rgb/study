---
exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-16
topicName: Vectors in Two Dimensions
weight: 3
country: ng
generated: "2026-03-24T08:32:07.739451"
diagramPrompt: "Vector diagram in 2D showing vector components, magnitude and direction, angle with horizontal axis, head-to-tail addition method, clean black and white style"
---

# Vectors in Two Dimensions

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Vectors in Two Dimensions — Quick Facts**

A **vector** is a quantity that has both **magnitude** (size/length) and **direction**. A **scalar** has only magnitude. Speed is scalar; velocity is vector.

**Key formulas to memorise right now:**
- Magnitude: $|\\vec{a}| = \\sqrt{x^2 + y^2}$
- Direction: $\\tan \\theta = \\frac{y}{x}$
- Dot product: $\\vec{a} \\cdot \vec{b} = x_1x_2 + y_1y_2 = |\\vec{a}||\\vec{b}|\\cos\\theta$
- Unit vectors: $\\⃗{i} = (1, 0)$ along x-axis, $\⃗{j} = (0, 1)$ along y-axis
- Scalar multiplication: $k\\⃗{a}$ stretches by factor $k$, reverses direction if $k < 0$

⚡ **Exam tip:** JAMB often asks you to find the angle between two vectors using the dot product formula. Memorise $\\cos\\theta = \\frac{\\⃗{a} \\cdot \⃗{b}}{|\\⃗{a}||\\⃗{b}|}$. Units vectors $\⃗{i}$ and $\⃗{j}$ are perpendicular — their dot product is zero.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## What Is a Vector?

A **vector** in two dimensions is a directed line segment — an arrow with a specific length (magnitude) and pointing in a specific direction. It lives in the 2D Cartesian plane and is written using notation like $\\⃗{a}$, $\\⃗{AB}$, or component form $(x, y)$.

A **scalar** is just a number — it has magnitude only, no direction. Mass, temperature, speed (not velocity), and time are scalars. Distance is scalar; displacement is vector.

**Key distinction:** Two vectors are equal if they have the same magnitude **and** the same direction. They can start at different points and still be equal (free vectors). Position vectors, however, are anchored to the origin.

## Vector Representation

A vector $\\⃗{v}$ in the Cartesian plane is written as:
$$\\⃗{v} = x\⃗{i} + y\⃗{j}$$

where:
- $x$ is the **x-component** (horizontal displacement)
- $y$ is the **y-component** (vertical displacement)
- $\⃗{i}$ is the unit vector along the x-axis: $\⃗{i} = (1, 0)$
- $\⃗{j}$ is the unit vector along the y-axis: $\⃗{j} = (0, 1)$

The **magnitude** (length) of $\⃗{v}$ is:
$$|\\vec{v}| = \\sqrt{x^2 + y^2}$$

The **direction** — the angle $\\⃗{v}$ makes with the positive x-axis — is:
$$\\tan \\theta = \\frac{y}{x} \\quad \\Rightarrow \\quad \\theta = \\tan^{-1}\\left(\\frac{y}{x}\\right)$$

> **Important:** Always check which quadrant the vector is in. $\\ tan^{-1}$ gives an angle in the first quadrant; adjust by $\\pm 180°$ if the vector lies in QII, QIII, or QIV. JAMB MCQs often test this trap.

**Notation reminders:**
- $\\⃗{AB}$ means the vector from point A to point B
- $|\\⃗{AB}|$ is the magnitude (length) of $\⃗{AB}$
- $\\⃗{a} = \\vec{a}$

## Types of Vectors

| Type | Description |
|---|---|
| **Equal vectors** | Same magnitude and same direction (even if at different positions) |
| **Parallel vectors** | Point in the same or exactly opposite direction; $\⃗{a} = k\⃗{b}$ for some scalar $k > 0$ |
| **Antiparallel vectors** | Point in exactly opposite directions; $\⃗{a} = k\⃗{b}$ with $k < 0$ |
| **Zero vector** | $\⃗{0} = (0, 0)$; no magnitude, no direction — it's the identity for addition |
| **Unit vector** | Magnitude equals 1; used to indicate direction. $\\⃗{i} = (1, 0)$ and $\⃗{j} = (0, 1)$ are the standard unit vectors |

A **unit vector** in the direction of $\⃗{a}$ is:
$$\\hat{\\vec{a}} = \\frac{\\⃗{a}}{|\\⃗{a}|}$$

## Vector Addition

Vectors are added component-wise:
$$\\⃗{a} + \⃗{b} = (a_x + b_x,\\ a_y + b_y)$$

Two laws govern vector addition:

**1. Triangle Law:** Place the tail of $\⃗{b}$ at the head of $\⃗{a}$. The resultant vector goes from the tail of $\⃗{a}$ to the head of $\⃗{b}$. The three vectors form a triangle.

**2. Parallelogram Law:** Place both vectors tail-to-tail (at the same origin). Complete the parallelogram. The resultant is the diagonal from the common tail to the opposite corner.

**Head-to-tail method** is the same idea as the triangle law — it's the most common method in JAMB questions. Draw $\⃗{a}$, then draw $\⃗{b}$ starting from the tip of $\⃗{a}$. The closing vector from the start of $\⃗{a}$ to the end of $\⃗{b}$ is $\⃗{a} + \⃗{b}$.

## Multiplication by a Scalar

Multiplying a vector by a scalar $k$:
$$k\\⃗{a} = (ka_x,\\ ka_y)$$

This scales the magnitude by $|k|$ and:
- Leaves direction unchanged if $k > 0$
- Reverses direction if $k < 0$

For example, if $\⃗{a} = (3, 4)$, then $2\⃗{a} = (6, 8)$ and $-\\⃗{a} = (-3, -4)$.

## Position Vectors

A **position vector** of point $P(x, y)$ is the vector from the origin $O(0, 0)$ to $P$:
$$\\⃗{OP} = x\\⃗{i} + y\\⃗{j} = (x, y)$$

The position vector of point $A(x_1, y_1)$ to point $B(x_2, y_2)$ is:
$$\\⃗{AB} = (x_2 - x_1)\\\⃗{i} + (y_2 - y_1)\\\⃗{j} = (x_2 - x_1,\\ y_2 - y_1)$$

This is also the **displacement vector** from A to B. Note: $\⃗{AB} = -\\⃗{BA}$.

## Dot Product (Scalar Product)

The **dot product** (also called the scalar product) of two vectors produces a scalar, not a vector:
$$\\⃗{a} \\cdot \⃗{b} = |\\⃗{a}||\\⃗{b}|\\cos\\theta = x_1x_2 + y_1y_2$$

Where $\\theta$ is the angle between $\⃗{a}$ and $\⃗{b}$.

**Key properties:**
- If $\\⃗{a} \\cdot \\⃗{b} = 0$, the vectors are **perpendicular** (orthogonal)
- If $\\⃗{a} \\cdot \\⃗{b} = |\\⃗{a}||\\⃗{b}|$, they are in the **same direction**
- If $\\⃗{a} \\cdot \\⃗{b} = -|\\⃗{a}||\\⃗{b}|$, they are in **opposite directions**
- $\\⃗{i} \\cdot \\⃗{i} = 1$, $\\⃗{j} \\cdot \\⃗{j} = 1$, $\\⃗{i} \\cdot \\⃗{j} = 0$ (very useful!)

## Finding the Angle Between Two Vectors

From the dot product formula:
$$\\cos\\theta = \\frac{\\⃗{a} \\cdot \\⃗{b}}{|\\⃗{a}||\\⃗{b}|}$$

Then find $\\theta = \\cos^{-1}\\left(\\frac{\\⃗{a} \\cdot \\⃗{b}}{|\\⃗{a}||\\⃗{b}|}\\right)$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Detailed Vector Operations

### Component Form Deep Dive

When a vector $\⃗{v}$ makes an angle $\theta$ with the positive x-axis, its components are:
$$x = |\\⃗{v}|\\cos\\theta, \\quad y = |\\⃗{v}|\\sin\\theta$$

Conversely:
$$\\⃗{v} = (|\\⃗{v}|\\cos\\theta)\\⃗{i} + (|\\⃗{v}|\\sin\\theta)\\⃗{j}$$

**JAMB frequently asks:** Given magnitude and direction, find components. Given components, find magnitude and direction.

### Worked Example 1 — Finding Magnitude and Direction

**Question:** Find the magnitude and direction of $\\⃗{a} = (3, 4)$.

**Solution:**
- Magnitude: $|\\⃗{a}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$
- Direction: $\\tan\\theta = \\frac{4}{3} = 1.333...$
- $\\theta = \\tan^{-1}(1.333...) = 53.13°$

$\\⃗{a}$ lies in the first quadrant, so no adjustment needed. Answer: magnitude = 5, direction = 53.13°.

### Worked Example 2 — Vector Addition

**Question:** If $\\⃗{a} = (2, 3)$ and $\\⃗{b} = (-1, 5)$, find $\\⃗{a} + \\⃗{b}$.

**Solution:**
$$\\⃗{a} + \⃗{b} = (2 + (-1),\\ 3 + 5) = (1,\\ 8)$$

Using the triangle law: draw $\\⃗{a}$, then draw $\\⃗{b}$ from its head. The closing vector is $(1, 8)$.

### Worked Example 3 — Dot Product

**Question:** Find $\\⃗{a} \\cdot \\⃗{b}$ where $\\⃗{a} = (4, -3)$ and $\\⃗{b} = (2, 5)$.

**Solution:**
$$\\⃗{a} \\cdot \\⃗{b} = (4)(2) + (-3)(5) = 8 - 15 = -7$$

This negative dot product tells us the angle between them is obtuse (> 90°).

### Worked Example 4 — Angle Between Two Vectors (JAMB Classic)

**Question:** Find the angle between $\\⃗{a} = (1, 2)$ and $\\⃗{b} = (3, -1)$. (JAMB 2023 style)

**Solution:**

**Step 1:** Find the dot product.
$$\\⃗{a} \\cdot \\⃗{b} = (1)(3) + (2)(-1) = 3 - 2 = 1$$

**Step 2:** Find magnitudes.
$$|\\⃗{a}| = \\sqrt{1^2 + 2^2} = \\sqrt{5}, \\quad |\\⃗{b}| = \\sqrt{3^2 + (-1)^2} = \\sqrt{10}$$

**Step 3:** Apply the formula.
$$\\cos\\theta = \\frac{\\⃗{a} \\cdot \\⃗{b}}{|\\⃗{a}||\\⃗{b}|} = \\frac{1}{\\sqrt{5} \\cdot \\sqrt{10}} = \\frac{1}{\\sqrt{50}} = \\frac{1}{5\\sqrt{2}}$$

$$\\cos\\theta = \\frac{1}{5\\sqrt{2}} \\approx 0.1414$$

$$\\theta = \\cos^{-1}(0.1414) \\approx 81.9°$$

### Worked Example 5 — Position Vector

**Question:** Find the position vector of point $B(5, -2)$ relative to point $A(1, 4)$.

**Solution:**
$$\\⃗{AB} = (5 - 1)\\⃗{i} + (-2 - 4)\\⃗{j} = 4\\⃗{i} - 6\\⃗{j} = (4, -6)$$

The magnitude is $|\\⃗{AB}| = \\sqrt{4^2 + (-6)^2} = \\sqrt{16 + 36} = \\sqrt{52} = 2\\sqrt{13}$.

### Worked Example 6 — Scalar Multiplication and Parallelism

**Question:** Show that $\\⃗{a} = (6, 9)$ and $\\⃗{b} = (2, 3)$ are parallel.

**Solution:**
$$\\⃗{a} = k\\⃗{b} \\Rightarrow (6, 9) = k(2, 3)$$

$6 = 2k \\Rightarrow k = 3$
$9 = 3k \\Rightarrow k = 3$ ✓

Since the same scalar $k = 3 > 0$ works, $\\⃗{a}$ and $\\⃗{b}$ are parallel and point in the same direction.

---

## 📊 JAMB Topic Weight & Exam Pattern

| Detail | Value |
|---|---|
| Topic weight (Mathematics) | Medium-High |
| Questions from Vectors (est.) | 2–3 per UTME |
| Common question types | Find magnitude, find angle between vectors, dot product, components |
| Trigonometric connection | $\\sin/\\cos$ values; always check quadrant for direction |

Vectors connect closely with **trigonometry** (resolving into components) and **coordinate geometry** (position vectors). Questions sometimes combine all three topics in a single MCQ.

---

## ⚠️ Common Mistakes to Avoid

1. **Confusing speed (scalar) and velocity (vector)** — JAMB uses both in options to trap you. Read carefully.
2. **Wrong quadrant for direction** — $\\tan^{-1}(y/x)$ always gives an acute angle. If the vector is in QII or QIII, add 180°. If in QIV, add 360° or report as a negative angle.
3. **Forgetting the unit vectors in component form** — always express your answer as $x\\⃗{i} + y\\⃗{j}$ or $(x, y)$, not just $x$ and $y$.
4. **Using the wrong dot product formula** — the component formula $x_1x_2 + y_1y_2$ and the geometric formula $|\\⃗{a}||\\⃗{b}|\\cos\\theta$ give the same result. Know both.
5. **Sign errors in position vectors** — $\\⃗{AB} = (x_2 - x_1, y_2 - y_1)$. Swapping the order gives the negative vector.
6. **Assuming perpendicular equals zero dot product is automatic** — verify: $x_1x_2 + y_1y_2 = 0$ confirms perpendicular.
7. **Mixing up the triangle and parallelogram laws** — triangle law is far more commonly tested on JAMB.

---

## 📝 Quick-Reference Formula Sheet

$$\\text{Magnitude: } |\\⃗{v}| = \\sqrt{x^2 + y^2}$$
$$\\text{Direction: } \\tan\\theta = \\frac{y}{x}$$
$$\\text{Unit vector: } \\hat{\\⃗{v}} = \\frac{\\⃗{v}}{|\\⃗{v}|}$$
$$\\text{Dot product: } \\⃗{a} \\cdot \\⃗{b} = x_1x_2 + y_1y_2 = |\\⃗{a}||\\⃗{b}|\\cos\\theta$$
$$\\cos\\theta = \\frac{\\⃗{a} \\cdot \\⃗{b}}{|\\⃗{a}||\\⃗{b}|}$$
$$\\⃗{AB} = (x_2 - x_1,\\ y_2 - y_1)$$
$$\\⃗{i} \\cdot \\⃗{j} = 0 \\quad (perpendicular unit vectors)$$
$$\\⃗{a} + \\⃗{b} = (a_x + b_x,\\ a_y + b_y)$$
$$k\\⃗{a} = (ka_x,\\ ka_y)$$

---

## 📋 Study Priority & Order

**Recommended order for mastering this topic:**

1. **First:** Scalar vs vector — get this distinction clear (it costs marks in JAMB if you slip)
2. **Second:** Magnitude formula and unit vectors — foundation for everything else
3. **Third:** Components in $\\⃗{i}$ and $\\⃗{j}$ form — very common in JAMB
4. **Fourth:** Vector addition (triangle/head-to-tail) — graphical understanding helps
5. **Fifth:** Position vectors — builds on components
6. **Sixth:** Dot product — the most powerful tool; connects magnitude and angle
7. **Seventh:** Angle between vectors — the formula to memorise last; it's the climax of the topic

Spend the most time on dot product and angle calculations — they appear in nearly every JAMB paper for this topic.

---

## 🔗 Related Topics

| Topic | How it connects to Vectors |
|---|---|
| **math-17 — Statics of a Particle** | Vector addition in equilibrium problems |
| **math-13 — Trigonometry** | Resolving vectors into $\\sin/\\cos$ components |
| **math-10 — Coordinate Geometry** | Position vectors and the Cartesian plane |
| **math-09 — Quadratic Equations** | Vector magnitude involves $\\sqrt{x^2 + y^2}$ — squaring and solving |

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
