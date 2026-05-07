---
exam: gate
examName: "GATE"
subject: engineering-maths
subjectName: "Engineering Maths"
topic: engine-002
topicName: "Numerical Methods"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Numerical Methods

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Numerical Methods** — Key Facts for GATE Engineering Mathematics

**Core Topics**:
| Topic | Key Methods |
|-------|------------|
| Errors | Absolute, relative, round-off, truncation |
| Solution of Equations | Bisection, Newton-Raphson, Regula-Falsi |
| Interpolation | Newton's Forward/Backward, Lagrange |
| Numerical Integration | Trapezoidal, Simpson's 1/3 and 3/8 |
| Solution of ODEs | Euler's, RK4, Taylor's |
| Numerical Differentiation | Forward, backward, central differences |

**Key Formulas**:
- **Newton-Raphson**: x_{n+1} = x_n - f(x_n)/f'(x_n)
- **Trapezoidal**: ∫f(x)dx ≈ (h/2)[y₀ + 2y₁ + 2y₂ + ... + 2y_{n-1} + y_n]
- **Simpson's 1/3**: ∫f(x)dx ≈ (h/3)[y₀ + 4y₁ + 2y₂ + 4y₃ + ... + y_n] (n must be even)
- **RK4**: k₁ = hf(xₙ, yₙ); k₂ = hf(xₙ+h/2, yₙ+k₁/2); k₃ = hf(xₙ+h/2, yₙ+k₂/2); k₄ = hf(xₙ+h, yₙ+k₃); y_{n+1} = yₙ + (k₁+2k₂+2k₃+k₄)/6

⚡ **GATE Tip**: In GATE, **Simpson's rule** questions appear frequently — remember n must be **even** for Simpson's 1/3 rule.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Numerical Methods** — Detailed Study Guide

## Errors in Numerical Computation

### Types of Errors

| Error Type | Definition | Source |
|-----------|-----------|--------|
| **Absolute Error** | |E| = |True Value - Approximate| | — |
| **Relative Error** | RE = |E|/True Value | — |
| **Percentage Error** | RE × 100 | — |
| **Round-off Error** | Truncating digits | Limited precision |
| **Truncation Error** | Approximating infinite process | Taylor series truncation |
| **Inherent Error** | Input data already has error | Measurement |

### Significant Figures and Rounding
- Round half up (4.5 → 5)
- 3.14159265 to 4 sig figs → 3.142

### Taylor Series and Truncation Error

**Taylor Series**:
$$f(x) = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + ... + \frac{f^{(n)}(a)}{n!}(x-a)^n + R_n$$

**Remainder Term**:
$$R_n = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}, \quad \xi \in (a, x)$$

⚡ **GATE Formula**: If we use n+1 terms of Taylor series, truncation error ≈ (next term)

## Solution of Algebraic and Transcendental Equations

### Bisection Method (Bolzano Method)

**Conditions**:
- f(x) is continuous on [a, b]
- f(a) × f(b) < 0 (opposite signs)

**Algorithm**:
1. c = (a+b)/2
2. If f(a)×f(c) < 0: b = c; else a = c
3. Repeat until convergence

**Error Estimate**: |x - c| < (b-a)/2ⁿ after n iterations

⚡ **GATE Properties**: Always converges (slow), but guaranteed if sign changes.

### Newton-Raphson Method

**Formula**:
$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

**Geometric Meaning**: Tangent line intersects x-axis

**Conditions**:
- f(x) is continuous and differentiable
- f'(x) ≠ 0 near root

**Convergence**: Quadratic (error roughly squared each iteration)

⚡ **GATE Example**: Find √2 using Newton-Raphson.
Solution: f(x) = x² - 2, f'(x) = 2x
x_{n+1} = x_n - (x_n² - 2)/(2x_n) = (x_n + 2/x_n)/2
Starting with x₀ = 1: x₁ = 1.5, x₂ = 1.4167, x₃ = 1.4142...

### Regula-Falsi Method (False Position)

**Formula**:
$$x = \frac{af(b) - bf(a)}{f(b) - f(a)}$$

**Comparison**:
| Method | Bisection | Regula-Falsi | Newton-Raphson |
|--------|-----------|-------------|----------------|
| Convergence | Linear | Linear | Quadratic |
| Always converges | Yes | Yes | No (may diverge) |
| Speed | Slow | Slow | Fast |
| Uses derivative | No | No | Yes |

---

## Interpolation

### Newton's Forward Difference Formula

**Forward Difference Table**:
```
x    y    Δy    Δ²y   Δ³y
x₀   y₀
x₁   y₁   Δy₀
x₂   y₂   Δy₁   Δ²y₀
x₃   y₃   Δy₂   Δ²y₁  Δ³y₀
```

**Newton's Forward Formula**:
$$f(x) = f(x_0) + p\Delta f(x_0) + \frac{p(p-1)}{2!}\Delta^2 f(x_0) + ...$$

where p = (x - x₀)/h, h = step size

⚡ **GATE Point**: Use forward differences when x is near the **beginning** of the data table.

### Newton's Backward Difference Formula

**Uses backward differences (∇)**:
$$\nabla y_i = y_i - y_{i-1}$$

**Backward Formula**:
$$f(x) = f(x_n) + q\nabla f(x_n) + \frac{q(q+1)}{2!}\nabla^2 f(x_n) + ...$$

where q = (x - xₙ)/h

⚡ **GATE Point**: Use backward differences when x is near the **end** of the data table.

### Lagrange's Interpolation

**Formula**:
$$f(x) = \sum_{i=0}^{n} y_i L_i(x)$$

where:
$$L_i(x) = \prod_{j=0, j \neq i}^{n} \frac{x - x_j}{x_i - x_j}$$

**Advantage**: No need for equally spaced points
**Use when**: Data points are unevenly spaced

⚡ **GATE Example**: Interpolate at x=10 given (5,12), (8,15), (12,20).
Solution using Lagrange formula.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Numerical Methods** — Complete Notes for GATE

## Numerical Integration

### Trapezoidal Rule

For n intervals (n+1 points), step h = (b-a)/n:
$$\int_a^b f(x)dx \approx \frac{h}{2}\left[y_0 + 2(y_1 + y_2 + ... + y_{n-1}) + y_n\right]$$

**Error**: E_T = -(b-a)h²/12 × f''(ξ)

### Simpson's 1/3 Rule

**Condition**: n must be **even** number of intervals!

$$\int_a^b f(x)dx \approx \frac{h}{3}\left[y_0 + 4y_1 + 2y_2 + 4y_3 + ... + 4y_{n-1} + y_n\right]$$

**Error**: E_S = -(b-a)h⁴/180 × f⁴(ξ)

⚡ **GATE Rule**: If n is not even, use trapezoidal or split interval.

### Simpson's 3/8 Rule

For 3 intervals (4 points):
$$\int_a^b f(x)dx \approx \frac{3h}{8}[y_0 + 3y_1 + 3y_2 + y_3]$$

**Error**: E = -(b-a)h⁴/80 × f⁴(ξ)

### Comparison of Integration Methods

| Method | Order of Error | Application |
|--------|---------------|-------------|
| Trapezoidal | O(h²) | Simple, always applicable |
| Simpson's 1/3 | O(h⁴) | Fast convergence, n must be even |
| Simpson's 3/8 | O(h⁴) | When n = 3, 6, 9... |
| Boole's Rule | O(h⁷) | Highest accuracy among these |

## Numerical Solution of ODEs

### Euler's Method

$$y_{n+1} = y_n + hf(x_n, y_n)$$

**Error**: O(h) — very inaccurate for practical use

### Modified Euler's Method

$$y_{n+1} = y_n + \frac{h}{2}[f(x_n, y_n) + f(x_{n+1}, y_{n+1})]$$

Also called **Euler-Cauchy** or **Heun's method**.

### Runge-Kutta 4th Order (RK4)

**The Standard RK4 Method**:

Given y' = f(x, y), y(x₀) = y₀, step h:
```
k₁ = h·f(xₙ, yₙ)
k₂ = h·f(xₙ + h/2, yₙ + k₁/2)
k₃ = h·f(xₙ + h/2, yₙ + k₂/2)
k₄ = h·f(xₙ + h, yₙ + k₃)

y_{n+1} = yₙ + (k₁ + 2k₂ + 2k₃ + k₄)/6
```

⚡ **GATE Properties**:
- RK4 has O(h⁴) error per step (very accurate)
- Most commonly used method in engineering
- For most ODEs in GATE: Use RK4

### Taylor's Series Method

$$y_{n+1} = y_n + hy' + \frac{h^2}{2!}y'' + \frac{h^3}{3!}y''' + ...$$

**Where y', y'', y''...** are computed from the differential equation.

## Solution of Linear Systems — Iterative Methods

### Gauss-Seidel Method

For Ax = b, rewrite as:
$$x_i^{(k+1)} = \frac{1}{a_{ii}}\left[b_i - \sum_{j < i} a_{ij}x_j^{(k+1)} - \sum_{j > i} a_{ij}x_j^{(k)}\right]$$

**Convergence Condition**: Matrix should be diagonally dominant

**Advantages**: Uses updated values immediately, faster convergence than Jacobi

### Jacobi Method

Similar but doesn't use updated values immediately (slower).

⚡ **GATE Comparison**:
| Method | Jacobi | Gauss-Seidel |
|--------|--------|--------------|
| Speed | Slower | Faster |
| Updates | Simultaneous | Sequential |
| Convergence | May converge when G-S diverges | More commonly used |

## Numerical Differentiation

### Finite Difference Formulas

**First Derivative**:
| Type | Formula | Error |
|------|---------|-------|
| Forward | (y₁ - y₀)/h | O(h) |
| Backward | (y₀ - y₋₁)/h | O(h) |
| Central | (y₁ - y₋₁)/(2h) | O(h²) |

**Second Derivative** (Central):
$$\frac{d^2y}{dx^2} \approx \frac{y_1 - 2y_0 + y_{-1}}{h^2}, \quad \text{error } O(h^2)$$

## GATE-Style Practice Questions

```
1. Using Newton-Raphson, find root of x³ - x - 1 = 0 starting from x₀ = 1.
   First iteration gives:
   (a) 1.5 (b) 1.33 (c) 1.25 (d) 1.75
   
   Answer: (b) 1.33
   Solution: f(1) = -1, f'(1) = 3
             x₁ = 1 - (-1)/3 = 1.33

2. The error in Simpson's rule is of order:
   (a) h (b) h² (c) h³ (d) h⁴
   
   Answer: (d) h⁴
   Solution: Simpson's 1/3 rule error is O(h⁴)

3. Interpolation is used when:
   (a) Data has errors (b) Value at intermediate point is needed
   (c) Data is exact (d) Integration is required
   
   Answer: (b) Value at intermediate point is needed

4. Gauss-Seidel method is applicable to:
   (a) All systems (b) Only diagonally dominant systems
   (c) Only tridiagonal systems (d) Only symmetric systems
   
   Answer: (b) Only diagonally dominant systems
   (More precisely: converges for diagonally dominant or symmetric positive definite)

5. For ∫₀¹ f(x)dx with h = 0.25, using Simpson's 1/3 rule, number of intervals is:
   (a) 2 (b) 4 (c) 8 (d) Any even number
   
   Answer: (b) 4
   Solution: Interval = (1-0)/0.25 = 4 intervals (n=4, even ✓)
```

⚡ **GATE Strategy**: For Numerical Methods in GATE, expect **2-4 questions**. Focus on **Newton-Raphson convergence conditions**, **Simpson's rule requirements** (n must be even), and **RK4 method** for ODEs.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
