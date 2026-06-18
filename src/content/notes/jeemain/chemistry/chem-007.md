---
exam: jeemain
examName: JEE Main
subject: chemistry
subjectName: Chemistry
topic: chem-007
topicName: Equilibrium
weight: 3
country: india
generated: "2026-03-28T21:09:20"
lastUpdated: "2026-06-18"
---

# Equilibrium

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Equilibrium** in a reversible reaction is the state where forward and reverse reaction rates become equal, so concentrations of reactants and products stay constant with time — this is called **dynamic equilibrium** because both reactions continue at the molecular level.

The backbone formulas:

- **Equilibrium constant (Kc):** Kc = [products]^coeff / [reactants]^coeff (concentrations of only aqueous/gaseous species at equilibrium).
- **Relation:** Kp = Kc(RT)^Δn_g, where Δn_g = gaseous moles (products − reactants).
- **Ionisation product of water:** Ka · Kb = Kw = 1.0 × 10⁻¹⁴ at 25 °C.
- **Henderson–Hasselbalch:** pH = pKa + log([salt]/[acid]) for an acidic buffer.

**High-yield JEE pointers:** (1) Kc changes only with temperature. (2) Heterogeneous equilibria omit pure solids and pure liquids. (3) Le Chatelier's principle predicts the direction of shift when concentration, pressure, or temperature is altered — frequently a 1–2 mark MCQ. (4) For a weak monoprotic acid, Ostwald's dilution law gives α = √(Ka/c).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Equilibrium Constant and Its Characteristics
For a reversible reaction aA + bB ⇌ cC + dD, the equilibrium constant is
Kc = [C]^c [D]^d / [A]^a [B]^b,
where each concentration is measured at equilibrium and raised to its stoichiometric coefficient. Kc is dimensionless when activities are used; with molar concentrations, its value carries the unit (mol L⁻¹)^Δn. The constant depends **only on temperature** — altering concentration, adding a catalyst, or changing pressure shifts the **position** of equilibrium but not the numerical value of Kc.

#### Kp, Kc, and the Δn_g Link
For gas-phase reactions, Kp is written with partial pressures:
Kp = (P_C)^c (P_D)^d / (P_A)^a (P_B)^b.
The two constants are related by
**Kp = Kc (RT)^Δn_g**, with R = 0.0821 L atm K⁻¹ mol⁻¹.
If Δn_g = 0, Kp = Kc. If Δn_g > 0, Kp increases with temperature; if Δn_g < 0, Kp decreases.

#### Reaction Quotient (Q) and Direction of Shift
Q has the same form as Kc but uses concentrations at any instant:
- Q < Kc ⇒ net reaction proceeds **forward**.
- Q > Kc ⇒ net reaction proceeds **reverse**.
- Q = Kc ⇒ system is at equilibrium.

#### Le Chatelier's Principle
When a system at equilibrium is disturbed, it shifts in the direction that counteracts the change:
- Adding reactant or removing product ⇒ forward shift.
- Adding product or removing reactant ⇒ backward shift.
- Increasing pressure (or decreasing volume) ⇒ shift toward the side with fewer gaseous moles.
- Raising temperature ⇒ shift in the endothermic direction.
- A catalyst speeds both directions equally, so it does **not** shift equilibrium.

#### Heterogeneous Equilibria
Pure solids and pure liquids have unit activity and are **excluded** from the Kc/Kp expression. For example, for CaCO₃(s) ⇌ CaO(s) + CO₂(g), only Kp = P_CO₂ appears.

#### Acids, Bases, and Buffers
A **buffer** resists pH change on adding small amounts of acid/base. An **acidic buffer** (weak acid + its conjugate base salt) obeys:
**pH = pKa + log([salt]/[acid])**.
The relation **Ka · Kb = Kw = 1.0 × 10⁻¹⁴ at 25 °C** lets you convert between an acid and its conjugate base. Buffer capacity is maximum when pH = pKa (i.e. [salt] = [acid]).

#### Solubility Product and Common Ion Effect
For a sparingly soluble salt like AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq), Ksp = [Ag⁺][Cl⁻]. Adding a **common ion** (e.g. NaCl supplying Cl⁻) decreases solubility — the dissolution equilibrium shifts backward. This is the **common ion effect**.

#### Salt Hydrolysis
- Salt of strong base + weak acid (e.g. CH₃COONa) ⇒ **basic** solution.
- Salt of weak base + strong acid (e.g. NH₄Cl) ⇒ **acidic** solution.
- Salt of strong base + strong acid (e.g. NaCl) ⇒ **neutral**.

#### Worked Snapshot
For 0.1 M CH₃COOH with Ka = 1.8 × 10⁻⁵, α = √(Ka/c) = √(1.8 × 10⁻⁵/0.1) = √(1.8 × 10⁻⁴) ≈ 1.34 × 10⁻², so [H⁺] ≈ 1.34 × 10⁻³ M and pH ≈ 2.87.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Ostwald's Dilution Law and α
For a weak monoprotic acid HA ⇌ H⁺ + A⁻ with initial concentration c,
Ka = (cα)² / [c(1−α)] ≈ cα² (when α ≪ 1), giving **α = √(Ka/c)**.
The degree of dissociation rises on dilution — a textbook application of Le Chatelier's principle (adding water shifts the equilibrium forward because [H⁺] and [A⁻] decrease).

#### Polyprotic Acid Hierarchy
For H₃PO₄: Ka1 ≈ 7.1 × 10⁻³, Ka2 ≈ 6.2 × 10⁻⁸, Ka3 ≈ 4.5 × 10⁻¹³. Each successive proton leaves from an anion already carrying negative charge, so dissociation becomes progressively harder; hence **Ka1 ≫ Ka2 ≫ Ka3**. JEE problems often use only Ka1, but recognizing the cascade explains multi-step titration curves.

#### Ksp and Precipitation
A precipitate forms only when the **ionic product (IP)** exceeds Ksp. If IP < Ksp, the solution is unsaturated; if IP = Ksp, it is saturated. Selective precipitation exploits differing Ksp values to separate ions (e.g. Group-I cations in qualitative analysis as chlorides).

#### Edge Cases That Trip Students Up
- **Units of K:** Kc has units unless activities are used; Kp likewise. Don't drop Δn_g when converting Kp ⇌ Kc.
- **Heterogeneous rule:** omitting solids/liquids is correct only if their activity is unity (pure phase). Dissolved species always count.
- **Temperature dependence of K:** K changes with T even though the equilibrium "position" changes with concentration/pressure — mixing these is a classic trap.
- **Buffer range:** a buffer is effective within pH = pKa ± 1; outside this range it loses capacity.
- **Henderson–Hasselbalch validity:** the equation assumes [salt] and [acid] approximate equilibrium concentrations — fails when one component is too dilute or the acid is too strong.

#### Connection to Electrochemistry
The Nernst equation E_cell = E°_cell − (RT/nF) ln Q is essentially the equilibrium condition E_cell = 0 ⇒ Q = K, linking ΔG° = −RT ln K with electrochemistry. Recognising this bridge helps in multi-concept JEE problems.

#### Exam Strategy for JEE Main
Equilibrium contributes about **3%** of the Chemistry paper — typically 1 numerical + 1 conceptual MCQ. Highest-weight sub-topics: Le Chatelier shifts, buffer pH calculations, Ksp / common ion effect, and Ka–Kb–pH interconversion. Numerical items usually give Ka and concentration and ask for pH, α, or degree of hydrolysis.

#### Practice Prompts
1. For N₂O₄(g) ⇌ 2NO₂(g), Kp = 0.36 atm at 100 °C. If pure N₂O₄ is taken at 1 atm total pressure, find the equilibrium partial pressure of NO₂. (Use Δn_g = 1, Kp = Kc(RT)¹.)
2. A buffer is prepared by mixing 0.2 M CH₃COOH and 0.3 M CH₃COONa. Given Ka = 1.8 × 10⁻⁵, calculate the pH and the new pH after adding 0.01 mol HCl to 1 L of the buffer. Verify that the change is small — the buffer's defining behaviour.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
