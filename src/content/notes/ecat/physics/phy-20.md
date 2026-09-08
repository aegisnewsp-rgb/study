---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: physics
subjectName: Physics
topic: phy-20
topicName: Electronics and Semiconductors
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.053591"
lastUpdated: "2026-09-08"
diagramPrompt: "Clean educational diagram showing Electronics and Semiconductors with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Electronics and Semiconductors

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your ECAT Physics paper.

Electronics and Semiconductors covers how doped crystals conduct, how a p-n junction rectifies current, and how transistors amplify signals. Silicon has a band gap of about **1.12 eV**; germanium about **0.67 eV**. Doping silicon with phosphorus creates **n-type** material (electrons are majority carriers); doping with boron creates **p-type** material (holes are majority carriers). At their junction a **depletion region** forms with a built-in barrier of roughly **0.7 V for Si** and **0.3 V for Ge** at 300 K. Forward bias lowers this barrier; reverse bias widens it. The thermal voltage **V_T = kT/q ≈ 25.85 mV** at 300 K appears in the diode equation **I = I_s(exp(V/(nV_T)) − 1)**.

| Symbol | Meaning | Typical value at 300 K |
| --- | --- | --- |
| E_g (Si) | Band-gap energy | 1.12 eV |
| E_g (Ge) | Band-gap energy | 0.67 eV |
| V_barrier (Si) | Built-in junction potential | ~0.7 V |
| V_T | Thermal voltage kT/q | 25.85 mV |

- Remember: forward current grows exponentially, reverse current saturates near I_s.
- A Zener diode is designed to operate in **reverse breakdown** as a voltage regulator.
- For a BJT in CE mode, **β = I_c / I_b**; α = β / (β + 1).

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students working through the topic over a few weeks.

#### Band structure and classification

Energy band theory classifies solids by the separation of the valence band and conduction band. Conductors have overlapping bands; insulators have E_g above roughly 5 eV; **semiconductors** sit in between with E_g ≈ 0.6–1.5 eV. Thermal excitation lifts electrons across the gap, leaving holes behind. The intrinsic carrier concentration follows **n_i² = A·T³·exp(−E_g/kT)**, so n_i roughly doubles for every 10 K rise near room temperature.

#### Doping and carrier types

Adding pentavalent phosphorus to silicon donates a free electron, producing **n-type** material. Adding trivalent boron creates a missing bond, producing **p-type** material with holes as majority carriers. Conductivity becomes **σ = nqμ_n + pqμ_p**, where mobility μ has units of m²/(V·s) and q = 1.6 × 10⁻¹⁹ C. Drift velocity under field E is **v_d = μE**.

#### The p-n junction and diode

When p-type and n-type regions meet, carriers diffuse across, leaving behind ionised donors and acceptors that form a **depletion region**. Equilibrium is reached when the built-in field stops further diffusion. Under **forward bias**, the barrier collapses and current rises rapidly once V exceeds V_barrier. Under **reverse bias**, only a small reverse saturation current I_s flows until breakdown.

#### BJT basics

A bipolar junction transistor has three regions — emitter, base, collector — and two junctions. In **common-emitter (CE)** configuration, the input is at the base and the output at the collector. The current gain is **β = I_c / I_b**, related to α by α = β/(β+1). An n-p-n transistor biased in the **active region** has the base-emitter junction forward-biased and the base-collector junction reverse-biased.

| Device | Bias for normal operation | Typical use |
| --- | --- | --- |
| Rectifier diode | Forward bias conducts | AC to DC conversion |
| Zener diode | Reverse breakdown | Voltage regulator |
| LED | Forward bias | Indicator / display |
| Photodiode | Reverse bias | Light detection |
| BJT (n-p-n, CE) | BE forward, BC reverse | Amplifier / switch |

#### Typical ECAT question types

- Identifying majority carriers from a doping statement.
- Reading a diode I-V curve and finding dynamic resistance r_d ≈ nV_T/I near a given operating point.
- Computing collector current from β and base current.
- Naming the bias conditions for LED, photodiode, and Zener regulator.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for long-term mastery and trick-question spotting.

#### Mechanisms behind breakdown and recombination

Two distinct reverse-breakdown processes occur in diodes. **Zener breakdown** dominates below about 5.6 V and is caused by quantum-mechanical tunnelling of carriers through the narrowed depletion barrier. **Avalanche breakdown** dominates at higher reverse voltages and is caused by impact ionisation: carriers gain enough kinetic energy between collisions to liberate new electron-hole pairs, which then accelerate and multiply the chain. Treating these as interchangeable costs marks on assertion-reason items. Recombination in the depletion region also explains why the reverse saturation current I_s roughly doubles every 10 K — a frequent numerical trap where students assume I_s is constant.

#### Edge cases in the diode equation

The diode equation **I = I_s(exp(V/(nV_T)) − 1)** requires V in volts and V_T in volts. Plugging V in millivolts while leaving V_T at 25 mV is a classic unit-mismatch error. The ideality factor **n** lies between 1 (ideal diffusion current) and 2 (recombination-dominated). For small AC signals around a quiescent point Q, the small-signal (dynamic) resistance is **r_d = nV_T / I_Q**, often around 10–25 Ω in forward-biased signal diodes.

#### Transistor regions and biasing pitfalls

A BJT operates in **cutoff** (both junctions reverse-biased, I_c ≈ 0), **active** (BE forward, BC reverse, used for amplification), or **saturation** (both junctions forward-biased, V_CE ≈ 0.2 V, used for switching). β is **not constant**: it varies with I_c, temperature, and collector-emitter voltage. ECAT numericals may ask for the base resistor R_B needed to set a target I_C in a fixed-bias circuit: **R_B = (V_BB − V_BE) / I_B**, with V_BE ≈ 0.7 V for silicon.

#### Connections and worked micro-example

Suppose a silicon diode is forward-biased at I = 10 mA with n = 1 and V_T = 25.85 mV. Then r_d = (1 × 25.85 mV) / 10 mA ≈ **2.585 Ω**. A small AC ripple of 5 mV across it produces an AC current of about 5 mV / 2.585 Ω ≈ **1.93 mA**. This links directly to half-wave and full-wave rectifier analysis on the ECAT paper.

| Breakdown type | Typical voltage range | Dominant mechanism |
| --- | --- | --- |
| Zener | < ~5.6 V | Band-to-band tunnelling |
| Avalanche | > ~5.6 V | Impact ionisation |

- A diode is **not** a perfect switch: model it as 0.7 V drop (Si) plus small r_d.
- Always insert a **current-limiting resistor** in series with an LED.
- I_s roughly **doubles every 10 K**, so thermal runaway is a real design concern.

#### Practice prompts
1. A silicon diode carries 5 mA forward at 300 K with n = 1.2. Find the dynamic resistance and the AC current for a 4 mV ripple.
2. An n-p-n BJT has β = 100, V_BE = 0.7 V, V_BB = 5 V. Calculate R_B for I_C = 20 mA, then find α.

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Electronics and Semiconductors" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/ecat/physics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
