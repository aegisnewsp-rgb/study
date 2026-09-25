---
exam: acsee
examName: "ACSEE (Tanzania)"
subject: mathematics
subjectName: "Mathematics"
topic: mathem-001
topicName: "Differentiation"
weight: 5
country: tanzania
generated: "2026-09-25T12:15:00"
lastUpdated: "2026-09-25"
---
# Differentiation — ACSEE (Tanzania)

Differentiation is the heaviest topic on the ACSEE Advanced Mathematics syllabus. The NECTA 142/1 paper carries the bulk of calculus questions, and differentiation questions are commonly weighted at around one fifth of the total marks on that paper. The exam tests three things in roughly increasing order of difficulty: the mechanics of differentiation (rules and their application), the geometric reading of the derivative as slope of tangent / normal, and the analytic uses — maxima and minima, rates of change, and simple curve sketching. Strong performance here pulls up the entire NECTA 142 grade.

> Verify the live syllabus, examination format, and any in-year changes on https://necta.go.tz before planning around the figures below.

### 🟢 Lite — Quick Review (1h-1d)
> Survive Paper 1 by re-learning the rules you once knew.

**Limit definition:**
$$\frac{dy}{dx} = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

Read it as "rate of change of $y$ with respect to $x$" — and remember that a derivative is a slope.

**Eight rules, eight lines:**
1. **Constant:** $\frac{d}{dx}(c) = 0$.
2. **Power:** $\frac{d}{dx}(x^n) = nx^{n-1}$.
3. **Constant multiple:** $\frac{d}{dx}(cf) = cf'$.
4. **Sum/difference:** $(f \pm g)' = f' \pm g'$.
5. **Product:** $(fg)' = f'g + fg'$.
6. **Quotient:** $\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$.
7. **Chain (function of a function):** $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$.
8. **Inverse functions:** if $y = f^{-1}(x)$, then $\frac{dy}{dx} = \frac{1}{f'(y)}$.

**Three special derivatives to memorise:**
- $\frac{d}{dx}(\sin x) = \cos x$
- $\frac{d}{dx}(\cos x) = -\sin x$
- $\frac{d}{dx}(e^x) = e^x$ (also $\frac{d}{dx}(e^{kx}) = ke^{kx}$)

**Equation of tangent and normal at $x = a$ on $y = f(x)$:**
- Slope of tangent $m_T = f'(a)$.
- Slope of normal $m_N = -1/f'(a)$.
- Tangent: $y - f(a) = f'(a)(x - a)$.
- Normal: $y - f(a) = -\frac{1}{f'(a)}(x - a)$.

⚡ **Exam tip:** Always check differentiability at the boundary before writing $f'$. Corner points ($|x|$ at 0, for example) do not have a unique tangent.

---

### 🟡 Standard — Exam Prep (3d-3w)
> Reach the B-grade band on calculus without panic.

**Worked example 1 — chain rule.** Differentiate $y = \sin(3x^2 + 1)$ with respect to $x$.
- Outer function: $\sin u$ where $u = 3x^2 + 1$.
- $\frac{dy}{du} = \cos u$.
- $\frac{du}{dx} = 6x$.
- $\frac{dy}{dx} = \cos(3x^2 + 1) \cdot 6x = 6x \cos(3x^2 + 1)$.

**Worked example 2 — product rule.** Differentiate $y = x^2 e^{3x}$.
- $u = x^2$, $u' = 2x$; $v = e^{3x}$, $v' = 3e^{3x}$.
- $y' = u'v + uv' = 2x \cdot e^{3x} + x^2 \cdot 3e^{3x} = e^{3x}(2x + 3x^2) = xe^{3x}(2 + 3x)$.

**Worked example 3 — quotient rule.** Differentiate $y = \frac{\ln x}{x^2}$.
- $u = \ln x$, $u' = 1/x$; $v = x^2$, $v' = 2x$.
- $y' = \frac{u'v - uv'}{v^2} = \frac{(1/x)(x^2) - (\ln x)(2x)}{x^4} = \frac{x - 2x\ln x}{x^4} = \frac{1 - 2\ln x}{x^3}$.

**Worked example 4 — implicit differentiation.** Find $\frac{dy}{dx}$ for $x^2 + y^2 = 25$.
- Differentiate both sides with respect to $x$: $2x + 2y \frac{dy}{dx} = 0$.
- $\frac{dy}{dx} = -\frac{x}{y}$.
- This is the slope of the tangent to the circle at $(x, y)$.

**Maxima and minima (analytic method).** Given a differentiable $y = f(x)$:
1. Set $f'(x) = 0$ to find stationary points.
2. Second derivative test: $f''(x_0) > 0$ → minimum; $f''(x_0) < 0$ → maximum; $f''(x_0) = 0$ → inconclusive (use first-derivative sign test).
3. State the value of $x_0$ and the coordinates of the stationary point, then classify.

**Worked example 5 — maximum box.** A rectangular box with a square base and open top has a surface area of $108 \text{ cm}^2$. Find the dimensions that maximise the volume.
- Let $x$ = side of base, $h$ = height.
- Surface area: $x^2 + 4xh = 108 \Rightarrow h = (108 - x^2)/(4x)$.
- Volume: $V = x^2 h = x^2 \cdot (108 - x^2)/(4x) = (108x - x^3)/4$.
- $\frac{dV}{dx} = (108 - 3x^2)/4 = 0 \Rightarrow x^2 = 36 \Rightarrow x = 6$ cm.
- $h = (108 - 36)/(24) = 72/24 = 3$ cm.
- $V_{max} = 6^2 \times 3 = 108$ cm³.
- Verify maximum: $\frac{d^2V}{dx^2} = -6x/4 = -9/2 < 0$ at $x = 6$. ✓

**Rates of change.** Read the question as a chain-rule problem. If $V$ is the volume of a sphere $V = \frac{4}{3}\pi r^3$ and $r$ is changing with time, then $\frac{dV}{dt} = \frac{dV}{dr} \cdot \frac{dr}{dt} = 4\pi r^2 \cdot \frac{dr}{dt}$. Substitute knowns; pay attention to signs (a deflating balloon has $\frac{dr}{dt} < 0$).

**Worked example 6 — related rates.** A spherical balloon is being inflated so that its volume increases at $50 \text{ cm}^3/\text{s}$. How fast is the radius changing when $r = 10$ cm?
- $\frac{dV}{dt} = 50$, find $\frac{dr}{dt}$ at $r = 10$.
- $V = \frac{4}{3}\pi r^3 \Rightarrow \frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$.
- $\frac{dr}{dt} = \frac{50}{4\pi \cdot 100} = \frac{50}{400\pi} = \frac{1}{8\pi}$ cm/s $\approx 0.0398$ cm/s.

**Curve sketching essentials.** Given $y = f(x)$:
- Find $f'(x)$ and solve $f'(x) = 0$ (stationary points).
- Find $f''(x)$ and solve $f''(x) = 0$ (inflection points — where the curve changes concavity).
- Determine $\lim_{x \to \pm\infty} f(x)$ (end behaviour).
- Find intercepts: set $x = 0$ and $y = 0$.
- For rational functions, find vertical and oblique asymptotes.

**Practice set:**
1. Differentiate: (a) $y = (3x^2 - 1)^5$, (b) $y = x \sin x$, (c) $y = \frac{x}{x^2 + 1}$.
2. Find the slope of the tangent to $y = e^{2x}$ at $x = 1$.
3. Find the stationary points of $y = x^3 - 6x^2 + 9x + 2$ and classify them.
4. A cone has radius $r = 3t$ and height $h = 6t$ cm, with $t$ in seconds. At $t = 2$ s, how fast is the volume changing?
5. The sum of two positive numbers is 20. Find the numbers if their product is maximised.

Answers:
1. (a) $30x(3x^2 - 1)^4$. (b) $\sin x + x\cos x$. (c) $\frac{(x^2 + 1) - x(2x)}{(x^2 + 1)^2} = \frac{1 - x^2}{(x^2 + 1)^2}$.
2. $\frac{dy}{dx} = 2e^{2x}$; at $x = 1$, slope = $2e^2 \approx 14.78$.
3. $y' = 3x^2 - 12x + 9 = 3(x-1)(x-3) = 0 \Rightarrow x = 1, 3$. $y''(1) = 6 - 12 = -6 < 0$ → maximum at $(1, 6)$. $y''(3) = 18 - 12 = 6 > 0$ → minimum at $(3, -2)$.
4. $V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi (3t)^2 (6t) = 18\pi t^3$. $\frac{dV}{dt} = 54\pi t^2$. At $t = 2$: $216\pi$ cm³/s ≈ 678.6 cm³/s.
5. Let $x + y = 20$, $P = xy = x(20 - x) = 20x - x^2$. $\frac{dP}{dx} = 20 - 2x = 0 \Rightarrow x = 10$. So both numbers are 10, $P_{max} = 100$.

---

### 🔴 Deep — Mastery (1mo+)
> Build the calculus that underwrites mechanics, optimisation, and analysis.

**Parametric differentiation.** If $x = x(t)$ and $y = y(t)$, then:
$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt}, \qquad \frac{d^2 y}{dx^2} = \frac{d}{dt}\!\left(\frac{dy}{dx}\right) \cdot \frac{1}{dx/dt}$$

Worked example — parametric circle. $x = a\cos\theta$, $y = a\sin\theta$.
- $\frac{dx}{d\theta} = -a\sin\theta$, $\frac{dy}{d\theta} = a\cos\theta$.
- $\frac{dy}{dx} = -\cot\theta$.
- $\frac{d^2 y}{dx^2} = \frac{d}{d\theta}(-\cot\theta) \cdot \frac{1}{-a\sin\theta} = \csc^2\theta \cdot \frac{1}{-a\sin\theta} = -\frac{1}{a\sin^3\theta}$.

This is the implicit-derivative check: $x^2 + y^2 = a^2 \Rightarrow 2x + 2y \frac{dy}{dx} = 0 \Rightarrow \frac{dy}{dx} = -x/y = -\cot\theta$. Same result.

**Logarithmic differentiation.** Used when $y$ is a product of powers or an exponential with variable base and exponent. Take $\ln$ of both sides, differentiate, then exponentiate.
Worked example — differentiate $y = x^x$ for $x > 0$.
- $\ln y = x \ln x$.
- $\frac{1}{y}\frac{dy}{dx} = \ln x + x \cdot \frac{1}{x} = \ln x + 1$.
- $\frac{dy}{dx} = x^x(\ln x + 1)$.

**Higher derivatives and Maclaurin series.** Repeated differentiation produces $f''(x)$, $f'''(x)$, $f^{(n)}(x)$. For a Maclaurin expansion:
$$f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots + \frac{f^{(n)}(0)}{n!}x^n + \cdots$$
Useful identities to derive on the day:
- $e^x = 1 + x + x^2/2! + x^3/3! + \cdots$
- $\sin x = x - x^3/3! + x^5/5! - \cdots$
- $\cos x = 1 - x^2/2! + x^4/4! - \cdots$
- $\ln(1+x) = x - x^2/2 + x^3/3 - \cdots$ (valid for $-1 < x \le 1$).

**Taylor's theorem (for non-zero expansion point):** $f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \cdots$

**L'Hôpital's rule for limits of indeterminate form.** If $\lim_{x \to a} f(x) = 0$ and $\lim_{x \to a} g(x) = 0$ (or both $\to \infty$), and the derivatives exist, then:
$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$
provided the right-hand limit exists. Work it through only after factoring has failed.

Worked example: $\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\cos x}{1} = 1$. ✓

**Newton-Raphson method.** For root-finding of $f(x) = 0$:
$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$
Convergence is quadratic if $f'(x^*) \neq 0$. Work one or two iterations to the answer required by the question.

**Mean Value Theorem (MVT).** If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists $c \in (a, b)$ such that $f'(c) = \frac{f(b) - f(a)}{b - a}$. Geometric reading: somewhere the tangent slope equals the average slope of the chord from $a$ to $b$.

**Worked example — verify the MVT for $f(x) = x^3 - 2x$ on $[1, 3]$.**
- Average slope: $\frac{f(3) - f(1)}{3 - 1} = \frac{(27 - 6) - (1 - 2)}{2} = \frac{21 - (-1)}{2} = \frac{22}{2} = 11$.
- $f'(x) = 3x^2 - 2 = 11 \Rightarrow x^2 = 13/3 \Rightarrow x = \sqrt{13/3} \approx 2.08$.
- $2.08 \in (1, 3)$ ✓.

**Maclaurin-derived limit (a frequent ACSEE-style question):** $\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$.
- Series: $e^x - 1 - x = \frac{x^2}{2} + \frac{x^3}{6} + \cdots$.
- Dividing by $x^2$: $\frac{1}{2} + \frac{x}{6} + \cdots \to \frac{1}{2}$.

### Common traps
1. **Forgetting the chain rule factor.** The derivative of $\sin(3x)$ is $3\cos(3x)$, not $\cos(3x)$. Always check whether the inside of the function depends on $x$.
2. **Misapplying the quotient rule.** The numerator is $f'g - fg'$, with $f$ on top and $g$ on the bottom; the minus sign goes with $fg'$, not with $f'g$. Slip the sign and the rest is wrong.
4. **Confusing "turning point" with "point of inflection".** A turning point has $f'(x) = 0$ and changes sign. An inflection point has $f''(x) = 0$ (or undefined) and changes concavity. They are not the same.
5. **Treating the chain rule and product rule as alternatives.** For $y = (x^2 + 1)(x^3 - 2)$, either rule works; for $y = \sin(x^2 + 1)$, only chain rule works; for $y = x^2 \sin x$, only product rule works. Mixing them up is the most common differentiable-but-wrong answer on ACSEE scripts.
6. **Forgetting the unit on a related-rates question.** If the question asks for the rate in cm³/s, the answer is a number with units. The numerical work is the same; the marker expects units on every rate.