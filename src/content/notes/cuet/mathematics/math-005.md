---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-005
topicName: "Parabola"
weight: 3
country: india
generated: "2026-03-29T05:04:42"
lastUpdated: 2026-09-06
diagramPrompt: "Educational diagram showing standard parabola y^2 = 4ax with labeled focus, directrix, vertex, latus rectum, and focal chord, white background, exam-style illustration"
---

# Parabola

### 🟢 Lite — Quick Review (1h–1d)

A parabola is the locus of a point whose distance from a fixed point, the **focus** S, always equals its perpendicular distance from a fixed line, the **directrix**. The defining constant is the eccentricity **e = 1** for a parabola, and 1 exactly for nothing else.

#### Everything you need for y² = 4ax

| Quantity | Value |
|---|---|
| Vertex | (0, 0) |
| Focus | (a, 0) |
| Directrix | x = −a |
| Axis | y = 0 |
| Latus rectum length | 4a |
| Latus rectum ends | (a, ±2a) |
| Distance of a point (x₁, y₁) from the focus | x₁ + a |
| Parametric point | (at², 2at) |
| Tangent at (x₁, y₁) | yy₁ = 2a(x + x₁) |
| Tangent of slope m | y = mx + a/m, touching (a/m², 2a/m) |
| Normal at (x₁, y₁) | y − y₁ = −(y₁/2a)(x − x₁) |
| Normal of slope m | y = mx − 2am − am³ |

#### The shift rule, which settles half the questions

If the vertex is at (h, k), substitute x → (x − h) and y → (y − k) into the standard form and read the geometry off. For **(y − k)² = 4a(x − h)** the parabola opens to the right, and:

- vertex (h, k)
- focus (h + a, k)
- directrix x = h − a
- latus rectum length 4a, ends at (h + a, k ± 2a)
- focal distance of (x₁, y₁) is x₁ − h + a

For **(x − h)² = 4a(y − k)** the parabola opens upward, and:

- vertex (h, k)
- focus (h, k + a)
- directrix y = k − a
- latus rectum ends at (h ± 2a, k + a)
- focal distance of (x₁, y₁) is y₁ − k + a

#### Five traps

- **A negative leading sign means the parabola opens the other way.** y² = −4ax has focus (−a, 0) and directrix x = a, and the focal distance is a − x₁, not x₁ + a.
- **Complete the square on the variable that is squared before reading anything.** In y² − 8x + 6y = 0 the y-term must be absorbed first, and the 8x term only after.
- **The directrix is always a, not 4a, away from the vertex.**
- **A point with k² < 4ah has no real tangent**, because the cubic for the tangent slopes has no real root. Recognising this saves a long pointless calculation.
- **The tangent makes equal angles with the focal radius and the line through the point parallel to the axis.** Every "angle at a point of contact" question falls out of that one fact.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### The four standard orientations

| Property | y² = 4ax | y² = −4ax | x² = 4ay | x² = −4ay |
|---|---|---|---|---|
| Opens | right | left | up | down |
| Vertex | (0, 0) | (0, 0) | (0, 0) | (0, 0) |
| Focus | (a, 0) | (−a, 0) | (0, a) | (0, −a) |
| Directrix | x = −a | x = a | y = −a | y = a |
| Axis | y = 0 | y = 0 | x = 0 | x = 0 |
| Latus rectum | 4a | 4a | 4a | 4a |
| Latus rectum ends | (a, ±2a) | (−a, ±2a) | (±2a, a) | (±2a, −a) |
| Focal distance SP | x₁ + a | a − x₁ | y₁ + a | a − y₁ |
| Parametric point | (at², 2at) | (−at², 2at) | (2at, at²) | (2at, −at²) |
| Tangent at parameter t | ty = x + at² | ty = −x + at² | tx = y + at² | tx = −y + at² |
| Normal at parameter t | y + tx = 2at + at³ | y − tx = −2at + at³ | x + ty = 2at + at³ | x − ty = −2at + at³ |

The parametric row is the reason questions that look long are often one substitution. A point is given with a parameter, the tangent is written in terms of that parameter, and everything follows.

#### Tangents and normals in the three useful forms

**Tangent to y² = 4ax at (x₁, y₁):** yy₁ = 2a(x + x₁).
**Tangent at parameter t:** ty = x + at², equivalently y = (1/t)x + at.
**Tangent of slope m:** y = mx + a/m, and its point of contact is (a/m², 2a/m). Note the contact point follows from the slope, not the other way round — this is the form to use when a question gives you a slope.

**Normal at (x₁, y₁):** y − y₁ = −(y₁/2a)(x − x₁).
**Normal at parameter t:** y + tx = 2at + at³.
**Normal of slope m:** y = mx − 2am − am³, and the point of contact is (am², −2am).

**Worked check.** For y² = 16x (a = 4) at (9, 12): the point is on the curve since 144 = 16 · 9. The tangent is 12y = 8(x + 9), i.e. 2x − 3y + 18 = 0. Substituting (9, 12): 18 − 36 + 18 = 0 ✓. The slope is 2/3, and 2a/y₁ = 8/12 = 2/3 ✓.

**Normals from a point.** Substituting a point (h, k) into y = mx − 2am − am³ gives the cubic

am³ + (2a − h)m + k = 0.

Its real roots are exactly the slopes of the normals from that point, and a cubic has at most three real roots, so at most three normals can be drawn from any point. A double root means a point on the evolute, where two normals coincide.

#### Chord of contact and the pair of tangents

- **Chord of contact** of the two tangents from (x₁, y₁): yy₁ = 2a(x + x₁) — the same expression as the tangent at that point, which is the standard surprise.
- **Tangents at parameters t₁, t₂** meet at **(a t₁ t₂, a(t₁ + t₂))**. So if the point of intersection is (h, k), then t₁t₂ = h/a and t₁ + t₂ = k/a, and t₁, t₂ are the roots of at² − (k/a)... precisely, of t² − (k/a)t + h/a = 0.
- **The combined equation of the pair of tangents** from (x₁, y₁) is S·S₁ = T², where S = y² − 4ax, S₁ = y₁² − 4ax₁, and T = yy₁ − 2a(x + x₁).
- **Real tangents exist** iff S₁ > 0, i.e. y₁² > 4ax₁. Equal to zero means the point is on the curve (one tangent); negative means no real tangent.

#### Chord with a given midpoint

The chord of y² = 4ax whose midpoint is (h, k) is

yk − 2a(x + h) = k² − 4ah.

**Derivation, worth doing once.** Take a general chord y = mx + c, substitute into y² = 4ax: m²x² + (2mc − 4a)x + c² = 0. The sum of the two roots gives the midpoint's x-coordinate h = (2a − mc)/m², and substituting back gives the midpoint's y-coordinate k = 2a/m. Now expand the chord-with-midpoint equation: yk − 2a(x + h) − k² + 4ah = 0, and with those expressions for h and k everything collapses to y − mx − c = 0. ✓

#### Focal chords and the reflective property

- A **focal chord** passes through the focus. Its endpoints have parameters t₁ and t₂ with **t₁t₂ = −1**, and its length is **a(t + 1/t)²**, which is **4a/sin²α** where α is its inclination to the axis. Both forms give 4a as the minimum, at t = 1, which is the latus rectum.
- The **harmonic-mean relation** for a focal chord with ends P, Q: 1/SP + 1/SQ = 1/a, so the semi-latus-rectum 2a is the harmonic mean of the two focal segments.
- The **reflective property**: a ray travelling parallel to the axis reflects off the parabola through the focus, and a source at the focus sends out a parallel beam. Algebraically, the tangent at any point bisects the angle between the focal radius and the line through that point parallel to the axis.
- The part of a tangent intercepted between the curve and the directrix subtends a right angle at the focus.
- The **locus of the intersection of two perpendicular tangents** is the directrix. This is not an analogy: for slopes m and −1/m the two tangents y = mx + a/m and y = −x/m − am meet where mx + a/m = −x/m − am, which gives m²x + a = −x − am², so (m² + 1)x = −a(m² + 1) and **x = −a** — the directrix itself, for every m.

---

### 🔴 Extended — Deep Study (3mo+)

#### Worked problem 1 — a shifted parabola from vertex and focus

A parabola has vertex (2, −3) and focus (5, −3). Find its equation, the latus rectum, the directrix, and the ends of the latus rectum.

- **Step 1 — identify the axis.** Both the vertex and the focus have y = −3, so the axis is the horizontal line y = −3.
- **Step 2 — identify the direction.** The focus is to the right of the vertex (5 > 2), so the parabola opens to the right and the form is (y − k)² = 4a(x − h).
- **Step 3 — find a.** The focus is a units from the vertex along the axis, so a = 5 − 2 = 3.
- **Step 4 — write the equation.** (y + 3)² = 12(x − 2). Expanded: y² + 6y + 9 = 12x − 24, so **y² − 12x + 6y + 33 = 0**.
- **Step 5 — latus rectum length.** 4a = **12 units**, with ends at (2 + 3, −3 ± 6) = **(5, 3)** and **(5, −9)**.
- **Step 6 — directrix.** x = h − a = 2 − 3 = **−1**.

Check with one point: the parametric point at t = 1 is (2 + 3, −3 + 6) = (5, 3), which is a latus-rectum end. Its distance to the focus (5, −3) is 6. Its distance to the directrix x = −1 is 5 + 1 = 6 ✓.

#### Worked problem 2 — reading a general quadratic

Find the vertex, focus, directrix, axis, and latus rectum ends of **y² − 8x + 6y = 0**.

- Complete the square on y: y² + 6y = 8x, so (y + 3)² = 8x + 9 = 8(x + 9/8).
- Therefore h = −9/8, k = −3, and 4a = 8 so a = 2.
- **Vertex:** (−9/8, −3).
- **Focus:** (h + a, k) = (−9/8 + 2, −3) = **(7/8, −3)**.
- **Directrix:** x = h − a = −9/8 − 2 = **−25/8**.
- **Axis:** y = −3.
- **Latus rectum length:** 8, with ends at (7/8, −3 + 4) and (7/8, −3 − 4), i.e. **(7/8, 1)** and **(7/8, −7)**.

Verification at the latus-rectum end (7/8, 1): distance to focus = 4; distance to directrix = 7/8 + 25/8 = 32/8 = 4 ✓.

#### Worked problem 3 — tangents from an external point

For **y² = 4x**, find the tangents from the point (2, 4), and the chord of contact.

- **Are the tangents real?** S₁ = y₁² − 4ax₁ = 16 − 8 = 8 > 0, so yes, two of them.
- **By parameters.** Tangents at t₁ and t₂ meet at (a t₁t₂, a(t₁ + t₂)). With a = 1: t₁t₂ = 2 and t₁ + t₂ = 4, so t₁, t₂ are the roots of t² − 4t + 2 = 0, namely **t = 2 ± √2**.
- The two tangents are (2 + √2)y = x + (2 + √2)² and (2 − √2)y = x + (2 − √2)².
- **Contact points:** (t², 2t) gives (6 + 4√2, 4 + 2√2) and (6 − 4√2, 4 − 2√2). The first lies on the curve: (4 + 2√2)² = 24 + 16√2 and 4(6 + 4√2) = 24 + 16√2 ✓.
- **Chord of contact:** yy₁ = 2a(x + x₁) gives 4y = 2(x + 2), i.e. **x − 2y + 2 = 0**. Both contact points satisfy it: (6 + 4√2) − 2(4 + 2√2) + 2 = 6 + 4√2 − 8 − 4√2 + 2 = 0 ✓.

#### Worked problem 4 — normals from a point

Find the normals to **y² = 4x** from the point (5, 2).

- The cubic for the slopes is am³ + (2a − h)m + k = 0 with a = 1, h = 5, k = 2: **m³ − 3m + 2 = 0**.
- Factor: (m − 1)²(m + 2) = 0, so m = 1 (a double root) and m = −2.
- The normal of slope m is y = mx − 2am − am³.
  - m = 1: y = x − 2 − 1 = **x − 3**.
  - m = −2: y = −2x + 4 + 8 = **−2x + 12**.
- Both pass through (5, 2): 5 − 3 = 2 ✓ and −10 + 12 = 2 ✓.
- **Points of contact** (am², −2am): for m = 1, (1, −2); for m = −2, (4, 4). Both lie on y² = 4x: 4 = 4 ✓ and 16 = 16 ✓.

The double root at m = 1 is not a coincidence and is worth understanding: the two "different" normals with the same slope have merged, so only two distinct normals are drawn, and (5, 2) is a point of the evolute.

#### Worked problem 5 — length of a focal chord

A focal chord of **y² = 16x** makes an angle of 60° with the positive x-axis. Find its length.

- 4a = 16, so a = 4, focus (4, 0), latus rectum 16.
- Inclination α = 60°, so the length is L = 4a csc²α.
- csc 60° = 2/√3, so csc² 60° = 4/3.
- L = 4 · 4 · 4/3 = **64/3 units ≈ 21.33 units**.

**Independent check using the parameters.** The slope of the chord is 2/(t₁ + t₂) = tan 60° = √3, so t₁ + t₂ = 2/√3. Since t₁t₂ = −1, t₁² + t₂² = (t₁ + t₂)² − 2t₁t₂ = 4/3 + 2 = 10/3. The length is SP + SQ = a(t₁² + 1) + a(t₂² + 1) = 4(10/3 + 2) = 4 · 16/3 = 64/3 ✓.

The minimum of a(t + 1/t)² over real t ≠ 0 is at t = ±1, giving 4a. That is the latus rectum, and it is why the latus rectum is the shortest focal chord.

#### Worked problem 6 — tangent of a given slope, and perpendicular tangents

For **y² = 4x**, find the tangent of slope 1 and the tangent perpendicular to it.

- Slope 1: y = x + 4/1 = **x + 4**, touching at (a/m², 2a/m) = (1, 2). Check: 2² = 4 · 1 ✓.
- The perpendicular slope is −1: y = −x + 4/(−1) = **−x − 4**, touching at (1, −2). Check: (−2)² = 4 ✓.
- Where do they meet? x + 4 = −x − 4, so 2x = −8, x = −4, and y = 0. The point (−4, 0) is on the directrix x = −1? No — it is not; check the rule: perpendicular tangents meet **on the directrix**, which is x = −a = −1. Here a = 1, so the directrix is x = −1, but the intersection is x = −4.

This is a real discrepancy and worth chasing, because it is exactly the kind of thing that eats marks. Recheck: tangent of slope m to y² = 4ax is y = mx + a/m. With a = 1, m = 1: y = x + 1. **I wrote 4 by mistake** — a/m = 1/1 = 1, not 4. So the tangent is y = x + 1, and the perpendicular is y = −x + a/(−1) = −x − 1. They meet where x + 1 = −x − 1, i.e. x = −1, y = 0 — and x = −1 is precisely the directrix ✓. The contact points are (a/m², 2a/m) = (1, 2) and (1, −2) ✓, which are the latus-rectum ends, as they must be since the latus rectum is the only chord whose endpoints have perpendicular tangents.

The lesson: a/m is a/m, not a·m. On a parabola y² = 4ax, the y-intercept of the tangent of slope m is a/m, and it is the single most mis-copied term in this chapter.

#### Worked problem 7 — the chord with a given midpoint

Find the chord of **y² = 4x** whose midpoint is (5, 2).

Using yk − 2a(x + h) = k² − 4ah with a = 1, h = 5, k = 2:

2y − 2(x + 5) = 4 − 20 → 2y − 2x − 10 = −16 → **y = x − 3**.

Check by the quadratic method: substituting y = x − 3 into y² = 4x gives (x − 3)² = 4x, so x² − 10x + 9 = 0, giving x = 1 or x = 9 and thus points (1, −2) and (9, 6). Their midpoint is (5, 2) ✓. Notice the chord y = x − 3 is the normal of slope 1 found earlier — the normal at a point and the chord with a certain midpoint are related, and recognising shared lines saves time.

#### Worked problem 8 — tangent, directrix, and axis

For y² = 4ax, the tangent at parameter t is ty = x + at².

- **Meeting the axis** (y = 0): ty = x + at² gives x = −at², so the point is **(−at², 0)**.
- **Meeting the directrix** (x = −a): ty = −a + at², so the point is **(−a, a(t² − 1)/t)**.
- **The point where the perpendicular from the point of contact meets the directrix** is D = (−a, 2at), and PD is the focal distance a(t² + 1).
- **Area of the triangle** formed by the tangent at t, the directrix and the axis: base PD = a(t² + 1) (horizontal), height |a(t² − 1)/t|, so

Area = (a²/2) · |t⁴ − 1| / |t|.

At t = 1 the tangent passes through the point (−a, 0), which is on the directrix itself, so the triangle degenerates and the area is 0 — that is the latus-rectum tangent.

---

### 🟠 Exam Essentials (1 day before)

#### Formula card — reproduce from memory

| Quantity | Formula |
|---|---|
| Rightward, vertex (h, k) | (y − k)² = 4a(x − h) |
| Focus | (h + a, k) |
| Directrix | x = h − a |
| Upward, vertex (h, k) | (x − h)² = 4a(y − k) |
| Focus | (h, k + a) |
| Directrix | y = k − a |
| Latus rectum | length 4a, ends (h + a, k ± 2a) |
| Focal distance SP | x₁ − h + a |
| Point at parameter t | (h + at², k + 2at) |
| Tangent at a point | yy₁ − k·... use yy₁ = 2a(x + x₁) for vertex at origin |
| Tangent at parameter t | ty = x + at² |
| Tangent of slope m | y = mx + a/m, contact (a/m², 2a/m) |
| Normal at parameter t | y + tx = 2at + at³ |
| Normal of slope m | y = mx − 2am − am³, contact (am², −2am) |
| Focal chord endpoints | t₁ t₂ = −1 |
| Focal chord length | 4a csc²α, minimum 4a |
| Perpendicular tangents meet on | the directrix |
| Chord with midpoint (h, k) | yk − 2a(x + h) = k² − 4ah |
| Real tangents from (h, k) | iff k² > 4ah |

#### Pre-submission checklist

- [ ] Complete the square on the squared variable **before** reading off h, k or a.
- [ ] Confirm the opening direction from the sign before choosing which focus and directrix to quote.
- [ ] For a shifted parabola, add a to h (or k) for the focus and subtract a for the directrix — never add twice or subtract twice.
- [ ] For a tangent of slope m, write a/m, not am. Check the y-intercept explicitly.
- [ ] For a normal, the slope is −t, and the contact point is (am², −2am).
- [ ] Before hunting for tangents from a point, test k² against 4ah: if k² < 4ah there are none.
- [ ] Substitute one known point back into the final equation.

#### The last thirty minutes

Write the four-orientation table from memory. Then, for a parabola given as (y + 3)² = 12(x − 2), give the vertex, focus, directrix and latus-rectum ends in four lines. Then find the tangent of slope 2 to y² = 4ax in symbolic form. Three exercises, every formula in the topic.

---

### 🔵 High-Yield Patterns

1. **Read the geometry off the shifted standard form, never off the expanded one.** (y − k)² = 4a(x − h) exposes h, k and a simultaneously; the expanded quadratic hides all three behind three terms to be rearranged.
2. **The focal distance is the fastest route to a point on the parabola.** For a point on y² = 4ax, SP = x + a. Once you know a point, everything else — tangents, normals, chords — has a known starting coordinate.
3. **The tangent and the chord of contact from the same point have the same equation form.** yy₁ = 2a(x + x₁) serves both, which is why the "chord of contact looks like a tangent" result always surprises people.
4. **Intersect the tangents at parameters t₁, t₂ to get a point, and reverse that to get t₁, t₂ from a point.** t₁t₂ = h/a and t₁ + t₂ = k/a is a two-line method for every question about tangents from an external point.
5. **Perpendicular tangents always meet on the directrix.** This settles a family of questions in one line and is a quick self-check on a slope computation.
6. **The latus rectum is the shortest focal chord**, so any "minimum length" wording in a focal-chord question is answered with 4a.
7. **One cubic handles every normals question.** am³ + (2a − h)m + k = 0. There is no separate case for one, two or three normals; count the real roots.
8. **Use the reflective property for angle questions.** The tangent bisects the angle between SP and the line through P parallel to the axis, which is why angle questions in this topic are usually two angle-bisector applications.

---

### 🟣 Traps and question forms you will meet

| Trap | What happens if you fall in | Fix |
|---|---|---|
| Writing a/m as am in the tangent of slope m | The y-intercept is wrong and every derived point is wrong | y = mx + **a/m** |
| Ignoring a negative sign on 4ax | Focus and directrix are swapped | y² = −4ax has focus (−a, 0) |
| Reading h and k after expanding instead of completing the square | The constant 9 or 9/8 is left unattached | (y + 3)² = 8(x + 9/8): h = −9/8, k = −3 |
| Assuming two tangents always exist from a point | You grind through a cubic with no real root | Test k² > 4ah first |
| Using a normal's slope as +t | The sign is wrong on the whole line | The normal's slope is −t |
| Treating the focus as 4a from the vertex | Everything derived from it is scaled wrongly | Focus is at distance a |
| Confusing the chord of contact with the pair of tangents | You get one line where two were asked for | Contact chord is a line; SS₁ = T² is the pair |
| Reading the normal's contact point as (at², 2at) | That is the point of the parabola, not of the normal's foot | For a normal, the contact point is (am², −2am) |

#### Four question forms, and the move that answers each

- **"Find the equation of the tangent to y² = 4ax at the point whose parameter is t."** Write ty = x + at², then check by substituting: t(2at) = at² + at² gives 2at² = 2at² ✓.
- **"Show that perpendicular tangents meet on the directrix."** Write the two tangents y = mx + a/m and y = −x/m − am, equate, and the (m² + 1) factor cancels to give x = −a. The cancellation is the proof.
- **"Find the length of the focal chord whose ends have parameters t₁ = 3."** Then t₂ = −1/3, and the length is a(3 + 1/3)² = a · 100/9. With a given, that is the answer — no trigonometry needed.
- **"Find the point of intersection of the tangent at t₁ and the normal at t₂."** Substitute both parametric line equations and solve the two linear equations in x and y. This is a two-by-two linear system, not a curve problem.

---

### 💡 Pro Tips

1. **Memorise the parametric forms, not the point forms.** Once (at², 2at) is automatic, the tangent and normal follow from the same parameter and every question becomes one substitution.
2. **Write the four-orientation table once on a single sheet and reuse it across the ellipse and hyperbola notes.** The three conics share the architecture, and one table serves all three.
3. **Always sanity-check the direction against the sign of 4a.** If the focus appears on the same side as the opening, the sign was dropped somewhere.
4. **Check tangents by substituting the point of contact.** The tangent form is right only if the contact point satisfies the parabola, and that check takes two seconds.
5. **When a question gives a slope, use the slope form; when it gives a point, use the point form.** Mixing them is where the a/m versus am error gets in.
6. **Sketch the parabola with vertex, focus and directrix marked before computing anything.** Whether a point is outside the curve (two tangents) or inside it (none) is then obvious, and that test is a legitimate part of your solution.
7. **Learn the latus-rectum tangent pair as a special case.** The tangents at t = 1 and t = −1 are perpendicular and meet on the directrix — the simplest instance of a fact that appears repeatedly.
8. **Revisit the reflective property when the physics-flavored questions come up.** It is one line of geometry and it is the whole basis of those angle items.

---

### 📚 Sources and where to go deeper

| Resource | Where to find it | Use it for |
|---|---|---|
| NCERT Class 11 Mathematics, Chapter 11 — Conic Sections | NCERT textbook | The official treatment: parabola as a focus–directrix locus, the standard forms, tangents, normals, focal chords, and the chord of contact |
| NCERT Class 11 Mathematics, Chapter 7 — Introduction to Three Dimensional Geometry | NCERT textbook | The geometric background for locus problems of this kind |
| NCERT Exemplar problems, Class 11 Mathematics | Widely available alongside the textbook | The denser problems on normals from a point and on focal chords |
| NCERT Class 12 Mathematics, Chapter 6 — Applications of Derivatives | NCERT textbook | The alternative route: maximise and minimise expressions on a parabola, and the two-point/tangent problems built on it |
| Class 11 Mathematics for entrance exams, R.D. Sharma | Widely available book | Large exercise sets on each standard form separately |
| Worked-problem compilations for CUET UG Mathematics | Reputable coaching material and past-paper books | Timed practice mixing parabola with the other conics |

---

**Continue your study**

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Parabola" sits in a personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — a one-day sprint across the highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — the sibling topics in this subject
- **[Ellipse Study Notes](/notes/cuet/mathematics/math-006/)** — the next conic, with the same table structure
