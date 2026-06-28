---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-16
topicName: Exponential and Logarithmic Functions
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.072418"
lastUpdated: "2026-06-28"
diagramPrompt: "Mathematical diagram showing Exponential and Logarithmic Functions concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Exponential and Logarithmic Functions

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

An **exponential function** has the form **f(x) = a·b^x**, where a ≠ 0, b > 0, b ≠ 1, and the variable sits in the exponent. Its inverse is the **logarithmic function** y = log_b(x), defined by the equivalence **b^y = x** with the same base restrictions plus x > 0.

The **must-know identities** collapse most ECAT problems:

- log_b(xy) = log_b(x) + log_b(y)
- log_b(x/y) = log_b(x) − log_b(y)
- log_b(x^n) = n·log_b(x)
- b^(log_b x) = x, and a^x = e^(x ln a)

Two high-yield pointers: **graph of y = b^x passes through (0, 1)** with horizontal asymptote y = 0, and **log_b(x) is undefined for x ≤ 0**. For ECAT MCQs, watch the trap where students multiply logs instead of adding them — the product rule is *addition*, not multiplication.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definition and Domain

A function **f(x) = a·b^x** (a ≠ 0, b > 0, b ≠ 1) is called exponential because x appears as a power. The constant b is the **base** and a is a vertical scaling factor. The natural exponential **e^x** (e ≈ 2.71828) is the standard form used in continuous models. Because b^x is strictly positive for every real x, the **range is (0, ∞)** while the **domain is all of ℝ**.

The logarithmic function is defined as the inverse: **y = log_b(x) ⇔ b^y = x**, valid for x > 0, b > 0, b ≠ 1. Its domain is (0, ∞) and its range is ℝ. Geometrically, y = log_b(x) is the reflection of y = b^x across the line y = x.

#### Laws of Exponents

- **Product:** a^m · a^n = a^(m+n)
- **Quotient:** a^m / a^n = a^(m−n)
- **Power:** (a^m)^n = a^(mn)

These transfer directly into logarithm laws, because a logarithm *is* an exponent.

#### Laws of Logarithms

- **Product rule:** log_b(xy) = log_b(x) + log_b(y)
- **Quotient rule:** log_b(x/y) = log_b(x) − log_b(y)
- **Power rule:** log_b(x^n) = n·log_b(x)
- **Change of base:** log_b(x) = ln(x) / ln(b) = log(x) / log(b)
- **Identity:** b^(log_b x) = x

#### Solving Equations

**Exponential equations** use the **one-to-one property**: if b^x = b^y then x = y. Taking ln of both sides lets you linearise any exponential form: a^x = c ⇒ x ln a = ln c.

**Logarithmic equations** reduce to exponential form: log_b(x) = c ⇒ x = b^c, then check x > 0.

#### Worked Mini-Example

Solve 2^x = 10. Take natural logs of both sides: x ln 2 = ln 10, so x = ln 10 / ln 2 ≈ 2.3026 / 0.6931 ≈ 3.3219. Equivalently, change of base gives the same value as log_2(10).

#### Typical ECAT Patterns

| Question Type | What Is Tested |
|---|---|
| Simplification | Applying log laws to condense or expand expressions |
| Equation solving | Using one-to-one property or conversion to exponential form |
| Graphs | Identifying asymptotes, intercepts, domain, range |
| Word problems | Half-life, growth, decay, pH, decibels |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Asymptotic Behaviour

When 0 < b < 1, the function b^x **decays** instead of growing, but all algebraic identities still hold. The horizontal asymptote y = 0 is approached from above as x → +∞ for b < 1 and as x → −∞ for b > 1. Vertical asymptotes appear at x = 0 for y = log_b(x), explaining why log(0) is undefined.

#### Connections to Other ECAT Topics

Exponential and log functions feed directly into the **RC circuit equations** in Physics (charge q(t) = Q_0(1 − e^(−t/RC))) and **radioactive decay** N(t) = N_0 e^(−λt) with half-life T = ln 2 / λ. The compound-interest formula A = P(1 + r/n)^(nt) converts to continuous form via a^x = e^(x ln a). Recognising these forms early saves time across subjects.

#### Common Mistakes

- Writing **log(x·y) = log x · log y** — the right side is wrong; logs of products *add*.
- Distributing exponents: **(a + b)^x ≠ a^x + b^x**.
- Dropping the positivity check after solving **log_b(x) = c**: the solution must satisfy x = b^c > 0.
- Inverting change of base: **log_b(x) = ln(x) / ln(b)**, never ln(b)/ln(x), unless the base is being reciprocated.
- Confusing **ln** (base e) with **log** (often base 10) in numerical answers — they differ by the factor ln 10 ≈ 2.3026.

#### Practice Prompts

1. Solve log_2(x) + log_2(x − 6) = 4. State the domain restriction and verify your answer is valid.
2. A culture doubles every 3 hours. Starting from 500 cells, write the exponential model and find when the population reaches 20,000.

#### Exam Strategy

ECAT allocates roughly 3% of Mathematics marks to this cluster. Most items appear as 1–2 mark MCQs on simplification, equation solving, or graph interpretation. Aim to finish each in under 90 seconds by spotting which identity collapses the expression before computing numerically.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
