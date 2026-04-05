---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-015
topicName: Permutations
weight: 5
country: india
generated: "2026-03-24T08:32:07.940870"
diagramPrompt: Mathematical diagram showing Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Fundamental Principle of Counting:**
If one operation can be done in $m$ ways, and for each of these, another operation can be done in $n$ ways, then both operations can be done in $m \times n$ ways.

**Factorial:**
$n! = n \times (n-1) \times (n-2) \times \cdots \times 1$. By definition, $0! = 1$.

**Permutation (Arrangement):**
- **Without repetition:** $P(n, r) = \frac{n!}{(n-r)!}$
- **With repetition:** $n^r$ (each of $r$ positions has $n$ choices)

**Special Cases:**
- $P(n, n) = n!$ (arranging all $n$ objects)
- $P(n, 1) = n$ (choosing 1 from $n$)
- $P(n, 0) = 1$

⚡ **JEE Tip:** When objects repeat, divide by factorials of each repeated type: number of arrangements of "BOOKKEEPER" = $\frac{10!}{2! \cdot 3! \cdot 2!}$ (2 Os, 3 Ks, 2 Rs).

⚡ **Common Mistake:** Don't use $n^r$ when order matters but selections don't repeat. If you choose $r$ out of $n$ and arrange them (permutation without repetition), use $P(n,r)$, not $n^r$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Circular Permutations:**

- **Around a circle:** $(n-1)!$ (fix one position to remove rotation symmetry)
- **Necklace/KEY:** If clockwise and anticlockwise arrangements are identical: $\frac{(n-1)!}{2}$

**Conditional Permutations:**

**1. Restrictions on adjacent positions:**
Use inclusion-exclusion or "treat as block" method.
Example: arrangements of "KEPLER" with P and L together.
Treat $(PL)$ or $(LP)$ as one unit: $5! \times 2! = 240$.

**2. Restrictions on not being together:**
Total arrangements minus arrangements with restriction.
Example: arrangements of "KEPLER" with P and L NOT together.
Total: $6! = 720$. With P and L together: $240$. So NOT together: $720 - 240 = 480$.

**3. Position-based restrictions:**
Example: arrangements of numbers 1–5 where 1 is not in first position.
Use complement: total $5! - 4! = 120 - 24 = 96$.

**Derangements (Principle of Inclusion-Exclusion):**

Number of ways to arrange $n$ items so that no item is in its original position:
$$D_n = n!\left[\frac{1}{0!} - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \cdots + \frac{(-1)^n}{n!}\right]$$

Special values: $D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9, D_5 = 44$.

**Worked Examples:**

*Example 1:* How many 5-digit numbers can be formed using digits 1, 2, 3, 4, 5 (without repetition) that are divisible by 4?

A number is divisible by 4 if its last two digits form a number divisible by 4.
Last two digits can be: 12, 24, 32, 44 (no 44 since no repetition), 52.
List all pairs: 12, 24, 32, 52 (also 44 impossible, 20 not valid).
Also 04 combinations: but no zero in our set. So 12, 24, 32, 52. Also 44 doesn't work, 04 isn't in set.

Wait also 04, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96.

With digits 1-5 only: possible pairs (ordered): 12, 24, 32, 52.
Also 04 not possible.
And also 44, 00 not in set.
What about 20? digits 2 and 0, but no 0.

So pairs: 12, 24, 32, 52. That's 4 possibilities for the last two positions.
For each, the first 3 positions can be filled with remaining 3 digits in $3! = 6$ ways.
Total: $4 \times 6 = 24$ numbers.

*Example 2 (JEE 2022):* Count arrangements of "EXAMINATION" where vowels appear together.

Letters: E, X, A, M, I, N, A, T, I, O, N.
Vowels: E, A, A, I, I, O (6 vowels, 3 As, 2 Is).
Consonants: X, M, N, N, T (5 consonants, 2 Ns).

Treat vowels as a block: 1 block + 5 consonants = 6 items.
Arrangements of 6 items: $\frac{6!}{2!}$ (for 2 Ns) $= 360$.
Within vowel block: arrange E, A, A, I, I, O = $\frac{6!}{3! \cdot 2!} = 60$.
Total: $360 \times 60 = 21600$.

*Example 3:* In how many ways can 5 boys and 5 girls be seated around a round table so that no two adjacent are of same gender?

Place boys first: $(5-1)! = 4! = 24$ arrangements.
Now there are 5 gaps between boys (gaps are the positions).
Seat girls in these 5 gaps: $5! = 120$ arrangements.
Total: $24 \times 120 = 2880$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Distribution Problems:**

**1. Distribute $n$ distinct objects into $r$ distinct boxes:**
- No restriction: $r^n$
- No box empty (inclusion-exclusion): $\sum_{k=0}^{r} (-1)^k \binom{r}{k} (r-k)^n$
- At most one per box: $P(n, r)$

**2. Distribute $n$ identical objects into $r$ distinct boxes:**
- No restriction: $\binom{n+r-1}{r-1}$
- No box empty: $\binom{n-1}{r-1}$
- At most $m$ in each: inclusion-exclusion or generating functions

**Partition of Numbers:**

**Ferrers Diagram:** Visual representation of partitions.

The number of partitions of $n$ into at most $k$ parts, each at most $m$, equals coefficient of $x^n$ in $(1-x)(1-x^2)\cdots(1-x^m)(1-x)\cdots(1-x^k)$ or equivalently the partition function $p_k^m(n)$.

**Generating Functions for Permutations:**

The exponential generating function (EGF) for permutations is:
$$\sum_{n=0}^{\infty} P(n,r) \frac{x^n}{n!} = \left(1 + \frac{x}{1}\right)\left(1 + \frac{x}{1}\right)\cdots\left(1 + \frac{x}{1}\right) \text{ (r factors)} = \left(1 + x\right)^r$$

Wait, that's for permutations with some property. Actually EGF for all permutations is $\sum \frac{n! x^n}{n!} = \frac{1}{1-x}$.

**Advanced Problems:**

*Problem 1 (JEE Advanced 2020):* Find the number of 9-digit numbers with digits 1–9 where each digit appears exactly once, and the number is divisible by 9.

A number is divisible by 9 if sum of digits is divisible by 9.
Sum of digits 1–9 = 45, which is divisible by 9. So ANY arrangement of 1–9 is divisible by 9.
Number of such arrangements: $9! = 362880$.

*Problem 2:* In how many ways can 12 examination papers be distributed among 4 students so that each student gets at least one paper?

Total ways to assign 12 distinct papers to 4 students: $4^{12}$ (each paper has 4 choices).
Subtract assignments where at least one student gets nothing. Use inclusion-exclusion.
$A_i$ = student $i$ gets no papers.
$|A_i| = 3^{12}$ (papers go to remaining 3).
$|A_i \cap A_j| = 2^{12}$.
$|A_1 \cap A_2 \cap A_3| = 1^{12} = 1$.
$|A_1 \cap A_2 \cap A_3 \cap A_4| = 0$.

So answer: $\binom{4}{1}3^{12} - \binom{4}{2}2^{12} + \binom{4}{3}1^{12} = 4 \cdot 531441 - 6 \cdot 4096 + 4 \cdot 1 = 2125764 - 24576 + 4 = 2101192$.

Wait $3^{12} = 531441$ correct.
$4^{12} = 16777216$.
$4 \cdot 531441 = 2125764$.
$6 \cdot 4096 = 24576$.
$4 \cdot 1 = 4$.
So answer: $16777216 - 2125764 + 24576 - 4 = 14676024$.

*Problem 3:* Number of surjections from an $n$-set to an $m$-set ($n \geq m$):
$$m! S(n,m)$$
where $S(n,m)$ are Stirling numbers of the second kind.

$S(n,m) = \frac{1}{m!} \sum_{k=0}^{m} (-1)^k \binom{m}{k} (m-k)^n$.

**JEE Advanced Patterns (2018–2024):**
- Distribution problems with conditions (at least one, at most $k$) are common
- Derangements formula is frequently tested (usually given, but $D_n$ values up to 5 should be memorised)
- Circular permutations with gender adjacency are classic
- Stirling numbers appear in 2021, 2023 papers
- Principle of inclusion-exclusion in complex counting is trending upward

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
