---
exam: leaving-cert
examName: "Leaving Certificate (Established)"
subject: lc-mathematics
subjectName: "Mathematics"
topic: lc-math-018
topicName: "Trigonometric Functions and Calculus"
weight: 5
country: ireland
generated: "2026-10-17T09:00:00Z"
lastUpdated: "2026-10-17"
diagramPrompt: "Educational diagram showing a sine and a cosine curve over one period with amplitude, period, midline and phase shift labelled, alongside the matching triangle on the unit circle, white background, exam-style illustration"
---

# Trigonometric Functions and Calculus — Leaving Certificate (Established) Mathematics Notes

Sections 5.4 and 5.5 are the two Higher-level end blocks: sketching and transforming trigonometric functions, then differentiating and integrating. Both are small in content and large in marks, because the procedures are fixed and the marks are for showing the chain rule and setting up the integral correctly.

## Trigonometric functions: the sketch

Every trigonometric sketch is determined by four quantities, and stating them is most of the answer:

**Amplitude** — half the difference between the maximum and the minimum. In *y* = *a* sin(*bx* + *c*) + *d*, it is |*a*|.

**Period** — 2π / |*b*|. The horizontal compression factor is |*b*|.

**Midline** — *y* = *d*, because the whole curve oscillates about it.

**Phase shift** — −*c* / *b*. A phase shift to the **left** is written with a positive *c*, which is the opposite of the exponential convention in section 5.3 and is worth marking in your own notes.

With those four you can draw the curve without a calculator. Where accuracy is required, use a table on the calculator over one period.

### Identities you need

- sin²*x* + cos²*x* = 1
- tan*x* = sin*x* / cos*x*
- sin 2*x* = 2 sin*x* cos*x*
- cos 2*x* = cos²*x* − sin²*x* = 1 − 2 sin²*x* = 2 cos²*x* − 1

Solving a trigonometric equation almost always reduces to one of these. For sin *x* = sin *y*, the general solutions are *x* = *y* + 2*n*π or *x* = π − *y* + 2*n*π — and omitting the second family is the standard loss, because a question that asks for solutions in a stated interval usually wants both.

## Calculus: differentiation

**Power rule.** *y* = *xⁿ* differentiates to *n x*ⁿ⁻¹.

**The derivatives to know without looking anything up:**

- d/d*x* (sin *x*) = cos *x*
- d/d*x* (cos *x*) = −sin *x*
- d/d*x* (tan *x*) = sec²*x*
- d/d*x* (e^*x*) = *e*^*x*
- d/d*x* (ln *x*) = 1/*x*

**The chain rule.** If *y* = *f*(*g*(*x*)), then dy/d*x* = *f*′(*g*(*x*)) × *g*′(*x*). Write both steps — the inner derivative and the outer derivative. A mark scheme rewards the two-line form, and it also lets a marker see where a sign error went.

*Example:* *y* = sin(*x*²). dy/d*x* = 2*x* cos(*x*²). The 2*x* is the inner derivative; cos is the outer. Writing "cos(*x*²)" alone loses the mark.

**The product rule.** *y* = *u v* gives dy/d*x* = *u*′*v* + *u v*′. Frequently tested at Higher level.

**The quotient rule.** *y* = *u*/*v* gives dy/d*x* = (*u*′*v* − *u v*′) / *v*².

**Applications.** At a stationary point, dy/d*x* = 0 — solve for *x* and show the value. At a maximum the second derivative is negative; at a minimum, positive. Where the question asks for the *rate* at a point, evaluate the derivative there and give the units. Where it asks for a rate in context — the speed of a particle, the rate of change of a quantity — **state the units and interpret the sign**, because a derivative of −3 m/s in a context where the quantity is a distance is telling you something specific.

Candidates routinely compute the stationary point and omit the interpretation mark. Write the sentence.

## Calculus: integration

**The power rule, reversed.** ∫ *xⁿ* dx = *x*ⁿ⁺¹/(*n* + 1) + *c*, for *n* ≠ −1. The **+ c** is a mark; omitting it loses one.

**The integrals to know:**

- ∫ cos *x* dx = sin *x* + *c*
- ∫ sin *x* dx = −cos *x* + *c*
- ∫ sec²*x* dx = tan *x* + *c*
- ∫ *e*^*x* dx = *e*^*x* + *c*
- ∫ 1/*x* dx = ln|*x*| + *c*

**Definite integrals** evaluate by the fundamental theorem: ∫ from *a* to *b* = *F*(*b*) − *F*(*a*). Write the limits in the working.

**Area under a curve** between two limits is the definite integral. **Area between two curves** is ∫ (top − bottom) dx, and choosing which function is on top is a mark in itself — the diagram or a test point at the midpoint settles it, and choosing wrong gives a negative answer or the wrong region entirely.

**Volume of revolution** by disc or by the calculus route: integrate π*y*² dx where *y* is the radius. State the method you used.

**Rates of change** questions: differentiate, evaluate at the given time, state the units. If the question is about a *decreasing* quantity, the negative derivative needs a sentence saying the quantity is decreasing at that rate.

## Higher-level extensions

**Exponentials and logarithms in calculus** appear with *a*^*x* = *e*^(ln *a* · *x*), so the chain rule handles them directly: d/d*x*(*a*^*x*) = *a*^*x* ln *a*.

**Implicit differentiation** — differentiate both sides of an equation where *y* depends on *x*, treating *y* as a function, then solve for dy/d*x*.

## Errors that recur

1. **Missing *b* in the period.** Period is 2π/|*b|, not 2π.
2. **Swapped sign in cos and sin integrals.** ∫ sin *x* dx = −cos *x*; ∫ cos *x* dx = sin *x*.
3. **Chain rule written as a single step.** The inner derivative is a mark.
4. **Omitting + c** on an indefinite integral.
5. **Subtracting in the wrong order** on a definite integral.
6. **Taking the wrong function as the top curve** in an area-between-curves question.
7. **Giving a derivative without units** where the question is in a physical context.

> Confirm what the current Higher-level papers assess before you commit a revision plan; the pattern and the calculator policy are set by the State Examinations Commission and are published on their site.

---

## Self-check

1. State the amplitude, period and midline of *y* = 3 cos(2*x*) + 4. *(Amplitude 3; period 2π/2 = π; midline *y* = 4. The +4 shifts the curve up, it does not scale it.)*
2. Find the second derivative that makes *x*³ − 6*x* a minimum. *(*y*′ = 3*x*² − 6 = 0 at *x* = ±√2. *y*″ = 6*x*, which is positive at *x* = √2, so the minimum is at *x* = √2 with value *y* = 2√2 − 6√2 = −4√2. You must find the point *and* classify it.)*
3. Differentiate *y* = *e*^(3*x*). *(Chain rule: 3*e*^(3*x*). The 3 comes from the inner derivative; writing *e*^(3*x*) alone loses the mark.)*
4. Evaluate ∫ from 0 to 2 (*x*² + 1) dx. *([*x*³/3 + *x*] from 0 to 2 = (8/3 + 2) − 0 = 14/3. A definite integral does not need the + c, but the substitution limits must be shown.)*
5. A particle's position is *s*(*t*) = *t*³ − 6*t* metres. What is its speed at *t* = 0? *(*s*′(*t*) = 3*t*² − 6, so *s*′(0) = −6 m/s. Speed is the magnitude, 6 m/s; velocity is −6 m/s. Giving the sign without saying what it means costs the interpretation mark.)*

## Sources

- NCCA Leaving Certificate Mathematics syllabus, examination from 2015 (sections 5.4–5.5, Higher level): https://curriculumonline.ie/getmedia/f6f2e822-2b0c-461e-bcd4-dfcde6decc0c/SCSEC25_Maths_syllabus_examination-2015_English.pdf
- NCCA Leaving Certificate Mathematics syllabus landing page: https://ncca.ie/en/resources/lc-mathematics-syllabus/

These sections are assessed at Higher level. Confirm the current paper structure and calculator policy before you fix your revision plan.

## Continue your study

- **[View this topic in your Leaving Certificate (Established) roadmap](/roadmap/?exam=leaving-cert&duration=1mo)** — see where "Trigonometric Functions and Calculus" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=leaving-cert&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Leaving Certificate (Established) exam overview](/exams/leaving-cert/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/leaving-cert/lc-mathematics/)** — browse sibling topics in this subject