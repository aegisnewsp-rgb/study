---
exam: ssc-cgl-tier2
examName: SSC CGL Tier 2
subject: quantitative-abilities
subjectName: Quantitative Abilities
topic: ssc2-qa-004
topicName: "Profit, Loss & Discount — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of Tier 2 paper"
diagramPrompt: "A multi-step profit/loss diagram showing CP → Markup → MP → Discount → SP chain, with percentage arrows between each step."
country: India
generated: ai-v1
---



## Profit, Loss & Discount — Deep Dive

### Full Concept
At the advanced Tier 2 level, profit/loss problems involve nested percentage changes, and the relationship between MP, CP, discount, and profit is formula-driven. The fundamental chain is:

**CP → (Markup %) → MP → (Discount %) → SP → Compare with CP → Profit/Loss %**

The markup percentage tells you how much above cost the seller initially priced the article. The discount percentage tells you how much the buyer actually pays below that initial price. These two percentages interact multiplicatively.

**Key Identity:** If an article is marked up by x% and then discounted by y%, the profit/loss% = (1 + x/100)(1 − y/100) − 1, all multiplied by 100.

**False Weights (Dishonest Trading):** This is a Tier 2 specialty. If a seller uses a weight of 900g but calls it 1kg, and buys at cost price but sells at cost price, his effective profit comes from selling 100g "free." The gain% formula: Gain% = (True weight − False weight)/False weight × 100. If he also makes a profit of p% on his cost, then effective gain = p + G + pG/100.

**Break-Even and Successive Profit/Loss:** If an article is sold at successive profits of x%, y%, z%, the net result = (1 + x/100)(1 + y/100)(1 + z/100) − 1 × 100. This compounding approach applies to both profits and losses (use negative for loss).

**Selling at Cost Price with Two Rate Transactions:** If a seller sells at x% profit to one customer and y% loss to another from the same batch, and the selling prices are equal, find the combined profit/loss by equating total SP = total CP and using weighted average of ratios.

### SSC CGL Deep Analysis
- **Frequency:** 1–2 questions per paper. Profit/loss combined with discount is common. False weight questions appear in Tier 2 nearly every alternate year.
- **Difficulty:** Medium. The false weight trick and successive percentage changes trip up 50%+ of test-takers.
- **Recent trend:** Questions combining markup + discount + overhead costs in a single scenario. Also, problems where a shopkeeper makes a profit x% when selling at discounted price but would make loss y% if he didn't give the discount.
- **Newer patterns:** Finding the break-even point where discount equals profit percentage — if discount% = profit%, the seller neither gains nor loses overall (approximately).
- **Total weight in Tier 2:** Roughly 2–3% of the quant paper.

### High-Scoring Strategy
1. Always draw the CP → MP → SP chain. Write what you know, solve step by step.
2. For false weight: effective CP per false kg = actual cost of true weight / false weight. Effective SP per false kg = selling price of claimed weight / false weight.
3. Use the net change formula for successive profits/losses instead of applying them one by one.
4. If question gives SP and gain%/loss%, always find CP first (SP × 100/(100 ± gain_loss)).
5. When two SPs are equal at different profit/loss%, find the CP ratio using inverse proportion: CP₁:CP₂ = (100 ∓ loss₂):(100 ± profit₁).

### SSC-Level Practice
**Q1:** A merchant marks his goods at 40% above cost and gives a discount of 25%. Find his profit percent.
Answer: 5% — Working: Let CP = 100. MP = 140. SP = 140 × 0.75 = 105. Profit = 5% on CP = 100.

**Q2:** A shopkeeper sells rice at ₹40/kg and makes a 25% profit. However, he uses a false weight of 800g for 1kg. Find his actual profit percent.
Answer: 56.25% — Working: Cost of 800g = cost of 0.8kg at CP. He sells 800g at the price of 1000g. Effective SP per true kg = 40 × (1000/800) = 50. Effective profit = (50−40)/40 × 100 = 25%. Wait — with false weight alone: Gain% = (1000−800)/800 × 100 = 200/800 × 100 = 25%. Combined with 25% profit already: net = 25 + 25 + (25×25)/100 = 56.25%. Yes correct.

### Common Traps
- **Trap 1:** Applying discount% to CP instead of MP. Discounts are always on the marked price.
- **Trap 2:** For false weight problems, using the wrong base for gain calculation. Gain% = extra quantity received / false quantity × 100, not extra / true quantity.
- **Trap 3:** Adding successive profit percentages instead of multiplying the multipliers. 20% + 20% is NOT 40% profit — it's 44% (1.2 × 1.2 = 1.44).
