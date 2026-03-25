---
exam: cuet-ug
examName: CUET UG
subject: quantitative-aptitude
subjectName: Quantitative Aptitude
topic: cuet-qa-008
topicName: "Time, Speed & Distance — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of Section II"
diagramPrompt: "An advanced diagram showing a circular track with two runners starting from the same point but running in opposite directions, with meeting points marked. Show how relative speed determines how many times they meet."
country: India
generated: ai-v1
---



## Time, Speed & Distance — Deep Dive

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
