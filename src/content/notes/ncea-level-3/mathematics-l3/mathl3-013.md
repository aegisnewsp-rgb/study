---
exam: ncea-level-3
examName: NCEA Level 3 (Mathematics / Calculus)
subject: mathematics-l3
subjectName: Mathematics (Calculus)
topic: mathl3-013
topicName: "Apply probability concepts in solving problems (91585)"
weight: 4
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Apply probability concepts in solving problems (91585) — NCEA Level 3 Calculus Notes

Achievement Standard 91585 is one of six external NCEA Level 3 Calculus standards, carrying 4 credits. It tests probability rules, conditional probability, Bayes' theorem, expected value, and decision trees; probability applied to risk and quality problems. The content is foundational for first-year university statistics and for many applied fields.

> Verify the live assessment specification on https://www.nzqa.govt.nz/nqfdocs/ncea-resource/specifications/2026/91585-spc-2026.pdf before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **4 credits**, external NZQA examination at the end of Year 13.
- Topics: probability rules (addition, multiplication, complement); conditional probability; Bayes' theorem; expected value; decision trees; risk and quality applications.
- **Merit** requires relational thinking — selecting the right probability concept for the problem.
- **Excellence** requires extended abstract thinking — justifying model choice, generalising to other contexts.

#### Examiner traps

- Confusing P(A|B) with P(B|A).
- Misapplying Bayes' theorem (the numerator and denominator need to match the event of interest).
- Forgetting that probabilities of mutually exclusive outcomes must sum to 1.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Probability rules

- **Complement:** P(A') = 1 − P(A).
- **Addition (general):** P(A ∪ B) = P(A) + P(B) − P(A ∩ B).
- **Addition (mutually exclusive):** P(A ∪ B) = P(A) + P(B).
- **Multiplication (general):** P(A ∩ B) = P(A) × P(B|A).
- **Multiplication (independent):** P(A ∩ B) = P(A) × P(B).

#### Conditional probability

P(A|B) = P(A ∩ B) / P(B)

The probability of A given that B has occurred.

Equivalent forms:

P(A ∩ B) = P(A|B) × P(B) = P(B|A) × P(A)

#### Independence

A and B are independent if and only if P(A|B) = P(A) (equivalently, P(B|A) = P(B), or P(A ∩ B) = P(A) × P(B)).

If P(A|B) ≠ P(A), then A and B are dependent.

#### Bayes' theorem

P(A|B) = P(B|A) × P(A) / P(B)

This is the formula for "reverse" conditional probability: given P(B|A), P(A), and P(B), find P(A|B).

The denominator P(B) can be computed using the law of total probability:

P(B) = P(B|A) × P(A) + P(B|A') × P(A')

#### Expected value

E(X) = Σ x × P(X = x) for discrete X.

For example, if X = 1 with probability 0.3, X = 2 with probability 0.5, X = 5 with probability 0.2, then:

E(X) = 1(0.3) + 2(0.5) + 5(0.2) = 0.3 + 1.0 + 1.0 = 2.3.

Expected value is the long-run average outcome if the experiment is repeated many times.

#### Decision trees

A decision tree shows the sequence of events and probabilities. The branches have probabilities; the leaves have outcomes.

To find the expected value of a decision, multiply each outcome by its probability along the path and sum.

To choose between alternatives, pick the one with the highest expected value (for maximisation) or lowest (for minimisation).

#### Worked example: medical test

A disease has prevalence 1% in the population. A test for the disease has sensitivity 99% (true positive rate) and specificity 95% (true negative rate). What is the probability that a person who tests positive actually has the disease?

- P(D) = 0.01, P(D') = 0.99.
- P(+|D) = 0.99, P(+|D') = 1 − 0.95 = 0.05.
- P(+) = P(+|D) P(D) + P(+|D') P(D') = 0.99(0.01) + 0.05(0.99) = 0.0099 + 0.0495 = 0.0594.
- P(D|+) = P(+|D) P(D) / P(+) = 0.0099 / 0.0594 ≈ 0.167.

So even with a positive test, the probability of having the disease is only about 17%, due to the low prevalence. This counterintuitive result is one of the most important applications of Bayes' theorem.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Bayes' theorem matters

Bayes' theorem is the foundation of rational belief updating. Starting from a prior probability (P(D)), we update to a posterior probability (P(D|+)) based on new evidence (the test result).

This is the foundation of:
- Medical diagnosis (interpreting test results).
- Spam filtering (P(spam | words)).
- Machine learning (Bayesian classifiers).
- Scientific reasoning (updating beliefs based on evidence).

#### Expected value and utility

Expected value is a measure of the average outcome. For decisions, utility (the subjective value of an outcome) is sometimes more relevant.

A risk-averse person might choose a sure $50 over a 50/50 gamble of $0 or $100, even though both have expected value $50.

For Excellence, briefly discuss the difference between expected value and utility.

#### Risk and quality

In risk and quality applications:

- **Risk** is the probability of a negative outcome, multiplied by its severity.
- **Quality** is the inverse: the probability of a positive outcome, multiplied by its value.

Common applications: insurance pricing, product warranties, healthcare decisions.

#### Common misconceptions (and the correction)

- "P(A|B) = P(B|A)." Almost never — the base rates matter.
- "A positive test means I have the disease." Usually wrong; depends on the disease prevalence and test characteristics.
- "Expected value is the most likely outcome." No — it is the long-run average.
- "Independent events are unrelated." No — independent events have no probabilistic influence on each other, but they can be causally related.

#### Specification reference

This achievement standard is externally assessed by NZQA at the end of the academic year. The current assessment specification (2026) is published on nzqa.govt.nz. Re-check the live assessment specification before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 3 Mathematics 91585 assessment specification 2026, https://www.nzqa.govt.nz/nqfdocs/ncea-resource/specifications/2026/91585-spc-2026.pdf. Awarding body: NZQA.*
