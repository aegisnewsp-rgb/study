---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-9
topicName: Differentiation and Applications
weight: 5
country: pakistan
generated: "2026-03-24T08:32:08.068392"
diagramPrompt: Mathematical diagram showing Differentiation and Applications concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Differentiation and Applications

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Differentiation** — Key Facts

Differentiation finds the rate of change of a function with respect to its variable. If y = f(x), then dy/dx (or f'(x)) gives the instantaneous rate of change of y with respect to x.

**Basic Derivatives:**

| Function | Derivative |
|----------|------------|
| $x^n$ | $nx^{n-1}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $\frac{1}{x}$ |
| $a^x$ | $a^x \ln a$ |

**Rules of Differentiation:**

- **Sum/Difference:** $\frac{d}{dx}(f \pm g) = f' \pm g'$
- **Product:** $\frac{d}{dx}(fg) = f'g + fg'$
- **Quotient:** $\frac{d}{dx}\left(\frac{f}{g}\right) = \frac{f'g - fg'}{g^2}$
- **Chain Rule:** $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$

⚡ **ECAT Exam Tip:** For chain rule: derivative of "function of function" equals derivative of outside × derivative of inside. Example: d/dx(sin³x) = 3sin²x · cosx.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding...

**Applications of Derivatives:**

**1. Equation of Tangent and Normal:**

At point (x₁, y₁) on curve y = f(x):
- Slope of tangent: $m = \left(\frac{dy}{dx}\right)_{(x_1,y_1)}$
- Equation of tangent: $y - y_1 = m(x - x_1)$
- Equation of normal: $y - y_1 = -\frac{1}{m}(x - x_1)$

**2. Increasing and Decreasing Functions:**

- f is **increasing** on (a, b) if f'(x) > 0 for all x in (a, b)
- f is **decreasing** on (a, b) if f'(x) < 0 for all x in (a, b)

**3. Maxima and Minima:**

Critical points when f'(x) = 0 or f'(x) doesn't exist.

**First Derivative Test:**
- If f' changes from + to - at x = c: local maximum at c
- If f' changes from - to + at x = c: local minimum at c
- If f' doesn't change sign: point of inflection

**Second Derivative Test:**
- If f'(c) = 0 and f''(c) < 0: local maximum
- If f'(c) = 0 and f''(c) > 0: local minimum
- If f''(c) = 0 or doesn't exist: test inconclusive, use first derivative test

**4. Rate of Change:**

If two quantities x and y are related by y = f(x), then:
$$\frac{dy}{dt} = \frac{dy}{dx} \cdot \frac{dx}{dt}$$

**5. Mean Value Theorem:**

If f is continuous on [a, b] and differentiable on (a, b), then there exists c in (a, b) such that:
$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

⚡ **ECAT Exam Tip:** For optimisation problems: identify the quantity to optimise, express it in terms of one variable, differentiate and set equal to zero, verify it's a maximum/minimum using second derivative test.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Advanced Differentiation:**

**1. Implicit Differentiation:**

When y cannot be expressed explicitly as a function of x:
- Differentiate both sides with respect to x
- Treat y as a function of x: d/dx(y) = dy/dx
- Solve for dy/dx

Example: $x^2 + y^2 = 25$
Differentiating: $2x + 2y \frac{dy}{dx} = 0$
$\frac{dy}{dx} = -\frac{x}{y}$

**2. Logarithmic Differentiation:**

For functions of the form y = f(x)^g(x) or products of many functions:
- Take ln of both sides
- Differentiate using chain rule

Example: $y = x^x$ (x > 0)
$\ln y = x \ln x$
Differentiating: $\frac{1}{y} \frac{dy}{dx} = \ln x + 1$
$\frac{dy}{dx} = x^x(1 + \ln x)$

**3. Derivatives of Inverse Functions:**

If y = f⁻¹(x), then:
$$\frac{dy}{dx} = \frac{1}{f'(y)} = \frac{1}{f'(f^{-1}(x))}$$

| Function | Derivative |
|----------|------------|
| $\sin^{-1}x$ | $\frac{1}{\sqrt{1-x^2}}$ |
| $\cos^{-1}x$ | $-\frac{1}{\sqrt{1-x^2}}$ |
| $\tan^{-1}x$ | $\frac{1}{1+x^2}$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $\frac{1}{x}$ |

**4. Second Order Derivatives:**

- $\frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right) = f''(x)$
- For motion: if s = f(t), then v = ds/dt, a = dv/dt = d²s/dt²

**5. Leibniz Rule (nth Derivative of Product):**

$$\frac{d^n}{dx^n}(uv) = \sum_{k=0}^{n} \binom{n}{k} \frac{d^{n-k}u}{dx^{n-k}} \cdot \frac{d^k v}{dx^k}$$

**6. L'Hôpital's Rule:**

For indeterminate forms 0/0 or ∞/∞:
$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

(Can be applied repeatedly if needed)

Example: $\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\cos x}{1} = 1$

**7. Curvature:**

Radius of curvature: $\rho = \frac{[1 + (y')^2]^{3/2}}{|y''|}$

**8. Tangent and Normal in 3D:**

For curve r(t) = (x(t), y(t), z(t)):
- Tangent vector: r'(t)
- Unit tangent: $\hat{T} = \frac{r'}{|r'|}$
- Normal vector: $\hat{N} = \frac{\hat{T}'}{|\hat{T}'|}$
- Binormal: $\hat{B} = \hat{T} \times \hat{N}$

⚡ **ECAT 2024 Analysis:** Questions on chain rule, maxima/minima, and rate of change appear frequently. Logarithmic differentiation is particularly important for functions like x^sinx or (x²+1)^x. For practical problems, always check that your answer makes physical sense — a maximum volume should be positive, etc.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
