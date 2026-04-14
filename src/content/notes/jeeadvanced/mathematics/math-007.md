---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-007
topicName: Differentiation
weight: 5
country: india
generated: "2026-03-24T08:32:07.936791"
diagramPrompt: "Mathematical diagram showing Differentiation concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Differentiation

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Differentiation** — Quick Facts
Derivative as slope: dy/dx = lim(h→0) [f(x+h) - f(x)]/h
Standard derivatives: d/dx(xⁿ) = nxⁿ⁻¹; d/dx(sin x) = cos x; d/dx(cos x) = -sin x; d/dx(eˣ) = eˣ; d/dx(ln x) = 1/x
Chain rule: d/dx[f(g(x))] = f'(g(x)) · g'(x)
Product rule: d/dx(uv) = u'v + uv'; Quotient rule: d/dx(u/v) = (u'v - uv')/v²
⚡ Exam tip: In JEE, most differentiation questions test chain rule and implicit differentiation — master these

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Differentiation** — Study Guide

#### Derivative Definition and Interpretation

The derivative of f(x) at point x is defined as:
$$f'(x) = lim_{h \to 0} \frac{f(x+h) - f(x)}{h} = \frac{dy}{dx}$$

**Geometrically**: dy/dx represents the slope of tangent line to curve y = f(x) at point (x, f(x)). If slope = 0, point is stationary (maximum or minimum). If slope is undefined (vertical tangent or cusp), the derivative does not exist at that point.

**Physical meaning**: If y = s(t) is position and x = t is time, then dy/dx = ds/dt is velocity. Second derivative d²y/dx² = dv/dt is acceleration. JEE frequently uses this in kinematics problems.

#### Standard Derivative Formulas

| Function | Derivative |
|----------|-----------|
| xⁿ | nxⁿ⁻¹ |
| sin x | cos x |
| cos x | -sin x |
| tan x | sec²x |
| eˣ | eˣ |
| ln x | 1/x |
| aˣ | aˣ ln a |
| logₐ x | 1/(x ln a) |
| sin⁻¹ x | 1/√(1-x²) |
| cos⁻¹ x | -1/√(1-x²) |
| tan⁻¹ x | 1/(1+x²) |

#### Product and Quotient Rules

**Product Rule**: d/dx(uv) = u'v + uv'
Example: d/dx(x² sin x) = 2x sin x + x² cos x

**Quotient Rule**: d/dx(u/v) = (u'v - uv')/v²
Example: d/dx(x/ln x) = [(1)(ln x) - x(1/x)]/(ln x)² = (ln x - 1)/(ln x)²

#### Chain Rule (Composite Functions)

If y = f(g(x)), then dy/dx = f'(g(x)) · g'(x)

Example: d/dx(sin³x) = d/dx[(sin x)³] = 3(sin x)² · cos x

For a general composite: d/dx[f₁(f₂(...fₙ(x)))] = f₁'(f₂(...)) · f₂'(f₃(...)) · ... · fₙ'(x)

#### Implicit Differentiation

When equation is not solved for y (e.g., x² + xy + y² = 5), differentiate both sides w.r.t. x, treating y as function of x:

2x + y + x(dy/dx) + 2y(dy/dx) = 0
dy/dx(x + 2y) = -2x - y
dy/dx = -(2x + y)/(x + 2y)

**Inverse function rule**: If y = f⁻¹(x), then f'(f⁻¹(x)) · (dy/dx) = 1, or equivalently dy/dx = 1/f'(y)

#### Logarithmic Differentiation

For products or quotients with many factors, take ln of both sides first:

If y = xˣ, then ln y = x ln x
Differentiating: (1/y)(dy/dx) = ln x + 1
dy/dx = xˣ(ln x + 1)

This handles cases like y = (x² + 1)³/(x + 1)⁴ or y = x¹/³ · (x² + 1)²/√(x + 3)

#### Parametric Differentiation

If x = f(t) and y = g(t), then:
$$frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{g'(t)}{f'(t)}$$

Second derivative:
$$frac{d^2y}{dx^2} = \frac{d}{dx}left(frac{dy}{dx}right) = \frac{d}{dt}left(frac{dy}{dx}right) / \frac{dx}{dt}$$

⚡ JEE pattern: Parametric forms often appear in questions involving curves like cycloids, astroids, and epicycloids.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Differentiation** — Comprehensive Notes

#### Limit Definition and Differentiability

A function f(x) is differentiable at x = a if:
$$lim_{x \to a} \frac{f(x) - f(a)}{x - a}$$

exists (equivalently, left-hand limit = right-hand limit). If f is differentiable at a point, it must be continuous there (but converse is false — continuity ≠ differentiability).

**Counterexample**: f(x) = |x| is continuous at x = 0 but not differentiable there. Left-hand derivative = -1, right-hand derivative = +1.

**Cusp** (f(x) = |x|³ at origin): derivative exists despite corner — slopes match from both sides.

**Vertical tangent** (f(x) = x^(1/3)): derivative is infinite at x = 0; tangent is vertical line x = 0.

#### Mean Value Theorem and Rolle's Theorem

**Rolle's Theorem**: If f is continuous on [a,b], differentiable on (a,b), and f(a) = f(b), then there exists c ∈ (a,b) such that f'(c) = 0.

**Mean Value Theorem (Lagrange)**: If f is continuous on [a,b] and differentiable on (a,b), then there exists c ∈ (a,b) such that:
$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

This is geometrically the slope of chord AB equals slope of tangent at some c between a and b.

**Cauchy's Mean Value Theorem**: If f, g are continuous on [a,b] and differentiable on (a,b) with g'(x) ≠ 0, then:
$$\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}$$

JEE Advanced frequently uses MVT in proving inequalities.

#### Higher Order Derivatives

The nth derivative of a function is denoted dⁿy/dxⁿ or f⁽ⁿ⁾(x).

**Leibniz Rule** for nth derivative of product:
$$(fg)^{(n)} = \sum_{k=0}^{n} \binom{n}{k} f^{(k)} g^{(n-k)}$$

Standard nth derivatives to remember:
- dⁿ/dxⁿ(sin x) = sin(x + nπ/2)
- dⁿ/dxⁿ(cos x) = cos(x + nπ/2)
- dⁿ/dxⁿ(eᵃˣ) = aⁿeᵃˣ
- dⁿ/dxⁿ(xⁿ) = n! (for positive integer n)

#### Taylor and Maclaurin Series

If f is infinitely differentiable at x = a:
$$f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + ...$$

Maclaurin series (a = 0):
$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + ...$$
$$sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - ...$$
$$cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - ...$$

**JEE Application**: Using first 2-3 terms of Taylor series to approximate values or evaluate limits that are otherwise difficult (e.g., limit as x→0 of (sin x - x + x³/6)/x⁵).

#### L'Hôpital's Rule

For indeterminate forms 0/0 or ∞/∞:
$$lim_{x \to a} \frac{f(x)}{g(x)} = lim_{x \to a} \frac{f'(x)}{g'(x)}$$

Can be applied repeatedly if conditions hold. Other forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1∞) must first be converted to 0/0 or ∞/∞ form using logarithms or algebra.

**Caution**: Always verify the indeterminate form before applying. Each application requires the limit to still be indeterminate.

#### Derivative as Rate Measure

dy/dx represents rate of change of y with respect to x. If two related quantities change with time:
$$\frac{dy}{dt} = \frac{dy}{dx} \cdot \frac{dx}{dt}$$

Examples in JEE:
- A ladder sliding down wall: x² + y² = L² → 2x(dx/dt) + 2y(dy/dt) = 0
- Expanding sphere: V = (4/3)πr³ → dV/dt = 4πr²(dr/dt) = surface area × rate of change of radius
- Connected pulleys: velocity relationship from string length constraint

#### Curvature and Radius of Curvature

Radius of curvature at point on y = f(x):
$$R = \frac{[1 + (dy/dx)^2]^{3/2}}{|d^2y/dx^2|}$$

For parametric form (x(t), y(t)):
$$R = \frac{[(\dot{x})^2 + (\dot{y})^2]^{3/2}}{|\dot{x}\ddot{y} - \dot{y}\ddot{x}|}$$

where dots denote derivatives w.r.t. parameter t.

#### Successive Differentiations and Jacobians

For functions of multiple variables u(x,y), v(x,y):
- First derivative: partial derivatives ∂u/∂x, ∂u/∂y
- Jacobian: J = ∂(u,v)/∂(x,y) = |∂u/∂x ∂u/∂y; ∂v/∂x ∂v/∂y|

Jacobians appear in change of variables for multiple integrals and in implicit function theory.

⚡ **Exam tips for JEE Advanced**:
1. Chain rule is the most tested concept — if answer looks messy, reapply chain rule
2. Implicit differentiation is mandatory for questions with relations like x³ + y³ = 3axy
3. For function of function of function, differentiate step by step
4. Parametric differentiation: always compute dy/dt and dx/dt separately before dividing
5. MVT questions often appear as "prove that f(b) > f(a) when..." — use the slope inequality
6. For nth derivative problems, try to find pattern from first few derivatives
7. Taylor series beyond first 2 terms rarely needed; usually first correction term suffices
8. L'Hôpital's rule requires 0/0 or ∞/∞ form — check before applying

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
