---



exam: jamb
examName: JAMB UTME
subject: chemistry
subjectName: Chemistry
topic: chem-7
topicName: Chemical Equilibrium
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.724532"
lastUpdated: "2026-09-20"
diagramPrompt: "Clear scientific diagram of Chemical Equilibrium with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"





---

# Chemical Equilibrium

### 🟢 Lite — Quick Review (1h–1d)
> One-line anchor for the rush: equal rates, opposite directions, constant composition.

**Chemical equilibrium is a dynamic state**, not a stopped reaction. In a reversible reaction, the forward rate equals the reverse rate once the concentrations stop changing. The hallmark is **constant macroscopic composition** despite ongoing molecular exchange.

**Equilibrium constant** measures where the position of equilibrium sits. For the generic reaction aA + bB ⇌ cC + dD:

$$K_c = \dfrac{[C]^c[D]^d}{[A]^a[B]^b}$$

where [X] denotes equilibrium concentration in **mol·dm⁻³** and a, b, c, d are stoichiometric coefficients. Kc is **dimensionless** by convention (activities divided by 1 mol·dm⁻³ standard state).

#### Must-know formula pair

| Quantity | Expression | SI Unit | Notes |
|---|---|---|---|
| Kc | [products]ᶜᶜᵒᵉᶠᶠ / [reactants]ᶜᵒᵉᶠᶠ | dimensionless | Aqueous/gas concentrations in mol·dm⁻³ |
| Kp | Kc(RT)^Δn | dimensionless | Δn = gaseous mol products − gaseous mol reactants |
| Q | same form as Kc, at any instant | dimensionless | Compare with Kc to predict direction |
| α | √(Kc/c) for weak acid | dimensionless | Ostwald dilution law, when α << 1 |

> 💡 **High-Yield Memory Hook (Memory Hook — FLPSC):** **F**actors that shift equilibrium are **C**oncentration, **P**ressure, **L** catalyst (no shift), **S**olid (no effect), **C**atalyst (no K change). Only **Temperature** changes the value of K itself.

### 🟡 Standard — Regular Study (2d–2mo)
> A working student needs the why behind the constants and the trap behind every shift.

#### The dynamic nature

When N₂(g) + 3H₂(g) ⇌ 2NH₃(g) starts, the forward rate is high because reactant concentrations are large. As NH₃ builds up, the reverse rate climbs. Equilibrium is the moment the two rates match. Macroscopic concentrations then stay fixed; molecular collisions continue. This is **dynamic**, not static.

#### Equilibrium constants

Kc applies when species are in solution or all gases (concentration-based). Kp applies when **all** species are gases and is built on partial pressures in atm or Pa. The two relate through:

$$K_p = K_c(RT)^{\Delta n}$$

where **R = 8.314 J·K⁻¹·mol⁻¹**, **T in kelvin**, and **Δn = Σ(gas product mol) − Σ(gas reactant mol)**. If Δn = 0, then Kp = Kc numerically.

> 📌 **Formula Check:** For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), Δn = 2 − 3 = −1, so Kp = Kc(RT)⁻¹.

#### Le Chatelier's principle

When a stress is applied, the system shifts to oppose it. Concentration changes shift the position but not K. Pressure changes shift gas-phase equilibria toward the side with **fewer gaseous moles**. Temperature is the only variable that **alters K**: heat added to an endothermic forward reaction raises Kc; heat added to an exothermic forward reaction lowers it.

#### Heterogeneous vs homogeneous

In CaCO₃(s) ⇌ CaO(s) + CO₂(g), only CO₂ appears in the Kp expression. Pure solids and pure liquids have **activity = 1** and are dropped from the expression. This rule trips many JAMB candidates.

#### Concept Comparison Matrix

| Feature | Kc | Kp | Reaction Quotient Q |
|---|---|---|---|
| Definition | Conc. ratio at equilibrium | Partial-pressure ratio at equilibrium | Ratio at any instant |
| Used for | Aqueous + gases | All gases | Any time, any composition |
| Changes with | Temperature only | Temperature only | Approach to equilibrium |
| Predicts | Position reached | Position reached | Direction of next shift |
| Standard state | 1 mol·dm⁻³ | 1 atm (or 1 bar) | Same as Kc or Kp |

#### Worked walk-through

Consider 1.00 mol PCl₅ placed in a 2.00 dm³ vessel at 250 °C. At equilibrium, 0.50 mol PCl₅ has dissociated.

#### Step 1 — moles at equilibrium:
- PCl₅: 1.00 − 0.50 = 0.50 mol
- PCl₃: 0.50 mol
- Cl₂: 0.50 mol

#### Step 2 — concentrations (mol·dm⁻³):
- [PCl₅] = 0.50 / 2.00 = 0.25
- [PCl₃] = 0.50 / 2.00 = 0.25
- [Cl₂] = 0.50 / 2.00 = 0.25

#### Step 3 — Kc calculation:
For PCl₅(g) ⇌ PCl₃(g) + Cl₂(g):

$$K_c = \dfrac{[PCl_3][Cl_2]}{[PCl_5]} = \dfrac{(0.25)(0.25)}{0.25} = 0.25 \text{ mol·dm}^{-3}$$

**Step 4 — Δn check:** Δn = 2 − 1 = 1, so Kp = Kc(RT)¹. With T = 523 K and R = 0.0821 dm³·atm·K⁻¹·mol⁻¹, Kp = 0.25 × 0.0821 × 523 ≈ **10.7 atm**.

> ⚠️ **Examiner Trap (Examiner Trap):** Students often write the equilibrium expression for PCl₅ ⇌ PCl₃ + Cl₂ with **cubes of concentrations** when the question gives a cubic vessel — volume cancels in the ratio, so it does not enter Kc.

### 🔴 Extended — Deep Study (3mo+)
> Mastery tier: connect ΔG, hunt the boundaries, and stress-test the Le Chatelier shortcut.

#### Thermodynamic backbone

The equilibrium constant ties directly to Gibbs free energy:

$$\Delta G^\circ = -RT \ln K$$

with **R = 8.314 J·K⁻¹·mol⁻¹**, **T in K**, and **ΔG° in J·mol⁻¹**. At equilibrium itself, ΔG = 0, while ΔG° ≠ 0 unless K = 1. This is why a reaction with K = 10⁶ still proceeds in both directions microscopically: equilibrium is a balance of rates, not a barrier against the reverse path.

#### Edge cases and limits

- **Pure solids and liquids.** Their activities equal 1 by convention; never insert them into Kc or Kp. JAMB often tests this with CaCO₃(s) ⇌ CaO(s) + CO₂(g), where Kp = P(CO₂).
- **Inert gas addition.** Adding He at constant volume raises total pressure but leaves all partial pressures unchanged, so the position does not shift. At constant pressure, the volume expands and the equilibrium shifts toward more gaseous moles — a subtle distinction examiners exploit.
- **Very small K.** When Kc < 10⁻⁴, α ≈ √(Kc/c) holds tightly; for larger Kc, the full cubic α must be solved.
- **Very large K.** Reactants are essentially fully converted; JAMB numericals usually assume K ≥ 10⁴ means "reaction goes to completion".
- **Solvent participation.** For reactions where water is a reactant or product in dilute aqueous solution, [H₂O] is treated as constant and folded into Kc.

#### Industrial anchors JAMB loves

The Haber process (N₂ + 3H₂ ⇌ 2NH₃, exothermic, Δn = −2) uses high pressure, moderate temperature (~450 °C), and an iron catalyst to push yield upward. The Contact process (2SO₂ + O₂ ⇌ 2SO₃) follows the same playbook: low temperature favours yield but kills rate, so ~450 °C and V₂O₅ catalyst balance both.

#### Advanced practice prompts

1. For 2NO₂(g) ⇌ N₂O₄(g) at 298 K, Kp = 0.10 atm⁻¹. Starting with 2.00 atm NO₂ in a 1.00 dm³ flask, derive the equilibrium expression in terms of extent x, then solve for x. Predict whether compressing the flask to 0.50 dm³ raises or lowers the mole fraction of N₂O₄.
2. Methanol synthesis: CO(g) + 2H₂(g) ⇌ CH₃OH(g), ΔH = −90 kJ·mol⁻¹. A JAMB-style question asks how doubling pressure and cutting temperature by 20 K affects yield. Apply Le Chatelier twice and rank the effects.

> ⚠️ **Examiner Trap:** A common distractor reads "adding a catalyst shifts equilibrium toward products." The correct answer is **no shift** — catalysts lower activation energy for *both* directions equally. JAMB has used this exact distractor in past papers.

## Continue your study

- **[View this topic in your JAMB UTME roadmap](/roadmap/?exam=jamb&duration=1mo)** — see where "Chemical Equilibrium" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jamb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JAMB UTME exam overview](/exams/jamb/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jamb/chemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
