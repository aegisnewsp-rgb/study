---
exam: hsc-mathematics-advanced
examName: HSC Mathematics Advanced (NESA 2024)
subject: hsc-mathematics-advanced
subjectName: Mathematics Advanced
topic: hscmathadv-003
topicName: Exponential and Logarithmic Functions
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-20
---

# Exponential and Logarithmic Functions — HSC Mathematics Advanced (NESA 2024) Notes

Exponential and Logarithmic Functions is one of the seven Areas of Study in the HSC Mathematics Advanced syllabus. It is taught in Year 11 and applied to growth and decay modelling in Year 12. Exponential and logarithmic forms appear in both HSC papers — in financial mathematics, calculus (derivatives of aˣ and logₐx), and probability (continuous distributions involve e⁻ˣ²).

> Re-check the live specification details and any in-year assessment changes on https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Exponential function.** f(x) = aˣ for a > 0, a ≠ 1. Domain all reals, range (0, ∞). y = eˣ is the natural exponential with base e ≈ 2.71828.
- **Logarithm.** logₐ(x) = the power to which a must be raised to give x. So a^(logₐx) = x. Domain (0, ∞), range all reals.
- **Natural logarithm.** ln x = logₑ x. The inverse of eˣ.
- **Laws of indices.** aᵐ × aⁿ = aᵐ⁺ⁿ. aᵐ / aⁿ = aᵐ⁻ⁿ. (aᵐ)ⁿ = aᵐⁿ. a⁰ = 1. a⁻ⁿ = 1/aⁿ. a^(1/n) = ⁿ√a.
- **Laws of logarithms.** logₐ(xy) = logₐx + logₐy. logₐ(x/y) = logₐx − logₐy. logₐ(xⁿ) = n logₐx.
- **Change of base.** logₐx = log_b x / log_b a. In particular, log_a x = ln x / ln a.

#### Examiner traps

- Forgetting that the range of an exponential function is (0, ∞) — never include 0 or negative numbers in the range.
- Mixing up log(xy) and log(x + y) — the logarithm of a product is the SUM of the logarithms, not the logarithm of the sum.
- Treating log x and ln x as the same — log is base 10, ln is base e; on HSC papers use ln unless the question says otherwise.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Exponential functions

The exponential function y = aˣ (a > 0, a ≠ 1) grows (if a > 1) or decays (if 0 < a < 1). It passes through (0, 1), has the x-axis as a horizontal asymptote, and is one-to-one on its domain.

The natural exponential y = eˣ is the most important case. e is defined by the limit (1 + 1/n)ⁿ as n → ∞, or by e = 2.71828...

Transformations of y = eˣ: y = eˣ⁻ʰ shifts right by h; y = eˣ + k shifts up by k; y = A e^(kx) scales vertically by A and rate-constant k. For decay, A e^(−kx) where k > 0.

#### Logarithmic functions

y = logₐx is the inverse of y = aˣ. Its graph passes through (1, 0), has the y-axis as a vertical asymptote, and is defined only for x > 0.

The natural logarithm y = ln x is the inverse of y = eˣ. ln 1 = 0, ln e = 1, ln(1/e) = −1.

#### Laws of logarithms

For x, y > 0 and a > 0, a ≠ 1:

Product: logₐ(xy) = logₐx + logₐy.
Quotient: logₐ(x/y) = logₐx − logₐy.
Power: logₐ(xⁿ) = n logₐx.
Change of base: logₐx = log_b x / log_b a.

Example: solve log₃(x + 1) + log₃(x − 1) = 2. Combine: log₃((x+1)(x−1)) = 2 → (x+1)(x−1) = 9 → x² − 1 = 9 → x² = 10 → x = ±√10. Domain requires x > 1, so x = √10.

#### Solving exponential and logarithmic equations

To solve aˣ = b: take logs of both sides: x log a = log b → x = log b / log a.

To solve logₐx = b: rewrite as x = aᵇ.

To solve e^(2x) = 5: take ln of both sides: 2x = ln 5 → x = (ln 5)/2.

#### Growth and decay modelling

Continuous growth: A(t) = A₀ e^(kt), where k > 0 is the growth rate.
Continuous decay: A(t) = A₀ e^(−kt), where k > 0 is the decay rate.
Half-life: solve A₀ e^(−kt) = A₀/2 → t = (ln 2)/k.
Time to grow to N times the original: A₀ e^(kt) = N A₀ → t = (ln N)/k.

#### Year 12 applications

Year 12 applications of exponential functions include compound interest (with continuous compounding: A = Pe^(rt)), Newton's law of cooling, and exponential regression on bivariate data.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Exponential and Logarithmic Functions underpins Calculus and Finance

- **Calculus** uses exponential and logarithmic functions as the principal example of inverse functions. The derivative of eˣ is eˣ itself; the derivative of ln x is 1/x. Chain rule extends these: d/dx e^(g(x)) = e^(g(x)) g'(x); d/dx ln(g(x)) = g'(x)/g(x).
- **Sequences and Series** uses logarithms to solve for time in geometric growth and compound interest.
- **Financial Mathematics** uses compound interest formulas that have exponential form: A = P(1 + r/n)^(nt). Continuous compounding: A = Pe^(rt). The natural logarithm appears when solving for time: t = ln(A/P)/r.
- **Statistical Analysis** uses the natural exponential in the normal distribution formula: f(x) = (1/(σ√(2π))) e^(−(x−μ)²/(2σ²)).

#### Exam technique

- For exponential equations where the variable is in the exponent, take ln of both sides. Don't try to guess.
- For logarithmic equations, ALWAYS check the domain first. logₐx requires x > 0. Solving log(x + 5) = 2 gives x + 5 = 100 → x = 95, which is in the domain.
- For half-life problems, the formula t = (ln 2)/k is fast. For "how long to triple", use t = (ln 3)/k.

#### Common misconceptions (and the correction)

- "log(x + y) = log x + log y." No — log(x + y) cannot be simplified using the logarithm laws. log(xy) = log x + log y is the correct product law.
- "log 0 = 0." No — log 0 is undefined. The logarithm function is defined only for positive arguments.
- "A graph passes through the y-axis if a^x approaches 0." a^x approaches 0 as x → −∞, but never equals 0. The x-axis is a horizontal asymptote but the graph never crosses it.
- "Half-life is constant for all exponential decay." For a given substance yes, but exponential models in economics and finance have different time constants.

#### Specification reference

This Area of Study is assessed across both HSC Mathematics Advanced examination papers. Higher-tariff questions combine exponential and logarithmic functions with calculus (differentiating, integrating, finding maxima) and with sequences and financial modelling. Confirm the live assessment weighting and any tier-specific exclusions on curriculum.nsw.edu.au for the current specification before final revision.

---

*Last updated 2026-09-20. Source: NSW Mathematics Advanced 11–12 Syllabus (2024), https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview. Awarding body: NSW Education Standards Authority (NESA). Tier rules, calculator policy and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*