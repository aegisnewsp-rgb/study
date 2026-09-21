---
exam: hsc-mathematics-advanced
examName: HSC Mathematics Advanced (NESA 2024)
subject: hsc-mathematics-advanced
subjectName: Mathematics Advanced
topic: hscmathadv-004
topicName: Calculus
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-20
---

# Calculus — HSC Mathematics Advanced (NESA 2024) Notes

Calculus is the largest single content strand by HSC Mathematics Advanced mark share. The 2024 syllabus introduces differentiation in Year 11 (Introduction to Differentiation) and extends in Year 12 (Differential Calculus, Integral Calculus, Applications of Calculus). Calculus appears in every HSC paper and is essential for any further study of Mathematics Extension 1 or tertiary mathematics.

> Re-check the live specification details and any in-year assessment changes on https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Differentiation.** f'(x) = limit as h → 0 of (f(x + h) − f(x))/h. The derivative measures the instantaneous rate of change.
- **Power rule.** d/dx (xⁿ) = n xⁿ⁻¹ for any real n.
- **Sum and constant rules.** d/dx (f(x) + g(x)) = f'(x) + g'(x). d/dx (c f(x)) = c f'(x).
- **Product rule.** d/dx (u v) = u' v + u v'. Essential when both factors depend on x.
- **Quotient rule.** d/dx (u/v) = (u' v − u v')/v². Use when one function is divided by another.
- **Chain rule.** d/dx f(g(x)) = f'(g(x)) g'(x). For composite functions.
- **Derivatives of standard functions.** d/dx (eˣ) = eˣ. d/dx (ln x) = 1/x. d/dx (sin x) = cos x. d/dx (cos x) = −sin x.
- **Integration.** The reverse of differentiation. ∫ f'(x) dx = f(x) + C.
- **Definite integral.** ∫ from a to b of f'(x) dx = f(b) − f(a) (Fundamental Theorem of Calculus).

#### Examiner traps

- Forgetting the constant of integration in indefinite integrals — every indefinite integral must include + C.
- Mixing up d/dx and dy/dx notation — d/dx and dy/dx mean the same in single-variable calculus.
- Forgetting that the chain rule produces a factor of g'(x) — common mistake is to forget the inner derivative.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Differentiation rules

Power rule: d/dx (xⁿ) = n xⁿ⁻¹.

Constant: d/dx (c) = 0.

Sum: d/dx (f + g) = f' + g'.

Constant multiple: d/dx (c f) = c f'.

Product rule: d/dx (u v) = u' v + u v'.

Quotient rule: d/dx (u/v) = (u' v − u v')/v².

Chain rule: d/dx f(g(x)) = f'(g(x)) g'(x).

Examples:
- d/dx (x³ sin x) = 3x² sin x + x³ cos x (product rule).
- d/dx (sin(x²)) = cos(x²) · 2x = 2x cos(x²) (chain rule).
- d/dx (e^(3x)) = e^(3x) · 3 = 3e^(3x) (chain rule).

#### Derivatives of standard functions

d/dx (sin x) = cos x.
d/dx (cos x) = −sin x.
d/dx (tan x) = sec² x.
d/dx (eˣ) = eˣ.
d/dx (e^(kx)) = k e^(kx) (chain rule).
d/dx (ln x) = 1/x.
d/dx (ln f(x)) = f'(x)/f(x).

#### Applications of differentiation

Rates of change: if y depends on t through y = f(t), then dy/dt is the rate of change of y with respect to t.

Curve sketching: f'(x) = 0 at stationary points. f'(x) > 0 means increasing, f'(x) < 0 means decreasing. f''(x) > 0 means concave up, f''(x) < 0 means concave down.

Optimisation: find the value of x that maximises or minimises a function. Set f'(x) = 0, solve for x, then verify (second derivative test or first derivative test) whether it is a maximum or minimum.

#### Integration

Power rule for integration: ∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C (for n ≠ −1).

Constant multiple: ∫ k f(x) dx = k ∫ f(x) dx.

Sum: ∫ (f + g) dx = ∫ f dx + ∫ g dx.

Standard integrals: ∫ eˣ dx = eˣ + C. ∫ 1/x dx = ln|x| + C. ∫ sin x dx = −cos x + C. ∫ cos x dx = sin x + C.

#### Definite integrals

The definite integral ∫ from a to b of f(x) dx equals the signed area between the graph of f and the x-axis from x = a to x = b.

Fundamental Theorem of Calculus: if F(x) is an antiderivative of f(x), then ∫ from a to b of f(x) dx = F(b) − F(a).

Areas between curves: area between y = f(x) and y = g(x) from x = a to x = b is ∫ from a to b of |f(x) − g(x)| dx.

#### Year 12 extensions

Year 12 extends differentiation to second derivatives, related rates of change, optimisation with constraints, and applications to motion (velocity, acceleration). Integration is extended to include the definite integral as area, and the fundamental theorem of calculus is used to solve simple differential equations.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Calculus is the largest HSC Mathematics Advanced content strand

- **Calculus is the language of rates and accumulation.** Every applied HSC question — financial mathematics, sequences and series, statistical distributions, geometric optimisation — ultimately reduces to either "find the rate of change" (differentiation) or "find the total amount accumulated" (integration).
- **Calculus is a prerequisite for Mathematics Extension 1.** The Extension 1 syllabus assumes fluency in all the rules above and extends to integration by parts, differential equations and inverse trigonometric functions.

#### Exam technique

- Show every step in a differentiation or integration question. Marking guidelines award method marks even when the final answer is wrong.
- For optimisation, ALWAYS verify the stationary point. Set up the function, find its derivative, set to zero, solve, then evaluate the second derivative or use the first derivative test.
- For related rates, identify the given rate, identify the rate to find, and use the chain rule to relate them.
- For areas between curves, sketch the region first. Identify which curve is upper and which is lower in each interval.

#### Common misconceptions (and the correction)

- "Differentiation and integration always commute." No — differentiation under an integral sign and integration under a derivative sign require care.
- "∫ 1/x dx = ln x." ∫ 1/x dx = ln|x| + C. The absolute value is essential.
- "f'(x) = 0 means f is constant." No — f'(x) = 0 means f is constant on each connected piece of its domain. f(x) = 1/x has f'(x) = −1/x² ≠ 0, so it is not constant.
- "Stationary points are always maxima or minima." Some are inflection points where the derivative is zero but the function changes neither from increasing to decreasing nor vice versa.

#### Specification reference

This Area of Study is assessed across both HSC Mathematics Advanced examination papers. Higher-tariff questions combine calculus with trigonometric, exponential, logarithmic and inverse functions. The Year 12 calculus strand (Differential Calculus, Integral Calculus, Applications of Calculus) is the most heavily weighted single content strand in the Year 12 examination. Confirm the live assessment weighting and any tier-specific exclusions on curriculum.nsw.edu.au for the current specification before final revision.

---

*Last updated 2026-09-20. Source: NSW Mathematics Advanced 11–12 Syllabus (2024), https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview. Awarding body: NSW Education Standards Authority (NESA). Tier rules, calculator policy and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*