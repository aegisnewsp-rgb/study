---
exam: mcat
examName: "MCAT Pakistan"
subject: physics
subjectName: "Physics"
topic: physic-003
topicName: "Dynamics and Newtons Laws"
weight: 5
country: pakistan
generated: "2026-09-25T05:00:00"
lastUpdated: "2026-09-25"
---

# Dynamics and Newton's Laws — MCAT Pakistan

Dynamics is the study of why things move: force, mass, acceleration, momentum, and impulse. Under the PMDC 2026 Physics allotment of 36 MCQs (≈20 % of the 180-MCQ MDCAT paper, PMDC Public Notice, 2026), Dynamics and Newton's Laws contributes roughly 5–7 MCQs per paper — every question on inclined planes, pulleys, friction, or collisions reduces to a free-body diagram and the three laws. PMDC confirms the 2026 syllabus is identical to the 2025 Uniform Curriculum (PMDC MDCAT Curriculum 2025), so the student learning outcomes below are unchanged for this cycle.

> Verify the live syllabus, paper pattern, and any in-year changes on https://pmdc.pk/ before planning around the figures below.

### 🟢 Lite — Quick Review (1h-1d)

**What to lock in within the first hour.**
- **Newton's First Law (inertia).** A body at rest stays at rest; a body in uniform motion stays in uniform motion unless acted on by a net external force. This defines an **inertial frame**.
- **Newton's Second Law.** $\vec{F}_{\text{net}} = m\vec{a}$. Force in newtons (N); mass in kilograms; acceleration in m/s². 1 N = 1 kg·m/s².
- **Newton's Third Law.** For every action there is an equal and opposite reaction. The action–reaction pair acts on *different* bodies; they never cancel on the same body.
- **Weight.** $W = mg$, where g ≈ 9.8 m/s² (≈10 m/s² for quick estimation). Weight is a force, not a mass.
- **Momentum.** $\vec{p} = m\vec{v}$, units kg·m/s. Impulse $\vec{J} = \vec{F}\Delta t = \Delta \vec{p}$. A larger force applied for a shorter time can deliver the same impulse as a smaller force over a longer time (this is why airbags and crumple zones work).
- **Friction.** Static friction adjusts up to a maximum $f_s^{\max} = \mu_s N$. Once the object moves, kinetic friction takes over: $f_k = \mu_k N$, with $\mu_k < \mu_s$. Friction opposes relative motion, not surface motion.
- **Free-body diagram first, equations second.** Every Dynamics question starts the same way: isolate the body, draw all forces, choose axes, write $\Sigma F = ma$ on each axis.

**One-line recap before walking in.** Draw the free-body diagram; apply $\Sigma F = ma$; if momentum is conserved, the collision is isolated.

### 🟡 Standard — Exam Prep (3d-3w)

#### Force, mass, and the Second Law in components
Always draw the free-body diagram before writing equations. Choose axes aligned with the acceleration (along the slope for an incline, along the string for a pulley). Resolve forces into components, then write $\Sigma F_x = ma_x$ and $\Sigma F_y = ma_y$ separately. The y-component often reduces to $N - mg\cos\theta = 0$ on an incline, leaving the x-component $mg\sin\theta - f = ma$ as the equation of motion.

**Worked example.** A 4 kg block on a 30° frictionless incline. What is its acceleration down the slope? — $\Sigma F_x = mg\sin\theta = 4 \times 9.8 \times 0.5 = 19.6$ N; $a = 19.6 / 4 = $ **4.9 m/s²**. Mass cancels because every object on a frictionless incline accelerates at $g\sin\theta$ regardless of mass.

#### Friction — static, kinetic, and limiting cases
**Static friction** is self-adjusting: $f_s \le \mu_s N$, and equals whatever is needed to prevent motion, up to that limit. **Kinetic friction** is fixed: $f_k = \mu_k N$. The direction is always opposite the direction of *sliding*. On an incline, the block stays at rest if $\tan\theta \le \mu_s$; it slides with acceleration $a = g(\sin\theta - \mu_k\cos\theta)$ if $\tan\theta > \mu_s$.

**Worked example.** A 2 kg block rests on a horizontal surface with $\mu_s = 0.4$ and $\mu_k = 0.3$. A horizontal force of 6 N is applied. Does it move? — Maximum static friction $f_s^{\max} = \mu_s N = 0.4 \times 2 \times 9.8 = 7.84$ N. Since 6 N < 7.84 N, **the block does not move** and the friction force is 6 N (self-adjusting, not the maximum).

#### Connected masses, pulleys, and Atwood machines
Two masses connected by a string over a frictionless, massless pulley accelerate with $a = (m_1 - m_2)g / (m_1 + m_2)$, with $m_1 > m_2$. The tension in the string is $T = 2m_1m_2g / (m_1 + m_2)$, the same on both sides. If the pulley has mass, the tensions on the two sides differ; for MCAT, assume massless pulleys unless stated.

**Worked example.** Masses 3 kg and 2 kg hang from a frictionless pulley. — $a = (3-2) \times 9.8 / (3+2) = $ **1.96 m/s²** (heavier side descending); $T = 2 \times 3 \times 2 \times 9.8 / 5 = $ **23.52 N**. Notice that $T < m_1 g$ — the tension is *less* than the weight of the heavier mass because it accelerates downward.

#### Inclined planes revisited
On an incline of angle $\theta$, the perpendicular component of weight balances the normal force: $N = mg\cos\theta$. The parallel component drives motion: $mg\sin\theta$ along the slope downward. Add friction and the equation becomes $ma = mg\sin\theta - \mu_k mg\cos\theta$ (down-slope positive). The angle at which the block just begins to slide is the **angle of repose**, given by $\tan\theta = \mu_s$.

For a **wedge** with a block on top and the wedge free to slide on a frictionless floor, the equations are coupled. Use a system-of-equations approach: write $ma_x$ for the wedge and $ma_{x'}$ for the block along its slope-aligned axes, then eliminate the internal normal force between them.

#### Momentum and impulse
Linear momentum $\vec{p} = m\vec{v}$ is conserved in an **isolated** system (no external net force). Impulse $\vec{J} = \vec{F}\Delta t = \Delta\vec{p}$ is the integral of force over time. Two practical consequences: (1) extending the time of a collision reduces the force for the same change in momentum (catching a cricket ball with a relaxed hand, airbags); (2) momentum is a vector, so direction matters — a question about a 90° collision must keep the x and y components separate.

#### Collisions — elastic, inelastic, and perfectly inelastic
- **Elastic collision:** both momentum and kinetic energy are conserved. For two masses, the relative speed of separation equals the relative speed of approach.
- **Inelastic collision:** momentum conserved, kinetic energy not conserved. Some energy becomes heat, sound, or deformation.
- **Perfectly inelastic:** the two bodies stick together after impact; momentum is conserved but kinetic energy loss is maximum.

**Worked example.** A 2 kg ball moving at 3 m/s collides head-on with a 4 kg ball at rest. After the collision, the 2 kg ball rebounds at 1 m/s. Find the velocity of the 4 kg ball. — Momentum: $2 \times 3 + 4 \times 0 = 2 \times (-1) + 4 \times v_2 \Rightarrow 6 = -2 + 4v_2 \Rightarrow v_2 = $ **2 m/s** in the original direction. Check kinetic energy: KE_before = 9 J; KE_after = 1 + 8 = 9 J — elastic.

#### Variable mass and rocket-like problems
When a body ejects mass (a rocket, a leaking sandbag on a cart), the Second Law generalises to $F_{\text{ext}} = d(mv)/dt = m\,dv/dt + v\,dm/dt$. For a rocket in free space (no external force), $m\,dv = -v_e\,dm$, where $v_e$ is the exhaust speed. For MCAT, this appears as a Tsiolkovsky-style problem: $v_f - v_i = v_e \ln(m_i / m_f)$.

#### Centre of mass and multi-body systems
The centre of mass $\vec{r}_{\text{cm}} = (m_1\vec{r}_1 + m_2\vec{r}_2 + \dots) / (m_1 + m_2 + \dots)$ moves as if all mass were concentrated there and the net external force acted at that point. Internal forces cancel in pairs. A question asking "where does the centre of mass land?" after a projectile launch from a moving platform uses the cm motion, which is parabolic regardless of internal explosions.

#### Equilibrium and statics (the boundary case)
A body in equilibrium has $\Sigma\vec{F} = 0$ and $\Sigma\vec{\tau} = 0$. Use this to find unknown forces (tension in a cable, normal at a pivot). Choose the pivot at the point with the most unknowns to make it disappear from the torque equation.

### 🔴 Deep — Mastery (1mo+)

#### Reference frames and pseudo-forces
In a non-inertial frame (an accelerating car, a rotating Earth), Newton's laws hold only if you add a **pseudo-force** opposite the frame's acceleration. In a car braking hard, a passenger feels thrown forward; the real explanation is the car's deceleration while the passenger continues at constant velocity. PMDC questions sometimes ask which way a plumb line hangs in an accelerating lift: pseudo-force tilts it backward relative to the lift.

#### Constrained motion and the Lagrangian idea (qualitative)
For systems with constraints (a bead on a wire, a pendulum), one common technique is to write $T - V$ in a single generalised coordinate and apply the Euler–Lagrange equation. For PMCAT, the practical approach is sufficient: write $\Sigma F_{\text{tangential}} = ma_{\text{tangential}}$ along the allowed direction of motion.

#### Rotation–translation coupling (qualitative)
A body rolling without slipping has $v = r\omega$ and $a = r\alpha$. The static friction at the contact point both accelerates the centre of mass (translational) and angularly accelerates the body (rotational) about its cm. For PMCAT, treat rolling as a special case of Newton's Second Law with both translation and rotation components.

#### Connections to other units
Dynamics feeds into **Work, Energy and Power** (work-energy theorem is the integral form of Newton's Second Law along the path), **Circular Motion** (centripetal force = mv²/r), **Fluid Mechanics** (buoyancy is a force, so Archimedes is a Newton's-Second-Law balance), and **Current Electricity** (force on a current-carrying wire in a magnetic field is F = BIL). Many MCAT questions require recognising that one unit's concept is another's special case.

#### Common worked mechanics — checklist
1. **Atwood machine.** $a = (m_1 - m_2)g / (m_1 + m_2)$; $T = 2m_1m_2g / (m_1 + m_2)$.
2. **Block on incline with friction.** $a = g(\sin\theta - \mu_k\cos\theta)$.
3. **Spring-mass on horizontal surface.** $a = (F - \mu_k mg - kx) / m$; equilibrium where $F = \mu_k mg + kx$.
4. **Head-on elastic collision.** $v_1' = ((m_1 - m_2)v_1 + 2m_2 v_2) / (m_1 + m_2)$ and symmetric.
5. **Rocket in free space.** $v_f - v_i = v_e \ln(m_i / m_f)$.

## Common traps

1. **Treating friction as always equal to $\mu N$.** It only equals $\mu N$ at the **maximum** static value or in the kinetic regime. If the applied force is less than $\mu_s N$, friction is whatever is needed to prevent motion and the object does not accelerate. Most friction mistakes come from ignoring this self-adjusting nature.
2. **Applying the Third Law as if the pair acts on the same body.** Action and reaction forces act on *different* bodies, so they cannot sum to zero on either one. A book on a table: gravity on the book and normal on the book both act on the book and balance. Gravity on the book and gravity on Earth are not a Third-Law pair; the pair is "book pulls Earth up (gravity on Earth)" and "Earth pulls book down (gravity on the book)".
3. **Forgetting that $\sin\theta$ and $\cos\theta$ swap roles on inclines.** The component of weight *along* the slope is $mg\sin\theta$; the component *perpendicular* to the slope is $mg\cos\theta$. Mixing them up — using $\cos\theta$ along the slope — is the single most common incline error.
4. **Saying momentum is conserved in every collision.** Momentum is conserved only when the **net external force is zero** (or negligible during the collision time). A car braking into a wall does not conserve momentum because the brakes supply an external force. A bullet embedding in a block on a frictionless surface *does* conserve momentum (no external horizontal force).
5. **Calling weight and mass the same thing.** Mass is the quantity of matter (kg, scalar, invariant); weight is the gravitational force on that mass (N, vector, depends on local g). A 5 kg mass on Earth weighs ≈49 N; the same 5 kg on the Moon weighs ≈8.2 N. A question asking "what is the weight of a 60 kg astronaut on the ISS (in orbit)?" expects **≈0 N** (free fall), not 60 × 9.8.