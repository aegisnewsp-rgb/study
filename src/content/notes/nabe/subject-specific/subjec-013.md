---
exam: nabe
examName: NABE (Pakistan)
subject: quant
subjectName: Subject Specific
topic: subjec-013
topicName: Topic 13
weight: 3
country: nabe
generated: "2026-03-25T17:00:00"
---

# Permutations and Combinations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Permutations and Combinations** — Key Facts for NABE (Pakistan)
- **Permutation (Order matters)**: nPr = n!/(n-r)! — arrangements of r items from n
- **Combination (Order doesn't matter)**: nCr = n!/[r!(n-r)!] — selections of r items from n
- **Fundamental Principle**: Multiplication for "and" (sequential), Addition for "or" (alternative)
- **n! = n × (n-1) × ... × 3 × 2 × 1** | Special: 0! = 1
- ⚡ **Exam tip**: Permutation = Selection + Arrangement; Combination = Selection only

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Permutations and Combinations — NABE (Pakistan) Study Guide

### Fundamental Principle of Counting

**Multiplication Rule (AND)**:
If a task can be done in m ways, and another task can be done in n ways, both tasks can be done in m × n ways.

**Example**: You have 3 shirts and 4 pants. How many outfits?
- 3 × 4 = 12 outfits

**Addition Rule (OR)**:
If a task can be done in m ways OR n ways (mutually exclusive), it can be done in m + n ways.

**Example**: Going to college via bus (2 routes) OR via rickshaw (3 routes)
- 2 + 3 = 5 routes

### Factorial

**Definition**: n! = n × (n-1) × (n-2) × ... × 3 × 2 × 1

**Special Values**:
- 0! = 1 (by definition)
- 1! = 1
- 2! = 2
- 3! = 6
- 4! = 24
- 5! = 120

### Permutations

**Definition**: Arrangements where ORDER matters

**Formula**:
```
nPr = n! / (n - r)!
```

**Example**: How many ways to arrange 3 books from 5?
- 5P3 = 5!/(5-3)! = 5!/2! = 120/2 = 60 ways

**Special Cases**:
- nPn = n! (arranging all n items)
- nP0 = 1 (one way to arrange nothing)
- nP1 = n (choose 1 from n in n ways)

### Combinations

**Definition**: Selections where ORDER doesn't matter

**Formula**:
```
nCr = n! / [r!(n - r)!]
```

**Example**: Selecting 3 students from 10 for a team
- 10C3 = 10!/[3!(7!)] = (10 × 9 × 8)/(3 × 2 × 1) = 720/6 = 120 ways

**Key Property**: nCr = nC(n-r)

### NABE Exam Pattern

Common question types:
1. Basic permutation/combination calculations
2. Word problems with distinct objects
3. Problems with identical objects
4. Circular arrangements
5. Arrangement around a circle

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Permutations and Combinations — Comprehensive NABE (Pakistan) Notes

### Detailed Theory

#### 1. When to Use Permutation vs. Combination

**Permutation — When order matters**:
- Arranging people in seats
- Forming words from letters
- Selecting batting order
- Ranking contestants

**Combination — When order doesn't matter**:
- Selecting committee members
- Choosing menu items
- Selecting team players
- Drawing cards from deck

**Rule of Thumb**: If you can rearrange the selected items and get the same result, it's a combination. If rearrangement gives different result, it's a permutation.

#### 2. Factorial Properties

**Product Form**:
```
n! = n × (n-1)!
```

**Cancellation Property**:
```
n!/(n-1)! = n
```

**Very Important**:
```
(n+1)! = (n+1) × n!
```

#### 3. Permutation Formula — Derivation

**nPr = n!/(n-r)!**

**Proof**:
- First position: n choices
- Second position: (n-1) choices
- Third position: (n-2) choices
- ...
- r-th position: (n-r+1) choices
- By multiplication: n × (n-1) × (n-2) × ... × (n-r+1) = n!/(n-r)!

#### 4. Combination Formula — Derivation

**nCr = n! / [r!(n-r)!]**

**Proof**:
- Each combination of r items can be arranged in r! ways (permutations)
- nPr = nCr × r!
- Therefore: nCr = nPr/r! = n!/[(n-r)!r!]

**Pascal's Triangle Property**:
```
nCr = n-1Cr-1 + n-1Cr
```

**Example**: 5C3 = 5C2 = 10
- 4C2 + 4C3 = 6 + 4 = 10 ✓

#### 5. Circular Permutations

**Arrangement around a circle**: (n-1)!

**Why (n-1)!?**
- Fix one person to break circular symmetry
- Remaining (n-1) people can be arranged in (n-1)! ways

**Clockwise vs Anti-clockwise**:
- If clockwise and anti-clockwise arrangements are considered SAME: (n-1)!/2
- This applies when there's no distinction between clockwise and counterclockwise

**Example**: 5 people around a circular table
- 4! = 24 arrangements (if direction matters)
- 4!/2 = 12 arrangements (if direction doesn't matter)

#### 6. Permutations with Repetition

**When some objects are identical**:
```
n!/(p! × q! × r!)  [where p, q, r are counts of identical objects]
```

**Example**: Arrange letters of "STATISTICS"
- S appears 3 times, T appears 3 times, I appears 2 times, A, C each 1
- Total letters = 10
- Arrangements = 10!/(3! × 3! × 2!) = 3628800/(6 × 6 × 2) = 50,400

**For identical objects around a circle**: Use Burnside's lemma (advanced)

#### 7. Combinations with Repetition (Stars and Bars)

**Selecting r items from n types (repetition allowed)**:
```
(n + r - 1)C(r) = (n + r - 1)C(n - 1)
```

**Example**: In how many ways can you buy 5 fruits from mangoes, apples, and oranges?
- n = 3 types, r = 5 fruits
- Ways = (3 + 5 - 1)C5 = 7C5 = 7C2 = 21 ways

**Formula Derivation (Stars and Bars)**:
- Represent r identical items as stars: ****
- Place (n-1) bars to divide into n groups
- Total positions = r + (n-1)
- Choose (n-1) positions for bars = (r+n-1)C(n-1)

#### 8. Restricted Combinations and Permutations

**n objects with restrictions**:

**Example 1**: Number of 4-digit numbers with distinct digits and divisible by 5
- Last digit must be 0 or 5
- Case A: Ends in 0: First digit (1-9, not 0): 8 choices, remaining 2: 8×7 choices
- Case B: Ends in 5: First digit (1-9, not 5, not 0): 7 choices, remaining 2: 8×7 choices
- Total = 8×8×7 + 7×8×7 = 448 + 392 = 840

**Example 2**: Select 3 men and 2 women from 5 men and 4 women
- 5C3 × 4C2 = 10 × 6 = 60

#### 9. Division into Groups

**Unequal Groups**:
- Select for Group 1: nCk
- Select for Group 2: n-k Cl
- And so on...

**Equal Groups** (advanced):
- Divide n items into r equal groups of n/r each
- Number of ways = n!/[(n/r)!]^r × r! [if groups are labeled]
- Number of ways = n!/[r! × (n/r)!]^r [if groups are unlabeled]

#### 10. Key Formulas Summary

| Situation | Formula |
|-----------|---------|
| Permutation of n, r at a time | nPr = n!/(n-r)! |
| Combination of n, r at a time | nCr = n!/[r!(n-r)!] |
| Circular permutation | (n-1)! |
| All n objects (arranged) | n! |
| Identical objects | n!/[p!q!r!...] |
| nCr = nC(n-r) | Symmetry |
| nC0 = nCn = 1 | Boundary |
| nCr + nCr-1 = n+1Cr | Pascal's identity |

#### 11. Common Mistakes to Avoid

1. **Order vs. No Order**: Read problem carefully to determine
2. **Factorial Overflow**: nPr and nCr for large n — simplify first
3. **Overcounting**: Be careful with overlapping cases
4. **Repetition**: Check if objects are distinct or identical
5. **Circular Arrangements**: Remember (n-1)! not n!

### Practice Questions for NABE

1. Evaluate: 6P3, 8C4, 10C6
2. How many 4-digit even numbers can be formed using digits 1,2,3,4,5 (no repetition)?
3. In how many ways can 5 boys and 4 girls be arranged so that no two girls are together?
4. From 6 men and 4 women, a committee of 5 is formed with at least 2 women. Find the number of ways.
5. In how many ways can the letters of "ENGINEERING" be arranged?

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
