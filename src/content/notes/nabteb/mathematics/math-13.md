---




exam: nabteb
examName: NABTEB
subject: mathematics
subjectName: Mathematics
topic: math-13
topicName: "Statistics: Mean, Median, Mode"
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.553117"
lastUpdated: "2026-07-25"
diagramPrompt: "Mathematical diagram showing Statistics: Mean, Median, Mode concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Statistics: Mean, Median, Mode

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

The **mean** is the arithmetic average of all observations; the **median** is the middle value once data are ranked; the **mode** is the most frequently occurring value. These three **measures of central tendency** condense a dataset into a single representative number. NABTEB Mathematics tests them in both multiple-choice and theory sections, in standard papers through a 5–10 mark short calculation.

- **Mean (raw):** x̄ = Σxᵢ / n — sum every value, then divide by the count.
- **Median (raw, odd n):** value at position (n + 1) / 2 after ordering ascending.
- **Median (raw, even n):** average of the two middle values at positions n/2 and n/2 + 1.
- **Mode:** value with the highest frequency; report as bimodal if two values tie.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Raw vs Grouped Data

**Raw (ungrouped) data** are individual observations listed one by one. **Grouped data** are organised into class intervals with frequencies. NABTEB in many papers gives a frequency table and asks for the mean using **class midpoints**, where midpoint = (lower limit + upper limit) / 2. Misusing limits in place of midpoints is the single most common error reported in marking schemes.

#### Choosing the Right Measure

The mean is preferred for symmetric, outlier-free distributions because it uses every value. The median suits **skewed data** because it is positional and resistant to extremes. The mode suits **categorical/nominal data** such as "most-preferred brand", where arithmetic is meaningless.

| Measure | Best for | Sensitive to outliers? | Formula (raw) |
| --- | --- | --- | --- |
| Mean | Symmetric numeric data | Yes | x̄ = Σxᵢ / n |
| Median | Skewed numeric data | No | Middle rank value |
| Mode | Categorical / nominal data | No | Most frequent value |

#### Worked Grouped-Data Mean

Given frequencies fᵢ with midpoints xᵢ, the grouped mean is x̄ = Σfᵢxᵢ / Σfᵢ. Always compute Σfᵢ first as a sanity check — it must equal the total sample size n stated in the question.

- NABTEB in many papers pairs this topic with **cumulative frequency** and an ogive drawing question.
- The empirical check Mode ≈ 3·Median − 2·Mean is sometimes tested as a true/false item.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Grouped Median and Mode Formulas

For grouped data the median is estimated by **interpolation** within the **median class** — the first class whose cumulative frequency is ≥ n/2. The formula reads Median = L + [((n/2) − F) / f] × h, where L is the lower class boundary, F is the cumulative frequency before the median class, f is the median-class frequency, and h is the class width.

The grouped mode uses the **modal class** (highest frequency) and the classes immediately before and after it: Mode = L + [(f₁ − f₀) / ((f₁ − f₀) + (f₁ − f₂))] × h. When f₀ or f₂ is missing (modal class is the first or last class), treat that frequency as 0.

#### Skewness and Empirical Relationship

For moderately skewed unimodal data the empirical identity Mode ≈ 3·Median − 2·Mean lets you cross-check answers. If positive skew dominates, ordering is mean > median > mode; for negative skew, mean < median < mode. Symmetric distributions make all three equal.

#### Practice Prompts

1. A grouped frequency table has classes 0–9, 10–19, 20–29, 30–39 with frequencies 4, 9, 11, 6. Compute the mean and the grouped median.
2. Scores 3, 5, 7, 5, 9, 5, 11 are recorded. Identify the mode, then decide whether the mean or median better represents a typical score.

## Continue your study

- **[View this topic in your NABTEB roadmap](/roadmap/?exam=nabteb&duration=1mo)** — see where "Statistics: Mean, Median, Mode" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=nabteb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NABTEB exam overview](/exams/nabteb/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/nabteb/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
