---
exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-12
topicName: Electromagnetism
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.087574"
diagramPrompt: "Clean educational diagram showing Electromagnetism with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration
---

# Electromagnetism

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Magnetism** — Key Facts

The Earth behaves like a giant magnet with a magnetic field. The **horizontal component** of Earth's magnetic field is given by $B_H = B\cos\delta$, where $\delta$ is the angle of dip (angle the Earth's magnetic field makes with the horizontal). The **angle of dip** itself is $\delta = \tan^{-1}(B_V/B_H)$, where $B_V$ is the vertical component.

**Magnetic Materials:**

| Type | Behaviour | Example | Key Property |
|------|-----------|---------|--------------|
| Diamagnetic | Weakly repelled by magnets | Bismuth, copper, water | No permanent magnetic moment |
| Paramagnetic | Weakly attracted | Aluminium, oxygen, manganese | Unpaired electrons, random alignment |
| Ferromagnetic | Strongly attracted, can be magnetised | Iron, cobalt, nickel | Parallel alignment of magnetic moments below $T_C$ |

**Curie's Law (Paramagnetic materials):**
Magnetic susceptibility $\chi = \frac{C}{T}$ where $C$ is the Curie constant and $T$ is absolute temperature. As temperature increases, paramagnetic materials lose their magnetism.

**Curie Temperature ($T_C$):** The temperature above which a ferromagnetic material becomes paramagnetic. For iron, $T_C = 1043$ K ($770^\circ$C). Below $T_C$, ferromagnets have magnetic domains aligned in the same direction.

⚡ **Exam tip:** Soft iron has high permeability ($\mu$) → ideal for electromagnets because it magnetises quickly but doesn't retain magnetism when current is removed. Steel has high coercivity ($H_c$) → retains magnetism permanently, used for permanent magnets. MDCAT frequently tests this distinction.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students who want genuine understanding.

**Magnetism** — Complete Study Guide

**Hysteresis Loop:**
When a ferromagnetic material is subjected to a magnetising field $H$ and the field is reduced to zero, the magnetic induction $B$ does not return to zero along the original curve — this lagging of $B$ behind $H$ is called **hysteresis**. Key parameters:

- **Retentivity (Remanence):** Value of $B$ when $H = 0$ — how much magnetism remains
- **Coercivity:** Value of $-H$ needed to reduce $B$ to zero — resistance to demagnetisation
- **Hysteresis loss:** Energy lost per unit volume per cycle = area of hysteresis loop

**Soft Iron vs Steel:**
- **Soft iron:** Narrow hysteresis loop, low coercivity, high permeability — used in electromagnets and transformer cores where rapid magnetisation/demagnetisation is needed
- **Steel:** Wide hysteresis loop, high coercivity, low permeability — used in permanent magnets

**Magnetic Screening (Faraday Cage principle for magnetism):**
A ferromagnetic shell shields its interior from external magnetic fields. The magnetic field lines are concentrated in the ferromagnetic material rather than entering the cavity. This is analogous to how a conducting shell shields against electric fields.

**Magnetisation and Magnetic Intensity:**
- Magnetisation $M$ = magnetic moment per unit volume (units: A/m)
- Magnetic intensity $H$ = magnetising force
- $B = \mu_0(H + M)$
- Magnetic susceptibility $\chi = M/H$
- Relative permeability $\mu_r = 1 + \chi$
- $\mu = \mu_0 \mu_r = \mu_0(1 + \chi)$

⚡ **Common student mistakes:** Confusing magnetic susceptibility $\chi$ with permeability $\mu$. Thinking diamagnetic materials are attracted by magnets (they are actually repelled, weakly). Forgetting that the angle of dip $\delta$ changes with geographic latitude — it is maximum at the poles (90°) and zero at the equator.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Magnetism** — Advanced Notes

**Origin of Magnetism:**
All magnetic effects arise from electric charges in motion. In atoms, electrons have two sources of magnetism:
1. **Orbital magnetic moment:** Due to electron motion around the nucleus (analogous to a current loop)
2. **Spin magnetic moment:** Intrinsic property of electrons, related to spin angular momentum

The **Bohr magneton** $\mu_B = \frac{eh}{4\pi m_e} = 9.27 \times 10^{-24}$ A·m² is the fundamental unit of atomic magnetic moment.

**Weiss Domain Theory of Ferromagnetism:**
Below the Curie temperature, a ferromagnetic material is divided into tiny regions called **Weiss domains**. Within each domain, all atomic magnetic moments are aligned parallel due to quantum mechanical exchange forces. However, different domains have different directions of magnetisation, so the net magnetisation of the bulk material may be zero.

When an external field is applied:
1. Domains aligned with the field grow (domain wall movement)
2. Unfavourably oriented domains shrink
3. At high fields, all domains align with the field (technical term: saturation)

**Magnetic Circuits:**
The flow of magnetic flux $\Phi$ through a magnetic circuit follows an analogy with Ohm's law:

| Electrical | Magnetic |
|-----------|----------|
| EMF ($\varepsilon$) | MMF ($NI$) |
| Current ($I$) | Flux ($\Phi$) |
| Resistance ($R$) | Reluctance ($\mathcal{R} = \frac{l}{\mu A}$) |

$$\text{MMF} = \Phi \times \mathcal{R}$$
$$NI = \Phi \times \frac{l}{\mu_0 \mu_r A}$$

**Magnetisation Curve (B-H Curve):**
The B-H curve for a ferromagnetic material shows: initial magnetisation curve → saturation → hysteresis loop on reversal. The slope of the B-H curve gives permeability $\mu = B/H$, which is not constant but varies with $H$.

**Types of Magnetic Materials:**

| Material | $\chi$ | $\mu_r$ | Temperature dependence |
|----------|--------|---------|----------------------|
| Diamagnetic | $-10^{-5}$ to $-10^{-2}$ | < 1 | Independent |
| Paramagnetic | $10^{-5}$ to $10^{-3}$ | > 1 | $\chi \propto 1/T$ (Curie's law) |
| Ferromagnetic | $10^3$ to $10^5$ | >> 1 | Loses ferromagnetism above $T_C$ |

**Earth's Magnetic Field Details:**
Earth's magnetic field can be resolved into three components:
- Horizontal component $B_H = B\cos\delta$
- Vertical component $B_V = B\sin\delta$
- Total field $B = \sqrt{B_H^2 + B_V^2}$
- Angle of $\operatorname{dip} \delta = \tan^{-1}(B_V/B_H)$

The magnetic north pole is actually a **south magnetic pole** ( Geographic north has opposite magnetic polarity — north pole of a compass points toward Earth's geographic north, which is magnetically a south pole).

**MDCAT Question Patterns:**
Magnetism questions in MDCAT Pakistan focus on: (1) classifying materials as dia/para/ferro, (2) Curie law calculations, (3) hysteresis loop analysis, (4) magnetic screening applications, (5) Earth's magnetic field components. 1–2 questions per paper typically.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
