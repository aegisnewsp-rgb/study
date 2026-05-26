---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-012
topicName: "Probability & Statistics"
tier: unified
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "Draw a probability tree diagram showing two coin tosses. Each toss branches into Head and Tail. Label each end path with its probability. Show P(At least one Head) calculation using complement: 1 - P(no heads) = 1 - (1/2 × 1/2) = 3/4."
country: India
generated: ai-v1
---

# Probability & Statistics

### 🟢 Lite

### Key Formula/Rule
Mean = Sum of values / Number of values; P(event) = Favorable outcomes / Total outcomes

### Memory Trick
**Mean: "Sum-divide"** — add everything up, then divide. **Median: "Middle-in"** — sort numbers, find the middle one. **Mode: "Most"** — whoever appears most often wins. For probability: **"Good ÷ All"** — good outcomes divided by total outcomes.

### 1-Sentence Summary
Statistics summarizes data (Mean, Median, Mode tell you the "typical" value), while Probability predicts how likely events are to happen.

### 30-Second Example
Q: Find the mean of 4, 8, 6, 5, 7.
A: 6 — (4 + 8 + 6 + 5 + 7) / 5 = 30 / 5 = 6

### 🟡 Standard

### Concept
**Statistics** is about summarizing and understanding data. When someone says "the average score in the exam was 72," that's a statistic — a single number that summarizes a whole dataset. The three main measures of central tendency (where the data clusters) are Mean, Median, and Mode.

**Mean** is what most people mean by "average" — sum divided by count. It's the most common measure but gets pulled around by extreme values (outliers).

**Median** is the middle value when you sort the data. Half the values are above it, half below. The median doesn't budge when outliers swing extreme — it's more stable.

**Mode** is the most frequent value. A dataset can have no mode (all values unique), one mode (unimodal), or two+ modes (bimodal/multimodal).

**Probability** answers: "How likely is this to happen?" Probability is always between 0 and 1, where 0 means impossible and 1 means certain. The classical approach: P(Event) = Number of favorable outcomes / Total number of possible outcomes.

**Permutations vs Combinations** — this is where students often get confused. Permutations (nPr) count arrangements where ORDER MATTERS. Combinations (nCr) count groups where ORDER DOESN'T MATTER. Example: selecting a captain and vice-captain from 5 students is a permutation (order matters: A-captain, B-vice is different from B-captain, A-vice). Selecting any 3 students to form a committee is a combination (A+B+C is the same as C+B+A).

### Key Formulas
| Formula | Use |
|---------|-----|
| Mean = Σx / n | Average of raw data |
| Median = middle value (sorted) | Central value, outlier-resistant |
| Mode = most frequent value | Most common occurrence |
| P(event) = Favorable / Total | Classical probability |
| P(complementary) = 1 - P(event) | "At least one" problems |
| P(A or B) = P(A) + P(B) - P(A∩B) | Union of two events |
| P(A∩B) = P(A) × P(B) | Independent events |
| nPr = n! / (n - r)! | Arrangements (order matters) |
| nCr = n! / [r!(n - r)!] | Selections (order doesn't matter) |

### Worked Example
**Q:** From a deck of 52 cards, what is the probability of drawing an Ace?

**Step 1:** Number of favorable outcomes (Aces) = 4
**Step 2:** Total possible outcomes (cards) = 52
**Step 3:** P(Ace) = 4/52 = 1/13

**Answer:** 1/13

### Common Errors
- Confusing nPr and nCr → If the problem mentions "arrangement," "order," or "sequence" — it's nPr. If it says "selection," "group," or "team" — it's nCr.
- Forgetting to simplify fractions → Always reduce probability fractions to lowest terms (4/52 = 1/13)
- Probability > 1 or < 0 → Impossible! Probability is always between 0 and 1. If you get >1, something went wrong.

### 🔴 Extended

### Full Concept

**Why Median is Better When Outliers Exist**
Imagine 5 people's salaries: ₹3L, ₹4L, ₹5L, ₹6L, ₹100L. The mean = ₹23.6L, which makes it look like everyone earns ₹23+ lakh — completely misleading. The median = ₹5L, which accurately represents what a typical person earns. The outlier (₹100L) distorts the mean but not the median. In real-world data (income, house prices, exam scores with some superstars), outliers are common. This is why journalists often use median salary instead of mean.

**The Mean-Mode-Median Relationship**
For a normally distributed dataset: **Mean - Mode = 3(Mean - Median)**. This empirical relationship lets you find one measure if you know the other two. In CUET problems, they often give you any two and ask you to calculate the third. Remember: this formula works best for symmetric, unimodal distributions.

**Weighted Mean — When Different Groups Have Different Sizes**
Regular mean assumes all values contribute equally. But what if Group A has 10 students averaging 80, and Group B has 20 students averaging 90? The overall average is NOT (80+90)/2 = 85. It's weighted: (10×80 + 20×90)/(10+20) = (800+1800)/30 = 2600/30 = 86.67. The bigger group pulls the average toward its mean. This appears in problems about combined averages of different-sized classes or mixed-type questions.

**nCr = nC(n-r) Symmetry — The Complement Property**
Choosing 3 people to exclude from 10 is the same as choosing 7 people to include. So ¹⁰C₃ = ¹⁰C₇. This symmetry cuts your work in half — if you're calculating nCr and r > n/2, flip to (n-r). For example, ¹⁰C₈ = ¹⁰C₂ = 45 (much easier to compute!).

**Arrangements with Repetition — The "Repeated Letters" Problem**
How many ways to arrange the letters of "BANANA"? Normally 6! = 720, but since A repeats 3 times and N repeats 2 times: 6!/(3!×2!) = 60. The denominator is the product of factorials of each repeating element's count. This formula also works for any objects with duplicates.

**Conditional Probability P(A|B) — "Given That B Happened"**
P(A|B) means "probability of A given that B has already occurred." Formula: P(A|B) = P(A∩B) / P(B). Example: P(Rain|Clouds) = probability it rains given that clouds are observed. From a Venn diagram or table, P(A∩B) is the intersection, P(B) is the row/column total. This is tested heavily in CUET.

**"At Least One" Problems — Use Complement**
P(at least one head in 3 coin tosses) = 1 - P(no heads) = 1 - P(all tails) = 1 - (1/2)³ = 1 - 1/8 = 7/8. Why go backwards? Because "at least one" has MANY possibilities (1 head, 2 heads, 3 heads) — calculating all directly is messy. Complement is always: 1 - P(none). This is one of the most reliable shortcuts in probability.

**Probability Trees — Visual Problem Solving**
For multi-step experiments (toss 2 dice, what is P(sum = 7)?), draw a tree:
- First die: 6 branches (1,2,3,4,5,6)
- Second die: from each, 6 more branches
- Each path = product of probabilities (1/6 × 1/6 = 1/36)
- Count favorable paths, sum probabilities

### Multiple Approaches

**Standard:** Identify formula → substitute values → calculate.

**Shortcut — Complement for "At Least One":** Instead of calculating P(A or B or C...), calculate 1 - P(none of them). Saves time and errors.

**Shortcut — nCr when r > n/2:** Use nC(n-r) instead. ¹⁵C₁₂ = ¹⁵C₃ = 455 (far easier to compute than working through 12!).

**Shortcut — Probability via Ratio:** Sometimes P = nCr × p^r × q^(n-r) for r successes in n independent trials. This is the binomial probability formula — useful for "exactly 2 heads in 5 tosses" problems.

### CUET-Level Problems

**Q1:** The mean of 20 numbers is 15. If each number is multiplied by 3, what is the new mean?
Working: New mean = 15 × 3 = **45**
Answer: 45 (properties of mean: multiplying all values multiplies the mean by the same factor)

**Q2:** How many different words can be formed from the letters of "DELHI" if the word must start with D?
Working: Fix D at first position. Remaining 4 letters can be arranged in 4! = 24 ways.
Answer: **24**

**Q3:** In a class, 60% students like Mathematics, 50% like Physics, and 30% like both. If a student is randomly selected and you know they like Physics, what's the probability they also like Mathematics?
Working: P(M|P) = P(M∩P) / P(P) = 0.30 / 0.50 = 3/5 = **0.6**
Answer: **3/5 or 0.6**

**Q4:** Three cards are drawn without replacement from a deck. What is P(all 3 are Kings)?
Working: P = (4/52) × (3/51) × (2/50) = 24/132600 = 1/5525
Answer: **1/5525**

### Tricky Cases
- **Mean of a frequency distribution:** Multiply each value by its frequency, sum those products, divide by total frequency — not just total values. Σ(f×x) / Σf.
- **When there are TWO middle values in median:** The median is the average of the two middle values. For 6 sorted values (positions 1-6), median = (value at position 3 + value at position 4) / 2.
- **Dependent vs Independent events:** Drawing cards WITHOUT replacement = dependent (P(A) changes after A). Tossing coins WITH replacement = independent (P(A) always same). CUET loves testing this distinction.
- **Mutually Exclusive events:** If A and B cannot happen together (like rolling a 3 AND a 5 on one die), P(A∩B) = 0, so P(A or B) = P(A) + P(B). If they CAN occur together, subtract the overlap.
- **Dice: sum of two dice:** 36 total outcomes. Most common sum = 7 (6 ways: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1). Always remember this fact — it appears in many probability questions.

*Content adapted based on your selected roadmap duration.*
