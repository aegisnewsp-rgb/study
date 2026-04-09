---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-005
topicName: "Manufacturing Engineering — Casting and Welding"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Manufacturing Engineering — Casting and Welding

Casting and welding are fundamental manufacturing processes tested heavily in GATE ME. Casting questions focus on **defect analysis**, **solidification**, and **mold design**, while welding questions cover **process types**, **heat-affected zone (HAZ)**, and **NDT methods**. Expect 3–6 marks from this topic, often with applied numerical or conceptual questions.

---

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Casting Defects — Key Types:**

| Defect | Cause | Prevention |
|--------|-------|------------|
| **Shrinkage** | Solidification contraction | Add risers, proper feed |
| **Porosity** | Gas evolution, trapped air | Proper venting, degassing |
| **Cold shut** | Two streams meeting cold | Increase pouring temp |
| **Misrun** | Metal solidifies before filling | Increase pouring temp |
| **Hot tear** | Stresses during solidification | Design proper modulus |

**Solidification:**
- Solidification time: $t = C \cdot (V/A)^2$ (Chvorinov's rule)
- Dendrite growth: columnar or equiaxed grains
- Directional solidification: riser at top, sprue at bottom → feed metal to shrinkage

**Welding Processes:**

| Process | Heat Source | Application |
|---------|-------------|-------------|
| **SMAW** (Arc) | Electric arc | Structural steel, repair |
| **GMAW** (MIG) | Continuous wire + gas | Auto, sheet metal |
| **TIG** (TIG) | Tungsten electrode | Aerospace, Al, SS |
| **SAW** | Flux + wire | Thick plates, pipes |
| **Resistance** | Resistance heating | Sheet metal, automotive |

**Heat-Affected Zone (HAZ):** The region adjacent to weld metal where base metal microstructure changes due to thermal cycle. Not the weld metal itself.

⚡ **Exam Tip:** For casting problems, **Chvorinov's rule** is frequently tested: $t = B \cdot (V/A)^n$ where $n \approx 2$.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

## Casting — Solidification and Mold Design

### Solidification of Metals

Metals solidify in two stages:
1. **Nucleation:** Initial grains form at mold walls (chill crystals)
2. **Growth:** Dendrites extend into liquid, forming columnar or equiaxed structure

**Grain structure zones:**
- Chill zone: Fine equiaxed grains at surface (high nucleation rate)
- Columnar zone: Elongated grains growing toward center
- Equiaxed zone: Central region with random orientation

**Dendrite Arm Spacing (DAS):** Affects mechanical properties — finer DAS (faster cooling) gives better properties.

### Chvorinov's Rule — Solidification Time

$$t = B \cdot \left(\frac{V}{A}\right)^n$$

Where:
- $V$ = volume of casting
- $A$ = surface area in contact with mold
- $B$ = mold constant (depends on material, superheat)
- $n \approx 1.5$ to 2

**Practical use:** Riser design — riser must solidify *after* the casting to feed shrinkage. Apply Chvorinov's rule to both casting and riser.

### Riser Design

**Riser requirements:**
- Volume: Enough liquid metal to compensate for solidification shrinkage
- Solidification time: $t_{riser} > t_{casting}$ (must solidify last)
- Shape: Cylindrical or spherical (minimum $A/V$ ratio)

**Riser Efficiency:** $\eta = (V/A)_{riser}/(V/A)_{casting}$ — higher is better (spherical most efficient).

**Module method:** Module $M = V/A$. Riser module should be ~20% larger than casting module.

### Gating System

**Purpose:** Deliver liquid metal to mold cavity without turbulence, erosion, or gas entrainment.

**Components:**
1. Pouring basin → controls flow rate
2. Sprue → vertical channel, should be tapered (wider at top)
3. Runner → horizontal distribution channel
4. Gate → entrance to mold cavity

**Gating ratio** (for horizontal/vertical flow):
- Against pressure: $A_{gate} < A_{runner} < A_{sprue}$ (prevents backflow)
- For safety against aspiration: $A_{gate} > A_{runner}$

## Welding — Processes and Metallurgy

### Arc Welding Processes

**Shielded Metal Arc Welding (SMAW):**
- Consumable electrode (flux coated)
- Manual process
- Good for structural steel, repair work

**Gas Metal Arc Welding (GMAW/MIG):**
- Continuous wire electrode
- Inert/shielding gas (Ar, He for Al; CO₂ for steel)
- High deposition rate, automated

**Gas Tungsten Arc Welding (TIG/GTAW):**
- Non-consumable tungsten electrode
- Inert gas shield (Ar, He)
- Highest quality weld, precision applications
- Requires filler rod addition

**Submerged Arc Welding (SAW):**
- Granular flux covers arc
- High weld quality, fast, deep penetration
- Automatic process

### Heat-Affected Zone (HAZ)

HAZ is the base metal that undergoes microstructural changes due to welding thermal cycle:

**Grain coarsening zone:** Adjacent to weld fusion line. Coarse grains → reduced toughness.

**Grain refined zone:** Further from fusion line. Fine grains → improved properties.

**Intercritical zone:** Partial transformation region.

**HAZ softening** occurs in work-hardened or precipitation-hardened alloys.

### Weld Metal Microstructure

- **Fusion zone:** Solidifies as columnar dendrites (cast structure)
- **HAZ:** Experiences peak temperature gradient from $T_m$ to $T_{AC1}$
- **Base metal:** Unaffected region

**Hardness distribution:** Maximum hardness at fusion line (for steels), drops as distance increases.

## Brazing and Soldering

### Brazing

- Joint clearances: 0.025–0.125 mm (capillary action draws filler)
- Filler melts above 450°C but below base metal melting point
- No melting of base metals
- Types: Torch, furnace, induction, dip brazing

**Brazing filler metals:**
- Copper-zinc (brass brazing)
- Silver alloys (for SS, tool steels)
- Nickel alloys (high temp)
- Aluminum-silicon (for Al)

### Soldering

- Process similar to brazing but filler melts below 450°C
- Tin-lead (traditional) — Pb-free now required (Sn-Ag-Cu alloys)
- Applications: Electronics, sheet metal, plumbing
- Fluxes: Rosin (R), rosin activated (RMA), no-clean

**⚠️ Key difference:** Brazing uses stronger joints and higher temperatures; soldering is for electronics and leak-tight joints.

## Non-Destructive Testing (NDT)

### Liquid Penetrant Testing (PT)

- Detects surface and near-surface defects
- Process: Clean → Apply penetrant → Remove excess → Apply developer → Inspect
- **Limitation:** Surface only, requires rough surface to trap penetrant

### Magnetic Particle Testing (MT)

- Detects surface and slightly subsurface defects in ferromagnetic materials
- Process: Magnetize → Apply particles → Inspect
- **Limitation:** Only works on ferromagnetic materials

### Ultrasonic Testing (UT)

- Uses high-frequency sound waves (1–10 MHz)
- Detects internal defects, measures thickness
- Pulse-echo technique: $d = vt/2$
- Can locate and size defects

### Radiographic Testing (RT)

- X-rays or gamma rays
- Detects internal defects (porosity, cracks, inclusions)
- Film density relates to thickness
- Safety hazard (radiation)

### Eddy Current Testing

- Detects surface/subsurface defects in conductors
- Uses electromagnetic induction
- Applications: Tube inspection, surface crack detection

### Dye Penetrant vs Magnetic Particle

| Feature | PT | MT |
|---------|-----|-----|
| Defect detection | Surface, open to surface | Surface, near surface |
| Material | Any | Ferromagnetic only |
| Sensitivity | Good for cracks | Excellent for linear defects |
| Surface prep | Required | Required |

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

## Solidification — Dendrite Growth and Segregation

### Dendrite Growth Theory

During solidification, solute partitioning occurs at the solid-liquid interface:

**Partition coefficient:** $k = C_s/C_l$ (solid/liquid concentration ratio)

- $k < 1$: Solute rejected into liquid (most alloying elements)
- $k > 1$: Solute taken into solid (e.g., carbon in some steels)

**Constitutional supercooling:** Required for stable planar interface to break down into dendrites.

### Microsegregation

Within a dendrite:
- Core: First to solidify, lower solute
- Interdendritic region: Later solidification, higher solute

**Homogenization:** Diffusion in solid state at high temperature can reduce segregation (requires long times).

### Macrosegregation

- **Centerline shrinkage:** Shrinkage during solidification draws liquid from center → solute-rich liquid replenishes → center becomes solute-rich
- **Gravity segregation:** Heavy phases settle or float during solidification

## Welding — Thermal Analysis

### Heat Input

$$Q = \eta \cdot \frac{V \cdot I}{v}$$

Where:
- $V$ = arc voltage (V)
- $I$ = current (A)
- $v$ = travel speed (mm/s)
- $\eta$ = efficiency (0.5–0.9 depending on process)

### HAZ Peak Temperature Distribution

At distance $y$ from fusion line:
$$T_{peak} - T_0 = \frac{Q}{2\pi k(T_{peak} - T_0)} \cdot \frac{1}{y}$$

**Cooling rate at a given temperature:**
$$\frac{dT}{dt} = 2\pi k \frac{(T - T_0)^3}{Q}$$

### HAZ Microstructure in Steels

**Grain coarsened zone (adjacent to fusion line):**
- Austenite grain growth
- Coarse prior austenite grains
- Can lead to HAZ softening in some alloys

**Intercritical zone (500–727°C for hypoeutectoid):**
- Partial austenitization
- Hard and soft regions coexist
- Often weakest zone in low-alloy steels

**Fine grained zone (near AC1):**
- Unaffected or grain-refined austenite
- Good properties

### Weld Metal Properties

- Strength: Often equals or exceeds base metal
- Toughness: Lower (cast dendrite structure)
- Ductility: Lower than base metal
- Corrosion resistance: May be lower (if shielding is inadequate)

## Casting Defects — Detailed Analysis

### Shrinkage Cavities

- **Microporosity:** Fine distributed pores due to interdendritic shrinkage
- **Macroporosity:** Gross shrinkage defects in isolated regions

**Prevention:**
- Proper riser design (size, placement)
- Directional solidification (chill bars, insulation)
- Pressurized feeding (in die casting)

### Gas Porosity

- **Dissolved gases:** H₂, N₂, O₂ in liquid metal
- **Reaction gases:** CO, CO₂, H₂O vapor from mold materials

**Prevention:**
- Degassing (N₂ purge, vacuum)
- Low-moisture raw materials
- Proper mold coating
- Controlled cooling rate

### Hot Tears (Hot Cracking)

**Mechanism:** Stresses develop during solidification when metal is weak (mushy state). If stresses exceed strength at solidus temperature, cracking occurs.

**Susceptible conditions:**
- Complex geometry with varying section thickness
- High restraint during cooling
- Low melting point impurities at grain boundaries

**Prevention:**
- Design changes (uniform sections)
- Add support (chills, risers)
- Modify composition (add Mn, reduce S)

### Mold-Metal Interactions

- **Penetration:** Metal enters mold grain boundaries → surface roughness
- **Reaction:** Chemical reaction between metal and mold → non-metallic inclusions
- **Burn-on:** Severe metal-mold reaction → metal fusion with mold surface

## Fusion Welding Processes — Advanced

### Friction Stir Welding (FSW)

- Solid-state process (no melting)
- Rotating tool with pin and shoulder
- Shoulder provides heat, pin stirs material
- Applications: Al alloys (aerospace, marine, rail)
- **Advantage:** No distortion, excellent mechanical properties

### Laser Beam Welding (LBW)

- High energy density (10⁶–10⁸ W/cm²)
- Deep penetration, narrow weld
- High speed, minimal HAZ
- Applications: Automotive, electronics, thin sheet

### Electron Beam Welding (EBW)

- Vacuum process
- Very high energy density
- Deep penetration, minimal distortion
- Applications: Aerospace, nuclear (vacuum required)

## NDT — Advanced Methods

### Acoustic Emission Testing

- Passive method (detects stress waves from growing defects)
- Online monitoring during pressure testing
- Detects active cracking

### Thermography

- Infrared imaging detects surface temperature variations
- Subsurface defects show as temperature anomalies
- Active (外部热源) or passive

### Shearography

- Laser interferometry detects surface strain changes
- Sensitive to subsurface defects
- Used for composite inspection

## Example Problem

**GATE 2022 (ME) Style:**
A cylindrical riser of 10 cm diameter and 15 cm height is used for a steel casting. Determine if the riser will feed the casting properly if the casting volume is 0.01 m³ and surface area is 0.5 m². Solidification time ratio should be at least 1.2.

*Solution approach:*
1. Riser volume: $V_r = \pi \times (0.05)^2 \times 0.15 = 1.18 \times 10^{-3}$ m³
2. Riser surface area: $A_r = 2\pi r h + 2\pi r^2 = 2\pi(0.05)(0.15) + 2\pi(0.05)^2 = 0.047 + 0.016 = 0.063$ m²
3. Module: $M_r = V_r/A_r = 1.18 \times 10^{-3}/0.063 = 0.0187$ m
4. Casting module: $M_c = V_c/A_c = 0.01/0.5 = 0.02$ m
5. $M_r/M_c = 0.935 < 1.2$ → Riser solidifies before casting — **INADEQUATE**
6. Increase riser size or use spherical riser

**⚡ GATE Tip:** Always compare riser module to casting module. Riser module must be larger to ensure it solidifies last and provides feed metal throughout.

---

## Previous Year GATE Pattern

| Year | Topic Focus | Marks |
|------|-------------|-------|
| 2023 | Solidification, riser design | 3 |
| 2022 | HAZ, welding processes | 5 |
| 2021 | Casting defects, NDT | 2 |
| 2020 | Chvorinov's rule, brazing | 3 |

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
