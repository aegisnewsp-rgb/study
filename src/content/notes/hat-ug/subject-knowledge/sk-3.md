---




exam: hat-ug
examName: HAT-UG (HEC Aptitude Test - Undergraduate)
subject: subject-knowledge
subjectName: Subject Knowledge
topic: sk-3
topicName: "Physics: Electricity and Magnetism"
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.011693"
lastUpdated: "2026-06-20"
diagramPrompt: "Educational diagram illustrating Physics: Electricity and Magnetism with clear labels, white background, exam-style illustration"




---

# Physics: Electricity and Magnetism

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Electricity and Magnetism** unifies two phenomena once thought separate: **stationary charges** (electrostatics) and **moving charges** (current) interacting with **magnetic fields**. The governing relation between charges is **Coulomb's law**, F = k q₁q₂ / r², where k ≈ 9 × 10⁹ N·m²/C². A charge q in a field E experiences force F = qE, and the **potential difference** V = W/q links energy to charge. In circuits, **Ohm's law** V = IR and **power** P = VI = I²R govern resistive networks solved with **Kirchhoff's junction and loop rules**. Magnetism enters via the force on a conductor F = BIL sinθ and the induced EMF, EMF = −N dΦ/dt, whose negative sign encodes **Lenz's law**. For HAT-UG Subject Knowledge, expect 4–6 MCQs on circuit analysis, Coulomb's law, and induction.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Electrostatics
Coulomb's law gives the vector force between point charges: **F** = k q₁q₂ / r² **r̂**. The superposition principle lets you sum forces from multiple charges linearly. Every charge creates an **electric field** **E** = **F**/q, and the work done moving a test charge between two points defines **potential difference** V = W/q, measured in volts (J/C). In a **uniform field** between parallel plates, E = V/d, and the energy stored is U = ½CV².

#### Current Electricity
Steady current I = Q/t flows when a potential difference drives charges through a conductor of **resistance** R = ρL/A, where ρ is resistivity. **Ohm's law** V = IR holds only for ohmic conductors. Power dissipated is P = VI = I²R = V²/R. Kirchhoff's **junction rule** (ΣI = 0) and **loop rule** (ΣV = 0) let you solve multi-loop networks.

#### Combinations Table

| Combination | Resistors (R) | Capacitors (C) |
|---|---|---|
| Series | R_s = ΣRᵢ | 1/C_s = Σ(1/Cᵢ) |
| Parallel | 1/R_p = Σ(1/Rᵢ) | C_p = ΣCᵢ |

A classic trap: the formulas **invert** between R and C — students mix this up routinely.

#### Magnetism & Induction
A current-carrying wire produces a magnetic field (right-hand grip rule); the Biot-Savart law gives **dB** = (μ₀/4π) I d**l** × **r̂**/r². The force on a current in an external field is **F** = I**L** × **B**, magnitude BIL sinθ. **Faraday's law** states EMF = −N dΦ/dt; **Lenz's law** fixes the sign so that induced current opposes flux change. A **transformer** uses mutual induction: Vₛ/Vₚ = Nₛ/Nₚ.

#### HAT-UG Pattern
Questions blend numericals (find equivalent resistance, time of flight of charge in crossed fields) with conceptual items on Lenz's sign, RMS vs peak (V_rms = V₀/√2), and conventional current direction.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases & Deeper Mechanisms
The Coulomb force and the magnetic force are **manifestations of a single electromagnetic interaction** — stationary charges see only the electric field, while moving charges also see a magnetic field that depends on the observer's frame. This is why relativity unifies them. The magnetic force does **no work** (it is always perpendicular to velocity); energy transfer in motors happens via the changing flux in the armature coil.

**Faraday's law** requires dΦ/dt ≠ 0 — a static field, however strong, produces zero EMF. A conductor moving in a uniform field generates motional EMF ε = BLv sinθ, which is the DC generator principle. In an AC circuit with pure inductance, voltage **leads** current by 90°; with pure capacitance, current leads voltage by 90°. Real devices (motors, transformers) have non-ideal behaviour: hysteresis losses, eddy currents (reduced by lamination), and copper losses (I²R).

#### Common Mistakes to Avoid
- Treating **potential** (V, scalar, J/C) and **potential energy** (U = qV, scalar, J) as interchangeable.
- Using **peak** values (V₀, I₀) where the formula requires **RMS** values for average power: ⟨P⟩ = V_rms I_rms cosφ.
- Applying **Fleming's left-hand rule** for motors and **right-hand rule** for generators — they are mirror images, easy to swap under pressure.
- Ignoring **internal resistance r**: terminal voltage V_term = EMF − Ir, so the battery is not an ideal source.
- Sign errors in **Lenz's law**: induced current opposes the *change*, not the field itself.

#### Worked Micro-Example
A 10 Ω resistor and a 20 Ω resistor are in parallel, connected to a 12 V battery of internal resistance 1 Ω. Equivalent external resistance R_p = (10 × 20)/(10 + 20) = 6.67 Ω. Total circuit resistance = 7.67 Ω, so current from battery I = 12/7.67 ≈ 1.56 A. Terminal voltage = 12 − (1.56)(1) = 10.44 V. Power dissipated externally = I²R_p ≈ 16.3 W.

#### Practice Prompts
1. A coil of 200 turns and area 0.02 m² is perpendicular to a uniform magnetic field changing at 0.5 T/s. Find the magnitude and direction of the induced EMF.
2. Three capacitors 2 μF, 4 μF, and 6 μF are connected (a) all in series, (b) all in parallel. Which arrangement stores more energy at 50 V?

#### Adjacent Topics
Link this chapter to **Modern Physics** (electromagnetic waves, photoelectric effect context) and **Semiconductors** (p-n junction, diode I-V characteristics).

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
