---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-020
topicName: Integration
weight: 3
country: india
generated: "2026-03-29T05:06:21"
lastUpdated: "2026-06-19"
---

# Integration

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Integration** is the reverse of differentiation. If d/dx[F(x)] = f(x), then **F(x)** is an **antiderivative** of **f(x)** and we write ∫f(x)dx = F(x) + C, where **C** is the **constant of integration**. The **definite integral** ∫ₐᵇ f(x)dx = F(b) − F(a) by the **Fundamental Theorem of Calculus (FTC)**. Must-know primitives:

- ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ −1)
- ∫(1/x) dx = log|x| + C
- ∫eˣ dx = eˣ + C
- ∫sin x dx = −cos x + C ; ∫cos x dx = sin x + C
- ∫sec²x dx = tan x + C ; ∫cosec²x dx = −cot x + C

CUET MCQ traps: omitting **+C**, treating 1/x like xⁿ (giving log|x|, not 0), and sign slip on ∫sin x. Always remember: integrand dx = antiderivative evaluated, limits substituted.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Concept and Notation
The **indefinite integral** ∫f(x)dx returns a family of functions differing by a constant — geometrically, a vertical family of antiderivative curves. The **integrand** is f(x), the **variable of integration** is x, and dx indicates the variable being summed in infinitesimal pieces. A **definite integral** ∫ₐᵇ f(x)dx is a *number*: the signed area between the curve and the x-axis from x = a to x = b. Limits may be swapped: ∫ₐᵇ = −∫ᵦᵃ, and the interval may be split: ∫ₐᵇ = ∫ₐᶜ + ∫ᶜᵇ.

#### Fundamental Theorem of Calculus (FTC)
If F is any antiderivative of f on [a, b], then ∫ₐᵇ f(x)dx = F(b) − F(a). The FTC also yields ∫ₐˣ f(t)dt = f(x), linking differentiation and integration as inverse operations. CUET frequently tests FTC as a one-step evaluation after recognising the antiderivative.

#### Methods of Evaluation

| Method | When to use | Key step |
|---|---|---|
| **Substitution** (u = g(x)) | Composite function f(g(x))·g′(x) | du = g′(x)dx; change limits if definite |
| **Integration by parts** | Product of unlike types (x·sin x, log x, eˣ·x) | ∫u dv = uv − ∫v du; use **ILATE** for u-priority |
| **Partial fractions** | Rational P(x)/Q(x), deg P < deg Q | Factor Q, split into A/(x−a) + B/(x−b) + … |
| **Trig identities** | ∫sin²x, ∫cos²x, ∫sec x·tan x | Half-angle, double-angle conversions |

#### Standard Forms (must memorise)
Inverse trig: ∫dx/√(a²−x²) = sin⁻¹(x/a) + C ; ∫dx/(a²+x²) = (1/a)tan⁻¹(x/a) + C ; ∫dx/(x√(x²−a²)) = (1/a)sec⁻¹|x/a| + C. Also ∫aˣ dx = aˣ/log a + C and ∫dx/(1+x²) = tan⁻¹x + C.

#### Exam Patterns in CUET
Expect one-mark MCQs evaluating ∫₀^{π/2} sin x dx, computing area using ∫ₐᵇ y dx, or applying substitution like ∫ 2x/(1+x²) dx. Assertion-reason items often distinguish between indefinite (+C) and definite (no C) outcomes.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Substitution — the Workhorse
The substitution rule states ∫ f(g(x))·g′(x) dx = ∫ f(u) du with u = g(x). For definite integrals, change the limits too: when x = a, u = g(a); when x = b, u = g(b). A classic trap is differentiating inside the integral (treating dy/dx as a cancelable fraction). It is **not** a fraction — substitution is a change of variable, not algebraic division. Example: ∫ 2x cos(x²) dx. Let u = x², du = 2x dx ⇒ ∫ cos u du = sin u + C = sin(x²) + C.

#### Integration by Parts — ILATE in Action
**ILATE** orders u: **I**nverse trig → **L**og → **A**lgebraic → **T**rig → **E**xponential. For ∫ x eˣ dx, take u = x, dv = eˣ dx ⇒ du = dx, v = eˣ, so the integral = x eˣ − ∫ eˣ dx = eˣ(x − 1) + C. CUET sometimes offers a "definite by parts" item like ∫₀¹ x² log(1+x) dx — set u = log(1+x), dv = x² dx.

#### Definite Integral Properties and Area
For a continuous f on [a, b]:
- ∫ₐᵃ f(x) dx = 0
- ∫ₐᵇ f(x) dx = −∫ᵦᵃ f(x) dx
- ∫ₐᵇ [f(x) ± g(x)] dx = ∫ₐᵇ f dx ± ∫ₐᵇ g dx
- ∫₀^{2a} f(x) dx = ∫₀ᵃ [f(x) + f(2a − x)] dx (King's / symmetry property)
- Area bounded by y = f(x) ≥ 0 and the x-axis from a to b equals ∫ₐᵇ f(x) dx

#### Improper Integrals and Special Forms
When one limit is ∞, write ∫ₐ^∞ f(x) dx = lim_{t→∞} ∫ₐᵗ f(x) dx if the limit exists. ∫₀^∞ e⁻ˣ dx = 1 (used in probability). Beta-function style integrals ∫₀^π/2 sinⁿx dx and ∫₀^π/2 cosⁿx dx follow Wallis' reduction and are occasionally tested in CUET domain knowledge items.

#### Common Mistakes
1. Writing ∫(1/x) dx = x⁰/0 — undefined; correct form is log|x| + C.
2. Dropping **+C** in an indefinite answer.
3. Sign error: ∫sin x dx = −cos x + C (not +cos x).
4. For ∂u substitution in definite integrals: forgetting to convert limits.
5. Applying parts twice and getting tangled signs — keep du and v aligned.

#### Worked Example
Evaluate ∫₀² x √(x+1) dx. Let t = x+1 ⇒ x = t−1, dx = dt; limits 1 → 3. Integral becomes ∫₁³ (t−1)√t dt = ∫₁³ (t^{3/2} − t^{1/2}) dt = [⅖ t^{5/2} − ⅔ t^{3/2}]₁³ = (⅖·9√3 − ⅔·3√3) − (⅖ − ⅔) = (18√3/5 − 2√3) + (1/6) = (18√3 − 10√3)/5 + 1/6 = 8√3/5 + 1/6.

#### Practice Prompts
1. Compute ∫ (3x² + 2)/(x³ + 2x + 5) dx using u-substitution.
2. Evaluate ∫₀^{π/4} (sec²x · log(tan x)) dx using integration by parts.

#### Connection to Other CUET Topics
Integration links directly to **Differential Equations** (separable equations solve by ∫dx/x = ∫dy/y), **Application of Integrals** (area between curves, volume by disk method), and **Probability** (continuous distributions integrate density to 1). Mastery here boosts three separate CUET chapters.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
