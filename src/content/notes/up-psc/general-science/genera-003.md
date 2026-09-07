---
exam: up-psc
examName: UPPSC PCS
subject: general-science
subjectName: General Science
topic: genera-003
topicName: Laws of Motion and Friction
weight: 3
country: india
generated: "2026-03-25T17:00:00"
lastUpdated: "2026-09-07"
---

# Laws of Motion and Friction

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your UPPSC PCS examination.

In the UPPSC Combined State / Upper Subordinate Services Examination (PCS Prelims General Studies Paper I), General Science constitutes 20–25 questions, with classical mechanics providing dependable scoring opportunities. Focus on fundamental principles, everyday scientific applications, and high-frequency analytical traps:

- **First Law (Law of Inertia)**: An object persists in its state of rest or uniform rectilinear motion unless compelled to change by a non-zero net external force. Inertia is an intrinsic property quantified entirely by mass ($m$). It manifests in three distinct forms: inertia of rest (dust falling from a beaten rug), inertia of motion (a passenger jerking forward when a bus brakes), and inertia of direction (mud flying tangentially off a spinning vehicle tire).
- **Second Law (Quantitative Force)**: Net external force is directly proportional to the time rate of change of linear momentum:
  $$ec{F}_{	ext{net}} = \dfrac{dec{p}}{dt} = \dfrac{d(mec{v})}{dt} = mec{a} \quad (	ext{when mass } m 	ext{ is constant})$$
  In the SI system, 1 Newton ($1\,	ext{N}$) accelerates $1\,	ext{kg}$ by $1\,	ext{m/s}^2$. In the CGS system, $1\,	ext{dyne} = 10^{-5}\,	ext{N}$.
- **Third Law (Action and Reaction)**: To every action force, there is an equal and opposite reaction force:
  $$ec{F}_{AB} = -ec{F}_{BA}$$
  Crucial UPPSC concept: Action and reaction **never cancel each other** because they act simultaneously on **two different bodies**.
- **Impulse-Momentum Principle**: Impulse $ec{J} = \int ec{F}\,dt = \Deltaec{p} = m(ec{v} - ec{u})$. A cricket fielder draws his hands backward while catching a ball to increase contact time ($\Delta t$), thereby reducing the impulsive force exerted on his palms.
- **Friction**: An electromagnetic contact force operating parallel to the interface that resists relative sliding motion.
  $$	ext{Static Friction: } f_s \le \mu_s N, \quad 	ext{Limiting Friction: } f_{s,	ext{max}} = \mu_s N, \quad 	ext{Kinetic Friction: } f_k = \mu_k N$$
  For any given pair of dry surfaces: $\mu_s > \mu_k > \mu_r$ (rolling friction is 10 to 100 times smaller than sliding friction).
- **Angle of Friction ($	heta$) and Repose ($lpha$)**: $	an	heta = \mu_s$ and $	anlpha = \mu_s$, therefore $	heta = lpha$.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### 1. Newton's Three Laws of Motion: Mechanics & Everyday Applications

Sir Isaac Newton formulated the three laws of motion in his 1687 treatise *Philosophiae Naturalis Principia Mathematica*, synthesizing Galileo Galilei's earlier experiments on double inclined planes.

```
       ┌────────────────────────────────────────────────────────┐
       │             NEWTONIAN CLASSICAL MECHANICS              │
       └───────────────────────────┬────────────────────────────┘
                                   │
         ┌─────────────────────────┼────────────────────────┐
         │                         │                        │
         ▼                         ▼                        ▼
┌──────────────────┐      ┌──────────────────┐    ┌──────────────────┐
│    First Law     │      │    Second Law    │    │    Third Law     │
│Qualitative force │      │Quantitative force│    │Action & Reaction │
│Inertia of rest,  │      │F = dp/dt = ma    │    │Act on different  │
│motion, direction │      │Impulse J = F·dt  │    │interacting bodies│
└──────────────────┘      └──────────────────┘    └──────────────────┘
```

| Law | Physical Definition | Vector Equation | Everyday Real-World Phenomena Tested in UPPSC |
|:---|:---|:---|:---|
| **First Law** | Defines the concept of an inertial reference frame and establishes force qualitatively as the agency that changes momentum. | If $\sum ec{F}_{	ext{ext}} = 0$, then $ec{v} = 	ext{constant}$ | 1. Athletes run a short distance before taking a long jump to build inertia of motion.<br>2. When a tree branch is vigorously shaken, ripe fruits fall due to inertia of rest.<br>3. When an automobile rounds a sharp bend, passengers tilt outward due to directional inertia. |
| **Second Law** | Provides the quantitative measure of force as the derivative of momentum with respect to time. | $ec{F}_{	ext{net}} = \dfrac{dec{p}}{dt} = m\dfrac{dec{v}}{dt} + ec{v}\dfrac{dm}{dt}$ | 1. Shock absorbers and springs in vehicles lengthen impact duration to reduce peak shock.<br>2. High jumpers land on foam mattresses rather than hard soil to prolong deceleration time.<br>3. In variable mass systems (rockets), exhaust ejection velocity creates upward thrust: $F = u_{	ext{rel}}\dfrac{dm}{dt}$. |
| **Third Law** | Dictates that isolated forces cannot exist in nature; forces occur strictly as paired mutual interactions. | $ec{F}_{12} = -ec{F}_{21}$ | 1. Recoil of a firearm: when a bullet is propelled forward, the rifle kicks backward with equal momentum.<br>2. Walking: human feet push diagonally backward against the pavement; the static ground friction pushes the body forward.<br>3. Rowing a boat: oars push water backward; reactive water pressure propels the boat forward. |

#### 2. Momentum Conservation & Recoil Mechanics

In any closed physical system devoid of net external forces ($\sum ec{F}_{	ext{ext}} = 0$):
$$\dfrac{dec{P}_{	ext{total}}}{dt} = 0 \implies ec{P}_{	ext{initial}} = ec{P}_{	ext{final}}$$

##### Recoil Velocity of a Gun
Let a gun of mass $M$ fire a bullet of mass $m$ with muzzle velocity $v$. Before firing, both are at rest ($P_{	ext{initial}} = 0$).
$$0 = m v + M V_{	ext{recoil}} \implies V_{	ext{recoil}} = -\dfrac{m}{M}v$$
The negative sign confirms that the firearm moves opposite to the projectile. Because the gun's mass $M \gg m$, its recoil velocity is significantly smaller than the bullet's speed, yet the kinetic energy transmitted to the shooter's shoulder is substantial:
$$\dfrac{K_{	ext{gun}}}{K_{	ext{bullet}}} = \dfrac{\dfrac{P^2}{2M}}{\dfrac{P^2}{2m}} = \dfrac{m}{M} < 1$$

##### Rocket Propulsion Dynamics (Tsiolkovsky Equation)
A rocket functions by expelling fuel combustion gases at high relative exhaust velocity $u$. If mass decreases at rate $-\dfrac{dm}{dt}$, upward thrust is:
$$F_{	ext{thrust}} = -u \dfrac{dm}{dt}$$
Neglecting gravitational and atmospheric drag, integrating yields Konstantin Tsiolkovsky's rocket equation:
$$v_f - v_0 = u \ln\left(\dfrac{m_0}{m_f}ight)$$

#### 3. Friction: Origins, Laws & Inclined Planes

Friction originates at the microscopic level from the interlocking of microscopic surface asperities and intermolecular electrostatic adhesion (cold welding) between contacting peaks.

##### Classical Amontons-Coulomb Laws of Friction
1. Friction is proportional to the normal reaction force: $f \propto N$.
2. Friction is largely independent of the apparent macroscopic area of contact over wide ranges.
3. Kinetic friction is approximately independent of sliding speed once relative motion is established.

```
       ┌────────────────────────────────────────────────────────┐
       │             FRICTION ON AN INCLINED PLANE              │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
                            /                           /  \   Normal Reaction N = mg·cos(theta)
                          / [m]\  ▲
                         /      \/│
                        /       / │
                       /       /  ▼ mg·cos(theta)
                      / theta /
                     /───────/ ◄── Component down plane: mg·sin(theta)
                    /         ```

- **Forces acting on a mass $m$ on an incline of angle $lpha$**:
  - Weight resolved perpendicular to incline: $N = mg \coslpha$.
  - Weight resolved down the slope: $F_{	ext{down}} = mg \sinlpha$.
  - Maximum static friction opposing downward slide: $f_{s,	ext{max}} = \mu_s N = \mu_s mg \coslpha$.
- **Angle of Repose ($lpha$)**: The maximum tilt angle at which a block remains stationary without sliding down:
  $$mg \sinlpha = \mu_s mg \coslpha \implies 	anlpha = \mu_s$$
- **Acceleration Down an Incline**: When $lpha > 	ext{angle of repose}$, the block accelerates down the slope:
  $$ma = mg \sinlpha - f_k = mg \sinlpha - \mu_k mg \coslpha \implies a = g(\sinlpha - \mu_k \coslpha)$$

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### 1. Circular Motion & Road Banking Dynamics

When an automobile traverses a horizontal curved path of radius $R$ at linear velocity $v$, it undergoes centripetal acceleration $a_c = \dfrac{v^2}{R}$ directed toward the center of curvature.

##### 1. Level Curve Friction Limit
On an unbanked, level asphalt road, the centripetal force is supplied solely by lateral static friction between tire treads and pavement:
$$f_s \le \mu_s N = \mu_s mg$$
$$\dfrac{mv^2}{R} \le \mu_s mg \implies v_{	ext{max}} = \sqrt{\mu_s g R}$$
If the vehicle's speed exceeds $\sqrt{\mu_s g R}$, static friction cannot sustain the centripetal acceleration, causing the vehicle to skid outward tangentially.

##### 2. Optimum Banking Angle
To eliminate reliance on lateral tire friction and avoid lateral skidding on wet or iced asphalt, civil engineers tilt (bank) the road surface inward at an angle $	heta$:
$$N \sin	heta = \dfrac{mv^2}{R}, \quad N \cos	heta = mg$$
Dividing the horizontal component by the vertical component yields the ideal banking angle formula:
$$	an	heta = \dfrac{v^2}{gR} \implies v_{	ext{safe}} = \sqrt{g R 	an	heta}$$

```
                Cross-Section of a Banked Highway Curve
                ═══════════════════════════════════════

                             ▲ N (Normal Reaction)
                             │
                      N·cosθ │
                             │   /
                             ├──/  Vehicle on Banked Road
                             │ /
               N·sinθ ◄──────┼/───── Centripetal Force (mv^2 / R)
                            /│
                           / │
                          /  ▼ mg (Weight)
                   ──────/ θ
```

##### 3. Maximum Safe Speed on Banked Curve with Friction ($\mu_s$)
When friction is accounted for alongside banking, the maximum speed before outward skidding is:
$$v_{	ext{max}} = \sqrt{g R \left(\dfrac{\mu_s + 	an	heta}{1 - \mu_s 	an	heta}ight)}$$
Conversely, the minimum speed below which a vehicle slides down an icy steep incline is:
$$v_{	ext{min}} = \sqrt{g R \left(\dfrac{	an	heta - \mu_s}{1 + \mu_s 	an	heta}ight)}$$

#### 2. Non-Inertial Reference Frames & Pseudo Forces

Newton's laws of motion hold strictly in **inertial reference frames** (frames at rest or moving with constant velocity relative to distant celestial bodies). When mechanics problems are evaluated from an accelerating (non-inertial) reference frame, Newton's second law requires an auxiliary inertial correction: the **pseudo force** (fictitious force):
$$ec{F}_{	ext{pseudo}} = -m ec{A}_{	ext{frame}}$$

##### Apparent Weight in an Elevator
Let a person of true mass $m$ stand on a calibrated spring scale inside an elevator:
1. *Elevator accelerates upward with acceleration $a$*:
   $$N - mg = ma \implies N = m(g + a) \quad (	ext{Heavier})$$
2. *Elevator accelerates downward with acceleration $a < g$*:
   $$mg - N = ma \implies N = m(g - a) \quad (	ext{Lighter})$$
3. *Free-fall state ($a = g$, cable snapped)*:
   $$N = m(g - g) = 0 \quad (	ext{Apparent Weightlessness})$$
4. *Elevator moves with constant velocity ($a = 0$)*:
   $$N = mg \quad (	ext{True Weight Unchanged})$$

##### Centrifugal vs Coriolis Forces in Rotating Frames
In a frame rotating with angular velocity $ec{\omega}$:
- **Centrifugal Force**: $ec{F}_{	ext{cf}} = m \omega^2 ec{r}$ (directed radially outward away from the rotation axis).
- **Coriolis Force**: $ec{F}_{	ext{coriolis}} = -2m (ec{\omega} 	imes ec{v}_r)$. Operates only on objects possessing non-zero relative velocity $ec{v}_r$ within the rotating frame. In the Northern Hemisphere of the Earth, Coriolis force deflects moving air masses and ocean currents to their **right** (Buys Ballot's Law), causing counterclockwise rotation of cyclonic storms.

---

### 📝 UPPSC PCS Model Questions & Step-by-Step Solutions

#### Question 1
A cricket player pulls his hands backward while catching a fast-moving ball. Which scientific law or physical theorem explains this technique?
- (A) Newton's First Law of Motion
- (B) Impulse-Momentum Theorem
- (C) Law of Conservation of Energy
- (D) Archimedes' Principle

**Answer: (B) Impulse-Momentum Theorem.**  
*Explanation*: The change in momentum ($\Delta p = m \Delta v$) of the ball is fixed. According to the impulse formula $J = F_{	ext{avg}} 	imes \Delta t = \Delta p$, pulling the hands backward lengthens the duration of impact ($\Delta t$). Because force is inversely proportional to time ($F_{	ext{avg}} = \dfrac{\Delta p}{\Delta t}$), this dramatically reduces the impact force on the player's hands, preventing injury.

#### Question 2
When a running horse suddenly stops, the rider falls forward. What is the precise scientific reason?
- (A) Gravitational attraction increases suddenly
- (B) Inertia of rest keeps the rider moving
- (C) Inertia of motion keeps the upper body moving while feet stop with the horse
- (D) Third law reaction force propels the rider forward

**Answer: (C) Inertia of motion keeps the upper body moving while feet stop with the horse.**  
*Explanation*: The lower portion of the rider's body in contact with the saddle comes to rest immediately along with the horse due to contact friction. However, the upper body continues in its forward state of motion due to inertia of motion, causing the rider to pitch forward.

#### Question 3
An automobile of mass $1000\,	ext{kg}$ travels at $20\,	ext{m/s}$ around an unbanked circular curve of radius $100\,	ext{m}$. What is the minimum coefficient of static friction ($\mu_s$) between the tires and the road required to prevent skidding? (Take $g = 10\,	ext{m/s}^2$).
- (A) $0.2$
- (B) $0.4$
- (C) $0.6$
- (D) $0.8$

**Answer: (B) 0.4.**  
*Explanation*: For an unbanked horizontal turn, the centripetal force must be supplied by static friction:
$$\dfrac{m v^2}{R} \le \mu_s m g \implies \mu_s \ge \dfrac{v^2}{g R}$$
Substituting the given numerical values:
$$\mu_s \ge \dfrac{(20)^2}{10 	imes 100} = \dfrac{400}{1000} = 0.40$$

---
*For comprehensive syllabus outlines and previous year solved papers, visit the [/exams/up-psc/](/exams/up-psc/) portal.*
