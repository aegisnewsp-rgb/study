---
exam: sa-pharm
examName: SAPC (South Africa)
subject: pharmacy
subjectName: Pharmacy
topic: pharma-004
topicName: Pharmacokinetics — Distribution
weight: 3
country: southafrica
generated: "2026-04-09T20:00:00"
lastUpdated: "2026-07-11"
---

# Pharmacokinetics — Distribution

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Distribution** is the reversible movement of drug from blood into interstitial and intracellular fluid, described by the **apparent volume of distribution (Vd)**.

#### Core formula:

$$V_d = \frac{\text{Amount of drug in body (mg)}}{\text{Plasma concentration (mg/L)}} \quad \text{(apparent volume in litres)}$$

#### Must-know facts:

- Vd is an **apparent** volume — not a real anatomical space.
- Only the **unbound (free) fraction (fu)** crosses membranes and produces a pharmacological effect.
- **Loading dose = Vd × Target Cp / F**; maintenance dose depends on clearance, not Vd.
- Vd > ~42 L (total body water) signals extensive tissue sequestration.

**Exam pointers:** Calculate Vd from dose and Cp; identify which compartment a drug occupies; recognise **redistribution** as the termination mechanism for thiopentone.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definition and the Free Drug Hypothesis

Distribution describes the **reversible transfer** of drug from systemic circulation into interstitial and intracellular fluid. Once absorbed, only the **unbound fraction (fu)** is pharmacologically active and able to diffuse across capillary endothelium. fu is calculated as:

$$f_u = \frac{C_{\text{unbound}}}{C_{\text{total}}}$$

Plasma protein binding (albumin for acidic drugs, α1-acid glycoprotein for basic drugs) acts as a **circulating reservoir**, restricting distribution but prolonging residence time.

#### Apparent Volume of Distribution

Vd is a proportionality constant, not a literal fluid compartment. Interpretation guide:

| Vd value (70 kg adult) | Clinical implication |
|---|---|
| 5–10 L | Confined to plasma (e.g. heparin, warfarin) |
| 10–42 L | Distributes into extracellular fluid |
| > 42 L | Extensive tissue binding; exceeds total body water |

For a one-compartment model, plasma concentration decays as $C(t) = C_0 \cdot e^{-kt}$, where $k$ is the elimination rate constant and $t_{1/2} = 0.693/k$.

#### Two-Compartment Behaviour

Many drugs show biphasic decline: $C(t) = A e^{-\alpha t} + B e^{-\beta t}$, with α representing the rapid **distribution phase** into well-perfused tissues and β the slower terminal **elimination phase**.

#### Barriers and Lipophilicity

The **blood–brain barrier** (tight junctions, P-glycoprotein efflux) and **placental barrier** exclude polar, ionised, or large molecules. Weak bases concentrate in acidic tissue compartments; weak acids remain largely plasma-bound.

> **Exam trap:** A high plasma protein binding does **not** mean a strong clinical effect — only the free fraction matters.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Redistribution and Clinical Consequences

**Thiopentone** terminates its anaesthetic action not by metabolism but by **redistribution** from brain → muscle → adipose tissue. A second dose during this redistribution phase produces disproportionately deeper CNS depression because peripheral stores act as a reservoir feeding the central compartment.

#### Disease-State Modifications

| Condition | Effect on Vd / fu | Therapeutic consequence |
|---|---|---|
| Hepatic cirrhosis (↓ albumin) | ↑ fu for acidic drugs (e.g. warfarin) | Bleeding risk at "normal" total concentrations |
| Nephrotic syndrome | ↓ plasma protein → ↑ fu, ↑ Vd | Dose adjustment guided by free levels |
| Obesity | ↑ Vd for lipophilic drugs | Loading by ideal **or** total body weight — drug specific |
| Cachexia / elderly | ↓ total body water → ↓ Vd for hydrophilic drugs | Lower loading dose required |

#### Dosing Implications

Because Vd determines the **loading dose** and clearance determines the **maintenance dose**, two drugs with identical half-lives can require very different regimens:

- **Loading dose** $= \dfrac{V_d \times C_{\text{target}}}{F}$
- **Maintenance dose** $= CL \times C_{\text{target}} \times \tau$

> **Common mistake:** Using total plasma concentration to monitor therapy in hypoalbuminaemic patients. Measure or estimate the free concentration, or interpret total levels against a lowered reference range.

#### Connections to Adjacent Topics

Distribution bridges **absorption** (governs how much drug enters the central compartment) and **elimination** (governs how quickly it leaves). Protein-binding displacement interactions shift fu upward transiently, elevating free drug until a new equilibrium is established.

#### Worked Micro-Example

A 70 kg patient receives 500 mg of a drug IV; plasma concentration at steady state is 10 mg/L.

$$V_{d(ss)} = \frac{500 \text{ mg}}{10 \text{ mg/L}} = 50 \text{ L}$$

Vd > total body water → drug is sequestered in tissues (typical of basic lipophilic agents such as chloroquine).

#### Practice Prompts

1. Explain why the **terminal half-life of thiopentone is long**, yet its anaesthetic action is brief.
2. A cirrhotic patient on warfarin has a normal INR at "therapeutic" total concentrations. Justify measuring free warfarin levels.

---

## Continue your study

- **[View this topic in your SAPC (South Africa) roadmap](/roadmap/?exam=sa-pharm&duration=1mo)** — see where "Pharmacokinetics — Distribution" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=sa-pharm&duration=1d)** — 1-day sprint covering highest-weight topics
- **[SAPC (South Africa) exam overview](/exams/sa-pharm/)** — pattern, eligibility, and syllabus
- **[All Pharmacy notes](/notes/sa-pharm/pharmacy/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
