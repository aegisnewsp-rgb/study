---
exam: aqa-gcse-mathematics
examName: GCSE Mathematics (AQA 8300)
subject: mathematics
subjectName: Mathematics
topic: mathem-006
topicName: Statistics
weight: 3
country: uk
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Statistics — GCSE Mathematics (AQA 8300) Notes

Statistics is the second of the two smaller strands at GCSE Mathematics and is often tested jointly with Probability on Paper 2. It spans data collection, frequency tables, averages and spread, cumulative frequency, histograms, box plots, scatter graphs and correlation, and interpreting distributions. Higher tier extends into time series and the interpretation of large data sets.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### The three averages and three measures of spread

**Averages** (a single value to summarise a dataset):

- **Mean:** Σx / n. Sum of all values divided by count. Sensitive to outliers.
- **Median:** the middle value when the data are in order. Less sensitive to outliers.
- **Mode:** the most frequent value. A dataset can have no mode, one mode, or multiple modes.

**Spread** (how much the data varies):

- **Range:** largest − smallest. Quick but only uses two values.
- **Interquartile range (IQR):** Q3 − Q1. The middle 50% of the data.
- **Standard deviation:** a measure of average distance from the mean. Used in higher-tier questions.

#### Charts and diagrams to recognise

- Bar chart, pie chart, line graph (categorical and time-series)
- Histogram (continuous data, frequencies on the y-axis)
- Frequency polygon (line graph joining frequency midpoints)
- Box plot (median, quartiles, whiskers)
- Cumulative frequency graph (S-curve, used to find the median and quartiles)
- Scatter graph (two-variable data, for correlation)

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Data collection

**Primary data** is collected by the student themselves; **secondary data** is collected by someone else. A **sample** is a subset of the **population**. A **random sample** gives every member of the population an equal chance of selection. **Stratified sampling** takes a proportional number from each subgroup.

**Sampling methods to recognise:**

- **Random:** every member equally likely (e.g., using a random number table).
- **Systematic:** every kth member.
- **Stratified:** proportional to subgroup sizes.
- **Quota:** convenience-based, fills a quota per subgroup.
- **Opportunity / cluster:** picks whole clusters, e.g., one class.

Random and stratified are the most representative in general; quota and opportunity can introduce bias.

#### Frequency tables

A **tally chart** counts how many times each value appears. A **frequency table** lists each value and its tally or count. A **grouped frequency table** collects values into class intervals (e.g., 0 < x ≤ 10).

To find the **mean from a frequency table**:

- Multiply each value by its frequency.
- Sum the products.
- Divide by the sum of frequencies.

To find the **mean from a grouped frequency table**, use the midpoint of each class as the value.

#### Cumulative frequency

**Cumulative frequency** is the running total of frequencies. Plot cumulative frequency against the upper class boundary. From the curve you can read:

- The **median** (where the cumulative frequency is half of the total).
- The **lower quartile Q1** (where the cumulative frequency is a quarter of the total).
- The **upper quartile Q3** (where the cumulative frequency is three-quarters of the total).

The **interquartile range (IQR)** is Q3 − Q1.

#### Histograms

A **histogram** shows continuous data with bars whose **area** is proportional to frequency. The bar height is frequency divided by class width. Two datasets with the same total area but different class widths need different y-axis interpretations.

Read questions carefully: "frequency density" on the y-axis means height × class width = frequency.

#### Box plots

A **box plot** (or box-and-whisker) shows the five-number summary:

- Minimum
- Lower quartile Q1
- Median Q2
- Upper quartile Q3
- Maximum

The box spans Q1 to Q3 (the IQR); whiskers extend to min and max. **Outliers** (typically values more than 1.5 × IQR outside the box) are plotted as separate points.

Compare two box plots by reading the medians (higher median = higher typical value), IQRs (longer box = more spread in the middle half), and skew (longer whisker on one side = skew in that direction).

#### Scatter graphs and correlation

A **scatter graph** plots two variables. **Correlation** describes the relationship:

- **Positive:** as x increases, y tends to increase.
- **Negative:** as x increases, y tends to decrease.
- **None:** no clear pattern.

**Correlation is not causation.** Two variables can move together because both are caused by a third, or by coincidence.

A **line of best fit** (a straight or smooth curve) goes through the middle of the points. Use it to predict one variable from another; predictions outside the data range (interpolation vs extrapolation) carry different reliability.

#### Time series

A **time series** is a set of observations over time. The **trend** is the long-term direction; the **seasonal variation** is the regular cycle within a period (e.g., monthly sales across a year).

To find the **trend**, plot a moving average (e.g., 3-point or 7-point). The moving average smooths out short-term fluctuations.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Worked pattern — reading a box plot

A box plot shows: minimum 12, Q1 25, median 35, Q3 48, maximum 60.

- Median: 35.
- IQR: 48 − 25 = 23.
- Range: 60 − 12 = 48.
- Skew: the lower whisker is 25 − 12 = 13 long; the upper whisker is 60 − 48 = 12 long. Roughly symmetric.

To compare two datasets, compute and compare the same five-number summaries.

#### Worked pattern — estimated mean from grouped data

| Class | Midpoint | Frequency |
|-------|----------|-----------|
| 0 < x ≤ 10 | 5 | 4 |
| 10 < x ≤ 20 | 15 | 8 |
| 20 < x ≤ 30 | 25 | 12 |
| 30 < x ≤ 40 | 35 | 6 |

- Σ(fx) = (5×4) + (15×8) + (25×12) + (35×6) = 20 + 120 + 300 + 210 = 650.
- Σf = 4 + 8 + 12 + 6 = 30.
- Mean ≈ 650 / 30 ≈ 21.7.

#### Common misconceptions (and the correction)

- "The mode is the most useful average." It depends on the data — for skewed data, the median is more representative; for symmetric data without outliers, the mean uses all values.
- "Correlation implies causation." It does not. Smoking and lung cancer correlate; smoking causes cancer. But two variables can correlate because both are caused by a third (e.g., ice-cream sales and drowning deaths both rise in summer).
- "Cumulative frequency shows individual data points." It shows running totals — the curve passes through (upper class boundary, total frequency up to that class).
- "A larger range always means more spread." Range uses only two values. IQR uses the middle 50%, so two datasets with the same range can have very different IQRs.

#### Exam technique

- For box plot comparisons, write the comparison out — "the median for class A is higher than for class B" — and back it with a numerical read.
- For cumulative frequency questions, mark the median, Q1, Q3 and IQR on the graph so the marker can see your method.
- For correlation questions, describe both the type (positive/negative/none) and the strength (strong/moderate/weak). "Strong negative correlation" gets full marks; "negative" alone is partial.

#### Specification reference

Higher tier extends into time series and moving averages, the interpretation of large data sets, and standard deviation. Confirm the live assessment weighting and tier rules on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-20. Source: AQA GCSE Mathematics specification 8300, https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300. Tier rules, calculator policy and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*
