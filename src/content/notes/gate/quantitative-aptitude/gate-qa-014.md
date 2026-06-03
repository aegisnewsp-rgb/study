---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-014
topicName: "Permutation & Combination"
tier: unified
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A comprehensive decision tree starting with 'Arrange all or select subset?' branching to 'Permutation or Combination?' and further to circular permutations and combinations with repetition"
country: india
generated: 2026-05-26
lastUpdated: 2026-05-26
---

# Permutation & Combination

### 🟢 Lite

### Key Formula/Rule
Permutation = ORDER matters: nPr = n!/(n−r)!
Combination = ORDER doesn't matter: nCr = n!/[r!(n−r)!]

### Quick Memory Trick
**"Permutation = Position"** — When arrangement/position/order matters, it's a permutation.
**"Combination = Committee"** — Choosing people for a committee, order doesn't matter.
nCr = nPr / r! (divide out the order)

### 1-Sentence Summary
Permutation counts arrangements where order matters; combination counts selections where order is irrelevant.

### Quick Example
Q: How many ways to arrange 3 books out of 5 on a shelf?
A: 5P3 = 5!/(5−3)! = 120/2! = **60**

Q: How many ways to choose 3 people from 5 for a committee?
A: 5C3 = 5!/[3!×2!] = 120/(6×2) = **10**

### Must Remember
- 0! = 1 (by definition)
- nCn = 1, nC0 = 1, nC1 = n, nC(n−1) = n
- nCr = nC(n−r) (complement symmetry)
- nPr = nCr × r!

### 🟡 Standard

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

### 🔴 Extended

### Concept Deep Dive
Counting problems look deceptively simple but can become trap problems very quickly. The key is to correctly identify what kind of counting situation you're in. At the highest level, every counting problem involves either arrangement (permutation) or selection (combination), and the critical question is whether order matters in the context of the problem. But even this distinction has nuances — when you arrange items in a circle, for instance, rotation doesn't create a new arrangement, which fundamentally changes the count.

Consider circular permutations. If you seat 5 people around a round table, how many distinct arrangements are there? The naive answer is 5! = 120. But think about it: if everyone shifts one seat clockwise, you get the same seating configuration. All 5 rotations of any arrangement are identical in a circle. So you divide by 5, giving (5-1)! = 4! = 24. The formula for circular permutations of n distinct objects is (n-1)!. This only applies when the circle has no fixed reference point — if there's a head of the table or a specific north position, then regular linear arrangements apply.

Combinations with repetition are another area where students get tripped up. When you're choosing items where repetition is allowed and order doesn't matter, the formula changes. How many ways can you select 3 fruits from a basket containing apples, oranges, and mangoes (with unlimited supply of each)? This is a "stars and bars" problem: you need to distribute 3 selections among 3 types, and the formula is C(n+r-1, r) where n is the number of types and r is the number of selections. So C(3+3-1, 3) = C(5, 3) = 10. The logic: imagine representing your selection as 3 stars (the fruits) and 2 bars (dividers between fruit types). Arrange these 5 symbols in any order.

The inclusion-exclusion principle also appears in counting problems. If you want to count numbers from 1 to 1000 that are divisible by 3 or 5, you can't just add C(1000/3) + C(1000/5) because numbers divisible by both (like 15, 30, 45) get counted twice. So you subtract those. Count(divisible by 3 or 5) = floor(1000/3) + floor(1000/5) - floor(1000/15) = 333 + 200 - 66 = 467.

### Advanced Formula Derivation
**Combinations with repetition (stars and bars)**: You want to select r items from n types with unlimited repetition. Think of placing r identical balls into n distinct boxes. Represent this by a sequence of r stars (items) and (n-1) bars (dividers between types). The total number of symbols is r + (n-1), and you need to choose positions for the (n-1) bars. So the number of selections is C(r+n-1, n-1) = C(r+n-1, r). For example, if you have 3 flavors and buy 10 ice creams with unlimited flavor access, that's C(10+3-1, 10) = C(12, 10) = 66 different multisets of 10 ice creams.

### GATE-Level Numerical Problems
**Q1 (GATE 2020):** In how many ways can 7 identical gifts be distributed among 3 children so that each gets at least one?
- Working: Since each child must get at least one, give 1 gift to each child first. That uses 3 gifts, leaving 4 gifts to distribute freely among 3 children (including possibly giving a child 0 more). This is a stars and bars problem with 4 identical items and 3 children: C(4+3-1, 3-1) = C(6, 2) = 15.
- Answer: **15**
- Common error: Forgetting to subtract the mandatory 1 gift per child and getting C(7+3-1, 3-1) = C(9, 2) = 36

**Q2 (GATE 2018):** How many 5-digit numbers can be formed using digits 0, 1, 2, 3, 4 (without repetition) that are divisible by 6?
- Working: A number divisible by 6 must be even (divisible by 2) and sum of digits divisible by 3 (divisible by 3). Last digit must be 0, 2, or 4. Case 1: last digit=0: first 4 positions from {1,2,3,4} — 4! = 24. Case 2: last digit=2: first digit can't be 0, so from {1,3,4} for first position (3 choices), remaining 3 positions from remaining 3 digits (3! = 6) = 18. Case 3: last digit=4: first digit from {1,2,3} (3 choices, excluding 0), remaining 3 from remaining 3! = 18. Total = 24+18+18 = 60.
- Answer: **60**
- Common error: Including 0 in the first position (creating 4-digit numbers), or forgetting the divisibility-by-3 condition

**Q3:** In how many ways can the letters of the word "TRIANGLE" be arranged such that no vowel occupies either the first or the last position?
- Working: "TRIANGLE" has 8 letters: T, R, I, A, N, G, L, E — 5 consonants (T, R, N, G, L) and 3 vowels (I, A, E). First and last positions must be consonants: choose 2 from 5 consonants, arrange them = 5P2 = 20. Remaining 6 positions (middle 6 slots) filled by remaining 6 letters (3 consonants + 3 vowels) in 6! ways = 720. Total = 20 × 720 = 14,400.
- Answer: **14,400**
- Common error: Treating vowel/consonant positions as freely interchangeable rather than constrained

### Multiple Approaches
**Method A: Direct formula** — Identify permutation (order matters) vs combination (order doesn't matter), check for circular/restricted conditions, apply nPr, nCr, or (n-1)! as appropriate.

**Method B: Slot method** — Place items in positions one by one. If a number must be in position 1, fill it first. Count choices for each slot, multiply. Best for restricted position problems.

**When to use:** Use direct formulas for straightforward arrangements/selections. Use the slot method when there are restrictions on specific positions or when items have special constraints.

### Tricky Cases
- **Permutation with some identical items**: If a word like "MISSISSIPPI" has repeated letters, divide n! by the factorial of each letter's count. Total arrangements of "BANANA" (B=1, A=3, N=2) = 6!/(3!×2!) = 60.
- **Arranging people around a table**: Always (n-1)! for circular arrangements unless there's a distinguished position. For 2 circular arrangements that are mirror images to be considered identical (no clockwise/counterclockwise distinction), divide further by 2.
- **Selection from groups**: If you need to select r men from m and s women from n to form a committee, the number is mCr × nCs. Multiply because you're doing two independent sequential selections.

*Content adapted based on your selected roadmap duration.*
