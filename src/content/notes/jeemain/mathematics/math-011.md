---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-011
topicName: Differentiation
weight: 5
country: india
generated: "2026-04-17T22:50:00.000000"
lastUpdated: "2026-09-17"
diagramPrompt: "Clean educational diagram showing Differentiation derivative as slope of tangent with clear labels, white background, color-coded curves, exam-style illustration"





---

# Differentiation

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

The derivative of a real function y = f(x) at x is defined by the first-principles limit

$$f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h},$$

where x and h carry the units of the input, and f'(x) carries the units of the output divided by the input's units. Geometrically, f'(a) equals the slope of the tangent to the curve at x = a; physically, it gives the instantaneous rate of change.

| Rule | Formula | Condition |
|---|---|---|
| Power rule | d/dx (x^n) = n·x^(n−1) | n real, x in m → derivative in m^(n−1) per m |
| Sum/difference | (u ± v)' = u' ± v' | Always valid |
| Product rule | (uv)' = u'v + uv' | u, v differentiable |
| Quotient rule | (u/v)' = (u'v − uv')/v² | v(x) ≠ 0 |
| Chain rule | d/dx f(g(x)) = f'(g(x))·g'(x) | g differentiable inside f's domain |

> 💡 **High-Yield Memory Hook:** **P**ower, **P**roduct, **P**arentheses — "PPP" — always check the outermost parentheses first because the chain rule rides on the outside function. For u/v remember the mnemonic **"Low dHigh minus High dLow, over Low²"** = (u'v − uv')/v².

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definition and Geometric Meaning

The derivative is the limiting value of the average rate of change as the interval shrinks to zero. If the distance s (in metres) of a particle from origin at time t (in seconds) is s = f(t), then f'(t) has units of m/s and equals the instantaneous velocity. The slope of the secant joining (x, f(x)) and (x+h, f(x+h)) approaches the slope of the tangent as h → 0.

#### Standard Derivatives to Memorise

| Function f(x) | Derivative f'(x) | Domain note |
|---|---|---|
| sin x, cos x, tan x | cos x, −sin x, sec²x | All real x for sin/cos; cos x ≠ 0 for tan |
| e^x, a^x | e^x, a^x ln a | a > 0, a ≠ 1 |
| ln x, log_a x | 1/x, 1/(x ln a) | x > 0 only; absolute value needed for x < 0 |
| arcsin x, arctan x | 1/√(1−x²), 1/(1+x²) | \|x\| ≤ 1 for arcsin |

#### Product vs Quotient vs Chain — Easily Confused

| Situation | Correct rule | Typical sign of error |
|---|---|---|
| (uv)' | u'v + uv' | Adding extra u'v' terms |
| (u/v)' | (u'v − uv')/v² | Writing "+" instead of "−" |
| sin(x²) | cos(x²)·2x | Differentiating only sin and forgetting 2x |
| x^x (x > 0) | x^x(1 + ln x) | Treating it as x^n with constant n |
| ln\|x\| | 1/x (for all x ≠ 0) | Writing 1/x only for x > 0 |

> 📌 **Formula Check:** In the chain rule d/dx f(g(x)) = f'(g(x))·g'(x), the inner derivative g'(x) carries the unit of x; f'(g(x)) carries the unit of y per unit of g, so their product correctly carries the unit of y per unit of x.

#### Higher-Order Derivatives and Physics Linkage

The second derivative f''(x) is the derivative of f'(x). If s(t) is displacement, v(t) = s'(t) is velocity (m/s) and a(t) = v'(t) = s''(t) is acceleration (m/s²). JEE physics questions on rectilinear motion often use this linkage to test calculus skill on a kinematics problem.

#### Application of Derivatives — Critical Point Test

A critical point of y = f(x) occurs where f'(x) = 0 or f'(x) is undefined. To classify:
1. Use the first-derivative test: f' changes sign from + to − → local maximum; − to + → local minimum.
2. Use the second-derivative test: f''(c) > 0 → local minimum; f''(c) < 0 → local maximum; f''(c) = 0 → inconclusive (revert to first-derivative test).

#### 🎯 Exam-Level Worked Problem

**Question:** If y = ln(sin x²), find dy/dx at x = √(π/4). Also determine whether y is increasing or decreasing in the interval (0, √π).

#### Solution:
Rewrite y = ln(sin(x²)). Apply chain rule twice:

- dy/dx = (1/sin(x²)) · cos(x²) · 2x = 2x·cot(x²).

At x = √(π/4): x² = π/4, so 2x = √π, cot(π/4) = 1. Hence dy/dx = √π (positive).

For 0 < x < √π: x² ∈ (0, π). On (0, π), sin(x²) > 0 and cos(x²) changes sign at x = √(π/2). Thus cot(x²) is positive on (0, √(π/2)) and negative on (√(π/2), √π). Combined with the positive factor 2x, dy/dx is positive on (0, √(π/2)) and negative on (√(π/2), √π). Therefore y increases on (0, √(π/2)) and decreases on (√(π/2), √π).

> ⚠️ **Examiner Trap:** A common blunder is to write dy/dx = cot(x²) and forget the inner derivative 2x. Another frequent slip is treating ln(sin x²) as ln(sin x)·ln x²; remember ln takes only one argument. Also, do not restrict to x > 0 only because ln appears — sin(x²) is positive in (0, √π), so the absolute value is unnecessary here, but on intervals where sin becomes negative you must switch to ln\|sin x²\|.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Implicit and Logarithmic Differentiation

When y cannot be expressed explicitly as y(x), differentiate both sides with respect to x, treating y as y(x) and applying the chain rule to every term containing y. Example: x² + y² = 25 → 2x + 2y·(dy/dx) = 0 → dy/dx = −x/y. This connects directly to the slope of a tangent on a circle, a recurring JEE coordinate-geometry question.

Logarithmic differentiation handles products, quotients, and variable-in-variable expressions like x^(sin x). Take ln of both sides, differentiate using chain rule, then solve for dy/dx. For y = x^(sin x):

$$\ln y = \sin x \cdot \ln x \;\Rightarrow\; \frac{y'}{y} = \cos x \ln x + \frac{\sin x}{x} \;\Rightarrow\; y' = x^{\sin x}\!\left(\cos x \ln x + \frac{\sin x}{x}\right).$$

#### Rolle's Theorem and the Mean Value Theorem

Both require f to be continuous on [a, b] and differentiable on (a, b). Rolle's theorem (a special case) gives f'(c) = 0 for some c ∈ (a, b) when f(a) = f(b). The MVT guarantees f'(c) = [f(b) − f(a)]/(b − a) for some c ∈ (a, b). JEE occasionally tests these by asking for the value of c, or to prove an inequality via the MVT.

#### L'Hôpital's Rule — When and How

Apply L'Hôpital only to 0/0 or ∞/∞ forms. For other indeterminates like 0·∞, ∞−∞, 1^∞, 0^0, ∞^0, first do algebraic conversion:
- 0·∞ → rewrite as 0/(1/∞) or ∞/(1/0) to reach 0/0 or ∞/∞.
- 1^∞ → take ln: limit of ln y = limit of f·ln g, often yielding 0·∞ which then converts.
- Verify the limit of the ratio of derivatives exists before concluding.

| Indeterminate form | Conversion step |
|---|---|
| 0·∞ | Pull one factor into denominator |
| ∞ − ∞ | Combine over common denominator or rationalise |
| 1^∞, 0^0, ∞^0 | Take ln to get 0·∞ form |

#### Advanced Practice Prompts

1. **Rolle's application.** Show that the equation x³ + 3x + 1 = 0 has exactly one real root using Rolle's theorem on a suitable interval. (Hint: confirm f(x) is monotonic by examining f'(x) = 3x² + 3 > 0.)
2. **Higher-order derivative.** Compute d³y/dx³ for y = ln(x + √(1+x²)). Verify that y''(x) satisfies (y')² + x·y'·y'' = a known relation; identify the curve.

> 💡 **High-Yield Memory Hook:** **"DOLI"** for indeterminate forms — **D**ivide out, **O**bject to ∞−∞, **L**og the power forms, **I**solate the 0·∞ — always convert before applying L'Hôpital.

## Continue your study

- **[View this topic in your JEE Main roadmap](/roadmap/?exam=jeemain&duration=1mo)** — see where "Differentiation" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeemain&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Main exam overview](/exams/jeemain/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeemain/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
