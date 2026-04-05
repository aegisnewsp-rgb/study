---
exam: mat
examName: MAT
subject: quant
subjectName: Mathematical Skills
topic: mathem-003
topicName: Time, Speed & Distance
weight: 3
country: mat
generated: "2026-03-25T17:00:00"
---

# Time, Speed & Distance

### 🟢 Lite — Quick Review

Time, Speed and Distance is one of the most reliable topic areas in the MAT Quantitative section. The fundamental relationship — $\text{Distance} = \text{Speed} \times \text{Time}$ — governs all questions from the simplest direct calculations to the more involved train-crossing and circular-track problems. Most MAT candidates encounter at least 3–4 questions from this topic in any given paper. The essential formulas are few: the basic $d = s \times t$, the average speed harmonic mean $v_{\text{avg}} = \frac{2ab}{a+b}$ for equal distances at speeds $a$ and $b$, relative speed sums and differences, and the train-specific $t = \frac{\text{length}}{\text{speed}}$. Master these and you can handle the majority of questions.

Unit conversion is non-negotiable. Speed in km/hr converts to m/s by multiplying by $\frac{5}{18}$; the reverse uses $\frac{18}{5}$. This derives from $1 \text{ km/hr} = \frac{1000}{3600} \text{ m/s} = \frac{5}{18} \text{ m/s}$. In a time-pressured exam, committing these conversion factors to memory saves precious seconds.

The average speed formula trips many candidates. If you travel from Delhi to Agra at 60 km/hr and return at 40 km/hr, the arithmetic mean $(60+40)/2 = 50$ km/hr is wrong. The correct answer uses the harmonic mean: $\frac{2 \times 60 \times 40}{60 + 40} = \frac{4800}{100} = 48$ km/hr. This matters because more time is spent at the slower speed, pulling the average down.

⚡ **MAT exam tip:** Watch the wording carefully — "same distance" versus "same time" determines whether to use the harmonic mean or arithmetic mean. In train problems, always convert lengths to the same unit before substituting. A common trap is mixing up when speeds add versus when they subtract in relative motion.

---

### 🟡 Standard — Regular Study

#### Fundamental Relationships

The three-variable equation $d = s \times t$ unlocks most straightforward problems. Given any two variables, solve for the third:

**Example:** A bus covers 135 km at an average speed of 45 km/hr. Time taken:
$$t = \frac{d}{s} = \frac{135}{45} = 3 \text{ hours} = 3 \text{ h } 0 \text{ min}$$

**Unit conversions — worked examples:**

- Convert $72$ km/hr to m/s: $72 \times \frac{5}{18} = 20$ m/s
- Convert $15$ m/s to km/hr: $15 \times \frac{18}{5} = 54$ km/hr
- A train travelling at $108$ km/hr covers $450$ m in how many seconds?
$$108 \text{ km/hr} = 108 \times \frac{5}{18} = 30 \text{ m/s}$$
$$t = \frac{450}{30} = 15 \text{ seconds}$$

#### Average Speed

**When equal distances are covered at different speeds:**
If you cover distance $d$ at speed $a$, and the same distance $d$ at speed $b$, the average speed over the total distance $2d$ is:
$$v_{\text{avg}} = \frac{\text{total distance}}{\text{total time}} = \frac{2d}{\frac{d}{a} + \frac{d}{b}} = \frac{2ab}{a + b}$$

**Example:** Going from Mumbai to Pune (95 km) at 50 km/hr and returning at 38 km/hr:
$$v_{\text{avg}} = \frac{2 \times 50 \times 38}{50 + 38} = \frac{3800}{88} \approx 43.18 \text{ km/hr}$$

**When equal times are spent at different speeds:**
$$v_{\text{avg}} = \frac{a + b + c + \cdots}{n}$$

**When distances are divided equally among multiple speeds:**
For $\frac{1}{3}$ distance each at $a$, $b$, and $c$ km/hr:
$$v_{\text{avg}} = \frac{3abc}{ab + bc + ac}$$

#### Relative Speed

**Opposite directions (approaching):** Speeds add.
$$v_{\text{rel}} = a + b$$

**Example:** Two cyclists 72 km apart cycle towards each other at 12 km/hr and 15 km/hr. Time to meet:
$$t = \frac{72}{12 + 15} = \frac{72}{27} = \frac{8}{3} = 2 \text{ h } 40 \text{ min}$$

**Same direction (catching up):** Speeds subtract.
$$v_{\text{rel}} = |a - b|$$

**Example:** Car A (75 km/hr) chases Car B (60 km/hr) that started 45 km ahead. Time to catch:
$$t = \frac{45}{75 - 60} = \frac{45}{15} = 3 \text{ hours}$$

#### Train Problems

**Passing a stationary point (pole, person, tree):**
The train's entire length must pass the point.
$$t = \frac{\text{length of train (m)}}{\text{speed (m/s)}}$$

**Example:** A train 180 m long passes a pole in 12 seconds at 108 km/hr.
$$108 \text{ km/hr} = 30 \text{ m/s} \implies t = \frac{180}{30} = 6 \text{ s}$$

**Passing a platform:**
Both the train length and the platform length must be covered.
$$t = \frac{L_{\text{train}} + L_{\text{platform}}}{\text{speed}}$$

**Example:** A train 200 m long passes a platform 350 m long in 22 seconds. Find speed.
$$\text{Total distance} = 200 + 350 = 550 \text{ m}$$
$$22 = \frac{550}{s} \implies s = 25 \text{ m/s} = 25 \times \frac{18}{5} = 90 \text{ km/hr}$$

**Two trains in opposite directions:**
$$t = \frac{L_1 + L_2}{v_1 + v_2} \quad \text{(speeds in same units)}$$

**Example:** Two trains 200 m and 150 m long run at 60 km/hr and 90 km/hr respectively toward each other.
$$v_1 = 60 \times \frac{5}{18} = 16.67 \text{ m/s}, \quad v_2 = 90 \times \frac{5}{18} = 25 \text{ m/s}$$
$$v_{\text{rel}} = 41.67 \text{ m/s}, \quad t = \frac{350}{41.67} \approx 8.4 \text{ seconds}$$

**Two trains in same direction:**
$$t = \frac{L_1 + L_2}{|v_1 - v_2|}$$

#### Boats and Streams

The river's current always opposes the boat's rowing direction.

- **Downstream speed** $v_d = v_b + v_s$ (bow supported by current)
- **Upstream speed** $v_u = v_b - v_s$ (rowing against current)

From these two equations, solve for the boat's speed in still water and the stream's speed:
$$v_b = \frac{v_d + v_u}{2}, \qquad v_s = \frac{v_d - v_u}{2}$$

**Example:** A motor boat travels 24 km downstream in 2 hours and the same distance upstream in 3 hours.
$$v_d = \frac{24}{2} = 12 \text{ km/hr}, \quad v_u = \frac{24}{3} = 8 \text{ km/hr}$$
$$v_b = \frac{12 + 8}{2} = 10 \text{ km/hr}, \quad v_s = \frac{12 - 8}{2} = 2 \text{ km/hr}$$

**Common mistakes:** Confusing which speeds add and which subtract. Forgetting to convert km/hr to m/s in train problems. Using arithmetic mean instead of harmonic mean for average speed over equal distances. Mixing up the formula for boats — students sometimes write $v_b = v_d - v_s$, which gives an incorrect answer.

---

### 🔴 Extended — Deep Study

#### Circular Motion and Races

On a circular track of length $L$, two runners with lap times $t_1$ and $t_2$ (or speeds $v_1$ and $v_2$) meet under different conditions:

**Same direction, starting together:** The faster gains one full lap on the slower in time $t = \frac{L}{v_1 - v_2}$.

**Opposite directions, starting together:** They meet with a frequency determined by $t = \frac{L}{v_1 + v_2}$.

**Example:** Two athletes on a 400 m track run at 8 m/s and 6 m/s in the same direction. How long until the faster lapped the slower?
$$t = \frac{400}{8 - 6} = 200 \text{ seconds}$$

#### Clock Problems

The minute hand moves $360°$ in 60 minutes $\implies 6°$ per minute. The hour hand moves $360°$ in 12 hours (720 minutes) $\implies 0.5°$ per minute. Their relative speed is $5.5°$ per minute.

At $H$ hours and $M$ minutes, the angle between hands is:
$$\theta = \left| 30H - 5.5M \right|$$
The smaller angle is taken; if the result exceeds $180°$, subtract from $360°$.

**Example:** At 3:40, the angle is $|30 \times 3 - 5.5 \times 40| = |90 - 220| = 130°$. The smaller angle is $130°$.

**When are hands at right angles?** Set $\theta = 90°$ or $270°$:
$$30H - 5.5M = \pm 90$$
Between 3 and 4 o'clock: $90 - 5.5M = 90 \implies M = 0$ (3:00) or $90 - 5.5M = 270 \implies M = \frac{360}{11} \approx 32.73$ min. So approximately 3:32:44.

#### Escalator Problems

These combine the person's walking speed with the escalator's movement.

**Example:** A man walking up an escalator (moving upward) counts 30 steps. If he walks twice as fast, he counts 20 steps. How many steps are visible on the escalator?

Let $s$ = man's speed (steps/sec), $e$ = escalator speed (steps/sec), $N$ = total visible steps.
$$N = 30(s + e) = 20(2s + e)$$
$$30s + 30e = 40s + 20e \implies 10e = 10s \implies e = s$$
$$N = 30(2s) = 60 \text{ steps}$$

The escalator and man move at equal speeds.

#### Time and Work

**Basic formula:** If A can complete a job alone in $a$ days, A's daily work rate is $\frac{1}{a}$. Working together:
$$\frac{1}{T} = \frac{1}{a} + \frac{1}{b} \implies T = \frac{ab}{a + b}$$

**Example:** Pipe A fills a tank in 12 minutes, Pipe B fills it in 20 minutes. Together:
$$T = \frac{12 \times 20}{12 + 20} = \frac{240}{32} = 7.5 \text{ minutes}$$

**Pipes and cisterns:** An outlet pipe works against inlet pipes. Net rate = inlet rate minus outlet rate.

**Example:** Inlet fills in 10 min, outlet empties in 15 min, net fill rate:
$$\frac{1}{10} - \frac{1}{15} = \frac{3-2}{30} = \frac{1}{30} \implies 30 \text{ minutes to fill}$$

**When work rates are proportional to efficiency:**
If A is twice as efficient as B, A takes half B's time. If A and B together finish a job in $x$ days, and A alone in $y$ days ($y > x$), then B alone takes:
$$T_B = \frac{xy}{y - x} \text{ days}$$

#### Combined Motion — Multiple Segments

**Example:** A car travels from City P to Q (80 km) at 40 km/hr, Q to R (80 km) at 60 km/hr, and R to S (80 km) at 80 km/hr. Find average speed.
$$\text{Total distance} = 240 \text{ km}$$
$$\text{Total time} = \frac{80}{40} + \frac{80}{60} + \frac{80}{80} = 2 + \frac{4}{3} + 1 = \frac{13}{3} \text{ hr}$$
$$v_{\text{avg}} = \frac{240}{13/3} = \frac{720}{13} \approx 55.38 \text{ km/hr}$$

**Shortcuts for equal distances at $n$ different speeds:**
$$v_{\text{avg}} = \frac{n}{\frac{1}{a_1} + \frac{1}{a_2} + \cdots + \frac{1}{a_n}}$$

#### Practice Problems with Solutions

**Q1:** A train 150 m long passes a man running at 9 km/hr in the same direction in 30 seconds. Find the train's speed.
$$\text{Relative speed} = \frac{150}{30} = 5 \text{ m/s} = 18 \text{ km/hr}$$
$$\text{Train speed} = 18 + 9 = 27 \text{ km/hr}$$

**Q2:** A boat's speed in still water is 15 km/hr and stream speed is 3 km/hr. Time to cover 48 km downstream and return?
$$v_d = 18 \text{ km/hr}, \quad v_u = 12 \text{ km/hr}$$
$$t = \frac{48}{18} + \frac{48}{12} = \frac{8}{3} + 4 = \frac{20}{3} \approx 6.67 \text{ hours}$$

**Q3:** Average speed when a car covers 200 km at 50 km/hr and returns at 30 km/hr?
$$v_{\text{avg}} = \frac{2 \times 50 \times 30}{50 + 30} = \frac{3000}{80} = 37.5 \text{ km/hr}$$

**Q4:** Two trains 200 m and 150 m run at 60 km/hr and 90 km/hr toward each other. Time to completely pass?
$$v_1 = 16.67 \text{ m/s}, \quad v_2 = 25 \text{ m/s}$$
$$t = \frac{350}{16.67 + 25} = \frac{350}{41.67} \approx 8.4 \text{ seconds}$$

**Q5:** At what time between 3 and 4 o'clock are the hands at right angles?
$$30 \times 3 - 5.5M = 90 \implies M = 0 \text{ (3:00, trivially)}$$
$$30 \times 3 - 5.5M = 270 \implies M = \frac{360}{11} \approx 32.73 \text{ min}$$
Answer: Approximately 3:32:44.

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
