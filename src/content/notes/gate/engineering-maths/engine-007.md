---
exam: gate
examName: "GATE"
subject: mathematics
subjectName: "Engineering Maths"
topic: engine-007
topicName: "Topic 7"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Probability and Statistics — Distributions

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

**Distributions to Memorise for GATE**

| Distribution | PMF/PDF | Mean | Variance |
|---|---|---|---|
| Binomial | $P(X=r) = \binom nr p^r q^{n-r}$ | $np$ | $npq$ |
| Poisson | $P(X=r) = \dfrac{e^{-\lambda}\lambda^r}{r!}$ | $\lambda$ | $\lambda$ |
| Normal | $f(x) = \dfrac{1}{\sigma\sqrt{2\pi}}e^{-(x-\mu)^2/2\sigma^2}$ | $\mu$ | $\sigma^2$ |
| Exponential | $f(x)=\lambda e^{-\lambda x}, x\ge0$ | $\dfrac{1}{\lambda}$ | $\dfrac{1}{\lambda^2}$ |

**Key formulas at a glance:**
- **Bayes' Theorem:** $P(A|B) = \dfrac{P(B|A)\cdot P(A)}{P(B)}$
- **Conditional Probability:** $P(A\cap B) = P(A)\cdot P(B|A)$
- **Standard Normal:** $Z = \dfrac{X-\mu}{\sigma}$, use $Z$-tables
- **Poisson as limit of Binomial:** when $n\to\infty$, $p\to0$, $np=\lambda$

⚡ **GATE trap:** Students often confuse "memoryless" property — it belongs to the **exponential** distribution, not the normal or Poisson. The exponential is the only continuous distribution that is memoryless.

⚡ **GATE shortcut:** For normal distribution problems, always standardise to $Z$ first. GATE questions usually give $P(Z<2)$ style values in the question itself or expect you to use symmetry $P(|Z|<a)=2P(Z<a)-1$.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

## **Binomial Distribution**

$X\sim B(n,p)$ models **$n$ independent Bernoulli trials**, each with success probability $p$.

$$P(X=r) = \binom{n}{r} p^r (1-p)^{n-r}, \quad r=0,1,\dots,n$$

- **Mean:** $\mu = np$ | **Variance:** $\sigma^2 = np(1-p)$
- **Mode:** $\lfloor (n+1)p \rfloor$ (most likely number of successes)
- **Additive property:** If $X_1 \sim B(n_1,p)$ and $X_2 \sim B(n_2,p)$ independently, then $X_1+X_2 \sim B(n_1+n_2,p)$

**When to use it:** Fixed number of trials, two outcomes per trial, constant $p$.

## **Poisson Distribution**

$X\sim P(\lambda)$ is a **limit of binomial** as $n\to\infty$, $p\to0$, $np\to\lambda$.

$$P(X=r) = \frac{e^{-\lambda}\lambda^r}{r!}, \quad r=0,1,2,\dots$$

- **Mean = Variance = $\lambda$** (this is unique among common distributions)
- **Additive:** If $X_1\sim P(\lambda_1)$, $X_2\sim P(\lambda_2)$ independent, then $X_1+X_2\sim P(\lambda_1+\lambda_2)$
- Used for **rare events**: arrivals per unit time, defects per unit area, etc.

**GATE Question Pattern (2019, 2016):** "If $X$ and $Y$ are independent Poisson with parameters 3 and 5, find $P(X+Y=4)$." Use additive property → $P(X+Y=4) = \dfrac{e^{-8}\cdot 8^4}{4!}$.

## **Normal Distribution**

$X\sim N(\mu,\sigma^2)$ is the most important continuous distribution in GATE.

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$$

- **Bell-shaped**, symmetric about $\mu$
- **68-95-99.7 rule:** $P(\mu\pm\sigma)\approx68\%$, $P(\mu\pm2\sigma)\approx95\%$, $P(\mu\pm3\sigma)\approx99.7\%$
- **Standard normal $Z\sim N(0,1)$:** Always standardise: $Z = \dfrac{X-\mu}{\sigma}$
- **Linear combinations:** Any linear combination of independent normal variables is also normal.

**GATE shortcut:** Use $Z$-table values — common ones to memorise:
- $P(Z<1)=0.8413$, $P(Z<1.645)=0.95$, $P(Z<2)=0.9772$, $P(Z<2.576)=0.995$

## **Exponential Distribution**

$X\sim \text{Exp}(\lambda)$ models **waiting time** until the first event in a Poisson process.

$$f(x) = \lambda e^{-\lambda x}, \quad x\ge 0; \quad F(x)=1-e^{-\lambda x}$$

- **Mean:** $\frac{1}{\lambda}$ | **Variance:** $\frac{1}{\lambda^2}$
- **Memoryless property:** $P(X>s+t | X>s) = P(X>t)$
- **Relationship:** If $N(t)\sim P(\lambda t)$ counts events, the inter-arrival time $\sim \text{Exp}(\lambda)$

## **Bayes' Theorem and Conditional Probability**

$$P(A|B) = \frac{P(B|A)\cdot P(A)}{P(B)}, \quad P(B) = \sum_i P(B|A_i)P(A_i)$$

**GATE frequently combines Bayes with discrete distributions.**
Example pattern: "A manufacturing process produces $1\%$ defective items. A test detects a defective with probability $0.99$ and a non-defective with probability $0.95$. If an item tests positive, find the probability it is actually defective." Use Bayes on events $D$ (defective) and $T$ (tests positive).

## **Common GATE Mistakes to Avoid**
1. Confusing binomial ($n$ finite, $p$ constant) with Poisson (rare events limit)
2. Forgetting to standardise normal before using $Z$-tables
3. Applying memoryless property to wrong distribution
4. Using variance formula for binomial as $p(1-p)$ instead of $np(1-p)$
5. Mixing up $P(A|B)$ and $P(B|A)$ in Bayes' calculations

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

## **Binomial Distribution — Deep Dive**

The binomial distribution arises from the sum of $n$ independent Bernoulli$(p)$ trials:

$$X = \sum_{i=1}^n X_i, \quad X_i \in \{0,1\}, \quad P(X_i=1)=p$$

**Moment generating function (MGF):**
$$M_X(t) = (pe^t + q)^n, \quad q=1-p$$

**Recurrence relation for probabilities:**
$$\frac{P(X=r)}{P(X=r-1)} = \frac{(n-r+1)p}{rq}, \quad r\ge 1$$

This recurrence lets you compute $P(X=r)$ iteratively without factorials — useful when $n$ is large and $p$ is moderate.

**Mode derivation:** The ratio $P(X=r)/P(X=r-1) > 1$ when $r < (n+1)p$. So mode is either $\lfloor(n+1)p\rfloor$ or $(n+1)p-1$ (when $(n+1)p$ is integer, both $r$ and $r-1$ are modes).

**Approximation relationships:**
- **Poisson approximation:** When $n\ge 20$ and $p\le 0.05$, $B(n,p)\approx P(np)$ works well.
- **Normal approximation:** When $np>5$ and $n(1-p)>5$, $B(n,p)\approx N(np, np(1-p))$ with continuity correction.

**Continuity correction:** $P(a\le X\le b) \approx P\!\left(\frac{a-0.5-np}{\sqrt{npq}} \le Z \le \frac{b+0.5-np}{\sqrt{npq}}\right)$

## **Poisson Distribution — Deep Dive**

The Poisson process satisfies three axioms: (1) independent increments, (2) stationary increments, (3) $P(N(h)\ge 2)=o(h)$. Under these, $N(t)\sim P(\lambda t)$.

**Sums of independent Poissons are Poisson** — this is frequently used in GATE problems involving combined arrival rates.

**Conditional distribution:** If $X_1\sim P(\lambda_1)$ and $X_2\sim P(\lambda_2)$ are independent, then:
$$X_1 | (X_1+X_2=n) \sim \text{Binomial}\!\left(n, \frac{\lambda_1}{\lambda_1+\lambda_2}\right)$$

This is a **negative binomial** result as well — it confirms the Poisson-Dirichlet structure.

**GATE 2020 style question:** "If $X$ and $Y$ are independent Poisson random variables with means 2 and 4 respectively, find $E[(X+Y)^2]$." 
Solution: $E[(X+Y)^2] = \text{Var}(X+Y) + [E(X+Y)]^2 = (2+4) + (6)^2 = 6+36 = 42$.

## **Normal Distribution — Deep Dive**

The normal distribution's **MGF:** $M_X(t) = \exp(\mu t + \frac{1}{2}\sigma^2 t^2)$

**Linear transformations preserve normality:**
- If $X\sim N(\mu,\sigma^2)$, then $aX+b \sim N(a\mu+b, a^2\sigma^2)$
- Standardisation: $Z = \dfrac{X-\mu}{\sigma} \sim N(0,1)$

**Central Limit Theorem connection:** For any distribution with mean $\mu$ and variance $\sigma^2$, $\dfrac{\bar{X}-\mu}{\sigma/\sqrt{n}} \to N(0,1)$ as $n\to\infty$. This is why normal appears everywhere in statistics.

**Skewness and kurtosis:**
- Normal has **skewness = 0**, **kurtosis excess = 0**
- Any departure from these signals non-normality

**Chi-square as a square of normals:** If $Z_1,\dots,Z_k$ are iid $N(0,1)$, then $\chi^2_k = Z_1^2+\cdots+Z_k^2 \sim \text{Chi-square}(k)$. This links the normal to the chi-square distribution.

## **Exponential Distribution — Deep Dive**

**Derivation from Poisson:** Inter-arrival times in a Poisson$(\lambda)$ process are iid $\text{Exp}(\lambda)$.

**Memoryless proof:** 
$$P(X>s+t|X>s) = \frac{P(X>s+t)}{P(X>s)} = \frac{e^{-\lambda(s+t)}}{e^{-\lambda s}} = e^{-\lambda t} = P(X>t)$$

**Rate vs mean:** Be careful — the parameter $\lambda$ in $f(x)=\lambda e^{-\lambda x}$ is the **rate**, so mean $=1/\lambda$. Some textbooks use the scale parameter $\beta=1/\lambda$ instead, writing $f(x)=\frac{1}{\beta}e^{-x/\beta}$.

**Minimum of exponentials:** If $X_1,\dots,X_n$ are independent $\text{Exp}(\lambda_i)$, then $\min(X_1,\dots,X_n)\sim \text{Exp}(\sum \lambda_i)$.

## **Bayes' Theorem — Applications**

**Continuous version:** If $\theta$ has a prior density $\pi(\theta)$ and data $x$ has likelihood $f(x|\theta)$, then:
$$\pi(\theta|x) = \frac{f(x|\theta)\pi(\theta)}{\int f(x|\theta)\pi(\theta)\,d\theta}$$

This is the foundation of Bayesian inference, though GATE focuses on the discrete/finite case.

**GATE 2018 hint:** Bayes + Binomial appears as "posterior probability" problems. Practice: $P(\theta=0.3|X=5)$ where $X\sim B(10,\theta)$ and $\theta$ has prior $P(\theta=0.3)=P(\theta=0.5)=0.5$.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
