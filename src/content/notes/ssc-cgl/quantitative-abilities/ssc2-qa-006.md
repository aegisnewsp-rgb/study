---
exam: ssc-cgl-tier2
examName: SSC CGL Tier 2
subject: quantitative-abilities
subjectName: Quantitative Abilities
topic: ssc2-qa-006
topicName: "Time & Work, Pipes & Cisterns"
tier: unified
weight: 2
weight_unit: "% of Tier 2 paper"
diagramPrompt: "A segmented timeline showing a tank being filled by two inlet pipes and drained by one outlet pipe, with rate annotations at each segment and a net fill rate arrow."
country: India
generated: ai-v1
---

# Time & Work, Pipes & Cisterns

### 🟢 Lite

### Key Rule / Formula
If A can do a work in x days, A's 1-day work = 1/x. Combined work of A and B = 1/x + 1/y. Time taken together = 1 / (1/x + 1/y) = (xy)/(x+y).

### Memory Trick
**More Men = Less Days (inverse proportion).** Pipes filling a tank are just workers filling a work — inlet pipes = positive workers, outlet pipes = negative workers.

### 1-Sentence Summary
Time & work problems convert individual rates into combined rates using reciprocal addition; pipes and cisterns add inlet rate (filling) minus outlet rate (emptying).

### Quick Example
Q: A can do a work in 10 days, B can do it in 20 days. How many days together?
A: 1/10 + 1/20 = 3/20. Together = 20/3 = **6⅔ days**.

### 🟡 Standard

### Concept
Time and work is fundamentally about rates. If someone can complete a job in n days, their daily work rate is 1/n of the job. When multiple workers combine, add their rates. The total work is always considered as 1 unit. This "rate approach" is the most reliable method — avoid trying to find LCM of days unnecessarily.

Pipes and cisterns use the same logic: a filling pipe has positive rate, an emptying pipe has negative rate. The net rate determines how fast the tank fills or empties. If a pipe can fill in x hours, its rate = 1/x per hour.

**Work with Men and Machines:** Sometimes the question introduces machines (like pumps or tractors) alongside men. The approach remains the same — convert each entity's rate and add/subtract.

**Negative Work (Outlet Pipes):** When an outlet pipe is open while inlet pipes fill, the net rate = (sum of inlet rates) − (sum of outlet rates). If the net rate is negative, the tank empties instead of filling.

### Key Points
- If A can do work in x days, B in y days, together in xy/(x+y) days.
- If A is twice as efficient as B: A's time = B's time/2, or A's 1-day work = 2 × B's 1-day work.
- If A and B work together for n days, then A completes remaining in m days: Total work = n(1/x + 1/y) + m(1/x) = 1.
- For filling + emptying pipes: Net filling time = (product of individual times) / (difference of filling and emptying rates).
- When workers join or leave mid-work, calculate work done in each segment separately.

### Worked Example
**Q:** A pipe can fill a tank in 10 hours. Due to a leak, it takes 25 hours to fill. How long will the leak take to empty the full tank?
**Approach:** Pipe's rate = 1/10 per hour. With leak, effective rate = 1/25 per hour. Let leak's emptying rate = 1/L. Then 1/10 − 1/L = 1/25 → 1/L = 1/10 − 1/25 = (5−2)/50 = 3/50 → L = 50/3 = 16⅔ hours.
**Answer:** 16⅔ hours

### SSC Pattern / Tips
- When multiple pipes fill/empty simultaneously, always subtract outlet rates from inlet rates for net rate.
- For leak problems, the leak rate = pipe rate − effective rate (positive value, as leak empties).
- If question asks "how long to fill if pipe A is open and pipe B closed for first x hours", solve in two segments.
- Use man-days concept: M₁ × D₁ = M₂ × D₂ when same work is done.

### 🔴 Extended

### Full Concept
**Standard Work Equation:** The master formula for time and work is: Total Work = Σ(Rate × Time) for each worker. Since total work = 1, you can set up equations with one unknown.

**Efficiency-Based Approach:** If A is x times as efficient as B, then A's 1-day work = x × B's 1-day work, and A takes 1/x of B's time. This is critical when comparing workers: A can do a job in 20 days, B is 1.5 times as efficient as A — B takes 20/1.5 = 13.33 days.

**Man-Days Method:** Work = Men × Days (constant for same job). If 10 men build a wall in 15 days, 15 men build it in 10 days (M₁D₁ = M₂D₂ = constant). However, this only applies when all men work equally. If some workers are less efficient, convert to "effective men" first.

**Pipes and Cisterns — Advanced:** The most complex version has alternating schedules or multiple pipes opening/closing at different times. Example: "Pipe A fills in 20 min, B fills in 30 min. Both open together, but A is closed after 10 min. Then B continues alone." Solve: A+B for 10 min = 10(1/20 + 1/30) = 10(5/60) = 50/60 = 5/6 of tank. Remaining 1/6 done by B alone: (1/6)/(1/30) = 5 minutes.

**Negative Worker Concept:** An outlet pipe in a cistern problem is literally a "negative worker" — it subtracts from the total rate. When a leak is present alongside filling pipes, the net rate is the algebraic sum.

**Combined Work with Rest Days:** Some workers work some days, then rest, alternating. The effective work done per "cycle" (work + rest) determines total time.

### SSC CGL Deep Analysis
- **Frequency:** 1–2 questions per paper. Pipes and cisterns appear every alternate year; time and work with efficiency comparisons is nearly annual.
- **Difficulty:** Medium. The two-worker formula is simple, but multi-stage problems with workers joining/leaving trip up 40% of candidates.
- **Recent trend:** Questions combining work with wages/payments (how much each worker should be paid), or work with simultaneous filling and emptying of multiple tanks.
- **Newer patterns:** "A can do 40% of work in 8 days. B can do 30% in 6 days. How long for both to complete?" Set up 1-day rates, find remaining work, solve.
- **Total weight in Tier 2:** Roughly 2–3% of the quant paper.

### High-Scoring Strategy
1. Always work with "1 job = 1 unit" and convert individual times to daily rates (reciprocal).
2. For leak + pipe problems: Pipe rate − Leak rate = Effective rate. The leak's time = 1/(Pipe rate − Effective rate).
3. When workers join late, calculate work done before they joined, then add their rate for remaining work.
4. For payment division problems, divide total wages in ratio of (man × days × efficiency).
5. In pipes with alternating schedules, calculate work per full cycle first, then determine how many cycles needed.

### SSC-Level Practice
**Q1:** A and B can do a work in 20 and 30 days respectively. They work together for 5 days, then A leaves. How many more days for B to finish?
Answer: 17.5 days — Working: Combined rate = 1/20 + 1/30 = (3+2)/60 = 5/60 = 1/12 per day. In 5 days together they complete 5 × 1/12 = 5/12 of the work. Remaining = 1 − 5/12 = 7/12. B alone works at 1/30 per day, so the time B needs = (7/12) ÷ (1/30) = 7/12 × 30 = 210/12 = 17.5 days. Check: A+B for 5 days (5/12) + B for 17.5 days (17.5/30 = 7/12) = 5/12 + 7/12 = 1 complete job. ✓

**Q2:** A fill pipe fills a tank in 20 min, a drain pipe empties in 30 min. Both are open. When will the tank be filled?
Answer: 60 minutes — Working: Net rate = 1/20 − 1/30 = (3−2)/60 = 1/60 per minute. Time = 1/(1/60) = 60 minutes.

### Common Traps
- **Trap 1:** Adding times directly (A takes 10 days, B takes 20 days → people wrongly say "together = 15 days"). Always add rates (reciprocals), not days.
- **Trap 2:** In leak problems, forgetting that the leak empties at a constant rate regardless of water level (assuming same physics as real leaks which vary with pressure). For SSC exam purposes, constant rate applies.
- **Trap 3:** Forgetting that when a pipe is closed and another opened, the work already done is NOT reset. The remaining work is all that needs completing.

*Content adapted based on your selected roadmap duration.*
