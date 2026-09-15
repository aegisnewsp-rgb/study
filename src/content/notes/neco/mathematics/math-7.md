---



exam: neco
examName: NECO SSCE
subject: mathematics
subjectName: Mathematics
topic: math-7
topicName: Inequalities and Linear Programming
weight: 3
country: nigeria
generated: "2026-03-24T08:32:07.666258"
lastUpdated: "2026-09-15"
diagramPrompt: "Mathematical diagram showing Inequalities and Linear Programming concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Inequalities and Linear Programming

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Inequalities and Linear Programming** covers two linked skills: graphing linear inequalities in two variables and using those graphs to find the best (optimal) value of a linear objective function under real-world limits.

- **Inequality symbols:** `<`, `>`, `≤`, `≥`, `≠` compare real numbers; `<` and `>` are *strict*, `≤` and `≥` are *non-strict*.
- **Boundary line rule:** Draw `ax + by = c` as a **solid** line for `≤`/`≥` and a **dashed** line for `</`>`. Test a point (in many papers `(0,0)`) to find which half-plane to shade.
- **Objective function:** `Z = px + qy`, where `Z` is value to maximise or minimise, `p` and `q` are profit/cost per unit, and `x`, `y` are decision variables.
- **Corner-point principle:** The optimal `Z` lies at a **vertex** of the feasible region (the polygon formed by overlapping shaded half-planes).

> 💡 **High-Yield Memory Hook:** **"Test-Draw-Shade-Vertex"** — TDSV. (1) **T**est origin in each inequality, (2) **D**raw boundary (solid or dashed), (3) **S**hade correct half-plane, (4) find **V**ertex values of `Z = px + qy` to pick max or min.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Concepts

A **linear inequality in two variables** has the form `ax + by (≤, ≥, <, >) c`. Its solution set is a **half-plane**: every point on one side of the boundary line `ax + by = c`. Multiple constraints overlap to form a **feasible region**, which is *bounded* (closed polygon) or *unbounded* (extends infinitely).

A **linear programming problem (LPP)** has three parts: an **objective function** `Z = px + qy` to maximise or minimise, a set of **constraints** (linear inequalities), and **non-negativity** conditions `x ≥ 0`, `y ≥ 0`. The **corner-point principle** (a theorem you must quote) guarantees the optimal `Z` occurs at a vertex of a bounded feasible region.

#### Inequality vs. Equation — Easy to Confuse

| Feature | Linear Equation `ax + by = c` | Linear Inequality `ax + by ≤ c` |
|---|---|---|
| Graph shape | Single straight line | Half-plane (one side of the line) |
| Boundary line | Always solid | Solid for `≤`/`≥`; dashed for `<`/`>` |
| Solution set | Countless points on the line | All points on the line **plus** half-plane (or half-plane only if strict) |
| Feasible region role | Defines a boundary | Defines a constraint region |

#### Steps to Solve an LPP Graphically

1. **Define** decision variables `x` and `y` from the word problem (e.g. chairs, bags, hours).
2. **Formulate** the objective function `Z = px + qy` to maximise profit or minimise cost.
3. **Translate** each resource limit into a linear inequality.
4. **Add** non-negativity: `x ≥ 0`, `y ≥ 0`.
5. **Graph** each constraint and shade the feasible region.
6. **Find** the corner points by solving simultaneous equations of intersecting boundary lines.
7. **Evaluate** `Z = px + qy` at every corner point.
8. **Select** the maximum (or minimum) value and **interpret** in context.

#### 🎯 Exam-Level Worked Problem

**Question:** A factory produces bags (`x`) and shoes (`y`). Each bag needs 2 hours of machine time and 3 units of leather; each shoe needs 4 hours and 1 unit of leather. Total machine time available is 40 hours and leather is 30 units. Profit is ₦500 per bag and ₦300 per shoe. How many of each should be produced for **maximum profit**?

#### Solution:
- Objective: `Z = 500x + 300y` (maximise, in ₦).
- Constraints: machine time `2x + 4y ≤ 40`, leather `3x + y ≤ 30`, plus `x ≥ 0`, `y ≥ 0`.
- Simplify machine constraint: divide by 2 → `x + 2y ≤ 20`. Intercept: `(20, 0)` and `(0, 10)`.
- Leather constraint: `3x + y ≤ 30`. Intercepts: `(10, 0)` and `(0, 30)`.
- Find corner points of feasible region: `(0, 0)`, `(10, 0)`, `(0, 10)`, and the intersection of `x + 2y = 20` and `3x + y = 30`.
 - Solve: from first, `x = 20 − 2y`. Substitute: `3(20 − 2y) + y = 30` → `60 − 6y + y = 30` → `5y = 30` → `y = 6`, then `x = 8`. Corner: `(8, 6)`.
- Evaluate `Z = 500x + 300y`:
 - `(0, 0)` → ₦0
 - `(10, 0)` → ₦5,000
 - `(0, 10)` → ₦3,000
 - `(8, 6)` → ₦500(8) + ₦300(6) = ₦4,000 + ₦1,800 = **₦5,800**
- **Maximum profit = ₦5,800 at `x = 8` bags, `y = 6` shoes.**

> ⚠️ **Examiner Trap:** Students in many papers stop at `(10, 0)` because it has the larger x-value and ignore the intersection point. Always check **every** corner — the maximum in most keys lies where two constraints cross, not at an axis intercept.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

| Edge Case | What Happens | Exam Implication |
|---|---|---|
| Unbounded feasible region | May or can not have a maximum/minimum | If objective can grow infinitely along the open edge, no max exists; state "no finite maximum" |
| Objective line parallel to a constraint edge | Multiple optimal solutions along the whole edge | Report the range, e.g. "any point on segment AB gives Z = ₦5,800" |
| Strict inequalities `<`/`>` only | Boundary line excluded (dashed) | Vertex can be missing; check if optimum lies on excluded boundary |
| Degenerate vertex (three lines meet) | More than two constraints intersect at one point | Re-evaluate carefully; one redundant constraint |
| Negative profit coefficients | `p < 0` or `q < 0` | Minimum can exist where maximum would in the positive case |

#### Common Mistakes in Word Problems

1. Swapping the roles of `x` and `y` (e.g. calling bags `y` and shoes `x`), which flips the objective function.
2. Writing `≥` when the resource is being **used up or limited**, not when it must exceed a minimum requirement.
3. Forgetting to convert per-unit values into the same units before writing constraints.
4. Confusing "minimum cost" with "minimum quantity" — these are different objectives.
5. Drawing the feasible region without including `x ≥ 0` and `y ≥ 0`, producing a region that spills into Quadrant III.
6. Reporting the optimal `Z` value without stating the values of `x` and `y` that produce it.

#### Connections to Adjacent Topics

Linear programming links directly to **simultaneous linear equations** (finding intersections), **coordinate geometry** (gradient and intercept form), and **linear inequalities in one variable** (number-line representation). In economics and operations research it extends to the **simplex method**, but NECO only requires the **2-variable graphical method**.

#### Advanced Practice Prompts

1. A baker uses flour and sugar to make cakes and pastries. Formulate the LPP if both profit coefficients are negative (cost-minimisation problem) and find the minimum cost combination.
2. Given constraints `x + y ≤ 10`, `2x + y ≤ 14`, `x ≥ 0`, `y ≥ 0`, and `Z = 4x + 3y`, determine whether the objective function is parallel to any edge, and if so, list all optimal solutions.

---

## Continue your study

- **[View this topic in your NECO SSCE roadmap](/roadmap/?exam=neco&duration=1mo)** — see where "Inequalities and Linear Programming" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neco&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NECO SSCE exam overview](/exams/neco/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/neco/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
