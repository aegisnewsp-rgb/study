---
exam: nabe
examName: NABE (Pakistan)
subject: quant
subjectName: Subject Specific
topic: subjec-015
topicName: Topic 15
weight: 3
country: nabe
generated: "2026-03-25T17:00:00"
---

# Data Interpretation and Statistics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Data Interpretation and Statistics** — Key Facts for NABE (Pakistan)
- **Mean (Average)**: Sum of values / Number of values
- **Median**: Middle value when arranged in order (for odd n, it's middle; for even n, average of two middle)
- **Mode**: Most frequently occurring value
- **Range**: Maximum - Minimum value
- ⚡ **Exam tip**: For grouped data, Median = L + [(n/2 - cf)/f] × h (use class boundaries and frequency)

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Data Interpretation and Statistics — NABE (Pakistan) Study Guide

### Measures of Central Tendency

**Mean (Arithmetic Average)**:
```
Mean = (Sum of all observations) / (Number of observations)
```

**Example**: Marks of 5 students: 45, 55, 60, 70, 80
- Mean = (45+55+60+70+80)/5 = 310/5 = 62

**Median**:
- Arrange data in ascending/descending order
- If n is odd: Middle value
- If n is even: Average of two middle values

**Example (odd n)**: 3, 5, 7, 8, 9 → Median = 7
**Example (even n)**: 3, 5, 7, 8 → Median = (5+7)/2 = 6

**Mode**: The value that appears most frequently
- 2, 3, 4, 4, 4, 5, 6 → Mode = 4

### Measures of Dispersion

**Range**: Difference between maximum and minimum
- Range = Maximum - Minimum

**Variance**: Average of squared deviations from mean
```
Variance = Σ(xi - x̄)² / n   [for population]
Variance = Σ(xi - x̄)² / (n-1)   [for sample]
```

**Standard Deviation**: Square root of variance
```
σ = √Variance
```

### Bar Graphs, Pie Charts, and Tables

**Reading Bar Graphs**:
- Compare heights of bars
- Read values on axis carefully

**Reading Pie Charts**:
- Total = 360° (or 100%)
- Each category's angle = (Category value / Total) × 360°

**Reading Tables**:
- Read row and column headers
- Identify the cell intersection

### NABE Exam Pattern

Common question types:
1. Calculate mean/median/mode from data
2. Interpret bar graphs and pie charts
3. Find missing data given averages
4. Compare two datasets using statistical measures
5. Percentage calculations from charts

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Data Interpretation and Statistics — Comprehensive NABE (Pakistan) Notes

### Detailed Theory

#### 1. Mean — Detailed Analysis

**Direct Method**:
```
x̄ = Σx / n
```

**Assumed Mean Method** (for large data):
```
x̄ = A + Σfd / n
```
Where A = assumed mean, d = deviation from A, f = frequency

**Example with grouped data**:
| Class | Midpoint (x) | Frequency (f) | fd |
|-------|-------------|----------------|-----|
| 0-10 | 5 | 3 | -30 |
| 10-20 | 15 | 5 | -10 |
| 20-30 | 25 | 7 | 0 |
| 30-40 | 35 | 4 | 20 |
| 40-50 | 45 | 1 | 10 |

Using A = 25: Σfd = -10, n = 20
x̄ = 25 + (-10)/20 = 25 - 0.5 = 24.5

#### 2. Median — Complete Method

**For ungrouped data**:
- Step 1: Arrange in order
- Step 2: Find position = (n+1)/2 (for median position)

**For grouped data**:
```
Median = L + [(n/2 - cf)/f] × h
```
Where:
- L = Lower limit of median class
- n = Total frequency
- cf = Cumulative frequency before median class
- f = Frequency of median class
- h = Class width

**Finding Median Class**: The class where cumulative frequency ≥ n/2

#### 3. Mode — Complete Method

**For ungrouped data**: Simply find most frequent value.

**For grouped data (modal class)**:
```
Mode = L + [(f₁ - f₀)/(2f₁ - f₀ - f₂)] × h
```
Where:
- L = Lower limit of modal class
- f₁ = Frequency of modal class
- f₀ = Frequency before modal class
- f₂ = Frequency after modal class
- h = Class width

**Modal Class**: Class with highest frequency.

**Empirical Relation**: Mode ≈ 3 × Median - 2 × Mean

#### 4. Quartiles and Percentiles

**Quartiles divide data into 4 equal parts**:
- Q1 (25th percentile): 1/4 of data below
- Q2 (50th percentile): = Median
- Q3 (75th percentile): 3/4 of data below

**For ungrouped data**:
- Q1 position = (n+1)/4
- Q3 position = 3(n+1)/4

**Interquartile Range**: IQR = Q3 - Q1

**Box Plot**:
```
|---[  |  ]---|---
Min   Q1  Q2 Q3   Max
```

#### 5. Standard Deviation — Calculation

**Step-by-step for population**:
1. Find mean x̄
2. Find deviation xi - x̄ for each value
3. Square each deviation
4. Sum squared deviations: Σ(xi - x̄)²
5. Divide by n: Variance = Σ(xi - x̄)² / n
6. Standard deviation = √Variance

**Shortcut Formula**:
```
σ = √[(Σx²)/n - (Σx/n)²]
```

**Example**: Data: 4, 8, 6, 5, 3
- Σx = 26, n = 5
- Σx² = 16 + 64 + 36 + 25 + 9 = 150
- σ² = 150/5 - (26/5)² = 30 - 27.04 = 2.96
- σ = √2.96 ≈ 1.72

#### 6. Variance — Sample vs Population

**Sample Variance** (when data is a sample):
```
s² = Σ(xi - x̄)² / (n-1)
```

**Why n-1?** To get unbiased estimate of population variance.

**Standard Error**: s/√n (for comparing sample means)

#### 7. Coefficient of Variation

**For comparing variability of two datasets**:
```
CV = (Standard Deviation / Mean) × 100%
```

**Interpretation**:
- Lower CV → More consistent/stable data
- Higher CV → More variable/unstable data

**Example**: Dataset A: mean=50, σ=10, CV=20%
Dataset B: mean=100, σ=15, CV=15%
→ Dataset B is more consistent relative to its mean

#### 8. Data Interpretation — Charts and Graphs

**Pie Chart Calculations**:
- Total = 360° or 100%
- Each sector angle = (Category/Total) × 360°
- Each sector % = Category/Total × 100

**Bar Graph**:
- Read scale carefully
- Compare heights
- Look for trends

**Line Graph**:
- Shows trends over time
- Read y-axis carefully

**Tabular Data**:
- Row and column headers important
- Calculate percentages, ratios as needed

#### 9. Skewness and Kurtosis

**Skewness** (measure of asymmetry):
- Positive skew: Tail to the right (mean > median)
- Negative skew: Tail to the left (mean < median)
- Symmetric: Mean ≈ Median ≈ Mode

**Kurtosis** (measure of peakedness):
- Mesokurtic: Normal distribution
- Leptokurtic: More peaked than normal
- Platykurtic: Less peaked than normal

#### 10. Common Mistakes to Avoid

1. **Mode**: May not exist or may be multiple modes
2. **Mean**: Affected by extreme values (outliers)
3. **Median**: Better measure when outliers present
4. **Range**: Only considers two values
5. **Units**: Ensure consistent units in calculations

### Practice Questions for NABE

1. Find mean, median, and mode of: 12, 15, 18, 22, 22, 25, 30
2. The following table shows marks distribution. Find mean.
   | Marks | 0-20 | 20-40 | 40-60 | 60-80 | 80-100 |
   | Freq  | 5    | 10    | 25    | 12    | 8     |
3. Calculate standard deviation: 6, 8, 10, 12, 14
4. If mean = 50 and SD = 8, what percentage of data falls between 34 and 66?
5. From a pie chart showing a school's budget of Rs. 360,000, if 25% goes to salaries, how many degrees represent this?

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
