---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-004
topicName: Limits
weight: 5
country: india
generated: "2026-03-24T08:32:07.935122"
diagramPrompt: Mathematical diagram showing Limits concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Limits

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Definition:**
$\lim_{x \to a} f(x) = L$ means that as $x$ gets arbitrarily close to $a$ (but not equal to $a$), $f(x)$ gets arbitrarily close to $L$.

**Standard Limits:**

1. $\lim_{x \to 0} \frac{\sin x}{x} = 1$ (where $x$ is in radians)
2. $\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$
3. $\lim_{x \to 0} \frac{\tan x}{x} = 1$
4. $\lim_{x \to 0} \frac{e^x - 1}{x} = 1$
5. $\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1$
6. $\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$

**Indeterminate Forms:** $frac{0}{0}, \frac{\infty}{\infty}, 0 \times \infty, \infty - \infty, 0^0, \infty^0, 1^\infty$

⚡ **JEE Tip:** For $\frac{0}{0}$ forms, factor and cancel, or use series expansion. For $\frac{\infty}{\infty}$, divide numerator and denominator by highest power of $x$.

⚡ **Common Mistake:** $\frac{\sin x}{x}$ limit only equals 1 when $x \to 0$ and $x$ is in radians. Always convert degrees to radians first.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Methods for Evaluating Limits:**

**1. Factorisation Method:**
For $\frac{0}{0}$ forms, if $f(a) = 0$ and $g(a) = 0$, factor $(x-a)$ from both numerator and denominator.

**2. Rationalisation:**
Use when expressions involve square roots.

**3. L'Hôpital's Rule:**
If $\lim_{x \to a} \frac{f(x)}{g(x)}$ gives $\frac{0}{0}$ or $\frac{\infty}{\infty}$, then:
$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$
Can be applied repeatedly if needed (but check conditions each time).

**4. Series Expansion:**
- $e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$
- $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$
- $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$
- $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$
- $\tan x = x + \frac{x^3}{3} + \frac{2x^5}{15} + \cdots$

**Special Limit Forms:**

**Sandwich Theorem:** If $f(x) \leq g(x) \leq h(x)$ near $a$ and $\lim f(x) = \lim h(x) = L$, then $\lim g(x) = L$.

**Exponential Limit:** $\lim_{x \to 0} (1 + x)^{1/x} = e$.

**Worked Examples:**

*Example 1:* Evaluate $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$.
Factor: $\frac{(x+2)(x-2)}{x-2} = x + 2$. At $x = 2$: limit $= 4$.

*Example 2:* Evaluate $\lim_{x \to 0} \frac{\sin 5x}{x}$.
Using $\lim_{x \to 0} \frac{\sin x}{x} = 1$: $\frac{\sin 5x}{x} = \frac{\sin 5x}{5x} \cdot 5$. As $x \to 0$, $\frac{\sin 5x}{5x} \to 1$. So limit $= 5$.

*Example 3 (JEE 2021):* Evaluate $\lim_{x \to 0} \frac{\cos x - 1 + \frac{x^2}{2}}{x^4}$.
Using Maclaurin series: $\cos x = 1 - \frac{x^2}{2} + \frac{x^4}{24} - \cdots$.
So $\cos x - 1 + \frac{x^2}{2} = \frac{x^4}{24} + O(x^6)$.
Dividing by $x^4$: limit $= \frac{1}{24}$.

*Example 4:* Evaluate $\lim_{x \to \infty} \frac{x^2 + 3x}{2x^2 + 5}$.
Divide numerator and denominator by $x^2$: $\frac{1 + \frac{3}{x}}{2 + \frac{5}{x^2}} \to \frac{1}{2}$ as $x \to \infty$.

*Example 5:* Evaluate $\lim_{x \to 0} \frac{e^x - e^{-x}}{\sin x}$.
Using series: $e^x - e^{-x} = (1+x+\frac{x^2}{2}+\cdots) - (1-x+\frac{x^2}{2}-\cdots) = 2x + O(x^3)$.
$\sin x = x - \frac{x^3}{6} + O(x^5)$.
So $\frac{2x + O(x^3)}{x + O(x^3)} \to 2$ as $x \to 0$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Extended Algebraic Manipulations:**

For limits of form $1^\infty$:
$$\lim_{x \to a} [f(x)]^{g(x)} = e^{\lim_{x \to a} (f(x) - 1) \cdot g(x)}$$

For forms like $\infty^0$ or $0^0$, take logarithm:
Let $L = \lim f(x)^{g(x)}$, then $\ln L = \lim g(x) \cdot \ln f(x)$.

**Standard Results for Reference:**

- $\lim_{x \to 0} \frac{a^x - 1}{x} = \ln a$ for $a > 0$
- $\lim_{x \to 0} \frac{(1+x)^n - 1}{x} = n$
- $\lim_{x \to 0} \frac{\tan x - \sin x}{x^3} = \frac{1}{2}$ (derived from series)
- $\lim_{x \to 0} \frac{\sin x - x}{x^3} = -\frac{1}{6}$
- $\lim_{x \to 0} \frac{\cos x - 1 + \frac{x^2}{2}}{x^4} = \frac{1}{24}$

**Nth Derivative Using Limits:**

$f^{(n)}(a) = \lim_{h \to 0} \frac{f^{(n-1)}(a+h) - f^{(n-1)}(a)}{h}$, applied recursively.

**Continuity and Differentiability Connection:**

If $\lim_{x \to a^+} f(x) = \lim_{x \to a^-} f(x) = f(a)$, then $f$ is continuous at $a$.
If $f$ is differentiable at $a$, it must be continuous at $a$ (but not conversely).

**Advanced Limit Problems:**

*Problem 1 (JEE Advanced 2019):* Evaluate $\lim_{n \to \infty} \frac{1 + 2 + 3 + \cdots + n}{n^2}$.

$\lim_{n \to \infty} \frac{n(n+1)}{2n^2} = \lim_{n \to \infty} \frac{n+1}{2n} = \frac{1}{2}$.

*Problem 2:* Evaluate $\lim_{x \to 0} \frac{\sin(\pi \sin x)}{x}$.

As $x \to 0$, $\sin x \approx x$, so $\sin(\pi \sin x) \approx \sin(\pi x) \approx \pi x$.
So limit $\approx \frac{\pi x}{x} = \pi$.

*Problem 3:* Evaluate $\lim_{x \to 0} \left(\frac{\sin x}{x}\right)^{1/x^2}$.

Let $L = \lim_{x \to 0} \left(\frac{\sin x}{x}\right)^{1/x^2}$.
$\ln L = \lim_{x \to 0} \frac{\ln(\sin x) - \ln(x)}{x^2}$.
Using series: $\sin x = x - \frac{x^3}{6} + \cdots$.
$\ln(\sin x) = \ln x + \ln(1 - \frac{x^2}{6} + \cdots) = \ln x - \frac{x^2}{6} + O(x^4)$.
So $\ln(\sin x) - \ln x = -\frac{x^2}{6} + O(x^4)$.
Then $\ln L = \lim_{x \to 0} \frac{-x^2/6 + O(x^4)}{x^2} = -\frac{1}{6}$.
So $L = e^{-1/6}$.

*Problem 4 (L'Hôpital repeated):* Evaluate $\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$.

Direct substitution gives $\frac{0}{0}$. Apply L'Hôpital:
Derivative numerator: $e^x - 1$; derivative denominator: $2x$.
New limit: $\lim_{x \to 0} \frac{e^x - 1}{2x} = \frac{1}{2}$ (since $\lim_{x \to 0} \frac{e^x - 1}{x} = 1$).

**JEE Advanced Patterns (2018–2024):**
- Series expansion limits appear frequently (especially with $\sin$, $\cos$, $e^x$)
- $1^\infty$ form has appeared multiple times in recent papers
- Repeated L'Hôpital applications tested in 2020, 2022
- Limits involving trigonometric functions and logarithms in combination are common
- Sandwich theorem used in 2021 for non-polynomial bounds

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
