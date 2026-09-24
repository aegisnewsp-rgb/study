---
exam: qce-mathematical-methods
examName: QCE Mathematical Methods & Specialist Mathematics (QCAA 2025)
subject: qce-specialist-mathematics
subjectName: Specialist Mathematics
topic: qcespec-002
topicName: Calculus and Further Functions
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 2: Calculus and Further Functions — QCE Specialist Mathematics (QCAA 2025) Notes

Unit 2 of QCE Specialist Mathematics covers further functions (cubic, quartic, exponential, logarithmic and simple trigonometric); introduction to differential calculus (limit, derivative, gradient of tangent); elementary integral calculus (anti-derivative, area under a curve). Second Unit of the four-Unit sequence.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/specialist-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Functions.** Cubic, quartic, exponential, logarithmic, trigonometric.
- **Differentiation.** Power rule, product, quotient, chain.
- **Integration.** ∫ x^n dx = x^(n+1)/(n+1) + C.

#### Examiner traps

- Forgetting the + C on indefinite integrals.
- Missing the chain rule factor.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Further functions

Cubic f(x) = ax³ + bx² + cx + d. Quartic f(x) = ax⁴ + bx³ + cx² + dx + e. Exponential f(x) = a × b^x. Logarithmic f(x) = log_a(x). Simple trigonometric f(x) = sin x, f(x) = cos x.

#### Differentiation

Power rule: d/dx (x^n) = n x^(n−1). Product, quotient, chain rules. Derivatives of standard functions: d/dx (e^x) = e^x; d/dx (sin x) = cos x; d/dx (cos x) = −sin x; d/dx (ln x) = 1/x.

#### Integration

∫ x^n dx = x^(n+1)/(n+1) + C. ∫ e^x dx = e^x + C. ∫ 1/x dx = ln|x| + C. ∫ sin x dx = −cos x + C.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Unit 2 prepares for Units 3-4

- Differentiation and integration rules are used in every calculus problem.

#### Year 11 planning pattern

- Term 1: Further functions.
- Term 2: Differentiation.
- Term 3: Integration.
- Term 4: Revision.

#### Common misconceptions (and the correction)

- "∫ 1/x dx = ln x." It is ln|x| + C.
- "Chain rule applies only to trig functions." It applies to any composite function.

#### Specification reference

This Unit is the second of four Units of QCE Specialist Mathematics. Confirm the live syllabus on qcaa.qld.edu.au.

#### Worked example — integration involving inverse trigonometric functions

Evaluate the exact value of the definite integral:

```
  ∫₀^(1/2) [ 3 / √(1 − 4x²) ] dx
```

Step 1: Recognise standard form
The standard derivative for arcsine is d/dx(arcsin(x/a)) = 1 / √(a² − x²).
Rewrite the denominator:

```
  √(1 − 4x²) = √[ 4((1/4) − x²) ] = 2 √[ (1/2)² − x² ]
```

Step 2: Factor out constants

```
  ∫₀^(1/2) [ 3 / (2 √[ (1/2)² − x² ]) ] dx
  = (3 / 2) ∫₀^(1/2) [ 1 / √[ (1/2)² − x² ] ] dx
```

Step 3: Integrate using standard inverse sine formula

```
  = (3 / 2) [ arcsin( x / (1/2) ) ]₀^(1/2)
  = (3 / 2) [ arcsin(2x) ]₀^(1/2)
```

Step 4: Substitute limits

```
  Upper limit (x = 1/2):
    arcsin(2(1/2)) = arcsin(1) = π / 2

  Lower limit (x = 0):
    arcsin(2(0)) = arcsin(0) = 0

  Integral = (3 / 2) [ (π / 2) − 0 ]
           = 3π / 4
```

The exact value is 3π / 4.

#### Worked example — integration by parts

Evaluate the indefinite integral:

```
  ∫ x cos(3x) dx
```

Step 1: Identify parts using LIATE priority
- Algebraic function: u = x  ⇒  du = dx
- Trigonometric function: dv = cos(3x) dx  ⇒  v = ∫ cos(3x) dx = (1/3) sin(3x)

Step 2: Apply the integration by parts formula ∫ u dv = uv − ∫ v du

```
  ∫ x cos(3x) dx = x × (1/3) sin(3x) − ∫ (1/3) sin(3x) dx
                 = (x / 3) sin(3x) − (1/3) ∫ sin(3x) dx
```

Step 3: Evaluate the remaining integral

```
  ∫ sin(3x) dx = −(1/3) cos(3x)
```

Substitute back:

```
  = (x / 3) sin(3x) − (1/3) [ −(1/3) cos(3x) ] + C
  = (x / 3) sin(3x) + (1/9) cos(3x) + C
  = (1 / 9) [ 3x sin(3x) + cos(3x) ] + C
```

#### Common marking-scheme mistakes

- Confusing the derivatives of inverse trig functions: forgetting the negative sign on arccos(x) or mixing up 1/(1+x²) with 1/√(1-x²).
- Failing to use radians when substituting limits into trigonometric and inverse trigonometric integrals.
- Sign error during integration by parts: mismanaging the negative sign when integrating sin(kx).
- Neglecting the factor 1/a when applying standard forms such as ∫ 1/(a² + x²) dx = (1/a) arctan(x/a) + C.
- Attempting to integrate products using product rule logic instead of integration by parts.

#### 20-minute recap before you walk in

- Standard inverse trig derivatives: d/dx(arcsin(x)) = 1/√(1 − x²); d/dx(arctan(x)) = 1/(1 + x²).
- Standard inverse trig integrals: ∫ 1/√(a² − x²) dx = arcsin(x/a) + C; ∫ 1/(a² + x²) dx = (1/a) arctan(x/a) + C.
- Integration by parts: ∫ u v' dx = uv − ∫ u' v dx. Select u by LIATE order (Log, Inverse trig, Algebraic, Trig, Exponential).
- Double angle identities: sin(2x) = 2 sin x cos x; cos(2x) = 2cos² x − 1 = 1 − 2sin² x.
- All calculus with circular functions assumes radian angle measures.

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA Specialist Mathematics syllabus for Unit 2 also lists the following sub-topics:

- Integrating rational functions using partial fractions with linear and irreducible quadratic denominators.
- Arc length of curves defined in Cartesian form: L = ∫ √(1 + [f'(x)]²) dx.
- Solids of revolution: calculating volumes rotated around the x-axis or y-axis.
- Secant, cosecant, and cotangent identities and their derivatives and integrals.
- Parametric differentiation and finding tangents to parametrically defined plane curves.

Confirm the live sub-topic list on the QCAA Specialist Mathematics syllabus page before planning revision around these.

---

*Last updated 2026-09-24. Source: QCE Specialist Mathematics General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/specialist-mathematics. Awarding body: Queensland Curriculum and Assessment Authority (QCAA).*