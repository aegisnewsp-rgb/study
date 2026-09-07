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
lastUpdated: "2026-09-07"
diagramPrompt: "Mathematical diagram showing Vector Algebra concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Vector Algebra

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **vector** is a directed quantity carrying both magnitude (length) and direction in 2D or 3D space, distinct from a scalar which has only magnitude. JEE Advanced tests the two product operations above all else.

- **Dot product**: a·b = |a||b|cosθ — gives a scalar; equals 0 when a ⊥ b.
- **Cross product**: a×b = |a||b|sinθ n̂ — gives a vector whose magnitude is the parallelogram area; direction obeys the right-hand rule.
- **Scalar triple product** [a b c] = a·(b×c) — equals the signed volume of the parallelepiped; vanishes iff the three vectors are coplanar.
- **Direction cosines** (l, m, n) satisfy l² + m² + n² = 1; (l, m, n) itself is a unit vector along the same line.

| Operation | Result type | Geometric meaning |
| --- | --- | --- |
| a + b | vector | Diagonal of parallelogram |
| a·b | scalar | |a||b|cosθ, projection test |
| a×b | vector | Area = |a||b|sinθ, perpendicular by right-hand rule |
| [a b c] | scalar | Signed volume of parallelepiped |

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Vectors, Scalars, and Position Representation

A **position vector** r = (x, y, z) locates a point relative to the origin, with magnitude |r| = √(x² + y² + z²). Its **direction cosines** l = cosα, m = cosβ, n = cosγ are the cosines of the angles r makes with the x-, y-, z-axes, satisfying l² + m² + n² = 1. A **unit vector** has magnitude 1; r̂ = r/|r| converts any vector to its direction.

#### Addition, Subtraction, and Section Formula

Vectors add by the **triangle law** (head-to-tail) or **parallelogram law**; subtraction a − b = a + (−b) reverses b first. For points A and B with position vectors a and b, the point dividing AB internally in ratio m:n is r = (mb + na)/(m+n); the external division uses m − n in the denominator and demands m ≠ n.

#### Dot and Cross Products

The **dot product** is commutative and distributive, with a·a = |a|². It detects perpendicularity (a·b = 0 for non-zero vectors) and gives the scalar projection (a·b̂). The **cross product** is anti-commutative (a×b = −b×a) and distributive over addition. The vector a×b is perpendicular to the plane of a and b; its magnitude equals the parallelogram area.

#### Scalar Triple Product and Coplanarity

The **scalar triple product** [a b c] = a·(b×c) is the determinant of the 3×3 matrix whose rows (or columns) are a, b, c. It is invariant under cyclic permutation but changes sign on a single swap. Three vectors are **coplanar** iff [a b c] = 0.

#### Typical JEE Advanced Patterns

- One **integer-type** question evaluating [a b c] for given vectors.
- One **MCQ** on perpendicularity or area using dot/cross product properties.
- Frequent combination with **3D Geometry** lines and planes, or with Physics (work = F·d, torque = r×F).

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Lagrange's Identity and the BAC–CAB Rule

**Lagrange's identity** |a×b|² + (a·b)² = |a|²|b|² lets you recover either product from the other and the magnitudes — a quick consistency check. The **vector triple product expansion** (BAC–CAB) states a×(b×c) = b(a·c) − c(a·b), valid only when the parentheses are in this exact order; the outer vector must multiply a cross product. JEE occasionally asks you to simplify nested cross products using this rule.

#### Worked Micro-Example

Let a = (1, 2, 3), b = (0, 1, −1), c = (2, 0, 1). Then a·b = 0 + 2 − 3 = −1, so the angle satisfies cosθ = −1/(√14 · √2) = −1/√28. The cross product b×c = (1·1 − (−1)·0, (−1)·2 − 0·1, 0·0 − 1·2) = (1, −2, −2), giving [a b c] = 1·1 + 2·(−2) + 3·(−2) = −9, so the parallelepiped volume is 9 cubic units.

#### Common Mistakes and Exam Traps

- Confusing sinθ with cosθ between dot and cross products — a single sign error flips the answer.
- Dropping the right-hand orientation, so a×b and b×a are treated identically.
- Using [a b c] without checking the sign convention; a single vector swap negates the determinant.
- Treating direction cosines as three independent numbers instead of enforcing l² + m² + n² = 1.
- Applying BAC–CAB to the wrong bracket order — (a×b)×c requires a different identity.

#### Practice Prompts

1. If |a| = 3, |b| = 4, and a·b = 6, find |a×b| and the angle between them.
2. Show that the four points with position vectors (1, 0, 2), (3, 1, 4), (0, 2, 1), (2, 3, 3) are coplanar, using the scalar triple product.

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Vector Algebra" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeeadvanced/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
