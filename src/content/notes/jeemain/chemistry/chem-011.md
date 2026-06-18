---
exam: jeemain
examName: JEE Main
subject: chemistry
subjectName: Chemistry
topic: chem-011
topicName: Surface Chemistry
weight: 3
country: india
generated: "2026-03-28T21:09:48"
lastUpdated: "2026-06-18"
---

# Surface Chemistry

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Surface chemistry** studies processes that occur at the boundary between two phases. The two master terms to lock in are **adsorption** (accumulation of a species at the *surface* of a solid or liquid) and **absorption** (uniform penetration into the *bulk*); their sum is called **sorption**. The Freundlich isotherm **x/m = k·P^(1/n)** and the Langmuir isotherm **x/m = a·P/(1+b·P)** are the two equations that appear most often in numericals. Adsorption is **exothermic** (ΔH < 0), so an increase in temperature *decreases* physical adsorption but may *increase* chemical adsorption past the activation barrier. Colloids are identified by the **Tyndall effect** (scattering of light by particles 1–1000 nm) and stabilised by **Brownian motion** plus like-charged surfaces. For coagulation, remember the **Hardy–Schulze rule**: the coagulating ion must carry the **opposite charge**, and its **coagulation power ∝ valency**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Physisorption vs Chemisorption
| Property | **Physisorption** | **Chemisorption** |
|---|---|---|
| Enthalpy (ΔH) | 20–40 kJ mol⁻¹ (van der Waals) | 40–400 kJ mol⁻¹ (chemical bond) |
| Layers | Multi-layer | Mono-layer |
| Specificity | Non-specific | Highly specific |
| Reversibility | Reversible | Often irreversible |
| Effect of T | Decreases with rising T | May rise, then fall (activated) |
| Activation energy | Nil | Appreciable Eₐ |

#### Adsorption Isotherms
**Freundlich (empirical):** x/m = k·P^(1/n), where *x* is mass adsorbed, *m* is mass of adsorbent, P is equilibrium pressure, k and n are constants (1/n lies between 0 and 1). Taking logs gives a straight line: **log(x/m) = log k + (1/n) log P**, the form used in JEE plots. It fails at high P (predicts continuous rise).

**Langmuir (theoretical):** x/m = a·P/(1+b·P), derived from the postulates: (i) fixed number of identical sites, (ii) mono-layer coverage, (iii) no lateral interaction, (iv) dynamic equilibrium between adsorption and desorption. Its linear form **P/(x/m) = 1/(a·b) + P/a** lets you read off a (saturation uptake) and b (adsorption constant) from slope/intercept.

#### Classification of Colloids
- **Lyophilic** (solvent-loving, e.g. gum, starch, proteins): thermodynamically stable, reversible, viscous; coagulated only by adding a non-solvent + electrolyte.
- **Lyophobic** (solvent-hating, e.g. metals, metal sulphides): need a stabiliser, irreversible, easily coagulated.
- **Associated colloids:** electrolytes (e.g. sodium stearate) that behave as normal solutes below the **Critical Micelle Concentration (CMC)** and form **micelles** above it. CMC ≈ 10⁻³–10⁻² mol L⁻¹ for soaps.

#### Coagulation and the Hardy–Schulze Rule
The **coagulation value** is the minimum millimolar concentration of an electrolyte needed to coagulate a sol in 2 hours. Coagulation power ∝ 1/coagulation value ∝ **valency of the effective ion**. For a negative sol (As₂S₃), the order is Al³⁺ > Mg²⁺ > Na⁺; for a positive sol (Fe(OH)₃), it is PO₄³⁻ > SO₄²⁻ > Cl⁻.

#### Catalysis
A **catalyst** lowers the activation energy of the rate-determining step without altering ΔG. In **heterogeneous catalysis** (e.g. Haber process on Fe, H₂ + vegetable oil on Ni) the five-step mechanism is: diffusion → adsorption → surface reaction → desorption → diffusion away. A **promoter** enhances activity (Mo in Fe for Haber) whereas a **poison** (H₂S, CO) blocks active sites. **Enzymes** are biological catalysts whose activity peaks at an optimum pH and temperature.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Sign Convention and Spontaneity
Adsorption decreases surface free energy and frees one translational degree of the adsorbed molecule, so ΔS < 0 and ΔH < 0. Substituting in ΔG = ΔH − TΔS, the negative ΔH dominates only at low T, hence physisorption is favoured at low temperature and high pressure. The **Traube rule** states that for homologous fatty acids on water, k in the Freundlich equation multiplies by roughly a factor of three for each –CH₂– group added, because the longer chain reduces surface tension more effectively.

#### Edge Cases on the Langmuir Isotherm
At very low P, x/m ≈ a·P, so the plot is linear. At very high P, x/m → a/b = x_m, the saturation monolayer capacity. The constant **b = k_ads/k_des** carries units of pressure⁻¹, so it must be reported with its reference temperature. **BET theory (Brunauer–Emmett–Teller)** extends Langmuir to multilayer adsorption and is the workhorse for measuring the **specific surface area** of catalysts using N₂ adsorption at 77 K; the BET plot of P/[V(P₀ − P)] versus P/P₀ gives a straight line in the range 0.05 < P/P₀ < 0.35.

#### Emulsions, Gels and Foams
**Emulsions** are liquid-in-liquid colloids classified O/W (milk, vanishing cream) or W/O (butter, cold cream), stabilised by an **emulsifier** (e.g. soap, casein). Bancroft's rule states that the phase in which the emulsifier is more soluble becomes the dispersion medium. **Gels** are semi-solid lyophilic colloids (jellies, silica gel); loss of water on standing is called **syneresis**, and reversible sol–gel conversion on shaking is **thixotropy**. Foams are gas-in-liquid/solid colloids stabilised by surfactants and proteins (e.g. beaten egg white, froth flotation).

#### Practice Prompts
1. *Numerical:* 2.0 g of charcoal adsorbs 20 mg of acetic acid at 1 bar and 20 mg at 4 bar. Calculate the Freundlich constants k and 1/n. (Hint: solve two simultaneous equations from the linear log–log plot.)
2. *Reasoning:* An As₂S₃ sol is negatively charged. Rank the coagulating power of NaCl, BaCl₂ and AlCl₃ on an equimolar basis and justify using the Hardy–Schulze rule. Then state what happens when light is shone through the sol and explain the observation.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
