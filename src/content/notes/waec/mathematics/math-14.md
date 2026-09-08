---
exam: waec
examName: WAEC WASSCE
subject: mathematics
subjectName: Mathematics
topic: math-14
topicName: "Applications of Calculus (Rates, Max/Min)"
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.624090"
lastUpdated: "2026-09-08"
diagramPrompt: "Mathematical diagram showing Applications of Calculus (Rates, Max/Min) concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"

---

# Applications of Calculus (Rates, Max/Min)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your WAEC WASSCE Paper 2.

Differentiation gives the **instantaneous rate of change**: dy/dx is the gradient of y against x at a point, not the average change across an interval. Setting f'(x) = 0 yields **stationary points**; classify each with the second derivative f''(x) — positive means a **minimum**, negative means a **maximum**.

- **Differentiation rule:** if y = ax^n then dy/dx = nax^(n−1).
- **Classification rule:** f''(x) > 0 → minimum point; f''(x) < 0 → maximum point.
- **Exam hit-rate:** ~4% of WAEC Paper 2 marks (usually 1 structured 10–15 mark question).

| Task | Action |
| --- | --- |
| Find turning point | Differentiate, set f'(x) = 0, solve for x |
| Classify turning point | Evaluate f''(x) at that x, read the sign |
| Word problem on rates | Translate English to dy/dx, then substitute the given instant |

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before WASSCE.

#### Definition of rate of change
The derivative dy/dx equals the limit as h→0 of [f(x+h) − f(x)] / h. Geometrically it is the slope of the tangent to y = f(x) at x. Numerically, for small Δx, Δy ≈ (dy/dx)·Δx — useful when WAEC asks "by how much will y change when x increases by 0.2?".

#### Locating turning points
Solve f'(x) = 0. Each solution is a candidate maximum, minimum, or point of inflexion. Apply the second derivative test: a positive f''(x) curves the graph upward (valley), a negative f''(x) curves it downward (peak). If f''(x) = 0, fall back on the sign-change method — track f'(x) just before and just after the critical value.

#### Worked pattern: polynomial extremum
For y = 3x² − 12x + 5, dy/dx = 6x − 12. Setting 6x − 12 = 0 gives x = 2. Then d²y/dx² = 6 > 0, so x = 2 is a minimum with y = 3(4) − 12(2) + 5 = −7. This two-line structure (differentiate, set to zero, classify) is the WAEC template.

| Symbol | Meaning | Unit |
| --- | --- | --- |
| dy/dx | Instantaneous rate of change of y with respect to x | unit(y) per unit(x) |
| f'(x) = 0 | Stationary / critical point | unit(x) |
| f''(x) > 0 | Concave up — local minimum | unit(y) per unit(x)² |
| f''(x) < 0 | Concave down — local maximum | unit(y) per unit(x)² |

- Always state the x-value **and** the corresponding y-value of the turning point.
- Verify the answer makes physical sense — reject negative lengths, zero radii, or values outside the domain.
- Differentiate before substituting known values, not after, to avoid arithmetic traps.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Related rates and implicit differentiation
Some WAEC questions link two changing quantities through an equation such as V = (4/3)πr³ or A = πr². Differentiate both sides with respect to time t, then solve for the unknown rate. The chain rule (dr/dt appears as a factor) is the recurring mechanism — expect a problem where dV/dt and dr/dt must be connected, or where dA/dt and dr/dt must be connected.

#### Optimisation under a constraint
Real WASSCE questions ask: "Find two positive numbers whose sum is 20 and whose product is maximum" or "A closed cylinder has volume 1000 cm³ — find dimensions that minimise surface area". The procedure is: rewrite the objective in one variable using the constraint, differentiate, set to zero, then confirm with f''(x) or the context (cost minimised, not maximised).

#### Common mistakes
- Quoting x = 2 as "a maximum" without checking f''(x) — sometimes it is a minimum.
- Forgetting the chain rule when differentiating r² or r³ inside a related-rates equation, leading to a factor of 2 or 3 error.
- Treating dy/dx as the **average** rate of change (it is the instantaneous rate at a single x).
- Confusing a point of inflexion (f'(x) = 0 but no extremum) with a turning point.

| Mistake | Correction |
| --- | --- |
| Writing dV/dt = 4πr² | Correct form is dV/dt = 4πr² · (dr/dt) |
| Reporting x = 2 with no y-value | Always pair x with f(x) at the turning point |
| Accepting negative radius | State domain restriction x > 0 before solving |

#### Practice prompts:
1. A spherical balloon's volume grows at 8 cm³/s. Find dr/dt when r = 5 cm, given V = (4/3)πr³.
2. A rectangular garden has perimeter 60 m. Express the area A in terms of one side x, then find x that maximises A and state the maximum area.

## Continue your study

- **[View this topic in your WAEC WASSCE roadmap](/roadmap/?exam=waec&duration=1mo)** — see where "Applications of Calculus (Rates, Max/Min)" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=waec&duration=1d)** — 1-day sprint covering highest-weight topics
- **[WAEC WASSCE exam overview](/exams/waec/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/waec/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
