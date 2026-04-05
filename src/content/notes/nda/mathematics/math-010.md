---
exam: nda
examName: NDA
subject: mathematics
subjectName: Mathematics
topic: math-010
topicName: Statistics
weight: 3
country: india
generated: "2026-03-24T08:32:07.809762"
diagramPrompt: Mathematical diagram showing Statistics concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Statistics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Statistics** — Quick Facts

**Key Definitions:**
- **Statistics:** The science of collecting, organising, analysing, and interpreting data
- **Population:** The entire set of items under consideration
- **Sample:** A subset of the population used for analysis
- **Variable:** A characteristic that can take different values
- **Frequency:** The number of times a value occurs

**Measures of Central Tendency:**

| Measure | Formula | Best Used When |
|---|---|---|
| **Mean ($\bar{x}$)** | $\bar{x} = \frac{\sum x_i}{n}$ | Symmetric data without outliers |
| **Median** | Middle value when data is ordered | Skewed data, outliers present |
| **Mode** | Most frequently occurring value | Categorical data, peaks in data |

**⚡ Exam Tips for NDA:**
- Remember: Mean is affected by extreme values, median is not
- For grouped data, Mode $= L + \frac{f_1 - f_0}{2f_1 - f_0 - f_2} \times h$ where $L$ = lower limit of modal class
- In NDA exam, direct formula application questions are common
- Always arrange data in ascending order before finding median

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Statistics** — Study Guide

**Measures of Dispersion:**

Dispersion tells us how spread out the data is.

1. **Range:** $R = X_{max} - X_{min}$
   - Simplest measure but sensitive to outliers

2. **Variance ($\sigma^2$):**
   - Population variance: $\sigma^2 = \frac{\sum(x_i - \bar{x})^2}{N}$
   - Sample variance: $s^2 = \frac{\sum(x_i - \bar{x})^2}{n-1}$

3. **Standard Deviation ($\sigma$ or $s$):**
   - $\sigma = \sqrt{\frac{\sum(x_i - \bar{x})^2}{N}}$ (population)
   - $s = \sqrt{\frac{\sum(x_i - \bar{x})^2}{n-1}}$ (sample)

4. **Mean Deviation:**
   - $M.D = \frac{\sum|x_i - \bar{x}|}{n}$ (from mean)
   - $M.D = \frac{\sum|x_i - M|}{n}$ (from median)

5. **Quartile Deviation (Semi-Interquartile Range):**
   - $Q.D = \frac{Q_3 - Q_1}{2}$

**Coefficient of Variation:**
$$CV = \frac{\sigma}{\bar{x}} \times 100\%$$
- Used to compare variability of two datasets with different units or scales

**Skewness:**
- **Positive Skew:** Tail extends to the right (mean > median > mode)
- **Negative Skew:** Tail extends to the left (mean < median < mode)
- **Pearson's Coefficient of Skewness:**
$$Sk_p = \frac{Mean - Mode}{SD} = \frac{3(Mean - Median)}{SD}$$

**Correlation:**
- Measures the strength and direction of relationship between two variables
- Pearson's Correlation Coefficient ($r$):
$$r = \frac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum(x_i - \bar{x})^2 \times \sum(y_i - \bar{y})^2}}$$
- $-1 \leq r \leq +1$
- $r > 0$: Positive correlation
- $r < 0$: Negative correlation
- $r = 0$: No correlation

**Common Student Mistakes:**
- Confusing sample variance denominator ($n-1$) with population variance ($n$)
- Mixing up correlation with causation
- Forgetting to order data before finding median

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough preparation.

**Statistics** — Comprehensive Notes

**Detailed Formulae for Grouped Data:**

**Mean for Grouped Data:**
$$\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$$
Where $x_i$ is the class mark (midpoint) and $f_i$ is the frequency.

**Step Deviation Method (for simplification):**
$$\bar{x} = A + \frac{\sum f_i d_i}{\sum f_i} \times h$$
Where $A$ = assumed mean, $d_i = \frac{x_i - A}{h}$, $h$ = class width.

**Median for Grouped Data:**
$$Median = L + \frac{(n/2) - cf}{f} \times h$$
Where:
- $L$ = lower limit of median class
- $n$ = total frequency
- $cf$ = cumulative frequency before median class
- $f$ = frequency of median class
- $h$ = class width

**Mode for Grouped Data:**
$$Mode = L + \frac{f_1 - f_0}{2f_1 - f_0 - f_2} \times h$$
Where:
- $L$ = lower limit of modal class
- $f_1$ = frequency of modal class
- $f_0$ = frequency before modal class
- $f_2$ = frequency after modal class
- $h$ = class width

**Quartiles for Grouped Data:**
$$Q_r = L + \frac{(rn/4) - cf}{f} \times h$$
Where $r$ = 1, 2, or 3 for $Q_1$, $Q_2$, $Q_3$

**Variance and Standard Deviation for Grouped Data:**
$$\sigma^2 = \frac{\sum f_i(x_i - \bar{x})^2}{N} = \frac{\sum f_i x_i^2}{N} - \bar{x}^2$$
(Using the computational formula: variance = mean of squares − square of mean)

**Probability:**

**Classical Definition:**
$$P(A) = \frac{n(A)}{n(S)}$$
Where $n(A)$ = favourable outcomes, $n(S)$ = total outcomes.

**Addition Theorem:**
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

**Multiplication Theorem (Independent Events):**
$$P(A \cap B) = P(A) \times P(B)$$

**Conditional Probability:**
$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

**Bayes' Theorem:**
$$P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$$

**Random Variables and Expectation:**

- **Discrete Random Variable:** Takes finite or countable values
- **Expectation (Mean):** $E(X) = \sum x_i P(x_i)$
- **Variance:** $Var(X) = E(X^2) - [E(X)]^2$

**Binomial Distribution:**
$$P(X = r) = \binom{n}{r} p^r q^{n-r}$$
Where $p$ = probability of success, $q = 1-p$, $n$ = number of trials.

- Mean $= np$
- Variance $= npq$

**Normal Distribution:**
The standard normal variable $z = \frac{x - \mu}{\sigma}$

Properties:
- Bell-shaped, symmetric about mean
- Mean = Median = Mode = $\mu$
- Total area under curve = 1
- 68.27% within 1 SD, 95.45% within 2 SD, 99.73% within 3 SD

**Regression Analysis:**

**Lines of Regression:**
- $y$ on $x$: $y - \bar{y} = r\frac{\sigma_y}{\sigma_x}(x - \bar{x})$
- $x$ on $y$: $x - \bar{x} = r\frac{\sigma_x}{\sigma_y}(y - \bar{y})$

**Regression Coefficients:**
$$b_{yx} = r\frac{\sigma_y}{\sigma_x}, \quad b_{xy} = r\frac{\sigma_x}{\sigma_y}$$
$$r = \sqrt{b_{yx} \cdot b_{xy}}$$

**⚡ NDA High-Yield Patterns:**
- Questions on mean deviation from mean/median are very common
- Always check whether the question asks for sample or population variance
- Coefficient of variation is frequently asked in comparative problems
- Normal distribution and z-score calculations appear in Paper II
- Remember the relationship: $3 Median = Mode + 2 Mean$ (for moderately skewed distributions)

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
