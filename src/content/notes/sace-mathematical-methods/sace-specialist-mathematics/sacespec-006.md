---
exam: sace-mathematical-methods
examName: SACE Stage 2 Mathematical Methods & Specialist Mathematics
subject: sace-specialist-mathematics
subjectName: Specialist Mathematics
topic: sacespec-006
topicName: Rates of Change and Differential Equations
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Topic 6: Rates of Change and Differential Equations — SACE Stage 2 Specialist Mathematics Notes

Topic 6 of SACE Stage 2 Specialist Mathematics covers first-order differential equations, separable equations, modelling with differential equations and applications to growth, decay and Newton's law of cooling. Sixth Topic and summative Topic of the calculus strand.

> Re-check the live Subject Outline on https://www.sace.sa.edu.au/web/specialist-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Differential equations.** dy/dx = f(x)g(y).
- **Separable.** Separate variables, integrate.
- **Modelling.** Growth, decay, Newton's law of cooling.

#### Examiner traps

- Forgetting the constant of integration.
- Mixing up related rates and differential equations.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Differential equations

Separable first-order: dy/dx = f(x)g(y). Separate: dy/g(y) = f(x) dx. Integrate both sides.

#### Growth and decay

Exponential growth: dN/dt = k N → N(t) = N₀ e^(kt). Exponential decay: dN/dt = −k N → N(t) = N₀ e^(−kt).

#### Newton's law of cooling

dT/dt = −k(T − T_s) where T_s is the surrounding temperature.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 6 is the summative calculus topic

- Differential equations are heavily tested in the external assessment.

#### Year 12 planning pattern

- Term 1: Differential equations.
- Term 2: Modelling applications.

#### Common misconceptions (and the correction)

- "All differential equations are separable." No — only those of the form dy/dx = f(x)g(y).

---

### Specification reference

This Topic is the sixth Topic of the SACE Stage 2 Specialist Mathematics Subject Outline. Confirm the live Subject Outline on sace.sa.edu.au.

#### Worked example — solving an initial value differential equation with separation of variables

Solve the initial value differential equation:

```
  dy/dx = (3x² + 2x) / (2y),  given y(0) = −2
```

Step 1: Separate variables
Multiply both sides by 2y dx:

```
  2y dy = (3x² + 2x) dx
```

Step 2: Integrate both sides

```
  ∫ 2y dy = ∫ (3x² + 2x) dx
  y² = x³ + x² + C
```

Step 3: Apply the initial condition y(0) = −2 to determine C

```
  (−2)² = 0³ + 0² + C
  4 = C
```

Step 4: Solve for y, choosing the correct sign
Substitute C = 4:

```
  y² = x³ + x² + 4
  y = ± √(x³ + x² + 4)
```

Since the initial condition specifies y(0) = −2 < 0, we must select the negative square root branch:

```
  y = −√(x³ + x² + 4)
```

The particular solution is y = −√(x³ + x² + 4).

#### Worked example — logistic population growth differential equation

A protected wildlife reserve has a carrying capacity of M = 2000 wallabies. The population P(t) grows according to the logistic differential equation:

```
  dP/dt = 0.05 P (1 − P / 2000)
```

where t is time in years, and the initial population is P(0) = 400 wallabies.
1. Find the population at which the growth rate dP/dt is maximized, and calculate this maximum growth rate.
2. Solve the differential equation to find the explicit formula for P(t).
3. Calculate the population after t = 10 years.

Part 1: Maximum growth rate
The growth rate dP/dt is a quadratic function of P:

```
  g(P) = 0.05 P − (0.05 / 2000) P²
```

The maximum of a downward-opening parabola occurs at the vertex:

```
  P_max = M / 2 = 2000 / 2 = 1,000 wallabies
```

Calculate the maximum growth rate at P = 1000:

```
  (dP/dt)_max = 0.05(1000)(1 − 1000 / 2000)
              = 50 × (1 − 0.5)
              = 25 wallabies per year
```

Part 2: Explicit solution P(t)
The standard solution to the logistic equation dP/dt = k P (1 − P/M) is:

```
  P(t) = M / [ 1 + A e^(−kt) ]
```

Apply initial condition P(0) = 400 with M = 2000 and k = 0.05:

```
  400 = 2000 / [ 1 + A e⁰ ]
  1 + A = 2000 / 400 = 5
  A = 4
```

Therefore:

```
  P(t) = 2000 / [ 1 + 4 e^(−0.05 t) ]
```

Part 3: Population after 10 years (t = 10)

```
  P(10) = 2000 / [ 1 + 4 e^(−0.05 × 10) ]
        = 2000 / [ 1 + 4 e^(−0.5) ]
        = 2000 / [ 1 + 4(0.60653) ]
        = 2000 / [ 1 + 2.42612 ]
        = 2000 / 3.42612
        ≈ 583.75
```

The population after 10 years is approximately 584 wallabies.

#### Common marking-scheme mistakes

- Dropping the ± when taking the square root in differential equation solutions, or choosing the positive branch regardless of a negative initial condition.
- Forgetting the constant of integration C or adding it as an afterthought outside algebraic functions.
- In logistic models, stating that maximum growth rate occurs at P = M instead of P = M/2.
- Algebraic errors during partial fraction decomposition in separation of variables.
- Treating dP/dt as ΔP / Δt in continuous calculus derivations.

#### 20-minute recap before you walk in

- Separation of variables: write g(y) dy = h(x) dx, integrate both sides, solve for C immediately using initial condition.
- Exponential growth/decay: dy/dt = ky  ⇒  y(t) = y₀ e^(kt).
- Logistic growth model: dP/dt = k P (1 − P/M). Carrying capacity is M; inflection point and maximum growth rate occur at P = M/2.
- Logistic solution: P(t) = M / (1 + A e^(−kt)) where A = (M − P₀) / P₀.
- Always check that your solution satisfies both the original ODE and the initial condition.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SACE Stage 2 Specialist Mathematics Subject Outline also lists:

- Predator-prey and competing species coupled systems of first-order differential equations.
- Slope fields (direction fields) and graphical solution trajectories.
- Euler's numerical method for approximating solutions to non-separable differential equations.
- Second-order linear differential equations modelling damped harmonic oscillators: m x'' + c x' + k x = 0.
- Chemical reaction rate equations and mixture problems in interconnected tanks.

Confirm the live Subject Outline on the SACE website before planning revision around these.

---

*Last updated 2026-09-24. Source: SACE Stage 2 Specialist Mathematics Subject Outline, https://www.sace.sa.edu.au/web/specialist-mathematics. Awarding body: SACE Board of South Australia.*