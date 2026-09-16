---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-012
topicName: Quadratic Equations
weight: 3
country: india
generated: "2026-03-29T05:06:11"
lastUpdated: "2026-09-16"
---

# Quadratic Equations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **quadratic equation** in one variable $x$ is any equation reducible to the standard form $ax^2 + bx + c = 0$, where $a$, $b$, $c$ are real coefficients and **$a \neq 0$** (this last condition is what makes the degree exactly 2). The values of $x$ that satisfy the equation are called **roots**, and a degree-2 polynomial has at most two roots by the Fundamental Theorem of Algebra.

> 💡 **High-Yield Memory Hook:** **"D-BAC"** — Discriminant = $b^2 - 4ac$. Then read off the nature: **D > 0** = two distinct real roots, **D = 0** = equal/twin roots, **D < 0** = complex conjugate pair (no real roots). Pair this with **"Sum = -b/a, Product = c/a"** — Vieta's two-line recall for every CUET MCQ on roots.

| Term | Meaning |
|---|---|
| Standard form | $ax^2 + bx + c = 0$, $a \neq 0$ |
| Root | Value of $x$ satisfying the equation |
| Discriminant $D$ | $b^2 - 4ac$ (decides nature of roots) |
| Vieta's relations | $\alpha + \beta = -b/a$, $\alpha \beta = c/a$ |
| Quadratic formula | $x = \dfrac{-b \pm \sqrt{b^2-4ac}}{2a}$ |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Idea and Standard Form

A polynomial $p(x)$ is **quadratic** when its highest power of $x$ is exactly 2. The canonical equation is $ax^2 + bx + c = 0$ with real coefficients and $a \neq 0$. Three different forms are routinely tested in CUET UG Mathematics (paper code 319):

- **Standard form:** $ax^2 + bx + c = 0$
- **Vertex form:** $a(x-h)^2 + k = 0$, with vertex $(h, k)$ where $h = -b/(2a)$
- **Factored form:** $a(x-\alpha)(x-\beta) = 0$, with roots $\alpha, \beta$

These three representations are algebraically equivalent; converting between them is a frequent MCQ pattern.

#### Nature of Roots via the Discriminant

The quantity $D = b^2 - 4ac$ is **dimensionless** (a pure ratio of coefficients) and completely determines the geometry of the solution set:

| Condition on $D$ | Nature of roots | Graph of $y = ax^2+bx+c$ |
|---|---|---|
| $D > 0$ | Two distinct real roots $\alpha \neq \beta$ | Cuts $x$-axis at two points |
| $D = 0$ | Two equal real roots $\alpha = \beta = -b/(2a)$ | Touches $x$-axis (vertex on axis) |
| $D < 0$ | Two non-real complex conjugate roots | No $x$-intercept |

#### Vieta's Formulas (Sum and Product of Roots)

If $\alpha$ and $\beta$ are the roots of $ax^2+bx+c=0$, then **without solving** you can quote:

$$\alpha + \beta = -\frac{b}{a}, \qquad \alpha \beta = \frac{c}{a}$$

Both quantities are dimensionless ratios of coefficients. CUET frequently reverses this: given the sum and product, you must reconstruct the equation as $x^2 - (\alpha+\beta)x + \alpha\beta = 0$.

#### 🎯 Exam-Level Worked Problem

**Question:** If one root of $2x^2 - 5x + k = 0$ is the reciprocal of the other, and $k$ is a real number, then the value of $k$ is:
(A) 2   (B) −2   (C) 5/2   (D) 1/2

#### Solution:

Step 1 — Apply Vieta's product: $\alpha \beta = c/a = k/2$.

Step 2 — Translate "one root is the reciprocal of the other": $\alpha \beta = 1$.

Step 3 — Equate: $k/2 = 1 \Rightarrow k = 2$.

Step 4 — Verify with discriminant: $D = (-5)^2 - 4(2)(2) = 25 - 16 = 9 > 0$, so both roots are real and distinct. Good.

#### Answer: (A) 2.

> ⚠️ **Examiner Trap:** Students pick (B) −2 by misapplying $\alpha + \beta = -b/a$ and getting "$-5/2 = 1/\alpha + \alpha$", then solving incorrectly. The condition "reciprocal roots" concerns the **product**, not the sum — always match the verbal condition to the correct Vieta identity.

#### Common Pitfalls to Avoid

- Forgetting $a \neq 0$ and treating a linear equation as quadratic.
- Writing $x = \dfrac{+b \pm \sqrt{D}}{2a}$ — the minus sign before $b$ is mandatory.
- Concluding "no solution" when $D < 0$ — the equation has **complex** roots, not zero solutions.
- Applying Vieta's formulas to $x^2 + px + q = 0$ without the $1/a$ factor when the leading coefficient is not 1.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Derivation of the Quadratic Formula (Completing the Square)

Starting from $ax^2 + bx + c = 0$, divide by $a$ (legal since $a \neq 0$): $x^2 + (b/a)x + (c/a) = 0$. Shift the constant: $x^2 + (b/a)x = -(c/a)$. Add and subtract $(b/2a)^2$ on the left:

$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}$$

Taking square roots gives $x + \dfrac{b}{2a} = \pm\dfrac{\sqrt{b^2-4ac}}{2a}$, hence $x = \dfrac{-b \pm \sqrt{b^2-4ac}}{2a}$. This derivation is the cleanest proof that the formula is valid whenever $a \neq 0$ and that $D < 0$ produces complex roots (because $\sqrt{D}$ becomes $\sqrt{|D|}\,i$).

#### Advanced Traps and Exceptions

1. **Hidden $a = 0$.** In MCQs like "the equation $kx^2 + 2x + 1 = 0$ has equal roots, find $k$," always check that $k$ itself is not zero — otherwise the equation degenerates to a linear one with a different root count.
2. **Common root problems.** Two quadratics $a_1x^2+b_1x+c_1 = 0$ and $a_2x^2+b_2x+c_2 = 0$ share a common root iff the resultant determinant $\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ 0 & a_2 & b_2 \end{vmatrix} = 0$ (or the equivalent elimination).
3. **Sign of $a$ and parabola opening.** $a > 0$ opens upward (minimum at vertex), $a < 0$ opens downward (maximum at vertex). CUET sometimes frames discriminant questions in graphical language.
4. **Discriminant of a transformed equation.** Multiplying the equation by a constant does not change $D$ qualitatively but multiplying $x \to kx$ rescales $D$ by $k^2$. Watch for substitution traps.
5. **Range problems.** $ax^2 + bx + c > 0$ for all real $x$ requires $a > 0$ **and** $D < 0$. This biconditional is a regular assertion-reason MCQ.

#### Connections to Adjacent CUET Topics

- **Sequences & Series:** arithmetic-geometric progressions satisfy quadratic recurrences; Vieta's formulas give closed forms.
- **Coordinate Geometry:** the parabola $y = ax^2 + bx + c$ has roots as $x$-intercepts and vertex $(h, k)$ with $h = -b/(2a)$.
- **Inequalities:** sign of $ax^2 + bx + c$ across the real line is controlled by $a$ and $D$.
- **Complex Numbers:** $D < 0$ produces conjugate roots $\alpha, \bar\alpha$ with $\alpha + \bar\alpha = -b/a$ and $\alpha \bar\alpha = c/a$, linking to modulus-argument MCQs.

#### Two Practice Prompts

1. Find all real values of $p$ for which $x^2 + (p-3)x + p = 0$ has both roots positive.
2. If the quadratic $x^2 - (k+1)x + (k^2 + k - 8) = 0$ has roots that differ by 3, determine $k$.

---

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Quadratic Equations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
