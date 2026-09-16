---
exam: cs-exec
examName: CS Executive
subject: economics
subjectName: Economics
description: Cost Theory covering types of costs, cost curves, short-run and long-run cost analysis, and economies of scale for CS Executive Economics.
topic: econom-008
topicName: Cost Theory
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-16"
---

# Cost Theory

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Cost Theory analyses how a firm's **Total Cost (TC)** behaves as output (**Q**) changes across the **short run** (at least one factor fixed → TFC exists) and the **long run** (all factors variable → TFC = 0). CS Executive Economics (Module I, ~3% weight) tests cost curves, the BEP formula, cost-output elasticity, and producer's equilibrium condition MC = MR.

| Term | Symbol | Formula | Unit / Nature |
|---|---|---|---|
| Total Fixed Cost | TFC | Constant when Q rises | ₹ |
| Total Variable Cost | TVC | Rises with Q | ₹ |
| Total Cost | TC | TC = TFC + TVC | ₹ |
| Average Cost | AC | AC = TC / Q | ₹ per unit |
| Marginal Cost | MC | MC = ΔTC / ΔQ | ₹ per unit |
| Break-Even Output | Q_BEP | Q = TFC ÷ (P − AVC) | Units |

> 💡 **High-Yield Memory Hook — "MC cuts, AVC drops, AC catches":** Marginal Cost always intersects AVC and AC at their **minimum points**. AVC reaches its minimum **first** (lower output), AC reaches its minimum **later** (higher output), and the gap AC − AVC = AFC keeps shrinking because AFC is a rectangular hyperbola (TFC ÷ Q).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Short-Run Cost Curves and Their Geometry

In the short run, capital is fixed, so TFC is constant. TVC rises with output under the **Law of Variable Proportions**, giving MC its characteristic **U-shape** (first falling due to increasing returns to the variable factor, then rising due to diminishing returns). The U-shape of AVC mirrors MC, but AVC's minimum sits **left of** AC's minimum by exactly AFC at that output.

Key derived identities:
- AC = AFC + AVC = TC / Q
- MC = dTC / dQ (continuous form)
- ΔAFC × ΔQ = TFC always rectangular-hyperbolic

#### Concept Comparison Matrix

| Concept | Break-Even Point (BEP) | Shut-Down Point |
|---|---|---|
| Condition | AR = AC (P = AC) | AR = AVC (P = AVC) |
| Profit | Normal profit (zero economic profit) | Minimum AVC; below this, firm shuts down |
| Recovery | TFC fully recovered plus normal profit | TFC NOT recovered — only TVC covered |
| Output level | Higher Q (right of AVC minimum) | Lower Q (AVC minimum point) |
| Decision rule | Continue in short run; indifferent long run | Shut down in short run |

#### Long-Run Cost Curves

In the long run every input is variable, so the firm chooses an **optimum plant size** for every output level. The **Long-Run Average Cost (LRAC)** is the *envelope* of all possible short-run AC curves — also called the **planning curve**. Economies of scale first pull LRAC down, then constant returns flatten it, and eventually diseconomies of scale push it up.

Internal economies arise from **technical, managerial, financial, marketing, and bulk-buying** factors within the firm. Diseconomies emerge beyond optimum scale due to coordination failure, bureaucratic slack, and principal–agent problems. *External* economies depend on industry growth (e.g., skilled labour pools), while *pecuniary* economies are cheaper credit and advertising rates.

#### Producer's Equilibrium

First-order condition: **MC = MR**. Second-order condition: MC must **cut MR from below** (i.e., MC rises after intersection). In perfect competition P = MR, so the rule simplifies to P = MC, provided P ≥ AVC in the short run.

#### Cost-Output Elasticity

$$E_c = \frac{\%\Delta C}{\%\Delta Q} = \frac{MC}{AC}$$

- $E_c > 1$ → AC **falls** as Q rises
- $E_c = 1$ → AC at **minimum**
- $E_c < 1$ → AC **rises** as Q rises

#### 🎯 Exam-Level Worked Problem

**Question:** A firm has TFC = ₹2,000. The price of its product is ₹50 per unit and AVC at the planned output is ₹30 per unit. (a) Compute the break-even output. (b) If the firm produces 100 units, what is the profit/loss? (c) At what price will the firm just shut down in the short run?

#### Solution:

(a) $Q_{BEP} = \dfrac{TFC}{P - AVC} = \dfrac{2{,}000}{50 - 30} = \dfrac{2{,}000}{20} = 100 \text{ units}$

(b) At Q = 100 units: TC = TFC + TVC = 2,000 + (30 × 100) = ₹5,000. TR = 50 × 100 = ₹5,000. **Profit = ₹0** (normal profit).

(c) Shut-down: P = AVC = ₹30 per unit. Below ₹30 the firm cannot even cover variable cost.

> ⚠️ **Examiner Trap:** Students often divide TFC by **TC** or by AVC instead of by the **contribution per unit (P − AVC)**. The BEP formula recovers *fixed cost only*, so using TC double-counts variable cost. Also, do **not** confuse the shut-down price (₹30 = AVC min) with the BEP price (₹50 = AC at chosen Q) — both yield zero profit but recovery of TFC differs.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

The cost-output elasticity formulation hides a subtle trap: $E_c$ uses **continuous** marginal values, so it works cleanly only when MC and AC are differentiable. At the kink where AC hits its minimum, $E_c$ switches from >1 to <1, and using a discrete ΔMC/ΔAC approximation around that point yields misleading ±1 ranges.

| Scenario | Output Region | Cost Behaviour | Cost-Output Elasticity |
|---|---|---|---|
| Initial low Q | Left of AVC min | AVC falling sharply | $E_c < 1$ then $E_c > 1$ |
| Mid Q | Between AVC min and AC min | AVC rising, AFC falling faster; AC still falling | $E_c > 1$ |
| Optimum Q | At AC minimum | AC flat, MC = AC | $E_c = 1$ exactly |
| High Q | Right of AC min | AC rising due to diminishing returns | $E_c < 1$ |

#### Connections to Adjacent Topics

- **Producer's Equilibrium** under imperfect competition extends MC = MR with **MR < P**, shifting optimal output left of the competitive case.
- **Break-Even Analysis** links directly to **marginal costing** in Cost Accounting (Paper 5) — same algebra, different context.
- **Economies of Scope** (joint production of multiple products) differ from economies of *scale* (single-product expansion) — frequently confused in CS Executive MCQs.
- **Sunk Costs** are historical and irrelevant to short-run shut-down decisions; only AVC governs the shut-down rule.

#### Common Examination Pitfalls

1. Treating TFC = 0 in the long run as "no fixed cost ever" — it only means *plant size* is variable in LR.
2. Computing opportunity cost of owner's capital as **zero** because no cash outflow occurs.
3. Confusing accounting profit (TR − explicit cost) with economic profit (TR − explicit − implicit cost).
4. Drawing LRAC as a smooth U based on variable proportions — in LR, fixed factors are absent, so the shape comes from **returns to scale**, not from diminishing returns to a single factor.

#### Advanced Practice Prompts

1. Derive the condition **MC = AC at AC's minimum** by differentiating AC = TC/Q and setting dAC/dQ = 0. Show why the same result holds for AVC.
2. A firm's TC = 100 + 20Q + 0.5Q². Find Q at which the shut-down warning first appears, and the minimum AVC price. *(Answer hint: AVC = 20/Q + 0.5Q; minimum at Q = √40.)*

> 💡 **High-Yield Revision Hook:** For any cost question, draw the curve mentally — **MC first, then AVC, then AC** — and remember that **money flows always follow units produced**, never the other way round.

---

## Continue your study

- **[View this topic in your CS Executive roadmap](/roadmap/?exam=cs-exec&duration=1mo)** — see where "Cost Theory" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cs-exec&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CS Executive exam overview](/exams/cs-exec/)** — pattern, eligibility, and syllabus
- **[All Economics notes](/notes/cs-exec/economics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
