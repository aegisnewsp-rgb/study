---
exam: gate
examName: "GATE"
subject: mathematics
subjectName: "Engineering Maths"
topic: engine-010
topicName: "Topic 10"
weight: 3
country: gate
generated: "2026-03-25T17:00:00"
---

# Numerical Methods — Interpolation and Integration

### 🟢 Lite — Quick Review (1h–1d)

> Rapid summary for last-minute revision before your exam.

## **Interpolation Methods at a Glance**

| Method | Best Used When | Key Formula |
|---|---|---|
| **Newton's Forward** | Data points equally spaced, near start of table | Uses forward difference $\Delta$ |
| **Newton's Backward** | Data equally spaced, near end of table | Uses backward difference $\nabla$ |
| **Lagrange** | Unequally spaced data, or no need for finite differences | $L(x) = \sum y_i \ell_i(x)$ |
| **Trapezoidal Rule** | Approximate $\int_a^b f(x)dx$ | $T = \dfrac{h}{2}[f_0 + 2f_1 + \cdots + 2f_{n-1} + f_n]$ |
| **Simpson's 1/3 Rule** | Even $n$, smooth function | $S = \dfrac{h}{3}[f_0 + 4f_1 + 2f_2 + 4f_3 + \cdots + f_n]$ |

**Newton's divided difference table** is required for unequally spaced data. For equally spaced, forward/backward differences are more efficient.

⚡ **GATE trap:** For **Lagrange interpolation**, the degree of the interpolating polynomial equals $(n-1)$ where $n$ is the number of data points. For $n$ points, you get degree $n-1$.

⚡ **GATE shortcut:** Simpson's rule requires **$n$ to be even** (i.e., an odd number of points, $n=2m$). If $n$ is odd, either use Simpson's for the first $(n-1)$ intervals and trapezoidal for the last interval, or state that Simpson's cannot be directly applied.

---

### 🟡 Standard — Regular Study (2d–2mo)

> Standard content for students with a few days to months.

## **Newton's Forward Difference Interpolation**

Used when data points are **equally spaced** and you are interpolating near the **beginning** of the table.

### Forward Difference Table

| $x$ | $y$ | $\Delta y$ | $\Delta^2 y$ | $\Delta^3 y$ |
|---|---|---|---|---|
| $x_0$ | $y_0$ | | | |
| $x_1$ | $y_1$ | $\Delta y_0 = y_1-y_0$ | | |
| $x_2$ | $y_2$ | $\Delta y_1$ | $\Delta^2 y_0 = \Delta y_1 - \Delta y_0$ | |
| $x_3$ | $y_3$ | $\Delta y_2$ | $\Delta^2 y_1$ | $\Delta^3 y_0$ |

Step size: $h = x_1 - x_0$

### Interpolating Polynomial
$$f(x) \approx y_0 + \frac{p}{1!}\Delta y_0 + \frac{p(p-1)}{2!}\Delta^2 y_0 + \frac{p(p-1)(p-2)}{3!}\Delta^3 y_0 + \cdots$$

where $p = \dfrac{x - x_0}{h}$

**GATE 2018 pattern:** Given a forward difference table with 4-5 rows, find the value at a specific $x$. Construct the polynomial up to the last non-zero difference column and evaluate.

## **Newton's Backward Difference Interpolation**

Used when data points are **equally spaced** and you are interpolating near the **end** of the table.

### Backward Difference Table

Uses $\nabla$ operator: $\nabla y_i = y_i - y_{i-1}$, $\nabla^2 y_i = \nabla y_i - \nabla y_{i-1}$, etc.

$$f(x) \approx y_n + \frac{q}{1!}\nabla y_n + \frac{q(q+1)}{2!}\nabla^2 y_n + \frac{q(q+1)(q+2)}{3!}\nabla^3 y_n + \cdots$$

where $q = \dfrac{x - x_n}{h}$ (negative for points before $x_n$)

**Practical rule:** If interpolating at the start of the table, use forward. At the end, use backward. In the middle, either works but prefer the side with more non-zero forward/backward differences.

## **Lagrange Interpolation**

### Formula
$$L_n(x) = \sum_{i=0}^{n} y_i \cdot \ell_i(x), \quad \ell_i(x) = \prod_{\substack{j=0\\j\neq i}}^{n} \frac{x - x_j}{x_i - x_j}$$

- **Degree:** $n$ (if $n+1$ data points)
- **No need for equally spaced data** — works for any $x_i$
- **No recurrence** — each term computed independently
- **Error term:** $R_n(x) = \dfrac{f^{(n+1)}(\xi)}{(n+1)!}\prod_{i=0}^{n}(x-x_i)$ for some $\xi\in[a,b]$

**GATE 2016:** Given $(x_0,y_0)=(0,1)$, $(x_1,y_1)=(1,3)$, $(x_2,y_2)=(3,55)$, find the Lagrange polynomial and evaluate at $x=2$. Compute $\ell_0(2)=\frac{(2-1)(2-3)}{(0-1)(0-3)}=\frac{1}{3}$, $\ell_1(2)=\frac{(2-0)(2-3)}{(1-0)(1-3)}=-1$, $\ell_2(2)=\frac{(2-0)(2-1)}{(3-0)(3-1)}=\frac{2}{6}=\frac{1}{3}$. Then $L(2)=1\cdot\frac{1}{3}+3(-1)+55\cdot\frac{1}{3}=\frac{1-9+55}{3}=\frac{47}{3}$.

## **Numerical Integration — Trapezoidal Rule**

### Single Panel (2 points)
$$T_1 = \frac{h}{2}[f(a) + f(b)]$$

### Multiple Panels ($n$ equal subintervals, $h=\frac{b-a}{n}$)
$$T_n = \frac{h}{2}\left[f(x_0) + 2\sum_{i=1}^{n-1}f(x_i) + f(x_n)\right]$$

### Error
$$E_T = -\frac{(b-a)^3}{12n^2}f''(\xi), \quad \xi\in(a,b)$$

The error is proportional to $f''(\xi)$ — trapezoidal rule is **exact for linear polynomials** ($f''=0$).

## **Simpson's 1/3 Rule**

### Requirement: $n$ must be even (i.e., $n=2m$ subintervals, $m$ parabolas)

### Formula ($n=2m$)
$$S_{2m} = \frac{h}{3}\left[f_0 + 4f_1 + 2f_2 + 4f_3 + \cdots + 4f_{2m-1} + f_{2m}\right]$$

Pattern: **odd coefficients = 4**, **even coefficients (excluding endpoints) = 2**

### Error
$$E_S = -\frac{(b-a)^5}{180n^4}f^{(4)}(\xi)$$

Simpson's is **exact for polynomials up to degree 3** ($f^{(4)}=0$ for degree $\le 3$). The trapezoidal is only exact up to degree 1.

### Simpson's 3/8 Rule (GATE reference)
Less common, used when $n=3$ (3 panels, 4 points):
$$S_{3/8} = \frac{3h}{8}[f_0 + 3f_1 + 3f_2 + f_3]$$

## **Comparing Trapezoidal vs Simpson's**

| Criteria | Trapezoidal | Simpson's 1/3 |
|---|---|---|
| Minimum $n$ | 1 panel | 2 panels (even $n$) |
| Exact for degree | 1 | 3 |
| Error order | $O(h^2)$ | $O(h^4)$ |
| Oscillation risk | Low | Can oscillate for rapidly changing $f$ |

**GATE choice hint:** If the question mentions $f$ is "smooth" or gives $f^{(4)}$, prefer Simpson's. If $f$ has sharp corners or discontinuities, prefer trapezoidal (more robust).

## **Common GATE Mistakes to Avoid**
1. Applying Simpson's when $n$ is odd — always check that $n$ is even first
2. Using forward differences for interpolation at the end of the table (use backward)
3. In Lagrange, writing $\ell_i(x)$ with the wrong sign in the denominator product
4. Forgetting that the error term in the interpolating polynomial involves $f^{(n+1)}(\xi)$, not $f^{(n)}(\xi)$
5. In the trapezoidal rule, not multiplying the interior points by 2

---

### 🔴 Extended — Deep Study (3mo+)

> Comprehensive coverage for students on a longer study timeline.

## **Derivation of Newton Forward Formula**

Start with the forward difference operator $\Delta f_i = f_{i+1}-f_i$. Using the identity:
$$f(x) = f_0 + \binom{p}{1}\Delta f_0 + \binom{p}{2}\Delta^2 f_0 + \binom{p}{3}\Delta^3 f_0 + \cdots$$
where $p = \dfrac{x-x_0}{h}$ and $\binom{p}{k} = \dfrac{p(p-1)\cdots(p-k+1)}{k!}$.

This follows from repeated application of the forward difference operator and Taylor expansion. The divided differences for equally spaced data reduce to $\Delta^k f_0 / h^k$.

**Why $\binom{p}{k}$?** Because $\Delta^k f_0 = h^k f^{(k)}(\xi)\cdot k! \cdot \binom{p}{k}$ by the Newton-Gregory formula.

## **Divided Differences and Newton General Form**

For **unequally spaced** data, divided differences replace forward/backward differences:

$$f[x_0,x_1] = \frac{f(x_1)-f(x_0)}{x_1-x_0}, \quad f[x_0,x_1,x_2] = \frac{f[x_1,x_2]-f[x_0,x_1]}{x_2-x_0}$$

The Newton interpolating polynomial is:
$$N(x) = f(x_0) + (x-x_0)f[x_0,x_1] + (x-x_0)(x-x_1)f[x_0,x_1,x_2] + \cdots$$

**Properties:**
- Divided differences are symmetric — order of points doesn't matter
- $f[x_0,\dots,x_n] = \dfrac{f^{(n)}(\xi)}{n!}$ for some $\xi$ (mean value theorem for divided differences)
- If $f$ is a polynomial of degree $n$, divided differences of order $>n$ are zero

## **Lagrange Remainder (Error) Derivation**

Given $n+1$ data points, the unique degree-$n$ interpolant $L_n(x)$ approximates $f(x)$. The remainder:
$$R_n(x) = f(x) - L_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}\prod_{i=0}^{n}(x-x_i)$$

**Proof sketch:** Define $g(t) = f(t) - L_n(t) - K\cdot\omega_{n+1}(t)$ where $\omega_{n+1}(t)=\prod_{i=0}^n(t-x_i)$ and $K$ is chosen so that $g(x)=0$ at $x$ (the point we're evaluating at). Then $g$ has $n+2$ zeros → by Rolle's theorem, $g^{(n+1)}$ has one zero, giving $K = \dfrac{f^{(n+1)}(\xi)}{(n+1)!}$.

**GATE consequence:** To bound the error, find $\max|f^{(n+1)}(\xi)|$ on the interval and multiply by $\dfrac{|\omega_{n+1}(x)|}{(n+1)!}$.

## **Gauss Quadrature — Beyond Simpson**

Trapezoidal ($n=1$) and Simpson's ($n=2$ sub-panels) are Newton-Cotes formulas. Gauss-Legendre quadrature chooses **optimal abscissae** (not at endpoints) to achieve higher precision:

### 2-point Gauss-Legendre
$$\int_{-1}^{1} f(x)\,dx \approx f\!\left(\frac{-1}{\sqrt{3}}\right) + f\!\left(\frac{1}{\sqrt{3}}\right)$$
Exact for polynomials up to degree 3.

### 3-point Gauss-Legendre
$$\int_{-1}^{1} f(x)\,dx \approx \frac{5}{9}f\!\left(-\sqrt{\frac{3}{5}}\right) + \frac{8}{9}f(0) + \frac{5}{9}f\!\left(\sqrt{\frac{3}{5}}\right)$$
Exact for polynomials up to degree 5.

**For arbitrary $[a,b]$:** Change variables $x = \frac{b-a}{2}t + \frac{b+a}{2}$, then apply Gauss-Legendre on $[-1,1]$.

## **Romberg Integration — Richardson Extrapolation**

Romberg combines trapezoidal approximations at different step sizes to cancel lower-order error terms:

$$T_{k+1} = \frac{4^{k}T_k - T_{k-1}}{4^{k}-1}$$

Here $T_k$ is the trapezoidal estimate with $2^k$ subintervals. Each iteration eliminates one error order:
- $T_1$: error $O(h^2)$
- $T_2$: error $O(h^4)$ (Simpson's appears as $T_2$)
- $T_3$: error $O(h^6)$, etc.

**GATE connection:** $T_2$ from Romberg exactly equals Simpson's rule. This connects two seemingly different methods.

## **Double Integrals — Iterated Numerical Integration**

For $\int_a^b \int_{y_1(x)}^{y_2(x)} f(x,y)\,dy\,dx$:

**Trapezoidal in 2D (rectangular grid):**
$$\iint f(x,y)\,dx\,dy \approx \frac{hk}{4}\sum_{i=0}^{m}\sum_{j=0}^{n} w_{ij} f(x_i,y_j)$$

with weights $w_{ij}$ = 1 at corners, 2 at edges on one side only, 4 at interior points, 4 at all non-corner boundary points.

**Simpson's 2D:** Apply Simpson's in one direction, then the other (requires $m,n$ both even).

## **GATE Previous Year Focus**

Questions from this topic in GATE typically ask:
1. **Fill in the difference table** from given data and find the interpolated value
2. **Compare errors** of trapezoidal vs Simpson's for a given $f$ (check $f''$ vs $f^{(4)}$)
3. **Identify the correct method** given $n$ and data spacing
4. **Lagrange polynomial construction** from 3 given points (direct substitution)

**GATE 2021:** "Using Lagrange interpolation with $x=-1,0,1$ and $f(-1)=3, f(0)=0, f(1)=1$, find $f(0.5)$." Solution: Compute $\ell_0(0.5) = \frac{(0.5-0)(0.5-1)}{(-1-0)(-1-1)} = \frac{0.5\times(-0.5)}{(-1)\times(-2)} = \frac{-0.25}{-2}=0.125$. Continue similarly → $L(0.5) = 3(0.125) + 0(\ell_1) + 1(0.875) = 1.25$.

---
*Content adapted based on your selected roadmap duration. Switch tiers using the selector above.*
