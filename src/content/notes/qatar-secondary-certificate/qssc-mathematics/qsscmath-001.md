---
exam: qatar-secondary-certificate
examName: Qatar General Secondary Education Certificate
subject: qssc-mathematics
subjectName: Mathematics
topic: qsscmath-001
topicName: "Algebra — Quadratics and Polynomials"
weight: 5
country: qatar
generated: "2026-09-21T10:00:00"
lastUpdated: "2026-09-21"
---

# Algebra — Quadratics and Polynomials — Qatar Secondary Certificate Mathematics Notes

Quadratics and polynomials are the spine of the MoEHE Advanced-track Mathematics curriculum at Grade 12. The MoEHE 2018 Mathematics Curriculum Standards publish quadratics, polynomial identities, the Remainder and Factor Theorems, polynomial long division, and partial fractions as the core algebra strand at advanced track (MoEHE Mathematics Standards, pp. 50-52). Algebra together with Calculus carries around 69 percent of the marks at the Grade 12 advanced terminal, so confidence here is the single largest determinant of the terminal Mathematics grade.

> Verify the live assessment weighting, the new unified Grade 10 science curriculum introduced from the 2026-2027 academic year, and any track-specific changes on https://www.edu.gov.qa/ before planning revision around the figures below.

---

### Lite — Quick Review (1h-1d)

#### Core facts in one pass

- **Standard form:** a quadratic is ax^2 + bx + c = 0 with a not 0.
- **Quadratic formula:** x = (-b +/- sqrt(b^2 - 4ac)) / 2a, valid for all real a, b, c with discriminant D = b^2 - 4ac.
- **Discriminant cases:** D > 0 two distinct real roots, D = 0 one repeated root, D < 0 two complex conjugate roots.
- **Factor theorem:** (x - r) is a factor of P(x) if and only if P(r) = 0.
- **Remainder theorem:** the remainder when P(x) is divided by (x - r) is P(r).
- **Partial fractions:** write a rational expression as a sum of simpler fractions whose denominators are the linear or irreducible quadratic factors of the original denominator.

#### Examiner traps

- Forgetting the +/- branch when applying the quadratic formula.
- Confusing "factor" with "root" - x = 2 is a root, (x - 2) is a factor.
- Dividing out a common factor from numerator and denominator before partial fractions - this is what makes the partial fractions unique.
- Stopping after finding one root of a quadratic with leading coefficient not 1.

---

### Standard — Regular Study (2d-2mo)

#### Quadratics — solution methods

Three reliable paths to the roots of ax^2 + bx + c = 0:

1. **Factoring:** rewrite as a(x - p)(x - q) = 0, then x = p or x = q. Fastest when the discriminant is a perfect square and the factors are integers.
2. **Completing the square:** rewrite as a(x + b/(2a))^2 = (b^2 - 4ac) / (4a), then take square roots. Required form for "vertex of the parabola" questions.
3. **Quadratic formula:** general method, works for any real coefficients. The sign of the discriminant determines the nature of the roots.

For application problems, always label the unknown with units, write the equation from the word problem, then solve.

#### Polynomials — long division and the Remainder and Factor Theorems

Polynomial long division works exactly like numeric long division. Divide 2x^3 - 5x^2 + 4 by (x - 3):

```
            2x^2 + x + 3
         ___________________
(x - 3) | 2x^3 - 5x^2 + 0x + 4
         2x^3 - 6x^2
         ---------
                x^2 + 0x
                x^2 - 3x
                --------
                     3x + 4
                     3x - 9
                     ------
                         13
```

Quotient 2x^2 + x + 3, remainder 13. The Remainder Theorem says the remainder is also P(3) = 2(27) - 5(9) + 4 = 54 - 45 + 4 = 13. Quick check passes.

The Factor Theorem is the special case: (x - r) is a factor iff P(r) = 0. Synthetic division is the short-form of long division when dividing by (x - r).

#### Partial fractions

Given (5x + 7) / ((x + 1)(x + 3)) = A/(x + 1) + B/(x + 3), clear denominators to get 5x + 7 = A(x + 3) + B(x + 1). Set x = -1: -5 + 7 = 2A so A = 1. Set x = -3: -15 + 7 = -2B so B = 4. Check: 1/(x + 1) + 4/(x + 3) = (x + 3 + 4x + 4) / ((x + 1)(x + 3)) = (5x + 7) / ((x + 1)(x + 3)). Correct.

For irreducible quadratic factors (x^2 + bx + c that does not factor over the reals), the partial fraction has a linear numerator: (px + q) / (x^2 + bx + c).

---

### Deep — Long-Term Mastery (1mo-6mo)

#### Why this strand carries the marks

Algebra feeds every other strand at advanced track: calculus differentiation rules reduce to manipulating polynomial, exponential and logarithmic expressions, integration by partial fractions is built on this material, and the rational expressions in curve sketching need confident factoring. In the MoEHE curriculum standards, Algebra and Calculus are explicitly grouped in a single strand with the published Grade 12 advanced weighting of around 69 percent of the Mathematics paper.

#### Exam technique

- State the discriminant before quoting the roots - it tells the examiner which case applies and avoids lost method marks.
- For polynomial division, write the dividend with all powers of x present (use 0x, 0 as needed) - skipping a power causes off-by-one errors.
- For partial fractions, the cover-up method is faster than equating coefficients for distinct linear factors; use equating coefficients when there is a repeated factor or an irreducible quadratic.
- Leave answers in exact form unless the question asks for decimals. Surd answers at the MoEHE terminal paper typically outscore rounded equivalents.

#### Common misconceptions (and the correction)

- "b^2 - 4ac is the formula." No - b^2 - 4ac is the discriminant. The formula is x = (-b +/- sqrt(D)) / 2a.
- "The Remainder Theorem works only for linear divisors." It works for any divisor (x - r). For (x^2 + 1) the remainder is a linear polynomial ax + b and the theorem becomes P(i) = ai + b.
- "If discriminant is negative the equation has no solutions." The equation has no real solutions; it has two complex solutions that come in conjugate pairs.

#### Specification reference

Source: MoEHE Curriculum Standards for the State of Qatar, Mathematics KG to Grade 12 (MoEHE, 2018), https://cdn-files.abegs.org/abegs-marsad-prod/uploads/c7a1839c-fd4e-401c-87dd-d6f3baac8cd5.pdf, pp. 50-52. Confirm the live assessment weighting, the new unified Grade 10 science curriculum, and any track-specific changes on https://www.edu.gov.qa/ before committing a revision plan to a student.

---

*Last updated 2026-09-21. Source: MoEHE Qatar Mathematics Curriculum Standards KG-G12 (2018), https://cdn-files.abegs.org/abegs-marsad-prod/uploads/c7a1839c-fd4e-401c-87dd-d6f3baac8cd5.pdf. Track regulation and the Grade 12 terminal-exam weighting must be re-checked on https://www.edu.gov.qa/ before committing a revision plan to a student (qatar).*
