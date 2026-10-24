---
exam: leaving-cert
examName: "Leaving Certificate (Established)"
subject: lc-mathematics
subjectName: "Mathematics"
topic: lc-math-016
topicName: "The Binomial Theorem and Algebraic Proofs"
weight: 3
country: ireland
generated: "2026-10-17T09:00:00Z"
lastUpdated: "2026-10-17"
diagramPrompt: "Educational diagram showing a Pascal's triangle expansion aligned above the binomial coefficients, highlighting which row supplies the coefficient of a chosen term, white background, exam-style illustration"
---

# The Binomial Theorem and Algebraic Proofs — Leaving Certificate (Established) Mathematics Notes

Sections 4.5 and 4.6 cover two small, self-contained skills that the exam uses as discriminators. The binomial theorem gives you a shortcut to coefficients and to approximations. Algebraic proof asks you to demonstrate that a stated statement is true, using a method the marking scheme names. Both are worth marks to a candidate who can do them and nothing to one who has met them only as formulae.

---

### 🟢 Lite — Quick Review (1h–1d)

#### The binomial theorem

For (*a* + *b*)ⁿ:

*aⁿ* + *n aⁿ⁻¹b* + *n*(*n*−1)/2 *aⁿ⁻²b*² + … + *bⁿ*

The coefficients are the entries of **Pascal's triangle**, where each interior entry is the sum of the two above it. Recognising the pattern is faster and more reliable than reconstructing the formula under time pressure.

#### Finding a particular term or coefficient

1. **General term.** *T*ᵣ⁺¹ = *n*Cᵣ *aⁿ⁻ʳ bʳ*, where *r* counts from 0.
2. **Fix the exponent.** If the question asks for the coefficient of *x⁵*, set the exponent of *x* equal to 5 and solve for the other exponent. That gives *r*.
3. **Write the coefficient line** as *n*Cᵣ multiplied by the numerical powers of *a* and *b*.
4. **Compute it.** Write *n*Cᵣ as *n*!/[*r*!(*n* − *r*)!] rather than reaching straight for the calculator — for one step the written form is clearer and it makes a wrong *r* visible.

The off-by-one on *r* is the standard error. The question says "the fourth term"; that is *T*₄, which means *r* = 3. The question says "the coefficient of *x³*"; that is a constraint on the exponent and *r* follows from solving it. Both are different questions and the phrasing tells you which.

#### Coefficients and sums of coefficients

- **Sum of all coefficients** = set every variable to 1, so (1 + 1)ⁿ = 2ⁿ.
- **Coefficient of *x⁰*** = substitute *x* = 0, which picks out the constant term directly.
- **Sum of coefficients of even powers** = ½[(1+1)ⁿ + (1−1)ⁿ].
- **Sum of coefficients of odd powers** = ½[(1+1)ⁿ − (1−1)ⁿ].

These substitutions are worth memorising; each replaces a multi-line expansion with one line.

#### Approximation for small *x*

If *x* is small, the terms fall away quickly and truncating is accurate. Keep the first term or two and **state the degree of the approximation you have made**. "Approximately *x*⁴ + 6*x*³, taking the first three terms" earns the mark; a bare answer does not.

### 🟡 Standard — Regular Study (2d–2mo)

#### Algebraic proof

Three methods, each with a recognisable trigger.

**Proof by induction.** Use when the statement is indexed: "for all positive integers *n*". Three required parts, and the marking scheme awards a mark for each:

1. **Base case** — verify for *n* = 1.
2. **Inductive hypothesis** — assume the statement holds for *n* = *k*.
3. **Inductive step** — prove it holds for *n* = *k* + 1, using the hypothesis.

Candidates who skip the base case lose a mark outright. Candidates who do not *use* the hypothesis in the inductive step — instead re-deriving everything from scratch — lose the mark for the step as well, because the step has not shown the mechanism induction depends on.

**Proof by contradiction.** Use when the statement is an exclusion: "there are no integers *x* and *y* such that…". Assume the negation, work forward, and reach a contradiction with a known fact. The contradiction must be stated explicitly — "which contradicts *y* > 0, so the assumption is false" is the closing sentence that earns the mark.

**Proof by counterexample.** Use when the statement is a universal claim that can be shown false by a single instance: "*n*² − *n* + 41 is prime for all integers *n*". Find one *n* where it fails. The whole proof is one well-chosen value plus the substitution — and choosing the value is the skill, which usually means testing the obvious candidates first.

#### The √2 irrational proof

The classic contradiction argument, and it appears often: suppose √2 = *a*/*b* in lowest terms. Then *a*² = 2*b*², so *a*² is even, so *a* is even. So *a* = 2*k*, giving 4*k*² = 2*b*², so *b*² is even, so *b* is even. Both *a* and *b* even contradicts lowest terms. Done.

### 🔴 Deep Dive — Mastery & Edge Cases (3mo–2yr)

#### Proof versus verification

Candidates lose marks by *verifying* an identity at a single value and writing "therefore true". Verifying at one point proves nothing about a polynomial identity; it only shows the identity holds there. The exam tests exactly this, and the mark scheme distinguishes "verified for one value" from "proved".

> Verify the live paper structure and specification on curriculumonline.ie and the State Examinations Commission before you fix your revision plan.

---

## Self-check

1. Find the coefficient of *x⁴* in (2*x* + 3)⁶. *(Set the exponent of *x* to 4, so *r* = 4. The coefficient is *n*Cᵣ × 2⁶ = 6C4 × 64 = 15 × 64 = 960. Note the 2⁶, not 2⁴ — the powers of *a* come from the *a*-term, not the *x*-term.)*
2. What is the sum of all coefficients in (3*x* − 2)⁵? *(Set *x* = 1: (3 − 2)⁵ = 1. Each term in the expansion is a coefficient multiplied by a power of *x*, so evaluating at *x* = 1 makes every power equal 1 and leaves the sum of the coefficients.)*
3. Why must the base case appear in a proof by induction? *(It establishes the statement is true at the starting index. Without it the argument shows only that if the statement is true for *n* = *k* then it is true for *n* = *k* + 1* — which is consistent with it being true nowhere.)*
4. You are asked to show *n*² + *n* is always even. Which method, and what is the one-line argument? *(*Direct proof: *n*² + *n* = *n*(*n* + 1), and one of two consecutive integers is even, so the product is even. Contradiction and induction are both available but slower here.)*
5. You verify an identity holds at *x* = 2. What have you actually proved? *(Only that it holds at *x* = 2. A polynomial can agree at a point and differ everywhere else, so verification at one value is not a proof of an identity.)*

## Sources

- NCCA Leaving Certificate Mathematics syllabus, examination from 2015 (sections 4.5–4.6): https://curriculumonline.ie/getmedia/f6f2e822-2b0c-461e-bcd4-dfcde6decc0c/SCSEC25_Maths_syllabus_examination-2015_English.pdf
- NCCA Leaving Certificate Mathematics syllabus landing page: https://ncca.ie/en/resources/lc-mathematics-syllabus/

Confirm which levels assess each sub-section on the current papers before you weight your revision time.

## Continue your study

- **[View this topic in your Leaving Certificate (Established) roadmap](/roadmap/?exam=leaving-cert&duration=1mo)** — see where "The Binomial Theorem and Algebraic Proofs" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=leaving-cert&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Leaving Certificate (Established) exam overview](/exams/leaving-cert/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/leaving-cert/lc-mathematics/)** — browse sibling topics in this subject
