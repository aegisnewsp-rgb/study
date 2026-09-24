---
exam: sace-mathematical-methods
examName: SACE Stage 2 Mathematical Methods & Specialist Mathematics
subject: sace-mathematical-methods
subjectName: Mathematical Methods
topic: sacemeth-001
topicName: Further Differentiation and Applications
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Topic 1: Further Differentiation and Applications — SACE Stage 2 Mathematical Methods Notes

Topic 1 of SACE Stage 2 Mathematical Methods extends differentiation to products, quotients and composite functions, then applies the second derivative, curve sketching and optimisation to functions in applied contexts. First Topic of the six-Topic SACE Stage 2 Mathematical Methods course.

> Re-check the live Subject Outline on https://www.sace.sa.edu.au/en_US/web/mathematical-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Differentiation rules.** Power, product, quotient, chain.
- **Standard derivatives.** d/dx (e^x) = e^x; d/dx (sin x) = cos x; d/dx (ln x) = 1/x.
- **Applications.** Optimisation, curve sketching, related rates.

#### Examiner traps

- Forgetting the chain rule factor.
- Mixing up stationary points and inflection points.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Differentiation rules

Power rule: d/dx (x^n) = n x^(n−1). Product: d/dx (uv) = u'v + uv'. Quotient: d/dx (u/v) = (u'v − uv')/v². Chain: d/dx f(g(x)) = f'(g(x))g'(x).

#### Standard derivatives

d/dx (e^x) = e^x. d/dx (e^(kx)) = k e^(kx). d/dx (sin x) = cos x. d/dx (cos x) = −sin x. d/dx (ln x) = 1/x.

#### Applications

Optimisation: set f'(x) = 0, verify with second derivative test. Curve sketching: stationary points at f'(x) = 0; concave up/down determined by f''(x). Related rates: use chain rule to relate rates.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 1 is foundational

- Differentiation rules are used in every subsequent calculus topic.

#### Year 12 planning pattern

- Term 1: Differentiation rules, applications.
- Term 2: Practice and revision.

#### Common misconceptions (and the correction)

- "Stationary points are always maxima or minima." Some are inflection points.

---

### Specification reference

This Topic is the first Topic of the SACE Stage 2 Mathematical Methods Subject Outline. Confirm the live Subject Outline on sace.sa.edu.au.

#### Worked example — optimisation of an open cylindrical water tank

An open-top cylindrical water tank has volume V = 1000 m³. The cost of material for the circular base is $50 per m², and the cost of material for the curved vertical side is $30 per m².
Find the radius r and height h that minimise the total construction cost.

Step 1: Express height h in terms of radius r
Volume of cylinder:

```
  V = π r² h = 1000  ⇒  h = 1000 / (π r²)
```

Step 2: Set up the total cost function C(r)
- Area of circular base = π r²
- Area of curved side = 2π r h = 2π r (1000 / (π r²)) = 2000 / r

```
  C(r) = 50(π r²) + 30(2000 / r)
       = 50π r² + 60000 r⁻¹
```

Step 3: Differentiate with respect to r and locate stationary points

```
  C'(r) = 100π r − 60000 r⁻²
```

Set C'(r) = 0:

```
  100π r = 60000 / r²
  r³ = 60000 / (100π) = 600 / π
  r = (600 / π)^(1/3) ≈ 5.759 m
```

Step 4: Verify minimum using the second derivative test

```
  C''(r) = 100π + 120000 r⁻³
```

For r > 0, r⁻³ > 0, so C''(r) > 100π > 0.
The stationary point at r ≈ 5.76 m is a local and global minimum.

Step 5: Calculate corresponding height h

```
  h = 1000 / (π (5.759)²)
    = 1000 / (π × 33.166)
    ≈ 9.598 m
```

The minimum cost occurs when radius r ≈ 5.76 m and height h ≈ 9.60 m.

#### Worked example — quotient rule and equation of a tangent line

Find the equation of the tangent line to the curve y = (2x + 1) / (x² + 1) at the point where x = 1.

Step 1: Find the y-coordinate at x = 1

```
  y = (2(1) + 1) / (1² + 1) = 3 / 2 = 1.5
```

The point of contact is (1, 3/2).

Step 2: Differentiate using the quotient rule d/dx(u/v) = (u'v − uv') / v²
Let u = 2x + 1  ⇒  u' = 2
Let v = x² + 1  ⇒  v' = 2x

```
  dy/dx = [ (2)(x² + 1) − (2x + 1)(2x) ] / (x² + 1)²
        = [ 2x² + 2 − (4x² + 2x) ] / (x² + 1)²
        = [ −2x² − 2x + 2 ] / (x² + 1)²
        = −2(x² + x − 1) / (x² + 1)²
```

Step 3: Calculate the gradient at x = 1

```
  m = dy/dx |_{x=1}
    = [ −2(1)² − 2(1) + 2 ] / (1² + 1)²
    = [ −2 − 2 + 2 ] / (2)²
    = −2 / 4
    = −1 / 2
```

Step 4: Form the tangent line equation using point-gradient form y − y₁ = m(x − x₁)

```
  y − (3/2) = −(1/2)(x − 1)
  2y − 3 = −(x − 1)
  2y − 3 = −x + 1
  x + 2y − 4 = 0
```

#### Common marking-scheme mistakes

- Omitting the second derivative test or sign diagram test to verify whether a stationary point is a minimum or maximum.
- Inverting the terms in the numerator of the quotient rule (writing uv' − u'v instead of u'v − uv').
- Forgetting to multiply by the internal derivative in composite chain rule applications.
- Omitting the domain constraint (such as r > 0 or x > 0) in applied optimisation problems.
- Confusing the equation of the tangent with the equation of the normal.

#### 20-minute recap before you walk in

- Product rule: (uv)' = u'v + uv'.
- Quotient rule: (u/v)' = (u'v − uv') / v².
- Chain rule: dy/dx = (dy/du) × (du/dx).
- Stationary point classification: f'(x) = 0. f''(x) > 0 gives minimum; f''(x) < 0 gives maximum.
- Tangent line formula: y − y₁ = f'(x₁)(x − x₁).

#### Sub-topics the syllabus lists that this note does not cover in detail

The SACE Stage 2 Mathematical Methods Subject Outline also lists:

- Related rates of change in geometry and physics models using the chain rule.
- Concavity intervals and inflection points where f''(x) changes sign.
- Graph sketching of rational functions with horizontal and vertical asymptotes.
- Displacement, velocity, and acceleration kinematics using derivatives.
- Marginal profit and cost functions in business modelling.

Confirm the live Subject Outline on the SACE website before planning revision around these.

---

*Last updated 2026-09-24. Source: SACE Stage 2 Mathematical Methods Subject Outline, https://www.sace.sa.edu.au/en_US/web/mathematical-methods. Awarding body: SACE Board of South Australia.*