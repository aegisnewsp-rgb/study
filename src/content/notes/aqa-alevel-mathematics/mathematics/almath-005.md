---
exam: aqa-alevel-mathematics
examName: A-Level Mathematics (AQA 7357)
subject: mathematics
subjectName: Mathematics
topic: almath-005
topicName: Trigonometry
weight: 4
country: uk
generated: "2026-09-22T10:00:00"
lastUpdated: "2026-09-22"
---

# Trigonometry — A-Level Mathematics (AQA 7357) Notes

Trigonometry is section E of the AQA 7357 specification. The section covers radian measure, arc length and sector area, exact values of trigonometric functions, trigonometric identities and equations, reciprocal and inverse trigonometric functions, and small-angle approximations. Trigonometry bridges the pure content (calculus of trigonometric functions, identity work in algebra) and the mechanics content (oscillations, vector resolution, projectile angles). The radian mode on the calculator and the exact-value set (π/6, π/4, π/3, and their multiples) are the two habits that make the rest of the section faster.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Radian measure

π radians = 180°. To convert degrees to radians, multiply by π/180. To convert radians to degrees, multiply by 180/π. The radian mode on a calculator is essential — leave it in degrees and you will silently get the wrong answer for every calculus-of-trig question.

#### Arc length and sector area

For a circle of radius r and angle θ (in radians):

- Arc length s = rθ.
- Sector area A = (1/2)r²θ.

The angle in degrees uses the same formulas with θ in degrees — but the formulas only "work" in radians because π cancels cleanly. In degrees you would write s = (θ/360) · 2πr and A = (θ/360) · πr².

#### Exact values to memorise

- sin(π/6) = 1/2, cos(π/6) = √3/2, tan(π/6) = 1/√3.
- sin(π/4) = √2/2 = 1/√2, cos(π/4) = √2/2 = 1/√2, tan(π/4) = 1.
- sin(π/3) = √3/2, cos(π/3) = 1/2, tan(π/3) = √3.
- sin(0) = 0, cos(0) = 1, sin(π/2) = 1, cos(π/2) = 0, sin(π) = 0, cos(π) = −1.

These exact values are the backbone of identity work and integration of trigonometric functions.

#### Two identities used everywhere

- sin²x + cos²x = 1 (the Pythagorean identity).
- tan x = sin x / cos x.

The Pythagorean identity rearranges to 1 − sin²x = cos²x and sin²x = 1 − cos²x, both of which appear in integration.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### The angle addition formulas

These are the workhorse identities:

- sin(A + B) = sin A cos B + cos A sin B.
- sin(A − B) = sin A cos B − cos A sin B.
- cos(A + B) = cos A cos B − sin A sin B.
- cos(A − B) = cos A cos B + sin A sin B.
- tan(A + B) = (tan A + tan B) / (1 − tan A tan B).
- tan(A − B) = (tan A − tan B) / (1 + tan A tan B).

The double-angle formulas follow:

- sin 2A = 2 sin A cos A.
- cos 2A = cos²A − sin²A = 1 − 2 sin²A = 2 cos²A − 1.
- tan 2A = 2 tan A / (1 − tan²A).

**Worked example.** Prove that cos 2x = 1 − 2 sin²x.

Start from cos 2x = cos²x − sin²x. Then cos²x = 1 − sin²x, so cos 2x = 1 − sin²x − sin²x = 1 − 2 sin²x. ∎

#### Solving trigonometric equations

To solve sin x = k, cos x = k, or tan x = k:

1. Use the calculator (in radian mode) to find the principal value.
2. Use the periodicity and symmetry of the function to find all solutions in the given interval.

**Sin and cos are periodic with period 2π.** Each value k ∈ [−1, 1] gives two solutions per period for sin and cos:

- sin x = k has solutions x = α + 2nπ and x = (π − α) + 2nπ for n ∈ ℤ.
- cos x = k has solutions x = ±α + 2nπ.

**Tan is periodic with period π** and gives one solution per period: x = α + nπ.

**Worked example.** Solve sin x = 0.5 for x ∈ [0, 2π].

α = π/6 (from calculator). Solutions: x = π/6 and x = π − π/6 = 5π/6.

**Worked example.** Solve 2 cos²x − cos x − 1 = 0 for x ∈ [0, 2π].

Factor: (2 cos x + 1)(cos x − 1) = 0. So cos x = −1/2 or cos x = 1.

cos x = 1: x = 0 (or 2π, but 2π is the upper bound, usually inclusive). cos x = −1/2: x = 2π/3, 4π/3.

Solutions: x = 0, 2π/3, 4π/3, 2π.

#### Reciprocal and inverse trigonometric functions

The reciprocal functions:

- sec x = 1/cos x.
- cosec x = 1/sin x.
- cot x = 1/tan x = cos x/sin x.

The inverse functions (where they exist):

- arcsin x ∈ [−π/2, π/2].
- arccos x ∈ [0, π].
- arctan x ∈ (−π/2, π/2).

Graphs: arcsin is increasing from (−1, −π/2) to (1, π/2); arccos is decreasing from (−1, π) to (1, 0); arctan is increasing from (−∞, −π/2) to (∞, π/2), asymptotic to the horizontal lines y = ±π/2.

**Derivatives** (used at A-level):

- d/dx arcsin x = 1/√(1 − x²).
- d/dx arccos x = −1/√(1 − x²).
- d/dx arctan x = 1/(1 + x²).

#### Small-angle approximations

For small θ (in radians), the approximations are:

- sin θ ≈ θ.
- tan θ ≈ θ.
- cos θ ≈ 1 − θ²/2.

These are useful in physics-style modelling questions (pendulum, projectile, optics) and in deriving the limit sin x / x → 1 as x → 0.

The condition is "small enough that higher-order terms are negligible". For a level of accuracy of about 1%, θ < 0.2 rad (about 11°) is usually fine.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Worked pattern — proving a trigonometric identity

The standard approach: start with one side (usually the more complex one) and use identities to reduce it to the other side. Every step must be a known identity, and the working must be reversible (each step is "iff", not just "implies").

**Worked example.** Prove that (1 + cos 2x)/sin 2x = cot x.

(1 + cos 2x)/sin 2x = (1 + (1 − 2 sin²x))/sin 2x = (2 − 2 sin²x)/sin 2x = 2(1 − sin²x)/sin 2x = 2 cos²x / sin 2x.

Now sin 2x = 2 sin x cos x, so the expression becomes 2 cos²x / (2 sin x cos x) = cos x / sin x = cot x. ∎

If you get stuck, try the other direction: start with cot x and use identities to reach the LHS. Sometimes that direction is cleaner.

#### Worked pattern — R-formula

For problems like a sin x + b cos x = R sin(x + α), where R = √(a² + b²) and tan α = b/a, the technique is:

a sin x + b cos x = R (sin x · a/R + cos x · b/R) = R sin(x + α), where cos α = a/R, sin α = b/R.

This lets you find the maximum and minimum of a sin x + b cos x (it's R and −R) and solve equations of the form a sin x + b cos x = c by reducing to a single sin(x + α).

#### Common misconceptions (and the correction)

- "The radian mode doesn't matter for trig." It does — in degrees, d/dx sin x = (π/180) cos x, which is wrong at A-level calculus.
- "sin(x + y) = sin x + sin y." It is sin(x + y) = sin x cos y + cos x sin y. The error is one of the most common in calculus and in identity questions.
- "sin⁻¹x = 1/sin x." The notation sin⁻¹x means arcsin x (the inverse function), not 1/sin x (which is cosec x). The reciprocal is denoted cosec.
- "All solutions of sin x = 0.5 are positive." No — sin x = 0.5 has solutions in every period, positive and negative, depending on the interval.

#### Exam technique

- For sin/cos/tan equation questions, write the general solution with +2nπ or +nπ before restricting to the interval. This shows the method even if the interval restriction is correct.
- For identity questions, work both sides to a common form (often 1, or sin x, or cos x). If you can reduce both to the same expression, the identity is proved.
- For exact-value questions, leave the answer in terms of √3 and √2 unless the question says otherwise. A decimal answer loses marks on a question that asks for an exact value.

#### Specification reference

Section E of the AQA A-level Mathematics 7357 specification appears on Paper 1 (pure content) and feeds into the calculus of trigonometric functions in differentiation (section G) and integration (section H). Confirm the live paper structure, formula booklet and any in-year specification changes on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-22. Source: AQA A-level Mathematics specification 7357, https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357. Paper structure, assessment weighting and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*