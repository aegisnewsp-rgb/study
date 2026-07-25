---
exam: makerere-ent
examName: Makerere University (Uganda)
subject: chemistry
subjectName: "Chemistry"
topic: chemis-009
topicName: Electrochemistry
weight: 3
country: uganda
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-25"
---

# Electrochemistry

### 🟢 Lite — Quick Review (1h–1d)

**Electrochemistry** studies how chemical reactions produce or consume electrical energy. In **galvanic cells** (voltaic), a spontaneous redox reaction generates electricity; in **electrolytic cells**, electrical energy drives a non-spontaneous reaction.

**Key formulas to memorise:**
- **E°cell = E°cathode − E°anode** (predicts if a reaction is spontaneous)
- **ΔG° = −nFE°cell** (links free energy to cell potential; n = moles of electrons, F = 96,485 C mol⁻¹)
- **E = E° − (RT/nF)ln Q** — the Nernst equation for non-standard conditions (use ln, not log₁₀)
- **m = (Q × M) / (n × F)** — mass deposited by electrolysis (Faraday's 1st law)

**Quick pointers for the Makerere exam:**
- **Anode = oxidation** (loss of electrons), **cathode = reduction** (gain of electrons). Polarity reverses between galvanic and electrolytic cells — trap question.
- Always multiply E° by n when building the overall reaction; do not multiply E°cell itself.
- The sign of E°cell determines spontaneity: positive = spontaneous.
- Salt bridges maintain charge neutrality; KNO₃ or NaNO₃ are common choices.

---

### 🟡 Standard — Regular Study (2d–2mo)

## What Is an Electrochemical Cell?

An electrochemical cell contains two electrodes immersed in electrolytes. **Galvanic cells** convert chemical energy to electrical energy — the Daniell cell (Zn|Zn²⁺ || Cu²⁺|Cu) is the textbook example. **Electrolytic cells** do the reverse, using external power to drive a chemical change.

### Anode and Cathode by Function

| Electrode | Process | Mnemonic |
|---|---|---|
| Anode | Oxidation (loss of e⁻) | **A**node = **A**n oxidation |
| Cathode | Reduction (gain of e⁻) | **C**athode = **C**atch electrons |

A critical reversal: in galvanic cells the anode is **negative** (electrons build up), while in electrolytic cells the anode is **positive** (external source pulls electrons).

### Standard Electrode Potentials

Standard potentials (E°) are measured at **298 K, 1 M, 1 atm**. The more **positive** E°, the stronger the oxidising agent (more readily reduced). The cell potential:

$$E°_{cell} = E°_{cathode} - E°_{anode}$$

Example: Cu²⁺/Cu has E° = +0.34 V; Zn²⁺/Zn has E° = −0.76 V. For the Daniell cell:
E°cell = (+0.34) − (−0.76) = **+1.10 V** (spontaneous).

### Nernst Equation

For non-standard concentrations:
$$E = E° - \frac{RT}{nF}\ln Q$$

At 298 K this simplifies to: **E = E° − (0.0592/n)log₁₀ Q**.

### Electrolysis: Faraday's Laws

- **First law:** mass m deposited = (M × Q) / (n × F), where M = molar mass, Q = charge in coulombs.
- **Second law:** same charge deposits equivalent moles of electrons from different substances.

Charge Q = I × t (current × time in seconds).

### Predicting Redox Reactions

If E°cell > 0, the reaction proceeds as written (galvanic mode). If E°cell < 0, the reverse reaction is spontaneous.

---

### 🔴 Extended — Deep Study (3mo+)

## Mechanism: Why Do Metals Have Different Potentials?

Standard electrode potentials arise from the **tendency of a metal to lose electrons** in aqueous solution. Metals with very negative E° (Na, Ca) are readily oxidised — they hold their electrons loosely. Metals with very positive E° (Au, Pt) resist oxidation. This behaviour underlies the **galvanic series**: a ranking of metals by reduction potential that predicts which metal will corrode in a given environment. Iron corrodes (Fe → Fe²⁺ + 2e⁻) when coupled to a more noble metal.

## The Salt Bridge: Not Just a Conduit

A salt bridge (usually KNO₃ or NH₄NO₃ — ions that do not precipitate with cell electrolytes) completes the circuit by:
1. Allowing ion migration to maintain charge neutrality
2. Preventing direct mixing of half-cell solutions

Without it, charge builds up rapidly and the cell dies. In laboratory cells, a porous pot or membrane can substitute.

## Common Exam Mistakes at This Level

- **Reversing E°cell polarity:** Students calculate E°cell then flip the sign to get ΔG°, compounding error. Remember ΔG° = −nFE°cell directly — the sign is already handled.
- **Wrong n in Nernst:** The n in the Nernst equation equals the **total electrons transferred** in the balanced cell reaction, not the electrons at a single electrode. For the reaction 2Fe³⁺ + Sn → 2Fe²⁺ + Sn²⁺, n = 2 (even though Fe³⁺/Fe²⁺ is a 1-electron couple).
- **Concentrating Q vs [ ]:** In the Nernst equation Q is the **reaction quotient** — products raised to stoichiometric coefficients over reactants. Write the balanced equation first.

## Worked Example

Calculate E for the cell Fe|Fe²⁺(0.01 M)||Cu²⁺(0.1 M)|Cu at 298 K.
- E°cell = E°Cu²⁺/Cu − E°Fe²⁺/Fe = (+0.34) − (−0.44) = +0.78 V
- Reaction: Fe(s) + Cu²⁺ → Fe²⁺ + Cu(s); n = 2
- Q = [Fe²⁺]/[Cu²⁺] = 0.01/0.1 = 0.1
- E = 0.78 − (0.0592/2)log(0.1) = 0.78 − (0.0296)(−1) = **0.81 V**

## Practice Prompts

1. A copper electrode in 0.5 M AgNO₃ deposits silver. Write the cell notation, calculate E°cell, and predict whether the reaction is spontaneous.
2. How many grams of aluminium are deposited by 5,000 C passing through molten Al₂O₃? (M_Al = 27 g mol⁻¹, n = 3)

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
