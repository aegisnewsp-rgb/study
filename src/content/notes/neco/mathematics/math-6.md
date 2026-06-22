---



exam: neco
examName: NECO SSCE
subject: mathematics
subjectName: Mathematics
topic: math-6
topicName: Simultaneous Equations
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.665635"
lastUpdated: "2026-06-22"
diagramPrompt: "Mathematical diagram showing Simultaneous Equations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Simultaneous Equations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Simultaneous equations** are two (or more) equations in the same variables, solved together to find values satisfying *all* of them at once. The standard form is a pair of linear equations:
**ax + by = c** and **dx + ey = f**, where a, b, c, d, e, f are known constants and **x, y** are the unknowns.

- **Three solution cases:** a unique solution when **a/d ≠ b/e**; **no solution** (inconsistent) when **a/d = b/e ≠ c/f**; **infinitely many solutions** (dependent) when **a/d = b/e = c/f**.
- **Cramer's rule** gives x = (ce − bf)/(ae − bd) and y = (af − cd)/(ae − bd) directly, provided ae − bd ≠ 0.
- NECO SSCE tests 1–3 questions: direct solving by **substitution** or **elimination**, **graphical reading** of intersection, and **word problems** on ages, costs, or rates.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### What a System of Two Linear Equations Represents
Geometrically, each equation ax + by = c is a straight line. Solving two equations simultaneously means finding the **point of intersection** of those two lines. If the lines cross at exactly one point, the system is **consistent and independent**; if they never meet, the system is **inconsistent**; if they lie on top of each other, the system is **dependent**.

#### The Three Solution Cases

| Condition | Meaning | Solution |
|---|---|---|
| a/d ≠ b/e | Lines cross at one point | Unique (x, y) |
| a/d = b/e ≠ c/f | Parallel, distinct lines | None (inconsistent) |
| a/d = b/e = c/f | Same line | Infinitely many (dependent) |

#### Substitution Method
Solve one equation for one variable (e.g., make **x** the subject: x = (c − by)/a) and substitute into the second equation. This produces a single-variable equation you can solve directly, then back-substitute to get the other variable.

#### Elimination Method
Multiply one or both equations by suitable numbers so the coefficients of one variable match. Then **add** the equations to eliminate that variable (signs opposite) or **subtract** them (signs the same). Solve for the remaining variable, then back-substitute.

#### Cramer's Rule
Write the system in matrix form and compute determinants:
- D = ae − bd
- Dx = ce − bf
- Dy = af − cd
Then **x = Dx/D** and **y = Dy/D**. This fails when **D = 0** (no unique solution).

#### NECO SSCE Question Patterns
Paper 1 (Objective) typically offers 1–2 multiple-choice items on determining the number of solutions, identifying the determinant, or computing x and y. Paper 2 (Essay) includes a 5–7 mark problem asking for a full solution by substitution or elimination, plus a 7–10 mark **word problem** translating sentences like "the sum of two numbers is…" or "A is twice as old as B, in 5 years…" into a solvable system.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### When Methods Are Equivalent (and When They Differ)
Substitution, elimination, and Cramer's rule all yield the same answer on a well-posed system, but they differ in efficiency. Substitution shines when one variable already has a coefficient of 1 or −1. Elimination is faster when both variables have large, awkward coefficients. Cramer's rule is best for compact two-by-two systems where determinants can be written out in one line; for three-by-three systems (NECO Extension/electives) the determinant expansion becomes expensive and elimination is preferred.

#### Graphical Method in Detail
Plot each line by finding two points (the intercepts are convenient: set x = 0 to get the y-intercept, y = 0 for the x-intercept). Draw on graph paper using a 2 cm × 2 cm scale, read the **point of intersection** to the nearest unit, and state (x, y). In NECO, graphical solutions often come with a 1 cm × 1 cm grid; misreading coordinates by half a square is a common loss of a mark.

#### Worked Example
Solve 2x + 3y = 12 and 4x − y = 5.
*By elimination:* multiply the second equation by 3 → 12x − 3y = 15. Add to the first: 14x = 27, so **x = 27/14**. Substitute back: y = 4x − 5 = 108/14 − 70/14 = 38/14 = 19/7. Solution: **(27/14, 19/7)**. Check: 2(27/14) + 3(19/7) = 54/14 + 114/14 = 168/14 = 12 ✓ and 4(27/14) − 19/7 = 108/14 − 38/14 = 70/14 = 5 ✓.

#### Common Traps
- **Sign errors** when subtracting equations — flipping a sign silently negates the answer.
- **Dividing by zero** in Cramer's rule: if ae − bd = 0, stop and classify the system instead of forcing a calculation.
- **Word-problem translation errors**: "twice as old" means 2 × (age), not 2 + (age); "sum is" means +; "exceeds" means −. Always define variables clearly first.

#### Connections
Simultaneous equations underpin **linear programming** (constraints), **electrical circuit analysis** (Kirchhoff's laws), and **economics** (supply-demand equilibrium). Strong handling here carries directly into WAEC, JAMB, and beyond.

#### Practice Prompts
1. Solve the system 3x + 5y = 11 and 2x − y = 4 using (a) substitution and (b) Cramer's rule. Confirm the answers match.
2. A man is three times as old as his son. In 12 years, he will be twice as old. Set up two equations in their current ages and solve.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
