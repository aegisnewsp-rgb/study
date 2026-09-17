---
exam: uii
examName: UI Entrance (Indonesia)
subject: academic-potential
subjectName: Academic Potential
topic: academ-009
topicName: Logical Reasoning — Deductive
weight: 3
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-17"
---

# Logical Reasoning — Deductive

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Deductive reasoning** is the process of drawing a conclusion that *must* be true if the premises are true. In SIMAK UI's Academic Potential subtest, deductive items give you 2–4 short statements (premises) and ask whether a proposed conclusion follows with logical necessity. The three high-frequency argument forms to internalise are *Modus Ponens*, *Modus Tollens*, and the classic categorical syllogism.

- **Premise** — a general statement offered as evidence (dimensionless truth value: T/F).
- **Conclusion** — the proposition derived from premises (dimensionless truth value: T/F).
- **Validity** — structural correctness: if premises are true, conclusion cannot be false.
- **Soundness** — validity *plus* all premises are actually true (only valid form, dimensionless).

| Form | Rule | Notation |
|---|---|---|
| Modus Ponens | If P → Q, and P is true, then Q must be true | (P → Q) ∧ P ⊢ Q |
| Modus Tollens | If P → Q, and Q is false, then P must be false | (P → Q) ∧ ¬Q ⊢ ¬P |
| Categorical Syllogism | Major + Minor premise sharing a middle term force a conclusion | M–P, S–M ⊢ S–P |

> 💡 **High-Yield Memory Hook:** **P-M-T** = **P**remise first, **M**atch middle term, draw **T**ight (necessary) conclusion. For conditionals, remember *affirm-P-get-Q, deny-Q-lose-P*; never flip the arrow.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definitions

A **deductive argument** is a sequence of propositions in which the conclusion is claimed to follow with certainty from one or more **premises**. The argument is **valid** when no interpretation of the terms makes the premises true and the conclusion false simultaneously; it is **sound** only when it is also valid *and* every premise is factually true. The standard connective is **material implication** P → Q, equivalently expressed as ¬P ∨ Q (truth-functional equivalence, dimensionless).

#### Syllogistic Reasoning

The classical **categorical syllogism** uses three terms — *S* (subject), *P* (predicate), and *M* (middle) — distributed across two premises. The four standard categorical forms, remembered by the vowels **A, E, I, O**, dictate which quantifiers ("all", "no", "some") can appear:

| Form | Name | Pattern | Converse Valid? |
|---|---|---|---|
| A | Universal Affirmative | All S are P | No |
| E | Universal Negative | No S are P | Yes (obversion) |
| I | Particular Affirmative | Some S are P | Yes |
| O | Particular Negative | Some S are not P | No |

The syllogism is valid when the middle term is **distributed** (covers every member of its class) in at least one premise, and no term is distributed in the conclusion that was undistributed in its premise.

#### Common Fallacy Comparison Matrix

Students confuse valid forms with their invalid look-alikes. Memorise the asymmetry before the exam:

| Named Form | Pattern | Valid? | Typical Exam Trap |
|---|---|---|---|
| Modus Ponens | P → Q; P; ∴ Q | ✅ Yes | Confused with affirming the consequent |
| Modus Tollens | P → Q; ¬Q; ∴ ¬P | ✅ Yes | Confused with denying the antecedent |
| Affirming the consequent | P → Q; Q; ∴ P | ❌ No | "It rained, so the street is wet" — street wet ≠ certain rain |
| Denying the antecedent | P → Q; ¬P; ∴ ¬Q | ❌ No | "Not a cat, so doesn't purr" ignores other purring animals |
| Undistributed middle | All A are B; All C are B; ∴ All A are C | ❌ No | Middle term B never forces A–C link |

> 💡 **High-Yield Memory Hook:** **MP-MT-OK** — *Modus Ponens affirms P, Modus Tollens denies Q*. Anything else (affirm Q or deny P) is the trap. Mnemonic: *Ponens = Positive antecedent, Tollens = Trow away consequent.*

#### 🎯 Exam-Level Worked Problem

#### Question:
Premise 1: If a student attends every SIMAK preparation class, then the student will pass the simulation test.
Premise 2: Rina did **not** pass the simulation test.
Conclusion: Therefore, Rina did **not** attend every SIMAK preparation class.

Which judgment is correct?
(A) The conclusion is *Always True* (logically necessary).
(B) The conclusion is * True but not certain*.
(C) The conclusion is *Always False*.
(D) The data is insufficient to evaluate.

#### Solution:
Step 1 — Identify the connective: Premise 1 is a material implication, written P → Q, where **P** = "attends every class" (dimensionless truth value) and **Q** = "passes the simulation test" (dimensionless truth value).
Step 2 — Identify the second input: Premise 2 states ¬Q (Rina did not pass).
Step 3 — Match to a valid form: (P → Q) ∧ ¬Q ⊢ ¬P. This is exactly **Modus Tollens**.
Step 4 — Apply: From ¬Q and the conditional, we must conclude ¬P. The argument is **valid**, so the conclusion is *Always True* regardless of whether the premises are actually sound in real life.
Step 5 — Choose the answer: **(A)**.

> ⚠️ **Examiner Trap:** Many students pick (B) thinking "absence of evidence is not evidence of absence," or pick (D) demanding proof that Rina even took the classes. Deduction only asks whether the form forces the conclusion — and Modus Tollens *does* force it. Do not import empirical doubt into a formal-logic question.

#### Step-by-Step Deduction Checklist

1. Translate every sentence into propositional or categorical symbols (P, Q, R, S…).
2. Locate the **middle term** (categorical) or the **shared antecedent/consequent** (conditional).
3. Check distribution rules: middle term distributed at least once, no illicit distribution.
4. Match the pattern against MP / MT / hypothetical syllogism / categorical forms.
5. Mark the conclusion as **Always True**, ** True**, or **Always False** based solely on form.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Categorical Logic at the Limits

The four A-E-I-O forms obey **square-of-opposition** relations that examiners exploit. From "All S are P" (A) you can immediately infer "Some S are P" (I) under **existential import** assumptions, but modern deductive logic treats universal statements as silent on existence — meaning you *cannot* infer a particular from a pure universal. SIMAK UI items occasionally test this exact edge: an "All" premise is followed by a conclusion demanding an existence claim, and the correct answer is ** True** rather than *Always True*.

**Truth-functional expansions** extend P → Q beyond the binary setting. The material conditional P → Q is equivalent to ¬P ∨ Q (De Morgan's twin: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q and ¬(P ∨ Q) ≡ ¬P ∧ ¬Q; all dimensionless Boolean operations). When chains appear — P → Q, Q → R, R → S — the hypothetical syllogism licenses P → S by transitivity of implication.

#### Edge-Case Trap Table

| Advanced Trap | Description | Counter-Move |
|---|---|---|
| Existential fallacy | Concluding "Some S are P" from "All S are P" without an existence premise | Treat the "Some" inference as only true |
| Illicit major | Distributing predicate in conclusion when only undistributed in major premise | Re-check distribution via Venn diagrams before answering |
| Illicit minor | Distributing subject in conclusion but not in minor premise | Same: Venn-diagram verification |
| Equivocation | Using the same word with two meanings across premises | Identify ambiguous term, in many papers the middle |
| Inductive-vs-deductive mix-up | Conclusion is *probable*, not necessary — but the question demands logical certainty | Re-read the stem: "must be true" forces deduction only |

#### Conditional Chains and Hypothetical Syllogisms

1. **Pure hypothetical:** P → Q; Q → R; ∴ P → R (chain rule, valid).
2. **Mixed hypothetical:** P → Q; R → ¬Q; ∴ R → ¬P (transposition, valid).
3. **Disjunctive syllogism:** P ∨ Q; ¬P; ∴ Q (valid).
4. **Constructive dilemma:** P → Q; R → S; P ∨ R; ∴ Q ∨ S (valid, frequently tested).

#### Adjacent-Topic Links

- **Inductive reasoning** — opposite direction; conclusions are probable, not certain.
- **Logical fallacies** — extended taxonomy beyond affirming/denying; relevant for rapid elimination of distractors.
- **Set theory translation** — categorical syllogisms rewrite cleanly as set inclusions: x ∈ A ∧ A ⊆ B ⊢ x ∈ B (dimensionless membership).
- **Necessary vs sufficient conditions** — Q is **necessary** for P when P → Q; Q is **sufficient** for P when Q → P. SIMAK items in many papers swap these in the stem.

#### Two Advanced Practice Prompts

1. Identify the fallacy: "All doctors are readers. Some readers are athletes. Therefore, some doctors are athletes." *Expected diagnosis: undistributed middle.*
2. Evaluate: P → (Q ∧ R), P, ¬Q. Can you derive anything further? *Expected: from P derive Q ∧ R, then contradiction with ¬Q; conclude the premise set is inconsistent, hence Q is impossible.*

#### Final Exam Strategy for SIMAK UI

Deductive items carry **negative marking** and tight time budgets; budget ~45 seconds per item after the first read. Scan the conclusion stem for quantifiers ("all", "some", "no") and conditionals ("if…then", "whenever", "only if"). Translate to symbols mentally, match against MP/MT/hypothetical forms, and only then choose among *Always True / True / Always False*. Treat * True* as the safe default whenever a universal premise is asked to license a particular conclusion without an existence guarantee.

---

## Continue your study

- **[View this topic in your UI Entrance (Indonesia) roadmap](/roadmap/?exam=uii&duration=1mo)** — see where "Logical Reasoning — Deductive" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=uii&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UI Entrance (Indonesia) exam overview](/exams/uii/)** — pattern, eligibility, and syllabus
- **[All Academic Potential notes](/notes/uii/academic-potential/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
