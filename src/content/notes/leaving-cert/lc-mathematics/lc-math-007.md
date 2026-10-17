---
exam: leaving-cert
examName: "Leaving Certificate (Established)"
subject: lc-mathematics
subjectName: "Mathematics"
topic: lc-math-007
topicName: "Probability, Binomial and Normal Distributions"
weight: 4
country: ireland
generated: "2026-10-17T09:00:00Z"
lastUpdated: "2026-10-17"
diagramPrompt: "Educational diagram of a probability decision tree showing two stages of drawing without replacement from a bag, with branch probabilities written on each edge and the path probability as the product of the branches, white background, exam-style illustration"
---

# Probability, Binomial and Normal Distributions — Leaving Certificate (Established) Mathematics Notes

Sections 1.4 to 1.6 move from the arithmetic of probability to the use of two named distributions. The arithmetic is a small set of rules you can hold in your head; the distributions are lookup work plus a decision about which distribution the question has given you. The marks sit mostly in the middle step — stating the values of the parameters before computing — and in the interpretation sentence afterwards.

## The three rules, and when each applies

**Addition rule, mutually exclusive.** *P(A or B) = P(A) + P(B)* when A and B cannot both happen. If they can both happen, you need the second rule instead, and adding alone double-counts the overlap.

**Addition rule, not mutually exclusive.** *P(A or B) = P(A) + P(B) − P(A and B)*. The subtraction is the whole point; omitting it is the classic error.

**Multiplication rule.** *P(A and B) = P(A) × P(B | A)*. Use it for two stages. The conditional probability *P(B | A)* is what makes the second stage of a tree depend on the first.

**Conditional probability.** *P(A | B) = P(A and B) ÷ P(B)*. Read the conditioning carefully — *P(A | B)* and *P(B | A)* are different quantities and the exam reverses them deliberately.

### Tree diagrams

The exam's staple two-stage item is: draw, note the outcome, do not replace, draw again. Three procedural rules carry the marks.

- Branch probabilities on each stage sum to 1.
- The second stage's branches depend on the first — redrawn from the reduced bag, not the original.
- The probability of a **path** is the product along that path; the probability of an **event** spanning several paths is the sum of those path probabilities. Mixing these up is the most common single loss in this topic.

Where a question adds "given that the first was red", you are being asked for a conditional probability. Compute the restricted sample space directly — condition on the event and recompute — rather than running a third formula on top of an unconditional one.

## The binomial distribution

Use it when the scenario has **a fixed number of independent trials, two outcomes each, and a constant probability of success**. If all three hold, do not build a tree; read the distribution.

The parameters are *n* (number of trials), *p* (probability of success in one trial), *r* (number of successes being asked about). The marking scheme typically awards one mark for identifying and stating *n*, *p* and *r*, and one or more for the value. Skipping the identification forfeits marks you had already earned.

Read the question's wording carefully to find which of the four forms is wanted:

- *P(X = r)* — exactly this many.
- *P(X ≤ r)* — at most this many.
- *P(X ≥ r)* — at least this many.
- *P(k < X < m)* — between these, computed as a difference of cumulative values.

"At most 3" is inclusive. "Fewer than 3" is the same as "at most 2". Off-by-one errors here cost a full mark on an otherwise perfect answer.

## The normal distribution

Use it when a **continuous** measurement is being modelled — heights, masses, times, measurement errors — or when you are asked to approximate a binomial probability with a large number of trials.

Two directions of work:

**Probability given a value.** Convert *x* to a *z*-score: *z* = (*x* − μ) ÷ σ. Look up the cumulative probability, then subtract if you need a one-sided tail. State the direction you are working in; a probability of *P(Z < z)* and *P(Z > z)* are not the same number.

**Value given a probability.** Work backwards from the cumulative table: find the *z* corresponding to the stated probability, then *x* = μ + *z*σ. Note that the table is cumulative in one direction only, so a probability above the halfway point requires a symmetry step first.

Always write the *z*-score line. It is a mark in its own right and it is what lets a marker see your method.

## The continuity correction

When a discrete variable is approximated by the normal, the boundaries shift by half a step. A count of "at most 8 successes" becomes a normal boundary at 8.5, not 8. The question signals the requirement with wording like "approximate using the normal distribution".

The examiner's marking note flags the omitted continuity correction as a recurring error at Higher level. Include it the moment the question asks for an approximation, and state that you have applied it.

## The interpretation sentence

Every distribution answer is followed, in most mark schemes, by a request to interpret it in context. *"The probability that at least three faults occur in a batch is 0.38, so about four in ten batches will contain three or more faults."* A bare number leaves that mark unclaimed. Use a proportion — "roughly one in three" — rather than restating the decimal.

## Self-check

1. A bag holds three red and two blue counters; one is drawn and not replaced, then a second is drawn. Find the probability of two blues. Which rule carries the second stage? *(The multiplication rule with a conditional probability. After a blue is drawn the bag holds three red and one blue, so the second-stage branch is 1/4, not the original 2/5. Multiplying 2/5 by 2/5 treats the stages as independent, which they are not.)*
2. *P*(*X* ≤ 4) versus *P*(*X* < 5) in a binomial question — are they the same? *(Yes. For a count variable, fewer than 5 means 4 or fewer. Where the boundary differs is the interval form: "fewer than 5" is 4 or fewer, "at most 4" is identical, but "at most 5" includes 5.)*
3. When are you justified in reading a binomial distribution rather than building a tree? *(When trials are fixed in number, each trial has two outcomes, trials are independent, and the success probability is constant. If any of the four fails — a varying number of trials, a probability that depends on earlier outcomes, more than two outcomes — the distribution does not apply and you need the tree.)*
4. A binomial probability is to be approximated by the normal. What changes and why? *(The variable becomes continuous, so the boundaries shift by half a step for the continuity correction. Ignoring this is the marked-for error at Higher level.)*
5. A question asks for the probability that a measurement exceeds a threshold. Which direction of table lookup, and what must you write? *(Convert the threshold to a *z*-score, read the cumulative probability, and subtract from one to get the upper tail. Write the *z*-score line — it is a mark, and it makes the direction of your working visible.)*

## Sources

- NCCA Leaving Certificate Mathematics syllabus, examination from 2015 (sections 1.4–1.6): https://curriculumonline.ie/getmedia/f6f2e822-2b0c-461e-bcd4-dfcde6decc0c/SCSEC25_Maths_syllabus_examination-2015_English.pdf
- NCCA Leaving Certificate Mathematics syllabus landing page: https://ncca.ie/en/resources/lc-mathematics-syllabus/

Confirm which levels assess each sub-section on the current papers before you weight your revision time.

## Continue your study

- **[View this topic in your Leaving Certificate (Established) roadmap](/roadmap/?exam=leaving-cert&duration=1mo)** — see where "Probability, Binomial and Normal Distributions" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=leaving-cert&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Leaving Certificate (Established) exam overview](/exams/leaving-cert/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/leaving-cert/lc-mathematics/)** — browse sibling topics in this subject