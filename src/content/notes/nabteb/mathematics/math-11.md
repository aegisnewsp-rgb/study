---
exam: nabteb
examName: NABTEB
subject: mathematics
subjectName: Mathematics
topic: math-11
topicName: "Calculus: Differentiation"
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.551999"
diagramPrompt: "Mathematical diagram showing Calculus: Differentiation concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"

---

# "Calculus: Differentiation"

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary of differentiation for NABTEB mathematics.

**Differentiation** finds the rate of change of a function — the gradient of a curve at any point.

**The Derivative:**

If $y = f(x)$, the derivative is:
$$f'(x) = \frac{dy}{dx} = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

This gives the gradient of the tangent to the curve at any point.

**Basic Derivatives:**

| Function | Derivative |
|----------|-----------|
| $c$ (constant) | 0 |
| $x^n$ | $nx^{n-1}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $\frac{1}{x}$ |
| $e^{kx}$ | $ke^{kx}$ |

**Differentiation Rules:**

**1. Sum Rule:**
$$\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$$

**2. Difference Rule:**
$$\frac{d}{dx}[f(x) - g(x)] = f'(x) - g'(x)$$

**3. Product Rule:**
$$\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$$

**4. Quotient Rule:**
$$\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$$

**5. Chain Rule (Composite Functions):**
If $y = f(g(x))$, then:
$$\frac{dy}{dx} = f'(g(x)) \cdot g'(x)$$

Or: $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$ where $u = g(x)$

⚡ **NABTEB Exam Tip:** For $y = (3x + 2)^5$, use the chain rule: $\frac{dy}{dx} = 5(3x+2)^4 \times 3 = 15(3x+2)^4$.

---

### 🟡 Standard — Regular Study (2d–2mo)

> For NABTEB students who want thorough understanding.

**Differentiation by First Principles:**

Find $f'(x)$ for $f(x) = x^2$:

$$f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} = \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h} = \lim_{h \to 0} (2x + h) = 2x$$

**Equations of Tangents and Normals:**

**Tangent to curve at point $(x_1, y_1)$:**
$$y - y_1 = f'(x_1)(x - x_1)$$

**Normal (perpendicular to tangent):**
$$y - y_1 = -\frac{1}{f'(x_1)}(x - x_1)$$

**Example:**
Find the equation of the tangent to $y = x^2$ at $(2, 4)$.

$f'(x) = 2x$, so $f'(2) = 4$
Equation: $y - 4 = 4(x - 2) \Rightarrow y = 4x - 4$

**Stationary Points:**

Where $f'(x) = 0$. These are maximum points, minimum points, or points of inflection.

**Finding Stationary Points:**

1. Find $f'(x)$
2. Set $f'(x) = 0$ and solve for $x$
3. Find the corresponding $y$ values
4. Use the second derivative to classify

**Second Derivative Test:**
- $f''(x) > 0$: Minimum point (curve is concave up)
- $f''(x) < 0$: Maximum point (curve is concave down)
- $f''(x) = 0$: May be point of inflection — check sign change of $f'$

**Example:**
$f(x) = x^3 - 3x^2 + 2$
$f'(x) = 3x^2 - 6x = 3x(x-2)$
Stationary points when $x = 0$ or $x = 2$:
- At $x = 0$: $y = 2$; $f''(x) = 6x - 6 = -6 < 0$ → Maximum
- At $x = 2$: $y = -2$; $f''(x) = 6 > 0$ → Minimum

**⚡ NABTEB Exam Tip:** When asked for "turning points," find both the coordinates AND classify them (maximum or minimum). When asked for "maximum/minimum values," you need the y-coordinate only.

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage of differentiation for thorough NABTEB preparation.

**Derivatives of Trigonometric Functions:**

$$\frac{d}{dx}(\sin x) = \cos x$$
$$\frac{d}{dx}(\cos x) = -\sin x$$
$$\frac{d}{dx}(\tan x) = \sec^2 x$$
$$\frac{d}{dx}(\cot x) = -\csc^2 x$$
$$\frac{d}{dx}(\sec x) = \sec x \tan x$$
$$\frac{d}{dx}(\csc x) = -\csc x \cot x$$

**Derivatives of Exponential and Logarithmic Functions:**

$$\frac{d}{dx}(e^x) = e^x$$
$$\frac{d}{dx}(e^{kx}) = ke^{kx}$$
$$\frac{d}{dx}(\ln x) = \frac{1}{x}$$
$$\frac{d}{dx}(\log_a x) = \frac{1}{x \ln a}$$

**Implicit Differentiation:**

When $y$ is not isolated:

Example: $x^2 + y^2 = 25$
Differentiate both sides with respect to $x$:
$$2x + 2y\frac{dy}{dx} = 0$$
$$\frac{dy}{dx} = -\frac{x}{y}$$

**For more complex implicit functions:**
Example: $x^3 + 2xy^2 - y^5 = x$
Differentiate term by term:
$$3x^2 + 2y^2 + 4xy\frac{dy}{dx} - 5y^4\frac{dy}{dx} = 1$$
Collect $\frac{dy}{dx}$ terms:
$$\frac{dy}{dx}(4xy - 5y^4) = 1 - 3x^2 - 2y^2$$
$$\frac{dy}{dx} = \frac{1 - 3x^2 - 2y^2}{4xy - 5y^4}$$

**Parametric Differentiation:**

If $x = f(t)$ and $y = g(t)$, then:
$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{g'(t)}{f'(t)}$$

**Example:**
$x = t^2$, $y = t^3$
$$\frac{dy}{dx} = \frac{3t^2}{2t} = \frac{3t}{2}$$

**Applications of Differentiation:**

**1. Motion:**
- Position $s(t)$
- Velocity $v(t) = \frac{ds}{dt}$
- Acceleration $a(t) = \frac{dv}{dt} = \frac{d^2s}{dt^2}$

**2. Rates of Change:**
$$\frac{dA}{dr} = 2\pi r \text{ (area of circle)}$$
$$\frac{dV}{dr} = 4\pi r^2 \text{ (volume of sphere)}$$

**3. Optimisation:**
Find maximum or minimum values in practical problems.

**Example:**
A rectangular field with 100m of fencing has one side against a wall. Maximise the area.

Let $x$ = length perpendicular to wall, $y$ = length parallel to wall.
Constraint: $2x + y = 100 \Rightarrow y = 100 - 2x$
Area $A = xy = x(100-2x) = 100x - 2x^2$
$$\frac{dA}{dx} = 100 - 4x = 0 \Rightarrow x = 25$$
Maximum area: $A = 25(100-50) = 1250 \text{ m}^2$

**Higher Derivatives:**

$$f''(x) = \frac{d}{dx}\left(\frac{dy}{dx}\right) = \frac{d^2y}{dx^2}$$
$$f'''(x) = \frac{d^3y}{dx^3}$$

**Maclaurin Series:**

$$f(x) = f(0) + xf'(0) + \frac{x^2}{2!}f''(0) + \frac{x^3}{3!}f'''(0) + \ldots$$

For $e^x$:
$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \ldots$$

For $\sin x$:
$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \ldots$$

**⚡ NABTEB Quick Reference:**
- $\frac{d}{dx}(x^n) = nx^{n-1}$
- $\frac{d}{dx}(\sin x) = \cos x$
- $\frac{d}{dx}(\cos x) = -\sin x$
- $\frac{d}{dx}(e^x) = e^x$
- $\frac{d}{dx}(\ln x) = \frac{1}{x}$
- Chain rule: $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$
- Product rule: $\frac{d}{dx}(uv) = u'v + uv'$
- Quotient rule: $\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{u'v - uv'}{v^2}$
- Tangent: $y - y_1 = f'(x_1)(x - x_1)$
- Normal: $y - y_1 = -\frac{1}{f'(x_1)}(x - x_1)$
- Stationary points: $f'(x) = 0$
- Maximum: $f''(x) < 0$; Minimum: $f''(x) > 0$
- $v = \frac{ds}{dt}$; $a = \frac{dv}{dt}$
