---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-011
topicName: Data Interpretation — Deep Dive
tier: deep
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "Draw a multi-source DI example: a pie chart on the left showing percentage distribution, and a bar graph on the right showing yearly trend for the same categories. Show a connecting line where data from pie is used to calculate bar values."
country: India
generated: ai-v1
---



## Data Interpretation — Deep Dive

### Full Concept

**Why DI is Really Just Arithmetic in Disguise**
Most DI problems don't need you to "interpret" anything — they need you to add, subtract, multiply, divide, and convert percentages. The chart is just a delivery mechanism for numbers you could equally get from a table. So the real skill is: (1) finding the right numbers quickly, and (2) doing arithmetic without a calculator.

**Reading Truncated (Cut) Y-Axis Graphs**
This is the most common trick in DI. When a bar graph's Y-axis doesn't start at 0, tiny differences get放大ed into big-looking differences. A graph showing bars of height 95 and 100 might look dramatically different if the Y-axis starts at 90! Always check where the Y-axis begins. If it starts at 90, the "difference" between 95 and 100 is actually just 5 units out of 100, or 5%.

**Multi-Source DI — Connecting Two or More Charts**
CUET sometimes gives you two charts that refer to the same data. Example: a pie chart shows the percentage distribution of marks across subjects, and a bar graph shows marks obtained per subject. To find total marks: you might need to calculate the actual tonnage or percentage value from the pie, then multiply by per-unit value from the bar. The connection is rarely obvious — look for shared categories or totals.

**Caselet DI — The Paragraph Method**
Some DI comes as a paragraph of text (caselet) that you must convert into a table yourself. Your approach:
1. Read once to understand the scenario
2. Identify categories/variables on second read
3. Build a table mentally or on rough paper
4. Then answer the questions

This tests your ability to organize unstructured data — a real-world skill.

**When Charts Contradict Each Other**
If one chart says category A is the largest while another chart seems to suggest otherwise, don't panic. Check:
- Are they measuring the same thing? (Value vs Volume? Percentage vs Absolute?)
- Are they from the same time period? (Last year vs this year?)
- What are the axes scales?

Often there's no contradiction — just different representations of the same data.

**Finding Averages from Bar/Pie Data**
Average = Sum of all values / Number of items. From a bar graph showing quarterly sales: add all four quarters, divide by 4. From a pie chart: if you know the total and percentages, convert each percentage to its absolute value, sum, divide by number of categories.

### Multiple Approaches

**Standard:** Identify what is asked → locate relevant data in chart → perform calculation → select answer.

**Shortcut — Ratio Method:** Instead of converting everything to absolute numbers, work with ratios directly. If Pie Chart shows A:B:C = 3:2:1 and Total = 600, then A's share = (3/6) × 600 = 300. You don't need to calculate individual parts — ratio math is faster.

**Shortcut — Cross-Multiplication for Percentages:** If 15% of X = 45, and you need 20% of X: 20% = (20/15) × 45 = 60. Keep one number as anchor.

### CUET-Level Problems

**Q1:** The bar chart shows number of students (in hundreds) in 5 schools. School A has 800, B has 600, C has 1000, D has 700, E has 900. If 20% of all students participate in a competition, and each participating student pays ₹100 fee, what is total fee collected?

Working: Total students = (800 + 600 + 1000 + 700 + 900) = 4000
20% participate = 0.20 × 4000 = 800 students
Total fee = 800 × 100 = ₹80,000
Answer: **₹80,000**

**Q2:** In a line graph showing company profit over 5 years, profits were: Year 1: ₹10L, Year 2: ₹15L, Year 3: ₹12L, Year 4: ₹20L, Year 5: ₹18L. What was the average annual profit and in which year was growth maximum?

Working:
Average = (10 + 15 + 12 + 20 + 18) / 5 = 75/5 = **₹15L per year**
Growth: Y1→Y2: +50%, Y2→Y3: -20%, Y3→Y4: +67%, Y4→Y5: -10%
Maximum growth: **Year 4** (+67%)
Answer: Average ₹15L, Max growth Year 4

### Tricky Cases
- **Pie chart with "Other" category:** If one slice is labeled "Other 30%", you cannot determine what the other individual slices are — only that they sum to 30%. Questions asking about specific values within "Other" are unanswerable from the chart.
- **Compound growth rates:** If population grows 10% in Year 1 and then 20% in Year 2, the compound growth is NOT 30%. It's (1.1 × 1.2 - 1) × 100 = 32%. Watch for this trap in multi-year line graph questions.
- **Zero baseline trick:** A bar showing 2 vs 1 (doubled!) might look like the difference is huge if Y-axis starts at 90. The actual values are nearly identical.
- **Percentage of a percentage:** If 30% of a category is female, and females make up 20% of total, then females in that category = 0.30 × 0.20 × Total = 6% of total. Chain multiplication, not addition.
