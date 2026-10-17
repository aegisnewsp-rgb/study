---
exam: leaving-cert
examName: "Leaving Certificate (Established)"
subject: lc-mathematics
subjectName: "Mathematics"
topic: lc-math-014
topicName: "Quadratics, Equations and Inequalities"
weight: 4
country: ireland
generated: "2026-10-17T09:00:00Z"
lastUpdated: "2026-10-17"
diagramPrompt: "Educational diagram of a parabola sketched from its roots and vertex, with the intercepts labelled and the region where the quadratic is negative shaded, white background, exam-style illustration"
---

# Quadratics, Equations and Inequalities — Leaving Certificate (Established) Mathematics Notes

Sections 4.1 to 4.3 cover simultaneous equations, quadratics and inequalities. This is the block where candidates already know the material and still lose marks, almost always through the same four habits: not showing the substitution, not labelling which root is which, and testing the wrong values in an inequality. Each is cheap to correct and each costs marks on questions the candidate could otherwise answer fully.

## Simultaneous equations

Two equations, two unknowns. Three methods, and the marking schemes credit any of them if the working is shown.

**Substitution.** Solve one equation for one variable, then replace that variable in the other. The exam's preferred method when one equation is already arranged to make a substitution easy, which is usually a hint that it is the intended route.

**Elimination.** Multiply or divide the equations so a variable matches, then add or subtract to eliminate it. The choice of add or subtract is decided by the signs — if the coefficients already match in sign, subtract; if opposite, add.

**Graphical.** Plot both lines and read the intersection. This is the method to use when the question asks for a *point* and expects you to identify it on a diagram, and it is worth knowing as a check on the algebraic answer.

### The recurring loss

Candidates write `x = 5` without ever writing the substituted equation. The substitution line **is** the method. Write `x = 5` and then immediately `3(5) + 2y = 16` and then `y = ½`. Three lines, and the marks are there.

Where a question asks what the solution *represents*, write the coordinate pair and then the sentence: "the pair (*x*, *y*) = (5, ½) represents the meeting point of the two lines", or whatever the question specifies. Naming the meaning is a separate mark.

## Quadratics

**Standard form** *ax*² + *bx* + *c* = 0, with *a* ≠ 0.

**Discriminant** *b*² − 4*ac*, and its interpretation:

| Discriminant | Roots | Graph meets the axis |
|---|---|---|
| Positive | Two distinct real roots | Twice |
| Zero | One repeated real root | Tangentially, once |
| Negative | No real roots; two complex conjugates | Not at all |

Stating the discriminant *and* what it means is two marks; stating it alone is one.

### Solving — use the easiest route available

The order of preference matters for accuracy, not just speed:

1. **Factorising**, when the numbers are chosen to factorise. Look for a factor pair of *ac* whose sum is *b*, then factorise into two brackets.
2. **Completing the square**, *x*² + *px* + *q* = 0 becomes (*x* + *p*/2)² = *p*²/4 − *q*. Worth showing at least once, because the exam asks for it explicitly and because it links directly to the turning point.
3. **The quadratic formula**, *x* = [*b* ± √(*b*² − 4*ac*)] ÷ 2*a*, with the calculator.

The quadratic formula is always valid but it always loses the discriminant and substitution marks unless you write the discriminant line before substituting. Write it out; it costs four seconds and it is worth marks on its own.

### Roots as a source of further information

Once you have roots *x*₁ and *x*₂ you have the whole picture of the quadratic, and the exam uses this heavily:

- **Sketch the graph**: *y*-intercept at (0, *c*); x-intercepts at the roots; vertex midway between them at *x* = (*x*₁ + *x*₂)/2; opens upward if *a* > 0.
- **Factor form**: *y* = *a*(*x* − *x*₁)(*x* − *x*₂), which is easier to sketch from than standard form.
- **The discriminant as the minimum value**: the minimum of *ax*² + *bx* + *c* is −Δ/(4*a*), so Δ > 0 means the curve dips below the x-axis.
- **Product and sum of roots**: *x*₁*x*₂ = *c*/*a* and *x*₁ + *x*₂ = −*b*/*a*. Both can answer a question without solving, and doing so where possible is faster and safer.

## Inequalities

Two kinds, and they are solved by different methods.

**Linear inequalities.** Manipulate as equations, then **reverse the inequality sign** whenever you multiply or divide by a negative number. This single rule is the whole of linear inequalities, and forgetting it is the whole of the errors. When multiplying by a negative, turn `<` into `>` and `>` into `<`. Most exams supply the final interval as a choice between several notations, so select the correct one from the list rather than inventing one.

**Quadratic inequalities.** You cannot rearrange a quadratic into the form that gives you a solution region directly. The method is:

1. Bring everything to one side so the expression equals zero.
2. Find the critical values — the roots.
3. Sketch the parabola, or test the intervals between the critical values.
4. Read off where the expression is positive and where it is negative.

**Why the sketch wins.** The parabola has one shape. If it opens upward, it is positive outside the roots and negative between them; if it opens downward, the reverse. Sketching shows all three intervals at once and removes the chance of picking the wrong one.

Testing values works equally well and is quicker on paper: choose a value in each interval, substitute, and note the sign. Choosing a critical value as your test point is the error — it gives zero and tells you nothing.

**Negative discriminants** need care. With Δ < 0 there are no critical values, the sign is constant across all real *x*, and you determine which sign by testing any single value. Skipping straight to "between the roots" when there are no roots produces an empty set and loses the mark.

## Self-check

1. Solve 2*x* + *y* = 11 and *x* − *y* = 1. What full method earns the marks? *(Add the equations to eliminate *y*, giving 3*x* = 12 and *x* = 4. Then substitute into one equation: 4 − *y* = 1, so *y* = 3. The substitution line is the method; writing only the two final values forfeits the working marks.)*
2. A quadratic has discriminant −49. What can you state, and what must you avoid? *(Two complex conjugate roots, no real roots, and the graph never meets the *x*-axis. You must avoid solving for the roots with the quadratic formula unless complex numbers are wanted, and avoid drawing x-intercepts.)*
3. Solve −3*x* > 12. What happens at the division? *(*x* < −4. Dividing by a negative reverses the inequality sign — the most heavily marked single rule in this section.)*
4. Sketch *y* = *x*² − 5*x* + 6 without solving for the *y*-intercept. *(Factorise to (*x* − 2)(*x* − 3): crossings at *x* = 2 and *x* = 3, vertex at (2.5, −0.25), opens upward. The roots are the crossings, not the intercepts — 6 is the *y*-intercept, which is a different point.)*
5. *x*² + 1 > 0 — how do you solve it? *(*All real *x*. The discriminant is negative, so there are no critical values and the sign is constant; substituting *x* = 0 gives 1 > 0, so the inequality holds everywhere. Treating it as if it had two roots produces an empty solution set.)*

## Sources

- NCCA Leaving Certificate Mathematics syllabus, examination from 2015 (sections 4.1–4.3): https://curriculumonline.ie/getmedia/f6f2e822-2b0c-461e-bcd4-dfcde6decc0c/SCSEC25_Maths_syllabus_examination-2015_English.pdf
- NCCA Leaving Certificate Mathematics syllabus landing page: https://ncca.ie/en/resources/lc-mathematics-syllabus/

Confirm which levels assess each sub-section on the current papers before you weight your revision time.

## Continue your study

- **[View this topic in your Leaving Certificate (Established) roadmap](/roadmap/?exam=leaving-cert&duration=1mo)** — see where "Quadratics, Equations and Inequalities" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=leaving-cert&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Leaving Certificate (Established) exam overview](/exams/leaving-cert/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/leaving-cert/lc-mathematics/)** — browse sibling topics in this subject