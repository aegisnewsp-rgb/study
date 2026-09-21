---



exam: jamb
examName: JAMB UTME
subject: chemistry
subjectName: Chemistry
topic: chem-5
topicName: Thermochemistry and Energetics
weight: 4
country: nigeria
generated: "2026-03-24T08:32:07.723358"
lastUpdated: "2026-09-21"
diagramPrompt: "Clear scientific diagram of Thermochemistry and Energetics with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"





---

# Thermochemistry and Energetics

### 🟢 Lite — Quick Review (1h–1d)
> One screen to revise the night before JAMB UTME Chemistry. Spend 60 seconds here, then move to Standard.

Heat flow is the scoreboard of every reaction. **Thermochemistry** tracks the heat (enthalpy, H) absorbed or released; **energetics** decides whether that reaction will actually run on its own (Gibbs free energy, G).

The single most-tested equation is `q = m × c × ΔT`, where q is heat in joules, m is mass of the solution in kg, c is specific heat capacity in J kg⁻¹ K⁻¹ (use **4180 J kg⁻¹ K⁻¹** for water), and ΔT is the temperature change in K or °C.

| Term | Sign convention | Memory Hook cue |
|---|---|---|
| Exothermic | ΔH **negative** (−) | "Exo = exit; heat exits the system" |
| Endothermic | ΔH **positive** (+) | "Endo = enter; heat enters" |
| Spontaneous | ΔG < 0 | "G less than zero, go" |

> 💡 **High-Yield Memory Hook — "HOPS":** **H**ess's Law, **O**ptions (elements ΔH°f = 0), **P**ath-independence, **S**ign. Hess's Law sums any multi-step cycle because enthalpy is a state function; elements in their standard states (O₂(g), graphite, H₂(g), S₈ rhombic) carry ΔH°f = 0, which simplifies every summation.

### 🟡 Standard — Regular Study (2d–2mo)
> Build working command of enthalpy arithmetic, Hess cycles, and calorimetry. Targets the 1–2 JAMB questions drawn from this topic every year.

#### The five ΔH symbols you must distinguish

JAMB examiners deliberately swap the words *formation*, *combustion*, *neutralisation*, *atomisation* and *solution*. Mixing them up is the fastest route to a wrong option.

| Enthalpy symbol | Definition | Typical sign |
|---|---|---|
| ΔH°f | Heat change when **1 mol** of compound forms from its elements in standard states | Often negative for stable oxides; can be positive |
| ΔH°c | Heat change when **1 mol** of substance burns completely in O₂ | Always negative (exothermic) |
| ΔH°n | Heat change when **1 mol** of water forms from H⁺(aq) + OH⁻(aq) | ≈ −57.1 kJ mol⁻¹ for strong acid + strong base |
| ΔH°sol | Heat change when **1 mol** of solute dissolves in a large excess of solvent | Sign depends on solute |
| ΔH°at | Heat change to break **1 mol** of bonds into gaseous atoms | Always positive |

#### Two master equations for ΔH of any reaction

1. **From formation enthalpies** — ΔH°rxn = Σ ΔH°f (products) − Σ ΔH°f (reactants), in kJ mol⁻¹.
2. **From bond energies** — ΔH°rxn = Σ BE (bonds broken) − Σ BE (bonds formed). Bond breaking always absorbs, bond forming always releases.

Both reduce to the same numerical answer when input data are consistent.

#### Hess's Law worked through

Hess's Law states that the total enthalpy change for a reaction is independent of the route taken. Three operations move you between routes:

- **Reverse** an equation → reverse the sign of its ΔH.
- **Multiply** coefficients by a factor *k* → multiply ΔH by the same *k*.
- **Add** equations → add their ΔH values, cancelling species that appear on both sides.

Standard state convention: **298 K** (25 °C) and **1 atm** (101.325 kPa). Under these conditions, ΔH°f of every element in its natural physical form is **exactly zero** — use this to eliminate unknowns in cycle problems.

#### A realistic JAMB-style calculation

A 150 g sample of water at 25.0 °C is heated by burning 0.500 g of methanol (CH₃OH, ΔH°c = −726 kJ mol⁻¹). Assuming no heat loss to the calorimeter, find the final temperature of the water.

- Moles of CH₃OH burnt = 0.500 / 32.04 = 0.01561 mol
- Heat released = 0.01561 × 726 = 11.33 kJ = 11 330 J (use |ΔH| because we want heat entering the water)
- Rearranging q = mcΔT → ΔT = q / (mc)
- ΔT = 11 330 / (0.150 × 4180) = 11 330 / 627 = 18.07 K
- Final temperature = 25.0 + 18.1 ≈ **43.1 °C**

> ⚠️ **Examiner Trap:** Students commonly forget to convert the 150 g mass into kg before using c = 4180 J kg⁻¹ K⁻¹. A common alternative is to use c = 4.18 J g⁻¹ K⁻¹ directly — both give the same answer if mass is kept in grams. Mixing the two (mass in g with c in J kg⁻¹ K⁻¹) is the silent killer.

#### First Law link and spontaneity

The First Law of Thermodynamics, ΔU = q + w, with q as heat added to the system and w as work done **on** the system, collapses at constant pressure to ΔH = q_p. For gaseous reactions ΔH = ΔU + Δn_g RT, where Δn_g is the change in moles of gas and R = 8.314 J mol⁻¹ K⁻¹.

Spontaneity is governed by Gibbs free energy: ΔG° = ΔH° − TΔS°, evaluated at temperature T in kelvin. ΔG° < 0 means the reaction proceeds on its own; ΔG° > 0 means it will not, regardless of how exothermic it looks.

> 📌 **Formula Check — ΔG° = ΔH° − TΔS°:** ΔH° in kJ mol⁻¹, ΔS° in J mol⁻¹ K⁻¹, T in K. Convert ΔS° to kJ mol⁻¹ K⁻¹ before subtracting, otherwise the answer is off by a factor of 1000.

### 🔴 Extended — Deep Study (3mo+)
> Beyond the textbook: edge cases, derived relations, and the boundary conditions JAMB sets around the topic.

#### Why ΔH°n is not always −57.1 kJ mol⁻¹

The textbook value −57.1 kJ mol⁻¹ assumes **complete ionisation** of both acid and base in dilute aqueous solution. The moment a weak acid (CH₃COOH) or weak base (NH₃) enters, an additional endothermic step — dissociation of the weak partner — partially cancels the heat of water formation. Observed ΔH°n for CH₃COOH + NaOH is closer to **−55 kJ mol⁻¹**; for HCN + KOH it can drop below **−50 kJ mol⁻¹**. The ΔH°n value itself therefore acts as a diagnostic: it tells you how ionised the acid/base pair is.

#### The bond-energy shortcut and its hidden cost

Bond energies are **mean** values averaged across many molecules — they are not exact for a single compound. Two consequences:

- A Hess's Law calculation using tabulated ΔH°f values is more accurate than one built from bond energies.
- When both routes are taught in a question, JAMB expects ΔH°f subtraction; bond-energy sums are the "explain-the-mechanism" route, not the "compute-the-number" route.

#### Mathematical limit worth noting

As T → 0 K, the TΔS° term in ΔG° = ΔH° − TΔS° collapses to zero, leaving ΔG° ≈ ΔH°. At sufficiently low temperature, enthalpy alone decides feasibility; entropy becomes irrelevant. Practically, JAMB never asks you to integrate to 0 K, but the limit explains why some endothermic reactions (e.g. melting ice just above 273 K) are still spontaneous — the TΔS term eventually wins.

#### Seven traps that recur in JAMB options

1. Writing ΔH°f of O₂(g) or H₂(g) as a non-zero number.
2. Treating "heat released" and "ΔH of reaction" as the same sign — they are opposite.
3. Multiplying coefficients in a thermochemical equation but forgetting to multiply ΔH by the same factor.
4. Using °C in ΔT inside q = mcΔT — the formula works numerically because a 1 K interval equals a 1 °C interval, but mixing °C with K elsewhere is wrong.
5. Reversing a Hess's Law step but keeping the original ΔH sign.
6. Picking the spontaneous option purely because the reaction is exothermic — ice melting at 25 °C is endothermic yet spontaneous.
7. Confusing molar heat capacity (J mol⁻¹ K⁻¹) with specific heat capacity (J kg⁻¹ K⁻¹) when the question gives moles rather than mass.

#### Two practice prompts

1. Given ΔH°f of CO₂(g) = −393.5 kJ mol⁻¹ and of H₂O(l) = −285.8 kJ mol⁻¹, and ΔH°c of CH₄(g) = −890.4 kJ mol⁻¹, calculate ΔH°f of CH₄(g) and state, with reasoning, whether the value should be positive or negative.
2. A reaction has ΔH° = +42 kJ mol⁻¹ and ΔS° = +125 J mol⁻¹ K⁻¹. Determine the temperature above which it becomes spontaneous, and explain why a JAMB option that quotes "spontaneous at all temperatures" must be wrong.

> 🧭 **Strategy Note:** Across the past decade of JAMB UTME Chemistry papers, this topic reliably delivers one calculation question (Hess's Law or calorimetry) and one concept question (sign of ΔH, spontaneity, or standard-state element rule). Allocate roughly 90 seconds per question; if a Hess's Law cycle demands four steps, skip and return — the second concept question is usually faster to bank.

## Continue your study

- **[View this topic in your JAMB UTME roadmap](/roadmap/?exam=jamb&duration=1mo)** — see where "Thermochemistry and Energetics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=jamb&duration=1d)** — 1-day sprint covering highest-weight topics
- **[JAMB UTME exam overview](/exams/jamb/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/jamb/chemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
