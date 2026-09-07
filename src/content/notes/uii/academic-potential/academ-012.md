---
exam: uii
examName: UI Entrance (Indonesia)
subject: academic-potential
subjectName: Academic Potential
topic: academ-012
topicName: Probability and Data Interpretation
weight: 3
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-07"
---

# Probability and Data Interpretation

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Probability measures the likelihood of an event as a dimensionless ratio in [0,1], computed as **P(A) = n(A) / n(S)** where n(A) counts favourable outcomes and n(S) counts all outcomes in the sample space. Data interpretation means reading tables, bar/line/pie charts, and frequency distributions to extract the **mean, median, mode, range, variance**, and **standard deviation**. On the UI Entrance TPA subtest this topic carries roughly 3% weight, appearing as 1–3 multiple-choice items that mix a quick probability calculation with a chart-reading question.

- **Classical probability** uses the ratio formula; **empirical probability** uses relative frequency from observed data.
- **Independent events** satisfy P(A∩B) = P(A)·P(B); **mutually exclusive** events satisfy P(A∩B) = 0.
- **Expected value** E(X) = Σ xᵢ·P(xᵢ); **sample standard deviation** s = √[Σ(xᵢ − x̄)² / (n − 1)].

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core probability rules

The **addition rule** combines two events: P(A∪B) = P(A) + P(B) − P(A∩B). Subtracting P(A∩B) avoids double-counting the overlap. For **mutually exclusive** events, P(A∩B) = 0 so the rule simplifies to P(A∪B) = P(A) + P(B). For **independent** events, the **multiplication rule** gives P(A∩B) = P(A)·P(B); dependence breaks this product form.

The **conditional probability** P(A|B) = P(A∩B) / P(B) reads as "probability of A given B has occurred" and requires P(B) > 0. Combined with Bayes-style reasoning, it powers tree diagrams and two-way tables that dominate UI TPA problems.

| Rule | Formula | When to use |
| --- | --- | --- |
| Classical | P(A) = n(A) / n(S) | Equally likely outcomes |
| Addition | P(A∪B) = P(A)+P(B)−P(A∩B) | "Either A or B" |
| Multiplication | P(A∩B) = P(A)·P(B) | Independent A and B |
| Conditional | P(A\|B) = P(A∩B)/P(B) | "A given B" |
| Complement | P(A') = 1 − P(A) | "At least one" problems |

#### Counting and data summary

Counting outcomes uses **permutations** nPr = n! / (n−r)! for ordered selections and **combinations** nCr = n! / [r!(n−r)!] for unordered selections. After collecting data, **central tendency** is summarised by the mean x̄ = (Σxᵢ)/n, the median (middle value, or mean of the two middles for even n), and the mode (most frequent value). **Dispersion** is captured by the range, variance σ² = Σ(xᵢ−μ)²/n, and standard deviation σ = √variance; the sample version uses (n−1) in the denominator.

- Permutations fit "arrangements" problems (rankings, passwords).
- Combinations fit "selections" problems (committees, lottery).
- Always check whether order matters before choosing nPr versus nCr.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Distinguishing mutually exclusive from independent

Many UI candidates treat **mutually exclusive** and **independent** as synonyms. They are not. Two events are **mutually exclusive** if they cannot occur together (P(A∩B) = 0), while they are **independent** if the occurrence of one does not change the probability of the other (P(A|B) = P(A)). When P(A) > 0 and P(B) > 0, mutually exclusive events with positive probability **cannot** be independent, because P(A|B) = 0 ≠ P(A).

| Property | Mutually exclusive | Independent |
| --- | --- | --- |
| P(A∩B) | 0 | P(A)·P(B) |
| P(A\|B) | 0 | P(A) |
| Can both hold? | No, if both P > 0 | No, if A∩B = ∅ and P > 0 |

#### Reading charts and correlation traps

Bar charts compare categorical counts; line charts show trends over an ordered variable (often time); pie charts display parts of a whole as angles or percentages. A common TPA trap is **reading the wrong axis** — for example, citing a bar's height when the question asks for relative frequency, or ignoring the scale break. Another trap is **confusing correlation with causation**: two rising curves do not prove that one drives the other, especially in observational data sets drawn from Indonesian demographic or economic tables.

1. For an even-sized data set {2, 4, 7, 9}, the median is (4 + 7) / 2 = 5.5, not 5.
2. Probability of drawing two aces without replacement from 52 cards = (4/52)·(3/51) = 12/2652 ≈ 0.00452.

**Practice prompts:** Compute P(at least one head) when tossing three fair coins using 1 − P(no heads) = 1 − (1/2)³ = 7/8. For the table {3, 5, 7, 9, 11}, find x̄ = 7 and s = √[(16+4+0+4+16)/4] = √10 ≈ 3.16.

---

## Continue your study

- **[View this topic in your UI Entrance (Indonesia) roadmap](/roadmap/?exam=uii&duration=1mo)** — see where "Probability and Data Interpretation" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=uii&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UI Entrance (Indonesia) exam overview](/exams/uii/)** — pattern, eligibility, and syllabus
- **[All Academic Potential notes](/notes/uii/academic-potential/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
