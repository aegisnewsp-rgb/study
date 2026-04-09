---
exam: gate
examName: "GATE"
subject: quant
subjectName: "General Aptitude"
topic: genera-002
topicName: "Topic 2"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Percentages, Profit and Loss

Percentages are everywhere in GATE's General Aptitude section. They're fast, scoring, and the formulas are straightforward — once you know how to apply them without getting tripped up by successive percentage changes or discount chains.

---

### 🟢 Lite — Quick Review (1h–1d)

> **Core formulas to memorize:**
> - **Percentage increase** = (Actual Increase / Original) × 100
> - **SP = CP × (1 + profit%/100)** or **SP = CP × (1 − loss%/100)**
> - **Successive percentage change:** Net change ≈ sum of % ± (product of % / 100)
> - **Simple Interest (SI)** = P × R × T / 100; **Amount** = P + SI
> - **Compound Interest (CI):** A = P × (1 + R/100)^T; CI = A − P
> - **Discount:** SP = MP × (1 − D/100)

**⚡ GATE exam tip:** When two successive percentage changes happen (e.g., 20% up then 10% down on the new value), the **net change is NOT simply 10%**. Use the multiplicative approach: 1.20 × 0.90 = 1.08 → net 8% increase.

**⚡ Quick trick:** To find 15% of a number, find 10% then add 5% (which is half of 10%). These mental shortcuts save time.

**⚡ Common trap:** Don't confuse " Markup on cost" with "Markup on selling price." Always identify the base.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Percentage Fundamentals

Percent means "per hundred." Converting between fractions and percentages:
- 1/8 = 12.5% = 0.125
- 1/6 ≈ 16.67%
- 3/8 = 37.5%
- 2/3 ≈ 66.67%

**Percentage vs. Percentage Points:** If something goes from 10% to 12%, that's a **20% increase** (relative), but a **2 percentage point** increase (absolute). GATE loves testing this distinction.

**Base identification is critical:**
- "Profit of 20% on cost price" → SP = 1.20 × CP
- "Profit of 20% on selling price" → SP − CP = 0.20 × SP → CP = 0.80 × SP → SP = CP / 0.80 = 1.25 × CP

**GATE Example (2019, 1 mark):** A shopkeeper offers a 15% discount on the marked price of a product, and still makes a 10% profit. If the cost price is ₹500, find the marked price.
> Solution: SP = 500 × 1.10 = ₹550. Also SP = MP × (1 − 15/100) = MP × 0.85. So MP = 550 / 0.85 = **₹647.06 (approx ₹647)**.

#### Successive Percentage Changes

When a quantity changes by x% then y% (applied to the new value):
- **Net multiplier** = (1 + x/100) × (1 + y/100)
- For two increases: net % = x + y + xy/100
- For increase then decrease by same %: net is always a loss of (x²/100)%

**Example:** Price increases by 20%, then decreases by 20%. Net change?
> Net = 1.20 × 0.80 = 0.96 → **4% loss** (not 0%!)

#### Profit and Loss Deep Dive

**Key formulas:**
| Concept | Formula |
|---------|---------|
| Profit % | (SP − CP)/CP × 100 |
| Loss % | (CP − SP)/CP × 100 |
| SP (given CP & profit%) | CP × (100 + profit%)/100 |
| CP (given SP & profit%) | SP × 100/(100 + profit%) |

**Break-even:** Occurs when SP = CP (0% profit, 0% loss).

**False weights:** If a shopkeeper uses a false weight (claims to sell 1 kg but actually sells only x kg for the price of 1 kg), their gain % = ((1/x) − 1) × 100%.

**GATE Example:** A merchant uses a scale that weighs 900g for 1kg. What is his gain %?
> Solution: Sells 900g as 1000g. Gain = 100g on cost of 900g. Gain % = (100/900) × 100 = **11.11%**.

#### Simple vs. Compound Interest

| | Simple Interest | Compound Interest |
|--|--|--|
| Formula | SI = P × R × T / 100 | A = P(1 + R/100)^T |
| Interest each year | Same | Decreasing (effective rate changes) |
| Grows linearly | Yes | No (exponential) |

**⚡ GATE trick — Equal SI and CI question:** If SI = CI for 2 years at rate R%, then R = 200/2 = 100/R? Wait, the formula: SI for 2 years = 2PR/100. CI for 2 years = P[(1+R/100)² − 1] = P[R/100 + R²/10000]. Setting equal: 2PR/100 = PR/100 + PR²/10000 → PR/100 = PR²/10000 → R = 100/2 = 50. So **R = 50%**.

#### Discounts and Marked Price

- **Single discount equivalent** to successive discounts d₁% and d₂%: = d₁ + d₂ − (d₁×d₂)/100
- Three successive discounts: extend the formula iteratively

**GATE Example:** Two successive discounts of 20% and 10% are equivalent to a single discount of:
> 20 + 10 − (20×10)/100 = 30 − 2 = **28%**.

---

### 🔴 Extended — Deep Study (3mo+)

#### Compound Interest with Different Compounding Periods

When interest is compounded quarterly, semi-annually, or monthly, adjust the rate and time:
- **Quarterly:** Rate per quarter = R/4, periods = 4T
- **Monthly:** Rate per month = R/12, periods = 12T
- **Effective Annual Rate (EAR):** EAR = (1 + R/100)^n − 1 (where n = compounding frequency per year)

#### Depreciation

**Straight-line depreciation:** Value after T years = P × (1 − dT/100), where d = annual depreciation rate.

**Declining balance depreciation:** Value after T years = P × (1 − d/100)^T.

#### Sales Tax / VAT Problems

If marked price = MP, tax rate = t%, and discount = d%:
- SP before tax = MP × (1 − d/100)
- SP after tax = SP_before_tax × (1 + t/100)

#### Population/Mixture in Percentage Terms

For population growth/decline:
- After T years at r%: P_T = P_0 × (1 ± r/100)^T

#### The "Change of Base" in Percentages

**GATE Advanced Example (2017, 2 marks):** The price of a commodity increases by 20% in January, decreases by 10% in February, and increases by 15% in March. What is the net percentage change from the beginning of January to end of March?
> Solution: 1.20 × 0.90 × 1.15 = 1.242 → **24.2% increase**.

#### Partnership and Share Distribution

When partners invest for different time periods, profits are divided in ratio of **(capital × time)**. This is essentially a weighted average problem in disguise.

#### Present Worth / True Discount

For bills of exchange:
- **True Discount (TD):** Difference between nominal (face) value and present worth
- **Present Worth (PW):** FV / (1 + rt/100) where r = rate%, t = time in years
- **Banker's Discount:** Discount calculated on the face value (not on PW)

#### Multi-Item Shopkeeper Problems

When a shopkeeper sells at a profit of x% on some items and loss of y% on others, **overall profit/loss %** = (Profit − Loss) / Total Cost × 100.

If equal cost is involved: Net % = (x − y) / 2 (if x% profit and y% loss on equal cost).

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
