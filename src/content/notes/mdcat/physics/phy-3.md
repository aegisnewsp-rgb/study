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
lastUpdated: "2026-09-16"
diagramPrompt: "Clean educational diagram showing Dynamics with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"


---

# Dynamics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Dynamics studies **motion and its causes** — the forces that start, stop, or change how bodies move. The MDCAT treats it as the bridge between kinematics (describing motion) and energy/work (consequences of motion).

| Symbol | Quantity | SI unit | Formula it appears in |
|---|---|---|---|
| F | net force | N (kg·m/s²) | F = ma |
| m | mass | kg | F = ma, p = mv |
| a | acceleration | m/s² | F = ma |
| p | momentum | kg·m/s | p = mv |
| J | impulse | N·s | J = FΔt = Δp |
| τ | torque | N·m | τ = rF sinθ |

The five equations every MDCAT candidate must recognise: **F = ma, w = mg, p = mv, J = FΔt = Δp, μ = F/N**.

> 💡 **High-Yield Memory Hook:** **"NEMA"** — **N**et **E**xternal force equals **M**ass times **A**cceleration. Whenever the net force is zero, acceleration is zero (Newton's first law). One mental trigger for both laws 1 and 2.

Three Newton-law anchors you cannot afford to mix up: action–reaction pairs act on **two different bodies** (so they never cancel on one free-body diagram); weight = mg is a force in newtons, not mass in kg; momentum of an **isolated** system is conserved.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Newton's Three Laws and Their MDCAT Traps

**Law 1 (Inertia):** A body keeps its state of rest or uniform straight-line motion unless a **net external** force acts. The keyword is *net* — balanced forces give zero acceleration, not "no force".

**Law 2 (F = ma):** The acceleration vector points in the direction of the net force, with magnitude inversely proportional to mass. The **newton** is defined as the force that gives a 1 kg mass an acceleration of 1 m/s².

**Law 3 (Action–Reaction):** For every action, an equal, opposite, collinear reaction acts on a **different body**. A book on a table experiences weight (Earth on book) and normal (table on book); these are *not* the third-law pair of weight. The pair of weight is the gravitational pull of the book on Earth.

#### Force Catalogue Used in MDCAT Numericals

| Force | Origin | Direction | Key relation |
|---|---|---|---|
| Weight w | gravitational | vertical, downward | w = mg, g = 9.8 m/s² |
| Normal N | contact, surface | perpendicular to surface | N balances perpendicular component of applied force |
| Tension T | string/rope | along the string, pulling the body | same magnitude throughout a massless, frictionless pulley |
| Static friction f_s | contact | opposes *impending* motion | 0 ≤ f_s ≤ μ_s N |
| Kinetic friction f_k | contact | opposes *actual* motion | f_k = μ_k N, μ_k < μ_s |

#### Momentum, Impulse, and Collisions

Linear momentum **p = mv** (vector). Impulse **J = F_net·Δt = Δp** explains why a cricket player lowers his hands while catching — extending Δt reduces the average stopping force.

For an isolated two-body collision (no external horizontal force):
m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂

If the bodies stick together, replace the right side with (m₁ + m₂)v — this is a **perfectly inelastic** collision.

#### 🎯 Exam-Level Worked Problem

**Question:** A 1500 kg car travelling at 20 m/s strikes a stationary 1000 kg car and the two lock together. Find (a) their common velocity just after impact and (b) the impulse experienced by the lighter car.

#### Solution:
(a) Apply conservation of momentum of the isolated system:
m₁u₁ + m₂u₂ = (m₁ + m₂)v
(1500)(20) + (1000)(0) = (1500 + 1000)v
30 000 = 2500 v → **v = 12 m/s**

(b) Impulse on lighter car = change in its momentum:
J = m₂v − m₂u₂ = (1000)(12) − (1000)(0) = **12 000 N·s**

> ⚠️ **Examiner Trap:** Many students try to find the impulse using F·Δt without being given Δt, or attempt to subtract velocities between cars (relative velocity). Use Δp directly — it is always defined even when Δt is not provided. Also, remember momentum is a *vector*; if the question reverses directions, signs flip.

#### Equilibrium of a Rigid Body

A body is in equilibrium when both translational **and** rotational conditions hold:
ΣF = 0 (no linear acceleration)
Στ = 0 (no angular acceleration)

For a couple, the net force is zero but torque is non-zero — it produces pure rotation without translation.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Boundary Cases and Limits

- **Limiting static friction** is the maximum value f_s,max = μ_s N; only when applied tangential force exceeds this does the body start sliding and kinetic friction μ_k N take over. In MDCAT numericals, a body labelled "about to move" always implies f_s = μ_s N.
- **Pseudo forces** in non-inertial frames (accelerating lift, braking car) act opposite to the frame's acceleration. MDCAT occasionally tests the apparent weight change in a lift: apparent weight = m(g ± a).
- **Internal vs external forces**: in conservation-of-momentum problems, only **external** forces count. Tension inside a string or normal force between colliding cars are internal and cancel.
- **Variable mass systems** (rockets, falling chains) are outside MDCAT scope, but the principle — rate of change of momentum includes momentum carried by mass leaving/entering the system — is worth recognising if a passage asks about thrust.

#### Adjacent Topic Links

- Connects backward to **kinematics** (using a from v–t data, then applying F = ma).
- Connects forward to **work, energy, and power** (W = Fd cosθ; KE = ½mv²; by work–energy theorem W_net = ΔKE).
- Connects to **circular motion** (centripetal force = mv²/r = mrω²).
- Connects to **gravitation** (weight w = mg = GMm/r² near Earth's surface).

#### Common Mistakes in Extended Reasoning

1. Treating weight as constant on other planets — g varies, so w does too, even though m is unchanged.
2. Drawing action and reaction on the same free-body diagram; third-law pairs never cancel because they act on different bodies.
3. Using μ_k when the body is still in static equilibrium, which underestimates the maximum possible friction.
4. Forgetting that ΣF = 0 gives **vector** equilibrium — horizontal and vertical components must each vanish.

#### Advanced Practice Prompts

1. A 60 kg person stands in a lift accelerating upward at 2 m/s². Calculate the reaction force from the lift floor on the person, and explain what a bathroom scale inside the lift would read.
2. Two blocks of mass 4 kg and 6 kg connected by a string over a frictionless pulley are released from rest. Find the tension in the string and the acceleration of the system using Newton's second law applied to each block separately.

> 📌 **Formula Check:** Every formula in Dynamics uses SI base units (kg, m, s, N = kg·m/s²). Mixing CGS (dyne, g, cm) is a guaranteed mark loser in MDCAT numericals.

## Continue your study

- **[View this topic in your MDCAT roadmap](/roadmap/?exam=mdcat&duration=1mo)** — see where "Dynamics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=mdcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[MDCAT exam overview](/exams/mdcat/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/mdcat/physics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
