---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-024
topicName: Probability
weight: 3
country: india
generated: "2026-03-29T05:06:49"
lastUpdated: "2026-09-08"
---

# Probability

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Probability measures how likely an event is, on a scale from **0** (impossible) to **1** (certain). For a finite sample space with equally likely outcomes, the classical formula is **P(A) = n(A) / n(S)**, where n(A) is the count of favourable outcomes and n(S) is the total outcome count.

The three rules to memorise:

- **Complement rule:** P(A′) = 1 − P(A)
- **Addition rule:** P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
- **Multiplication rule (independent events):** P(A ∩ B) = P(A) · P(B)

For conditional probability, use **P(A | B) = P(A ∩ B) / P(B)**, and Bayes' theorem reverses such conditions.

> **Exam tip:** CUET UG tests conditional probability and Bayes' theorem through single-step MCQs — read the condition order carefully ("given B" vs "given A").

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Sample space, events, and the classical formula

A random experiment (tossing two coins, drawing a card from a deck) produces an outcome. The set of **all** possible outcomes is the **sample space S**. An **event A** is any subset of S. When each elementary outcome of S is equally likely, the classical definition gives P(A) = n(A)/n(S). This formula fails the moment outcomes have unequal weights — for example, a biased die requires the relative-frequency or axiomatic approach instead.

#### Addition and complement rules

For any two events A and B, the probability of at least one occurring is P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Subtracting P(A ∩ B) avoids double-counting outcomes common to both. If A and B are **mutually exclusive** (A ∩ B = ∅), this collapses to P(A) + P(B). The complement rule P(A′) = 1 − P(A) is the cleanest way to solve "at least one" problems by computing the easier "none" case first.

#### Conditional probability and independence

Conditional probability P(A | B) = P(A ∩ B) / P(B), defined only when P(B) > 0, narrows the sample space from S to B. Events are **independent** when P(A ∩ B) = P(A) · P(B), which is equivalent to P(A | B) = P(A). A classic trap: mutually exclusive events with positive probability are never independent, because P(A | B) = 0 ≠ P(A).

#### Table of core formulas

| Rule | Formula | When to use |
| --- | --- | --- |
| Classical | P(A) = n(A)/n(S) | Equally likely outcomes only |
| Complement | P(A′) = 1 − P(A) | "At least one" problems |
| Addition | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | Two events, any overlap |
| Multiplication | P(A ∩ B) = P(A) · P(B) | Independent events |
| Conditional | P(A \| B) = P(A ∩ B) / P(B) | Order matters — read "given" |
| Bayes | P(A \| B) = P(B \| A) · P(A) / P(B) | Reverse a known condition |

> **Scoring tip:** In CUET UG, draw a 2×2 Venn table for any two-event question — it makes the intersection value visible and prevents subtraction errors.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Bayes' theorem and total probability

Bayes' theorem, **P(Aᵢ | E) = P(E | Aᵢ) · P(Aᵢ) / Σ P(E | Aⱼ) · P(Aⱼ)**, updates prior beliefs P(Aᵢ) once evidence E is observed. The denominator is the **total probability** of E, obtained by summing over a partition {A₁, A₂, …, Aₙ} of S. CUET UG frequently frames Bayes problems as "defective items from two factories" or "medical test accuracy".

#### Worked example

A bag contains 4 red and 6 black balls. Two balls are drawn without replacement. Find P(both red).

- Total outcomes n(S) = C(10, 2) = 45 (unordered pairs).
- Favourable n(A) = C(4, 2) = 6.
- P(both red) = 6/45 = 2/15 ≈ 0.1333.

For the conditional version — P(second red | first red) — use the conditional formula: after one red is removed, 3 red remain among 9 balls, so the answer is 3/9 = 1/3.

#### Random variables and binomial distribution

A **random variable X** assigns a number to each outcome. Discrete X is described by a probability mass function with **E(X) = Σ xᵢ P(X = xᵢ)** and **Var(X) = E(X²) − [E(X)]²**. The **binomial distribution** applies to n independent Bernoulli trials with success probability p:

**P(X = k) = C(n, k) pᵏ (1 − p)ⁿ⁻ᵏ**, with mean np and variance np(1 − p).

#### Common mistakes list

1. Using P(A | B) when the question asks P(B | A) — conditions are not symmetric.
2. Writing P(A ∪ B) = P(A) + P(B) and forgetting to subtract P(A ∩ B).
3. Treating "mutually exclusive" and "independent" as interchangeable.
4. Counting ordered outcomes as unordered in C(n, r) problems.
5. Dividing by n(S) when outcomes are not equally likely.

> **Strategy for the 3% paper slice:** Probability questions are clustered in 1–2 marks per item. Solve Bayes' theorem with a tree diagram and label every branch with its conditional probability to avoid arithmetic slips.

#### Practice prompts

1. A card is drawn from a well-shuffled 52-card deck. Given that it is a face card (J, Q, K), find the probability it is a king.
2. Three coins are tossed. Find P(at least two heads) and verify with the complement rule.

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Probability" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
