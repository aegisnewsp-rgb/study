---
exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-10
topicName: Electrostatics
weight: 5
country: pakistan
generated: "2026-03-24T08:32:08.086060"
diagramPrompt: Clean educational diagram showing Electrostatics with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration
---

# Electrostatics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your MDCAT exam.

**Electric Charge:**
- Two types: Positive (+) and Negative (-)
- Like charges repel; unlike charges attract
- Charge is conserved: $\sum Q = 0$
- Quantisation: $Q = ne$ where $e = 1.6 \times 10^{-19}\,\text{C}$

**Coulomb's Law:**
$$F = k\frac{q_1 q_2}{r^2}$$

Where $k = \frac{1}{4\pi\varepsilon_0} \approx 9 \times 10^9\,\text{N·m}^2/\text{C}^2$

Force is attractive if $q_1 q_2 < 0$, repulsive if $q_1 q_2 > 0$.

⚡ **MDCAT Tip**: The force on $q_1$ due to $q_2$ equals the force on $q_2$ due to $q_1$ (Newton's third law). Force is inversely proportional to $r^2$ — doubling distance quarters the force.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Electric Field:**

Electric field strength $E$ = force per unit charge:
$$E = \frac{F}{q} = k\frac{Q}{r^2}$$

Direction: Away from positive charge, toward negative charge.

**Electric Field due to Point Charge:**
- $E = k\frac{Q}{r^2}$ (radial field)
- For multiple charges, use superposition: $E_{\text{total}} = \sum E_i$

**Worked Example:**
A charge $Q = +2\,\mu\text{C}$ produces an electric field. At a point $0.1\,\text{m}$ away, find the field strength.

$E = (9 \times 10^9) \times \frac{2 \times 10^{-6}}{(0.1)^2} = (9 \times 10^9) \times \frac{2 \times 10^{-6}}{0.01}$
$E = 9 \times 10^9 \times 2 \times 10^{-4} = 1.8 \times 10^6\,\text{N/C}$ (radially outward)

**Electric Potential:**

$$V = k\frac{Q}{r}$$

Potential at infinity = 0.
Work done to bring charge $q$ from infinity to point: $W = qV$

Relationship: $E = -\frac{dV}{dr}$ (in one dimension)

⚡ **Common Mistake**: Confusing electric field (vector) with electric potential (scalar). Field is force per charge; potential is work done per charge.

**Conductors and Insulators:**

| Material | Properties |
|----------|------------|
| Conductors | Free electrons; charge resides on surface |
| Insulators | Electrons bound; charge stays where placed |
| Semiconductors | Intermediate conductivity |

**Electric Dipole:**

Dipole moment: $p = qd$ (vector, from negative to positive)
Torque on dipole in uniform field: $\tau = pE\sin\theta$

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious exam preparation.

**Gauss's Law:**

$$\oint \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}$$

The total electric flux through a closed surface equals the enclosed charge divided by $\varepsilon_0$.

**Applications of Gauss's Law:**

**1. Spherically Symmetric Charge Distribution:**
- Solid sphere (uniformly charged):
  - Inside ($r < R$): $E = \frac{kQr}{R^3}$
  - On surface ($r = R$): $E = \frac{kQ}{R^2}$
  - Outside ($r > R$): $E = \frac{kQ}{r^2}$

- Spherical shell:
  - Inside ($r < R$): $E = 0$
  - On/outside surface: $E = \frac{kQ}{r^2}$ (same as point charge)

**2. Infinite Line Charge:**
$$E = \frac{\lambda}{2\pi\varepsilon_0 r} = \frac{2k\lambda}{r}$$
where $\lambda$ = linear charge density (C/m)

**3. Infinite Plane Sheet:**
$$E = \frac{\sigma}{2\varepsilon_0}$$
(Uniform field, independent of distance from sheet)
where $\sigma$ = surface charge density (C/m²)

**Capacitors:**

Capacitance: $C = \frac{Q}{V} = \frac{\varepsilon_0 A}{d}$ (parallel plate)

**Energy stored in capacitor:**
$$U = \frac{1}{2}CV^2 = \frac{1}{2}QV^2 = \frac{Q^2}{2C}$$

**Worked Example:**
A $100\,\mu\text{F}$ capacitor is charged to $200\,\text{V}$. Find:
1. Charge on capacitor
2. Energy stored

Solution:
1. $Q = CV = 100 \times 10^{-6} \times 200 = 0.02\,\text{C} = 20\,\text{mC}$
2. $U = \frac{1}{2}CV^2 = \frac{1}{2} \times 100 \times 10^{-6} \times 200^2 = 2\,\text{J}$

**Capacitor Combinations:**

| Combination | Formula |
|-------------|---------|
| Series | $\frac{1}{C_{\text{eq}}} = \sum \frac{1}{C_i}$ |
| Parallel | $C_{\text{eq}} = \sum C_i$ |

**Series:** Same charge on each capacitor, voltages add.
**Parallel:** Same voltage across each, charges add.

**Effect of Dielectric:**

Inserting dielectric with constant $K$:
- Capacitance increases: $C' = KC$
- Energy stored changes if capacitor is isolated or connected to battery.

⚡ **MDCAT Pattern:**

| Year | Question | Concept |
|------|----------|---------|
| 2023 | Electric field due to point charge | $E = kQ/r^2$ |
| 2022 | Capacitor energy | $U = \frac{1}{2}CV^2$ |
| 2021 | Gauss's law application | Spherical shell |

**Electric Field Lines:**

- Density of lines ∝ magnitude of field
- Lines start on positive charges, end on negative charges
- Tangent to field direction
- Never cross (field is unique at each point)

**Equipotential Lines/Surfaces:**
- All points at same potential
- Always perpendicular to electric field lines
- No work done moving charge along equipotential

**Motion of Charged Particles in Electric Field:**

For parallel plate capacitor:
- Electric field: $E = V/d$ (uniform)
- Force on charge: $F = qE = qV/d$
- Acceleration: $a = qV/(md)$

⚡ **Exam Strategy**: For forces between charges, draw the setup and determine direction of forces. For fields and potentials from multiple charges, use superposition (vector sum for fields, scalar sum for potentials). Always check units.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
