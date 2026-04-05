---



exam: neco
examName: NECO SSCE
subject: mathematics
subjectName: Mathematics
topic: math-13
topicName: "Calculus: Differentiation"
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.669678"
diagramPrompt: "Mathematical diagram showing Calculus: Differentiation concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"



---
# Calculus: Differentiation

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your NECO exam.

**Differentiation** is the process of finding the derivative of a function. The derivative measures the rate of change of a function with respect to its variable.

**First Principles:**
$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

This gives the gradient of the tangent to the curve at any point.

**Standard Derivatives:**

| Function $f(x)$ | Derivative $f'(x)$ |
|---|---|
| $x^n$ | $nx^{n-1}$ |
| $k$ (constant) | $0$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $\frac{1}{x}$ |
| $e^{kx}$ | $ke^{kx}$ |

**Rules:**

- **Constant multiple:** $\frac{d}{dx}[k \cdot f(x)] = k \cdot f'(x)$
- **Sum/difference:** $\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$
- **Product rule:** $\frac{d}{dx}[f(x) \cdot g(x)] = f'(x)g(x) + f(x)g'(x)$
- **Quotient rule:** $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$
- **Chain rule:** $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$ (for composite functions)

⚡ **NECO Tip:** For a function like $y = (3x^2 + 5)^4$, use the chain rule: $\dfrac{dy}{dx} = 4(3x^2+5)^3 \cdot 6x = 24x(3x^2+5)^3$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for NECO Mathematics students with a few days to months.

**Derivatives of Trigonometric Functions:**

$$\frac{d}{dx}(\sin x) = \cos x, \quad \frac{d}{dx}(\cos x) = -\sin x$$
$$\frac{d}{dx}(\tan x) = \sec^2 x, \quad \frac{d}{dx}(\cot x) = -\csc^2 x$$
$$\frac{d}{dx}(\sec x) = \sec x \tan x, \quad \frac{d}{dx}(\csc x) = -\csc x \cot x$$

**Second Derivative:**
$$f''(x) = \frac{d}{dx}[f'(x)]$$
If $f'(x) = 0$ at a point and $f''(x) > 0$: local minimum.
If $f'(x) = 0$ at a point and $f''(x) < 0$: local maximum.

**Product Rule Examples:**

*Example:* Differentiate $y = x^2 \sin x$
$$\frac{dy}{dx} = 2x \sin x + x^2 \cos x$$

**Quotient Rule Example:**

*Example:* Differentiate $y = \dfrac{x}{x+1}$
$$f = x, f' = 1; g = x+1, g' = 1$$
$$\frac{dy}{dx} = \frac{1(x+1) - x(1)}{(x+1)^2} = \frac{x+1-x}{(x+1)^2} = \frac{1}{(x+1)^2}$$

**Chain Rule Examples:**

*Example:* $y = \ln(\cos x)$
$$\frac{dy}{dx} = \frac{1}{\cos x} \cdot (-\sin x) = -\tan x$$

*Example:* $y = e^{\sin x^2}$
$$\frac{dy}{dx} = e^{\sin x^2} \cdot \cos x^2 \cdot 2x = 2x \cos x^2 \cdot e^{\sin x^2}$$

**Applications of Differentiation:**

1. **Gradient of a curve:** $f'(a)$ = gradient at $x = a$
2. **Equation of tangent:** $y - y_1 = m(x - x_1)$ where $m = f'(x_1)$
3. **Rate of change:** If $V = \frac{4}{3}\pi r^3$, then $\frac{dV}{dr} = 4\pi r^2$
4. **Maximum and minimum problems:** Find where $f'(x) = 0$, then check $f''(x)$

⚡ **NECO Common Mistakes:**
- Forgetting the chain rule when differentiating composite functions
- Using the quotient rule when product rule would be simpler (e.g., $x/(x+1)$ can be written as $x(x+1)^{-1}$)
- Getting the sign wrong in the quotient rule formula
- Mixing up local maximum/minimum with absolute maximum/minimum

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for NECO and JAMB Mathematics preparation.

**Differentiation of Logarithmic Functions:**

$$\frac{d}{dx}(\ln x) = \frac{1}{x}, \quad \frac{d}{dx}(\log_a x) = \frac{1}{x \ln a}$$

**Implicit Differentiation:**

When $y$ is not isolated, differentiate both sides with respect to $x$, treating $y$ as a function of $x$ (use chain rule: $\frac{d}{dx}(y^2) = 2y\frac{dy}{dx}$).

*Example:* Differentiate $x^2 + y^2 = 25$
$$2x + 2y\frac{dy}{dx} = 0 \Rightarrow \frac{dy}{dx} = -\frac{x}{y}$$

**Differentiating Inverse Functions:**

If $y = f^{-1}(x)$, then $\frac{dy}{dx} = \frac{1}{f'(y)}$ where $y = f^{-1}(x)$.

*Example:* Find $\frac{d}{dx}(\sin^{-1} x)$
Let $y = \sin^{-1} x \Rightarrow \sin y = x$
Differentiating: $\cos y \frac{dy}{dx} = 1 \Rightarrow \frac{dy}{dx} = \frac{1}{\cos y} = \frac{1}{\sqrt{1 - \sin^2 y}} = \frac{1}{\sqrt{1 - x^2}}$

So: $\frac{d}{dx}(\sin^{-1} x) = \frac{1}{\sqrt{1-x^2}}$

**Related Rates:**

If two variables $x$ and $y$ are related by an equation and both change with time $t$:
$$\frac{dx}{dt} \text{ and } \frac{dy}{dt} \text{ are related by differentiating the equation with respect to } t$$

*Example:* A ladder 10 m long leans against a wall. The bottom slides away at 2 m/s. How fast is the top sliding down when the bottom is 6 m from the wall?
$x^2 + y^2 = 100$. Differentiate w.r.t $t$: $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$
When $x=6$: $y = \sqrt{100-36} = 8$. Given $\frac{dx}{dt} = 2$:
$2(6)(2) + 2(8)\frac{dy}{dt} = 0 \Rightarrow \frac{dy}{dt} = -\frac{24}{16} = -1.5$ m/s

**Turning Points and Curve Sketching:**

- **Stationary point:** where $f'(x) = 0$
- **Point of inflection:** where $f''(x) = 0$ and $f''(x)$ changes sign

For $y = ax^3 + bx^2 + cx + d$:
- $y' = 3ax^2 + 2bx + c = 0$ gives stationary points
- $y'' = 6ax + 2b$. If $y'' > 0$: minimum; if $y'' < 0$: maximum.

**Maclaurin Series:**
$$f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots$$

$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$
$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$

**NECO/JAMB Patterns:**
- NECO frequently asks: differentiate using product, quotient, and chain rules; find equations of tangents and normals; solve maxima/minima problems; differentiate implicit functions; find second derivatives

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
