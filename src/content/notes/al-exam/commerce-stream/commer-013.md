---
exam: al-exam
examName: A/L Examination (Sri Lanka)
subject: quant
subjectName: Commerce Stream
topic: commer-013
topicName: Statistics for Business
weight: 3
country: al
diagramPrompt: ""
generated: "2026-03-25T17:00:00"
---

# Statistics for Business

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Statistics for Business** — Key Facts for Sri Lanka A/L Examination

**Measures of Central Tendency**:

| Measure | Formula | Best Use |
|---------|---------|----------|
| Mean | Sum of values / n | Symmetric data, no outliers |
| Median | Middle value (after sorting) | Skewed data, ordinal data |
| Mode | Most frequent value | Categorical data, peak value |

**Dispersion Measures**:
| Measure | Formula | What it measures |
|---------|---------|------------------|
| Range | Max - Min | Simplest, ignores distribution |
| Variance | Σ(x-x̄)²/(n-1) | Average squared deviation |
| Standard Deviation | √Variance | Same unit as data |
| Coefficient of Variation | (SD/Mean)×100 | Relative variability |

⚡ **A/L Exam Tip**: When a Sri Lankan business question mentions "average," always ask: mean, median, or mode? They can give very different answers with skewed data!

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Statistics for Business** — Detailed Study Guide

#### Data Classification and Presentation

**Types of Data**:

| Classification | Type | Example |
|---------------|------|---------|
| By source | Primary | Survey results from Sri Lankan consumers |
| By source | Secondary | Census data, past exam results |
| By nature | Quantitative | Monthly sales in Rs. |
| By nature | Qualitative | Product type (textile, food) |
| By time | Time series | Tea export prices 2020-2024 |
| By time | Cross-sectional | Sales of different shops on one day |

**Classifying Raw Data**:
```
Raw Data: Randomly recorded observations
Frequency Distribution: Summary table showing frequencies

Steps:
1. Find range = Maximum - Minimum
2. Decide number of classes (usually 5-15)
3. Class width = Range / Number of classes
4. Set class boundaries (avoid gaps)
5. Tally and count frequencies
```

**Example - Sri Lankan Business Scenario**:
```
Monthly sales (in Rs. '000) for 40 small businesses:
45, 52, 38, 61, 55, 47, 63, 58, 42, 49
55, 67, 72, 48, 53, 60, 44, 56, 65, 51
58, 63, 71, 49, 54, 46, 62, 57, 43, 50
59, 64, 69, 53, 47, 56, 61, 54, 48, 60

Range = 72 - 38 = 34
Classes (6 classes): 36-41, 42-47, 48-53, 54-59, 60-65, 66-71, 72-77
Width = 34/6 ≈ 6 (use width 6)

Class     | Tally           | Frequency
----------|-----------------|----------
36 - 41   | I               | 1
42 - 47   | IIII I          | 6
48 - 53   | IIII IIII       | 9
54 - 59   | IIII IIII I     | 11
60 - 65   | IIII IIII       | 9
66 - 71   | II              | 3
72 - 77   | I               | 1
          |                 | ---
          |                 | 40
```

**Graphical Presentation**:
| Chart | Use | Sri Lankan Example |
|-------|-----|-------------------|
| Histogram | Continuous data frequency | Distribution of tea export weights |
| Frequency Polygon | Comparing distributions | Monthly sales comparison |
| Bar Chart | Categorical data | Exports by province |
| Pie Chart | Parts of a whole | Sri Lanka export composition |
| Ogive | Cumulative frequency | Below/above threshold analysis |
| Line Chart | Time series | Colombo Stock Exchange index over 5 years |

#### Measures of Central Tendency

**Mean (Arithmetic Average)**:
```
Ungrouped: x̄ = Σx / n
Grouped: x̄ = Σ(f×x) / Σf

Where x = class midpoint, f = frequency
```

**Example (Ungrouped)**:
```
Monthly salary (Rs. '000) of 10 employees:
40, 45, 50, 55, 60, 65, 70, 80, 120, 200
Mean = (40+45+50+55+60+65+70+80+120+200) / 10 = 785/10 = Rs. 78,500
```

**Example (Grouped)**:
```
Class (Rs.'000) | Midpoint (x) | Freq (f) | f×x
----------------|--------------|----------|------
30 - 39         | 34.5         | 5        | 172.5
40 - 49         | 44.5         | 12       | 534.0
50 - 59         | 54.5         | 18       | 981.0
60 - 69         | 64.5         | 10       | 645.0
70 - 79         | 74.5         | 5        | 372.5
                |              | Σf = 50 | Σfx = 2,705

Mean = 2,705 / 50 = 54.1 (Rs. '000) = Rs. 54,100
```

**Median (Middle Value)**:
```
Ungrouped: Arrange data, find middle position
If n is odd: Median = value at position (n+1)/2
If n is even: Median = average of values at n/2 and n/2+1

Grouped: Median = L + [(n/2 - cummf) / f] × w

Where:
L = Lower boundary of median class
cummf = Cumulative frequency before median class
f = Frequency of median class
w = Class width
```

**Example (Grouped)**:
```
Same distribution, find median:
Σf = 50, so n/2 = 25th value
Cumulative frequencies: 5, 17, 35, 45, 50
Median class = 50 - 59 (cumulative 17 to 35)

L = 49.5, cummf = 17, f = 18, w = 10
Median = 49.5 + [(25 - 17) / 18] × 10
        = 49.5 + (8/18) × 10
        = 49.5 + 4.44 = Rs. 53,940
```

**Mode**:
```
Ungrouped: Most frequently occurring value

Grouped: Mode = L + [(f1 - f0) / (2f1 - f0 - f2)] × w

Where:
L = Lower boundary of modal class
f1 = Frequency of modal class
f0 = Frequency before modal class
f2 = Frequency after modal class
w = Class width
```

⚡ **A/L Key**: The mode formula is complex — for A/L, students can identify the modal class (highest frequency) and estimate from there. Exact calculation often not required in basic questions.

**Relationship Between Mean, Median, Mode**:
| Distribution | Relationship | Sri Lankan Example |
|-------------|---------------|-------------------|
| Symmetric/Normal | Mean ≈ Median ≈ Mode | Tea leaf weights |
| Positively skewed (right) | Mode < Median < Mean | Income distribution |
| Negatively skewed (left) | Mean < Median < Mode | Failure rates |

#### Measures of Dispersion

**Range**:
```
Range = Maximum Value - Minimum Value
```

**Variance and Standard Deviation**:
```
Population Variance: σ² = Σ(x-μ)² / N
Sample Variance: s² = Σ(x-x̄)² / (n-1)
Standard Deviation: σ or s = √Variance

Shortcut formula for ungrouped data:
s² = [Σx² - (Σx)²/n] / (n-1)
```

**Example**:
```
Sales (Rs. '000) for 5 shops: 50, 55, 60, 65, 70
Mean = 300/5 = 60

Deviations: -10, -5, 0, +5, +10
Squared deviations: 100, 25, 0, 25, 100
Sum = 250

s² = 250 / (5-1) = 62.5
s = √62.5 = 7.91 (Rs. '000)

Interpretation: On average, sales deviate from mean by Rs. 7,910
```

**Coefficient of Variation (CV)**:
```
CV = (Standard Deviation / Mean) × 100

Used to compare variability of different datasets
Lower CV = More consistent/stable
Higher CV = More variable/risky
```

**Example**:
```
Shop A: Mean = Rs. 500,000, SD = Rs. 50,000 → CV = 10%
Shop B: Mean = Rs. 200,000, SD = Rs. 40,000 → CV = 20%
Shop A is more consistent despite larger absolute variation
```

#### Probability

**Basic Probability Rules**:
```
P(A) = Favourable outcomes / Total outcomes
P(A) = 0 to 1 (0 = impossible, 1 = certain)

Addition Rule: P(A or B) = P(A) + P(B) - P(A and B)
Multiplication Rule: P(A and B) = P(A) × P(B) (independent events)
```

**Example - Sri Lankan Business Application**:
```
A garment factory has two production lines:
- Line A produces 60% of output, 2% defective
- Line B produces 40% of output, 5% defective

P(Defective) = P(A)×P(Defective|A) + P(B)×P(Defective|B)
             = (0.60 × 0.02) + (0.40 × 0.05)
             = 0.012 + 0.020 = 0.032 = 3.2%
```

**Expected Value**:
```
Expected Value = Σ(P × Outcome)
E(X) = Σ(xi × Pi)

Used for decision-making under uncertainty
```

**Example**:
```
A Sri Lankan investor is evaluating a business venture:
Outcome      | Probability | Profit (Rs.)
-------------|-------------|--------------
High demand  | 0.25        | 500,000
Medium demand| 0.50        | 150,000
Low demand   | 0.25        | -100,000

EV = (0.25 × 500,000) + (0.50 × 150,000) + (0.25 × -100,000)
   = 125,000 + 75,000 - 25,000 = Rs. 175,000

Decision: Positive EV suggests the venture is profitable on average
```

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Statistics for Business** — Complete Notes for A/L Sri Lanka

#### Time Series Analysis

**Components of Time Series**:
| Component | Description | Sri Lankan Example |
|-----------|-------------|-------------------|
| Trend (T) | Long-term direction | Gradual increase in Sri Lanka tea exports |
| Seasonal (S) | Regular patterns within a year | Higher clothing sales Dec-Jan |
| Cyclical (C) | Business cycle fluctuations | GDP growth cycles 5-7 years |
| Irregular/Random (I) | Unpredictable variations | Effect of 2019 Easter attacks on tourism |

**Additive Model**: Y = T + S + C + I
**Multiplicative Model**: Y = T × S × C × I

**Moving Averages** (for trend extraction):
```
3-Period Moving Average:
Period 1-3 Average → centres at period 2
Period 2-4 Average → centres at period 3
And so on...

Centered Moving Average (for even periods):
For 4-period MA, must center by averaging two successive MAs
```

**Example**:
```
Year | Sales (Rs.M) | 3-Period MA
-----|--------------|-------------
2020 | 45           | -
2021 | 52           | (45+52+58)/3 = 51.7
2022 | 58           | (52+58+63)/3 = 57.7
2023 | 63           | (58+63+55)/3 = 58.7
2024 | 55           | (63+55+70)/3 = 62.7
2025 | 70           | (55+70+75)/3 = 66.7
2026 | 75           | -
```

**Seasonal Variation** (using multiplicative model):
```
Step 1: Calculate trend (moving average)
Step 2: Calculate Ratio-to-Moving-Average = Actual / Trend
Step 3: Average the ratios for each season (removes irregular)
Step 4: Adjust so seasonal indices average to 1 (or 100)

Seasonal Index > 1: Above trend in that season
Seasonal Index < 1: Below trend in that season
```

**Example - Quarterly Tea Exports**:
```
Quarter | 2023 Ratio | 2024 Ratio | 2025 Ratio | Average | Seasonal Index
--------|------------|------------|------------|---------|--------------
Q1      | 0.85       | 0.88       | 0.90       | 0.877   | 0.88
Q2      | 0.95       | 0.97       | 0.94       | 0.953   | 0.95
Q3      | 1.05       | 1.08       | 1.06       | 1.063   | 1.07
Q4      | 1.15       | 1.12       | 1.18       | 1.150   | 1.15

Interpretation: Q4 shows highest tea export demand (harvest season)
Q1 shows lowest (off-peak period)
```

#### Correlation and Regression

**Scatter Diagram**:
| Pattern | Correlation | Sri Lankan Example |
|---------|------------|-------------------|
| Upward sloping | Positive | Advertising spend vs. sales |
| Downward sloping | Negative | Debt ratio vs. profitability |
| No pattern | Zero | Unrelated variables |
| Perfect line | Perfect correlation | Rare in real data |

**Karl Pearson's Coefficient of Correlation (r)**:
```
r = Σ(x-x̄)(y-ȳ) / √[Σ(x-x̄)² × Σ(y-ȳ)²]
r = [nΣxy - ΣxΣy] / √[(nΣx² - (Σx)²)(nΣy² - (Σy)²)]
```

**Interpretation**:
| r value | Interpretation |
|---------|---------------|
| +1.0 | Perfect positive correlation |
| +0.7 to +0.99 | Strong positive |
| +0.4 to +0.69 | Moderate positive |
| +0.1 to +0.39 | Weak positive |
| 0 | No correlation |
| -0.1 to -0.39 | Weak negative |
| -0.4 to -0.69 | Moderate negative |
| -0.7 to -0.99 | Strong negative |
| -1.0 | Perfect negative correlation |

**Example - Sri Lankan Business**:
```
Advertising (Rs.M) vs. Sales (Rs.M):
x = Advertising: 10, 15, 20, 25, 30
y = Sales: 50, 65, 70, 85, 100

n = 5
Σx = 100, Σy = 370, Σxy = 8,000, Σx² = 2,250, Σy² = 29,450

r = [5(8000) - 100(370)] / √[(5×2250 - 10000)(5×29450 - 136900)]
  = [40000 - 37000] / √[(11250-10000)(147250-136900)]
  = 3000 / √[1250 × 10350]
  = 3000 / √12937500
  = 3000 / 3596.87 = 0.834 (Strong positive correlation)
```

**Linear Regression**:
```
Regression Line: y = a + bx

b = [nΣxy - ΣxΣy] / [nΣx² - (Σx)²]
a = ȳ - b × x̄

Where b = slope (change in y for each unit change in x)
a = intercept (y value when x = 0)
```

**Example**:
```
Using same data:
b = [5(8000) - 100(370)] / [5(2250) - 10000]
  = 3000 / 1250 = 2.4

a = 370/5 - 2.4 × 100/5 = 74 - 2.4 × 20 = 74 - 48 = 26

Regression equation: y = 26 + 2.4x

Interpretation: For every Rs. 1 million increase in advertising,
sales increase by Rs. 2.4 million. With no advertising, base sales = Rs. 26M.
```

⚡ **A/L Exam Tip**: In A/L questions, regression is often tested with prediction: "If advertising is Rs. 35 million, predict sales." Sub x=35 into y = a + bx.

#### Index Numbers

**Simple Index**:
```
Price Index (Simple) = (Pn / P0) × 100
Quantity Index (Simple) = (Qn / Q0) × 100
```

**Weighted Index Numbers**:

**Laspeyres Index** (uses base year quantities — common):
```
PL = Σ(Pn × Q0) / Σ(P0 × Q0) × 100

Advantages: Uses fixed weights, easier to compute
Disadvantages: May overstate price changes (doesn't reflect substitution)
```

**Paasche Index** (uses current year quantities):
```
PP = Σ(Pn × Qn) / Σ(P0 × Qn) × 100

Advantages: Reflects current consumption patterns
Disadvantages: Weights change each period, harder to compare
```

**Fisher's Ideal Index** (geometric mean of Laspeyres and Paasche):
```
Fisher = √(Laspeyres × Paasche)

Satisfies factor reversal test and time reversal test
Theoretically ideal but rarely used in practice
```

**Example - Sri Lanka Tea Export Prices**:
```
Product  | Base Year         | Current Year
         | Price (Rs./kg) Qty (M kg) | Price (Rs./kg) Qty (M kg)
----------|------------------|--------------------
Tea A    | 400       50     | 500        55
Tea B    | 300       80     | 350        90
Tea C    | 200       40     | 280        35

PL = [(500×50) + (350×80) + (280×40)] / [(400×50) + (300×80) + (200×40)] × 100
   = [25000 + 28000 + 11200] / [20000 + 24000 + 8000] × 100
   = 64200 / 52000 × 100 = 123.46

PP = [(500×55) + (350×90) + (280×35)] / [(400×55) + (300×90) + (200×35)] × 100
   = [27500 + 31500 + 9800] / [22000 + 27000 + 7000] × 100
   = 68800 / 56000 × 100 = 122.86

Fisher = √(123.46 × 122.86) = √15173.8 = 123.18
```

**DeFLation** (using index numbers):
```
Real Value = Nominal Value / Price Index × 100

Used to convert nominal GDP to real GDP
Removes inflation effect
```

**Example**:
```
Sri Lanka GDP:
Nominal GDP 2024: Rs. 25 trillion
Price Index 2024 (base 2015): 180

Real GDP (2015 prices) = 25,000 / 180 × 100 = Rs. 13.89 trillion
This allows comparison with GDP in 2015 base year prices
```

⚡ **A/L Key**: The difference between Laspeyres and Paasche and knowing when to use each is a classic A/L question. If weights are not changing significantly (or if you're comparing many periods), Laspeyres is typically used. If consumption patterns change significantly, Paasche may be preferred.

#### Normal Distribution

**Properties**:
- Bell-shaped, symmetric about the mean
- Mean = Median = Mode
- Total area under curve = 1 (or 100%)
- 68% of values within ±1 SD
- 95% of values within ±2 SD
- 99.7% of values within ±3 SD

**Standard Normal Distribution**:
```
Z = (X - μ) / σ

Where X = value, μ = mean, σ = standard deviation
Z score tells you how many standard deviations from mean
```

**Example**:
```
Monthly revenue of Sri Lankan garment exporters:
Mean = Rs. 50 million, SD = Rs. 8 million

Find probability revenue exceeds Rs. 60 million:
Z = (60 - 50) / 8 = 10/8 = 1.25

From Z table: P(Z > 1.25) = 0.1056
So 10.56% probability revenue exceeds Rs. 60 million

Find probability revenue between Rs. 40M and Rs. 60M:
Z for 40M = (40-50)/8 = -1.25
Z for 60M = 1.25
P(-1.25 < Z < 1.25) = 1 - 2(0.1056) = 0.7888
So 78.88% probability revenue is in this range
```

⚡ **A/L Exam Tip**: Z-table values are often provided in the A/L exam paper. Always convert to Z-score first, then use the table. The sign of Z matters — positive Z looks up in positive column, negative Z uses symmetry.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
