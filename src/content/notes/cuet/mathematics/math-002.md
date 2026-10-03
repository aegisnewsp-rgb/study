---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-002
topicName: Trigonometry
weight: 3
country: india
generated: "2026-03-29T05:04:43"
lastUpdated: "2026-09-07"
---

# Trigonometry

### 🟢 Lite — Quick Review (1h–1d)

If you can reconstruct the standard-angle table and the ASTC sign chart from memory and then solve a heights-and-distances problem without hesitating, stop here and go straight to practice.

#### The definitions in three lines

For a point P(x, y) on the unit circle centred at the origin, and θ the angle swept from the positive x-axis, **cos θ = x** and **sin θ = y**. Wherever the denominator is non-zero, **tan θ = y / x = sin θ / cos θ**. The reciprocals are csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ. The unit circle definition removes the acute-angle restriction, so these are valid for any real θ, including negative ones.

#### The two identities everything else is built from

- sin²θ + cos²θ = 1, for every real θ.
- Divide by cos²θ: 1 + tan²θ = sec²θ. Divide by sin²θ: 1 + cot²θ = csc²θ.

#### ASTC — All Sin Tan Cos, in quadrant order

| Quadrant | sin | cos | tan | Cotan |
|---|---|---|---|---|
| I | + | + | + | + |
| II | + | − | − | − |
| III | − | − | + | − |
| IV | − | + | − | + |

Read the letters: All positive in quadrant I, **S**in alone in II, **T**an alone in III, **C**os alone in IV. sec has the sign of cos, csc the sign of sin, cot the sign of tan.

#### The exact values table — memorise, do not look up

| Angle | sin | cos | tan | cot | cosec | sec |
|---|---|---|---|---|---|---|
| 0° / 0 | 0 | 1 | 0 | ∞ | ∞ | 1 |
| 30° / π/6 | 1/2 | √3/2 | 1/√3 | √3 | 2 | 2/√3 |
| 45° / π/4 | 1/√2 | 1/√2 | 1 | 1 | √2 | √2 |
| 60° / π/3 | √3/2 | 1/2 | √3 | 1/√3 | 2/√3 | 2 |
| 90° / π/2 | 1 | 0 | ∞ | 0 | 1 | ∞ |

Learn the sin column as √1/2, √2/2, √3/2 in the order 30, 45, 60 and read cos off by swapping.

#### The five addition and doubling formulas

- sin(A + B) = sin A cos B + cos A sin B
- cos(A + B) = cos A cos B − sin A sin B
- tan(A + B) = (tan A + tan B) / (1 − tan A tan B)
- sin 2θ = 2 sin θ cos θ
- cos 2θ = cos²θ − sin²θ = 1 − 2 sin²θ = 2 cos²θ − 1

#### Six traps that cost marks

- **tan 90°, cot 0°, sec 90°, csc 0° are undefined, not zero and not infinity.** "Does not exist" is the answer.
- **The square root gives only the non-negative root.** √(1 − cos 2θ) = |sin θ|, not sin θ.
- **Dividing by sin θ throws away solutions.** Solve first, then divide, and put the divided-out case back in.
- **Angle of elevation is measured up from the horizontal; angle of depression is measured down from the horizontal.** They are equal only when observer and object are on opposite sides of a horizontal line through the object.
- **π radians = 180°.** Keep both in your head or convert once and commit.
- **sin x = sin α has two families of solutions**, x = nπ + (−1)ⁿα. Do not stop at the principal branch.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### The unit circle and why it replaces the right triangle

The right-triangle definitions only work for acute angles. The unit circle fixes this: take the circle of radius 1 centred at the origin, and for any angle θ mark P = (cos θ, sin θ). Because P always satisfies x² + y² = 1, the identity sin²θ + cos²θ = 1 holds by construction, for every θ, with no acute-angle condition. In quadrant I the picture coincides with the right triangle; in the other quadrants the coordinate signs carry the sign information, which is exactly what ASTC records.

A consequence worth knowing: **there is no angle whose tangent is defined in every quadrant.** tan θ is undefined wherever cos θ = 0, i.e. at θ = 90° + 180°k.

#### Radians and degrees

| Degrees | 0 | 30 | 45 | 60 | 90 | 120 | 135 | 150 | 180 |
|---|---|---|---|---|---|---|---|---|---|
| Radians | 0 | π/6 | π/4 | π/3 | π/2 | 2π/3 | 3π/4 | 5π/6 | π |

sin and cos have period 2π; tan has period π, which is the smallest positive number p with tan(θ + p) = tan θ for all θ. Exact answers in surd form almost always come out in the first row or two of this table; anything else wants an addition formula.

#### Allied angles

Allied angles reduce to θ through a sign change governed by ASTC:

- sin(−θ) = −sin θ, cos(−θ) = cos θ, tan(−θ) = −tan θ
- sin(180° − θ) = sin θ, cos(180° − θ) = −cos θ, tan(180° − θ) = −tan θ
- sin(180° + θ) = −sin θ, cos(180° + θ) = −cos θ, tan(180° + θ) = tan θ
- sin(360° − θ) = −sin θ, cos(360° − θ) = cos θ
- sin(90° − θ) = cos θ, cos(90° − θ) = sin θ, tan(90° − θ) = cot θ
- sin(90° + θ) = cos θ, cos(90° + θ) = −sin θ, tan(90° + θ) = −cot θ

**Worked simplification.** Find the exact value of sin 15° = sin(45° − 30°).

sin(45° − 30°) = sin 45° cos 30° − cos 45° sin 30° = (√2/2)(√3/2) − (√2/2)(1/2) = (√6 − √2)/4.

The same route gives cos 15° = (√6 + √2)/4 and tan 15° = 2 − √3. Learn 15° this way and you never need to add it to the memorised table.

#### Identities and how to prove them on paper

An **identity** is an equality true for every value in the domain. To prove one, start on the more complicated side and convert everything to sin and cos.

**Worked proof of tan θ + cot θ = 2 / sin 2θ.**

tan θ + cot θ = (sin θ / cos θ) + (cos θ / sin θ) = (sin²θ + cos²θ) / (sin θ cos θ) = 1 / (sin θ cos θ) = 2 / (2 sin θ cos θ) = 2 / sin 2θ. ∎

**Worked proof of sin θ + cos θ = √2 sin(θ + 45°).**

√2 sin(θ + 45°) = √2 (sin θ cos 45° + cos θ sin 45°) = √2 (sin θ · √2/2 + cos θ · √2/2) = sin θ + cos θ. ∎

The general pattern in most identity questions: pull out the constant, use the addition formula, then finish with sin²θ + cos²θ = 1.

#### Product-to-sum, the reverse of the addition formulas

- 2 sin A cos B = sin(A + B) + sin(A − B)
- 2 sin A sin B = cos(A − B) − cos(A + B)
- 2 cos A cos B = cos(A + B) + cos(A − B)

These are used when a sum or difference of trig ratios needs to become a single ratio, for example in simplifying 2 sin A cos A + 2 sin B cos B.

#### Heights and distances

Two facts carry the whole chapter. With a horizontal line through the base of the object, **tan(angle of elevation) = height / horizontal distance** for an observer on the ground, and **tan(angle of depression) = height / horizontal distance** for an observer above looking down. When the two angles are the base angles of the same triangle — one at the foot, one at the top of a vertical — they are equal, and you can use either.

**Worked example — tower across a river.** A tower stands on one bank. From a point on the other bank, 30 m from the foot, the angle of elevation of the top is 60° and the angle of elevation of the foot is 30°. Find the height of the tower and the width of the river.

- Let the foot be F, the top T, the observation point P, with PF = 30.
- In right triangle PFT: tan 60° = TF / PF, so TF = 30 × √3 = 30√3 ≈ 51.96 m.
- Width w = distance from P to the near bank. The angle of elevation of F from P is 30°, so tan 30° = h / (30 + w), where h = 30√3.
- 1/√3 = 30√3 / (30 + w) → 30 + w = 30√3 × √3 = 90 → w = 60 m.

So the tower is 30√3 m high and the river is 60 m wide. The check that matters: the angle of elevation of the foot (30°) is smaller than that of the top (60°), which is what you would expect from a point on the far bank looking past a nearer bank.

**Worked example — two points in a line with the tower.** The angles of elevation of the top of a tower from two points A and B, with B 60 m further from the tower and both in line with its foot, are 60° and 30° respectively. Find the distance AB and the height.

- Let the foot be O, OA = x, OB = x + 60, height h.
- tan 60° = h/x → h = √3 x.
- tan 30° = h/(x + 60) → h = (x + 60)/√3.
- Equating: √3 x = (x + 60)/√3 → 3x = x + 60 → x = 30, so OA = 30 and OB = 90.
- h = √3 × 30 = 30√3 ≈ 51.96 m.

**Worked example — the classic tower problem.** The angle of elevation of the top of a tower from a point 40 m from its foot is 30°. Find the height, and the distance from which the angle of elevation is 45°.

- h = 40 tan 30° = 40/√3 = 40√3/3 ≈ 23.09 m.
- For 45°: tan 45° = 1 = h/d, so d = h = 40√3/3 ≈ 23.09 m.

Note the answer is a distance equal to the height. Recognising that 45° means equal legs is faster than computing.

#### Graph behaviour and transformations

For y = a sin(bx + c) + d, the same four numbers read off:

| Quantity | Value |
|---|---|
| Amplitude | \|a\| |
| Period | 2π / \|b\| |
| Horizontal (phase) shift | −c / b |
| Vertical shift | d |
| Midline | y = d |

Maximum value is d + |a|, minimum is d − |a|. For cosine, the graph starts at the maximum when a is positive, which is why y = a cos(bx) is the shifted form of y = a sin(bx). sin(bx) takes the value 0 at x = 0; cos(bx) takes the value 1 at x = 0.

---

### 🔴 Extended — Deep Study (3mo+)

#### Solving trigonometric equations properly

**Step 1 — reduce.** Bring everything to one side and use identities so the equation contains a single trig ratio in a single power, for example sin 2x = 2 sin x, or 1 − 2 sin²x = 0.

**Step 2 — solve, keeping every branch.** Substitute a new variable. If the equation becomes linear or quadratic in sin x or cos x, solve that, then map each algebraic root back to angles in the stated interval.

**Step 3 — check for lost roots.** Any time you divide by a trig function, the case where that function is zero must be tested separately.

**Worked problem 1 — 2 cos²x − 3 cos x + 1 = 0 for x ∈ [0, 2π].**

Treat cos x as the unknown. Factor: (2 cos x − 1)(cos x − 1) = 0.
- 2 cos x − 1 = 0 → cos x = 1/2 → x = π/3 or x = 5π/3.
- cos x − 1 = 0 → cos x = 1 → x = 0 or x = 2π.
So the four solutions in [0, 2π] are 0, π/3, 5π/3, 2π. The general solution is x = 2nπ or x = 2nπ ± π/3, n ∈ ℤ. Substituting x = 0 back in confirms 2 − 3 + 1 = 0. ✓

**Worked problem 2 — solve sin 2x = 2 sin x.** This one is a trap.

sin 2x = 2 sin x → 2 sin x cos x = 2 sin x → 2 sin x (cos x − 1) = 0.
- sin x = 0 → x = nπ.
- cos x = 1 → x = 2nπ, already inside the first family.
So x = nπ, n ∈ ℤ. If you had divided by 2 sin x at step two you would have written cos x = 1 and thrown away every x = nπ with n odd. Divide only after listing the factors.

**Worked problem 3 — solve 2 sin²x − 1 = 0.** Since 2 sin²x − 1 = −(1 − 2 sin²x) = −cos 2x, the equation is cos 2x = 0, so 2x = (2n + 1)·90°, x = (2n + 1)·45°. In [0, 360°]: 45°, 135°, 225°, 315°.

#### Working with a known sine or cosine

**Worked problem 4.** If sin θ = 3/5 and θ is in the second quadrant, find cos θ, tan θ, sin 2θ, tan 2θ and cos 2θ exactly.

- Sign first: quadrant II means sin positive, cos negative, tan negative.
- cos θ = −√(1 − sin²θ) = −√(1 − 9/25) = −√(16/25) = −4/5.
- tan θ = (3/5) / (−4/5) = −3/4.
- sin 2θ = 2 sin θ cos θ = 2 × (3/5) × (−4/5) = −24/25.
- cos 2θ = 1 − 2 sin²θ = 1 − 2(9/25) = 7/25.
- tan 2θ = sin 2θ / cos 2θ = (−24/25) / (7/25) = −24/7.

Two things to note. The signs came from ASTC before any arithmetic, and cos 2θ was computed from the 1 − 2 sin²θ form because sin θ was the known value. Always pick the double-angle form that uses what you were given. The check: sin²2θ + cos²2θ = (576 + 49)/625 = 625/625 = 1. ✓

#### Solving for the angle — inverse functions

- arcsin has range [−90°, 90°], so arcsin returns an angle in quadrants I or IV.
- arccos has range [0°, 180°], so arccos returns an angle in quadrants I or II.
- arctan has range (−90°, 90°).

**Worked problem 5.** If sin θ = 3/5 with 0° ≤ θ ≤ 360°, find both values of θ.

arcsin(3/5) is in quadrant I, call it α. The quadrant II solution is 180° − α. Both are valid; giving only α is the standard error. The general form covering both: θ = nπ + (−1)ⁿ α, n ∈ ℤ.

#### Triple-angle formulas and multiple angles

- sin 3θ = 3 sin θ − 4 sin³θ
- cos 3θ = 4 cos³θ − 3 cos θ
- sin θ + sin 2θ + sin 3θ = sin 2θ (1 + 2 cos θ)

**Worked example.** Evaluate sin 3θ when sin θ = 1/2 and θ is acute. Then 3θ = 90°, so sin 3θ = 1. The formula agrees: 3(1/2) − 4(1/8) = 3/2 − 1/2 = 1. ✓ The shortcut is to notice that 3θ is itself a standard angle.

#### Conditional statements and the "at least one" trap

Questions phrased as "if α and β are acute angles with tan α + tan β = 4/3 and tan α tan β = 1, find tan(α + β)" are solved by reading the formula directly: tan(α + β) = (4/3) / (1 − 1) = (4/3)/0, which is undefined, so α + β = 90°. The pattern: whenever the denominator 1 − tan A tan B vanishes, the sum is 90°.

#### Edge cases worth knowing

- **sin θ = 0 exactly when θ = nπ; cos θ = 0 exactly when θ = (2n + 1)π/2.** These are the two lines where you must test separately if you have divided.
- **|sin θ| ≤ 1 and |cos θ| ≤ 1 for all real θ**, so sin θ = 2 has no real solution. Checking this before grinding is fast.
- **sec θ csc θ is undefined at the axes**, and 1/(sin θ cos θ) = 2/sin 2θ, a useful rewrite whenever a denominator carries both ratios.
- **The general solution of sin x = sin α is x = nπ + (−1)ⁿ α.** For cos x = cos α it is x = 2nπ ± α.

---

### 🟠 Exam Essentials (1 day before)

#### Formula card — reproduce without looking

| Item | Formula |
|---|---|
| Core identity | sin²θ + cos²θ = 1 |
| Tangent and cotangent | 1 + tan²θ = sec²θ; 1 + cot²θ = csc²θ |
| Sum of sines/cosines | sin(A±B) = sin A cos B ± cos A sin B |
| Sum of cosines | cos(A±B) = cos A cos B ∓ sin A sin B |
| Sum of tangents | tan(A±B) = (tan A ± tan B)/(1 ∓ tan A tan B) |
| Double angle | sin 2θ = 2 sin θ cos θ; cos 2θ = cos²θ − sin²θ = 1 − 2 sin²θ = 2 cos²θ − 1 |
| Triple angle | sin 3θ = 3 sin θ − 4 sin³θ; cos 3θ = 4 cos³θ − 3 cos θ |
| Product to sum | 2 sin A cos B = sin(A+B) + sin(A−B) |
| General solution | sin x = sin α → x = nπ + (−1)ⁿ α; cos x = cos α → x = 2nπ ± α |
| Elevation/depression | tan θ = height / horizontal distance |

#### Pre-submission checklist

- [ ] Fix the sign of each ratio from the quadrant before doing any arithmetic.
- [ ] Confirm whether the question wants an answer in degrees or radians, and stay in one system throughout.
- [ ] Solve first, divide second, and put the divided-out case back in.
- [ ] Write ± before a square root, and keep the ± when the original equation had one.
- [ ] In a heights-and-distances problem, name the triangle and state which side is horizontal before substituting.
- [ ] For a general solution, state the value of n and that n runs over all integers.
- [ ] Verify one non-trivial answer by substituting it back, or by checking a Pythagorean identity.

#### The last thirty minutes

Write out the standard-angle table from memory, then the ASTC chart from memory, then solve one elevation problem and one equation-of-the-form 2cos²x − 3cos x + 1 = 0. That is the entire chapter compressed into three pieces of paper.

---

### 🔵 High-Yield Patterns

1. **Sign before magnitude.** Determine the signs of sin, cos and tan from the quadrant before touching sin²θ + cos²θ = 1. Choosing the wrong root of the square root is the single most common error in this chapter.
2. **Substitute u = sin x or u = cos x** for any equation that is quadratic in a ratio. It turns a trig equation into an algebra problem you already know how to do.
3. **Use the double-angle form that matches the given value.** If you are given sin θ, reach for cos 2θ = 1 − 2 sin²θ; if given cos θ, reach for cos 2θ = 2 cos²θ − 1.
4. **Never divide by sin θ or cos θ without a separate case.** Factoring first keeps every root; dividing first silently deletes half of them.
5. **In heights and distances, always look for the equal-angle pair.** When one angle is measured up from the foot and one measured down from a point directly above, the triangle's base angles are equal, and you need only one tangent call.
6. **Learn 15°, 75°, 18°, 22.5° as addition or difference results**, not as extra table rows. One formula beats a memorised extra row.
7. **Read the range of the answer.** If a question restricts θ to a range, the restriction is there because the equation has several solutions; the range is part of the mathematics, not a formality.
8. **Turn sums into products (or the reverse) when an expression refuses to simplify.** 2 sin A cos B = sin(A+B) + sin(A−B) dissolves most "prove that" identities that involve a product.

---

### 🟣 Traps and question forms you will meet

| Trap | What happens if you fall in | Fix |
|---|---|---|
| Treating tan 90° as 0 or ∞ | You give a value where none exists | tan 90° is undefined; answer "does not exist" |
| √(1 − cos 2θ) = sin θ | You lose the negative case | It equals \|sin θ\|; write ± sin θ |
| Dividing by sin x in sin 2x = 2 sin x | You lose x = nπ with n odd | Factor, solve each factor, then divide |
| cos θ = +√(1 − sin²θ) always | Wrong sign in quadrants II and III | Apply ASTC before taking the root |
| Only the principal value of arcsin | You miss the second angle | Give both, or use the general solution |
| Elevation and depression swapped | The base of the triangle is wrong | Elevation is from the ground up; depression is from the top down |
| Using sin(A + B) for sin(A − B) | A cross-term sign is wrong | sin(A − B) = sin A cos B − cos A sin B |
| Reporting a fraction instead of the simplified surd | Marks lost in an exact-answer question | 1/√3 = √3/3, 1/√2 = √2/2 |

#### Four question forms, and the move that answers each

- **"If tan θ + cot θ = 3, find sec θ csc θ."** Since sec θ csc θ = 1/(sin θ cos θ) = tan θ + cot θ, the answer is 3 directly — no solving for θ.
- **"Solve for all values in [0, 2π]"** — restrict to one period, list solutions in increasing order, and check the endpoints 0 and 2π separately since they are often both valid.
- **"Express sin 3θ in terms of cos θ."** From cos 3θ = 4cos³θ − 3cos θ and sin 3θ = sin θ(3 − 4sin²θ) = sin θ(4cos²θ − 1), take sin θ = √(1 − cos²θ) with the sign fixed by the quadrant.
- **"Prove that …"** Start from the side with more terms, convert to sin and cos, and end on sin²θ + cos²θ = 1. Do not start from the conclusion; that proves nothing.

---

### 💡 Pro Tips

1. **Recite the 30-45-60 triangle, not the values.** If you can draw the triangle and label √3/2 opposite 60°, every value in the table follows in either direction.
2. **Drill the ASTC chart in all four orientations** — starting at quadrant I, at quadrant II, and again for cot. The cotan column is the one that gets skipped and then guessed.
3. **Do heights-and-distances problems with a sketch, every time.** A wrong sketch is the cause of nearly every error in this application; ten seconds of drawing removes it.
4. **Keep a "lost root" habit.** After any division by a trig function, write the special case on a separate line even if you think it is impossible.
5. **Practise the "in terms of sin θ" and "in terms of cos θ" versions separately.** Most students memorise only the sin form of cos 2θ and then stall when the question hands them cos θ.
6. **Convert between degrees and radians once per problem, not line by line.** Mixed systems inside one calculation are a silent source of wrong answers.
7. **Use the range of a graph question as a check.** If a question says the maximum of a sin bx + d is 8 and the minimum is 2, then d = 5 and |a| = 3 before you do anything else. Two of the four parameters fall out immediately.
8. **Revisit this chapter before the applications-heavy topics.** Heights and distances, straight lines, and vectors all borrow the tangent ratio and the standard values; a short revisit here pays back twice.

---

### 📚 Sources and where to go deeper

| Resource | Where to find it | Use it for |
|---|---|---|
| NCERT Class 11 Mathematics, Chapter 3 — Trigonometric Functions | NCERT textbook | The official definitions, the unit circle, and the general solutions as the syllabus states them |
| NCERT Class 11 Mathematics, Chapter 8 — Introduction to Trigonometry | NCERT textbook | Straight-line definitions, trigonometric ratios, and the general identities |
| NCERT Class 12 Mathematics, Chapter 2 — Inverse Trigonometric Functions | NCERT textbook | Principal value branches and the range restrictions on arcsin, arccos and arctan |
| NCERT Class 11 Mathematics, Chapter 9 — Some Applications of Trigonometry | NCERT textbook | Heights and distances, worked at exactly the level the questions are set |
| Class 11 Mathematics for entrance exams, R.D. Sharma | Widely available book | Large exercise sets on identities, equations, and transformations |
| Worked-problem compilations for CUET UG Mathematics | Reputable coaching material and past-paper books | Timed practice across all three applications |
| A reputable mathematics reference site | Search for "heights and distances trigonometric ratios" | Diagrams for the two-point tower problems if your textbook set is thin on them |

---

**Continue your study**

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Trigonometry" sits in a personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — a one-day sprint across the highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — the sibling topics in this subject
