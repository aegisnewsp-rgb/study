---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-17
topicName: Partial Fractions
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.072959"
lastUpdated: "2026-07-05"
diagramPrompt: "Mathematical diagram showing Partial Fractions concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Partial Fractions

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Partial fraction decomposition** rewrites a proper rational function $\frac{P(x)}{Q(x)}$ (where $\deg P < \deg Q$) as a sum of simpler fractions whose denominators are the linear and irreducible quadratic factors of $Q(x)$.

#### Four decomposition templates to memorise:

| Denominator factor | Numerator template |
|---|---|
| Distinct linear $(x-a)$ | $\dfrac{A}{x-a}$ |
| Repeated linear $(x-a)^k$ | $\dfrac{A_1}{x-a} + \dfrac{A_2}{(x-a)^2} + \cdots + \dfrac{A_k}{(x-a)^k}$ |
| Irreducible quadratic $ax^2+bx+c$ | $\dfrac{Ax+B}{ax^2+bx+c}$ (always linear numerator) |
| Repeated irreducible quadratic | $\sum \dfrac{A_i x + B_i}{(ax^2+bx+c)^i}$ |

**Two solving routes:** the **cover-up (Heaviside) method** plugs $x=a$ for distinct linear factors; **equating coefficients** is used otherwise. ECAT almost always tests this as a setup step for **integration of rational functions**.

---

### 🟡 Standard — Regular Study
> Standard content for students with a few days to months.

#### Setting Up the Decomposition

A rational function $\frac{P(x)}{Q(x)}$ must first be **proper** — i.e. $\deg P < \deg Q$. If $\deg P \geq \deg Q$, perform **polynomial long division** first:

$$\frac{P(x)}{Q(x)} = \text{polynomial} + \frac{R(x)}{Q(x)}$$

Only the remainder $R(x)/Q(x)$ can be decomposed. Skipping this step is the most common reason students get a wrong answer on ECAT.

#### Form of the Decomposition

Let $Q(x)$ factor over the reals as:

$$Q(x) = (x-a_1)(x-a_2)\cdots(x-a_r)\,(x-b_1)^{m_1}\cdots(ax^2+bx+c)^{n_1}\cdots$$

Then:

$$\frac{P(x)}{Q(x)} = \sum_{i=1}^{r}\frac{A_i}{x-a_i} + \sum_{j=1}^{m_1}\frac{B_j}{(x-b_1)^j} + \sum_{k=1}^{n_1}\frac{C_k x + D_k}{(ax^2+bx+c)^k} + \cdots$$

#### Solving for the Constants

**Cover-up method (Heaviside):** For a distinct linear factor $(x-a)$:

$$A = \left.\frac{P(x)}{Q(x)/(x-a)}\right|_{x=a}$$

This instantly gives the constant without expanding any algebra.

**Equating coefficients:** Multiply through by $Q(x)$, expand, and match coefficients of like powers of $x$. This is required whenever a quadratic or repeated factor appears.

#### Worked Micro-Example

Decompose $\dfrac{5x+7}{(x+1)(x+3)}$.

Write $\dfrac{5x+7}{(x+1)(x+3)} = \dfrac{A}{x+1} + \dfrac{B}{x+3}$, so $5x+7 = A(x+3)+B(x+1)$.

- At $x=-1$: $2 = 2A \Rightarrow A = 1$.
- At $x=-3$: $-8 = -2B \Rightarrow B = 4$.

Result: $\dfrac{1}{x+1} + \dfrac{4}{x+3}$.

#### Why ECAT Tests This

Partial fractions is the gateway technique for integrating functions like $\int \frac{dx}{(x-a)(x-b)}$ and for finding **inverse Laplace transforms** in engineering mathematics. ECAT items usually present a rational function and ask either for the decomposed form or for the integral built on it. Quadratic factors appear frequently, so remember: the numerator must be **linear** ($\text{constant}$ alone is wrong).

---

### 🔴 Extended — Deep Study
> Comprehensive coverage for students on a longer study timeline.

#### Irreducibility Check

A quadratic $ax^2+bx+c$ is **reducible** over the reals iff discriminant $D=b^2-4ac \geq 0$. If $D < 0$, it is irreducible and contributes a $\dfrac{Ax+B}{ax^2+bx+c}$ term; if $D \geq 0$, refactor into linear terms and treat those normally. Misclassifying a reducible quadratic wastes a step and usually produces two conflicting answers.

#### Edge Cases

- **Repeated irreducible quadratic** $(ax^2+bx+c)^2$ requires **two** terms: $\dfrac{Ax+B}{ax^2+bx+c} + \dfrac{Cx+D}{(ax^2+bx+c)^2}$. Using only one term leaves a degree mismatch.
- **Degenerate case:** If the original numerator and denominator share a common factor, cancel first; otherwise the decomposition has non-existent terms.
- **Coefficient symmetry:** When $Q(x)$ is even or has symmetric roots (e.g. $(x-a)(x+a)$), expect $A$ and $B$ to be equal in magnitude with opposite signs, which can verify a quick answer.

#### Connection to Integration

After decomposition, the integrals collapse into standard forms:

- $\displaystyle\int \frac{dx}{x-a} = \ln|x-a| + C$
- $\displaystyle\int \frac{Ax+B}{ax^2+bx+c}\,dx = \frac{A}{2a}\ln|ax^2+bx+c| + \frac{2Ba-bA}{a\sqrt{4ac-b^2}}\arctan\!\left(\frac{2ax+b}{\sqrt{4ac-b^2}}\right) + C$

This is why ECAT pairs partial fractions with logarithmic and arctan answers.

#### Common Mistakes

1. Decomposing an **improper** fraction without long division first.
2. Writing $\dfrac{A}{x^2+1}$ instead of $\dfrac{Ax+B}{x^2+1}$ for the quadratic $x^2+1$.
3. Dropping the higher-power term on a repeated factor, e.g. omitting $\dfrac{B}{(x-a)^2}$ for $(x-a)^2$.
4. Sign errors when applying the cover-up method at $x=-a$ versus $x=a$.
5. Stopping after finding some constants but not verifying by recombining.

#### Practice Prompts

1. Decompose $\dfrac{3x^2+2x+1}{(x-1)(x^2+2)}$ and identify each constant using the cover-up for the linear part and equating coefficients for the quadratic part.
2. Resolve $\dfrac{x+2}{(x+1)^2}$ into partial fractions, then integrate the result explicitly.

#### Exam Strategy

ECAT allocates roughly **3 %** of the MCQ paper to this topic, typically as one direct decomposition question or as a sub-step inside an integration problem. Time budget: under 90 seconds per item when the factorisation is clean; up to 3 minutes when quadratics dominate. Always factor the denominator completely on paper before writing any template — incomplete factorisation is the single largest source of avoidable errors in this topic.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
