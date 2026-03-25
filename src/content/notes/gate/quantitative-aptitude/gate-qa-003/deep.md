---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-003
topicName: "Average & Weighted Average — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A two-group histogram comparing Class A and Class B average scores, with a dashed line showing the weighted combined average positioned closer to Class B due to its larger size"
country: India
generated: ai-v1
---



## Average & Weighted Average — Deep Dive

### Concept Deep Dive
Average is a measure of central tendency — one of the three key statistical measures (alongside median and mode) that tell you where data tends to cluster. But average has a fascinating mathematical property that makes it unique: it minimizes the sum of squared deviations from itself. What does this mean practically? If you pick any other number as your "typical" value and measure how far each actual value strays from it (squared, so direction doesn't matter), the total squared error is always smallest when you use the arithmetic mean. This is why the average is so fundamental — it's the single number that best represents a set of numbers in the least-squares sense.

Let's dig into weighted average from first principles. When you compute a simple average of [80, 90], you get 85 — equal weight to both values. But mathematically, the simple average (x₁ + x₂)/2 is just a special case of weighted average where both weights equal 1. The formula (w₁x₁ + w₂x₂)/(w₁ + w₂) generalizes this. When w₁ = w₂, it simplifies to (x₁ + x₂)/2. So simple average IS weighted average with equal weights. The distinction is only about whether the weights differ.

The combined average formula — A = (n₁×A₁ + n₂×A₂)/(n₁ + n₂) — is one of the most practically useful results in quantitative aptitude. It emerges naturally from the definition of average itself. If group 1 has sum S₁ = n₁ × A₁ and group 2 has sum S₂ = n₂ × A₂, then the combined average is (S₁ + S₂)/(n₁ + n₂). This formula is deceptively simple — many students apply it correctly without realizing it follows directly from the definition of average. The danger is applying it to situations where it doesn't belong, like trying to combine averages of non-disjoint groups without knowing the overlap.

Consider the case where one value in a dataset changes. If the average of n values is A, and one value x is replaced by y, the new average A' can be found without knowing all other values: A' = A + (y − x)/n. This formula is incredibly useful in problems where you're tracking how one change affects the overall average. If the average salary of 10 employees is ₹50,000 and an employee earning ₹40,000 gets a raise to ₹60,000, the new average is 50,000 + (60,000 − 40,000)/10 = 52,000. You didn't need to know what everyone else earned.

### Advanced Formula Derivation

**Deriving the combined average formula:**
Given:
- Group 1: n₁ items, average A₁ → sum = n₁ × A₁
- Group 2: n₂ items, average A₂ → sum = n₂ × A₂

Combined sum = n₁ × A₁ + n₂ × A₂
Combined count = n₁ + n₂
Combined average = (n₁ × A₁ + n₂ × A₂) / (n₁ + n₂)

**Deriving the individual change formula:**
Original average A = S/n, where S is the total sum.
After replacing x with y: new sum S' = S − x + y = nA − x + y
New average A' = S'/n = (nA − x + y)/n = A + (y − x)/n

**For three or more groups, the formula extends naturally:**
A = (n₁×A₁ + n₂×A₂ + n₃×A₃ + ...) / (n₁ + n₂ + n₃ + ...)

### GATE-Level Numerical Problems

**Q1 (GATE 2020):** The average of 50 numbers is 30. Later it was found that one number 45 was wrongly taken as 54. What is the corrected average?
- Working:
  - Original sum = 50 × 30 = 1500
  - Corrected sum = 1500 − 54 + 45 = 1491
  - Corrected average = 1491 ÷ 50 = 29.82
- Answer: 29.82
- Common error: Trying to adjust the average directly by (45−54)/50 = −0.18 → 30 − 0.18 = 29.82 is actually correct here — but students should understand this is the shortcut, not magic.

**Q2 (GATE 2019):** The average weight of 10 students in a class is 45 kg. One student weighing 50 kg leaves and a new student joins weighing 40 kg. What is the new average?
- Working:
  - Using the change formula: A' = A + (y − x)/n
  - A' = 45 + (40 − 50)/10 = 45 − 1 = 44 kg
- Answer: 44 kg
- Common error: Trying to think of it as (45 × 10 − 50 + 40)/9 — but n stays 10 since one left and one joined. Only 9 students remain.

**Q3:** A batsman scored 80, 0, 50, and 70 in four innings. In a fifth innings, he scored a century. His average increased by exactly 10 runs. Find his new average.
- Working:
  - Original average: (80+0+50+70)/4 = 200/4 = 50
  - New average after 5 innings: let A' = 50 + 10 = 60
  - Total after 5 innings = 5 × 60 = 300
  - Check: original sum = 200, new sum = 200 + 100 = 300 ✓, average = 300/5 = 60 ✓
- Answer: 60 runs
- Common error: Thinking the average increases by 10 means just add 10 to the old average — the fifth score must specifically cause this increase.

### Multiple Approaches

**Method A: Direct calculation (always works)**
Find sum of all values, divide by count. For weighted average, multiply each value by its weight, sum those, then divide by total weight. This method is foolproof but slower.

**Method B: Deviation method (faster for clustered data)**
When values are close to a guessed average, compute deviations from the guess and average those. Example: for data 98, 102, 97, 101, 99, guess average = 100. Deviations: −2, +2, −3, +1, −1. Sum of deviations = −3. Average deviation = −3/5 = −0.6. Actual average = 100 − 0.6 = 99.4.

**When to use:** Method A for precision and when data is not conveniently clustered. Method B for speed when you spot numbers near a round value.

### Tricky Cases
- **Negative values in weighted average:** Weighted average works with any real numbers, positive or negative. Weights can also be negative, though this is rare in exam contexts. In signal processing, negative weights allow weighted averages below every individual value.
- **Percentage as weight:** When weights are percentages (like 40%, 60%), they must sum to 100%. You can verify: weighted average = (40%×A + 60%×B)/100% = 0.4A + 0.6B. This is exactly the same as giving weights 2 and 3 to A and B respectively.
- **Missing data from averages:** If you know the average of n values but one value is unknown, you can't determine the exact value — only the sum. To find the missing value, you need either another equation or the sum of the remaining values.
- **Average of squares vs square of average:** These are completely different. (x₁² + x₂²)/2 vs ((x₁+x₂)/2)². The first is always ≥ the second (by the QM-AM inequality). For [3, 4]: average of squares = (9+16)/2 = 12.5, square of average = (3.5)² = 12.25. Note: 12.5 > 12.25 always unless all numbers are equal.
