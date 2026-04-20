---



exam: mdcat
examName: MDCAT
subject: physics
subjectName: Physics
topic: phy-6
topicName: Fluid Dynamics
weight: 3
country: pk
generated: "2026-03-24T08:32:08.083024"
diagramPrompt: "Clean educational diagram showing Fluid Dynamics with clear labels, white background, labeled arrows for forces/fields/vectors, color-coded components, exam-style illustration"





---
# Fluid Dynamics

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your MDCAT exam.

**What is Fluid Dynamics?**
Fluid dynamics studies fluids (liquids and gases) in motion. For MDCAT, the two core topics are **fluid flow** (continuity equation) and **fluid pressure** (Pascal's principle, Archimedes' principle, Bernoulli's theorem).

**Key Formulas:**

**Density:** $\rho = m/V$ (kg/m³)

**Pressure:** $P = F/A$ (Pa = N/m²)

**Pressure in a fluid at depth:** $P = P_0 + \rho gh$

**Archimedes' Principle:** Buoyant force $F_b = \rho_{fluid} \times V_{displaced} \times g$

**Continuity Equation (Conservation of Mass):** $A_1v_1 = A_2v_2$ (for incompressible flow)

**Bernoulli's Equation:** $P + \frac{1}{2}\rho v^2 + \rho gh = \text{constant}$

⚡ **MDCAT Tip:** Bernoulli's equation is for **horizontal flow** (h constant) or when comparing points along a streamline. Common trap: students forget that Bernoulli's equation is NOT for highly viscous fluids or situations with significant height differences.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

**Pascal's Principle:**
Pressure applied to an enclosed fluid is transmitted equally to every part of the fluid and the walls of the container. This is the working principle behind hydraulic presses and hydraulic brakes.

For a hydraulic press: $\frac{F_1}{A_1} = \frac{F_2}{A_2}$ → Mechanical advantage = $A_2/A_1$

If the large piston has 10× the area of the small piston, a 100 N force on the small piston can lift a 1000 N load on the large piston — but the small piston must move 10× further.

**Archimedes' Principle in Detail:**
A body immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced.

Three cases to remember for MDCAT:
- **Floating body:** Density of body < Density of fluid. Fraction submerged = $\rho_{body}/\rho_{fluid}$
- **Fully submerged body:** Buoyant force > Weight → body rises (floats up)
- **Sinking body:** Density of body > Density of fluid. Weight > Buoyant force

**MDCAT Worked Example:**
A wooden block (density = 0.6 g/cm³) of volume 100 cm³ floats in water. What fraction is submerged?

Solution: Fraction submerged = $\rho_{wood}/\rho_{water} = 0.6/1.0 = 0.6$ (60% submerged, 40% above water)

**Viscosity and Stoke's Law:**
Viscosity is a fluid's resistance to flow. For a sphere falling through a viscous fluid:
$$F_b = 6\pi\eta rv$$

At terminal velocity: $mg = F_b + \text{upthrust}$ → $mg = 6\pi\eta rv + \rho_{fluid}Vg$

⚡ **MDCAT Tip:** Terminal velocity questions are common in MDCAT. Remember that at terminal velocity, net force = 0, so drag force equals the net downward weight minus buoyant force.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

**Bernoulli's Equation — Deep Derivation:**
From work-energy principle: Work done by pressure + Work done by gravity = Change in kinetic energy

For a fluid element moving through a pipe of varying cross-section:
$$P_1 A_1 \Delta x_1 - P_2 A_2 \Delta x_2 = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$

Since $A_1\Delta x_1 = A_2\Delta x_2 = V$ (volume of fluid element):
$$P_1 V - P_2 V = \frac{1}{2}\rho V(v_2^2 - v_1^2)$$
$$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$

Including height: $P + \frac{1}{2}\rho v^2 + \rho gh = \text{constant}$

**Applications of Bernoulli's Equation:**

**Venturimeter:** Used to measure flow rate in a pipe. The pressure difference $P_1 - P_2$ is measured using a manometer.
$$v_1 = A_2\sqrt{\frac{2(P_1-P_2)}{\rho(A_1^2-A_2^2)}}$$

**Torricelli's Theorem:** Speed of efflux (liquid flowing out of a small hole at depth h below surface):
$$v = \sqrt{2gh}$$

**Surface Tension and Capillarity:**
Surface tension $\gamma$ is the force per unit length acting parallel to the surface:
$$\gamma = \frac{F}{L}$$

Capillary rise: $h = \frac{2\gamma\cos\theta}{\rho g r}$
- Water rises in glass (θ ≈ 0°, cosθ positive)
- Mercury falls in glass (θ > 90°, cosθ negative)

**MDCAT Common Mistakes:**
1. Confusing pressure with force — pressure × area gives force
2. Forgetting that buoyant force acts on the ENTIRE submerged portion, not just the bottom
3. Using Bernoulli's equation for non-streamline flow or when viscosity is significant
4. Mixing up gauge pressure and absolute pressure in fluid statics problems
5. In continuity equation: $A_1v_1 = A_2v_2$ only holds for **incompressible** fluids

**Priority Order for MDCAT:** Fluid pressure → Pascal's Principle → Archimedes' Principle → Continuity Equation → Bernoulli's Equation → Viscosity/Stoke's Law → Surface Tension

---
*Content adapted based on your selected roadmap duration. Switch tiers using the pill selector above.*
