---




exam: neco
examName: NECO SSCE
subject: physics
subjectName: Physics
topic: phy-3
topicName: "Kinematics: Graphical Treatment"
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.675205"
lastUpdated: "2026-09-22"
diagramPrompt: "Clean educational diagram showing Kinematics: Graphical Treatment with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"




---

# Kinematics: Graphical Treatment

> Read each tier against your own sketch — the whole topic is just slope and area on two axes.

### 🟢 Lite — Quick Review (1h–1d)

> The fastest score on this paper comes from reading two numbers off two graphs.

A **distance–time graph** turns motion into a line: slope equals speed, curved slope means acceleration. A **velocity–time graph** turns motion into a line whose slope is acceleration and whose area is displacement. Every question on this topic is one of those two readings — slope, or area.

- **Speed from d–t graph:** v = Δs / Δt, measured in m s⁻¹ (dimension L T⁻¹).
- **Acceleration from v–t graph:** a = Δv / Δt, measured in m s⁻² (dimension L T⁻²).
- **Displacement from v–t graph:** s = area under the curve, measured in m (dimension L), found using ½(u + v)t, ut + ½at², or counting geometric squares.
- A **straight line** = uniform motion (constant v or constant a); a **curve** = changing motion.
- For vertical-throw problems, the v–t line **crosses the axis** at the top — total distance = sum of the two triangles' areas.

> 💡 **Memory Hook: "Up the slope, under the line."** Slope of d–t = speed; slope of v–t = acceleration. Area under v–t = distance. The phrase also tells you the direction to read first on each graph.

| Graph | Slope gives | Area gives |
|---|---|---|
| Distance–time | velocity (m s⁻¹) | not used |
| Velocity–time | acceleration (m s⁻²) | displacement (m) |
| Acceleration–time | jerk (rarely tested) | change in velocity (m s⁻¹) |

### 🟡 Standard — Regular Study (2d–2mo)

#### Reading Slope and Area

Slope is rise over run: (y₂ − y₁) / (x₂ − x₁). On a distance–time plot, rise is metres and run is seconds, so slope carries the unit m s⁻¹ — a velocity, not a distance. On a velocity–time plot, rise is m s⁻¹ and run is s, giving m s⁻² — an acceleration. Area multiplies the two axes: s × t on a v–t plot gives metres, hence displacement.

When the line curves, use a **tangent** at the point of interest. Draw the tangent by eye so it touches the curve at one point and makes equal angles with the curve on either side; the slope of that tangent is the *instantaneous* velocity or acceleration at that instant. Average values come from a chord joining the start and end points.

#### Three Equations as Graph Areas

For uniformly accelerated motion starting at speed *u*, the three kinematic equations are read straight off a v–t graph:

- **v = u + at** — the v–t line is straight, so its slope is the same everywhere, equal to a = (v − u)/t.
- **s = ut + ½at²** — the area under the line from 0 to t is a rectangle of height u plus a triangle of height at, giving ½(u + v)t when u + at is substituted for v.
- **v² = u² + 2as** — eliminating *t* between the first two equations.

#### Comparison Matrix: Uniform vs Non-Uniform Motion

| Feature | Uniform velocity | Uniform acceleration | Non-uniform acceleration |
|---|---|---|---|
| d–t shape | straight line | parabola opening upward | irregular curve |
| v–t shape | horizontal line | straight, sloping line | curve |
| Slope of d–t | constant | changes linearly | changes unpredictably |
| Slope of v–t | zero (a = 0) | constant non-zero | varies — use tangent |
| Area of v–t | rectangle | rectangle + triangle | counted square by square |

#### Worked Solution

A motorcycle moves from rest and accelerates uniformly at 2.5 m s⁻² for 8 s.

1. Final velocity from the v–t graph slope: v = 0 + (2.5)(8) = **20 m s⁻¹**.
2. Distance from the area of the triangle under the line: s = ½ × base × height = ½ × 8 × 20 = **80 m**.
3. Check with s = ut + ½at²: ½(2.5)(8²) = ½(2.5)(64) = 80 m. ✓

> ⚠️ **Examiner Trap:** Students often write ½(at²) alone, forgetting the initial-velocity rectangle *ut*. When the body starts from rest, *u* = 0 and the term vanishes — so the formula "works" only because the second term was hidden. On a v–t graph this is the rectangle on the *y*-axis side of the triangle; sketch it before you cut it out.

### 🔴 Extended — Deep Study (3mo+)

#### Edge Cases That Catch Strong Students

**Vertical-throw symmetry.** A ball thrown straight up with initial speed 20 m s⁻¹ has a v–t graph that is a straight line sloping down, crossing the axis at t = 2 s (where v = g t ≈ 10 × 2). Displacement on the way up is the area of the first triangle; on the way down, the body retraces the same vertical distance, drawn as a triangle below the axis. Total *distance* travelled = sum of both triangles; total *displacement* = difference (zero if it lands at launch height). Confusing these two costs marks every year.

**Free-fall and sign conventions.** Take upward as positive. Then a = −10 m s⁻² (or −9.8 m s⁻² if your paper specifies *g*). The v–t line still gives correct *displacement* by signed area, but *distance* always takes positive area. A graph without axis labels loses the sign — always write "velocity (m s⁻¹)" and an arrow indicating the positive direction.

**Mixed-phase motion.** A bus that accelerates for 10 s, then decelerates for 10 s, gives a v–t trapezoid. Area is ½(sum of parallel sides)(perpendicular distance) = ½(v_max + v_max)(20) for the symmetric case, but if deceleration ≠ acceleration the top becomes off-centre and the trapezoid splits into two triangles sharing a common height. Sketch first, formula second.

**Instantaneous from a curve.** The tangent slope is exact in principle; in practice, draw the tangent, choose two well-separated points on it (not on the curve), and divide. Picking points too close exaggerates reading error by a factor of three or more — the standard practical fault.

#### Table of Common Graph Pitfalls

| Mistake | What the student does | What the correct reading is |
|---|---|---|
| Area under d–t | Tries to use it as velocity or acceleration | Meaningless for these quantities |
| Gradient of d–t read as acceleration | Slope units are m s⁻¹, not m s⁻² | Add a *t* interval again to get acceleration |
| Line through origin assumed to mean "from rest" | Many graphs pass through origin without v₀ = 0 | Check the y-intercept, not the origin crossing |
| Deceleration treated as negative distance | Subtracts the triangle area | Distance is always positive; signed area is displacement |
| Tangent drawn through chord endpoints | Picks two close points on the curve | Use a ruler, find equal-angle tangent, pick widely spaced points |

#### Two Practice Prompts

1. A car travels at 15 m s⁻¹ for 20 s, then accelerates uniformly to 25 m s⁻¹ in 10 s. Sketch the v–t graph, find total displacement, and identify the section where the *gradient* value equals the *area* value numerically — they are different quantities, but students often confuse which axis label to write.
2. A stone is thrown vertically upward at 18 m s⁻¹. Plot the v–t graph for the full flight using *g* = 10 m s⁻², mark the instant of maximum height on both axes, and compute the total distance covered in 3.6 s. Compare with displacement.

---

## Continue your study

- **[View this topic in your NECO SSCE roadmap](/roadmap/?exam=neco&duration=1mo)** — see where "Kinematics: Graphical Treatment" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neco&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NECO SSCE exam overview](/exams/neco/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/neco/physics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
