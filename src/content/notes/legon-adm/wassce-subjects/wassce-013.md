---
exam: legon-adm
examName: Legon Admissions (Ghana)
subject: quant
subjectName: Wassce Subjects
topic: wassce-013
topicName: Topic 13
weight: 3
country: legon
generated: "2026-03-25T17:00:00"
---

# Topic 13: Statistics and Probability

### 🟢 Lite — Quick Review (1h–1d)

Statistics is the branch of mathematics concerned with collecting, organising, presenting, analysing, and interpreting data. Probability, meanwhile, measures the likelihood or chance that a particular event will occur, expressed as a number between 0 (impossible) and 1 (certain). In the WASSCE quantitative reasoning paper, questions in this topic assess your ability to handle real data sets and calculate various statistical measures, as well as your understanding of fundamental probability concepts.

Central tendency measures identify a single value that represents the centre of a data set. The three primary measures are: the mean (arithmetic average), the median (the middle value when data is arranged in order), and the mode (the most frequently occurring value). Each has advantages and limitations. The mean uses all data values but is affected by extreme outliers. The median is resistant to outliers but ignores the actual magnitude of values. The mode is useful for categorical data but may not exist or may not be unique.

**Key Facts:**
- Mean = sum of all values ÷ number of values
- Median: middle value when data is ordered (or average of two middle values for even n)
- Mode: most frequent value(s); a data set may have no mode, one mode (unimodal), or two modes (bimodal)
- Range = highest value - lowest value (measure of spread)
- Probability scale: 0 ≤ P(event) ≤ 1
- P(event) = number of favourable outcomes ÷ total number of possible outcomes
- P(complement) = 1 - P(event)

⚡ **Exam Tip:** When calculating the mean from a frequency table, remember to multiply each value by its frequency before summing—do not simply average the values.

---

### 🟡 Standard — Regular Study (2d–2mo)

**Mean, Median, and Mode**

Find the mean, median, and mode of the data set: 4, 7, 3, 8, 7, 2, 7, 9

Mean = (4 + 7 + 3 + 8 + 7 + 2 + 7 + 9) ÷ 8 = 47 ÷ 8 = **5.875**

Arranged in order: 2, 3, 4, 7, 7, 7, 8, 9
Median = average of 4th and 5th values = (7 + 7) ÷ 2 = **7**

Mode = **7** (appears 3 times, more than any other value)

**Grouped Frequency Distributions**

For grouped data, the mean is calculated using class midpoints:

| Class | Frequency (f) | Midpoint (x) | fx |
|-------|---------------|--------------|-----|
| 0-9 | 5 | 4.5 | 22.5 |
| 10-19 | 12 | 14.5 | 174 |
| 20-29 | 8 | 24.5 | 196 |
| 30-39 | 3 | 34.5 | 103.5 |
| 40-49 | 2 | 44.5 | 89 |
| **Totals** | **30** | — | **585** |

Mean = 585 ÷ 30 = **19.5**

**Cumulative Frequency and Median**

The cumulative frequency is obtained by adding frequencies progressively.

| Score | Frequency | Cumulative Frequency |
|-------|-----------|---------------------|
| 0-9 | 3 | 3 |
| 10-19 | 7 | 10 |
| 20-29 | 12 | 22 |
| 30-39 | 5 | 27 |
| 40-49 | 3 | 30 |

The median is found at the (n+1)/2 = 15.5th position, which falls in the 20-29 class.

**Probability — Basic Concepts**

A bag contains 6 red balls and 4 blue balls. Find the probability of drawing a red ball.

P(red) = 6/(6 + 4) = 6/10 = **3/5 = 0.6**

**Probability of Complementary Events**

If P(A) = 0.7, then P(not A) = 1 - 0.7 = **0.3**

**Probability of Combined Events**

For independent events A and B:
- P(A and B) = P(A) × P(B)
- P(A or B) = P(A) + P(B) - P(A and B)

Two dice are thrown. Find the probability of getting a sum of 8.

Total possible outcomes: 6 × 6 = 36
Favourable outcomes (sum = 8): (2,6), (3,5), (4,4), (5,3), (6,2) = 5 outcomes
P(sum = 8) = **5/36**

**Comparison Table: Measures of Central Tendency**

| Measure | Calculation | Advantage | Disadvantage |
|---------|-------------|-----------|-------------|
| Mean | Sum ÷ n | Uses all data | Affected by extreme values |
| Median | Middle value | Resistant to outliers | Ignores magnitude of values |
| Mode | Most frequent | Useful for categories | May not exist or be unique |

**Common Mistakes to Avoid:**
1. Forgetting to arrange data before finding the median
2. Mixing up population standard deviation (σ) with sample standard deviation (s)
3. Assuming events are independent when they are not
4. Forgetting to subtract P(both) when calculating P(A or B)
5. Using class boundaries instead of midpoints when calculating mean from grouped data

**Problem-Solving Strategy:**
1. For statistics: identify what measure is being asked, then apply the correct formula
2. For probability: list all possible outcomes systematically
3. Count favourable outcomes carefully
4. Apply the appropriate probability formula
5. Express your answer as a fraction in simplest form, decimal, or percentage as required

---

### 🔴 Extended — Deep Study (3mo+)

**Historical Context: The Birth of Probability Theory**

Probability theory emerged from gambling problems in 17th-century France. The Chevalier de Méré approached mathematician Blaise Pascal with questions about dice games. Pascal, collaborating with Pierre de Fermat, developed fundamental counting principles and probability calculations. This correspondence in 1654 is considered the formal beginning of probability theory as a mathematical discipline.

**Standard Deviation**

Standard deviation measures the spread of data around the mean. For ungrouped data:

σ = √[Σ(x - x̄)² / n]

For the data set: 2, 4, 6, 8, 10
Mean = 6
Variance = [(2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)²] ÷ 5 = [16 + 4 + 0 + 4 + 16] ÷ 5 = 40 ÷ 5 = 8
Standard deviation = √8 = **2√2 ≈ 2.83**

**Measures of Position — Quartiles**

Quartiles divide data into four equal parts:
- Q₁ (lower quartile): 25% of data below
- Q₂ (median): 50% of data below
- Q₃ (upper quartile): 75% of data below

Interquartile range (IQR) = Q₃ - Q₁

For the ordered data: 3, 5, 7, 9, 11, 13, 15
Q₂ = 9, Q₁ = 5, Q₃ = 13
IQR = 13 - 5 = **8**

**Conditional Probability**

P(A|B) denotes the probability of event A given that event B has occurred:
P(A|B) = P(A and B) / P(B)

In a class of 30 students, 18 play football and 12 play basketball. If 8 students play both sports, what is the probability that a randomly chosen football player also plays basketball?

P(both) = 8/30, P(football) = 18/30
P(basketball|football) = (8/30) / (18/30) = **4/9**

**Tree Diagrams**

For independent events over successive trials, tree diagrams help enumerate outcomes:

The probability of a batsman hitting a boundary is 0.3. Find probabilities for 2 consecutive deliveries:
- HH: 0.3 × 0.3 = 0.09
- HM: 0.3 × 0.7 = 0.21
- MH: 0.7 × 0.3 = 0.21
- MM: 0.7 × 0.7 = 0.49
(Verify: 0.09 + 0.21 + 0.21 + 0.49 = 1.00)

**Permutations and Combinations**

Permutations (order matters): P(n,r) = n! / (n - r)!

How many ways can 3 prizes be awarded to 10 students if no student can win more than one prize?
P(10,3) = 10! / 7! = 10 × 9 × 8 = **720 ways**

Combinations (order does not matter): C(n,r) = n! / [r!(n-r)!]

How many ways can a committee of 4 be formed from 7 people?
C(7,4) = 7! / (4! × 3!) = (7 × 6 × 5) / (3 × 2 × 1) = **35 ways**

**WASSCE Examination Patterns:**

The WASSCE quantitative reasoning paper typically includes:
1. Mean, median, and mode calculations (Objective)
2. Probability of single and combined events (Objective and Theory)
3. Data interpretation from tables and charts (Objective)
4. Permutations and combinations (Theory)
5. Standard deviation calculations (Theory)

⚡ **Pro Exam Tip:** In the WASSCE, always simplify probability answers to lowest terms. When using tree diagrams, label each branch with its probability. For combined events, remember that P(A or B) = P(A) + P(B) - P(A and B), and subtract the overlap to avoid double-counting.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
