---
exam: leaving-cert
examName: "Leaving Certificate (Established)"
subject: lc-mathematics
subjectName: "Mathematics"
topic: lc-math-017
topicName: "Polynomial, Exponential and Logarithmic Functions"
weight: 4
country: ireland
generated: "2026-10-17T09:00:00Z"
lastUpdated: "2026-10-17"
diagramPrompt: "Educational diagram showing the transformations y=a^x, y=2^x, y=(1/2)^x and y=2^x+3 side by side, with asymptotes and intercepts labelled, white background, exam-style illustration"
---

# Polynomial, Exponential and Logarithmic Functions — Leaving Certificate (Established) Mathematics Notes

Sections 5.1 to 5.3 ask three things: sketch a polynomial from its defining equation, sketch and transform an exponential or logarithmic curve, and solve an equation in which the logarithm itself is the unknown. The sketching is done by calculator with a table of values; the transformation questions are done from a set of rules the syllabus fixes. The solving question is where the marks are.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Polynomials

Degree determines the shape, and knowing the table gets the sketch marks quickly.

| Degree | Shape | End behaviour |
|---|---|---|
| 0 | Horizontal line | — |
| 1 | Straight line | — |
| 2 | Parabola | Same end behaviour at both ends; opens up if leading coefficient positive |
| 3 | Cubic | Opposite end behaviour; always exactly one real turning point at least |
| 4 | Quartic | Same end behaviour at both ends |

For sketching a polynomial of higher degree than two, the reliable method is a **table of values** on your calculator's statistics table: enter *x*, compute *y*, read the pairs, and plot. Then locate the turning points by zooming in on the table — the calculator's maximum and minimum functions on a restricted range find them exactly.

What a full answer contains: the *y*-intercept, the *x*-intercepts if the range includes them, the end behaviour stated, and the turning points with their approximate coordinates. State the range you searched, because "there is no more turning point between −5 and 5" is only valid if the search range is given.

**Rational functions** appear at Higher level with a vertical asymptote where the denominator is zero and, for higher degrees, an oblique or horizontal asymptote from comparing leading terms. These are the exception to the "polynomial curves are continuous" picture.

### 🟡 Standard — Regular Study (2d–2mo)

#### Exponential functions

*y* = *a*^*x*, with *a* > 1 or 0 < *a* < 1.

Key features: it passes through (0, 1) for every value of *a*; it is never zero and never negative; it has a horizontal asymptote at *y* = 0; it is increasing if *a* > 1 and decreasing if 0 < *a* < 1. That last pair is the identifying feature on a sketch.


#### Logarithmic functions

*y* = logₐ *x* is the inverse of *y* = *a*^*x*. Every feature of the exponential reflects in the line *y* = *x*.

Key features: domain restricted to *x* > 0, which produces a **vertical asymptote at *x* = 0**; it passes through (1, 0); increasing if *a* > 1 and decreasing if 0 < *a* < 1.

The pair is the point of the topic: **what is an asymptote for the exponential is horizontal, and for the logarithm vertical.** Getting those two the wrong way round is the most common sketch error.


#### Transformations

Apply in this order, because the order changes the result:

1. **Horizontal scaling** — *a* to the power of *kx*: *y* = *a*^*kx* compresses by a factor of *k* along the *x*-axis.
2. **Vertical scaling** — multiplying the whole function: *y* = *b a*^*x* stretches by a factor of *b* vertically.
3. **Horizontal shift** — *y* = *a*^*(x−p)* shifts right by *p*. Negative *p* shifts left.
4. **Vertical shift** — *y* = *a*^*x* + *q* shifts up by *q*. Negative *q* shifts down.

The shift rules are the ones candidates get wrong, because the sign is inside the bracket for horizontal shifts and outside for vertical ones. *a*^(x−p) shifts **right** by *p*. The rule of thumb that works: *x* − *p* is zero at *x* = *p*, and that is where the new curve crosses the original one's *y*-axis value.

For logarithms the same rules apply in the same order: logₐ(*kx*) and logₐ(*x* − *p*) and logₐ(*x*) + *q*.

### 🔴 Deep Dive — Mastery & Edge Cases (3mo–2yr)

#### Solving logarithmic equations

The exam's standard item is the one where the logarithm is the unknown. It is solved by a single move: **make the logarithm the subject**, then exponentiate.

> log₂(*x* − 3) + log₂(*x* + 1) = 3

Combine using the law: log₂((*x* − 3)(*x* + 1)) = 3, since log *a* + log *b* = log *ab*.

Make it the subject: (*x* − 3)(*x* + 1) = 2³ = 8.

Solve the quadratic: *x*² − 2*x* − 3 = 8, so *x*² − 2*x* − 11 = 0, giving *x* = 1 ± 2√3.

**Then reject the impossible root.** The domain condition from the original log arguments — *x* > 3 — removes 1 − 2√3. A solution that fails the domain restriction is not a solution, and stating which root is rejected and why earns a mark that candidates forfeit by quoting both.

#### The laws you need

- logₐ *x* + logₐ *y* = logₐ(*xy*)
- logₐ *x* − logₐ *y* = logₐ(*x*/*y*)
- *k* logₐ *x* = logₐ(*xᵏ*)
- logₐ(*xᵏ*) = *k* logₐ *x*

#### The trap: log of a sum

**logₐ(*x* + *y*) ≠ logₐ *x* + logₐ *y*.** The law works on products and quotients, never on sums. A question written to catch this error is common, and the wrong answer always appears as a plausible option.

#### Equations with a variable on both sides

Where *a*^*x* = *b*^*x* and *a* ≠ *b*, take logs of both sides to get *x* log *a* = *x* log *b*, then solve for *x*. Taking logs is what makes a variable-both-sides equation solvable; candidates who try to match exponents directly get nowhere.

## Self-check

1. Where does *y* = 2*^*x* cross the *y*-axis, and what is its asymptote? *(At *y* = 1, since 2⁰ = 1 for every base. The asymptote is *y* = 0, horizontal. That it never touches the asymptote is what identifies the curve as exponential.)*
2. Where does *y* = log₂*x* cross the *y*-axis? *(Nowhere — the asymptote is *x* = 0 and the domain excludes non-positive *x*. This is the mirror image of the exponential and the two asymptote orientations are the easiest thing to swap.)*
3. Does *y* = 3^*(x−4)* shift left or right, and by how much? *(Right by 4. *x* − 4 is zero at *x* = 4, and that is where the shifted curve takes the original curve's value at *x* = 0, which is 1.)*
4. Solve log₃(*x* + 5) = 2. *(Exponentiate: *x* + 5 = 3² = 9, so *x* = 4. Check the domain: *x* + 5 > 0, and 4 satisfies it.)*
5. Why is log(*x* + 1) ≠ log *x* + 1? *(The logarithm laws apply to products and quotients only. There is no law distributing a logarithm over a sum; log(*xy*) ≠ log *x* + log *y* is a related and equally common error, in the opposite direction.)*

## Sources

- NCCA Leaving Certificate Mathematics syllabus, examination from 2015 (sections 5.1–5.3): https://curriculumonline.ie/getmedia/f6f2e822-2b0c-461e-bcd4-dfcde6decc0c/SCSEC25_Maths_syllabus_examination-2015_English.pdf
- NCCA Leaving Certificate Mathematics syllabus landing page: https://ncca.ie/en/resources/lc-mathematics-syllabus/

Confirm which levels assess each sub-section on the current papers before you weight your revision time.

## Continue your study

- **[View this topic in your Leaving Certificate (Established) roadmap](/roadmap/?exam=leaving-cert&duration=1mo)** — see where "Polynomial, Exponential and Logarithmic Functions" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=leaving-cert&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Leaving Certificate (Established) exam overview](/exams/leaving-cert/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/leaving-cert/lc-mathematics/)** — browse sibling topics in this subject
