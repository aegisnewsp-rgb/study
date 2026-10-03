---
exam: junior-cycle
examName: "Junior Cycle"
subject: jc-mathematics
subjectName: "Mathematics"
topic: jc-math-005
topicName: "Statistics and Probability"
weight: 3
country: ireland
generated: "2026-09-26T10:00:00"
lastUpdated: "2026-09-26"
---

# Statistics and Probability — Junior Cycle Mathematics Notes

The Statistics and Probability strand covers the data-handling cycle (collect, organise, represent, analyse, interpret), frequency tables, averages (mean, median, mode) and measures of spread (range, interquartile range, standard deviation at Higher level), graphical displays (bar charts, histograms, cumulative frequency curves, box plots, scatter graphs, line of best fit), probability (sample spaces, expected outcomes, dependent and independent events), and elementary combinatorics. On the SEC paper it surfaces as one or two extended-response items near the end plus several short questions threaded through the paper. The weight rating of 3 out of 5 understates its exam impact, because it is also the strand where interpretation marks are most heavily weighted - a candidate can compute the mean correctly and still lose the final mark by omitting the sentence "this means..." in plain English.

> Verify live paper patterns and specification details on curriculumonline.ie and examinations.ie before planning revision.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Weight & Frequency**: Rated 3/5 - appears on every paper, with at least one extended-response item on data handling and one short question on probability. Confirm the live mark allocation on the latest SEC specimen paper.
- **Timing Goal**: Short statistics questions should average 60 to 90 seconds; extended-response items on data handling or probability should sit in the 4 to 7 minute band.
- **Core Principle**: Master five habits: (1) draw the table before drawing the graph, (2) state the units on the axes, (3) choose the correct average for the data type (mean for symmetric, median for skewed), (4) write the interpretation sentence at the end, (5) for probability, list the sample space before counting.
- **Mean, median, mode**: Mean = sum / count. Median = middle value when ordered (or average of two middle values for even count). Mode = most frequent value.
- **Histograms vs bar charts**: Histograms have continuous data on the x-axis with adjacent bars touching; bar charts have categorical data with gaps between bars. Drawing the wrong one is a method mark forfeit.
- **Probability**: For equally likely outcomes, *P(event) = favourable outcomes / total outcomes*. Outcomes must be exhaustive and mutually exclusive. Always check the denominator is the size of the sample space, not the number of "favourable" outcomes.
- **Cumulative frequency**: Plot the cumulative frequency on the y-axis against the upper class boundary on the x-axis. The median is read off the curve at the 50% mark; the interquartile range is the difference between the 75% and 25% cumulative frequencies.
- **Answer Verification**: For probability, check that the answer is between 0 and 1. For averages, check that the mean lies between the minimum and maximum values. For cumulative frequency, check that the curve is non-decreasing.

#### Examiner traps

- Confusing the median with the mean on a skewed distribution - the median is the standard SEC choice for skewed data.
- Drawing a histogram with gaps between the bars (it should look like a continuous distribution).
- Calculating the probability of "A and B" as the product without first checking the events are independent.
- Forgetting to convert the percentage back to a count when working with a frequency table.
- Leaving the interpretation sentence out of an extended-response answer - the final mark is forfeit.
- Treating a small sample (n under 30) as representative of a large population without acknowledging the limitation.

#### 20-minute triage checklist

- [ ] Can you construct a frequency table from raw data and identify the class intervals correctly?
- [ ] Do you know when to use mean vs median vs mode for a given data set?
- [ ] Can you read a cumulative frequency curve to find the median and interquartile range?
- [ ] Have you practiced listing sample spaces for two-stage probability experiments (coin + dice, two dice, etc.)?

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Conceptual framework and solving methodology

Statistics and Probability is the strand where the representation IS the working. Apply this scaffold to every question:

1. **Organise the data before calculating**:
   For raw data, build a frequency table. For grouped data, identify the class interval and the class midpoint (for estimating the mean). For a probability experiment, list the sample space on paper before counting outcomes.

2. **Choose the correct statistic or probability rule**:
   Symmetric data → mean. Skewed data → median. Categorical data → mode. Two independent events → multiply the probabilities. Two mutually exclusive events → add the probabilities. Conditional probability ("given that") → restrict the sample space first.

3. **Execute with explicit units and labels**:
   Axes on graphs must carry units (cm, kg, minutes, count). Class intervals must be stated as "10 ≤ *x* < 20" rather than "10 to 20" to avoid boundary ambiguity. Probability answers can be left as fractions, decimals, or percentages - whichever the question requests.

4. **Verify and interpret**:
   The mean must lie inside the data range. The probability must be between 0 and 1. The cumulative frequency curve must rise monotonically. Write the interpretation sentence explicitly: "The median height is 168 cm, which means half the students in the class are shorter than 168 cm."

#### Detailed worked example

**Problem Context**:
A combined data-handling-and-probability question typical of the Higher level paper.

**Item Prompt**:
The heights (in cm) of 30 students in a class are recorded. A summary of the data is: minimum = 145, lower quartile = 158, median = 165, upper quartile = 175, maximum = 188. **(a)** Draw a box plot for the data. **(b)** Find the interquartile range. **(c)** A student is selected at random. Given that the student's height is at least the lower quartile, what is the probability that the student's height is also at least the upper quartile?

**Step-by-Step Solution**:
- **Step 1 (Decode)**: (a) is a box plot from a five-number summary. (b) is IQR = UQ - LQ. (c) is a conditional probability: P(height ≥ UQ | height ≥ LQ).
- **Step 2 (Represent)**: For (a), the box plot has whiskers from 145 to 188, with a box from 158 (LQ) to 175 (UQ) and a line at 165 (median). For (c), the relevant sample space is the students whose height is ≥ LQ; of those, the favourable outcomes are those whose height is ≥ UQ.
- **Step 3 (Execute)**:
  - (a) Box plot: left whisker at 145, left edge of box at 158, line inside box at 165, right edge at 175, right whisker at 188.
  - (b) IQR = 175 - 158 = 17 cm.
  - (c) By definition, the lower quartile is the height below which 25% of the data lies, and the upper quartile is the height below which 75% of the data lies. So the proportion of students with height ≥ LQ is 75%, and the proportion with height ≥ UQ is 25%. P(height ≥ UQ | height ≥ LQ) = 25% / 75% = 1/3 ≈ 0.333.
- **Step 4 (Verify)**: (a) The box plot has the median closer to the LQ than to the UQ, suggesting a slight right skew - consistent with the spread (distance from LQ to median = 7, from median to UQ = 10). (b) IQR = 17 is positive and smaller than the full range (188 - 145 = 43) - consistent. (c) The conditional probability is between 0 and 1, and is plausible: about one third of the upper three quarters is the upper quarter itself.
- **Conclusion**: Three marks from one question - one for the box plot (which is a method mark), one for the IQR calculation, and one for the conditional probability. The (c) answer requires understanding the conditional-probability concept, not just plugging numbers.

---

### 🔴 Deep Dive — Mastery & Edge Cases (3mo–2yr)

#### Advanced variations and high-difficulty edge cases

At Distinction level, Statistics and Probability extends to standard deviation, correlation, and the normal distribution. Practice the four highest-leverage patterns:

- **Standard deviation**: A measure of spread around the mean. For a data set, *s = √(Σ(xᵢ - x̄)² / n)* for the population standard deviation, or with denominator *n - 1* for the sample standard deviation. The SEC specification at Higher level typically uses the population formula.
- **Correlation and line of best fit**: Scatter graphs with a positive correlation have points trending upward; negative correlation trends downward. The line of best fit minimises the sum of squared vertical distances from each point to the line. Use the line to estimate values, but always state the limitation: "this is an estimate, not a prediction."
- **The normal distribution**: Continuous probability distribution with a bell shape. Approximately 68% of data within one standard deviation of the mean, 95% within two, 99.7% within three. Standardised scores (*z = (x - μ) / σ*) allow comparison across distributions.
- **Tree diagrams for two-stage probability**: Branch probabilities multiply along the branches; outcome probabilities are found at the end of each branch. For "without replacement" problems, the second-branch probability changes based on the first outcome.

#### Systematic drill schedule

A four-week Statistics and Probability pass before mocks:

- **Week 1**: Frequency tables, bar charts, histograms - 8 items per day, mixing categorical and continuous data. Force the table-before-the-graph discipline.
- **Week 2**: Averages and spread - mean, median, mode, range, IQR. 8 items per day, mixing raw data, grouped data, and "interpret the five-number summary" forms.
- **Week 3**: Probability - listing sample spaces, single-event probability, two-stage experiments with and without replacement. 8 items per day. Use tree diagrams for any problem with two stages.
- **Week 4**: Extended-response data handling - 4 items per sitting, with full marks for the table, the graph, the calculation, and the interpretation sentence. Time-bound each item and review against the SEC mark scheme.

## Continue your study

- **[View this topic in your Junior Cycle roadmap](/roadmap/?exam=junior-cycle&duration=1mo)** — see where "Statistics and Probability" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=junior-cycle&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Junior Cycle exam overview](/exams/junior-cycle/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/junior-cycle/jc-mathematics/)** — browse sibling topics in this subject

