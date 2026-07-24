---



exam: ncee
examName: NCEE (National Common Entrance Examination)
subject: quant-reasoning
subjectName: Quantitative Reasoning
topic: qr-5
topicName: Series Completion (Numbers and Figures)
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.592427"
lastUpdated: "2026-07-24"
diagramPrompt: "Educational diagram illustrating Series Completion (Numbers and Figures) with clear labels, white background, exam-style illustration"




---

# Series Completion (Numbers and Figures)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Series Completion tests how quickly you spot the rule hidden in a chain of numbers, letters, or figures and then write the term that fits. In NCEE Quantitative Reasoning, this sub-section in most keys delivers 3–5 multiple-choice items at roughly 4% of the paper, in many papers inside a 30-minute paper that contains 45–60 questions in total.

The fastest solve path is to **compute first differences**, then **second differences if needed**, before guessing the rule. Common families the NCEE recycles: arithmetic progressions (AP), geometric progressions (GP), squares, cubes, triangular numbers, Fibonacci-type recurrence, and alternating two-series.

- **AP check:** differences are constant → rule is `d`.
- **GP check:** ratios are constant → rule is `r`.
- **Alternating check:** split odd and even positions into two sub-series and solve each separately.
- **Figure check:** track sides, vertices, rotation, or shading step by step.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core rule families tested

The NCEE draws almost every series item from a small set of rule families. Memorising the look of each family saves time because you stop re-deriving from scratch on every question.

| Family | Detection clue | nth-term formula |
| --- | --- | --- |
| Arithmetic progression (AP) | First differences constant | `a_n = a + (n−1)d` |
| Geometric progression (GP) | Ratios constant | `a_n = a · r^(n−1)` |
| Quadratic / second-difference | First differences increase by a fixed `d₂` | `a_n = an² + bn + c` |
| Fibonacci-type | Each term = sum of previous two | `a_n = a_{n−1} + a_{n−2}` |

`a` = first term, `d` = common difference, `r` = common ratio, `n` = position index. All are unitless.

#### Step-by-step solving method

A reliable NCEE approach is to apply the same five checks to every item, in the same order, so you never miss a hidden rule.

1. List the terms and compute **first differences** `Δ₁`.
2. If `Δ₁` is not constant, compute **second differences** `Δ₂`. Constant `Δ₂` ⇒ quadratic rule.
3. If signs alternate between positive and negative, treat the series as **two interleaved APs/GPs** and solve each on its own.
4. If the terms look multiplicative (2, 6, 18, 54 …) compute **ratios** to test for a GP.
5. **Verify** the rule you found against every given term, not just the last two — NCEE distractors punish single-term matches.

#### Figure-based completion

For figure series, count one attribute at a time: number of sides, vertices, lines of symmetry, rotation angle, or shaded fraction. The rule that fits all given figures wins; a rule that fits only the last figure is almost always wrong.

- NCEE figure items in most keys change **one attribute per step**, so do not invent two simultaneous changes.
- Reflection and 90° rotation are common distractors; always check both before choosing.
- When shading flips between two colours, split the figure series exactly like an alternating number series.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge cases the NCEE exploits

Most wrong answers on this topic come from mis-classifying the rule, not from arithmetic slips. Watch for these traps:

| Trap | What it looks like | Correct handling |
| --- | --- | --- |
| Mixed AP and GP | 2, 4, 12, 48, 240 … | Each term multiplies by 2, then by 3, alternating → split into two sub-series |
| Quadratic disguised as AP | 3, 6, 11, 18, 27 … | Second differences are 2, confirming `n² + n + 1` |
| Digit-operation rule | 13, 14, 16, 19, 23 … | Differences 1, 2, 3, 4 — another AP hidden inside the differences |
| Reverse-digit rule | 11, 22, 44, 88 … | GP with `r = 2` |
| Near-Fibonacci | 1, 1, 2, 4, 7 … | Not Fibonacci; differences are 0, 1, 2, 3 (another AP) |

#### Worked micro-example

Find the missing term in **3, 6, 11, 18, 27, ?**

1. First differences: 3, 5, 7, 9.
2. Second differences: 2, 2, 2 → constant, so the series is quadratic.
3. Next first difference = 9 + 2 = 11.
4. Missing term = 27 + 11 = **38**.

General form: `a_n = n² + n + 1`, giving 3, 6, 11, 18, 27, 38 — verified across all six terms.

#### Practice prompts

1. Identify the rule and the missing term: **2, 6, 12, 20, 30, ?** (Hint: triangular-number pattern.)
2. The figure series shows a square, then the same square rotated 45°, then rotated 45° again. What rotation completes the cycle back to the original orientation?

#### Exam strategy

Spend no more than **60–90 seconds** per series item; longer means the rule is alternating and you must split, not brute-force. On NCEE papers since the syllabus was unified under the National Examination Council (NECO) style, series items cluster in the **middle third** of the Quantitative Reasoning booklet — finish the easier arithmetic and word problems first, then return.

## Continue your study

- **[View this topic in your NCEE (National Common Entrance Examination) roadmap](/roadmap/?exam=ncee&duration=1mo)** — see where "Series Completion (Numbers and Figures)" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ncee&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NCEE (National Common Entrance Examination) exam overview](/exams/ncee/)** — pattern, eligibility, and syllabus
- **[All Quantitative Reasoning notes](/notes/ncee/quant-reasoning/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
