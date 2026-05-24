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
---

# Complex Analysis

### 🟢 Lite — Quick Review (1h–1d)

**Core Theorems & Formulas**

| Concept | Key Result |
|---------|------------|
| Cauchy-Riemann (CR) | uₓ = vᵧ, uᵧ = −vₓ for f(z)=u+iv to be analytic |
| Cauchy Integral Theorem | ∮ f(z) dz = 0 if f is analytic in simply connected domain |
| Cauchy Integral Formula | f(z₀) = (1/2πi)∮ f(z)/(z−z₀) dz |
| Laurent Series | f(z) = Σaₙ(z−z₀)ⁿ valid in annular region |
| Residue Theorem | ∮ f(z) dz = 2πi Σ Res(f, poles inside C) |

**⚡ Quick recall:** Analytic = differentiable everywhere in region (not just at a point). Entire = analytic everywhere.

---

### 🟡 Standard — Regular Study (2d–2mo)

## Analytic Functions

### Definition
f(z) = u(x,y) + iv(x,y) is **analytic** (holomorphic) at z₀ if f'(z₀) exists — and crucially, this derivative must be the same from ALL directions in the complex plane.

### Cauchy-Riemann Equations
**Necessary condition:** At a point where f is analytic:
$$u_x = v_y \quad \text{and} \quad u_y = -v_x$$

**Sufficient condition:** If uₓ, vᵧ, uᵧ, vₓ exist and are continuous AND CR equations hold in a neighbourhood, then f is analytic.

**⚡ GATE Check:** Always verify CR first when asked "is f analytic?"

### Harmonic Functions
- u and v individually satisfy Laplace's equation: uₓₓ + uᵧᵧ = 0
- v is the **harmonic conjugate** of u (or vice versa)
- If v is harmonic conjugate of u: f'(z) = uₓ + ivₓ = vᵧ − iuᵧ

**Pai to find harmonic conjugate:**
Given u(x,y), find v such that vₓ = −uᵧ and vᵧ = uₓ, then integrate and check consistency.

## Conformal Mapping

### Definition
A mapping w = f(z) is **conformal** at z₀ if it preserves angles (orientation also preserved).

### Key Property
**If f is analytic and f'(z₀) ≠ 0**, the mapping is conformal at z₀.

- f'(z₀) gives the **scale factor** (magnification) and **rotation angle**
- |f'(z₀)| = scaling factor, arg f'(z₀) = rotation

**Application:** Map problems from z-plane to w-plane where boundaries become simple (e.g., half-plane → unit circle).

### Standard Mappings
| Mapping | Effect |
|---------|--------|
| w = z − a | Translation by a |
| w = e^(iz) | Maps strip 0 < Im z < π to upper half-plane |
| w = (z−a)/(z−b) | Maps circles to lines or circles |

## Cauchy Integral Theorem

**Statement:** If f is analytic in a simply connected domain D, and C is any closed contour in D:
$$\oint_C f(z) dz = 0$$

**⚡ Key:** The domain must be simply connected (no holes). If there's a pole inside, you can't apply this directly.

**Consequence:** The integral is path-independent — only the endpoints matter for analytic f.

## Cauchy Integral Formula

**Formula:** If f is analytic inside and on C, and z₀ is inside C:
$$f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} dz$$

**Extension — Derivatives:**
$$f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z)}{(z - z_0)^{n+1}} dz$$

This is remarkable: derivatives of all orders are determined by values on the boundary!

## Laurent Series

### Definition
f(z) = Σaₙ(z−z₀)ⁿ expanded around z₀, valid in annulus r₁ < |z−z₀| < r₂

- **Regular part:** Σaₙ(z−z₀)ⁿ for n ≥ 0 (Taylor part)
- **Principal part:** Σaₙ(z−z₀)ⁿ for n < 0 (negative powers)

### Classification
- **Removable singularity:** All negative coefficients vanish (limit exists)
- **Pole of order m:** Principal part has finitely many terms, highest is m/(z−z₀)^m
- **Essential singularity:** Infinitely many negative powers (Picard: takes all values except possibly one)

**⚡ GATE Test:** To classify singularity at z₀, expand in Laurent series or use limit tests.

## Residue Theorem

**Residue at pole z₀:** The coefficient a₋₁ in Laurent expansion = Res(f, z₀)

**Evaluation shortcuts:**
| Pole type | Residue formula |
|-----------|-----------------|
| Simple pole (order 1) | lim_(z→z₀) (z−z₀)f(z) |
| Order m pole | (1/(m−1)!) lim_(z→z₀) d^(m−1)/dz^(m−1)[(z−z₀)^m f(z)] |

**Residue Theorem:**
$$\oint_C f(z) dz = 2\pi i \sum_{k} \text{Res}(f, z_k)$$

Sum over all poles inside contour C.

---

### 🔴 Extended — Deep Study

## CR Equations — Derivation & Examples

For f(z) = u + iv to be differentiable along any path:
$$f'(z) = \lim_{\Delta z \to 0} \frac{f(z+\Delta z) - f(z)}{\Delta z}$$

Taking Δz → 0 along real axis: f'(z) = uₓ + ivₓ
Taking Δz → 0 along imaginary axis: f'(z) = −ivᵧ + uᵧ

Equating these gives CR: uₓ = vᵧ, uᵧ = −vₓ

**Example (GATE 2021):** f(z) = z³ + 2z
- u = x³ − 3xy² + 2x, v = 3x²y − y³ + 2y
- uₓ = 3x² − 3y² + 2, vᵧ = 3x² − 3y² + 2 ✓
- uᵧ = −6xy, vₓ = 6xy ✓
- f is entire (analytic everywhere) ✓

## Conformal Mapping Applications

**Riemann Mapping Theorem:** Any non-empty simply connected domain ≠ ℂ can be mapped conformally onto the unit disk. The actual mapping is complicated to find, but existence is guaranteed.

**GATE Application:** Use w = e^(iz) to map strip to half-plane. Use linear fractional transforms w = (z−a)/(z−b) to map circles/lines.

**Key property preserved under conformal maps:**
- Angles between curves (conformality)
- Harmony (Laplace's equation form is invariant under conformal maps — if u solves Laplace in one domain, the mapped function solves Laplace in the image domain)

## Cauchy Integral Formula — Worked

**Example:** Evaluate ∮_|z|=2 (e^z)/(z − πi/2) dz

By CIF: f(z) = e^z is entire, z₀ = πi/2 is inside |z|=2
$$\oint \frac{e^z}{z - \pi i/2} dz = 2\pi i \cdot e^{\pi i/2} = 2\pi i \cdot i = -2\pi$$

(f(z₀) = e^(πi/2) = i)

## Laurent Series — Classification

### Pole Identification Without Full Series

| Test | Result |
|------|--------|
| lim_(z→z₀) f(z) = finite | Removable singularity |
| lim_(z→z₀) (z−z₀)^m f(z) = finite non-zero for some m | Pole of order m |
| lim_(z→z₀) (z−z₀)^m f(z) has no finite limit for any m | Essential singularity |

**GATE 2020:** e^(1/z) at z=0 — expand: 1 + 1/z + 1/(2!z²) + ... — infinite negative powers → essential singularity.

## Residue Theorem — GATE Worked Example

**Evaluate:** ∮_|z|=1 e^(1/z) dz

1. z=0 is the only singularity inside |z|=1
2. Laurent of e^(1/z): 1 + 1/z + 1/(2!z²) + 1/(3!z³) + ...
3. Coefficient of 1/z: a₋₁ = 1 → Res = 1
4. Integral: 2πi × 1 = 2πi

**⚡ Shorter method:** For simple pole at z=0, Res = lim_(z→0) z·e^(1/z) — but limit requires expansion or series.

## GATE Previous-Year Highlights

| Year | Problem | Key Concept |
|------|---------|-------------|
| 2018 | Find analytic f s.t. u = x² − y² + 2y | CR + harmonic conjugate |
| 2019 | Evaluate ∮ cos z/(z² dz) over unit circle | Simple pole, Residue = 1 |
| 2020 | Show f(z) = \|z\|² is not analytic anywhere | CR fails everywhere |
| 2021 | Find conformal map: Im z > 0 → \|w\| < 1 | w = (z−i)/(z+i) or similar |
| 2022 | Laurent series of 1/(z−1)(z−2) in 1<\|z\|<2 | Principal part from z=2 singularity |
| 2023 | Evaluate ∮ e^z/z dz around z=0 | CIF: result = 2πi |
| 2023 | Classify singularity of sin z/z⁴ at z=0 | Pole of order 3 (check Laurent) |

**⚡ GATE Warning:** The most common error is forgetting that |z|² = x² + y² is NOT analytic — CR equations fail immediately. Watch for "modulus" or "conjugate" in function definition.

---

*Content adapted based on your selected roadmap duration and GATE exam preparation timeline.*
