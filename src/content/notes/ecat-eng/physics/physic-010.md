---
exam: ecat-eng
examName: "ECAT (Engineering)"
subject: physics
subjectName: "Physics"
topic: physic-010
topicName: "Current Electricity"
weight: 5
country: pakistan
generated: "2026-09-25T08:20:00"
lastUpdated: "2026-09-25"
---

# Current Electricity — ECAT (Engineering)

Current Electricity is the topic that follows electrostatics in FSc Part II and dominates a sizeable chunk of the ECAT (Engineering) paper. You work with moving charges, ohmic and non-ohmic conductors, resistor networks, Kirchhoff's laws, cells with internal resistance, and DC circuits involving capacitors and inductors at switch-on/switch-off. The MCQs lean heavily on numerical combinations: equivalent resistance of mixed networks, balance conditions for Wheatstone and metre bridges, power dissipation in parallel branches, and time constants of RC transient circuits. Mastery of this topic makes the rest of electricity and electromagnetism far easier, because most of it is built on these circuit laws.

> Verify the live syllabus, paper pattern, and any in-year changes on https://www.uet.edu.pk/ before planning around the figures below.

### 🟢 Lite — Quick Review (1h-1d)

**Ohm's law and resistance.** For an ohmic conductor at constant temperature, $V = IR$ where $V$ is the potential difference across the resistor (volts), $I$ the current through it (amperes), and $R$ the resistance (ohms, Ω). Resistivity $\rho$ is an intrinsic property of the material: $R = \rho L/A$ with $L$ the length and $A$ the cross-section. Conductance $G = 1/R$ has units of siemens (S).

**Series and parallel resistors.** Series: $R_{eq} = \sum R_i$ (same current through each, voltages add). Parallel: $1/R_{eq} = \sum 1/R_i$ (same voltage across each, currents add). For two resistors in parallel, $R_{eq} = R_1 R_2/(R_1 + R_2)$.

**Kirchhoff's laws.**
- **Junction (current) law:** $\sum I_{in} = \sum I_{out}$ at any node; charges cannot accumulate.
- **Loop (voltage) law:** $\sum V = 0$ around any closed loop; assign a sign to each term based on the assumed current direction and on the polarity of each source.

**Cells and internal resistance.** A real cell has EMF $\varepsilon$ and internal resistance $r$. The terminal voltage under load is $V = \varepsilon - Ir$. Power delivered to the external circuit is $P = I^2 R_{ext}$; power dissipated inside the cell is $P_{int} = I^2 r$. Maximum power is transferred to the load when $R_{ext} = r$ (impedance matching).

**DC circuit shortcuts.**
- **Wheatstone bridge** balance: $P/Q = R/X$ where $P$, $Q$ are the ratio arms and $R$, $X$ the unknown and known arms. Galvanometer reads zero.
- **Metre bridge** balance: $R_{unknown}/R_{known} = \ell/(100 - \ell)$ cm.
- **Potentiometer** balance: $\varepsilon_{cell}/\varepsilon_{driver} = \ell_{cell}/\ell_{driver}$ with no current drawn from the cell under test.
- **Capacitor charge/discharge:** $Q(t) = Q_0 e^{-t/RC}$, with time constant $\tau = RC$.

**Power and energy.** $P = VI = I^2 R = V^2/R$. Energy dissipated over time $t$ is $E = Pt = I^2 R t$ (in joules). The kilowatt-hour is $1\,\text{kWh} = 3.6 \times 10^6\,\text{J}$.

**Quick check before the exam.**
- Can you collapse a Wheatstone bridge into its series-parallel form using the balance condition to short or open the galvanometer arm?
- Can you convert $\Omega\cdot\text{m}$ into $\Omega\cdot\text{mm}^2/\text{m}$ for resistivity tables?
- Can you write the charging equation for an RC circuit and find the time to reach 63.2% of the final voltage?

### 🟡 Standard — Exam Prep (3d-3w)

#### Ohm's law and the microscopic view

At the microscopic level, current density $\vec{J} = n q \vec{v}_d$ where $n$ is the number density of charge carriers (m⁻³), $q$ the carrier charge, and $\vec{v}_d$ the drift velocity. The conductivity is $\sigma = nq^2\tau/m$, where $\tau$ is the mean time between collisions and $m$ the carrier mass. Resistivity is $\rho = 1/\sigma$. For copper at room temperature, $\rho \approx 1.7 \times 10^{-8}\,\Omega\cdot\text{m}$, giving a drift velocity of order $10^{-4}\,\text{m/s}$ for typical currents — much slower than the signal speed, which travels near $c$ along the wire.

The resistance of a uniform wire $R = \rho L/A$ changes with temperature through $\rho(T) = \rho_0 [1 + \alpha(T - T_0)]$, where $\alpha$ is the temperature coefficient of resistance (K⁻¹). For metals $\alpha > 0$; for semiconductors and insulators $\alpha < 0$ over some range. This is why a tungsten filament in a bulb has cold resistance about 10× lower than its hot operating resistance — the inrush current at switch-on is correspondingly large.

#### Kirchhoff's laws in practice

Write down a clean circuit diagram, label every element, then assign current directions in every branch. Apply the junction law at every node except one (the last is automatically satisfied). Apply the loop law to enough independent loops to cover every element; an $N$-node, $B$-branch planar circuit has $B - N + 1$ independent loops.

Solve the resulting linear system. Three rules of thumb:
- Solve for one unknown at a time by elimination or Cramer's rule.
- For symmetry, currents in symmetric branches are equal by inspection.
- For a circuit with a single EMF source, use **mesh currents** (one per independent loop) and write the loop equation by summing the voltage drops across each shared element with both mesh currents contributing.

A classic ECAT trap: an ammeter placed in a branch should be treated as a near-zero resistor (ideal ammeter has $R = 0$), and a voltmeter across an element as a near-infinite resistor (ideal voltmeter has $R = \infty$). Real meters have finite resistance; in a $1\,\text{k}\Omega$ circuit, a $10\,\text{k}\Omega$ voltmeter perturbs the answer measurably.

#### Resistor networks and bridge circuits

For a network that is *not* purely series-parallel, look for **symmetry**. The classic trick: if a wire connects two points that are at the same potential by some symmetry argument, no current flows through it and it can be removed; if the points must differ by some potential, the wire short-circuits the path between them.

For a Wheatstone bridge, if the balance condition $P/Q = R_1/R_2$ is met, the galvanometer carries no current. The equivalent resistance is then a simple series of $P + R_1$ in parallel with $Q + R_2$ (or the equivalent by symmetry). If the bridge is unbalanced, use a **delta-star (Y-Δ) transformation**:

$$R_a = \frac{R_{ab}R_{ac}}{R_{ab} + R_{ac} + R_{bc}},\quad
R_b = \frac{R_{ab}R_{bc}}{R_{ab} + R_{ac} + R_{bc}},\quad
R_c = \frac{R_{ac}R_{bc}}{R_{ab} + R_{ac} + R_{bc}}.$$

Memorise the star-side formulas and the dual delta-side formulas; ECAT rarely asks for both in one question, but practice the inverse.

#### Cells, batteries, and grouping

Cells in series: same current through each; total EMF = sum of individual EMFs; total internal resistance = sum of individual internal resistances. Cells in parallel: must have the same EMF (matched cells); total internal resistance drops as $r/n$ for $n$ identical cells; useful when high current is needed but the voltage is fixed.

A cell delivers **maximum current** (short-circuit) when the external resistance is zero: $I_{sc} = \varepsilon/r$. Maximum **power transfer** to the load occurs at $R_{ext} = r$, giving $P_{max} = \varepsilon^2/(4r)$. The efficiency at that point is only 50% — half the power is lost inside the cell. ECAT often tests the distinction between maximum-current and maximum-power regimes.

#### Capacitor transients in DC circuits

When an uncharged capacitor is connected through a resistor $R$ to a battery of EMF $\varepsilon$, the charging current decays as $i(t) = (\varepsilon/R) e^{-t/RC}$, the charge grows as $Q(t) = C\varepsilon(1 - e^{-t/RC})$, and the voltage across the capacitor approaches $\varepsilon$ asymptotically. The time constant $\tau = RC$ is the time to reach $1 - 1/e \approx 63.2\%$ of the final value. After $5\tau$, the capacitor is effectively fully charged (within 1%).

For a charged capacitor discharging through a resistor, $Q(t) = Q_0 e^{-t/RC}$, $i(t) = -(Q_0/RC) e^{-t/RC}$, and the energy in the resistor at time $t$ is $E_R(t) = E_0(1 - e^{-2t/RC})$. After infinite time, the entire initial energy $\tfrac{1}{2}Q_0^2/C$ has been dissipated in the resistor — useful for sanity-checking complex circuit analyses.

#### Worked example

**Problem.** A $12\,\text{V}$ battery with internal resistance $0.5\,\Omega$ is connected to two resistors $R_1 = 6\,\Omega$ and $R_2 = 12\,\Omega$ connected in parallel. A $4\,\Omega$ resistor is connected in series with the parallel combination. Find (a) the current through $R_1$, (b) the power dissipated in $R_2$, and (c) the terminal voltage of the battery.

**Solution.**
(a) Parallel combination: $R_p = 6 \times 12 / (6 + 12) = 4\,\Omega$. Total external resistance: $R_{ext} = 4 + 4 = 8\,\Omega$. Total circuit resistance: $R_{tot} = 8 + 0.5 = 8.5\,\Omega$. Total current from the battery: $I = \varepsilon/R_{tot} = 12/8.5 \approx 1.412\,\text{A}$. Voltage across the parallel pair: $V_p = I \times R_p = 1.412 \times 4 = 5.647\,\text{V}$. Current through $R_1$: $I_1 = V_p/R_1 = 5.647/6 \approx 0.941\,\text{A}$.

(b) Current through $R_2$: $I_2 = V_p/R_2 = 5.647/12 \approx 0.471\,\text{A}$. Power dissipated in $R_2$: $P_2 = I_2^2 R_2 = 0.471^2 \times 12 \approx 2.66\,\text{W}$.

(c) Terminal voltage: $V = \varepsilon - Ir = 12 - 1.412 \times 0.5 \approx 11.29\,\text{V}$. Equivalently, $V = I(R_{ext}) = 1.412 \times 8 = 11.29\,\text{V}$. ✓

### 🔴 Deep — Mastery (1mo+)

#### Non-ohmic devices

Diodes are the simplest non-ohmic element: forward-biased they follow the Shockley equation $I = I_0(e^{V/V_T} - 1)$ with thermal voltage $V_T \approx 25.85\,\text{mV}$ at 300 K. Reverse-biased they leak a tiny saturation current until breakdown. For an ideal diode in a bridge rectifier, the output across a resistive load is the absolute value of the input, minus two diode drops ($\sim 1.4\,\text{V}$ total for silicon). ECAT rarely asks for the Shockley equation but does ask for the qualitative shape of the $I$-$V$ curve.

Transistors as switches: an NPN BJT in saturation has $V_{CE} \approx 0.2\,\text{V}$ and $I_C = \beta I_B$. In the active region, $I_C = \beta I_B$ with $V_{CE}$ controlled by the load. Thevenin-equivalent models treat the transistor as a voltage-controlled current source. This is bread-and-butter for electronics problems but only occasionally appears in ECAT.

#### AC versus DC analysis

AC analysis replaces resistors with impedances: $Z_R = R$, $Z_L = j\omega L$, $Z_C = 1/(j\omega C)$. The same loop law applies: $\sum V = 0$ becomes $\sum \tilde{V} = 0$ where $\tilde{V}$ are phasors. For a series RLC at resonance $\omega_0 = 1/\sqrt{LC}$, the impedance is purely resistive and equals $R$; the quality factor $Q = \omega_0 L/R$ measures the sharpness of the resonance.

The **time-averaged power** in an AC circuit is $P_{avg} = V_{rms} I_{rms} \cos\phi$, where $\phi$ is the phase angle between voltage and current. For a pure resistor $\cos\phi = 1$; for a pure inductor or capacitor $\cos\phi = 0$ (no real power consumed). This is a separate topic in FSc Part II but ECAT sometimes embeds it inside current-electricity MCQs.

#### Superposition and Thevenin's theorem

For linear circuits with multiple sources, **superposition** says the response (current or voltage at any point) is the sum of the responses due to each source acting alone with the others replaced by their internal resistances (voltage sources shorted, current sources opened). Use it for circuits where mesh analysis gets tangled.

**Thevenin's theorem** replaces the network seen from a pair of terminals by an equivalent EMF $V_{th}$ in series with an equivalent resistance $R_{th}$. $V_{th}$ is the open-circuit voltage across the terminals; $R_{th}$ is the resistance seen back into the network with all independent sources zeroed. **Norton's theorem** gives the equivalent current source $I_N = V_{th}/R_{th}$ in parallel with $R_{th}$. These two are dual; pick whichever gives the simpler algebra.

#### Practice prompts

1. **Numerical.** A $9\,\text{V}$ battery with internal resistance $1\,\Omega$ is connected to a $4\,\Omega$ resistor in series with a parallel combination of $6\,\Omega$ and $12\,\Omega$. Find the current through the $6\,\Omega$ resistor and the power delivered to the $12\,\Omega$ resistor.
2. **Bridge problem.** A Wheatstone bridge has ratio arms $30\,\Omega$ and $70\,\Omega$, and a galvanometer of resistance $50\,\Omega$ in the bridge arm. The unknown resistance is $42\,\Omega$. Find the current through the galvanometer when the bridge EMF is $10\,\text{V}$ across the bridge diagonal.
3. **Capacitor transient.** A $1000\,\mu\text{F}$ capacitor is charged to $24\,\text{V}$ and then discharged through a $10\,\text{k}\Omega$ resistor. Find (a) the time constant, (b) the time for the voltage to drop to $6\,\text{V}$, and (c) the total energy dissipated in the resistor.

#### Connections to adjacent topics

Current Electricity links directly to **electrostatics** through the charging of a capacitor (a current must flow to deposit charge on the plates, even if no current flows through the dielectric). It links to **magnetism and electromagnetism** via the force on a current-carrying wire $F = BIL\sin\theta$ and the magnetic field at the centre of a coil $B = \mu_0 N I/(2R)$. The Thevenin approach also feeds forward into **AC analysis**, **three-phase circuits**, and **operational amplifiers** in later engineering coursework.

### Common traps

- **Forgetting internal resistance in terminal-voltage questions.** A "12 V battery" almost always means the EMF; the terminal voltage drops by $Ir$ under load. Plugging in 12 V as the terminal voltage gives a wrong current.
- **Confusing series and parallel rules for batteries.** Identical cells in parallel do *not* increase the EMF; they reduce the internal resistance. Two $1.5\,\text{V}$ cells in parallel still give $1.5\,\text{V}$ to the load (with $r/2$ internal resistance), not $3\,\text{V}$.
- **Using mesh currents without matching signs on shared elements.** When two mesh currents flow through the same resistor in opposite directions, the voltage drop across it is $R(I_1 - I_2)$, not $R(I_1 + I_2)$.
- **Treating an ammeter as having non-zero resistance (or vice versa).** In ECAT, idealise unless told otherwise. If the meter resistance is given, include it; if not, treat it as zero (ammeter) or infinite (voltmeter).
- **Stopping at $5\tau$ in capacitor transient problems.** If a problem asks for the *exact* voltage at some time, use $V(t) = V_0 e^{-t/RC}$ and don't substitute $5\tau$ as a magic approximation.

---

*Verify all numerical claims against the official ECAT notice at https://ecat.uet.edu.pk/ and the UET admissions portal at https://www.uet.edu.pk/ before planning your revision timetable around them.*

## Continue your study

- **[View this topic in your ECAT (Engineering) roadmap](/roadmap/?exam=ecat-eng&duration=1mo)** — see where "Current Electricity" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat-eng&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering) exam overview](/exams/ecat-eng/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/ecat-eng/physics/)** — browse sibling topics in this subject

