---
exam: uii
examName: UI Entrance (Indonesia)
subject: academic-potential
subjectName: Academic Potential
topic: academ-010
topicName: Logical Reasoning — Inductive
weight: 3
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-15"
---

# Logical Reasoning — Inductive

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Inductive reasoning in the UI Entrance Academic Potential (Potensi Akademik) subtest asks you to extract a hidden rule from a short list of specific cases — figures, numbers, or word pairs — and project it forward to fill in the next term. The conclusion is **probable**, never logically certain, because a single counter-example can break the inferred rule.

- **What the test gives you:** a finite sequence (3–6 terms) or two pairs of elements with a missing third.
- **What you must do:** detect the transformation (add, multiply, square, rotate, alternate) and apply it once more.
- **Output:** a single figure, number, letter, or word that completes the pattern.

| Term | Meaning in this topic |
|---|---|
| Premise | Each given term (number, figure, word) you observe |
| Pattern | The rule that links premises together |
| Inference | The next term predicted from the pattern |
| Generalization | The abstract rule stated without the next term |

> 💡 **High-Yield Memory Hook:** **"See-Few-Then-Rule"**: **S**pot the transformation, check it on the first **F**ew terms, **T**hen extend it. If a new term contradicts the rule you spotted, the rule is wrong — not the term.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Mechanism

Inductive items in SNMPTN/UTUL UJIAN MANDIRI UI papers present a closed system of specific elements and ask for the rule that connects them. Unlike deductive logic, where the conclusion follows with certainty, an inductive conclusion in this test is only **probable**: the candidate infers a general pattern and applies it to one more unseen element within the same item.

#### Pattern Families You Must Recognise

- **Numerical series:** arithmetic progression (AP, common difference d), geometric progression (GP, common ratio r), alternating sub-series (odd-indexed and even-indexed terms follow separate rules), second-difference sequences (quadratic, where Δ² is constant), Fibonacci-like recurrences (each term = sum of two preceding).
- **Figural series:** line rotation by a fixed angle, addition/removal of strokes, multiplication of a sub-element, mirror flips, and color-state toggles.
- **Verbal analogy:** A : B :: C : ? — the operation that maps A to B (synonym, antonym, part-to-whole, tool-to-user) must be reapplied to C.

#### Concept Comparison Matrix

| Feature | Inductive Reasoning | Deductive Reasoning |
|---|---|---|
| Direction of logic | Specific cases → general rule | General rule → specific case |
| Certainty of conclusion | Probable (can be overturned) | Logically certain |
| UI item style | Series completion, analogy | Syllogism, logical equivalence |
| Weakness exposed | Overgeneralization, missed alternation | Invalid premise hidden inside valid form |

#### Solving Steps

1. List the given terms in order and label their index (n = 1, 2, 3…).
2. Compute first differences Δ₁, then second differences Δ₂ if Δ₁ varies.
3. Check for an **alternating** pattern by separating odd and even positions.
4. Test the candidate rule on the last *known* term; if it fits, extend by one.
5. Eliminate choices that break the rule on any earlier term, not just the last one.

#### 🎯 Exam-Level Worked Problem

**Question:** Determine the next number in the series: 3, 6, 11, 18, 27, ?

- (A) 36
- (B) 38
- (C) 40
- (D) 42
- (E) 44

#### Solution:

Step 1 — Compute first differences Δ₁ between consecutive terms:

- 6 − 3 = **3**
- 11 − 6 = **5**
- 18 − 11 = **7**
- 27 − 18 = **9**

The first differences form the sequence 3, 5, 7, 9 — itself an arithmetic progression with common difference **d = 2**.

Step 2 — Extend Δ₁ by one term: the next difference = 9 + 2 = **11**.

Step 3 — Add the new difference to the last term: 27 + 11 = **38**.

#### Answer: (B) 38.

> ⚠️ **Examiner Trap:** Students often spot the surface pattern "+3, +5, +7, +9" but then assume the *next* difference is +11 in arithmetic and select 38 — yet many stop at "looks like odd numbers" and pick 36, which would require adding 9 (repeating the last difference). Always extend by the **pattern of the differences**, not the last difference itself.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Boundary Cases and Edge Patterns

- **Nested patterns:** the differences themselves may form a geometric progression (e.g., 2, 6, 18, 54 → ratios ×3). Always check the *order* of regularity: AP (1st order), quadratic (2nd), exponential (ratio of consecutive Δ₁ is constant).
- **Positional rules:** odd-indexed terms may follow one rule while even-indexed terms follow another (interleaved series). Detect by writing terms in two rows before testing any linear formula.
- **Figural trap by similarity:** two answer choices look almost identical because they differ by one stroke or one rotation step. Count strokes, angles, and symmetry axes — do not rely on gestalt match.
- **Causal induction items:** given an observation (e.g., "All observed UI pass-rate years had intensive try-out periods"), the inductive conclusion is "try-outs raise pass rates" — a probable, not certain, inference. A single counter-example weakens it.

| Trap | Symptom in the item | Correct move |
|---|---|---|
| GP mistaken for AP | Terms grow fast: 2, 4, 8, 16 | Compute ratios, not differences |
| Alternating pattern missed | Series looks noisy: 1, 4, 2, 8, 3, 12 | Split odd/even indices |
| Difference-of-differences stopped early | Δ₁ changes each step | Compute Δ₂ until constant |
| Verbal analogy surface match | Choices share category with C, not B | Re-apply the **A→B operation** |
| Overgeneralization | Premise uses 1–2 cases | Mark inference as probable only |

#### Advanced Practice Prompts

1. **Numerical:** Given 2, 6, 12, 20, 30, ? — identify whether the pattern is quadratic (Δ₁ = 4, 6, 8, 10 → AP) or interleaved, then compute term 6 and justify why an AP-only read fails.
2. **Figural:** A 3×3 figural matrix with the bottom-right cell removed; describe the rule linking rows and columns in two sentences, then state the single transformation that must hold across both axes.

> 📌 **Formula Check:** There is no single universal formula for induction. The working "formula" is **Tₙ = f(n)** where f is whatever closed-form rule (linear, quadratic, exponential, recursive) survives testing on all known terms.

#### Exam-Specific Strategy

Inductive items appear in roughly 2–4 slots of the Potensi Akademik subtest, weighted at 3% of the overall UI Entrance score. Each item carries one mark and must be solved in under 90 seconds. Candidates who clear the easy numerical and analogy items first bank time for the figural matrices, where partial-pattern detection (e.g., "column rule holds in rows 1 and 2 only") is the fastest filter on the answer choices.

---

## Continue your study

- **[View this topic in your UI Entrance (Indonesia) roadmap](/roadmap/?exam=uii&duration=1mo)** — see where "Logical Reasoning — Inductive" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=uii&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UI Entrance (Indonesia) exam overview](/exams/uii/)** — pattern, eligibility, and syllabus
- **[All Academic Potential notes](/notes/uii/academic-potential/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
