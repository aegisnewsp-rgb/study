---



exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-6
topicName: Fluid Dynamics
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.083024"
lastUpdated: "2026-09-06"
diagramPrompt: "Clean educational diagram showing Fluid Dynamics with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Fluid Dynamics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your MDCAT Physics paper.

Fluid dynamics studies how liquids and gases move and the forces acting on them. The MDCAT asks roughly one MCQ from this 3% weightage topic, almost always on the **continuity equation** or **Bernoulli's principle**.

- **Volume flow rate** $Q = A \cdot v$, where $A$ is cross-sectional area in m² and $v$ is fluid speed in m/s, giving $Q$ in m³/s.
- **Continuity equation** for an incompressible fluid: $A_1 v_1 = A_2 v_2$ (product in m³/s).
- **Bernoulli's equation**: $P + \tfrac{1}{2}\rho v^2 + \rho g h = \text{constant}$, where $P$ is pressure in Pa, $\rho$ is density in kg/m³, and $h$ is height in m.
- In a horizontal pipe, higher speed means **lower** pressure — this is the Venturi effect.
- Dynamic viscosity $\eta$ has SI units of **Pa·s**, not poise.

> Exam tip: Convert everything to SI before plugging numbers. Mixing cm/s with m³/s is the fastest way to lose one mark.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Types of flow
**Streamline (laminar) flow** has parallel, non-crossing streamlines and occurs at low Reynolds numbers ($Re \lessapprox 2300$ for pipes). **Turbulent flow** has chaotic eddies and dominates above $Re \gtrapprox 4000$. The Reynolds number $Re = \rho v L / \eta$ is dimensionless and uses a characteristic length $L$ (pipe diameter, in m).

#### Continuity and flow rate
For an incompressible fluid, mass entering a pipe per second equals mass leaving per second. With constant $\rho$, this reduces to $A_1 v_1 = A_2 v_2$. A nozzle (smaller $A$) therefore produces a faster jet — the principle behind perfume sprayers and Bunsen burners.

#### Bernoulli's principle
Bernoulli's equation combines a fluid's pressure energy, kinetic energy, and gravitational potential energy along a streamline. For a horizontal pipe the $\rho g h$ term cancels, and the equation simplifies to $P_1 + \tfrac{1}{2}\rho v_1^2 = P_2 + \tfrac{1}{2}\rho v_2^2$. Combine this with continuity to solve Venturi-meter problems.

| Concept | Governing equation | SI units |
| --- | --- | --- |
| Volume flow rate | $Q = A v$ | m³/s |
| Continuity | $A_1 v_1 = A_2 v_2$ | m³/s |
| Bernoulli (full) | $P + \tfrac{1}{2}\rho v^2 + \rho g h = \text{const}$ | Pa |
| Bernoulli (horizontal) | $P_1 + \tfrac{1}{2}\rho v_1^2 = P_2 + \tfrac{1}{2}\rho v_2^2$ | Pa |
| Viscosity (Newton) | $\tau = \eta \, dv/dy$ | Pa·s |

#### Viscosity and Poiseuille's law
Shear stress $\tau$ in a real fluid is proportional to the velocity gradient $dv/dy$, with $\eta$ as the constant of proportionality. For laminar flow in a cylindrical tube of radius $r$ and length $L$, Poiseuille's law gives $Q \propto \Delta P \, r^4 / (\eta L)$ — halving the radius drops flow by a factor of 16.

- Always convert $v$ to m/s and $\rho$ to kg/m³ before substituting.
- Bernoulli applies only to **ideal** (non-viscous, incompressible, steady) flow.
- The Venturi effect runs opposite to intuition: faster fluid ⇒ lower pressure.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked numerical
A horizontal pipe narrows from $A_1 = 0.04 \text{ m}^2$ to $A_2 = 0.01 \text{ m}^2$. Water ($\rho = 1000 \text{ kg/m}^3$) enters at $v_1 = 1 \text{ m/s}$ and $P_1 = 1.5 \times 10^5 \text{ Pa}$.

Step 1 — Continuity: $v_2 = A_1 v_1 / A_2 = (0.04 \times 1) / 0.01 = 4 \text{ m/s}$.
Step 2 — Horizontal Bernoulli: $P_2 = P_1 + \tfrac{1}{2}\rho(v_1^2 - v_2^2) = 1.5\times10^5 + 500 \times (1 - 16) = 1.42 \times 10^5 \text{ Pa}$.
Pressure **drops** by 8 kPa as the section narrows, matching the Venturi prediction.

#### Edge cases and links
- **Compressible gases:** continuity needs the full form $\rho_1 A_1 v_1 = \rho_2 A_2 v_2$; the simple $A v$ version breaks down near sonic speeds.
- **Dynamic vs kinematic viscosity:** $\nu = \eta/\rho$ has units m²/s and appears in the Reynolds denominator when written as $Re = vL/\nu$.
- **Connection to circulatory physiology:** the $r^4$ dependence of Poiseuille flow explains why even small arterial constrictions dramatically raise blood pressure — a frequent MCQ link in MDCAT Biology–Physics crossover questions.

| Common mistake | Correction |
| --- | --- |
| Using $A_1 v_1 = A_2 v_2$ for a compressible gas | Use $\rho_1 A_1 v_1 = \rho_2 A_2 v_2$ instead |
| Writing "higher $v$ → higher $P$" | In horizontal flow, higher $v$ means lower $P$ |
| Dropping $\rho g h$ in non-horizontal pipes | Keep the term whenever $h_1 \ne h_2$ |
| Treating turbulent flow with Bernoulli | Bernoulli strictly requires streamline flow |
| Mixing cgs and SI units | Convert $v$ to m/s and $\rho$ to kg/m³ first |

#### Practice prompts
1. A pipe of cross-section 20 cm² carries oil at 3 m/s into a 5 cm² constriction. Find the exit speed using continuity, then the pressure drop using horizontal Bernoulli (take $\rho_{\text{oil}} = 860 \text{ kg/m}^3$).
2. Explain in three lines why a chimney draws better on a windy day, identifying the Bernoulli or Venturi mechanism involved.

> Exam strategy: With only ~1 MCQ from this 3% topic, spend 15 minutes max — nail the horizontal-pipe Bernoulli plus the $r^4$ Poiseuille fact and move on to higher-weight chapters.

## Continue your study

- **[View this topic in your MDCAT roadmap](/roadmap/?exam=mdcat&duration=1mo)** — see where "Fluid Dynamics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=mdcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[MDCAT exam overview](/exams/mdcat/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/mdcat/physics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
