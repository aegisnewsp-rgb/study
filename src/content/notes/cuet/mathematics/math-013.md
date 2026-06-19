---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-013
topicName: Complex Numbers
weight: 3
country: india
generated: "2026-03-29T05:05:39"
lastUpdated: "2026-06-19"
---

# Complex Numbers

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **complex number** has the form **z = a + ib**, where *a*, *b* are real, *i* is the imaginary unit with **i² = −1**, *a = Re(z)*, *b = Im(z)*. The **modulus** is **|z| = √(a² + b²)** and the **argument** is **arg(z) = tan⁻¹(b/a)** with quadrant correction (range (−π, π] or [0, 2π)). The **conjugate** is **z̄ = a − ib**, and the identity **z · z̄ = |z|² = a² + b²** turns division into multiplication. **De Moivre's theorem** states **(cos θ + i sin θ)ⁿ = cos nθ + i sin nθ**, the workhorse for powering and rooting. In CUET UG, expect 1–2 short questions: convert to polar form, find square roots, or simplify a power — keep i² = −1 and quadrant rules at your fingertips.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Algebra and the Argand Plane
A complex number **z = a + ib** is plotted on the **Argand plane** with the real axis as *x* and the imaginary axis as *y*. Addition is vector addition: *(a + ib) + (c + id) = (a + c) + i(b + d)*. Multiplication expands with **i² = −1**: *(a + ib)(c + id) = (ac − bd) + i(ad + bc)*. Division uses the conjugate trick:

> **z₁ / z₂ = (z₁ · z̄₂) / |z₂|²**

#### Modulus and Conjugate Properties
- **|z|² = z · z̄ = a² + b²** (never z²)
- **|z₁ z₂| = |z₁| · |z₂|** and **|z₁ / z₂| = |z₁| / |z₂|**
- **Triangle inequality:** |z₁ + z₂| ≤ |z₁| + |z₂|, with equality only when arg(z₁) = arg(z₂)
- **z + z̄ = 2 Re(z)** and **z − z̄ = 2i Im(z)**

#### Polar Form and De Moivre
Write **z = r(cos θ + i sin θ) = r e^(iθ)** with *r = |z|* and *θ = arg(z)*. Then:

- **Multiplication:** r₁ r₂ [cos(θ₁ + θ₂) + i sin(θ₁ + θ₂)]
- **Power (De Moivre):** zⁿ = rⁿ (cos nθ + i sin nθ)
- **n-th roots:** z^(1/n) = r^(1/n) [cos((θ + 2kπ)/n) + i sin((θ + 2kπ)/n)], k = 0, 1, …, n−1

#### Typical CUET Question Patterns
1. *Find modulus and argument of (1 + i)/(1 − i).*
2. *If z² = 5 + 12i, find z.* (Compare real and imaginary parts after setting z = a + ib.)
3. *Express (1 + i√3)⁸ in polar form and simplify using De Moivre.*

#### Key Facts
| Form | Expression | Use |
|---|---|---|
| Rectangular | a + ib | Algebra |
| Modulus-Argument | r(cos θ + i sin θ) | Geometry, powers |
| Euler | r e^(iθ) | Calculus, series |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Square Root of a Complex Number
To find √(a + ib), set *√(a + ib) = x + iy* with *x, y ≥ 0*. Squaring gives *x² − y² = a* and *2xy = b*, solved via *x² = (√(a² + b²) + a)/2* and *y² = (√(a² + b²) − a)/2*. The sign of *b* decides the sign of *y*. This is the standard CUET 2-mark question.

#### Quadratics with Negative Discriminant
When the discriminant D = b² − 4ac < 0, roots are complex conjugates: **x = (−b ± i√|D|) / (2a)**. The product of roots equals *c/a* (real) and the sum equals *−b/a* (real) — a fact often tested in CUET General Test.

#### Common Mistakes
- Writing **|z|² = z²**: always use z · z̄ instead; z² = (a² − b²) + i(2ab).
- Ignoring the quadrant: arg(z) for *z = −1 − i* is **−3π/4**, not *π/4*.
- Forgetting the *rⁿ* factor in De Moivre — the modulus *r* must be raised too, not just the angle.
- Treating *|z₁ + z₂|* as equal to *|z₁| + |z₂|*; equality only holds for collinear vectors with the same direction.
- Dividing without conjugating: *(1 + i)/(1 − i)* needs the conjugate *1 + i* on top and bottom before simplification.

#### Connection to Adjacent Topics
De Moivre links directly to **trigonometry** (multiple-angle formulas) and **binomial theorem** (via (cos θ + i sin θ)ⁿ expansion). The Euler form *e^(iθ) = cos θ + i sin θ* ties complex numbers to **exponential series** and surfaces again in CUET's calculus-light integrals.

#### Worked Micro-Example
Find the modulus and argument of *z = (1 + i√3) / (1 + i)*.

1. Multiply top and bottom by *1 − i*: z = (1 + i√3)(1 − i) / ((1 + i)(1 − i)) = ((1 + √3) + i(√3 − 1)) / 2.
2. Modulus: |z| = (1/2)·√((1 + √3)² + (√3 − 1)²) = (1/2)·√(1 + 2√3 + 3 + 3 − 2√3 + 1) = (1/2)·√8 = √2.
3. Argument: tan θ = (√3 − 1)/(√3 + 1) = 2 − √3 ⇒ θ = **π/12** (since tan 15° = 2 − √3).

#### Practice Prompts
1. If *z = 2(cos 40° + i sin 40°)*, compute *z⁵* in rectangular form and state its modulus.
2. Solve *z² + (2 − 3i)z + (5 − i) = 0* for *z*, given that one root is *−1 + 2i*.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
