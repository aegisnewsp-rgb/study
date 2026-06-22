---



exam: nabteb
examName: NABTEB
subject: mathematics
subjectName: Mathematics
topic: math-6
topicName: Simultaneous Equations
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.549282"
lastUpdated: "2026-06-22"
diagramPrompt: "Mathematical diagram showing Simultaneous Equations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Simultaneous Equations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **simultaneous equation** is a pair of **linear equations** in the same variables whose common solution satisfies both at once. For two variables, the standard form is:

**ax + by = c** and **dx + ey = f**

where a, b, c, d, e, f are known constants and (x, y) is the unknown pair. Two algebraic routes dominate NABTEB: the **substitution method** (solve one equation for one variable, then plug into the other) and the **elimination method** (multiply equations by constants so adding or subtracting cancels one variable). When the determinant **D = ae − bd ≠ 0**, the system is **consistent** with a **unique solution** given by **x = D_x/D** and **y = D_y/D**, where **D_x = ce − bf** and **D_y = af − cd** (this is **Cramer's rule**). Quick exam pointers: (1) always check D first; (2) when D = 0, there is either **no solution** (parallel lines) or **infinitely many** (coincident lines); (3) word problems on ages, costs, and mixtures translate to this form and usually carry 3–5 marks.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Form and System Types
A pair of linear equations in two unknowns is written:

**ax + by = c** ........ (1)
**dx + ey = f** ........ (2)

The coefficient matrix has determinant **D = ae − bd**. Three cases arise:

| Value of D | D_x, D_y | Nature | Graphical Picture |
|---|---|---|---|
| D ≠ 0 | any | **Consistent**, unique solution | Two lines intersect at one point |
| D = 0 | both zero | **Consistent**, infinitely many solutions | Coincident lines (same line) |
| D = 0 | at least one non-zero | **Inconsistent**, no solution | Parallel distinct lines |

#### Substitution Method
From equation (1), express y = (c − ax)/b (provided b ≠ 0). Substitute into (2) to obtain a single equation in x. Solve for x, then back-substitute to find y. This method is fastest when one variable has coefficient 1, e.g. y = 3x − 2.

#### Elimination Method
Multiply (1) and (2) by chosen constants so that one variable's coefficients become equal in magnitude. Adding eliminates that variable when the signs are opposite; subtracting eliminates it when the signs are the same. Solve the resulting single-variable equation, then substitute back.

#### Cramer's Rule
Compute the three determinants:

**D = ae − bd**, **D_x = ce − bf**, **D_y = af − cd**

Then **x = D_x / D** and **y = D_y / D**. This is the quickest paper-friendly method for multiple-choice and short-answer NABTEB items.

#### Worked Example
Solve: 3x + 2y = 12 and x − y = 1.
Using elimination, multiply the second equation by 2: 2x − 2y = 2. Add to the first: 5x = 14, so **x = 14/5**. Substituting back: 14/5 − y = 1 ⇒ y = 9/5. Check: 3(14/5) + 2(9/5) = 42/5 + 18/5 = 60/5 = 12 ✓.

#### Exam Question Patterns
NABTEB tests this topic through (i) direct "solve for x and y" items, (ii) **word problems** on ages, costs of items, mixtures, and rates, and (iii) occasional graphical interpretation questions. Each item typically carries 2–6 marks; word problems are usually 4–5 marks.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Determinant Behaviour
When the system reduces to 0x + 0y = k (k ≠ 0) after elimination, the system is **inconsistent** — no (x, y) pair can satisfy it. This corresponds to two parallel lines on the Cartesian plane that never meet. When the elimination yields 0x + 0y = 0, the second equation is a scalar multiple of the first, giving **infinitely many solutions** along a single line. Students commonly mis-apply Cramer's rule here and divide by zero, which is undefined; the correct response is to state "no unique solution" and classify the system.

#### Connections to Adjacent Topics
Simultaneous equations connect directly to **coordinate geometry** (the slope-intercept form y = mx + c), **matrix algebra** (the coefficient matrix [[a, b], [d, e]]), and **linear inequalities** (the boundary lines of a feasible region are simultaneous-equation lines). The **inverse of a 2×2 matrix** equals (1/D) × [[e, −b], [−d, a]], which is precisely the algebraic engine behind Cramer's rule.

#### Common Mistakes
1. **Sign errors** when subtracting equations after multiplication — always wrap the substituted equation in brackets before expanding.
2. **Incomplete scaling** — multiplying only some terms on one side of the equation.
3. **Mixing D_x and D_y** — D_x replaces the **x-coefficients** (a, d) with constants (c, f), while D_y replaces the **y-coefficients** (b, e) with constants.
4. **Word-problem mistranslation** — confusing "twice as old" with "two years older" or mixing per-unit costs with totals.

#### Practice Prompts
1. A shop sells 3 pens and 2 pencils for ₦230, and 2 pens and 4 pencils for ₦260. Find the cost of one pen and one pencil.
2. Solve the system 4x − 3y = 10 and 2x + 5y = −6 using Cramer's rule, and verify your answer by substitution.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
