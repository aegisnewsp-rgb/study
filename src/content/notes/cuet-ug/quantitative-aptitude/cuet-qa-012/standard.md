---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-012
topicName: "Probability & Statistics"
tier: standard
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "Draw a factorial tree for 5! = 5×4×3×2×1. Show permutation formula nPr = n!/(n-r)! and combination formula nCr = n!/[r!(n-r)!] side by side with an arrow showing 'order matters' vs 'order does not matter'."
country: India
generated: ai-v1
---



## Probability & Statistics

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
