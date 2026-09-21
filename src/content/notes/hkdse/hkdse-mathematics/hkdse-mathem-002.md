---
exam: hkdse
examName: Hong Kong Diploma of Secondary Education (HKDSE)
subject: hkdse-mathematics
subjectName: Mathematics (Compulsory Part)
topic: hkdse-mathem-002
topicName: "Number and Algebra — Polynomials, Equations and Sequences"
weight: 5
country: hongkong
generated: "2026-09-20T14:00:00"
lastUpdated: "2026-09-20"
---

# Number and Algebra — Polynomials, Equations and Sequences — HKDSE Mathematics Notes

This topic continues the Number and Algebra strand with the HKDSE-published learning units on polynomials, simultaneous equations, variation, sequences, inequalities and linear programming, and transformations of graphs. These units appear across Paper 1 Section B and on Paper 2 multiple-choice items. The skills tested are algebraic manipulation, recognising structure in expressions, and using a model to solve applied problems.

> Verify the live Compulsory Part unit list and the assessment framework on https://www.hkeaa.edu.hk/ before planning revision.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Factor theorem**: P(a) = 0 ⇔ (x - a) is a factor of P(x). Use it to factor higher-degree polynomials given one known root.
- **Remainder theorem**: when P(x) is divided by (x - a), the remainder is P(a).
- **Simultaneous equations** in two variables: solve by substitution or elimination. For non-linear systems, substitute a linear equation into a non-linear one to reduce to one variable.
- **Variations**: direct y = kx, inverse y = k/x, joint y = kxz, partial y = kx/z. The constant k is found from a known pair.
- **Arithmetic sequence** a_n = a + (n-1)d, **geometric sequence** a_n = ar^(n-1). Sum of first n terms of AP: S_n = n/2 · (2a + (n-1)d). Sum of GP: S_n = a(1 - r^n)/(1 - r).
- **Inequalities**: linear inequalities solve like linear equations; the inequality reverses when multiplying or dividing by a negative number.
- **Linear programming**: graph each constraint as a half-plane, identify the feasible region, evaluate the objective function at each vertex, choose max or min.

#### Examiner traps

- Forgetting that (x - a) factors P(x) only if P(a) = 0 — substituting a different value gives no useful factor.
- Confusing arithmetic mean (mean of terms) with arithmetic sequence (constant difference).
- Reversing the inequality when multiplying by a negative coefficient in linear programming boundary work.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Polynomials — factor theorem and remainder theorem

For a polynomial P(x) of degree n:

- The **factor theorem** says P(a) = 0 if and only if (x - a) is a factor of P(x).
- The **remainder theorem** says P(x) = (x - a)·Q(x) + P(a), where P(a) is the remainder when dividing by (x - a).

Worked example: find the remainder when P(x) = 2x³ - 5x² + 4x - 3 is divided by (x - 2). By the remainder theorem, the remainder is P(2) = 2·8 - 5·4 + 4·2 - 3 = 16 - 20 + 8 - 3 = 1.

Worked example: factor x³ - 6x² + 11x - 6 given x = 1 is a root. Divide by (x - 1) using synthetic division to get x² - 5x + 6 = (x - 2)(x - 3). So P(x) = (x - 1)(x - 2)(x - 3).

#### Simultaneous equations

For two linear equations in x and y, elimination is usually fastest. Multiply one equation to align coefficients, then subtract.

For a linear-nonlinear system, e.g. y = 2x + 1 and x² + y² = 25, substitute y from the linear equation into the non-linear one to get a single quadratic in x. Solve for x, then back-substitute to find y.

#### Variations and sequences

**Direct variation** y = kx: doubling x doubles y. **Inverse variation** y = k/x: doubling x halves y. **Joint variation** y = kxz. **Partial variation** y = kx + c: y varies directly with x when the c term is added.

For AP and GP, the key operations are:

- Identifying the first term a, the common difference d (AP), or the common ratio r (GP).
- Setting up equations from given terms and solving for a, d or r.
- Computing sums S_n when n is given.

For percentage growth, the GP model applies: a_n = a·(1 + r)^(n-1) for n periods at growth rate r.

#### Inequalities and linear programming

Linear inequalities in two variables define half-planes. To graph:

1. Replace the inequality with an equality; draw the boundary line.
2. Test a point on one side of the line (e.g. the origin if the line does not pass through it) to determine which side satisfies the inequality.
3. Use a dashed line for strict inequality (<, >) and a solid line for non-strict (≤, ≥).

For a linear programming problem, plot all constraints, identify the feasible region (intersection of half-planes), then evaluate the objective function at each vertex of the feasible region. The maximum (or minimum) is at a vertex by the fundamental theorem of linear programming.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why this topic matters across the Compulsory Part

- **Functions and graphs**: the transformations of graphs (reflections, translations, scalings) extend the standard library of polynomial, exponential and trigonometric graphs.
- **Coordinate geometry**: systems of equations appear when finding intersections of lines, circles and parabolas.
- **Calculus (Extended Part)**: the derivative and integral of polynomial functions are the foundation of M1/M2; fluency here lowers the load later.
- **Sequences and series**: arithmetic and geometric sums generalise to the sum of an arithmetic progression in statistics (e.g. cumulative frequency), and to exponential decay in physics and finance.

#### Exam technique

- For polynomial division, show synthetic division explicitly on the script — partial marks depend on visible working.
- For simultaneous equations, label the equations and the operations performed; an HKDSE examiner will credit the substitution step even if a later arithmetic error leads to a wrong answer.
- For linear programming, plot with care and label each constraint. The objective line should be drawn and translated through the feasible region to identify the optimum.
- For variations, write the general form y = k·f(x₁, x₂, ...) before substituting — many errors come from trying to substitute first.

#### Common misconceptions (and the correction)

- "A polynomial with no real roots is irreducible." Not necessarily — for example, x⁴ + 4 factors as (x² + 2x + 2)(x² - 2x + 2) over the reals.
- "An arithmetic sequence can have a common ratio." No — by definition an AP has a constant difference, a GP has a constant ratio.
- "Linear programming always has a unique solution." The feasible region may be unbounded (in which case the optimum is at infinity in the unbounded direction) or empty (no feasible solution exists).

#### Specification reference

Topic covers Compulsory Part Units 4-9 of the CDC/HKEAA Mathematics Curriculum and Assessment Guide (Secondary 4 - 6): "More about polynomials", "More about equations", "Variations", "Arithmetic and geometric sequences and their summations", "Inequalities and linear programming", and "More about graphs of functions". Higher-tier Extended Part Module 2 (Algebra and Calculus) extends into mathematical induction, the binomial theorem and vectors. Confirm the live assessment framework on hkeaa.edu.hk.

---

*Last updated 2026-09-20. Source: HKDSE Mathematics Assessment Framework, https://www.hkeaa.edu.hk/DocLibrary/HKDSE/Subject_Information/math/2026hkdse-e-math.pdf; CDC/HKEAA Mathematics Curriculum and Assessment Guide (Secondary 4 - 6), https://www.edb.gov.hk/attachment/en/curriculum-development/kla/ma/curr/Math_CAGuide_e_2015.pdf. Live unit boundaries, Extended Part module choices, and any in-year specification changes must be re-checked on hkeaa.edu.hk before committing a revision plan to a student.*