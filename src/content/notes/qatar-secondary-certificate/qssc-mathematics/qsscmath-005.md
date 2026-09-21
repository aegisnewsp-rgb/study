---
exam: qatar-secondary-certificate
examName: Qatar General Secondary Education Certificate
subject: qssc-mathematics
subjectName: Mathematics
topic: qsscmath-005
topicName: "Calculus — Differentiation"
weight: 5
country: qatar
generated: "2026-09-21T10:00:00"
lastUpdated: "2026-09-21"
---

# Calculus — Differentiation — Qatar Secondary Certificate Mathematics Notes

Differentiation is the heart of calculus at the MoEHE Grade 12 advanced track. The MoEHE 2018 Mathematics Curriculum Standards publish limits and continuity, the definition of the derivative, differentiation rules (power, product, quotient, chain), implicit differentiation, derivatives of trigonometric, exponential and logarithmic functions, critical points, optimisation and related rates (MoEHE pp. 55-58). Differentiation together with Integration dominates the ~69 percent Algebra and Calculus strand of the Grade 12 advanced Mathematics paper.

> Verify the live assessment weighting and the new unified Grade 10 science curriculum introduced from the 2026-2027 academic year on https://www.edu.gov.qa/ before planning revision.

---

### Lite — Quick Review (1h-1d)

#### Core facts in one pass

- **Definition:** f'(x) = lim (h -> 0) of [f(x + h) - f(x)] / h.
- **Power rule:** d/dx x^n = n x^(n - 1).
- **Product rule:** d/dx [u * v] = u' v + u v'.
- **Quotient rule:** d/dx [u / v] = (u' v - u v') / v^2.
- **Chain rule:** d/dx f(g(x)) = f'(g(x)) * g'(x).
- **Standard derivatives:** d/dx sin x = cos x; d/dx cos x = -sin x; d/dx e^x = e^x; d/dx ln x = 1/x; d/dx a^x = a^x ln a.

#### Examiner traps

- Forgetting the chain rule when differentiating sin(2x) — answer is 2 cos(2x), not cos(2x).
- Sign error on the quotient rule (it is u'v - uv', not plus).
- Reporting only the x-coordinate of a maximum or minimum — the question often asks for the maximum value too.

---

### Standard — Regular Study (2d-2mo)

#### Differentiation rules in practice

Differentiate f(x) = x^3 sin x. Use the product rule: f'(x) = 3x^2 sin x + x^3 cos x.

Differentiate g(x) = (x^2 + 1) / (x - 3). Quotient rule: g'(x) = [2x(x - 3) - (x^2 + 1) * 1] / (x - 3)^2 = [2x^2 - 6x - x^2 - 1] / (x - 3)^2 = (x^2 - 6x - 1) / (x - 3)^2.

Differentiate h(x) = e^(3x^2). Chain rule: h'(x) = e^(3x^2) * 6x = 6x e^(3x^2).

Differentiate y = sin(x^2 + 1) + ln(2x). Chain rule: dy/dx = cos(x^2 + 1) * 2x + 1/x = 2x cos(x^2 + 1) + 1/x.

#### Critical points and the second derivative

Set f'(x) = 0 to find critical points. Test the second derivative: f''(x) > 0 implies a minimum, f''(x) < 0 implies a maximum.

For f(x) = x^3 - 3x^2 - 9x + 5: f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x - 3)(x + 1). Critical points at x = 3 and x = -1. f''(x) = 6x - 6. At x = 3, f''(3) = 12 > 0, so local minimum. At x = -1, f''(-1) = -12 < 0, so local maximum.

#### Implicit differentiation

For x^2 + y^2 = 25, differentiate both sides with respect to x: 2x + 2y (dy/dx) = 0, so dy/dx = -x/y. Useful when y cannot be easily solved for in terms of x.

#### Optimisation and related rates

For a closed cylindrical can of volume V = pi r^2 h, the surface area is A = 2 pi r^2 + 2 pi r h. Minimise A subject to V constant: solve h = V / (pi r^2), substitute into A, then dA/dr = 0. Solve for r.

Related rates: differentiate both sides of an equation with respect to time, then substitute the known rates.

---

### Deep — Long-Term Mastery (1mo-6mo)

#### Why calculus carries the marks

The MoEHE 2018 standards place Differentiation and Integration in the Algebra and Calculus strand that carries around 69 percent of the Grade 12 advanced Mathematics paper. Differentiation rules must be fluent — chain rule mistakes lose 3-4 marks on a 5-mark question. Application questions (max/min, related rates) are typically the hardest on the paper and the most-marked.

#### Exam technique

- State the rule you are applying (product, quotient, chain) before substituting — the rule name carries method marks.
- For application problems, write the function being optimised first, then differentiate, then solve.
- For related rates, list every quantity and its rate of change with units before starting.

#### Common misconceptions (and the correction)

- "The derivative is the slope of the curve." It is the slope of the tangent line at a point. The slope of the curve at a point is ambiguous.
- "dy/dx means dy divided by dx." It is a single notation; treat it as an operator.
- "f''(x) > 0 always means minimum." No, it means concave up locally — combine with f'(x) = 0 to classify as a minimum.

#### Specification reference

Source: MoEHE Curriculum Standards for Mathematics KG-G12 (MoEHE, 2018), https://cdn-files.abegs.org/abegs-marsad-prod/uploads/c7a1839c-fd4e-401c-87dd-d6f3baac8cd5.pdf, pp. 55-58. Re-check on https://www.edu.gov.qa/ before committing.

---

*Last updated 2026-09-21. Source: MoEHE Qatar Mathematics Curriculum Standards KG-G12 (2018), https://cdn-files.abegs.org/abegs-marsad-prod/uploads/c7a1839c-fd4e-401c-87dd-d6f3baac8cd5.pdf. Track regulation and Grade 12 terminal-exam weighting must be re-checked on https://www.edu.gov.qa/ before committing a revision plan to a student (qatar).*
