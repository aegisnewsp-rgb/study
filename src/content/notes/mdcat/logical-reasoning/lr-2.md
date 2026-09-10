---



exam: mdcat
examName: MDCAT
subject: logical-reasoning
subjectName: Logical Reasoning
topic: lr-2
topicName: Series Completion
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.119452"
lastUpdated: "2026-09-10"
diagramPrompt: "Educational diagram illustrating Series Completion with clear labels, white background, exam-style illustration"




---

# Series Completion

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your MDCAT Logical Reasoning section.

Series Completion asks you to detect the rule binding a given sequence of numbers, letters, or mixed symbols and pick the term that continues it. PMC sets 3–5 MCQs from this topic (4% of the MDCAT paper), so roughly one question every 8–10 minutes within the reasoning block.

- The two formulas worth memorising: AP term `aₙ = a + (n−1)d` and GP term `aₙ = a × r^(n−1)`, where *a* is the first term, *d* the common difference, *r* the common ratio, and *n* the term position.
- Most MDCAT items test arithmetic, geometric, alternating, square/cube, or letter-series rules. Always compute 1st differences first; if they aren't constant, take 2nd differences.
- Speed trick: check odd-positioned and even-positioned terms separately before assuming a single rule covers the whole sequence.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before MDCAT.

#### Core Rule Families

Every MDCAT series question fits one of seven rule families. Identifying the family is half the answer, so start by sorting the given terms.

| Rule family | What to compute | Typical tell-tale |
| --- | --- | --- |
| Arithmetic (AP) | 1st differences | Constant gap between terms |
| Geometric (GP) | Ratio between consecutive terms | Multiplying by same factor |
| Alternating | Odd-indexed vs even-indexed terms | Two interleaved subsequences |
| Square / Cube | n², n³, or successive odd numbers | 1, 4, 9, 16 … or 1, 8, 27, 64 … |
| Difference-of-differences | 1st then 2nd differences | 1st differences themselves form an AP |
| Letter / Alpha-numeric | Positional value (A=1 … Z=26) | Wraps Z→A after +1 operations |
| Mixed operation | +, −, ×, ÷ combined | Alternating operators between terms |

#### Step-by-Step Solving Method

1. Write the given terms in a row and compute 1st differences.
2. If 1st differences are constant → AP, apply `aₙ = a + (n−1)d`.
3. If 1st differences form an AP → quadratic; fit `an² + bn + c`.
4. If ratios are constant → GP, apply `aₙ = a × r^(n−1)`.
5. If none of the above → split odd and even positions and re-test each subsequence.

#### Worked Relation

For the sequence 5, 11, 17, 23, ?, the 1st differences are 6, 6, 6 → constant. So d = 6 and the missing 5th term = 5 + 4(6) = **29**. If instead you saw 3, 6, 18, 72, the ratios are 2, 3, 4 — not constant — meaning the rule is mixed (×2, ×3, ×4), and the next term would be 72 × 5 = **360**.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline targeting a top MDCAT score.

#### Edge Cases That Trap Top Scorers

Several series types look arithmetic but obey a hidden rule. Triangular numbers (1, 3, 6, 10, 15, …) follow `Tₙ = n(n+1)/2`, so 1st differences 2, 3, 4, 5 themselves form an AP. Fibonacci-type series (1, 1, 2, 3, 5, 8, 13, …) make each new term the sum of the two before it — and 1st differences are not constant, which fools students into forcing a wrong AP answer.

Letter series add a positional layer: assign A=1 through Z=26, then apply the arithmetic. A backward wrap (e.g., X, Y, Z, A, B) signals +1 with a 26-mod reset. Mixed alpha-numeric series (e.g., A2, C4, F6, J8) need both letter and number rules solved independently before recombining.

#### Common Mistakes

- Forcing one rule across an alternating series (odd positions follow squares, even positions follow cubes).
- Confusing the term count *n* with the index being asked — AP formula needs the position of the missing term, not the total count.
- Skipping the 2nd-difference check when 1st differences are non-constant.
- Reading alpha-numeric series left-to-right as a single string instead of two parallel sub-sequences.

#### Practice Prompts

1. Find the next term: 2, 6, 12, 20, 30, ? (Hint: differences are 4, 6, 8, 10 — an AP.)
2. Continue the letter series: B, F, K, Q, ? (Hint: gaps between letters are 4, 5, 6, ….)

#### MDCAT Exam Strategy

Allocate ≈40 seconds per series item. Eliminate choices that violate the simplest rule (AP or GP) first; only then test alternation. Three to five correct answers here can shift your merit position by 5–10 ranks.

## Continue your study

- **[View this topic in your MDCAT roadmap](/roadmap/?exam=mdcat&duration=1mo)** — see where "Series Completion" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=mdcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[MDCAT exam overview](/exams/mdcat/)** — pattern, eligibility, and syllabus
- **[All Logical Reasoning notes](/notes/mdcat/logical-reasoning/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
