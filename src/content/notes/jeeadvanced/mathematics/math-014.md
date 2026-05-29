---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-014
topicName: Probability
weight: 5
country: india
generated: "2026-03-24T08:32:07.940344"
diagramPrompt: "Mathematical diagram showing Probability concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Probability

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Basic Definitions:**

- **Experiment:** A process with uncertain outcome
- **Sample space** $S$: Set of all possible outcomes
- **Event:** A subset of $S$. Event $A$ occurs if outcome $\in A$
- **Probability of event** $A$: $P(A) = \frac{n(A)}{n(S)}$ (equally likely outcomes)
- $0 \leq P(A) \leq 1$; $P(\phi) = 0$; $P(S) = 1$

**Complement, Union, Intersection:**

- $P(\bar{A}) = 1 - P(A)$
- $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- If $A$ and $B$ are mutually exclusive (disjoint): $P(A \cup B) = P(A) + P(B)$

**Conditional Probability:**
$$P(A|B) = \frac{P(A \cap B)}{P(B)}, \text{ provided } P(B) > 0$$

**Independent Events:**
$A$ and $B$ are independent iff $P(A \cap B) = P(A) \cdot P(B)$.

⚡ **JEE Tip:** For independent repeated trials (like coin tosses), use binomial: $P(r \text{ successes in } n \text{ trials}) = \binom{n}{r} p^r (1-p)^{n-r}$.

⚡ **Common Mistake:** Mutually exclusive vs independent — mutually exclusive events cannot be independent (except trivial case with $P(A) = 0$ or $P(B) = 0$). Don't confuse the two concepts.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Bayes' Theorem:**

If $B_1, B_2, \ldots, B_n$ partition $S$ (mutually exclusive and exhaustive), then:
$$P(B_i|A) = \frac{P(B_i) \cdot P(A|B_i)}{\sum_{k=1}^{n} P(B_k) \cdot P(A|B_k)}$$

**Total Probability Theorem:**
$$P(A) = \sum_{i=1}^{n} P(B_i) \cdot P(A|B_i)$$
where $B_i$ form a partition of $S$.

**Permutation and Combination in Probability:**

When outcomes are equally likely, counting principles apply.

**Urn problems:**

- **With replacement:** Each draw is independent
- **Without replacement:** Draws affect subsequent probabilities

**Worked Examples:**

*Example 1:* A bag contains 5 red and 4 black balls. Two balls are drawn without replacement. Find probability both are red.

$P(\text{first red}) = \frac{5}{9}$.
$P(\text{second red | first red}) = \frac{4}{8} = \frac{1}{2}$.
By multiplication rule: $P(\text{both red}) = \frac{5}{9} \times \frac{1}{2} = \frac{5}{18}$.

*Example 2:* If $P(A) = \frac{1}{3}$, $P(B) = \frac{1}{4}$, and $P(A \cup B) = \frac{1}{2}$, find $P(A|B)$.

First find $P(A \cap B) = P(A) + P(B) - P(A \cup B) = \frac{1}{3} + \frac{1}{4} - \frac{1}{2} = \frac{4+3-6}{12} = \frac{1}{12}$.
$P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{1/12}{1/4} = \frac{1}{3}$.

*Example 3 (JEE 2022):* Three dice are thrown. Find probability that sum of numbers is 10.

Total outcomes: $6^3 = 216$.
We need count of solutions to $d_1 + d_2 + d_3 = 10$ with each $d_i \in \{1,2,3,4,5,6\}$.
Let $x_i = d_i - 1$, so $x_i \geq 0$ and $x_i \leq 5$.
Then $x_1 + x_2 + x_3 = 10 - 3 = 7$ with $x_i \leq 5$.
Without upper bound: $\binom{7+3-1}{3-1} = \binom{9}{2} = 36$.
Subtract cases where any $x_i \geq 6$ (i.e., $x_i' = x_i - 6 \geq 0$): for each of 3 variables, solutions for remaining two summing to $7-6=1$: $3 \times \binom{1+2-1}{2-1} = 3 \times 2 = 6$.
So count $= 36 - 6 = 30$.
Probability $= \frac{30}{216} = \frac{5}{36}$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious JEE Advanced preparation.

**Random Variable and Distribution:**

A random variable $X$ assigns a real number to each outcome. $X$ can be discrete or continuous.

**Binomial Distribution:**
For $n$ independent trials with probability $p$ of success:
$$P(X = r) = \binom{n}{r} p^r (1-p)^{n-r}, \quad r = 0,1,2,\ldots,n$$
Mean $= np$, Variance $= np(1-p)$.

**Poisson Approximation:**
When $n$ is large, $p$ is small, and $\lambda = np$:
$$P(X = r) \approx \frac{e^{-\lambda} \lambda^r}{r!}$$

**Geometric Distribution:**
Probability that first success occurs on $r$-th trial:
$$P(X = r) = (1-p)^{r-1} p, \quad r = 1,2,3,\ldots$$
Mean $= \frac{1}{p}$, Variance $= \frac{1-p}{p^2}$.

**Expectation Properties:**

$E[aX + b] = aE[X] + b$.
For independent $X, Y$: $E[XY] = E[X]E[Y]$.
$Var(X) = E[X^2] - (E[X])^2$.

**Conditional Expectation:**

$E[X] = E[E[X|Y]]$ (law of total expectation).

**Advanced Probability Problems:**

*Problem 1 (JEE Advanced 2023):* An urn contains 5 white and 5 black balls. Balls are drawn without replacement until all balls of one colour are exhausted. Find the expected number of draws.

The clean way to handle this is to count the balls that are **left undrawn** when the process stops, rather than the draws themselves. If $X$ is the number of draws and $L$ is the number of balls remaining at the stopping point, then $X + L = 10$, so
$$E[X] = 10 - E[L].$$

When one colour is exhausted, every ball still in the urn must be of the *other* colour, so the leftover balls are all one colour. Use indicator variables. Imagine the 10 balls placed in a uniformly random order; the draw order is just this arrangement.

A particular white ball is left undrawn exactly when the process stops by exhausting the **black** balls *before* reaching this white ball — equivalently, when this white ball comes after all 5 black balls in the arrangement. Among the 6 balls consisting of this one white ball and the 5 black balls, each is equally likely to be last, so
$$P(\text{this white ball is leftover}) = \frac{1}{6}.$$

There are 5 white balls, and by the symmetry between the two colours the same probability applies to each black ball. By linearity of expectation,
$$E[L] = 5 \cdot \frac{1}{6} + 5 \cdot \frac{1}{6} = \frac{10}{6} = \frac{5}{3}.$$

Therefore
$$E[X] = 10 - \frac{5}{3} = \frac{25}{3} \approx 8.33 \text{ draws.}$$

This is an instance of the **negative hypergeometric** stopping problem; the indicator method generalizes directly to $K$ white and $K$ black balls, giving leftover expectation $\frac{2K}{K+1}$ and expected draws $2K - \frac{2K}{K+1}$.

*Problem 2:* A fair coin is tossed repeatedly. Find the expected number of tosses to obtain the first head.

This is geometric with $p = \tfrac{1}{2}$, so $E[X] = \frac{1}{p} = 2$ tosses.

**JEE Advanced Patterns (2018–2024):**
- Bayes' theorem and total probability are frequently tested
- Binomial distribution with urns/probability appears most years
- Expectation calculations using linearity and conditional expectation (2021, 2023)
- Negative binomial and geometric distribution appeared in 2020 and 2022
- Problems combining probability with algebra (finding coefficients, etc.) are trending

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
