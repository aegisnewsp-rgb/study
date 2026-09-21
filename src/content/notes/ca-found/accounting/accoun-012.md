---
exam: ca-found
examName: CA Foundation
subject: accounting
subjectName: "Accounting"
topic: accoun-012
topicName: Standard Costing
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-21"
---

# Standard Costing

### 🟢 Lite — Quick Review (1h–1d)
> Last-hour pass: set standards, compare with actuals, isolate variances — that's the whole chapter in one line.

Standard costing fixes a benchmark ("standard") for what each unit of output *should* cost under efficient working conditions, then walks the difference against the actual cost back to its causes.

- **Standard Cost** = planned cost under efficient operations (₹ per unit).
- **Standard Hour** = the time a skilled worker at normal efficiency should take. Used to absorb overheads into output.
- **Variance** = Standard Cost − Actual Cost. Favourable when actual is lower; Adverse when higher.

| Variance (most tested) | Formula (₹) | Favourable sign |
|---|---|---|
| Material Price (MPV) | (SP − AP) × AQ | SP > AP |
| Material Usage (MUV) | (SQ − AQ) × SP | SQ > AQ |
| Labour Rate (LRV) | (SR − AR) × AH | SR > AR |
| Labour Efficiency (LEV) | (SH − AH) × SR | SH > AH |

> 💡 **High-Yield Memory Hook:** "**P**rice variances ride on **A**ctual **Q**uantity; **U**sage or **E**fficiency ride on **S**tandard." So MPV uses AQ in the multiplier; MUV and LEV use SP / SR. Remember PAQ-USE as your recall anchor under pressure.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Working layer: build the standard, isolate each variance, then reconcile profit.

#### Building a Standard

A standard cost card normally carries three rate blocks: **Material** (₹ per kg), **Labour** (₹ per hour), and **Overhead** (₹ per hour or ₹ per unit). Standards are set using past records adjusted for expected changes — they are never guesses. Three grades you should recognise:

- **Basic Standard** — held constant for years; useful for long-term trend measurement only.
- **Current Standard** — revised for the current period conditions; the exam's default.
- **Ideal Standard** — assumes no waste, no idle time; rarely met, useful for benchmarking ceilings.

#### The Variance Family

| Variance | Controllable? | Typical cause |
|---|---|---|
| Material Price | Yes (purchasing) | Market rate change, supplier selection, discount missed |
| Material Usage | Yes (production) | Spillage, faulty machinery, inferior inputs |
| Labour Rate | Yes (HR) | Wrong-grade staff, overtime, pay settlement |
| Labour Efficiency | Yes (foreman) | Learning curve, batch size, scheduling |
| Fixed Overhead Volume | Partly | Capacity utilisation gap |
| Sales Price | Yes (marketing) | Discounts, competition, demand shift |

#### Interdependence — Two-Way Analysis

Material variances split into **Price × Quantity**. Labour variances split into **Rate × Efficiency**. Fixed overheads split into **Expenditure × Volume**. The split lets a manager see whether a department saved on paper (rate) but lost on the floor (efficiency).

#### Worked Exam-Style Problem

A factory produces one unit using **4 kg** of material at a **standard price of ₹50/kg** and **5 standard hours** at **₹40/hour**. Actual results for 1,000 units produced: **4,200 kg** issued at **₹48/kg**; **5,200 hours** paid at **₹42/hour**.

Step 1 — Material variances. AQ = 4,200 kg; SQ for actual output = 4 kg × 1,000 = 4,000 kg.

- MPV = (50 − 48) × 4,200 = 8 × 4,200 = **₹8,400 F**
- MUV = (4,000 − 4,200) × 50 = −200 × 50 = **₹10,000 A**

Step 2 — Labour variances. AH = 5,200; SH = 5 × 1,000 = 5,000.

- LRV = (40 − 42) × 5,200 = −2 × 5,200 = **₹10,400 A**
- LEV = (5,000 − 5,200) × 40 = −200 × 40 = **₹8,000 A**

Step 3 — Verify totals. Total Material Cost Variance = 8,400 F + 10,000 A = **₹1,600 A**. Check: (SP × SQ) − (AP × AQ) = (50 × 4,000) − (48 × 4,200) = 2,00,000 − 2,01,600 = ₹1,600 A ✓.

Total Labour Cost Variance = 10,400 A + 8,000 A = **₹18,400 A**. Check: (SR × SH) − (AR × AH) = (40 × 5,000) − (42 × 5,200) = 2,00,000 − 2,18,400 = ₹18,400 A ✓.

> ⚠️ **Examiner Trap:** ICAI expects **Quantity = Standard Quantity for Actual Output**, not budgeted output. Slip the substitution and every usage/efficiency variance flips sign. Another common slip: writing MPV as (AP − SP) × AQ — direction matters because SP − AP gives a *favourable* number when standards exceed actuals.

#### Reconciliation of Profit

Last step in any paper-2 question: the P&L format shows

**Standard Profit = Sales at standard − Standard Cost of Actual Output**,
**Actual Profit = Actual Sales − Actual Cost**, and the difference equals total variance (Adverse when Actual Profit is lower). Always close the reconciliation with the Fixed Overhead Volume Variance adjustment when absorption costing is in play.

---

### 🔴 Extended — Deep Study (3mo+)
> Edge layer: absorption vs marginal splits, capacity traps, exam-day arithmetic.

#### Absorption vs Marginal Costing — Why the Difference

Under absorption costing, **Fixed Overhead Volume Variance** = Absorbed Fixed Overhead − Budgeted Fixed Overhead, where Absorbed = Standard Rate per Hour × Standard Hours for Actual Output. Under marginal costing no such variance exists — fixed overheads are treated as a period charge. Pick the right convention before writing a single figure: the question stem will name the method.

#### Capacity Utilisation Edge

The fixed overhead volume variance hides a *capacity utilisation* message. Compute budgeted capacity in standard hours, then compare against SH for actual output. Output well below capacity ⇒ large adverse volume variance; the manager's problem is demand, not cost control. Treat the volume variance as **partly uncontrollable** because sales-driven under-utilisation sits outside the production head's authority.

#### Sales Variances

Two-part split mirrors cost variances:

- **Sales Price Variance** = (Actual Price − Standard Price) × Actual Units Sold (₹).
- **Sales Volume Variance** = (Actual Units − Budgeted Units) × Standard Contribution per Unit (₹).

A high price variance can mask a falling volume, or vice versa — never read one without the other.

#### Reconciliation: P&L Format with Absorption Costing

| Reconciliation line (₹) | Sign convention |
|---|---|
| Standard Profit (given) | base figure |
| Add: Favourable cost variances | + |
| Less: Adverse cost variances | − |
| Less: Adverse Fixed OH Volume Variance | − (absorption only) |
| **= Actual Profit** | confirmed |

#### Common Floor-Traps Students Fall Into

1. **Sign confusion** — Price variances with AQ must keep SP − AP form; flipping to AP − SP silently inverts every number.
2. **Wrong output base** — Using budgeted output instead of *actual* output when computing SQ or SH inflates favourable variances.
3. **Mixing rate bases** — Substituting AH into a usage variance pushes variance from production to purchasing; examiners love this.
4. **Forgetting overhead absorption** — A correct material+labour answer without an overhead variance loses marks if the question clearly carries fixed overheads.
5. **Skipping the reconciliation** — ICAI awards dedicated marks for tying standard profit to actual profit; leave it out and half the question is gone.
6. **Treating Idle Time as Efficiency** — Idle time variance is shown separately from LEV, and its sign follows idle vs paid hours, not standard hours.

#### Advanced Practice Prompts

1. A unit takes 6 kg @ ₹80 and 4 hours @ ₹120. Actual production 500 units used 3,100 kg @ ₹78 and 2,100 hours @ ₹125. Compute all four variances and the total cost variance by two independent methods.
2. Given a fixed overhead budget of ₹4,00,000 for 8,000 standard hours, actual output absorbs 7,200 standard hours. Find the Fixed Overhead Volume Variance in an absorption-costing P&L and state whether the production manager can be held solely responsible.

#### Adjacent Topic Links

- **Marginal Costing** — same variance names, no fixed OH volume variance to absorb.
- **Budgetary Control** — standards feed the flexed budget; flexed budget variance equals sum of efficiency + price variances.
- **Cost Accounting Standards (CAS 1–24, ICAI)** — set the disclosure and presentation rules any standard-costing note must comply with.

---

## Continue your study

- **[View this topic in your CA Foundation roadmap](/roadmap/?exam=ca-found&duration=1mo)** — see where "Standard Costing" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ca-found&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CA Foundation exam overview](/exams/ca-found/)** — pattern, eligibility, and syllabus
- **[All Accounting notes](/notes/ca-found/accounting/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
