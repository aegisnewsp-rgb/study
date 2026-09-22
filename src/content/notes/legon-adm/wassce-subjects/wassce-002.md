---
exam: legon-adm
examName: Legon Admissions (Ghana)
subject: wassce-subjects
subjectName: "Wassce-Subjects"
topic: wassce-002
topicName: Algebraic Processes
weight: 5
country: ghana
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-16"
---

# Algebraic Processes

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your WASSCE Core Mathematics paper.

**Algebraic Processes** covers the symbolic manipulation of expressions and equations — expansion, factorization, simplification, substitution, and solving linear, quadratic, and simultaneous equations. It is the single largest tested block in **WASSCE Core Mathematics Paper 2, Section A** and is the gateway skill for the University of Ghana, Legon aggregate calculation.

| Operation | Core Identity / Rule |
|---|---|
| Linear solution | $ax + b = 0 \Rightarrow x = -\dfrac{b}{a}$ (with $a \neq 0$) |
| Perfect square | $(a \pm b)^2 = a^2 \pm 2ab + b^2$ |
| Difference of squares | $a^2 - b^2 = (a+b)(a-b)$ |
| Quadratic formula | $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ (with $a \neq 0$) |
| Discriminant | $\Delta = b^2 - 4ac$ |

> 💡 **High-Yield Memory Hook:** **"BEED"** — **B**rackets first, then **E**xponents, then **E**quations (multiplication/division left-to-right), then **D**ifference (addition/subtraction). Also recall: $(a+b)^2$ is **NOT** $a^2+b^2$ — the middle term $2ab$ must always appear.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for systematic WASSCE revision over weeks to months.

#### Core Operations and Their Logic
**Expansion** uses the distributive law $a(b+c) = ab + ac$. For binomials, the middle term of any squared bracket is twice the product of the two terms, never zero. **Factorization** reverses expansion: a trinomial $ax^2 + bx + c$ factors into two brackets whose product gives the original expression.

**Simultaneous linear equations** in two unknowns are solved by (i) **substitution** — express one variable from one equation and replace in the other, or (ii) **elimination** — multiply equations to cancel one variable by adding or subtracting.

**Quadratic equations** of the form $ax^2 + bx + c = 0$ (with $a \neq 0$, $a,b,c \in \mathbb{R}$) are tackled by factorization first, then the quadratic formula.

#### Concept Comparison Matrix

| Concept | What it tests | Typical WASSCE trap |
|---|---|---|
| $x = -b/a$ (linear) | Single unknown, first degree | Dividing by $a$ when $a = 0$ makes the equation degenerate |
| Quadratic formula | Second degree polynomial | Forgetting to rewrite equation as $=0$ before substituting $a,b,c$ |
| Substitution method | Simultaneous equations | Dropping a solution when the substituted variable equals zero |
| Elimination method | Simultaneous equations | Sign error when subtracting equations row-by-row |
| $\Delta = b^2 - 4ac$ | Nature of roots | Writing $\Delta \geq 0$ correctly but choosing wrong root count ($\Delta = 0$ gives one root, not two) |
| Difference of squares | Factorization | Mis-signing $(a-b)^2 = a^2 - 2ab + b^2$ as $a^2 + b^2 - 2ab$ confusion |

#### Key Steps for Solving Any WASSCE Algebraic Equation
1. Remove brackets and collect like terms on one side.
2. Rearrange all terms to one side so the other side is zero.
3. For quadratics, attempt factorization; if irrational roots, apply the formula.
4. Substitute each solution back to verify; reject any extraneous root from the domain.
5. For word problems, define the unknown clearly before forming the equation.

#### 🎯 Exam-Level Worked Problem

**Question:** Solve the simultaneous equations $2x + y = 7$ and $x^2 + y^2 = 25$. **[WASSCE-style, 6 marks]**

#### Solution:
From equation (1): $y = 7 - 2x$. Substitute into equation (2):
$$x^2 + (7 - 2x)^2 = 25$$
$$x^2 + 49 - 28x + 4x^2 = 25$$
$$5x^2 - 28x + 24 = 0$$
Apply the quadratic formula with $a = 5$, $b = -28$, $c = 24$:
$$x = \frac{-(-28) \pm \sqrt{(-28)^2 - 4(5)(24)}}{2(5)} = \frac{28 \pm \sqrt{784 - 480}}{10} = \frac{28 \pm \sqrt{304}}{10}$$
$$\sqrt{304} = \sqrt{16 \cdot 19} = 4\sqrt{19}$$
$$x = \frac{28 \pm 4\sqrt{19}}{10} = \frac{14 \pm 2\sqrt{19}}{5}$$
Then $y = 7 - 2x = \frac{35 - 2(14 \pm 2\sqrt{19})}{5} = \frac{7 \mp 4\sqrt{19}}{5}$.
Two real distinct solutions: $(x,y) = \left(\dfrac{14 + 2\sqrt{19}}{5},\ \dfrac{7 - 4\sqrt{19}}{5}\right)$ and $\left(\dfrac{14 - 2\sqrt{19}}{5},\ \dfrac{7 + 4\sqrt{19}}{5}\right)$.

> ⚠️ **Examiner Trap:** Candidates frequently stop after obtaining $x$ and forget to compute the corresponding $y$. Both ordered pairs earn full marks; presenting only the $x$-values loses at least 2 of the 6 marks.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students building long-term mastery before Legon entrance.

#### Edge Cases and Boundary Conditions
- **When $a = 0$:** the equation collapses from quadratic to linear; the formula $\frac{-b \pm \sqrt{b^2-4ac}}{2a}$ becomes undefined.
- **When $\Delta < 0$:** the quadratic has no real roots, but it still has two complex conjugate roots — relevant for higher mathematics at Legon.
- **Domain restrictions:** division by zero is excluded; $\dfrac{1}{x-3}$ requires $x \neq 3$ before any cross-multiplication.
- **Surds and indices:** $\sqrt{a^2} = |a|$, not $a$, unless $a \geq 0$ is assumed.
- **Completing the square:** $x^2 + bx = \left(x + \dfrac{b}{2}\right)^2 - \dfrac{b^2}{4}$ — the constant correction must be subtracted, not added.

#### Advanced Traps and Exceptions

| Trap | Explanation | Correct Approach |
|---|---|---|
| $-(x-3) = -x - 3$ | Sign error on the bracket's second term | Distribute the negative: $-(x-3) = -x + 3$ |
| $\Delta = 0$ equals "two roots" | Repeated root is **one** value of $x$ with multiplicity 2 | State "one repeated root", not "two equal roots" |
| Dividing by $(x-2)$ when $x=2$ | Loses the root $x = 2$ | Factor instead of divide; check $x=2$ separately |
| $(a+b)^2 = a^2 + b^2$ | Drops the cross term $2ab$ | Use the full expansion $a^2 + 2ab + b^2$ |
| Word problem: "twice as old in 5 years" | Misassigns the unknown | Let the present age be $x$; future is $x+5$; equation is $x+5 = 2x$ |

#### Connection to Adjacent WASSCE Topics
Algebraic Processes feeds directly into **Coordinate Geometry** (line and circle equations), **Mensuration** (algebraic formula rearrangement), and **Calculus** (limits, derivatives). The discriminant analysis also reappears in **Further Mathematics** for conic sections.

#### Two Advanced Practice Prompts
1. If $\alpha$ and $\beta$ are the roots of $2x^2 - 6x + 1 = 0$, find $\dfrac{1}{\alpha} + \dfrac{1}{\beta}$ without solving for $\alpha$ and $\beta$ individually. *(Hint: use $\alpha + \beta = 6/2$ and $\alpha\beta = 1/2$.)*
2. Show that $\sqrt{7 + 4\sqrt{3}}$ simplifies to $2 + \sqrt{3}$ using the technique $(a+b)^2 = a^2 + 2ab + b^2$.

---

## Continue your study

- **[View this topic in your Legon Admissions (Ghana) roadmap](/roadmap/?exam=legon-adm&duration=1mo)** — see where "Algebraic Processes" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=legon-adm&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Legon Admissions (Ghana) exam overview](/exams/legon-adm/)** — pattern, eligibility, and syllabus
- **[All Wassce-Subjects notes](/notes/legon-adm/wassce-subjects/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
