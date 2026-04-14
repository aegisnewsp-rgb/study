---



exam: nda
examName: NDA
subject: mathematics
subjectName: Mathematics
topic: math-006
topicName: Differential Calculus
weight: 5
country: india
generated: "2026-03-24T08:32:07.807712"
diagramPrompt: "Mathematical diagram showing Differential Calculus concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Differential Calculus

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Differential Calculus is the branch of mathematics that studies rates of change and slopes of curves. The two fundamental operations are differentiation and integration, which are essentially inverse processes. In NDA mathematics, this topic carries significant weight — expect 8-12 questions from differential calculus and its applications combined.

**Essential Formulas:**

Standard derivatives you must memorise:
$$\frac{d}{dx}(x^n) = nx^{n-1}$$
$$\frac{d}{dx}(\sin x) = \cos x$$
$$\frac{d}{dx}(\cos x) = -\sin x$$
$$\frac{d}{dx}(\tan x) = \sec^2 x$$
$$\frac{d}{dx}(e^x) = e^x$$
$$\frac{d}{dx}(\ln x) = \frac{1}{x}$$

**Key Facts:**
- Derivative of a constant = 0
- $\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$
- Product rule: $\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$
- Quotient rule: $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$
- Chain rule: $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$

⚡ **Exam Tip:** For NDA Paper II, always use the chain rule when dealing with composite functions. Many students lose marks by differentiating the inner function incorrectly. Also remember: $\frac{d}{dx}(\text{constant}) = 0$ — a surprising number of candidates forget this in a rush.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding and problem-solving practice.

**Derivatives of Inverse Functions:**
$$\frac{d}{dx}(\arcsin x) = \frac{1}{\sqrt{1-x^2}}$$
$$\frac{d}{dx}(\arccos x) = -\frac{1}{\sqrt{1-x^2}}$$
$$\frac{d}{dx}(\arctan x) = \frac{1}{1+x^2}$$

**Successive Differentiation:**
The second derivative is denoted $f''(x)$ or $\frac{d^2y}{dx^2}$. The $n$th derivative follows a pattern:
- $f(x) = e^{ax} \Rightarrow f^{(n)}(x) = a^n e^{ax}$
- $f(x) = \sin(ax) \Rightarrow f^{(n)}(x) = a^n \sin(ax + n\pi/2)$
- $f(x) = x^m \Rightarrow f^{(n)}(x) = m(m-1)(m-2)...(m-n+1)x^{m-n}$ (for $n \leq m$)

**Mean Value Theorems:**

Rolle's Theorem: If $f(a) = f(b)$ and $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists $c \in (a,b)$ such that $f'(c) = 0$.

Lagrange's Mean Value Theorem (LMVT): If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists $c \in (a,b)$ such that:
$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

Cauchy's Mean Value Theorem: $\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}$

**Applications of Derivatives:**

1. **Rate of change:** If $y = f(x)$, then $\frac{dy}{dx}$ measures the instantaneous rate of change of $y$ with respect to $x$.
2. **Increasing/decreasing functions:** $f'(x) > 0 \Rightarrow f$ is increasing; $f'(x) < 0 \Rightarrow f$ is decreasing.
3. **Tangents and normals:** Equation of tangent at $(x_1, y_1)$: $y - y_1 = f'(x_1)(x - x_1)$. Equation of normal: $(y - y_1) f'(x_1) + (x - x_1) = 0$.

⚡ **NDA-Specific Tip:** Questions on approximation using differentials are common: if $y = f(x)$ and $\Delta x$ is a small change in $x$, then $\Delta y \approx dy = f'(x)\Delta x$. This is directly tested in NDA 2021 and 2023 papers.

**Common Student Mistakes:**
- Confusing the quotient rule formula (sign error in numerator)
- Forgetting the chain rule for composite functions like $\sin(3x^2)$
- Incorrectly applying product rule when only chain rule is needed

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory with derivations and exam pattern analysis.

**Indeterminate Forms and L'Hôpital's Rule:**

When $\lim_{x \to a} \frac{f(x)}{g(x)}$ gives $\frac{0}{0}$ or $\frac{\infty}{\infty}$, apply L'Hôpital's Rule:
$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

This can be applied repeatedly provided the conditions are met.

**Other indeterminate forms:**
- $0 \cdot \infty$: Convert to $\frac{0}{1/\infty}$ or $\frac{\infty}{1/0}$ type
- $\infty - \infty$: Combine into a single fraction
- $0^0$, $\infty^0$, $1^\infty$: Use logarithms: $\lim e^{\ln(\text{expression})}$

**Taylor's and Maclaurin's Series:**

$f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + ... + \frac{f^{(n)}(a)}{n!}(x-a)^n + ...$

For Maclaurin (around $a = 0$):
$f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + ...$

Standard expansions:
- $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + ...$
- $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - ...$
- $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - ...$
- $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - ...$

**Maxima and Minima:**

Critical points: where $f'(x) = 0$ or $f'(x)$ does not exist.

First Derivative Test: If $f'(x)$ changes from positive to negative at $c$, then $f(c)$ is a local maximum. If negative to positive, it's a local minimum.

Second Derivative Test: If $f''(c) < 0$, local maximum. If $f''(c) > 0$, local minimum. If $f''(c) = 0$, the test is inconclusive.

**Partial Derivatives (for functions of two variables):**
For $z = f(x, y)$:
$\frac{\partial z}{\partial x}$ = treat $y$ as constant and differentiate with respect to $x$.

**NDA Exam Pattern (2018-2024):**
- 2019: Derivative of $\tan^{-1}x$ and product rule (4 marks)
- 2020: Equation of tangent to curve $y^3 = 32x$ (3 marks)
- 2021: Rate of change problem involving cone dimensions (5 marks)
- 2022: Maxima-minima word problem (5 marks)
- 2023: Second derivative test with curve tracing (4 marks)

⚡ **Advanced Tip:** For optimization problems (maxima/minima word problems), follow this sequence: (1) Identify the variable to be optimised, (2) Express it in terms of one other variable using the given condition, (3) Find first derivative and equate to zero, (4) Verify second derivative is positive (minimum) or negative (maximum), (5) Check endpoint conditions if applicable. Many students skip step 5 and lose marks on closed-interval problems.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
