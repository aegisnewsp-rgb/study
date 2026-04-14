---

exam: waec
examName: WAEC WASSCE
subject: physics
subjectName: Physics
topic: phy-17
topicName: "Atomic Physics: Bohr Model"
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.638690"
diagramPrompt: "Clean educational diagram showing Atomic Physics: Bohr Model with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"


---

# Atomic Physics: Bohr Model

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your WAEC exam.

**Bohr's Postulates (Summary)**

Niels Bohr's model of the hydrogen atom (1913) introduced three revolutionary ideas:

1. Electrons orbit the nucleus in **quantised energy levels** (not all orbits are allowed)
2. Electrons **do not radiate energy** while in a stationary orbit — they only emit/absorb photons when transitioning between levels
3. The angular momentum of an electron in orbit is quantised: $mvr = \frac{nh}{2\pi}$ where $n = 1, 2, 3, ...$

**Key Formulas**

- **Energy levels:** $E_n = -\frac{13.6}{n^2} \, \text{eV}$ (hydrogen atom only)
- **Wavelength of emitted photon:** $E_i - E_f = hf = \frac{hc}{\lambda}$
- **Rydberg formula:** $\frac{1}{\lambda} = R_H \left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$ where $R_H = 1.097 \times 10^7 \, \text{m}^{-1}$
- **Quantised angular momentum:** $L = mvr = \frac{nh}{2\pi}$

**Spectral Series (Hydrogen)**

| Series | Lower level ($n_f$) | Observed region |
|--------|---------------------|-----------------|
| Lyman | $n_f = 1$ | Ultraviolet (UV) |
| Balmer | $n_f = 2$ | Visible + UV |
| Paschen | $n_f = 3$ | Infrared (IR) |
| Brackett | $n_f = 4$ | Far infrared |

⚡ **WAEC Exam Tip:** The Balmer series is the most commonly examined — its lines fall in the visible spectrum (red to violet). When $n_i = \infty$, the series limit gives the shortest wavelength in that series.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for building a solid understanding of Bohr's model and atomic spectra.

**Why the Rutherford Model Needed Fixing**

Rutherford's nuclear model (1911) proposed that electrons orbit a tiny central nucleus, like planets around the Sun. However, classical electromagnetism predicts that an accelerating charge (electrons in circular orbit) must radiate electromagnetic energy continuously. As the electron loses energy, it should spiral into the nucleus in about $10^{-11}$ seconds — meaning all atoms should collapse. This contradiction was the motivation for Bohr's model.

**Stationary States**

Bohr proposed that electrons occupy specific **stationary states** where they do not radiate, despite being in accelerated motion. Each state corresponds to a specific orbit with a specific energy. The lowest energy state is the **ground state** ($n = 1$). States with $n > 1$ are **excited states**.

**Energy Quantisation**

From Bohr's quantisation of angular momentum: $mvr = \frac{nh}{2\pi}$, combined with Coulomb's law for the centripetal force on the electron:

$$\frac{kZe^2}{r_n^2} = \frac{mv^2}{r_n}$$

and substituting $v = \frac{nh}{2\pi m r_n}$, we can solve for the allowed radii:

$$r_n = \frac{n^2 h^2 \varepsilon_0}{\pi m Z e^2} \propto n^2$$

For hydrogen ($Z = 1$): $r_n = n^2 \times 0.53 \times 10^{-10} \, \text{m} = n^2 a_0$, where $a_0 = 0.53 \, \text{Å}$ is the **Bohr radius**.

The total energy (kinetic + potential) for the $n^{\text{th}}$ level:

$$E_n = -\frac{13.6 Z^2}{n^2} \, \text{eV}$$

For hydrogen: $E_n = -\frac{13.6}{n^2} \, \text{eV}$. The negative sign reflects the fact that energy is required to remove the electron from the atom (energy is defined as zero at $n = \infty$, free electron).

**Photon Emission and Absorption**

When an electron transitions from a higher level $n_i$ to a lower level $n_f$, it emits a photon with energy equal to the difference:

$$E_{\text{photon}} = E_{n_i} - E_{n_f} = hf = \frac{hc}{\lambda}$$

Since $E_n \propto -1/n^2$, transitions to lower levels **always** release positive energy (emitted photons), and transitions from lower to higher levels **always** require energy input (absorbed photons).

**The Hydrogen Spectrum**

The discrete spectral lines arise because only specific photon energies (wavelengths) are possible. Each series corresponds to transitions ending at the same lower level:

- **Lyman series** ($n_f = 1$): All transitions down to ground state → UV region
- **Balmer series** ($n_f = 2$): Visible series; $H_\alpha$ (red), $H_\beta$ (blue-green), $H_\gamma$ (violet), etc.
- **Paschen series** ($n_f = 3$): Near infrared
- **Brackett series** ($n_f = 4$): Far infrared

The **Rydberg formula** conveniently expresses all these wavelengths:

$$\frac{1}{\lambda} = R_H \left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

where $R_H = 1.097 \times 10^7 \, \text{m}^{-1}$ for hydrogen.

**Worked Example (Bohr Energy Levels)**

Calculate the wavelength of the photon emitted when an electron in a hydrogen atom transitions from $n = 3$ to $n = 1$.

*Solution:*
Using the Rydberg formula with $n_f = 1$, $n_i = 3$:

$$\frac{1}{\lambda} = R_H \left(\frac{1}{1^2} - \frac{1}{3^2}\right) = 1.097 \times 10^7 \left(1 - \frac{1}{9}\right) = 1.097 \times 10^7 \times \frac{8}{9}$$

$$\frac{1}{\lambda} = 9.75 \times 10^6 \, \text{m}^{-1}$$

$$\lambda = 1.025 \times 10^{-7} \, \text{m} = 102.5 \, \text{nm}$$

This falls in the **Lyman UV** region.

⚡ **WAEC Exam Tip:** The Balmer series lines are most commonly asked because they fall in the visible spectrum. Know the colours: $H_\alpha$ (red, $n=3 \rightarrow n=2$), $H_\beta$ (blue-green, $n=4 \rightarrow n=2$), $H_\gamma$ (violet, $n=5 \rightarrow n=2$).

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage including full derivation, limitations, and WAEC past question patterns.

**Full Derivation of Bohr Quantisation**

Starting with two equations:

1. **Coulomb's law** provides centripetal force: $\frac{kZe^2}{r_n^2} = \frac{mv^2}{r_n}$
2. **Bohr quantisation:** $m v r_n = \frac{nh}{2\pi}$

From (1): $mv^2 = \frac{kZe^2}{r_n}$. Multiplying both sides by $r_n$: $m v^2 r_n = kZe^2$.

From (2): $v = \frac{nh}{2\pi m r_n}$. Substituting into (1) squared form is messy — instead, note that $v^2 = \frac{kZe^2}{mr_n}$.

Substituting $v$ from Bohr's condition: $\left(\frac{nh}{2\pi m r_n}\right)^2 = \frac{kZe^2}{mr_n}$

$$\frac{n^2 h^2}{4\pi^2 m^2 r_n^2} = \frac{kZe^2}{mr_n}$$

Multiply both sides by $r_n^2$ and $m$:

$$\frac{n^2 h^2}{4\pi^2 m} = kZe^2 r_n$$

$$\therefore r_n = \frac{n^2 h^2 \varepsilon_0}{\pi m Z e^2}$$

(Since $k = \frac{1}{4\pi\varepsilon_0}$, and $kZe^2 = \frac{Ze^2}{4\pi\varepsilon_0}$.)

For hydrogen ($Z = 1$): $r_n = n^2 a_0$ where $a_0 = \frac{h^2 \varepsilon_0}{\pi m e^2} = 0.53 \times 10^{-10} \, \text{m}$.

**Total Energy Derivation**

Kinetic energy: $K = \frac{1}{2}mv^2 = \frac{kZe^2}{2r_n}$

Potential energy (electric potential energy of electron-proton pair): $U = -\frac{kZe^2}{r_n}$ (negative because work must be done to separate them).

Total energy: $E_n = K + U = \frac{kZe^2}{2r_n} - \frac{kZe^2}{r_n} = -\frac{kZe^2}{2r_n}$

Substituting $r_n$ from above:

$$E_n = -\frac{kZe^2}{2} \times \frac{\pi m Z e^2}{n^2 h^2 \varepsilon_0} = -\frac{m Z^2 e^4}{8\varepsilon_0^2 h^2 n^2}$$

Evaluating the constants for hydrogen: $E_n = -\frac{13.6 Z^2}{n^2} \, \text{eV}$.

Note that $E_n \propto -1/n^2$: the energy levels get closer together as $n$ increases and converge to zero at $n = \infty$.

**Limitations of Bohr's Model**

Bohr's model was groundbreaking but had limitations:

1. **It only works for hydrogen-like atoms** (one electron orbiting a nucleus). It fails for multi-electron atoms where electron-electron repulsion complicates the picture.
2. **It couldn't explain fine structure** — spectral lines appear as doublets when viewed with high resolution, requiring the concept of electron spin.
3. **It assumed classical orbits** — electrons do not actually orbit like planets; quantum mechanics shows they occupy probability clouds (orbitals).
4. **No explanation of relative line intensities** — why some transitions are more probable than others (selection rules from quantum mechanics explain this).
5. **Heisenberg's uncertainty principle** contradicts the idea of simultaneously knowing a precise orbital radius and momentum.

The Bohr model was superseded by the **quantum mechanical model** (Schrödinger equation) in 1926, which describes electrons as wavefunctions with probability distributions rather than point particles in fixed orbits.

**Line Spectra in Multi-Electron Atoms**

While the Bohr formula $E_n = -\frac{13.6Z^2}{n^2} \, \text{eV}$ works perfectly only for hydrogen, the **Rydberg formula** works well for hydrogen-like ions (e.g., $\text{He}^+$, $\text{Li}^{2+}$) which have a single electron but larger $Z$.

For multi-electron atoms, inner shells screen outer electrons from the full nuclear charge, so effective $Z$ is reduced. This requires quantum mechanical treatment beyond WAEC level.

**Ionisation Energy**

The **ionisation energy** is the energy required to remove an electron completely from the atom (from ground state $n=1$ to $n=\infty$):

$$E_{\text{ionisation}} = 13.6 \, \text{eV} \quad \text{for hydrogen (ground state)}$$

For excited states: $E_n = -\frac{13.6}{n^2} \, \text{eV}$. For an electron in $n=2$, ionisation requires $13.6 - (-3.4) = 10.2 \, \text{eV}$.

**Photons and Line Spectra — Experimental Basis**

When a gas is excited (by heat or electric discharge), atoms absorb energy and electrons jump to higher levels. When they return, they emit photons of specific energies — hence **line emission spectra** (discrete coloured lines against a dark background).

When white light passes through a cool gas, specific wavelengths are absorbed — giving **line absorption spectra** (dark lines at the same positions as emission lines). The Sun's spectrum shows dark Fraunhofer lines caused by absorption in the Sun's outer atmosphere.

**WAEC Past Question Patterns**

From WAEC Physics papers (2020–2024):

1. **Bohr's postulates** — "State two assumptions of Bohr's model of the hydrogen atom" — expect 2 specific points: quantised orbits and non-radiation in stationary states.
2. **Energy level calculations** — "An electron transitions from $n=3$ to $n=2$ in a hydrogen atom. Find the wavelength." — Use Rydberg or $E_n$ formula.
3. **Identifying spectral series** — "Which series (Lyman, Balmer, Paschen) does this wavelength belong to?" — Compare wavelength with series regions.
4. **Limitations of the Bohr model** — Conceptual: "State one limitation of Bohr's model."
5. **Ionisation energy** — "Find the energy required to ionise hydrogen from the ground state" → $13.6 \, \text{eV}$.

**⚡ Common Pitfalls to Avoid**

- Using the formula $E_n = -13.6/n^2$ for atoms with more than one electron — it only works for hydrogen-like species
- Mixing up which transitions correspond to which spectral series
- Forgetting that energy is **negative** in Bohr's formula — so $E_3 = -1.51 \, \text{eV}$, not $+1.51 \, \text{eV}$
- Using wrong values of $R_H$ or forgetting to convert $hc$ units consistently
- Confusing wavelength formula $1/\lambda = R(1/n_f^2 - 1/n_i^2)$ with frequency formula $hf = E_i - E_f$
- Mixing up the Lyman series (UV) with Balmer (visible) in questions about human eye visibility

**Energy Level Diagram Quick Reference**

```
n=∞ — — — — — — — — — — — — — — — — — E = 0 eV
n=4 — — — — — — — — — — — — — — — — — E = -0.85 eV
n=3 — — — — — — — — — — — — — — — — — E = -1.51 eV  ← Balmer (to n=2)
n=2 — — — — — — — — — — — — — — — — — E = -3.40 eV  ← Balmer series here
n=1 — — — — — — — — — — — — — — — — — E = -13.6 eV  ← Ground state
```

---

*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
