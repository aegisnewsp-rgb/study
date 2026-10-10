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

- **The Mole**: $n = \dfrac{w\,(\text{g})}{M\,(\text{g/mol})} = \dfrac{N}{N_A} = \dfrac{V_{\text{gas at STP}}\,(\text{L})}{22.4\,\text{L}}$ (where $N_A = 6.022 \times 10^{23}\,\text{mol}^{-1}$; note that at modern IUPAC SATP standard $T=273.15\,\text{K}, P=1\,\text{bar}$, $V_m \approx 22.7\,\text{L}$, but JEE Main traditionally evaluates STP at $1\,\text{atm}$ with $22.4\,\text{L}$).
- **Limiting Reagent (LR)**: For general reaction $aA + bB \rightarrow cC + dD$, compute the mole-to-coefficient quotient:
  $$\text{If } \dfrac{n_A}{a} < \dfrac{n_B}{b} \implies A \text{ is the limiting reagent}$$
  All theoretical product yields and reactant consumptions must be calculated strictly from the moles of the limiting reagent.
- **Concentration Metrics**:
  - *Molarity* ($M$): $\dfrac{n_{\text{solute}}}{V_{\text{solution}}\text{ (in L)}}$ (temperature-dependent due to thermal expansion of solution volume).
  - *Molality* ($m$): $\dfrac{n_{\text{solute}}}{w_{\text{solvent}}\text{ (in kg)}}$ (temperature-independent; depends only on invariant mass).
  - *Mole Fraction* ($x_A$): $\dfrac{n_A}{n_A + n_B}$, where $\sum x_i = 1$.
  - *Parts per Million* ($\text{ppm}$): $\dfrac{w_{\text{solute}}}{w_{\text{solution}}} \times 10^6$.
- **Equivalent Weight ($E$) & Normality ($N$)**:
  $$E = \dfrac{M}{\text{n-factor}}, \quad N = M \times \text{n-factor}, \quad \text{Gram Equivalents} = n \times \text{n-factor} = \dfrac{w}{E} = N \times V\,(\text{L})$$
  At chemical equivalence: $\text{Equivalents of Oxidant} = \text{Equivalents of Reductant}$ ($N_1 V_1 = N_2 V_2$).
- **Volume Strength of $\text{H}_2\text{O}_2$**:
  $$\text{Volume Strength} = 11.2 \times M = 5.6 \times N$$

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### 1. Laws of Chemical Combination & Atomic Mass Scale

Five classical empirical laws govern stoichiometry. Understanding their molecular basis prevents conceptual errors in assertion-reasoning items:

| Law | Formulator | Fundamental Premise | Modern Theoretical Basis / Exception |
|:---|:---|:---|:---|
| **Conservation of Mass** | Antoine Lavoisier (1789) | Total mass of reactants equals total mass of products in a closed chemical system. | Violated in nuclear transformations where mass-energy equivalence ($\Delta E = \Delta m \cdot c^2$) operates. |
| **Definite Proportions** | Joseph Proust (1799) | A given chemical compound always contains exactly the same proportion of elements by mass regardless of source. | Fails for non-stoichiometric berthollide compounds (e.g., wüstite $\text{Fe}_{0.95}\text{O}$) and isotopic variations ($\text{H}_2\text{O}$ vs $\text{D}_2\text{O}$). |
| **Multiple Proportions** | John Dalton (1803) | When two elements combine to form more than one compound, masses of one element combining with fixed mass of other are in small whole-number ratios. | Illustrated by nitrogen oxides ($\text{N}_2\text{O}, \text{NO}, \text{N}_2\text{O}_3, \text{NO}_2, \text{N}_2\text{O}_5$) where oxygen masses ratio as $1:2:3:4:5$. |
| **Reciprocal Proportions** | Jeremias Richter (1792) | If two elements $A$ and $B$ combine separately with fixed mass of $C$, the ratio of masses in which they do so is same or a simple multiple of the ratio in which $A$ and $B$ combine. | Direct operational precursor to equivalent weights. |
| **Gaseous Volumes** | Gay-Lussac (1808) | Gases react in simple whole-number volume ratios when measured at identical temperature and pressure. | Direct manifestation of Avogadro's hypothesis ($V \propto n$ at constant $T, P$). |

#### 2. Concentration Interconversions Matrix

In JEE Main numerical response questions, examiners frequently give solution density $d$ (in $\text{g/mL}$ or $\text{g/cm}^3$) and require rapid switching between molarity, molality, and mole fraction. Derive and memorize these exact interconversions:

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
   Let solution volume $= 1\,\text{L} = 1000\,\text{mL}$.
   - Mass of solution $= 1000 \times d\,\text{g}$.
   - Moles of solute $= M\,\text{mol}$.
   - Mass of solute $= M \times M_B\,\text{g}$ (where $M_B$ is solute molar mass).
   - Mass of solvent $= (1000\,d - M \cdot M_B)\,\text{g} = \dfrac{1000\,d - M \cdot M_B}{1000}\,\text{kg}$.
   - Therefore:
     $$m = \dfrac{1000 \times M}{1000\,d - M \cdot M_B}$$

2. **Molarity ($M$) from Mass Percentage ($x\% = \text{w/w}\%$) and Density ($d$)**:
   $$M = \dfrac{x \times d \times 10}{M_B}$$

3. **Mole Fraction of Solute ($x_B$) from Molality ($m$) in Aqueous Medium ($M_A = 18\,\text{g/mol}$)**:
   $$x_B = \dfrac{m}{m + \dfrac{1000}{18}} = \dfrac{m}{m + 55.55}$$

#### 3. Empirical & Molecular Formula Determination

The empirical formula expresses the simplest positive integer ratio of atoms present in a compound, while the molecular formula reflects actual atomic counts:
$$\text{Molecular Formula} = (\text{Empirical Formula})_n, \quad \text{where } n = \dfrac{\text{Molar Mass}}{\text{Empirical Formula Mass}}$$

##### Combustion Analysis Mechanics
For an unknown hydrocarbon or oxygenated organic compound $\text{C}_x\text{H}_y\text{O}_z$ subjected to complete combustion:
- All carbon converts to $\text{CO}_2$:
  $$w_{\text{C}} = w_{\text{CO}_2} \times \dfrac{12.011}{44.01}, \quad \%\,\text{C} = \dfrac{w_{\text{C}}}{w_{\text{sample}}} \times 100$$
- All hydrogen converts to $\text{H}_2\text{O}$:
  $$w_{\text{H}} = w_{\text{H}_2\text{O}} \times \dfrac{2.016}{18.015}, \quad \%\,\text{H} = \dfrac{w_{\text{H}}}{w_{\text{sample}}} \times 100$$
- Oxygen is determined by difference:
  $$\%\,\text{O} = 100 - (\%\,\text{C} + \%\,\text{H} + \dots)$$

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### 1. Rigorous n-Factor Calculation Rules

The n-factor represents the number of moles of electrons exchanged, protons donated/accepted, or total cationic/anionic charge per mole of the reacting substance.

| Substance Type | Definition of n-Factor | Illustrative Reaction / Species | Calculated n-Factor |
|:---|:---|:---|:---:|
| **Acid** | Basicity (number of replaceable $\text{H}^+$ ions per molecule) | $\text{H}_3\text{PO}_4$ (Phosphoric acid, 3 ionizable protons)<br>$\text{H}_3\text{PO}_3$ (Phosphorous acid, 2 ionizable protons)<br>$\text{H}_3\text{PO}_2$ (Hypophosphorous acid, 1 ionizable proton) | $3$<br>$2$<br>$1$ |
| **Base** | Acidity (number of replaceable $\text{OH}^-$ ions per molecule) | $\text{Ca(OH)}_2$<br>$\text{Al(OH)}_3$ | $2$<br>$3$ |
| **Salt (Non-redox)** | Total magnitude of positive or negative electrical charge | $\text{Al}_2(\text{SO}_4)_3 \rightarrow 2\text{Al}^{3+} + 3\text{SO}_4^{2-}$ (total positive charge $= 2 \times 3 = 6$) | $6$ |
| **Double Salt** | Total reacting ionic charge of participating cations | Mohr's Salt: $\text{FeSO}_4\cdot(\text{NH}_4)_2\text{SO}_4\cdot6\text{H}_2\text{O}$ in non-redox dissolution | $2 + 2 = 4$ |
| **Mohr's Salt in Redox** | Change in oxidation state of iron ($\text{Fe}^{2+} \rightarrow \text{Fe}^{3+} + e^-$) | $\text{Fe}^{2+} \rightarrow \text{Fe}^{3+}$ | $1$ |
| **$\text{KMnO}_4$ (Acidic)** | Reduction of $\text{Mn}^{7+} + 5e^- \rightarrow \text{Mn}^{2+}$ | $\text{MnO}_4^- + 8\text{H}^+ + 5e^- \rightarrow \text{Mn}^{2+} + 4\text{H}_2\text{O}$ | $5$ |
| **$\text{KMnO}_4$ (Faint Alkaline/Neutral)** | Reduction of $\text{Mn}^{7+} + 3e^- \rightarrow \text{Mn}^{4+}$ | $\text{MnO}_4^- + 2\text{H}_2\text{O} + 3e^- \rightarrow \text{MnO}_2 + 4\text{OH}^-$ | $3$ |
| **$\text{KMnO}_4$ (Strong Alkaline)** | Reduction of $\text{Mn}^{7+} + 1e^- \rightarrow \text{Mn}^{6+}$ | $\text{MnO}_4^- + e^- \rightarrow \text{MnO}_4^{2-}$ (manganate ion) | $1$ |
| **$\text{K}_2\text{Cr}_2\text{O}_7$ (Acidic)** | Reduction of $2\text{Cr}^{6+} + 6e^- \rightarrow 2\text{Cr}^{3+}$ | $\text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ + 6e^- \rightarrow 2\text{Cr}^{3+} + 7\text{H}_2\text{O}$ | $6$ |
| **Oxalic Acid / Oxalate** | Oxidation of $\text{C}_2\text{O}_4^{2-} \rightarrow 2\text{CO}_2 + 2e^-$ | Carbon changes from $+3$ to $+4$ for 2 carbon atoms | $2$ |
| **$\text{FeC}_2\text{O}_4$ (Ferrous Oxalate)** | Both cation and anion oxidized: $\text{Fe}^{2+} \rightarrow \text{Fe}^{3+} (1e^-)$ and $\text{C}_2\text{O}_4^{2-} \rightarrow 2\text{CO}_2 (2e^-)$ | Total electrons lost per mole of $\text{FeC}_2\text{O}_4 = 1 + 2 = 3$ | $3$ |
| **Disproportionation** | Reaction where single species is simultaneously oxidized and reduced | $\text{Br}_2 \rightarrow \text{Br}^- + \text{BrO}_3^-$: $n_{\text{factor}} = \dfrac{n_{\text{ox}} \times n_{\text{red}}}{n_{\text{ox}} + n_{\text{red}}}$ | $\dfrac{10 \times 2}{10 + 2} = \dfrac{5}{3}$ |

#### 2. Hydrogen Peroxide ($\text{H}_2\text{O}_2$) Volume Strength Derivation

The decomposition reaction of hydrogen peroxide is:
$$2\text{H}_2\text{O}_2\,(\text{aq}) \longrightarrow 2\text{H}_2\text{O}\,(\text{l}) + \text{O}_2\,(\text{g})$$

- $2\,\text{moles of } \text{H}_2\text{O}_2$ produce $1\,\text{mole of } \text{O}_2 = 22.4\,\text{L of } \text{O}_2 \text{ at STP}$.
- Therefore, $1\,\text{mole of } \text{H}_2\text{O}_2$ yields $11.2\,\text{L of } \text{O}_2 \text{ at STP}$.
- If solution molarity is $M\,\text{mol/L}$, then $1\,\text{L of solution}$ contains $M\,\text{moles of } \text{H}_2\text{O}_2$, releasing $M \times 11.2\,\text{L of } \text{O}_2$ at STP.
- Hence:
  $$\text{Volume Strength (in volumes)} = 11.2 \times \text{Molarity } (M)$$
- Since for $\text{H}_2\text{O}_2$ in redox reactions ($2e^-$ exchange per mole), $\text{n-factor} = 2$, we have $N = 2 \times M \implies M = \dfrac{N}{2}$.
  $$\text{Volume Strength} = 11.2 \times \left(\dfrac{N}{2}\right) = 5.6 \times \text{Normality } (N)$$
- Percentage strength $(\text{w/v}\%)$:
  $$\%\,(\text{w/v}) = \dfrac{\text{Volume Strength} \times 34}{224} = \dfrac{\text{Volume Strength}}{6.588}$$

#### 3. Hardness of Water & Calcium Carbonate Equivalence

Water hardness is expressed in parts per million ($\text{ppm}$) of equivalent $\text{CaCO}_3$:
$$\text{Hardness (in ppm of } \text{CaCO}_3) = \dfrac{\text{Mass of } \text{CaCO}_3 \text{ equivalent}}{\text{Total mass of water sample}} \times 10^6$$

To convert any hardness-causing salt into $\text{CaCO}_3$ equivalents, equate gram equivalents:
$$\text{Equivalents of salt} = \text{Equivalents of } \text{CaCO}_3$$
$$\dfrac{w_{\text{salt}}}{E_{\text{salt}}} = \dfrac{w_{\text{CaCO}_3}}{E_{\text{CaCO}_3}} \implies w_{\text{CaCO}_3} = w_{\text{salt}} \times \left(\dfrac{E_{\text{CaCO}_3}}{E_{\text{salt}}}\right) = w_{\text{salt}} \times \left(\dfrac{50}{E_{\text{salt}}}\right)$$

| Hardness-Producing Compound | Molar Mass ($\text{g/mol}$) | n-Factor | Equivalent Weight ($E$) | Conversion Factor to $\text{CaCO}_3$ ($50 / E$) |
|:---|:---:|:---:|:---:|:---:|
| $\text{CaCO}_3$ | $100$ | $2$ | $50$ | $1.000$ |
| $\text{MgCO}_3$ | $84$ | $2$ | $42$ | $50 / 42 \approx 1.190$ |
| $\text{Ca(HCO}_3)_2$ | $162$ | $2$ | $81$ | $50 / 81 \approx 0.617$ |
| $\text{Mg(HCO}_3)_2$ | $146$ | $2$ | $73$ | $50 / 73 \approx 0.685$ |
| $\text{CaCl}_2$ | $111$ | $2$ | $55.5$ | $50 / 55.5 \approx 0.901$ |
| $\text{MgSO}_4$ | $120$ | $2$ | $60$ | $50 / 60 \approx 0.833$ |

---

### 📝 Step-by-Step Worked Problems (JEE Main Numerical Drills)

#### Problem 1: Multi-Step Limiting Reagent & Percentage Yield
**Question**: $20.0\,\text{g}$ of a sample of calcium carbonate ($\text{CaCO}_3$, molar mass $100.0\,\text{g/mol}$) containing $20\%$ inert impurities is treated with $50.0\,\text{mL}$ of $4.0\,\text{M}$ aqueous hydrochloric acid ($\text{HCl}$). Calculate:
1. Which reactant is the limiting reagent?
2. The volume of dry $\text{CO}_2$ gas collected at STP ($1\,\text{atm}, 273.15\,\text{K}$).
3. The percentage yield if the experimental volume of $\text{CO}_2$ collected was $1.792\,\text{L}$.

**Solution**:
1. *Purity calculation*:
   Pure $\text{CaCO}_3 = 20.0\,\text{g} \times (1 - 0.20) = 16.0\,\text{g}$.
   $$n_{\text{CaCO}_3} = \dfrac{16.0}{100.0} = 0.160\,\text{mol}$$
2. *Hydrochloric acid calculation*:
   $$n_{\text{HCl}} = M \times V\,(\text{L}) = 4.0\,\text{mol/L} \times 0.050\,\text{L} = 0.200\,\text{mol}$$
3. *Balanced chemical reaction*:
   $$\text{CaCO}_3 + 2\text{HCl} \longrightarrow \text{CaCl}_2 + \text{H}_2\text{O} + \text{CO}_2$$
4. *Determine limiting reagent*:
   - For $\text{CaCO}_3$: $\dfrac{n}{1} = \dfrac{0.160}{1} = 0.160$.
   - For $\text{HCl}$: $\dfrac{n}{2} = \dfrac{0.200}{2} = 0.100$.
   Since $0.100 < 0.160$, **$\text{HCl}$ is the limiting reagent**.
5. *Theoretical yield of $\text{CO}_2$*:
   $$n_{\text{CO}_2} = \dfrac{1}{2} \times n_{\text{HCl}} = \dfrac{1}{2} \times 0.200 = 0.100\,\text{mol}$$
   $$V_{\text{CO}_2\text{ (STP)}} = 0.100\,\text{mol} \times 22.4\,\text{L/mol} = 2.240\,\text{L}$$
6. *Percentage yield*:
   $$\%\,\text{Yield} = \dfrac{\text{Actual Yield}}{\text{Theoretical Yield}} \times 100 = \dfrac{1.792\,\text{L}}{2.240\,\text{L}} \times 100 = 80.0\%$$

#### Problem 2: Redox Titration with Ferrous Oxalate
**Question**: How many moles of potassium permanganate ($\text{KMnO}_4$) are required to completely oxidize $1.0\,\text{mole}$ of ferrous oxalate ($\text{FeC}_2\text{O}_4$) in an acidic medium?

**Solution**:
1. *Oxidation half-reactions for $\text{FeC}_2\text{O}_4$*:
   - $\text{Fe}^{2+} \longrightarrow \text{Fe}^{3+} + e^-$ ($1e^-$ lost)
   - $\text{C}_2\text{O}_4^{2-} \longrightarrow 2\text{CO}_2 + 2e^-$ ($2e^-$ lost)
   - Total electrons lost per formula unit of $\text{FeC}_2\text{O}_4 = 1 + 2 = 3$.
   - Therefore, $\text{n-factor of } \text{FeC}_2\text{O}_4 = 3$.
2. *Reduction half-reaction for $\text{KMnO}_4$ in acidic medium*:
   - $\text{MnO}_4^- + 8\text{H}^+ + 5e^- \longrightarrow \text{Mn}^{2+} + 4\text{H}_2\text{O}$
   - Electrons gained per formula unit $= 5$.
   - Therefore, $\text{n-factor of } \text{KMnO}_4 = 5$.
3. *Equating gram equivalents*:
   $$\text{Equivalents of } \text{KMnO}_4 = \text{Equivalents of } \text{FeC}_2\text{O}_4$$
   $$n_{\text{KMnO}_4} \times (\text{n-factor})_{\text{KMnO}_4} = n_{\text{FeC}_2\text{O}_4} \times (\text{n-factor})_{\text{FeC}_2\text{O}_4}$$
   $$n_{\text{KMnO}_4} \times 5 = 1.0 \times 3$$
   $$n_{\text{KMnO}_4} = \dfrac{3}{5} = 0.60\,\text{mol}$$

---

### ⚠️ Common Traps & High-Yield Pitfalls in JEE Main

1. **Confusing Molality with Molarity**: In diluted aqueous solutions, $m \approx M$, but in concentrated solutions ($d 
e 1\,\text{g/mL}$), they diverge sharply. Always use $1000\,d - M \cdot M_B$ in the denominator for molality.
2. **STP Definition Nuance**: Old STP was $1\,\text{atm}, 0\,^\circ\text{C}$ ($22.4\,\text{L/mol}$). Modern IUPAC STP is $1\,\text{bar}, 0\,^\circ\text{C}$ ($22.7\,\text{L/mol}$). Unless explicitly instructed with 1 bar or $R = 0.08314\,\text{L bar K}^{-1}\text{mol}^{-1}$, JEE Main answer keys evaluate molar volume as $22.4\,\text{L}$.
3. **Disproportionation n-factor**: Never add individual n-factors directly for disproportionation. Use $\dfrac{n_1 \times n_2}{n_1 + n_2}$ per mole of reactant.
4. **Phosphorus Oxyacids**: $\text{H}_3\text{PO}_3$ has three hydrogens in its empirical formula but only two $\text{P}-\text{OH}$ bonds (the third hydrogen is directly bound as $\text{P}-\text{H}$ and is non-ionizable). Its basicity and n-factor in acid-base neutralizations is strictly $2$.
5. **Oxalate vs Ferrous Oxalate**: $\text{H}_2\text{C}_2\text{O}_4$ has n-factor $2$ in redox titrations, but $\text{FeC}_2\text{O}_4$ has n-factor $3$ because the ferrous ion also oxidizes to ferric.

---
*For interactive question banks and comprehensive revision roadmaps, explore the [/exams/jeemain/](/exams/jeemain/) portal.*

## Continue your study

- **[View this topic in your JEE Main roadmap](/roadmap/?exam=jeemain&duration=1mo)** — see where "Some Basic Concepts of Chemistry" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeemain&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Main exam overview](/exams/jeemain/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeemain/chemistry/)** — browse sibling topics in this subject

