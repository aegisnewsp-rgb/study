---
exam: lsat
examName: LSAT India
subject: analytical-reasoning
subjectName: "Analytical-Reasoning"
topic: analyt-006
topicName: "Conditional Logic & Sufficient-Necessary Conditions"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-15"
---

# Conditional Logic & Sufficient-Necessary Conditions

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Conditional logic captures the **if–then** relationship that governs most LSAT Logic Games setup rules. A **sufficient condition (S)** is the trigger (the "if"); its presence **guarantees** the **necessary condition (N)** (the "then"). Symbolically: **S → N**, meaning *S is sufficient for N* and *N is necessary for S*. The single valid rewrite is the contrapositive **¬N → ¬S**; the converse **N → S** and inverse **¬S → ¬N** are invalid.

| Term | Notation | Meaning | LSAT test weight |
|---|---|---|---|
| Sufficient (S) | Antecedent (if-part) | Its truth guarantees N | High — drives "If" rules |
| Necessary (N) | Consequent (then-part) | Required for S to occur | High — drives "Only if" rules |
| Contrapositive | ¬N → ¬S | Logically equivalent to S → N | High — required for inference |
| Converse | N → S | Invalid inference | High — common distractor |

> 💡 **High-Yield Memory Hook:** **"SNaF"** — **S**ufficient = **N**eeds to make something happen, and it's the "**if**" side; flip it and you commit a logical **F**oul. The **only** valid flip is to negate both sides (contrapositive).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

Conditional logic is the spine of every LSAT Logic Games rule-diagram, and roughly **3% of LSAT India Analytical Reasoning questions** test it directly through rule translation and Must Be True inference items.

#### Core Translation Rules

A conditional statement has two halves: the **antecedent** (sufficient side) and the **consequent** (necessary side). The connective word decides which side is which.

- **"If P, then Q"** → P → Q (P sufficient, Q necessary).
- **"Q only if P"** → Q → P (P necessary, Q sufficient — note the reversal).
- **"All P are Q"** → P → Q (universal affirmative becomes a conditional).
- **"No P are Q"** → P → ¬Q (negative universal).
- **"P unless Q"** → ¬Q → P (unless = if not).

#### Concept Comparison Matrix

| Phrasing in stimulus | Diagram | Sufficient | Necessary | Common confusion |
|---|---|---|---|---|
| "If A, then B" | A → B | A | B | Treating "then" as trigger |
| "A only if B" | A → B | A | B | Reversing to B → A |
| "B whenever A" | A → B | A | B | Reading as biconditional |
| "All A are B" | A → B | A | B | Assuming "some A are not B" allowed |
| "A unless B" | ¬B → A | ¬B | A | Reading "unless" as "if" |
| "Just barely" sufficient | (X∧Y) → Z | X∧Y together | Z | Forgetting the AND |

#### Standard Problem Types

1. **Rule translation** — diagram "If / Only if / Unless" stimuli into **S → N** form.
2. **Contrapositive inference** — convert every rule into **¬N → ¬S** to unlock Must Be True answers.
3. **Chain reasoning (transitivity)** — chain **A → B**, **B → C** to derive **A → C**.
4. **Joint sufficiency** — recognise when two triggers must occur together: **(A ∧ B) → C**.
5. **Joint necessity** — recognise when an outcome requires both: **C → (A ∧ B)**.

#### 🎯 Exam-Level Worked Problem

**Question:** A wine merchant stocks exactly three reds — R1, R2, R3 — and exactly three whites — W1, W2, W3. The rules are:

- **Rule 1:** If R1 is stocked, then W2 is not stocked. (R1 → ¬W2)
- **Rule 2:** W3 is stocked only if R2 is stocked. (W3 → R2)
- **Rule 3:** If W2 is not stocked, then R2 is stocked. (¬W2 → R2)

If R1 is stocked, which of the following **must** be true?

(A) R2 is stocked. (B) R3 is stocked. (C) W1 is stocked. (D) W2 is stocked. (E) R1 is stocked only if W3 is stocked.

#### Solution:

1. **Given:** R1 is stocked (true).
2. **Apply Rule 1:** R1 → ¬W2, so R1 triggers ¬W2. Therefore **W2 is NOT stocked**.
3. **Apply contrapositive of Rule 1:** ¬W2 → ¬R1. Since W2 is not stocked, this tells us nothing new about R1 (R1 was already given true — the contrapositive is *consistent*, not contradictory).
4. **Apply Rule 3:** ¬W2 → R2. W2 is not stocked, so **R2 MUST be stocked**.
5. **Apply Rule 2 contrapositive:** W3 → R2, so contrapositive is ¬R2 → ¬W3. We have R2 true, which gives no information about W3.
6. **Check options:** (A) R2 is stocked — confirmed true. (B), (C), (D) cannot be determined. (E) restates R1 → W3, which is unsupported.

#### Correct answer: (A) R2 is stocked.

> ⚠️ **Examiner Trap:** Students frequently pick (D) W2 is stocked because they invert Rule 1 to "If ¬R1 then W2," confusing the **converse** with the contrapositive. The contrapositive of R1 → ¬W2 is W2 → ¬R1, not ¬R1 → W2. Whenever you see Rule 1 trigger, you must **negate** the *consequent*, not the antecedent.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

Conditional reasoning on the LSAT rarely appears as a standalone topic; it is embedded in **every Logic Games setup** and surfaces in **Logical Reasoning** Must Be True and parallel-reasoning questions. Mastering the contrapositive and chain reasoning is what separates a 60th-percentile scorer from a 90th-percentile one.

#### Advanced Traps and Exceptions

1. **Sufficient vs. necessary reversibility** — "If A then B" makes A **sufficient** for B, but A is **not** necessary for B. Other triggers (C, D) may also produce B.
2. **Converse / Inverse invalidity** — From A → B you **cannot** derive B → A or ¬A → ¬B. Distractors exploit this asymmetry roughly 60% of the time in rule-translation questions.
3. **"Only" traps** — "Only A are B" = B → A (B sufficient, A necessary). Many students misread "only" as a softener rather than a directional operator.
4. **Unless subtlety** — "P unless Q" formally equals **¬Q → P** (and equivalently, **¬P → Q**). Students forget the second form when applying the contrapositive.
5. **Joint conditions** — When a rule says "Both A and B must occur for C," the diagram is **(A ∧ B) → C**; one without the other fails to trigger C.
6. **Chained conditionals** — Transitivity (**(P → Q) ∧ (Q → R) ⊢ P → R**) lets you collapse three rules into one master inference, often producing the Must Be True answer directly.
7. **Biconditional reading** — A stimulus worded with "exactly when" or "if and only if" produces **P ↔ Q**, equivalent to **two conditionals**: (P → Q) ∧ (Q → P). Treating it as a single arrow loses half the rule.

#### Connection to Adjacent Topics

Conditional logic is the gateway to **Logical Reasoning Must Be True questions** (where contrapositive chains drive conclusions) and **Logic Games** (where every "if," "only if," "unless," and "whenever" rule becomes a diagram arrow). Strengthen it here and you strengthen approximately **15–18% of your overall LSAT score** indirectly.

#### Practice Prompts

1. Translate: "Every consultant attends the Monday briefing unless they are on vacation. If a consultant misses the Monday briefing, they must submit a written summary." Draw the chain and identify what must be true for a consultant on vacation.
2. Given: **(G → H)**, **(¬H → J)**, **(J → ¬K)**, and **G is true**, derive the **maximum** set of consequences using only contrapositives and transitivity. State which variables' status remains undetermined.

---

## Continue your study

- **[View this topic in your LSAT India roadmap](/roadmap/?exam=lsat&duration=1mo)** — see where "Conditional Logic & Sufficient-Necessary Conditions" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=lsat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[LSAT India exam overview](/exams/lsat/)** — pattern, eligibility, and syllabus
- **[All Analytical-Reasoning notes](/notes/lsat/analytical-reasoning/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
