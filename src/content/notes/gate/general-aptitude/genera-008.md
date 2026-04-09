---
exam: gate
examName: "GATE"
subject: quant
subjectName: "General Aptitude"
topic: genera-008
topicName: "Topic 8"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Permutation, Combination and Probability

These three topics are deeply connected: counting principles (P&C) feed directly into probability. GATE tests them with surprising variety — from simple arrangement counts to conditional probability with Bayes' theorem.

---

### 🟢 Lite — Quick Review (1h–1d)

> **Core formulas:**
> - **Fundamental Counting Principle (FCP):** If task 1 has m ways and task 2 has n ways, both can be done in m × n ways.
> - **Permutation (arrangement):** P(n,r) = n!/(n−r)! — ORDER matters
> - **Combination (selection):** C(n,r) = n!/[r!(n−r)!] — ORDER doesn't matter
> - **Probability of event E:** P(E) = Favorable outcomes / Total outcomes
> - **P(A or B)** = P(A) + P(B) − P(A and B)
> - **P(A and B)** = P(A) × P(B) (only if A and B are independent)

**⚡ GATE exam tip:** Remember: C(n,r) = C(n,n−r). This symmetry can halve your calculation work — if you know C(n,k), you immediately know C(n,n−k).

**⚡ Quick trick:** For arrangements of "MISSISSIPPI" type (repeated letters), formula = n!/[p!×q!×r!...] where p, q, r are frequencies of repeated letters.

**⚡ Common trap:** P(n,r) vs C(n,r) — if the question says "arrange" or "order" or "ways to seat" → permutation (order matters). If it says "select," "choose," "form a team" → combination (order doesn't matter).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Fundamental Counting Principle (FCP)

The FCP is the backbone of all counting problems:

If a work can be done in **m** ways, and regardless of which way you choose for the first task, the second task can be done in **n** ways, then **both** can be done in **m × n** ways.

**GATE Example:** From city X to Y there are 3 bus routes and 2 train routes. From Y to Z there are 4 bus routes and 1 train route. How many ways to travel X→Y→Z?
> X→Y: 3+2 = 5 ways (but choose either bus OR train, so 3+2 = 5 not 3×2)
> Actually: If taking bus X→Y (3 ways), then Y→Z bus (4 ways): 3×4 = 12 ways.
> If taking train X→Y (2 ways), then Y→Z train (1 way): 2×1 = 2 ways.
> Total = 12 + 2 = **14 ways**.

#### Permutations

**P(n,r) = n!/(n−r)!** — arrangements of r objects from n distinct objects.

**Special cases:**
- P(n,n) = n! (arrangements of all n objects)
- P(n,0) = 1
- P(n,1) = n

**Circular permutations:**
- n people around a round table: (n−1)! arrangements
- If clockwise and anticlockwise arrangements are considered the same (i.e., no distinct "direction"), divide further by 2.

**GATE Example (2019, 1 mark):** How many ways can the letters of the word "GATE" be arranged?
> All 4 letters distinct → P(4,4) = 4! = **24 ways**.

**GATE Example:** In how many ways can 5 people be seated around a circular table?
> (5−1)! = **24 ways**.

#### Combinations

**C(n,r) = n!/[r!(n−r)!]** — selection of r objects from n distinct objects without regard to order.

**Key properties:**
- C(n,0) = C(n,n) = 1
- C(n,r) = C(n,n−r) (symmetry)
- C(n,r) + C(n,r+1) = C(n+1, r+1) (Pascal's identity)
- C(n,r) is maximum when r = n/2 (for given n)

**GATE Example:** A committee of 3 is to be formed from 7 people. How many ways?
> C(7,3) = 7!/(3!×4!) = (7×6×5)/(3×2×1) = **35 ways**.

#### Probability — Basics

**P(E) = Number of favorable outcomes / Total number of equally likely outcomes**

**Key axioms:**
- 0 ≤ P(E) ≤ 1
- P(S) = 1 (where S is the sample space)
- P(∅) = 0

**Odds in favor:** If P(E) = p/(p+q), then odds in favor = p:q.
**Odds against:** q:p.

**GATE Example:** A die is thrown. Find the probability of getting a prime number.
> Prime numbers on a die: 2, 3, 5 → 3 outcomes. Total outcomes = 6.
> P = **3/6 = 1/2**.

#### Probability — Compound Events

**Mutually exclusive events (cannot happen together):**
P(A or B) = P(A) + P(B)

**Independent events:**
P(A and B) = P(A) × P(B)

**GATE Example:** Two dice are thrown. Find P(sum is 8 or both show 6).
> P(sum=8): (2,6),(3,5),(4,4),(5,3),(6,2) → 5 outcomes.
> P(both show 6): (6,6) → 1 outcome.
> P(sum=8 AND both show 6): only (6,6) satisfies both → 1 outcome.
> By inclusion-exclusion: P = (5+1−1)/36 = **5/36**.

#### Conditional Probability

P(A|B) = P(A and B) / P(B) — probability of A given that B has occurred.

**GATE Example:** From a deck of 52 cards, one card is drawn. If it's a face card (J, Q, K), what's the probability it's a king?
> P(K|Face) = P(K and Face)/P(Face) = (4/52)/(12/52) = 4/12 = **1/3**.

---

### 🔴 Extended — Deep Study (3mo+)

#### Bayes' Theorem

P(A|B) = [P(B|A) × P(A)] / P(B)

**GATE Advanced Example (2021, 2 marks):** Box 1 has 5 red and 5 black balls. Box 2 has 4 red and 6 black balls. A box is chosen at random and a ball is drawn. It is red. What is the probability it came from Box 1?
> P(Box1) = P(Box2) = 1/2.
> P(Red|Box1) = 5/10 = 1/2. P(Red|Box2) = 4/10 = 2/5.
> P(Red) = (1/2 × 1/2) + (1/2 × 2/5) = 1/4 + 1/5 = 9/20.
> P(Box1|Red) = [P(Red|Box1) × P(Box1)] / P(Red) = (1/2 × 1/2) / (9/20) = (1/4) × (20/9) = **5/9**.

#### Permutations with Repeated Elements

The number of distinct arrangements of n objects where some are identical:
> n! / (n₁! × n₂! × ... × nₖ!)

**GATE Example:** How many distinct arrangements of "STATISTICS" are possible?
> S appears 3 times, T appears 3 times, I appears 2 times, A and C appear 1 time each.
> Total = 10! / (3! × 3! × 2! × 1! × 1!) = **50,400 distinct arrangements**.

#### Arrangement with Specific Conditions

**GATE Example:** How many ways to arrange the letters of "PROBLEMS" so that vowels come together?
> Treat vowels (O, E) as a single block: block + P, R, B, L, M, S = 6 items.
> Arrangements of 6 = 6! = 720.
> Within the block: 2! = 2.
> Total = 720 × 2 = **1440**.

**When a person/element must NOT be together:** Arrange the others first, then place the restricted element in the gaps.

#### derangements (Subfactorials)

The number of ways to arrange n objects such that **no object appears in its original position**. Denoted !n or Dₙ.

> Dₙ = n! × Σ(k=0 to n) [(-1)^k / k!]

For small n:
- D₁ = 0, D₂ = 1, D₃ = 2, D₄ = 9, D₅ = 44, D₆ = 265

**GATE Example:** In how many ways can 4 letters be placed in 4 addressed envelopes so that NO letter goes into the correct envelope?
> D₄ = **9 ways**.

#### Distribution Problems (Stars and Bars)

The number of ways to distribute n identical objects into k distinct boxes (allowing empty boxes):
> C(n + k − 1, k − 1)

**GATE Example:** In how many ways can 5 identical candies be given to 3 children?
> C(5+3−1, 3−1) = C(7,2) = **21 ways**.

#### Binomial Probability

P(X = r) = C(n,r) × p^r × (1−p)^(n−r)

Where n = number of trials, r = number of successes, p = probability of success.

**GATE Example:** A coin is tossed 5 times. Find P(exactly 3 heads).
> n=5, r=3, p=0.5.
> P = C(5,3) × (0.5)³ × (0.5)² = 10 × 0.125 × 0.25 = **0.3125**.

#### Expected Value

E(X) = Σ xᵢ × P(xᵢ)

**GATE Example:** A die is thrown. Player wins ₹10 for rolling a 6, ₹5 for rolling a 3, and loses ₹2 otherwise. Find expected winnings.
> E = (1/6)×10 + (1/6)×5 + (4/6)×(−2) = 10/6 + 5/6 − 8/6 = 7/6 ≈ **₹1.17**.

#### Principle of Inclusion and Exclusion

For two sets: |A∪B| = |A| + |B| − |A∩B|
For three sets: |A∪B∪C| = |A|+|B|+|C| − |A∩B|−|B∩C|−|C∩A| + |A∩B∩C|

**GATE Example:** In a class of 50 students, 30 study Physics, 25 study Chemistry, and 15 study both. How many study at least one?
> |P∪C| = 30+25−15 = **40 students**.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
