---
exam: aqa-alevel-mathematics
examName: A-Level Mathematics (AQA 7357)
subject: mathematics
subjectName: Mathematics
topic: almath-007
topicName: Differentiation
weight: 5
country: uk
generated: "2026-09-22T10:00:00"
lastUpdated: "2026-09-22"
---

# Differentiation — A-Level Mathematics (AQA 7357) Notes

Differentiation is section G of the AQA 7357 specification. The section covers differentiation from first principles, standard results, the product, quotient and chain rules, tangents and normals, stationary points and points of inflection, and implicit differentiation. Differentiation is the largest calculus block at A-level and the single section most students lose the most marks on — not because the methods are hard, but because they are applied inside a wider algebra problem where a slip elsewhere costs the marks. The two habits that give the most payoff are: write the derivative before substituting values, and check the chain rule on every term.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### The five rules

- **Constant rule**: d/dx c = 0.
- **Power rule**: d/dx x^n = n x^(n−1).
- **Sum/difference rule**: d/dx (f ± g) = f' ± g'.
- **Product rule**: d/dx (f · g) = f' · g + f · g'.
- **Quotient rule**: d/dx (f/g) = (f' · g − f · g')/g².
- **Chain rule**: d/dx f(g(x)) = f'(g(x)) · g'(x).

The chain rule is the one students forget to apply — every nested function needs it.

#### Standard derivatives (memorise these)

- d/dx sin x = cos x.
- d/dx cos x = −sin x.
- d/dx tan x = sec²x = 1/cos²x.
- d/dx e^x = e^x.
- d/dx e^(kx) = k e^(kx).
- d/dx ln x = 1/x.
- d/dx a^x = a^x ln a.

#### Tangents and normals

The tangent line at (a, f(a)) has gradient f'(a). The normal line is perpendicular to the tangent, so its gradient is −1/f'(a) (provided f'(a) ≠ 0).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Differentiation from first principles

The derivative of f at a is defined as:

f'(a) = lim_{h → 0} [f(a + h) − f(a)] / h.

This definition is what every differentiation rule derives, but AQA asks you to reproduce the calculation only for simple functions (typically x², x³).

**Worked example.** Differentiate f(x) = x² from first principles.

f'(a) = lim_{h → 0} [(a + h)² − a²] / h = lim_{h → 0} [a² + 2ah + h² − a²] / h = lim_{h → 0} [2ah + h²] / h = lim_{h → 0} [2a + h] = 2a.

So f'(x) = 2x.

**Worked example.** Differentiate f(x) = x³ from first principles.

f'(a) = lim_{h → 0} [(a + h)³ − a³] / h = lim_{h → 0} [a³ + 3a²h + 3ah² + h³ − a³] / h = lim_{h → 0} [3a² + 3ah + h²] = 3a².

So f'(x) = 3x².

#### The product, quotient and chain rules in practice

**Product rule** for y = u · v: dy/dx = u'v + uv'.

**Worked example.** Differentiate y = x² sin x.

u = x², v = sin x, u' = 2x, v' = cos x. dy/dx = 2x sin x + x² cos x.

**Quotient rule** for y = u/v: dy/dx = (u'v − uv')/v².

**Worked example.** Differentiate y = sin x / x.

u = sin x, v = x, u' = cos x, v' = 1. dy/dx = (cos x · x − sin x · 1)/x² = (x cos x − sin x)/x².

**Chain rule** for y = f(g(x)): dy/dx = f'(g(x)) · g'(x). Write it as "derivative of outside, times derivative of inside".

**Worked example.** Differentiate y = (3x + 1)⁵.

Outside function f(u) = u⁵, inside g(x) = 3x + 1. f'(u) = 5u⁴, g'(x) = 3. dy/dx = 5(3x + 1)⁴ · 3 = 15(3x + 1)⁴.

#### Tangents and normals

To find the tangent at (a, f(a)):

1. Compute f'(a).
2. Equation: y − f(a) = f'(a)(x − a).

For the normal:

1. Compute f'(a).
2. Gradient of normal: −1/f'(a).
3. Equation: y − f(a) = (−1/f'(a))(x − a).

**Worked example.** Find the tangent to y = x² at (3, 9).

f'(x) = 2x. f'(3) = 6. Tangent: y − 9 = 6(x − 3), so y = 6x − 9.

#### Stationary points

A stationary point is where f'(x) = 0. To classify:

1. Find f'(x) and set equal to 0; solve for x.
2. Substitute x back into f to find the y-coordinate.
3. Determine the nature: minimum, maximum, or point of inflection.

**Nature test (second derivative):**

- f''(x_stationary) > 0: minimum.
- f''(x_stationary) < 0: maximum.
- f''(x_stationary) = 0: test inconclusive; use the first-derivative sign test.

**Worked example.** Find and classify the stationary points of y = x³ − 3x + 1.

f'(x) = 3x² − 3 = 0 → x² = 1 → x = ±1.

f''(x) = 6x.

At x = 1: f''(1) = 6 > 0 → minimum. f(1) = 1 − 3 + 1 = −1. So minimum at (1, −1).

At x = −1: f''(−1) = −6 < 0 → maximum. f(−1) = −1 + 3 + 1 = 3. So maximum at (−1, 3).

#### Points of inflection

A point of inflection is where f''(x) = 0 AND f'' changes sign. It is a point where the concavity of the curve changes.

**Worked example.** Find the inflection point of y = x³ + x² − 5.

f'(x) = 3x² + 2x, f''(x) = 6x + 2 = 0 → x = −1/3.

f''(x) changes sign at x = −1/3 (positive for x > −1/3, negative for x < −1/3), so this is a genuine inflection point.

y(−1/3) = (−1/27) + (1/9) − 5 = −1/27 + 3/27 − 135/27 = −133/27.

#### Implicit differentiation

Some equations define y implicitly in terms of x (for example, x² + y² = 25, where y cannot be written as a single explicit function of x without using ±). The technique is to differentiate both sides with respect to x, treating y as a function of x (so d/dx(y²) = 2y · dy/dx).

**Worked example.** Find dy/dx for x² + y² = 25.

Differentiate: 2x + 2y · dy/dx = 0 → dy/dx = −x/y.

At (3, 4): dy/dx = −3/4. (Matches the gradient of the radius inverse — the tangent to the circle at (3, 4).)

**Worked example.** Find dy/dx for x²y + y² = 5.

Use the product rule on the x²y term: 2xy + x² · dy/dx + 2y · dy/dx = 0 → dy/dx · (x² + 2y) = −2xy → dy/dx = −2xy / (x² + 2y).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why most "differentiation" errors are algebra errors

On AQA papers, differentiation marks are usually lost in the algebra that surrounds the differentiation, not in the differentiation step itself. The student differentiates correctly and then drops a sign when rearranging, or forgets a factor when collecting terms. The fix is mechanical: after differentiating, do not skip the simplification step, and check the dimensions of the answer (a derivative of x² should be proportional to x, not x² or constant).

A second common error is forgetting to apply the chain rule on a single term. f(x) = sin(3x) differentiates to 3 cos(3x), not cos(3x); the "3" is the derivative of the inside. A useful discipline: write "outer times inner derivative" before simplifying.

#### Worked pattern — "show that" differentiation questions

A common AQA question asks "show that" the gradient at a particular point is some specific value. The technique:

1. Compute f'(x) symbolically.
2. Substitute x = a to get a numerical value.
3. Show that this equals the stated value (often with algebra).

**Worked example.** Show that the gradient of y = x² at x = 3 is 6.

f'(x) = 2x. f'(3) = 2 · 3 = 6. ∎

For a curve given implicitly: differentiate implicitly, substitute the given x and y, show the algebra gives the stated gradient.

#### Worked pattern — connected rates of change

In a related-rates problem, two quantities are linked by an equation, and the rate of change of one is given. Differentiate the equation with respect to time t, then substitute known quantities to find the unknown rate.

**Worked example.** A spherical balloon has volume V = (4/3)πr³. Air is pumped in at 10 cm³/s. Find dr/dt when r = 5 cm.

dV/dt = 4πr² · dr/dt. 10 = 4π · 25 · dr/dt = 100π · dr/dt. dr/dt = 10 / (100π) = 1/(10π) cm/s.

The chain rule on V gives the link between the two rates.

#### Common misconceptions (and the correction)

- "d/dx (x² + x) = x² + x." The derivative of a constant is zero; d/dx (x² + x) = 2x + 1. Apply the sum rule and the constant rule.
- "Product rule and chain rule are the same thing." They are different. Product rule is for f · g; chain rule is for f(g(x)). A function like (sin x)² = sin(x)² = sin²x needs the chain rule, not the product rule.
- "The derivative of a minimum is zero." Correct — that is what makes it a stationary point. But the converse is not true: f'(x) = 0 can also be a maximum or an inflection.
- "Implicit differentiation gives a unique answer." It gives dy/dx as a function of x and y, not as a single number. You must substitute the coordinates of the point to get a numerical gradient.

#### Specification reference

Section G of the AQA A-level Mathematics 7357 specification appears on Paper 1 (pure content) and feeds into the kinematics work on variable acceleration (section Q) and the optimisation questions that recur across the pure content. Confirm the live paper structure, formula booklet and any in-year specification changes on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-22. Source: AQA A-level Mathematics specification 7357, https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357. Paper structure, assessment weighting and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*