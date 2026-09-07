---
exam: legon-adm
examName: Legon Admissions (Ghana)
subject: wassce-subjects
subjectName: "Wassce-Subjects"
topic: wassce-005
topicName: Indices and Logarithms
weight: 3
country: ghana
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-07"
---

# Indices and Logarithms

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your WASSCE Core Mathematics paper.

An **index** (exponent) tells how many times a **base** is multiplied by itself: in `a^n`, `a` is the base and `n` is the index. A **logarithm** is the inverse — `log_a(x) = y` means `a^y = x`. WASSCE Core Mathematics tests both together because they share the same laws, and one of the laws appears in nearly every paper that touches the topic.

- **Index laws to memorise:** `a^m × a^n = a^(m+n)`, `a^m ÷ a^n = a^(m−n)`, `(a^m)^n = a^(mn)`, `a^0 = 1`, `a^(−n) = 1/a^n`.
- **Log laws:** `log(xy) = log x + log y`, `log(x/y) = log x − log y`, `log(x^n) = n log x`.
- **High-yield pointers:** common log means base 10; `ln` means base `e ≈ 2.718`. Scientific form is `N = A × 10^n` with `1 ≤ A < 10`.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before the paper.

#### The Index–Logarithm Link
Writing `y = a^x` and swapping to the inverse gives `x = log_a(y)`. Every index law has a matching log law because applying `log_a` to both sides of an index equation converts multiplication of powers into addition of logs. This duality is what makes logs powerful for turning hard multiplication into simple addition — the trick slide rules exploited for centuries.

#### Laws at a Glance
| Law | Index form | Logarithm form |
| --- | --- | --- |
| Product | `a^m × a^n = a^(m+n)` | `log_a(xy) = log_a(x) + log_a(y)` |
| Quotient | `a^m ÷ a^n = a^(m−n)` | `log_a(x/y) = log_a(x) − log_a(y)` |
| Power | `(a^m)^n = a^(mn)` | `log_a(x^n) = n · log_a(x)` |
| Identity | `a^0 = 1` | `log_a(1) = 0` |
| Reciprocal | `a^(−n) = 1/a^n` | `log_a(1/x) = −log_a(x)` |

#### Evaluation Without a Calculator
Definition questions reward students who can read the index form: `log_2(8) = 3` because `2^3 = 8`; `log_3(27) = 3` because `3^3 = 27`; `log_5(1/25) = −2` because `5^(−2) = 1/25`. Practice converting between `a^y = x` and `log_a(x) = y` in both directions until it feels automatic.

#### Worked Relationship
- Start with `log_a(x) + log_a(y)`. Combine using the product rule to get `log_a(xy)`.
- Apply `a^(…)` to both sides: `a^(log_a(x) + log_a(y)) = xy`, which by the power law equals `a^(log_a(x)) × a^(log_a(y)) = xy`.
- This proves the product law is not a separate rule but a direct consequence of how indices work.

#### Typical WASSCE Pattern
- **Objective (Paper 1):** 1–2 items, ~3% weight — usually a single-law application such as simplifying `log 8 + log 5` to `log 40`.
- **Essay (Paper 2):** may appear inside a simplification or equation-solving question worth 2–4 marks.
- **Watch for:** questions that test whether you know `log_a(1) = 0` and that logs of negatives are undefined in real numbers.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Change of Base and Scientific Notation
When a log's base is neither 10 nor `e`, use `log_a(x) = log_b(x) / log_b(a)`. Most WASSCE items convert to base 10, then a calculator finishes the job. For very large or very small numbers, **scientific notation** `N = A × 10^n` (with `1 ≤ A < 10`, `n ∈ ℤ`) keeps the size manageable; the integer `n` is the **characteristic** and the decimal part of `log₁₀ N` is the **mantissa**. Misreading the sign of `n` (for example writing `0.0043 = 4.3 × 10^(−2)` instead of `× 10^(−3)`) is the single most common notational slip.

#### Edge Cases and Traps
- `log(xy) ≠ log(x) · log(y)` — it is `log x + log y`. The product-of-logs error costs marks every year.
- `(a + b)^2 ≠ a^2 + b^2`. Expand with the binomial rule: `a^2 + 2ab + b^2`.
- `log_a(x)` is undefined for `x ≤ 0` in real numbers, so any equation whose solution forces `x` negative or zero has no real solution.
- Dropping the change-of-base denominator flips the answer. Memorise: new log goes on top, old base log goes on the bottom.

#### Connections to Other Topics
Indices and logarithms feed directly into **surds** (`a^(1/2) = √a`), **sequences and series** (geometric progressions use `r^n`), **compound interest** (`A = P(1 + r/100)^n`), and **differentiation** (the derivative of `a^x` is `a^x ln a`). Mastering this topic keeps four later WASSCE chapters easier.

#### Practice Prompts
1. Simplify `2 log 3 + log 4 − log 6` to a single logarithm, then evaluate to 4 decimal places.
2. Without a calculator, solve `2^(3x−1) = 32` and check the answer by rewriting as a logarithm.

## Continue your study

- **[View this topic in your Legon Admissions (Ghana) roadmap](/roadmap/?exam=legon-adm&duration=1mo)** — see where "Indices and Logarithms" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=legon-adm&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Legon Admissions (Ghana) exam overview](/exams/legon-adm/)** — pattern, eligibility, and syllabus
- **[All Wassce-Subjects notes](/notes/legon-adm/wassce-subjects/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
