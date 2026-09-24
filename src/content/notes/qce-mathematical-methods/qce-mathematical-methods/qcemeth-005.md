---
exam: qce-mathematical-methods
examName: QCE Mathematical Methods & Specialist Mathematics (QCAA 2025)
subject: qce-mathematical-methods
subjectName: Mathematical Methods
topic: qcemeth-005
topicName: "Major Topic: Functions and Their Graphs"
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Major Topic: Functions and Their Graphs — QCE Mathematical Methods (QCAA 2025) Notes

Functions and their Graphs is one of the four major topics in QCE Mathematical Methods. It covers linear, quadratic, polynomial, exponential, logarithmic and trigonometric functions; combinations of functions and inverse functions; transformations.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Linear.** y = mx + c. Slope m, y-intercept c.
- **Quadratic.** y = ax² + bx + c. Vertex (−b/2a, c − b²/4a). Discriminant Δ = b² − 4ac.
- **Exponential.** y = a × b^x, b > 0, b ≠ 1. Range (0, ∞).
- **Logarithmic.** y = log_a(x). Domain (0, ∞), range all reals.
- **Trigonometric.** y = sin x, y = cos x, y = tan x. Period 2π (π for tan).
- **Transformations.** Translate, stretch, compress, reflect.

#### Examiner traps

- Confusing horizontal and vertical translations.
- Mixing up f⁻¹(x) and 1/f(x).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Function types

Linear y = mx + c. Quadratic y = ax² + bx + c. Cubic y = ax³ + bx² + cx + d. Polynomial y = Σ a_n x^n. Exponential y = a × b^x. Logarithmic y = log_a(x). Trigonometric sin, cos, tan.

#### Transformations

For parent y = f(x):
- y = f(x − a) shifts right a.
- y = f(x) + a shifts up a.
- y = a f(x) vertical stretch by factor a.
- y = f(ax) horizontal compression by factor a.
- y = −f(x) reflection in x-axis.

#### Inverse functions

f⁻¹(x) exists iff f is one-to-one. To find: replace f(x) with y, swap x and y, solve for y. Graph of f⁻¹ is reflection of f in y = x.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Functions underpins calculus

- Every calculus operation assumes function notation.

#### Year 11-12 planning pattern

- Term 1: Linear, quadratic.
- Term 2: Polynomial, exponential.
- Term 3: Logarithmic, trigonometric.
- Term 4: Transformations, inverse functions.

#### Common misconceptions (and the correction)

- "Domain and range are the same." No — domain is x values, range is y values.
- "f⁻¹ = 1/f." No — f⁻¹ is the inverse function.

#### Specification reference

This major topic is one of four cross-cutting topics in QCE Mathematical Methods. Confirm the live syllabus on qcaa.qld.edu.au.

#### Worked example — inverse function derivation with domain restriction

Let f(x) = 2(x − 3)² + 5 for the restricted domain [3, ∞).
1. Explain why the domain must be restricted for f⁻¹(x) to exist.
2. Find the algebraic expression for f⁻¹(x).
3. State the domain and range of f⁻¹(x).

Part 1: Necessity of domain restriction
A function has an inverse function if and only if it is one-to-one (injective).
The unrestricted quadratic function f(x) = 2(x − 3)² + 5 is many-to-one because horizontal lines y = k (for k > 5) intersect the parabola at two distinct points. Restricting the domain to x ≥ 3 retains only the right branch of the parabola, ensuring that every horizontal line intersects the graph at most once.

Part 2: Find f⁻¹(x)
Let y = 2(x − 3)² + 5. Swap x and y to reflect across the line y = x:

```
  x = 2(y − 3)² + 5
```

Solve for y:

```
  x − 5 = 2(y − 3)²
  (y − 3)² = (x − 5) / 2
  y − 3 = ± √[ (x − 5) / 2 ]
```

Since the original domain was x ≥ 3, the range of the inverse must be y ≥ 3. Therefore, take the positive square root:

```
  y = 3 + √[ (x − 5) / 2 ]
```

The inverse function is f⁻¹(x) = 3 + √[ (x − 5) / 2 ].

Part 3: Domain and range of f⁻¹(x)
- Domain of f is [3, ∞). Range of f is [5, ∞) since the minimum value is f(3) = 5.
- Therefore, for f⁻¹:
  - Domain of f⁻¹ = Range of f = [5, ∞)
  - Range of f⁻¹ = Domain of f = [3, ∞)

#### Worked example — composite function evaluation and domain determination

Given f(x) = √(x − 1) and g(x) = 2x² − 7:
1. Determine whether the composite function (f ∘ g)(x) exists on the natural domain of g.
2. If it does not exist on the full real line, determine the maximal restricted domain of g such that (f ∘ g)(x) exists.
3. Write the simplified rule for (f ∘ g)(x).

Part 1: Condition for existence
The composite function (f ∘ g)(x) = f(g(x)) exists if and only if the range of the inner function g is a subset of the domain of the outer function f:

```
  ran(g) ⊆ dom(f)
```

- Domain of f: x − 1 ≥ 0  ⇒  dom(f) = [1, ∞)
- For g(x) = 2x² − 7 on ℝ, the minimum value is g(0) = −7, so ran(g) = [−7, ∞).
Since [−7, ∞) is not a subset of [1, ∞), the composite function does not exist for all real x.

Part 2: Maximal restricted domain
We require g(x) ∈ dom(f), meaning g(x) ≥ 1:

```
  2x² − 7 ≥ 1
  2x² ≥ 8
  x² ≥ 4
  x ≤ −2  or  x ≥ 2
```

The maximal domain for (f ∘ g) is (−∞, −2] ∪ [2, ∞).

Part 3: Rule for (f ∘ g)(x)

```
  (f ∘ g)(x) = f(2x² − 7) = √[ (2x² − 7) − 1 ] = √[ 2x² − 8 ]
```

#### Common marking-scheme mistakes

- Omitting the positive/negative distinction when inverting quadratics and failing to justify the chosen branch using the original domain.
- Failing to swap domain and range when finding an inverse function.
- Evaluating (f ∘ g)(x) as f(x) × g(x) instead of functional composition f(g(x)).
- Forgetting to factorise the horizontal dilation before reading horizontal translation in y = f(ax + b).
- Ignoring vertical asymptotes when stating the domain of rational functions.
- Stating the range in interval notation with square brackets around infinity (writing [0, ∞] instead of [0, ∞)).

#### 20-minute recap before you walk in

- Horizontal line test determines if a function is one-to-one and invertible.
- Inverse function properties: dom(f⁻¹) = ran(f) and ran(f⁻¹) = dom(f).
- Graphs of f and f⁻¹ are reflections of each other across the line y = x.
- Composite existence rule: ran(inner) ⊆ dom(outer).
- In transformations, express y = f(b(x − c)) + d to read horizontal dilation factor (1/|b|) and horizontal translation c.

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA Mathematical Methods syllabus for functions also lists the following sub-topics, which require dedicated revision:

- Power functions of the form y = x^(p/q) and their asymptotic and symmetry properties.
- Transformations and graph sketching of exponential functions y = a e^(b(x − c)) + d.
- Logarithmic graph transformations and locating vertical asymptotes and axis intercepts.
- Solving functional equations and proving identities using algebraic substitution.
- Modelling physical scenarios with piecewise continuous functions.

Confirm the live sub-topic list on the QCAA Mathematical Methods syllabus page before planning revision around these.

---

*Last updated 2026-09-24. Source: QCE Mathematical Methods General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods. Awarding body: Queensland Curriculum and Assessment Authority (QCAA).*