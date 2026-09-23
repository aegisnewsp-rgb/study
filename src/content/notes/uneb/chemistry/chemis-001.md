---
exam: uneb
examName: UNEB UACE (Uganda)
subject: chemistry
subjectName: "Chemistry"
topic: chemis-001
topicName: Atomic Structure and Electron Configuration
weight: 3
country: uganda
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Atomic Structure and Electron Configuration

### 🟢 Lite — Quick Review (1h–1d)
> Start here if you have less than a day before Paper 1.

An atom is mostly empty space: a tiny nucleus of protons and neutrons surrounded by electrons in quantised shells. The atomic number **Z** equals the proton count and defines the element; the mass number **A = Z + N** adds the neutrons. Isotopes share Z but differ in N.

- **Bohr energy:** $E_n = -\dfrac{2.18 \times 10^{-18}\, Z^2}{n^2}\;\text{J}$ (or $-\dfrac{13.6\,Z^2}{n^2}$ eV). Z = atomic number, n = shell number, dimensionless.
- **Rydberg formula:** $\dfrac{1}{\lambda} = R_H\!\left(\dfrac{1}{n_1^2} - \dfrac{1}{n_2^2}\right)$, with $R_H = 1.097 \times 10^7\;\text{m}^{-1}$, $\lambda$ in metres.
- **Bohr frequency:** $\Delta E = h\nu$, where $h = 6.626 \times 10^{-34}\;\text{J·s}$ and $\nu$ is in Hz.
- **Sub-shell capacities:** s = 2, p = 6, d = 10, f = 14 electrons.

| Sub-shell | Shape | Max e⁻ |
|-----------|-------|--------|
| s | sphere | 2 |
| p | dumbbell (pₓ, p_y, p_z) | 6 |
| d | clover / dumbbell | 10 |
| f | complex | 14 |

> 💡 **Memory Hook:** "**Singlet first, Pair later**" — fill degenerate orbitals one electron at a time with parallel spins before any pairing (Hund's rule). Mnemonic for the aufbau order: **"1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s"** — read as the n+l rule: **S**mart **P**upils **D**o **P**hysical **F**un.

### 🟡 Standard — Regular Study (2d–2mo)
> The level you want before tackling Periodicity, Bonding and Kinetics.

#### Quantum numbers and orbital shape

Four quantum numbers identify each electron. **n** (principal, 1, 2, 3…) fixes the shell and energy level. **l** (azimuthal, 0 to n−1) labels the sub-shell: l = 0 is s, 1 is p, 2 is d, 3 is f. **m_l** (magnetic, −l to +l) names the individual orbital within a sub-shell; p gives three orbitals (m_l = −1, 0, +1). **m_s** (spin) is ±½. Two electrons sharing an orbital must differ in m_s — that is the Pauli exclusion principle in one line.

#### The three aufbau rules

| Rule | What it says | Common slip |
|------|--------------|-------------|
| Aufbau | Fill lower (n+l) orbitals first; ties broken by lower n | Forgetting 4s fills before 3d |
| Pauli | One orbital, two electrons, opposite spins | Same-spin pair in one box |
| Hund | Degenerate orbitals singly occupied first, parallel spins | Pairing p_x before p_y is half-filled |

Worked example: nitrogen (Z = 7) → 1s² 2s² 2p³. The three 2p electrons sit one each in pₓ, p_y, p_z with parallel spin — wrong to draw them as ↑↓ ↑ ↑.

#### Spectral series of hydrogen

Electrons falling to n₁ = 1, 2, 3, 4, 5 produce the **Lyman** (UV), **Balmer** (visible), **Paschen**, **Brackett** and **Pfund** (all IR) series respectively. Plug n₁ and n₂ into the Rydberg equation to find λ.

#### Worked problem (UNEB Paper 1 style)

> Calculate the wavelength of light emitted when an electron in hydrogen drops from n = 3 to n = 2. Identify the spectral series.

Using $\dfrac{1}{\lambda} = R_H\!\left(\dfrac{1}{n_1^2} - \dfrac{1}{n_2^2}\right)$ with n₁ = 2, n₂ = 3:

$\dfrac{1}{\lambda} = 1.097 \times 10^7\!\left(\dfrac{1}{4} - \dfrac{1}{9}\right) = 1.097 \times 10^7 \times \dfrac{5}{36}$

$\dfrac{1}{\lambda} = 1.524 \times 10^6\;\text{m}^{-1}$

$\lambda = 6.56 \times 10^{-7}\;\text{m} = 656\;\text{nm}$

The line belongs to the **Balmer series** (n₁ = 2) — this is the H-α red line at 656 nm.

> ⚠️ **Examiner Trap:** students often subtract in the wrong order inside the bracket, giving a negative λ. Always put the **lower** n first; emission means energy is released, so the bracket is positive.

#### Configurations of ions and the 4s–3d question

Neutral Fe (Z = 26) is **[Ar] 3d⁶ 4s²**, not 3d⁸. For Fe²⁺, electrons leave from **4s before 3d**, giving **[Ar] 3d⁶**. For Fe³⁺, one more leaves 3d: **[Ar] 3d⁵** — half-filled and extra stability. The same applies to Cu (Z = 29): **[Ar] 3d¹⁰ 4s¹** in the ground state.

#### Isotopes versus isobars

Isotopes of one element share Z but differ in N (and A). Isobars share A but differ in Z. UNEB often asks which pair is isotopes from a list; look for the same Z, not the same symbol.

> ⚠️ **Examiner Trap:** writing the configuration of hydrogen as 1s². Hydrogen has one electron: **1s¹**. Helium is **1s²**, never 1s³.

### 🔴 Extended — Deep Study (3mo+)
> For students preparing several months out, or returning to fundamentals.

#### Why the aufbau order really works

The (n + l) rule is a simplification. The Madelung ordering 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s … holds because radial penetration of s orbitals drops their energy below d at the same n. From scandium onward the 3d and 4s energies are close, which is why transition metal chemistry is so redox-active.

| Element range | Block filling | Anomaly to memorise |
|---------------|---------------|---------------------|
| Z = 1–2 | 1s | H is 1s¹, He is 1s² |
| Z = 3–10 | 2s then 2p | none |
| Z = 11–18 | 3s, 3p | — |
| Z = 19–30 | 4s before 3d | Cr = [Ar] 3d⁵ 4s¹; Cu = [Ar] 3d¹⁰ 4s¹ |
| Z = 31–36 | 4p | — |
| Z = 39–48 | 5s, 4d | — |
| Lanthanides Z = 57–71 | 6s, then 4f | Ce, Gd have irregular f counts |
| Actinides Z = 89–103 | 7s, then 5f | — |

#### Edge cases the exam exploits

1. **Excited states** are not the ground configuration. Sodium's famous yellow line (589 nm) comes from 3p → 3s, not from a 3s → 2p drop.
2. **de Broglie wavelength** of an electron in the nth Bohr orbit: $\lambda = h/(mv) = 2\pi r/n$. The circumference $2\pi r$ equals an integer number of wavelengths — Bohr's quantisation restated as a standing wave.
3. **Wave-particle duality** is what motivated the orbital picture: you cannot pin down an electron's position and momentum together (Heisenberg), so orbitals are probability maps $|\psi|^2$, not orbits.
4. **Specific charge** $e/m = 1.76 \times 10^{11}\;\text{C·kg}^{-1}$ for the electron is a frequently quoted UNEB value; proton $e/m$ is roughly 1836× smaller because of the mass ratio.

#### Misconception audit

| Wrong statement | Correction |
|-----------------|------------|
| "Electrons orbit like planets." | They occupy orbitals — probability clouds with no fixed trajectory. |
| "4s always fills before 3d and stays before 3d." | 4s fills first, but on ionisation it leaves first. |
| "Heavier isotope means more protons." | A and Z can move independently; isotopes differ in N only. |
| "Pairing reduces energy." | Pairing costs energy; half-filled and fully-filled sub-shells are extra stable, which is why Cr, Cu, Mo, Ag, Au break the pattern. |

#### Advanced practice prompts

1. Show that the Rydberg constant $R_H = \dfrac{m_e e^4}{8\varepsilon_0^2 h^3 c}$ has SI units of m⁻¹, starting from $E_n = -\dfrac{m_e e^4 Z^2}{8\varepsilon_0^2 h^2 n^2}$ and $\Delta E = hc/\lambda$.
2. Sodium emits at 589.0 nm and 589.6 nm (the D-doublet). Without calculating, explain qualitatively why two close lines appear from 3p → 3s, and predict the analogous doublet for lithium.

#### Connection to later UNEB topics

The same shells reappear in Periodicity (ionisation energy trends), Ionic and Covalent Bonding (valence electrons), and Reaction Kinetics (activation energy from orbital considerations). A solid grip here saves marks across the entire paper.

> 📌 **Take-away:** every UNEB question on this topic is a recombination of Z, n, the Rydberg bracket, and one of the three aufbau rules. Master those four and you cover roughly 80% of past marks.

## Continue your study

- **[View this topic in your UNEB UACE (Uganda) roadmap](/roadmap/?exam=uneb&duration=1mo)** — see where "Atomic Structure and Electron Configuration" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=uneb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[UNEB UACE (Uganda) exam overview](/exams/uneb/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/uneb/chemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
