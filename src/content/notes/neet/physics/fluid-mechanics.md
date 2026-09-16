---
exam: neet
examName: NEET UG
subject: physics
subjectName: Physics
topic: fluid-mechanics
topicName: Fluid Mechanics
weight: 3
country: india
generated: 2026-04-23
lastUpdated: "2026-09-16"
---

# Fluid Mechanics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Fluid Mechanics** studies liquids and gases at rest (fluid statics) and in motion (fluid dynamics). NEET UG typically asks 1–2 questions from this unit, usually on **Archimedes' Principle**, **Bernoulli's Theorem**, **Stokes' Law**, and **capillary rise**.

- **Hydrostatic pressure:** $P = \rho g h$, where $\rho$ = fluid density (kg/m³), $g$ = 9.8 m/s², $h$ = depth (m); SI unit of $P$ = Pa (ML⁻¹T⁻²).
- **Buoyant force:** $F_b = \rho_{fluid} \, V_{immersed} \, g$ — equals weight of displaced fluid, not the object.
- **Continuity equation:** $A_1 v_1 = A_2 v_2$ (mass conservation for incompressible flow).
- **Bernoulli's equation:** $P + \tfrac{1}{2}\rho v^2 + \rho g h = \text{constant}$ (energy/unit volume conserved).
- **Stokes' law:** $F = 6 \pi \eta r v$, where $\eta$ = viscosity (Pa·s), $r$ = sphere radius (m), $v$ = velocity (m/s).

> 💡 **High-Yield Memory Hook:** **"P ρ v"** — Bernoulli adds three pressures: **P**ressure + **ρ**v²/2 (dynamic) + **ρ**gh (hydrostatic). Mnemonic: *"Pressure Pushes, Velocity Vanishes, Height Holds."*

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Concepts and Pressure Definitions
A **fluid** is any substance that flows and takes the shape of its container (liquids + gases). NEET distinguishes three pressure readings you must keep straight:

- **Absolute pressure** ($P_{abs}$): total pressure including atmosphere.
- **Gauge pressure** ($P_{gauge}$): reading above atmospheric — what a tyre gauge shows.
- **Atmospheric pressure** ($P_{atm} \approx 1.013 \times 10^5$ Pa at sea level).

The relation $P_{abs} = P_{gauge} + P_{atm}$ is tested almost every alternate year.

#### Pascal's Law and Hydraulic Machines
Pressure applied to an enclosed incompressible fluid is transmitted undiminished in all directions. This yields the hydraulic lift principle:

$$\frac{F_1}{A_1} = \frac{F_2}{A_2}$$

A small force on a small piston produces a large force on a large piston — the basis of hydraulic brakes and jacks.

#### Buoyancy and Archimedes' Principle
The upward buoyant force on a submerged object equals the weight of fluid displaced:

$$F_b = \rho_{fluid} \, V_{immersed} \, g$$

A body floats when $F_b \geq$ weight of the body; it sinks when $F_b <$ weight. For a floating object, the **fraction submerged** equals $\rho_{object}/\rho_{fluid}$.

#### Flow Types and the Continuity Equation
**Streamline flow** is steady, layered, and ordered (Reynolds number $Re < 1000$ for pipes). **Turbulent flow** has chaotic eddies ($Re > 2000$). For incompressible, steady streamline flow:

$$A_1 v_1 = A_2 v_2 \quad \text{(continuity)}$$

Narrower cross-section ⇒ higher velocity. This is the physical basis of the Venturi effect and dynamic lift.

#### Bernoulli's Theorem
Energy per unit volume is conserved along a streamline of an ideal (non-viscous, incompressible) fluid:

$$P + \tfrac{1}{2}\rho v^2 + \rho g h = \text{constant}$$

Higher velocity ⇒ lower pressure. This explains aerofoil lift, Bunsen-burner atomisation, and roof blow-off in storms.

#### Viscosity and Stokes' Law
Viscosity $\eta$ (Pa·s) is internal friction between fluid layers. A sphere falling under gravity reaches **terminal velocity** when viscous drag balances gravity minus buoyancy:

$$v_t = \frac{2 r^2 (\rho_{sphere} - \rho_{fluid}) g}{9 \eta}$$

Stokes' drag $F = 6\pi\eta r v$ applies only when $Re \ll 1$ (laminar regime).

#### Comparison Matrix — Easily Confused Concepts

| Concept | Definition / Equation | Common Trap |
|---|---|---|
| Streamline vs Turbulent flow | Steady, layered (Re < 1000) vs chaotic eddies (Re > 2000) | Treating $A_1 v_1 = A_2 v_2$ as valid for turbulent flow |
| Gauge vs Absolute pressure | $P_{abs} = P_{gauge} + P_{atm}$ | Reporting gauge reading as the actual pressure at depth |
| Buoyancy vs Weight | $F_b = \rho_f V g$ vs $W = mg$ | Equating buoyant force to weight of the object |
| $\eta$ vs $\nu$ (kinematic viscosity) | $\eta$: Pa·s; $\nu = \eta/\rho$: m²/s | Interchanging dynamic and kinematic viscosity in terminal-velocity problems |
| Surface tension vs Capillarity | $T = F/l$ (N/m) vs $h = 2T\cos\theta/(\rho g r)$ | Forgetting $\cos\theta$ factor for non-wetting liquids (mercury) |

#### 🎯 Exam-Level Worked Problem
**Question:** A sphere of radius $2 \times 10^{-3}$ m and density $8.0 \times 10^3$ kg/m³ falls through a liquid of density $1.2 \times 10^3$ kg/m³ and viscosity $0.8$ Pa·s. Find its terminal velocity. ($g = 9.8$ m/s²)

#### Solution:
At terminal velocity, weight = buoyancy + viscous drag.

1. Weight: $W = \tfrac{4}{3}\pi r^3 \rho_s g = \tfrac{4}{3}\pi (2\times10^{-3})^3 (8000)(9.8)$
2. Buoyancy: $F_b = \tfrac{4}{3}\pi r^3 \rho_f g$
3. Viscous drag: $F_v = 6\pi\eta r v_t$

Setting $W = F_b + F_v$ and solving:

$$v_t = \frac{2 r^2 (\rho_s - \rho_f) g}{9 \eta} = \frac{2 (2\times10^{-3})^2 (8000 - 1200)(9.8)}{9 \times 0.8}$$

$$v_t = \frac{2 \times 4\times10^{-6} \times 6800 \times 9.8}{7.2} = \frac{5.33\times10^{-1}}{7.2} \approx 0.074 \text{ m/s}$$

**Answer:** $v_t \approx 7.4 \times 10^{-2}$ m/s.

> ⚠️ **Examiner Trap:** Students often use $\rho_s$ alone in the numerator instead of $(\rho_s - \rho_f)$. The buoyant-force subtraction is mandatory — forgetting it inflates the answer by a factor of $8.0/6.8 \approx 1.18$.

#### Surface Tension and Capillarity
**Surface tension** $T = F/l$ (N/m) arises from cohesive forces; it minimises surface area. **Capillary rise** is governed by Jurin's Law:

$$h = \frac{2 T \cos\theta}{\rho g r}$$

where $\theta$ is the contact angle. Water rises ($\theta < 90°$); mercury depresses ($\theta > 90°$, $\cos\theta < 0$).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Mathematical Limits and Boundary Conditions
Bernoulli's equation assumes **steady, incompressible, non-viscous flow along a single streamline**. If the fluid is real, an energy-loss term $h_L$ must be added:

$$P_1 + \tfrac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \tfrac{1}{2}\rho v_2^2 + \rho g h_2 + \rho g h_L$$

The continuity equation fails when fluid density changes (compressible flow in gases above Mach ≈ 0.3) — the correct form becomes $\rho_1 A_1 v_1 = \rho_2 A_2 v_2$.

Stokes' law itself has a ceiling: drag transitions from linear ($F \propto v$) to quadratic ($F \propto v^2$) once $Re \gtrsim 1$. NEET numericals stay safely inside the linear regime.

#### Edge Cases and Advanced Traps

1. **Atmospheric pressure variation** — $P = \rho g h$ assumes uniform $\rho$; the real atmosphere follows the barometric formula $P = P_0 e^{-Mgh/RT}$. Mixing these up is a classic distractor.
2. **Apparent weight in a lift** — buoyant force is unchanged, but effective $g$ becomes $g \pm a$, altering weight/buoyancy balance in accelerating fluids.
3. **Partial immersion** — for a floating object, only the immersed volume $V_{imm}$ matters; total volume $V$ is irrelevant.
4. **Capillary depression in mercury** — sign of $\cos\theta$ flips; height $h$ becomes negative (depression, not rise).
5. **Velocity profile in viscous flow** — Poiseuille's law $Q = \frac{\pi r^4 \Delta P}{8 \eta L}$ shows $Q \propto r^4$; halving the radius drops flow to $1/16$ — frequently tested in biology-context NEET questions (blood flow).

#### Connections to Adjacent Topics
- **Human physiology:** blood flow obeys Poiseuille's law; viscosity changes with haematocrit.
- **Aviation:** dynamic lift on aerofoil = $L = \tfrac{1}{2}\rho v^2 A C_L$ derived from Bernoulli.
- **Hydraulic brakes and lifts:** direct Pascal's-law applications (NEET conceptual MCQs).
- **Capillarity in plants:** water transport in xylem uses the same Jurin's-law physics.

#### Advanced Practice Prompts
1. A U-tube with mercury and water of column lengths 20 cm and 40 cm respectively — find the mercury-level difference at equilibrium. (Hint: balance pressures at the mercury interface.)
2. A venturimeter with cross-sections 10 cm² and 5 cm² carries water at 0.5 m/s through the wider section — calculate the pressure drop using Bernoulli. (Answer: $\Delta P \approx 938$ Pa.)

#### Final Strategy for NEET UG
- Memorise the four master formulas: $P = \rho g h$, $F_b = \rho_f V g$, $A_1 v_1 = A_2 v_2$, and $P + \tfrac{1}{2}\rho v^2 + \rho g h = \text{const}$.
- Practise unit conversion: 1 atm = 1.013 × 10⁵ Pa = 760 mmHg = 1.013 bar.
- Capillary-rise and terminal-velocity numericals together form ~60% of fluid-mechanics questions in recent NEET papers.

---

## Continue your study

- **[View this topic in your NEET UG roadmap](/roadmap/?exam=neet&duration=1mo)** — see where "Fluid Mechanics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NEET UG exam overview](/exams/neet/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/neet/physics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
