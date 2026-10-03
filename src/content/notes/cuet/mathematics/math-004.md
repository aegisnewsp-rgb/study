---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-004
topicName: Circles
weight: 3
country: india
generated: "2026-03-29T05:04:46"
lastUpdated: "2026-07-15"
---

# Circles

### 🟢 Lite — Quick Review (1h–1d)

A circle is the set of all points at a fixed distance r, the **radius**, from a fixed point, the **centre**. In coordinate geometry every circle collapses to one of two equations, and almost every question in this topic is a substitution into one of them.

#### The two forms — the whole chapter in two rows

| Form | Equation | Centre | Radius |
|---|---|---|---|
| Standard | (x − h)² + (y − k)² = r² | (h, k) | r |
| General | x² + y² + 2gx + 2fy + c = 0 | (−g, −f) | √(g² + f² − c) |

From standard to general: expand, then compare to get g = −h, f = −k, c = h² + k² − r². From general to standard: complete the square on x² + 2gx and y² + 2fy.

The radius formula needs **g² + f² − c > 0**. Equal to zero gives a point-circle of radius 0; negative gives no real circle, and a question built on that is testing the condition.

#### Four formulas worth memorising outright

- **Tangent at (x₁, y₁) on S = 0:** xx₁ + yy₁ + g(x + x₁) + f(y + y₁) + c = 0.
- **Length of tangent from an external point P(x₁, y₁):** PT = √S₁, where S₁ is S evaluated at P.
- **Parallel tangent:** the second tangent parallel to ax + by + k = 0 is ax + by + k′ = 0 with k′ found from the distance condition.
- **Chord of contact of tangents from P(x₁, y₁):** xx₁ + yy₁ = r² when the centre is the origin; in general, T = 0.

#### Three theorems that answer angle questions

- **Inscribed angle theorem:** a central angle is twice any inscribed angle subtending the same arc. A semicircle therefore forces every inscribed angle standing on it to be 90° (Thales' theorem).
- **Cyclic quadrilateral:** opposite angles sum to 180°.
- **Alternate segment theorem:** the angle between a tangent and a chord equals the inscribed angle subtending that chord from the far side of the circle.

#### Four traps

- **The centre from the general form is (−g, −f), not (g, f).** This single sign error costs more marks than any other on this topic.
- **PT = √S₁, not S₁.**
- **A tangent meets the radius at the point of contact at 90°.** Every "angle between tangent and chord" question is really this perpendicularity in disguise.
- **S₁ < 0 means the point is inside the circle**, where tangents do not exist but secants do, and the power of the point is negative.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Converting between the two forms

**Standard → general.** Expand (x − h)² + (y − k)² = r²:

x² − 2hx + h² + y² − 2ky + k² = r², so x² + y² + 2(−h)x + 2(−k)y + (h² + k² − r²) = 0.

Reading off: g = −h, f = −k, c = h² + k² − r². The minus signs on g and f come from the squared brackets and are the reason students misread the centre.

**General → standard.** Complete the square:

x² + 2gx + y² + 2fy + c = 0
(x + g)² − g² + (y + f)² − f² + c = 0
(x + g)² + (y + f)² = g² + f² − c.

**Worked example.** x² + y² − 6x + 4y − 12 = 0. Here 2g = −6 so g = −3, and 2f = 4 so f = 2. Completing the square:

(x − 3)² − 9 + (y + 2)² − 4 − 12 = 0
(x − 3)² + (y + 2)² = 25.

Centre **(3, −2)**, radius **5**.

#### Building an equation from given conditions

**Centre and a point on the circle.** If the centre is (h, k) and the circle passes through (x₁, y₁), then r² = (x₁ − h)² + (y₁ − k)², and the equation is (x − h)² + (y − k)² = that value.

**Worked example.** Find the circle with centre (1, −2) passing through (4, 3). r² = (4 − 1)² + (3 + 2)² = 9 + 25 = 34. Equation: (x − 1)² + (y + 2)² = 34, which expands to x² + y² − 2x + 4y − 29 = 0. Check (4, 3): 16 + 9 − 8 + 12 − 29 = 0 ✓.

**Through three points.** Three conditions give three linear equations in g, f and c, and the centre is what you are solving for. A geometric shortcut is faster: the centre is the intersection of two perpendicular bisectors.

**Worked example.** Find the circle through (1, 1), (5, 1) and (5, 5).
- The perpendicular bisector of (1, 1)–(5, 1) is x = 3.
- The perpendicular bisector of (5, 1)–(5, 5) is y = 3.
- Centre (3, 3), and r² = (3 − 1)² + (3 − 1)² = 8, so r = 2√2.
- Equation: (x − 3)² + (y − 3)² = 8, i.e. **x² + y² − 6x − 6y + 10 = 0**.
Check all three points: 2 − 12 + 10 = 0; 26 − 36 + 10 = 0; 50 − 60 + 10 = 0 ✓.

**With a given diameter.** The circle whose diameter joins (x₁, y₁) and (x₂, y₂) is

(x − x₁)(x − x₂) + (y − y₁)(y − y₂) = 0.

This is Thales' theorem in algebraic form: a point on this circle makes a right angle with the two endpoints.

#### Tangents

**Tangent at a point on the circle.** Replacing x² by xx₁, y² by yy₁, x by (x + x₁)/2 and y by (y + y₁)/2 in the general form gives T = 0:

xx₁ + yy₁ + g(x + x₁) + f(y + y₁) + c = 0.

**Worked example.** Tangent to x² + y² − 4x + 6y − 7 = 0 at (4, 1). First confirm the point is on the circle: 16 + 1 − 16 + 6 − 7 = 0 ✓. With g = −2, f = 3, c = −7:

4x + y − 2(x + 4) + 3(y + 1) − 7 = 0 → 2x + 4y − 12 = 0 → **x + 2y = 6**.

Check it passes through (4, 1): 4 + 2 = 6 ✓. Check the centre is at distance r from it: the centre is (2, −3) with r² = 20, and |2 + 2(−3) − 6|/√5 = 10/√5 = 2√5 = √20 ✓.

**Length of the tangent from an external point.** PT = √S₁, where S₁ = x₁² + y₁² + 2gx₁ + 2fy₁ + c. Equivalently PT = √(OP² − r²), which is the same number computed a different way and a useful check.

**The two tangents are parallel to each other's... ** more usefully: the two tangents from an external point touch at two points, and the line joining those contact points is the **chord of contact**, given by T = 0. Its distance from the centre is r²/OP.

**Parallel tangents.** If one tangent is ax + by + k = 0, the other is ax + by + k′ = 0 with |k − k′| = 2r√(a² + b²).

**Worked example, continuing the tangent above.** We have x + 2y = 6 as one tangent to the circle with centre (2, −3) and r = 2√5. The parallel partner is x + 2y − c = 0, and its distance from (2, −3) must be 2√5:

|2 + 2(−3) − c|/√5 = 2√5 → |−4 − c| = 10 → c = 6 or c = −14.

So the two parallel tangents are **x + 2y = 6** and **x + 2y = −14**.

#### The power of a point

For any line through P meeting the circle at A and B, the product PA · PB is the same for every such line. It equals OP² − r², and it equals PT² for a tangent.

- **Secant–secant:** PA · PB = PC · PD for two different secants from the same external point.
- **Secant–tangent:** PT² = PA · PB.
- **If P is inside the circle**, the power is negative: the two segments along any chord through P satisfy PA · PB = r² − OP², using unsigned lengths.

**Worked example.** Circle x² + y² = 25 has centre O at the origin and r = 5. Take P = (7, 0), so OP = 7 and the power is 49 − 25 = 24.
- The x-axis is a secant meeting the circle at A(5, 0) and B(−5, 0). PA = 2 and PB = 12, so PA · PB = 24 ✓.
- A tangent from P therefore has length √24 = 2√6.
- The chord of contact is 7x = 25, i.e. x = 25/7, and its distance from the centre is 25/7 = r²/OP ✓.

Three different routes, one number. Recognising that is what makes these questions quick.

#### Angles in a circle

- **Central angle = 2 × inscribed angle** on the same arc, both subtended from the same side of the chord.
- **Angles in the same segment are equal**: two inscribed angles standing on the same chord and on the same side are equal.
- **A semicircle forces a right angle** at any point on the remaining arc (Thales).
- **Opposite angles of a cyclic quadrilateral sum to 180°.** So in a cyclic quadrilateral, if ∠A = 65° then ∠C = 115°, and if ∠B = 100° then ∠D = 80°.
- **The angle between two tangents** from an external point P touching at T₁ and T₂ is 180° minus the central angle T₁OT₂, since the radii are perpendicular to the tangents and the angles of a quadrilateral sum to 360°.

**Worked example — angle between two tangents.** Circle x² + y² = 25, P = (7, 0). The tangent length is 2√6 and OP = 7, so in right triangle OPT: cos(∠OPT) = PT/OP = 2√6/7. Then ∠T₁PT₂ = 2∠OPT. Numerically ∠OPT ≈ 27.9°, so the angle between the tangents is about 55.8°.

#### Arc length and sector area

With θ in **radians**: arc length l = rθ and sector area = ½r²θ. With θ in degrees, multiply by π/180 first. The area of the major sector is πr² minus the minor sector, and the area of a segment is the sector minus the triangle.

---

### 🔴 Extended — Deep Study (3mo+)

#### Worked problem 1 — the full worked example on one circle

Circle x² + y² − 4x + 6y − 7 = 0, and P(2, 5).
- 2g = −4 → g = −2; 2f = 6 → f = 3; c = −7.
- Centre = (−g, −f) = **(2, −3)**.
- r² = g² + f² − c = 4 + 9 + 7 = 20, so **r = 2√5**.
- Position of P: OP² = (2 − 2)² + (5 + 3)² = 64, and 64 > 20, so P is external and two tangents can be drawn.
- S₁ = 4 + 25 − 8 + 30 − 7 = 44, so **PT = √44 = 2√11**.
- Cross-check by the other route: PT² = OP² − r² = 64 − 20 = 44 ✓.
- Chord of contact: T = 0 gives 2x + 5y − 2(x + 2) + 3(y + 5) − 7 = 0 → 2x + 5y − 2x − 4 + 3y + 15 − 7 = 0 → **8y + 4 = 0**, i.e. y = −1/2. Check its distance from the centre (2, −3): |−1/2 + 3| = 5/2, and r²/OP = 20/8 = 5/2 ✓.

#### Worked problem 2 — tangents, chord of contact, and the angle between tangents

Circle x² + y² = 25, external point P(7, 0).
- Tangent points lie where OT ⊥ PT. Writing T = (a, b): a² + b² = 25 and 7a + 0·b = 25 (the chord of contact 7x = 25), so a = 25/7 and b² = 25 − 625/49 = (1225 − 625)/49 = 600/49, b = ±10√6/7.
- So the contact points are (25/7, ±10√6/7). Confirmed by OT ⊥ PT: the slope of OT is (10√6/7)/(25/7) = 2√6/5, and the slope of PT is (10√6/7 − 0)/(25/7 − 7) = (10√6/7)/(−24/7) = −5√6/12. Product = (2√6/5)(−5√6/12) = −(2 × 5 × 6)/(5 × 12) = −1 ✓.
- Angle between the tangents: cos(∠T₁PT₂) = (OP² − 2r²)/OP² = (49 − 50)/49 = −1/49, so the angle is about 91.2°. The obtuse result is right: P is close to the circle compared with its size, so the tangents open wide.
- Tangent length 2√6, and r²/OP = 25/7 gives the chord-of-contact distance, matching the half-chord √(r² − (25/7)²) = √(25 − 625/49) = 10√6/7 ✓.

#### Worked problem 3 — secants and the power of a point

Circle x² + y² = 9, centre (0,0), r = 3. From P(5, 0), a secant along the x-axis meets the circle at A(3, 0) and B(−3, 0). PA = 2, PB = 8, product = 16 = OP² − r² = 25 − 9 ✓. So a tangent from P has length 4.

Now a second secant from P meeting the circle at C and D. If PC = 1, then PD = 16 by the power theorem, and CD = PD − PC = 15. That a chord can be longer than the diameter here is not a contradiction: C and D are near and far intersections along a line, not the two ends of the same chord.

#### Worked problem 4 — angle chasing in a cyclic quadrilateral

ABCD is cyclic, with ∠A = 65° and ∠B = 100°. Find ∠C and ∠D.
- ∠C = 180° − ∠A = 115°.
- ∠D = 180° − ∠B = 80°.
- Check: 65 + 100 + 115 + 80 = 360 ✓.

**Worked example — arc and inscribed angle.** A chord subtends 60° at the centre. What angle does it subtend at a point on the major arc? The inscribed angle is half the central angle on the same arc, so 30°. At a point on the minor arc it is 180° − 30° = 150°.

#### Worked problem 5 — the point-circle and the no-real-circle cases

**Point-circle.** x² + y² + kx + 4y + 9 = 0 represents a single point. Here 2g = k so g = k/2, 2f = 4 so f = 2, c = 9. A point-circle needs g² + f² − c = 0:

k²/4 + 4 − 9 = 0 → k²/4 = 5 → **k = ±2√5**.

**No real circle.** If instead the question asks when the equation has no real solution, the condition is g² + f² − c < 0, which gives k²/4 < 5, i.e. |k| < 2√5. Both signs of the inequality matter and students routinely drop the negative half.

#### Worked problem 6 — family of circles and orthogonal circles

**Family through an intersection.** Every circle through the common points of S₁ = 0 and S₂ = 0 is S₁ + λS₂ = 0 (λ real), plus S₂ = 0 itself. To find the member with a given centre, substitute the centre and solve for λ.

**Example.** The two circles x² + y² − 4x = 0 and x² + y² + 6y = 0 intersect at the origin and one other point. Find a member of the family whose centre lies on the line y = x.
- Family: (x² + y² − 4x) + λ(x² + y² + 6y) = 0.
- Centre from the coefficients: 2g = −4 → g = −2; 2f = 6λ → f = 3λ. Centre = (2, −3λ).
- Requiring the centre on y = x: −3λ = 2 → λ = −2/3.
- Circle: (x² + y² − 4x) − (2/3)(x² + y² + 6y) = 0 → multiply by 3: 3x² + 3y² − 12x − 2x² − 2y² − 12y = 0 → **x² + y² − 12x − 12y = 0**, centre (6, 6) ✓ which lies on y = x.

**Orthogonal circles.** Two circles x² + y² + 2g₁x + 2f₁y + c₁ = 0 and x² + y² + 2g₂x + 2f₂y + c₂ = 0 intersect at right angles iff 2g₁g₂ + 2f₁f₂ = c₁ + c₂.

#### Worked problem 7 — arc length and sector area

A circle has radius 21 cm. Find the length of an arc subtending 60° at the centre, and the area of the sector.
- θ in radians = 60 × π/180 = π/3.
- Arc length = rθ = 21π/3 = **7π cm**.
- Sector area = ½r²θ = ½ × 441 × π/3 = **147π/2 cm²**.
- The remaining sector area is πr² − 147π/2 = 441π − 73.5π = 735π/2 cm².

The radians step is where most of these are lost. Convert once, at the top.

#### Edge cases and adjacent links

- **Concentric circles** share a centre and differ only in radius; their equations share g and f.
- **A chord is the segment inside the circle; a secant is the whole line.** The power-of-a-point statement holds for both.
- **The tangent-radius perpendicularity is the same fact in the next chapter of the syllabus**, where it reappears for parabola, ellipse and hyperbola. Getting it automatic here removes work later.
- **A point at distance exactly r from the centre lies on the circle**, so S₁ = 0 and the tangent length is 0 — a degenerate case worth recognising.
- **Every pair of circles has at most two common points**, found by subtracting the equations to get the radical axis, which is a straight line.

---

### 🟠 Exam Essentials (1 day before)

#### Formula card — reproduce from memory

| Quantity | Formula |
|---|---|
| Standard form | (x − h)² + (y − k)² = r² |
| General form | x² + y² + 2gx + 2fy + c = 0 |
| Centre from general form | (−g, −f) |
| Radius from general form | √(g² + f² − c) |
| Tangent at (x₁, y₁) | xx₁ + yy₁ + g(x + x₁) + f(y + y₁) + c = 0 |
| Tangent length from P | PT = √S₁ = √(OP² − r²) |
| Chord of contact from P | T = 0 |
| Power of a point | OP² − r² = PA · PB = PT² |
| Two circles orthogonal | 2g₁g₂ + 2f₁f₂ = c₁ + c₂ |
| Cyclic quadrilateral | Opposite angles sum to 180° |
| Inscribed angle | Half the central angle on the same arc |
| Arc length / sector area | l = rθ; A = ½r²θ, θ in radians |
| Circle with given diameter | (x − x₁)(x − x₂) + (y − y₁)(y − y₂) = 0 |

#### Pre-submission checklist

- [ ] Convert to standard form, or read the centre as (−g, −f) — never (g, f).
- [ ] Check g² + f² − c before quoting a radius; state the case if it is zero or negative.
- [ ] For a tangent length, confirm S₁ > 0 first. If it is 0 the point is on the circle; if negative the point is inside and no tangent exists.
- [ ] Verify a tangent by checking the distance from the centre equals r.
- [ ] In angle questions, identify whether the angle is central or inscribed before halving or doubling.
- [ ] In arc-length questions, convert degrees to radians before touching r.
- [ ] Substitute one given point back into your final equation.

#### The last twenty minutes

Write the general form and, without looking, state the centre and the radius. Then do one tangent-at-a-point, one tangent-length, one cyclic-quadrilateral angle, and one arc-length item. That covers every question shape in the topic.

---

### 🔵 High-Yield Patterns

1. **Complete the square once per problem and work from standard form.** The general form is useful only for the tangent and distance formulas; everything else is cleaner with the centre and radius visible.
2. **PT² = OP² − r² and PT² = S₁ are the same number.** If one gives an odd-looking result, the other will locate your slip immediately.
3. **Sign of S₁ is a diagnosis.** Positive: two tangents. Zero: point on the circle. Negative: point inside, use secants and r² − OP².
4. **Opposite angles of a cyclic quadrilateral, and nothing else, is the only angle rule a quadrilateral question needs.** Most of these items are one subtraction.
5. **Central = 2 × inscribed, always.** Decide first which type of angle you are holding; the factor of two follows from that.
6. **For a circle through three points, use perpendicular bisectors rather than solving three simultaneous equations.** It is shorter and it gives the centre, which is usually what is asked for next.
7. **For a circle with a given centre and a point on it, r² is one subtraction of squares** — (x₁ − h)² + (y₁ − k)². Compute it before writing any equation.
8. **Verify tangents by distance.** A candidate line ax + by + k = 0 is a tangent to the circle iff the distance from the centre to it equals r. This checks the answer without any further formula.

---

### 🟣 Traps and question forms you will meet

| Trap | What happens if you fall in | Fix |
|---|---|---|
| Centre read as (g, f) | Wrong centre, wrong radius, wrong answer throughout | The signs flip when you expand (x − h)² |
| PT written as S₁ | The answer is the square of the length | Take the square root |
| Quoting a radius when g² + f² − c ≤ 0 | A radius of √(negative) | Name the case: point-circle or no real circle |
| Assuming a tangent exists | You apply √S₁ to a point inside the circle | Check the sign of S₁ first |
| Halving a central angle | Half the answer is wrong | Inscribed is half of central, not the reverse |
| Forgetting to convert degrees in arc length | The answer is off by a factor of about 57 | θ in radians: multiply by π/180 |
| Applying the cyclic rule to a non-cyclic quadrilateral | A false result | The rule needs all four vertices on one circle |
| Using the tangent formula at a point that is not on the circle | Garbage line | Substitute the point into S = 0 to confirm it is |

#### Four question forms, and the move that answers each

- **"Find the centre and radius of x² + y² + 6x − 8y + 9 = 0."** g = 3, f = −4, c = 9. Centre (−3, 4), r² = 9 + 16 − 9 = 16, r = 4. This is the base rate item — if you cannot do it in twenty seconds, nothing else in the chapter is safe.
- **"Find the length of the chord of contact of the tangents from (3, 4) to x² + y² = 25."** OP = 5 and r = 5, so P is on the circle and the chord of contact degenerates to a point. The test that saves you is comparing OP with r first.
- **"Show that the lines joining the centre to the midpoints of the chords of a circle are perpendicular to the chords."** The radius to the midpoint of a chord is perpendicular to it; you can read this off the standard form, where a horizontal chord has a midpoint directly below the centre.
- **"How many common tangents can two circles have?"** Four if they are separate, three if they touch externally, two if they touch internally, one if they touch internally, and zero if one contains the other without touching. The pattern follows from whether the circles intersect at all.

---

### 💡 Pro Tips

1. **Memorise the conversion table, not the expanded square.** x² + y² + 2gx + 2fy + c = 0 → centre (−g, −f), radius √(g² + f² − c) is one memorised line and covers most items on the topic.
2. **Write a one-line justification with every answer.** "Centre (−3, 4), since 2g = 6 gives g = 3" costs five seconds and stops the sign slip before it becomes a wrong answer.
3. **Always draw the circle.** Whether a point is outside, whether an angle is acute or obtuse, whether a chord is minor or major — a sketch resolves all three in seconds, and the obtuse angle between tangents catches nearly everyone who skips it.
4. **Keep the power-of-a-point idea as one number, three names.** The quantity OP² − r² is the power, it equals PA · PB for any secant, and it equals PT² for a tangent. Learning it once covers three question types.
5. **Practise the "tangent to a circle at a point on a known line" variant.** It is a short step past the plain version and rewards anyone comfortable with the formula.
6. **Radians before arithmetic, always.** In arc-length and sector questions, convert the angle first and write the radian value down; the rest is then one multiplication.
7. **Do the perpendicular-bisector route at least once for a three-point circle.** It is faster than three simultaneous equations and it generalises to the conics in the next chapters.
8. **Revisit this topic immediately after the conics.** Parabola, ellipse and hyperbola all reuse the tangent form, the perpendicular foot, and the distance condition, and the circle is where you make them automatic.

---

### 📚 Sources and where to go deeper

| Resource | Where to find it | Use it for |
|---|---|---|
| NCERT Class 11 Mathematics, Chapter 11 — Conic Sections | NCERT textbook | The official treatment of circles in coordinate geometry, tangents, and the families of circles |
| NCERT Class 10 Mathematics, Chapter 10 — Circles | NCERT textbook | The circle theorems stated without coordinates: Thales, the inscribed angle theorem, and the cyclic quadrilateral property |
| NCERT Exemplar problems, Class 11 Mathematics | Widely available alongside the textbook | Denser problems on the tangent formula and on circles through three points |
| NCERT Class 12 Mathematics, Chapter 6 — Applications of Derivatives | NCERT textbook | Rate of change, tangency conditions, and the maximum-minimum problems built on circles |
| Class 11 Mathematics for entrance exams, R.D. Sharma | Widely available book | Large exercise sets on standard and general form conversion |
| Worked-problem compilations for CUET UG Mathematics | Reputable coaching material and past-paper books | Timed practice mixing circles with the other conic chapters |

---

**Continue your study**

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Circles" sits in a personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — a one-day sprint across the highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — the sibling topics in this subject
