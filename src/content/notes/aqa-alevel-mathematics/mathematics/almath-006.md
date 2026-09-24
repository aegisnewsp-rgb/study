---
exam: aqa-alevel-mathematics
examName: A-Level Mathematics (AQA 7357)
subject: mathematics
subjectName: Mathematics
topic: almath-006
topicName: Exponentials and Logarithms
weight: 5
country: uk
generated: "2026-09-22T10:00:00"
lastUpdated: "2026-09-22"
---

# Exponentials and Logarithms — A-Level Mathematics (AQA 7357) Notes

Exponentials and Logarithms is section F of the AQA 7357 specification. The section covers the exponential function and its graph, laws of logarithms, solving exponential equations, modelling growth and decay, and reducing a relationship to linear form with logarithms. The function e^x is the natural exponential; its inverse is ln x, the natural logarithm. The pair (e^x, ln x) is the single most-used function family in calculus at A-level — differentiation of e^x is e^x, integration is also e^x, and every related function reduces to the same rule. Modelling questions on growth and decay (population, radioactive decay, cooling, compound interest) all sit on this section.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Three rules you use in every paper

- **e^x is its own derivative and its own integral**: d/dx e^x = e^x, ∫ e^x dx = e^x + c.
- **a^x = e^(x ln a)**, so d/dx a^x = a^x ln a, ∫ a^x dx = a^x / ln a + c.
- **ln x is the natural log**: ln 1 = 0, ln e = 1, e^(ln x) = x, ln(e^x) = x.

#### The laws of logarithms

For positive a, b and any real n:

- ln(a · b) = ln a + ln b.
- ln(a / b) = ln a − ln b.
- ln(aⁿ) = n ln a.

These three are enough to manipulate every A-level logarithm expression. The change-of-base formula ln x = log x / log e lets you move between natural log and base-10 log when needed for a calculator.

#### Graph shapes

y = e^x passes through (0, 1), rises rapidly for large positive x, and approaches the x-axis (y = 0) as x → −∞. The graph never touches the x-axis.

y = ln x is the mirror of y = e^x in the line y = x. It passes through (1, 0), rises slowly, and goes to −∞ as x → 0⁺ (the y-axis is a vertical asymptote).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Exponential functions

The exponential function y = e^x has the defining property that its rate of change at any point equals its value at that point. This is the only function (up to a constant multiplier) with this property, and it is the basis of every growth-and-decay model.

**Worked example.** A population grows according to P = 2000 e^(0.05t). Find the time when P = 5000.

5000 = 2000 e^(0.05t) → e^(0.05t) = 2.5 → 0.05t = ln 2.5 → t = ln 2.5 / 0.05 ≈ 18.33.

So the population reaches 5000 at about t = 18.3 (time units depending on the problem).

#### Logarithms in detail

y = ln x is defined only for x > 0. It satisfies ln(e) = 1 (so the graph passes through (e, 1)) and ln 1 = 0 (so the graph passes through (1, 0)).

**Worked example.** Solve ln(2x − 1) = 3.

e^(ln(2x − 1)) = e^3 → 2x − 1 = e³ → 2x = e³ + 1 → x = (e³ + 1)/2.

#### Solving exponential equations

To solve a · b^x = c, take logarithms of both sides. To solve a · e^(kx) = c, take natural logs: x = (ln(c/a))/k.

**Worked example.** Solve 5 · 2^x = 80.

2^x = 16 → x = 4 (since 2⁴ = 16). Done.

**Worked example.** Solve 3 · e^(2x) = 50.

e^(2x) = 50/3 → 2x = ln(50/3) → x = ln(50/3)/2 ≈ 1.41.

#### Solving logarithmic equations

To solve log equations, exponentiate both sides; to combine log expressions, use the laws.

**Worked example.** Solve log₁₀ x + log₁₀ (x − 3) = 1.

log₁₀ (x(x − 3)) = 1 → x(x − 3) = 10 → x² − 3x − 10 = 0 → (x − 5)(x + 2) = 0 → x = 5 (reject x = −2 because log requires positive argument).

**Worked example.** Solve ln(3x + 4) = 2 ln x.

ln(3x + 4) = ln(x²) → 3x + 4 = x² → x² − 3x − 4 = 0 → (x − 4)(x + 1) = 0 → x = 4 (reject x = −1).

Always check that the proposed solution lies in the domain (positive arguments for logs).

#### Modelling growth and decay

Two standard models:

- **Exponential growth**: N(t) = N₀ e^(kt) with k > 0. Doubling time T = ln 2 / k.
- **Exponential decay**: N(t) = N₀ e^(−kt) with k > 0. Half-life T½ = ln 2 / k.

The constants N₀ and k are found from initial conditions. N(t = 0) = N₀ gives N₀ directly. Then the value at one other time gives k.

**Worked example.** A radioactive sample has mass 200 g. After 10 years the mass is 180 g. Find the half-life.

N(t) = 200 e^(−kt). 180 = 200 e^(−10k) → e^(−10k) = 0.9 → −10k = ln 0.9 → k = −ln 0.9 / 10 ≈ 0.01054.

Half-life: T½ = ln 2 / k ≈ 65.8 years.

#### Reducing a relationship to linear form

A modelling question often gives data and asks you to find the model. To find an exponential model y = a · b^x, take logs of both sides:

ln y = ln a + x ln b.

This is linear in x: let Y = ln y, m = ln b, c = ln a, then Y = mx + c. Plot Y against x, find the gradient m and intercept c by linear regression, then a = e^c and b = e^m.

**Worked example.** Data (x, y) = (1, 5), (2, 8), (3, 13). The relationship looks exponential. Find y in the form a · b^x.

Compute (x, ln y): (1, ln 5 ≈ 1.609), (2, ln 8 ≈ 2.079), (3, ln 13 ≈ 2.565). The differences are roughly 0.47, so the gradient is about 0.48. The intercept (at x = 0) is about 1.609 − 0.48 ≈ 1.13. So a = e^1.13 ≈ 3.10 and b = e^0.48 ≈ 1.62. The model is y ≈ 3.10 · 1.62^x.

The AQA formula booklet gives the transformation explicitly for the most common models — straight line, exponential, power, reciprocal — so you do not have to memorise the derivations.

#### Differentiation and integration of exponentials and logarithms

These are the rules used in the calculus sections:

- d/dx e^x = e^x.
- d/dx e^(kx) = k e^(kx).
- d/dx a^x = a^x ln a.
- d/dx ln x = 1/x.
- d/dx ln(kx) = 1/x.
- ∫ e^x dx = e^x + c.
- ∫ e^(kx) dx = (1/k) e^(kx) + c.
- ∫ (1/x) dx = ln |x| + c.

For integration, the ln|x| form is needed when x can be negative (e.g., in integration by substitution where u < 0 over part of the range).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why this section is the bridge to calculus

Every differentiation rule for a function defined implicitly uses either e^x or ln x, because the only function whose derivative equals itself is e^x and the only function whose derivative equals 1/x is ln x. Differentiation of more complex functions — like y = x^x, y = e^(sin x), y = ln(1 + x²) — chains these two rules.

Integration of rational functions often produces ln |x| as the antiderivative, and integration by substitution frequently lands on a log when the integrand is f'(x)/f(x). Recognising the pattern f'(x)/f(x) saves a lot of working.

#### Worked pattern — Newton's law of cooling

A liquid cools according to T(t) = T_ambient + (T₀ − T_ambient) e^(−kt). To find k given data:

**Worked example.** A cup of tea starts at 90 °C in a 20 °C room. After 5 minutes it is at 70 °C. Find k.

T(5) = 20 + (90 − 20) e^(−5k) = 20 + 70 e^(−5k). Setting equal to 70: 70 = 20 + 70 e^(−5k) → 70 e^(−5k) = 50 → e^(−5k) = 5/7 → −5k = ln(5/7) → k = −ln(5/7)/5 ≈ 0.067.

So T(t) = 20 + 70 e^(−0.067t).

#### Worked pattern — log-log plots for power models

For a power model y = a · x^k, take logs of both sides:

ln y = ln a + k ln x.

Plot ln y against ln x; the gradient is k, the intercept is ln a. This is how AQA A-level questions extract the exponent from a "looks like a power law" dataset.

#### Common misconceptions (and the correction)

- "ln x and log x are different functions." They differ by a constant: log₁₀ x = ln x / ln 10. For calculus and most A-level work, use ln x (the natural log).
- "a^x grows faster than x^a for large x." For very large x, a^x grows faster than any polynomial — but x^(1000) eventually overtakes 2^x until 2^x catches up at x ≈ 1400. The asymptotic statement is true; the intuition can mislead.
- "log(x²) = 2 log x." It is true for x > 0. For x < 0, log(x²) = log|x|² = 2 log|x|, which is 2 log(−x) — not 2 log x.
- "ln 0 is undefined." Yes. ln x is defined only for x > 0.

#### Specification reference

Section F of the AQA A-level Mathematics 7357 specification appears on Paper 1 (pure content) and feeds into the calculus of e^x and ln x in differentiation (section G) and integration (section H). Confirm the live paper structure, formula booklet and any in-year specification changes on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-22. Source: AQA A-level Mathematics specification 7357, https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357. Paper structure, assessment weighting and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*