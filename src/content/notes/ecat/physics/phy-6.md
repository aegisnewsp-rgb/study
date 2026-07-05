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
lastUpdated: "2026-07-05"
diagramPrompt: "Clean educational diagram showing Fluid Statics and Dynamics with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Fluid Statics and Dynamics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Fluid statics** describes fluids at rest; the key relation is the **hydrostatic pressure** equation **P = ρ g h**, where ρ is fluid density (kg/m³), g is gravitational acceleration (≈9.81 m/s²), and h is depth below the surface (m). A submerged body experiences an upward **buoyant force F = ρ g V**, where V is the displaced volume (Archimedes' principle).

**Fluid dynamics** describes fluids in motion under three governing rules:

- **Continuity (mass conservation):** A₁ v₁ = A₂ v₂
- **Flow rate:** Q = A v
- **Bernoulli (energy conservation along a streamline):** P₁ + ½ ρ v₁² + ρ g h₁ = P₂ + ½ ρ v₂² + ρ g h₂

#### High-yield ECAT pointers:

1. Distinguish **absolute pressure** (P_abs = P_gauge + P_atm) from gauge pressure.
2. In a Venturi tube, the narrower section has higher speed and *lower* static pressure.
3. Bernoulli's equation only applies to **steady, incompressible, non-viscous (inviscid) flow** along a single streamline.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Hydrostatic Pressure and Pascal's Principle

In a static fluid, pressure increases linearly with depth because each layer must support the weight of the fluid column above it: **P(h) = P₀ + ρ g h**, where P₀ is the pressure at the reference surface (often atmospheric, ≈101.3 kPa). Because pressure at a given depth acts equally in all directions, a force applied to an enclosed incompressible fluid transmits **undiminished** throughout the fluid — this is **Pascal's principle**, the operating basis of hydraulic lifts and brakes. A small force F₁ on piston area A₁ produces F₂ = (A₂/A₁) F₁ at the output piston.

#### Buoyancy (Archimedes' Principle)

Any body immersed in a fluid experiences an upward **buoyant force** equal to the weight of the fluid displaced: **F_b = ρ_fluid · g · V_displaced**. The net force determines whether the body floats (F_b > mg), is neutrally buoyant (F_b = mg), or sinks (F_b < mg). An object floats when its average density is less than the fluid's density; this is why steel ships float despite steel being denser than water.

#### Continuity Equation

For a steady flow of an **incompressible** fluid, the mass entering a pipe per second must equal the mass leaving. With constant density, the **continuity equation** reduces to **A₁ v₁ = A₂ v₂ = Q**, where Q is the volumetric flow rate (m³/s). Doubling the cross-section halves the flow speed.

#### Bernoulli's Equation

Along a streamline for steady, incompressible, inviscid flow, mechanical-energy density is conserved:

#### P + ½ ρ v² + ρ g h = constant.

This combines pressure energy (P), kinetic energy density (½ ρ v²), and gravitational potential energy density (ρ g h). The **Venturi effect** follows directly: when cross-section narrows, v rises, so P must drop to keep the sum constant — used in carburettors, atomisers, and air-flow sensors.

| Quantity | Symbol | Typical Unit |
|---|---|---|
| Pressure | P | Pa (N/m²) |
| Density | ρ | kg/m³ |
| Flow speed | v | m/s |
| Depth/height | h | m |
| Flow rate | Q | m³/s |

#### Exam Pattern in ECAT

Expect **3–5 short conceptual or computational questions** (≈3% weight). Typical formats: (a) compute pressure at a given depth given density; (b) apply the continuity equation to a pipe with two cross-sections; (c) use Bernoulli to find speed or pressure difference in a Venturi setup; (d) verify floating condition for a body of given mass and volume.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Limits of the Equations

Bernoulli's equation **fails** for viscous flow, for turbulent flow (where energy dissipates into heat), and across shocks or sudden expansions where streamlines break. It also assumes a single fluid of constant ρ — across an interface (e.g., water–air), apply it on each side separately. For **real** pipe flow, the **Hagen–Poiseuille law** replaces Bernoulli's idealisation: ΔP = (8 μ L Q)/(π r⁴), where μ is dynamic viscosity (Pa·s) — pressure drop scales with the **fourth power** of pipe radius, explaining why arterial constrictions cause large pressure changes.

#### Surface Tension and Capillarity

At fluid interfaces, **surface tension** γ (N/m) arises from cohesive forces. Capillary rise in a tube of radius r is **h = 2 γ cos θ / (ρ g r)**, where θ is the contact angle. Water (θ ≈ 0°) rises in glass; mercury (θ ≈ 140°) is depressed. ECAT rarely tests this numerically but may ask the qualitative direction.

#### Worked Micro-Example

Water (ρ = 1000 kg/m³) flows through a horizontal pipe that narrows from A₁ = 0.04 m² to A₂ = 0.01 m². The pressure in the wider section is 150 kPa. Find the pressure in the narrower section when v₁ = 2 m/s.

1. Continuity: v₂ = (A₁/A₂) v₁ = (0.04/0.01)(2) = **8 m/s**.
2. Bernoulli (horizontal, h₁ = h₂):

   P₂ = P₁ + ½ ρ (v₁² − v₂²) = 150 000 + ½ (1000)(4 − 64) = 150 000 − 30 000 = **120 kPa**.

The narrower section shows lower static pressure despite higher speed — the classic Venturi signature.

#### Common Mistakes ECAT Exploits

- Treating gauge and absolute pressures interchangeably in tank/pipe problems — always read the stem for which one P = ρ g h gives.
- Assuming Bernoulli applies in viscous pipes (it does not; use Poiseuille if asked).
- Using A v = constant where the fluid is compressible (e.g., gas above Mach 0.3) — continuity in **mass** form A ρ v = constant is required.
- Forgetting that **buoyancy depends on displaced fluid**, not on the body's own density alone — a hollow object's average density matters.

#### Exam Strategy for 3% Weight Topics

ECAT questions on fluids are short and formula-driven. Memorise the four governing equations and the conditions under which each holds. In MCQs, the discriminator is usually a sign error or a unit slip (Pa vs kPa). Allocate ~45 seconds per question on fluid topics.

#### Practice Prompts

1. A 2 cm cube of aluminium (ρ = 2700 kg/m³) is fully submerged in water. Find the buoyant force and the apparent weight.
2. A pipe of diameter 10 cm carries water at 0.5 m/s and branches into four identical smaller pipes. Assuming incompressible steady flow, find the speed in each branch.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
