---



exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-14
topicName: Quadratic Equations
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.738293"
diagramPrompt: "Mathematical diagram showing Quadratic Equations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Quadratic Equations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Quadratic Equations** — Quick Facts

**Standard Form:**
$$ax^2 + bx + c = 0 \text{ where } a \neq 0$$

**Quadratic Formula (for solving):**
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Discriminant:** $D = b^2 - 4ac$

| Value of $D$ | Nature of Roots |
|--------------|-----------------|
| $D > 0$ (perfect square) | Two distinct rational roots |
| $D > 0$ (not perfect square) | Two distinct irrational roots |
| $D = 0$ | Two equal real roots ($x = -\frac{b}{2a}$) |
| $D < 0$ | No real roots (complex conjugates) |

**Sum and Product of Roots:**
- Sum: $\alpha + \beta = -\frac{b}{a}$
- Product: $\alpha\beta = \frac{c}{a}$

**Factorisation Method:**
If $ax^2 + bx + c = (px + q)(rx + s) = 0$, then $x = -\frac{q}{p}$ or $x = -\frac{s}{r}$

⚡ **JAMB Exam Tip:** Always check the discriminant first to determine root nature. When $D = 0$, the repeated root is $x = -\frac{b}{2a}$. Don't use the quadratic formula when factorisation is quicker.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Quadratic Equations** — Study Guide

**Factorisation Worked Example:**

Solve $2x^2 + 5x - 3 = 0$

Find two numbers that multiply to $2 \times (-3) = -6$ and add to $+5$.
These are $+6$ and $-1$.

Rewrite: $2x^2 + 6x - x - 3 = 0$
Factor by grouping: $2x(x + 3) - 1(x + 3) = 0$
$(2x - 1)(x + 3) = 0$

$x = \frac{1}{2}$ or $x = -3$

**Quadratic Formula Worked Example:**

Solve $x^2 - 4x + 1 = 0$

$a = 1$, $b = -4$, $c = 1$
$D = (-4)^2 - 4(1)(1) = 16 - 4 = 12 > 0$

$x = \frac{4 \pm \sqrt{12}}{2} = \frac{4 \pm 2\sqrt{3}}{2} = 2 \pm \sqrt{3}$

**Forming Equations from Roots:**

If roots are $\alpha$ and $\beta$:
$$x^2 - (\alpha + \beta)x + \alpha\beta = 0$$

**Example:** Form equation with roots 3 and -2.

Sum = $1$, Product = $-6$
$x^2 - x - 6 = 0$

**Nature of Roots Conditions:**

- **Real roots:** $b^2 - 4ac \geq 0$
- **Equal roots:** $b^2 = 4ac$
- **Opposite signs (product negative):** $ac < 0$
- **Same sign:** $ac > 0$
- **Reciprocal roots:** If roots are $\alpha, \beta$, then equation is $c x^2 + bx + a = 0$
- **Equal magnitude but opposite sign:** $b = 0$, so $ax^2 + c = 0$

⚡ **Common Student Mistake:** When forming an equation with given roots, don't forget to expand completely. A common error is writing $x^2 - (\alpha + \beta) = 0$ (missing the product term).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Quadratic Equations** — Comprehensive Notes

**Derivation of Quadratic Formula:**

From $ax^2 + bx + c = 0$:
1. Divide by $a$: $x^2 + \frac{b}{a}x + \frac{c}{a} = 0$
2. Complete the square: $x^2 + \frac{b}{a}x = -\frac{c}{a}$
3. Add $(\frac{b}{2a})^2$ to both sides: $(x + \frac{b}{2a})^2 = \frac{b^2 - 4ac}{4a^2}$
4. Take square root: $x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}$
5. Solve: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

**Maximum and Minimum Values:**

For $y = ax^2 + bx + c$:
- If $a > 0$: minimum at $x = -\frac{b}{2a}$, $y_{\min} = \frac{4ac - b^2}{4a}$
- If $a < 0$: maximum at $x = -\frac{b}{2a}$, $y_{\max} = \frac{4ac - b^2}{4a}$

**Example:** Find maximum value of $f(x) = -2x^2 + 8x - 3$

$x = -\frac{8}{2(-2)} = 2$
$f(2) = -2(4) + 8(2) - 3 = -8 + 16 - 3 = 5$

**Condition for Common Root:**

Two quadratics $ax^2 + bx + c = 0$ and $a'x^2 + b'x + c' = 0$ share:
- One root in common if $\frac{a}{a'} = \frac{b}{b'} = \frac{c}{c'}$
- Or use: $(ac' - a'c)(b'c - bc') = (b c' - b'c)(a'c - ac')$

**Range of $x$ for Inequalities:**

For $x^2 - 5x + 6 < 0$:
Factor: $(x-2)(x-3) < 0$

Sign analysis: $x < 2$ or $x > 3$ gives positive; $2 < x < 3$ gives negative.

Therefore solution: $2 < x < 3$

**Simultaneous Equations with Quadratics:**

**Example:** Solve $x + y = 5$ and $xy = 6$

From first: $y = 5 - x$
Substitute: $x(5 - x) = 6$
$5x - x^2 = 6$
$x^2 - 5x + 6 = 0$
$(x-2)(x-3) = 0$

$x = 2, y = 3$ or $x = 3, y = 2$

**Word Problem Setup:**

**Example:** A rectangular garden is 4m longer than its width. Its area is 96 m². Find dimensions.

Let width = $w$, length = $w + 4$
$w(w + 4) = 96$
$w^2 + 4w - 96 = 0$
$(w + 12)(w - 8) = 0$
$w = 8$ m (width), length = $12$ m

**JAMB Pattern Analysis (2015-2024):**
- 2015: Discriminant and nature of roots
- 2017: Forming equation from given roots
- 2019: Solving by factorisation
- 2021: Maximum/minimum value problems
- 2023: Solving simultaneous equations (linear + quadratic)
- 2024: Quadratic inequalities

⚡ **Exam Strategy:** When asked "find the range of values of $x$" for a quadratic inequality, first solve the equality, then use sign testing or sketch the parabola. Remember: if $a > 0$, the parabola opens upward, so the expression is negative between the roots.