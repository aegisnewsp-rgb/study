---




exam: nat-i
examName: NAT-I (NTS)
subject: subject-knowledge
subjectName: Subject Knowledge
topic: sub-7
topicName: "Mathematics: Algebra and Calculus"
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.141227"
lastUpdated: "2026-06-21"
diagramPrompt: "Educational diagram illustrating Mathematics: Algebra and Calculus with clear labels, white background, exam-style illustration"




---

# Mathematics: Algebra and Calculus

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Algebra** in NAT-I centres on solving **linear** and **quadratic equations**, manipulating **polynomials**, applying the **binomial theorem**, working with **matrices/determinants**, and analysing **sequences (AP/GP)**. The must-know formula is the **quadratic formula**: `x = (-b ± √(b² - 4ac)) / 2a`, where the **discriminant** Δ = b² − 4ac tells you whether roots are real and distinct, real and equal, or complex.

**Calculus** is built on three pillars: **limits**, **differentiation**, and **integration**. Memorise the standard results `d/dx (xⁿ) = n·xⁿ⁻¹`, `d/dx (sin x) = cos x`, `d/dx (cos x) = −sin x`, and their integration counterparts `∫ xⁿ dx = xⁿ⁺¹/(n+1) + C`, `∫ (1/x) dx = ln|x| + C`. **Exam pointers:** (1) Roots of ax² + bx + c = 0 satisfy **Vieta's** relations `α + β = −b/a`, `αβ = c/a`. (2) AP nth term: `aₙ = a + (n−1)d`; GP nth term: `aₙ = a·rⁿ⁻¹`. (3) Use **L'Hôpital's rule** for 0/0 or ∞/∞ limits by differentiating top and bottom separately.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Equations and Polynomials
A **quadratic equation** ax² + bx + c = 0 is solved by factorisation, **completing the square** (rewrite as `a(x + b/2a)² = (b² − 4ac)/4a`), or the quadratic formula. The **discriminant** Δ = b² − 4ac governs root nature: Δ > 0 (two real distinct roots), Δ = 0 (repeated root), Δ < 0 (complex conjugate pair). **Vieta's formulas** let you build a quadratic from known roots.

#### Sequences and Series
An **arithmetic progression (AP)** has constant difference d; the nth term is `aₙ = a + (n−1)d` and the sum of n terms is `Sₙ = n/2 · [2a + (n−1)d]`. A **geometric progression (GP)** has constant ratio r; nth term `aₙ = a·rⁿ⁻¹`, and sum `Sₙ = a(1 − rⁿ)/(1 − r)` for r ≠ 1. Watch for the r = 1 trap where the GP sum degenerates to `Sₙ = na`.

#### Functions
A **function** f: A → B assigns exactly one output to each input. Recognise **linear** (f(x) = mx + c), **quadratic** (parabola), **polynomial**, **trigonometric** (sin, cos, tan), **exponential** (eˣ, aˣ), and **logarithmic** (ln x, log x) types. The **domain** is the set of permissible x-values; the **range** is the resulting y-values. **Composition** f(g(x)) feeds one function into another; the **inverse** f⁻¹ reverses the mapping (defined only when f is one-to-one).

#### Matrices and Determinants
A **matrix** is a rectangular array; two matrices add element-wise and multiply row-by-column when inner dimensions match. For a 2×2 matrix `[[a,b],[c,d]]`, the **determinant** is `|A| = ad − bc`. **Cramer's rule** solves a 2×2 linear system using `x = |Aₓ|/|A|`, `y = |Aᵧ|/|A|`, provided |A| ≠ 0.

#### Limits and Continuity
`lim(x→a) f(x)` evaluates the value f approaches as x nears a. Standard results include `lim(x→0) (sin x)/x = 1` and `lim(x→0) (1 − cos x)/x = 0`. For indeterminate forms 0/0 or ∞/∞, **L'Hôpital's rule** permits `lim f(x)/g(x) = lim f′(x)/g′(x)` when conditions hold.

#### Differentiation
The **derivative** `f′(x)` is the instantaneous rate of change, geometrically the slope of the tangent. Master these rules: **product** `(fg)′ = f′g + fg′`, **quotient** `(f/g)′ = (f′g − fg′)/g²`, and **chain** `(f(g(x)))′ = f′(g(x)) · g′(x)`. Apply derivatives to find **maxima/minima** by setting `f′(x) = 0` and using the second-derivative test.

#### Integration
**Indefinite integration** recovers a family of antiderivatives: `∫ f(x) dx = F(x) + C`. **Definite integration** `∫ₐᵇ f(x) dx = F(b) − F(a)` computes net signed **area under the curve**. Standard forms include `∫ sin x dx = −cos x + C` and `∫ cos x dx = sin x + C` — sign slips here are the most common trap.

#### Key Facts Table

| Topic | Essential Formula | Typical NAT-I MCQ |
|---|---|---|
| Quadratic | `x = (−b ± √Δ)/2a` | Find roots / discriminant |
| AP sum | `Sₙ = n/2 [2a + (n−1)d]` | Sum of first n terms |
| GP sum | `Sₙ = a(1−rⁿ)/(1−r)` | Sum when r ≠ 1 |
| Limit | `lim (sin x)/x = 1` | Standard trigonometric limit |
| Derivative | `d/dx (xⁿ) = n xⁿ⁻¹` | Differentiate polynomials |
| Integral | `∫ xⁿ dx = xⁿ⁺¹/(n+1) + C` | Area under curve |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Common Mistakes
Sign errors plague **completing the square**: always keep the coefficient of x² equal to 1 before halving the linear coefficient. In **GP problems**, when r = −1 the sum `Sₙ` oscillates between a and 0 — the formula `a(1 − rⁿ)/(1 − r)` still applies because 1 − r = 2 ≠ 0, but the closed form `a(1−(−1)ⁿ)/2` clarifies the alternation. With **chain rule**, students frequently differentiate only the outer function and forget `g′(x)`; a habit of writing the derivative as `f′(u) · du/dx` prevents this.

For **limits**, do not split fractions or cancel factors inside an indeterminate form before resolving the 0/0 status. **L'Hôpital's rule** applies only when the original limit is of the form 0/0 or ∞/∞ and both derivatives exist near the point. A common trap presents `lim(x→0) (sin 3x)/(tan 2x)`; the correct answer is 3/2 (not 1), found by multiplying and dividing by 3x and 2x separately.

In **integration**, dropping `+ C` is half-marks lost on indefinite integrals. Sign confusion between `∫ sin x dx = −cos x + C` and `∫ cos x dx = sin x + C` is the most-tested trap in the calculus block.

#### Connections to Adjacent Topics
Quadratics feed directly into **conic sections** (parabola opens from the squared term) and **optimisation** problems solved via `f′(x) = 0`. Matrices connect to **linear transformations** and **systems of equations** — eigenvalues of 2×2 matrices satisfy `λ² − tr(A)λ + |A| = 0`. The **Fundamental Theorem of Calculus** links the two halves of calculus: differentiation and integration are inverse operations.

#### Worked Micro-Example
Find the area under `y = x²` from x = 0 to x = 3.
1. Set up: `A = ∫₀³ x² dx`.
2. Integrate: `= [x³/3]₀³`.
3. Evaluate: `= 27/3 − 0 = 9` square units.

#### Practice Prompts
1. If α and β are roots of `2x² − 5x + 3 = 0`, find α² + β² without solving for α, β individually. *(Hint: use (α + β)² − 2αβ.)*
2. Evaluate `lim(x→0) (eˣ − 1)/x`. *(Apply L'Hôpital or the standard series expansion.)*

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
