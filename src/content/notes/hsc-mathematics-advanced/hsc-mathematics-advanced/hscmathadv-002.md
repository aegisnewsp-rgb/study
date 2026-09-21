---
exam: hsc-mathematics-advanced
examName: HSC Mathematics Advanced (NESA 2024)
subject: hsc-mathematics-advanced
subjectName: Mathematics Advanced
topic: hscmathadv-002
topicName: Trigonometric Functions
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-20
---

# Trigonometric Functions — HSC Mathematics Advanced (NESA 2024) Notes

Trigonometric Functions is one of the seven Areas of Study in the HSC Mathematics Advanced syllabus. It is introduced in Year 11 (Trigonometry and Measure of Angles, Trigonometric Identities and Equations) and extended in Year 12 (applications of sine and cosine functions to modelling periodic phenomena). Trigonometric identities and the sine and cosine rules appear across both HSC papers and are also foundational for any subsequent study of Mathematics Extension 1.

> Re-check the live specification details and any in-year assessment changes on https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Radians.** π rad = 180°. The exact values to know: 0, π/6, π/4, π/3, π/2, π, 3π/2, 2π. Sine and cosine of these angles are derived from the 30-60-90 and 45-45-90 triangles.
- **Unit circle.** Starting at (1, 0), moving counterclockwise: sin θ = y-coordinate, cos θ = x-coordinate.
- **Identities.** sin²θ + cos²θ = 1. tan θ = sin θ / cos θ. 1 + tan²θ = sec²θ. sin(π/2 − θ) = cos θ. cos(π/2 − θ) = sin θ.
- **Sine rule.** a/sin A = b/sin B = c/sin C = 2R (where R is the circumradius). Used when given two angles and a side, or two sides and an angle opposite one of them.
- **Cosine rule.** c² = a² + b² − 2ab cos C. Used when given three sides, or two sides and the included angle.
- **Area of a triangle.** Area = (1/2) ab sin C.

#### Examiner traps

- Forgetting to convert degrees to radians (or vice versa) before using identities — NESA expects radians throughout the trigonometric identities sections.
- Ambiguous case in the sine rule — given two sides and a non-included angle, there may be no triangle, one triangle, or two triangles.
- Mixing up the sine rule and cosine rule inputs — the cosine rule needs two sides and the included angle, not two sides and any angle.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Measure of angles

Radians are dimensionless: an angle of 1 radian subtends an arc of length 1 in a unit circle. The full circle is 2π radians = 360°. The conversion: degrees × π/180 = radians.

The exact values for sine and cosine of the standard angles are:

| Angle (rad) | sin | cos | tan |
|---|---|---|---|
| 0 | 0 | 1 | 0 |
| π/6 | 1/2 | √3/2 | 1/√3 |
| π/4 | √2/2 | √2/2 | 1 |
| π/3 | √3/2 | 1/2 | √3 |
| π/2 | 1 | 0 | undefined |
| π | 0 | −1 | 0 |
| 3π/2 | −1 | 0 | undefined |
| 2π | 0 | 1 | 0 |

For angles in any quadrant, use the ASTC rule (All Students Take Calculus, or "All, Sin, Tan, Cos" for angles in quadrants I, II, III, IV respectively). In Q2 sin is positive, others negative; in Q3 tan is positive, others negative; in Q4 cos is positive, others negative.

#### Pythagorean and reciprocal identities

Pythagorean: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = csc²θ.

Reciprocal: csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ.

Complementary (co-function): sin(π/2 − θ) = cos θ, cos(π/2 − θ) = sin θ, tan(π/2 − θ) = cot θ.

#### Compound angle identities

sin(A + B) = sin A cos B + cos A sin B
cos(A + B) = cos A cos B − sin A sin B
tan(A + B) = (tan A + tan B) / (1 − tan A tan B)

The double angle identities follow by setting A = B:
sin 2A = 2 sin A cos A
cos 2A = cos²A − sin²A = 1 − 2 sin²A = 2 cos²A − 1
tan 2A = 2 tan A / (1 − tan²A)

#### Trigonometric equations

To solve sin x = a for x in [0, 2π): find the principal angle θ with sin θ = a, then x = θ or x = π − θ (when the principal angle is in Q1 or Q2). For cos x = a: x = ±θ (when in Q1 or Q4). For tan x = a: x = θ or x = θ + π.

#### Sine rule

For a triangle with sides a, b, c opposite angles A, B, C: a/sin A = b/sin B = c/sin C = 2R (where R is the circumradius).

Use the sine rule when given two angles and a side (AAS or ASA), or two sides and a non-included angle (SSA — the ambiguous case).

#### Cosine rule

c² = a² + b² − 2ab cos C (and cyclic permutations).

Use the cosine rule when given three sides (SSS) or two sides and the included angle (SAS).

#### Area

Area of a triangle = (1/2) ab sin C = (1/2) bc sin A = (1/2) ac sin B.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Trigonometric Functions underpins Calculus and modelling

- **Calculus** uses trigonometric identities to simplify derivatives. The derivative of sin x is cos x, of cos x is −sin x. Chain rule: d/dx sin(g(x)) = cos(g(x)) g'(x).
- **Year 12 modelling** uses sine and cosine functions of the form y = a sin(bx + c) + d to model periodic phenomena. The amplitude is |a|, the period is 2π/|b|, the phase shift is −c/b, the vertical shift is d.
- **Mathematics Extension 1** extends to inverse trigonometric functions and additional trigonometric identities (sum-to-product, product-to-sum, triple angle).

#### Exam technique

- When solving a trigonometric equation, give ALL solutions in the given interval. Missing solutions is a common 2-mark loss.
- In modelling questions, state the period, amplitude, phase shift and vertical shift separately when describing a sinusoidal model.
- For ambiguous case questions, always check whether a triangle actually exists. The condition for a valid triangle with given a, b and A is that a > b sin A.

#### Common misconceptions (and the correction)

- "sin(x + π) = sin x." No — sin(x + π) = −sin x.
- "tan θ = sin θ / cos θ always." Only when cos θ ≠ 0. The identity is undefined at θ = π/2 + kπ.
- "A triangle can always be formed given two sides and a non-included angle." No — the ambiguous case may give no triangle or two triangles.
- "The sine rule gives the acute angle." The sine rule gives the angle in [0, π]; for the ambiguous case, both θ and π − θ satisfy sin θ = sin(π − θ).

#### Specification reference

This Area of Study is assessed across both HSC Mathematics Advanced examination papers. Higher-tariff questions in Year 12 combine trigonometric functions with calculus (differentiation, integration, optimisation). Confirm the live assessment weighting and any tier-specific exclusions on curriculum.nsw.edu.au for the current specification before final revision.

---

*Last updated 2026-09-20. Source: NSW Mathematics Advanced 11–12 Syllabus (2024), https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview. Awarding body: NSW Education Standards Authority (NESA). Tier rules, calculator policy and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*