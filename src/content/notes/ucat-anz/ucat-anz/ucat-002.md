---
exam: ucat-anz
examName: UCAT ANZ (University Clinical Aptitude Test)
subject: ucat-anz
subjectName: UCAT ANZ
topic: ucat-002
topicName: Decision Making
weight: 5
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-20
---

# Decision Making — UCAT ANZ Notes

Decision Making is the second subtest of the UCAT ANZ. It assesses the candidate's ability to make sound decisions and judgements using complex information. The subtest includes logic puzzles, syllogisms, Venn diagrams, probability, conditional reasoning and recognising assumptions.

> Re-check the live test format and any updates on https://www.ucat.edu.au/about-ucat-anz/test-format/ before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Subtest structure.** A mix of question types: logic puzzles, syllogisms, Venn diagrams, conditional reasoning, probability, recognising assumptions.
- **Time pressure.** Approximately 66 seconds per item — the most time per item of any UCAT subtest.
- **Reading strategy.** Read the question carefully; identify the type of reasoning required.

#### Examiner traps

- Treating logical reasoning as common sense — formal logic rules apply.
- Confusing conditional with biconditional.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Syllogisms

All A are B. All B are C. Therefore, all A are C. (Valid.)
Some A are B. All B are C. Therefore, some A are C. (Valid.)
Some A are B. No B are C. Therefore, some A are not C. (Valid.)

#### Venn diagrams

Use circles to represent sets. Draw the diagram and shade the region that matches the statement.

#### Conditional reasoning

If P then Q. P is true. Therefore Q is true. (Modus ponens — valid.)
If P then Q. Q is false. Therefore P is false. (Modus tollens — valid.)
If P then Q. Q is true. Therefore P is true. (Invalid — affirming the consequent.)
If P then Q. P is false. Therefore Q is false. (Invalid — denying the antecedent.)

#### Probability

Use probability rules: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). P(A ∩ B) = P(A) P(B) for independent events. P(A|B) = P(A ∩ B)/P(B).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Decision Making rewards logic practice

- Logic questions test formal reasoning, not common sense. Practice is essential.
- Time pressure is moderate — the per-item time is generous compared to Verbal Reasoning.

#### Practice pattern

- One Decision Making drill per day.
- Use the official UCAT practice tests.
- Drill syllogism validity, conditional reasoning validity, and Venn diagrams.

#### Common misconceptions (and the correction)

- "All and some are the same." No — "all" is stronger than "some".
- "P and Q mean the same." No — "P and Q" (both true) is different from "P or Q" (at least one true).
- "Modus ponens and modus tollens are the same." No — they have different premises.

#### Specification reference

This subtest is one of four UCAT ANZ subtests. Confirm the live test format and any updates on ucat.edu.au before each cycle.

#### Worked example — syllogism validity

```
  Premise 1: All pharmacists are health professionals.
  Premise 2: Some health professionals work in hospitals.
  Conclusion: Some pharmacists work in hospitals.
```

Conclusion valid? No. The premises establish that pharmacists are a subset of health professionals and that some health professionals work in hospitals. From that, you cannot conclude that the pharmacists overlap with the hospital workers — the hospital workers might all be nurses.

The valid form would be:

```
  Premise 1: All pharmacists are health professionals.
  Premise 2: All health professionals working in hospitals are pharmacists.
  Conclusion: All pharmacists are health professionals working in hospitals.
```

The "all" chains force overlap; the "all" + "some" pattern does not.

#### Worked example — conditional reasoning and the affirming-the-consequent trap

```
  If a patient has appendicitis, then they have abdominal pain.
  A patient has abdominal pain.
```

Conclusion: they have appendicitis. Invalid — this is affirming the consequent. Many conditions cause abdominal pain. The premise "if P then Q" only supports modus ponens (P → Q) and modus tollens (¬Q → ¬P); it does not support the reverse.

The valid forms are:

```
  Modus ponens:    P → Q, P   ⇒  Q
  Modus tollens:   P → Q, ¬Q  ⇒  ¬P
```

#### Worked example — probability with and without replacement

A bag contains 4 red and 6 blue marbles. Two marbles are drawn. Find P(both red).

```
  Without replacement:
    P(1st red) = 4/10
    P(2nd red | 1st red) = 3/9
    P(both red) = 4/10 × 3/9 = 12/90 = 2/15

  With replacement:
    P(both red) = 4/10 × 4/10 = 16/100 = 4/25
```

The denominator changes after the first draw when there is no replacement. With replacement, the denominator stays at 10 for both draws.

#### Worked example — Venn diagram for a three-set problem

Survey 100 patients: 50 take Drug A, 40 take Drug B, 30 take Drug C. 20 take A and B, 15 take B and C, 10 take A and C. 5 take all three.

```
  Region                   | Count
  Only A                   | 50 − 20 − 10 + 5 = 25
  Only B                   | 40 − 20 − 15 + 5 = 10
  Only C                   | 30 − 15 − 10 + 5 = 10
  A ∩ B only (not C)       | 20 − 5 = 15
  B ∩ C only (not A)       | 15 − 5 = 10
  A ∩ C only (not B)       | 10 − 5 = 5
  A ∩ B ∩ C                | 5
  Total                    | 25 + 10 + 10 + 15 + 10 + 5 + 5 = 80
  None                     | 100 − 80 = 20
```

The inclusion-exclusion check: |A ∪ B ∪ C| = 50 + 40 + 30 − 20 − 15 − 10 + 5 = 80 ✓.

#### Common marking-scheme (or scoring) mistakes

- Confusing "all" with "some" in syllogisms. The chain "all A are B, all B are C, so all A are C" is valid; inserting "some" anywhere breaks the chain.
- Concluding P from Q under "if P then Q". This is the affirming-the-consequent fallacy and is invalid.
- Using the union rule P(A ∪ B) = P(A) + P(B) without subtracting the intersection. Independent events are the only case where the intersection term drops out.
- Failing to update the sample space when sampling without replacement. The conditional probability changes after each draw.
- Drawing a Venn diagram with overlapping regions that do not reflect the inclusion-exclusion counts.

#### 20-minute recap before you walk in

- Syllogisms: "all" chains force conclusions; "some" chains do not.
- Conditionals: only modus ponens (P, so Q) and modus tollens (not Q, so not P) are valid.
- Probability: subtract the intersection in P(A ∪ B); divide by the new sample space for "without replacement".
- Venn diagrams: enforce the inclusion-exclusion count before answering.

#### Sub-topics the official preparation guide lists that this note does not cover in detail

The UCAT ANZ preparation materials and the official test-format page also reference the following sub-topics, which are touched on above but deserve separate revision:

- Identifying assumptions: which unstated premise does the argument rely on, and is it justified?
- Evaluating arguments: spotting weak links, unsupported leaps and biased framing.
- Interpreting data presented in tables, charts or short text fragments.
- Recognising logical fallacies such as ad hominem, straw man and false dilemma.

Confirm the live test format and item types on the official UCAT ANZ page before committing revision to a specific item count.

---

*Last updated 2026-09-20. Source: UCAT ANZ Test Format, https://www.ucat.edu.au/about-ucat-anz/test-format/. Awarding body: UCAT ANZ Consortium.*