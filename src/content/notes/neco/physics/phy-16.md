---



exam: neco
examName: NECO SSCE
subject: physics
subjectName: Physics
topic: phy-16
topicName: Electromagnetic Induction
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.683259"
lastUpdated: "2026-09-22"
diagramPrompt: "Clean educational diagram showing Electromagnetic Induction with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Electromagnetic Induction

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your NECO SSCE paper.

A changing magnetic flux through a coil produces an induced emf, and that emf drives an induced current if the circuit is closed. This is the single principle behind generators, transformers, induction cookers, and the pickup coil in a microphone.

| Quantity | Formula | Variables and SI units |
|---|---|---|
| Magnetic flux | Φ = BA cosθ | B in tesla (T), A in m², θ in rad, Φ in weber (Wb) |
| Faraday's law | ε = −N(dΦ/dt) | ε in volts (V), N is number of turns, t in seconds (s) |
| Self-induced emf | ε = −L(dI/dt) | L in henry (H), I in ampere (A) |
| Motional emf | ε = BLv sinθ | L is rod length in m, v in m/s |

> 💡 **High-Yield Memory Hook (Memory Hook):** "**Flux change is the only trigger.**" Memorise it as **F-C-I-T**: **F**lux **C**hange → **I**nduced emf → opposing current by Lenz's law, with **T**ime rate (dΦ/dt) as the size knob. No flux change, no emf — no matter how strong B is.

The negative sign in Faraday's and self-induction equations is not decoration. It encodes Lenz's law: the induced current opposes the change that created it.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Working understanding of mechanisms, derivations, and NECO-style problem types.

#### Faraday's law and the role of dΦ/dt

The magnitude of the induced emf in a coil of N turns equals the rate of change of flux linkage:

ε = −N(dΦ/dt), where ε is induced emf (V), N is number of turns (dimensionless), Φ is magnetic flux per turn (Wb), and t is time (s).

A common NECO objective trap asks why a stationary coil inside a strong uniform field shows zero emf on a DC ammeter. The answer is that ε depends on dΦ/dt, not on Φ itself. A steady flux, however large, gives zero emf.

#### Lenz's law and the sign convention

Lenz's law states that the direction of induced current is such that its magnetic effect opposes the change in flux that produced it. The minus sign in Faraday's equation is a compact statement of this law (it is sometimes called the Neumann–Lenz form).

A useful mental picture: imagine the incoming flux as a moving "wall" approaching the coil. The induced current builds a counter-wall that pushes back. Energy is conserved because the source doing work against this opposition is the mechanical agent pushing the magnet or rotating the coil.

#### Motional emf in a moving rod

When a straight conductor of length L moves with velocity v through a uniform field B, free charges inside experience a magnetic force qv × B. This separates charges along the rod and produces an emf:

ε = BLv sinθ, where L is the active length of the rod inside the field (m), v is speed (m/s), B is flux density (T), and θ is the angle between v and B.

For a rod sliding on rails that close the circuit, this motional emf drives a current I = ε/R, where R is the total circuit resistance.

#### Self-inductance and mutual inductance

A coil opposes any change in its own current because that changing current changes its own flux. The opposition is quantified by self-inductance L:

ε = −L(dI/dt), with L in henry (H). A long solenoid with N turns, cross-section A, and length ℓ has L = μ₀N²A/ℓ.

When two coils are placed so that flux from one links the other, a changing current in the primary induces an emf in the secondary. The coupling is measured by mutual inductance M (also in henry):

ε₂ = −M(dI₁/dt).

> 📌 **Formula Check:** Both L and M carry the unit H = V·s/A = Wb/A. Always convert area to m² before plugging into flux or inductance equations.

#### Comparison matrix: easily confused quantities

| Feature | Self-inductance L | Mutual inductance M |
|---|---|---|
| Coil involved | Same coil only | Between two separate coils |
| Driving quantity | dI/dt in the same coil | dI/dt in the primary coil |
| Resulting emf | ε = −L(dI/dt) | ε₂ = −M(dI₁/dt) |
| Depends on | Geometry of one coil, core | Geometry of both coils, separation, core |
| Practical device | Choke, inductor | Transformer |

| Feature | Faraday's law | Lenz's law |
|---|---|---|
| Gives | Magnitude of induced emf | Direction of induced current |
| Form | ε = N\|dΦ/dt\| | Opposes the flux change |
| Negative sign | Optional in magnitude form | Required for direction form |

#### Worked NECO-style calculation

A coil of 200 turns and area 0.02 m² lies perpendicular to a uniform field of 0.5 T. The coil is pulled out of the field in 0.1 s so that the final flux through it becomes zero. Find the average induced emf.

Initial flux per turn: Φᵢ = BA cosθ = 0.5 × 0.02 × cos 0° = 0.01 Wb.
Final flux Φf = 0.
Change ΔΦ = 0 − 0.01 = −0.01 Wb over Δt = 0.1 s.

Average emf: ε = −N(ΔΦ/Δt) = −200 × (−0.01/0.1) = +20 V.

The positive sign indicates the induced emf drives a current whose magnetic effect opposes the loss of flux (it tries to hold the flux in).

> ⚠️ **Examiner Trap:** NECO candidates often write ε = NBAΔt, treating it as flux times time. The correct grouping is N × ΔΦ / Δt, not N × B × A × Δt. Units also break if A is left in cm²; convert to m² first.

#### Transformer and AC generator essentials

A transformer has primary and secondary coils on a closed iron core. The input must be AC because induction requires dΦ/dt ≠ 0. For an ideal transformer:

Vp/Vs = Np/Ns = Is/Ip.

Step-up raises voltage and lowers current; step-down does the reverse. Power (neglecting losses) is conserved, which is why Ip and Is move opposite to the turns ratio.

An AC generator (alternator) rotates a coil at angular frequency ω inside a uniform field. The instantaneous emf is ε = NBAω sin(ωt). Slip rings and brushes deliver the sinusoidal output to the external circuit.

---

### 🔴 Extended — Deep Study (3mo+)

> Edge cases, limits, and connections that NECO theory questions occasionally probe.

#### Boundary conditions and limiting cases

- **Zero emf in a perfect conductor loop with changing external flux:** if the loop is superconducting (R → 0), the induced current grows without bound until its own flux exactly cancels the imposed change. In a real resistive loop, the current settles at I = ε/R.
- **Transformer under DC:** plugging DC into the primary gives a constant flux after the brief switch-on transient, so ε₂ → 0. This is the standard proof that transformers cannot operate on steady DC.
- **Rod moving parallel to B (θ = 0):** ε = BLv sinθ collapses to zero. Many wrong NECO options ignore the sinθ factor.
- **Coil face parallel to B (θ = 90°):** Φ = BA cos90° = 0, so even a very strong field gives zero flux linkage — and zero induced emf.

#### Adjacent-topic links

- **Alternating current:** rms and peak values of the sinusoidal emf produced by an alternator follow directly from ε = NBAω sin(ωt).
- **Capacitance and inductance in AC:** the same L appears in the inductive reactance X_L = 2πfL.
- **Magnetic force on current-carrying conductors:** the v × B force that produces motional emf is the same magnetic force per unit charge that defines the Lorentz force.
- **Energy storage:** the magnetic energy in an inductor, E = ½LI², is the integral of εI dt during current build-up; it also equals the work done against the back emf.
- **Eddy currents:** in bulk metal cores, induced circulating currents dissipate energy as heat; laminating the core breaks the loops and reduces loss, which is why transformer cores are stacked thin sheets.

#### Advanced traps and exceptions

1. Inductance depends on geometry, not current. Doubling I does not double L; it doubles the stored energy E = ½LI² but leaves L unchanged.
2. The induced emf in a rotating coil is zero when the coil plane contains B (flux maximum, dΦ/dt = 0) and maximum when the coil plane is parallel to B.
3. Lenz's law preserves energy: removing a magnet from a coil requires mechanical work against the induced current's magnetic attraction. No mechanical work, no current, no energy gain.
4. Mutual inductance is symmetric: M₁₂ = M₁₂. If coil A has 1 mH of mutual coupling to coil B, then B has 1 mH to A.
5. Sign of emf in mutual induction: ε₂ = −M(dI₁/dt). If I₁ is increasing, the secondary emf drives a current that opposes further growth of flux from the primary.

#### Advanced practice prompts

1. A circular coil of 50 turns and radius 5 cm sits with its plane at 30° to a uniform 0.4 T field. If the coil is rotated to make its plane perpendicular to B in 0.05 s, find the average emf. (Answer: about 3.14 V — derive using ΔΦ = BA(cos30° − cos0°) and ε = −NΔΦ/Δt.)
2. A step-down transformer has 4000 primary turns and 500 secondary turns. The primary is connected to 240 V AC. Find the secondary voltage and the ratio of primary to secondary current for an ideal transformer. (Answer: 30 V on the secondary; Ip/Is = Ns/Np = 1/8, so the primary current is one-eighth of the secondary current.)

#### NECO SSCE exam strategy

Electromagnetic Induction carries roughly 4% of the total score, so two to three questions usually appear across Papers II and III combined. Paper II favours short computation and Lenz's law direction reasoning; Paper III occasionally asks for a labelled diagram of an AC generator or transformer and a two-sentence description of its working principle. Memorise Faraday's, Lenz's, and the transformer equations exactly, and practice converting cm² to m² whenever an area appears.

---

## Continue your study

- **[View this topic in your NECO SSCE roadmap](/roadmap/?exam=neco&duration=1mo)** — see where "Electromagnetic Induction" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neco&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NECO SSCE exam overview](/exams/neco/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/neco/physics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
