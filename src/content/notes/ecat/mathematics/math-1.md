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
lastUpdated: "2026-09-08"
diagramPrompt: "Mathematical diagram showing Quadratic Equations and Inequalities concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Quadratic Equations and Inequalities

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **quadratic equation** in $x$ has the standard form $ax^2 + bx + c = 0$ with $a, b, c \in \mathbb{R}$ and $a \neq 0$. Its solutions are found from the **quadratic formula** $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$, where $D = b^2 - 4ac$ is the **discriminant**. The roots satisfy **Vieta's relations**: sum $= -b/a$ and product $= c/a$.

- $D > 0$: two distinct real roots; $D = 0$: one repeated root; $D < 0$: complex conjugate roots (no real solutions).
- Quadratic inequalities $ax^2 + bx + c \gtrless 0$ are solved by plotting the roots on a number line and reading the sign of the parabola between them (sign chart method).
- Vertex of $y = ax^2 + bx + c$ sits at $x = -b/(2a)$, $y = -D/(4a)$ — useful for maxima/minima and for finding the range of a quadratic expression.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Standard Form and the Three Solution Methods

Every quadratic is written as $ax^2 + bx + c = 0$, with $a \neq 0$. ECAT expects fluency in three routes to the roots: **factorization** (split the middle term when the discriminant is a perfect square), **completing the square** ($x = \left(x + \dfrac{b}{2a}\right)^2 - \dfrac{D}{4a^2}$), and the **quadratic formula**. Always verify $a \neq 0$ first — a missing $x^2$ term converts the equation into a linear one.

#### Discriminant and Nature of Roots

The discriminant $D = b^2 - 4ac$ decides the root structure without solving explicitly. This is heavily tested because ECAT questions frequently ask *"for what value of $k$ do the roots…?"* and the answer comes straight from an inequality on $D$.

| Case | Condition on $D$ | Nature of roots |
| --- | --- | --- |
| Two distinct real | $D > 0$ | $x_1 \neq x_2 \in \mathbb{R}$ |
| One repeated real | $D = 0$ | $x_1 = x_2 = -b/(2a)$ |
| No real roots | $D < 0$ | Complex conjugate pair $x = \alpha \pm i\beta$ |

#### Vieta's Formulas and Sign of Roots

For roots $x_1, x_2$: $x_1 + x_2 = -b/a$ and $x_1 x_2 = c/a$. These let you build a quadratic from its roots as $x^2 - (sum)x + (product) = 0$, and decide sign behaviour: if $D \geq 0$ and $c/a > 0$, both roots share the sign of $-b/a$.

#### Quadratic Inequalities (Sign Chart Method)

For $ax^2 + bx + c > 0$ or $< 0$, factor or find roots, then mark them on a number line. Because the parabola has at most two sign changes, the sign alternates between intervals. A positive leading coefficient $a > 0$ means the expression is positive outside the roots and negative between them; for $a < 0$, the pattern flips. Always write the answer in **interval notation** such as $(-\infty, x_1) \cup (x_2, \infty)$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Example — Combined Discriminant + Vieta Question

> ECAT trick: when asked for two conditions simultaneously (e.g., *real roots AND both positive*), use $D \geq 0$ plus $sum > 0$ plus $product > 0$.

#### Find $k$ so that $x^2 - 4x + (k-1) = 0$ has two distinct positive roots.
Here $a = 1$, $b = -4$, $c = k-1$. Two distinct real roots require $D = 16 - 4(k-1) > 0 \Rightarrow k < 5$. Both positive requires sum $= 4 > 0$ (auto-satisfied) and product $= k - 1 > 0 \Rightarrow k > 1$. Intersection: $1 < k < 5$.

#### Edge Cases and Common Mistakes

- Dividing an inequality by a negative number without flipping the $<$ or $>$ sign is the single most common error in inequality MCQs.
- Confusing the **vertex** $x$-coordinate $-b/(2a)$ with a root — the vertex is the turning point, not a zero of the polynomial.
- Treating $D < 0$ as "no solution" rather than "no **real** solution"; complex roots still satisfy the equation.

#### Adjacent-Topic Links

| Connected topic | Why it matters here |
| --- | --- |
| Complex numbers | $D < 0$ roots are written $\alpha \pm i\beta$ with modulus $\sqrt{\alpha^2 + \beta^2}$ |
| Coordinate geometry | The parabola $y = ax^2 + bx + c$ links to circle/line intersection problems |
| Sequences & series | Roots of $x^2 - Sx + P = 0$ generate AP/GP problems via Vieta's |
| Maxima/minima | Vertex $y = -D/(4a)$ gives the range of any quadratic expression |

#### Practice Prompts

1. Solve $2x^2 - 7x + 3 \leq 0$ and express the solution set in interval notation.
2. If $\alpha, \beta$ are roots of $x^2 - 5x + 6 = 0$, form the quadratic whose roots are $\alpha^2$ and $\beta^2$ using Vieta's formulas.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Quadratic Equations and Inequalities" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
