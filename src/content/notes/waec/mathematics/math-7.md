---
exam: waec
examName: WAEC WASSCE
subject: mathematics
subjectName: Mathematics
topic: math-7
topicName: Linear Inequalities and Graphical Solutions
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.620057"
diagramPrompt: Mathematical diagram showing Linear Inequalities and Graphical Solutions concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style
---

# Linear Inequalities and Graphical Solutions

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Linear inequalities** are similar to linear equations, but with inequality signs ($<, >, \leq, \geq$) instead of equals.

**Basic Rules:**
$$x + 3 > 7 \Rightarrow x > 4$$
$$2x - 5 \leq 9 \Rightarrow 2x \leq 14 \Rightarrow x \leq 7$$

**Critical Rule:** When multiplying or dividing by a **negative number**, reverse the inequality sign:
$$-3x > 9 \Rightarrow x < -3$$

**Graphing Inequalities in One Variable:**

| Inequality | Number Line Representation |
|-----------|--------------------------|
| $x > 3$ | Open circle at 3, arrow pointing right |
| $x \geq 3$ | Closed circle at 3, arrow pointing right |
| $x < -2$ | Open circle at -2, arrow pointing left |
| $x \leq -2$ | Closed circle at -2, arrow pointing left |

**Linear Inequalities in Two Variables:**
$$y > 2x + 1$$
$$3x - 2y \leq 6$$

The solution is a region of the coordinate plane.

⚡ **WAEC Tip:** Test a point (usually the origin, (0,0), if not on the line) to determine which side of the boundary line to shade.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Graphing Linear Inequalities in Two Variables:**

**Step 1:** Replace the inequality with an equals sign to get the boundary line.
$$y > 2x + 1 \Rightarrow y = 2x + 1$$

**Step 2:** Draw the boundary line:
- Use a **dashed line** for $<$ or $>$ (line is NOT part of the solution)
- Use a **solid line** for $\leq$ or $\geq$ (line IS part of the solution)

**Step 3:** Test a point:
- Usually use (0, 0) if the line doesn't pass through the origin
- Substitute into the inequality
- If true, shade the region containing that point
- If false, shade the opposite region

**Example**: Graph $y > 2x + 1$

Boundary: $y = 2x + 1$ (dashed line, passes through (0,1) and (-0.5, 0))

Test (0, 0): $0 > 2(0) + 1 \Rightarrow 0 > 1$ — FALSE

So shade the region NOT containing (0, 0).

**Systems of Linear Inequalities:**

Find the region satisfying ALL inequalities simultaneously.

*Problem*: Find the region satisfying:
$$x + y \leq 6$$
$$x \geq 2$$
$$y \geq 1$$

1. Draw all three lines:
   - $x + y = 6$ (solid line)
   - $x = 2$ (vertical solid line)
   - $y = 1$ (horizontal solid line)

2. Test (0, 0):
   - For $x + y \leq 6$: $0 \leq 6$ ✓ (shade this side)
   - For $x \geq 2$: $0 \geq 2$ ✗ (shade the right side)
   - For $y \geq 1$: $0 \geq 1$ ✗ (shade above)

3. The solution region is where all shaded areas overlap — a triangle with vertices at (2,1), (5,1), (2,4).

**Linear Programming:**

Linear programming finds the optimal (maximum or minimum) value of an objective function subject to constraints.

*Problem*: A factory makes x chairs and y tables.
- Each chair requires 2 hours of carpentry and 1 hour of finishing
- Each table requires 1 hour of carpentry and 2 hours of finishing
- 8 hours of carpentry and 6 hours of finishing available per day
- Chairs sell for ₦2000, tables for ₦3000
- Maximise revenue

**Formulate:**
Maximise: $R = 2000x + 3000y$
Subject to:
$$2x + y \leq 8 \quad \text{(carpentry)}$$
$$x + 2y \leq 6 \quad \text{(finishing)}$$
$$x \geq 0, y \geq 0$$

**Solve graphically:**
1. Draw constraint lines:
   - $2x + y = 8$: passes through (0,8) and (4,0)
   - $x + 2y = 6$: passes through (0,3) and (6,0)
   - $x = 0$, $y = 0$ (axes)

2. Feasible region is bounded by these lines

3. Find corner points:
   - (0,0): $R = 0$
   - (4,0): $R = 2000(4) + 3000(0) = 8000$
   - (0,3): $R = 2000(0) + 3000(3) = 9000$
   - Intersection of lines: Solve simultaneously
     $2x + y = 8$
     $x + 2y = 6$
     Multiply second by 2: $2x + 4y = 12$
     Subtract first: $3y = 4 \Rightarrow y = 4/3$
     $x + 2(4/3) = 6 \Rightarrow x + 8/3 = 6 \Rightarrow x = 10/3$
     Point: $(10/3, 4/3)$
     $R = 2000(10/3) + 3000(4/3) = 20000/3 + 12000/3 = 32000/3 \approx 10667$

4. Maximum revenue = ₦10,667 at point $(10/3, 4/3)$ (3.33 chairs, 1.33 tables per day — in practice, round to whole units or consider integer programming)

⚡ **Common Student Mistakes:** Forgetting to reverse the inequality when multiplying/dividing by negative. Using a solid line instead of dashed for strict inequalities. Not testing the correct region when the origin lies on the boundary line.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough preparation.

**Absolute Value Inequalities:**

$$|x - 3| < 5 \Rightarrow -5 < x - 3 < 5 \Rightarrow -2 < x < 8$$

$$|2x + 1| \geq 7 \Rightarrow 2x + 1 \leq -7 \text{ or } 2x + 1 \geq 7$$
$$x \leq -4 \text{ or } x \geq 3$$

**Quadratic Inequalities:**

*Problem*: Solve $x^2 - 4x + 3 > 0$
$$(x-1)(x-3) > 0$$

Critical points: $x = 1$ and $x = 3$

Sign diagram:
- $x < 1$: Both factors negative → product positive ✓
- $1 < x < 3$: $(x-1) > 0$, $(x-3) < 0$ → product negative ✗
- $x > 3$: Both factors positive → product positive ✓

Solution: $x < 1$ or $x > 3$

**Inequalities with Quadratic Form:**

*Problem*: Solve $\frac{x-2}{x+1} > 1$
$$\frac{x-2}{x+1} - 1 > 0$$
$$\frac{x-2 - (x+1)}{x+1} > 0$$
$$\frac{-3}{x+1} > 0$$

For $\frac{-3}{x+1} > 0$, the denominator must be negative (since numerator is always negative):
$$x + 1 < 0$$
$$x < -1$$

But also need $x \neq -1$ (undefined). So solution: $x < -1$

**Regions Bounded by Curves:**

*Problem*: Find the area of the region bounded by $y = x^2$, $y = 4$, and $x = 0$.

Points of intersection:
- $y = x^2$ and $y = 4$: $x^2 = 4 \Rightarrow x = \pm 2$
- Only consider $x \geq 0$ for $x = 0$ boundary

Area = $\int_0^2 (4 - x^2)\,dx = \left[4x - \frac{x^3}{3}\right]_0^2 = (8 - \frac{8}{3}) - 0 = \frac{16}{3}$ square units

**Shading Techniques for Multiple Inequalities:**

For the region satisfying:
$$y \leq x + 2$$
$$y \geq x^2 - 4$$
$$x \leq 3$$

1. Graph each boundary
2. Identify which side to shade for each
3. The feasible region is the intersection

**Integer Solutions to Inequalities:**

*Problem*: Find all integer values of $x$ satisfying $2x - 3 < 5$ and $x + 4 \geq 2$.

$2x - 3 < 5 \Rightarrow 2x < 8 \Rightarrow x < 4$
$x + 4 \geq 2 \Rightarrow x \geq -2$

Combined: $-2 \leq x < 4$
Integer solutions: $-2, -1, 0, 1, 2, 3$

**Maximisation and Minimisation in Linear Programming:**

For maximise $Z = ax + by$ with constraints:
- The optimal solution occurs at a **corner point** of the feasible region
- To find minimum, check all corner points

*Problem*: Minimise $C = 3x + 4y$ subject to:
$$x + 2y \geq 6$$
$$2x + y \geq 4$$
$$x \geq 0, y \geq 0$$

1. Draw constraints:
   - $x + 2y = 6$: intercepts (6,0) and (0,3)
   - $2x + y = 4$: intercepts (2,0) and (0,4)

2. For $x + 2y \geq 6$: shade above the line
   For $2x + y \geq 4$: shade above the line

3. Corner points:
   - (0,4): $C = 3(0) + 4(4) = 16$
   - (2,0): $C = 3(2) + 4(0) = 6$
   - Intersection of lines:
     $x + 2y = 6$
     $2x + y = 4$
     Multiply second by 2: $4x + 2y = 8$
     Subtract first: $3x = 2 \Rightarrow x = 2/3$
     $2(2/3) + y = 4 \Rightarrow y = 8/3$
     Point: $(2/3, 8/3)$
     $C = 3(2/3) + 4(8/3) = 2 + 32/3 = 38/3 \approx 12.67$

4. Minimum $C = 6$ at point $(2, 0)$

**Slack Variables in Standard Form:**

For the inequality $2x + 3y \leq 12$, introduce slack $s \geq 0$:
$$2x + 3y + s = 12$$

For $\geq$ inequalities, introduce surplus $s \geq 0$:
$$x + y \geq 5 \Rightarrow x + y - s = 5$$

**Transportation Problems (Introduction):**

A simple transportation problem:
- Source A has 30 units, Source B has 40 units
- Destination X needs 25, Destination Y needs 45
- Costs: A to X = 3, A to Y = 4, B to X = 5, B to Y = 2
- Find minimum cost shipping plan

Let $x$ = units from A to X, then A to Y = $30 - x$
Let $y$ = units from B to X, then B to Y = $40 - y$

Constraints:
$$x + y = 25 \quad \text{(X's demand)}$$
$$(30-x) + (40-y) = 45 \quad \Rightarrow \quad 70 - (x+y) = 45 \Rightarrow x + y = 25$$ (same constraint)
$$x \leq 30, y \leq 40, x \geq 0, y \geq 0$$

Minimize: $C = 3x + 4(30-x) + 5y + 2(40-y) = 120 - x + 3y$

From constraint: $y = 25 - x$
$$C = 120 - x + 3(25-x) = 120 - x + 75 - 3x = 195 - 4x$$

For minimum $C$, maximize $x$ (since coefficient of $x$ is negative):
$$x \leq 30, y = 25 - x \geq 0 \Rightarrow x \leq 25$$
So maximum $x = 25$ (then $y = 0$)

Minimum $C = 195 - 4(25) = 195 - 100 = 95$

⚡ **WAEC Examination Patterns:** Solve linear inequalities in one and two variables. Graph systems of inequalities and identify feasible regions. Solve linear programming problems (maximisation and minimisation). Find corner points and evaluate objective functions. Solve quadratic inequalities. Handle absolute value inequalities.
