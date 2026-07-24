---



exam: nat-i
examName: NAT-I (NTS)
subject: analytical-reasoning
subjectName: Analytical Reasoning
topic: ar-4
topicName: Series Completion (Numbers)
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.129138"
lastUpdated: "2026-07-24"
diagramPrompt: "Educational diagram illustrating Series Completion (Numbers) with clear labels, white background, exam-style illustration"




---

# Series Completion (Numbers)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Series Completion (Numbers) asks you to spot the rule governing a given numeric sequence and pick the next (or missing) term. The fastest method is to compute **first differences** between consecutive terms: if they are constant, the series is an **Arithmetic Progression (AP)** with `a_n = a + (n-1)d`. If the **first differences themselves form an AP**, the underlying pattern is **quadratic** (n²-type), and a **constant second difference** signals a cubic-style rule.

For **multiplicative** patterns, test the ratio between consecutive terms; a constant ratio indicates a **Geometric Progression (GP)** with `a_n = a · r^(n-1)`. Also recognise squares (n²), cubes (n³), triangular numbers `n(n+1)/2`, Fibonacci (`F_n = F_{n-1} + F_{n-2}`), prime sequences, and alternating +/− sub-series.

- Compute differences **before** guessing squares and cubes.
- Split alternating series into odd-indexed and even-indexed sub-sequences.
- Always verify your candidate rule against **every** given term, not just the last two.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Pattern-Detection Workflow

Begin by listing the terms, then compute successive first differences. A flat row of differences confirms an AP; a row that itself grows linearly points to a quadratic rule. Only after these quick checks should you attempt ratio analysis, because a near-GP in many papers hides a polynomial pattern. NAT-I (NTS) in standard papers delivers 4–6 term sequences, giving you enough data points to reject a wrong rule early.

#### Alternating and Interleaved Series

When signs flip or magnitudes jump irregularly, split the series into two sub-series at odd and even indices. Each sub-series is in most keys a simple AP or GP. Failing to separate them is the most common reason students extend the wrong branch and pick a distractor answer.

#### Rule Families at a Glance

| Pattern family | Tell-tale signature | Example |
| --- | --- | --- |
| AP | Constant first difference | 3, 7, 11, 15, **19** (d = 4) |
| GP | Constant ratio | 2, 6, 18, 54, **162** (r = 3) |
| n² series | First differences form AP | 1, 4, 9, 16, **25** |
| n³ series | Constant second difference | 1, 8, 27, 64, **125** |
| Triangular | n(n+1)/2 | 1, 3, 6, 10, **15** |
| Alternating AP | Odd/even index splits | 5, 12, 8, 15, 11, **18** |

Common trap: 2, 6, 18, 53 looks like a GP with r = 3, but the 53 breaks it — the actual rule is quadratic. Always fit the rule to **all** terms before committing.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Advanced Patterns

Beyond standard AP/GP, NAT-I (NTS) occasionally features **digit-sum patterns** (e.g., 18, 27, 36 whose digits sum to 9, 9, 9), **digit-reversal** rules, and **mixed polynomials** such as `n² + n` (yielding 2, 6, 12, 20, 30). Composite patterns like `n² + 1` produce 2, 5, 10, 17, 26 — easily misread as AP at first glance. Cubes in disguise (64, 125, 216 = 4³, 5³, 6³) trap students who instinctively reach for square-based rules.

#### Worked Micro-Example

Consider the sequence 2, 5, 10, 17, 26, ?. First differences: 3, 5, 7, 9 — an AP with d = 2. Second differences are constant at 2, confirming a quadratic rule `a_n = n² + 1`. The next first difference must be 11, so the missing term is **37**. Verification: positions 1–5 give 2, 5, 10, 17, 26 — all match.

#### Common Mistakes and Practice Prompts

| Mistake | Fix |
| --- | --- |
| Continuing the wrong sub-series in alternating sequences | Split odd/even indices first |
| Treating near-GP as true GP | Verify ratio on **every** pair |
| Using only the last two terms | Check rule against all given terms |
| Confusing cubes with squares | List n² and n³ tables during revision |

**Practice 1:** Find the next term of 3, 6, 11, 18, 27, ?
**Practice 2:** Identify the rule in 1, 2, 4, 7, 11, 16, ? and give the next term.

Exam strategy: budget 45–60 seconds per question, and if no pattern emerges in 30 seconds, skip and return — the 4% weight doesn't justify a time sink.

---

## Continue your study

- **[View this topic in your NAT-I (NTS) roadmap](/roadmap/?exam=nat-i&duration=1mo)** — see where "Series Completion (Numbers)" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=nat-i&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NAT-I (NTS) exam overview](/exams/nat-i/)** — pattern, eligibility, and syllabus
- **[All Analytical Reasoning notes](/notes/nat-i/analytical-reasoning/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
