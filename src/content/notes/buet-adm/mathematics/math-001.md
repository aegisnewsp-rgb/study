---



exam: buet-adm
examName: BUET Admission
subject: mathematics
subjectName: Mathematics
topic: math-001
topicName: Algebra
weight: 5
country: bd
generated: "2026-04-17T23:20:00.000000"
diagramPrompt: "Clean educational diagram showing Algebra concepts with clear labels, white background, exam-style illustration"





---
# Algebra

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Algebra** — Key Facts for BUET
Polynomial degree n has n roots (real or complex); sum of roots = −b/a, product = c/a
Quadratic: ax² + bx + c = 0; roots = [−b ± √(b² − 4ac)]/2a
For quadratic with real roots: discriminant D ≥ 0; if D = 0, roots are equal; if D < 0, complex conjugate roots
Partial fractions: decompose rational functions to integrate or simplify
⚡ Exam tip: BUET algebra problems often combine with complex numbers or matrices — mastering Vieta's formulas is essential!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Algebra** — BUET Study Guide

**Quadratic equations:**
- Standard form: ax² + bx + c = 0
- Sum of roots (α + β) = −b/a
- Product of roots (αβ) = c/a
- For equal roots: b² = 4ac (D = 0)
- For real roots: b² ≥ 4ac (D ≥ 0)

**Nature of roots analysis:**
- Both positive: D ≥ 0, α + β > 0, αβ > 0, f(0) > 0
- Both negative: D ≥ 0, α + β < 0, αβ > 0, f(0) > 0
- Opposite signs: αβ < 0 (sufficient)
- Reciprocal: if one root is α, other is 1/α → c = a
- Equal magnitude, opposite sign: b = 0

**Transformation of equations:**
- Roots scaled by k: equation becomes a(x/k)² + b(x/k) + c = 0 → ak²x² + bkx + c = 0
- Roots shifted by m: substitute x − m → a(x−m)² + b(x−m) + c = 0
- Reciprocal roots: reverse coefficients → cx² + bx + a = 0

**Partial fractions:**
For proper fraction P(x)/Q(x) where degree of P < degree of Q:
- Linear factors: A/(x−a), B/(x−b)
- Repeated linear: A/(x−a) + B/(x−a)²
- Quadratic factor: (Ax+B)/(x²+bx+c)

**Binomial expansion:**
(a + b)^n = Σ C(n,r) a^{n−r} b^r
- General term: T_{r+1} = C(n,r) a^{n−r} b^r
- Sum of coefficients: put a = b = 1 → 2^n
- Middle term(s): if n even, one middle term T_{(n/2)+1}; if n odd, two middle terms

**Arithmetic Progression:**
- nth term: a_n = a + (n−1)d
- Sum: S_n = n/2[2a + (n−1)d] = n(a + l)/2 where l is last term

**Geometric Progression:**
- nth term: a_n = ar^{n−1}
- Sum of n terms: S_n = a(r^n − 1)/(r − 1), r ≠ 1
- Infinite sum (|r| < 1): S_∞ = a/(1 − r)

**Harmonic Progression:**
- Terms are reciprocals of AP: if a, b, c are in HP, then 1/a, 1/b, 1/c are in AP
- nth term: a_n = 1/[1/a + (n−1)d] where d is from the AP of reciprocals

**Logarithms:**
- log_a(xy) = log_a x + log_a y
- log_a(x/y) = log_a x − log_a y
- log_a(x^n) = n log_a x
- Change of base: log_a x = log_b x / log_b a

- **Key formula:** Sum of roots = −b/a, Product = c/a; (a+b)^n expansion; partial fraction decomposition rules
- **Common trap:** For equation transformation, ensure leading coefficient doesn't become zero — if ak² = 0, the transformed equation becomes linear
- **Exam weight:** 2–3 questions per exam (8–12 marks); very high weight

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Algebra** — Comprehensive BUET Notes

**Condition for common roots:**
Two quadratics a₁x² + b₁x + c₁ = 0 and a₂x² + b₂x + c₂ = 0:
- One common root: (a₁b₂ − a₂b₁)(b₁c₂ − b₂c₁) = (a₁c₂ − a₂c₁)(c₁b₂ − c₂b₁)
- Both common: a₁/a₂ = b₁/b₂ = c₁/c₂

**Maximum and minimum of quadratic:**
For f(x) = ax² + bx + c:
- Vertex at x = −b/2a
- If a > 0: minimum value = −D/4a at x = −b/2a
- If a < 0: maximum value = −D/4a at x = −b/2a

**Location of roots:**
- Both roots in (m, n): D ≥ 0, f(m) > 0, f(n) > 0, −b/2a ∈ (m, n)
- One root in (m, n), one outside: f(m)·f(n) < 0
- Roots on either side of k: f(k) < 0

**Summation of series:**
- Sum of squares: 1² + 2² + ... + n² = n(n+1)(2n+1)/6
- Sum of cubes: 1³ + 2³ + ... + n³ = [n(n+1)/2]²
- Arithmetic-Geometric series: multiply by r and subtract
- Telescoping series: express general term as difference of two terms

**Method of differences:**
If T_n = f(n) − f(n+1), then Σ T_n from 1 to N = f(1) − f(N+1)
Example: T_n = 1/[n(n+1)] = 1/n − 1/(n+1); S_n = 1 − 1/(n+1)

**Exponential and logarithmic equations:**
- a^{f(x)} = a^{g(x)} → f(x) = g(x) if a > 0 and a ≠ 1
- If base differs, take log: f(x)^{g(x)} = h(x)^{g(x)} → if bases are unequal but exponents same...

**Important inequalities:**
- AM ≥ GM: (a + b)/2 ≥ √(ab)
- For any real x: x² + 1 ≥ 2|x|
- Cauchy-Schwarz: (Σ a_i²)(Σ b_i²) ≥ (Σ a_i b_i)²

**De Moivre's theorem:**
(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)
This is used for evaluating expressions like (1 + i)^n

**nth roots of unity:**
For z^n = 1, solutions are z = e^{2πik/n} for k = 0, 1, ..., n−1
Sum of all roots = 0

**Factor theorem:**
If f(a) = 0, then (x − a) is a factor of f(x)
Remainder theorem: remainder when f(x) divided by (x − a) is f(a)

**Symmetric functions of roots:**
For polynomial with roots α, β, γ:
- Elementary symmetric: s₁ = α+β+γ, s₂ = αβ+βγ+γα, s₃ = αβγ
- Express symmetric sums in terms of coefficients

**Partial fraction cases:**
1. Distinct linear factors: A/(x−a) + B/(x−b)
2. Repeated linear: A/(x−a) + B/(x−a)² + C/(x−a)³
3. Irreducible quadratic: (Ax+B)/(x²+bx+c)

**Logarithmic inequalities:**
- If a > 1, log_a x > log_a y ↔ x > y
- If 0 < a < 1, log_a x > log_a y ↔ x < y
- domain of log: argument > 0

- **Remember:** Quadratic: sum = −b/a, product = c/a; binomial: general term C(n,r)a^{n−r}b^r; sum of cubes = [n(n+1)/2]²; partial fractions: identify factor types first
- **Previous years:** "Find range of k for which equation x² − kx + 4 = 0 has real roots" [2023 BUET]; "Sum of infinite GP is 3 and first term is 1, find ratio" [2024 BUET]; "Factorise x³ − 6x² + 11x − 6" [2024 BUET]

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
- Calculus (Differentiation + Integration) — highest weight
- Algebra (Quadratics, AP/GP/HP) — very high weight
- Coordinate Geometry (Circle, Conics) — high weight
- Trigonometry — medium-high weight
- Complex Numbers — medium weight

### 📝 Previous Year Question Patterns
- Algebra: 3–5 questions per exam, 12–20 marks
- Common patterns: quadratic equations, progression problems, binomial expansion, partial fractions
- Weight: very high — prioritise algebra mastery

### 💡 Pro Tips
- BUET mathematics is heavily calculus-based — ensure algebra foundations are solid
- Partial fractions are essential for integration — practice decomposition
- Vieta's formulas for quadratics appear in almost every algebra problem
- For progression problems, identify AP/GP/HP first and use appropriate formulas
- Logarithmic equations: always check domain (argument > 0, base > 0, base ≠ 1)

### 🔗 Official Resources
- [BUET Official](https://www.buet.ac.bd)
- [BUET Admission Portal](https:// admission.buet.ac.bd)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*