---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-003
topicName: "Average & Weighted Average"
tier: standard
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A classroom scenario showing students with different scores on a board, with the average score illustrated as a horizontal line balancing the different heights of bars representing each student's score"
country: India
generated: ai-v1
---



## Average & Weighted Average

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
