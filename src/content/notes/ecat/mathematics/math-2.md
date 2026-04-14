---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-2
topicName: Sequences, Series and Arithmetic Progression
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.064240"
diagramPrompt: "Mathematical diagram showing Sequences, Series and Arithmetic Progression concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"


---

# Sequences, Series and Arithmetic Progression

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT exam.

A **sequence** is an ordered list of numbers following a specific rule. A **series** is the sum of the terms of a sequence. Arithmetic Progression (AP) is the most fundamental type of sequence — the difference between consecutive terms is constant.

**Arithmetic Progression (AP):**

A sequence $a_1, a_2, a_3, ...$ is an AP if $a_{n+1} - a_n = d$ (constant difference, called the common difference).

**Key formulas:**
- General term: $a_n = a_1 + (n-1)d$
- Last term (if $l$ is the $n$-th term): $l = a + (n-1)d$
- Three consecutive terms: $a-d, a, a+d$ (symmetric form, centre is the arithmetic mean)
- Sum of first $n$ terms:
  $$S_n = \frac{n}{2}(2a + (n-1)d)$$
  or equivalently:
  $$S_n = \frac{n}{2}(a + l)$$

**Arithmetic Mean (AM):**
The arithmetic mean of two numbers $a$ and $b$ is $\frac{a+b}{2}$. For an AP, each term is the arithmetic mean of its neighbours:
$$a_k = \frac{a_{k-1} + a_{k+1}}{2}$$

**⚡ ECAT exam tips:**
- If three numbers are in AP, represent them as $a-d, a, a+d$ — this symmetric form eliminates the need for algebra with the middle term
- If three consecutive terms sum to something, the middle term is always one-third of the sum
- For a problem like "find the sum of the first 20 multiples of 7": first term = 7, d = 7, n = 20, S₂₀ = 20/2 × (2×7 + 19×7) = 10 × 147 = 1470
- The sum of first $n$ natural numbers: $S_n = n(n+1)/2$

---

### 🟡 Standard — Regular Study (2d–2mo)
> For ECAT students who want genuine understanding of sequences and AP.

**Working with AP — Practical Examples:**

**Example 1:** The 5th term of an AP is 28 and the 12th term is 63. Find the 20th term.
Solution: $a_5 = a + 4d = 28$ and $a_{12} = a + 11d = 63$. Subtracting: $7d = 35$, so $d = 5$. Then $a = 28 - 20 = 8$. Therefore $a_{20} = 8 + 19 \times 5 = 8 + 95 = 103$.

**Example 2:** Insert 4 arithmetic means between 7 and 17.
Solution: We have $a = 7$, $l = 17$, $n = 6$ terms (2 given + 4 means). Then $d = (17 - 7)/(6-1) = 10/5 = 2$. The means are: 9, 11, 13, 15. (Check: 7, 9, 11, 13, 15, 17 — common difference = 2 ✓)

**Example 3:** How many terms of the AP 3, 7, 11, ... are needed to sum to 640?
Solution: $a = 3$, $d = 4$. We need $S_n = n/2(2\times3 + (n-1)\times4) = n(3+2n-2) = n(2n+1) = 640$.
So $2n^2 + n - 640 = 0$. Using the quadratic formula: $n = \frac{-1 \pm \sqrt{1 + 5120}}{4} = \frac{-1 \pm 71.54}{4}$. Positive: $n = 70.54/4 = 17.635$. Since $n$ must be integer, try $n = 17$: $S_{17} = 17 \times 35 = 595$ (too low). $n = 18$: $18 \times 37 = 666$. Neither gives 640 exactly — recheck: $S_n = n/2(2a + (n-1)d = n/2(6 + 4n - 4) = n/2(4n + 2) = 2n^2 + n$. Setting $2n^2 + n = 640$, discriminant = $1 + 5120 = 5121$. $\sqrt{5121} ≈ 71.56$. $n = (-1 + 71.56)/4 = 17.64$. Since 17 terms give 595 and 18 give 666, the problem may have been intended to give a whole number. However, $n$ is approximately 17.64.

**Properties of AP:**
1. If the same constant is added to or subtracted from all terms, the result is still an AP
2. If all terms are multiplied by the same constant, the result is still an AP
3. The sum of terms equidistant from the beginning and end are equal: $a_1 + a_n = a_2 + a_{n-1} = ...$

**⚡ Common student mistakes:**
1. Forgetting to subtract 1 from $n$ in the general term formula $a_n = a + (n-1)d$
2. Mixing up the formula for $S_n$ — always check: for $n=1$, $S_1 = a$ ✓
3. In problems with arithmetic means, counting the wrong total number of terms

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for ECAT mastery of sequences and series.

**Proofs of AP Formulas:**

**General term proof by induction:**
Base case ($n=1$): $a_1 = a + 0 \cdot d$ ✓
Inductive step: Assume $a_k = a + (k-1)d$. Then:
$$a_{k+1} = a_k + d = a + (k-1)d + d = a + kd$$
which is the formula with $n = k+1$. Hence proved.

**Sum formula proof:**
$$S_n = a + (a+d) + (a+2d) + ... + (a+(n-1)d)$$
Writing backwards:
$$S_n = (a+(n-1)d) + (a+(n-2)d) + ... + a$$
Adding:
$$2S_n = [2a + (n-1)d] + [2a + (n-1)d] + ... \text{ (n times)}$$
$$S_n = \frac{n}{2}[2a + (n-1)d] \quad \blacksquare$$

**AP in Sum of Series — Worked Examples:**

**Example: Sum of squares vs. arithmetic progression**
While AP deals with linear sequences, sums like $1^2 + 2^2 + ... + n^2$ form a different pattern. But AP questions often appear in disguised form. Consider: "The sum of the first $n$ terms of a sequence is $S_n = 3n^2 + 5n$. Show it's an AP."
$a_1 = 3(1)^2 + 5(1) = 8$. $a_2 = 3(4) + 10 = 22$. $a_3 = 3(9) + 15 = 42$. Differences: $22-8 = 14$, $42-22 = 20$ — not constant. Wait: $S_n - S_{n-1} = a_n = 3n^2 + 5n - [3(n-1)^2 + 5(n-1)] = 3n^2 + 5n - [3(n^2 - 2n + 1) + 5n - 5] = 3n^2 + 5n - 3n^2 + 6n - 3 - 5n + 5 = 6n + 2$. So $a_n = 6n + 2$. This is an AP with first term $a_1 = 8$ and $d = 6$.

**Harmonic Progression (HP) — Brief Introduction:**

A sequence is in HP if the reciprocals are in AP. The harmonic mean of $a$ and $b$ is $\frac{2ab}{a+b}$. There is no simple formula for the sum of HP terms (unlike AP). ECAT rarely asks for HP sum directly, but may ask for the harmonic mean.

**Relationships Between AM, GM, HM:**
For two positive numbers $a$ and $b$:
- AM = $\frac{a+b}{2}$
- GM = $\sqrt{ab}$
- HM = $\frac{2ab}{a+b}$

The fundamental inequality: $HM \leq GM \leq AM$, with equality when $a = b$.

**Problem Types in ECAT:**
1. Given $a_1, d, n$ → find $a_n$ and $S_n$ (direct formula)
2. Given two terms → find $a_1$ and $d$ (two equations)
3. Given $S_n$ as function of $n$ → find the AP (find $a_n = S_n - S_{n-1}$)
4. Arithmetic means problems
5. AP in disguised form: "The ages of 5 people are in AP and sum to 100" → solve

**ECAT Previous Year Patterns:**
- Direct formula application: every year
- Finding $a$ and $d$ from two terms: very common
- Sum of AP problems: calculation-based
- AM, GM, HM relationship: periodically tested

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
