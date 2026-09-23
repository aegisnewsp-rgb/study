---
exam: neet-pg
examName: NEET PG
subject: biochemistry
subjectName: Biochemistry
topic: bioche-008
topicName: Electron Transport Chain
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Electron Transport Chain

### 🟢 Lite — Quick Review (1h–1d)
> A bare recitation of the four complexes gets you nowhere on NEET PG — the marks live in the inhibitors and the stoichiometry.

**Electron Transport Chain (ETC)** is the inner mitochondrial membrane machinery that funnels electrons from **NADH** and **FADH₂** onto O₂, pumping H⁺ out to build a gradient that **Complex V** (ATP synthase) uses to make ATP by oxidative phosphorylation.

| Carrier | Enters at | Mobile? | Pumps H⁺? |
|---|---|---|---|
| NADH | Complex I | No | Yes (≈4 H⁺/pair) |
| FADH₂ | Complex II | No | No |
| Coenzyme Q (ubiquinone) | — | Yes (lipid) | — |
| Cytochrome c | — | Yes (peripheral) | — |
| O₂ | Complex IV | No | Yes (≈2 H⁺/pair) |

> 💡 **Memory Hook — "I III IV Pump, II Doesn't":** the proton-pumping complexes are **I, III, and IV**; **II** only feeds electrons into Q without translocating H⁺.

Yield rule for a quick calculation: **2.5 ATP per NADH, 1.5 ATP per FADH₂** (the modern P/O ratio), giving ~34 ATP from oxidative phosphorylation for one glucose.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Pathway architecture

Electrons travel in one direction: **NADH → Complex I → Q → Complex III → Cyt c → Complex IV → ½ O₂**, while **FADH₂** short-circuits Complex I by donating straight to Q via **Complex II**. Coenzyme Q (ubiquinone) and cytochrome c are the only **mobile carriers** shuttling between fixed complexes — every other component is integral to the inner membrane.

#### Proton pumping and the chemiosmotic hypothesis

Peter Mitchell's chemiosmotic model treats the inner membrane as a **capacitor for protons**. As electrons fall to lower reduction potentials, Complexes I, III, and IV use the released free energy to translocate H⁺ from the matrix into the intermembrane space (IMS), generating:

$$\Delta p = \Delta\psi - \frac{2.303\,RT}{F}\,\Delta\text{pH}$$

Δψ is the membrane potential (V), ΔpH is the matrix-to-IMS pH difference, R = 8.314 J·mol⁻¹·K⁻¹, T is temperature in K, and F = 96485 C·mol⁻¹. The combined **proton motive force (pmf)** drives F₀ of ATP synthase, which rotates to drag F₁ heads that phosphorylate ADP + Pᵢ.

#### Concept Comparison Matrix — Inhibitors vs Uncouplers

| Agent | Site | Effect on ETC | Effect on ATP | Clinical/exam hook |
|---|---|---|---|---|
| Rotenone, piericidin A | Complex I | Blocks electron flow | ↓ ATP, NADH accumulates | Fish poison |
| Amytal | Complex I | Same as rotenone | ↓ ATP | — |
| Antimycin A | Complex III (Qᵢ site) | Blocks electron flow | ↓ ATP | — |
| Cyanide, CO, H₂S, azide | Complex IV (cytochrome a/a₃) | Blocks O₂ reduction | ↓ ATP, lactate ↑ | Cyanide poisoning |
| Oligomycin | Complex V (F₀) | Stops ATP synthase | ↓ ATP, ETC backs up | Antibiotic |
| **DNP, thermogenin/UCP1** | **Dissipates pmf** | **Runs unchecked, burns O₂** | **No ATP, heat released** | Weight-loss drug (toxic); brown fat thermogenesis |

> ⚠️ **Examiner Trap:** "Uncoupler" ≠ "inhibitor". Uncouplers (DNP, UCP1) *accelerate* the chain — ETC and O₂ consumption run at full speed, but the gradient collapses, so the energy appears as **heat**, not ATP. Students who mark DNP as an inhibitor lose a free mark.

#### ATP accounting per glucose

| Origin | NADH | FADH₂ | ATP (modern) |
|---|---|---|---|
| Glycolysis (cytosolic) | 2 | 0 | 2 (net substrate-level) + shuttle cost |
| Pyruvate → Acetyl-CoA | 2 | 0 | 5 |
| TCA cycle | 6 | 2 | ~22 (6×2.5 + 2×1.5 + 2 GTP) |
| **Totals** | **10** | **2** | **~36–38 ATP** |

Cytosolic NADH from glycolysis pays a shuttle toll: the **malate–aspartate shuttle** (liver/heart) recovers ~2.5 ATP; the **glycerol-3-phosphate shuttle** (skeletal muscle/brain) recovers only ~1.5 ATP, explaining the 36 vs 38 discrepancy.

#### 🎯 Exam-Level Worked Problem

**Question.** A patient is brought to the ED with smoke-inhalation injury. Arterial blood gas shows severe metabolic acidosis with elevated lactate. The toxicologist notes that the agent binds cytochrome a₃. Calculate the **proton motive force** at 37 °C given Δψ = −170 mV (matrix negative) and an IMS pH of 6.9 against a matrix pH of 7.8, and state which ATP yield is abolished first.

#### Solution.

1. ΔpH = 7.8 − 6.9 = 0.9 (matrix more alkaline).
2. 2.303 RT/F at 310 K = (2.303 × 8.314 × 310) / 96485 ≈ **0.0615 V**.
3. pmf term = Δψ − 0.0615 × ΔpH = −0.170 − (0.0615 × 0.9) = −0.170 − 0.0554 = **−0.225 V** (≈ **−225 mV**), magnitude **225 mV**.
4. The poison is cyanide (smoke inhalation, cytochrome a₃ binding) — it halts **Complex IV**, so electrons pile up upstream; **all oxidative phosphorylation stops** because O₂ is the terminal acceptor. ATP yield collapses from ~2.5 ATP/NADH and 1.5 ATP/FADH₂ to **zero**.

> ⚠️ **Examiner Trap:** Don't write "cyanide inhibits Complex III" — that's antimycin A. Cyanide, CO, H₂S, and azide all hit **cytochrome a/a₃ in Complex IV**.

---

### 🔴 Extended — Deep Study (3mo+)

#### Edge cases and stoichiometric boundaries

The "**10 protons = 4 ATP**" rule of thumb conceals a real H⁺/ATP cost: ~3 H⁺ pass through F₀ per ATP rotated, and ~1 more H⁺ is consumed by the **adenine nucleotide translocase** plus the **phosphate carrier** exchanging ADP³⁻/ATP⁴⁻ and Pᵢ/H⁺. That 4 H⁺/ATP accounting is why NADH (≈10 H⁺ pumped) gives ~2.5 ATP and FADH₂ (≈6 H⁺ pumped, missing Complex I) gives ~1.5 ATP — not 3 and 2.

Mitochondrial DNA encodes 13 subunits of these complexes, all of Complex III, most of Complex IV, and 2 of Complex V. **Mitochondrial myopathies (MELAS, MERRF, LHON)** therefore preferentially impair ETC flux and respond to agents bypassing Complex I — for example, **succinate** given orally or **Coenzyme Q₁₀** supplementation. Cyanide antidotes exploit the same logic: **hydroxocobalamin** binds CN⁻ directly; **sodium thiosulfate** donates sulfur to rhodanese, generating thiocyanate for renal clearance.

#### Advanced traps and exceptions

1. **Reverse electron transport** at Complex I during reperfusion injury re-oxidises ubiquinol and generates superoxide — a therapeutic target of rotenone in *in vitro* ischaemia models but useless clinically.
2. **UCP1 (thermogenin)** is a regulated uncoupler expressed only in **brown adipose tissue**; UCP2 and UCP3 are widespread but physiologically less significant.
3. **Coenzyme Q** carries both electrons and protons (as ubiquinol) — the only lipid-soluble carrier; statins reduce its synthesis, which is why myalgia can occur with HMG-CoA reductase inhibition.
4. **Iron–sulfur clusters** (Fe-S) in Complexes I, II, and III are the actual redox centres for Q reduction; their assembly requires frataxin, deficient in **Friedreich ataxia**.
5. The **P/O ratio** is dimensionless: it counts ATP made per **½ O₂** (per O atom) reduced — not per O₂ molecule.

#### Practice prompts

- A neonate with lactic acidosis and elevated blood pyruvate is found to have a mutation in **NDUFS1** (Complex I 75-kDa subunit). Predict which shuttle-derived ATP equivalents are lost and which (if any) are preserved.
- Compare the effect of adding **oligomycin** versus **2,4-DNP** to isolated mitochondria respiring on succinate. State O₂ consumption, membrane potential, and ATP output in each case.

## Continue your study

- **[View this topic in your NEET PG roadmap](/roadmap/?exam=neet-pg&duration=1mo)** — see where "Electron Transport Chain" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neet-pg&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NEET PG exam overview](/exams/neet-pg/)** — pattern, eligibility, and syllabus
- **[All Biochemistry notes](/notes/neet-pg/biochemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
