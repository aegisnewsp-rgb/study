---
exam: ini-cet
examName: INI CET (AIIMS PG)
subject: physiology
subjectName: Physiology
topic: physio-004
topicName: "Cardiac Muscle Physiology and Action Potential"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: 2026-03-25
---

# Cardiac Muscle Physiology and Action Potential

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for high-yield INI CET / AIIMS PG revision.

**Cardiac Electrophysiology Core Highlights**
- **Action Potential Types**:
  - **Fast Response (Ventricular / Atrial / Purkinje myocytes)**: True resting membrane potential (–90 mV); sharp Phase 0 upstroke driven by rapid voltage-gated $Na^+$ influx ($I_{Na}$, Nav1.5 channels); prominent plateau (Phase 2) mediated by $Ca^{2+}$ influx ($I_{Ca,L}$, Cav1.2).
  - **Slow Response (SA Node / AV Node Pacemaker cells)**: Unstable resting potential (–60 mV); automaticity driven by "Funny Current" ($I_f$, hyperpolarization-activated cyclic nucleotide-gated channels, HCN4); Phase 0 upstroke mediated solely by $Ca^{2+}$ channels (Cav1.2, Cav1.3); complete absence of fast voltage-gated $Na^+$ channels.
- **Why Cardiac Muscle Cannot Undergo Tetanus**:
  - The electrical action potential duration (APD $\approx 250\text{–}300\text{ ms}$) nearly coincides with mechanical contraction duration.
  - The prolonged **Effective Refractory Period (ERP)** prevents re-excitation until the myocardium has already entered mechanical relaxation.
- **Excitation-Contraction Coupling (ECC)**:
  - Depolarization $\rightarrow$ L-type $Ca^{2+}$ channel activation (DHPR) $\rightarrow$ trigger $Ca^{2+}$ entry $\rightarrow$ activates Ryanodine Receptor 2 (RyR2) on sarcoplasmic reticulum $\rightarrow$ **Calcium-Induced Calcium Release (CICR)** $\rightarrow$ cross-bridge cycling.
  - Relaxation requires active $Ca^{2+}$ clearance:
    1. **SERCA2a** (pumps $\sim 75\text{–}80\%$ back into SR, regulated by unphosphorylated Phospholamban).
    2. **NCX** ($Na^+/Ca^{2+}$ Exchanger, extrudes $\sim 15\text{–}20\%$ across sarcolemma in 3 $Na^+$ in : 1 $Ca^{2+}$ out stoichiometry).
    3. **PMCA** ($Ca^{2+}$-ATPase, extrudes $\sim 1\%$).
- ⚡ **AIIMS High-Yield Correlation**: Cardiac Glycosides (Digoxin) inhibit $Na^+/K^+$ ATPase $\rightarrow \uparrow$ intracellular $[Na^+] \rightarrow$ decreases forward mode of NCX $\rightarrow \uparrow$ intracellular $[Ca^{2+}] \rightarrow$ positive inotropic response.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Detailed ion currents, action potential morphology, refractory phases, and autonomic modulation.

#### Electrophysiological Phases: Ventricular Myocyte vs. Sinoatrial Node

```
Ventricular Myocyte (Fast Response)              SA Nodal Cell (Slow Response)
           Phase 1                                        Phase 0
         ┌──┐                                              /\
 Phase 0 │  │ Phase 2 (Plateau)                           /  \ Phase 3
        /    \────────────────┐                          /    \
       /                      │                         /      \
      /                        \ Phase 3               /        \  Phase 4 (Prepotential)
     /                          \                     /          \    /
────┘                            \───────────────────┘            \  /
 Phase 4 (RMP = -90 mV)             Phase 4 (-90 mV)               \/ (MDP = -60 mV)
```

| Phase | Ventricular Myocyte Major Currents | Gating Channel & Kinetics | Pacemaker (SA Node) Currents | Clinical / Pharmacological Correlations |
| :--- | :--- | :--- | :--- | :--- |
| **Phase 0** (Rapid Upstroke) | Massive $Na^+$ Influx ($I_{Na}$) | Fast voltage-gated Nav1.5; $dV/dt_{max} \approx 200\text{–}400\text{ V/s}$ | $Ca^{2+}$ Influx ($I_{Ca,L}$ & $I_{Ca,T}$); no fast $I_{Na}$ | Class IA (Quinidine) & Class IC (Flecainide) antiarrhythmics block Nav1.5, depressing Phase 0 slope. |
| **Phase 1** (Early Repol) | Transient Outward $K^+$ Efflux ($I_{to}$) | Kv4.2/Kv4.3 channels open briefly; creates the "notch" | Absent | Prominent in epicardium; difference between endo/epicardial $I_{to}$ underlies Brugada syndrome phenotype. |
| **Phase 2** (Plateau) | Inward $Ca^{2+}$ ($I_{Ca,L}$) balanced by outward $K^+$ ($I_{Ks}, I_{Kr}, I_{K1}$) | Cav1.2 (L-type calcium channels); sustained depolarization for $\sim 200\text{ ms}$ | Absent | Dihydropyridines & non-dihydropyridines (Verapamil, Diltiazem) block Cav1.2, reducing myocardial contractility. |
| **Phase 3** (Rapid Repol) | Outward $K^+$ Efflux ($I_{Kr}, I_{Ks}, I_{K1}$) | Delayed rectifier channels: hERG ($I_{Kr}$, rapid) & KCNQ1 ($I_{Ks}$, slow) | Outward $K^+$ Efflux ($I_{K}$) | Class III antiarrhythmics (Amiodarone, Sotalol) block $I_{Kr}$, prolonging APD and QT interval (risk of Torsades). |
| **Phase 4** (Diastolic Rest / Pacemaker) | Inward Rectifier $K^+$ ($I_{K1}$) maintains resting potential at $-90\text{ mV}$ | High resting conductance to $K^+$; locks potential near $E_K$ ($-94\text{ mV}$) | **Prepotential / Diastolic Depolarization**: $I_f$ (HCN channels) + $I_{Ca,T}$ + declining $I_K$ | **Ivabradine** selectively blocks $I_f$ channels in SA node, slowing heart rate without altering contractility or BP. |

#### Autonomic Regulation of Cardiac Electrophysiology

1. **Sympathetic Stimulation ($\beta_1$-Adrenergic Receptor Pathway)**:
   - Agonist: Norepinephrine / Epinephrine $\rightarrow \text{G}_s\alpha$ protein $\rightarrow \uparrow$ Adenylyl Cyclase $\rightarrow \uparrow$ cyclic AMP $\rightarrow$ activates Protein Kinase A (PKA).
   - **Positive Chronotropy**: PKA phosphorylates HCN channels, shifting activation curve to more positive potentials $\rightarrow$ increases Phase 4 slope $\rightarrow \uparrow$ heart rate.
   - **Positive Inotropy**: PKA phosphorylates L-type $Ca^{2+}$ channels (Cav1.2) $\rightarrow \uparrow Ca^{2+}$ entry during Phase 2.
   - **Positive Lusitropy (Accelerated Relaxation)**: PKA phosphorylates **Phospholamban (PLB)** at Ser-16. Unphosphorylated PLB inhibits SERCA2a; upon phosphorylation, PLB disinhibits SERCA2a $\rightarrow$ accelerated $Ca^{2+}$ reuptake into SR $\rightarrow$ shortened contraction time, preserving diastolic filling duration during tachycardia.
2. **Parasympathetic Stimulation ($M_2$-Muscarinic Receptor Pathway)**:
   - Agonist: Acetylcholine (Vagus nerve) $\rightarrow \text{G}_i\alpha$ and $\text{G}_{\beta\gamma}$ subunits.
   - $\text{G}_i\alpha$ inhibits Adenylyl Cyclase $\rightarrow \downarrow$ cAMP $\rightarrow \downarrow$ Phase 4 slope.
   - $\text{G}_{\beta\gamma}$ directly opens **GIRK1/4 channels** (G-protein coupled inwardly rectifying $K^+$ channels, carrying $I_{K,ACh}$) $\rightarrow$ hyperpolarizes nodal membrane (increases Maximum Diastolic Potential to $-65\text{ mV}$) $\rightarrow$ profound negative chronotropy and negative dromotropy (AV conduction delay).

---

### 🔴 Extended — Deep Study (3mo+)
> Advanced mathematical biophysics, channelopathies, molecular mechanisms, and INI CET vignette cases.

#### Nernst and Goldman Equilibrium Potentials in Cardiomyocytes

The resting and peak membrane potentials are determined by relative ionic permeabilities ($P_K : P_{Na} : P_{Ca} \approx 1 : 0.01 : 0.001$ at Phase 4):

$$E_{\text{ion}} = \frac{RT}{zF} \ln \left( \frac{[\text{ion}]_{\text{out}}}{[\text{ion}]_{\text{in}}} \right) = \frac{61.5}{z} \log_{10} \left( \frac{[\text{ion}]_{\text{out}}}{[\text{ion}]_{\text{in}}} \right) \quad (\text{at } 37^\circ\text{C})$$

- **Equilibrium Potentials**:
  - $E_K = 61.5 \log_{10} (4.0 / 140) \approx -95.3\text{ mV}$.
  - $E_{Na} = 61.5 \log_{10} (145 / 10) \approx +71.4\text{ mV}$.
  - $E_{Ca} = \frac{61.5}{2} \log_{10} (2.0 / 0.0001) \approx +132\text{ mV}$.
- Because resting ventricular permeability to $K^+$ ($I_{K1}$) dominates, resting potential is $-90\text{ mV}$ (near $E_K$). During Phase 0, $P_{Na}$ surges over 500-fold, shifting the peak overshoot toward $E_{Na}$ ($+20\text{ to }+30\text{ mV}$).

#### Molecular Channelopathies and High-Yield Vignettes

```
                       ┌── Long QT Syndrome 1 (LQT1): KCNQ1 mutation (loss of IKs) ──► Triggered by exercise/swimming
                       │
Congenital Long QT ────┼── Long QT Syndrome 2 (LQT2): KCNH2 / hERG mutation (loss of IKr) ──► Triggered by auditory alarms
Syndromes              │
                       └── Long QT Syndrome 3 (LQT3): SCN5A gain-of-function (persistent INa) ──► Occurs during sleep/rest
```

- **Catecholaminergic Polymorphic Ventricular Tachycardia (CPVT)**:
  - Mutation in cardiac **Ryanodine Receptor (RyR2)** or **Calsequestrin (CASQ2)**.
  - Excessive diastolic $Ca^{2+}$ leak from SR during exercise $\rightarrow$ activates forward NCX ($3 Na^+$ in : $1 Ca^{2+}$ out) $\rightarrow$ inward depolarizing current $\rightarrow$ **Delayed Afterdepolarizations (DADs)** $\rightarrow$ bidirectional ventricular tachycardia. Treated with Beta-blockers and Flecainide.
- **Early Afterdepolarizations (EADs)**:
  - Occur during Phase 2 or Phase 3 when APD is prolonged (hypokalemia, hypomagnesemia, Class III drugs). Reactivation of L-type $Ca^{2+}$ channels causes secondary depolarizations $\rightarrow$ triggers **Torsades de Pointes**. Treatment of choice: Intravenous **Magnesium Sulfate**.

#### INI CET Multi-Disciplinary Practice Vignettes

**Question 1 (Electrophysiology / Drug Target)**:
*A 62-year-old male with chronic stable angina and severe COPD (FEV1 48% predicted) presents with a resting heart rate of 94 bpm in sinus rhythm. Echocardiogram shows normal left ventricular ejection fraction (58%). Which of the following agents can be safely administered to selectively reduce his heart rate without provoking bronchospasm or altering his myocardial inotropy?*
- (A) Metoprolol succinate
- (B) Verapamil
- (C) Ivabradine
- (D) Digoxin
- **Answer**: **(C)**.
- **Detailed Explication**: Ivabradine acts specifically on the hyperpolarization-activated cyclic nucleotide-gated (HCN) channels responsible for the cardiac pacemaker "funny" current ($I_f$) in the SA node. It slows diastolic depolarization in Phase 4, resulting in a reduction of sinus heart rate without affecting ventricular contractility, intracardiac conduction, blood pressure, or bronchial airway resistance. Beta-blockers (even $\beta_1$-selective agents like Metoprolol) carry a residual risk of bronchospasm in severe COPD. Verapamil has negative inotropic effects.

**Question 2 (Biophysics / Contractility)**:
*During an in-vitro cardiac muscle experiment, a researcher isolates human ventricular papillary muscle and evaluates calcium-induced calcium release. Phosphorylation of which of the following molecular targets directly mediates the accelerated rate of cardiac muscle relaxation observed following dobutamine administration?*
- (A) Troponin C
- (B) Phospholamban at Serine-16
- (C) Dihydropyridine receptor alpha subunit
- (D) Calsequestrin
- **Answer**: **(B)**.
- **Detailed Explication**: Lusitropy (the rate of myocardial relaxation) is primarily accelerated by Protein Kinase A-mediated phosphorylation of **Phospholamban** at the Serine-16 residue. In its dephosphorylated form, phospholamban inhibits the affinity of the SR $Ca^{2+}$-ATPase (SERCA2a) for calcium. When phosphorylated by PKA following $\beta_1$-adrenergic receptor stimulation, this inhibition is removed, driving rapid $Ca^{2+}$ reuptake into the SR lumen.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
