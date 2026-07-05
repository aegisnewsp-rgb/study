---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: physics
subjectName: Physics
topic: phy-17
topicName: Modern Physics and Photoelectric Effect
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.051164"
lastUpdated: "2026-07-05"
diagramPrompt: "Clean educational diagram showing Modern Physics and Photoelectric Effect with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Modern Physics and Photoelectric Effect

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Photoelectric effect**: electrons are ejected from a metal surface only when incident light exceeds a **threshold frequency** *f₀*, regardless of intensity. Einstein (1905) explained it using **photons**, each carrying energy **E = hf** where **h = 6.626 × 10⁻³⁴ J·s** is Planck's constant.

The cornerstone relation is **Einstein's photoelectric equation**:
#### KE_max = hf − W
where *W = hf₀* is the **work function** (metal-specific minimum binding energy, typically 1–6 eV for common metals). The **stopping potential** *V₀* satisfies **eV₀ = KE_max**, allowing direct measurement of *KE_max* in the lab.

Two high-yield facts: (1) Increasing intensity raises the **saturation current** (more electrons per second) but leaves *KE_max* unchanged. (2) A plot of *KE_max* versus *f* is a straight line of slope *h*, independent of the metal — only the x-intercept *f₀* shifts. For ECAT, expect 1–2 MCQs combining numerical substitution with unit conversion between **joules** and **electron volts** (1 eV = 1.602 × 10⁻¹⁹ J).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Einstein's Photon Hypothesis
Classical wave theory predicted that *any* frequency of light, given enough intensity, should liberate electrons. Experiments by **Hertz** and **Lenard** disproved this: below *f₀*, no electrons emerge no matter how intense the source. Einstein proposed that light travels as discrete quanta (**photons**), each delivering energy *hf* in one indivisible packet. One photon interacts with one surface electron; if *hf* ≥ *W*, the electron escapes with **KE_max = hf − W**. This single-step transfer explains the *instantaneous* emission observed experimentally — a classical wave would require a finite "build-up" time that is never seen.

#### Key Quantities and Their Meaning
- **Work function W**: minimum energy to free an electron from the Fermi level; units **eV** (preferred for atomic-scale problems) or **J**.
- **Threshold frequency f₀**: defined by *W = hf₀*, so **f₀ = W/h**. Below it, kinetic energy would be negative — emission is impossible.
- **Threshold wavelength λ₀ = c/f₀**; light with *λ > λ₀* cannot trigger emission, even from high-intensity lasers.
- **Stopping potential V₀**: the retarding voltage that just stops the fastest photoelectrons, giving **eV₀ = KE_max**. This is the experimentally measured quantity.

#### Intensity vs. Frequency — Distinct Roles
At fixed frequency *f > f₀*, doubling intensity doubles the photon flux, hence doubles the **saturation current** (electrons per second). But each photon still carries the same *hf*, so each emitted electron has the same *KE_max*. Increasing *f* raises *KE_max* linearly; increasing intensity does not. ECAT MCQs often exploit this confusion by offering "more intensity ⇒ faster electrons" as a distractor.

#### Exam Patterns to Expect
Typical questions ask you to compute *KE_max* from given *f* and *W*, convert eV ↔ J, find *V₀*, or read slopes/intercepts from a *KE_max* vs *f* graph. Numerical traps include mixing *c = 3 × 10⁸ m/s* with the wrong frequency unit (Hz vs. THz) and forgetting the **1.602 × 10⁻¹⁹** conversion factor.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Threshold Behaviour and the Linearity Law
The relation **KE_max = h(f − f₀)** is strictly linear in *f*. For any metal, plotting *KE_max* (vertical, in eV) against *f* (horizontal, in Hz) yields a straight line of slope *h* (≈ 4.14 × 10⁻¹⁵ eV·s when KE is read in eV). Lines for different metals are **parallel** but shifted horizontally by an amount equal to the difference in work functions divided by *h* — a direct graphical way to compare *W* values. The y-intercept equals −*W*; the x-intercept equals *f₀*.

#### Wave–Particle Duality and de Broglie Matter Waves
The photoelectric effect established the **particle nature of light**. De Broglie (1924) completed the symmetry by proposing that every moving particle of momentum *p = mv* has an associated wavelength **λ = h/p**. For an electron accelerated through potential *V*, *p = √(2meV)*, giving λ (in nm) ≈ **1.227/√V**. This wavelength is comparable to atomic spacings in crystals, enabling electron diffraction — the experimental proof of matter waves. ECAT occasionally tests this link: given *V*, compute λ, then ask which crystal lattice spacing produces a first-order diffraction maximum.

#### Common Pitfalls and Conceptual Traps
- **Threshold wavelength vs. frequency**: if a problem gives *λ₀*, compute *f₀ = c/λ₀* before using *W = hf₀*.
- **Energy unit confusion**: 1 eV = 1.602 × 10⁻¹⁹ J. Always state units; mixing them yields answers off by ~19 orders of magnitude.
- **"Intensity changes KE"**: it changes *current*, not *KE_max*. This is the single most-tested misconception.
- **Assuming hf alone equals KE**: forgetting to subtract *W* gives the photon's total energy, not the electron's kinetic energy.

#### Worked Micro-Example
Light of wavelength **400 nm** hits a metal with work function **2.0 eV**. Photon energy *E = hc/λ = (1240 eV·nm)/400 nm = 3.10 eV*. Then **KE_max = 3.10 − 2.0 = 1.10 eV**, and the stopping potential **V₀ = 1.10 V**. Threshold wavelength *λ₀ = 1240/2.0 = 620 nm*.

#### Practice Prompts
1. A metal has *W = 1.9 eV*. Find (a) threshold wavelength, (b) *KE_max* of photoelectrons when *λ = 350 nm* is incident, (c) stopping potential.
2. Photoelectrons emitted by 500 nm light from sodium (*W = 2.28 eV*) are accelerated through 50 V. Compute their de Broglie wavelength after acceleration.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
