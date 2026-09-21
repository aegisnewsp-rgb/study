---
exam: ncea-level-3
examName: NCEA Level 3 (Mathematics / Calculus)
subject: mathematics-l3
subjectName: Mathematics (Calculus)
topic: mathl3-003
topicName: "Apply trigonometric methods in solving problems (91575)"
weight: 4
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Apply trigonometric methods in solving problems (91575) — NCEA Level 3 Calculus Notes

Achievement Standard 91575 carries 4 credits and tests trigonometric identities, addition and double-angle formulas, equations involving compound angles, and applications in 2D and 3D problems. It is the Level 3 progression from the Level 2 standard 91259. The content is essential for first-year university STEM courses and for the Level 3 differentiation and integration standards, where trigonometric identities appear in derivative and integral calculations.

> Verify the live achievement standard document on https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **4 credits**, internally assessed by the school, NZQA moderated.
- Topics: compound angle identities (sin(A ± B), cos(A ± B), tan(A ± B)), double-angle identities (sin 2A, cos 2A, tan 2A), solving trig equations using these identities, applications in 2D and 3D problems.
- **Merit** requires relational thinking — selecting the right identity for the problem.
- **Excellence** requires extended abstract thinking — proving identities, deriving formulas, generalising to n-angle identities.

#### Examiner traps

- Forgetting that trig equations have multiple solutions (the periodic nature of sine, cosine and tangent).
- Mixing up the identities (e.g., sin(A + B) vs sin A + sin B — the first is a single identity, the second is generally not an identity).
- Sign errors on the double-angle formulas (especially for cos 2A = cos²A − sin²A vs 1 − 2sin²A vs 2cos²A − 1, all correct but different forms).

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Compound angle identities

**Sine:**

sin(A + B) = sin A cos B + cos A sin B
sin(A − B) = sin A cos B − cos A sin B

**Cosine:**

cos(A + B) = cos A cos B − sin A sin B
cos(A − B) = cos A cos B + sin A sin B

**Tangent:**

tan(A + B) = (tan A + tan B) / (1 − tan A tan B)
tan(A − B) = (tan A − tan B) / (1 + tan A tan B)

#### Double-angle identities

**Sine:**

sin 2A = 2 sin A cos A

**Cosine:**

cos 2A = cos²A − sin²A = 1 − 2sin²A = 2cos²A − 1

**Tangent:**

tan 2A = 2 tan A / (1 − tan²A)

These follow from the compound angle formulas by setting B = A.

#### Solving trig equations

The key insight: trig equations have infinitely many solutions due to periodicity.

For sin x = k:

- General solution: x = arcsin(k) + 360°n, or x = 180° − arcsin(k) + 360°n, for integer n.
- For x in [0°, 360°): two solutions (unless k = ±1, in which case one).

For cos x = k:

- General solution: x = arccos(k) + 360°n, or x = −arccos(k) + 360°n, for integer n.
- For x in [0°, 360°]: two solutions (unless k = ±1, in which case one).

For tan x = k:

- General solution: x = arctan(k) + 180°n, for integer n.
- For x in [0°, 180°): one solution.

#### Worked example using double-angle

Prove: sin 3A = 3 sin A − 4 sin³A.

sin 3A = sin(2A + A) = sin 2A cos A + cos 2A sin A
       = (2 sin A cos A) cos A + (cos²A − sin²A) sin A
       = 2 sin A cos²A + cos²A sin A − sin³A
       = 3 sin A cos²A − sin³A
       = 3 sin A (1 − sin²A) − sin³A
       = 3 sin A − 3 sin³A − sin³A
       = 3 sin A − 4 sin³A. ∎

#### 3D applications

In 3D trigonometry, the same compound and double-angle identities apply to any angle, including the angles between lines and planes in 3D space. The standard approach:

1. Identify the triangle containing the angle.
2. Reduce the 3D problem to a 2D cross-section.
3. Apply the appropriate identity or rule.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Proving trig identities

The strategy for proving an identity:

1. Start with the more complicated side.
2. Use known identities to simplify (compound angle, double-angle, Pythagorean identities).
3. Reduce to the simpler side.

Example: Prove (sin A + cos A)² = 1 + sin 2A.

(sin A + cos A)² = sin²A + 2 sin A cos A + cos²A
                 = (sin²A + cos²A) + 2 sin A cos A
                 = 1 + sin 2A. ∎

#### Sum-to-product and product-to-sum

These identities are useful for simplifying expressions:

sin A + sin B = 2 sin((A + B)/2) cos((A − B)/2)
sin A − sin B = 2 cos((A + B)/2) sin((A − B)/2)
cos A + cos B = 2 cos((A + B)/2) cos((A − B)/2)
cos A − cos B = −2 sin((A + B)/2) sin((A − B)/2)

sin A sin B = (1/2)[cos(A − B) − cos(A + B)]
cos A cos B = (1/2)[cos(A − B) + cos(A + B)]
sin A cos B = (1/2)[sin(A + B) + sin(A − B)]

These appear at first-year university calculus, especially in integration.

#### Common misconceptions (and the correction)

- "sin(A + B) = sin A + sin B." No — sin(A + B) = sin A cos B + cos A sin B.
- "cos 2A = 2 cos A." No — cos 2A = cos²A − sin²A.
- "Trig equations have one solution." No — they typically have infinitely many solutions due to periodicity.
- "All trig identities are useful." Some are useful for specific problems (e.g., sum-to-product for integration); others are easier to derive on the fly.

#### Specification reference

This achievement standard is internally assessed by the school. NZQA publishes the achievement standard document, clarifications, and exemplars on ncea.education.govt.nz. Re-check the live version of 91575 before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 3 Mathematics achievement standards, https://www.nzqa.govt.nz/ncea/assessment/search.do?level=03&query=mathematics. Awarding body: NZQA.*
