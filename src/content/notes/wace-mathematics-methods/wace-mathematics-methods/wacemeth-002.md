---
exam: wace-mathematics-methods
examName: WACE Mathematics Methods & Mathematics Specialist (SCSA)
subject: wace-mathematics-methods
subjectName: Mathematics Methods
topic: wacemeth-002
topicName: Exponential, Circular and Logarithmic Functions, and Differentiation (Year 11)
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 2: Exponential, Circular and Logarithmic Functions, and Differentiation — WACE Mathematics Methods (SCSA) Notes

Unit 2 of WACE Mathematics Methods covers exponential, circular (sine, cosine) and logarithmic functions and their transformations; product, quotient and chain rules of differentiation; applications of differentiation to curve sketching and rates of change. Second Unit of the Year 11-12 sequence.

> Re-check the live specification details on https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Exponential.** y = a × b^x, b > 0, b ≠ 1.
- **Circular functions.** sin x, cos x with period 2π.
- **Logarithmic.** y = log_a(x). ln x is natural log.
- **Differentiation.** Power, product, quotient, chain rules.

#### Examiner traps

- Mixing up degrees and radians.
- Forgetting the chain rule factor.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Exponential and logarithmic functions

y = a × b^x grows (b > 1) or decays (0 < b < 1). Range (0, ∞). ln x is the inverse of e^x.

#### Circular functions

sin x, cos x have period 2π and range [−1, 1]. tan x has period π. Identities: sin² x + cos² x = 1.

#### Differentiation

Power rule: d/dx (x^n) = n x^(n−1). Product: d/dx (uv) = u'v + uv'. Quotient: d/dx (u/v) = (u'v − uv')/v². Chain: d/dx f(g(x)) = f'(g(x))g'(x).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Unit 2 prepares for Units 3-4

- Exponential, circular and logarithmic functions are tested in Unit 3 Topics 1 and 2.

#### Year 11 planning pattern

- Term 1: Exponential and logarithmic functions.
- Term 2: Circular functions.
- Term 3: Differentiation rules.
- Term 4: Applications.

#### Common misconceptions (and the correction)

- "Degrees and radians are interchangeable." No — formulas like sin x ≈ x − x³/6 only hold in radians.
- "Differentiation and integration always commute." No.

#### Specification reference

This Unit is the second of four Units of WACE Mathematics Methods. Confirm the live syllabus on senior-secondary.scsa.wa.edu.au.

#### Worked example — circular function graph modelling

The water height h(t) in metres at Fremantle Harbour is modelled by the circular trigonometric function:

```
  h(t) = 1.8 cos( (π / 6) t ) + 2.5
```

where t is time in hours after midnight (t = 0).
1. State the amplitude, period, and mean sea level (vertical shift).
2. Calculate the maximum and minimum water depths and the times at which they first occur.
3. Find the times during the first 12 hours (0 ≤ t ≤ 12) when the water height is exactly 3.4 metres.

Part 1: Parameters
- Amplitude: A = 1.8 metres
- Period: T = 2π / (π / 6) = 2π × (6 / π) = 12 hours
- Vertical shift (mean depth): d = 2.5 metres

Part 2: Maximum and minimum depths
- Maximum depth: h_max = d + A = 2.5 + 1.8 = 4.3 metres.
  Occurs when cos((π/6)t) = 1  ⇒  (π/6)t = 0  ⇒  t = 0 hours (midnight).
- Minimum depth: h_min = d − A = 2.5 − 1.8 = 0.7 metres.
  Occurs when cos((π/6)t) = −1  ⇒  (π/6)t = π  ⇒  t = 6 hours (6:00 AM).

Part 3: Solving h(t) = 3.4 for 0 ≤ t ≤ 12

```
  1.8 cos( (π / 6) t ) + 2.5 = 3.4
  1.8 cos( (π / 6) t ) = 0.9
  cos( (π / 6) t ) = 0.9 / 1.8 = 0.5
```

Let θ = (π / 6) t. For 0 ≤ t ≤ 12, the angle domain is 0 ≤ θ ≤ 2π:

```
  cos θ = 0.5
  θ = π / 3  or  θ = 2π − π/3 = 5π / 3
```

Solve for t:

```
  Case 1: (π / 6) t = π / 3  ⇒  t = (π/3) × (6/π) = 2 hours (2:00 AM)
  Case 2: (π / 6) t = 5π / 3  ⇒  t = (5π/3) × (6/π) = 10 hours (10:00 AM)
```

The water height is exactly 3.4 metres at 2:00 AM and 10:00 AM.

#### Worked example — differentiation of exponential and trigonometric functions

Find the derivative dy/dx for:

```
  y = e^(3x) sin(2x)
```

Step 1: Identify product components
- u = e^(3x)  ⇒  u' = 3 e^(3x) (chain rule on e^(kx))
- v = sin(2x)  ⇒  v' = 2 cos(2x) (chain rule on sin(kx))

Step 2: Apply the product rule dy/dx = u'v + uv'

```
  dy/dx = [ 3 e^(3x) ] [ sin(2x) ] + [ e^(3x) ] [ 2 cos(2x) ]
        = 3 e^(3x) sin(2x) + 2 e^(3x) cos(2x)
        = e^(3x) [ 3 sin(2x) + 2 cos(2x) ]
```

Step 3: Evaluate at x = 0

```
  dy/dx |_{x=0} = e⁰ [ 3 sin(0) + 2 cos(0) ]
                = 1 [ 3(0) + 2(1) ]
                = 2
```

The tangent gradient at the origin is exactly 2.

#### Common marking-scheme mistakes

- Computing trigonometric functions in degree mode instead of radian mode during calculus evaluations.
- Confusing period formula T = 2π/b with b/(2π).
- Missing the second solution in the trigonometric domain [0, 2π).
- Omitting the chain rule factor when differentiating circular functions (d/dx[sin(2x)] = 2 cos(2x), not cos(2x)).
- Forgetting that the derivative of e^(kx) is k e^(kx).

#### 20-minute recap before you walk in

- Circular function model: y = A cos(b(x − c)) + d. Amplitude = |A|; Period = 2π / |b|; Phase shift = c; Mean level = d.
- Radian conversion: radians = degrees × (π / 180).
- Standard derivatives: d/dx(sin kx) = k cos kx; d/dx(cos kx) = −k sin kx; d/dx(e^(kx)) = k e^(kx).
- Product rule: (uv)' = u'v + uv'.
- Always ensure calculator is set to Radian mode before evaluating calculus questions.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SCSA Mathematics Methods Year 11 Unit 2 syllabus also lists:

- Logarithmic function graphs and vertical asymptotes.
- Average versus instantaneous rates of change using secant and tangent line gradients.
- Definition of the derivative from first principles limits.
- Exact values of circular functions for special angles 0, π/6, π/4, π/3, π/2.
- The Pythagorean trigonometric identity sin² x + cos² x = 1 and reciprocal circular ratios.

Confirm the live syllabus on the SCSA website before planning revision around these.

---

*Last updated 2026-09-24. Source: WACE Mathematics Methods ATAR syllabus, https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods. Awarding body: School Curriculum and Standards Authority (SCSA).*