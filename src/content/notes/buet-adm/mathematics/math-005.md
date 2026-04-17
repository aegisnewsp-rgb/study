---



exam: buet-adm
examName: BUET Admission
subject: mathematics
subjectName: Mathematics
topic: math-005
topicName: Complex Numbers
weight: 4
country: bd
generated: "2026-04-17T23:24:00.000000"
diagramPrompt: "Clean educational diagram showing Complex Numbers Argand plane with clear labels, white background, exam-style illustration"





---
# Complex Numbers

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Complex Numbers** — Key Facts for BUET
Definition: z = x + iy where x, y ∈ ℝ and i = √−1; set of complex numbers denoted ℂ
Real part: Re(z) = x; Imaginary part: Im(z) = y
Modulus: |z| = √(x² + y²); Argument: arg(z) = θ where tan θ = y/x (with quadrant check)
Conjugate: z̄ = x − iy; property: z·z̄ = |z|²
⚡ Exam tip: For BUET, complex numbers combine with algebra and geometry — polar form and de Moivre's theorem are essential!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Complex Numbers** — BUET Study Guide

**Polar form:**
z = r(cos θ + i sin θ) = r cis θ where r = |z|, θ = arg(z)
Euler's formula: e^{iθ} = cos θ + i sin θ, so z = re^{iθ}

**Algebraic operations:**
- Addition: z₁ + z₂ = (x₁+x₂) + i(y₁+y₂)
- Multiplication: z₁·z₂ = (x₁x₂ − y₁y₂) + i(x₁y₂ + y₁x₂)
- Division: z₁/z₂ = (z₁·z₂̄)/|z₂|²

**Modulus properties:**
- |z₁z₂| = |z₁||z₂|
- |z₁/z₂| = |z₁|/|z₂|
- |z₁ + z₂| ≤ |z₁| + |z₂| (triangle inequality)
- ||z₁| − |z₂|| ≤ |z₁ − z₂|

**Conjugate properties:**
- z + z̄ = 2Re(z)
- z − z̄ = 2i Im(z)
- z·z̄ = |z|²
- (z₁ + z₂)̄ = z̄₁ + z̄₂
- (z₁z₂)̄ = z̄₁·z̄₂

**De Moivre's theorem:**
[cos θ + i sin θ]^n = cos(nθ) + i sin(nθ) = cis(nθ)
This extends to any complex number in polar form

**nth roots of unity:**
Solutions to z^n = 1: z_k = e^{2πik/n} for k = 0, 1, ..., n−1
Sum of all nth roots of unity = 0

**Cube roots of unity:**
Solutions to z³ = 1: 1, ω, ω² where ω = e^{2πi/3} = −½ + i√3/2
Property: 1 + ω + ω² = 0; ω³ = 1; ω² = ω̄

**Argument properties:**
- arg(z₁z₂) = arg(z₁) + arg(z₂)
- arg(z₁/z₂) = arg(z₁) − arg(z₂)
- arg(z^n) = n arg(z)

**Important identities:**
- |z₁ + z₂|² = |z₁|² + |z₂|² + 2 Re(z₁z₂̄)
- |z₁ − z₂|² = |z₁|² + |z₂|² − 2 Re(z₁z₂̄)

**Geometric interpretation:**
- |z − z₀| = r: circle with centre z₀, radius r
- |z − z₁| = |z − z₂|: perpendicular bisector of segment joining z₁ and z₂

- **Key formula:** z·z̄ = |z|²; [r cis θ]^n = r^n cis nθ; 1 + ω + ω² = 0 for cube roots of unity
- **Common trap:** arg(z) is NOT simply tan⁻¹(y/x) — always check the quadrant: Q1: tan⁻¹(y/x); Q2: π + tan⁻¹(y/x); Q3: tan⁻¹(y/x) − π; Q4: tan⁻¹(y/x)
- **Exam weight:** 1–2 questions per exam (4–8 marks); frequently combined with other topics

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Complex Numbers** — Comprehensive BUET Notes

**Argand plane:**
Every complex number z = x + iy corresponds to point (x, y)
Distance from origin = |z|; direction from positive x-axis = arg(z)

**General nth roots:**
For z^n = w, solutions are z = r^{1/n} cis((θ + 2πk)/n) for k = 0, 1, ..., n−1
where w = r cis θ

**Argument conventions:**
Principal argument Arg(z) is in (−π, π]
For positive real axis reference, measure counterclockwise

**Locus problems in complex form:**
- Circle: |z − a| = r
- Perpendicular bisector: |z − z₁| = |z − z₂|
- Ellipse: |z − z₁| + |z − z₂| = constant (constant > |z₁ − z₂|)
- Half-line from a at angle θ: arg(z − a) = θ

**Rotation in Argand plane:**
To rotate z by angle θ about origin: z' = z·e^{iθ}
To rotate about point α: z' = α + (z − α)·e^{iθ}

**De Moivre's theorem applications:**
- Express cos 5θ in terms of cos θ
- Express sin 5θ in terms of sin θ
- Find product of roots of unity

**Solving equations:**
For z² = −1: z = ±i
For z² = a (a > 0): z = ±√a
For z² = a (a < 0): z = ±i√|a|

**Polynomial equations with complex roots:**
If a + ib is a root of polynomial with real coefficients, then a − ib is also a root

**Exponential form applications:**
e^{iθ} = cos θ + i sin θ
Useful for evaluating expressions like (1 + i)^8

**Matrix representation:**
Complex number x + iy corresponds to matrix [[x, −y], [y, x]]

**Properties of modulus:**
- |z| = 0 only if z = 0
- |z| = |z̄|
- |z₁ + z₂|² = |z₁|² + |z₂|² + 2 Re(z₁z₂̄)
- This is derived from (z₁ + z₂)(z̄₁ + z̄₂)

**Cauchy-Schwarz inequality:**
|z₁·z₂ + z̄₁·z̄₂| ≤ 2|z₁||z₂|

**Triangle inequality applications:**
- |z₁| − |z₂| ≤ |z₁ + z₂| ≤ |z₁| + |z₂|
- |z₁ − z₂| ≥ ||z₁| − |z₂||

**Geometric transformations:**
- z → z + a: translation by vector a
- z → kz: dilation by factor k from origin
- z → e^{iθ}z: rotation by θ about origin
- z → z̄: reflection across real axis

**Sum of powers of nth roots:**
For n > 1: 1^p + ω^p + ω^{2p} + ... + ω^{(n−1)p} = 0 unless n|p
where ω is primitive nth root of unity

**Cubic equations and complex roots:**
If coefficients are real and discriminant < 0, roots include complex conjugate pair

- **Remember:** z·z̄ = |z|²; [r cis θ]^n = r^n cis nθ; arg(z₁z₂) = arg(z₁) + arg(z₂); rotation: multiply by e^{iθ}
- **Previous years:** "Find modulus and argument of (1 + i)" [2023 BUET]; "Find cube roots of unity and verify sum = 0" [2024 BUET]; "Express (1 + i)⁸ in form a + ib" [2024 BUET]

---

## 📊 BUET Admission Exam Essentials

| Detail | Value |
|---|---|
| Questions | Varies by year (~40-50 MCQ) |
| Time | Usually 2–3 hours |
| Marks | Varies by section |
| Subjects | Mathematics (highest weight), Physics, Chemistry |
| Negative | Usually no negative marking in BUET |
| Mode | Written + MCQ depending on year |

### 🎯 High-Yield Topics for BUET Mathematics
- Calculus (Differentiation + Integration) — highest weight (20–30 marks)
- Algebra (Quadratics, AP/GP/HP) — very high weight
- Coordinate Geometry (Circle, Conics) — high weight
- Trigonometry — medium-high weight
- Complex Numbers — medium weight

### 📝 Previous Year Question Patterns
- Complex Numbers: 1–2 questions per exam, 4–8 marks
- Common patterns: polar form conversion, de Moivre's theorem, nth roots, geometry in Argand plane
- Weight: medium — important as foundation

### 💡 Pro Tips
- For converting to polar form, find r = √(x²+y²) and θ = tan⁻¹(y/x) adjusted for quadrant
- De Moivre's theorem is essential for (1 + i)^n type problems — note that 1 + i = √2 cis 45°
- For cube roots of unity, remember 1 + ω + ω² = 0 and ω³ = 1
- For locus problems, set z = x + iy and convert to real equation
- Rotation in complex plane: multiply by e^{iθ} for rotation about origin

### 🔗 Official Resources
- [BUET Official](https://www.buet.ac.bd)
- [BUET Admission Portal](https://admission.buet.ac.bd)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*