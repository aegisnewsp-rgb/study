---




exam: nat-i
examName: NAT-I (NTS)
subject: subject-knowledge
subjectName: Subject Knowledge
topic: sub-8
topicName: "Mathematics: Geometry and Trigonometry"
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.141598"
lastUpdated: "2026-06-21"
diagramPrompt: "Educational diagram illustrating Mathematics: Geometry and Trigonometry with clear labels, white background, exam-style illustration"




---

# Mathematics: Geometry and Trigonometry

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- **Pythagorean theorem** for a right triangle: `a² + b² = c²`, where `c` is the hypotenuse and `a`, `b` are the two legs.
- **Pythagorean identity**: `sin²θ + cos²θ = 1` for every angle `θ`.
- **Law of sines**: `a/sin A = b/sin B = c/sin C`; **law of cosines**: `c² = a² + b² − 2ab·cos C`. Use these on **non-right** triangles only.
- **Area of a triangle** with two sides and the included angle: `A = ½·a·b·sin C`.
- **Sum of interior angles** of an n-sided polygon: `(n − 2)·180°`. **Sum of exterior angles** is always `360°`.
- **Unit circle** values to memorise: `sin 0° = 0, sin 30° = ½, sin 45° = √2/2, sin 60° = √3/2, sin 90° = 1`; cosines mirror these in reverse order.
- **Arc length** `s = rθ` and **sector area** `A = ½r²θ` use **radians** (π rad = 180°), not degrees.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Angle and Triangle Foundations

- **Complementary** angles sum to 90°, **supplementary** to 180°, and **vertically opposite** angles are equal. When a transversal cuts two **parallel lines**, corresponding, alternate, and co-interior angles obey fixed relationships (e.g. alternate interior angles are equal).
- **Triangle congruence** rules: **SSS**, **SAS**, **ASA**, **RHS**. **Similarity** follows from equal angles (AAA) or proportional sides (SSS similarity), with the scale factor squared affecting areas and cubed affecting volumes.

#### Polygons and Circles

- For an n-sided polygon, sum of interior angles = `(n − 2)·180°`; each interior angle of a **regular** polygon = `(n − 2)·180°/n`.
- **Circle theorems** frequently tested in NAT-I: the **inscribed angle** equals half the **central angle** subtending the same arc; the **angle in a semicircle** is 90°; a **tangent** is perpendicular to the radius at the point of contact; the **tangent–chord angle** equals the inscribed angle in the alternate segment.

#### Trigonometric Ratios and Identities

- In a right triangle, `sin θ = opposite/hypotenuse`, `cos θ = adjacent/hypotenuse`, `tan θ = opposite/adjacent`. Reciprocals are cosecant, secant, cotangent.
- For **non-right** triangles use the **law of sines** to find a side given an opposite angle pair, and the **law of cosines** to find a side from the other two sides and the included angle (or to find an angle from three sides).
- **Heights and distances** problems: draw the right triangle, label the angle of elevation or depression, then apply `tan θ = height/base` or `sin θ = height/hypotenuse`.

#### Mensuration Reference

| Shape | Area / Volume | Key variables |
|---|---|---|
| Triangle | `A = ½·b·h` (or `½·a·b·sin C`) | base `b`, height `h` |
| Circle / sector | `A = πr²`, `A_sector = ½r²θ` (rad) | radius `r`, angle `θ` |
| Cylinder | `V = πr²h`, `LSA = 2πrh` | radius `r`, height `h` |
| Cone | `V = ⅓πr²h`, `CSA = πrℓ` | radius `r`, height `h`, slant `ℓ = √(r²+h²)` |
| Sphere | `V = 4/3 πr³`, `SA = 4πr²` | radius `r` |

#### NAT-I Question Patterns

- 5–8 MCQs of this combined topic per test, mixing one-step area/volume with two-step trig problems.
- Convert all linear units **before** computing areas (cm² vs m²) and volumes (cm³ vs m³).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Quadrant Behaviour and the ASTC Rule

On the **unit circle**, signs of the three primary functions follow **ASTC**: in **A**ll (Quadrant I) all are positive; **S**ine positive in II; **T**angent positive in III; **C**osine positive in IV. The reference angle is the acute angle made with the x-axis. For example, `sin 150° = sin 30° = ½` (QII), while `cos 150° = −cos 30° = −√3/2`. Compound identities worth committing:

- `tan θ = sin θ / cos θ`
- `1 + tan²θ = sec²θ`
- `1 + cot²θ = csc²θ`
- `sin(90° − θ) = cos θ`, `cos(90° − θ) = sin θ`

#### Radians vs Degrees

`θ (rad) = θ° × π/180`. A common NAT-I trap: using `s = rθ` with degrees — the answer comes out 180/π times too large. Always convert first when the angle is given in degrees but the formula expects radians.

#### Heights, Distances, and Bearings

- **Angle of elevation** is measured upward from the horizontal at the observer; **angle of depression** is measured downward from the horizontal at the top of an object. These two angles are **equal** when measured on the same line of sight.
- A **bearing** is measured clockwise from North (e.g. N 60° E or simply 060°). Translate bearings into a right triangle by drawing the North line and decomposing motion into N–S and E–W components.

#### Common Mistakes to Eliminate

1. Applying Pythagoras to a triangle that is not right-angled — switch to the law of cosines.
2. Using `½r²θ` for the **segment** area; that formula gives the **sector**. Subtract the triangular portion `½r²sin θ` for the segment.
3. Confusing **slant height** `ℓ` with vertical height `h` of a cone: `ℓ = √(r² + h²)`, and `CSA = πrℓ` while `V = ⅓πr²h`.
4. Dropping units when converting cm² to m² — divide by 10 000, not 100.
5. Mixing up `sin`, `cos`, `tan` because the problem asks for the **opposite** side but the diagram is rotated; always re-label the angle.

#### Worked Micro-Example

A right triangle has legs 5 cm and 12 cm. Find the hypotenuse and the area.

- Hypotenuse: `c = √(5² + 12²) = √169 = 13 cm`.
- Area: `A = ½·5·12 = 30 cm²`.
- Trig ratios at the angle opposite the 5 cm side: `sin θ = 5/13`, `cos θ = 12/13`, `tan θ = 5/12`. Verify: `sin²θ + cos²θ = 25/169 + 144/169 = 1` ✓

#### Practice Prompts

1. A triangle has sides 7, 9, and an included angle of 60°. Use the law of cosines to find the third side, then compute its area using `½·a·b·sin C`.
2. A sector of a circle with radius 10 cm subtends an angle of 1.2 radians. Find its arc length and area, then state what fraction of the full circle it represents.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
