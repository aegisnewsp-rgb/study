---
exam: gate
examName: GATE
subject: quantitative-aptitude
subjectName: General Aptitude (Quantitative)
topic: gate-qa-009
topicName: "Time, Speed & Distance"
tier: unified
weight: 2
weight_unit: "% of QA section"
diagramPrompt: "A multi-segment journey diagram showing speed changes over time, with shaded areas representing distance covered in each phase"
country: india
generated: 2026-05-26
lastUpdated: 2026-05-26
---

# Time, Speed & Distance

### 🟢 Lite

### Key Formula/Rule
**Distance = Speed × Time** — the holy trinity. Every TSD problem is some rearrangement of this one equation.

### Quick Memory Trick
"Distance is the area under the speed-time curve, and speed is just how fast you're covering ground." — Think of speed like your rate of distance accumulation, and distance as what piles up over time.

### 1-Sentence Summary
Speed tells you how fast, time tells you how long, and distance tells you how far — they're connected by the single formula D = S × T, and everything else (average speed, relative speed, boats in rivers) is just variations on this theme.

### Quick Example
Q: A car travels 180 km at 60 km/h. How long does it take?
A: Time = Distance/Speed = 180/60 = **3 hours**.

### Must Remember
- **Average speed ≠ (a+b)/2** — use Total Distance / Total Time for average speed
- **Relative speed** = sum of speeds when moving toward each other, difference when moving away
- **Boats in rivers:** Downstream speed = B + R, Upstream speed = B - R (B = boat speed in still water, R = river speed)
- **Convert units consistently** — km/h to m/s: multiply by 5/18

### 🟡 Standard

### Concept Explanation
Distance, speed, and time are three sides of the same coin. Speed is simply how quickly you're covering distance — it tells you how many kilometers (or meters) you tick off per hour (or per second). Time is how long you're doing it. Multiply them together and you get the total distance traveled. Every single problem in this topic — no matter how convoluted the story — boils down to applying this one relationship correctly. The trick isn't memorizing formulas; it's recognizing which two of the three you know and solving for the third.

Average speed is where most students go wrong. They take two speeds, add them, and divide by two — but that only works if you spent equal time at each speed. The correct formula is total distance divided by total time. Imagine driving 100 km at 50 km/h (taking 2 hours) and then another 100 km at 100 km/h (taking 1 hour). Your average speed isn't (50+100)/2 = 75 km/h. It's total distance (200 km) divided by total time (3 hours) = 66.7 km/h. The slower speed dragged your average down because you spent more time going slow.

Relative speed becomes essential when two things are moving at the same time. If two trains are 300 km apart and heading toward each other at 40 km/h and 60 km/h, they're closing the gap at 100 km/h — the sum of their speeds. So they meet in 3 hours. If they're moving in the same direction, the faster one only gains on the slower one at the difference of their speeds. This concept extends to any scenario where you care about how fast the distance between two moving objects is changing, not just how fast each one is moving individually.

The boat and stream problem adds a river current into the mix. A boat moving in still water has a certain speed. When the river flows, it pushes the boat downstream (adding to effective speed) or pushes against it upstream (subtracting from effective speed). The boat's speed in still water is its own capability; the river's speed is external interference. Downstream speed is their sum; upstream speed is their difference. The river speed itself is half the difference between downstream and upstream speeds, and the boat's still-water speed is half their sum.

### Key Formulas
| Symbol | Meaning |
|--------|---------|
| D = S × T | Core relationship |
| S = D/T | Speed from distance and time |
| T = D/S | Time from distance and speed |
| Avg Speed | Total Distance / Total Time |
| Relative speed (toward) | S₁ + S₂ |
| Relative speed (same dir) | |S₁ - S₂| |
| Downstream speed | B + R |
| Upstream speed | B - R |
| km/h to m/s | S × 5/18 |
| m/s to km/h | S × 18/5 |

### Step-by-Step Example
**Q:** Two trains 200 km apart approach each other at 50 km/h and 70 km/h. How long until they meet?

**Step 1:** Since they're moving toward each other, relative speed = 50 + 70 = 120 km/h.
**Step 2:** Time = Distance / Relative Speed = 200 / 120 = 5/3 hours = 1 hour 40 minutes.
**Answer:** **1 hour 40 minutes**

### Common Mistakes
- Calculating average speed as arithmetic mean → Only valid when time spent at each speed is equal; otherwise use Total Distance / Total Time
- Forgetting to convert units → km/h and m/s are different; always check what's being asked before solving
- Mixing up downstream/upstream formulas → Downstream: boat + stream speed (faster). Upstream: boat - stream speed (slower)

### Quick Test (2 Qs)
1. Q: A man rows upstream at 12 km/h in still water, and the river flows at 3 km/h. His downstream speed is? Options: A) 9 km/h B) 12 km/h C) 15 km/h D) 36 km/h. Ans: **C) 15 km/h** (Reason: Downstream = B + R = 12 + 3 = 15 km/h)
2. Q: A car goes 240 km at 80 km/h and returns at 60 km/h. Average speed for the round trip? Options: A) 70 km/h B) 68.6 km/h C) 72 km/h D) 69 km/h. Ans: **B) 68.6 km/h** (Reason: Total distance = 480 km. Time out = 3h, return = 4h. Total time = 7h. Avg speed = 480/7 ≈ 68.6 km/h)

### 🔴 Extended

### Concept Deep Dive
Time, speed, and distance is a topic where surface familiarity masks significant complexity. Every formula looks simple — D = S × T, average speed = total distance / total time, relative speed = sum or difference — but GATE's real challenge lies in layered problems where these basic concepts combine in non-obvious ways. A single problem might involve multiple journey segments with different speeds, perhaps with a stoppage time thrown in, or require you to work backwards from meeting times to find individual speeds.

Average speed deserves deep conceptual attention because it has two distinct interpretations that students frequently confuse. The arithmetic mean of speeds (S₁ + S₂) / 2 applies only when you traveled equal distances at each speed. The harmonic mean applies when you spent equal times at each speed. The correct generalized formula — total distance / total time — always works regardless of how the journey was split. Consider a journey where you spend 1 hour at 60 km/h (covering 60 km) and 3 hours at 40 km/h (covering 120 km). Total distance = 180 km, total time = 4 hours, average speed = 45 km/h. Notice that (60 + 40) / 2 = 50, which is wrong. The time-weighted average (weighted toward the slower speed) gives 45, which matches.

The concept of relative speed is fundamentally about frames of reference. When you measure speed relative to a moving object rather than the ground, you're changing your perspective. Two trains moving at 60 km/h in the same direction appear stationary to each other — their relative speed is zero. But to an observer on the ground, they're both moving at 60 km/h. This reframing is powerful because problems about objects chasing, meeting, or crossing each other become easier when you think in relative terms. The gap between them changes at the difference of their speeds; when the gap is zero, they've met or caught up.

Boats and streams problems add a layer of physics intuition. A boat trying to move across a river doesn't travel in a straight line relative to the ground — it gets pushed sideways by the current. Its actual path is a combination of its own effort across the river and the current's downstream push. When asked for "speed in still water" versus "speed in the stream," you're being asked to separate the boat's inherent capability from external influence. The algebra is straightforward (downstream + upstream = 2B, downstream - upstream = 2R), but the physical intuition — that current helps in one direction and hinders in the other — should guide your setup.

Circular motion problems in TSD are deceptively tricky. When two runners start at the same point on a circular track and run at different speeds, they meet when the faster has lapped the slower by a whole number of laps. The relative speed (difference) tells you how fast the gap closes. For them to meet at the starting point again, both must separately complete integer laps in the same time. These problems require careful attention to whether they're asking about meeting at the starting point versus meeting anywhere on the track.

### Advanced Formula Derivation
**Average Speed for Two Equal Distances:**
If distance d is covered at speed S₁ and the same distance d at speed S₂:
Total distance = 2d
Total time = d/S₁ + d/S₂ = d(S₁ + S₂) / (S₁S₂)
Average speed = 2d / [d(S₁ + S₂) / (S₁S₂)] = 2S₁S₂ / (S₁ + S₂)
This is the **harmonic mean** of S₁ and S₂.

**Boat and Stream Formulas:**
Let B = boat speed in still water, R = river current speed.
Downstream speed = B + R
Upstream speed = B - R
Adding: (B + R) + (B - R) = 2B → B = (Downstream + Upstream) / 2
Subtracting: (B + R) - (B - R) = 2R → R = (Downstream - Upstream) / 2

**Meeting Time on Circular Track:**
Two runners with speeds S₁ and S₂ (S₁ > S₂) on a circular track of length L.
Relative speed = S₁ - S₂ (in distance units per time unit).
Time to first meeting = L / (S₁ - S₂) if running in same direction.
If running in opposite directions: Time to meeting = L / (S₁ + S₂).

### GATE-Level Numerical Problems
**Q1 (GATE 2022):** A train moving at 45 km/h takes 20 seconds to pass a platform 200 m long. How long will it take to pass a man running at 9 km/h in the opposite direction?
- Working: Train speed = 45 km/h = 45 × 5/18 = 12.5 m/s. Train length = speed × time to pass platform - platform length. Time to clear platform = time to pass platform completely = 20 sec. In 20 sec, train travels 12.5 × 20 = 250 m. Since 200 m is platform, train length = 250 - 200 = 50 m. Relative speed of train and man (opposite) = 12.5 + 9 × 5/18 = 12.5 + 2.5 = 15 m/s. Time to pass man = (train length) / relative speed = 50 / 15 = 10/3 ≈ 3.33 seconds.
- Answer: **3.33 seconds (approximately)**
- Common error: Forgetting to find the train's length first, or using train's absolute speed instead of relative speed when passing the man.

**Q2 (GATE 2020):** A boy goes to school at 4 km/h and returns at 3 km/h. The total time taken is 3.5 hours. Find the distance between his house and school.
- Working: Let distance one-way = d km. Time going = d/4 hours, time returning = d/3 hours. Total = d/4 + d/3 = 3.5. (3d + 4d)/12 = 3.5 → 7d/12 = 3.5 → d = 3.5 × 12 / 7 = 6 km.
- Answer: **6 km**
- Common error: Trying to use average speed directly without establishing the distance first. Average speed here = 2×3×4/(3+4) = 24/7 km/h ≈ 3.43 km/h, but this doesn't help find d directly.

**Q3:** Two cyclists start from points A and B simultaneously and head toward each other. After meeting, they take 16 hours and 25 hours respectively to reach their destinations. If the speed of the first cyclist is 20 km/h, find the distance between A and B.
- Working: Let speed of first = S₁ = 20 km/h, speed of second = S₂. Let distance between them = D. When they meet, first has traveled d₁, second has traveled d₂ = D - d₁. Time for first to cover d₂ = 16 hours, so d₂ = S₁ × 16 = 320 km. Time for second to cover d₁ = 25 hours, so d₁ = S₂ × 25. Also, at meeting point: d₁/S₁ = d₂/S₂ (time to meeting is equal). So d₁/20 = 320/S₂ → d₁ × S₂ = 6400. Substituting d₁ = 25S₂: 25S₂ × S₂ = 6400 → S₂² = 256 → S₂ = 16 km/h. Then d₁ = 25 × 16 = 400 km. Total D = d₁ + d₂ = 400 + 320 = 720 km.
- Answer: **720 km**
- Common error: Jumping to formulas instead of using the time equality at the meeting point. The key insight is that time taken by each from start to meeting equals time taken by the other to cover the remaining distance after meeting.

### Multiple Approaches
**Method A: Algebraic setup**
Set up equations for each segment. Use D = S × T for each phase. Solve the system of equations. Best for multi-segment journeys with unknown distances or speeds.

**Method B: Ratio approach**
When two travelers start simultaneously from opposite ends, the distance they cover before meeting is proportional to their speeds. If A covers d₁ and B covers d₂ before meeting, then d₁/d₂ = S₁/S₂. This saves setting up time equations.

**Method C: Relative speed visualization**
Draw the distance-time relationship as a single line. The crossing point represents the meeting. The slope represents speed. This works best for two-body problems.

**When to use:** Ratio approach for meeting-point problems. Algebraic for complex multi-leg journeys. Relative speed for chase problems.

### Tricky Cases
- **Meeting at right angles:** If two people start from the same point and walk at right angles, their distance apart grows at √2 times each speed (Pythagorean theorem). After t hours, distance = t × √(S₁² + S₂²).
- **Catch-up on a circular track:** If the faster runner laps the slower one n times before meeting at start, the faster has run n+1 laps when the slower has run n laps. Time = (n+1)L/S₁ = nL/S₂.
- **Unit conversion traps:** km/h to m/s multiplies by 5/18; m/s to km/h multiplies by 18/5. A common mistake is using the wrong conversion direction. Always ask: is m/s larger or smaller than km/h for the same speed? (Answer: m/s is smaller, so to convert km/h to m/s you reduce the number.)

*Content adapted based on your selected roadmap duration.*
