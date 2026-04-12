---
exam: jeeadvanced
examName: JEE Advanced
subject: chemistry
subjectName: Chemistry
topic: chem-009
topicName: Electrochemistry
weight: 5
country: india
generated: "2026-03-24T08:32:07.924630"
diagramPrompt: "Clear scientific diagram of Electrochemistry with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style

---

# Electrochemistry

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Electrochemistry** — Key Facts for JEE Advanced

**Galvanic vs Electrolytic Cells:**

| Cell | Galvanic (Voltaic) | Electrolytic |
|---|---|---|
| Energy | Electrical → Chemical | Chemical → Electrical |
| ΔG | ΔG < 0 (spontaneous) | ΔG > 0 (non-spontaneous) |
| Electrodes | Cathode = + (reduction) | Cathode = − (reduction) |
| | Anode = − (oxidation) | Anode = + (oxidation) |
| Example | Daniell cell | Electroplating |

**Standard Electrode Potentials:**
- E°(Mⁿ⁺/M) = standard reduction potential
- More positive E° = stronger oxidizing agent (undergoes reduction)
- More negative E° = stronger reducing agent (undergoes oxidation)
- E°cell = E°cathode − E°anode
- For the reverse reaction (oxidation): flip the sign

**Nernst Equation:**
E = E° − (RT/nF) ln Q (natural log)
At 298 K: E = E° − (0.0591/n) log₁₀ Q

**For cell reaction:** ΔG = −nFEcell
ΔG° = −nFE°cell
Also: E°cell = (0.0591/n) log₁₀ K ... at 298 K
K = 10^(nE°/0.0591)

**Common Redox Couples to Memorize:**
- Li⁺/Li: E° = −3.05 V
- Mg²⁺/Mg: E° = −2.37 V
- Al³⁺/Al: E° = −1.66 V
- Zn²⁺/Zn: E° = −0.76 V
- Fe²⁺/Fe: E° = −0.44 V
- Cu²⁺/Cu: E° = +0.34 V
- Ag⁺/Ag: E° = +0.80 V
- F₂/F⁻: E° = +2.87 V

⚡ **Exam Tip:** Never use E° values at 298 K without adjusting for temperature in non-standard conditions. The Nernst equation works for both cell potential and equilibrium constant calculations.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Electrochemistry** — Chemistry Study Guide

**Galvanic Cell Conventions:**

Cell notation (L→R = left to right = anode to cathode):
Anode | Anode ion || Cathode ion | Cathode

Example: Zn|Zn²⁺(1M)||Cu²⁺(1M)|Cu
E°cell = +0.34 − (−0.76) = +1.10 V

*For the reaction:* Zn(s) + Cu²⁺ → Zn²⁺ + Cu(s)

If concentrations differ, use Nernst equation:
Ecell = E°cell − (0.0591/2) log([Zn²⁺]/[Cu²⁺])

**Concentration Cells:**
Same electrodes, different concentrations. E°cell = 0.
Ecell = E°cell − (0.0591/n) log Q
But since E° = 0: Ecell = −(0.0591/n) log Q

For a concentration cell: Ecell = (0.0591/n) log([reduced]cathode × [oxidized]anode / ([reduced]anode × [oxidized]cathode))

**Equilibrium Constants from E°:**
ΔG° = −nFE°cell
ΔG° = −RT ln K
Therefore: −nFE°cell = −RT ln K
E°cell = (RT/nF) ln K = (2.303 RT/nF) log₁₀ K

At 298 K: E°cell = (0.0591/n) log₁₀ K
Or: log₁₀ K = nE°cell / 0.0591

*Example:* For the reaction 2Fe³⁺ + Sn²⁺ → 2Fe²⁺ + Sn⁴⁺
n = 2 (2 electrons transferred per Sn²⁺, Sn goes from +2 to +4)
E°cell = E°(Fe³⁺/Fe²⁺) − E°(Sn⁴⁺/Sn²⁺)
= +0.77 − (+0.15) = +0.62 V
log K = (2 × 0.62)/0.0591 = 20.98 → K ≈ 10²¹

**Electrolytic Cells:**

*Faraday's Laws of Electrolysis:*

1st Law: Mass deposited m = (Q × M) / (n × F)
where Q = It (coulombs), M = molar mass, n = electrons per atom, F = 96500 C/mol

2nd Law: Same Q deposits equivalent masses of different substances
Equivalents of A = Equivalents of B

*Key formulas:*
m = (E × I × t) / F where E = Equivalent mass = M/n
1 Faraday = 96500 C deposits 1 equivalent mass

**Faraday's Laws Applied to Mixtures:**

When multiple ions are present at an electrode:
- At cathode: The ion with more positive reduction potential gets reduced first
- At anode: The ion with more negative oxidation potential gets oxidized first

*Example: Electrolysis of aqueous NaCl*
At cathode: 2H₂O + 2e⁻ → H₂ + 2OH⁻ (E° = −0.83 V) is favored over Na⁺ + e⁻ → Na (E° = −2.71 V)
At anode: 2Cl⁻ → Cl₂ + 2e⁻ (E° = +1.36 V) is favored over 2H₂O → O₂ + 4H⁺ + 4e⁻ (E° = +1.23 V)
Overall: 2NaCl + 2H₂O → 2NaOH + H₂ + Cl₂

*Overvoltage:* In practice, O₂ formation at anode requires overpotential, making Cl⁻ oxidation preferred in brine electrolysis.

**Product Prediction in Electrolysis:**

*Using standard potentials (remember: in electrolytic cell, external source forces nonspontaneous reaction):*

At cathode (reduction):
- E° < −0.83 V: Only H₂O reduced to H₂ (aq. solutions) or metal deposited
- E° > −0.83 V: Metal may deposit if concentration is high

For some common ions:
- Cu²⁺/Cu: +0.34 V → Cu deposited readily
- Zn²⁺/Zn: −0.76 V → Zn deposited but H₂ also competes
- Al³⁺/Al: −1.66 V → Al NOT deposited from aqueous solution (water reduced instead)

At anode (oxidation):
- For metals more noble than Pt: Anode dissolves (metal oxidized)
- For Pt, Au, and others: H₂O oxidized to O₂ or anion oxidized

⚡ **Exam Tip:** In aqueous electrolyte, H₂O is always present and its reduction/oxidation competes with ions. Always check if E° for ion reduction is more or less than −0.83 V for H⁺/H₂ (or −0.41 V for neutral/alkaline water reduction) before deciding the product.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Electrochemistry** — Comprehensive Chemistry Notes

**Thermodynamic Basis of Electrochemistry:**

The connection between electrochemical thermodynamics and chemical equilibrium:

ΔG = ΔG° + RT ln Q
Since ΔG = −nFE and ΔG° = −nFE°:
−nFE = −nFE° + RT ln Q
E = E° − (RT/nF) ln Q

At 298 K: E = E° − (0.0591/n) log₁₀ Q

*Temperature dependence of E°:*
E° = ΔH°/nF − (ΔS°/nF) × T
Slope of E° vs T plot gives −ΔS°/nF
Intercept at T = 0 gives ΔH°/nF

**Equilibrium Constant and Gibbs Energy:**

For a cell reaction: aA + bB → cC + dD
Q = [C]^c[D]^d / [A]^a[B]^b

At equilibrium (E = 0): Q = K
0 = E° − (RT/nF) ln K
E° = (RT/nF) ln K

This provides a direct link between:
- Thermodynamic equilibrium constant K
- Standard cell potential E°
- Gibbs energy change ΔG°

*Practical implication:* A cell with E° > +0.4 V can drive reactions with K > 10¹⁴ at 298 K, effectively going to completion.

**The pH Meter Principle:**

Glass electrode (hydrogen ion selective):
2H₂O ↔ H₃O⁺ + OH⁻
E = E° − (0.0591/1) log[H⁺] = E° + 0.0591 pH

Measuring potential difference between glass electrode (measuring) and reference electrode gives pH directly.

**Battery Systems:**

*Primary Batteries (non-rechargeable):*

*Dry Cell (Leclanche):*
Anode: Zn → Zn²⁺ + 2e⁻
Cathode: 2NH₄⁺ + 2MnO₂ + 2e⁻ → Mn₂O₃ + 2NH₃ + H₂O
E ≈ 1.5 V
Limitation: Polarization due to NH₃ gas bubbles; not rechargeable

*Alkaline Battery:*
Anode: Zn + 2OH⁻ → ZnO + H₂O + 2e⁻
Cathode: 2MnO₂ + H₂O + 2e⁻ → Mn₂O₃ + 2OH⁻
E ≈ 1.54 V
Advantage: No gas evolution, no polarization, more capacity

*Mercury Battery (_button cell_):*
Anode: Zn + 2OH⁻ → ZnO + H₂O + 2e⁻
Cathode: HgO + H₂O + 2e⁻ → Hg + 2OH⁻
E ≈ 1.35 V
Stable voltage until nearly exhausted

*Lithium Battery (non-aqueous):*
Anode: Li → Li⁺ + e⁻ (organic electrolyte)
Cathode: MnO₂, SOCl₂, or other
E ≈ 3 V (high energy density, due to Li's very negative potential)

*Secondary Batteries (rechargeable):*

*Lead-acid battery:*
Anode (discharge): Pb + SO₄²⁻ → PbSO₄ + 2e⁻
Cathode (discharge): PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O
E ≈ 2.1 V per cell; 6 cells in series = 12.6 V
Advantage: Can be recharged; Pb and PbO₂ regenerated by reverse current
Limitation: Heavy (lead-based)

*Nickel-Cadmium (Ni-Cd):*
Anode: Cd + 2OH⁻ → Cd(OH)₂ + 2e⁻
Cathode: NiO(OH) + H₂O + e⁻ → Ni(OH)₂ + OH⁻
E ≈ 1.2 V
Advantage: Good for high current drain, memory effect (later superseded by NiMH)

*Lithium-ion battery:*
Anode: Li intercalated in graphite (LiC₆)
Cathode: LiCoO₂ or LiFePO₄
During discharge: Li⁺ moves from anode to cathode through electrolyte
E ≈ 3.6–3.7 V
Very high energy density; light weight

**Fuel Cells:**

*Alkaline fuel cell (AFC):*
Anode: 2H₂ + 4OH⁻ → 4H₂O + 4e⁻
Cathode: O₂ + 2H₂O + 4e⁻ → 4OH⁻
Overall: 2H₂ + O₂ → 2H₂O
E° = 1.23 V (theoretical); practical ~0.9 V due to overpotentials
Used in space missions (Apollo program)

*Hydrogen-Oxygen fuel cell (PEMFC):*
Similar principle but proton exchange membrane allows H⁺ transport
Efficiency: ~50–60% (vs ~35% for internal combustion)
Byproduct: Pure water

**Corrosion and Galvanic Series:**

*Mechanism of corrosion:*
Anodic areas: Fe → Fe²⁺ + 2e⁻ (metal dissolves)
Cathodic areas: O₂ + 2H₂O + 4e⁻ → 4OH⁻ (in neutral/alkaline medium)
or: O₂ + 4H⁺ + 4e⁻ → 2H₂O (in acidic medium)
Ferrous hydroxide rust forms: Fe²⁺ + 2OH⁻ → Fe(OH)₂ → Fe₂O₃·H₂O (rust)

*Factors accelerating corrosion:*
- Lower E° (more negative) of the metal
- Presence of electrolytes (NaCl accelerates rusting)
- Unequal aeration (concentration cells form)
- Low pH (acid accelerates)

*Prevention methods:*
- Galvanization: Zn coating (Zn is more negative, so acts as sacrificial anode)
- Cathodic protection: Connecting to a more active metal (e.g., Mg anode)
- Painting and coating
- Alloying (stainless steel with Cr forms passive Cr₂O₃ layer)

⚡ **Exam Tip:** In corrosion, the metal that acts as the anode corrodes. In galvanization, Zn is MORE ACTIVE than Fe, so Zn acts as the sacrificial anode, protecting iron even if coating is scratched. This is called sacrificial anode protection.

**Conductivity and Molar Conductivity:**

*Specific conductance (κ):*
κ = (1/ρ) where ρ is resistivity
Units: Ω⁻¹cm⁻¹ or S cm⁻¹

*Molar conductivity (Λ_m):*
Λ_m = κ × (1000/M) where M is molarity in mol/L
Units: Ω⁻¹cm²mol⁻¹ or S cm²mol⁻¹

*Kohlrausch's Law of independent ion migration:*
Λ_m° = ν⁺λ⁺° + ν⁻λ⁻°
where λ° are ionic conductivities at infinite dilution

*Applications:*
- Finding Λ_m° for weak electrolytes from strong electrolyte data
- Finding degree of dissociation: α = Λ_m / Λ_m°
- Finding solubility of sparingly soluble salts: K_sp = κ² × (1000/M) × correction factor

*Relation between concentration and conductivity:*
For strong electrolytes: Λ_m decreases with √C (Debye-Hückel-Onsager equation)
Λ_m = Λ_m° − (A + BΛ_m°)√C

**Industrial Electrochemistry:**

*Electroplating:*
For chrome plating:
Cathode: CrO₃ (in H₂SO₄) → Cr³⁺ → Cr deposited
Complex formation: Cr forms [Cr(H₂O)₅Cl]²⁺ type complexes
Requires high current density; Cr³⁺ is intermediate

*Electrorefining of copper:*
Impure Cu anode, pure Cu cathode, CuSO₄ solution as electrolyte
Anode: Cu → Cu²⁺ + 2e⁻ (impurities precipitate as anode mud containing Ag, Au, Pt)
Cathode: Cu²⁺ + 2e⁻ → Cu (99.99% pure)

*Electrowinning:* Extraction of metals from ores using electrolysis
*Electroplating of silver:* cyanide bath with Ag(CN)₂⁻ complex

**Advanced Nernst Equation Applications:**

*For complex ion formation:*
Ag⁺ + 2NH₃ → [Ag(NH₃)₂]⁺
E°([Ag(NH₃)₂]⁺/Ag) differs from E°(Ag⁺/Ag)
E°(complex) = E°(free ion) − (0.0591/n) log K_f
where K_f is formation constant

*JEE Example:* Calculate E° for [Ag(NH₃)₂]⁺/Ag given E°(Ag⁺/Ag) = +0.80 V and K_f = 1.67 × 10⁷
E°([Ag(NH₃)₂]⁺/Ag) = E°(Ag⁺/Ag) − (0.0591/1) log K_f
= 0.80 − 0.0591 × log(1.67 × 10⁷)
= 0.80 − 0.0591 × 7.22
= 0.80 − 0.43 ≈ 0.37 V

⚡ **Exam Tip:** The formation of complex ions makes the metal ion less available for reduction, so the reduction potential becomes less positive. This is a frequently tested concept in JEE Advanced — especially with [Ag(CN)₂]⁻ in silver plating.

**Biological Electrochemistry:**

*Nernst equation in nerve impulse:*
During depolarization: Na⁺ rushes in (E_Na ≈ +0.06 V inside relative to outside)
During repolarization: K⁺ exits (E_K ≈ −0.09 V)
Resting potential: −70 mV (difference maintained by Na⁺/K⁺-ATPase pump)

*Electrochemical gradient:* The combined effect of concentration gradient and electrical gradient on ion movement
For an ion with charge z: Δμ = RT ln([ion]_in/[ion]_out) + zFψ

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
