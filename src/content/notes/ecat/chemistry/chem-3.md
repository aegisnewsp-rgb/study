---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: chemistry
subjectName: Chemistry
topic: chem-3
topicName: "States of Matter (Gases, Liquids, Solids)"
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.055244"
lastUpdated: "2026-09-15"
diagramPrompt: "Clear scientific diagram of States of Matter (Gases, Liquids, Solids) with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"





---

# States of Matter (Gases, Liquids, Solids)

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

Matter exists in three classical forms — **solid**, **liquid**, and **gas** — determined by how strongly intermolecular forces (IMFs) hold particles together versus how much thermal kinetic energy those particles carry. Solids keep a fixed shape and volume because particles only vibrate about fixed lattice sites. Liquids keep a fixed volume but flow to match their container's shape because particles can slide past each other. Gases fill any container completely because particles move freely with negligible attraction between them.

| Property | Solid | Liquid | Gas |
|---|---|---|---|
| Shape | Definite | Variable (container) | Variable (fills container) |
| Volume | Definite | Definite | Variable |
| Compressibility | Negligible | Very low | High |
| Density | Highest | Moderate | Lowest |
| Particle motion | Vibration only | Translation + vibration | Free translation |

The single most-tested equation on ECAT Chemistry is the **ideal gas law**:

$$PV = nRT$$

where **P** = pressure (Pa), **V** = volume (m³), **n** = moles, **R** = 8.314 J·mol⁻¹·K⁻¹, and **T** = temperature (K). Always convert °C to K by adding 273.15.

> 💡 **High-Yield Memory Hook:** **"S-V-L-G"** — "S**olid** keeps **S**hape & **V**olume, **L**iquid keeps **V**olume but not **S**hape, **G**as keeps neither." For gas-law units, remember **"K**ing **R**ules" — **K**elvin for temperature, **R** = 8.314 with Pa·m³·mol⁻¹·K⁻¹.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Intermolecular Forces vs Kinetic Energy

The state of any substance is a tug-of-war between **IMFs** (London dispersion, dipole-dipole, hydrogen bonding) pulling particles together, and **thermal kinetic energy** pulling them apart. Heating a solid increases vibrational amplitude until the lattice breaks (melting). Continued heating lets molecules escape the surface (evaporation/boiling). At still higher temperatures, molecules collide often enough to ionise, producing **plasma** — the fourth state introduced in modern curricula.

#### Gas Laws at a Glance

| Law | Relationship | Constant Held | Variable Quantities |
|---|---|---|---|
| Boyle's Law | P ∝ 1/V | T, n | P, V |
| Charles's Law | V ∝ T | P, n | V, T |
| Avogadro's Law | V ∝ n | T, P | V, n |
| Gay-Lussac's Law | P ∝ T | V, n | P, T |
| Combined | P₁V₁/T₁ = P₂V₂/T₂ | n | P, V, T |

The combined gas law merges the first three; it is the form examiners prefer when three variables change at once.

#### Average Molecular Kinetic Energy

A direct consequence of the kinetic theory is:

$$KE_{avg} = \tfrac{3}{2}k_BT$$

where **k_B** = Boltzmann constant = 1.38 × 10⁻²³ J·K⁻¹ and **T** is in kelvin. Note that **k_B = R/N_A**, so per mole the kinetic energy becomes (3/2)RT.

#### Concept Comparison Matrix: Real vs Ideal Gas

| Feature | Ideal Gas | Real Gas |
|---|---|---|
| Particle volume | Negligible | Finite (corrected by *b*) |
| IMFs between particles | None | Present (corrected by *a*) |
| Behaviour | PV = nRT exactly | Follows van der Waals: (P + an²/V²)(V − nb) = nRT |
| Deviation largest | — | Near condensation or high pressure |
| Kinetic energy | Depends only on T | Depends only on T |

#### 🎯 Exam-Level Worked Problem

**Question:** A 2.50 L container holds 0.800 mol of N₂ at 27.0 °C. Calculate (a) the pressure in atm, and (b) the average kinetic energy per molecule in joules.

#### Solution:

(a) Convert T to kelvin: T = 27.0 + 273.15 = 300.15 K ≈ 300 K.
Use PV = nRT → P = nRT / V.
P = (0.800 mol)(0.08206 L·atm·mol⁻¹·K⁻¹)(300 K) / 2.50 L
P = (0.800 × 0.08206 × 300) / 2.50
P = 19.694 / 2.50 ≈ **7.88 atm**

(b) Average KE per molecule:
KE = (3/2)k_BT = (1.5)(1.38 × 10⁻²³ J·K⁻¹)(300 K)
KE = 6.21 × 10⁻²¹ J (≈ 38.7 × 10⁻²² J).

> ⚠️ **Examiner Trap:** Many ECAT students plug 27.0 °C directly into PV = nRT instead of 300 K, producing an answer roughly 10% low. Other common slips: using R = 8.314 with L·atm units, or using molar mass (28 g/mol) where moles (0.800) are already given.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Gas Density and Graham's Law

The density of a gas follows from rearranging PV = nRT and n = m/M:

$$\rho_{gas} = \frac{PM}{RT}$$

where **ρ** is in kg·m⁻³, **P** in Pa, **M** = molar mass (kg·mol⁻¹), **R** = 8.314, **T** in K. Effusion rates obey Graham's law:

$$\frac{r_1}{r_2} = \sqrt{\frac{M_2}{M_1}}$$

Heavier molecules effuse more slowly because their rms speed $v_{rms}=\sqrt{3RT/M}$ scales as $1/\sqrt{M}$.

#### Edge Cases and Limits

1. **Absolute zero (-273.15 °C / 0 K):** Theoretical floor where translational kinetic energy vanishes; gases would exert zero pressure in the ideal limit.
2. **Critical point:** Above the critical temperature **T_c**, no applied pressure can liquefy the gas — the substance becomes a supercritical fluid (used in CO₂ decaffeination).
3. **Plasma and BEC:** Non-classical states. Plasma forms above ~10⁴ K when atoms ionise; Bose–Einstein condensates appear within nanokelvin ranges of 0 K when atoms collapse into one quantum ground state.
4. **Compressibility factor Z = PV/nRT:** Z = 1 for ideal; Z < 1 at moderate T (IMFs dominate); Z > 1 at high P (excluded volume dominates).
5. **Vapour pressure** rises exponentially with T per the Clausius–Clapeyron equation: ln P = −ΔH_vap/RT + C.

#### Advanced Traps and Exceptions

| Trap | Why It Happens | Correct Approach |
|---|---|---|
| Using °C in gas-law problems | Temperature must be absolute | Always add 273.15 |
| Treating solids as kinetic-less | Vibration is kinetic energy | KE formula applies; only translation is frozen |
| Assuming liquids incompressible | IMFs resist compression but not perfectly | Bulk modulus of water ≈ 2.2 GPa (real, finite) |
| Confusing boiling with evaporation | Both involve liquid→vapour | Boiling requires vapour pressure = external P |
| Forgetting stoichiometric gas ratios | Gases in reactions use mole ratios, not volumes directly | At same T and P, volume ratio = mole ratio (Avogadro) |

#### Exam Strategy for ECAT

States of Matter contributes roughly **3%** of ECAT Chemistry — about one MCQ per past paper. The questions cluster into three families: (i) numerical PV = nRT problems, (ii) combined-gas-law pressure/temperature changes, and (iii) qualitative ordering questions (which substance has the highest boiling point, etc.). Spend under 90 seconds per item; the calculation is short once units are locked in.

#### Practice Prompts

1. A sample of O₂ occupies 4.00 L at 1.20 atm and 300 K. If it is compressed to 2.00 L and heated to 450 K, what is the new pressure?
2. Methane (CH₄) effuses through a pinhole at 1.00 arbitrary unit. At what rate will sulphur dioxide (SO₂) effuse under identical conditions? (M_CH₄ = 16 g/mol, M_SO₂ = 64 g/mol.)

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "States of Matter (Gases, Liquids, Solids)" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/ecat/chemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
