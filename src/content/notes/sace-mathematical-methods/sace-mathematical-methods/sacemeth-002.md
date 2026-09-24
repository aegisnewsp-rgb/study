---
exam: sace-mathematical-methods
examName: SACE Stage 2 Mathematical Methods & Specialist Mathematics
subject: sace-mathematical-methods
subjectName: Mathematical Methods
topic: sacemeth-002
topicName: Discrete Random Variables
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Topic 2: Discrete Random Variables — SACE Stage 2 Mathematical Methods Notes

Topic 2 of SACE Stage 2 Mathematical Methods covers probability distributions, expected value, variance and standard deviation for discrete random variables; the Bernoulli and binomial distributions and their applications. Second Topic and the first Topic of the statistics strand.

> Re-check the live Subject Outline on https://www.sace.sa.edu.au/en_US/web/mathematical-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Discrete random variable.** Probability function P(X = x).
- **Mean.** E(X) = Σ x P(X = x).
- **Variance.** Var(X) = E(X²) − E(X)².
- **Binomial.** X ~ B(n, p). E(X) = np.

#### Examiner traps

- Mixing up P(X = x) and P(X ≤ x).
- Treating X as continuous.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Probability function

P(X = x) ≥ 0 and Σ P(X = x) = 1. Mean E(X) = Σ x P(X = x). Variance Var(X) = E(X²) − E(X)².

#### Binomial distribution

X ~ B(n, p). P(X = k) = C(n, k) p^k (1 − p)^(n − k). E(X) = np, Var(X) = np(1 − p).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 2 prepares for Topic 5

- Discrete random variables lead to continuous distributions.

#### Year 12 planning pattern

- Term 1: Discrete random variables.
- Term 2: Binomial distribution.

#### Common misconceptions (and the correction)

- "X is a continuous variable." Discrete variables take only specific values.

---

### Specification reference

This Topic is the second Topic of the SACE Stage 2 Mathematical Methods Subject Outline. Confirm the live Subject Outline on sace.sa.edu.au.

#### Worked example — discrete probability distribution and expected value

A discrete random variable X represents the payout in dollars from a carnival game. The probability distribution of X is given by:

```
  x        |  0   |  5   |  10  |  20
  P(X = x) | 0.60 | 0.25 | 0.10 |  k
```

1. Find the value of the constant k.
2. Calculate the expected payout E(X).
3. The game costs $4.00 to play once. Determine the player's expected net gain or loss per game.
4. Calculate the variance Var(X) and standard deviation σ.

Part 1: Find k
The sum of all probabilities must equal 1:

```
  0.60 + 0.25 + 0.10 + k = 1
  0.95 + k = 1
  k = 0.05
```

Part 2: Expected value E(X)

```
  E(X) = ∑ x P(X = x)
       = (0)(0.60) + (5)(0.25) + (10)(0.10) + (20)(0.05)
       = 0 + 1.25 + 1.00 + 1.00
       = $3.25
```

The expected payout per game is $3.25.

Part 3: Expected net gain or loss
Net gain = Payout − Cost:

```
  E(Net) = E(X) − 4.00 = 3.25 − 4.00 = −$0.75
```

The player has an expected loss of $0.75 per game.

Part 4: Variance and standard deviation
First compute E(X²):

```
  E(X²) = ∑ x² P(X = x)
        = (0²)(0.60) + (5²)(0.25) + (10²)(0.10) + (20²)(0.05)
        = 0 + (25)(0.25) + (100)(0.10) + (400)(0.05)
        = 0 + 6.25 + 10.00 + 20.00
        = 36.25
```

Now apply Var(X) = E(X²) − [E(X)]²:

```
  Var(X) = 36.25 − (3.25)²
         = 36.25 − 10.5625
         = 25.6875
  σ = √25.6875 ≈ 5.068
```

#### Worked example — binomial distribution probability calculations

A multiple-choice quiz contains 10 independent questions, each with 4 options (one correct option per question). A student guesses every question at random.
Let X be the number of correct answers.
1. State the parameters of the binomial distribution.
2. Calculate the probability that the student gets exactly 4 questions correct P(X = 4).
3. Calculate the probability that the student passes the quiz (gets at least 5 correct) P(X ≥ 5).

Part 1: Parameters
X ~ B(n = 10, p = 0.25).

Part 2: P(X = 4)

```
  P(X = 4) = (10 choose 4) (0.25)⁴ (0.75)⁶
```

Calculate components:
- (10 choose 4) = 10! / (4! 6!) = (10 × 9 × 8 × 7) / (4 × 3 × 2 × 1) = 210
- (0.25)⁴ = 1 / 256 ≈ 0.00390625
- (0.75)⁶ = 729 / 4096 ≈ 0.1779785

```
  P(X = 4) = 210 × 0.00390625 × 0.1779785
           ≈ 0.1460
```

Part 3: P(X ≥ 5)
Using the cumulative binomial distribution or summing individual terms:
- P(X = 5) = (10 choose 5)(0.25)⁵(0.75)⁵ = 252 × (1/1024) × (243/1024) ≈ 0.058399
- P(X = 6) = (10 choose 6)(0.25)⁶(0.75)⁴ = 210 × (1/4096) × (81/256) ≈ 0.016222
- P(X = 7) = (10 choose 7)(0.25)⁷(0.75)³ = 120 × (1/16384) × (27/64) ≈ 0.003090
- P(X = 8) = (10 choose 8)(0.25)⁸(0.75)² = 45 × (1/65536) × (9/16) ≈ 0.000386
- P(X = 9) = 10 × (0.25)⁹(0.75)¹ ≈ 0.000029
- P(X = 10) = (0.25)¹⁰ ≈ 0.000001

Sum:

```
  P(X ≥ 5) = 0.058399 + 0.016222 + 0.003090 + 0.000386 + 0.000029 + 0.000001
           ≈ 0.0781
```

The probability of passing by blind guessing is approximately 0.0781 (or 7.8%).

#### Common marking-scheme mistakes

- Forgetting to subtract [E(X)]² when computing Var(X).
- Assuming binomial trials are independent when sampling is conducted without replacement from a small population.
- Using sample statistics formulas instead of population formulas for known probability tables.
- Stating the expected value without appropriate units (such as dollars).
- Omitting the binomial coefficient (n choose k) in probability calculations.

#### 20-minute recap before you walk in

- Discrete distribution condition: ∑ P(X = x) = 1 and 0 ≤ P(X = x) ≤ 1.
- Expected value: E(X) = ∑ x P(X = x).
- Variance: Var(X) = E(X²) − [E(X)]² = ∑ x² P(X = x) − μ².
- Binomial distribution formula: P(X = k) = (n choose k) p^k (1 − p)^(n−k).
- Binomial mean: μ = np; binomial variance: σ² = np(1 − p).

#### Sub-topics the syllabus lists that this note does not cover in detail

The SACE Stage 2 Mathematical Methods Subject Outline also lists:

- Properties of linear transformations of discrete random variables: E(aX + b) = a E(X) + b and Var(aX + b) = a² Var(X).
- Bernoulli distribution properties as a single trial special case where n = 1.
- Using graphics calculator list functions to compute distribution moments and cumulative probabilities.
- Solving for n or p given a cumulative binomial threshold probability.
- Comparing theoretical distributions to empirical frequency distributions.

Confirm the live Subject Outline on the SACE website before planning revision around these.

---

*Last updated 2026-09-24. Source: SACE Stage 2 Mathematical Methods Subject Outline, https://www.sace.sa.edu.au/en_US/web/mathematical-methods. Awarding body: SACE Board of South Australia.*