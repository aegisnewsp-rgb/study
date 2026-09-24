---
exam: wace-mathematics-methods
examName: WACE Mathematics Methods & Mathematics Specialist (SCSA)
subject: wace-mathematics-methods
subjectName: Mathematics Methods
topic: wacemeth-007
topicName: Further Integration
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 4 Topic 2: Further Integration — WACE Mathematics Methods (SCSA) Notes

Unit 4 Topic 2 of WACE Mathematics Methods covers further integration by substitution; definite integrals and areas between curves; integration of trigonometric functions and applications to kinematics. Second Topic of Unit 4 and assessed in the ATAR Year 12 examination.

> Re-check the live specification details on https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Substitution.** Let u = g(x), du = g'(x) dx.
- **Definite integrals.** ∫_a^b f(x) dx = F(b) − F(a).
- **Areas between curves.** ∫_a^b |f(x) − g(x)| dx.
- **Trig integration.** ∫ sin x dx = −cos x + C. ∫ cos x dx = sin x + C.

#### Examiner traps

- Forgetting to change limits in substitution.
- Mixing up area and signed area.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Substitution

∫ f(g(x))g'(x) dx. Let u = g(x), then du = g'(x) dx. Then ∫ f(u) du. For definite integrals, change limits: x = a → u = g(a); x = b → u = g(b).

#### Definite integrals

∫_a^b f(x) dx = F(b) − F(a).

#### Areas between curves

Area = ∫_a^b |f(x) − g(x)| dx. If f(x) ≥ g(x) on [a, b], then area = ∫_a^b (f(x) − g(x)) dx.

#### Trigonometric integration

∫ sin x dx = −cos x + C. ∫ cos x dx = sin x + C. ∫ sin(kx) dx = −(1/k) cos(kx) + C. ∫ cos(kx) dx = (1/k) sin(kx) + C.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 2 of Unit 4 prepares for Specialist Mathematics

- Integration techniques are needed for differential equations and kinematics.

#### Year 12 planning pattern

- Term 1: Substitution.
- Term 2: Areas between curves.
- Term 3: Trigonometric integration.

#### Common misconceptions (and the correction)

- "Substitution always works." No — only when f has the form f(g(x))g'(x).
- "∫ 1/x dx = ln x." It is ln|x| + C.

#### Specification reference

This Topic is the second Topic of Unit 4 in the WACE Mathematics Methods ATAR Year 12 syllabus. Confirm the live examination design brief on senior-secondary.scsa.wa.edu.au.

#### Worked example — integration by substitution with algebraic powers

Evaluate the definite integral:

```
  ∫₀¹ x² (x³ + 1)⁴ dx
```

Step 1: Choose substitution variable
Let u = x³ + 1.
Then:

```
  du/dx = 3x²  ⇒  x² dx = du / 3
```

Step 2: Transform the limits of integration
- When x = 0: u = 0³ + 1 = 1
- When x = 1: u = 1³ + 1 = 2

Step 3: Substitute and integrate

```
  ∫₀¹ x² (x³ + 1)⁴ dx = ∫₁² u⁴ (du / 3)
                      = (1 / 3) ∫₁² u⁴ du
                      = (1 / 3) [ u⁵ / 5 ]₁²
                      = (1 / 15) [ u⁵ ]₁²
                      = (1 / 15) [ 2⁵ − 1⁵ ]
                      = (1 / 15) [ 32 − 1 ]
                      = 31 / 15
```

The exact value is 31/15.

#### Worked example — area between two intersecting functions

Find the area of the region completely enclosed between the curves y = x² − 4 and y = 4 − x².

Step 1: Find points of intersection
Set the two equations equal:

```
  x² − 4 = 4 − x²
  2x² = 8
  x² = 4
  x = −2  or  x = 2
```

Step 2: Determine which curve is on top
Test x = 0 on (−2, 2):
- Top curve: y = 4 − 0² = 4
- Bottom curve: y = 0² − 4 = −4
Since 4 > −4, y = 4 − x² lies strictly above y = x² − 4 on the interval (−2, 2).

Step 3: Set up and evaluate the area integral

```
  Area = ∫_{-2}² [ (4 − x²) − (x² − 4) ] dx
       = ∫_{-2}² [ 8 − 2x² ] dx
```

By symmetry across the y-axis, the integral can be evaluated as twice the integral from 0 to 2:

```
  Area = 2 ∫₀² (8 − 2x²) dx
       = 2 [ 8x − (2x³ / 3) ]₀²
       = 2 [ 8(2) − (2(8) / 3) ]
       = 2 [ 16 − 16/3 ]
       = 2 [ 32 / 3 ]
       = 64 / 3
       ≈ 21.333 square units
```

The exact enclosed area is 64/3 square units.

#### Common marking-scheme mistakes

- Forgetting to change the limits of integration when applying substitution, evaluating original x-limits on the u-variable.
- Subtracting the curves in reverse order (bottom minus top), yielding a negative area.
- Forgetting the constant 1/k when substituting du = k x^(n-1) dx.
- Integrating across x-intercepts without splitting when calculating total geometric area.
- Omitting the $+ C$ in indefinite substitution problems.

#### 20-minute recap before you walk in

- Substitution formula: ∫ f(g(x)) g'(x) dx = ∫ f(u) du where u = g(x).
- Always convert definite integral limits: u_lower = g(a), u_upper = g(b).
- Area between curves: Area = ∫_a^b (y_top − y_bottom) dx.
- Symmetry shortcuts: If f(x) is even, ∫_{-a}^a f(x) dx = 2 ∫₀^a f(x) dx.
- Check that the derivative of the substituted expression appears as a factor in the integrand.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SCSA Mathematics Methods Year 12 Unit 4 syllabus also lists:

- Linear substitutions of the form u = ax + b where x must be expressed in terms of u.
- Areas bounded by curves that intersect at more than two points, requiring multi-interval integration.
- Calculating the area between a curve and the y-axis by integrating with respect to y.
- Total distance travelled versus displacement in kinematic problems with direction reversals.
- Approximating definite integrals using left-endpoint and right-endpoint rectangle sums.

Confirm the live syllabus on the SCSA website before planning revision around these.

---

*Last updated 2026-09-24. Source: WACE Mathematics Methods ATAR Year 12 syllabus, https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods. Awarding body: School Curriculum and Standards Authority (SCSA).*