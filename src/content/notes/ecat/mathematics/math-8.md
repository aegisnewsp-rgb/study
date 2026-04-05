---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-8
topicName: Limits and Continuity
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.067765"
diagramPrompt: "Mathematical diagram showing Limits and Continuity concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style

---

# Limits and Continuity

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT exam.

**Limits:**

The limit $\lim_{x \to a} f(x) = L$ means that as $x$ gets arbitrarily close to $a$, $f(x)$ gets arbitrarily close to $L$.

**Standard Limits:**

| Form | Limit |
|---|---|
| $\lim_{x \to 0} \frac{\sin x}{x}$ | $1$ |
| $\lim_{x \to 0} \frac{1 - \cos x}{x^2}$ | $\frac{1}{2}$ |
| $\lim_{x \to 0} \frac{e^x - 1}{x}$ | $1$ |
| $\lim_{x \to 0} \frac{\ln(1+x)}{x}$ | $1$ |
| $\lim_{x \to 0} \frac{a^x - 1}{x}$ | $\ln a$ |
| $\lim_{x \to \infty} (1 + \frac{1}{x})^x$ | $e$ |
| $\lim_{x \to 0} (1+x)^{1/x}$ | $e$ |

**Indeterminate Forms:** $\frac{0}{0}$, $\frac{\infty}{\infty}$, $0 \times \infty$, $\infty - \infty$, $0^0$, $\infty^0$, $1^\infty$

**L'Hôpital's Rule:** For $\frac{0}{0}$ or $\frac{\infty}{\infty}$, if $\lim \frac{f'(x)}{g'(x)}$ exists:
$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

**Continuity:**

A function $f(x)$ is continuous at $x = a$ if:
1. $f(a)$ is defined
2. $\lim_{x \to a} f(x)$ exists
3. $\lim_{x \to a} f(x) = f(a)$

**⚡ ECAT exam tips:**
- Direct substitution first — if it gives a finite number, that's the limit
- If it gives $0/0$, try to factor and cancel, or use L'Hôpital's rule
- For trigonometric limits: always try to convert to $\sin x / x$ form
- For $x \to \infty$ in rational functions: divide numerator and denominator by the highest power of $x$

---

### 🟡 Standard — Regular Study (2d–2mo)
> For ECAT students who want genuine understanding.

**Limit by Factorisation:**

**Example:** $\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = \lim_{x \to 2} (x+2) = 4$.

**Example:** $\lim_{x \to 1} \frac{x^3 - 1}{x^2 - 1} = \lim_{x \to 1} \frac{(x-1)(x^2+x+1)}{(x-1)(x+1)} = \lim_{x \to 1} \frac{x^2+x+1}{x+1} = \frac{3}{2}$.

**Limit by Rationalising:**

**Example:** $\lim_{x \to 0} \frac{\sqrt{x+1} - 1}{x} = \lim_{x \to 0} \frac{(\sqrt{x+1} - 1)(\sqrt{x+1} + 1)}{x(\sqrt{x+1} + 1)} = \lim_{x \to 0} \frac{x}{x(\sqrt{x+1}+1)} = \frac{1}{2}$.

**Using $\sin x / x \to 1$:**

**Example:** $\lim_{x \to 0} \frac{\sin 3x}{x} = \lim_{x \to 0} \frac{\sin 3x}{3x} \cdot 3 = 3$.

**Example:** $\lim_{x \to 0} \frac{\tan x}{x} = \lim_{x \to 0} \frac{\sin x}{x \cos x} = \frac{1 \cdot 1}{1} = 1$.

**Limit at Infinity for Rational Functions:**

For $\lim_{x \to \infty} \frac{ax^m + ...}{bx^n + ...}$:
- If $m < n$: limit = $0$
- If $m = n$: limit = $a/b$
- If $m > n$: limit = $\pm\infty$ (sign depends on leading coefficients)

**Continuity — Types of Discontinuity:**

1. **Removable discontinuity**: $\lim_{x \to a} f(x)$ exists but is not equal to $f(a)$ — can be "fixed" by redefining $f(a)$.
   Example: $f(x) = \frac{x^2-1}{x-1}$ at $x=1$: limit = $2$, but $f(1)$ undefined.

2. **Jump discontinuity**: left and right limits exist but are different.
   Example: $f(x) = \begin{cases} x & x < 0 \\ x+1 & x \geq 0 \end{cases}$ at $x=0$: left limit = $0$, right limit = $1$.

3. **Infinite discontinuity**: limit is infinite.
   Example: $f(x) = 1/x$ at $x=0$: $\lim_{x \to 0^+} 1/x = +\infty$, $\lim_{x \to 0^-} 1/x = -\infty$.

**⚡ Common student mistakes:**
1. Applying L'Hôpital's rule to non-indeterminate forms
2. Forgetting that L'Hôpital's rule can be applied repeatedly (but check if the new limit is determinate)
3. Using $\sin x / x \to 1$ with degrees instead of radians — this formula requires $x$ in radians
4. Forgetting to check if the function is defined at the limit point for continuity

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for ECAT mastery of limits and continuity.

**Formal Definition of Limit (ε-δ):**

$\lim_{x \to a} f(x) = L$ means: for every $\varepsilon > 0$, there exists $\delta > 0$ such that if $0 < |x-a| < \delta$, then $|f(x) - L| < \varepsilon$.

While ECAT rarely requires this definition, understanding it clarifies what "approaching" means mathematically.

**Sandwich (Squeeze) Theorem:**

If $g(x) \leq f(x) \leq h(x)$ near $a$ and $\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L$, then $\lim_{x \to a} f(x) = L$.

**Example:** $\lim_{x \to 0} x^2 \sin(1/x) = 0$ because $-x^2 \leq x^2 \sin(1/x) \leq x^2$ and both $-x^2$ and $x^2$ tend to $0$.

**Exponential and Logarithmic Limits:**

$$\lim_{x \to 0} \frac{e^x - 1}{x} = 1$$
$$\lim_{x \to 0} \frac{a^x - 1}{x} = \ln a$$
$$\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1$$
$$\lim_{x \to 0} (1+x)^{1/x} = e$$
$$\lim_{x \to \infty} \left(1 + \frac{k}{x}\right)^x = e^k$$

**Using Standard Limits for More Complex Ones:**

**Example:** $\lim_{x \to 0} \frac{e^{2x} - 1}{\sin 3x} = \lim_{x \to 0} \frac{e^{2x} - 1}{2x} \cdot \frac{3x}{\sin 3x} \cdot \frac{2}{3} = \frac{2}{3}$.

**Example:** $\lim_{x \to 0} (1 + \sin x)^{1/x} = e^{\lim_{x \to 0} \frac{\ln(1+\sin x)}{x}} = e^{\lim_{x \to 0} \frac{\cos x}{1+\sin x} \cdot \frac{1}{1}}$ by L'Hôpital... wait: $\frac{\ln(1+\sin x)}{x}$ is $0/0$. $\frac{d}{dx}\ln(1+\sin x) = \frac{\cos x}{1+\sin x}$. At $x=0$: $\frac{1}{1} = 1$. So the limit = $e^1 = e$.

**One-sided Limits:**

- Left-hand limit: $\lim_{x \to a^-} f(x) = L_1$
- Right-hand limit: $\lim_{x \to a^+} f(x) = L_2$
- If $L_1 = L_2 = L$, the two-sided limit $\lim_{x \to a} f(x) = L$ exists

**Continuity on an Interval:**

$f(x)$ is continuous on $(a,b)$ if it is continuous at every point in $(a,b)$.
$f(x)$ is continuous on $[a,b]$ if it is continuous on $(a,b)$ and $\lim_{x \to a^+} f(x) = f(a)$ and $\lim_{x \to b^-} f(x) = f(b)$.

**Intermediate Value Theorem:**

If $f$ is continuous on $[a,b]$ and $f(a)$ and $f(b)$ have opposite signs (or one is zero), then there exists at least one $c \in (a,b)$ such that $f(c) = 0$.
This is useful for finding approximate roots.

**ECAT Previous Year Patterns:**
- Standard limits: very common
- Factorisation and rationalisation: common
- L'Hôpital's rule: common
- Continuity: common
- Limits at infinity: periodic

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
