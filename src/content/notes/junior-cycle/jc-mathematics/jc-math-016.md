---
exam: junior-cycle
examName: "Junior Cycle"
subject: jc-mathematics
subjectName: "Mathematics"
topic: jc-math-016
topicName: "Probability"
weight: 3
country: ireland
generated: "2026-10-17T09:00:00Z"
lastUpdated: "2026-10-17"
---

# Probability — Junior Cycle Mathematics Notes

Probability at this level is a small set of rules applied to a written scenario, plus the discipline of counting the sample space correctly. The specification asks you to list or describe the sample space, apply the rules, and give the answer as a fraction, a decimal and a percentage — because the choice of representation is part of what is being assessed.

## Sample spaces

The sample space is the set of all equally likely outcomes. Two rules make or break the calculation.

**Every outcome must be equally likely.** If the outcomes are not equally likely, counting them does not give a probability. This is why "one number from 1 to 100" and "one item from a box of mixed sizes" need different handling, and why a spinner landing on differently-sized sectors needs angles rather than counts.

**Write it down.** Listing the sample space explicitly costs a line and catches almost every error. For two draws from {A, B, C} without replacement, the sample space is AA, AB, AC, BA, BB, BC, CA, CB, CC — nine outcomes, and seeing that AA appears once tells you the draws are not independent.

## The rules

**Sum to 1.** The probabilities of all outcomes in a sample space add to 1. Use it to fill in the branch you did not work out — and use it as a check on your whole solution.

**"or" — add.** P(A or B) = P(A) + P(B) *when the two cannot both happen*. This is the mutually exclusive case.

**"and" — multiply.** P(A and B) = P(A) × P(B | A). Use it for two successive stages.

**When both can happen,** subtract the overlap: P(A or B) = P(A) + P(B) − P(A and B). Forgetting the subtraction double-counts.

**Complement.** P(not A) = 1 − P(A). Far faster than computing P(A) directly when "at least one" is really "not none".

## With and without replacement

The distinction is the single most common source of error, and it is visible in the sample space.

**Without replacement.** The second stage's probabilities depend on the first. Drawing from {1 red, 2 blue}, then a blue first and a blue second is 2/3 then 1/2, not 2/3 then 2/3.

**With replacement.** The bag is restored, so the stages are independent and the second stage's probabilities are unchanged.

Read the wording carefully: "the card is not replaced" versus "the card is replaced". When it is not stated, it is almost always about a single draw, and the question will say so if it matters.

## Tree diagrams

- Every branch probability on a given stage sums to 1.
- The probability of a **path** is the product along it.
- The probability of an **event** covering several paths is the sum of those path products.

Mixing the last two up is the standard loss. "Two blues" from a bag of two red and two blue is 2/4 × 2/3 + 2/4 × 1/3 = 1/3 + 1/6 = 1/2. The answer 2/4 × 2/4 = 1/4 corresponds to one specific path, not the event.

## "At least one"

Read it as a complement. "At least one six when a die is rolled three times" is *not* the same as "one six" — it includes two and three. The complement route avoids the case-by-case counting:

P(at least one six) = 1 − P(no six in three rolls) = 1 − (5/6)³

Two pitfalls. You must count **three** rolls in the complement, not two — this is the most common error in the topic. And P(at least one) is not the same as P(exactly one), which requires case analysis.

## Working through the question

1. **Write the sample space.** List it if it is small.
2. **Identify what is being asked** — a single outcome, a path, or a multi-outcome event.
3. **Choose the rule** — add for mutually exclusive "or", multiply for "and".
4. **Check the branches sum to 1** at each stage.
5. **Give the answer three ways** — fraction, decimal, percentage — if the question asks, or as a natural sanity check.

Fractions should be simplified and, where the question asks, written in the simplest form. An unsimplified fraction loses the final mark even when the reasoning is perfect.

## Common errors

1. **Assuming independence when there is no replacement.**
2. **Adding probabilities that can occur together**, without subtracting the overlap.
3. **Multiplying for an "or" question** where the outcomes are mutually exclusive and should be added.
4. **P(at least one) treated as P(exactly one).**
5. **Not simplifying the fraction.**
6. **Counting outcomes that are not equally likely.**

## Self-check

1. A bag has 3 red and 2 blue counters. One is drawn and kept; the next is drawn. P(two blues)? *(After a blue is drawn the bag holds 3 red and 1 blue, so the second stage is 1/4 not 2/5. Multiplying 2/5 × 2/5 = 4/25 treats the stages as independent, which they are not. The correct answer is 2/5 × 1/4 = 1/10.)*
2. A fair die is rolled twice. P(at least one six)? *(1 − P(no sixes) = 1 − (5/6)² = 1 − 25/36 = 11/36. Note the exponent is 2, one for each roll — forgetting that is the most common error here.)*
3. Two events A and B can occur together. What is P(A or B)? *(*P*(A) + *P*(B) − *P*(A and B). Adding alone counts the overlap twice and gives an answer greater than 1 for small probabilities.)*
4. A spinner has sectors of 90°, 90°, 120° and 60°. Why must you work from the angles rather than count the sectors? *(The outcomes are only equally likely when the angles are equal. Counting gives 2/4 here by coincidence; with sectors of 120°, 120° and 60° the count would give 2/3 while the correct probability of landing on the 60° sector is 60/360 = 1/6. The angle is always the valid basis.)*
5. Why is a probability allowed to be 0 or 1? *(Both are legitimate. 0 means the event cannot occur under those conditions, and 1 means it must. A probability outside 0 to 1 signals a counting error rather than an unusual outcome.)*

## Sources

- NCCA Junior Cycle Mathematics Specification (Statistics and Probability strand): https://curriculumonline.ie/getmedia/6a7f1ff5-9b9e-4d71-8e1f-6d4f932191db/JC_Mathematics_Specification.pdf
- Expectations for Students, by strand: https://www.curriculumonline.ie/junior-cycle/junior-cycle-subjects/mathematics/expectations-for-students/

Confirm the live assessment arrangements and any in-year specification changes on curriculumonline.ie before committing a revision plan.

## Continue your study

- **[View this topic in your Junior Cycle roadmap](/roadmap/?exam=junior-cycle&duration=1mo)** — see where "Probability" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=junior-cycle&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Junior Cycle exam overview](/exams/junior-cycle/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/junior-cycle/jc-mathematics/)** — browse sibling topics in this subject