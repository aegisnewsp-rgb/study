---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-1
topicName: Quadratic Equations and Inequalities
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.063541"
diagramPrompt: "Mathematical diagram showing Quadratic Equations and Inequalities concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Quadratic Equations and Inequalities

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT exam.

A **quadratic equation** has the form $ax^2 + bx + c = 0$ where $a \neq 0$.

**Quadratic Formula:**
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

The **discriminant** $D = b^2 - 4ac$ determines the nature of roots:
- $D > 0$: two distinct real roots
- $D = 0$: two equal (one repeated) real roots
- $D < 0$: two complex conjugate roots

**Sum and Product of Roots:**
If $\alpha$ and $\beta$ are roots:
$$\alpha + \beta = -\frac{b}{a} \quad \text{(sum of roots)}$$
$$\alpha \beta = \frac{c}{a} \quad \text{(product of roots)}$$

**Nature of Roots — Quick Tests:**
- $\alpha + \beta > 0$ and $\alpha \beta > 0$: both roots are positive
- $\alpha + \beta < 0$ and $\alpha \beta > 0$: both roots are negative
- $\alpha \beta < 0$: roots have opposite signs

**⚡ ECAT exam tips:**
- To form a quadratic from given roots: $x^2 - (\text{sum})x + \text{product} = 0$
- If one root is $\sqrt{2}$, the other is $-\sqrt{2}$ (irrational roots occur in conjugate pairs)
- For equal roots: $b^2 = 4ac$; this is the condition for the quadratic to have a repeated root

---

### 🟡 Standard — Regular Study (2d–2mo)
> For ECAT students who want genuine understanding.

**Solving Quadratic Inequalities:**

**Method:** First solve the equation $ax^2 + bx + c = 0$ to find critical points. Then test intervals.

**Example:** Solve $x^2 - 5x + 6 < 0$.
Factor: $(x-2)(x-3) < 0$.
Critical points: $x = 2, 3$. Test: for $x < 2$: both factors negative → product positive. For $2 < x < 3$: $(x-2) > 0$, $(x-3) < 0$ → product negative. For $x > 3$: both positive → product positive.
Solution: $2 < x < 3$.

**Key inequality result:** For a quadratic $ax^2 + bx + c$:
- If $a > 0$ and $D < 0$: $ax^2 + bx + c > 0$ for all real $x$ (always positive)
- If $a < 0$ and $D < 0$: $ax^2 + bx + c < 0$ for all real $x$ (always negative)

**Maximum and Minimum Values:**
For $y = ax^2 + bx + c$ with $a > 0$: minimum at $x = -b/(2a)$, minimum value = $\frac{4ac - b^2}{4a}$.
For $a < 0$: maximum at $x = -b/(2a)$, maximum value = $\frac{4ac - b^2}{4a}$.

**Transformation of Equations:**

If $\alpha, \beta$ are roots of $ax^2 + bx + c = 0$:
- Sum of roots squared: $\alpha^2 + \beta^2 = (\alpha+\beta)^2 - 2\alpha\beta = \frac{b^2}{a^2} - \frac{2c}{a}$
- Product of roots cubed: $\alpha^3 \cdot \beta^3 = (\alpha\beta)^3 = \frac{c^3}{a^3}$
- Reciprocal roots equation: $cx^2 + bx + a = 0$

**⚡ Common student mistakes:**
1. Forgetting that $a \neq 0$ in a quadratic — if $a = 0$, it's linear, not quadratic
2. Not checking whether roots are real before applying certain conditions
3. Solving inequalities by dividing by a variable without considering sign changes
4. Confusing the sign in the quadratic formula: $x = (-b \pm \sqrt{D})/(2a)$

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for ECAT mastery of quadratic equations.

**The Discriminant — Geometric Interpretation:**

The discriminant $D = b^2 - 4ac$ is actually $(2a \cdot \text{vertex } x\text{-coordinate} + b)^2$ in a shifted form. In vertex form $a(x-h)^2 + k = 0$, the discriminant equals $4a^2$ times the difference between the vertex $y$-value and zero.

**Condition for Common Roots:**

If two quadratics $a_1x^2 + b_1x + c_1 = 0$ and $a_2x^2 + b_2x + c_2 = 0$ share a common root:
$$\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$$
Or equivalently, using the resultant:
$$a_1b_2 - a_2b_1 + b_1c_2 - b_2c_1 + c_1a_2 - c_2a_1 = 0$$
This is the condition for the two equations to have a common root.

**Location of Roots:**

Let $f(x) = ax^2 + bx + c$:
- Both roots greater than $\alpha$: $f(\alpha) > 0$ and $-b/(2a) > \alpha$ (vertex to the right of $\alpha$)
- Both roots less than $\alpha$: $f(\alpha) > 0$ and $-b/(2a) < \alpha$
- One root less than $\alpha$ and one greater: $f(\alpha) < 0$
- Both roots between $\alpha$ and $\beta$ (where $\alpha < \beta$): $f(\alpha) > 0$, $f(\beta) > 0$, and vertex between $\alpha$ and $\beta$

**Descartes' Rule of Signs (for positive roots):**

The number of positive real roots of $f(x) = 0$ is at most the number of sign changes in $f(x)$, and differs from it by an even number.
For $f(x) = x^3 - 6x^2 + 11x - 6 = 0$: sign changes: $+ \to - \to + \to -$: 3 changes → 3 or 1 positive roots. Indeed: roots are 1, 2, 3.

**Irrational Roots:**

Irrational roots of a quadratic with rational coefficients occur in conjugate pairs. If $\sqrt{p}$ is a root (where $p$ is not a perfect square), then $-\sqrt{p}$ is also a root.

**Vieta's Formulas for Higher Degree:**

For a cubic $ax^3 + bx^2 + cx + d = 0$ with roots $\alpha, \beta, \gamma$:
- $\alpha + \beta + \gamma = -b/a$
- $\alpha\beta + \beta\gamma + \gamma\alpha = c/a$
- $\alpha\beta\gamma = -d/a$

**Quadratic Inequalities — Interval Testing:**

For $ax^2 + bx + c > 0$:
- If $a > 0$ and $D \leq 0$: always true (or never zero)
- If $a > 0$ and $D > 0$: $x < x_1$ or $x > x_2$ (where $x_1 < x_2$ are roots)
- If $a < 0$ and $D > 0$: $x_1 < x < x_2$

For $ax^2 + bx + c < 0$:
- Reverse the inequalities above

**Problem Type — Worked Example:**

**Find the range of $k$ for which $x^2 - (k-2)x + (k^2 - 4) = 0$ has both roots positive.**

Conditions:
1. $D \geq 0$: $(k-2)^2 - 4(k^2-4) \geq 0 \Rightarrow k^2 - 4k + 4 - 4k^2 + 16 \geq 0 \Rightarrow -3k^2 - 4k + 20 \geq 0 \Rightarrow 3k^2 + 4k - 20 \leq 0$.
   Roots of $3k^2 + 4k - 20 = 0$: $k = \frac{-4 \pm \sqrt{16 + 240}}{6} = \frac{-4 \pm 16}{6}$. So $k = 2$ or $k = -10/3$. Between them: $-10/3 \leq k \leq 2$.

2. Sum of roots $> 0$: $(k-2) > 0 \Rightarrow k > 2$.

3. Product of roots $> 0$: $k^2 - 4 > 0 \Rightarrow k > 2$ or $k < -2$.

Combining: $k > 2$ (from sum) AND $k > 2$ OR $k < -2$ (from product) → $k > 2$. Combined with $k \leq 2$: no solution! So there is no value of $k$ for which both roots are strictly positive. Check endpoint $k=2$: $x^2 - 0x + 0 = 0 \Rightarrow x = 0$ (repeated root, not strictly positive). So answer: no real $k$ satisfies all three conditions.

**ECAT Previous Year Patterns:**
- Quadratic formula: very common
- Discriminant and nature of roots: very common
- Sum and product of roots: common
- Forming equations from roots: common
- Quadratic inequalities: common
- Maximum/minimum values: periodic

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
