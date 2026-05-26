---
exam: neco
examName: NECO SSCE
subject: physics
subjectName: Physics
topic: phy-4
topicName: "Scalars and Vectors"
weight: 4
country: nigeria
generated: "2026-04-05T12:00:00.000000"
diagramPrompt: "Clean educational diagram showing Scalars and Vectors with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"


lastUpdated: "2026-05-26"
---

# Scalars and Vectors

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Scalar:** a physical quantity described by magnitude only (e.g., mass = 50 kg, temperature = 30 °C).

**Vector:** a physical quantity with both magnitude and direction (e.g., velocity = 20 m/s north, force = 15 N upward).

**Key formulas:**
- Vector addition (triangle law): **R = √(A² + B² + 2AB cos θ)** where θ is the angle between A and B.
- Component resolution: **Ax = A cos θ**, **Ay = A sin θ** — resolve a vector into horizontal and vertical parts to simplify addition.
- Magnitude of a vector: **|A| = √(Ax² + Ay²)** — Pythagorean theorem on the components.

**NECO exam pointers:**
1. A vector question always tests direction — if a question only gives a magnitude, the answer is a **scalar**, not a vector.
2. When adding perpendicular vectors (θ = 90°), use the Pythagorean result R = √(A² + B²); cosine term vanishes.
3. The unit vector **î** (x-axis), **ĵ** (y-axis), **k̂** (z-axis) frequently appears in component-form questions — know how to express **A = Axi + Ayj + Azk**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Definitions and Physical Meaning

A **scalar** has only magnitude — it tells you *how much* but not *which way*. Distance, speed, mass, temperature, and energy are scalars. A **vector** has both magnitude and a direction — it tells you how much *and* which way. Velocity, force, displacement, and acceleration are vectors. The critical difference for NECO: a car travelling at 60 km/h has speed 60 km/h (scalar), but its velocity is 60 km/h northward (vector) — the direction is part of the quantity.

## Vector Representation

A vector is represented by a **directed line segment** — an arrow whose length is proportional to the magnitude and whose head points in the direction of action. The tail is the point of application.

## Addition of Vectors

Vectors add by **both components**, never by simply adding magnitudes unless they point in the same direction.

- **Triangle law:** Place the tail of B at the head of A; the closing side from tail of A to head of B is the resultant R.
- **Parallelogram law:** Draw both vectors from a common point; complete the parallelogram; the diagonal gives R.
- **Mathematical form (Law of Cosines):** R = √(A² + B² + 2AB cos θ), where θ is the angle between A and B.
- **Special case — perpendicular (θ = 90°):** R = √(A² + B²).

## Resolution of Vectors

Any vector **F** making an angle θ with the horizontal can be split into components:
- **Fx = F cos θ** (horizontal component)
- **Fy = F sin θ** (vertical component)

When you need to add vectors at odd angles, resolve each into components, add the x-components separately, add the y-components separately, then find the resultant magnitude: R = √(ΣFx² + ΣFy²).

## Multiplication: Dot and Cross Products

- **Dot product (scalar product):** **A · B = AB cos θ** — result is a scalar. Used in work (W = **F** · **d**).
- **Cross product (vector product):** **A × B = AB sin θ n̂** — result is a vector perpendicular to the plane of A and B. Used in torque (τ = **r × F**).

## Typical NECO Question Patterns

NECO Section B questions frequently ask you to resolve a force vector into components and then find the resultant of two or more forces by calculation. Questions also test the dot product when θ = 0° (cos 0° = 1 gives maximum value) versus θ = 90° (dot product = 0, meaning perpendicular vectors).

| Scenario | Formula |
|---|---|
| Add two vectors at angle θ | R = √(A² + B² + 2AB cos θ) |
| Resolve F at angle θ | Fx = F cos θ, Fy = F sin θ |
| Find resultant from components | R = √(ΣFx² + ΣFy²) |
| Dot product | A · B = AB cos θ |
| Cross product magnitude | |A × B| = AB sin θ |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Unit Vectors and Vector Notation

A **unit vector** has magnitude 1 and carries only directional information. In 3D Cartesian form:
**A** = Axi + Ayj + Azk

where î, ĵ, k̂ are mutually perpendicular unit vectors along the x, y, and z axes. The magnitude: |A| = √(Ax² + Ay² + Az²). This form is powerful because vector addition becomes simple component-wise addition: **A** + **B** = (Ax + Bx)î + (Ay + By)ĵ + (Az + Bz)k̂.

## Laws of Vector Addition

Vector addition obeys the **commutative law** (**A** + **B** = **B** + **A**) and the **associative law** ((**A** + **B**) + **C** = **A** + (**B** + **C**)). Subtraction is handled by adding the negative of a vector — reverse the direction, then add normally.

## Conditions and Special Cases

- **Null (zero) vector:** Results when two equal and opposite vectors are added. It has zero magnitude and no direction, but it is still a vector in the formal sense.
- **Coplanar vectors:** Vectors lying in the same plane. For addition, any two coplanar vectors can be resolved into a common plane and summed using the parallelogram method.
- **Collinear vectors:** Vectors lying on the same line — addition reduces to signed scalar arithmetic in one dimension (treat one direction as positive).

## Common Mistakes and How to Avoid Them

A frequent error is **omitting the direction** when writing a vector answer. For instance, answering "velocity = 30 m/s" instead of "30 m/s due east" — NECO markers deduct for missing direction. Another trap: using the Pythagorean formula when vectors are **not perpendicular** — you must use the full law of cosines. Students also confuse scalar multiplication (shrinking a vector without changing direction) with the dot or cross products (which produce different types of results).

## Connections to Adjacent Topics

Vectors are foundational to **kinematics** — displacement, velocity, and acceleration are all vectors, and their equations require vector addition. In **Newton's laws**, force is a vector, so adding multiple forces to find the net force (Fnet = ΣF) is vector addition by components. This links directly to resolving inclined plane forces, a staple NECO question in Mechanics.

## Worked Micro-Example

Two forces, F₁ = 10 N east and F₂ = 5 N at 60° north of east, act on a point. Find the resultant.

Resolve F₂: F₂x = 5 cos 60° = 2.5 N; F₂y = 5 sin 60° = 4.33 N.
Total Fx = 10 + 2.5 = 12.5 N; Total Fy = 0 + 4.33 = 4.33 N.
Resultant R = √(12.5² + 4.33²) = √(156.25 + 18.75) = √175 = **13.23 N**.
Direction: tan θ = 4.33/12.5 → θ = 19.1° north of east.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
