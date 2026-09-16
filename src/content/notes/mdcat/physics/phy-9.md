---



exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-9
topicName: Heat and Thermodynamics
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.085301"
lastUpdated: "2026-09-16"
diagramPrompt: "Clean educational diagram showing Heat and Thermodynamics with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Heat and Thermodynamics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Heat and Thermodynamics** describes how thermal energy moves, how gases behave when heated or compressed, and how engines convert heat into work. MDCAT tests 2–3 MCQs from this 4% Physics block, almost always anchored on the First Law, gas laws, and Carnot efficiency.

| Term | Definition | SI Unit |
|------|------------|---------|
| Temperature (T) | Measure of average kinetic energy of molecules | K (kelvin) |
| Heat (Q) | Energy in transit due to a temperature difference | J (joule) |
| Internal Energy (U) | Total KE + PE of molecules in a system | J |
| Specific Heat (c) | Heat needed to raise 1 kg by 1 K | J kg⁻¹ K⁻¹ |
| Latent Heat (L) | Heat for phase change at constant T | J kg⁻¹ |

- **First Law:** ΔU = Q − W (W = work done *by* the system).
- **Ideal gas:** PV = nRT, R = 8.314 J mol⁻¹ K⁻¹.
- **Carnot efficiency:** η = 1 − T_c/T_h (temperatures in **kelvin**).
- **Expansion:** ΔL = αL₀ΔT; ΔV = βV₀ΔT (β ≈ 3α).

> 💡 **High-Yield Memory Hook:** **"Q goes in, W goes out, U changes."** Sign rule: Q absorbed **+**, W done **by** system **+**, ΔU = Q − W. Pair with **"Temperature in Kelvin — always"** to dodge the most common MDCAT trap.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Laws You Must Know Cold

The **Zeroth Law** defines temperature by stating that if body A is in thermal equilibrium with B, and B with C, then A is in equilibrium with C — this is what makes thermometers possible. The **First Law** is conservation of energy restated for a gas: ΔU = Q − W. The **Second Law** (Kelvin-Planck and Clausius statements) sets the arrow of heat flow from hot to cold and limits heat-engine efficiency.

#### Four Thermodynamic Processes

| Process | Constant | Q | W | ΔU | Key relation |
|---------|----------|---|---|----|--------------|
| Isothermal | T | Q = W | nRT ln(V₂/V₁) | 0 | PV = const |
| Isochoric | V | nC_vΔT | 0 | Q = ΔU | W = 0 |
| Isobaric | P | nC_pΔT | PΔV | nC_vΔT | Q = ΔU + PΔV |
| Adiabatic | Q = 0 | 0 | −ΔU | nC_vΔT | PVᵞ = const |

For monatomic gases C_v = (3/2)R, γ = 5/3; for diatomic gases C_v = (5/2)R, γ = 7/5.

#### Heat Transfer Modes

Conduction rate through a slab: H = kAΔT/L, where **k** is thermal conductivity (W m⁻¹ K⁻¹). Convection transfers heat by bulk fluid motion. Radiation from a surface follows Stefan-Boltzmann: P = σeAT⁴, with σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴ and emissivity e ≤ 1 (e = 1 for a perfect blackbody).

#### Kinetic Theory Highlights

Pressure originates from molecular collisions: **PV = (1/3)Nm⟨v²⟩**, giving average translational kinetic energy per molecule = (3/2)k_BT and root-mean-square speed v_rms = √(3RT/M), where M is molar mass in kg mol⁻¹.

#### 🎯 Exam-Level Worked Problem

**Question:** An ideal monatomic gas absorbs 500 J of heat at constant pressure. If it does 200 J of work expanding, what is the change in internal energy?
*(A) −300 J  (B) +300 J  (C) +700 J  (D) +200 J*

#### Solution:
1. Apply the First Law: ΔU = Q − W.
2. Substitute: ΔU = (+500 J) − (+200 J) = **+300 J**.
3. Answer: **(B) +300 J**.

> ⚠️ **Examiner Trap:** Students pick (A) −300 J by computing Q − W = 500 − (−200). The correct sign for **W** when gas *expands* is **positive** (energy leaves the system as work).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Boundary Behaviour

- **Water's anomalous expansion:** density is maximum at **4 °C**, so between 0–4 °C water contracts on heating — β is effectively *negative*. This is why aquatic life survives under frozen lakes.
- **Anisotropic solids:** a single crystal has different α along different axes; the formula β = α_x + α_y + α_z applies, not β ≈ 3α.
- **Vanishing heat transfer:** in a perfect vacuum, k = 0 (no conduction) and there is no convection medium, but radiation persists (P = σAT⁴). A Dewar flask exploits all three reductions.
- **Adiabatic limit:** as γ → 1, PV^γ → PV, and the process approaches isothermal — useful for MCQs that contrast "fast vs slow" compression.
- **Entropy of mixing and irreversible free expansion:** ΔS > 0 even though Q = 0 and W = 0, because the gas becomes more disordered.

#### Common Numerical Traps in MDCAT

1. Forgetting to convert °C to K before applying PV = nRT — always use T_K = T_°C + 273.
2. Using γ = 5/3 for air (a diatomic mixture) — correct value is γ ≈ 7/5.
3. Setting T_c = 0 in Carnot efficiency to "maximise" η — gives η = 1, which is unphysical.
4. Applying Q = mcΔT during phase change — temperature is constant, so Q = mL instead.
5. Treating W as work done *on* the gas during isobaric expansion — sign flips and ΔU becomes wrong.

#### Two Advanced Practice Prompts

1. **Conceptual:** A cyclic heat engine operates between 600 K and 300 K. If it draws 1000 J from the hot reservoir, compute the maximum work output and the heat dumped to the cold reservoir. *(Answer: W_max = 500 J; Q_c = 500 J.)*
2. **Numerical:** A copper rod (k = 385 W m⁻¹ K⁻¹) of cross-section 2 × 10⁻⁴ m² and length 0.10 m conducts heat between faces held at 100 °C and 20 °C. Find the steady-state conduction rate. *(Answer: H = kAΔT/L = 385 × 2 × 10⁻⁴ × 80 / 0.10 ≈ 61.6 W.)*

#### Exam Strategy for MDCAT

Physics carries 45 MCQs total; Heat and Thermodynamics contributes ~2 items, usually mid-paper (Q21–Q30 band). Allocate ≤2 minutes per question here — the section rewards formula recall more than heavy algebra. Memorise PV = nRT, ΔU = Q − W, the four-process table, and Carnot efficiency with Kelvin temperatures. Skip lengthy derivations on exam day; the kinetic-theory expression PV = (1/3)Nm⟨v²⟩ is enough — you will rarely need to derive it from scratch under time pressure.

---

## Continue your study

- **[View this topic in your MDCAT roadmap](/roadmap/?exam=mdcat&duration=1mo)** — see where "Heat and Thermodynamics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=mdcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[MDCAT exam overview](/exams/mdcat/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/mdcat/physics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
