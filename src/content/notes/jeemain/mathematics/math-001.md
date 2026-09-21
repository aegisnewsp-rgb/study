---



exam: jeemain
examName: JEE Main
subject: mathematics
subjectName: Mathematics
topic: math-001
topicName: Complex Numbers
weight: 4
country: india
generated: "2026-04-17T22:33:00.000000"
lastUpdated: "2026-09-21"
diagramPrompt: "Clean educational diagram showing Complex Numbers Argand plane with clear labels, white background, labeled arrows, color-coded components, exam-style illustration"





---

# Complex Numbers

### 🟢 Lite — Quick Review (1h–1d)
> Memory Hook territory — master these five letters and you hold 80% of JEE Main marks from this chapter.

A complex number is `z = x + iy`, where `x, y ∈ ℝ` and `i² = -1`. Real part is `Re(z) = x`, imaginary part is `Im(z) = y` — note that `Im(z)` is real-valued, not imaginary. The modulus is `|z| = √(x² + y²)` (dimensionless). The argument is `arg(z) = tan⁻¹(y/x)` adjusted by `+π` when `x < 0`, principal value `Arg(z) ∈ (-π, π]`.

- **Memory Hook — "RITAS"**: **R**ectangular form, **I**maginary unit `i²=-1`, **T**riangle inequality, **A**rgand plane, **S**um of roots of unity = 0.
- Conjugate `z̄ = x - iy`, and `z·z̄ = |z|²` (a non-negative real).
- Polar form: `z = r(cos θ + i sin θ) = r·e^(iθ)`.
- Euler–De Moivre: `(cos θ + i sin θ)ⁿ = cos nθ + i sin nθ`.
- Triangle inequality: `||z₁| − |z₂|| ≤ |z₁ + z₂| ≤ |z₁| + |z₂|`.

> 💡 **High-Yield Memory Hook:** Think **"i goes 1, i, −1, −i, 1…"** cycling every 4 — `i¹=i, i²=−1, i³=−i, i⁴=1`. Write these four on the margin the moment the bell rings; division by complex numbers becomes trivial.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Read this once after Lite and you can solve any single-shift complex number MCQ that JEE Main has thrown in the last five years.

#### The Three Forms of a Complex Number

The same number lives in three coordinate systems. Switching between them is the single highest-frequency operation in this chapter.

| Form | Shape | Variables (units) | When to use |
|---|---|---|---|
| Rectangular | `z = x + iy` | `x, y ∈ ℝ` (dimensionless) | Algebra, expansion, conjugation |
| Polar | `z = r(cos θ + i sin θ)` | `r = |z| ≥ 0` (dimensionless), `θ` in radians | Multiplication, division, De Moivre |
| Euler | `z = r·e^(iθ)` | `r ≥ 0`, `θ` in radians | Powers `zⁿ`, roots, rotation |

Conversion: `r = √(x²+y²)`, `θ = tan⁻¹(y/x)` with quadrant correction.

#### Properties You Must Memorise

| Identity | Result | Why JEE tests it |
|---|---|---|
| `z + z̄` | `2 Re(z)` | Identify real parts of awkward expressions |
| `z − z̄` | `2i·Im(z)` | Extract imaginary parts |
| `z·z̄` | `|z|²` | Every division problem ends here |
| `|z₁z₂|` | `|z₁|·|z₂|` | Magnitudes multiply |
| `arg(z₁z₂)` | `arg(z₁) + arg(z₂)` mod `2π` | Angles add for products |
| `z̄̄` | `z` | Conjugation is involutive |
| `z⁻¹` | `z̄/|z|²` | The only way to invert |

#### Locus in the Argand Plane

Each equation in `z` is a curve on the `(x, y)` plane. Recognise the pattern, draw it, then read the question.

| Locus | Geometric figure | Centre / focus |
|---|---|---|
| `|z − a| = r` | Circle | `a`, radius `r` |
| `|z − z₁| = |z − z₂|` | Perpendicular bisector | Midpoint of `z₁z₂` |
| `arg(z − a) = α` | Half-line from `a` | Ray at angle `α` |
| `|z − a| + |z − b| = k` | Ellipse (if `k > |a-b|`) | Foci `a, b` |
| `Re(z) = c` | Vertical line | `x = c` |

#### Worked Example — Evaluating a Quotient Modulus

**Set-up.** Find `|z|` and `Arg(z)` for `z = (1 + 3i)/(2 − i)`.

#### Step 1 — Multiply by conjugate.
`z = (1 + 3i)(2 + i) / [(2 − i)(2 + i)] = (1·2 + 1·i + 3i·2 + 3i·i) / (4 + 1)`
`= (2 + i + 6i − 3) / 5 = (−1 + 7i)/5`.

#### Step 2 — Modulus.
`|z| = √[((−1)/5)² + (7/5)²] = (1/5)√(1 + 49) = √50/5 = √2` (dimensionless).

#### Step 3 — Argument.
`θ = tan⁻¹(7/−1)`. Because `x = −1/5 < 0` and `y = 7/5 > 0`, the point sits in the second quadrant, so `Arg(z) = π − tan⁻¹(7)`.

> ⚠️ **Examiner Trap:** Many candidates write `arg(z) = tan⁻¹(7)` and place the point in the first quadrant — wrong sign on `x` means add `π`, never subtract. Another common slip: writing `tan⁻¹(−7)` and giving a fourth-quadrant angle. Both lose the mark.

#### Practice Trigger

For `z = (3 + i)/(1 − 2i)`, compute `|z|²` and `Arg(z)` in the same three steps. The denominator conjugate `(1 + 2i)` makes `|denominator|² = 5`; the numerator expands to `5 − 5i`, so `|z|² = 50/25 = 2` and the angle lives in the fourth quadrant because `Re(z) > 0, Im(z) < 0`.

---

### 🔴 Extended — Deep Study (3mo+)
> Read this only if you want every nuance — the parts of the chapter JEE Main surfaces once every few shifts and that separates a 99-percentile from a 95.

#### De Moivre and Roots of Unity

`zⁿ = 1` has exactly `n` solutions, equally spaced on the unit circle. The `k`-th root is `e^(2πik/n)`, `k = 0, 1, …, n−1`. Three facts examiners exploit:

- Sum of all `n`-th roots: `0`.
- Product of all `n`-th roots: `(−1)^(n−1)`.
- Cube roots of unity satisfy `1 + ω + ω² = 0` and `ω³ = 1`, so `ω̄ = ω²`.

Use De Moivre for `(1 + i)¹⁰`: first convert to polar. `|1+i| = √2`, `arg(1+i) = π/4`, so `(1+i)¹⁰ = (√2)¹⁰ · e^(i·10π/4) = 32 · e^(i·5π/2) = 32 · e^(iπ/2) = 32i`.

#### Square Root of a Complex Number

`√(x + iy) = ±[√((r+x)/2) + i·sgn(y)·√((r−x)/2)]` where `r = √(x²+y²)`. The `±` gives two values. Drop it and you lose a mark on JEE's integer-type section.

#### Bounds and the Triangle Inequality Trap

The inequality `|z₁ + z₂| ≤ |z₁| + |z₂|` becomes equality **only** when `z₁` and `z₂` have the same argument (they point the same way). For maximum of `|z + 1| + |z − 1|` subject to `|z| = 3`, the answer comes from collinearity, not algebra. For minimum, you need opposite direction or the straight-line distance.

#### Common Mistakes Worth Punishing You Once

1. `arg(z₁ + z₂) ≠ arg(z₁) + arg(z₂)` — angles add for products, **never** sums.
2. `√(ab) = √a · √b` fails for complex `a, b` unless at least one is a non-negative real.
3. Dropping `±` from `√(x + iy)` — only one root reported.
4. Treating `Im(z)` as imaginary — `Im(z)` is real, equal to `y`.
5. Dividing by `z` without checking `|z| ≠ 0`.

#### Advanced Practice Prompts

1. **Roots of unity product.** Prove that the product of all fifth roots of unity is `1`, then use it to find the product of their imaginary parts.
2. **Locus with two constraints.** Find the locus of `z` satisfying `|z − 1| = |z + i|` and `arg(z + i) = π/4`. The first is a perpendicular bisector; the second is a ray — intersection is a single point. Solve it both geometrically and algebraically to see why both methods should agree.

> ⚠️ **Examiner Trap:** In locus problems with both modulus and argument constraints, students substitute the algebraic form and solve a four-variable mess. Translate each constraint into a geometric fact first — circle, ray, line — and the answer falls out of an intersection.

---

## Continue your study

- **[View this topic in your JEE Main roadmap](/roadmap/?exam=jeemain&duration=1mo)** — see where "Complex Numbers" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeemain&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Main exam overview](/exams/jeemain/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeemain/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
