---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-009
topicName: Algebra
tier: standard
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "A comprehensive diagram showing: (1) two linear equations as lines on a graph intersecting at the solution, (2) the quadratic formula components labeled, and (3) an AP sequence as ascending dots with the common difference marked."
country: India
generated: ai-v1
---



## Algebra

### Concept

**Linear Equations — One Solution, Always**

A linear equation in one variable (ax + b = 0) always has exactly one solution: x = –b/a. The graph is a straight line crossing the x-axis at that point.

With TWO linear equations in two variables, you have three possibilities:
- **One solution** — lines intersect at one point
- **No solution** — lines are parallel (same slope, different intercept)
- **Infinite solutions** — lines are actually the same line

To solve, use either **substitution** (solve one for a variable, plug into the other) or **elimination** (multiply equations so one variable cancels when added).

**Quadratic Equations — The Discriminant is Your Friend**

The discriminant D = b² – 4ac tells you everything about the roots before you find them:
- **D > 0:** Two distinct real roots
- **D = 0:** Two equal real roots (repeated root)
- **D < 0:** No real roots (complex roots exist, but not in CUET scope)

The quadratic formula gives you the roots directly. But many CUET questions let you **factor** the quadratic instead — much faster when it works! If x² – 5x + 6 = 0, think: "what two numbers multiply to +6 and add to –5?" → –2 and –3. So (x–2)(x–3) = 0, giving x = 2 or 3.

**Vieta's Formulas — Sum and Product of Roots**

For ax² + bx + c = 0 with roots α and β:
- α + β = –b/a (sum of roots)
- αβ = c/a (product of roots)

This is HUGE for problems that ask for expressions involving roots without finding the roots themselves.

**Progressions — Patterns That Behave Predictably**

An **Arithmetic Progression (AP)** has a constant difference d between consecutive terms:
- aₙ = a + (n–1)d
- Sum of n terms: Sₙ = n/2[2a + (n–1)d] = n(a + l)/2 where l is the last term

A **Geometric Progression (GP)** has a constant ratio r:
- aₙ = ar^(n–1)
- Sum of n terms: Sₙ = a(r^n – 1)/(r – 1) when r ≠ 1

### Key Formulas
| Formula | Use |
|---------|-----|
| x = –b/a | Solving linear equation ax + b = 0 |
| x = [–b ± √(b²–4ac)]/2a | Quadratic formula |
| D = b² – 4ac | Discriminant |
| α + β = –b/a | Sum of quadratic roots |
| αβ = c/a | Product of quadratic roots |
| aₙ = a + (n–1)d | nth term of AP |
| Sₙ = n/2[2a + (n–1)d] | Sum of n terms of AP |
| aₙ = ar^(n–1) | nth term of GP |
| Sₙ = a(r^n – 1)/(r – 1) | Sum of n terms of GP (r ≠ 1) |

### Worked Example
**Q:** If α and β are roots of x² – 7x + 10 = 0, find α³ + β³.

**Step 1:** From Vieta: α + β = 7, αβ = 10
**Step 2:** Use identity: α³ + β³ = (α + β)³ – 3αβ(α + β)
**Step 3:** = 7³ – 3(10)(7) = 343 – 210 = 133

**Answer:** **133**

### Common Errors
- **Forgetting to divide by a in quadratic formula** → It's 2a in the denominator, not just 2!
- **Sign errors in Vieta's formulas** → α + β = –b/a, αβ = c/a — watch the negative sign for sum
- **Using wrong GP sum formula for r < 1** → For r < 1, Sₙ = a(1 – r^n)/(1 – r) is equivalent — same thing
- **Confusing AP and GP** → AP: add d each time; GP: multiply by r each time
