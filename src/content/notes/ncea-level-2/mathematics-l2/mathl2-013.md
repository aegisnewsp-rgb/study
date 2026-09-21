---
exam: ncea-level-2
examName: NCEA Level 2 (Mathematics)
subject: mathematics-l2
subjectName: Mathematics
topic: mathl2-013
topicName: "Investigate a situation involving elements of chance using a simulation (91268)"
weight: 2
country: newzealand
generated: "2026-09-20T13:15:00"
lastUpdated: "2026-09-20"
---

# Investigate a situation involving elements of chance using a simulation (91268) — NCEA Level 2 Mathematics Notes

Achievement Standard 91268 is a small internal standard (2 credits) that tests the use of simulation to investigate a probability situation. Students plan and run a probability simulation, justify the choice of model, carry out a sufficient number of trials, and interpret the results. The standard bridges the gap between theoretical probability (91267) and experimental probability, and is the foundation for the formal inference work in Level 3.

> Verify the live achievement standard document on https://www.nzqa.govt.nz/ncea/assessment/search.do?level=02&query=mathematics before planning revision around the figures below.

---

### 🟢 Lite — Quick Review (1h–1d)

#### Core facts in one pass

- **2 credits**, internally assessed by the school, NZQA moderated.
- Topics: planning a simulation, choosing the right random mechanism (dice, coins, random number generator, spreadsheet), running a sufficient number of trials, calculating experimental probability, comparing experimental and theoretical probability, interpreting the results.
- **Merit** requires relational thinking — selecting the right random mechanism for the situation.
- **Excellence** requires extended abstract thinking — justifying the number of trials, comparing with theoretical probability, generalising the simulation.

#### Examiner traps

- Running too few trials — the experimental probability will be unstable.
- Using a random mechanism that doesn't match the situation (e.g., a die for a 30% probability).
- Not comparing the experimental result with the theoretical probability.

---

### 🟡 Standard — Regular Study (2d–2mo)

#### The simulation process

1. **Identify the situation.** What is the random experiment? What is the probability of interest?
2. **Choose a model.** What probability distribution fits the situation (uniform, binomial, normal, custom)?
3. **Choose a random mechanism.** A die, a coin, a random number generator, or a spreadsheet formula.
4. **Plan the trials.** How many trials will you run? Why is this enough?
5. **Run the trials.** Carry out the simulation and record the outcomes.
6. **Calculate experimental probability.** The proportion of trials where the event of interest occurred.
7. **Compare with theoretical probability.** How close is the experimental probability to the theoretical?
8. **Interpret.** What does the result mean in the context of the original situation?

#### Mapping a situation to a random mechanism

| Probability needed | Random mechanism |
|---|---|
| P = 1/6 | One die |
| P = 1/2 | One coin, or random number 0-1 |
| P = 1/k | k-sided die, or random number modulo k |
| P = p (decimal) | Random number 0-1; "success" if < p |
| Continuous (e.g., normal) | Spreadsheet formula =NORM.INV(RAND(), μ, σ) |

#### Choosing the number of trials

A common rule of thumb: at least 100 trials for stable estimates, and at least 1000 trials for more precise estimates. The standard error of the experimental probability decreases with √n, so doubling the trials reduces the standard error by a factor of √2.

#### Worked example: free-throw simulation

A basketball player has a free-throw success rate of 75%. Simulate 100 trials of 10 free throws each. Estimate the probability that the player makes at least 8 of 10 free throws.

- Use random number generator (0-1).
- A throw is "made" if random < 0.75.
- For each trial of 10 throws, count the number made.
- Repeat 100 times.
- Estimate P(X ≥ 8) = (number of trials with X ≥ 8) / 100.

The theoretical value is P(X ≥ 8) for X ~ Binomial(10, 0.75), which can be computed directly. The simulation should give a similar value, within the expected variability.

---

### 🔴 Deep — Long-Term Mastery (1mo–6mo)

#### Comparing experimental and theoretical

For Excellence, the report should:

- State the experimental probability with the appropriate uncertainty (e.g., ± a few percentage points).
- State the theoretical probability.
- Discuss the agreement or disagreement.
- Identify sources of discrepancy (random variation, model choice, simulation errors).

The standard error of an experimental proportion is √(p(1−p)/n), so for p ≈ 0.75 and n = 100, the standard error is about 0.043 (4.3 percentage points). A difference of more than 2 × SE (about 8.6 percentage points) would be unusual under the assumed model.

#### Choosing the simulation tool

- **Physical dice/coins/spinners** — slow but tangible, good for small numbers of trials.
- **Spreadsheet RAND() function** — fast, can run thousands of trials, good for teaching.
- **Programming language (Python, R, etc.)** — fastest, most flexible, good for advanced simulations.

At Level 2, spreadsheet simulations are the most common choice. They balance accessibility with the ability to run many trials.

#### When simulation is appropriate

Simulation is most useful when:

- The theoretical probability is hard to compute analytically.
- The situation has many steps or complex dependencies.
- The theoretical model is uncertain and the experimental data is the main source of information.

For simple situations (coin tosses, dice rolls), direct computation is faster. For complex situations (queues, networks, biological systems), simulation is the standard tool.

#### Common misconceptions (and the correction)

- "More trials is always better." More trials give more precise estimates but cost more time. The right number depends on the precision needed.
- "Experimental probability should equal theoretical probability." It should be close, but random variation means they will differ slightly. The difference should be within a few standard errors.
- "Simulation can replace theory." No — theory gives exact answers; simulation gives approximate answers. They are complementary.
- "I can run 10 trials and call it done." No — 10 trials is not enough for stable estimates; 100+ is the minimum.

#### Specification reference

This achievement standard is internally assessed by the school. NZQA publishes the achievement standard document, clarifications, and exemplars on ncea.education.govt.nz. Re-check the live version of 91268 before final revision.

---

*Last updated 2026-09-20. Source: NZQA Level 2 Mathematics achievement standards, https://www.nzqa.govt.nz/ncea/assessment/search.do?level=02&query=mathematics. Awarding body: NZQA.*
