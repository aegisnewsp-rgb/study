---
exam: wace-mathematics-methods
examName: WACE Mathematics Methods & Mathematics Specialist (SCSA)
subject: wace-mathematics-methods
subjectName: Mathematics Methods
topic: wacemeth-004
topicName: Integrals
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 3 Topic 2: Integrals — WACE Mathematics Methods (SCSA) Notes

Unit 3 Topic 2 of WACE Mathematics Methods covers anti-differentiation, the fundamental theorem of calculus, definite integrals and the area under a curve, and basic substitution. Second Topic of Unit 3 in the Year 12 syllabus and assessed in the ATAR Year 12 examination.

> Re-check the live specification details on https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Anti-differentiation.** ∫ x^n dx = x^(n+1)/(n+1) + C.
- **Fundamental theorem.** ∫_a^b f'(x) dx = f(b) − f(a).
- **Areas under curves.** ∫_a^b f(x) dx for f ≥ 0.
- **Substitution.** Let u = g(x), du = g'(x) dx.

#### Examiner traps

- Forgetting + C on indefinite integrals.
- Mixing up area and signed area.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Anti-differentiation

∫ x^n dx = x^(n+1)/(n+1) + C for n ≠ −1. ∫ e^x dx = e^x + C. ∫ 1/x dx = ln|x| + C. ∫ sin x dx = −cos x + C. ∫ cos x dx = sin x + C.

#### Fundamental theorem of calculus

∫_a^b f'(x) dx = F(b) − F(a) where F is any antiderivative of f.

#### Areas

Area under curve = ∫_a^b f(x) dx for f ≥ 0. Signed area = ∫_a^b f(x) dx (negative when f < 0).

#### Substitution

Let u = g(x). Then du = g'(x) dx. ∫ f(g(x))g'(x) dx = ∫ f(u) du.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 2 of Unit 3 is foundational

- Integration is the inverse of differentiation; it is the foundation for definite integrals.

#### Year 12 planning pattern

- Term 1: Anti-differentiation.
- Term 2: Definite integrals, fundamental theorem.
- Term 3: Substitution.

#### Common misconceptions (and the correction)

- "∫ 1/x dx = ln x." It is ln|x| + C.
- "Area and signed area are the same." No — signed area can be negative.

#### Specification reference

This Topic is the second Topic of Unit 3 in the WACE Mathematics Methods ATAR Year 12 syllabus and is assessed in the ATAR Year 12 examination. Confirm the live examination design brief on senior-secondary.scsa.wa.edu.au.

#### Worked example — definite integral and area between two curves

Find the total area enclosed between the parabola y = x² − 2x and the line y = 2x + 5.

Step 1: Find the points of intersection
Set the two equations equal:

```
  x² − 2x = 2x + 5
  x² − 4x − 5 = 0
  (x − 5)(x + 1) = 0
  x = −1  or  x = 5
```

The curves intersect at x = −1 and x = 5.

Step 2: Determine which curve is on top
Test a point in the interval (−1, 5), such as x = 0:
- Line: y = 2(0) + 5 = 5
- Parabola: y = 0² − 2(0) = 0
Since 5 > 0, the line lies above the parabola throughout the interval (−1, 5).

Step 3: Set up the area integral
Area = ∫_a^b (y_top − y_bottom) dx:

```
  Area = ∫_{-1}⁵ [ (2x + 5) − (x² − 2x) ] dx
       = ∫_{-1}⁵ [ −x² + 4x + 5 ] dx
```

Step 4: Integrate and evaluate limits

```
  = [ −(x³ / 3) + 2x² + 5x ]_{-1}⁵

  Upper limit (x = 5):
    −(125 / 3) + 2(25) + 5(5)
    = −125/3 + 50 + 25
    = −125/3 + 75
    = (−125 + 225) / 3
    = 100 / 3

  Lower limit (x = −1):
    −((−1)³ / 3) + 2(−1)² + 5(−1)
    = 1/3 + 2 − 5
    = 1/3 − 3
    = −8 / 3

  Area = (100 / 3) − (−8 / 3)
       = 108 / 3
       = 36
```

The enclosed area is exactly 36 square units.

#### Worked example — kinematics with variable acceleration and initial conditions

An automated haul truck in the Pilbara moves in a straight line with acceleration:

```
  a(t) = 12 − 6t  (m/s²)  for t ≥ 0
```

At time t = 0, the truck has initial velocity v(0) = −9 m/s and initial displacement s(0) = 0 m.
1. Find the velocity function v(t).
2. Determine when the truck is momentarily at rest.
3. Find the displacement function s(t).
4. Find the total distance travelled by the truck during the first 4 seconds (0 ≤ t ≤ 4).

Part 1: Velocity function

```
  v(t) = ∫ a(t) dt = 12t − 3t² + C₁
```

Using v(0) = −9: C₁ = −9.

```
  v(t) = −3t² + 12t − 9 = −3(t² − 4t + 3) = −3(t − 1)(t − 3)
```

Part 2: Momentarily at rest
Set v(t) = 0:

```
  −3(t − 1)(t − 3) = 0  ⇒  t = 1 second  and  t = 3 seconds
```

Part 3: Displacement function

```
  s(t) = ∫ v(t) dt = ∫ (−3t² + 12t − 9) dt = −t³ + 6t² − 9t + C₂
```

Using s(0) = 0: C₂ = 0.

```
  s(t) = −t³ + 6t² − 9t
```

Part 4: Total distance travelled from t = 0 to t = 4
Because velocity changes sign at t = 1 and t = 3, distance must be calculated piecewise:
- s(0) = 0
- s(1) = −(1) + 6(1) − 9(1) = −4 m
- s(3) = −(27) + 6(9) − 9(3) = −27 + 54 − 27 = 0 m
- s(4) = −(64) + 6(16) − 9(4) = −64 + 96 − 36 = −4 m

Calculate distance on each leg:
- Leg 1 (t = 0 to 1): |s(1) − s(0)| = |−4 − 0| = 4 m
- Leg 2 (t = 1 to 3): |s(3) − s(1)| = |0 − (−4)| = 4 m
- Leg 3 (t = 3 to 4): |s(4) − s(3)| = |−4 − 0| = 4 m

Total distance travelled:

```
  Distance = 4 + 4 + 4 = 12 metres
```

Notice that the displacement at t = 4 is s(4) = −4 m, whereas total distance is 12 m.

#### Common marking-scheme mistakes

- Confusing displacement with total distance travelled in kinematics.
- Subtracting curves in the wrong order when calculating area between two curves, resulting in a negative area.
- Omitting the constant of integration C when determining velocity and displacement from acceleration.
- Forgetting to find intersection points to set proper limits of integration.
- Integrating across x-intercepts without splitting when calculating total geometric area.

#### 20-minute recap before you walk in

- Fundamental Theorem of Calculus: ∫_a^b f(x) dx = F(b) − F(a).
- Area between curves: Area = ∫_a^b (y_top − y_bottom) dx.
- Kinematic relationships: v(t) = s'(t) = ∫ a(t) dt; s(t) = ∫ v(t) dt.
- Total distance travelled requires splitting the integral whenever velocity changes sign: Distance = ∫ |v(t)| dt.
- Power rule for integration: ∫ x^n dx = [x^(n+1) / (n + 1)] + C for n ≠ −1.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SCSA Mathematics Methods Year 12 Unit 3 syllabus also lists:

- Integrating circular functions: ∫ sin(kx) dx = −(1/k) cos(kx) + C and ∫ cos(kx) dx = (1/k) sin(kx) + C.
- Integrating exponential functions: ∫ e^(kx) dx = (1/k) e^(kx) + C.
- Trapezoidal rule for estimating irregular land and water body areas.
- Average value of a function: (1 / (b − a)) ∫_a^b f(x) dx.
- Verifying anti-derivatives by differentiating the proposed anti-derivative function.

Confirm the live syllabus on the SCSA website before planning revision around these.

---

*Last updated 2026-09-24. Source: WACE Mathematics Methods ATAR Year 12 syllabus, https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods. Awarding body: School Curriculum and Standards Authority (SCSA).*