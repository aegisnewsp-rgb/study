---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-012
topicName: Applications of Derivatives
weight: 5
country: india
generated: "2026-04-17T22:51:00.000000"
lastUpdated: "2026-09-17"
diagramPrompt: "Clean educational diagram showing derivative applications tangent normal with clear labels, white background, color-coded curves, exam-style illustration"





---

# Applications of Derivatives

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Applications of Derivatives uses the derivative f'(x) to analyse the **shape** and **rate behaviour** of a function y = f(x). For JEE Main (5% weight, 1–2 questions per paper), the tested skills cluster into four families: tangent/normal slope, monotonicity and extrema, concavity/inflection, and LMVT/Rolle's Theorem.

| Sub-topic | Core formula | Test condition |
|---|---|---|
| Tangent slope | dy/dx = f'(x) at (x₀, y₀) | Always defined when f is differentiable |
| Normal slope | −1/f'(x₀), f'(x₀) ≠ 0 | Vertical tangent has no normal in y = f(x) form |
| Increasing/Decreasing | f'(x) > 0 ⇒ increasing | Sign of f', not value of f |
| Local extrema | f'(c)=0, f''(c)>0 ⇒ min | f''(c)<0 ⇒ max, f''(c)=0 ⇒ inconclusive |

> 💡 **High-Yield Memory Hook:** **"POSITIVE PRINTS UP"** — if f'(x) is **P**ositive, the curve goes **Up** (increasing); Negative pushes it down. For the 2nd derivative: **"M for Min"** (f''>0 cups up = minimum), **"W for Woe/Max"** (f''<0 frowns = maximum). One acronym handles 90% of MCQ sign questions.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Tangents, Normals, and Rate of Change
The derivative f'(x₀) is the instantaneous slope of the curve at x₀. The tangent line is y − y₀ = f'(x₀)(x − x₀), and the normal line is y − y₀ = −[1/f'(x₀)](x − x₀). With respect to time, dy/dt is velocity (m·s⁻¹) and d²y/dt² is acceleration (m·s⁻²). For small increments, the differential approximation Δy ≈ dy = f'(x)·dx gives quick error estimates without full evaluation.

#### Monotonicity and Critical Points
A function is strictly increasing on an interval I when f'(x) > 0 on I, and decreasing when f'(x) < 0. Critical points occur where f'(x)=0 or where f' fails to exist. To classify: use the **First Derivative Test** (sign change of f' around c) or the **Second Derivative Test** (sign of f''(c)).

#### Local vs Absolute Extrema
The **First Derivative Test** watches the sign of f' flip through c: + to − gives a local maximum; − to + gives a local minimum. The **Second Derivative Test** is faster but fails when f''(c)=0. For absolute extrema on a closed [a, b], evaluate f at a, b, and every interior critical point, then compare.

#### Concavity and Inflection
Concavity is read from f''(x): f''>0 is concave up (cup), f''<0 is concave down (cap). An inflection point requires **sign change** of f'' through c — f''(c)=0 alone is not enough; many students lose marks here.

#### Rolle's Theorem and Lagrange's MVT
Both require continuity on [a, b] and differentiability on (a, b). Rolle's adds f(a)=f(b), guaranteeing ∃ c ∈ (a, b) with f'(c)=0. LMVT guarantees ∃ c with f'(c) = [f(b) − f(a)]/(b − a).

#### Concept Comparison Matrix

| Concept | Condition on f' | Condition on f'' | Result |
|---|---|---|---|
| Increasing | f'(x) > 0 | — | Strictly rises on interval |
| Decreasing | f'(x) < 0 | — | Strictly falls on interval |
| Local maximum | f'(c)=0, sign −→+ | f''(c) < 0 | Peak at c |
| Local minimum | f'(c)=0, sign +→− | f''(c) > 0 | Valley at c |
| Inflection point | — | f'' changes sign at c | Curvature flips |
| Rolle's c | f'(c) = 0 | f(a) = f(b) | ∃ c ∈ (a, b) |
| LMVT c | f'(c) = [f(b)−f(a)]/(b−a) | — | Average slope realised |

#### 🎯 Exam-Level Worked Problem
**Question:** Find the equation of the normal to the curve y = x³ − 3x² + 2 at the point where the tangent is horizontal. Also state the value of x where the function attains a local maximum.

#### Solution:
1. Differentiate: f'(x) = 3x² − 6x = 3x(x − 2).
2. Horizontal tangent ⇒ f'(x) = 0 ⇒ x = 0 or x = 2.
3. At x = 0: y = 2, so point is (0, 2). f''(x) = 6x − 6; f''(0) = −6 < 0 ⇒ **local maximum** at x = 0.
4. At x = 2: y = 8 − 12 + 2 = −2, point (2, −2). f''(2) = 6 > 0 ⇒ local minimum (not needed for the question).
5. Normal at (0, 2): slope = −1/f'(0) = −1/0, undefined. The normal here is **vertical**, equation x = 0.

> ⚠️ **Examiner Trap:** Students pick x = 0 for the "normal equation in y = mx + c form" and divide by zero. The correct answer is x = 0 (vertical normal). Also, do not confuse local maximum with the absolute maximum — local max is at x = 0 only; the absolute max on, say, [−1, 3] would need endpoint comparison.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Traps and Edge Cases

| Trap | What students do | Correct approach |
|---|---|---|
| Boundary extrema ignored | Set f'(x)=0 and stop | On closed [a,b], compare f(a), f(b), critical values |
| f''(c)=0 ⇒ inflection | Conclude too quickly | Check **sign change** of f'' around c |
| Vertical tangent normal | Write y − y₀ = mx + c form | Vertical normal is x = x₀; no y-form exists |
| LMVT denominator flip | Write (a−b) instead of (b−a) | Denominator is always (b − a), the larger minus smaller endpoint |
| Optimisation unmodelled | Differentiate raw given expression | Reduce to **single variable** using the constraint first |

#### Linked Topics and Boundary Conditions
Applications of Derivatives connects directly to **Limits and Continuity** (differentiability implies continuity, but not the reverse), **Integration** (FTC: ∫ f'(x)dx = f(b) − f(a)), and **Coordinate Geometry** (tangents to parabolas, ellipses, and circles). The LMVT average slope equals the chord slope — a bridge concept for area-under-curve items. In physics, dy/dt and d²y/dt² convert position into velocity and acceleration; in economics, marginal cost MC = dC/dQ and marginal revenue MR = dR/dQ.

#### Advanced Practice Prompts
1. A closed cylindrical can must hold 500 cm³. Using the surface-area model S = 2πr² + 2πrh and V = πr²h, eliminate h to get S(r), then find the r that minimises S. Verify with f''(r) > 0.
2. For f(x) = x⁴ − 4x³ + 6x² − 4x + 1 on [0, 4], apply LMVT to find c such that f'(c) equals the chord slope between x = 0 and x = 4, then verify Rolle's Theorem is *not* applicable by computing f(0) and f(4).

> 📌 **Formula Check:** LMVT requires f continuous on [a,b] and differentiable on (a,b); c lies **strictly inside** (a,b), never at endpoints. Dimensional check: [f(b)−f(a)]/(b−a) has units [output]/[input], matching f'(c).

---

## Continue your study

- **[View this topic in your JEE Main roadmap](/roadmap/?exam=jeemain&duration=1mo)** — see where "Applications of Derivatives" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeemain&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Main exam overview](/exams/jeemain/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeemain/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
