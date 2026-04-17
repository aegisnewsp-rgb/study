---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-013
topicName: Integration
weight: 5
country: india
generated: "2026-04-17T22:52:00.000000"
diagramPrompt: "Clean educational diagram showing Integration as area under curve with clear labels, white background, color-coded region, exam-style illustration"





---
# Integration

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Integration** — Key Facts for JEE Main
Integral: reverse of differentiation; ∫ f(x) dx = F(x) + C where F'(x) = f(x)
Indefinite integral: ∫ f(x) dx = F(x) + C (family of curves)
Definite integral: ∫_a^b f(x) dx = F(b) − F(a) (area under curve from a to b)
Standard integrals: ∫ x^n dx = x^{n+1}/(n+1) + C (n ≠ −1); ∫ 1/x dx = ln|x| + C; ∫ e^x dx = e^x + C
⚡ Exam tip: For definite integrals, always check if the integrand is symmetric — odd functions integrate to 0 over symmetric limits!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Integration** — JEE Main Study Guide

**Basic integration formulas:**
- ∫ x^n dx = x^{n+1}/(n+1) + C (n ≠ −1)
- ∫ 1/x dx = ln|x| + C
- ∫ e^x dx = e^x + C
- ∫ a^x dx = a^x/ln a + C
- ∫ sin x dx = −cos x + C
- ∫ cos x dx = sin x + C
- ∫ sec²x dx = tan x + C
- ∫ cosec²x dx = −cot x + C

**Integration methods:**

**Substitution:**
Let u = g(x), then du = g'(x)dx
Transform integral ∫ f(g(x))·g'(x) dx into ∫ f(u) du
For definite integrals: change limits to u-values

**Parts formula:**
∫ u dv = uv − ∫ v du
Choose u using LIATE: Log, Inverse trig, Algebraic, Trigonometric, Exponential
For integrals like x·e^x, x·sin x, x·ln x → use parts

**Partial fractions:**
For rational functions, decompose into partial fractions
Linear factors: A/(x−a), Bx+C/(x²+bx+c)
After decomposition, integrate each term separately

**Standard substitutions:**
- For √(a² − x²): x = a sin θ or a cos θ
- For √(a² + x²): x = a tan θ
- For √(x² − a²): x = a sec θ

**Properties of definite integrals:**
- ∫_a^b f(x) dx = −∫_b^a f(x) dx
- ∫_a^b f(x) dx + ∫_b^c f(x) dx = ∫_a^c f(x) dx
- Even function: ∫_{−a}^a f(x) dx = 2∫_0^a f(x) dx
- Odd function: ∫_{−a}^a f(x) dx = 0

**Leibniz rule:**
d/dx [∫_{a}^{b} f(x,t) dt] = f(x,b)·db/dx − f(x,a)·da/dx + ∫_a^b ∂f/∂x dt

- **Key formula:** ∫ x^n dx = x^{n+1}/(n+1) + C; ∫ 1/x dx = ln|x| + C; ∫ e^x dx = e^x + C
- **Common trap:** For definite integrals with symmetric limits on odd/even functions, use the properties — don't compute the full integral
- **Exam weight:** 2–3 questions per year (8–12 marks); high-scoring if techniques are mastered

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Integration** — Comprehensive JEE Main Notes

**Integration of trigonometric functions:**
- ∫ sin^n x dx: use power reduction formulas
- ∫ cos^n x dx: same approach
- ∫ sin x cos x dx = (1/2)∫ sin 2x dx = −(1/4) cos 2x + C
- ∫ tan x dx = −ln|cos x| + C = ln|sec x| + C

**Using half-angle identities:**
sin²x = (1−cos 2x)/2; cos²x = (1+cos 2x)/2
∫ sin²x dx = x/2 − sin 2x/4 + C

**Reduction formulas:**
For ∫ sin^n x dx, use: I_n = −(sin^{n−1}x cos x)/n + (n−1)/n · I_{n−2}
Similarly for cos^n x and other powers

**Integration of inverse trigonometric:**
- ∫ sin⁻¹x dx = x sin⁻¹x + √(1−x²) + C
- ∫ cos⁻¹x dx = x cos⁻¹x − √(1−x²) + C
- ∫ tan⁻¹x dx = x tan⁻¹x − (1/2) ln(1+x²) + C

**Integration of exponential times polynomial:**
∫ x^n e^x dx: use parts repeatedly, taking polynomial as u each time
I_n = x^n e^x − n I_{n−1}

**Walli's formula for definite integrals:**
∫_0^{π/2} sin^m x cos^n x dx = (Γ((m+1)/2)·Γ((n+1)/2)) / (2·Γ((m+n+2)/2))

**Beta and Gamma functions:**
B(m, n) = 2∫_0^{π/2} sin^{2m−1}x cos^{2n−1}x dx = Γ(m)Γ(n)/Γ(m+n)
Γ(n+1) = n! for integer n

**Area under curve:**
Area between y = f(x) and x-axis from x=a to x=b = ∫_a^b |f(x)| dx
Area between two curves: ∫_a^b |f(x) − g(x)| dx
For parametric (x(t), y(t)): area = ∫ y(t) · x'(t) dt

**Volume of revolution:**
About x-axis: V = π∫ y² dx; About y-axis: V = π∫ x² dy
Using cylindrical shells: V = 2π∫ x·f(x) dx (about x-axis, using vertical strips)

**Using properties for even/odd definite integrals:**
- f(−x) = f(x): even → ∫_{−a}^a f(x) dx = 2∫_0^a f(x) dx
- f(−x) = −f(x): odd → ∫_{−a}^a f(x) dx = 0

**Integral with periodicity:**
If f(x+T) = f(x), then ∫_a^{a+T} f(x) dx is same for any starting point a

**Special tricks:**
∫_0^∞ x^n e^{−x} dx = n!
∫_0^{π/2} ln(sin x) dx = −(π/2) ln 2

**Differential equation via integration:**
dy/dx = f(x) → dy = f(x)dx → ∫ dy = ∫ f(x)dx → y = ∫ f(x)dx + C

**Average value of function:**
Average = (1/(b−a)) ∫_a^b f(x) dx

- **Remember:** ∫ f'(x) dx = f(x) + C (reverse of differentiation); for even functions over symmetric limits, double from 0 to a; for odd functions over symmetric limits, result is 0; use parts when integrand is product of polynomial and exponential/trig function
- **Previous years:** "Evaluate ∫_0^1 x e^x dx using integration by parts" [2023]; "Find area bounded by y = x² and y = x" [2024]; "Evaluate ∫ sin⁻¹x dx" [2024]

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
- Integration: 2–3 questions per year, 8–12 marks
- Common patterns: evaluate definite integrals, find area under curve, integration by parts, trigonometric integrals
- Weight: very high frequency, requires extensive practice

### 💡 Pro Tips
- For integration by parts: choose u using LIATE (Log, Inverse, Algebraic, Trigonometric, Exponential)
- When integrating rational functions, always use partial fractions if degree of numerator < degree of denominator
- For symmetric definite integrals, check if f(x) is even or odd before computing
- Standard substitutions are crucial: √(a²−x²) → x = a sin θ; √(a²+x²) → x = a tan θ; √(x²−a²) → x = a sec θ
- For definite integrals with infinity limits, split into proper limits and evaluate
- In area problems, sketch the curves first to identify which curve is on top in the interval

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*