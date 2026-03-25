---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-006
topicName: "Profit & Loss — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A detailed transaction flow showing discount chain, overhead costs, and final profit/loss calculation"
country: India
generated: ai-v1
---



## Profit & Loss — Deep Dive

### Concept Deep Dive

Profit and loss problems appear deceptively simple but have surprising depth. The core insight is that every business transaction involves multiple prices: the cost price (what you pay to acquire or produce something), the marked price (what you initially ask for it), and the selling price (what the customer actually pays, after any discounts). Each of these can be the basis for different percentage calculations, and mixing them up is the most common error.

The marked price is essentially a psychological anchor. When a seller marks an item at Rs. 1,000 before offering a "30% discount," they're playing with perception — the customer feels like they're getting a great deal while the seller may still be making a healthy profit. A 30% discount on Rs. 1,000 gives a selling price of Rs. 700. If the cost was Rs. 500, the profit is Rs. 200, which is 40% profit on cost, not 30%. Students often stop at the "30% discount" and forget to check the actual profit made.

False weights represent a clever (though dishonest) profit-maximization technique. If a shopkeeper uses a weight of 900 grams but calls it 1 kg, they're selling 900g at the price of 1000g. If the cost price is Rs. 100 per kg, and they sell at Rs. 100 per kg (claiming to sell 1 kg), their revenue is Rs. 100 for only 900g of actual goods. Their effective cost per gram is Rs. 100/900 ≈ Rs. 111.11 per kg, giving a profit percentage of approximately 11.11% on the cost, even though they made no profit per the scale reading. This is why false weight problems are common in profit and loss.

The relationship between successive discounts and profit/loss is nuanced. Two successive discounts of 20% and 10% do NOT equal a single 30% discount. The combined discount = 1 − (0.8 × 0.9) = 1 − 0.72 = 28%, not 30%. This is because the second discount applies to the already-reduced price, not the original marked price. The same logic applies in reverse to successive price increases.

### Advanced Formula Derivation

When discount and profit/loss interact: If an item costs Rs. C and is marked at M with a discount of d%, sold at a profit of p% on cost, we have SP = M(1 − d/100) = C(1 + p/100). From this, M = C(1 + p/100)/(1 − d/100). This formula shows the relationship between marked price, cost, discount, and profit simultaneously.

For false weight fraud: If a merchant uses a weight of W kg but claims it is 1 kg, and sells at cost price per the scale, the effective profit % = [(1 − W)/W] × 100. If W = 0.9 kg (900g scale), profit % = [(1 − 0.9)/0.9] × 100 = 11.11%. This independent formula is worth memorizing for speed.

Break-even analysis: Selling price at which there is neither profit nor loss = Cost Price. Below CP is loss; above CP is profit. The distance from CP determines how much buffer you have before making a loss.

### GATE-Level Numerical Problems

**Q1 (GATE 2020):** A merchant buys goods at a 25% discount on the marked price. He marks them at a price that is 20% above the marked price. He then sells at a 15% discount on the marked price. Find his profit percentage.

- Working: Let MP = 100. Cost = 100 × 0.75 = 75. Marked price for sale = 100 × 1.20 = 120. Selling price = 120 × 0.85 = 102. Profit = 102 − 75 = 27. Profit % = (27/75) × 100 = 36%.
- Answer: 36% profit
- Common error: Using original MP as the selling markup base instead of calculating the new marked price correctly

**Q2 (GATE 2019):** A shopkeeper offers a 10% discount on all items and still makes a profit of 20%. If an item costs Rs. 450, what is its marked price?

- Working: Let MP = M. SP after 10% discount = M × 0.90. But SP must also equal CP × 1.20 = 450 × 1.20 = 540. So M × 0.90 = 540 → M = 540/0.90 = 600.
- Answer: Marked price = Rs. 600
- Common error: Trying to add discount and profit percentages directly — they apply to different bases

**Q3:** A shopkeeper sells 4 goats bought at the same cost price. On 3 goats, he gains 20%, and on the 4th, he breaks even. On the whole transaction, he makes a profit of 12.5%. Find the loss percentage on the 4th goat.

- Working: Let CP of each goat = C. Total CP = 4C. Overall profit = 12.5%, so total SP = 4C × 1.125 = 4.5C. SP of 3 goats at 20% profit = 3C × 1.20 = 3.6C. So SP of 4th goat = Total SP − SP of 3 goats = 4.5C − 3.6C = 0.9C. Loss on 4th goat = C − 0.9C = 0.1C. Loss % = (0.1C/C) × 100 = 10%.
- Answer: 10% loss on the 4th goat
- Common error: Assuming equal selling price for all goats, not accounting for different profit percentages

### Multiple Approaches

**Method A:** Assume base value = 100 — this eliminates fractions and makes percentage calculations cleaner
**Method B:** Algebraic method — use variables for unknown prices and set up equations
**Method C:** Back-calculation — start from known selling price and work backwards to find cost
**When to use:** Method A for problems with discounts and markups. Method B for complex multi-step transactions. Method C when you know SP and want to find CP.

### Tricky Cases

- When cost price and selling price are expressed as ratios: Profit % = [(ratio − 1)] × 100 when CP:SP is given
- If a merchant sells at a loss equal to the discount percentage he offered: This creates interesting equations linking discount % and loss %
- Two successive price changes (increase then decrease) don't cancel out — the order matters for final price
- When an article is sold at a loss and the weight is found to be less than claimed, both factors contribute to effective loss
