---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-014
topicName: "Permutation & Combination — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A comprehensive decision tree starting with 'Arrange all or select subset?' branching to 'Permutation or Combination?' and further to circular permutations and combinations with repetition"
country: India
generated: ai-v1
---



## Permutation & Combination — Deep Dive

### Concept Deep Dive
Counting problems look deceptively simple but can become陷阱 (trap) problems very quickly. The key is to correctly identify what kind of counting situation you're in. At the highest level, every counting problem involves either arrangement (permutation) or selection (combination), and the critical question is whether order matters in the context of the problem. But even this distinction has nuances — when you arrange items in a circle, for instance, rotation doesn't create a new arrangement, which fundamentally changes the count.

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
- Working: "TRIANGLE" has 8 letters: T,R,N,G,L,E,I,A — 6 consonants, 2 vowels (E,I,A — wait, E,I,A are vowels, so 3 vowels and 5 consonants T,R,N,G,L). Actually vowels: E, I, A = 3. Consonants: T, R, N, G, L = 5. First and last positions must be consonants: choose 2 from 5 consonants, arrange them = 5P2 = 20. Remaining 6 positions (middle 6 slots) filled by remaining 6 letters (3 consonants + 3 vowels) in 6! ways = 720. Total = 20 × 720 = 14,400.
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
