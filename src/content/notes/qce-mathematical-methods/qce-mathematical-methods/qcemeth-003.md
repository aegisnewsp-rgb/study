---
exam: qce-mathematical-methods
examName: QCE Mathematical Methods & Specialist Mathematics (QCAA 2025)
subject: qce-mathematical-methods
subjectName: Mathematical Methods
topic: qcemeth-003
topicName: Further Calculus and Statistics
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 3: Further Calculus and Statistics — QCE Mathematical Methods (QCAA 2025) Notes

Unit 3 of QCE Mathematical Methods covers further differentiation and applications (related rates, optimisation, curve sketching); further integration (substitution, definite integrals, areas between curves); discrete random variables and the binomial distribution. Third Unit of the four-Unit sequence.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Applications of differentiation.** Stationary points, optimisation, curve sketching, related rates.
- **Further integration.** Substitution, definite integrals, areas between curves.
- **Discrete random variables.** Probability function P(X = x). Mean E(X) = Σ x P(X = x).
- **Binomial distribution.** X ~ B(n, p). E(X) = np, Var(X) = np(1 − p).

#### Examiner traps

- Forgetting to verify stationary points.
- Mixing up P(X = x) and P(X ≤ x).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Applications of differentiation

Stationary points at f'(x) = 0. f'(x) > 0 means increasing; f'(x) < 0 means decreasing. f''(x) > 0 means concave up; f''(x) < 0 means concave down. Optimisation: set f'(x) = 0, solve, verify with second derivative test.

#### Further integration

Substitution: let u = g(x), du = g'(x) dx. Then ∫ f(g(x)) g'(x) dx = ∫ f(u) du. Definite integrals: evaluate F at endpoints, subtract.

Areas between curves: ∫_a^b |f(x) − g(x)| dx.

#### Discrete random variables

P(X = x) ≥ 0 and Σ P(X = x) = 1. Mean E(X) = Σ x P(X = x). Variance Var(X) = E(X²) − E(X)².

#### Binomial distribution

X ~ B(n, p) where n = number of independent trials, p = success probability. P(X = k) = C(n, k) p^k (1 − p)^(n − k). E(X) = np, Var(X) = np(1 − p).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Unit 3 prepares for Unit 4 external assessment

- **Calculus and statistics** are the two main content strands in the Unit 4 external assessment.

#### Year 12 planning pattern

- Term 1: Applications of differentiation, optimisation.
- Term 2: Further integration, definite integrals.
- Term 3: Discrete random variables, binomial distribution.
- Term 4: Revision.

#### Common misconceptions (and the correction)

- "Stationary points are always maxima or minima." Some are inflection points.
- "Binomial requires n ≥ 30." No — binomial works for any n.

#### Specification reference

This Unit is the third of four Units of QCE Mathematical Methods. Confirm the live syllabus on qcaa.qld.edu.au.

#### Worked example — continuous random variable probability density function

A continuous random variable X has probability density function:

```
  f(x) = k x (4 − x),  for 0 ≤ x ≤ 4
  f(x) = 0,            otherwise
```

1. Determine the exact value of the constant k.
2. Find the expected value E(X).
3. Calculate the probability P(1 ≤ X ≤ 3).

Part 1: Find k
For f(x) to be a valid probability density function, the total integral over its support must equal 1:

```
  ∫₀⁴ k(4x − x²) dx = 1
  k [ 2x² − (x³ / 3) ]₀⁴ = 1
  k [ 2(16) − (64 / 3) ] = 1
  k [ 32 − 64/3 ] = 1
  k [ 32/3 ] = 1
  k = 3 / 32
```

Part 2: Expected value E(X)
Apply the definition E(X) = ∫ x f(x) dx:

```
  E(X) = (3 / 32) ∫₀⁴ x(4x − x²) dx
       = (3 / 32) ∫₀⁴ (4x² − x³) dx
       = (3 / 32) [ (4x³ / 3) − (x⁴ / 4) ]₀⁴
       = (3 / 32) [ (4(64) / 3) − (256 / 4) ]
       = (3 / 32) [ 256/3 − 64 ]
       = (3 / 32) [ 64 / 3 ]
       = 2
```

By symmetry of the parabola about x = 2, E(X) = 2 is verified.

Part 3: Probability P(1 ≤ X ≤ 3)

```
  P(1 ≤ X ≤ 3) = (3 / 32) ∫₁³ (4x − x²) dx
               = (3 / 32) [ 2x² − (x³ / 3) ]₁³
               = (3 / 32) [ (2(9) − 27/3) − (2(1) − 1/3) ]
               = (3 / 32) [ (18 − 9) − (2 − 1/3) ]
               = (3 / 32) [ 9 − 5/3 ]
               = (3 / 32) [ 22 / 3 ]
               = 22 / 32
               = 11 / 16
               = 0.6875
```

#### Worked example — optimisation of a closed rectangular storage tank

A closed rectangular storage tank with a square base of side x metres and height h metres must have a volume of 500 m³. The sheet metal costs $40 per m² for the base and top, and $25 per m² for the four vertical sides.
Find the dimensions that minimise the total cost of construction.

Step 1: Express h in terms of x using the volume constraint

```
  V = x² h = 500  ⇒  h = 500 / x²
```

Step 2: Formulate the total cost function C(x)
- Area of base and top = 2x²
- Area of 4 vertical sides = 4xh = 4x(500 / x²) = 2000 / x

```
  C(x) = 40(2x²) + 25(2000 / x)
       = 80x² + 50000 x⁻¹
```

Step 3: Differentiate with respect to x and locate stationary points

```
  C'(x) = 160x − 50000 x⁻²
```

Set C'(x) = 0 for stationary values:

```
  160x = 50000 / x²
  x³ = 50000 / 160
  x³ = 312.5
  x = (312.5)^(1/3) = (2500 / 8)^(1/3) = 10 × (2.5)^(1/3) / 2 = 5 (2.5)^(1/3) ≈ 6.786 m
```

Step 4: Verify minimum using the second derivative test

```
  C''(x) = 160 + 100000 x⁻³
```

For x > 0, x⁻³ > 0, so C''(x) > 160 > 0. The stationary point is a local and global minimum.

Step 5: Calculate height h

```
  h = 500 / (6.786)² ≈ 10.858 m
```

The minimum cost occurs with base side x ≈ 6.79 m and height h ≈ 10.86 m.

#### Common marking-scheme mistakes

- Failing to verify that a stationary point is a minimum or maximum using the first or second derivative test.
- Forgetting to integrate x f(x) when computing the expected value E(X), integrating f(x) instead.
- Ignoring domain endpoints when solving applied optimisation word problems.
- Misinterpreting the area under a normal curve; z-tables give cumulative probability P(Z < z), not the upper tail.
- Omitting the unit of measurement (metres, dollars, square units) in final numerical answers.
- Setting up the cost function with incorrect face multipliers (for instance, counting only one square face for a closed tank).
- Rounding intermediate values in calculus derivations, creating compounded rounding errors in the final dimensions.

#### 20-minute recap before you walk in

- Stationary point condition: f'(x) = 0. Nature test: f''(x) > 0 gives minimum, f''(x) < 0 gives maximum.
- Continuous random variable requirements: f(x) ≥ 0 for all x, and ∫ f(x) dx = 1 over the full domain.
- Expected value formula: E(X) = ∫ x f(x) dx. Variance formula: Var(X) = E(X²) − [E(X)]².
- Normal distribution standardisation: Z = (X − μ) / σ.
- In kinematics: velocity v(t) = s'(t) and acceleration a(t) = v'(t) = s''(t).

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA Mathematical Methods syllabus for Unit 3 also lists the following sub-topics, which require dedicated revision:

- Cumulative distribution functions F(x) = P(X ≤ x) and their relationship to the derivative f(x) = F'(x).
- Calculating the median and percentiles of continuous probability distributions by solving F(m) = 0.5.
- Motion in a straight line with variable acceleration, including integrating acceleration functions with initial conditions.
- Related rates of change problems involving geometric models such as conical reservoirs and spherical balloons.
- Normal distribution inverse problems where mean or standard deviation is unknown.

Confirm the live sub-topic list on the QCAA Mathematical Methods syllabus page before planning revision around these.

---

*Last updated 2026-09-24. Source: QCE Mathematical Methods General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods. Awarding body: Queensland Curriculum and Assessment Authority (QCAA).*