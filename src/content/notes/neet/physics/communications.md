---
exam: neet
examName: NEET UG
subject: physics
subjectName: Physics
topic: communications
topicName: Communication Systems
weight: 2
country: india
generated: 2026-04-23
---

# Communication Systems — NEET Physics Notes

This topic covers communication systems, a relatively lower-weight but scoring topic in NEET Physics.

## Quick Revision

- **Block Diagram:** Transmitter → Channel → Receiver
- **Modulation:** Process of superimposing information on carrier wave
- **AM (Amplitude Modulation):** Carrier amplitude varies with message signal
- **FM (Frequency Modulation):** Carrier frequency varies with message signal
- **Demodulation:** Extracting message from modulated wave at receiver
- **Satellite Communication:** Uses satellites as relay stations — geostationary orbit at ~36,000 km
- **Mobile Communication:** Uses cell structure with frequency reuse
- **Internet:** Packet switching, TCP/IP protocol layers

## Standard Study

### Types of Communication

1. **Analog Communication:** Continuous variation of parameters (AM, FM)
2. **Digital Communication:** Discrete signals, better noise immunity

### Bandwidth Requirements

| Signal Type | Bandwidth |
|-------------|-----------|
| Speech | 300 Hz – 3.4 kHz |
| Video | 4.5 MHz |
| Digital Data | Depends on bit rate |

### Modulation Types

**Amplitude Modulation (AM):**
- Modulation Index (m) = Vm/Vc
- m ≤ 1 for undistorted transmission
- Sidebands carry the information
- Total transmitted power: Pc(1 + m²/2)

**Frequency Modulation (FM):**
- Better noise immunity than AM
- Bandwidth larger than AM
- Carson's rule: BW ≈ 2(Δf + fm)

### Antenna Height

- Communication range d ∝ √(h) where h = antenna height
- For proper coverage, antenna height is critical

### Satellite Communication

- Geostationary satellites: orbit at 36,000 km above equator
- Provide wide coverage — used for TV broadcasting, internet
- Three satellites at 120° apart give global coverage
- Signal delay: ~0.24 seconds one-way (round trip ~0.5s)

### Ground Wave Propagation

- Used for low-frequency AM broadcast
- Follows surface of Earth
- Absorbed by Earth over long distances

### Sky Wave Propagation

- Used for HF communication (short wave radio)
- Reflected by ionosphere
- Skip distance: minimum distance for sky wave reception

### Line of Sight (LOS) Propagation

- Used for VHF and above (FM, TV)
- Requires unobstructed path between transmitter and receiver

## Deep Study

### Information Theory

- **Channel Capacity:** C = 2B log₂(1 + S/N) — Shannon-Hartley theorem
- B = bandwidth, S/N = signal-to-noise ratio
- Higher bandwidth → higher data rate

### Propagation Effects

- **Free Space Loss:** Power decreases with square of distance
- **Atmospheric Absorption:** Signal loss due to atmospheric gases
- **Multipath Fading:** Signal arrives via multiple paths causing fading
- **Doppler Shift:** Frequency shift due to relative motion

### Noise

- **Thermal Noise:** Due to random motion of electrons in conductors
- **Shot Noise:** Due to discrete nature of charge carriers
- **Signal-to-Noise Ratio (SNR):** Key parameter in communication quality

### Error Detection & Correction

- Parity check, CRC, Hamming code
- Essential in digital communication for reliable data transmission

## Exam Tips

1. AM vs FM distinction — FM has better audio quality
2. Modulation index formula and condition (m ≤ 1) frequently tested
3. Satellite communication range and orbit height calculations
4. Block diagram questions are common — know the order and function of each block
5. Bandwidth comparisons between AM and FM — FM has larger bandwidth
6. Line of sight propagation frequency range — VHF and above

## Common Pitfalls

- Confusing sky wave and ground wave propagation bands
- Forgetting that AM demodulation requires envelope detection
- Not remembering the relationship between antenna height and communication range
- Mixing up frequency bands and their propagation characteristics

## Suggested Study Order

1. Basic communication system block diagram
2. Modulation concepts (AM first, then FM)
3. Antenna types and propagation modes
4. Satellite communication
5. Noise and information theory