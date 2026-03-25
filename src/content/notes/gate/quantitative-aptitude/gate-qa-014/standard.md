---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-014
topicName: "Permutation & Combination"
tier: standard
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A diagram showing two columns: left column labeled Permutation (arrangements ABC, ACB, BAC, BCA, CAB, CBA — all 6 counted separately) and right column labeled Combination (just one group ABC)"
country: India
generated: ai-v1
---



## Permutation & Combination

### Concept Explanation
Permutation and combination are two sides of the same coin — both involve counting ways to select or arrange items, but they differ in one crucial way: does order matter? Think about a PIN code. The sequence 1234 is completely different from 4321, even though they use the same digits. That's permutation — sequences where the order of elements determines the outcome. Now think about picking players for a cricket team. If you select Sachin, Virat, and Dhoni, it doesn't matter whether you "picked" them in the order S-V-D or V-D-S — it's the same team. That's combination — unordered selections.

The fundamental counting principle is your launching point: if one task can be done in m ways and a second task in n ways, doing both sequentially gives m × n ways. This extends to any number of sequential independent choices. But be careful — this only applies when later choices don't depend on earlier ones. If you're seating people at a round table and the first person blocks certain adjacent spots, you can't simply multiply.

When you're arranging all n items, the number of permutations is simply n! — that's because you have n choices for the first position, then (n-1) for the second, (n-2) for the third, and so on, giving n × (n-1) × (n-2) × ... × 1 = n!. When you're choosing only r items from n without arranging them (a combination), you need to divide out the r! ways of ordering each selection, giving nCr = n!/[r!(n-r)!]. The formula nPr = nCr × r! shows the relationship neatly — permutation is just combination times the arrangement count.

### Key Formulas
| Symbol | Meaning |
|--------|---------|
| n! | n factorial = n × (n−1) × ... × 2 × 1 |
| nPr | Permutation of n items taken r at a time: n!/(n−r)! |
| nCr | Combination of n items taken r at a time: n!/[r!(n−r)!] |
| nCr = nC(n−r) | Symmetry property |

### Step-by-Step Example
**Q:** How many 4-digit passwords can be formed using digits 1-9 if digits cannot repeat and the password must be even?

**Step 1:** An even number ends in 2, 4, 6, or 8 — 4 choices for the last position

**Step 2:** After placing the last digit, 8 digits remain for the first position (1-9 excluding the one used)

**Step 3:** 7 choices for second position, 6 for third position

**Step 4:** Multiply: 8 × 7 × 6 × 4 = **1344**

**Answer:** 1344 passwords

### Common Mistakes
- Forgetting the factorial in denominator for combinations → nCr = n!/[r!(n−r)!], not just n!/r!
- Confusing when to use permutation vs combination → If the problem involves arrangement, ranking, sequence, or position — use permutation. If it involves selection, grouping, or committee — use combination

### Quick Test (2 Qs)
1. Q: In how many ways can 4 boys and 3 girls be arranged in a row if boys and girls are alternate? Options: A) 12×4!×3! B) 2×4!×3! C) 4!×3! D) 144. Ans: B) 2×4!×3! (Reason: If row starts with boy: BGBGBGB. Boys can be arranged in 4! ways, girls in 3! ways. Also possible: GBGBGBB starting with girl. So 2×4!×3!.)
2. Q: From 6 consonants and 4 vowels, how many words of 3 consonants and 2 vowels can be formed? Options: A) C(6,3)×C(4,2)×5! B) C(6,3)+C(4,2)×5! C) P(6,3)×P(4,2)×5! D) 6×4×5!. Ans: A) (Reason: Choose 3 consonants from 6 = C(6,3), choose 2 vowels from 4 = C(4,2), then arrange all 5 letters = 5!.)
