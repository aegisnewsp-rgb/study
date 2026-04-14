---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-19
topicName: Differential Equations Basics
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.074113"
diagramPrompt: "Mathematical diagram showing Differential Equations Basics concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---
# Differential Equations Basics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A differential equation is an equation that contains a derivative of an unknown function. They are fundamental tools in engineering and physics for describing how things change over time or space.

**Key Definitions**

- **Differential Equation**: An equation involving a function and its derivatives. Example: $\frac{dy}{dx} = 3x^2$
- **Order**: The highest derivative present. $\frac{d^2y}{dx^2} + 5\frac{dy}{dx} = x$ is a second-order DE.
- **Degree**: The highest power of the highest order derivative (when expressed as a polynomial in derivatives).
- **Ordinary Differential Equation (ODE)**: Contains only one independent variable. $\frac{dy}{dx} = x + y$
- **Partial Differential Equation (PDE)**: Contains partial derivatives with respect to multiple variables.

**First-Order Differential Equations**

**Type 1: Variable Separable**

If the equation can be written as $f(x)dx = g(y)dy$, we separate variables and integrate:
$$\frac{dy}{dx} = xy$$
$$\frac{1}{y}dy = x \cdot dx$$
$$\int \frac{1}{y}dy = \int x \cdot dx$$
$$\ln|y| = \frac{x^2}{2} + C$$

**Type 2: Linear First-Order DE**

Form: $\frac{dy}{dx} + P(x)y = Q(x)$

The integrating factor is: $\mu(x) = e^{\int P(x)dx}$

Solution: $y \cdot \mu(x) = \int Q(x) \cdot \mu(x)dx + C$

**Example**: Solve $\frac{dy}{dx} + 2y = e^{3x}$

Here $P(x) = 2$, $Q(x) = e^{3x}$
$\mu(x) = e^{\int 2dx} = e^{2x}$

Multiply both sides by $e^{2x}$:
$e^{2x}\frac{dy}{dx} + 2e^{2x}y = e^{5x}$
$\frac{d}{dx}(ye^{2x}) = e^{5x}$
$ye^{2x} = \int e^{5x}dx = \frac{e^{5x}}{5} + C$
$y = \frac{e^{3x}}{5} + Ce^{-2x}$

**⚡ ECAT Tips**
- Always include the constant of integration $C$ when integrating.
- Check whether your solution satisfies the original equation by differentiating it back.
- For word problems, translate the rate condition directly into a differential equation.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Types of First-Order DEs and Their Solutions**

**Exact Differential Equations**

An equation $M(x,y)dx + N(x,y)dy = 0$ is exact if:
$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

If exact, there exists a function $\psi(x,y)$ such that $d\psi = Mdx + Ndy = 0$:
$\psi(x,y) = C$

**Example**: Check if $(2xy + y^2)dx + (x^2 + 2xy)dy = 0$ is exact.

$M = 2xy + y^2$, $\frac{\partial M}{\partial y} = 2x + 2y$
$N = x^2 + 2xy$, $\frac{\partial N}{\partial x} = 2x + 2y$

Since $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$, the equation is exact.

Integrate $M$ with respect to $x$:
$\psi = \int (2xy + y^2)dx = x^2y + xy^2 + f(y)$

Differentiate with respect to $y$:
$\frac{\partial \psi}{\partial y} = x^2 + 2xy + f'(y) = N = x^2 + 2xy$

So $f'(y) = 0$, thus $f(y) = C$

Therefore: $\psi(x,y) = x^2y + xy^2 = K$
Or: $xy(x + y) = K$

**Homogeneous Differential Equations**

A DE is homogeneous if $M(x,y)$ and $N(x,y)$ are both homogeneous functions of the same degree.

Solution method: Substitute $y = vx$, so $\frac{dy}{dx} = v + x\frac{dv}{dx}$

**Example**: Solve $\frac{dy}{dx} = \frac{x^2 + y^2}{xy}$

$\frac{dy}{dx} = \frac{x^2 + y^2}{xy} = \frac{x}{y} + \frac{y}{x}$

Let $y = vx$, then $\frac{dy}{dx} = v + x\frac{dv}{dx}$:
$v + x\frac{dv}{dx} = \frac{1}{v} + v$
$x\frac{dv}{dx} = \frac{1}{v}$
$v \cdot dv = \frac{1}{x}dx$
$\frac{v^2}{2} = \ln|x| + C$
Substituting back: $\frac{y^2}{2x^2} = \ln|x| + C$

**Bernoulli's Equation**

Form: $\frac{dy}{dx} + P(x)y = Q(x)y^n$

Let $z = y^{1-n}$:
$\frac{dz}{dx} + (1-n)P(x)z = (1-n)Q(x)$

**Second-Order Linear DEs**

General form: $a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = f(x)$

**Complementary Function (CF)**: Solve $ay'' + by' + cy = 0$

Assume $y = e^{mx}$:
$am^2 + bm + c = 0$

Three cases based on discriminant $b^2 - 4ac$:
1. **Distinct real roots** ($b^2 > 4ac$): $y_c = Ae^{m_1x} + Be^{m_2x}$
2. **Equal real roots** ($b^2 = 4ac$): $y_c = (A + Bx)e^{mx}$
3. **Complex roots** ($b^2 < 4ac$): $y_c = e^{\alpha x}(A\cos\beta x + B\sin\beta x)$

**Particular Integral (PI)**: Based on $f(x)$ form:
- $f(x) = e^{kx}$ → try $y_p = Ce^{kx}$ (if $k$ not a root, multiply by $x$ if it is)
- $f(x) = x^n$ → try $y_p = Ax^n + Bx^{n-1} + ...$
- $f(x) = \sin(kx)$ or $\cos(kx)$ → try $y_p = P\sin(kx) + Q\cos(kx)$

**General Solution**: $y = y_c + y_p$

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Advanced DE Solution Methods**

**Method of Undetermined Coefficients**

For linear DEs with constant coefficients, guess a particular solution based on the form of $f(x)$.

| $f(x)$ form | Trial particular solution |
|-------------|---------------------------|
| $e^{kx}$ | $Ce^{kx}$ (multiply by $x$ if $k$ is root) |
| $x^n$ | $A_nx^n + A_{n-1}x^{n-1} + ... + A_0$ |
| $\sin(kx)$ or $\cos(kx)$ | $P\sin(kx) + Q\cos(kx)$ |
| $e^{kx}\sin(mx)$ | $e^{kx}(P\cos(mx) + Q\sin(mx))$ |

**Example**: Find the particular integral of $y'' - 5y' + 6y = e^{2x}$.

The auxiliary equation: $m^2 - 5m + 6 = 0$
$(m-2)(m-3) = 0$, so $m = 2, 3$

Since $k = 2$ is a root of the auxiliary equation, multiply by $x$:
Try $y_p = Axe^{2x}$
$y_p' = Ae^{2x} + 2Axe^{2x} = e^{2x}(A + 2Ax)$
$y_p'' = 2Ae^{2x} + 2Ae^{2x} + 4Axe^{2x} = e^{2x}(4A + 4Ax)$

Substitute into LHS:
$(4A + 4Ax) - 5(A + 2Ax) + 6(Ax) = e^{2x}$
$4A + 4Ax - 5A - 10Ax + 6Ax = e^{2x}$
$4A - 5A + (4A - 10A + 6A)x = e^{2x}$
$-A = e^{2x}$

This gives $A = -1$, so $y_p = -xe^{2x}$

**Variation of Parameters**

More general method for second-order linear DEs where method of undetermined coefficients fails.

For $y'' + P(x)y' + Q(x)y = R(x)$:
Find CF: $y_c = u_1y_1 + u_2y_2$

Let $u_1' = -\frac{y_2R}{W}$, $u_2' = \frac{y_1R}{W}$

Where Wronskian $W = y_1y_2' - y_1'y_2$

Particular solution: $y_p = -y_1\int\frac{y_2R}{W}dx + y_2\int\frac{y_1R}{W}dx$

**Cauchy-Euler (Equidimensional) Equations**

Form: $ax^2y'' + bxy' + cy = f(x)$

Try solution $y = x^m$:
$m(m-1) + bm + c = 0$

**Applications of Differential Equations**

**Population Growth (Malthusian)**:
$$\frac{dP}{dt} = kP \Rightarrow P = P_0e^{kt}$$

**Logistic Growth**:
$$\frac{dP}{dt} = kP(M - P) \Rightarrow P = \frac{M}{1 + Ae^{-kMt}}$$

**Newton's Law of Cooling**:
$$\frac{dT}{dt} = -k(T - T_s) \Rightarrow T = T_s + (T_0 - T_s)e^{-kt}$$

**Electrical Circuits (RLC)**:
For an RLC circuit: $L\frac{dI}{dt} + RI + \frac{q}{C} = E(t)$

**Damped Oscillations**:
$m\frac{d^2x}{dt^2} + c\frac{dx}{dt} + kx = 0$

- Underdamped ($c^2 < 4mk$): $x = e^{-\alpha t}(A\cos\beta t + B\sin\beta t)$
- Critically damped ($c^2 = 4mk$): $x = (A + Bt)e^{-\alpha t}$
- Overdamped ($c^2 > 4mk$): $x = Ae^{m_1t} + Be^{m_2t}$

**ECAT Engineering Context**

In ECAT, differential equations often appear in:
- Calculating current in electrical circuits with resistors and capacitors
- Analysing spring-mass systems with damping
- Heat transfer problems (Newton's law of cooling)
- Population dynamics and growth models

**Working Tips**
1. Always check initial/boundary conditions to find constants.
2. For non-homogeneous DEs, find the general solution of the homogeneous part first.
3. Verify your solution by substituting back into the original DE.
4. In engineering applications, the physical context suggests what type of solution to expect (oscillatory, decaying, growing).

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
