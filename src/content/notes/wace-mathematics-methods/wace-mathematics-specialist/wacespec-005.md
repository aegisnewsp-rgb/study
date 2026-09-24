---
exam: wace-mathematics-methods
examName: WACE Mathematics Methods & Mathematics Specialist (SCSA)
subject: wace-mathematics-specialist
subjectName: Mathematics Specialist
topic: wacespec-005
topicName: Differential Equations and Kinematics
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 4 Topic 1: Differential Equations and Kinematics — WACE Mathematics Specialist (SCSA) Notes

Unit 4 Topic 1 of WACE Mathematics Specialist covers first-order differential equations and separable equations; kinematics of motion in two dimensions using vectors and parametric equations. First Topic of Unit 4 and assessed in the ATAR Year 12 examination.

> Re-check the live specification details on https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-specialist before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Differential equations.** Separable: dy/dx = f(x)g(y).
- **Parametric equations.** x(t), y(t).
- **Velocity and acceleration.** v = dr/dt, a = dv/dt.

#### Examiner traps

- Forgetting the constant of integration.
- Mixing up scalar and vector quantities.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Differential equations

Separable first-order: dy/dx = f(x)g(y). Separate: dy/g(y) = f(x) dx. Integrate both sides. Apply initial condition.

#### Parametric equations

x(t), y(t) describe position over time. Velocity v(t) = (x'(t), y'(t)). Acceleration a(t) = (x''(t), y''(t)).

#### Motion in 2D

Constant velocity: r(t) = r₀ + v t. Constant acceleration: r(t) = r₀ + v₀ t + (1/2) a t².

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 1 of Unit 4 is heavily tested

- Differential equations are central to calculus and physics.

#### Year 12 planning pattern

- Term 1: Differential equations.
- Term 2: Kinematics.

#### Common misconceptions (and the correction)

- "Velocity and speed are the same." Velocity is a vector.
- "Parametric equations are different from Cartesian." They describe the same curve in different ways.

---

### Specification reference

This Topic is the first Topic of Unit 4 in the WACE Mathematics Specialist ATAR Year 12 syllabus. Confirm the live examination design brief on senior-secondary.scsa.wa.edu.au.

#### Worked example — first-order separable differential equation with kinematics

A speedboat of mass m = 800 kg cuts its motor while moving at v₀ = 20 m/s. The water resistance produces a retarding force proportional to the square of its speed:

```
  F_drag = −0.5 v²  (Newtons)
```

1. Set up the differential equation for velocity v(t) using Newton's second law.
2. Solve the differential equation to find v(t) explicitly as a function of time t.
3. Calculate the time required for the boat's speed to reduce to 5 m/s.

Part 1: Differential equation
Apply F = m (dv/dt):

```
  800 (dv/dt) = −0.5 v²
  dv/dt = −(0.5 / 800) v²
  dv/dt = −(1 / 1600) v²
```

Part 2: Solve by separation of variables

```
  (1 / v²) dv = −(1 / 1600) dt
  ∫ v⁻² dv = −(1 / 1600) ∫ dt
  −v⁻¹ = −(1 / 1600) t + C
  1 / v = (t / 1600) − C
```

Apply initial condition v(0) = 20:

```
  1 / 20 = 0 − C  ⇒  −C = 1 / 20
```

Substitute back:

```
  1 / v = (t / 1600) + (1 / 20)
  1 / v = (t + 80) / 1600
  v(t) = 1600 / (t + 80)  (m/s)
```

Part 3: Time to reach v = 5 m/s

```
  5 = 1600 / (t + 80)
  5(t + 80) = 1600
  5t + 400 = 1600
  5t = 1200
  t = 240 seconds (4 minutes)
```

The boat slows to 5 m/s after 240 seconds.

#### Worked example — Newton's law of cooling differential equation

A hot cup of coffee at initial temperature T(0) = 90°C is placed in a temperature-controlled room maintained at a constant ambient temperature of T_env = 20°C.
According to Newton's law of cooling:

```
  dT/dt = −k (T − 20)
```

After t = 5 minutes, the temperature of the coffee cools to 65°C.
1. Solve the differential equation to find T(t) in terms of k.
2. Determine the exact value of the cooling constant k.
3. Calculate the temperature of the coffee after t = 15 minutes.

Part 1: General solution
Separate variables:

```
  [ 1 / (T − 20) ] dT = −k dt
  ln|T − 20| = −kt + C₁
  T − 20 = A e^(−kt)
  T(t) = 20 + A e^(−kt)
```

Using T(0) = 90:

```
  90 = 20 + A e⁰  ⇒  A = 70
  T(t) = 20 + 70 e^(−kt)
```

Part 2: Find constant k
Using T(5) = 65:

```
  65 = 20 + 70 e^(−5k)
  45 = 70 e^(−5k)
  e^(−5k) = 45 / 70 = 9 / 14
  −5k = ln(9 / 14) = −ln(14 / 9)
  k = (1 / 5) ln(14 / 9) ≈ 0.08837 min⁻¹
```

Part 3: Temperature after 15 minutes

```
  T(15) = 20 + 70 e^(−15k)
        = 20 + 70 (e^(−5k))³
        = 20 + 70 (9 / 14)³
        = 20 + 70 (729 / 2744)
        = 20 + (51030 / 2744)
        = 20 + 18.597
        ≈ 38.60°C
```

The temperature after 15 minutes is approximately 38.6°C.

#### Common marking-scheme mistakes

- Adding the constant C at the very end of algebraic rearrangement instead of directly after integrating.
- Confusing ambient temperature T_env with the initial temperature T₀ in cooling models.
- Omitting the negative sign in deceleration and drag force equations.
- Using degrees Celsius in equations requiring temperature differences without stating the unit.
- Solving differential equations with numerical approximations too early, propagating rounding error into rate constants.

#### 20-minute recap before you walk in

- Separable ODE: dy/dx = g(x) h(y)  ⇒  ∫ [1/h(y)] dy = ∫ g(x) dx.
- Newton's law of cooling: dT/dt = −k(T − T_env)  ⇒  T(t) = T_env + (T₀ − T_env) e^(−kt).
- Retarding drag proportional to v: dv/dt = −kv  ⇒  v(t) = v₀ e^(−kt).
- Retarding drag proportional to v²: dv/dt = −k v²  ⇒  1/v = 1/v₀ + kt.
- Terminal velocity: set acceleration dv/dt = 0 and solve for v.

#### Sub-topics the syllabus lists that this note does not cover in detail

The SCSA Mathematics Specialist Year 12 Unit 4 syllabus also lists:

- Slope fields (direction fields) and graphical solution curve tracing.
- Euler's numerical method for first-order initial value problems: y_{n+1} = y_n + h f(x_n, y_n).
- Motion under gravity with linear and quadratic air resistance.
- Logistic growth equations with harvesting: dP/dt = k P(1 − P/M) − H.
- Coupled systems of differential equations for predator-prey dynamics.

Confirm the live syllabus on the SCSA website before planning revision around these.

---

*Last updated 2026-09-24. Source: WACE Mathematics Specialist ATAR Year 12 syllabus, https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-specialist. Awarding body: School Curriculum and Standards Authority (SCSA).*