---
exam: ncea-level-3
examName: NCEA Level 3 (Mathematics / Calculus)
subject: mathematics-l3
subjectName: Mathematics (Calculus)
topic: mathl3-009
topicName: "Investigate bivariate measurement data (91581)"
weight: 4
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Investigate bivariate measurement data (91581) — NCEA Level 3 Calculus Notes

Achievement Standard 91581 carries 4 credits and deepens the Level 2 work on bivariate data (91264). It tests correlation, linear and non-linear regression, residuals, transformations to linearise data, and interpretation of models in context. This is the Level 3 progression that introduces non-linear regression and data transformations.

> Verify the live achievement standard document on https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **4 credits**, internally assessed by the school, NZQA moderated.
- Topics: scatter plots; Pearson's r; linear regression (least squares); residuals; non-linear regression (logarithmic, exponential, power); data transformations (logarithmic, reciprocal, square root) to linearise non-linear data.
- **Merit** requires relational thinking — interpreting correlation and regression in context, identifying appropriate transformations.
- **Excellence** requires extended abstract thinking — comparing models, justifying transformation choice, reflecting on the validity of the conclusions.

#### Examiner traps

- Confusing correlation and causation.
- Using linear regression on data that is clearly non-linear.
- Misidentifying the appropriate transformation (logarithmic for exponential growth; reciprocal for inverse proportion).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Linear regression

The least-squares regression line y = a + bx minimises the sum of squared residuals.

- Slope: b = r × (s_y / s_x), where r is the correlation coefficient.
- Intercept: a = ȳ − b × x̄.

Calculations are typically done with a calculator or spreadsheet.

#### Pearson's r

r = Σ((x − x̄)(y − ȳ)) / √(Σ(x − x̄)² × Σ(y − ȳ)²)

r ranges from −1 to +1. The closer |r| is to 1, the stronger the linear relationship.

r does not measure non-linear relationships. Two variables can have r = 0 but a strong non-linear relationship.

#### Residual analysis

residual = y_observed − y_predicted

A good linear model has:

- Residuals scattered randomly around zero.
- Roughly constant spread across the range of x (no funnel shape).
- No pattern in the residual plot.

Patterns indicate model inadequacy:
- Curved residuals → non-linear model needed.
- Funnel shape → variance changes with x (consider transformation).
- Autocorrelation → time series issue (if x is time).

#### Non-linear regression

Common non-linear forms at Level 3:

- **Exponential:** y = a · b^x. Transform by taking ln: ln y = ln a + x ln b.
- **Power:** y = a · x^b. Transform by taking ln: ln y = ln a + b ln x.
- **Logarithmic:** y = a + b ln x. Transform x to ln x.

After transformation, the relationship is linear in the transformed variables. Apply linear regression, then back-transform to get the original model.

#### Data transformations

| Original relationship | Transformation | Linearised relationship |
|---|---|---|
| Exponential y = a · b^x | ln y = ln a + x ln b | ln y vs x |
| Power y = a · x^b | ln y = ln a + b ln x | ln y vs ln x |
| Inverse y = a + b/x | y vs 1/x | y vs 1/x |
| Logarithmic y = a + b ln x | y vs ln x | y vs ln x |
| Square root y = a + b√x | y vs √x | y vs √x |

#### Worked example: exponential growth

Suppose (x, y) data shows y growing exponentially. Take ln of each y value, plot ln y against x. If the plot is linear, fit a line. The slope is ln b and the intercept is ln a. Back-transform: y = e^(intercept) · e^(slope · x) = a · b^x.

#### Worked example: power law

Suppose y = a · x^b. Take ln of both x and y: ln y = ln a + b ln x. Plot ln y against ln x. The slope of the line gives b, and the intercept gives ln a.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why transformations work

The exponential y = a · b^x grows by a constant factor b for each unit increase in x. Taking ln converts the multiplicative structure to additive: ln y = ln a + x ln b. So ln y is linear in x.

Similarly, the power y = a · x^b scales as a power of x. Taking ln of both sides gives ln y = ln a + b ln x. So ln y is linear in ln x.

The transformation succeeds when the residual plot of the transformed data is random and roughly constant in spread.

#### Coefficient of determination r²

r² is the proportion of variance in y explained by the linear model on x. r² = 1 means perfect prediction; r² = 0 means no predictive power.

r² is the standard "goodness of fit" measure for linear regression.

#### Comparing models

When several candidate models are available (e.g., linear, exponential, power), compare r² or the residual standard error.

- Higher r² → better fit (in terms of variance explained).
- Lower residual standard error → better fit (in terms of average prediction error).

For Excellence, compare models and explain why one is preferred over another (e.g., "the exponential model has r² = 0.97, much higher than the linear r² = 0.72, suggesting exponential growth is more appropriate for this data").

#### Common misconceptions (and the correction)

- "High r means causation." No — correlation is not causation.
- "Linear regression works for any data." No — it only works well when the relationship is linear.
- "Transformations change the meaning of the data." No — they change the scale of the analysis but the underlying data is unchanged.
- "r² close to 1 means the model is correct." No — r² close to 1 means the model fits the data well; it does not mean the model is causally correct.

#### Specification reference

This achievement standard is internally assessed by the school. NZQA publishes the achievement standard document, clarifications, and exemplars on ncea.education.govt.nz. Re-check the live version of 91581 before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 3 Mathematics achievement standards, https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics. Awarding body: NZQA.*
