---
exam: waec
examName: WAEC WASSCE
subject: mathematics
subjectName: Mathematics
topic: math-15
topicName: "Statistics: Mean, Median, Mode"
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.624720"
diagramPrompt: "Mathematical diagram showing Statistics: Mean, Median, Mode concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"
---

# Statistics: Mean, Median, Mode

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Statistics** is the science of collecting, organising, analysing, and interpreting data to draw conclusions.

**Measures of Central Tendency** (averages — where data clusters):

**Mean ($\bar{x}$):** The arithmetic average.
$$\bar{x} = \frac{\sum x}{n} = \frac{x_1 + x_2 + ... + x_n}{n}$$

**Median:** The middle value when data is arranged in order. If two middle values, average them.

**Mode:** The most frequently occurring value. A dataset can have no mode, one mode (unimodal), or two modes (bimodal).

**Example**: Data: 3, 5, 7, 7, 9, 11, 13
- Mean = (3+5+7+7+9+11+13)/7 = 55/7 ≈ 7.86
- Median = 4th value = 7
- Mode = 7 (appears twice)

**Range** (measure of spread):
$$\text{Range} = \text{maximum} - \text{minimum}$$

⚡ **WAEC Tip:** The mean is affected by extreme values (outliers). The median is more robust — a good choice when data has outliers. The mode is useful for categorical data.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Mean for Grouped Data:**

For data in a frequency table:
$$\bar{x} = \frac{\sum fx}{\sum f}$$

*Problem*: Find mean of:

| Score (x) | Frequency (f) | fx |
|-----------|---------------|-----|
| 2 | 3 | 6 |
| 4 | 5 | 20 |
| 6 | 2 | 12 |
| 8 | 1 | 8 |

$$\bar{x} = \frac{6 + 20 + 12 + 8}{3+5+2+1} = \frac{46}{11} \approx 4.18$$

**Median for Grouped Data:**

*Problem*: Find median of 17, 22, 25, 25, 28, 30, 33

$n = 7$ (odd)
Median position = $\frac{n+1}{2} = \frac{8}{2} = 4$
4th value = 25

*Problem*: Find median of 17, 22, 25, 25, 28, 30

$n = 6$ (even)
Median = average of 3rd and 4th values = $(25 + 25)/2 = 25$

**Finding Median from Cumulative Frequency:**

*Problem*:

| Class | Frequency | Cumulative |
|-------|-----------|------------|
| 0-9 | 5 | 5 |
| 10-19 | 8 | 13 |
| 20-29 | 12 | 25 |
| 30-39 | 7 | 32 |
| 40-49 | 3 | 35 |

$n = 35$
Median position = $\frac{35+1}{2} = 18$

18 falls in cumulative frequency 25 (the 20-29 class).

Median class = 20-29
Lower boundary = 19.5, class width = 10, frequency = 12, cumulative before = 13

$$\text{Median} = L + \left(\frac{\frac{n}{2} - c}{f}\right)w = 19.5 + \left(\frac{17.5 - 13}{12}\right)10 = 19.5 + \frac{45}{12} \approx 23.25$$

**Variance and Standard Deviation:**

Variance ($\sigma^2$ or $s^2$):
$$\sigma^2 = \frac{\sum (x - \bar{x})^2}{n} \quad \text{(population)}$$
$$s^2 = \frac{\sum (x - \bar{x})^2}{n-1} \quad \text{(sample)}$$

Standard deviation ($\sigma$ or $s$):
$$\sigma = \sqrt{\frac{\sum (x - \bar{x})^2}{n}}$$

*Problem*: Find standard deviation of 4, 6, 8, 10, 12.

Mean = $\frac{40}{5} = 8$

| $x$ | $x - \bar{x}$ | $(x - \bar{x})^2$ |
|-----|---------------|-------------------|
| 4 | -4 | 16 |
| 6 | -2 | 4 |
| 8 | 0 | 0 |
| 10 | 2 | 4 |
| 12 | 4 | 16 |

$$\sigma^2 = \frac{16+4+0+4+16}{5} = \frac{40}{5} = 8$$
$$\sigma = \sqrt{8} \approx 2.83$$

⚡ **Common Student Mistakes:** Using $n$ instead of $n-1$ for sample variance. Forgetting to square the deviations from mean. Confusing variance with standard deviation.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough preparation.

**Variance Using the Computational Formula:**

$$\sigma^2 = \frac{\sum x^2}{n} - \bar{x}^2$$

*Problem*: Find variance of 4, 6, 8, 10, 12.
$$\bar{x} = 8$$
$$\sum x^2 = 16 + 36 + 64 + 100 + 144 = 360$$
$$\sigma^2 = \frac{360}{5} - 64 = 72 - 64 = 8 \checkmark$$

**Variance for Grouped Data:**

$$\sigma^2 = \frac{\sum f(x - \bar{x})^2}{\sum f}$$

*Problem*:

| $x$ | $f$ | $fx$ | $fx^2$ |
|-----|-----|------|--------|
| 10 | 2 | 20 | 200 |
| 20 | 5 | 100 | 2000 |
| 30 | 8 | 240 | 7200 |
| 40 | 3 | 120 | 4800 |
| Total | 18 | 480 | 14200 |

$$\bar{x} = \frac{480}{18} \approx 26.67$$
$$\sigma^2 = \frac{14200}{18} - (26.67)^2 = 788.89 - 711.11 = 77.78$$
$$\sigma \approx 8.82$$

**Quartiles and IQR:**

For ungrouped data:
- $Q_1$ (lower quartile) = 25th percentile
- $Q_2$ (median) = 50th percentile
- $Q_3$ (upper quartile) = 75th percentile
- IQR = $Q_3 - Q_1$ (interquartile range)

*Problem*: Find quartiles of 3, 5, 7, 8, 9, 11, 13, 15, 18, 20
$n = 10$
Median = $(9+11)/2 = 10$

Lower half (first 5): 3, 5, 7, 8, 9 → $Q_1 = 7$
Upper half (last 5): 11, 13, 15, 18, 20 → $Q_3 = 15$

IQR = $15 - 7 = 8$

**Box-and-Whisker Plot:**
Shows $Q_1$, median, $Q_3$, min, max.

*Problem*:
Min = 3, $Q_1 = 7$, Median = 10, $Q_3 = 15$, Max = 20

```
|-----|-----:|-----:|----|
3     7     10    15    20
```

**Normal Distribution:**

A normal distribution is symmetric about the mean with:
- 68% of data within 1σ of mean
- 95% within 2σ
- 99.7% within 3σ

Z-score: $z = \frac{x - \mu}{\sigma}$

*Problem*: Scores are normally distributed with mean 70 and standard deviation 10. What percentage score between 60 and 80?

$z_1 = (60-70)/10 = -1$
$z_2 = (80-70)/10 = 1$

From z-table: Between z = -1 and z = 1 = 68.27%

**Skewness:**

- **Negative (left) skew**: Mean < Median < Mode; tail extends left
- **Zero skew**: Mean = Median = Mode; symmetric
- **Positive (right) skew**: Mode < Median < Mean; tail extends right

Pearson's Coefficient of Skewness:
$$Sk = \frac{3(\bar{x} - \text{Median})}{s}$$

**Bivariate Data and Correlation:**

**Scatter Diagram**: Plot points $(x, y)$ to see relationship.

**Pearson's Correlation Coefficient ($r$):**
$$r = \frac{\sum (x - \bar{x})(y - \bar{y})}{\sqrt{\sum (x - \bar{x})^2 \cdot \sum (y - \bar{y})^2}}$$

Or: $r = \frac{n\sum xy - \sum x \sum y}{\sqrt{[n\sum x^2 - (\sum x)^2][n\sum y^2 - (\sum y)^2]}}$

Values of $r$:
- $+1$: Perfect positive correlation
- $0$ to $+1$: Positive correlation
- $0$: No correlation
- $-1$ to $0$: Negative correlation
- $-1$: Perfect negative correlation

**Regression Lines:**

**Linear regression** finds the best-fit line $y = a + bx$:
$$b = \frac{n\sum xy - \sum x \sum y}{n\sum x^2 - (\sum x)^2}$$
$$a = \bar{y} - b\bar{x}$$

*Problem*: Given $n = 5$, $\sum x = 40$, $\sum y = 60$, $\sum xy = 520$, $\sum x^2 = 370$:
$$b = \frac{5(520) - 40(60)}{5(370) - 1600} = \frac{2600 - 2400}{1850 - 1600} = \frac{200}{250} = 0.8$$
$$a = \frac{60}{5} - 0.8 \times \frac{40}{5} = 12 - 0.8 \times 8 = 12 - 6.4 = 5.6$$

Regression line: $y = 5.6 + 0.8x$

**Probability in Statistics:**

For a binomial distribution $B(n, p)$:
- Mean = $np$
- Variance = $np(1-p)$
- Standard deviation = $\sqrt{np(1-p)}$

*Problem*: A biased coin has $P(\text{heads}) = 0.3$. Tossed 100 times. Find mean and standard deviation.

Mean = $np = 100 \times 0.3 = 30$
$\sigma = \sqrt{100 \times 0.3 \times 0.7} = \sqrt{21} \approx 4.58$

⚡ **WAEC Examination Patterns:** Calculate mean, median, and mode for ungrouped and grouped data. Find variance and standard deviation. Use the computational formula for variance. Draw and interpret box plots. Calculate and interpret Pearson's correlation coefficient. Find regression lines. Apply normal distribution and z-scores.
