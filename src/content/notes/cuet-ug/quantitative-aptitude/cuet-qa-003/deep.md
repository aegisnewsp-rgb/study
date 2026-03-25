---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-003
topicName: "Average, Mixture & Alligation — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "A detailed alligation cross-diagram: mean price 40 in the centre, cheap 30 on left, dear 50 on right, with arrows showing differences and the ratio written below"
country: India
generated: ai-v1
---



## Average, Mixture & Alligation — Deep Dive

### Full Concept

**Why Weighted Average Formula Works — The Proof**

When combining two groups, you're really just adding all their individual values together. Group 1 has n₁ items with average avg₁, contributing a total of n₁ × avg₁ to the grand sum. Group 2 contributes n₂ × avg₂. The total sum is (n₁×avg₁ + n₂×avg₂) over (n₁ + n₂) items, giving the weighted average formula.

This isn't just a formula — it explains why the simple average of two averages (60 and 80) is wrong when group sizes differ. If 10 people average 60 and 30 people average 80, the 30 people from Group B drag the combined average up toward 80. You can't treat a group of 10 and a group of 30 identically.

**Alligation — The Graphical Method Derivation**

The alligation cross is a visual shortcut. Place the cheaper concentration on the left, the dearer on the right, and the desired mean in the middle:

```
Cheaper (c)     Mean (m)     Dearer (d)
    c -------|------ m ------|------- d
```

The difference d − m tells you how many parts of the cheaper you need. The difference m − c tells you how many parts of the dearer you need. Why? Because the area of each rectangle in the diagram is proportional to the quantity needed — heavier weights are farther from the mean.

More formally: In the mixture, if you need x kg at ₹c/kg and y kg at ₹d/kg to get mean ₹m/kg:
- Total cost = cx + dy
- Total quantity = x + y
- Mean price: m = (cx + dy)/(x + y)
- Solving: mx + my = cx + dy → m(x − y) = (c − m)x + (d − m)y

For the special case where x + y = 1 (unit mixture): the ratio x : y = (d − m) : (m − c).

**When Values Repeat in the Set**

If a number appears multiple times in a group, treat it as repeated entries. The average of {5, 5, 5, 7, 7, 8} is (5+5+5+7+7+8) ÷ 6 = 37 ÷ 6 = 6.17. You can also think: the sum of the five 5s and 7s... no shortcut here, just count each occurrence.

**Advanced Mixture Problems**

*Alloy problems:* A jeweller has gold of 80% purity and gold of 95% purity. How much of each must be mixed to get 100g of 88% pure gold?
- Using alligation: cheaper = 80%, dearer = 95%, mean = 88%
- Ratio = (95 − 88) : (88 − 80) = 7 : 8
- Total parts = 15, so each part = 100/15 g ≈ 6.67 g
- 80% gold needed = 7 × 6.67 ≈ 46.67 g
- 95% gold needed = 8 × 6.67 ≈ 53.33 g

*Spirit-water problems:* A vessel contains 40 litres of a mixture with 30% spirit. How much water must be added to make it 20% spirit?
- Spirit quantity stays constant: 30% of 40 = 12 litres of spirit
- If 12 litres = 20% of new total, then new total = 12 ÷ 0.2 = 60 litres
- Water added = 60 − 40 = **20 litres**

*Replacement problems:* A vessel has 60 litres of milk. 12 litres are removed and replaced with water. This is done twice. How much milk remains?
- After 1st replacement: milk = 60 × (1 − 12/60) = 60 × 48/60 = 48 litres
- After 2nd replacement: milk = 48 × (48/60) = 48 × 0.8 = **38.4 litres**
- Formula: Final = Initial × (1 − r/n)ⁿ where r = replaced amount, n = total

### Multiple Approaches

**Finding a missing number when average is known:**
- *Standard:* Total = Average × n, Missing = Total − (sum of known numbers)
- *Shortcut:* The missing number always equals (given average × total count) − (sum of all other numbers)

**Alligation when one component is pure water (0%):**
- If mixing water (0%) with 50% juice to get 30% juice, ratio = (50 − 30) : (30 − 0) = 20 : 30 = 2 : 3
- Water always goes on the 0% side of the diagram

### CUET-Level Problems

**Q1:** The average weight of 30 students is 45 kg. One student weighing 60 kg leaves and is replaced by a new student. The new average becomes 44 kg. What is the weight of the new student?
Working: Total initial weight = 30 × 45 = 1350 kg. After one leaves, weight = 1350 − 60 = 1290 kg. New total for 30 students = 30 × 44 = 1320 kg. New student's weight = 1320 − 1290 = **30 kg**.
Answer: **30 kg**

**Q2:** In what ratio must rice at ₹40/kg be mixed with rice at ₹60/kg so that the mixture costs ₹50/kg?
Working: Alligation: cheaper 40, dearer 60, mean 50. Difference right = 60 − 50 = 10 parts dearer. Difference left = 50 − 40 = 10 parts cheaper. Ratio = 10 : 10 = **1 : 1**.
Answer: **1 : 1**

### Tricky Cases
- **Mean is outside the range** — if you want a mean price of ₹25 between ₹20 and ₹30, that's fine. But if someone asks for mean price of ₹35 between ₹20 and ₹30, it's impossible — the mean must always lie between the two extremes.
- **Replacement without mixing**: Removing some mixture and replacing with pure water repeatedly — always use (1 − r/n)ⁿ formula
- **Average of the same number repeated**: Adding numbers equal to the average doesn't change the average — useful in sequential addition problems
- **Weighted average when n₁ = n₂**: Falls back to simple average (avg₁ + avg₂)/2 — but only when group sizes are equal
