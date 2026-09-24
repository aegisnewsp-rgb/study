---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: physics
subjectName: Physics
topic: phy-6
topicName: Fluid Statics and Dynamics
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.042406"
lastUpdated: "2026-09-24"
diagramPrompt: "Clean educational diagram showing Fluid Statics and Dynamics with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Fluid Statics and Dynamics

> 💡 **Quick-scan anchor:** Fluid mechanics splits into fluids at rest (statics) and fluids in motion (dynamics). ECAT rewards the four equations you can almost always be sure one of them will appear.

### 🟢 Lite — Quick Review (1h–1d)
> The four equations below solve roughly 80% of the numerical MCQs UET/ETEA has thrown at candidates in the last decade.

**Fluid Statics and Dynamics** in ECAT Physics reduces to four working formulas and the distinction between pressure in a still column versus pressure plus kinetic energy in a moving stream. Memorise these and you cover most of the 1–2 MCQs allotted to this chapter.

- **Pressure at depth (hydrostatic):** $P = \rho g h$ → Pa, with $\rho$ = fluid density (kg/m³), $g = 9.8$ m/s², $h$ = depth below the free surface (m).
- **Buoyancy (Archimedes):** $F_b = \rho_{fluid} \, V_{displaced} \, g$ → N. Object density decides float vs. sink; fluid density decides the upward force.
- **Continuity:** $A_1 v_1 = A_2 v_2$ → m³/s. Pipe narrows → speed rises in the same ratio.
- **Bernoulli:** $P + \tfrac{1}{2}\rho v^2 + \rho g h = \text{constant}$ → each term in Pa. Faster flow ⇒ lower static pressure (Venturi).

> 💡 **High-Yield Memory Hook — Memory Hook:** *"PRBV"* — **P**ressure at depth, **R**ise (Archimedes' upthrust), **B**ernoulli = constant along streamline, **V**elocity rises where Area shrinks (continuity). One letter, four formulas.

### 🟡 Standard — Regular Study (2d–2mo)
> Use this tier to lock the mechanism behind each formula, not just the letters.

#### Hydrostatic Pressure and Pascal's Principle
Pressure in a static fluid depends only on depth: $P(h) = P_0 + \rho g h$, where $P_0$ is the pressure at the free surface (often atmospheric, $1.013 \times 10^5$ Pa). Pressure at a point is a scalar — it pushes equally in every direction, which is why a submerged body's surface feels a normal force from all sides. Pascal's law exploits this: applying a force $F_1$ on a piston of area $A_1$ transmits pressure undiminished to a larger piston $A_2$, giving mechanical advantage $F_2 = F_1 (A_2/A_1)$. The hydraulic lift and hydraulic brake both work on this principle, and ECAT regularly asks which quantity is conserved across the two pistons (pressure, not force).

#### Archimedes' Principle and Floating
A submerged volume $V$ displaces fluid weighing $\rho_f V g$. That displaced weight is the buoyant force. The apparent weight of the submerged object becomes $W_{apparent} = mg - \rho_f V g$. A floating body sits where buoyant force equals its full weight, so it displaces exactly its own weight of fluid — meaning only the immersed fraction matters, not the whole volume.

#### Continuity and Bernoulli Together
For a steady, incompressible, non-viscous flow the mass and energy budgets reduce to two linked equations. Continuity follows from $\rho A v = \text{const}$ (density constant ⇒ $A v$ constant). Bernoulli follows from integrating the work–energy balance along a streamline. Together they answer almost every "pipe changes cross-section, what's the new pressure?" problem.

| Concept | What is conserved | Key equation | SI units | Common MCQ form |
|---|---|---|---|---|
| Hydrostatic pressure | Force per area with depth | $P = \rho g h$ | Pa | Pressure difference between two depths |
| Pascal's principle | Pressure transmitted | $F_2 = F_1 (A_2/A_1)$ | N | Hydraulic lift advantage |
| Archimedes | Weight of displaced fluid | $F_b = \rho_f V g$ | N | Apparent weight, float/sink |
| Continuity | Mass flow rate | $A_1 v_1 = A_2 v_2$ | m³/s | Velocity in constriction |
| Bernoulli | Energy per unit volume | $P + \tfrac{1}{2}\rho v^2 + \rho g h = \text{const}$ | Pa | Pressure drop where pipe narrows |
| Poiseuille | Volume flow rate in pipe | $Q = \pi r^4 \Delta P / (8\eta L)$ | m³/s | Flow rate vs. radius |

#### Worked numerical — Torricelli's efflux speed
A tank of water has a small hole 4.9 m below its free surface. Find the efflux speed, taking $g = 9.8$ m/s².

Apply Bernoulli between the free surface (point 1: $P_1 = P_{atm}$, $v_1 \approx 0$, height $h_1 = h$) and the hole (point 2: $P_2 = P_{atm}$, height $h_2 = 0$). Atmospheric pressure cancels from both sides:
$$\rho g h_1 = \tfrac{1}{2}\rho v_2^2 + \rho g h_2 \;\;\Rightarrow\;\; v_2 = \sqrt{2g(h_1 - h_2)} = \sqrt{2 \times 9.8 \times 4.9} = \sqrt{96.04} \approx 9.8 \text{ m/s}.$$

> ⚠️ **Examiner Trap:** Students frequently write $v = \sqrt{gh}$ (forgetting the factor of 2) or use $h = 4.9$ without squaring the depth. Torricelli's speed is $\sqrt{2gh}$, not $\sqrt{gh}$.

### 🔴 Extended — Deep Study (3mo+)
> Edge cases, viscous flow, and the Reynolds boundary.

#### Viscosity, Stokes' Drag, and the Reynolds Number
Real fluids resist shear. For a Newtonian fluid, shear stress $\tau = \eta \, (dv/dy)$, where $\eta$ is the dynamic viscosity in Pa·s. This produces two formulas ECAT tests directly:

- **Poiseuille's law** for laminar pipe flow: $Q = \pi r^4 \Delta P / (8\eta L)$ — note the $r^4$ dependence; halving the radius drops flow rate by a factor of 16.
- **Stokes' drag** on a sphere at low Reynolds number: $F_d = 6\pi \eta r v$. Linear in velocity, distinct from the quadratic $v^2$ drag of turbulent flow.

The Reynolds number $Re = \rho v D / \eta$ decides which regime applies: $Re < 2000$ laminar, $Re > 4000$ turbulent. Blood flow in capillaries and parachute-style problems sit at opposite ends of this scale.

#### Edge Cases and Boundary Conditions
- **Gauge vs. absolute pressure.** A tyre gauge reads gauge pressure ($P_{abs} - P_{atm}$); a barometer reads absolute. MCQs sometimes flip the sign.
- **Surface tension and capillarity.** Cohesive forces inside a liquid pull molecules inward; adhesive forces pull them toward a wetted wall. Water climbs glass (adhesion wins); mercury depresses in glass (cohesion wins). Capillary rise $h = 2\gamma \cos\theta / (\rho g r)$.
- **Compressibility breakdown.** Continuity $A_1 v_1 = A_2 v_2$ assumes constant $\rho$. For gases above Mach ~0.3, density changes invalidate it; ECAT problems stay safely subsonic.
- **Bernoulli's hidden limits.** No viscous losses, no pumps or turbines between the two points, steady flow, single streamline.

#### Advanced Practice Prompts
1. A U-tube contains mercury and water. The mercury column differs by 2 cm between the two arms. Derive the height of the water column that balances it. (Hint: balance pressures at the mercury–water interface, use $\rho_{Hg} = 13{,}600$ kg/m³, $\rho_{water} = 1000$ kg/m³.)
2. A horizontal pipe of radius 2 cm carries oil ($\eta = 0.2$ Pa·s) at $\Delta P = 5 \times 10^4$ Pa across 10 m. Compute $Q$ and confirm whether flow stays laminar assuming $\rho_{oil} = 900$ kg/m³ and mean speed found from $Q$.

#### Most-Tested Traps (in order of frequency in past papers)

1. Mixing gauge and absolute pressure in the same equation.
2. Using object density instead of fluid density inside Archimedes' formula.
3. Dropping the $\tfrac{1}{2}\rho v^2$ term in Bernoulli because "the pipe is horizontal."
4. Treating Poiseuille's $r^4$ dependence as $r^2$.
5. Applying continuity to a gas without checking compressibility.
6. Confusing Stokes ($F \propto v$) with Newton's turbulent drag ($F \propto v^2$).

## Continue your study
- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Fluid Statics and Dynamics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/ecat/physics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
