---



exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-12
topicName: Permutations and Combinations
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.737114"
diagramPrompt: Mathematical diagram showing Permutations and Combinations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Permutations and Combinations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Permutations and Combinations** — Quick Facts

**Fundamental Counting Principle:**
If task 1 can be done in $m$ ways and task 2 in $n$ ways, then both tasks can be done in $m \times n$ ways.

**Permutation (Order Matters):**
$$P(n, r) = \frac{n!}{(n-r)!} = n(n-1)(n-2)...(n-r+1)$$

**Combination (Order Doesn't Matter):**
$$C(n, r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$$

**Key Facts:**
- $P(n, n) = n!$ (arranging all $n$ items)
- $C(n, 0) = C(n, n) = 1$
- $C(n, r) = C(n, n-r)$ (symmetry property)
- $C(n, r) + C(n, r-1) = C(n+1, r)$ (Pascal's identity)

⚡ **JAMB Exam Tip:** Use **permutations** when the question mentions "arrange," "arrangement," "order," or "different positions." Use **combinations** when the question mentions "choose," "select," "group," or "team."

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Permutations and Combinations** — Study Guide

**Permutation Worked Examples:**

Example 1: How many ways can 5 students be arranged in a row?

$P(5, 5) = 5! = 120$ ways

Example 2: How many 3-digit numbers can be formed from {1, 2, 3, 4, 5} if digits cannot repeat?

$P(5, 3) = \frac{5!}{(5-3)!} = \frac{5!}{2!} = 60$

**When Some Items Are Identical:**
The number of arrangements of $n$ items where $p$ are identical, $q$ are identical, etc.:
$$\frac{n!}{p! \times q! \times ...}$$

Example: Arrange MISSISSIPPI (11 letters: 4×I, 4×S, 2×P, 1×M)
$$\frac{11!}{4! \times 4! \times 2! \times 1!} = 34650 \text{ arrangements}$$

**Combination Worked Examples:**

Example 1: A committee of 4 is to be chosen from 7 men and 5 women. How many committees can be formed if it must contain 2 men and 2 women?

$C(7, 2) \times C(5, 2) = 21 \times 10 = 210$

Example 2: From a deck of 52 cards, how many ways to choose 5 cards?

$C(52, 5) = \frac{52!}{5! \times 47!} = 2,598,960$

⚡ **Common Student Mistake:** Confusing $C(n, r)$ with $C(n, n-r)$. Remember: $C(10, 3) = C(10, 7) = 120$. Use the smaller value of $r$ for easier calculation.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Permutations and Combinations** — Comprehensive Notes

**Circular Permutations:**

- Arranging $n$ items in a circle: $(n-1)!$
- Why? Fix one item as reference, arrange remaining $(n-1)$ linearly.

**Example:** In how many ways can 6 people be seated around a circular table?

$(6-1)! = 5! = 120$ ways

**If clockwise and anticlockwise arrangements are considered the same** (as in necklaces, seating arrangements where flipping is allowed):
$$\frac{(n-1)!}{2}$$

**Partition Problems:**

**Example:** Divide 10 identical balls into 3 groups of sizes 2, 3, 5.

Number of ways: $C(10, 2) \times C(8, 3) \times C(5, 5) = 45 \times 56 \times 1 = 2520$

**Permutations with Restrictions:**

**Example:** How many 4-digit numbers can be formed from {0, 1, 2, 3, 4} if:
a) No restrictions?
b) Numbers must be even?
c) No digit can be repeated?

a) $5 \times 5 \times 5 \times 5 = 625$ (repetition allowed, including leading zero)

b) For even: last digit {0, 2, 4} = 3 choices
   First digit: 5 choices (including 0) = 5 × 3 = 375 (allowing repetition)
   If no repetition: first digit 4 choices (no 0), last digit 3 choices → problematic

   Better approach (no leading zero):
   - Last digit 0: $4 \times 4 \times 3 = 48$ (first can't be 0, second can)
   - Last digit 2 or 4: $3 \times 4 \times 3 = 36$ each
   - Total = $48 + 72 = 120$

c) No repetition, no leading zero:
   First digit: 4 choices (1-4)
   Second: 4 choices (remaining including 0)
   Third: 3 choices
   Fourth: 2 choices
   Total = $4 \times 4 \times 3 \times 2 = 96$

**Arrangements with "Must Be Together":**

**Example:** In how many ways can the letters of PROBABILITY be arranged if P and T must always be together?

Treat PT as one unit. Arrange: $10! / 2!$ (two Is) = $1814400$
P and T can be PT or TP = 2 arrangements.
Total = $1814400 \times 2 = 3628800$

**Inclusion-Exclusion Principle:**

$$|A \cup B| = |A| + |B| - |A \cap B|$$

**Example:** In a class, 30 students study Physics, 25 study Chemistry, and 10 study both. How many study at least one?

$30 + 25 - 10 = 45$

**Derangements (Objects Not in Original Positions):**

The number of ways $n$ objects can be arranged so that none appears in its original position:
$$D_n = n!\left(1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + ... + \frac{(-1)^n}{n!}\right)$$

Example: 3 letters to 3 addressed envelopes, none correctly placed: $D_3 = 2$

**JAMB Pattern Analysis (2015-2024):**
- 2015: $P(n, r)$ calculation
- 2017: $C(n, r)$ with committee/team selection
- 2019: Circular arrangements
- 2021: Letters in a word arrangement
- 2023: Restrictions in arrangements (no repetition, leading digit)
- 2024: Partition and inclusion-exclusion combined

⚡ **Exam Strategy:** Before solving, identify: (1) Is order important? (2) Are there any restrictions? (3) Are items distinct or identical? Draw a simple diagram when possible to visualise the problem.