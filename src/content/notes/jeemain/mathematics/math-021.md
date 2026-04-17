---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-021
topicName: Statistics
weight: 3
country: india
generated: "2026-04-17T23:05:00.000000"
diagramPrompt: "Clean educational diagram showing Statistics data distribution with clear labels, white background, bar chart, exam-style illustration"





---
# Statistics

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

**Statistics** — Key Facts for JEE Main
Mean: average of data; for grouped data: ∑f_ix_i/∑f_i
Median: middle value when data is sorted; for grouped: L + [h/f](n/2 − c)
Mode: most frequent value; for grouped: L + [h/f](f₁ − f₀)/(2f₁ − f₀ − f₂)
Variance: σ² = ∑(x_i − x̄)²/n or ∑f_i(x_i − x̄)²/∑f_i for grouped
Standard deviation: σ = √variance
⚡ Exam tip: For grouped data mean, remember to multiply frequency by class mark (midpoint), not class boundaries!

---

### 🟡 Standard — Core Study
> Standard content for students with a few days to months.

**Statistics** — JEE Main Study Guide

**Ungrouped data:**
- Mean: x̄ = (∑x_i)/n
- Median: sort data; if n odd, middle; if n even, average of two middle values
- Mode: value with highest frequency

**Grouped data:**
- Class mark (midpoint): x_i = (upper + lower)/2
- Mean: x̄ = ∑f_i x_i / ∑f_i
- Assumed mean method: x̄ = A + ∑f_i d_i/∑f_i where d_i = x_i − A
- Step deviation method: x̄ = A + h·∑f_i u_i/∑f_i where u_i = (x_i − A)/h

**Median of grouped data:**
Median = L + [h/f](n/2 − c) where L = lower limit of median class, h = class width, f = frequency of median class, c = cumulative frequency before median class

**Mode of grouped data:**
Mode = L + [h/f](f₁ − f₀)/(2f₁ − f₀ − f₂) where L = lower limit of modal class, f₁ = frequency of modal class, f₀ = frequency before modal class, f₂ = frequency after modal class

**Variance:**
- Population variance: σ² = ∑(x_i − x̄)²/n
- Sample variance: s² = ∑(x_i − x̄)²/(n−1)
- For grouped: σ² = ∑f_i(x_i − x̄)²/∑f_i

**Standard deviation:**
σ = √[∑(x_i − x̄)²/n] = √[∑f_i(x_i − x̄)²/∑f_i]

**Combined mean:**
If two groups have means x̄₁, x̄₂ and sizes n₁, n₂: x̄ = (n₁x̄₁ + n₂x̄₂)/(n₁ + n₂)

**Coefficient of variation:**
CV = (σ/x̄) × 100%; used to compare variability of different datasets

**Range:**
Range = Maximum value − Minimum value

**Quartiles:**
Q₁ = value at position (n+1)/4; Q₃ = value at position 3(n+1)/4
Interquartile range = Q₃ − Q₁

- **Key formula:** Mean = ∑f_i x_i/∑f_i; Variance = ∑f_i(x_i − x̄)²/∑f_i
- **Common trap:** In assumed mean method, the deviation d_i = x_i − A must be calculated correctly — A is chosen as an assumed mean from class marks
- **Exam weight:** 1 question per year (4 marks); occasionally combined with probability

---

### 🔴 Extended — Deep Dive
> Comprehensive coverage for students on a longer study timeline.

**Statistics** — Comprehensive JEE Main Notes

**Effect of changes on mean and standard deviation:**
- Adding constant c to each value: mean increases by c, SD unchanged
- Multiplying each value by constant k: mean multiplies by k, SD multiplies by |k|
- Adding constant c to each value: variance unchanged

**Standard deviation shortcuts:**
σ² = (∑x_i²)/n − (x̄)² = (∑x_i²)/n − (∑x_i/n)²
For grouped: σ² = (∑f_i x_i²)/∑f_i − (x̄)²

**Mean deviation:**
MD = ∑|x_i − x̄|/n for ungrouped
MD about median = ∑|x_i − M|/n

**Quartile deviation:**
QD = (Q₃ − Q₁)/2
For grouped data, Q₁ and Q₃ can be found using cumulative frequency method

**Dispersion measures comparison:**
- Range: easiest but most affected by outliers
- Quartile deviation: good for skewed data
- Mean deviation: uses all values but not as good as SD for normal distribution
- Standard deviation: most commonly used; mathematically convenient (involves squared deviations)

**Skewness:**
Pearson coefficient of skewness = 3(x̄ − Mode)/σ
Also: 3(Mean − Median)/σ
- Skewness = 0: symmetric distribution
- Positive skewness: tail to the right (mode < median < mean typically)
- Negative skewness: tail to the left (mean < median < mode typically)

**Kurtosis:**
Measure of peakedness of distribution relative to normal distribution
Leptokurtic: more peaked than normal (γ₂ > 0)
Platykurtic: flatter than normal (γ₂ < 0)
Mesokurtic: normal (γ₂ = 0)

**Bivariate data:**
For paired observations (x_i, y_i):
- Covariance: cov(x, y) = ∑(x_i − x̄)(y_i − ȳ)/n
- Correlation coefficient: r = cov(x, y)/(σ_x·σ_y)
- r ranges from −1 to +1

**Regression lines:**
y on x: y − ȳ = r(σ_y/σ_x)(x − x̄)
x on y: x − x̄ = r(σ_x/σ_y)(y − ȳ)

**Effect of data transformation:**
If y = a + bx, then ȳ = a + bx̄, σ_y = |b|σ_x

**Moment generating:**
rth moment about mean: μ_r = ∑(x_i − x̄)^r/n
For grouped: μ_r = ∑f_i(x_i − x̄)^r/∑f_i

**Normalization:**
z-score = (x − x̄)/σ; this standardizes any distribution to mean 0, SD 1

**Weighted mean:**
x̄_w = ∑w_i x_i/∑w_i where w_i are weights

**Harmonic mean:**
HM = n/(1/x₁ + 1/x₂ + ... + 1/x_n); useful for rates and ratios

**Geometric mean:**
GM = (x₁·x₂·...·x_n)^{1/n}; less affected by outliers than arithmetic mean

- **Remember:** Mean = ∑f_i x_i/∑f_i; Variance = ∑f_i(x_i − x̄)²/∑f_i = (∑f_i x_i²/∑f_i) − x̄²; σ² = (∑x_i²)/n − (x̄)² is the quick calculation method
- **Previous years:** "Find mean and variance of first n natural numbers" [2023]; "For grouped data: find median class and calculate median" [2024]; "If mean of 10 numbers is 20 and adding 5 more numbers makes mean 25, find original sum" [2024]

---

## 📊 JEE Main Exam Essentials

| Detail | Value |
|---|---|
| Questions | 90 (30 per subject) |
| Time | 3 hours |
| Marks | 300 (90 per subject) |
| Section | Physics (30), Chemistry (30), Mathematics (30) |
| Negative | −1 for wrong answer |
| Mode | Computer-based |

### 🎯 High-Yield Topics for JEE Main Mathematics
- Calculus (Differentiation + Integration) — ~35 marks combined
- Coordinate Geometry (straight lines, circles, conics) — ~20 marks
- Algebra (Complex Numbers, Quadratics, P&C, Probability) — ~25 marks
- Trigonometry + Inverse Trigonometry — ~15 marks
- Vector + 3D — ~15 marks

### 📝 Previous Year Question Patterns
- Statistics: 1 question per year, 4 marks
- Common patterns: calculate mean of grouped data, find mode/median, standard deviation calculation
- Weight: low-medium frequency, easy marks if formulas are known

### 💡 Pro Tips
- For grouped data mean, always use class marks (midpoints), not class boundaries
- Assumed mean method reduces calculation time — pick A from middle class marks
- Step deviation method further simplifies when class width is constant
- Variance shortcut formula: σ² = (∑x_i²)/n − (x̄)² saves computation time
- Remember: adding same constant to all values doesn't change SD; multiplying by same constant multiplies SD by that constant

### 🔗 Official Resources
- [NTA Official JEE Main](https://jeemain.nta.nic.in)
- [JEE Main Syllabus PDF](https://jeemain.nta.nic.in/SearchKeyword/Syllabus)

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*