---

exam: waec
examName: WAEC WASSCE
subject: physics
subjectName: Physics
topic: phy-18
topicName: "Nuclear Physics: Radioactivity"
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.639489"
diagramPrompt: "Clean educational diagram showing Nuclear Physics: Radioactivity with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"

---

# Nuclear Physics: Radioactivity

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your WAEC exam.

**The Three Types of Radiation**

| Type | Symbol | Nature | Charge | Penetration power | Ionising power |
|------|--------|--------|--------|--------------------|----------------|
| Alpha | $\alpha$ | Helium nucleus ($_2^4\text{He}$) | $+2e$ | Very low (stopped by paper) | Very strong |
| Beta | $\beta$ | Fast electrons ($\beta^-$) or positrons ($\beta^+$) | $-e$ or $+e$ | Medium (stopped by 3 mm aluminium) | Moderate |
| Gamma | $\gamma$ | High-energy photons (EM radiation) | 0 | Very high (stopped by thick lead/concrete) | Weak |

**Key Definitions**

- **Radioactive decay:** spontaneous disintegration of an unstable nucleus with emission of radiation
- **Half-life ($t_{\frac{1}{2}}$):** time for the activity (or number of undecayed nuclei) to fall to half its initial value
- **Activity ($A$):** rate of decay, measured in **Becquerel (Bq)** = 1 decay per second
- **Decay constant ($\lambda$):** probability of decay per unit time; $A = \lambda N$

**Key Formulas**

- **Decay law:** $N = N_0 e^{-\lambda t}$
- **Half-life:** $t_{\frac{1}{2}} = \frac{\ln 2}{\lambda} = \frac{0.693}{\lambda}$
- **Activity:** $A = A_0 e^{-\lambda t} = \lambda N$
- **Carbon dating:** $t = \frac{\ln(N_{0}/N)}{\lambda}$ (used for archaeological dating)

⚡ **WAEC Exam Tip:** If you see a graph of $\ln N$ vs $t$, it should be a straight line with slope $-\lambda$. Also remember: half-life is **independent of the initial amount** of radioactive material.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for building a solid understanding of radioactivity and nuclear physics.

**The Structure of the Nucleus**

The nucleus contains protons (positive charge $+e$) and neutrons (no charge). The number of protons is the **atomic number** $Z$, and the total number of nucleons (protons + neutrons) is the **mass number** $A$. The neutron number is $N = A - Z$. Nuclides are written as $_Z^A\text{X}$, e.g., $_6^{14}\text{C}$ has 6 protons and 8 neutrons.

Isotopes are atoms of the same element (same $Z$) but with different numbers of neutrons (different $A$). For example, $_1^1\text{H}$, $_1^2\text{D}$ (deuterium), and $_1^3\text{T}$ (tritium) are isotopes of hydrogen.

**Alpha Decay ($\alpha$)**

An unstable heavy nucleus emits an alpha particle — a helium nucleus $_2^4\text{He}$ — reducing its mass number by 4 and atomic number by 2:

$$_Z^A\text{X} \rightarrow {}_{Z-2}^{A-4}\text{Y} + _2^4\alpha$$

Example: $_88^{226}\text{Ra} \rightarrow {}_{86}^{222}\text{Rn} + _2^4\alpha$ (radium decays to radon).

Alpha particles are **strongly ionising** (they knock electrons off nearby atoms) but have very low penetration — a sheet of paper stops them. They cause the most biological damage per unit path length because they deposit all their energy locally.

**Beta Decay ($\beta^-$)**

A neutron in the nucleus transforms into a proton and emits a fast electron (beta particle) and an antineutrino:

$$n \rightarrow p + \beta^- + \overline{\nu}_e$$

The new nucleus has the same mass number but atomic number increases by 1:

$$_Z^A\text{X} \rightarrow {}_{Z+1}^{A}\text{Y} + {}_{-1}^{0}\beta + \overline{\nu}_e$$

Example: $_6^{14}\text{C} \rightarrow {}_{7}^{14}\text{N} + {}_{-1}^{0}\beta$ (carbon-14 decays to nitrogen-14).

**Gamma Decay ($\gamma$)**

After alpha or beta decay, the daughter nucleus is often left in an **excited state**. It releases this excess energy as gamma radiation — high-frequency electromagnetic waves with no charge or mass:

$$_Z^A\text{X}^* \rightarrow _Z^A\text{X} + \gamma$$

Gamma emission does not change $Z$ or $A$.

**The Decay Constant and Half-Life**

Radioactive decay is a **random process** — we cannot predict when any individual nucleus will decay, but the overall rate is statistically predictable. The decay law:

$$N = N_0 e^{-\lambda t}$$

where $N$ is the number of undecayed nuclei at time $t$, $N_0$ is the initial number, and $\lambda$ is the decay constant (unique to each radioactive isotope).

**Half-life** is the time for half the nuclei to decay: setting $N = N_0/2$:

$$\frac{N_0}{2} = N_0 e^{-\lambda t_{\frac{1}{2}}} \implies t_{\frac{1}{2}} = \frac{\ln 2}{\lambda} = \frac{0.693}{\lambda}$$

The half-life is **independent of the initial amount** — a fundamental property of exponential decay.

**Worked Example (Half-Life)**

A radioactive source has a half-life of 8 days. If the initial activity is 640 Bq, what will the activity be after 32 days?

*Solution:*
Number of half-lives: $n = \frac{32}{8} = 4$

Activity after $n$ half-lives: $A = A_0 \times \left(\frac{1}{2}\right)^n = 640 \times \left(\frac{1}{2}\right)^4 = 640 \times \frac{1}{16} = 40 \, \text{Bq}$

Alternatively using $A = A_0 e^{-\lambda t}$: since $t_{\frac{1}{2}} = \frac{0.693}{\lambda}$, $\lambda = \frac{0.693}{8} = 0.0866 \, \text{days}^{-1}$, then $A = 640 e^{-0.0866 \times 32} = 40 \, \text{Bq}$.

⚡ **WAEC Exam Tip:** When a question gives the half-life, count the number of half-life intervals rather than substituting into formulas — it's faster and less prone to arithmetic error. For $n$ half-lives: $N = N_0 \times (1/2)^n$.

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage including derivations, background radiation, and WAEC past question patterns.

**Derivation of the Decay Law**

Starting from the definition of decay constant $\lambda$: the rate of decay is proportional to the number of undecayed nuclei:

$$\frac{dN}{dt} = -\lambda N$$

This is a separable differential equation. Integrating:

$$\int_{N_0}^{N} \frac{dN}{N} = -\lambda \int_0^t dt \implies \ln N - \ln N_0 = -\lambda t$$

$$\therefore N = N_0 e^{-\lambda t}$$

Differentiating to get activity: $A = -\frac{dN}{dt} = \lambda N_0 e^{-\lambda t} = A_0 e^{-\lambda t}$, confirming that activity and the number of undecayed nuclei follow the same exponential law.

**The Carbon-14 Dating Method**

Carbon-14 is produced in the upper atmosphere when cosmic rays interact with nitrogen:

$$_7^{14}\text{N} + {}_0^1n \rightarrow {}_6^{14}\text{C} + {}_1^1\text{H}$$

Living organisms constantly exchange carbon with the atmosphere (breathing, eating), maintaining a constant ratio of $^{14}\text{C}$ to $^{12}\text{C}$. When they die, the $^{14}\text{C}$ begins to decay without being replenished:

$$t = \frac{\ln(N_0/N)}{\lambda}$$

Given that the half-life of $^{14}\text{C}$ is $5730 \, \text{years}$, the age of archaeological samples can be estimated. This works for samples up to about 50,000 years old; beyond that, the remaining $^{14}\text{C}$ is too small to measure reliably.

**Background Radiation**

Even with no radioactive sample nearby, a detector records a small count rate — this is **background radiation**. It comes from:
- Cosmic rays (from space)
- Naturally occurring radioactive isotopes in the ground (e.g., uranium, thorium)
- Radon gas seeping from the ground
- Medical procedures (X-rays, etc.)

In experiments, the background count must be **subtracted** from the measured count rate to get the true activity of the source.

**Applications of Radioactivity**

1. **Medical imaging and therapy:** Cobalt-60 ($\beta^-$ and $\gamma$) is used in cancer treatment to destroy tumour cells
2. **Carbon dating:** Estimating ages of archaeological artefacts
3. **Industrial flaw detection:** Gamma radiography using $^{60}\text{Co}$ or $^{192}\text{Ir}$ to inspect welded joints
4. **Sterilisation of medical equipment:** Gamma radiation kills bacteria without heating
5. **Power generation:** Nuclear reactors use controlled fission of uranium-235

**Nuclear Fission and Fusion (Background Knowledge)**

- **Nuclear fission:** A heavy nucleus (e.g., $^{235}\text{U}$) absorbs a neutron and splits into two lighter nuclei, releasing energy and more neutrons: $^{235}\text{U} + n \rightarrow \text{fission products} + 2\text{ or }3n + \text{energy}$. This is the principle of nuclear reactors.

- **Nuclear fusion:** Light nuclei combine to form a heavier nucleus, releasing enormous energy. This is what powers the Sun: $4_1^1\text{H} \rightarrow _2^4\text{He} + 2\beta^+ + 2\nu_e + 26.7 \, \text{MeV}$.

Fusion releases **more energy per unit mass** than fission, but requires extremely high temperatures and pressures to overcome the electrostatic repulsion between positively charged nuclei.

**The Graph of Decay**

A graph of $N$ vs $t$ is an exponential decay curve (approaches the $x$-axis asymptotically). A graph of $\ln N$ vs $t$ is a **straight line** with slope $-\lambda$. This is a useful way to determine $\lambda$ experimentally — plot $\ln N$ against $t$, and the gradient gives $-\lambda$.

**WAEC Past Question Patterns**

From WAEC Physics papers (2020–2024):

1. **Identify radiation type from penetration data** — "A radiation source can pass through 3 mm of aluminium but not through 5 mm. Identify the radiation." — Answer: Beta.
2. **Alpha/beta decay equations** — Balance $A$ and $Z$ on both sides. Example: "Complete the decay equation for $^{238}\text{U}$ emitting an alpha particle" → $^{234}\text{Th}$.
3. **Half-life calculations** — "After 3 half-lives, activity falls from 64 Bq to X Bq" → $X = 8$ Bq.
4. **Background radiation** — Conceptual: "Why must background radiation be subtracted?" — It is not from the sample.
5. **Carbon dating** — "A wooden artefact has 1/8 of the original C-14. How old is it?" → $3 \times 5730 = 17190$ years.

**⚡ Common Pitfalls to Avoid**

- Not balancing the mass number $A$ and atomic number $Z$ in decay equations
- Forgetting that gamma emission does not change $A$ or $Z$
- Mixing up Becquerel (Bq, 1 decay/s) with other units
- Using the wrong half-life for carbon-14 (always $5730 \, \text{years}$)
- Not subtracting background radiation in lab experiments
- Thinking half-life depends on the amount of material — it does not

**Key Nuclear Equations to Know**

| Decay type | General equation |
|------------|-----------------|
| Alpha | $_Z^A\text{X} \rightarrow {}_{Z-2}^{A-4}\text{Y} + _2^4\alpha$ |
| Beta ($\beta^-$) | $_Z^A\text{X} \rightarrow {}_{Z+1}^{A}\text{Y} + {}_{-1}^{0}\beta + \overline{\nu}_e$ |
| Gamma | $_Z^A\text{X}^* \rightarrow _Z^A\text{X} + \gamma$ |

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
