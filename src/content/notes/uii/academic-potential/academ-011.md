---
exam: uii
examName: UI Entrance (Indonesia)
subject: quant
subjectName: Academic Potential
topic: academ-011
topicName: Permutations, Combinations, and Counting
weight: 3
country: uii
generated: "2026-03-25T17:00:00"
---

# Permutations, Combinations, and Counting

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Permutations and combinations are counting techniques. Use permutations when order matters (arrangements), and combinations when order doesn't matter (selections). The fundamental principle of counting: if one task has m ways and another has n ways, doing both tasks has m × n ways.

**Essential Formulas:**
- Fundamental Counting Principle: if task 1 can be done in m ways and task 2 in n ways, both can be done in m × n ways
- Permutations: P(n, r) = n! / (n − r)! (order matters)
- Combinations: C(n, r) = n! / (r!(n − r)!) (order doesn't matter)
- n! = n × (n−1) × ... × 2 × 1. By convention, 0! = 1

**Key Distinction:**
- Permutation: "arrange" or "order" → AB and BA are different
- Combination: "choose" or "select" → AB and BA are the same

Example: From 5 people (A, B, C, D, E), choosing a committee of 3: C(5,3) = 10 ways. Arranging them in order: P(5,3) = 60 ways.

⚡ **Exam Tip:** Before applying a formula, ask: does the order matter here? If choosing members of a team — combinations. If arranging books on a shelf — permutations. If the question involves a PIN or password where each digit can be the same — use the counting principle directly.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**The Fundamental Counting Principle (FCP)**

If you have a sequence of choices:
- Step 1: m options
- Step 2: n options (regardless of what step 1 chose)
- Total ways: m × n

Example: A restaurant offers 4 appetisers, 6 main courses, and 3 desserts. How many different meals (one of each) can you order?
4 × 6 × 3 = 72 different meals.

**When Repetition is Allowed**

For a 3-digit PIN using digits 0–9: 10 × 10 × 10 = 1,000 possibilities.
For a password of 8 characters where each can be a letter or digit: 36^8 possibilities.

**When Repetition is Not Allowed**

Example: How many ways to arrange the letters of the word "READ"?
4 letters, all distinct: P(4,4) = 4! = 24 arrangements. Or list: READ, REDA, RAED, ... etc.

**Permutations — When Order Matters**

P(n, r) = n! / (n−r)! = number of ways to arrange r objects chosen from n distinct objects.

Example: How many ways to award gold, silver, and bronze medals to 8 sprint finalists?
P(8,3) = 8!/(8−3)! = 8!/5! = 8 × 7 × 6 = 336 ways.
Alternatively: 8 choices for gold × 7 for silver × 6 for bronze = 336.

**Permutations with Repeated Items**

The word "STATISTICS" has 10 letters: S appears 3 times, T appears 3 times, I appears 3 times, A and C appear 1 time each.
Number of distinct arrangements = 10! / (3! × 3! × 3! × 1! × 1!) = 10! / (27 × 27) = 3,628,800 / 729 ≈ 4,977.

**Combinations — When Order Doesn't Matter**

C(n, r) = n! / (r!(n−r)!)

Example: From a class of 15 students, select a committee of 4. Number of ways = C(15,4) = 15!/(4!11!) = (15×14×13×12)/(4×3×2×1) = 32,760/24 = 1,365.

**Combination vs Permutation — Decision**

Question: "How many ways to form a committee of 3 from 8 people?" → combinations (committee membership, order irrelevant).
Question: "How many ways to elect a president, vice-president, and secretary from 8 people?" → permutations (positions are distinct, so order matters).

**Complementary Counting**

Sometimes it's easier to count what you don't want and subtract from the total.

Example: How many 4-digit numbers have at least one repeated digit?
Total 4-digit numbers: 9 × 10 × 10 × 10 = 9,000 (1000–9999).
Numbers with all distinct digits: 9 × 9 × 8 × 7 = 4,536 (first digit: 1-9 = 9 choices; second: any except first = 9; third: any except first two = 8; fourth: any except first three = 7).
With at least one repeat: 9,000 − 4,536 = 4,464.

**Circular Arrangements**

For n objects around a circle, the number of arrangements is (n−1)! — because rotations are considered the same.

Example: 6 people seated around a round table: (6−1)! = 5! = 120 arrangements.
If clockwise vs anticlockwise is considered the same (i.e., the arrangement can't be flipped), it's still (n−1)!/2 for n > 2.

**Problem-Solving Strategies:**
- Break complex counting into steps; use FCP for each step, then multiply or add as appropriate
- If a problem involves "at least one" condition, try complementary counting: total − none
- Distinguish carefully between permutations and combinations — this is the most common mistake
- For "how many ways to divide into groups" problems, consider whether groups are labelled or unlabelled

**Common Mistakes:**
- Using permutations when combinations are needed (or vice versa)
- Forgetting that the first digit of a multi-digit number can't be zero (in decimal representation)
- In permutations with repetitions, dividing by the factorial of the wrong number
- Counting the same arrangement twice by using different methods inconsistently

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Derivation of Combination Formula**

C(n, r) counts subsets of size r from a set of n elements.
By FCP: number of ordered selections (permutations) = P(n, r) = n!/(n−r)!.
Each unordered selection (combination) corresponds to r! ordered arrangements.
Therefore: C(n, r) = P(n, r)/r! = n!/(r!(n−r)!). ✓

**Pascal's Triangle and Combinations**

C(n, r) = C(n−1, r−1) + C(n−1, r). This gives Pascal's triangle.
Each row n gives the coefficients of (a+b)^n.
Row 5 (starting n=0): C(5,0)=1, C(5,1)=5, C(5,2)=10, C(5,3)=10, C(5,4)=5, C(5,5)=1.

**The Binomial Theorem**

(a + b)^n = Σ C(n, r) a^(n−r) b^r for r = 0 to n.
Example: (x + 2)⁴ = C(4,0)x⁴ + C(4,1)x³(2) + C(4,2)x²(2²) + C(4,3)x(2³) + C(4,4)(2⁴)
= x⁴ + 4(2)x³ + 6(4)x² + 4(8)x + 16 = x⁴ + 8x³ + 24x² + 32x + 16.

**Counting with Restrictions**

Example: How many 4-digit numbers can be formed from digits 1,2,3,4,5 (no repetition) that are greater than 3,000?
Greater than 3,000 means first digit ≥ 3. So first digit choices: 3, 4, 5 = 3 choices.
If first digit is 3: remaining 4 digits choose 3 in any order: P(4,3) = 24.
If first digit is 4 or 5: for each, remaining 4 digits choose 3: P(4,3) = 24.
Total: 3 × 24 = 72. Or: 2 × 24 (for 4 and 5) + 1 × 24 (for 3) = 48 + 24 = 72.

**Arrangements with Specific Adjacency**

Example: How many arrangements of the word "ENGINEER" have the vowels together?
Vowels in ENGINEER: E, I, E, E (4 vowels, with E appearing 3 times).
Treat the vowel block as one item. Items to arrange: [VOWELS], N, G, R = 4 items with N, G, R distinct.
Arrangements of 4 items: 4! = 24.
Vowel block arrangements: 4!/(3!) = 4 (arrangements of E, E, E, I with 3 identical Es).
Total = 24 × 4 = 96.

**Stars and Bars (Distribution Problems)**

The number of ways to distribute n identical objects into k distinct boxes (allowing empty boxes) = C(n+k−1, k−1).

Example: In how many ways can 7 identical candies be given to 3 children?
C(7+3−1, 3−1) = C(9, 2) = 36 ways.

If each child must get at least 1 candy: C(7−1, 3−1) = C(6, 2) = 15 ways.

**Derangements (Misspelling Problem)**

How many ways can n objects be arranged so that no object is in its original position?
D_n = n! × Σ(k=0 to n) ((−1)^k / k!) ≈ n!/e.
D₃ = 2 (the derangements of 123 are 231 and 312).
D₄ = 9.

**UI Entrance Exam Patterns**

Counting questions in the UI Academic Potential test include:
1. Using the fundamental counting principle
2. Permutations (arranging people, objects, letters)
3. Combinations (choosing committees, teams)
4. Permutations with repeated elements
5. Circular arrangements
6. Complementary counting
7. Arrangements with restrictions

⚡ **Exam Strategy:** When stuck, try listing a few cases to identify the pattern before applying a formula. For "at least one" problems, always consider using total minus none.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
