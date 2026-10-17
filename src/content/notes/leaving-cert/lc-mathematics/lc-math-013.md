---
exam: leaving-cert
examName: "Leaving Certificate (Established)"
subject: lc-mathematics
subjectName: "Mathematics"
topic: lc-math-013
topicName: "Financial Mathematics and Counting"
weight: 3
country: ireland
generated: "2026-10-17T09:00:00Z"
lastUpdated: "2026-10-17"
diagramPrompt: "Educational diagram of an amortization schedule for a loan, with columns for period, opening balance, interest, repayment and closing balance, and a worked row filled in, white background, exam-style illustration"
---

# Financial Mathematics and Counting — Leaving Certificate (Established) Mathematics Notes

Sections 3.6 and 3.7 pair two topics that share a habit of mind: reading a situation, identifying the structure that generates it, and building a model. Finance questions become an amortization table or a formula substitution. Counting questions become a decision between a permutation and a combination. In both cases the mark is for naming the structure before you compute anything.

## Finance: the four structures

Every financial question in this section is one of four, and identifying which saves the whole question.

**Compound interest / compound growth.** *A* = *P*(1 + *r*)^(*n*), where *P* is principal, *r* is the rate per period and *n* is the number of periods. Used for savings, investment growth and the balance of a savings account.

**Amortization / loan repayment.** Each period interest is charged on the *outstanding* balance and then a fixed amount is repaid. The balance falls over time and the interest portion falls with it, which is the point of the question.

**Straight-line depreciation.** The same absolute amount is written off each period, so the asset's value falls by an equal step. The total written off over the asset's life equals its original value. This is the contrast case to reducing-balance depreciation, and questions often present one and ask for the other.

**Annuities / regular savings.** Fixed amounts paid in regularly, accumulating with compound interest.

### The routine for a loan question

1. Name the outstanding balance at the start of the period.
2. Compute interest = balance × rate.
3. Subtract the repayment: new balance = old balance − repayment, with interest now removed.
4. Repeat for each period, rounding the balance at each step if the question requires it.

The mark scheme routinely requires a **table**. Draw it with columns for period, opening balance, interest, repayment and closing balance, fill in at least one complete row as worked example, and only then state the general entry. A single-line answer to a multi-period question forfeits the working marks even when the final figure is right.

Two errors account for most of the lost marks here:

- **Charging interest on the original principal every period** instead of the falling balance. This produces a larger total interest than the schedule and is the designed trap.
- **Forgetting the direction of time.** If the question says interest is added at the end of the year, the first interest charge applies to the balance at the start of that year. Rounding conventions differ between questions; if the question says to round to the nearest cent at each step, do so and say you have.

### What you should be able to state in words

For any schedule, the examiner frequently asks for a description of the pattern rather than another number: "the interest charged each period decreases, while the amount of capital repaid each period increases". Being able to write that sentence earns marks that a further arithmetic attempt will not.

## Counting principles

**Permutations** count arrangements where order matters. *n*Pr = *n*!/(*n* − *r*)!.

**Combinations** count selections where order does not matter. *n*Cr = *n*!/[*r*!(*n* − *r*)!].

The decision is made by asking a single question: **does swapping two of the chosen items give a different outcome?**

- A committee of six from twelve people — order irrelevant → combination.
- Six prizes for six runners, first place distinct from second — order relevant → permutation.
- A code from digits where 1 must come before 2 — order relevant → permutation.
- Choosing two flavours of ice cream — order irrelevant → combination.

### Adding the restrictions

- **Repetition not allowed** is the default. If the situation allows an item more than once, the counting is different: arrangements of a multiset are *n*! ÷ (*p*! *q*! …) for repeated items.
- **Circular arrangements** divide by the number being arranged, since rotations are equivalent.
- **At least one** conditions are handled by subtraction: count the total, subtract the complement.
- **Restricted positions** — handle by placing the restricted item first, then arranging what remains.

### Probability connections

The syllabus links counting to probability directly: where the sample space contains equally likely outcomes, P = (favourable arrangements) ÷ (total arrangements), and both counts use the same principle. If the favourable count is a combination and the total is also a combination, the factorials cancel in the final form — write the cancellation, it saves time and shows the reasoning.

## Self-check

1. A loan of €10,000 is repaid at €2,000 a year at 5%. Compare the interest in year 1 and year 5. *(Year 1 interest is 10,000 × 0.05 = €500, leaving €8,000 outstanding; year 5's interest is charged on the balance at the start of that year, which is lower, so year 5's interest is smaller. Charging €500 in both years — interest on the original principal — is the designed error.)*
2. A machine costs €40,000 and loses €10,000 of value a year. How many years to zero value, and what kind of depreciation is this? *(Four years, straight-line: the same absolute amount is written off each period, so the value falls by equal steps and reaches zero at the end of the fourth.)*
3. Choosing a three-person committee from eight people — which count, and what is it? *(*n*Cr, because order within a committee does not matter. 8C3 = 56.)*
4. Arranging five people around a round table — which count, and what changes? *(Permutations divided by five, since rotations of the same arrangement are identical. Starting with one person fixed at a position and arranging the remaining four around gives the same answer more safely.)*
5. Why do finance questions ask you to describe the pattern rather than compute one more figure? *(Because the description is a separate marked outcome and tests understanding rather than substitution. "Interest charged each period decreases while capital repaid each period increases" is credit that further arithmetic cannot earn.)*

## Sources

- NCCA Leaving Certificate Mathematics syllabus, examination from 2015 (sections 3.6–3.7): https://curriculumonline.ie/getmedia/f6f2e822-2b0c-461e-bcd4-dfcde6decc0c/SCSEC25_Maths_syllabus_examination-2015_English.pdf
- NCCA Leaving Certificate Mathematics syllabus landing page: https://ncca.ie/en/resources/lc-mathematics-syllabus/

Confirm which levels assess each sub-section on the current papers before you weight your revision time.

## Continue your study

- **[View this topic in your Leaving Certificate (Established) roadmap](/roadmap/?exam=leaving-cert&duration=1mo)** — see where "Financial Mathematics and Counting" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=leaving-cert&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Leaving Certificate (Established) exam overview](/exams/leaving-cert/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/leaving-cert/lc-mathematics/)** — browse sibling topics in this subject