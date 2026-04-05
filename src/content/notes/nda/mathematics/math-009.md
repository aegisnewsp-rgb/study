---



exam: nda
examName: NDA
subject: mathematics
subjectName: Mathematics
topic: math-009
topicName: Probability
weight: 4
country: india
generated: "2026-03-24T08:32:07.809248"
diagramPrompt: Mathematical diagram showing Probability concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style



---
# Probability

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Probability — Quick Facts**

**Fundamental Terms:**
- **Experiment:** A process with uncertain outcomes (e.g. rolling a die, drawing a card)
- **Outcome:** A single possible result of the experiment (e.g. getting a '5' on a die)
- **Sample space $S$:** The set of all possible outcomes (e.g. $S = \{1, 2, 3, 4, 5, 6\}$ for a fair die)
- **Event:** A subset of the sample space (e.g. 'getting an even number' $= \{2, 4, 6\}$)

**Definition of Probability:**
For an event $A$:
$$P(A) = \frac{n(A)}{n(S)}$$
where $n(A)$ is the number of favourable outcomes and $n(S)$ is the total number of equally likely outcomes.

**Key constraints:**
$$0 \leq P(A) \leq 1 \quad \text{for any event } A$$
$$P(\phi) = 0, \quad P(S) = 1$$

**Complementary Event:**
$$P(A') = 1 - P(A)$$
Therefore: $P(A) + P(A') = 1$.

⚡ **NDA Exam Tip:** When a question asks for the probability of "at least one" of something, it is usually easiest to compute $P(\text{none})$ and subtract from 1. For example, $P(\text{at least one head in 3 tosses}) = 1 - P(\text{no heads}) = 1 - \left(\frac{1}{2}\right)^3 = \frac{7}{8}$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding and problem-solving fluency.

**Addition Theorem**

For any two events $A$ and $B$:
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

If $A$ and $B$ are **mutually exclusive** (cannot happen together, $A \cap B = \phi$):
$$P(A \cup B) = P(A) + P(B)$$

**NDA Worked Example:**
A bag contains 5 red balls, 3 blue balls, and 2 green balls. One ball is drawn at random. Find the probability that it is red or blue.
$$n(S) = 5 + 3 + 2 = 10$$
$$P(\text{red}) = \frac{5}{10} = \frac{1}{2}, \quad P(\text{blue}) = \frac{3}{10}$$
These are mutually exclusive:
$$P(\text{red} \cup \text{blue}) = \frac{5}{10} + \frac{3}{10} = \frac{8}{10} = \frac{4}{5}$$

**Conditional Probability**

$P(A|B)$ denotes the probability of event $A$ given that event $B$ has already occurred:
$$P(A|B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) > 0$$

**Multiplication Theorem:**
$$P(A \cap B) = P(A) \cdot P(B|A) = P(B) \cdot P(A|B)$$

**Independent Events**

Two events $A$ and $B$ are **independent** if the occurrence of one does not affect the probability of the other:
$$P(A \cap B) = P(A) \cdot P(B)$$

Example: In two successive throws of a fair coin, the events "first throw is heads" and "second throw is tails" are independent. But "first throw is heads" and "at least one head in two throws" are not independent.

**NDA Worked Example:**
A drawer contains 4 blue pens and 6 black pens. Two pens are drawn one after another without replacement. Find the probability that both are blue.
$$P(\text{first blue}) = \frac{4}{10} = \frac{2}{5}$$
$$P(\text{second blue} | \text{first blue}) = \frac{3}{9} = \frac{1}{3}$$
$$P(\text{both blue}) = \frac{4}{10} \times \frac{3}{9} = \frac{12}{90} = \frac{2}{15}$$

**Baye's Theorem**

Let $\{A_1, A_2, \ldots, A_n\}$ be a partition of the sample space. For any event $B$:
$$P(A_i | B) = \frac{P(A_i) P(B | A_i)}{\sum_{j=1}^{n} P(A_j) P(B | A_j)}$$

**NDA Worked Example (Baye's Theorem):**
A machine produces components in three shifts:
- Shift A: 50% of output, defect rate 2%
- Shift B: 30% of output, defect rate 5%
- Shift C: 20% of output, defect rate 3%

A randomly selected component is found to be defective. What is the probability it came from Shift B?
$$P(B | D) = \frac{P(B)P(D|B)}{P(A)P(D|A) + P(B)P(D|B) + P(C)P(D|C)}$$
$$= \frac{0.30 \times 0.05}{0.50 \times 0.02 + 0.30 \times 0.05 + 0.20 \times 0.03}$$
$$= \frac{0.015}{0.01 + 0.015 + 0.006} = \frac{0.015}{0.031} = \frac{15}{31} \approx 0.484$$

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory, derivations, and advanced problem types for thorough NDA preparation.

**Binomial Distribution**

A binomial experiment has:
- $n$ independent trials
- Each trial has exactly two outcomes: success ($p$) or failure ($q = 1-p$)
- $P(\text{exactly } r \text{ successes in } n \text{ trials}) = \binom{n}{r} p^r q^{n-r}, \quad r = 0, 1, 2, \ldots, n$

where $\binom{n}{r} = \frac{n!}{r!(n-r)!}$.

**NDA Worked Example:**
The probability that a marksman hits a target is $0.6$. He fires 5 times. Find the probability that he hits exactly 3 times.
Here $n = 5$, $p = 0.6$, $q = 0.4$, $r = 3$.
$$P(X = 3) = \binom{5}{3} (0.6)^3 (0.4)^2 = 10 \times 0.216 \times 0.16 = 10 \times 0.03456 = 0.3456$$

**Mean and Variance of Binomial Distribution:**
$$E(X) = np, \quad \text{Var}(X) = npq$$

For the marksman example: $E(X) = 5 \times 0.6 = 3$; $\text{Var}(X) = 5 \times 0.6 \times 0.4 = 1.2$.

**Derivation of Binomial Formula:**
The probability of a specific sequence with exactly $r$ successes and $n-r$ failures is $p^r q^{n-r}$. There are $\binom{n}{r}$ such sequences (ways to choose which $r$ trials are successes). Therefore $P(X=r) = \binom{n}{r} p^r q^{n-r}$.

**Applications in NDA:**
NDA questions often use binomial distribution in contexts like:
- "The probability of a seed germinating is 3/4. If 8 seeds are planted, find probability that at least 2 germinate"
- "A die is rolled 7 times. Find probability of getting exactly 4 sixes"

For "at least" problems, use the complement:
$$P(X \geq 2) = 1 - P(X = 0) - P(X = 1)$$

**Previous Year NDA Question Patterns:**

| Year | Topic Asked |
|---|---|
| 2022 | Conditional probability; independent events |
| 2021 | Baye's theorem; application |
| 2020 | Binomial distribution; mean calculation |
| 2019 | Addition theorem; mutually exclusive events |
| 2018 | Multiplication theorem; dependent events |
| 2017 | Complementation; $P(A') = 1 - P(A)$ |

**Formula Sheet:**

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
$$P(A \cap B) = P(A)P(B) \quad \text{(independent)}$$
$$P(A \cap B) = P(A)P(B|A) = P(B)P(A|B) \quad \text{(general)}$$
$$P(A_i | B) = \frac{P(A_i)P(B|A_i)}{\sum P(A_j)P(B|A_j)} \quad \text{(Baye's)}$$
$$P(X = r) = \binom{n}{r} p^r q^{n-r} \quad \text{(binomial)}$$

**Exam Strategy for Probability:**
1. Always identify the sample space first — count total outcomes carefully
2. For "and" (intersection), check independence before multiplying
3. For "or" (union), check if events are mutually exclusive before adding
4. For conditional probability, decide whether to use the definition $P(A|B) = P(A \cap B)/P(B)$ or Baye's theorem
5. For "at least one" problems, the complement is almost always easier

Probability typically contributes 3–5 questions per NDA Mathematics paper. The combination of basic definitions, conditional probability, and binomial distribution makes it one of the more approachable chapters — but only if you understand when to add, multiply, or complement probabilities. Practise the worked examples above until the approach becomes second nature.