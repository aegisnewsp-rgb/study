---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-020
topicName: Complex Numbers
weight: 5
country: india
generated: "2026-03-24T08:32:07.943470"
diagramPrompt: "Mathematical diagram showing Complex Numbers concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Complex Numbers

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Complex Numbers** — Quick Facts
i² = -1; z = x + iy (x = real, y = imaginary part)
Modulus: |z| = √(x² + y²); Argument: arg(z) = arctan(y/x); Principal: -π < Arg(z) ≤ π
Euler's formula: e^(iθ) = cos θ + i sin θ; z = re^(iθ) = r(cos θ + i sin θ)
z₁·z₂ = r₁r₂ e^(i(θ₁+θ₂)); z̄ = x - iy; |z|² = z·z̄
⚡ Exam tip: Always find modulus first — many problems become trivial once |z| is known

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Complex Numbers** — Study Guide

#### Algebraic Form and Operations

Complex number: z = x + iy, where x, y ∈ ℝ and i² = -1.

**Operations**:
- Addition: z₁ + z₂ = (x₁+x₂) + i(y₁+y₂)
- Multiplication: z₁·z₂ = (x₁x₂ - y₁y₂) + i(x₁y₂ + x₂y₁)
- Division: z₁/z₂ = z₁·(z̄₂)/|z₂|² = [(x₁x₂ + y₁y₂) + i(x₂y₁ - x₁y₂)]/|z₂|²

**Conjugate**: z̄ = x - iy. Properties: z + z̄ = 2x (real), z - z̄ = 2iy (pure imaginary), z·z̄ = |z|².

#### Polar/Trigonometric Form

z = r(cos θ + i sin θ) = re^(iθ) where r = |z| ≥ 0 and θ = arg(z).

**Multiplication in polar form**: If z₁ = r₁e^(iθ₁), z₂ = r₂e^(iθ₂), then z₁z₂ = r₁r₂e^(i(θ₁+θ₂))

**De Moivre's theorem**: (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ) = e^(inθ)
This is fundamental for computing powers and roots of complex numbers.

#### Roots of Complex Numbers

If zⁿ = 1, solutions are the n-th roots of unity:
$$z_k = e^{2\pi ik/n} = \cos\left(\frac{2\pi k}{n}\right) + i\sin\left(\frac{2\pi k}{n}\right), \quad k = 0, 1, 2, ..., n-1$$

Sum of n-th roots of unity = 0. Product of n-th roots of unity = (-1)^(n-1).

**Square roots of z = a + ib**:
Let √z = x + iy. Then (x + iy)² = a + ib.
Equating real and imaginary parts: x² - y² = a, 2xy = b.
Solution: x = ±√[(|z| + a)/2], y = sign(b)·±√[(|z| - a)/2]

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Complex Numbers** — Comprehensive Notes

#### Geometry in Complex Plane

Each complex number z = x + iy corresponds to point (x,y) in Argand plane. Operations have geometric interpretations:

**Translation**: z → z + z₀ shifts point by vector corresponding to z₀.

**Rotation and scaling**: z → αz where α = re^(iθ) rotates by angle θ and scales by r.

**Reflection**: z → z̄ reflects across real axis (changes sign of imaginary part).

**Inversion**: z → 1/z̄ maps unit circle to itself, exterior to interior.

**Circle in complex form**: |z - z₀| = r represents circle centered at z₀ with radius r. |z - z₁| = k|z - z₂| is Apollonius circle (set of points with fixed ratio of distances to two fixed points).

**Line**: arg(z - z₀) = θ is half-line from z₀ at angle θ. |z - z₀| + |z - z₁| = constant is ellipse with foci at z₀, z₁.

#### Euler's Formula and Applications

$$e^{i\theta} = \cos\theta + i\sin\theta, \quad \cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}, \quad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$

**Trigonometric identities derived from Euler**:
- cos(nθ) and sin(nθ) expressed as polynomials in cos θ, sin θ (Chebyshev-like)
- cos³θ = (3 cos θ + cos 3θ)/4
- sin³θ = (3 sin θ - sin 3θ)/4

**Hyperbolic functions**: cosh x = (eˣ + e⁻ˣ)/2, sinh x = (eˣ - e⁻ˣ)/2
Note: cosh(ix) = cos x, sinh(ix) = i sin x — connection between circular and hyperbolic functions.

#### Argument Properties

arg(z₁z₂) = arg(z₁) + arg(z₂) (mod 2π)
arg(z₁/z₂) = arg(z₁) - arg(z₂) (mod 2π)
arg(z̄) = -arg(z) (mod 2π)

**Principal argument** Arg(z) ∈ (-π, π]. When adding arguments, always reduce to this range.

**Multi-valued nature**: arg(z) = Arg(z) + 2kπ, k ∈ ℤ. In complex analysis, branches matter.

**Useful inequality**: |z₁ + z₂| ≤ |z₁| + |z₂| (triangle inequality)
Equality iff one is non-negative scalar multiple of the other: z₁/z₂ ∈ ℝ⁺

Also: ||z₁| - |z₂|| ≤ |z₁ ± z₂| ≤ |z₁| + |z₂|

#### nth Roots and Their Properties

If wⁿ = z, then w = z^(1/n) = r^(1/n) e^(i(θ+2kπ)/n), k = 0, 1, ..., n-1

The n roots lie on a circle of radius r^(1/n), equally spaced by angle 2π/n.

**Sum of roots**: For equation zⁿ + aₙ₋₁zⁿ⁻¹ + ... + a₀ = 0, sum of roots = -aₙ₋₁ (by Vieta's formulas, generalizing real polynomial case).

**Geometric mean of roots**: Product of all n roots = (-1)ⁿa₀.

#### transformations and Complex Analysis Basics

**Linear fractional transformation** (Mobius transformation):
$$w = \frac{az + b}{cz + d}, \quad ad - bc \neq 0$$

Maps circles/lines to circles/lines. Preserves cross-ratio. Important in conformal mapping.

**Cauchy-Riemann equations**: If f(z) = u(x,y) + iv(x,y) is differentiable ( holomorphic), then:
$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$$

These are necessary and sufficient conditions for f to be complex differentiable (analytic).

#### Polynomial Factorization over Complex

**Fundamental theorem of algebra**: Every polynomial of degree n has exactly n complex roots (counting multiplicity).

Real polynomials have complex roots in conjugate pairs. If z = a + ib is root (b ≠ 0), then z̄ = a - ib is also root.

Factorization: x⁴ + 1 = (x² + √2x + 1)(x² - √2x + 1) over reals. Over complex: x⁴ + 1 = (x - e^(iπ/4))(x - e^(3iπ/4))(x - e^(5iπ/4))(x - e^(7iπ/4))

#### de Moivre's Theorem Applications

**Proving trig identities**:
cos 3θ = cos(2θ + θ) = cos 2θ cos θ - sin 2θ sin θ → leads to cos 3θ = 4cos³θ - 3cos θ
sin 3θ = 3 sin θ - 4 sin³θ

**Evaluating sums**: S = 1 + cos θ + cos 2θ + ... + cos nθ
Using complex exponentials: S = Re(Σ e^(ikθ)) = Re((e^(i(n+1)θ) - 1)/(e^(iθ) - 1))

**Cube roots of unity**: 1, ω, ω² where ω = e^(2πi/3) = -1/2 + i√3/2
Properties: 1 + ω + ω² = 0, ω³ = 1, ω² = ω̄

#### JEE Geometry Problems

Many JEE geometry problems become algebraic when cast in complex plane:

**Collinearity**: Points z₁, z₂, z₃ are collinear iff Im[(z₃-z₁)/(z₂-z₁)] = 0, or (z₃-z₁)/(z₂-z₁) is real.

**Perpendicular lines**: Lines from z₁ to z₂ and z₃ to z₄ are perpendicular iff (z₂-z₁)/(z₄-z₃) is purely imaginary.

**Equal angles**: ∠z₁z₂z₃ = ∠z₄z₅z₆ iff (z₃-z₂)/(z₁-z₂) and (z₆-z₅)/(z₄-z₅) have equal arguments.

**Circle through points**: Circle through z₁, z₂, z₃ has equation: (z - z₁)(z̄ - z̄₁)/(z - z₂)(z̄ - z̄₂) is real when z is on circle.

⚡ **Exam tips for JEE Advanced**:
1. For z + 1/z form, multiply by z to get quadratic: z² - (sum)z + 1 = 0
2. When problem asks "find all z such that...", z is usually expressible in polar form re^(iθ)
3. For |z - 1| = 2|z + 1|, square both sides and use |z|² = z·z̄ to get linear equation in x, y
4. Roots of unity lie on unit circle at equally spaced angles — draw diagram when unsure
5. If |z| = 1, then z̄ = 1/z — this simplifies many expressions
6. Sum of roots of zⁿ = a can be found without finding them — use Vieta's formula
7. For inequality |z₁ + z₂| ≤ ... or |z₁ - z₂| ≤ ..., try geometric interpretation or square to eliminate modulus
8. If f(z) is polynomial with real coefficients, split complex roots into conjugate pairs
9. In triangle problems on Argand plane, centroid = (z₁ + z₂ + z₃)/3

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
