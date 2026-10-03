---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-006
topicName: Ellipse
weight: 3
country: india
generated: "2026-03-29T05:05:06"
lastUpdated: "2026-09-08"
---

# Ellipse

### 🟢 Lite — Quick Review (1h–1d)

An **ellipse** is the locus of a point whose distances from two fixed **foci** add to a constant. That constant is written 2a, and it must exceed the distance between the foci. In standard form, centred at the origin with the major axis along the x-axis:

**x²/a² + y²/b² = 1, with a > b > 0.**

#### The six constants, in one table

| Quantity | Formula | Notes |
|---|---|---|
| Focal distance | c² = a² − b² | The minus sign is what separates an ellipse from a hyperbola |
| Eccentricity | e = c/a | Always 0 ≤ e < 1; e = 0 gives a circle |
| Major axis | 2a | along the x-axis here |
| Minor axis | 2b | along the y-axis here |
| Latus rectum | 2b²/a | through a focus, perpendicular to the major axis |
| Directrices | x = ±a/e | not x = ±c |
| Foci | (±c, 0) | |
| Vertices | (±a, 0) | ends of the major axis |
| Co-vertices | (0, ±b) | ends of the minor axis |
| Director circle | x² + y² = a² + b² | where two perpendicular tangents meet |
| Auxiliary circle | x² + y² = a² | used to convert eccentric-angle problems |
| Parametric point | (a cos θ, b sin θ) | θ is the **eccentric** angle, not the polar angle |

#### The shift rule

Centre (h, k) means write **(x − h)²/a² + (y − k)²/b² = 1**. Foci become (h ± c, k), vertices (h ± a, k), co-vertices (h, k ± b), directrices x = h ± a/e, director circle (x − h)² + (y − k)² = a² + b². Every tangent and normal formula acquires the same − h, − k.

#### Four traps

- **c² = a² − b², not a² + b².** The plus sign belongs to the hyperbola.
- **Directrices are x = ±a/e, not x = ±c.** For a = 5, e = 4/5 the directrix is at ±25/4, well outside the vertices.
- **tan θ = by/ax on the ellipse**, not y/x, because θ is the eccentric angle. The polar angle of OP is a different angle.
- **The latus rectum is 2b²/a, not 2a and not 2b.** For a = 5, b = 3 it is 18/5, which is shorter than the minor axis.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Reading an equation into its constants

Any ellipse is put into standard form by dividing through by the constant on the right, then comparing with x²/a² + y²/b² = 1. **The larger denominator is a²**, which is the first thing to establish — reading them the wrong way round flips a² − b² into a negative number and invalidates everything after it.

**Worked example.** 9x² + 25y² = 225. Divide by 225: x²/25 + y²/9 = 1. So a² = 25 and b² = 9, giving a = 5, b = 3.
- c² = 25 − 9 = 16 → c = 4, foci (±4, 0).
- e = c/a = 4/5 = 0.8.
- Latus rectum = 2b²/a = 2 · 9 / 5 = **18/5**.
- Directrices: x = ±a/e = ±5/(4/5) = **±25/4**.
- Director circle: x² + y² = 25 + 9 = **34**.
- Latus rectum endpoints through (4, 0): (4, ±9/5). Check: 16/25 + (81/25)/9 = 16/25 + 9/25 = 1 ✓.

**Worked example.** 4x² + 9y² = 36. Divide by 36: x²/9 + y²/4 = 1, so a = 3, b = 2.
- c² = 9 − 4 = 5 → c = √5, e = √5/3.
- Latus rectum = 2 · 4 / 3 = **8/3**.
- Directrices: x = ±3/(√5/3) = **±9/√5 = ±9√5/5**.

#### Eccentricity and the directrix relation

e = c/a measures how far from circular the ellipse is. e = 0 is a circle; as e → 1 the ellipse flattens and approaches a parabola, which has e exactly 1. For every point P on the ellipse with M the foot of the perpendicular from P to the nearer directrix,

**PF = e · PM.**

This is the ellipse analogue of the parabola's focus–directrix definition, with e < 1 instead of 1. It is the quickest check that a directrix you have written is correct: pick a vertex, compute PF and PM, and confirm the ratio.

**Check.** Ellipse x²/25 + y²/9 = 1, point P = (5, 0), focus (4, 0), right directrix x = 25/4. PF = 1. PM = 5 − 25/4 = −5/4, distance 5/4. e · PM = (4/5)(5/4) = 1 ✓.

#### Eccentric angle and the parametric form

Every point on the ellipse is (a cos θ, b sin θ). The parameter θ is the **eccentric angle**: the point (a cos θ, b sin θ) is where the line from the origin at angle θ hits the **auxiliary circle** x² + y² = a² and the ellipse at the same time. Hence

cos θ = x/a, sin θ = y/b, and tan θ = (b y)/(a x) — not y/x.

**Worked check.** Ellipse x²/25 + y²/9 = 1, point (3, 12/5). cos θ = 3/5, sin θ = (12/5)/3 = 4/5. Check: cos²θ + sin²θ = 9/25 + 16/25 = 1 ✓, so such a θ exists, and the point is on the ellipse: 9/25 + (144/25)/9 = 9/25 + 16/25 = 1 ✓.

#### Tangents

**Tangent at (x₁, y₁):** xx₁/a² + yy₁/b² = 1.
**Shifted:** (x − h)(x₁ − h)/a² + (y − k)(y₁ − k)/b² = 1.
**At parameter θ:** (x cos θ)/a + (y sin θ)/b = 1.
**Of slope m:** y = mx ± √(a²m² + b²). There are two such tangents, one on each side.

**Worked example.** Ellipse x²/25 + y²/9 = 1, tangent at (3, 12/5):
3x/25 + (12/5)y/9 = 1 → 3x/25 + 4y/15 = 1 → multiply by 75 → **9x + 20y = 75**.
Check the point: 27 + 48 = 75 ✓. Slope of the tangent: −9/20.

**Worked example — a tangent of a given slope.** For y = (4/5)x + 5 to touch the ellipse, substituting must give a perfect square:
x²/25 + ((4/5)x + 5)²/9 = 1 → 9x² + 25((16/25)x² + 8x + 25) = 225 → 9x² + 16x² + 200x + 625 = 225 → 25x² + 200x + 400 = 0 → 25(x + 4)² = 0.
The double root x = −4 confirms tangency, at the point (−4, 9/5). Compare with the formula: a²m² + b² = 25 · 16/25 + 9 = 16 + 9 = 25, so √25 = 5 ✓, and the two tangents of slope 4/5 are y = (4/5)x ± 5.

#### Normals

**Normal at (x₁, y₁):** slope a²y₁/(b²x₁), so the equation is y − y₁ = (a²y₁/(b²x₁))(x − x₁). Note the sign — the tangent's slope is −b²x₁/(a²y₁) and the normal is its negative reciprocal.

**At parameter θ:** (a x)/cos θ − (b y)/sin θ = a² − b².

**Worked check.** At (3, 12/5) with a = 5, b = 3: normal slope = 25 · (12/5) / (9 · 3) = 60/27 = **20/9**, which is the negative reciprocal of the tangent's −9/20 ✓. The line is y − 12/5 = (20/9)(x − 3) → 20x − 9y = −192/5, or **100x − 45y = −192**. The parametric form gives (5x)(5/3) − (3y)(5/4) = 16 → 100x − 45y = 192 · (12/12)... recomputing: 25x/3 − 15y/4 = 16, times 12 gives 100x − 45y = 192. That is the negative of the line above, which is the same line with both coefficients and the constant flipped. The point satisfies it: 300 − 108 = 192 ✓.

**The director circle and perpendicular tangents.** Two tangents from an external point (h, k) to the ellipse are perpendicular exactly when

**h² + k² = a² + b².**

This circle, x² + y² = a² + b², is the **director circle**; shifted, it is (x − h)² + (y − k)² = a² + b². Its radius is √(a² + b²), always larger than a, so the whole circle lies outside the ellipse — which is necessary, since perpendicular tangents must come from a point outside the curve.

**Worked example.** Ellipse x²/25 + y²/9 = 1, point (5, 3). Check the director circle: 25 + 9 = 34 = a² + b² ✓. Tangents from (5, 3) at parameters θ satisfy 5cos θ/5 + 3 sin θ/3 = 1, i.e. cos θ + sin θ = 1, whose solutions in [0, 2π) are θ = 0 and θ = 90°.
- At θ = 0 the point is (5, 0) and the tangent is x = 5.
- At θ = 90° the point is (0, 3) and the tangent is y = 3.
x = 5 and y = 3 are perpendicular ✓, and they meet at (5, 3) ✓, exactly as the director circle predicts.

#### Chords

- **Chord with midpoint (h, k):** xh/a² + yk/b² = h²/a² + k²/b².
  Check with a horizontal chord: midpoint (0, k) gives yk/b² = k²/b², so y = k ✓.
- **Combined equation of the pair of tangents** from (h, k): SS₁ = T², with S = x²/a² + y²/b² − 1, S₁ = h²/a² + k²/b² − 1, and T = xh/a² + yk/b² − 1.
- **Focal chord:** a chord through a focus. The latus rectum is the focal chord perpendicular to the major axis, with endpoints (c, ±b²/a) and (−c, ±b²/a).

#### Reflection and a useful area

The **reflective property**: a ray from one focus reflects off the ellipse and passes through the other, so the tangent at any point bisects the angle between the two focal radii. That is the basis of every "angle at a point of contact" question on the ellipse.

**Area of the triangle** cut off by a tangent and the coordinate axes. The tangent at parameter θ meets the x-axis at (a sec θ, 0) and the y-axis at (0, b csc θ), so the area is

½ · a sec θ · b csc θ = ab / (2 sin θ cos θ) = **ab / sin 2θ**.

The minimum is **ab**, reached when sin 2θ = 1, i.e. θ = 45°. The area of the ellipse itself is πab.

---

### 🔴 Extended — Deep Study (3mo+)

#### Worked problem 1 — a shifted ellipse read from first principles

Find the centre, axes, vertices, co-vertices, foci, directrices, latus rectum and director circle of

**(x − 2)²/25 + (y − 1)²/9 = 1.**

- **Centre:** (2, 1), from the −h and −k inside the squares.
- **a² = 25, b² = 9**, so a = 5, b = 3, and the major axis is horizontal.
- **c² = 25 − 9 = 16**, c = 4. Foci: (2 + 4, 1) and (2 − 4, 1), i.e. **(6, 1)** and **(−2, 1)**.
- **Major axis length 10** along y = 1; **minor axis length 6** along x = 2.
- **Vertices:** (2 + 5, 1) and (2 − 5, 1) = **(7, 1)** and **(−3, 1)**.
- **Co-vertices:** (2, 1 + 3) and (2, 1 − 3) = **(2, 4)** and **(2, −2)**.
- **Eccentricity:** e = 4/5.
- **Directrices:** x = 2 ± a/e = 2 ± 25/4, i.e. **x = 33/4** and **x = −17/4**.
- **Latus rectum:** length 2b²/a = 18/5, through (6, 1) with ends (6, 1 ± 9/5) = (6, 14/5) and (6, −4/5). Check: (6−2)²/25 + (14/5 − 1)²/9 = 16/25 + (9/5)²/9 = 16/25 + 81/25/9 = 16/25 + 9/25 = 1 ✓.
- **Director circle:** (x − 2)² + (y − 1)² = 34.

**Verification by the directrix relation.** Take the vertex (7, 1), focus (6, 1), and the right directrix x = 33/4. PF = 1. PM = 33/4 − 7 = 33/4 − 28/4 = 5/4. e · PM = (4/5)(5/4) = 1 ✓.

#### Worked problem 2 — tangents and normals at the same point

On the ellipse x²/25 + y²/9 = 1, find the tangent and the normal at the point (3, 12/5), and the eccentric angle of that point.

- **Confirm the point is on the curve:** 9/25 + (144/25)/9 = 9/25 + 16/25 = 1 ✓.
- **Eccentric angle:** cos θ = x/a = 3/5, sin θ = y/b = (12/5)/3 = 4/5. These satisfy cos²θ + sin²θ = 1, so θ is a genuine angle; tan θ = 4/3.
- **Tangent:** 3x/25 + (12/5)y/9 = 1 → **9x + 20y = 75**, slope −9/20.
- **Tangent via the parametric form:** x cos θ/a + y sin θ/b = 1 → 3x/25 + (4/5)y/3 = 1 → 3x/25 + 4y/15 = 1 → the same line ✓.
- **Normal slope:** a²y₁/(b²x₁) = 25(12/5) / (9 · 3) = 60/27 = 20/9. The normal is **20x − 9y = −192/5**, or 100x − 45y = −192.
- **Check perpendicularity:** slope of tangent × slope of normal = (−9/20)(20/9) = −1 ✓.
- **Check both lines pass through the point:** 9(3) + 20(12/5) = 27 + 48 = 75 ✓; 100(3) − 45(12/5) = 300 − 108 = 192, so the line is 100x − 45y = 192, the same line with all signs reversed ✓.

#### Worked problem 3 — tangents from a point on the director circle

Find the two tangents from the point (5, 3) to the ellipse x²/25 + y²/9 = 1, and show they are perpendicular.

- Is (5, 3) outside? 25/25 + 9/9 = 2 > 1, so yes, two tangents exist.
- **Using the pair-of-tangents equation.** S = x²/25 + y²/9 − 1, S₁ = 5²/25 + 3²/9 − 1 = 1 + 1 − 1 = 1, T = 5x/25 + 3y/9 − 1 = x/5 + y/3 − 1.
  SS₁ = T² becomes (x²/25 + y²/9 − 1) = (x/5 + y/3 − 1)². Expanding the right side and multiplying through, the quadratic part is
  x²/25 + y²/9 − x²/25 − 2xy/15 − y²/9 = −2xy/15.
  So the two lines are −2xy/15 + (linear and constant terms) = 0, and factoring gives the pair x = 5 and y = 3.
- **Simpler route, same answer.** A tangent at parameter θ passes through (5, 3) when 5 cos θ/5 + 3 sin θ/3 = 1, i.e. cos θ + sin θ = 1. The solutions are θ = 0 and θ = 90°.
  - θ = 0: point (5, 0), tangent 5x/25 = 1 → **x = 5**.
  - θ = 90°: point (0, 3), tangent 3y/9 = 1 → **y = 3**.
- **Perpendicular?** x = 5 is vertical and y = 3 is horizontal, so yes ✓.
- **On the director circle?** (5, 3) satisfies x² + y² = 25 + 9 = 34 = a² + b² ✓.

The second route takes four lines. Learn it and the director circle becomes a check rather than a calculation.

#### Worked problem 4 — perpendicular tangents, direction reversed

Find the point on the director circle of x²/25 + y²/9 = 1 from which the tangents meet the axes at equal distances from the origin, and confirm the tangents are perpendicular.

- The condition "meets the axes at equal distances" means the tangent meets x = r and y = r for some r, i.e. the tangent has form x/a + y/b = k with equal intercepts, which forces the tangent to be x + y = const with equal intercepts.
- The director circle is x² + y² = 34. Take the point where y = x: 2x² = 34, x = √17, so **P = (√17, √17)**.
- **Confirm perpendicularity from the director circle directly:** P satisfies x² + y² = 34 = a² + b², so by the theorem the tangents from P are perpendicular ✓.
- **Sanity check that P is external:** 17/25 + 17/9 = 17(9 + 25)/225 = 578/225 ≈ 2.57 > 1 ✓.

The point of this problem is that the director circle answers "are the tangents perpendicular?" without any tangent calculation at all.

#### Worked problem 5 — the latus rectum and focal chords

For the ellipse x²/25 + y²/9 = 1, find the latus rectum through the focus (4, 0) and its endpoints.

- The latus rectum is perpendicular to the major axis, so it lies on **x = 4**.
- Substitute: 16/25 + y²/9 = 1 → y²/9 = 9/25 → y² = 81/25 → **y = ±9/5**.
- **Endpoints: (4, 9/5) and (4, −9/5)**, and the length is 18/5 = 2b²/a ✓.
- Both satisfy the curve: 16/25 + (81/25)/9 = 16/25 + 9/25 = 1 ✓.
- Distance from each endpoint to the focus (4, 0) is 9/5, and to the directrix x = 25/4 it is 25/4 − 4 = 9/4... and e · PM = (4/5)(9/4) = 9/5, matching the focal distance ✓. Two routes, same number.

#### Worked problem 6 — the chord with a given midpoint

Find the chord of x²/25 + y²/9 = 1 whose midpoint is (5, 0).

Using xh/a² + yk/b² = h²/a² + k²/b² with h = 5, k = 0:

5x/25 + 0 = 25/25 → **x/5 = 1**, i.e. **x = 5**.

That is the vertical line through the right-hand vertex, tangent to the ellipse at (5, 0) — and a tangent is a chord whose two ends coincide, so the degenerate answer is correct here. Choosing a smaller midpoint gives a genuine chord.

**Worked example with a real chord.** Midpoint (3, 0): 3x/25 = 9/25 → x = 3. Intersecting x = 3 with the ellipse: 9/25 + y²/9 = 1 → y²/9 = 16/25 → y = ±12/5. Endpoints (3, 12/5) and (3, −12/5), midpoint (3, 0) ✓.

#### Worked problem 7 — area cut off by a tangent

A tangent to the ellipse x²/25 + y²/9 = 1 meets the positive axes. Find the minimum area of the triangle it forms.

- The tangent at parameter θ cuts the x-axis at (a sec θ, 0) and the y-axis at (0, b csc θ), so the area is ab / sin 2θ.
- With a = 5, b = 3, ab = 15, and sin 2θ ≤ 1, so **Area ≥ 15**, with equality at θ = 45°.
- At θ = 45° the point of contact is (5/√2, 3/√2) and the tangent is (x/√2)/5 + (y/√2)/3 = 1, i.e. x/5 + y/3 = √2, which cuts the axes at (5√2, 0) and (0, 3√2). Area = ½ · 5√2 · 3√2 = 15 ✓.

#### Edge cases and the conic family

- **e = 0 gives a circle**: c = 0, the foci merge at the centre, and the directrices go to infinity. Any "ellipse" with a = b is a circle, and the director circle then coincides with a circle of radius √2 a.
- **e → 1 flattens the ellipse** into the parabola. Every parabola you met in the previous note is the limiting case of an ellipse.
- **The directrices are outside the ellipse** for every e < 1, since a/e > a. A directrix drawn between the vertex and the focus is always wrong.
- **A circle has eccentricity 0 and a parabola exactly 1**, which is the cleanest way to remember where the ellipse sits in the family.
- **Only two normals can be drawn from a point strictly inside the director circle region defined by the evolute**; from a general point the ellipse admits up to four normals, which is why normal questions on the ellipse are more delicate than on the parabola. If a question asks for normals from a point, work from the slope form a²y₁/(b²x₁) and check each candidate touches the curve.

---

### 🟠 Exam Essentials (1 day before)

#### Formula card — reproduce from memory

| Quantity | Formula |
|---|---|
| Standard form | x²/a² + y²/b² = 1, a > b > 0 |
| Focal distance | c² = a² − b² |
| Eccentricity | e = c/a, 0 ≤ e < 1 |
| Directrices | x = ±a/e |
| Latus rectum | 2b²/a, ends (c, ±b²/a) |
| Focus–directrix relation | PF = e · PM |
| Parametric point | (a cos θ, b sin θ) |
| tan of eccentric angle | (b y)/(a x) |
| Tangent at (x₁, y₁) | xx₁/a² + yy₁/b² = 1 |
| Tangent at parameter θ | (x cos θ)/a + (y sin θ)/b = 1 |
| Tangent of slope m | y = mx ± √(a²m² + b²) |
| Normal slope at (x₁, y₁) | a²y₁/(b²x₁) |
| Normal at parameter θ | (a x)/cos θ − (b y)/sin θ = a² − b² |
| Chord with midpoint (h, k) | xh/a² + yk/b² = h²/a² + k²/b² |
| Director circle | x² + y² = a² + b² |
| Auxiliary circle | x² + y² = a² |
| Area from a tangent | ab / sin 2θ, minimum ab |
| Area of the ellipse | πab |

#### Pre-submission checklist

- [ ] Establish which denominator is a² — it is the larger one. Everything else depends on it.
- [ ] Use c² = a² − b² and check the result is positive.
- [ ] Directrices at ±a/e, never ±c.
- [ ] Latus rectum 2b²/a, and the ends are at x = c, not x = a.
- [ ] Tangent slope has a minus sign, normal slope does not, and their product is −1.
- [ ] Eccentric angle: cos θ = x/a, sin θ = y/b.
- [ ] If a point is claimed to be on the ellipse, substitute and check you get 1.
- [ ] Confirm the director circle has radius √(a² + b²) > a, i.e. it lies entirely outside the curve.

#### The last thirty minutes

Convert 16x² + 9y² = 144 into standard form and write down a, b, c, e, the latus rectum, the directrices and the director circle. Then find the tangent and the normal at the point (−3, 12/5), and confirm the two slopes multiply to −1. Three exercises, every formula in the topic.

---

### 🔵 High-Yield Patterns

1. **Standardise the equation first, always.** Every other formula in the chapter takes a standard-form ellipse as input, and reading a, b off a general quadratic is the only step that is genuinely error-prone.
2. **Check the directrix with PF = e · PM at a vertex.** Two arithmetic steps, and it catches the ±c versus ±a/e confusion immediately.
3. **The director circle answers perpendicular-tangent questions without computing a tangent.** Once you know the point is on it, the answer is yes.
4. **Use the parameter when a point has a clean cos θ and sin θ.** A point like (3, 12/5) on x²/25 + y²/9 = 1 is a scaled 3-4-5 triangle, and the eccentric angle comes out as 3/5 and 4/5 — the whole problem then reduces to substituting into the parametric tangent.
5. **Tangents of slope m come with ±, always.** y = mx ± √(a²m² + b²) gives both at once, and remembering there are two saves a duplicated question.
6. **A tangent is a chord with coincident endpoints.** Any "chord with midpoint" question whose midpoint sits on the curve has a tangent as its answer; expect that and do not treat it as a contradiction.
7. **Convert to the auxiliary circle for eccentric-angle problems.** The map (x, y) → (a cos θ, b sin θ) turns the ellipse into the unit circle, so a whole class of otherwise awkward problems becomes a standard trigonometry exercise.
8. **Learn the normal slope as a²y₁/(b²x₁), with no minus sign.** The sign is the one thing that makes normals look wrong on the ellipse, and it is never negative.

---

### 🟣 Traps and question forms you will meet

| Trap | What happens if you fall in | Fix |
|---|---|---|
| Reading a² as the smaller denominator | c² = a² − b² comes out negative | a² is the larger denominator, always |
| Using c² = a² + b² | You have imported the hyperbola formula | Ellipse minus, hyperbola plus |
| Directrix at x = ±c | The line lands inside the ellipse | Directrices are x = ±a/e |
| Latus rectum quoted as 2a or 2b | Wrong on every numeric answer | It is 2b²/a |
| Writing the normal slope as −b²x₁/(a²y₁) | That is the tangent's slope | Normal slope is +a²y₁/(b²x₁) |
| Using tan θ = y/x | θ is not the polar angle of OP | tan θ = (b y)/(a x) |
| Forgetting −h and −k in a shifted ellipse | Every geometric quantity is misplaced | Write (x − h)² and (y − k)² explicitly |
| Expecting one tangent of a given slope | You report half the answer | There are two, at ± |
| Claiming a point lies on the ellipse without checking | The tangent formula is applied off the curve | Substitute and confirm you get 1 |

#### Four question forms, and the move that answers each

- **"Find the eccentricity of 9x² + 16y² = 144."** Divide by 144: x²/16 + y²/9 = 1, so a = 4, b = 3, c = √(16 − 9) = √7, and **e = √7/4**.
- **"Show that the tangents from a point on the director circle are perpendicular."** State h² + k² = a² + b² as the condition and cite the pair-of-tangents equation SS₁ = T² with the quadratic part checked; the x² and y² coefficients cancel exactly when h² + k² = a² + b².
- **"Find the equation of the tangent at the end of the latus rectum."** Take the point (c, b²/a), substitute into xx₁/a² + yy₁/b² = 1, and clear denominators. For a = 5, b = 3: the point is (4, 9/5), so 4x/25 + (9/5)y/9 = 1 → 4x/25 + y/5 = 1 → **4x + 5y = 25**.
- **"Find the area of the triangle formed by a tangent and the axes."** x-intercept a sec θ, y-intercept b csc θ, area ab/sin 2θ. If the question says minimum area, the answer is ab.

---

### 💡 Pro Tips

1. **Memorise the constants table, not the derivations.** a, b, c, e, the latus rectum, the directrices, the director circle, and the auxiliary circle are seven facts, and every question on the topic is a permutation of them.
2. **Always check which axis is the major one** before writing foci or directrices. In a shifted ellipse the major axis follows whichever denominator is larger, not whichever letter you read first.
3. **Spot the 3-4-5 in the point, not in the equation.** A point like (3, 12/5) on x²/25 + y²/9 = 1 has x/a = 3/5 and y/b = 4/5, and that pair is the eccentric angle. Recognising it turns three lines of algebra into one substitution.
4. **Use the director circle as a fast yes/no test** whenever a question asks whether two tangents are perpendicular. It is a single squaring-and-adding step.
5. **Verify a tangent by substituting its point of contact**, and verify a normal by multiplying the two slopes. Both checks take seconds and both catch the sign error that the normal formula invites.
6. **Keep the parabola note open beside this one.** The tables are parallel, and knowing that e = 1 is a parabola, e < 1 an ellipse, and e > 1 a hyperbola turns three chapters into one.
7. **Do the shifted-ellipse version of at least three problems.** Centre offsets are where the marks go, and the only defence is practice with h and k both non-zero.
8. **Learn the pair-of-tangents identity SS₁ = T² once.** It is the same trick for the ellipse, the parabola, and the hyperbola, and it unlocks questions on all three that have no elementary alternative.

---

### 📚 Sources and where to go deeper

| Resource | Where to find it | Use it for |
|---|---|---|
| NCERT Class 11 Mathematics, Chapter 11 — Conic Sections | NCERT textbook | The official treatment: the focal definition, standard form, eccentricity, tangents, normals, chords, and the director and auxiliary circles |
| NCERT Class 11 Mathematics, Chapter 1 — Sets | NCERT textbook | The locus viewpoint — an ellipse is a locus, and the chapter states it that way |
| NCERT Exemplar problems, Class 11 Mathematics | Widely available alongside the textbook | Problems on shifted ellipses, chord midpoints, and the director circle |
| NCERT Class 12 Mathematics, Chapter 6 — Applications of Derivatives | NCERT textbook | Maximum and minimum on an ellipse, and the tangency conditions that reuse the tangent form |
| Class 11 Mathematics for entrance exams, R.D. Sharma | Widely available book | Large exercise sets on the standard form and its constants |
| Worked-problem compilations for CUET UG Mathematics | Reputable coaching material and past-paper books | Timed practice on the conic chapters together |
| Parabola Study Notes | /notes/cuet/mathematics/math-005/ | The parallel table; reading the two side by side is the fastest route to fluency in the conic sections |

---

**Continue your study**

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Ellipse" sits in a personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — a one-day sprint across the highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — the sibling topics in this subject
- **[Parabola Study Notes](/notes/cuet/mathematics/math-005/)** — the previous conic, with the same table structure
