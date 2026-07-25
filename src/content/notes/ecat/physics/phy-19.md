---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: physics
subjectName: Physics
topic: phy-19
topicName: Nuclear Physics and Radioactivity
weight: 3
country: pakistan
generated: "2026-03-24T08:32:08.052799"
lastUpdated: "2026-07-25"
diagramPrompt: "Clean educational diagram showing Nuclear Physics and Radioactivity with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Nuclear Physics and Radioactivity

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Nuclear physics** studies the atomic nucleus, while **radioactivity** describes the spontaneous decay of unstable nuclei emitting **alpha (⁴He), beta (e⁻/e⁺) or gamma (photon)** radiation. The nucleus contains **Z protons** and **N = A − Z neutrons**, where **A** is the mass number.

The must-know relations for ECAT:

- **Decay law:** N(t) = N₀·e^(−λt); **Activity:** A(t) = λN(t) = A₀·e^(−λt)
- **Half-life:** T½ = ln 2 / λ ≈ 0.693 / λ
- **Mass defect → Binding energy:** E_b = Δm·c², with 1 u ≡ 931.5 MeV/c²

After **n** half-lives, the fraction of nuclei remaining is **(1/2)ⁿ**, and activity drops by the same factor. Mid-mass nuclei peak the binding-energy-per-nucleon curve near **8.5 MeV**, which is why both **fission** of heavy nuclei and **fusion** of light nuclei release energy.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Atomic nucleus and binding energy

The nucleus holds **Z protons** and **(A − Z) neutrons** together against Coulomb repulsion via the **strong nuclear force**, which is short-ranged (≈1–3 fm). The **mass defect** Δm is the difference between the summed rest masses of the separated nucleons and the actual nuclear mass:

#### Δm = Z·m_p + (A − Z)·m_n − M_nucleus

Binding energy **E_b = Δm·c²**. Dividing by **A** gives the **binding energy per nucleon**, which peaks near **8.5 MeV for A ≈ 56 (Fe region)** and falls off for both very light and very heavy nuclei. This curve explains why **fission of heavy nuclei** (A > 200) and **fusion of light nuclei** (A < 20) release energy.

#### Radioactive decay modes

- **Alpha decay:** parent → daughter + ⁴He²⁺; A drops by 4, Z by 2 (e.g., ²³⁸U → ²³⁴Th + α).
- **Beta-minus decay:** n → p + e⁻ + anti-νₑ; A unchanged, Z increases by 1.
- **Gamma decay:** excited nucleus drops to a lower energy state emitting a high-energy photon; A and Z unchanged.

Each nuclide has a characteristic **decay constant λ (s⁻¹)**, the probability per unit time that any given nucleus decays. Activity **A = λN** therefore decreases with the same exponential law as N.

#### Worked decay calculation

A sample initially contains **N₀ = 8.0 × 10¹⁰** nuclei of a nuclide with **T½ = 6.0 h**. After **18 h** (three half-lives):

- Remaining nuclei: N = N₀·(1/2)³ = 8.0×10¹⁰ × 0.125 = **1.0 × 10¹⁰**
- λ = 0.693 / (6.0 × 3600 s) ≈ 3.21 × 10⁻⁵ s⁻¹
- Initial activity: A₀ = λN₀ ≈ **2.57 × 10⁶ Bq**; after 18 h it is 1/8 of this, ≈ **3.2 × 10⁵ Bq**.

#### Common ECAT traps

| Trap | Correct treatment |
| --- | --- |
| λ and T½ are the same | T½ = 0.693/λ, so smaller λ ⇒ longer half-life |
| A and N confused | A = λN; both fall by (1/2)ⁿ after n half-lives |
| Mass in u, answer wanted in MeV | Multiply Δm (u) by **931.5 MeV/u** |
| Alpha = electron or neutron | Alpha is specifically a **⁴He nucleus** (2p + 2n) |
| N/Z = 1 always stable | Only true for **light** stable nuclei; heavy ones need N/Z ≈ 1.5 |

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Q-value and reaction energetics

For any nuclear reaction, the **Q-value** is Q = (m_reactants − m_products)c². **Q > 0** means the reaction is exoergic (releases kinetic energy), **Q < 0** is endoergic and requires a threshold energy. Fission of **²³⁵U by thermal neutrons** has Q ≈ 200 MeV distributed mostly among fission fragments; fusion of **D + T → ⁴He + n** releases 17.6 MeV. The asymmetry arises because mid-mass products sit higher on the binding-energy-per-nucleon curve than either heavy parents or light fusion reactants.

#### Half-life reasoning and statistics

Because N(t) is exponential, plotting **ln N vs t** yields a straight line of slope −λ. ECAT MCQs often disguise this as a graph-read or as "after how many half-lives does activity drop to 1%?" Since 1% ≈ (1/2)ⁿ gives n = log(0.01)/log(0.5) ≈ **6.64 half-lives**, students who answer "7 half-lives ≈ 1.56%" or "6 half-lives ≈ 1.56%" must distinguish between the *nearest integer* and the *exact* n.

#### Chain reaction and critical mass

A self-sustaining chain reaction requires that, on average, **at least one neutron from each fission event** induces another fission. Below **critical mass**, too many neutrons escape the surface; the **multiplication factor k < 1**. Reactors control k ≈ 1 using moderators (graphite, water, heavy water) to slow neutrons so **²³⁵U** captures them efficiently.

#### Edge cases examiners exploit

- **Isobars** (same A, different Z), **isotopes** (same Z, different A), and **isotones** (same N) are routinely mixed in MCQ stems.
- **Background radiation** (~2–3 mSv/yr natural) must be subtracted from raw counts to get true activity.
- 1 **Ci = 3.7 × 10¹⁰ Bq** (legacy curie unit), not 1 Bq — a known trap.

#### Practice prompts

1. A radioactive source has A₀ = 4.0 × 10⁸ Bq and T½ = 5 days. Find λ in s⁻¹ and A after 15 days.
2. For **⁷Li** (M = 7.01600 u, Z = 3, A = 7), using m_p = 1.00728 u and m_n = 1.00867 u, compute the binding energy per nucleon in MeV.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Nuclear Physics and Radioactivity" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/ecat/physics/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
