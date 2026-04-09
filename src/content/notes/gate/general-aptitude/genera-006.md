---
exam: gate
examName: "GATE"
subject: quant
subjectName: "General Aptitude"
topic: genera-006
topicName: "Topic 6"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Data Interpretation

Data Interpretation (DI) is one of the highest-scoring areas in GATE's General Aptitude section. It requires no advanced math — just reading charts carefully, extracting numbers accurately, and applying basic arithmetic. Speed and accuracy under pressure are everything here.

---

### 🟢 Lite — Quick Review (1h–1d)

> **Core skills:**
> - **Read chart titles, labels, and axes carefully** — what is actually being measured?
> - **Pie charts:** Slice percentages always sum to 100%. Find the central angle: Angle = (%/100) × 360°.
> - **Bar graphs:** Compare heights/lengths directly. Watch for the scale on the y-axis.
> - **Tables:** Read row/column headers. Identify what each cell represents.
> - **Caselets:** Build a small table from the paragraph before solving.

**⚡ GATE exam tip:** Always check if the question asks for "percentage of X as a percentage of Y" — the base matters enormously. A is 20% of B means A/B = 0.20. A is 20% more than B means A = 1.20 × B.

**⚡ Quick trick:** For pie chart problems, remember that 1% = 3.6° (since 100% = 360°). So 7% ≈ 25° and 12.5% = 45°.

**⚡ Common trap:** In stacked bar graphs, the segments are proportional to sub-components, not the total height. Always identify which layer you're reading from.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Pie Charts

A pie chart represents parts of a whole as angular sectors. The entire circle = 360° = 100%.

**Key relationships:**
- Central angle for a segment = (Value of segment / Total) × 360°
- Value of segment = (Angle / 360°) × Total
- Percentage of segment = (Angle / 360°) × 100%

**GATE Example:** If a company has 4 divisions A, B, C, D with revenues ₹40L, ₹60L, ₹80L, ₹120L respectively, find the central angle for division C.
> Total = 40+60+80+120 = 300L. Angle for C = (80/300) × 360° = **96°**.

**Comparison pie charts:** When two pie charts are given (e.g., different years), look for which segments grew/shrunk and by how much. Growth % = (New − Old)/Old × 100.

#### Bar Graphs

**Types to recognize:**
- **Simple bar:** One value per category
- **Grouped (clustered) bar:** Multiple values per category, side by side
- **Stacked bar:** Values stacked on top of each other

**Reading bar graphs:**
- Always check the y-axis scale (is it linear? starting from 0?)
- For percentage change: (New − Old)/Old × 100
- For share: individual / total × 100

**GATE Example (2018, 2 marks):** The bar graph shows production of widgets (in thousands) for years 2014–2018. If production in 2016 was 45 thousand and in 2017 was 60 thousand, what is the percentage increase?
> % increase = (60−45)/45 × 100 = 15/45 × 100 = **33.33%**.

#### Tables

Tables are the rawest form of DI. Key skills:
- Identify the variable(s) in each column
- Cross-reference rows and columns correctly
- Use column/row totals when given

**GATE Example Table Question Pattern:**
| Year | Revenue (₹Cr) | Expenses (₹Cr) |
|------|-------------|---------------|
| 2015 | 120 | 80 |
| 2016 | 150 | 90 |
| 2017 | 180 | 100 |

Questions often ask: "In which year was the profit margin highest?" (Revenue − Expenses)/Revenue × 100 for each year.

#### Caselets

A caselet is a paragraph with embedded numerical data that you must first organize into a table.

**Strategy:**
1. Read once to understand the scenario
2. Identify quantities and their relationships
3. Build a table/structure
4. Answer the questions

**GATE Example pattern:** "In a class, 60% are boys. 40% of boys and 50% of girls passed. If 100 students passed, how many students are in the class?"
> Let total = N. Boys = 0.6N, Girls = 0.4N.
> Passed = 0.4(0.6N) + 0.5(0.4N) = 0.24N + 0.20N = 0.44N = 100 → N = 100/0.44 ≈ **227 students**.

---

### 🔴 Extended — Deep Study (3mo+)

#### Combined Charts

GATE frequently presents two or more chart types together. For example, a pie chart showing market share combined with a bar graph showing revenue trend for each company.

**Strategy:** Answer what you can from each chart independently first, then combine.

#### Line Graphs (Time Series)

Line graphs show trends over time. Key questions:
- Identify periods of growth/decline
- Calculate CAGR (Compound Annual Growth Rate): [(End/Start)^(1/n) − 1] × 100
- Find the period with maximum/minimum change

**CAGR Formula:**
> CAGR = [V_final / V_beginning]^(1/n) − 1 (where n = number of periods)

**GATE Example:** Revenue grew from ₹50L to ₹80l in 3 years. Find CAGR.
> CAGR = (80/50)^(1/3) − 1 = 1.6^0.333 − 1 ≈ 1.169 − 1 = **16.9%** per annum.

#### Approximation and Estimation

In DI, sometimes exact calculation is unnecessary. Use:
- Rounding: 47.3% ≈ 47%
- Bounding: Is the answer closer to 25% or 50%?
- Proportion: If 1/7 ≈ 14.3%, then 3/7 ≈ 42.9%

**⚡ Advanced trick — cross-multiplication check:** When comparing two fractions a/b and c/d without calculating: compare a×d vs b×c. If a×d > b×c, then a/b > c/d.

#### Two-Way Tables and Conditional Sums

**GATE Advanced Example Pattern:**
| Category | Male | Female | Total |
|----------|------|--------|-------|
| Urban | 40 | 30 | 70 |
| Rural | 50 | 80 | 130 |
| Total | 90 | 110 | 200 |

Questions might ask:
- What % of urban population is female? → 30/70 × 100 = **42.86%**
- What % of females are rural? → 80/110 × 100 = **72.73%**

Notice these are DIFFERENT bases — this is the most common DI trap.

#### Missing Data and Interpolation

Sometimes GATE provides tables with some missing values and asks you to find them using total/subtotal information. Key: use row and column totals to back-calculate.

#### GATE DI Question Types (Past Paper Patterns)

1. **Find the difference** between two values — direct subtraction
2. **Find the ratio** — one value divided by another
3. **Find the percentage** — relative comparison
4. **Find the average/total** — sum or divide
5. **Find the trend** — growth/decline identification
6. **Find the maximum/minimum** — comparison scan
7. **Combined calculation** — two-step problem (e.g., find ratio, then apply percentage)

**GATE Example (GATE 2021 GA Pattern):** A table shows production in 5 successive years. Questions asked: (a) In which year was production highest? (b) What was the average production? (c) By what % did production increase from year 1 to year 3?

#### Data Sufficiency Questions

Sometimes GATE asks whether given data is sufficient. Check:
1. Is each statement independently sufficient?
2. Are both statements together sufficient?
3. Is additional information needed?

**Common trap:** Answering that data is insufficient when one statement alone is actually enough, or vice versa.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
