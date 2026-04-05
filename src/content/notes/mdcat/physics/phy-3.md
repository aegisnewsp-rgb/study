---
exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-3
topicName: Dynamics
weight: 5
country: pakistan
generated: "2026-03-24T08:32:08.080731"
diagramPrompt: Clean educational diagram showing Dynamics with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration
---

# Dynamics

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Newton's Laws — The Core of Dynamics:**

Newton's First Law (Law of Inertia): A body continues in its state of rest or uniform motion in a straight line unless acted upon by an external force. Inertia is the natural tendency of a body to resist changes in its state of motion. Mass is the quantitative measure of inertia — a heavier object has more inertia and requires more force to change its state of motion.

Newton's Second Law: F = ma or more fundamentally F = dp/dt = d(mv)/dt. For constant mass: Force equals mass times acceleration. For variable mass (like a rocket expelling fuel): F_ext = mdv/dt + v_rel dm/dt. The direction of force and acceleration are the same.

Newton's Third Law: Action and reaction are equal in magnitude, opposite in direction, and act on different bodies simultaneously. The force you exert on the ground equals the force the ground exerts on you — they are a pair of Newton's third law forces.

**Linear Momentum:**

Momentum p = mv (vector quantity, kg·m/s). The total momentum of an isolated system is conserved (Newton's third law ensures action-reaction pairs cancel in ΣF_ext = dP/dt). Impulse J = FΔt = Δp (change in momentum). For a force varying with time, J = ∫F dt (area under F-t graph).

**⚡ MDCAT Tip:** In MDCAT, always draw a free body diagram (FBD) before writing any equations. Identify all forces acting on the body, then apply Newton's second law in the chosen direction. A common MDCAT trick: give you a tension value in a rope connecting two blocks — you need to identify which block you're analysing to know what tension acts on it.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

**Friction — Static and Kinetic:**

Static friction f_s opposes impending motion. It adjusts itself from 0 up to f_s(max) = μ_sN, exactly equal and opposite to whatever force tries to cause motion. Kinetic friction f_k = μ_kN (constant magnitude, always opposes motion). Note: μ_s > μ_k for most surfaces — this is why it takes more force to start sliding than to keep sliding.

Common MDCAT question type: A block on a horizontal surface has weight W = mg and normal reaction N = mg. On an incline at angle θ to horizontal: N = mg cosθ and the component of weight along the plane = mg sinθ (this component tends to cause sliding down the plane).

The block will start sliding when mg sinθ = μ_s mg cosθ, i.e., tanθ = μ_s. The angle at which sliding begins is called the angle of friction φ, where tan φ = μ_s.

**Connected Bodies:**

For two blocks connected by a string over a frictionless pulley (Atwood's configuration):
- Let m₂ > m₁ (heavier mass moves downward)
- Equation for m₁: T - m₁g = m₁a (upward acceleration)
- Equation for m₂: m₂g - T = m₂a (downward acceleration)
- Adding both equations: (m₂ - m₁)g = (m₁ + m₂)a → a = (m₂ - m₁)g/(m₁ + m₂)
- Tension T = 2m₁m₂g/(m₁ + m₂)

**⚡ MDCAT Tip:** For multiple blocks in contact (side by side or one behind the other), draw separate FBDs for each. Use Newton's third law to relate forces at the contact surfaces — the force A exerts on B equals the force B exerts on A (same magnitude, opposite direction).

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

**Impulse-Momentum Applications:**

The impulse-momentum theorem J = Δp applies to all collisions and rapid force events. In car safety: when a car hits a wall and stops in 0.1 s, the average stopping force is much smaller than when it stops in 0.01 s — longer collision time means lower average force (and lower acceleration, hence lower inertial force on passengers). Crumple zones increase collision time to reduce forces.

For a ball bouncing off a wall with coefficient of restitution e: incident speed u, rebound speed v = eu. Change in momentum = m(v - (-u)) = m(u + eu) = mu(1 + e). If e = 1 (perfectly elastic), Δp = 2mu; if e = 0 (perfectly inelastic, sticks to wall), Δp = mu.

**Pseudo Forces in Accelerating Frames:**

When analysing motion from inside an accelerating vehicle, bus, or lift, Newton's second law requires a fictitious pseudo force: F_pseudo = -m × a_frame. In an accelerating bus (a forward): passengers feel a backward pseudo force m × a. In a car taking a left turn: passengers feel a rightward pseudo force m × v²/r.

For a block on the floor of an accelerating truck (a = 2 m/s² forward): in the truck's frame, pseudo force backward = ma. For the block to remain stationary in the truck frame (not sliding backward), static friction must provide forward force: f_s = ma. Maximum static friction = μ_s mg. If ma > μ_s mg, the block slides.

**⚡ MDCAT Pattern:** MDCAT frequently tests Newton's laws with friction on inclined planes. A block on an inclined plane at angle θ: component of weight along plane = mg sinθ tries to pull it down; static friction opposes this up the plane up to μ_sN = μ_s mg cosθ. The block will slide when mg sinθ > μ_s mg cosθ, i.e., θ > tan⁻¹(μ_s). Once sliding, kinetic friction acts down the plane: net force down = mg sinθ - μ_k mg cosθ = ma → a = g(sinθ - μ_k cosθ). These problems appear in nearly every MDCAT paper — practice the full derivation.
