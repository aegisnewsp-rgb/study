---
exam: waec
examName: WAEC WASSCE
subject: mathematics
subjectName: Mathematics
topic: math-6
topicName: Quadratic Equations
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.619400"
diagramPrompt: Mathematical diagram showing Quadratic Equations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style
---

# Quadratic Equations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **quadratic equation** is an equation of the form:
$$ax^2 + bx + c = 0 \quad \text{where } a \neq 0$$

The **solutions** (also called **roots**) are the values of $x$ that satisfy the equation.

**Methods of Solving:**

**1. Factorisation:**
$$x^2 - 5x + 6 = 0$$
$$(x - 2)(x - 3) = 0$$
$$x = 2 \text{ or } x = 3$$

**2. Completing the Square:**
$$x^2 + 6x + 5 = 0$$
$$x^2 + 6x = -5$$
$$x^2 + 6x + 9 = -5 + 9 \quad \text{(add } (b/2)^2 = 9\text{)}$$
$$(x + 3)^2 = 4$$
$$x + 3 = \pm 2$$
$$x = -1 \text{ or } x = -5$$

**3. Quadratic Formula:**
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Example:**
$$2x^2 + 5x - 3 = 0$$
$$x = \frac{-5 \pm \sqrt{25 - 4(2)(-3)}}{2(2)} = \frac{-5 \pm \sqrt{25 + 24}}{4} = \frac{-5 \pm 7}{4}$$
$$x = \frac{2}{4} = \frac{1}{2} \quad \text{or} \quad x = \frac{-12}{4} = -3$$

⚡ **WAEC Tip:** The quadratic formula ALWAYS works. If factorisation is difficult, use the formula. The expression under the square root, $b^2 - 4ac$, is called the **discriminant**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**The Discriminant:**
$$\Delta = b^2 - 4ac$$

| Value of $\Delta$ | Nature of Roots |
|------------------|----------------|
| $\Delta > 0$ (positive) | Two distinct real roots |
| $\Delta = 0$ | Two equal real roots (repeated) |
| $\Delta < 0$ (negative) | No real roots (complex conjugate roots) |

**Example**:
$$x^2 - 4x + 4 = 0$$
$$\Delta = (-4)^2 - 4(1)(4) = 16 - 16 = 0$$
$$\text{Roots are } x = \frac{4}{2} = 2 \text{ (repeated root)}$$

**Sum and Product of Roots:**

If the roots are $\alpha$ and $\beta$:
$$\alpha + \beta = -\frac{b}{a}$$
$$\alpha \beta = \frac{c}{a}$$

**Example**: Find the sum and product of roots of $3x^2 - 5x + 2 = 0$
$$\alpha + \beta = -\frac{-5}{3} = \frac{5}{3}$$
$$\alpha \beta = \frac{2}{3}$$

**Forming Equations from Roots:**

If $\alpha$ and $\beta$ are roots:
$$x^2 - (\alpha + \beta)x + \alpha\beta = 0$$

*Problem*: Roots are 3 and -2. Form the equation.
$$\alpha + \beta = 1, \quad \alpha\beta = -6$$
$$x^2 - (1)x + (-6) = 0$$
$$x^2 - x - 6 = 0$$

**Nature of Roots — Additional Criteria:**
For roots to be real and positive:
- $\Delta \geq 0$
- Sum of roots $> 0$: $-\frac{b}{a} > 0$ (so $a$ and $b$ have opposite signs)
- Product of roots $> 0$: $\frac{c}{a} > 0$ (so $a$ and $c$ have same sign)

⚡ **Common Student Mistakes:** Forgetting to check the sign of $a$ when applying sum/product formulas. Using $b$ instead of $-b$ in the sum formula. Forgetting that $c/a$ is the product (not $c$ alone).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough preparation.

**Graphical Representation:**

The graph of $y = ax^2 + bx + c$ is a **parabola**:
- Opens upward if $a > 0$ (minimum point)
- Opens downward if $a < 0$ (maximum point)
- Vertex (turning point) at $x = -\frac{b}{2a}$

**Problem**: Find the vertex of $y = x^2 - 4x + 3$
$$x_v = -\frac{-4}{2(1)} = 2$$
$$y_v = (2)^2 - 4(2) + 3 = 4 - 8 + 3 = -1$$
Vertex = $(2, -1)$

**Relationship between roots and graph:**
- Two distinct real roots: Graph crosses x-axis twice
- One repeated root: Graph touches x-axis at vertex
- No real roots: Graph does not cross x-axis

**Maximum and Minimum Values:**
For $y = ax^2 + bx + c$:
- Maximum occurs at vertex if $a < 0$: $y_{\max} = -\frac{\Delta}{4a}$
- Minimum occurs at vertex if $a > 0$: $y_{\min} = -\frac{\Delta}{4a}$

**Problem**: Find maximum value of $y = -x^2 + 4x + 5$
$$\Delta = 16 - 4(-1)(5) = 16 + 20 = 36$$
$$y_{\max} = -\frac{36}{4(-1)} = -\frac{36}{-4} = 9$$

**Simultaneous Equations (Linear + Quadratic):**

*Problem*: Solve simultaneously:
$$2x + y = 5 \quad \text{...(1)}$$
$$x^2 + y^2 = 10 \quad \text{...(2)}$$

From (1): $y = 5 - 2x$
Substitute into (2):
$$x^2 + (5-2x)^2 = 10$$
$$x^2 + 25 - 20x + 4x^2 = 10$$
$$5x^2 - 20x + 15 = 0$$
$$x^2 - 4x + 3 = 0$$
$$(x-1)(x-3) = 0$$
$$x = 1 \text{ or } x = 3$$

When $x = 1$: $y = 5 - 2 = 3$
When $x = 3$: $y = 5 - 6 = -1$

Solutions: $(1, 3)$ and $(3, -1)$

**Quadratic Inequalities:**

*Problem*: Solve $x^2 - x - 6 > 0$
$$(x-3)(x+2) > 0$$

Critical points: $x = 3$ and $x = -2$

Sign analysis:
- $x < -2$: Both factors negative → product positive ✓
- $-2 < x < 3$: $(x-3)$ negative, $(x+2)$ positive → product negative ✗
- $x > 3$: Both factors positive → product positive ✓

Solution: $x < -2$ or $x > 3$

*Problem*: Solve $x^2 - 4x + 3 \leq 0$
$$(x-1)(x-3) \leq 0$$
Solution: $1 \leq x \leq 3$

**Word Problems Leading to Quadratic Equations:**

*Problem*: A rectangular garden is 8 m longer than it is wide. Its area is 84 m². Find the dimensions.

Let width = $w$ m, length = $(w + 8)$ m
$$w(w+8) = 84$$
$$w^2 + 8w - 84 = 0$$
$$(w+14)(w-6) = 0$$
$$w = 6 \text{ m (reject } w = -14\text{)}$$

Width = 6 m, Length = 14 m

*Problem*: The product of two consecutive even integers is 528. Find the integers.

Let integers be $n$ and $n+2$:
$$n(n+2) = 528$$
$$n^2 + 2n - 528 = 0$$
$$(n+24)(n-22) = 0$$
$$n = 22 \text{ or } n = -24$$

Integers: 22 and 24, or -24 and -22

**Quadratic Equations with Parameters:**

*Problem*: Find the value of $k$ for which $kx^2 + 4x + k = 0$ has equal roots.
$$\Delta = 16 - 4(k)(k) = 0$$
$$16 - 4k^2 = 0$$
$$k^2 = 4$$
$$k = \pm 2$$

**Transformation of Equations:**

If $\alpha$ and $\beta$ are roots of $ax^2 + bx + c = 0$, then roots of $a(x-p)^2 + b(x-p) + c = 0$ are $\alpha + p$ and $\beta + p$.

*Problem*: Roots of $x^2 - 3x + 2 = 0$ are 1 and 2. Find equation with roots 4 and 5.

Let $y = x + 3$ (shifting by 3):
New roots are old roots + 3 = 4 and 5
$$x^2 - 3x + 2 = 0$$
Substitute $x = y - 3$:
$$(y-3)^2 - 3(y-3) + 2 = 0$$
$$y^2 - 6y + 9 - 3y + 9 + 2 = 0$$
$$y^2 - 9y + 20 = 0$$

⚡ **WAEC Examination Patterns:** Solve quadratic equations by factorisation, completing the square, and quadratic formula. Use the discriminant to determine nature of roots. Find sum and product of roots. Form equations from given roots. Solve simultaneous equations (linear + quadratic). Solve quadratic inequalities. Solve word problems leading to quadratic equations.
