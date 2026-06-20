---



exam: hat-ug
examName: HAT-UG (HEC Aptitude Test - Undergraduate)
subject: quantitative-reasoning
subjectName: Quantitative Reasoning
topic: qr-4
topicName: Average and Mixtures
weight: 4
country: pakistan
generated: "2026-03-24T08:32:08.006252"
lastUpdated: "2026-06-20"
diagramPrompt: "Educational diagram illustrating Average and Mixtures with clear labels, white background, exam-style illustration"




---

# Average and Mixtures

### 🟢 Lite — Quick Review (1h–1d)
> Rapid summary for last-minute revision before your exam.

**Average** is the sum of observations divided by the count: $\bar{x} = \frac{\sum x_i}{n}$. **Mixture** problems combine ingredients at different prices or concentrations to find a **mean price** or **ratio of quantities**. The fastest shortcut is the **alligation rule**, where the ratio of cheaper to dearer quantity equals $(d - m) : (m - c)$, with $c$, $m$, $d$ as cheaper, mean, and dearer price respectively. For repeated replacement of liquid, the original fraction remaining after $n$ steps is $\left(1 - \frac{x}{V}\right)^n$. HAT-UG typically tests 1–2 mixture or average questions worth 4 marks combined, usually MCQ format with single-digit numeric answers.

---

### 🟡 Standard — Regular Study (2d–2mo)
> Standard content for students with a few days to months.

#### Definitions and Core Formulas
The **arithmetic mean** (simple average) treats every value equally: $\bar{x} = \frac{\sum x_i}{n}$, where $n$ is the count. A **weighted average** weights each value by its frequency or quantity: $\bar{x}_w = \frac{\sum q_i x_i}{\sum q_i}$, used whenever groups of unequal size are combined — for instance, mixing 5 kg of rice at Rs 80/kg with 3 kg at Rs 100/kg gives a mean price of $\frac{5(80) + 3(100)}{8} = 87.5$ Rs/kg, **not** the simple mean of 90.

#### The Alligation Rule
**Alligation** is a graphical method to find the mixing ratio when the mean price $m$ lies between the cheaper price $c$ and the dearer price $d$:

$$
\text{Cheaper : Dearer} = (d - m) : (m - c)
$$

The cross-differences are always written with the mean price at the center. For example, mixing teas at Rs 200 and Rs 260 to obtain a blend worth Rs 230 gives ratio $(260 - 230) : (230 - 200) = 30 : 30 = 1 : 1$.

#### Shifting Averages
When a new entry changes the group average, the value of the new entry equals (new average × new count) − (old average × old count). This identity appears in classic "average of class changed after admission" questions.

#### Common Exam Patterns
- Finding the mean price of a mixture given quantities and individual prices.
- Finding the mixing ratio to achieve a target mean price.
- Computing the **pure substance content**: $\text{pure} = \frac{\text{concentration}}{100} \times \text{total quantity}$.

---

### 🔴 Extended — Deep Study (3mo+)
> Comprehensive coverage for students on a longer study timeline.

#### Weighted vs Simple Average — When to Use Which
The trap in mixture questions is conflating the two. If 3 students average 70 marks and 5 students average 90 marks, the combined average is the weighted value $\frac{3(70) + 5(90)}{8} = 82.5$, **not** the simple mean $\frac{70+90}{2} = 80$. HAT-UG commonly disguises this by phrasing "average of group A is X, group B is Y" without revealing the sizes — you must read carefully.

#### Pure Substance and Concentration
If a 40-litre solution is 25% acid, the acid content is $0.25 \times 40 = 10$ litres. To dilute to 10% acid, the new total volume must satisfy $0.10 \times V_{new} = 10$, so $V_{new} = 100$ litres, meaning 60 litres of water must be added. Conversely, evaporating or adding pure acid uses the same identity rearranged.

#### Repeated Replacement
A vessel of volume $V$ litres contains liquid; each step removes $x$ litres and refills with water. The original liquid remaining after $n$ steps is $V\left(1 - \frac{x}{V}\right)^n$. This is **multiplicative decay**, not additive — a common error is computing $V - nx$.

#### Common Mistakes
- Placing $m$ on the wrong side in alligation, reversing the ratio.
- Using simple mean instead of weighted mean in unequal-group problems.
- Forgetting to apply the power $n$ in replacement problems.
- Ignoring units when mixing quantities of different types (kg with litres).

#### Practice Prompts
1. Mix 8 kg of Rs 90 sugar with 12 kg of Rs 110 sugar. Find the mean price per kg.
2. A 60-litre vessel of milk is replaced by 10 litres of water each step. How much pure milk remains after 3 steps?

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
