---
exam: al-exam
examName: A/L Examination (Sri Lanka)
subject: commerce-stream
subjectName: "Commerce-Stream"
topic: commer-013
topicName: Statistics for Business
weight: 3
country: srilanka
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-15"
---

# Statistics for Business

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Statistics for Business** is applied statistics used to collect, organise, present, analyse and interpret numerical data for managerial decisions under uncertainty. In the A/L Commerce stream it carries around 3% of total marks and shows up as MCQs, short-answer and structured-essay items in the Business Statistics paper.

- **Core areas:** measures of central tendency, dispersion, index numbers, time series, correlation, regression, probability and the Normal distribution.
- **Most-tested formulas** (variables, units):
  - Arithmetic mean: $\bar{x} = \frac{\sum x_i}{n}$ — units of the variable (e.g. Rs, kg).
  - Standard deviation (sample): $s = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n-1}}$ — units of the variable.
  - Coefficient of variation: $CV = \frac{\sigma}{\bar{x}} \times 100\%$ — dimensionless, lets you compare two series in different units.
  - Pearson's $r = \frac{n\sum xy - (\sum x)(\sum y)}{\sqrt{[n\sum x^2 - (\sum x)^2][n\sum y^2 - (\sum y)^2]}}$ — dimensionless, $-1 \le r \le 1$.
- **Exam rule of thumb:** index numbers and time series trend questions appear almost every paper — practice at least one Laspeyres, one Paasche and one Fisher's ideal calculation.

> 💡 **High-Yield Memory Hook:** **"Mean for Symmetric, Median for Skewed, Mode for Categories — M-S-M-C"**. Also remember **"LPF = Laspeyres uses Past quantities, Paasche uses Present quantities, Fisher = √(L × P)"** — index number recall in 10 seconds.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definitions and Notation

A **population** is the entire group under study; a **sample** is a subset drawn from it. Population parameters are written in Greek ($\mu$, $\sigma$, $\sigma^2$); sample statistics are written in Latin letters ($\bar{x}$, $s$, $s^2$). **Qualitative data** describe categories (e.g. product type); **quantitative data** are numerical. Quantitative data are further split into **discrete** (countable, e.g. number of sales per day) and **continuous** (measurable, e.g. monthly revenue in Rs).

#### Measures of Central Tendency

| Measure | When to use | Formula | Unit |
|---|---|---|---|
| Arithmetic mean | Symmetric distributions, no outliers | $\bar{x} = \sum x_i / n$ | Unit of variable |
| Weighted mean | Each item carries a different importance | $\bar{x}_w = \frac{\sum w_i x_i}{\sum w_i}$ | Unit of $x_i$ |
| Median | Skewed data or open-ended classes | Position $(n+1)/2$, average neighbours if $n$ even | Unit of variable |
| Mode (grouped) | Most frequent value, categorical data | $L + \frac{f_1 - f_0}{(f_1 - f_0) + (f_1 - f_2)} \times h$ | Unit of variable |

> 📌 **Formula Check:** For grouped data, $L$ is the **true lower class boundary** (not the stated limit), $h$ is the class width, and $f_1, f_0, f_2$ are the frequencies of the modal class, the preceding class and the succeeding class respectively.

#### Measures of Dispersion

Dispersion describes spread. The **range** is the simplest spread measure but ignores internal variation. The **mean deviation** averages absolute deviations from the mean. The **variance** and **standard deviation** use squared deviations, which make them sensitive to extreme values — useful for quality control.

- **Range** $= \text{Max} - \text{Min}$ (units of variable).
- **Quartile deviation** $= (Q_3 - Q_1)/2$ (units of variable).
- **Standard deviation (sample)** $s = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n-1}}$ — divide by $n-1$ for sample, $N$ for population.
- **Coefficient of variation** $CV = \frac{\sigma}{\bar{x}} \times 100\%$ — the only spread measure you can compare across two series in different units.

#### Index Numbers

Index numbers measure percentage change in price, quantity or value between a base period (subscript 0) and a current period (subscript 1). The three you must know:

| Index | Weights used | Formula |
|---|---|---|
| Laspeyres | Base-year quantities $q_0$ | $P_{01}^{L} = \frac{\sum p_1 q_0}{\sum p_0 q_0} \times 100$ |
| Paasche | Current-year quantities $q_1$ | $P_{01}^{P} = \frac{\sum p_1 q_1}{\sum p_0 q_1} \times 100$ |
| Fisher's ideal | Geometric mean of L and P | $P_{01}^{F} = \sqrt{P_{01}^{L} \times P_{01}^{P}}$ |

All three are dimensionless and must be reported with the $\times 100$ multiplier.

#### Correlation vs Regression

**Karl Pearson's r** measures the strength and direction of linear association between two variables; it always lies in $[-1, +1]$ and is dimensionless. The **regression line of y on x** is $y = a + bx$, fitted by the **least squares method** that minimises $\sum (y_i - \hat{y}_i)^2$. The slope $b$ has units of $\frac{\text{unit of } y}{\text{unit of } x}$.

#### 🎯 Exam-Level Worked Problem

**Question:** A branch records monthly sales (Rs '000): 12, 15, 18, 14, 16, 20 for January to June. Compute (i) the mean, (ii) the sample standard deviation, (iii) the coefficient of variation, and (iv) state which measure lets you compare this branch's variability with another branch measured in dollars.

#### Solution:
1. $\sum x_i = 12 + 15 + 18 + 14 + 16 + 20 = 95$. Mean: $\bar{x} = 95/6 = 15.833$ Rs '000.
2. Deviations: $-3.833, -0.833, 2.167, -1.833, 0.167, 4.167$. Squared: $14.694, 0.694, 4.694, 3.361, 0.028, 17.361$. Sum $= 40.833$. Sample variance $s^2 = 40.833/(6-1) = 8.167$. $s = \sqrt{8.167} = 2.857$ Rs '000.
3. $CV = (2.857 / 15.833) \times 100\% = 18.05\%$.
4. The **CV** is dimensionless, so it is the correct comparator across different currencies or units.

> ⚠️ **Examiner Trap:** Students divide by $n$ (giving 6) instead of $n-1$ (giving 5). The question says "sample" — always use $n-1$ for an unbiased estimator. Also, $s$ keeps the unit Rs '000; converting to rupees only after the ratio prevents CV errors.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Time Series Decomposition

A time series $Y$ can be modelled additively as $Y = T + S + C + I$ or multiplicatively as $Y = T \times S \times C \times I$, where $T$ = secular trend, $S$ = seasonal variation, $C$ = cyclical movement, $I$ = irregular (random) component. Trend isolation uses a **centred moving average** of odd length (e.g. 3-year: $\hat{t}_i = (Y_{i-1} + Y_i + Y_{i+1})/3$, unit = unit of $Y$). For even-length moving averages, apply a two-stage average so that the trend value lines up with the actual time period. After trend removal, the **seasonal index** is the average of each season's ratio to trend (multiplicative model).

#### Probability and the Normal Distribution

For a discrete random variable, $E(X) = \sum x_i P(x_i)$ (unit = unit of $X$). The **standard normal score** $Z = (X - \mu)/\sigma$ is dimensionless and lets you read probabilities from standard normal tables — a frequent MCQ item. Use $Z$ for quality-control charts, lead-time demand and inventory service-level calculations.

#### Hypothesis Testing and Sampling

A **simple random sample** gives every subset of size $n$ an equal chance. A **stratified sample** splits the population into homogeneous strata (e.g. by branch size) and samples within each, reducing variance for the same total $n$. The **Central Limit Theorem** says the sampling distribution of $\bar{x}$ approaches Normal$(\mu, \sigma/\sqrt{n})$ as $n$ grows, even when $X$ is not Normal — this underpins most $z$- and $t$-tests.

#### Advanced Traps and Exceptions

1. **Open-ended classes** invalidate the arithmetic mean but not the median or mode — choose carefully.
2. **Pearson's r** assumes linearity and roughly Normal data; for ranks or non-Normal data use **Spearman's rank correlation**.
3. **Laspeyres** overstates inflation when consumers switch to cheaper substitutes; **Paasche** understates it. **Fisher's ideal** balances both.
4. **Correlation $\ne$ causation** — a high $r$ only describes linear association; examiners test this interpretation almost every year.
5. **Outliers** in small samples distort $\bar{x}$ and $s$ heavily but barely affect the median and IQR.
6. **Index numbers without $\times 100$** lose their percentage interpretation — always present $P_{01}$ as a number near 100, 120 or 145, not 1.20.
7. **n vs N in variance** — read "sample" or "population" in the stem; misreading costs full marks.

#### Practice Prompts

- Compute the 4-quarter centred moving average for the series 22, 28, 25, 30, 24, 29, 27, 32 and identify the seasonal indices (multiplicative model).
- Given $E(X) = 45{,}000$ Rs, $\sigma = 6{,}000$ Rs for monthly sales, find $P(X > 54{,}000)$ using the standard Normal table.

---

## Continue your study

- **[View this topic in your A/L Examination (Sri Lanka) roadmap](/roadmap/?exam=al-exam&duration=1mo)** — see where "Statistics for Business" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=al-exam&duration=1d)** — 1-day sprint covering highest-weight topics
- **[A/L Examination (Sri Lanka) exam overview](/exams/al-exam/)** — pattern, eligibility, and syllabus
- **[All Commerce-Stream notes](/notes/al-exam/commerce-stream/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
