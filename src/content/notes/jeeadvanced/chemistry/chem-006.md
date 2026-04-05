---

exam: jeeadvanced
examName: JEE Advanced
subject: chemistry
subjectName: Chemistry
topic: chem-006
topicName: Thermodynamics
weight: 5
country: india
generated: "2026-03-24T08:32:07.923263"
diagramPrompt: Clear scientific diagram of Thermodynamics with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style



---
# Thermodynamics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Thermodynamics in JEE covers three laws, enthalpy, entropy, free energy, and their applications to chemical reactions. It's a high-weightage chapter with consistent 6–10 questions across papers. The key is understanding the sign conventions and the relationships between ΔU, ΔH, ΔS, and ΔG.

**Key Formulae for Quick Recall:**

- **First Law**: ΔU = qᵥ (constant volume) = qᵥ + w; w = −PΔV (expansion work)
- **Enthalpy**: H = U + PV; ΔH = ΔU + Δn_g RT (for gaseous reactions)
- **Hess's Law**: ΔH is path-independent. ΔH_total = Σ ΔH_step. Always holds because H is a state function.
- **Born-Haber Cycle**: Lattice energy = ΔH_atomization + IE − EA + ΔH_sublimation − ΔH_f (sign convention matters!)
- **Kirchhoff's Law**: ΔH₂ − ΔH₁ = ΔCₚ(T₂ − T₁); ΔS₂ − ΔS₁ = ΔCₚ ln(T₂/T₁)
- **Entropy**: ΔS = qᵣₑᵥ/T = ΔHᵣₑᵥ/T for reversible processes. Total entropy (system + surroundings) increases for spontaneous processes.
- **Free Energy**: ΔG = ΔH − TΔS; ΔG = −RT ln K (Gibbs-Helmholtz equation); Also ΔG = −nF E°_cell
- **Spontaneity**: ΔS_total > 0 (or ΔG < 0) for spontaneous process.

⚡ **Exam tip**: For ΔH from bond enthalpies: ΔH_reaction = Σ ΔH(bonds broken) − Σ ΔH(bonds formed). Bonds broken requires energy (+), bonds formed releases energy (−). Always count bonds carefully — a double bond is NOT the same as two single bonds.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Thermodynamics — JEE Chemistry Study Guide**

**1. System, Surroundings, and Types of Processes**

A thermodynamic system is the part of the universe being studied. The surroundings are everything else.

| System type | Exchange of matter | Exchange of energy |
|---|---|---|
| Open | Yes | Yes |
| Closed | No | Yes |
| Isolated | No | No |

**Process types**:
- **Isothermal** (ΔT = 0): ΔU = 0, so q = −w = nRT ln(V₂/V₁)
- **Adiabatic** (q = 0): ΔU = w = nCᵥΔT; for adiabatic expansion of ideal gas, PV^γ = constant
- **Isobaric** (ΔP = 0): w = −PΔV, ΔH = qₚ
- **Isochoric** (ΔV = 0): w = 0, ΔU = qᵥ

**2. Work in Reversible Isothermal Expansion of Ideal Gas**

For a reversible isothermal expansion of n moles of ideal gas:
w_rev = −∫ᵥ₁^ᵥ₂ P_ext dV = −∫ᵥ₁^ᵥ₂ (nRT/V) dV = −nRT ln(V₂/V₁) = −nRT ln(P₁/P₂)

For free expansion (against zero external pressure): w = 0

For irreversible expansion against constant external pressure P_ext: w = −P_ext(V₂ − V₁)

⚡ **Exam tip**: In JEE, free expansion is a common trap. Students sometimes calculate w = −PΔV for free expansion, but since P_ext = 0, w = 0. Internal energy doesn't change in free expansion of ideal gas (U depends only on T), so ΔU = 0 for free expansion regardless of whether it's isothermal or adiabatic.

**3. Enthalpy — Types and Calculations**

**Standard enthalpy of formation (Δ_f H°)**: Enthalpy change when 1 mole of compound forms from its constituent elements in their standard states. By definition, Δ_f H° of any element in its standard state = 0.

**Enthalpy of combustion (Δ_c H°)**: Enthalpy change when 1 mole burns in O₂ completely.

**Enthalpy of neutralization**: For strong acid + strong base, ΔH = −57.1 kJ per equivalent. For weak acid or weak base, it's less exothermic because some energy is used to dissociate the weak electrolyte.

**Bond enthalpy**: Energy required to break 1 mole of bonds in gaseous molecules. Average bond enthalpy is used because bond energy varies slightly with environment.

**Example**: Calculate ΔH for combustion of CH₄: CH₄ + 2O₂ → CO₂ + 2H₂O
ΔH = [ΔH(C=O) in CO₂ × 2 + ΔH(O–H) × 4] − [ΔH(C–H) × 4 + ΔH(O=O) × 2]
= [(2 × 805) + (4 × 463)] − [(4 × 414) + (2 × 496)]
= (1610 + 1852) − (1656 + 992) = 3462 − 2648 = +814 kJ/mol

Wait: Combustion should be exothermic (−ΔH). Let me recalculate:
Actually: Bonds broken = 4(C–H) + 2(O=O) = 4(414) + 2(496) = 1656 + 992 = 2648 kJ (input)
Bonds formed = 2(C=O) + 4(O–H) = 2(805) + 4(463) = 1610 + 1852 = 3462 kJ (released)
ΔH = bonds broken − bonds formed = 2648 − 3462 = −814 kJ/mol ✓

**4. Kirchhoff's Law — Temperature Dependence of ΔH**

ΔH(T₂) = ΔH(T₁) + ∫_{T₁}^{T₂} ΔCₚ dT

If ΔCₚ is constant: ΔH(T₂) = ΔH(T₁) + ΔCₚ(T₂ − T₁)

Similarly: ΔS(T₂) = ΔS(T₁) + ∫_{T₁}^{T₂} (ΔCₚ/T) dT = ΔS(T₁) + ΔCₚ ln(T₂/T₁)

**Example**: Find ΔH at 500 K for a reaction where ΔH₂₉₈° = −92 kJ and ΔCₚ = −10 J/K.
ΔH₅₀₀ = −92 + (−10/1000) × (500 − 298) = −92 − 2.02 = −94.02 kJ

**5. Spontaneity — The Second and Third Laws**

**Second Law of Thermodynamics**: The total entropy of an isolated system always increases for a spontaneous process: ΔS_total = ΔS_system + ΔS_surroundings > 0

ΔS_surroundings = −ΔH_system/T (at constant P)

**Third Law**: At absolute zero (0 K), perfect crystalline solids have S = 0 (perfect order).

**Gibbs Free Energy and Spontaneity**:

At constant T and P: ΔG = ΔH − TΔS

| ΔH | ΔS | ΔG | Process |
|---|---|---|---|
| − | + | Always − | Always spontaneous |
| + | − | Always + | Never spontaneous |
| − | − | − at low T, + at high T | Spontaneous at low T |
| + | + | + at low T, − at high T | Spontaneous at high T |

**Example**: For water vaporization at 373 K, ΔH = +40.7 kJ/mol, ΔS = +109 J/K·mol
ΔG = 40.7 − 373 × 0.109 = 40.7 − 40.7 = 0 (at equilibrium, boiling point)

**6. Relationship Between ΔG and Equilibrium Constant**

ΔG° = −RT ln K (at T = 298 K: ΔG° = −5.708 log₁₀ K kJ/mol)
ΔG° = ΔG + RT ln Q (non-standard conditions)
At equilibrium: ΔG = 0, Q = K

**Example**: For a reaction, Kp = 10 at 298 K. Find ΔG°.
ΔG° = −RT ln K = −(8.314 × 10⁻³)(298) ln(10) = −2.478 × 2.303 = −5.71 kJ/mol
Or: ΔG° = −5.708 log₁₀(10) = −5.708 kJ/mol

⚡ **Exam tip**: When calculating ΔS for a reaction from standard molar entropies: ΔS°_reaction = Σ nS°(products) − Σ nS°(reactants). Pay attention to stoichiometric coefficients. Unlike enthalpy, entropy values are always positive for elements in their standard states.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Thermodynamics — Comprehensive JEE Advanced Notes**

**1. The Three Laws of Thermodynamics — Complete Understanding**

**Zeroth Law**: If two systems are each in thermal equilibrium with a third, they are in thermal equilibrium with each other. Establishes temperature as a fundamental property.

**First Law**: Energy can neither be created nor destroyed, only converted from one form to another. Mathematical: ΔU = q + w. This defines internal energy U as a state function — path independent. ΔU depends only on initial and final states, not how you got there.

**Second Law**: 
- Kelvin-Planck: No process is possible whose sole result is complete conversion of heat into work.
- Clausius: No process is possible whose sole result is transfer of heat from a colder body to a hotter body.
Both statements are equivalent and define the direction of spontaneous processes.

**Third Law**: Absolute entropy can be defined because S → 0 as T → 0 for a perfect crystal. Enables calculation of absolute entropy values.

**2. Heat Capacity — Detailed Treatment**

**Molar heat capacity at constant volume**: Cᵥ = (∂U/∂T)ᵥ
For monatomic ideal gas: Cᵥ = 3/2 R (only translational modes)
For diatomic: Cᵥ = 5/2 R (translational + rotational at moderate T)
For polyatomic: Cᵥ depends on number of atoms and molecular complexity

**Molar heat capacity at constant pressure**: Cₚ = Cᵥ + R
For ideal gas: H = U + PV = U + RT → dH = dU + RdT → Cₚ − Cᵥ = R ✓

**Ratio γ = Cₚ/Cᵥ**:
- Monatomic: γ = (5/2R)/(3/2R) = 5/3 ≈ 1.667
- Diatomic (no vib): γ = (7/2R)/(5/2R) = 7/5 = 1.4
- Used in adiabatic equations: PV^γ = const, TV^{γ−1} = const, TV^{γ−1} = const

**Adiabatic reversible expansion of ideal gas**:
w = (P₁V₁ − P₂V₂)/(γ − 1) = nR(T₁ − T₂)/(γ − 1)

**3. Calorimetry — Measurement of ΔU and ΔH**

**Coffee cup calorimeter** (constant pressure): Measures ΔH. Used for solution reactions.
q_reaction = −(m × c × ΔT) where m = total mass, c = specific heat capacity
ΔH = qₚ/mol of limiting reagent

**Bomb calorimeter** (constant volume): Measures ΔU. Used for combustion reactions.
q_reaction = −(C_cal × ΔT) where C_cal = heat capacity of calorimeter
ΔH = ΔU + Δn_g RT

**Example**: Combustion of naphthalene (C₁₀H₈) in bomb calorimeter:
ΔU_comb = −5153 kJ/mol
C₁₀H₈(l) + 12O₂(g) → 10CO₂(g) + 4H₂O(l)
Δn_g = 10 − 12 = −2
ΔH_comb = ΔU + Δn_g RT = −5153 + (−2)(8.314 × 10⁻³)(298) = −5153 + (−4.96) ≈ −5158 kJ/mol

**4. Thermochemistry of Phase Changes**

**Fusion (melting)**: ΔH_fus = T_fus × ΔS_fus
**Vaporization**: ΔH_vap = T_b × ΔS_vap
**Sublimation**: ΔH_sub = ΔH_fus + ΔH_vap

**Clausius-Clapeyron Equation** (relates vapor pressure to temperature):
ln(P₂/P₁) = −(ΔH_vap/R)(1/T₂ − 1/T₁)
This is crucial for calculating vapor pressure at any temperature, boiling point at different pressures.

** Trouton's Rule**: ΔH_vap/T_b ≈ 85–88 J/mol·K for many liquids
Exceptions: H₂O (109 J/mol·K — due to strong H-bonding), HF, NH₃ (higher — molecular association)

**5. Advanced Enthalpy Calculations**

**Enthalpy of solution**: ΔH_sol = ΔH_lattice + ΔH_hydration
For NaCl: Lattice energy = +787 kJ/mol, ΔH_hydration(Na⁺) = −406, ΔH_hydration(Cl⁻) = −364
ΔH_sol = +787 − 406 − 364 = +17 kJ/mol (endothermic, explains why NaCl dissolves better at higher T)

**Bond Enthalpy from Heat of Formation** (per bond):
For methane: CH₄(g) → C(g) + 4H(g): ΔH = 1665 kJ/mol
Each C–H bond: 1665/4 = 416 kJ/mol

**Resonance energy** (from thermochemical data):
Actual ΔH_f° of benzene = +49.8 kJ/mol (endothermic)
Calculated (hypothetical, Kekulé structure with 3 double bonds): Expected ~ 3 × 28.5 = 85.5 kJ/mol more negative
Resonance energy = actual − calculated = 49.8 − (−36) ≈ +86 kJ/mol (stabilization from delocalization)

**6. Gibbs-Helmholtz Equation — Temperature Dependence of ΔG**

(∂ΔG/T)_P = −ΔH/T²

Integrated form: ΔG(T₂)/T₂ − ΔG(T₁)/T₁ = ΔH(1/T₂ − 1/T₁)/T₁

Alternatively: ΔG(T) = ΔH° − TΔS° (with ΔH° and ΔS° at 298 K, assumes ΔH and ΔS are temperature-independent — valid when phase change not involved in the T range).

**Example problem**: For a reaction, ΔH° = +75 kJ/mol, ΔS° = +150 J/mol·K.
Find the temperature above which the reaction is spontaneous.
ΔG < 0 → T > ΔH/ΔS = 75000/150 = 500 K

**7. Thermodynamics of Electrochemical Cells**

For a cell: ΔG = −nFE_cell
E°_cell = (RT/nF) ln K = (2.303 RT/nF) log₁₀ K = (0.0591/n) log₁₀ K at 298 K

**Nernst Equation** (concentration dependence):
E_cell = E°_cell − (0.0591/n) log₁₀ Q at 298 K

**Temperature dependence of E°**:
E°(T₂)/E°(T₁) ≈ ΔG°(T₂)/ΔG°(T₁) = [ΔH° − T₂ΔS°]/[ΔH° − T₁ΔS°]

**8. Non-Ideal Behavior — Van der Waals Gas**

For real gases, the equation is:
(P + an²/V²)(V − nb) = nRT

**Joule-Thomson Effect** — Real gas cooling on expansion:
μ_JT = (∂T/∂P)_H = [T(∂V/∂T)_P − V]/Cₚ

At inversion temperature (μ_JT = 0), a gas neither heats nor cools on expansion. For N₂, T_inv ≈ 621 K (above room temperature, so N₂ cools on expansion at room T). For H₂, T_inv ≈ 202 K (below room T, so H₂ heats on expansion at room T — requires pre-cooling for liquefaction).

**9. Entropy from Statistical Thermodynamics**

S = k_B ln W where W = number of microstates, k_B = Boltzmann constant

For a perfect crystal at 0 K: W = 1 (unique ground state) → S = 0 ✓ (Third Law)

For mixing of two ideal gases: ΔS_mix = −nR(x₁ ln x₁ + x₂ ln x₂) > 0 (spontaneous mixing)

For expansion of ideal gas: ΔS = nR ln(V₂/V₁) (free or reversible isothermal)

⚡ **Exam tip**: Remember that ΔS_surroundings = −ΔH_system/T only when heat transfer to surroundings is reversible (which it is at constant T and P for a system at equilibrium). For irreversible processes, you must calculate ΔS_total separately. Common JEE trap: students use the same formula for ΔS_surroundings in both reversible and irreversible cases.

**10. Gibbs Paradox and Entropy of Mixing**

When two identical gases mix, there's no entropy change (no disorder increase since gases were already indistinguishable). But for different gases, ΔS_mix > 0. The apparent discontinuity at the point of becoming identical is the "Gibbs paradox."

This has implications in calculations: make sure you check whether gases are the same or different when computing entropy change of mixing.

⚡ **Exam tip**: In enthalpy calculations from combustion data, use the formula: ΔH°_f = ΔH°_comb(products) − ΔH°_comb(reactants). This is Hess's law applied to combustion enthalpies. For C(s, graphite), ΔH°_f is defined as zero by convention — so all carbon combustion energy goes into CO₂ formation.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
