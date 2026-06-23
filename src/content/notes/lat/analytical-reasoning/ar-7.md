---



exam: lat
examName: LAT (Law Admission Test)
subject: analytical-reasoning
subjectName: Analytical Reasoning
topic: ar-7
topicName: Series Completion
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.023143"
lastUpdated: "2026-06-23"
diagramPrompt: "Educational diagram illustrating Series Completion with clear labels, white background, exam-style illustration"




---

# Series Completion

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **series completion** item presents a chain of numbers, letters, figures, or a mix, with one or more terms removed; you must recover the missing term(s) by exposing the hidden rule. The single highest-yield move is to **compute the differences between consecutive terms first** — if the differences themselves form an arithmetic progression (AP), the original series is a *second-order* series governed by a constant second difference. For any **letter series**, convert every letter to its alphabetical position (A=1 … Z=26) and analyse it as a number series; for **figure series**, track the count of sides, lines, or rotation angle of each element. The exam routinely tests: (1) AP/GP with a +1 or −1 constant offset, (2) alternating odd/even sub-series, and (3) squares/cubes with a fixed additive nudge. Always substitute the discovered rule back across every visible term before locking the answer.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Idea and Detection Order
Every series is governed by exactly one rule (or two interleaved rules). The fastest detection order is: (1) take **first differences** Δaₙ = aₙ₊₁ − aₙ; (2) take **second differences** Δ²aₙ = Δaₙ₊₁ − Δaₙ; (3) compute **ratios** aₙ₊₁ / aₙ; (4) test for squares, cubes, primes, or Fibonacci-style recurrence. Whichever of these yields a clean constant or a clean second pattern wins.

#### Arithmetic and Geometric Progressions
For an AP, the n-th term is **aₙ = a + (n−1)d**, where *a* is the first term and *d* the common difference; the sum is **Sₙ = n/2 × [2a + (n−1)d]**. For a GP, **aₙ = a × rⁿ⁻¹** and **Sₙ = a(rⁿ − 1)/(r − 1)**, with *r* the common ratio. In LAT items, a pure AP/GP is rare; instead you typically see an AP/GP plus a constant offset (e.g., +3, +7, +11 added to each term) or a ratio series with alternating multipliers (×2, ×3, ×2, ×3…).

#### Alternating and Mixed Series
When odd-positioned terms (1st, 3rd, 5th…) and even-positioned terms (2nd, 4th, 6th…) follow *different* rules, **split the series into two independent sub-series** and solve each on its own. A common trap: trying to force a single rule across the whole sequence. The diagnostic sign is irregular differences whose signs flip in a regular way (e.g., +5, −3, +5, −3).

#### Letter, Coding, and Figure Series
- **Letter-to-number:** A=1, B=2, … Z=26. Once converted, apply the same AP/GP logic. Watch for *wraparound* (e.g., Y, Z, A, B = 25, 26, 27, 28).
- **Position-value relation:** Group number × k ± c, where *k* is a fixed step and *c* a constant offset.
- **Coding series:** Two parallel streams (digits + letters, or vowels + consonants) each obey their own rule — solve both.
- **Figure series:** Count the number of straight lines, curves, or closed regions, and check for rotation (90°, 180°), reflection, or progressive addition/removal of components.

#### Worked Micro-Example
Series: 4, 9, 16, 25, **?**. First differences: 5, 7, 9 → these increase by 2, so the next difference is 11. Missing term = 25 + 11 = **36** (also 6², confirming the square-number rule n²).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Second-Order and Higher-Order Series
When first differences themselves form an AP, the series is **second-order** and is fully described by the second difference *d₂*. The general term can be written as aₙ = a₁ + (n−1)d₁ + (n−1)(n−2)d₂/2. Practical use: if a series visibly "curves" (accelerating or decelerating jumps), compute Δ²aₙ immediately. A constant Δ²aₙ also flags **triangular-number** patterns (1, 3, 6, 10, 15…).

#### Edge Cases and Trap Patterns
- **Primes with a twist:** 2, 3, 5, 7, 11, 13… examiners often add 1 to every other prime, or interleave with squares (1, 4, 9, 16, 25).
- **Fibonacci-type recurrence:** aₙ = aₙ₋₁ + aₙ₋₂. Detect it by checking whether a₃ ≈ a₁ + a₂.
- **Two-operation alternation:** +2, ×3, +2, ×3… — never assume a single operator runs through.
- **Letter wraparound mistakes:** A=1 is correct, but in cyclic jumps treat Z=26 then A=27, not A=0.
- **Off-by-one in options:** the correct answer is often the *previous* plausible-looking number; verify the rule against the **last two visible terms**, not the first two.

#### Connection to Adjacent Topics
Series completion shares its engine with **coding-decoding**, **analogy**, and **syllogistic number rules** in the LAT Analytical Reasoning block. Mastery of difference and ratio analysis here transfers directly to **data-interpretation trend** questions and to the number-grid items that appear in the legal-aptitude numerical sub-section.

#### LAT Exam Strategy
The Analytical Reasoning section carries roughly 3% weightage in LAT, with series completion contributing 2–3 items per paper in MCQ form (4 options, single correct, no negative marking pattern varies by cycle). Allocate **45–60 seconds per item**: spend 20 seconds computing first and second differences, 15 seconds testing for alternation, 15 seconds verifying, and 10 seconds marking. Skip-and-return is recommended if no clean rule emerges within 40 seconds.

#### Practice Prompts
1. Find the missing term: 3, 8, 18, 33, **?**. (Hint: compute first then second differences.)
2. Continue: B, F, K, Q, **?**. (Hint: convert to positions, then compute gaps between consecutive letters.)

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
