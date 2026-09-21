---
exam: hsc-mathematics-advanced
examName: HSC Mathematics Advanced (NESA 2024)
subject: hsc-mathematics-advanced
subjectName: Mathematics Advanced
topic: hscmathadv-005
topicName: Statistical Analysis
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-20
---

# Statistical Analysis — HSC Mathematics Advanced (NESA 2024) Notes

Statistical Analysis is one of the seven Areas of Study in the HSC Mathematics Advanced syllabus. It is taught across Year 11 (Probability and Data) and Year 12 (Random Variables, including discrete and continuous probability distributions and the normal distribution). Statistics questions appear across both HSC papers and require fluency with the calculator's statistical functions.

> Re-check the live specification details and any in-year assessment changes on https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Display of data.** Stem-and-leaf plot, box plot, histogram, cumulative frequency curve (ogive), scatter plot.
- **Measures of centre.** Mean x̄ = (Σ x)/n. Median = middle value (odd n) or mean of two middle values (even n). Mode = most frequent value.
- **Measures of spread.** Range = max − min. IQR = Q3 − Q1. Standard deviation σ = √(Σ(x − x̄)²/n) (population) or √(Σ(x − x̄)²/(n − 1)) (sample).
- **Probability.** For equally likely outcomes, P(A) = n(A)/n(total). P(A or B) = P(A) + P(B) − P(A and B). P(A and B) = P(A) P(B) for independent events.
- **Discrete random variable.** Takes a finite or countable set of values. The probability distribution P(X = x) sums to 1. Mean E(X) = Σ x P(X = x). Variance Var(X) = E(X²) − E(X)².
- **Normal distribution.** Continuous symmetric distribution with mean μ and standard deviation σ. Empirical rule: 68% within 1σ, 95% within 2σ, 99.7% within 3σ.

#### Examiner traps

- Forgetting that a histogram (not a bar chart) is the appropriate display for continuous data grouped into intervals.
- Using the wrong standard deviation formula (sample vs population) — confirm which one the syllabus uses for the dataset.
- Confusing P(X = x) for a continuous random variable (which is 0 for any specific x) with P(a ≤ X ≤ b) (which is the integral of the density).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Display and summary of data

For univariate data, choose the display that matches the data type. Categorical data → bar chart or pie chart. Discrete numerical data → bar chart or stem-and-leaf. Continuous numerical data → histogram or box plot. Time-series data → line graph.

Five-number summary: minimum, Q1, median, Q3, maximum. The box plot visualises these five numbers; the whiskers extend to the minimum and maximum (or to 1.5 × IQR for outlier detection).

#### Probability

Sample space = set of all outcomes. Event = subset of sample space. Probability is a number between 0 and 1, with P(sample space) = 1.

For an event A and its complement A^c: P(A^c) = 1 − P(A).

Addition rule: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). For mutually exclusive events (A ∩ B = ∅): P(A ∪ B) = P(A) + P(B).

Multiplication rule: P(A ∩ B) = P(A) P(B|A). For independent events: P(A ∩ B) = P(A) P(B).

Conditional probability: P(A|B) = P(A ∩ B)/P(B).

#### Discrete random variables

A discrete random variable X maps each outcome of a sample space to a real number. The probability function is P(X = x) for each possible value x. Required: P(X = x) ≥ 0 and Σ P(X = x) = 1.

Mean (expected value): E(X) = μ = Σ x P(X = x).

Variance: Var(X) = σ² = Σ (x − μ)² P(X = x).

Standard deviation: σ = √Var(X).

#### Year 12 random variables

Continuous random variables take values in a continuous range. The probability density function f(x) satisfies f(x) ≥ 0 and ∫f(x) dx = 1. P(a ≤ X ≤ b) = ∫ from a to b of f(x) dx.

The normal distribution with mean μ and standard deviation σ has density f(x) = (1/(σ√(2π))) e^(−(x−μ)²/(2σ²)). The standard normal Z = (X − μ)/σ has mean 0 and standard deviation 1.

Standard normal calculations: P(Z ≤ z) is found from tables or the calculator's inverse normal function. P(a ≤ Z ≤ b) = P(Z ≤ b) − P(Z ≤ a).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Statistical Analysis appears in both HSC papers

- **Year 11 Probability and Data** underpins Year 12 work on random variables and the normal distribution.
- **HSC Paper 1** includes questions on probability rules, conditional probability, and discrete random variables.
- **HSC Paper 2** includes questions on the normal distribution, the binomial distribution, and statistical inference (sample means, confidence intervals).

#### Exam technique

- For probability questions, ALWAYS check whether events are independent or mutually exclusive before choosing a rule.
- For normal distribution questions, ALWAYS standardise using Z = (X − μ)/σ before using tables or the calculator.
- For random variable questions, ALWAYS verify that the probabilities sum to 1 and each is in [0, 1].
- For confidence interval questions, check whether the population standard deviation is known (use Z) or unknown and estimated from a sample (use t, although HSC typically uses Z).

#### Common misconceptions (and the correction)

- "P(A or B) = P(A) + P(B) always." No — only when A and B are mutually exclusive.
- "P(A|B) = P(B|A)." Almost never. P(A|B) is the probability of A given B has occurred; P(B|A) is the probability of B given A. They are equal only when P(A) = P(B).
- "Standard deviation is the average distance from the mean." No — standard deviation is the square root of the average squared distance. Variance (the squared distance) is the average squared deviation; SD is the square root.
- "A continuous distribution assigns probability to specific values." No — P(X = x) = 0 for a continuous random variable. Probability is only assigned to intervals.

#### Specification reference

This Area of Study is assessed across both HSC Mathematics Advanced examination papers. Higher-tariff questions combine statistical concepts with exponential and logarithmic functions (e.g. normal distribution parameters are often expressed in terms of e). Confirm the live assessment weighting and any tier-specific exclusions on curriculum.nsw.edu.au for the current specification before final revision.

---

*Last updated 2026-09-20. Source: NSW Mathematics Advanced 11–12 Syllabus (2024), https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview. Awarding body: NSW Education Standards Authority (NESA). Tier rules, calculator policy and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*