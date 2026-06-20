---




exam: hat-ug
examName: HAT-UG (HEC Aptitude Test - Undergraduate)
subject: subject-knowledge
subjectName: Subject Knowledge
topic: sk-2
topicName: "Physics: Heat and Thermodynamics"
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.011303"
lastUpdated: "2026-06-20"
diagramPrompt: "Educational diagram illustrating Physics: Heat and Thermodynamics with clear labels, white background, exam-style illustration"




---

# Physics: Heat and Thermodynamics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Heat** is energy in transit; **temperature** is the scalar state variable that determines the direction of spontaneous heat flow. The **Zeroth Law** defines temperature through thermal equilibrium, the **First Law** (ΔU = Q − W) conserves energy in any process, and the **Second Law** fixes the direction via entropy (ΔS ≥ 0 for an isolated system). Work done by an ideal gas is W = PΔV in an isobaric process and W = nRT ln(V₂/V₁) isothermally; in an **adiabatic** process PV^γ = constant with γ = Cp/Cv. **Carnot efficiency** η = 1 − T_cold/T_hot is the ceiling no real engine can exceed, and **latent heat** (Q = mL) must be added whenever a phase change occurs during heating. Always use **Kelvin** in PV = nRT and in Carnot-efficiency calculations — plugging Celsius here is the most common point loss.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Defining the Key Quantities

**Temperature** (T, in K) is a macroscopic property that attains the same value for any two systems in mutual thermal equilibrium — the content of the **Zeroth Law**. **Heat** (Q, in J) is energy crossing the boundary of a system because of a temperature difference; **internal energy** U is the total microscopic kinetic plus potential energy stored inside. For an ideal gas U depends only on T, and ΔU = nCvΔT.

#### Heat Transfer Mechanisms

Energy moves three ways: **conduction** obeys Fourier's law (Q/t = −kA dT/dx), where k is the thermal conductivity; **convection** transports heat through bulk fluid motion; **radiation** follows the Stefan–Boltzmann law (P = εσAT⁴), where σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴. Sensible heating uses Q = mcΔT, but a **phase change** requires Q = mL (latent heat) with no temperature change — students who omit this in a melting/boiling calculation lose full marks.

#### First Law and the Four Processes

ΔU = Q − W, where W is work done **by** the system.

| Process | Constant | Work by gas | ΔU |
|---|---|---|---|
| Isobaric | P | PΔV | nCpΔT |
| Isochoric | V | 0 | nCvΔT |
| Isothermal | T | nRT ln(V₂/V₁) | 0 |
| Adiabatic | Q = 0 | (P₁V₁ − P₂V₂)/(γ − 1) | nCvΔT |

The **Second Law** states that entropy of an isolated system never decreases: ΔS = Q/T for reversible paths. This rules out perpetual-motion machines and explains why **Carnot efficiency** η = 1 − T_cold/T_hot (T in Kelvin) is the upper bound for any engine operating between two reservoirs.

#### Typical HAT-UG Question Patterns
- Numerical: compute W, Q, ΔU for a gas taken through a cyclic P–V diagram.
- Conceptual: identify which law forbids a 100% efficient engine.
- Conversion: convert Celsius to Kelvin before applying PV = nRT.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Mechanism Depth

The **adiabatic lapse** of PV^γ arises from combining the First Law (dU = δQ − δW = −PdV) with U = nCvT and PV = nRT, eliminating temperature to leave the differential form γ dV/V + dP/P = 0. In free expansion of an ideal gas into a vacuum, **W = 0**, **Q = 0**, so **ΔU = 0** — yet entropy increases because the process is irreversible; the Second Law is violated only if you mistakenly equate "no heat exchange" with "ΔS = 0".

**Specific heat is not constant**: cp and cv vary with temperature (especially near phase transitions), and Cp − Cv = R holds only for ideal gases. For solids at low T the Debye T³ law replaces classical Dulong–Petit predictions.

#### Connections to Adjacent Topics

Heat and Thermodynamics feeds directly into **Kinetic Theory** (mean kinetic energy per molecule = 3kT/2) and into **Waves** (sound speed a = √(γRT/M) for an ideal gas). The sign convention of W is also why the **work-energy theorem** in mechanics carries a sign: work done **on** a gas is −PΔV.

#### Common Mistakes in HAT-UG

- Using 273 instead of 273.15 when precision is asked.
- Reading η = 1 − T_cold/T_hot as a percentage without converting the fraction.
- Applying isothermal formulas (PV = const) to an adiabatic process.
- Forgetting that entropy change of a reservoir is −Q_res/T, so total ΔS_universe ≥ 0 even when ΔS_system < 0.

#### Practice Prompts
1. Two moles of an ideal monatomic gas expand isothermally at 400 K from 2 L to 8 L. Find Q, W, and ΔU, and verify the First Law.
2. A Carnot engine operates between 500 K and 300 K with 1 kJ of heat drawn from the hot reservoir. Compute the work output and the entropy change of each reservoir; show ΔS_universe ≥ 0.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
