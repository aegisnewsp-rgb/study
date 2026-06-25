---



exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-4
topicName: Work, Energy and Power
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.081528"
lastUpdated: "2026-06-25"
diagramPrompt: "Clean educational diagram showing Work, Energy and Power with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Work, Energy and Power

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Work** is the scalar product of force and displacement: `W = F d cosθ`, where θ is the angle between the applied force and the displacement vector. It is measured in **joules (J)**. A force perpendicular to motion does zero work; holding a dumbbell stationary produces no work because displacement is zero.

**Energy** is the capacity to do work. Two forms dominate MDCAT problems: **kinetic energy** `K = ½ m v²` (motion energy) and **gravitational potential energy** `U = m g h` with g = 9.8 m s⁻² near Earth's surface. The **work–energy theorem** ties them together: net work done equals change in kinetic energy, `W_net = ΔK`.

**Power** is the time-rate of doing work, `P = W / t`, measured in **watts (W)**; 1 W = 1 J s⁻¹. For a vehicle cruising at constant velocity, `P = F v`, so doubling speed doubles the power demand at the same tractive force.

*High-yield pointers:* (1) Always include g in P.E. (2) Use cosθ — a 60° push on a 10 N block over 5 m gives 25 J, not 50 J. (3) Power is scalar, not W (work).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Defining Work Quantitatively
Work done by a constant force is `W = F d cosθ`. The displacement `d` must be in the **same direction** as the component of force considered. If θ = 0°, W = Fd (maximum); if θ = 90°, W = 0 (force perpendicular to motion — e.g., normal reaction on a sliding block does no work); if θ = 180°, W = −Fd (force opposing motion, such as kinetic friction). Work is **path-independent only for conservative forces**; for friction, W depends on the actual path length.

#### Kinetic Energy and the Work–Energy Theorem
A body of mass m moving at speed v possesses **kinetic energy** `K = ½ m v²`. The **work–energy theorem** states that the net work done by all forces acting on a body equals the change in its kinetic energy:
`W_net = K_f − K_i = ½ m v_f² − ½ m v_i²`.
This theorem converts force-based problems into energy bookkeeping, bypassing the need to compute accelerations explicitly.

#### Potential Energy
**Gravitational P.E.** near Earth's surface: `U_g = m g h`, where h is height above a chosen reference. **Elastic P.E.** in a spring obeying Hooke's law: `U_s = ½ k x²`, where k is the spring constant (N m⁻¹) and x is extension/compression. Geometrically, this equals the triangular area under the straight-line F–x graph between 0 and x.

#### Conservation of Mechanical Energy
For a system with only **conservative forces** acting (gravity, ideal springs, electrostatic), the total **mechanical energy** `E = K + U` is constant. If friction, air drag, or any non-conservative force does work, mechanical energy decreases by exactly that amount — the lost energy becomes heat or sound.

#### Power
Average power `P = W / t`. Instantaneous power for a force acting on a moving body: `P = F v cosθ`. The SI unit **watt** equals 1 J s⁻¹; commercial electricity is billed in **kilowatt-hours** (1 kWh = 3.6 × 10⁶ J).

#### Efficiency
Real machines and engines always waste energy. **Efficiency** `η = (useful output energy / input energy) × 100%`, always less than 100%.

#### Common MDCAT Question Patterns
- Numerical: a 4 kg ball thrown upward at 20 m s⁻¹ — find max height using `½ m v² = m g h`.
- Conceptual: comparing work done by gravity on two paths between the same heights.
- Graph-based: reading spring constant from a force–extension slope.
- Conceptual: which form of energy converts into which (chemical → kinetic → electrical).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Conservative vs Non-Conservative Forces
A **conservative force** does work that depends only on initial and final positions, not on the path (gravity, ideal spring force, Coulomb). A **non-conservative force** (friction, air resistance, applied push) dissipates mechanical energy as heat; work done by it is path-dependent. The **mechanical-energy equation** with friction becomes:
`K_i + U_i = K_f + U_f + W_friction`.

#### Variable Forces and the Area Interpretation
For a force that varies with position (such as a spring force `F = −k x`), work is the **area under the F-versus-x curve**. For a spring stretched from 0 to x, the graph is a triangle with base x and height kx, giving `W = ½ k x²` — identical to the stored elastic P.E. This integral definition, `W = ∫ F · dx`, extends the scalar-product idea to non-constant forces.

#### Power in Human Physiology and Machines
A 70 kg person climbing 3 m in 6 s does `W = m g h = 2058 J`, so `P ≈ 343 W`. Sustained human output is closer to 75–100 W; the rest is biological inefficiency, dissipated as heat. Car engines quote power in horsepower (1 hp ≈ 746 W). A vehicle requiring 800 N of tractive force at 30 m s⁻¹ needs `P = 24 kW ≈ 32 hp` to maintain that speed on a level road.

#### Worked Numeric Example
A 2 kg block slides down a frictionless 5 m incline from rest, then compresses a spring (k = 800 N m⁻¹) at the base. Find the maximum spring compression x.
Energy conservation: `m g h = ½ k x²` (since incline height = 5 m, and final K = 0 at max compression).
`2 × 9.8 × 5 = ½ × 800 × x²` → `98 = 400 x²` → `x² = 0.245` → `x ≈ 0.495 m`.

#### Typical MDCAT Traps
1. Including or omitting g — P.E. without g is meaningless.
2. Confusing `½ m v²` with `½ m v` (linear momentum, not energy).
3. Assuming a constant force gives constant power — power scales with v.
4. Computing efficiency as a decimal instead of a percentage.
5. Believing mechanical energy is conserved whenever "energy is conserved" — global energy is conserved by the first law of thermodynamics; *mechanical* energy is only conserved when non-conservative work is zero.

#### Practice Prompts
1. A 1500 kg car travelling at 20 m s⁻¹ brakes uniformly to 10 m s⁻¹. Using the work–energy theorem, find the braking force if it stops in 25 m.
2. An electric motor rated 2 kW lifts a 100 kg load through 10 m. If the motor takes 7 s, calculate its efficiency.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
