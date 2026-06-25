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
lastUpdated: "2026-06-25"
diagramPrompt: "Educational diagram illustrating Series Completion with clear labels, white background, exam-style illustration"




---

# Series Completion

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Series Completion asks you to extend a finite list of numbers, letters, or figures by detecting the hidden **rule** that links consecutive terms. The fastest path is to compute **consecutive differences first**: a constant difference signals an **Arithmetic Progression (AP)** with formula **aₙ = a + (n−1)d**; a constant **ratio** signals a **Geometric Progression (GP)** with **aₙ = a · rⁿ⁻¹**; a changing but linearly-changing difference signals a **quadratic** pattern with **aₙ = An² + Bn + C**. Letter series use **A=1, B=2 … Z=26**, sometimes reversed. MDCAT tests 3–5 such items, so mastery of AP/GP plus **alternating sub-series** (two interleaved rules) is the highest-yield skill.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### How to Attack a Series Item

1. **List the terms** and compute term-to-term differences.
2. If differences are **constant (d)**, the series is an **AP**.
3. If ratios between successive terms are **constant (r)**, the series is a **GP** — but check both directions because dividing can also yield a stable ratio.
4. If differences themselves change, compute **second differences**. A constant second difference means a **quadratic rule** of the form aₙ = An² + Bn + C; solve for A, B, C using three known terms, then predict the next.
5. If no single rule fits, look for **two interleaved sub-series** — odd positions follow one rule, even positions follow another. MDCAT frequently disguises an AP-of-AP inside this form.

#### Useful Pattern Catalogue

- **Triangular numbers**: Tₙ = n(n+1)/2 → 1, 3, 6, 10, 15, 21 …
- **Square numbers**: n² → 1, 4, 9, 16, 25 …
- **Cubic numbers**: n³ → 1, 8, 27, 64 …
- **Primes**: 2, 3, 5, 7, 11, 13, 17 …
- **Fibonacci**: each term = sum of previous two → 1, 1, 2, 3, 5, 8, 13 …
- **Factorials**: n! → 1, 2, 6, 24, 120 …
- **Digit-sum transforms**: apply f(n) = digit-sum(n) → 12 → 1+2 = 3 → 15 → 1+5 = 6.

#### Letter Series

Convert each letter to its **alphabetical index** (A=1 … Z=26) and apply a numeric rule. Reverse coding (Z=1, Y=2 …) is common when the series runs backward. Skip patterns (every 2nd letter, every 3rd letter) and opposite-pair swaps (A↔Z, B↔Y) appear often.

#### Worked AP Example

Series: 7, 11, 15, 19, **?**. Difference d = 4, so a₅ = 7 + 4·4 = **23**.

#### Worked Quadratic Example

Series: 2, 6, 12, 20, **?**. First differences: 4, 6, 8 → second difference = 2 (constant). Solve 2A = 2 ⇒ A = 1, B = 1, C = 0, so aₙ = n² + n. Thus a₅ = 25 + 5 = **30**.

#### Verification Habit

Before locking an answer, **plug it back** and confirm the rule holds on at least three earlier terms. MDCAT distractors exploit guessed-but-unverified patterns.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases That Trip Students

- **Mixed operations**: +3, ×2, +3, ×2 … — operation alternates, not the values.
- **Recursive with lag**: aₙ = aₙ₋₁ + aₙ₋₃ — depends on a term two steps back, not one.
- **Position-indexed powers**: aₙ = nⁿ — 1¹, 2², 3³, 4⁴ = 1, 4, 27, 256.
- **Digit concatenation**: 1, 12, 123, 1234, … — pattern is in the digits themselves.
- **Two interleaved GPs**: e.g., 2, 6, 4, 24, 16, 120 … (odd positions: ×2; even: ×5).
- **Figure series**: rotation by 45°, reflection across axis, addition of one dot per step — visual, but the same “verify the rule” principle applies.

#### Common Mistakes (Exam-Specific)

- Confusing GP ratio **direction** when terms shrink (1, 3, 9 → ratio 3; 9, 3, 1 → ratio ⅓).
- Using **non-consecutive** terms to estimate d in AP, which silently breaks the formula.
- Forgetting that **letter series** may use reverse coding — A=26, B=25 … — when the visible letters run Z, Y, X …
- Extending a guessed pattern **without verifying** against the first three given terms.

#### Adjacent Topics Worth Linking

- **Coding–Decoding** uses the same A=1…Z=26 alphabet map.
- **Number Analogy** shares the AP/GP toolkit but compares two sequences side-by-side.
- **Mathematical Operations** (BODMAS-based) appears when series embed +/−/×/÷ on digit sums.

#### Practice Prompts

1. Find the next term: **3, 6, 18, 72, ?** — (GP, r = 3 → answer **216**).
2. Find the next term: **B, E, J, Q, ?** — letter indices 2, 5, 10, 17; differences 3, 5, 7 → next difference 9 → index 26 → **Z**.

#### MDCAT Strategy

Series items are **time-efficient** once the rule is identified — budget roughly 45–60 seconds per question. In MDCAT Logical Reasoning, 3–5 such questions appear, contributing roughly 4% of the overall paper weight. Read all options before computing: the correct rule often matches the *order of magnitude* in the choices, eliminating implausible candidates immediately.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
