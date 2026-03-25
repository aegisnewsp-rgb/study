---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-004
topicName: Percentage — Deep Dive
tier: deep
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A comparison chart showing percentage increase vs decrease asymmetry, and a successive percentage change calculator diagram"
country: India
generated: ai-v1
---



## Percentage — Deep Dive

### Concept Deep Dive

The word "percent" comes from the Latin "per centum," meaning "by the hundred." So when we say 40%, we're really saying 40 out of every 100 units. This framing helps when percentages feel abstract — imagine walking into a store with exactly Rs. 100: if an item is 35% off, you'd save Rs. 35 and pay Rs. 65. The "per hundred" mental model makes it concrete.

One of the most powerful properties of percentages is commutativity in multiplication: X% of Y always equals Y% of X. This isn't obvious at first glance, but algebra proves it: (X/100) × Y = (Y/100) × X. This shortcut can turn a messy calculation into a trivial one. If someone asks you "What is 4% of 75?" you can flip it to "What is 75% of 4?" — 75% of 4 is obviously 3, so 4% of 75 is also 3. Much easier to compute mentally.

The most common trap in percentage problems is misunderstanding successive percentage changes. Here's the thing: percentages don't add up linearly when applied one after another. A 50% increase followed by a 50% decrease does NOT get you back to where you started. Starting with 100: 50% increase → 150. Then 50% decrease on 150 → 75. You're down 25% overall, not at zero. This asymmetry catches many students off guard because we're wired to think "plus and minus the same percentage cancel out." They don't, unless you're going back to the original base each time.

Another subtle point: percentage change always uses the original (starting) value as the denominator, not the new value. This is crucial in multi-step problems where intermediate results become the starting point for the next percentage calculation.

### Advanced Formula Derivation

For successive percentage changes, the combined multiplier is the product of individual multipliers. After an increase of A% and then B%: Final = Original × (1 + A/100) × (1 + B/100). This extends to any number of sequential changes.

For percentage change around a circle: If value changes from P to Q and then back to P, the percentage increase and percentage decrease are NOT equal even though you return to the same number. Going from 80 to 100 is +25%, but going from 100 back to 80 is −20%. The denominator is different.

For comparing fractions: To compare two fractions like 3/7 and 4/9, convert to percentages — 3/7 ≈ 42.86% and 4/9 ≈ 44.44%, so 4/9 is larger. Percentages give every fraction the same denominator (100), making comparison trivial.

### GATE-Level Numerical Problems

**Q1 (GATE 2020):** The price of a commodity increases by 20% in January and decreases by 20% in February. The price in March is Rs. 384. What was the price before January?

- Working: Let initial price = P. After Jan: P × 1.20. After Feb: P × 1.20 × 0.80 = P × 0.96 = 384. So P = 384/0.96 = 400.
- Answer: Rs. 400
- Common error: Using 20% increase then 20% decrease as 0% net change — remember they don't cancel!

**Q2 (GATE 2019):** In an election, 60% of voters voted. If 15% of those who voted were invalid votes and the winner got 60% of valid votes and won by 20,400 votes, how many eligible voters were there?

- Working: Let total eligible voters = V. Votes cast = 0.60V. Valid votes = 0.60V × 0.85 = 0.51V. Winner got 60% of valid = 0.306V. Loser got 40% of valid = 0.204V. Margin = 0.306V − 0.204V = 0.102V = 20,400. So V = 20,400/0.102 = 200,000.
- Answer: 200,000 eligible voters
- Common error: Not excluding invalid votes before calculating winner's share

**Q3:** A shopkeeper mixes two types of rice costing Rs. 40/kg and Rs. 60/kg in the ratio 3:2. He sells the mixture at a 20% profit. After a month, the cost of Rs. 60/kg rice increases by 30%. If he wants to maintain the same profit percentage, by what percent should he increase the selling price?

- Working: Initial mixture cost = (3×40 + 2×60)/5 = 240/5 = Rs. 48/kg. SP with 20% profit = 48 × 1.20 = Rs. 57.6/kg. New cost of expensive rice = 60 × 1.30 = Rs. 78/kg. New mixture cost = (3×40 + 2×78)/5 = 276/5 = Rs. 55.2/kg. To maintain 20% profit: SP needed = 55.2 × 1.20 = Rs. 66.24. Price increase = (66.24 − 57.6)/57.6 × 100 ≈ 15%.
- Answer: ~15% increase in selling price

### Multiple Approaches

**Method A:** Direct calculation — apply each percentage change sequentially
**Method B:** Use multiplier approach — multiply by (1 ± percentage/100) for each step
**When to use:** Method A for 2-3 steps when numbers are clean. Method B for any number of steps or when you need the net effect quickly.

### Tricky Cases

- Percentage decrease cannot exceed 100% when going toward zero (you can't decrease something by more than its entire value)
- Comparing percentages across different bases requires converting to actual numbers first
- Population problems: when a quantity grows by a percentage repeatedly, the new base keeps increasing — don't use the original base for subsequent calculations
