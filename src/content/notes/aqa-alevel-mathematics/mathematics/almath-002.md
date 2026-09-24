---
exam: aqa-alevel-mathematics
examName: A-Level Mathematics (AQA 7357)
subject: mathematics
subjectName: Mathematics
topic: almath-002
topicName: Algebra and Functions
weight: 5
country: uk
generated: "2026-09-22T10:00:00"
lastUpdated: "2026-09-22"
---

# Algebra and Functions — A-Level Mathematics (AQA 7357) Notes

Algebra and Functions is section B of the AQA 7357 specification and the section every other section leans on. Differentiation questions become algebra mistakes, integration by substitution is algebra, modelling questions use function notation, and the statistics content (probability trees, normal distribution calculations) is arithmetic wrapped in formula substitution. The AQA description flags indices and surds, quadratics, simultaneous equations, inequalities, polynomials and the factor theorem, partial fractions, function notation and transformations, and modelling with functions as the key sub-topics. Master this section first and the rest of the course becomes much easier; treat it as a single block and most other topics become accessible.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Five formula families you will use in every paper

- **Indices laws** (a > 0): aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ, a^(1/n) = ⁿ√a, a^(m/n) = (a^(1/n))ᵐ.
- **Quadratic formula**: roots of ax² + bx + c = 0 are x = (−b ± √(b² − 4ac)) / (2a). Discriminant b² − 4ac tells you whether roots are real and distinct (= 0 gives a repeated root), real (= 0), or complex (< 0).
- **Factor theorem**: x = a is a root of polynomial p(x) iff (x − a) is a factor of p(x). Use synthetic division or long division to find the quotient.
- **Partial fractions**: write a single rational function as a sum of simpler fractions. For a denominator (x − a)(x − b) with a ≠ b, the form is A/(x − a) + B/(x − b).
- **Function notation**: f(g(x)) means apply g first, then f. f⁻¹(x) is the inverse function, defined only when f is one-to-one.

#### Five traps to avoid on the first attempt

- Dividing by x − 2 when x could equal 2. Factor first, then cancel.
- Expanding (x + 3)² as x² + 9. Use (x + 3)² = x² + 6x + 9.
- Treating √(a + b) as √a + √b. It is not.
- Assuming f⁻¹(x) = 1/f(x). The inverse swaps x and y: y = f(x) becomes x = f(y), then solve for y.
- Adding fractions with different denominators without finding a common denominator first.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Indices and surds

**Laws of indices** work for positive bases. For a > 0:

- aᵐ × aⁿ = aᵐ⁺ⁿ
- aᵐ ÷ aⁿ = aᵐ⁻ⁿ
- (aᵐ)ⁿ = aᵐⁿ
- a⁰ = 1
- a⁻ⁿ = 1/aⁿ
- a^(m/n) = (a^(1/n))ᵐ = ⁿ√(aᵐ)

The fractional index a^(m/n) is the n-th root of aᵐ. To compute it on a calculator, use a^(m/n), not √a^m, because the latter does not always give the principal root.

**Surds** are irrational roots left in exact form. Simplify by extracting square factors: √12 = √(4 × 3) = 2√3. Rationalise the denominator of 1/(√3 − 1) by multiplying top and bottom by the conjugate (√3 + 1):

1/(√3 − 1) = (√3 + 1) / ((√3 − 1)(√3 + 1)) = (√3 + 1) / (3 − 1) = (√3 + 1)/2.

**Worked example.** Simplify (3 + √2)/(5 − √2).

Multiply top and bottom by (5 + √2):

(3 + √2)(5 + √2) / ((5 − √2)(5 + √2)) = (15 + 3√2 + 5√2 + 2) / (25 − 2) = (17 + 8√2) / 23.

The denominator 23 is an integer; the answer is in exact form.

#### Quadratic functions

A quadratic ax² + bx + c has a vertex at x = −b/(2a) and value at the vertex c − b²/(4a). The graph opens upward if a > 0, downward if a < 0.

**Roots** are found by:

- **Factorising** (when the quadratic factors over the integers): x² − 5x + 6 = (x − 2)(x − 3) gives roots 2 and 3.
- **Completing the square**: x² + 6x + 11 = (x + 3)² + 2. The vertex is at x = −3, value 2.
- **Quadratic formula**: x = (−b ± √(b² − 4ac)) / (2a). Used when factorisation fails or the coefficients are messy.

The discriminant b² − 4ac determines root behaviour:

- > 0: two distinct real roots.
- = 0: one repeated real root.
- < 0: no real roots (complex conjugate pair).

#### Simultaneous equations

A linear-linear pair has a unique solution (unless the lines are parallel). Solve by substitution or by elimination: multiply each equation to make one variable's coefficients match, subtract.

**Worked example.** Solve y = 2x + 1 and 3x + 2y = 16.

Substitute y = 2x + 1 into 3x + 2(2x + 1) = 16. So 3x + 4x + 2 = 16, hence 7x = 14, x = 2. Then y = 2(2) + 1 = 5. Solution: (2, 5).

A linear-quadratic pair typically gives two solutions. Substitute the linear into the quadratic, solve, then find y for each x.

#### Inequalities

Linear inequalities are solved like linear equations, with one twist: multiplying or dividing by a negative number flips the inequality sign. So −3x > 6 becomes x < −2.

Quadratic inequalities use the graph: sketch the parabola, identify where it is above or below the x-axis, read the regions off. The factored form is usually faster: x² − 4 < 0 becomes (x − 2)(x + 2) < 0, which holds for −2 < x < 2.

#### Polynomials and the factor theorem

A polynomial of degree n has at most n real roots. To find roots, the **factor theorem** says (x − a) is a factor iff f(a) = 0. Test integer candidates, divide out the factor, repeat on the lower-degree polynomial.

**Worked example.** Factorise f(x) = x³ − 6x² + 11x − 6.

Test x = 1: f(1) = 1 − 6 + 11 − 6 = 0. So (x − 1) is a factor. Divide: f(x) = (x − 1)(x² − 5x + 6) = (x − 1)(x − 2)(x − 3). Roots: 1, 2, 3.

For polynomials of higher degree, the AQA formula booklet gives no shortcuts — you must use factor theorem plus long division or synthetic division, repeated until the quotient is a quadratic.

#### Partial fractions

Express a rational function as a sum of fractions whose denominators are the linear factors of the original denominator.

**Worked example.** Express (5x + 1)/((x − 2)(x + 3)) as partial fractions.

Write (5x + 1)/((x − 2)(x + 3)) = A/(x − 2) + B/(x + 3). Multiply through by (x − 2)(x + 3):

5x + 1 = A(x + 3) + B(x − 2).

Let x = 2: 11 = 5A, so A = 11/5. Let x = −3: −14 = −5B, so B = 14/5. Therefore:

(5x + 1)/((x − 2)(x + 3)) = (11/5)/(x − 2) + (14/5)/(x + 3).

Partial fractions appear in integration (the reverse process is integration by partial fractions) and in series expansions of rational functions at A-level Further Mathematics.

#### Function notation and transformations

f(x) is a rule that maps x to a value. The composition (f ∘ g)(x) = f(g(x)) means apply g first.

**Transformations** of the graph y = f(x):

- y = f(x) + a: shift up by a.
- y = f(x + a): shift left by a.
- y = a · f(x): stretch vertically by factor a.
- y = f(ax): stretch horizontally by factor 1/a (compress if a > 1).
- y = −f(x): reflect in the x-axis.
- y = f(−x): reflect in the y-axis.

Multiple transformations chain: y = 2f(x − 3) + 1 is a stretch by 2 vertically, then a shift right by 3, then a shift up by 1.

#### Modelling with functions

A modelling question takes a real situation and asks you to pick a function type. Common choices:

- **Linear**: distance at constant speed, cost per unit, depreciation at a flat rate.
- **Quadratic**: projectile motion, revenue with linear demand, area with one dimension fixed.
- **Cubic or quartic**: growth that levels off (cubic) or with an inflection (quartic).
- **Exponential**: population growth under constant rate, decay of a radioactive sample, compound interest.
- **Logarithmic**: scales where one variable spans orders of magnitude (decibels, pH, Richter).

State the domain (what values of x make physical sense) and the parameters (what each constant in the function represents in the problem). A common modelling error is to forget that the domain is not all real numbers — for example, time cannot be negative, and populations cannot be fractional.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why algebra and functions is the keystone

Differentiation and integration both depend on confident manipulation of algebraic expressions. A student who can write (3x + 1)⁵ as 3(3x + 1)⁴ × 3 (chain rule) is in a much stronger position than one who can recite the chain rule but stumbles on the algebra. The same is true for partial fractions feeding integration by partial fractions, and for function transformations feeding graph-sketching questions. Aim for accuracy under time pressure, not just recognition of methods.

#### Worked pattern — full discriminant analysis

A quadratic f(x) = ax² + bx + c has its vertex at x = −b/(2a). To find the minimum or maximum, substitute back: f(−b/(2a)) = c − b²/(4a). To prove a quadratic is always positive, show a > 0 and discriminant < 0: the graph opens upward and never crosses the x-axis, so f(x) > 0 for all x.

**Worked example.** Show that 3x² − 12x + 14 > 0 for all real x.

Complete the square: 3x² − 12x + 14 = 3(x² − 4x) + 14 = 3(x − 2)² − 12 + 14 = 3(x − 2)² + 2. The minimum value is 2 (when x = 2), and the quadratic is always ≥ 2 > 0. ∎

#### Worked pattern — partial fractions with repeated factors

If the denominator has a repeated factor, the partial fraction form changes:

- (Ax + B)/((x − 1)²(x + 2)) = A/(x − 1) + B/(x − 1)² + C/(x + 2).

The repeated factor (x − 1)² gives both a 1/(x − 1) term and a 1/(x − 1)² term. Cover-up rules still work: multiply through and substitute convenient values of x to find one constant at a time.

#### Common misconceptions (and the correction)

- "(x + y)² = x² + y²." It is x² + 2xy + y². The middle term is the most-skipped.
- "The discriminant tells you whether the quadratic has roots." It tells you whether the quadratic has real roots. Negative discriminant means complex roots, which exist but are not real.
- "f(2x) is f(x) multiplied by 2." No. f(2x) is f applied to 2x. If f(x) = x², then f(2x) = (2x)² = 4x². The horizontal stretch is by factor 1/2 in x, not by 2.
- "A factor of zero means no value." Zero is a perfectly valid value; f(2) = 0 means the graph crosses the x-axis at x = 2, not that something is wrong.

#### Specification reference

Section B is the largest single block of the pure content and feeds into calculus (sections G and H), coordinate geometry (section C), and the statistics questions that need substitution into the normal distribution. Confirm the live paper structure, formula booklet and any in-year specification changes on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-22. Source: AQA A-level Mathematics specification 7357, https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357. Paper structure, assessment weighting and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*