---
exam: al-exam
examName: A/L Examination (Sri Lanka)
subject: commerce-stream
subjectName: "Commerce-Stream"
topic: commer-011
topicName: Cost Accounting
weight: 3
country: srilanka
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-20"
---

# Cost Accounting

### 🟢 Lite — Quick Review (1h–1d)
> Last-minute recap for the A/L Commerce paper — cost sheet, BEP, and variance formulas in one breath.

**Cost Accounting** records, classifies and analyses every rupee spent on producing a product, so management can price correctly, control waste and judge profit. In the A/L paper you face three question types: cost sheet preparation, break-even / marginal costing, and standard costing variances.

#### Must-know formulas

| Formula | Variables & units | Result unit |
|---|---|---|
| Prime Cost = DM + DL + Direct Expenses | DM = Direct Material (LKR), DL = Direct Labour (LKR) | LKR |
| Works Cost = Prime Cost + Factory Overheads | – | LKR |
| Cost of Sales = COGS + Selling + Distribution OH | – | LKR |
| BEP (units) = TFC ÷ Contribution per unit | TFC = Total Fixed Cost (LKR) | units |
| BEP (LKR) = TFC ÷ (C/S ratio) | C/S ratio = Contribution ÷ Sales × 100 | LKR |
| Margin of Safety % = Profit ÷ Contribution × 100 | – | % |
| Material Price Variance = (SP – AP) × AQ | SP/AP in LKR/unit, AQ in units | LKR |

> 💡 **Memory Hook (F-A-V):** for every variance ask **F**avourable or **A**dverse, then check the **V**ariable — price vs usage for materials, rate vs efficiency for labour. Favourable means actual beats standard; Adverse means actual is worse than standard.

---

### 🟡 Standard — Regular Study (2d–2mo)
> The working level — how cost flows from raw material to cost of sales, and how each decision technique actually works.

Cost flows downward through a vertical sequence: raw material purchases → direct material issued → prime cost built up by adding direct labour and direct expenses → works cost after factory overheads are absorbed → COGS after opening/closing finished-goods stock is netted → cost of sales once selling and distribution overheads are added. Absorption of overheads needs a **predetermined overhead absorption rate (POAR)** = Estimated Overheads ÷ Estimated Activity Base (labour-hours, machine-hours or % of direct wages).

#### Marginal vs Absorption Costing

| Feature | Marginal Costing | Absorption Costing |
|---|---|---|
| Fixed overhead treatment | Period cost (charged in full to the period) | Product cost (carried into inventory) |
| Inventory valuation | Variable cost only | Full manufacturing cost |
| Profit when sales > production | Lower | Higher |
| Profit when sales < production | Higher | Lower |
| Closing stock effect on profit | No fixed OH carry-over | Fixed OH deferred to next period |

#### Cost behaviour and the High–Low method

Total Cost y = a + bx, where **a** = fixed element (LKR) and **b** = variable cost per unit of activity (LKR/unit). From two observed activity levels:

Variable Cost per unit = (Cost at High − Cost at Low) ÷ (High level − Low level). Then plug back to recover fixed cost. Common slip: using cost per *period* instead of cost per *unit* at each level.

#### Standard costing variance tree

| Variance | Formula | Sign rule |
|---|---|---|
| Material Price | (SP − AP) × AQ | Favourable if SP > AP |
| Material Usage | (SQ − AQ) × SP | Favourable if SQ > AQ |
| Labour Rate | (SR − AR) × AH | Favourable if SR > AR |
| Labour Efficiency | (SH − AH) × SR | Favourable if SH > AH |
| Fixed OH Expenditure | Budgeted − Actual | Favourable if Budgeted > Actual |
| Fixed OH Volume | (Std hrs for actual output − Budgeted std hrs) × Std fixed OH rate | Favourable if produced > budgeted |
| Sales Volume | (Actual units − Budgeted units) × Std profit/unit | Favourable if actual > budgeted |
| Sales Price | (Actual price − Std price) × Actual units sold | Favourable if AP > SP |

#### Worked problem

A factory makes one product. Standard: 4 kg material @ LKR 250/kg and 3 labour-hours @ LKR 400/hr per unit. Actual output 1,000 units consumed 4,200 kg at LKR 260/kg and 3,100 hours paid at LKR 390/hr. Compute Material Price, Material Usage, Labour Rate and Labour Efficiency variances.

**Material Price Variance** = (SP − AP) × AQ = (250 − 260) × 4,200 = LKR 42,000 Adverse.
**Material Usage Variance** = (SQ − AQ) × SP. SQ = 4 kg × 1,000 = 4,000 kg. = (4,000 − 4,200) × 250 = LKR 50,000 Adverse.
**Labour Rate Variance** = (SR − AR) × AH = (400 − 390) × 3,100 = LKR 31,000 Favourable.
**Labour Efficiency Variance** = (SH − AH) × SR. SH = 3 × 1,000 = 3,000 hrs. = (3,000 − 3,100) × 400 = LKR 40,000 Adverse.

Net variance = (42,000 + 50,000 + 40,000) − 31,000 = LKR 101,000 Adverse.

> ⚠️ **Examiner Trap:** students confuse AQ with SQ in Material Usage and AH with SH in Labour Efficiency. The **Actual Quantity (AQ)** and **Actual Hours (AH)** always use the *standard price/rate*; the standard price/rate is then applied to the *actual output's standard quantity/hours*.

---

### 🔴 Extended — Deep Study (3mo+)
> Boundary conditions, reconciliation, and decision rules that separate an A pass from a B pass.

Two figures often appear at the bottom of a variance question: **Actual Cost Profit** and **Standard Cost Profit**. They must reconcile. Start from Standard Profit, add favourable variances, subtract adverse variances, and you arrive at Actual Profit (or the reverse — adjust for all variances to convert one profit basis into the other). The reconciliation line is a frequent 8-mark A/L question, and most candidates lose marks because they mix signs or drop the sales variances entirely.

#### Edge-case watchlist

1. **Normal vs Abnormal Loss in Process Costing.** Normal loss is expected, valued at scrap, and absorbed by good units only. Abnormal loss is charged in full to the process at good-unit cost; abnormal *gain* is credited similarly.
2. **Equivalent Units** must be used when closing WIP is partly complete — units completed and transferred plus (closing WIP × % completion).
3. **Limiting Factor decisions.** When material, labour or hours constrain output, rank products by contribution *per unit of scarce factor*, not contribution per unit.
4. **Make-or-Buy.** Only relevant costs (avoidable variable + specific fixed) count; sunk and allocated fixed costs are excluded.
5. **ABC vs Traditional.** Activity-Based Costing assigns overheads via cost drivers (setups, orders, inspections), correcting the distortion traditional volume-based rates create when products consume overheads unequally.
6. **Target Costing.** Market price minus required margin = allowable cost; cost reduction closes the gap before design freeze.
7. **Margin of Safety shrinkage** signals rising fixed costs or falling contribution — combine BEP with MoS% to assess break-even risk.
8. **Fixed OH Volume Variance** turns adverse whenever actual output falls below budgeted activity, even if expenditure is on target.

#### Advanced practice prompts

1. A business has TFC LKR 1,200,000, variable cost LKR 80/unit, selling price LKR 200/unit. Output is 10,000 units but only 8,000 are sold at LKR 220. Calculate (i) BEP in units and LKR, (ii) Margin of Safety % using actual sales, (iii) Profit under marginal costing, (iv) the Fixed OH Volume Variance given budgeted output of 12,000 units and absorbed fixed OH rate of LKR 100/unit.
2. A process inputs 5,000 units at LKR 50 each. Normal loss is 5% of input. Closing WIP is 800 units, 60% complete. Abnormal loss is 100 units. Scrap realises LKR 20/unit. Compute (i) equivalent units under the weighted-average method, (ii) cost per equivalent unit, (iii) value of closing WIP and abnormal loss.

---

## Continue your study

- **[View this topic in your A/L Examination (Sri Lanka) roadmap](/roadmap/?exam=al-exam&duration=1mo)** — see where "Cost Accounting" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=al-exam&duration=1d)** — 1-day sprint covering highest-weight topics
- **[A/L Examination (Sri Lanka) exam overview](/exams/al-exam/)** — pattern, eligibility, and syllabus
- **[All Commerce-Stream notes](/notes/al-exam/commerce-stream/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
