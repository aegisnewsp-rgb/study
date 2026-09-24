---
exam: sace-mathematical-methods
examName: SACE Stage 2 Mathematical Methods & Specialist Mathematics
subject: sace-specialist-mathematics
subjectName: Specialist Mathematics
topic: sacespec-005
topicName: Integration Techniques
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Topic 5: Integration Techniques — SACE Stage 2 Specialist Mathematics Notes

Topic 5 of SACE Stage 2 Specialist Mathematics covers further integration by substitution, by parts and by partial fractions; definite integrals and applications to areas, volumes and kinematics.

> Re-check the live Subject Outline on https://www.sace.sa.edu.au/web/specialist-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Integration by parts.** ∫ u dv = uv − ∫ v du.
- **Partial fractions.** Decompose rational functions.
- **Volume of revolution.** V = π ∫_a^b [f(x)]² dx.

#### Examiner traps

- Wrong choice of u in integration by parts.
- Forgetting + C.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Integration by parts

∫ u dv = uv − ∫ v du. LIATE priority for u.

#### Partial fractions

For ∫ P(x)/Q(x) dx where deg P < deg Q: factor Q, decompose into partial fractions, integrate each.

#### Volumes

Volume of revolution about x-axis: V = π ∫_a^b [f(x)]² dx.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 5 prepares for differential equations

- Integration techniques are needed for solving differential equations.

#### Year 12 planning pattern

- Term 1: Integration by parts.
- Term 2: Partial fractions, volumes.

#### Common misconceptions (and the correction)

- "Integration by parts always works." Sometimes a different u helps.

---

### Specification reference

This Topic is the fifth Topic of the SACE Stage 2 Specialist Mathematics Subject Outline. Confirm the live Subject Outline on sace.sa.edu.au.

#### Worked example — integration using partial fractions

Evaluate the indefinite integral:

```
  ∫ [ (5x − 2) / (x² − x − 6) ] dx
```

Step 1: Factorise the denominator
x² − x − 6 = (x − 3)(x + 2).

Step 2: Set up partial fraction decomposition

```
  (5x − 2) / [ (x − 3)(x + 2) ] = [ A / (x − 3) ] + [ B / (x + 2) ]
```

Multiply through by the common denominator:

```
  5x − 2 = A(x + 2) + B(x − 3)
```

Step 3: Solve for coefficients A and B
- Let x = 3 (covers the B term):
  5(3) − 2 = A(3 + 2) + 0
  13 = 5A  ⇒  A = 13 / 5

- Let x = −2 (covers the A term):
  5(−2) − 2 = 0 + B(−2 − 3)
  −12 = −5B  ⇒  B = 12 / 5

Step 4: Integrate the decomposed terms

```
  ∫ [ (5x − 2) / (x² − x − 6) ] dx
  = ∫ [ (13/5) / (x − 3) ] dx + ∫ [ (12/5) / (x + 2) ] dx
  = (13 / 5) ln|x − 3| + (12 / 5) ln|x + 2| + C
```

#### Worked example — trigonometric substitution for integrals with radicals

Evaluate the definite integral:

```
  ∫₀¹ [ 1 / (1 + x²)^(3/2) ] dx
```

Step 1: Choose substitution
The form √(a² + x²) indicates the substitution x = a tan θ.
Here a = 1, so let:

```
  x = tan θ  ⇒  dx = sec² θ dθ
```

Also 1 + x² = 1 + tan² θ = sec² θ, so (1 + x²)^(3/2) = (sec² θ)^(3/2) = sec³ θ.

Step 2: Transform the integration limits
- When x = 0: tan θ = 0  ⇒  θ = 0
- When x = 1: tan θ = 1  ⇒  θ = π/4

Step 3: Express integral in terms of θ

```
  ∫₀¹ [ 1 / (1 + x²)^(3/2) ] dx = ∫₀^(π/4) [ sec² θ / sec³ θ ] dθ
                               = ∫₀^(π/4) [ 1 / sec θ ] dθ
                               = ∫₀^(π/4) cos θ dθ
```

Step 4: Evaluate the trigonometric integral

```
  = [ sin θ ]₀^(π/4)
  = sin(π/4) − sin(0)
  = (√2 / 2) − 0
  = (√2) / 2
  ≈ 0.7071
```

The exact value is (√2)/2.

#### Common marking-scheme mistakes

- Omitting partial fraction constants when integrating or setting up fractions with irreducible quadratic denominators (writing A/(x²+1) instead of (Ax+B)/(x²+1)).
- Forgetting to change integration limits when making trigonometric substitutions in definite integrals.
- Confusing the derivative of tan θ (sec² θ) with sec θ tan θ.
- Omitting absolute value bars around logarithmic arguments in partial fraction integrals.
- Failing to perform polynomial long division when the numerator degree is greater than or equal to the denominator degree.

#### 20-minute recap before you walk in

- Partial fraction forms: A/(ax+b) for linear; (Ax+B)/(ax²+bx+c) for irreducible quadratic; A/(ax+b) + B/(ax+b)² for repeated linear.
- Trig substitutions: For √(a² − x²), let x = a sin θ; for √(a² + x²), let x = a tan θ; for √(x² − a²), let x = a sec θ.
- Integration by parts formula: ∫ u v' dx = uv − ∫ u' v dx. Select u by LIATE priority.
- Standard forms: ∫ 1/(x² + a²) dx = (1/a) arctan(x/a) + C; ∫ 1/√(a² − x²) dx = arcsin(x/a) + C.
- Always check that numerator degree is strictly less than denominator degree before decomposing into partial fractions.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SACE Stage 2 Specialist Mathematics Subject Outline also lists:

- Repeated linear factors in partial fraction decomposition: A/(x−a) + B/(x−a)².
- Trigonometric integrals involving products of powers: ∫ sin^m(x) cos^n(x) dx.
- Half-angle t-formula substitution (Weierstrass substitution) t = tan(x/2).
- Reduction formulas for definite and indefinite integrals using integration by parts.
- Arc length and surface area of revolution using trigonometric substitutions.

Confirm the live Subject Outline on the SACE website before planning revision around these.

---

*Last updated 2026-09-24. Source: SACE Stage 2 Specialist Mathematics Subject Outline, https://www.sace.sa.edu.au/web/specialist-mathematics. Awarding body: SACE Board of South Australia.*