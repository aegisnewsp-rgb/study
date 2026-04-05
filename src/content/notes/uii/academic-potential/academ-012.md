---
exam: uii
examName: UI Entrance (Indonesia)
subject: quant
subjectName: Academic Potential
topic: academ-012
topicName: Probability and Data Interpretation
weight: 3
country: uii
generated: "2026-03-25T17:00:00"
---

# Probability and Data Interpretation

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Probability measures how likely an event is to occur, expressed as a number between 0 (impossible) and 1 (certain). For equally likely outcomes, P(event) = favourable outcomes / total outcomes. Complementary events satisfy P(A) + P(not A) = 1, so P(not A) = 1 − P(A).

Data interpretation questions in the UI entrance test present information in tables, charts, or graphs and ask you to extract and manipulate specific values. Always read the axes, labels, and units carefully before answering.

**Essential Formulas:**
- P(A) = (number of ways A can occur) / (total number of equally likely outcomes)
- P(A or B) = P(A) + P(B) − P(A and B)
- P(A and B) = P(A) × P(B) (independent events only)
- P(A and B) = P(A) × P(B|A) (dependent events)
- P(not A) = 1 − P(A)
- Expected value = Σ (value × probability)

**Key Facts:**
- If P(A) = 0.35, then P(not A) = 0.65 — always verify probabilities sum to 1
- Mean from a frequency table: x̄ = Σfx / Σf
- Reading bar charts: bar height/length corresponds to value; read the scale carefully
- Pie charts: sector angle = (category value / total) × 360°

⚡ **Exam Tip:** In the UI entrance test, probability questions often involve real-world scenarios like weather, games, or surveys. For data interpretation, always check whether the chart shows absolute values or percentages. If a bar shows "50%" directly, don't multiply by 100 again. When asked about trends ("increasing", "decreasing"), describe the pattern in plain language — no calculations needed.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Basic Probability — Counting Outcomes**

When calculating probability, you need to count outcomes accurately. For a standard die: 6 equally likely outcomes (1, 2, 3, 4, 5, 6). P(rolling a 4) = 1/6. P(rolling an even number) = 3/6 = 1/2 (outcomes 2, 4, 6).

For two independent events (like two coin tosses): total outcomes = 2 × 2 = 4. Sample space: {HH, HT, TH, TT}. P(exactly one head) = 2/4 = 1/2.

**Complementary Events**

Often it's easier to find P(not A) and subtract from 1. Example: "What is the probability of rolling at least one 6 in two dice rolls?" P(no 6 in one roll) = 5/6. P(no 6 in two rolls) = (5/6) × (5/6) = 25/36. So P(at least one 6) = 1 − 25/36 = 11/36.

**Addition Rule (OR)**

For any two events A and B: P(A or B) = P(A) + P(B) − P(A and B).
If A and B are mutually exclusive (cannot both occur): P(A or B) = P(A) + P(B).

Example: From a standard deck of 52 cards, P(King or Queen) = 4/52 + 4/52 = 8/52 = 2/13 (mutually exclusive — cannot be both).
P(King or Heart): 4/52 + 13/52 − 1/52 = 16/52 = 4/13 (not mutually exclusive — King of Hearts).

**Multiplication Rule (AND)**

Independent events: P(A and B) = P(A) × P(B).
Example: Toss a fair coin and roll a die. P(Head and even number) = ½ × 3/6 = ½ × ½ = 1/4.

Dependent events (without replacement): P(A and B) = P(A) × P(B|A).
Example: Draw two cards without replacement. P(both Kings) = (4/52) × (3/51) = 12/2652 = 1/221.

**Data Interpretation — Tables**

A frequency table lists categories and their frequencies. Example: favourite colour among 200 students:

| Colour | Frequency | Percentage |
|--------|-----------|------------|
| Blue   | 60        | 30%        |
| Red    | 50        | 25%        |
| Green  | 40        | 20%        |
| Yellow | 30        | 15%        |
| Other  | 20        | 10%        |

To find the proportion of students who prefer Blue or Green: (60 + 40)/200 = 100/200 = 1/2 = 50%.

**Data Interpretation — Bar Charts and Pie Charts**

Bar chart: compare quantities across categories. A double bar chart compares two related datasets side by side.

Pie chart: shows parts of a whole. Each sector represents a proportion of the total. The angle of sector ABC = (value of ABC / total) × 360°.

Example: In a pie chart showing monthly expenses of Rp 4,500,000, if rent is 40% of expenses, the rent sector angle = 0.40 × 360° = 144°.

**Line Graphs — Trends Over Time**

Line graphs show how values change. Common questions: "In which month was the value highest/lowest?" "What was the average change between consecutive months?" "What was the percentage increase from month 2 to month 5?"

Example: A company's sales over 5 months: Jan Rp 10M, Feb Rp 12M, Mar Rp 11M, Apr Rp 15M, May Rp 14M.
Percentage increase from Jan to May: (14−10)/10 × 100% = 40%.

**Problem-Solving Strategies:**
- For "at least one" probability questions, use the complement: 1 − P(none)
- When reading data tables, identify what each row and column represents before calculating
- For percentage questions, confirm whether the percentage is of the total or of a subtotal
- In "more than" / "less than" questions from frequency data, sum the relevant frequencies

**Common Mistakes:**
- Assuming events are independent when they are not (e.g., drawing cards without replacement)
- Forgetting to subtract P(A and B) when using the addition rule for non-mutually exclusive events
- Misreading chart scales — graph axes may not start at zero, or may use non-uniform intervals
- Confusing cumulative frequency with individual frequency in tables

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Probability Trees — Detailed Analysis**

A probability tree shows all possible outcomes and their probabilities at each stage.

Example: A bag contains 3 red and 2 blue balls. Two balls are drawn without replacement.
First draw: P(Red) = 3/5, P(Blue) = 2/5.
If first is Red: remaining = 2 red, 2 blue. Second: P(Red) = 2/4 = 1/2, P(Blue) = 2/4 = 1/2.
If first is Blue: remaining = 3 red, 1 blue. Second: P(Red) = 3/4, P(Blue) = 1/4.

Tree paths and probabilities:
Red then Red: (3/5)(1/2) = 3/10
Red then Blue: (3/5)(1/2) = 3/10
Blue then Red: (2/5)(3/4) = 6/20 = 3/10
Blue then Blue: (2/5)(1/4) = 2/20 = 1/10

P(both same colour) = 3/10 + 1/10 = 4/10 = 2/5.
P(both different) = 3/10 + 3/10 = 6/10 = 3/5.
Verify sum: 4/10 + 6/10 = 1. ✓

**Conditional Probability**

P(B|A) is the probability of B given that A has occurred. P(B|A) = P(A and B) / P(A).

Example: In a school of 200 students, 120 study Mathematics and 80 study Physics. 30 study both.
P(M) = 120/200 = 0.6. P(M and P) = 30/200 = 0.15.
P(M|P) = P(M and P) / P(P) = 0.15 / 0.4 = 0.375. Given that a student studies Physics, there is a 37.5% chance they also study Mathematics.

**Expected Value and Long-Run Average**

Expected value represents the long-run average outcome if an experiment is repeated many times.

Example: A lottery ticket costs Rp 10,000. There are 1,000 tickets. One ticket wins Rp 2,000,000. P(win) = 1/1000, P(lose) = 999/1000.
Expected gain = (2,000,000 − 10,000)(1/1000) + (−10,000)(999/1000) = 1,990,000/1000 − 9,990,000/1000 = 1,990 − 9,990 = −8,000. On average, you lose Rp 8,000 per ticket.

**Data Interpretation — Comparing Datasets**

When comparing two datasets, use relative values (percentages) rather than absolute numbers if the totals differ.

Example: Compare two stores' electronics sales:

| Store | Electronics Sales (Rp M) | Total Sales (Rp M) |
|-------|-------------------------|-------------------|
| A     | 150                     | 500               |
| B     | 200                     | 1,000             |

Store A: 150/500 = 30% of total sales are electronics.
Store B: 200/1000 = 20%.
Store A has a higher proportion of electronics sales despite having lower absolute electronics revenue.

**Reading Complex Tables — Multi-Variable Data**

Example table showing exam scores for students by gender and programme:

| Programme | Male Average | Female Average | Overall Average |
|-----------|-------------|---------------|-----------------|
| IPA       | 75          | 80            | 77              |
| IPS       | 70          | 72            | 71              |

Questions could ask: "If there are 60 IPA students (30 male, 30 female), what is the total score sum for IPA?" Total = 60 × 77 = 4,620. Or: "What is the weighted average for all students if IPA has 60 and IPS has 40?" Overall = (60×77 + 40×71)/100 = (4620 + 2840)/100 = 74.6.

**Statistics: Mean, Median, Mode**

Mean: sum of values / number of values. Sensitive to outliers.
Median: middle value when sorted. 50% of values are below it.
Mode: most frequent value.

For the data set {4, 7, 7, 7, 9, 11, 15}: mean = (4+7+7+7+9+11+15)/7 = 60/7 ≈ 8.57; median = 7 (4th value); mode = 7.

**UI Entrance Exam Patterns**

The Academic Potential test typically presents 4–5 data interpretation questions per section. These are often the most time-consuming because they require careful reading of tables and charts. Common question types:
1. Direct reading: "What was the value of X in year Y?" — straightforward lookup
2. Comparison: "Which category was largest/smallest?" — compare values
3. Calculation: "What percentage of total was X?" — ratio and percentage
4. Trend: "Describe the trend in X over the period" — identify pattern
5. Inference: "Based on the data, which conclusion can be drawn?" — requires logical deduction from data

⚡ **Exam Strategy:** For the UI Academic Potential test, work backwards from the answer choices when stuck. Eliminate answers that are clearly wrong by direct contradiction with the data. Watch out for answer choices that are correct but answer a different question than what was asked.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
