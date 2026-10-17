---
exam: junior-cycle
examName: "Junior Cycle"
subject: jc-mathematics
subjectName: "Mathematics"
topic: jc-math-013
topicName: "Quadratic Equations, Sequences and Series"
weight: 4
country: ireland
generated: "2026-10-17T09:00:00Z"
lastUpdated: "2026-10-17"
---

# Quadratic Equations, Sequences and Series — Junior Cycle Mathematics Notes

Two topics that look apart and share a method: both are about finding an unknown from a pattern, and both reward writing the pattern down before computing anything. Quadratics give you roots that describe a graph; sequences give you a general term that describes a list. In both cases the marks are for identifying the structure and stating the formula you used.

## Quadratic equations

*ax*² + *bx* + *c* = 0, with *a* ≠ 0.

### Solving, in order of preference

**Factorising.** Look for two numbers that multiply to *ac* and add to *b*, then split the middle term and factorise in brackets. This is the method that gets full marks when the numbers were chosen to work, and the exam chooses them to work when it wants to see this method.

**Completing the square.** *x*² + *px* + *q* = 0 becomes (*x* + *p*/2)² = *p*²/4 − *q*. The specification assesses it directly, so do it at least once properly, even if you usually factorise.

**The formula.** *x* = [*b* ± √(*b*² − 4*ac*)] ÷ 2*a*. Always valid. Write the discriminant line *b*² − 4*ac* = … before substituting — it is a mark, and it turns an opaque calculator step into visible reasoning.

### The discriminant

| *b*² − 4*ac* | Roots | Graph and the x-axis |
|---|---|---|
| > 0 | Two distinct real roots | Crosses twice |
| = 0 | One repeated root | Touches at the vertex |
| < 0 | No real roots | Does not meet the axis |

Stating the value *and* its meaning is two marks. Candidates routinely compute the discriminant and stop.

### From roots to a sketch

The roots are where the curve meets the *x*-axis — which is not the same as the *y*-intercept. Given roots *x*₁ and *x*₂:

- **x-intercepts** at (*x*₁, 0) and (*x*₂, 0)
- **Axis of symmetry** at *x* = (*x*₁ + *x*₂) ÷ 2
- **Opens upward** if the leading coefficient is positive
- **Vertex** midway between the intercepts

Writing the curve in factor form, *y* = *a*(*x* − *x*₁)(*x* − *x*₂), makes all of this immediate and is faster than expanding to standard form.

### Equations with unknowns on both sides

Where *x* appears on both sides, factorising usually needs a different move: bring everything to one side first, then factorise. Candidates who try to divide through immediately give up because the two sides do not match.

## Sequences

**Arithmetic** — constant difference. General term *uₙ* = *a* + (*n* − 1)*d*. Sum of the first *n* terms: *Sₙ* = *n*/2 [2*a* + (*n* − 1)*d*], or *n*(*a* + *l*)÷2 where *l* is the last term.

**Geometric** — constant ratio. General term *uₙ* = *a rⁿ⁻¹*. Sum *Sₙ* = *a*(*rⁿ* − 1)÷(*r* − 1), valid for *r* ≠ 1. When *r* = 1 every term is *a* and the sum is *an*.

### Identifying which you have

Divide consecutive terms: if the quotients are constant it is geometric. Subtract consecutive terms: if the differences are constant it is arithmetic. Do both checks before committing — a sequence that looks arithmetic for three terms can diverge, and that is a designed trap.

### Sigma notation

Σ with limits *n* = *a* to *n* = *b*. The summand is the general term; substituting the limits back must reproduce your first and last terms. That substitution is the check that catches an off-by-one, and it is quick.

## Number sequences from a rule

Where the sequence comes from a described rule rather than from a formula, generate four or five terms and then look for the structure. Common patterns: arithmetic, geometric, quadratic (constant second difference), alternating between two behaviours, Fibonacci-style (each term the sum of the previous two), and *n*² or *n*³ terms.

**Constant second differences** is worth being able to use. If the second differences are all equal to *k*, the sequence is quadratic and the leading coefficient of the general term is *k*/2.

## Choosing the right method

The specification expects you to explain your choice, and a justification is marked. When you factorise a quadratic that could also have used the formula, say why: the factors are integers, so factorising is exact and faster. When you use the formula on an awkward quadratic, say that the roots are not integers, so factorising is not available.

That one sentence is often worth a mark and takes ten seconds to write.

## Frequent errors

1. **(*n* − 1)** in the general term, and the *n* − 1 exponent in the geometric one.
2. **Confusing the *y*-intercept with the roots.** *c* gives the intercept at *x* = 0; the roots are where *y* = 0.
3. **Not stating the discriminant**, or stating it without interpreting it.
4. **Using the formula when *r* = 1** and getting 0 ÷ 0.
5. **Writing a sequence sum without saying which formula**, which loses the method mark.
6. **Sigma limits off by one** — always substitute back to check.

## Self-check

1. Solve *x*² − 5*x* + 6 = 0 by factorising. *(*x* − 2)(*x* − 3) = 0, so *x* = 2 or *x* = 3. Note 2 and 3 multiply to 6 and add to 5, which is how you split the middle term.)*
2. What does a discriminant of −15 tell you, and what must you not draw? *(Two complex conjugate roots and no real roots; the curve does not meet the *x*-axis. Drawing intercepts, or sketching two crossings, forfeits marks.)*
3. Find the sum of the first 12 terms of 5, 9, 13, 17, … *(Arithmetic, *a* = 5, *d* = 4. *S*₁₂ = 12/2 × [2(5) + 11(4)] = 6 × 54 = 324. Using 12 instead of 11 in the bracket is the off-by-one that costs a mark.)*
4. Why is *c* in *ax*² + *bx* + *c* not a root of the quadratic? *(*c* is the value of the expression at *x* = 0, so it is the *y*-intercept. Roots are where the expression equals zero, which is where the curve meets the *x*-axis — a different question entirely.)*
5. A sequence is 2, 6, 12, 20, 30, … What is the general term? *(Differences are 4, 6, 8, 10 — second differences of 2, so the leading coefficient is *k*/2 = 1. The pattern is *n*(*n* + 1): 2, 6, 12, 20, 30. Stating the constant second difference is the reasoning that gets you there.)*

## Sources

- NCCA Junior Cycle Mathematics Specification (Algebra and Functions strand): https://curriculumonline.ie/getmedia/6a7f1ff5-9b9e-4d71-8e1f-6d4f932191db/JC_Mathematics_Specification.pdf
- Expectations for Students, by strand: https://www.curriculumonline.ie/junior-cycle/junior-cycle-subjects/mathematics/expectations-for-students/

Confirm the live assessment arrangements and any in-year specification changes on curriculumonline.ie before committing a revision plan.

## Continue your study

- **[View this topic in your Junior Cycle roadmap](/roadmap/?exam=junior-cycle&duration=1mo)** — see where "Quadratic Equations, Sequences and Series" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=junior-cycle&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Junior Cycle exam overview](/exams/junior-cycle/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/junior-cycle/jc-mathematics/)** — browse sibling topics in this subject