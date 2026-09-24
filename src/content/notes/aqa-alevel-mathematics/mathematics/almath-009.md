---
exam: aqa-alevel-mathematics
examName: A-Level Mathematics (AQA 7357)
subject: mathematics
subjectName: Mathematics
topic: almath-009
topicName: Numerical Methods
weight: 2
country: uk
generated: "2026-09-22T10:00:00"
lastUpdated: "2026-09-22"
---

# Numerical Methods — A-Level Mathematics (AQA 7357) Notes

Numerical Methods is section I of the AQA 7357 specification. The section covers locating a root by sign change, fixed-point iteration, and the Newton–Raphson method, plus recognising when these methods fail or converge slowly. It is the smallest of the pure sections at A-level and is deliberately weighted last in revision priority because every method here requires a calculator, the answer format is usually "show that the next approximation is …", and the marks available are modest compared to calculus or algebra. Once the calculus is secure, a focused pass on numerical methods is enough.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Three root-finding methods

- **Sign change**: a continuous function f changes sign at a root. If f(a) and f(b) have opposite signs, there is a root in (a, b). Bisection halves the interval each step until the root is bracketed tightly.
- **Fixed-point iteration**: rewrite the equation as x = g(x). Start with x₀, iterate x_{n+1} = g(x_n). Converges to a fixed point if |g'(root)| < 1; diverges otherwise.
- **Newton–Raphson**: x_{n+1} = x_n − f(x_n)/f'(x_n). Converges rapidly when started close to a simple root; can diverge when started far away or near a repeated root.

#### When to use each method

- AQA questions usually dictate the method explicitly ("use the Newton–Raphson method to find ..."). If the method is not given, sign change is the safest first choice because it always converges, and Newton–Raphson is the fastest once you can compute f'(x).

#### Recognising failure

- A fixed-point iteration diverges if |g'(x)| ≥ 1 near the fixed point.
- Newton–Raphson can cycle or diverge for functions with sharp curvature or near roots where f'(x) is small.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Sign change (interval bisection)

If f is continuous and f(a) and f(b) have opposite signs, then f has a root in the open interval (a, b) by the intermediate value theorem.

**Worked example.** Show that f(x) = x³ − x − 1 has a root between 1 and 2.

f(1) = 1 − 1 − 1 = −1. f(2) = 8 − 2 − 1 = 5. f(1) and f(2) have opposite signs, so there is a root in (1, 2).

To narrow the interval: evaluate f at the midpoint, f(1.5) = 3.375 − 1.5 − 1 = 0.875 > 0, so the root is in (1, 1.5). Continue halving until the interval is small enough.

The sign-change method is robust but slow — typically needs 10 iterations to get 3 decimal places.

#### Fixed-point iteration

Rewrite the equation f(x) = 0 as x = g(x). Then iterate x_{n+1} = g(x_n). If the sequence converges, the limit is a fixed point of g, hence a root of f.

**Worked example.** Solve x³ − x − 1 = 0 near x = 1.5 by fixed-point iteration.

Rewrite: x = (x + 1)^(1/3). So g(x) = (x + 1)^(1/3). Start with x₀ = 1.5.

x₁ = (1.5 + 1)^(1/3) = 2.5^(1/3) ≈ 1.3572.
x₂ = (1.3572 + 1)^(1/3) ≈ 1.3283.
x₃ ≈ 1.3248.
x₄ ≈ 1.3247.

Converging to approximately 1.3247, which is the real root of x³ − x − 1.

**Convergence criterion.** Near the root r, the iteration converges if |g'(r)| < 1, and diverges if |g'(r)| > 1. Different rearrangements of the same equation can converge or diverge — choosing the right rearrangement is part of the skill.

**Worked example — divergence.** Try x = (x + 1)^(1/3) starting from x₀ = 100. g'(x) = (1/3)(x + 1)^(−2/3). At x = 100, |g'(100)| ≈ (1/3)(101)^(−2/3) ≈ 0.015, which is well within the convergence region. But if we try x = x³ − 1, then g'(x) = 3x². At x = 1.5, |g'(1.5)| = 6.75, so this rearrangement diverges from x₀ = 1.5.

#### The Newton–Raphson method

For f differentiable with a simple root near x₀, the Newton–Raphson formula is:

x_{n+1} = x_n − f(x_n)/f'(x_n).

Each step uses the tangent at x_n to estimate where the curve crosses the x-axis.

**Worked example.** Apply Newton–Raphson to f(x) = x³ − x − 1 starting from x₀ = 1.5.

f'(x) = 3x² − 1.

x₁ = 1.5 − f(1.5)/f'(1.5) = 1.5 − 0.875/5.75 = 1.5 − 0.1522 = 1.3478.
x₂ = 1.3478 − f(1.3478)/f'(1.3478) ≈ 1.3478 − 0.0046/4.4510 ≈ 1.3478 − 0.0010 = 1.3248.
x₃ ≈ 1.3247.

Three iterations give 4-decimal-place accuracy, compared to four iterations for fixed-point and ten-plus for sign change.

**Derivation sketch.** The tangent to y = f(x) at (x_n, f(x_n)) is y = f(x_n) + f'(x_n)(x − x_n). Setting y = 0 gives the next iteration:

0 = f(x_n) + f'(x_n)(x_{n+1} − x_n) → x_{n+1} = x_n − f(x_n)/f'(x_n).

#### Recognising failure modes

- **Slow convergence**: when |g'(r)| is close to 1, fixed-point iteration takes many steps.
- **Divergence**: when |g'(r)| > 1, the iteration moves further from the root each step.
- **Cycle**: when |g'(r)| = 1 (or very close), the iteration may bounce between two or more values without converging.
- **Newton–Raphson divergence**: when x₀ is far from the root and the function has curvature, the tangent may point away from the root, sending x_{n+1} in the wrong direction.
- **Repeated roots**: when f(r) = 0 AND f'(r) = 0 (e.g., f(x) = (x − r)²), Newton–Raphson still converges but only linearly (very slowly).

**Worked example — divergence in Newton–Raphson.** Solve f(x) = arctan(x) = 0 near x₀ = 1.5. f'(x) = 1/(1 + x²). At x = 1.5, f'(1.5) = 1/3.25 ≈ 0.308. Newton step: x₁ = 1.5 − arctan(1.5)/0.308 ≈ 1.5 − 0.983/0.308 ≈ 1.5 − 3.19 = −1.69. The iteration jumps from positive to negative, overshooting the root at 0.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why convergence is a design choice

Every numerical method can fail in different ways, and the AQA questions test the recognition as well as the application. The two habits:

1. After each iteration, write the new x to the same number of decimal places as the previous one — if the change has stopped, you have converged.
2. If the iteration is diverging or cycling, change the starting point (for Newton–Raphson) or change the rearrangement (for fixed-point).

#### Worked pattern — failure analysis for fixed-point iteration

AQA often gives a sequence x₀, x₁, x₂ and asks whether the iteration will converge. To analyse:

1. Recognise the rearrangement: x_{n+1} = g(x_n) for some g.
2. Compute g'(x) symbolically.
3. Evaluate |g'(x)| at the suspected fixed point.
4. Conclude: |g'| < 1 implies convergence (locally); |g'| > 1 implies divergence; |g'| = 1 is inconclusive.

**Worked example.** For x_{n+1} = 4 − 2/x_n, starting from x₀ = 3, does the sequence converge?

Fixed point: x = 4 − 2/x → x² = 4x − 2 → x² − 4x + 2 = 0 → x = 2 ± √2 ≈ 3.414 or 0.586.

g'(x) = 2/x². At x ≈ 3.414, |g'| ≈ 2/11.66 ≈ 0.172, well inside the convergence region. Iterate:

x₀ = 3.
x₁ = 4 − 2/3 = 10/3 ≈ 3.333.
x₂ = 4 − 2/3.333 = 4 − 0.6 = 3.4.
x₃ ≈ 4 − 0.588 = 3.412.
x₄ ≈ 3.414.

Converging to 2 + √2 ≈ 3.414.

#### Worked pattern — Newton–Raphson with diagram

AQA commonly asks students to show a Newton–Raphson iteration on a diagram: draw the curve y = f(x), the tangent at (x₀, f(x₀)), and the point x₁ where the tangent crosses the x-axis. The tangent at x₁ then crosses the x-axis at x₂, and so on. The diagram makes the geometry clear and gets full marks even if the algebra has a slip.

#### Common misconceptions (and the correction)

- "Newton–Raphson always converges." It converges for simple roots when started close enough. It can diverge when the tangent points away from the root, especially if f has sharp curvature or the starting point is poor.
- "Sign change and bisection are the same." They are the same method but with different stopping criteria. Sign change asks "is there a root?", bisection asks "where exactly is the root?".
- "Fixed-point iteration converges for every rearrangement." No. The rearrangement matters: choose g so that |g'(r)| < 1 near the root.
- "A small f'(x) in Newton–Raphson is good." A small f'(x_n) makes the step x_{n+1} − x_n large, which can overshoot the root. Newton–Raphson fails near repeated roots because f'(r) is also small.

#### Specification reference

Section I of the AQA A-level Mathematics 7357 specification appears on Paper 1 (pure content) but is the smallest section. Confirm the live paper structure, formula booklet and any in-year specification changes on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-22. Source: AQA A-level Mathematics specification 7357, https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357. Paper structure, assessment weighting and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*