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

Probability and Permutation-Combination are high-weightage topics in MAT's Quantitative section. Probability measures likelihood (0 to 1), while P&C deals with counting arrangements and selections. Many students find P&C intuitive but struggle with probability's conditional cases.

**Key formulas:**
- Probability = Favourable outcomes / Total outcomes
- P(A or B) = P(A) + P(B) - P(A and B)
- P(A and B) = P(A) × P(B/A) (for independent events)
- Permutation: nPr = n!/(n-r)! (arrangement matters)
- Combination: nCr = n!/[r!(n-r)!] (selection doesn't matter)

**Exam tip:** In probability, always check if events are independent (can multiply) or mutually exclusive (can add). Don't confuse P&C selection formulas — use combinations when order doesn't matter.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Probability Basics

**Sample Space and Events:**
- Sample space (S): Set of all possible outcomes
- Event (E): A subset of sample space
- P(E) always between 0 and 1

**Types of events:**
- **Certain event:** P = 1
- **Impossible event:** P = 0
- **Complement of E (Ē or E'):** P(Ē) = 1 - P(E)
- **Mutually exclusive:** Cannot happen together; P(A and B) = 0
- **Independent:** One doesn't affect the other; P(A and B) = P(A) × P(B)

**Basic probability formula:**
P(E) = Number of favourable outcomes / Total number of outcomes

Example: Drawing a king from a deck of 52 cards:
Favourable = 4 (4 kings); Total = 52
P(King) = 4/52 = 1/13

#### Addition and Multiplication Rules

**Addition Rule (OR):**
- P(A or B) = P(A) + P(B) - P(A and B)
- If mutually exclusive: P(A or B) = P(A) + P(B)

**Multiplication Rule (AND):**
- P(A and B) = P(A) × P(B/A)
- If independent: P(A and B) = P(A) × P(B)

Example: Two cards drawn without replacement from a deck:
P(first is king AND second is king):
P(1st king) = 4/52
P(2nd king | 1st was king) = 3/51
P(both kings) = 4/52 × 3/51 = 12/2652 = 1/221

#### Permutations

**When order matters:**

**nPr = n! / (n-r)!**

Where n = total items, r = items to be arranged

Example: Arranging 3 books from 5 distinct books:
5P3 = 5!/(5-3)! = 120/2 = 60

**Special cases:**
- Arrangement of all n items: n! = nPn
- Circular permutation: (n-1)! (clockwise arrangement)
- If clockwise and anticlockwise are same (e.g., necklace): (n-1)!/2

**When objects are identical:**
Number of permutations of n objects with p alike, q alike, r alike:
n! / (p! × q! × r!)

Example: Arrangements of "PROBABILITY": 11 letters (P,R,O,B,A,B,I,L,I,T,Y)
P=1, R=1, O=1, B=2, A=1, I=2, L=1, T=1, Y=1
Total = 11!/(2!×2!) = 11!/4

**Permutation with conditions:**
Example: How many 4-digit numbers can be formed from {1,2,3,4,5} if digits can't repeat and number must be even?
Last digit (even): 2 or 4 (2 choices)
First 3 digits: Remaining 4 digits, choose 3 in order: 4P3 = 4×3×2 = 24
Total = 2 × 24 = 48

#### Combinations

**When order doesn't matter:**

**nCr = n! / [r!(n-r)!]**

Example: Selecting 3 students from 10 to form a committee:
10C3 = 10!/(3!×7!) = 120/6 = 10 × 9 × 8 / 6 = 120

**Properties of nCr:**
- nC0 = 1, nCn = 1
- nCr = nC(n-r) (symmetry)
- nCr + nC(r-1) = (n+1)Cr (Pascal's identity)

**Complement selection:**
Sometimes easier to count what you DON'T want:
Example: Selecting 2 from 10 where at least one is a woman.
Total = 10C2 = 45
No women (all men): If 6 men: 6C2 = 15
At least one woman = 45 - 15 = 30

#### Probability Distributions

**Expected Value:**
E(X) = Σ x × P(x)

Example: A game costs ₹10 to play. A die is rolled — you win ₹30 if you get 6, ₹20 if you get 3, nothing otherwise.
P(6) = 1/6, P(3) = 1/6, P(other) = 4/6
Winnings: 30, 20, 0
E(winnings) = 30(1/6) + 20(1/6) + 0(4/6) = 50/6 ≈ 8.33
Net = 8.33 - 10 = -1.67 → On average, you lose ₹1.67 per game

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Conditional Probability and Bayes' Theorem

**Conditional Probability P(A|B):** Probability of A given that B has occurred

P(A|B) = P(A and B) / P(B)

Example: In a class, 60% students play cricket, 40% play football, 20% play both. If a student plays cricket, what's the probability they also play football?

P(F|C) = P(F and C) / P(C) = 0.2 / 0.6 = 1/3

**Bayes' Theorem:**
P(A|B) = P(B|A) × P(A) / P(B)

Used when you need to reverse conditional probability.

Example: A test for a disease is 99% accurate (99% of those with disease test positive; 99% of those without test negative). If 1% of the population has the disease, and you test positive, what's the probability you actually have the disease?

Let D = disease, T+ = test positive
P(D) = 0.01, P(T+|D) = 0.99, P(T+|not D) = 0.01
P(T+) = P(T+|D)×P(D) + P(T+|not D)×P(not D)
= 0.99×0.01 + 0.01×0.99 = 0.0198

P(D|T+) = 0.99×0.01 / 0.0198 = 0.5 (50%!)

This counterintuitive result (even a 99% accurate test gives 50% probability) is why base rates matter.

#### Advanced Counting Principles

**Inclusion-Exclusion Principle:**
|A ∪ B| = |A| + |B| - |A ∩ B|

For three sets:
|A ∪ B ∪ C| = |A| + |B| + |C| - |A∩B| - |B∩C| - |A∩C| + |A∩B∩C|

Example: In a class of 50 students, 30 play cricket, 25 play football, 15 play both. How many play neither?
Using inclusion-exclusion:
Cricket or Football = 30 + 25 - 15 = 40
Neither = 50 - 40 = 10

**Derangements (Matching Problem):**
Number of ways n items can be arranged so that none appears in its original position:
D(n) = n! × Σ(k=0 to n) [(-1)^k / k!]

D(1) = 0, D(2) = 1, D(3) = 2, D(4) = 9, D(5) = 44

Example: 5 letters in 5 envelopes, no letter in correct envelope → D(5) = 44

**Stars and Bars:**
Number of ways to distribute n identical items among r distinct boxes (allowing empty boxes):
(n + r - 1)C(r - 1)

Example: Distributing 7 identical candies among 3 children:
(7+3-1)C(3-1) = 9C2 = 36 ways

If no box can be empty: (n-1)C(r-1) = 6C2 = 15

#### Permutation-Combination Problem Types

**Type 1: Seating arrangements**
- Linear: n! for n people
- Circular: (n-1)! for n people
- If relative position fixed: Still (n-1)!, but specific positions matter

**Type 2: Number formation**
- Count numbers satisfying digit conditions
- Use place value principle
- Remember 0 can't be first digit unless specified

**Type 3: Selection with conditions**
- Use combinations, subtract invalid cases
- Group selections

**Type 4: Word arrangements**
- Treat repeating letters as identical
- Apply formula for permutations with repetitions

**Type 5: Chessboard problems**
- Number of squares: nC2 × nC2 (for n×n board)
- Number of rectangles: (n(n+1)/2)²

#### Practice Problems

Q1: From 7 men and 5 women, a committee of 4 is formed with at least 2 women. How many ways?
Solution:
Case 1: 2 women → 5C2 × 7C2 = 10 × 21 = 210
Case 2: 3 women → 5C3 × 7C1 = 10 × 7 = 70
Case 3: 4 women → 5C4 = 5
Total = 210 + 70 + 5 = 285

Q2: A bag has 4 red and 6 blue balls. Two balls drawn at random. What's P(both red)?
Solution: Without replacement: 4C2 / 10C2 = 6/45 = 2/15
With replacement: (4/10)² = 16/100 = 4/25

Q3: In how many ways can the word "ENGINE" be arranged?
Solution: E=3, N=2, G=1, I=1
Total = 6!/(3!×2!) = 720/12 = 60

Q4: Three dice are rolled. What's P(sum is 10)?
Solution: Total outcomes = 6³ = 216
Favourable (sum=10): Count triples (a,b,c) where a+b+c=10 and 1≤a,b,c≤6
(1,3,6): 6 permutations
(1,4,5): 6 permutations
(2,2,6): 3 permutations
(2,3,5): 6 permutations
(2,4,4): 3 permutations
(3,3,4): 3 permutations
Total = 27
P = 27/216 = 1/8

Q5: A person forgets the last 2 digits of a phone number and dials at random. If he doesn't repeat digits, what's P(he dials the correct number)?
Solution: Last 2 digits: 10P2 = 10×9 = 90 possibilities
P(correct) = 1/90

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
