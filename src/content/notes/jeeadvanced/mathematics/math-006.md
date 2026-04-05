---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-006
topicName: Differentiability
weight: 5
country: india
generated: "2026-03-24T08:32:07.936248"
diagramPrompt: Mathematical diagram showing Differentiability concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Differentiability

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Definition:**
$f$ is differentiable at $x = a$ if the derivative exists:
$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h} = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}$$

**One-Sided Derivatives:**

- **Left-hand derivative:** $f'_-(a) = \lim_{h \to 0^-} \frac{f(a+h) - f(a)}{h}$
- **Right-hand derivative:** $f'_+(a) = \lim_{h \to 0^+} \frac{f(a+h) - f(a)}{h}$

$f$ is differentiable at $a$ iff $f'_-(a) = f'_+(a)$ (finite).

**Key Theorem:**
If $f$ is differentiable at $a$, then $f$ is continuous at $a$.
(Converse is FALSE: $f(x) = |x|$ is continuous at $0$ but not differentiable there.)

**Standard Non-Differentiable Cases:**

1. **Corner:** Left and right derivatives exist but are different (e.g., $|x|$ at $0$)
2. **Cusp:** One-sided derivatives are infinite (e.g., $|x|^{1/3}$ at $0$)
3. **Vertical tangent:** $f'(a) = \infty$ (e.g., $x^{1/3}$ at $0$)

⚡ **JEE Tip:** When checking differentiability of piecewise functions, always compute both one-sided derivatives and check if they're equal.

⚡ **Common Mistake:** Thinking that continuity implies differentiability. Remember: every differentiable function is continuous, but many continuous functions are not differentiable (corners, cusps, oscillations).

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Differentiability and Continuity:**

- **Theorem:** $f$ differentiable at $a$ $\Rightarrow$ $f$ continuous at $a$.
- **Proof:** $\lim_{x \to a} [f(x) - f(a)] = \lim_{x \to a} \frac{f(x)-f(a)}{x-a} \cdot (x-a) = f'(a) \cdot 0 = 0$.

**When NOT differentiable:**

**1. Corner point:**
$f(x) = |x|$ at $0$: left derivative $= -1$, right derivative $= +1$, not equal.

**2. Cusp (sharp point):**
$f(x) = \sqrt{|x|} = |x|^{1/2}$ at $0$: left derivative $= -\infty$, right derivative $= +\infty$.

**3. Oscillatory discontinuity:**
$f(x) = x \sin(1/x)$ for $x \neq 0$, $f(0) = 0$ is continuous but not differentiable at $0$.
Also $f(x) = \sin(1/x^2)$ oscillates infinitely as $x \to 0$.

**Differentiability on an Interval:**

- $f$ is differentiable on $(a,b)$ if differentiable at every point in $(a,b)$
- $f$ is differentiable on $[a,b]$ if differentiable on $(a,b)$ and right differentiable at $a$ and left differentiable at $b$

**Rules of Differentiation:**

- Product: $(fg)' = f'g + fg'$
- Quotient: $\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$
- Chain: $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$

**Worked Examples:**

*Example 1:* Check differentiability of $f(x) = |x^2 - 4|$ at $x = 2$.

At $x = 2$, $f(2) = |4-4| = 0$.
For $x$ near 2: $f(x) = |(x-2)(x+2)|$. Since $x+2 \approx 4 > 0$ near $x=2$, sign is determined by $x-2$.
So for $x < 2$, $f(x) = -(x-2)(x+2) = -(x^2-4) = 4-x^2$.
For $x > 2$, $f(x) = (x-2)(x+2) = x^2-4$.
$f'_-(2) = \lim_{h \to 0^-} \frac{f(2+h) - f(2)}{h} = \lim_{h \to 0^-} \frac{4-(2+h)^2}{h} = \lim_{h \to 0^-} \frac{4-4-4h-h^2}{h} = \lim_{h \to 0^-} (-4 - h) = -4$.
$f'_+(2) = \lim_{h \to 0^+} \frac{(2+h)^2-4}{h} = \lim_{h \to 0^+} \frac{4+4h+h^2-4}{h} = \lim_{h \to 0^+} (4 + h) = 4$.
Since $-4 \neq 4$, not differentiable at $x=2$.

*Example 2 (JEE 2021):* Find $k$ such that $f(x) = \begin{cases} kx^2 & x \leq 1 \\ x + k & x > 1 \end{cases}$ is differentiable at $x=1$.

First, for differentiability, must be continuous:
$f(1) = k(1)^2 = k$.
$\lim_{x \to 1^-} f(x) = k$.
$\lim_{x \to 1^+} f(x) = 1 + k$.
For continuity at 1: $k = 1 + k$ → $0 = 1$, contradiction.
So no value of $k$ makes $f$ continuous at $x=1$, hence not differentiable.
Wait, the problem might have intended a form where continuity is possible.

Actually, maybe we want $k$ in the second piece? Let me recompute.
$f(1) = k \cdot 1^2 = k$ from left.
$\lim_{x \to 1^+} f(x) = 1 + k$.
For continuity: $k = 1 + k$ → $0 = 1$. Impossible.

So answer is: no such $k$ exists.

*Example 3:* Is $f(x) = x^2 |x|$ differentiable everywhere?

$f(x) = x^2 \cdot |x| = x^2 \cdot \text{sgn}(x) \cdot x = x^3$ for $x > 0$? Actually $x^2 |x| = x^2 \cdot |x| = x^2 \cdot x$ for $x \geq 0$ and $x^2 \cdot (-x) = -x^3$ for $x < 0$.
So $f(x) = \begin{cases} -x^3 & x < 0 \\ x^3 & x \geq 0 \end{cases} = x^3$ (since $|x| = x$ for $x \geq 0$ and $-x$ for $x < 0$, but $x^2 (-x) = -x^3$ and $x^2 (x) = x^3$).

Wait: $x^2 |x| = x^2 \cdot |x|$.
If $x \geq 0$: $|x| = x$, so $f(x) = x^3$.
If $x < 0$: $|x| = -x$, so $f(x) = -x^3$.

At $x = 0$: $f(0) = 0$.
Left derivative: $\lim_{h \to 0^-} \frac{-h^3 - 0}{h} = \lim_{h \to 0^-} \frac{-h^3}{h} = \lim_{h \to 0^-} (-h^2) = 0$.
Right derivative: $\lim_{h \to 0^+} \frac{h^3}{h} = \lim_{h \to 0^+} h^2 = 0$.
Both equal 0, so differentiable at 0 (and everywhere else since $x^3$ is differentiable).
So $x^2|x|$ IS differentiable everywhere.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Derivative as Linear Approximation:**

If $f$ is differentiable at $a$, then $f(x) = f(a) + f'(a)(x-a) + o(|x-a|)$ as $x \to a$.
The linear function $L(x) = f(a) + f'(a)(x-a)$ is the best linear approximation to $f$ near $a$.

**Differential:**
$df = f'(a) dx$ represents the differential of $f$.
For small $\Delta x = dx$, $\Delta f \approx df$.

**Implicit Differentiation:**

If $F(x,y) = 0$ defines $y$ as a function of $x$, then:
$$\frac{dy}{dx} = -\frac{\partial F/\partial x}{\partial F/\partial y}$$
provided denominator $\neq 0$.

**Higher Order Derivatives:**

$f^{(n)}(x) = \frac{d^n}{dx^n} f(x)$.
For implicit functions, differentiate repeatedly.

**Advanced Problems:**

*Problem (JEE Advanced 2023):* If $f$ is differentiable at $x = 1$ and $\lim_{x \to 1} \frac{f(x) - f(1)}{x-1} = 4$, find $f'(1)$.

By definition, $f'(1) = \lim_{x \to 1} \frac{f(x) - f(1)}{x-1}$.
Given this limit is 4, $f'(1) = 4$.

*Problem 2:* Let $f(x) = \begin{cases} x^2 \sin(1/x) & x \neq 0 \\ 0 & x = 0 \end{cases}$. Is $f$ differentiable at $0$?

$f'(0) = \lim_{h \to 0} \frac{h^2 \sin(1/h) - 0}{h} = \lim_{h \to 0} h \sin(1/h)$.
Since $|h \sin(1/h)| \leq |h| \to 0$, we have $f'(0) = 0$.
So $f$ is differentiable at 0.

Now check $f'(x)$ for $x \neq 0$:
$f'(x) = 2x \sin(1/x) + x^2 \cos(1/x) \cdot (-1/x^2) = 2x \sin(1/x) - \cos(1/x)$.
At $x = 0$: $\lim_{x \to 0} f'(x) = \lim_{x \to 0} [2x \sin(1/x) - \cos(1/x)]$.
The first term $\to 0$, but $\cos(1/x)$ oscillates between $-1$ and $1$.
So $\lim_{x \to 0} f'(x)$ does not exist.
Thus $f'$ is not continuous at $0$.

This shows that even if $f$ is differentiable everywhere, $f'$ need not be continuous.

**JEE Advanced Patterns (2018–2024):**
- Differentiability of piecewise functions with parameters is very common
- One-sided derivative calculations appear frequently
- Implicit differentiation and its higher order variants are tested
- Chain rule applications for complex compositions are common
- L'Hôpital's rule and derivative in limit problems appeared in 2020, 2022

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
