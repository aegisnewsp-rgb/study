---
exam: cuet
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-008
topicName: "Time, Speed & Distance"
tier: unified
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "An advanced diagram showing a circular track with two runners starting from the same point but running in opposite directions, with meeting points marked. Show how relative speed determines how many times they meet."
country: india
generated: 2026-03-25
lastUpdated: 2026-03-25
---

# Time, Speed & Distance

### 🟢 Lite

### Key Formula/Rule
**Speed = Distance ÷ Time.** Rearrange freely: Distance = Speed × Time, Time = Distance ÷ Speed.

### Memory Trick
**"Shoe-Di-Tree"** 🦶 — Think of your shoe (Speed) going over the dirt (Distance) through the tree (Time). Same triangle, just cover what you need!

### 1-Sentence Summary
This topic tests how well you handle motion — objects moving at different speeds, in the same direction, opposite directions, or through water with currents.

### 30-Second Example
Q: A train 100 m long crosses a pole in 5 seconds. Speed in km/hr?
A: **72 km/hr** — Speed = 100/5 = 20 m/s. Multiply by 18/5 → 20 × 18/5 = 72 km/hr.

### 🟡 Standard

### Concept

The big secret of this chapter? **There's only one real formula: Speed = Distance ÷ Time.** Everything else is just this formula applied cleverly.

**Average Speed — The Trap**

Here's where students lose marks: **average speed is NOT (v₁ + v₂) ÷ 2.** That only works when traveling for the SAME TIME at each speed. When you travel the same DISTANCE at two different speeds, the correct formula is:

$$v_{avg} = \frac{2 v_1 v_2}{v_1 + v_2}$$

Why? Because you spend more time at the slower speed (covering the same distance), so the average skews toward the slower speed.

**Trains — The Length Factor**

A train isn't a point — it has length! When a train crosses:
- **A pole:** The distance covered = train's own length. Time = Length ÷ Speed.
- **A platform:** Distance = train length + platform length.
- **Another train:** Distance = sum of both train lengths. Use relative speed if they're moving.

**Boats in Water — The Current Effect**

A boat has a speed in still water (call it u). The stream flows at speed v.
- **Downstream (with current):** effective speed = u + v
- **Upstream (against current):** effective speed = u – v

You can find both:
- u = (downstream + upstream) ÷ 2
- v = (downstream – upstream) ÷ 2

**Relative Speed — Same or Opposite Direction?**

When two objects move:
- **Same direction:** Relative speed = difference of speeds (the faster "gains" on the slower)
- **Opposite direction:** Relative speed = sum of speeds (they "close the gap" faster)

### Key Formulas
| Formula | Use |
|---------|-----|
| Speed = Distance/Time | Core relationship |
| Average Speed (same dist) = 2v₁v₂/(v₁+v₂) | When covering equal distances at v₁ and v₂ |
| Average Speed (same time) = (v₁+v₂)/2 | When traveling equal times |
| Downstream speed = u + v | Boat with stream |
| Upstream speed = u – v | Boat against stream |
| Relative speed (same dir) = |v₁ – v₂| | Trains/objects going same way |
| Relative speed (opp dir) = v₁ + v₂ | Trains/objects going opposite ways |
| Time to cross train = (L₁+L₂)/relative speed | When two trains cross |

### Worked Example
**Q:** Two trains 150 m and 200 m long run at 40 km/hr and 30 km/hr in the same direction. How long to completely pass each other?

**Step 1:** Relative speed = 40 – 30 = 10 km/hr
**Step 2:** Convert to m/s: 10 × (5/18) = 50/18 = 25/9 m/s
**Step 3:** Total distance = 150 + 200 = 350 m
**Step 4:** Time = 350 ÷ (25/9) = 350 × 9/25 = 126 seconds

**Answer:** **126 seconds = 2 minutes 6 seconds**

### Common Errors
- **Forgetting to convert km/hr to m/s** → Multiply by 5/18. Don't mix units!
- **Using sum instead of difference for same direction** → Same direction = subtract speeds, opposite = add
- **Forgetting train length in platform problems** → Always add the train's own length to platform length

### 🔴 Extended

### Full Concept

**Why Average Speed ≠ (v₁ + v₂)/2**

This is the #1 conceptual trap. Let's prove it:

Say you travel 100 km at 50 km/hr (taking 2 hours), then 100 km at 100 km/hr (taking 1 hour).
- Total distance = 200 km
- Total time = 3 hours
- Average speed = 200/3 = **66.67 km/hr**

But (50 + 100)/2 = **75 km/hr** — that's WRONG.

The reason: you spent MORE time at the slower speed. The average naturally skews toward the slower value. The harmonic mean formula 2v₁v₂/(v₁+v₂) correctly weights by time.

**Circular Motion — Meeting and Overtaking**

On a circular track of length L:
- Two people running **same direction** with speeds v₁ and v₂ (v₁ > v₂):
  - Their relative speed = v₁ – v₂
  - Time between meetings = L/(v₁ – v₂)
  - They meet (v₁ – v₂)/L times per unit time

- Two people running **opposite directions**:
  - Their relative speed = v₁ + v₂
  - Time between meetings = L/(v₁ + v₂)
  - They meet (v₁ + v₂)/L times per unit time

**Trains Crossing Each Other**

When two trains of lengths L₁ and L₂ cross completely:
- **Opposite directions:** Time = (L₁ + L₂)/(v₁ + v₂)
- **Same direction:** Time = (L₁ + L₂)/|v₁ – v₂|

Key insight: In same-direction crossing, the faster train must cover the ENTIRE length of the slower train PLUS its own length relative to the slower train. Think of it from the slower train's perspective — how much of it does the faster train pass?

**The Boat-Stream System — Deeper Analysis**

The expressions u = (downstream + upstream)/2 and v = (downstream – upstream)/2 come from:
- Downstream = u + v
- Upstream = u – v
- Adding: downstream + upstream = 2u → u = (down+up)/2
- Subtracting: downstream – upstream = 2v → v = (down–up)/2

**Why this works:** The stream's effect is symmetric — it speeds you up by v downstream and slows you by v upstream. The boat's still-water speed u stays constant. By adding and subtracting the measured speeds, we can separate the two unknowns.

**Shortcuts for Relative Speed Problems**

1. **Meeting point in opposite directions:** If two objects start from points A and B (distance D apart) and move toward each other at speeds v₁ and v₂:
   - They meet after time t = D/(v₁ + v₂)

2. **Catch-up problems:** If A starts from point P and B starts later (or from a different point), set up the distance equation: distance traveled by A = distance traveled by B at the meeting/catch-up point.

3. **Round trip with current:** If a boat travels distance D upstream and returns downstream:
   - Total time = D/(u–v) + D/(u+v) = 2Du/(u²–v²)

### Multiple Approaches

**Standard Method:**
1. Identify what distance is being covered
2. Calculate relative speed
3. Apply Time = Distance/Speed
4. Convert units if needed

**Shortcut — Unit Conversion Trio:**
- km/hr to m/s: × (5/18)
- m/s to km/hr: × (18/5)
- Memorize: 1 km/hr = 5/18 m/s (you'll use this constantly!)

### CUET-Level Problems

**Q1:** Two runners start from the same point on a 400 m circular track at the same time. A runs at 8 m/s clockwise, B at 5 m/s anticlockwise. When and where do they first meet?

**Working:**
- Relative speed = 8 + 5 = 13 m/s (opposite directions)
- Time to meet = Track length / relative speed = 400/13 ≈ 30.77 seconds
- A covers: 8 × (400/13) = 3200/13 ≈ 246 m from start
- They meet at ≈ 246 m from start in A's direction

**Answer:** **≈ 30.77 seconds; ~246 m from start in clockwise direction**

**Q2:** A train passes a platform 120 m long in 15 seconds and a man standing on the platform in 8 seconds. Find the speed of the train.

**Working:**
- Train passes man: time = train length / speed → 8 = L / v → L = 8v
- Train passes platform: (L + 120) / v = 15 → (8v + 120)/v = 15
- 8 + 120/v = 15 → 120/v = 7 → v = 120/7 ≈ 17.14 m/s
- Speed in km/hr: 17.14 × 18/5 = 61.7 km/hr

**Answer:** **≈ 61.7 km/hr**

### Tricky Cases
- **Object moving in circle, find meetings at start point** → They meet at the start point only after completing integer number of laps. Find LCM of their lap times.
- **When one train starts after another** → Account for head-start distance/time before the chase begins
- **When speed varies during journey** → Break into segments, calculate each separately, sum the times
- **Finding speed of stream given round-trip time** → Use 2Du/(u²–v²) = total time, solve for v
- **Escalator problems** — treat escalator speed as a "current" or "stream" affecting effective walking speed

*Content adapted based on your selected roadmap duration.*
