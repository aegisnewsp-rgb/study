---
exam: wace-mathematics-methods
examName: WACE Mathematics Methods & Mathematics Specialist (SCSA)
subject: wace-mathematics-specialist
subjectName: Mathematics Specialist
topic: wacespec-006
topicName: Vector Calculus and Dynamics
weight: 3
country: australia
generated: "2026-09-20T13:15:00"
lastUpdated: 2026-09-24
---

# Unit 4 Topic 2: Vector Calculus and Dynamics — WACE Mathematics Specialist (SCSA) Notes

Unit 4 Topic 2 of WACE Mathematics Specialist covers vector-valued functions, calculus of vector functions and applications to motion; Newton's laws applied to connected bodies and inclined planes. Second Topic of Unit 4 and assessed in the ATAR Year 12 examination.

> Re-check the live specification details on https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-specialist before planning revision around these figures.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **Vector calculus.** v(t) = r'(t), a(t) = r''(t).
- **Newton's laws.** F = ma.
- **Connected bodies.** Tension, friction.

#### Examiner traps

- Mixing up speed and velocity.
- Forgetting to resolve forces into components.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Vector calculus

r(t) = x(t) i + y(t) j. v(t) = r'(t) = x'(t) i + y'(t) j. a(t) = r''(t) = x''(t) i + y''(t) j. Speed = |v(t)|.

#### Newton's laws applied to connected bodies

For two bodies connected by a string over a pulley: apply F = ma to each body. Use Newton's third law to relate the tensions.

#### Inclined planes

For an object on a smooth incline of angle θ: weight components parallel to slope mg sin θ, perpendicular mg cos θ. Normal force balances the perpendicular component.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why Topic 2 of Unit 4 prepares for tertiary mechanics

- Vector calculus is the language of physics.

#### Year 12 planning pattern

- Term 1: Vector calculus.
- Term 2: Dynamics, connected bodies.

#### Common misconceptions (and the correction)

- "Velocity and acceleration are the same." No — acceleration is the derivative of velocity.
- "Mass and weight are the same." Weight is a force.

---

### Specification reference

This Topic is the second Topic of Unit 4 in the WACE Mathematics Specialist ATAR Year 12 syllabus. Confirm the live examination design brief on senior-secondary.scsa.wa.edu.au.

#### Worked example — vector kinematics in two dimensions

A rescue drone operates in a horizontal plane with position vector given by:

```
  r(t) = (t³ − 6t) i + (2t² − 8t + 5) j  (metres)
```

for time t ≥ 0 in seconds.
1. Determine the velocity vector v(t) and acceleration vector a(t).
2. Find the speed of the drone at t = 2 seconds.
3. Determine when the drone's velocity is purely in the vertical j direction (x-component of velocity is zero).
4. Calculate the tangential component of acceleration a_t at t = 2 seconds.

Part 1: Velocity and acceleration vectors
Differentiate each component with respect to time:

```
  v(t) = r'(t) = (3t² − 6) i + (4t − 8) j  (m/s)
  a(t) = v'(t) = (6t) i + (4) j  (m/s²)
```

Part 2: Speed at t = 2 seconds
Evaluate velocity components at t = 2:

```
  v(2) = (3(2)² − 6) i + (4(2) − 8) j
       = (12 − 6) i + (8 − 8) j
       = 6 i + 0 j  (m/s)
```

Speed is the magnitude of the velocity vector:

```
  |v(2)| = √(6² + 0²) = 6.0 m/s
```

Part 3: Velocity purely in j direction
Set the i component of velocity to zero:

```
  3t² − 6 = 0
  3t² = 6
  t² = 2
  t = √2 ≈ 1.414 seconds (since t ≥ 0)
```

Part 4: Tangential acceleration at t = 2
Evaluate acceleration at t = 2:

```
  a(2) = 6(2) i + 4 j = 12 i + 4 j
```

The tangential acceleration is the scalar projection of acceleration onto velocity:

```
  a_t = (a · v) / |v|
```

Evaluate dot product a(2) · v(2):

```
  a(2) · v(2) = (12)(6) + (4)(0) = 72
```

Calculate a_t:

```
  a_t = 72 / 6 = 12 m/s²
```

#### Worked example — uniform circular motion dynamics

A satellite of mass m = 1200 kg moves in a circular orbit of radius R = 7.0 × 10⁶ metres around the Earth with a constant orbital speed of v = 7,500 m/s.
1. Calculate the magnitude of the centripetal acceleration acting on the satellite.
2. Determine the period of one complete orbit in minutes.
3. Calculate the magnitude of the centripetal gravitational force maintaining this orbit.

Part 1: Centripetal acceleration

```
  a_c = v² / R
      = (7500)² / (7.0 × 10⁶)
      = 5.625 × 10⁷ / (7.0 × 10⁶)
      ≈ 8.036 m/s²
```

The centripetal acceleration is 8.04 m/s² directed radially inward toward the centre of the Earth.

Part 2: Orbital period T
Distance in one orbit is circumference C = 2π R:

```
  T = (2π R) / v
    = (2π × 7.0 × 10⁶) / 7500
    = (4.3982 × 10⁷) / 7500
    ≈ 5,864.3 seconds
```

Convert to minutes:

```
  T = 5864.3 / 60 ≈ 97.74 minutes (approx 1 hour 38 minutes)
```

Part 3: Centripetal force

```
  F_c = m a_c
      = 1200 × 8.0357
      = 9,642.8 Newtons
```

The centripetal gravitational force is approximately 9,643 N.

#### Common marking-scheme mistakes

- Confusing velocity (a vector) with speed (the scalar magnitude of velocity).
- Inverting the centripetal acceleration formula (writing R / v² instead of v² / R).
- Forgetting to convert time from seconds to minutes or hours when requested by the question.
- Omitting directional descriptions for acceleration vectors in circular and planar motion.
- Stating tangential acceleration as a vector when a scalar component is requested.

#### 20-minute recap before you walk in

- Position vector: r(t) = x(t) i + y(t) j + z(t) k.
- Velocity: v(t) = r'(t); Speed: |v(t)| = √(x'² + y'² + z'²).
- Acceleration: a(t) = v'(t) = r''(t).
- Tangential acceleration component: a_t = (a · v) / |v| = d/dt(|v|).
- Centripetal acceleration in uniform circular motion: a_c = v² / R = ω² R (directed toward center).

#### Sub-topics the syllabus lists that this note does not cover in detail

The SCSA Mathematics Specialist Year 12 Unit 4 syllabus also lists:

- Normal component of acceleration: a_n = √( |a|² − a_t² ) = v² / ρ, where ρ is radius of curvature.
- Banked track circular motion dynamics without and with friction: tan θ = v² / (R g).
- Conical pendulums and tension resolution in 3D circular motion.
- Helical and spiral 3D space curve trajectories r(t) = a cos(ωt) i + a sin(ωt) j + c t k.
- Conservation of angular momentum in central force fields: L = r × p.

Confirm the live syllabus on the SCSA website before planning revision around these.

---

*Last updated 2026-09-24. Source: WACE Mathematics Specialist ATAR Year 12 syllabus, https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-specialist. Awarding body: School Curriculum and Standards Authority (SCSA).*