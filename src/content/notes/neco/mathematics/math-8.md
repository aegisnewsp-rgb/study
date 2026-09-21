---



exam: neco
examName: NECO SSCE
subject: mathematics
subjectName: Mathematics
topic: math-8
topicName: "Plane Geometry: Angles, Triangles and Polygons"
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.666858"
lastUpdated: "2026-09-21"
diagramPrompt: "Mathematical diagram showing Plane Geometry: Angles, Triangles and Polygons concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Plane Geometry: Angles, Triangles and Polygons

### 🟢 Lite — Quick Review (1h–1d)
> Three rules cover almost every NECO SSCE angle question: triangle interior angles sum to 180°, an exterior angle of a triangle equals the two opposite interior angles, and the interior angle sum of any *n*-sided polygon is (n − 2) × 180°.

The single most-tested fact is the **triangle angle sum property**: in ΔABC, A + B + C = 180° where each letter is an interior angle measured in degrees. From it drops the **exterior angle theorem** x = A + B (with x in degrees), and from that drops the rule that **sum of exterior angles of any convex polygon = 360°**.

For regular polygons, two shortcuts carry the rest:

- Each **interior angle** = (n − 2) × 180° / n, where *n* is the number of sides (unit: degree).
- Each **exterior angle** = 360° / n, where *n* is the number of sides (unit: degree).

| Polygon | n | Each interior | Each exterior |
|---|---|---|---|
| Equilateral triangle | 3 | 60° | 120° |
| Square | 4 | 90° | 90° |
| Regular hexagon | 6 | 120° | 60° |
| Regular octagon | 8 | 135° | 45° |

> 💡 **High-Yield Memory Hook:** "180 for triangles, 360 outside." Inside any triangle the angles sum to 180°; outside any convex polygon, the exterior angles sum to 360°. Pair these two numbers with the (n − 2) × 180° interior formula and you can crack roughly 80% of NECO SSCE plane geometry items.

### 🟡 Standard — Regular Study (2d–2mo)

#### Angle pairs students mis-classify
NECO often tests whether a candidate can name a pair, not just compute a value. The standard angle pairs and the figures that produce them:

| Pair | Sum / relation | Typical figure |
|---|---|---|
| Complementary | a + b = 90° | Two angles on a right-angle mark |
| Supplementary | a + b = 180° | Two angles on a straight line |
| Vertically opposite | a = b (equal) | Two crossing straight lines |
| Alternate (Z-angle) | a = b when lines parallel | Parallel lines cut by a transversal |
| Corresponding (F-angle) | a = b when lines parallel | Parallel lines cut by a transversal |
| Co-interior / consecutive interior | a + b = 180° when lines parallel | Same-side interior angles |

Parallel-line questions fail when candidates assume parallel lines without confirming — always check the diagram for the matching arrows on the two lines first.

#### Triangle classification and congruence shortcuts
By sides, a triangle is **scalene** (three unequal sides), **isosceles** (two equal sides, hence two equal base angles), or **equilateral** (three equal sides, each angle 60°). By angles it is **acute** (all three < 90°), **right-angled** (exactly one = 90°, so the other two sum to 90° by Pythagoras-friendly logic), or **obtuse** (one angle between 90° and 180°).

Congruence is decided by four conditions: **SSS** (three sides), **SAS** (two sides and the included angle), **ASA** (two angles and the included side), and **RHS** (right angle, hypotenuse, and one side). **SSA is not a valid congruence condition** — this is one of the examiner's favourite traps. For similarity the criteria are **AAA**, **SSS ratio** (three pairs of proportional sides), and **SAS ratio** (proportional sides with the included angle equal).

#### The polygon angle toolkit
For any *n*-sided polygon:

- Interior angle sum **S = (n − 2) × 180°** (n in dimensionless count, S in degrees).
- Each interior angle of a regular polygon **i = (n − 2) × 180° / n** (degrees).
- Each exterior angle of a regular polygon **e = 360° / n** (degrees).
- Sum of exterior angles of *any* convex polygon = **360°**.

The interior angle sum grows by exactly **180°** for each extra side added. That step is the most useful sanity check during long calculations: a heptagon (n = 7) should give (7 − 2) × 180° = 900°, and a nonagon (n = 9) should give (9 − 2) × 180° = 1260°.

> 📌 **Formula Check:** Every formula in this tier uses *n* (number of sides, pure count) and produces an **angle** measured in **degrees**. There is no SI unit for angles here — keep answers in degrees unless NECO specifies otherwise.

#### Worked application
A regular polygon has each exterior angle equal to 24°. Find (a) the number of sides and (b) the size of each interior angle.

Since e = 360° / n, we have 24° = 360° / n, giving n = 360° / 24° = 15 sides. Each interior angle = 180° − exterior = 180° − 24° = 156°. Equivalently, i = (15 − 2) × 180° / 15 = 13 × 180° / 15 = 2340° / 15 = 156°. Both routes land at the same answer, which is the proof the formulas agree.

> ⚠️ **Examiner Trap:** Candidates often write the exterior angle as the *interior* angle, then choose 156° as the exterior. Verify which one the question asks for, and remember i + e = 180° for a regular polygon.

### 🔴 Extended — Deep Study (3mo+)

#### Edge cases and boundary conditions
A **reflex angle** lies between 180° and 360° and is the interior angle of a non-convex (concave) polygon at its single indent. In such polygons the (n − 2) × 180° rule still gives the *total* interior sum, but counting individual angles must allow one of them to exceed 180°. Reflex angles rarely appear directly in NECO SSCE but show up indirectly when a polygon is described as "concave" in a construction-style question.

A **right-angled triangle** couples triangle-angle-sum with Pythagoras' rule: a² + b² = c², where *a* and *b* are the legs in metres (or cm, km — keep units consistent) and *c* is the hypotenuse. The two acute angles sum to 90°, so the larger acute angle belongs opposite the longer leg.

Triangles drawn the same shape but different sizes are **similar**, not congruent. Congruence means identical side lengths and angles; similarity only demands equal angles and proportional sides.

#### Common mistakes worth memorising

1. Writing the polygon interior sum as n × 180° instead of (n − 2) × 180° — adds 360° per polygon.
2. Treating the **exterior** angle sum as something other than 360° — it never changes with n.
3. Stating that any triangle with two equal sides is isosceles *and* equilateral — an equilateral triangle needs all three sides equal.
4. Applying the exterior angle theorem of triangles to quadrilaterals — the theorem is a triangle-only result.
5. Calling SSA a congruence condition. It only proves congruence when the angle is opposite the longer side (the ambiguous case resolves), and NECO will not give that safety net.

#### Connections to neighbouring topics
- **Construction:** bisecting an angle, constructing a triangle given three sides/angles, and copying an angle all rest on the 180° and 360° sums.
- **Mensuration:** area formulas for triangles, parallelograms, and regular polygons depend on knowing interior angles — for instance the apothem of a regular n-gon embeds 360°/n at its centre.
- **Trigonometry:** sine and cosine rules for triangles branch directly from the angle-sum and Pythagorean foundations laid here.

#### Advanced practice prompts

1. A regular polygon has an interior angle of 162°. How many sides does it have? (Hint: each exterior = 180° − 162° = 18°; n = 360° / 18° = 20, so an icosagon.)
2. The angles of a quadrilateral are in the ratio 3 : 4 : 5 : 6. Find the largest angle. (Hint: sum is (4 − 2) × 180° = 360°; six parts = 60°, so largest = 6 × 60° = 120°.)

> 🔍 **Deep-Dive Cue:** When a problem mentions parallel lines and a transversal, immediately write down which pairs are alternate, which are corresponding, and which are co-interior — the three-pair check catches most of the marks lost in such items.

---

## Continue your study

- **[View this topic in your NECO SSCE roadmap](/roadmap/?exam=neco&duration=1mo)** — see where "Plane Geometry: Angles, Triangles and Polygons" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neco&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NECO SSCE exam overview](/exams/neco/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/neco/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
