---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-004
topicName: "Percentage"
tier: unified
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A comparison chart showing percentage increase vs decrease asymmetry, and a successive percentage change calculator diagram"
country: india
generated: 2026-05-26
lastUpdated: 2026-05-26
---

# Percentage

### 🟢 Lite

### Key Formula/Rule
Percent means "per hundred" — 25% = 25/100 = 0.25. To find X% of Y, multiply Y by X/100. To express a value as a percentage, divide the part by the whole and multiply by 100.

### Memory Trick
**"Per-Cent" = Per-100** — just scale the part up to a 100-point base. Think of it like a test score: 25/100 marks is 25%. Convert percentage to decimal by dropping the % sign and dividing by 100. Convert decimal to percentage by multiplying by 100 and adding %.

### 1-Sentence Summary
The core percentage operation is just multiplying by a fraction (X/100), and every percentage word problem in GATE is either "find X% of Y," "what percent is X of Y," or a percentage change scenario.

### Quick Example
Q: What is 20% of 150?
A: 150 × 20/100 = 150 × 0.20 = **30**

Q: 35 is what percent of 140?
A: (35/140) × 100 = 0.25 × 100 = **25%**

Q: A laptop's price decreased from ₹80,000 to ₹65,000. What is the percentage decrease?
A: (15,000/80,000) × 100 = **18.75%**

### Must Remember
- **X% of Y = Y% of X** — 20% of 50 = 50% of 20 = 10. Use this to simplify calculations.
- **Increase by X%** → multiply by (100+X)/100 = 1 + X/100
- **Decrease by X%** → multiply by (100−X)/100 = 1 − X/100
- **Percentage change** = ((New − Old) / Old) × 100
- **Successive percentage changes** → multiply the multipliers: a 10% increase followed by a 20% increase = ×1.10 × 1.20 = ×1.32 (32% total increase, NOT 30%)
- **A becomes B** → percentage change = ((B−A)/A) × 100; if B < A it's a decrease
- **Population growth problems** → after n years: Final = Initial × (1 ± r/100)^n

### Exam Tips
- If a question says "price increased by 20% then decreased by 20%", the final price is NOT the original — it's lower (×1.20 × 0.80 = ×0.96). GATE loves this trap.
- For comparison problems, always identify the original/base value first.
- Percentage → fraction conversions worth memorizing: 50% = 1/2, 25% = 1/4, 20% = 1/5, 10% = 1/10, 5% = 1/20.
- When combining percentages (e.g., "35% of students play football and 20% of those also play cricket"), multiply the percentages: 35% × 20% = 7% of total.

### Common Pitfalls
- **Treating a percentage increase followed by decrease symmetrically** → A 20% increase then 20% decrease from the NEW base gives a net loss. Calculate: ×1.20 × 0.80 = 0.96 of original.
- **Using the wrong base for percentage change** → Always divide by the ORIGINAL value, not the new value.
- **Adding percentages directly when you should multiply** → "10% increase then 15% increase" is NOT 25% — it's ×1.10 × 1.15 = ×1.265 = 26.5%.

### Solved GATE-Style Example
**Q (GATE 2022):** If the price of oil increases by 25% and then decreases by 20%, what is the net change from the original price?

**Step 1:** Increase by 25%: multiply by 1.25 → Price = 1.25P
**Step 2:** Decrease by 20%: multiply by 0.80 → Price = 1.25P × 0.80 = 1.00P

**Answer: No net change** — the price returns to original. This happens because 25% increase and 20% decrease are not symmetric around the original value.

### 🟡 Standard

### Concept Explanation

Percentage is just a way of expressing a fraction with a denominator of 100. Instead of saying "35 out of every 100 things," we say 35%. This makes comparisons easier because everything is on the same scale — you're always talking about parts of one whole, expressed as hundredths.

The key mental shift is that "percent" and "fraction" are two faces of the same coin. When you see 15%, think 15/100 or 0.15. Going the other way, the fraction 3/4 becomes 75% because 3 divided by 4 equals 0.75, and 0.75 times 100 gives you 75. Once this clicks, percentage problems become straightforward multiplication and division.

Percentage change comes up constantly in real life — salary hikes, price reductions, marks improvement. The formula measures how much something has grown or shrunk relative to where it started. The denominator is always the original value, which is why people sometimes forget to use the old number as the base.

### Key Formulas

| Symbol | Meaning |
|--------|---------|
| X% of Y | Y × X/100 |
| X as % of Y | (X/Y) × 100 |
| % change | ((New − Old)/Old) × 100 |
| A% increase then B% decrease | Net = (1 + A/100)(1 − B/100) |

### Step-by-Step Example

**Q:** A shirt costs Rs. 800. Its price is first increased by 15%, then decreased by 10%. What is the final price?

**Step 1:** Apply 15% increase: 800 × (115/100) = 920

**Step 2:** Apply 10% decrease on 920: 920 × (90/100) = 828

**Answer:** Rs. 828

### Common Mistakes

- Confusing original value with intermediate value → Always use the immediate previous value as base for sequential percentage changes
- Converting X% to decimal incorrectly (25% = 0.25, not 0.025) → Remember: percent means divide by 100

### Quick Test (2 Qs)

1. Q: If the population of a town grows from 50,000 to 60,000, what is the percentage increase? Options: 10%, 15%, 20%, 25%. Ans: 20% (Reason: (60000-50000)/50000 × 100 = 20%)
2. Q: 40% of a number is 120. What is 60% of the same number? Options: 160, 170, 180, 200. Ans: 180 (Reason: Number = 120 × 100/40 = 300; 60% of 300 = 180)

### 🔴 Extended

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

*Content adapted based on your selected roadmap duration.*
