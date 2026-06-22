---



exam: nabteb
examName: NABTEB
subject: mathematics
subjectName: Mathematics
topic: math-14
topicName: Probability
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.553647"
lastUpdated: "2026-06-22"
diagramPrompt: "Mathematical diagram showing Probability concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Probability

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Probability** quantifies the chance that an event occurs, expressed on a scale from **0** (impossible) to **1** (certain). The classical formula is **P(E) = n(E) / n(S)**, where *n(E)* is the number of favourable outcomes and *n(S)* is the total number of outcomes in the **sample space**.

Two rules carry most of the marks: the **Addition Rule**, **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**, and the **Multiplication Rule**, **P(A ∩ B) = P(A) × P(B)** for **independent events**. For dependent events, use the **Conditional Probability** formula **P(A | B) = P(A ∩ B) / P(B)**. Complementary events satisfy **P(E′) = 1 − P(E)**.

**High-yield pointers:** (1) For NABTEB, expect 2–3 questions worth 10–20 marks combined. (2) “Without replacement” makes events **dependent**; “with replacement” keeps them **independent**. (3) Convert fractions to decimals or percentages only when the question asks.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definitions
A **random experiment** is any process whose outcome cannot be predicted with certainty (tossing a die, drawing a card). The **sample space S** lists every possible outcome, and an **event E** is any subset of S. Each individual result is an **outcome**. The **probability of E** is the ratio of favourable to total outcomes when all outcomes are equally likely.

#### Rules You Must Memorise
| Rule | Formula | Condition |
|---|---|---|
| Classical | P(E) = n(E) / n(S) | Equally likely outcomes |
| Complement | P(E′) = 1 − P(E) | E′ = "not E" |
| Addition | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | Any two events |
| Addition (mutually exclusive) | P(A ∪ B) = P(A) + P(B) | A ∩ B = ∅ |
| Multiplication | P(A ∩ B) = P(A) × P(B) | Independent events |
| Conditional | P(A \| B) = P(A ∩ B) / P(B), P(B) > 0 | Dependent or independent |

#### Counting Outcomes
**Permutations** count ordered arrangements: **nPr = n! / (n − r)!**. **Combinations** count selections where order does not matter: **nCr = n! / [(n − r)! r!]**. Use combinations when the question says “a committee”, “a hand of cards”, or “a team”; use permutations when it says “a password”, “a ranking”, or “an arrangement”.

#### NABTEB Question Patterns
- **One mark objective:** Compute P(even number) on a die = 3/6 = 1/2.
- **Three-mark theory:** A bag contains 5 red and 3 blue balls. Find the probability of picking 2 red balls **with replacement** and **without replacement**.
- **Tree diagram problem:** Two coins tossed; find P(at least one head) using the complement rule, getting 1 − 1/4 = 3/4.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Deeper Mechanics
The classical definition breaks down when outcomes are **not equally likely**, as in biased coins or loaded dice. In such cases, probabilities are assigned from observed frequencies or stated relative frequencies, and the rules above still hold. The **law of total probability** — P(A) = P(A | B₁)P(B₁) + P(A | B₂)P(B₂) — applies when a sample space is partitioned into mutually exclusive sub-events B₁, B₂.

A subtle but common exam trap: **mutually exclusive vs. independent** are *not* the same. If A and B are mutually exclusive with non-zero probabilities, they cannot be independent, because P(A ∩ B) = 0 while P(A)P(B) > 0. Independence requires the *multiplicative* relationship; mutual exclusivity requires the *additive* one with no overlap.

#### Connections to Adjacent Topics
Probability links directly to **set theory** (Venn diagrams model addition rules), **permutations and combinations** (counting n(E) and n(S)), and **statistics** (expected value, E(X) = Σ xᵢP(xᵢ), bridges probability with data analysis). Bayes’ theorem, **P(A | B) = P(B | A)P(A) / P(B)**, extends conditional probability and appears in advanced NABTEB questions and related science papers.

#### Common Mistakes
- Adding probabilities of independent events (e.g. P(two heads) ≠ 1/2 + 1/2; it is 1/2 × 1/2 = 1/4).
- Forgetting to subtract the intersection P(A ∩ B) when using the addition rule.
- Using combinations where order matters (e.g. forming 3-digit numbers).
- Converting “at least one” questions into complicated counting instead of using the complement rule.

#### Practice Prompts
1. A box has 4 white and 6 black balls. Three balls are drawn **without replacement**. Find the probability that exactly two are white.
2. Two dice are rolled. Using the addition rule, find the probability that the sum is 7 **or** that a double appears.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
