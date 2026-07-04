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
lastUpdated: "2026-07-04"
diagramPrompt: "Clean educational diagram showing Electromagnetic Induction with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Electromagnetic Induction

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Electromagnetic induction** is the generation of an electromotive force (e.m.f.) across a conductor when the magnetic flux linking it changes. **Magnetic flux**, Φ = BA cos θ, is measured in webers (Wb); A is the coil area in m², B the field in tesla, θ the angle between the field and the normal to the coil. **Faraday's law** quantifies the induced e.m.f.: E = −NΔΦ/Δt, where N is the number of turns and ΔΦ/Δt is the rate of flux change in Wb s⁻¹. **Lenz's law** gives the direction: induced current opposes the change that causes it. A straight conductor cutting field lines at speed v gives **E = Blv**. NECO SSCE hotspots: Faraday calculation, **Lenz's law direction**, a.c. **generator** operation, and **transformer** turns ratio V_p/V_s = N_p/N_s.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Definitions
A changing magnetic environment around a conductor drives free electrons to move, producing an induced e.m.f. and, if the circuit is closed, an induced current. The agent of change is the **magnetic flux linkage**, NΦ, not the field alone.

#### Faraday's Law and Lenz's Law
**Faraday's law** states E = −N(ΔΦ/Δt). The negative sign encodes **Lenz's law**: the induced current flows so that its own magnetic field opposes the flux change that produced it — a statement of energy conservation, since otherwise perpetual motion would be possible.

#### Ways to Induce an e.m.f.
- Pushing a bar magnet into or out of a coil.
- Moving a straight wire across a magnetic field (E = Blv, where l is the length cutting field lines).
- Switching current on/off in a neighbouring coil (mutual induction).
- Rotating a rectangular coil uniformly in a magnetic field.

#### The a.c. Generator
A coil of N turns rotates at angular frequency ω in a uniform field B. The instantaneous e.m.f. is **E = E₀ sin(ωt)**, where the peak value E₀ = NBAω. Slip rings and brushes deliver the alternating signal to the external circuit.

#### The Transformer
Built on mutual induction between primary and secondary coils wound on a laminated iron core, the transformer only functions with **a.c.**, since a steady d.c. flux cannot induce a secondary e.m.f. For an ideal transformer: **V_p/V_s = N_p/N_s** and **I_p/I_s = N_s/N_p**, with efficiency η = (P_out/P_in) × 100%.

#### Self-Inductance
A coil carrying changing current I opposes that change through a back-e.m.f. **E = −L(ΔI/Δt)**, where L, the inductance in henries (H), depends on coil geometry and core material.

#### Typical NECO Question Patterns
- Numerical: given ΔΦ = 0.04 Wb in Δt = 0.02 s with N = 200, compute E.
- Lenz's law: identify current direction from a diagram of magnet approaching a coil.
- Generator: link rotation speed, area, turns and B to peak e.m.f.
- Transformer turns ratio and efficiency problems.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Mechanism Behind Faraday's Law
When Φ changes through a circuit, the work done in moving a unit charge around the loop equals the induced e.m.f. Operationally, a faster approach of the magnet, more turns, or a stronger field all raise E because each amplifies dΦ/dt — the *rate*, not the instantaneous magnitude, governs induction.

#### Edge Cases and Common Traps
1. Φ = BA cos θ, **not** sin θ: when the coil face is parallel to B, θ = 90° and flux is zero — yet the e.m.f. induced while rotating through this orientation is at its **maximum** (cos 90° = 0, but dΦ/dt peaks there).
2. In E = Blv, only the component of v **perpendicular** to B counts; motion along B produces no e.m.f.
3. Lenz's law is sometimes misread as "oppose motion"; it strictly opposes the *change in flux*, which may align with the motion of a current-carrying conductor.
4. Step-up transformers raise V but lower I; power P = IV is conserved in the ideal case, so efficiency is the next thing to check when given real numbers.
5. Eddy currents wasted in the iron core are why transformer cores are **laminated**.

#### Connections to Adjacent Topics
Electromagnetic induction underpins **electromagnetic damping** (galvanometer eddy brakes), **induction cookers**, **induction charging**, and is the conceptual dual of **Maxwell's displacement current**. With **self-inductance** it yields the time constant τ = L/R of an RL circuit, and with **mutual inductance** M it gives the coupling coefficient k = M/√(L₁L₂).

#### Worked Example
A coil of 500 turns links a flux changing uniformly from 0.08 Wb to 0.02 Wb in 0.03 s. Find the induced e.m.f.
ΔΦ = 0.08 − 0.02 = 0.06 Wb; |E| = NΔΦ/Δt = 500 × 0.06 / 0.03 = **1000 V**. The negative sign indicates opposition by Lenz's law.

#### Practice Prompts
1. A magnet is withdrawn from a coil connected to a galvanometer. State and explain the deflection observed.
2. A transformer has 1200 primary turns and 60 secondary turns connected to a 240 V a.c. supply. Calculate the secondary voltage and, assuming 80 % efficiency with a 4 Ω load, find the secondary current.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
