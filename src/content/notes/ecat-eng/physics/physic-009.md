---
exam: ecat-eng
examName: "ECAT (Engineering)"
subject: physics
subjectName: "Physics"
topic: physic-009
topicName: "Electrostatics"
weight: 5
country: pakistan
generated: "2026-09-25T08:20:00"
lastUpdated: "2026-09-25"
---

# Electrostatics — ECAT (Engineering)

Electrostatics is the part of the ECAT (Engineering) paper where you work with stationary charges, fields, and potentials. The topic pulls straight from the FSc (Part I & II) syllabus: Coulomb's law, electric field strength, electric potential, capacitors, dielectrics, and Gauss's law in symmetric geometry. MCQs on this topic mix formula recall (V = kQ/r, E = σ/ε₀ for a sheet) with numerical reasoning (work done moving a charge, equivalent capacitance of a network). Practice is dominated by sign-of-force MCQs and capacitor combination problems.

> Verify the live syllabus, paper pattern, and any in-year changes on https://www.uet.edu.pk/ before planning around the figures below.

### 🟢 Lite — Quick Review (1h-1d)

**Charge & Coulomb's law.** The elementary charge is $e = 1.602 \times 10^{-19}\,\text{C}$; every observable charge is an integer multiple of it. The force between two point charges in vacuum is

$$F = k\,\frac{q_1 q_2}{r^2} = \frac{1}{4\pi\varepsilon_0}\,\frac{q_1 q_2}{r^2}, \qquad k = 8.99 \times 10^9\,\text{N·m}^2/\text{C}^2,\ \varepsilon_0 = 8.854 \times 10^{-12}\,\text{F/m}.$$

In a medium of dielectric constant $\kappa$, replace $\varepsilon_0$ with $\kappa\varepsilon_0$; the force is reduced by a factor of $\kappa$. The force is repulsive for like charges and attractive for unlike; $F$ is along the line joining the two charges, so treat it as a vector in any multi-charge problem.

**Field and potential.** The electric field at a point is the force per unit positive test charge, $\vec{E} = \vec{F}/q_0$ (units V/m or N/C). For a point charge, $\vec{E}$ points radially outward from a positive source and inward to a negative one, with magnitude $E = kQ/r^2$. Potential is a scalar, $V = kQ/r$, and the relationship to the field along any direction is $E = -\mathrm{d}V/\mathrm{d}r$. Work done by the field in moving charge $q$ from A to B is $W_{AB} = q(V_A - V_B)$.

**Capacitors.** Capacitance $C = Q/V$ (units F). For a parallel-plate capacitor in vacuum, $C = \varepsilon_0 A/d$; with a dielectric filling the gap, $C = \kappa\varepsilon_0 A/d$. Series: $1/C_{eq} = \sum 1/C_i$. Parallel: $C_{eq} = \sum C_i$. Energy stored: $U = \tfrac{1}{2}CV^2 = \tfrac{1}{2}QV = Q^2/(2C)$.

**Gauss's law at a glance.** $\oint \vec{E}\cdot\mathrm{d}\vec{A} = q_{enc}/\varepsilon_0$. For an infinite plane sheet of charge density $\sigma$, $E = \sigma/(2\varepsilon_0)$. Between two oppositely charged parallel plates, $E = \sigma/\varepsilon_0$. Inside a conductor in electrostatic equilibrium, $E = 0$; the entire excess charge sits on the surface.

**Quick check before the exam.**
- Can you write Coulomb's law both forms and pick the right sign?
- Can you compute $V$ at the midpoint of two equal charges and recognise it is zero by symmetry?
- Can you reduce three capacitors to one with the correct series/parallel rule?
- Can you convert eV to joules ($1\,\text{eV} = 1.602 \times 10^{-19}\,\text{J}$)?

### 🟡 Standard — Exam Prep (3d-3w)

#### Coulomb's law in multiple-charge problems

Treat every pair as a separate force vector and add them as vectors. For three collinear charges on the x-axis, use a sign convention (right = positive) and write $F_{net} = k\sum_i q_0 q_i / r_i^2$ with sign already on the right-hand side. For a right-triangle arrangement, resolve along axes using $F_x = F\cos\theta$ and $F_y = F\sin\theta$. A common ECAT trick is the **equilibrium of three charges**: two charges $q_1$ and $q_2$ fixed at the ends of a segment, and a third test charge $q$ at distance $x$ from $q_1$ such that the net force is zero. Set up $k q_1 q/x^2 = k |q_2| q/(d-x)^2$ and solve for $x$; check that the charge between the two must have the same sign for this to be possible.

#### Electric field and superposition

For two point charges, draw the field at the field-point, resolve each into components, and add. On the perpendicular bisector of a dipole, fields cancel by symmetry along the axis and add perpendicular to it: $E_{axial} = 2k p / r^3$ for a short dipole of moment $p = qd$ far away; $E_{equatorial} = k p / r^3$ along the antiparallel direction. The field at an arbitrary point is the gradient of the potential, but for ECAT numericals, superposition is faster.

A **charged ring** of radius $R$ carrying total charge $Q$ produces an axial field

$$E_z = \frac{kQz}{(R^2 + z^2)^{3/2}}.$$

At the centre $(z = 0)$, $E = 0$ by symmetry; the field peaks near $z = R/\sqrt{2}$.

#### Electric potential and equipotential surfaces

Potential is a scalar, so $V_{total} = \sum V_i$ at any point with no vector gymnastics. The **work-energy theorem in electrostatics** says $W_{AB} = q(V_A - V_B)$. To find the speed of a charge after being released from rest at A and accelerated to B, use $q(V_A - V_B) = \tfrac{1}{2}mv^2$. A **proton** (charge $+e$, mass $1.673 \times 10^{-27}\,\text{kg}$) accelerated through a 1000 V potential difference gains $1000\,\text{eV} = 1.602 \times 10^{-16}\,\text{J}$ of kinetic energy.

Equipotential surfaces are perpendicular to field lines; the potential is constant on them. A conductor in electrostatic equilibrium is an equipotential; its surface is an equipotential, and the field just outside is perpendicular to the surface.

#### Gauss's law for symmetric charge distributions

Gauss's law is most useful when you can pick a Gaussian surface with constant $|\vec{E}|$ over parts of it. The standard results worth memorising:

| Distribution | Field (where) | Magnitude |
|---|---|---|
| Infinite line of charge, linear density $\lambda$ | distance $r$ | $E = \lambda/(2\pi\varepsilon_0 r)$ |
| Infinite plane sheet, surface density $\sigma$ | either side | $E = \sigma/(2\varepsilon_0)$ |
| Two parallel sheets, $\pm\sigma$ | between | $E = \sigma/\varepsilon_0$ |
| Spherical shell, total $Q$, radius $R$ | $r < R$ | $E = 0$ |
| Spherical shell, total $Q$, radius $R$ | $r > R$ | $E = kQ/r^2$ |
| Uniformly charged solid sphere, total $Q$, radius $R$ | $r < R$ | $E = kQr/R^3$ |
| Uniformly charged solid sphere, total $Q$, radius $R$ | $r > R$ | $E = kQ/r^2$ |

Inside a conductor, the field is always zero in electrostatic equilibrium. Charge given to a conductor resides on the outer surface; for a hollow conductor with a charge inside the cavity, the inner surface gets an induced charge $-q_{inside}$ and the outer surface gets $+q_{inside}$ plus the conductor's own charge.

#### Capacitors and dielectrics

The parallel-plate capacitor formula $C = \varepsilon_0 A/d$ assumes uniform field between the plates and negligible fringing. With a dielectric slab of constant $\kappa$ completely filling the gap, $C$ increases by $\kappa$. With a slab that only partly fills it (thickness $t < d$), the device is a **series combination of two capacitors**: $C = (\varepsilon_0 A)/(d - t + t/\kappa)$.

Inserting a dielectric with the battery connected increases $C$ and the charge $Q = CV$; the voltage stays fixed. With the battery disconnected, $Q$ stays fixed and $V$ drops. Energy stored $U = \tfrac{1}{2}CV^2$ goes down in the disconnected case because the field does work pulling the slab in.

Networks of capacitors: identify series chains (same charge on each, voltage divides) and parallel groups (same voltage across each, charge divides). For a Wheatstone-bridge network, you need a delta-star transformation when none of the capacitors has zero potential difference across it; if a node sits at the same potential as one of its neighbours, that branch carries zero charge and can be removed.

**Energy in the field.** For a parallel-plate capacitor, $U = \tfrac{1}{2}CV^2 = \tfrac{1}{2}\varepsilon_0 E^2 \cdot Ad$ per plate area, giving an energy density $u = \tfrac{1}{2}\varepsilon_0 E^2$ in vacuum.

#### Worked example

**Problem.** Three capacitors of $2\,\mu\text{F}$, $3\,\mu\text{F}$ and $6\,\mu\text{F}$ are connected so that the $3\,\mu\text{F}$ and $6\,\mu\text{F}$ are in parallel, and that combination is in series with the $2\,\mu\text{F}$. A 12 V battery is connected across the whole network. Find (a) the equivalent capacitance, (b) the charge on the $2\,\mu\text{F}$ capacitor, (c) the voltage across the parallel pair.

**Solution.**
(a) Parallel pair: $C_p = 3 + 6 = 9\,\mu\text{F}$. Series with $2\,\mu\text{F}$:

$$\frac{1}{C_{eq}} = \frac{1}{2} + \frac{1}{9} = \frac{11}{18}\ \mu\text{F}^{-1} \;\Rightarrow\; C_{eq} = \frac{18}{11} \approx 1.636\,\mu\text{F}.$$

(b) Total charge from the battery equals the charge on the series element: $Q = C_{eq}V = 1.636 \times 12 \approx 19.64\,\mu\text{C}$. The $2\,\mu\text{F}$ capacitor carries this charge, so $Q_2 = 19.64\,\mu\text{C}$.

(c) Voltage across the parallel pair: $V_p = Q/C_p = 19.64/9 \approx 2.18\,\text{V}$. Check: $V_2 = Q/C_2 = 19.64/2 = 9.82\,\text{V}$; $V_2 + V_p = 9.82 + 2.18 = 12\,\text{V}$. ✓

### 🔴 Deep — Mastery (1mo+)

#### Edge cases and subtleties

The **self-energy of a uniformly charged sphere** is a frequent honours-style question. Build the charge by bringing infinitesimal shells from infinity: $U = 3Q^2/(20\pi\varepsilon_0 R)$. Compare with the energy of a point-charge pair $U = Q_1 Q_2/(4\pi\varepsilon_0 r)$; for a sphere of finite radius the field energy sits in the volume $r \geq R$, and integrating $u = \tfrac{1}{2}\varepsilon_0 E^2$ gives the same result.

The **image-charge method** replaces a grounded conducting plane with a mirror charge $-q$ at the symmetric point behind the plane. The force on the real charge equals the Coulomb force between the charge and its image, so $F = -kq^2/(2d)^2$ (sign: attractive toward the plane). For a charge outside a grounded conducting sphere of radius $R$, the image charge is $q' = -qR/d$ placed at distance $R^2/d$ from the centre, where $d$ is the distance from the sphere's centre to the real charge.

**Forces on conductors and dielectrics.** A dielectric slab is pulled into a capacitor because the field does positive work on the induced dipoles. The force per unit area on the slab face is $\tfrac{1}{2}\varepsilon_0 E^2(\kappa - 1)$, pointing from the high-field region into the low-field region. A conductor $(\kappa \to \infty)$ feels $\tfrac{1}{2}\varepsilon_0 E^2$ per face — this is the principle behind electrostatic precipitators and laser-driven fusion pellets.

**Dielectric breakdown** occurs when the field exceeds roughly $3 \times 10^6\,\text{V/m}$ in air at STP. The maximum voltage on a parallel-plate capacitor before sparking is $V_{max} = E_{breakdown} \times d$. Capacitor banks are derated by 30–50% in practice because the breakdown field drops with humidity and electrode geometry.

#### Practice prompts

1. **Numerical.** A $4\,\mu\text{F}$ capacitor charged to $200\,\text{V}$ is disconnected from the battery and connected to an uncharged $6\,\mu\text{F}$ capacitor. Find (a) the common final voltage, (b) the energy loss, and (c) where the lost energy went.
2. **Conceptual.** A point charge $+q$ sits at distance $d$ from an infinite grounded conducting plane. Show, using the image-charge method, that the work needed to bring the charge from infinity to distance $d$ is $-kq^2/(4d)$. State whether the potential energy stored in the field is more or less than the magnitude of this work, and explain why.
3. **Derivative.** Derive the capacitance of a spherical capacitor (inner radius $a$, outer radius $b$) by solving Laplace's equation for the potential between the shells, then verify it reduces to $4\pi\varepsilon_0 a$ in the limit $b \to \infty$ (an isolated sphere).

#### Connections to adjacent topics

Electrostatics ties directly to **current electricity** (the next topic) through the capacitor discharge equation $Q(t) = Q_0 e^{-t/RC}$, where $R$ is the series resistance and $C$ the capacitance. The time constant $\tau = RC$ is in seconds because $R$ is in ohms and $C$ in farads; this is the same exponential decay you see in radioactive decay and damped oscillators. The energy density $u = \tfrac{1}{2}\varepsilon_0 E^2$ also generalises to magnetic fields as $u = B^2/(2\mu_0)$, so the electromagnetic energy density is $u_{em} = \tfrac{1}{2}\varepsilon_0 E^2 + B^2/(2\mu_0)$.

### Common traps

- **Forgetting the dielectric constant in media.** Coulomb's law and capacitance formulas both need $\kappa$ when a material is present; plugging vacuum $\varepsilon_0$ into a problem set in water (or inside a capacitor with a dielectric) gives an answer off by the dielectric factor.
- **Sign errors in work-energy problems.** Work done *by the field* on a positive charge moving from high to low potential is positive; the same motion for a negative charge gives negative work. Always write $W = q(V_A - V_B)$, never $W = qV_A + qV_B$.
- **Treating potential as a vector.** $V$ adds algebraically even when contributions have opposite signs. A point equidistant from $+q$ and $-q$ has $V = 0$ but $E \neq 0$.
- **Mixing series and parallel capacitor rules.** Series: charge is the same on each, voltages add as reciprocals. Parallel: voltage is the same across each, charges add. Memorise the difference by remembering which quantity is conserved.
- **Ignoring that the field inside a conductor is zero.** Any "find the field at point P inside a charged conducting sphere" MCQ is a zero-field question; using $E = kQ/r^2$ at $r = 0$ is a classic mark-loser.

---

*Verify all numerical claims against the official ECAT notice at https://ecat.uet.edu.pk/ and the UET admissions portal at https://www.uet.edu.pk/ before planning your revision timetable around them.*

## Continue your study

- **[View this topic in your ECAT (Engineering) roadmap](/roadmap/?exam=ecat-eng&duration=1mo)** — see where "Electrostatics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat-eng&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering) exam overview](/exams/ecat-eng/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/ecat-eng/physics/)** — browse sibling topics in this subject

