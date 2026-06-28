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
lastUpdated: "2026-06-28"
diagramPrompt: "Mathematical diagram showing Complex Numbers concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Complex Numbers

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **complex number** has the form **z = a + bi**, where a and b are real and **i² = -1** is the imaginary unit. **Re(z) = a** is the real part; **Im(z) = b** is the imaginary part (note: Im(z) itself is a *real number*, not imaginary). The **modulus** is **|z| = √(a² + b²)** and the **argument** is **arg(z) = tan⁻¹(b/a)** measured from the positive real axis. The **complex conjugate** is **z̄ = a − bi**, satisfying **z · z̄ = a² + b² = |z|²**, which rationalises denominators. ECAT usually asks **1–2 MCQs (≈2–3 marks)** testing modulus/argument calculation, polar conversion, or De Moivre's theorem. Remember that **e^{iθ} = cos θ + i sin θ**, so **z = r e^{iθ}** is the compact exponential form. Cube roots of unity **1, ω, ω²** satisfy **1 + ω + ω² = 0**, ω³ = 1 — a frequent shortcut.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Rectangular, Polar, and Exponential Forms
Every complex number z = a + bi corresponds to a point (a, b) on the **Argand diagram**. The **modulus r = √(a² + b²)** is the distance from the origin; the **argument θ** is the angle from the positive real axis, with the **principal argument** restricted to **−π < Arg(z) ≤ π**. Conversion identities:

- a = r cos θ,  b = r sin θ
- **Polar:** z = r(cos θ + i sin θ)
- **Exponential:** z = r e^{iθ}  (Euler's formula)

#### Algebra and Conjugates
Addition and subtraction act componentwise on (a, b). Multiplication combines via (a+bi)(c+di) = (ac − bd) + (ad + bc)i — the cross terms from i² = −1 flip sign. Division rationalises the **denominator by multiplying numerator and denominator by the conjugate of the divisor**, since z · z̄ = |z|² is always real and non-negative. The conjugate obeys **z̄̄ = z**, **(z₁ + z₂)̄ = z̄₁ + z̄₂**, **z₁z̄₂̄ = z̄₁ · z̄₂**, and **|z̄| = |z|**, **arg(z̄) = −arg(z)**.

#### De Moivre's Theorem
For any real θ and integer n, **(cos θ + i sin θ)ⁿ = cos nθ + i sin nθ**. Combined with the polar form, this means **zⁿ = rⁿ(cos nθ + i sin nθ)**. ECAT questions exploit it to (i) compute powers like (1 + i)¹⁰ by first writing 1 + i = √2(cos π/4 + i sin π/4), or (ii) extract **nth roots**: the n solutions of zⁿ = w are **r^{1/n} (cos((θ + 2kπ)/n) + i sin((θ + 2kπ)/n))**, k = 0, 1, …, n−1.

#### Cube Roots of Unity
The equation z³ = 1 yields 1, ω, ω² where ω = −½ + i(√3/2). Properties: **ω³ = 1**, **1 + ω + ω² = 0**, **ω² = ω̄**. These appear in ECAT factorisation and in evaluating sums of roots of unity.

#### Common ECAT Patterns
- Compute |z| and Arg(z) for a given z, often with quadrant sign-checking.
- Convert z = −1 + i√3 into polar form: r = 2, θ = 2π/3.
- Apply De Moivre to evaluate (√3 + i)⁶ or simplify ((1 + i)/(1 − i))⁸.
- Solve z² + 1 = 0 → z = ±i; recognise discriminant-negative quadratics yield complex roots.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Quadratics with Negative Discriminants
When b² − 4ac < 0, roots are a complex conjugate pair **α, ᾱ**. Conjugate roots share the same modulus, opposite arguments, and a real product αᾱ = |α|². ECAT problems test sum = −b/a (real) and product = c/a (real) — never assume roots are real without checking the discriminant.

#### nth Roots — Getting All of Them
A frequent trap is returning only one root from zⁿ = w. The full solution set lies on a **circle of radius r^{1/n}** spaced evenly by 2π/n. For example, the cube roots of 8 are 2, 2ω, 2ω²; missing any is a guaranteed mark loss. Drawing the Argand diagram makes this geometry obvious and is recommended under exam pressure.

#### Edge Cases and Traps
- **|z₁ · z₂| = |z₁||z₂|** and **|z₁ + z₂| ≤ |z₁| + |z₂|** (triangle inequality) — useful for inequality questions.
- arg(z₁z₂) = arg(z₁) + arg(z₂) mod 2π; watch branch-cut jumps when arguments cross ±π.
- z is **purely real** iff z = z̄; **purely imaginary** iff z = −z̄. Useful for finding unknowns from conditions like z² = z̄².
- (1 + i)² = 2i, not 1 + i². Always expand using (a+bi)² = a² − b² + 2abi.

#### Worked Micro-Example
Find the modulus and argument of **z = 1 − i** and write it in polar form.
|z| = √(1² + (−1)²) = √2. Since Re(z) > 0 and Im(z) < 0, the point lies in the fourth quadrant: **Arg(z) = −π/4**. Polar form: **z = √2 (cos(−π/4) + i sin(−π/4)) = √2 e^{−iπ/4}**.

#### ECAT Strategy
Complex numbers carry roughly 2–3 marks (1–2 MCQs). Prioritise: (1) fast polar conversion using r and quadrant signs, (2) De Moivre's theorem applied to compact forms like (1 + i), √3 + i, and roots of unity, (3) recognising conjugate-root quadratics. Time budget: ≤ 90 seconds per MCQ.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
