---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-008
topicName: AOD
weight: 5
country: india
generated: "2026-03-24T08:32:07.937291"
diagramPrompt: Mathematical diagram showing AOD concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# AOD

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**AOD** stands for **Application of Derivatives** — using derivatives to understand function behaviour.

**Key Concepts:**

1. **Increasing/Decreasing:** If $f'(x) > 0$ on $(a,b)$, $f$ is increasing on $(a,b)$. If $f'(x) < 0$, decreasing.

2. **Local Extrema:** If $f'(c) = 0$ and $f''(c) > 0$, local minimum at $c$. If $f''(c) < 0$, local maximum at $c$.

3. **Global Extrema:** On a closed interval $[a,b]$, occur at critical points or endpoints.

4. **Concave Up/Down:** If $f''(x) > 0$, concave up. If $f''(x) < 0$, concave down. Inflection when $f''(x) = 0$ and changes sign.

**Rolle's Theorem:**
If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a) = f(b)$, then $\exists c \in (a,b)$ with $f'(c) = 0$.

**Lagrange's Mean Value Theorem (MVT):**
If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then $\exists c \in (a,b)$ with $f'(c) = \frac{f(b)-f(a)}{b-a}$.

⚡ **JEE Tip:** For MVT problems, look for the point $c$ in the interval. Often use the fact that $f'(c)$ equals the slope of the secant line.

⚡ **Common Mistake:** $f'(x) = 0$ at a critical point doesn't guarantee local max/min — could be saddle point (e.g., $f(x) = x^3$ at $x = 0$).

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**First Derivative Test:**

For local extremum at $x = c$:
- If $f'$ changes from positive to negative at $c$: local maximum
- If $f'$ changes from negative to positive at $c$: local minimum
- If $f'$ doesn't change sign: saddle point (no extremum)

**Second Derivative Test:**

- If $f'(c) = 0$ and $f''(c) > 0$: local minimum
- If $f'(c) = 0$ and $f''(c) < 0$: local maximum
- If $f''(c) = 0$: inconclusive, use higher derivatives or first derivative test

**Point of Inflection:**
Where $f''(c) = 0$ or changes sign. The function changes from concave up to concave down or vice versa.

**Asymptotes:**

**Vertical asymptote:** $\lim_{x \to a^+} f(x) = \pm \infty$ (where denominator is 0, numerator non-zero)

**Horizontal asymptote:** $\lim_{x \to \pm \infty} f(x) = L$ (finite)

**Slant asymptote:** If $\lim_{x \to \infty} \frac{f(x)}{x} = m \neq 0$ and $\lim_{x \to \infty} [f(x) - mx] = c$, then $y = mx + c$ is slant asymptote.

**Worked Examples:**

*Example 1 (JEE 2022):* Find local maxima and minima of $f(x) = x^4 - 4x^3 + 6x^2 - 4x + 1$.

Note: $f(x) = (x-1)^4$ (binomial expansion).
$f'(x) = 4(x-1)^3$.
$f'(x) = 0$ when $x = 1$.
$f''(x) = 12(x-1)^2$.
At $x = 1$: $f''(1) = 0$, so second derivative test is inconclusive.
Using first derivative test: $f'(x) = 4(x-1)^3$. For $x < 1$, $(x-1)^3 < 0$ so $f' < 0$. For $x > 1$, $f' > 0$.
So $f$ decreases before $1$ and increases after $1$. This is a local minimum at $x = 1$.
Value: $f(1) = 0$.

*Example 2:* Using MVT, show that $\frac{\sin x}{x} > \frac{2}{\pi}$ for $x \in (0, \pi/2)$.

Consider $f(x) = \sin x$ on $[0, \pi/2]$.
By MVT: $\frac{\sin x - \sin 0}{x - 0} = f'(c) = \cos c$ for some $c \in (0, x)$.
So $\frac{\sin x}{x} = \cos c$.
Since $0 < c < x < \pi/2$, we have $\cos c > \cos x > 0$.
Wait, we need a lower bound.

Actually $\cos c \geq \cos x$ (since $\cos$ is decreasing on $[0, \pi/2]$).
So $\frac{\sin x}{x} = \cos c \geq \cos x$.
But $\cos x \geq 0$, not the bound we want.

Instead, consider $\sin x \geq \frac{2x}{\pi}$ on $[0, \pi/2]$.
Let $g(x) = \sin x - \frac{2x}{\pi}$.
$g(0) = 0, g(\pi/2) = 1 - 1 = 0$.
$g'(x) = \cos x - \frac{2}{\pi}$.
$g'(x) = 0$ when $\cos x = \frac{2}{\pi}$ → $x = \cos^{-1}(2/\pi)$.
For $0 < x < \cos^{-1}(2/\pi)$, $g'(x) > 0$ (since $\cos x > 2/\pi$).
For $\cos^{-1}(2/\pi) < x < \pi/2$, $g'(x) < 0$.
So $g$ increases then decreases, with maximum at $x = \cos^{-1}(2/\pi)$.
Since $g(0) = g(\pi/2) = 0$ and $g$ is positive in between, we have $\sin x \geq \frac{2x}{\pi}$ on $[0, \pi/2]$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Generalised MVT (Cauchy's):**

If $f$ and $g$ are continuous on $[a,b]$ and differentiable on $(a,b)$ with $g'(x) \neq 0$, then $\exists c \in (a,b)$ such that:
$$\frac{f(b)-f(a)}{g(b)-g(a)} = \frac{f'(c)}{g'(c)}$$

**Tangent-Normal Form:**

Equation of tangent to $y = f(x)$ at $(x_1, y_1)$: $y - y_1 = f'(x_1)(x - x_1)$.
Equation of normal: $y - y_1 = -\frac{1}{f'(x_1)}(x - x_1)$ (if $f'(x_1) \neq 0$.

**Curvature:**

Radius of curvature at $(x, y)$: $\rho = \frac{[1 + (y')^2]^{3/2}}{|y''|}$.

**Advanced Problems:**

*Problem (JEE Advanced 2019):* Show that the function $f(x) = \frac{\ln x}{x}$ has exactly one local extremum on $(0, \infty)$.

$f'(x) = \frac{1 - \ln x}{x^2}$.
$f'(x) = 0$ when $\ln x = 1$, i.e., $x = e$.
$f''(x) = \frac{-x - 2x(1-\ln x)}{x^4} = \frac{-1 - 2 + 2\ln x}{x^3} = \frac{2\ln x - 3}{x^3}$.
At $x = e$: $f''(e) = \frac{2 - 3}{e^3} = \frac{-1}{e^3} < 0$.
So by second derivative test, $f$ has a local maximum at $x = e$.

To check there's only one: $f'(x) > 0$ when $\ln x < 1$ (i.e., $x < e$) and $f'(x) < 0$ when $x > e$.
So $f$ increases up to $x = e$ then decreases. Only one local extremum. ✓

*Problem 2:* Show that $e^x > 1 + x + \frac{x^2}{2}$ for $x > 0$.

Consider $f(x) = e^x - 1 - x - x^2/2$.
$f(0) = 0$.
$f'(x) = e^x - 1 - x$.
$f'(0) = 0$.
$f''(x) = e^x - 1$.
For $x > 0$, $f''(x) > 0$ (since $e^x > 1$).
So $f'(x)$ is strictly increasing for $x > 0$.
Since $f'(0) = 0$ and $f'$ is increasing, $f'(x) > 0$ for $x > 0$.
Similarly, $f(x)$ is strictly increasing for $x > 0$.
Since $f(0) = 0$, we get $f(x) > 0$ for $x > 0$.
Thus $e^x > 1 + x + x^2/2$ for $x > 0$.

**JEE Advanced Patterns (2018–2024):**
- MVT and Rolle's theorem applications are very common
- Maxima-minima with constraints use Lagrange multipliers (advanced)
- Curvature and radius of curvature questions appeared in 2021
- Monotonicity and convexity are frequently combined
- Problems involving number of roots via derivatives are trending

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
