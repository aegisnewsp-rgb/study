---



exam: hat-ug
examName: HAT-UG (HEC Aptitude Test - Undergraduate)
subject: quantitative-reasoning
subjectName: Quantitative Reasoning
topic: qr-9
topicName: Quadratic Equations
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.008189"
diagramPrompt: "Educational diagram illustrating Quadratic Equations with clear labels, white background, exam-style illustration"




---
# Quadratic Equations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A quadratic equation is any equation that can be written in the form:

$$ax^2 + bx + c = 0$$

where $a$, $b$, and $c$ are constants, and $a \neq 0$.

**Standard Form:** $ax^2 + bx + c = 0$

**Key Terms:**
- $a$ = coefficient of $x^2$ (cannot be zero)
- $b$ = coefficient of $x$
- $c$ = constant term

**Solving Quadratic Equations — Three Methods:**

**Method 1: Factoring**
Find two numbers that multiply to give $ac$ and add to give $b$.
$$x^2 + 5x + 6 = 0$$
$$(x + 2)(x + 3) = 0$$
$$x = -2 \text{ or } x = -3$$

**Method 2: Quadratic Formula**
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Method 3: Completing the Square**
Rewrite the equation as a perfect square trinomial.

**Discriminant** ($D = b^2 - 4ac$):
- $D > 0$: Two distinct real roots
- $D = 0$: One repeated real root
- $D < 0$: No real roots (complex roots)

**⚡ HAT-UG Exam Tip:** If factoring looks messy, go straight to the quadratic formula — it ALWAYS works.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students who want genuine understanding.

**Factoring in Detail:**

**Factoring $x^2 + bx + c$:**
Find two numbers $p$ and $q$ such that:
- $p + q = b$
- $p \times q = c$

*Example:* Factor $x^2 + 7x + 12$
- We need $p + q = 7$ and $p \times q = 12$
- Numbers: 3 and 4 (3 + 4 = 7, 3 × 4 = 12)
- Answer: $(x + 3)(x + 4)$

**Factoring $ax^2 + bx + c$ (where $a \neq 1$):**
Use the "AC method":
1. Multiply $a \times c$
2. Find two numbers that multiply to $ac$ and add to $b$
3. Split the middle term using those numbers
4. Factor by grouping

*Example:* Factor $2x^2 + 7x + 3$
- $a = 2$, $c = 3$, so $ac = 6$
- Numbers: 6 and 1 (6 × 1 = 6, 6 + 1 = 7)
- $2x^2 + 6x + x + 3$
- $2x(x + 3) + 1(x + 3)$
- $(2x + 1)(x + 3)$

**Completing the Square:**

For $ax^2 + bx + c = 0$:
1. Divide by $a$: $x^2 + \frac{b}{a}x + \frac{c}{a} = 0$
2. Move constant: $x^2 + \frac{b}{a}x = -\frac{c}{a}$
3. Add $(\frac{b}{2a})^2$ to both sides
4. Factor the left as a perfect square
5. Solve for $x$

**⚡ HAT-UG Common Mistakes:**
- Forgetting to move all terms to one side before factoring
- Applying the quadratic formula with wrong signs (remember $-b$, not $b$)
- Calculating discriminant incorrectly
- Simplifying $\sqrt{b^2 - 4ac}$ when it doesn't factor nicely — leave as radical if needed

**Sum and Product of Roots:**

If $x_1$ and $x_2$ are roots of $ax^2 + bx + c = 0$:
- Sum of roots: $x_1 + x_2 = -\frac{b}{a}$
- Product of roots: $x_1 \times x_2 = \frac{c}{a}$

*Example:* For $x^2 - 5x + 6 = 0$:
- Sum: $5$ (roots are 2 and 3, 2 + 3 = 5)
- Product: $6$ (2 × 3 = 6)

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for thorough mastery.

**Advanced Quadratic Equation Theory:**

**Derivation of the Quadratic Formula:**

Starting from $ax^2 + bx + c = 0$:
$$ax^2 + bx = -c$$
Divide by $a$:
$$x^2 + \frac{b}{a}x = -\frac{c}{a}$$
Complete the square:
$$x^2 + \frac{b}{a}x + \left(\frac{b}{2a}\right)^2 = -\frac{c}{a} + \left(\frac{b}{2a}\right)^2$$
Left side is a perfect square:
$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}$$
Take square root:
$$x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}$$
Solve for $x$:
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Nature of Roots Analysis:**

The discriminant $D = b^2 - 4ac$ determines everything:

| Discriminant | Nature of Roots | Graph of $y = ax^2 + bx + c$ |
|---|---|---|
| $D > 0$ and perfect square | Two distinct rational roots | Parabola crosses x-axis at two points |
| $D > 0$ not perfect square | Two distinct irrational roots | Parabola crosses x-axis at two points |
| $D = 0$ | One repeated (equal) rational root | Parabola touches x-axis at one point |
| $D < 0$ | Two complex conjugate roots | Parabola does not touch x-axis |

**Maximum and Minimum Values:**

For $y = ax^2 + bx + c$:
- If $a > 0$: minimum at $x = -\frac{b}{2a}$, value $= \frac{4ac - b^2}{4a}$
- If $a < 0$: maximum at $x = -\frac{b}{2a}$, value $= \frac{4ac - b^2}{4a}$

*Vertex form:* $y = a(x - h)^2 + k$ where vertex is $(h, k)$

**⚡ HAT-UG Problem-Solving Patterns:**

**Pattern 1: Word Problems Leading to Quadratics**
*Example:* "The product of two consecutive integers is 72. Find the integers."
Let $n$ and $n+1$ be the integers.
$$n(n + 1) = 72$$
$$n^2 + n - 72 = 0$$
$$(n + 9)(n - 8) = 0$$
$$n = 8 \text{ (positive solution)}$$ (Since $n = -9$ is negative)
Integers: 8 and 9

**Pattern 2: Geometric Problems**
*Example:* "A rectangular field has perimeter 60m and area 200 m². Find dimensions."
Let length = $l$, width = $w$.
$$2l + 2w = 60 \Rightarrow l + w = 30 \Rightarrow w = 30 - l$$
$$lw = 200 \Rightarrow l(30 - l) = 200$$
$$30l - l^2 = 200 \Rightarrow l^2 - 30l + 200 = 0$$
$$(l - 10)(l - 20) = 0 \Rightarrow l = 10 \text{ or } 20$$
Dimensions: 10m × 20m

**Pattern 3: Motion/Distance Problems**
*Example:* "A ball is thrown upward with velocity 20 m/s. Its height $h$ after $t$ seconds is $h = 20t - 5t^2$. When does it hit the ground?"
Set $h = 0$:
$$20t - 5t^2 = 0$$
$$5t(4 - t) = 0$$
$$t = 0 \text{ or } t = 4 \text{ seconds}$$

**HAT-UG Examination Strategy:**
1. Read the problem and identify what you need to find
2. Define a variable for the unknown
3. Form an equation using the given information
4. Solve using factoring, completing square, or quadratic formula
5. Check solutions in the original problem
6. Reject any extraneous solutions (e.g., negative time, negative dimensions)
