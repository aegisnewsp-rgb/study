---



exam: neco
examName: NECO SSCE
subject: mathematics
subjectName: Mathematics
topic: math-16
topicName: Probability and Permutations
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.671406"
diagramPrompt: "Mathematical diagram showing Probability and Permutations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Probability and Permutations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Probability measures how likely an event is to occur. It is expressed as a number between 0 and 1, where 0 means impossible and 1 means certain. In NECO mathematics, you must master both basic probability concepts and counting principles (permutations and combinations).

**Key Definitions**

- **Experiment**: An action with uncertain outcomes, such as tossing a coin or rolling a die.
- **Outcome**: A single possible result of an experiment. *"Landing on heads"* is one outcome of a coin toss.
- **Sample space**: The set of all possible outcomes. For a six-sided die, $S = \{1, 2, 3, 4, 5, 6\}$.
- **Event**: A specific outcome or set of outcomes we are interested in. *"Rolling an even number"* = $\{2, 4, 6\}$.

**Probability Formula**

$$P(\text{event}) = \frac{\text{Number of favourable outcomes}}{\text{Total number of possible outcomes}}$$

**Example**: What is the probability of rolling a 3 on a fair six-sided die?
$$P(3) = \frac{1}{6}$$

**The Complementary Event**

$$P(\text{not } A) = 1 - P(A)$$

If $P(\text{passing an exam}) = 0.7$, then $P(\text{failing}) = 1 - 0.7 = 0.3$.

**Types of Probability**

| Type | Meaning |
|------|---------|
| Theoretical | Based on logical analysis (fair coin: $P(H) = 1/2$) |
| Experimental | Based on actual observations (survey results) |
| Conditional | Probability given that another event has occurred |

**⚡ NECO Exam Tips**
- Always check whether events are mutually exclusive before adding probabilities. $P(A \text{ or } B) = P(A) + P(B)$ only if $A$ and $B$ cannot happen together.
- In "and" probability questions for independent events, multiply: $P(A \text{ and } B) = P(A) \times P(B)$.
- Read carefully: "at least one" often means use complementary probability: $1 - P(\text{none})$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Permutations and Combinations**

These are two different ways of selecting items from a set.

**Fundamental Counting Principle**

If task 1 can be done in $m$ ways and task 2 can be done in $n$ ways, both tasks can be done in $m \times n$ ways.

*Example*: A student has 3 shirts and 2 pairs of trousers. How many different outfits can be worn?
$3 \times 2 = 6$ outfits.

**Permutations (Order Matters)**

$$^nP_r = \frac{n!}{(n-r)!}$$

Where $n!$ (n factorial) = $n \times (n-1) \times (n-2) \times ... \times 2 \times 1$

*Example*: How many ways can 3 students be chosen from 5 to sit in 3 specific chairs?
$$^5P_3 = \frac{5!}{(5-3)!} = \frac{120}{2!} = \frac{120}{2} = 60$$

*Another example*: Arrange the letters of the word "EXAM":
- Total arrangements = $4! = 24$
- Vowels in vowels positions: 2 E, A → arrangements = $2! = 2$
- Consonants in consonant positions: X, M → arrangements = $2! = 2$
- Total = $2 \times 2 = 4$

**Combinations (Order Does Not Matter)**

$$^nC_r = \binom{n}{r} = \frac{n!}{r!(n-r)!}$$

*Example*: A committee of 3 is to be formed from 7 students. How many ways?
$$\binom{7}{3} = \frac{7!}{3!4!} = \frac{5040}{6 \times 24} = \frac{5040}{144} = 35$$

**Permutation vs Combination Quick Reference**

| Question asks... | Use |
|------------------|-----|
| Arrange, seat, line up, order | Permutation |
| Select, choose, form a committee, group | Combination |

**Probability of Combined Events**

**Mutually Exclusive Events** ($A \cap B = \emptyset$):
$$P(A \text{ or } B) = P(A) + P(B)$$

**Non-Mutually Exclusive Events**:
$$P(A \text{ or } B) = P(A) + P(B) - P(A \text{ and } B)$$

*Example*: One card is drawn from a standard deck. Find $P(\text{King or Heart})$.
$P(\text{King}) = 4/52$
$P(\text{Heart}) = 13/52$
$P(\text{King of Hearts}) = 1/52$
$P(\text{King or Heart}) = 4/52 + 13/52 - 1/52 = 16/52 = 4/13$

**Independent Events** ($P(A \text{ and } B) = P(A) \times P(B)$):
$$P(A \text{ and } B) = P(A) \times P(B)$$

*Example*: Toss a fair coin twice. Find $P(\text{head both times})$.
$P(H \text{ and } H) = 1/2 \times 1/2 = 1/4$

**Conditional Probability**

$$P(A|B) = \frac{P(A \text{ and } B)}{P(B)}$$

*Example*: A bag contains 3 red and 5 blue balls. Two balls are drawn without replacement. Find $P(\text{second ball is red | first ball is blue})$.

$P(\text{first blue}) = 5/8$
After removing one blue: $P(\text{second red}) = 3/7$
$P(\text{second red | first blue}) = 3/7$

**Common Mistakes**
1. Confusing permutations and combinations — always ask: does order matter?
2. Forgetting to divide by factorials in combination formulas
3. In probability questions with "without replacement", remember the sample space changes after each draw.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Advanced Probability and Counting Techniques**

**Bayes' Theorem**

$$P(A|B) = \frac{P(B|A) \times P(A)}{P(B)}$$

*Example Problem*:
A test for a disease is 99% accurate. If 1% of the population has the disease, what is the probability that a person who tests positive actually has the disease?

Let $D$ = has disease, $T^+$ = tests positive

$P(D) = 0.01$
$P(T^+|D) = 0.99$
$P(T^+|\text{not } D) = 0.01$ (false positive)
$P(\text{not } D) = 0.99$

$P(T^+) = P(T^+|D) \times P(D) + P(T^+|\text{not } D) \times P(\text{not } D)$
$P(T^+) = 0.99 \times 0.01 + 0.01 \times 0.99 = 0.0099 + 0.0099 = 0.0198$

$P(D|T^+) = \frac{0.99 \times 0.01}{0.0198} = \frac{0.0099}{0.0198} = 0.5$

So even with a 99% accurate test, if you test positive and only 1% of the population has the disease, there's a 50% chance you actually have it!

**Permutations with Repeated Elements**

The number of arrangements of $n$ objects where some are identical:
$$\frac{n!}{n_1! \times n_2! \times ...}$$

*Example*: Arrange the letters of "STATISTICS":
Total letters = 10
S appears 3 times, T appears 3 times, I appears 2 times
$$\frac{10!}{3! \times 3! \times 2!} = \frac{3628800}{6 \times 6 \times 2} = \frac{3628800}{72} = 50400$$

**Circular Permutations**

Number of ways to arrange $n$ objects in a circle = $(n-1)!$

*Example*: In how many ways can 6 people be seated at a round table?
$(6-1)! = 5! = 120$ ways

Note: For arrangements around a circular table where clockwise and anticlockwise are considered the same, divide by 2 again.

**The Binomial Distribution**

For repeated independent trials with probability $p$ of success:
$$P(X = r) = \binom{n}{r} p^r (1-p)^{n-r}$$

*Example*: A fair coin is tossed 5 times. Find $P(\text{exactly 3 heads})$.

$n = 5$, $r = 3$, $p = 0.5$
$$P(X=3) = \binom{5}{3} \times (0.5)^3 \times (0.5)^2 = 10 \times 0.125 \times 0.25 = 0.3125$$

**Expected Value (Mathematical Expectation)**

$$E(X) = \sum x \cdot P(x)$$

*Example*: A game costs #100 to play. You win #300 if you roll a 6 on a fair die, and #50 otherwise. Is the game fair?

$E(X) = 300 \times (1/6) + 50 \times (5/6) - 100 = 50 + 41.67 - 100 = -8.33$

The game is not fair — on average, you lose #8.33 per game.

**Combinatorial Proofs**

Sometimes combinations can be used to prove identities:
$$\binom{n}{r} = \binom{n}{n-r}$$

This makes intuitive sense: choosing $r$ from $n$ is the same as leaving out $n-r$.

**NECO SSCE Past Question Patterns**

Probability questions in NECO typically:
- Test basic probability formula and complementary events (very common)
- Include permutations and combinations in Section B
- Ask about sample spaces and events (drawing cards, throwing dice)
- Include "at least one" problems solved via complementary probability

Typical marks distribution: Probability 8–12 marks, Permutations 6–10 marks.

**Key Formulas Summary**

$$P(A) = \frac{n(A)}{n(S)}$$
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
$$P(A \cap B) = P(A) \times P(B) \text{ (independent)}$$
$$^nP_r = \frac{n!}{(n-r)!}$$
$$^nC_r = \binom{n}{r} = \frac{n!}{r!(n-r)!}$$

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
