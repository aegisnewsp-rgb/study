---




exam: nat-i
examName: NAT-I (NTS)
subject: subject-knowledge
subjectName: Subject Knowledge
topic: sub-2
topicName: "Physics: Electricity and Magnetism"
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.139406"
lastUpdated: "2026-06-21"
diagramPrompt: "Educational diagram illustrating Physics: Electricity and Magnetism with clear labels, white background, exam-style illustration"




---

# Physics: Electricity and Magnetism

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- **Electric charge** is a conserved, quantized property (in coulombs, C) that creates an **electric field** around itself and experiences a force in the field of another charge.
- **Coulomb's law**: F = k q₁q₂ / r², where k ≈ 9 × 10⁹ N·m²/C² and r is the centre-to-centre separation. Like charges repel, unlike charges attract.
- **Ohm's law**: V = IR, where V is in volts, I in amperes, R in ohms. Power dissipated: P = VI = I²R = V²/R, in watts.
- **Series** circuits carry the **same current** through every component; **parallel** circuits share the **same voltage** across each branch.
- **Magnetic force on a moving charge**: F = qvB sin θ. **Faraday's law**: induced EMF ε = −N dΦ/dt, with Lenz's law giving the current direction.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Electric Charge and Field
Charge is quantized in integer multiples of the elementary charge **e = 1.6 × 10⁻¹⁹ C** and is conserved in every isolated process. The **electric field** E at a point is defined as force per unit positive test charge, E = F/q. For a point charge Q, E = kQ/r² points radially outward (positive Q) or inward (negative Q). **Electric potential** V at a point equals the work done per unit charge in bringing a test charge from infinity; for a point charge V = kQ/r. Potential is a scalar measured in volts (J/C), and **potential energy** U = qV.

#### Current Electricity
**Current** I = Q/t is the rate of charge flow (amperes). **Drift velocity** v_d = I / (nAe), where n is the free-electron density. **Ohm's law** holds only for ohmic conductors at constant temperature: V = IR. Real resistors obey it within a linear range; filament bulbs and diodes are **non-ohmic**.

#### Series vs Parallel Rules

| Quantity | Series | Parallel |
|---|---|---|
| Current | Same through all | Splits across branches |
| Voltage | Splits across components | Same across each branch |
| Resistance | R_total = Σ Rᵢ | 1/R_total = Σ 1/Rᵢ |
| Capacitance | 1/C_total = Σ 1/Cᵢ | C_total = Σ Cᵢ |

#### Magnetism and Induction
A current-carrying conductor produces a magnetic field encircling it; the **right-hand grip rule** gives the direction. A straight wire of length L in field B carrying current I experiences F = BIL sin θ. **Faraday's law** states that a changing magnetic flux Φ = BA cos θ through a coil of N turns induces ε = −N dΦ/dt. **Lenz's law** (the negative sign) says the induced current opposes the change that produces it.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Quantitative Traps
- **Unit conversions** trip most NAT-I candidates: 1 kV = 1000 V, 1 mA = 10⁻³ A, 1 µF = 10⁻⁶ F. A 6 kΩ resistor across 12 V carries I = V/R = 0.002 A = **2 mA**, not 2 A.
- **Power in mixed circuits**: total power equals the sum of branch powers, P_total = Σ VᵢIᵢ. In parallel, each branch sees the full source voltage, so a lower-resistance branch dissipates more power.
- **AC versus DC**: AC quantities are usually quoted as **RMS values** (V_rms = V_peak / √2, I_rms = I_peak / √2). The average power in AC is P = V_rms · I_rms · cos φ, where φ is the phase angle between V and I; for a pure resistor φ = 0 and cos φ = 1.
- **Capacitor energy**: a capacitor stores U = ½CV² = Q²/(2C) = ½QV. A capacitor blocks DC at steady state (no current through the dielectric) but passes AC, with reactance X_C = 1/(2πfC).

#### Connections and Common Mistakes
- **Right-hand rule confusion**: for the field *around* a wire, thumb with current, fingers curl with B; for the force on a wire, fingers point along I and curl to B, thumb gives F.
- **Faraday sign**: include the negative sign only when the question asks for current direction; for magnitude, use |ε| = N|ΔΦ/Δt|.
- **Worked micro-example**: a coil of 200 turns has its flux change from 0.5 Wb to 0.1 Wb in 0.02 s. ε = −200 × (0.1 − 0.5)/0.02 = **4000 V**, and by Lenz's law the induced current opposes the flux drop.
- **Exam strategy**: NAT-I tests Ohm's law and series-parallel combinations in roughly 4% of the Subject Knowledge paper — focus on numeric drills with mixed units rather than derivations.

#### Practice Prompts
1. Two 6 Ω resistors in parallel are connected in series with a 4 Ω resistor across a 16 V battery. Find the current through the 4 Ω resistor and the voltage across the parallel combination.
2. A 50-turn coil of area 0.02 m² is withdrawn from a uniform 0.4 T field in 0.1 s. Calculate the magnitude of the induced EMF and justify the direction of the induced current.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
