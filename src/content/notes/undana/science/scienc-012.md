---
exam: undana
examName: UNDANA Admission (Indonesia)
subject: science
subjectName: "Science (Saintek)"
topic: scienc-012
topicName: Nervous and Endocrine Coordination
weight: 3
country: indonesia
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Nervous and Endocrine Coordination

### 🟢 Lite — Quick Review (1h–1d)
> The fact that decides the question: the **hypothalamus** is the single bridge between electrical signalling and hormonal signalling — read every UNDANA item through that lens.

- **Nervous system** = neurons, synapses, neurotransmitters → fast (milliseconds), short-lived, point-to-point.
- **Endocrine system** = ductless glands → hormones in blood → slower (seconds to days), widespread, long-lived.
- **Resting membrane potential** is set by ion gradients and quantified by the Nernst relation: V_m = (RT / zF) · ln([ion]_out / [ion]_in), with R = 8.314 J/(mol·K), T in K, z = ion valence, F = 96485 C/mol; unit V, dimension [M L² T⁻³ A⁻¹].
- **Nerve impulse speed** v = d / t (m/s), so a 1.2 m impulse in 0.02 s gives 60 m/s.
- **Hormone blood concentration** C = n / V (mol/L), n in mol, V plasma volume in L.

| Feature | Nervous system | Endocrine system |
|---|---|---|
| Signal type | Electrical + chemical | Chemical only |
| Transmission | Across synapse | Via bloodstream |
| Speed | Fast (ms) | Slow (s–days) |
| Duration | Brief | Long-lasting |
| Target | Specific neurons | Cells with matching receptors |

> 💡 **High-Yield Memory Hook — "HEADS":** **H**ypothalamus → **E**ndocrine bridge → **A**ction potential → **D**uctless glands → **S**ynaptic cleft. Five letters, one sentence covers the whole topic.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Core architecture of coordination

A stimulus is detected by receptors, encoded as graded potentials, then fired down the axon as an **action potential** — an all-or-nothing depolarisation reaching roughly +30 mV from the −70 mV resting value. The signal crosses a synapse when voltage-gated Ca²⁺ channels open, vesicles fuse with the presynaptic membrane, and neurotransmitter (acetylcholine, noradrenaline, dopamine, GABA, glutamate) binds postsynaptic receptors, producing an EPSP or IPSP.

> 📌 **Formula Check:** Threshold current density decreases as axon diameter increases, so I_threshold ∝ 1/(axon diameter); dimension [L⁻¹]. Wider axons (or myelinated ones with nodes of Ranvier) conduct faster.

#### The hypothalamus–pituitary axis

The hypothalamus is the coordinator. Its neurosecretory neurons make **ADH** and **oxytocin**, which travel down axons and are stored in the **posterior pituitary**. The anterior pituitary is controlled differently: hypothalamic releasing hormones (TRH, CRH, GnRH) reach it through the hypophyseal portal system and trigger release of TSH, ACTH, FSH, LH, GH and prolactin.

#### Feedback control

Homeostasis relies on **negative feedback**. Example: low blood thyroxine → hypothalamus releases TRH → anterior pituitary releases TSH → thyroid releases T3/T4 → T3/T4 inhibits both TRH and TSH. **Positive feedback** exists (oxytocin in childbirth, LH surge in ovulation) and is a frequent UNDANA trap.

#### Comparison matrix: glands often confused

| Gland / structure | Hormone(s) | Regulation | Trap to avoid |
|---|---|---|---|
| Posterior pituitary | ADH, oxytocin | Synthesised in hypothalamus, stored here | Not synthesised in the pituitary itself |
| Anterior pituitary | TSH, ACTH, GH, FSH, LH, prolactin | Hypothalamic releasing hormones | Often mislabelled as the "master gland" — that label belongs to the hypothalamus |
| Adrenal medulla | Adrenaline, noradrenaline | Direct sympathetic nerve | Often confused with cortex |
| Adrenal cortex | Cortisol, aldosterone | ACTH from anterior pituitary | Two different control modes in one organ |
| Pancreas (Islets of Langerhans) | Insulin (β cells), glucagon (α cells) | Blood glucose level | Easy to swap the cell type with the hormone |

#### Worked question and resolution

A student observes that during a sudden loud noise, heart rate rises within one second, but blood glucose remains elevated for thirty minutes afterwards. Which pairing of system and property explains the difference?

A. Nervous — slow onset, long duration
B. Endocrine — fast onset, short duration
C. Nervous — fast onset, short duration; Endocrine — slow onset, long duration
D. Both systems act through identical neurotransmitters

Working it through: the heart-rate change is driven by sympathetic nerves releasing noradrenaline directly onto cardiac β₁ receptors (milliseconds, gone when stimulation stops). The glucose rise is sustained by adrenal cortical cortisol and glucagon released into plasma, exerting effects that persist for tens of minutes. Option A reverses the systems, B is internally inconsistent, D is wrong because endocrine messengers are hormones, not neurotransmitters. The correct choice is **C**.

> ⚠️ **Examiner Trap:** "Faster" and "longer-lasting" are not opposites of "slower" and "shorter". The systems are categorised by mechanism, not by the time axis alone. Many UNDANA items present partially correct descriptions to test this exact distinction.

---

### 🔴 Extended — Deep Study (3mo+)

#### Where the two systems actually merge

The adrenal medulla is embryologically a modified sympathetic ganglion. Chromaffin cells release **adrenaline** and **noradrenaline** into the blood rather than across a synapse, so a single neural command produces a hormone surge that simultaneously reaches the heart, bronchioles, liver and skeletal muscle. This is the textbook example of nervous-to-endocrine conversion and the cleanest answer to "give one example of nervous–endocrine integration".

#### Quantitative edge cases

1. **Nernst sign and valence.** The sign of V_m depends on z. For K⁺ (z = +1), ln([K⁺]_out/[K⁺]_in) is negative, so V_m is negative inside — matching the measured resting potential of about −70 mV. For Ca²⁺ (z = +2), the same log magnitude gives twice the voltage contribution. Always check z before plugging in.
2. **Action-potential frequency coding.** Strength is encoded as f = 1/t_AP (Hz), not as a larger spike. A stronger stimulus produces more spikes per second, not a taller spike.
3. **Refractory limits.** During the absolute refractory period (~1–2 ms) no new spike can fire, capping firing rate near 500 Hz in large motor neurons but closer to 50–100 Hz in many sensory neurons. UNDANA numericals sometimes quote this range — treat the upper figure as a ceiling, not a typical value.

#### Common advanced traps

1. Treating steroid and peptide hormones as interchangeable: steroid hormones (cortisol, aldosterone, oestradiol, testosterone) cross the membrane and bind intracellular receptors; peptide hormones (insulin, glucagon, ADH, oxytocin) bind surface receptors and use second messengers such as cAMP.
2. Calling the pancreas "the" endocrine gland — it is both exocrine (digestive enzymes via the pancreatic duct) and endocrine (islets, ductless). The duct criterion is the cleanest test.
3. Assuming all feedback is negative: positive feedback in childbirth (oxytocin) and ovulation (LH) is required for amplification, not stability.
4. Conflating "hypothalamus" with "pituitary": the hypothalamus makes releasing hormones; the anterior pituitary executes them.
5. Believing the endocrine system has no fast pathway: adrenaline release from the adrenal medulla is triggered in under a second.

#### Advanced practice prompts

1. Sketch and label a negative-feedback diagram for the TSH–thyroxine axis, marking the hypothalamus, anterior pituitary, thyroid, and the two inhibitory arrows. Explain what would happen to TSH if the thyroid were surgically removed, and why TRH would also change.
2. A motor axon of diameter 5 µm conducts at 50 m/s, another of diameter 10 µm conducts at about 100 m/s under the same conditions. Using the inverse relation between threshold current and axon diameter, predict the conduction speed of a 20 µm axon and identify the limit of this proportionality (it is only qualitative because myelination and temperature dominate in real tissue).

---

## Continue your study

- **[View this topic in your UNDANA Admission (Indonesia) roadmap](/roadmap/?exam=undana&duration=1mo)** — see where "Nervous and Endocrine Coordination" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=undana&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UNDANA Admission (Indonesia) exam overview](/exams/undana/)** — pattern, eligibility, and syllabus
- **[All Science (Saintek) notes](/notes/undana/science/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
