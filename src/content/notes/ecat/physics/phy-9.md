---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: physics
subjectName: Physics
topic: phy-9
topicName: Heat, Temperature and Thermodynamics
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.044784"
lastUpdated: "2026-06-27"
diagramPrompt: "Clean educational diagram showing Heat, Temperature and Thermodynamics with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Heat, Temperature and Thermodynamics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.
- **Temperature** measures the average kinetic energy of molecules; it is a state property, not a quantity of energy.
- **Heat (Q)** is thermal energy *in transit* between bodies at different temperatures — once absorbed it becomes internal energy.
- The single must-remember equations are **Q = mcΔT** (sensible heat), **Q = mL** (latent heat), and the **First Law ΔU = Q − W** with W as work done *by* the system.
- The **Carnot efficiency η = 1 − T_c/T_h** requires **absolute (Kelvin) temperatures**; using °C gives a wrong answer.
- Watch the trap: during a phase change temperature is constant, so Q = mcΔT does **not** apply — switch to **Q = mL**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Defining Heat vs Temperature vs Internal Energy
**Temperature (T)** is the degree of hotness that tells us whether two systems are in **thermal equilibrium** (Zeroth Law of Thermodynamics). **Heat (Q)** is energy crossing the boundary of a system purely because of a temperature gradient. **Internal energy (U)** is the total kinetic + potential energy of all molecules inside the system; it is a state function, so dU depends only on the initial and final states, not the path.

#### Calorimetry: Q = mcΔT and Q = mL
The energy needed to raise 1 kg of a substance by 1 K is its **specific heat capacity c (J kg⁻¹ K⁻¹)**, giving **Q = mcΔT** (sensible heat). During a phase change (melting, boiling, sublimation) the temperature stays pinned at the transition value; the heat absorbed or released is **Q = mL**, where **L** is the **specific latent heat (J kg⁻¹)**. ECAT MCQs frequently combine the two: warming ice from −10 °C to 0 °C uses Q = mcΔT, melting it uses Q = mL, then warming the water again uses Q = mcΔT with water's c.

#### Thermal Expansion
Solids expand when heated. **Linear expansion ΔL = αL₀ΔT**, **areal ΔA = βA₀ΔT**, and **volumetric ΔV = γV₀ΔT**, where α, β, γ are coefficients (K⁻¹) with the approximate relation **β ≈ 2α** and **γ ≈ 3α** for isotropic solids. A bimetallic strip and a mercury thermometer both exploit these coefficients.

#### First Law of Thermodynamics
**ΔU = Q − W** where W is work done *by* the system. For an ideal gas, the boundary work during an isobaric process is **W = PΔV**; for an isothermal expansion at temperature T, **W = nRT ln(V_f/V_i)**; for an adiabatic process, **PV^γ = constant** and W = (P_iV_i − P_fV_f)/(γ − 1). The **Mayer relation C_p − C_v = R** and **γ = C_p / C_v** (≈ 1.67 for monatomic, 1.4 for diatomic gases) are tested almost every year.

#### Second Law and Carnot Efficiency
Heat flows spontaneously from hot to cold. No engine operating between two reservoirs can exceed the **Carnot efficiency η = 1 − T_c / T_h**, with temperatures in **kelvin**. ECAT numerics often ask for η as a percentage, so convert at the end: multiply by 100.

#### Typical ECAT Patterns
- Numerical calorimetry combining solid + liquid + phase change.
- Sign-convention MCQs on ΔU = Q − W.
- Computing W for isothermal vs adiabatic expansion of an ideal gas.
- Carnot-efficiency calculation requiring Kelvin conversion.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Subtleties
The **Zeroth Law** is what justifies the existence of a thermometer: if A is in equilibrium with C, and B is in equilibrium with C, then A and B are in equilibrium with each other — allowing us to define a universal temperature scale. The **Celsius-to-Kelvin shift T(K) = T(°C) + 273.15** is the most common source of lost marks in ECAT Carnot problems; a 27 °C reservoir (300 K) vs a 327 °C reservoir (600 K) gives η = 1 − 300/600 = 50 %, not 1 − 27/327.

For real substances, c itself varies with temperature, so the integrated form Q = ∫ mc(T) dT is more accurate; but ECAT restricts you to constant-c values. Latent heat splits into **latent heat of fusion (L_f)** at the solid–liquid boundary and **latent heat of vaporisation (L_v)** at the liquid–gas boundary, with L_v ≫ L_f for most substances because vaporisation breaks all intermolecular bonds, not just some.

#### Connections to Adjacent Topics
The First Law is conservation of energy restated for thermodynamic systems; it links directly to **work-energy theorem** in mechanics. **Entropy (S)**, defined as dS = dQ_rev/T, quantifies the Second Law — ΔS_universe ≥ 0 — and connects heat to statistical mechanics via S = k_B ln Ω. The four thermodynamic processes (isothermal, adiabatic, isobaric, isochoric) are best visualised on a P–V diagram, where the area under the curve equals work done.

#### Common Mistakes
- Using **Q = mcΔT** during boiling — temperature is constant, so ΔT = 0 and the formula gives zero, which is wrong.
- Writing **ΔU = Q + W** after defining W as work done *on* the system (pick one convention and stick to it).
- Computing **η = (T_h − T_c)/T_h** in Celsius units instead of kelvin.
- Treating **c** and **C** (specific vs molar heat capacity) as interchangeable; C = Mc.
- Assuming all gases have γ = 1.4 — noble gases are monatomic with γ ≈ 5/3.

#### Practice Prompts
1. **Numerical:** 200 g of ice at −10 °C is converted to steam at 100 °C. Using c_ice = 2100 J kg⁻¹ K⁻¹, c_water = 4200 J kg⁻¹ K⁻¹, L_f = 3.34 × 10⁵ J kg⁻¹, L_v = 2.26 × 10⁶ J kg⁻¹, find the total heat absorbed.
2. **Conceptual:** A Carnot refrigerator operates between 270 K and 300 K. State, with reasoning, whether its coefficient of performance equals (T_c / (T_h − T_c)) — derive it from η = 1 − T_c/T_h.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
