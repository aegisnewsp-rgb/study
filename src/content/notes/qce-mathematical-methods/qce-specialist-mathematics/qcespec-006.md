---
exam: qce-mathematical-methods
examName: QCE Mathematical Methods & Specialist Mathematics (QCAA 2025)
subject: qce-specialist-mathematics
subjectName: Specialist Mathematics
topic: qcespec-006
topicName: "Major Topic: Complex Numbers"
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Major Topic: Complex Numbers — QCE Specialist Mathematics (QCAA 2025) Notes

Complex Numbers is one of the four major topics in QCE Specialist Mathematics. It covers the imaginary unit, complex arithmetic, Argand diagrams, modulus and argument, De Moivre's theorem and applications to roots of polynomial equations.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/specialist-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Imaginary unit.** i² = −1.
- **Complex arithmetic.** z = a + bi. |z| = √(a² + b²).
- **Polar form.** z = r(cos θ + i sin θ).
- **De Moivre's theorem.** (cos θ + i sin θ)^n = cos nθ + i sin nθ.

#### Examiner traps

- Confusing z̄ and −z.
- Mixing up degrees and radians.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Complex arithmetic

z = a + bi. z̄ = a − bi. |z| = √(a² + b²). arg(z) = arctan(b/a).

Multiplication: (a + bi)(c + di) = (ac − bd) + (ad + bc)i.

#### Polar form

z = r(cos θ + i sin θ). r = |z| ≥ 0. Conversion: a = r cos θ, b = r sin θ.

#### De Moivre's theorem

(cos θ + i sin θ)^n = cos nθ + i sin nθ. Extends to rational n.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Complex Numbers is a Specialist topic

- Complex numbers extend real numbers to the algebraic closure; they appear in physics, engineering and signal processing.

#### Year 11-12 planning pattern

- Term 1: Complex arithmetic, modulus, argument.
- Term 2: Polar form.
- Term 3: De Moivre's theorem.
- Term 4: Applications.

#### Common misconceptions (and the correction)

- "arg(z) is unique." arg(z) is determined modulo 2π.
- "z̄ = −z." No — conjugate is reflection in real axis; negation is rotation by π.

#### Specification reference

This major topic is one of four cross-cutting topics in QCE Specialist Mathematics. Confirm the live syllabus on qcaa.qld.edu.au.

#### Worked example — de Moivre's Theorem and nth roots of a complex number

Find all complex solutions to the equation:

```
  z³ = −8i
```

Express all solutions in Cartesian form a + bi using exact values.

Step 1: Convert the right-hand side −8i to polar (modulus-argument) form
For w = −8i = 0 − 8i:
- Modulus: r = |−8i| = 8
- Argument: The point lies on the negative imaginary axis, so arg(w) = −π/2 (or 3π/2)

```
  −8i = 8 [ cos(−π/2) + i sin(−π/2) ]
```

Step 2: Set up the general polar form with 2kπ periodic terms

```
  z³ = 8 cis( −π/2 + 2kπ ),  for k = 0, 1, 2
```

Step 3: Apply de Moivre's Theorem to extract the cube roots

```
  z_k = 8^(1/3) cis [ (−π/2 + 2kπ) / 3 ]
      = 2 cis [ −π/6 + (2kπ / 3) ]
```

Step 4: Evaluate for k = 0, 1, 2

Case k = 0:

```
  θ₀ = −π/6
  z₀ = 2 [ cos(−π/6) + i sin(−π/6) ]
     = 2 [ (√3 / 2) − i (1 / 2) ]
     = √3 − i
```

Case k = 1:

```
  θ₁ = −π/6 + 2π/3 = −π/6 + 4π/6 = 3π/6 = π/2
  z₁ = 2 [ cos(π/2) + i sin(π/2) ]
     = 2 [ 0 + i(1) ]
     = 2i
```

Case k = 2:

```
  θ₂ = −π/6 + 4π/3 = −π/6 + 8π/6 = 7π/6 (or −5π/6 in principal range (−π, π])
  z₂ = 2 [ cos(−5π/6) + i sin(−5π/6) ]
     = 2 [ −(√3 / 2) − i (1 / 2) ]
     = −√3 − i
```

The three roots are z = √3 − i, z = 2i, and z = −√3 − i.
On the Argand plane, these three roots form the vertices of an equilateral triangle inscribed in a circle of radius 2 centered at the origin.

#### Worked example — complex polynomial factorisation with Conjugate Root Theorem

Given that z = 1 + 2i is a root of the real polynomial:

```
  P(z) = z⁴ − 2z³ + 9z² − 8z + 20
```

1. State the second root guaranteed by the Conjugate Root Theorem.
2. Find the quadratic factor corresponding to these two conjugate roots.
3. Factorise P(z) completely over the complex numbers.

Part 1: Conjugate root
Since P(z) has real coefficients, the non-real roots occur in conjugate pairs.
Therefore, z = 1 − 2i is also a root of P(z).

Part 2: Quadratic factor
The quadratic factor corresponding to roots z = 1 ± 2i is:

```
  Q(z) = (z − (1 + 2i))(z − (1 − 2i))
       = ((z − 1) − 2i)((z − 1) + 2i)
       = (z − 1)² − (2i)²
       = z² − 2z + 1 − 4(−1)
       = z² − 2z + 5
```

Part 3: Polynomial division to find the remaining factor
Divide P(z) by z² − 2z + 5:

```
  P(z) / (z² − 2z + 5) = z² + 4
```

Verify:

```
  (z² − 2z + 5)(z² + 4) = z⁴ + 4z² − 2z³ − 8z + 5z² + 20
                        = z⁴ − 2z³ + 9z² − 8z + 20 ✓
```

Factorise z² + 4 over ℂ:

```
  z² + 4 = 0  ⇒  z² = −4  ⇒  z = ±2i
  z² + 4 = (z − 2i)(z + 2i)
```

The complete linear factorisation over ℂ is:

```
  P(z) = (z − (1 + 2i))(z − (1 − 2i))(z − 2i)(z + 2i)
```

#### Common marking-scheme mistakes

- Applying the Conjugate Root Theorem to polynomials with non-real complex coefficients.
- Forgetting to divide the 2kπ angle increment by n when finding nth roots.
- Stating angles outside the standard principal argument interval (−π, π].
- Evaluating i² as 1 instead of −1 when expanding complex expressions.
- Confusing Cartesian modulus r = √(a² + b²) by including i in the sum (writing √(a² + (bi)²)).

#### 20-minute recap before you walk in

- Complex number forms: Cartesian z = a + bi, polar z = r cis θ, exponential z = r e^(iθ).
- Modulus r = √(a² + b²); argument θ = arctan(b/a) adjusted for quadrant.
- de Moivre's Theorem: [r cis θ]^n = r^n cis(nθ).
- nth roots of unity lie equally spaced at angular intervals of 2π/n on the unit circle.
- Conjugate Root Theorem: if P(z) has real coefficients and P(w) = 0, then P(w̄) = 0.

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA Specialist Mathematics syllabus for complex numbers also lists:

- Loci on the Argand plane: circles |z − z₀| = r, perpendicular bisectors |z − z₁| = |z − z₂|, and rays arg(z − z₀) = α.
- Geometric transformations on the Argand plane: rotation, dilation, and translation via complex arithmetic.
- Proving trigonometric identities using de Moivre's Theorem (expanding cos(nθ) and sin(nθ)).
- Roots of unity sums: showing that 1 + ω + ω² + ... + ω^(n−1) = 0 for primitive nth root ω.
- Exponential form identities including Euler's formula e^(iθ) = cos θ + i sin θ.

Confirm the live sub-topic list on the QCAA Specialist Mathematics syllabus page before planning revision around these.

---

*Last updated 2026-09-24. Source: QCE Specialist Mathematics General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/specialist-mathematics. Awarding body: Queensland Curriculum and Assessment Authority (QCAA).*