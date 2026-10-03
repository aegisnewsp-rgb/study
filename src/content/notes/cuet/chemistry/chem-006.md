---
exam: cuet
examName: CUET UG
subject: chemistry
subjectName: Chemistry
topic: chem-006
topicName: Thermodynamics
weight: 5
country: india
generated: "2026-03-24T08:32:07.838225"
lastUpdated: "2026-09-07"
diagramPrompt: "Clear scientific diagram of Thermodynamics with atom labels, molecular structure, reaction arrows, white background, color-coded bonds and groups, exam textbook style"
---

# Thermodynamics

Thermodynamics is the part of the syllabus where the **sign of the answer is the answer**. A question that looks like a calculation is usually a question about whether ΔG is positive or negative, and a question that looks conceptual is usually a sign convention. If you can predict signs reliably, you can clear the objective items even with no data; if your signs are shaky, you get every numerical wrong even with perfect arithmetic.

### 🟢 Lite — Quick Review (1h–1d)

**The equations**

| Quantity | Symbol | Formula | Unit |
| --- | --- | --- | --- |
| Internal energy change | ΔU | **ΔU = Q − W** (chemistry convention) | J mol⁻¹ |
| Enthalpy | H | H = U + PV; **ΔH = ΔU + Δn_g RT** | J mol⁻¹ |
| Entropy change | ΔS | ΔS = Q_rev/T | J K⁻¹ mol⁻¹ |
| Gibbs free energy | G | G = H − TS; **ΔG = ΔH − TΔS** | J mol⁻¹ |
| Equilibrium relation | K | **ΔG° = −RT ln K** | J mol⁻¹ |
| Carnot efficiency | η | **η = 1 − T_c/T_h** | dimensionless |
| Hess's law | — | **ΔH_rxn = Σ ΔH_f°(products) − Σ ΔH_f°(reactants)** | kJ mol⁻¹ |

- **Q** is heat absorbed by the system, **W** is work done **by** the system. Both positive when energy enters and leaves as useful work respectively.
- **State functions** (U, H, S, G, A) depend only on the initial and final states. **Path functions** (Q, W) depend on the route taken.
- **Spontaneity:** at constant T and P, a process is spontaneous if **ΔG < 0**, at equilibrium if **ΔG = 0**, non-spontaneous if **ΔG > 0**.
- **Second Law:** ΔS_universe = ΔS_system + ΔS_surroundings > 0 for any spontaneous change.
- **Third Law:** the entropy of a perfect crystal is zero at 0 K. No substance has a negative entropy.
- **Carnot efficiency** requires kelvin. η = 1 − T_c/T_h; T_c < T_h, so η < 1 always.

### 🟡 Standard — Regular Study (2d–2mo)

#### System, surroundings, and the two kinds of quantity

The **system** is the part of the universe you are studying; the **surroundings** are everything else. A system is **open** (exchanges both matter and energy), **closed** (exchanges energy only — the usual chemistry assumption), or **isolated** (exchanges neither; a good thermos flask approaches this).

**State functions** have a value fixed by the state of the system, however you got there. U, H, S, G and the Helmholtz energy A are state functions, so ΔU and ΔH for a reaction are the same whether the reaction runs directly, in two steps, or in twenty. **Path functions** Q and W are not: the same overall change can be reached with different amounts of heat and work along different routes. This distinction is the whole content of Hess's law — if ΔH were a path function you could not add equations together at all.

#### First Law and enthalpy

**ΔU = Q − W** is energy conservation written as a balance. Heat absorbed by the system is positive; work done by the system is positive. (Physics uses ΔU = Q + W, with work done *on* the system positive. Use the chemistry sign convention throughout, and quote it if a question is ambiguous.)

**Enthalpy** H = U + PV exists because most laboratory reactions run at constant pressure and constant temperature. At constant pressure, Q_p = ΔH, so the heat measured in a calorimeter is the enthalpy change. For ideal gases:

**ΔH = ΔU + Δn_g RT**, where Δn_g is moles of gaseous products minus moles of gaseous reactants.

This single relation decides a whole class of questions. If a reaction has no gases, or the same number of moles of gas on each side, **ΔH = ΔU**. If gas moles increase, ΔH is the larger (positive correction); if they decrease, ΔH is the smaller.

Worked case: 2H₂(g) + O₂(g) → 2H₂O(l) has 3 mol of gas on the left and none on the right, so Δn_g = −3 and ΔH = ΔU − 3RT. Combustion of hydrogen, ΔH ≈ −285.8 kJ mol⁻¹, is therefore more negative than ΔU by 3RT at 298 K. The classic exam pair is N₂(g) + 3H₂(g) → 2NH₃(g), with Δn_g = −2 and ΔH = ΔU − 2RT.

#### Second Law and entropy

The First Law says energy is conserved. The Second Law says energy is conserved **badly**: it always degrades, and a process that disperses energy is spontaneous. **Entropy S (J K⁻¹ mol⁻¹)** is the measure of that dispersal — of the number of ways the energy can be distributed.

- **The gas that expands fills more space and has more accessible arrangements, so ΔS > 0.** Entropy favours spreading out, not concentrating.
- **A solid melting to a liquid has ΔS > 0**, because the liquid has more accessible arrangements.
- **ΔS = Q_rev/T** for a reversible path. T must be kelvin, and the relationship is exact only for a reversible process.
- **Three units of entropy change:** a physical change (melting, boiling), a chemical reaction (a reaction producing more moles of gas, especially if from a solid or liquid), and a change of state that increases disorder (solids dissolving in water).

Entropy of the **surroundings** is ΔS_surr = −ΔH/T at constant pressure. An exothermic reaction warms the surroundings and raises their entropy, which is why nearly all exothermic reactions get some help from the surroundings — and why an exothermic reaction with a strongly negative ΔS can still fail to be spontaneous at high temperature.

#### Gibbs energy — the one criterion that answers real questions

**ΔG = ΔH − TΔS** combines enthalpy and entropy into a single number. At constant T and P, **ΔG < 0 means spontaneous**. It works for every case, including the ones where "exothermic" and "spontaneous" do not agree.

| Case | ΔH | ΔS | ΔG behaviour | Spontaneous when |
| --- | --- | --- | --- | --- |
| 1 | − | + | Always negative | At every temperature |
| 2 | + | − | Always positive | Never, at any temperature |
| 3 | − | − | ΔG = negative + positive | At **low** T only, below T = ΔH/ΔS |
| 4 | + | + | ΔG = negative + negative | At **high** T only, above T = ΔH/ΔS |

Read cases 3 and 4 as the same sentence: when ΔH and ΔS have opposite signs, ΔG changes sign at **T = ΔH/ΔS**, and ΔS always wins at high temperature because it is multiplied by the larger number. Cases 1 and 2 never cross, because raising or lowering T cannot turn a same-signed pair into the other sign.

The melting of ice is case 3, and it is worth knowing as a worked example: ΔH > 0 and ΔS > 0, so ice melts spontaneously above **T = ΔH/ΔS = 273.15 K**, which is the melting point. Purely from the sign pattern, and without ever using the words "melting point", you have found 0 °C.

#### Hess's law and enthalpies of formation

Because H is a state function, a reaction's enthalpy can be built from any route. **ΔH_rxn = Σ n ΔH_f°(products) − Σ n ΔH_f°(reactants)**, where the standard enthalpy of formation is the enthalpy change for making one mole of substance from its elements in their standard states. Elements in their standard states have **ΔH_f° = 0 by definition** — graphite, O₂, H₂, N₂, S₈, Cl₂ — which is why the term often cancels and why the equation is easy to shortcut.

The three-step mechanical routine for Hess's law questions: **reverse** an equation and flip the sign of its ΔH; **multiply** an equation and multiply its ΔH; then **add** the equations and the ΔH values, letting the intermediates cancel. Write the cancellation explicitly, because the mark is often for showing which species cancelled.

**Enthalpy of combustion** is the special case where the product is CO₂ and H₂O in their standard states. Bond enthalpies give a route to ΔH when formation data is missing: ΔH_rxn = Σ(bonds broken) − Σ(bonds formed), with broken bonds positive and formed bonds negative. Bond enthalpies are averages, so bond-enthalpy answers are approximations — the question will usually say so.

#### Calorimetry

**q = mcΔT**, where m is the mass of solution in grams, c the specific heat capacity (4.18 J g⁻¹ K⁻¹ for water, and that is the number to default to), and ΔT in K or °C — a difference, so the scale does not matter here. q = n ΔH_rxn gives the molar enthalpy change, with a **sign**: heat lost by the reaction is heat gained by the solution, so ΔH_rxn = −q_solution/n. An exothermic neutralisation warms the solution and gives a negative ΔH; an endothermic one like the dissolution of NH₄NO₃ in water cools the beaker and gives a positive ΔH.

### 🔴 Extended — Deep Study (3mo+)

#### Sign conventions, and why the same calculation can be negative in one textbook

Chemistry: ΔU = Q + W, where W is work done **by** the system. Physics: ΔU = Q + W, where W is work done **on** the system. An expanding gas does work on the surroundings, so W is negative in chemistry's convention and positive in physics's. Do not mix them within one solution, and if a question is genuinely ambiguous, say which convention you used — that sentence costs nothing and removes the ambiguity.

A second convention trap: for a process at constant pressure, the heat absorbed is Q_p = ΔH, whereas the *enthalpy released* is a negative number for an exothermic reaction. Questions that ask "how much heat is liberated" expect a positive answer, and the sign has to be reapplied at the end.

#### Worked Example 1 — Hess's law by equation manipulation

Find ΔH for C(graphite) + ½O₂ → CO, given:
- C + O₂ → CO₂, ΔH₁ = −393.5 kJ
- CO + ½O₂ → CO₂, ΔH₂ = −283.0 kJ

1. **Keep equation 1 as it is.** C + O₂ → CO₂, ΔH = −393.5 kJ.
2. **Reverse equation 2** so that CO₂ becomes CO, which is what cancels it. CO₂ → CO + ½O₂, ΔH = +283.0 kJ.
3. **Add.** Left: C + O₂ + CO₂. Right: CO₂ + CO + ½O₂. Cancel CO₂ (both sides) and ½O₂ (right against left), leaving **C + ½O₂ → CO**.
4. ΔH = −393.5 + 283.0 = **−110.5 kJ mol⁻¹**.

The cancellation step is the whole skill. If your answer has a species left over that the question did not mention, you forgot a step.

#### Worked Example 2 — Carnot efficiency and work

A Carnot engine operates between 600 K and 300 K and absorbs 2000 J from the hot reservoir.

1. η = 1 − T_c/T_h = 1 − 300/600 = 1 − 0.5 = **0.50, i.e. 50 %**.
2. W = η × Q_h = 0.50 × 2000 = **1000 J**.
3. Q_c = Q_h − W = 2000 − 1000 = 1000 J, a useful check.
4. Sanity check: a Carnot engine is the most efficient engine possible between two temperatures, so any other engine here must do **less** than 1000 J. If your real-engine number exceeds it, an arithmetic error is guaranteed.

#### Worked Example 3 — The temperature at which a reaction turns spontaneous

ΔH = +50 kJ mol⁻¹ and ΔS = +100 J K⁻¹ mol⁻¹. At what temperature does the reaction become spontaneous?

1. This is case 4 (ΔH > 0, ΔS > 0): spontaneous at high T only. Solve ΔG = 0 at the threshold: T = ΔH/ΔS.
2. **Convert units first.** ΔH = 50 kJ = 50,000 J. Using kJ over J gives T = 0.5 K, which is nonsense — that single conversion is the entire problem.
3. T = 50,000 / 100 = **500 K**.
4. Answer: non-spontaneous below 500 K, spontaneous above it, and at equilibrium at exactly 500 K.

#### Worked Example 4 — ΔG° from K

K = 1.0 × 10⁵ at 298 K. Find ΔG°.

1. ΔG° = −RT ln K = −(8.314)(298) ln(10⁵).
2. ln(10⁵) = 5 × 2.303 = 11.51.
3. ΔG° = −(2477.6)(11.51) = −2.85 × 10⁴ J mol⁻¹ = **−28.5 kJ mol⁻¹**.
4. Checks: K > 1 gives ΔG° < 0, and 298 K must be used with R in J. The magnitude is small because the reaction is not far from equilibrium.

#### Kirchhoff's law and the temperature dependence of ΔH

ΔH changes with temperature because heat capacities change. Kirchhoff's law states that at constant pressure **d(ΔH)/dT = ΔC_p**, or in discrete form **ΔH at T₂ = ΔH at T₁ + ΔC_p × (T₂ − T₁)**. Since molar heat capacities are of the order of tens of J K⁻¹ mol⁻¹ while ΔH values are of the order of tens of kJ mol⁻¹, ΔH shifts by only a few kJ over a few hundred kelvin. That is why a table of ΔH_f° values at 298 K can be used for reactions at other temperatures without serious error — and why a question asking you to use a 298 K table at 500 K is legitimate.

#### Entropy of the universe, and the honest limit of the criterion

The criterion is about the **system plus surroundings at constant T and P**. ΔS_universe = ΔS_system + ΔS_surroundings, and it must be positive for any spontaneous change. This is why a reaction that has a negative ΔS can still occur: the surroundings gain more entropy than the system loses.

What thermodynamics cannot do is tell you **how fast** a reaction will be. Diamond and graphite are both stable, graphite is thermodynamically favoured, and diamond nevertheless persists, because the activation barrier for converting one to the other is enormous. If a question seems to ask thermodynamics to explain a rate, the question is wrong or is really a kinetics question — and kinetics is a separate chapter with its own criteria.

### 🧠 Memory Anchors

```mermaid
flowchart TD
    A[A thermodynamic question] --> B[Ask: is this signs or numbers?]
    B -->|signs| C{Spontaneity at constant T and P?}
    C --> D[Delta G = Delta H - T Delta S]
    D --> E{Signs of Delta H and Delta S the same?}
    E -->|yes, both minus| F[Always spontaneous]
    E -->|yes, both plus| G[Never spontaneous]
    E -->|no, Delta H minus Delta S plus| H[Spontaneous below T = Delta H over Delta S]
    E -->|no, Delta H plus Delta S minus| I[Spontaneous above T = Delta H over Delta S]
    B -->|numbers| J{Which relation does it need?]
    J --> K[Two states, one gas: Delta H = Delta U + Delta n_g R T]
    J --> L[Several equations: Hess law, reverse and multiply then add]
    J --> M[K given: Delta G degree = -R T ln K]
    J --> N[Two reservoirs: eta = 1 - T c over T h, all in kelvin]
    J --> O[Heat and mass in a beaker: q = m c Delta T, then sign flip]
    F --> P[Confirm Delta G is negative]
    H --> P
    I --> P
```

- **"Q in, W out, ΔU = Q − W."** Heat absorbed and work done *by* the system are both positive, and the sign of the third is a minus.
- **"U is not energy, H is the heat."** U is internal energy; H is what a constant-pressure calorimeter measures, so a question giving you heat from a beaker means ΔH.
- **"Δn_g RT is the only adjustment."** ΔH = ΔU + Δn_gRT, and if Δn_g = 0 the two are equal — no work needed.
- **"Entropy likes more, not less."** More gas moles, more space, more phases spread out, all ΔS > 0.
- **"Same signs never cross."** Opposite signs cross at T = ΔH/ΔS, and entropy always wins at high T.
- **"Hess's law is bookkeeping: reverse flips, multiply scales, add cancels."** The cancellation line is worth writing every time.
- **"Elements in their standard state are zero."** ΔH_f° = 0 for graphite, O₂, H₂, N₂, S₈, Cl₂. This is a definition, not a measurement, and it shortens a lot of arithmetic.
- **"Kelvin or bust"** in Carnot efficiency and in any ΔH/ΔS quotient. And in ΔH/ΔS, match the units: kJ over J gives you a temperature that is wrong by a factor of 1000.
- **Flashcard Q&A:**
  - *Is expansion work positive in chemistry?* → negative, W is done by the system, so W < 0 and −W raises ΔU.
  - *ΔH for N₂(g) + 3H₂(g) → 2NH₃(g)?* → Δn_g = 2 − 4 = −2, so ΔH = ΔU − 2RT.
  - *Melting ice: which spontaneity case?* → case 4, ΔH > 0 and ΔS > 0, spontaneous above 273 K.
  - *Freezing water below 273 K?* → ΔH < 0, ΔS < 0, case 3, spontaneous at low T. Being exothermic is not the same as being spontaneous.
  - *K = 1?* → ΔG° = 0, the standard states are at equilibrium.
  - *Carnot η for 300 K and 150 K?* → 0.5.
  - *Specific heat capacity of water?* → 4.18 J g⁻¹ K⁻¹.
  - *Can ΔS of a perfect crystal at 0 K be negative?* → no, the Third Law sets it to exactly zero.

### 🧪 Self-Test — 8 Questions with Worked Answers

1. **Ethanol combustion has ΔH = −1367 kJ mol⁻¹ and ΔS = +138 J K⁻¹ mol⁻¹. Spontaneous at 298 K?**
   ΔG = ΔH − TΔS. Convert ΔS: 138 J K⁻¹ = 0.138 kJ K⁻¹. TΔS = 298 × 0.138 = 41.1 kJ mol⁻¹. ΔG = −1367 − 41.1 = **−1408 kJ mol⁻¹**, so it is spontaneous. Notice that both terms helped: the reaction is exothermic (favourable) and increases the number of gas moles (also favourable). Case 1 of the sign table.
2. **For C(s) + O₂(g) → CO₂(g), relate ΔH and ΔU at 298 K.**
   Δn_g = 1 − 0 = +1, so ΔH = ΔU + Δn_g RT = ΔU + RT = ΔU + (8.314)(298)/1000 = **ΔU + 2.48 kJ mol⁻¹**. Convert R to kJ because ΔH is in kJ; leaving R in J here is the standard slip. Any reaction with a different mole count of gas on each side has Δn_g ≠ 0; this one does not.
3. **2H₂(g) + O₂(g) → 2H₂O(l). Relate ΔH and ΔU, and find a case where they are equal.**
   Count only **gaseous** species. On the left there are 2 + 1 = 3 mol of gas; on the right the water is a liquid and contributes none. So Δn_g = 0 − 3 = **−3**, and ΔH = ΔU − 3RT. For contrast, the classic **N₂(g) + 3H₂(g) → 2NH₃(g)** gives Δn_g = 2 − 4 = −2, hence ΔH = ΔU − 2RT, and **H₂(g) + Cl₂(g) → 2HCl(g)** gives Δn_g = 2 − 2 = 0, so ΔH = ΔU exactly. Phase symbols decide all three, and they are the most commonly skipped part of the equation.
4. **A gas expands adiabatically and reversibly. What is ΔS_universe?**
   **Zero.** Adiabatic means q = 0, so ΔS_surroundings = 0. Reversible means no entropy is produced, so ΔS_system is also 0. An irreversible adiabatic change would give ΔS_universe > 0. A change is reversible only if it happens infinitesimally slowly through a sequence of equilibrium states, which is exactly why a real expansion generates entropy.
5. **A bomb calorimeter measures a quantity. Which one, and why?**
   It measures **ΔU**, not ΔH. The steel bomb is a rigid container, so the volume is constant and no expansion work is done: w = 0, therefore q_v = ΔU. To get ΔH you then apply ΔH = ΔU + Δn_g RT. A coffee-cup calorimeter, by contrast, works at constant pressure and gives ΔH directly. Same reaction, two calorimeters, two different quantities.
6. **Carbon burns in air. Write the thermochemical equation and the signs of ΔH, ΔS and ΔG.**
   C(graphite) + O₂(g) → CO₂(g), ΔH° = −393.5 kJ mol⁻¹. ΔH is negative (exothermic, heat released), ΔS is slightly negative because one mole of gas is consumed, and ΔG° = −394.4 kJ mol⁻¹, negative. This is the useful reminder that **ΔS can be negative for a perfectly ordinary exothermic reaction**, and it does not stop it being spontaneous — that is case 1, not case 3.
7. **K = 1.0 × 10⁵ at 298 K. Find ΔG°, and say what K = 1 would mean.**
   ΔG° = −RT ln K = −(8.314)(298)(11.51) = −28.5 kJ mol⁻¹. If K = 1, then ln 1 = 0, so ΔG° = 0 — the standard states of reactants and products are at equilibrium, and K = 1 is the exact dividing line between a product-favoured and a reactant-favoured reaction. It is the one value of K worth memorising exactly.
8. **Diamond is less stable than graphite at ordinary conditions. Why has it not all turned into graphite?**
   Thermodynamics says the conversion is spontaneous, because graphite is the lower-energy form of carbon. But thermodynamics says nothing about **rate**, and the activation barrier for rearranging the entire covalent network is enormous at room temperature. This is the standard warning: ΔG predicts what is stable, not what happens quickly, and no amount of thermodynamic knowledge will tell you a reaction rate. Kinetics is a separate chapter with separate criteria.

### 🎯 Exam Traps & Error Log

1. **Reading "heat released" as a positive ΔH.** Released heat means an exothermic reaction, so ΔH is negative. If a question asks how much heat was liberated, report the magnitude and say the reaction is exothermic.
2. **Using Celsius in η = 1 − T_c/T_h.** The ratio is meaningless unless both temperatures are absolute.
3. **Mixing kJ and J in T = ΔH/ΔS.** ΔH in kJ with ΔS in J K⁻¹ gives a temperature 1000 times too small.
4. **Forgetting that ΔH and ΔU are not interchangeable** whenever the mole number of gas changes.
5. **Assuming exothermic means spontaneous.** Freezing water below 273 K is exothermic and is spontaneous; a reaction that is exothermic with a strongly negative ΔS stops being spontaneous above a certain temperature. Sign pair decides, not ΔH alone.
6. **Computing ΔS_surr as −Q/T instead of −ΔH/T,** or forgetting the surroundings entirely. ΔS_universe, not ΔS_system, must be positive.
7. **Adding Hess's law equations without showing the cancellation,** and ending up with species that are not in the question.
8. **Forgetting to flip the sign when reversing an equation,** or forgetting to multiply ΔH when multiplying an equation.
9. **Claiming ΔH_f° is zero for a non-element**, or forgetting that carbon's standard form is graphite, not diamond — ΔH_f°(diamond) is about +1.9 kJ mol⁻¹, small but non-zero, and it is a favourite one-line question.
10. **Asking thermodynamics to predict a rate.** ΔG says whether, not how fast.
11. **Using Q_p = ΔH for a bomb calorimeter.** A bomb calorimeter works at constant volume, so what it measures is ΔU.

### 💡 Pro Tips

1. **Decide the question type before you touch the data: signs, or numbers.** A sign question needs no arithmetic at all, and reading four data values before noticing that is wasted time.
2. **Write the four sign cases on the back of your sheet** and use them for every spontaneity question, including assertion–reason items where the "reason" is usually a sign pair.
3. **In any ΔH/ΔS question, convert kJ to J first and write the conversion down.** It is the single most reliable mark in this chapter.
4. **Do Hess's law in three physical moves** — reverse, multiply, add — and cross out cancelling species as you go. Students who try to do it in their head lose track.
5. **Quote the convention in the first line of a ΔU solution** ("taking W as work done by the system"). One clause, and no ambiguity penalty.
6. **Use Δn_g = 0 as a shortcut check.** If the equation has the same moles of gas on both sides, ΔH and ΔU are the same number and you can skip the conversion entirely.
7. **Sanity-check every ΔG° against K:** K > 1 must pair with ΔG° < 0, and vice versa. Catching one sign error this way takes five seconds.
8. **Link the signs to a real case before the exam** — ice melting above 0 °C, ice melting below 0 °C, dry ice subliming, a hot cup of tea cooling. Real cases survive exam pressure better than abstract rules.

---

## Continue your study

- **[View this topic in your CUET UG roadmap](/roadmap/?exam=cuet&duration=1mo)** — see where "Thermodynamics" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=cuet&duration=1d)** — 1-day sprint covering highest-weight topics
- **[CUET UG exam overview](/exams/cuet/)** — pattern, eligibility, and syllabus
- **[All Chemistry notes](/notes/cuet/chemistry/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
