---
exam: qimiyah
examName: Qimiyah Exam (Saudi)
subject: islamic-studies
subjectName: General Studies
topic: islami-006
topicName: Measures of Central Tendency
weight: 3
country: saudi
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Measures of Central Tendency

### 🟢 Lite — Quick Review (1h–1d)

> One fact to carry into the exam hall: three numbers compete for the title of "typical value", and the trick is knowing when each one wins.

A dataset has a single most representative score. For the **Qimiyah General Studies** paper this topic is worth 3% and shows up as a quick numerical item. Master three formulas, recognise the table format, and the marks are yours.

| Measure | What it captures | Formula (ungrouped) | Best used when |
|---|---|---|---|
| Mean | Arithmetic average | x̄ = Σxᵢ / n | Symmetric, no outliers |
| Median | Middle rank | Position (n+1)/2 after ordering | Skewed or ordinal data |
| Mode | Most frequent value | Count occurrences | Nominal / categorical data |

- **Mean** (x̄, unitless or same units as xᵢ, dimension [x]): uses every observation; one extreme value pulls it.
- **Median**: ignores magnitudes; depends only on rank position (n+1)/2.
- **Mode**: the value with highest frequency; the only measure valid for nominal categories.

> 💡 **High-Yield Memory Hook — "My MMM brother":** **M**ean = **M**ath (averaging), **M**edian = **M**iddle position, **M**ode = **M**ost frequent. Same first letter, three different jobs, three different formulas.

### 🟡 Standard — Regular Study (2d–2mo)

> The arithmetic mean is the workhorse; the median and mode are the specialists. Pick the wrong specialist and the answer misleads the reader, even when every arithmetic step is correct.

#### Definitions and Data Sensitivity

The **arithmetic mean** of n observations xᵢ is x̄ = (Σxᵢ) / n, where each xᵢ carries the units of the variable (e.g. cm, °C, SAR) and n is dimensionless. Because every value enters the sum, a single outlier of 200 among values clustered at 20–30 yanks x̄ upward and gives a "typical" value that nobody in the dataset actually holds.

The **median** is the middle value after sorting. With n odd, position (n+1)/2 gives the median directly. With n even, average the n/2-th and (n/2 + 1)-th values. Median is rank-based, so the 200 outlier mentioned above cannot move it.

The **mode** is the value appearing most often. A distribution may be **unimodal**, **bimodal**, or **multimodal**. Mode is the only measure usable for nominal categories such as blood group or favourite subject, where arithmetic has no meaning.

#### Formula Matrix for Grouped Data

Grouped data replaces individual values with class midpoints mᵢ = (lower limit + upper limit) / 2, so every formula below produces an **estimate** rather than an exact figure. Estimates tighten when class width h shrinks.

| Measure | Grouped formula | Variables and units | Result unit |
|---|---|---|---|
| Mean | x̄ = (Σfᵢmᵢ) / (Σfᵢ) | fᵢ = frequency (count, dimensionless), mᵢ = class midpoint (same unit as variable), Σfᵢ = n | Same unit as variable |
| Median | L + [(n/2 − F) / f] × h | L = lower class boundary of median class, F = cumulative frequency before median class, f = frequency of median class, h = class width | Same unit as variable |
| Mode | L + [(f₁ − f₀) / ((f₁ − f₀) + (f₁ − f₂))] × h | f₁ = modal-class frequency, f₀ = preceding class frequency, f₂ = succeeding class frequency, L and h as above | Same unit as variable |

#### Conceptual Comparison

| Property | Mean | Median | Mode |
|---|---|---|---|
| Data type required | Interval / ratio | Ordinal and above | Nominal and above |
| Uses every value? | Yes | No (ranks only) | No (frequency only) |
| Resistant to outliers? | No | Yes | Yes |
| Always defined? | Yes | Yes | Not for unique values |

#### Worked Numerical Question

Consider the continuous frequency table below for marks scored by 50 candidates.

| Class | 10–20 | 20–30 | 30–40 | 40–50 | 50–60 |
|---|---|---|---|---|---|
| Frequency | 4 | 10 | 18 | 12 | 6 |

Find the median and identify the modal class.

#### Resolution

*Step 1 — Build cumulative frequencies.* Adding 4, 10, 18, 12, 6 gives n = 50; cumulative totals are 4, 14, 32, 44, 50.

*Step 2 — Locate n/2.* n/2 = 25. The cumulative frequency first reaches or exceeds 25 in the 30–40 class, so the **median class is 30–40**.

*Step 3 — Apply the grouped median formula.* For continuous classes, boundaries are 29.5 and 39.5; class width h = 10. Lower boundary L = 29.5; F = 14 (cumulative frequency before the median class); f = 18.

Median = 29.5 + [(25 − 14) / 18] × 10 = 29.5 + (11/18) × 10 ≈ 29.5 + 6.11 = **35.61 marks**.

*Step 4 — Identify the modal class.* Highest frequency is 18 in class 30–40, so the modal class is also **30–40**.

> ⚠️ **Examiner Trap:** Students frequently read "30–40" and use limits 30 and 40 in place of boundaries 29.5 and 39.5. The 0.5 shift on either side can move the median by almost one full mark. Always convert continuous class limits to class boundaries before applying the interpolation formula.

#### Karl Pearson's Empirical Check

For a moderately skewed unimodal distribution, **Mode ≈ 3·Median − 2·Mean**. Substituting the values above once the mean is computed provides a quick self-check; a large discrepancy flags an arithmetic slip or a poor choice of class width.

### 🔴 Extended — Deep Study (3mo+)

> Edge cases decide whether the 3% becomes 3 marks or 0.

#### Boundary Conditions and Skewness

Skewness is the silent variable in every central-tendency question. For a **right-skewed** (positively skewed) distribution the ordering is **Mode < Median < Mean**. For a **left-skewed** (negatively skewed) distribution the ordering flips: **Mean < Median < Mode**. A symmetric distribution collapses all three to the same point. Karl Pearson's coefficient of skewness, (Mean − Mode) / standard deviation, quantifies this; values close to 0 indicate near-symmetry.

#### Estimation Accuracy in Grouped Data

Grouped formulas are not exact. The mean x̄ = (Σfᵢmᵢ) / (Σfᵢ) treats every observation in a class as though it sits exactly at the midpoint. The error shrinks as class width h shrinks, so a 30-class table is more accurate than a 5-class table even when both describe the same underlying data.

The median formula assumes the data inside the median class are uniformly distributed. If the actual distribution inside that class is U-shaped or J-shaped, the interpolated median drifts from the true value by an amount roughly proportional to (h² / 12).

#### Adjacent Topics

- **Measures of Dispersion**: range, variance, standard deviation, and interquartile range complement central tendency. Two datasets can share the same mean yet differ wildly in spread.
- **Percentiles and Quartiles**: Q₂ is the median; Q₁ and Q₃ use the same cumulative-frequency interpolation as the median, but at positions n/4 and 3n/4.
- **Open-ended Classes**: classes such as "60 and above" have no defined upper limit; only median and mode are computable from the visible portion, and the mean cannot be determined without an assumption about the open tail.

#### Advanced Traps and Exceptions

1. **Open-ended upper class.** A frequency table ending with "≥ 50" has no upper boundary, so the modal class interpolation needs an assumed f₂ = 0 or an external estimate.
2. **Discrete vs continuous boundaries.** Discrete classes like "1–3, 4–6" share no gap, so boundaries are written 0.5, 3.5, 6.5; forgetting this double-counts or skips points.
3. **Multimodal distributions.** Mode is reported as the *smallest* modal value in many textbooks, but examiners occasionally ask for *all* modes; read the wording.
4. **Empty median class check.** A class with frequency zero still occupies a rank interval; skipping it inflates the interpolated median.
5. **Sample vs population mean.** The symbol x̄ denotes a sample mean with denominator n; the population mean μ uses denominator N, and Σxᵢ is divided by N not n.

#### Two Practice Prompts

1. Construct a 5-class frequency table from 40 raw scores of your choice, then compute the mean, median, and mode using the grouped formulas and verify Karl Pearson's empirical relation.
2. Take a dataset with a clear outlier (for example, [12, 14, 15, 16, 17, 95]) and compute mean, median, and mode. Note how the outlier moves x̄ but leaves the median untouched, then write a one-paragraph justification for which measure a teacher should quote when reporting the "average" score.

## Continue your study

- **[View this topic in your Qimiyah Exam (Saudi) roadmap](/roadmap/?exam=qimiyah&duration=1mo)** — see where "Measures of Central Tendency" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=qimiyah&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Qimiyah Exam (Saudi) exam overview](/exams/qimiyah/)** — pattern, eligibility, and syllabus
- **[All General Studies notes](/notes/qimiyah/islamic-studies/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
