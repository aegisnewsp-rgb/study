---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-003
topicName: Straight Lines
weight: 3
country: india
generated: "2026-03-29T05:04:39"
lastUpdated: "2026-06-19"
---

# Straight Lines

### 🟢 Lite — Quick Review (1h–1d)

If you can convert between the four standard forms of a line without hesitating, write the distance formula and the angle formula from memory, and solve a perpendicular-through-a-point problem in three lines, you have what this topic needs.

#### The one definition

A straight line is the locus of all points (x, y) satisfying a linear equation ax + by + c = 0. Its **slope** m is the vertical change per unit of horizontal change between any two of its points, so it is the same everywhere along the line. The **angle of inclination** θ is the anticlockwise angle from the positive x-axis to the line, measured in 0 ≤ θ < 180°, and tan θ = m.

#### The five forms, side by side

| Form | Equation | Use it when | Slope | Intercepts |
|---|---|---|---|---|
| Slope-intercept | y = mx + c | slope and y-intercept are known | m | y: c; x: −c/m |
| Point-slope | y − y₁ = m(x − x₁) | one point and the slope are known | m | substitute y = 0 |
| Two-point | (y − y₁)/(y₂ − y₁) = (x − x₁)/(x₂ − x₁) | two points are known, no slope | (y₂−y₁)/(x₂−x₁) | substitute y = 0 |
| Intercept | x/a + y/b = 1 | both intercepts are known and non-zero | −b/a | x: a, y: b |
| General | ax + by + c = 0 | for distance, angle, collinearity | −a/b | x: −c/a, y: −c/b |

Two conversions worth memorising: the general form gives **slope = −a/b** and **y-intercept = −c/b**. The y-intercept is simply the point where x = 0, which is the fastest way to read it.

#### The four formulas that do the work

- **Distance from (x₁, y₁) to ax + by + c = 0:** d = |ax₁ + by₁ + c| / √(a² + b²).
- **Distance between parallel lines ax + by + c₁ = 0 and ax + by + c₂ = 0:** d = |c₁ − c₂| / √(a² + b²).
- **Angle between two lines with slopes m₁, m₂:** tan θ = |(m₁ − m₂) / (1 + m₁ m₂)|.
- **Collinearity of three points:** the triangle they form has area zero, i.e. x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂) = 0.

#### Six quick checks

- **Parallel** ⟺ m₁ = m₂, or the (a, b) pairs are proportional.
- **Perpendicular** ⟺ m₁ m₂ = −1, or a₁a₂ + b₁b₂ = 0.
- **A line perpendicular to ax + by + c = 0 is bx − ay + k = 0.** No slope calculation needed.
- **A line parallel to ax + by + c = 0 is ax + by + k = 0**, with the same a and b.
- **The value ax₁ + by₁ + c is the running total on the line's left-hand side.** Its sign tells you which side of the line the point is on — the same sign means the same side.
- **A vertical line has no slope** and is written x = k. It is perpendicular to every horizontal line, so the m₁m₂ = −1 test does not apply to it.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Slope, inclination, and the quadrants of a line

m = (y₂ − y₁)/(x₂ − x₁). A positive slope means the line rises left to right; a negative slope means it falls. Because θ must lie in 0 ≤ θ < 180°, a **negative slope always corresponds to an obtuse inclination**. If m = −2/3 then θ = 180° − arctan(2/3) ≈ 180° − 33.7° ≈ 146.3°, not −33.7°. Reading the angle of inclination off a negative slope as a negative number is a recurring error.

m = 0 is a horizontal line, y = k, with θ = 0°. A vertical line x = k has no defined slope and θ = 90°.

#### Working between the forms

**General → slope-intercept.** From ax + by + c = 0, divide by b: y = −(a/b)x − c/b. Both coefficients drop out at once.

**Slope-intercept → general.** From y = mx + c, rearrange to mx − y + c = 0, then multiply by any non-zero constant you like. Scaling a line's equation by a non-zero number does not change the line, so 4x + 3y + 1 = 0 and −8x − 6y − 2 = 0 are the same line. Choose the form with the smallest integers for further work.

**Two-point → general.** The quickest route when the two points look messy: compute m, use point-slope, then clear the denominator and expand.

**General → intercept form.** Divide ax + by + c = 0 by −c to get −(a/c)x − (b/c)y = 1, so a_inter = −c/a and b_inter = −c/b. This needs c ≠ 0; a line through the origin has no intercept form.

#### Parallel and perpendicular lines

Two non-vertical lines with slopes m₁ and m₂ are parallel iff m₁ = m₂, and perpendicular iff m₁m₂ = −1. In general form, this becomes cleaner:

- **Parallel** ⟺ a₁/a₂ = b₁/b₂, i.e. the (a, b) pairs are proportional but c is not in the same ratio.
- **Perpendicular** ⟺ a₁a₂ + b₁b₂ = 0. This holds even for vertical lines, so it is the more reliable test when any line is x = k.

**Worked example.** The line 3x − 4y + 5 = 0 has a = 3, b = −4.
- A parallel line is 3x − 4y + k = 0.
- A perpendicular line has a′b′ = −ab = 12; taking a′ = 4, b′ = 3 satisfies 4 × 3 = 12. So the perpendicular family is 4x + 3y + k = 0, which is the bx − ay + k = 0 form with the signs flipped to be tidy.

#### Angle between two lines

tan θ = |(m₁ − m₂)/(1 + m₁m₂)|, valid when 1 + m₁m₂ ≠ 0, where θ is the acute angle between them. Two cases need separate treatment:

- **1 + m₁m₂ = 0.** The denominator vanishes, which means the lines are perpendicular and θ = 90°. The formula is not "infinite"; the geometry is.
- **m₁ = m₂.** tan θ = 0, so θ = 0. That tells you the lines are parallel, but not whether they are **coincident**. Coincidence is decided by comparing the constants: for ax + by + c₁ = 0 and ax + by + c₂ = 0, they coincide iff c₁ = c₂.

#### Distance of a point from a line

d = |ax₁ + by₁ + c| / √(a² + b²). The absolute value is not optional — a distance is never negative, and the expression inside can be negative. The denominator √(a² + b²) is the length of the normal vector (a, b), which is why it appears.

**Worked example.** Distance from (1, 1) to 3x + 4y + 2 = 0:

d = |3(1) + 4(1) + 2| / √(9 + 16) = 9/5 = 1.8. ✓

The same expression gives the **foot of the perpendicular** if you use it as a signed offset, and the **reflection of the point** if you double it. The foot is at (x₁ − 2aλ, y₁ − 2bλ) where λ = (ax₁ + by₁ + c)/(a² + b²); the reflection is at (x₁ − 2aλ, y₁ − 2bλ) measured from the point to the line and then the same again. Work it through in the Extended section.

#### Collinearity and the area test

Three points (x₁, y₁), (x₂, y₂), (x₃, y₃) are collinear iff

x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂) = 0.

This is the same expression that gives twice the area of the triangle, so you get collinearity and area from one formula. A faster test when the numbers are small: compute the slope of P₁P₂ and of P₂P₃ and check they are equal — but this fails if x-coordinates coincide, which is exactly when the determinant version is safer.

#### Section formula and centroid

The point dividing the segment joining (x₁, y₁) and (x₂, y₂) internally in the ratio m : n is

((m x₂ + n x₁)/(m + n), (m y₂ + n y₁)/(m + n)).

Note the weights are crossed: the coordinate nearer each endpoint carries the weight of the *other* segment. Setting m = n = 1 gives the midpoint. For external division, use a minus in one of the weights and check the result lies outside the segment.

The centroid of a triangle with vertices (x₁, y₁), (x₂, y₂), (x₃, y₃) is ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3). The incenter and circumcentre use weights, but the centroid and midpoint are the two that appear most often.

#### Area of a triangle from coordinates

Area = ½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|.

**Worked example.** Vertices (1, 1), (4, 2), (3, 6):
Area = ½ |1(2 − 6) + 4(6 − 1) + 3(1 − 2)| = ½ |−4 + 20 − 3| = ½ (13) = 13/2 square units.

---

### 🔴 Extended — Deep Study (3mo+)

#### Worked problem 1 — two points to a general equation

Find the equation of the line through (2, 3) and (−1, 5), and read off its intercepts and inclination.

- Slope m = (5 − 3)/(−1 − 2) = 2/(−3) = −2/3.
- Point-slope from (2, 3): y − 3 = −(2/3)(x − 2). Multiply by 3: 3y − 9 = −2x + 4.
- Collect: **2x + 3y − 13 = 0**.
- Check both points: 4 + 9 − 13 = 0 and −2 + 15 − 13 = 0. ✓
- x-intercept (y = 0): 2x = 13, x = 13/2 = 6.5.
- y-intercept (x = 0): 3y = 13, y = 13/3 ≈ 4.33.
- Inclination: m is negative, so θ = 180° − arctan(2/3) ≈ 146.3°.

#### Worked problem 2 — parallel and perpendicular through a point

Through the point (2, −3), find the line parallel to 3x − 4y + 5 = 0, the line perpendicular to it, and the distance from the point to the given line.

**Parallel.** Same a, b: 3x − 4y + k = 0. Substitute (2, −3): 6 + 12 + k = 0 → k = −18. So **3x − 4y − 18 = 0**.

**Perpendicular.** The given slope is −3/(−4) = 3/4, so the perpendicular slope is −4/3. Point-slope: y + 3 = −(4/3)(x − 2) → 3y + 9 = −4x + 8 → **4x + 3y + 1 = 0**. Check the point: 8 − 9 + 1 = 0 ✓. Check perpendicularity in general form: a₁a₂ + b₁b₂ = 3(4) + (−4)(3) = 12 − 12 = 0 ✓.

The shortcut gives the same answer: the perpendicular family to ax + by + c = 0 is bx − ay + k = 0, so −4x − 3y + k = 0, which after multiplying by −1 is 4x + 3y − k = 0. Substituting (2, −3): 8 − 9 − k = 0 → k = −1, giving 4x + 3y + 1 = 0. Same line.

**Distance from the point to 3x − 4y + 5 = 0:** |3(2) − 4(−3) + 5| / 5 = |6 + 12 + 5| / 5 = 23/5 = 4.6.

#### Worked problem 3 — distance between parallel lines

Find the distance between 3x + 4y − 7 = 0 and 3x + 4y + 3 = 0.

Both have a = 3, b = 4, so they are parallel. The distance is |c₁ − c₂| / √(a² + b²) = |−7 − 3| / 5 = 10/5 = **2**.

**Alternative route, worth knowing.** Take a point from the first line that lies on the x-axis: y = 0 gives 3x = 7, so P = (7/3, 0). Distance from P to the second line: |3(7/3) + 4(0) + 3| / 5 = |7 + 3| / 5 = 2. ✓ Both methods agree.

#### Worked problem 4 — angle between two lines

Find the acute angle between y = 2x + 3 and y = (1/2)x + 7.

m₁ = 2, m₂ = 1/2. tan θ = |(2 − 1/2)/(1 + 2 · 1/2)| = |(3/2)/2| = 3/4, so θ = arctan(3/4) ≈ 36.87°.

**Worked example — the perpendicular case.** Find the angle between 2x + 3y − 6 = 0 and 3x − 2y + 1 = 0. The slopes are m₁ = −2/3 and m₂ = 3/2, whose product is −1, so the lines are perpendicular and θ = 90°. In general form: a₁a₂ + b₁b₂ = 2(3) + 3(−2) = 0 ✓. Note that the formula's denominator 1 + m₁m₂ is exactly 0 here — the "undefined tangent" is the signal, not a failure.

#### Worked problem 5 — collinearity, both ways

Show that A(1, 2), B(3, 4), C(7, 8) are collinear and find the line through them.

**Method 1, slopes.** m(AB) = (4 − 2)/(3 − 1) = 1. m(BC) = (8 − 4)/(7 − 3) = 1. Equal slopes ⟹ collinear. The line through A with slope 1: y − 2 = x − 1, i.e. **y = x + 1**, or x − y + 1 = 0.

**Method 2, determinant.** 1(4 − 8) + 3(8 − 2) + 7(2 − 4) = −4 + 18 − 14 = 0 ✓.

**Method 3, the distance test.** d(A, B) = √(2² + 2²) = 2√2. d(B, C) = √(4² + 4²) = 4√2. d(A, C) = √(6² + 6²) = 6√2. Since 2√2 + 4√2 = 6√2, the triangle inequality is met with equality, so the points are collinear.

#### Worked problem 6 — foot of the perpendicular and the reflection

Find the foot of the perpendicular from (1, 1) to 3x + 4y + 2 = 0, and the reflection of (1, 1) in that line.

**Step 1 — the perpendicular line through the point.** The given line has slope −3/4, so the perpendicular has slope 4/3. Through (1, 1): y − 1 = (4/3)(x − 1) → 4x − 3y − 1 = 0.

**Step 2 — solve the pair.**
3x + 4y + 2 = 0 and 4x − 3y − 1 = 0.
Multiply the first by 3: 9x + 12y = −6.
Multiply the second by 4: 16x − 12y = 4.
Adding: 25x = −2, so **x = −2/25**. Substituting back: 3(−2/25) + 4y = −2 → −6/25 + 4y = −2 → 4y = −44/25 → **y = −11/25**.

**Step 3 — check both equations.** In 3x + 4y + 2: (−6 − 44)/25 + 2 = −2 + 2 = 0 ✓. In 4x − 3y − 1: (−8 + 33)/25 − 1 = 1 − 1 = 0 ✓.

**The foot is (−2/25, −11/25).** Sanity check with the distance formula: from (1, 1) the distance to the line is 9/5, and the straight-line distance from (1, 1) to the foot is √((27/25)² + (36/25)²) = √(729 + 1296)/25 = 45/25 = 9/5 ✓.

**Reflection.** The foot is the midpoint of the segment joining a point to its reflection, so reflect (1, 1) through (−2/25, −11/25): the image is (2(−2/25) − 1, 2(−11/25) − 1) = (−29/25, −47/25). Check: 3(−29/25) + 4(−47/25) + 2 = (−87 − 188)/25 + 2 = −11 + 2 = −9, which is exactly the negative of the value at (1, 1), namely 9. Equal and opposite values mean equal distances on opposite sides. ✓

#### Worked problem 7 — section formula, midpoint, centroid

- **Midpoint of (1, 2) and (4, 8):** ((1 + 4)/2, (2 + 8)/2) = (5/2, 5).
- **Point dividing (1, 2)–(4, 8) in ratio 2 : 3:** ((2·4 + 3·1)/5, (2·8 + 3·2)/5) = (11/5, 22/5) = (2.2, 4.4). Check by the section formula on each coordinate: 1 + (2/5)(4 − 1) = 1 + 6/5 = 11/5 ✓.
- **Centroid of the triangle (1, 2), (4, 8), (−2, 0):** ((1 + 4 − 2)/3, (2 + 8 + 0)/3) = (1, 10/3).
- **The line joining the midpoints of two sides of a triangle is parallel to the third side and half its length.** For the triangle above, AB has length 2√2, and the line joining its midpoint (5/2, 5) to the midpoint of AC, which is (−1/2, 1), has slope (1 − 5)/(−1/2 − 5/2) = (−4)/(−3) = 4/3... let me recompute: AC joins (1,2) and (−2,0), slope = (0−2)/(−2−1) = 2/3. Midpoints: M_AB = (5/2, 5), M_AC = (−1/2, 1). Slope of the joining line = (1 − 5)/(−1/2 − 5/2) = (−4)/(−3) = 4/3. That does not equal 2/3, so I have mislabelled. Taking midpoints of AB and BC instead: M_AB = (5/2, 5), M_BC = (1, 4). Slope = (4 − 5)/(1 − 5/2) = (−1)/(−3/2) = 2/3, which equals the slope of AC, as the midpoint theorem requires. ✓

#### Worked problem 8 — the family of lines through an intersection

All lines through the point where L₁ = 0 and L₂ = 0 meet can be written as **L₁ + λL₂ = 0** for some real λ. If you want a line through that intersection with a specific direction, substitute the direction's condition to solve for λ.

**Example.** Find the line through the intersection of 2x + 3y = 6 and 3x − 4y = 7 that is perpendicular to the line 3x − 4y + 1 = 0.

- The second line has slope 3/4, so we need a line of slope −4/3.
- Write the family: (2x + 3y − 6) + λ(3x − 4y − 7) = 0 → (2 + 3λ)x + (3 − 4λ)y − (6 + 7λ) = 0.
- Its slope is −(2 + 3λ)/(3 − 4λ). Set this equal to −4/3: −(2 + 3λ)/(3 − 4λ) = −4/3 → 3(2 + 3λ) = 4(3 − 4λ) → 6 + 9λ = 12 − 16λ → 25λ = 6 → λ = 6/25.
- Substituting: (2 + 18/25)x + (3 − 24/25)y − (6 + 42/25) = 0 → (68/25)x + (51/25)y − (192/25) = 0 → **68x + 51y − 192 = 0**. Slope = −68/51 = −4/3 ✓.

#### Shifting the origin

If the origin is moved to (h, k), the new coordinates are X = x − h, Y = y − k, so x = X + h and y = Y + k. To rewrite an equation in the new frame, substitute and collect. The line 2x + 3y − 6 = 0 becomes 2X + 3Y + 2h + 3k − 6 = 0.

This matters in one specific place: the x- and y-intercepts change when the origin moves, but **angles, slopes, distances, and areas do not**. If a question gives intercepts in a shifted frame, convert the points before using a distance formula.

---

### 🟠 Exam Essentials (1 day before)

#### Formula card — reproduce from memory

| Quantity | Formula |
|---|---|
| Slope | (y₂ − y₁)/(x₂ − x₁) |
| Slope of ax + by + c = 0 | −a/b |
| y-intercept of ax + by + c = 0 | −c/b |
| Perpendicular to ax + by + c = 0 | bx − ay + k = 0 |
| Parallel to ax + by + c = 0 | ax + by + k = 0 |
| Perpendicular test, general form | a₁a₂ + b₁b₂ = 0 |
| Point to line | \|ax₁ + by₁ + c\|/√(a² + b²) |
| Between parallel lines | \|c₁ − c₂\|/√(a² + b²) |
| Angle between lines | tan θ = \|(m₁ − m₂)/(1 + m₁m₂)\| |
| Collinearity | x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂) = 0 |
| Triangle area | ½ of the same expression, absolute value |
| Section formula (ratio m:n) | ((m x₂ + n x₁)/(m+n), (m y₂ + n y₁)/(m+n)) |
| Centroid | ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3) |

#### Pre-submission checklist

- [ ] Put every line into general form before using the distance, angle, or perpendicular test.
- [ ] Reduce the coefficients to the smallest integers — the arithmetic is easier and the answers stay exact.
- [ ] Keep the absolute value in the distance formula, and check the sign of the inside before discarding it.
- [ ] In the angle formula, check 1 + m₁m₂ first: if it is zero, the answer is 90°.
- [ ] Check whether the question asks for the angle between *lines* (always taken acute) or the *angle of inclination* (0° to 180°).
- [ ] Substitute one known point back into your final equation before writing the answer down.
- [ ] For a negative slope, report the inclination as an obtuse angle, not a negative one.

#### The last thirty minutes

Convert a line given in general form to slope-intercept, then back. Find the distance from (2, 3) to 4x − 3y + 2 = 0. Then write a line through (2, 3) parallel to it and one perpendicular to it. Three exercises, and you have exercised every conversion this topic uses.

---

### 🔵 High-Yield Patterns

1. **Work in general form.** Slope-intercept is convenient for reading a y-intercept; general form is required for distance, angle, collinearity and the perpendicular test. Convert once at the start of each problem and stay there.
2. **Use bx − ay + k = 0 for a perpendicular** instead of computing −1/m. It saves two arithmetic steps and never fails on a zero numerator.
3. **Distinguishing parallel from coincident is a constants question, not a slopes question.** Equal slopes gives you "parallel or coincident"; comparing c decides which.
4. **For the angle between two lines in general form, a₁b₂ − a₂b₁ over a₁a₂ + b₁b₂** is the same formula written without slopes. It works when one of the lines is vertical, where the slope version fails.
5. **A negative slope means an obtuse inclination.** Fix the sign before converting to degrees.
6. **Collinearity is a special case of the area formula.** Learn one expression and use it for three different question types: collinearity, area, and (with the sign kept) which side of a line a point is on.
7. **Convert coordinates to the nearest grid point before computing.** Most hand-worked problems are built on small integer coordinates; if you have 0.6 and 0.8, you have a 3-4-5 triangle.
8. **Solve the pair of equations for a foot or an intersection by eliminating the variable that shares a coefficient.** The two-line simultaneous system in the foot-of-perpendicular problem is two minutes' work once you pick the right multiplier.

---

### 🟣 Traps and question forms you will meet

| Trap | What happens if you fall in | Fix |
|---|---|---|
| Reading m = a/b from ax + by + c = 0 | Sign of the slope is wrong on half the questions | m = −a/b |
| Dropping the absolute value in the distance formula | A negative distance is reported | Distance is \|…\|/√(a²+b²) |
| Reporting a negative angle of inclination | The answer is outside 0° to 180° | Negative slope ⟹ obtuse inclination |
| Treating 1 + m₁m₂ = 0 as "formula fails" | You leave the question unanswered | It means perpendicular, θ = 90° |
| Using ax + by + k for a perpendicular | The line you build is parallel, not perpendicular | Perpendicular is bx − ay + k = 0 |
| Slopes equal ⟹ "parallel" | Coincident lines are wrongly called parallel | Compare c as well |
| Swapping the weights in the section formula | The point lands in the wrong place on the line | The weight crosses: m multiplies x₂ |
| Applying m₁m₂ = −1 when one line is vertical | No slope to work with | Use a₁a₂ + b₁b₂ = 0 instead |

#### Four question forms, and the move that answers each

- **"Show that the line joining (a, b) and (b, a) is parallel to x + y = a + b."** Both points satisfy x + y = a + b, so both lie *on* that line — the "joining" line is the line itself, and the result is trivial. Recognising that two points already on a line is the whole question.
- **"Find the equation of the line through the origin and the midpoint of the segment joining (2, 3) and (4, −1)."** Midpoint is (3, 1), and a line through the origin has c = 0, so x − 3y = 0. Any intercept problem should send you to the intercept form or to c = 0.
- **"Find the value of k so that the line 3x + 4y + k = 0 passes through (2, −1)."** Substitute and solve: 6 − 4 + k = 0 → k = −2. This is the fastest one-line item in the topic and appears in that form constantly.
- **"Find the point on the line x + y = 6 nearest to (1, 1)."** That is the foot of the perpendicular from (1, 1) to x + y − 6 = 0. Perpendicular family: x − y + k = 0 through (1, 1) gives k = 0. Solving x − y = 0 with x + y = 6 gives the point (3, 3). The distance is √(4 + 4) = 2√2, matching |1 + 1 − 6|/√2 = 4/√2 = 2√2 ✓.

---

### 💡 Pro Tips

1. **Draw the line when the question is about position.** Whether a point is above or below a line, whether an angle is obtuse, whether a foot falls inside a segment — a ten-second sketch answers these before any algebra.
2. **Convert to general form as step one of every problem** and do not convert back. The two shortcut formulas (parallel, perpendicular) only exist in general form.
3. **Keep a running list of the four names of each line.** Slope, intercepts, direction, and the pair of points a line is determined by are four different pieces of information, and questions rotate between them.
4. **Learn the perpendicular family bx − ay + k = 0 as a reflex**, not as something to derive under time pressure.
5. **Use the determinant for collinearity whenever an x-coordinate repeats.** Two points with the same x make the slope method undefined and the determinant still works.
6. **Practise the general-form angle formula alongside the slope one.** It is the version that handles a vertical line, and vertical lines appear more often than students expect.
7. **Do at least three of these problems with no calculator and no diagram.** The arithmetic in this topic is small-integer arithmetic; doing it in your head is what makes it fast under exam conditions.
8. **Revisit the distance formula whenever a later topic needs it.** Conics, circles, and the distance from a point to a line all reuse it, and this is where the fluency comes from.

---

### 📚 Sources and where to go deeper

| Resource | Where to find it | Use it for |
|---|---|---|
| NCERT Class 11 Mathematics, Chapter 10 — Straight Lines | NCERT textbook | The official forms of a line, the distance formula, and the angle between two lines as the syllabus states them |
| NCERT Class 11 Mathematics, Chapter 4 — Coordinate Geometry | NCERT textbook | Distance between two points, the area formula, and the section formula that this chapter builds on |
| NCERT Class 12 Mathematics, Chapter 10 — Straight Lines in Space | NCERT textbook | The three-dimensional extension, useful context for the direction-cosine questions |
| NCERT Exemplar problems, Class 11 Mathematics | Widely available alongside the textbook | The denser problem sets on mixed forms, foot of the perpendicular, and the angle formula |
| Class 11 Mathematics for entrance exams, R.D. Sharma | Widely available book | Large exercise sets on each form separately, useful for drilling conversions |
| Worked-problem compilations for CUET UG Mathematics | Reputable coaching material and past-paper books | Timed practice on mixed-form questions |

---

**Continue your study**

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Straight Lines" sits in a personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — a one-day sprint across the highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — the sibling topics in this subject
