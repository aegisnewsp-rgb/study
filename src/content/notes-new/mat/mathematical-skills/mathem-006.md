---
exam: mat
examName: MAT
subject: quant
subjectName: Mathematical Skills
topic: mathem-006
topicName: Probability & Permutation-Combination
weight: 3
country: mat
generated: "2026-03-25T17:00:00"
---

# Probability & Permutation-Combination

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Probability & Permutation-Combination** — Key Concepts for MAT
Core formulas: P(E) = Favorable outcomes / Total outcomes; nPr = n!/(n-r)!; nCr = n!/[r!(n-r)!]
High-yield concepts: Complementary events, independent events, permutation vs combination selection
⚡ Exam tip: Use "1 - P(not E)" for hard probability problems — it's often easier!

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Probability & Permutation-Combination** — MAT Study Guide

**SECTION A: PERMUTATIONS AND COMBINATIONS**

**Fundamental Principle of Counting:**
- **Multiplication Rule:** If task A can be done in m ways and task B in n ways, both can be done in m × n ways
- **Addition Rule:** If task A can be done in m ways OR task B in n ways (exclusive), total = m + n ways

**Permutation — ORDER MATTERS**
- nPr = n! / (n - r)! 
- Means: arranging r objects chosen from n distinct objects
- Example: 5P3 = 5!/(5-3)! = 5!/2! = 120/2 = **60**

**Combination — ORDER DOESN'T MATTER**
- nCr = n! / [r! × (n - r)!]
- Means: selecting r objects from n distinct objects
- Example: 5C3 = 5! / (3! × 2!) = 120 / (6 × 2) = **10**
- Note: nCr = nC(n-r) — use this to simplify!

**Permutation vs Combination Quick Test:**
- Permutation: "arrange", "order matters", "ways to rank"
- Combination: "select", "choose", "form a team"

**Special Permutations:**
- Arrangement of n objects where p are alike: n!/p!
- Circular permutation of n distinct objects: (n-1)!
- Necklace/permutation with clockwise and anticlockwise same: (n-1)!/2

**Examples:**
1. "Ways to arrange letters of 'DELHI'" → 5! = **120**
2. "Ways to select 3 students from 10" → 10C3 = **120**
3. "Ways to arrange 'MATHEMATICS' where M's are together" → Treat MM as one unit → 10!/2! = **1,814,400**

**SECTION B: PROBABILITY**

**Basic Probability Formula:**
```
P(Event) = Number of favorable outcomes / Total number of outcomes
```

**Key Properties:**
- 0 ≤ P(E) ≤ 1
- P(certain event) = 1
- P(impossible event) = 0
- P(not E) = 1 - P(E) [Complementary Event]

**Types of Events:**
1. **Independent Events:** P(A and B) = P(A) × P(B)
2. **Mutually Exclusive:** P(A or B) = P(A) + P(B)
3. **Non-Mutually Exclusive:** P(A or B) = P(A) + P(B) - P(A and B)

**Conditional Probability:**
P(A given B) = P(A ∩ B) / P(B) = P(A and B) / P(B)

**Bayes' Theorem (Advanced):**
P(A|B) = P(B|A) × P(A) / P(B)

**MAT Shortcut — Complement Method:**
Instead of finding P(E) directly, find P(not E) and subtract from 1.
- Example: "Probability of getting at least one 6 in 2 dice throws"
- P(no 6 in either throw) = (5/6) × (5/6) = 25/36
- P(at least one 6) = 1 - 25/36 = **11/36** ✓

**Common Mistakes:**
1. Confusing permutation with combination
2. Forgetting to divide by factorials in combinations
3. Adding probabilities instead of multiplying for independent events
4. Forgetting that probability of not E = 1 - P(E)

**Examples:**
1. "2 cards drawn from 52. Probability both are kings?"
   - 4C2/52C2 = 6/1326 = **1/221** ✓

2. "Probability of getting sum 7 with two dice?"
   - Favorable: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 outcomes
   - Total outcomes = 36
   - P(sum=7) = 6/36 = **1/6** ✓

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Probability & Permutation-Combination** — Comprehensive MAT Notes

**Section 1: Permutations — Complete Understanding**

**Factorial Notation:**
- n! = n × (n-1) × (n-2) × ... × 3 × 2 × 1
- 0! = 1 (by definition)
- 1! = 1

**Permutation Formula Derivation:**
nPr means arranging r objects from n distinct objects:
- First position: n choices
- Second position: (n-1) choices
- Third position: (n-2) choices
- ...
- rth position: (n-r+1) choices
- Total arrangements = n × (n-1) × (n-2) × ... × (n-r+1) = n!/(n-r)! ✓

**Examples of Increasing Complexity:**

**Example 1:** 4P2 = 4!/(4-2)! = 4!/2! = 24/2 = **12**
Verification: Arrangements of 2 from {A,B,C,D}:
AB, AC, AD, BA, BC, BD, CA, CB, CD, DA, DB, DC = 12 ✓

**Example 2:** "How many 4-digit numbers can be formed from digits 1,2,3,4,5 (repetition not allowed)?"
- 5P4 = 5!/(5-4)! = 5!/1! = **120**
- If repetition allowed: 5 × 5 × 5 × 5 = **625**

**Example 3:** "Arrange letters of 'UNIVERSITY' (10 letters, all distinct)"
- Answer: 10! = **3,628,800**

**Example 4:** "Arrange 'ELEVEN' (E appears 3 times, L appears 1, V appears 1, N appears 1)"
- Total arrangements = 6! / 3! = 720/6 = **120**

**Circular Permutations:**
- 5 people around a round table: (5-1)! = **24**
- Why (n-1)!? Because rotations are considered identical

**Special Case — Necklace (indistinguishable clockwise/anticlockwise):**
- (n-1)!/2 arrangements

**Section 2: Combinations — Selection Without Order**

**Combination Formula:**
nCr = n!/[r!(n-r)!]

**Derivation:**
- Permutations of r from n: nPr = n!/(n-r)!
- But each selection of r objects can be arranged in r! ways
- So combinations = nPr/r! = n!/[r!(n-r)!] ✓

**Key Properties of nCr:**
1. nC0 = nCn = 1
2. nC1 = nCn-1 = n
3. nCr = nC(n-r) [Symmetry]
4. nCr + nC(r-1) = (n+1)Cr [Pascal's Identity]

**Pascal's Triangle:**
```
    C(0,0)
   C(1,0) C(1,1)
  C(2,0) C(2,1) C(2,2)
 C(3,0) C(3,1) C(3,2) C(3,3)
```
Row n: C(n,0), C(n,1), ..., C(n,n)

**Sum of Combinations:**
- nC0 + nC1 + nC2 + ... + nCn = 2^n
- This is the expansion of (1+1)^n

**Examples:**

**Example 1:** "Select 3 people from 10 to form a committee"
- 10C3 = 10!/(3! × 7!) = 120/6 = **120**

**Example 2:** "From 5 men and 4 women, form a committee of 4 with at least 2 women"
- Cases:
  - 2 women, 2 men: 4C2 × 5C2 = 6 × 10 = 60
  - 3 women, 1 man: 4C3 × 5C1 = 4 × 5 = 20
  - 4 women, 0 men: 4C4 × 5C0 = 1 × 1 = 1
- Total = 60 + 20 + 1 = **81**

**Example 3:** "Ways to select 5 cards from 52 (deck of cards)"
- 52C5 = 52!/(5! × 47!) = **2,598,960**

**Section 3: Probability — Theoretical Foundation**

**Sample Space (S):** Set of all possible outcomes
**Event (E):** Subset of sample space

**Types of Probability:**
1. **Classical/Theoretical:** P(E) = n(E)/n(S) [when outcomes equally likely]
2. **Experimental/Empirical:** Based on repeated trials
3. **Axiomatic:** Modern measure-theoretic approach

**Odds:**
- Odds in favor of E = P(E)/P(not E) = n(E):n(not E)
- Odds against E = P(not E)/P(E) = n(not E):n(E)

**Example:** "Odds in favor of getting a multiple of 3 with a fair die"
- Favorable outcomes: {3, 6} = 2
- Unfavorable: {1,2,4,5} = 4
- Odds in favor = 2:4 = **1:2** ✓

**Section 4: Probability Rules**

**Addition Rule:**
- For mutually exclusive A and B: P(A ∪ B) = P(A) + P(B)
- For non-mutually exclusive: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)

**Multiplication Rule:**
- For independent A and B: P(A ∩ B) = P(A) × P(B)
- For dependent: P(A ∩ B) = P(A) × P(B|A)

**Conditional Probability:**
P(B|A) = P(A ∩ B)/P(A)

**Example with Cards:**
"2 cards drawn without replacement. P(both aces)"
- Method 1: P(1st ace) × P(2nd ace | 1st was ace) = (4/52) × (3/51) = 1/13 × 1/17 = **1/221**
- Method 2: 4C2/52C2 = 6/1326 = **1/221** ✓

**Section 5: Probability Distributions**

**Random Variable:** Variable taking numerical values based on outcomes

**Expected Value (Mean):**
E(X) = Σ[x × P(X=x)]

**Example:** Find expected number on throwing a fair die
- E(X) = 1(1/6) + 2(1/6) + 3(1/6) + 4(1/6) + 5(1/6) + 6(1/6) = 21/6 = **3.5**

**Variance:** Var(X) = E(X²) - [E(X)]²

**Binomial Distribution:**
P(X=r) = nCr × p^r × q^(n-r)
Where p = probability of success, q = 1-p

**Section 6: MAT Problem-Solving Strategies**

**Strategy 1: Use Combinations for Selection, Permutations for Arrangement**
- "Select a team" → Combination
- "Arrange in a row" → Permutation
- "Form a committee and assign roles" → Both!

**Strategy 2: Complement Method for "At Least One"**
P(at least one) = 1 - P(none)

**Strategy 3: And/Or Logic**
- "A and B both happen" → Multiply (if independent)
- "A or B happens" → Add (if exclusive) or Inclusion-Exclusion

**Strategy 4: Deal with Repetition Allowed Carefully**
- With repetition: n^r
- Without repetition: nPr or nCr

**Strategy 5: Check for Overcounting in Complex Selections**
- When selecting from groups with conditions, use case-by-case method

**Common MAT Question Types:**

**Type 1: Direct Counting**
"How many 3-digit numbers can be formed from 1,2,3,4,5?"
Answer: 5P3 = 60 (if no repetition)

**Type 2: Committee Formation**
"From 6 men and 4 women, how many committees of 5 with majority men?"
- 3 men, 2 women: 6C3 × 4C2 = 20 × 6 = 120
- 4 men, 1 woman: 6C4 × 4C1 = 15 × 4 = 60
- 5 men: 6C5 = 6
- Total = 120 + 60 + 6 = **186**

**Type 3: Probability with Dice/Cards**
"2 dice thrown. P(sum divisible by 3 or 4)"
- P(divisible by 3) = 12/36 = 1/3
- P(divisible by 4) = 9/36 = 1/4
- P(divisible by both = 12) = 3/36 = 1/12
- P(3 or 4) = 1/3 + 1/4 - 1/12 = 4/12 + 3/12 - 1/12 = **6/12 = 1/2**

**Type 4: Expected Value**
Fair game analysis using E(X)

**Exam Tips:**
1. Always check: does order matter? (Permutation vs Combination)
2. For "at least one" problems, use complement method
3. When selecting from multiple groups, multiply selections
4. In probability, reduce fractions to lowest terms
5. P(E) + P(not E) = 1 — use this to check answers

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
