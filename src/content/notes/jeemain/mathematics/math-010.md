---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-010
topicName: Limits
weight: 5
country: india
generated: "2026-04-17T22:42:00.000000"
diagramPrompt: "Clean educational diagram showing Limit of function graph with clear labels, white background, color-coded curves, asymptote indication, exam-style illustration"





---
# Limits

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Limits** — Key Facts for JEE Main
Limit: value that f(x) approaches as x approaches a (may or may not equal f(a))
Limit exists: left-hand limit = right-hand limit (LHL = RHL)
Indeterminate forms: 0/0, ∞/∞, 0·∞, ∞−∞, 0⁰, ∞⁰, 1^∞
Standard limits: lim(x→0) sin x/x = 1; lim(x→0) (e^x − 1)/x = 1; lim(x→0) (a^x − 1)/x = ln a
⚡ Exam tip: L'Hôpital's rule is very useful for 0/0 and ∞/∞ forms — differentiate numerator and denominator separately!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Limits** — JEE Main Study Guide

**Standard limit formulas:**
- lim(x→0) sin x/x = 1
- lim(x→0) (tan x)/x = 1
- lim(x→0) (e^x − 1)/x = 1
- lim(x→0) ln(1+x)/x = 1
- lim(x→0) (a^x − 1)/x = ln a
- lim(x→0) (1 + x)^(1/x) = e
- lim(x→∞) (1 + 1/x)^x = e

**Algebraic manipulation:**
- Factorise: if limit is 0/0, try factorising numerator and denominator
- Rationalise: for square root expressions, multiply by conjugate
- Divide by highest power: for ∞/∞ form, divide numerator and denominator by highest power of x

**L'Hôpital's Rule:**
For 0/0 or ∞/∞: lim f(x)/g(x) = lim f'(x)/g'(x) if limit exists
Can apply repeatedly if needed
Only valid when limit is of indeterminate form!

**Exponential limits:**
- lim(x→0) (1 + x)^(1/x) = e
- lim(x→∞) (1 + a/x)^x = e^a
- lim(x→0) (e^x − 1 − x)/x² = 1/2

**Trigonometric limits:**
- lim(x→0) (sin ax)/bx = a/b
- lim(x→0) (1 − cos x)/x² = 1/2
- lim(x→0) (tan x − x)/x³ = 1/3

**Types of indeterminate forms and methods:**
- 0/0: factor, rationalise, or L'Hôpital
- ∞/∞: divide by highest power or use L'Hôpital
- 0·∞: convert to 0/0 or ∞/∞ form (move denominator up or down)
- ∞ − ∞: combine into single fraction

**Sandwich theorem:**
If f(x) ≤ g(x) ≤ h(x) and lim f = lim h = L, then lim g = L
Used for trigonometric limits where direct substitution is difficult

- **Key formula:** lim(x→0) sin x/x = 1; lim(x→0) (e^x − 1)/x = 1; lim(x→0) (1+x)^(1/x) = e
- **Common trap:** sin x/x limit is only valid when x is in radians — degrees give different result!
- **Exam weight:** 1 question per year (4 marks); forms foundation for differentiation

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Limits** — Comprehensive JEE Main Notes

**Evaluating lim(x→0) sin(sin x)/x:**
Use series: sin x ≈ x − x³/6 + ...; sin(sin x) ≈ sin(x − x³/6) ≈ (x − x³/6) − (x − x³/6)³/6 ≈ x − x³/2 + ...
So sin(sin x)/x ≈ 1 − x²/2 → limit = 1

**General exponential limit:**
lim(x→a) (f(x))^{g(x)} = e^{lim(x→a) g(x)·ln(f(x))}
For 1^∞ type: lim(1 + u)^{1/u} = e when u → 0

**Nth root trick:**
lim(n→∞) n[(1 + x/n)^n − 1] = nx (use expansion)
For n → ∞, (1 + x/n)^n → e^x

**Using series expansions:**
e^x = 1 + x + x²/2! + x³/3! + ...
ln(1+x) = x − x²/2 + x³/3 − ...
sin x = x − x³/3! + x⁵/5! − ...
cos x = 1 − x²/2! + x⁴/4! − ...
tan x = x + x³/3 + 2x⁵/15 + ...

**Evaluating forms like ∞^0 and 0^0:**
Take natural log: let L = lim f^g = e^{lim g ln f}
Then evaluate lim g ln f — often becomes easier form
Example: lim(x→0+) x^x = e^{lim x ln x} = e^{lim ln x/(1/x)} = e^{lim (−x²/x)} = e^0 = 1

**Stolz-Cesàro theorem (for sequences):**
If b_n is strictly monotonic and unbounded, then:
lim a_n/b_n = lim (a_{n+1} − a_n)/(b_{n+1} − b_n) if the right limit exists

**Using continuity:**
If f is continuous at a, then lim(x→a) f(x) = f(a)
Example: lim(x→0) e^{sin x} = e^{lim(x→0) sin x} = e⁰ = 1

**Parametric limits:**
lim(x→0) (e^{ax} − 1)/sin(bx) = a/b (using standard forms)
lim(x→0) (ln(1 + ax))/x = a

**Important limits to remember:**
- lim(x→0) (sin x − x)/x³ = −1/6
- lim(x→0) (cos x − 1 + x²/2)/x⁴ = 1/24
- lim(x→0) (tan x − sin x)/x³ = 1/2
- lim(x→0) (e^x − 1 − x − x²/2)/x³ = 1/6

**Limit of (1 + ax)^b/x:**
lim(x→0) [(1 + ax)^b − 1]/x = ab

**Understanding one-sided limits:**
LHL = lim(x→a⁻) f(x); RHL = lim(x→a⁺) f(x)
For limit to exist: both must exist and be equal
Example: |x|/x as x → 0: LHL = −1, RHL = +1 → limit does not exist

**Infinite limits:**
lim(x→∞) x^n/e^x = 0 for any n (exponential beats polynomial)
lim(x→∞) ln x/x = 0 (logarithm grows slower than polynomial)
lim(x→0+) x ln x = 0 (x ln x → 0 as x → 0+)

**Evaluating using substitution:**
For lim(x→∞) tan(π/x)/sin(2/x): set u = 1/x → as x → ∞, u → 0
= tan(πu)/sin(2u) → (πu)/(2u) = π/2

- **Remember:** sin x/x → 1 as x → 0 (radians!); (e^x − 1)/x → 1; (1 + 1/x)^x → e; convert 1^∞ to e^{lim g·(f−1)}; use L'Hôpital for 0/0 and ∞/∞ only after confirming the form
- **Previous years:** "lim(x→0) (e^x − cos x)/sin x" [2023]; "lim(n→∞) [(n+1)(n+2)]^½ − n" [2024]; "lim(x→0) (sin x − x cos x)/(x³)" [2024]

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
- Limits: 1 question per year, 4 marks
- Common patterns: evaluate limit of trigonometric expression, exponential limits, using L'Hôpital's rule, sandwich theorem
- Weight: medium frequency, foundational for calculus

### 💡 Pro Tips
- Always check if the form is indeterminate before applying any technique
- L'Hôpital's rule can be applied repeatedly if needed
- For sin x/x type, make sure x is in radians (JEE always uses radians for such limits)
- When you see 1^∞, rewrite as e^{lim (f−1)g} and then evaluate
- For rational functions at infinity, divide by highest power of x in denominator
- When factorising doesn't work, try rationalising (multiply by conjugate)
- Series expansions are very powerful for limits — remember the first 3–4 terms of e^x, sin x, cos x, ln(1+x), (1+x)^n

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*