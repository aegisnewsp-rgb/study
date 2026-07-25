---



exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-4
topicName: "Work, Energy and Power"
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.081528"
lastUpdated: "2026-07-15"
diagramPrompt: "Clean educational diagram showing Work, Energy and Power with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Work, Energy and Power

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your MDCAT.

**Work** is a scalar — the dot product of force and displacement, **W = F·d·cosθ**, measured in joules (J). It is **positive** when the force component aligns with motion, **negative** when it opposes motion, and **zero** when force is perpendicular to displacement.

#### Must-know formulas

| Quantity | Formula | Units |
|---|---|---|
| Work | W = F d cosθ | J |
| Kinetic energy | KE = ½ m v² | J |
| Gravitational PE | PE = m g h | J |
| Elastic PE | PE = ½ k x² | J |
| Power | P = W/t = F v cosθ | W |
| Efficiency | η = (output/input) × 100% | % |

> Work-energy theorem: **W_net = ΔKE = ½ m v_f² − ½ m v_i²**.

#### High-yield pointers
- Mechanical energy (KE + PE) is conserved **only** when no friction or air drag acts.
- g = 9.8 m/s² (or 10 m/s²) — stay consistent within one numerical.
- 1 kW = 1000 W; 1 hp ≈ 746 W.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Work and its sign convention

Work is energy transferred *to* or *by* a body via a force acting through a displacement. The angle **θ** between **F** and **d** is critical:

- θ = 0° → W = +Fd (force aids motion)
- θ = 90° → W = 0 (e.g., normal force on a sliding block)
- θ = 180° → W = −Fd (force opposes motion, like kinetic friction)

Work is a **scalar**, so adding works from multiple forces gives the net work: W_net = ΣW_i.

#### Kinetic energy and the work–energy theorem

A body of mass m moving at speed v stores kinetic energy **KE = ½ m v²**. The work–energy theorem states that the total work done by all forces equals the change in kinetic energy. This single relation often bypasses a full kinematic solution — if you know the forces and displacement, you can find v_f without computing acceleration explicitly.

#### Potential energy and conservative forces

Gravitational PE, **PE = m g h**, depends on height relative to a chosen reference. Elastic PE in a spring follows **PE = ½ k x²**, where x is the extension/compression from the relaxed length and k is the spring constant (Hooke's law: F = −k x). Both forms rely on **conservative forces** — forces whose work around any closed path is zero and which allow a potential-energy function to be defined.

#### Conservation of mechanical energy

When only conservative forces act, **KE_i + PE_i = KE_f + PE_f**. This is the cleanest way to handle vertical free-fall problems and motion on smooth inclines. If friction or air drag is present, energy is converted into heat and the mechanical total decreases:

#### Power

Power is the rate of energy transfer. **Average power P = W/t**, while **instantaneous P = F v cosθ**. Common traps: using initial velocity instead of average in F·v, and unit conversion (1 kW = 1000 W; 1 hp ≈ 746 W).

| Trap | Fix |
|---|---|
| Forgetting cosθ | Identify θ between **F** and **v** |
| Conserving energy with friction | Subtract W_friction = f·d first |
| Mixing mass and weight | Use m for KE, mg for gravitational PE |

MDCAT MCQs frequently test the sign of work (especially on inclines), spring problems combining F = kx with ½kx², and finding final speed from a given force and distance.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Conservative vs non-conservative forces

A force is conservative when the work it does between two points is path-independent. Gravity and the spring force qualify; kinetic friction and air drag do not — their work dissipates mechanical energy as heat. The mechanical-energy equation becomes:

KE_i + PE_i = KE_f + PE_f + W_{non-conservative}

In MDCAT incline problems, W_friction = μ_k N · d must be subtracted from the left side before solving for v_f.

#### Variable forces and the work–energy theorem in general form

For forces that change with position, work is the area under an **F vs x** graph. The general statement W_net = ∫F·dx = ΔKE still holds, which connects directly to the calculus definition of PE: F = −dU/dx. This is why conservative forces can be derived from a potential energy function.

#### Power, efficiency, and the First Law

**Efficiency η = (useful energy output / total energy input) × 100%**. The First Law of Thermodynamics extends conservation: total energy (mechanical + thermal + internal) is constant — energy is transformed, never destroyed. A car engine rated at 100 kW with η = 25 % delivers only 25 kW to the wheels; the rest exits as heat.

#### Worked micro-example

A 2 kg block slides 5 m down a frictionless 30° incline from rest.

- h = 5 sin30° = 2.5 m
- ΔPE = m g h = 2 × 9.8 × 2.5 = 49 J
- By conservation: ½ m v_f² = 49 → v_f = √49 = 7 m/s

If μ_k = 0.2 on the same incline, W_friction = μ_k m g cos30° · d = 0.2 × 2 × 9.8 × 0.866 × 5 ≈ 16.97 J. Net KE gained = 49 − 16.97 ≈ 32.03 J, giving v_f ≈ 5.66 m/s.

#### Common mistakes

- Using W = F·d without cosθ for an angled pull.
- Computing P = Fv using the wrong velocity (initial vs average).
- Setting h = 0 at the bottom but using a PE formula that assumes ground is reference — only **ΔPE** matters.
- Squaring velocity twice in energy-from-work conversions.

#### Practice prompts

1. A 1500 kg car accelerates uniformly from 36 km/h to 72 km/h over 50 m. Find the net force and the power delivered at the final instant.
2. A spring with k = 200 N/m is compressed 0.1 m, launching a 0.5 kg ball vertically. How high does the ball rise if 20 % of the energy is lost to air resistance?

---

## Continue your study

- **[View this topic in your MDCAT roadmap](/roadmap/?exam=mdcat&duration=1mo)** — see where "Work, Energy and Power" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=mdcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[MDCAT exam overview](/exams/mdcat/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/mdcat/physics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
