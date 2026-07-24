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
lastUpdated: "2026-07-24"
---

# Probability

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Probability quantifies how likely an event is, expressed as a number from 0 to 1. The classical formula **P(E) = n(E)/n(S)** counts favourable outcomes over the total equally likely outcomes in the sample space S. Three identities dominate the CUET UG paper: the complement rule, the addition rule, and Bayes' theorem.

- **Complement:** P(E) + P(E') = 1
- **Addition:** P(A ∪ B) = P(A) + P(B) − P(A ∩ B); if mutually exclusive, P(A ∩ B) = 0
- **Multiplication/Conditional:** P(A ∩ B) = P(A)·P(B|A); for independent events P(A ∩ B) = P(A)·P(B)
- **Bayes':** P(Aᵢ|B) = P(B|Aᵢ)·P(Aᵢ) / Σ P(B|Aₖ)·P(Aₖ)
- **Odds trap:** "odds in favour" of E = n(E) : n(E'), not P(E)
- **Independent vs mutually exclusive:** only one can be true when both P(A), P(B) > 0

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Classical and Axiomatic Probability
Classical probability assumes every elementary outcome in S is equally likely, giving **P(E) = n(E)/n(S)**. The axiomatic version (Kolmogorov) requires **0 ≤ P(E) ≤ 1**, **P(S) = 1**, and additivity over disjoint events. CUET problems typically use classical probability backed by combinations — for example, drawing 2 cards from 52 uses C(52,2) as n(S).

#### Addition and the Union Rule
For any two events A and B, **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**. If A and B are mutually exclusive (no common outcome), the intersection term vanishes. A common three-event error is double-subtracting: the correct form is P(A∪B∪C) = ΣP(Aᵢ) − ΣP(Aᵢ∩Aⱼ) + P(A∩B∩C).

#### Conditional Probability and Independence
**P(A|B) = P(A ∩ B)/P(B)**, valid only when P(B) ≠ 0. Independence means the occurrence of B does not change A's likelihood, so P(A|B) = P(A) and equivalently **P(A ∩ B) = P(A)·P(B)**. Mutually exclusive events with positive probabilities are never independent — this distinction is a CUET favourite.

#### Worked Pattern: Cards
Two cards drawn without replacement: P(both kings) = (4/52)·(3/51) = 1/221. With replacement: (4/52)² = 1/169.

| Concept | Formula / Key fact |
| --- | --- |
| Classical probability | P(E) = n(E)/n(S), equally likely outcomes only |
| Complement rule | P(E') = 1 − P(E) |
| Addition rule | P(A∪B) = P(A) + P(B) − P(A∩B) |
| Multiplication rule | P(A∩B) = P(A)·P(B\|A) |
| Independence check | P(A∩B) = P(A)·P(B) |
| Total probability | P(B) = Σ P(B\|Aᵢ)·P(Aᵢ) over partition {Aᵢ} |

- Bayes' theorem reverses a conditional: given P(B|Aᵢ) and prior P(Aᵢ), find P(Aᵢ|B).
- Tree diagrams partition the sample space and turn Bayes' problems into arithmetic.
- "Odds in favour of E" = n(E) : n(E'); converting requires P(E) = odds/(1+odds).

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Law of Total Probability and Bayes' Theorem
The law partitions S into mutually exclusive, exhaustive events {A₁, A₂, …, Aₙ} with ΣP(Aᵢ) = 1, giving **P(B) = Σ P(B|Aᵢ)·P(Aᵢ)**. Bayes' theorem then computes the **posterior** P(Aᵢ|B) = P(B|Aᵢ)·P(Aᵢ)/P(B). This two-step structure — total probability as denominator, likelihood × prior in numerator — appears in roughly one of the 2–4 CUET Probability questions.

#### Edge Cases and Common Traps
Biased coins and loaded dice break the classical assumption; only the axiomatic definition holds. "At least one" problems are usually fastest via complement: P(at least one six in 3 dice) = 1 − (5/6)³. Conditional probability questions frequently hide the order of drawing; "without replacement" changes the denominator between successive draws.

#### Common Mistakes
- Applying P(E) = n(E)/n(S) when outcomes are not equally likely.
- Treating "odds in favour" as P(E).
- Dropping the denominator in Bayes' theorem.
- Confusing P(A∪B) for independent events: here P(A∩B) = P(A)P(B) ≠ 0 in general.

#### Worked Micro-Example
A factory has three machines producing 50%, 30%, 20% of output with defect rates 2%, 3%, 5%. P(defective) = 0.5·0.02 + 0.3·0.03 + 0.2·0.05 = 0.031. P(M₁|defect) = (0.5·0.02)/0.031 ≈ 0.323.

| Mistake | Correction |
| --- | --- |
| Adding P(A)+P(B) always | Subtract P(A∩B) unless events are mutually exclusive |
| Odds = probability | Odds in favour of E = n(E)/n(E'), then P = odds/(1+odds) |
| Classical formula on biased setup | Use axiomatic definition; outcomes not equally likely |
| Bayes' without denominator | Denominator is P(B) via total probability law |

1. A bag has 5 red, 3 blue balls. Two are drawn without replacement. Find P(one red, one blue).
2. Given P(A)=0.4, P(B|A)=0.5, P(B|A')=0.2, compute P(A|B).

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Probability" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/cuet/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
