---



exam: jamb
examName: JAMB UTME
subject: mathematics
subjectName: Mathematics
topic: math-11
topicName: Probability
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.736514"
diagramPrompt: "Mathematical diagram showing Probability concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Probability

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Probability** — Quick Facts

**Key Definitions:**
- **Experiment:** Any action or process that leads to one or more outcomes
- **Sample space (S):** The set of all possible outcomes
- **Event (E):** A subset of the sample space
- **Probability of an event:** $P(E) = \frac{n(E)}{n(S)}$ where $0 \leq P(E) \leq 1$

**Basic Probability Rules:**
- $P(S) = 1$ (certain event)
- $P(\emptyset) = 0$ (impossible event)
- $P(E') = 1 - P(E)$ (complement rule)
- $P(E \cup F) = P(E) + P(F) - P(E \cap F)$ (addition rule)

**For Equally Likely Outcomes:**
$$P(\text{event}) = \frac{\text{Number of favourable outcomes}}{\text{Total number of possible outcomes}}$$

**Venn Diagram Formula:**
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

If A and B are **mutually exclusive** (cannot happen together):
$$P(A \cup B) = P(A) + P(B)$$

⚡ **JAMB Exam Tip:** If the question uses words like "or," "either," or "at least one," use the addition rule. If it uses "and," "both," or "simultaneously," you may need the multiplication rule.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Probability** — Study Guide

**Conditional Probability:**

$P(A|B)$ = probability of A given that B has occurred

$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

**Multiplication Rule:**
$$P(A \cap B) = P(A) \times P(B|A) = P(B) \times P(A|B)$$

**Independent Events:**
Events A and B are independent if $P(A \cap B) = P(A) \times P(B)$

Example: Tossing a coin twice — the result of the first toss doesn't affect the second.

**Worked Example:**

A bag contains 5 red and 3 blue balls. Two balls are drawn without replacement. Find the probability that both are red.

$P(\text{first red}) = \frac{5}{8}$
$P(\text{second red | first red}) = \frac{4}{7}$
$P(\text{both red}) = \frac{5}{8} \times \frac{4}{7} = \frac{20}{56} = \frac{5}{14}$

**Worked Example with Complement:**

In a class of 40 students, 25 study Physics, 30 study Chemistry, and 5 study neither. A student is chosen at random. What is the probability that they study both subjects?

$n(P) = 25$, $n(C) = 30$, $n(\text{neither}) = 5$
$n(\text{both}) = 25 + 30 + 5 - 40 = 20$ (using inclusion-exclusion)
$P(\text{both}) = \frac{20}{40} = \frac{1}{2}$

⚡ **Common Student Mistake:** For "without replacement" problems, remember to reduce the sample size after each draw. For "with replacement," the probability stays the same for each draw.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Probability** — Comprehensive Notes

**Bayes' Theorem:**

$$P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$$

**Extended Bayes' Theorem (for multiple mutually exclusive events):**
$$P(A_i|B) = \frac{P(B|A_i) \cdot P(A_i)}{\sum_{j=1}^{n} P(B|A_j) \cdot P(A_j)}$$

**Worked Example:**

An exam has three questions. Question 1: 80% of students answer correctly. Question 2: 70% answer correctly. Question 3: 60% answer correctly. Assuming questions are independent, find the probability that a student gets all three wrong.

$P(\text{all wrong}) = P(\text{wrong Q1}) \times P(\text{wrong Q2}) \times P(\text{wrong Q3})$
$= 0.20 \times 0.30 \times 0.40 = 0.024 = 2.4\%$

**Permutations and Combinations in Probability:**

When selecting $r$ items from $n$ items:
- **Without replacement, order matters (permutation):** $P(n, r) = \frac{n!}{(n-r)!}$
- **Without replacement, order doesn't matter (combination):** $C(n, r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$

**Worked Example:**

From a standard deck of 52 cards, 3 cards are dealt. Find the probability of getting exactly 2 hearts.

Number of ways to choose 2 hearts: $C(13, 2) = 78$
Number of ways to choose 1 non-heart: $C(39, 1) = 39$
Total favourable: $78 \times 39 = 3042$

Total ways to choose 3 cards: $C(52, 3) = 22100$

$P(\text{2 hearts}) = \frac{3042}{22100} = \frac{1521}{11050} \approx 0.138$

**Expectation (Expected Value):**

If a random variable $X$ takes values $x_1, x_2, ..., x_n$ with probabilities $p_1, p_2, ..., p_n$:
$$E(X) = \sum_{i=1}^{n} x_i \cdot p_i$$

**Example:** A game costs ₦50 to play. You win ₦150 with probability 0.2, ₦50 with probability 0.5, and lose otherwise. Find expected profit.

$E(\text{profit}) = (150-50)(0.2) + (50-50)(0.5) + (-50)(0.3)$
$= 100(0.2) + 0(0.5) - 50(0.3)$
$= 20 - 15 = ₦5$

Since $E(\text{profit}) > 0$, the game is favourable on average.

**Probability Distribution:**

| $x$ | $P(X=x)$ |
|-----|----------|
| 0 | $\frac{1}{8}$ |
| 1 | $\frac{3}{8}$ |
| 2 | $\frac{3}{8}$ |
| 3 | $\frac{1}{8}$ |

Check: $\sum P(X=x) = \frac{1}{8} + \frac{3}{8} + \frac{3}{8} + \frac{1}{8} = 1$ ✓

**JAMB Pattern Analysis (2015-2024):**
- 2015: Simple probability with cards and dice
- 2017: Conditional probability with Venn diagrams
- 2019: Binomial probability (exactly $k$ successes in $n$ trials)
- 2021: Expected value word problem
- 2023: Multiplication rule with dependent events

⚡ **Exam Strategy:** Draw a tree diagram for multi-step probability problems. Label every branch with its probability. Multiply along branches for "AND" events, add for "OR" events at a given node.