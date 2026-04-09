---
exam: gate
examName: "GATE"
subject: quant
subjectName: "Subject Specific"
topic: subjec-009
topicName: "Topic 9"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Theory of Machines — Kinematics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Four-bar mechanism:** Grashof criterion: S + L ≤ P + Q → at least one link can rotate fully. S = shortest link, L = longest link.

**Instantaneous Centre (IC):** Point in mechanism where velocity of two bodies is equal. Number of ICs = n(n–1)/2 for n links.

**Kennedy's Theorem:** Three centrodes always have a common point. Useful for finding velocity by locating ICs.

**Velocity Analysis:** v = ω × r (perpendicular to link, from IC). For relative velocity: v_B = v_A + v_B/A.

**Slider-crank:** Offset creates **secondary forces** and changes in piston velocity. Use relative velocity method.

**Cams:** For knife-edge follower: **minimum follower radius = zero**. For roller follower: **base circle + roller radius = prime circle**.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

## Four-Bar Linkage Analysis

### Grashof Criterion

For a four-bar mechanism with links of lengths S (shortest), P, Q, L (longest):

**Grashof mechanism:** S + L ≤ P + Q
- At least one link is a **revolute** (full rotation possible)
- If S + L = P + Q exactly → change point (full rotation possible for one link at specific positions)

**Non-Grashof:** S + L > P + Q
- All joints are **rocker** or **drag-link** — no link completes full revolution

**Classification:**
| Condition | Type | Motion |
|-----------|------|--------|
| S + L < P + Q | Crank-rocker | Crank fully rotates, rocker oscillates |
| S + L = P + Q | Change point | Transition state |
| S + L > P + Q | Double-rocker | Both rockers oscillate |
| S+L ≤ P+Q + special cases | Drag-link | Crank drags other link fully |

> ⚠️ **GATE trap:** Students often forget that Grashof doesn't guarantee continuous rotation — practical issues like joint size, clearances, and link interference can prevent full rotation.

### Velocity in Four-Bar Mechanisms

**Angular velocity relationship:**
ω₃ / ω₂ = (AB/BC) × sin(θ₃) / sin(θ₂) — derived from relative velocity at joint B

More practically, use **instantaneous centre method**:

1. Identify all ICs: For a 4-bar with links 1-2-3-4 (1=ground):
   - IC₁₂ at joint A (ground link)
   - IC₂₃ at joint B ( coupler)
   - IC₃₄ at joint C (output link)
   - IC₁₃ at intersection of extensions of links 1 and 3
   - IC₂₄ at intersection of extensions of links 2 and 4
   - IC₁₄ at joint D (ground link)

2. **Kennedy's Theorem:** The IC of any two links lies on the line joining the ICs of those links taken two at a time.

**Velocity calculation using IC:**
v_B = ω₁₄ × r_(B,IC₁₄) where r is perpendicular distance from IC to point B.

## Slider-Crank Mechanism

### Geometry

Slider-crank: Link 1 (ground/crank), Link 2 (crank), Link 3 (connecting rod), Link 4 (slider).

**Crank angle θ:** Angle of crank from line of stroke.
**Offset e:** Perpendicular distance between slider axis and crank center.
**Stroke:** 2 × crank radius if e = 0.

**Slider position:** x = r cos θ + √(l² – (r sin θ + e)²)

Where r = crank length, l = connecting rod length.

**When e ≠ 0 (offset slider-crank):**
- Piston doesn't follow simple harmonic motion
- **Retardation > acceleration** during expansion stroke
- **Acceleration > retardation** during compression stroke
- This asymmetry causes **secondary unbalanced forces** in engines

### Velocity of Piston

v_piston = dx/dt = –rω sin θ – (r²ω sin 2θ)/(2l √(1 – (r/l)² sin² θ))

**Approximation when r/l is small:**
v ≈ –rω sin θ (first term dominates)

**Maximum piston velocity:**
Occurs at θ ≠ 90° for offset crank. Solve dv/dθ = 0:
cos θ_max = (–1 + √(1 + 16(r/l)² cos² φ_e))/(2r/l) ... complex for GATE.

For exam purposes: v_max ≈ rω × (0.75 to 0.85) occurs slightly before/after 90° depending on r/l ratio.

### Acceleration of Piston

α_piston = d²x/dt² = –rω² cos θ – (r²ω² cos 2θ)/(l(1 – (r/l)² sin² θ)^(3/2))

**Simplified (r/l small):**
α ≈ –rω² cos θ

> 💡 **GATE Pattern:** Slider-crank questions often ask about velocity at specific crank angles or about the ratio of connecting rod angular velocity to crank angular velocity. Focus on the relative velocity method.

## Relative Velocity Method

### Procedure

1. Draw velocity polygon at the point of interest
2. Identify known velocities and directions
3. Apply: **v_B = v_A + v_B/A** (where v_B/A is velocity of B relative to A, perpendicular to link AB)
4. Solve polygon graphically or analytically

**Example: Four-bar slider-crank velocity at B:**
- v_B = ω₂ × AB (perpendicular to AB, away from A)
- v_C = v_B + v_C/B (v_C/B perpendicular to BC)
- v_C direction is horizontal (slider guide)

**Magnitude of v_B/A = ω_link × length(link)**

### Acceleration in Mechanisms

**Coriolis acceleration** appears in slider-crank and other mechanisms with sliding:

a_Coriolis = 2 × ω × v_sliding

Direction: rotate v_sliding by 90° in direction of ω.

> ⚠️ **GATE frequently tests Coriolis acceleration** — students forget the factor of 2 or rotate in the wrong direction. Remember: Coriolis always appears when you have simultaneous rotation and sliding.

## Instantaneous Centre (IC)

### Properties

1. **Velocity property:** Two bodies have equal velocity at IC (relative velocity = 0)
2. **No velocity transmission through IC** — instantaneous
3. **IC of rotating bodies** lies on perpendicular bisector of line joining their velocity centroids

### Locating ICs — Kennedy's Theorem

**Kennedy's Theorem:** The three ICs of three bodies moving in plane motion always lie on a straight line.

**Application:** When you can't directly find an IC geometrically:
1. Find two known ICs
2. Draw line joining them
3. Find intersection with line of another IC pair

**IC locations for common mechanisms:**

| Mechanism | IC locations |
|-----------|--------------|
| Four-bar | Ground-2 (link 1-2 joint), Ground-3 (1-3 joint), Ground-4 (1-4 joint), 2-3, 2-4, 3-4 |
| Slider-crank | Ground-2 (crank pin), Ground-3 (at infinity perpendicular to guides), 2-3, 2-slider, 3-slider |
| Cam-follower | Base circle center (rotating), IC at point of pure rolling if no slip |

## Cams and Followers

### Cam Types

**Radial (disc) cam:** Follower moves radially from cam center. Most common.
**Translating cam:** Follower translates parallel to cam axis.
**Cylindrical cam:** Groove on cylinder surface — complex 3D motion.

### Follower Types

** Knife-edge follower:** Sharp edge, high stress, rarely used industrially
**Roller follower:** Lower friction, preferred for moderate speeds
**Flat-faced follower:** No rotating joint, can be on either side of cam

### Motion Programs

| Motion | Displacement | Velocity | Acceleration |
|--------|--------------|----------|---------------|
| **Simple Harmonic Motion (SHM)** | s = (r/2)(1 – cos θ) | v = (rω/2) sin θ | a = (rω²/2) cos θ |
| **Uniform Velocity** | s = kθ (linear with θ) | v = constant | a = 0 (jerk = infinite) — impractical |
| **Cycloidal** | s = r(θ/β – sin(2πθ/β)/2π) | v = rω(1 – cos(2πθ/β))/β | a = rω² sin(2πθ/β)/β |

**SHM is GATE's most commonly tested motion program** — memorize these three equations.

### Pressure Angle

**Pressure angle (φ):** Angle between normal to cam surface and direction of follower motion.

- **High pressure angle** (> 30°): Excessive side thrust on follower, potential binding
- **Minimum pressure angle** at base circle (lowest curvature)
- **Maximum pressure angle** at peak of rise curve

**Prime circle:** Circle drawn from cam center to the point of the cam that contacts the follower when the follower is at its minimum radius position.

**For knife-edge follower:** Prime circle = base circle + zero (theoretically)
**For roller follower:** Prime circle = base circle + roller radius

> ⚠️ **GATE trap:** Confusing base circle with prime circle. Base circle is the cam's actual boundary. Prime circle is the follower-side envelope. For a roller follower, prime circle radius = base circle + roller radius.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

## Complex Number Methods for Mechanism Analysis

Position analysis using **complex numbers** (loop closure equation):

**Four-bar:** AC = AB + BC → R₁e^(iθ₁) + R₂e^(iθ₂) = R₃e^(iθ₃) + R₄e^(iθ₄)

Separating real and imaginary parts gives two scalar equations. Solve for unknown angles.

**Slider-crank loop equation:**
r e^(iθ) + l e^(iφ) = x + i y  (where x is piston position)

Taking magnitude: (r cos θ + l cos φ)² + (r sin θ + l sin φ)² = x²

## Coriolis Acceleration — Deep Dive

Coriolis acceleration a_C = 2ω × v_rel

**When does it appear?**
- Any mechanism where a link is rotating while another link slides along/through it
- Slider-crank: connecting rod rotates while slider translates
- **Four-bar with sliding contact:** some drag-link mechanisms

**Direction determination:**
1. Visualize the sliding velocity v_rel
2. Imagine rotating the link at ω
3. Coriolis acceleration points in direction of that rotation

**Magnitude:** |a_C| = 2ω v_rel

**GATE application:** Find Coriolis acceleration at the connecting rod of a slider-crank at θ=60°, r=50mm, l=200mm, ω=100 rad/s.

Solution: v_piston = rω sin θ (approx). a_C = 2 × ω_link × v_piston.
Where ω_link = ω × (AB/BC) × sin(θ₂)/sin(θ₃) ... solve polygon first.

## Klein's Construction for Slider-Crank

A graphical method to find velocity and acceleration simultaneously:

1. Draw crank AB at angle θ
2. Construct perpendicular at B (velocity direction of B)
3. Project coupler BC position
4. Use geometry to find acceleration components

**Klein's acceleration triangle:**
a_C = a_B + a_C/B (coriolis component + tangential component + normal component)

Normal component: a_C/B_normal = ω₃² × BC
Tangential component: a_C/B_tangential = α₃ × BC
Coriolis: a_C/B_Coriolis = 2ω₂ × v_C/B (perpendicular to BC)

## Cam Design — Sizing

**Base circle diameter:** Determined by mounting requirements and shaft diameter.

**Minimum prime circle radius (for knife-edge follower):**
r_p_min = e / sin(φ_max)  where e = offset, φ_max = maximum allowable pressure angle (typically 30°)

**Minimum prime circle radius (for flat-faced follower):**
r_p_min = √((e + V_max/ω)² + (F_max/(2K)²))  ... where K is follower face width factor

**For roller follower:**
r_p_min = r_base + r_roller + ... adjust for curvature

## Example Problem

**GATE 2020:** In a four-bar mechanism, AB = 30 mm, BC = 50 mm, CD = 55 mm, DA = 40 mm. Identify if it's Grashof and classify.

**Solution:**

Step 1: Identify S (shortest) = 30 mm (AB), L (longest) = 55 mm (CD)
Step 2: P = 40 mm, Q = 50 mm
Step 3: Check S + L = 30 + 55 = 85
Step 4: Check P + Q = 40 + 50 = 90
Step 5: S + L < P + Q → **Grashof mechanism** ✓

Step 6: Classify: Since S + L < P + Q and S is adjacent to L (AB adjacent to CD which is longest), this is **Crank-rocker** (link AB = crank, can rotate fully).

If shortest link is ground link → crank-rocker.
If shortest link is coupler → drag-link.
If shortest link is opposite ground → double-rocker.

---

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
