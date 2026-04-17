---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-024
topicName: Complex Numbers Applications
weight: 4
country: india
generated: "2026-04-17T23:08:00.000000"
diagramPrompt: "Clean educational diagram showing Complex Numbers geometry Argand plane with clear labels, white background, labeled points, color-coded, exam-style illustration"





---
# Complex Numbers Applications

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Complex Numbers Applications** — Key Facts for JEE Main
Geometry in Argand plane: |z − z₁| = r gives circle; |z − z₁| = |z − z₂| gives perpendicular bisector; |z − a| + |z − b| = constant gives ellipse
Rotation: multiply by e^(iθ) rotates by θ about origin; to rotate about point α: z' = α + (z − α)e^(iθ)
n-th roots of unity: e^(2πik/n) for k = 0, 1, ..., n−1; sum = 0
⚡ Exam tip: For geometry problems, set z = x + iy and convert conditions to real equations — often this is the simplest approach!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Complex Numbers Applications** — JEE Main Study Guide

**Locus problems:**
- |z − a| = r: circle with centre a, radius r
- |z − a| = |z − b|: perpendicular bisector of segment joining a and b
- |z − a| + |z − b| = constant (> |a−b|): ellipse with foci a and b
- |z − a| − |z − b| = constant (< |a−b|): hyperbola
- arg(z − a) = θ: half-line from a making angle θ with positive real axis

**Rotation in Argand plane:**
- To rotate point z by angle θ about origin: z' = z·e^(iθ)
- To rotate about point α: z' = α + (z − α)·e^(iθ)
- Rotation by 90°: multiply by i (counterclockwise) or −i (clockwise)
- Rotation by 180°: multiply by −1

**n-th roots of unity:**
If ω = e^(2πi/n), then ω^n = 1 and 1 + ω + ω² + ... + ω^(n−1) = 0
- Sum of all n-th roots = 0
- Product of all n-th roots = (−1)^{n−1}
- If n is odd: real root is 1; if n is even: real roots are 1 and −1

**Geometry with roots of unity:**
For cube roots of unity (n=3): ω = e^(2πi/3) = −1/2 + i√3/2; ω² = e^(4πi/3) = −1/2 − i√3/2
Property: 1 + ω + ω² = 0; ω³ = 1; ω² = ω̄

**Important transformations:**
- z → z + a: translation by vector a
- z → kz: dilation from origin by factor k
- z → e^(iθ)z: rotation about origin by θ
- z → z̄: reflection across real axis
- z → |z|z: mapping to unit circle along each ray

**Maximum-modulus principle:**
If |z| = constant (circle), |Re(z)| or |Im(z)| maximum occurs at points on circle aligned with the relevant axis

**De Moivre's theorem applications:**
- (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)
- Useful for evaluating expressions like (1 + i)^n

**Conversion between forms:**
- Rectangular: z = x + iy
- Polar: z = r(cos θ + i sin θ)
- Euler: z = re^(iθ)
- For conversion: x = r cos θ, y = r sin θ; r = √(x² + y²), θ = tan⁻¹(y/x) with quadrant check

**Equation of line in complex plane:**
- Through two points z₁, z₂: arg((z − z₁)/(z₂ − z₁)) = 0 or π
- This is equivalent to Im[(z − z₁)/(z₂ − z₁)] = 0 (collinearity condition)

**Circle through three points:**
Find z₁, z₂, z₃; use condition that general equation has unique solution

- **Key formula:** |z − a| = r → circle; z' = α + (z − α)e^(iθ) → rotation about α; for rotation by 90°, multiply by i
- **Common trap:** For arg(z) calculation, always check which quadrant the point lies in before using tan⁻¹(y/x)
- **Exam weight:** 1 question per year (4 marks); frequently combined with quadratic equations or geometry

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Complex Numbers Applications** — Comprehensive JEE Main Notes

**Equation of perpendicular bisector:**
Set of points z equidistant from z₁ and z₂: |z − z₁| = |z − z₂|
Square both sides: |z − z₁|² = |z − z₂|² → (z − z₁)(z̄ − z̄₁) = (z − z₂)(z̄ − z̄₂)
Simplify to linear equation in x, y: represents straight line

**General equation of circle in complex form:**
|z − a| = r → (z − a)(z̄ − ā) = r² → z z̄ − a z̄ − ā z + aā − r² = 0

**General second degree equation represents circle if:**
- In z z̄ + αz + βz̄ + γ = 0, if coefficient of zz̄ is real and non-zero
- And |α|² > γ (for real radius squared)

**Collinearity condition:**
Points z₁, z₂, z₃ are collinear if Im[(z₃ − z₁)/(z₂ − z₁)] = 0
Or equivalently, (z₃ − z₁)/(z₂ − z₁) is real

**Condition for concyclicity:**
Four points z₁, z₂, z₃, z₄ are concyclic (lie on same circle) if:
Im[(z₁ − z₂)(z₃ − z₄)/(z₁ − z₄)(z₃ − z₂)] = 0
Or cross ratio (z₁, z₂; z₃, z₄) is real

**Geometry transformations as complex maps:**
- Translation: z → z + c
- Rotation: z → e^(iφ)z
- Dilation: z → kz
- Reflection: z → z̄
- Inversion: z → 1/z̄ (maps circles/lines to circles/lines)

**Mobius transformation:**
z → (az + b)/(cz + d) maps circles to circles (including lines as circles through infinity)
Preserves cross ratios

**Rotation combined with translation:**
If z₁ is rotated about z₀ by angle θ, new point is: z₁' = z₀ + (z₁ − z₀)·e^(iθ)

**Finding centre of rotation:**
If two points z₁, z₂ are rotated to z₁', z₂' about same centre, then centre z₀ satisfies:
(z₁' − z₀) = e^(iθ)(z₁ − z₀) and (z₂' − z₀) = e^(iθ)(z₂ − z₀)
Solve for z₀ from these equations

**Application to geometry problems:**
1. Represent points as complex numbers
2. Express conditions in terms of z
3. Simplify to find relationship between points

**Maximum of |z| when z satisfies |z − a| = r:**
Max |z| = |a| + r (when z lies on ray from origin through a)
Min |z| = ||a| − r| (when z lies on ray from origin away from a)

**Minimum of |z − a| + |z − b|:**
Minimum value = |a − b| (achieved when z lies on line segment between a and b)
This is triangle inequality with equality

**For |z − a| + |z − b| = constant > |a − b|:**
The locus is an ellipse with foci at a and b

**For |z − a| − |z − b| = constant:**
Locus is a hyperbola if constant < |a − b|
For constant > |a − b|, no locus exists

**Solved example for rotation:**
Rotate point 3 + 4i by 90° counterclockwise about (1 + 2i):
z₁ = 3 + 4i, α = 1 + 2i
z' = α + (z₁ − α)·i = (1 + 2i) + (2 + 2i)·i = (1 + 2i) + (−2 + 2i) = −1 + 4i

**nth roots of unity geometrically:**
nth roots of unity are vertices of regular n-gon inscribed in unit circle, first vertex at 1
Sum of vertices = 0 (vector sum of sides of regular polygon = 0)
Sum of squares of roots = 0 for n > 2

**Important cube roots of unity:**
1, ω, ω² where ω = e^(2πi/3)
1 + ω + ω² = 0
1 − ω² = √3i (for converting to simpler forms)
1 + ω = −ω² (and other relations)

**Simplifying expressions:**
1 + ω + ω² = 0
ω² = ω̄, ω³ = 1
(1 − ω)/(1 − ω²) = i√3 (can be verified)

**For any root of unity:**
If ε is any n-th root of unity except 1, then 1 + ε + ε² + ... + ε^{n−1} = 0

- **Remember:** |z − a| = r → circle; |z − z₁| = |z − z₂| → perpendicular bisector; rotation: z' = α + (z − α)e^(iθ); n-th roots sum to 0; for 90° rotation, multiply by i
- **Previous years:** "Find locus of z if |z − 2i| = 2|z − 1|" [2023]; "Find cube roots of unity and verify sum = 0" [2024]; "Rotate point (1+i) by 60° about origin, find new coordinates" [2024]

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
- Complex Numbers (Applications): 1 question per year, 4 marks
- Common patterns: locus problems, rotation, n-th roots geometry
- Weight: medium frequency, high scoring

### 💡 Pro Tips
- For locus problems, always convert |z − a| form to equation in x, y by squaring
- Remember: to rotate point z about origin by θ, multiply by e^(iθ); about α, subtract α first, multiply, add back
- For n-th roots of unity problems, use the fact that 1 + ω + ω² = 0
- In geometry problems, set z = x + iy and solve for x, y is often simpler than pure complex manipulation
- For locus |z − a| = k|z − b|, square both sides to get linear equation (line) if k = 1, or circle if k ≠ 1

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*