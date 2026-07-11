---



exam: nabteb
examName: NABTEB
subject: physics
subjectName: Physics
topic: phy-12
topicName: Electromagnetic Induction
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.563174"
lastUpdated: "2026-07-11"
diagramPrompt: "Clean educational diagram showing Electromagnetic Induction with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Electromagnetic Induction

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Electromagnetic induction** is the production of an electromotive force (emf) across a conductor when the magnetic flux linking it changes with time. Two governing rules cover every NABTEB question on this topic.

**Faraday's law** states that the induced emf equals the negative rate of change of flux linkage: `emf = -N·dΦ/dt`, where N is the number of turns and Φ = B·A·cosθ is the magnetic flux in webers. **Lenz's law** supplies the negative sign, fixing the direction so that induced current opposes the change that caused it.

| Quantity | Symbol | Unit |
|---|---|---|
| Magnetic flux | Φ | Wb (weber) |
| Induced emf | ε | V (volt) |
| Self-inductance | L | H (henry) |
| Flux density | B | T (tesla) |

Motional emf for a rod of length l moving at speed v in field B is `ε = B·l·v·sinθ`. An ideal transformer obeys `Vₛ/Vₚ = Nₛ/Nₚ`. Remember: the emf is zero whenever dΦ/dt = 0, even if Φ itself is large.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Faraday's Law in Detail
Whenever the magnetic flux Φ through a coil of N turns changes, an emf is induced. The magnitude is `|ε| = N·|dΦ/dt|`. Flux itself is computed as `Φ = B·A·cosθ`, where θ is the angle between the field direction and the **area vector** (normal to the loop's plane).

If B is uniform and the coil rotates at angular velocity ω, then θ = ωt and ε becomes sinusoidal — the operating principle of an AC generator. NABTEB Paper II commonly tests the case where B is constant but A changes (a loop being pulled out of a field), giving a simple rectangular emf-time graph.

#### Lenz's Law and Energy Conservation
The negative sign in Faraday's equation is not decorative — it encodes Lenz's law. Induced current flows in whichever direction produces a magnetic field opposing the *change* in external flux. Without this opposition, energy would be created from nothing. A classic NABTEB trap: a magnet entering a solenoid induces a current that makes the solenoid's near face a **north pole** to repel the approaching north — candidates often invert this.

#### Self and Mutual Inductance
A coil carrying changing current I induces a back-emf in itself: `ε = -L·dI/dt`, where L depends on coil geometry. For a long solenoid, `L = μ₀·N²·A / l`. Mutual inductance between two coils on a common core is `M = μ₀·N₁·N₂·A / l`. The **coefficient of coupling** k = M/√(L₁L₂) measures how much flux from one coil links the other; k = 1 means perfect coupling (ideal transformer).

#### Transformers
A transformer has primary turns Nₚ and secondary turns Nₛ. For an ideal unit, `Vₛ/Vₚ = Nₛ/Nₚ = Iₚ/Iₛ`. Step-up raises voltage and reduces current; step-down does the reverse. Real NABTEB numericals often quote efficiency η = (VₛIₛ)/(VₚIₚ) × 100%, typically 80–95%.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Motional emf and the Rod-in-Field Problem
Consider a straight rod of length l moving with velocity v perpendicular to a uniform magnetic field B. Free electrons experience a Lorentz force **F** = q**v** × **B**, separating charges until the electric force balances it. The potential difference between the rod's ends is `ε = B·l·v·sinθ`. If v is parallel to B, sinθ = 0 and no emf appears — a frequent MCQ trap.

#### Eddy Currents
When bulk conductors (solid transformer cores, metal plates) sit in changing flux, circulating currents called **eddy currents** flow within them, dissipating energy as heat (I²R losses). Lamination — splitting the core into thin insulated sheets — increases resistance to these loops and sharply reduces losses. NABTEB practicals sometimes ask why transformer cores are laminated rather than solid.

#### Energy Storage in an Inductor
Building current in an inductor requires work against the back-emf. The energy stored is `U = ½·L·I²` joules, analogous to ½·CV² in a capacitor. This energy releases through the collapsing field when the circuit opens — the principle behind ignition coils and induction cookers.

#### Common NABTEB Traps
- Treating Φ and B as interchangeable (Φ has units of Wb; B has units of T).
- Forgetting the minus sign and losing direction marks.
- Computing transformer ratios using currents in the wrong ratio.
- Confusing self-inductance (single coil) with mutual inductance (two coupled coils).

#### Worked Micro-Example
A coil of 200 turns has area 0.02 m² in a field of 0.5 T. It is withdrawn from the field in 0.1 s, with the area normal initially parallel to B. Find the average emf.

- Initial flux: Φ₁ = B·A·cos0° = 0.5 × 0.02 × 1 = 0.01 Wb
- Final flux: Φ₂ = 0 (outside the field)
- Rate of change: dΦ/dt = (0 − 0.01)/0.1 = −0.1 Wb/s
- Average emf: |ε| = N·|dΦ/dt| = 200 × 0.1 = **20 V**

#### Practice Prompts
1. A transformer has 500 primary turns and 1000 secondary turns. If the primary is fed 220 V at 2 A with 90% efficiency, find the secondary voltage and current.
2. Explain, with a diagram, why a copper plate swinging between pole pieces of a strong magnet comes to rest quickly.

---

## Continue your study

- **[View this topic in your NABTEB roadmap](/roadmap/?exam=nabteb&duration=1mo)** — see where "Electromagnetic Induction" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=nabteb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NABTEB exam overview](/exams/nabteb/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/nabteb/physics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
