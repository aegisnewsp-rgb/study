---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-001
topicName: Complex Numbers
weight: 4
country: india
generated: "2026-04-17T22:33:00.000000"
diagramPrompt: "Clean educational diagram showing Complex Numbers Argand plane with clear labels, white background, labeled arrows, color-coded components, exam-style illustration"





---
# Complex Numbers

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Complex Numbers** — Key Facts for JEE Main
Definition: a + bi where a, b ∈ ℝ and i = √−1. The set ℂ includes all such numbers.
Argand plane: every complex number z = x + iy corresponds to point (x, y) in the complex plane; x = Re(z), y = Im(z)
Modulus: |z| = √(a² + b²) = distance from origin to point (a, b)
Argument: arg(z) = θ where tan θ = b/a; principal value lies in (−π, π]
Conjugate: z̄ = a − ib; important identities: z·z̄ = |z|², z + z̄ = 2Re(z), z − z̄ = 2i Im(z)
⚡ Exam tip: JEE Main frequently tests conversion between rectangular and polar forms, and uses z·z̄ = |z|² to solve equations quickly!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Complex Numbers** — JEE Main Study Guide

**Polar form:** z = r(cos θ + i sin θ) = r cis θ, where r = |z|, θ = arg(z)
Euler's formula: e^(iθ) = cos θ + i sin θ; therefore z = re^(iθ)
De Moivre's Theorem: [r(cos θ + i sin θ)]^n = r^n [cos(nθ) + i sin(nθ)] = r^n cis(nθ)
nth roots of unity: if ω = e^(2πi/n), then roots are 1, ω, ω², ..., ω^(n−1); sum of all roots = 0
Cube roots of unity: solutions to x³ = 1 are 1, ω, ω² where ω = (−1 + i√3)/2; key: ω³ = 1, 1 + ω + ω² = 0, ω² = ω̄

**Important identities to memorise:**
- |z₁ + z₂|² = |z₁|² + |z₂|² + 2 Re(z₁·z₂̄)
- |z₁ − z₂|² = |z₁|² + |z₂|² − 2 Re(z₁·z₂̄)
- |z₁ + z₂| ≤ |z₁| + |z₂| (triangle inequality, equality when arguments differ by 0)
- |z₁ − z₂| ≥ ||z₁| − |z₂|| (reverse triangle inequality)

**Geometric interpretation:** |z − z₀| = r represents a circle centred at z₀ with radius r; |z − z₁| = |z − z₂| is the perpendicular bisector of segment joining z₁ and z₂

**Solving equations:**
- If |z| = 1 and arg(z) = θ, then z = e^(iθ) = cos θ + i sin θ
- For z² = −1, z = ±i; for z² = a (a > 0), z = ±√a
- Quadratic with complex coefficients: use formula or compare real/imaginary parts

- **Key formula:** If z = x + iy, then arg(z) = tan⁻¹(y/x) with quadrant correction
- **Common trap:** arg(z) is NOT tan⁻¹(y/x) blindly — check which quadrant the point lies in. Q1: θ = tan⁻¹(y/x); Q2: θ = π + tan⁻¹(y/x); Q3: θ = tan⁻¹(y/x) − π; Q4: θ = tan⁻¹(y/x)
- **Exam weight:** 1–2 questions per year; often combined with quadratic equations or coordinate geometry in a single problem

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Complex Numbers** — Comprehensive JEE Main Notes

**Geometry in Argand plane:**
- For any complex numbers a, b, the expression |z − a| = |z − b| is the perpendicular bisector of segment AB
- |z − a| + |z − b| = constant > |a − b| describes an ellipse with foci at a and b
- |z − a| = k|z − b| (k ≠ 1) is a circle; find centre by solving algebraically
- Rotation: multiplying by e^(iθ) rotates any point by angle θ about origin

**nth roots of unity deep dive:**
If ω = e^(2πi/n), then ω^n = 1 and 1 + ω + ω² + ... + ω^(n−1) = 0
Properties: ω^k · ω^(n−k) = 1; ω^(n+k) = ω^k; (1 + ω)^n + (1 + ω²)^n = 0 when n is not multiple of 3
Sum of pth powers of nth roots: S_p = 1^p + ω^p + ω^(2p) + ... + ω^((n−1)p)
- If n ∤ p: S_p = 0
- If n | p: S_p = n

**Rotation problems:**
To rotate point z by angle φ about point α: z' = α + (z − α)e^(iφ)
This is the key formula for geometric transformation questions in JEE Main

**Maximum-minimum problems:**
- For z on circle |z| = r, max of Re(a z) = r|a|
- For z in region |z − z₀| ≤ r, max of |z| occurs at farthest point from origin
- Always convert to triangle inequality: |z₁ + z₂| ≤ |z₁| + |z₂|, equality when they have same argument

**Condition for collinearity:** Three points z₁, z₂, z₃ are collinear if Im[(z₃ − z₁)/(z₂ − z₁)] = 0, i.e. the ratio is real

**Condition for concyclicity:** Four points z₁, z₂, z₃, z₄ lie on a circle if cross ratio (z₁, z₂; z₃, z₄) is real

- **Remember:** For cube roots of unity: ω = e^(2πi/3), ω² = e^(4πi/3); always use 1 + ω + ω² = 0 and ω³ = 1
- **Previous years:** "If (1+i)z₁ = (1−i)z₂ then arg(z₁/z₂) = ?" [2023]; "If |z − 5i| = 3, minimum value of |z + i| is ?" [2023]; Cube roots of unity appears almost every 2–3 years

---

## 📊 JEE Main Exam Essentials

| Detail | Value |
|---|---|
| Questions | 90 (30 per subject) |
| Time | 3 hours |
| Marks | 300 (90 per subject) |
| Section | Physics (30), Chemistry (30), Mathematics (30) |
| Negative | −1 for wrong answer |
| Mode | Computer-based |

### 🎯 High-Yield Topics for JEE Main Mathematics
- Calculus (Differentiation + Integration) — ~35 marks combined
- Coordinate Geometry (straight lines, circles, conics) — ~20 marks
- Algebra (Complex Numbers, Quadratics, P&C, Probability) — ~25 marks
- Trigonometry + Inverse Trigonometry — ~15 marks
- Vector + 3D — ~15 marks

### 📝 Previous Year Question Patterns
- Complex Numbers: often combined with quadratic equations, argand plane geometry
- Pattern: 1 direct theory question + 1 computational problem per year
- Weight: 4–8 marks total in the exam

### 💡 Pro Tips
- Complex Numbers is scoring — master polar form and de Moivre's theorem
- For locus problems, always start with |z − z₀| = r or |z − a| = |z − b|
- cube roots of unity properties (1 + ω + ω² = 0) appear frequently — memorise them
- Practice converting between forms quickly — JEE Main tests speed
- NCERT Mathematics is essential — many questions come directly from examples/exercises

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*