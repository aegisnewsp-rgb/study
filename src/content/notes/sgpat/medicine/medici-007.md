---
exam: sgpat
examName: Saudi GP Board
subject: medicine
subjectName: Medicine
topic: medici-007
topicName: Cardiac Output Determinants
weight: 3
country: saudi
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-23"
---

# Cardiac Output Determinants

### 🟢 Lite — Quick Review (1h–1d)
> One line a GP registrar should never forget: CO is the master variable of perfusion.

**Memory Hook — "PACH"**: the four determinants are **P**reload, **A**fterload, **C**ontractility, **H**eart rate. Drop the A and you have PCH (preload, contractility, HR) which the Frank-Starling curve manipulates along the x-axis (preload) and y-axis (SV).

| Term | Formula | Units (SI) |
|---|---|---|
| Cardiac output | CO = HR × SV | L·min⁻¹ |
| Stroke volume | SV = EDV − ESV | mL per beat |
| Ejection fraction | EF = SV / EDV × 100 | %, dimensionless |
| Cardiac index | CI = CO / BSA | L·min⁻¹·m⁻² |

Normal resting adult CO sits between 4 and 8 L·min⁻¹. CI normal range is 2.5–4.0 L·min⁻¹·m⁻². Anything below 2.2 raises suspicion for cardiogenic shock on the SCFHS blueprint.

> 💡 **High-Yield Memory Hook:** Think of the ventricle as a balloon — preload stretches it (Frank-Starling), contractility squeezes it harder, afterload is the knot the squeeze fights against, and HR is how often the squeeze repeats. CO is squeeze × repeat.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Determinants of CO in haemodynamic order

The four PACH variables act at different points of the cardiac cycle. Preload sets the end-diastolic volume (EDV) before isovolumetric contraction. Contractility determines how much of that EDV becomes stroke volume. Afterload is the arterial pressure the ventricle must overcome to open the aortic valve. HR is the cycle frequency.

The interdependence is captured by:

#### CO = HR × SV = HR × (EDV − ESV)

where CO is in L·min⁻¹, HR in beats·min⁻¹, EDV and ESV in mL. Multiply mL by HR and divide by 1000 to convert to L·min⁻¹.

#### Pressure-volume loop anatomy

Each loop traces: end-diastolic volume point → mitral closure → isovolumetric contraction (vertical upstroke) → aortic valve opening → ejection (curved descent) → aortic valve closure → isovolumetric relaxation → mitral opening → back to EDV. The width of the loop is SV; the area approximates stroke work (external work, joules). Shifting the loop right means more preload; a steeper upstroke means higher contractility (dP/dt).

#### Fick principle in clinical practice

The indirect Fick method estimates CO when direct thermodilution is unavailable:

#### CO = VO₂ / (CaO₂ − CvO₂)

with VO₂ in mL O₂·min⁻¹, and CaO₂ and CvO₂ in mL O₂·L⁻¹ of blood. Watch units: CaO₂ is measured per litre, not per 100 mL. Multiply a 100 mL figure by 10 before substitution.

#### Concept comparison matrix

| Variable | Definition | Effect of ↑ | Exam trap |
|---|---|---|---|
| Preload | Venous return / EDV / LV end-diastolic fibre stretch | ↑ SV up to Frank-Starling ceiling | Confusing it with afterload |
| Afterload | Arterial resistance the ventricle ejects against | ↑ Afterload → ↓ SV, but ↑ MAP | Calling SVR part of CO output |
| Contractility | Intrinsic inotropic state independent of preload | ↑ SV for same EDV | Treating it as the same as preload |
| Heart rate | Cycle frequency (SA node driven) | ↑ CO until diastolic filling falls | Ignoring that tachyarrhythmia reduces filling time |

#### Worked resolution: septic patient on the floor

A 70-kg GP-evaluated patient with febrile UTI, BP 86/52 mmHg, HR 118 bpm, has a calculated cardiac index of 3.8 L·min⁻¹·m⁻² and SVR 480 dyn·s·cm⁻⁵ (≈ 6 mmHg·min·L⁻¹ in Wood units).

- Step 1 — Compute CO from CI: CI × BSA. BSA (Mosteller) = √(70 × 170 / 3600) ≈ 1.82 m². CO ≈ 3.8 × 1.82 ≈ 6.9 L·min⁻¹.
- Step 2 — Read the pattern: CI preserved or elevated, SVR low, MAP low → distributive (warm) shock.
- Step 3 — Expected SV: SV = CO / HR × 1000 = 6900 / 118 ≈ 58 mL.
- Step 4 — Treatment implication: fluids ± early norepinephrine, NOT inotropes — contractility is already compensated.

> ⚠️ **Examiner Trap:** Students pick "cardiogenic shock" because the MAP is low. They forget that low SVR with preserved/elevated CI is the signature of distributive shock. Always interpret the four variables together.

---

### 🔴 Extended — Deep Study (3mo+)

#### Edge cases and mathematical limits

The Frank-Starling relationship is not linear. In healthy myocardium, SV climbs with preload until a ceiling, after which additional stretch offers no further SV. In failing myocardium, the curve is flatter and slopes downward once a critical EDV is passed, because over-distension wastes energy on wall tension rather than ejection (Laplace's law: wall tension ∝ pressure × radius / wall thickness).

Guyton's model forces equality between venous return and cardiac output at steady state. Mean systemic filling pressure (MSFP) is the upstream driver; the venous return curve crosses the cardiac function curve at the operating point. A drop in MSFP (haemorrhage) shifts the venous return curve left and down, reducing the operating CO even though contractility itself is unchanged. Conversely, a pure contractility fall shifts the cardiac function curve downward at the same MSFP.

#### Fick principle: clinical pitfalls

The Fick method assumes steady state. In a febrile patient with VO₂ = 280 mL O₂·min⁻¹, CaO₂ = 200 mL·L⁻¹, CvO₂ = 140 mL·L⁻¹, CO = 280 / 60 = 4.67 L·min⁻¹. The error students commit is using CaO₂ − CvO₂ in mL·dL⁻¹ without the ×10 conversion — this underestimates CO by a factor of 10 and leads to a false diagnosis of cardiogenic shock.

#### Advanced traps and exceptions

1. In severe aortic stenosis, afterload is fixed; CO becomes preload- and HR-dependent, and tachycardia collapses diastolic filling.
2. In HFrEF (EF < 40%), the Frank-Starling operating point sits on the descending limb — diuretics improve symptoms even when CO falls slightly.
3. In pregnancy, CO rises by 30–50% through increases in both HR and SV; MAP is maintained because SVR falls proportionally.
4. In atrial fibrillation with rapid ventricular response, loss of atrial kick reduces preload by ~20% — a critical bedside number.
5. Mixed shock (e.g., sepsis with ischaemic cardiomyopathy) shows overlapping patterns: low SVR plus reduced CI — do not label it pure distributive.
6. Pericardial tamponade equalises diastolic pressures; the four determinants are intact but CO falls because EDV cannot rise.

#### Advanced practice prompts

1. A 58-year-old with anterior STEMI, BP 90/60, HR 110, cool extremities, JVP elevated, CI 1.9 L·min⁻¹·m⁻², SVR high. Map the haemodynamic profile, identify the failing PACH variable, and justify your first pharmacologic choice.
2. A patient on chronic beta-blockade with BP 138/86 develops hypovolaemic shock after GI bleed. Predict the CO response and explain why the Frank-Starling curve shifts rather than the heart rate response. Discuss why reflex tachycardia is blunted here.

> 📌 **Formula Check:** CO = HR × SV gives you L·min⁻¹ only when you first convert SV from mL to L (divide by 1000). MAP = CO × SVR + CVP uses SVR in mmHg·min·L⁻¹ (Wood units × 80 = dyn·s·cm⁻⁵). The constants matter.

---

## Continue your study

- **[View this topic in your Saudi GP Board roadmap](/roadmap/?exam=sgpat&duration=1mo)** — see where "Cardiac Output Determinants" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=sgpat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[Saudi GP Board exam overview](/exams/sgpat/)** — pattern, eligibility, and syllabus
- **[All Medicine notes](/notes/sgpat/medicine/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
