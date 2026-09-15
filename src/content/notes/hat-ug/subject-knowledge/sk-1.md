---
exam: hat-ug
examName: HAT-UG (HEC Aptitude Test - Undergraduate)
subject: subject-knowledge
subjectName: Subject Knowledge
topic: sk-1
topicName: "Physics: Mechanics"
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.010908"
lastUpdated: "2026-09-15"
diagramPrompt: "Educational diagram illustrating Physics: Mechanics with clear labels, white background, exam-style illustration"

---

# Physics: Mechanics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Mechanics is the branch of physics that studies **motion** (kinematics) and the **forces** producing or altering it (dynamics), along with equilibrium, energy, and rotation. In the HAT-UG Subject Knowledge paper (Physics carries 4% weight), roughly one out of every four MCQs from physics tests mechanics, so this topic is the single highest-yield area.

- **Kinematics (1-D):** `v = u + at`, `s = ut + ½at²`, `v² = u² + 2as` — where `u` is initial velocity (m·s⁻¹), `v` is final velocity (m·s⁻¹), `a` is acceleration (m·s⁻²), `s` is displacement (m), `t` is time (s).
- **Dynamics:** `F = ma` (Newton's 2nd law; F in newtons, m in kg).
- **Energy & Work:** `W = F·d·cosθ` (J), `KE = ½mv²` (J), `PE = mgh` (J).
- **Momentum:** `p = mv` (kg·m·s⁻¹); impulse `J = F·Δt` equals `Δp`.
- **Rotation:** `τ = r × F` (N·m), `L = Iω` (angular momentum, kg·m²·s⁻¹).

> 💡 **High-Yield Memory Hook:** **"N-A-K-M-W-R"** — Newton's laws, Acceleration, Kinematics equations, Momentum conservation, Work-energy theorem, Rotational torque. Walk through this acronym while solving any mechanics MCQ and you will pick the right governing law every time.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Newton's Laws and Free-Body Diagrams
A free-body diagram (FBD) isolates one body and shows every external force as a vector: weight (`W = mg`, downward), normal (`N`, perpendicular to surface), tension (`T`, along string), friction (`f`, opposing motion/tendency), and applied forces. Newton's second law `F_net = ma` is then applied along each axis. For a 5 kg block pulled horizontally by 20 N on a surface with `μ = 0.2`, the friction force is `f = μmg = 0.2 × 5 × 9.8 = 9.8 N`, giving `a = (20 − 9.8)/5 = 2.04 m·s⁻²`.

#### Concept Comparison Matrix

| Pair | Quantity | Vector/Scalar | SI Unit | Key Formula |
|------|----------|---------------|---------|-------------|
| Distance vs Displacement | Path length vs shortest change in position | Scalar vs Vector | m, m | `s = ut + ½at²` vs `Δr` |
| Mass vs Weight | Matter content vs gravitational pull | Scalar vs Vector | kg, N | `W = mg` (g ≈ 9.8 m·s⁻²) |
| Speed vs Velocity | Rate of distance vs rate of displacement | Scalar vs Vector | m·s⁻¹, m·s⁻¹ | `v = d/t` vs `v = Δr/Δt` |
| KE vs Momentum | Energy of motion vs quantity of motion | Scalar vs Vector | J, kg·m·s⁻¹ | `½mv²` vs `mv` |
| Work vs Power | Energy transferred vs rate of transfer | Scalar vs Scalar | J, W | `W = Fd cosθ` vs `P = W/t` |
| Torque vs Force | Rotational push vs linear push | Vector vs Vector | N·m, N | `τ = rF sinθ` vs `F = ma` |

#### Work-Energy and Momentum Theorems
The **work-energy theorem** states `W_net = ΔKE = ½mv_f² − ½mv_i²`. Use it when speed changes under a known net force. The **impulse-momentum theorem** states `F·Δt = Δp = m(v_f − v_i)` and is preferred for collision problems where the contact time is short.

- In **elastic collisions**, both momentum AND kinetic energy are conserved.
- In **inelastic collisions**, momentum is conserved but KE drops; a perfectly inelastic collision sticks the bodies together.

#### Projectile Motion
Resolve the launch velocity `u` at angle `θ` into `u_x = u cosθ` and `u_y = u sinθ`. Horizontal velocity stays constant; vertical motion is `y = u_y t − ½gt²`. Maximum height `H = u² sin²θ / (2g)`, range `R = u² sin 2θ / g`, time of flight `T = 2u sinθ / g`.

#### 🎯 Exam-Level Worked Problem
**Question:** A 2 kg ball moving at 6 m·s⁻¹ collides head-on with a 4 kg ball moving at 3 m·s⁻¹ in the opposite direction. If the collision is perfectly elastic, find the final speed of the 2 kg ball.

#### Solution:
For a 1-D elastic collision with masses `m₁`, `m₂` and initial velocities `u₁`, `u₂`, the final velocity of `m₁` is:
`v₁ = [(m₁ − m₂)u₁ + 2m₂u₂] / (m₁ + m₂)`
Plug in `m₁ = 2 kg`, `u₁ = +6 m·s⁻¹`, `m₂ = 4 kg`, `u₂ = −3 m·s⁻¹`:
`v₁ = [(2 − 4)(6) + 2(4)(−3)] / (2 + 4) = [(−2)(6) + (−24)] / 6 = (−12 − 24) / 6 = −36 / 6 = −6 m·s⁻¹`
The 2 kg ball rebounds at **6 m·s⁻¹ in the opposite direction**.

> ⚠️ **Examiner Trap:** Sign conventions. Always assign the initial direction of motion as positive; if the second ball moves opposite, its velocity enters the formula as a NEGATIVE number. Forgetting the sign is the single most common reason students get a positive `+6 m·s⁻¹` instead of `−6 m·s⁻¹`, which then collides with the kinetic-energy check.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Circular and Rotational Motion Limits
For uniform circular motion at radius `r` and speed `v`, the centripetal acceleration is `a_c = v² / r = ω²r`, directed toward the centre. The required centripetal force is `F_c = mv² / r`. On a banked curve without friction, the banking angle satisfies `tanθ = v² / (rg)`. Angular momentum `L = Iω` is conserved when no external torque acts — this is why spinning ice-skaters pull in their arms (`I` decreases, so `ω` increases).

#### Static Equilibrium Conditions
A rigid body is in equilibrium when **both** ΣF = 0 (translational) AND Στ = 0 (rotational). For a uniform beam of weight `W` resting on two supports, the reactions are found by taking torques about one support to avoid solving simultaneous equations. This is the same machinery used to analyse HAT-UG questions on ladders against walls and metre-rule balance problems.

#### Gravitation and Potential Energy
Newton's universal law: `F = G·m₁·m₂ / r²`, where `G = 6.674 × 10⁻¹¹ N·m²·kg⁻²`. Gravitational PE near Earth's surface: `U = −G·M·m / r` (exact) simplifies to `U = mgh` only for `h << r_earth ≈ 6400 km`. Escape velocity from Earth's surface is `v_e = √(2gR) ≈ 11.2 km·s⁻¹`.

#### Advanced Practice Prompts

1. **Satellite orbit problem:** A satellite orbits at altitude `h = 600 km` above Earth. Using `v = √(GM / r)` with `M_earth = 5.97 × 10²⁴ kg` and `r = R_earth + h`, compute orbital speed and period. **Trap:** students use `g = 9.8` instead of the orbital formula — only valid at the surface.
2. **Rotational kinetic energy:** A solid disc (mass `M`, radius `R`) rolls without slipping at speed `v`. Total KE = `½Mv² + ½Iω²` = `½Mv² + ¼Mv²` = `¾Mv²` since `I = ½MR²` and `ω = v/R`. **Trap:** forgetting the rotational share halves the kinetic energy.

#### Common Mistake Table

| Mistake | Why It Hurts | Fix |
|---------|--------------|-----|
| Using `g = 10` and `g = 9.8` in the same paper | Loses 1–2 marks per numerical | Pick one convention per problem; HEC paper usually accepts either if consistent |
| Writing `v = 0` at the top of projectile path | Ignores horizontal velocity still acting | Top of trajectory: `v_y = 0`, but `v_x = u cosθ ≠ 0` |
| Confusing impulse with work | Impulse is vector (N·s), work is scalar (J) | Impulse changes momentum; work changes energy |
| Treating friction as constant on inclines | Kinetic `f = μ_k N`; static `f ≤ μ_s N` and self-adjusts | Always compute `N` first, then apply the relevant coefficient |

---

## Continue your study

- **[View this topic in your HAT-UG (HEC Aptitude Test - Undergraduate) roadmap](/roadmap/?exam=hat-ug&duration=1mo)** — see where "Physics: Mechanics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=hat-ug&duration=1d)** — 1-day sprint covering highest-weight topics
- **[HAT-UG (HEC Aptitude Test - Undergraduate) exam overview](/exams/hat-ug/)** — pattern, eligibility, and syllabus
- **[All Subject Knowledge notes](/notes/hat-ug/subject-knowledge/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
