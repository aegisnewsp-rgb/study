---
exam: uii
examName: UI Entrance (Indonesia)
subject: subject-knowledge
subjectName: Subject Knowledge
topic: subjec-014
topicName: "Probability & Counting Principles"
weight: 3
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-15"
diagramPrompt: "Tree diagram showing two coin tosses, branching to HH, HT, TH, TT with probability 1/4 each at each final outcome, and a separate diagram showing 5 points on a circle with all chords drawn connecting them"

---

# Probability & Counting Principles

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Probability and counting questions on UI Entrance ask two things: how many ways can an arrangement happen, and how likely is that arrangement inside the full sample space. Both answers come from counting objects, then converting counts into a ratio between 0 and 1.

- **Sample space S:** the set of every equally likely outcome. **Event A:** the subset you care about.
- **Classical probability:** P(A) = n(A) / n(S), a dimensionless ratio with 0 ≤ P(A) ≤ 1.
- **Fundamental Counting Principle:** for independent stages with n₁, n₂, …, nₖ choices, total outcomes = n₁ × n₂ × … × nₖ.
- **Permutation (order matters):** nPr = n! / (n − r)!. **Combination (order irrelevant):** nCr = n! / [r!(n − r)!].
- **Independent events:** P(A and B) = P(A) · P(B). **General addition:** P(A or B) = P(A) + P(B) − P(A and B).
- **Complement trick:** P(at least one) = 1 − P(none). Saves minutes on large n.

> 💡 **High-Yield Memory Hook:** **POW-MAC** — **P**ermutation = **O**rdered (lock + key), **C**ombination = **C**lub (order doesn't matter). For probability: **"Multiply if AND, Add if OR, Subtract the overlap."** And for "at least one," always ask **"none first"** so you finish in one subtraction.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Counting Rules

The Fundamental Counting Principle (FCP) is the engine. If stage 1 has n₁ options, stage 2 has n₂ options, and the choices do not restrict each other, the combined count is n₁ · n₂. A 3-digit code from 10 digits with repetition allowed gives 10 × 10 × 10 = 1 000 codes.

When choices shrink later stages (e.g. "no repetition"), each subsequent slot is one smaller than the last. A 3-digit code with **no repeated digit** gives 10 × 9 × 8 = 720 codes. Ignoring the shrinking chain is the most common FCP error.

| Counting tool | Formula | Order matters? | Typical UI wording |
|---|---|---|---|
| FCP (independent) | n₁ · n₂ · … · nₖ | n/a | "in how many ways can …" |
| Permutation nPr | n! / (n − r)! | Yes | "arrange / rank / form a line" |
| Combination nCr | n! / [r!(n − r)!] | No | "select / choose / committee" |
| Circular perm. | (n − 1)! | Yes | "seated around a table" |

#### Probability Rules on a Finite Sample Space

For equally likely outcomes, P(A) = n(A) / n(S). Always confirm equal likelihood before applying this form — biased coins or weighted dice break it.

- **Multiplication rule:** P(A and B) = P(A) · P(B) when A, B are independent.
- **Dependent adjustment:** P(A and B) = P(A) · P(B | A); without replacement, the second denominator shrinks.
- **General addition:** P(A or B) = P(A) + P(B) − P(A and B). For mutually exclusive events the intersection is 0, so the rule collapses to a plain sum.
- **Complement:** P(A′) = 1 − P(A), the fastest path on "at least one" problems.

| Rule | When to use | Equation |
|---|---|---|
| Independent multiplication | Two events with no shared cause | P(A and B) = P(A) · P(B) |
| Conditional | Second event depends on first | P(A \| B) = P(A and B) / P(B) |
| Mutually exclusive addition | Events cannot occur together | P(A or B) = P(A) + P(B) |
| General addition | Overlap possible | P(A or B) = P(A) + P(B) − P(A and B) |
| Complement | "At least one" wording | P(A) = 1 − P(A′) |

#### 🎯 Exam-Level Worked Problem

**Question:** A 4-character password uses the 26 letters A–Z. The first character must be a vowel (A, E, I, O, U), and characters may **not** repeat. What is the probability that a randomly chosen valid password begins with a vowel and ends with a consonant?

#### Solution:

1. Vowels available for slot 1: n₁ = 5. After using one vowel, 25 letters remain.
2. Slot 4 must be a consonant from the 25 letters left. Original consonants = 21.
   - Case A — slot 1 took a vowel: consonants remaining = 21. Slots 2, 3 fill from the 24 letters left after slot 4. Arrangements: 5 × 24 × 23 × 21 = 57 960.
3. Total valid passwords (slot 1 vowel, no repeat, slots 2–3 free): 5 × 24 × 23 × 22 = 60 720.
4. Probability = 57 960 / 60 720 = 21/23 ≈ 0.9130.

> ⚠️ **Examiner Trap:** Students forget that "slot 1 is a vowel" removes a vowel (not a consonant) from the pool, so the consonant count for slot 4 is still 21 only when slot 1 is a vowel. If the question reversed the constraint (slot 1 consonant), the consonant pool would drop by 1 and the probability would change. Always re-draw the pool **after** every fixed choice.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

Probability is bounded: 0 ≤ P(A) ≤ 1. Any computed value outside that window signals a miscount — usually a sample space that is too small (forgetting a stage in FCP) or an event that secretly includes impossible outcomes.

- **"At least one" with large n.** Direct counting across 5, 10, or 50 trials explodes. The complement P(none) stays compact: e.g. P(no sixes in 4 dice rolls) = (5/6)⁴, so P(at least one six) = 1 − (5/6)⁴ ≈ 0.5177.
- **Without replacement.** Probabilities shift each draw. P(2 aces in 5 cards) = (4/52) × (3/51) × … note the shrinking denominator.
- **Conditional vs independent trap.** P(A | B) = P(A) only when A, B are independent. With dependent draws this equality fails, so the multiplication rule must carry the conditional term.

| Trap | What goes wrong | Fix |
|---|---|---|
| Direct "at least one" counting | Enumerates every favourable case | Use 1 − P(none) |
| Mixing nPr with nCr | Overcounts ordered selections by r! | Ask: "does order change the answer?" |
| Assuming independence under sampling | Multiplies without shrinking denominator | Replace P(B) by P(B \| A) |
| Adding non-exclusive events | Counts the overlap twice | Subtract P(A and B) |
| Ignoring no-repetition constraint | Multiplies by original n each slot | Reduce n by 1 per filled slot |
| Reporting P(A) > 1 | Sample space too small | Re-check FCP stages |

#### Connections to Adjacent Topics

Counting feeds the binomial distribution (nCr paths to k successes), Bayesian updates (P(A|B) reverses the conditional), and set theory (Venn diagrams visualise the intersection you subtract). A solid grip on FCP and the complement trick transfers directly to genetics cross counting, committee-versus-leadership splits, and digit-formation questions that recur in UI Entrance's quantitative block.

#### Advanced Practice Prompts

1. From the digits {1, 2, 3, 4, 5} with no repetition, how many 5-digit numbers are divisible by 4? (Hint: divisibility by 4 depends on the last two digits.)
2. Five cards are drawn without replacement from a standard 52-card deck. Find P(exactly one king and at least one heart). (Hint: split by hearts-king overlap and apply the complement within the king condition.)

---

## Continue your study

- **[View this topic in your UI Entrance (Indonesia) roadmap](/roadmap/?exam=uii&duration=1mo)** — see where "Probability & Counting Principles" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=uii&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UI Entrance (Indonesia) exam overview](/exams/uii/)** — pattern, eligibility, and syllabus
- **[All Subject Knowledge notes](/notes/uii/subject-knowledge/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
