---
exam: qatar-secondary-certificate
examName: Qatar General Secondary Education Certificate
subject: qssc-mathematics
subjectName: Mathematics
topic: qsscmath-010
topicName: "Probability — Rules, Conditional Probability and Distributions"
weight: 3
country: qatar
generated: "2026-09-21T10:00:00"
lastUpdated: "2026-09-21"
---

# Probability — Rules, Conditional Probability and Distributions — Qatar Secondary Certificate Mathematics Notes

Probability is the other half of the Data Handling strand of the MoEHE 2018 Mathematics Curriculum Standards. At Grade 12 the standards publish sample space, compound events (union, intersection, complement), independent and dependent events, conditional probability, tree diagrams and probability tables, and the binomial and normal distributions with z-scores at advanced track (MoEHE pp. 54, 61). Probability ties statistics and discrete mathematics together and appears in applied biology, finance, and engineering.

> Verify the live assessment weighting and the new unified Grade 10 science curriculum introduced from the 2026-2027 academic year on https://www.edu.gov.qa/ before planning revision.

---

### Lite — Quick Review (1h-1d)

#### Core facts in one pass

- **Probability of an event:** P(A) = number of favourable outcomes / total number of outcomes.
- **Complement:** P(not A) = 1 - P(A).
- **Addition rule:** P(A or B) = P(A) + P(B) - P(A and B). For mutually exclusive events: P(A or B) = P(A) + P(B).
- **Multiplication rule:** P(A and B) = P(A) * P(B | A) = P(B) * P(A | B). For independent events: P(A and B) = P(A) * P(B).
- **Conditional probability:** P(A | B) = P(A and B) / P(B).
- **Binomial distribution:** X ~ B(n, p), mean = np, variance = np(1 - p).
- **Normal distribution:** symmetric bell curve, mean mu, standard deviation sigma. Standardise: Z = (X - mu) / sigma.

#### Examiner traps

- Multiplying probabilities when events are NOT independent.
- Forgetting to subtract P(A and B) when adding P(A) + P(B).
- Using P(B) when P(A) was the given condition (and vice versa) in conditional probability.

---

### Standard — Regular Study (2d-2mo)

#### Sample space and counting

A die is rolled twice. Sample space has 36 outcomes. Probability of "sum = 7" is 6/36 = 1/6 (the pairs 1-6, 2-5, 3-4, 4-3, 5-2, 6-1).

Two cards are drawn without replacement from a 52-card deck. Number of ways to draw 2 cards in any order: C(52, 2) = 1326. Probability both are aces: C(4, 2) / C(52, 2) = 6 / 1326 = 1/221.

#### Addition and multiplication rules

P(A or B) = P(A) + P(B) - P(A and B). If A and B are mutually exclusive, P(A and B) = 0.

P(A and B) = P(A) * P(B | A). If A and B are independent, P(B | A) = P(B), so P(A and B) = P(A) * P(B).

Example: P(draw a king then a queen without replacement) = (4/52) * (4/51) = 16/2652 = 4/663.

#### Conditional probability and Bayes' theorem

P(A | B) = P(A and B) / P(B). Bayes' theorem: P(A | B) = P(B | A) * P(A) / P(B).

Example: a test for a disease has 99 percent sensitivity (P(positive | disease) = 0.99) and 95 percent specificity (P(negative | no disease) = 0.95). If 1 percent of the population has the disease, find P(disease | positive). By Bayes: P(disease | positive) = (0.99 * 0.01) / (0.99 * 0.01 + 0.05 * 0.99) = 0.0099 / (0.0099 + 0.0495) = 0.0099 / 0.0594 = 0.1667. About 17 percent — counter-intuitive but correct given the low prevalence.

#### Binomial distribution

X ~ B(n, p): the number of successes in n independent trials, each with probability p of success. P(X = k) = C(n, k) p^k (1 - p)^(n - k).

Example: a coin is biased with p(heads) = 0.6. Toss 10 times. P(exactly 7 heads) = C(10, 7) * 0.6^7 * 0.4^3 = 120 * 0.02799 * 0.064 = 0.215.

#### Normal distribution

X ~ N(mu, sigma^2). Standardise: Z = (X - mu) / sigma. Use Z-tables or calculator to find P(Z <= z).

Example: heights of male students are N(175, 7^2). P(height > 185) = P(Z > (185 - 175)/7) = P(Z > 1.43) = 1 - 0.9236 = 0.0764. About 7.6 percent.

---

### Deep — Long-Term Mastery (1mo-6mo)

#### Why probability matters at the terminal

Probability is half of the Data Handling strand of the MoEHE 2018 standards (~17 percent of the Grade 12 advanced paper). At advanced track the binomial and normal distributions are introduced — these are the entry point to inferential statistics at university level. Conditional probability and Bayes' theorem appear in science and engineering applications.

#### Exam technique

- Draw a tree diagram or Venn diagram for two-event probability questions — visual layout prevents the "independent / dependent" trap.
- For binomial, state n, p, k explicitly before computing.
- For normal, always standardise before looking up a probability — mixing X and Z values is the most common error.

#### Common misconceptions (and the correction)

- "P(A | B) = P(B | A)." Almost never true. They are equal only for symmetric setups.
- "P(A and B) = P(A) * P(B) always." Only for independent events.
- "Binomial requires equally likely trials." It requires independent trials with the same p, not necessarily equally likely outcomes.

#### Specification reference

Source: MoEHE Curriculum Standards for Mathematics KG-G12 (MoEHE, 2018), https://cdn-files.abegs.org/abegs-marsad-prod/uploads/c7a1839c-fd4e-401c-87dd-d6f3baac8cd5.pdf, pp. 54, 61. Re-check on https://www.edu.gov.qa/ before committing.

---

*Last updated 2026-09-21. Source: MoEHE Qatar Mathematics Curriculum Standards KG-G12 (2018), https://cdn-files.abegs.org/abegs-marsad-prod/uploads/c7a1839c-fd4e-401c-87dd-d6f3baac8cd5.pdf. Track regulation and Grade 12 terminal-exam weighting must be re-checked on https://www.edu.gov.qa/ before committing a revision plan to a student (qatar).*
