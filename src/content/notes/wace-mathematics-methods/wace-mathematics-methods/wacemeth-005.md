---
exam: wace-mathematics-methods
examName: WACE Mathematics Methods & Mathematics Specialist (SCSA)
subject: wace-mathematics-methods
subjectName: Mathematics Methods
topic: wacemeth-005
topicName: Discrete Random Variables
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 3 Topic 3: Discrete Random Variables — WACE Mathematics Methods (SCSA) Notes

Unit 3 Topic 3 of WACE Mathematics Methods covers discrete random variables and their probability distributions; the binomial distribution; expectation, variance and standard deviation. Third Topic of Unit 3 and assessed in the ATAR Year 12 examination.

> Re-check the live specification details on https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Discrete random variable.** Probability function P(X = x).
- **Mean.** E(X) = Σ x P(X = x).
- **Variance.** Var(X) = E(X²) − E(X)².
- **Binomial.** X ~ B(n, p). E(X) = np.

#### Examiner traps

- Mixing up P(X = x) and P(X ≤ x).
- Forgetting that Var(X) ≠ 0.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Discrete random variables

Probability function P(X = x) with Σ P(X = x) = 1 and P(X = x) ≥ 0.

Mean E(X) = Σ x P(X = x). Variance Var(X) = E(X²) − E(X)². SD σ(X) = √Var(X).

#### Binomial distribution

X ~ B(n, p) where n = number of independent trials, p = success probability. P(X = k) = C(n, k) p^k (1 − p)^(n − k). E(X) = np, Var(X) = np(1 − p).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 3 of Unit 3 is heavily tested

- Discrete random variables are fundamental for statistical inference.

#### Year 12 planning pattern

- Term 1: Discrete random variables.
- Term 2: Binomial distribution.

#### Common misconceptions (and the correction)

- "Binomial requires n ≥ 30." No.
- "E(X²) = (E(X))²." No — these are different in general.

#### Specification reference

This Topic is the third Topic of Unit 3 in the WACE Mathematics Methods ATAR Year 12 syllabus. Confirm the live examination design brief on senior-secondary.scsa.wa.edu.au.

#### Worked example — discrete probability distribution and fair game analysis

A discrete random variable X represents the payout in dollars from rolling an unfair 6-sided die.
The probability distribution is:

```
  x        |  1   |  2   |  3   |  4   |  5   |  6
  P(X = x) | 0.10 | 0.15 | 0.20 | 0.25 | 0.20 |  k
```

1. Determine the value of the constant k.
2. Calculate the expected payout E(X).
3. Calculate the variance Var(X) and standard deviation σ.
4. If an entry fee of $C is charged to play the game, determine the value of C such that the game is fair.

Part 1: Find k
The sum of all probabilities must equal 1:

```
  0.10 + 0.15 + 0.20 + 0.25 + 0.20 + k = 1
  0.90 + k = 1
  k = 0.10
```

Part 2: Expected value E(X)

```
  E(X) = ∑ x P(X = x)
       = (1)(0.10) + (2)(0.15) + (3)(0.20) + (4)(0.25) + (5)(0.20) + (6)(0.10)
       = 0.10 + 0.30 + 0.60 + 1.00 + 1.00 + 0.60
       = $3.60
```

Part 3: Variance and standard deviation
Calculate E(X²):

```
  E(X²) = ∑ x² P(X = x)
        = (1²)(0.10) + (2²)(0.15) + (3²)(0.20) + (4²)(0.25) + (5²)(0.20) + (6²)(0.10)
        = (1)(0.10) + (4)(0.15) + (9)(0.20) + (16)(0.25) + (25)(0.20) + (36)(0.10)
        = 0.10 + 0.60 + 1.80 + 4.00 + 5.00 + 3.60
        = 15.10
```

Apply Var(X) = E(X²) − [E(X)]²:

```
  Var(X) = 15.10 − (3.60)²
         = 15.10 − 12.96
         = 2.14
  σ = √2.14 ≈ 1.463
```

Part 4: Fair game entry fee
A game is fair if the expected net gain equals zero:

```
  E(Net) = E(X) − C = 0  ⇒  C = E(X) = $3.60
```

The game is fair when the entry fee is $3.60.

#### Worked example — binomial probability distribution

A seed company knows that 85% of its wildflower seeds germinate under standard conditions (p = 0.85).
A gardener plants a packet of n = 12 seeds.
Let X be the number of seeds that germinate.
1. State the probability distribution of X.
2. Find the probability that exactly 10 seeds germinate.
3. Find the probability that at least 11 seeds germinate.
4. Calculate the expected value and standard deviation of germinating seeds.

Part 1: Distribution
X follows a binomial distribution: X ~ B(n = 12, p = 0.85).

Part 2: P(X = 10)

```
  P(X = 10) = (12 choose 10) (0.85)¹⁰ (0.15)²
```

Calculate components:
- (12 choose 10) = (12 choose 2) = (12 × 11) / 2 = 66
- (0.85)¹⁰ ≈ 0.19687
- (0.15)² = 0.0225

```
  P(X = 10) = 66 × 0.19687 × 0.0225
            ≈ 0.2924
```

Part 3: P(X ≥ 11)

```
  P(X ≥ 11) = P(X = 11) + P(X = 12)
```

- P(X = 11) = (12 choose 11) (0.85)¹¹ (0.15)¹ = 12 × 0.16734 × 0.15 ≈ 0.30121
- P(X = 12) = (12 choose 12) (0.85)¹² (0.15)⁰ = 1 × 0.14224 × 1 ≈ 0.14224

```
  P(X ≥ 11) = 0.30121 + 0.14224 = 0.44345
```

The probability that at least 11 seeds germinate is approximately 0.4435 (or 44.35%).

Part 4: Expected value and standard deviation

```
  E(X) = np = 12 × 0.85 = 10.2 seeds
  Var(X) = np(1 − p) = 12 × 0.85 × 0.15 = 1.53
  σ = √1.53 ≈ 1.237 seeds
```

#### Common marking-scheme mistakes

- Forgetting to square E(X) when applying the variance formula Var(X) = E(X²) − [E(X)]².
- Neglecting to state the fair game condition as E(X) − cost = 0.
- Confusing discrete probability distributions with continuous density functions.
- Dropping the binomial coefficient (n choose k) in probability calculations.
- Using sample statistics formulas s² = ∑(x − x̄)²/(n − 1) instead of population distribution formulas.

#### 20-minute recap before you walk in

- Discrete distribution requirements: ∑ P(X = x) = 1 and 0 ≤ P(X = x) ≤ 1.
- Expected value formula: E(X) = ∑ x P(X = x).
- Variance formula: Var(X) = E(X²) − [E(X)]².
- Fair game condition: E(Net payout) = 0.
- Binomial formula: P(X = k) = (n choose k) p^k (1 − p)^(n−k); E(X) = np; Var(X) = np(1 − p).

#### Sub-topics the syllabus lists that this note does not cover in detail

The SCSA Mathematics Methods Year 12 Unit 3 syllabus also lists:

- Properties of expected value under linear transformations: E(aX + b) = a E(X) + b.
- Properties of variance under linear transformations: Var(aX + b) = a² Var(X).
- Bernoulli trials as an elementary building block of binomial sequences.
- Using CAS calculators to solve inverse binomial cumulative problems.
- Shape and symmetry of binomial distributions as p varies from 0 to 1.

Confirm the live syllabus on the SCSA website before planning revision around these.

---

*Last updated 2026-09-24. Source: WACE Mathematics Methods ATAR Year 12 syllabus, https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods. Awarding body: School Curriculum and Standards Authority (SCSA).*