---



exam: nabteb
examName: NABTEB
subject: physics
subjectName: Physics
topic: phy-5
topicName: Heat and Temperature
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.557631"
lastUpdated: "2026-09-23"
diagramPrompt: "Clean educational diagram showing Heat and Temperature with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Heat and Temperature

### 🟢 Lite — Quick Review (1h–1d)

> A 60-second anchor: heat (Q) is energy in transit in joules; temperature (T) is the degree of hotness in kelvin. Mixing them up costs marks every session.

- **Heat** is the energy that flows when two bodies at different temperatures are placed in contact. Unit: joule (J).
- **Temperature** measures how hot or cold a body is on a chosen scale. SI unit: kelvin (K). Conversion: T(K) = T(°C) + 273.15.
- **Specific heat capacity (c)** is the heat needed to raise 1 kg of a substance by 1 K. Unit: J kg⁻¹ K⁻¹.
- **Latent heat (L)** is the heat absorbed or released during a change of state at constant temperature. Unit: J kg⁻¹.

| Quantity | Symbol | Formula | SI Unit |
|---|---|---|---|
| Heat supplied (sensible) | Q | Q = mcΔθ | J |
| Heat (change of state) | Q | Q = mL | J |
| Heat capacity of body | C | C = Q/Δθ | J K⁻¹ |
| Linear expansivity | α | α = (l_t − l₀) / (l₀ Δθ) | K⁻¹ |

> 💡 **High-Yield Memory Hook:** Think **H-E-A-T = Joules in Transit**, **T-E-M-P = Kelvin Degree**. Write it on the rough sheet the moment you sit down: "Heat is H (joules), Temperature is T (kelvin)." The mnemonic keeps the two letters attached to the correct units during panic revision.

### 🟡 Standard — Regular Study (2d–2mo)

#### Two concepts that look alike but aren't

Heat and temperature are not synonyms. A swimming pool at 25 °C and a cup of water at 25 °C share the same temperature, yet the pool stores vastly more thermal energy because of its larger mass and identical specific heat capacity. NABTEB examiners exploit this every year with a one-line distinction item.

#### Formulae you must derive, not memorise

- **Q = mcΔθ** — sensible heat. Derivation basis: c is defined per unit mass per kelvin, so heat ∝ m and ∝ Δθ, giving Q = mcΔθ.
- **Q = mL** — latent heat. Derivation basis: L is defined as heat per kilogram absorbed during phase change, hence Q = mL. No Δθ appears because temperature stays constant during melting or boiling.
- **C = Q/Δθ** — heat capacity of a body. Note that C is **extensive** (depends on mass); c is **intensive** (independent of mass).

| Property | Heat (Q) | Temperature (T) | Internal / Thermal Energy |
|---|---|---|---|
| Nature | Energy in transit | State property | Total microscopic KE |
| SI unit | J | K | J |
| Detected by | Calorimeter | Thermometer | Not directly measured |
| Affected by mass? | Yes (through m in Q = mcΔθ) | No | Yes |

#### The Zeroth Law and Why Thermometers Work

If body A is in thermal equilibrium with body C, and body B is also in thermal equilibrium with C, then A and B are in thermal equilibrium with each other. This transitive property is the **zeroth law of thermodynamics**. A thermometer works because the liquid inside reaches the same temperature as the body it touches, and a calibrated scale on the glass wall converts the liquid's volume change into a temperature reading.

#### Modes of Heat Transfer

- **Conduction** — energy passes through matter without bulk movement of the medium. Fourier's law: dQ/dt = −kA(dT/dx), where k is thermal conductivity (W m⁻¹ K⁻¹).
- **Convection** — bulk motion of fluid carries heat; seen in boiling water, sea breezes, and domestic radiator systems.
- **Radiation** — electromagnetic waves transfer energy through vacuum; rate given by Stefan–Boltzmann: P = εσAT⁴.

#### Worked Problem: Latent vs Sensible Heat

A 2 kg block of ice at 0 °C melts fully and the resulting water warms to 20 °C. Take the specific latent heat of fusion of ice L_f = 3.34 × 10⁵ J kg⁻¹, and the specific heat capacity of water c_w = 4 200 J kg⁻¹ K⁻¹. Find the total heat absorbed.

#### Resolution:
1. Heat to melt ice: Q₁ = mL_f = 2 × 3.34 × 10⁵ = 6.68 × 10⁵ J.
2. Heat to warm melt-water from 0 °C to 20 °C: Q₂ = mc_wΔθ = 2 × 4 200 × 20 = 1.68 × 10⁵ J.
3. Total: Q = Q₁ + Q₂ = 6.68 × 10⁵ + 1.68 × 10⁵ = 8.36 × 10⁵ J.

> ⚠️ **Examiner Trap:** A common NABTEB error is to skip Q₁ and write only Q₂. Any "phase change at constant temperature" stage demands Q = mL, not Q = mcΔθ.

#### Thermal Expansion Essentials

Linear expansivity α = (l_t − l₀) / (l₀ Δθ). For the same solid, area expansivity β ≈ 2α and cubical expansivity γ ≈ 3α. Real gases depart from Charles's law near liquefaction; ideal gases obey PV = nRT.

### 🔴 Extended — Deep Study (3mo+)

#### Boundary Conditions and Edge Cases

The Celsius-to-kelvin shift (273.15) is exact only at the triple point of water (0.01 °C = 273.16 K). Below roughly 30 K, helium refuses to solidify at atmospheric pressure — Charles's law therefore fails long before absolute zero is reached. Thermistors and platinum resistance thermometers become more accurate than liquid-in-glass thermometers in this region.

#### Hydrogen vs Water Specific Heat

Water's specific heat capacity (~4 200 J kg⁻¹ K⁻¹) is the highest among common liquids, but hydrogen gas (~14 300 J kg⁻¹ K⁻¹) outranks it. A NABTEB MCQ offering "water has the highest c of all substances" expects the candidate to reject it. Hydrogen's low molar mass and many translational degrees of freedom per kilogram drive the value upward.

#### Black-Body Radiation Limit

Stefan–Boltzmann law P = εσAT⁴ assumes a grey body with emissivity ε. Real surfaces: ε ≈ 0.95 (soot), ε ≈ 0.03 (polished aluminium). NABTEB rarely asks for ε numerically, but questions on "good and bad emitters" appear as structured theory.

#### Two Advanced Practice Prompts

1. A 0.5 kg brass block (c = 380 J kg⁻¹ K⁻¹) at 95 °C is dropped into 1.2 kg of water at 20 °C in a copper calorimeter of mass 0.3 kg (c = 400 J kg⁻¹ K⁻¹). Assuming no heat loss, calculate the final temperature. (Answer ≈ 23.6 °C.)
2. A mercury thread in a thermometer reads 4.0 cm at 0 °C and 14.0 cm at 100 °C. What temperature corresponds to a length of 7.0 cm if the scale is linear?

#### Common Examination Pitfalls

- Writing "heat flows from cold to hot" — heat travels from hotter to colder, never the reverse.
- Quoting α as °C⁻¹ instead of K⁻¹; a kelvin interval equals a Celsius interval in size, but the SI convention demands K⁻¹.
- Ignoring that Δθ in Q = mcΔθ must be in kelvin when the constant c is given in J kg⁻¹ K⁻¹. A 1 °C interval and a 1 K interval are identical numerically, so this rarely costs marks, but unit labels in scripts still get queried.
- Treating the constant-volume gas thermometer as merely "accurate". It is the **standard** because gas pressure responds almost linearly to absolute temperature across a wide range.

## Continue your study

- **[View this topic in your NABTEB roadmap](/roadmap/?exam=nabteb&duration=1mo)** — see where "Heat and Temperature" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=nabteb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NABTEB exam overview](/exams/nabteb/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/nabteb/physics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
