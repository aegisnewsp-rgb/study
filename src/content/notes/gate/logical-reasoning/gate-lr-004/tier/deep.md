---
exam: gate
examName: GATE
subject: logical-reasoning
subjectName: Logical Reasoning
topic: gate-lr-004
topicName: "Assertion & Reason — Deep Dive"
tier: deep
weight: 2
weight_unit: "% of GA section"
diagramPrompt: "An advanced decision matrix for Assertion & Reason: rows represent statement truth (true/false), columns represent reason truth (true/false), cells show the resulting option (A/B/C/D/E) and whether the explanation link is required. Includes examples of each cell."
country: India
generated: ai-v1
---


## Assertion & Reason — Deep Dive

### Full Concept Explanation

Assertion & Reason questions are deceptively tricky. On the surface, they seem to test simple factual knowledge — but that's only half the battle. The real skill being tested is your ability to distinguish between truth, explanation, and logical causation. Many students with strong subject knowledge still lose marks here because they confuse "the reason is true" with "the reason explains the assertion."

The fundamental structure is:
- **Assertion (A):** A claim about the world — something asserted to be true.
- **Reason (R):** An explanation for why the assertion is true — a cause, justification, or mechanism.

Your job is to evaluate three things independently:
1. Is the Assertion true? (Factual judgment)
2. Is the Reason true? (Factual judgment)
3. Does the Reason correctly explain the Assertion? (Logical judgment)

The third judgment is the most subtle. A reason can be true without explaining the assertion, and a reason can be false while the assertion is still true (just for different reasons). Understanding these distinctions is what makes or breaks your performance in this question type.

**Why Three Independent Judgments?**

Because each of the five options represents a different combination:
- **A:** S=true, R=true, AND R explains S — All three conditions met
- **B:** S=true, R=true, BUT R does not explain S — Facts are right, but the causal link is wrong
- **C:** S=true, R=false — The statement is true but the explanation given is wrong
- **D:** S=false, R=false — Both the claim and the explanation are wrong
- **E:** S=false, R=true — The explanation sounds plausible but the actual claim is false

The E option is particularly interesting — it tests whether students can recognize that even a technically correct explanation doesn't validate a wrong assertion. The reason might be a real phenomenon, but it might explain something different.

**The Logic of Explanation:**

For a reason to explain an assertion, there must be a logical or causal connection. The explanation must actually account for why the assertion is true, not just be a related true fact.

Consider: Assertion "It is raining" with Reason "The roads are wet." Both are true, but the roads being wet doesn't explain why it's raining — it could have been caused by a street cleaner, a burst pipe, or rain. The reason needs to be the specific cause of the assertion, not just something that co-occurs or is logically related in some other way.

**Evaluating Factual Truth:**

For the assertion and reason, evaluate each on its own merits using your knowledge:
- Apply the scientific principle or fact correctly
- Check if the mechanism described is accurate
- Verify cause-effect relationships
- Be careful with absolute statements ("always," "never," "all") — they are easier to falsify than qualified ones

**When Both Are True But Not Linked:**

This is the most common trap and the most commonly misunderstood option (B). Examples:
- Assertion: "Water boils at 100°C at sea level." Reason: "Water has a high specific heat capacity." Both true, but the reason doesn't explain the boiling point — the boiling point is determined by atmospheric pressure, not specific heat.
- Assertion: "The sky appears blue." Reason: "Nitrogen is the most abundant gas in the atmosphere." Both true, but nitrogen abundance doesn't explain blue color (Rayleigh scattering does).
- Assertion: "Humans cannot survive without water." Reason: "Water covers 70% of Earth's surface." Both true, but coverage doesn't explain why humans can't survive without it.

**When the Assertion is False but Reason is True (Option E):**
- Assertion: "Sound cannot travel through space." Reason: "Space is a vacuum containing no particles." Both the reason and the fact that space is a vacuum are true, BUT sound actually cannot travel through space (it's a vacuum), so the assertion here is actually TRUE in this case. For option E, we'd need an actually false assertion with a true reason.
- Assertion: "The Sun is a planet." Reason: "The Sun is a celestial body." The assertion is false (Sun is a star), reason is true. Option E.

**When Both Are False (Option D):**
- Assertion: "Light travels faster than sound." (True actually — light does travel faster than sound)
- Assertion: "Diamond is the hardest natural substance." (True)
- Need genuinely false assertions with false reasons for D.

### GATE-Level Practice

**Q1:** Assertion: Diamond is the hardest natural substance.
Reason: Diamond is made of carbon atoms arranged in a cubic crystal structure.

Answer: **A** — Both are true, and the crystal structure (tetrahedral covalent bonds making a rigid 3D network) is precisely why diamond is so hard. The reason correctly explains the assertion.

**Q2:** Assertion: A body at rest cannot have acceleration.
Reason: Acceleration is the rate of change of velocity, and a body at rest has zero velocity, so its velocity cannot change.

Answer: **A** — Both true, and the reason correctly explains why a body at rest has zero acceleration (no change in velocity). However, a body at rest CAN have acceleration if forces act on it — but that's different from "has acceleration." Actually, if forces act, acceleration is not zero. So a body at rest with no forces has zero acceleration. The reasoning is correct.

**Q3:** Assertion: The boiling point of water decreases at higher altitudes.
Reason: At higher altitudes, atmospheric pressure decreases, and liquids boil when their vapor pressure equals atmospheric pressure, so lower pressure means lower boiling point.

Answer: **A** — Both true, and the reason correctly explains the assertion through the physics of vapor pressure and boiling.

**Q4:** Assertion: All planets revolve around the Sun in elliptical orbits.
Reason: This is because the Sun exerts a gravitational force on all planets.

Answer: **B** — Both assertion and reason are true. However, the gravitational force alone doesn't determine elliptical orbits — it's specifically the inverse-square law nature of gravity combined with initial tangential velocity that results in elliptical orbits. Circular orbits would also satisfy "gravitational force acts," so the reason doesn't specifically explain elliptical vs circular. Option B.

**Q5:** Assertion: The Moon does not fall on Earth because it is in a geosynchronous orbit.
Reason: A geosynchronous orbit has the same rotational period as Earth.

Answer: **C** — The assertion is false (the Moon is NOT in a geosynchronous orbit — it's much farther and orbits in ~27 days, not 24 hours). The reason is true (geosynchronous orbits do match Earth's rotation). Option C.

### Multiple Approaches

**Approach 1: Truth-First (Systematic)**
Evaluate assertion truth, then reason truth, then link. This methodical approach ensures you don't get confused.

**Approach 2: Link-First (Faster for Experts)**
Check if the reason actually explains the assertion first. If both are true and linked → A. If both true but not linked → B. Then verify truth values. This approach is faster if you have strong subject knowledge.

**Approach 3: Counterexample Generation**
For option B questions, try to find a counterexample where the assertion is true but the reason given is NOT the explanation. If you can find one, it's definitely not option A. If you can't but both are true, check carefully whether the reason is genuinely the mechanism.

### Tricky Cases / Edge Cases

- **Universal quantifiers:** "All," "every," "always," "never" make statements easy to falsify. One counterexample breaks the assertion.
- **"Because" in the reason:** The word "because" is a logical signal. When it appears, the reason is being offered as the specific cause. Make sure it actually is.
- **Multiple valid explanations:** Sometimes the reason is a valid explanation but not the ONLY explanation. Option A only requires that the reason correctly explains — it doesn't need to be the complete or only explanation.
- **Partial truths:** The reason might be partially true but incomplete or misleading. Judge whether it genuinely accounts for the assertion.
- **Cause vs Correlation:** The reason might describe something that happens alongside the assertion (correlation) without causing it (causation). For example: "It gets dark when the Sun sets. The Sun actually goes below the horizon." Both true, and the reason does explain the dark (Sun going below horizon blocks sunlight). That's causation.
- **Technical vs colloquial truth:** Some terms have specific technical meanings. Make sure you understand the precise technical claim being made in both assertion and reason.
- **Option E's existence:** Not all exam formats include option E. Some have only A-D. Know your exam pattern.
