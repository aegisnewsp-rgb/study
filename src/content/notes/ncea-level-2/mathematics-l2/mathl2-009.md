---
exam: ncea-level-2
examName: NCEA Level 2 (Mathematics)
subject: mathematics-l2
subjectName: Mathematics
topic: mathl2-009
topicName: "Use statistical methods to make an inference (91264)"
weight: 4
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Use statistical methods to make an inference (91264) — NCEA Level 2 Mathematics Notes

Achievement Standard 91264 is the highest-credit internal standard in the NCEA Level 2 Mathematics statistics strand, carrying 4 credits. It tests bivariate data analysis: scatter plots, correlation, regression lines, residual analysis, and making an informal inference about a population from sample data. The content is the foundation for the formal inference work in Level 3 standard 91582.

> Verify the live achievement standard document on https://www.nzqa.govt.nz/ncea/assessment/search.do?level=02&query=mathematics before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **4 credits**, internally assessed by the school, NZQA moderated.
- Topics: bivariate data, scatter plots, correlation (Pearson's r), regression lines (least squares), residual analysis, informal inference about a population from a sample.
- **Merit** requires relational thinking — interpreting the correlation and regression in context, identifying patterns in residuals.
- **Excellence** requires extended abstract thinking — connecting the sample to the population, justifying the use of regression, reflecting on limitations.

#### Examiner traps

- Confusing correlation and causation — a strong correlation does not imply that one variable causes the other.
- Using the regression line to predict outside the data range (extrapolation) without checking the linearity assumption.
- Ignoring the residual plot — patterns in residuals indicate that the linear model is not appropriate.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Bivariate data

Bivariate data has two variables measured on the same individual (e.g., height and weight of each student, study time and exam score). The two variables are usually called the explanatory variable (x) and the response variable (y).

#### Scatter plots

A scatter plot shows the (x, y) pairs as points. The shape of the scatter gives a first impression of the relationship:

- Linear: points roughly along a straight line.
- Curvilinear: points along a curve.
- No relationship: points scattered randomly.
- Clusters: points grouped into clusters.

#### Correlation

The Pearson correlation coefficient r measures the strength and direction of a linear relationship. r ranges from −1 to +1:

- r = +1: perfect positive linear relationship.
- r = −1: perfect negative linear relationship.
- r = 0: no linear relationship.
- |r| close to 1: strong linear relationship.
- |r| close to 0: weak linear relationship.

The formula:

r = Σ((x − x̄)(y − ȳ)) / √(Σ(x − x̄)² × Σ(y − ȳ)²)

A calculator or spreadsheet will compute r quickly. At Level 2, students need to interpret r in context — "the value r = 0.87 indicates a strong positive linear relationship between study time and exam score."

#### Regression line

The least-squares regression line is the line that minimises the sum of squared vertical distances from each point to the line. The formula:

y = a + bx

where b = r × (s_y / s_x), and a = ȳ − b × x̄.

Again, a calculator or spreadsheet will compute the regression line quickly. The interpretation: for each unit increase in x, y increases by b units on average.

#### Residual analysis

A residual is the difference between the observed y and the predicted y (from the regression line):

residual = y_observed − y_predicted

If the linear model is appropriate, the residuals should be:

- Randomly scattered around zero.
- Roughly constant in spread (no funnel shape).
- Show no pattern when plotted against x or against the predicted values.

A pattern in the residual plot (e.g., a curve, a funnel) indicates that the linear model is not appropriate.

#### Informal inference

At Level 2, the inference is informal: use the sample to make a tentative claim about the population, but recognise the uncertainty.

"The sample of 100 Year 12 students had a mean study time of 4.2 hours per week. Assuming the sample is representative, we estimate the mean study time for the Year 12 population to be around 4.2 hours per week. The estimate is subject to sampling variability, and a different sample would likely give a slightly different value."

The move to formal inference (confidence intervals, hypothesis tests) happens in Level 3 standard 91582.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Correlation vs causation

A strong correlation between x and y does not imply that x causes y. Possible explanations for a correlation:

- x causes y.
- y causes x (reverse causation).
- A third variable z causes both x and y (confounding).
- Coincidence, especially with small samples.

The Excellence move is to recognise that a strong correlation is necessary but not sufficient for causation; experimental design (random assignment of x) is the standard way to establish causation.

#### The regression line and prediction

The regression line can be used to predict y for a given x. The prediction is most reliable for x values close to the centre of the data (where the regression line is well-constrained). Predictions for x values far from the centre (extrapolation) carry more uncertainty and assume that the linear relationship continues.

#### Influential points and outliers

A single outlier can dramatically change the regression line. Check:

- Does the point have an unusual x value (high leverage)?
- Is the residual much larger than for other points?
- Does removing the point change the regression line substantially?

If yes, the point is influential and should be examined (and possibly reported separately).

#### Common misconceptions (and the correction)

- "Correlation of 0.9 means x causes y." No — correlation does not imply causation.
- "Regression line always goes through (0, 0)." No — only if a = 0. The intercept a is usually not zero.
- "High r means the regression line is a good predictor." Not necessarily — check the residual plot to see if the linear assumption holds.
- "Predictions outside the data range are reliable." No — extrapolation assumes the linear relationship continues; this may not hold.

#### Specification reference

This achievement standard is internally assessed by the school. NZQA publishes the achievement standard document, clarifications, and exemplars on ncea.education.govt.nz. Re-check the live version of 91264 before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 2 Mathematics achievement standards, https://www.nzqa.govt.nz/ncea/assessment/search.do?level=02&query=mathematics. Awarding body: NZQA.*
