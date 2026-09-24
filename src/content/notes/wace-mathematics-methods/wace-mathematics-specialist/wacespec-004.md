---
exam: wace-mathematics-methods
examName: WACE Mathematics Methods & Mathematics Specialist (SCSA)
subject: wace-mathematics-specialist
subjectName: Mathematics Specialist
topic: wacespec-004
topicName: Further Integration and Mechanics
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 3 Topic 2: Further Integration and Mechanics — WACE Mathematics Specialist (SCSA) Notes

Unit 3 Topic 2 of WACE Mathematics Specialist covers further integration by parts and substitution; integration applications in kinematics; Newton's laws and motion in one and two dimensions. Second Topic of Unit 3 and assessed in the ATAR Year 12 examination.

> Re-check the live specification details on https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-specialist before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Integration by parts.** ∫ u dv = uv − ∫ v du.
- **Newton's laws.** F = ma.
- **Projectile motion.** Horizontal velocity constant; vertical acceleration g.

#### Examiner traps

- Choosing wrong u in integration by parts.
- Mixing up velocity and acceleration.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Integration by parts

∫ u dv = uv − ∫ v du. LIATE priority for u: L (logs), I (inverse trig), A (algebraic), T (trig), E (exponential).

#### Newton's laws

F = ma. Resolve forces into components. Apply F = ma along direction of motion.

#### Projectile motion

Horizontal velocity is constant. Vertical acceleration is −g (constant gravity). Trajectory is a parabola.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 2 of Unit 3 prepares for mechanics

- Integration by parts is a key technique for Specialist questions.

#### Year 12 planning pattern

- Term 1: Integration by parts.
- Term 2: Mechanics, Newton's laws.

#### Common misconceptions (and the correction)

- "Velocity and acceleration are the same." Velocity is a vector; acceleration is its derivative.

---

### Specification reference

This Topic is the second Topic of Unit 3 in the WACE Mathematics Specialist ATAR Year 12 syllabus. Confirm the live examination design brief on senior-secondary.scsa.wa.edu.au.

#### Worked example — integration by parts

Evaluate the exact value of the definite integral:

```
  ∫₁^e x² ln(x) dx
```

Step 1: Choose parts using LIATE priority
- Logarithmic function: u = ln(x)  ⇒  du = (1/x) dx
- Algebraic function: dv = x² dx  ⇒  v = ∫ x² dx = x³ / 3

Step 2: Apply the integration by parts formula ∫ u dv = uv − ∫ v du

```
  ∫₁^e x² ln(x) dx = [ (x³ / 3) ln(x) ]₁^e − ∫₁^e (x³ / 3) (1/x) dx
                   = [ (x³ / 3) ln(x) ]₁^e − (1 / 3) ∫₁^e x² dx
```

Step 3: Evaluate the anti-derivative of x²

```
  = [ (x³ / 3) ln(x) ]₁^e − (1 / 3) [ x³ / 3 ]₁^e
  = [ (x³ / 3) ln(x) − (x³ / 9) ]₁^e
```

Step 4: Substitute limits

```
  Upper limit (x = e):
    (e³ / 3) ln(e) − (e³ / 9) = (e³ / 3)(1) − (e³ / 9) = (3e³ − e³) / 9 = 2e³ / 9

  Lower limit (x = 1):
    (1³ / 3) ln(1) − (1³ / 9) = 0 − (1 / 9) = −1 / 9

  Integral = (2e³ / 9) − (−1 / 9)
           = (2e³ + 1) / 9
           ≈ 4.574
```

The exact value is (2e³ + 1) / 9.

#### Worked example — simple harmonic motion dynamics

A particle of mass m = 0.5 kg oscillates along a straight line in simple harmonic motion about the origin according to the differential equation:

```
  d²x/dt² = −16 x
```

At time t = 0, the particle is released from rest at displacement x(0) = 0.25 metres.
1. State the angular frequency ω, period T, and frequency f of the oscillation.
2. Write the displacement function x(t) and velocity function v(t).
3. Determine the maximum speed of the particle and where it occurs.
4. Calculate the magnitude of the maximum restoring force acting on the particle.

Part 1: Parameters
The equation is of standard form d²x/dt² = −ω² x.
- ω² = 16  ⇒  ω = 4 rad/s
- Period: T = 2π / ω = 2π / 4 = π / 2 seconds ≈ 1.571 s
- Frequency: f = 1 / T = 2 / π Hz ≈ 0.637 Hz

Part 2: Motion functions
General SHM solution: x(t) = A cos(ωt) + B sin(ωt).
Using initial condition x(0) = 0.25: A = 0.25.
Using initial velocity v(0) = 0: B = 0.

```
  x(t) = 0.25 cos(4t)  (metres)
  v(t) = dx/dt = −(0.25 × 4) sin(4t) = −sin(4t)  (m/s)
```

Part 3: Maximum speed
From v(t) = −sin(4t), the maximum speed is:

```
  v_max = |−1| = 1.0 m/s
```

Maximum speed occurs when sin(4t) = ±1, which corresponds to x = 0 (as the particle passes through the equilibrium center of oscillation).

Part 4: Maximum restoring force
Apply Newton's second law F = m a = m (−ω² x):

```
  F_max = m ω² A
        = 0.5 × 16 × 0.25
        = 2.0 N
```

The maximum restoring force is 2.0 Newtons (directed toward the origin at maximum displacement).

#### Common marking-scheme mistakes

- Inverting the choice of u and dv in integration by parts (e.g. setting u = x² and dv = ln x dx, which complicates the integral).
- Omitting the negative sign in SHM acceleration equations (d²x/dt² = −ω² x).
- Stating the period of simple harmonic motion as 2π ω instead of 2π / ω.
- Failing to use radians when evaluating trigonometric functions in simple harmonic motion.
- Confusing maximum speed (occurring at x = 0) with maximum acceleration (occurring at endpoints x = ±A).

#### 20-minute recap before you walk in

- Integration by parts: ∫ u v' dx = uv − ∫ u' v dx. LIATE choice for u.
- Partial fractions: A/(ax+b) for linear factors; (Ax+B)/(ax²+bx+c) for quadratic factors.
- Simple harmonic motion acceleration: a = −ω² x.
- SHM velocity relationship: v² = ω² (A² − x²).
- Maximum speed: v_max = ω A (at x = 0); Maximum acceleration: a_max = ω² A (at x = ±A).

#### Sub-topics the syllabus lists that this note does not cover in detail

The SCSA Mathematics Specialist Year 12 Unit 3 syllabus also lists:

- Damped oscillations and motion with resistive drag forces proportional to velocity.
- Work done by a variable force: W = ∫ F dx.
- Trigonometric substitution techniques using x = a sin θ and x = a tan θ.
- Kinetic and potential energy conservation in simple harmonic motion: E_total = (1/2) m ω² A².
- Solids of revolution volumes formed by rotating regions about coordinate axes.

Confirm the live syllabus on the SCSA website before planning revision around these.

---

*Last updated 2026-09-24. Source: WACE Mathematics Specialist ATAR Year 12 syllabus, https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-specialist. Awarding body: School Curriculum and Standards Authority (SCSA).*