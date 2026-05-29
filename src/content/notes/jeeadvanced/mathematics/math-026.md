---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-026
topicName: Quadratic Equations
weight: 5
country: india
generated: "2026-03-24T08:32:07.946609"
diagramPrompt: "Mathematical diagram showing Quadratic Equations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Quadratic Equations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Standard Form:**
$ax^2 + bx + c = 0$ where $a \neq 0$.

**Quadratic Formula:**
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Discriminant** $D = b^2 - 4ac$:
- $D > 0$: Two distinct real roots
- $D = 0$: Two equal real roots
- $D < 0$: Complex conjugate roots (no real solutions)

**Sum and Product of Roots:**
If roots are $\alpha$ and $\beta$:
$$\alpha + \beta = -\frac{b}{a}, \quad \alpha\beta = \frac{c}{a}$$

**Nature of Roots:**
- Both positive: $S > 0$ and $P > 0$ and $D \geq 0$
- Both negative: $S < 0$ and $P > 0$ and $D \geq 0$
- Opposite signs: $P < 0$ and $D \geq 0$
- Equal magnitude opposite sign: $S = 0$

⚡ **JEE Tip:** For questions about roots being in arithmetic progression (AP), geometric progression (GP), or harmonic progression (HP), form the equation using sum and product of roots. For AP: $2\beta = \alpha + \gamma$.

⚡ **Common Mistake:** When $a < 0$, the parabola opens downward. Don't forget to check sign when finding maximum/minimum value.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Common Transformations:**

If $\alpha, \beta$ are roots of $ax^2 + bx + c = 0$:

| Equation | Roots | Sum | Product |
|----------|-------|-----|---------|
| $ax^2 + bx + c = 0$ | $\alpha, \beta$ | $-\frac{b}{a}$ | $\frac{c}{a}$ |
| $ax^2 - b'x + c = 0$ (with $b' = \alpha+\beta$) | — | same as new | $\frac{c}{a}$ |
| $cx^2 + bx + a = 0$ | reciprocal $1/\alpha, 1/\beta$ | $\frac{\beta+\alpha}{\alpha\beta}$ | $\frac{1}{\alpha\beta}$ |
| $a^2x^2 + b^2x + c^2 = 0$ | squares $\alpha^2, \beta^2$ | $\frac{b^2-2ac}{a^2}$ | $\frac{c^2}{a^2}$ |

**Maximum and Minimum Values:**

For $y = ax^2 + bx + c$:
- Vertex occurs at $x = -\frac{b}{2a}$
- Value at vertex: $y_{\text{extreme}} = -\frac{D}{4a}$
- Maximum if $a < 0$, minimum if $a > 0$

**Common Roots Problems:**

**Condition for common root** between $f(x) = 0$ and $g(x) = 0$:
Let the common root be $\alpha$. Then:
$$\alpha = \frac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1} = \frac{c_1 b_2 - c_2 b_1}{b_1 a_2 - b_2 a_1}$$

Equating the two expressions for $\alpha$ gives the elimination (cross-multiplication) condition, which can also be obtained directly via the determinant method.

**Worked Examples:**

*Example 1:* The roots of $x^3 - 7x^2 + 14x - 8 = 0$ are in GP. Find them.

For three roots in GP, write them as $\dfrac{a}{r}, a, ar$. Their product equals $-\dfrac{\text{constant}}{\text{leading}} = 8$:
$$\frac{a}{r}\cdot a \cdot ar = a^3 = 8 \implies a = 2.$$
So $x = 2$ is a root (the middle term). Dividing out $(x-2)$:
$$x^3 - 7x^2 + 14x - 8 = (x-2)(x^2 - 5x + 4) = (x-2)(x-1)(x-4).$$
The roots are $1, 2, 4$, which form a GP with common ratio $r = 2$. This illustrates the key technique: when terms are in GP, choosing the symmetric parametrisation $a/r, a, ar$ makes the product collapse to $a^3$, isolating the middle term immediately.

*Example 2 (JEE 2022):* Find $m$ such that the roots of $x^2 + (3m-1)x + 2m^2 = 0$ are real and positive.

Real roots require $D \geq 0$:
$$(3m-1)^2 - 8m^2 \geq 0 \implies 9m^2 - 6m + 1 - 8m^2 \geq 0 \implies m^2 - 6m + 1 \geq 0.$$
This gives $m \leq 3 - 2\sqrt{2}$ or $m \geq 3 + 2\sqrt{2}$.

Positive roots require $S > 0$ and $P > 0$:
- $S = -(3m-1) > 0 \implies m < \tfrac{1}{3}$.
- $P = 2m^2 > 0$, which holds for all $m \neq 0$.

Combining $m < \tfrac{1}{3}$ with the real-root condition (and noting $3 - 2\sqrt{2} \approx 0.172 < \tfrac{1}{3}$) leaves $m \leq 3 - 2\sqrt{2}$. At $m = 0$ the equation becomes $x^2 - x = 0$ with roots $0$ and $1$; since $0$ is not positive, exclude it.

**Answer:** $m \leq 3 - 2\sqrt{2}$ with $m \neq 0$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Descartes' Rule of Signs:**
The number of positive real roots equals the number of sign changes in $f(x)$, minus an even number.
The number of negative real roots equals the number of sign changes in $f(-x)$, minus an even number.

**Sturm's Theorem:**
Provides the exact count of distinct real roots of a polynomial in a given interval via the Sturm sequence.

**Rolle's Theorem Applications:**
Between any two roots of $f(x) = 0$ there is at least one root of $f'(x) = 0$.
If $f(x) = ax^2 + bx + c = 0$ has roots $\alpha < \beta$, then $f'(x) = 2ax + b = 0$ has its root at
$$\gamma = -\frac{b}{2a} = \frac{\alpha + \beta}{2},$$
exactly the midpoint of the two roots.

**Advanced Problems:**

*Problem:* Both roots of $x^2 - px + q = 0$ are positive integers. Find the number of ordered pairs $(p, q)$ with $p, q \in [1, 10]$.

For $x^2 - px + q = 0$, the sum of roots is $p$ and the product is $q$. If the roots are positive integers $m, n$, then $m + n = p$ and $mn = q$. (Note: with $x^2 + px + q = 0$ the sum would be $-p < 0$, impossible for positive integer roots, so the minus sign is required.)

Enumerate unordered pairs $1 \leq m \leq n$ with product $q = mn \leq 10$ and sum $p = m + n \leq 10$:

| $(m,n)$ | $(p, q)$ | Valid? |
|---------|----------|--------|
| $(1,1)$ | $(2,1)$ | ✓ |
| $(1,2)$ | $(3,2)$ | ✓ |
| $(1,3)$ | $(4,3)$ | ✓ |
| $(1,4)$ | $(5,4)$ | ✓ |
| $(1,5)$ | $(6,5)$ | ✓ |
| $(1,6)$ | $(7,6)$ | ✓ |
| $(1,7)$ | $(8,7)$ | ✓ |
| $(1,8)$ | $(9,8)$ | ✓ |
| $(1,9)$ | $(10,9)$ | ✓ |
| $(1,10)$ | $(11,10)$ | reject ($p>10$) |
| $(2,2)$ | $(4,4)$ | ✓ |
| $(2,3)$ | $(5,6)$ | ✓ |
| $(2,4)$ | $(6,8)$ | ✓ |
| $(2,5)$ | $(7,10)$ | ✓ |
| $(3,3)$ | $(6,9)$ | ✓ |
| $(3,4)$ | $(7,12)$ | reject ($q>10$) |

Each valid $(m,n)$ yields a distinct $(p,q)$, giving **14 ordered pairs** $(p,q)$.

**JEE Advanced Patterns (2018–2024):**
- Transformation of roots (reciprocals, squares) is a recurring theme.
- Conditions for one root to be greater than or less than a given number.
- Common-root problems appear in mixed-difficulty sets.
- Location of roots (between intervals, in specific quadrants) tested in 2020 and 2023.
- Maxima–minima with quadratic constraints is trending upward.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
