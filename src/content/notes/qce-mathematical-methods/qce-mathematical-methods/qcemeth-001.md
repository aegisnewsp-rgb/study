---
exam: qce-mathematical-methods
examName: QCE Mathematical Methods & Specialist Mathematics (QCAA 2025)
subject: qce-mathematical-methods
subjectName: Mathematical Methods
topic: qcemeth-001
topicName: Algebra, Statistics and Functions
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 1: Algebra, Statistics and Functions — QCE Mathematical Methods (QCAA 2025) Notes

Unit 1 of QCE Mathematical Methods covers surds, algebraic manipulation, indices, logarithms; arithmetic and geometric sequences; linear and quadratic functions; introduction to statistics. First Unit of the four-Unit Mathematical Methods sequence.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Algebra.** Simplify, factorise, solve equations. Surds: √a × √b = √(ab). Logarithms: log(xy) = log x + log y.
- **Sequences.** Arithmetic a_n = a + (n − 1)d. Geometric a_n = ar^(n − 1).
- **Functions.** Linear y = mx + c, quadratic y = ax² + bx + c.
- **Statistics.** Mean, median, mode, range, IQR, standard deviation.

#### Examiner traps

- Mixing up arithmetic and geometric sequences.
- Confusing domain and range.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Algebra and surds

Laws of indices: a^m × a^n = a^(m+n); a^m / a^n = a^(m−n); (a^m)^n = a^(mn); a^0 = 1; a^(−n) = 1/a^n.

Surds: √a × √b = √(ab). Simplify by extracting square factors: √12 = 2√3.

Logarithms: log(xy) = log x + log y; log(x/y) = log x − log y; log(x^n) = n log x.

#### Sequences

Arithmetic: a_n = a + (n − 1)d. Sum S_n = n/2(2a + (n − 1)d).
Geometric: a_n = ar^(n − 1). Sum S_n = a(1 − r^n)/(1 − r) for r ≠ 1.

#### Functions

Linear y = mx + c: slope m, y-intercept c. Quadratic y = ax² + bx + c: vertex at x = −b/(2a), y = c − b²/(4a).

#### Statistics

Mean x̄ = Σx/n. Median: middle value (odd n) or mean of two middle values (even n). Mode: most frequent. Range = max − min. IQR = Q3 − Q1. SD s = √(Σ(x − x̄)²/n).

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Unit 1 underpins the rest of Mathematical Methods

- **Algebra** is needed for every subsequent Unit.
- **Functions** are the language of calculus in Units 2-4.
- **Sequences** underpin financial mathematics in Unit 4.

#### Year 11 planning pattern

- Term 1: Algebra, surds, indices.
- Term 2: Sequences and series.
- Term 3: Functions and their graphs.
- Term 4: Statistics.

#### Common misconceptions (and the correction)

- "log(xy) = log x + log y always." Yes, when x, y > 0.
- "Mean is the same as median." Only for symmetric distributions.

#### Specification reference

This Unit is the first of four Units of QCE Mathematical Methods. Confirm the live syllabus on qcaa.qld.edu.au.

#### Worked example — logarithmic manipulation and solving equations

Solve the equation for x:

```
  log₂(x + 2) + log₂(x − 2) = 5
```

Combine the logarithms on the left-hand side using the product law log_a(M) + log_a(N) = log_a(MN):

```
  log₂((x + 2)(x − 2)) = 5
  log₂(x² − 4) = 5
```

Convert the logarithmic equation into its equivalent exponential form:

```
  x² − 4 = 2⁵
  x² − 4 = 32
  x² = 36
  x = ±6
```

Check the domain restrictions. The logarithm function log_a(u) requires u > 0.
For x = −6:
- x + 2 = −4 < 0 (undefined in the real numbers)
- x − 2 = −8 < 0 (undefined in the real numbers)

For x = 6:
- x + 2 = 8 > 0 (valid)
- x − 2 = 4 > 0 (valid)

Therefore, x = −6 is an extraneous solution. The unique real solution is x = 6.

#### Worked example — arithmetic and geometric sequence modelling

A company starts producing solar panels in month 1 with 250 units.
Plan A: Production increases by 40 units each subsequent month (arithmetic sequence).
Plan B: Production increases by 12% each subsequent month (geometric sequence).

Calculate:
1. Production in month 12 under Plan A.
2. Total production over the first 12 months under Plan A.
3. Production in month 12 under Plan B.
4. Total production over the first 12 months under Plan B.

Part 1: Plan A month 12
The sequence is arithmetic with first term a = 250 and common difference d = 40.

```
  a₁₂ = a + (n − 1)d
      = 250 + (12 − 1)(40)
      = 250 + 11 × 40
      = 250 + 440
      = 690 units
```

Part 2: Plan A total production over 12 months
Apply the arithmetic series sum formula:

```
  S₁₂ = (n / 2) × (2a + (n − 1)d)
      = (12 / 2) × (2(250) + 440)
      = 6 × (500 + 440)
      = 6 × 940
      = 5,640 units
```

Part 3: Plan B month 12
The sequence is geometric with first term a = 250 and common ratio r = 1 + 0.12 = 1.12.

```
  a₁₂ = a × r^(n − 1)
      = 250 × (1.12)¹¹
      = 250 × 3.47855
      ≈ 869.64 units
```

Part 4: Plan B total production over 12 months
Apply the geometric series sum formula for r > 1:

```
  S₁₂ = a(r^n − 1) / (r − 1)
      = 250((1.12)¹² − 1) / (1.12 − 1)
      = 250(3.89598 − 1) / 0.12
      = 250(2.89598) / 0.12
      = 723.994 / 0.12
      ≈ 6,033.28 units
```

Rounding to whole units gives 6,033 units under Plan B compared to 5,640 units under Plan A.

#### Worked example — quadratic vertex form and discriminant analysis

Consider the quadratic function f(x) = 2x² − 12x + 13.
1. Express f(x) in vertex form a(x − h)² + k by completing the square.
2. State the coordinates of the turning point and its nature.
3. Calculate the discriminant and determine the number and type of roots for f(x) = 0.

Part 1: Complete the square
Factor out the leading coefficient from the x-terms:

```
  f(x) = 2(x² − 6x) + 13
```

Half of the linear coefficient −6 is −3; its square is 9.

```
  f(x) = 2(x² − 6x + 9 − 9) + 13
       = 2((x − 3)² − 9) + 13
       = 2(x − 3)² − 18 + 13
       = 2(x − 3)² − 5
```

Part 2: Turning point
From the vertex form f(x) = 2(x − 3)² − 5:
- The vertex coordinates are (3, −5).
- Since the leading coefficient a = 2 > 0, the parabola opens upward. The turning point is a local minimum.

Part 3: Discriminant analysis
For 2x² − 12x + 13 = 0, identify coefficients a = 2, b = −12, c = 13:

```
  Δ = b² − 4ac
    = (−12)² − 4(2)(13)
    = 144 − 104
    = 40
```

Since Δ > 0 and 40 is not a perfect square:
- The equation has two distinct real irrational roots.
- The exact roots are x = (−(−12) ± √40) / (2 × 2) = (12 ± 2√10) / 4 = 3 ± (√10)/2.

#### Common marking-scheme mistakes

- Omitting the domain check in logarithmic equations and keeping extraneous negative roots.
- Confusing the common difference d with common ratio r when reading a word problem.
- Using the wrong index (n instead of n − 1) in the nth term formula for sequences.
- Forgetting to multiply the bracketed constant when expanding 2(x − 3)² − 18.
- Stating the vertex coordinates with incorrect signs (writing (−3, −5) instead of (3, −5)).
- Evaluating the discriminant as b² + 4ac or dropping parentheses around negative b values ((−12)² = 144, not −144).
- Reporting a rounded decimal when the examination paper specifies exact values in simplest radical form.

#### 20-minute recap before you walk in

- Arithmetic nth term is a + (n − 1)d; geometric nth term is a r^(n − 1).
- Quadratic vertex occurs at x = −b / (2a); vertex form is y = a(x − h)² + k.
- Discriminant rule: Δ > 0 gives two real roots, Δ = 0 gives one repeated real root, Δ < 0 gives zero real roots.
- Logarithm product rule: log(AB) = log A + log B. Logarithm quotient rule: log(A/B) = log A − log B.
- Always check that solutions to logarithmic equations satisfy the argument inequality u > 0.

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA Mathematical Methods syllabus for Unit 1 also lists the following sub-topics, which require supplementary practice:

- Solving simultaneous linear equations in three variables using matrix or elimination methods.
- Transformations of quadratic and power graphs, specifically dilations parallel to axes.
- Univariate data analysis including calculating the standard deviation for grouped continuous data.
- Identifying and justifying outliers using the 1.5 × IQR boundary rule on box plots.
- Graphing reciprocal linear functions y = a / (x − b) + c and identifying vertical and horizontal asymptotes.

Confirm the live sub-topic list on the QCAA Mathematical Methods syllabus page before planning revision around these.

---

*Last updated 2026-09-24. Source: QCE Mathematical Methods General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/mathematical-methods. Awarding body: Queensland Curriculum and Assessment Authority (QCAA).*