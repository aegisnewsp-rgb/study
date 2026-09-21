---
exam: ncea-level-3
examName: NCEA Level 3 (Mathematics / Calculus)
subject: mathematics-l3
subjectName: Mathematics (Calculus)
topic: mathl3-008
topicName: "Investigate time series data (91580)"
weight: 4
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Investigate time series data (91580) — NCEA Level 3 Calculus Notes

Achievement Standard 91580 carries 4 credits and tests time series analysis: trend, seasonal, cyclic, and irregular components; moving averages; seasonal indices; deseasonalisation; forecasting; and residual analysis. Time series is the foundation of forecasting in economics, business, climate science, and many other fields.

> Verify the live achievement standard document on https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **4 credits**, internally assessed by the school, NZQA moderated.
- Topics: time series components (trend, seasonal, cyclic, irregular); moving averages (centred, trailing); seasonal indices; deseasonalised data; forecasting; residual analysis.
- **Merit** requires relational thinking — interpreting seasonal indices, making forecasts with uncertainty.
- **Excellence** requires extended abstract thinking — combining trend and seasonal components, justifying method choice.

#### Examiner traps

- Using the wrong type of moving average (centred vs trailing) for the seasonality of the data.
- Misinterpreting seasonal indices (an index of 1.2 means 20% above average for that season).
- Confusing cyclic and seasonal components (cyclic has no fixed period; seasonal does).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Components of a time series

A time series y(t) can be decomposed into:

- **Trend (T):** the long-term direction (up, down, flat).
- **Seasonal (S):** regular fluctuations with a fixed period (e.g., quarterly sales, monthly rainfall).
- **Cyclic (C):** longer-term fluctuations with no fixed period (e.g., business cycles).
- **Irregular (I):** random variation not explained by the other components.

Two common decomposition models:

- **Additive:** y = T + S + C + I.
- **Multiplicative:** y = T × S × C × I.

The multiplicative model is more common when the seasonal variation scales with the trend.

#### Moving averages

A moving average smooths out short-term fluctuations to reveal the trend.

**Centred moving average:** at each time point, average the surrounding values (typically equal numbers before and after).

**Trailing moving average:** at each time point, average the previous k values (no future values used).

The order of the moving average matches the seasonality: a 4-period moving average for quarterly data, a 12-period moving average for monthly data, etc.

#### Seasonal indices

A seasonal index measures how much a season deviates from the average. For a quarterly series:

- Compute the centred 4-period moving average at each time point.
- For each quarter, compute the ratio (or difference, for additive) of the actual value to the moving average.
- Average the ratios for each quarter across years.
- Normalise so the four seasonal indices sum to 4 (multiplicative) or 0 (additive).

Interpretation:

- Index = 1.0: average for the season.
- Index = 1.2: 20% above average for the season.
- Index = 0.8: 20% below average for the season.

#### Deseasonalisation

Deseasonalised data = actual / seasonal index (multiplicative) or actual − seasonal index (additive).

The deseasonalised series reveals the trend (and cyclic component) without the seasonal fluctuations.

#### Forecasting

To forecast a future time point:

1. Deseasonalise the historical data.
2. Fit a trend line (linear or other) to the deseasonalised data.
3. Project the trend to the future time point.
4. Reseasonalise: forecast = trend × seasonal index.

A prediction interval (or confidence interval) acknowledges the uncertainty.

#### Residual analysis

The residual is the difference between the actual value and the model prediction. Patterns in residuals indicate model inadequacy:

- Linear trend but curved residuals → non-linear trend needed.
- Constant variance but increasing residuals → multiplicative model might be better.
- Autocorrelated residuals → additional terms needed.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Choosing between additive and multiplicative

- **Additive** is appropriate when the seasonal variation is roughly constant over time.
- **Multiplicative** is appropriate when the seasonal variation scales with the trend (e.g., a 20% summer peak in both low and high years).

To decide, plot the data. If the seasonal swings grow with the trend, use multiplicative. If they stay roughly constant, use additive.

#### Forecasting with confidence

A forecast should always include an estimate of uncertainty:

- 95% prediction interval: forecast ± 1.96 × SE.
- SE is estimated from the residuals of the model.

Excellence-level forecasts include the prediction interval and acknowledge the assumptions (trend continues, seasonal pattern repeats).

#### Time series in the wild

- **Quarterly GDP** — trend (long-term growth) + seasonal (e.g., Q4 holiday bump) + cyclic (recessions) + irregular (random shocks).
- **Monthly rainfall** — trend (climate change) + seasonal (winter vs summer) + irregular (year-to-year variability).
- **Daily share price** — generally no seasonal pattern; trend + irregular (random walk-like behaviour).

#### Common misconceptions (and the correction)

- "Trend always goes up." No — it can go up, down, or be flat.
- "Seasonal and cyclic are the same." No — seasonal has a fixed period; cyclic does not.
- "The forecast is exact." No — it has uncertainty, captured in a prediction interval.
- "Deseasonalised data has no seasonal variation." Correct — by construction.

#### Specification reference

This achievement standard is internally assessed by the school. NZQA publishes the achievement standard document, clarifications, and exemplars on ncea.education.govt.nz. Re-check the live version of 91580 before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 3 Mathematics achievement standards, https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics. Awarding body: NZQA.*
