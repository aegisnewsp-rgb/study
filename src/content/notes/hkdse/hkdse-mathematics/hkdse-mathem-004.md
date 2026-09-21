---
exam: hkdse
examName: Hong Kong Diploma of Secondary Education (HKDSE)
subject: hkdse-mathematics
subjectName: Mathematics (Compulsory Part)
topic: hkdse-mathem-004
topicName: "Data Handling — Probability and Statistics"
weight: 4
country: hongkong
generated: "2026-09-20T14:00:00"
lastUpdated: "2026-09-20"
---

# Data Handling — Probability and Statistics — HKDSE Mathematics Notes

This topic covers the four HKDSE Compulsory Part learning units in the Data Handling strand: permutation and combination; more about probability; measures of dispersion; and uses and abuses of statistics. These units appear on Paper 1 Section B and across Paper 2 multiple-choice, and they overlap with the Extended Part Module 1 (Calculus and Statistics) — students taking Module 1 should add conditional probability and the named probability distributions to their preparation.

> Verify the live Compulsory Part unit list and the assessment framework on https://www.hkeaa.edu.hk/ before planning revision.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Permutation**: the number of ordered arrangements of r items chosen from n distinct items is nPr = n!/(n-r)!.
- **Combination**: the number of unordered selections is nCr = n!/(r!(n-r)!). Note that nCr = nC(n-r).
- **Probability rules**: P(A or B) = P(A) + P(B) - P(A and B); for mutually exclusive events, P(A or B) = P(A) + P(B); for independent events, P(A and B) = P(A)·P(B).
- **Conditional probability**: P(A | B) = P(A and B) / P(B) for P(B) > 0.
- **Measures of dispersion**: range, interquartile range (IQR = Q3 - Q1), variance σ², standard deviation σ. For grouped data, use mid-interval values.
- **Sampling bias and misleading graphs**: bar charts with truncated axes, pie charts with too many slices, mean without indication of spread.

#### Examiner traps

- Confusing "with replacement" and "without replacement" in probability problems — the probability of an event changes after each draw if there is no replacement.
- Using the range as the only measure of spread — the IQR or standard deviation captures the spread better.
- Treating "no correlation" as "the slope is zero" — no correlation means no linear relationship, but a non-zero curved relationship may still exist.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Permutation and combination

For permutation (ordered arrangement):

- **Without repetition**: nPr = n!/(n-r)! — used when items are distinct and not reused.
- **With repetition**: n^r — used when items can be repeated (e.g. passwords).

For combination (unordered selection):

- **Standard form**: nCr = n!/(r!(n-r)!).
- **Restricted arrangements**: count the unrestricted arrangements, then subtract the arrangements that violate the restriction. For example, "the number of ways to seat 4 men and 2 women in a row such that no two women are adjacent" = 4! · 5P2 (place the men first, then choose slots for the women).

For circular arrangements of n distinct objects, the number of arrangements is (n-1)! (rotations are equivalent).

#### Probability

The probability of an event A is a number between 0 and 1, with P(0) = 0 and P(Ω) = 1 (Ω is the sample space). For a finite equally likely sample space, P(A) = |A|/|Ω|.

**Addition rule**: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).

**Multiplication rule**: P(A ∩ B) = P(A)·P(B | A).

**Conditional probability**: P(A | B) = P(A ∩ B) / P(B).

**Independent events**: A and B are independent if P(A ∩ B) = P(A)·P(B), which is equivalent to P(A | B) = P(A) and P(B | A) = P(B).

For a 2-stage experiment (with replacement, without replacement), draw a tree diagram with branches labelled by probability. The probability of a particular outcome path is the product of branch probabilities; the probability of any event is the sum of the probabilities of the paths realising the event.

#### Measures of dispersion

For ungrouped data x₁, x₂, ..., xₙ with mean x̄:

- Mean x̄ = (Σxᵢ)/n.
- Variance σ² = (Σ(xᵢ - x̄)²)/n (population) or s² = (Σ(xᵢ - x̄)²)/(n-1) (sample, unbiased estimator).
- Standard deviation σ = √σ².

For grouped data with frequencies fᵢ and midpoints mᵢ:

- Mean x̄ = (Σfᵢmᵢ)/n.
- Variance σ² = (Σfᵢ(mᵢ - x̄)²)/n.

For frequency distributions, a box plot gives the median, quartiles, IQR and outliers in one graph. Outliers lie below Q1 - 1.5·IQR or above Q3 + 1.5·IQR.

#### Uses and abuses of statistics

The most-tested abuses in the HKDSE:

1. **Truncated axes**: a bar chart with a non-zero baseline exaggerates small differences.
2. **Cherry-picked samples**: a "survey" of 100 people from a single demographic does not represent the population.
3. **Correlation vs causation**: a strong correlation between two variables does not imply one causes the other.
4. **Mean without context**: a mean income of $50,000 hides the income distribution — the median and standard deviation are also needed.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Cross-topic links

- **Probability to Extended Part Module 1**: M1 introduces conditional probability, Bayes' theorem, and the binomial, geometric, Poisson and normal distributions. The Compulsory Part probability work is the foundation for M1.
- **Statistics to data analysis**: standard deviation and IQR measure different aspects of spread. Use IQR when the distribution is skewed or has outliers; use standard deviation for symmetric distributions.
- **Permutation/combination to algebra**: binomial expansion coefficients are nCr; the number of subsets of an n-element set is 2^n = Σ nCr.

#### Exam technique

- For probability tree diagrams, label each branch with a probability and the corresponding outcome. State "P(A and B) = ..." before computing.
- For permutations with restrictions, draw the arrangement first and identify what is being counted. Then subtract the restricted cases from the total.
- For statistics questions, show the substitution into the formula; on a 5-mark question, the formula, the substitution and the simplification each carry marks.
- For uses and abuses, name the abuse explicitly ("the chart uses a truncated y-axis, which exaggerates the apparent difference") rather than just describing the chart.

#### Common misconceptions (and the correction)

- "The standard deviation is the average deviation from the mean." It is the square root of the average of the squared deviations — not the average of the absolute deviations (which is the mean absolute deviation, a different statistic).
- "Permutation and combination are interchangeable." They count different things: ordered vs unordered. The same 4 people selected as President, VP, Treasurer and Secretary is one permutation but 4C4 = 1 combination (the same set of 4 people).
- "If P(A) = 0.3 and P(B) = 0.4, then P(A and B) = 0.12." This is only true if A and B are independent. If P(A and B) > 0.12, the events are positively correlated; if P(A and B) < 0.12, negatively correlated.

#### Specification reference

Topic covers Compulsory Part Units 14-17 of the CDC/HKEAA Mathematics Curriculum and Assessment Guide (Secondary 4 - 6): "Permutation and combination", "More about probability", "Measures of dispersion", "Uses and abuses of statistics". Extended Part Module 1 (Calculus and Statistics) extends the probability unit to Bayes' theorem, the binomial, geometric, Poisson and normal distributions. Confirm the live assessment framework on hkeaa.edu.hk.

---

*Last updated 2026-09-20. Source: HKDSE Mathematics Assessment Framework, https://www.hkeaa.edu.hk/DocLibrary/HKDSE/Subject_Information/math/2026hkdse-e-math.pdf; CDC/HKEAA Mathematics Curriculum and Assessment Guide (Secondary 4 - 6), https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/Math_CAGuide_e_2015.pdf. Live unit boundaries, Extended Part module choices, and any in-year specification changes must be re-checked on hkeaa.edu.hk before committing a revision plan to a student.*