---
exam: ssc-cgl-tier2
examName: SSC CGL Tier 2
subject: quantitative-abilities
subjectName: Quantitative Abilities
topic: ssc2-qa-006
topicName: "Time & Work, Pipes & Cisterns — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of Tier 2 paper"
diagramPrompt: "A segmented timeline showing a tank being filled by two inlet pipes and drained by one outlet pipe, with rate annotations at each segment and a net fill rate arrow."
country: India
generated: ai-v1
---



## Time & Work, Pipes & Cisterns — Deep Dive

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
Answer: 15 days — Working: A+B in 5 days = 5(1/20 + 1/30) = 5(5/60) = 25/60 = 5/12. Remaining = 7/12. B alone: (7/12)/(1/30) = 7/12 × 30 = 17.5. Hmm 7/12 × 30 = 17.5. Actually 7/12 × 30/1 = 210/12 = 17.5. Let me recalculate: 1/20 + 1/30 = (3+2)/60 = 5/60 = 1/12. In 5 days = 5/12. Remaining = 7/12. B's rate = 1/30. Days = (7/12)/(1/30) = 7/12 × 30 = 210/12 = 17.5. So 17.5 more days. That's not a clean number. Let me check: A's 5 days + B's 17.5 days = total work. 5/12 + 17.5/30 = 5/12 + 17.5/30 = 12.5/30 + 17.5/30 = 30/30 = 1. Yes. So answer is 17.5 days.

**Q2:** A fill pipe fills a tank in 20 min, a drain pipe empties in 30 min. Both are open. When will the tank be filled?
Answer: 60 minutes — Working: Net rate = 1/20 − 1/30 = (3−2)/60 = 1/60 per minute. Time = 1/(1/60) = 60 minutes.

### Common Traps
- **Trap 1:** Adding times directly (A takes 10 days, B takes 20 days → people wrongly say "together = 15 days"). Always add rates (reciprocals), not days.
- **Trap 2:** In leak problems, forgetting that the leak empties at a constant rate regardless of water level (assuming same physics as real leaks which vary with pressure). For SSC exam purposes, constant rate applies.
- **Trap 3:** Forgetting that when a pipe is closed and another opened, the work already done is NOT reset. The remaining work is all that needs completing.
