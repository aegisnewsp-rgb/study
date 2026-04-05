---
exam: waec
examName: WAEC WASSCE
subject: mathematics
subjectName: Mathematics
topic: math-16
topicName: Probability
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.625253"
diagramPrompt: Mathematical diagram showing Probability concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style
---

# Probability

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Probability** measures how likely an event is to occur. It ranges from 0 (impossible) to 1 (certain).

**Basic Formula:**
$$P(A) = \frac{\text{Number of favorable outcomes}}{\text{Total number of possible outcomes}}$$

**Key Terms:**
- **Experiment**: An action with uncertain outcome (e.g., tossing a coin, rolling a die)
- **Outcome**: A single possible result (e.g., "heads", "3")
- **Sample space (S)**: The set of ALL possible outcomes
- **Event (A)**: The outcome(s) we are interested in
- **Favorable outcomes**: Outcomes that satisfy the event

**Examples with a standard die:**

| Experiment | Sample Space (S) | Event: Roll > 4 | P(>4) |
|------------|------------------|-----------------|-------|
| Roll one die | {1,2,3,4,5,6} | {5,6} | 2/6 = 1/3 |

**Coin Toss:**
$$P(\text{head}) = \frac{1}{2}, \quad P(\text{tail}) = \frac{1}{2}$$

**Properties:**
- $0 \leq P(A) \leq 1$
- $P(\text{not } A) = 1 - P(A)$
- If $P(A) = 0$: Impossible event
- If $P(A) = 1$: Certain event

⚡ **WAEC Tip:** When listing sample spaces, make sure each outcome is equally likely. A coin has 2 equally likely outcomes. A die has 6 equally likely outcomes. Don't count something twice!

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Counting Principles:**

**Addition Principle (OR):**
If event A can occur in m ways, event B can occur in n ways, and they are mutually exclusive:
$$n(A \cup B) = n(A) + n(B)$$

**Multiplication Principle (AND):**
If event A can occur in m ways, and for each of those, event B can occur in n ways:
$$n(A \times B) = m \times n$$

**Example**: How many ways to choose a shirt and trousers if you have 4 shirts and 3 pairs of trousers?
$$4 \times 3 = 12 \text{ ways}$$

**Permutations (ORDER matters):**
$$^nP_r = \frac{n!}{(n-r)!}$$

**Example**: Arrange 3 books from 5 distinct books.
$$^5P_3 = \frac{5!}{(5-3)!} = \frac{120}{2!} = \frac{120}{2} = 60$$

**Combinations (ORDER doesn't matter):**
$$^nC_r = \binom{n}{r} = \frac{n!}{r!(n-r)!}$$

**Example**: Choose 3 students from 10 for a committee.
$$\binom{10}{3} = \frac{10!}{3!7!} = \frac{720}{6} = 120$$

**Probability Rules:**

**Addition Rule (OR — Mutually Exclusive):**
$$P(A \cup B) = P(A) + P(B) \quad \text{if } A \cap B = \emptyset$$

**Addition Rule (OR — Non-Mutually Exclusive):**
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

**Example**: Drawing a card that is either a king OR a heart from a standard deck (52 cards).
- $P(\text{king}) = 4/52 = 1/13$
- $P(\text{heart}) = 13/52 = 1/4$
- $P(\text{king of hearts}) = 1/52$
- $P(\text{king or heart}) = 1/13 + 1/4 - 1/52 = 4/52 + 13/52 - 1/52 = 16/52 = 4/13$

**Multiplication Rule (AND — Independent):**
$$P(A \cap B) = P(A) \times P(B) \quad \text{if A and B are independent}$$

**Example**: Toss a coin twice. P(two heads) = P(H) × P(H) = 1/2 × 1/2 = 1/4

**Conditional Probability:**
$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

**Example**: In a class of 30 students, 18 play football, 12 play basketball, and 5 play both. A student is randomly selected. Given that the student plays football, what's the probability they also play basketball?
$$P(B|F) = \frac{5}{18}$$

⚡ **Common Student Mistakes:** Confusing permutations with combinations — if order matters, use permutations. Confusing "or" with "and" — or means add (with subtraction for overlap), and means multiply (if independent). Forgetting that the sample space must be recalculated when items are removed (e.g., without replacement).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for thorough preparation.

**Probability with Playing Cards:**

A standard deck has 52 cards:
- 4 suits: Hearts (♥), Diamonds (♦), Clubs (♣), Spades (♠)
- 13 ranks: Ace, 2-10, Jack, Queen, King
- Hearts and Diamonds are red; Clubs and Spades are black

**Example Problems:**

**Problem 1**: Two cards are drawn without replacement. Find P(both are kings).
$$P(\text{first king}) = \frac{4}{52}$$
$$P(\text{second king | first was king}) = \frac{3}{51}$$
$$P(\text{both kings}) = \frac{4}{52} \times \frac{3}{51} = \frac{12}{2652} = \frac{1}{221}$$

**Problem 2**: P(at least one head in 3 coin tosses)
It's easier to find P(no heads) and subtract from 1:
$$P(\text{all tails}) = \left(\frac{1}{2}\right)^3 = \frac{1}{8}$$
$$P(\text{at least one head}) = 1 - \frac{1}{8} = \frac{7}{8}$$

**Problem 3**: A bag contains 5 red and 3 blue balls. Two balls are drawn at random without replacement. Find P(one red, one blue).
$$P(\text{R then B}) = \frac{5}{8} \times \frac{3}{7} = \frac{15}{56}$$
$$P(\text{B then R}) = \frac{3}{8} \times \frac{5}{7} = \frac{15}{56}$$
$$P(\text{one of each}) = \frac{15}{56} + \frac{15}{56} = \frac{30}{56} = \frac{15}{28}$$

**Tree Diagrams:**

For sequential events, draw a tree diagram:

A bag has 3 white (W) and 2 black (B) balls. Two balls drawn without replacement.

```
        W (3/5) → W (2/4) → WW (6/20)
       /
Start (1) 
       \ 
        B (2/5) → W (3/4) → BW (6/20)
                 ↓
                 B (1/4) → BB (2/20)
```

**Verification**:
$$P(\text{BW}) = \frac{2}{5} \times \frac{3}{4} = \frac{6}{20} = \frac{3}{10}$$
$$P(\text{WB}) = \frac{3}{5} \times \frac{2}{4} = \frac{6}{20} = \frac{3}{10}$$
$$P(\text{one of each}) = \frac{6}{20} + \frac{6}{20} = \frac{12}{20} = \frac{3}{5}$$

**Expected Value (Mathematical Expectation):**

$$E(X) = \sum x_i \times P(x_i)$$

**Example**: A game costs ₦10 to play. You win ₦30 if you get heads, lose ₦10 if you get tails.
$$E(X) = 30 \times \frac{1}{2} + (-10) \times \frac{1}{2} = 15 - 5 = ₦10$$

Since E(X) = 10 and cost = 10, the game is fair (zero expected profit/loss).

**Variance:**
$$Var(X) = E(X^2) - [E(X)]^2$$

**Bayes' Theorem:**
$$P(A|B) = \frac{P(B|A) \times P(A)}{P(B)}$$

**Example**: A test for a disease is 99% accurate. The disease affects 1% of the population. If you test positive, what's P(you have the disease)?

Let D = have disease, T+ = test positive
- $P(D) = 0.01$, $P(D') = 0.99$
- $P(T+|D) = 0.99$, $P(T+|D') = 0.01$ (false positive rate)

$$P(D|T+) = \frac{0.99 \times 0.01}{0.99 \times 0.01 + 0.01 \times 0.99} = \frac{0.0099}{0.0198} = 0.5$$

So even with a positive test, there's only 50% chance of having the disease!

**Binomial Probability:**
For n independent trials, each with probability p of success:
$$P(X = r) = \binom{n}{r} p^r (1-p)^{n-r}$$

**Example**: P(exactly 2 heads in 5 tosses):
$$P(X=2) = \binom{5}{2} \times \left(\frac{1}{2}\right)^2 \times \left(\frac{1}{2}\right)^3 = 10 \times \frac{1}{32} = \frac{10}{32} = \frac{5}{16}$$

**Normal Distribution (brief):**
A continuous probability distribution with mean μ and standard deviation σ:
- Bell-shaped, symmetric about mean
- 68% of data within 1σ of mean
- 95% within 2σ
- 99.7% within 3σ
- Z-score: $z = \frac{x - \mu}{\sigma}$

⚡ **WAEC Examination Patterns:** Complete probability trees. Calculate expected values. Use counting principles (combinations, permutations). Apply Bayes' theorem in real contexts. Solve problems involving dice, cards, and coins. Find probabilities involving "at least" or "at most" by complement method.
