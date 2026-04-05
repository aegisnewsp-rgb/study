---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-13
topicName: Probability and Permutations
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.070666"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"

---

# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT exam.

**Probability Fundamentals:**

Probability measures how likely an event is to occur, on a scale from 0 (impossible) to 1 (certain). For equally likely outcomes:

$$P(A) = \frac{\text{Number of favourable outcomes}}{\text{Total number of possible outcomes}}$$

**Key concepts:**
- **Sample space (S)**: the set of all possible outcomes
- **Event (E)**: a subset of the sample space
- **Complement**: $P(\bar{A}) = 1 - P(A)$
- **Mutually exclusive events**: $P(A \cup B) = P(A) + P(B)$
- **Non-mutually exclusive events**: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- **Conditional probability**: $P(A|B) = P(A \cap B)/P(B)$
- **Independent events**: $P(A \cap B) = P(A) \cdot P(B)$

**Permutations and Combinations — The Foundation:**

**Permutation (order matters):** $\_nP_r = \frac{n!}{(n-r)!}$
- When all $n$ objects are arranged: $n!$
- When $r$ objects are selected from $n$ and arranged: $\nP_r = n(n-1)(n-2)...(n-r+1)$

**Combination (order doesn't matter):** $\binom{n}{r} = \frac{n!}{r!(n-r)!}$
- Selecting $r$ objects from $n$ without regard to order: $\binom{n}{r}$

**⚡ ECAT exam tips:**
- Use permutations when the arrangement matters (e.g., seating arrangements, words formed)
- Use combinations when only the selection matters (e.g., choosing a committee)
- $\binom{n}{r} = \binom{n}{n-r}$ — symmetric property
- $n!$ grows extremely fast: $10! = 3,628,800$; $12! = 479,001,600$

---

### 🟡 Standard — Regular Study (2d–2mo)
> For ECAT students who want genuine understanding.

**Permutation — Worked Examples:**

**Example 1:** How many 4-digit numbers can be formed from digits 1, 2, 3, 4, 5, 6 if digits cannot repeat?
$\nP_4 = 6 \times 5 \times 4 \times 3 = 360$.

**Example 2:** How many of these start with 2?
Fix first digit = 2. Remaining 3 positions from remaining 5 digits: $\nP_3 = 5 \times 4 \times 3 = 60$.

**Example 3:** How many arrangements of the word "ENGINEER" are possible?
The word ENGINEER has 8 letters: E×3, N×2, G×1, I×1, R×1.
Total arrangements: $\frac{8!}{3! \cdot 2!} = \frac{40320}{12} = 3360$.

**Combination — Worked Examples:**

**Example 1:** Choose 3 students from 12 for a debate team. In how many ways?
$\binom{12}{3} = \frac{12!}{3!9!} = \frac{12 \times 11 \times 10}{6} = 220$.

**Example 2:** A committee of 5 must be chosen from 6 men and 4 women. How many committees contain exactly 2 women?
Choose 2 women from 4: $\binom{4}{2} = 6$. Choose 3 men from 6: $\binom{6}{3} = 20$. Total: $6 \times 20 = 120$.

**Probability — Worked Examples:**

**Example 1:** A bag contains 5 red and 4 white balls. Two balls are drawn without replacement. Find P(both red).
$P(\text{first red}) = 5/9$. $P(\text{second red | first red}) = 4/8 = 1/2$.
By multiplication rule: $P(\text{both red}) = 5/9 \times 1/2 = 5/18$.

**Example 2:** In the same bag, find P(exactly one red).
$P(\text{first red, second white}) + P(\text{first white, second red})$
$= (5/9 \times 4/8) + (4/9 \times 5/8) = (20/72) + (20/72) = 40/72 = 5/9$.

**Example 3:** A die is thrown twice. Find P(at least one 6).
It's easier to find P(no 6 in two throws) = $(5/6)^2 = 25/36$.
Then $P(\text{at least one 6}) = 1 - 25/36 = 11/36$.

**⚡ Common student mistakes:**
1. Confusing permutations with combinations — ask: does order matter?
2. In probability without replacement, not adjusting the denominator after the first draw
3. Forgetting that $P(A) + P(\bar{A}) = 1$ and using it to simplify "at least one" problems
4. Not simplifying $\frac{n!}{r!(n-r)!}$ correctly — especially with large factorials

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for ECAT mastery of probability.

**Conditional Probability and Bayes' Theorem:**

$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

**Example:** Urn 1 has 3 white and 2 black balls. Urn 2 has 2 white and 3 black. An urn is chosen at random and a ball is drawn. It is white. What is the probability it came from Urn 1?

$P(\text{Urn 1}) = P(\text{Urn 2}) = 1/2$.
$P(W|\text{Urn 1}) = 3/5$, $P(W|\text{Urn 2}) = 2/5$.
$P(W) = P(\text{Urn 1})P(W|\text{Urn 1}) + P(\text{Urn 2})P(W|\text{Urn 2}) = (1/2)(3/5) + (1/2)(2/5) = 3/10 + 2/10 = 1/2$.
By Bayes' theorem:
$$P(\text{Urn 1}|W) = \frac{P(\text{Urn 1})P(W|\text{Urn 1})}{P(W)} = \frac{(1/2)(3/5)}{1/2} = \frac{3}{5}$$

**Bayes' Theorem (General Form):**
$$P(A_i|B) = \frac{P(A_i)P(B|A_i)}{\sum_j P(A_j)P(B|A_j)}$$

**The Multiplication Principle — Counting:**

If task 1 can be done in $m$ ways and task 2 in $n$ ways (independently), both tasks can be done in $m \times n$ ways.

**Circular Permutations:**
- $n$ distinct objects around a circle: $(n-1)!$
- If reflections are considered identical (necklaces): $(n-1)!/2$
- $n$ objects with some identical around a circle: $(n-1)!/(q_1! q_2!...)$ where $q_i$ are the multiplicities of identical objects

**Derangements (Subtle Point):**
The number of ways that $n$ objects can be arranged so that no object is in its original position (derangement problem):
$$D_n = n!\left(1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + ... + \frac{(-1)^n}{n!}\right)$$
For $n=3$: $D_3 = 3!(1 - 1 + 1/2 - 1/6) = 6(1/3) = 2$.

**Probability Distribution — Expected Value:**

If a random variable $X$ takes values $x_1, x_2, ...$ with probabilities $p_1, p_2, ...$:
$$E(X) = \sum x_i p_i$$
Variance: $\text{Var}(X) = E(X^2) - [E(X)]^2$

**Binomial Probability:**
When $n$ independent trials, each with probability $p$ of success:
$$P(X=r) = \binom{n}{r} p^r (1-p)^{n-r}$$

**Example:** A coin is tossed 5 times. Find P(exactly 3 heads).
$n=5$, $r=3$, $p=1/2$.
$P = \binom{5}{3} (1/2)^3 (1/2)^2 = 10/32 = 5/16$.

**Inclusion-Exclusion Principle (Counting):**

For any two sets:
$$|A \cup B| = |A| + |B| - |A \cap B|$$

For three sets:
$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |B \cap C| - |C \cap A| + |A \cap B \cap C|$$

**ECAT Previous Year Patterns:**
- Permutations with restrictions: common
- Combinations with conditions: very common
- Probability of compound events: very common
- "At least one" problems: frequently tested
- Bayes' theorem / conditional probability: occasionally tested

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
