---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-015
topicName: "Data Interpretation"
tier: unified
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A multi-panel display showing various DI elements: a compound bar chart comparing two years, a pie chart with a exploded slice, and a data table with highlighted cells"
country: India
generated: ai-v1
---

# Data Interpretation

### 🟢 Lite

### Key Formula/Rule
Percentage from pie chart = (Angle/360°) × 100. For comparisons, always identify the base/denominator before calculating change.

### Quick Memory Trick
**"Read BEFORE you calculate"** — Always read the axes, labels, and units before touching any numbers. A missing zero can ruin your calculation.

### 1-Sentence Summary
Data interpretation asks you to read tables, bar charts, and pie charts carefully, extract the right numbers, and perform basic arithmetic operations accurately.

### Quick Example
Q: In a pie chart, if 'Marketing' gets 90° of the circle and total budget is ₹18 lakhs, what is the Marketing budget?
A: (90/360) × 18 = (1/4) × 18 = **₹4.5 lakhs**

### Must Remember
- Pie chart slices must sum to 360° (or 100%)
- Bar chart: read height/length carefully, check if y-axis starts at 0
- Percentage change = (New − Old)/Old × 100
- Average = Sum of values / Number of values
- Look for the BASE before computing any percentage

### 🟡 Standard

### Concept Explanation
Data interpretation is the art of extracting meaningful information from visual and tabular representations of data. In the GATE exam context, this means you need to rapidly read tables, bar charts, and pie charts, identify which numbers matter, perform the right arithmetic, and avoid getting tricked by misleading presentations. The good news is that DI problems almost never require complex mathematics — they're really reading comprehension problems dressed in numbers. The challenge is doing the arithmetic quickly and accurately under pressure.

Tables present raw data in rows and columns. Your first task is always to identify what each row and column represents, what units are being used, and whether any cells contain estimated or projected values. Look for footnotes — tables often have asterisks or notes that qualify the data with important caveats. Bar charts show comparisons across categories. The key trap here is the truncated y-axis: if a chart starts at 50 instead of 0, a bar that's twice as tall actually represents a much larger difference than 2x. Always check where the y-axis begins before interpreting visual differences.

Pie charts show how parts relate to a whole. Every slice represents a proportion of 360° (or 100%). The critical skill is translating between the visual angle and the actual quantity. A slice that looks twice as big might actually represent twice the value only if the chart is drawn to scale. Always verify by checking whether all slices sum to 360° or 100%. When comparing two pie charts of different totals, you need to convert to percentages first before making any comparison.

### Key Formulas
| Symbol | Meaning |
|--------|---------|
| % of whole | (Value / Total) × 100 |
| Pie angle | (Value / Total) × 360° |
| % change | (New − Old) / Old × 100 |
| Average | Sum of values / Count |
| Ratio | Value A / Value B (simplify!) |

### Step-by-Step Example
**Q:** This table shows population (in lakhs) of 5 cities across 3 census years:

| City | 1991 | 2001 | 2011 |
|------|------|------|------|
| A | 12 | 18 | 27 |
| B | 8 | 10 | 14 |
| C | 15 | 18 | 21 |
| D | 6 | 9 | 15 |
| E | 10 | 14 | 20 |

What is the average population of city A across all three years?
**Step 1:** Sum A's populations: 12 + 18 + 27 = 57
**Step 2:** Divide by number of years: 57 / 3 = 19
**Answer:** 19 lakhs

**Q2:** What percentage increase did city D show from 1991 to 2011?
**Step 1:** Original (1991): 6 lakhs. New (2011): 15 lakhs.
**Step 2:** % increase = (15 − 6) / 6 × 100 = 9/6 × 100 = 150%
**Answer:** 150%

### Common Mistakes
- Ignoring units → A table might show values in "thousands" or "lakhs" — always convert to the same unit before comparing
- Misreading truncated bar charts → If the y-axis doesn't start at 0, visual comparison is misleading. Always read the actual values, not just heights.
- Forgetting to check if pie chart sums to 100% → If slices don't sum to 360° or 100%, the chart might include an "other" category or there could be rounding

### Quick Test (2 Qs)
1. Q: In a bar chart showing quarterly sales (Q1: ₹4L, Q2: ₹5L, Q3: ₹3L, Q4: ₹8L), what is the average quarterly sales? Options: A) 4L B) 5L C) 6L D) 20L. Ans: B) 5L (Reason: (4+5+3+8)/4 = 20/4 = 5L)
2. Q: If a pie chart shows Education at 108° out of a total budget of ₹50,000, what is the Education budget? Options: A) ₹12,000 B) ₹15,000 C) ₹18,000 D) ₹10,000. Ans: B) ₹15,000 (Reason: (108/360) × 50,000 = 0.3 × 50,000 = 15,000)

### 🔴 Extended

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

*Content adapted based on your selected roadmap duration.*
