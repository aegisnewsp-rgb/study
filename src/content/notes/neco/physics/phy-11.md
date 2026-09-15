---



exam: neco
examName: NECO SSCE
subject: physics
subjectName: Physics
topic: phy-11
topicName: Optical Instruments
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.680887"
lastUpdated: "2026-09-15"
diagramPrompt: "Clean educational diagram showing Optical Instruments with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---

# Optical Instruments

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your NECO SSCE Physics paper.

Optical instruments are lens-and-mirror systems that bend light to form magnified or clear images of objects. The NECO SSCE tests the **simple microscope**, **compound microscope**, **astronomical telescope** and the **human eye** (with its defects and corrections).

| Instrument | Magnification formula | SI units |
|---|---|---|
| Simple microscope (image at near point D) | M = 1 + D/f | dimensionless (D = 0.25 m, f in m) |
| Simple microscope (image at infinity) | M = D/f | dimensionless |
| Compound microscope | M = (D/f_e) × (L/f_o) | dimensionless |
| Astronomical telescope (normal adjustment) | M = f_o / f_e | dimensionless |
| Power of a lens | P = 1/f | dioptre (D) = m⁻¹ |

The **lens formula** 1/v + 1/u = 1/f links object distance u (m), image distance v (m) and focal length f (m); linear magnification is m = v/u.

> 💡 **High-Yield Memory Hook:** "**SCoR-LA**" — **S**imple (1 + D/f), **C**ompound (D/f_e × L/f_o), **t**eles**R**ope (f_o/f_e), **L**ens power (1/f), **A**t normal adjustment → image at infinity. Remember: telescopes invert, microscopes still give inverted final image when adjusted, and the simple microscope makes things **e**rect and enlarged.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content covering mechanisms, derivations, and problem patterns tested by NECO.

#### Core formulae and sign convention

Every lens calculation in NECO uses the **Cartesian sign convention**: distances measured in the direction of the incident light are positive, those against the incident light are negative. The thin-lens equation is

**1/v + 1/u = 1/f**, where u = object distance (m), v = image distance (m), f = focal length of the converging (or diverging) lens (m). Each term carries dimensions of **[L⁻¹]**. Linear magnification **m = v/u** is dimensionless; a negative m means the image is inverted.

A diverging lens has f < 0 in this convention and always forms a virtual, erect, diminished image — which is precisely why it is used to correct myopia.

#### Angular versus linear magnification

Cameras and projectors are described by **linear magnification m = v/u** because the image is real and falls on a screen or film where its physical size matters. Microscopes and telescopes are described by **angular magnification M** because the eye judges apparent size by the angle subtended at the eye, not by the image's actual height.

| Quantity | Used for | Formula | Final image property |
|---|---|---|---|
| Linear magnification m | Camera, projector, objective lens of microscope | m = v/u | Real, inverted |
| Angular magnification M | Simple microscope, eyepiece, telescope | M = θ_image / θ_object | Usually virtual at near point or at infinity |

#### Construction of a compound microscope

The **objective** (short focal length f_o) forms a real, inverted, magnified image just beyond the focal point of the **eyepiece** (short focal length f_e). The eyepiece then acts as a simple microscope viewing that intermediate image. Tube length L is the separation between the two lenses. The combined magnification is

**M_total = (D / f_e) × (L / f_o)**.

#### Construction of an astronomical telescope (normal adjustment)

The **objective** (long focal length f_o) forms a real, inverted, diminished image of a distant object at its focal plane. The **eyepiece** (short focal length f_e) is placed so that this image lies at its focal point, producing a virtual image at infinity. Tube length ≈ f_o + f_e, and the angular magnification is **M = f_o / f_e**. Because the final image is inverted, an **erecting prism or additional lens** is added to convert the instrument into a terrestrial telescope.

#### Eye defects and their corrections

| Defect | Cause | Correcting lens | Sign of f |
|---|---|---|---|
| Myopia (short sight) | Eyeball too long / lens too strong; far point < infinity | Diverging (concave) | f < 0 |
| Hypermetropia (long sight) | Eyeball too short / lens too weak; near point > 25 cm | Converging (convex) | f > 0 |
| Presbyopia | Loss of accommodation with age | Converging (for near work) | f > 0 |
| Astigmatism | Unequal curvature of cornea | Cylindrical lens | — |

The correcting-lens focal length is found from 1/f = 1/v − 1/u, with u = far point (for myopia) or near point (for hypermetropia) measured from the eye's lens.

#### 🎯 Exam-Level Worked Problem

**Question:** A student with a far point of 2.0 m cannot see distant objects clearly. (a) What type of lens must be prescribed? (b) Calculate the focal length and power of the corrective lens.

#### Solution:
(a) The eye over-converges light from a distant object, so the image forms in front of the retina. A **diverging (concave) lens** is required.
(b) Using the lens formula with the far point as the "object" the eye should see clearly:

- The far point is 2.0 m, so the lens must take an object effectively at infinity and form a virtual image at the far point.
- 1/v + 1/u = 1/f → 1/f = 1/v + 1/u
- u = ∞ ⇒ 1/u = 0; v = −2.0 m (virtual image on the same side as the object → negative).
- 1/f = 1/(−2.0) + 0 = −0.5 m⁻¹.
- f = **−2.0 m**.
- Power P = 1/f = **−0.5 D**.

> ⚠️ **Examiner Trap:** Many candidates write P = 1/2.0 = +0.5 D and choose a convex lens. The negative sign is essential — without it you have prescribed a lens that makes the patient's eyes worse. Always quote the **sign and the dioptre**.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for long-term mastery, edge cases, and cross-topic links.

#### Normal adjustment versus accommodation

A telescope or microscope is said to be in **normal adjustment** when the final image is formed at infinity (parallel rays enter the eye), eliminating accommodation effort. When the final image is formed at the near point D, the angular magnification rises to **M = 1 + D/f** for a simple microscope and to **M = (1 + D/f_e) × (L/f_o)** for a compound microscope.

| Adjustment | Simple microscope | Compound microscope | Telescope |
|---|---|---|---|
| Normal (image at infinity) | M = D/f | M = (D/f_e)(L/f_o) | M = f_o/f_e |
| Final image at D | M = 1 + D/f | M = (1 + D/f_e)(L/f_o) | rarely used — eyestrain |

#### Camera as a thin-lens system

A camera uses a single converging lens of fixed focal length to form a real, inverted image on the film or sensor. Because distant objects have u ≫ f, the image distance approaches the focal length: **v ≈ f**. Focusing a nearby object increases v only slightly, which is why the lens moves just a few millimetres. The **f-number** (f/D_aperture) controls the light-gathering ability and depth of field — a smaller f-number means a brighter but shallower image.

#### Projector

A projector is the optical reverse of a camera: an illuminated object placed just beyond f produces a real, magnified, inverted image on a distant screen. Because the image is inverted, transparencies or slides are loaded **upside down** to compensate. Linear magnification m = v/u is large (often 50–100×) because v ≫ u.

#### Resolving power

Resolving power is the smallest angular separation two points can have and still be seen as distinct. For a circular aperture it is governed by the **Rayleigh criterion**, θ_min = 1.22 λ/D, where λ is the wavelength (m) and D is the aperture diameter (m). Larger apertures and shorter wavelengths (e.g. blue light) improve resolution — the reason telescopes have huge objectives and electron microscopes use very short-wavelength electrons.

#### Advanced traps and edge cases

1. **Sign-convention drift.** When a virtual image is formed, v is negative in the Cartesian scheme; skipping the sign converts a correct focal length into a wrong lens type.
2. **Power without units.** NECO mark schemes often deduct for "P = 2" with no dioptre; always write **P = +2.0 D**.
3. **Telescope inversion.** Drawing the eyepiece as a diverging lens is a common error — both objective and eyepiece of an astronomical telescope are converging; only the terrestrial version adds an erecting arrangement.
4. **Near-point assumption.** Some NECO questions state D = 25 cm explicitly, others assume it silently; if D is unspecified in a simple-microscope calculation at the near point, default to **0.25 m**.
5. **Compound-microscope ray diagram.** The intermediate image must fall **between** the eyepiece and its focal point — placing it beyond f_e produces a real image behind the observer's head.

#### Advanced practice prompts

1. An astronomical telescope in normal adjustment has an objective of focal length 100 cm and an eyepiece of focal length 5 cm. A student with a near point of 25 cm uses it to view the moon. Calculate the angular magnification when the final image is (a) at infinity and (b) at the near point. State one advantage of each setting.
2. A farsighted person has a near point of 75 cm. Find the power of the converging lens that will allow them to read a book held 25 cm from the eye, and sketch a ray diagram showing how the lens produces a virtual image at 75 cm.

---

## Continue your study

- **[View this topic in your NECO SSCE roadmap](/roadmap/?exam=neco&duration=1mo)** — see where "Optical Instruments" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neco&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NECO SSCE exam overview](/exams/neco/)** — pattern, eligibility, and syllabus
- **[All Physics notes](/notes/neco/physics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
