---



exam: jamb
examName: JAMB UTME
subject: physics
subjectName: Physics
topic: phy-20
topicName: Fluid Mechanics
weight: 3
country: nigeria
generated: "2026-03-24T08:32:07.720864"
diagramPrompt: "Clean educational diagram showing Fluid Mechanics with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





lastUpdated: "2026-09-17"
---

# Fluid Mechanics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before the JAMB UTME Physics paper.

Fluid mechanics studies how liquids and gases behave at rest (fluid statics) and in motion (fluid dynamics). JAMB tests roughly 2–4 questions on this section, centred on **Archimedes' principle**, **Pascal's principle**, the **continuity equation**, and **Bernoulli's equation**. Always use *g = 10 m/s²* unless a numerical value is specified, and convert all areas to m² before substituting.

| Symbol | Quantity | SI Unit | Formula |
|--------|----------|---------|---------|
| P | Pressure | Pa (N/m²) | P = F/A |
| ρ | Density | kg/m³ | ρ = m/V |
| F_B | Buoyant force | N | F_B = ρ_fluid · V_displaced · g |
| v | Flow speed | m/s | A₁v₁ = A₂v₂ |
| — | Energy line | Pa | P + ½ρv² + ρgh = constant |

> 💡 **High-Yield Memory Hook:** **"PAVV"** — **P**ressure, **A**rchimedes, **V**olume displaced, **V**elocity (continuity). Whenever a JAMB question mentions "floats", "hydraulic", "narrow pipe", or "Venturi", one of these four ideas solves it.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months before the exam.

#### Core Principles

**Pascal's principle** states that pressure applied to an enclosed incompressible fluid is transmitted undiminished to every part of the fluid and the containing walls. The hydraulic press uses this: a small force F₁ on piston area A₁ produces a larger force F₂ = (A₂/A₁)F₁ on piston area A₂, because pressure P = F₁/A₁ = F₂/A₂ is conserved.

**Archimedes' principle** states that a body fully or partially immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced: F_B = ρ_fluid · V_displaced · g. The apparent weight of the submerged object is W_apparent = W_real − F_B. A body floats when its average density is less than the fluid density; it sinks when greater.

#### Fluid Dynamics

For an incompressible fluid in **streamline** (laminar) flow, mass conservation gives the **continuity equation** A₁v₁ = A₂v₂, so fluid speeds up where the cross-section narrows. **Bernoulli's equation** then expresses energy conservation along a streamline:

P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂

where P is pressure (Pa), ρ is density (kg/m³), v is speed (m/s), g ≈ 10 m/s², and h is height (m). Each term has units of pressure (J/m³), so the sum is constant along a streamline for an ideal (non-viscous, incompressible) fluid.

#### Comparison Matrix

| Concept | When it applies | Key relation | JAMB-style trap |
|---------|-----------------|--------------|------------------|
| Pascal's principle | Static, enclosed incompressible fluid | P transmitted equally | Confusing force ratio with pressure ratio |
| Archimedes' principle | Body in a fluid (static or moving) | F_B = ρVg (of fluid, not body) | Using the object's volume instead of displaced volume |
| Continuity equation | Steady, incompressible flow | A₁v₁ = A₂v₂ | Forgetting that A and v are at the SAME instant |
| Bernoulli's equation | Ideal, streamline, incompressible flow | P + ½ρv² + ρgh = constant | Applying to viscous pipes with friction |
| Hydrostatic pressure | Static liquid column | P = ρgh | Treating pressure as horizontal-only |

#### 🎯 Exam-Level Worked Problem

**Question:** A hydraulic press has a small piston of area 5 cm² and a large piston of area 200 cm². A force of 80 N is applied to the small piston. Find the force exerted on the large piston. (g = 10 m/s²)

#### Solution:
Apply Pascal's principle — pressure is equal at both pistons.
P₁ = P₂ → F₁/A₁ = F₂/A₂

Convert areas to SI: A₁ = 5 × 10⁻⁴ m², A₂ = 200 × 10⁻⁴ m² = 0.02 m².

F₂ = F₁ × (A₂/A₁) = 80 × (0.02 / 5 × 10⁻⁴) = 80 × 40 = **3200 N** (3.2 kN).

Check units: N × (m²/m²) = N ✓. g is not required here because Pascal's principle involves pressure, not weight.

> ⚠️ **Examiner Trap:** Students often write F₂ = F₁ × A₂ without converting cm² to m², producing 16000 N (off by 5). Since the ratio A₂/A₁ = 200/5 = 40 is dimensionless, conversion cancels — but if any step uses P = F/A in mixed units, the answer slips by a factor of 10⁴.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Limits

- **Apparent weight in a lift:** When a body is weighed inside an accelerating lift, the effective g becomes g_eff = g ± a. The buoyant force still uses the true g, so apparent weight changes but F_B does not.
- **Partially submerged body:** A floating object displaces a volume equal to its weight divided by ρ_fluid · g. Only the submerged fraction matters; the dry portion contributes nothing to upthrust.
- **Viscosity correction:** For viscous flow in a horizontal pipe, the pressure drop ΔP = 32ηLv/D² (Poiseuille's law), where η is dynamic viscosity (Pa·s), L pipe length (m), D diameter (m). This energy loss makes Bernoulli's idealised equation only an approximation.
- **Surface tension and capillarity:** A liquid rises in a narrow tube to height h = 2γcosθ / (ρgr), where γ is surface tension (N/m), θ the contact angle, and r the tube radius. Mercury (θ > 90°) depresses instead of rising.
- **Torricelli's theorem:** Efflux speed from a tank with head h is v = √(2gh), a direct Bernoulli result when the top is open to atmosphere.

| Common Advanced Trap | Why it fails | Correct approach |
|----------------------|--------------|------------------|
| Using Bernoulli across a valve with a pump | Pump adds energy not in the equation | Add a pump-head term h_p on the high-pressure side |
| Adding atmospheric pressure twice | P already includes P_atm at open surfaces | Count P_atm only once per open end |
| Treating streamline flow as uniform | Uniform = constant velocity across section; streamline = no crossing layers | Use Bernoulli only when streamlines are also smooth |
| Floating in a denser fluid | Buoyancy from denser fluid is larger | Recompute V_displaced = m_object / ρ_fluid |

#### Exam Strategy for JAMB

Out of 40 Physics questions, expect 2–4 on this section, almost always numerical MCQs with units in N, Pa, m/s, m³. Memorise the five core equations in the table above, plus the Bernoulli substitution chain. Time per question should not exceed 90 seconds — if a fluid problem needs three derived steps, skip and return. JAMB typically pairs this topic with *density*, *upthrust*, and *pressure in liquids*, so a single question may chain two of them (e.g., "find upthrust, then apparent weight").

#### Practice Prompts

1. Water flows through a horizontal pipe whose cross-section narrows from 12 cm² to 4 cm². If the inlet speed is 3 m/s, find (a) the outlet speed and (b) the pressure drop, assuming ideal flow (ρ = 1000 kg/m³, g = 10 m/s²).
2. A block of mass 5 kg and density 800 kg/m³ is fully immersed in oil of density 900 kg/m³. Calculate its apparent weight and state whether it floats if released.

---

## Continue your study

- **[View this topic in your JAMB UTME roadmap](/roadmap/?exam=jamb&duration=1mo)** — see where "Fluid Mechanics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jamb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JAMB UTME exam overview](/exams/jamb/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/jamb/physics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
