---
exam: gate
examName: "GATE"
subject: mathematics
subjectName: "Engineering Maths"
topic: engine-008
topicName: "Topic 8"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Joint Distributions and Sampling Theory

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

## **Quick Reference Table**

| Concept | Formula |
|---|---|
| Joint PMF $P_{X,Y}(x,y)$ | $P(X=x, Y=y)$ |
| Marginal of $X$ | $P_X(x) = \sum_y P_{X,Y}(x,y)$ |
| Covariance | $\text{Cov}(X,Y) = E[XY] - E[X]E[Y]$ |
| Correlation | $\rho_{XY} = \dfrac{\text{Cov}(X,Y)}{\sigma_X\sigma_Y}$ |
| Independence | $P_{X,Y}(x,y) = P_X(x)\cdot P_Y(y)$ |
| CLT | $\dfrac{\bar{X}-\mu}{\sigma/\sqrt{n}} \to N(0,1)$ |

**Sampling Distributions:**
- $\chi^2_n = Z_1^2+\cdots+Z_n^2$ with $n$ degrees of freedom
- $T_{n-1} = \dfrac{Z}{\sqrt{\chi^2_n/n}}$ where $Z\sim N(0,1)$
- $F_{m,n} = \dfrac{\chi^2_m/m}{\chi^2_n/n}$

⚡ **GATE trap:** Correlation $|\rho|=1$ implies perfect linear relationship, not just "very correlated." Also, $\text{Cov}(X,Y)=0$ does **not** imply independence — only the reverse is true.

⚡ **GATE shortcut:** For small samples from normal populations, always use $t$, $\chi^2$, or $F$ distributions rather than the normal. The $Z$-distribution is only for large $n$ or known $\sigma$.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

## **Joint Probability Distributions**

### Discrete Case

**Joint PMF:** $P_{X,Y}(x,y) = P(X=x \cap Y=y)$

**Marginal distributions:**
$$P_X(x) = \sum_{y} P_{X,Y}(x,y), \quad P_Y(y) = \sum_{x} P_{X,Y}(x,y)$$

**Conditional PMF:**
$$P_{X|Y}(x|y) = \frac{P_{X,Y}(x,y)}{P_Y(y)}, \quad P_Y(y)>0$$

**Independence:** $X$ and $Y$ are independent iff $P_{X,Y}(x,y) = P_X(x)\cdot P_Y(y)$ for all $x,y$.

### Continuous Case

**Joint PDF:** $f_{X,Y}(x,y) \ge 0$, $\int_{-\infty}^{\infty}\int_{-\infty}^{\infty} f_{X,Y}(x,y)\,dx\,dy = 1$

**Marginal PDFs:**
$$f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x,y)\,dy, \quad f_Y(y) = \int_{-\infty}^{\infty} f_{X,Y}(x,y)\,dx$$

**Conditional PDF:**
$$f_{X|Y}(x|y) = \frac{f_{X,Y}(x,y)}{f_Y(y)}, \quad f_Y(y)>0$$

**Independence:** $f_{X,Y}(x,y) = f_X(x)\cdot f_Y(y)$ for all $x,y$.

## **Covariance and Correlation**

$$\text{Cov}(X,Y) = E[XY] - E[X]\cdot E[Y]$$

**Key properties:**
- $\text{Cov}(X,X) = \text{Var}(X)$
- $\text{Cov}(aX+b, Y) = a\cdot\text{Cov}(X,Y)$
- $\text{Var}(X+Y) = \text{Var}(X) + \text{Var}(Y) + 2\text{Cov}(X,Y)$
- If $X,Y$ independent → $\text{Cov}(X,Y) = 0$ (but **not vice versa**)

**Correlation coefficient:**
$$\rho_{XY} = \frac{\text{Cov}(X,Y)}{\sigma_X\sigma_Y}, \quad -1 \le \rho_{XY} \le 1$$

- $|\rho|=1$ → perfect linear relationship
- $\rho=0$ → **uncorrelated** (covariance = 0)
- $\rho>0$ → positive relationship | $\rho<0$ → negative relationship

**GATE 2019 hint:** Questions often give $E[X]$, $E[Y]$, $E[XY]$ and ask for covariance or correlation. Just plug into the formula — no integration needed if values are given.

## **Central Limit Theorem (CLT)**

> The sum (or average) of $n$ iid random variables with mean $\mu$ and variance $\sigma^2$ converges to $N(\mu, \sigma^2/n)$ as $n\to\infty$.

$$\bar{X} = \frac{1}{n}\sum_{i=1}^n X_i \xrightarrow{d} N\!\left(\mu, \frac{\sigma^2}{n}\right)$$

Or equivalently:
$$\frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \xrightarrow{d} N(0,1)$$

**GATE minimum $n$:** Generally $n\ge 30$ is sufficient for CLT to apply, regardless of the parent distribution. If $X_i$ are already normal, any $n$ works (exact result, not approximation).

**Application:** Even if $X_i$ come from Bernoulli, Poisson, or exponential distributions, $\bar{X}$ is approximately normal for moderate-to-large $n$.

## **Sampling Distributions**

### Chi-Square Distribution

$$\chi^2_n = Z_1^2 + Z_2^2 + \cdots + Z_n^2, \quad Z_i \sim N(0,1) \text{ iid}$$

- **df = $n$** (number of independent standard normals squared)
- **Mean:** $n$ | **Variance:** $2n$
- **Additive:** $\chi^2_{n_1} + \chi^3_{n_2} \sim \chi^2_{n_1+n_2}$
- **Used for:** variance inference, goodness-of-fit, independence tests
- **Critical values (right-tail):** $\chi^2_{0.05,10} \approx 18.31$, $\chi^2_{0.05,5} \approx 11.07$

### $t$-Distribution

$$T_{n-1} = \frac{Z}{\sqrt{\chi^2_{n-1}/(n-1)}}, \quad Z\sim N(0,1), \text{ independent of }\chi^2$$

- **df = $n-1$** | Symmetric, bell-shaped, heavier tails than normal
- As $n\to\infty$, $T_{n-1} \to N(0,1)$
- **Used for:** confidence intervals for $\mu$ when $\sigma^2$ is unknown
- **Critical values:** $t_{0.025,9} \approx 2.262$, $t_{0.05,9} \approx 1.833$

### $F$-Distribution

$$F_{m,n} = \frac{\chi^2_m/m}{\chi^2_n/n}, \quad \text{independent }\chi^2\text{s with } m,n \text{ df}$$

- **df = $(m,n)$** | Right-skewed, only defined for positive values
- $F_{m,n} = 1/F_{n,m}$ relationship
- **Used for:** comparing two variances, ANOVA
- **Critical values:** $F_{0.05,9,9} \approx 3.18$, $F_{0.05,5,10} \approx 3.33$

## **Common GATE Mistakes to Avoid**
1. Assuming $\text{Cov}=0$ implies independence — only true for jointly normal distributions
2. Using normal $Z$ instead of $t$-distribution when $\sigma^2$ is unknown (small sample)
3. Forgetting that $\chi^2$, $t$, and $F$ distributions require independence conditions
4. Miscounting degrees of freedom: $T_{n-1}$ has $n-1$ df (sample variance uses divisor $n-1$)
5. Mixing up which distribution applies to which statistic (sample mean vs sample variance)

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

## **Joint Distributions — Full Theory**

### Transformation Method for Joint PDFs

If $(X,Y)$ has joint PDF $f_{X,Y}(x,y)$ and we define new variables $U=g_1(X,Y)$, $V=g_2(X,Y)$ with invertible transformation, then:

$$f_{U,V}(u,v) = f_{X,Y}(x(u,v), y(u,v)) \cdot |J|$$

where $J$ is the absolute value of the Jacobian determinant:
$$J = \left|\frac{\partial(x,y)}{\partial(u,v)}\right| = \left|\begin{matrix} \partial x/\partial u & \partial x/\partial v \\ \partial y/\partial u & \partial y/\partial v \end{matrix}\right|$$

**GATE 2021 pattern:** Given a joint PDF over a region, find marginal of $U=X+Y$ or $V=X/(X+Y)$. This requires transformation + Jacobian integration.

### Sums of Independent Random Variables

**Convolution formula:**
$$f_{X+Y}(z) = \int_{-\infty}^{\infty} f_X(x)\,f_Y(z-x)\,dx \quad \text{(continuous)}$$
$$P_{X+Y}(k) = \sum_{j} P_X(j)\,P_Y(k-j) \quad \text{(discrete)}$$

**MGF approach (cleaner for GATE):** $M_{X+Y}(t) = M_X(t)\cdot M_Y(t)$. Find the MGF of the sum from individual MGFs — if it matches a known distribution, that's your answer.

**Important results:**
- $X\sim\text{Pois}(\lambda_1), Y\sim\text{Pois}(\lambda_2) \Rightarrow X+Y\sim\text{Pois}(\lambda_1+\lambda_2)$
- $X\sim N(\mu_1,\sigma_1^2), Y\sim N(\mu_2,\sigma_2^2) \Rightarrow X+Y\sim N(\mu_1+\mu_2,\sigma_1^2+\sigma_2^2)$
- $\text{Bin}(n_1,p)+\text{Bin}(n_2,p) \sim \text{Bin}(n_1+n_2,p)$

## **Conditional Expectation**

$$E[X|Y=y] = \sum_x x\cdot P_{X|Y}(x|y) \quad \text{or} \quad \int_{-\infty}^{\infty} x\,f_{X|Y}(x|y)\,dx$$

**Law of Total Expectation (LIE):** $E[E[X|Y]] = E[X]$
**Law of Total Variance (LTV):** $\text{Var}(X) = E[\text{Var}(X|Y)] + \text{Var}(E[X|Y])$

These are extremely powerful — GATE sometimes asks for $\text{Var}(X)$ given a two-stage experiment where $X|Y\sim \text{some distribution}$ with parameter $Y$.

**GATE 2022 hint:** "A fair die is rolled. If the result is $k$, a biased coin with $P(H)=k/6$ is tossed $k$ times. Let $X$ be the number of heads. Find $E[X]$ and $\text{Var}(X)$." Use LIE/LTV: $E[X|K=k]=k\cdot(k/6)=k^2/6$, so $E[X]=E[K^2/6]=\frac{1}{6}\cdot\frac{91}{6}\approx 2.53$.

## **Correlation vs Causation — Technical Notes**

**Bivariate Normal:** $(X,Y)$ is jointly normal iff every linear combination $aX+bY$ is normal. In this special case:
- $\text{Cov}(X,Y)=0$ **does** imply independence
- Conditional distribution $Y|X=x \sim N(\mu_Y+\rho\frac{\sigma_Y}{\sigma_X}(x-\mu_X),\,\sigma_Y^2(1-\rho^2))$

**Regression line of $Y$ on $X$:**
$$E[Y|X=x] = \mu_Y + \rho\frac{\sigma_Y}{\sigma_X}(x-\mu_X)$$

The slope $\rho\frac{\sigma_Y}{\sigma_X}$ minimises $E[(Y-(aX+b))^2]$. This is the **minimum mean squared error (MMSE)** linear predictor.

## **Sampling Theory — Exact Results**

For a random sample $X_1,\dots,X_n$ from $N(\mu,\sigma^2)$:

1. $\bar{X}\sim N(\mu, \sigma^2/n)$ — **exact**, for any $n$
2. $\dfrac{(n-1)S^2}{\sigma^2} \sim \chi^2_{n-1}$ — **exact**, independent of $\bar{X}$
3. $T_{n-1} = \dfrac{\bar{X}-\mu}{S/\sqrt{n}} \sim t_{n-1}$ — **exact**
4. If two independent samples: $\dfrac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2}\sim F_{n_1-1,n_2-1}$ — **exact**

**Confidence intervals (normal, unknown variance):**
- $\mu$: $\bar{x} \pm t_{\alpha/2,n-1}\cdot \dfrac{s}{\sqrt{n}}$
- $\sigma^2$: $\dfrac{(n-1)s^2}{\chi^2_{\alpha/2,n-1}} \le \sigma^2 \le \dfrac{(n-1)s^2}{\chi^2_{1-\alpha/2,n-1}}$

**Two-sample $F$-test logic:** To test $H_0:\sigma_1^2=\sigma_2^2$, compute $F = \dfrac{s_1^2}{s_2^2}$ and compare to $F_{\alpha/2, n_1-1, n_2-1}$. Only applies under normality.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
