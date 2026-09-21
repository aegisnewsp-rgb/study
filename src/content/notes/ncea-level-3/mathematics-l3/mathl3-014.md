---
exam: ncea-level-3
examName: NCEA Level 3 (Mathematics / Calculus)
subject: mathematics-l3
subjectName: Mathematics (Calculus)
topic: mathl3-014
topicName: "Apply probability distributions in solving problems (91586)"
weight: 4
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Apply probability distributions in solving problems (91586) — NCEA Level 3 Calculus Notes

Achievement Standard 91586 is one of six external NCEA Level 3 Calculus standards, carrying 4 credits. It tests discrete and continuous probability distributions: binomial, Poisson, normal, uniform; properties, calculations, and applications to real-world contexts. The content is the foundation for first-year university statistics and for actuarial work.

> Verify the live assessment specification on https://www.nzqa.govt.nz/nqfdocs/ncea-resource/specifications/2026/91586-spc-2026.pdf before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **4 credits**, external NZQA examination at the end of Year 13.
- Topics: discrete distributions (binomial, Poisson); continuous distributions (normal, uniform); probability calculations; mean and variance; conditions for use; approximations (normal approximation to binomial).
- **Merit** requires relational thinking — selecting the right distribution for the problem.
- **Excellence** requires extended abstract thinking — justifying distribution choice, connecting to underlying random process.

#### Examiner traps

- Using the binomial when the trials are not independent.
- Using the Poisson when events are not independent or do not occur at a constant rate.
- Misapplying the normal approximation to binomial (np ≥ 5 and n(1−p) ≥ 5).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Binomial distribution

X ~ Binomial(n, p):

- Number of successes in n independent trials.
- Each trial has two outcomes (success, failure) with constant probability p of success.
- Mean: μ = np.
- Variance: σ² = np(1 − p).
- PMF: P(X = k) = C(n, k) × p^k × (1 − p)^(n − k).

#### Poisson distribution

X ~ Poisson(λ):

- Number of events occurring in a fixed interval of time or space.
- Events occur independently and at a constant average rate λ.
- Mean = variance = λ.
- PMF: P(X = k) = e^(−λ) × λ^k / k!.

Common applications: number of calls per hour at a call centre, number of decay events per minute from a radioactive source, number of customers per day at a shop.

#### Normal distribution

X ~ Normal(μ, σ²):

- Continuous probability distribution, symmetric and bell-shaped.
- Mean: μ. Standard deviation: σ.
- PDF: f(x) = (1 / (σ√(2π))) × e^(−(x − μ)²/(2σ²)).
- 68-95-99.7 rule: 68% within 1σ, 95% within 2σ, 99.7% within 3σ.
- Standardise: Z = (X − μ) / σ. Z ~ Normal(0, 1).

Common applications: heights, weights, exam scores, measurement errors.

#### Uniform distribution

X ~ Uniform(a, b):

- Continuous probability distribution on [a, b], with constant density.
- Mean: (a + b) / 2.
- Variance: (b − a)² / 12.
- PDF: f(x) = 1 / (b − a) for a ≤ x ≤ b.

Less common in practice but useful for modelling "no preference" situations.

#### Distribution selection

- **Count data with fixed trials, two outcomes, constant probability?** Binomial.
- **Count data with rare events at constant rate?** Poisson.
- **Continuous data, roughly symmetric, bell-shaped?** Normal.
- **Continuous data with no preference?** Uniform.

#### Normal approximation to binomial

For large n with np ≥ 5 and n(1 − p) ≥ 5, the binomial can be approximated by a normal:

X ~ Binomial(n, p) ≈ Normal(np, np(1 − p))

Use continuity correction: P(X ≤ k) ≈ P(Y ≤ k + 0.5) for Y ~ Normal.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Connecting distributions to random processes

The binomial arises from a process of fixed trials, each with two outcomes. The Poisson arises from a process of rare events at a constant rate. The normal arises from the sum of many small independent effects (Central Limit Theorem).

Choosing the right distribution means matching the model to the underlying process.

#### Mean and variance of linear combinations

For random variables X and Y:

- E(aX + bY) = aE(X) + bE(Y).
- Var(aX + bY) = a²Var(X) + b²Var(Y) + 2ab Cov(X, Y) (for independent X, Y, Cov = 0).

For Excellence, these properties are used in actuarial calculations and risk analysis.

#### The Central Limit Theorem

The CLT states that the sum (or average) of many independent random variables, regardless of their distribution, tends towards a normal distribution as the number of variables increases.

This is why the normal distribution is so ubiquitous: many real-world quantities are the sum of many small effects.

#### Common misconceptions (and the correction)

- "All distributions are normal." No — different random processes give different distributions.
- "Binomial requires n to be small." No — binomial works for any n; the normal approximation is for large n.
- "Poisson is for small numbers." No — Poisson is for count data at a constant rate, regardless of mean.
- "Standard deviation is always the mean of absolute deviations." No — standard deviation is the square root of variance; for a normal distribution, MAD ≈ 0.8σ.

#### Specification reference

This achievement standard is externally assessed by NZQA at the end of the academic year. The current assessment specification (2026) is published on nzqa.govt.nz. Re-check the live assessment specification before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 3 Mathematics 91586 assessment specification 2026, https://www.nzqa.govt.nz/nqfdocs/ncea-resource/specifications/2026/91586-spc-2026.pdf. Awarding body: NZQA.*
