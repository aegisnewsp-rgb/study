---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-025
topicName: Statistics
weight: 3
country: india
generated: "2026-03-29T05:06:58"
lastUpdated: "2026-06-19"
---

# Statistics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Statistics** is the branch of mathematics that organises, summarises, and interprets numerical data. The two pillars tested in CUET UG are **measures of central tendency** (Mean, Median, Mode) and **measures of dispersion** (Range, Mean Deviation, Variance, Standard Deviation).

Key formulas to memorise:

- Mean (grouped): **x̄ = Σfᵢxᵢ / Σfᵢ**
- Median (grouped): **l + [(N/2 − cf) / f] × h**
- Mode (grouped): **l + [(f₁ − f₀) / (2f₁ − f₀ − f₂)] × h**
- Variance: **σ² = Σfᵢ(xᵢ − x̄)² / Σfᵢ**
- Empirical relation: **Mode ≈ 3 Median − 2 Mean**

High-yield exam pointers: (1) For grouped data, always use class marks xᵢ as the representative value, (2) Median is the value of (N/2)-th observation and falls in the cumulative frequency class where cumulative frequency first exceeds N/2, (3) Mode lies in the modal class — the class with the highest frequency.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Central Tendency for Grouped Data

For a frequency distribution with class marks xᵢ and frequencies fᵢ, the arithmetic mean is computed as the weighted average x̄ = Σfᵢxᵢ / Σfᵢ. When class marks are large, the **assumed mean method** simplifies calculation: x̄ = a + (Σfᵢdᵢ / Σfᵢ), where dᵢ = xᵢ − a and a is a chosen assumed mean (often the middle class mark).

The **median** of grouped data is found using l + [(N/2 − cf) / f] × h, where l is the lower boundary of the median class, h is the class width, f is the frequency of the median class, cf is the cumulative frequency of the class preceding the median class, and N = Σfᵢ. The median class is identified as the first class whose cumulative frequency is at least N/2.

The **mode** of grouped data uses l + [(f₁ − f₀) / (2f₁ − f₀ − f₂)] × h, where f₁ is the frequency of the modal class, f₀ and f₂ are frequencies of the classes immediately before and after, l is the lower boundary of the modal class, and h is the class width.

#### Measures of Dispersion

The **range** is the simplest dispersion measure: maximum − minimum. The **variance** σ² = Σfᵢ(xᵢ − x̄)² / Σfᵢ quantifies the average squared deviation from the mean, and the **standard deviation** σ = √σ² restores the original unit. The **mean deviation about the mean** is (1/N) Σfᵢ|xᵢ − x̄|.

#### Graphical Representations

| Plot | Purpose |
|---|---|
| Histogram | Shows frequency of class intervals as adjacent bars |
| Frequency polygon | Line graph joining midpoints of histogram tops |
| Less-than ogive | Plot of cumulative frequency against upper class boundaries |
| More-than ogive | Plot of cumulative frequency against lower class boundaries |

#### Exam Question Patterns

CUET UG typically tests: (1) direct computation of mean/median/mode from a given frequency table, (2) finding the missing frequency when mean is given, and (3) calculating standard deviation and interpreting its magnitude relative to the mean.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Step Deviation Method and Edge Cases

When class marks xᵢ are large and unevenly spaced, the **step deviation method** further reduces arithmetic load: x̄ = a + [(Σfᵢuᵢ / Σfᵢ) × h], where uᵢ = (xᵢ − a) / h and h is the common class width. This is the fastest manual route for CUET numericals involving big numbers.

#### When to Use Which Measure

**Mean** is preferred for symmetric distributions without outliers. **Median** is robust against extreme values and is used for skewed data or income-like distributions. **Mode** suits categorical or discrete data with a clear peak. Examiners frequently test this selection logic.

#### Empirical Relationship

For moderately skewed unimodal distributions, **Mode ≈ 3 Median − 2 Mean** holds approximately. CUET sometimes presents three values and asks which cannot simultaneously represent a dataset — use this relation to check consistency.

#### Common Mistakes

- Using class boundaries (e.g., 10, 20) instead of class marks (e.g., 15) when computing the mean.
- For continuous data, converting class intervals to proper continuous boundaries (0.5–10.5, 10.5–20.5) before applying median or mode formulas.
- Confusing "less than" and "more than" ogives: the median is the x-coordinate of their intersection point.
- Forgetting that the modal class is identified by maximum frequency, not the largest class mark.

#### Connections to Adjacent Topics

Standard deviation links directly to **Probability** through Chebyshev's inequality and to **Coordinate Geometry** when regression lines are introduced. Histograms connect to **Integration** since frequency density × class width = relative frequency, and the total area of a histogram equals 1 for relative frequencies.

#### Practice Prompts

1. The mean of 10 observations is 42. If one observation 56 is replaced by 36, find the new mean and the change in standard deviation's numerator.
2. For data with classes 10–20, 20–30, 30–40, 40–50 having frequencies 5, 12, 18, 7 respectively, compute the median, mode, and verify the empirical relation Mode ≈ 3 Median − 2 Mean.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
