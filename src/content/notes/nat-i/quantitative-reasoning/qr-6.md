---



exam: nat-i
examName: NAT-I (NTS)
subject: quantitative-reasoning
subjectName: Quantitative Reasoning
topic: qr-6
topicName: Time, Distance and Work
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.135342"
lastUpdated: "2026-06-21"
diagramPrompt: "Educational diagram illustrating Time, Distance and Work with clear labels, white background, exam-style illustration"




---

# Time, Distance and Work

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Time, Distance and Work** quantifies how three linked variables — **speed**, **time**, and **distance** — interact, and extends the same additive-rate logic to **work-rate** problems (men, machines, pipes). The single must-know triad is:

- **Distance = Speed × Time**
- **Average Speed = Total Distance ÷ Total Time** (use harmonic mean **2xy / (x + y)** when two equal *time* intervals are travelled at speeds x and y)
- **Relative Speed** = sum if objects move towards each other, difference if they move in the same direction.

For work: if A finishes a job in *a* days and B in *b* days, together they finish in **ab / (a + b)** days because their per-day rates are **1/a + 1/b**. For NAT-I, expect 1–2 short MCQs testing average-speed or pipe-and-cistern logic. Always convert every rate to the **same time unit** before adding.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Core Relationships

The **Speed–Time–Distance (STD)** triangle rests on one equation rewritten three ways:

| Quantity | Formula | Units |
|---|---|---|
| Distance | Speed × Time | km, m, miles |
| Speed | Distance / Time | km/h, m/s |
| Time | Distance / Speed | h, s |

**Relative speed** is the closing-rate between two moving objects. For two runners on the same straight track, their gap closes at *S₁ + S₂* when running towards each other and at *|S₁ − S₂|* when running in the same direction. This single rule solves all chase, meeting, and train-crossing questions.

#### Average Speed

**Average speed = total distance / total time** — never the arithmetic mean of speeds unless equal distances are covered. The two important special cases:

- **Equal time intervals at speeds x and y** → harmonic mean **2xy / (x + y)**.
- **Equal distance intervals at speeds x and y** → arithmetic mean **(x + y) / 2**.

A 60 km outward trip at 30 km/h and return at 60 km/h gives average speed of 40 km/h (harmonic), not 45 km/h.

#### Work Rate (Pipes, Cisterns, Man-days)

If a worker (or inlet pipe) completes the whole job in *t* hours, the **rate = 1/t job per hour**. Several workers operating simultaneously contribute rates that **add**:

```
Combined rate = 1/a + 1/b + 1/c
Time together = 1 / (1/a + 1/b + 1/c)
```

For two workers, this simplifies to **ab / (a + b)** days. An outlet pipe or leak has a **negative rate** and is subtracted. The **man-days identity** M₁ × D₁ × H₁ = M₂ × D₂ × H₂ lets you swap workforce size for duration while keeping total work constant.

#### Worked Mini-example

A cistern has two inlet pipes (filling in 6 h and 8 h) and one leak (emptying in 12 h). Net rate per hour = 1/6 + 1/8 − 1/12 = (4 + 3 − 2)/24 = 5/24. Time to fill = **24/5 = 4.8 hours**.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Edge Cases and Subtleties

**Partial work carried forward.** If A works for *d* days then leaves, the unfinished fraction is **1 − d/a**. The remaining worker B then needs **(1 − d/a) × b** more days, not *b* days from scratch.

**Negative combined rate.** When leak rate exceeds inlet rate, the cistern actually empties; NAT-I questions sometimes ask how long until a half-full tank drains, in which case multiply the time by the fractional fullness.

**Time-gain in races.** In a 100 m race, if A beats B by 10 m, it means when A finishes, B has run 90 m. Equivalently, when B runs 100 m, A has run 100 × (100/90) ≈ 111.11 m. Translate the win margin into a *speed ratio*, then reuse STD.

**Unit conversion trap.** NAT-I mixes km/h, m/s, and minutes. Memorise **1 m/s = 18/5 km/h = 3.6 km/h**. A 250 m train crossing a 150 m platform at 54 km/h covers 400 m at 15 m/s → **26.67 s**.

#### Common Mistakes

1. Averaging speeds with **arithmetic mean** for unequal-distance trips.
2. Treating two pipes filling the same tank as **independent** instead of additive.
3. Forgetting that **time to fill** and **rate of filling** are reciprocals.
4. Applying relative-speed *sum* when both objects run **in the same direction**.

#### Practice Prompts

1. A car travels the first half of a journey at 40 km/h and the second half at 60 km/h. Find the average speed for the **equal-distance** case, then recompute assuming the two speeds apply to **equal times**. Comment on which answer is larger.
2. Pipe P fills a tank in 9 h, Q in 12 h, and a leak empties it in 18 h. Starting with an empty tank, all three are opened for 3 h and then the leak is closed. How much **additional time** does Q alone need to finish?

#### Exam Strategy for NAT-I

Quantitative Reasoning carries about **4 % weight**, yielding roughly 1 question from this cluster. Scan the answer choices first — NAT-I often offers **ab / (a+b)** and **(x+y)/2** as deliberate distractors. Convert every rate to hours, set up the additive-rate fraction, and pick the choice matching the harmonic mean when time intervals are equal.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
