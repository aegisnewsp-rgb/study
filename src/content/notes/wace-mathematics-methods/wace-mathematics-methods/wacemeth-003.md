---
exam: wace-mathematics-methods
examName: WACE Mathematics Methods & Mathematics Specialist (SCSA)
subject: wace-mathematics-methods
subjectName: Mathematics Methods
topic: wacemeth-003
topicName: Further Differentiation and Applications
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 3 Topic 1: Further Differentiation and Applications — WACE Mathematics Methods (SCSA) Notes

Unit 3 Topic 1 of WACE Mathematics Methods covers further differentiation rules, related rates of change, optimisation problems and curve sketching using derivatives. First Topic of Unit 3 in the Year 12 syllabus and assessed in the ATAR Year 12 examination.

> Re-check the live specification details on https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Differentiation rules.** Power, product, quotient, chain.
- **Related rates.** Use chain rule to relate rates.
- **Optimisation.** Set f'(x) = 0, verify with second derivative.
- **Curve sketching.** f'(x) = 0 at stationary points.

#### Examiner traps

- Forgetting to verify stationary points.
- Mixing up related rates problems.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Further differentiation

Product, quotient, chain rules applied to combined functions. Derivatives of exponential, logarithmic and trigonometric functions.

#### Related rates

Identify the given rate and the rate to find. Use the chain rule to relate them: dy/dt = (dy/dx)(dx/dt).

#### Optimisation

Set f'(x) = 0, solve. Verify with second derivative test: f''(x) > 0 means minimum; f''(x) < 0 means maximum.

#### Curve sketching

Stationary points at f'(x) = 0. Sign of f'(x) tells increasing/decreasing. Sign of f''(x) tells concave up/down.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 1 of Unit 3 is heavily tested

- Differentiation is the language of calculus.

#### Year 12 planning pattern

- Term 1: Further differentiation.
- Term 2: Applications.
- Term 3: Revision.

#### Common misconceptions (and the correction)

- "Stationary points are always maxima or minima." Some are inflection points.
- "Related rates problems are just calculus." They require modelling as well.

#### Specification reference

This Topic is the first Topic of Unit 3 in the WACE Mathematics Methods ATAR Year 12 syllabus and is assessed in the ATAR Year 12 examination. Confirm the live examination design brief on senior-secondary.scsa.wa.edu.au.

#### Worked example — optimisation of an agricultural paddock

A farmer in the Wheatbelt has 1200 metres of fencing wire to enclose a rectangular paddock subdivided into three equal smaller pens by two internal fences parallel to one of the sides.
Find the dimensions of the paddock that maximise the total enclosed area, and calculate this maximum area.

Step 1: Define variables and set up constraint equation
Let x be the length of the paddock and y be the width (with internal fences parallel to the width).
The layout requires:
- 2 outer fences of length x
- 4 fences of width y (2 outer boundary fences + 2 internal dividing fences)

```
  Perimeter constraint: 2x + 4y = 1200
  x + 2y = 600
  x = 600 − 2y
```

Step 2: Formulate the total area function A(y)

```
  A = x y = (600 − 2y) y = 600y − 2y²
```

The domain constraint is y > 0 and 600 − 2y > 0  ⇒  0 < y < 300.

Step 3: Differentiate with respect to y and find stationary points

```
  A'(y) = 600 − 4y
```

Set A'(y) = 0:

```
  600 − 4y = 0
  4y = 600
  y = 150 metres
```

Step 4: Verify maximum using second derivative test

```
  A''(y) = −4 < 0
```

Since A''(y) is strictly negative, the stationary point at y = 150 m is a global maximum.

Step 5: Calculate length x and maximum area A

```
  x = 600 − 2(150) = 600 − 300 = 300 metres
  A_max = x y = 300 × 150 = 45,000 m²
```

The paddock dimensions that maximise area are width y = 150 m and length x = 300 m, enclosing 45,000 m² (4.5 hectares).

#### Worked example — curve sketching using second derivative and points of inflection

Consider the function f(x) = x⁴ − 4x³ + 10.
1. Find all stationary points and determine their nature.
2. Find all points of inflection.
3. State intervals where the function is concave up and concave down.

Part 1: Stationary points
Differentiate f(x):

```
  f'(x) = 4x³ − 12x² = 4x²(x − 3)
```

Set f'(x) = 0:

```
  4x²(x − 3) = 0  ⇒  x = 0  or  x = 3
```

Evaluate second derivative:

```
  f''(x) = 12x² − 24x = 12x(x − 2)
```

- At x = 3: f''(3) = 12(3)(3 − 2) = 36(1) = 36 > 0  ⇒  local minimum at x = 3.
  y-value: f(3) = 3⁴ − 4(3)³ + 10 = 81 − 108 + 10 = −17.
  Local minimum at (3, −17).
- At x = 0: f''(0) = 0. The second derivative test is inconclusive.
  Check sign of f'(x) = 4x²(x − 3) near x = 0:
  - For x = −0.5: f'(−0.5) = 4(0.25)(−3.5) = −3.5 < 0 (decreasing)
  - For x = 0.5: f'(0.5) = 4(0.25)(−2.5) = −2.5 < 0 (decreasing)
  Since f'(x) does not change sign across x = 0, (0, 10) is a stationary point of horizontal inflection.

Part 2: Points of inflection
Set f''(x) = 0:

```
  12x(x − 2) = 0  ⇒  x = 0  or  x = 2
```

Check concavity sign changes:
- For x < 0: f''(x) > 0 (concave up)
- For 0 < x < 2: f''(x) < 0 (concave down)
- For x > 2: f''(x) > 0 (concave up)

Since f''(x) strictly changes sign across both x = 0 and x = 2:
- (0, 10) is a stationary point of inflection.
- At x = 2: f(2) = 16 − 32 + 10 = −6. Thus (2, −6) is a non-stationary point of inflection.

#### Common marking-scheme mistakes

- Forgetting internal fence lengths when setting up the perimeter constraint in applied optimisation problems.
- Assuming f''(x) = 0 automatically confirms a point of inflection without demonstrating a change in sign of concavity.
- Omitting the derivative verification test (first or second derivative test) for optimisation questions.
- Mixing up local minimum and local maximum conditions in the second derivative test.
- Writing coordinates as single numbers instead of ordered pairs (x, y).

#### 20-minute recap before you walk in

- Optimisation steps: 1. Constraint equation; 2. Objective function; 3. Differentiate and set to 0; 4. Test nature; 5. Answer specific question with units.
- Stationary point: f'(x) = 0. Local min: f''(x) > 0; Local max: f''(x) < 0.
- Point of inflection: f''(x) = 0 AND concavity changes sign across the point.
- Stationary point of inflection: f'(x) = 0 AND f''(x) = 0 AND f'(x) has the same sign on both sides.
- Quotient rule: (u/v)' = (u'v − uv') / v².

#### Sub-topics the syllabus lists that this note does not cover in detail

The SCSA Mathematics Methods Year 12 Unit 3 syllabus also lists:

- Differentiating exponential functions base a: d/dx(a^x) = a^x ln a.
- Tangents and normals to composite exponential and logarithmic graphs.
- Instantaneous velocity and acceleration kinematic models in straight line motion.
- Marginal cost, marginal revenue, and profit maximization in economics.
- Graphical determination of absolute global extrema on closed finite intervals [a, b].

Confirm the live syllabus on the SCSA website before planning revision around these.

---

*Last updated 2026-09-24. Source: WACE Mathematics Methods ATAR Year 12 syllabus, https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods. Awarding body: School Curriculum and Standards Authority (SCSA).*