---



exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-10
topicName: Statistics and Data Presentation
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.735984"
diagramPrompt: "Mathematical diagram showing Statistics and Data Presentation concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Statistics and Data Presentation

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Statistics and Data Presentation** — Quick Facts

**Measures of Central Tendency:**

| Measure | Formula (Ungrouped) | Best Used When |
|---------|---------------------|----------------|
| Mean | $\bar{x} = \frac{\sum x_i}{n}$ | Symmetric data, no outliers |
| Median | Middle value when sorted | Skewed data, outliers present |
| Mode | Most frequent value | Categorical data |

**Grouped Data Mean:**
$$\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$$

where $x_i$ is the class midpoint and $f_i$ is the frequency.

**Dispersion Measures:**
- **Range** = Highest − Lowest
- **Variance** = $\sigma^2 = \frac{\sum f_i(x_i - \bar{x})^2}{\sum f_i}$
- **Standard Deviation** = $\sigma = \sqrt{\text{variance}}$

**Data Presentation Types:**
- **Bar chart** — categorical data comparison
- **Histogram** — continuous data with equal class widths
- **Frequency polygon** — line graph of frequencies
- **Pie chart** — proportions of a whole

⚡ **JAMB Exam Tip:** In histogram questions, area = frequency. If class widths are unequal, use frequency density = frequency/class width.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Statistics and Data Presentation** — Study Guide

**Finding the Mean (Grouped Data):**

| Class Interval | Midpoint $x_i$ | Frequency $f_i$ | $f_i x_i$ |
|----------------|-----------------|-----------------|-----------|
| 0–9 | 4.5 | 3 | 13.5 |
| 10–19 | 14.5 | 7 | 101.5 |
| 20–29 | 24.5 | 12 | 294.0 |
| 30–39 | 34.5 | 8 | 276.0 |
| 40–49 | 44.5 | 2 | 89.0 |
| **Total** | | **32** | **774.0** |

$\bar{x} = \frac{774.0}{32} = 24.19$

**Finding the Median (Grouped Data):**

Formula: $\text{Median} = L + \left(\frac{\frac{n}{2} - c}{f}\right) \times w$

Where:
- $L$ = lower boundary of median class
- $n$ = total frequency
- $c$ = cumulative frequency before median class
- $f$ = frequency of median class
- $w$ = class width

**Example:** Find median from data with $n = 50$, median class = 20–29 (cumulative before = 17, $f = 12$, $w = 10$)

$\text{Median} = 20 + \left(\frac{25 - 17}{12}\right) \times 10 = 20 + 6.67 = 26.67$

**Measures of Position:**
- **Quartiles:** $Q_1 = \frac{n+1}{4}$th term, $Q_3 = \frac{3(n+1)}{4}$th term
- **Deciles:** $D_k = \frac{k(n+1)}{10}$th term
- **Percentiles:** $P_k = \frac{k(n+1)}{100}$th term

⚡ **Common Student Mistake:** Confusing the median class in grouped data. Always identify the class containing the $\frac{n}{2}$th observation first.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Statistics and Data Presentation** — Comprehensive Notes

**Variance and Standard Deviation (Grouped Data):**

Step 1: Calculate mean $\bar{x}$
Step 2: Calculate deviation from mean for each class midpoint: $(x_i - \bar{x})$
Step 3: Square deviations: $(x_i - \bar{x})^2$
Step 4: Multiply by frequency: $f_i(x_i - \bar{x})^2$
Step 5: Sum and divide by $\sum f_i$
Step 6: Take square root for standard deviation

**Shortcut Formula for Variance:**
$$\sigma^2 = \frac{\sum f_i x_i^2}{\sum f_i} - \bar{x}^2$$

**Example Calculation:**
| $x_i$ | $f_i$ | $f_i x_i$ | $f_i x_i^2$ |
|-------|-------|-----------|-------------|
| 15 | 4 | 60 | 900 |
| 25 | 6 | 150 | 3750 |
| 35 | 8 | 280 | 9800 |
| 45 | 2 | 90 | 4050 |
| **Total** | **20** | **580** | **18500** |

$\bar{x} = 580/20 = 29$
$\sigma^2 = \frac{18500}{20} - 29^2 = 925 - 841 = 84$
$\sigma = \sqrt{84} = 9.17$

**Skewness:**

Pearson's Coefficient of Skewness:
$$S_k = \frac{3(\bar{x} - \text{Mode})}{\sigma}$$

- $S_k > 0$: Positively skewed (mean > median > mode)
- $S_k < 0$: Negatively skewed
- $S_k = 0$: Symmetrical

**Cumulative Frequency (Ogive):**

To draw an ogive:
1. Use upper class boundaries on x-axis
2. Use cumulative frequency on y-axis
3. Plot points and join with a smooth curve
4. Read median at $n/2$ on y-axis

**Ogive for Median:**
50th percentile from ogive = $\frac{n}{2}$ on y-axis, project down to x-axis.

**Box-and-Whisker Plot:**
- Lower whisker = $Q_1 - 1.5 \times \text{IQR}$
- Lower edge of box = $Q_1$
- Line inside box = Median ($Q_2$)
- Upper edge of box = $Q_3$
- Upper whisker = $Q_3 + 1.5 \times \text{IQR}$
- Outliers plotted beyond whiskers

**Data Presentation Guidelines:**

1. **Histogram:** No gaps between bars (continuous data), frequency on y-axis
2. **Bar Chart:** Gaps between bars (categorical data), frequency on y-axis
3. **Frequency Polygon:** Points plotted at class midpoints, connected
4. **Pie Chart:** Sectors proportional to frequencies; angle = $\frac{f_i}{\sum f_i} \times 360°$

⚡ **Exam Pattern (JAMB 2015-2024):**
- 2015: Grouped data mean with class midpoints
- 2018: Finding median from ogive
- 2020: Variance calculation using shortcut formula
- 2023: Histogram with unequal class widths (frequency density)
- 2024: Box-and-whisker plot interpretation

**Real-World Nigeria Context Example:**

In a JAMB mock exam, 500 students scored the following in Mathematics:

| Score Range | Frequency |
|-------------|-----------|
| 0–19 | 45 |
| 20–39 | 120 |
| 40–59 | 185 |
| 60–79 | 110 |
| 80–100 | 40 |

Find mean, median, and interpret the distribution shape.

Solution approach: Calculate class midpoints (9.5, 29.5, 49.5, 69.5, 89.5), multiply by frequencies, sum, divide by 500 to get mean ≈ 48.3. For median class, $n/2 = 250$, which falls in 40–59 class.