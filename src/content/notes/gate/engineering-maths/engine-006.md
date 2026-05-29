---
exam: gate
examName: "GATE"
subject: engineering-maths
subjectName: "Engineering Maths"
topic: engine-006
topicName: "Complex Analysis"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-05-29"
---

# Complex Analysis

### 🟢 Lite — Quick Review (1h–1d)

**Complex Analysis** studies functions of a complex variable *f*(*z*) where *z* = *x* + *iy*, primarily in the context of analyticity, contour integration, and singularities in the complex plane.

**Key definitions:**
- **Analytic**: *f*(*z*) is differentiable at every point in a neighborhood — not just at a point.
- **Cauchy-Riemann (C-R) equations**: for *f*(*z*) = *u*(*x*,*y*) + *iv*(*x*,*y*), analyticity requires **uₓ = vᵧ** and **uᵧ = −vₓ**.
- **Singularity types**: removable (limit finite), pole (order *n* finite), essential (infinite order).
- **Residue** at *z* = *a*: coefficient of 1/(*z*−*a*) in Laurent series.

**Must-know formulas:**
- **C-R**: uₓ = vᵧ, uᵧ = −vₓ
- **Cauchy integral formula**: *f*(*a*) = (1/2πi) ∮ *f*(*z*)/(*z*−*a*) dz
- **Residue theorem**: ∮ *f*(*z*) dz = 2πi × (sum of residues inside *C*)

**High-yield exam pointers for GATE:**
1. GATE Engineering Maths carries ~13–15 marks total; Complex Analysis typically yields **2–4 marks** as 1-mark MCQ or 2-mark NAT.
2. Questions often ask to **verify analyticity via C-R equations** first — never skip this step.
3. For pole of order *n* at *z* = *a*, use: Res = (1/(*n*−1)!) × lim_{z→a} d^{n−1}/dz^{n−1}[(*z*−*a*)*^n f(*z*)].
4. Common trap: applying Cauchy's theorem (integral = 0) when singularities lie inside the contour.

---

### 🟡 Standard — Regular Study (2d–2mo)

## Analyticity and the Cauchy-Riemann Equations

A function *f*(*z*) = *u*(*x*,*y*) + *iv*(*x*,*y*) is **analytic** (holomorphic) on a domain *D* if it is complex-differentiable at every point of *D*. Differentiability demands that the C-R equations hold:

$$u_x = v_y \quad \text{and} \quad u_y = -v_x$$

and additionally that these partial derivatives are **continuous** in a neighborhood. Both conditions are required — satisfying C-R alone is insufficient for analyticity unless continuity is confirmed.

## Singularities and Their Classification

Let *f* have an isolated singularity at *z*₀:

- **Removable singularity**: lim_{z→z₀} *f*(*z*) exists finitely. The function can be redefined to be analytic at *z*₀.
- **Pole of order *m***: |*f*(*z*)| → ∞ as *z* → *z*₀, and (*z*−*z*₀)^*m* f(*z*) is analytic and non-zero at *z*₀.
- **Essential singularity**: Laurent series has infinitely many negative powers; behaviour is wild (Picard's theorem).

## Residue Calculation

The **residue** at a pole of order *n* at *z* = *a* is:

$$\text{Res}_{z=a} f(z) = \frac{1}{(n-1)!} \lim_{z\to a} \frac{d^{n-1}}{dz^{n-1}}\left[(z-a)^n f(z)\right]$$

For a **simple pole** (*n* = 1): Res = lim_{z→a} (*z*−*a*) f(*z*).

## Cauchy's Integral Theorem and Formulae

- **Cauchy's theorem**: if *f* is analytic on and inside a closed contour *C*, then ∮_C f(*z*) dz = 0.
- **Cauchy integral formula** (for derivatives): if *f* is analytic inside *C*, then

$$f^{(n)}(a) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z-a)^{n+1}} dz$$

This extends to evaluating higher-order derivatives directly via contour integration.

## Residue Theorem for Contour Integration

For a function analytic except at isolated singularities inside *C*:

$$\oint_C f(z)\, dz = 2\pi i \sum \text{Residues inside } C$$

GATE typically asks to evaluate real integrals (e.g., ∫₀^{2π} R(sinθ, cosθ) dθ) by converting to a contour integral on |*z*| = 1.

| Concept | Condition | Key formula |
|---|---|---|
| Analyticity | C-R + continuity | *f*′ exists on neighborhood |
| Simple pole residue | order 1 | lim_{z→a} (*z*−*a*) f(*z*) |
| *n*th order pole residue | order *n* | derivative formula above |
| Cauchy theorem | analytic on & inside *C* | ∮ f dz = 0 |
| Residue theorem | isolated singularities | 2πi × sum of residues |

**Typical GATE question patterns**: (a) verify analyticity by applying C-R to a given *f*, (b) identify singularity type and compute residue, (c) evaluate a closed contour integral using the residue theorem.

---

### 🔴 Extended — Deep Study (3mo+)

## Laurent Series and the Ring of Convergence

When singularities lie inside a region, **Taylor series fails** — the correct tool is the **Laurent series**:

$$f(z) = \sum_{n=-\infty}^{\infty} a_n (z-a)^n, \quad a_n = \frac{1}{2\pi i} \oint_C \frac{f(\zeta)}{(\zeta-a)^{n+1}} d\zeta$$

The series splits into the **analytic part** (non-negative powers) and the **principal part** (negative powers). The coefficient *a*_{−1} equals the residue. Convergence holds in the annulus *R*₁ < |*z*−*a*| < *R*₂ where *R*₁ is distance to the nearest singularity and *R*₂ is distance to the next one.

## Essential Singularities — Weierstrass and Picard

An **essential singularity** has infinitely many negative terms in its Laurent expansion. Weierstrass's theorem: near an essential singularity, *f*(*z*) gets arbitrarily close to any complex value infinitely often. Picard's stronger result: *f* takes **every** complex value (with at most one exception) infinitely often in any neighborhood of an essential singularity. Example: *e*^{1/*z*} has an essential singularity at *z* = 0.

## Singularity at Infinity

Treat *w* = 1/*z*; expand around *w* = 0. Classify the singularity at infinity via the behavior of *f*(*w*) at *w* = 0:
- If *f*(*z*) → 0 as |*z*| → ∞ → removable singularity at infinity.
- If *f*(*z*) → constant ≠ 0 → simple pole at infinity.
- If *f*(*z*) grows as *z*^*n* → pole of order *n* at infinity.
- If behavior is unbounded in an essential way → essential singularity at infinity.

**Residue at infinity**: Res_{*z*=∞} f(*z*) = −Res_{w=0} (1/*w*²) f(1/*w*). Useful when it's easier to compute the residue at *z* = ∞ than sum residues elsewhere.

## Conformal Mapping

A map *w* = *f*(*z*) is **conformal** (angle-preserving) if *f* is analytic with *f*′(*z*) ≠ 0. Conformal maps preserve:
- Oriented angles between curves.
- The shape of infinitesimal figures (locally).

Applications in engineering: solving Laplace's equation (heat transfer, fluid flow) by mapping complicated domains to simpler ones (e.g., unit disk) where boundary conditions are easier to apply.

## Common Mistakes and Traps in GATE

1. **Assuming Cauchy's theorem applies** when singularities are inside *C*. If any singularity lies on or inside the contour, the integral is *not* zero — use the residue theorem instead.
2. **Using the wrong order for the residue formula** — applying the simple-pole formula to a higher-order pole yields a wrong answer.
3. **Skipping the analyticity check** before applying Cauchy's integral formula — the formula requires analyticity on and inside *C*.
4. **Forgetting the singularity at infinity** when evaluating integrals over all singularities. The sum of all residues including at infinity equals zero, so Res_{∞} = −∑ all finite residues.
5. **Neglecting continuity of C-R partial derivatives** — a function can satisfy C-R at a point but still fail to be analytic because the partials are discontinuous there.

## Practice Prompts

1. Classify the singularity of *f*(*z*) = *e*^{z}/(*z*−1)³ at *z* = 1 and compute Res_{z=1} f(*z*).

2. Evaluate ∮_C (sin *z*)/(*z*(2z−1)) dz where *C* is |*z*| = 2, traversed counterclockwise.

3. Use the residue theorem to evaluate the real integral ∫₀^{2π} dθ/(1 + *a* sin θ) for |*a*| < 1.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
