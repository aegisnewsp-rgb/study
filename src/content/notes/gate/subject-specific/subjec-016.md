---
exam: gate
examName: "GATE"
subject: subject-specific
subjectName: "Subject-Specific"
topic: subjec-016
topicName: "Engineering Mechanics — Dynamics"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-21"
---

# Engineering Mechanics — Dynamics

### 🟢 Lite — Quick Review (1h–1d)
> The single idea that carries most marks: every dynamics question reduces to **ΣF = m a** along chosen axes, then to energy or momentum bookkeeping.

Dynamics splits cleanly into two layers. **Kinematics** describes motion without asking why — *v*, *a*, *ω*, *α* as functions of time or position. **Kinetics** ties those to forces via **Newton's second law** (vector form), the **work–energy theorem**, or the **impulse–momentum theorem**. For GATE Mechanical / Civil / XE the 3% weight is concentrated in projectile motion, energy/impact, and rigid-body rotation.

| Relation | Formula | Variables & SI units |
|---|---|---|
| Newton's law (vector) | Σ**F** = m **a** | F in N, m in kg, a in m·s⁻² |
| Constant-acceleration chain | v² = u² + 2 a s | u, v in m·s⁻¹; s in m; a in m·s⁻² |
| Work–energy | T₁ + ΣU₁→₂ = T₂ | T = ½ m v² in J (N·m) |
| Impulse–momentum | ∫ ΣF dt = m(v₂ − v₁) | impulse in N·s |
| Rotation | ΣM_G = I_G α | M in N·m, I in kg·m², α in rad·s⁻² |

> 💡 **High-Yield Memory Hook:** "**K**inematics **K**nows no **K**ause; **K**inetics **K**onnects to **K**auses (forces)." Pair it with **N-E-I-P**: **N**ewton → **E**nergy → **I**mpulse → **P**ower. Pick whichever physics tool eliminates the unknown fastest.

- **Particle**: a mass at a point — only translation.
- **Rigid body**: translation **plus** rotation about the mass centre.
- **Plane (2-D) motion**: the most-tested case in GATE.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Read this tier when you have two to seven days; it builds the muscle for solving 2-mark NATs.

#### Coordinate Systems You Will Actually Use

Pick axes to make ΣF = m a resolve into one unknown per equation.

- **Cartesian (x, y):** default for blocks on inclines, pulleys, connected masses.
- **Tangential–normal (t, n):** best for circular paths, banking, pendulum release.
- **Radial–transverse (r, θ):** natural for rotating slotted arms and polar trajectories.
- **Path-variable s:** when only speed changes along a known curve.

Tangential and normal accelerations separate cleanly: **a_t = dv/dt** (tangent to path) and **a_n = v²/r = ω² r** (toward the instantaneous centre of curvature). Forgetting to include both is the most common sign error on curved-track problems.

#### Newton's Second Law — Applied in Components

Write the free-body diagram first, then resolve every force along the chosen axes. For a block of mass *m* on a 30° incline with kinetic friction μ_k:

- Along the incline: m g sin30° − μ_k N = m a.
- Perpendicular: N − m g cos30° = 0 → N = m g cos30°.

Solving: **a = g (sin30° − μ_k cos30°)**. Dimensionally a is in m·s⁻² because both terms are dimensionless coefficients times *g*.

#### Comparison Matrix — Energy vs Momentum vs Direct Newton

| Method | Best for | Equation | Pitfall |
|---|---|---|---|
| Direct Newton | Constant forces, finding acceleration | ΣF = m a | Needs acceleration; ignores time/velocity directly |
| Work–energy | Speed at a position, spring/weight work | T₁ + ΣU₁→₂ = T₂ | Must include friction work (negative) |
| Impulse–momentum | Short bursts (impact), time-averaged forces | ∫F dt = mΔv | Vector equation; resolve components |
| D'Alembert | Converting dynamics to a static FBD | ΣF − m a = 0 | Easy to drop the inertial term sign |

#### Conservation Laws in Particle and System Problems

- **Mechanical energy** is conserved only when all forces are **conservative** (gravity, ideal spring). Friction, air drag, and inelastic impact break it.
- **Linear momentum** of a system is conserved when **ΣF_ext = 0**. Internal forces (tensions, contact pushes) cancel.
- **Angular momentum** about a fixed point O is conserved when ΣM_O = 0 (no external moment about O).

For a system of particles the centre of mass obeys **M a_G = ΣF_ext**, where M is the total mass. This collapses a five-particle problem into one equation when only translational motion of the assembly is asked.

#### Worked Example — Direct Central Impact

A 4 kg block moving at 6 m·s⁻¹ strikes a stationary 2 kg block on a smooth horizontal surface. The coefficient of restitution is e = 0.5. Find both final velocities.

- Momentum conservation: 4(6) + 2(0) = 4 v₁ + 2 v₂ → 24 = 4 v₁ + 2 v₂.
- Restitution definition: e = (v₂ − v₁)/(u₁ − u₂) = 0.5 → v₂ − v₁ = 0.5(6 − 0) = 3.

Substituting v₂ = v₁ + 3 into the momentum equation: 24 = 4 v₁ + 2(v₁ + 3) = 6 v₁ + 6 → **v₁ = 3 m·s⁻¹**, **v₂ = 6 m·s⁻¹**.

> ⚠️ **Examiner Trap:** Many candidates compute KE before and after impact and forget that an inelastic collision (e < 1) **must** lose kinetic energy. A 24 J → 24 J answer with e = 0.5 is mathematically inconsistent and worth zero.

#### Rigid-Body Rotation — The Core Toolkit

- **Moment of inertia I** about an axis: a body's resistance to angular acceleration, units kg·m².
- **Radius of gyration k**: I = M k², so k = √(I/M), units m.
- **Parallel-axis (Huygens–Steiner):** I_O = I_G + M d², where d is the perpendicular distance between the centroidal axis and the new axis.

The rotational equation **ΣM_G = I_G α** mirrors Newton's law: replace m by I_G, a by α, F by torque about G.

Standard bodies to memorise (about the centroidal axis shown):

| Body | Axis | I_G |
|---|---|---|
| Thin rod, length L | perpendicular through centre | (1/12) M L² |
| Solid disc / cylinder, radius R | symmetry axis | (1/2) M R² |
| Hollow cylinder / ring, radius R | symmetry axis | M R² |
| Solid sphere, radius R | any diameter | (2/5) M R² |
| Hollow sphere, radius R | any diameter | (2/3) M R² |

#### Plane Motion of a Rigid Body

General plane motion = translation of G **plus** rotation about G. The velocity and acceleration of any point B on the body relative to A are:

- **v_B = v_A + ω × r_{B/A}**
- **a_B = a_A + α × r_{B/A} − ω² r_{B/A}**

For **rolling without slipping**, the contact point has zero velocity but **not** zero acceleration; the contact-point acceleration points toward the centre of the wheel.

#### Power Delivered by a Couple

A couple of moment M rotating at angular velocity ω delivers **P = M ω** (watts). For a translating point, **P = F · v** along the direction of motion.

---

### 🔴 Extended — Deep Study (3mo+)

> Build the kind of intuition that survives a 90-minute GATE paper with a calculator and no textbook.

#### Edge Cases and Boundary Conditions

1. **Projectile on a slope.** The textbook range formula R = u² sin 2θ / g assumes launch and landing at the same height. On an inclined plane of angle α, replace g by g cosα in the perpendicular component and re-derive; the optimum launch angle becomes **θ\* = 45° + α/2** measured from the horizontal.

2. **Oblique central impact.** When two smooth spheres collide off-centre, momentum is conserved **along the line of impact**; tangential components remain unchanged because no friction acts in that direction. The post-impact velocities split into a normal component (modified by e) and an unchanged tangential component.

3. **Coefficient of restitution limits.**
   - e = 1: perfectly elastic, KE conserved.
   - 0 < e < 1: partially inelastic, KE lost but bodies separate.
   - e = 0: perfectly plastic, bodies coalesce, max KE loss.

4. **Pendulum release from horizontal.** At the lowest point, tension is **T = m g + m v²/L**, not simply mg. The extra centripetal term is what snaps the string in a "conical" drop problem.

5. **Sliding chain on a smooth table.** A chain of total mass M and length L sliding off a table has a_t = g x/L where x is the overhanging length — the acceleration grows as more mass participates. Derive from ΣF = d(m v)/dt with time-varying mass.

#### Concept Comparison Matrix — Confusable Pairs

| Looks like | Actually is | Distinguishing test |
|---|---|---|
| Mass moment of inertia I | Polar moment J (about a point, used in torsion) | I is about an axis (kg·m²); J is about a point (kg·m²); torsion uses J |
| Angular velocity ω (rad/s) | Frequency f (Hz) | ω = 2π f |
| Radius of gyration k | Radius R of a thin ring | k = R only for a thin ring; for a solid disc, k = R/√2 |
| Limiting static friction μ_s N | Kinetic friction μ_k N | Use μ_s before motion begins, μ_k once sliding is established |
| Angular momentum H_G | Moment of momentum about a fixed point O | H_G = I_G ω only about the mass centre; about O use H_O |
| Instantaneous centre of zero velocity | Centre of rotation for kinematics | v = 0 there, but a ≠ 0 in general |
| Direct impact | Oblique impact | "Direct" = line of impact along line of centres; "oblique" = line of impact at an angle |

#### Advanced Practice Prompts

1. A uniform rod of length L and mass M is released from rest at θ = 60° from the vertical. Find the angular acceleration at that instant using **ΣM_G = I_G α**, treating pin reaction as the unknown. Then find the reaction components at the pin. *Hint: a_G has both tangential and centripetal pieces.*

2. Two discs of masses M₁, M₂ and radii R₁, R₂ are mounted on parallel shafts connected by a belt. The belt does not slip. If a torque M is applied to disc 1, derive the system moment of inertia referred to shaft 1 and the time to reach angular velocity ω from rest. *Hint: use the belt constraint ω₁ R₁ = ω₂ R₂ and the parallel-axis theorem for shaft 2's disc.*

> 📌 **Formula Check:** Every energy term must be **½** × (inertia quantity) × (squared velocity). Every momentum term is linear, every angular-momentum term is rotational. Mismatching linear and rotational forms is the costliest single error in this syllabus.

---

## Continue your study

- **[View this topic in your GATE roadmap](/roadmap/?exam=gate&duration=1mo)** — see where "Engineering Mechanics — Dynamics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=gate&duration=1d)** — 1-day sprint covering highest-weight topics
- **[GATE exam overview](/exams/gate/)** — pattern, eligibility, and syllabus
- **[All Subject-Specific notes](/notes/gate/subject-specific/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
