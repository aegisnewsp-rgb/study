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
lastUpdated: "2026-06-22"
diagramPrompt: "Mathematical diagram showing Inequalities and Linear Programming concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Inequalities and Linear Programming

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- An **inequality** compares two expressions using `<`, `≤`, `>`, `≥`. Multiplying or dividing both sides by a negative number **reverses** the sign; adding or subtracting keeps it the same.
- A **linear inequality in two variables** has the form `ax + by < c` (or `≤`, `>`, `≥`) and its solution set is a **half-plane** cut off by the **boundary line** `ax + by = c`.
- A **Linear Programming Problem (LPP)** asks for the **maximum** or **minimum** of a **linear objective function** `Z = ax + by` subject to linear **constraints** and `x ≥ 0, y ≥ 0`.
- The solution set of all constraints is the **feasible region**; the **corner-point theorem** says the optimum of `Z` occurs at a **vertex** (corner point) of this region.
- NECO SSCE tip: NECO almost always frames this as a word problem (diet, production, transport) requiring you to draw the feasible region, read its corners from the graph, then evaluate `Z` at each.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Linear Inequalities on the Plane
A linear inequality in `x` and `y` represents one side of a straight line. The line `ax + by = c` is the **boundary line**; everything on one side satisfies the inequality. To decide which side, test a simple point — usually `(0, 0)` — into the inequality:

- If `(0, 0)` satisfies `ax + by < c`, shade the side **containing** the origin.
- If it does not, shade the **opposite** side.

A **strict inequality** (`<` or `>`) gives an **open boundary** drawn as a dashed line — points on the line are excluded. A **weak inequality** (`≤` or `≥`) gives a **closed boundary** drawn as a solid line.

#### Solving One-Variable Inequalities Algebraically
Treat the sign as an equals sign to isolate the variable, then check the direction by substituting one value. The single most-tested rule: dividing both sides by a negative number **flips** the inequality.

#### Systems and the Feasible Region
A system of two or more linear inequalities is solved by drawing each half-plane and shading their **intersection**. The result is the **feasible region** — it may be:

- a bounded polygon (triangle, quadrilateral, etc.),
- an unbounded region (extending to infinity), or
- empty (no feasible region, hence no solution).

#### The Linear Programming Problem
An LPP has three ingredients:

1. **Decision variables** `x, y` (almost always `x ≥ 0, y ≥ 0`).
2. A **linear objective function** `Z = ax + by` to maximise or minimise.
3. **Linear constraints** such as `2x + y ≤ 8` and `x + 3y ≤ 9`.

The **corner-point method** (also called the vertex method) evaluates `Z` at every corner of the feasible region and picks the largest (for maximum) or smallest (for minimum) value.

#### Exam Pattern at NECO
NECO SSCE Mathematics (Paper II, ~3% weight) typically gives **one 10–15 mark question**: a word problem (factory output, blending, transport) that you convert into an LPP, sketch the feasible region, list the vertices, and state the optimal value. Always report both the **optimal `Z`** and the **values of `x, y`** that achieve it.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases in Graphing
- **Parallel constraints** (e.g. `x + y ≤ 5` and `x + y ≥ 2`) produce a strip; the feasible region is the part of the strip also satisfying the other constraints.
- **Redundant constraints** never touch the feasible region — they can be ignored but should still be written in your final LPP formulation.
- An **unbounded feasible region** can still yield a finite maximum (if `Z` increases towards the feasible interior) or no finite maximum at all (if `Z` grows without bound in the feasible direction). For a minimum on an unbounded region, the optimum exists only if `Z` has a lower bound within the feasible set.
- When a constraint line passes through the origin (`ax + by ≤ 0`), the test point `(0,0)` gives equality, so use `(1, 0)` or `(0, 1)` instead.

#### Worked Mini-Example
Maximise `Z = 3x + 2y` subject to `x + y ≤ 6`, `2x + y ≤ 8`, `x ≥ 0`, `y ≥ 0`.

Solving the boundaries pairwise gives vertices `(0, 0)`, `(4, 0)`, `(2, 4)`, `(0, 6)`. Evaluating `Z`:

| Vertex | `Z = 3x + 2y` |
|---|---|
| (0, 0) | 0 |
| (4, 0) | 12 |
| (2, 4) | **14** ← maximum |
| (0, 6) | 12 |

Maximum is `Z = 14` at `(x, y) = (2, 4)`.

#### Common Mistakes
- Forgetting to reverse the sign when multiplying through by `-1` (e.g. `-2x < 6` becoming `x > -3`, **not** `x < -3`).
- Shading the wrong half-plane because the test point was on the boundary itself.
- Reading vertices off a graph that is too small — NECO accepts graphs, but a vertex estimated between gridlines loses marks.
- Reporting only the optimal `Z` without the `x, y` values, or vice-versa — NECO marks require **both**.

#### Practice Prompts
1. A bakery makes cakes (`x`) and bread (`y`). Profit is ₦500 per cake and ₦300 per loaf. Constraints: `2x + y ≤ 10` (flour), `x + 2y ≤ 8` (oven hours), `x, y ≥ 0`. Find the maximum profit and the production mix.
2. Minimise `Z = 4x + 3y` subject to `x + y ≥ 4`, `2x + y ≥ 6`, `x ≥ 0`, `y ≥ 0`. State whether the feasible region is bounded and find the minimum.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
