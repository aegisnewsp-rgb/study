---



exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-11
topicName: Current Electricity
weight: 5
country: pakistan
generated: "2026-03-24T08:32:08.086822"
diagramPrompt: "Clean educational diagram showing Current Electricity with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration



---
# Current Electricity

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Current Electricity is the study of electric charges in motion through a conductor. When a potential difference (voltage) is applied across a conductor, electrons drift from the negative terminal to the positive terminal, constituting an electric current. By convention, current flows from positive to negative (conventional current), though electrons actually move in the opposite direction.

**Key Formulas to Memorise:**

- Ohm's Law: $V = IR$
- Resistance: $R = \frac{\rho L}{A}$ where $\rho$ is resistivity (Ω·m), $L$ is length (m), $A$ is cross-sectional area (m²)
- Resistivity varies with temperature: $\rho_t = \rho_0[1 + \alpha(T - T_0)]$ where $\alpha$ is the temperature coefficient
- Power: $P = VI = I^2R = \frac{V^2}{R}$
- Energy consumed: $W = Pt$ (measured in joules); in kilowatt-hours: $1 \text{ kWh} = 3.6 \times 10^6 \text{ J}$

**Series and Parallel Circuits:**

- **Series:** $R_{total} = R_1 + R_2 + R_3$; same current $I$ through all components; voltage drops sum to total
- **Parallel:** $\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}$; same voltage across all branches; currents add

**Kirchhoff's Laws:**
- **Junction Rule (KCL):** $\Sigma I_{entering} = \Sigma I_{leaving}$ — charge conservation
- **Loop Rule (KVL):** $\Sigma EMF - \Sigma IR = 0$ around any closed loop — energy conservation

⚡ **Exam Tip (MDCAT):** In series circuits, the same current flows through every element. In parallel circuits, the same voltage appears across each branch. When solving complex circuits, first identify junctions and independent loops. A common MDCAT mistake is applying Ohm's Law to the entire circuit when only part of it is relevant — always redraw the circuit mentally before writing equations. For mixed series-parallel, find the equivalent resistance of parallel combinations first, then treat the result as series.

⚡ **Common MDCAT Trap:** The formula $P = I^2R$ gives power dissipated in the resistor and is useful when current is constant. $P = V^2/R$ is useful when voltage is constant. Don't mix these up when the question specifies constant current versus constant voltage conditions.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding and problem-solving mastery.

**EMF and Internal Resistance:**

Every real voltage source has internal resistance $r$ that causes the terminal voltage to fall when current flows. The emf (electromotive force) $\varepsilon$ is the open-circuit voltage — what the source would produce with no current drawn.

$$V_{terminal} = \varepsilon - Ir$$

When maximum current flows (terminal shorted), $V_{terminal} = 0$, so $I_{short} = \varepsilon/r$.

**Worked Example (MDCAT Style):**
A cell with emf 6V and internal resistance 0.5Ω is connected to a 2.5Ω resistor. Find: (a) circuit current, (b) terminal voltage, (c) power dissipated in external resistor.

Solution:
(a) Total resistance $R_{total} = 2.5 + 0.5 = 3.0\Omega$
$I = \varepsilon/R_{total} = 6/3 = 2\text{ A}$

(b) $V_{terminal} = \varepsilon - Ir = 6 - (2 \times 0.5) = 5\text{ V}$

(c) $P = I^2R = (2)^2 \times 2.5 = 10\text{ W}$ (or $P = VI = 5 \times 2 = 10\text{ W}$)

**Wheatstone Bridge:**

A circuit of four resistors in a diamond formation used to measure an unknown resistance. The bridge is **balanced** when no current flows through the central (galvanometer) branch, which occurs when:

$$\frac{R_1}{R_2} = \frac{R_3}{R_4}$$

At balance: $R_x = R_3 = R_2 \times R_4 / R_1$ (for the common configuration where $R_1, R_2$ are known ratio arms).

**Potentiometer:**

A piece of uniform resistance wire with a sliding contact. It measures emf by the "balance point" method — when no current flows through the galvanometer connected to the unknown emf, the potential drop along the wire equals the emf.

$$V \propto l$$ (where $l$ is the balance length from the positive end)

The potentiometer can also compare emfs of two cells and measure a cell's internal resistance by connecting the cell through a variable resistance and finding balance lengths with the key open and closed.

**Cells in Combination:**

| Configuration | Net EMF | Net Internal Resistance |
|---|---|---|
| $n$ identical cells in series | $n\varepsilon$ | $nr$ |
| $n$ identical cells in parallel | $\varepsilon$ | $r/n$ |
| Mixed series-parallel | Calculate per branch | Combine appropriately |

Parallel combination is used when we need to supply larger current — the current divides among parallel branches, reducing the effective internal resistance.

⚡ **Standardised Problem-Solving Approach:**
1. Draw the circuit diagram from the description
2. Identify series/parallel groups and simplify
3. Find total resistance, then total current
4. Work backwards: find current through each branch, then voltage drops
5. Check your answer: verify KVL around loops and KCL at junctions

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory, derivations, and exam pattern analysis for serious MDCAT aspirants.

**Kirchhoff's Matrix Method for Complex Networks:**

For circuits with multiple loops that cannot be simplified by series-parallel alone, use Kirchhoff's current and voltage laws to generate simultaneous equations.

**Steps:**
1. Assign a direction to the current in each branch (guess if wrong, you'll get a negative answer)
2. Apply KCL at $(n-1)$ junctions where $n$ is total junctions
3. Apply KVL around each independent loop
4. Solve using substitution or Cramer's rule

**Example:** For a two-loop circuit with currents $I_1$ and $I_2$ in two branches sharing a common resistor:
- Junction: $I_1 - I_2 - I_3 = 0$ (if $I_3$ is the current in the shared branch)
- Loop 1: $\varepsilon_1 = I_1 R_1 + I_3 R_3$
- Loop 2: $\varepsilon_2 = I_2 R_2 + I_3 R_3$

**Delta-Star (π-T) Transformation:**

For complex resistor networks that cannot be reduced by series-parallel combinations alone, delta-star transformation converts a delta (triangle, Δ) of three resistors into an equivalent star (Y) arrangement and vice versa.

**Delta to Star:**
$$R_Y = \frac{R_{\Delta\text{adjacent pair}}}{R_{\Delta1} + R_{\Delta2} + R_{\Delta3}}$$

Specifically: $R_A = \frac{R_{AB} \cdot R_{AC}}{R_{AB} + R_{BC} + R_{AC}}$, and similarly for $R_B$, $R_C$.

**Star to Delta:**
$$R_{AB} = \frac{R_A R_B + R_B R_C + R_C R_A}{R_C}$$

This transformation is essential when you have a bridge circuit that is not in the balanced condition — you cannot simplify it by series-parallel rules alone.

**Charging and Discharging of a Capacitor through a Resistor:**

The RC time constant $\tau = RC$ governs how quickly a capacitor charges or discharges.

- **Charging:** $V_C = V_0\left(1 - e^{-t/RC}\right)$; current $I = I_0 e^{-t/RC}$
- **Discharging:** $V_C = V_0 e^{-t/RC}$; current $I = -I_0 e^{-t/RC}$ (direction reverses)

After $t = 5\tau$, the capacitor is considered fully charged (reaches 99.3% of $V_0$) or fully discharged (0.7% of $V_0$ remains).

**Derivation (charging):** By KVL: $\varepsilon = V_R + V_C = IR + q/C = RC \frac{dq}{dt} + q/C$
This gives: $\frac{dq}{dt} = \frac{\varepsilon}{RC} - \frac{q}{RC}$
Solving the differential equation yields: $q = q_0(1 - e^{-t/RC})$ where $q_0 = C\varepsilon$

**Thermoelectric Effects:**

Three related phenomena connect electricity and heat:

- **Seebeck Effect:** When two dissimilar metals are joined at two junctions and one junction is heated, a small emf (thermocouple emf) is generated. Used in thermometers. The Seebeck coefficient (in μV/K) varies by metal pair.
- **Peltier Effect:** The reverse of Seebeck — passing current through a junction of two dissimilar metals causes heating or cooling at the junction. Used in thermoelectric coolers.
- **Thomson Effect:** Heating or cooling of a single homogeneous conductor when current flows and a temperature gradient exists.

**MDCAT Exam Pattern for Current Electricity:**

Based on analysis of recent MDCAT papers, Current Electricity contributes approximately 2–3 questions per test. High-yield topics include:
- Series-parallel combination problems (find equivalent resistance, then current/voltage)
- EMF and internal resistance questions (terminal voltage calculation)
- Power dissipation in resistors ($P = I^2R$ vs $P = V^2/R$)
- Wheatstone bridge balance condition
- Kirchhoff's Laws application (2-loop problems)

Questions frequently require conversion between kWh and joules, or involve household electricity bill calculations (1 unit = 1 kWh).

⚡ **Extended Tip:** When a question says a battery "has internal resistance r" and is connected to an external resistor R, always use $I = \varepsilon/(R+r)$ as your first step. The power delivered to the external circuit is maximum when $R = r$ (maximum power transfer theorem). This is a favourite advanced MDCAT extension question.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
