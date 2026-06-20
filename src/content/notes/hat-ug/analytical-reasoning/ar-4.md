---



exam: hat-ug
examName: HAT-UG (HEC Aptitude Test - Undergraduate)
subject: analytical-reasoning
subjectName: Analytical Reasoning
topic: ar-4
topicName: Number and Letter Series
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.000452"
lastUpdated: "2026-06-20"
diagramPrompt: "Educational diagram illustrating Number and Letter Series with clear labels, white background, exam-style illustration"




---

# Number and Letter Series

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **Number and Letter Series** item gives you a finite sequence that obeys one rule (or two interleaved rules) and asks for the next term, a missing term, or the term that breaks the pattern. The fastest diagnostic step is to compute **first differences** between consecutive terms; if they are constant, the sequence is an **Arithmetic Progression (AP)** with nth term **aₙ = a + (n−1)d**. If first differences keep changing but the **differences of differences** (second-order AP) are constant, fit a quadratic of form **aₙ = An² + Bn + C**. For alternating sequences, split the series into **odd-position** and **even-position** sub-series and solve each separately. Letter series require mapping each character to its **alphabet position** (A=1 … Z=26), then apply the same numeric checks. Always verify any guessed rule on the last two known terms before locking in the answer.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Identifying the Rule

Begin every series problem by writing terms in a column and subtracting each term from the next. Three outcomes are possible:

1. **Constant first difference** → Arithmetic Progression. Use **aₙ = a + (n−1)d**.
2. **Constant ratio between successive terms** → Geometric Progression. Use **aₙ = a·r⁽ⁿ⁻¹⁾**.
3. **First differences vary but second differences are constant** → second-order AP; express as **aₙ = An² + Bn + C** and solve for A, B, C from three known terms.

#### Alternating and Interleaved Patterns

When differences alternate between two values (e.g., +5, −2, +5, −2), the series is **mixed**: split it into odd-indexed and even-indexed terms and analyse each as an independent AP. A common trap is to average the differences and treat the sequence as a single AP — this always yields a wrong answer.

#### Recognising Special Integer Series

Memorise short lists of recurring sequences because HAT-UG items frequently disguise them:

- **Squares:** 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
- **Cubes:** 1, 8, 27, 64, 125, 216
- **Triangular numbers:** 1, 3, 6, 10, 15, 21, 28
- **Fibonacci-type:** 1, 1, 2, 3, 5, 8, 13, 21 (each term = sum of previous two)
- **Primes:** 2, 3, 5, 7, 11, 13, 17, 19, 23, 29

#### Letter Series Mechanics

Convert every letter to its numeric position (A=1, B=2, …, Z=26). The letters will then reveal one of four standard patterns: forward shift (+k), backward shift (−k), skip-counting (+3, +6, +9), or mirror alternation (A, Z, B, Y, C, X, …). After solving, convert the numeric answer back to a letter.

#### Exam-Specific Pattern in HAT-UG

In the Analytical Reasoning block (weight ~4%, roughly 1–2 questions per paper), these items appear as four-option MCQs typically built around AP, alternating AP, or a coded letter shift. Negative marking (−0.25 per wrong attempt on HAT-UG) makes blind guessing costly; skip items whose rule you cannot confirm on at least two known terms.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Layered Rules

Real HAT-UG items often stack two operations: e.g., +3, ×2, +3, ×2 applied in alternation, or arithmetic + geometric hybrid where every third term is derived differently. For such **series-within-a-series**, isolate sub-sequences by **index parity** first, then test arithmetic vs geometric within each branch. A second-order AP can be detected by forming a difference table:

| Term | 3 | 7 | 14 | 24 | 37 |
|------|---|---|----|----|----|
| 1st diff | 4 | 7 | 10 | 13 |  |
| 2nd diff | — | 3 | 3 | 3 |  |

Constant second differences (3) ⇒ quadratic: aₙ = 1.5n² + 0.5n + 1.

#### Letter Coding Variants

Beyond A=1 mapping, expect **reverse alphabet (A=26, Z=1)** and **vowel-only / consonant-only** filtering. Skip patterns like +2, +4, +6, +8 in letter series point to triangular-number gaps in alphabet positions — a favourite trick. Mirror patterns (A, Z, B, Y, C, X) indicate two interleaved reverse orders.

#### Common Mistakes

- **Mislabelling the index.** If the series starts at n=0 rather than n=1, the AP formula **aₙ = a + nd** (not n−1) must be used.
- **Ignoring ± sign reversals** in alternating series and computing the wrong-direction shift.
- **Forgetting to re-convert** the numeric answer to a letter — leading to a numeric option being selected in error.

#### Worked Micro-Example

Find the 8th term of the series 2, 6, 12, 20, 30, …
First differences: 4, 6, 8, 10 → second differences constant at 2 ⇒ aₙ = An² + Bn + C.
Solving: A = 1, B = 1, C = 0 ⇒ **aₙ = n² + n = n(n+1)**. So a₈ = 8·9 = **72**.

#### Practice Prompts

1. Series: 3, 8, 18, 33, 53, ? — find the missing term.
2. Letter series: B, F, K, Q, X, ? — identify the next letter using position gaps.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
