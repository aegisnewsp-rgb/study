---
exam: ican
examName: ICAN (Nigeria)
subject: accounting
subjectName: "Accounting"
topic: accoun-012
topicName: Standard Costing
weight: 3
country: nigeria
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-21"
---

# Standard Costing

### 🟢 Lite — Quick Review (1h–1d)
> One-line takeaway: a pre-set cost benchmark that lets you isolate price paid, quantity used, and rate paid so each manager owns a number.

Standard costing pins a *predetermined cost* — material, labour, overhead — to each unit before the period starts, then writes the difference against actual spend as a **variance**. ICAN tests this topic as a reconciliation: start from standard profit, then adjust by sales price, sales volume, and every cost variance to land on actual profit.

| Element | Standard (SP/SQ/SH/SR) | Actual (AP/AQ/AH/AR) |
|---|---|---|
| Material | ₦/kg set by standard card | ₦ actually invoiced |
| Labour | hours allowed × std rate | hours worked × rate paid |
| Fixed OH | absorbed at OAR × std hours | incurred fixed cost |

> 💡 **High-Yield Memory Hook — "PUMP-E":** **P**rice (MPV), **U**sage (MUV), **M**ix, **y**ield (sub-variances of MUV), **E**fficiency (labour efficiency). Walk the material section in that order; the formula shape (Std − Actual × matched quantity) is identical for each pair.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard tier focuses on the mechanics: how each variance is built, how sub-variances roll up, and how the profit bridge closes the gap to actuals.

#### Setting the standards first

Three flavours appear in ICAN papers, and examiners love asking which one a company should adopt:

- **Ideal standard** — perfect conditions, no waste, no idle time, no price breaks. Useful for long-run benchmarking but demoralising in the short run.
- **Attainable (current) standard** — what a competent worker achieves under normal efficiency. This is the default in ICAN computational questions.
- **Basic standard** — held fixed for several years to isolate the effect of price/wage changes from efficiency changes.

#### The four cost variance families

Every variance follows the same template: **(Standard − Actual) × the quantity common to both sides.** The trick is picking the *right* quantity.

| Variance | Formula (₦) | What it isolates | Typical owner |
|---|---|---|---|
| Material Price (MPV) | (SP − AP) × AQ | Buying department paid too much / too little | Purchasing manager |
| Material Usage (MUV) | (SQ − AQ) × SP | Workshop wasted / saved material | Production manager |
| Labour Rate (LRV) | (SR − AR) × AH | Personnel paid above / below grade | HR / wages clerk |
| Labour Efficiency (LEV) | (SH − AH) × SR | Workforce faster / slower than standard | Foreman / supervisor |
| Fixed OH Expenditure | Budgeted FOH − Actual FOH | Overhead spend above plan | Overhead controller |
| Fixed OH Volume | Absorbed FOH − Budgeted FOH | Capacity not used / over-used | Sales-linked, not production |
| Sales Price | (Std SP − Actual SP) × Actual Qty sold | Market-side pricing slippage | Sales manager |

#### Sub-variances — material mix and yield

When a process uses more than one input (e.g. a feed mix), the MUV splits into two pieces. Material **mix** variance captures the cost of substituting a cheaper for a dearer input in a different ratio than standard; material **yield** variance captures the cost of getting fewer kgs of output per kg of input than standard. Both must reconcile back into the main MUV — examiners check this step in every multi-product question.

#### Sales-side reconciliation

Closing the gap between standard profit and actual profit requires four more lines: sales price variance, sales volume variance (valued at standard contribution), then the cost variances above. A frequent shortcut is **Sales Margin Variance = (Budgeted margin − Actual margin) × Actual sales units**, useful when no standard selling price is given.

#### Worked illustration — ICAN-style 25-mark question condensed

A product has standard material: 4 kg @ ₦250/kg = ₦1,000. Standard labour: 5 hrs @ ₦400/hr = ₦2,000. Budgeted production: 1,000 units. Actual results: produced 1,050 units using 4,300 kg at ₦260/kg; 5,400 hours at ₦390/hr; actual fixed overhead ₦3,200,000 against budget ₦3,000,000.

#### Step 1 — Material variances.
AQ = 4,300 kg; SQ for actual output = 1,050 × 4 = 4,200 kg.
MPV = (250 − 260) × 4,300 = ₦43,000 **Adverse (A)**.
MUV = (4,200 − 4,300) × 250 = ₦25,000 (A).
Total material variance = ₦68,000 (A).

#### Step 2 — Labour variances.
AH = 5,400; SH = 1,050 × 5 = 5,250.
LRV = (400 − 390) × 5,400 = ₦54,000 **Favourable (F)**.
LEV = (5,250 − 5,400) × 400 = ₦60,000 (A).

**Step 3 — Fixed overhead.** Expenditure = 3,000,000 − 3,200,000 = ₦200,000 (A). Volume = absorbed at standard hour rate × 5,250 − budget 3,000,000 — the gap shows whether budgeted capacity was under-utilised.

> ⚠️ **Examiner Trap:** students frequently subtract the **wrong** pair — e.g. using AQ in the usage formula instead of SQ. The rule of thumb: the quantity inside the bracket must be the one you can hold the manager responsible for. AQ is the buying manager's reality; SQ is the production manager's benchmark. Swap them and the sign of every variance flips.

#### Reconciling to actual profit

Standard profit (std contribution × actual units) + Sales volume variance + Sales price variance ± all cost variances = Actual profit. ICAN markers award the reconciliation step its own marks even when the individual variances are correct, because it proves you understand how the system links together.

---

### 🔴 Extended — Deep Study (3mo+)
> Extended tier tackles the edges: marginal-vs-absorption variances, idle time, and the questions that turn a 15-marker into a 25-marker.

#### Marginal vs absorption variance split

Under absorption costing, fixed overhead variance splits into **expenditure, capacity, and efficiency** (three-way). Under marginal costing, fixed overhead has only an **expenditure variance**; the volume effect appears as part of the contribution/profit reconciliation rather than as a production variance. ICAN examiners signal which system to use by giving (or withholding) the standard overhead absorption rate (OAR) and a separate fixed-overhead budget figure. Missing OAR = marginal costing question.

#### Idle time variance

Idle time is paid but unproductive. Treat it as a **separate efficiency-type variance**: Idle time variance = Idle hours × Standard rate (always adverse when hours > 0). Strip idle hours out of AH before computing LEV, otherwise LEV gets blamed for downtime that is not the foreman's fault.

#### Controllable vs uncontrollable

- **Controllable** — MPV, LRV, FOH expenditure, material mix. The cost-centre manager influences these within the period.
- **Uncontrollable** — Sales volume variance, fixed OH volume/capacity variance, external price shocks already passed through MPV.

A performance report that mixes the two destroys responsibility accounting, and ICAN theory questions explicitly ask candidates to classify given variances.

#### Two advanced prompts to attempt under exam conditions

1. A process blends two materials in a standard ratio 60:40 at ₦200 and ₦400/kg respectively. Given actual mix and yield figures, compute the material mix and yield variances, then reconcile them back to the main MUV. Watch for the **average standard price** used in the mix variance — it differs from the yield variance's price basis.
2. Reconcile standard profit to actual profit when the standard is set under absorption costing but the accounts are kept under marginal costing. The fixed OH volume variance under absorption must be replaced by an under/over-absorbed fixed overhead adjustment under marginal — a common ICAN trap worth 4 marks on its own.

#### Edge cases worth flagging

- **Standards not revised for inflation** — variance trends become meaningless; recommend basic standards with a separate price-level adjustment.
- **Service organisations** — labour efficiency replaces material usage as the dominant variance; idle time variance is more frequent.
- **Just-in-time environments** — material usage variance shrinks to near zero because stocks are minimal; price variance becomes the main control lever.

---

## Continue your study

- **[View this topic in your ICAN (Nigeria) roadmap](/roadmap/?exam=ican&duration=1mo)** — see where "Standard Costing" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ican&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ICAN (Nigeria) exam overview](/exams/ican/)** — pattern, eligibility, and syllabus
- **[All Accounting notes](/notes/ican/accounting/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
