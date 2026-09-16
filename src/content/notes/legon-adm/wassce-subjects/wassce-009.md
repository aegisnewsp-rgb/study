---
exam: legon-adm
examName: Legon Admissions (Ghana)
subject: wassce-subjects
subjectName: "Wassce-Subjects"
topic: wassce-009
topicName: "Quadratic Equations"
weight: 3
country: ghana
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-16"
---

# Quadratic Equations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **quadratic equation** in one variable has the standard form **ax² + bx + c = 0**, where a, b, and c are real constants and **a ≠ 0**. It is the algebraic form whose graph is a **parabola**, and the two solutions (called **roots**) come from the quadratic formula or from factorisation.

- **Standard form:** ax² + bx + c = 0; a ≠ 0 (unitless coefficients).
- **Quadratic formula:** x = (−b ± √(b² − 4ac)) / (2a); roots are unitless.
- **Discriminant D = b² − 4ac** decides root nature: D > 0 two distinct reals, D = 0 two equal reals, D < 0 no real roots.
- **Sum of roots:** α + β = −b/a. **Product:** αβ = c/a.
- **Vertex form:** y = a(x − h)² + k, with axis of symmetry x = h = −b/(2a).

> 💡 **High-Yield Memory Hook:** **"ABC, D rules, SUM-PROD"** — first identify **A**=a, **B**=b, **C**=c, then check **D**=b²−4ac, then read **SUM**=−b/a and **PROD**=c/a. One glance at the coefficients answers four questions at once.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Three Solving Routes

Factorisation, completing the square, and the quadratic formula are the three legally recognised routes to the roots of ax² + bx + c = 0. Factorisation is fastest when you can spot two numbers whose **sum is −b/a** and **product is c/a**. When the numbers refuse to be nice, the formula x = (−b ± √(b² − 4ac)) / (2a) finishes the job mechanically. Completing the square is the route examiners love for derivation questions, because it exposes the vertex (−b/(2a), −D/(4a)) and proves the formula itself.

#### Comparing the Three Methods

| Method | Best for | Output | Examiner tell-tale cue |
|---|---|---|---|
| Factorisation | Integer/half-integer roots | Roots in factor form | "Find two numbers whose sum and product…" |
| Quadratic formula | Any coefficients | Exact or numeric roots | "Hence solve using the quadratic formula" |
| Completing the square | Deriving vertex, sketching parabola | y = a(x − h)² + k | "Express in the form a(x − p)² + q" |
| Discriminant test | Nature-of-roots questions only | Statement about roots | "Show that the equation has no real roots" |

#### Discriminant Decisions

| Discriminant D | Nature of roots | Parabola position |
|---|---|---|
| D > 0 | Two distinct real roots | Crosses x-axis twice |
| D = 0 | Two equal real roots (a repeated root) | Touches x-axis at vertex |
| D < 0 | No real roots (complex conjugate pair) | Lies entirely above or below x-axis |

#### Worked Steps to Solve x² − 5x + 6 = 0

1. Identify a = 1, b = −5, c = 6.
2. Compute D = (−5)² − 4(1)(6) = 25 − 24 = 1.
3. Apply the formula: x = (5 ± √1) / 2 = (5 ± 1) / 2.
4. Roots: x = 3 and x = 2; check: (3)(2) = 6 = c/a ✓, and 3 + 2 = 5 = −b/a ✓.

> 📌 **Formula Check:** Every variable in x = (−b ± √D)/(2a) is unitless because x, a, b, c are pure numbers. The "√D" sits over the entire numerator branch — never divide √D by 2a alone.

#### Forming Equations From Roots

Given roots α and β, build the equation using **x² − (α + β)x + αβ = 0**. The two minus signs are non-negotiable: drop one and you introduce a sign error that flips both root values.

#### 🎯 Exam-Level Worked Problem

**Question:** Solve 2x² − 3x − 5 = 0 using the quadratic formula, and state the nature of the roots.

#### Solution:
- Coefficients: a = 2, b = −3, c = −5.
- Discriminant: D = (−3)² − 4(2)(−5) = 9 + 40 = 49.
- Since D = 49 > 0, the equation has **two distinct real roots**.
- Apply formula: x = (−(−3) ± √49) / (2·2) = (3 ± 7) / 4.
- x₁ = (3 + 7)/4 = 10/4 = **5/2**; x₂ = (3 − 7)/4 = −4/4 = **−1**.
- Check product: (5/2)(−1) = −5/2 = c/a ✓.

> ⚠️ **Examiner Trap:** With c negative, students panic and change the sign of D or write b² + 4ac. D = b² − 4ac must keep the minus sign — the factor 4 multiplies whatever sign c carries, and a negative c makes D bigger, not smaller.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Traps and Edge Cases

1. **a = 0 collapse** — if the coefficient of x² is zero, the equation is linear, not quadratic. Examiners hide this by writing 3x² + 0x − 12 = 0 in disguise.
2. **Repeated-root geometry** — D = 0 means the parabola just **kisses** the x-axis; the vertex equals the root, so x = −b/(2a) is the only solution.
3. **Negative root rejection** — in word problems about ages, lengths, or speeds, the negative root is algebraically valid but contextually meaningless; always state which root is admissible.
5. **Parameter quadratics** — equations like kx² + (k+1)x + 1 = 0 require using D ≥ 0 to find the range of k for real roots.
6. **Simultaneous pair** — substituting y = mx + c into xy = 4 produces a quadratic in x alone; missing a factor when rearranging produces a "lost root".

| Scenario | What students typically do wrong | Correct discipline |
|---|---|---|
| a = 0 hidden as "0x²" | Apply the quadratic formula | First verify a ≠ 0 before any formula |
| Forming equation from roots | Write x² + (sum)x + product = 0 | Use **minus** signs: x² − (sum)x + product = 0 |
| D < 0 in a word problem | Declare "no solution" outright | State "no real solution" and check if context allows complex |
| Factor of 2a missed | Write x = (−b ± √D)/a | Denominator is 2a, never just a |
| Simultaneous substitution | Leave x and y mixed in one line | Eliminate one variable fully, then solve quadratic in the other |

#### Connection to Adjacent Topics

Quadratic equations feed **coordinate geometry** (parabola sketching), **inequalities** (sign chart of ax² + bx + c), **sequences and series** (solving for common ratio of a GP), and **calculus** (finding stationary points by setting derivative to zero, which produces a quadratic). Mastery here unlocks four other WASSCE topics at once.

#### Advanced Practice Prompts

- If α and β are roots of 3x² − 7x + 2 = 0, find an equation whose roots are α/β and β/α without solving the original.
- A rectangle has area 84 m² and perimeter 38 m. Set up, then solve, the quadratic that gives its dimensions.

---

## Continue your study

- **[View this topic in your Legon Admissions (Ghana) roadmap](/roadmap/?exam=legon-adm&duration=1mo)** — see where "Quadratic Equations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=legon-adm&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Legon Admissions (Ghana) exam overview](/exams/legon-adm/)** — pattern, eligibility, and syllabus
- **[All Wassce-Subjects notes](/notes/legon-adm/wassce-subjects/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
