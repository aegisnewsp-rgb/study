---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-014
topicName: Definite Integration
weight: 5
country: india
generated: "2026-04-17T22:53:00.000000"
diagramPrompt: "Clean educational diagram showing Definite Integral as area with clear labels, white background, color-coded region, evaluation process, exam-style illustration"





---
# Definite Integration

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Definite Integration** — Key Facts for JEE Main
Definite integral: ∫_a^b f(x) dx = F(b) − F(a) where F is antiderivative of f
Fundamental theorem of calculus: d/dx [∫_a^x f(t) dt] = f(x)
Properties: ∫_a^b f(x) dx = −∫_b^a f(x) dx; ∫_a^b f(x) dx = ∫_a^c f(x) dx + ∫_c^b f(x) dx
Even function: ∫_{−a}^a f(x) dx = 2∫_0^a f(x) dx; Odd function: ∫_{−a}^a f(x) dx = 0
⚡ Exam tip: For periodic functions or symmetric limits, use properties to simplify before evaluating!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Definite Integration** — JEE Main Study Guide

**Fundamental Theorem of Calculus:**
If F'(x) = f(x), then ∫_a^b f(x) dx = F(b) − F(a)
Also: d/dx [∫_a^x f(t) dt] = f(x); this is the first FTC

**Evaluation tricks:**
- Change variable and limits simultaneously in substitution
- For definite integral of rational function with denominator that factors: use partial fractions

**Symmetry properties:**
- f even (f(−x) = f(x)): ∫_{−a}^a f(x) dx = 2∫_0^a f(x) dx
- f odd (f(−x) = −f(x)): ∫_{−a}^a f(x) dx = 0

**Periodic function:**
If f(x + T) = f(x), then ∫_a^{a+T} f(x) dx is independent of a

**King's property:**
∫_a^b f(x) dx = ∫_a^b f(a + b − x) dx
Useful for integrals where f has symmetry about midpoint (a+b)/2

**Integral as limit of sum:**
∫_a^b f(x) dx = lim(n→∞) Σ f(a + k·h)·h where h = (b−a)/n, k = 0 to n−1

**Gamma and Beta:**
Γ(n) = (n−1)! for positive integer n; Γ(1/2) = √π
B(m, n) = 2∫_0^{π/2} sin^{2m−1}x cos^{2n−1}x dx = Γ(m)Γ(n)/Γ(m+n)

**Walli's integrals:**
∫_0^{π/2} sin^m x dx = (m−1)!!/(m)!! × π/2 if m is even; = (m−1)!!/(m)!! if m is odd
∫_0^{π/2} sin^m x cos^n x dx = use Beta function

**Walls formula:**
∫_0^{π/2} sin^m x dx = ∫_0^{π/2} cos^m x dx

- **Key formula:** ∫_a^b f(x) dx = F(b) − F(a); ∫_{−a}^a f(x) dx = 2∫_0^a f(x) dx for even, 0 for odd
- **Common trap:** Don't forget to adjust limits when doing substitution in definite integrals
- **Exam weight:** 1–2 questions per year (4–8 marks); highly scoring with proper technique

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Definite Integration** — Comprehensive JEE Main Notes

**Leibniz rule for differentiation under integral:**
d/dx [∫_{φ(x)}^{ψ(x)} f(t) dt] = f(ψ(x))·ψ'(x) − f(φ(x))·φ'(x)
Extension: d/dx [∫_{a}^{b} f(x,t) dt] = ∫_{a}^{b} ∂f/∂x (x,t) dt

**Evaluation using series:**
∫_0^1 x^n dx = 1/(n+1); ∫_0^1 x^{p−1}(1−x)^{q−1} dx = B(p,q) = Γ(p)Γ(q)/Γ(p+q)

**Integral of greatest integer function:**
∫_0^n [x] dx = Σ_{k=0}^{n−1} k = n(n−1)/2

**Trapezoidal rule approximation:**
∫_a^b f(x) dx ≈ (h/2)[f(x_0) + 2f(x_1) + 2f(x_2) + ... + 2f(x_{n−1}) + f(x_n)]
Where h = (b−a)/n and x_i = a + ih

**Simpson's rule (1/3 rule):**
∫_a^b f(x) dx ≈ (h/3)[f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + ... + 4f(x_{n−1}) + f(x_n)]
For even number of intervals n

**Area between curves:**
Area = ∫_a^b |f(x) − g(x)| dx
For parametric (x(t), y(t)): area = ∫ y(t)·x'(t) dt

**Area with polar coordinates:**
Area = (1/2)∫ r² dθ between appropriate θ values

**Volume by slicing:**
V = ∫ A(x) dx where A(x) is cross-sectional area perpendicular to x-axis

**Reduction formulas for definite integrals:**
I_n = ∫_0^{π/2} sin^n x dx = (n−1)/n · I_{n−2}
I_n = (n−1)/n · (n−3)/(n−2) · ... · π/2 (for even n) or 1 (for odd n)

**Special definite integrals:**
- ∫_0^∞ e^{−ax} dx = 1/a
- ∫_0^∞ x e^{−ax} dx = 1/a²
- ∫_0^∞ x² e^{−ax} dx = 2/a³
- ∫_0^∞ sin x/x dx = π/2
- ∫_0^∞ cos x/x dx = divergent

**Convergence of improper integrals:**
∫_a^∞ f(x) dx converges if lim_{b→∞} ∫_a^b f(x) dx exists
For ∫_a^∞ e^{−kx} dx: converges if k > 0, diverges if k ≤ 0

**Dirichlet's test:**
If f is bounded and monotonically decreasing to 0, and g has bounded integral, then ∫_a^∞ f(x)g(x) dx converges

**Using king's property:**
I = ∫_a^b f(x) dx
I = ∫_a^b f(a+b−x) dx (by substitution u = a+b−x)
Adding: 2I = ∫_a^b [f(x) + f(a+b−x)] dx
This is useful when f(x) + f(a+b−x) simplifies

**Application: proving integrals:**
Often asked to prove value of definite integral using symmetry
Example: I = ∫_0^{π/2} ln(sin x) dx = −(π/2) ln 2

- **Remember:** ∫_a^b f(x) dx = F(b) − F(a); if f(−x) = f(x) → even, double from 0; if f(−x) = −f(x) → odd, zero; king's property: ∫_a^b f(x) dx = ∫_a^b f(a+b−x) dx
- **Previous years:** "Evaluate ∫_0^π x sin x/(1 + cos²x) dx" [2023]; "Show that ∫_0^a f(x) dx + ∫_0^a f(a−x) dx = a∫_0^a f(x) dx" [2024]; "Evaluate ∫_0^{π/2} sin²x dx" [2024]

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
- Definite Integration: 1–2 questions per year, 4–8 marks
- Common patterns: evaluate using symmetry, using king's property, area under curve, Wallis formula
- Weight: medium-high frequency, high scoring

### 💡 Pro Tips
- Always check for symmetry before doing full calculation — it can save significant time
- For integrals with periodic functions, use the periodicity property
- King's property (a+b−x) is very powerful for integrals that aren't symmetric but have midpoint symmetry
- When evaluating improper integrals, check convergence first
- The limit-of-sum definition of definite integral can be used to evaluate tricky sums
- For Wallis-type integrals, know the reduction formulas

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*