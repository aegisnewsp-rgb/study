---
exam: vce-mathematical-methods
examName: VCE Mathematical Methods & Specialist Mathematics (VCAA 2023)
subject: vce-specialist-mathematics
subjectName: Specialist Mathematics
topic: vcespec-003
topicName: Calculus (Specialist)
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-20
---

# Calculus (Specialist) — VCE Specialist Mathematics (VCAA 2023) Notes

Calculus is one of the four Areas of Study in VCE Specialist Mathematics Units 3 and 4. The 2023 Study Design covers further differentiation and integration techniques, differential equations, vector calculus, kinematics in one and two dimensions, the language of mechanics, and applications of calculus to motion under constant and variable forces. This Area of Study is heavily weighted in Examination 2.

> Re-check the live specification details, examination specifications and any Notice to Schools on https://vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/specialist-mathematics/vce-specialist-mathematics before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Differentiation rules.** Power, sum, product, quotient, chain. d/dx (e^x) = e^x; d/dx (sin x) = cos x; d/dx (cos x) = −sin x; d/dx (ln x) = 1/x.
- **Integration by parts.** ∫ u dv = uv − ∫ v du. Choose u and dv so that ∫ v du is simpler than ∫ u dv.
- **Differential equations.** dy/dx = f(x, y). Separable: dy/g(y) = f(x) dx, then integrate.
- **Vector calculus.** Velocity v(t) = r'(t). Acceleration a(t) = r''(t). Speed = |v(t)|.
- **Kinematics.** s(t), v(t) = s'(t), a(t) = v'(t) = s''(t). v² = u² + 2as.

#### Examiner traps

- Choosing the wrong u in integration by parts — the LIATE rule (logs, inverse trig, algebraic, trig, exponential) gives the order.
- Forgetting the absolute value in ∫ 1/x dx = ln|x| + C.
- Treating velocity and acceleration as scalars — they are vectors.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Integration by parts

For ∫ u dv = uv − ∫ v du. Choose u and dv so that v is easy to compute and ∫ v du is simpler than the original integral.

LIATE priority for u: L (logarithmic), I (inverse trigonometric), A (algebraic), T (trigonometric), E (exponential).

Example: ∫ x e^x dx. Let u = x, dv = e^x dx. Then du = dx, v = e^x. ∫ x e^x dx = x e^x − ∫ e^x dx = x e^x − e^x + C = e^x(x − 1) + C.

#### Differential equations

A differential equation is an equation involving a function and its derivatives. First-order separable: dy/dx = f(x)g(y). Separate: dy/g(y) = f(x) dx. Integrate both sides. The constant of integration becomes the constant of the family of solutions.

Example: dy/dx = xy, y(0) = 1. Separate: dy/y = x dx. Integrate: ln|y| = x²/2 + C. Apply y(0) = 1: ln 1 = 0 + C → C = 0. Solution: y = e^(x²/2).

#### Vector calculus

For position vector r(t) = x(t) i + y(t) j:
- Velocity v(t) = dr/dt = x'(t) i + y'(t) j.
- Acceleration a(t) = dv/dt = x''(t) i + y''(t) j.
- Speed = |v(t)| = √(x'(t)² + y'(t)²).

Constant velocity: r(t) = r₀ + v t. Constant acceleration: v(t) = v₀ + a t, r(t) = r₀ + v₀ t + (1/2) a t².

#### Kinematics

For motion in a straight line: s(t) = position, v(t) = s'(t) = velocity, a(t) = v'(t) = acceleration.

Constant acceleration equations:
- v = u + at.
- s = ut + (1/2) at².
- v² = u² + 2as.
- s = (u + v)t/2.

For projectile motion (constant gravity, no air resistance): horizontal velocity is constant; vertical acceleration is g.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Specialist Calculus builds on Methods Calculus

- **Methods teaches differentiation and integration of simple functions.** Specialist extends to integration by parts, trigonometric substitution, and differential equations.
- **Specialist Mechanics uses vector calculus.** Velocity and acceleration are derivatives of position; position is the integral of velocity.
- **Mathematics Extension 2** in NSW extends to 3D motion and Lagrange multipliers.

#### Exam technique

- For integration by parts, choose u using LIATE.
- For differential equations, separate variables, integrate both sides, and apply the initial condition.
- For kinematics problems, draw a diagram, identify given and required quantities, and choose the appropriate constant-acceleration equation.

#### Common misconceptions (and the correction)

- "Integration by parts always gives a simpler integral." Sometimes it doesn't — try a different choice of u and dv.
- "Velocity and speed are the same." Velocity is a vector; speed is its magnitude.
- "All motion follows the constant-acceleration equations." Only motion with constant a. For variable a, integrate.

#### Specification reference

This Area of Study is assessed in VCE Specialist Mathematics Examination 2. Confirm the live examination specifications and any Notice to Schools on vcaa.vic.edu.au before each cycle.

---

*Last updated 2026-09-20. Source: VCE Mathematics Study Design (2023), https://vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/specialist-mathematics/vce-specialist-mathematics. Awarding body: Victorian Curriculum and Assessment Authority (VCAA). Examination specifications and any in-year changes must be re-checked on the official page before committing a revision plan to a student.*