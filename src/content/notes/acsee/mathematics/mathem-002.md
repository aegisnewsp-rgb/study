---
exam: acsee
examName: "ACSEE (Tanzania)"
subject: mathematics
subjectName: "Mathematics"
topic: mathem-002
topicName: "Integration"
weight: 5
country: tanzania
generated: "2026-10-13T10:50:00"
lastUpdated: "2026-10-13"
---

# Integration — ACSEE (Tanzania)

Integration is the reverse operation of differentiation: an antiderivative has a given integrand as its derivative. On NECTA 142/1, it is the heaviest calculus topic alongside Differentiation, sharing the highest weight tier. Its applications include signed change, area, volume, and numerical integration.

> Verify the live syllabus, examination format, and any in-year changes on https://necta.go.tz before planning around the figures below.

### 🟢 Lite — Quick Review (1h-1d)

**An indefinite integral is the family of all antiderivatives of an integrand, differing by an arbitrary constant.**

Here \(x\) is the independent variable, \(n\) is a real exponent, \(C\in\mathbb R\) is arbitrary, and trigonometric arguments are in radians.

| Integral | Antiderivative |
|---|---|
| \(\displaystyle \int x^n\,dx\) | \(\displaystyle \frac{x^{n+1}}{n+1}+C,\quad n\ne-1\) |
| \(\displaystyle \int\frac1x\,dx\) | \(\ln|x|+C,\quad x\ne0\) |
| \(\displaystyle \int\sin x\,dx\) | \(-\cos x+C\) |
| \(\displaystyle \int\cos x\,dx\) | \(\sin x+C\) |
| \(\displaystyle \int e^x\,dx\) | \(e^x+C\) |
| \(\displaystyle \int\frac{1}{\sqrt{1-x^2}}\,dx\) | \(\arcsin x+C,\quad |x|<1\) |
| Constant of integration | Add \(+C\) to every indefinite result |

1. Simplify first, then use a standard antiderivative.
2. Substitute when a derivative factor is present.
3. Use integration by parts for products; choose \(u\) by LIATE and repeat when needed.
4. Use partial fractions for proper rational functions; use geometry or trapezoids for definite applications.

> **Memory hook:** Differentiate every primitive to recover its integrand; retain \(+C\) exactly when the integral is indefinite.

### 🟡 Standard — Exam Prep (3d-3w)

#### 1. Substitution: \(u=\sin x\)

1. For angle \(x\) in radians, define \(\displaystyle I=\int\frac{\cos x}{1+\sin x}\,dx\), set \(u=\sin x\), and obtain \(du=\cos x\,dx\).
2. Hence \(\displaystyle I=\int\frac{du}{1+u}=\ln|1+u|+C=\ln|1+\sin x|+C\).

#### 2. Integration by parts and a second pass

1. For differentiable functions \(u,v\), \(\displaystyle \int u\,dv=uv-\int v\,du\). LIATE ranks logarithmic, inverse trigonometric, algebraic, trigonometric, and exponential types; choose the earlier type as \(u\).
2. For \(\displaystyle I_1=\int xe^x\,dx\), take \(u=x\), \(dv=e^x\,dx\), giving \(\displaystyle I_1=xe^x-\int e^x\,dx=(x-1)e^x+C_1\), where \(C_1\) is arbitrary.
3. A first pass for \(\displaystyle I_2=\int x^2e^x\,dx\) gives \(\displaystyle I_2=x^2e^x-2\int xe^x\,dx\); the second pass then gives \(\displaystyle I_2=e^x(x^2-2x+2)+C\).

> **Examiner trap:** Choosing \(u=e^x\) in a polynomial–exponential product reverses the useful LIATE choice; reduce the polynomial degree instead.

#### 3. Definite integral and area under a curve

1. Let \(x\) be the numerical value of a horizontal distance in metres and \(f(x)=x\,\mathrm m\), which is positive for \(0\le x\le2\). The area \(A\), measured in square metres (\(\mathrm m^2\), dimension \(L^2\)), is \(\displaystyle A=\int_0^2x\,dx=\left[\frac{x^2}{2}\right]_0^2\).
2. Substituting the limits now gives \(\displaystyle A=\left(\frac{2^2}{2}-\frac{0^2}{2}\right)\mathrm m^2=2\mathrm m^2\).

#### 4. Volume by disc or washer

1. Rotate the same region about the \(x\)-axis. The outer radius is \(R=x\,\mathrm m\), the inner radius is \(r=0\), and \(\pi\) is dimensionless; thus \(\displaystyle V=\pi\int_0^2(R^2-r^2)\,dx\), with \(V\) in cubic metres (\(\mathrm m^3\), dimension \(L^3\)).
2. Substitution gives \(\displaystyle V=\pi\int_0^2x^2\,dx=\pi\left[\frac{x^3}{3}\right]_0^2=\frac{8\pi}{3}\,\mathrm m^3\approx8.38\,\mathrm m^3\).

#### 5. Trapezoidal rule

1. For \(n\) equal intervals of width \(h\), sampled at abscissae \(x_i\) with ordinates \(f_i\), the approximate area is \(\displaystyle T_n=\frac h2\left[f_0+2\sum_{i=1}^{n-1}f_i+f_n\right]\), where \(i\) is the sample index.
2. Take \(x_i\) as the numerical distance in metres and \(f(x)=x^2\,\mathrm m\), a height in metres, so \(f_i\) is in \(\mathrm m\) and the area is in \(\mathrm m^2\) (dimension \(L^2\)):

| \(x_i\) (m) | 0 | 1 | 2 | 3 |
|---|---:|---:|---:|---:|
| \(f_i\) (m) | 0 | 1 | 4 | 9 |

3. With \(n=3\) intervals and \(h=1\,\mathrm m\), the two interior ordinates are doubled and the endpoints are not: \(\displaystyle T_3=\frac{h}{2}\big[f_0+2(f_1+f_2)+f_3\big]=\frac{1}{2}\big[0+2(1+4)+9\big]\mathrm m^2=\frac{19}{2}\,\mathrm m^2=9.5\,\mathrm m^2\).

4. Sanity check: the exact area is \(\int_0^3 x^2\,dx=\frac{27}{3}=9\,\mathrm m^2\). The trapezoidal value sits slightly **above** it because \(x^2\) is convex, so straight chords over-estimate. A numerical rule that lands exactly on the exact value here is a red flag, not a result.

### 🔴 Deep — Mastery (1mo+)

For a proper rational function \(P(x)/Q(x)\), clear denominators and compare coefficients. For distinct simple roots, the cover-up rule is \(\displaystyle A_i=\frac{P(r_i)}{Q'(r_i)}\), where \(P,Q\) are polynomials, \(A_i\) is the coefficient of \(1/(x-r_i)\), \(r_i\) is a root, and \(Q'\) is the derivative of \(Q\).

1. For the quadratic example \(\displaystyle I=\int\frac{2x+1}{x^2-5x+6}\,dx\), write \(\displaystyle \frac{2x+1}{(x-2)(x-3)}=\frac A{x-2}+\frac B{x-3}\), where \(A,B\) are constants.
2. Clearing denominators gives \(2x+1=A(x-3)+B(x-2)\). Comparing coefficients gives \(A+B=2\) and \(3A+2B=-1\), so \(A=-5\) and \(B=7\).
3. Therefore \(\displaystyle I=-5\ln|x-2|+7\ln|x-3|+C\).

- Vertical shells use \(\displaystyle V=2\pi\int_a^b\rho(x)s(x)\,dx\), where \(a,b\) are axial bounds, \(\rho\) is shell radius, and \(s\) is shell height. For \(y=x\) on \(0\le x\le2\,\mathrm m\) about the \(y\)-axis, \(\rho=s=x\,\mathrm m\), so \(\displaystyle V=2\pi\int_0^2x^2\,dx=\frac{16\pi}{3}\,\mathrm m^3\).
- For integer \(n\ge1\), \(\displaystyle \int x^n e^x\,dx=x^ne^x-n\int x^{n-1}e^x\,dx\). For integer \(n\ge2\) and angle \(x\) in radians, \(\displaystyle \int\sin^n x\,dx=-\sin^{n-1}x\cos x+(n-1)\int\sin^{n-2}x\,dx\).

For \(\displaystyle I_p=\int_1^\infty x^{-p}\,dx\), \(x>0\) is the integration variable and \(p\in\mathbb R\); it converges exactly when \(p>1\).

| Condition | Result | Test |
|---|---:|---|
| \(p>1\) | \(\displaystyle \frac1{p-1}\) | Convergent |
| \(p=1\) | Diverges | Logarithmic |
| \(p<1\) | Diverges | Power divergence |

### Common traps

1. Omitting \(+C\) from an indefinite integral.
2. Attaching an arbitrary constant to a definite result.
3. Choosing \(u\) in substitution without converting every differential.
4. Choosing \(u=e^x\) for \(x^2e^x\).
5. Writing \(\ln x\) where \(\ln|x|\) is required.
6. Treating a signed integral as geometric area without splitting at axis crossings.
7. Confusing outer, inner, and shell radii.
8. Giving trapezoidal endpoints a doubled weight.

### Concept comparison matrix

Here \(f\) is an integrand, \(F\) its antiderivative, \(a,b\) are bounds, \(R,r\) are disc radii, \(\rho,s\) are shell radius and height, and \(n\) is the number of equal subintervals.

| Confusion | First method | Second method | Choose when |
|---|---|---|---|
| Indefinite vs definite | \(\int f(x)\,dx=F(x)+C\) | \(\int_a^b f(x)\,dx=F(b)-F(a)\) | A family or a numerical value is required |
| Substitution vs parts | Change variable when a derivative factor appears | \(\int u\,dv=uv-\int v\,du\) for a product | Composition or multiplication dominates |
| Disc/washer vs shell | \(\pi\int(R^2-r^2)\,dx\) uses perpendicular slices | \(2\pi\int\rho s\,dx\) uses parallel slices | One set of radii is simpler |
| Trapezoidal vs Simpson | Uses straight lines; any integer \(n\) | Uses quadratics; requires even \(n\) | Choose according to interpolation and data |

## Continue your study

- **[View this topic in your ACSEE (Tanzania) roadmap](/roadmap/?exam=acsee&duration=1mo)** — see where "Integration" fits in your personalised plan
- **[Build a quick revision plan](/roadmap/?exam=acsee&duration=1d)** — 1-day sprint covering highest-weight topics
- **[ACSEE (Tanzania) exam overview](/exams/acsee/)** — pattern, eligibility, and syllabus
- **[All Mathematics notes](/notes/acsee/mathematics/)** — browse sibling topics in this subject
