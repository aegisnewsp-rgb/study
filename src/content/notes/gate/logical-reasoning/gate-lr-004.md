---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-004
topicName: "Assertion & Reason"
tier: unified
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "An advanced decision matrix for Assertion & Reason: rows represent statement truth (true/false), columns represent reason truth (true/false), cells show the resulting option (A/B/C/D/E) and whether the explanation link is required. Includes examples of each cell."
country: india
generated: 2026-05-26
lastUpdated: "2026-09-07"
---

# Assertion & Reason

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Assertion & Reason (A&R) questions present two linked statements — an **Assertion (A)** and a **Reason (R)** — and ask you to judge each statement's truth and whether R actually explains A. The five standard response options are fixed across GATE and similar exams. Most candidates lose marks by skipping the **independent truth-evaluation step** and jumping straight to causal judgement.

- **Core mechanism:** Evaluate A and R separately (True/False), then test the **explanation relation** between them.
- **Option (1) requires two conditions simultaneously:** both statements true AND R logically/explanatorily accounts for A.
- **High-yield rule:** If A is false, option (1) is auto-rejected — even if R is true and beautifully written.
- **Quick counter-example test:** If you can construct a case where A holds but R is irrelevant, the explanation link fails.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Question Format

GATE places A&R under the **General Aptitude (GA) – Logical Reasoning** slot, contributing roughly 2% of total marks. In standard papers **1–2 questions** appear per paper, carrying 1 mark each (no negative marking in GA). Each stem contains two statements separated by a colon or line break, followed by the five fixed response options.

#### Two-Step Decision Procedure

**Step 1 — Independent truth evaluation.** Decide whether A is true and whether R is true. Treat them as separate propositions. Do not let the plausibility of one contaminate your judgement of the other.

**Step 2 — Explanation link test.** Only if both are true, ask: *Does R logically entail, cause, or sufficiently account for A?* Mere topic overlap is insufficient. R must be a **sufficient condition** for A, not merely a **necessary condition** or a **correlation**.

| Scenario | A true? | R true? | R explains A? | Correct option |
| --- | --- | --- | --- | --- |
| Classic cause-effect pair | Yes | Yes | Yes | (1) |
| Two true but unrelated facts | Yes | Yes | No | (2) |
| Assertion factual, Reason flawed | Yes | No | — | (3) |
| Assertion wrong, Reason correct | No | Yes | — | (4) |
| Both statements factually wrong | No | No | — | (5) |

#### Propositional Logic Connection

When R is framed as a conditional ("If X, then Y"), apply **Modus Ponens** (X → Y, X ⊢ Y) or **Modus Tollens** (X → Y, ¬Y ⊢ ¬X) to test whether R genuinely supports A. A common trap is offering R in the wrong direction — R can be a **necessary** but not **sufficient** condition for A.

#### Standard Traps

- **Plausibility bias:** Both statements sound scientific, so option (1) is selected without checking the link.
- **Direction error:** R explains the *opposite* of A, or A is the cause of R rather than its effect.
- **Partial truth:** R contains a subtle factual error (wrong unit, wrong sign, wrong exception) making it false overall.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

The cleanest A&R items separate cleanly into options (1)–(5), but examiners occasionally insert **ambiguous** cases where the truth value depends on interpretation. When A contains a quantifier ("all", "some", "no") and R contradicts that quantifier, the evaluation becomes order-sensitive. A second edge case: **circular reasoning**, where R essentially restates A in different words. Even when both are true, option (1) fails because R provides no independent explanatory ground.

#### Connections to Adjacent Topics

A&R overlaps with **Syllogisms** (both test premise–conclusion validity) and with **Data Sufficiency** (both use two-statement structures). The propositional logic underpinning A&R also feeds **Cause-and-Effect reasoning**, where the temporal sequence — *cause precedes effect* — becomes the decisive test. Mastering A&R therefore reinforces your handling of all GA logical-reasoning items.

| Logical relation | R explains A? | Example pattern |
| --- | --- | --- |
| Sufficient condition | Yes | R is enough on its own to guarantee A |
| Necessary condition | No | A can be true even when R is false |
| Correlation (co-occurrence) | No | Two facts that in many papers appear together |
| Contradiction | No | R directly opposes A |
| Restatement / Tautology | No | R is A in different words |

#### Common Mistakes

1. Picking option (1) because both statements "sound right" — without verifying the explanation arrow.
2. Marking R true when it carries a single factual flaw (e.g., wrong year, wrong magnitude).
3. Treating thematic similarity (both about "electricity", both about "photosynthesis") as logical explanation.

#### Practice Prompts

1. *A:* "A convex mirror always forms a virtual image." *R:* "Convex mirrors diverge incoming light rays." → Both true; R directly explains A — option (1).
2. *A:* "India is a republic." *R:* "India gained independence in 1947." → Both true but unrelated — option (2).

#### Exam Strategy

Target **≤ 90 seconds per A&R question**. Read A, decide True/False, mask R, then read R, decide True/False, and only then judge the link. The two-step separation is what separates consistent toppers from candidates stuck around 50% accuracy.

---

## Continue your study

- **[View this topic in your GATE roadmap](/roadmap/?exam=gate&duration=1mo)** — see where "Assertion & Reason" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=gate&duration=1d)** — 1-day sprint covering highest-weight topics
- **[GATE exam overview](/exams/gate/)** — pattern, eligibility, and syllabus
- **[All Logical Reasoning notes](/notes/gate/logical-reasoning/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
