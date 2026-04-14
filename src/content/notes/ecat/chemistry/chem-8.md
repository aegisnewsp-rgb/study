---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: chemistry
subjectName: Chemistry
topic: chem-8
topicName: Electrochemistry
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.057741"
diagramPrompt: "Clear scientific diagram of Electrochemistry with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"


---

# Electrochemistry

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Redox Reactions — Electron Transfer:**

Electrochemistry is the study of reactions involving electron transfer. Oxidation is the loss of electrons (OIL: Oxidation Is Loss of electrons); reduction is the gain of electrons (RIG: Reduction Is Gain). The species that oxidises (loses electrons) is the reducing agent; the species that reduces (gains electrons) is the oxidising agent. These always occur together — electrons lost by the reducing agent equal electrons gained by the oxidising agent.

**Electrochemical Cells — Galvani and Voltaic:**

A galvanic (voltaic) cell converts chemical energy into electrical energy through spontaneous redox reactions. It consists of two half-cells: the anode (oxidation, negative electrode) and the cathode (reduction, positive electrode). Electrons flow from anode to cathode through the external wire. Salt bridge (or membrane) maintains electrical neutrality.

Standard cell notation: Zn(s) | Zn²⁺(aq, 1M) || Cu²⁺(aq, 1M) | Cu(s). The single vertical line represents a phase boundary; the double vertical line represents the salt bridge. The anode is written on the left.

Standard electrode potentials (E°): measured relative to the standard hydrogen electrode (SHE, defined as E° = 0.00 V). For Zn²⁺/Zn: E° = -0.76 V (this means Zn²⁺ + 2e⁻ → Zn is less spontaneous than H⁺ + e⁻ → ½H₂). For Cu²⁺/Cu: E° = +0.34 V.

**⚡ ECAT Tip:** E°_cell = E°_cathode - E°_anode (in standard notation). For the Daniell cell (Zn/Cu): E°_cell = +0.34 - (-0.76) = +1.10 V. A positive E°_cell means the reaction is spontaneous as written (galvanic). A negative E°_cell means the reaction is non-spontaneous — you need an external voltage to force it (electrolytic cell).

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

**Nernst Equation — Non-Standard Conditions:**

The Nernst equation relates the cell potential to concentration: E = E° - (RT/nF) ln Q, where n = number of electrons transferred, F = Faraday constant (96,485 C/mol), R = 8.314 J/(mol·K), and T is temperature in Kelvin. At 25°C (298 K), this simplifies to: E = E° - (0.0592/n) log₁₀ Q.

Applications:
- For the reaction quotient Q: for Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), Q = [Zn²⁺]/[Cu²⁺], n = 2
- When Q = 1 (all species at standard conditions), E = E° (standard cell potential)
- When [Zn²⁺] increases (more product, less reactant): Q > 1, so E < E° (cell potential decreases)
- When [Cu²⁺] decreases: Q > 1 (fewer reactant), E < E°

**Electrolytic Cells — Non-Spontaneous Reactions:**

An electrolytic cell uses electrical energy to drive non-spontaneous redox reactions. The external voltage required must exceed |E°_cell| to initiate the reaction. Overpotential (extra voltage beyond thermodynamic requirement) may be needed to overcome kinetic barriers.

Electroplating: To plate a metal M onto an object: make the object the cathode, use a solution containing M²⁺ ions, and apply a voltage sufficient for M²⁺ + 2e⁻ → M. The mass deposited: m = (M × I × t)/(n × F), where M is the molar mass of the metal, I is current in amperes, t is time in seconds, n is electrons per ion, F is Faraday constant.

**⚡ ECAT Tip:** Faraday's laws of electrolysis: (1) mass deposited is proportional to the quantity of charge (I × t); (2) for the same charge, mass deposited is proportional to M/n (equivalent weight). To deposit 1 mole of Ag (M = 108 g/mol, n = 1): requires 1 F = 96,485 C. To deposit 1 mole of Al (M = 27 g/mol, n = 3): requires 3 F = 289,455 C. This is why aluminium electrolysis is so energy-intensive — it requires trivalent Al³⁺.

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

**Standard Electrode Potentials — Why They Work:**

Standard electrode potentials are measured for the reduction reaction: Mⁿ⁺(aq) + ne⁻ → M(s), all at standard conditions (1 M, 1 atm, 25°C). More positive E° means the reduction is more favourable (Mⁿ⁺ is a stronger oxidising agent). E°(Cu²⁺/Cu) = +0.34 V means Cu²⁺ can oxidise things with E° below +0.34 V (like Zn, Fe, etc.).

Using E° values:
- Any species with E° < 0.34 V can reduce Cu²⁺ to Cu ( Zn + Cu²⁺ → Zn²⁺ + Cu, E° = +1.10 V, spontaneous)
- Any species with E° > +0.34 V can oxidise Cu to Cu²⁺

**Concentration Cells — Zero Standard Potential:**

A concentration cell has the same electrode and electrolyte at different concentrations: Zn(s) | Zn²⁺(0.01 M) || Zn²⁺(1 M) | Zn(s). Here E°_cell = 0 because both standard potentials cancel. The cell potential comes entirely from the concentration difference. Using Nernst: E = -(0.0592/2) log([Zn²⁺]_dilute/[Zn²⁺]_concentrated). As the cell operates, the dilute solution becomes more concentrated and the concentrated becomes more dilute — approaching equilibrium when both are equal and E → 0.

**pH Measurement Using Electrodes:**

The glass electrode (pH electrode) measures pH based on the Nernst equation applied to the hydrogen ion concentration at the glass membrane surface. The potential difference between the glass electrode and a reference electrode is: E = E° - (0.0592) × pH at 25°C. This is how pH meters work — they measure the voltage and convert to pH.

The standard hydrogen electrode (SHE) is the primary reference: 2H⁺(aq) + 2e⁻ → H₂(g) has E° = 0 V by definition. However, it requires H₂ gas at 1 atm, Pt electrode coated with platinum black, and 1 M H⁺ — impractical for routine use, so calomel and silver/silver chloride electrodes are used as secondary references.

**Batteries — Practical Electrochemistry:**

*Leclanche dry cell (common zinc-carbon battery):* Anode: Zn → Zn²⁺ + 2e⁻. Cathode: 2NH₄⁺ + 2MnO₂ + 2e⁻ → Mn₂O₃ + 2NH₃ + H₂O. Cell voltage: 1.5 V. Not rechargeable (irreversible chemistry).

*Alkaline battery:* Same anode and cathode but in alkaline (KOH) medium. Anode: Zn + 2OH⁻ → ZnO + H₂O + 2e⁻. Cathode: 2MnO₂ + H₂O + 2e⁻ → Mn₂O₃ + 2OH⁻. Cell voltage: 1.5 V. Better capacity and shelf life than Leclanche.

*Lead-acid battery (car battery):* Anode: Pb + SO₄²⁻ → PbSO₄ + 2e⁻ (during discharge). Cathode: PbO₂ + SO₄²⁻ + 4H⁺ + 2e⁻ → PbSO₄ + 2H₂O. Overall: Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O. This is reversible — applying an external voltage (charging) reverses both reactions. 6 cells in series give 12 V.

*Lithium-ion battery:* State-of-the-art rechargeable battery. Anode: LiCoO₂ (layered oxide, Li⁺ can intercalate between layers). Cathode: graphite with intercalated Li⁺. During discharge, Li⁺ moves from anode to cathode through electrolyte; electrons flow externally. The reverse happens during charging. High energy density (why phones are thin), but degrades over time because Li⁺ gets trapped in dead zones on the electrodes.

**⚡ ECAT Pattern:** ECAT chemistry frequently tests: (1) writing cell reactions from half-reactions and calculating E°_cell; (2) using the Nernst equation with numerical concentrations to calculate non-standard E; (3) Faraday's law calculations for electroplating; (4) predicting whether a given redox reaction is spontaneous; and (5) ranking oxidising/reducing agents by E° values. A typical ECAT question: "Calculate E for the cell Cu(s) | Cu²⁺(0.01 M) || Ag⁺(0.1 M) | Ag(s) at 25°C. Given E°(Cu²⁺/Cu) = +0.34 V, E°(Ag⁺/Ag) = +0.80 V." E°_cell = 0.80 - 0.34 = +0.46 V. Q = [Cu²⁺]/[Ag⁺]² = 0.01/0.01 = 1. But wait — silver is Ag⁺ + e⁻ → Ag (n=1), copper is Cu²⁺ + 2e⁻ → Cu (n=2), overall n=2. E = 0.46 - (0.0592/2) log(0.01/0.01) = 0.46 - 0 = 0.46 V. If the concentrations differed, we'd see the correction.
