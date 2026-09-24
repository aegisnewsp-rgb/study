---
exam: sace-mathematical-methods
examName: SACE Stage 2 Mathematical Methods & Specialist Mathematics
subject: sace-specialist-mathematics
subjectName: Specialist Mathematics
topic: sacespec-002
topicName: Complex Numbers
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Topic 2: Complex Numbers — SACE Stage 2 Specialist Mathematics Notes

Topic 2 of SACE Stage 2 Specialist Mathematics covers Cartesian and polar form of complex numbers, the Argand diagram, modulus and argument, De Moivre's theorem and the roots of complex numbers.

> Re-check the live Subject Outline on https://www.sace.sa.edu.au/web/specialist-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Complex numbers.** z = a + bi. |z| = √(a² + b²).
- **Polar form.** z = r(cos θ + i sin θ).
- **De Moivre.** (cos θ + i sin θ)^n = cos nθ + i sin nθ.

#### Examiner traps

- Confusing z̄ and −z.
- Mixing up degrees and radians.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Complex arithmetic

z = a + bi. z̄ = a − bi. |z| = √(a² + b²). arg(z) = arctan(b/a).

Multiplication: (a + bi)(c + di) = (ac − bd) + (ad + bc)i.

#### Polar form

z = r(cos θ + i sin θ). Conversion: a = r cos θ, b = r sin θ.

#### De Moivre's theorem

(cos θ + i sin θ)^n = cos nθ + i sin nθ.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 2 is foundational

- Complex numbers extend real numbers to algebraic closure.

#### Year 12 planning pattern

- Term 1: Complex arithmetic.
- Term 2: De Moivre.

#### Common misconceptions (and the correction)

- "arg(z) is unique." arg(z) is determined modulo 2π.

---

### Specification reference

This Topic is the second Topic of the SACE Stage 2 Specialist Mathematics Subject Outline. Confirm the live Subject Outline on sace.sa.edu.au.

#### Worked example — solving polynomial equations with complex conjugate roots

Solve the polynomial equation completely over the complex numbers:

```
  z³ − 4z² + 9z − 10 = 0
```

Step 1: Test integer factors of the constant term −10 to find a real root
Factors of −10 are ±1, ±2, ±5, ±10.
Test z = 2:

```
  P(2) = 2³ − 4(2)² + 9(2) − 10
       = 8 − 16 + 18 − 10
       = 26 − 26
       = 0
```

Since P(2) = 0, (z − 2) is a linear factor.

Step 2: Factorise by polynomial division
Divide P(z) by (z − 2):

```
  (z³ − 4z² + 9z − 10) / (z − 2) = z² − 2z + 5
```

Verify:

```
  (z − 2)(z² − 2z + 5) = z³ − 2z² + 5z − 2z² + 4z − 10
                       = z³ − 4z² + 9z − 10 ✓
```

Step 3: Solve the quadratic factor z² − 2z + 5 = 0
Apply the quadratic formula with a = 1, b = −2, c = 5:

```
  z = [ −(−2) ± √( (−2)² − 4(1)(5) ) ] / (2 × 1)
    = [ 2 ± √( 4 − 20 ) ] / 2
    = [ 2 ± √(−16) ] / 2
    = [ 2 ± 4i ] / 2
    = 1 ± 2i
```

The three roots are z = 2, z = 1 + 2i, and z = 1 − 2i.
Notice that the two complex roots form a conjugate pair 1 ± 2i, confirming the Conjugate Root Theorem for real polynomials.

#### Worked example — de Moivre's theorem and complex roots

Find all solutions to z⁴ = −16, expressing each root in polar form r cis θ and Cartesian form a + bi.

Step 1: Express −16 in polar form

```
  −16 = 16 cis(π)
```

Step 2: Set up the general root equation with periodic 2kπ terms

```
  z⁴ = 16 cis(π + 2kπ),  for k = 0, 1, 2, 3
  z_k = 16^(1/4) cis [ (π + 2kπ) / 4 ]
      = 2 cis [ (2k + 1)π / 4 ]
```

Step 3: Evaluate for k = 0, 1, 2, 3
- For k = 0:
  z₀ = 2 cis(π/4) = 2(cos(π/4) + i sin(π/4)) = 2(√2/2 + i √2/2) = √2 + i√2
- For k = 1:
  z₁ = 2 cis(3π/4) = 2(cos(3π/4) + i sin(3π/4)) = 2(−√2/2 + i √2/2) = −√2 + i√2
- For k = 2:
  z₂ = 2 cis(5π/4) = 2 cis(−3π/4) = 2(−√2/2 − i √2/2) = −√2 − i√2
- For k = 3:
  z₃ = 2 cis(7π/4) = 2 cis(−π/4) = 2(√2/2 − i √2/2) = √2 − i√2

The four roots are ±√2 ± i√2.

#### Common marking-scheme mistakes

- Adding angles rather than multiplying when applying de Moivre's theorem to powers ([r cis θ]^n = r^n cis(nθ)).
- Omitting the 2kπ term when finding nth roots, yielding only one root instead of n roots.
- Writing complex modulus with a square root of negative numbers (writing √((−2)²) as negative).
- Stating the argument θ outside the principal range (−π, π].
- Inverting signs when taking complex conjugates.

#### 20-minute recap before you walk in

- Cartesian form: z = x + iy. Modulus: |z| = √(x² + y²). Argument: arg(z) = arctan(y/x) with quadrant adjustment.
- Polar form: z = r cis θ = r(cos θ + i sin θ).
- Multiplication and division: |z₁ z₂| = |z₁| |z₂|, arg(z₁ z₂) = arg(z₁) + arg(z₂); |z₁/z₂| = |z₁|/|z₂|, arg(z₁/z₂) = arg(z₁) − arg(z₂).
- de Moivre's Theorem: (r cis θ)^n = r^n cis(nθ).
- Conjugate roots: for real polynomials, non-real roots always appear in conjugate pairs z and z̄.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SACE Stage 2 Specialist Mathematics Subject Outline also lists:

- Loci in the complex plane: circle |z − z₀| = r, perpendicular bisector |z − z₁| = |z − z₂|, and half-line arg(z − z₀) = α.
- Transformations of regions in the Argand plane under linear complex functions w = az + b.
- Binomial expansion and de Moivre's theorem to express cos(nθ) and sin(nθ) in powers of cos θ and sin θ.
- Sum and product of the nth roots of unity.
- Factoring quartic polynomials with no real roots over ℝ into two quadratic factors.

Confirm the live Subject Outline on the SACE website before planning revision around these.

---

*Last updated 2026-09-24. Source: SACE Stage 2 Specialist Mathematics Subject Outline, https://www.sace.sa.edu.au/web/specialist-mathematics. Awarding body: SACE Board of South Australia.*