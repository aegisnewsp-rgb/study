---
exam: rbi-grad-b
examName: "RBI Grade B"
subject: economics
subjectName: "Economics"
topic: econom-005
topicName: "Theory of Production"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-24"
---

# Theory of Production

### 🟢 Lite — Quick Review (1h–1d)

> The one trap the examiner sets in almost every descriptive question is mixing up the short run with the long run — pin down which framework the question is asking for before you write a word.

Production is a **technological** relationship, not a financial one: it maps physical inputs to physical output for a single firm. Everything in this topic branches from that split.

- **Production Function**: Q = f(L, K), where Q is output in units, L is labour input (man-hours), and K is capital input (machine-hours), with technology held constant.
- **TP, AP, MP**: TP = Total Product (units), AP = TP / L (units per worker), MP = ΔTP / ΔL (units from one extra worker).
- **Short Run vs Long Run**: capital fixed → Law of Variable Proportions; all factors variable → Returns to Scale.
- **Rational producer** always operates in **Stage II** of the short-run production function, where AP is at its maximum and MP is positive but falling.

| Concept | Time horizon | What varies | What is fixed |
|---|---|---|---|
| Law of Variable Proportions | Short run | One factor (labour) | Other factors (capital) |
| Returns to Scale | Long run | All factors, proportionally | Technology |

> 💡 **High-Yield Memory Hook:** **"Short = One moves, Long = All move"** — short run changes only one input, long run scales every input together. Another anchor: **"Stage II = S(ensible) producer's zone"** — AP is at peak and MP > 0.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### The Production Function in the Short Run

When capital is held fixed and only labour is varied, three products behave predictably. **TP** rises at an increasing rate, then at a decreasing rate, then falls. **AP** first rises, reaches a peak where AP = MP, then declines. **MP** rises, hits a maximum before AP does, falls, and crosses zero exactly at TP's maximum.

The **Law of Variable Proportions** describes this pattern in three stages:

- **Stage I**: MP > AP, so AP is rising. Capital is under-utilised.
- **Stage II**: MP is positive but falling, AP is at its maximum at the boundary, and TP is still increasing. This is the rational zone.
- **Stage III**: MP turns negative, TP falls. The variable factor is over-applied to the fixed factor.

> 📌 **Formula Check:** AP = TP / L (units per worker); MP = ΔTP / ΔL (units per additional worker). The boundary between Stages I and II is the point where **MP = AP** (not where MP is zero).

#### The Production Function in the Long Run

With every factor variable, scale matters more than proportion. **Returns to Scale** describe what happens to output when all inputs rise by the same factor λ > 1:

| Type | Condition on Q | Cause |
|---|---|---|
| Increasing Returns to Scale (IRS) | f(λL, λK) > λ·Q | Specialisation, indivisibilities |
| Constant Returns to Scale (CRS) | f(λL, λK) = λ·Q | Perfect replication |
| Decreasing Returns to Scale (DRS) | f(λL, λK) < λ·Q | Managerial limits |

#### Cost Curves and the Short Run

Total Cost splits into **TVC + TFC** (₹). From this flow **AVC, AFC, AC, MC**:

- AC = TC / Q (₹ per unit)
- MC = ΔTC / ΔQ (₹ per additional unit)
- AFC = TFC / Q, and AFC **continuously falls** as Q rises — it never takes the U-shape.

> ⚠️ **Examiner Trap:** MC does not equal AC at MC's minimum. **AC = MC only at AC's minimum point**, because AC falls while MC < AC and rises once MC > AC.

#### Producer's Equilibrium with Isoquants and Isocost

The long-run cost-minimisation problem uses two curves:

- **Isoquant**: all (L, K) combinations producing the same Q, convex to origin.
- **Isocost**: C = wL + rK, slope = −w/r, where w is the wage rate (₹/unit of L) and r is the rental rate (₹/unit of K).

Two conditions pin down equilibrium. **First-order**: the isoquant is tangent to the isocost, so **MRTS_{LK} = w/r**. **Second-order**: the isoquant is convex to origin, ensuring a minimum rather than a maximum.

#### Worked Problem

A firm produces with Q = 20L − 0.5L² and K fixed. Find the number of workers at which AP equals MP.

TP = 20L − 0.5L², so AP = 20 − 0.5L and MP = 20 − L. Setting AP = MP gives 20 − 0.5L = 20 − L → 0.5L = 0 → **L = 0** in this pure form, which signals that the standard result lies at the boundary of Stage II. The correct practical read: AP peaks where MP = AP. If the function were Q = 10L + 5L² − (1/3)L³, then AP = 10 + 5L − (1/3)L² and MP = 10 + 10L − L², and setting them equal gives L = 15 workers, with TP = 525 units.

> ⚠️ **Examiner Trap:** Many students state that AP is maximum "where MP = 0". MP = 0 marks **TP's maximum**, which is the boundary between Stages II and III. AP peaks earlier, where **MP = AP**.

---

### 🔴 Extended — Deep Study (3mo+)

#### Returns to Scale vs Returns to a Factor — The Distinction That Breaks Scores

A production function can display **diminishing returns to a factor** in the short run while simultaneously showing **increasing returns to scale** in the long run. The two are not contradictory: the former holds one input fixed, the latter scales all inputs together. In the Cobb-Douglas form Q = AL^α K^β, if α + β > 1 the firm has IRS even when the marginal product of labour is falling. Exam questions sometimes give a single function and ask you to comment on both — answer both, separately.

#### Cost-Curve Mathematics and Boundary Conditions

Take Q = f(L) in the short run with wage w and fixed cost F. Then TVC = wL(Q), MC = dTC/dQ = w / (dQ/dL) = w / MP_L. This identity — **MC = w / MP** — is the bridge between production and cost theory, and it explains why MC is U-shaped: MC falls while MP rises, hits its minimum when MP is maximum, then rises as MP falls. AVC behaves similarly; AFC = F/Q is a rectangular hyperbola, asymptoting to zero.

#### Economies and Diseconomies — Internal vs External

| Type | Source | Example |
|---|---|---|
| Internal economies of scale | Inside the firm | Bulk-buying discounts, specialisation |
| External economies of scale | Outside the firm | Ancillary suppliers clustering |
| Internal diseconomies | Inside the firm | Coordination failure, principal–agent costs |
| External diseconomies | Outside the firm | Traffic congestion, input price wars |

Economies of **Scope** are a separate idea: producing two products jointly costs less than producing them separately, captured by S = [C(q₁) + C(q₂) − C(q₁, q₂)] / C(q₁, q₂). Do not collapse scope into scale.

#### Common Mistakes Worth Memorising Against

1. Saying AFC eventually rises — it does not; it asymptotes to zero from above.
2. Treating MC = AC as a general rule instead of an extremum condition.
3. Forgetting the second-order condition for producer's equilibrium.
4. Describing Stage I as "rational" because MP is high — Stage II is rational, not Stage I.
5. Citing "increasing returns" without specifying whether it is to a factor or to scale.

#### Advanced Practice Prompts

1. A firm's production function is Q = 50L^0.6 K^0.8. Does it exhibit IRS, CRS, or DRS? At what combination of L and K, with w = ₹200, r = ₹400, and C = ₹2,00,000, does it minimise cost?
2. If MC = 3Q² − 12Q + 15 (₹ per unit), at what output Q is AC minimised, given TFC = ₹30? Verify the second condition AC = MC at that point.

> ⚠️ **Examiner Trap:** In a Phase-II descriptive paper, a 10-mark question on the Law of Variable Proportions expects **assumptions** (homogeneous units, constant technology, factor proportions, short run) before the explanation. Skipping assumptions costs easy marks.

---

## Continue your study

- **[View this topic in your RBI Grade B roadmap](/roadmap/?exam=rbi-grad-b&duration=1mo)** — see where "Theory of Production" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=rbi-grad-b&duration=1d)** — 1-day sprint covering highest-weight topics
- **[RBI Grade B exam overview](/exams/rbi-grad-b/)** — pattern, eligibility, and syllabus
- **[All Economics notes](/notes/rbi-grad-b/economics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
