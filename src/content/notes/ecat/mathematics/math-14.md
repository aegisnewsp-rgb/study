---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-14
topicName: Statistics and Data Analysis
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.071264"
lastUpdated: "2026-06-28"
diagramPrompt: "Mathematical diagram showing Statistics and Data Analysis concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Statistics and Data Analysis

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Statistics and Data Analysis** is the mathematics of collecting, organizing, summarizing, and interpreting numerical data. In ECAT, expect 1–2 MCQs that test your ability to compute **central tendency** (mean, median, mode), **dispersion** (variance and standard deviation), or apply the **binomial probability formula** P(X = x) = C(n,x) p^x (1 − p)^(n − x).

Key formulas to memorize:
- **Mean:** μ = Σx_i / n
- **Variance:** σ² = Σ(x_i − μ)² / n
- **Standard deviation:** σ = √σ²
- **Binomial mean:** μ = np
- **Binomial standard deviation:** σ = √(np(1 − p))

High-yield pointers: distinguish population σ (divide by n) from sample s (divide by n − 1); remember binomial requires fixed n, two outcomes per trial, and independent trials.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Measures of Central Tendency
The **mean** (arithmetic average) is μ = Σx_i / n, where x_i is each observation and n is the count. The **median** is the middle value when data is sorted; for an even count it is the average of the two central values. The **mode** is the most frequently occurring value — a dataset can be unimodal, bimodal, or have no mode at all. For grouped data, the mean uses class midpoints: μ = Σ(f_i · m_i) / Σf_i.

#### Measures of Dispersion
The **range** is max − min. The **variance** σ² = Σ(x_i − μ)² / n measures average squared deviation from the mean. Taking the square root gives **standard deviation** σ, which returns to the original unit of the data. A larger σ means greater spread; σ = 0 means every value equals the mean.

| Statistic | Population | Sample |
|---|---|---|
| Variance | σ² = Σ(x_i − μ)² / n | s² = Σ(x_i − x̄)² / (n − 1) |
| Std. Dev. | σ = √σ² | s = √s² |

#### Probability and the Binomial Distribution
Probability of an event A satisfies 0 ≤ P(A) ≤ 1. For independent events, P(A ∩ B) = P(A) · P(B); for mutually exclusive events, P(A ∪ B) = P(A) + P(B).

When a random experiment has n **independent** trials, each with success probability p and failure probability q = 1 − p, the count of successes X follows the **binomial distribution** B(n, p):
- P(X = x) = C(n, x) p^x q^(n − x), where C(n, x) = n! / (x! (n − x)!)
- Mean: μ = np
- Variance: σ² = npq
- Standard deviation: σ = √(npq)

#### Typical ECAT Question Patterns
MCQs usually (a) compute the mean or variance of a small ungrouped dataset, (b) ask for the median of a sorted list, or (c) apply the binomial formula in a word problem like "a coin is tossed 6 times, find the probability of exactly 3 heads." Watch for trap options that forget the √, use n − 1 instead of n, or compute C(n, x) incorrectly.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Connections
- **No-mode datasets:** If every value appears once (e.g. {2, 5, 7, 9}), the dataset has **no mode**. ECAT options sometimes include "0" as a distractor — recognise that the answer is "no mode."
- **Bimodal data:** When two values tie for highest frequency, both are modes (e.g. {1, 2, 2, 3, 3, 5}).
- **Normal distribution as limit:** As n grows large with p not too close to 0 or 1, the binomial B(n, p) approaches a **normal distribution** N(np, npq). ECAT rarely requires this limit, but recognising it helps with reasoning on multi-step problems.
- **Frequency distributions:** For grouped data with class boundaries, use midpoints m_i = (L_i + U_i)/2 and frequencies f_i. The mean formula becomes μ = Σ(f_i · m_i)/Σf_i; variance uses Σf_i(m_i − μ)² / Σf_i.

#### Common Mistakes
1. Dividing by **n − 1** instead of **n** when the problem specifies a population (or vice versa). Read carefully.
2. Forgetting the **square root** — writing σ² when the question asks for σ.
3. Applying the binomial formula when trials are **not independent** (e.g. sampling without replacement from a small population).
4. Confusing mean = np with variance = np(1 − p); these are two different quantities.
5. Treating grouped and ungrouped data formulas as interchangeable.

#### Worked Micro-Example
**Problem:** Data set {4, 8, 6, 10, 2}. Find mean and standard deviation.
- μ = (4 + 8 + 6 + 10 + 2)/5 = 30/5 = **6**
- Deviations: −2, +2, 0, +4, −4 → squared: 4, 4, 0, 16, 16 → sum = 40
- σ² = 40/5 = 8 → σ = √8 ≈ **2.83**

#### Practice Prompts
1. A die is rolled 10 times. Using the binomial distribution with p = 1/6, compute P(X = 2) and the expected number of sixes.
2. Given grouped data with classes (0–10, 10–20, 20–30) and frequencies (5, 15, 10), find the mean using midpoints 5, 15, 25.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
