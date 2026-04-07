---
exam: cuet
examName: CUET UG
subject: mathematics
subjectName: Mathematics
topic: math-019
topicName: Differentiation
weight: 3
country: india
generated: "2026-03-29T05:06:42"
---
# Differentiation

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision.

**Differentiation** — Key Facts for CUET
• **Power Rule:** d/dx(xⁿ) = nxⁿ⁻¹, valid for any real exponent n. For n = 0, derivative of constant 1 is 0.
• **Most tested concept:** **Chain Rule** for composite functions — d/dx[f(g(x))] = f'(g(x)) · g'(x). Always multiply by the derivative of the inner function.
• **Common mistake:** Forgetting to apply the **product rule** (d/dx[uv] = u'v + uv') and **quotient rule** (d/dx[u/v] = (u'v − uv')/v²) when differentiating products or quotients.
• **Key technique:** **Logarithmic differentiation** — take ln of both sides for functions of the form y = [f(x)]^{g(x)} to simplify differentiation.
• **Important exception:** Derivative of **ln|f(x)|** is f'(x)/f(x). The absolute value inside ln ensures the argument is positive, but the derivative formula ignores the sign because ln is defined only for positive arguments, so we write d/dx[ln|f(x)|] = f'(x)/f(x).
• **Most frequent question type:** Differentiate a polynomial, rational, trigonometric, or exponential function; find the equation of the tangent line at a point.
⚡ **Exam tip:** For **implicit differentiation**, differentiate both sides with respect to x, treating y as a function of x, then solve for dy/dx. Do not forget to apply the chain rule to terms involving y.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Differentiation** — CUET Study Guide

**Differentiation** measures the instantaneous rate of change of a function. The derivative f'(x) = lim_{h→0} [f(x+h) − f(x)]/h measures the slope of the tangent line at x. Geometrically, dy/dx is the slope of the tangent; physically, it is velocity if y is position.

**Key formulas to memorise:**
- **Polynomial:** d/dx(xⁿ) = nxⁿ⁻¹.
- **Trigonometric:** d/dx(sin x) = cos x; d/dx(cos x) = −sin x; d/dx(tan x) = sec² x.
- **Exponential:** d/dx(eˣ) = eˣ; d/dx(aˣ) = aˣ ln a.
- **Logarithmic:** d/dx(ln x) = 1/x; d/dx(logₐ x) = 1/(x ln a).
- **Product rule:** (uv)' = u'v + uv'.
- **Quotient rule:** (u/v)' = (u'v − uv')/v².
- **Chain rule:** (f ∘ g)'(x) = f'(g(x)) g'(x).

**Higher-order derivatives:** f''(x) is the derivative of f'(x); f'''(x) is the third derivative. The **nth derivative** of xⁿ is n! if the order equals n, otherwise zero for terms beyond xⁿ.

**Applications:**
- **Tangent line:** Equation at x = a: y − f(a) = f'(a)(x − a).
- **Increasing/Decreasing:** f'(x) > 0 ⇒ function is increasing; f'(x) < 0 ⇒ decreasing.
- **Maxima/Minima:** f'(x) = 0 at stationary points. Use **second derivative test**: f''(x) > 0 ⇒ local minimum; f''(x) < 0 ⇒ local maximum.

**Practice Numerical 1:** Find dy/dx if y = x² sin x.
- Using product rule: u = x², v = sin x → u' = 2x, v' = cos x.
- dy/dx = 2x sin x + x² cos x.

**Practice Numerical 2:** Find the equation of the tangent to y = e^{2x} at x = 0.
- y(0) = e⁰ = 1. dy/dx = 2e^{2x} → dy/dx|{x=0} = 2.
- Tangent: y − 1 = 2(x − 0) → y = 2x + 1.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer timeline.

**Differentiation** — Comprehensive CUET Notes

**Deeper theory and proof:**

*Proof of the chain rule using limits:* Let y = f(g(x)). Define the difference quotient Δy/Δx = [f(g(x+Δx)) − f(g(x))]/Δx. As Δx → 0, g(x+Δx) → g(x) (by continuity of differentiable functions). Rewrite the quotient as [f(g(x+Δx)) − f(g(x))]/[g(x+Δx) − g(x)] · [g(x+Δx) − g(x)]/Δx. The first factor tends to f'(g(x)) and the second to g'(x). Hence (f ∘ g)'(x) = f'(g(x)) g'(x). This formalises the chain rule from first principles.

*Mean Value Theorem (MVT):* If f is continuous on [a, b] and differentiable on (a, b), there exists c ∈ (a, b) such that f'(c) = [f(b) − f(a)]/(b − a). Geometrically, the tangent at c is parallel to the secant joining (a, f(a)) and (b, f(b)). This theorem underlies many results in calculus, including l'Hôpital's rule and the relationship between increasing/decreasing functions and their derivatives.

*l'Hôpital's Rule:* For indeterminate forms 0/0 or ∞/∞, if lim_{x→a} f(x)/g(x) yields an indeterminate form, then lim_{x→a} f(x)/g(x) = lim_{x→a} f'(x)/g'(x), provided the limit on the right exists. Example: lim_{x→0} sin x/x = lim_{x→0} cos x/1 = 1. This is frequently tested in CUET.

*Taylor and Maclaurin series:* If f is infinitely differentiable at a, f(x) = Σ_{n=0}^{∞} f⁽ⁿ⁾(a)/n! · (x − a)ⁿ. For a = 0, this is the Maclaurin series. Example: eˣ = Σ xⁿ/n!; sin x = Σ (−1)ⁿ x²ⁿ⁺¹/(2n+1)!.

*Leibniz rule for higher derivatives of a product:* (uv)⁽ⁿ⁾ = Σ_{k=0}^{n} C(n, k) u⁽ᵏ⁾ v⁽ⁿ⁻ᵏ⁾. This generalises the product rule to nth derivatives and is useful for series expansion of product of two functions.

*Cross-topic connection — kinematics:* Velocity v(t) = ds/dt, acceleration a(t) = dv/dt = d²s/dt². If s(t) = t³ − 6t² + 9t + 1, then v(t) = 3t² − 12t + 9, a(t) = 6t − 12. Setting a(t) = 0 gives t = 2, at which point velocity is v(2) = 3(4) − 12(2) + 9 = 3.

*Challenging solved example:* Show that the function f(x) = x³ − 3x² + 6x − 4 is strictly increasing on ℝ.
- Compute f'(x) = 3x² − 6x + 6 = 3(x² − 2x + 2) = 3[(x − 1)² + 1] > 0 for all x ∈ ℝ. Since f'(x) > 0 everywhere, f is strictly increasing on ℝ. The quadratic (x − 1)² + 1 has discriminant Δ = (−2)² − 4(1)(2) = 4 − 8 = −4 < 0, confirming it is always positive.
