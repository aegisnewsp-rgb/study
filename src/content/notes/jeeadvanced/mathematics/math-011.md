---



exam: jeeadvanced
examName: JEE Advanced
subject: mathematics
subjectName: Mathematics
topic: math-011
topicName: "Differential Equations"
weight: 5
country: india
generated: "2026-03-24T08:32:07.938769"
lastUpdated: "2026-09-09"
diagramPrompt: "Mathematical diagram showing DE concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Differential Equations

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **differential equation (DE)** links a function to its derivatives. The **order** is the highest derivative present; the **degree** is the power of that highest-order derivative after clearing radicals and fractions. JEE Advanced tests three families almost every year: separable first-order, exact/linear first-order, and second-order linear with constant coefficients.

- **Separable:** separate `dy/g(y) = f(x) dx` and never forget `+ C`.
- **Linear first-order:** `dy/dx + P(x)y = Q(x)` → integrating factor `e^{∫P dx}`.
- **Higher-order linear:** write the auxiliary equation, get roots, then add a particular integral.

| Term | Meaning |
|---|---|
| Order | Highest derivative (1st, 2nd, …) |
| Degree | Power of that derivative (after rationalising) |
| ODE vs PDE | One vs several independent variables |

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Order, degree and formation

The **order** of a DE is the order of the highest derivative appearing in it, while the **degree** is defined only after the equation has been expressed as a polynomial in derivatives. A first-order, first-degree DE written as `M(x,y) dx + N(x,y) dy = 0` is **exact** when `∂M/∂y = ∂N/∂x`; otherwise an integrating factor `μ(x)` or `μ(y)` can make it exact. Formation problems start from a family `F(x, y, c₁, c₂, …) = 0` with `n` independent constants and differentiate `n` times to eliminate them, producing a DE of order `n`.

#### First-order solution toolkit

- **Separable:** rewrite as `g(y) dy = f(x) dx` and integrate both sides.
- **Homogeneous:** substitute `y = vx`, so `v + x(dv/dx) = f(v)`.
- **Linear:** `dy/dx + P(x)y = Q(x)` → I.F. `= e^{∫P dx}` → `y · (I.F.) = ∫ Q(x)(I.F.) dx + C`.
- **Bernoulli:** `dy/dx + P(x)y = Q(x)yⁿ` → put `z = y^{1-n}` to linearise.

#### Higher-order linear ODEs with constant coefficients

For `d²y/dx² + a(dy/dx) + by = R(x)`, the **complementary function** comes from the auxiliary `m² + am + b = 0`:

| Roots of auxiliary | Form of `y_c` |
|---|---|
| Real distinct `m₁, m₂` | `C₁ e^{m₁x} + C₂ e^{m₂x}` |
| Real repeated `m` | `(C₁ + C₂ x) e^{mx}` |
| Complex `α ± iβ` | `e^{αx}(C₁ cos βx + C₂ sin βx)` |

The **particular integral** `y_p` uses undetermined coefficients for polynomial, exponential, or sinusoidal right-hand sides, and **variation of parameters** as the universal fallback.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Applications examiners like

Three classical models recur: exponential `dy/dt = ky`, Newton's cooling `dT/dt = -k(T - T_env)`, and RLC-type circuits `L(d²q/dt²) + R(dq/dt) + q/C = V(t)`. Each reduces to a linear ODE whose auxiliary roots decide whether the response is overdamped, critically damped, or oscillatory. Orthogonal trajectory problems swap the slope: if a family has `dy/dx = f(x,y)`, the orthogonal family satisfies `dy/dx = -1/f(x,y)`.

#### Edge cases and traps

- Degree is **undefined** if the highest-order derivative appears inside a radical, fractional power, or transcendental function.
- A DE can be **non-exact yet solvable** through an integrating factor of the form `(1/(M·(∂N/∂x − ∂M/∂y)))` that depends only on `x` or only on `y`.
- Bernoulli's substitution `z = y^{1-n}` silently fails for `n = 0` (linear) and `n = 1` (already linear), so always check before applying.
- For second-order linear ODEs, the **Wronskian** `W = y₁ y₂' − y₂ y₁'` distinguishes linear independence; `W ≡ 0` ⇒ solutions are dependent and the assumed form collapses.

#### Practice prompts

1. Form the DE of order 2 from the family `y = (c₁ + c₂ x) e^{3x}` and identify its auxiliary roots.
2. Solve `dy/dx + y tan x = sin x` using the linear integrating-factor method, then verify by substitution.

## Continue your study

- **[View this topic in your JEE Advanced roadmap](/roadmap/?exam=jeeadvanced&duration=1mo)** — see where "Differential Equations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeeadvanced&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Advanced exam overview](/exams/jeeadvanced/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/jeeadvanced/mathematics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
