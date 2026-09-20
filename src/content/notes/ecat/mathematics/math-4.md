---



exam: ecat
examName: ECAT (Engineering College Admission Test)
subject: mathematics
subjectName: Mathematics
topic: math-4
topicName: "Trigonometry: Identities and Equations"
weight: 5
country: pakistan
generated: "2026-03-24T08:32:08.065551"
lastUpdated: "2026-09-20"
diagramPrompt: "Mathematical diagram showing Trigonometry: Identities and Equations concept with coordinate axes, labeled points, geometric shapes shaded appropriately, clean black and white style"




---

# Trigonometry: Identities and Equations

### 🟢 Lite — Quick Review (1h–1d)
> One identity unlocks almost every ECAT question in this topic — keep it on the top line of your rough work the moment a trig problem appears.

**Pythagorean identity** is the only relationship you cannot derive from something more basic, so treat it as the spine of the chapter: $\sin^2\theta + \cos^2\theta = 1$ (dimensionless ratio, $\theta$ in radians). From it, dividing by $\cos^2\theta$ gives $1 + \tan^2\theta = \sec^2\theta$, and dividing by $\sin^2\theta$ gives $1 + \cot^2\theta = \csc^2\theta$. Those three lines let you rewrite any expression in any single trigonometric function.

When solving an equation, reduce everything to one function first, factor, then write the **general solution** $x = n\pi + \alpha$ or $x = 2n\pi \pm \alpha$, $n \in \mathbb{Z}$, before pruning to the domain ECAT specifies (usually $[0, 2\pi]$).

> 💡 **High-Yield Memory Hook:** **"Sine and Cosine are Siblings, Sine-Cosine-Squared is 1"** — write **SC² = 1** in the margin; it is the Pythagorean check that fires before any ECAT calculation.

| Identity family | Master formula | When to reach for it |
|---|---|---|
| Pythagorean | $\sin^2\theta + \cos^2\theta = 1$ | Eliminating one function from a mixed expression |
| Sum / difference | $\sin(A \pm B) = \sin A \cos B \pm \cos A \sin B$ | Expanding compound angles like $\sin 75^\circ$ |
| Double-angle | $\cos 2\theta = 1 - 2\sin^2\theta$ | Halving an angle inside a squared term |

---

### 🟡 Standard — Regular Study (2d–2mo)

#### Identity families and what each one buys you

ECAT tests five identity families. The Pythagorean trio gives you conversions. The **reciprocal** family ($\csc\theta = 1/\sin\theta$, $\sec\theta = 1/\cos\theta$, $\cot\theta = 1/\tan\theta$) flips a function when a denominator looks ugly. The **quotient** family ($\tan\theta = \sin\theta/\cos\theta$) is what you use when the question hands you a sine and cosine ratio and asks for tangent.

Compound-angle identities deserve their own attention. The sine rule is symmetric — both terms carry the same sign — while the cosine rule flips sign on the product: $\cos(A+B) = \cos A \cos B - \sin A \sin B$ and $\cos(A-B) = \cos A \cos B + \sin A \sin B$. For tangent, $\tan(A \pm B) = \dfrac{\tan A \pm \tan B}{1 \mp \tan A \tan B}$; the $\mp$ in the denominator is the single most skipped character in ECAT answer sheets.

| Family | Trigger phrase in question | Manipulation it enables |
|---|---|---|
| Pythagorean | "Express in terms of $\sin\theta$ only" | Replace $\cos^2\theta$ by $1-\sin^2\theta$ |
| Sum / difference | "Find $\sin 75^\circ$ without calculator" | Split into $45^\circ + 30^\circ$ |
| Double-angle | "If $\sin\theta = 3/5$, find $\sin 2\theta$" | Multiply $2\sin\theta\cos\theta$ |
| Half-angle | "$\cos\theta = 1/2$, evaluate $\sin(\theta/2)$" | Use $\sin^2(\theta/2) = (1-\cos\theta)/2$ |
| Product-to-sum | "Simplify $2\sin A\cos B$" | Convert to $\sin(A+B)+\sin(A-B)$ |

#### The verification workflow

For "prove that LHS = RHS" items, never work both sides — pick the messier one and force it toward the cleaner one. The legal moves are: replace $\sin^2 + \cos^2$ with $1$, convert everything to sine and cosine, factor out a common function, and cancel. Cancellation of $\sin\theta$ or $\cos\theta$ is allowed only when you separately state the non-zero case; on ECAT, examiners accept that a single line saying "valid for $\theta \ne n\pi$" covers it.

#### Solving equations — a worked walkthrough

**Question.** Solve $\sin 2\theta = \cos\theta$ for $\theta \in [0, 2\pi]$, then list all solutions in general form.

**Working.** Replace $\sin 2\theta$ by $2\sin\theta\cos\theta$ to get $2\sin\theta\cos\theta - \cos\theta = 0$. Factor out $\cos\theta$: $\cos\theta\,(2\sin\theta - 1) = 0$.

So either $\cos\theta = 0 \Rightarrow \theta = \pi/2,\ 3\pi/2$, or $2\sin\theta - 1 = 0 \Rightarrow \sin\theta = 1/2 \Rightarrow \theta = \pi/6,\ 5\pi/6$.

**General solution.** Combine: $\theta = 2n\pi \pm \pi/2$ together with $\theta = n\pi + (-1)^n \pi/6$, $n \in \mathbb{Z}$.

> ⚠️ **Examiner Trap:** If you factor $\cos\theta$ out without noting it, you still get the correct *specific* answers, but you lose the second branch whenever the original equation has $\cos\theta$ in the denominator — and a different question on the same paper can punish exactly that omission.

#### Conversion between degrees and radians

ECAT calculators are not permitted, so every answer you write in radian measure must come from a known anchor: $30^\circ = \pi/6$, $45^\circ = \pi/4$, $60^\circ = \pi/3$, $90^\circ = \pi/2$, $180^\circ = \pi$. Memorise them as the five-stop ruler $6{-}4{-}3{-}2{-}1$ (denominators) for the angles $30^\circ, 45^\circ, 60^\circ, 90^\circ, 180^\circ$ — same denominators, same order.

> 📌 **Formula Check:** Every trig identity is dimensionless; every input angle must be in **radians** unless the question prints the degree symbol. A bare number next to $\sin(\cdot)$ without a unit is implicitly radians.

---

### 🔴 Extended — Deep Study (3mo+)

#### Edge cases that surface only on harder items

Three boundaries separate a confident student from a top scorer on this topic.

1. **The half-angle radical sign.** $\sin(\theta/2) = \pm\sqrt{(1-\cos\theta)/2}$. The sign depends on the quadrant of $\theta/2$, not $\theta$. If $\theta = 300^\circ$, then $\theta/2 = 150^\circ$, which sits in quadrant II where sine is positive. Choose the sign by reducing $\theta/2$ first, never by looking at $\theta$.
2. **Denominator zero under a cot or tan.** $\tan\theta \cdot \cot\theta = 1$ is only valid when both sides are defined. The identity fails at $\theta = n\pi/2$ for tangent and $\theta = n\pi$ for cotangent. Cross-multiplying silently discards the pole.
3. **Period vs domain.** $2\pi$ is the period of $\sin$ and $\cos$, but $\pi$ is the period of $\tan$ and $\cot$. A "general solution" question for $\tan 2\theta = 1$ yields $\theta = \pi/8 + n\pi/2$, not $\theta = \pi/8 + n\pi$.

#### Inverse trigonometric principal values

ECAT occasionally asks for $\arcsin(1/2)$ or $\arccos(-1)$. The principal range of $\arcsin$ is $[-\pi/2,\ \pi/2]$, of $\arccos$ is $[0,\ \pi]$, and of $\arctan$ is $(-\pi/2,\ \pi/2)$. So $\arcsin(1/2) = \pi/6$, $\arccos(-1) = \pi$, $\arctan(-1) = -\pi/4$. Anything outside these ranges belongs to the general solution, not to the principal value.

#### Common mistake register

- Writing $\sin(A+B) = \sin A + \sin B$ and losing a mark on a $\sin 75^\circ$ item.
- Stopping at $\theta = \pi/6$ for $\sin\theta = 1/2$ and missing $\theta = 5\pi/6$.
- Treating $\cos^2\theta$ as $(\cos\theta)^2$ correctly, but then writing $1 - \sin^2\theta$ as $(1-\sin\theta)^2$.
- Using the wrong sign in $\tan(A-B)$ because the denominator flips independently of the numerator.
- Reducing $\sin(-\theta)$ to $-\sin\theta$ correctly but writing $\cos(-\theta) = -\cos\theta$ — cosine is even.

#### Two advanced practice prompts

1. Find all $\theta \in [0, 2\pi]$ satisfying $2\cos^2\theta + 3\sin\theta = 0$, and rewrite the full general solution in two equivalent forms using $n\pi + \alpha$ and $2n\pi \pm \alpha$ notation.
2. If $\sin\alpha = 4/5$ with $\alpha \in (\pi/2,\pi)$ and $\cos\beta = -5/13$ with $\beta \in (\pi,3\pi/2)$, compute $\sin(\alpha - \beta)$ without a calculator and verify the sign of every term against the quadrant of $(\alpha - \beta)$.

#### Connection to neighbouring ECAT topics

Identities feed directly into **complex numbers** (De Moivre's theorem is just repeated application of the sum formula), into **coordinate geometry** (parametric equations of a circle use $\cos\theta$, $\sin\theta$), and into **calculus** (the derivative $\frac{d}{d\theta}\sin\theta = \cos\theta$ is most cleanly proved through the sum identity and the limit definition). Mastering the identity set here pays compound interest across the rest of the syllabus.

> 📌 **Boundary Check:** Every identity you write on the answer sheet carries an implicit "defined wherever all terms exist" clause. State the restriction explicitly the first time you divide by a trig function, then move on.

---

## Continue your study

- **[View this topic in your ECAT (Engineering College Admission Test) roadmap](/roadmap/?exam=ecat&duration=1mo)** — see where "Trigonometry: Identities and Equations" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=ecat&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ECAT (Engineering College Admission Test) exam overview](/exams/ecat/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/ecat/mathematics/)** — browse sibling topics in this subject

*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
