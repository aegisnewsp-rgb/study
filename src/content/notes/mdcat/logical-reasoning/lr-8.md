---
exam: mdcat
examName: MDCAT
subject: logical-reasoning
subjectName: Logical Reasoning
topic: lr-8
topicName: Statement and Conclusion
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.121550"
lastUpdated: "2026-09-15"
diagramPrompt: "Educational diagram illustrating Statement and Conclusion with clear labels, white background, exam-style illustration"

---

# Statement and Conclusion

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Statement and Conclusion** is a deductive-reasoning MCQ type where you read one or more factual statements (premises) and judge whether each proposed conclusion is **necessarily true**, **only true**, or **does not follow**. MDCAT places roughly 1–2 questions of this type, contributing about 4% of the Logical Reasoning section, and you in standard papers have ~30 seconds per item.

| Label | Meaning | Test |
|---|---|---|
| **Follows** | Conclusion is guaranteed by the statement(s) | No counter-example exists |
| **Can be true** | Conclusion is consistent with premises | Premises neither confirm nor deny it |
| **Does not follow** | Conclusion needs outside info or overgeneralises | One counter-example disqualifies it |

- Read the premises as the **entire logical universe**; ignore real-world facts not stated.
- Conclusion must be true in **every** case the premises allow — not "most", "in most keys", or "probably".
- Watch qualifiers: *all, some, none, only, always, never, can, probably* — each flips inference strength.
- If a conclusion needs an **unstated premise**, it is really an *assumption*, not a valid conclusion.

> 💡 **High-Yield Memory Hook:** **"F = Full universe, O = One escape"** — *F*ollows only when the conclusion holds across the **F**ull universe of the premise; the moment you can imagine **O**ne case where it breaks, it *does not follow*.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definitions

A **statement** is the given premise — a factual claim the examiner treats as true. A **conclusion** is a proposed claim whose logical status you must judge relative to that premise. The verdict options you'll see on MDCAT are in most keys: *follows*, *does not follow*, and *can be true (can follow)*. A few papers also use *probably follows* for soft inferences.

#### Three Verdict Rules

1. **Follows (must be true):** The conclusion is forced in every world consistent with the statements. One counter-example kills it.
2. **Can be true:** The premises permit the conclusion but do not demand it — choose this when extra facts would be required.
3. **Does not follow:** The conclusion contradicts the premise, overgeneralises, or smuggles in outside knowledge.

#### Qualifier Matrix (commonly confused)

| Qualifier | Logical strength | Common student error |
|---|---|---|
| **All / Every / None** | Universal — strongest | Treating "no X is Y" as implying "all X are not-Y" in both directions correctly, but missing that **some** statements do not follow from **all** statements |
| **Some / A few / Many** | Existential — weakest definite claim | Upgrading "some" to "all" or "most" |
| **Only** | Restrictive — flips direction | Reading "only A are B" as "all A are B" |
| **Always / Never** | Strict universal | Confusing with "in most keys" |
| **May / Can / Probably** | Possibility, not certainty | Marking as *follows* because it sounds reasonable |

#### 🎯 Exam-Level Worked Problem

#### Question:
*Statements:*
1. All pens are erasers.
2. No eraser is a sharpener.

*Conclusions:*
I. No pen is a sharpener.
II. Some erasers can be pens.
III. All sharpeners are pens.

Which conclusions follow?
**(A)** Only I and II
**(B)** Only I
**(C)** Only II and III
**(D)** I, II, and III

#### Solution:

Step 1 — Translate the syllogism. From (1) the set **Pens ⊆ Erasers**. From (2) the set **Erasers ∩ Sharpeners = ∅**. Therefore **Pens ∩ Sharpeners = ∅**.

Step 2 — Test **Conclusion I: "No pen is a sharpener."** Since every pen is an eraser and no eraser is a sharpener, every pen is automatically not a sharpener. ✅ **Follows.**

Step 3 — Test **Conclusion II: "Some erasers can be pens."** Premises are consistent with the case where Pens = Erasers (i.e., every eraser is also a pen). Nothing in (1) or (2) blocks this. ✅ **Can be true.**

Step 4 — Test **Conclusion III: "All sharpeners are pens."** Premises say nothing about what sharpeners are, only that they don't overlap with erasers. A sharpener can be a pencil, a knife, etc. ❌ **Does not follow.**

Step 5 — Match options. Conclusions I and II hold ⇒ Answer **(A)**.

> ⚠️ **Examiner Trap:** Students pick **(D)** because "if no eraser is a sharpener, then every non-eraser thing *can* be a pen" — but the premises give **zero** information about sharpeners' other properties. The trap is treating a **negative** premise as if it implies positive information about the excluded class.

#### Standard Question Formats in MDCAT

- **Single-statement, multiple conclusions:** judge each conclusion independently against the same premise.
- **Two-statement syllogism:** conclusions must follow from the **combined** premises, not from either alone (a classic trap).
- **Assumption-as-conclusion:** the listed "conclusion" is actually an unstated premise required for the argument to work — mark it *does not follow* unless the question explicitly asks for assumptions.

#### Key Steps to Solve in 30 Seconds

1. Underline every **quantifier** (all, some, none, only, always).
2. Build the Venn-diagram in your head for two-statement sets.
3. Test each conclusion for **one counter-example** — find it? → "does not follow".
4. If no counter-example but extra info is needed → "can be true".
5. Only commit to "follows" when the conclusion is impossible to escape.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Conditions

| Edge case | Why it trips students | Correct handling |
|---|---|---|
| **Conclusion is true in real life but unstated** | Real-world knowledge leaks in | Always reason *only* from the given premises |
| **Conclusion uses "therefore" or "so"** | Sounds causal, gets accepted | Causal link must be **stated**, not assumed |
| **Two true premises, false conclusion** | Truth ≠ logical entailment | Validity depends on form, not factual truth |
| **Conclusion weakens "all" to "some"** | Looks weaker, so "safer" | "Some" **follows from "all"**; this is actually valid |
| **Conclusion strengthens "some" to "all"** | Looks stronger, feels right | Invalid — counter-example: some A are B does not give all A are B |
| **Negation reversal** ("No A is B" → "All A are non-B") | Confused with "Some A are not B" | "No A is B" gives "All A are non-B" and "Some A are non-B" |
| **"Only A are B" reading** | Read as "All A are B" | "Only A are B" ⇒ All B are A (direction **flips**) |

#### Connections to Adjacent MDCAT Topics

- **Statement and Assumption:** an *assumption* is an unstated premise; if a "conclusion" is actually needed as a hidden premise, it is an assumption, not a logical consequence.
- **Statement and Inference:** inference questions ask what can be *definitely inferred*; "can be true" answers are in most keys wrong here, unlike in pure Conclusion questions.
- **Syllogisms (deductive logic):** two-statement Conclusion questions are syllogisms in disguise — mastering Venn diagrams for 2-set and 3-set cases transfers directly.
- **Cause and Effect:** watch for conclusions that add a *because* link the premises never stated; that is the #1 trap in MDCAT Logical Reasoning.

#### Advanced Practice Prompts

1. **Three-statement chain:** Given "All A are B", "Some B are C", "No C is D" — determine the status of (i) "Some A are not D", (ii) "All B are C", (iii) "No A is D". *Hint: only (i) is guaranteed; (ii) overgeneralises; (iii) cannot be decided because A can partly fall outside B's overlap with C.*
2. **Negation trap:** "No teacher is a student. Some students are doctors." Is "Some doctors are not teachers" a valid conclusion? *Answer: **does not follow** — doctors can all be non-teachers already, or some can be teachers; the premises don't decide.*

> 📌 **Exam Strategy:** In MDCAT, if a conclusion uses a quantifier **stronger** than the premise (*some* → *all*, *can* → *must*), mark it *does not follow* immediately. If it uses a quantifier **weaker** (*all* → *some*, *must* → *can*), check whether the weaker claim still adds information — if it does, it follows; if it's trivial, it's still valid but lower priority when you must pick.

---

## Continue your study

- **[View this topic in your MDCAT roadmap](/roadmap/?exam=mdcat&duration=1mo)** — see where "Statement and Conclusion" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=mdcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[MDCAT exam overview](/exams/mdcat/)** — pattern, eligibility, and syllabus
- **[All Logical Reasoning notes](/notes/mdcat/logical-reasoning/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
