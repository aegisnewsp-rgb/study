---
exam: uii
examName: UI Entrance (Indonesia)
subject: quant
subjectName: Subject Knowledge
topic: subjec-010
topicName: Trigonometry Basics
weight: 3
country: uii
generated: "2026-03-25T17:00:00"
diagramPrompt: "Right-angled triangle with angle theta at base, opposite side labeled O, adjacent side labeled A, hypotenuse labeled H, showing sin theta = O/H, cos theta = A/H, tan theta = O/A"

---

# Trigonometry Basics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

In a right-angled triangle with acute angle θ:

- **sin θ = opposite / hypotenuse**
- **cos θ = adjacent / hypotenuse**
- **tan θ = opposite / adjacent = sin θ / cos θ**

The hypotenuse is always opposite the right angle and is the longest side.

**Special angles — memorise these:**

| Angle | sin | cos | tan |
|-------|-----|-----|-----|
| 30° | ½ | √3/2 | 1/√3 = √3/3 |
| 45° | √2/2 | √2/2 | 1 |
| 60° | √3/2 | ½ | √3 |

⚡ **Exam tip:** In a 3-4-5 right triangle, for the angle opposite the 3-side: sin θ = 3/5, cos θ = 4/5, tan θ = 3/4. The angle is arcsin(3/5) ≈ 36.87°.

⚡ **Exam tip:** SOH-CAH-TOA is a reliable mnemonic: **S**in = **O**pposite/**H**ypotenuse, **C**os = **A**djacent/**H**ypotenuse, **T**an = **O**pposite/**A**djacent.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Solving Right-Angled Triangle Problems**

Given one side and one acute angle, find the other sides.

Example: In right triangle ABC (C = 90°), angle A = 35° and hypotenuse = 12 cm.
- sin A = BC/AB → sin 35° = BC/12 → BC = 12 × sin 35° ≈ 12 × 0.574 = 6.88 cm
- cos A = AC/AB → cos 35° = AC/12 → AC = 12 × cos 35° ≈ 12 × 0.819 = 9.83 cm

Example: A ladder 5 m long leans against a wall, making 70° with the ground. How far is the foot from the wall?
- cos 70° = adjacent/hypotenuse = d/5
- d = 5 × cos 70° ≈ 5 × 0.342 = 1.71 m

**Pythagorean Identity and Reciprocal Functions**

The fundamental identity: sin²θ + cos²θ = 1. This holds for all angles θ.

From this: tan²θ + 1 = sec²θ, and 1 + cot²θ = csc²θ.

Reciprocal functions:
- csc θ = 1/sin θ = hypotenuse/opposite
- sec θ = 1/cos θ = hypotenuse/adjacent
- cot θ = 1/tan θ = adjacent/opposite

If sin θ = 3/7, cos θ = √(1 − 9/49) = √(40/49) = √40/7 = (2√10)/7, and tan θ = 3/(2√10) = (3√10)/20 after rationalising.

**Angles of Elevation and Depression**

Angle of elevation: from observer's horizontal line up to the object. Angle of depression: from observer's horizontal line down to the object. These are equal when measured from a horizontal line (alternate angles with the horizontal).

From a cliff 80 m above sea level, a boat is at an angle of depression of 25°. Horizontal distance = 80/tan 25° ≈ 80/0.466 = 171.7 m.

**Common Mistakes to Avoid:**

| Mistake | Correct approach |
|---------|-----------------|
| Labelling the wrong side as hypotenuse | The hypotenuse is always opposite the right angle |
| Confusing which function to use | Identify which SIDES you know and which you need; match to SOH-CAH-TOA |
| Using degrees in radian formulas | Make sure your calculator is in the correct mode (DEG vs RAD) |
| Forgetting to rationalise denominators | Convert expressions like 3/√2 to (3√2)/2 |
| Getting sin/cos swapped for supplementary angles | sin(180° − θ) = sin θ; cos(180° − θ) = −cos θ |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**The Law of Sines and Law of Cosines**

For any triangle (not just right-angled):

Law of sines: a/sin A = b/sin B = c/sin C

Law of cosines: c² = a² + b² − 2ab cos C

These allow solving non-right triangles given sufficient information.

Example: In triangle ABC, a = 7, b = 5, angle C = 60°. Find c.
- c² = 7² + 5² − 2(7)(5) cos 60° = 49 + 25 − 70(0.5) = 74 − 35 = 39
- c = √39 ≈ 6.25

**Area of a Triangle Using Trigonometry**

Area = ½ab sin C, where a and b are two sides and C is the included angle.

For triangle with sides 8 cm and 12 cm with included angle 45°: Area = ½ × 8 × 12 × sin 45° = 48 × (√2/2) = 24√2 ≈ 33.94 cm².

**Applications in Navigation and Surveying**

Bearing: measured clockwise from North. A bearing of 045° is Northeast. A bearing of 120° is Southeast-southeast.

Two boats leave port A. Boat 1 travels 12 km on bearing 030°, Boat 2 travels 8 km on bearing 110°. Find distance between boats. This requires drawing a diagram and using the law of cosines.

**The Ambiguous Case (Law of Sines)**

When solving a triangle with SSA (two sides and a non-included angle), there may be 0, 1, or 2 solutions. Given a = 10, b = 8, angle A = 30°: sin B = b sin A/a = 8 × 0.5/10 = 0.4, giving B ≈ 23.6°. But sin also equals 0.4 at 180° − 23.6° = 156.4°, and this second triangle may be valid if a > b sin A but a < b.

**Exact Values Beyond Special Angles**

Values at 15° and 75° can be derived using half-angle formulas or angle addition formulas:
- sin 15° = sin(45° − 30°) = sin 45 cos 30 − cos 45 sin 30 = (√2/2)(√3/2) − (√2/2)(½) = (√6 − √2)/4
- cos 15° = cos(45° − 30°) = (√6 + √2)/4
- tan 15° = 2 − √3

**Radian Measure**

360° = 2π radians. Conversions: to convert degrees to radians, multiply by π/180. To convert radians to degrees, multiply by 180/π.

Arc length s = rθ (θ in radians). Sector area = ½r²θ.

In a circle of radius 6 cm, a 2-radian sector has arc length = 6 × 2 = 12 cm and area = ½ × 36 × 2 = 36 cm².

**Historical Context**

Trigonometry developed from Babylonian astronomy and Greek geometry. Hipparchus (c. 150 BCE) created the first chord table. The Indian mathematician Aryabhata (c. 499 CE) tabulated half-chords, essentially the sine function. The word "trigonometry" (measurement of triangles) dates to the 16th century. Leonhard Euler's Introductio in analysin infinitorum (1748) established the modern treatment of trigonometric functions as infinite series.

**Exam Pattern Analysis**

UI trigonometry questions frequently:
1. Give a word problem requiring setting up SOH-CAH-TOA (ladder, shadow, angle of elevation)
2. Use the 3-4-5 triangle or Pythagorean triples
3. Ask for exact values at special angles (30-45-60)
4. Combine trigonometry with geometry (finding areas using ½ab sin C)
5. Test the law of sines/cosines in non-right triangles

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
