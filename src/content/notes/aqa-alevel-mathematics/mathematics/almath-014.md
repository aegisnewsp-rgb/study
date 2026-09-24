---
exam: aqa-alevel-mathematics
examName: A-Level Mathematics (AQA 7357)
subject: mathematics
subjectName: Mathematics
topic: almath-014
topicName: Quantities, Units and Kinematics
weight: 3
country: uk
generated: "2026-09-22T10:00:00"
lastUpdated: "2026-09-22"
---

# Quantities, Units and Kinematics — A-Level Mathematics (AQA 7357) Notes

Quantities, Units and Kinematics is sections P and Q of the AQA 7357 specification. The section covers SI base units for length, time and mass, the derived units for velocity, acceleration, force, weight and moment, the constant-acceleration formulae, displacement–time and velocity–time graphs, and variable acceleration. Quantities and units are the foundation of every mechanics question; kinematics is where most of the marks in the mechanics section actually sit. The two habits that pay off most are: write the units on every numerical answer, and check the SUVAT equations by matching dimensions.

> Verify the live specification details and any in-year assessment changes on https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357 before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### SI base units and derived units

The three SI base units used in mechanics:

- **Length**: metre (m).
- **Time**: second (s).
- **Mass**: kilogram (kg).

Derived units:

- **Velocity**: m/s (metres per second).
- **Acceleration**: m/s² (metres per second squared).
- **Force**: newton (N), where 1 N = 1 kg · m/s².
- **Weight**: also a force, so the unit is the newton (N). Weight = mg, where g is the acceleration due to gravity (≈ 9.8 m/s² at the Earth's surface).
- **Moment**: newton-metre (N m). Moment = force × perpendicular distance from the pivot.

#### The SUVAT equations

For motion with constant acceleration, five variables relate the motion:

- s = displacement
- u = initial velocity
- v = final velocity
- a = acceleration
- t = time

The four SUVAT equations:

- v = u + at.
- s = ut + (1/2) at².
- v² = u² + 2as.
- s = (u + v)/2 · t.

Each is missing one of the five variables. Use whichever equation omits the variable you do not know.

#### Displacement–time and velocity–time graphs

On a displacement–time graph:

- Gradient = velocity.
- Curve = acceleration (curvature, not the y-value).

On a velocity–time graph:

- Gradient = acceleration.
- Area under the curve = displacement.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Dimensions and unit checking

Every physical quantity has dimensions that can be checked. For a formula to be valid, both sides must have the same dimensions.

**Worked example.** Check that v² = u² + 2as is dimensionally consistent.

v² has dimensions (m/s)² = m²/s². u² has dimensions m²/s². 2as has dimensions (m/s²) · m = m²/s². All three terms have the same dimensions, so the equation is consistent. The "2" is a pure number (dimensionless), which is fine.

A common AQA question asks to identify which quantities can be added together (those with the same dimensions) and to spot dimensionally inconsistent formulas.

#### Converting units

SI units are the base. Non-SI units (km, cm, hours) need conversion before the SUVAT equations apply.

Conversions to remember:

- 1 km = 1000 m.
- 1 cm = 0.01 m.
- 1 hour = 3600 s.
- 1 minute = 60 s.

Always convert to SI before plugging into SUVAT.

#### Constant acceleration (SUVAT)

**Worked example.** A car accelerates from rest at 2 m/s² for 5 seconds. Find the final velocity and the distance travelled.

u = 0, a = 2, t = 5. v = u + at = 0 + 2 · 5 = 10 m/s. s = ut + (1/2) at² = 0 + (1/2) · 2 · 25 = 25 m.

**Worked example — deceleration.** A car travelling at 20 m/s brakes at 4 m/s² to a halt. Find the braking distance.

u = 20, v = 0, a = −4. v² = u² + 2as → 0 = 400 + 2(−4)s → 0 = 400 − 8s → s = 50 m.

**Worked example — motion under gravity.** A ball is thrown straight up at 15 m/s. How high does it go, and how long does it take to return?

g = 9.8 m/s², a = −9.8. u = 15, v = 0 (at the top). v² = u² + 2as → 0 = 225 − 19.6s → s ≈ 11.5 m.

Time to top: v = u + at → 0 = 15 − 9.8t → t ≈ 1.53 s. Time to return = 2 · 1.53 = 3.06 s.

#### Velocity–time graphs

A velocity–time graph shows the velocity of an object over time. The gradient is acceleration; the area under the curve is the displacement.

**Worked example.** A car accelerates uniformly from rest to 20 m/s in 10 s, then travels at 20 m/s for 20 s, then decelerates uniformly to 0 in 10 s. Find the total distance.

Area of triangle (acceleration phase): (1/2) · 10 · 20 = 100 m.
Area of rectangle (constant velocity phase): 20 · 20 = 400 m.
Area of triangle (deceleration phase): (1/2) · 10 · 20 = 100 m.

Total: 100 + 400 + 100 = 600 m.

For non-constant acceleration (curved v-t graph), the area under the curve is found by counting squares or by integration. AQA usually gives a graph and asks for the area by counting.

#### Displacement–time graphs

A displacement–time graph shows position over time. The gradient is velocity.

A straight line means constant velocity. A curve means changing velocity (acceleration). The steeper the slope, the higher the speed.

**Worked example.** A displacement–time graph passes through (0, 0), (2, 10), (4, 30). Find the velocity at t = 3.

The graph is curved (10 → 30 over 2 s). At t = 3, the gradient is approximately the slope of the tangent at that point. From the values given: between t = 2 and t = 4, the slope is (30 − 10)/(4 − 2) = 10 m/s on average. The actual gradient at t = 3 depends on the curve; for a smooth curve, it is approximately 10 m/s.

#### Variable acceleration

When acceleration is not constant, SUVAT does not apply. Instead, use:

- v = dx/dt (velocity is the derivative of displacement).
- a = dv/dt (acceleration is the derivative of velocity).

Given v as a function of t, integrate to find x. Given a as a function of t, integrate to find v. Given x as a function of t, differentiate to find v, then a.

**Worked example.** The displacement of a particle is x(t) = 3t² − 2t. Find v(t) and a(t).

v(t) = dx/dt = 6t − 2. a(t) = dv/dt = 6 m/s². (Constant acceleration, as expected for a quadratic in t.)

**Worked example.** The velocity of a particle is v(t) = 4t − t². Find the displacement from t = 0 to t = 3.

x(3) − x(0) = ∫ (0 to 3) (4t − t²) dt = [2t² − t³/3] from 0 to 3 = 18 − 9 = 9 m.

#### Average speed and average velocity

- **Average speed** = total distance / total time.
- **Average velocity** = total displacement / total time. (Vector quantity.)

For a journey that returns to the starting point, the displacement is zero, so the average velocity is zero — but the average speed is positive.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Why units matter in mechanics

A common AQA trap is the "find the units of a constant" question. Given a formula like F = k · ma, where F is force (N), m is mass (kg), a is acceleration (m/s²), the units of k are:

[F] / ([m] · [a]) = (kg · m/s²) / (kg · m/s²) = 1. So k is dimensionless.

For F = k · mv², where v is velocity (m/s), the units of k are:

[F] / ([m] · [v]²) = (kg · m/s²) / (kg · m²/s²) = 1/m. So k has units of m⁻¹.

This type of question is a quick mark if you remember to substitute the units and simplify.

#### Worked pattern — motion under gravity with resistance

For a falling object with air resistance proportional to velocity (a = g − kv/m for some constant k), the SUVAT equations do not apply. The motion is exponential:

v(t) = (mg/k) · (1 − e^(−kt/m)).

The terminal velocity is mg/k, reached as t → ∞. This is the A-level Further Mathematics content; the core A-level covers the constant-acceleration case.

#### Worked pattern — projectile on a slope

A common extension is motion on an inclined plane, where the effective gravity is g · sin α (parallel to the slope) and g · cos α (perpendicular to the slope). The SUVAT equations apply along the slope with the parallel component of g. The normal reaction force is m · g · cos α.

#### Common misconceptions (and the correction)

- "g = 10 m/s² is the standard value." AQA uses g = 9.8 m/s² unless the question says otherwise. Check the question.
- "Velocity and speed are the same." Velocity is a vector (has magnitude and direction); speed is a scalar (just magnitude). For motion in a straight line, they have the same magnitude.
- "Acceleration is velocity divided by time." It is the rate of change of velocity with respect to time, including direction. Negative acceleration can mean slowing down or speeding up in the opposite direction.
- "Displacement and distance are the same." Displacement is the change in position (vector); distance is the total path travelled (always positive). For motion in a straight line without reversing, they have the same magnitude.

#### Specification reference

Sections P and Q of the AQA A-level Mathematics 7357 specification appear on Paper 2 (alongside vectors and the rest of mechanics) and form the foundation for the dynamics content (sections R and S). Confirm the live paper structure, formula booklet and any in-year specification changes on aqa.org.uk before committing a revision plan to a student.

---

*Last updated 2026-09-22. Source: AQA A-level Mathematics specification 7357, https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357. Paper structure, assessment weighting and any in-year specification changes must be re-checked on the official page before committing a revision plan to a student.*