---



exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-8
topicName: "Calculus: Differentiation"
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.734864"
diagramPrompt: "Mathematical diagram showing Calculus: Differentiation concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"



---
# "Calculus: Differentiation"

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Calculus: Differentiation** — Quick Facts for JAMB

**First Principles:**
$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}$.

This definition is the foundation — it measures the instantaneous rate of change of $f$ with respect to $x$.

**Standard Derivatives:**
- $\frac{d}{dx}(x^n) = nx^{n-1}$
- $\frac{d}{dx}(\sin x) = \cos x$
- $\frac{d}{dx}(\cos x) = -\sin x$
- $\frac{d}{dx}(e^x) = e^x$
- $\frac{d}{dx}(\ln x) = \frac{1}{x}$
- $\frac{d}{dx}(\tan x) = \sec^2 x$

**Rules:**
- Sum: $\frac{d}{dx}(u + v) = u' + v'$
- Product: $\frac{d}{dx}(uv) = u'v + uv'$
- Quotient: $\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{u'v - uv'}{v^2}$
- Chain: $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$

⚡ **Exam tip:** In the quotient rule, remember the numerator is $u'v - uv'$, NOT $uv' - u'v$. The order matters.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Calculus: Differentiation** — JAMB UTME Study Guide

**Derivatives of Trigonometric Functions:**
- $\frac{d}{dx}(\sec x) = \sec x \tan x$
- $\frac{d}{dx}(\csc x) = -\csc x \cot x$
- $\frac{d}{dx}(\cot x) = -\csc^2 x$
- $\frac{d}{dx}(\arcsin x) = \frac{1}{\sqrt{1-x^2}}$
- $\frac{d}{dx}(\arccos x) = -\frac{1}{\sqrt{1-x^2}}$
- $\frac{d}{dx}(\arctan x) = \frac{1}{1+x^2}$

**Second Derivative:**
$f''(x) = \frac{d}{dx}(f'(x))$. Used to determine concavity and locate turning points:
- If $f'(x) = 0$ and $f''(x) > 0$: local minimum
- If $f'(x) = 0$ and $f''(x) < 0$: local maximum

**Turning Points and Stationary Points:**
Find where $f'(x) = 0$. Test with second derivative or first derivative test (sign of $f'$ changes from + to - = maximum, - to + = minimum).

Example: $y = x^3 - 3x^2 - 9x + 5$. $y' = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x-3)(x+1)$. Stationary points at $x = -1$ and $x = 3$. $y'' = 6x - 6$. At $x = -1$: $y'' = -12 < 0$ (maximum). At $x = 3$: $y'' = 12 > 0$ (minimum).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Calculus: Differentiation** — Comprehensive Mathematics Notes

**Differentiation from First Principles — Worked Examples:**

$f(x) = x^2$: $f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} = \lim_{h \to 0} \frac{2xh + h^2}{h} = \lim_{h \to 0} (2x + h) = 2x$.

$f(x) = \frac{1}{x}$: $f'(x) = \lim_{h \to 0} \frac{\frac{1}{x+h} - \frac{1}{x}}{h} = \lim_{h \to 0} \frac{x - (x+h)}{h \cdot x(x+h)} = \lim_{h \to 0} \frac{-1}{x(x+h)} = -\frac{1}{x^2}$.

**Implicit Differentiation:**
When $y$ is not explicitly expressed as a function of $x$, differentiate both sides with respect to $x$, treating $y$ as a function of $x$ (so $\frac{d}{dx}(y) = \frac{dy}{dx}$).

Example: $x^2 + y^2 = r^2$ (circle). Differentiate: $2x + 2y \frac{dy}{dx} = 0$. $\frac{dy}{dx} = -\frac{x}{y}$.

**Logarithmic Differentiation:**
For $y = f(x)^{g(x)}$, take ln of both sides: $\ln y = g(x) \ln f(x)$. Then differentiate: $\frac{1}{y}\frac{dy}{dx} = g'(x)\ln f(x) + g(x)\frac{f'(x)}{f(x)}$. So $\frac{dy}{dx} = y[g'(x)\ln f(x) + g(x)\frac{f'(x)}{f(x)}]$.

Example: $y = x^x$. $\ln y = x \ln x$. $\frac{1}{y}\frac{dy}{dx} = \ln x + 1$. $\frac{dy}{dx} = x^x(\ln x + 1)$.

**Parametric Differentiation:**
If $x = f(t)$ and $y = g(t)$, then $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$.

Example: $x = a\cos\theta$, $y = a\sin\theta$ (circle of radius $a$). $\frac{dx}{d\theta} = -a\sin\theta$, $\frac{dy}{d\theta} = a\cos\theta$. $\frac{dy}{dx} = \frac{a\cos\theta}{-a\sin\theta} = -\cot\theta$.

**Rate of Change:**
$\frac{dy}{dx}$ gives the rate of $y$ with respect to $x$. If $A = \pi r^2$ (area of circle), then $\frac{dA}{dr} = 2\pi r$ (rate of area increase with radius). If both $r$ and $t$ vary with time, $\frac{dA}{dt} = 2\pi r \frac{dr}{dt}$.

Example: A stone dropped into a lake creates circular ripples. Radius increases at 3 cm/s. Find rate of area increase when $r = 10$ cm. $\frac{dA}{dt} = 2\pi r \frac{dr}{dt} = 2\pi(10)(3) = 60\pi$ cm²/s.

**Taylor Series:**
$f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + ...$

$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + ...$ (valid for all $x$).
$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - ...$ (valid for all $x$).
$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - ...$ (valid for all $x$).
$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - ...$ (valid for $|x| < 1$).

**JAMB Pattern Analysis:**
JAMB questions frequently test: (1) Product rule and quotient rule for specific functions, (2) Finding stationary points and classifying them, (3) Chain rule for composite functions, (4) Equations of tangents and normals ($m_{tangent} = f'(a)$, $m_{normal} = -1/f'(a)$), (5) Rate of change problems. Common error: forgetting the chain rule when differentiating $\sin(x^2)$ — answer is $2x\cos(x^2)$, not $\cos(x^2)$. JAMB 2022: "Find the equation of the tangent to $y = x^3 - 3x$ at $x = 1$." Answer: At $x = 1$, $y = 1 - 3 = -2$. $y' = 3x^2 - 3 = 3(1) - 3 = 0$. Tangent: $y + 2 = 0(x - 1)$ → $y = -2$.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
