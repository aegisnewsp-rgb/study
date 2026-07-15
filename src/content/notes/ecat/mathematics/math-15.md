---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-15
topicName: Complex Numbers
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.071792"
lastUpdated: "2026-07-15"
diagramPrompt: "Mathematical diagram showing Complex Numbers concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Complex Numbers

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT.

A **complex number** has the form **z = a + bi**, where **a, b ∈ ℝ** and **i² = −1**. The real part is **Re(z) = a** and the imaginary part is **Im(z) = b**. Two basics govern most ECAT arithmetic:

- **Modulus:** |z| = √(a² + b²), the distance from the origin in the **Argand plane**.
- **Argument:** arg(z) = arctan(b/a), placed in the correct quadrant by the signs of a and b.
- **Conjugate:** z̄ = a − bi, so z·z̄ = a² + b² = |z|².
- **Division:** multiply top and bottom by the conjugate of the denominator.
- **Polar form:** z = r(cos θ + i sin θ) = re^(iθ), useful with **De Moivre's theorem**.

**ECAT pointers:** expect 1–2 MCQs worth ~3% of the Mathematics section, usually on modulus, argument, conjugate identities, or solving a quadratic whose discriminant is negative. Memorise i² = −1, i³ = −i, i⁴ = 1.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students working through the syllabus over weeks.

#### Rectangular form and basic arithmetic

Every complex number is written **z = a + bi** with real **a** and real **b**. Addition and subtraction act component-wise: (a + bi) + (c + di) = (a + c) + (b + d)i. Multiplication uses the distributive law plus **i² = −1**:

> (a + bi)(c + di) = (ac − bd) + (ad + bc)i

Division rationalises the denominator by multiplying by **z̄**:

> z₁ / z₂ = (z₁ · z̄₂) / |z₂|², valid for z₂ ≠ 0.

#### Modulus, argument, and the Argand plane

The point (a, b) plots z in the **Argand plane**. From this, |z| = √(a² + b²) and arg(z) = arctan(b/a), with the angle placed using the **ASTC (all-students-take-calculus)** quadrant rule. The polar form **z = r(cos θ + i sin θ)** rewrites any z using r = |z| and θ = arg(z).

#### Conjugate identities worth memorising

| Identity | Result |
|---|---|
| z + z̄ | 2 Re(z) = 2a |
| z − z̄ | 2i Im(z) = 2bi |
| z · z̄ | a² + b² = |z|² |
| z̄̄ | z |
| (z₁ + z₂)̄ | z̄₁ + z̄₂ |

#### Quadratic link

For ax² + bx + c = 0, roots are z = (−b ± √(b² − 4ac)) / (2a). When the discriminant is negative, the roots are **complex conjugates** of the form p ± qi, which is a favourite ECAT question type.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for mastery-level preparation.

#### De Moivre's theorem and powers

For any integer n, **(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)**. This is the engine behind nth-root problems and powers of complex numbers. Roots of unity satisfy zⁿ = 1, giving n equally spaced points on the unit circle at angles 2kπ/n.

#### Euler's form and quick conversions

The identity **e^(iθ) = cos θ + i sin θ** lets you convert z = re^(iθ) into z = r(cos θ + i sin θ) and back. Multiplication becomes angle-addition: r₁e^(iθ₁) · r₂e^(iθ₂) = r₁r₂ e^(i(θ₁+θ₂)). This is faster than expanding in rectangular form for ECAT chained multiplications.

#### Common mistakes that cost marks

- Writing **|z| = a** or **|z| = b** instead of √(a² + b²).
- Taking arg(z) = arctan(b/a) without **correcting the quadrant**; arg of (−1, −1) is −3π/4, not π/4.
- Confusing **z̄ = a − bi** with **−z = −a − bi** — only the imaginary part flips sign.
- Dividing without conjugating the denominator, which leaves an imaginary part in the answer.

#### Worked micro-example

Find |z| and arg(z) for z = 1 + i√3.

> |z| = √(1² + (√3)²) = √4 = 2.
> arg(z) = arctan(√3 / 1) = π/3, first quadrant, so θ = π/3.
> Polar form: z = 2(cos π/3 + i sin π/3) = 2e^(iπ/3).

#### Practice prompts

1. If z = 3 − 4i, compute z̄, |z|, and z⁻¹ in rectangular form.
2. Solve x² + 2x + 5 = 0 and verify the roots are complex conjugates.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Complex Numbers" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
