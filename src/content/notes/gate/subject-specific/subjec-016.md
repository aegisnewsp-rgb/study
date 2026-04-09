---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-016
topicName: "Topic 16"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Engineering Mechanics — Dynamics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**GATE Weightage:** ~5–8 marks/year (Mechanical branch); often combined with statics in a single 2-mark question.

---

**Kinematics of Particles**

- **Rectilinear motion:** x(t), v = dx/dt, a = dv/dt = d²x/dt²
- **Projectile motion:** Range R = (u² sin 2θ)/g, Max height H = (u² sin²θ)/(2g), Time of flight T = (2u sinθ)/g
- **Curvilinear motion:** Separate into horizontal and vertical components

**Newton's Laws & Force Analysis**

- **F = ma** — core equation; identify all forces, draw Free Body Diagram (FBD)
- Weight = mg downward; normal force perpendicular to surface; friction f ≤ μN
- **Common mistake:** Forgetting that weight changes with g in different planet problems

**Work-Energy & Impulse-Momentum**

- **Work-Energy:** W = ΔKE = ½m(v² – u²)
- **Potential energy:** gravitational PE = mgh; spring PE = ½kx²
- **Conservation of energy:** Total mechanical energy constant if no non-conservative forces
- **Impulse-Momentum:** J = Δp = ∫F dt; for constant force: J = F·Δt = m(v – u)
- **Conservation of momentum:** External force = 0 → m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂

**Collisions**

| Type | e (coefficient of restitution) | KE after collision |
|---|---|---|
| Perfectly elastic | e = 1 | KE conserved |
| Inelastic | 0 < e < 1 | KE lost |
| Perfectly inelastic | e = 0 | Bodies stick together |

- e = (v₂ – v₁)/(u₁ – u₂) = relative speed of separation / relative speed of approach

**Rigid Body Rotation**

- Angular displacement θ (rad), ω = dθ/dt, α = dω/dt
- **Torque:** τ = Iα (analogous to F = ma)
- Moment of inertia I = Σmr² for discrete; I = ∫r² dm for continuous
- Rotational KE = ½Iω²
- Angular momentum L = Iω; τ = dL/dt

**Key Formulas Summary**

```
Linear:    v = u + at,    s = ut + ½at²,    v² = u² + 2as
Projectile: R = u²sin2θ/g,   H = u²sin²θ/2g
Collision: v₁' = (m₁–em₂)/(m₁+m₂)u₁ + (1+e)m₂/(m₁+m₂)u₂
Rotation:  τ = Iα,   KE = ½Iω²,   L = Iω
```

**⚡ GATE Tips**
- Always draw FBD before writing equations — 50% of mistakes happen here
- In collision problems, check if momentum AND energy are simultaneously conserved (elastic = both, inelastic = only momentum)
- For rigid body rotation about a fixed axis, parallel axis theorem: I = I_cm + md²

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Kinematics of Particles

Kinematics describes motion without considering its causes. **Rectilinear motion** uses:
- **Position:** x(t)
- **Velocity:** v = dx/dt
- **Acceleration:** a = dv/dt = d²x/dt²

Integration gives: v = u + at, s = ut + ½at², v² = u² + 2as

**Projectile motion** decomposes into:
- Horizontal: aₓ = 0 → x = u cosθ · t
- Vertical: aᵧ = –g → y = u sinθ · t – ½gt²

> **Common mistake:** Students forget that maximum range (R = u²/g) occurs at θ = 45° only for level ground. For elevated target, angle differs.

## Newton's Laws and Force Analysis

**First Law (Inertia):** Body continues at rest/uniform motion unless acted upon by external force.

**Second Law:** F = ma (vector equation — resolve components)

**Third Law:** Action–reaction pairs act on *different* bodies.

### Free Body Diagram (FBD) — Critical for GATE
1. Isolate the body
2. Show ALL external forces with arrows
3. Never show internal forces or reaction forces on other bodies

## Work-Energy Theorem

Work done by all forces = Change in kinetic energy:

W_total = ½mv² – ½mu²

For **conservative forces**, work is path-independent and W = –ΔPE.

**Gravitational spring potential energy:**
- PE_gravity = mgh (height measured from chosen datum)
- PE_spring = ½kx² (x = displacement from natural length)

**Conservation of mechanical energy:** E_total = KE + PE = constant (no friction/drag)

## Impulse-Momentum Theorem

Impulse J = ∫F dt = F_avg · Δt = Δp (change in momentum)

For **impulse of constant force:** J = F·Δt

> **Key insight:** Average force during collision = Δp/Δt. Higher Δt → lower average force (why airbags work).

## Conservation of Momentum

Valid when **net external force = 0**:

Σ p_initial = Σ p_final

This is fundamental in collision analysis and rocket propulsion.

## Collisions in One Dimension

**Coefficient of restitution:** e = relative speed of separation / relative speed of approach

- e = 1: Perfectly elastic (KE conserved)
- e = 0: Perfectly inelastic (bodies stick, maximum KE loss)
- 0 < e < 1: Partially inelastic (most real collisions)

**Velocities after collision:**
```
v₁ = [(m₁ – em₂)u₁ + (1+e)m₂u₂] / (m₁+m₂)
v₂ = [(m₂ – em₁)u₂ + (1+e)m₁u₁] / (m₁+m₂)
```

**Lost KE in perfectly inelastic collision:** ΔKE = ½μ(v₁ – v₂)²(1 – e²), where μ = m₁m₂/(m₁+m₂)

## Rigid Body Rotation

**Angular kinematic equations** (analogous to linear):
- ω = ω₀ + αt
- θ = ω₀t + ½αt²
- ω² = ω₀² + 2αθ

**Moment of inertia** depends on axis of rotation:
- I about any axis = I_cm + md² (parallel axis theorem)
- Thin rod (about center): I = mL²/12; about end: I = mL²/3
- Solid cylinder/disc: I = mR²/2
- Solid sphere: I = (2/5)mR²

**Torque and angular momentum:**
- τ = Iα
- L = Iω (angular momentum)
- τ = dL/dt ( rotational analogue of F = dp/dt)

**Work-Energy for rotation:**
- W = τθ
- KE_rot = ½Iω²
- Power P = τω

## Example Problem

> A block of mass 2 kg slides down a 30° incline (μ = 0.3) from height 5 m. Find its speed at the bottom.

**Solution:**
- Height h = 5 m, angle θ = 30°, μ = 0.3
- Forces along incline: mg sinθ – f = ma
- Normal force N = mg cosθ
- Friction f = μN = μmg cosθ
- So: mg sinθ – μmg cosθ = ma
- a = g(sinθ – μ cosθ) = 9.81(0.5 – 0.3×0.866) = 9.81(0.5 – 0.2598) = 9.81×0.2402 = 2.356 m/s²
- Using v² = u² + 2as, s = h/sinθ = 5/0.5 = 10 m
- v² = 0 + 2×2.356×10 = 47.12 → **v = 6.86 m/s**

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Advanced Kinematics — Curvilinear Motion

For motion in a plane with curvilinear path, use **normal and tangential components:**
- **Tangential acceleration:** aₜ = d|v|/dt (changes speed)
- **Normal acceleration:** aₙ = v²/ρ (changes direction; ρ = radius of curvature)
- **Total acceleration:** a = √(aₜ² + aₙ²)

For **circular motion** (ρ = R = constant):
- aₙ = v²/R = ω²R
- In uniform circular motion: aₜ = 0, a = aₙ only

## Variable Mass Systems — Rocket Propulsion

**Rocket equation** (Tsiolkovsky):
- Thrust = v_e · (dm/dt) where v_e = exhaust velocity relative to rocket
- Net external force on rocket: F_ext = M(dv/dt) + v_e(dM/dt)
- For rocket in gravity-free space, F_ext = 0: M(dv/dt) = –v_e(dM/dt)

> **GATE Tip:** Variable mass problems require careful identification of system boundary. The expelled/added mass is NOT part of the main system when applying F = ma.

## Impulse-Momentum in 2D and 3D

Impulse-momentum theorem is vector-valued:
- J = Δp = p_final – p_initial
- Components: Jₓ = Δpₓ, Jᵧ = Δpᵧ, J_z = Δp_z
- In 2D collisions, both x and y momentum components conserve independently

## Oblique Collisions

For **off-center (oblique) collisions**:
1. Resolve velocities into normal and tangential components
2. Along tangent: velocity components are unchanged (no impulsive force in tangent direction)
3. Along normal: apply 1D collision formula using e
4. Reconstruct final velocity vectors from new normal + unchanged tangential components

## System of Rigid Bodies

**Energy methods vs. momentum methods:**

| Method | Conservative Forces | Non-conservative/Impulsive |
|---|---|---|
| Work-Energy | ΔKE = W_net | ΔKE = W_non-conservative |
| Momentum | Σp conserved only if F_ext = 0 | Apply impulse equations |

**Angular impulse-momentum:** ∫τ dt = ΔL (angular impulse = change in angular momentum)

## Radius of Gyration

Defined by k such that I = mk². Useful when tables give k instead of I.

## Rolling Motion (No Slip)

Condition: v_cm = ωR (translational and rotational linked)

**Kinetic energy of rolling:**
- KE_total = ½m v_cm² + ½I_cm ω²
- Substituting ω = v_cm/R: KE = ½mv_cm²(1 + I/(mR²))
- For solid cylinder (I = mR²/2): KE = ¾mv_cm²
- For hollow cylinder (I = mR²): KE = mv_cm²

**Acceleration down incline (no slip):**
- a = (g sinθ) / (1 + I/(mR²))
- Solid sphere: a = (5/7)g sinθ
- Hollow sphere: a = (3/5)g sinθ
- Solid cylinder: a = (2/3)g sinθ

> **GATE Common Mistake:** Students often confuse the moment of inertia formula for different objects. Always derive I for the given axis, or use the parallel axis theorem correctly.

## Damping and Forced Oscillations (Rotational)

For torsional vibrations:
- Equation: I·d²θ/dt² + c·dθ/dt + k·θ = T(t)
- Damping ratio: ζ = c/(2√(Ik))
- **Critical damping:** c_cr = 2√(Ik); ζ = 1
- Natural frequency: ω_n = √(k/I)

## GATE Exam Strategy — Dynamics

**Question types to expect:**
1. **Kinematics graph problems** — area under a-t, v-t graphs
2. **Block-on-incline** — friction, energy, acceleration
3. **Collision** — find e or final velocities (1D)
4. **Rotational KE and moment of inertia** — composite bodies
5. **Projectile from height** — maximum range, time of flight

**Common GATE mistakes to avoid:**
- Using g = 10 m/s² instead of 9.81 when precision matters
- Mixing up work-energy and conservation of momentum conditions
- Incorrectly applying parallel axis theorem
- Forgetting sign conventions for PE in energy conservation

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
