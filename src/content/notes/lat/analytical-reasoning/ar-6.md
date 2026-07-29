---



exam: lat
examName: LAT (Law Admission Test)
subject: analytical-reasoning
subjectName: Analytical Reasoning
topic: ar-6
topicName: Coding-Decoding
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.022784"
lastUpdated: "2026-07-29"
diagramPrompt: "Educational diagram illustrating Coding-Decoding with clear labels, white background, exam-style illustration"




---

# Coding-Decoding

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Coding-Decoding tests your ability to crack a hidden rule that turns one word into another, then apply (or reverse) that rule on a new word. The cipher is always logical — letter shifts, alphabet reversals, positional arithmetic, or analogical pairing — never random.

**Core idea:** A=1, B=2, …, Z=26. A "forward shift by 3" maps A→D, B→E, Y→B, Z→C (wrap-around). An "opposite letter" maps A↔Z, B↔Y, C↔X — computed as **27 − position**.

#### High-yield LAT pointers:

- Identify the rule from the given pair *before* looking at options.
- Watch for direction: "code of DOG" needs forward application; "code of X is given, find DOG" needs decoding.
- Wrap-around trips most students: Z+1 = A, not 27.

| Shift type | Rule | Example (CAT → ?) |
| --- | --- | --- |
| Forward +1 | Each letter +1 | DBU |
| Reverse | 27 − position | XZG |
| Reverse alphabet | A↔Z, B↔Y | XZG |

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### How LAT Frames the Question

LAT pairs a coded word with its original (e.g., "CAT is coded as DBU"), then asks the code of a new word or the word matching a code. The four-option MCQ format means one rule generates one answer; eliminating wrong rule-types is half the battle.

#### The Five Rule Families

- **Letter Shift:** Uniform forward/backward step applied to every letter. CAT → DBU is +1.
- **Reverse Coding (Atbash):** Each letter becomes its mirror across the alphabet midpoint. Position `p` becomes `27 − p`. A↔Z, M↔N, so CAT → XZG.
- **Number Coding:** Letters are read as numbers (A=1, …, Z=26). Codes become sums, products, or position sums. Example: DOG → 4+15+7 = 26.
- **Substitution:** A fixed one-to-one letter map, in many papers defined by a keyword or sample pair.
- **Analogical Coding:** Two coded pairs share the same transformation; apply the *same* logic to a third word. CAT:DBU :: DOG:? → EPH.

#### Direction Matters

"Coded form" = apply the rule forward. "Decoded form" = invert the rule. +3 forward decoding means −3 backward.

#### Common LAT Traps

| Trap | What examiners exploit | Fix |
| --- | --- | --- |
| Wrap-around | Z+1 should be A | Modulo 26 arithmetic |
| Vowel vs consonant split | Different shifts for each group | Test vowels separately |
| Direction inversion | Forward rule applied backward | Re-read the stem |
| Non-uniform shift | +1, −2, +3 alternating | Write out each letter |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Mixed Rules

Harder LAT items combine two rules. A word can be letter-shifted *and* reversed in order, or numerated then re-coded (e.g., sum of positions → letter at that position). When a single rule fails, test hyphens: positional pattern + letter shift, or number-coding + substitution.

#### Worked Micro-Example

If **BRAIN is coded as 2-18-1-9-14** and **TRAIN is coded as 20-18-1-9-14**, the rule is "write each letter's alphabetical position" (number coding). So **PLAIN → 16-12-1-9-14**. If instead BRAIN→CSBJO, rule is +1 uniform: PLAIN→QMBJO. Both are valid LAT patterns.

#### Connections to Adjacent Topics

- **Series Completion** shares the alphabet-shift mechanic; coding questions in many papers hide inside series.
- **Direction Sense / Blood Relations** rarely overlap, but the decoding habit of "infer rule, then apply" transfers to all LAT Analytical Reasoning.
- **Syllogisms** don't overlap directly, but the logical-rigour discipline is the same.

#### Exam Strategy for LAT

| Parameter | LAT expectation |
| --- | --- |
| Weight in Analytical Reasoning | ~3% |
| Typical questions per paper | 1–3 |
| Time per question | 45–60 seconds |
| Difficulty distribution | 1 easy + 1–2 moderate |

#### Two practice prompts to attempt before test day:

1. If **CLOUD → DQPVFT**, what is the code of **STORM**?
2. In reverse coding, what 5-letter word becomes **XZEVM**?

> Trap to internalise: when two letters seem to follow different rules, the question is *positional* — first letter +1, last +1, middle +0, for example. Never force a uniform shift if the evidence rejects it.

---

## Continue your study

- **[View this topic in your LAT (Law Admission Test) roadmap](/roadmap/?exam=lat&duration=1mo)** — see where "Coding-Decoding" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=lat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[LAT (Law Admission Test) exam overview](/exams/lat/)** — pattern, eligibility, and syllabus
- **[All Analytical Reasoning notes](/notes/lat/analytical-reasoning/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
