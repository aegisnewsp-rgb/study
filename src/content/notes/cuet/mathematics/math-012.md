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
lastUpdated: "2026-07-24"
---

# Quadratic Equations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **quadratic equation** in one variable has the standard form **ax² + bx + c = 0**, where a, b, c are real constants and **a ≠ 0**. The two roots are the values of x that satisfy the equation.

- **Roots via quadratic formula:** x = (−b ± √(b² − 4ac)) / 2a
- **Discriminant D = b² − 4ac** decides root count: D > 0 → two distinct real roots, D = 0 → equal real roots, D < 0 → complex conjugate roots.
- **Vieta's relations:** sum α + β = −b/a, product αβ = c/a.
- **Factored form:** a(x − α)(x − β) = 0.

| Method | Best used when |
| --- | --- |
| Factorisation | Coefficients are small integers and roots are rational |
| Quadratic formula | Coefficients are messy, decimals, or non-factorable |
| Completing the square | Question asks for vertex form or completing-the-square identity |

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Standard form and degree check

Every quadratic must be rewritten in **ax² + bx + c = 0** before applying any method. The leading coefficient **a ≠ 0** is non-negotiable; an equation that drops to degree 1 after simplification is linear, not quadratic. Watch for hidden quadratics such as equations in x² (treat u = x²) or in √x (treat u = √x).

#### Solving by three equivalent routes

Factorisation rewrites the polynomial as a(x − α)(x − β) = 0 so each root is read off. The quadratic formula handles every case in one stroke, including messy coefficients. Completing the square converts ax² + bx + c into a(x + b/(2a))² + (4ac − b²)/(4a), exposing the vertex **(h, k) = (−b/(2a), (4ac − b²)/(4a))** and the axis of symmetry x = −b/(2a).

#### Discriminant and nature of roots

The single quantity **D = b² − 4ac** classifies the roots without computing them. If D is a perfect square, the roots are rational; if D > 0 but not a perfect square, the roots are irrational real numbers; if D < 0, the roots are complex conjugates **α, ᾱ** with non-zero imaginary part.

#### Vieta's formulas and root construction

For roots α and β of ax² + bx + c = 0, Vieta's formulas give **S = α + β = −b/a** and **P = αβ = c/a**. Given any two numbers α, β, the monic quadratic with those roots is **x² − (α + β)x + αβ = 0**. Symmetric expressions in α, β (such as α² + β² = S² − 2P, 1/α + 1/β = S/P) reduce to S and P without solving for individual roots.

| Mistake | Why it costs marks |
| --- | --- |
| Writing sum = b/a | Sign error — correct value is −b/a |
| Reporting one root from the formula | The ± produces two roots unless D = 0 |
| Treating D ≥ 0 as "equal roots" | D = 0 alone gives equal roots; D > 0 gives distinct |
| Squaring a √x equation | Extraneous roots enter; verify each candidate |

- CUET UG context: 3% weight, usually **1–2 MCQs** per paper.
- Typical items: nature of roots, discriminant comparison, sum/product of roots, forming a quadratic from given roots.
- Reject impossible roots in word problems (negative ages, non-integer counts).

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Discriminant as a comparative tool

When comparing two quadratics or locating a parameter k for a desired root property, treat D as a function of k. For real roots, require D(k) ≥ 0; for equal roots, D(k) = 0; for roots of opposite sign, require P = c/a < 0. For a common root between a₁x² + b₁x + c₁ = 0 and a₂x² + b₂x + c₂ = 0, the condition is **(a₁b₂ − a₂b₁)² = (a₁c₂ − a₂c₁)(b₁c₂ − b₂c₁)**, useful in CUET assertion-reason items.

#### Worked micro-example

For x² − 5x + 6 = 0: D = 25 − 24 = 1 > 0, so two distinct real roots; roots = (5 ± 1)/2, giving 3 and 2. Vieta check: sum = 5 = −(−5)/1 ✓, product = 6 = 6/1 ✓. Forming the quadratic with roots 3 and 7: x² − 10x + 21 = 0.

#### Higher-degree reductions

Quadratic techniques extend beyond degree 2. Equations like x⁴ − 5x² + 4 = 0 become u² − 5u + 4 = 0 under u = x², yielding u = 1 or 4 and so x = ±1, ±2. Equations with √x terms become quadratics in √x after substitution, but every candidate must be back-substituted and rejected if it makes the original radicand negative.

#### Links to adjacent CUET topics

The parabola y = ax² + bx + c shares its vertex and axis with the quadratic's maximum/minimum problem, feeding directly into Calculus and Coordinate Geometry. Vieta's S and P appear again in Sequences and Series for sum of roots of polynomial equations.

| Practice prompt | Skill tested |
| --- | --- |
| If α, β are roots of 2x² − 3x + 5 = 0, find α² + β² and 1/α + 1/β | Vieta's formulas, symmetric expressions |
| Find k so that x² + (k−1)x + 9 = 0 has equal roots | Discriminant condition D = 0 |

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Quadratic Equations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
