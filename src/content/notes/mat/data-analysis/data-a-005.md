---
exam: mat
examName: MAT (Management Aptitude Test)
subject: dilr
subjectName: Data Interpretation & Logical Reasoning
topic: data-a-005
topicName: Line Graphs & Trend Analysis
weight: 3
country: india
generated: "2026-03-25T17:00:00"
diagramPrompt: A dual-axis line chart showing monthly temperature (°C) and rainfall (mm) for a city across 12 months, with two distinct lines for each metric, styled as a typical MAT exam DI passage requiring trend interpretation and extrapolation.
---

# Line Graphs & Trend Analysis

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A line graph displays data points connected by straight lines, showing how a value changes over time (or across ordered categories). Multiple lines on the same graph allow comparison of trends. Line graphs are powerful for spotting patterns — increases, decreases, plateaus, cycles, and turning points — often at a glance.

**What this topic covers in MAT:**
- Reading single and multiple line graphs on the same axes
- Identifying trends: upward, downward, stable, fluctuating
- Calculating rate of change (slope) between two points
- Interpolating and extrapolating values between or beyond given data points
- Understanding dual-axis line graphs (two different scales on left and right Y-axes)

**Key formulas and techniques:**
- Slope (rate of change) = (Change in Y) / (Change in X)
- Average rate of change = (Y₂ − Y₁) / (X₂ − X₁) over the entire period
- Percentage change = ((Y₂ − Y₁) / Y₁) × 100
- Simple moving average = (Sum of consecutive n values) / n
- Linear interpolation: estimate Y at X between two known points using proportion

**⚡ MAT exam tips:**
- In a line graph with multiple lines, always check which line corresponds to which Y-axis scale, especially in dual-axis graphs. The scales can be very different.
- When asked to "estimate" a value between two data points, use linear interpolation: if X=3 gives Y=30 and X=7 gives Y=70, then at X=5, Y=50 (straight line assumption).
- Extrapolation (beyond data range) is less reliable — MAT usually asks for interpolation.
- Watch for a broken Y-axis (often shown with a zig-zag at the bottom). This means the scale doesn't start at 0, exaggerating small changes.
- Time target: 4–5 minutes per line graph passage. Reading trends visually saves time over calculating every value.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Step-by-Step Problem-Solving Approach

**Step 1 — Identify the axes and scales**
What does the X-axis represent (time periods, quantities)? What does each Y-axis represent? In a dual-axis graph, note both scales carefully. The legend will tell you which line belongs to which axis.

**Step 2 — Identify the overall trend**
Before calculating anything, look at the overall direction of each line: generally increasing, decreasing, or flat? Are there any clear peaks or troughs?

**Step 3 — Read the question and identify the relevant segment**
Is the question asking about a specific period? A specific intersection point? The gap between two lines at a given time?

**Step 4 — Calculate using the appropriate method**
Use slope for rate questions, proportion for interpolation, and subtraction for gap/difference questions.

#### Worked Example — Single Line Graph

The following line graph shows the monthly sales (in ₹ lakhs) of a retail store for the first eight months of a year:

| Month | Sales (₹ lakh) |
|-------|----------------|
| Jan | 42 |
| Feb | 38 |
| Mar | 45 |
| Apr | 52 |
| May | 48 |
| Jun | 61 |
| Jul | 57 |
| Aug | 65 |

**Question 1:** Between which two consecutive months did sales increase the most?
- Jan→Feb: 38−42 = −4 (decrease)
- Feb→Mar: 45−38 = +7
- Mar→Apr: 52−45 = +7
- Apr→May: 48−52 = −4 (decrease)
- May→Jun: 61−48 = +13 ← **largest increase**
- Jun→Jul: 57−61 = −4 (decrease)
- Jul→Aug: 65−57 = +8

**Answer: May to June (+₹13 lakh)**

**Question 2:** What was the average monthly sales over this period?
- Sum = 42+38+45+52+48+61+57+65 = 408
- Average = 408 / 8 = **₹51 lakh per month**

**Question 3:** What was the percentage increase from January to August?
- Jan = 42; Aug = 65
- Increase = 65 − 42 = 23
- Percentage = (23 / 42) × 100 = 54.8% ≈ **55%**

**Question 4:** If the sales trend from March to August continues, what would be the approximate sales in September?
- March to August: the overall trend is upward. Using the overall average slope: (65−45)/(8−3) = 20/5 = 4 per month.
- September estimate: 65 + 4 = **₹69 lakh** (approximate, linear extrapolation)

#### Worked Example — Dual-Axis Line Graph

The following dual-axis line graph shows the temperature (°C) and rainfall (mm) in a city over six months:

| Month | Temperature (°C) | Rainfall (mm) |
|-------|-----------------|---------------|
| Jan | 18 | 12 |
| Feb | 22 | 8 |
| Mar | 28 | 15 |
| Apr | 33 | 45 |
| May | 36 | 72 |
| Jun | 34 | 60 |

Left Y-axis: Temperature (°C); Right Y-axis: Rainfall (mm)

**Question 1:** In which month was the temperature highest and in which was rainfall highest?**
- Temperature: May at 36°C (highest); January at 18°C (lowest)
- Rainfall: May at 72 mm (highest); February at 8 mm (lowest)

**Question 2:** What was the increase in temperature from January to April?
- Jan = 18°C; Apr = 33°C; Increase = 15°C

**Question 3:** The ratio of rainfall in June to rainfall in March is:
- June = 60 mm; March = 15 mm; Ratio = 60:15 = **4:1**

**Question 4:** If the temperature drops by 2°C per month after June following the same pattern as the first half of the year, what would be the approximate temperature in September?
- June = 34°C
- Assuming Jul = 32°C, Aug = 30°C, Sep = 28°C (subtract 2 per month)
- **Approximate: 28°C** (but this is speculative extrapolation)

**Question 5:** How many months saw rainfall above 50 mm?
- Apr (45 mm) — no; May (72 mm) — yes; Jun (60 mm) — yes. **2 months**

#### Common Traps in Line Graphs
- **Dual-axis deception**: Two lines with very different scales can look similar in amplitude even when one is changing much more dramatically in percentage terms. Always check the scale labels.
- **Assuming linearity between points**: A line graph only shows values at discrete points. Between two points, the actual data might have fluctuated differently. MAT usually expects you to assume a straight line between points.
- **Misreading the Y-axis origin**: A broken axis (shown as a zig-zag line at the base) means 0 is not at the bottom. A line going "down" might still be above zero in absolute terms.
- **Assuming equal time intervals**: The X-axis might have non-uniform intervals (e.g., some months missing). Check whether all intervals are equal.
- **Confusing the two axes in dual-axis graphs**: The left axis belongs to one series, the right to the other. Mixing them up gives completely wrong answers.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Advanced Line Graph Problem Types

**1. Multiple overlapping line graphs (3+ lines)**
Used to compare trends of multiple companies, cities, or products over the same time period. Questions may ask about crossings (when one overtook another), convergence (gaps narrowing), and relative performance at specific points.

**2. Year-over-year (YoY) comparison line graphs**
Two lines representing the same metric for two different years plotted against the same X-axis (months). Useful for identifying seasonality — for example, retail sales peaking in November-December every year.

**3. Cumulative frequency ogives**
A line graph showing cumulative totals. To find the median or quartiles, draw a horizontal line at n/2 and read where it crosses the curve. Less common in MAT but occasionally appears.

**4. Line graph with shading for regions**
Used to show confidence intervals or target zones. Values above or below a certain threshold are shaded differently. Questions ask whether the line stays within a range.

#### Time-Saving Calculation Techniques

- **Quick slope comparison**: To find the steepest segment, don't calculate — find the largest vertical drop or rise relative to horizontal distance by visual inspection. If two segments look similar, calculate only those two.
- **Intersection estimation**: Where two lines cross, both values equal each other. You can estimate by symmetry: if line A went from 20 to 50 while line B went from 60 to 40, they cross roughly where the gap is equal on both sides.
- **Average trend rate**: (Final value − Initial value) / Number of intervals = average change per interval. Useful for overall trend questions.
- **Percentage from graph reading**: If values are marked on the graph, use those directly. If not, estimate by position relative to axis labels. If the axis says 0 and 100 and the point is halfway, the value is 50.

#### Cross-Topic Integration
Line graphs frequently combine with tables showing the same data in numeric form. In such passages, use the line graph for trend/spatial questions and the table for exact value questions. Bar graphs alongside line graphs in the same set allow comparison between aggregate (bar) and sequential (line) representations.

MAT-specific patterns: approximately 3–4 questions per line graph passage are typical. Common question types in MAT: (a) "In which year/month did X reach its maximum/minimum?", (b) "What was the approximate growth from X to Y?", (c) "Which line was consistently above/below the other?", (d) "Estimate the value at [intervening point]." Master these four types and you'll handle most MAT line graph questions.

#### Practice with Realistic Data Set

The following line graph shows the quarterly results (in ₹ crores) for two companies, Surya Ltd and Tara Pvt Ltd, over four quarters of a financial year:

| Quarter | Surya Ltd | Tara Pvt Ltd |
|---------|-----------|--------------|
| Q1 | 45 | 30 |
| Q2 | 52 | 38 |
| Q3 | 48 | 42 |
| Q4 | 63 | 55 |

**Advanced questions to attempt:**
1. In which quarter was the gap between the two companies the smallest?
2. What was the average quarterly revenue for Tara Pvt Ltd?
3. If Surya Ltd's Q4 revenue represents a 25% increase over Q1, verify whether the chart data confirms this.
4. Using linear interpolation, estimate Surya Ltd's revenue in week 6 of Q2, assuming Q2 started in week 1 and the increase was linear.
5. If both companies maintain the same growth rate from Q3 to Q4 into the next quarter (Q5), what would Q5 revenue look like for each?
6. Which company showed more consistent performance (lower standard deviation of quarterly revenues)?

Work through each question without a calculator, using rough paper and estimation techniques.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
