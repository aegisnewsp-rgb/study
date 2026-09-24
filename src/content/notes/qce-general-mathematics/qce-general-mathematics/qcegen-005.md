---
exam: qce-general-mathematics
examName: QCE General Mathematics & Specialist Mathematics (QCAA 2025)
subject: qce-general-mathematics
subjectName: General Mathematics
topic: qcegen-005
topicName: "Major Domain: Number and Algebra"
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-20
---

# Major Domain: Number and Algebra — QCE General Mathematics (QCAA 2025) Notes

Number and Algebra is one of the three major domains in QCE General Mathematics. It is the cross-cutting strand that runs through all four Units. The domain covers consumer arithmetic, rates and ratios, algebraic manipulation, indices, logarithms, sequences and recurrence.

> Re-check the live specification details on https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/general-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Consumer arithmetic.** Percentages, wages, commission, GST, discount, mark-up.
- **Rates and ratios.** Speed = distance/time. Density = mass/volume. Ratio a:b comparison.
- **Algebra.** Simplify, expand, factorise, solve equations.
- **Indices.** a^m × a^n = a^(m+n); a^m / a^n = a^(m−n); (a^m)^n = a^(mn).
- **Sequences.** Arithmetic a_n = a + (n − 1)d; geometric a_n = ar^(n − 1).

#### Examiner traps

- Confusing discount and mark-up.
- Mixing up arithmetic and geometric sequences.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Percentages

Convert percentage to decimal by dividing by 100. "Increase by r%" means ×(1 + r/100). "Decrease by r%" means ×(1 − r/100). Compound: A = P(1 + r)^n.

#### Algebraic manipulation

Expand: (a + b)(c + d) = ac + ad + bc + bd. Factorise: pull out common factor first. Solve linear equations: isolate the variable.

#### Indices and logarithms

Laws of indices: a^m × a^n = a^(m+n); a^m / a^n = a^(m−n); (a^m)^n = a^(mn); a^0 = 1; a^(−n) = 1/a^n. Logarithms: log(xy) = log x + log y; log(x/y) = log x − log y; log(x^n) = n log x.

#### Sequences

Arithmetic: a_n = a + (n − 1)d; sum S_n = n/2(2a + (n − 1)d). Geometric: a_n = ar^(n − 1); sum S_n = a(1 − r^n)/(1 − r) for r ≠ 1.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Number and Algebra is foundational

- Every other General Mathematics topic assumes fluency with these skills.
- The QCAA formula book is built around these techniques.

#### Year 11 planning pattern

- Build number sense through daily arithmetic drills.
- Practice factorisation and equation-solving.
- Drill the laws of indices and logarithms.

#### Common misconceptions (and the correction)

- "Compound interest is just simple interest multiplied." No — compound interest grows exponentially; simple interest grows linearly.
- "log(xy) = log x + log y applies to all expressions." Only when x and y are positive.

#### Specification reference

This major domain is one of three cross-cutting domains in QCE General Mathematics. Confirm the live syllabus on qcaa.qld.edu.au.

#### Worked example — solving a percentage problem with a reverse percentage

A sale price is $80 after a 20% discount off the original price. Find the original.

```
  sale = original × (1 − 0.20) = original × 0.80
  80 = original × 0.80
  original = 80 / 0.80 = $100
```

Common mistake: taking 20% of $80 and adding it on, giving $96. The discount was applied to the original, not to the sale price, so the operation is division by 0.80, not multiplication by 1.20.

#### Worked example — factorising a quadratic trinomial

Factorise x² + 7x + 12.

```
  Find two numbers p and q such that
    p × q = 12  (the constant term)
    p + q =  7   (the coefficient of x)

  p = 3, q = 4. (3 × 4 = 12, 3 + 4 = 7.)

  Therefore x² + 7x + 12 = (x + 3)(x + 4).
```

Check by expansion: (x + 3)(x + 4) = x² + 4x + 3x + 12 = x² + 7x + 12 ✓.

For ax² + bx + c with a ≠ 1, the systematic method is to multiply a × c, find two numbers whose product is ac and whose sum is b, then split the middle term and factorise in pairs.

#### Worked example — logarithm laws in practice

Simplify log₂(40) − log₂(5).

```
  log₂(40) − log₂(5) = log₂(40 / 5)    [log law: log x − log y = log(x/y)]
                      = log₂(8)
                      = 3                 [since 2³ = 8]
```

A common error is to write log₂(40 − 5) = log₂(35). Subtraction inside the log does not match subtraction outside it.

#### Worked example — arithmetic series sum

Find the sum of the first 20 terms of the arithmetic sequence with a = 3 and d = 5.

```
  a_n = a + (n − 1)d
  a_20 = 3 + 19 × 5 = 98

  S_n = n/2 × (2a + (n − 1)d)
      = 20 / 2 × (2 × 3 + 19 × 5)
      = 10 × (6 + 95)
      = 10 × 101
      = 1010
```

Alternative check: S_n = n × (a + a_n) / 2 = 20 × (3 + 98) / 2 = 20 × 50.5 = 1010 ✓.

#### Worked example — geometric series sum

Find the sum of the first 8 terms of a geometric series with a = 2 and r = 3.

```
  a_n = a × r^(n − 1)
  a_8 = 2 × 3⁷ = 2 × 2187 = 4374

  S_n = a × (1 − r^n) / (1 − r)
      = 2 × (1 − 3⁸) / (1 − 3)
      = 2 × (1 − 6561) / (−2)
      = 2 × (−6560) / (−2)
      = 6560
```

For r > 1 this formula uses (r^n − 1) / (r − 1) to keep the denominator positive; both forms are equivalent.

#### Common marking-scheme mistakes

- Treating "increase by r%" as additive (a + r) instead of multiplicative (a × 1 + r/100).
- Forgetting that log(1) = 0 and log(base) = 1. The boundary values get tested directly.
- Assuming the quadratic formula always gives two real roots. The discriminant can be negative.
- Writing S_n = a(1 − r^n)/(1 − r) when r = 1. The formula divides by zero; the sum is just n × a.
- Confusing arithmetic nth term a + (n − 1)d with the geometric form ar^(n − 1) — they look similar but the operation inside is addition versus multiplication.
- Leaving answers as fractions of logs instead of converting to a numerical value when the question asks for an exact value (or vice versa).

#### 20-minute recap before you walk in

- Five index laws and three log laws on a single index card. Drill until they are automatic.
- For a quadratic ax² + bx + c, the product-sum method is faster than the quadratic formula on small numbers.
- For reverse percentages, divide by (1 − rate), do not multiply by (1 + rate).
- For series sums, check whether the sequence is arithmetic or geometric before picking a formula.
- Logarithm questions usually simplify to log of an integer or a simple fraction. If you still see logs in the final answer, check the working.

#### Sub-topics the syllabus lists that this note does not cover in detail

The QCAA General Mathematics syllabus in the Number and Algebra domain also lists the following sub-topics, which are touched on above but deserve separate revision:

- Scientific notation, including significant figures and rounding.
- Ratio and proportion in partition problems (dividing a quantity in a given ratio).
- The change-of-base formula for logarithms: log_a x = log x / log a.
- Recurrence relations and their explicit solutions, including the fixed point of a_(n+1) = r a_n + b.
- Applications of arithmetic and geometric series in financial contexts (annuities, superannuation).

Confirm the live sub-topic list on the QCAA General Mathematics syllabus page before planning revision around these.

---

*Last updated 2026-09-20. Source: QCE General Mathematics General senior syllabus (2025), https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/general-mathematics. Awarding body: Queensland Curriculum and Assessment Authority (QCAA).*