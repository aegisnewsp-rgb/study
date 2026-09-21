---
exam: ncea-level-2
examName: NCEA Level 2 (Mathematics)
subject: mathematics-l2
subjectName: Mathematics
topic: mathl2-012
topicName: "Apply probability methods in solving problems (91267)"
weight: 4
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Apply probability methods in solving problems (91267) — NCEA Level 2 Mathematics Notes

Achievement Standard 91267 is one of three external NCEA Level 2 Mathematics standards, carrying 4 credits. It tests probability concepts, conditional probability, independence, normal and binomial distributions applied in context, expected value, and tree diagrams. The content is the foundation for the Level 3 probability and statistics standards 91585 and 91586.

> Verify the live assessment specification on https://www.nzqa.govt.nz/nqfdocs/ncea-resource/specifications/2026/91267-spc-2026.pdf before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **4 credits**, external NZQA examination at the end of Year 12.
- Topics: probability concepts, conditional probability, independence, normal distribution, binomial distribution, expected value, tree diagrams, two-way tables, Venn diagrams.
- **Merit** requires relational thinking — selecting the right probability model for the situation.
- **Excellence** requires extended abstract thinking — justifying model choice, generalising to other contexts.

#### Examiner traps

- Confusing P(A and B) with P(A or B).
- Multiplying probabilities when the events are not independent.
- Forgetting to check the conditions for binomial (fixed number of trials, two outcomes, constant probability) or normal (random variable is continuous, symmetric distribution).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Probability rules

For events A and B in a sample space:

- **Addition rule:** P(A or B) = P(A) + P(B) − P(A and B). For mutually exclusive events, P(A or B) = P(A) + P(B).
- **Multiplication rule:** P(A and B) = P(A) × P(B|A). For independent events, P(A and B) = P(A) × P(B).
- **Complement rule:** P(not A) = 1 − P(A).

#### Conditional probability

P(A|B) = P(A and B) / P(B)

This is the probability of A given that B has occurred. Useful for "given that" problems.

For independent events, P(A|B) = P(A); the occurrence of B does not change the probability of A.

#### Tree diagrams

A tree diagram shows the sequence of events and their probabilities. The probability of each branch is the conditional probability given the path so far.

To find P(A and B), multiply along the branches.
To find P(A), sum the probabilities of all branches ending in A.

#### Normal distribution

A continuous probability distribution that is symmetric and bell-shaped. Defined by its mean μ and standard deviation σ.

Key properties:

- ~68% of values within 1σ of the mean.
- ~95% of values within 2σ of the mean.
- ~99.7% of values within 3σ of the mean.

Use the normal distribution for variables that are continuous and roughly symmetric (heights, weights, exam scores, measurement errors).

Check conditions: random variable is continuous, distribution is roughly symmetric, no obvious outliers.

#### Binomial distribution

A discrete probability distribution for the number of successes in n independent trials. Each trial has the same probability p of success.

Conditions:

- Fixed number of trials (n).
- Each trial has two outcomes (success or failure).
- Probability of success is constant (p).
- Trials are independent.

P(X = k) = C(n, k) × p^k × (1 − p)^(n − k)

where C(n, k) = n! / (k! × (n − k)!) is the number of ways to choose k successes from n trials.

Use the binomial distribution for count data with fixed trials and constant probability (number of defective items in a batch, number of heads in n coin tosses).

#### Expected value

E(X) = Σ(x × P(X = x)) for discrete X.

For a binomial: E(X) = np.

Expected value is the long-run average — what the average outcome would be if the experiment were repeated many times.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Choosing between normal and binomial

- **Continuous, symmetric distribution?** Normal.
- **Count of successes in fixed trials?** Binomial.
- **Count with potentially many trials (n ≥ 30) and probability not too close to 0 or 1?** Normal approximation to binomial is acceptable.

The Excellence move is to recognise that the normal can approximate the binomial when n is large (rule of thumb: np ≥ 5 and n(1 − p) ≥ 5).

#### Continuous vs discrete probability

- **Discrete probability:** P(X = x) is the probability of a specific value. Probabilities sum to 1 across all values.
- **Continuous probability:** P(X = x) = 0 for any specific value. Probabilities are areas under the probability density function. P(a ≤ X ≤ b) is the area under the curve from a to b.

Confusing the two is a common error — for a continuous distribution, P(X = 5) = 0, but P(4.5 ≤ X ≤ 5.5) can be positive.

#### Bayesian reasoning

The Bayesian approach updates probabilities based on new evidence:

P(A|B) = P(B|A) × P(A) / P(B)

This is Bayes' theorem, which appears in Level 3 standard 91585. At Level 2, students should be able to recognise conditional probability statements and apply the multiplication rule.

#### Common misconceptions (and the correction)

- "P(A and B) = P(A) × P(B) always." Only when A and B are independent.
- "P(A or B) = P(A) + P(B) always." Only when A and B are mutually exclusive.
- "The normal distribution applies to all data." It applies to roughly symmetric continuous data. For skewed or discrete data, use a different model.
- "Expected value is the most likely outcome." Not necessarily — it is the long-run average, which can differ from the mode.

#### Specification reference

This achievement standard is externally assessed by NZQA at the end of the academic year. The current assessment specification (2026) is published on nzqa.govt.nz. Re-check the live assessment specification before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 2 Mathematics 91267 assessment specification 2026, https://www.nzqa.govt.nz/nqfdocs/ncea-resource/specifications/2026/91267-spc-2026.pdf. Awarding body: NZQA.*
