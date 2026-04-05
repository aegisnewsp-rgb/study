---
exam: uii
examName: UI Entrance (Indonesia)
subject: quant
subjectName: Academic Potential
topic: academ-005
topicName: Averages
weight: 3
country: uii
generated: "2026-03-25T17:00:00"
---

# Averages

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

The word "average" most commonly means the arithmetic mean — the sum of all values divided by the number of values. However, statisticians also use median (the middle value when data is ordered) and mode (the most frequent value). Each measure tells you something different about a dataset, and the best choice depends on the context.

**Essential Formulas:**
- Mean (ungrouped): x̄ = (Σx) / n
- Mean (frequency table): x̄ = (Σfx) / Σf
- Mean (grouped data): x̄ ≈ (Σfx) / Σf, using class midpoints
- Median position = (n+1)/2-th value for ungrouped; L + ((n/2 − c)/f) × w for grouped
- Mode: most frequent value (ungrouped); modal class midpoint for grouped data
- Range = maximum − minimum
- Variance = (Σfx² / Σf) − x̄² (shortcut formula)

**Key Facts:**
- The mean uses every value — a single extreme value pulls the mean toward it
- The median is unaffected by extremes (outliers don't affect it)
- The mode can be non-existent (all values unique) or have multiple modes
- Mean ≤ range/2 + min? Not always — depends on distribution

⚡ **Exam Tip:** For UI entrance questions involving "average speed," note that average speed is NOT (v₁ + v₂)/2. For a journey with two equal-distance legs at speeds v₁ and v₂, average speed = 2v₁v₂/(v₁+v₂). For equal-time legs, average speed = (v₁ + v₂)/2. Pay attention to what is equal — distance or time.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Arithmetic Mean**

The mean is the sum of all observations divided by how many there are.

Example: Test scores: 65, 72, 78, 85, 90. Mean = (65+72+78+85+90)/5 = 390/5 = 78.

**Mean from a Frequency Table**

When the same value appears multiple times, multiply value by frequency before summing.

| Score | Frequency (f) | fx    |
|-------|-------------|-------|
| 40    | 3           | 120   |
| 50    | 5           | 250   |
| 60    | 8           | 480   |
| 70    | 4           | 280   |
| 80    | 2           | 160   |
| Total | 22          | 1,290 |

Mean = 1,290 / 22 = 58.64.

**The Median**

The median is the middle value. Sort the data first.

Odd number of values: median is the (n+1)/2-th value.
Even number of values: median is the average of the n/2-th and (n/2 + 1)-th values.

Example (odd): 4, 7, 2, 9, 1, 6. Sorted: 1, 2, 4, 6, 7, 9. n=6 (even). Median = average of 3rd and 4th values = (4+6)/2 = 5.

Wait, with n=6, the two middle positions are 3 and 4, so (4+6)/2 = 5. ✓

**The Mode**

The mode is simply the most frequently occurring value.

Example: 3, 5, 7, 5, 2, 5, 8. Mode = 5 (appears 3 times).
If no value repeats: no mode.
If two values tie: bimodal (e.g., 2 and 7 both appear twice).

**Mean, Median, and Mode — Comparing**

For a symmetric distribution (e.g., 3, 5, 7, 9, 11): mean = median = mode = 7.
For a right-skewed distribution (tail extends to the right, e.g., 1, 2, 3, 4, 20): mean (6) > median (3) > mode (no clear mode here, but typically less than median in this pattern).
For a left-skewed distribution (tail extends to the left, e.g., −10, 1, 2, 3, 4): mean < median.

**Weighted Mean**

Different values contribute with different weights.

Example: A course has three components: coursework (30%) with average 75, mid-term (20%) with average 80, final exam (50%) with average 70.
Weighted mean = (0.30 × 75) + (0.20 × 80) + (0.50 × 70) = 22.5 + 16 + 35 = 73.5.

**Average Speed**

Average speed = total distance / total time.

Example: A car travels 60 km at 40 km/h and then 60 km at 60 km/h.
Total distance = 120 km. Total time = 60/40 + 60/60 = 1.5 + 1 = 2.5 hours.
Average speed = 120/2.5 = 48 km/h.
NOT (40+60)/2 = 50 km/h (that would be correct only if time spent at each speed were equal).

**Deviation and Variance**

Deviation from the mean: each value minus the mean.
Variance measures average squared deviation: σ² = Σ(x − x̄)² / n (population) or / (n−1) for sample.
Shortcut: σ² = (Σx²/n) − x̄².

**Standard Deviation**

Standard deviation = √variance. It is in the same units as the data (unlike variance, which is in squared units).

Example: Data: 2, 4, 6, 8, 10. Mean = 6.
Deviations: −4, −2, 0, 2, 4. Squared: 16, 4, 0, 4, 16. Sum = 40. Variance = 40/5 = 8. SD = √8 = 2.83.

**Problem-Solving Strategies:**
- For "the mean increases by X" problems, calculate total sum first: if mean of n values is m and increases to m+Δ, the new total is n(m+Δ) and the added sum is nΔ
- When asked for the mean of two groups combined, use the formula: combined mean = (n₁x̄₁ + n₂x̄₂) / (n₁+n₂)
- For mean of a frequency table, double-check Σfx before dividing

**Common Mistakes:**
- Confusing mean with median — always sort before finding the median
- Forgetting to include all values when calculating mean from a frequency table (missing fx products)
- Using the class boundaries instead of midpoints when calculating mean from grouped data
- In average speed problems, averaging the speeds rather than dividing total distance by total time

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Effect of Adding Data on Mean**

If you add a new value to a dataset:
- New mean = (old sum + new value) / (old n + 1)
- To find what value would need to be added to achieve a target mean, work backwards from total sums.

Example: Five numbers have mean 12. What number must be added to make the mean 14?
Old total = 5 × 12 = 60. New total needed = 6 × 14 = 84. Required number = 84 − 60 = 24.

**Removing Data and Mean Changes**

If one value is removed: the new mean of remaining n−1 values can be found.
Example: Mean of 10 numbers is 25. One number of 40 is removed. New mean = ?
Old total = 250. New total = 250 − 40 = 210. New mean = 210/9 = 23.33.

**Combined Mean of Two Groups**

If group 1 (n₁ values, mean x̄₁) is combined with group 2 (n₂ values, mean x̄₂):
Combined x̄ = (n₁x̄₁ + n₂x̄₂) / (n₁ + n₂).

Example: Class A (30 students, mean 72) and Class B (20 students, mean 78). Combined mean = (30×72 + 20×78) / 50 = (2160 + 1560) / 50 = 3720/50 = 74.4.

**Quartiles and the Interquartile Range**

When data is ordered, quartiles divide it into four equal parts:
- Q1 (first quartile) = 25th percentile
- Q2 (second quartile) = median = 50th percentile
- Q3 (third quartile) = 75th percentile

For ungrouped data: Q1 position = (n+1)/4, Q3 position = 3(n+1)/4.
For grouped data, use interpolation formulas.

Interquartile range (IQR) = Q3 − Q1. It measures spread in the middle 50% of data, unaffected by outliers.

**Five-Number Summary and Box Plots**

The five-number summary: minimum, Q1, median, Q3, maximum.
The box plot shows: a box from Q1 to Q3 with a line at the median, and "whiskers" to the minimum and maximum.

**Mean Deviation**

Mean deviation = average of absolute deviations from the mean = Σ|x − x̄| / n.
Less commonly used than variance but more intuitive.

Example: Data: 3, 6, 6, 7, 8, 11. Mean = 41/6 ≈ 6.83.
Deviations: |3−6.83|=3.83, |6−6.83|=0.83, |6−6.83|=0.83, |7−6.83|=0.17, |8−6.83|=1.17, |11−6.83|=4.17.
Sum = 11.00. Mean deviation = 11/6 ≈ 1.83.

**UI Entrance Exam Patterns**

Average questions typically include:
1. Direct mean calculation from a list of numbers
2. Mean from a frequency table
3. Combined mean of two or more groups
4. Effect of adding/removing a value on mean
5. Weighted average
6. Average speed problems

⚡ **Exam Strategy:** When a question asks for the "new mean" after adding a value, work with totals rather than recalculating from scratch. Total₁ = n × mean₁. Total₂ = Total₁ + new value. New mean = Total₂ / (n+1).

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
