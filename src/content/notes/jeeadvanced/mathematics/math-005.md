---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-005
topicName: Continuity
weight: 5
country: india
generated: "2026-03-24T08:32:07.935678"
diagramPrompt: "Mathematical diagram showing Continuity concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Continuity

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Definition:**
A function $f$ is continuous at $x = a$ if:
$$\lim_{x \to a} f(x) = f(a)$$

Equivalently: $\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = f(a)$.

**Types of Discontinuity:**

1. **Removable:** Limit exists but not equal to $f(a)$ (or $f(a)$ undefined)
   - Example: $f(x) = \frac{x^2-1}{x-1}$ at $x=1$ (limit is 2, but define $f(1)=3$ removes it)
2. **Jump (Finite discontinuity):** Left and right limits exist but are different
   - Example: signum function $\text{sgn}(x)$
3. **Infinite discontinuity:** One or both one-sided limits diverge to $\infty$ or $-\infty$
   - Example: $1/x$ at $x=0$

**Standard Continuous Functions:**
- Polynomials: continuous everywhere
- Rational functions: continuous wherever denominator $\neq 0$
- $\sin x, \cos x$: continuous everywhere
- $e^x, \ln x$: continuous on their domains

⚡ **JEE Tip:** To check continuity of $f(x) = \frac{g(x)}{h(x)}$ at $x=a$ where $h(a) = 0$, first check if $g(a) = 0$. If both are zero, factor and cancel, or use limit.

⚡ **Common Mistake:** A function can be discontinuous even if its derivative exists (e.g., $f(x) = |x|$ is continuous but not differentiable at $0$ — actually check: $|x|$ IS continuous at $0$). Example of continuous but not differentiable: $f(x) = |x|$ at $0$ IS differentiable from neither side... wait, $f(x) = |x|$ is continuous at 0, derivative doesn't exist there. For a function that's continuous but not differentiable, think $f(x) = x^{1/3}$ at $0$ or the famous Weierstrass function (nowhere differentiable but continuous everywhere).

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Continuity on an Interval:**

- $f$ is continuous on $(a,b)$ if continuous at every point in $(a,b)$
- $f$ is continuous on $[a,b]$ if continuous on $(a,b)$ and $\lim_{x \to a^+} f(x) = f(a)$ and $\lim_{x \to b^-} f(x) = f(b)$

**Intermediate Value Theorem (IVT):**
If $f$ is continuous on $[a,b]$ and $k$ is between $f(a)$ and $f(b)$, then there exists $c \in [a,b]$ such that $f(c) = k$.

**Properties:**

If $f$ and $g$ are continuous at $a$, then:
- $f+g$ is continuous at $a$
- $f \cdot g$ is continuous at $a$
- $\frac{f}{g}$ is continuous at $a$ if $g(a) \neq 0$

**Composite Function:**
If $f$ is continuous at $a$ and $g$ is continuous at $f(a)$, then $g \circ f$ is continuous at $a$.

**Uniform Continuity:**

$f$ is uniformly continuous on $I$ if $\forall \epsilon > 0, \exists \delta > 0$ such that $|x-y| < delta$ implies $|f(x)-f(y)| < \epsilon$.

Key distinction: $\delta$ depends only on $\epsilon$ (not on $x$). Uniform continuity on a closed bounded interval implies continuity.

**Worked Examples:**

*Example 1:* Check continuity of $f(x) = \begin{cases} x^2 & x < 2 \\ 3x-2 & x \geq 2 \end{cases}$ at $x=2$.

$\lim_{x \to 2^-} f(x) = 2^2 = 4$.
$\lim_{x \to 2^+} f(x) = 3(2)-2 = 4$.
$f(2) = 3(2)-2 = 4$.
Since all three are 4, $f$ is continuous at $x=2$.

*Example 2 (JEE 2021):* For what value of $k$ is $f(x) = \begin{cases} \frac{\sin 3x}{x} & x \neq 0 \\ k & x = 0 \end{cases}$ continuous at $x=0$?

We need $\lim_{x \to 0} \frac{\sin 3x}{x} = f(0) = k$.
$\lim_{x \to 0} \frac{\sin 3x}{x} = 3 \cdot \frac{\sin 3x}{3x} \to 3 \cdot 1 = 3$.
So $k = 3$.

*Example 3:* Show that $f(x) = \frac{1}{x}$ is not uniformly continuous on $(0,1)$.

We need to find $\epsilon > 0$ such that for all $\delta > 0$, there exist $x,y \in (0,1)$ with $|x-y| < \delta$ but $|f(x)-f(y)| \geq \epsilon$.

Take $\epsilon = 1$.
For any $\delta > 0$, choose $n$ large so $1/n < \delta$.
Let $x = 1/(2n), y = 1/n$.
Then $|x-y| = 1/(2n) < \delta$ for large $n$.
$|f(x)-f(y)| = |2n - n| = n \geq 1$.
Since $\delta$ can be made arbitrarily small, this violates uniform continuity.

Note: $f(x) = 1/x$ IS continuous on $(0,1)$ but NOT uniformly continuous.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Continuity and Differentiability:**

If $f$ is differentiable at $a$, then $f$ is continuous at $a$.
Converse is false: $f(x) = |x|$ is continuous at $0$ but not differentiable at $0$.

**Types of Discontinuities in Classification:**

1. **Limitable discontinuities** (both one-sided limits exist):
   - Removable (limit = finite value)
   - Jump (finite but unequal one-sided limits)
   
2. **Non-limitable discontinuities** (at least one one-sided limit is infinite):
   - Infinite discontinuity
   - Oscillatory discontinuity (e.g., $\sin(1/x)$ at $0$)

**Special Limits and Continuity:**

$f(x) = \sin(1/x)$ for $x \neq 0$ and $f(0) = 0$:
- One-sided limits do not exist (oscillatory)
- Not removable
- The limit $\lim_{x \to 0} \sin(1/x)$ does not exist (oscillates between -1 and 1)

**Weierstrass Function:**
$f(x) = \sum_{n=0}^{\infty} a^n \cos(b^n \pi x)$ with $0 < a < 1$ and $b$ odd integer $> 1/a$.
This function is continuous everywhere but differentiable nowhere.

**Advanced Problems:**

*Problem (JEE Advanced 2023):* Let $f: \mathbb{R} \to \mathbb{R}$ be continuous and $f(f(x)) = x$ for all $x \in \mathbb{R}$. Prove that there exists $c \in \mathbb{R}$ such that $f(c) = c$.

We know $f$ is continuous and involutive ($f = f^{-1}$).
Consider $g(x) = f(x) - x$. If $g(x) > 0$ for all $x$, then $f(x) > x$ for all $x$.
But then $f(f(x)) > f(x) > x$, contradicting $f(f(x)) = x$.
Similarly $g(x) < 0$ for all $x$ gives contradiction.
So by IVT (since $g$ is continuous), there exists $c$ with $g(c) = 0$, i.e., $f(c) = c$.

*Problem:* Prove that every polynomial of odd degree has at least one real root.

Let $P(x)$ be polynomial of odd degree $n$.
As $x \to \infty$, $P(x) \sim a_n x^n$ where $a_n > 0$ (or $< 0$ depending).
So $\lim_{x \to \infty} P(x) = \infty$ and $\lim_{x \to -\infty} P(x) = -\infty$ (for $a_n > 0$).
Since $P$ is continuous (polynomial), by IVT there exists $c$ with $P(c) = 0$.

**JEE Advanced Patterns (2018–2024):**
- IVT applications are very common in proving existence of roots
- Continuity of composite functions tested in 2020
- Continuity with parameters (finding $k$ for continuity) is frequent
- Uniform continuity questions are rare but appear in tough sets
- Discontinuity classification appeared in 2019, 2022

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
