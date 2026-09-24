---
exam: aqa-alevel-mathematics
examName: A-Level Mathematics (AQA 7357)
subject: mathematics
subjectName: Mathematics
topic: almath-011
topicName: Statistical Sampling and Data Presentation
weight: 3
country: uk
generated: "2026-09-22T10:00:00"
lastUpdated: "2026-09-22"
---

# Statistical Sampling and Data Presentation — A-Level Mathematics (AQA 7357) Notes

Statistical Sampling and Data Presentation is sections K and L of the AQA 7357 specification, covering sampling methods and their limitations, the large data set, and presenting, describing and interpreting data with summary statistics and appropriate diagrams. The content is the most "real-world" part of A-level mathematics — every question ties to a dataset and asks you to interpret it — and it sits on Paper 3 alongside the rest of statistics. The single most important skill is reading what the question is asking for: many marks are lost because the student computes the wrong summary statistic or describes the wrong feature of a diagram.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Three summary statistics to remember

- **Mean** (x̄): sum of all values divided by the count. Sensitive to outliers.
- **Median**: middle value when the data are in order. Robust to outliers.
- **Mode**: most frequent value. Datasets can have no mode, one mode, or several.

**Spread** (how much the data varies):

- **Range**: largest value minus smallest.
- **Interquartile range (IQR)**: upper quartile minus lower quartile.
- **Standard deviation**: typical distance from the mean. Use it for symmetric data without outliers.

#### Five sampling methods

- **Simple random sampling**: every member of the population equally likely. Use random number tables or a computer.
- **Systematic sampling**: pick every kth member from a list. Cheap but can introduce bias if the list has a pattern.
- **Stratified sampling**: take a proportional number from each subgroup. Most representative when the subgroups differ.
- **Quotas**: pick a fixed number per subgroup, but the individuals within each subgroup are not random. Risk of bias.
- **Opportunity (or convenience) sampling**: take whoever is available. Cheapest but the most biased.

#### Three chart types you must recognise

- **Histogram** for continuous data with class intervals; the area of each bar is the frequency.
- **Box plot** (or box-and-whisker) for the five-number summary.
- **Cumulative frequency diagram** for finding the median, quartiles and IQR from grouped data.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Sampling methods in detail

The five sampling methods differ in how representative they are and how practical they are to apply:

- **Simple random sampling (SRS)**: every subset of size n of the population has an equal chance of being chosen. Most representative but hardest in practice — you need a list of every member and a random selection method.
- **Systematic sampling**: pick a random starting point, then every kth member. Example: for n = 50 from N = 1000, pick every 20th. If the list is in a random order, this is essentially SRS. If the list is sorted by some feature, systematic sampling introduces bias.
- **Stratified sampling**: divide the population into strata (groups with a shared characteristic), then sample proportionally from each stratum. Use when strata are expected to differ in their response.
- **Quotas**: like stratified, but the sampling within each stratum is not random. Convenient but biased.
- **Opportunity sampling**: take whoever responds. Easy but introduces self-selection bias — people who choose to respond may differ from those who don't.

**Worked example — choosing a method.** A college wants to survey student satisfaction across 6 year groups. Which method?

The year groups differ (in size and likely in attitudes), so stratified sampling by year group is the natural choice. Within each year group, simple random sampling picks representatives.

**Worked example — sample size from strata.** Total population 800, with three strata of size 200, 300, 300. Sample of 80 needed. Stratified sample sizes: 80 · 200/800 = 20, 80 · 300/800 = 30, 80 · 300/800 = 30. Total 80. Within each stratum, choose 20/30/30 students randomly.

#### The large data set

AQA publishes a large data set each year, typically consisting of meteorological or geographical measurements. The data set is used in Paper 3 to test interpretation skills.

The skill is to:

1. Identify the variable and units (e.g., "monthly rainfall in mm", "daily temperature in °C").
2. Compute summary statistics (mean, median, standard deviation, percentiles) for subsets.
3. Compare subsets (e.g., one region vs another, one season vs another).
4. Comment on the data using appropriate vocabulary (skewness, outliers, distribution shape).

**Worked example.** Compare the mean daily temperature in summer (June–August) and winter (December–February) for a given location.

Compute the mean for each subset, compute the standard deviation, and write a comparison: "the mean summer temperature is X °C compared to Y °C in winter, with summer showing greater variability (standard deviation S₁ vs S₂)".

#### Frequency tables and grouped data

A **frequency table** lists each value and its count. To find the mean:

mean = Σ(x · f) / Σ(f).

**Grouped frequency table**: values are grouped into class intervals. Use the midpoint of each class as the value:

mean = Σ(midpoint · frequency) / Σ(frequency).

The mean from a grouped table is an estimate, not exact, because the midpoint is only an approximation.

**Worked example.** Midpoints and frequencies:

| Midpoint | 5 | 15 | 25 | 35 | 45 |
|----------|---|----|----|----|----|
| Frequency | 4 | 8 | 12 | 6 | 2 |

Mean = (5·4 + 15·8 + 25·12 + 35·6 + 45·2) / (4 + 8 + 12 + 6 + 2) = (20 + 120 + 300 + 210 + 90) / 32 = 740 / 32 ≈ 23.1.

#### Cumulative frequency and quartiles

Cumulative frequency is the running total. Plot cumulative frequency against the upper class boundary. From the curve, read:

- **Median**: where the cumulative frequency is half the total.
- **Lower quartile Q₁**: where the cumulative frequency is a quarter of the total.
- **Upper quartile Q₃**: where the cumulative frequency is three-quarters of the total.

IQR = Q₃ − Q₁.

**Worked example.** Total frequency 32. Half is 16, so the median is at the cumulative frequency 16. Read the x-value where the curve crosses 16. Similarly for Q₁ (at cumulative frequency 8) and Q₃ (at cumulative frequency 24).

#### Histograms and frequency density

A histogram shows continuous data with bars whose **area** equals the frequency. The height is the frequency density:

frequency density = frequency / class width.

Two histograms with different class widths need different y-axis interpretations. A bar of width 5 and height 4 has area 20, so frequency 20.

#### Box plots

A box plot (or box-and-whisker plot) shows the five-number summary:

- Minimum
- Lower quartile Q₁
- Median Q₂
- Upper quartile Q₃
- Maximum

The box spans Q₁ to Q₃ (the IQR); whiskers extend to min and max. Outliers (typically values more than 1.5 × IQR outside the box) are plotted as separate points.

Compare two box plots by reading the medians (higher = higher typical value), IQRs (longer box = more spread in the middle half), and skew (longer whisker on one side = skew in that direction).

#### Scatter graphs and correlation

A scatter graph plots two variables. Correlation describes the relationship:

- **Positive**: as x increases, y tends to increase.
- **Negative**: as x increases, y tends to decrease.
- **None**: no clear pattern.

Strength is described as strong, moderate, or weak.

**Correlation is not causation.** Two variables can move together because both are caused by a third variable, or by coincidence. A line of best fit on a scatter graph predicts one variable from another, but the prediction outside the data range (extrapolation) is less reliable than within it (interpolation).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why sampling method matters more than statistics

A statistical analysis on a biased sample is unreliable no matter how careful the computation. AQA marks this distinction heavily: a well-computed mean on a quota sample is worth less than a clear identification of why the sample is biased. The skill is to:

1. Identify the population.
2. Recognise which sampling method was used.
3. Comment on whether the method is representative.
4. Suggest a better method if appropriate.

This habit transfers to A-level Further Mathematics and to degree-level statistics, where it is a discipline on its own.

#### Worked pattern — large-data-set interpretation

AQA Paper 3 typically gives a few lines of data from the large data set and asks:

- Compute summary statistics for a specified subset.
- Compare two subsets.
- Comment on a particular feature.

The full computation is mechanical; the marks for interpretation come from comments like "the mean is higher in summer because of longer daylight hours", or "the variability is greater in winter because of more extreme weather events". Always tie the statistical observation to the real-world variable.

#### Common misconceptions (and the correction)

- "The mean is the most useful average." It depends on the data. For skewed data with outliers, the median is more representative. For symmetric data without outliers, the mean uses all values.
- "A larger sample is always more representative." A larger biased sample is still biased. The sample size matters only after the sample is unbiased.
- "Cumulative frequency is the same as frequency." Cumulative frequency is the running total. A cumulative frequency curve passes through (upper class boundary, total frequency up to that class), not (class midpoint, frequency).
- "Outliers should be removed." Outliers should be investigated, not automatically removed. Sometimes they are data-entry errors; sometimes they are the most important data points.

#### Specification reference

Sections K and L of the AQA A-level Mathematics 7357 specification appear on Paper 3 and tie to the probability (section M), distributions (section N) and hypothesis testing (section O) content. Confirm the live paper structure, formula booklet and any in-year specification changes on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-22. Source: AQA A-level Mathematics specification 7357, https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357. Paper structure, assessment weighting and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*