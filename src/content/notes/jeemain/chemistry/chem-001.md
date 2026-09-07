---
exam: jeemain
examName: JEE Main
subject: chemistry
subjectName: Chemistry
topic: chem-001
topicName: "Some Basic Concepts of Chemistry"
weight: 3
country: india
generated: "2026-03-28T21:08:51"
lastUpdated: "2026-09-07"
---

# Some Basic Concepts of Chemistry

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your JEE Main shift.

**Some Basic Concepts of Chemistry** (Mole Concept and Stoichiometry) is the quantitative foundation for all physical and inorganic chemistry in JEE Main. It directly yields 1–2 questions (4–8 marks) per shift and indirectly underpins Thermodynamics, Equilibrium, Electrochemistry, and Solutions. Memorize these core formulas and operational rules:

- **The Mole**: $n = \dfrac{w\,(	ext{g})}{M\,(	ext{g/mol})} = \dfrac{N}{N_A} = \dfrac{V_{	ext{gas at STP}}\,(	ext{L})}{22.4\,	ext{L}}$ (where $N_A = 6.022 	imes 10^{23}\,	ext{mol}^{-1}$; note that at modern IUPAC SATP standard $T=273.15\,	ext{K}, P=1\,	ext{bar}$, $V_m pprox 22.7\,	ext{L}$, but JEE Main traditionally evaluates STP at $1\,	ext{atm}$ with $22.4\,	ext{L}$).
- **Limiting Reagent (LR)**: For general reaction $aA + bB ightarrow cC + dD$, compute the mole-to-coefficient quotient:
  $$	ext{If } \dfrac{n_A}{a} < \dfrac{n_B}{b} \implies A 	ext{ is the limiting reagent}$$
  All theoretical product yields and reactant consumptions must be calculated strictly from the moles of the limiting reagent.
- **Concentration Metrics**:
  - *Molarity* ($M$): $\dfrac{n_{	ext{solute}}}{V_{	ext{solution}}	ext{ (in L)}}$ (temperature-dependent due to thermal expansion of solution volume).
  - *Molality* ($m$): $\dfrac{n_{	ext{solute}}}{w_{	ext{solvent}}	ext{ (in kg)}}$ (temperature-independent; depends only on invariant mass).
  - *Mole Fraction* ($x_A$): $\dfrac{n_A}{n_A + n_B}$, where $\sum x_i = 1$.
  - *Parts per Million* ($	ext{ppm}$): $\dfrac{w_{	ext{solute}}}{w_{	ext{solution}}} 	imes 10^6$.
- **Equivalent Weight ($E$) & Normality ($N$)**:
  $$E = \dfrac{M}{	ext{n-factor}}, \quad N = M 	imes 	ext{n-factor}, \quad 	ext{Gram Equivalents} = n 	imes 	ext{n-factor} = \dfrac{w}{E} = N 	imes V\,(	ext{L})$$
  At chemical equivalence: $	ext{Equivalents of Oxidant} = 	ext{Equivalents of Reductant}$ ($N_1 V_1 = N_2 V_2$).
- **Volume Strength of $	ext{H}_2	ext{O}_2$**:
  $$	ext{Volume Strength} = 11.2 	imes M = 5.6 	imes N$$

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### 1. Laws of Chemical Combination & Atomic Mass Scale

Five classical empirical laws govern stoichiometry. Understanding their molecular basis prevents conceptual errors in assertion-reasoning items:

| Law | Formulator | Fundamental Premise | Modern Theoretical Basis / Exception |
|:---|:---|:---|:---|
| **Conservation of Mass** | Antoine Lavoisier (1789) | Total mass of reactants equals total mass of products in a closed chemical system. | Violated in nuclear transformations where mass-energy equivalence ($\Delta E = \Delta m \cdot c^2$) operates. |
| **Definite Proportions** | Joseph Proust (1799) | A given chemical compound always contains exactly the same proportion of elements by mass regardless of source. | Fails for non-stoichiometric berthollide compounds (e.g., wüstite $	ext{Fe}_{0.95}	ext{O}$) and isotopic variations ($	ext{H}_2	ext{O}$ vs $	ext{D}_2	ext{O}$). |
| **Multiple Proportions** | John Dalton (1803) | When two elements combine to form more than one compound, masses of one element combining with fixed mass of other are in small whole-number ratios. | Illustrated by nitrogen oxides ($	ext{N}_2	ext{O}, 	ext{NO}, 	ext{N}_2	ext{O}_3, 	ext{NO}_2, 	ext{N}_2	ext{O}_5$) where oxygen masses ratio as $1:2:3:4:5$. |
| **Reciprocal Proportions** | Jeremias Richter (1792) | If two elements $A$ and $B$ combine separately with fixed mass of $C$, the ratio of masses in which they do so is same or a simple multiple of the ratio in which $A$ and $B$ combine. | Direct operational precursor to equivalent weights. |
| **Gaseous Volumes** | Gay-Lussac (1808) | Gases react in simple whole-number volume ratios when measured at identical temperature and pressure. | Direct manifestation of Avogadro's hypothesis ($V \propto n$ at constant $T, P$). |

#### 2. Concentration Interconversions Matrix

In JEE Main numerical response questions, examiners frequently give solution density $d$ (in $	ext{g/mL}$ or $	ext{g/cm}^3$) and require rapid switching between molarity, molality, and mole fraction. Derive and memorize these exact interconversions:

```
                  ┌──────────────────────────────┐
                  │    Mole Fraction (x_solute)  │
                  └───────▲──────────────▲───────┘
                          │              │
           x_B = m·M_A /  │              │  m = 1000·x_B /
           (1 + m·M_A)    │              │  [x_A · M_A]
                          ▼              ▼
                 ┌─────────────┐    ┌─────────────┐
                 │Molality (m) │◄──►│Molarity (M) │
                 └─────────────┘    └─────────────┘
                     m = 1000·M / (1000·d - M·M_B)
                     M = 1000·d·m / (1000 + m·M_B)
```

1. **Molality ($m$) from Molarity ($M$) and Solution Density ($d$)**:
   Let solution volume $= 1\,	ext{L} = 1000\,	ext{mL}$.
   - Mass of solution $= 1000 	imes d\,	ext{g}$.
   - Moles of solute $= M\,	ext{mol}$.
   - Mass of solute $= M 	imes M_B\,	ext{g}$ (where $M_B$ is solute molar mass).
   - Mass of solvent $= (1000\,d - M \cdot M_B)\,	ext{g} = \dfrac{1000\,d - M \cdot M_B}{1000}\,	ext{kg}$.
   - Therefore:
     $$m = \dfrac{1000 	imes M}{1000\,d - M \cdot M_B}$$

2. **Molarity ($M$) from Mass Percentage ($x\% = 	ext{w/w}\%$) and Density ($d$)**:
   $$M = \dfrac{x 	imes d 	imes 10}{M_B}$$

3. **Mole Fraction of Solute ($x_B$) from Molality ($m$) in Aqueous Medium ($M_A = 18\,	ext{g/mol}$)**:
   $$x_B = \dfrac{m}{m + \dfrac{1000}{18}} = \dfrac{m}{m + 55.55}$$

#### 3. Empirical & Molecular Formula Determination

The empirical formula expresses the simplest positive integer ratio of atoms present in a compound, while the molecular formula reflects actual atomic counts:
$$	ext{Molecular Formula} = (	ext{Empirical Formula})_n, \quad 	ext{where } n = \dfrac{	ext{Molar Mass}}{	ext{Empirical Formula Mass}}$$

##### Combustion Analysis Mechanics
For an unknown hydrocarbon or oxygenated organic compound $	ext{C}_x	ext{H}_y	ext{O}_z$ subjected to complete combustion:
- All carbon converts to $	ext{CO}_2$:
  $$w_{	ext{C}} = w_{	ext{CO}_2} 	imes \dfrac{12.011}{44.01}, \quad \%\,	ext{C} = \dfrac{w_{	ext{C}}}{w_{	ext{sample}}} 	imes 100$$
- All hydrogen converts to $	ext{H}_2	ext{O}$:
  $$w_{	ext{H}} = w_{	ext{H}_2	ext{O}} 	imes \dfrac{2.016}{18.015}, \quad \%\,	ext{H} = \dfrac{w_{	ext{H}}}{w_{	ext{sample}}} 	imes 100$$
- Oxygen is determined by difference:
  $$\%\,	ext{O} = 100 - (\%\,	ext{C} + \%\,	ext{H} + \dots)$$

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### 1. Rigorous n-Factor Calculation Rules

The n-factor represents the number of moles of electrons exchanged, protons donated/accepted, or total cationic/anionic charge per mole of the reacting substance.

| Substance Type | Definition of n-Factor | Illustrative Reaction / Species | Calculated n-Factor |
|:---|:---|:---|:---:|
| **Acid** | Basicity (number of replaceable $	ext{H}^+$ ions per molecule) | $	ext{H}_3	ext{PO}_4$ (Phosphoric acid, 3 ionizable protons)<br>$	ext{H}_3	ext{PO}_3$ (Phosphorous acid, 2 ionizable protons)<br>$	ext{H}_3	ext{PO}_2$ (Hypophosphorous acid, 1 ionizable proton) | $3$<br>$2$<br>$1$ |
| **Base** | Acidity (number of replaceable $	ext{OH}^-$ ions per molecule) | $	ext{Ca(OH)}_2$<br>$	ext{Al(OH)}_3$ | $2$<br>$3$ |
| **Salt (Non-redox)** | Total magnitude of positive or negative electrical charge | $	ext{Al}_2(	ext{SO}_4)_3 ightarrow 2	ext{Al}^{3+} + 3	ext{SO}_4^{2-}$ (total positive charge $= 2 	imes 3 = 6$) | $6$ |
| **Double Salt** | Total reacting ionic charge of participating cations | Mohr's Salt: $	ext{FeSO}_4\cdot(	ext{NH}_4)_2	ext{SO}_4\cdot6	ext{H}_2	ext{O}$ in non-redox dissolution | $2 + 2 = 4$ |
| **Mohr's Salt in Redox** | Change in oxidation state of iron ($	ext{Fe}^{2+} ightarrow 	ext{Fe}^{3+} + e^-$) | $	ext{Fe}^{2+} ightarrow 	ext{Fe}^{3+}$ | $1$ |
| **$	ext{KMnO}_4$ (Acidic)** | Reduction of $	ext{Mn}^{7+} + 5e^- ightarrow 	ext{Mn}^{2+}$ | $	ext{MnO}_4^- + 8	ext{H}^+ + 5e^- ightarrow 	ext{Mn}^{2+} + 4	ext{H}_2	ext{O}$ | $5$ |
| **$	ext{KMnO}_4$ (Faint Alkaline/Neutral)** | Reduction of $	ext{Mn}^{7+} + 3e^- ightarrow 	ext{Mn}^{4+}$ | $	ext{MnO}_4^- + 2	ext{H}_2	ext{O} + 3e^- ightarrow 	ext{MnO}_2 + 4	ext{OH}^-$ | $3$ |
| **$	ext{KMnO}_4$ (Strong Alkaline)** | Reduction of $	ext{Mn}^{7+} + 1e^- ightarrow 	ext{Mn}^{6+}$ | $	ext{MnO}_4^- + e^- ightarrow 	ext{MnO}_4^{2-}$ (manganate ion) | $1$ |
| **$	ext{K}_2	ext{Cr}_2	ext{O}_7$ (Acidic)** | Reduction of $2	ext{Cr}^{6+} + 6e^- ightarrow 2	ext{Cr}^{3+}$ | $	ext{Cr}_2	ext{O}_7^{2-} + 14	ext{H}^+ + 6e^- ightarrow 2	ext{Cr}^{3+} + 7	ext{H}_2	ext{O}$ | $6$ |
| **Oxalic Acid / Oxalate** | Oxidation of $	ext{C}_2	ext{O}_4^{2-} ightarrow 2	ext{CO}_2 + 2e^-$ | Carbon changes from $+3$ to $+4$ for 2 carbon atoms | $2$ |
| **$	ext{FeC}_2	ext{O}_4$ (Ferrous Oxalate)** | Both cation and anion oxidized: $	ext{Fe}^{2+} ightarrow 	ext{Fe}^{3+} (1e^-)$ and $	ext{C}_2	ext{O}_4^{2-} ightarrow 2	ext{CO}_2 (2e^-)$ | Total electrons lost per mole of $	ext{FeC}_2	ext{O}_4 = 1 + 2 = 3$ | $3$ |
| **Disproportionation** | Reaction where single species is simultaneously oxidized and reduced | $	ext{Br}_2 ightarrow 	ext{Br}^- + 	ext{BrO}_3^-$: $n_{	ext{factor}} = \dfrac{n_{	ext{ox}} 	imes n_{	ext{red}}}{n_{	ext{ox}} + n_{	ext{red}}}$ | $\dfrac{10 	imes 2}{10 + 2} = \dfrac{5}{3}$ |

#### 2. Hydrogen Peroxide ($	ext{H}_2	ext{O}_2$) Volume Strength Derivation

The decomposition reaction of hydrogen peroxide is:
$$2	ext{H}_2	ext{O}_2\,(	ext{aq}) \longrightarrow 2	ext{H}_2	ext{O}\,(	ext{l}) + 	ext{O}_2\,(	ext{g})$$

- $2\,	ext{moles of } 	ext{H}_2	ext{O}_2$ produce $1\,	ext{mole of } 	ext{O}_2 = 22.4\,	ext{L of } 	ext{O}_2 	ext{ at STP}$.
- Therefore, $1\,	ext{mole of } 	ext{H}_2	ext{O}_2$ yields $11.2\,	ext{L of } 	ext{O}_2 	ext{ at STP}$.
- If solution molarity is $M\,	ext{mol/L}$, then $1\,	ext{L of solution}$ contains $M\,	ext{moles of } 	ext{H}_2	ext{O}_2$, releasing $M 	imes 11.2\,	ext{L of } 	ext{O}_2$ at STP.
- Hence:
  $$	ext{Volume Strength (in volumes)} = 11.2 	imes 	ext{Molarity } (M)$$
- Since for $	ext{H}_2	ext{O}_2$ in redox reactions ($2e^-$ exchange per mole), $	ext{n-factor} = 2$, we have $N = 2 	imes M \implies M = \dfrac{N}{2}$.
  $$	ext{Volume Strength} = 11.2 	imes \left(\dfrac{N}{2}ight) = 5.6 	imes 	ext{Normality } (N)$$
- Percentage strength $(	ext{w/v}\%)$:
  $$\%\,(	ext{w/v}) = \dfrac{	ext{Volume Strength} 	imes 34}{224} = \dfrac{	ext{Volume Strength}}{6.588}$$

#### 3. Hardness of Water & Calcium Carbonate Equivalence

Water hardness is expressed in parts per million ($	ext{ppm}$) of equivalent $	ext{CaCO}_3$:
$$	ext{Hardness (in ppm of } 	ext{CaCO}_3) = \dfrac{	ext{Mass of } 	ext{CaCO}_3 	ext{ equivalent}}{	ext{Total mass of water sample}} 	imes 10^6$$

To convert any hardness-causing salt into $	ext{CaCO}_3$ equivalents, equate gram equivalents:
$$	ext{Equivalents of salt} = 	ext{Equivalents of } 	ext{CaCO}_3$$
$$\dfrac{w_{	ext{salt}}}{E_{	ext{salt}}} = \dfrac{w_{	ext{CaCO}_3}}{E_{	ext{CaCO}_3}} \implies w_{	ext{CaCO}_3} = w_{	ext{salt}} 	imes \left(\dfrac{E_{	ext{CaCO}_3}}{E_{	ext{salt}}}ight) = w_{	ext{salt}} 	imes \left(\dfrac{50}{E_{	ext{salt}}}ight)$$

| Hardness-Producing Compound | Molar Mass ($	ext{g/mol}$) | n-Factor | Equivalent Weight ($E$) | Conversion Factor to $	ext{CaCO}_3$ ($50 / E$) |
|:---|:---:|:---:|:---:|:---:|
| $	ext{CaCO}_3$ | $100$ | $2$ | $50$ | $1.000$ |
| $	ext{MgCO}_3$ | $84$ | $2$ | $42$ | $50 / 42 pprox 1.190$ |
| $	ext{Ca(HCO}_3)_2$ | $162$ | $2$ | $81$ | $50 / 81 pprox 0.617$ |
| $	ext{Mg(HCO}_3)_2$ | $146$ | $2$ | $73$ | $50 / 73 pprox 0.685$ |
| $	ext{CaCl}_2$ | $111$ | $2$ | $55.5$ | $50 / 55.5 pprox 0.901$ |
| $	ext{MgSO}_4$ | $120$ | $2$ | $60$ | $50 / 60 pprox 0.833$ |

---

### 📝 Step-by-Step Worked Problems (JEE Main Numerical Drills)

#### Problem 1: Multi-Step Limiting Reagent & Percentage Yield
**Question**: $20.0\,	ext{g}$ of a sample of calcium carbonate ($	ext{CaCO}_3$, molar mass $100.0\,	ext{g/mol}$) containing $20\%$ inert impurities is treated with $50.0\,	ext{mL}$ of $4.0\,	ext{M}$ aqueous hydrochloric acid ($	ext{HCl}$). Calculate:
1. Which reactant is the limiting reagent?
2. The volume of dry $	ext{CO}_2$ gas collected at STP ($1\,	ext{atm}, 273.15\,	ext{K}$).
3. The percentage yield if the experimental volume of $	ext{CO}_2$ collected was $1.792\,	ext{L}$.

**Solution**:
1. *Purity calculation*:
   Pure $	ext{CaCO}_3 = 20.0\,	ext{g} 	imes (1 - 0.20) = 16.0\,	ext{g}$.
   $$n_{	ext{CaCO}_3} = \dfrac{16.0}{100.0} = 0.160\,	ext{mol}$$
2. *Hydrochloric acid calculation*:
   $$n_{	ext{HCl}} = M 	imes V\,(	ext{L}) = 4.0\,	ext{mol/L} 	imes 0.050\,	ext{L} = 0.200\,	ext{mol}$$
3. *Balanced chemical reaction*:
   $$	ext{CaCO}_3 + 2	ext{HCl} \longrightarrow 	ext{CaCl}_2 + 	ext{H}_2	ext{O} + 	ext{CO}_2$$
4. *Determine limiting reagent*:
   - For $	ext{CaCO}_3$: $\dfrac{n}{1} = \dfrac{0.160}{1} = 0.160$.
   - For $	ext{HCl}$: $\dfrac{n}{2} = \dfrac{0.200}{2} = 0.100$.
   Since $0.100 < 0.160$, **$	ext{HCl}$ is the limiting reagent**.
5. *Theoretical yield of $	ext{CO}_2$*:
   $$n_{	ext{CO}_2} = \dfrac{1}{2} 	imes n_{	ext{HCl}} = \dfrac{1}{2} 	imes 0.200 = 0.100\,	ext{mol}$$
   $$V_{	ext{CO}_2	ext{ (STP)}} = 0.100\,	ext{mol} 	imes 22.4\,	ext{L/mol} = 2.240\,	ext{L}$$
6. *Percentage yield*:
   $$\%\,	ext{Yield} = \dfrac{	ext{Actual Yield}}{	ext{Theoretical Yield}} 	imes 100 = \dfrac{1.792\,	ext{L}}{2.240\,	ext{L}} 	imes 100 = 80.0\%$$

#### Problem 2: Redox Titration with Ferrous Oxalate
**Question**: How many moles of potassium permanganate ($	ext{KMnO}_4$) are required to completely oxidize $1.0\,	ext{mole}$ of ferrous oxalate ($	ext{FeC}_2	ext{O}_4$) in an acidic medium?

**Solution**:
1. *Oxidation half-reactions for $	ext{FeC}_2	ext{O}_4$*:
   - $	ext{Fe}^{2+} \longrightarrow 	ext{Fe}^{3+} + e^-$ ($1e^-$ lost)
   - $	ext{C}_2	ext{O}_4^{2-} \longrightarrow 2	ext{CO}_2 + 2e^-$ ($2e^-$ lost)
   - Total electrons lost per formula unit of $	ext{FeC}_2	ext{O}_4 = 1 + 2 = 3$.
   - Therefore, $	ext{n-factor of } 	ext{FeC}_2	ext{O}_4 = 3$.
2. *Reduction half-reaction for $	ext{KMnO}_4$ in acidic medium*:
   - $	ext{MnO}_4^- + 8	ext{H}^+ + 5e^- \longrightarrow 	ext{Mn}^{2+} + 4	ext{H}_2	ext{O}$
   - Electrons gained per formula unit $= 5$.
   - Therefore, $	ext{n-factor of } 	ext{KMnO}_4 = 5$.
3. *Equating gram equivalents*:
   $$	ext{Equivalents of } 	ext{KMnO}_4 = 	ext{Equivalents of } 	ext{FeC}_2	ext{O}_4$$
   $$n_{	ext{KMnO}_4} 	imes (	ext{n-factor})_{	ext{KMnO}_4} = n_{	ext{FeC}_2	ext{O}_4} 	imes (	ext{n-factor})_{	ext{FeC}_2	ext{O}_4}$$
   $$n_{	ext{KMnO}_4} 	imes 5 = 1.0 	imes 3$$
   $$n_{	ext{KMnO}_4} = \dfrac{3}{5} = 0.60\,	ext{mol}$$

---

### ⚠️ Common Traps & High-Yield Pitfalls in JEE Main

1. **Confusing Molality with Molarity**: In diluted aqueous solutions, $m pprox M$, but in concentrated solutions ($d 
e 1\,	ext{g/mL}$), they diverge sharply. Always use $1000\,d - M \cdot M_B$ in the denominator for molality.
2. **STP Definition Nuance**: Old STP was $1\,	ext{atm}, 0\,^\circ	ext{C}$ ($22.4\,	ext{L/mol}$). Modern IUPAC STP is $1\,	ext{bar}, 0\,^\circ	ext{C}$ ($22.7\,	ext{L/mol}$). Unless explicitly instructed with 1 bar or $R = 0.08314\,	ext{L bar K}^{-1}	ext{mol}^{-1}$, JEE Main answer keys evaluate molar volume as $22.4\,	ext{L}$.
3. **Disproportionation n-factor**: Never add individual n-factors directly for disproportionation. Use $\dfrac{n_1 	imes n_2}{n_1 + n_2}$ per mole of reactant.
4. **Phosphorus Oxyacids**: $	ext{H}_3	ext{PO}_3$ has three hydrogens in its empirical formula but only two $	ext{P}-	ext{OH}$ bonds (the third hydrogen is directly bound as $	ext{P}-	ext{H}$ and is non-ionizable). Its basicity and n-factor in acid-base neutralizations is strictly $2$.
5. **Oxalate vs Ferrous Oxalate**: $	ext{H}_2	ext{C}_2	ext{O}_4$ has n-factor $2$ in redox titrations, but $	ext{FeC}_2	ext{O}_4$ has n-factor $3$ because the ferrous ion also oxidizes to ferric.

---
*For interactive question banks and comprehensive revision roadmaps, explore the [/exams/jeemain/](/exams/jeemain/) portal.*
