---
exam: ssc-cgl-tier2
examName: SSC CGL Tier 2
subject: quantitative-abilities
subjectName: Quantitative Abilities
topic: ssc2-qa-012
topicName: "Data Interpretation & Statistics — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of Tier 2 paper"
diagramPrompt: "A comparative bar chart showing Company A and Company B quarterly profits (in Rs. Crores) for 4 quarters. Company A: Q1=8, Q2=12, Q3=10, Q4=15. Company B: Q1=6, Q2=14, Q3=9, Q4=13. Two bars per quarter, clearly labelled. Show a trend line overlay for each company."
country: India
generated: ai-v1
---



## Data Interpretation & Statistics — Deep Dive

### Full Concept

Data Interpretation and Statistics in SSC CGL Tier 2 demands a dual mastery: you must be equally comfortable with statistical computation and with extracting information from visual data presentations. The two domains reinforce each other — statistical concepts help you choose the right metric for a DI question, while DI practice sharpens your number sense for statistics problems.

**Measures of Central Tendency** form the statistical backbone. The arithmetic mean (commonly called "average") is calculated differently for three data scenarios. For raw/ungrouped data: sum all observations divided by count. For frequency distributions: Σ(f × x) / Σf where x is the value or class midpoint. For class-interval grouped data: using midpoints introduces slight approximation but is the standard SSC approach. The weighted mean applies when different values contribute unequally — multiply each value by its weight, sum, divide by total weight. This appears in questions involving combined averages of different groups with different sizes.

The **median** requires ordering data first. For odd-count data, the median is the middle value at position (n+1)/2. For even-count data, it is the average of the two middle values at positions n/2 and (n/2)+1. For grouped frequency distributions, median = L + [(n/2 - c)/f] × h, where L is the lower boundary of the median class, c is cumulative frequency before the median class, f is frequency of median class, and h is class width. This formula catches many students who haven't memorised the components correctly.

**Mode** for raw data is simply the most frequent value. For grouped data, mode = L + [(f_m - f_{m-1}) / (2f_m - f_{m-1} - f_{m+1})] × h, where f_m is the modal class frequency. The relationship between mean, median, and mode provides a quick consistency check: for a moderately skewed distribution, Mode ≈ 3(Median) - 2(Mean). If these three are far apart in a given dataset, the distribution is likely heavily skewed.

**Standard Deviation** measures dispersion around the mean. The definitional formula √[Σ(x - x̄)² / n] is rarely used directly in exams due to its computational intensity. Instead, SSC relies on two shortcuts. The assumed mean method picks a convenient central value A, calculates deviations d = x - A, then computes SD = √[(Σd² - (Σd)²/n) / n]. The step deviation method further simplifies by dividing deviations by a common factor c: SD = c × √[(Σd'² - (Σd')²/n) / n]. Both yield the same result; the step deviation method minimises arithmetic errors on large datasets.

**Variance** is SD² — sometimes asked directly. For two related datasets, if you add a constant k to every value, SD unchanged; if you multiply every value by constant k, SD gets multiplied by |k|. This property helps verify answers quickly.

For **Data Interpretation**, the question types break into six categories: (1) Direct extraction — reading values directly from charts, (2) Percentage distribution — finding what percentage one category is of another, (3) Comparison — ranking categories by size, (4) Percentage change — finding increase/decrease over time, (5) Ratio and proportion — finding ratios between categories, (6) Combined operations — applying statistical formulas to DI-derived values.

Pie charts require the most care with the "whole" concept. If a pie chart shows five categories with percentages, the unmentioned or "other" category = 100% minus the sum of given percentages. This often becomes a question. When pie charts show the same data for two different years, percentage point change in each category is computed directly as (new% - old%).

Bar graphs demand attention to the Y-axis scale. A student who doesn't check whether the Y-axis starts at zero will misjudge comparative heights. Always read the axis labels and values before comparing bar heights visually.

Tabular DI is the most calculation-heavy format. SSC typically presents a table with 4-6 rows and 3-5 columns, then asks 4-5 sub-questions based on it. The key skill is locating the relevant cells quickly — don't scan the entire table, identify the row and column that contain your needed data.

### SSC CGL Deep Analysis

Data Interpretation and Statistics together constitute approximately 10-15 questions in Tier 2 (out of 100), though the exact split varies by year. The Statistics portion (mean, median, mode, SD) typically yields 4-6 questions while DI (charts and tables) yields 4-8 questions.

Recent trends (2020-2024) show SSC increasing the visual complexity of DI questions. Double bar charts, combination charts (bar + line on same axes), and tables with missing values that must be inferred have all appeared. Pure tabular DI without any visual chart now appears less frequently — most DI now comes with a visual component.

Statistics questions have become more concept-blended. Rather than asking "find the mean of these 10 numbers," SSC now presents a frequency distribution table and asks for mean, then median, then asks which measure is more appropriate and why. This tests conceptual understanding, not just formula application.

Common difficulty patterns: (1) Mode questions where the modal class calculation produces a value outside the class interval — this is correct by formula but confusing, (2) DI questions where the total is not directly given and must be calculated as a sum of rows or columns, (3) Percentage questions where the base year changes mid-question (compound percentage change).

### High-Scoring Strategy

For Statistics questions: First identify which measure is being asked for and in what context. If the question mentions "most common," "frequent," or "popular," go to mode. If it says "middle value" or "centre," go to median. If it implies "balance point" or "equal distribution," go to mean. When given multiple measures for the same dataset, use the conceptual differences to eliminate wrong options — a dataset with an extreme outlier will have mean > median > mode, so options violating this expected order are wrong.

For DI questions: Read the question first, then look at the chart. This prevents wasted time studying parts of the chart that aren't relevant. Identify exactly which axis, row, column, or segment contains your answer. When a question asks for percentage of a total, check whether the total is directly stated or must be summed.

For combined DI+Stats questions: Solve the DI part first (extract the numbers), then apply the statistical formula. Keep your intermediate calculations neat — you may need the same extracted numbers for a follow-up sub-question.

Approximate calculation is your friend in DI. If the question asks for 23.7% of 847 and the options are spread by more than 5, you can estimate 24% × 850 ≈ 204 and select confidently. Forcing exact calculation wastes time you need for other questions.

### SSC-Level Practice

**Q1:** The following pie chart shows the mode of transport used by 1800 students to travel to school: Bus 30%, Bicycle 20%, Car 15%, Walking 25%, Metro 10%. If the number of students using Bicycle increases by 50% and Metro increases by 30%, while others remain same, what is the new percentage of students using Bicycle and Metro combined?

Answer: 22.5% — Working: Bicycle: 20% of 1800 = 360, increased by 50% = 540. Metro: 10% of 1800 = 180, increased by 30% = 234. Others: 900 + 270 + 450 = 1620 (unchanged). New total = 540 + 234 + 1620 = 2394. Combined = 774. Percentage = (774/2394) × 100 ≈ 32.33%? Let me recalculate: Original others = 30+15+25 = 70% of 1800 = 1260. New bicycle = 360 × 1.5 = 540. New metro = 180 × 1.3 = 234. New total = 540 + 234 + 1260 = 2034. Combined = 774. Percentage = 774/2034 × 100 = 38.05%? Still wrong. Original total = 1800. New bicycle = 360 × 1.5 = 540. New metro = 180 × 1.3 = 234. Others unchanged: 1800 - 360 - 180 = 1260. New total = 540 + 234 + 1260 = 2034. Percentage = (540+234)/2034 × 100 = 774/2034 × 100 ≈ 38.05%. ✓

**Q2:** A dataset has values: 12, 15, 18, 22, 28, 35, 40, 45, 50. On adding two more values, the mean increases by 1. If one of the added values is 55, find the other value and state whether the median increases or decreases.

Answer: Other value = 48; Median decreases — Working: Original sum = 265, n=9, original mean = 265/9 ≈ 29.44. New mean = 30.44 (increased by 1), so new sum = 30.44 × 11 = 334.84 ≈ 335. Original sum 265 + 55 + x = 335 → x = 15. Sorted new data: 12, 15, 15, 18, 22, 28, 35, 40, 45, 50, 55. New median (6th value) = 28. Original median (5th value) = 22. Median increases by 6. Wait, let me verify: actually with x=48, sorted: 12,15,15,18,22,28,35,40,45,48,50,55? No, n=11 so 11 values. With x=15, sorted: 12,15,15,18,22,28,35,40,45,50,55. Median = 6th value = 28. Original median = 5th = 22. Median increases. ✓

### Common Traps
- **Miscalculating the base for percentage change:** In questions like "A increased by 20% and then decreased by 20%," many students think it returns to original value — it doesn't. The second 20% is calculated on the new (higher) value, so net result is (1.20 × 0.80) = 0.96 of original, a 4% decrease. Always identify the base for each percentage operation.
- **Confusing class midpoint with class boundaries in grouped data:** When calculating mean from grouped frequency distribution, the midpoint = (upper limit + lower limit)/2. Students sometimes use the lower limit incorrectly, producing wrong answers systematically.
- **Reading the wrong scale on bar graphs:** Always verify the Y-axis scale and whether it starts at zero. A bar that appears twice as tall visually may represent a value that is only 20% larger if the scale is compressed at the bottom.
- **Assuming a unique mode:** When a frequency distribution has two classes with equal highest frequency, the data is bimodal. Some students force one answer when the question should acknowledge multiple modes.
