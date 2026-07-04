---
exam: fmge
examName: FMGE
subject: biochemistry
subjectName: Biochemistry
topic: bioche-008
topicName: Electron Transport Chain
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-04"
---

# Electron Transport Chain

### 🟢 Lite — Quick Review
> Rapid summary for last-minute revision before your exam.

The **electron transport chain (ETC)** is the final common pathway of aerobic respiration, embedded in the **inner mitochondrial membrane**. It funnels high-energy electrons from **NADH** and **FADH₂** to molecular oxygen, releasing energy that is trapped as a **proton-motive force (Δp ≈ −220 mV)** across the inner membrane. Four protein **complexes (I–IV)** plus two mobile carriers (**ubiquinone/CoQ₁₀** and **cytochrome c**) do the work; **Complex V (ATP synthase)** uses the returning protons to make ATP.

Must-know yields: **1 NADH ≈ 2.5 ATP**, **1 FADH₂ ≈ 1.5 ATP** (modern chemiosmotic values; classical teaching rounds to 3 and 2). FMGE favourites — **rotenone** blocks Complex I, **antimycin A** blocks Complex III, **cyanide/CO** block Complex IV (Complex IV inhibition is the most lethal), and **2,4-DNP** is an uncoupler that collapses Δp without stopping electron flow, producing heat.

### 🟡 Standard — Regular Study
> Standard content for students with a few days to months.

#### Architecture of the Chain
The ETC sits in the **inner mitochondrial membrane**, whose **cristae** dramatically increase its surface area. Electrons from the **matrix** enter via two entry points:

- **Complex I (NADH:ubiquinone oxidoreductase)** — accepts 2 e⁻ from NADH at the **FMN** cofactor, passes them through a series of **Fe-S clusters**, and reduces ubiquinone to **ubiquinol (QH₂)**. Energy released pumps **4 H⁺** per electron pair from matrix to intermembrane space (IMS).
- **Complex II (succinate dehydrogenase)** — also a Krebs cycle enzyme; oxidises succinate to fumarate, passing electrons via FADH₂ and Fe-S clusters directly to ubiquinone. **No protons are pumped** here.
- **Complex III (cytochrome bc₁)** — receives electrons from QH₂ via the **Q cycle**, transfers them to **cytochrome c**, and pumps **4 H⁺** per pair.
- **Complex IV (cytochrome c oxidase)** — transfers electrons from cytochrome c to **½ O₂**, reducing it to **H₂O** at a binuclear **Cu_A/Cu_B-haem a₃** centre, and pumps **2 H⁺**.

Mobile carriers: **CoQ₁₀** (lipid-soluble, shuttles between I/II and III) and **cytochrome c** (peripheral IMS protein, shuttles between III and IV).

#### Chemiosmotic Coupling (Peter Mitchell, 1961, Nobel 1978)
Complexes I, III, and IV build an electrochemical gradient: a **ΔpH ≈ 1.4** (matrix alkaline) plus a **ΔΨ ≈ −160 mV** (matrix negative). Free energy of electron transfer:

$$\Delta G = -nF\Delta E_0' \approx -n(96.5\,\text{kJ/mol·V})\Delta E_0'$$

Protons re-enter through **Complex V**, where the **F₀** c-ring rotates against the **F₁** headpiece, driving **ADP + Pᵢ → ATP** at roughly **3 H⁺ per ATP** (rotational catalysis).

#### P/O Ratios and Yield

| Substrate | Electrons enter at | H⁺ pumped | Approx. ATP |
|---|---|---|---|
| NADH | Complex I | 10 | 2.5 |
| FADH₂ | Complex II | 6 | 1.5 |
| Succinate | Complex II | 6 | 1.5 |
| Cytosolic NADH | Glycerol-3-phosphate shuttle → Complex II | 6 | 1.5 |

#### Site-Specific Inhibitors (high-yield for FMGE)
- **Rotenone, amytal** → Complex I
- **Antimycin A** → Complex III
- **Cyanide, CO, H₂S, azide** → Complex IV
- **Oligomycin** → F₀ of ATP synthase (blocks proton channel)
- **2,4-DNP, thermogenin (UCP1)** → uncouplers; dissipate Δp as heat

#### Common Exam Traps
1. Confusing inner membrane (ETC) with matrix (Krebs cycle) location.
2. Assuming FADH₂ gives the same ATP as NADH — it skips Complex I.
3. Forgetting that Complex II pumps **no** protons.
4. Mixing up oligomycin (blocks synthase) with DNP (uncouples gradient).

### 🔴 Extended — Deep Study
> Comprehensive coverage for students on a longer study timeline.

#### Mechanistic Edge Cases
The **Q cycle** in Complex III doubles the H⁺ yield: QH₂ is oxidised at center P, donating one electron to cytochrome c (high-potential path) and one back to a second quinone at center N (low-potential path), effectively translocating **4 H⁺ per pair of electrons** while recycling the carrier. At Complex IV, the binuclear **a₃–Cu_B** site binds O₂ sequentially; the **peroxo-bridged** intermediate must not be confused with the peroxide-generating complexes of peroxisomes.

In brown adipose tissue, **UCP1 (thermogenin)** short-circuits the gradient — the FMGE routinely asks why neonates tolerate cold better and why DNP once caused fatal hyperthermia in "diet pills". **Cyanide poisoning** is reversed clinically with **hydroxocobalamin (binds CN⁻ → cyanocobalamin)** or **sodium thiosulfate (rhodanese → thiocyanate)** — a clinical pearl examiners love.

The **glycerol-3-phosphate shuttle** transfers cytosolic NADH electrons to FADH₂ at Complex II (1.5 ATP); the **malate–aspartate shuttle** delivers them to NADH at Complex I (2.5 ATP) — explaining why tissues like **liver, heart, kidney** favour the higher-yield shuttle.

#### Worked Micro-Example
**Q:** Complete oxidation of 1 mol of acetyl-CoA through Krebs + ETC yields how many ATP?
**A:** 3 NADH (Krebs) × 2.5 + 1 FADH₂ × 1.5 + 1 GTP × 1 = **10 ATP** (classical answer ≈ 12).

#### Connections to Adjacent Topics
- **Hypothalamic-pituitary axis**: thyroid hormone (T₃) up-regulates ETC complexes.
- **Myocardial infarction**: cyanide-like histotoxic hypoxia from CO poisoning.
- **Mitochondrial myopathies**: Complex I deficiency (Leber hereditary optic neuropathy, MELAS) presents with lactic acidosis because NADH cannot be reoxidised.
- **Pharmacology**: metformin may mildly inhibit Complex I, altering cellular AMP/ATP ratio.

#### Practice Prompts
1. A patient ingests rotenone; predict (a) the redox state of NADH/NAD⁺, (b) the effect on oxygen consumption, and (c) why lactate rises.
2. Explain why 2,4-DNP causes hyperthermia without stopping electron flow to O₂, while oligomycin does stop O₂ consumption.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
