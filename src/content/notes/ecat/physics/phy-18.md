---
exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: physics
subjectName: Physics
topic: phy-18
topicName: Atomic Spectra and Bohr Model
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.051990"
diagramPrompt: Clean educational diagram showing Atomic Spectra and Bohr Model with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration
---

# Atomic Spectra and Bohr Model

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Line Spectra — Fingerprints of Elements:**

When an atomic gas is excited (by heat, electric discharge, or radiation), it emits light at specific wavelengths — not a continuous rainbow of colours, but discrete coloured lines. This is the atomic emission spectrum. Each element has a unique emission spectrum, like a fingerprint. Conversely, when white light passes through a cool gas, the gas absorbs at the same specific wavelengths it would emit — this is the absorption spectrum.

This discreteness cannot be explained by classical physics (which predicted continuous spectra). Bohr's model explained it by proposing quantised energy levels.

**Bohr's Model of the Hydrogen Atom:**

Bohr proposed three revolutionary postulates for hydrogen:

1. **Stationary States:** Electrons revolve in specific circular orbits without emitting radiant energy. These orbits have fixed radii and correspond to discrete energy levels.

2. **Quantisation of Angular Momentum:** The angular momentum of the electron in orbit is quantised: mvr = nh/(2π), where n = 1, 2, 3, ... is the principal quantum number (orbit number). This means only specific orbits are allowed.

3. **Energy Emission/Absorption:** An electron can jump between stationary states by emitting or absorbing a photon of exactly the right frequency: E_photon = E_final - E_initial = hf = hc/λ.

**Key Results for Hydrogen:**

Bohr calculated the allowed orbital radii: r_n = n²a₀, where a₀ = 0.529 Å (Bohr radius) is the radius for n = 1.

The energy of the electron in orbit n: E_n = -13.6 eV/n² (in electronvolts, relative to ionisation = 0 eV). For n = 1 (ground state): E₁ = -13.6 eV. For n = 2: E₂ = -3.4 eV. For n = 3: E₃ = -1.51 eV.

The ionisation energy of hydrogen from ground state = 13.6 eV (the energy needed to remove the electron completely).

**⚡ ECAT Tip:** The Balmer series (visible hydrogen lines) corresponds to transitions where the final orbit is n_f = 2 (e.g., n_i = 3 → 2, 4 → 2, 5 → 2, etc.). The Lyman series (ultraviolet) ends at n_f = 1. The Paschen series (infrared) ends at n_f = 3.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

**Derivation of Bohr Radius and Energy:**

Starting from Coulomb's law: centripetal force on electron = electrostatic attraction: mv²/r = (1/(4πε₀)) × (e × e)/r² = ke²/r², where k = 1/(4πε₀).

From Bohr quantisation of angular momentum: mvr = nh/(2π) → v = nh/(2πmr).

Substituting v into the force equation: m × (n²h²/(4π²m²r²)) / r = ke²/r² → n²h²/(4π²m r³) = ke²/r² → r_n = (n²h²)/(4π²mke²) = n² × (h²/(4π²mke²)).

Evaluating the constant: h = 6.626 × 10⁻³⁴ J·s, m = 9.11 × 10⁻³¹ kg, k = 8.99 × 10⁹ N·m²/C², e = 1.6 × 10⁻¹⁹ C. This gives r₁ = 0.529 × 10⁻¹⁰ m = 0.529 Å. Good.

Total energy E = KE + PE = ½mv² - ke²/r = ½(ke²/r) - ke²/r = -ke²/(2r). Substituting r_n: E_n = -ke²/(2r_n) = -ke² × (4π²mke²)/(2n²h²) = -(2π²mk²e⁴)/(n²h²). Numerically: E_n = -(13.6 eV)/n².

**Hydrogen Spectral Lines — Wavelength Calculation:**

The wavelength of emitted/absorbed photon during transition from n_i to n_f: ΔE = hc/λ = E_lower - E_higher = -13.6/n_f² + 13.6/n_i² (taking E_n = -13.6/n² eV).

So 1/λ = R_H × (1/n_f² - 1/n_i²), where R_H = Rydberg constant for hydrogen = 1.097 × 10⁷ m⁻¹ (approximately).

**⚡ ECAT Tip:** For the Balmer series (visible, n_f = 2), the longest wavelength (lowest energy, smallest n_i difference) is for n_i = 3 → n_f = 2: 1/λ = R_H(1/4 - 1/9) = R_H × (5/36). The shortest wavelength in Balmer is as n_i → ∞: 1/λ = R_H/4, λ = 4/R_H = 364.6 nm (the series limit).

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

**Limitations of Bohr Model:**

Bohr's model successfully explained hydrogen's spectrum but failed for:
1. **Multi-electron atoms:** Bohr could not explain the spectra of helium, lithium, or any atom with more than one electron, because electron-electron repulsions make the problem unsolvable with this model.
2. **Fine structure:** Spectral lines split further under high resolution due to relativistic effects and spin-orbit coupling — Bohr model has no concept of electron spin.
3. **Zeeman effect:** External magnetic fields split spectral lines (anomalous Zeeman effect) — Bohr model only explains the normal Zeeman effect.
4. **Intensity of spectral lines:** Bohr model gives no framework for calculating transition probabilities (why some transitions are bright and others dim).
5. **Heisenberg uncertainty:** Bohr's precise circular orbits violate the uncertainty principle — we cannot simultaneously know exact r and p.

The Bohr model was superseded by the Schrödinger equation (quantum mechanics), which gives orbital shapes (s, p, d, f orbitals), energy levels that depend on both n and l (azimuthal quantum number), electron spin, and fine structure.

**Quantum Numbers in Modern Atomic Theory:**

Four quantum numbers describe each electron in an atom:
1. **Principal quantum number n:** determines the energy level (shell) and approximate distance from nucleus (n = 1, 2, 3, 4... correspond to K, L, M, N shells)
2. **Azimuthal quantum number l:** determines orbital shape (0 = s, 1 = p, 2 = d, 3 = f). For a given n, l ranges from 0 to n-1.
3. **Magnetic quantum number m_l:** determines orbital orientation in space. For a given l, m_l ranges from -l to +l (2l+1 values).
4. **Spin quantum number m_s:** electron spin (intrinsic angular momentum). m_s = +½ or -½ (spin up or spin down).

Pauli exclusion principle: no two electrons in an atom can have the same set of all four quantum numbers. This is why electrons fill shells and subshells in a specific order, leading to the periodic table's structure.

**⚡ ECAT Pattern:** ECAT frequently tests: (1) calculating the wavelength of emitted light from hydrogen using the Rydberg formula 1/λ = R_H(1/n_f² - 1/n_i²); (2) identifying which series (Lyman, Balmer, Paschen) a given wavelength belongs to; (3) Bohr radius calculation; (4) energy level diagrams; and (5) ionisation energy calculations. A typical ECAT question: "Calculate the wavelength of the photon emitted when an electron in hydrogen jumps from n = 4 to n = 2." 1/λ = R_H(1/4 - 1/16) = R_H × 3/16 → λ = 16/(3R_H) = 16/(3 × 1.097 × 10⁷) = 486 nm (this is the blue-green line of the Balmer series, known as H-β).
