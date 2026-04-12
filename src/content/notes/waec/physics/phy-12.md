---
exam: waec
examName: WAEC WASSCE
subject: physics
subjectName: Physics
topic: phy-12
topicName: Electrostatics and Capacitors
weight: 5
country: nigeria
generated: "2026-03-24T08:32:07.635445"
diagramPrompt: "Clean educational diagram showing Electrostatics and Capacitors with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration
---

# Electrostatics and Capacitors

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your WAEC exam.

**Electrostatics** is the study of electric charges at rest. When charges accumulate on the surface of an object, they remain stationary until given a path to flow. The fundamental law governing the interaction between stationary charges is Coulomb's Law.

**Coulomb's Law:**
The force $F$ between two point charges $q_1$ and $q_2$ separated by distance $r$ is:

$$F = k\frac{q_1 q_2}{r^2}$$

where $k = \frac{1}{4\pi\varepsilon_0} \approx 9 \times 10^9\,\text{N·m}^2/\text{C}^2$

$\varepsilon_0$ is the permittivity of free space: $\varepsilon_0 = 8.85 \times 10^{-12}\,\text{C}^2/\text{N·m}^2$

**Electric Field:**
The electric field $E$ at a point is defined as the force per unit positive test charge:

$$E = \frac{F}{q} = k\frac{Q}{r^2}$$

Direction: Field lines radiate away from positive charges and toward negative charges.

**Electric Potential:**
The potential $V$ at a point is the work done per unit charge in bringing a positive test charge from infinity:

$$V = k\frac{Q}{r}$$

Relationship: $E = -\frac{dV}{dr}$

**Capacitance:**
A capacitor stores charge when a voltage is applied across its plates. For a parallel plate capacitor:

$$C = \frac{Q}{V} = \frac{\varepsilon_0 A}{d}$$

where $A$ is the plate area and $d$ is the separation between plates.

**Energy Stored in a Capacitor:**
$$U = \frac{1}{2}CV^2 = \frac{1}{2}QV^2 = \frac{Q^2}{2C}$$

⚡ **WAEC Tip**: Field lines always run from positive to negative charges. Equipotential lines are always perpendicular to electric field lines. Remember that force is inversely proportional to $r^2$, so doubling the distance reduces force by a factor of 4.

---

### 🟡 Standard — Regular Study (2d–2mo)
> For students who want genuine understanding.

**Superposition Principle:**

When multiple charges are present, the net force on any charge is the vector sum of individual forces. Similarly, electric fields superpose by vector addition.

For electric potential (which is scalar), the total potential at a point is the algebraic sum of individual potentials:

$$V_{\text{total}} = \sum V_i = k\sum\frac{Q_i}{r_i}$$

**Electric Dipole:**

An electric dipole consists of two equal and opposite charges ($+q$ and $-q$) separated by a small distance $d$.

**Dipole moment:** $\vec{p} = q\vec{d}$ (vector pointing from negative to positive charge)

**Torque on a dipole in uniform electric field:**
$$\tau = pE\sin\theta$$

where $\theta$ is the angle between the dipole moment and the electric field direction.

**Potential due to a dipole:**
- At a point on the axial line (along the dipole axis): $V = \frac{kp}{r^2}$
- At a point on the equatorial plane: $V = -\frac{kp}{2r^3}$

**Work done in rotating a dipole:**
$$W = pE(\cos\theta_1 - \cos\theta_2)$$

**Gauss's Law:**

The total electric flux through any closed surface equals the net charge enclosed divided by $\varepsilon_0$:

$$\oint \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}$$

**Applications of Gauss's Law:**

1. **Uniformly charged spherical shell:**
   - Inside the shell ($r < R$): $E = 0$
   - On the surface ($r = R$): $E = \frac{kQ}{R^2}$
   - Outside the shell ($r > R$): $E = \frac{kQ}{r^2}$ (behaves as if all charge is at centre)

2. **Uniformly charged solid sphere:**
   - Inside ($r < R$): $E = \frac{kQr}{R^3}$
   - Outside ($r > R$): $E = \frac{kQ}{r^2}$

3. **Infinite line charge:**
   $$E = \frac{\lambda}{2\pi\varepsilon_0 r} = \frac{2k\lambda}{r}$$
   where $\lambda$ is the linear charge density.

4. **Infinite plane sheet:**
   $$E = \frac{\sigma}{2\varepsilon_0}$$
   (uniform field, independent of distance from sheet)

**Dielectrics:**

A dielectric is an insulating material placed between capacitor plates. When inserted:
- Polar molecules align with the electric field
- Effective electric field inside the material decreases
- Capacitance increases by the dielectric constant $K$:
$$C' = KC$$

For parallel plate capacitor with dielectric:
$$C = \frac{K\varepsilon_0 A}{d}$$

⚡ **Common Mistake**: Students often confuse electric field with electric potential. Field is a vector (has direction); potential is a scalar (no direction). A positive charge produces field pointing away from it; the potential at a point near a positive charge is positive.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive theory for serious exam preparation.

**Capacitor Combinations:**

**Series Combination:**
$$\frac{1}{C_{\text{eq}}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3}$$

- Same charge $Q$ on each capacitor
- Voltages add: $V = V_1 + V_2 + V_3$
- Useful for reducing capacitance

**Parallel Combination:**
$$C_{\text{eq}} = C_1 + C_2 + C_3$$

- Same voltage across each capacitor
- Charges add: $Q = Q_1 + Q_2 + Q_3$
- Useful for increasing capacitance

**Worked Example:**
Two capacitors $C_1 = 2\,\mu\text{F}$ and $C_2 = 3\,\mu\text{F}$ are connected in series, then across a $100\,\text{V}$ battery.

For series: $\frac{1}{C_{\text{eq}}} = \frac{1}{2} + \frac{1}{3} = \frac{5}{6}$
$C_{\text{eq}} = \frac{6}{5} = 1.2\,\mu\text{F}$

Charge on each: $Q = C_{\text{eq}}V = 1.2 \times 10^{-6} \times 100 = 1.2 \times 10^{-4}\,\text{C}$

Voltage across $C_1$: $V_1 = \frac{Q}{C_1} = \frac{1.2 \times 10^{-4}}{2 \times 10^{-6}} = 60\,\text{V}$
Voltage across $C_2$: $V_2 = \frac{Q}{C_2} = \frac{1.2 \times 10^{-4}}{3 \times 10^{-6}} = 40\,\text{V}$

**Energy Density in Electric Field:**

The energy stored per unit volume in an electric field is:
$$u = \frac{1}{2}\varepsilon_0 E^2$$

This formula applies to any region of space where an electric field exists.

**Dielectric Breakdown:**

Every dielectric material has a maximum electric field it can withstand before conducting:
- Air: $E_{\text{max}} \approx 3 \times 10^6\,\text{V/m}$
- Mica: $E_{\text{max}} \approx 100 \times 10^6\,\text{V/m}$

Maximum voltage across capacitor before breakdown:
$$V_{\text{max}} = E_{\text{max}} \times d$$

**Comparison of Coulomb's Law and Gravitational Force:**

| Property | Coulomb's Law | Newton's Gravity |
|----------|---------------|-----------------|
| Force | $F = kq_1q_2/r^2$ | $F = Gm_1m_2/r^2$ |
| Constant | $k \approx 9 \times 10^9$ | $G \approx 6.67 \times 10^{-11}$ |
| Can be | Attractive or repulsive | Always attractive |
| Depends on | Charge | Mass |

**Motion of Charged Particles in Electric Field:**

For a charge $q$ in uniform electric field $E = V/d$:
- Force: $F = qE$
- Acceleration: $a = \frac{qE}{m} = \frac{qV}{md}$
- Time to cross: $t = \sqrt{\frac{2d}{a}}$

⚡ **WAEC Previous Year Pattern:**

| Year | Question | Concept |
|------|----------|---------|
| 2023 | Force between charges | Coulomb's law |
| 2022 | Capacitor energy | $U = \frac{1}{2}CV^2$ |
| 2021 | Electric field by sphere | Gauss's law |

**Van de Graaff Generator:**

A device that produces high voltages through electrostatic induction.
- Belt carries charge to a hollow conductor
- Charge accumulates on the outer surface
- Can generate potentials up to millions of volts
- Used in particle acceleration and demonstrations

⚡ **Exam Strategy**: Draw force diagrams for electrostatic problems. For capacitor problems, first identify whether they are in series or parallel, then find equivalent capacitance. Remember that charges on series capacitors are equal; voltages across parallel capacitors are equal.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
