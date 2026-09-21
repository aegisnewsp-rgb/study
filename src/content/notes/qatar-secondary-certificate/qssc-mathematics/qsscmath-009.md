---
exam: qatar-secondary-certificate
examName: Qatar General Secondary Education Certificate
subject: qssc-mathematics
subjectName: Mathematics
topic: qsscmath-009
topicName: "Statistics — Central Tendency, Dispersion and Regression"
weight: 3
country: qatar
generated: "2026-09-21T10:00:00"
lastUpdated: "2026-09-21"
---

# Statistics — Central Tendency, Dispersion and Regression — Qatar Secondary Certificate Mathematics Notes

Statistics is half of the Data Handling strand of the MoEHE 2018 Mathematics Curriculum Standards. At Grade 12 the standards publish mean, median, mode, range, variance and standard deviation for grouped and ungrouped data, cumulative frequency, correlation and the regression line, and designing statistical studies with margin of error (MoEHE pp. 54, 61). Statistics is a small but reliable mark-earner at the MoEHE terminal — the data Handling strand carries around 17 percent of the Grade 12 advanced Mathematics paper.

> Verify the live assessment weighting and the new unified Grade 10 science curriculum introduced from the 2026-2027 academic year on https://www.edu.gov.qa/ before planning revision.

---

### Lite — Quick Review (1h-1d)

#### Core facts in one pass

- **Mean:** sum of all values divided by count. For a frequency distribution: mean = sum(f * x) / sum f.
- **Median:** the middle value when ordered; for n even, average of n/2 and n/2 + 1.
- **Mode:** most frequent value.
- **Range:** max - min.
- **Variance:** mean of squared deviations from the mean. Standard deviation = sqrt(variance).
- **Cumulative frequency:** running total of frequencies; used to read percentiles from a graph.
- **Correlation coefficient r:** between -1 and +1; measures linear association. Regression line: y on x is the line that minimises the sum of squared vertical distances.

#### Examiner traps

- Using the regression line to predict far outside the data range — extrapolation, not interpolation.
- Reporting the correlation coefficient without units.
- Confusing variance (mean of squared deviations) with mean of squared values.

---

### Standard — Regular Study (2d-2mo)

#### Ungrouped data

For data 2, 4, 4, 4, 5, 7, 9: mean = 37/7 = 5.286. Median = 4. Mode = 4. Range = 9 - 2 = 7.

Sample variance (with n - 1): s^2 = sum(x_i - x_bar)^2 / (n - 1). For the data above: deviations are -3.286, -1.286, -1.286, -1.286, -0.286, 1.714, 3.714. Squared: 10.80, 1.65, 1.65, 1.65, 0.082, 2.94, 13.80. Sum = 32.60. s^2 = 32.60 / 6 = 5.43. s = 2.33.

#### Grouped data

For a frequency table with midpoints x_i and frequencies f_i: mean = sum(f_i x_i) / sum f_i. Median is the value at the cumulative frequency = n / 2.

Variance for grouped data: s^2 = sum f_i (x_i - x_bar)^2 / (sum f_i - 1).

#### Cumulative frequency and percentiles

Draw a cumulative frequency curve (ogive). The median is the x-value at cumulative frequency = n / 2. The interquartile range is the difference between the x-values at cumulative frequency = 3n / 4 and n / 4.

For grouped data, use linear interpolation: percentile position is the cumulative frequency just below the target; the percentile value = lower class boundary + (target - cf below) / f * class width.

#### Correlation and regression

The Pearson correlation coefficient r = sum((x_i - x_bar)(y_i - y_bar)) / sqrt(sum(x_i - x_bar)^2 * sum(y_i - y_bar)^2). |r| close to 1 indicates strong linear association.

The regression line of y on x: y = a + bx, where b = sum((x_i - x_bar)(y_i - y_bar)) / sum(x_i - x_bar)^2, and a = y_bar - b x_bar. Use this line to predict y from x.

---

### Deep — Long-Term Mastery (1mo-6mo)

#### Why statistics is reliable mark-earner

The MoEHE 2018 standards put Data Handling at around 17 percent of the Grade 12 advanced paper — smaller than algebra-calculus and geometry-trig, but the standardised methods make it the strand where 80 percent of marks are easiest to lock down. Cumulative frequency, correlation, and regression are formulaic; the cost of careless arithmetic is the main risk.

#### Exam technique

- For ungrouped data, write out the deviation x_i - x_bar explicitly before squaring — fewer sign errors.
- For cumulative frequency, label the x-axis with class boundaries, not class midpoints.
- For regression, plot the data and sketch the line — visual check catches algebraic sign errors.

#### Common misconceptions (and the correction)

- "Correlation implies causation." Correlation measures linear association; a third variable or coincidence may be responsible.
- "r = 0.9 is the same as r = 0.95." Closer to 1 means stronger linear association; small differences matter at high r.
- "Median = mean for symmetric data." Yes — but only for symmetric distributions, not for skewed data.

#### Specification reference

Source: MoEHE Curriculum Standards for Mathematics KG-G12 (MoEHE, 2018), https://cdn-files.abegs.org/abegs-marsad-prod/uploads/c7a1839c-fd4e-401c-87dd-d6f3baac8cd5.pdf, pp. 54, 61. Re-check on https://www.edu.gov.qa/ before committing.

---

*Last updated 2026-09-21. Source: MoEHE Qatar Mathematics Curriculum Standards KG-G12 (2018), https://cdn-files.abegs.org/abegs-marsad-prod/uploads/c7a1839c-fd4e-401c-87dd-d6f3baac8cd5.pdf. Track regulation and Grade 12 terminal-exam weighting must be re-checked on https://www.edu.gov.qa/ before committing a revision plan to a student (qatar).*
