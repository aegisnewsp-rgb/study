---
exam: nabe
examName: NABE (Pakistan)
subject: quant
subjectName: Subject Specific
topic: subjec-014
topicName: Topic 14
weight: 3
country: nabe
generated: "2026-03-25T17:00:00"
---

# Probability

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Probability** — Key Facts for NABE (Pakistan)
- **P(E) = Favorable Outcomes / Total Outcomes** (when outcomes equally likely)
- **P(Sure Event) = 1** | **P(Impossible Event) = 0**
- **P(Not A) = 1 - P(A)** (Complement Rule)
- **P(A or B) = P(A) + P(B) - P(A and B)** (Addition Rule)
- ⚡ **Exam tip**: For independent events, P(A and B) = P(A) × P(B)

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Probability — NABE (Pakistan) Study Guide

### Basic Concepts

**Experiment**: An action with uncertain outcome (e.g., tossing a coin)

**Outcome**: A single possible result (e.g., "Heads")

**Sample Space (S)**: Set of all possible outcomes
- Coin toss: S = {H, T}
- Dice roll: S = {1, 2, 3, 4, 5, 6}

**Event**: A specific outcome or set of outcomes

### Probability Scale

```
0 ≤ P(E) ≤ 1

P(E) = 0: Impossible event
P(E) = 1: Certain event
```

### Basic Probability Formula

**For equally likely outcomes**:
```
P(Event) = Number of favorable outcomes / Total number of outcomes
```

**Example**: Probability of getting an even number on a die
- Favorable outcomes: {2, 4, 6} = 3
- Total outcomes: {1, 2, 3, 4, 5, 6} = 6
- P(even) = 3/6 = 1/2 = 0.5

### Complementary Events

**Not A (A')**: Event that A does not occur
```
P(A') = 1 - P(A)
```

**Example**: Probability of NOT getting 6 on a die
- P(6) = 1/6
- P(not 6) = 1 - 1/6 = 5/6

### NABE Exam Pattern

Common question types:
1. Basic probability of single events
2. Complement rule problems
3. Addition rule (mutually exclusive events)
4. Multiplication rule (independent events)
5. Conditional probability

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Probability — Comprehensive NABE (Pakistan) Notes

### Detailed Theory

#### 1. Types of Events

**Mutually Exclusive (Disjoint)**: Two events that cannot occur together
- Example: Rolling a 3 OR a 5 on a die
- If A and B are mutually exclusive: P(A or B) = P(A) + P(B)

**Independent Events**: The occurrence of one doesn't affect the other
- Example: Tossing two coins
- If A and B are independent: P(A and B) = P(A) × P(B)

**Dependent Events**: The occurrence of one affects the other
- Example: Drawing cards without replacement
- P(A and B) = P(A) × P(B|A)

**Exhaustive Events**: Events that cover all possible outcomes
- Example: Getting odd {1, 3, 5} and even {2, 4, 6} are exhaustive for a die

#### 2. Addition Rule — Venn Diagram Approach

**General Formula**:
```
P(A or B) = P(A) + P(B) - P(A and B)
```

**For Mutually Exclusive Events** (P(A and B) = 0):
```
P(A or B) = P(A) + P(B)
```

**Venn Diagram Interpretation**:
- Area of A = P(A)
- Area of B = P(B)
- Overlap = P(A and B)
- Union = P(A) + P(B) - P(A and B)

**Example**: In a class of 40 students, 25 play football, 20 play cricket, and 10 play both.
- P(F) = 25/40 = 5/8
- P(C) = 20/40 = 1/2
- P(F and C) = 10/40 = 1/4
- P(F or C) = 5/8 + 1/2 - 1/4 = (5+4-2)/8 = 7/8

#### 3. Multiplication Rule

**For Independent Events**:
```
P(A and B) = P(A) × P(B)
```

**Example**: Tossing two coins. Find P(both heads).
- P(H on first) × P(H on second) = 1/2 × 1/2 = 1/4

**For Dependent Events**:
```
P(A and B) = P(A) × P(B|A)
```

Where P(B|A) is probability of B given that A has occurred.

**Example**: Drawing 2 cards without replacement. Find P(both aces).
- P(first ace) = 4/52
- P(second ace | first ace) = 3/51
- P(both aces) = 4/52 × 3/51 = 12/2652 = 1/221

#### 4. Conditional Probability

**Definition**: P(B|A) — Probability of B given that A has occurred
```
P(B|A) = P(A and B) / P(A)
```

**Example**: From a deck, P(King | Face Card)?
- P(King and Face) = P(King) = 4/52 = 1/13
- P(Face) = 12/52 = 3/13
- P(King|Face) = (1/13) / (3/13) = 1/3

#### 5. Baye's Theorem (Advanced)

**Statement**: P(A|B) = [P(B|A) × P(A)] / P(B)

**Example**: Medical test problem
- Disease prevalence: 1%
- Test accuracy: 99%
- P(Positive|Disease) = 0.99
- P(Positive|No Disease) = 0.01
- P(Disease|Positive) = (0.99 × 0.01) / [0.99×0.01 + 0.01×0.99] = 0.0099/0.0198 ≈ 50%

#### 6. Permutations and Combinations in Probability

**When outcomes are equally likely**:
```
P(E) = n(E) / n(S)
```

**Example**: Random 4-digit PIN. Find P(all digits different).
- n(S) = 10^4 = 10,000
- Favorable: 10 × 9 × 8 × 7 = 5040
- P = 5040/10000 = 0.504

#### 7. Odds

**Odds in Favor of E** = P(E) / P(E') = n(E) : n(E')

**Odds Against E** = P(E') / P(E) = n(E') : n(E)

**Conversion**:
- If odds in favor are a:b, then P(E) = a/(a+b)
- If odds against are c:d, then P(E) = d/(c+d)

#### 8. Expected Value

**Definition**: Weighted average of all possible values
```
E(X) = Σ x × P(x)
```

**Example**: Game costs Rs. 5 to play. Win Rs. 20 with probability 1/5, otherwise lose. Find expected gain.
- Values: +15 (win - cost) with p=1/5, -5 with p=4/5
- E = 15 × 1/5 + (-5) × 4/5 = 3 - 4 = -1
- On average, lose Rs. 1 per game

#### 9. Probability Distribution

**Binomial Distribution** (n independent trials):
```
P(X = r) = nCr × p^r × q^(n-r)
```
Where p = success probability, q = 1-p

**Example**: Coin tossed 5 times. Find P(exactly 3 heads).
- n = 5, r = 3, p = 1/2, q = 1/2
- P = 5C3 × (1/2)^3 × (1/2)^2 = 10 × 1/32 = 10/32 = 5/16

#### 10. Common Mistakes to Avoid

1. **Non-Equally Likely Outcomes**: Don't assume unless stated
2. **Replacement**: Check if events are with or without replacement
3. **Addition vs. Multiplication**: OR usually means addition, AND usually means multiplication
4. **Dependent vs. Independent**: Check the relationship
5. **Complement Use**: Sometimes P(A) easier than P(A'), use 1 - P(A')

### Practice Questions for NABE

1. Two dice are rolled. Find probability that sum is 8.
2. A bag contains 5 red and 4 white balls. Two balls are drawn at random. Find P(both red).
3. In a class of 50 students, 30 play cricket and 25 play football. If 10 play both, find P(plays at least one).
4. A card is drawn from a deck. Find P(King or Queen).
5. Three coins are tossed. Find probability of getting at least one head.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
