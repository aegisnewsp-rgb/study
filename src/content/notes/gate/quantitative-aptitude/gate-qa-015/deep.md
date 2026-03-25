---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-015
topicName: Data Interpretation — Deep Dive
tier: deep
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A multi-panel display showing various DI elements: a compound bar chart comparing two years, a pie chart with a exploded slice, and a data table with highlighted cells"
country: India
generated: ai-v1
---



## Data Interpretation — Deep Dive

### Concept Deep Dive
Data interpretation in competitive exams is less about mathematical sophistication and more about systematic reading and arithmetic precision. The kinds of DI problems you'll encounter in GATE typically involve extracting data from multiple related tables, comparing quantities across bar charts, or calculating shares from pie charts. What makes these challenging isn't the difficulty of the math — it's the volume of information you need to process quickly and the traps embedded in how the data is presented.

One of the most common traps is the compound or stacked bar chart. Instead of showing a single value per category, these charts split the bar into components (say, domestic sales vs. export sales for each year). The temptation is to compare only the total bar heights, but the real insight often lies in the ratio of components. Has the proportion of exports grown over time? That shows up as a changing slice within each bar, not just a changing total height. Always ask yourself: what story is this chart trying to tell, and am I reading all the layers?

Another critical skill is handling data in different units. A table might list some values in crores, others in lakhs, and others in thousands — all mixed together. Before doing any calculation across rows, you need to convert everything to a common unit. Similarly, watch out for values labeled as "approximate" or "projected." A projected value for 2025 might be based on extrapolation from past trends, and if the projection assumption changes, the numbers could shift significantly.

Ratios and proportions appear constantly in DI. If A:B = 2:3 and B:C = 4:5, finding A:C requires linking through B. The LCM approach: make B's value the same in both ratios. A:B = 2:3 = 8:12 (multiply by 4), B:C = 4:5 = 12:15 (multiply by 3). So A:C = 8:15. This linking technique shows up in age problems, work problems, and DI problems involving multiple linked quantities.

A more subtle trap is the "percentage of percentage" problem. If a company's revenue grows by 20% and then profits grow by 30% of the revenue increase, what's the actual profit growth? Many students incorrectly answer 30%. The correct answer: if revenue was ₹100, it became ₹120. Profit increase = 30% of ₹20 = ₹6, so profit went from ₹X to ₹(X+6), giving percentage increase of (6/X)×100. Without knowing the original profit, you can't determine the percentage. This is why reading what you're actually asked for matters enormously.

### Advanced Formula Derivation
**Compound growth / CAGR**: If a value grows from V₀ to Vₙ over n years with annual growth rates r₁, r₂, ..., rₙ, then Vₙ = V₀ × (1+r₁/100) × (1+r₂/100) × ... × (1+rₙ/100). The Compound Annual Growth Rate (CAGR) is the single constant rate that would give the same final value: CAGR = (Vₙ/V₀)^(1/n) − 1, all multiplied by 100. For example, if revenue went from 100 to 125 in 3 years, CAGR = (125/100)^(1/3) − 1 = 1.25^(0.333) − 1 ≈ 0.077, or about 7.7% per year.

### GATE-Level Numerical Problems
**Q1 (GATE 2020):** The following table gives the percentage distribution of players in five sports A, B, C, D, E in two states. Total players in State 1 = 4500, State 2 = 6000.

| Sport | State 1 | State 2 |
|-------|---------|---------|
| A | 20% | 15% |
| B | 25% | 20% |
| C | 15% | 25% |
| D | 30% | 30% |
| E | 10% | 10% |

What is the difference between the number of players in sport D in State 2 and sport C in State 1?
- Working: State 2, Sport D: 30% of 6000 = 0.30 × 6000 = 1800. State 1, Sport C: 15% of 4500 = 0.15 × 4500 = 675. Difference = 1800 − 675 = 1125.
- Answer: **1125**
- Common error: Mixing up which percentage applies to which total — always identify the base before multiplying

**Q2 (GATE 2019):** A company spends 20% on raw materials, 35% on wages, 15% on machinery, and 15% on marketing. If the total budget is ₹80 lakhs and the raw materials cost increases by 10%, while everything else remains the same, what is the new raw materials expenditure and what percentage of the total is it?
- Working: Original raw materials: 20% of 80 = ₹16 lakhs. New raw materials: 16 × 1.10 = ₹17.6 lakhs. New total = 80 + 1.6 = ₹81.6 lakhs (since only raw materials changed). New percentage = (17.6/81.6) × 100 ≈ 21.57%.
- Answer: **₹17.6 lakhs, ≈ 21.6% of budget**
- Common error: Calculating new percentage as just 20% × 1.10 = 22% — this ignores that the total budget also increased

**Q3:** The pie chart of a student's time allocation shows: College (120°), Self-study (90°), Sleep (72°), Recreation (48°), Other (30°). The student has 16 waking hours per day (after sleep). How many hours does she spend on college and self-study combined?
- Working: Sleep is 72°, which is 72/360 = 1/5 of a day = 4.8 hours. Waking hours = 24 − 4.8 = 19.2 hours. College + Self-study = 120° + 90° = 210°. 210/360 = 7/12 of total time. But we need waking hours: (7/12) × 19.2 = 11.2 hours. Alternatively, calculate in terms of total day: (210/360) × 24 = 14 hours on college+study total, but this includes sleep-adjusted waking hours of 11.2 hours.
- Answer: **11.2 waking hours** (or 14 hours if counting the whole day including sleep, but the question specifies waking hours)
- Common error: Taking 210°/360° × 24 = 14 hours without adjusting for the "waking hours" constraint — the question specifically asks for waking hours

### Multiple Approaches
**Method A: Read-then-calculate** — Always read all labels, axes, and units first. Build a mental picture of what the data represents. Then identify which numbers you need. Calculate last.

**Method B: Estimate before exact** — In DI, approximate answers often help you eliminate wrong options quickly. If options are spread far apart, you might not need full precision. This is especially useful for percentage-heavy questions.

**When to use:** Use Method A for precise calculations where options are close together. Use Method B for rough estimation to quickly eliminate unlikely options.

### Tricky Cases
- **Dual pie charts with different totals**: If you're comparing pie charts where each represents a different total, convert to percentages first. A slice that's 90° in both charts represents the same fraction but different absolute values.
- **Bar charts with negative values**: Some charts show losses or declines as bars going downward. Always check whether negative values are possible before summing.
- **Approximated data**: Tables with "approx." or "—" for missing values require careful handling. Don't treat approximate values as exact — your answer might be within the rounding error.
- **Cumulative vs individual bars**: In a cumulative bar chart, each bar adds on to the previous one. To find the value of a single component, you may need to subtract adjacent bar heights.
