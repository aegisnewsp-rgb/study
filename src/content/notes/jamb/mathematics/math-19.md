---
exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-19
topicName: Statistics
weight: 3
country: ng
generated: "2026-03-24T08:32:07.742094"
diagramPrompt: "Statistical diagram showing frequency distribution histogram, bar chart, mean median mode illustration, data visualization style, clean black and white"
---

# Statistics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Statistics** — Quick Facts

**What is Statistics?**
Statistics is the branch of mathematics that deals with collecting, organizing, presenting, and interpreting data to make meaningful conclusions. In JAMB, Statistics is a key topic that appears almost every year.

**Data Types:**
- **Raw data:** Individual observations as collected (e.g., 4, 7, 2, 9, 3)
- **Grouped data:** Data organized into classes/frequency tables
- **Discrete data:** Data that can be counted (number of children, shoe sizes)
- **Continuous data:** Data that can be measured (height, weight, time, temperature)

**Measures of Central Tendency — The Big Three:**

| Measure | What it is | Symbol/Formula |
|---------|-----------|----------------|
| **Mean** | Average value | $\bar{x} = \frac{\sum x}{n}$ |
| **Median** | Middle value | Position = $\frac{n+1}{2}$ |
| **Mode** | Most frequent value | No formula |

**Quick Formulas — Memorise Now:**
- Mean (ungrouped): $\bar{x} = \frac{\sum x}{n}$
- Mean (grouped discrete): $\bar{x} = \frac{\sum fx}{\sum f}$
- Mean (grouped continuous): $\bar{x} = \frac{\sum fx}{\sum f}$ where $x$ = class midpoint
- Median (grouped): $M = L + \left[\frac{\frac{n}{2} - c.f.}{f}\right] \times w$
- Mode (grouped): $M_o = L + \frac{d_1}{d_1 + d_2} \times w$
- Standard deviation (ungrouped): $s = \sqrt{\frac{\sum(x - \bar{x})^2}{n}}$

⚡ **JAMB Exam Tip:** For grouped data questions, always find the class midpoint $x$ first (midpoint of class boundaries). This is critical for calculating the mean and standard deviation of grouped data.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Statistics** — Study Guide

## 1. What is Statistics?

Statistics is the science of collecting, analyzing, interpreting, and presenting data. In everyday life and in exams, we use statistics to summarize large amounts of information into single numbers that tell us something useful.

**Populations and Samples:**
- **Population:** The entire set of items or observations under study
- **Sample:** A smaller subset of the population selected for actual data collection
- **Census:** Data collected from every member of the population

**Data Types — Know the Difference:**

**Raw Data:** Unorganized data in the order it was collected.
Example: Scores in a class test — 45, 72, 58, 90, 33, 67, 81, 55

**Grouped Data:** Raw data organized into groups (classes) with frequencies.
Example: Heights of 20 students grouped into class intervals:

| Class Interval | Frequency (f) |
|----------------|---------------|
| 150–154 | 3 |
| 155–159 | 7 |
| 160–164 | 6 |
| 165–169 | 4 |

**Discrete Data:** Can only take specific, separate values (usually whole numbers). Examples: number of students in a class, number of cars in a parking lot, dice rolls.

**Continuous Data:** Can take any value within a range. Examples: height (can be 155.5 cm, 155.55 cm...), weight, temperature, time, distance.

**Class Boundaries and Class Marks:**
For continuous grouped data:
- **Class boundary:** The actual lower and upper limits of a class interval
  - Lower class boundary = lower limit − 0.5 (for whole number data)
  - Upper class boundary = upper limit + 0.5
- **Class mark (midpoint):** $x = \frac{\text{lower boundary} + \text{upper boundary}}{2}$

Example: Class 150–154 → Lower boundary = 149.5, Upper boundary = 154.5, Class mark = $\frac{149.5 + 154.5}{2} = 102$

Wait, let me recalculate:
- Class 150–154 → Lower boundary = 149.5, Upper boundary = 154.5
- Class mark $x = \frac{149.5 + 154.5}{2} = \frac{304}{2} = 152$

**Class Width:** $w = \text{upper boundary} - \text{lower boundary} = 154.5 - 149.5 = 5$

## 2. Measures of Central Tendency

Central tendency answers: "What is a typical value in my data?"

### Mean (Arithmetic Average)

**Mean for Ungrouped Data:**
$$\bar{x} = \frac{\sum x}{n}$$

Where $\sum x$ = sum of all values, $n$ = number of values

**Example:** Find the mean of: 4, 7, 2, 9, 3

$$\bar{x} = \frac{4 + 7 + 2 + 9 + 3}{5} = \frac{25}{5} = 5$$

---

**Mean for Grouped Discrete Data:**
$$\bar{x} = \frac{\sum fx}{\sum f}$$

Where $f$ = frequency, $x$ = value/data point

**Example:**

| Value (x) | Frequency (f) | fx |
|-----------|---------------|-----|
| 2 | 3 | 6 |
| 4 | 5 | 20 |
| 6 | 2 | 12 |
| 8 | 1 | 8 |
| **Total** | **11** | **46** |

$$\bar{x} = \frac{46}{11} = 4.18$$

---

**Mean for Grouped Continuous Data:**
$$\bar{x} = \frac{\sum fx}{\sum f}$$

Where $x$ = class midpoint (class mark), $f$ = frequency

**Example:**

| Class Interval | Class Midpoint (x) | Frequency (f) | fx |
|----------------|-------------------|----------------|-----|
| 10–14 | 12 | 4 | 48 |
| 15–19 | 17 | 8 | 136 |
| 20–24 | 22 | 5 | 110 |
| 25–29 | 27 | 3 | 81 |
| **Total** | | **20** | **375** |

$$\bar{x} = \frac{375}{20} = 18.75$$

> ⚠️ **Critical Step:** For continuous grouped data, you MUST use the class midpoint as your $x$ values — not the lower or upper class boundaries!

---

### Median

The median is the middle value when data is arranged in order.

**Median for Ungrouped Data:**

1. Arrange data in ascending order
2. Find the position: $\text{Position} = \frac{n+1}{2}$
3. Read the value at that position

**Example:** Find the median of: 8, 3, 5, 1, 9

Step 1: Arrange: 1, 3, 5, 8, 9
Step 2: Position = $\frac{5+1}{2} = 3$
Step 3: 3rd value = **5** ✓

**If n is even:**
Example: 2, 4, 6, 8
Position = $\frac{4+1}{2} = 2.5$
Median = average of 2nd and 3rd values = $\frac{4+6}{2} = 5$

---

**Median for Grouped Data (Using Median Formula):**

$$M_e = L + \left[\frac{\frac{n}{2} - c.f.}{f}\right] \times w$$

Where:
- **L** = Lower class boundary of the median class
- **n** = Total frequency (sum of all frequencies)
- **c.f.** = Cumulative frequency of the class before the median class
- **f** = Frequency of the median class
- **w** = Class width (same for all classes)

**How to Find the Median Class:**
Find $\frac{n}{2}$, then locate the class where the cumulative frequency first exceeds $\frac{n}{2}$.

**Full Worked Example:**

| Class Interval | Frequency (f) | Cumulative Frequency (c.f.) |
|----------------|---------------|----------------------------|
| 0–4 | 2 | 2 |
| 5–9 | 7 | 9 |
| 10–14 | 10 | 19 |
| 15–19 | 6 | 25 |
| 20–24 | 3 | 28 |

Total $n = 28$, so $\frac{n}{2} = 14$

The class where c.f. first exceeds 14 is **10–14** (c.f. = 19).
This is the median class.

Using the formula:
- $L = 9.5$ (lower boundary of 10–14)
- $c.f. = 9$ (cumulative frequency before 10–14)
- $f = 10$ (frequency of median class)
- $w = 5$ (class width: 14.5 − 9.5 = 5)

$$M_e = 9.5 + \left[\frac{14 - 9}{10}\right] \times 5 = 9.5 + \left[\frac{5}{10}\right] \times 5 = 9.5 + 2.5 = 12$$

> ⚠️ **JAMB Trick:** Students often use the wrong cumulative frequency. Remember: c.f. is the frequency of ALL classes BEFORE the median class, NOT including the median class itself.

---

### Mode

**Mode for Ungrouped Data:**
The mode is simply the value that appears most frequently.

**Example:** In the data set 3, 5, 2, 7, 3, 5, 3, 9
- Frequency of 3 = 3 times
- Frequency of 5 = 2 times
- All others appear once
- **Mode = 3** ✓

A dataset can have **no mode** (all values appear once), **one mode** (unimodal), or **more than one mode** (bimodal/multimodal).

---

**Mode for Grouped Data:**

$$M_o = L + \frac{d_1}{d_1 + d_2} \times w$$

Where:
- **L** = Lower class boundary of the modal class (the class with the highest frequency)
- **d₁** = $f_1 - f_0$ (frequency of modal class minus frequency of class before it)
- **d₂** = $f_1 - f_2$ (frequency of modal class minus frequency of class after it)
- **w** = Class width

**Full Worked Example:**

| Class Interval | Frequency (f) |
|----------------|---------------|
| 0–4 | 2 |
| 5–9 | 7 |
| 10–14 | **10** ← highest (modal class) |
| 15–19 | 6 |
| 20–24 | 3 |

- Modal class = 10–14 (highest frequency of 10)
- $L = 9.5$
- $f_1 = 10$ (modal class frequency)
- $f_0 = 7$ (class before modal class)
- $f_2 = 6$ (class after modal class)
- $d_1 = 10 - 7 = 3$
- $d_2 = 10 - 6 = 4$
- $w = 5$

$$M_o = 9.5 + \frac{3}{3 + 4} \times 5 = 9.5 + \frac{3}{7} \times 5 = 9.5 + 2.14 = 11.64$$

## 3. Cumulative Frequency and Ogives

**Cumulative Frequency (c.f.):** The running total of frequencies up to a particular class.

| Class Interval | Frequency | Cumulative Frequency |
|----------------|-----------|---------------------|
| 0–4 | 2 | 2 |
| 5–9 | 7 | 2 + 7 = 9 |
| 10–14 | 10 | 9 + 10 = 19 |
| 15–19 | 6 | 19 + 6 = 25 |
| 20–24 | 3 | 25 + 3 = 28 |

**Ogives:** Line graphs showing cumulative frequency plotted against class boundaries.

- **Less than ogive:** Plots the upper class boundary against cumulative frequency (e.g., less than 5, less than 10...)
- **More than ogive:** Plots the lower class boundary against cumulative frequency (e.g., more than 0, more than 5...)

Ogives can be used to estimate the median (the value at $\frac{n}{2}$ on the y-axis) and other percentiles.

## 4. Measures of Dispersion

Dispersion tells us how spread out the data is. Two data sets can have the same mean but very different spreads.

### Range

$$\text{Range} = \text{Maximum value} - \text{Minimum value}$$

**Example:** Data: 3, 7, 2, 9, 5
Range = 9 − 2 = 7

The range is simple but sensitive to extreme values (outliers).

### Variance

Variance measures the average squared deviation from the mean.

**For Ungrouped Data:**
$$s^2 = \frac{\sum(x - \bar{x})^2}{n} \quad \text{(population variance)}$$
$$s^2 = \frac{\sum(x - \bar{x})^2}{n-1} \quad \text{(sample variance)}$$

> **JAMB Note:** Most JAMB questions use the population formula ($n$ in denominator). When in doubt, check whether the question specifies "sample" or "population."

**For Grouped Data:**
$$s^2 = \frac{\sum f(x - \bar{x})^2}{\sum f}$$

Where $x$ = class midpoint, $f$ = frequency

### Standard Deviation

Standard deviation is the square root of variance. It gives dispersion in the same units as the original data.

**For Ungrouped Data:**
$$s = \sqrt{\frac{\sum(x - \bar{x})^2}{n}}$$

**For Grouped Data:**
$$s = \sqrt{\frac{\sum f(x - \bar{x})^2}{\sum f}}$$

**Worked Example — Ungrouped Data:**

Data: 6, 8, 10, 12, 14

**Step 1:** Find the mean
$$\bar{x} = \frac{6+8+10+12+14}{5} = \frac{50}{5} = 10$$

**Step 2:** Find deviations and squared deviations

| $x$ | $x - \bar{x}$ | $(x - \bar{x})^2$ |
|-----|--------------|-------------------|
| 6 | −4 | 16 |
| 8 | −2 | 4 |
| 10 | 0 | 0 |
| 12 | 2 | 4 |
| 14 | 4 | 16 |
| | **Total** | **40** |

**Step 3:** Calculate standard deviation
$$s = \sqrt{\frac{40}{5}} = \sqrt{8} = 2.83$$

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Statistics** — Comprehensive Notes

## 5. The Relationship Between Mean, Median, and Mode

For a **symmetric (normal) distribution:**
$$\text{Mean} = \text{Median} = \text{Mode}$$

For a **positively skewed distribution** (tail to the right):
$$\text{Mean} > \text{Median} > \text{Mode}$$

For a **negatively skewed distribution** (tail to the left):
$$\text{Mean} < \text{Median} < \text{Mode}$$

This relationship is useful for checking your answers. If your calculated mean is less than your calculated median, you likely made an error.

## 6. Combined Mean

If two or more groups have been studied separately, their combined mean can be calculated:

$$\bar{x}_{\text{combined}} = \frac{n_1\bar{x}_1 + n_2\bar{x}_2 + n_3\bar{x}_3 + \ldots}{n_1 + n_2 + n_3 + \ldots}$$

**Example:** Group A has 30 students with mean score 65. Group B has 20 students with mean score 72. Find the combined mean.

$$\bar{x} = \frac{(30 \times 65) + (20 \times 72)}{30 + 20} = \frac{1950 + 1440}{50} = \frac{3390}{50} = 67.8$$

## 7. Deciles, Percentiles, and Quartiles

Just as the median divides data into two equal halves:

- **Quartiles** divide data into four equal parts: Q₁ (25th percentile), Q₂ (50th = median), Q₃ (75th percentile)
- **Deciles** divide data into ten equal parts: D₁, D₂, ..., D₉
- **Percentiles** divide data into one hundred equal parts

**Finding Quartiles from Ogives:**
- Q₁ = value at $\frac{n}{4}$ position
- Q₂ = value at $\frac{n}{2}$ position (same as median)
- Q₃ = value at $\frac{3n}{4}$ position

**Interquartile Range (IQR):**
$$\text{IQR} = Q_3 - Q_1$$

The IQR measures the spread of the middle 50% of data, ignoring extreme values.

## 8. Standard Deviation — Detailed Calculation for Grouped Data

**Worked Example:**

| Class Interval | Midpoint (x) | Frequency (f) | fx | $(x - \bar{x})$ | $(x - \bar{x})^2$ | $f(x - \bar{x})^2$ |
|----------------|-------------|----------------|-----|-----------------|-------------------|-------------------|
| 10–14 | 12 | 4 | 48 | 12−18.75=−6.75 | 45.56 | 182.25 |
| 15–19 | 17 | 8 | 136 | 17−18.75=−1.75 | 3.06 | 24.50 |
| 20–24 | 22 | 5 | 110 | 22−18.75=3.25 | 10.56 | 52.81 |
| 25–29 | 27 | 3 | 81 | 27−18.75=8.25 | 68.06 | 204.19 |
| **Total** | | **20** | **375** | | | **463.75** |

Mean $\bar{x} = \frac{375}{20} = 18.75$

$$s^2 = \frac{463.75}{20} = 23.1875$$
$$s = \sqrt{23.1875} = 4.82$$

## 9. JAMB Past Questions — Worked Examples

**Question 1 (Mean — Ungrouped):**
Find the mean of: 12, 15, 18, 22, 25

$$\bar{x} = \frac{12+15+18+22+25}{5} = \frac{92}{5} = 18.4$$

**Question 2 (Mean — Grouped Continuous):**

| Class | 0–4 | 5–9 | 10–14 | 15–19 |
|-------|-----|-----|-------|-------|
| Freq | 3 | 5 | 7 | 5 |

Class midpoints: 2, 7, 12, 17
$$\bar{x} = \frac{(3\times2)+(5\times7)+(7\times12)+(5\times17)}{3+5+7+5} = \frac{6+35+84+85}{20} = \frac{210}{20} = 10.5$$

**Question 3 (Median — Grouped):**

| Class | 20–29 | 30–39 | 40–49 | 50–59 |
|-------|-------|-------|-------|-------|
| Freq | 8 | 15 | 25 | 12 |

$n = 60$, $\frac{n}{2} = 30$
Cumulative frequencies: 8, 23, 48, 60
Median class = 40–49 (c.f. first exceeds 30)
$L = 39.5$, $c.f. = 23$, $f = 25$, $w = 10$

$$M_e = 39.5 + \left[\frac{30-23}{25}\right] \times 10 = 39.5 + 2.8 = 42.3$$

**Question 4 (Mode — Grouped):**

| Class | 0–9 | 10–19 | 20–29 | 30–39 |
|-------|-----|-------|-------|-------|
| Freq | 4 | 12 | 20 | 8 |

Modal class = 20–29 (highest frequency 20)
$L = 19.5$, $f_0 = 12$, $f_1 = 20$, $f_2 = 8$, $w = 10$
$d_1 = 20-12 = 8$, $d_2 = 20-8 = 12$

$$M_o = 19.5 + \frac{8}{8+12} \times 10 = 19.5 + \frac{8}{20} \times 10 = 19.5 + 4 = 23.5$$

## 10. Exam Tips and Common Mistakes

### ⚠️ Common Mistakes to Avoid:

1. **Using raw class values instead of class midpoints:** For continuous grouped data mean and standard deviation, you MUST use $(L + U)/2$ as $x$. Using the lower limit will give the wrong answer every time.

2. **Wrong cumulative frequency for median:** The c.f. in the median formula is the cumulative frequency of ALL classes BEFORE the median class. Not the c.f. of the median class itself.

3. **Forgetting to arrange ungrouped data first:** The median requires data to be in ascending order. Skipping this step guarantees a wrong answer.

4. **Using population formula for a sample:** If the question says "sample," use $n-1$ in the denominator of variance/standard deviation. If it doesn't specify, use $n$.

5. **Incorrect class boundaries:** When finding class boundaries for continuous data, subtract 0.5 from the lower limit and add 0.5 to the upper limit (for whole number data).

6. **Mode formula errors:** Remember $d_1 = f_1 - f_0$ and $d_2 = f_1 - f_2$. Some students reverse these. $d_1$ is always the difference with the class BEFORE the modal class.

7. **Wrong position for median (ungrouped):** Use $\frac{n+1}{2}$, NOT $\frac{n}{2}$. Only in the grouped median formula do you use $\frac{n}{2}$.

### 💡 JAMB-Specific Tips:

- **Time management:** Statistics questions are often计算-heavy. Show your working clearly so you can check for errors without starting over.
- **Answer format:** JAMB expects exact answers where possible. Simplify square roots (e.g., $\sqrt{50} = 5\sqrt{2}$) or leave as decimals to 2–3 significant figures.
- **Sketching helps:** Even for calculation questions, quickly sketch the frequency distribution. It helps you spot the modal class and median class correctly.
- **Check for skewed data:** If a question mentions "skewed distribution," expect questions about the relationship between mean, median, and mode.
- **Units matter:** Always include units where applicable (e.g., kg, cm, Naira). This can save marks in theory questions.

### 🎯 Study Priority for JAMB:

1. **Must master:** Mean (all three types) — appears every year in some form
2. **Must master:** Median formula and grouped median — very high frequency
3. **Must master:** Mode (grouped) — common in JAMB
4. **High priority:** Standard deviation calculations — often combined with mean
5. **High priority:** Class boundaries and midpoints — prerequisite for all grouped calculations
6. **Medium priority:** Cumulative frequency and ogives — usually 1–2 questions per year
7. **Medium priority:** Range and variance — sometimes standalone, sometimes combined
8. **Know:** Relationship between mean, median, mode for skewed distributions
9. **Know:** Combined mean formula — occasionally tested
10. **Bonus:** Quartiles and interquartile range — for comprehensive preparation

---

## 📋 Quick Reference Summary

| Formula | When to Use |
|---------|------------|
| $\bar{x} = \frac{\sum x}{n}$ | Mean of ungrouped/raw data |
| $\bar{x} = \frac{\sum fx}{\sum f}$ | Mean of grouped discrete OR continuous (use midpoints) |
| Median position = $\frac{n+1}{2}$ | Finding median position in ungrouped data |
| $M_e = L + [\frac{n/2 - c.f.}{f}] \times w$ | Median of grouped data |
| $M_o = L + \frac{d_1}{d_1+d_2} \times w$ | Mode of grouped data |
| $d_1 = f_1 - f_0, \quad d_2 = f_1 - f_2$ | Components of grouped mode |
| Range = Max − Min | Simplest measure of dispersion |
| $s = \sqrt{\frac{\sum(x-\bar{x})^2}{n}}$ | Standard deviation (population/ungrouped) |
| $s = \sqrt{\frac{\sum f(x-\bar{x})^2}{\sum f}}$ | Standard deviation (grouped) |
| Class midpoint $x = \frac{L+U}{2}$ | For continuous grouped data |
| Class boundary = limit ± 0.5 | For discrete data grouped into classes |

---

## 🔗 Related Topics

- **math-14: Probability** — Often combined with Statistics in exam questions (finding expected values, probability distributions)
- **math-15: Permutations and Combinations** — Underpins probability calculations
- **math-4: Algebra** — Solving equations is essential for statistical calculations
- **math-6: Plane Geometry** — Sometimes combined with statistical diagrams
- **math-17: Data Collection and Presentation** — Bar charts, histograms, pie charts — precursor to Statistics analysis

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
