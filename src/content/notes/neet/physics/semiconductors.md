---
exam: neet
examName: NEET UG
subject: physics
subjectName: Physics
topic: semiconductors
topicName: Semiconductor Electronics
weight: 3
country: india
generated: 2026-04-23
lastUpdated: 2026-04-23
---

# Semiconductor Electronics — NEET Physics Notes

Semiconductors form the backbone of modern electronic devices. This topic covers the physics of semiconductors, diodes, transistors, and digital circuits — essential for NEET.

## Quick Revision

- **Intrinsic Semiconductor:** Pure silicon/germanium (Si: 1.1 eV, Ge: 0.72 eV)
- **Doping:** Adding trivalent (p-type) or pentavalent (n-type) atoms
- **p-n Junction:** Forms the basis of diode, rectifier, LED
- **Forward Bias:** p-side positive relative to n-side — current flows
- **Reverse Bias:** p-side negative relative to n-side — no current (small leakage)
- **Rectifier:** Converts AC to DC using diode property
- **Transistor:** Current controlled device — npn and pnp types
- **Logic Gates:** AND, OR, NOT, NAND, NOR — form digital circuits

## Standard Study

### Energy Bands

- **Conduction Band:** Higher energy states where electrons are free
- **Valence Band:** Lower energy states with bound electrons
- **Band Gap (Eg):** Forbidden energy region between conduction and valence bands
- **Conductor:** Overlapping conduction and valence bands
- **Insulator:** Large band gap (> 3 eV) — electrons cannot jump
- **Semiconductor:** Small band gap (~1 eV) — electrons can jump with thermal energy

### Intrinsic Semiconductors

- Pure semiconductors at room temperature
- Electrons and holes are equal in number (n = p = ni)
- Electrical conductivity increases with temperature (unlike metals)
- Silicon (Si): Eg = 1.12 eV, ni ≈ 10¹⁰/cm³ at 300K
- Germanium (Ge): Eg = 0.72 eV, ni ≈ 10¹³/cm³ at 300K

### Extrinsic Semiconductors

**n-Type (Donor doping):**
- Add group V elements (Phosphorus, Arsenic)
- Majority carriers: electrons
- Minority carriers: holes
- Fermi level moves towards conduction band

**p-Type (Acceptor doping):**
- Add group III elements (Boron, Gallium)
- Majority carriers: holes
- Minority carriers: electrons
- Fermi level moves towards valence band

### p-n Junction

- **Depletion Region:** No mobile charge carriers on either side of junction
- **Barrier Potential:** ~0.7V for Si, ~0.3V for Ge at 300K
- **Forward Bias:** External voltage reduces barrier → current flows
- **Reverse Bias:** External voltage increases barrier → no conduction (only leakage)
- **Breakdown:** When reverse voltage exceeds critical value — Zener or Avalanche breakdown

### Diode Applications

1. **Rectifier:** Converts AC to DC (half-wave and full-wave bridge)
2. **Zener Diode:** Voltage regulation — operates in reverse breakdown
3. **LED:** Emits light when forward biased — GaAs, GaP used
4. **Photodiode:** Reverse biased, converts light to current
5. **Solar Cell:** Converts light energy to electrical energy

### Bipolar Junction Transistor (BJT)

- **npn Transistor:** Two n-regions separated by p-region
- **pnp Transistor:** Two p-regions separated by n-region
- **Regions:** Emitter (heavily doped), Base (thin, lightly doped), Collector
- **Current Relations:** IE = IB + IC, IC ≈ β × IB, α ≈ β/(β+1)
- **Common Base Configuration:** α ~ 0.98, no current gain but voltage gain
- **Common Emitter Configuration:** β varies from 20 to 200, current gain

### Transistor as Amplifier

- Input is in forward-biased emitter-base circuit
- Output is in reverse-biased collector-base circuit
- Small base current controls large collector current
- Voltage gain: Av = β × (Rc/Re)

### Transistor as Switch

- Cut-off region: Base current = 0 → Transistor OFF
- Saturation region: Base current large enough → Transistor ON
- Used in digital logic circuits

### Logic Gates

| Gate | Symbol | Output |
|------|--------|--------|
| AND | A·B | 1 only if both inputs 1 |
| OR | A+B | 1 if either input 1 |
| NOT | A' | Inverts input |
| NAND | (A·B)' | NOT of AND |
| NOR | (A+B)' | NOT of OR |

- Boolean algebra basics: Associative, Distributive, Commutative laws
- De Morgan's Theorems: (A+B)' = A'·B' and (A·B)' = A'+B'

## Deep Study

### Drift and Diffusion Currents

- **Drift Current:** Due to electric field in semiconductor
- **Diffusion Current:** Due to concentration gradient of carriers
- Total current = drift + diffusion for each carrier type

### Fermi Level

- Represents energy level with 50% probability of occupation at 0K
- In intrinsic semiconductor, Fermi level is mid-gap
- In n-type, Fermi level is above mid-gap (closer to conduction band)
- In p-type, Fermi level is below mid-gap (closer to valence band)

### Transistor Characteristics

- **Input Characteristic:** IB vs VBE at constant VCE
- **Output Characteristic:** IC vs VCE at constant IB
- Active region: Used for amplification
- Saturation and cut-off: Used as switch in digital circuits

### Feedback in Amplifiers

- Negative feedback stabilizes gain, reduces distortion
- Emitter bypass capacitor improves gain at high frequencies

### Oscillator Circuit

- An amplifier with positive feedback produces oscillations
- LC or RC network determines frequency
- Barkhausen criterion: Total phase shift = 360° (or 0°), Loop gain = 1

## Exam Tips

1. Diode is forward biased when p-side is at higher potential than n-side
2. Zener diode is always reverse biased during operation
3. Transistor amplifies current (β) and voltage simultaneously
4. For amplification, base-emitter junction is forward biased; base-collector is reverse biased
5. Logic gates are building blocks of digital circuits — NAND and NOR are universal gates
6. Semiconductor physics: remember Si vs Ge differences (band gap, barrier potential, ni)
7. BJT current relation: IE = IB + IC, and IC = αIE

## Common Pitfalls

- Confusing donor and acceptor impurities in doping
- Forgetting direction of conventional current (opposite to electron flow)
- Not applying correct biasing conditions for transistor operation
- Confusing transistor configurations (CB vs CE vs CC)
- Miscounting number of valence electrons when determining doping type

## Suggested Study Order

1. Energy bands in solids (conductor, insulator, semiconductor)
2. Intrinsic semiconductors and conduction mechanism
3. Extrinsic semiconductors (n-type and p-type)
4. p-n junction formation and characteristics
5. Diode types and applications
6. BJT structure and working
7. Transistor as amplifier and switch
8. Logic gates and Boolean algebra