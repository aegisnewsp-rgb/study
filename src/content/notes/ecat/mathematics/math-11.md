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
lastUpdated: "2026-07-15"
diagramPrompt: "Mathematical diagram showing Vectors in 2D and 3D concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Vectors in 2D and 3D

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- A **vector** carries both **magnitude** (length) and **direction**; in 2D it is written **a** = (aₓ, a_y), in 3D as **a** = (aₓ, a_y, a_z), or in basis form **a** = aₓ**i** + a_y**j** + a_z**k**.
- Magnitude: |**a**| = √(aₓ² + a_y²) in 2D, and |**a**| = √(aₓ² + a_y² + a_z²) in 3D.
- **Unit vector:** â = **a** / |**a**|, dimensionless because the units cancel.
- **Dot product** (scalar): **a**·**b** = aₓbₓ + a_yb_y + a_zb_z = |**a**||**b**|cos θ — equals 0 iff **a** ⊥ **b**.
- **Cross product** (vector): magnitude |**a** × **b**| = |**a**||**b**|sin θ, direction fixed by the right-hand rule; zero iff vectors are parallel.
- **Angle between vectors:** cos θ = (**a**·**b**) / (|**a**||**b**|).

> ECAT tip: questions almost always give components and ask for magnitude, unit vector, dot/cross value, or the included angle — practise those four moves.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Representation and Magnitude

A 2D vector lies in the xy-plane as **a** = (aₓ, a_y); adding a third component gives the 3D form. The **magnitude** is the Euclidean length:

|**Setting**|**Formula**|
|---|---|
|2D|**\|a\| = √(aₓ² + a_y²)**|
|3D|**\|a\| = √(aₓ² + a_y² + a_z²)**|

A **unit vector** â is obtained by dividing each component by |**a**|, giving a direction-only arrow of length 1. Scalar multiplication k**a** scales length by |k| and reverses direction when k < 0.

#### Direction Cosines

The angles α, β, γ that **a** makes with the +x, +y, +z axes satisfy:

**cos α = aₓ/|a|**, **cos β = a_y/|a|**, **cos γ = a_z/|a|**, with the identity **cos²α + cos²β + cos²γ = 1**.

ECAT multiple-choice items frequently omit one component and ask you to recover it using this identity.

#### Dot and Cross Products

|Operation|Formula|Result|Perpendicularity / Parallelism test|
|---|---|---|---|
|**a · b**|aₓbₓ + a_yb_y + a_zb_z|Scalar|**a · b = 0** ⟹ perpendicular|
|**a × b**|(a_yb_z − a_zb_y, a_zbₓ − aₓb_z, aₓb_y − a_ybₓ)|Vector|**a × b = 0** ⟹ parallel|

The **dot product** equals |**a**||**b**|cos θ; the **cross product** magnitude equals |**a**||**b**|sin θ, with direction along the right-hand normal. Angle between two vectors: **cos θ = (a · b) / (|a||b|)**.

> The dot product swaps to a scalar but keeps the *units* of the two vectors multiplied together — never drop units on the MCQ numeric option.

#### Section Formula

For point P dividing AB internally in the ratio m:n, **P = (m·b + n·a)/(m + n)**. Use a minus sign for external division. This recurs in ECAT coordinate-geometry MCQs and in 3D centre-of-mass problems.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Micro-Example

Let **a** = (2, −1, 2) and **b** = (1, 2, 0).

Compute |**a**| = √(4 + 1 + 4) = 3, so â = (2/3, −1/3, 2/3). Dot product: **a · b** = 2(1) + (−1)(2) + 2(0) = 0, so **a** ⊥ **b** and θ = 90°. Cross product: **a × b** = ((−1)(0) − 2(2), 2(1) − 2(0), 2(2) − (−1)(1)) = (−4, 2, 5), with magnitude |**a × b**| = √(16 + 4 + 25) = √45 = 3√5.

Sanity check: 3 × √5 × sin 90° = 3√5 ✓. This single example exercises magnitude, unit vector, perpendicularity, and cross product in one sweep — the four moves ECAT tests most.

#### Common Exam Traps

- Treating the **zero vector** as having any direction: â is **undefined** at **a** = **0**.
- Using a 2D magnitude formula on a 3D vector (or vice versa) when one component is hidden as 0.
- Confusing **cos θ** (dot) with **sin θ** (cross) when an answer asks for the angle between vectors.
- Reversing cross-product order: **a × b = −(b × a)**, so the right-hand rule flips sign.
- Dropping units: dot product carries **units(a) × units(b)**; cross product magnitude does too.

#### Links to Adjacent Topics

Vector tools reappear in ECAT Mechanics (forces, velocities, work as **F · d**), Analytic Geometry (line and plane equations **r = a + t d**, **r · n = d**), and Complex Numbers (a + bi viewed as a 2D vector).

> ECAT weight is ~4%, but vectors are the *language* of Physics and 3D geometry — under-preparation here costs marks across multiple chapters.

#### Practice Prompts

- If **a** = (3, 4, k) has magnitude 13, find k and the direction cosines.
- Two vectors **u**, **v** satisfy |**u**| = 5, |**v**| = 8, **u · v** = 20. Find θ and |**u × v**|.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Vectors in 2D and 3D" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
