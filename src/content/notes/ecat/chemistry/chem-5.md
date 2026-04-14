---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: chemistry
subjectName: Chemistry
topic: chem-5
topicName: Thermochemistry and Energetics
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.056082"
diagramPrompt: "Clear scientific diagram of Thermochemistry and Energetics with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"



---

# Thermochemistry and Energetics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT exam.

Thermochemistry deals with the heat energy absorbed or released in chemical reactions. All living systems and industrial processes depend on energy changes — understanding this topic is essential for both ECAT and real-world chemistry.

**Fundamental Definitions:**
- **System**: the part of the universe being studied (open, closed, or isolated)
- **Surroundings**: everything else
- **Enthalpy (H)**: total heat content of a system at constant pressure; ΔH = qₚ
- **Internal energy (U)**: sum of kinetic and potential energies of all particles; ΔU = qᵥ
- **Heat vs Temperature**: heat is energy transfer due to temperature difference; temperature is a measure of average kinetic energy

**Key Equations:**
- **First law of thermodynamics**: ΔU = q + w (energy is conserved)
- At constant pressure: ΔH = ΔU + PΔV
- For ideal gases: ΔH = ΔU + Δn_g RT
- **Hess's Law**: ΔH for a reaction is independent of the pathway — enthalpy is a state function

**Bond Enthalpies:**
Breaking bonds absorbs energy; forming bonds releases energy.
$$\Delta H_{rxn} = \sum \Delta H_{\text{bonds broken}} - \sum \Delta H_{\text{bonds formed}}$$

Average bond enthalpies (kJ/mol): H–H = 436, C–H = 413, C=C = 614, C≡C = 839, O=O = 498, C–O = 358, C=O = 799, O–H = 463, N≡N = 945.

**⚡ ECAT exam tips:**
- Exothermic reactions (ΔH < 0) release heat; endothermic (ΔH > 0) absorb heat
- Hess's law questions are very common — construct a Born–Haber cycle if given multiple steps
- Standard enthalpy of formation (ΔH°f) of an element in its standard state = 0
- Enthalpy of combustion (ΔH°c) is always negative for complete combustion of any fuel
- Specific heat capacity: q = mcΔT; water's specific heat = 4.184 J g⁻¹ K⁻¹ — frequently needed in calorimetry

---

### 🟡 Standard — Regular Study (2d–2mo)
> For ECAT students who want genuine understanding of thermochemistry.

**Calorimetry**

A bomb calorimeter (constant volume) measures the heat of combustion:
$$q_{rxn} = -C_{calorimeter} \cdot \Delta T$$

For a coffee cup calorimeter (constant pressure, for solutions):
$$q_{solution} = m \cdot c \cdot (T_{final} - T_{initial})$$

If the calorimeter is perfectly insulated, q_solution = −q_reaction.

**Standard Enthalpy of Reaction**

$$\Delta H_{rxn}^\circ = \sum \nu_i \Delta H_f^\circ (\text{products}) - \sum \nu_i \Delta H_f^\circ (\text{reactants})$$

Example: Combustion of methane:
CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)
ΔH° = [ΔH°f(CO₂) + 2ΔH°f(H₂O)] − [ΔH°f(CH₄) + 2ΔH°f(O₂)]
= [−393.5 + 2(−285.8)] − [−74.8 + 0]
= −965.1 + 74.8 = **−890.3 kJ/mol**

This is why natural gas (methane) is such an efficient fuel — approximately 890 kJ released per mole.

**Born–Haber Cycle (Enthalpy of Lattice Formation)**

The formation of an ionic solid from its elements involves multiple steps:
1. Sublimation of solid metal: M(s) → M(g), ΔH_sub
2. Dissociation of diatomic gas: ½X₂(g) → X(g), ½D
3. Ionisation of metal: M(g) → M⁺(g) + e⁻, I₁
4. Electron gain by halogen: X(g) + e⁻ → X⁻(g), EA
5. Formation of lattice: M⁺(g) + X⁻(g) → MX(s), ΔH_lattice

By Hess's law, ΔH_f = ΔH_sub + ½D + I₁ + EA + ΔH_lattice.

For NaCl: ΔH_f = 107 + ½(244) + 496 + (−349) + (−787) = −786 kJ/mol (measured: −787 kJ/mol).

**Enthalpy vs Internal Energy**

For ideal gases: ΔH = ΔU + ΔnRT. For reactions where the number of moles of gas changes:
- If Δn_g > 0: ΔH > ΔU (system does PV work on surroundings)
- If Δn_g < 0: ΔH < ΔU (surroundings do PV work on system)
- For condensed phases (solids/liquids): ΔV ≈ 0, so ΔH ≈ ΔU

**Spontaneity and Gibbs Free Energy**

A process is spontaneous if ΔG < 0. The Gibbs equation:
$$\Delta G = \Delta H - T\Delta S$$

At equilibrium, ΔG = 0, giving T_eq = ΔH/ΔS. For the universe: spontaneous processes increase total entropy (Second Law).

Entropy units: J mol⁻¹ K⁻¹. Standard molar entropies S°(298): CO₂(g) = 213.7, H₂O(l) = 69.9, H₂O(g) = 188.8, NaCl(s) = 72.1, CH₄(g) = 186.3.

**⚡ Common student mistakes:**
1. Forgetting that water as a product in different states gives very different ΔH values (H₂O(l): −286, H₂O(g): −242 kJ/mol)
2. Using the wrong sign for bond enthalpies — energy must be supplied (positive) to break bonds
3. Confusing ΔH°f (enthalpy of formation) with ΔH°c (enthalpy of combustion)
4. Forgetting that entropy of gas >> entropy of liquid >> entropy of solid

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for ECAT mastery and deeper conceptual understanding.

**Kirchhoff's Law — Temperature Dependence of ΔH**

$$\left(\frac{\partial \Delta H}{\partial T}\right)_P = \Delta C_P$$

If ΔC_P is constant over a temperature range:
$$\Delta H(T_2) = \Delta H(T_1) + \Delta C_P (T_2 - T_1)$$

This allows calculation of enthalpy change at any temperature if heat capacities are known. For most organic reactions near room temperature, ΔC_P ≈ 0, so ΔH is approximately independent of temperature.

**Heat Capacity and Latent Heats**

The molar heat capacity C is the energy required to raise the temperature of 1 mole by 1 K:
- At constant volume: Cᵥ = (∂U/∂T)ᵥ
- At constant pressure: Cₚ = (∂H/∂T)ₚ

For ideal monatomic gases: Cᵥ = (3/2)R, Cₚ = (5/2)R. For diatomic ideal gases at room temperature (5 degrees of freedom): Cᵥ = (5/2)R, Cₚ = (7/2)R.

The ratio γ = Cₚ/Cᵥ is important for adiabatic processes. For monatomic gases γ = 5/3 ≈ 1.67; for diatomic gases γ = 7/5 = 1.40.

Latent heat of fusion (melting) and latent heat of vaporisation (boiling) are both endothermic (positive ΔH). For water: ΔH_fus = 6.01 kJ/mol, ΔH_vap = 40.7 kJ/mol at 100 °C. The high ΔH_vap of water is crucial for climate regulation and biological thermoregulation.

**Thermodynamic Perspective on Chemical Equilibrium**

At equilibrium, ΔG = 0. The thermodynamic equilibrium constant:
$$K_{eq} = e^{-\Delta G^\circ / RT}$$

For the reaction aA + bB ⇌ cC + dD:
$$K_{eq} = \frac{[C]^c [D]^d}{[A]^a [B]^b}$$

This is the relationship between thermodynamics (ΔG°) and equilibrium (K). When ΔG° is negative, K > 1; when ΔG° is positive, K < 1.

**Fuel Chemistry — Energy from Combustion**

Fuels are characterised by their calorific value (energy released per unit mass):
- Methane: 55.5 kJ/g
- Octane (petrol): 47.9 kJ/g
- Ethanol: 29.7 kJ/g
- Hydrogen (by mass): 141.8 kJ/g (but volumetric density is very low)

The air–fuel ratio for complete combustion of octane (C₈H₁₈):
C₈H₁₈ + 12.5O₂ → 8CO₂ + 9H₂O
Stoichiometric air–fuel ratio by mass ≈ 15:1 for petrol.

**Respiration as a Combustion Reaction**

Biological oxidation of glucose: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 2870 kJ/mol. This is the reverse of photosynthesis and is the primary energy source for most life. The energy is captured in ATP (adenosine triphosphate); the hydrolysis of ATP to ADP releases approximately 30.5 kJ/mol under cellular conditions.

**Energy Diagrams and Reaction Profiles**

An energy profile shows the enthalpy change and activation energy (Eₐ) of a reaction. Catalysts provide an alternative pathway with lower Eₐ but do not change ΔH. For an exothermic reaction, products are lower in energy than reactants; the vertical distance is ΔH. The "hill" between them is the activation energy.

**ECAT Previous Year Patterns:**
- Hess's law and Born–Haber cycles: calculation-based, very common
- ΔH from bond enthalpies: frequently tested
- Calorimetry: q = mcΔT calculations
- Gibbs free energy: spontaneity criteria (ΔG < 0)
- Enthalpy of combustion: standard textbook examples

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
