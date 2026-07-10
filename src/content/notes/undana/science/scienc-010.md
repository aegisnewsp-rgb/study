---
exam: undana
examName: UNDANA Admission (Indonesia)
subject: science
subjectName: "Science (Saintek)"
topic: scienc-010
topicName: Topic 10
weight: 3
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-10"
---

# Topic 10

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

This topic bundles four reasoning skill families tested in the UNDANA Saintek admission: **proposition logic**, **categorical syllogisms**, **number patterns / sequences**, and **data interpretation**.

- **Arithmetic series:** $U_n = a + (n-1)b$ and $S_n = \dfrac{n}{2}(2a + (n-1)b)$.
- **Geometric series:** $U_n = a \cdot r^{n-1}$ and $S_n = \dfrac{a(r^n - 1)}{r - 1}$ for $r > 1$.
- **Arithmetic mean of grouped data:** $\bar{x} = \dfrac{\sum x_i}{n}$.
- **Syllogisms** are judged by *structural* validity, not real-world truth — a classic trap.
- Watch quantifiers: *all, some, none* change the conclusion's strength.

Master the four series formulas plus the truth table for **¬, ∧, ∨, →** and you cover the bulk of the 3% weight.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Proposition Logic

A **proposition** is a declarative statement that is either true or false. Compound propositions are built using logical connectives: **negation (¬)**, **conjunction (∧)**, **disjunction (∨)**, and **implication (→)**. An implication $P \rightarrow Q$ is false only when P is true and Q is false; every other assignment makes it true. A **tautology** is true under every valuation, a **contradiction** is false under every valuation.

#### Syllogisms

A categorical syllogism joins two premises containing a shared *middle term* to derive a conclusion. Validity is determined by structural rules such as the middle term must be distributed in at least one premise, no term may be distributed in the conclusion that was undistributed in the premises, and two negative premises yield no valid conclusion.

#### Sequences and Series

An **arithmetic sequence** has a constant common difference $b$, so each term grows linearly. A **geometric sequence** has a constant common ratio $r$, producing exponential growth or decay. Recognising which pattern fits a given partial listing is the diagnostic step; the formulas then give you any missing term or partial sum.

#### Data Interpretation

Tables, bar charts, and pie charts encode frequencies, proportions, and rates. The arithmetic mean $\bar{x} = \sum x_i / n$ is used for ungrouped data, while grouped data use the midpoint of each class. **Common traps** include confusing $b$ with $r$, misreading axis scales, and answering syllogism items by world-knowledge instead of structure.

| Series type | $n$-th term | Sum of $n$ terms |
|---|---|---|
| Arithmetic | $a + (n-1)b$ | $\dfrac{n}{2}\bigl(2a + (n-1)b\bigr)$ |
| Geometric | $a \cdot r^{n-1}$ | $\dfrac{a(r^n - 1)}{r - 1}$ |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases in Logic

A conditional $P \rightarrow Q$ is **vacuously true** when P is false — a frequent trap when translating "if … then …" statements from Bahasa Indonesia into formal form. The **contrapositive** $\neg Q \rightarrow \neg P$ is logically equivalent to the original implication, but the **converse** $Q \rightarrow P$ and **inverse** $\neg P \rightarrow \neg Q$ are not.

#### Misclassification of Series

A hybrid sequence can switch from arithmetic to geometric after a pivot term; the examiner exploits this by providing the first three or four terms only. Strategy: compute successive differences first; if they are non-constant, compute successive ratios. Consecutive terms with a constant difference signal arithmetic, while a constant multiplicative factor signals geometric.

#### Worked Example

A series has terms 3, 6, 12, 24, … and you need the 8th term plus $S_8$. Here $a = 3$, $r = 2$, so $U_8 = 3 \cdot 2^{7} = 384$ and $S_8 = \dfrac{3(2^{8}-1)}{2-1} = 3 \cdot 255 = 765$. If the sequence were 3, 7, 11, 15, …, then $b = 4$, giving $U_8 = 3 + 7 \cdot 4 = 31$ and $S_8 = \dfrac{8}{2}(6 + 28) = 136$.

#### Connections

Number-pattern reasoning feeds directly into later calculus topics (limits of geometric series) and probability (expected value of arithmetic progressions). Syllogistic logic underpins set-theory Venn diagrams and digital-circuit design.

#### Common Mistakes to Avoid

- Treating $r < 1$ geometric sums with the same formula without adjusting for convergence.
- Confusing **mean** with **median** when a pie chart is misread as a histogram.
- Forgetting that a syllogism with an **undistributed middle** is automatically invalid.

#### Practice Prompts

1. Given premises "All A are B" and "No B are C", determine whether a valid conclusion exists and state it.
2. A bar chart shows sales of 40, 55, 70, 85 units across four quarters — compute the percentage change from Q1 to Q4 and the four-quarter mean.

---

## Continue your study

- **[View this topic in your UNDANA Admission (Indonesia) roadmap](/roadmap/?exam=undana&duration=1mo)** — see where "Topic 10" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=undana&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UNDANA Admission (Indonesia) exam overview](/exams/undana/)** — pattern, eligibility, and syllabus
- **[All Science (Saintek) notes](/notes/undana/science/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
