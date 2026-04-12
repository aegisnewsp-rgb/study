---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: physics
subjectName: Physics
topic: phy-12
topicName: Magnetic Effects of Current
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.047188"
diagramPrompt: "Clean educational diagram showing Magnetic Effects of Current with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration
---

# Magnetic Effects of Current

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Magnetic Field Due to a Current-Carrying Conductor:**

A steady current in a conductor produces a steady magnetic field. The direction of the magnetic field is given by the right-hand grip rule: if you grip the conductor with your right hand with the thumb pointing in the direction of conventional current, your fingers curl in the direction of the magnetic field lines (counterclockwise when viewed from the front looking along the direction of current flow).

**Key Field Formulas:**

- Magnetic field at distance r from a long straight wire: B = (μ₀I)/(2πr). The field lines are concentric circles around the wire. SI unit: Tesla (T).
- Magnetic field at the centre of a circular coil of N turns: B = (μ₀NI)/(2r) with N = 1 for a single turn.
- Magnetic field inside a long solenoid: B = μ₀nI, where n = N/l is the number of turns per unit length. The field is uniform inside a solenoid (straight, parallel to the axis) and nearly zero outside.

Note: μ₀ = 4π × 10⁻⁷ H/m is the permeability of free space.

**Force on a Current-Carrying Conductor in a Magnetic Field:**

When a conductor of length L carrying current I is placed in a uniform magnetic field B, the force experienced is F = BIL sinθ, where θ is the angle between B and the wire (direction of current). The force is maximum when the wire is perpendicular to B (θ = 90°): F_max = BIL. The force is zero when the wire is parallel to B (θ = 0°).

The direction of force is given by Fleming's left-hand rule: hold the thumb, forefinger, and middle finger mutually perpendicular. Forefinger → magnetic field (N to S), middle finger → current (positive to negative convention), thumb → force (motion of conductor). Alternatively, use the cross product F = I(L × B).

**⚡ ECAT Tip:** The force on two parallel current-carrying wires: parallel currents attract, antiparallel currents repel. This is because each wire produces a magnetic field that acts on the other wire. If current I₁ produces field B₂₁ at the location of wire 2, then wire 2 experiences force F₂₁ = B₂₁I₂L. By Newton's third law, the forces are equal and opposite.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

**Moving Coil Galvanometer — Principle:**

A galvanometer is a device that detects small currents. A coil of wire carrying current I is placed in a radial magnetic field (produced by curved pole pieces). The magnetic torque on the coil is τ = NIAB cosθ, where θ = 90° always (radial field means B is always parallel to the plane of the coil), so τ = NIAB. This torque is opposed by a spring torque κθ, where κ is the torsional constant and θ is the deflection angle. At equilibrium: NIAB = κθ, so θ ∝ I — the deflection angle is directly proportional to the current, making the scale linear.

To convert a galvanometer to an ammeter (measure larger currents): connect a shunt resistance R_s in parallel. The galvanometer itself only allows a small current I_g (full-scale deflection current). For a moving coil galvanometer of resistance G, to extend its range to measure current I: R_s = G × I_g/(I - I_g). A good ammeter has very low resistance (the shunt is very small) to minimise circuit disturbance.

To convert a galvanometer to a voltmeter: connect a large series resistance R_s. For a voltmeter measuring range V: R_s = V/I_g - G. A good voltmeter has very high resistance (ideally infinite) to draw minimal current from the circuit being measured.

**⚡ ECAT Tip:** In a current-carrying coil in a magnetic field (like a motor), the torque is τ = NIAB sinθ, where θ is the angle between the plane of the coil and the magnetic field direction. This is the basis of electric motors — a DC motor uses a commutator to reverse the current direction every half rotation so the torque always acts in the same direction.

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

**Force on a Moving Charge in a Magnetic Field — Lorentz Force:**

A charge q moving with velocity v in a uniform magnetic field B experiences a force F = q(v × B) = qvB sinθ, where θ is the angle between v and B. This is the magnetic component of the Lorentz force. The complete Lorentz force is F = qE + q(v × B).

Special cases:
- v parallel to B (θ = 0°): F = 0 — no force, charge moves in a straight line
- v perpendicular to B (θ = 90°): F = qvB — maximum, charge moves in a circle (cyclotron motion)
- v at angle θ: helical motion — the component v_parallel = v cosθ travels along B (no force), v_perp = v sinθ causes circular motion; the result is a helix

For a charge moving perpendicular to B in a circular path: radius r = mv/(qB), period T = 2πm/(qB), frequency (cyclotron frequency) f = qB/(2πm). Crucially, the cyclotron frequency is independent of the radius r and the speed v (for non-relativistic speeds).

**Velocity Selector — Crossed E and B Fields:**

When electric and magnetic fields are perpendicular to each other and both perpendicular to the velocity of a charged particle, a velocity selector transmits only particles with a specific speed v = E/B. Particles with other speeds are deflected by the magnetic force qvB or electric force qE until only those satisfying v = E/B pass undeflected. This principle is used in mass spectrometers.

**Magnetic Field of a Solenoid — Derivation:**

For a solenoid of length l with N turns, carrying current I, each turn produces a field. The field inside an ideal solenoid (length >> radius) is uniform: B = μ₀(N/l)I = μ₀nI, where n = N/l is turns per unit length. At the ends of a real solenoid, the field is half the inside value (B_end = ½μ₀nI). The field outside is approximately zero for a long solenoid.

**⚡ ECAT Pattern:** ECAT frequently tests: (1) calculating the force on a current-carrying wire in a magnetic field using F = BIL sinθ; (2) direction determination using Fleming's left-hand rule; (3) magnetic field at the centre of a circular coil or inside a solenoid; (4) the cyclotron principle and radius of circular path of a charged particle in a magnetic field; and (5) converting galvanometer to ammeter or voltmeter with correct resistance calculations. A typical ECAT question: "A wire of length 0.5 m carries a current of 2 A perpendicular to a magnetic field of 0.3 T. Calculate the force on the wire." Answer: F = BIL = 0.3 × 2 × 0.5 = 0.3 N.
