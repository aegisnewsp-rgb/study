---
exam: lat
examName: LAT (Law Admission Test)
subject: analytical-reasoning
subjectName: Analytical Reasoning
topic: ar-1
topicName: Logical Deduction (Syllogisms)
weight: 5
country: pakistan
generated: "2026-03-24T08:32:08.020972"
lastUpdated: "2026-09-21"
diagramPrompt: "Educational diagram illustrating Logical Deduction (Syllogisms) with clear labels, white background, exam-style illustration"

---

# Logical Deduction (Syllogisms)

### 🟢 Lite — Quick Review (1h–1d)
> Skip the prose and learn the four sentence shapes — every syllogism reduces to A, E, I, O.

A **categorical syllogism** is two premises forcing one conclusion, judged only on form, not on whether anyone in the premises actually exists. LAT asks: *given these premises, does the conclusion necessarily follow?* Train the eye to recognise the four canonical sentences first.

| Form | Reads as | Distributes |
|------|----------|-------------|
| **A** (Universal Affirmative) | All S are P | Subject only |
| **E** (Universal Negative) | No S are P | Subject + Predicate |
| **I** (Particular Affirmative) | Some S are P | Neither |
| **O** (Particular Negative) | Some S are not P | Predicate only |

Three structural rules carry 80% of the marks: the middle term must be distributed at least once, a negative premise demands a negative conclusion, and two negative premises produce nothing valid.

> 💡 **High-Yield Memory Hook — "A E I O = All, Every-no, Some-yes, Only-not":** Sing the vowels as a slogan — *A eats (all), E empties (no), I includes (some), O omits (some are not)*. Tie each letter to its distribution in the table above and recall becomes instant.

The fastest exam move is the Venn diagram: three circles, shade what the premises empty, then ask whether the conclusion's region is *forced* into emptiness or existence.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard tier walks through proposition types, the Square of Opposition, validity rules, and one fully-resolved exam item.

#### Anatomy of a Syllogism

Every syllogism has three fixed slots. The **major premise** carries the predicate of the conclusion (the **major term**, P). The **minor premise** carries the subject of the conclusion (the **minor term**, S). The **middle term**, M, appears in both premises and disappears in the conclusion — it is the bridge.

Validity rules, all of which must hold simultaneously:

1. Exactly three terms, used in one sense each (no equivocation).
2. Middle term distributed in at least one premise.
3. Any term distributed in the conclusion must be distributed in its premise.
4. At least one premise must be affirmative.
5. If a premise is negative, the conclusion is negative, and vice versa.
6. Two particular premises do not yield a valid conclusion.
7. A particular conclusion requires a particular premise.

#### The Square of Opposition

| Relation | Pair | What it says |
|----------|------|--------------|
| Contradictories | A↔O, E↔I | One true, one false, always |
| Contraries | A & E | Cannot both be true (can both be false) |
| Subcontraries | I & O | Cannot both be false (can both be true) |
| Subalternation | A→I, E→O | Universal implies its particular |

> 📌 **Formula Check:** "All S are P" = A-proposition. The subject S distributes; predicate P does not. So in "All lawyers are readers", the class *lawyers* is fully covered, but *readers* is only partially tapped.

#### Concept Comparison Matrix

| Concept | What it tests | LAT-style question |
|---------|---------------|---------------------|
| Validity | Whether the form forces the conclusion | "Does II follow from I and II?" |
| Soundness | Validity + all premises factually true | Rarely tested directly; LAT prefers validity |
| Conversion | Swap S and P | E↔I directly; A converts to "Some P are S" only |
| Obversion | Replace P with its complement, flip quality | Always valid for A, E, I, O |
| Contraposition | Swap + obvert | Valid for A and O only |

> ⚠️ **Examiner Trap:** Students convert "All cats are animals" to "All animals are cats" — a classic **illicit conversion**. The move is invalid for A; only E and I convert simply. The valid equivalent is "Some animals are cats".

#### Worked Example in Continuous Prose

Consider the two premises: "All judges are lawyers" and "No lawyers are doctors." A candidate is given two candidate conclusions — (I) "No judges are doctors" and (II) "Some judges are not doctors."

Identify the terms: S = judges, P = doctors, M = lawyers. The first premise is A (All judges are lawyers), the second is E (No lawyers are doctors). Because E distributes both S and P, the middle term "lawyers" is distributed in the second premise — Rule 2 satisfied. The conclusion drawn by transitivity through M is "No judges are doctors", which is itself an E-proposition; it is negative, matching the negative premise, so Rule 5 holds. A Venn diagram with three overlapping circles shades the judges-lawyers overlap entirely inside lawyers and the lawyers-doctors intersection empty; that emptiness propagates to the judges-doctors overlap, forcing conclusion (I) to follow.

Conclusion (II), "Some judges are not doctors," is an O-proposition. The premises give no existential commitment — under the traditional (Boolean-suppressed) reading favoured in LAT answer keys, existential import is denied for universals. Even on the modern (Aristotelian) reading, O is not forced: "Some judges are not doctors" could be true *or* false without contradicting either premise, so it does **not** necessarily follow.

The answer is therefore **(I) only**.

> ⚠️ **Examiner Trap:** Picking "Both I and II" is the favourite wrong answer. Candidates feel (II) must be true because judges cannot be doctors, but logical necessity and intuitive plausibility are different things — syllogism judges only the former.

---

### 🔴 Extended — Deep Study (3mo+)
> Extended tier focuses on figure-dependent moods, immediate inferences, and the two question stems that catch even prepared test-takers.

#### The Four Figures and Their Valid Moods

The figure is set by where the middle term sits in each premise.

| Figure | Major premise | Minor premise | Valid moods (traditional) |
|--------|---------------|---------------|----------------------------|
| 1 | M – P | S – M | Barbara, Celarent, Darii, Ferio |
| 2 | P – M | S – M | Cesare, Camestres, Festino, Baroco |
| 3 | M – P | M – S | Darapti, Datisi, Disamis, Ferison |
| 4 | P – M | M – S | Bramantip, Camenes, Dimaris, Feson |

Mnemonic for Figure 1: *Barbara Celarent Darii Ferio* — the vowels of each mood name (a, e, i, o) reveal the premise and conclusion forms in order. Use the same trick for other figures: every mood's vowels spell the syllogism.

#### Edge Cases and Common Traps

1. **Existential fallacy** — drawing a particular conclusion (I or O) from two universal premises (A and E). On the modern reading, A and E carry no existential import, so the inference collapses.
2. **Illicit major / minor** — distributing a term in the conclusion that was undistributed in its premise. Example: "All cats are mammals; Some pets are cats; therefore Some pets are mammals" commits illicit minor (the minor term "pets" is distributed in the conclusion but undistributed in "Some pets are cats").
3. **Equivocation on "some"** — natural language "some" can mean "a few, not all"; categorical logic fixes it at "at least one, possibly all". This changes how O-conclusions are evaluated.
4. **Drawing only two Venn circles** — three terms require three circles; skipping one hides overlap and falsely validates invalid forms.
5. **Treating validity as truth** — fictional premises in LAT items are common; the conclusion can still validly follow from a story that never happened.

> 💡 **High-Yield Revision Hook:** "Two negatives, no positives; two particulars, no universals" — memorise this single rule and you eliminate a quarter of the wrong options in the conclusion-testing items.

#### Advanced Practice Prompts

**Prompt 1.** Premises: "All senators are politicians" and "Some politicians are not voters." Test two conclusions — (a) "Some senators are voters", (b) "Some senators are not voters". Use Venn diagrams, name the figure, and identify which conclusions necessarily follow.

**Prompt 2.** Premises: "No engineers are painters" and "Some artists are engineers". Evaluate whether "Some artists are not painters" follows. Apply obversion to the first premise, then test the figure, then draw the three-circle diagram.

#### How LAT Actually Tests This

Logical Deduction typically appears as 1–3 standalone items plus 2–4 embedded micro-arguments inside mixed reasoning sets. The dominant question format is a two-conclusion problem with five fixed options: *Only I follows / Only II follows / Both I and II / Neither I nor II / Either I or II*. Roughly 60% of candidates misread "Either I or II" — that option applies only when the two conclusions are **complementary pairs** (one A, one E, sharing S and P). Spotting complementary pairs in under 10 seconds is a high-leverage skill, because most candidates waste minutes testing the pair as if they were independent conclusions.

Allocate roughly 90 seconds per syllogism item on exam day; harder embedded cases can stretch to 3 minutes. Target a 90% accuracy band — the section rewards clean, rule-based work over intuition.

---

## Continue your study

- **[View this topic in your LAT (Law Admission Test) roadmap](/roadmap/?exam=lat&duration=1mo)** — see where "Logical Deduction (Syllogisms)" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=lat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[LAT (Law Admission Test) exam overview](/exams/lat/)** — pattern, eligibility, and syllabus
- **[All Analytical Reasoning notes](/notes/lat/analytical-reasoning/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
