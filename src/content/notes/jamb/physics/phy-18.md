---



exam: jamb
examName: JAMB UTME
subject: physics
subjectName: Physics
topic: phy-18
topicName: Heat and Thermodynamics
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.719366"
lastUpdated: "2026-07-11"
diagramPrompt: "Clean educational diagram showing Heat and Thermodynamics with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Heat and Thermodynamics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- **Heat (Q)** is energy in transit, measured in joules (J). **Temperature (T/θ)** is a state variable measured in kelvin (K) or Celsius (°C), with **T(K) = θ(°C) + 273**.
- **Specific heat capacity:** Q = mcΔθ, where m is mass (kg), c is specific heat capacity (J kg⁻¹ K⁻¹), Δθ is temperature change. Water has c = 4200 J kg⁻¹ K⁻¹.
- **Latent heat (phase change at constant T):** Q = mL, where L is specific latent heat (J kg⁻¹). Use this — not mcΔθ — when ice melts or water boils.
- **Ideal gas law:** PV = nRT, with R = 8.314 J mol⁻¹ K⁻¹. Temperature must be in **kelvin**.
- **First Law:** ΔU = Q − W (W = work done **by** the gas = pΔV).
- **Second Law:** heat flows spontaneously from hot to cold; entropy of an isolated system never decreases.
- Three heat-transfer modes: **conduction, convection, radiation**.
- Thermal expansion relations: **β = 2α** (areal), **γ = 3α** (cubical), where α is linear expansivity (K⁻¹).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Temperature, Heat, and Internal Energy
**Temperature** measures the average kinetic energy of molecules; **heat** is energy flowing due to a temperature difference. **Internal energy (U)** is the total microscopic kinetic + potential energy of a system. For an **ideal gas**, U depends *only* on temperature, so ΔU = 0 during an isothermal process.

#### Heat Capacity vs Latent Heat
Heating a substance raises its temperature until it begins changing phase. During the phase change, temperature stays constant while energy is absorbed as **latent heat**:

| Quantity | Formula | When Used |
|---|---|---|
| Sensible heat | Q = mcΔθ | Temperature changing, no phase change |
| Latent heat | Q = mL | Melting, boiling, freezing, condensation |
| Gas work | W = pΔV | Gas expanding/compressing against pressure |

#### The Gas Laws and Ideal Gas Equation
- **Boyle's Law:** PV = constant (constant T)
- **Charles's Law:** V/T = constant (constant P)
- **Pressure Law:** P/T = constant (constant V)
- Combined: **PV = nRT** (always use T in kelvin)

For an isothermal change, W = nRT ln(V₂/V₁); for an isobaric change, W = pΔV.

#### Thermal Expansion
Solids expand when heated. **Linear:** ΔL = αL₀Δθ. **Areal:** ΔA = 2αA₀Δθ. **Cubical:** ΔV = γV₀Δθ, with γ = 3α. This is why bridges have expansion joints and bimetallic strips bend on heating.

#### First and Second Laws
**First Law (conservation of energy):** ΔU = Q − W. **W** is work done *by* the system. **Second Law:** heat naturally passes from hot to cold; entropy (S) of an isolated system increases (ΔS ≥ 0). Heat engines cannot be 100% efficient — efficiency η = 1 − T_cold/T_hot (Kelvin).

#### Typical JAMB Question Patterns
- Numerical on Q = mcΔθ or Q = mL (e.g., energy to melt a block of ice).
- PV = nRT calculation, often testing the kelvin conversion trap.
- Identifying isothermal/adiabatic/isobaric/isochoric lines on a PV diagram.
- Sign convention in the first law: is heat added or removed? Does the gas do work or have work done on it?

> **Tip:** Always convert °C to K before plugging into any gas law. Missing this single step costs JAMB candidates 1–2 marks every year.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Process-by-Process Comparison

| Process | Held constant | First-law form | Work done |
|---|---|---|---|
| Isothermal | T | Q = W (since ΔU = 0) | W = nRT ln(V₂/V₁) |
| Isobaric | P | Q = ΔU + pΔV | W = pΔV |
| Isochoric | V | Q = ΔU (W = 0) | 0 |
| Adiabatic | Q = 0 | ΔU = −W | W = ½(p₁V₁ − p₂V₂) |

On a PV diagram, isothermal curves are **gentler** (less steep) than adiabats; adiabats rise more sharply because no heat escapes.

#### Edge Cases and Examiner Traps
- **Sign convention mismatch** — writing ΔU = Q + W. The convention in JAMB's Physics syllabus has W as work done *by* the gas, so ΔU = Q − W.
- **Phase-change oversight** — using Q = mcΔθ across melting/boiling points. Latent heat is absorbed *without* temperature change.
- **Linear vs cubical confusion** — γ ≈ 3α is exact for isotropic solids but only an approximation; for crystals with direction-dependent expansion, separate coefficients apply.
- **Specific vs molar** — specific heat capacity c (J kg⁻¹ K⁻¹) differs from molar heat capacity Cₘ (J mol⁻¹ K⁻¹). For monatomic ideal gases, Cᵥ = 3R/2; for diatomic, Cᵥ = 5R/2.
- **Reversible vs irreversible** — JAMB may distinguish heat flow through a perfect conductor (reversible idealisation) from real-world spontaneous heat flow.

#### Connections to Other Topics
Kinetic theory links PV = nRT to microscopic motion: PV = ⅓ Nm⟨c²⟩, giving the average kinetic energy per molecule as 3kT/2, where k = R/Nₐ = 1.38 × 10⁻²³ J K⁻¹. This same equipartition result underlies specific heat capacities of gases. Thermal conductivity (Fourier's law) is tested in the same chapter as conduction; expect numericals on heat flow through composite walls.

#### Worked Micro-Example
**Question:** 0.02 kg of ice at 0 °C is melted and then heated to 30 °C. Find the total heat required. (L_f = 3.34 × 10⁵ J kg⁻¹, c_water = 4200 J kg⁻¹ K⁻¹)

- Step 1 — melting: Q₁ = mL = 0.02 × 3.34 × 10⁵ = **6680 J**
- Step 2 — heating water: Q₂ = mcΔθ = 0.02 × 4200 × 30 = **2520 J**
- **Total Q = 6680 + 2520 = 9200 J**

#### Practice Prompts
1. A gas in a cylinder expands isothermally from 0.004 m³ to 0.010 m³ at 300 K against a constant external pressure of 1.0 × 10⁵ Pa. Find the work done and the heat absorbed. *(Hint: ideal gas → use nRT relation or pΔV carefully.)*
2. A brass rod of length 2.00 m is heated from 20 °C to 120 °C. Given α_brass = 1.9 × 10⁻⁵ K⁻¹, calculate the new length and the percentage change. *(Watch for consistent units in Δθ.)*

> **Strategy for JAMB:** Allocate about 60–90 seconds per Heat & Thermodynamics question. The 3–4 questions per sitting are almost always gas-law numericals plus one conceptual first/second-law item. Master the kelvin conversion and the sign convention — together they remove the two most common marks lost on this topic.

---

## Continue your study

- **[View this topic in your JAMB UTME roadmap](/roadmap/?exam=jamb&duration=1mo)** — see where "Heat and Thermodynamics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jamb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JAMB UTME exam overview](/exams/jamb/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/jamb/physics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
