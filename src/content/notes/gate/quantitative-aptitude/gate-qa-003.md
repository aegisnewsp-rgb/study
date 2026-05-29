---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-003
topicName: "Average & Weighted Average"
tier: unified
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A two-group histogram comparing Class A and Class B average scores, with a dashed line showing the weighted combined average positioned closer to Class B due to its larger size"
country: India
generated: ai-v1
---

# Average & Weighted Average

### 🟢 Lite

### Key Formula/Rule
Average = (Sum of all values) ÷ (Number of values)

### Quick Memory Trick
Average is just a fair share — if everyone got the same amount, what would that amount be? That's your average.

### 1-Sentence Summary
The average tells you what the "per person" value would be if you redistributed everything equally across all values.

### Quick Example
Q: Heights of 5 students: 150cm, 155cm, 160cm, 165cm, 170cm. Find average height.
A: (150+155+160+165+170) ÷ 5 = 800 ÷ 5 = 160 cm

### Must Remember
- Average of first n natural numbers = (n+1)/2
- Average is always between the minimum and maximum value
- Adding the same value to every item doesn't change the average difference from each item — it shifts the average by that same amount
- Weighted average = (Σ wᵢ × xᵢ) ÷ (Σ wᵢ) where wᵢ is the weight and xᵢ is the value
- When combining groups: overall average = (n₁×avg₁ + n₂×avg₂) ÷ (n₁ + n₂)

### 🟡 Standard

### Concept Explanation
Average is one of the most intuitive concepts in mathematics, yet it trips up even smart students when weighted averages enter the picture. At its core, an average is an attempt to find one representative number that captures the essence of a group. If five friends share a pizza and each eats a different number of slices (2, 3, 4, 5, 6), how many slices per person is the "fair share"? You add up all the slices (20) and divide by the number of people (5), giving 4 slices per person. That's the average — a way of redistributing so everyone has an equal share. Simple averages work perfectly when every value carries the same weight or importance.

But what happens when values aren't equal in importance? This is where weighted average comes in. Imagine a college course where your exam counts for 60% of your grade but assignments count for only 40%. If you score 90 in exams and 70 in assignments, a simple average would give you (90 + 70) ÷ 2 = 80. But that's misleading — your exam performance should count more. The weighted average is (90 × 0.6) + (70 × 0.4) = 54 + 28 = 82. The exam's higher weight pulls your average up toward your exam score. This is why weighted average matters: it respects the reality that not everything contributes equally to the final picture.

Another common trap is the assumption that combining two groups of numbers always preserves the average. It doesn't. If you merge a class of students with an average score of 80 with another class averaging 60, the combined average isn't 70 — it depends on how many students are in each class. A class of 10 students averaging 80 combined with a class of 40 students averaging 60 gives a combined average of (10×80 + 40×60) ÷ 50 = 800 + 2400 = 3200 ÷ 50 = 64, not 70. The larger group dominates and drags the average down toward 60.

### Key Formulas
| Symbol | Meaning |
|--------|---------|
| A | Average |
| S | Sum of all values |
| n | Number of values |
| wᵢ | Weight of value i |
| xᵢ | Value i |

Average formula: A = S / n = (x₁ + x₂ + ... + xₙ) / n
Weighted average: WA = (Σ wᵢ × xᵢ) / (Σ wᵢ)
Combined average: A = (n₁×A₁ + n₂×A₂) / (n₁ + n₂)

### Step-by-Step Example
**Q:** A student scores 70, 80, 90, and 85 in four tests. Each test has different weights: 1, 2, 3, and 2 respectively. Find the weighted average.

**Step 1:** Set up the weighted average formula.
WA = (Σ wᵢ × xᵢ) / (Σ wᵢ)

**Step 2:** Calculate the sum of weighted values.
= (1×70 + 2×80 + 3×90 + 2×85) / (1+2+3+2)
= (70 + 160 + 270 + 170) / 8
= 670 / 8

**Answer:** 83.75

Compare with simple average: (70+80+90+85)/4 = 325/4 = 81.25. The weighted average is higher because the 90 (weight 3) pulls the result up.

### Common Mistakes
- Simple average vs weighted average confusion → Correction: Only use simple average when all values are equally important. If weights differ, you MUST use weighted average.
- Adding averages directly without considering group sizes → Correction: When combining groups, multiply each group's average by its size before adding.
- Assuming equal distribution causes no change in average → Correction: Adding the same value to every term increases the average by exactly that value. Adding the same value to only some terms changes the weighted result.

### Quick Test (2 Qs)
1. Q: The average of 15 numbers is 25. If each number is multiplied by 3, what is the new average?
   Options: A) 25  B) 75  C) 28  D) 50
   Ans: B) 75 (average also gets multiplied by 3: 25 × 3 = 75)

2. Q: Class A has 30 students with average marks 60. Class B has 20 students with average marks 75. What is the combined average?
   Options: A) 67.5  B) 65  C) 68  D) 66
   Ans: D) 66 (combined = (30×60 + 20×75)/(30+20) = (1800+1500)/50 = 3300/50 = 66)

### 🔴 Extended

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
- Common error: Dividing by 9, as in (45 × 10 − 50 + 40)/9. The count stays 10, because one student left and one joined — the class still has 10 members.

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

*Content adapted based on your selected roadmap duration.*
