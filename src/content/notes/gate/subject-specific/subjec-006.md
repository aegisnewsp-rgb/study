---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-006
topicName: "Topic 6"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Manufacturing Engineering — Machining and CNC

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Machining Processes** — turning, milling, and drilling are the three pillars. Remember the basic definitions: **cutting speed** (V), **feed** (f), and **depth of cut** (d). **Metal Removal Rate (MRR)** = f × d × V. For GATE, memorize this formula — it's almost always tested.

**Taylor's Tool Life Equation:** VT^n = C (where n = tool life index, typically 0.1–0.5 for steels). When n increases, tool life decreases faster for the same speed increase. This is a common trap — students forget that higher n means the tool wears out more quickly.

**Cutting Forces:** Principal cutting force (Fc) during turning ≈ kc × f × d, where kc is specific cutting force. Thrust force (Ft) is typically 10–30% of Fc.

**CNC Essentials:** G-codes (G00–G04 = positioning and dwell), M-codes (M03/M04 = spindle CW/CCW, M05 = stop). G01 = linear interpolation (most frequently tested in GATE).

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Machining Fundamentals

### Cutting Speed, Feed, and Depth of Cut

In **turning**, a cylindrical workpiece rotates while a single-point cutting tool moves axially. The three parameters:

| Parameter | Symbol | Unit | Effect |
|-----------|--------|------|--------|
| Cutting speed | V | m/min | Directly affects temperature and tool wear |
| Feed | f | mm/rev | Affects surface roughness and MRR |
| Depth of cut | d | mm | Affects cutting force and power |

**MRR (Metal Removal Rate)** = V × f × d (mm³/min for cutting speed in mm/min). Higher MRR means faster material removal but increased tool stress.

> ⚠️ **Common Mistake:** Students often forget units. If V is in m/min, convert to mm/min before calculating MRR in mm³/min, or your answer will be off by a factor of 1000.

### Taylor's Tool Life Equation

**VT^n = C**

- V = cutting speed (m/min)
- T = tool life (min)
- n = exponent (tool material property: HSS n≈0.1–0.2, Carbide n≈0.2–0.5, Ceramic n≈0.5–0.7)
- C = constant (tool life at V=1 m/min)

**Typical GATE trick:** If speed doubles, new tool life = C/(2V)^n = C/V^n × 2^(-n) = T_original × 2^(-n). Since n<1, tool life halves (approximately) but not exactly — don't assume "half" unless specified.

### Cutting Forces in Turning

The **Merchant's Circle** shows forces:
- **Cutting force (Fc):** Major force, acts in direction of cutting
- **Thrust force (Ft):** Perpendicular to Fc, pushes tool into workpiece
- **Rake angle (α):** Positive rake reduces cutting force but weakens tool

For a perfectly sharp tool: Ft ≈ 0.3–0.5 Fc (steel), Ft ≈ 0.2–0.4 Fc (cast iron).

## Machining Processes

### Turning (Lathe Operations)

- **Plain turning:** Reduces diameter
- **Facing:** Creates flat end surface
- **Taper turning:** Cone-shaped workpieces
- **Thread cutting:** Using a form tool (G76 canned cycle in CNC)

### Milling

**Peripheral milling** ( cutter teeth on periphery):
- **Up milling (climb milling):** cutter rotates against feed direction — better surface finish, tool lasts longer
- **Down milling (conventional):** cutter rotates with feed direction — rougher finish but better for soft materials

**Face milling:** cutter axis perpendicular to workpiece surface. DOC typically 0.5–3 mm.

### Drilling

Key formulas:
- **Drilling torque:** T = k × f × D² (k = material constant, D = drill diameter)
- **Thrust:** F = p × f × D (p = specific thrust)
- **MRR in drilling:** = (π/4) × D² × V × f

## CNC Programming

### Essential G-Codes

| Code | Function | Notes |
|------|----------|-------|
| G00 | Rapid positioning | Ignores obstacles — use carefully |
| G01 | Linear interpolation | Requires F word for feed |
| G02 | Clockwise circular interpolation | Arc cutting |
| G03 | Counter-clockwise arc | Arc cutting |
| G04 | Dwell | P word = milliseconds, X word = seconds |
| G28 | Return to reference | Machine home |
| G76 | Threading cycle | Multiple passes automatically |

### Essential M-Codes

| Code | Function |
|------|----------|
| M03 | Spindle ON clockwise |
| M04 | Spindle ON counter-clockwise |
| M05 | Spindle stop |
| M08 | Coolant ON |
| M09 | Coolant OFF |
| M30 | Program end and rewind |

### CNC Programming Example

```
O0001 (Program number)
N10 G28 U0 W0 (Return to reference point)
N20 M06 T01 (Tool change to tool 1)
N30 M03 S1000 (Spindle ON, 1000 RPM)
N40 G00 X50 Z5 (Rapid move to start position)
N50 G01 Z-20 F0.2 (Feed to depth, feed 0.2 mm/rev)
N60 X80 (Feed to X=80)
N70 G00 Z5 (Rapid retract)
N80 M05 (Spindle stop)
N90 M30 (Program end)
```

> 💡 **GATE Pattern:** CNC questions often ask which G-code performs a specific operation (G76 for threading is very common), or to identify errors in a given code snippet.

## Cutting Fluids

Purpose: Cool the tool-workpiece interface, lubricate, flush chips, and prevent corrosion.

- **Dry machining:** No fluid — for carbide tools at high speeds where thermal shock could crack the tool
- ** flood cooling:** Large volumes of water-based fluid — most common
- **Mist cooling:** Fine droplet spray — for unobstructed operations
- **Minimum Quantity Lubrication (MQL):** Oil mist with minimal fluid — environmentally friendly

## Tool Wear and Failure

**Taylor's tool wear modes:**
1. **Flank wear:** Most common — wear on the flank face, width VB measured
2. ** crater wear:** Chip formation area deteriorates (at high speeds)
3. **Nose radius wear:** Affects surface finish
4. **Thermal cracking:** Ceramic tools (alternating heating/cooling)
5. ** Plastic deformation:** High temperature softens the tool

**Tool life criterion:** Typically VB = 0.3 mm (for carbide) or 0.6 mm (for HSS) at which point tool is considered dead.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Orthogonal vs Oblique Cutting

### Orthogonal Cutting Model

In **orthogonal cutting** (like a planning operation), the tool edge is perpendicular to the cutting direction. The chip flows in a plane normal to the cutting edge.

**Chip types:**
- **Continuous chip:** Ductile materials (steel, aluminum) at moderate speeds with sharp tools — ideal, indicates good cutting conditions
- **Segmented chip (built-up edge):** Lower speeds or less sharp tools — poor surface finish, BUE forms and breaks off
- **Discontinuous chip:** Brittle materials (cast iron) or very low speeds — acceptable for cast iron but not for steel

**Merchant's Force Circle:** The relationship between Fc, Ft, and the Resultant force R:
- R² = Fc² + Ft²
- φ (friction angle): tan(φ) = Ft/Fc (at tool-chip interface)
- α (rake angle): positive = tool tilts toward chip
- β (friction angle at shear plane): not directly measurable

The **shear angle** φ relates to rake angle α: tan(φ) = (r × cos(α))/(1 – r × sin(α)) where r = chip thickness ratio = t₁/t₂ (t₁ = uncut chip thickness, t₂ = chip after cut, typically r = 0.3–0.7).

### Oblique Cutting

In **oblique cutting** (like drilling with a twist drill), the tool edge is at an angle to the cutting direction. Chip flows sideways. Most actual machining is oblique.

**Differences from orthogonal:**
- Helical chip (wraps around drill) instead of ribbon chip
- Includes a side flow component
- Better chip control in drilling

## Mechanics of Drilling

The twist drill has two cutting lips. **Drilling torque and thrust:**
- Torque T ≈ (kc × f × D²) / 8 (for each lip)
- Thrust F ≈ (p × f × D) / 2

Drilling power = 2πNT/60 where N = spindle speed (RPM).

**Drill point angle:** Typically 118°–135° for steel. Included angle affects chip formation. Too acute = long chips, too obtuse = poor penetration.

## Gear Cutting (Brief)

Not a primary GATE focus in machining, but basic terms matter:
- **Forming:** No chips — gear pressed into gear blank (for soft metals)
- **Generating:** Involves true cutting action — rack cutter, hobbing, shaper
- **Hobbing:** Most common for precision gears — rotating hob meshes with rotating blank

## Machining Economics

**Minimum Cost Tool Life:**
T_c = (1 – n)/(n × m) × C × ln(1/(1+n)) ... (complex, rarely asked in GATE)

**Taylor's equation rearranged:** V = C^(1/n) × T^(-1/n)

**Optimal cutting speed (minimum cost):** Use derivative d(Cost per piece)/d(V) = 0. Results in a specific V that minimizes cost, derived from: V_optimal = (n × C^(1/n) × T_productive)^(-1/n)

This is rarely asked directly but understanding that cutting speed and tool life are inversely related in a power law is sufficient.

## Machining Tolerances and Surface Finish

**Surface roughness (Ra) approximation:**
Ra ≈ (f²)/(8 × r) for a round-nosed tool where r = nose radius.

Higher feed f → rougher surface (f² relationship). Higher nose radius → smoother surface. Depth of cut has no direct effect on Ra.

**Machining tolerances:** IT grades IT5–IT7 for machined surfaces. Commercial turning typically achieves IT8–IT10.

---

## Example Problem

**GATE 2022:** A mild steel bar (φ50 mm) is being turned at V = 120 m/min, f = 0.2 mm/rev, DOC = 2 mm. Calculate the MRR and power required if specific cutting force kc = 2000 MPa. Density of steel = 7850 kg/m³ (not needed but given to distract).

**Solution:**

Step 1: MRR = V × f × d
- V = 120 m/min = 120,000 mm/min
- f = 0.2 mm/rev
- d = 2 mm
- MRR = 120,000 × 0.2 × 2 = **48,000 mm³/min**

Step 2: Cutting force Fc = kc × f × d
- kc = 2000 MPa = 2000 N/mm²
- f = 0.2 mm
- d = 2 mm
- Fc = 2000 × 0.2 × 2 = **800 N**

Step 3: Power = Fc × V (converted properly)
- Power = (Fc in N) × (V in m/s converted)
- V = 120 m/min = 120/60 = 2 m/s
- Power = 800 × 2 = **1600 W = 1.6 kW**

⚠️ Don't forget to convert V from m/min to m/s! Students who forget this typically get 96,000 W or similar absurd answers.

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
