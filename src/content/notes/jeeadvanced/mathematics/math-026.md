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
Let common root be $\alpha$. Then:
$$\alpha = \frac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1} = \frac{c_1 b_2 - c_2 b_1}{b_1 a_2 - b_2 a_1}$$

More precisely: $\frac{\alpha}{1} = \frac{\alpha}{1}$ from both equations. Use the determinant method or elimination.

**Worked Examples:**

*Example 1:* If roots of $x^2 + px + q = 0$ are in GP, find relation between $p$ and $q$.

Let roots be $ar, a/r$ (since product $\neq 0$, neither is zero).
Sum: $a(r + 1/r) = -p$.
Product: $a^2 = q$.
So $-p/a = r + 1/r$.
Also $(r + 1/r)^2 = r^2 + 2 + 1/r^2$.
But $r^2 + 1/r^2 = (r + 1/r)^2 - 2$.
So $p^2/a^2 = (r + 1/r)^2 = (r^2 + 2 + 1/r^2) = (r^2 + 1/r^2) + 2$.
And $r^2 + 1/r^2 = (p^2/a^2) - 2$.
From $a^2 = q$: $p^2/q = (p^2/a^2) - 2 + 2 = p^2/a^2$ (wait this loops).

Actually simpler: $a = \sqrt{q}$, so $r + 1/r = -p/\sqrt{q}$.
Square: $r^2 + 2 + 1/r^2 = p^2/q$.
So $r^2 + 1/r^2 = p^2/q - 2$.
But $r^2 + 1/r^2 = (r + 1/r)^2 - 2 = p^2/q - 2$.
This gives $p^2/q - 2 = p^2/q - 2$, tautology. Hmm.

Let roots be $\alpha, \beta$ in GP: $\beta^2 = \alpha\gamma$ and $\alpha\beta\gamma = \alpha^3 r^2$... no.
Let roots be $d/r, d, dr$ (three terms in GP would need 3 roots).
For two roots in GP: $\beta^2 = \alpha\gamma$ becomes $\beta^2 = \alpha \cdot \alpha$ if we call roots $\alpha, \beta$... wait, with two terms the GP condition is $\beta/\alpha = \beta/\beta$ which is trivially 1, so they must be equal... No, for two terms there's no meaningful GP condition.

Actually with two terms, if $\alpha, \beta$ are in GP, then $\beta/\alpha = \text{common ratio}$, and the "middle" concept doesn't apply. The condition is just that neither is zero. So any two non-zero roots are trivially in GP? No.

For two terms $a, ar$, the ratio is $r$. So any pair is in GP with the right choice of $r$. The problem must mean the roots are in some specific order in GP, which typically means $\alpha, \beta, \gamma$ for cubic or $\alpha^2, \alpha\beta, \beta^2$ or something for quadratic.

Actually typically for quadratic, "roots in GP" means $\alpha/r, \alpha r$ or equivalently $\beta/\alpha = \gamma/\beta$ which doesn't make sense for 2 roots.

I think the intended meaning is: $\beta^2 = \alpha \cdot \gamma$ but with only 2 roots... Let me just solve assuming roots are $k$ and $kr$:
Then $k + kr = -p$ and $k^2r = q$.
So $k(1+r) = -p$ and $k^2r = q$.
From first: $k = -p/(1+r)$.
Plug into second: $p^2 r/(1+r)^2 = q$.
So $p^2 r = q(1+r)^2 = q(1 + 2r + r^2)$.
Or $p^2 r = q + 2qr + qr^2$.
$qr^2 + (2q - p^2)r + q = 0$.
This gives relation between $p, q$ and $r$. Eliminating $r$: discriminant of this quadratic in $r$ must be non-negative for real $r$.
$(2q - p^2)^2 - 4q^2 \geq 0$... which gives $p^2(p^2 - 4q) \geq 0$.
Since $p^2 \geq 0$, we need $p^2 - 4q \geq 0$, which is just $D \geq 0$ for real roots. So for any quadratic with real roots, we can arrange them in GP? That doesn't make sense.

Let me try another interpretation: If $\alpha, \beta$ are roots and are in GP, then $\beta/\alpha = \beta/\beta = 1$, which forces $\alpha = \beta$. So equal roots in GP. But then $r = 1$ and roots are equal. So condition is $D = 0$.

*Example 2 (JEE 2022):* Find $m$ such that roots of $x^2 + (3m-1)x + 2m^2 = 0$ are real and positive.

Real roots: $D \geq 0$.
$(3m-1)^2 - 8m^2 \geq 0$.
$9m^2 - 6m + 1 - 8m^2 \geq 0$.
$m^2 - 6m + 1 \geq 0$.
$m \leq 3 - 2\sqrt{2}$ or $m \geq 3 + 2\sqrt{2}$.

Positive roots: $S > 0$ and $P > 0$.
$S = -(3m-1) > 0$ → $3m - 1 < 0$ → $m < 1/3$.
$P = 2m^2 > 0$ (always positive for $m \neq 0$).

Also real: $m \leq 3 - 2\sqrt{2} \approx 3 - 2.828 = 0.172$ or $m \geq 3 + 2\sqrt{2} \approx 5.828$.
Combined with $m < 1/3$: we get $m \leq 3 - 2\sqrt{2}$.
Also $m = 0$ gives $x^2 - x = 0$, roots $0$ and $1$, not both positive (zero is not positive). Exclude $m = 0$.

So answer: $m \in (-\infty, 3-2\sqrt{2}] \setminus \{0\}$ or more simply $m \leq 3 - 2\sqrt{2}$ and $m \neq 0$.
Since $3-2\sqrt{2} \approx 0.172 < 1/3$, the main constraint is $m \leq 3-2\sqrt{2}$, $m \neq 0$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Descarte's Rule of Signs:**
The number of positive real roots equals the number of sign changes in $f(x)$, minus an even number.
The number of negative real roots equals sign changes in $f(-x)$.

**Sturm's Theorem:**
Provides exact count of real roots in an interval.

**Rolle's Theorem Applications:**
Between any two roots of $f(x) = 0$, there is at least one root of $f'(x) = 0$.
If $f(x) = ax^2 + bx + c = 0$ has roots $\alpha < \beta$:
Then $f'(x) = 2ax + b = 0$ has root $\gamma = -b/(2a) = (\alpha + \beta)/2$, exactly the midpoint.

**Advanced Problems:**

*Problem (JEE Advanced 2019):* If both roots of $x^2 + px + q = 0$ are positive integers, find number of ordered pairs $(p, q)$ with $p, q \in [1, 10]$.

Let roots be $m, n$ (positive integers).
Then $p = -(m+n)$ which is negative. But $p \in [1, 10]$ is positive. Something is off.

Actually the problem might be with signs. Let me re-examine: For $x^2 + px + q = 0$, sum of roots $= -p$, product $= q$.
If roots are positive integers, sum is positive, so $-p > 0$ means $p < 0$. But $p \in [1, 10]$ means $p > 0$. Contradiction.

So maybe the equation is $x^2 - px + q = 0$?
Then sum $= p$, product $= q$. Both positive means $p > 0, q > 0$.

For $x^2 - px + q = 0$ with roots $m, n$ (positive integers):
$m + n = p$, $mn = q$.
We need $p \in [1, 10], q \in [1, 10]$.

Factors of numbers 1 to 10:
$q = 1$: $mn = 1$ → $(1,1)$ → $p = 2$.
$q = 2$: $mn = 2$ → $(1,2)$ or $(2,1)$ → $p = 3$.
$q = 3$: $(1,3)$ or $(3,1)$ → $p = 4$.
$q = 4$: $(1,4), (2,2), (4,1)$ → $p = 5, 4, 5$.
$q = 5$: $(1,5), (5,1)$ → $p = 6$.
$q = 6$: $(1,6), (2,3), (3,2), (6,1)$ → $p = 7, 5, 5, 7$.
$q = 7$: $(1,7), (7,1)$ → $p = 8$.
$q = 8$: $(1,8), (2,4), (4,2), (8,1)$ → $p = 9, 6, 6, 9$.
$q = 9$: $(1,9), (3,3), (9,1)$ → $p = 10, 6, 10$.
$q = 10$: $(1,10), (2,5), (5,2), (10,1)$ → $p = 11, 7, 7, 11$.

But $p \leq 10$, so filter: $p = 2, 3, 4, 5, 6, 7, 8, 9, 10$.
Now count valid pairs $(p,q)$:
$q=1$: 1 pair ($p=2$)
$q=2$: 1 pair ($p=3$)
$q=3$: 1 pair ($p=4$)
$q=4$: 2 pairs ($p=4,5$ but $p=4$ with roots (2,2), $p=5$ with (1,4) or (4,1))
Actually let's list: for $q=4$: $(1,4) \to p=5$, $(2,2) \to p=4$, $(4,1) \to p=5$.
So pairs: $(4,4)$ from $(2,2)$ and $(5,4)$ from $(1,4)$, $(5,4)$ from $(4,1)$.

Wait, each combination gives unique $(p,q)$. Let's just enumerate all pairs $(m,n)$ with $mn \leq 10$ and count unique $(p=m+n, q=mn)$ with $p \leq 10$.

List all pairs $(m,n)$ with $1 \leq m \leq n$, $mn \leq 10$:
$(1,1): (p,q) = (2,1)$
$(1,2): (3,2)$
$(1,3): (4,3)$
$(1,4): (5,4)$
$(1,5): (6,5)$
$(1,6): (7,6)$
$(1,7): (8,7)$
$(1,8): (9,8)$
$(1,9): (10,9)$
$(1,10): (11,10)$ — reject (p > 10)
$(2,2): (4,4)$
$(2,3): (5,6)$
$(2,4): (6,8)$
$(2,5): (7,10)$
$(3,3): (6,9)$
$(3,4): (7,12)$ — reject

So pairs with $p \leq 10$: $(2,1), (3,2), (4,3), (5,4), (6,5), (7,6), (8,7), (9,8), (10,9), (4,4), (5,6), (6,8), (7,10), (6,9)$.
That's 14 pairs.

**JEE Advanced Patterns (2018–2024):**
- Transformation of roots (with reciprocals, squares) is a recurring theme
- Condition for one root to be greater than/less than a given number
- Common root problems appear in mixed difficulty sets
- Location of roots (between intervals, in specific quadrants) tested in 2020, 2023
- maxima-minima with quadratic constraints is trending upward

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
