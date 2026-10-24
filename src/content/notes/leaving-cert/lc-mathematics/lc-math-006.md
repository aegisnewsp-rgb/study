---
exam: leaving-cert
examName: "Leaving Certificate (Established)"
subject: lc-mathematics
subjectName: "Mathematics"
topic: lc-math-006
topicName: "Descriptive Statistics, Sampling and Correlation"
weight: 3
country: ireland
generated: "2026-10-17T09:00:00Z"
lastUpdated: "2026-10-17"
diagramPrompt: "Educational diagram showing a choice flowchart for choosing a measure of centre and spread from a data set — mean versus median, standard deviation versus interquartile range — with a worked example of a skewed distribution, white background, exam-style illustration"
---

# Descriptive Statistics, Sampling and Correlation — Leaving Certificate (Established) Mathematics Notes

Sections 1.1 to 1.3 of the Leaving Certificate Mathematics syllabus cover the three moves that turn a pile of numbers into a statement you can defend: summarise a data set, decide whether the sample you took can stand for the population, and describe the relationship between two variables measured on the same subjects. Almost every question in this block carries two marks of method and one mark of interpretation, and the interpretation mark is the one candidates most often forfeit by writing a number where a sentence was asked for.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Choosing the right summary

The decision is driven by the shape of the data, not by habit.

| Situation | Centre | Spread |
|---|---|---|
| Symmetric, no extreme values | Mean | Standard deviation |
| Skewed, or with an outlier | Median | Interquartile range |
| Grouped data with class intervals | Estimate from midpoints | Estimate using class widths |
| Categorical data | Modal category | Range of frequencies or percentages |

Two traps account for most of the lost marks here.

**An outlier does not get deleted just because it is inconvenient.** If a question hands you a data set with one absurd value, the answer is usually to state both — the mean with and without, or to justify choosing the median — not to quietly remove it.

**Grouped data can only be estimated.** Class midpoints give an *estimate* of the mean. Say so. The examiner credit is for acknowledging the approximation.

### 🟡 Standard — Regular Study (2d–2mo)

#### The standard deviation

Computed by calculator in the exam, but you must be able to write the formula and show the substitution, because the mark is for the working.

The calculator's statistical function returns the value for the sample standard deviation. Know which one you are quoting and say which in your sentence — "the sample standard deviation is 4.2" and "the population standard deviation is 4.0" are different claims and one of them is wrong for your data set.

The interpretation sentence is the mark. Not "s = 4.2" but: *"the data typically lie about 4 marks either side of the mean."* Then, where the question allows it, one further clause: *"the spread is large relative to the mean, so individual results vary widely"* or *"the spread is small, so results are consistent."* A mark of interpretation without a judgement about whether the spread is *large or small for the context* usually stops short of the top credit.


#### Sampling

The syllabus names the main sampling methods. For each, the question is the same: **what bias does this method introduce?**

- **Simple random** — every member of the population has an equal chance. Cleanest, but impractical for large populations and vulnerable to under-coverage if the sampling frame is incomplete.
- **Systematic** — take every *n*th item from a list. Efficient; biased if the list has a periodic pattern aligned with *n*.
- **Stratified** — split the population into groups and sample proportionally from each. The most defensible, because it guarantees representation. The cost is needing accurate knowledge of the strata proportions in advance.
- **Opportunity / convenience** — whoever is available. Fast and cheap and biased towards whoever is most available, which in a school or workplace setting is systematically not representative.

Marks are awarded for naming the method and for stating the bias in terms of the population. "Stratified, and it guarantees that each group is represented in proportion to its size" is the shape of the answer that earns both marks. "Stratified is good" earns one.

### 🔴 Deep Dive — Mastery & Edge Cases (3mo–2yr)

#### Correlation and regression

The two are connected and the exam tests them as a pair.

**Correlation coefficient *r*** sits between −1 and +1. The sign gives direction; the magnitude gives strength. Report both. *r* = 0.85 and *r* = −0.85 are opposite relationships, and an answer giving only the magnitude has lost the direction mark.

Three cautions the syllabus expects you to be able to state:

1. Correlation is not causation. A strong *r* establishes association only.
2. Outliers distort *r* heavily. If the question supplies one, comment on it and consider recomputing.
3. Extrapolation is unreliable. Using a line of best fit beyond the range of the observed data is an extrapolation and should be labelled as such.

**Line of best fit** is drawn by eye on a scatter diagram, not calculated. Mark it at the centre of the cloud, not through individual points. Its gradient is the typical change in *y* per unit change in *x*. When you read a value off the line, be honest about the read: state it as an approximate value and quote the scale.

**Regression** of *y* on *x* is the calculated form, produced by the calculator's regression function, and is distinct from the line of best fit. Default to *y* on *x* unless the question says otherwise, and check the question's wording: "predict *y* when *x* is…" wants the regression line; "draw a line of best fit" wants the diagram.

## Self-check

1. A frequency distribution is right-skewed with one extreme value. Which two summaries and why? *(Median and interquartile range. Both are resistant to the extreme value, so they still describe the bulk of the data; the mean and standard deviation would be dragged toward the outlier and would misdescribe most of the set.)*
2. A question gives class intervals and asks for the mean. Can you state an exact value? *(No. Midpoint substitution gives an estimate only, and saying so is part of the answer.)*
3. A sampling frame is a numbered list of 900 households, and you take every 30th. What is the risk? *(The list may have a periodic structure — a street, a block, a building type recurring on a cycle of 30 — which would make every 30th entry systematically similar and bias the sample.)*
4. You compute *r* = −0.72. What three things does a full answer state? *(Negative sign, meaning the relationship is inverse as one variable rises the other falls; strength, here a reasonably strong linear association; and the caveat that association is not evidence of causation.)*
5. You are asked to predict a value outside the range of the scatter. What must your answer include? *(The prediction, and an explicit statement that it is an extrapolation and therefore unreliable, since the linear relationship has not been shown to hold there.)*

## Sources

- NCCA Leaving Certificate Mathematics syllabus, examination from 2015 (sections 1.1–1.3): https://curriculumonline.ie/getmedia/f6f2e822-2b0c-461e-bcd4-dfcde6decc0c/SCSEC25_Maths_syllabus_examination-2015_English.pdf
- NCCA Leaving Certificate Mathematics syllabus landing page: https://ncca.ie/en/resources/lc-mathematics-syllabus/

Confirm which levels assess each sub-section on the current papers before you weight your revision time.

## Continue your study

- **[View this topic in your Leaving Certificate (Established) roadmap](/roadmap/?exam=leaving-cert&duration=1mo)** — see where "Descriptive Statistics, Sampling and Correlation" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=leaving-cert&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Leaving Certificate (Established) exam overview](/exams/leaving-cert/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/leaving-cert/lc-mathematics/)** — browse sibling topics in this subject
