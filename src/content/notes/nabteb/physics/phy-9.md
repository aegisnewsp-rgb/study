---
exam: nabteb
examName: NABTEB
subject: physics
subjectName: Physics
topic: phy-9
topicName: Electrostatics and Capacitors
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.560776"
diagramPrompt: "Clean educational diagram showing Electrostatics and Capacitors with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"

---

# Electrostatics and Capacitors

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary of electrostatics and capacitors for NABTEB physics.

**Electrostatics** is the study of stationary (static) electric charges and their interactions.

**Fundamental Concepts:**

- **Charge ($q$):** Measured in Coulombs (C). Two types: positive ($+$) and negative ($-$). Electrons carry negative charge; protons carry positive charge.
- **Law of Charges:** Like charges repel; unlike charges attract
- **Conservation of Charge:** Charge cannot be created or destroyed, only transferred
- **Quantisation of Charge:** Charge exists in discrete amounts: $q = ne$, where $n$ is an integer and $e = 1.6 \times 10^{-19}$ C

**Coulomb's Law:**
The force between two point charges:
$$F = k\frac{q_1 q_2}{r^2}$$

Where $k = \frac{1}{4\pi\varepsilon_0} = 8.99 \times 10^9 \, \text{N·m}^2/\text{C}^2$ (approximately $9 \times 10^9$)

The force is repulsive if $q_1 q_2 > 0$ (like charges) and attractive if $q_1 q_2 < 0$ (unlike charges).

**Electric Field:**
The electric field ($E$) at a point is the force per unit charge:
$$E = \frac{F}{q} = k\frac{Q}{r^2}$$

Direction: Away from positive charge; towards negative charge.
Unit: N/C or V/m

**Electric Potential:**
$$V = k\frac{Q}{r}$$

Unit: Volt (V). 1 V = 1 J/C.

**Capacitance:**
$$C = \frac{Q}{V}$$

Unit: Farad (F). A capacitor stores charge when voltage is applied.

**⚡ NABTEB Exam Tip:** Electric field lines go FROM positive charges TO negative charges (externally). Inside a closed conducting shell, the field is zero (electrostatic shielding). Capacitors store energy: $U = \frac{1}{2}CV^2 = \frac{1}{2}QV^2 = \frac{Q^2}{2C}$.

---

### 🟡 Standard — Regular Study (2d–2mo)

> For NABTEB students who want a solid understanding of electrostatics.

**Electric Field Patterns:**

| Charge Configuration | Field Pattern |
|---------------------|---------------|
| Single positive charge | Radial lines outward |
| Single negative charge | Radial lines inward |
| Two like charges | Field lines repel each other |
| Two unlike charges | Field lines connect from + to − |
| Uniform field (parallel plates) | Parallel, equally spaced lines |

**Capacitors:**

A capacitor consists of two conducting plates separated by an insulating material (dielectric).

**Parallel Plate Capacitor:**
$$C = \frac{\varepsilon_0 \varepsilon_r A}{d}$$

Where $A$ = area of one plate, $d$ = separation between plates, $\varepsilon_r$ = relative permittivity of dielectric, $\varepsilon_0 = 8.85 \times 10^{-12}$ F/m.

**Dielectrics:**
When an insulating material is placed between capacitor plates:
- It reduces the effective electric field
- Capacitance increases by factor $\varepsilon_r$ (dielectric constant)
- Different materials have different $\varepsilon_r$ values

| Material | Dielectric Constant ($\varepsilon_r$) |
|----------|---------------------------------------|
| Vacuum | 1.00 |
| Air | 1.0006 |
| Paper | 3.5 |
| Glass | 5–10 |
| Water | 80 |

**Energy Stored in a Capacitor:**
$$U = \frac{1}{2}CV^2 = \frac{1}{2}QV^2 = \frac{Q^2}{2C}$$

**Capacitor Combinations:**

**Series Combination:**
$$\frac{1}{C_{\text{eq}}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3}$$

Charge is the same on all capacitors in series: $Q_1 = Q_2 = Q_3$
Voltage divides: $V = V_1 + V_2 + V_3$

**Parallel Combination:**
$$C_{\text{eq}} = C_1 + C_2 + C_3$$

Voltage is the same across all capacitors in parallel: $V_1 = V_2 = V_3$
Charge divides: $Q = Q_1 + Q_2 + Q_3$

**Applications of Capacitors:**
1. **Energy storage** — in camera flashes, defibrillators
2. **Smoothing** — in power supplies to reduce voltage ripples
3. **Tuning** — in radio circuits (with inductors)
4. **Timing** — in RC circuits

**Common Exam Mistakes:**
- Confusing electric field ($E = F/q$) with electric potential ($V = kQ/r$)
- Forgetting that capacitors in series share charge (same $Q$)
- Not converting units consistently (e.g., using pF instead of F)
- Confusing direction of field lines (always from + to − externally)

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage of electrostatics and capacitors for NABTEB students.

**Derivation of Coulomb's Law:**

Experimental observation shows that the force $F$ between two charges is:
- Proportional to each charge: $F \propto q_1$ and $F \propto q_2$
- Inversely proportional to square of distance: $F \propto 1/r^2$

Combining: $F = k\frac{q_1 q_2}{r^2}$

The constant $k = \frac{1}{4\pi\varepsilon_0}$ where $\varepsilon_0 = 8.85 \times 10^{-12}$ F/m is the permittivity of free space.

**Vector Form of Coulomb's Law:**
$$\vec{F}_{12} = k\frac{q_1 q_2}{r_{12}^2} \hat{r}_{12}$$

Where $\hat{r}_{12}$ is the unit vector from charge 1 to charge 2.

**Superposition Principle:**

For multiple point charges, the net force on any one charge is the vector sum of forces exerted by all other charges:
$$\vec{F}_{\text{net}} = \vec{F}_{12} + \vec{F}_{13} + \vec{F}_{14} + \ldots$$

Similarly for electric field and potential:
$$\vec{E}_{\text{net}} = \vec{E}_1 + \vec{E}_2 + \vec{E}_3 + \ldots$$
$$V_{\text{net}} = V_1 + V_2 + V_3 + \ldots \text{ (algebraic sum)}$$

**Electric Field due to Common Charge Distributions:**

**1. Uniformly charged thin spherical shell:**
- Inside the shell ($r < R$): $E = 0$
- On the surface ($r = R$): $E = k\frac{Q}{R^2}$
- Outside the shell ($r > R$): $E = k\frac{Q}{r^2}$ (treat as point charge)

**2. Uniformly charged solid sphere (non-conducting):**
- Inside ($r < R$): $E = k\frac{Qr}{R^3}$ (linearly increasing)
- Outside ($r > R$): $E = k\frac{Q}{r^2}$

**3. Infinite plane sheet of charge:**
$$E = \frac{\sigma}{2\varepsilon_0}$$

Where $\sigma = Q/A$ is the surface charge density.

**4. Two parallel oppositely charged plates:**
$$E = \frac{\sigma}{\varepsilon_0}$$

(Uniform field between plates, zero outside)

**Electric Potential Energy:**

The work done in bringing a charge $q$ from infinity to a point at distance $r$ from charge $Q$:
$$U = k\frac{qQ}{r}$$

For multiple charges:
$$U_{\text{total}} = k\left(\frac{q_1 q_2}{r_{12}} + \frac{q_1 q_3}{r_{13}} + \frac{q_2 q_3}{r_{23}} + \ldots\right)$$

**Relationship between $E$ and $V$:**
$$E = -\frac{dV}{dr}$$

In a uniform field: $E = \frac{V}{d}$ where $d$ is the separation.

**Capacitor with Dielectric:**

When a dielectric is inserted:
- Capacitance increases: $C = \varepsilon_r C_0$
- Potential difference decreases: $V = \frac{V_0}{\varepsilon_r}$
- Stored energy changes: $U = \frac{1}{2}CV^2 = \frac{1}{2}\varepsilon_r C_0 \frac{V_0^2}{\varepsilon_r^2} = \frac{U_0}{\varepsilon_r}$

If the capacitor is disconnected (isolated), charge $Q$ stays constant and:
- $E$ decreases (since $V$ decreases)
- Energy decreases (work done by dielectric force)

If the capacitor is connected to a battery (constant voltage):
- $Q$ increases
- $E$ stays the same
- Energy increases (battery does work)

**Gauss's Law (Advanced):**

$$\oint \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}$$

The total electric flux through a closed surface equals the charge enclosed divided by $\varepsilon_0$.

This law is particularly useful for calculating electric fields of symmetric charge distributions.

**⚡ NABTEB Quick Reference:**
- $F = k\frac{q_1 q_2}{r^2}$, $k = 9 \times 10^9$ N·m²/C²
- $E = F/q = kQ/r^2$
- $V = kQ/r$
- $C = Q/V = \varepsilon_0\varepsilon_r A/d$
- $U = \frac{1}{2}CV^2 = \frac{1}{2}QV^2 = Q^2/2C$
- Series: $1/C_{\text{eq}} = \sum(1/C_i)$
- Parallel: $C_{\text{eq}} = \sum C_i$
- $E = -\frac{dV}{dr}$, or $E = V/d$ (uniform field)
- $\varepsilon_0 = 8.85 \times 10^{-12}$ F/m
