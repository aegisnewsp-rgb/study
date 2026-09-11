---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-014
topicName: Probability
weight: 5
country: india
generated: "2026-03-24T08:32:07.940344"
lastUpdated: "2026-09-11"
diagramPrompt: "Mathematical diagram showing Probability concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Probability

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Probability quantifies the chance of a random event on a scale from **0 to 1**. For equally likely outcomes, **P(A) = n(A) / n(S)**, where *n(A)* is the count of favourable outcomes and *n(S)* is the sample-space size. Independence requires P(A ∩ B) = P(A)·P(B), while mutual exclusivity only requires P(A ∩ B) = 0 — these are different properties and examiners test the confusion.

- **Conditional probability:** P(A|B) = P(A ∩ B) / P(B), the cornerstone of Bayes-type urn problems.
- **Total probability + Bayes:** partition the sample space into exhaustive events Aᵢ, then P(B) = Σ P(B|Aᵢ)P(Aᵢ).
- **Binomial core:** P(X = k) = C(n,k) pᵏ (1−p)ⁿ⁻ᵏ, mean = np, variance = np(1−p).

JEE Advanced in most keys gives one Probability question per paper, almost always involving conditional probability, Bayes' theorem, or Binomial/Poisson parameters.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Classical and Axiomatic Foundations

A random experiment has a **sample space** S of all possible outcomes. An **event** A is any subset of S. The classical definition assigns P(A) = n(A)/n(S) when outcomes are equally likely. Kolmogorov's axiomatic framework replaces this with three rules: non-negativity P(A) ≥ 0, normalisation P(S) = 1, and countable additivity over disjoint events. Most JEE problems use the classical definition, but the axioms justify manipulations like the **complement rule** P(A) = 1 − P(A′).

#### Counting the Sample Space

Counting drives every probability calculation. Use permutations nPr when order matters (e.g., arranging distinct cards), and combinations nCr when order does not. A frequent JEE trap: "without replacement" sampling means successive draws are **dependent**, so P(A ∩ B) ≠ P(A)P(B).

#### Conditional Probability and Independence

P(A|B) = P(A ∩ B)/P(B), valid when P(B) > 0. Events are **independent** iff P(A ∩ B) = P(A)P(B); they are **mutually exclusive** iff P(A ∩ B) = 0. Two disjoint events with positive probabilities are never independent.

#### Key Formulas at a Glance

| Concept | Formula / Rule |
| --- | --- |
| Addition rule | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) |
| Multiplication rule | P(A ∩ B) = P(A)·P(B\|A) |
| Bayes' theorem | P(Aᵢ\|B) = P(B\|Aᵢ)P(Aᵢ) / Σⱼ P(B\|Aⱼ)P(Aⱼ) |
| Complement | P(A′) = 1 − P(A) |

#### Standard Problem Types

- **Urn problems** with balls drawn with/without replacement, in many papers requiring Bayes' theorem in reverse.
- **Binomial trials** with constant success probability p, asking for k successes in n attempts.
- **Poisson approximation** of rare-event Binomial when n ≥ 30 and p ≤ 0.05 with λ = np moderate.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Discrete Random Variables in Depth

A discrete random variable X maps outcomes to integers with a **probability mass function** p(k) = P(X = k). The **cumulative distribution function** F(k) = P(X ≤ k) is right-continuous. Expectation E(X) = Σ k·p(k), variance Var(X) = E(X²) − [E(X)]², and standard deviation σ = √Var(X). JEE occasionally tests the **moment generating function** M(t) = E(eᵗˣ) and asks for M′(0) = E(X), M″(0) − [M′(0)]² = Var(X).

#### Distribution Zoo

| Distribution | PMF / PDF | Mean | Variance |
| --- | --- | --- | --- |
| Binomial B(n, p) | C(n,k) pᵏ (1−p)ⁿ⁻ᵏ | np | np(1−p) |
| Poisson P(λ) | e^(−λ) λᵏ / k! | λ | λ |
| Geometric G(p) | (1−p)ᵏ⁻¹ p, k = 1, 2, … | 1/p | (1−p)/p² |
| Bernoulli Ber(p) | pᵏ (1−p)¹⁻ᵏ, k ∈ {0,1} | p | p(1−p) |

#### Worked Micro-Example

A bag contains 6 red and 4 blue balls. Two balls are drawn without replacement. Find P(both red).
P(R₁ ∩ R₂) = (6/10)·(5/9) = 30/90 = 1/3.
If instead drawn *with* replacement: (6/10)·(6/10) = 9/25 — note the independence emerges only because the composition is restored.

#### Edge Cases and Examiner Traps

- Independence + mutually exclusive together force P(A) = 0 or P(B) = 0; students in many papers wrongly assert the converse.
- Bayes' theorem reverses a conditional: P(A|B) and P(B|A) differ unless priors match the likelihoods.
- Poisson approximates Binomial only when n is large, p is small, and np ≈ λ stays finite.

#### Practice Prompts

1. A test detects a disease with 95% sensitivity and 90% specificity. If 1% of the population has the disease, compute the probability that a person testing positive actually has it.
2. X ~ Poisson(4). Find P(X ≥ 1) and compare with the Binomial B(100, 0.04) approximation.

---

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Probability" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeeadvanced/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
