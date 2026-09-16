---
exam: jeemain
examName: JEE Main
subject: chemistry
subjectName: Chemistry
topic: chem-003
topicName: Chemical Bonding
weight: 3
country: india
generated: "2026-03-28T21:08:52"
lastUpdated: "2026-09-16"
---

# Chemical Bonding

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Chemical bonding** is the net electrostatic force holding atoms, ions, or molecules together, classified by the way valence electrons are distributed: **ionic** (electron transfer, Δχ > ~1.7 on Pauling scale), **covalent** (mutual sharing), **coordinate / dative** (one-atom donation, both electrons from the donor), and **metallic** (delocalised electron sea).

Two theoretical frameworks dominate JEE Main problems:

- **VSEPR Theory** — predicts shape from lone pair (lp) – bond pair (bp) repulsion order: **LP–LP > LP–BP > BP–BP**.
- **Molecular Orbital Theory (MOT)** — gives **bond order = (N_b − N_a)/2**, bond length, and magnetic behaviour; paramagnetic species have unpaired electrons (e.g., O₂ has 2 unpaired e⁻ in π*2p).

| Quantity | Formula | SI unit / scale |
|---|---|---|
| Bond order (MOT) | (N_b − N_a)/2 | dimensionless |
| Dipole moment | μ = q × d | C·m (1 D = 3.336×10⁻³⁰ C·m) |
| % ionic character | 16 Δχ + 3.5 (Δχ)² | %, Pauling Δχ |
| Spin-only μ | √[n(n+2)] | Bohr magneton (BM) |

> 💡 **High-Yield Memory Hook:** **"Sigma is head-on, Pi is side-on"** — σ forms by axial overlap (s–s, s–p, p–p along axis), π forms by lateral overlap (p–p sideways). Triple bond = 1 σ + 2 π.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Bond Types and Governing Forces

Ionic bonds form when an atom of low ionisation enthalpy (metal) transfers an electron to an atom of high electron gain enthalpy (non-metal). The lattice enthalpy (U ∝ Z⁺Z⁻e² / (r⁺+r⁻)) compensates for the energy spent on ionisation. Covalent bonds form by mutual sharing to satisfy the octet; a coordinate bond is a covalent bond where one atom (donor) supplies both electrons (e.g., NH₃ → BF₃). Metallic bonds arise from electrostatic attraction between cations and a delocalised "sea" of valence electrons, explaining conductivity and malleability.

#### Fajans' Rules — When "Ionic" Behaves Covalent

A nominally ionic bond gains covalent character when the cation is small and highly charged (high polarising power) and the anion is large and highly charged (high polarisability). Example: **LiI is more covalent than CsF**, even though both have ionic formulations.

#### VSEPR vs Hybridisation

VSEPR is the **primary** shape predictor. Hybridisation is a *post-hoc* rationalisation of the observed geometry, not a cause.

| Hybridisation | Geometry | Bond angle | Example |
|---|---|---|---|
| sp | Linear | 180° | BeCl₂, CO₂ |
| sp² | Trigonal planar | 120° | BF₃, C₂H₄ |
| sp³ | Tetrahedral | 109.5° | CH₄, NH₄⁺ |
| sp³d | Trigonal bipyramidal | 90°, 120° | PCl₅ |
| sp³d² | Octahedral | 90° | SF₆ |

#### Molecular Orbital Theory (LCAO)

Atomic orbitals combine into bonding (σ, π) and antibonding (σ\*, π\*) molecular orbitals. Filling order for diatomics with Z ≤ 7 (N₂, C₂, B₂) has no s–p mixing, so π2p lies below σ2p. For Z ≥ 8 (O₂, F₂), σ2p lies below π2p. Bond order, bond length, and bond enthalpy follow the inverse correlation: **higher BO ⇒ shorter length, larger dissociation enthalpy**.

#### 🎯 Exam-Level Worked Problem

**Question:** Among N₂, O₂, F₂, and CO, which species has the highest bond order, and is O₂ diamagnetic or paramagnetic? Justify using MOT. (JEE Main style — 1 mark)

#### Solution:

1. Write electron counts and fill MO diagrams (Z ≤ 7: σ1s, σ\*1s, σ2s, σ\*2s, π2p_x, π2p_y, σ2p_z; Z ≥ 8: σ2p_z below π2p_x/y).
2. **N₂ (14 e⁻):** N_b = 10, N_a = 4 → **BO = (10 − 4)/2 = 3**.
3. **CO (14 e⁻):** Same electron count, similar BO ≈ 3 (slightly higher due to heteronuclear effect).
4. **O₂ (16 e⁻):** N_b = 10, N_a = 6 → **BO = 2**; configuration ends with (π\*2p_x)¹(π\*2p_y)¹ — **two unpaired electrons, paramagnetic**, μ_s = √[2(2+2)] = √8 ≈ **2.83 BM**.
5. **F₂ (18 e⁻):** N_b = 10, N_a = 8 → **BO = 1**.

**Answer:** **CO (or N₂)** has the highest bond order (3); **O₂ is paramagnetic**.

> ⚠️ **Examiner Trap:** Students mark O₂ as diamagnetic because the Lewis structure satisfies the octet. MO theory shows the last two electrons occupy the **degenerate π\*2p** orbitals singly (Hund's rule), giving 2 unpaired e⁻. Always check the MO filling, not the dot structure.

#### Resonance and Polarity

Resonance delocalises π/lone electrons across canonical forms (e.g., benzene, CO₃²⁻, O₃); the hybrid is more stable than any single form. Polarity is **bond-level** (governed by Δχ) and **molecular-level** (vector sum of bond dipoles): CO₂ is nonpolar (linear, dipoles cancel), H₂O is polar (bent, μ ≈ 1.85 D).

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and S–p Mixing in MOT

The MO ordering exception hinges on **s–p mixing**: when the 2s and 2p atomic orbitals of the two atoms are close in energy (small atoms like B, C, N), they mix and push σ2p above π2p. From O onward, the energy gap widens and mixing is negligible, restoring σ2p_below π2p. This single fact changes the bond orders of B₂ (BO = 1, paramagnetic, 2 unpaired e⁻) and C₂ (BO = 2) compared with a "no-mixing" picture. Heteronuclear cases (CO, NO, CN⁻) introduce unequal contributions and effective formal charges (Cδ⁻ in CO).

#### Advanced Traps and Exceptions

1. **NO (15 e⁻):** BO = 2.5, one unpaired electron → paramagnetic, μ_s = √3 ≈ 1.73 BM. Its bond length lies between N₂ (BO 3) and O₂ (BO 2).
2. **Square planar ≠ sp³d²:** [Ni(CN)₄]²⁻ is **dsp²** (inner orbital, low-spin d⁸), giving 90° angles — a coordination-chemistry exception to the simple sp³d² rule.
3. **BrF₃ vs BF₃:** BF₃ is trigonal planar (sp², no lp). BrF₃ is **T-shaped** (sp³d, 2 lp occupy equatorial positions to minimise LP–LP repulsion).
4. **Resonance vs Mesomerism:** identical concept; resonance energy = experimental ΔH_hydrogenation − calculated for a single Kekulé structure (benzene ≈ 150 kJ/mol).
5. **Hydrogen bonding** is an *intermolecular* dipole-dipole force, not a true chemical bond, but JEE Main frequently tests its effect on boiling points (H₂O > H₂S, HF > HCl for the top member anomaly).
6. **Percent ionic character** formula (16Δχ + 3.5Δχ²) is empirical and **overestimates** at large Δχ; HF is ~41% ionic by this formula but the experimental value is closer to 45% — a useful sanity check, not a strict law.
7. **Lattice enthalpy trend:** smaller ions of higher charge → larger |U|; this is why MgO (Mg²⁺/O²⁻) has far higher melting point than NaCl (Na⁺/Cl⁻).

#### Practice Prompts

1. Arrange N₂, N₂⁺, N₂²⁻ in order of **increasing bond length**, and predict the magnetic behaviour of each using MOT.
2. Predict the geometry, hybridisation, and number of lone pairs on the central atom in **SF₄, XeF₂, XeF₄, XeF₆, ClF₃, and I₃⁻** using VSEPR. Identify which are iso-structural.

> 📌 **Formula Check:** Always quote Δχ on the **Pauling** scale when using 16Δχ + 3.5Δχ²; on the Mulliken scale the relationship differs. SI unit of μ is C·m, not Debye — convert via 1 D = 3.336×10⁻³⁰ C·m when numerical precision is required.

---

## Continue your study

- **[View this topic in your JEE Main roadmap](/roadmap/?exam=jeemain&duration=1mo)** — see where "Chemical Bonding" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jeemain&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JEE Main exam overview](/exams/jeemain/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jeemain/chemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
