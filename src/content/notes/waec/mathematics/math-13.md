---
exam: waec
examName: WAEC WASSCE
subject: mathematics
subjectName: Mathematics
topic: math-13
topicName: Differentiation and Integration (Calculus)
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.623534"
diagramPrompt: Mathematical diagram showing Differentiation and Integration (Calculus) concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style
---

# Differentiation and Integration (Calculus)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your WAEC exam.

**Differentiation - The Derivative:**

The derivative of $y$ with respect to $x$ is the rate of change of $y$ with respect to $x$.

$$\frac{dy}{dx} = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

**Standard Derivatives:**

| Function | Derivative |
|----------|-----------|
| $x^n$ | $nx^{n-1}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $\frac{1}{x}$ |
| $e^{kx}$ | $ke^{kx}$ |

**Rules:**

1. **Sum Rule:** $\frac{d}{dx}(u + v) = \frac{du}{dx} + \frac{dv}{dx}$

2. **Product Rule:** $\frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx}$

3. **Quotient Rule:** $\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}$

4. **Chain Rule:** $\frac{dy}{dx} = \frac{dy}{du} \times \frac{du}{dx}$

⚡ **WAEC Tip**: For polynomials, just apply the power rule term by term. For $\frac{d}{dx}(5x^3 + 2x) = 15x^2 + 2$. It's that simple.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Differentiation Examples:**

**Example 1:** Find $\frac{dy}{dx}$ if $y = 3x^4 + 2x - 5$

$$\frac{dy}{dx} = 12x^3 + 2$$

**Example 2:** Find derivative of $y = (2x + 1)^3$

Using chain rule: $\frac{dy}{dx} = 3(2x+1)^2 \times 2 = 6(2x+1)^2$

**Example 3:** Find derivative of $y = x^2 \sin x$

Using product rule:
$u = x^2$, $\frac{du}{dx} = 2x$
$v = \sin x$, $\frac{dv}{dx} = \cos x$
$$\frac{dy}{dx} = x^2 \cos x + 2x \sin x$$

**Example 4:** Find derivative of $y = \frac{x^2}{x+1}$

Using quotient rule with $u=x^2$, $v=x+1$:
$$\frac{dy}{dx} = \frac{(x+1)(2x) - x^2(1)}{(x+1)^2} = \frac{2x^2 + 2x - x^2}{(x+1)^2} = \frac{x^2 + 2x}{(x+1)^2}$$

**Applications of Differentiation:**

**1. Gradient of a Curve:**
The derivative at a point gives the gradient of the tangent.

**2. Equations of Tangent and Normal:**
- Tangent at $(x_1, y_1)$: $y - y_1 = m(x - x_1)$ where $m = f'(x_1)$
- Normal is perpendicular: $y - y_1 = -\frac{1}{m}(x - x_1)$

**3. Turning Points (Maxima and Minima):**
At turning points, $\frac{dy}{dx} = 0$.
- If $\frac{d^2y}{dx^2} > 0$: Minimum point
- If $\frac{d^2y}{dx^2} < 0$: Maximum point

**Worked Example:**
Find turning points of $y = x^3 - 3x^2 - 9x + 5$

$\frac{dy}{dx} = 3x^2 - 6x - 9 = 0$
$3(x^2 - 2x - 3) = 0$
$3(x-3)(x+1) = 0$
$x = 3$ or $x = -1$

$\frac{d^2y}{dx^2} = 6x - 6$

At $x = 3$: $\frac{d^2y}{dx^2} = 12 > 0$ → Minimum
At $x = -1$: $\frac{d^2y}{dx^2} = -12 < 0$ → Maximum

⚡ **Common Mistake**: Forgetting the chain rule when differentiating functions of functions. $d/dx[(3x+1)^4] \neq 4(3x+1)^3$; it IS $4(3x+1)^3 \times 3 = 12(3x+1)^3$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious exam preparation.

**Integration - The Antiderivative:**

Integration is the reverse of differentiation.

$$\int x^n\, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$$

**Standard Integrals:**

| Function | Integral |
|----------|----------|
| $x^n$ | $\frac{x^{n+1}}{n+1} + C$ |
| $\sin x$ | $-\cos x + C$ |
| $\cos x$ | $\sin x + C$ |
| $e^x$ | $e^x + C$ |
| $\frac{1}{x}$ | $\ln|x| + C$ |
| $e^{kx}$ | $\frac{1}{k}e^{kx} + C$ |

**Rules:**

1. **Sum Rule:** $\int (u + v)\, dx = \int u\, dx + \int v\, dx$

2. **Constant Multiple:** $\int kf(x)\, dx = k \int f(x)\, dx$

**Integration Examples:**

**Example 1:** $\int (3x^2 + 2x - 4)\, dx$

$$= \frac{3x^3}{3} + \frac{2x^2}{2} - 4x + C = x^3 + x^2 - 4x + C$$

**Example 2:** $\int \frac{1}{x}\, dx = \ln|x| + C$

**Example 3:** $\int \sin(2x)\, dx$

Let $u = 2x$, then $du = 2dx$, so $dx = \frac{du}{2}$
$$\int \sin(2x)\, dx = \int \sin u \cdot \frac{du}{2} = -\frac{1}{2}\cos u + C = -\frac{1}{2}\cos(2x) + C$$

**Definite Integrals:**

$$\int_a^b f(x)\, dx = [F(x)]_a^b = F(b) - F(a)$$

**Worked Example:**
$$\int_0^2 (x^2 + 1)\, dx = \left[\frac{x^3}{3} + x\right]_0^2 = \left(\frac{8}{3} + 2\right) - 0 = \frac{14}{3}$$

**Area Under a Curve:**

The definite integral from $a$ to $b$ gives the area under $y = f(x)$ above the x-axis.

For area between curve and x-axis where $f(x) < 0$, the integral gives a negative value. Take absolute value of negative areas.

**Area Between Two Curves:**
Area = $\int_a^b [f(x) - g(x)]\, dx$ (where $f(x) > g(x)$)

**Kinematics:**

If $v = \frac{ds}{dt}$ and $a = \frac{dv}{dt} = \frac{d^2s}{dt^2}$

- $s$ = displacement, $v$ = velocity, $a$ = acceleration, $t$ = time

$$\int a\, dt = v + C$$
$$\int v\, dt = s + C$$

**Differential Equations:**

$\frac{dy}{dx} = f(x)$ means $y = \int f(x)\, dx$

**Worked Example:**
Given $\frac{dy}{dx} = 3x^2 + 2$ and $y = 5$ when $x = 1$, find $y$.

$y = \int (3x^2 + 2)\, dx = x^3 + 2x + C$

Using $x = 1, y = 5$:
$5 = 1 + 2 + C$, so $C = 2$
$y = x^3 + 2x + 2$

**Second Derivatives:**
$\frac{d^2y}{dx^2}$ tells us about the concavity of a curve.
- If $\frac{d^2y}{dx^2} > 0$: curve is concave up (U-shaped)
- If $\frac{d^2y}{dx^2} < 0$: curve is concave down (∩-shaped)

Points where $\frac{d^2y}{dx^2} = 0$ and concavity changes = Point of inflection.

⚡ **WAEC Previous Year Pattern:**

| Year | Question | Concept |
|------|----------|---------|
| 2023 | Differentiate polynomial | Power rule |
| 2022 | Find turning points | dy/dx = 0 |
| 2021 | Evaluate definite integral | F(b) - F(a) |

**Integration as Summation:**
The definite integral $\int_a^b f(x)\, dx$ represents the limit of a sum of areas of rectangles under a curve as width → 0.

This is the fundamental theorem connecting differentiation and integration.

**Volumes of Revolution:**

Volume generated when area under $y = f(x)$ from $x = a$ to $x = b$ is rotated 360° about x-axis:
$$V = \pi \int_a^b y^2\, dx$$

⚡ **Exam Strategy**: Always include $+C$ (constant of integration) when doing indefinite integration. Without $C$, your answer is incomplete. For rate problems, identify what rate is given, integrate to find the quantity, use given conditions to find the constant.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
