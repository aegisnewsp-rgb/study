---
exam: uii
examName: UI Entrance (Indonesia)
subject: quant
subjectName: Subject Knowledge
topic: subjec-008
topicName: Geometry — Lines, Angles, Triangles
weight: 3
country: uii
generated: "2026-03-25T17:00:00"
diagramPrompt: Triangle ABC with vertices labeled, showing interior angles at A, B, C, exterior angle at A formed by extending side BC, and perpendicular bisector of side AB
---

# Geometry — Lines, Angles, Triangles

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Angle Basics:**
- Angles around a point sum to 360°
- Angles on a straight line sum to 180°
- Vertically opposite angles are equal
- Complementary angles sum to 90°, supplementary to 180°

**Triangle Facts:**
- Interior angles sum to 180°
- Exterior angle equals the sum of the two opposite interior angles
- Triangle inequality: each side length must be less than the sum of the other two

**Triangle Types:**
- Equilateral: all sides equal, all angles = 60°
- Isosceles: two sides equal, base angles equal
- Scalene: all sides different
- Right-angled: one angle = 90° (Pythagorean theorem applies)

Pythagorean theorem: a² + b² = c² (where c is the hypotenuse, opposite the right angle)

⚡ **Exam tip:** If two angles in a triangle are given as, say, 55° and 65°, the third angle is 180° − 55° − 65° = 60°. You don't need to draw the triangle.

⚡ **Exam tip:** In an isosceles triangle, if you're told the vertex angle is 40°, each base angle is (180° − 40°)/2 = 70°. The equal sides are opposite equal angles.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Parallel Lines and Transversals**

When a transversal crosses two parallel lines, it creates eight angles. Key relationships:
- Corresponding angles are equal (both in matching corners)
- Alternate interior angles are equal (across the transversal, inside the parallel lines)
- Co-interior (same-side interior) angles are supplementary

If a transversal cuts parallel lines and one angle is 120°, then the corresponding angle is also 120°, the alternate interior is 120°, and the co-interior is 60° (since 180° − 120° = 60°).

**Triangle Congruence Tests**

Two triangles are congruent (identical in shape and size) if:
- SSS: all three sides equal
- SAS: two sides and the included angle equal
- ASA: two angles and the included side equal
- AAS: two angles and one side equal (this follows from ASA since angles sum to 180°)
- RHS: right-angled triangles with hypotenuse and one other side equal

Note: SSA (two sides and a non-included angle) does NOT guarantee congruence — the ambiguous case in the law of sines.

**Triangle Similarity**

Similar triangles have the same shape but different sizes (ratios of corresponding sides are equal). Tests: AA, SAS~, SSS~.

If triangle ABC ~ triangle DEF with ratio 3:5, and AB = 6 cm, then DE = 6 × (5/3) = 10 cm.

Practical application: in a triangle with a line parallel to the base, it creates a smaller similar triangle. If the small triangle's height is 4 cm and the large is 12 cm, the ratio is 1:3, so all corresponding linear dimensions are in ratio 1:3.

**The Pythagorean Theorem — Applications**

Classic 3-4-5 triangle: 3² + 4² = 5² (9 + 16 = 25). Multiples work too: 6-8-10, 9-12-15, etc.

Common Pythagorean triples: (5, 12, 13), (8, 15, 17), (7, 24, 25), (20, 21, 29).

To check if a triangle is right-angled: if a² + b² = c² (largest side squared), it is right-angled.

**Common Mistakes to Avoid:**

| Mistake | Correct approach |
|---------|-----------------|
| Assuming SSA creates a unique triangle | SSA is the ambiguous case — can give 0, 1, or 2 triangles |
| Confusing which angle is opposite which side | The largest angle is opposite the longest side |
| Forgetting to check triangle inequality | Three lengths can only form a triangle if the sum of any two exceeds the third |
| Mixing up similarity and congruence criteria | Congruent = same size AND shape; similar = same shape, possibly different size |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Angle Bisector Theorem**

The internal angle bisector of a triangle divides the opposite side in the ratio of the adjacent sides. In triangle ABC, if AD bisects angle A, then BD/DC = AB/AC.

Example: In triangle with AB = 8, AC = 6, and BC = 10, the angle bisector divides BC into segments proportional to the adjacent sides. Let BD = x, DC = 10 − x. Then x/(10 − x) = 8/6 = 4/3, giving 3x = 40 − 4x, so 7x = 40, x = 40/7 ≈ 5.71.

**Median and Centroid**

A median connects a vertex to the midpoint of the opposite side. The three medians intersect at the centroid, which divides each median in ratio 2:1 (measured from the vertex). If AM is a median and G is the centroid, then AG:GM = 2:1.

Coordinates approach: if vertices are A(x₁,y₁), B(x₂,y₂), C(x₃,y₃), the centroid G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3).

**Circumcentre and Circumcircle**

The circumcentre is equidistant from all three vertices. For acute triangles it lies inside; for obtuse it lies outside. The circumradius R can be found from abc/(4K) where K is the area of the triangle.

For a right triangle, the circumcentre is the midpoint of the hypotenuse, and the circumradius is half the hypotenuse.

**The Exterior Angle Theorem — Proof and Applications**

The exterior angle at vertex A equals the sum of the two remote interior angles. Proof: angle BCA + angle ACB (straight line) = 180°. Also angle BAC + angle ABC + angle BCA = 180° (interior angles sum). Therefore angle BCA (exterior) = angle BAC + angle ABC.

This theorem lets us solve many angle problems without the full triangle. If an exterior angle is 100° and one remote interior angle is 35°, the other remote interior angle is 100° − 35° = 65°.

**Advanced Problem Types**

The "ladder against wall" problem: a 10m ladder leans against a wall with the foot 6m from the wall. How high does it reach? By Pythagoras: 6² + h² = 10² → 36 + h² = 100 → h² = 64 → h = 8m.

The "broken tree" problem: a tree breaks 6m from the ground and the top hits the ground 8m from the base. What was the tree's height? The break creates a right angle, so the broken part = √(6² + 8²) = 10m. Total height = 6 + 10 = 16m.

**Area Formulas**

For any triangle: Area = ½ × base × height, or using Heron's formula: K = √(s(s−a)(s−b)(s−c)) where s = (a+b+c)/2 is the semi-perimeter.

For a triangle with sides 13, 14, 15: s = 21, K = √(21 × 8 × 7 × 6) = √(7056) = 84 cm².

**Historical Context**

Geometry originated in ancient Egypt and Babylon for land surveying after Nile floods. Euclid's Elements (c. 300 BCE) systematised plane geometry axiomatically. The Pythagorean theorem was known to Babylonians 1000 years before Pythagoras, and likely discovered empirically through Egyptian rope-stretching (3-4-5 right angles) for right-angle surveying.

**Exam Pattern Analysis**

UI geometry questions frequently combine multiple concepts:
1. Find unknown angles using parallel line and triangle angle sum properties
2. Prove triangles congruent or similar using appropriate criteria
3. Apply Pythagorean theorem in composite figures
4. Calculate areas of composite shapes by decomposition
5. Use coordinate geometry for lines and triangles

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
