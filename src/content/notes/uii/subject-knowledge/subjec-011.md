---
exam: uii
examName: UI Entrance (Indonesia)
subject: quant
subjectName: Subject Knowledge
topic: subjec-011
topicName: Statistics & Data Interpretation
weight: 3
country: uii
generated: "2026-03-25T17:00:00"
diagramPrompt: Bar chart showing distribution of student exam scores grouped in 10-point intervals (0-10, 11-20, etc.) with mean line, median marker, and modal class highlighted
---

# Statistics & Data Interpretation

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Measures of Central Tendency:**

- **Mean (average):** sum of all values divided by number of values. For data 4, 7, 9, 12, 18: mean = (4+7+9+12+18)/5 = 50/5 = 10.
- **Median:** the middle value when data is arranged in order. For an odd number of values, it's the middle one. For an even number, it's the average of the two middle values.
- **Mode:** the value that appears most frequently. A dataset may have no mode (all values unique), one mode (unimodal), or two modes (bimodal).

**Range:** difference between largest and smallest value. Range of {4, 7, 9, 12, 18} = 18 − 4 = 14.

⚡ **Exam tip:** The mean is affected by extreme values (outliers), while the median is more robust. If salaries are 3, 4, 5, 6, 100 (millions), the median of 5 is more representative than the mean of 23.6.

⚡ **Exam tip:** For grouped data, the median lies in the median class: L + [(n/2 − c) / f] × w, where L = lower boundary of median class, c = cumulative frequency before median class, f = frequency of median class, w = class width.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Mean, Median, Mode — When to Use Each**

The mean is best for symmetric distributions without outliers. The median is preferred for skewed distributions or data with extreme values. The mode is useful for categorical data (most common response: "strongly agree") but less useful for continuous numerical data where values rarely repeat.

**Calculating the Mean from Frequency Tables**

For ungrouped data: x̄ = Σfx / Σf, where f is frequency.

| Value (x) | Frequency (f) | f×x |
|-----------|---------------|-----|
| 3 | 4 | 12 |
| 5 | 7 | 35 |
| 8 | 3 | 24 |
| **Total** | **14** | **71** |

Mean = 71/14 ≈ 5.07

**Grouped Data — Finding the Modal Class**

For grouped data, the mode lies in the class with highest frequency. The exact mode cannot be found, only estimated: Mode ≈ L + [(f₁ − f₀) / ((f₁ − f₀) + (f₁ − f₂))] × w, where L = lower boundary of modal class, f₁ = frequency of modal class, f₀ = frequency before, f₂ = frequency after, w = class width.

**Variance and Standard Deviation**

Variance measures the spread of data around the mean. For a dataset: σ² = Σ(x − x̄)² / n for population variance, or use n−1 for sample variance (Bessel's correction).

Easier computational formula: σ² = (Σx² / n) − x̄²

For data {2, 4, 6, 8}: Σx = 20, x̄ = 5, Σx² = 4+16+36+64 = 120. σ² = 120/4 − 25 = 30 − 25 = 5. σ = √5 ≈ 2.24.

**Quartiles and the Interquartile Range**

When data is ordered: Q1 is the 25th percentile, Q2 is the median (50th), Q3 is the 75th percentile. The interquartile range (IQR) = Q3 − Q1.

For the dataset {3, 5, 7, 9, 11, 13, 15}: Q1 = 5, median (Q2) = 9, Q3 = 13. IQR = 13 − 5 = 8.

Outliers are often defined as values below Q1 − 1.5×IQR or above Q3 + 1.5×IQR.

**Common Mistakes to Avoid:**

| Mistake | Correct approach |
|---------|-----------------|
| Confusing mean with median | Mean uses all values; median is the middle value |
| Forgetting to multiply frequency × value in frequency tables | Always create the f×x column |
| Using class boundaries instead of midpoints for grouped mean | Class midpoint = (lower + upper) / 2 |
| Reporting standard deviation as variance | Variance is σ² (units²); standard deviation is σ (same units as data) |
| Not ordering data before finding median | Always sort first |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**The Effect of Adding Data Points on Statistical Measures**

Adding a new value changes the statistics. If we add 20 to {2, 4, 6, 8} (mean = 5): new sum = 20+20 = 40, new n = 5, new mean = 8. The median changes from 5 to 6 (arranged: 2, 4, 6, 8, 20 → median is 6).

If we add a value equal to the current mean, the mean stays unchanged. Adding the value 5 to {2, 4, 6, 8}: original sum = 20, new sum = 25, n = 5, new mean = 25/5 = 5. Correct.

**Combined Mean**

If two groups have means x̄₁ and x̄₂ with sizes n₁ and n₂, the combined mean is: x̄ = (n₁x̄₁ + n₂x̄₂) / (n₁ + n₂).

Class 1 (30 students) has mean 72, Class 2 (20 students) has mean 80. Combined mean = (30×72 + 20×80) / 50 = (2160 + 1600) / 50 = 3760/50 = 75.2.

**Skewness**

A distribution is symmetric if mean ≈ median. Negatively skewed (left-skewed): mean < median (tail extends left). Positively skewed (right-skewed): mean > median (tail extends right).

Income distributions are typically positively skewed — a few high earners pull the mean up while most people earn below the mean. The median is often a better measure of "typical" income.

**Standard Error and Confidence Intervals**

For a sample of size n drawn from a population with standard deviation σ, the standard error of the mean is σ/√n. If σ = 15 and n = 100, SE = 15/10 = 1.5. A 95% confidence interval for the population mean is x̄ ± 1.96 × SE.

**Coefficient of Variation**

CV = (σ / x̄) × 100%. This normalises the standard deviation, allowing comparison of variability between datasets with different scales. Investment A: mean = 50, SD = 5, CV = 10%. Investment B: mean = 100, SD = 7, CV = 7%. Despite higher absolute volatility, B has relatively lower risk.

**Normal Distribution Basics**

In a normal distribution: approximately 68% of data falls within 1 SD of the mean, 95% within 2 SD, 99.7% within 3 SD. If exam scores are normally distributed with mean 65 and SD 10, about 68% of students score between 55 and 75.

Z-score = (x − x̄) / σ. A score of 80 has z-score = (80 − 65)/10 = 1.5, meaning it's 1.5 standard deviations above the mean.

**Historical Context**

The word "statistics" comes from the Latin statisticum (matters of the state). John Graunt (1662) analysed London death records, pioneering demography. Carl Friedrich Gauss (1777-1855) developed the normal distribution curve. Francis Galton (1822-1911) coined "regression to the mean" and developed standard deviation. The phrase "lies, damned lies, and statistics" was popularised by Mark Twain (attributing it to British Prime Minister Benjamin Disraeli).

**Exam Pattern Analysis**

UI statistics questions commonly:
1. Calculate mean, median, or mode from raw data or frequency tables
2. Compare two datasets using mean and range (or standard deviation)
3. Find the median class and compute median from grouped data
4. Use statistical measures in word problems (average speed, weighted averages)
5. Interpret charts and graphs requiring statistical calculations

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
