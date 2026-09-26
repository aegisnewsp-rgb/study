---
exam: ucat
examName: "UCAT (University Clinical Aptitude Test)"
subject: ucat-decision-making
subjectName: "Decision Making"
topic: decision-making
topicName: "Syllogisms and Logical Puzzles"
weight: 4
country: uk
generated: "2026-09-26T12:55:00"
lastUpdated: "2026-09-26"
---

# Logical puzzles and syllogisms for UCAT Decision Making

Decision Making gives you 35 questions in 37 minutes (after a 1 minute 30 second timed instruction section), and the marking is not uniform. Single-answer items are worth one mark. Multiple-statement items are worth two marks, and a partially correct response on a multiple-statement item still scores one mark. That marking shape is what makes logical-puzzle and syllogism items worth their weight: the partial-credit floor on a structured item means attempting one is almost always better than guessing blindly.

> Source for subtest size, time, scoring (300–900 scale) and the 1-mark / 2-mark / 1-mark-partial marking: UCAT Consortium, *Test Format*, https://www.ucat.ac.uk/about-ucat/test-format/. The UCAT Consortium notes that the subtest "assesses your ability to apply logic to reach a decision or conclusion, evaluate arguments and analyse statistical information", and that "knowledge of specific mathematical or logical reasoning terminology is not required" — so the techniques below are operational habits rather than formal-logic vocabulary.

## Syllogisms — what is and is not valid

A syllogism is a two-premise argument that aims to draw a conclusion. In the UCAT, the premises are short, a single sentence, and the conclusion has to follow from them alone.

The valid forms you will see again and again:

- All A are B. All B are C. Therefore, all A are C. (Valid — the chain forces overlap.)
- All A are B. Some B are C. Therefore, some A are C. (Valid — the "all" chain pulls A into B, and "some B are C" lets a slice of that intersection reach C.)
- All A are B. No B are C. Therefore, no A are C. (Valid — the A set sits inside B, and B does not overlap C, so A cannot overlap C.)
- Some A are B. All B are C. Therefore, some A are C. (Valid — the slice of A that is in B is in C.)
- Some A are B. No B are C. Therefore, some A are not C. (Valid — the slice of A in B cannot be in C.)

The invalid forms that the test uses as traps:

- All A are B. Some C are B. Therefore, some A are C. (Invalid — A and C might overlap in B but the premises do not force it.)
- All A are B. Some B are not C. Therefore, some A are not C. (Invalid — A might be the slice of B that *is* in C.)
- Some A are B. Some B are C. Therefore, some A are C. (Invalid — the B slice in each premise might not be the same slice.)

The underlying rule: "all" chains force overlap, "some" chains do not. The moment you mix "all" and "some" in a way that requires an extra link, the syllogism is invalid.

## Conditional reasoning — what to keep and what to throw away

Decision Making also tests conditional reasoning: "if P then Q". The UCAT does not require you to name the form, but you need to know which inferences are valid and which are not.

Valid forms:

- **Modus ponens.** P → Q. P is true. Therefore Q is true. (Valid — the rule fires.)
- **Modus tollens.** P → Q. Q is false. Therefore P is false. (Valid — the rule did not fire.)

Invalid forms (the UCAT's most common traps):

- **Affirming the consequent.** P → Q. Q is true. Therefore P is true. (Invalid — many things can make Q true. The rule only fires one way.)
- **Denying the antecedent.** P → Q. P is false. Therefore Q is false. (Invalid — many other things can make Q true.)

A worked example:

> If a patient has appendicitis, they have right lower-quadrant pain. A patient has right lower-quadrant pain.

The conclusion that the patient has appendicitis is invalid. Many conditions cause right lower-quadrant pain. The UCAT will offer this trap as a distractor; learn to spot the direction of the rule.

## Logical puzzles — set logic and ordering

Decision Making also includes short logical puzzles: who sits where, who arrives in which order, which key opens which door. Two habits handle most of them:

- **Convert everything to a small set of constraints.** When the puzzle says "A is not next to B, C is two to the left of D", draw a line of slots or a circle of seats and place what you know for sure. Constraints that are not pinned down belong to a small set of possibilities.
- **Use elimination first.** Before you try to solve for the answer, cross out the choices that contradict any pinned constraint. Often only one or two choices remain, and the rest of the work is to break the tie.

The UCAT does not require you to memorise puzzle taxonomies. It requires you to extract constraints cleanly, which is a habit you can drill.

## Worked example — syllogism validity

```
  Premise 1: All pharmacists are health professionals.
  Premise 2: Some health professionals work in hospitals.
  Conclusion: Some pharmacists work in hospitals.
```

Conclusion valid? No. The premises say pharmacists are a subset of health professionals, and that some health professionals work in hospitals. From that, you cannot conclude that the pharmacists overlap with the hospital workers — nothing says the hospital workers are not all nurses.

A valid version of the same shape would be:

```
  Premise 1: All pharmacists are health professionals.
  Premise 2: All health professionals who work in hospitals are pharmacists.
  Conclusion: All pharmacists work in hospitals.
```

The "all" + "all" pattern forces overlap; "all" + "some" does not. That is the rule the test rewards.

## Worked example — conditional reasoning with the affirming-the-consequent trap

```
  If a laboratory sample is contaminated, the pH reading is outside the safe range.
  The pH reading is outside the safe range.
```

Conclusion: the sample is contaminated. Invalid. This is affirming the consequent. The pH reading can be outside the safe range for reasons other than contamination — a miscalibrated probe, a degraded reagent, a temperature error. The conditional only supports modus ponens (sample is contaminated → pH is outside the range) and modus tollens (pH is not outside the range → sample is not contaminated).

## Worked example — ordering puzzle

Six students — A, B, C, D, E, F — sit in a row of six seats. Constraints:

- A is not at either end.
- B is immediately to the left of C.
- D is two seats to the right of E.
- F is not in seat 1.

Find the arrangement.

Step 1. The "B immediately left of C" block can sit in seats (1,2), (2,3), (3,4), (4,5) or (5,6). Mark each possibility.

Step 2. A is not at either end, so A is in seat 2, 3, 4 or 5.

Step 3. The "D two right of E" block places E in seat k and D in seat k+2. So the pair can be (1,3), (2,4), (3,5) or (4,6). Mark each.

Step 4. Combine. The BC block and the ED block cannot overlap. Try BC at (2,3): then E and D must use seats (1,4) or (4,6). E=1, D=3 collides; E=4, D=6 collides with BC at (2,3)? No: BC is at seats 2 and 3, so D=6 and E=4 fits. A is in seat 5 (since A is not at either end and seats 1, 2, 3, 4 are taken by E, B, C, D). F is in seat 6 — but that collides with D. Try BC at (3,4): then ED can be (1,3) (collides), (2,4) (collides), (4,6) (D collides with BC), so ED does not fit; or ED at (1,3) but D=3 collides with BC. So BC at (3,4) fails.

Try BC at (4,5): ED can be (1,3), (2,4) (collides with BC at 4), (3,5) (collides with BC at 5), (4,6) (collides). Only ED at (1,3) works: E=1, D=3. A is in seat 2, F is in seat 6. Check all constraints: A not at end (seat 2 ✓), B left of C (4,5 ✓), D two right of E (1,3 ✓), F not in seat 1 (seat 6 ✓). The arrangement is E, A, D, B, C, F.

That took a moment to work through. The skill is not the answer; the skill is the constraint-extraction habit. The UCAT tests the habit by giving you a stem with four to six constraints and four or five answer choices, and asking which arrangement is consistent with all of them.

## Common mistakes to correct now

- Treating common sense as proof. The UCAT scores formal validity, not plausibility. A syllogism that sounds right but does not follow is wrong.
- Inserting "all" where the premise says "some". The "all" / "some" distinction is the most common single error.
- Confusing direction on conditional reasoning. If P then Q tells you P → Q. It does not tell you Q → P.
- Skipping structured items because they look long. The partial-credit floor on a multiple-statement item means even an attempt that gets one statement wrong scores one mark.
- Drawing a Venn diagram that overlaps the wrong region. A Venn answer depends on the diagram, not on intuition.

## What to do next

- Drill ten syllogisms a day for a week, focusing on "all A are B, some B are C" patterns and checking each one with a Venn diagram.
- Build a one-page reference card for the four conditional-reasoning forms (modus ponens, modus tollens, affirming the consequent, denying the antecedent) and review it before each Decision Making drill.
- Time one full Decision Making drill at 37 minutes with the official practice tests. Mark any item you spend more than 90 seconds on.
- After the drill, classify every wrong answer as a syllogism error, a conditional error, or a puzzle-extraction error. The error category tells you what to drill next.