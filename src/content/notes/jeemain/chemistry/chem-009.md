---
exam: jeemain
examName: JEE Main
subject: chemistry
subjectName: Chemistry
topic: chem-009
topicName: Electrochemistry
weight: 3
country: india
generated: "2026-03-28T21:09:21"
lastUpdated: "2026-09-21"
---

# Electrochemistry

> JEE Main Chemistry unit carrying ~3% weightage. Nernst equation, Kohlrausch's law, and Faraday's laws are the three highest-frequency question types.

### 🟢 Lite — Quick Review (1h–1d)
> **Read this if tomorrow is the exam.** Three formulas plus one Memory Hook is enough to clear most MCQs.

**Electrochemistry** converts chemical energy into electrical energy (galvanic cells) or drives non-spontaneous reactions with electricity (electrolytic cells). Both depend on **redox reactions** at electrode–electrolyte interfaces.

| Quantity | Formula | Variable meanings |
|---|---|---|
| Cell EMF | $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$ | volts; $E^\circ$ measured vs SHE at 298 K, 1 M, 1 atm |
| Nernst equation | $E_{\text{cell}} = E^\circ_{\text{cell}} - \dfrac{0.0591}{n}\log_{10} Q$ | $n$ = electrons transferred, $Q$ = reaction quotient |
| Mass deposited | $m = \dfrac{M \cdot I \cdot t}{n \cdot F}$ | $M$ in g mol⁻¹, $I$ in A, $t$ in s, $F = 96485$ C mol⁻¹ |
| Molar conductivity | $\Lambda_m = \dfrac{\kappa \times 1000}{c}$ | $\kappa$ in S cm⁻¹, $c$ in mol L⁻¹ → $\Lambda_m$ in S cm² mol⁻¹ |

> 💡 **Memory Hook (CNC-FK):** **C**athode = **N**ot the negative always (it's positive in galvanic cells, negative in electrolytic cells). **C**ell EMF = **C**athode minus anode. **F**araday = **F**irst multiply, then divide: $m \propto \dfrac{I \cdot t}{n}$.

### 🟡 Standard — Regular Study (2d–2mo)
> **For two weeks of structured revision.** Builds the derivation, the application map, and one full numerical.

#### Galvanic vs Electrolytic Cells

A **galvanic cell** (Daniell: Zn | Zn²⁺ ‖ Cu²⁺ | Cu) runs spontaneously because $E^\circ_{\text{cell}} > 0$. Anode is Zn (oxidation, negative terminal); cathode is Cu (reduction, positive terminal). The **salt bridge** (KCl-agar or KNO₃-agar) completes the circuit by letting ions migrate to balance charge buildup in the half-cells.

An **electrolytic cell** is the reverse: an external battery forces a non-spontaneous reaction. Here the anode is still the oxidation site but is now wired to the battery's positive terminal; the cathode (reduction) is wired to the negative terminal.

> ⚠️ **Examiner Trap:** Students assume "cathode = negative" universally. It is **positive in galvanic cells** and **negative in electrolytic cells** — sign depends on whether the cell supplies or receives current.

#### The Nernst Equation and Its Reach

Derivation starts from $\Delta G = \Delta G^\circ + RT \ln Q$ and $\Delta G = -nFE$. Equating and rearranging:

$$E_{\text{cell}} = E^\circ_{\text{cell}} - \frac{2.303\,RT}{nF}\log_{10} Q$$

At 298 K the coefficient becomes $0.0591/n$ V. This single equation unlocks:

- **Equilibrium constant:** $\log_{10} K_{eq} = \dfrac{n \cdot E^\circ_{\text{cell}}}{0.0591}$ (set $E_{\text{cell}} = 0$).
- **Concentration cells:** $E = -\dfrac{0.0591}{n}\log_{10}\dfrac{[\text{M}^{n+}]_{\text{anode}}}{[\text{M}^{n+}]_{\text{cathode}}}$.
- **pH electrodes:** $E = E^\circ - \dfrac{0.0591}{1}\cdot\text{pH}$ for the quinhydrone or hydrogen electrode.

#### Conductance, Kohlrausch, and Dissociation

**Specific conductance** $\kappa$ (S m⁻¹) measures how well a 1 m cube of solution conducts. **Molar conductivity** $\Lambda_m = \kappa/c$ scales this per mole of electrolyte. For strong electrolytes, $\Lambda_m$ falls linearly with $\sqrt{c}$ (Debye–Hückel–Onsager). For weak electrolytes it shoots up near infinite dilution as more molecules ionise.

#### Kohlrausch's law of independent migration of ions:

$$\Lambda^\circ_m = \nu_+ \lambda^\circ_+ + \nu_- \lambda^\circ_-$$

This is how you find $\Lambda^\circ$ of a weak acid (e.g. acetic acid) from strong-electrolyte data, because acetic acid cannot be measured at infinite dilution.

For a weak acid, $\alpha = \Lambda_m / \Lambda^\circ_m$ and Ostwald's dilution law gives $K_a = c\alpha^2 / (1-\alpha)$.

#### Comparison: Sign Conventions and Polarities

| Feature | Galvanic cell | Electrolytic cell |
|---|---|---|
| Anode | Negative terminal, oxidation | Positive terminal (connected to + of battery), oxidation |
| Cathode | Positive terminal, reduction | Negative terminal, reduction |
| $E^\circ_{\text{cell}}$ sign | Positive → spontaneous | Negative → non-spontaneous; need external EMF |
| Energy direction | Chemical → electrical | Electrical → chemical |
| Example | Daniell cell, fuel cell | Hall–Héroult (Al extraction), electroplating |

#### Worked Resolution

A Cu–Ag cell: Cu | Cu²⁺ (0.01 M) ‖ Ag⁺ (1 M) | Ag. Given $E^\circ_{\text{Ag}^+/\text{Ag}} = +0.80$ V, $E^\circ_{\text{Cu}^{2+}/\text{Cu}} = +0.34$ V. Find $E_{\text{cell}}$.

**Step 1.** $E^\circ_{\text{cell}} = 0.80 - 0.34 = 0.46$ V.

**Step 2.** Cell reaction: Cu + 2Ag⁺ → Cu²⁺ + 2Ag, so $n = 2$ and $Q = \dfrac{[\text{Cu}^{2+}]}{[\text{Ag}^+]^2} = \dfrac{0.01}{1^2} = 0.01$.

**Step 3.** Nernst: $E_{\text{cell}} = 0.46 - \dfrac{0.0591}{2}\log_{10}(0.01) = 0.46 - \dfrac{0.0591}{2}(-2) = 0.46 + 0.0591 = 0.5191$ V.

**Step 4.** Sanity check: diluting the Cu²⁺ side (the product) pushes $Q$ smaller, log more negative, and $E_{\text{cell}}$ rises — Le Chatelier agrees.

> ⚠️ **Examiner Trap:** Two sign slips appear every year: (a) writing $E^\circ_{\text{cell}} = E^\circ_{\text{anode}} - E^\circ_{\text{cathode}}$ flips the answer's sign and mis-predicts spontaneity; (b) using $\ln$ in the Nernst formula without $2.303$ gives an answer off by a factor of 2.303.

### 🔴 Extended — Deep Study (3mo+)
> **For three months out.** Edge cases, commercial processes, and the question traps that only show up in tough sets.

#### Faraday's Laws in Series and the Charge-Quality Link

When cells are wired in series, the **same charge** $Q = I \cdot t$ flows through each. The mass liberated in cell *k* is $m_k = \dfrac{M_k \cdot I \cdot t}{n_k \cdot F}$. Combining Faraday's 1st and 2nd laws gives the relative mass rule:

$$\frac{m_1}{m_2} = \frac{M_1 / n_1}{M_2 / n_2} = \frac{E_1}{E_2}$$

where $E_k = M_k / n_k$ is the **equivalent weight** in g eq⁻¹.

#### Conductometric Titration Signatures

The conductance curve shape tells you the titration type without doing any chemistry:

- **Strong acid + strong base:** V-shaped — conductance falls as H⁺ is replaced by Na⁺ (lower mobility), then rises after equivalence as excess OH⁻ adds ions.
- **Weak acid + strong base:** shallow dip near start, then a sharp rise after equivalence as the conjugate base hydrolyses and excess NaOH adds OH⁻.
- **Strong acid + weak base:** falls gently and levels off (excess weak base barely ionises).

#### Commercial Cells and Electro-Processes

| Process | Key chemistry | Working notes |
|---|---|---|
| Lead–acid accumulator | Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O (discharge) | $E^\circ_{\text{cell}} = 2.05$ V; reversible secondary cell |
| H₂–O₂ fuel cell | H₂ + ½O₂ → H₂O (alkaline electrolyte) | Continuous feed; $E^\circ_{\text{cell}} = 1.23$ V |
| Hall–Héroult | Al₂O₃ dissolved in cryolite (Na₃AlF₆) at ~950 °C | Carbon anode is consumed: C + O₂ → CO₂ |
| Electrorefining of Cu | Impure Cu anode, pure Cu cathode, CuSO₄ + H₂SO₄ bath | Zn, Fe, Ni dissolve but don't plate; Ag, Au fall as anode sludge |
| Castner–Kellner | NaCl(aq) → Na(Hg) cathode, Cl₂ at anode; Na + H₂O → NaOH + ½H₂ | Mercury cathode avoids Na–H₂O contact |

#### Corrosion as a Short-Circuited Galvanic Cell

Rusting is an electrochemical process with anodes and cathodes on the same iron surface. Anodic regions: Fe → Fe²⁺ + 2e⁻. Cathodic regions (often a different oxygen-concentration zone): O₂ + 2H₂O + 4e⁻ → 4OH⁻. Followed by Fe²⁺ + 2OH⁻ → Fe(OH)₂, and further oxidation by air gives Fe₂O₃·xH₂O (rust). Prevention methods ranked by effectiveness:

1. **Barrier coatings** — paint, oil, polymer — physically separate Fe from water and O₂.
2. **Galvanization** — Zn coating; Zn is more active (sacrificial anode), corrodes first.
3. **Tinning** — Sn coating; only protective until scratched, then Fe corrodes faster than bare Fe because Sn–Fe forms a galvanic cell with a large cathode-to-anode area ratio.
4. **Cathodic protection** — Mg or Zn rod wired to an iron pipeline; the rod is the sacrificial anode.
5. **Alloying** — stainless steel (Cr ≥ 10.5%) forms a passive Cr₂O₃ layer.

#### Less-Tested but Real Edge Cases

1. **EMF is intensive** — doubling electrode area does not double $E^\circ_{\text{cell}}$; it doubles the maximum current a cell can deliver, but the open-circuit voltage is a function of concentrations and intrinsic potentials only.
2. **Reference electrode at non-standard temperature** — the 0.0591 factor is exact at 298 K. At 310 K it becomes $0.0615/n$; in numericals the temperature is usually specified.
3. **Overpotential** — actual electrolysis requires a voltage higher than the thermodynamic minimum because of kinetic barriers (especially at the hydrogen electrode, ~1.0 V overpotential on Hg).
4. **Molar vs equivalent conductivity conversion** — $\Lambda_{\text{eq}} = \Lambda_m / n_f$ where $n_f$ is the total positive (or negative) charge on the ion's formula unit. For Al₂(SO₄)₃, $\Lambda_{\text{eq}} = \Lambda_m / 6$.
5. **log K from E°** — $\log_{10} K_{eq} = n E^\circ_{\text{cell}} / 0.0591$ works at 298 K only. Off-temperature: use $\log_{10} K_{eq} = n F E^\circ / (2.303\,RT)$.

#### Advanced practice prompts:

1. A lead–acid battery rated 200 Ah delivers a steady current for 20 hours. Calculate the mass of PbSO₄ formed at each electrode, taking $M_{\text{PbSO}_4} = 303$ g mol⁻¹ and the cell reaction exchanging $n = 2$ electrons per Pb atom. (Answer: ~6.06 kg total across both electrodes.)
2. The limiting molar conductivity of acetic acid is to be found from data: $\Lambda^\circ(\text{HCl}) = 426$, $\Lambda^\circ(\text{NaCl}) = 126$, $\Lambda^\circ(\text{CH}_3\text{COONa}) = 91$ S cm² mol⁻¹. Apply Kohlrausch's law and derive $\Lambda^\circ(\text{CH}_3\text{COOH})$.

---

## Continue your study

- **[View this topic in your JEE Main roadmap](/roadmap/?exam=jeemain&duration=1mo)** — see where "Electrochemistry" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeemain&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Main exam overview](/exams/jeemain/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeemain/chemistry/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
