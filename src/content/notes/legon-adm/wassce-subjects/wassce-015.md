---
exam: legon-adm
examName: Legon Admissions (Ghana)
subject: quant
subjectName: Wassce Subjects
topic: wassce-015
topicName: Statistics and Probability
weight: 3
country: legon
generated: "2026-03-25T17:00:00"
---

# Statistics and Probability

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Statistics is the study of collecting, organising, analysing, and interpreting data. The three measures of central tendency you'll use most are the mean (arithmetic average), median (middle value when data is ordered), and mode (most frequent value). The mean is sensitive to extreme values; the median is more robust.

**Essential Formulas:**
- Mean = (Σfᵢxᵢ) / Σfᵢ for a frequency distribution
- Median = L + ((n/2 − c) / f) × w (grouped data), where L = lower boundary of median class, c = cumulative frequency before median class, f = frequency of median class, w = class width
- Variance = Σf(x − x̄)² / Σf = (Σfx² / Σf) − x̄²
- Standard deviation = √variance
- Probability of event A: P(A) = (number of favourable outcomes) / (total number of equally likely outcomes)
- P(A or B) = P(A) + P(B) − P(A and B) (addition rule)
- P(A and B) = P(A) × P(B) (multiplication rule, for independent events)

**Key Facts:**
- The mean is affected by every value; adding a very large or very small number shifts it significantly
- The median is the middle value — 50% of data lies below it and 50% above it
- Mode can be multimodal or nonexistent
- For grouped data, the mean is approximate since we use class midpoints
- Complementary events: P(A) + P(A') = 1, so P(A') = 1 − P(A)
- Two events are independent if P(A|B) = P(A), equivalently P(A and B) = P(A)P(B)

⚡ **Exam Tip:** In WASSCE, the mean and standard deviation are often calculated from a frequency table. Calculate Σfx and Σfx² carefully — this is where students lose marks through arithmetic errors. For probability, always check whether events are independent before applying the multiplication rule. If a question says "drawn with replacement," the draws are independent; without replacement, they are dependent.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Measures of Central Tendency**

*Mean:* The arithmetic average. For ungrouped data: x̄ = (Σx) / n. For frequency data: x̄ = (Σfx) / Σf.

Example: Heights of 8 students (cm): 155, 160, 162, 158, 165, 170, 156, 164.
Mean = (155+160+162+158+165+170+156+164) / 8 = 1290/8 = 161.25 cm.

*Median:* Arrange data in order, find the middle. For an even number n of observations, the median is the average of the n/2 and (n/2 + 1)th values.
Ordered data: 155, 156, 158, 160, 162, 164, 165, 170. n = 8, median = average of 4th and 5th values = (160+162)/2 = 161 cm.

*Mode:* The value with highest frequency. In 155, 160, 162, 158, 165, 170, 156, 164, all values appear once — there is no mode. If the data was 155 appearing twice, the mode would be 155.

**Grouped Data — Mean, Median, and Mode**

For grouped data, use class midpoints. Example:

| Class | Frequency (f) | Midpoint (x) | fx |
|-------|---------------|-------------|-----|
| 0–9   | 3             | 4.5         | 13.5 |
| 10–19 | 7             | 14.5        | 101.5 |
| 20–29 | 12            | 24.5        | 294 |
| 30–39 | 8             | 34.5        | 276 |
| 40–49 | 2             | 44.5        | 89 |

Σf = 32, Σfx = 774. Mean = 774/32 = 24.19.

**Measures of Dispersion (Spread)**

*Range:* Largest − smallest. Quick but sensitive to outliers.
*Variance and Standard Deviation:* Measure how spread out data is around the mean.

For ungrouped data: σ = √(Σ(x − x̄)² / n)
Shortcut formula: σ² = (Σx² / n) − x̄²

Example: Data: 4, 6, 8, 10, 12. Mean x̄ = 8.
σ² = [(16+36+64+100+144)/5] − 64 = (360/5) − 64 = 72 − 64 = 8. σ = √8 = 2.83.

**Cumulative Frequency and Quartiles**

The cumulative frequency curve (ogive) shows how many observations lie below each value. Quartiles divide data into four equal parts: Q1 (25th percentile), Q2 = median (50th), Q3 (75th percentile).
Q1 position = n/4, Q3 position = 3n/4.

**Probability — Basic Concepts**

An experiment is a process with uncertain outcomes. An event is a specific outcome or set of outcomes. The probability of an event A is P(A) = favourable outcomes / total outcomes, where all outcomes are equally likely.

Example: A bag contains 4 red, 5 blue, and 3 green balls. One ball is drawn at random.
P(red) = 4/12 = 1/3. P(blue or green) = (5+3)/12 = 8/12 = 2/3. P(not red) = 1 − 1/3 = 2/3.

**Addition Rule (OR)**

P(A or B) = P(A) + P(B) − P(A and B). If A and B are mutually exclusive (cannot happen together): P(A or B) = P(A) + P(B).

Example: Drawing a card from a standard deck. P(King or Heart) = P(King) + P(Heart) − P(King of Hearts) = 4/52 + 13/52 − 1/52 = 16/52 = 4/13.

**Multiplication Rule (AND)**

For independent events (each outcome doesn't affect the next): P(A and B) = P(A) × P(B).
For dependent events: P(A and B) = P(A) × P(B|A).

Example with replacement (independent): Toss a coin twice. P(two heads) = ½ × ½ = ¼.
Example without replacement (dependent): From a deck of 52, draw two cards. P(both Kings) = (4/52) × (3/51) = 12/2652 = 1/221.

**Problem-Solving Strategies:**
- For probability tree diagrams, list all possible outcomes at each branch and multiply along branches, add across final outcomes
- Always identify whether events are independent or dependent before choosing a formula
- "At least one" problems are often easiest solved using complements: P(at least one) = 1 − P(none)
- When data is grouped, the modal class is the class with highest frequency — for estimated mode: Mode ≈ L + (d₁/(d₁+d₂)) × w, where d₁ = f_m − f_{m−1} and d₂ = f_m − f_{m+1}

**Common Mistakes:**
- Using class boundaries instead of midpoints when calculating the mean — midpoints are essential
- Forgetting to subtract the cumulative frequency before the median class when using the median formula
- Applying the multiplication rule to non-independent events — always check
- Mixing up variance formula: using Σfx²/Σf − (Σfx/Σf)² is correct; using (Σfx² − (Σfx)²/Σf)/Σf is equivalent but requires more care
- In probability questions, reading "or" as AND or vice versa

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Variance Derivation and the Computational Formula**

The definitional formula for variance is σ² = Σ(x − x̄)² / n. Expanding: Σ(x² − 2x x̄ + x̄²) / n = (Σx²/n) − 2x̄(Σx/n) + x̄² = (Σx²/n) − 2x̄² + x̄² = (Σx²/n) − x̄². This is the computationally efficient formula.

For grouped data, replace x with class midpoints and use frequencies: σ² = (Σfx²/Σf) − x̄².

**Standard Deviation for Grouped Data — Worked Example**

| Class | f | x | fx | fx² |
|-------|---|---|----|-----|
| 10–19 | 5 | 14.5 | 72.5 | 1051.25 |
| 20–29 | 12 | 24.5 | 294 | 7203 |
| 30–39 | 18 | 34.5 | 621 | 21424.5 |
| 40–49 | 8 | 44.5 | 356 | 15842 |
| 50–59 | 3 | 54.5 | 163.5 | 8910.75 |
| Total | 46 | — | 1507 | 54431.5 |

x̄ = 1507/46 = 32.76. σ² = (54431.5/46) − (32.76)² = 1183.29 − 1073.14 = 110.15. σ = √110.15 = 10.50.

**The Normal Distribution (Conceptual Introduction)**

The normal distribution is a bell-shaped curve symmetric about the mean. Approximately 68% of values lie within 1 standard deviation of the mean, 95% within 2 SD, and 99.7% within 3 SD. WASSCE doesn't require calculation of normal distribution probabilities but does test understanding of the empirical rule and standard deviation.

**Permutations and Combinations (Probability Counting)**

Permutations (order matters): P(n, r) = n! / (n − r)!.
Combinations (order doesn't matter): C(n, r) = n! / (r!(n − r)!).

Example: How many ways to form a committee of 3 from 10 people? C(10, 3) = 10!/(3!7!) = (10×9×8)/(3×2×1) = 720/6 = 120.

Example: How many 4-digit PINs can be formed using digits 1–9 without repetition? P(9, 4) = 9!/(9−4)! = 9!/5! = 9×8×7×6 = 3024.

**Probability Tree Diagrams — Detailed Analysis**

A biased coin has P(H) = 2/3, P(T) = 1/3. The coin is tossed twice. What is P(exactly one head)?
Tree: First toss (H, T), Second toss (H, T).
P(H then H) = 2/3 × 2/3 = 4/9.
P(H then T) = 2/3 × 1/3 = 2/9.
P(T then H) = 1/3 × 2/3 = 2/9.
P(T then T) = 1/3 × 1/3 = 1/9.
P(exactly one head) = P(H then T) + P(T then H) = 2/9 + 2/9 = 4/9.

**Expected Value**

The expected value (long-run average) of a random variable X is E(X) = Σx × P(X = x).
Example: A game costs GH₵ 5 to play. You win GH₵ 15 with probability 1/4 and GH₵ 0 otherwise. Expected gain = (15−5)(1/4) + (−5)(3/4) = 10/4 − 15/4 = −5/4 = −GH₵1.25. On average, you lose GH₵1.25 per game.

**Data Presentation and Interpretation**

Histograms (for grouped continuous data): bars touch, area proportional to frequency. Frequency polygons: constructed by joining midpoints of histogram tops. Pie charts: each sector angle = (frequency/total) × 360°.

**WASSCE Exam Patterns**

Paper 1: Questions on mean from frequency tables, identifying modal class, reading cumulative frequency curves.
Paper 2 Section A: Often one statistics question involving (a) completing a frequency table, (b) calculating mean and standard deviation, (c) drawing and interpreting an ogive. Probability questions may appear as word problems requiring tree diagrams.

⚡ **Advanced Exam Tip:** When asked to compare two distributions using mean and standard deviation, use the coefficient of variation (CV = σ/x̄ × 100%). A lower CV means more consistent data. For example, Class A has mean 60 and SD 10 (CV = 16.7%), Class B has mean 60 and SD 5 (CV = 8.3%) — Class B is more consistent despite having the same mean.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
