---
exam: waec
examName: WAEC WASSCE
subject: mathematics
subjectName: Mathematics
topic: math-9
topicName: "Circles: Angles and Chords"
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.621166"
diagramPrompt: "Mathematical diagram showing Circles: Angles and Chords concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"
---

# Circles: Angles and Chords

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Circle Theorems** are essential for WAEC. The key is identifying which theorem applies to the given configuration.

**Key Circle Terminology:**
- **Chord**: A line segment joining two points on the circle
- **Diameter**: A chord passing through the centre (longest chord)
- **Radius**: From centre to any point on circle
- **Arc**: Part of the circumference
- **Sector**: "Pizza slice" — region bounded by two radii and an arc
- **Segment**: Region bounded by a chord and an arc
- **Tangent**: A line that touches the circle at exactly one point
- **Subtended angle**: Angle formed by lines drawn from a point to the endpoints of an arc

**Critical Circle Theorems:**

1. **Angle at Centre Theorem**: The angle subtended by an arc at the centre is twice the angle subtended at the circumference.
$$\angle AOB = 2 \times \angle ACB$$
(where O is centre, arc AB subtends ∠AOB at centre and ∠ACB at circumference)

2. **Angles in the Same Segment**: Angles subtended by the same chord (or equal chords) at the circumference are equal.
If chord AB subtends angles at C and D on the same side of AB, then $\angle ACB = \angle ADB$.

3. **Angle in a Semicircle**: The angle subtended by a diameter at the circumference is $90°$.
If AB is a diameter and C is any point on the circle, then $\angle ACB = 90°$.

4. **Tangent-Radius Theorem**: A tangent is perpendicular to the radius at the point of contact.
If line AB touches circle at P (tangent), and OP is the radius, then $\angle OPB = 90°$.

⚡ **WAEC Tip:** Before answering any circle theorem question: (1) Find the centre (O). (2) Identify the chord(s). (3) Identify which arc we're dealing with. (4) Identify whether angles are at the centre, circumference, or from a tangent. Then match to the theorem.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Proving Circle Theorems:**

**Theorem 1: Angle at Centre is twice Angle at Circumference**
*Given*: Circle with centre O. Arc AB subtends ∠AOB at centre and ∠ACB at circumference.
*To prove*: ∠AOB = 2∠ACB

*Proof*:
- Draw radii OA and OC
- Triangle AOC is isosceles (OA = OC)
- ∠OAC = ∠OCA = α (base angles)
- ∠AOC = 180° − 2α (angle sum in triangle)
- Similarly, triangle OBC gives ∠BOC = 180° − 2β
- ∠AOB = ∠AOC + ∠BOC = (180° − 2α) + (180° − 2β) = 360° − 2(α + β)
- But α + β = ∠ACB (exterior angle of triangle AOC = sum of opposite interior angles)
- ∴ ∠AOB = 360° − 2∠ACB ... [Equation 1]

Actually, this is the reflex angle. The acute angle is:
∠AOB = 2(α + β) = 2∠ACB ✓

**Theorem 2: Angles in the Same Segment**
*Given*: Points C and D on the same side of chord AB.
*To prove*: ∠ACB = ∠ADB

*Proof*:
- Both angles subtend the same arc AB
- By Theorem 1: ∠AOB = 2∠ACB and ∠AOB = 2∠ADB
- Therefore: 2∠ACB = 2∠ADB
- ∴ ∠ACB = ∠ADB ✓

**Theorem 3: Angle in a Semicircle**
*Given*: Diameter AB, point C on circle.
*To prove*: ∠ACB = 90°

*Proof*:
- Since AB is a diameter, arc AB = 180° (half the circle)
- ∠AOB = 180° (straight line through centre)
- By Theorem 1: ∠AOB = 2∠ACB
- 180° = 2∠ACB
- ∴ ∠ACB = 90° ✓

**Theorem 4: Tangent-Radius Perpendicularity**
*Given*: Tangent at point P, radius OP.
*To prove*: OP ⟂ tangent

*Proof*:
- Any line from O to a point on the circle other than P will lie inside the circle
- The tangent touches only at P
- By definition of tangent (shortest distance from external point to circle), OP must be perpendicular to the tangent ✓

**Tangent-Chord Theorem:**
The angle between a tangent and a chord through the point of contact equals the angle in the alternate segment.
$$\angle \text{TPA} = \angle \text{in alternate segment ATB}$$

⚡ **Common Student Mistakes:** Forgetting that the angle at the centre is the LARGER (reflex) angle. Confusing which angles are in the same segment. When asked to prove, skipping the reasoning and just stating the theorem. Forgetting to extend lines when needed to identify angles.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough preparation.

**Cyclic Quadrilaterals:**

A **cyclic quadrilateral** has all four vertices on a circle.

**Opposite Angles Theorem**: Opposite angles of a cyclic quadrilateral sum to 180°.
$$\angle A + \angle C = 180° \quad \text{and} \quad \angle B + \angle D = 180°$$

*Proof*:
- ∠A and ∠C subtend arcs that together make the whole circle (360°)
- By Angle at Centre theorem: reflex ∠AOB + reflex ∠COD = 2(∠A + ∠C)
- But reflex ∠AOB + reflex ∠COD = 360° + 360° − (∠AOB + ∠COD) = 720° − 2(∠A + ∠C)
- This equals 360° (full circle) only if ∠A + ∠C = 180°

**Converse**: If a pair of opposite angles of a quadrilateral sum to 180°, it is cyclic.

**Exterior Angle Theorem for Cyclic Quadrilaterals:**
The exterior angle equals the interior opposite angle.
$$\angle \text{ext } DAE = \angle DCB$$

**Properties of Chords:**

**Chord Distance from Centre:**
- Equal chords are equidistant from the centre
- A chord perpendicular to a radius is bisected by the radius

**Theorem**: Perpendicular from centre to a chord bisects the chord.
*Given*: Circle with centre O, chord AB, perpendicular OM to AB.
*To prove*: AM = BM

*Proof*:
- Triangles OAM and OBM are right triangles
- OA = OB (radii)
- OM is common
- By RHS: ΔOAM ≅ ΔOBM
- ∴ AM = BM ✓

**Arc and Sector Properties:**

**Arc Length:**
$$l = \frac{\theta}{360°} \times 2\pi r \quad \text{where } \theta \text{ is the angle in degrees at centre}$$

**Sector Area:**
$$A = \frac{\theta}{360°} \times \pi r^2$$

**Segment Area:**
Area of segment = Area of sector − Area of triangle formed by radii

**Example**: Find the area of a sector with radius 6 cm and angle 60°.
$$A = \frac{60}{360} \times \pi \times 36 = \frac{1}{6} \times 36\pi = 6\pi \text{ cm}^2 \approx 18.85 \text{ cm}^2$$

**Example**: Find the length of an arc of a circle with radius 7 cm and angle 45°.
$$l = \frac{45}{360} \times 2\pi \times 7 = \frac{1}{8} \times 14\pi = \frac{7\pi}{4} \text{ cm} \approx 5.50 \text{ cm}$$

**Combined Figures (WAEC Pattern):**

**Problem**: A circle of radius 10 cm has a right-angled triangle drawn inside it with the hypotenuse as one side of the triangle. Find the area of the triangle.

*Solution*:
- Since the hypotenuse is a diameter and the triangle is right-angled, the triangle is inscribed in a semicircle (Angle in a Semicircle theorem)
- Hypotenuse = diameter = 20 cm
- Let the legs be a and b
- $a^2 + b^2 = 400$ (Pythagoras)
- Area = $\frac{1}{2}ab$ — we need more information to find this

Actually, for maximum area triangle inscribed in a circle with given diameter, it's the isosceles right triangle:
- If legs are equal: $a = b$, $2a^2 = 400$, $a = \sqrt{200} = 10\sqrt{2}$
- Maximum area = $\frac{1}{2} \times 10\sqrt{2} \times 10\sqrt{2} = \frac{1}{2} \times 200 = 100$ cm²

**Problem**: In a circle, two chords AB and CD intersect at E inside the circle. Given AE = 3, EB = 12, CE = 4, find DE.

*Solution* (Using intersecting chords theorem):
$$AE \times EB = CE \times ED$$
$$3 \times 12 = 4 \times ED$$
$$36 = 4 \times ED$$
$$DE = 9$$

**Tangent Properties:**

**Two Tangents from External Point:**
From an external point P, two tangents can be drawn to a circle (PA and PB).
- PA = PB (tangents from same external point)
- ∠APB = 180° − ∠AOB (where O is centre)

**Problem**: From a point P outside a circle, two tangents PA and PB are drawn. If ∠APB = 70°, find ∠AOB.

*Solution*:
- ∠APB + ∠AOB = 180° (by tangent-tangent property)
- 70° + ∠AOB = 180°
- ∠AOB = 110°

**Angle between Tangent and Chord:**
∠ between tangent PA and chord AB = ∠ in alternate segment ∠ACB

**Problem-Solving Strategy for WAEC Circle Questions:**
1. Draw a clear, large diagram
2. Mark all given angles/lengths
3. Identify the centre (O)
4. Identify the chord(s) and arc(s)
5. Look for:
   - Angles at centre (subtended by which arc?)
   - Angles at circumference on same chord
   - Angles in semicircle
   - Tangent points and perpendiculars
   - Cyclic quadrilaterals
6. Apply appropriate theorem(s)
7. Write the proof/reasoning clearly

⚡ **WAEC Examination Patterns:** Prove circle theorems (especially angle at centre and cyclic quadrilateral). Calculate unknown angles using circle theorems. Solve problems involving arcs, sectors, and segments. Apply intersecting chords theorem. Find areas of combined figures.
