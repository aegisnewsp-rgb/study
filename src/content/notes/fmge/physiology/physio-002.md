---
exam: fmge
examName: FMGE
subject: physiology
subjectName: "Physiology"
topic: physio-002
topicName: "Nerve Physiology and Synaptic Transmission"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-12"
---

# Nerve Physiology and Synaptic Transmission

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

- **Resting membrane potential** in a mammalian neuron sits near **−70 mV**, set mainly by **K⁺ permeability** and maintained by the **Na⁺/K⁺-ATPase** (3 Na⁺ out / 2 K⁺ in per ATP).
- An **action potential (AP)** is an all-or-none depolarization that begins at the **axon hillock** (highest Na⁺-channel density) once the membrane reaches **threshold ≈ −55 mV**.
- **Phases:** rapid **Na⁺ influx** (depolarization) → **Na⁺-channel inactivation + K⁺ efflux** (repolarization) → brief **after-hyperpolarization**.
- **Saltatory conduction** along **myelinated axons** regenerates the AP only at **Nodes of Ranvier**, where voltage-gated Na⁺ channels cluster.
- At a **chemical synapse**, presynaptic **Ca²⁺ entry** triggers SNARE-mediated **vesicle fusion**, releasing neurotransmitter (e.g., ACh, glutamate, GABA) into the ~20–40 nm **synaptic cleft**.
- **Postsynaptic potentials** are either **EPSPs** (Na⁺/Ca²⁺ influx, depolarizing) or **IPSPs** (Cl⁻ influx or K⁺ efflux, hyperpolarizing), and they **summate spatially and temporally** at the axon hillock.

> **Exam tip:** FMGE loves clinical stems — *myasthenia gravis*, *organophosphate poisoning*, *multiple sclerosis* — all map to one step in this cascade.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Resting Potential and the Nernst Equation
The **resting membrane potential (Vₘ ≈ −70 mV)** is dominated by K⁺ leak channels, not by the Na⁺/K⁺ pump directly. For any single ion the equilibrium potential follows the **Nernst equation**:

> **E_ion = (RT / zF) · ln([ion]ₒᵤₜ / [ion]ᵢₙ)**

where **R = 8.314 J/(mol·K)**, **T** = absolute temperature, **z** = ionic valence, **F = 96 485 C/mol**. Because real membranes are permeable to **Na⁺, K⁺, and Cl⁻ simultaneously**, the actual Vₘ is given by the **Goldman–Hodgkin–Katz (GHK) voltage equation**, which weights each ion by its relative permeability (P_K ≫ P_Na at rest).

#### Action Potential Phases
| Phase | Dominant event | Net ion flux |
|---|---|---|
| Resting | K⁺ leak dominates | K⁺ out |
| Depolarization (to threshold) | Voltage-gated Na⁺ channels open | Na⁺ in |
| Peak (~+30 mV) | Na⁺ channels inactivate | K⁺ out begins |
| Repolarization | Voltage-gated K⁺ channels open | K⁺ out |
| After-hyperpolarization | K⁺ channels slow to close | K⁺ out |
| Recovery | Na⁺/K⁺-ATPase restores gradients | 3 Na⁺ out / 2 K⁺ in |

The **all-or-none law** applies once threshold is reached; **subthreshold** stimuli produce graded **local (electrotonic) potentials** that decay with the **length constant λ = √(r_m / r_i)** and rise with the **membrane time constant τ = r_m · c_m**.

#### Refractory Periods
- **Absolute refractory period** — Na⁺ channels are inactivated; **no AP** can fire, regardless of stimulus strength.
- **Relative refractory period** — some Na⁺ channels have recovered while K⁺ channels are still open; an AP needs a **stronger-than-normal** stimulus.

#### Synaptic Transmission Steps
1. AP arrives at the presynaptic terminal.
2. Depolarization opens **voltage-gated Ca²⁺ channels**.
3. Ca²⁺ triggers **SNARE-mediated vesicle fusion**.
4. **Neurotransmitter** is released into the **synaptic cleft**.
5. Binds **postsynaptic receptors** → **EPSP** (Na⁺/Ca²⁺ influx) or **IPSP** (Cl⁻ influx / K⁺ efflux).
6. Signal terminated by **reuptake, enzymatic degradation** (e.g., **acetylcholinesterase** cleaves ACh to acetate + choline), or **diffusion**.

#### Neuromuscular Junction (NMJ)
Somatic motor neurons release **ACh** onto **nicotinic (N_M)** receptors at the motor end-plate, producing a large **end-plate potential (EPP)** that reliably fires a muscle AP.

> **Pharmacology hook:** **Curare** competitively blocks N_M receptors; **succinylcholine** depolarizes the end-plate; **organophosphates** inhibit acetylcholinesterase; **myasthenia gravis** involves autoantibodies against the same N_M receptors.

#### Common MCQ Traps in FMGE
- Confusing **absolute vs relative refractory period** definitions.
- Saying Vₘ equals the **K⁺ Nernst potential** instead of the GHK-weighted Vₘ.
- Assuming APs travel **under** the myelin — they regenerate only at **Nodes of Ranvier**.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Clinical Correlations
**Saltatory conduction** in **myelinated axons** is not a luxury — it raises conduction velocity roughly in proportion to axon diameter (≈ **6·d m/s** for d in µm) and cuts metabolic cost because ionic exchange happens only at nodes. This is why **demyelinating diseases** (multiple sclerosis, Guillain-Barré syndrome) produce measurable **conduction slowing, block, and conduction failure**, presenting clinically as weakness, paresthesia, and visual loss (optic neuritis in MS).

#### Electrical vs Chemical Synapses
**Electrical synapses** use **connexons** (gap junctions) for direct ionic flow — **bidirectional, near-zero delay, no neurotransmitter**. They dominate in **cardiac muscle, smooth muscle, and some CNS neurons**. By contrast, chemical synapses impose a **synaptic delay of ~0.5 ms** but allow **amplification, modulation, and unidirectional signalling**.

#### Summation and Integration
Single EPSPs are usually subthreshold; firing requires **summation**:
- **Spatial summation** — simultaneous inputs at different dendritic sites.
- **Temporal summation** — rapid successive inputs at one site.
The integrated signal travels **passively (electrotonically)** to the **axon hillock**, the lowest-threshold site because of dense **voltage-gated Na⁺ channels**. **IPSPs** subtract from this sum, often via **GABA_A** (Cl⁻) or **glycine** (Cl⁻) receptors; **EPSPs** add via **AMPA/NMDA** (glutamate) or nicotinic (ACh) receptors.

#### Common Mistakes to Avoid
- The **Na⁺/K⁺-ATPase** does **not** generate the AP upstroke — it only restores gradients afterward, contributing only a few mV electrogenically.
- The **site of AP initiation** (axon hillock) is distinct from the **site of synaptic integration** (soma and dendrites).
- **Lambert-Eaton syndrome** autoantibodies target **presynaptic Ca²⁺ channels** (less ACh release), whereas **myasthenia gravis** targets **postsynaptic ACh receptors** — both weaken the NMJ but at different steps.

> **Worked micro-example:** A motor neuron fires at the NMJ. Ca²⁺ enters the motor nerve terminal, vesicles fuse, ACh is released, binds **N_M receptors**, opens Na⁺/K⁺ channels, and the end-plate depolarizes by ~40 mV — easily exceeding threshold and triggering a muscle AP. Give **curare** → receptor blocked → no EPP → **flaccid paralysis**. Give **neostigmine** → acetylcholinesterase inhibited → more ACh available → partial reversal of myasthenic weakness.

> **Strategy for FMGE (3% weight, ~2–3 MCQs):** Memorize the AP ion/time table, the absolute/relative refractory distinction, NMJ pharmacology (curare, succinylcholine, organophosphates, myasthenia), and the EPSP vs IPSP direction. Clinical vignettes almost always point to **one specific step** in the cascade.

#### Practice Prompts
1. A patient with organophosphate poisoning presents with salivation, bronchospasm, and miosis. **Which enzyme is inhibited, and which step of synaptic transmission is prolonged?**
2. In multiple sclerosis, conduction is slowed most severely at **which anatomical structure, and why does demyelination reduce conduction velocity?**

---

## Continue your study

- **[View this topic in your FMGE roadmap](/roadmap/?exam=fmge&duration=1mo)** — see where "Nerve Physiology and Synaptic Transmission" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=fmge&duration=1d)** — 1-day sprint covering highest-weight topics
- **[FMGE exam overview](/exams/fmge/)** — pattern, eligibility, and syllabus
- **[All Physiology notes](/notes/fmge/physiology/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
