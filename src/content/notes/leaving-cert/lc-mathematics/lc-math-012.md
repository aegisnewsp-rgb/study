---
exam: leaving-cert
examName: "Leaving Certificate (Established)"
subject: lc-mathematics
subjectName: "Mathematics"
topic: lc-math-012
topicName: "Real and Complex Numbers"
weight: 3
country: ireland
generated: "2026-10-17T09:00:00Z"
lastUpdated: "2026-10-17"
diagramPrompt: "Educational diagram of the complex plane showing the real axis, the imaginary axis, and a point a+bi plotted with its real and imaginary components labelled and the modulus drawn, white background, exam-style illustration"
---

# Real and Complex Numbers — Leaving Certificate (Established) Mathematics Notes

Sections 3.2 and 3.3 do two jobs. Section 3.2 asks you to place a value in the number system that describes it and to say why — a classification question with a short proof attached. Section 3.3 asks you to do arithmetic with complex numbers in Cartesian form and to interpret results geometrically. The classification is easy marks that candidates forfeit by writing the definition instead of the reason; the arithmetic is easy marks forfeited by sign errors.

---

### 🟢 Lite — Quick Review (1h–1d)

#### The real numbers

The real numbers ℝ are built up in layers, and the syllabus expects you to be able to nest them correctly:

ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ

- **ℕ**, the natural numbers, counting: 1, 2, 3 …
- **ℤ**, the integers, all whole numbers positive, negative and zero.
- **ℚ**, the rationals, expressible as a fraction *p*/*q* with *q* ≠ 0. Note that every integer is rational (*n* = *n*/1).
- **ℝ**, the reals, which include everything that cannot be written as a fraction.

**Irrational numbers** are real but not rational. √2, π, e and the cube root of 3 are the standard examples.

The proof that √2 is irrational is worth knowing, because the exam has asked for the argument directly: assume √2 = *a*/*b* in lowest terms, so *a*² = 2*b*², so *a*² is even, so *a* is even, so *a* = 2*k*, so 4*k*² = 2*b*², so *b*² = 2*k*², so *b* is even — contradicting that *a* and *b* were coprime. The contradiction is the point: the assumption of a lowest-terms fraction cannot hold.

**The decimal trap.** A candidate asked "is 0.999… rational?" must reason rather than assert. It equals 1, because let *x* = 0.999…, then 10*x* = 9.999…, so 9*x* = 9, so *x* = 1. A recurring decimal is always rational because it can be written as a fraction — 0.333… = 1/3. The exam uses this to separate candidates who can apply the definition from candidates who can only recognise it.

### 🟡 Standard — Regular Study (2d–2mo)

#### Complex numbers

A complex number is *z* = *a* + *bi*, where *a* is the real part and *b* is the imaginary part, and *i*² = −1.

**The complex plane.** *a* + *bi* is the point (*a*, *b*). The modulus |*z*| = √(*a*² + *b*²) is the distance from the origin; the argument is the angle the point makes with the positive real axis. Being able to plot and read a complex number is often worth a mark on its own.

**Operations in Cartesian form**, *z*₁ = *a* + *bi*, *z*₂ = *c* + *di*:

- **Add/subtract** componentwise: (*a* ± *c*) + (*b* ± *d*)i.
- **Multiply**, FOIL then use *i*² = −1: real part *ac* − *bd*, imaginary part *ad* + *bc*.
- **Divide**: multiply numerator and denominator by the conjugate of the denominator, *c* − *di*. The result is real/real, so the answer comes out in Cartesian form directly. Write the conjugate multiplication as a step.

The recurring sign errors are exactly two: forgetting that *i*² = −1 when reducing, and failing to change *−*di* to *+*di* on the conjugate. Both cost marks that the working had already earned.

**Conjugate and modulus.** The conjugate of *a* + *bi* is *a* − *bi*; their sum and difference are both real; their product |*z*|² is real. *z* + *z̄* = 2*Re*(*z*), *z* − *z̄* = 2*i Im*(*z*), *z z̄* = |*z*|² = *a*² + *b*².

**Powers of i** cycle with period four: *i* = *i*, *i*² = −1, *i*³ = −*i*, *i*⁴ = 1, and then repeat. Any power of *i* can be reduced by taking the exponent modulo 4. Candidates who do not know the cycle spend the question expanding.


#### Quadratic equations in complex numbers

The syllabus connects this block to algebra: a quadratic with no real roots has complex roots *x* = *p* ± *qi*, and these are conjugates, because the coefficients are real. That is the reasoning to state — "the roots are complex conjugates since the coefficients are real".

Working with roots is also how the discriminant is interpreted: negative discriminant, no real roots, two complex conjugates; zero discriminant, one repeated real root; positive, two distinct real roots.

### 🔴 Deep Dive — Mastery & Edge Cases (3mo–2yr)

#### Higher-level extension

**Polar form.** *z* = *r*(cos *θ* + *i* sin *θ*). Useful when the question asks for a modulus and an argument, or for powers of a complex number, where De Moivre's theorem applies: multiplying by (cos *θ* + *i* sin *θ*) corresponds to rotating by *θ* and keeping the modulus. Candidates who need it under this name should know it is nothing more than the addition formulae.

## Self-check

1. Place √2 and 1/3 in the sets that contain them. *(1/3 is rational and therefore real. √2 is real but irrational — it cannot be written as *p*/*q*, which is what "irrational" means; the definition alone is not the answer, the reason is.)*
2. Compute (2 + 3*i*)(1 − *i*). *(2 − 2*i* + 3*i* − 3*i*² = 2 + 5*i*, using *i*² = −1 so that −3*i*² = +3. Dropping the *i*² substitution gives 2 + *i*, which is the standard error.)*
3. Simplify (3 + 4*i*)/(1 − *i*). *(*(3 + 4*i*)(1 + *i*) / ((1 − *i*)(1 + *i*)) = (3 + 3*i* + 4*i* + 4*i*²)/(1 + 1) = (−1 + 7*i*)/2. Show the conjugate multiplication as a line — it is a mark.)*
4. Simplify *i*¹⁷. *(*i*, because 17 = 4×4 + 1. Powers of *i* have period four; expanding by repeated multiplication loses time and invites sign errors.)*
5. Why must the non-real roots of a quadratic with real coefficients come as a pair? *(They are conjugates: if *p* + *qi* satisfies the equation, *p* − *qi* does too, because the coefficients are real and conjugating a zero of a real-coefficient polynomial gives another zero. State this rather than simply asserting that "the roots are ±".)*

## Sources

- NCCA Leaving Certificate Mathematics syllabus, examination from 2015 (sections 3.2–3.3): https://curriculumonline.ie/getmedia/f6f2e822-2b0c-461e-bcd4-dfcde6decc0c/SCSEC25_Maths_syllabus_examination-2015_English.pdf
- NCCA Leaving Certificate Mathematics syllabus landing page: https://ncca.ie/en/resources/lc-mathematics-syllabus/

Confirm which levels assess each sub-section on the current papers before you weight your revision time.

## Continue your study

- **[View this topic in your Leaving Certificate (Established) roadmap](/roadmap/?exam=leaving-cert&duration=1mo)** — see where "Real and Complex Numbers" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=leaving-cert&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Leaving Certificate (Established) exam overview](/exams/leaving-cert/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/leaving-cert/lc-mathematics/)** — browse sibling topics in this subject
