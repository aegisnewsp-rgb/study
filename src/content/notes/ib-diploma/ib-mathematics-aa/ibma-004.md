---
exam: ib-diploma
examName: International Baccalaureate (IB) Diploma Programme
subject: ib-mathematics-aa
subjectName: "Mathematics: Analysis and Approaches"
topic: ibma-004
topicName: Statistics and Probability
weight: 4
country: singapore
generated: "2026-09-20T15:30:00"
lastUpdated: "2026-09-20"
---

# Statistics and Probability — IB Mathematics: Analysis and Approaches (AA) Notes

Statistics and Probability is the fourth topic of the IB Mathematics: Analysis and Approaches syllabus. The topic covers sampling, presenting data, measures of central tendency and dispersion, linear regression, probability rules (including conditional probability and Bayes' theorem), the binomial distribution, the normal distribution, expectation and variance, and (at HL) the Poisson distribution, the Central Limit Theorem, confidence intervals, and hypothesis testing. Statistics and Probability items appear on IB Math AA Paper 2 alongside Functions, Calculus and Geometry items.

> Verify the live IB Math AA subject brief and any in-year curriculum update on https://ibo.org/programmes/diploma-programme/curriculum/mathematics/ before planning revision around the patterns below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### The seven facts every IB student needs

1. **Mean**: sum of the values divided by the number of values.
2. **Standard deviation**: a measure of spread around the mean.
3. **Linear regression**: fitting a straight line y = a + bx to data by least squares.
4. **Probability of an event**: P(A) = (number of favourable outcomes) / (total number of equally likely outcomes).
5. **Conditional probability**: P(A | B) = P(A ∩ B) / P(B).
6. **Binomial distribution**: X ~ B(n, p); E(X) = np; Var(X) = np(1 − p).
7. **Normal distribution**: X ~ N(μ, σ²); the standard normal Z = (X − μ) / σ has mean 0 and standard deviation 1.

#### Key notations

- μ — population mean
- x̄ — sample mean
- σ — population standard deviation
- s — sample standard deviation
- P(A) — probability of event A
- X ~ B(n, p) — X has a binomial distribution with parameters n and p
- X ~ N(μ, σ²) — X has a normal distribution with mean μ and variance σ²

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Sampling and presenting data

A **simple random sample** of size n is a sample where every subset of size n from the population is equally likely to be chosen.

Data is often presented in **frequency tables**, **histograms** (for continuous data), **bar charts** (for categorical data), **box plots** (for five-number summaries), or **cumulative-frequency curves** (for medians and quartiles).

#### Measures of central tendency and dispersion

**Mean**: x̄ = Σx / n.

**Median**: the middle value when the data is arranged in order (or the mean of the two middle values for an even number of values).

**Mode**: the value that occurs most often.

**Range**: largest value minus smallest value.

**Standard deviation**: σ = √[Σ(x − μ)² / n] (population) or s = √[Σ(x − x̄)² / (n − 1)] (sample).

For grouped data, use the midpoint of each class as the data value.

#### Linear regression

A **linear regression** fits a straight line y = a + bx to data using the method of least squares. The slope b and intercept a are computed from:

b = [Σ(x − x̄)(y − ȳ)] / [Σ(x − x̄)²] = S_xy / S_xx

a = ȳ − b x̄

The **Pearson correlation coefficient** r = S_xy / √(S_xx S_yy) measures the strength of the linear relationship; −1 ≤ r ≤ 1.

#### Probability

A probability is a number between 0 and 1. P(certain) = 1; P(impossible) = 0.

**Sample space** is the set of all possible outcomes of a random experiment.

**Complementary events**: P(A') = 1 − P(A).

**Addition rule**: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).

**Multiplication rule**: P(A ∩ B) = P(A) × P(B | A).

**Independent events**: P(B | A) = P(B), so P(A ∩ B) = P(A) × P(B).

**Conditional probability**: P(A | B) = P(A ∩ B) / P(B).

**Bayes' theorem**: P(A | B) = P(B | A) × P(A) / P(B). Used to reverse a conditional probability.

#### Venn diagrams and tree diagrams

**Venn diagrams** show the relationships between two or three events as overlapping circles inside a rectangle (the sample space). The number of outcomes in each region is written inside the region.

**Tree diagrams** show a sequence of events as branches. Each branch is labelled with the probability of that branch occurring. The probability of a path is the product of the probabilities along the path; the probability of an event that corresponds to multiple paths is the sum.

#### Binomial distribution

A binomial random variable X counts the number of successes in n independent trials, each with the same success probability p. X ~ B(n, p).

- P(X = r) = C(n, r) p^r (1 − p)^(n − r)
- E(X) = np
- Var(X) = np(1 − p)

Cumulative probabilities P(X ≤ r) are read from tables or computed with a calculator.

#### Normal distribution

A normal random variable X has the bell-shaped distribution with mean μ and variance σ². X ~ N(μ, σ²).

The standard normal Z = (X − μ) / σ has mean 0 and standard deviation 1. Cumulative probabilities P(Z ≤ z) are read from standard-normal tables or computed with a calculator.

For a sum or difference of independent normals: X + Y ~ N(μ_X + μ_Y, σ²_X + σ²_Y) and X − Y ~ N(μ_X − μ_Y, σ²_X + σ²_Y).

#### Poisson distribution (HL)

A Poisson random variable X counts the number of events in a fixed interval, when events occur independently at a constant mean rate λ. X ~ Po(λ).

- P(X = r) = e^(−λ) λ^r / r!
- E(X) = λ
- Var(X) = λ

The Poisson distribution can be used as an approximation to the binomial when n is large and p is small (with λ = np).

#### Central Limit Theorem and confidence intervals (HL)

The **Central Limit Theorem**: for large n, the distribution of the sample mean X̄ is approximately normal with mean μ and standard deviation σ / √n, regardless of the distribution of the underlying population.

A **confidence interval** for the population mean μ is X̄ ± z × σ / √n (when σ is known) or X̄ ± t × s / √n (when σ is estimated by s, using a t-distribution with n − 1 degrees of freedom).

A **confidence interval for the population proportion** p is p̂ ± z × √[p̂(1 − p̂) / n].

#### Hypothesis testing (HL)

A hypothesis test is a procedure for deciding between two competing claims about a population parameter.

**One-sample z-test for the mean** (σ known): H₀: μ = μ₀ vs H₁: μ ≠ μ₀ (or one-sided). Test statistic Z = (X̄ − μ₀) / (σ / √n). Compare to z_{α/2} (two-sided) or z_α (one-sided), or compute the p-value.

**One-sample t-test for the mean** (σ unknown): same procedure but use s in place of σ and the t-distribution with n − 1 degrees of freedom.

**One-sample z-test for the proportion**: H₀: p = p₀ vs H₁: p ≠ p₀. Test statistic Z = (p̂ − p₀) / √[p₀(1 − p₀) / n].

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Where Statistics and Probability appears across the IB Mathematics: AA papers

- **IB Math AA SL Paper 2**: short to medium structured items on probability, binomial and normal distributions, sampling, and basic regression. The HL-only Poisson distribution, Central Limit Theorem, confidence intervals and hypothesis testing are not assessed at SL.
- **IB Math AA SL Paper 1**: statistics and probability items appear occasionally.
- **IB Math AA HL Paper 2**: the full Statistics and Probability content including HL-only sub-topics.
- **IB Math AA HL Paper 3**: statistics items can appear in modelling and investigation contexts.
- **Across the papers**: stating H₀ and H₁ explicitly before computing the test statistic is the highest-leverage exam technique for hypothesis-test items.

#### Common misconceptions (and the correction)

- "The mean is always the best measure of central tendency." It is sensitive to outliers; the median is the better measure for skewed data.
- "P(A ∪ B) = P(A) + P(B)." Only when A and B are mutually exclusive. Otherwise, P(A ∪ B) = P(A) + P(B) − P(A ∩ B).
- "The binomial distribution requires normality." The binomial distribution is exact for any n and p; the normal distribution is an approximation when n is large.
- "A 95% confidence interval has a 95% chance of containing the true parameter." The 95% refers to the long-run success rate of the procedure, not to any specific interval.
- "Rejecting H₀ proves the alternative." Rejecting H₀ at level α means the data provide sufficient evidence against H₀; it does not prove H₁.

#### Exam technique

- For descriptive-statistics questions, state the formula before substituting. The formula line is the method mark.
- For probability questions, list the sample space if it is small (≤ 12 outcomes). The list is the method mark.
- For Venn / tree diagram questions, label every region / branch with its count or probability. The label is the method mark.
- For regression questions, write the formulas for a and b before substituting. The formulas are the method mark.
- For hypothesis-test questions, state H₀ and H₁ explicitly; compute the test statistic; find the critical value or p-value; conclude in context.

#### Specification reference

Statistics and Probability is the fourth topic of IB Mathematics: Analysis and Approaches. At SL it covers probability, binomial and normal distributions, sampling, and basic regression. At HL it extends to the Poisson distribution, the Central Limit Theorem, confidence intervals and hypothesis testing. Confirm the live IB Math AA subject brief and any in-year curriculum update on https://ibo.org/programmes/diploma-programme/curriculum/mathematics/ before committing a revision plan.

---

*Last updated 2026-09-20. Source: IBO DP Mathematics: Analysis and Approaches subject brief, https://ibo.org/contentassets/5895a05412144fe890312bad52b17044/subject-brief-dp-math-analysis-and-approaches-en.pdf. Paper pattern and any in-year specification changes must be re-checked on https://ibo.org/programmes/diploma-programme/curriculum/ before committing a revision plan to a student.*
