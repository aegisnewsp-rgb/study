---
exam: makerere-ent
examName: Makerere University (Uganda)
subject: chemistry
subjectName: "Chemistry"
topic: chemis-010
topicName: Topic 10
weight: 3
country: uganda
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-05-27"
---

# Topic 10

### 🟢 Lite — Quick Review (1h–1d)

**Electrochemistry** studies how electrical energy and chemical energy interconvert in electrochemical cells. Two cell types exist: a **galvanic (voltaic) cell** converts chemical energy to electrical energy via a spontaneous redox reaction, while an **electrolytic cell** uses electrical energy to drive a nonspontaneous reaction.

**Key formulas to memorise:**
- `Ecell = Ecathode − Eanode` (cell potential = difference between reduction potentials)
- `E°cell = E°reduction + E°oxidation`
- `ΔG° = −nFE°cell`
- Nernst equation: `E = E° − (RT/nF)ln Q`
- Faraday's law: `m = (Q × M) / (n × F)` where `m` = mass deposited, `Q` = charge in coulombs, `M` = molar mass, `n` = electrons per mole, `F` = 96,485 C/mol
- `Q = I × t`

**Exam tips:** In galvanic cells the anode is negative (oxidation) and the cathode is positive (reduction) — the signs flip in electrolytic cells. E° values are measured under standard conditions (1 M, 1 atm, 25 °C). E° > 0 indicates a spontaneous reaction. Paper 2 at Makerere (3 % weightage) frequently tests Nernst equation calculations and identification of half-reactions at each electrode. **Never** multiply E° by stoichiometric coefficients when adding half-reactions — but **always** multiply ΔG° values by n.

---

### 🟡 Standard — Regular Study (2d–2mo)

## Galvanic Cell — The Daniell Cell

A classic example is the Daniell cell: a **zinc electrode** dipped in ZnSO₄ solution (anode, oxidation: Zn → Zn²⁺ + 2e⁻) joined by a salt bridge to a **copper electrode** dipped in CuSO₄ solution (cathode, reduction: Cu²⁺ + 2e⁻ → Cu). Electrons flow through the external wire from Zn to Cu. The salt bridge (usually KCl or KNO₃ in a gel) maintains electrical neutrality by allowing counter-diffusion of ions.

**Calculating cell potential under standard conditions:**
```
Zn²⁺ + 2e⁻ → Zn    E° = −0.76 V
Cu²⁺ + 2e⁻ → Cu    E° = +0.34 V

E°cell = E°cathode − E°anode = (+0.34) − (−0.76) = +1.10 V
```
Since E°cell > 0, the reaction is spontaneous. For a **non-standard concentration**, apply the Nernst equation. With [Zn²⁺] = 0.1 M and [Cu²⁺] = 1.0 M:

```
Q = [Zn²⁺] / [Cu²⁺] = 0.1 / 1.0 = 0.1
n = 2,  F = 96485 C/mol,  RT/F ≈ 0.0257 V at 298 K
E = 1.10 − (0.0257/2) ln(0.1) = 1.10 + 0.0296 ≈ 1.13 V
```
Concentration shifts raise E when Q < 1.

## Electrolytic Cells

In electrolysis, an external power source forces oxidation at the positive anode and reduction at the negative cathode. The **electrolysis of aqueous NaCl** produces Cl₂ at the anode (2Cl⁻ → Cl₂ + 2e⁻) and H₂ at the cathode (2H₂O + 2e⁻ → H₂ + 2OH⁻) because their reduction potentials favour these outcomes over Na⁺ and NaOH formation. This distinction between **theoretical prediction** and **actual discharge** at electrodes is a common exam trap. Ion concentration, electrode material, and overpotential all influence which species actually discharges.

## Faraday's Laws in Electrolysis

**Law 1:** Mass depositied (m) is proportional to charge passed: `m ∝ Q`. **Law 2:** For the same Q, m is proportional to molar mass M divided by n (valence change): `m = (Q × M) / (n × F)`.

**Worked numeric:** Calculate the mass of copper deposited when 2.0 A flows through CuSO₄ for 30 minutes.
- `Q = I × t = 2.0 × 1800 = 3600 C`
- Cu²⁺ + 2e⁻ → Cu, so `n = 2`, `M = 63.5 g/mol`
- `m = (3600 × 63.5) / (2 × 96485) = 228600 / 192970 ≈ 1.18 g`

**Common mistake to avoid:** Confusing the anode and cathode polarities. In galvanic cells, E° values themselves determine cathode/anode assignment — but in electrolytic cells the external power source **imposes** the opposite polarity.

---

### 🔴 Extended — Deep Study (3mo+)

## Connecting Electrochemistry to Thermodynamics

The link between cell potential and Gibbs free energy is `ΔG = −nFEcell`. At standard conditions: `ΔG° = −nFE°cell`. Because E° is an **intensive property** (does not scale with reaction quantity), it directly predicts spontaneity without needing the balanced equation coefficients. This contrasts with ΔG°, which is extensive.

The standard cell potential also connects to the equilibrium constant via:
```
nFE°cell = RT ln K    or    log K = nE°cell / 0.0592 V (at 298 K)
```
For the Daniell cell (E° = 1.10 V, n = 2): `log K = 2(1.10)/0.0592 ≈ 37.2`, giving `K ≈ 1.6 × 10³⁷`. An astronomically large K confirms the reaction proceeds essentially to completion.

## Concentration Cells and pH Determination

A concentration cell has identical electrodes but different ion concentrations. The EMF depends only on the concentration ratio via:
```
E = (0.0592/n) log ([anode]/[cathode])  (at 298 K)
```
This principle underlies pH meters: a hydrogen electrode immersed in solutions of different [H⁺] generates a measurable potential proportional to the pH difference. The **glass electrode** (a hydrogen ion-selective membrane) exploits the same Nernstian response: `E = E° − (0.0592) pH`.

## Concentration Polarisation and Overpotential

In real electrolytic cells, **overpotential** (η) is the extra voltage beyond the theoretical value required to sustain a given current density. It arises from activation energy barriers at the electrode–electrolyte interface and concentration gradients near the electrodes. The actual decomposition voltage is `Edecomp = E°cell + ηanode + ηcathode`. This is particularly significant in industrial electrolyses (chloro-alkali process, aluminium extraction via Hall-Héroult) and explains why the discharge of competing ions (e.g., H₂ vs. Na⁺ during NaCl electrolysis) does not always follow reduction-potential rankings alone.

**Common mistakes examined at Makerere:**
1. **Sign reversal on Q:** In the Nernst equation, Q uses the reaction quotient with products/ reactants in the same order as the cell reaction — inserting Q inverted flips the result.
2. **Using E° for concentration-dependent predictions:** E° applies only at 1 M; once concentrations change, recalculate with Nernst — never use E° as a shortcut for non-standard conditions.
3. **Assuming E° = 0 for identical half-cells:** This is only true for concentration cells under the same conditions; even small concentration differences generate measurable potentials.

## Practice Prompts
1. A galvanic cell uses the reaction: Fe²⁺(aq) + Ce⁴⁺(aq) → Fe³⁺(aq) + Ce³⁺(aq). Given E°(Ce⁴⁺/Ce³⁺) = +1.44 V and E°(Fe³⁺/Fe²⁺) = +0.77 V, calculate E°cell and determine whether the reaction is spontaneous under standard conditions.
2. During electrolysis of 1.0 M CuSO₄ using a platinum cathode, a current of 0.50 A flows for 1 hour. Calculate the mass of copper deposited and a the volume of O₂ gas liberated at the anode (at STP: 1 mol gas ≈ 22.4 L). The anode reaction is 2H₂O → O₂ + 4H⁺ + 4e⁻.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
