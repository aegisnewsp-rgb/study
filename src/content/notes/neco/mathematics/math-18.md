---




exam: neco
examName: NECO SSCE
subject: mathematics
subjectName: Mathematics
topic: math-18
topicName: "Sequence and Series: AP and GP"
weight: 3
country: nigeria
generated: "2026-03-24T08:32:07.672637"
lastUpdated: "2026-07-24"
diagramPrompt: "Mathematical diagram showing Sequence and Series: AP and GP concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Sequence and Series: AP and GP

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

A **sequence** is an ordered list of numbers following a fixed rule, while a **series** is the sum of the terms of that sequence. An **Arithmetic Progression (AP)** has a constant **common difference d**, and a **Geometric Progression (GP)** has a constant **common ratio r** (r ≠ 0).

| Formula | Expression | Use |
| --- | --- | --- |
| AP nth term | Tₙ = a + (n − 1)d | Find any term |
| AP sum | Sₙ = n/2 [2a + (n − 1)d] | Add n terms |
| GP nth term | Tₙ = arⁿ⁻¹ | Find any term |
| GP sum (r ≠ 1) | Sₙ = a(1 − rⁿ)/(1 − r) | Add n terms |
| GP sum to infinity | S∞ = a/(1 − r) | Only when \|r\| < 1 |

- AM of a and b is (a + b)/2; GM is √(ab).
- For NECO, expect 2-mark short answers and a 5–6 mark structured problem.

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Recognising the Progression
Test consecutive pairs: if T₂ − T₁ = T₃ − T₂, the sequence is **AP** with d = that constant. If T₂/T₁ = T₃/T₂ = r, the sequence is **GP**. NECO SSCE Paper 1 frequently begins with this recognition step before asking for the nth term or sum.

#### Deriving the Key Formulas
Starting from T₁ = a and applying the rule repeatedly, T₂ = a + d, T₃ = a + 2d, … so Tₙ = a + (n − 1)d. Summing the n terms in pairs from opposite ends of the list gives Sₙ = n/2 [2a + (n − 1)d], which also equals n/2 (first + last term). For a GP, multiplying a by r each step gives Tₙ = arⁿ⁻¹. Multiplying Sₙ by r and subtracting produces the closed form Sₙ = a(1 − rⁿ)/(1 − r) for r ≠ 1; if r = 1 every term equals a so Sₙ = na.

#### Inserting Means Between Two Numbers
To insert m AMs between p and q, set a = p, find d from Tₘ₊₂ = q giving d = (q − p)/(m + 1), then list the terms. To insert m GMs between p and q, treat the block as a GP with first term p and (m + 2)th term q, giving r = (q/p)^(1/(m+1)).

| Concept | Key point |
| --- | --- |
| AM ≥ GM | (a + b)/2 ≥ √(ab); equality only when a = b |
| Sum to infinity | Valid **only** when \|r\| < 1; otherwise S∞ diverges |
| Negative r | Terms alternate in sign but \|r\| < 1 still gives convergence |
| Common traps | Mixing up AM and GM; forgetting the −1 in n − 1 |

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Worked Example
Find the sum of the first 8 terms of the AP with first term 3 and common difference 4. Using Tₙ = a + (n − 1)d gives the 8th term as 3 + 7(4) = 31. Then S₈ = 8/2 (3 + 31) = 4 × 34 = 136. Cross-check with Sₙ = n/2 [2a + (n − 1)d] = 4 [6 + 7(4)] = 4 × 34 = 136. ✓

#### Edge Cases and Connections
- A GP with any zero term forces all later terms to be 0, so S∞ and division-based sums break down — only the finite sum formula or Sₙ = na applies.
- When r = −1/2 and a = 4, S∞ = 4/(1 + 1/2) = 8/3, even though individual terms alternate: 4, −2, 1, −0.5, …
- AP/GP link closely with **compound interest** (r = 1 + i), **depreciation** (r = 1 − i), and **population models**, which is why NECO Paper 2 loves these applications.
- The arithmetic–geometric mean inequality, AM ≥ GM, is a useful sanity check: if AM ≠ GM numerically, you have swapped the formulas.

#### Practice Prompts
1. The 5th and 12th terms of an AP are 21 and 49. Find the sum of the first 20 terms.
2. A bouncing ball rises to 80% of its previous height. If the initial drop is 10 m, find the total vertical distance travelled before the ball comes to rest (use S∞ with r = 0.8).

## Continue your study

- **[View this topic in your NECO SSCE roadmap](/roadmap/?exam=neco&duration=1mo)** — see where "Sequence and Series: AP and GP" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=neco&duration=1d)** — 1-day sprint covering highest-weight topics
- **[NECO SSCE exam overview](/exams/neco/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/neco/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
