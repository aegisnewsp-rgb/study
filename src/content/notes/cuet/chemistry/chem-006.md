---



exam: cuet
examName: CUET UG
subject: chemistry
subjectName: Chemistry
topic: chem-006
topicName: Thermodynamics
weight: 5
country: india
generated: "2026-03-24T08:32:07.838225"
diagramPrompt: Clear scientific diagram of Thermodynamics with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style



---
# Thermodynamics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Thermodynamics** — Key Facts for CUET

**Key Definitions:**
- System: The part of the universe being studied
- Surroundings: Everything else outside the system
- Open system: exchanges both matter and energy
- Closed system: exchanges only energy (no matter)
- Isolated system: exchanges neither matter nor energy
- State functions: Properties that depend only on initial and final states (not path) — examples: $U$, $H$, $S$, $G$

**First Law of Thermodynamics:**
$\Delta U = q + w$; energy cannot be created or destroyed. For a cyclic process, $\Delta U = 0$ and $q = -w$. Sign convention: heat absorbed by system is $+q$; work done by system is $+w$.

**Enthalpy:**
$H = U + PV$. For a process at constant pressure, $\Delta H = q_p$ (heat absorbed at constant pressure). Endothermic reactions have $\Delta H > 0$; exothermic reactions have $\Delta H < 0$.

** Hess's Law:** $\Delta H$ for a reaction is independent of the path taken — it is the same whether the reaction occurs in one step or several steps.

⚡ **Exam tip:** Always check state ($q_p$ vs $q_v$). $\Delta H = \Delta U + \Delta n_g \cdot RT$. For reactions where gas moles decrease, $|\Delta H| > |\Delta U|$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Thermodynamics** — Chemistry Study Guide

**Thermochemical Equations:**
When writing thermochemical equations, include:
- Balanced equation with physical states
- $\Delta H$ value with sign
- Stoichiometric coefficients (moles, not molecules)

Example: $2H_2(g) + O_2(g) \rightarrow 2H_2O(l); \Delta H = -572$ kJ/mol
This means 572 kJ is released when 2 moles of $H_2$ react with 1 mole of $O_2$ to form 2 moles of liquid water.

**Bond Enthalpies:**
Bond dissociation energy is the energy required to break one mole of bonds in a gaseous molecule. $\Delta H_{reaction} = \sum \Delta H_{bonds\ broken} - \sum \Delta H_{bonds\ formed}$.

Example: For $CH_4(g) \rightarrow C(g) + 4H(g)$: $\Delta H = 4 \times 414 = 1656$ kJ/mol (4 C–H bonds)

**Enthalpy of Formation:**
Standard enthalpy of formation $\Delta_f H^\circ$ is the enthalpy change when 1 mole of compound forms from its constituent elements in their standard states. By definition, $\Delta_f H^\circ$ of an element in its standard state = 0.

Standard enthalpy of reaction: $\Delta H^\circ = \sum n_p \Delta_f H^\circ(\text{products}) - \sum n_r \Delta_f H^\circ(\text{reactants})$

**Entropy:**
Entropy $S$ is a measure of disorder or randomness. Second law: $\Delta S_{universe} = \Delta S_{system} + \Delta S_{surroundings} > 0$ for a spontaneous process.

Standard entropy: $S^\circ$ (in J mol⁻¹ K⁻¹). For a reaction: $\Delta S^\circ = \sum n_p S^\circ(\text{products}) - \sum n_r S^\circ(\text{reactants})$.

**Gibbs Free Energy:**
$G = H - TS$. For a process at constant $T$ and $P$: $\Delta G = \Delta H - T\Delta S$. If $\Delta G < 0$, the process is spontaneous; if $\Delta G > 0$, non-spontaneous; if $\Delta G = 0$, equilibrium.

Effect of temperature on spontaneity:
- $\Delta H < 0, \Delta S > 0$: Always spontaneous (all $T$)
- $\Delta H > 0, \Delta S < 0$: Never spontaneous (all $T$)
- $\Delta H < 0, \Delta S < 0$: Spontaneous at low $T$ only
- $\Delta H > 0, \Delta S > 0$: Spontaneous at high $T$ only

**Relationship:** $\Delta G^\circ = -RT \ln K_{eq}$; also $\Delta G^\circ = -nFE^\circ_{cell}$ for electrochemical cells.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Thermodynamics** — Comprehensive Chemistry Notes

**First Law — Deeper Analysis:**

The first law is a statement of conservation of energy. For a finite change: $\Delta U = q + w$. Work $w$ has two components in chemistry:
- Pressure-volume work: $w = -P_{\text{ext}}\Delta V$ (for expansion, $\Delta V > 0$, so $w < 0$, system does work on surroundings)
- Non-PV work: $w_{\text{non-PV}}$ (electrical work, surface work, etc.)

For an isothermal reversible process of an ideal gas: $\Delta U = 0$, so $q = -w = nRT \ln(V_2/V_1) = nRT \ln(P_1/P_2)$. The work done BY the system is $w = -nRT \ln(V_2/V_1)$.

For an adiabatic reversible process ($q = 0$): $\Delta U = w$. For ideal gas: $w = C_V\Delta T$. For monatomic ideal gas, $C_V = (3/2)R$.

**Heat Capacity:**
- Molar heat capacity at constant volume: $C_V = (\partial U/\partial T)_V = (f/2)R$ where $f$ = degrees of freedom
- Molar heat capacity at constant pressure: $C_P = C_V + R = ((f/2) + 1)R$
- For monatomic gas ($f=3$): $C_V = 3R/2$, $C_P = 5R/2$, $\gamma = C_P/C_V = 5/3 = 1.67$
- For diatomic gas ($f=5$ at room temp): $C_V = 5R/2$, $C_P = 7R/2$, $\gamma = 7/5 = 1.4$

**Kirchhoff's Equation:**
$\left(\frac{\partial \Delta H}{\partial T}\right)_P = \Delta C_P$ and $\left(\frac{\partial \Delta S}{\partial T}\right)_P = \Delta C_P/T$. This allows calculation of $\Delta H$ at any temperature from $\Delta H^\circ_{298}$ and heat capacities.

**Born-Haber Cycle (Lattice Enthalpy):**
Lattice enthalpy $\Delta_{lattice}H$ is the energy required to separate one mole of an ionic solid into gaseous ions. It cannot be measured directly. Born-Haber cycle applies Hess's law:

$\Delta_f H^\circ = \Delta_{\text{atom}}H^\circ + \Delta_{\text{ion}}H^\circ + \Delta_{\text{ea}}H^\circ + \Delta_{\text{lattice}}H^\circ$

For NaCl: $\Delta_f H^\circ = 107 + 496 + (-349) + \Delta_{\text{lattice}}H$. Since $\Delta_f H^\circ = -411$ kJ/mol, $\Delta_{\text{lattice}}H = +787$ kJ/mol.

**Third Law of Thermodynamics:**
At absolute zero (0 K), a perfect crystalline substance has $S = 0$ J mol⁻¹ K⁻¹. This allows absolute entropies to be calculated: $S^\circ = \int_{0}^{298} (C_P/T)dT$ (accounting for phase transitions). Standard molar entropies at 298 K: $S^\circ(H_2,g) = 131$ J/mol·K; $S^\circ(CO_2,g) = 214$ J/mol·K; $S^\circ(H_2O,l) = 70$ J/mol·K.

**Spontaneity — Free Energy Criteria:**

The combined first and second law: $dU = TdS - PdV$ (for a reversible process in a closed system). From $G = H - TS$: $dG = dH - TdS - SdT$. At constant $T$ and $P$: $dG = TdS - PdV - TdS = -PdV$... wait, let me redo:

At constant $T$ and $P$: $dG = dH - TdS = (dU + PdV) - TdS = TdS - PdV + PdV - TdS = 0$ for reversible... Actually for any process: $dG \leq 0$ (spontaneous).

**Thermodynamic Equilibrium:**
At equilibrium, $\Delta G = 0$ and $K_{eq} = e^{-\Delta G^\circ/RT}$. van't Hoff equation: $\ln K_{eq} = -\Delta H^\circ/(RT) + \Delta S^\circ/R$. This gives $K$ at any temperature if $\Delta H^\circ$ and $\Delta S^\circ$ are known (assumed temperature-independent).

**Enthalpy of Solution:**
$\Delta_{solution}H = \Delta_{lattice}H + \Delta_{hydration}H$. For NaCl: $\Delta_{lattice}H = +787$ kJ/mol, $\Delta_{hydration}H = -784$ kJ/mol, so $\Delta_{solution}H = +3$ kJ/mol (slightly endothermic — why NaCl dissolves with slight cooling).

**Energy Resources:**
Standard enthalpy of combustion $\Delta_c H$: methane $-890$ kJ/mol, ethanol $-1367$ kJ/mol, glucose $-2800$ kJ/mol. The efficiency of energy conversion: $\eta = W/q_H = 1 - T_C/T_H$ (Carnot efficiency).

**CUET Exam Trends:**
Questions frequently ask: (1) Calculate $\Delta H$ using bond enthalpies, (2) Predict spontaneity using $\Delta G = \Delta H - T\Delta S$, (3) Hess's law problems from given thermochemical equations, (4) Relationship between $\Delta H$ and $\Delta U$ using $\Delta n_g$. Common mistake: forgetting the sign convention for $w$ and $q$.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
