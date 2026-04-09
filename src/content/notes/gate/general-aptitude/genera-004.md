---
exam: gate
examName: "GATE"
subject: quant
subjectName: "General Aptitude"
topic: genera-004
topicName: "Topic 4"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Time, Speed, Distance and Work

These three topics — motion, work, and flow — are united by the same underlying logic: **rate × time = work done**. GATE frequently tests this cross-topic connection, making them surprisingly interconnected.

---

### 🟢 Lite — Quick Review (1h–1d)

> **Core formulas:**
> - **Speed = Distance / Time** → Distance = Speed × Time
> - **Average speed** (same distance both ways) = 2v₁v₂/(v₁+v₂)
> - **Relative speed** (same direction) = |v₁ − v₂|; (opposite direction) = v₁ + v₂
> - **Upstream speed** = u − v; **Downstream speed** = u + v (where u = boat speed in still water, v = stream speed)
> - **Work rate:** If A does a job in x days, A's rate = 1/x job/day
> - **Combined work:** Rate相加 → Time = xy/(x+y) for two workers

**⚡ GATE exam tip:** For average speed when the same distance is covered at speeds v₁ and v₂, the harmonic mean applies: v_avg = 2v₁v₂/(v₁+v₂). The arithmetic mean (v₁+v₂)/2 is WRONG in this case.

**⚡ Quick trick:** For pipes and cisterns: treat filling pipes as positive rate, emptying pipes as negative rate. Net fill rate = sum of individual rates.

**⚡ Common trap:** In upstream/downstream, students often forget that the current (stream) ADDS to downstream speed but SUBTRACTS from upstream speed.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Speed, Distance and Time

**Basic equation:** Distance = Speed × Time

**GATE Example (2018, 1 mark):** A train 100m long passes a platform 150m long at a speed of 36 km/h. Find the time taken.
> Step 1: Convert speed: 36 km/h = 36 × (5/18) = 10 m/s.
> Step 2: Total distance to cover = length of train + length of platform = 100 + 150 = 250m.
> Step 3: Time = 250/10 = **25 seconds**.

#### Average Speed

**When covering the SAME distance at different speeds v₁, v₂, v₃...:**
v_avg = Total distance / Total time = n / (1/v₁ + 1/v₂ + ...)

For two equal distances at v₁ and v₂:
> v_avg = 2v₁v₂/(v₁+v₂)

**When covering the SAME TIME at different speeds v₁ and v₂:**
v_avg = (v₁+v₂)/2 (simple arithmetic mean)

**GATE Example:** A car travels from A to B at 60 km/h and returns at 40 km/h. Find average speed for the round trip.
> v_avg = 2×60×40/(60+40) = 4800/100 = **48 km/h** (not 50!).

#### Relative Speed

**Same direction:** Relative speed = difference of speeds. The faster catches up with the slower at this rate.
**Opposite direction:** Relative speed = sum of speeds. They approach each other at this rate.

**GATE Example:** Two trains 200m and 300m long run at 40 km/h and 50 km/h respectively, in opposite directions. Time to cross each other completely.
> Sum of lengths = 500m = 0.5 km. Relative speed = 40 + 50 = 90 km/h = 90 × (5/18) = 25 m/s.
> Time = 0.5 km / (90 km/h) = 0.5/90 h = 1/180 h = **20 seconds**.

#### Boats and Streams (Upstream/Downstream)

Let:
- u = speed of boat in still water (km/h)
- v = speed of stream current (km/h)

Then:
- **Downstream speed** (with current) = u + v
- **Upstream speed** (against current) = u − v

**Also:** u = (Downstream + Upstream) / 2 and v = (Downstream − Upstream) / 2

**GATE Example:** A boat goes 30 km downstream in 2 hours and returns upstream in 5 hours. Find the speed of the stream.
> Downstream speed = 30/2 = 15 km/h. Upstream speed = 30/5 = 6 km/h.
> v = (15 − 6)/2 = **4.5 km/h**.

#### Work and Time

**If A can complete a work in x days, A's work rate = 1/x of the work per day.**

**If B can complete the same work in y days, B's work rate = 1/y of the work per day.**

**A and B together:** Combined rate = 1/x + 1/y = (x+y)/xy → Time = xy/(x+y) days.

**GATE Example:** A can do a job in 10 days, B can do it in 15 days. How many days together?
> Time = (10×15)/(10+15) = 150/25 = **6 days**.

**Three workers:** Time for A, B, C together = 1 / (1/a + 1/b + 1/c) = abc/(ab + bc + ca)

#### Pipes and Cisterns

Same logic as work problems, but rates can be negative (drain pipes):
- Fill pipe: positive rate
- Drain pipe: negative rate

**GATE Example:** A pipe fills a tank in 5 hours, but a leak can empty it in 8 hours. With the leak present, how long to fill?
> Fill rate = 1/5 per hour. Leak rate = 1/8 per hour (emptying).
> Net rate = 1/5 − 1/8 = (8−5)/40 = 3/40 per hour.
> Time = 40/3 = **13 hours 20 minutes**.

---

### 🔴 Extended — Deep Study (3mo+)

#### Circular Race Problems

In a circular track of length L:
- If two runners run in opposite directions with speeds v₁ and v₂: they meet every L/(v₁+v₂) time units.
- If they run in the same direction: they meet every L/|v₁−v₂| time units.

**GATE Advanced Example:** Two runners A and B start from the same point on a circular track of 400m at speeds 5 m/s and 3 m/s. When will they first meet again (running in same direction)?
> Relative speed = 2 m/s. Time = 400/2 = **200 seconds**.

#### Pipes Filling a Tank (Multiple Pipes with Leak)

For a tank with multiple fill pipes and one or more drain pipes:
1. Find net fill rate (sum of fills − sum of drains)
2. Convert to time if rate is given as fill/emptying time

If fill pipe A takes x hours alone, B takes y hours alone, and drain C takes z hours alone:
Net rate = 1/x + 1/y − 1/z per hour (when all open simultaneously).

#### Work with Men, Women, and Children

When workers of different efficiencies work together, convert all to a common unit:
- If m men can do work in d days, and men work m hours/day at efficiency e, then:
- Total work = m × d × h × e (in some unit)

**GATE Advanced Example:** 4 men or 6 women can complete a work in 12 days. How long will 2 men and 3 women take?
> 4M work = 1 job in 12 days → 1M = 1/(48) job/day. Similarly 6W = 1/12 → 1W = 1/(72) job/day.
> Combined: 2/48 + 3/72 = 1/24 + 1/24 = 2/24 = 1/12 per day → **12 days**.

#### Variable Speed Journeys

When a journey is divided into segments at different speeds:
- Distance covered in segment i = vᵢ × tᵢ
- Total distance = Σ(vᵢ × tᵢ)
- Average speed = Total distance / Total time = Σ(vᵢ × tᵢ) / Σtᵢ

**GATE trick:** If the distance is fixed at D, and you travel D at v₁, D at v₂, then average = 2v₁v₂/(v₁+v₂). If time is fixed at T, and you travel T at v₁, T at v₂, average = (v₁+v₂)/2. Know which formula applies!

#### Train Problems — Key Distance Components

When a train passes:
- A stationary pole/point: distance = length of train
- A platform/man: distance = length of train + length of platform/man
- Another train (both moving): distance = sum of both train lengths

**GATE Example:** A train 150m long passes a man sitting in another train 250m long moving at 60 km/h in the same direction in 30 seconds. Find the speed of the first train.
> Relative speed = (150+250)/30 = 400/30 = 40/3 m/s = (40/3)×(18/5) = 48 km/h.
> Since relative speed = v₁ − 60, we get v₁ − 60 = 48 → **v₁ = 108 km/h**.

#### Escalator Problems

These are GATE classics. Treat escalators as having their own "current":
- Effective speed = person's speed + escalator speed (same direction)
- Steps taken by person = effective steps covered = escalator steps visible change + person's own steps

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
