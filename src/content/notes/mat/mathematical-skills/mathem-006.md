---
exam: mat
examName: MAT
subject: quant
subjectName: Mathematical Skills
topic: mathem-006
topicName: Probability & Permutation-Combination
weight: 3
country: mat
generated: "2026-03-25T17:00:00"
---

# Probability & Permutation-Combination

### 🟢 Lite — Quick Review

Probability and Permutation-Combination occupy adjacent but distinct territories of quantitative reasoning. Permutation-Combination (P&C) concerns itself with counting — the number of ways to select items from a set or arrange them in order. Probability then measures the likelihood of specific outcomes, using P&C to count favourable and total cases. In the MAT Quantitative section, these topics together account for roughly 5–8 questions per paper, making them high-yield areas that reward systematic preparation.

The fundamental probability formula is deceptively simple:
$$P(E) = \frac{\text{Number of favourable outcomes}}{\text{Total number of outcomes}}$$

For complementary events, $P(\bar{E}) = 1 - P(E)$. This is frequently the fastest route when counting favourable cases directly is cumbersome.

The addition rule for two events $A$ and $B$:
$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
When $A$ and $B$ are mutually exclusive (cannot occur together), $P(A \cap B) = 0$.

The multiplication rule applies to sequential or independent events:
$$P(A \cap B) = P(A) \times P(B \mid A) = P(A) \times P(B) \quad \text{(if independent)}$$

For permutations, where order matters: $\,_{n}P_{r} = \frac{n!}{(n-r)!}$.
For combinations, where order does not matter: $\,_{n}C_{r} = \binom{n}{r} = \frac{n!}{r!(n-r)!}$.

⚡ **MAT exam tip:** The most frequent error in probability is applying the wrong rule — adding when you should multiply, or vice versa. Ask yourself: "Are these events happening simultaneously (AND) or is it either one or the other (OR)?" Also, for P&C, watch whether the problem says "arrange" (permutations) or "select/choose" (combinations). Repetition of digits is another common trap — "cannot repeat digits" means you must use permutations, not the simple $n^r$ formula.

---

### 🟡 Standard — Regular Study

#### Probability — Core Concepts

**Sample space:** The set of all possible outcomes of a random experiment. When you roll a fair die once, $S = \{1, 2, 3, 4, 5, 6\}$. When you roll two dice, $|S| = 36$ (each die has 6 faces).

**Event:** A subset of the sample space. The event "sum equals 7" when rolling two dice has 6 favourable outcomes: $\{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\}$. So $P(\text{sum} = 7) = \frac{6}{36} = \frac{1}{6}$.

**Independent vs mutually exclusive — the distinction matters:**
- Independent: One event does not influence the probability of the other. Rolling a 6 on a die and drawing an ace from a deck are independent.
- Mutually exclusive: Both cannot happen together. Drawing a king and drawing a queen from the same deck are mutually exclusive.

**Conditional probability $P(A \mid B)$:** The probability of $A$ given that $B$ has already occurred.
$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

**Worked example:** Two cards drawn without replacement from a standard 52-card deck. Probability both are aces.
$$P(\text{first ace}) = \frac{4}{52}$$
$$P(\text{second ace} \mid \text{first ace}) = \frac{3}{51}$$
$$P(\text{both aces}) = \frac{4}{52} \times \frac{3}{51} = \frac{12}{2652} = \frac{1}{221}$$

#### Permutations — Arrangement Counting

**Linear permutations:** Arranging $n$ distinct objects in a line. There are $n!$ such arrangements.

**Selecting $r$ objects from $n$ distinct objects and arranging them:**
$$\,_{n}P_{r} = n \times (n-1) \times (n-2) \times \cdots \times (n-r+1) = \frac{n!}{(n-r)!}$$

**Example:** How many 4-digit numbers can be formed from $\{1, 2, 3, 4, 5, 6\}$ if digits cannot repeat and the number must be odd?
- Units digit must be odd: $\{1, 3, 5\}$ — 3 choices.
- Thousands digit: remaining 5 digits (excluding the chosen units digit) — 5 choices.
- Hundreds digit: remaining 4 choices.
- Tens digit: remaining 3 choices.
$$\text{Total} = 3 \times 5 \times 4 \times 3 = 180$$

**Circular permutations:** For $n$ distinct objects around a circle, there are $(n-1)!$ arrangements (clockwise position is fixed to account for rotation).

**If a necklace can be flipped over** (so clockwise and anticlockwise are the same), arrangements = $\frac{(n-1)!}{2}$.

**Permutations with repeated objects:**
$$\text{Arrangements of } n \text{ objects with } p \text{ alike, } q \text{ alike, } r \text{ alike} = \frac{n!}{p! \, q! \, r!}$$

**Example:** Arrange the letters of "BANANA".
$B^1 A^3 N^2$: $\frac{6!}{1! \, 3! \, 2!} = \frac{720}{12} = 60$ arrangements.

**Example:** Arrange the letters of "PROBABILITY" ($P=1, R=1, O=1, B=2, A=1, I=2, L=1, T=1, Y=1$ — total 11 letters).
$$\frac{11!}{2! \, 2!} = \frac{39916800}{4} = 9979200$$

#### Combinations — Selection Counting

**When order does not matter:**
$$\binom{n}{r} = \frac{n!}{r!(n-r)!}$$

**Key identities:**
- $\binom{n}{0} = 1$ and $\binom{n}{n} = 1$
- $\binom{n}{r} = \binom{n}{n-r}$ (symmetry — selecting $r$ from $n$ equals leaving out $n-r$)
- $\binom{n}{r} + \binom{n}{r-1} = \binom{n+1}{r}$ (Pascal's identity)

**Complement method:** Sometimes it is easier to count what you do NOT want.

**Example:** From 7 men and 5 women, form a committee of 4 with at least 2 women.

| Case | Women | Men | Selections |
|------|-------|-----|-----------|
| 1 | 2 | 2 | $\binom{5}{2} \times \binom{7}{2} = 10 \times 21 = 210$ |
| 2 | 3 | 1 | $\binom{5}{3} \times \binom{7}{1} = 10 \times 7 = 70$ |
| 3 | 4 | 0 | $\binom{5}{4} = 5$ |

$$\text{Total} = 210 + 70 + 5 = 285$$

Alternatively using complement: Total $\binom{12}{4} = 495$. Subtract cases with 0 or 1 woman:
- 0 women: $\binom{7}{4} = 35$
- 1 woman: $\binom{5}{1} \times \binom{7}{3} = 5 \times 35 = 175$
$$495 - 35 - 175 = 285 \checkmark$$

**Distribution of distinct objects into distinct boxes:**
- Allowing empty boxes: $k^n$
- No box empty: Use inclusion-exclusion or Stirling numbers of the second kind: $S(n,k) = \frac{1}{k!}\sum_{i=0}^{k}(-1)^i \binom{k}{i}(k-i)^n$

#### Expected Value

$$E(X) = \sum_{i} x_i \times P(x_i)$$

**Example:** A game at a carnival costs ₹15 to play. A fair die is rolled — you receive ₹60 for rolling a 6, ₹30 for rolling a 3, and nothing otherwise.
$$E(\text{winnings}) = 60 \times \frac{1}{6} + 30 \times \frac{1}{6} + 0 \times \frac{4}{6} = 10 + 5 + 0 = 15$$
$$E(\text{net}) = 15 - 15 = 0 \implies \text{fair game}$$

**Common mistakes:** Confusing permutations with combinations — a committee of 3 people is a combination (order irrelevant), but arranging 3 books on a shelf is a permutation. Forgetting that "cannot repeat digits" eliminates the $n^r$ shortcut. In probability, assuming independence when events are actually dependent (drawing without replacement). Overlooking the subtraction of intersections in the addition rule.

---

### 🔴 Extended — Deep Study

#### Bayes' Theorem

Bayes' theorem reverses conditional probability — it tells you $P(A \mid B)$ when you know $P(B \mid A)$.

$$P(A \mid B) = \frac{P(B \mid A) \times P(A)}{P(B)}$$

**The medical test paradox (classic example):**
A disease affects 1 in 1000 people ($P(D) = 0.001$). A test is 99% accurate — positive for 99% of diseased people and negative for 99% of healthy people. You test positive. What is the probability you actually have the disease?

$$P(D \mid T+) = \frac{P(T+ \mid D) \times P(D)}{P(T+ \mid D) \times P(D) + P(T+ \mid \bar{D}) \times P(\bar{D})}$$
$$= \frac{0.99 \times 0.001}{0.99 \times 0.001 + 0.01 \times 0.999} = \frac{0.00099}{0.010989} \approx 0.0901$$

Only about **9%** — counterintuitive because the base rate (prior probability of disease) is so low. This result has significant real-world implications for medical testing interpretation.

#### Inclusion-Exclusion Principle

For counting union of sets:
$$|A \cup B| = |A| + |B| - |A \cap B|$$

For three sets:
$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |B \cap C| - |A \cap C| + |A \cap B \cap C|$$

**Example:** In a class of 60 students, 30 study Mathematics, 25 study Physics, 20 study Chemistry. 10 study both Maths and Physics, 8 study both Physics and Chemistry, 7 study both Maths and Chemistry, and 5 study all three. How many study at least one?
$$|M \cup P \cup C| = 30 + 25 + 20 - 10 - 8 - 7 + 5 = 55$$
Students studying none: $60 - 55 = 5$

#### Derangements (The Matching Problem)

The number of ways $n$ objects can be arranged so that none occupies its original position:
$$D_n = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!} = n! \left(1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \cdots + \frac{(-1)^n}{n!}\right)$$

Values: $D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9, D_5 = 44, D_6 = 265$.

**Example:** The secretary problem — 5 letters placed randomly in 5 addressed envelopes, with no letter in the correct envelope: $D_5 = 44$ ways.

#### Stars and Bars

Distributing $n$ identical objects among $r$ distinct boxes (empty boxes allowed):
$$\binom{n + r - 1}{r - 1}$$

**Example:** Distributing 7 identical sweets among 3 children: $\binom{7+3-1}{3-1} = \binom{9}{2} = 36$ ways.

If no child receives zero sweets: $\binom{7-1}{3-1} = \binom{6}{2} = 15$ ways.

#### Advanced Dice and Cards

**Three dice sum problems:** For three standard dice, sum = 10 has 27 favourable outcomes out of 216 total. The solution requires systematically counting partitions of 10 into three numbers from 1 to 6:

| Type | Triplet pattern | Permutations |
|------|----------------|--------------|
| (1,3,6) | 6 | 6 |
| (1,4,5) | 6 | 6 |
| (2,2,6) | 3 | 3 |
| (2,3,5) | 6 | 6 |
| (2,4,4) | 3 | 3 |
| (3,3,4) | 3 | 3 |

$$P(\text{sum} = 10) = \frac{27}{216} = \frac{1}{8}$$

#### Practice Problems with Full Solutions

**Q1:** From 7 men and 5 women, form a committee of 4 with at least 2 women. (Already solved above: 285 ways)

**Q2:** A bag contains 4 red and 6 blue balls. Two balls drawn at random. Find $P(\text{both red})$.

Without replacement: $\frac{\binom{4}{2}}{\binom{10}{2}} = \frac{6}{45} = \frac{2}{15}$

With replacement: $\left(\frac{4}{10}\right)^2 = \frac{16}{100} = \frac{4}{25}$

**Q3:** In how many ways can the word "ENGINE" be arranged?
$E=3, N=2, G=1, I=1$. Total letters = 6.
$$\frac{6!}{3! \times 2!} = \frac{720}{12} = 60$$

**Q4:** A person forgets the last two digits of a phone number and dials at random without repeating digits. Find $P(\text{correct})$.
Total possibilities: $\,_{10}P_2 = 10 \times 9 = 90$.
$$P(\text{correct}) = \frac{1}{90}$$

**Q5:** A test has 5 multiple-choice questions, each with 4 options. A student guesses all answers randomly. Find $P(\text{exactly 3 correct})$.
$$P(\text{exactly 3}) = \binom{5}{3} \times \left(\frac{1}{4}\right)^3 \times \left(\frac{3}{4}\right)^2 = 10 \times \frac{1}{64} \times \frac{9}{16} = \frac{90}{1024} = \frac{45}{512}$$

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
