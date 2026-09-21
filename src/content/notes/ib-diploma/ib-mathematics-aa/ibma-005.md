---
exam: ib-diploma
examName: International Baccalaureate (IB) Diploma Programme
subject: ib-mathematics-aa
subjectName: "Mathematics: Analysis and Approaches"
topic: ibma-005
topicName: Calculus
weight: 5
country: singapore
generated: "2026-09-20T15:30:00"
lastUpdated: "2026-09-20"
---

# Calculus — IB Mathematics: Analysis and Approaches (AA) Notes

Calculus is the largest single topic in the IB Mathematics: Analysis and Approaches syllabus by teaching hours and is the dominant content of Paper 1. The topic covers limits and continuity, differentiation of standard functions via the product, quotient and chain rules, implicit and parametric differentiation, integration techniques (substitution, by parts, partial fractions), definite integrals and their applications to area and volume, differential equations (separable and linear), and (at HL) Maclaurin series. An IB student aiming at a 6 or 7 must secure this topic above all others.

> Verify the live IB Math AA subject brief and any in-year curriculum update on https://ibo.org/programmes/diploma-programme/curriculum/mathematics/ before planning revision around the patterns below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### The seven facts every IB student needs

1. **Differentiation**: the process of finding the derivative f′(x), which gives the rate of change of f at x.
2. **Integration**: the reverse of differentiation; the process of finding the function whose derivative is given.
3. **The chain rule**: if y = f(g(x)), then dy/dx = f′(g(x)) × g′(x).
4. **The product rule**: if y = uv, then dy/dx = u′v + uv′.
5. **The quotient rule**: if y = u/v, then dy/dx = (u′v − uv′) / v².
6. **The definite integral** ∫ₐᵇ f(x) dx gives the signed area between the curve and the x-axis from x = a to x = b.
7. **Differential equation**: an equation involving a function and its derivatives; separable equations can be solved by separating the variables and integrating.

#### Key notations

- f′(x) or dy/dx — the derivative of f with respect to x
- f″(x) or d²y/dx² — the second derivative
- ∫ f(x) dx — the indefinite integral
- ∫ₐᵇ f(x) dx — the definite integral from a to b
- e — the base of natural logarithms (≈ 2.71828)
- ln x — the natural logarithm

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Limits and continuity

A function f is **continuous at x = a** if f(a) is defined, lim(x→a) f(x) exists, and lim(x→a) f(x) = f(a). Polynomial, exponential, logarithmic and trigonometric functions are continuous on their natural domains.

The **limit** of a function at a point is the value the function approaches as the input approaches that point. Indeterminate forms of the form 0/0 or ∞/∞ require algebraic manipulation (factorisation, rationalisation, use of standard limits) before the limit can be evaluated.

Key standard limits:

- lim(x→0) sin(x)/x = 1
- lim(x→0) (1 − cos(x))/x = 0
- lim(x→0) (e^x − 1)/x = 1
- lim(x→0) ln(1 + x)/x = 1

#### Differentiation

**Basic derivatives**:

- d/dx (x^n) = n x^(n−1)
- d/dx (e^x) = e^x
- d/dx (ln x) = 1/x
- d/dx (sin x) = cos x
- d/dx (cos x) = −sin x
- d/dx (tan x) = sec²x

**Rules**:

- Sum and difference: d/dx (f ± g) = f′ ± g′
- Product rule: d/dx (uv) = u′v + uv′
- Quotient rule: d/dx (u/v) = (u′v − uv′) / v²
- Chain rule: if y = f(g(x)), then dy/dx = f′(g(x)) × g′(x)

**Implicit differentiation**: differentiate both sides of an equation with respect to x, treating y as a function of x; solve for dy/dx.

**Parametric differentiation**: for x = x(t) and y = y(t), dy/dx = (dy/dt) / (dx/dt).

**Higher-order derivatives**: the second derivative f″(x) is the derivative of f′(x).

**Applications of differentiation**:

- Tangents and normals at a point on a curve.
- Stationary points (max, min, point of inflection) classified by the second-derivative test or first-derivative sign-change test.
- Rates of change, including related rates.
- Optimisation under a constraint.
- Curve sketching: identify domain, intercepts, asymptotes, stationary points, behaviour at infinity.

#### Integration

**Basic integrals**:

- ∫ x^n dx = x^(n+1) / (n+1) + C (for n ≠ −1)
- ∫ e^x dx = e^x + C
- ∫ 1/x dx = ln |x| + C
- ∫ sin x dx = −cos x + C
- ∫ cos x dx = sin x + C
- ∫ sec²x dx = tan x + C

**Definite integrals**: ∫ₐᵇ f(x) dx = F(b) − F(a), where F is any antiderivative of f.

**Applications of definite integrals**:

- Area under a curve: the area between the curve y = f(x) and the x-axis from x = a to x = b is ∫ₐᵇ f(x) dx (when f ≥ 0).
- Area between two curves: ∫ₐᵇ |f(x) − g(x)| dx.
- Volume of revolution (about the x-axis): V = π ∫ₐᵇ [f(x)]² dx.

**Integration techniques**:

- Substitution: u = g(x), du = g′(x) dx.
- Integration by parts: ∫ u dv = uv − ∫ v du.
- Partial fractions: express the rational function as a sum of simpler fractions, then integrate term by term.

#### Differential equations

A **differential equation** is an equation involving a function and its derivatives. A first-order differential equation involves only the first derivative.

**Separable first-order equations**: rearrange to put all x on one side and all y on the other, then integrate both sides.

Example: dy/dx = x y. Rearrange: dy/y = x dx. Integrate: ln |y| = x²/2 + C. Solve: y = A e^(x²/2).

**Linear first-order equations** (with integrating factor): use the integrating factor e^(∫ P(x) dx).

Example: dy/dx + 2x y = x. Integrating factor: e^(∫ 2x dx) = e^(x²). Multiply: d/dx (y e^(x²)) = x e^(x²). Integrate: y e^(x²) = ½ e^(x²) + C. Solve: y = ½ + C e^(−x²).

#### Maclaurin series (HL)

For a function f that is infinitely differentiable at x = 0, the Maclaurin series is:

f(x) = f(0) + f′(0) x + f″(0) x²/2! + f‴(0) x³/3! + …

Standard Maclaurin series:

- e^x = 1 + x + x²/2! + x³/3! + … (for all x)
- ln(1 + x) = x − x²/2 + x³/3 − x⁴/4 + … (for −1 < x ≤ 1)
- sin x = x − x³/3! + x⁵/5! − … (for all x)
- cos x = 1 − x²/2! + x⁴/4! − … (for all x)
- (1 + x)^n = 1 + nx + n(n−1)/2! x² + … (for |x| < 1)

Maclaurin series are used to approximate functions and to evaluate limits of the form 0/0.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Where Calculus appears across the IB Mathematics: AA papers

- **IB Math AA SL Paper 1**: calculus items dominate; differentiation (chain, product, quotient, implicit, parametric) and integration (substitution, by parts, partial fractions, applications) appear on most papers.
- **IB Math AA SL Paper 2**: short structured calculus items appear, alongside other topics.
- **IB Math AA HL Paper 1**: calculus items at HL depth; the Maclaurin series and the linear differential equations appear on most HL papers.
- **IB Math AA HL Paper 3**: a HL-only paper focused on the extension topics; calculus items often appear in the form of modelling or investigation problems.
- **Across the papers**: drawing a clear sketch of the curve and labelling the area of interest is the highest-leverage exam technique for integration-applied items.

#### Common misconceptions (and the correction)

- "The chain rule is the same as the product rule." The chain rule differentiates a composition; the product rule differentiates a product.
- "The area under a curve is the integral." The integral gives the SIGNED area; the area is the absolute value of the integral if the curve crosses the x-axis.
- "∫ f(x) dx = F(x)." The indefinite integral is a family of antiderivatives: F(x) + C.
- "dy/dx = 0 at a maximum." dy/dx = 0 at a stationary point, which could be a maximum, a minimum or a point of inflection.
- "All differential equations are separable." Only those that can be written in the form dy/dx = f(x) g(y). Linear differential equations require an integrating factor.

#### Exam technique

- For differentiation questions, write the rule you are applying before substituting. The rule statement is the method mark.
- For integration questions, identify the technique before computing. The technique is the method mark.
- For definite-integral applications, draw a sketch of the region first. The sketch is the method mark.
- For differential-equation questions, separate the variables before integrating (separable case) or apply the integrating factor (linear case). The separation / integrating-factor step is the method mark.
- For Maclaurin-series questions, write out the first three or four non-zero terms before approximating. The first terms are the method mark.

#### Specification reference

Calculus is the largest single topic of IB Mathematics: Analysis and Approaches by teaching hours. It spans both Paper 1 and Paper 2 at SL, and additionally Paper 3 at HL. The HL-only Maclaurin-series sub-topic appears on Paper 3. Confirm the live IB Math AA subject brief and any in-year curriculum update on https://ibo.org/programmes/diploma-programme/curriculum/mathematics/ before committing a revision plan. The IB is preparing a curriculum update for first teaching 2027.

---

*Last updated 2026-09-20. Source: IBO DP Mathematics: Analysis and Approaches subject brief, https://ibo.org/contentassets/5895a05412144fe890312bad52b17044/subject-brief-dp-math-analysis-and-approaches-en.pdf. Paper pattern and any in-year specification changes must be re-checked on https://ibo.org/programmes/diploma-programme/curriculum/ before committing a revision plan to a student.*
