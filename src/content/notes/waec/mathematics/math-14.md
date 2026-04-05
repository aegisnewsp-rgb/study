---
exam: waec
examName: WAEC WASSCE
subject: mathematics
subjectName: Mathematics
topic: math-14
topicName: Applications of Calculus (Rates, Max/Min)
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.624090"
diagramPrompt: Mathematical diagram showing Applications of Calculus (Rates, Max/Min) concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style
---

# Applications of Calculus (Rates, Max/Min)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Calculus** is the mathematics of change. **Differentiation** finds the rate at which quantities change. **Integration** is its inverse — finding quantities from their rates of change.

**Differentiation — Basic Rules:**

If $y = x^n$, then:
$$\frac{dy}{dx} = nx^{n-1}$$

**Common derivatives:**
$$\frac{d}{dx}(x^n) = nx^{n-1}$$
$$\frac{d}{dx}(\sin x) = \cos x$$
$$\frac{d}{dx}(\cos x) = -\sin x$$
$$\frac{d}{dx}(e^x) = e^x$$
$$\frac{d}{dx}(\ln x) = \frac{1}{x}$$

**Product Rule:**
If $y = uv$, then:
$$\frac{dy}{dx} = u\frac{dv}{dx} + v\frac{du}{dx}$$

**Quotient Rule:**
If $y = \frac{u}{v}$, then:
$$\frac{dy}{dx} = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}$$

**Chain Rule:**
If $y = f(g(x))$, then:
$$\frac{dy}{dx} = f'(g(x)) \cdot g'(x)$$

⚡ **WAEC Tip:** When finding maximum or minimum, set $\frac{dy}{dx} = 0$ and solve. Then check the second derivative: if $\frac{d^2y}{dx^2} > 0$, it's a minimum; if $< 0$, it's a maximum.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Rates of Change:**

$\frac{dy}{dx}$ represents the rate of change of $y$ with respect to $x$.

*Problem*: A stone is dropped from a height. Its height $h$ metres after $t$ seconds is $h = 100 - 5t^2$. Find the velocity after 3 seconds.

Velocity = $\frac{dh}{dt} = -10t$
At $t = 3$: velocity $= -10 \times 3 = -30$ m/s (negative means falling)

*Problem*: A circle's radius increases at 2 cm/s. Find how fast the area is increasing when radius = 10 cm.

$$A = \pi r^2$$
$$\frac{dA}{dr} = 2\pi r$$
$$\frac{dA}{dt} = \frac{dA}{dr} \cdot \frac{dr}{dt} = 2\pi r \cdot 2 = 4\pi r$$
At $r = 10$: $\frac{dA}{dt} = 4\pi \times 10 = 40\pi \approx 125.7$ cm²/s

**Maximum and Minimum:**

*Problem*: Find the maximum value of $y = 12x - x^2$.

$$\frac{dy}{dx} = 12 - 2x$$
Set equal to 0:
$$12 - 2x = 0 \Rightarrow x = 6$$
$$\frac{d^2y}{dx^2} = -2 < 0 \quad \text{(concave down, so maximum)}$$

At $x = 6$: $y = 12(6) - 36 = 72 - 36 = 36$

Maximum value = 36

*Problem*: A rectangle has perimeter 40 cm. Find its maximum area.

Let $x$ = length, $y$ = width.
$$2x + 2y = 40 \Rightarrow x + y = 20 \Rightarrow y = 20 - x$$
$$A = xy = x(20-x) = 20x - x^2$$
$$\frac{dA}{dx} = 20 - 2x = 0 \Rightarrow x = 10$$
$$\frac{d^2A}{dx^2} = -2 < 0 \Rightarrow \text{maximum}$$

Maximum area when $x = 10$, $y = 10$:
$$A = 10 \times 10 = 100 \text{ cm}^2$$

⚡ **Common Student Mistakes:** Forgetting to use the chain rule for composite functions. Not checking the second derivative to confirm max/min. Forgetting that at max/min, the derivative equals zero (stationary points).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough preparation.

**Turning Points and Nature:**

A function has stationary points where $\frac{dy}{dx} = 0$.

To determine the nature:
1. Find $\frac{dy}{dx} = 0$ → find $x$ coordinate(s)
2. Find $\frac{d^2y}{dx^2}$ at each stationary point
   - If $\frac{d^2y}{dx^2} > 0$: Local minimum
   - If $\frac{d^2y}{dx^2} < 0$: Local maximum
   - If $\frac{d^2y}{dx^2} = 0$: Test higher derivatives or use first derivative test

*Problem*: Find and classify stationary points of $y = x^3 - 3x^2 - 9x + 10$.

$$\frac{dy}{dx} = 3x^2 - 6x - 9 = 0$$
$$3(x^2 - 2x - 3) = 0$$
$$3(x-3)(x+1) = 0$$
$$x = 3 \text{ or } x = -1$$

$$\frac{d^2y}{dx^2} = 6x - 6$$

At $x = 3$: $\frac{d^2y}{dx^2} = 12 > 0 \Rightarrow$ minimum
At $x = -1$: $\frac{d^2y}{dx^2} = -12 < 0 \Rightarrow$ maximum

Points: $(3, -17)$ minimum, $(-1, 15)$ maximum

**First Derivative Test:**
Check sign of $\frac{dy}{dx}$ on either side of the stationary point:
- If changes from positive to negative: Maximum
- If changes from negative to positive: Minimum
- If same sign both sides: Point of inflection

**Points of Inflection:**
Where concavity changes. Occurs when $\frac{d^2y}{dx^2} = 0$ and changes sign.

*Problem*: Find point of inflection of $y = x^3 - 6x^2 + 12x - 4$.
$$\frac{dy}{dx} = 3x^2 - 12x + 12 = 3(x^2 - 4x + 4) = 3(x-2)^2$$
$$\frac{d^2y}{dx^2} = 6x - 12$$

$\frac{d^2y}{dx^2} = 0 \Rightarrow x = 2$
At $x = 2$: $\frac{d^2y}{dx^2}$ changes from negative to positive, so point of inflection.

Point: $(2, 0)$

**Kinematics:**

For an object with position $s(t)$:
- Velocity: $v = \frac{ds}{dt}$
- Acceleration: $a = \frac{dv}{dt} = \frac{d^2s}{dt^2}$

*Problem*: A particle moves so that $s = t^3 - 6t^2 + 9t + 2$. Find:
(a) Velocity when acceleration = 0
(b) Total distance in first 5 seconds

(a) $v = \frac{ds}{dt} = 3t^2 - 12t + 9$
$a = \frac{dv}{dt} = 6t - 12$
$a = 0 \Rightarrow t = 2$
At $t = 2$: $v = 3(4) - 12(2) + 9 = 12 - 24 + 9 = -3$ m/s

(b) To find distance, find where velocity changes sign:
$$3t^2 - 12t + 9 = 3(t^2 - 4t + 3) = 3(t-1)(t-3) = 0$$
$t = 1$ or $t = 3$

For $0 \leq t \leq 5$:
- At $t = 0$: $s = 2$
- At $t = 1$: $s = 1 - 6 + 9 + 2 = 6$
- At $t = 3$: $s = 27 - 54 + 27 + 2 = 2$
- At $t = 5$: $s = 125 - 150 + 45 + 2 = 22$

Since velocity is positive on $(0,1)$, negative on $(1,3)$, positive on $(3,5)$:
Distance = $|6-2| + |2-6| + |22-2| = 4 + 4 + 20 = 28$ m

**Optimization Problems:**

*Problem*: A cylindrical tin is to hold 500 cm³. Find dimensions that minimize surface area.

Let $r$ = radius, $h$ = height.
$$V = \pi r^2 h = 500 \Rightarrow h = \frac{500}{\pi r^2}$$

Surface area (with lid): $S = 2\pi r^2 + 2\pi r h = 2\pi r^2 + 2\pi r \cdot \frac{500}{\pi r^2} = 2\pi r^2 + \frac{1000}{r}$

$$\frac{dS}{dr} = 4\pi r - \frac{1000}{r^2} = 0$$
$$4\pi r^3 = 1000$$
$$r^3 = \frac{250}{\pi}$$
$$r = \sqrt[3]{\frac{250}{\pi}} \approx 4.3 \text{ cm}$$

$$h = \frac{500}{\pi (4.3)^2} \approx 8.6 \text{ cm}$$

So the most economical tin has $h = 2r$ (height equals diameter).

**Related Rates:**

*Problem*: Water is poured into a cone at 8 cm³/s. The cone has height 12 cm and radius 4 cm (pointing down). How fast is the water level rising when the water is 6 cm deep?

Similar triangles: $\frac{r}{h} = \frac{4}{12} = \frac{1}{3} \Rightarrow r = \frac{h}{3}$

Volume of water in cone: $V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi \left(\frac{h}{3}\right)^2 h = \frac{\pi h^3}{27}$

$$\frac{dV}{dt} = \frac{\pi}{27} \cdot 3h^2 \frac{dh}{dt} = \frac{\pi h^2}{9} \frac{dh}{dt}$$
$$8 = \frac{\pi (6)^2}{9} \frac{dh}{dt} = \frac{36\pi}{9} \frac{dh}{dt} = 4\pi \frac{dh}{dt}$$
$$\frac{dh}{dt} = \frac{8}{4\pi} = \frac{2}{\pi} \approx 0.64 \text{ cm/s}$$

**Integration — Basic:**

$$\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$$
$$\int e^x \, dx = e^x + C$$
$$\int \frac{1}{x} \, dx = \ln|x| + C$$
$$\int \sin x \, dx = -\cos x + C$$
$$\int \cos x \, dx = \sin x + C$$

**Definite Integrals:**
$$\int_a^b f(x) \, dx = [F(x)]_a^b = F(b) - F(a)$$

*Problem*: Find area under $y = x^2$ from $x = 1$ to $x = 3$.
$$\int_1^3 x^2 \, dx = \left[\frac{x^3}{3}\right]_1^3 = \frac{27}{3} - \frac{1}{3} = \frac{26}{3} \approx 8.67$$

**Area Between Curves:**
$$A = \int_a^b (f(x) - g(x)) \, dx \quad \text{where } f(x) \geq g(x)$$

*Problem*: Find area between $y = x^2$ and $y = x + 2$.

Find intersections: $x^2 = x + 2 \Rightarrow x^2 - x - 2 = 0 \Rightarrow (x-2)(x+1) = 0 \Rightarrow x = -1, 2$

$$A = \int_{-1}^2 [(x+2) - x^2] \, dx = \left[\frac{x^2}{2} + 2x - \frac{x^3}{3}\right]_{-1}^2$$
$$= \left(2 + 4 - \frac{8}{3}\right) - \left(\frac{1}{2} - 2 + \frac{1}{3}\right)$$
$$= \left(6 - \frac{8}{3}\right) - \left(\frac{1}{2} - \frac{5}{3}\right) = \frac{10}{3} - \left(-\frac{7}{6}\right) = \frac{10}{3} + \frac{7}{6} = \frac{27}{6} = \frac{9}{2}$$

⚡ **WAEC Examination Patterns:** Differentiate polynomial and trigonometric functions. Apply product, quotient, and chain rules. Find maximum and minimum values. Solve optimization problems. Find rates of change in related rates problems. Use calculus in kinematics (position, velocity, acceleration). Evaluate definite integrals. Find areas under curves and between curves.
