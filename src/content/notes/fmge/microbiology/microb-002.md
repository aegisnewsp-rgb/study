---
exam: fmge
examName: FMGE
subject: microbiology
subjectName: Microbiology
topic: microb-002
topicName: "Bacterial Growth, Nutrition & Culture Media"
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-07-12"
---

# Bacterial Growth, Nutrition & Culture Media

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your FMGE Microbiology paper.

Bacteria multiply by **binary fission**, doubling at a fixed **generation (doubling) time** (g) — *E. coli* clones every ~20 min in broth, while most pathogens (TB, *Salmonella*) take 12–24 h. Population follows **N_t = N₀ × 2ⁿ**, with **n = t / g** and **specific growth rate μ = 0.693 / g**.

A closed batch culture traces four phases on a graph: **lag → log → stationary → death**. Nutritional classes split by carbon (autotroph/heterotroph) and energy source (photo-/chemotroph). Oxygen need splits bacteria into obligate aerobes, obligate anaerobes, facultative anaerobes, microaerophiles, and capnophiles (need 5–10% CO₂).

| Medium type | Classic example | Use |
|---|---|---|
| General-purpose | Nutrient agar | Routine growth |
| Enriched | Blood / Chocolate agar | Fastidious pathogens |
| Selective & differential | MacConkey, EMB | Enteric isolates |
| Transport | Cary-Blair, Amies | Specimen transit |

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students building durable recall for FMGE Microbiology.

#### Growth curve in batch culture
In a sealed flask (no inflow/outflow), a bacterial population traces four phases plotted as log₁₀ viable count vs time. During **lag phase**, cells adapt enzymes, ribosomes, and transporters without dividing. In the **log phase**, cells divide at the maximum rate defined by g. The **stationary phase** begins as nutrients deplete and toxic metabolites (acid, H₂O₂) accumulate — viable count plateaus. In the **death phase**, viability drops exponentially because lysis exceeds any residual replication.

> **Tip:** LAG = no increase, LOG = straight line on log plot, STATIONARY = flat top, DEATH = straight descending line.

#### Generation-time math
Generation time g (minutes) is the population doubling time. Direct formula: **g = t / n**. If log viable counts are linear, use the statistical mean: **g = (t₂ − t₁) / [3.3 × log₁₀(N₂ / N₁)]**. Specific growth rate **μ = 0.693 / g (h⁻¹)**, and from log to log, **ln N_t = ln N₀ + μ t**.

#### Nutritional and oxygen classifications
| Class | Carbon source | Energy source | Example |
|---|---|---|---|
| Chemoheterotroph | Organic | Chemical | *E. coli* |
| Photoautotroph | CO₂ | Light | Cyanobacteria |
| Chemolithotroph | CO₂ | Inorganic chemical | Thiobacillus |

| Oxygen class | Growth pattern | Example |
|---|---|---|
| Obligate aerobe | Only with O₂ | *Mycobacterium tuberculosis* |
| Obligate anaerobe | Killed by O₂ | *Clostridium tetani* |
| Facultative anaerobe | Aerobic or anaerobic | *E. coli* |
| Microaerophile | 5% O₂ | *Campylobacter*, *Helicobacter* |
| Capnophile | 5–10% CO₂ | *Neisseria gonorrhoeae* |

> **Trap:** FMGE often lists "*N. gonorrhoeae* requires chocolate agar in a candle-extinction jar" — that delivers 3–5% CO₂ plus reduced O₂.

#### Culture media essentials
**Agar** (1.5–2% from red algae) melts at ~100 °C and gels at ~45 °C; most bacteria cannot degrade it. **Peptone** supplies amino acids and peptides as bulk C/N. Common media include **Nutrient agar** (routine), **Blood agar** (enriched, also shows α-, β-, γ-hemolysis), **Chocolate agar** (heated blood, releases NAD/Haemin for *Neisseria*, *Haemophilus*), **MacConkey agar** (bile salts + crystal violet inhibit Gram-positives; lactose fermenters turn pink), **TCBS** (selects *Vibrio cholerae*), **LJ medium** (selects *M. tuberculosis*), **Thioglycollate broth** and **Robertson's cooked meat** for anaerobes, and **Cary-Blair / Stuart / Amies** for specimen transport. **McFarland 0.5 standard ≈ 1.5 × 10⁸ CFU/mL** is used to standardize inoculum before susceptibility testing.

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students chasing high-yield clinical integration.

#### Synchronous and continuous culture
A **synchronous culture** divides in step (obtained by cold shock, thymidine block, or size selection), allowing study of individual cell-cycle events. A **chemostat** maintains a **continuous culture** at steady-state density by continuously feeding fresh medium at dilution rate D; cells wash out when D exceeds μ_max. The steady-state viable count N = k / D, where k is a medium-dependent constant — useful to derive generation time in *M. tuberculosis* and other slow growers.

#### Edge cases and high-yield traps

| Bacteria | Hidden constraint | Required medium |
|---|---|---|
| *Mycoplasma pneumoniae* | Lacks cell wall, needs cholesterol | Eaton agar (cholesterol-supplemented) |
| *Chlamydia trachomatis* | Obligate intracellular | McCoy / HeLa cell culture |
| *Rickettsia prowazekii* | Obligate intracellular | Embryonated yolk sac or Vero cells |
| *Leptospira interrogans* | Aerobic, slow, lipid-loving | EMJH / Fletcher medium at 28–30 °C |
| *Campylobacter jejuni* | Microaerophilic, thermophilic | Skirrow / Campy agar at 42 °C |

> **Tip:** *Mycoplasma* lacks a cell wall — β-lactams are inherently inactive and penicillin contamination in media does not kill it (it does kill everything else).

#### CFU enumeration and common errors
Viable counts (CFU/mL) only count replicating units; chains like *Streptococcus* and clumps underestimate true cell density because a colony may arise from >1 cell. Heat-killing is described by **thermal death point** (lowest temp/time killing all cells in 10 min) and **thermal death time** (time to sterilize at a given temp) — both logarithmic with temperature. Decimal reduction time **D = time to reduce viable count 10-fold at constant T** is the engineering analog of g.

#### Practice prompts:
1. A broth culture yields log₁₀ CFU = 4.2 at t₁ = 2 h and 6.0 at t₂ = 5 h. Calculate g in minutes and μ in h⁻¹ (answer: g ≈ 25 min, μ ≈ 1.66 h⁻¹).
2. Identify the medium AND its oxygen/CO₂ class for isolating *Neisseria gonorrhoeae* from a urethral swab transported to a distant lab (Chocolate agar with 5–10% CO₂; transported in Amies medium).

## Continue your study

- **[View this topic in your FMGE roadmap](/roadmap/?exam=fmge&duration=1mo)** — see where "Bacterial Growth, Nutrition & Culture Media" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=fmge&duration=1d)** — 1-day sprint covering highest-weight topics
- **[FMGE exam overview](/exams/fmge/)** — pattern, eligibility, and syllabus
- **[All Microbiology notes](/notes/fmge/microbiology/)** — browse sibling topics in this subject

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
