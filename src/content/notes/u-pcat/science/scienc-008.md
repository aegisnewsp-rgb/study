---
exam: u-pcat
examName: UPCAT (Philippines)
subject: science
subjectName: Science
topic: scienc-008
topicName: Electric Charge and Current
weight: 4
country: philippines
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Electric Charge and Current

> A UPCAT Science topic worth roughly one to three items per year — the moves that matter are Ohm's law, the series/parallel contrast, and the current-direction trap.

### 🟢 Lite — Quick Review (1h–1d)
> One-pass summary for the night before the UPCAT.

**Electric charge (q)** is a conserved, quantized property of matter, measured in coulombs (C). The smallest free unit is the elementary charge **e ≈ 1.602 × 10⁻¹⁹ C** — every observable charge is an integer multiple of it. Like charges push apart; unlike charges pull together.

**Electric current (I)** is the rate at which charge moves through a conductor: **I = Q / t**, where Q is in coulombs, t in seconds, and I in amperes (A). **Conventional current** runs from the + terminal to the − terminal of the source, opposite to the drift of electrons. **Voltage (V)** is the push; **resistance (R)** is the opposition.

The four working equations:

- **Ohm's law:** V = IR, with R in ohms (Ω)
- **Power:** P = IV = I²R = V²/R, in watts (W)
- **Energy:** W = Pt = VIt, in joules (J)
- **Series:** R_total = ΣRᵢ. **Parallel:** 1/R_total = Σ(1/Rᵢ)

> 💡 **High-Yield Memory Hook (Memory Hook):** "**C-V-I-R-P**" — *Coulomb, Volt, Ampere, Ohm, Watt*. Picture them as a ladder: 1 C of charge moved through 1 V in 1 s gives 1 A; that 1 V across 1 Ω gives 1 A; the 1 A × 1 V gives 1 W.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Working knowledge for UPCAT-level problem solving.

#### Charge, Quantization, Conservation

Charge is a *property*, not a thing — matter *carries* it. Two facts govern every UPCAT item:

1. **Quantization:** q = ne, n ∈ ℤ, e = 1.602 × 10⁻¹⁹ C. You cannot have 1.5 e.
2. **Conservation:** in any isolated system, total charge before = total charge after. Charging by induction or rubbing redistributes existing charge; it does not create it.

Coulomb's law quantifies the force between two point charges:

**F = k q₁ q₂ / r²**, where k = 8.99 × 10⁹ N·m²/C², q₁ and q₂ in coulombs, r in metres, F in newtons. The force is repulsive if both signs match, attractive if they differ. Doubling either charge doubles F; doubling r cuts F to a quarter.

#### Current, Voltage, Resistance

A battery (or any source) maintains a **potential difference V** between its terminals. In a conductor the mobile charges drift under that V; the resulting rate is current **I = Q/t**. Resistance **R** is the material's opposition; ohmic materials obey **V = IR** at fixed temperature, and R rises with temperature for metals (a hot filament is harder to push current through).

#### Comparing Series and Parallel

| Property | Series | Parallel |
|---|---|---|
| Current through each element | Same (I_total = I₁ = I₂) | Splits (I_total = I₁ + I₂) |
| Voltage across each element | Splits (V_total = V₁ + V₂) | Same (V_total = V₁ = V₂) |
| Equivalent resistance | R_total = R₁ + R₂ + … | 1/R_total = 1/R₁ + 1/R₂ + … |
| Brightness of identical bulbs | Dimmer as more bulbs added | Same as a single bulb |
| If one element opens | Whole circuit stops | Other branches keep working |

#### Power and Joule Heating

Power delivered to a resistor is **P = IV**. Substitute Ohm's law to get **P = I²R = V²/R**. The same energy leaves as heat — this is Joule heating, the reason a phone charger gets warm. In any complete circuit, energy in = energy out: power supplied by the source equals power dissipated by all loads summed together.

#### A Realistic UPCAT-Style Item, Resolved

A 12 V battery is connected to two 6 Ω resistors.

**(a)** Find the total current and the power dissipated if the resistors are in **series**.
**(b)** Repeat for the **parallel** arrangement.

Series solution:

- R_total = 6 + 6 = **12 Ω**
- I = V / R = 12 / 12 = **1 A**
- P = V² / R_total = 144 / 12 = **12 W** (also P = I²R_total = 1 × 12 = 12 W ✓)

Parallel solution:

- 1/R_total = 1/6 + 1/6 = 2/6 → R_total = **3 Ω**
- I = 12 / 3 = **4 A**
- P = V² / R_total = 144 / 3 = **48 W**

Notice the parallel pack draws four times the current and dissipates four times the power for the same battery — a common UPCAT trick.

> ⚠️ **Examiner Trap:** Students see "two 6 Ω resistors" and add to get 12 Ω, then stop. The item is testing whether you read "in series" vs "in parallel". The parallel figure (3 Ω, 4 A, 48 W) is the distractor that flips naive learners.

---

### 🔴 Extended — Deep Study (3mo+)
> Edge cases and adjacent topics — read this if UPCAT Science is your weak link.

#### Where Ohm's Law Breaks

Ohm's law is linear; a graph of V against I is a straight line through the origin for a metallic conductor at constant temperature. Diodes, filaments as they warm up, and semiconductors are *non-ohmic* — their V–I curve bends. UPCAT rarely tests non-ohmic graphs, but if a stem says "the resistance changes with current," treat R as not constant and use P = IV directly rather than I²R with a single R.

#### Conductor, Insulator, Semiconductor — the Band Picture in One Sentence

In a **conductor**, free electrons populate a partially filled band, so a tiny V produces a measurable I. In an **insulator**, the valence band is full and the gap to the next band is wide; almost no electrons move. A **semiconductor** sits in between — its gap is small, and adding heat or light frees carriers, which is why photodiodes and solar cells exist. UPCAT asks this as a one-line conceptual: which material allows charge to flow easily? Answer: conductor.

#### Charging Without Contact

Bring a positively charged rod near (not touching) a neutral metal sphere on an insulating stand. Free electrons in the sphere migrate toward the rod; the near side becomes negative, the far side positive. Touch the far side to ground and the positive charges leave; remove the ground, then the rod. The sphere is now **negatively charged**, even though the rod never touched it. This is *charging by induction*. The UPCAT angle: lightning, comb-picking-up-paper bits, and the shock from a doorknob on a dry day are all induction or discharge events, not "creation" of charge.

#### Power-Supply Realities

A battery is a **constant-voltage** source in idealized UPCAT problems, not a constant-current one. A USB phone charger labelled "5 V, 2 A" means it can supply *up to* 2 A at 5 V; the device draws only what it needs. If you write I = 2 A for any phone plugged into any 5 V charger, you have missed the point.

#### Advanced Practice Prompts

1. Three resistors of 2 Ω, 4 Ω, and 6 Ω are wired so the 2 Ω is in series with the parallel combination of the 4 Ω and 6 Ω. A 6 V source drives the network. Find the current through the 2 Ω resistor and the power dissipated by the 6 Ω resistor.
2. A 1500 W hair dryer runs for 6 minutes on a 110 V Philippine household outlet. How much charge passes through it, and how much energy does it consume in joules and in kilowatt-hours? (Use the Philippines' standard residential mains voltage of 110 V unless your source says otherwise — confirm the figure in the official Meralco or DepEd reference for your exam year.)

#### Quick-Reference Edge Cases

- Conventional current vs electron flow: pick the direction the *positive* test charge would move.
- Capacitors in DC steady state: no current flows through the dielectric after charging; only the initial transient counts.
- AC vs DC: UPCAT circuits are DC unless the stem says otherwise; ignore reactance and impedance.
- Unit trap: I in A, t in s — never minutes in the formula I = Q/t.

## Continue your study

- **[View this topic in your UPCAT (Philippines) roadmap](/roadmap/?exam=u-pcat&duration=1mo)** — see where "Electric Charge and Current" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=u-pcat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UPCAT (Philippines) exam overview](/exams/u-pcat/)** — pattern, eligibility, and syllabus
- **[All Science notes](/notes/u-pcat/science/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
