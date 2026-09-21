---



exam: neco
examName: NECO SSCE
subject: mathematics
subjectName: Mathematics
topic: math-10
topicName: "Trigonometry: Ratios and Graphs"
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.668023"
lastUpdated: "2026-09-21"
diagramPrompt: "Mathematical diagram showing Trigonometry: Ratios and Graphs concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Trigonometry: Ratios and Graphs

### 🟢 Lite — Quick Review (1h–1d)
> Last-pass facts for the six ratios, the special angles, and the three graphs.

Three ratios do almost all the work in a right-angled triangle: **sin θ**, **cos θ**, **tan θ**. Memory Hook: **SOH-CAH-TOA** — Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent. The other three — cosecant, secant, cotangent — are mere reciprocals, so learn them as `1/sin θ`, `1/cos θ`, `1/tan θ` and stop memorising them twice.

| Ratio | Definition | Exact values to memorise |
|---|---|---|
| sin θ | opposite ÷ hypotenuse | 0, ½, √2/2, √3/2, 1 at 0°, 30°, 45°, 60°, 90° |
| cos θ | adjacent ÷ hypotenuse | 1, √3/2, √2/2, ½, 0 at 0°, 30°, 45°, 60°, 90° |
| tan θ | opposite ÷ adjacent = sin/cos | 0, 1/√3, 1, √3, undefined at 90° |

> 💡 **High-Yield Memory Hook:** ASTC on the unit circle — **A**ll positive in Q1, **S**ine in Q2, **T**angent in Q3, **C**osine in Q4; reads anticlockwise and tells you the sign of every ratio without thinking.

The three graphs reduce to one rule: y = sin x and y = cos x have **period 360°** and amplitude 1, while y = tan x has **period 180°** with vertical asymptotes at 90° and 270°. Draw the axes, mark the five key points of each curve, and label the asymptotes — NECO marks both plotting and labels.

### 🟡 Standard — Regular Study (2d–2mo)

#### The Six Ratios and Their Reciprocal Pairings

Every trig ratio of an acute angle θ is dimensionless — a pure number, never metres. In a right-angled triangle with sides labelled relative to θ, the hypotenuse is the longest side, the opposite side sits across from θ, and the adjacent side is the third leg that touches θ. The three "extra" ratios exist only as reciprocals:

- cosec θ = 1 / sin θ
- sec θ = 1 / cos θ
- cot θ = 1 / tan θ = cos θ / sin θ

Two identities link everything: `1 + tan²θ = sec²θ` and `1 + cot²θ = cosec²θ`. Both are dimensionless and follow from dividing `sin²θ + cos²θ = 1` by `cos²θ` or `sin²θ` respectively.

#### Special-Angle Table (memorise the bold row)

| θ | 0° | 30° | 45° | 60° | 90° |
|---|---|---|---|---|---|
| **sin θ** | 0 | ½ | **√2/2** | √3/2 | 1 |
| **cos θ** | 1 | √3/2 | **√2/2** | ½ | 0 |
| **tan θ** | 0 | 1/√3 | **1** | √3 | undefined |

| Concept pair | Easy confusion | Correct distinction |
|---|---|---|
| cos θ vs cot θ | Both written in full | cos is `adj/hyp`; cot is `adj/opp` = 1/tan |
| sin 60° vs sin 30° | Swap them | sin 30° = ½; sin 60° = √3/2 — the larger angle gives the larger sine (up to 90°) |
| cosec θ vs sec θ | Letter order | cosec = 1/sin (starts with co-sine spell); sec = 1/cos |
| Radians vs degrees on GDC | Wrong setting | NECO uses degrees; check the RAD/DEG indicator before plotting |

#### Solving Non-Right Triangles

When the triangle is not right-angled, drop SOH-CAH-TOA and switch to the **sine rule** or the **cosine rule**. In both, sides a, b, c are measured in metres and opposite angles A, B, C in degrees.

- Sine rule: `a / sin A = b / sin B = c / sin C = 2R`, where R is the circumradius (m).
- Cosine rule: `a² = b² + c² − 2bc·cos A` (note: `2bc·cos A`, not `2bc − cos A`).
- Area form: `Area = ½ · a · b · sin C` in m².

Use the sine rule for AAS, ASA, and SSA cases; use the cosine rule for SAS and SSS. Mixing them — sine rule on an SAS, cosine rule on AAS — is the surest way to lose a mark in Paper 2.

#### Worked Practice

A triangle PQR has p = 7 cm, q = 5 cm, and angle R = 60°. Find side r.

1. Label: side r is opposite angle R; sides p and q flank angle R, so this is SAS → cosine rule.
2. Apply: `r² = p² + q² − 2pq·cos R = 49 + 25 − 2(7)(5)·cos 60°`.
3. Substitute `cos 60° = ½`: `r² = 74 − 70·(½) = 74 − 35 = 39`.
4. `r = √39 ≈ 6.245 cm`.

> ⚠️ **Examiner Trap:** Many candidates write `2pq − cos R` instead of `2pq·cos R` — a single missing multiplication sign costs the entire 3 marks. State the substitution line explicitly.

#### Graph Features at a Glance

| Graph | Amplitude | Period | Zeros | Asymptotes | Key points (0° ≤ x ≤ 360°) |
|---|---|---|---|---|---|
| y = sin x | 1 | 360° | 0°, 180°, 360° | none | (0,0), (90,1), (180,0), (270,−1), (360,0) |
| y = cos x | 1 | 360° | 90°, 270° | none | (0,1), (90,0), (180,−1), (270,0), (360,1) |
| y = tan x | — | 180° | 0°, 180°, 360° | 90°, 270° | repeats every 180° between asymptotes |

### 🔴 Extended — Deep Study (3mo+)

#### Reciprocal Identities — Why They Matter Beyond the Textbook

The pairings `sin θ·cosec θ = 1`, `cos θ·sec θ = 1`, `tan θ·cot θ = 1` are not just listing items. They are the algebraic backbone of every compound-angle simplification NECO sets, and they let you convert any expression into a single ratio when an examiner asks you to "simplify". Treat them as the master key and the six ratios as the door.

When `sin θ = 0.6` and `θ` is acute, you should be able to write down `cos θ = 0.8`, `tan θ = 0.75`, `cosec θ = 5/3`, `sec θ = 5/4`, `cot θ = 4/3` in roughly eight seconds. That speed comes from recognising the 3-4-5 triangle inside the numbers, not from pressing calculator buttons.

#### Boundary Behaviour of the Three Graphs

The tangent curve breaks where cosine does — and cosine vanishes at `x = 90° + 180°k` for integer k. Those are exactly the vertical asymptotes of `y = tan x`. Understanding this link means you can sketch `y = tan x` without memorising the asymptote positions: every place cosine crosses zero, tangent blows up.

| Function | Limit behaviour | Domain note |
|---|---|---|
| sin x | bounded in [−1, 1] always | defined for all real x |
| cos x | bounded in [−1, 1] always | defined for all real x |
| tan x | → +∞ as x → 90° from below; → −∞ from above | undefined at x = 90° + 180°k |

#### Connecting to Adjacent Topics

- **Bearings and distances**: the cosine rule is the formula used in 3-D problems where `cos²A + cos²B + cos²C = 1` for direction angles of a vector.
- **Wave mechanics (Physics)**: y = A sin(ωt + φ) reuses the same amplitude-period vocabulary; the trig skill transfers directly.
- **Calculus (Further Maths)**: the derivative of sin x is cos x only when x is in **radians** — a common NECO further-maths trap when a candidate mixes units.

#### Common Mistakes Candidates Actually Make

1. Reading a calculator display in radians because the RAD light is on, then plotting points that fall halfway between the correct ones.
2. Writing `tan 90° = 1/0 = 0` on a graph rather than drawing the asymptote.
3. Pairing side a with angle A correctly in the sine rule, then swapping b and B in the next line of working.
4. Treating `cosec θ` as a primary ratio and looking it up in a four-figure table — it is not tabulated; you must invert `sin θ`.
5. Forgetting that `cos θ` is positive in Q4 while `sin θ` is negative — ASTC says "C" (cosine) only, not both.

#### Advanced Practice Prompts

1. A triangle has sides 8 cm, 11 cm and an included angle of 110°. Use the cosine rule to find the third side, then the sine rule to recover the smallest angle. Give answers to 2 d.p.
2. Sketch y = 2 sin x for `0° ≤ x ≤ 360°` on graph paper, marking amplitude and period. State the maximum value and the x-coordinate of the first minimum.

## Continue your study

- **[View this topic in your NECO SSCE roadmap](/roadmap/?exam=neco&duration=1mo)** — see where "Trigonometry: Ratios and Graphs" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neco&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NECO SSCE exam overview](/exams/neco/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/neco/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
