---
exam: neet-pg
examName: NEET PG
subject: physiology
subjectName: Physiology
topic: physio-003
topicName: Nerve Muscle Physiology
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-17"
---

# Nerve Muscle Physiology

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Nerve Muscle Physiology** describes how excitable cells — neurons and muscle fibers — generate, propagate, and convert electrical signals into mechanical force. The four recurring building blocks are: a negative **resting membrane potential (RMP)** of roughly −70 to −90 mV set mainly by K⁺ leak, an **all-or-none action potential (AP)** triggered near −55 mV, **synaptic transmission at the neuromuscular junction (NMJ)** via acetylcholine on nicotinic N2 receptors, and **excitation–contraction (E–C) coupling** linking the sarcolemmal AP to Ca²⁺ release from the sarcoplasmic reticulum.

| Term | Definition | Typical value |
|---|---|---|
| RMP | Steady voltage across the membrane at rest | ~ −70 to −90 mV |
| Threshold | Voltage at which Na⁺ channels open en masse | ~ −55 mV |
| Nerve conduction velocity | Speed of AP along a myelinated axon | up to ~120 m/s |
| Nernst factor at 37 °C | (R·T)/(z·F) for monovalent ion | ~61.5 mV |
| MEPP amplitude | Spontaneous mini end-plate potential | ~0.5 mV |

> 💡 **High-Yield Memory Hook:** **"A Nerve AChs Cross-Bridges"** — steps in skeletal contraction = **A**P travels down motor axon → **N**euromuscular junction (Ca²⁺ entry, vesicle fusion) → **A**Ch binds N2 receptor → **C**a²⁺ released via DHP–RyR1 coupling → **S**arcomere shortens via **Cross-Bridges**. Also recall **A**bsolute refractory = Na⁺ inactivation gate **A**bsolutely closed.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Resting Potential and the Nernst/GHK Framework
The **RMP** is not a single Nernst potential — it is a weighted average dominated by K⁺ permeability. The **Nernst equation** gives the equilibrium potential for one ion:

> 📌 **Formula Check:** E_ion = (R·T / (z·F)) · ln([ion]_out / [ion]_in) ≈ 61.5/z · log₁₀([ion]_out / [ion]_in) mV at 37 °C. R = 8.314 J/(mol·K), F = 96,485 C/mol, z = valence, dimensions [V].

Because several ions contribute, the real RMP is fit by the **Goldman–Hodgkin–Katz (GHK) voltage equation**:

> V_m = (R·T/F) · ln[(P_K[K⁺]_out + P_Na[Na⁺]_out + P_Cl[Cl⁻]_in) / (P_K[K⁺]_in + P_Na[Na⁺]_in + P_Cl[Cl⁻]_out)]

The permeability ratio **P_K : P_Na : P_Cl ≈ 1 : 0.04 : 0.45** pushes the resting value close to E_K (≈ −90 mV). The **Na⁺/K⁺-ATPase** then maintains the ionic gradients that the leak channels dissipate.

#### Action Potential and Refractoriness
1. **Resting** — RMP dominated by K⁺ leak.
2. **Depolarization** — voltage-gated Na⁺ channels open (activation gate opens, inactivation gate still open).
3. **Repolarization** — Na⁺ channels inactivate; voltage-gated K⁺ channels open.
4. **Hyperpolarization / after-potential** — K⁺ channels close slowly; HCN/"funny" channels and the Na⁺/K⁺-ATPase restore gradients.

The **absolute refractory period** (Na⁺ inactivation gate closed) cannot be re-excited; the **relative refractory period** (some Na⁺ channels recovered, K⁺ still open) needs a stronger-than-normal stimulus. In **myelinated axons**, APs leap between **Nodes of Ranvier** — **saltatory conduction** — raising velocity while cutting metabolic cost.

#### Neuromuscular Junction
A nerve AP opens presynaptic **voltage-gated Ca²⁺ channels**; Ca²⁺ triggers SNARE-mediated vesicle fusion. Each vesicle releases one **quantum** of ACh (~5000–10,000 molecules). Spontaneous quantal leakage produces **MEPPs** (~0.5 mV). A nerve-evoked release of many quanta generates an **EPP** (~40–50 mV) that reliably crosses threshold. **Acetylcholinesterase** in the cleft hydrolyses ACh to acetate + choline within <1 ms.

#### Excitation–Contraction Coupling
The T-tubule AP is sensed by the **dihydropyridine (DHP) receptor**, which mechanically opens the **ryanodine receptor (RyR1)** of the sarcoplasmic reticulum. Released Ca²⁺ binds **troponin C**, shifting tropomyosin to expose actin sites. **SERCA** pumps Ca²⁺ back to end the contraction. Relaxation fails in **rigor mortis** because ATP is unavailable to detach cross-bridges.

#### Concept Comparison Matrix

| Feature | Skeletal muscle | Cardiac muscle | Smooth muscle |
|---|---|---|---|
| Striations | Yes | Yes | No |
| Nuclei per fiber | Many (multinucleated) | One (central) | One (central) |
| T-tubule location | A–I junction | Z line | Sparse / caveolae |
| Intercellular junctions | None | Intercalated discs (gap junctions + desmosomes) | Gap junctions in unitary smooth muscle |
| Ca²⁺ source for contraction | SR only | SR + L-type Ca²⁺ current (Ca²⁺-induced Ca²⁺ release) | Extracellular + SR |
| Tetanus possible | Yes (fused at high frequency) | No (long absolute refractory period) | Yes (via latch state) |
| Neuromuscular receptor | Nicotinic N2 | Autonomic (M2, β1) | Autonomic (M3, α1) |
| Energy efficiency | Moderate | Moderate | High via latch bridges |

#### Length–Tension and Force–Velocity
Tetanic force peaks at the **optimal sarcomere length (~2.0–2.2 µm)** and falls when filaments double-overlap or are pulled apart. Shortening velocity is maximal under zero load (V_max) and falls hyperbolically as load rises (Hill equation).

#### 🎯 Exam-Level Worked Problem
**Question:** A 45-year-old man presents with ptosis, diplopia, and fatigable weakness improving with rest. Edrophonium test is positive. Which statement about the defective synaptic event at the NMJ is **most accurate**?

A. Autoantibodies block muscarinic M3 receptors on the motor end plate.
B. Autoantibodies destroy postsynaptic nicotinic N2 receptors.
C. Reduced voltage-gated Ca²⁺ channel function on the presynaptic terminal.
D. Acetylcholinesterase deficiency in the synaptic cleft.
E. Autoantibodies against the ryanodine receptor RyR1.

**Solution:** The clinical picture is classic **myasthenia gravis** — fatigable weakness that improves with an anticholinesterase (edrophonium). Antibodies are directed against the **postsynaptic nicotinic N2 (ACh) receptor** at the motor end plate, reducing the number of functional receptors → smaller EPPs with repeated activity. Correct answer: **B**.

- Option A is wrong because skeletal-muscle end plates use **nicotinic** (N2), not muscarinic, receptors.
- Option C describes **Lambert–Eaton Myasthenic Syndrome**, in which weakness *improves* with repeated activity and autonomic symptoms are common.
- Option D would cause continuous depolarization, not fatigable weakness.
- Option E causes malignant hyperthermia susceptibility, not myasthenia.

> ⚠️ **Examiner Trap:** Distinguish **myasthenia gravis** (postsynaptic N2 receptor loss, weakness worsens with use) from **Lambert–Eaton** (presynaptic P/Q-type Ca²⁺ channel loss, weakness *improves* with use). Students routinely swap them.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Refractory Periods and Cardiac Tetany
The long **absolute refractory period** of ventricular myocytes — sustained by the **plateau phase** (L-type Ca²⁺ influx balanced by K⁺ efflux) — is what prevents cardiac tetanus. Even with sustained tetanic stimulation of skeletal muscle, cardiac muscle cannot be tetanized because voltage-gated Na⁺ channels remain inactivated for almost the entire plateau. This is a frequent assertion-reason question: *"Because cardiac AP has a plateau, it cannot summate"* — both statements are individually true and the link is causal.

#### Cross-Bridge Cycle in Detail
1. **Attached (rigor) state** — ADP + P_i bound; myosin head already in post-power-stroke orientation.
2. **Cross-bridge release** — new ATP binds the myosin head, lowering its affinity for actin.
3. **Re-cocking (recovery stroke)** — ATP hydrolysis re-extends the head.
4. **Cross-bridge attachment** — head binds a new actin monomer.
5. **Power stroke** — P_i release, head pivots and slides the thin filament.
6. **Detachment** — only on binding of a fresh ATP; hence rigor mortis when ATP runs out.

> ⚠️ **Examiner Trap:** A head *detaches* when ATP binds, and only **after detachment** is ATP hydrolyzed. Many students invert these two events.

#### Length Constant and Time Constant
The passive spread of a subthreshold depolarization along an axon follows the **cable equation**:

> λ = √(r_m / r_i); τ = r_m · c_m

Larger r_m (better insulation, e.g. myelin) increases λ; larger r_i (thinner axon, less intracellular electrolyte) decreases λ. Increasing λ or τ makes signals reach further before decaying — clinically relevant when comparing demyelinated (multiple sclerosis) versus normal fibers.

#### Muscle Spindles and Golgi Tendon Organs

| Receptor | Location | Afferent fiber | Detects | Reflex |
|---|---|---|---|---|
| Muscle spindle (intrafusal) | Parallel to extrafusal fibers | Ia (primary, dynamic + static), II (secondary, static) | Length and velocity of stretch | Stretch (myotatic) reflex — contraction |
| Golgi tendon organ | In series at musculotendinous junction | Ib | Tension | Inverse myotatic reflex — autogenic inhibition, protects against tear |

The **stretch reflex** monosynaptic arc: Ia afferent → α-motor neuron in spinal cord → extrafusal fiber contraction. **Muscle tone** is the resting resistance to passive stretch, contributed to by spindle baseline firing.

#### Fiber-Type Physiology
- **Type I (slow oxidative)** — high mitochondria, myoglobin, fatigue-resistant (postural muscles).
- **Type IIa (fast oxidative-glycolytic)** — intermediate.
- **Type IIb / IIx (fast glycolytic)** — large, pale, fatigue quickly (e.g. gastrocnemius).

Endurance training shifts IIx toward IIa; disuse and denervation cause **denervation atrophy** with fibrillations (fibrillation potentials on EMG).

#### Advanced Practice Prompts
1. A toxin blocks voltage-gated Na⁺ channels irreversibly in their open state. Predict (a) the resting membrane potential change, (b) whether the absolute refractory period lengthens, shortens, or vanishes, and (c) whether saltatory conduction in a myelinated axon is preserved.
2. Compare the calcium sources and removal mechanisms used during one twitch in skeletal vs cardiac vs smooth muscle, and explain why this dictates which muscle can sustain a tonic "latch" contraction with minimal ATP cost.

---

## Continue your study

- **[View this topic in your NEET PG roadmap](/roadmap/?exam=neet-pg&duration=1mo)** — see where "Nerve Muscle Physiology" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neet-pg&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NEET PG exam overview](/exams/neet-pg/)** — pattern, eligibility, and syllabus
- **[All Physiology notes](/notes/neet-pg/physiology/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
