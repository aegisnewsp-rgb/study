---
exam: junior-cycle
examName: "Junior Cycle"
subject: jc-mathematics
subjectName: "Mathematics"
topic: jc-math-015
topicName: "Statistical Description and Graphics"
weight: 3
country: ireland
generated: "2026-10-17T09:00:00Z"
lastUpdated: "2026-10-17"
---

# Statistical Description and Graphics — Junior Cycle Mathematics Notes

This half of the Junior Cycle Statistics and Probability strand is about honesty: choosing the summary that fits the data, and choosing the graphic that shows the data without distorting it. The specification treats both as judgement, not calculation, and asks you to justify the choice.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Choosing the average

| Average | Best for | Weakness |
|---|---|---|
| **Mean** | Symmetric data with no outliers; when you need to do further calculation | Dragged around by an extreme value |
| **Median** | Skewed data, outliers, ordinal categories | Does not use the full data set |
| **Modal value / category** | Non-numeric data | May not exist, or may not be unique |

**Why the mean fails on skewed data.** Income distributions, waiting times and exam scores are all right-skewed: a few large values stretch the tail. In those, the mean sits above the typical case and the median describes it better. State this with an example rather than asserting it — the exam gives a data set and asks you to justify your choice.

**Outliers.** Identify them by inspection: a value far outside the range of the rest. Do not silently remove one. State whether it is an error or a genuine observation, and explain what your choice of average does about it.


#### Spread

**Range** is the simplest and the weakest — it uses only two values and is dominated by outliers.

**Interquartile range** is the difference between the upper and lower quartiles, so it describes the middle half of the data and ignores extremes entirely. This is why it pairs with the median.

**Standard deviation** uses every value and measures typical distance from the mean. It is the right choice for symmetric data. Compute it with the calculator's statistics function, then say which — the sample or population version — your data set is.

### 🟡 Standard — Regular Study (2d–2mo)

#### Reading and building a data display

Four displays, each with a job and a misuse.

**Bar chart** — for categorical data. **Equal bar widths.** Unequal widths misrepresent the totals, and that is a named error.

**Pie chart** — for showing parts of a whole. **The angles must sum to 360°**, and the calculation of each angle from its percentage is a marked step.

**Histogram** — for continuous data grouped into intervals. The bars touch, because the intervals are continuous. **Equal bar widths are essential**; if they are not, the area no longer represents frequency.

**Frequency density** appears whenever class widths differ. The rule is that **frequency = density × class width**, and the area of each bar is the frequency. Reading bar *heights* as frequencies when the widths differ is one of the most heavily penalised errors in this block.

**Frequency polygon** joins the midpoints of the tops of a histogram's bars.

**Stem-and-leaf** preserves the original data values, which is its advantage: a candidate can recover the actual data from the display, and the shape and outliers are visible.


#### Choosing the display honestly

This is the outcome the specification emphasises. The question is not "which is prettiest" but "which shows the distribution truthfully".

- **Comparing across groups** — bar chart or multiple stem-and-leaf plots side by side.
- **Showing the shape of a distribution** — histogram, boxplot or stem-and-leaf.
- **Showing parts of a whole** — pie chart.
- **Showing the spread and any outliers** — boxplot, because the box marks the quartiles and the whiskers mark the range without being dominated by the extremes.

A display that can hide data is the wrong choice when the task is to reveal it. A pie chart with thirty slices cannot be read, whatever the topic.


#### Boxplot

Draw from the five-number summary: minimum, lower quartile, median, upper quartile, maximum. Mark the box from Q1 to Q3 with a line at the median, and whiskers to the minimum and the maximum. The box covers the middle half of the data, which makes it comparable across groups even when the totals are not.

### 🔴 Deep Dive — Mastery & Edge Cases (3mo–2yr)

#### Where marks are lost

1. **Frequency density misread as frequency.** The area is the frequency, not the height.
2. **Unequal-width histogram bars drawn with equal widths**, or equal data intervals drawn with unequal bars. Either breaks the area convention.
3. **Pie chart angles that do not sum to 360°.**
4. **Mean quoted for a skewed data set** with no comment.
5. **Outlier deleted** without saying so.
6. **Display chosen without a reason**, where the question asked you to justify.

> Confirm the live assessment arrangements and any in-year specification changes on curriculumonline.ie before committing a revision plan.

## Self-check

1. A class of ten scores has one result of 2 and the rest between 60 and 80. Which average do you report, and why? *(The median. The single value of 2 pulls the mean well below anything the other nine students achieved, so the mean would not describe the typical score. Say that explicitly — the justification is the assessed part.)*
2. A histogram has bars of width 2, 2, 2 and 6. What does each bar's height tell you? *(Only if the widths were all equal would height mean frequency. Here you must use frequency = density × class width, so the tall-narrow bars can hold fewer observations than the short-wide one. Reading heights directly gives the wrong answer.)*
3. A pie chart shows 40%, 35% and 25%. What are the angles? *(144°, 126° and 90°. They must total 360°, and stating that check is part of the answer.)*
4. Why is a boxplot better than a bar chart for comparing two groups' spread? *(The bar chart shows totals; the boxplot shows the quartiles and the range, so it compares where each group sits and how tightly it is clustered, and it is not distorted by a single extreme value.)*
5. A stem-and-leaf plot is given and the question asks for the mode. What advantage does the display have here? *(It preserves the original values rather than grouping them, so the individual data points can be read off directly and counted. A histogram would group them into intervals and could hide a repeated value.)*

## Sources

- NCCA Junior Cycle Mathematics Specification (Statistics and Probability strand): https://curriculumonline.ie/getmedia/6a7f1ff5-9b9e-4d71-8e1f-6d4f932191db/JC_Mathematics_Specification.pdf
- Expectations for Students, by strand: https://www.curriculumonline.ie/junior-cycle/junior-cycle-subjects/mathematics/expectations-for-students/

Confirm the live assessment arrangements and any in-year specification changes on curriculumonline.ie before committing a revision plan.

## Continue your study

- **[View this topic in your Junior Cycle roadmap](/roadmap/?exam=junior-cycle&duration=1mo)** — see where "Statistical Description and Graphics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=junior-cycle&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Junior Cycle exam overview](/exams/junior-cycle/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/junior-cycle/jc-mathematics/)** — browse sibling topics in this subject
