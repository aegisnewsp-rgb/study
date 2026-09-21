---
exam: ncea-level-3
examName: NCEA Level 3 (Mathematics / Calculus)
subject: mathematics-l3
subjectName: Mathematics (Calculus)
topic: mathl3-002
topicName: "Apply linear programming methods in solving problems (91574)"
weight: 3
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Apply linear programming methods in solving problems (91574) — NCEA Level 3 Calculus Notes

Achievement Standard 91574 carries 3 credits and tests linear programming: formulating a problem with constraints, graphing the feasible region, finding the vertices, and optimising the objective function. Linear programming is the foundation of operations research and appears in business, logistics, finance, and engineering.

> Verify the live achievement standard document on https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **3 credits**, internally assessed by the school, NZQA moderated.
- Topics: formulating a linear programming problem, graphing the feasible region, finding the vertices, evaluating the objective function at each vertex, identifying the optimal solution.
- **Merit** requires relational thinking — interpreting the optimal solution in context.
- **Excellence** requires extended abstract thinking — justifying the use of linear programming, reflecting on the assumptions.

#### Examiner traps

- Forgetting to include the non-negativity constraints (x ≥ 0, y ≥ 0).
- Using the wrong inequality direction (≤ for "at most" constraints, ≥ for "at least").
- Stopping at a non-vertex point — the optimum is always at a vertex of the feasible region.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### The standard form

A linear programming problem has three parts:

1. **Decision variables** — the quantities to be decided (e.g., x = number of product A, y = number of product B).
2. **Objective function** — the quantity to be maximised or minimised (e.g., profit = 5x + 4y).
3. **Constraints** — the limitations on x and y (e.g., 2x + y ≤ 100 for resource constraint; x ≥ 0, y ≥ 0 for non-negativity).

#### The graphical method

1. **Graph each constraint** as a line on the (x, y) plane.
2. **Determine the feasible side** of each line (using a test point like (0, 0) if it satisfies the constraint; if not, the feasible side is the opposite).
3. **Shade the feasible region** — the intersection of all feasible sides.
4. **Find the vertices** of the feasible region by solving pairs of constraint equations.
5. **Evaluate the objective function** at each vertex.
6. **Identify the optimum** — the vertex with the highest value (for maximisation) or lowest value (for minimisation).

#### Why the optimum is at a vertex

The objective function is linear in x and y. On the feasible region, a linear function achieves its maximum and minimum at extreme points (vertices). This is the fundamental theorem of linear programming.

If the objective function is parallel to a constraint edge, the optimum is achieved at every point on that edge (multiple optimal solutions).

#### Worked example

A factory produces two products, A and B. Each A requires 2 hours of machine time and 1 hour of labour; each B requires 1 hour of machine time and 3 hours of labour. The factory has 100 machine hours and 180 labour hours available. Each A yields $5 profit; each B yields $4 profit.

- Decision variables: x = units of A, y = units of B.
- Objective: maximise profit P = 5x + 4y.
- Constraints: 2x + y ≤ 100 (machine); x + 3y ≤ 180 (labour); x ≥ 0; y ≥ 0.

Vertices of the feasible region:

- (0, 0): P = 0.
- (50, 0): P = 250.
- (0, 60): P = 240.
- Intersection of 2x + y = 100 and x + 3y = 180: from first, y = 100 − 2x; substitute: x + 3(100 − 2x) = 180 → x + 300 − 6x = 180 → −5x = −120 → x = 24, y = 52. P = 5(24) + 4(52) = 120 + 208 = 328.

Optimum: x = 24, y = 52, P = $328.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Sensitivity analysis

For Excellence, ask: how does the optimum change if a constraint is relaxed by 1 unit?

- If the binding constraint is "machine time", increasing the available machine hours by 1 might allow one more unit of A or B.
- The shadow price (dual value) is the rate at which the optimum changes per unit of relaxation.

This is the foundation of sensitivity analysis in operations research.

#### When linear programming is appropriate

Linear programming requires:

- A linear objective function.
- Linear constraints.
- Continuous decision variables (integer programming handles the discrete case, which is more complex).

For non-linear objectives or constraints, different optimisation methods are needed (calculus-based methods for smooth functions, dynamic programming for sequential decisions, etc.).

#### Common misconceptions (and the correction)

- "The optimum is at the highest point on the graph." Not necessarily — it depends on the slope of the objective function. The optimum is always at a vertex.
- "Linear programming always gives a unique solution." Not always — if the objective is parallel to an edge, every point on that edge is optimal.
- "More constraints always make the problem easier." They make the feasible region smaller, which can make the optimum worse but doesn't change the solution method.
- "Slack variables are optional." Slack variables turn inequalities into equalities and are the foundation of the simplex method, the algorithm for solving large linear programs.

#### Specification reference

This achievement standard is internally assessed by the school. NZQA publishes the achievement standard document, clarifications, and exemplars on ncea.education.govt.nz. Re-check the live version of 91574 before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 3 Mathematics achievement standards, https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics. Awarding body: NZQA.*
