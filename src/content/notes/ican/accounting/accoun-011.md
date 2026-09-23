---
exam: ican
examName: ICAN (Nigeria)
subject: accounting
subjectName: "Accounting"
topic: accoun-011
topicName: Marginal Costing
weight: 3
country: nigeria
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Marginal Costing

### 🟢 Lite — Quick Review (1h–1d)
> Marginal Costing loads only variable costs into the product; fixed costs hit the period whole.

**Marginal Costing** charges variable production cost to the unit, then writes off every kobo of fixed cost against that period's contribution. Profit therefore equals total contribution minus total fixed cost, with nothing of the fixed overhead carried forward in stock.

- **Contribution** = Sales − Variable Cost (NGN)
- **Contribution per unit** = Selling price − Variable cost per unit (NGN/unit)
- **Profit** = Total Contribution − Fixed Cost (NGN)
- **Break-even (units)** = Fixed Cost ÷ Contribution per unit
- **Break-even (NGN)** = Fixed Cost ÷ P/V Ratio
- **P/V Ratio** = (Contribution ÷ Sales) × 100

> 💡 **High-Yield Memory Hook — "VCUP-BE-PSM":** **V**ariable costs **C**harged to **U**nit, **P**eriod costs **B**urned **E**ach period → **P**rofit = **S**ales − **M**ixed/Variable. The **P/V ratio is always a percentage**, never a decimal.

| Item | Marginal Costing | Absorption Costing |
|---|---|---|
| Fixed overhead in stock | Expensed in full | Absorbed into units |
| Closing stock valuation | Variable cost only | Full production cost |
| Profit driver | Contribution − Fixed cost | Sales − Full cost |

### 🟡 Standard — Regular Study (2d–2mo)
> Marginal Costing splits every cost by behaviour, then asks: "how much does each extra naira of sale actually contribute?"

#### Cost behaviour and the contribution idea

Costs are first classified by how they react to activity. **Variable cost** moves in lockstep with output — direct material, direct labour (often), and variable overhead. **Fixed cost** stays flat across the relevant range — rent, supervisor salary, depreciation on straight-line plant. **Semi-variable cost** carries both a fixed floor and a variable step (e.g., a telephone line rental plus call charges), so it must be split using the high–low method or scattergraph before any CVP work.

Once split, every naira of sales sheds its variable cost first. What remains is **contribution**, the resource available to absorb fixed cost and still leave profit. The technique's central rule: fixed production overhead is treated as a **period cost**, charged entirely to the contribution statement of the period in which it is incurred, never deferred inside unsold inventory.

#### Formulae with units and dimensions

| Formula | Expression | Units | Notes |
|---|---|---|---|
| Contribution | Sales − Variable cost | NGN | Always positive in CVP context |
| C per unit | SP per unit − VC per unit | NGN/unit | Building block of break-even |
| Total contribution | C per unit × units sold | NGN | Multiplied, not summed |
| Profit | Total contribution − Fixed cost | NGN | Final line of statement |
| BEP (units) | Fixed cost ÷ C per unit | units | Round up for whole units |
| BEP (NGN) | Fixed cost ÷ P/V ratio | NGN | P/V ratio entered as %, e.g. 40 not 0.40 |
| P/V ratio | (Contribution ÷ Sales) × 100 | % | Dimensionless ratio scaled to 100 |
| Margin of safety | Budgeted sales − BEP sales | NGN or units | Measure of cushion above break-even |

#### Worked application

Bola Co. sells a single product at NGN 8,000. Variable cost per unit is NGN 5,000. Fixed cost per period is NGN 1,800,000. Budgeted sales are 900 units.

- C per unit = 8,000 − 5,000 = **NGN 3,000**
- Total contribution = 3,000 × 900 = **NGN 2,700,000**
- Profit = 2,700,000 − 1,800,000 = **NGN 900,000**
- P/V ratio = (3,000 ÷ 8,000) × 100 = **37.5%**
- BEP (units) = 1,800,000 ÷ 3,000 = **600 units**
- BEP (NGN) = 1,800,000 ÷ 0.375 = **NGN 4,800,000**
- Margin of safety (NGN) = (900 × 8,000) − 4,800,000 = **NGN 2,400,000**, i.e. 300 units of cushion

If management wants a target profit of NGN 1,200,000, required units = (1,800,000 + 1,200,000) ÷ 3,000 = **1,000 units**.

> ⚠️ **Examiner Trap:** Candidates regularly divide fixed cost by 0.375 in decimal form rather than 37.5, halving break-even sales. Treat the P/V ratio as a percentage throughout the working; only divide by 0.375 if you first converted the ratio deliberately.

#### Reconciliation to absorption costing profit

The two methods diverge whenever opening and closing stock differ. Under absorption costing, fixed overhead deferred in closing stock boosts profit by OH absorbed × (closing − opening units); under marginal costing that deferral never occurs. Reconciliation runs:

#### Marginal costing profit ± Fixed OH absorbed/released = Absorption costing profit.

Where fixed OH absorbed = OAR × units produced, and the release/addition adjusts the period for stock movement.

#### Decision uses

- **Make-or-buy:** compare supplier's price with the variable cost to make; buy if the price is below that variable cost, provided no limiting factor is worsened.
- **Special order:** accept if order price ≥ variable cost and the order does not displace existing contribution.
- **Limiting factor:** rank products by contribution per limiting factor, not per unit.
- **Shut-down:** continue if variable cost of continuing is covered and fixed cost is unavoidable either way.
- **Sales mix:** hold mix constant or recompute using weighted average contribution per unit.

### 🔴 Extended — Deep Study (3mo+)
> The hard part of Marginal Costing is not arithmetic; it is reading the assumptions that quietly hold the model together.

#### Assumptions that bound the model

The CVP graph is a straight line only inside the **relevant range**. Outside it, fixed cost steps up, the selling price bends under discount pressure, and variable cost per unit drifts with bulk discounts on material. Linear cost behaviour, a constant sales mix, a single price per product, and a constant fixed-cost block are the four pillars; collapse any one and the break-even chart becomes a curve. Marginal Costing is a short-run decision tool, not a long-run planning one.

#### Multi-product break-even and the weighted C per unit

When two or more products share the cost pool, you cannot add their contribution-per-units. Instead compute a **weighted average contribution per unit** using the budgeted sales mix:

WAC = Σ (mix proportion × contribution per unit). Apply fixed cost to that weighted figure to get the break-even bundle, then translate back into product units via the mix proportions. ICAN papers reward students who show the mix proportions explicitly; an answer that simply multiplies two contribution figures is wrong even if the arithmetic accidentally lands on a similar total.

#### Edge cases and advanced traps

| Edge case | Effect on the model | Correct handling |
|---|---|---|
| Semi-variable cost not split | Distorts fixed cost and contribution alike | Apply high–low: (High cost − Low cost) ÷ (High activity − Low activity) for variable element |
| Stepped fixed cost | Breaks the linear assumption | Recompute break-even within each step; treat steps as separate ranges |
| Change in selling price | Shifts the P/V ratio | Recalculate P/V using the new SP per unit before any break-even |
| Closing stock higher than opening | Absorption profit > Marginal profit | Reconcile via fixed OH released into the period |
| Multiple products with shifted mix | Weighted contribution changes | Rebuild WAC from the new mix before reusing old break-even |
| Tax in target profit | Target becomes profit after tax | Convert: pre-tax profit = after-tax profit ÷ (1 − tax rate) |
| Inflation in variable cost | Real P/V ratio falls | Restate SP and VC at current price level, not historical |

#### Extended practice prompts

1. **Toba Ltd** sells two products A (SP NGN 4,000, VC NGN 2,400) and B (SP NGN 6,000, VC NGN 3,000) in a 3:2 sales mix. Fixed cost NGN 2,640,000. Compute the break-even bundle in units of each product, then the sales value at break-even and the margin of safety on budgeted sales of 1,200 A and 800 B.
2. **Reconciliation question:** Marginal costing profit for the year was NGN 1,250,000. Opening stock 400 units, closing stock 600 units, OAR NGN 250 per unit. Compute the absorption costing profit and explain in two sentences why the two profits differ by exactly that amount.

#### Common mistakes examiners exploit

- Forgetting that the **P/V ratio is dimensionless until multiplied by 100** — entering 0.40 instead of 40 silently halves every break-even in NGN.
- Treating **depreciation as always fixed** — production depreciation is fixed in total but variable per unit when activity changes; clarify before classifying.
- Reporting **margin of safety in the wrong unit** — the question asks for NGN, the candidate delivers units and loses the mark.
- **Mix shift ignored** between periods — using last year's weighted contribution with this year's sales gives an answer that looks tidy but is false.
- **Absorption OAR** applied to marginal closing stock — the reconciliation collapses if the OAR is from a different period.

> 📌 **Formula Check:** Profit = (SP − VC) × Q − FC. Every quantity must carry its unit; without units, the examiner cannot award the method mark even when the number is correct.

## Continue your study

- **[View this topic in your ICAN (Nigeria) roadmap](/roadmap/?exam=ican&duration=1mo)** — see where "Marginal Costing" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ican&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ICAN (Nigeria) exam overview](/exams/ican/)** — pattern, eligibility, and syllabus
- **[All Accounting notes](/notes/ican/accounting/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
