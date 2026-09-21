---
exam: hkdse
examName: Hong Kong Diploma of Secondary Education (HKDSE)
subject: hkdse-mathematics
subjectName: Mathematics (Compulsory Part)
topic: hkdse-mathem-006
topicName: "Extended Part — Module 1: Calculus and Statistics"
weight: 3
country: hongkong
generated: "2026-09-20T14:00:00"
lastUpdated: "2026-09-20"
---

# Extended Part — Module 1: Calculus and Statistics — HKDSE Mathematics Notes

The Extended Part Module 1 (M1) of the HKDSE Mathematics examination is an optional single 2.5-hour paper (100% of the module mark) covering Calculus and Statistics beyond the Compulsory Part. The published learning units span binomial expansion, differentiation and integration (the Calculus area), conditional probability and Bayes' theorem, the binomial, geometric and Poisson distributions, the normal distribution, and point and interval estimation. M1 is taken by HKDSE candidates who plan to apply to JUPAS programmes in the sciences, engineering, business or actuarial fields that expect or weight the module.

> Verify the live Module 1 learning units and assessment framework on https://www.hkeaa.edu.hk/ before planning revision.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Binomial expansion** for (a + b)ⁿ where n is a positive integer: Σ(nCr·aⁿ⁻ʳ·bʳ) for r = 0 to n.
- **Differentiation** rules: d/dx(xⁿ) = nxⁿ⁻¹; d/dx(eˣ) = eˣ; d/dx(ln x) = 1/x; product rule, quotient rule, chain rule.
- **Integration** rules: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1); ∫eˣ dx = eˣ + C; ∫(1/x) dx = ln|x| + C; definite integral ∫ₐᵇ f(x) dx = F(b) - F(a).
- **Conditional probability**: P(A | B) = P(A ∩ B)/P(B). Bayes' theorem: P(Aᵢ | B) = P(B | Aᵢ)·P(Aᵢ) / Σ P(B | Aⱼ)·P(Aⱼ).
- **Discrete distributions**: Binomial B(n, p), Geometric Geom(p), Poisson Po(λ). Each has a probability mass function, mean and variance.
- **Normal distribution** N(μ, σ²): symmetric bell curve; standardisation z = (x - μ)/σ. Probability tables give Φ(z) = P(Z ≤ z).
- **Estimation**: sample mean x̄ is an unbiased estimator of μ; sample proportion p̂ is an unbiased estimator of p. Confidence intervals use the standard error.

#### Examiner traps

- Forgetting the +C on indefinite integrals.
- Mixing up Poisson (count over continuous time/space) and Binomial (count over n independent trials).
- Failing to standardise before using the normal distribution table — always convert x to z.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Binomial expansion

For (a + b)ⁿ:

- Pascal's triangle gives the coefficients nC0, nC1, ..., nCn.
- The general term is T_(r+1) = nCr·aⁿ⁻ʳ·bʳ.
- For (1 + x)ⁿ expanded for small x: (1 + x)ⁿ ≈ 1 + nx for x near 0 (first-order approximation).

The HKDSE Module 1 typically tests up to n = 8 by direct expansion; higher n values require recognition of the pattern.

#### Differentiation

The differentiation rules in M1 extend the Compulsory Part rules with:

- **Product rule**: d/dx(uv) = u·dv/dx + v·du/dx.
- **Quotient rule**: d/dx(u/v) = (v·du/dx - u·dv/dx) / v².
- **Chain rule**: d/dx(f(g(x))) = f'(g(x))·g'(x).

For trigonometric, exponential and logarithmic functions:

- d/dx(sin x) = cos x
- d/dx(cos x) = -sin x
- d/dx(tan x) = sec²x
- d/dx(eˣ) = eˣ
- d/dx(ln x) = 1/x
- d/dx(e^f(x)) = f'(x)·e^f(x)
- d/dx(ln f(x)) = f'(x)/f(x)

The second derivative f''(x) = d/dx(f'(x)) is used to determine concavity (f'' > 0 convex up; f'' < 0 concave down).

#### Integration

Indefinite integration reverses differentiation:

- ∫(f(x) + g(x)) dx = ∫f(x) dx + ∫g(x) dx.
- ∫k·f(x) dx = k·∫f(x) dx.
- ∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ -1.

For definite integrals, evaluate the antiderivative F at the upper limit b and lower limit a, then subtract: ∫ₐᵇ f(x) dx = F(b) - F(a).

Applications include the area under a curve (when f(x) ≥ 0), the area between two curves (∫ₐᵇ (f(x) - g(x)) dx when f ≥ g), and the trapezoidal rule for approximating ∫ₐᵇ f(x) dx when an antiderivative is unavailable.

#### Probability distributions

**Binomial** B(n, p): the number of successes in n independent trials, each with probability p of success. P(X = k) = nCk·pᵏ·(1-p)^(n-k). E(X) = np; Var(X) = np(1-p).

**Geometric** Geom(p): the number of trials until the first success. P(X = k) = (1-p)^(k-1)·p for k = 1, 2, .... E(X) = 1/p; Var(X) = (1-p)/p².

**Poisson** Po(λ): the number of events in a fixed interval of time or space when events occur independently at constant rate. P(X = k) = e^(-λ)·λᵏ/k!. E(X) = λ; Var(X) = λ.

**Normal** N(μ, σ²): the limiting distribution of many independent random variables. Standardise x to z = (x - μ)/σ to use the standard normal table.

#### Point and interval estimation

**Sample mean** x̄ is an unbiased estimator of μ with standard error σ/√n. **Sample proportion** p̂ = x/n is an unbiased estimator of p with standard error √(p(1-p)/n).

A **confidence interval** for μ at confidence level (1 - α) is x̄ ± z_(α/2)·σ/√n, where z_(α/2) is the critical value from the standard normal distribution (e.g. z_(0.025) ≈ 1.96 for 95% confidence).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Cross-topic links

- **Calculus to algebra**: optimisation (maxima and minima) reduces to setting the derivative to zero and checking the second derivative — a calculus problem with algebraic computation.
- **Binomial to Poisson**: as n → ∞ and p → 0 with np = λ fixed, Binomial(n, p) → Poisson(λ).
- **Normal to confidence intervals**: the central limit theorem says the sample mean of n independent observations from any distribution is approximately Normal(μ, σ²/n) for large n.

#### Exam technique

- For differentiation problems, state the rule you are using (product, quotient, chain) before applying it.
- For integration by parts or substitution, write the substitution explicitly and adjust the differential.
- For probability problems, write the probability mass function or the event in set notation before computing.
- For confidence interval problems, identify the parameter being estimated, the estimator, the standard error, and the critical value. State each step.

#### Common misconceptions (and the correction)

- "The derivative of a constant is undefined." The derivative of a constant is 0, not undefined.
- "The Poisson distribution requires the events to be rare." Poisson models events that occur at a constant average rate — they need not be rare, just independent.
- "95% confidence interval means there is a 95% probability the parameter is in this interval." The interval is fixed; the parameter is fixed; the probability statement is about the procedure, not the particular interval.

#### Specification reference

Module 1 covers the published learning units "Binomial expansion" through "Inquiry and investigation" of the CDC/HKEAA Mathematics Curriculum and Assessment Guide (Secondary 4 - 6), Module 1 (Calculus and Statistics). Single 2.5-hour paper. Confirm the live assessment framework on hkeaa.edu.hk.

---

*Last updated 2026-09-20. Source: HKDSE Mathematics Assessment Framework, https://www.hkeaa.edu.hk/DocLibrary/HKDSE/Subject_Information/math/2026hkdse-e-math.pdf; CDC/HKEAA Mathematics Curriculum and Assessment Guide (Secondary 4 - 6), https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/Math_CAGuide_e_2015.pdf. Live Module 1 unit boundaries and any in-year specification changes must be re-checked on hkeaa.edu.hk before committing a revision plan to a student.*